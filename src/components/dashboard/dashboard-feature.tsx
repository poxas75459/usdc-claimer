/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "53HNLzWUCvXjxK5wcd9Wyfyp8TJ4py7yEMSuTaDeiWiA6MQCKPQZSuFB2cHw1JEu3BU43t4AyLNVWaiqFgx5Zc1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcHPciJo5zNFrASYjNDWVUczAAWg4MnYoCJ4YaeREHogJwyztxFVCiB54UVwVigJ22nHLwziLaX8WNypz4kWSqK",
  "key1": "2XkqFqspDJk4roAWjB48REB8JpDrcvTvcsucBZXYsB9WA6E7g9P1QsR93RV5GNsirPbSjEkJ3RRn3uCzn9KjSrMU",
  "key2": "3ampmNm3vur8veAq9YbPNo1W5yTd132QFRUW7wQYcfpqUa7dZBkami2gkkkULQ16dnqkGbauoWYvtesL9xUFFQUY",
  "key3": "2jaNcanf5dYHhXcSww6LiyUq8X4PF2g5fdS3EBDzg8ZM7H7rDPHCRXLTzDtsUbtj6ozmTfM1Xt1iumku9JSHi5nQ",
  "key4": "2XGYnc9SW77SUZbDDo2mQFEd5jcvVa9xSa3Bg3H5uUpS23vV4u6Sdch2omVbVq1YcbruSHHPiza7gJ1dCtNgitmL",
  "key5": "CxwcKyMYCt3wgHc4BtfvUrk7dwv3VWjCcJeN18tyXrkd7XEthw2LHQnfT2JvAH9hp5eEWeRwGGu1Q71E9uMbVW3",
  "key6": "UonWHtVvj82X2cXATRcdHSDLR3x7vQLGgb2J1vVMXMSCrzwzCmRgXM4UTgor9X7g18WEg8qfM5NgGo1R6VoFxQ8",
  "key7": "4hyKBsPZvZmnkJEuoeK98bDBdb4Z3hz6f4haN8H9bmcyREPMSG1jqHHjR9mvtWTvLgTG2AvCPm48MMBBBYsMJBhc",
  "key8": "2JDb1R19HYqVL26HwJEjVY326XM3HJb4fav3XwoVb9Jw6FpPujwj8Cuycqm3v5zHKydGADX1RrZiqKra4gD3Ef4P",
  "key9": "5qtToQSu8PhBemytzbY88binmq1P4YsbvXoTD2sBj3wSx6my1vqKHMCw48EeViBXG1iPYnHaSkz1fAiyKZgw7EQg",
  "key10": "47cQMBUpZEfWpgfQbik57dLUmwrteK74xsDaEZD9NtHdfYCf6cTVDp4DYW6cKfVwPbYPmg65joN51Huxcutzt7km",
  "key11": "2Vz5SYcoJVdiWqSxGQPQ61hJk244o6nZsggNfM72AkXQMnVjJpuKR96cF6dZfBmykGN8dy4SQhik2aexQ8TsXMGb",
  "key12": "jQQgZZdh4MYomau1UbtdG8MhVVivGA8mknv4ZLoFwkAyLSg1PNxgqm7krN9pYSeh1HxGwTdSAMs3QMDUGXK4ESZ",
  "key13": "4wgQK3MGgDU4MK6onVJKby2PvHzPyPreKzPkyVBEno7F3F4xy6ibFG1BFdm7Xe2XupXHDVTFSAdyHhY1WwoH72S4",
  "key14": "2azVEk5gZjrsVe1FwumksgL8NEfGyaqU69fWXDZHRMeenwUrkoaQoLUhQi66Xk9J16Mp4abuu1bdLAxaJVteEwox",
  "key15": "483p1kZy24zvbNrtumTX5TFRmMgQ2xkpV87Uq2FibJVhVdPrexxfxU2QRmccd2LSvUuKGPwiib7XcvpDTmyaZrJk",
  "key16": "3Qp1VschqTK6oXDoam3Un8nPjpKzoFLx3s6vRCFu7CGSYybyTtL5Yhm4EVj4Ro9Cauey2rCLUXR2zEcdoXTSL3kq",
  "key17": "5DW8KgCnsPAi41DMdcYAiot5EZ41jTtiGnmbjd6jrHwpypAgJtjoLktwQ98iVYiWGmj6M9S9Af4vCQ8hx6bbYrqM",
  "key18": "67aKz6pKiuqLvRuoV1vSanTuJgf1vfYkyKfqiDuhMzAjyTqFg1LYvQwdfGnNqP3dbHuxqcYV17GNiEQiWj9qBUyr",
  "key19": "29d5tepDC6ueBEAAkDRaSfm71CZb6Vd2KBsebudbWyxvxPdrkSayVicfdwRPoFwTykZoLMJp3CAXGjr3ZJr9SGd7",
  "key20": "4pryrFB2K3LmUfxhmHAQcBELLQFD4uS2bdmBshLXiW3hqhgV37cCT1TukfRCirUS9mMkS1KqekLkoTPvuc9HvWiN",
  "key21": "2prBdtd8p2hRDhhYCRNHfJB2pJgjUN13gwb5cP7bGQd1GMe2VNYsXstehjUmyG7yMBHcoxmcanrwUizAs5eVSEPr",
  "key22": "2x6XrfMNZmqYpPmrPSRZKwoGRQ212bCHsyRJLFxJ4JBcXtJ6srUoR6jaCREJgD5VQgXCWUFXn4ma2dw257CXPUQ9",
  "key23": "3xxDKSszSUzf4TEntcyZjU8EY3piiFUcHcC2VBrWffk87ughmrQtEYWtAd95bBr491ug9o5wDxZA3EMrWvMKf3Kr",
  "key24": "4SeTZJYSCzGCjBCnQauebKaNLm7fh18hME2Y15NAXNAEXD74z4Xm6v7X3aQHywipMV7atUCDCW4VtfXQDJZr9nCd",
  "key25": "8EdcDsiCQq65pMqCSD4zfToBg2mP1iQMYZSaXPMKAgcc19KJiXk3BJBmr6QopoiHKy7TRVPzgsMKbn1u1EMFT53",
  "key26": "4nJQQmdgr7mTfywReY6w34JMXp3jY57rLXeHFiggD1P5wSvKKULQ23TCFrTGMWkmRAsawhGDZdsjUDwUf7pwHmxd",
  "key27": "LXsvBaFkQm3Lf4WcB775hgjL1rPsGnx6sKir6hRURWVBBDTkComnCqTXDihV4Eo1wdJzxK3hQdFzQTSgkHnGiqG",
  "key28": "44Er8Ptn2ecCdqv1W44uqPbVkuDSb1DLHiVrNwiBNuEMsfFgpryNry5c8Zxo2cAQCWDhAMfERcBJipKNMmdnUP3w",
  "key29": "Lf6bawnXJDBDBGsT6FkKzhdTyHGad89nNogUNvgH9WAhMrqHGg7WaDJEoqB5ckzRkZ1pXzgj6akKP3vgpooF6iD",
  "key30": "vahNMWCpjwN2fSSmZzgq9p1EMJTayZFMRKvifSpMLcctjWjWmXy6tAPxXAeDTjh68tagPxbw4S9yJZqY62WBPTB",
  "key31": "5vytJAWDxt7bhrktVZtsm8DSvJQW8ZsXdmdwLiVHyQdoZnwqKyBpg3utz9tgjh9UbSZde589APvgNUTSqXx3Ygsy",
  "key32": "4A6agNyKPDtASCGBNr1QyeNGGEss1VSntJSqXiyq1JJoeMWFhov2CgCJb2xfuRjXUhaAfwfBj5L8Wj455cVfAsRH",
  "key33": "35uXHZQRjEAq6MLStGtLuj786KtKMSSKGp5KnGfx6d7vqTY3eoZ8orjA5EFH1aERDVZTdZ8WwQTU9Bi1iuNmw65W",
  "key34": "h9A3iTxRPSSaBUJTLqQQQ168cL7QnweNNAoUqaUyTKNCg3Ny2AMXAPGCbkwCTPhpvHSeLx2sSchc7fnj5tG9PRh",
  "key35": "yYHVJ1xX1LUDaE1dZRSGUc2LqbTontx2AsSYmqfTKRitvMmrBPp4w8Ts92i9SbgxbpX7Q1EjVasRivXzo4sbVoh",
  "key36": "5VpBTYJafKRuUFwJhFq7BVodNzqtXisiKpsnj5KunqtQP9j7fkCgDMX6eHqWosv1d4gYuGLoA7zNDNeKX4Rt7xtp",
  "key37": "2WrnCAcU1URsXYZwKBeq9rceZHGwaKWShkpTFPfs95x2sirrvb5gb1Q7unutzkQtkCVshVWmRvPeva7euRwmgHG1",
  "key38": "5xfcVcLTE6nTSzoFHZuuLGbRMoJJm81PmvYnSSQUnKpQRK2sMZ6q1xth4WHdTFMbKhvGZxf72wjEEy4Q7hfCoBky",
  "key39": "42ue33MmhYijF8oY9twm8957QtpwGtRAdVXjMTQb1N9NSa8sBgn4JwNVaVohvspWSUkcrzJNemYUnvYsb7HU9YD9",
  "key40": "3J2fhWaLFhBxRvSpUnWtubhUctgKvgxxaQ2BNxZpnYuvnUWMVdNSFMEPAR7YqM8C8FsCszp2Mq95tF739rcdWCVZ",
  "key41": "3aC2EZSt7z512hBC5uHRFEQ79SPViw99uuDwBWz8n3k56qcewzbejxgNwGPtQDj9K8p4mXCZLeWV6jh7w4B7pXnw",
  "key42": "3s83NxsrqvGa3PJzY9nt4CisAwwdJmLGXCKkj3aSfv9u3AjgjRn1QjNkUNbBRpbiafLRTCWjmXDwmg4YtB3GxEJW",
  "key43": "3WZt3ySDXAJBbuQfCV1bvfSDafnygx5k2LoZhcgaL7YuVaD5LAxc6RqADbnSy7FpwkbExboVPs76bYzkotk9SPLZ",
  "key44": "41v2xSyoXD8BQXYh1ebpgT6BW9dts3aGEjCioLtgoFY5sebrBS7XfXMsBpErpNaRGd1jrdVDcoWPYCWk1KRoBgw3",
  "key45": "5iv23MZHLCH3PGstHjxkodtvhz6NoPA7C9Vpgg8vbq63F1vyAy8Qot3NFkxpDx9BVCiNFnWtAYYDqv4jyrrvR1dM",
  "key46": "3PGcPpDEUBcAjsZjN5xzjLaH357azV7oAqvpgbsJS5ABpx1YbcNuS1ySzrAn73qm1oDDtV9mbqceS8EYcmTW2KTn"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

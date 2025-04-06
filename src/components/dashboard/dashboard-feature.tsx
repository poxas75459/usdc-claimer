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
    "4sph6yXsig47kgB9b6Lu2pETr6heV1Lefgkoavk6ie1gRu9q8YKPd1ic5WMzosfee2247XjaE7LE1tdWtmKCLJaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25at5Nej7DmmvQ9iGLfdGKY1HHSDX4f575kz38JRaNmV6r4a7vrkq6wg27iQ4kmVepMd1Ex6kmFaJjEtpbvftiYy",
  "key1": "4LqLgaBNgiBCMxRtRspAtA7mhcYLJXF259oDyuDRBUSfHQRDMmoT6bqWuXPD7EzejTBTwcP6pkgL1epj8MMLHDQ3",
  "key2": "4RhPeHD9nxW9mCQYKfgEq6ttZk44iyZTGcC721caktzNbfucfJT6a6iYa6chW2NWEe7Cs5EMb1LYfyLpV3bxGBUr",
  "key3": "22iXgJWquFSzYWSJZJ3Ci33H8nx8oDoVFe3Bq6VVqYTPcyrCjXQwdVriJeLkmci1jTiCZFUijZRELrPEZidiVP93",
  "key4": "5x6V66x1oDLsxKrdfXsakyb5uuHqzdGpxwj8LLrQkGJzjcELw51YrL57J7voG1TwNs4Wk1wDSm7KwJTT3DY5UNnK",
  "key5": "2NwnzvXLr1NoR27b8oAZcszWzFZFByq4w4KdE1dMKtraXBwPq1TMrmtbsFgCXDJuSUHnBf4rZrDxVMbcdykSrTQJ",
  "key6": "PhE8wCTS3JAgKLdv1VDmWd96THib5ZywZtUv1Db27u1rNfPPND9PoGpfyBDYKuFLdHm5jD6Jb7KmEwjzqeJd3wh",
  "key7": "3REErZEFSmgfQnmMqMToZeCVpwdMRhNRq6zUP4xcdCNaCsbsoiH5DQxJHyu69QoVMayz5aY196AN4erKe4vsbhQA",
  "key8": "23SFpqVuHBsitHXP4ye7XsXTi8uX9Qs3eCJhXo22dX8iVkQZuLNzwkN9fRFWan9d67gu8mx5LAKbg1idXoDSChSC",
  "key9": "6G6ACnMkfXsjiVbmoTYeiKLYmLHFkaMBfba2gnNJ1Vci2gmBNvFpHMn3JL3S18nJ5RPNc5wrQj9uAaWxd6o9MhN",
  "key10": "65u23dQfsbpy1gaFTvhF4aNM6V6fiZWxVGEy8fbfTuLhM2Le9aoy9WLzwD4zL39gg3wRiG95NiZQL8QRLCy5GxqZ",
  "key11": "fSbKVAZr4X51JiaC62c6JT31fkeHXpJGHEWBwz638YTNiLc2D59sQZeWVbj5wr9tk1yoRA1JVKJSKCDqYSjDUse",
  "key12": "23Y53PyuDTXLJVKVhDCao6nC73Q2DD8aDuCRpUDFMKGknfDkT4HnotMjxkBdywVXY7dD8E3PETgvVPdi9tG8rkav",
  "key13": "2bgXHLHyeVZ5DWVFhTDGj76Dn85L89g8cbaXeSnqyGXpHdUtfLHve3Jm7ghpTH73YgnJNmay13bzCENNTasWU7aB",
  "key14": "5Tjd7AjatE6uYaVk5KT6peaZu9xtLrm6mb3egkijC5hELPsB2AgHHJZK5zyrRWiYeXMTVTLCF7Kjp5iS3QvsvHJ7",
  "key15": "5BYrmBTHqpxLU21VL3ubYJwf6p5mmSSgBWoccw5KwUAJ8WizLDtKvU75UejVRySQthpdQRsZNR6cV447GSd6BR12",
  "key16": "5H29hmaiUe4WKbZL9yztmZFEruMoTGBu7AsMN3BYvQvECRqVLLyzgfsYV2k7Bua52UhkCmPVbEuLiUuB6kav8Zta",
  "key17": "5qaS1fS9u6x2k6hREksUsGnmgsCMF3vwiA5XHHUh4deNo11LmsgbnPRScHuhw7oisQgZCYoMzJSjALWrBFNbae4U",
  "key18": "b2DTSiSUEWPtQE3W3hKCjFa8X1SPAyyE1Np2TsRnjMNRyR189sjQNfXYn42JDs4cfMiENamf61YjuxaUguV2SRZ",
  "key19": "33zu8h6dWzGjdJSdEXzudT2HPh49SqBf46AvfUL3uxwgMAo99UhnvLJ61GsSUcHyfUHnosVRtH8SH3UWkqqJ6n4v",
  "key20": "4cy1cAdFp13rDLoRXbD92Cae4pc7q5jHv9hLFiaYpD1dsZqWGozw6JabNJrcirmkp68kDtDYWF7E4HUrMJkzXq8Y",
  "key21": "3ssEmi3m8YjD8GXxYF5ofDPCBpnhRkvM74xAUiLQ8xNArkbeFcW6SgacZoewyf2UhmZ7Ya78WiNgnDfb7cPDRsRV",
  "key22": "4t55JXYSRmRZWirboVoURGbdbkcNV2hCySrth1CeAsd5jt2snzyFFBW1wEnSyqx2TH4ez2ypcCBALoFtrmrs2kPh",
  "key23": "2Ubs6KbFXnMyTJVCfFBi1pCVj8rUM8fEsNFHTj1MPez6zduCuj1pnLrYGMBsF3uKBueG5Lv1jg5tjtRtjm83urBL",
  "key24": "25wjFsRnRkxBuKH5xrRybWxQHdyDSXpo4tkeLSHqMD2ycfC5qEk5NEEAA3SvxXSodnybdAV5uqbXAtdLHWxRD5VQ",
  "key25": "4Lue5HH4rh5GeZWCdaBTU9YtBJW5vvaX8ktVEpeznfj1C1K1HJ3UtbseKRwc9jURcxVvmwHTgzFczpW1NgZKNv3C",
  "key26": "35auLaDcTsLXhxdZaCq4xac9mKQLp1G8wM98JikJHSBDwrS8PH5sUDaPPCuA3ERDGpuwCBzdeCZCiLWtKG2vZUP5",
  "key27": "66NCTpEZV7sM8zgGi9B8nLsHNRCtKPMRTtX3wEhACct3NVAjVqpts1XmjrBkPyqS5BYmpWZVJ15MV8Hx7eigsUEh",
  "key28": "2AnS9gUedd2hwFvmTfnhaWDHVj9T1fGuhDBLowyLefCZ9fSZMiaoVkD6yEmvhArnNaf9xjd2jn8qH89fT7xg1YsS",
  "key29": "3gwS9HwgKcjXWaU21fR7KxqTN9LEBgd5h1wLSux5zW7yvi2VN7dXntEgKgViGiwMFRrLevCkoMsBkMUG62SpK2zX",
  "key30": "e8bcqhXdhg5qSAHcBGfNG4wre1kQGkwzbjaVW4XCjjg4ufZeDuz8md96Q7tqodFTSeQrUVwNK4JXqroF57RaWZx",
  "key31": "27zCPqmyYiKXcXPRTSVZ2nQ35oPmqd4CzeeZWRCKUJqKuP7LB4h5GpkvXBqXGt73Sd3J8B289QsjzfhjnxZEdFsb",
  "key32": "48mBPBmJPNBx8tHi9hqAefhQ74Pt9rKorggbuXxA6oxtSKL8RqkF6FN26TsCLPKVPhYYh5TWEadX5wFyD7a9hTvi",
  "key33": "4CfjNwakvA1oaoc3U64Gi8sdtg4rxz52A2PG4HQXXLytJ2UJbTGCsosM4BEHnKiiNriUh3mTDnrtgY92yYixsagM",
  "key34": "48jXSoyERamGkaLhmLLyMB1Rp8uPoaKby2c9o3d4U1gKMyfqX7UByZNgdKh1m7Wf3u7XCyjCWh2FKbFqobRVmoG",
  "key35": "4KcbeabLWgCrb2PMJ5hdGNECE1HhLAEQPAPPjvNc9EbmvrK5uEUNAzirtWx6ZUixZxp5FNEVJDfZuCs5ayKU64RL",
  "key36": "EXNjZijKRAiMNsMSFv5qY6hyNSjQHLQ9EU1MsR1SQzjJwuqW4WLmQv1vAAQr4swNSBq9oKFmTukYB1EihzPifGT",
  "key37": "a5eJCwWXhziX9XsHvhrwVpht8dMk5iotKNFFMPgk6AnMcnx9G8eBnxmomJZUeqg7R1h75zPcztwZJG7B4ocvjMS",
  "key38": "43iw84jow56XzgbjLCbskzdnW7QvZquUCaPphpfgqxbYr5MXjAVXBUZV71hbGnUgoLMGav1c1Xkk7PLXZKs3mpBa"
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

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
    "2uw5wVuvr5jEgxm2oxud66gEdMHCdwkvFAw6b5tXNd4jD6nQZTSzXmPng8V87jbNw9GxuwEZ96HP1wikyq4JgixG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MaX2DtRqUpGBLPnbcQWQeqsW91hBHPKFXaK5NT4BDanpKYzBRMavW5HwFbx5Ls1oRXKbk9825YcLu1M4HrJPkbk",
  "key1": "hKKXWXXtUTCzDPx8cshJCjcQgmrq1vuYrjomT9vLscNXSJR6Z9RaPoypk8Lrm2Byqc3YR3AkcogYc2swbCCHbtd",
  "key2": "3wtqX23uAzQvkcmUrQ6GoNtk724V4ryck1TvCAWs6VV7QYMyR1XTbpdMyyfK4WMGVtgPjzJ4eGhByMKfsSk5W1Y8",
  "key3": "64ZRucGg7WxpHRkFvg9ZhVsEiLVSi6LoGcxUX4fZXBBiGoTrR9Z3pNaAjoyziwdPbrJnR8MSULLMmhKDCHHo46Fa",
  "key4": "5BhEwaJBQF54g897PyT3cgB89XCd9f1QR3yc5u3DyeoZtBJhtd87NL2n38JJAWqRydBQM2xXywK93ax7kmQtE4F1",
  "key5": "5M3iRCQoYiJbQxLyX3mTgeWyHRXM8b6acf3o2QBjVgtNRyPVgpERKSbVs3p3V8wybbqDHvUfVvUSqmeKDZQ1XPAZ",
  "key6": "44PU5tDoD1DYjsXf14CK6AZZKpUDw2JsRpULBjmNiLnyEJ9PAw9kWHFjmJ4UzQYH8BCHCeASYpJD399JbE8AeMWo",
  "key7": "JQs5yHTuznM4L6DTFzvUcAFi5JsoJL9f7xhDTTsaiv9KEo88T5BkC3gWuuf9LWM1CXtT1rxyTGVmxY2JfceDzBX",
  "key8": "2PNu9ir5zTfonyqBsku4Wrq3aunsVJWMxLmEwyWLMqVVy6WNr2g3LeDLUTbY1QgjJ9uKefU1Q7naxgsaLPNGzFCX",
  "key9": "59PFLXq5QYA6kp4zogB17qXR8e5axCyw1HhAsSQKvNzewZhfchf1Kjq39vngZizCWvicL92cxEwLBW5nk86P8Yq7",
  "key10": "5ZJDRJm56uyouCrQzN12ocSbxjVnqdD5febp5kTp2EVyHT1URPqyVPkNnzyPui4CE6BWtQvrhLMvFgwMSry5DDkN",
  "key11": "52aG1wNfjq8hGJ2WU9nfMLPHoBtJ8TQ97iJXwpekjZ3xzGEgKdSENXHtTZ3jzgxsQhFrGEff2TXBtawvRcjjkf2n",
  "key12": "3LUQvAT6pkVhWK7QJuspqKPBojhaSLjcWdPJFN5mFYrLsUJLmp5TdN1Tf99wSee16yanhngvqV33jy83BMscPDkq",
  "key13": "5mMe27v2bBurZXxdFQMjL3wJFK92fpofpG8333UaRiXUxNviAB6b52Yu2anfeSGZLw6zNUQAnfnff13gMmoxF8mg",
  "key14": "3G6AGnp26w4UZcwepQgaBQnooatYDyAVLK3aDsu7rfRoRrtKXKxFsBo6Eufhc1ratVCvGZAyR99MdhJTEpb3aiY8",
  "key15": "d4fvhj7nSACVfo5DZzuvcMLrCp5QBZFEzYcDMjx62AdZ38W4ud4pdeMY8dseRwhZMkj2ydTcQUzxrUtyvXLKe3v",
  "key16": "5BvNarK5HHckvWpiNPemXMpNDtg1dvtzDjayNrwikQ8iuerdzuzNBdCiJeAd94WpiopGm2oadbSWrpsSNHRb1xT",
  "key17": "2u2isnuWmPCJpjk1m2Kkv7aFVRE5gbrQtRGMDnx9CDGSh9fg3F5jAxtoFHBnQi6rKLyxZoEP5bn1vaUvZ8jcLRYD",
  "key18": "3bfyoLPvTk3a397Up5i4ZRUykgKZQioHfDDUdQmy2UE3pQao1CseTtUrMDdJ4jsQbR45fRUadFQ8yuCD6VhyuiNR",
  "key19": "2LD7GYqAJhFhrffuMeCNZMwHZT8vk54H9Rdenq79wKEzF1fySmzTYKSoAPLAb5ame92dz5uqccaMHE4ArsTqb2r1",
  "key20": "3NCg5iddWdxiehXHWwsxqGLRa4va6CEWqRfehMegkHCizNXWkMR5ciEms9PWDK6QAq4n9EoPkVRXhFYt87CZnKM2",
  "key21": "211Hst1DdcotTbjTivuY9nYsdmfVyP3QrUdnYpymc6d9ZLy6U8U76Hif7Px7rwSqxAshW3eaMYKhWmQmPfB4zNyV",
  "key22": "2bjVG97GbhBjj7VFp6HCmA2sPrHtASYr63PPCZM6LBPikwJqdgBDANo3QZmkTeYJDF6dysDYPGiNA25NnbR6uSL4",
  "key23": "5o9ZASme7yqMu5TXQNV7a6fcCDSJgwzXPSh1qmDMveUopkcZL3coTj4GZTbxvHHZtMAYVS2DXSL6UTwdd2kTe78s",
  "key24": "5U6EZsrn1YkTLQ8J2W7s9naHLxRgG1JkDrtQkCt9Y9b2XKgQBu4PdAemMn5XttXPHeYTUMt9C8w9U1C3AZbDk86w",
  "key25": "2kcGkPeUcStkzkoEAypX5BgLj2kK8129ZvEvK27e74nsLkKjFRFTzPAwrdjZpLb8gZHqc9FfQhDDrunxv2QSLdhH",
  "key26": "3Vmawr5gqcVrhxfJPmAjtUrxGw7XgQBsvmrAzkUhrMiaqM5kw9Gmb79yqgH4SiVdk4Zt6iFgqQsVkCjw5FsnU3Ye",
  "key27": "eZHG1NwqW9ywRNmqoWa2UuUkSmSNBBKraV6jgwhtVZ8xrYWSWEGYzBZYkhDLMnkYFYR6WrbV2b2mNabhkLRfXeb",
  "key28": "4JGpbAZDWJx9dknka153nSC8c1rDKohBQYkFe3E14vBuJEFvBbnebNtA8UJtmL2vwM4zJdeSDbYYtzfp3WoipGw1",
  "key29": "4aceiNEnGNbDH9SieV4ghi3ZncyYp4QRKpXNx4RS8Xnw7zpA3ybDa9ECvrMhJNyf8Z18ZJ9SezySdi9fcbDANHog",
  "key30": "2A35HM9UsPQgBMLGXR58tZYVYaWWjewjFinE97xuFjyKYEsUzwjCTg5dUF4CJvDAgEWL7skrAQePXKMqk7K8qpm5",
  "key31": "2szx5MQoN9Rzk76Ps1Pr7MrSX8nWJcbEX1MtPCArJacrp4oxAJi7dPnNG79XJKTZnqKogyG3KK4GuG5anTt3AK76",
  "key32": "38rAaWcMbNdcihBLA1wv1uLKWqQoyrnExhmQwG6SF8NFapHxxtPYN1fd99rmdN7PzPgaHfQc3pFXsJFNRfTFB8vX",
  "key33": "4S8y4RZPB1ckNp8quno9Tetn4w3zuzMEPvAbW1jZkjgzHCW9WjwYJAWNwqcJFtMGkMqb3153bo34ZWmKBCyBCNbP",
  "key34": "fmjaXe69otYXKgPMsnfJj4LXnL2r3tCaseo8PZy1xEcmX37QjsUj7qHGCvrQc3KZdfEg6aAFGKuUVCPvhkfHRGP",
  "key35": "3ePCaJfKJbkTLiuGUBJFehxsCL1PB4YdowcGRnPKRsgJdMBYoocnzc4fvZKkFP4i9oy9H53eojDChp8RtjnwMzTh",
  "key36": "4JDuvQVMva41pRkWqCbmGVdwJhABhXHoeMgttGbLXf72RuyYu2wfDaqY9b8BcnZBZ7pqWVTtc5pG2SbeRr1MRT85",
  "key37": "5TLqBL5RWLru2UWnNgLSPHSVtH5FzW2hwLHuPtbYsDCoDjom19f7gm5TfuJ98zcsbf7T6FJxTj3wsBjx1cVWZb2K",
  "key38": "376xito76RFb3r7Y4xiEtR1PcY1GEuJ9xXbRm73AgAB7VZsqVg5PpXh1Pm6YcqHusXxVEpmXe8p6jYLZtFwb11Ha",
  "key39": "1viY6kY7VSBjTi3rRMHiNoMW7JMyXFzf5XeQ7Af7h8wVrGbPRfLjNvSMEw2dm6nsJZ14WUWP5WzFxYBZLHLF9Ef",
  "key40": "2ShjqfrUUcLC3HQrf12nsBLXG3pZL5RSvBLGPfnRzwSKKvsPQFYy31T78nZKqdW8PNz2rcfGz8wFJdrPS66x33aC",
  "key41": "54kMepatJMLLebC1wv3wG4ict6fdPmawcn5vkMNHQqzVdW391y6y35o7rEV5vDgcR59bos9922kZPtQhfu7WotPo",
  "key42": "2p7NRQgSsVLfquTWZ1raXtCJhP8QFDTGTwwGBviVWLfrUchYBZrpUphqkQmRz7avfj1XoxsBwG24M5ZZXtBDE8Xm",
  "key43": "2jwqiyY16PZnLFGnC96Uo5KTjeRyVCf72x18RQHUWXhnY65Rc8VhQRbqe1rMkL4RuDzLcFnGiQRSMQWbpuqdUV6G",
  "key44": "5fzm1Y4YDckAq2cwFq5zsMS2MYW9LxJzG5YcuPPYZaNMSkKudK963mnfWAoZjcv9UDffYTjRyQHvLuRyZwaWhTTA",
  "key45": "2c4V8ViBygC87ofgj9jtDea8NRp4USvxge54bswtwvDsTEFUFtLj5vHZ6JyPVHR2iwMRCvAKhNmyNdX1DfsExVS"
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

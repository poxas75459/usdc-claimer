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
    "65y7qr9eH8Z7hs9aCg8FGCrPB7zxXbtGiefqVfTepn3vy5fzxdWYVsbviAqXS7S6yZNG5F5SRmDuf7qfbFA4taBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pb1pKm56GJkbSk1MAbTkVDhatZoV2ddUvDL84bkJMfvNpFGVvuUgzxfqX8tMaHvwFbLZJixXeoPrzTfMF7Q8w2b",
  "key1": "2zfSQy8LH2doTHztYYxh7G2CYPvXJY16tptZxGzBKFE2yjeZD4my79iGrwNbQMFf9918f9mywZ4EgarakzDJPNNh",
  "key2": "K1UtPyTfgZRkHMDJYf9d9SrzjFsyZ33oLw1HtuDs8Qp7kJtqu12MpNoUprDo4AfV2zwk1d1RLHBDHi4Pt7764gY",
  "key3": "UaevSvAtqLAMSkRpEa4dWm2AHXXPC92uYNV1JjM1s4PAC6E4UjizpBrTJDuvjXEd24Nthkruqq4zpaK3qxhRfeJ",
  "key4": "3XnCPuRgd65raGG2qExmXWrqfcErR4dGEZrW6DQ31PyS3mbUMZEpnSeifJV8ceGPrTqmSQatMKteUeroFZEtWRsG",
  "key5": "RZUzM3RXtefMBaymYeYC6XHUs5ZqJKtk2zfYfdvKUWMW2PrHPBYWm6qyw7eTGB3aneXeQrKndDx8ApG6Ezxrh9C",
  "key6": "88CNzRAj2fXSC3U9Df5nQt9vMs1qXJNvJND7juFepgiDoDXsScity4WfitE1jU7Hn63jx9PiCBPxnDbZhh7MBsj",
  "key7": "2uLCFXGsuVNZzvZYmp87LTYzG8UZ6L5oY9Rdbc2BknQAAL6YEQVb4cmDSUdQo6A7HswDPN19a8jCLGz4bNhLxtvr",
  "key8": "4e3Z8xwCHUTk2W7hRrzcizs99Ds2FPBZpXDt71QgeKt2AmZkj7Tp2voFLHbXA2PsTyV5HfCWxNEHJsB9Vv5eK2xC",
  "key9": "4r7Bt4GKLsfipR3RRuFoxekB4XbCmcqQveyLyUg99eKp7A6Ukxg18eiExoDXeyeyQ2xhxFFMfccDiHncNScv5Cnn",
  "key10": "3BDusZShBY54w4QTBoVDKC7sWovjjvkNdKVktUWN3mykpVtP9BmGboxXUgL36E2KDEtcMSpkiLB12bVQyQXxMEiv",
  "key11": "4p9iP6RoQ4KPgWpXBbsmrWL1DfzHtb3GotHsznYG4bdK7Dqgq95izBjxg6mSrtW9EW27ZbV3enhAPt27tyg6ZA7H",
  "key12": "31qqMH3kzPyCJcGW78Mmt1YWGfE5n4yG5FdJ9FFFi3vTB1afMYVMkuKDszVTcrRJn8uA6uRJRZK8pEuSoJi4jykC",
  "key13": "3HSTzjZLuJbz9d91PE8DfzvqJcRbKZH8hpUypFoyqdW6ytFMszoXmHSaZLrdxcfefZDCz4fcQP4GNgSVrPMLpyzS",
  "key14": "2gArYsTcvhu11td2caUyZqj4JYRLgEfVebJYrAUHvfJ5fWAuojCDVNmty6Barzz4gCwzxvt4w1SUrgLnxsQZ7M9U",
  "key15": "2FJ43fPfR3m3dyqfTz6bpeoeVYFhQyUXW9zEvLgEn4CeHUHvjyitCaTBi2KjqeZYuXwACWDnwMdmVknJwcZmew4f",
  "key16": "3PNj3xhNwxm7SiEwEPtasiYBfDwRaPNhtwhuHfgkwGDPsMsZt42xpB3rWTpJ2ZLKjuT6JgHpfWaWctGYvVRmpisw",
  "key17": "25J4o11qhaw5vAkgHTVNJ6arzPPFHDr2zm51TrdKEwdwCQBnUY7hyzVeKGwnWx9CjrwNY9vBrhL3JSEi5pP3cqUz",
  "key18": "3ydM4zwjMStJaB1Mv3Xw9MvEabyTMKeZLn7vyp7YaEQZUKHVzTHzG8SUi9y1CZJ7JY2n7NJNiY6TiXJhcLG1Q3y4",
  "key19": "JqpftN1o82MXMQZpnpr1fgTo2cGwuYNRHPwiWFuPoemCZ1itr9q8MjXLEMTRPeCkBJEzRWfBGnrJZ3bbKjRTdVu",
  "key20": "2Fv9uRrEDN336AJEj7T88DpLBVs5YAvbPkpLGTcRweR8U6eNrSFE5AwsUR3F25eRMoPmaMF9FE7HaMwRJqoX1KEJ",
  "key21": "5zq2HECDa8K1Nv11z6i12nQXqVTJZGiRYszsrji6Fk17jG1GesXqSNnKxCfWLMcmTpQ16ujyuqEmp1Q4wZpGE17Z",
  "key22": "4DmpSLyBByWjVoNPYWZeAm2YDH6QybMuTwahCkqpyETfYQydj88mJkkbcxgssz4yZJqDDVKpb1qUGGeQYVhzptRU",
  "key23": "5Tjmc67QJwhYg3C7fve5iep6pCFxCCenDG6AXcmzzajiCpeQdzZLmZ45E8S2uw7WLdRiYaCNskGFUARexXpbNUKB",
  "key24": "366VLXp8Kz2XEigJQxzCmfcH1Ms81bDtNrHGKXczFSrmF7NJ93oqB9jU5GLauvPKzdaU6b3rvTQsgy3mFvbiaXRE",
  "key25": "63wgDh316mWuBuEQod6gzSmZJUL7XaU2P7gFSSotT4vVVgbGvMZBbhLhTdKjmwB9npnsQdrpFGkX2RTvGV4RR8FF",
  "key26": "5XW2c8hxs9NdhjCUTXqUnVirWkk9AgFpEkx5CLoNgMBmBrbScPLy8fYnhWpYyRcFVr35DNDUmu712Gtjj6f8n7mJ",
  "key27": "5jb2BucJgnhARtxSa484QDsYTid6nEPQeYnePcdMSSpRcn9NmLuQyZuE6QiNK3ASz6hyL7f4Fex8GCfpBbjqQpUA",
  "key28": "kqMxju1Kssmbg5gyZzb7PgD3rP3b8hG7JdpCVxs59krVVokuxsq2JDnLratMLsSYfmobs8DrEUG1owRf5MDLFgv",
  "key29": "4reQAKGuPfeHSDr6bYvJzFjtQcM4KWPbxTzq4vYvWrZt8wk8EAsKBJgxGdENrdAnkUz7wh1WsAhmFQA2j7B7PWEN",
  "key30": "MDyBCfGZbWwfZqJyxkgb1i3EEbHjMkJqxW8SFU6RKHMhKV4PJ8eFmf1byzamKUfibsyraEQY2KwTP7bb3atAkme",
  "key31": "KT8KFGTqhQihfaxpQwpoTJGLnwTFmpt8hMBr7ybKUsjzrCKw5TTvAEx3W7ZC49ACEWvTQj1KVLaBJBvnbFijnFe",
  "key32": "2P2NcZNdnn1uXS3WzXxZWeWT4GysufzenoUPY1R3geAHiPY9Kjt7i1wdayKvugVk3aNGrs2RWoNK9i8yDkmJHgYe",
  "key33": "2XE9uXpWjTf7M1oYqTyc7BiFnCCSu2we5bsang1Q2ewjkiqRvbhQRjapxE9TWcrnVpP3Vqrh3J33txjuMgrLN252",
  "key34": "3bttNXFqFi1r79D4NXiSjzumzjDhH9bEXetP925jJrZ49X8VVEKuboSNdZEj4jfP8jpSSkUJWRwYssPfGv56YvnZ",
  "key35": "39ksqBDoQgNDBcoRtNEsCUH5MDrNsqQWVoAdx7bGWq3bnX3PUhEXHTz9uU6za1yYkSB3MvVkK1UEz8mx8Z6uqK7m",
  "key36": "4f1N5mPzyvUan9Pw7TTuTosDuuGejDmKsNq4t2vFj3pPTrGNSEUA95oYqwMCyVAU2GbQwEMiQkCDFTSt4uBFUgmH",
  "key37": "58XowFpNYhfHt7BqsG9z89q295HZ77tS5uecUNCgrZbsfXngUeXgjGuhMP7cfmCdyXkw1ZTCFZ4iTWRiijfTFW97",
  "key38": "5jTAieHwiswoatyqTteKfFBdt4Pg6n7MSi97AYG82Uyf9mZjSnFzGoNFpMMPm2QgW72XeWv2oKPN1seUkNcghWN2"
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

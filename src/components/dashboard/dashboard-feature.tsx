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
    "VtD53EZkKvyscNZYy13scxBZouXdjRjiyGPkunaehM2XmQPC5Fm9BpGA2MchMuoh3C91KBj9WRCw3AqSDbVTmur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JxnPdkac47CnTJ2Wosv4WuE1UsBoSXBiZZsFqXUqoZHBBkgy7KTUPXzwS3sQzFY6sBqc11npvTajss2PcsNAGic",
  "key1": "2JHiTAsr6LTnNR2D46rQCBwwiSFf4PwpPGXkw56CZGVZbBVaZfA4CBkAQ27y5vnfic1mgjQH1fLhZ6JYefEQmyaQ",
  "key2": "3MZ5zFepyXad8c69cAVvmqQPqwzuDU6mgXpgmmDSZSdak5wzmuqHZCKoNdbUMoxi7V2W6T21L99MuPWbVm7zUq5n",
  "key3": "5HVqu8szdfAdoZacsoKLtXYvdoRTcAS7Q5fnZzhEMcrjCpJW2FTNHewRPP19hpTCKbnDqHgET29vL6F9SqWfcatp",
  "key4": "4X8n1aaT2SZRZFxMDNpvFNzcoSdM6gTtTzGayhdHZNDNhUJJfdoEHhSrbDqkpWChYpfySjK8cS5Nh5W7zBQ6AhyT",
  "key5": "HqwdkPAxj6Gi6H1FQryBBEVpSQTzVGHBqwCCS4Gd4RYu8pVWMorbq7mUcXCuHN8c2DWY9aNHuqcoFvr9nGvMbEV",
  "key6": "5bEEcD8MCbMDiXAVLYLRjY7shnQVbZ67pskXJtLrNmLxZYDSZC6jiCkR9UpQ6F9ysSx1H5a8ut16SW3RwdTrynKb",
  "key7": "3p6fosEaWWwoC1N78jm86eT352ej73JpkwRzW2JXuEHyfHgzhMkh2L7L73TBt5Envbo4ctWKBGmZE9ysQ2giHXVm",
  "key8": "4pAVzMRYzxtvd11o5cgZzn4szb2KtP71UuJfrEDrcwh1hxto7TnZyRLG3ixVLZ5ckHiNt6Vj25tABiDEqyjY9iHq",
  "key9": "59qwwuDwntBDRmYQcf8GfQ3YJX5KuLZFPb7zZiePPGuerqWRvaVDdoo2tbASpNHPYGNJDSi4R9gS4iBGRmeBvM4E",
  "key10": "67rZGUur9AbDsmJMTeSZthdARQSSiSe6MUBSJNJi79muEADLA8t7Z64rzGXgAS8yHfAUyyAQdeETAFuMfPDNNYkL",
  "key11": "4nSf8X5kyUp3p1i52fd8CKqkFDT17qeJEc1jATuTBuiVmq25nv5a1zukGgn775ZxMKoroZyju79izdnhkHhuprEv",
  "key12": "3Fz2EA1gawQEHVxLsK7cH4FZ3Lvm9cT1KBqZtXiTdTCdnzvsKvyUW5UTnLuhw7Y8HV2eVw5iWN3mHoHQGH1WwAx9",
  "key13": "2TVd74mXktyeeWPt8av3qTKwBVbmhvrQqGPWet374oVVwGd6LdD9DhQqhsSdXsA47bMDp8L5XT9J9ZHrd9GHeJiV",
  "key14": "5nhhwA158EMHozyA3fF3ikwwkHSFbPC3nWCpopxxCnZwZWUoJZxep4XW9tdukwZiidomcvXWnojNznk8Z7dNhQNY",
  "key15": "YbbwQVBEaWjvsGNTQ1ftAdqwSEhoPBx4KgLGxrP63dAFtYvmcBBuEfwb7hEUdbTbykQektWSndDzacGkdzLumQf",
  "key16": "56TuqAnnMnxN2z8esTxwonUooRM1xwYyswxBzqt8x4L5V52HPiTnBUy698CxZQbkx8wwJ6v6LWqYzLWdoXF6UmWs",
  "key17": "33oiLKGsodz9bCrtak4bbG3tTf1i2soJ5y2eUQnZnHJHZ5QLYc52mingWX2ftPtmewb34iL6mJ9TmpdWZdr7w4Qn",
  "key18": "v8JP6CHSq9iDNTAH1pUC8atdQYT7q73Pz2nVS7YwzjNEYZR8Nk89dGFkST7Z6eTAA4AVe2gi49bChUUZHpTacTi",
  "key19": "GLPATMArjfX88PHhXLSmDfnjBJEoNbmG4T5hrpd8N65QANjzhLLEckFffqiNKhLPkNpqiV7azvQ5hMJJKcVjem6",
  "key20": "3QMWEw1BQqfwR5sRgDiAc7qnES1qx1uFTMfgASjKYwDsbPb8W3C2wqQGZ45YLQRJjWupzDEu4JGAoqeaxAEHz78m",
  "key21": "2oAVchKBrwQsP1ArP4bjMaKBPQQVi2769864dX7e9bjDn8aLRVrdy9ND1GVToPXytqVQoJfzaQxRaQH9Pnts6pQn",
  "key22": "45gYWL6dwxSziN9dDF2RiaGfUsTUrTwbqwsqBM5pMki16UdjMMcVrzu31XY95LXQcgD3mbStQRTJjE5XfnF2L4QJ",
  "key23": "2hTwy3WHKncJhvtQ2co81gYhndEnXXutK7FYwDLVAUR3Z9ia2hpQP2XnTmJR6wMNfB4wqF4DG28eZA2mTjb7stih",
  "key24": "3W3nQoQBiUssXtpoByPmpLs5LoNcByQ1ULH5scahnEEkrdU7KzWFx3CEiE5HK7ebL1sJWr4dyikNEENoXnta4GSq",
  "key25": "3pAuHQYEG9RC1Jp5D7zSmMpeiiLBCQhs6bsFUpdmYjR7ugmJLwZ2WonLbEbXoopy3rw8ca9hBDgnrynYcUGDJ1FF",
  "key26": "2R3A5aRcc6QE5bJxTj2wsn21sn8TuTy4c9fePnWUdN87bcJecX8ZKpSuBcxT22nBhD7rnWohFp4N5XjeKWkudKVc",
  "key27": "5beCGZZN3oSyuThAoxMvEyefmaZkkFLDvdY1W8ZdQNmRA1aVtMipaMxp5AG5bZ23T9f85MjvhzXE4ddWZV5etwYx",
  "key28": "34MoEMDHSEFxBRX6N2VPeLUa4p7eSooK5pLP3B3yy26oUt8r4Bx9v14SxEWvUjLB5tGwEJC2k9nzgaVSKYtCrWAh",
  "key29": "aQPcoWn844fPSNtYKs7L7FQFaroEZ7JnYeqtt973bg3fmocfktEHkzXLAWMMsSA49diX7escq3oTAT6wG9E8eCk",
  "key30": "wQfLkEW4fJ1tZwPbTHaUoafw5hAouKAG3Hse1rfeUoQKoVvSXUc6PHUWWzwN3p9skp1DLuzWBYEgM8N57cLnueU",
  "key31": "2EdY88SF7Hpu2T3Y3dwqVBSizVh83qwE9UgHGJT5wakkqjQ45zRtLBXyQMkGA9S82rKhnVJgikr2N8Zu2rEvKiJj",
  "key32": "3qFKsDbBsPhrAJ1DAi6xumD95zpAjteqwhewkC5TmMjMwZKDQnTzfX1GmtkCiBTkpN7okLHTofhPeVSnxdXg4fEz",
  "key33": "2uji9w27ucaT7xzVAQMJcGgWV8qSM2sbgatrNUDgcQbGmxWs6q4Dv6XDHLhhZgt1WCe422NQycM1DMzpo5kbbFqr",
  "key34": "5Bm4Hhuwbs9cRpUeUMkTvHfM5JkLT3CTHX6i99xe5hEb7EYKqdXH3t9uiRhZH9WQkaX8rK1kJXzkbzpLrjNNFzJ2",
  "key35": "2kWf98Y59EjMywdt7Bwthjj8ri9owiGp1qjd2E8NK26cdHiez425V88u54RZgUAyqrAL3h8so6Exbo4322nmeunM",
  "key36": "2UUzqLJfQHKsVocPTUTFaYzVnmCz4Ve1Hk6UgsTMaw1VBG8X3chKQEkNTGnVxMW7WvGReoVEWLG8xRpqbBgJNN5X",
  "key37": "2VEswwHqZPiPuP9A4VYSD3CPoApge2sC5mSEMxQtytmgRH3nY7C3GCr5qDJwjWaFjaSTTHNCPe426b8uvNfZK65e",
  "key38": "35dEf57zNPRuCmi1pQafKaFmkDhRKZx4LEFzHdtfGehtDmtf8kD3EBZmyk4Y4Dvv4ump116gXWKV7B6hMjL5Noi8",
  "key39": "2zQkhzb7JAFxkcNdcpaBoiFNjBibok8dNe4AUkaFfyDjVHYiSg8u1wE7Ur8q7dhR46um2FvuPhQvHEGxwF6FkYmz",
  "key40": "5VToJk7KRjiHdVkJdhx5FFBFKLdvh1VEAH32SLcVBEfHHWTVjBng6YyKm9RbwJ2A5acX8oN1EraDci2jctYtxEts",
  "key41": "3jKSXrjKzQTrhVdYvZpF88ucoHyDqGD8mTebhXRnS8Xjr1CxMxq3mAcs33vghbL4UwBh8Twke4g9gcNnZmC9Jyqr",
  "key42": "oormXeCQfUm8aRrCqkHFpPp55g7TSFnnEapPkafAF6pbsVyLyvpjFUpF6eiZPM2Bq9kzT4orfkN7caydbvmn977",
  "key43": "3576HXCty6oMSVNcBYwm6HMxUgs97prZGHKu5L3nBkfX9Zhh7qn67HHFTtNaS9fh62oXRfR2C7YZKSLxcWwAP6wS",
  "key44": "3xNzeqjksuBGvXYGpetjbp6JQPjTMgFm8qbUCnibrtzb6F3Ng5EVpABqrdFDzCUqdK1oMuCFUoePqLSwMX9AAozK",
  "key45": "5EbERcJZTJELVKW4xuPE847169fpBNR5jAADc1UoaHJUa7Pm7yK7UgYvyaAdyKMZMmCb1Ey68SNzXmJrvUdQNcq1",
  "key46": "5Qz9AZoYV5dG9srzW8wXMz46K2JeEMoq1APMPNC8T8FaiSTcXJYZqQDnrKLc9szxNkNaYDd6RUM9wdEqXfDjchge"
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

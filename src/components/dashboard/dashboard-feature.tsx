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
    "Cpa2z5FSAi5ToRwY8ytejdCg3s9Wf8jLqDnV2xd5HzQYgDeEHzAGXt2QyXUfuYia2sLb5HsWE7StrU4ESj7ponU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hmi2pUwP59Kq9hvi27Z2QiT8b1fK1UngNtYePd2XeAyaNYmzJkd2zGSeex9ULZsYHgRmVHA4bwfd845y4GpRSWA",
  "key1": "4o8pnBLsuoc5VYJ8kQ8sBETTCHEkQqBXfykUQdmPawF6FcES8q29pw95zehxoknpr1dzS9cYHT8FwdbPjYBta2je",
  "key2": "518ePM9VAVebQEyXeVCuBem7ozmRE61uaueez2foFAxLfUYk5xGFCwahpWV2VUzcSEY7XTYJL35bwdUQiyR8wFS7",
  "key3": "5RggiedDv3bzNMWbgm23SjjWUSL861r2HSfre6aJLCsAEQTuRLJ4C5YKNR5jd6BFYCyvF7bHnfBRh7pPKnqBd32u",
  "key4": "429Gto9GUVZ81XmbvYxJapdCw68ry6Bdd16dV129fXCnJudDAXgZKxgMu2MzvDvYye5WQt9zVFxkHVjk5AwyVkEa",
  "key5": "4ThWG9saEyyrPTwNkZizJioC2ZE5HCDEKMAR3TNjycppcRAF47tZy9nKyKQsYXmK93cWYyeezt1BYfQwp4ZEeisV",
  "key6": "hv2byU6p1BkdqMw79mDaW5QBCvHG2kXZ4RAvwiNuQYdvs8TsW1PGxLhuvV2vRAEunW5CLJqy2jtgqTKMi57z62c",
  "key7": "2boNvxn5k4sJj6JF8VHsnNYxh4qrgUmY1sdtV7RxbRHzzm1qhFvhRDyVbHzMjYoy5N3c88CgHumDGefNC36VBaY5",
  "key8": "7nSpBZX57tVjPQGygpcMtazNSmU6JosBNYMWTyKEwreFBE6NvbMszepMa4TmMXUcFy2yhMjfec8kt7XzsuTZnTj",
  "key9": "4HVuYLQhicQ9eV8esLyPfi1jXMhHQSEXQo7z6uUHBwYUZGdGs4VfKANVNoGdJwndW7shzmKyboDt8jCRrU8yx34m",
  "key10": "SBaNEy68uZbvcKaytexBNsvcUNiT7fh5THbsjj9rQxi3fBZK5tJoq3NHzqXVV2usGBFZaPSYMcA9uJvVe1w8DJ5",
  "key11": "3X91ceDA68BnGHuWcUAVU8WrXEd6LiKAK4m9YK49CMrwLshNF2pjVMEKqDFFeKQW5Vjozjh4Qi9qj1TgKdm8KLx4",
  "key12": "5BtGUdAEaS3M5RtJG9gGxg9mWrbJoWmY93oqfDdfp5wbhK9rnWwUrmnrbTHPgtVUuJ5fVPneyBK7pgLvhXMNzzaf",
  "key13": "pWhrL5ArfvyHh8ondhF3XUzjZ8qqrkc8Y6s68DpKozBbJTN5pRR5xkJqWF7rYiKuXjEf2u3y93EW9uknELhSvAs",
  "key14": "2vKHw99yEre9gD5GsAvf3eywkeznmob3nwxNygEmYXiS3cuZXVVfLWudf51So8gP6n72SmPavTgg2yyNr4dKKG22",
  "key15": "UKAamdqf91w4GyELpeNAE8St5bBMUhMTJFu51nmygGntWEjAWzdgJcowGXsazuunA28BS8QNHAh8bcfwkwuTwDG",
  "key16": "21g2yDW8zQdSxikjR7atYkfgxP3YMLnqDJxxMtbkViwgcx38LnHQeYMW5FJFfsZqH3133GuthbHhiSShy2ueU1Eq",
  "key17": "Zdu2YFB2vbxRk9RXoem5oQ2gkEkXJGED3JNEDTtcyant6f1ufogGxYM79dLWazFyVAxKsZBDEfPZgmBznC9fK8j",
  "key18": "3JreQKZfNDyzNWgBGGcucp6TsCDJuWsdEt8MBPhjPfG4ysMNBPwMK1zYh7VJej3RsLKxT544sRzsjFPU9CpsfHS8",
  "key19": "zC334bX7akjKCSCnxFoRWXEPd3sbLCfDQgJ8Y5ByCYFQxMVUG6cB9VHiSbmyZQ3JUuYErHUwVadDS79exJiDGWH",
  "key20": "3iXwrQ9FnTnny7Wur27meLc5Z5yQo6U1StCdhF4JZicVBotj4FzRKuJHhL7VmCnfppVkwdiBJzCpAoLvEUMg1Fm6",
  "key21": "52kJvbKWT6FsAHi4nZ6jqV7tEdavBXRFygQbAh6cmyz4oeS4a6J92zvyEqbFQRABGyUKq9QySxMREeXDr2mnzs2m",
  "key22": "3VJcptV3Ta7LBDHLEdjZh5BmDjrsw9PvtPQ4r4hiPqkyhpmUb1u89EgSKsMb4pxFYr4st53XSTGqwBnBSJoZoWSg",
  "key23": "BXm6TygeetZsKVxqvZ2jRCtdq1utBfDjErYMQBmLFNTSEJnfuXnJSUNXGSA1jUywq2bCXiny6oMykqZmSopgQ47",
  "key24": "3zQGPNtPXeMZSFhKVYaEpyrBrgtGpfzToPNVRPap8AZ66miNXUmR24ZqB4DAcGi8gosRrJjjpkY6n5vc6NDMDx5M",
  "key25": "oHB6SXx4MTd4GKEAoavdxdwzpajA9F2T44DoGdkLKkSHHuaLUUKg8mJv98RWmGXB6MZaAWm9weGWC7SwovK2utm",
  "key26": "w3LnGV92KLeDjVGSKq4JjaX57wcvB7BqFMZ1YqHfjeC8TU1RFUTyXmVr7bYyRd1je8NZ9RFR6rMr368HxYmBXg5",
  "key27": "3mc1bzbc6kbVkAMDGNjRAMQ4Zw2Z1tCkbwqVoU2r9DLN8Y9ZDNdpZJ5oEKUXQLhqURuj3jyXUbRVvyLFX1L7VM81",
  "key28": "63G9wht8fnYvZW4BWMkQjesjdgtr7Rybay7SPScsu333Z3fq9XJogqMy4GBWVvvHaB6zCnuRYtTDf7stsyEXRjL6",
  "key29": "tAkiW1yC16SN8mxsLKW9MxScuqLenCfQbtZVoZ9WiVGCLcCD1eiHmEETWX1uHcQhoXzZagkBoSMx6HJPUz3Anjz",
  "key30": "eF67EkA1VbN6Db6KGcNKxjDnLswsVw2s29PzoKTqot7N9jWGUiHCwrDNA2jDWxjCnVGe4sx1Ku9LCNLZt7u7KkM",
  "key31": "2TDCcdXhLTouUh5y1C6azT7yb3NxfiDwj8QeSQhqvRWBwee1QK2nKpPDqomY5hoafRgafv1kkf2M6B47v9vmp5yx",
  "key32": "3cn8257RHeYB3cjAPSfwkaRSWQMbGFGB2WmZDG6ScxBRyH4H6pytCi5EBzChznfPasZgquxUhZGyE6qjPQodZdrw",
  "key33": "21HGWwfkob1mLDfSW6T2Ga8Po32MGNsJAL9MuKuUGpH1a2E7E68evCMdnH9fLRLjQqMVPazoV1QAZAgvs3kf1WCx",
  "key34": "BfSApxweoqg1sJJq1v1ik6WyERCinwG27YgqJv5cG15AYjTx2A9oAHugbwh7UWkHF9kSc3PvZFZFUK1RJAugKKH",
  "key35": "3Pw5zzmZqfRosBgoC1JNgxp22HdVA6oSxijYekHSFF4KL5A5CwPKXuy25zZ7ocyZWKK7ZWMkG8W5RTWZLQ6XZu49",
  "key36": "3AwutJ6JTaUhcR2ZCdYd24rWxJLDMTAGEsTVWf9d67TGFFAd1ki8TZ6W19ogqN2SSYvHxnTht9Wv2VaqE746ooFw",
  "key37": "42GhpRfTDgp3qogQHTnFowAVANhSYHufZmsCwdwRrDYdY9BK6GvK2XABHeWM8kxs4pzxwsiN3ZoGCr6h3vKxqKDa",
  "key38": "3wSHPGHPPJoGAJpMVoZqbJWtKVEbjrMXv5ht2Nn1xdNpKFeyypGx64QMaTPj2BY2F96EZE87PYma9oU7iqovaSaZ"
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

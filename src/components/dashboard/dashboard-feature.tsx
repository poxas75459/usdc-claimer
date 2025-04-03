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
    "28fu5aEdHPjvG7yRH44cKq3NpLjp75m6QsUmn3suLArXcxiMuiEkNiC4rDvyWinJMrQ33cZ5r1ng3ACksTK78jcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29e5NtcC4zz5pGq8wCas8SmkYopnzCGxkjwrg6kmWqfFjPqzP8ArwDPVahv1ovd5qYayERXETKiapr14fFw8cnwW",
  "key1": "35Wnh9ZBuwwns9ZWXVhHJ9tAYNJfUVeYmw1de4oBN5YqgrrERWWx8hHWdkz6o5dEN1gk5a6kFtrfiUvyFbf1PMYb",
  "key2": "3Zgq6MA71nDiA2o8Z1e5CSMVjd7DLSs6cyFozPTYhVYafmWsdViCxhvbWknPsBpaFeghCSUUnqFYJVN3hskEdcsn",
  "key3": "2JAhiHcCtSHcW9zCJjTCTV9aZtjQG3uBJJ7xHEjoeAgYPaNwSyTLMeVu1mtqfccPJUC2MZMmACbaubP4ZyKUTtuP",
  "key4": "2cJM12cFDg2diTDkDUYoohXpJoqFyQwM8q8fJKdCfzdrvJYVUzbVD8bkXWHcudyfnBRw7ZS5UoQNYLDimWyTGJZy",
  "key5": "3zDCP98VCbFANF6NoppZpvscQw8YRmWoFY5CETTC1iDEggx6hU6VQPHKujwEraaVJEe7doLhHubfZRCy26dhZo1t",
  "key6": "3cCsmPh53pMKrDK4vLi25UWi6KVhj2oRcm9v3x5y2g8M6C9GEChz1ubbC9vUU53vjBiur7ShvAJT9jPyuLuAs1a5",
  "key7": "hZj3oyrhnbCNu21WmA92XEBKt7xHKhEGaFP25PGMKSSqmNeNNK4zfAZS2zQKJP9EGrd6Lxct49BCVyUaqFzNKJT",
  "key8": "5nkvamFYRBQWdRfAFFuZH9s3AQ6dfSB5Qyb9afFRRmd5Yek8J7QRjsanB3sgq4VGEwMMtwc4u6bFQcShGFRJRKvW",
  "key9": "4sfXHAabLqh88Hm32y7F7Tu1wsrTU2htSc8RfYMwdu87wf6GvMbDG71vgyCeSgUE7MBAJcHJCoqT1xNZexTDyMJ8",
  "key10": "3UnJykhnszxbV5Bt6Ve7xvcT9ixaokyde6mYSidg9gXxdGEjtsgPbKUfwbaESUoDQZmu8jYbFRB5fNutJNRxrLR4",
  "key11": "4D2P4fdyvZw8bWbrPGjJcZrfUyxo34pThWR6uxS59THYowqA3THoPWKEbBjCzrHzczkEy1BnKEU49yKSikRk2Y3q",
  "key12": "55zUmKjpi17HAD8nZm1uH9UVPaeHfoBfbcS9uYrgmaTecpUvfmwXbwVxcYxbV7fBrSWZqrpUnAzR9VYhF6QD3YeJ",
  "key13": "27mN8i552JjxJcfe4Q7tzKbYRKYnijAL8tw7BPHVy7AGn8oHLkon3f4DyTnHV6yySw87ip32rGTaA6SZ6StAJiYD",
  "key14": "yYgoc1PRpiyz1wP2q8Ku2nc1DyVQvDfHwbv97sYXPigjrucoA2RLbSLXVgpCsAHJZL3wSsNEiEW7QaCjsVrdbmc",
  "key15": "2FoDXjoPdpfPXqkrKVCrFno5ex1PuX3mSC5yGyMkFbwhVMLnACSC25gypeUZAqKyh9xKaFXQr5J7R4zUquZbZvYA",
  "key16": "3K6QxsWTRkoM7dvb7zczMYS2azNbAMgFjnU4T9Hik677kuQifdiBRBKT4XVg7CT85NuxhgcuEbLsJZ5zohoQkreU",
  "key17": "4aCSn8jH9e6bsZmQitvsrpdAZ2tb1BHXMiL8NKrwT8NCUak3ikZGnsJd2q3Q8a47P2Qd73gJxUhDSVhLECqSzPCi",
  "key18": "5f2qCoRJB2sM1KXcwUvffWbKTLfkLAxGas1Rfqrxam1z7Sc6ZHhirZu4TeBnmyL1B5ppN5hosCMdUiads3QAHk2K",
  "key19": "3ZwnQv5axYSieVVFagvyf3gzENWRM5bT8ioDntjtf9pfm6yPjodu1Q23VXV79DqueVjL33M2oY3LMo6AehMca2kq",
  "key20": "39LdXJmQvMvxHLeGqYKyp7nWMSpbrnsivYAz3CnQRYMBovpqqVcCuHG1xaCcJqwoMdBSANQEFLbRZD2RNF9hUpmp",
  "key21": "5FhW5o9fCxLYmpr3G5jnWksz34bRB7nM53HuvesxtgVMf3VcvKsdEQSK3ooudThkrNihHcZCYVGDxLgYi4eJYrPC",
  "key22": "37T7xQYkRCM2cRPguVbmCMUBttkHhdqPQAesrTYYmiZcwvdYVeszqmgmZSF3AJ5g1cVPneCaohmTtCeUNh1wup7a",
  "key23": "2qn6UcHmQ6XBoV5PdRAMJELVYMB22T1tfhT6WqBjVv21NRDL61uh8PZJbmso4y8fNd4qANCKeD7cZeYS3M9LCJDA",
  "key24": "26nNCaAfn2u5fijBWkyCyP987L9wAzhCqzESq87N3Lq5wJw2JSCBx8Yw4DdC1FqFTnnxYLveveprTJmb2xRwBe3p",
  "key25": "B7LQQPkkxFD7LrgT1rdbjdq3AMdyBoqRC4fKCALcD844nGmP6onKAYY7umjZFpxsSrmUtnh8yftGiYxZTV3uFDs",
  "key26": "3b2aR1XFLjit9QJg6h3FPBqM31PkAUbnEjGoRrjp3tXx71pK2gaWchGf7qmyjrvmT2fBmMmVWF7mqmT5baNiTSVG",
  "key27": "3AQsAHpbojPZFTrJYBQyDczWFQyNdGCaD9MvQU9eqoDSypBJcyBF7AwRLfppThaem3a9viiUscSBPdbdZ61dHuXj",
  "key28": "3KT7HXdvzkQE9o1KtGeVcYGwXqzsEiUKhAtt8Kyg17KQVzVFKKMFh7irFpYhDr4KBQnQR6RgMVwPzCH1xLkBPidJ",
  "key29": "Aksqmke2XNZ9UgM6K2mweWq46dxVQUrV2qeTRW6S7oJ9SGvamR7wk8uAaJp1oXuwe4k4YvwMaNvyKnbNEdvbmBt",
  "key30": "55Tc6fcs2HN8e7PXeQMreNdPxgduBc5YAtXHV1jVjGXUV5u4hZkL9Trty6aw5ojkucUJWZefFCoiqp9iseApX9qd",
  "key31": "5hEHzSj9S3qG6VovzZCyi89MxyZ3J1MqknUpoPMechy5pMBwv4UsjLWoZETQkNvypQ74np9rvnDfqscN61UMcxNa",
  "key32": "3XjefpGMAeKtub3PjyvW4GgQ4pVSTA5ks3B2yygVf5kQsR5TCW9gymiWT8RQKnupDYVKyHpXsFNLzgPPChrteEs5",
  "key33": "4Fbybbmi8YZMxXKYNbjTxnynF6ogu5JH1gjLB4uQFGr5mJLc8EpYhBe2wY2Kv9sGHTugAR2NeszaWCnXL4CSxg7F",
  "key34": "2kF9CjoMXu6FRZKbW3NnnEhVEpPxU6AC6wMKdhcjaDVZnWegJJWM5XkBKHiTtCmznc78zDcQDGNxQAeDWgsRS1TE",
  "key35": "542VHuxXEAsnMcuuic8PmEw7VXVGFBBoioy2RBWxDj9dRyVBknbHTx1uxnmPtttU2Bit5xx18eKgWuJvjehsztZQ",
  "key36": "5JWorhYzsS767cNdjxQ3VpiEZUMQRq69GuypXBCz7bj8wEMP2Q7cxRGm7hXsYU9LnQDGHnVgJmFgMmuYAz8dSZdM",
  "key37": "5BgBCmqPxMxuZnPhT6MReWWkkUDp8ARpcd5NN1KzS65PRmtuiyMQ71EhZcqYAFJmpWFsNor9UB6caVH1B73B7u3F",
  "key38": "4433qcfJigJmJaBVU2jyHxm3ui2iSPb2H8VWmQhiMgeHjn7QJ6XueSwgP6BbiBttn4idJFNbamMh7T6WVhruPniY",
  "key39": "4tWBYRE6ZJ2363jSWYdqGRheKbkHPsHiAWuZ8BicCktRTKZNmTq2vp8kKfpXVM7i1gQidLN53RzvH4vhgMLFB1MA",
  "key40": "5LbwfYXvsSoSwqECYsp32tXvD3ZsSrKsrBknUkFpJ321bVobYrooBiHDsMwA2w14QtBtN3yXxJvcdpiF7oCqLHj8",
  "key41": "55hngHybrvPi6CqMj1XCtWd3cFiWjf61FmtXEgykpgu335nmihzF9Eeb4FZZo6YNz84DhGHzcgtdnB488D9243gM",
  "key42": "59Dqbg46WP6HoFiyc5t4D3pX1NNHmCkxsmg11H5WEUuQSgK4dxc382g75ZASB5seqSxNo2P1zVYoHDZxV3811iQS",
  "key43": "CBwp6fA1boWwxQq2QD8RBJSBxVi6hKLzWeJz4FjKt3Dv283L7HC7z6vJneALcLKgajKrRyDgyx33umhvNYe4Kqo",
  "key44": "52U4QfFASZZv4e17SJDKvvtz8Se2zUjb6LbJehrdRQVEnnZaNV3XJBMtM6c4y2GTFQq4ruEDGtLxDrh32MecijKw",
  "key45": "3mDR4as8muqMabcmFo3z9GZQHsejLcj2ovJWJ3BZuxfJ77Qo72Boqu4hjSKzCH1A9ykgW7WYkRt8YxA3vJf8NbuD",
  "key46": "2yFktZatejQDnLmXv3f4TZXr63TMQAttNHGHwEJkqcQ3ejvCnWo29aXvo7yYjHZhsDujSBwzjDtay1GF79Co7PFM",
  "key47": "cMgkf2NqyqcP2LSzzoAoiXt5zWMVqQJPPWgHp34M4Cd5fwNYjZC1DpPDD5LLT4g6xupmZmn1wmhUMtSnuDwppAt",
  "key48": "5g3SHupeyPqdTci16GggmMPMyczM3DiaN4uqy9vxLvqyoHxwsVPWh4RuqjYyRBNtLTfbYtXQFAqDAgJkEaaYmmpe",
  "key49": "AoqrRv2gHWBTPXQbUx2bSysaiXLctFNjjFSmjdFZm3scv4Qj8D9CsAGu54NncronhSmeikt6MgutFU4KkyyChNd"
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

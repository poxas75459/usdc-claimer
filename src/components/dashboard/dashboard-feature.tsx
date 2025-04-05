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
    "2uNH9SiKbkcZNvJ3C97r5fzZkK7qdqvYApAv9RnKer7P2BVUQhU3rhBBMfAtdJp5mGgzTqhTFeQ1smsF7K6rBtsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1pmFLsnd6dpd4dHybsekF8xJYzyeGP9QyXbTsirAHkevGqFh2q1ftUoJrufaFhyB2fRgGph34RQwQukoEKywQi",
  "key1": "3BmwYgbPMzJDqZe9hnkKAEVXZ22E4qV8v19CFgw6rKCii2ADQa7K4yGUg32KdkirPESSG6PfoQfcFSAdVqq7G7Lj",
  "key2": "3Y4f9E15aHyUVFmqPFZgpnT8fv3DouyoJdupRZhi3bJzwJQRfSQUatnWnwED69rBL9r87B1kMUWyXqLBWdVLmdb5",
  "key3": "4558fFkh3hG66Umj4zc9sdk2wE7z3TdCqvjxZ3zvw6Me8CZ6sVu8ZFZvbv4CqM3FCZ4diMYzCF7MYsgCBw8Z1Uwg",
  "key4": "Qadkj7oMA9om2qbNU5xFA1MYASA2VzSLDm2EbDxcxGi2mEYejGCbTnhhLdxXAF23w5eUX2A31hNtdsJhXAH1wdX",
  "key5": "VkyttbdXPp8R8CwmLpzrpTY43QeuVivFP78NMB6A81WcGVQ14ZSZMue1GY2hqRmPmadA4qdnsaHmJe7cfGZSXUC",
  "key6": "MuCm4NdYnvmiABC67Ga2Zjn49vphmb1kyDPxsHLHZyeg9FmM514DEkzbPKxiVTge84qMdoMKGDnv8svmBjjohNU",
  "key7": "WDu3GNDw3WSbUxQSesJbnJxMYnt5bMoxuANmarnPak2J3AcPnfJQzYscsxFjoKf7XnUXw7mfVcXLHqVHePG5Pis",
  "key8": "4kJZ5Ut6q8pqYe1EKHJD1jhgEHPDxWS7tDUJpm6Niw8nbvm8WG19aiKoa2Zw8K1HskPKNJDLJhnMfDQ3bMoXukVZ",
  "key9": "bgAqAtvgwp5bfkrSuWUxgRy8kxpQSayM86TyfQTirUw3z2WYuFvRARkmt6fbsg8fBNjuCTZGeTMXyQs685fGQZq",
  "key10": "5sjzcGh7r4CrrgwqLZ8JEAj3NPfK5WbSmQauZVdSFreFopiRHfNrvwZqYTYZMvQ4uu6bskrau4MZjKa8TzJ8mTAK",
  "key11": "5GXy5nBpAbQfWeF9wNBd3PAPawUv6h9fo15zYx5jKMn3KPDCJ4g67bHZe5bGnKbpJRHJhF8bBuJiF77icp4rPEq4",
  "key12": "3F6VYpkcEGNEphNr4sndYLMVZxRPDpz8QvntnD1RTjh5rnZJQSTx7TjFPvuwHQojdD9nSkUwuFyBDFELwfgbGhiu",
  "key13": "3V7uLPWkREHb6KecSNH9VJ5XtSPtVsxBpMbeLY53w3QjupEULHtZnANPY7p9vzRgvBCAg3EQubBoTbpbqiw5SSWc",
  "key14": "64xXPLEoVcDUEr7ZrZSkcymaZpK5fM7R5vNQC6CFjVzGpe8BKh8JMP6JMrPg2rdU7rQBfwkMznaEz9gRHg8xjKht",
  "key15": "5jq1krmtbui8YWTfZWpk2rpxZHZMg9dFc5Yn8onHXkuh1oq1MwAeeoFJzJ3eYN2Tjf1tx4BekEcuifo3CGXRoZ5",
  "key16": "551JJxm8yUEyQ3vnTB1WMUTc4BiUyNDhnHcvfDDtrWRnCAPuexxiTg5inNtaoJFbrEoa3U67Gt3yiFDqbXC3bUsH",
  "key17": "2Tr7qmzJ1RpwPptiwi2mDt4XMcJeHxfn2uR8jm4rem7oZ9WVk7zJtDzZJ4Zut5FbuMmDp4vUQVUNRHujJa17RwSn",
  "key18": "61rUFJu3SMX1rzi8NoJUHECE6DYBkyRNyosisCyRP8tnmnabp9Exdju3cF9FWNKwMWFagX6Fv1a1KZkoWYMhw1Ae",
  "key19": "4JMpkfztM6BtB46UdDS7ba2frL2sYcH68hsqMZY41qstoGCsHoseUgRot2kLPbCfFt8shettuqCjcEhWeQiCkLFk",
  "key20": "Qv3Na1hK9XH4CRqyfoMPpTcDnruxo55QuYKJ3pJPfK6wZqXhmu9Qp5JDCk3TNXQsDoK6PhKAx5scAxguLmd4gLi",
  "key21": "47kenHyvRe5Z9mDYScmvhYfYXLJCDK4fnr2ZrD53W3BYh4ymnjoXB39KcbJKZLHKnAfJFhzYL7J9e96VuLrf7XpJ",
  "key22": "3Resn3qXPam4DFH8jDWQZjYBrE2TVrwcBCJcnj3ggV7oYYECJVFUUiXamLhpePEpm2Vp5eZXWUPTnKEVsbXeK6Ff",
  "key23": "25i72DWnu6u8akPcAMpZihNSNcAF2U38hHera9w2EnwyeDsQoH7767xK1WGPHKEhjJQVFheoSPZx7VvMqn7E1hZT",
  "key24": "A15V5BUjbBzUGB3jBuoWGdErVgNkca6qGSmhMXuqbGavUWsb2pSBUeoVQZSrKGs3pQBFL6U3yYJVRzNLGb3EjzA",
  "key25": "2QJDS8dcxSqGm2VAajspou5fF3GbkHRQRcHuiFnijqLwD7n1bCdeSvHE16VJxKspV7emn9NivPy3pE5Uy9onrkCF",
  "key26": "4McLq5yiVeAEcarPjiQnYRWkoSpsKWo1eNFBDQSxq3Km4mXBjprPZBCrHbrwQpjEZ7TcjfE6sKbANRWiQaZpKSG",
  "key27": "4t1cTkLDpcKxCx6VJsbbLQJKQMwC5rDNYbr7TtDt71LgBqvwSWx9vCsg3iJVNiDbHM4ehBsGjGzNUxgHEvPxMoaV",
  "key28": "qeEYMadHdCrnFT4TzRewfcj32dzVMZ3mgwdgN33tiKPQnM9qbfagCmkaaVmvbJfFwXcYPrVxzBngzDV7x9hVG7R",
  "key29": "5dPAnxCN93uuAxd1PwwFjYWmUiNxVvFp4BfAmxxM7rxVM3YhQphyqD7M8KNoFwSQLUhmmMzP5FJQDZR8TbPuUptT",
  "key30": "65MRS1MEAvd6rDQnSCHKwN1njsbBXLqGXVYpdtZYnh7xt1aLrpESJzEGDAqaULw9PvBxDrqmt5TKbAZ8J9miZ8K6",
  "key31": "3TUkpc6L9UzVYeDSm4LHQwmH69RfcVUn6p8XuoPKaLjfEzbQjZDYR8JN3dt7bhQwZ9HmattWQuRXpscW2V2NYTZj",
  "key32": "2FFVxzDziJqjFA1oUQ5bDwMSxvXdWuppxCnVnXxJNEjXZDXirVnYUr8P7bPhs1ASHRHeqZvJsViQ9A7pgNuQJ6Su",
  "key33": "2x9zHCsf51hpJxEgchVP71qk4CpAqMsgPmzCdux8ULfoCkH4gC5EL58u9UX8jUDJzBAbVCfU2KNbfdXVY7riy7Yr",
  "key34": "VA5cYxZdSNBRKybcgTBWvX2PZeYrGXzNjiLDLNXkiTQmZnBsqQNwrEzcmou6veeTbsUB2QZhVV52jPxVjgE8yGf",
  "key35": "2BVWGFvEwXh3kiDeLUoyYoDdLq7sFGATa6LvLNVzxBuo3nAC7JUGeLb3QE6f8evckrygQi4qwJJ7AALFhuiYrPAq",
  "key36": "5A1Ps3H5FTXaouptxyLC63Z2nLNRc1zL2zem63LyzZVi8jeyhrqJ3JtCShZeNXoUPxTa5C5jdsDYLJXwWjojHDkQ",
  "key37": "2tLKPW6duHrWtfpvC1DootCo9Sjrw1WRpsje9NjRGfTT9mb5gEP8AhQ18DFSgNfBmdVUUddBQHUEowWerNFWxFXv",
  "key38": "QTVu4HR86EacizkETSJk8rGZGMG5JoeCCgCN7hA1bvNsvNQ1vzRX2Z2nJEy8AVPW2YyFjsdGNuJzvqgDkK2T4eC",
  "key39": "3XfmnTWnUbsmf72tZUU6u4oG5WxYnht7Moh74faCaU1kyJuY2WHf9Cs8qQd9iJSVGgk1p1hMrbVTPThFAJcQPSGK"
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

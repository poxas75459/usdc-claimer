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
    "5MLpRme2utohQGYsiMVHtTQLu9AmTAATT1gkAHnBX35Gpzp9RdVWWr8Q51WQk728PnFZt26BXJxunHqsxAiTiAAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqK4k2UoMSMzePB3ueuHhBQoRNtLCAjSXci4UqBdCweZpPVf4ohsgtvd741xWZP2RAkJfcHsX5QcuMBEy3x9ob2",
  "key1": "3SEyagMDC1SgSMSjinnbwJy4bqhHqiTMkVaAaxBnBr2wRq5TNvE2JfrAmyhqwDbo2Bb3eRXjYSyFUmgYpAyHQVeV",
  "key2": "dxo3KnpkF16zyCsZ8T1Z9sxDSELgkMxbQuasMRHeDUCEaZt1VTbvyrD1x8bE5rV5utJMs8XvuPTtuDtMxQK3bkn",
  "key3": "4L1utb84wdzmxzTeVbZEb8U4WxdHM4TSpm7mzzRypQweKVVQeR8aCaMh91Xi4kBoRgrdZaWS7q69kmFi8WoohwGM",
  "key4": "YHWXYTo6imjdtsCxuJ9ZBohCZqGSf7tT5Jk1E6dfKJPkhBQfkB1hDdBqGtPJPQv4GtVKvJyAQqpj5wdCqfvN4zW",
  "key5": "5CoA7X5Uv8Sz4xDjGbPE2mjjr9x9JFA7DQwPzZ9CfTSNZPWroDBjjy8gxT1B9HeSdWYqNy9Bo5f42VqoJYNyk9dX",
  "key6": "2vjRqyXSfzXGDfDhtU5DNhDDEESU7dq3xGuS8NpMxeDbGH57SVBjEXxtT5k96CEyMtiBgh3rSG2jrDT3yemVwoMU",
  "key7": "2JY4BR7juq422UQu2DBKg2pkDqbaQhyiJjvqdm3UzPprEqnLVQDTyUU9fKxP7qX4qkdvFZS9b2tf2JXRsptJuTpB",
  "key8": "29xCjpX32Ng9C1u2jkDmp4dp2ddGhDbo15BWd76sYGDzSyK8Q5ecQAMBDzeUSNVdZs6Nd9T5j64y1aT64JyppM9U",
  "key9": "3srSc1eF58mjCPqwJPDgRX1VeFySxgTA4kqhH4PM1iDnJuHuXvfyDUoapCXqS5J7bh5txzxUAVWZWpsk3iL1qoXc",
  "key10": "5wpBPGDxa6vg8GoZrrsp3UukCNgTcHpKxDceUXYZh2CsgDJnrZ8PRWmxPmoq65ga8jQEM7Wj4MDTKKV5Wj2kVoAC",
  "key11": "59X7g57iys4UTUvj95rBhrnwC1sRGVyDL1EoQDfWvHj5nbHh9nUfXLnyFkgoWKajgFxsaoApQ7YHsC7oMwk6LUAC",
  "key12": "7oZbsRrfYYFCRJTS7su497BDgJQPfNqmbCJGzjFrCRXajJYvZL1GZVgjinzjm2c4w21MS3qazrpZ8DFb2M7YQf8",
  "key13": "4MZR3PWR4FwgWTUnYHvV3WkjrMdeqAYdKex1hhgCixu3K4rBwuh3FwcRYpf5HhXD9qPdTDe8uw9gcK221yXSSvUU",
  "key14": "4GgspTKkcfng8NMp9zbv6beafLLLgn8Pm84sFrDsKwoyr8fFdcS157utQ6NpdbU5fBZD4bpsvRPazqhK6YYrE487",
  "key15": "zZcg6JKujN6pdXSagssopT1a6GvUkQxUJtqNMpdZX4UZUT9fJM2MDvJ9Rwj5gZH8VAhtCnL5CoAvHnbeCSVQDh3",
  "key16": "BK3YKFWPg5MrSKbwZkPQJ5JTDooGXLKRDmMj27Mb2VaomKxPannUYzQ8riRDvmJmDVNVZoS9v844LWj5rAy3RtR",
  "key17": "42hJiA7MsTnuFgkQB3qce7NQBJzZMyETHZVEFifjKPR6FWYTJqFXPGBS7s6SotW1UPdXmqQwnRtJh1VnzfYatAS4",
  "key18": "4awNFN6fCdz8xWCbVyB3uRL2yqysvJwmREncVpdcSiFRqDqpguvnaG8qz3AwMdk938MwxprKdRevFN6dUGQ21uLj",
  "key19": "3br7Yxj82eL2hQbhbdXXNecEWCQK2mwyZyzEJ9PHiYDRPMBvjgpgMyYRUHsp59meKiFCkCpNdsYJkYTzH2Dh1HhB",
  "key20": "RCNCu8jZstwmws9EYiCvdYvYmkjkiSzeZd7WNZEqej7RB29Degw58W3UyAVhzEQ88JUpwnTWeLAKauAnxshU8Wo",
  "key21": "5B1DzPwDtR8N5z47XFmUzV5X5eQCsd5VEY3bbhYuCZubrdkYmhwAAA9rbNmM9YRppdhsvqMcgdp9Mt6w66AAexFJ",
  "key22": "5dsic4CCZ4NDuc8Xya5JfMfF1utQXHRvBEZXLUqNitBJTt6DWeo8r82NwvYQZmPSEAomgwLdkntbWiGL55YT2hzz",
  "key23": "5sqzP5TcivEvxssaZa22S3MNhdYyYiUCU6THQP1rvPeL81w6pH4eqNPdY7yEWJMAzdqVGZBeQE3VXaaxKrYVb8kT",
  "key24": "3CzHEyjaoJ1TwiCkwfiGHJ3iL56m88pyg3nLN72TWDgH6g6QQBsFLfoFYnVVriDM2RFQckT8ER8zK4B31q8mNf9i",
  "key25": "5RzqCkBA7D1a6ZGYrNfbtgfpBnRX1gx5EBicULneAoX9KKJ7W3u6xhfQizS3haL5eAgsx4xeT5BxWrwD6f7GzCLB",
  "key26": "4cPZCuajsJf3Xc7QSTqHwcWQUcRh5awHFX6z9CvZYmV5yZVCuKcuHxTwv8z8HaytTLk4dHr5iFvsiSqkEXbZ1AVc",
  "key27": "51fvH8PQWsvxSBaHFAGc52QGWABfUtGkTFGwEyCjZk172AkaHbVnW1g9oinH2uTCgNjVwGdnspoyddrQ2jSn6Zz8",
  "key28": "2eQ7QLVQUN6GGkLrR6XD216P1ftv68GC9482nrZcaMqFADypZEfUCFYLxGDFFaBaxTkmqYPVRFS2Pi21MLzakP8d",
  "key29": "3VJJYEAFSdbS9mcb6he4fVCvhuJBJXaDxGycdcYbXMB9fAcgSUhtPGPjSJfb855eGSqyuHyQCBoPT2JYShfDwzBr",
  "key30": "td9L9DxxMTm4semMQA8RB8dM2737ikidLFSidgt8cH61HavXvGXNd7Yvs3gNFbo5qHBg5y2ngivP37fRnYhN5s1",
  "key31": "2yeDhfuh3YPZoFNpZFYxf8LJBU7bvNGGPgQAvZiXcEPBxrVTk8kDunuW3xuVQD8YMPQjffS24Huf2wpkKwyfZXoR",
  "key32": "2teXs7yqwkA2fDeHpd2rxCErqV3rsDUrsxMn9ygPmZaLWLPuxoXxdwyybFkKkdurh4LuKepA7SKzZ5TssZaVRWqc",
  "key33": "5hR8xfvRX1W5GxP3ihV6NFpKMvxFgn9Qz3bX7vjLCBaXVCuVB6KYmYrxak66NJK7nvXoHPrgkjwduh1Gm9TGR1Nc"
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

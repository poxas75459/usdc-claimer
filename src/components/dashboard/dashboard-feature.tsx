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
    "3PQkwBpJu8WLhewyEWGHvXEwZ91ihvJn963ydtWPziZ4HpgjGDptfSSACCawtnMdS4gE1zYJaQLsjJ3SURdhdd52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8U8EV8g6QiwAd8ACVUojJT5w7vgH6R65kmTzUgSq6PZ3H6CaMZ9BeexLtXUX1zH4an6WzxHWqFKUZiXqQF9LswG",
  "key1": "4WEMUkPdFePS1ACU5zvmUbFGnarqv2HY2fjCeDRkwSJzmmVVYHYSZJJpA91j1VufcVgrmNZDxjAZDPj3Xaus4BJb",
  "key2": "5oSfzR26Ugzd79xJCuJDPsncXHE3h8SwZDuXYHaWuid9J6HMjSYL3hpwWq2yjxiNQQESz5i2M3ym9MFN7aCkiABa",
  "key3": "5VPiM8C6i3v6kS8Eqk8CuPjY8qVSxCPuLSx5P5wNJSMKLD43JYSc3ZU425UxmKzboJrZvhR7VCu31e1J8JwK8XBN",
  "key4": "43mFiTNHQWmuKe7D5xpFzuVrqdtjsiRgSsKMdXHFbLqMehtidaqNfx2KypZpmQPZrbrhDw6jdAN8ibPHjHiafhHT",
  "key5": "2soiAQnZVcfkHN2DFruyVY3FeqmzZt7i6SkaZMnXxg2QVkrLwY2uJBdnPXYXr5srugTdTYdp3yobkEeyVqJQkLG5",
  "key6": "hYKbgGgLMeT736H8XBHMD2ShzNt7ZNEqT6BwwP73L9YR27Bu6mBihk3jHZ9aqx5rGtZ1ZfRkgy5ApwhkHGJ3k26",
  "key7": "5fymHS9rbyFCGk2c5jbBChTuePArSLmvDWYmYHG7pX61et3D1BqmAihqjaa4tSpvJhA5h14BYDkSA3xNpAmmt33m",
  "key8": "3NsZY3KikXfg7B9W1PhWfPzTLGRbfCU6UUsRbHNbB5m3ZvNMkmTSdshwuekqV3zQUXtn4b6FdeaXzYKAnpS6PVN4",
  "key9": "3baojVoquLHbvuyQdHNrVWcrTC1TNjpUnC6cv9vny5rs5SgUgYNysqw6LQ6MJZWpXpo4ZK6pZMkxSx1hxbHSoHBE",
  "key10": "3xbS6TSFUzXXGeZU3Q4pQScVq6Lvv8hNSPdEXb4tU1T2nH2U4nn1x3wofNAwyD3z7sMvdRrEfDJj2HUknjKuAhcv",
  "key11": "5xCznGHgCJQLnpZrAgtipHeKpzhp3UdVciQoHfFAU3YfWd3HBgTpVgmFeLzeAZfFmAMzGLSv69QEPa5M3zPPuJhP",
  "key12": "3bStiG8bPoxxyJi8u2BrZ3T5EDRDKp8nk2d9nLAxD4W7d1tiPiFbo8b7FtMuDFMYdQakoGAMwnsnkoNW7YueJyH3",
  "key13": "DPXKe8SRnW9YCGoyW5f1h4iaf8XW5FD3EHhmE5oLoMp9Yh1Uj55dgDoJzUtvc5f4rLLaexsfZs6FxuVJLEQH4CJ",
  "key14": "JEVM9sbZgqst5hR4YmrUNC9JZLSqL6e4qVdVLDPSX9qoryyedN7nMbQreX1tZkU3xuE56s3yca4GVZBrXLjSXja",
  "key15": "5fVa9wUkH1XYo9rMNA9axxkBKgBYQxneHjo6YkkBkAwMs4mS75US8pJcnrJfwu9CNBJpw8j6f7Jvm6ddMSDmdWTJ",
  "key16": "44Ea5yfWB6xNJFHv3arDFqHwwwyDJ8WK5tgBpLWPfQBRmsBCNmjfgcP8C7Pz8tSK8NwnPe5jDrDhC9d8Abf4Vu9b",
  "key17": "3WUkLUjqqBLdEdwMWapj5jijjct8MhwWtpZ7miLQmJVhFgTQgiEQJLzTum9TW9Yt3feuWcgTAJjyWKuq53Wz8BRq",
  "key18": "5wC9keeRnPohHteaPcMK495ags6MNSjMUNqYpjL8QBXPXy4Pohsid5vttykD5YUvAzjcPHpD8Wzd5kLoGbg2q2ca",
  "key19": "2kHjfkJUfVezi952GDFJmXuyLLjwMtmWj8kSEnFxWAvpVxoX3QbMnGhMuSveD52jGh3gEDdNiKPYnXqqafcfFk8F",
  "key20": "2hLKdDQMJm2JCX13vNpeYsSyyE5z6i8kKtZeuYbhWZnxCvQKQBeSP9PxaxFnwZ3EikkSNVJ7CA5ZC4J1rduj5T1L",
  "key21": "37vxYA1pHVAQWnmfJATtdjyHukMJP1ABCoxWUFBXeKcmaYb3YJDFnK9MP3eNx3sEmqm4vNX4k1BbbJMbYD7nXZSH",
  "key22": "3AB6SYi4jtam32EaNMEzH7E3jxNe8VPPh1kVK4mcWWfZMdxB7Qo8Tkn6yGFSgqEa8gFryGrLBKc9VvzQoeLUkjNf",
  "key23": "22evfHUDGHyza9td96pHrsWCaxC6jDvBEH3YYgLekCZenCyMncmyzNQQAGySbSqyr1DVxcMK1JULrQdmKVHQ3Jhc",
  "key24": "5e7y1VJXWz3Fsn3NtgrCxoYDNUXzJWWmDksE8NMspj5p6TuLdhEHcVMQ1wLy4uhRAD9D3XDTBCMbKoktAPUc1cbx",
  "key25": "575KQMTj3dFr5xyyMMYQRLMbMb8tuHCyiY1xoToDPCy1WupG7P8M9tEwRPR6ajwDrBktNyrf2jEfZx27Kx4e8RSJ",
  "key26": "4a7T1SrQG25BqPcSozvtBEZEL1XhzzNqhjH7B2Pxb5XAo3Njyn6BMgVsHo6dxB7PKEPEZVvuES5sf2G3ZAA7mwP2",
  "key27": "Kxjtb9tCZhY2oeLGTuj3Va2zvnsidMSmA8JT2dk84n6vPK3f1ix6fHTPrXV7vRYNaBYV1yHTMeNRzeVhGMgb5xB",
  "key28": "3i3GgfMEVJ33uFeoLWbSQjz5zd5dZuMyh9XPDi8TdCxsDYodhtd1hQ3hzMZDXYYwePR8JSux8eqsVAQeQvyzEaXz",
  "key29": "4MUJBS3TcrvdsRjap3S3fLS4KkA6g8RLYup5hfPmAuz2N1NdGHtB9V16xQuCWeyvfNVdrweArj2aamTeaEtdp6pm",
  "key30": "4bYJCeJhNcsTDsin8kzzHQdpNPQsrTxja195ZeCShGepAKsVmdohyCSF1w9uhe159eitK5NNkeeUQ181UiQAUpi2",
  "key31": "37HzQUdSxjfLjMWgpBq2XE2jnzJj3o3FRv6iAdGqEB9ndyYUxMQL3JH8u1S8h4he7t2zdZVNg15Hctj7bVzFPwHE",
  "key32": "4q7QmQ3YsKdz6cZMFyxxV9dQ9mu2aRn72GuqasA8qizDaKDLHEdvVqCJq9V3P4ivrf9efrQK3JfQwHDsXsnf5KoR"
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

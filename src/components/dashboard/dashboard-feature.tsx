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
    "4K2pBVgvEhgBmWChPK4HAjVvtMG42Ec3Sr4iDH3haRLVq4THBNW7pqfXGRdGQbdNENp17PHs1JuKRJPFiQDxmrnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfeQqXzs9jiDjfrZKrwUfb9ZQM25vY6narGALnoEstEFs2WigxJn3v1ncvq2PMG5Ld2iA7ReRWUc7GhpqBp3Mmm",
  "key1": "5w11kHjTXaS7x1YH68RhKjwRif1fBZhmJxW5ehByBY7WKwcihH8j4EfLtbqgVBX69xk5TEzVddwuFVWy6574qgfC",
  "key2": "oUKpFPQULKBaYu2m2RpZDEM6HJuzAEhWBte5EwrGwifFRpf93xZAgCHXTwMM8rDWxwekJAJ8vRxgMAVmctcNyuK",
  "key3": "3FdtwhFLPGBT9c7zSf8csTVy2Qyo1DomWwvoRjuB94HAfDkRo52x9gsMHcgamVZzdFSzu3wY3Q6wkXZ3zx7adJDR",
  "key4": "5Pxe4hnnSeor9Z9nosDmpbrGKKvXQkzCw1mQzJN5YqoPT2zFfzsM9AY5xfaUqdPXutw2TNvJaW1egnf9in27Vi1H",
  "key5": "2LxjUMDPPzCVNLoqY7AeFawKbE4xaSaaBF1vruHTm1Uq2yYXEPcw5XFpejBEZUFS5CC46hWoG5JvJhAXUFx9aJfX",
  "key6": "5qVYWKs2ewkx3Y9yJSrxeCcdttrcEFoJCF64o4KC8Ro4AqVjaNvsknEzBbdL6YLPrL2ip6AhsKorw9hZnSeqcVc",
  "key7": "4Py8PMvf2vhiCA3pqYSfo6s6PkV7ScR2Djw8g2LjLA1NA5CsogA41aFAHAwu6GRV4sijYWg48NeGDvCgGYEZpXpg",
  "key8": "oW5yd5upCrjKzPYWLgvmBYMBxzEopdckcvY9E1KV4khuVfrjMqJdoQGq6mCmdrKzi1ZNkJvtXtkvL8X6bw9rEwk",
  "key9": "37bwN8XeJDC7GLitFpJMpjsiYvoViGT6wux6sNEkQv6XQBizLjXAMwGTbQCU1bn4c9vJPpBKj15n54hJi1AY3RZG",
  "key10": "2h5fUNdgTJiov329oVzTZ1TfdYjjaYj9GjvJVHn2Rtw3VUjKYFpniz3wQT6CCfQzqyohERJJFqApcTHVfjmhX43p",
  "key11": "3Kt2KL1Hp6RwAapkzWG78KMJnx5rHes4pHpaS9UPEfkujHFGFSkZxHqKVr2jRCeuUYJW4Y7yGdEKWi2uBPnp4gvi",
  "key12": "4ooDCEQexoZEGzaYs69xrPFGq8W5fzhE5bYzoz9W2eHBbvcZMABh75bqZc3RQYHtyq364Yt26XuAKTV77i4aTE7b",
  "key13": "5i378JsPngzVQDH2ytg41fBeBFrFcb1vPBq5z1cZpDqmXfBpKwFQvdFbUoHz5vsUMtqyxNuNWNK1zMooSpfu4QgD",
  "key14": "57oTs9aT6U96YN4yTzwhYjoaHTdhLc9afFqDHkZcMMiCE138d5HNyFxUQ4p5NnMrrfHR9JYEEfrDfa2tZSz6K9gy",
  "key15": "5q2oxNEoGcd7BqrG9TbSqGNbqN6uJZiJLv95u9dpQ8JWu3XdnTcfY6XoqDEkCiNTatrfpqtGSqs3W7yjdLd7CtaP",
  "key16": "48J8SBZHN6UPJFsvUeX9NjNHVKcdmR1t3xbZW3Q5KXHLMFrS774SuTMdysauUTSGAUC8ajeiRS3dpVCwHWuXGXf8",
  "key17": "2vtPR8Ubh6K1rnz6VmUw4o6dFxDa9R8zdfihNxDefznPT2Acm4ASBkRh6NuvWZczuFaX6ZKuNW945YNDUNdjZe2s",
  "key18": "5Cwg5TBWtWTW9Ki4eRqs1zkD3qhAKF47JM2hnUtaqjupmXTXUyXvrXy8MUipo3JLHHrcoQb7hTQwqiBDpMZizFeJ",
  "key19": "47SigMU3zsN3vXu4HUmoNJzKjAD8aE2yV1oJWEmMmTC8439iWqm2D6YvdLYCqPEF45qQh26KQv2TqTBVqjv1dHdL",
  "key20": "63VJQPdAnnw2APf2W9RyYpqffJs9Gb7THnvLC9y793WwAZ2QurXwaFFhyMQpADhvkYy3H6Y6jbUmiwxxASBxH2zp",
  "key21": "4VYeCJH3YsHHE9VAGAKVHSo3wgHLKMN4bF66Dw7FMZmsW7b2BGao45GyEVUybfWjunyqoeYE9ktRYDSicEwKJsK8",
  "key22": "3t2zivxNKhkBuVGgEJ1sQsjsuigxYxX6iJNRYmX89ZeUFocKdgJUwg1pawinHzviNZCtnGYWL4kKpJW7hZ35LPJV",
  "key23": "41DHDikrc3o1UguBF7p5ogG89RzVyYNgZi92WTgY7StyRiJq21jELDQyZvmb4DgniyqLh2qpWdQkb59hPNQ2Uzye",
  "key24": "4SY7fUxywbPgkGzuFayfUCUrkd6BP4a7zaLUGweDXtTYeAmhD2BE1ER7BRwpbWYczaDa4JHCzqa7527q21zvztBS",
  "key25": "3Xk2HLzoGcfkgBvsqT5manP8D8kGs7kKcc393yoYxsvc6ck8Nd2WVWMHJFD9yD3UwS7yFq7ZPvcJoVtAU9qAFhr3",
  "key26": "2pjRphAP4qzFXcB7TDGtUxP9PpGrJt4nYh2QimFbd1FDiGg24DqyG9A9fHHizWoWgm4uWFzUgVjCXqbQmUx7Zyb1",
  "key27": "5wGdARqPRoXriPnnnj7aF6EZDMyQfZqvnkicBAgFuwH3oxcmN9BXM51rqUoRwM8fsQSD36LzBCEsschDYebxjM94"
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

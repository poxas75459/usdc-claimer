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
    "5Ty46aE1qc2o9wDY9wjd6ss8rvZnPZwDx5QDMvyVuAaeT1AjA4WzdXEofpASnUdbWPXB8owa5qYGPzMMnMwdyWFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nEmg6hF4uELK1TPBEXTTr1K6uU7chhamjE8a2nUodpuBRxy1sE9kLLc6qsikhn6MEPXhZ5f8rYpYygELZ87qDp6",
  "key1": "5iAmZcFhwwUgchQ6uVXWcfeSDmJXb9T5XH6m9eht5HEb3xnGxBsVbi9DodxAXjErYUhofKHJWM52mVrbbyrcSfF5",
  "key2": "g8i13AmgLHbt29EVzUzBHabbXEbJvxcRo3vDCWwJTsWHyd79Wpgci9g98JYQiZQqgwneZNBz5pBZgjWheVosjKk",
  "key3": "EiEqZg2zTuy8HDtsofbbx5U24PdGb55bdw1wMz8mmnBXYjms1qMa2qNiwJe8fwKha2hD2vuhYN8GNRLj2zpbShR",
  "key4": "SGKojfaoQoDeFRVdPHeAJvS79VD3bznzDGGLS1EFvSiQvjLRbX11qEd65F5fGcDGxbK9UcpdJyjy7z5dXQbiZDT",
  "key5": "2T1TmfDNXifxVFnxNqf5wREXg8zC3oYBcVwJpSSLR9Q4zB2iycxzqMeLCcVZ5SBsxncZxaGTMFt7qqQpamBA52zT",
  "key6": "5rmQ4XLD9HGWnwKGYMUueDPkQTPfXbndq6VHpJ46Kj4Ts5xagptpZHhdkH2EeeYQ5QnUpxNtLHDVxzV49KQYJrJo",
  "key7": "62wwEiCpbShag7iYnboNpSsYi4zmNySgP5PsUTHcuQfYxo7kubkiyYJxm6pc2PdoJzWqyDKCAXrWLR8Dq1Lw1sZr",
  "key8": "4fHMiPJp1mziiCzLhjE4BCKk3Mf9tVAPTcoFhJJhvzJTXAorbiqTXPs13KyZuys68c7LEamg8JGRcHspSVoJwutT",
  "key9": "49EsgotMacs7LWv2JoaH9BweC7DJf7uDUKLRs5dk816wbMLAhuTVUF9DzwVq5m8eNd2CWNi14RgN9x6S3whdpo6G",
  "key10": "5NoB8JyBDofm3HxaTfavftEfV9ZnaCNHBYkentXWWxEfirXokmdzX88qYwsBBqrXhefuVWdVBs7EwVKkap4syTLK",
  "key11": "gpXe7vzh8gQKDBJoWrNt9htgWn2kupnUkqzJCVYKyJQ4iMm5PARgoQadqL8SUNqTNJ8ZNuXobx3rDSjj4mqM8Uv",
  "key12": "5RwyXQEwEfAJw9ZbSvJBQrPoa9ApmGJS21bSyWYfoBQEDetSwHS4e2TReVqM4csuNg4V4YqwpVURwJtq7Rtz1qa3",
  "key13": "4SNExx9h1NBi9HNNTwsapreyzHraMgYkZizAFnx7ULP7bvxoojxKnDr6oyqo7UbuL5McyzSzRw4pFNYDLNUsadmw",
  "key14": "4XwALZGczdJy3gn1WgePzraYZP4k6A121tr6bSEvsAexUGxsXEuXm5Ks2aNzvs9euivkT7ZvdpzGE3ca4PLxWN3P",
  "key15": "5eukCyQPPUqxhcFcFUu6mW9Vw8geRabu6jWsKQ3SoY6pnC9FjJWbYsjbyaD6dAbWPC11eitSSYGBQSyMVGkqoKP8",
  "key16": "2Dw1f6ehRjZFQbY8uoPSWvH4ymzJjfuLXME4D5gFv9Vk9KsEyRDTZKDLo1LCQB7eTcY7aWmkrghuL8PDJiGfHWZG",
  "key17": "32uH3mBjPUw3nZNM25MLRqe22yNjHXcziRjR6FdtY88bEEhzSabWKw3ELq1ssSssep32MYfZSUjgDVmz8XLGbzuf",
  "key18": "6ca9ELaiLY1ubqkoxhWDr7XPeUuyhzUBPcVZXrWZmgoonUm9x7T6to3eWazuZvew2L71p2YWyJXa3PkrCctsvNq",
  "key19": "4fdM9MoHq8eNW9HMMoyZu4pdPUS2rVzQ3rH5jGRErPGzAJrQkCoxyBTuD3C3g2Sryu7cPo8oL2wsQMtRNfM6J4Cx",
  "key20": "4DzCWx2r5bAS5cUuyvbheKzxBmXx9UmxAM1yZjs9HAxUW8UrwQoVPFF2tNPw9fsz7NbwpimmHGZLdE8mMoKAbBUq",
  "key21": "vPGqrXprnMXV2VgajPgtGcLK6j8CM2WjccShzRQj2Z6MnQ51g6UbbtUiV2fxB1LwpMtN62YWU4bPZFSzvxZrCff",
  "key22": "5x6TFLU8ecJimJTNEqwSm2HT1mKEdxGGUDs8pzqSiCquqNEqULnVfyr8HQiH5bGWmR8rnrwd3hVDGE8Sh5pW4mY",
  "key23": "48SqK3B4YxJe85EqjRenGbdcHYhadAVHz94pvzAPVKvCzmaXo4HfkgyMF2gy6XjHr2ghiwLUC6PVUwRPGdWrfcfm",
  "key24": "3nGBM7xJDRDsXKpveYd2EoFhjDRSDPZXxGptV61XaDFuXji5pCa8ZVz2EZdMQzYM1Z9YPfNHL2rqVeYopT7QMW2v",
  "key25": "4d5mzZzXvaXguZs5A5AWGCwWM6ovtZvKSa3R7y3JP8hrX1JbSQA4NC3E4PiyWU2xBtfumuBB2B2pbCCYmgfRPdfu",
  "key26": "5KWbZ1eA5ZHViBeJ7gLrBpYbCtwsSaVgP1tDvgESsVaPqLh4pdnZC4uzRRY5TscRD7WmjKnqW5MrtgRUfzXt53Ne",
  "key27": "5MRtAD5uo4G5eRVFJUPeQBzJhtdRYKGcze5Mn9JjZjVTab27jjymjkHe9NhXLe91xLaq1zsGmWECsXEv4DthgjLr",
  "key28": "4Jpj1LuimoUv9i3SQQ1ojge9MjkHCizC83nENL5DqajFjPFNGRwrmZPe5CcXd1cR2zn6KmtJ7CYhoLnYSXpR5Kgx",
  "key29": "3KT5H5GLV1Tf4Rb33Ht22BjFcvhg1yeDMHEG2L9WMkWQet1HEtfwb1QATc9fHEBx1REne5zGcZinUHX7YaT8nwSQ",
  "key30": "5aDuqyR1yQMuKaYyhbMSsnUmRyzfyuHmFj6XDdWoxNQjdz5nzTcXkP9PwCPhuNgRS8E9zX1FtCmmnFY1TC4wjPxA",
  "key31": "t8MkUJicohwVk1uVv1X9XG6XHWGiJXTi7SgsLePXhJQovWLQAwVqiHKJ9WposrZJnZoaYELZwcHVNRwK2MWzchG",
  "key32": "4inEMP9UjbqPyAxcmkNRzCBXqCSq7NyEmRpzzsaBeA57Lz6QRaKzm2RXBrNGHKmFiNsd8PYHEzzcR6peqzr8M72y",
  "key33": "e7m8GCnMWGeTL6L4fbgBXEEKsMFKJ5xjf2QAgFm31nA245SnmbPVjhyvgNKqjp4qAh92bZxN3brBqnFcRZtdjKq",
  "key34": "2QgZGc1ncGwzQ5jhDv8LviVpCj8pcE91PMArE618upYqdxAjEsLKcbHe7dsuPRczD7pMEy7w7VxZWqj21KpCBrxb",
  "key35": "2k9iMHgmAc6hEoeJ7WuR89d5E7EfhwAahapcGZrfCBPv448BmHoa9kKuxfykihp4Z7wKpRqeeMS4hLNkJbsoFA1L",
  "key36": "4BXsin8PegrLJvJyvtuiqLC7z4tJGAdMYeyvuQ74boGVSPWKuEnuASWLwGbFMmmoHdDAEzVUbjt7CsS8NF2rWziS",
  "key37": "45vSGUsfvHytoHSD66U5ntAJpLCNt2G4bPnEeu8rTegCL7m4sB59fC8geesgBtzJPrPHPxRierHNVhCd1Xn6HB8x"
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

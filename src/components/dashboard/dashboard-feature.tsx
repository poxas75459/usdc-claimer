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
    "Bea8hcoa1CD6daxcL9C4jZi3ZCcaxcE3E1KAYrH9atYrJrKjAiMpoUAqNnatkGBbHwcS2ezjsqAuvesf6PBmwEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXbvFm9HU8bt1Se9UahwDWNiYf1SBnEVjK8F8ibv95qzP8iQqREY4DGfY4hQvSdQbn2PYRb41VHwHvVU1rQpFYH",
  "key1": "24LYMJcEtRqWPC4FmzYHEAV1DnfuYDCUorbcZwifFo2zPe8STtMdhkEbP7pPYRwnMwV6cYEvnm2Za7NM1BPv4zGF",
  "key2": "3hRzTgmz2b1u26PtBJn2xTXi58Ag9CVzSwVph52PbPKFaNCrx5Zj5AUFVATmVCszppD4YECzGkaGfwqmc12ae8AM",
  "key3": "2Uc5JmmTTP6dDnpXhgpiUBbYJvfwiQVbojmZd7BK7tEznZMLZE9C1sMedtn5jcY8Du5nZbxVEJpAqUJ8fxmJbMx9",
  "key4": "3FaAFbxbp162UiDwCQaoeMYgoWBE2mJQTSN4tVTr9oEpigQeaUW84HbsesQt9oNKiB1bBCfr5LuG1h8ua4XktT9u",
  "key5": "2WeyWkCqdp4Tb2qANCdcPetpBVcPKgHyZwkYvSgdudpNPZs1KC2dHnBeuQ7ycmPibBEZmxqsnHQTWvQHi9HKyUD1",
  "key6": "34fPFjKTDdhwT98tXnPBVHmAz39Qvoo6F5xHH8qnwf9yJY66KZFckebFCDCvQn6rXWDaEyHyPAz43GtcvMNkKLce",
  "key7": "3u4GQd25ZP1PhFetN4Z9GctoDAyihEcS341U986MSefHnPgnyLZzG6Vu6hncXVadquSUiyXFiTpZDEvQb8ZKd3Xh",
  "key8": "3BPHwpSWRgf956bdVYoCFmDrPWLSn1aGpMGQ656ijrd9nnHekBg1FaCVqTHrHuuCvq3JGmzpnAcVNvzSm2imUnbB",
  "key9": "d8rtJXCpokPbV8uiZAqg1QYnL8V62CjDvn1ynKhrtB2ui6RQwnk3hP6X4WCxbjKUyD1BECJx3NMjf38f5EmmzFr",
  "key10": "24yaKgzGS44YFPH9QX9gK7bJnaFbBdUg6mrCiLdm7obAKunZYP9SoFtPPFFb4URm3L9VyQw9noUtoyG5rLST9vmv",
  "key11": "4ZF88HsWDWnGnhnV66jRVs8HHGJi9xQYxYEcYAm1xo6FQxCNShLMC1HTuMNp2D5uxQZCd28RL6xjfxEiP138hmUR",
  "key12": "3RS56DU8z2JPapam5jqX5fYLKhZrJdbGkpX6vjrAvP7J9bfbYHVQejjCQhrNY6Le9HLcedr75vM2zbE2GaMDWn96",
  "key13": "D5bMTza1YseVo8QsGw8PL4jZDTj3qVw3KGzXxWs8r63naiP2KUt7gzGBeXMJGSjv5k3WD3A6KDLsy7A9oMNks8U",
  "key14": "4n1WJNGqTuPt3FKpvoaSf9PuXAPfPTBCVUKXyStPsqHR5kvVB3M8396xq3CxvQ9bBEpypFBoiq2qKCjLRDNcWeYD",
  "key15": "5e1V2fGVScQn68ytNXCRhL7zFrGt6icdApcujhNx69sM7AvkjSqBtqzR66dZdTxbJjVQcgUUoFjFD718CjGu8psR",
  "key16": "4DnDGtiGqWvPFdmLPUok7D8hbwcrwsqwKfiPPdadr2HyBezUvnoPcdEnEGjpkzb5qnmcNnaDDUZt4iP3oTXwFCYw",
  "key17": "4b7STTqiEjWSLfrojB5oLRp4jAoJx8JRZs2qr4UXTNhGBSVdLgRVyL4uh5JpDcBvw7XEyv98qdHBkHJNrhDhP6Fj",
  "key18": "3Qg46JjR3CUwKRsQ8qQ9QrgT7mkGUou6AvHDwxZNwjT6DVzRoDBxtr5CmwEbad6TnuxfUqZvpG1vCuZVmd7x66Rb",
  "key19": "2o6qUhYj2LhLymHZKmSNHUoHwgm2F667A7kDxnd1eEAo2grJWQjAYMpdmxRHc7cm1JTuqcjgCVpQuWzoei8jWcie",
  "key20": "5CUBTBjMXDxYYJ2oH83T3wD4h8NBJVptd1NyzTgVqcUGMaFeNfoUh1AxUGzCy5pbcpAJfWLfs9G2VfN9uPdoUMUk",
  "key21": "27XSzoMyLorqnUxrdGi6Bnav46adxTsQhV2SDymzM6RZ62gmYfgPQtL7aHMpcW7CRdgUUqTdCXA7JWgWXeLmjBCM",
  "key22": "3g28aYS4c9n99PcGZuaH251FFTDChwG5M2UVm4CfBKKY8rPU4js3VtPnrn3KkpMddDG5FiEAMuqZhQf5BseLrgfo",
  "key23": "3vnghqyaqmJPErFaX3trGUkQDURUBBcHD6ASW5JFNZS7zVYmJLjKtZHoQ5Sqc9irXFh8vxfQXGj9SWMNX1FXky43",
  "key24": "4wCa1uH69fbRXTeYbvCiBojngqKwSH6hHSyjiVvXwsFRJC5s2tYFzBc4aG1HoEYNfszy1kHqv9BaPhu7bTVXLdoy",
  "key25": "3n4BaqciNb3JMMsSYnknX2vqo4Dc34tckGSR9KVb9rPqbj8Ajf13HRyJeQWKgbpqbpWEbuoheLc69Aj8daVXUCJE",
  "key26": "5pKneqTomvfFa379JFNscTamSpJ6YYM2wEfx7J5f8zXV8ZnQ75NWFn87Vb7QZeY7jwd52iZwJ7iXWLgkv3odt7Nw",
  "key27": "2ijAbnx8t16jEVrqQcxHePkEwpmkKN6NBgPLbkaNTQbCuM75Eb6JVB27JF75xTVsQQVG56hxvcBkMYooYzPa5WQv",
  "key28": "3F2y6ppvNAL2BpTubv3nS3fyMeqKQwsJDsjJCPY2QFtoufCrjDjwGi4qZCgkPSPBXAcZDLdp39eJrsdDTK51aB7z"
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

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
    "528XNFjxDoEGMu6RZ6Smdo4AmMpmdsR88Ewbx2ZzrFDF9b6fp8U9Y7fpaaCgAtM9xV16DQf6d5qLYUvLSTLJ1ngE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUJCUonVgXPgeRB6WQMLGnKnccwt3qPvE6fZsezKijBJpwmqHoxc8UyxUzntZ46dv1e68B2T4QcP3JrU44gz3eB",
  "key1": "5SSgcn1N7Hax7Sd5Qv6tQaSir6YiTQd6BnKX2da1WhK6e9jRHS1NLP936hbpLWnaxkuot5ADeTvnc3daBTVxtr3R",
  "key2": "2F6JPJSYK6aKes2zksZn4dNTAvLtGTu5w63kTaVi6W5XcoCMB3DHMFaSg2LYKgJHN5hVf8cuHhjoGXxphVecGrfc",
  "key3": "3KrYpUmFcHP4gU5WtqQe1nG4hx4cUHAvQzMu5ceVfYULS1NxFv8FMnsJ3pZNrQXaUjXySA1Ai9gWZBxmGfnmhGHm",
  "key4": "5FVq1C6ywbTBMKzySmxJENKsaQeg7nEkVMcTGGcozZfA3hg1P9K6mbr4gegK8CQ6U32GgxRMSWH2KdQEp9Nek4QJ",
  "key5": "5jAqs4k3XmKm59AnAmRQdG4S6ni9RUF1S443HqoXVzzfZmtjW34bXuJRhCywUdZHVfBbReSqdHqAwsC22TZxPdCb",
  "key6": "37PZkNFhXYK5MHM6pjLi45iP8wpRKaTcCYRXsHPZPA1Q2ffqn3fGD6TaS3ws2u9HizpXNAVbq2khPy5DuZiBq9Sq",
  "key7": "44b6DkwUS8vAKWZ39yEunSFQEd34k2j2bdCSWeJKiGBiEEwUw2SrKVgw2kpCzCeUAVKh6RHgWfnSyLZgPg3J6UUe",
  "key8": "4y437myrWMKitK6QvjyHSHWQ3QZigJ9Tr1fCZ8x558k8B1dNHyWNEDWNSo2osf8Rk9UTicnvoop5b5udcDxUurbR",
  "key9": "rPf7CEQQNotBhworRB4DteRs1bo9RZgHRCw7XL1Dq1HLQ2ktiwvETtekJHqxzcp7YvxpHus9h2qYew93qn26N6w",
  "key10": "4EsoKPaYWxpBLBwt8WDuAGDgEjmcYjGwNyByXhXy89wYVwvkwA32cpxUrbd7G2eXaArTsbtvpBXffExzxVJWmSzq",
  "key11": "2EdFGR75yYGYWzSVsRfGA7nNLB5ThwwPNkn2J3orKwR7tZfsVxGhCXtJRVg9umUw4arBiA5AkyrR8SsAPRU1hYT",
  "key12": "XUgMTpd3zhdTTjpm4TAtFhW3sxUN5xh7QUrzYTzBPUTvkUcZLmx3kBJRnsyPFLL9DAB4qdvyf1gAvXBwxgN47EU",
  "key13": "4JHTsqVjFu13iwA29jKEAGJqSq6LtP5zK6htRB1EuqJUWtakXfAVjYRV1PsY1aK2qUiVM4a5TY6Lik6nai5jeZHw",
  "key14": "2NKj2fm3VP7cwxbaLYKBgtzb7j1WjSSUgkG95YDTFKdb7qGWAR3atEktJkFS3AVxEyQHvmbvjVek9MXwjMqem9H",
  "key15": "4fbjKoKkBcDL89uwEQYiqKHXmh8eFJAyGEQcofsmeWb5d1zduhxkvMGRqzpDmoTfAygAc2nLCda2nsFsUP3g8Zc5",
  "key16": "2Z83bXBhSCbEhP2MsygSWNDiYkEN7dy7WjN1gnPRq2ZigCHFNHKhfhNEsKWdo8c69YtMQbmDxgnNji7pTbqs5j9C",
  "key17": "2YuZvpkjrSoGCa8K4esTbcwkouYpyzJMZi5joVKDeFsAoS2Vf46WhfrkJ3daQNB3c8rWvdiM87EzkqrkkxUz2LKQ",
  "key18": "4SsGAaTqnDash9Hi2YievB549rrB7VgMUBfVpTGer6ULXaYmG96AmCLStStAKiDmtbnzp4mR17KT2PeMtoLFtzAQ",
  "key19": "2X6f8vXE7bRcoBMvsZAfs9NymFHBgnE4pZEG77QgLZpE4gnibsMAUSShCNiwBwFQdsCx45pW8eZBrVqfdSHRAkZo",
  "key20": "3kkBkjYPgYXL5sd2WedSa3fH5QGkG4iXohgFVwKxKVeys4pBn4Px8Edyg414yZrfmjrwNJ5AtCumDdB6gHEmcM23",
  "key21": "4KQzACZqfDJ2LTvABejAqDiUiBt1W7koZhYQac2GhDDZjP1eu5ZrnNtVZ7XY8QY4QaG6ZZsWjiHDK1RSD2YtboaB",
  "key22": "PsWpg1ruJaN1KTC97Kz8c7Sm2xqBy6bFMor1b1kQqfp9aJtfmTifGf72cDzPL4VVhhcXXCA1DLSWkGKZU6Q5NAV",
  "key23": "5JdpHJveYWhfGEN7UuqdR1ZHZpAFfQ9UHseXBpGMxFTtitENbmjor9zZuMTcgdYyPjgGTKVdNtj9VopHeBr1UpCf",
  "key24": "4n1tAPowVxi3cj6XtZHcFfn2H7qJAC2EcqARyYz8YMesAfHFR4CBRwifpWzFM4tCfEUMdg2GHSLNegzYoMceFyVJ",
  "key25": "2WC1xaCxhX1q7X4jLiEZ4dAhJ1cLquLxuZYt2syPTDyq62fTRScZvq7VPh9akuz6MUnLLRuoQwz8VxJz6X3TWPJw",
  "key26": "4gbZ6RMfqEHJFrLj2uu2JPsx3SRCZc41YPgKg3VCFsbSDRLKg4J9GYr9TiNzNYmExQAJRb2ZSurSLxYKZoBJ2EHH",
  "key27": "9DY7iw1DUxsKzJbJkVkH8qZ9p6kWVxXsdJhyFrZaYtNy7gU292Z8g9Lq64MTks857ZboTtViMjnvvQmcnXzZ8A8",
  "key28": "3qozL4taLJEBmWmcXwfhVfGjmmK9ooTnXNc4Fh8SQVvcmHiS1Qhp84Qu15xeM8BjcCFj2GSaBoYFJHgpvPtA75Nb",
  "key29": "3krmxRLNayvd8NcL9CSkhVPg76t2hBYgTnRB3vwW968sngNPwSSEdxX5UiREHGRmgmLobYQ9zUks51esS4qhnqMv",
  "key30": "3z8d8Hgmtoj5TP1ithybQFbiFyp6sX5Jbet39iL6SUYfk5eW8PNK4Yg6nbm3wPBhkQEJ4BpAQndSsKq8Bq1isBwo",
  "key31": "SDo8R9GhJ6VksDLe7HzzXTeqRz4R5hAvewoXvdqLj54qZr1TAKbKyqRd3zQAshjr1mwJNgbjAJhYJiLUXGKPckz"
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

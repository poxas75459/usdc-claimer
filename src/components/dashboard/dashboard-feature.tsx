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
    "vkernsBSu5fhZyv1g2tRWh62jceUo3RewiUtWWFY8T54SBLFfP4mZfcJdCi1e4Gnv4auYf46uoirT7RFvgVdMHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrF7xKiuM3keLo7ryvuUDbPcmcRJybEKuEBW7hHBEmfdppyToTnw1bqDrAeBdNhF2o5RuFYy6sJp1r4Khm6jT8K",
  "key1": "4HKu5hd9TAKfjdiKpfEKN5iEYb1u1ePhJvptbJhWkskewHKG5EDGtAskXsRtECg6TpPsrovXU8rmdFTqpW4yxT8",
  "key2": "eEWdeFu3wbdvYkVBzqQZeq1FWf1afVZP3HXsYSt3wzfYkQJbgPf4LrVLFqb7G41euFjakbtc1jhy3pB6iqpWjR9",
  "key3": "2PHpNHWW68FAXi5BDN9fsWkKhsWkYo6gc1NaZT43SyCjqmx2dhoqvi55MQNoigCsViCpe3YvyAztzhrzfnY31iDw",
  "key4": "36FzoqVqGfDUbW9wpW4FggJ9ENbPeWyR68JL7wJq6JQ6Y59TcinjReC4Q4bLqBb9ag9kUEiZcXa1z74onv1dVUa9",
  "key5": "2jxTWnMJRmpFe9f37qtVRUEdY6FP7uyZGKLNKGAcPdBQQDvMxifjPPs6vECsyhKZEoMHVzQQm17jgPr8vjJML7Ub",
  "key6": "3Y8EETGFVfYQrUPKwz7AM8hGqtGRBYQgwjqGE9tLTNH2fYGqvdCZhfyoqms1JJGtEPEjzTAek8tm7owCGTAyrN8i",
  "key7": "3VZHj75R3A8QVQZ4MiBitzGhvmJfE2d6rrptmucBBb4vCkYrFtpkdKA9TNABwFXeQF3u28HJBb16DnoRLpUvrnb",
  "key8": "4NaDDG1GxVj4uejHxc4D78XLraGwyfsJHNiumjmAXyU8JwgfRuBWA4bDdcxKi5pnChtYP9hFEg8iMFwQYvfDj6j9",
  "key9": "4Vk8rfxLn5TmQoVTBMUgHv9diPGhA8edQRGKs6AvMgqYRR6GY86jRnCCGuBuC7YgGopwkiNs52bfyZLKLMNGVozk",
  "key10": "4CZ3cUh4easMNaB53Kqo48XwzctKg5P4sSwcKSwuy143XVSVc9J9a23aXREsTKZvyDkSd5HCtbPPRHjsJdpjC5cr",
  "key11": "4HjPi3koa6RNtMnbJqXoSSyrJL2kymGG5hfUsPewN5aojbAtXdd7AwYxqSQ65CKMxMu9GonH5MmH54qhE63EtJcR",
  "key12": "24iAKzSy1bPTffFPtuywNpx2gKv6XSFibqZ6VSkYkWo2sdaUaJwJ2FDJ5nnUkK45eDafXd2E4u5obYDprabdBTJT",
  "key13": "8hvyQZWGcoQGqnoojtW7mqjHjxzoCQ5KGyDFZqyqiK5kHSy1AGtuiZp1VX7XQviapR9L9uoRqbWBNKt2Wj3vXjL",
  "key14": "4qfZ5oaATVfoKQbGj68UXJhnYbpYTKFUUmRp91o347EqZYJ6557KMqnVKhi6Mg3fhQrCiorNNuthsMgq1nPpErGN",
  "key15": "5a3d1RwzwuQCLvuAKMN5chBNMJCMzLXhKx2tYhGyGYdbjcMpVHeR4iikmAGVbfoWcKnQfZVjUB7md8D367NVgpSo",
  "key16": "3FpeE6qrkfE13CK31qgNgpNvELgwo2KK3rw4wu2sHS7iySCHSeJnTSMtNjh79g4XbV5b2QN1a2knpKgjfMneHg88",
  "key17": "vAxTCwDaq4BtD6AVrgxPd9EtpRaUWhZYdboGy19hfq8NhjMCQ8BXcD9Un459gm6Rx4QWGmNijtzhEZGUL3mMu4s",
  "key18": "uSz5E5ZEz9ppWbkDsPfd6A7qxyKgcRjnTqFU2WHECYSHjEYnJbkh1FvP3qF6J6c9rxPHv5zPvGQLF2uSWVkrUrb",
  "key19": "Eqx4TBgsgPbrsM78UAh4bhdcZwEWDckHqLmKnbdy6fgWPJmKtvDSFtdCREW8Muv7w7fvFqah5QNtnUpom7Rt8fX",
  "key20": "5oqkwTkQGsn4FZ9LR3niSKV6nWb27AZCptX3y3e7DVkptXfnUEWGFEN9KGco9Nyo4cHyZFyhHXo6M4ZoNiSnB66q",
  "key21": "4FGwKZEQYukWLEdbexXf2rr5ju8PB2gP7BGNzzXfwbxFC9RvLFGi6NCG7UdR8HuxN1d8ycaaaC9yRd3Y9pfXkFE5",
  "key22": "4bySVRNneeD6tFeHCWQjTrkCogmYfW9PctBtzowQUwCQbGqRM6vWWcKGsNSJxXELo4mgqxGfdWjsh7xP5MG9yQVf",
  "key23": "3zQ4ieAQrLWet5y2jScqW42MHc1ucZvvVKC95jAJ11msQQHbPgSFpxVwh2ebzRLV6YrCcoZembAvyKsyLweqBwhj",
  "key24": "2onznhBKaty9VedymQqCq8mTcMxWsqzbS1Q23Z62SM982gtFh51iZPx5X1JMQL342vhLwBTmTxo5KuxCRqGshbs8",
  "key25": "59DUpwxRTF3enDcxgpGFnqNZzkGL38rymREyGEv7KZbAYNJF2rfBudFRc9akAyowF7R7VcLA4MB79vetzFR19BfB",
  "key26": "5GqoQAitYTPopxXQiyG6SMK6kzQEkCy6GWMqWrh84WHp6o8oUBxby5PkfRp7j7FRx12yKS7xMcsRygSQhQH8sNiK",
  "key27": "5bwxbgoXgM6GSsqFFqVgGUibW9F9SNwtA1vNuDDLoexYQz1K6mSKLYdAFVUk4XK4mpJWpFk4Y2qVhuqZnhuapz7h",
  "key28": "5GM93Zu2XUbxjdYSig3DfrkaER7NSFyJ3k9BdSusjKJ253aD14Q3PR2ayqf4SZLQwaYUw4L1LXbpsRVsnygnyH2T"
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

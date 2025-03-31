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
    "5JsZ9sb7WJm7dJJTCRexR83uLevvGM8p5KUrLmJyaoFiyQ3ToojP4EP7ERouycJytmktZa6UBuF7XYXEnpNCnHde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbsSei59sZ1YhYuQTWPh6bAkAJmn8TX5WMDzgq4mpvZtuais3fwNffbhzv639iVEPxt5JXKgDFQNYSNfk7Gufby",
  "key1": "5yLNkivaZJuPSkHMeN56rXSZmtKAqs9s5dtd6xHR1FguTXkgBY5Wyc5aRMyX7rCxKhZym7tJM7SCmHbdHNggzNxQ",
  "key2": "2zkQFYTZk7SK5hZFNq8YnaPz7N7XqGveB5PJZFdHmrhcS7sCWGV8SpzHHZQFmBGkSAPt8sLuGqLPUuqQsYDFzZZq",
  "key3": "5j8jjYAnKMsFBB4sRfQWE87FxN4EcffDq4HCo8cpV1KLaC7bFPsjRZKdSNSjJrAqsN3nNaNp7aRUi6SkR823i7bu",
  "key4": "3yKSM9Wok7DGa5niWxxDhJjmguJto2wyLGSuDqtybHF9WPkqASLHRPd4PrSkCYsxcgvHWjwzFKCe2eRBWdSUddQ6",
  "key5": "5xq6mKMXpcn4tTcUid5N7PRMusNfCrYG9dTqYCPWtZQwqbUt73WukaHjjHs4NJQjppraV1AFA7dyL1W1h2X3bPBS",
  "key6": "8eDB5JCAi9h6WXdKPMu5U8KyBMW2JdZ1tHVrqNrQa6hsFZqYDDcNwtxEKPiPVr653jWpYTQPZugCgqgiNeggGmf",
  "key7": "37ze5ChYsonGmcAmCTrhEKgEcZNT2EbqfXdv1cuvpH9GJT1MHa6utoJC7RQXwm1k9vt55H3g225Xs5z2yeArd9GV",
  "key8": "mCzhZhJ9wQKY9PXfxUZgHS7tUVFts95dSqAHYRaqNweGXqKaDTVnR9Tr5CxbYjytUxHX2fu7YnwdZGst4GvrvE1",
  "key9": "5fa2hfS67AFetBkBn954XexGu3xhYHzTVK5xPBafGncegiooesyVgpsjwUJZ3S5BWjerjdCxAmZsVeMhJuscXbY5",
  "key10": "a27BFpbmttYJRUTHamJowUczJUDjmkVshkeu5af33MgRftTsowtD4TcCQLAcPXmhkjHek2orGNraz6K4hRfGyuK",
  "key11": "3APjiUNJoQQHVrxTjD43E6ebNcziFVweQ5oMGJWKBtWgUHi2bXrWNUdVim5xk2QQXiYdfFBcjTSEi4Dkob7yk7Mb",
  "key12": "GixFN7HmXcRUz7gaegkSXLRV68ApgpckTpr6eKSM9JKwxPFMh1dvYkY7zR1tkQ34TocGRBen4vZZvXyX4282yQ5",
  "key13": "5eZ9P4eyfYY9E1KBDEXW38f6P8ECDazhmjXmHxCzY214QXgea73h4Xht5d2bMPG3nM9jFxjNfmLwHrZ6DwdamJhb",
  "key14": "FXKRM4Vt4F5Aezy7ukQWQsv1gSrqsS3DjgxbKVPFyhT6DS1JUiqeFnY6w3baehMW6ZviARcZwPS5YYryCTQ6M6k",
  "key15": "66QvFA2j1UBeoBwKPghjFVVnfBhja339oStezmUa8piL5e2EYHStzB674zfYh8c9kEC3X8WYQdjXRkPTKV4f8Fwo",
  "key16": "59HYsMWLdSsyDeGjAqqeNcVMAd8tr1Fjz4Yudp5sZwTVKRzEdExc92LLZQn44CgGLVwBEyFmaJmQeT379f54oNbW",
  "key17": "4oqybkFHYzX2eK5JPHGYgDGg8Fuq9iZRPhX8BJ6qzBoUBKq8Wy7h2PkfL1bMDjJBSTJRax8QsnZ4E5dnHdHByzMQ",
  "key18": "3GkWs1v7PEiF1UhayQYf9pe2wzRNSTf5gekVNiATZwRWbGYRSs2iGc9rCpKf5ZsR5YfQ1hVbz1vx1Uo8RbJzrTyg",
  "key19": "GnjEK3Yc7ex9y7ZQEEcQ3ccMLuEgnu6Q9DPquCWYL8cDMQvCTzYxUGL7GfQ4ibtb1z8g8aNDZKqnYAoZpbFCnyX",
  "key20": "2JuHQMH2JxX59FkGHrFukRWr9BCpepWpK4JqjX9oGTPDp7nMJKXBgvxt8BNM7jju6NRmEYCLkd8QVX1UrM2bpRi",
  "key21": "5JuJtkrZKuWxtC6BZr8kqER1xJ7ebFnugddLaXC45iiuptmzMWkf88mSY3nAhfKy9yNwSf3Wqa2aZ6eRiANv8iJ7",
  "key22": "3a4KFNsF1QCMT9eWbxv1zUhyuth76khvsRGT4drzZjoe2WjziRnQGayrrZnknbjBvHjVyypP85EFmViewvy6BBCL",
  "key23": "5BH3Tz5Cg6EsK4f3K9MJFMLCupgPvNKuMJEoF263u5maPsQQdfcGcWdSrerKmcnP23yKDq26UidBCW7wQycijeiY",
  "key24": "HsAA6EfksL5FL1pJPUA83ytV7saUKZxhq3YosohHejum3wp1tzVNppYkjEHMDs6n4zjYbvB9MRcXASZ1MN2pvAQ",
  "key25": "2sMVHNgt9Qcc5sdw4S8UY7h1wo7rxDCPZShgAwA9vT8iBrazVN6vFujXVK5njMy71X5T22hrfvB7ZJvhC3cf28y2",
  "key26": "XayFJFDt6sUWwseKfz4L6dBWtywG2A3zgd1ZP9pB6ZM3x6JNwxJx5RPpmnkbxMHyND9UXNx2rQJkQCUUhmZBLSU",
  "key27": "355jjjNepfxUzMbjiVrPQqwqy6Ako4d1XfB6vjQH19eugVpXQ1Vo4K76xWG7SeMRRpadNfCWmDZvj4VrPHT9bzCD",
  "key28": "2yhXGSk2UeZpML4ekb4VYMRqj6ET4P6VtDZTT6wTPqoQPFbj9wHKapUMrzBmd6GmLGTUqgEzn5dyAL58AFiEVhq9",
  "key29": "TGjLmc1zsDaYJqreqWzvXxHDjMFG3xL1YbANjSRoTuaPYBfk9FHo2REewTv11XcorJVxwzftJcSmBxSrQLHBJNA",
  "key30": "5UxSanSfZscto4TXCN16wpQdKkRZicBL9b8DUoDa4dUotkXaczgEec5gxzxttmSxz9KTXZt1PfiKp3NCj71Q2Rod",
  "key31": "4Lhoq8cWtU2uXCdfzr3q3hhDfXGua2fEC3cdDnEPAFrhLzA2VKNZb45nsJ3pdXimD1zrwyz8sfweK7AdNRN7cJds",
  "key32": "3fJFgcCgwb7aQGE2H5xqZ7pyuYanz9YEu3YBZ7kvhb17SPvD5dnJSJP9vdViHxeXbBXpt8s2YfTUbC1d5sGq3rVN",
  "key33": "4BqcWqLybkZDnRHaogzHU72o2HmfYiGuttk3g43qq9iq7gLd9Eo3NPabvfzVpoyfhBnHjgjt7Bv3wxQTaEjn68jZ",
  "key34": "2bJYzeCpz5ebgXFqhtusgCz28iK7648Y85xzpfHtJRuHt6PnPqt7HENmPxH76dbT1pUhdBRBqVkGZLZSWFxooM6H",
  "key35": "4NYExw3cDzz11j4ewHC18Yz46CRnMMYohoRenYXXPdeK2NNLZoJRgYcxEynvbGZ4sbQtm6xYy14fsxaWw3WyUosW",
  "key36": "362tQ9N9VJ5RGYu79EDH2pwW4P4x8xK2jEZ7hYSL24VzzmLJehZzFKwLRmsktAgXzLwS4711qE8Hc2NAXNBEGgWd"
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

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
    "4BnZ6eQaVDaX5rzK6Wo86hzfeHMBU6pn4dM2btnrS6RhqApYRFrViq2g8RGoHdEkSp3armeK4v37DuF3YuhyrqVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hckrmfDiyWugqddWWsJncPfz9tAsEgvcMFfZdJLeuEcTf4PycAeUdu5TCP5ijCt78wjUF2MEiRD3wTceKU9XMw",
  "key1": "4iwj11jjqh2gs4BtLa7SFmsU9utgNKNbnYvJnEPTwKd9WC51Aza8pkagjtvAzDuKDuKWXziFUAwk1zChr5VMLNBE",
  "key2": "4u6ME1NNT9ZC3HBDFWXveVekWA2YZLLVeXYKm5xYDjad62Zis6YrnmEbdHWLoAh7WbhbNEZkJJWjpyaZfM2MHMDm",
  "key3": "4HC8xoqk81xag2srK4QrzVfvHiXYGbpD1oZGQJWdznLcfi4Kg92nWbJDhDyULNcvhAFjX7KyVjwSLDVj8Lb5gBin",
  "key4": "3n7SMPsWNdejX7BvWRkuwg3pJRCshCa9L7j4oagQcJKvNBVeHmaTfgbxz8LyiDhRY67F1LSc2sjEvzVuBM49zRVo",
  "key5": "59oVENLxzFLayCH3eF8xatibgeEhTS9yYtmkMhyg47uJiRecsGVoRzLu2w86TSdJB6QGjxqBzHJdSmJJs9X9Kzb7",
  "key6": "2UifmcvBVsrw47JVR3qVCbwHjBbuUmexFgwAWZKrgT4GuA1QF5eWj77K7vfdk7g4o6sMPKzkh8ramCjjcUK7PGA1",
  "key7": "5nwiUL99LwE8TRQpDs3f268r2Vbe46XdSsoBzqWbugyTugQKyJsewN2zaqWCx4MWPtfPdPcHdcXHQBskVMixzGY4",
  "key8": "YoYr9BFkbqvD64ZL3M75Aj44e98euFpRFMKxpCLQUvbRq3khXr6FA7SUFkd2FvLpdJaoLcRUMR3CqoVxUXaPoMi",
  "key9": "4Nij1vb38SSaSzPnocMp9H7WPW88LdhjuXNq28jRXZoxgXDZ3pc9EgQNke6kC4u5wq4NUwT9WiGurev4Qx2DfXkF",
  "key10": "5DsCZVEPMa2xYqYWL4aGERTT8NNixkxtW9VVvNnRzPTQEDrmvQVyGLxBy5GJ7gPHiiiiVNsP18HkbfXnyR9pZx26",
  "key11": "fqNKZrKCCQAi6cAwXJjuat6cR3MkkcoNF3sQeerRZwMrvniTywes1Z6j1oUSEVzt8ocGMfoKqeg3fLgdyXUeQC1",
  "key12": "3rJcsAhZxhfaXKQcCPBVCyfD6hYDUE9rZYBCnUPHkMi1qBbw6bjpt6JiLTtovByDxdUHN9YqEivuHo7J962abd35",
  "key13": "ezWYdFoKRedkAGaNh5WfkZcXWmMDZBs7tzGjkGLTXqF9evPKz89JrZYZpVhd1oXY5LhNpGuFNNys4bJpa821y7r",
  "key14": "3tLx6uuKTdw9RbKw533hqvqYwpfCZBNgtSRm6FXVQYYvfTVR1jPXjMLUEaKVyzUFHf2jGHV6Hzo18yq8fRkePP93",
  "key15": "5aEZTHnzhszYmGr6PY1oZXL75WspJAbAmFF12PH3tGYTrDoD8cccAetWQ1ydM86mTJQmuDaTqDPPGe8gDRRnnFkS",
  "key16": "4sVhCpEpYUFaRoGxCEj8tVswxqMW2eAaoW3yhYPAmmXLH2Moxun6K3tdF4J8jbqcQUrh1JM9N8jMPRvbTkdFHd6R",
  "key17": "RSqsH2pKhahjnecJAiAWH3DHLhYAmaQrKnMUWFb7TgsUmpkNLU94r6UQxY8nqHH2B7A2qP7QQrbRsxbkacLuGmg",
  "key18": "2bGWu1vsukceS5C9gAfJm7hwLPkjuQLdZnPPVo1HLootKjdp9AeHqtgRbd3ESk15MsKCt5kKcqJokxEgfSfhN464",
  "key19": "3FRmNLHLCrTpTTDjizEYoiWd6EPNvYN2u5PwNQByqsGR5Fpk3G4jstvMgyGa1Kiq4CxHgzQMQ98p5hbn1xTsx53P",
  "key20": "5qweyxnUnLUirA62heqP9zqfEH8nBB1VqgEdk392jENQxs8b5WMDhnvCdgowHvQTMyvVvqg55iu1ZPzAyL3QEk34",
  "key21": "xgwc1v2PBqGrdVpt869MkgUmWpPrTtJUqi42kPhZgqmLQwfQQ4SLKh43F3RQRLbuACcqEnyApd5gLUBMj5FNmqh",
  "key22": "5d8vd56NA2YxSWjTk3xCT6QhpUmjCpSmWKKCnwq7Z2qRBnvsrrrn4EBNLW4DEWVWJCWQrAmiYEFYyWxem6q16TzQ",
  "key23": "PWDQebjUX7cijKKYpDXyE9BRmsjkBmoZr7ZYyQ2DvR2AzNuKo9fQptaxKWEtJ3sSBA7ThjvZK36sgiTWFvK7nei",
  "key24": "3oqQ5GFcBZNr76QSzBrx7Goz565qbxQSaTTQ7NamcaCfnYMgGnw7St4Tzmfxuu3T73hKmzcqrSRcbVSh3kZpDCAK",
  "key25": "3Q59wpThmczy61uFdq9NrTZhWA2tzMLycBwxbhqBiXJ1fEoY7R1Bv6TyL66c1R8XbGWGZpCFRG9UC4V4e51czbw2",
  "key26": "38tdPfvYhrAF3w14LhfGQvawxNesBYXfdC59NEDEy2e8Xx3K2ee5LXLZ2MsKB6tF5i2LqpG2XTZJzc57YUwwEZYQ",
  "key27": "3GaNkj9341qgE2bbrtqYit9KJ6rqeW9FKA5idf29gkMhSa7SgRog5HtYzVj3LEZoQ1RKmJvQi1ubH36YjJvhCePB",
  "key28": "4dLHdGHxHShzbnpyX6irVoK28L73gAJ9i8iBRuzdAqJTp6i5zdGGbpwP881nF76WVwZoqEeP11sex7q1simkJMMZ",
  "key29": "62VkTxx7VHWj8T5Y17jASbrhLRmmo1oQ5zq4EV6GCLwfTG7Wp1oeMjvSryDKEVpwcqjTBNTW3h8voHd8hCLjkvNd"
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

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
    "CoEgt71HDc4L8YzHpqbRyQKMUGfz8v1UGYPRkY6QMPQAhA41nA8g6z6tSPAW9zSctpxfTX3Ft3bsJVwjZxWoL64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4tvzjGH9ywx6pKZmfigEn5eTtgWa3UKXbEnPMTHqGV3SNqCSrtPgrRjekqzYTWdAr1Ab4ZYtzHnEDNCBfDxhX1",
  "key1": "53Nkt2VfsFu8fKRcsD7JQtyAdhECZnFPBTRfzZMiJLZSYVwdpiZ2pgVfzUThEGYyqivz19YDwfoMerGZxyzeW9Px",
  "key2": "5734RHBDL9ZDTfhYqoiHWwb3YANBiUf5spu57LTgSN1kazqY91iUAMZ7aq11u9hirrXs3ZS3MebSuM7rPdnSCJzC",
  "key3": "KjPPPrhkjb95Hodkzg1UL4KSPaDpmfNKEyanXM5EDcaSczHshXPMKPWoiJ3LjxRqccaXdkkdD1DkUKrsqvoqXF8",
  "key4": "45zWj6Mcor6yd1jbXMNMFbvpuNTD7bhz6jbn8g8Ewih7qXE5NiRGrZTngZvizEtUFzb7vsBtFJ6AYWRo9utcV8DF",
  "key5": "4pPi7n9xTQBrxYxaRqSejasUn4XrZquiR6NF3p12AccB7B4j5c3jBvcdFdFzM3wuu8rKtw1gtPk48tSs5fmZANQd",
  "key6": "5u9gq5YbpePrd6btE9wjoaqG8dLb8osSmoXarSN9o2Jsw4A4Av1oUUHgXHPGZnPES2ehkaHcQz3rf2ZgHZqk6m81",
  "key7": "4NdmNBuVLXrhVFcEvMtgf3sRnDtfnsiwPAwTCjzXhEwttJYQbHNLGUUkJXpsWbgVfw9ciaBTrTNRYKWkWzNw44Zt",
  "key8": "5FxSjSff4hGj6WqBGn5USQjPePWC6CQM3KUKdKkuX5tkUK2biP71eFvzL8y59i8CbTWcz3dYVukHWW1t2Z4yqbW",
  "key9": "5NxQvhfH1QsPm6X67b4fp4FWs7NyAL78soSP6wM8X1xhiB4otNM1Z7v89mHAaj7eeatP8cXSD9YjXy5Enfcosgwy",
  "key10": "4GZpUwgeg1pwzS5vJgXYdAg2JrqEwn9nCDqXhsBESRgptzCSkWkxBT8aDNiz2iYLzDS71uQ2CaBrFxaumwW2vtBj",
  "key11": "23eRAGpREe4kN5MwvBRcGLsre79e58ThZHAu8FJ7ArrVEgCYzYgYDe8YL4cxMQES7RrKYvV2VkRhCs8mwhJ6aaun",
  "key12": "3NgW1T4msmexfZ3KJQR9M4TQQAQNK5Vb2ZPQ853ro6swZ5gECTWazDtGmkXEsqiLGynfkKtrd9poVz3MMuLQCbMv",
  "key13": "4e4HozJyddVtUz6BY3S1vHXkNWnyKjUbxqVQuvJKmVW7vZACfXQpNJdwcjwJBQyfysM9z3hEXR1FbyvNwtspsixt",
  "key14": "4Db9q2VUMXppf4LUwvuitVy1SchtC4mEHX78ej1UEvYantmBEyNhbNeBERcbZwsYNGKVzKRCehR4vqqN2gTrBNo2",
  "key15": "3cgVa28MEC58xY6B1YqBhWDPY5rc3RTcXWnV9Rg5GtSNvjR6KfPZ9Kh9jXxWwVydCA2KcZXfhYjiMuvLey5x8d4L",
  "key16": "3D9CPymrdhL6Z6JuJ5cQzkaefrxgtuwbcy8DFyxxZh8DBtRfnn4FG5EGsVDGQkRpg5vhYv6qjEaQfMnMGkZYVkpQ",
  "key17": "63DeRHHgwa5Wt5nJ9idRM8QiAkMbRgKn8WBNHgkRDyAz7i24aDXAiRoJRMuAR3ieYYJHiELpn2UrYSZD4ATdK3Qu",
  "key18": "5wqtAahetoNjLoxtHro4FNRoYMGB8RmhkjgmMr72bdzoRcQk75aUbUfGVXCNW3iHN8hvbdAxFraRhuQUJLZeeJ7c",
  "key19": "3dzn4A9wzRRsSfn3suHNTXM3wMHECLfEgvXtC3Bv4cayEpBCVGmjepMXpBHyvmR3NEgggzmLmR9mjGbm4HkDD663",
  "key20": "4CX5byhnXDPgpfPga179qWso6wX5GUM3WfEXodvxuWkeZyZDAuxDN6ZtxQVbQ4rJCcYaCVWBYxvDgZttc2C54T5",
  "key21": "FyrxAhDr1ZfgmA7wzS9aMNxz27e61DjCZFCcqoyf4Yd3KGVCCUB1XRUcNYdBs7JfyVyRgJfwSFVtbFtoZdFB8hH",
  "key22": "5crJ5HFVXEApbuZpJPpms26fJsuPd2uKHyakmGGcALez7EwS8dHSii5BboMyg5akYWb9obmfKKKSPp9RBbBp6sJV",
  "key23": "3hxkMszHrJJXXqmrSugGF1nV5N9GGmzC2y2JsqfnUKHoi7UaM2i6povg17XVMMQxK87wb7U2Nn4yccHrys5cH9Tk",
  "key24": "NmT6vy2d8gHWcpedEUu4zHX6vS1kCy9jbJQuLvfw63DB7DZRQJsx46w6akkcEVBv7SNxWccWVwSkePzRHPTkj8N",
  "key25": "5kE2u4cFZ3JU8eGw17PgneLgqgqBErXnaAGEvaoax3qtijb2SiLBcUApoFrv3GutLhpawgGEHQBpAYwrctW1BZ44",
  "key26": "645Goafq6hp7F82J82xGZiGyfctz5XsSgfJC3oDzSxJyZ3cM44fcveqqBH4YgFB8hWtjt2F2PmUuyXGuVf3h9Ki6",
  "key27": "42oeucqh24d89S3vU6UwNxpYhLuM6hLma3tj1pJBo4NDNj7TuFUUPW9DvEsw1sgzqCRzEND1SuQLXWJbv6xs5UdQ"
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

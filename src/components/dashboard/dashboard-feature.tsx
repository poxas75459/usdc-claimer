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
    "RmXLFAroa5pywytAYmx9HeD6qCgHNxKdnZsPfjNc7S57vFaptqGDuttpiSxs5UHEjfBLwRsiwr1rpj94TnVKY1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obFv2iCdPLjdQuqi2QARPZ7zJ1HSrqEWybE9UHvhmFV4VZbYtL1dTpgAaiRUvC4FV8FeVkPdufBbK2VzZ3sz6Na",
  "key1": "5sB6gWCwV68iBeC3sG112BL56M3GCTV7J5ufRF5V8VQfFM6HTqVwNQtYuYYNcug7KwhXnkMZtYMKtwVAq8GzLCQw",
  "key2": "9tyHiZBvJKbgM5W3WESxkw9LZxBXe1wq9jqwPLi2DJZPwM14JVDMhu31MxwDfbN9UemMSzfMoKTnnYB594kiyDU",
  "key3": "5JWqZmueMYXTxB2hVMTNyfHyDXyP8maE9p4HFBFakuQv9XpT89AETr5vXKFcd2JCAvQu1onEphiQ2s6VBYY6ZjS9",
  "key4": "2rP5UHKnQbsxNR1atxBnzoV3uMTSE8sBPzWz2ThqQ6Ne8szF7XaNdqK7jpVio5tFS22rugfj1adBJwnST2sRMGFf",
  "key5": "2tca5hp1yvogrdMDXreXpc9efNeKLaa9NB6ttdrKPB8wSKFwHmeNy7pS5xfJr6pyfAsLSuqK3AHM3jmfvGYZdm61",
  "key6": "2gEQdNbHfsz2JoBg8u8XNhFjEXsScEuzbRrbktERfFZDyc32moXpQWxvEpnD7uWX5yDrDCSgsg6q3k1GvnyL7uBD",
  "key7": "3pvkg6wMDi9EfxKgkya33vW8HT4Yt22TBswd19TSmJNSDVcMjw4dyJSj1jEBPdjT14eMejZcYHaHn7BGdQ4PUzSo",
  "key8": "CVhysUipoFaP6mUXhnqBPGdjaN6zbXTTv4umnzXXvoQxaahgGuoACCYDxkGUYxTspN5NTNBuJbWQRib14U77wH7",
  "key9": "5xLHXeSopG5YY7VHMEnFeLxLmeEa9MwRnqeuTaUZoGHSfxUkuxFk36JGaY5LUwa99rtpEQRpcAD9dRffM7kCowP2",
  "key10": "3PwZUiRmdssGrgjpyjXkpC7pZHEi7Z31RFdJya2gWeEWc4UKyFM8CvSBnwwcga2BoNoffTi14yurRLqqh5JMu4nn",
  "key11": "393AE7FNaY8eQ9GRTQftq2zt2PQQbWvG6TDM1JPYwSVm33b9DDzaStNK9e6GhYx9HtUuLBkN3AMqVAbLvopgByL4",
  "key12": "52iV4kP2pathimTz3ApEQtNuVbpsLbRDvqfK4b2iKUFY49EwZfBRRTR8UxohF5tK5AKe6RVpxNBvH1kS5BsYhiAg",
  "key13": "4STccVYkHiFMXWhoYknrBcyi7bsg8coZvRxN31dpbZVd2E827yKgURRe3aVv2jFjPWR4qpbUv6xvhYBKFLhdAYyL",
  "key14": "m7s2iq9PnDVS6q7tGiKh5iwgpB5Fa4dbYCijMWj1JwLSWELUZdP9NEuwEW8ooE7pyXCZMqcTNvMfePFYsfn22gA",
  "key15": "5nMWhwuRTTdRMeJJ8zRZeWq4mwqj8a6gjELYaBjE6Q9pSYu1cZ8c4CB1LZ3aZNkLsW7JgfMAeggeLtuzhQEFK2B4",
  "key16": "zXJx2HVUztn1TKMXNVLYdomkQcAk66fbe9vHzCJEjYBsmMfBywdSg9wAY9VJTCHXvwuh8n8UaXgC7oyAuptuAEd",
  "key17": "53Jaz4XxfdiaJRhQqwLSFjjEXRyPVQXskts6FAckqcWBvaCtV23sgeuiGQ3axoMHxKAaK4FMBDfZHWUjcCMgZhsp",
  "key18": "2b9EFyBTVi2TtMnJhgVSPHg9o5XygAnx73Y4KSEtTLh2ZfXgwsQqVBc41D1GxC76E8wegWqeVfsUNLqbJPkk7U9B",
  "key19": "39eegmBY6zSH6jFGPsS4KGsJS9rHrQM3vsekUdZBM54vK8YPaJpg7jnctTe3NuAfgF7Ejiva1HHytPq2yLDZL41H",
  "key20": "5SS5Muy2AWY25BXogAmU9P4iCK8uusFEmHTbezZC9o8bDqUrgcQHpQsJdDrcuo1sfBR8SaKDvoBHczQFKW3XkocR",
  "key21": "2Zjj6zJrFSXqFR2euYRYizzsBD2eFMDixh2GaiG5KMthNxPm5io14bDxiMpyMnVjYFsKvC7VVX9fJX7XqRopz3Jp",
  "key22": "4TqYbFPfaop1pyaddkExkMveWpFwin8mVZbZAgYGBfZdgdvSnrBqd3Kbf8fjg9XLgXnVLLJQqWEu1epdSRGtBJgq",
  "key23": "5om7ybH5DsW2vtaozYiUHodi9PKSKrsoxajdnVrqhbQ72QWGqfNGWjKeu1nnzS5TAgHTCmnCCf4GUg9g3zHFb4BP",
  "key24": "4vxZYPv41noYKYrTCJSc79ZjRMhmmjCeCHdJZDDfbJ67qCXzTsqjygPLz8akq4FKoMu6W6fCmwSFVsQoQcKqPcnT",
  "key25": "4PdC39eTe1798Q6kqk62PeQHXFDJrUjdZqJYg1LMqhacQpRAQdEfQaX7ZPotjf8WDj6nVYmmRmm8ZTe5VZ8wgx9P",
  "key26": "3JeSU4CJ7UGgKnHso5Rpo4CFADbSSEJr5o5MYUcDtY1nfYHymWdm5W69SLao5xfYi7bCZSvGoffXpF8yTXpzoo8y",
  "key27": "4P5iPLn2Xa2RAWRbiKshEXp8gbxUcdi9oaiVnsgPvGtWbsgRrae7WSizTaBLQJFipnwTqQkjAwN2SLcDcvsPHrub",
  "key28": "K2JpYkQ8KTwmLu3W6Y7K3KJEesf44Yv8DgyKJULbRUjndXfs6o6xpdzusncGXgUNat3UAviJY1dLUvuSvwACkKx",
  "key29": "sd7f66LcdZEWv9fvxEJZhBtafW1fWe87gYBSTKmZcXX6s3aDjCfhognAM7WFPGQG2V6Y3jJP2RzwoFQcgxEcixr",
  "key30": "5DDvuEjwpJZPwy2V16T3aZgQQZcCwS7UrWQnvDQ3J8CbKYCypMinAFGZPrAJjVJCxYFmEPdV6rd4fqetpbLGFyJA",
  "key31": "3AppZt8XZ4yQt2kMCMByT1kuBvoSnd8QoR5qoBMXYHaYJgwXjLzYwDqfTEMx6DCDqntYSSL1RNUPBVWmxN5vaknT",
  "key32": "hHPYfjAMk9qEj2yxY8SmSH5eFDMQZjm1Cd2SZhBecdLouM3mQdz7gThWDU4zyAt268ewy3SGMZmsUNrYgFbjnqE",
  "key33": "3soYX1ZpyZjaDBSac99EXbqMfngZYLzqjH67n6Zvd7PVeQwRF37fZwJmPoaCZt5ST3bxeRNj1NdyS3ZwpFvms4B8",
  "key34": "5LFyybBHJV9PpyvM86KGKMUo47UmEzxzzmGcFkbWDVqo3e4ihWR8sHS1VrnRwHeqkLQNDixSBcJQXnxxtLgaCTEL",
  "key35": "drG2XjSbNuZP9tuZkE2x5HqqRy5G94mfh4G93GrguXjPgXbv59rpy2vkoDseKDExfmEVnipjkAMeB6cspjxvwKR",
  "key36": "3c2hq24ANkKqYN7vWZFyKJq9Px5S4gPsJLdbi8YqNT7YRgAmQVfJhVqrfXnZkBUv7BUT64YLGTwT254doEkZdNDi",
  "key37": "5LWjHkX2V48e3Fm9D5L4NEegSYEebgSE4Z2RwuN17zuY1RCiPPWbYXTvLBaMDFgnuSQHhFc8rbMV28ZiejXtRHS5",
  "key38": "3Us9MWmyUgk2p9CEVoyScL4ccvpZBubN2BkKH6kz8hfmSJ3yuZgm2Crehet6k6rhvEUzo7Eenq3VnaZSJgmY93ac",
  "key39": "4QNNJeF4oa8U56K7pNjhffEnEbcwrQ2BUzuyvgetZLUCGapZQW5KUroiiQxgz4pwANKKAERJengqGHHYBYZPbdvi"
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

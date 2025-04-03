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
    "5jfYg3DvZmwic2cjFismgtownv1a6fWwGakTG6XfRb5TVaBkj6B1g3WGFKs16Qb8XvJriFcL53r1xQ2WQiiqjC3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgCh8QpVKgnp84DbLnQSq9jnA6oAdizubeDYPUwRxXNLsiQAFD9QyseNr31crNtM9DVTaQ3z9zUUGE8iRZGfxFy",
  "key1": "He7NL9yerxQ2BRiUZVwJdEe6AEQKPvWt7UuNco1LAo6YX348Ue9ofBnBpFcYKS9qZc42i8oje7xv6sHZ8cRHibZ",
  "key2": "2xWe5DatPu4usfjjU3MdeJFkFHNBS7jTsSghiShi9r4HFLcEeSSQiWbWZw1Dg6NSjuGqv2Bkp63dNbKy1Squw1Go",
  "key3": "4UPhFBSnxX8N91QEA1Jrn8rGFXfNW6QwjG5S4HgfV7WjXSt1cM51nwxkNDLsyVUSa6v8KHHQ2jNyhn4wM4SSn8G",
  "key4": "53zb6UkmQVmJE4rsr8GdEPYSuRWHMP6CxXHZPqSLf6F8wr1k3jr11isxJwJGfZFVQ33ffujWAicbkg7krhbDU5aV",
  "key5": "3UnVUwpUa95KZdLLFb3SABKi6fPvoaZuRsDkZJh8hTWKb6TT8f492kt3NY7LKhvydETnBGS6HButJCzyWx7eSuai",
  "key6": "2zqe8LCxzjEMEg4uxkcmuDZy7QZmZLNDE2bsENzQEfqQezNLYNv2YYnAqFbhdCpaPNV6BiasvJKoKDQCgUwG76Lg",
  "key7": "29VgJUqV2FgZLMziFSbmQfdjnkaJS9uD9wJ4UzTi5CoA22rW853i5iwYQbjehr5s37uRo2cgzuB5SuSqQJrY6kLf",
  "key8": "Zpt24G14o3WBqt13wG9SysrfkxxcaXPinSeUptCfohb2SEJxr3JuPVqWQvHEhq1ZLvywoShEumuFT3TAvKrVbfN",
  "key9": "4AQxPaZnf1sdwyu6gs5vyDy1U9fQ5xf21UEgxUcqcptwk1umCdNBwSbUNKSadqwbkCpRqwYWBzNcFsMrX82nZEdk",
  "key10": "4UHJ2iRkYd4viaifLVYLpYLjnKkYRqjjD7yGjmqSVZjijj9zvSAxgHzxNkBKa1qbTABKn7X9aKHcybFPJG74Nzb1",
  "key11": "5b4WrsrqpKk85U73cGxCke9ZKUCVmxk54oo8sm7EAtypjjLbQfe585ar5JM9z3xHFEXa8xs9DM37axkTtVLv1dud",
  "key12": "4ioooKD9NQ1B1EoLiJMEJzDmYTjN6sKWTfdYL3vrMp6KH9QUUzuq2uVKHCAz2jPhecBik9WtfhnzzvTFQCrRxc5m",
  "key13": "Y3NLm653WBa9htgNJ1ut8Zf37spJ6c9QGD8jP3K82pycyoUVLQ4bQNmUJ6sApdEh64Jdj1axNqtrCBCJJRhZfrJ",
  "key14": "zJavCc7CPThknnEoRkHCWvmNpK2p4sqkf8SSiyxDXajPsHKENAntRQS3fmcQDf8UjyRAGRNcrCYAR2G5Y8DMQSF",
  "key15": "54oiKvfwGPqJrRmrFBA5dA2N21AEtHmRHrfkvDyqh35YQuG1VJvLJignGDzXEn2RVvasAdcERohnHXQW3HHKGs2r",
  "key16": "BG1BnkY5739juLMADSJ94eyFmRkUACPgUcuEnTb29pjAeAyzZzq194P8hxsYscvbUhUzGefMK36aVUFdHoDgbDq",
  "key17": "DsPyqKywjtYXjuUVehbQVuLSUuf7MN9cX5PLkj26x4jHo5nWX6DMx1dYZe6B5eKXtzHSciyffVwByb7UPK11RwH",
  "key18": "1AEYcJHe2FTodfj3vqJWEF4vDiSiYVdSgcJN68HNFbQ18C5myaVLAHN2kEM6rXNs3LbJp3ihbXxBrJ6GmrVZHjZ",
  "key19": "48SmK6nWrjkADHLC26YghpLaKVuXgxKz5vwccYt4KbmYjNtjoAWAmivBrUejY4zfXvs2wv4o6pr4bSFTC8ih7Kbp",
  "key20": "4eirtKxXH73tazVd7xpKQDhu96v6pH3s7LuHowzyQQhbgKv145SLrd4V9fXdv8XmoCGneQejQJEXznyTw9Ao1tir",
  "key21": "3rtPE2jpxDq22pDvcQaTV3LaUbspU7YatmNvwAxvW8abcUeDpSMHerVzFqnfPytxnkSfBmczmTDYYXr955SXtVoG",
  "key22": "CkpghqE495ud3LhNhrAvS5pJEsUgpqvNRL1i5LmMAMuVqYyd2HbfDGPvN35A1RPEPqk4K1zauuRQQfkCkCZGA9S",
  "key23": "5AiETJ7ZE8djz9wxc5jWbDh1Rbti6SMYnZjRD8hjnEM6iME642vYFwQcUkpU84vFrSGSYLHWh93JUn9yh4qrefcX",
  "key24": "2xAVaSGQCpMBihSFob8irWYPzKKh9cMjNhje8HGod4A1aqfdyy1nKw3zvdT1yiKxUoKRmPrFz6zjEZb1gpoUUh7r",
  "key25": "2eMwFv1BoPxCH9WBHBd8BB9Hfms6yhmcS5s7xfTjXEH4dEAiZEZoV8rMCi7x2VPeB25J13YqLXhLdNWLpnYGnbvj",
  "key26": "3P4AbcfhiAYVy9sMW3ebCKQe9SfvZn5BpSP45DLDjvXTediH2t8f8JQFYiEsLJdBj9y9q8sFau7c8EVvsvaxc4ta",
  "key27": "2K6dNthMfq6GzvnSPm9GmhM1iwDbwifgP6NR68fAC8VLW3yWx7NSFvvdDCm6KMcpwa6yrpadcGUBvjiwLjLJrfqV",
  "key28": "71uTRJkvZDjwrXo5NtkF1LZSUBFzje51JGPwV5bVQjncGr1bLmYDUYVXNtG6dqEWFDVkEKLNYVefyMZMcTp6SjT",
  "key29": "5j2XKGnA7DstnxZWPEvYrQNT5Qy3sRVd131nGvnNudAx1YoLFAAn2QEx5GCvK5Kj6To4M7EKZoxj37HupK4a4jH6",
  "key30": "3wuvzEYfSKzHqurvhqWKT8bitFrEbqAdHN4asWdi9XSjuRqLWCZYA1fbD83i3ThWXbtititPEBFCwZHboirLwp91",
  "key31": "5J8a6TYj6qkdGwoMNYXJNVsN5A2cyjzas9h6Tcn44GBgVZc7R78VQWsuLz4WFQC1PkPAE5EQz1XdHCPA1RTmbjtg",
  "key32": "3ienFemBXdd3jAwCcuXcnUdVygsTEnFZU4jguTNp1kTA3ZuPEpnD2DCUsGZnd46ewufUavaybKZi5KYiQmRVAhtm",
  "key33": "5kaQ3ZzjkqGhFWFFedudenRBbXQLercEyt6jYNWKJAqGEFRHB9Yteoe3RbdNsXRgpw31aHEPy6mqrfoiW6dtRqyV",
  "key34": "5UybNLohPee39hSpMRoxAVXy8QKXoR1VGKVyD4ByhEBpmvpGQ7vrXV1k1v81KAsk8qQhfLwpNS7fXkCcBYYZLqKE",
  "key35": "2LBD7KpyHyyuveTcwgbdtoCRbCSxXrMu8wcgZkBHzexSpcJixUeinfgUjmcu43zKM7RfGYafHAk8x5WwHJ46iyqu",
  "key36": "sDkmjUGAh1NQfpeGq4crs5QavK1fstDCD7KBx67eqApE5w9MN8c9qrHUoCqP8qNSw3MSpwnpuRpPregNNZ8doPN",
  "key37": "3kxxbcm43RQVxmrraMJoSr4sZzmnE1PaXhAEXSyaiorZMRhWLPtSS14Bi38SxXgvLVX7tzMGsr2TE5ETRAZdGFCp",
  "key38": "2FEtTyA3Xeeej39eSbqE6wMjSPwRJGmEuNGKyoe8PxS65acgfGQEqVtQkQc2mEuE8jYxQMsJb179e9FhkojybdSE",
  "key39": "2UtQCADwHc7eZ1fAhCiX5o5qjwxbd2M2WAdS5R1WBA7hDmarxa1jNavRdVXAskuFdh8A5t3ajkmDWHXkYQHJ2SZu"
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

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
    "T9PWy8kcbhazbNiVLEvWKnzMgfhpzCBBM3SxUcZrSWZ6kNs8BhWy5QRzmnCtW6jrqfGq7iUoL1G1AoyGNZzkn39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59CAHuxK6LkEPQuwF6cRLzYPp6MgjSBiNQthWcBrRy4ou1s4AaiLmC5QbqcH5fMkbegtTVppPvPn1fAG3TTJgjBd",
  "key1": "5ZuH2F1gNiUuqw4vTrtY3q68denFojtHsTgpyb7UNJHza7mvkPBnudf72BXCs2nmxyEksMvnKyWd6vXwgbR7jnF4",
  "key2": "3AmKeTATdTuUqfqEEbSVCzTTnsY6NiVsnX8czs1dg66g8PL5qDYVPzThcaP7YWZ6peXMhoHAKgNnypN7dveQoiDt",
  "key3": "x8uiEjJWNr19Wm3QwVYBwSXawggyhbxMHTFQJvqm5QbKHJMaFG77DuEVn41HAEYKuDAtiBKqZp4wZVvjrL44kck",
  "key4": "5K1Uka1JMymAxvZtBP7e3oR8dRsk2PgufnjAJHZhpMSrSNQERNCGEofrPYR2WNTYXzWjCb6DgPnQMEcPzRYkCanS",
  "key5": "4mwmguJXXzLWWPFCX5a1Fxxqq4pXaT843oPSBJFrLVs7EUrnsQA1AMF2i78BksCXqY2kSoKiJyZzfhU3kB887CBR",
  "key6": "X5KtCek8oYLethyNhF5BEBf2eaFn4pBD1pAfkQVwkZAUqbrAiXw1KKAtYckGcXXq6vSDcLTw75wgYMakPzFzC7g",
  "key7": "4jnVZeJhs7bHU4JQ6rWQWBFnPY1KEK2MWWY34LdUThxJCu5mHePsD5txdPjpwyz93xL1TvTHS92ChZoyxmEz38TK",
  "key8": "43PTjiSz6mJFJ14jQcpxZq7cALTr4Q2CkWx6eqGxhN1LeAFsBPJXomYgMVVUhDFAvdTJFvG3QAzWm5NCzC9QdDx7",
  "key9": "42kZh2uKgbB4iKMGTjGBbbuVRZTmMzRsz4raeg3i4j622G17g6W6zaf5b8LXDUKJA7SZF6aG6FMAo4Wuct4LM6V3",
  "key10": "2vWdHUeYe2J6tryv1GVoeW5xEmUuUTKvNdVL8Lepe98daXPxxG3ogLi4QRSo1ZYXh1jaDHDXBnXQTxapepXgZhi",
  "key11": "77SnEmr5MqaTECvAToTpCCfs1my9LiT3BcQYMH7i6hhB9NDhkgBpH6FPm5p5yi4HXvE7RB9Fn5dPyZ2fjZemFXU",
  "key12": "5GQ5QxB2EyzZUAJ5DtDuXTRBDTjBscYJQHUHHXE7wE1mB7aNEPdFs1qpKaCv8LRTrACYbecQvHhyPyYwg3JMp9Kh",
  "key13": "4y8Z3XbhBCBRYqwZBReqxejTfueYpJarC27HbKThrrRp3nbzL4VaJ7stXZ65aafXksqXnqbVbLFfZ3bMPrRjGJJg",
  "key14": "ohykjBqsrtTJwfrxzBvNZAxAzzjBSYrgWRxXeNjCbJv9sinSJ1q5JHN3znDYANxMd6AjTUXpBmsy4iKYazovS9v",
  "key15": "23MmpuPr4JjYMbwTt6Ryoiet1SHn275ziZ2vVwFwZG6MXQHoysafsRTrs4bz7kLjyKLy3WGZGUyRKWBeEM9YGV4D",
  "key16": "TVJX15wHEQddpkKUpScVeYngu7haJQE14ce3spmGiyw9askGm8PP1redoAKUziLuFAQax8p96MqK9cj5DWPEEcU",
  "key17": "3qDN9cKhW4undy2QbQEGSRA3YPefo4gGo1bWW3sZq1bVGE3Q64kLnQ68NuoPc8SzRpkAR1DEZ3BbyvH8uyYhvA1E",
  "key18": "22C2RLrSxf3JNnXYvcAHzuV59QE89TD4km7bDX6tzAmtDAL3DnqnmrZN9JNAYVDZbrQ5G7XJkZmPvJwTwST2aHku",
  "key19": "3rHTamRaakA4GDGTEVuvq5UmNZqxb7h4FTkBXkP3totbAeTLnhQJMtJQZbjaE7cY4ZVYvZz84fMPMmK1uNJP3Htd",
  "key20": "28j2WrKESvMtW2xrPnND3gqCCXFfBwDr1u4vg2BJgQ7rMYzTqp9RRBKheRhAc4VyqRx29K85gkjLqVahBquK5gAX",
  "key21": "5caYux1dtvC3eJbx6oaFTQ9pEinpCaAN2aSXBCRxX6cAmwMRac9sXQjm2d44DScrMmyTTiPPL63udzZL3cvcuX9t",
  "key22": "5JPp6xDH3o3jSSpypp1bzv9uXm76vhXENQxPYsd2Zafxe2VfAqZiQiRnpi7q2eocvuA8pmrhFsi4hc6duN78SJ2y",
  "key23": "3pH8j26wVvR4E8knDtgttqeofA8b2Kt3U2LyrctqQf76tvHeB1EeXfqHC2jZUPj2qrzAL89hURPJeDzN8SCqMqme",
  "key24": "4xjLrU94syt7149HjwM7BG2yJU6WnFwYTX8nCkUedfGL8dZAyrcktL1C54oeRJJwVs9UYtX73jPETLTLqaHSqPe5",
  "key25": "W6MyyQcrn4CRkHBeqx2AZDgAyuyjbDHmjcR1KZbgiEjoWELNVmWQZn4RavhC6dRqwLuz5mX7GFBw2LsdqXhZRU8",
  "key26": "3733famvQ7AvDtphfLaks5t9VszRh6HYrSnHezt8RLdA66B5xYdAp2W2XxqY5G5yU6yX8hgKahGYtnb9pAin4G39",
  "key27": "4GHPTTNH7amNQNvBYdnXt7Cr9vteY8iNzESGghcSLtetaS9ERhjDGE4BmUsqXVNmzpmV2RyoGcLQQb3fT7KwoAS2",
  "key28": "5SK9MPmWSFGXGcLQsL2Af6guF3twX9vX9rGeqGdDshmFURLSF1v1C3yxNvDYCuoipQh9YFEcTPxgLtJDyb6MgNw9",
  "key29": "2CWP5VPPqH4rFMJSL6G4MEojgg7TTjnG38Sh5nbYQmW4MmAH1We2aP144W4FPnGUNLTYFDrB8MZefznkmF2PyAk8",
  "key30": "3Gq8i8RhAmhGTRS26XaE7NSYXQrtC3d4gdtgUWJFu4LWXSBi8bL4curTyz3wemekPXiA6nwdAg5NW1QG62iNgnZJ"
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

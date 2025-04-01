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
    "3DtirqnprBEMvYMoFX4rik7WP3xvpKDgPryk2jXZNDqgreKcwwcY43LUTGc5SQjgsmgyAnpk5F9wdzQRw91Q3QLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXnfeDtBBGrXhZqvYciCr1qPRw2gvWUGkyHJj5GgQ9MMA9Nydeacu3eknMP8m4V2yEMyBsH74ZShnegfE91sDbP",
  "key1": "2dQZyzrM3wtokyeuc6jnLYiYbyE48rdRttyfssaVEPY46x5c9NgrDskLWkt8k8M3wtsPPfnumMke7TxgwwV54tkq",
  "key2": "4xFRAQWFWeysK5YLWN59gm8QLroD2Jc71NWZt5Xxp5Pt5ceqDJZJSQMRDMKMDK2D5UXMbymfWdAFbrCkyFiJqPTh",
  "key3": "3PYHr76biEipRxuHCh5b9HJo4ZMDHRtWyjoYs75ehYiutnRo2MvovWBgT6W9Rbofzm5yqvYc1anmd86mhqWD4BCE",
  "key4": "2vPUwpYajumvJzKAf57UsKwK5VgTQiTu3dJmMH8Z7o3qZRGvNrYXYTmsAY4crgzoLcVcAxBJHzHbYnsjDJw5tkED",
  "key5": "4QsGufUPkEtYmjtZ1QE3Vjq114epJwJVm32azZ5cydjmTp9fV5zW3ssLXrthrds2yjGniXggGVHLA3c99ya6bWdS",
  "key6": "NEj94xqERXuRj6DLPf7FpTtVP2UDynvD718RjvTcW25gGbpXWmPM5xoXetM6JWznVJH2mvkbH5dS6vZaevAkwjJ",
  "key7": "2HWdQNKSQs1AYXHELsAxbGzW6j2v1TA5YgHyVufrBZoZq7BTWAbv7eRN3YiMC4keVaHp6ZTxA7TQ2pwyn2nvfKf6",
  "key8": "5b2CFQRWYhzwFkqZPR8X3u7HTXSknJFny62Dt69YjYcGieJfyQkoDu6BXo3MvmuaucZJFvZsWNTtkrMDsNT8ykcW",
  "key9": "3ucKbTS2CoTPFVTNq1oEZJ1YEKfcm61cvBah1SB7zxsaRy2skXx5GQA4ZGwF2iQihLweki4yeQpLwXxuUBazju6u",
  "key10": "691UuwZJDqf3EVbhPkD7yPQP4XoDJjJ9QrNFHw3D5Sig9Q7v2XoyRBZoos4Amxt3tYZJHwwHBgstWLs9kx3WqRZ",
  "key11": "2PBncsGxHcqVaeLTZVSJbx4oJWP5K682PgsQdzJEV3cNTr19gsYeZCy9KHBhascQeWDMw7EMzksYBemFe7qymXKH",
  "key12": "3nyccucbcsvg4Nb8FHeZ2KbiAS4xhhhqgt1rAwNTXvqc4qY5iFy49CQ6HFEprmbqMNwd4xsn4gANTfgVrtdY3czv",
  "key13": "3Q7RQreFEnNijGEsTEQ1FQTAJ54zBxqEismGUEJYuLJEejRK8D28tBh7MSuVYKnLEjmhPD5pyBjCK4iHuyZFfwbZ",
  "key14": "2C8bRdbsvJ6HpLntjkzw8WFmjXMDgMHvGwUBQwuWkWPSgwfNDG9JpNRwbACGjbbfYbcwpExKS3u6s6tjpFbtmeCQ",
  "key15": "2FebKPUurhB5fpfwjdShd1ZZAQV68jdyb1MFv4iKAFdyetaeHa3c7cVuiATYt3AKgP3TNsno8snGjzAkmDTgE5Fn",
  "key16": "64UuACPGPkrzRTn9XwRv3Usuq5K6YJU3ZFyRYExdmC7fSADkT79kVZtNjGPuqULWvbgZjY5NPYN9j4ghZVVAYYt2",
  "key17": "2RCxxd7rCBFHAgwtEJkzz8xTbd1aKnByMHsLEPccxijiaK8w1VTEaqNfK1hdRKcVKcQerx9VfDLTHXaUsCiZJHA7",
  "key18": "XYHimkrLL93YXcxEnLnJYkDbSvQfCJ4xvB6xoZ8S6sPqPSxkhJZuDXqFoEVAJaMUYKCU7Sqg4WWCVrM16D4NCcE",
  "key19": "owKo88vJrjB787iPUbk6aYrp7WEqSXF7zF3TTj8ctnqugfKGDzSqjucj72vZtZStxmSA54e8k5jFNZ216PX6kDY",
  "key20": "3FUn1gNnkE3rRmYBXg9VXrcod4GPiZqCethZNDYiLPSAq6s6A4pKht4WYdizhNwu4hg5cGjdCxrkjLnMrpYNi9iY",
  "key21": "34Urhaun1f8ArXZhHZwQmF3KTGW9HqPWUXbFnn3MpKT4bepZWD5DXR7vWjNMHDtDDVzd4Pbp6mo1q8E49ALSNwsx",
  "key22": "2UtgewWqqNuEo8VSvoz9WBoXGLNrngo1aTjJ39hEbXaNbLxTugugeYFoSH31FftXsRe7zch7gqAGiKYMJzEqcxyY",
  "key23": "3rKsLZpCYThySgcqmDXZAHVe1mWCkjiVth2XphWq6vTMjGiyLeqR4DrdZtqxosJjJxTyM3PNF2E8r8xU3qHr4xTa",
  "key24": "4ZbucGkcvCCJGSUFJHFA7FSGtVFGJdtUPXBzxphMXyVxYVDLWWuJgiaTJ9UrndEG6gg8kfzfkYBzXFbyBPVYZSb2",
  "key25": "5WJWpXwS1QYsut13fat6fGuRW3kKpogfmor4oV1ASXnSofJ6JzVEJ1CTVqJR7iog7BzETwDvFB6RbM5XCEMx154t",
  "key26": "4wNajSJGCMDLFphzdma4SkEKD8iLMwY1xV4CDZM2PHij2ZWCbWUxptpsjJJTzUKLGn4B4iyGpGcY4oXRKTkpBjoU",
  "key27": "uoKRdhHDStsYdgsEYX5PsYoxY9LPSSSBXRHJxkHKBdKuneb4XniGUyPiUPSR4dJMUaXikkXuyVJFcPNkwBmjtRm",
  "key28": "4TMYuuEw9zzapgiJnV9yNsxxBjStnaHQeEtKJvn5ngCpQUtjttBLV6x5HJ8bbyQHfZexh8pHaWPA2hERaLg7FNnj",
  "key29": "4HhcdAgFEgb7ZY6LfLTxZg363wEsz2yPVxGzs3CB4Yp742iX9wYQ9pN3APcccVG5quoqCkyRkjcg9Qd9NyVUAmhS"
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

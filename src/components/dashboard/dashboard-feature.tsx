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
    "5NRFoVL8UQxtxhypHtMmG2ne7K5QswLx5ypvmp5aZ2BcEsr7jD57DxH2Fq8Bs47UvUzdYwwiuQyByQLA3f8pVJgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSA1efGetDAza1VjLxbJmH7PYhxmWmzCbpzAnFdqXvexc1VHy8Ktah3wURptfcWeLvU7W8abXFUroxHi6FyxaCT",
  "key1": "5F7YbmHi1dGCDRDagg6mqcEkXn9RQVSfRRTGFWKbUDq1JgMLDN7tCZeE8peRg79sgpczo7Lysp38wngtrmu1u1sT",
  "key2": "2WLE4mRQyGnfzxSTDjNwnJYMTGrfYWJaicmR2XGzXESamS8iW3L5NNzKb12fksA9n3ydtc9aRXDWPNnhTP8DDxwc",
  "key3": "3D3A9qXgMvbpBZP4ErhEnCNvBSqMV2439kXq3U6BBic7oUjjvZqShWfmfGNy3n3ERbfDDK4hAJrYxWssRLjZr8Y",
  "key4": "2KNjFAKLmA4J4mp2cQMGp8XuoVrDd4ZMCox8PdNjbqbky5QML6264iy2xaRtN3n4h3S4pkV7umuAvo8J9veFdCeT",
  "key5": "2WqUGqVKWByoPfoKwU5DJURYKiNuNRAMxj5jdoWG3tZxANdCJfhSfZLcVDXLdhwACAPcYQN2kVXzMZg74nAKfjyX",
  "key6": "4fwMDA7BCWg65YBfPbSzvaX5ZjHPEzHv3jRv5ZYhkGyD1EJkwecoHkrYvY21adJTgC7wuGp8Vh8PHvoFCSrjGeQM",
  "key7": "3qi6XDdmfebkiCe14nfy7XRZjz96WXUYu6nh1oacNJYSTXgQrezCNVTe8XMZGjMJcSFvMBeLXJhxMuvBvryGfGZo",
  "key8": "4zQpxY938cMKjYXD6rzTrKmp5o1VbMqK9t3QFpX3TmsDfpnsNsLLURTReW3z4dFzBf4SsMAmDNPM9td2AbqyvVvP",
  "key9": "em1XQLfSVdq95UPi6RQKe72qHRSfjWUpv7fNUcNifxm2YTzYoy57NBinVGDEgpFWBudET63ta4ztRSX6Bmx86Ui",
  "key10": "2Hc8Dc1dqcdfyTzziVrbwrcMyTWtGnKtHCi9YFq4kyDjoTDqrqJiVSGLaWSLysdNWLTnxcrbYC8hGBGPnoMKySa6",
  "key11": "3H9mN4racHDBXC39J2ox6PbXAS9enAoy2nWccYYf8HP9AURSre5mw3Ekarn63cMRNssMwtKRJ4D8exDfWMHSsDxH",
  "key12": "4JRDsw9iSgTsarhvGNrauRgdKCRaxfpQVLPZhhy7FNdajQihrMYUG4CvceCBRGvQuvmr7RaPoMYstQxeN2uHjbNZ",
  "key13": "5Z8k3FYYsXkBp5a5MfxTZvXGpABzfJg6acB3UxETAj1YHxhXbsn3dU2rcZmTrEjNAHUcmSaBUj63ftdFzSvwkxyC",
  "key14": "3JLcJGbKTefyxrcps4zqBYp6GCt4Fd2ow9GYRZTGnbwFBV247Q4W88xBkuKKksm7hqoxgGivjcxAUkEhKdytFdTh",
  "key15": "2nnBpD81MucFyAbZq8WMx2JSL4mPKePPWcLMcYJSz4awPsUr2eiY3N82WeqqnnZfRyVWkJMEJwZxRdQvZgkJvVUv",
  "key16": "5J6M6L71cQ9veowytYe7Vw39gaXySXs7Xhu9w2vDsqyWLeRQNUsGq1vqYPmgyyCaSAr4zJx4QNKvvHp9iLHd95gN",
  "key17": "4wnpcX5Z2rDJPtKPkrw3ZHotxC9juxMa7JnTHpU4RC7G5GuVaSnb8Tf2Xa3ah2gq9yVjfEsPjcAJqK394crpadnv",
  "key18": "3FftQjyAvWC7DJi8uyPWxgXevsgG9o89PK5NNLuL5d3JiU2TRC6SudahNwqNen2A6Pn7ZzbYBSSiGiayBF6hVPoJ",
  "key19": "heJiRpEUEJ8kFVJg17sVvuwqrsVMFd7GD52ZDRcr88Labu9S9fHHyZy7VGYDqMcH4BKL251f4waddFMMmA677Kp",
  "key20": "JBUvkfh7U48VYkk24oU6tE8ESNE2RL6NzyhuEzKpYke22S7BXH9xM9ftn2qP5w3hvrhiL1NEMbBnSvMZY53MA8U",
  "key21": "36cbDWy5vgRPXzFJSLaudfwNBDugzeA3f35QhL9Sm3JNQefMyB6xheszXw3ZfdKbVrqHBH9R17wKWa9ik3GypxHx",
  "key22": "55WJqaebZhNiLKnFtqjZbHsT5RABmakTUvvJSf1T3y5qNdN5VedfHnXDKTDiVKq6JRqzoKzyjnExM7skewz7CHzU",
  "key23": "43c7XqP35Mx6EFTc4jXWr111eJ5nPmHerikHrYocPXzwFEPYhKejLrR2UTaE5hJHZ8YRpFosD6uAsHyj7Fq9dnur",
  "key24": "3wJovNjm2RsnAAJ7K7kJ8f67qVqstV58kwBHvTjp2oFMi8RCJtxmLhGnSNGGk9zYrrXUpjftPxrQD97sfd765vUW",
  "key25": "5rva5VFtD5U4tPVa3Bjj8GgZtfoTo86GrNNjL3dFX6iWnytZgbE6FEeQviuoeqpTkqSR71ReFcw4JKsi19KKswN2",
  "key26": "5S42mtpqNXdMYz5ZVVqTPN1na5LKrLMoD9fEsmrggLEWFcskDGX9V6aFQJ9F4Xi8jCrQumLaG79fhBkDjF18o5ub",
  "key27": "2LuLDkHNo3RbS1DDAXE235rtQTJSzkAeUMwTA6CBd9vB1MgLch3FtKAqJpwQnjmHTAYFEpJfscKkhK8wXXcPTRkP",
  "key28": "5GYSfdrTib17NqLAePFYk2uKmDyeSVnnuHmsX9d2bX1YhvR2tHGfuXRFNGdHy2wWUnLUUzMpwKBiqwym79vcV2tm",
  "key29": "yyF52MnMhsonT9n3ZDBWTr1M3KPsqX15NKKUqbUHU6rgkt7kvkUqH94w7aKvQXwqusTHJdzLp7fMcvvYG4sBTBa"
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

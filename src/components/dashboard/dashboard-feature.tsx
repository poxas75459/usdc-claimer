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
    "QqgM8tnA7sNKbyQhdYWRnhir4LaYpnJajSHEUdv5tgLJovF4PB2rbL3ckxi9ZrfsrHUKYvV8Tox4o6uxtX28gCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tirCcZ1DRT5UroR2UHmRzeVghEYuzoY7oGYiMHZi4yBLD2oP7jmrX42XpkX939CabdyMxF1ssopyS1vBpih8U3H",
  "key1": "2FE8LyuCUYYLyXtESvZvrhzK8WHkRLYebcM8M5gebKd43dEcXRQ5HBXitGYQvv7QBHNim4hUTYcMiaaCTRSQEebE",
  "key2": "1MDTXXFMAxX3RpgNQkxJcoJdXweVqr9AtXxvcZuNbCouZ4Aea2Yod6y5kVrtFf91TDphMWhFivThfczZq8R7qNc",
  "key3": "251nVWAAwNoXzxfSki7iph1F2oNZ9VUFdMAJbMBQjbH2wRiY29aSW6CV1UGoP7G6rFoJQKA4WTng5Nq8yq2T56dN",
  "key4": "4XTE7cPBUhL4bTqrpYKBfd9iaADoz3Qf6junXg6RZmAHtsDaVoVFJE4z3PihdmfVvsRwyvM1JZ4hp46DUZdtrRFm",
  "key5": "oySyQuXnCmUvDUN9661t6tKXciN7zhuoWDtPJNL27hiwRQ8ULbZdfXs3NJ3J2YUmHufaFScP2tRXuKRH6UcSTcB",
  "key6": "4pKvVicacNTXrqwcuf3uo2pQMN5JpshiHCPfRrMqZV9gc7y54YkmKsspTR69vEk69PdJzVMjxJKdKYs7HKjYVJ7Z",
  "key7": "41ma5bUrGwCwMv1Z9G7hJnB9RW6jGDgKmsTS7cijZgKHfdfijeyiD2Rd7VtxJJMWgh3YEj2wWxZYvXu3qzgq2Dah",
  "key8": "2o91sCP68WpkRWmaWAvdWjPJJzuyZ9pCMPtY359kKph971BZTD1HyuE7nP9RHYD6fXLKWfYZ9W2v9mgvqEDoqaFN",
  "key9": "5nrvNs2UcRAKB7cTqn4jnRiZqjNReTbtPWnckB4yV22FJPJR46HwzM9ZDDw2wjPi2qksJTArtniWSNKTdbuubHYT",
  "key10": "VcSPccfcAoFkQEQPvCL4jrqJmALcgGgRj77E86SxARzfQbc2XN4nQzo9hfB88d8jCL7SeUUnEtQTiWJ8Kc7PtAb",
  "key11": "4DGfbJNP9JuPmS7bHeZU4y5frvTj9Q8sHwewDQsZd9Uqgy65A5GGKH4Qg7kfDbz7f1JhPBff5ACmhBg7pws2wmbd",
  "key12": "7dYC7n8xquxQNsNh1UxTWUpbdBTWX85mn58y9imQHDs9xMYGjrqcKNBebPoBdetXhp4gmMUcziy9jsABmzCwqpq",
  "key13": "4RQCFg9NTmo5ipAoX1WAXbywbnocCsGH4r5kp5TpXHF4JA5erAjpMWLx2DFRmr3jh4S2Tt24ypULH2q3q565zxQt",
  "key14": "5XFSnmUToW9ohidcnVZ2WsKerxA9Qh4SWiTEeuiTN4gAwuMH4NLF2LAqF9CciiG6neYmTWLAzBfyk9ykCtTHbKdj",
  "key15": "3F48sRERsHrgJKffHr86GX4LEo6eorcFh7q8ykg17wxgDvzkfxoCXQuo62VnXuWL5KJQ9rmH5XmjP2KkB9zb3tMD",
  "key16": "mQLeFuAj5z4Yw6NB8CGKQYgtcQuwRZUCa7N8YbcFiwpV7jMW4Auc7Vrozht8S6X4mZhPyhAzja56vK8zmaRqvqs",
  "key17": "5gCyJ9M8FgAVSBF7YJpWzdi27k7z5XK8Z7PgEF1tNu44BQFzisQfN3KUCrK2udp9Mw3uwQMPRSf4Kr3b14vrLAq5",
  "key18": "4RrosuLJzodksdZrfKHs5ftbivjfntzLr7iHgkRLSnqEQhu17H7VkRFNrs45EauVRfix5rvTNR8vTs3ofQdWqQ1s",
  "key19": "2ZfUv5gQ8eKqc2gvgfKJ4qLix8bwoPUy5vsj6NDgL38wKuuXhvroziK58cBPfS4LFxqYU3AvQZvknhTr39rEE5vq",
  "key20": "5XDsfUMybaknCbWf47mx1ae6AXPVHdTVPTSm9nUgUARWexTTNnaNyKRFMc8rLyjBor8B1tJvStz1kBJVBufXvDDq",
  "key21": "38BconPkffoF17a9vZUmzRxQZffJ3nw1qS5G9Hq4J38NKRnpczr4mPJXxH3ZkZDBW2YBcyw5MkB2LMGcvjZ4FCiv",
  "key22": "2i87NdUtvSsxSWTFjevv8tzx7YS72MjUPcE1sk35CweJkRxh7hdX9xHLVskGdURL8jW2x7SwCxaSNyQRnMwETQhb",
  "key23": "33azEFCnXmJZsD7dexC3TubjTWPQiCKtmFz7p3y5MsPcETJPWHAdAhorS3kSu9V88ZCCjuWQmXpjMQXLW5bAc1Zi",
  "key24": "5DWDR9YX2pkCbdMeRr5adnVGvCFdVwCSjdWWYwSBGmbcb1tAr5CcfrR9DNdkj4GHYJK3tgrKYq84Jhk3XtBMKotq",
  "key25": "4LdqhXkagXAgcVVQxcn4BoXfnKUg4Jn3XW7A3xpyaCugyMBD2auGRYwxzTPKk93dKAdHc9rTNxSa3nKsQt4kHk16",
  "key26": "26bhsKMhW5xdikgeMvVJn1JhTdEQnodqaaYWMgz34ye2mnSmgUEEJLW8qzAgNdHdoiKquhRH7MYErRtYvcqibSBf",
  "key27": "49NMNjKGxqHwNAXVEvNn9F5eaKqFSZ4Ewn7dsngP7aMFSyq3xeoj6YLjcqFtQdWczZexcLLH22j3KsawUDgYrNCn",
  "key28": "5yqdDKXh7RQuBhs5Vvwr64TZRRXBkDe4nGJFK9t3tSMYzkbEEmpGrx4A48T4Cq9wGeweRFqq8Mtwp3Ag4yyuHhLi",
  "key29": "4VyqYLLTMBJgQ2G3k5v7Q7RVidHdQfta1UkQsYB6kcY1GwE2Bst8bkKgjR7JexU85TKsrjs748MWSzLNdQa3b3XG",
  "key30": "1R4rbKiZaKjYXrqXVVbayvCfU4oL2tSp7j7o9yQzM2pPJusYu63j1exEcVvP31TM6oBwddKt6hGyaymKgxFaxTy",
  "key31": "348xDzSbUQsbLt7xtvoADkxPiNjRre4YYUUjr45oz6jDBBf9cJDVuKXi7sSgzAAUhFHCMAVgfnqh7bfaVM3PjDfT",
  "key32": "37tTQ3zFdfRk3oSBCJP3iRfR2VXcJb22s9ptWF2cnV6o36DHwpfhdWzRwD2AfTnGQC766Yj6VEw7zHr6hxAw6AY5",
  "key33": "22i8WiFDHLtUNTxg3w8oHBGSaD3vgpjfkc4QqyRF4Ecs11rmrrJd5AtabZh3Wu6a8fswpw8uEn7kgXjcGFWbE7q5",
  "key34": "5fH9PiuEEX81oGYBscQAn3rG96zFr4ijKN28cxPbnwesxLZTTtV5bzZqafywoX6qqss6M65R9KQr2F2SAk3myUt5",
  "key35": "5PXj25qA2dKvNi6WDyuDXKAjyaWUtxkCBvzqCS1jThhfMRwwm5hnfejBSPdpNPjttzT5AC8QBiCAaj2FYevUFtLD",
  "key36": "3KphYrFJg9W7oXo61uZG2BbM6sf4nY2a7c7iydfSLsWMQu7QeXmX59dfNEvXpaciTGawCvjh616T7KWerAyaNuWj",
  "key37": "2i6gmXHUrTCVL8rbm1VTWaYBfidcUR18j9TiiJ9Pnkj1cj9HegWB2do8pjJYAsuxbX9wSMkJpDZSmCdMYTTtfjAS",
  "key38": "uz77AeEHbGv1xcYVwb9S3GvhBZsrUvPt5Nfp9zyA2adkrGXy8paq2JdURwt4N3QTMpV8TQKoqQK4UWXd8g5s2BF",
  "key39": "hHNuz4cUSmQ82cVJXLW3tmythEh2Cd3EkrpUGu9i9hhCscgZQnoJJQ24vEuYtZubdEKgcC4ZYeH6Uj5Xv23ainQ",
  "key40": "4gzcLBoPM5RRfV6yWKmX9BWBG5vwz4Gfieuxp8zfrj3J9gnnPWEB3pKCVKspDTd158FKFEZdriwqpyBmLqpmZ2oJ",
  "key41": "5nhnj2ftbfNB6WLccXp82hRSo5YmKqbUV3P5ZUXz5c3goinTLKt9NuLKgRwRkn8bkxXu68VikGMmYDnvZR6FHmeS",
  "key42": "3gyrVhRZVmXCvBKYfrrs1j8TumTL9oi2ENTEs3Jnw7YHaWWuAweUJSf95jPp15aLpViqdjMaPvZg23QfFcG7g1RQ",
  "key43": "4gYqRA1gVu97GwMQkPDHGYHmzsndeHLe7j7mD5Q3yUU6LJX8aNxzPnQqvvfHgCY88EF2GzRkAnJ78VXfkAxMPkmX",
  "key44": "3maNY8YopAfcRVGb65dSbdZadm3itGamofwuaSuBzdc9o3MaNsWGNBov1wihHw9ouswkk28KA3h9oG1jZRD3CSkg"
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

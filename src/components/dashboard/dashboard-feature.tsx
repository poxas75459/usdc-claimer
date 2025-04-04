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
    "3R3DpafYc7aNLcrk8pL9mo476KGWgoVzFzFERLMFRvdedSSp2hWLn3hDnkYFDS735aEnWdkws1EymJW9nxHmoFZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLz74EL631VYVFywRb43jvQi6oGTRSS488hG4vjMyAD7HW9qBJebvP4qKQ51BGAaWZ8jin4Q2DReAFUimNVgLFE",
  "key1": "3exksJExKJR4XiifKZrr7SWFwihTfAMzFucpohQcKP71U7LZKeSGzq1FkkKqAtEzwkd838vHaRPzjMS4f1f7MKvc",
  "key2": "2CjDjSSuTfaGN4hu5nSAod6NUnxqfrM7kh9Zxmq9Ht8DTVtr5Pqe37BRt5QWD9JZYG1fWD9cArM1yqG9hUEhiUFc",
  "key3": "5SG2x8dqvXU3BKoG8hgPGPbcybhbTYxgvjJ5hC5ok5VPJypHzUmiz7ACh9CW9J8LmyN9ypUYPcmAuaMF7CVZeibi",
  "key4": "62KjqWAYkprxkrDiJYTBhbhQ8HL9wxMaqiFmneCmmifzPzezkPPVXjcfyE3M4vgoaYL7KpN1Pnopb9Rpk5ZguG8V",
  "key5": "5JUHHMgWT6nUt9qVUvf9hn8jc5eS5dHXDiZy5amz2SD22KMzoL3kSyVhUPpp92xRVe7a4driCj6bdR2Pn5RNbsR7",
  "key6": "5ryMnb449KU4HT88gwbYwk1vVy6sjxHfeWvSnBRACvi3t8pRdRQjPbPeNJ59D9oZWUnevhmWvqzgKqjqcPtidJQU",
  "key7": "2isppg3G6pp6D6J6366CpotvhyfEahGJW1bG2duayJdFJEPw4R4QgUV4Ns2o7spXrvWXXSWyE1ogeVJ8ZmTUEV6H",
  "key8": "2FfX1xCwW3qMWbHoY7GDVdd8d59q1sZAwkePjnzE6gj37DNs6jz6ivuxSikPJjtiYop6kmxGdUq1kQ2DMwtfopf3",
  "key9": "54em1XHVpj5K9qjDfBHKUU8AuxFrBkXyqK67py3hgy156Uz2J1yynrtNtUUg6cWrmPSSi2uTQjEcK9AXAcULps76",
  "key10": "5VUXxYAkbH6nUMAHfsR2qST85tmYY87ycmStGnH4aNZwnDtqnfbxR33o6D8F5qAru1fNRiGMfc8YnUufTj8FLVhA",
  "key11": "ndjvGEinTahwMWfeYKzaT2WorgLACgUpE7R12YkujNr8Ev6bqQCeZixRnJCQQyGWkpqTYsSTwct5urrdaj4xvsj",
  "key12": "2ivGELfZ6GzvinWu6TsdcfCScqRKexMZ4NuLkXEDgirQnA2Ezfx28QCtqSR55HACmBJr9PwwXyFzgVUUaNmM1yZS",
  "key13": "29nbs89xnJ34q72qx3g5Br1HtzJuw1acteQNE8KcdMmkyH3dmJiCZgXkVPTcAdeqCWdtr4UPBS2JPSCCBZPiuqZ2",
  "key14": "2HdCUJMfLvSc15oh5bTC1tCHGhx1eQp9d399bB6PrbKD9XiJkowfjwKgiyJhKzjRnQy6rQ1vR8YQ8auEpE6pAy5A",
  "key15": "2waxgr71FD1PaFfW7czMydau7ssZxV2YQhYjdJKxnm6eY1ppATQUeLtE8JfWM7UPzTyWvRcGsu6kyGJZawJUtxTv",
  "key16": "5FxgDtHXr6USpXDa1T7Y26NsYoAyXnsqpKfuw9cKXD9BGUhWJz2KbLWHFU6oWcJpU7gvs1isS7q4akejAxMEVH1k",
  "key17": "GktGjTQpndhmdefXbSbFs1JGbVBuT22WLU1JvBq1tXLwCCsUrBHAqsh2j22a4cRaCyq5NDbULCawB3FcvYmj1mo",
  "key18": "5HtrZ9iSDMKrSBHGtALqRfANEryF5BgL83PyQ9MvSYL6vdQdus7cFrPbCdpuzp2rgeU5wPCfA2N4qUbKTaUAGn57",
  "key19": "2ByoGKq8vCzRH7qhBy7V33q3eP7S5sCQwMAzghSLwDXTY4GYB6fcX4REjNC1N8RPZTJEKXiNzCP1ZmvPDr1ipnYj",
  "key20": "5xbmzJfqachr7rbuQc5VLSgS7AbNbdQE1BrV4SLHLoTAKmL4iNdfBeAgJG8uV7pLJUY86XT55cVJL9APoaQZERGW",
  "key21": "5gPpMT85YGxyeBZJRtZ2cP1fxNLNeKyxKexPvf46heQ31VsFSkDy9so3JJQ9FLv5jq1ACDj9BCdZPWfRUVMMoUVk",
  "key22": "2Y8jahYdevg5seJvEeMg4m2PHeh8tHnVTYLRieunq9Unt6rY1v5ZPS3h5vcCNN3BschJBrJ5hmpzmhqwZ4j3p4YM",
  "key23": "2vP3uaPPucTfdHVcqW2QFBi525cZaRwnnkNc5eTkWZumb6D7QpLzRFx6yTLAfDgQjJ1BWNQbb1ZS8Df8SA9MCCxn",
  "key24": "3LQWqqGypRcTpiuMuQ6notSTubjy74zG4FHk7ZdEJig4szLmp66pWLh3C2qQgGvWQ59krpaXTsBmEsKLjC6444DG",
  "key25": "mheHgT8C9FvYGD52C66YDVwh8a8umXiV1REEeu7J8Ys3T6s4nSa99zRU5XREmWXseYatDz2z7gw8vXJfVpfbCAf",
  "key26": "5Hgmtb39Q7Q2hvdiqtd4SJZrXg5zj3HHH5D6vpoaQXj9bZAXowX2VsfNrRFHUBJ8G9HkrskBYpkV6kT2pn6zZYnf",
  "key27": "2ddULeLXmjB9iPkvPej3YdzHoQxwNHEmKYcazWu5xefEjuKLDGu8ViGP17SMzD1Cyk4YGAetEC3EeJwewAifHHGd",
  "key28": "3x8BoynUr7HZTvSWHeVPDNAHKsVfD3R5tfdurGDTadP46R5kDBwZbZ2VERb4ESyYGHKEDdwfgNfQXPM8cqyJkAo4",
  "key29": "2qPW4ssafmEdZJiS4BGP7u2FQuhgaPmaU3pF16XGXmUacc4kodJeUjDAwZabsnjoYUvg5PgVxymWDJ3wXRramnCp",
  "key30": "2JwECJpPikkDwZr21zV9fYBQFpi7v92c1CQ6oDXSyTUNWXhdYguAr5FebWvfQQ94DSArrcogG6NY1E9Y2m1wr9Kz",
  "key31": "4QXC1DVJf2AHttY8jKTuvz3MVu9CofQyPLopFJHGZM5ckLkSm1a5UyrH1U52pEX2iDHXxfcuiTpTpChofzkrJw2D",
  "key32": "5i89ys25thbFHgEQmmXwj34K5opbX9KZzKw1rgtQEu7azfM13svwTytVpGLTMZrGGwh9XiTe7VrsQxMHpsrd7xbx",
  "key33": "23TnD6WvaLWxss8G6grkPcHHJcocuD5NfbRDmpxgAPmEnkiP43uevo8EwPN9DNfThMJ9nCeGBNnXz3PtKszw8V9V",
  "key34": "3mpEwh8rGQ4oxAGVoFpr9toXpjjsv76K4617Uty2WtR2hgAyFrQro7SNNXDPzemy3wz1Qr4W1cob45BS98K1C7fn"
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

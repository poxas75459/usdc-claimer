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
    "2u41NA4rjHqTQygaAYTg8gqdvFFNrr18FPHFCCv5gvA17B7uXqgYj2AtUJ8Xz9bgM1HK68iz2hdCSviuVjvqYFrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLbxvczAy6WSiEd7YHLTrYBxcrzUp9aGgF8KtoAR5wEvgXpZBLht1X9mhWRywunh8QcdUayokwfKergRabnarMr",
  "key1": "Z1PqsBzLbge9oPpHA4yc6z9Hx8z2rvBNPLxrQWxdWzZDgHCk2mJEzHghmoeNHMy75LCB2jMfoExUUq2h6qFP1CR",
  "key2": "4vUFJ21XAcXKZ8CyY1EQ1go4xMXKshMFSLkwxEq1AdXXbsAUi5ggfZitrLZsDiQEfD5yJatXegcHxcL627657Dch",
  "key3": "vp6aKQJ3xppPxvEinoTzwhGnW92sfVedvwLojifVcwShxfKj3N73v8DKUwVG7pLa59BLEeVrrgf2JPR36mLinap",
  "key4": "55HetUDmYRjat5dyTmvi46DuhatewCP1y4hLupjDJ9yiKp61jJH8YihGz8PeFHuyerJnVnnkeVGYPzSrGvbrw3j9",
  "key5": "wTL3hemySkyWf3amsKeGve21Bj819zpjvSfsBrn8LaKVjGyntc6JmzGL3vRchRzE9ogThaHZS4hubWV7nu9nfBj",
  "key6": "ZHMVgLf67F6JQyNHEggHDUdiWe7WRyMJwE2g46KavAzqdEE4Wd4cyuTvi5ciYy61D8L28AqzJV841MSrMzBZPHF",
  "key7": "54XsSceuuyE4skFqAxH7cxZxRc25ty3deHnFkqDBdbqHRfujw46NqmK3nMFQ2t1pEixQEsb2MUUYZG7CjMo578PE",
  "key8": "3A3Gtqm2RWcuw9ZGaWR4g5ReN3rZZemvLU2YstiZ62EF841WBWMkuawPQKcFTJmKjHrmfkkWeWDzS7imdn36ausr",
  "key9": "2V81bDTuCKpBMdwvzMen924b6hxqgnvRhFxFRfemrM4pdC2vTXzkqVGJH1F8rEBwybQmSgASXVcytT8J3iaf8FdZ",
  "key10": "ydg5aw5ebfY7WWoCMnMQTcq1g3LKGa3SXYdETLNVTYZNTUZYwXstAPshrnt7Ldsc5QCCjCCtQivWGEmtDbvTQHo",
  "key11": "UZdP9knYysx72wxXcygkZsCsUhnLavW1tpoFsFpkjedYPVKxBYNTULFyFjyq4YVkjtnzPU5rdnto4ZPp73i7jGc",
  "key12": "53uhkMJ6Pk3SJekHzvXhWxFNwaqo4GpdJ9XUW1YzSMAYvr8ZNYmSNYKZYUHwNsUZbLiWYuMaQJtAcAEoJ7MJjzfP",
  "key13": "3Yzhqsc7gEb8pBXZbPXvsEejZw81vf3gTS7dk1zBPXsKvvrxD9BhRDDjSgCQcokFPVnu9ppLb7Li5aKiuUby3puh",
  "key14": "27q6q1Qvk2Etr4EAX4BrkYYrmBMDDQoUL1M89buVyLatciodtaLmm5PYaGYNLSRv1wLe4aWAcYJ2NJE8GVBETRgr",
  "key15": "3tP5aCfGBKc52Y67HXWWjve1v89bMfWmNKB3i9CjkhA7dRDKAqh7wn4prqMTCgvH7xqtXhC3ZLwCqxjexkUYDn1j",
  "key16": "3PYhCWAdGQDnqLHhZ9ZN8LYsAY3eJoe7CwxUVPHih6Lwb9jQaj9sU3y47VBhNVTMexEit54Hpf6t2a55M1biVDMr",
  "key17": "61gMJ3P8pf2hVWZ3CSiFtpvpb8s6wsyBMjLZoft74YtGWV1gGZEXTQSZocfFYnXu4FZznw188Sj13HaUHUKNGmJi",
  "key18": "3fPhfZtkvWq5r383MhU91RfRysVkgvjFKAu4SAwLiozvw5swY1jk5zBpD8JvpEroxAmxfHahRywepSRLiYNY7Q4w",
  "key19": "2oS8NMbPZ24zuAHz9qLWxZmewXn6ydf1z7ZWnD3pGNuXvn93BB7RMzDZ6bYTbkHHv494mdCGAD1AkjUGq56n3yo7",
  "key20": "2qikpzx47jZFFB3L2iNJynSwyqFFBrqsPcc548c29NDWBJxeEUg4HUZg1jYD9FTj9yvJ3T1QKGvRKUX5vsDkWouX",
  "key21": "63En2DhCFkAd97przxD3bu7n3fTCkV3RA4kYB1i8cKLngfvZSVTimb8dbW3U6vJgEWYCergYb4gAMhmrqM4G7sGD",
  "key22": "2ZhrVebKt8oJN1oSr43sU5ds3r9z9qp4SVQ9ojgL6iGnfhD2fvkWxp5kNmx1wSBGmzCvfGFLCPkY6pMgwNknyP4w",
  "key23": "2zBkfvQHpvD9kdzvnvfLGV2CTnyRFhfzxoNK2BSuC8SKsHAp8QSXfweDZ7udrJU5mVoXmngECwwaA1rWLx8LpH5y",
  "key24": "3ypvQPyC9uA26MpJQoNatnwYGEf7iA3aAH2zG1fPhNLrsb59YK1fBawQMzDhQjUuj2mq2QafU2wGLiih24kioXkB",
  "key25": "4dzaRanyNGmaWaWhyCvUwe5najrSoxk9yZo8jqduyeAosSjzu3nkNM4KgyTc7DMPbEGrCEqTLej8t4Dj44qZmYGS",
  "key26": "5xkmfpxRT6MXGDsuVaq9L9DYdCfsXEKpqKhpTDmrHBmQH7d3RR4WGzxDM7tDwevhp5ZNPAH7TULfYLq5GfG8N5Qy",
  "key27": "5zKpyGBUDWyrGp8wEd4UXfEjSy34Htvbikr8yvxV5M8DG3uW7EBhgKnGRBwrpcji6Ak9DuVV4AuBfHXaKWA82aNL",
  "key28": "64RXywZ78hdEn22PHgvg1SvdSyHaUJXEXaUNP6ikcrMuyTVBDKjQ1ubfBHBpdyHhYco9mSXtiW3HowP3LoybeC7R",
  "key29": "3QyLb8EVs3DfoefosurbPm4KpxbQHMba7PEagkhKCGNEUUbrRQXvLKNZN4dQtwRiv8auQZvR3qknbba6Yu9svVSj",
  "key30": "35cwdgFXuNf8cJcwXYNRTTWdU23ZjN1KGXVGjFGdCGUtP5kisj46sycRVtxFS5m2ziVmDuCpi3tQg6PpMSrcvDyJ"
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

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
    "5LYHw6KX8HjKeyTH1F1exv9qmV5eBqeM1opMQM6AiCotYBe9Jj8pZ8i3NY2WiCcZip3fkKsoaEqTk2ZZdGd6wYQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQccKE3Szo2C4fAJazZ4FCf4TwYo12uPQrFbVfPpg6DqQLusMabNmRw3m7WZCwhjR9m3ANxTN5d1fBEe3bH1egt",
  "key1": "bfLA6u5AT4kteb5KnTBtnkDzjYSiAUxu6pzLgAJgPT8DLBz8RrXf4XgF2ute7DGicCToRdN7yXWJpKZK5iEExv6",
  "key2": "m4PZsKSJQXUFA99Rj2PjhN8Mhw7Ussbh2SHzAABWCG416ar5NB7YqVG4K6TeJSeZPcvVfBnkAA9pu7PPgfrhgV3",
  "key3": "4qdhZeaRi6ZZv4G56AUjYZqDXvNactnv3kkDDE9LFxJgZXzQjVX4SQ3t3k5wpWGeMkBGxmJ2UvFybgLGPKLwpeFe",
  "key4": "2PgWJnR3YXALTqqWcgqSrH9Ssabpd6a7nPpTddGabE7t8zwLZ6EaUoFCS3bkWA4yEkRE4aUkT73vU5VDJUgimf9x",
  "key5": "42Frrm5QYuZrXJDbia75kcBvXgpW6qpNEYL5jAhYXm8cty12GEA3CnRBeDS1MRrkWM5H9DMwiGZDcUNEiWXZbMXF",
  "key6": "5UVNJqPNdKiHvsNxA6rKLbe1P8xGQkAVZdGWT4hBTfUy9f5dxvu8fVP7yewFqY49Ms6HKXe1aK471t4rqXD6HtsC",
  "key7": "25oFBBKyM9Rdg1ymSq8ssGJKf9wAPxNqRYjFJAYiB5v8EZdVAXk2ck3o6rLbk2ZRugPCc3rG3RCgmpGHeZSUKr7r",
  "key8": "3nqHUD3du5Yf5iebWoYf91QSiYMfyQ4CHGM5dwDuaHmLQMuQECeX6a3aSicr5FQgeBcNL9XQBSbmhFPJeQ9ikr6K",
  "key9": "3HDygmVtwaXshh7aVJA1H6BvgfHwfMVLi19QVyq9NVoTAdKTkRfqneLnjC7SAgRUTse6HyYTBTZuyTkdTgrGYuQm",
  "key10": "3y3LJHxZT5SoRVPdUBj8MxA9wZQbjVHp26XqGDadVtcFxnLwawZYvH6rqb3oZSCt3RwYnGfUqgLpZmo4BVENSrDi",
  "key11": "SYsSwGNMwiimT3tMyMHHKQzJwh3KN8kAcjXwZFpjHc9SMyhm7Je96nQDaieACcYL4cp9RpiTEkEM1Cjg3mfkbHG",
  "key12": "2jfGoHpHpEEmMU2dqbutMiTvm35KcaD8gqgwgRtiLobpkE826W3pNctpWnhUvrEkXVxkhQ2PtkBNbsu4FKoxao4b",
  "key13": "47zmzGk7PgNQHNDuVyQ8T1DWG8CbNo9EmQ9THQHPNgE8dzX4y1K7b9d5L4RLvXG3r42THDcS4K3iV3jT4t9nJGTQ",
  "key14": "57ui387g8JiSPi1mj9YbNnkkKQ4KJL5962xRvBzop6BAq38etCYgWRaa6xFDc6evTf5DTvU4DBcQqcVwVWUU2FDk",
  "key15": "2XRcLdpGzgWTnBTBbRKSFP9TCJzD6nNC4ZbTGFFHUt2C6aorHXBdL3fvJ1GMz3Grxs5Fz7ExKJX6kvcMArqiWg48",
  "key16": "4MTqqhYdW5AHUKZSXMLF7TbXtXSkehF4qjtbtsRHjjD54HHtYkS8dqHor6et1q5FNKc4aNiJy7dgr3rQfMwrSw87",
  "key17": "42d9i9f9yZaaUAJLTTJfAJQRPtfknSnUhvMy1gYR9RiqSAzZ3sqsrhtuzgX4djntXEmi9do3sUhHZ2ad8eDqZjcz",
  "key18": "63AyMJ4egeLrtQMsVtXhPwscEtzTtieEwHPvR2NVjUKBeUmDeZ36XuKHfhjwYm8oZedmbTq9tM2V9ADwFwG4nzSF",
  "key19": "4K45FhvJLn59NasyBFM61AuA2JxtnbZ4PtYfx3MaQ9iZMVRwBzuhVunfrRrqif3hANbrJBGtXFHh2rHRSK5NiahB",
  "key20": "k7nmisHftMCy6ppmkr74W1BHeG3wDjvhRZpNjdhRzcrWSU2JM18u8pueEYUzkk18MMzefsXfLeiVCH1rJYiCVcU",
  "key21": "2vuVM3qqcgJEDzaKZHbcmMMXW3geW1VMVu8kPPfK7FtB3UigSjUUgSz89Xc1cpap3ZPKzWNySuJmLdYhcDNKeTUX",
  "key22": "5W4572DR3hyUzkURqPbueViqLq7o4B7ztKfTNmr4kskqN4XG3y1MZTcx8wDSnPfg4dmDo5ohkq76U7NqHupivyJF",
  "key23": "4a2rcUx4M9U7sUdcLtpVauyhiAoskufhzYZVBz3J6UmRAZWwntqQyMWmBb8TeS7nosXWFVFodqxEC9DFpZ6KTxdn",
  "key24": "2Xk7ywX6Uo54MJAWNjmwNfirBJgVeKgo8YoTrQnLcHCe1jHUgSRdBPGGcM3tgfFFfW6LQgSjZptdE1xNq2y85eRb",
  "key25": "2oS5YycU9Bd6ncX2LgmSj6hFR6ufvwweBTe7VbnvubJN8dQi1EiPv6czwXaV7auekocQz1LMfpyDqZRYd94sTyKZ",
  "key26": "5Axv2i4wivmLji77SMXvN5GQWSZLeb5LXsZsTrnraeaYHkfPxr7FQ9Tn8qZWGRndKv2DMYxXxp2joA6Dpfvnw6zw",
  "key27": "5vWwLGEnWjChBZh9Eqm1HroFgVd4Hj7AuiehaYxCQF5jHZRB7ssdkexBGBfT4S3hWeCu4nhxkrUJKNzdsKZWg7a7",
  "key28": "3JA4qwrXYpXYh6t2zhds1pw4yTCYDztfAGLfcKaCvZwGC7E3h6Pc1xFexoHVYRoUDZD6MkjQrLYmy6UTcbKdSPzX",
  "key29": "5WCGYdCDzqsGNK7FN5EQMo2JhP6xaggc7tA4YV8Qd424VnPyV46jUwC3EmcyQGccyBLUybCxUT3mXJUPr6sszUht",
  "key30": "LzW2Y6medYoKybRYMi2PG6XtAopcR6FxChnF2bd8i6iL2LJmfdFXeKuJk1cV28uai7WoruAapxACm7niUrewXkF"
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

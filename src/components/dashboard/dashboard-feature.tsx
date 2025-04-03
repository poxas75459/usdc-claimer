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
    "3niHq9JTfbzvXqhteBVutg5jgBJ9irPnw3Ue1Cp1NYr33LsX8vxfGKTH5ro7JAKoihAA5U671n3Hyn5kRBQGPzUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rb4rH33YFTyQMBnp9JCnpYfrWnKC5ufKUGzDiFaWk2tiaC7LbHQic5cYmdba125c2aHFR3nLGrV6MVqa48zJq5t",
  "key1": "48KwFhxuSx5DrjQwJaeDYxB2AkCUAV2R3u5uUz61ewNzcWVkmdAPxB1wvDYSq881CtzxGLz3c9Eor7NXUBShqqkZ",
  "key2": "3ZxqAKiaYcHiStd4aWBdmNrnSczB7ASMAasf5mnGomYxkPGeoZY9AEzWGTUxdQNu9WS4FyYU7Qd3Uq6A18uGEk8H",
  "key3": "fCos6WAG9b3rRx6FLms2QF2eVqnrHQM9UQxQLKT2cVgKMXmBuUXY9YdUyyjAQpR2twHTB4z4Ka49vZuVQphyPB7",
  "key4": "8kCvqkgSNURfCuCcUZUyV1jdwNNPEThWumen9NaLAwDgfHjKAdBESpHzr6USP2iTqaH2SzL6JJDzAFhiJp6ZpNH",
  "key5": "fGdWiCGYzUFexDBYTvHHYv3N4mo7HkTosG5dxHYF2Wm9UHQFLjYjCGHALHWMQEtZ41av68nvUMYm1PY7Cq5f7vr",
  "key6": "YFeoeMJraA5EFvs4uTRpiZquhwvs9XkGAja9vmqhnrGpZKUi6efYhbTBsKAZgEHbVUKFnbPe13V6ZJrTLKiLtFs",
  "key7": "3upo718YeH7FGiowYkpFR2vC2Tdr7EkSB12V3EEJYkchT7eKgqbVtPFMscN7Qy9tFXrEnRoRGUG4rRR4VQeTQQGo",
  "key8": "3Xn59agjm7aQgUxrYDQsTeBA8qHxMZGgtjF4rN2Pn18iTinpFbXZKu3X6ERxxmGok5v1zA29G8fd9c8tf8TZ2g4b",
  "key9": "teMf1qHdaoXXc9hvJPCc7obM4sEGaBSJrvpdd1Gkk9gVkGH737mD3LueR5F47tvq9P1oCVxk5vXtb3SV4BKv6vC",
  "key10": "2x2stnJQM9iw9MmFZRskDPysWANVNep89StcyzFX3VnLo6nD42huk9Zv99gNu1o5oVziKK66RophyF9xAw3xtqtB",
  "key11": "4ukvDvfqDi9etPXfuEwXrkY3cB3PqeKaxXq9X8kW5NBAX5LaEWsBED3ZhBznMswJ2wgSp6JVjheacmTvt7ncUfR1",
  "key12": "5qisjiAzW73QNYcosVs9hNDBhRgiXnLRMmawrKViEAAcJMuyRyR6uoBvTxwWRiBVicZb3dWpFYYHUYykvJ1WVkiX",
  "key13": "4xEZScYYyCHfDq5d3hxbbmGTrUfR5cyQBqDCEXy8G3WoaNWgh1bnJ1azC1KSvaeSoopZT9jHznowUjNMfdenwHJc",
  "key14": "5Hsq9sXhvzL6DcKhoAvppfc4pQkAG1ucFJ1M4VhufKYE2F7BzAQ5c9SpjN7t5yQ3Z3JfP7iMwv9DKPntSse7yAUo",
  "key15": "21Y8YbvuSeE8j7NRSLX7GTwJf5tjiFM2airNf3jRiQ3UxL9CA9scRWFrocuAFQo5U6d7wdiR7YCEd9kx3vAej3iT",
  "key16": "5SCESnbUEFjKNh5TJF4WLCyu4GXXmo2N2gjRGQcvGkXcjfV22VvHczkYa7mpk8pz86yw4sZKPSPGFJ2SPdnBxaQ1",
  "key17": "5LYxNEmZU4GG2AGEo7xyrW3iTCYQNLwRhFrEEbjeRdm2cW7fYYfpadQh1gMn1qhJizawNgH6S2qUj9PqS3HNGrim",
  "key18": "SBjL12QtL5LfsEcJygTYetwrmjvMEo2PpJjtraREkTgF3cDP1YB4zdjYyh3Wy513XifihwcZFNoqoNGtukp1VKp",
  "key19": "5PssUTzSVRnqEgFRuTjm4th3pxHMnMuP5JNYpdk2ajxkTzgy5ZmMnWJ99Ga2MzwC9RT9ZBBQVGGtUyDerwSwKVef",
  "key20": "vFWSjY4NBtbgHAXp3Eh3Uq4U3BywyDx3ci3jinFSRF1Kmb7kED6fEVQBwF7ss1Qd8XaGDj6RGLry6NZYZLXmyXo",
  "key21": "2SDUVcYEtNG127k3r35Kuf23XzHA78PmWkPMAZgqvXVyLK9YiR7uNcPtp2yKTrvBNdNaSrt1jByPZ42j8qaeFcmS",
  "key22": "3nqsMPfpULxhRyEJLz27r69cmEzsxrPVAgA7HKBmPfZoomJ8QKpFNky2XMYj9SrACz5dgNUGv2WFTPmbPfzMcZi3",
  "key23": "4Q6zBMH4T5DSZcHsHswB523vc888SXa3F1tcQZsEpGWAm2W57XfWixKTrVWEBAvyn9N4dNCnt2FMiprann8Akjuu",
  "key24": "C2akmnpAVefnZnze62o8Xh5bT3S3Wg5Nc2DdudBj3n8BqivkcgAqgfkaL3qpXkn1yYmj9kPuNA2a2YB6RLh7jkB",
  "key25": "3uNBUi6GUTAkdyYm24jBNSTmCDmNxfVfHanNcsftoqcaePuTwe94KQbvFzvJezpTPeZzrGNRsgPFLMi2Rj2iSyZg",
  "key26": "4w4ENSCA1CM6UZs7AW2Hj8FeLuGh6dM6nGkwq3GE3zE4NfRzpjhxzZnt8vCv47w9oueoWw5o8VxMQBCdZsnQHHsD",
  "key27": "2zJaQQbfpTDVXdf7nqFm3BDPSyChBJSdoyCoyu9XxyJxPcFQTaLqTJBD1yY15wyFhiZfK256DwVGzxruVAEQwhaP",
  "key28": "3HYLZH8EbVr2waU32fbjr9BogLMrBKZWCnLV9cmubS1SSo8S5LyB2nRqLr9KtpKWZaRn6DU8hmpNrVJxPVhCCQU1",
  "key29": "3RNvzNoE6KS7JYvoEvZWxhHBZD6P6PrFQTtHoycUpra9u16B3ixnWWkJrTfeBpCKk8VQhVfVN7anzNEyKYbfKpkx",
  "key30": "2zrFE7Y2J3EpbCyj1BabfZZzaQgUzY8nr8zNC1JUgjfbbHQijHrjxt44vmTifpJmDttmajehM5wgwNPJZETZaHsx",
  "key31": "5wvzBXztSBRWyu3kX752o3Erzeea8s3zK6VFWg5q8Zpzn8hWS4zLhmTunzW4DmenX6tyuE5n1sNqzgNHk6p8PgrR",
  "key32": "3QDdiKyerP9BNT2nzGtJQJNJDfimoN29B8JatCBVL5WALr6ZKAHzkFWW7CDR2ZwcHhPMT2F6HWPu8K9VMAXWHJBE",
  "key33": "5RBLXgyNYZmfsLaCEnnQCXPKtCv3R1ZMrTsKxa7ryHRquFypmDN7nhMfy1kBrZp3aFSw3oGBT5RxsgZTRN914jqx",
  "key34": "3vpS1DVGV4VXJJKY27KCxZ3oT8afKoGxGZwrJeZKbNpNszuCW7ppmvJEVqA2WjPhPUnMm3ahtS3pHxpzrXowicKT",
  "key35": "3AGAMNe3CWMPSygCpwetiL9Zyzw4vFPkiWnoy5iCoV8cDmwAAuouwcxqaZASoeXgx6ZERshDDsy8FuMwmyfSWQUC",
  "key36": "4gsfeXuB6BgY3dxviVoNt4SbgMzyqDUw5MggnGuGzzUf9dSbK4SccpCPhqH9ZFvWgTpgf5YZeqvfu5mbHwB9C62C",
  "key37": "ZcsYtfnB1yQx57mqtqPaV5haFveMLnCKmEDt9BchGP21L3Tax8ZtnSMNPzAP2z73yA7RzXcf226t9DEXXuHxgvV",
  "key38": "4jUbT1WSkTzFfEPxAQrELLnwrLngA9Yn5D6CasDCBBEPkCzW4EwmVvWsD3aq3x3DEhchvmeit9cJb5ML3s3tZ3Y6",
  "key39": "5i2DssSVcARw8Cb78nWacHEnubXSr1TB5Wf9KkYx9cQBwwyk3rgfZvY9xVKsrYg1e7hT1ihqenoLD1jFJPvQCNtA",
  "key40": "8r9DuKh3uhsnwVx7s6qrijBKkQbosSqttQpC4RvVCCxmekGxQRAcFuS99EyqW5oNNRT3HK26nGvxfx4z8zakjj8",
  "key41": "3HA7LYEWTmW75LrRzPyZHwAmoSJQWo7KMtbtgV4DEPrJRX7aYnuhjypuWT2YinFqZVoMRtqffTRbDdZLbdUASyr",
  "key42": "2WTtYLKLgM3FDKfQTDKhbasiz53sMCDurg2X9PYNP2TqzeY14CWyEzSNWYvL13p8kx6xX5qjztqpPd1B6fCpycVY",
  "key43": "3CLVsUNHY4vELo2H7VUhX9z4SeMmoh3bES1w4sstSLmaWGMBk37R6dLqMzrZ1uyqFC9K34CYhvLbHwJXQP6smBvB",
  "key44": "2AHU3VyqD7ZhfmPn9wST27TfZT8dkF1UUN4xJUiRtvETdHcH5UARi78uoff2Eg58SzgS1swi2YyaproXBX9gH6Ma",
  "key45": "xSBaQYxsUcWPKBSDj4Hh3NK5kEyzXE1LEXkAMFZNoHE2VAXD76M8Z66u22qCTTGPzPFjjrNQXZyZUyiu9GEpNmz",
  "key46": "3oyT8TM7ECBh3RPvSYvF5CQwKzi2pFxBdbBUA8rT9EcxkpqaWeKasBC22VxETBu4bZAwtKfhYkLrbAuf6yxTQz3m",
  "key47": "3SEv67kjFpKCY7jHTinXXWVmeFAB4e8PR98iAvT186gcjfAhiUofVjonFQbptjKNQ6Z8RRFg5uKjJbRtp7ajFEpb",
  "key48": "3yeFnFjKKWHwTB891o4p4EYiBf79qjrWqsMiPC9stZuyeJFstgoykX2jE9FUGXna9pCPE8jyKp7WHN5h95uMgv6a"
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

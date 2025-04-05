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
    "3gRZiHTsM4oPxETSrqVq72NQEYgS3BG2WaVMGTKcN1enxN6Y9PqnUxLuPDjJet7YZJQqvKgzQwquioQWvZ9sRyeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gMv8KcuSVy3AWPAvcuVuUNAVWr2e56bAxU6f74CRKMMFn33QLiNVc7b8kHurLswk6xdTmPuYL7aSWTqtfU2vC6",
  "key1": "3x4Dd1Apz6geJns86Leo7KPvzztESkYnb7RYpDXQNZsP6VVhy7idV3ujcGhh7yRU8JxtXALyW3tHpDkMLfecizSU",
  "key2": "4DdiXGD8q5eh8N2ZfhLAdRL9FmLVkAyBcxUePLRrLNm31ZMX13oFTuUGJF9kAcMmERuG6rta6uNxfaS4ijsy5JDk",
  "key3": "2YeJtcb7469BY3ENbpnSKP4nUa4MWwDWDqzpMq1x6dGTHX6sK1hWU3ddnbf5NyMbRTED3nD7WVHstRgutd6yS5qj",
  "key4": "2aHwncSYYR7ve122VZkQZmVyFBHt3pydinff1CfHc6ia1UtjSeoUrx5NbSccepfR34KpcpVubBGmHhhkVaCVVjZJ",
  "key5": "2Tmjtnps4qz6MSmkb8UhXx8NrDrmPngDaeWYCQW7RnPYM4jDw1a8kUmrUs8pC9ia1viMfkwgtkdF8YFGhKidsJGj",
  "key6": "yHAve3DyV61NQbsWV13TmRXjoDrKMNqEK6ZBS1is3qoK4K1HXTcrEFfQQw5hE9V9N67qT53GGmX8qa1LUuL7yPL",
  "key7": "2N5dXsmPBZMS1iCR3eZkenyx5t3nwM5DjGye5Eqbv8Pu55xNHiheJ7Y8sbQ7GehMgFwLTg8EMkPppqfunjAsvqds",
  "key8": "2R4cmoKLxk1QhGcG6Jwe5yFi6ztzXiS5cMssgLgDT4s92qHfkpkaQtNYHCqD8ZcEjcrR2gdWutyjGCMLaa3iWf8K",
  "key9": "58NinpBdWTeTweJbBZ3GGtsQ57SAvudc6Aoofg9GB9RDwbBBeQ9SnDdnxgin5ckbBF2yNAXybKgaTgDy1TSKvtwH",
  "key10": "3k6RQe9MEa6vuAsS2EQKgNr3u1dwGNpqKU9w3ziXAJ2Q9BYFjcN3tZcNjpqj4yKouuqsTFBjVAdnp7fnYgS4KRa",
  "key11": "4kbEEZcU6xRQbRR2EYutAq7h61y3szki1T2euMdrWiZqJZtoNmnpGtDsvssnU6biey11GkKGBmjAGg9iEQYbwxif",
  "key12": "jjZgXhAGMt68yi1NzrN4wtuG1V9t7UUsrhka1ReFH1tc1FAtzvdoQLgJxMvU6wKniR3SARTUjrC4PrS1d87tvZV",
  "key13": "5xwNEeoVUL1jz6qMtLN9mR7pzFXe4QyRtJLt5oa2aYhfjfuXE3s6VbqpBDRYQRGM5p9QjzeTfL77EKUf7ciwq8oV",
  "key14": "5oWXLzaqiajhJiUgwjFBtwQk4FvJFa3ZiWPgcJh53odcVgbuQCqANwUYw3N5yoQUMRbaMmf8RZ9CjoSg3RxSh852",
  "key15": "5wwAwiq7S4iMc8ygnC49FF5yCqy3QHfPrbaBrxwNTTFstpxMewzhogRks6SERq6eNyP9YzCHuCmJpSqY4gZaejb2",
  "key16": "58Mm4mPKRRoABkwGFf7Av52o6JqaMoPszrMgXwiTDPn21teizfxj7trpUpczJTweXCBuCh2Na6MyMfsD9zz5DNoz",
  "key17": "4gyvNy2kacNDeT9KrwmpVEngrqngrsv16HWkGf5RsZryznU7bkgTBiVWPE5iH1RgbqNkL2oqzAE3YFxyjW3ZWf12",
  "key18": "4RTcgj1wrnwr8KCUdgGLnauqZPHq33j7Xw7MvZCGB51cBPDWaeX5WMmWgZJvS1p3pewMXp4CBmE3Lp6Zud8wmx2p",
  "key19": "5sLXR4tvgeYYTcnjkGCJwLpzb6rDTQ8sR83SZh5jWSAtSdQSSrCEDcVjhzKzpt2BJsmeDv7SYXeRM4mVRnLUJe8b",
  "key20": "5CgWjh1Q8puMXCb2TWRuWiWPiBMeGtDbJcGEhuq9Ya2HVnnJiMwR7KyEyxJ27bYXojr4CFKK2V3Afmy84dfYHCyx",
  "key21": "44Z6TUALvLmWXVwkJv7s9MPB5diadpLRqTDBwRkNQPcJx1Efmta7TpvXCEggriVFfP4iZAWeUm5raW4PB8jjg8hP",
  "key22": "5LyJhVfhsbiHJZ3bBXC6wt47VyHb9DAA3fFFczP18aMq62yWAj3HvMjMdq83WzZGpEEJHHtfxtixa7m8henkGSGV",
  "key23": "5Lp8FcFQoaEKisaQ8Qq6qeMzrKXQ1rzbzEEs7AGUWPuCYvz7hKJQ6LWjU2oABw3XERbc3VhuEFtShWinc9Qr91bM",
  "key24": "pGvfMXDriXQUjmfm4QGErtQ2fCP2APDVXz3AzFn4Up3MdkukjdWHEJov89sPHA9sYh51LcWKvLftitnCuY3XE5N",
  "key25": "5dAbUjyzwsHcNb7P4K43WtjMZnBiGWKKJGXbqHTJkb4CCLEiddre1HW5MZj8TMmbw4hYt5iANoZVDnNgM84gpsBG",
  "key26": "5biYKSLZco47zizKju6rEk1WdGdjW1DqSnZKkiQ5YfK4r5hukPpa47iBfrX4yT3LL8dBvjFVF6B7Yz5rDNqgts9y",
  "key27": "96PnYxNJZHPPBfN5tUCvf6H9ZyRXnWQqnWok9tEEgv1uaJu697c7sXGSFkbL4u5HKHD3fWknNzTSiLGFwUJW7Um",
  "key28": "2eUH44GnmKigFUprPHiCJs6b2waRg2g9wVgBmVXZ1S7Q1TA9ANpJwbpZYh7ZXdREtgCJ2Sy6TN1dAPMuRnRAW9Tz",
  "key29": "4gNWGxhChAASky9soAyQETcSVQAbskTuE81SVjkGE5fCe7P6KeYKxT66UQaypVBVLaF9oQF9tm7JvtpAQFsWJ4vF",
  "key30": "3txEiCdRW3tCGDmceaA88xzwRexLUqm5XxM4sfabYJYxh1jRyb31at1mEmh2yJd6oAJnkGPcBRo759YBjKscYjLB",
  "key31": "4Uz5rwm4QTuG9CSDTs8r4ksmgpahqSzoDbVWFaEXyqSKRUt7XbgcFuQ1DbppoYxiNCHBVFhHWYi89JEWEv2X4NE8",
  "key32": "3kEpKRfAmJWxKVs7A5PvMiGZdNN2bsgt3p7312NySPu1WmGQRNkNFZrEEMf5jtWCeeY6maiP5Q84UyGpQUQ6gAhf",
  "key33": "5bicPi9bzNXTpzdgnZgWX7SFTUmBakEj8bTFiJ3FAbaZ81Vy6AT3zVyUJxPHps1uWcVFiS1E2czMoRU5sNnh2uPm",
  "key34": "2qD4vzvgqXobw7THtawArBuZRK6DHaBuDA3YdygTycstggKLLRjX5b7VaqtfBTzMmUDhFZrzQKieZk8HX5shBnn8",
  "key35": "E84Qpg45ZNGaTy9mnjoQqMzTQmhtSMRD9ND2znnEPbeHu7yaBTgLXNH8yuhvLcsZMCJVHojbkvvBBvTqHvAUA9Z",
  "key36": "4LAHQhAYSm5igf1GfWGNnGWMXrvHW7hdK6vRB6TCwLmnu4wtMZS6JkkUXfNmD1bNY3bbFZRHDvskVDQVhWAzTsmw",
  "key37": "5d7xNZm8vm6QhEN6qnSebWTiaru5yLwvJiK6eJvHWyhZmwnNFMgEAH5sqgMjjjm71QpRwR9XnYFVgu2Ed2atcywm",
  "key38": "4C9Z7BxwhhnqCimXYTgeDGNMB3ZCCH5cDX3DwkwC1BdypT41tyfawYTqsMzynqXj4EPMzcL36MXU6HehgRvzBxyn"
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

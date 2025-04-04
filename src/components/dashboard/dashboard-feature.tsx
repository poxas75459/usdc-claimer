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
    "3AqCz57FbjmqkCrEFY1zTqyZwP9aHC33SYpZpRZZPxCAGvhnuaTyEFMD8Kj7BEJSz5q38GsmXSJNM1wiUy6RydQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUGTcGR9oirjMpYPDxqM1p3b9cDmVnkeV1F9MDGQRgjgap8nNrXTqRZKakj2keqLVnmzFP7KX2bXy1CUgw5TUkR",
  "key1": "2KY9TLfrxDqFChp6PS47jx4ERn7NeXaf1xmynKxs3SJeXRm6MVJZBhNYGQ6w2V1hensYiQEP8FBGQDURhEKJvQ4m",
  "key2": "3thoSjvvcPjppeTAFcCzwp6W7hph4FadKByTNbSv5aR6Yoiwgp5b3vEjnxzJAhbSjaJNMgieiLJoX93egKcEbbP5",
  "key3": "36sh8Vw6Up9q41DZznsVcF1FRUGU9yLPevkYp2G1Nn2vF3DMcU9xJaGF5ufdXfwzfW9WfQBdB7BS9Pj68fU5H8A7",
  "key4": "jjiSzPc6DpRhJLZupSDsD5QcZKg6x7TWyoxoFaan2zfzuvMFspZaCJWQoWVcDLRZkCeyP6ARBDt3bXdJ5o8Q93b",
  "key5": "4G8FpixouSPiSUtaeLDFeocNovRSch2cbTNgTyA9hPy6r7HtBUMWh4KjFMVvvY4QwSB3pM5sdF4Ykshf7UkWrikb",
  "key6": "634jXqPqLuoSaT6HFhkB6PPt1UhCSXxRsdMKYW9cvmiCkAYk5WKjR9iwUBdajr5FQeRWPznZJSgX5PKf1fUTVcte",
  "key7": "9nazpb1R2768uchqofJujVJaPBxHwj1aim4PRnFjRt7RaGBe5oW1gVYhtJfFhbziaWFVM8QgV1rm14dcKRsWmWL",
  "key8": "ExgLCy8ideHjY9CLatsuWJa7dZJPTot721SLu1pFDwm96ydwHhYJk7P7Vzk8Wx6NDfrzFrHJG7QfFcufjF8BJwy",
  "key9": "2n8QevHkUxKTU9gfksxWTgu3TkYdH6cgjW1LuCnNoRTMRpeAfx7BRUAisvFE25tQxfo7NYFvXnv3rS5gKW62DTk3",
  "key10": "28Nh6sGHD1tgsd8TSyd8LVqHvn3Qvemy6EHQ1XhjkJzugobewsjNCCDJ7vmL9JkSnehUUzdPLsFoC9eSfD1eXXZT",
  "key11": "5zCpoZ8tBzptgbEggFcAoGmU3d2jMFdZ9hBcKjfDPBj9SQeHxwd2LTiziVbtk6iwMg98W31LsqgNkzT2uUjvPr2f",
  "key12": "AY2qmN74fdRnks1hxTgmJmYxcwAWGaTxxHJ4Wz3RjXkvpKsDEFxXsGVBpnapvnjnetLy37Sw3dWTJD5cGh8ur65",
  "key13": "3Fd9JPtE4mWsvcYhc68z6QECK5Lj9TcZqVTcpkREDgXFAHrLdU9mnEc5iyFV9ddQoUdPD9oDbGWuMop7wNPjcMru",
  "key14": "Zdg53Fdstwt4q6Yk16B1beq9RYfEZoTvWCxw11gB1dpg9Lk2Tutuee9h245R1xfoQmaBhJi6aGH8EmFGVGDvwPN",
  "key15": "2DuWMPb9QeTs3PRP7nKMhWxvkPWPp11HgajMW6p1X9LBe6vT7p8qoxzLFD5Ua5uoLufFdyn8GzyVcCXiDuHKp2oZ",
  "key16": "5bZTVERTebJYvkPzTZhDSQW36DHgi9yT3WHp6gfcW3xe7FyxPoZy3JWATs7ogNnZ8KVGYzW7FeMboq2gccWxHEmw",
  "key17": "DKP9x5p24C6withqK94rc9DgHtDbYxv3GSvrW2YtNHmmQGRJvPxEgMquDLzjKS3K4gS26UcxDHKshoJzUtGt5QC",
  "key18": "86Yq2VUo8wYjRp5KYjrqcYWP8jdkjG6PLXdjBSJ3AGkDM8d6tB4Jb5ce3yy5kLtYb7feYvSmgSbrq58C3TfT3m5",
  "key19": "5uaRUYQhHmWJSJVNkKYTisYaQv7vG61rvHAxMemoFFq81HAyCDhyEVqefVebMWF2PvpMnvkcVp8G1DB5Ln2kCvYR",
  "key20": "2LWmH4b1fqpAjsdydtNnHipS4iVi37sMwTUunL9294QokAKU7ajg6czvq5dzGizuv1FVCvR9vuA4PS6Lpx4kr74c",
  "key21": "SX2NoxXSHqo37bbhjyCkotPxmK7h6scN2oDKYapfuCVDjfBpbW7Wmqn1yEFBdWaXyC2jW7ftpjq3kbdaoaZSEEz",
  "key22": "vcUWyNxV972Sa7EZiHMX6Un6j126ob7ZKEv75CEyUKecee6ef2qTcxL2RhJU5wg2rghYg7rQ9LMhxKTGJtKGxpw",
  "key23": "58wdGLvEfnuzhdrP4e9ikZE57NzZqKJR4FeggeR5nuxZEaG8KxvULN8fpTmjoG68EN3qrJH1cHA6f2rWtyqEGzJw",
  "key24": "2EsBNMJFsmBQXkmckfvwHBieAjpTT9F3Tf2qkcm8U6BVrm9ADzfc9L6Nh7thKDLUnyXskqqvRuhTuSaCMdxefqyG",
  "key25": "oofxeLRLZ7Y6wSktx27Ff1kxTidC7jsZMtG4xm5sKe62M9cRZYUpBQEDgFEPYGyxx1HBJrZDo8DKkUQa8y95ERM",
  "key26": "2UC9nGQdpBCfm4KQqa6XqBLbjr931Rh8vnQdscJ1s91hAmz1R7WgGb1gC8urBAsSjUA2U3w6rCgynD63Q32M5THq",
  "key27": "2RxBRNYGgftCNrehcGqcgHim3tcHezuzpyqgQ4MRoWaTfFx6iD4r8p6JsJ8n3XngEKzeqpqwfb4VJitcaqXLaiHD",
  "key28": "4kMpqy4zY71X5Q8Kgj2ZAF9UPwb7qK63yPjdfPfsKnKaXwVvaZo5UosS8jChSjB1cYyrnS8dZ6xvJfHm3wDZ917X",
  "key29": "27bWFoKA16WEZHVLXPhZmtaTDJrerZd8PUKTUKoBnC4fW4aEkEyuK9Co9bQRy9bcEsmU1kwapDGBCUpcEqYjai6b",
  "key30": "3CJ48Jp6jd5LqEoNKZonVy5bYA728pJaF8N4JSSWU6BySxBWr77UJztXh3XCrgYCH8eq1k3MF8yBj5LwsZCZgcwf",
  "key31": "uRVqg8te3PxN4jHnpD7nSgovcZpULP2HNgMCbuGkqYjg3orFbpApYQYPiSQaDadQcDbrNLiLm1TW7SmMXEEw4EB",
  "key32": "2Vmom89gyefPGjQQfkQPRxZ1h5TJ2wEipyLqtHGqGWvNp5vKCHebmTjHKvKLBLZaVK9rmUkHqEDxft1yKRg2MUWd",
  "key33": "2ui3fSogsCsS2exMQWmFUdSyUkeD45pYVQsdMqpZwHdJLXd2iwqZ4u8KZpWfdMSxg92kryT7JeVbX74n9NdaN7dg",
  "key34": "2FBzKHTUbv8vbbb9dAjniwRQ171168P42Zp9MvDMugpuGGFpmS2MuJpE4NrdyabhRgKKEYf9B5u8ct2fYW3MpMij",
  "key35": "s4UxEqXkt8QgXvjTah6Dza2Bxtj5WTaHu2expXNC9wDrMYYqToXpRK6z4SAuk8nqHfTX5UtQJmxcbAuxdZ71ECg",
  "key36": "59p8xUf3jEnfoeh22zcfe9TuzQKBRw8nojFHh12NYLF6w8FVMvUd719D7QhVnYy3yAbCcQNoErmDvFTk3tuXwjPu",
  "key37": "5fYZ4vQM7tCNLjseJJjhofMrYcP6vbydYaQpU1DC1CNfMphey2TZS5UCowJ3PTo44hedUysoYNfsjhDqjrgwAAbf",
  "key38": "4mRUb7PQFcijhbWhNuBBcANbR6v1tSUuf9KeXuGBnrTjWqyN6DM5zQzXky8aL6bLxFE8hovLoyQhi8jNSJh9JrTs",
  "key39": "2X7V2EumLC1pLJ2dFvVxzVLZc9trT2HHUxGA4PejYofT2RrDT5jt5N4jxsCDDmVSFDkYqLrgyVf5PapBpYXdvxHz",
  "key40": "5xHeodNjSvMtDxfKXNG16xy6RDpDVHuBnA3mtN8rHo7NGSpHdLVQXet6N9Qrt5R5tLsoNPpyCdD7MtHZnUbjGGrw",
  "key41": "g3dWN5pEm6jaPU2fsj2f4gJmzRxSJ7WDgm7E8McGyceWzUMjsbgF8QoHZKL2e4wqrYcu8om1sQ5AevTjPSjcpPM",
  "key42": "LEbCWUzQoyGy2Te8dDSxDabxvU1GAuuYfNE1VGasQtc5vP4ZVLTXMSdf1HtaUzkRwSFMEnchXzRKVC5KDMxA164",
  "key43": "2sWgFQrPj9Q2mc1eedVPnKrb7d6sqdAiGAUPa571ogYNZ8i5QsHBXriAiXLfU8NfnboVDZp9Virfyzr9eJpzccix",
  "key44": "3XugdyzEQ7P1HK1VXWSfQamd1dJ4A4NrBTkxC3hMQT5cF9J7tz73BhD8Ywym2CZtEGRgFQiXve4L1YBSgk3ehRDd",
  "key45": "263WViFBpudAYfHYrXfUoVxqw7WTM1MYdi82e5CiMokSLzHrxqqqGJiH99RWqbCqcEBfePobx88ZK3H8QzRxVgf8"
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

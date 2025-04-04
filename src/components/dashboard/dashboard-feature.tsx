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
    "5kQboe1ehx8T5F68V4UDeSfvAPDK3YPmJZgsz3dDt3PsYh6Etiz1YdHRwvSbTCBNvFzryJAfYCFGkEyg4XQZC2V6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5akBAT1N695J3qpivXNS5RRrZiEnt6WZ1u9u1Qb1C1wzPTGEd57cs6qqDXMoKb2ivpms5tX8iK6ev4zUw22vuPYS",
  "key1": "4dvAZdW62eeCxmKfHE4c1wcRGzSC3whU8HeXyw1UqT1uwEdgb7sLYsUA8Q6rtiR2tvfJ7FpyomuwS4YLKvG5KRFh",
  "key2": "2XFhNxwb8inbx5U5z4HT1pgbF2WaTPo6NemgkYiFAxcP8DznbQnTowFXx5D1dAdT7FBgQxyNQJnCHbNAdfyf43z8",
  "key3": "2adxFrvGavTFusdMPEvuTbSfg8sVtvsNHy9Qw3QeWeCRj53mfVHUjMXzjBz9Zp5n4RoKgKGd5gp8J8UXVY1ZRn8A",
  "key4": "4HUfdtiUADW8yVZMWCVrjRyDThF8xaf5W2BPckWX8dURrVonRoNwy6XvsGJsdQgKKmZLPu4RtZDoipsYzpAZqjnH",
  "key5": "4894bKdF1TAdM3z72c2ffspGwVU8TGdUyQzjeYrqR6voUWMuZZf1DcTnJc6PtMiiPAVJadbwQdhJ6e9pGFuepZJi",
  "key6": "3DX5fBJXCWiK1KpVcNB6ijFKLwvjGsUqxhjvnsD2rfgSufPkdVg7DPsGNhjSWwmVgkFueaDCcrRngn78NPdzRu92",
  "key7": "415ksPDEksJhaabmu2fN5PT3GanX1r9How7hqq3rp3DvfBk6tKLhpNfmR8Rox3crDdDE6CHccvf92eQ1UNJKBAdC",
  "key8": "5XpZ3TY2n7GEeVeSRd4n8kToY4pTsQtk93XJHMgJQaUiXgxgRzjGUScpSzLmpJYorx2aZKW5EQeY5aNbimi4pGnT",
  "key9": "owU2h61jDRDwT3APm7ZW9Fykq7hDrbA1En6dFXScWTMutF4ifzRNYAKxpWnpTanuaawvdTKabntHe9d1t4qnJB8",
  "key10": "5rBN5dVyr7aC1iaWDYhPgnVUJHmhKqKHMTk2D5TdVKV9GC4b2NB8GadFSqSCbLpZedE6aeXazH1NffpZQR8LUt1e",
  "key11": "B3NqM4JSohnbkzvf4ziJp7EuGXgGuW36pJFXvuMPsYD7cF9GuCysjncVnYRmpWm7e338gUmuFMmKfiKMw82SUPr",
  "key12": "5ADCHBanZJwdYsGsCMWnRpFiz2hKfhbwwVTT6SPfrobfMnNPsuhY9abNU8B6pGs5GdiNieUoNqU1wRhvXAXsb7C6",
  "key13": "53q1GJFHDNkmzT5VfXbU76xsm8ShWxSSqJ5waMWH3ToxJoW4Ha7K4yxEk2DNRPwN7bxCZphEJWMc7T6oVPCqLbdu",
  "key14": "3dkFJ558zuFw7jLYYcz6w36U5Htk57MKN1K5oqM8KXrh5M546w6WnVgD8gE83fHK86f5gYhJpkBUQeht1aZE8QGD",
  "key15": "ZCEyREb3tnDQmKRAwv2i27MaMtFcV7qkr9nsfZe5SVFeSfbXBnsWDfFmNociPGe469Zz1mDqXKG7ENxEpz9wUd7",
  "key16": "ZdUqRGjRH4vZDRXxgvHjagj444Yy8MZCGSPbekKaZZjUR77ye7NP4WQXTf6EVbb8LE9E48aKsEkJzESF4nzo45C",
  "key17": "2pWHedhxndH18ixJG4f7DpECs5d7BuDLescBP19fRvor3phjuXjuVpELwGqDpg9NCoFNW1zNNhZnT6xELqCgJgFV",
  "key18": "HjXAoLKGLoCbyaM7xDpwb5ZnRaxyFFVkpKzPSU7yZd4ExGexUmTYNrvseJiFi4tZHQoqdFZgms6uNNrG4cTsMVM",
  "key19": "4hPqJMaXbr5oBe4udtKgpBatrJ8A6WFC7MFaDnnLtDfsZhvJoF1yaAxa1P4z4Tm4cice8Fz5etyUJ1VfmkUQBD5A",
  "key20": "3JJFiHRVCYS6nAEocJWn1vugWVV6VoU6hPjWJ1geD74JA21maxxoPs3DUjQpcAfWWB1DpmY3YiuwJwErYaM9C6PR",
  "key21": "2GMik9Uq79SpWY44677n8AbgzWtgXGk3HzV2KqPgmqoxU9TkHHBKvreoQVjcc8DzR8dffGjto5KhBdiZYqPC2sCf",
  "key22": "2iYsmQ4FkyQBfEHD3BLXKJSTYs9uapK64buVWmfnwKhariXCeVX598q3XRQyov7QXWFjUTDtnxZxV7MGy5EkL28i",
  "key23": "4uMu2rN9WTqe5LeEvWFPKVo3yZ2xFYX1198w2auWecYy541QNvhrr9x4QN3pWqnwSKsmWHPkXYUrDR3toF5MqXmH",
  "key24": "7yJzuCvWvsA4bUrvTdKVBtAumtzgnfk1UKcFGtvfWkzdEyd4Xd3fKuzo8HMiJYKVYz4FHSF6wQhv3P2VpKF1ic5",
  "key25": "KKa4dB5zet9DCBoHwe3TDtfSwhv3HxT1TBuFKLNYh5dzEzYJGr2XkJ8HDrrwcRsy8VpXXVD5MrVkzPHunTCLAbS",
  "key26": "64C9rbdKu3avyaUmzDmntKfvzRwvk1w6pyDsTX5xFpidewEs1kRxXhqSECtcnPsxL1ZZLpKRGKNoMS28qZcTBtJr",
  "key27": "4Kc52JPah8HfxnB58igiy15Q1DSb7ZXoLVQ7YcKZzsHV3uhWox756T6a8Bagajm6VdUXJegA9CKyshiB8gt5wBms",
  "key28": "3DzYStQ7kpu2zimYo6qwdPy4w5ns6b14PvUtcXYn8JWBNZXFuzNYYdvqjJHcE7fTgaXnaf28u5iC574YaYmqSgqD",
  "key29": "3LPkbgrxC3M4qkLuxYirJfx1gNLxG31dhk18Zn5U95NZ565T3E1xyCwAyusSntqK9WFqNSZsD41ZEp3DXFEFYTGA",
  "key30": "3voWPwSaubHk4bv4zbqZb6KAYXNHKWujP8MLs8L7x3F88HiCH2QLauQqsfi8HhMKHv7MAjHbfmSFUCPwxzvALvVA",
  "key31": "5CK7qUEEYHA3dMqwnP5F8xjAfXKTwtmnUMUr6yEhwp2JZrkptwAjL6iUZK8JrYyQWVTKs8sUL3XsBdDbgRNkfJEg",
  "key32": "61d2kA8nmmPvUnVDdU29J8k3ZHwVRWz9bfYPhZiLTcHxiBA1ieVCfVeFvjk8iUHZACzPRVtUya9jNtrdLP5rfZtL",
  "key33": "2K2NQR5cTbPYdZpx87XbU4nqmTBLsjmKY5RMfJkecDmiu9vucpBeEnBPH3QdFNTL9fLdmJ9MefBgoCkjJCZL9my5",
  "key34": "GEdJBYTrZyGsm1Q64xEYr6sErQjcvu2Sp7hmY6PNUP3vLA52DLyiW2E55VTwuxCEyoU3TAesrgsSUHxw2vd16oV",
  "key35": "2igS4vyhrfbJidrrJ3U7zToEq26PzM1o5cNDct44urZosdpemRJ6z9qSoTCYJXQq3ZThc6bHeupiaFhsTZ8Eo4hG",
  "key36": "5sQgzEvD3CX5YsirS5jXpzH2jFwaFfEstGqt69a98cQJeGKeTpEgord6JnvznpcVdU8m5HGv6JRtWnog4sF67cwR",
  "key37": "3nZ4wrXgLsSfEEZf3iCcixjLEV7eFMxEm357JFizmH3M5vxquYMArBnRoWGs6tf2zsLBpVQwKvjoF3Wp8YTjQX34",
  "key38": "vNV5qvyxMavfqZuGxhu4vypb8LgHs47FzzHvBVtEjK6ouxyW2MjwMTTTaYyHp1iFqVQezV2Fh3HtyYrGCvxi8Jj",
  "key39": "4aou1rA8gSwK2spBR8tU9ovLkCKg9NNiU7go2pyjVnFzaQt4ShbiaZ338zreaxCq943kCepkXdFN5G7do7PX2npQ",
  "key40": "86zE3SoewSfPo1Ama8YdyEetqpcZBQwvDuRD2vEJaee7KV2uiE4RdbwwFpFnthPyyD55mZ8pSqVn9Zb54tjfMPQ",
  "key41": "3u1fdzRTCGEiKn6DCKqRxy2nQ693fpDw16AEVPhJgKcJ9eyWSBQaqHtbDa1RA4CMrLNFaQMKVCbXQdGs3Hd3FoWM",
  "key42": "29gj3pYzWBn4CWgAbGqzAQKT9fN3ax69kZ3opDpk3k3pZE73PGVomiZerrubbfSn183eGSBwhcRzYfzcgzcRo4Qx",
  "key43": "5ksF6Edmbb2Y75USNYsrxNJ5jezvrhwEXG6hPz2UrvGxRFCmjq4EfoNkQMziFhJv6D5UNa2vzv73ZHmjbswsfwQh",
  "key44": "3kYiKZaHduXtE43qVmSKw8LQoyWw1oSDq5z2BvRnnv7T96uyuNVjjgDF2UJcfGPnW5QUgPUa4fk5hkp5MPQtBLgw",
  "key45": "2AFqD53mqAjrXjSwm1M4o2xnKCx7x8pKouJkWLbad7rnamMHPiQPNM4SLbCQakcR8nFJkDW773WtgHXFyjQybNs2",
  "key46": "5ynwfepVukZQ8VVfjg9XdB1fFNNco8RWzHiTMHC7wcvrYDrCGc3bQRRKjdVz68ytZWksnwqRM6yJrzhQcJpbU6LZ",
  "key47": "2qU7DCAR4y2qjSpqLyoaFn3oRBtALrpa9dVANdaRrKUqQ1bf19cJiVnUsoLgYMSzH9UAHE1gf7b1XnSLjGaTgMhm",
  "key48": "4bqdJ47oB7auavHcFMpc5AsCew7rqRqnedAjcZYs9dmrzMqDJQeeC7kgz36EkdZCJfjvd9nvqWeE5aTYaFf8nYWa"
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

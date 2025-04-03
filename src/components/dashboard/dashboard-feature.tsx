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
    "En8Xo4CCUz3AAsV78HdncTAbz9EMCWF29k1VfQMRXtXTZ3EuMpFLM7jLLb3PaaxAfxzoSGwQoaa5ufXNquASzrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHF2LTRJoHXJjcmuFnDHTSMm3jM5Wotm7LfaeRG9bcMa2ePJ6YBwcVvyxmrWcFNT9EpsvARaeE19dpZWzkfTbSn",
  "key1": "3v7mmMsDhfvtqpNtyvntPCNLkREDdTWddvk5QtZ9PhvSip6JPhZv79NHniFYXaSir6ixFAFJxN27mbwqWEVeZxkL",
  "key2": "2xwew9VcKoMzQcFMKbNinWGaZsLTchbB2WXBtnk56Ga3XN3AfFgbSDen8Pvxx1s35VjmcXbuDxwswc41fVGt1gJH",
  "key3": "3UwREFKeBZaubymUeMN3weXLp1KiEo6QGASGjR7PnLSX2VAKGnCHpQn2cAMGMq2GLaYo1AtuNk55DDxbY2Gw4cGn",
  "key4": "2e4i6ZcDSzXPa8VkqpXiEBrYk7GaWapQn69FCh63WXGzvLUf8MHovNom22YMVLGVgMHXEUSzpJ4JGH6TdhG6FdJH",
  "key5": "2LR663aHK4spwY2NNYqrQDAEpqtmi7p9aN1G3n7BVGbT12AieyUHGe76VzuJescohg9iCyDdp8j9H5Kb9cjXEcN5",
  "key6": "Bp8cackzSmZBdnZQDqKijf6tWLySpH1wxcrSAhvaFELLVa56zYjuNo1KhWSU2828FLyqSS2fvWTt2QAiof2kBfh",
  "key7": "4P3iEup5jjcX9HdX2oYjhwuLrRQKB3ifXGAXrqR2QeVv1iWTvibxyhc3ZkwKrTt58oRcAD1gQ2SU4P5E9riy33S8",
  "key8": "5PJrDKmj9jWsvTdNwTRC4MmhDprCKcpRdtS1eaApb3iqhrQNQSEQ4HFS9WU8MPfS8DpmWeruzytJyuAUc6pB6wFN",
  "key9": "5hNzYomJeDEWwK2rURBXNeGLz25N4Q8GAr3rjDHtp8rNc6qT4M7JaUP8Hif1tvHx66Kx6UMuL5GnoMQPYWvNqad7",
  "key10": "2ru7x7VRTH1ce2FSx34pRAsWz7dZ6moQ1jhVE4btx7xGZE8zztG2mf6XyyEn4nTr7s6gsTfrbX3uUVPMtpuBmdVq",
  "key11": "gmPmm87fmzsNbSW1ara2DZiG3gnzdc3LHTAtuaVnLwDSpsUjo4wRCnEM2sVRsyDXTKeZCjfPB3jYNVZWc6gggnC",
  "key12": "3iPXsKZi7VABgycgDWkEqidd4w1oVu2SAkPTJyDQWQX5pXF3xatngeDCCZZVWP19wuwfVYasJshJPhUexkmNtzdV",
  "key13": "5Q7rSh8yh6Nv4t8pLrRoWhPeTUcrhoWbUShAcxaBtbvUmythNqkgH4NfeCqy556axm5xwp8y3tRb1AVDZFyyRgnK",
  "key14": "5RHtndmoPc9jDQxzAzL1sBMavVSgLMx22XRRfc1LZYRedeaZrfuxvukRduV6PyXXaF9kQDmdBL5wguUSTcftwafs",
  "key15": "WHU4Ajg9onkvA7DAYwixNXJSXJt8iYieBxPyVpowaLN9PiF4fGkNaaacBLE2hNMvY3YXvN33KHbmdUXpiVnpbA5",
  "key16": "3jBgysb3E6hbLhgLdqqCBQQTvwg7veezpA9bbQfpmKozjmPB1XDGGFBpAWsDm1j5e4CdrN9m9RYkLJactS137dqv",
  "key17": "2qD89tLUrdiaJ8ZU62EsQU7BYgEsGtZJx1s6mGjTjkKhHAnJwxbtS5hWjByxubpnoWpeSAGzama9AAhs49S7RnVo",
  "key18": "2waAZHyCn8ggev78ysz5uziH7RSyZYmPtEZzrEzQ44rypcstYDbsgWqQxo8wqpXGJcqMe2JgpSh3TpHMoQpjdGww",
  "key19": "2cTPegmts1DxrL4WNZMQr1ugN44frBJJWACuyQXutWYyHNsyhMmYt2bE4z4teWcbZeGtaXqhvvMTqbRospf2HwCa",
  "key20": "3tdmAAN9WgDeMbYQpzXm2Y9azMxgbAC3C2gGMtoLKbDV7RcbKtrejRNP7skZFLD91SSNGwcUmJQL2AWDnKHLZkGh",
  "key21": "3Cm5D6bEneGmxj5wyF4Ad4Cuhx9HqkGXxTd8DEELDVrPetmKuBzMhPjWrsX6FVGBxbqD8PhuLq4RbbdhWpMzDK6y",
  "key22": "4ZXu4PRKEEypDVAfQsZuULP7aEMhyzczhnhTxJpMbezJrKiCMqKYTYxnM61mZDARvZigp96QAKEugvabSttxpSPu",
  "key23": "4Hdi3tU6w4ivaFdjbNTAnuzg9phB353gPY427ja5VSkbTHSvGAjT7TkthgytPrfS9Ne1aRdnpfunnURF5KjNhpZV",
  "key24": "27gVrYbib8he1xpsLmh4ZxhsBj9uMhF4Wg6HuYjkN5uKLB47Q5sDQTY4vyxBggPdCuH4N3dQKcfkkEswFozuug9L",
  "key25": "4kYZ64tioU2jb5w38GmWSzfSsV7seSCAvzXLE1Ybahgi4Fc8xFnKMLucdYtsJbmyb4KQ24KyQB9AtaZyhqaFT8dn",
  "key26": "4YfJKRQxEXPegZkTob77arggYMK8rcdeuYfQYF6KrWnfnhfknE7bGGGKFMLuo1JBRyNnfYyNEJ8p5GDNmgaPdb84",
  "key27": "2ajhaFfcQb3Ky4VBXH4HRXwtxuhTNghLsBRDWnWY4FHxj6ytEZRQNEcdGbSdzdtPEdjU4XoDB28CRwkQuGyL5bHW",
  "key28": "4uJo4Fm4vufUFXQLQC3jmCKbf5XzTkGRKFiWbtYDfjHWMU8NRmrH4Dca14D5theZGgGRHZzUAcM45y2BZYzwKz7i",
  "key29": "3BAx5QiTfAqEosptJ2LgRLgfSLMTPqCn67manhvMUKnCsXA4i5JLuVbx2iYeAUQ2MGMVasqQaTc1bZsBWNCjmZg1",
  "key30": "3pd7icfhNZsqE8NHE3Q98YxXw6YxDXk4er1i5CJwuKXcLijLMEEAGBidiUXkmJU51UPHWGsbw1yzSxf8EWZpYWkh",
  "key31": "2vwEvU7JajHBJvqnvweZ2nEeXQ9YXaxwMytuXvSFX8zKKD6XwVCzR3XnS8XEyNMGCNEGyfcWKkA9mjBQi2Du1dsY",
  "key32": "2zRydTqT3AvKHn4cti3fPMie2sEpG3zHRUZWS4YpPTWcUWqZhf1otxwAsUnE3DTq74LMDJmEknxGr8CzFGjQasd2",
  "key33": "4QSiqso9U4eW43R4zgrr2fEEQsqkG5WH17pq5oWKq3D4biNd4ah5frUXvuF9YPaCmuXbMj3wT9Tkb4LjdE4mnN2",
  "key34": "4YAPw7Upvy6HDTk2MK6x7hjvVBz2R7jQSpZTszdcNsDBKGiNJKvgDBdjgsg4zL2GJMWBxungs2fSog7RKYffFkCL",
  "key35": "2fLjSei4nztugh91Ms3eytY6R6HAiqo9LVs9QWpSK6K9uDqkQj3s2xDiLNaWzEDZpUrSXE5pch7FWgYrGonkR3cZ",
  "key36": "3ZSbKua9npkuFkXXGwwer19hCcRgdxKrJpQn85xZFSNU5AHkwNngBMV3oPHVZqoEb5jYzwc61Acrok6rQ5vgDsBC",
  "key37": "3cL47gxuun9TFKHihFdL9CVfMZ5Uibk9VKWiw1tr5ZTfdESjLHAdyUP997DaaFsTiBDPSopZfcjzywSnk7RQyMrj",
  "key38": "5kBvcnNkCcyrkrdRJfkcijrj6xT2hdjkzuk1N9oxaVafSZQ4iA5a2kCgyEXBbSa9DHHiP9zniaMRGkR8HYLWzNFk",
  "key39": "3nwgJT2Qrum3UXDwBJoawTe5EYUJTk5kTsqeW6YT1ag5G3e6UhtKwAeXfi6q21kgadpTQi5uY5D4urS3fv6tcoz3",
  "key40": "25bkUJfDLUtLms93GjcgqJwEt3CzawbczXm3qGXX7ZVu1Z1EDJ72FhTBmJYTomKtX9m32wgkprCS7DjkhbgABhs9",
  "key41": "4f6j8n6zCBbDWBi8vCcxREvWuX4BNn3M7gzhuRaSMkKZiucZAXaes43BQHrRaB81HU92RUq4NnvyA7Ddi5tc7RyF",
  "key42": "oEAtqaVpoVKGWSpNfsdfoHTGaRPPekzR2acLtJR7G4TBfgbWstPeKBTE9iXk2D2VyujtqXR366cNfod3osy527r",
  "key43": "47V4rb995hwvoBvFPwhqaMG5bKNeAoCtgD5HFnTxrmFp14gKpxHuL9vrpMrEuBpB24nELocx81TmCYp67HszQD4y"
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

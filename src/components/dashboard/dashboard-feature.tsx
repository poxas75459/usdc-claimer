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
    "2Hhis3DGNWJBRiJZSNC1ZVjh2sVSMANfmBc5QWhPHihazsSdPAStjVdouPpn9iqKcyNj1dg2K5Ly7jN7SBZr8nxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hreNnhXCNeoDKd1sRJbnoESuCJ6TP3z7gncX8GGGxxHadLZrVx9KNJ5DshijYpFmMDV7P5LoKXXKVMyqP8WvBie",
  "key1": "3mhPk2jVhGKykN7iMMVadKCUBkiCC57oQ2bz8qdiF57KvDehMQuVjexcvWxCMxpiFoJZgL7x9zCw78xHgonZFtCJ",
  "key2": "2GohfSiTZ9yQ4MhJuPNXo3QpCLRsGx2WoTRs8wCq2HmnaYYbktfMTnovG16nwcaGa89KX3bFs9LcYXYatmDWeuZa",
  "key3": "2g7gYVryZ5ZECDbx6BJVfvs5aP8LCQ92K5q1LJhWekbJcssuhFywPoYkfJx1YAnScVCB55sVpXbHyhsryV5CUnF3",
  "key4": "4nMDriTwiPb9BBjocsax4cJjXsXyjuJK6Tw2eMvd1tdTZUFKSjL1dJwkrZ6rtLH2DrjXWJ145Xtu8xBEr41xageL",
  "key5": "5nZsFEoMMMpTkEJCwqP2KgyfQ8NyPPgo2ma5LjqC6Ycx2Si5nrzLxN6jyWVo8xY2QoRySNNmkjVuA1L14JU8ByoQ",
  "key6": "2v8JHvRknjAzZb6MCacB5vA1KC8ZRWsw1AViBrgc8xu4CC5v7sQEatwCbDkYRiJ2HcSNB521eZ6E1XKpypkqpvCX",
  "key7": "3ZuPD5m3mfEfwGHvug8c1fxqKvDUTZvK7EFiwetqgbmGcaDg11BiGTRdRGdmpTG5LFRyLvXBTCuJGFZqvgXgW5fv",
  "key8": "3ZabRRQ1P5H1XEJ5gmMTU6qqJ5SdCeHz7EfxuGu2vZ38Z6BnZ9Zog3MdFhUmMdr7neLin8GKQUsEe25wWBXmnzxR",
  "key9": "dnKMTDWHok8JD6tvtN6B1vGQRdm14mGbNmRBUt9seE5G5xrRjBfZfqAW95hxEKGbz5qEemfqbr3sTQHevt8LrMZ",
  "key10": "3mL4hvWr74zroeHv5jSm1ecNz1egFGRvFq8hKnxMjtnXAZCdJJtLopEr4uzbJ2rqvvEj8zBhrxENgATEFMqGvbP4",
  "key11": "4q7KdvefxrB3PEorgtXgJqTrsndu4xEFHRumqwDagxytn3H41iZmSB6QjUtCccnLVyyFDvHsCy1aYBghouFkVm2M",
  "key12": "AQ56Lyc7687BWFoSY5JkhyxsPYaeRkWPNmSPJwZjrNajghdT919LHdqEPw3L3Z7uPCzWaf5tr5hiwh2HFD6wi7f",
  "key13": "2fwcHhfL19zbsvRthDubdbBiNgabApiwCFJAFbyUiku39KnKk98WShEEuonUvbGdAX8qFGFZpxywZWeJCdUmghqi",
  "key14": "5xTLQQMKXW1MC1mZ7gQta2fNyUmK1BxpecE7MuTBJMnp4g2d6rspjdos4MjceMvETPdhJnudsbBTekNzSSSshhxG",
  "key15": "QQvwJdaZ7BUQ5obMnCgf6h2gAwXhGipLGzJvv1rdvjupUcsUMAqDS2d17MZyyr1w7vLMfLcR9GQPYcXp8yDJzM8",
  "key16": "4WFUQ3n2RE9dUkJh5H9u7bhDHtsqRqxSuJL5ydGSDQY6anxmpn4D5PtyerRrGHUxs3vazizKQ2mbxuPSzwKFyRoo",
  "key17": "5XjgQ6uj14wMGq7nZehuTWBhuafDtwZLTFyRM7qC6CGs5NuiSrcAjnnUyCoNRZyQw1bfRCi91frtbFJreRx31yv1",
  "key18": "eMSPmFPrU4Brfdr2SG1CWjPzq2Bh4nokhVWySUGxQuK3JCQUkrqRe4QyhXRqgBrgk2fuvbJ4ZxCPbqtbDqs35YF",
  "key19": "5Qn3WXHT474qLQWw45UE94mBDwWKm2n5ZF8bQr4V8TGdevyJDkArcvSjsCzAgnNARvb5ZTEniSVtGivdMWheV1bn",
  "key20": "3RrcqCACuK8SWiM2ntyDeRAoVtMZm1YvXFuPHeJ1yPkhSoRsA6zpdDGT9MkD7iySh8D9uBp4b7beA5gnL61FGr2P",
  "key21": "gTEwknJaoTKSnLcaVhhyrWBANoCC7W6XJ1h9oQSsYzAWFJscVzrj7dKaTLgVBgK7NW7cvYFVDi8rPqMGQEf4K7B",
  "key22": "4e2mXg3GN4oYmBSfNaFHBz7VGSZGJaXmd5CgjpkiJdCznUvvRwqgiNFMqU5aKNgqE69fBme3bVGrJa3G63zfNw5U",
  "key23": "4gzQMJYoh9NCEey7FVjQ4yBDeXHWbvE9woTPsH6hxZzUj5dG3xnsq1x1VD7qnQrorKrbYt7ZL4psM8qVQbKAnaeP",
  "key24": "5uCSzq4H87Rm9ZxSfseGaR48AD95oYQKZbF7MntAK8iDosU7SBbqYQ7VPrJegBFemmh7DmNSAmLBPfsxygv6RqqS",
  "key25": "4jzw8c56jSwVyaXfa6wtPkBAUYGb4VCcV4Cynyd5cG3HadNJnBvJcsJmBLWpsDmQoG1khwpkt8sJM4GkBvZjnAtb",
  "key26": "2Rfoe4eoxahJcKXYEvDj7eyXbKszzQuXKxpTaCyf4Bipxd3pseegUSuibYc7kYrKWqbqgrrCbpCVCBmJ79YjJV2n",
  "key27": "41XDYMvBeJ5g4inzfY2RKVKzHZJPU3HkBybKWJbcneMoc18ayj9S5jxaLd12AHKrd6r5DrAJkYqZDQL1d62Z91cq",
  "key28": "2QQMSN9GFumr8myKfreyiVZA68Jj1Hz1JNaM44Ga4AFyrLxD9tWhGevjR7TVAsGV29NBtP7o4HhEMmMsrYjb69TQ",
  "key29": "5H2wo8BYwYGQEidNK9w5LNyeoQ2aFPsEn6aibVYx9zBpCAAcT7795znJAAx1w5uqgyGYKH21iwCWEvPXfrK7BQqt",
  "key30": "8cjByJ21yMLdiN9NZZDGDqg7anmsEg5kHvc1G2HFFvRdEBmAmNGjegcBiGv3TQgNMEqWMG7BkDe1wcz5wdq3fjS",
  "key31": "49gZnApCydX7EnT36u26cUnCc81zYkeusKcKLwRWd1LX5JJaZBrG7rmV39EwyEWV4zNKmVG5tFS8gLQ69nHsqevS",
  "key32": "46c49LAWiFkKMigo2dMtZUg9JhsmCseagH4P3dEGe5HuAWV5ZMJBTaHfZ1AQwoZzXFpxKXPJGG8AZD8gyoEQ58dU",
  "key33": "1gb2jTrRjqMAmrg4j55RZc9dfDGAm8ZozC6shNzozzQ3cDtkAxhQg6C8etArmi3kXRMVq3oUw3MQQ9cRBeKt2GM",
  "key34": "4RRGHNaDgbA1ZyzjqWg6sjwd4q2TSwsYFJqj4p2u2mYZH3NkzNZGKX9mMmtoMCtPTsnvZLx1VBH2m16Brb7qNypu",
  "key35": "4LKmuUpu3kopKi9mFdP2jyVFvaueysPJb8k3DKvVtSY5F8jaAiRr1b3ZJUSne5MdsExGhdmCPcR4vZ4Yc3idJxfe",
  "key36": "2o3dCuNDjg72ZvzXFdsrSrdSDcbTQWkwuxRzZkQreEBy1h2fZ6uDxKhQU5CWvpLjhLhWBywnhX7CqCi94W4zbkpR",
  "key37": "5mqPEftZf5cUiGUkjCAnicKNMo7V8ejR5kQbcsJWGmxd4et2D6VrirYnsFyirQtqpEwPQkgaeVNQPAGdcVVnWFzU",
  "key38": "3ayNqfDetpWPWGyCbVvDFQm6xYkB781JAVLkwM8UtkzMXDw1dwXhqCvg1rrVQyJYAcFmUGKrrU7FZebyozMVbeb",
  "key39": "657ygmMPkb6RDHEK56AD7G1iHKRzi5MsgmVAwcseyUeYNkVijRVaq2VXAPa7s7eYTkJvwUpiRzvBNv4f8U19C47K",
  "key40": "4FFYQXJG45Y5ukarWhcRWfcTsnezoDJHPCqLTFSBJzAacNsJkqdDAWdc9B4XMo77A2Pg1YrZHAvgNzGayJZhf9fq",
  "key41": "2siWeNdPkfpGaRv2V5aqwQi7LgWFx3mm8zDRFrzquWyR2MiDWjTPcBeWuxrJaLDEN7XEhcrq4iXU9SFquWHDQkQx",
  "key42": "26fSD1XW9TjKX5sHsyEs5QHmNQEU4kzqe4yxnQPL3Xf7XZqVpXKgjqQH2tBLMzhmEEJB9tL8jnHjKdGynt2JnD7w"
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

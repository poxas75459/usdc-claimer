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
    "jdhzY92goLidEimusByGcQFaHxfswuerSaGh4Jr6ZdbYqmzNrK5xnZpzwcDKTvMTLiy7wEgrpTwb59t4F365UyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bCcMwLxH1u1PdSZbwFZrRd4iN5yN5TALztA9MgYKw7JKH9CoCp3DhqHwBxuRhobfemTJJ3BsGjuiLSjvaosFfE",
  "key1": "LGxPgeYGoPc3L2Xhg68fXsUCu1zXgqJYJVFcVSXpuQcrW8R8rErryDDiGUzmRaRYLLqRgCDdsj4nbRknG3w6dyy",
  "key2": "4pgnY4nM9vEg8A4mEFWQ2SDixUBzF75FXcRqMpXgALvoSL8eAchNnffu7doh4B31JnuVsyFzGVMp7dMQ4hnvo7d5",
  "key3": "5JConJZYZies8iUphCCrvYbwJLJVV894ud4xMu1CK6N6T926C2WzFHY54wLcyLScuV8fZkf57BLHx6t1LGieA2v1",
  "key4": "3EbaqFL7Tj7nHVswFRXh5W6DLZUafYyKPkctC6wVb3vCLReFqe8RrdrAUHm1WcWZ3ET1TvvbdqAZTTHFLFgrQ7if",
  "key5": "4Ew7AdhCMX5YsoaNm2nnCd3vNgnksGXXyPYeYPTDqn6UVDh4bt1dQp88g2WSwxnNE7DWd6WmQNriaEmgqFvpqhLv",
  "key6": "2ccT6PEXA8hnY5Qi2rpfSsdpRDQZq7Sd43zwgEbGnGnRz1g9v5SztZMwGGeSeJupNEunq832nuVcqWY4VHDCbBaL",
  "key7": "BYi5hpy9Ln1obc7UgxyXV8pudq1TBVik5Y2HLC2axJnL4Kxac5PcgCzYkqUdtQtq76M2cDiGeoei8EGZHg6Wrqj",
  "key8": "4gFJvuHjxdoFRgTaGSvj5RoUNmrqjqHfh7GW4WbBqVbyhtBHs7BHVPqjXi266XqoBBdEXqrA7DnH6FjShRqhgu86",
  "key9": "2PPLfCqnGepFJ64nHi1zyXFz3o7cHthxGv5N5WXbVdZC3PeHc1kFBUi83qEH4fQr8W1P5eukZpyMeTNK2DopZzfE",
  "key10": "3M3PnnQBFipgcqd7zw8oauvGjuQZwf7Epd5dK7cXtoeZRaX7dXQgYVDddFxVVDWD7JJVhdant3qKjXTziRs7ywE",
  "key11": "3BdHaCEzB31kJ5wctM4KxJuupvKPbHd1PcyHsRhew21tc9zH7fEUqTj7sck9Ferh4BMc1PaewQKeSFxhZJYw5HDD",
  "key12": "4wLJ4T6irpCyXKHKJrvePXZfjESknUxDB7WMJHMe9AVhycWyb3z5HDXKgvMKv76j26TENVDAS6DaAAACHrrCSfKh",
  "key13": "31Kug9iXxSEfBTwav8kTVW6jGRxHoGxhfK5KJR5yhJYRDLT2wz6PxHvcdQMJnNhtXAaw981d4QbfoGYmfWbdATKL",
  "key14": "4XeeysBmTkWrPS8rRh3oSAzyFiavKage3P1Z9iAke9shL2KSEtRhEcRdQHbj21T1cF6jCjrSwoiyLMzC5NkmHTPU",
  "key15": "JGeq8MDDTWYWaZYp9tDPKJ3FAxbFxm2LNNEt3rwKJ7pw6LJpxxhM2mYZ9yMcH59nfH3oHCDYCG4UM8A1YoizaDY",
  "key16": "67btfX2LuyfodkpiWLZrBoZaJt1DFm9RXW95GXcsVcLuGWUTFJUo59YHLqV7q3eGgLVBQpMSx3sm1Tp7M7WuPMqw",
  "key17": "5XscAueLDMrm1UFG2En2JkH5FsKEVMMqfNdcy7EVTeCVVX3PeycF8RbpSkJX5uMEpy2gG3VgLKzgEfq7CkM2pupP",
  "key18": "MhLjmjfVEVmoWAiTpurnaaHotTmcxjG1XcU4UQaQ68y6pg474a1BZ7sabj6jr2VnJbZihZNDTz2tk7zmF6z7Hs4",
  "key19": "5RR3Ls5C5zqsSefKD6RNLKuvHVepstbsvX2VBEaCq3DofdnvY32bNiVc4c9VBBLSzBPXuJ5nd3Y6oTs4rmJMVtZD",
  "key20": "5xCN6mtJPssCG9tryQqj8WSijJjPgAxTh8pBAGBeqamyJNWE3meifwAocteAfWFiANHrhukWrZ6SB9DV9mKCmoUJ",
  "key21": "4BRGHRj83nbGsPiN5hvQTHZj82Wq5xT5a3aKErmwQx9VDJxMCFccwv6o2PJQsqPPKmNeXTaGwXsgcqrWH4sZbFaD",
  "key22": "2g4YNyyizvAawdJhMiHnHRzRCqF26uBvFRvgakyVJChUfXArEoorwVUqTHN3n3cMFEaoBxT71Ku7VB5s2qWqUD3X",
  "key23": "31nSD9QoTunngpern2QRSywdPFz3aADLPUDxFBjPHYH4NumqR5Py8tyy5Un8Y9ZFZdnajiTNQMEQXC76FP5KPEfc",
  "key24": "37R46honSpqD97KFyhuaMT8d8FyjXJ7Y7NrLeUgRcgQcGNQT9hH521mbHsK8pFikznj1xHu7dDwDxRzhqXWiJUzB",
  "key25": "41fX2UjZMBoVnvuiVxdoyf1AZdjAoepWdxRSAKRzsBvwbxTZzbCYxrkW4tFd7UVHwTg91LCB7WLS8eqSrYoLHBZy",
  "key26": "2bLwgo916oaMHhAL3RfKZNne1w3tYwvho6W7X1LUGuMDafRQp7pHF4k8TMRJXdPoxzQMfRoREWos2zQMsnjmn4GQ",
  "key27": "3zjUp6UY8wNes1kmJdkLYptACoSVQrLxa3UiYF6YK4MSc5BeXKdpBDJxGCf5FFZzjbXB6UJPzVKSdHGddLSdk7mV",
  "key28": "55N7vHheLt8iF7jqeAAgMJS4h4Xoh5jVafd2DkKf5ipMX7BKEB6nkqQwqxXm8jp5sLR5XyshCZLQWGk75xUb6eXV",
  "key29": "5JudYbBGsVoCEnps3deQvgMtR5MsfUzpb9qf3FA72W8RxWfErTBidec1Vq47ZKkeuNtnJsaF9kRRqzzFJKYzuaZD",
  "key30": "Yi6kytHeWECqa2a78c25KorYEZ4baobvnoashwMT6tq9QsQjUtUy2M8PwtyH6sHD3hfuwFhD7VC7gvvBPERA3fp",
  "key31": "C5ZcKS3QtbmqryS9yYz2RYbwbz5ZLGrfpUtb65Ca4TDFVH8LNQimNHoNxF6bztKHLKUsTzH3ACZMc5K6RMsrj3M",
  "key32": "SRwFd2yzAhTydgUiMr6XX3Ri6qcwVtsPuqx2aMZmXteKCa7496f1XSHhpSUDUGxcUju2WASuZ8UqFspFNXzvHS2",
  "key33": "5HN1YKYCEPAo5TU2827NbphGF4hb251e4ovdAJs4Pd8QgyKLPvjEBHbimXpctWv4qyDLajNgYqMBkZccdrg7ToVZ",
  "key34": "29kTn7gSU1fwt2BubZcwq9eBSVvwdNq4ihj61b9EXZEPgvxoNtoE6Lcod8JDDHW7o9EeqkA36VSVgRDQu3judyqi",
  "key35": "3AAatC9T6Dgn8eP3cc1pA1zFiNR1VCuFKeaF2H47TYdx27V1YYbyAX7XvQAcRX4Yj3FGJGGVFmFW3FjzSxv81eaf",
  "key36": "ztNh58wgAuHW5RykzYsNQskfDW8DdgN7MVGsWPYGwbBS8WzMk4geLyowCxzK6nTNLKCRTWB76kuxMLbEHGeTKbJ",
  "key37": "5QtSVR3fJhXjeCRaJm2PYtaZpT1mwWBxg8EXakwTCpNNGcqjFvbukJuPhsHYPLdtvfwArDxksMrGzCgVYTRoC9Nw",
  "key38": "rw5FztaGX5oJjC4p6Lsnbg9MA6ZTBs1TgzNuR8J9pBEbVap427K56Zc8gx7Lsit86naTmM3cMyTBz1RT8MPg6w2",
  "key39": "5EJbxaYpwVptz3gzSNM9yvjPsEm7JVVfgLHtminy1Y4WHL2uC2JZB5KisDEj6VU1eS8GrDwy7C6gNb2raPYoL1fi",
  "key40": "3MURtHnpq9YJ5CruNuUTr8UymPgYmhWHzrobkzbrjc9HSJaX1o93NqndhrpNFd3i2wN4XJc1t1sGAorwGeytJLc",
  "key41": "2BtEBWZ2q6aUxgdtZnzyWrxrLxUCi2D3rv6y51SEcANdXeevri13QjKveeoQ4CV8Wbf9iqmVT3Mk96rx5TfHVBJx",
  "key42": "2mL3rpDw5reXJw6Z6a73uyhagvr5WRePuTiYPyfd7TvY34CEiBt7XoMjHFfABP6ZRAFABZ3JFXarL8azzVf4DVy4",
  "key43": "67CzSM3dgr98thyRezccjm96c392qe7hyVUWQV632oa5rhPd2DBCkR8mFqgVhTbpC12xbP8vWKFesky6M8ff3peM",
  "key44": "4ZqY86ek4aVZEUnqA1G8tA4ZjDTyYUgjHsLXn8FHdH8VrMBnB8XBz6gP9XXf93jzx3TofZ3hvnEQCeRnVbTBvt9z",
  "key45": "43AMxpWcPmsDVuvcQpMzdkcT4tJkjouP2KyKwivmfY7D9CLPjL2QqJECUQ3c8tbBbsmSU3kDgseAPQKES5jYqFTm",
  "key46": "5nF2DbUMqSNPGJqhp4xcyQU6wJzWZY4GFgmyoBYbHWHbnMKPFwfYWwxhB3w17xyY6Es7tLJvhC3FKjEEFLBo7Z2W"
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

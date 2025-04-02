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
    "2VDKXkjXGLo6zf5D5fFk9n7Bpxkr84VWd98M6BDBiE4LmRjK9jRAKTtdHHMnQmkiPq2ezWwZsequ46Z4Swy8UQ1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qEpec49XbuwbSi52jinL94arkc46hg1Rs9QMmWv2X9PshzpCvk9tHCJZjYD4hMS6RguxYLe4JjbF9PEWzdjokmC",
  "key1": "2xMZLzhsxaYm4PyXYf1H4FBLnVUdKStL5KCCDySyTtEEuLFww83wmYonAEXC4dHcGMkfZMWjNV7GGgDFQnRXCfsP",
  "key2": "5QxETi2RWKNXEta2yfyJ1DwWH88W89V1yfmajLhGwhQxe65PHPffoNqA7DHdqw2Yq4QdxB9qh4GKuovdJmWk23s9",
  "key3": "38VerWkBwMSLqNu5LkvqKKiqwYaHG6L5y5VTbKzvgXvwxRnbhikQxty1QRAcU9fHA4ojugRNuZr1oAz5cyaiPjKZ",
  "key4": "3BSnMreA8ySNUQoojX8sSHw7eZib7MPFxpLPzNRS4Y77v63CrQqVWaAxxBzSkvsLWobZ3NASJGGPDdFJiVrqawTx",
  "key5": "3o2puXFceoVgRxrCaMofkbgja1rhYZ3MC4ggweUSBkjxt3y4YUcqNi51Dt9FXX3isHzVmozkqyBT5uGouoYqDRJP",
  "key6": "45RuPjs1j71U1TnKiFZsiHXg5RDtVYorYRqDApHgvp3SYhhNeoP6duH4boKGPo57RNiZ5QWcog9qHiRcpwUuMSUJ",
  "key7": "4Q2iR7MynK9owdjCzHtHhA8kPDbF3N8w7FxdGv9Kee52yMLAJb9HYnVqNWfDAgfTocY624QtjCQeyeXNtyiJvhWw",
  "key8": "3Hk6mZHhQNz6yFLF6j2t4V2eebPsUM8GeWfDAWAZWvgisgRSidttYRK6cfdVxhPiTpHcYNc77ezzeezW3pJMhV6H",
  "key9": "2wkwWeZZgAyBPgECUTNXPkrJG9WPR54EvmwXFi2gMhYwQTkLV66t2dBifm51XgSgXXoroVQgHgyRC8hFaUmiBbxF",
  "key10": "cjRtpyDvwzNxXFBHkEmNQh9bFdFVA8wvqh7MhZmWRzs8xu74sah4WtDZcPpjJyfzbHiVn4CVq1CPJyrhCyESuVx",
  "key11": "4ejY8sqG3hEmnK82kWBivtqUuZbveqorr51AcvgATicrzamVs7xR4KdJiXi8uQicQV7sKpVoi34FDooa2i4UM51V",
  "key12": "2JUetK6ceVnju9ajuoSDEABGttJSRFgJr7HeLHx2nRkECBcKhi58QVsJpaNS57F1FRkDzpbWJuobCngaHRSydSsd",
  "key13": "2crhM3BVyA7r3BSqANXSzjTZG8WZdGFpg4A7Vjan7d1Q32HqMTrdWDCy66YFF7UMo6u7sKLm6SxD353fap9KJzbd",
  "key14": "LYtD22h49SM2Mgh7zedVahcoyjVTC9BUggeQ5rVG19Yv89cvTqgknYbXTgC7dgSNXsU7FPVZ4hwAo955N6xP5Zu",
  "key15": "52hdfDadGyXXBBUx4ai4Ymq71mwuE5wmK5RGM2gQFV5Uwk7SHa8U4hGGpLizBFgb4uZMcUcBYTDdidWxFFiJMu2z",
  "key16": "hS4jZqimZZp2bqyh7j4Wf1i64hpZ6y5NHWBDCUaA8upVWMCxKh3RCpHi1zfwtmsjxvYMStqPkRzZm5h8FqkdN2T",
  "key17": "31tdN9AQsn3TpyCgAJT7fTDMXHVq8EYqGBYLPpw38jpiE8vn8hEQSqBYeJtwzbejpbQPcqzr8SLH3cbQV3sDRpvE",
  "key18": "62QQpemqJ1tVQ8wnxCgo9BhBKm921hzD1McU3Zk9ZwLLEn41277ccQMAbiaDCHxhvvK6wJd5rGXnTsAJHeVt7X3r",
  "key19": "C8Hgu5BxnfHAQihx1BVptbNyvqyPS1xHmgvSsNZtJkjAmMtGysPFeKL5X5rz3rchG7ZVWa4Wf7iwCD77fx34ayf",
  "key20": "3neEv6hjhmaAZDo3bXKaf5xNYKi7ddHnaWpqRVc3KE7F6tq71om99kuMBDA84h3hG4iGnsNJtBTCECfSEyJAZAWT",
  "key21": "4pu3JRpsYARpH1VvJRgNfLWutnqvhScfkZkGfSfoYfrZMrMPpUxZ7YNYtyTR9XjXutjyaRmu1rmGbEG51SG6VLzV",
  "key22": "67ReqEFqVAv4wVN1chgkwQfepYxwPqDKcssoDy4xGXjhtQ4q4nrd1EeZfu27LkVaWHv8nQRdkMVNJDE1Gj1EZX6q",
  "key23": "fukgGmjxU6xX9QASMS8RCH6UTFSAaqBStwGznfyAzXu7cZy8GJXuFNPZkGhP1AXMnmzLHdSTZiVvi69orpWnYPc",
  "key24": "h9ydcKPraPBtrzB4yZyrQxoxwaVDkC8MG8FktBT7q4tgGQzhawcUHQrNULp6NiHmShWNfdviUQoS8V3PAdGpNt7",
  "key25": "5HiNVs1JnUBXR9QaFyc3atxoXKq3U8xpCxHZy5eobyqdPn1AMxHhG75qjT7RBB5HkTWi9zSvL9jZ6pgiAKuv4vgt",
  "key26": "3jb291sDNBXqEmv843HPGH8N185dCduuudX6kahYXP8jm5esFFtUa2MA9tvtfydx7VGuNqHL6fofmQJKrGLdnTQ2",
  "key27": "5DBG21iWKzAzzmTv6A8vF9xpSdYvuzZ7ykt5nfJCDxnRkNbtfPNZBvUKUk7xDfS7yn1B1N3DTqW8T6VSzQHiCVZK",
  "key28": "pBJ7c6pVfCBdwUm8EdFcX4WTAFhyFx76rCERkmKjjP1Z4wfYfJrrvKqzPuh5PJU1z2VBhX3q8WZE9FEpdTRiVi8",
  "key29": "3EnTSDZyWXof9RRY2THP4xGmSRyThxhLyYSSCho4j75vUpSKMKB7VhJ9Yo9hyaRgRnu8znk5bxaD67cf6LWQKJ3Q",
  "key30": "4kVbzuC1by4d6MJTRyUbqTwDF3wHDeAkVi6tdgHoxVKaGgWiHR35DiHZAx1jxYchQ8Mq2EspLfeDmfg7ch75nfTD",
  "key31": "1Xi9vopujMXgrB4jyU569ntpTLXAeMp2ub9DAbRQqDiRi3n7Aeupmtb37vBGjS1vLaERiKsx7qfd8AH9rCAQM9L",
  "key32": "393eajcCCKQ6VfPzvxLsfct7oVYt6wx7EGugBBnJRVmpZNf2k8rKUZTQNDbqL24d3bnbHiE5KqJ5jSj4Xuka9fNc",
  "key33": "5MN3YqNVKrgX4u4ZEDmkiVseiLUi5cdLh6DfhWV6DM1pizyor6CWMvraX2gndyAEZv8BDz313FgW1dmDDgRGq2tw",
  "key34": "3crpadySipk98C2PkYZ8kYtMruVrdNbKADf5LLcf1ahpf8aDDo1nmhxrN1h18SBrPd9Tv9mcuYQTipDRqeB7rsK8",
  "key35": "3nKbarDA5foyjhApVTxidWKc3LUaeA1WHneukPbUdk7GQfbGLrmacZXTAvghpnariaktBx6m5HRUEiHYY3wY38RN",
  "key36": "4mNfFwnfi1sLKe7FKLW2S7Cz9U3zLZEZAEkbV9mB4sk2PNdmafyVAoUvJL9GmuFX2BvSQXiMKcaF3hLAynenBpcQ",
  "key37": "5zB595Sg1jMDL5PuBCVRnwqmxdBdM9F1sSuZFh1FXpnR1gp4jt32ithqv7nbNKpChvupaL3z6NGeiuUqT234ospq",
  "key38": "2SK7moNSD78MosvW64wBhiVtGuk9TezHPWcQSu7CmdC6WkJjy8PPFqE1S3tQktdG9uUhFJ8n3fJYyRbVEtQRNTaA",
  "key39": "21krzvCZ4UcVEnR2YUhG6kBzVgTf9rnshcgGdvVf2oWupPtmzAYKpY61DJLE52VSdp4cnQVoeQ3Mr58XKWbwcXXM",
  "key40": "HbWCVFevCxXrdFcEKzKcJTN9hyQVRd6ANCVquth4E4CKK6k6bh8uMHN8H1EyxuhA81KC7XYbdaSauhYCBBfPkJ9",
  "key41": "4bJrP7zwoETHN8HjpsorYrSc8BRdCrfEXJvd3PCeDNHZv65a3MqEBtgbAXKYgEexxUEnKVqKKZEGXVwpfiC3AaS1"
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

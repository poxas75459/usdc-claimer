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
    "44ynQrDLiDcZEtpXADTd5jGT9Xs1gYMdc6Hh9jddgrupFhontF58zqCYw1W8LGVGfuZfmdCxw1P6JsmXMQhiUb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m51pjhneWwykXbYuP3DvtR2psxbjb1pLmGuRfSK8TBi9QUXmKCzJQKDYAiYzNAoVu7TssB4hRaz34cuFMo2sEhW",
  "key1": "56oymoRbeGjxk5yaFCwJVdrQFzvkfaRpzxuxduJBtZF6mp63f8o9CiJMVQ9F8zTFAW2FALEBAisbiikaLi5tBVYN",
  "key2": "ZwdRiodmd5U5GZKQm9Jg7X68TZ4QjguSXGcLZPRiU7tK5ba7rMseFpNK6dViWA1rDoTPASwjTtNmRCDSdYVu7xo",
  "key3": "4rwn7zjtmVTY4dyTSQikrreoRDtE1foiQpv4S2k6WHUWyCbTHXUBseHtjsVJXGAUFfxMYJSjBAnombv2U8WJWvAQ",
  "key4": "Tz6oSFKrc2NzwiTVfqBJvhzm5iNAEQ8jRrv26Do3Eb7uThi9T31qFgh8ijbQ7nfsRfz1b2tggDT4b3NEKTojpJY",
  "key5": "2ZbjjSNBnbBekjCYiCrxDpHyvMxSU1ZkYnvb7akEGvdwXDemPNs5zNiKzgzoy1aDj6mauqktgvmh2jzm2Qngxy44",
  "key6": "gdty7HB1QiEu2whjzwcgbqjuyyc3AeKPWtgfDhrN8K4oevJNh1icFTc4TZE4Ukbq4YfLTQZs4Hn7ptgXk1spymx",
  "key7": "2TkvZRy4zXLvd4QeCyWUXQL843k65P8m17gHj3LrodfWZJ4PmdHXmxKQ2FUvt2aio77Uc52qvnoSxWfYkvddmT1Q",
  "key8": "3p4SbUUMZyKKCLvyHQh6pSYyheva6XuXREFEPqu36nYPeuEjMaJ6kAKT4AfMUdbsxSDUYQnS3iK11xcfVKc4BSy7",
  "key9": "4z3espdbnm1CjoAYV8AFMXzLL7sK59oFbtyTKgXcK4ZVLknYiLyfDFXhbMjJSYwnnzRNNTi6xqx4xHYtzR8et8Pj",
  "key10": "4iZbyVPjQqvxrv1y4qGPKeqU9FDK6BTtquUhvYGJjhkzZbX6bGPf6Fwumz8m8vUBbJqg7WfwY36jKpQ5T5HxN1F1",
  "key11": "4gx8mny99dPWDXwKxZ84cZEAA2pQKArPhuXWWCALRJSzcsYbvFaTq1YPLMdcV85oNpgbhUKPvQuBK7F8wTjkfqjH",
  "key12": "EgtDmBzfmaYHCcLSNo3FbB1KdW27BKZieqRp4khioJv6kGBn2ApjUntjqempLsWeURzDPdKctqZ3RsZ9FDxN71v",
  "key13": "4Yepf5cDvhyXM937VyGiZoNHV128dtzLHMa3o3WDeCDn3Hbb3GN41fCfLg4WU9gqKUnrKgKxxGVUqcP1pTHRTzJ6",
  "key14": "iEPU6z3Tv5VgTbPrJCPBo54xnCzivxDupR7KuUWU4iVPYxDDLnnbjx95Z7PJuUgqssBZxenB2RSjhmWiFc43UtC",
  "key15": "y5fqMJop4diKKAt62DADc6b1XduvbKRvXJxdemMCHG5FBA53239RgQZvQPQonKj4gLtmmpae8kNFf5TiBNqfFP7",
  "key16": "2d3AzMibK8yzRUb8rh9eZpaw4yKaWgEyQF6nwViMKdZQggdA3v9jck2SqeTjH6HkcySyWYiy8KWMAQatk6X9upri",
  "key17": "3gnUjknG1qi7Ny2yZKbfRyjoPzmRNqmUPvGeaLkhC384kh8Z1XrZC96qqpSgbKQ2KmUdUidAMP1y4HBCyUZRk211",
  "key18": "31C8DEuKfskT7RyoDK8YaVLr6p7XKiLptKZV37dotSPDyVY92Reef17L82YLwQDYfrVd97wbBRqpoGSPxTYd5Sa4",
  "key19": "51H9BUEYp6N15d7PgyNsYxLJjkLE8dgTcudgSJSMAFPwgQ1sCZUFJBDXQHoBz4CUZD9m2p3v36XFU4PyxW2MRQWo",
  "key20": "2B8jnnAWX8JGAnXNVR1Ux9T5MUahGKdwhVZhf7A2ga9AGUGmjgPMnLUiVEHDa9hw77hfhPBesbs2Y1CQkn9FHf8J",
  "key21": "QZwpwP2p14TGG6qYRLTRZv95GM11gHXZG7soo8rFVPamK3Za78ogajLngqtc4JXN66VBNq56gpgwNqFqbfq3etU",
  "key22": "2jXY2h6PvaZjueZkc7zG5uAksyz2epYdU6rPzFaQ1bT5ySuK6cbWvRf4VKTuQ22ynZHdr6VaKXKdYZv8ne5Y6zSq",
  "key23": "2bLEoBh3f5i8M6Pwrq1QbdAY7RGjQNPxXqnZSusXeKFVY1f5k9jZNxtehs14jbcdE25sXAi9EbPbuykzMupBDrN3",
  "key24": "3zvxbtvwcSq758oiyf6yfEKs4zkLUrX6X8JtopVfuPvKE3giB5YM1FqZaaxj1cPCLeqfBKTwmmYCijTkHgVMG5Z8",
  "key25": "rZhBMvT9rfuCT5y2qdYy4s7vBnPa6GSfawWtcMQMQYn7BwWhwRJzxcWbAsPdTkJzmGCiRkktoyNgLY6u6YT6cmH",
  "key26": "3TEcgr8miH1W1K5ye4J93LndJSXdAVSucDGRQZt22ZMwkzTshzvSvLUyrVy2ycAAyExuh3i27t1MnnusbXVSqovp",
  "key27": "597YiC5xSeyn7fcu1t4bx69QbgHn3B2rCDiZEs1SCsMKNhnzdM2yxg4odDg5yuLxVyDjWswcCyefRAseWdHc8ode",
  "key28": "5oZqTt4zcY32jk6D7mvSicKaNt6CuUam8PYBzTLPAP5DKANWaq5N76ir5Xn1jBfhRPea1ckws8EtFnKFhqCxHpaM",
  "key29": "5kvLmTQnsGWj4dBHZbYqFXd2mFhwrfbgccjEQYcZ2rQPMKagW3Wsz8Q4vWDr3TPgnQBXHkPLFmQQ16s8ytBG8MDT",
  "key30": "2G4DfMHQnK3Z7GNj1DF5ZKaedXGrHvYug3sWGJym6zCDDzVLLvagafZLZUCezVM7vfBNc1X7iHbm8vLFQAiSru9o",
  "key31": "5bf9kbhwJsY7fBMHpZ4BnUQn3hh5jX76PRDr92QPuEDAur42Ga447nptbFWCooPpFvdnmVa6LjTtionUZum9yimY",
  "key32": "4Qb3PR3oHmJXGL2EVenPgUyt6NunXjDucW6w7o5nMvNZb9E9a6WcRPd8YXeLeGw1YxZ7SLojuv7E1T3fDyP9MW9o",
  "key33": "5J7uiQHSyhmf3xASBwAjvdnARykwEXwE1Ff1tDf9pYE9bD5XGSkKqTkn3R8hrLpbdcRoWJfAkvTrzrAiHKTSF1N6",
  "key34": "4qzfwLesZiot8MmFXMfwtfvZVKvxnJ6xKLQfVGnSv49J9W2Wr3G1C8J2dUbRTBYbJNhVkc1Wwxjc5ckzEhtu7MbS",
  "key35": "nbbeH2NvFVbftLx1uoEYmmKXLyfD3knVUmm8myEmF8Gfa9NGUAhvYW4dsRJc9bf92Yu1oko9TLshTZkJBrG5YTu",
  "key36": "4StdV3VMhhQQazYcjaibULVUH2HC5DzAGVkjUFU48E96gdg3yewjpEQGARwf7MdvEp3KfNgocmjoD8z6bub2BUNz",
  "key37": "4fdUfxrebcPExgMZdqVD76B2qiGLtrEPiRcsusqzftyvwNfJEZ2E2WzVq36VfUt66qBZjQY1gXEpYhFM3HtifsKS",
  "key38": "4MGvjf4mhQFEgTbd3QTw6jw3uXYLcfC7NQt7xziSAQrRukpc7y9p42JAZBU1p3vM7JPpcFVYK71msXVsCwDCvkdU",
  "key39": "fFC6CWLSKfFcAb9YCpuxXuHKvcv2vJK5Z3rkHEikbvW29J42XMoLBYHN3MhEAsuEaNiisBYuVx6RDP5pib19ouz",
  "key40": "5RgEYc8GpRTN2ZSNA9ZBwjdo73j8Pja3bmEfD2m5zvBCBjKmjH6Jxr8wTCcFSmQ6TZEG7hY6FUwmMoGNkds2FvTs",
  "key41": "4DJWAPFPATTDJ8Edm7eLVf82sSott5Tp5SK27UYMUvvRz8aH3N84X8XVTkW1wMF4ExyV9LPaoen2mYKADSSmwRjm",
  "key42": "8Urai6domQ8oHiLMLRwhPtgrYA7X2dCdNhrDFhtuvBBiKEtTHZXJH3n5wGp9mFSx92M4kUjZ6cqUwhaGfE4EL5Z",
  "key43": "4ZdawJA1jNjuoJJZQyu6aZx6g1SgXGAdoLMbGg1JWeCV66gMTa2rWVNGruqRbcSXSiF3eK6HPt1Yo4f2iucTxWzC",
  "key44": "5y6fi45PBGG8yo9N6ds9D9VMjR9mhZo1grbvx24KKDyXYEccvLzzVwFXE2MePss3ALxitw96z4ySzqRFeJ4ijiPU",
  "key45": "2dGtpjEoN79wHSneyF5Kmd8gRQjt7viDDt6aX6VHtdqQFdiaJiXJWDSDfYfLwjqbS1uhewLEAWbPveRv8JS4AtvR"
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

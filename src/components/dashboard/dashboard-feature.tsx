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
    "2teagnvaTYRLUWCmaHugkHdqHx7DHrsr1DtdgJxLFEfSAzMoeXdHwV1zLzuc5tmqk4DW6hwfA5e2Zx1qYcqmLXLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hjggsPDJzCypxPc3YgNvQT59ssPvugqF3QzdNGambpLqF136WRq5YNB4eDpKwA2bJHPPCjfJQFB7qD9pM1MxsEw",
  "key1": "9WkPyBXPbke27RtNXH6fmBL14Ty8GjVJevRtEXeRaN46wUGYoXrE6tLhFGx2rsrncsFotaxHqRaf8YJP9fW4Vpq",
  "key2": "4NF1YfMx5YeJ7KyPjmiQ7mQFtTwJ1TxE8cxQz7UCBQmxwitbAosAPoJiJJokDEm94U4tobpsjURUs1wV7YeXScjq",
  "key3": "28osTeQ87dXPjxT7MszYu4ySAc3RnxgxPquJS1oGPALPWGaq9VDdznw6KeF2LWn1sBzT5sBYZd37G9bCku2nmhQJ",
  "key4": "3wfWiaEMqs7heWJ7NoSdFRviyoWmZatpxYiBAGDMbk1CYQKaUnGRxEGVZYV4gCDdVyKwzeh7KVycNoYP2C7HsnjP",
  "key5": "4yXNrKayeQyLmwgMLaYwKxNiyAwvbVtLxr7owAGnShA3FPQaEuVdUrHHZRJj3wosCWZrQyJ1Tuixdw8FoeUwWtGV",
  "key6": "46rx4w5bC3GmCZxV6usMLfAcoR5BB5R4L8Bqb3hqXEmcoA4rpqv1nMiFUMw1GXsz7LPnHwvzifj2AbZhfy4Dvuzb",
  "key7": "NhqY4pJWRHxkn7bbqMbwNcBBLvgjkhQeUF3iRsttn2dyfUu5WThDXpihNNsMHKqqxs9GBjt8H4LY1sS4LLwx5Zy",
  "key8": "2Je69Z4kQxFiJAqJcMxWmsMfy1EdSUxgSstN7RoBAotmH5ZRAQvCqsNp91bbpKX7qHpLwespeNSvSMqAkwPrHttP",
  "key9": "5QDJiamjduGVcJ28eW9rmZchP5C757SxGe3EJTXYc8Z2p4JtvxDk3bjLRkEhYSrQQq9e19Em9Ym8Bdr8jCMTgKLE",
  "key10": "2Uwa5T7vV2CxRRvrhyXRnbsUjvMasbNn7VmZn7q8niu4hcdtC3JeWUs5kSRyWiL45tJ2NuG4MxGNqxw48DPi6kSf",
  "key11": "3kn7ZPvVRdxQiSJy1hQwtvvqzPNJ3PpQXDaGqmGTzsPAGW82aM8fkV7RWM16fwfCqHdMxeCo7ANepeMaeRT2HKdL",
  "key12": "hVKRmYoKZoh8vrEBkBKtnENtCw6Zx7BN66JrJPAzGns4LwqTeuK3gdjGzwj8zJPBa21H3FvnhRtgmhe811peHTA",
  "key13": "3MYqoaM4ELdhcYUHE5hRCKQKNpESP3b3LKG93DWx3m2qmKaDajZgnUMVcZknM2NskAJzSJhkmqCNSzHvwy4czy5i",
  "key14": "5u4te3Ha2S8y9n9QtN7HCtJqBCZV7Uq5mQfaZACcSeMMDFhKeNKdDzPMhEy95e3sTFP3ytowRMSUo4YuNx3bCBZa",
  "key15": "3HwkJSSkfAbPiiabDnSfm666x4MDeDdqTkdiNff9Yjs4FE4D4nPfsCEpW4eR64fjEtTEDxP5bAnLK2HPKD7unJEr",
  "key16": "5fExGE1UkPhXY13mCQ9hEkCvHQV6faVoStbBm3d4LN24crN6bLRk8tNzqCAEBRZKy7UvHUqtC9xCNYKCus5qWVD",
  "key17": "4EV6mCuueMnMVFrENyafR89ra5FY77jJu1DuMReunpvSftpjwUUrnpdFKLWXMR8Eq6T4Da5gvUkkQQ1i1oFfg9qt",
  "key18": "2mq3Bprt6uAt1H1HX7YEPbcnZBucsEnt8R68aaHKTs4VXBVdLtqpqVjggrkyVHVKLAp5dP1QxQvtq4RRavAmU9bB",
  "key19": "x11cQAe5yxzTM3GgTb8rgzkqnYLt8xRwNGP54Lkv6nGDV4AG3BTjJoGryfS76Ern1ZgmgtkDwhs33fvSnPDXbtx",
  "key20": "DgPSfDiJv3LULMqJ4SmbQ9M1uj8Bs49g752EDuo1W4ptyw33nPjHybTZosYFbaZkT9zUj3QZMqGEeyBTwx9SGe6",
  "key21": "2ZeA4HnWao5qQCo61PUkLj9KKKXShMcS3JcAxjScfVtCZxtUE6bmqBm8ZrULM2Vjb5u5waketYt6FpBMKw27p7Jb",
  "key22": "2iiBLTTLnneTQsZkR2YkgakGLuPRoFd6GkizrjEXymn24eyC6N1wvWRJVhzGat5ZCoRQubU1cf781jwitGdefA52",
  "key23": "5boVpiYLqC8da48VvCp38vCQfKAoLr6Wve3Sa5RYyBVUTPAramGFUCzvCwBNJzrh9fzGXrrAc4aHDgzwv3nTBDVK",
  "key24": "2zbp3d2i8Rw9iqeP7dKre5CjRz8UY8j7q7wZs36vkyq9w8xxiSyh434cyBfdg7eBSbFzRXtWD3Z96A3DYvixQPi8",
  "key25": "5su6SuFf96kcEG7nZ6rqHfpTCyjmrBH9icEVR8Tz8kNN66ApjCddtdf5md9E41HBU4rHka1avd92DAhSg5BCfghP",
  "key26": "4k96PdinxR6GUhJSzQwcRv9JsKUxsNdyKuPaxh78VNGG1VPrQ7dCCzKfcUwuqrKWetTZHeukUtMv4WQDW7Wag5Ky",
  "key27": "wU2AqHoKVFjcwgP8UPWmKwZ5GYrubY9vjmVMwPKrNZruHu2BThqaZfQcZPyAYsvdLZtrhfCSrUzfULyji78xnUH",
  "key28": "YEf8gMoAuRi2u4rZ3sfAqQsLPd17G91p5LS5bDw2uvS81h4GQ7zLzyKioL4afkTRe7mUr3UyPtBjTremhw7PTET",
  "key29": "2fVthBbGef5UNFMuGG7tfRn1vTTCjm4GgxtKT4eKS6yGcugqPhUycF8ButpBPxGoabshBQFVAGz5weCBtU6qfMNL",
  "key30": "3WTKh2wijC88jrk8anzBDRdphc3ifiSzpZNevLN7phQLvfArY4eE2E29UELNtnRccuaDiZNXaoamtra9JZiNcgC4",
  "key31": "5xvLTTpbENoVEQ4RRo2GhdWw3YQiJCdXUV5fxn3NNS2436xeVZbqZB12f9FL3cR2fAFKmq3A26NeLoviKznphev6",
  "key32": "2pVrunsEFePDFkMsuueQb51v7EB3AioxdS93SyYC3Dg9GifPMZveE6p28t3suGZMkwP7XvFo6rjnjTFdgDrnL6iT",
  "key33": "2Y8AWATgHMKycQ1YoGAWbUr4ymwLaJvVqRy6B4ru9bqwViRxDZZyKuip9ogHcb7XdmyCd8mkNzCZsXkARsWWHCe5",
  "key34": "3BQSRqWffDmVwFGFNF22scdUgkyiCWG1ohiYU9URgMPwR8xUHHTnTWfp82RBpsxUyxLkjLQ5i1VJUj4cDktbjKti",
  "key35": "3b8ac9zrmpKLr5N1dMJbVb9s6Rs7NcYxBQEeCEL4GFK9LkKsKYwMDpx4uveiJwTw9HeFZiBQzihkMpj8uDv1qwcE",
  "key36": "5DWAeEPZzkxsV1ezAzqnoCXEAYZmGGbgrZEYL5oU1V89utx5xbmbP3nPsNRm8FRV93GcmX1hohK4yQTAbo7hhhBi",
  "key37": "5Y2ffCRAkF85X2kHMp1a4CPTUKuVqLbwC3Z9E5z3hprhBsKpH44zm7RCqUqe2xvBwi3no8BoLNVtNxBwHU5e3mhG",
  "key38": "3Wjij3UohgBzgFvgf1Ucg6ERanSNJGX1uC3YfEFCst3Uuu3h1ZuoS8LDcnvyPZVC2negTkm4NvGPSGDjGMHaRu6S"
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

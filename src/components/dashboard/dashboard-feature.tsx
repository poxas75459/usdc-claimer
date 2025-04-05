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
    "4Ct2hJBSg5JKzw2nSjoWDJGf2FdeZGk9RNMWy26HnjuemL6LcVtDEvrzV7sUtSvn3YUCqoX8ztxEAb32bDZbUvhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUAJD8xweP8yWKpqmPs8vrthybGt5d1iQX37mRCd95Fvgj28WCNPwFJJbPBD8ghrCEAutQFGtLdDa7GyUsUmm9R",
  "key1": "4WaoS8y5zLFSDzQ356jNNRfLTbYxHQbqGkQu73RkrLAsraZfW6PTemNsLssv1Ki4BoSdCrEUbFRjqnXzDhtgxf14",
  "key2": "2nRLN1ndLrAK3RMZWpHqnphtnv4i1tg2CNxFq6wcpQqYVAChvb6dNarQ3nBvpK94XnSB9Wx2saqx4mG6sLGL6Y9U",
  "key3": "2itNXWA4My9DQxXLMZJKbNB6UhstLVeg8f7k3Qnjub99KzGMiVfcH7WrUfTLeeBsaSu6mpTFwKx8NS6kZFKUDSzW",
  "key4": "2BEfQhXhvRDhkjcrqvKHNVrdHZDZfL9Qi4yEtjaPhmCzpaLKJ7HmLaHA3KvK3dFR9tUMJHBkSCguN5WB2EmuvsYu",
  "key5": "2TTZHSB4AwroekVz4Up54v3BpAT1jr9enSCQtJ1vyZMnaokMDwjkWggc3iBYrHpVcqwSBwYEQn7FbFqb1LQwCcip",
  "key6": "4f4uWnr75q1wvUCfSLSzLEAVVi56sieMpkznQzKgaxWcqmtYp5Qkj2GD9dkwgqJU2sGRdeHQHpoVpySat4hSUxdW",
  "key7": "yexf2UKFGAwt8U1gty4t3kSbyeSj8hCWTsa5FV6Vbc2UqBjLUsotU1Gw4BUmS5ZetXfUbsjq2BpxtVr55MVVWG6",
  "key8": "KreFChxjsUxmK8xPEMNyh1RJ7CArRcv2znD8Nj7MVTRfvXExnouiKiNtsRPuFzSNbznnAWipTQ4buSVK1GwZUy7",
  "key9": "3Ff6d8JoTA83HaY4chZgxFKWWtRE66QdFoTpU7e6PFNJFZYybk2P1nYJngMAcmwWSA9thjwCDYJ1TGSEiDTHHMQk",
  "key10": "3vP1s9Db1jx18tuhskACsV2dcfb2GfpAjD4E8N21nTjfk66X7q8wWQGvE7xu7Cf2vaajwxtW7PsJb2JhFW46mqyM",
  "key11": "XVpynDmmu1Sj9cNuW9y4HD6oKXAEbDuXrsqqnGYrntR4qcSMGxURgP8nHYPr9ZgQbWm8S6w8a4KQj76uFnanM3c",
  "key12": "amUoGNCK17Aji3BWNcWcoedGwpRjLCoDDNXBT9XHQTNaczFYERPV4Bq7fqqN22hnvNkJd3F82cm5kENVHLwaEcB",
  "key13": "2pLZubRKYHkP6uZfrSneUwo12yYD8uwa1sH3skEmBPtT3Z8tdsYjwv9EMc3yktbTjTAQRZu5AQGkXPr4vgHG5iC8",
  "key14": "YehqU52DcqedkQJgg8qDFgBgnf97BydV5YVDehAaLi24YnqmJX6nEr72A77NWTHWXyjKJCM2o9jbBYQNtojJHqm",
  "key15": "29KoZanXvZwBULCHwXKxGNcQTojsacKXHfWD8MXm4k9BAVpS4qcPkmQsnMKEhdhw7vVsr1Y1mxUR7giXkGLBCAkk",
  "key16": "42JYxoZEYfegdoA2eKpK79JVkCLHXjbpdPTiFPKP3XzMeduARncrcqbaNXbcra4FLuS3JXPTVgByy2bNN3x9GSZ6",
  "key17": "5t5Lh8oEc2s8bQnkNA8yyiPg7vJj6UL6fY9AnwWtAyBJfQCwkBFXmUyeutdFb1VmmgWrEAxRfCdvnQ9PuHM9fxfh",
  "key18": "2UfFSL2eawXeDUgZP4SneesXosegxXfWAyEbQoFkE4v28Kun8GVgRKSWy32kifi5nLWLvF7hAejVUvXXuDeGofLX",
  "key19": "63L97eY8QZoUt62HcxQCFf1vpx3ak2Nk8jJyH7g1pXFwEYCWbRebbZuZGLyYzpqtNRFrHEwTcQFoUPrq9jgVN1pn",
  "key20": "63fMQn4prqWEDrukBNJbJCmnx7tScVemKExY8LrxB7ZS7rvJF4tcBLm9xjGaeFQ1mdyJscsvVgsCaWk9hxcRiEmS",
  "key21": "3xNwVB1jUb6mEp9HKXJB5DinBsgQvBtVogWvakDoyNcWuDiH4G8vZnMcmLsNyGAcPkLeVxWPqmq9G4x7jBWsnGfH",
  "key22": "3Zk4Rp3FDyHR9UVPCteMpHG1mB992DF8T5JyXpYGfadqPSESYQsQtrWMCGWatSnc1NGKmi8nj9xUa1c1X9Xfnqzp",
  "key23": "5yaR5vcx8MhRUxK3wTGeVjsTuqsgmNoGjYwPnvmDfuquSYRbGxhdLu4NG2SkFf9tHT6AVkBBRmDg5Ah27Hk86164",
  "key24": "5z6dfchZRs1LA2iHX7baAfBMeBvVopW2mMEQLoTAj9pKLqaGBrdjnwRMJdxHATkpdo85GzFMSPE7SxhSuXU7uJE2",
  "key25": "6fd7hAKwMHu8gxiAU8jWrd2jKGeFUuJFtxyNCDmQhw4tpeYCXyfAiKVyCfYe5XfJVD4vHYrh3CsCydPJBj6ti8o",
  "key26": "27CTxwiK6X6ZcEWcVxd9JX3s31cNPVVS3HuNPxNuq8ddioqAsRe2sdWEePteeZZrp4eHRZrtj5BeaSwvzWKEX1TN",
  "key27": "5pMs2yKru7nNgDVjGpJFdP79p9XJbWQ5QbBCiFFSrop5z9XV2mc8TLcK3kAtKcQEkehaSqQvCGcKjBD4JQDKLqf6",
  "key28": "5xSFuC7mDXzD2jrTAq9qXGeEAWN1sxmCWpes8cd31X4nr6AhhMRYRYq3yLbEqyejop6ShGrzuDiq8ze2pMPQvk84",
  "key29": "3XKEFb3Ado4mBz6Fwoey2sxCPDEnifvL6grnVVkD5dJuS4AYtSRVRyb3hnq2dM6cpmiNRrminC3XEoTLJMA7ohAX",
  "key30": "CeXTmiXKH3ZvB7dbwzNbeuhuyrzaUiM4PCaNnzwYaShNVH78T5SyvHsKFbgje2XvHgmPa7A7mbXPaEDfyUdnLvQ",
  "key31": "5NjnJ3UGx2BVyDptGA8sWAwGuQPqoHoc8D59iNhQAcQnBbA4U3irMgSP1mCndNhoyAYcsrnYrdZxoyobNGdbhLAr",
  "key32": "dMkuhTYJA9yv2Lo6CeXafVW91x9sszXws9Yh3xWKpuDZqA6qhBcBUro6LGJux5cY4S3Fthfbz3vMm2Q4gZLsA8n",
  "key33": "2vs526WLEpENdWgMxan1cA5KrJQZVS1N13FygtXat4iikyytJhU4vbGtA9CQA2p3ehMCLFpkm5k4Tisf6TgK2VqW",
  "key34": "4fCWWmcqum2ryWSYbj3PqqxkBYrxDqyVNAPPmocFtfr2QqCAaRqx61CcAy6BR2ki75FY14qi9kkJh3SFpytafFv",
  "key35": "DjpiAeksspLFdCmt1MFg8Vu5MqRzEyjzVmj1KpByRHGy4vKSF4Wmun75Do4bi8Apb1EheN9j4kcjRvtQkYejqEL",
  "key36": "4KK6mbng22FXmjHJcqnzsz8NaKJShP5YVfQNy7vRJ94EuPKBatjo2GwfYaSD6HGVBq13TN1i7oJ7Ezb2oGqiDTSH"
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

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
    "hvNyP17DbxfDdssWRGr5ofoNGfSUhYnVoaoK4ZNFAe4RYqCQQoVjP65Pxr3bok23NrWkFPFXogd85GR4MMNHyZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61yDTXcqzreaiTNGE6WjGPnMurck7y8zZyMEDvjA25vY4U44i5jviNt2C8gxTcQJ94V4wxtRWkfNeNYcuF6HJwTG",
  "key1": "2g5vjkGA4K2E4EaLu8wudxM59trCoAxKnbfK62Yhjse3Weovz7PZU3gT7sp4rr7ZSzNcCe55FN7Dt1Jz6gfCeg7T",
  "key2": "627YFWfrptQRHNuvhGSNd6gN5wvHvFHX3kqv64x2k7en2wzVQuEEw23ECkjcXCCFbfEsz4hFJHxeFoKQ7AB33gDh",
  "key3": "gkk1CB2mWNDiiQn7PAdsEvAZ1UycFDTRuVC3WfamVhsD7sUN2Uc43z5VrWMWYiQGJztTDvLC519YqaMDHRmmiXk",
  "key4": "3Ps5Pum7UyvTH1SF6ZCgRp1yUZrVf5Ch7mKxGXeanHPMmR7SVR34dntqTU8DyCeJCxXDCWmeTfJUram775JjUSV5",
  "key5": "2B399Gs1QXJriQ3x6xGXrKvjTkT9KXoyLZqvnjoxdVhXEbebko7xjfn6bgDLyf6iB6ut4VTw3Z5Ar7saXgj9ep6q",
  "key6": "3Kr2GNKD3iAQrCTKzcKZoZdpETcabveMmZZAhkbsqKQY8p3N9Fto2Bj1orHrxeWXENSagdxCikn75qJAAJuSHkfL",
  "key7": "5BmWGZA7eNw1LwjRMEWrWTUaLSj1cttCpVgrgt4SRFZneiLQdbLvi4Yq5R81CfbmAbavjJEvhq6pNEdamKMfaFYN",
  "key8": "3DxrjxmoD8AoKUM64tm3haTsA1b149tyHSNJWrMnzKQ6RPAomNGAcsS6Zdt8YYEzPR7Agtx72UQ7xDvK3J9NWNFA",
  "key9": "4Kg7d6UKLbprXm1tG7umWwsUvRcUcFG1QppMfqNCeYeCH658ZoafzLMuBPqp5tN1zVXow42H8SQmCqKwHAsq6hr1",
  "key10": "yKj6ryh1769UzxxPs9dEDBTdtqa6vPEK1Jck29a2vwaNuFSyLqXKZ5VKrVnhAs3jFMedgpQJiCvY2FN8smrG8dm",
  "key11": "4nSVPdWqrzavWnzUWr1h4zz5uCuLsLE5Bk8X95aM4LCs5VzetELnhxa4cr5ixam65ZbKhaHxnuGoXvfg2HVarRJ2",
  "key12": "5dgcoADCgBMYoJDPzftqGLWgFBbVGZwErxs3pSHeh6NdKpoAxYM4Fof18ky5MAVNz5FVoytrvtjF4KnVuLpELn5b",
  "key13": "2M1XiP9j1GtBwcr49W3TNzombo4RVFwceaWAmMqXhzHMgMSDHukkgaBxLUVL2YC3RZ7k8En4jMc8vdFpStgJgWaX",
  "key14": "5RjoxvrC6bzuPv8FHFtkA8xisM4jJZEoGDFabcSXgipSFrFtHWeudXfpMBVEFqZPEWCt8ztoKzfLYsTH7QzWxMTS",
  "key15": "52SetkwnNxMdLeft6MbVrkgZdL4qz1PvaTuSkVdwJu553AfYYiLYgRWk3j5t3qrb7SRh3LRBD3v9qFuBqKWhQSKD",
  "key16": "QkJ9jGSuUAkCQY3ngxVvyf6wHCNoofkpEtaByVXyoXo78MjZA56ftd5z9RMcGrRcwZ7QcJTDjX93gmoxVWzqYPV",
  "key17": "2zoKZtUDnHvH6rkz3Brm4PvfKCzVf4iT2LfLNaPySkxV9yMLF5AN3AXDCorzr3zfC48ASDWpcvStnQWrQ1Lvut5h",
  "key18": "2oKy2FSDM7R32Cg81u4VjoUVbYqjrYRdWHKvVH4UA122dM3jNznV9tVKymimjRwMqYLfcATASBFx4oy4QCba2pSb",
  "key19": "2a2X79D7Ve3UZKRM4xfcdHYcVXUpcYBGfWSfdCbmAu8BoS3R35sJRbj5KQ4CanSv4y1tkpkhSnaBqtNSjpHfFo39",
  "key20": "4Mbnwa7SjVWvrvHVUrxEgsdZmZxtcBMTowXQ3y73WKNYbfZu11GAEHeb2JynotRaJH2CV1riMNAE37srvEN5ogSU",
  "key21": "UEnkNB3u7N5TnmKjzxEpwBaYWydrCZJCUrJxVuGrbomnj3UM637aPkq6G2RoXrqyobQdGffMkSyCDtw2998fn2G",
  "key22": "VSrXLpNGPbMshkFQLzceQMQMF8bKry5rMrjgfFzJJCjLT5LAeQptSYKQy1GU9cXue8LytV6WRr9rn9JmSzV6M3X",
  "key23": "5VCj14UDbnCoxZntivRuFa6ZtHUCuSU11EcPgNoHMhZqKttYtFUYQLbi7SWB6y7uYmyTBpQUeWVqdb4G82gSsw1f",
  "key24": "4sAuA1mgJXVNng2KqGAHJPmGtKWQDTWoPCR82SSuZwTJuiMQmAE2bPCgTs9FWuzjX2ALKwa1BVi43rYhQKV3yAYp",
  "key25": "TkwZDH1KW1eJasXYMYZG7kCotcky4qv4BTjrjo6vsDHs5mtV57bQKVBtWtSek5se72LC2sJF3ZmghbPBQaKG49c",
  "key26": "3mYum6yTGghAAJmc8n1177voA144BphxTYBKx3V4g7688KHyLvNEN1qUvHu9NuPoRB2B4Do7rzWVMg5gqpyRqGWP",
  "key27": "28LRkv7Z52zbibUwKPwk1tfAdtxXeJr7sNtjXozK7uF19NEVQKEyE7J7PtPq8xGcysgy9uUMWBftybgd3KXErX26",
  "key28": "3S2RNjaLuk488bz2PJt52hmgFjaoEmgYr6cxL1gLZSRFosjUXjrNmfYSeRKCP6qxgbe6ztFjw4M7acVmgm2CYgWC",
  "key29": "2VExXxtGQhFhtthr7S3j3R9RzHdvo8YVRZqmNJXxKU4pkwq5eoveusSwmjcQRsYN2NJsHKD7L4cD6KfDjbbto9qh",
  "key30": "2xKcPECQYJoCatyLReEVUWneZX6cXM7mLTuLU7uNA8fioqpTJGdL1D3dMrLpHm9MAGycZ1HuVtNw1PLCGKH1ceHF",
  "key31": "3KBoAGDnpDajwTnZfK7sXy6my3S75exU4b1xz6wYft7JcfETWzN8Xg15TK6x47sd7RuvubC43sD3FkRB5Y7wD94c"
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

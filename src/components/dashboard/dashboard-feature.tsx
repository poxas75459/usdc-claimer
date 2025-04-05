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
    "2x7qvBCfpwsnrFCDH4FsHYTNUFeLKhUBmK953sZ7waYZzCDthw8i6EdthF5U2SWZX8YJHPA4RJAQW6TyeF2WG5nR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gFTzsrFRrmAVM8dzDvbvQmuZvPu5KQCJT16N1bhwohvDRrNKk1dojiRxiGgHPaMVyqGfFg5aAGmbHtfE8pfSzgJ",
  "key1": "s3CREyfZLxnRLEnh28jmNG392zzfs5AgXLX7P2z2TgzuTbq3SP1dBcBJ929BQoYfLyCjcQJJ55xUv6WMoFJ2oSA",
  "key2": "4kq8rqEjWtc2dbrf6DZt2a99hVogXLM1kbgZbnvkjc9CLKihCJTUoQqRrdTYSTNH5jZWf3Z7PWTnu1nrfgzb4KhN",
  "key3": "4tzB29euaoJsMmXF193Qte1QYR2SdD6K5S8qZ18FKLadfGVFf2hb3krhrMWdy4cFutvp6KxUF6M9vjuHGNQP6zdE",
  "key4": "2ZRNYFvhWbAbWzPB2jMgjrWBhqN4w5bffonZrHmdW1YtayXwaaYVPFKpLdSrUCE6Uwuuqo4EAebYs3pWYQ6NFpfC",
  "key5": "4mnSuK1N7o57c7dDKKDt1YyJqHMoiu4Sau3Se9BHwWUqQzjeTurMsNkFnhL6zgSFzzDsmgh3fajFaUjjdSi7rkYC",
  "key6": "225DjQdisXxgTgSS7F92nwZxdsKWo3GJqQtYq9tZrspbPFKLjZFb4vNYUWqPi9hcv3tbNC2SREmDjGnf8MCzQfRc",
  "key7": "2PR9nLCt3YUHB5t5deqcTnr8hq9NnzvQmnBsLwgntAvWoJCQtfsfLJnoEnQC9JkfovbRHiuoAtW2Affbjqxwtsp8",
  "key8": "511UnAhVWZtv7t1yJ6RKmTz7xcESaXNktRgG19nVLKpZsNJ5W2oBSQdTvVGGvVEF92FRnSnWsjmQA2Hvb9sJUYuj",
  "key9": "4Ro7AydjuHad4dmz44aYy9CLm3XAaC7NeXFNJ7ymNLariZ2Laffhn3heS6vfHsWHtRzMgAbuppfuRCT446Lye7vN",
  "key10": "3csNBodVCAmHUUXbDCLx52n7fsxQrZcCwXHajudbSmEamxySrcQ6CaCnFEVmhdjbsWak6Uk36Xs7VLpw77ssSC14",
  "key11": "29ejPyro1MTg5BvmwqjXY5HEyNqY8BPz4EpFTetbx76eo7rdvi9qPvftAd4kVNNokhxcXUK1dryyYMLQhVUcghCu",
  "key12": "2QNW69tarT2PsqA833t8sTW5G55zbrX8LfUVoMdqvJxDdGWzmrcWy8Rv634tGrSJPBw3hu8BrxnfQFWT3ZL3hRXx",
  "key13": "2xYXRqxZo54rq7o5emBJtXWbC3JGJSpPH33UHU7ceYS17rCy88X1XcAZsSC6YfkH96HCNdmo313JyFYJzQYmVSZJ",
  "key14": "3bSoYKwaYcvz7tB6Xpn6E7jnSoZ6tnHw2YxgUNsaGNquwybvomxomiJrzJjjtD6jXUa4NxWBCrSoYUfH7qDGsE6u",
  "key15": "4i4EVhN4rePESv9yeiAg8z2Lr5Y6Gmt1Zug8qkkRSKUXWEWrUk3vk5yd6gkipktgn15bkvQNZUfBhTbBpWbkBjWA",
  "key16": "2jaQNvfoUT32ioxQQ1BNzdioVs7V3Bb6xmmrGNJfrWU5QKMWaMJwH2yRX9xgxsrGNCLqb9RxWa217oM71F6rniHX",
  "key17": "25UzuFqbsx8pG9zznsRK5eknqVsUHBRt4eCeS9yXhWN6XSowiPYHUaQDjzJAzQeBv9NmsESnd33CFUwMtAFSue5h",
  "key18": "5znpVTjLjkTVRfZEqhGqH76FY1HWeD7uUyEb4RXNkmDWmA9Qt3DZnSusxLgRaWJq8SwtKhiYT5eWeJvYCU4wdoCL",
  "key19": "4vqD3vfgEHVQydo1oW5kdLkm18SumzDekhmtTgPRQEBVfQ3mo6uZKUdMLCkfqW1QSLpxg1KUAmAeYuvUF4X1gM2b",
  "key20": "FcudeoQLxiBzKCAtkCW7KXeo9Rp5utba8hXYULcj6ikZ9CQSouPhZX4EpzvaWQbuY4hT9akvi3piA6r1n27Rasx",
  "key21": "ejdWZNi6zEcQjoT4fGH6MceGuV2JxVsKFhAp1pFWRskNM3U2zkddmSbHQyw85eF3gnb3bvdHitsTRiqTwtvHwL1",
  "key22": "3cZ9KcqCZrEnoZHomRTSepG9J9UEX1Cs6oLTi9f3wYWrxGCoTco4SYqsjbshi4pvjPXmqG48PjWwTTZ33ig97vrR",
  "key23": "2ob2P9KNry1ZqGCCpfZ12Wk7GFhUdt7qjWM4BaEpRMw7x3XWzAQEvmGJauryUSBvXMB6LmQrV9LfXDs21JeAAavX",
  "key24": "2opruBPrFeowan88tgfmxtF4gqf8ADuebgF1xC82uFjB42YveRuf3KSQywcoJErZ99A1S83A47pmEsGvi6vj5Aiw",
  "key25": "3dMfL3TXfSKqjfE6ut5nNEykMs41qv3AztEYsFs6iuaszYvdVbrN56f8RhoSnUMGC2tBerbPjYYj2VisbsAGwYto",
  "key26": "2pgFEBj1emSbfZqUeLgqYBHtboiaVquzqJDGubbwvXor5Ya2zabydKfrpGGyYKPHX4ndcLZn17NBrUPq2L8TnnGv",
  "key27": "V286EymJ4GbUzJbBfM3Q6iemRCMEw5XKynmf2wuF1NEdYuyASmpdSoNwzHzgWeE3Fi27MWeE7dCREXtu6AhLZUM",
  "key28": "kMvsDfLFTE5b9jiFbWhKeU98zcjy4H3icjkswvSAHXbUY6PTkgZBVK4Ao2DhFV71vyBtnVpLoonBohrWXJkMLns"
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

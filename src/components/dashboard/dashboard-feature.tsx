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
    "5Jz8sADrWaHHR8p5do4eEAz561c9veaj4JdeGRXn3rhtsHAoNuECfWVFA73L7wgfjsQp3eME9etERrRmFLeM2BUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cd7ixkNHKgEBb7A4SE4ytn77m1yWdDNkjcWzehiw9Tqi4437MZAPXM4rUpPe7v3ERuicHHiKwHGwHLXjufoQxNS",
  "key1": "3ToYi5owLfJ2pBESRNrk6z322kpUwrMJfTR9QKNjDD3idEcdVZxhtbjEFFnps7jMzLS6rPwHRWRuR3p9BGpQr5jQ",
  "key2": "2GTj21tu1jceBzs1ziE9yh1zzVs3xoyfBmJRG92AoqQD1a7APDH3sTjqoFTvM1P6DxMGUTTuex2aEHGh1STzTvDV",
  "key3": "2FJ6sqmuXNVLRkuEimqEJkdDV51PQ5jLLZLeccC2wgA7g38cN2sXGsP78gf7cj2Rd3wvPeFednbw8TBRmJTLWhxQ",
  "key4": "5c2JYJJx57HKv6rXcQ21qxhnqgYwbKx1YoawF6hJJakTb2y4c5ZvVs2fFrV1hyW3ektsUX5W9cTZVP3FcqgyT9e7",
  "key5": "2mEnSw26MmnvH8wQBP4BkwyKQsexVNqrXtwxR6T6KPm1hTHmMWbaQaueqir7Aj13ecLPyn3P89LVKtf26FFCLQHv",
  "key6": "2WNh5nqdBng5Rfk9CNfBdyzEC6fhBdHPRpHJMBNZ6432BWjK8Mtk7xLN9CKwp7WqKdjUCSYWgtgsz7DGswDw2YBa",
  "key7": "RXGJF3hr7n3ntfxJu3xyow3hgEAEE3TR9qVxEvv8YqLKWPYHy7mUop3EZDJshcQSMGtDkR2TMaR4mZzbgoPk1G8",
  "key8": "5sjEN7HHMk7FM1qAGmztAUdXFESHbVEozBgcjoECfc6jbS7sVtafC5BpDr9xBmJA633992PbURdLv2GWByypXkp8",
  "key9": "3CwZrsJZtjkLiFngApL2QKqYmvcwgsfoDAyyEWtNeXRm2ib2dP8SEQqqKTwSjzRu4HBCnHzFfGXDpUQm4qHCD5Bk",
  "key10": "3qcHmeQ7cHNVsBWeYdxVZQUWsXtASyBsPPL42HVyVZsa37PtUNVAvcX154stD9KqW8sn2C81LUb6b4dn3iEnUdLd",
  "key11": "3vDFNPPPvwERYHD9obkBXSJsuyGUj8gCvx8zELTLStVMGrZN5V48FcRJeJKciurvNUV1f2rRKJAJ124YSDwiiEkq",
  "key12": "2Bztyv2iTVcTxwVo3yaxZAE5SRMUixL2bnT74y2n9qKPoVmAcKYv3mRazvwrarrfTHqvXBFqBppVc2QAVmmVzDvj",
  "key13": "3sQzCq2qb9njBrQH2CUpyA8FaHQuW5jiaLd9Jp161jWJ1eJCk3TaP6jaDt57j5xvc2QiNDx9kZzomasu8X9L5d7u",
  "key14": "3RPxEDJpjZNczcfba5ydzJAcyE4MDHMTb76RdbGG2tEokwwMnqFYzF9xC1SLcUDXSycoC4vohq9B6sq6X7LvGeGo",
  "key15": "4iUkCWaaBKTanH6LyfpmhGv3v26NvfEw5UTUz9M9f3RAgwYXk776DMrjdhCdkBtP7kcxLMkHVE3zyndgquTw7DuM",
  "key16": "2FxYCZB5w3JBWVoo4pfs1H1CWm9t2Kg9LH1TtQr6wCzz3wKCyzjvh21wGwcGKwFdnV3bUBoTqGVBMYRqGAmJ6XQH",
  "key17": "96vaz2k6HSFZDorYAde6HKWU5SsheycCx3DqVRjjX8GZUZ7QWyP2wNYLrqxbQK6sBh7Ag99SxkoJTzMJALV313G",
  "key18": "42UMEdGfeyizJUUFLj6DFf5TJB3XrJqzyYJZ7U4a6d991jzQ1dmnPpCLxTgnhPd82wvi3kmXvm7o9noXY9FMr24k",
  "key19": "5ZJeKHzKD5Em8jdbKQqnudmo6MkjeWXa9CpHQcHgUHqVDTby4q4r7KEWWzmNFN4wjMcYub1Sh8fHw3teZ9Y4xix5",
  "key20": "2me4UWyEft5X8C7dfCyVV34kfhsPpzm7iGnt6ovgwRciVADyySeapu1MaEaJ1v7cEaEaPbu2m3pfzsjJbjHAfDki",
  "key21": "bd929ysPHoBTKQgmacELCDV6qgL2LMS8mcXikpPMLJUjdZycRA8pqCfmS3q71pNgqoNP2KHnQLVsLrDX56FxUZd",
  "key22": "3iPxEaEjnTNupNrvP5EUZ8soxJqnwckqGKV8aMXr4WVGWqcpgcL5a8V8HGDp2tZkgpXGqZU19JPwAWqTd6PkK9yc",
  "key23": "4edGDQypitrd2xKDksiuRUV5wi2fc81H5WiSWxRsFJzEFP1g8gqr2Y8sPobxis87Sy2psL7SceDyUA7bkhTFKfrb",
  "key24": "g4Vjri1DCssVfaXmNtLUMqpdy29CUk7Wn8WHknjVXNJwp9Firn1wcNpSTfVHbitrp6UpN6oHj9u5kbisRcJ2E8g",
  "key25": "3gVHrParrZbyLw2erMtEBxnXohNAsvpJD13soRH8pDs69pn6ARFsMhukpPBdfg2MBEh7SJddToEZBkgfL3BcjPsd",
  "key26": "4o64q2AsMArjQrvnFAxVdVTwPDqCXQcu41G238n14knEuz7uG5M5zNfcwxbAoBgiFWxmrdWP18dMCyLqegeuLwKA",
  "key27": "4kSTNeTjvHXmwyto4hjonMXNPqpJjkTmbAhTERbpHW4AgM1Ai6srwWX2Fey8Se1pTfuAJwaPmj2NqXhKnFepNEv9",
  "key28": "333Qcdc7BPb7xa9g6NscfNb9CbJA8zk6d3n558jo57xgrgLc5SrQQgpkozsdmEFhX7A6o6iExNYVnFcMyLab5KmT",
  "key29": "4icTMYgNHowYZPwJt1riuFM6jqyrkJEJTtPAH15BsFgbuV4ZEWZfzHtMwJUPTSkUgCvF6G7EvgBx1n2kHiaL54TD",
  "key30": "2U8oC8w2hn5GtncXo9jUbUX2fYEznmkRVpjcY9VkdstE2T4N3Ey6tZmGwAAxsBDck3tYhEaFZJ3mVzBy6Hm2AJxV",
  "key31": "5xez9TBhwXEzroxgNpMZ6Ss9DxUj6t78JswSJpakPcPKjLRv4UhopRiJUK4dzpeWk9xwviCvTeSbJH17yH8JHwTf",
  "key32": "3pH4ZjYoswSafNKN7eTS8tRktN9YDdqPdD6dTPc8Ab9BbaFvWiLLXGgVs7SSf3uDxbywE7BDBP3Jb76kp5U8A8SH",
  "key33": "2Tb9wXefCDZHNMBLgFPVYbkDGQ2ss9tf7eKtYgC2pnRWiASHh8mhimSVX6eiDQkrLhkuvs5nFnDXGgsau7iCM8jL",
  "key34": "3Mz8ZAZZ9CLk5uUbwBVyiZsHKvdpLiaJJpS1gWMDJCG3SGJEMMowRtBERp5fDHa4K1PVYog6n8SxeMqfFxKJk8CX",
  "key35": "3fWnkjqoLgKcwLUpUYx7yMJce355t24dZS297zWj7Qjc8Apw3NV971KumP9tCgF6h9DDBVtqFMA4VG8gwGm6SxTo",
  "key36": "5BtGNEoom3XPS5E3HtXzLH3jsqMxjLg91DLvudfWUcSXoHS3HbMbxwPirfA5443ty4dKrcB4k34TDVUrjC7gLa85",
  "key37": "5j636qvRF7K23wdSs1Vteig6kFZ95WRnHZ8qAfsFyvWnZpzVGzhYMYAUGvr5KE55FrYfbCGsZkQehpDXrJkUSoxD",
  "key38": "3L2PxnFhntueBAbQyWeiScfPQJ2EM5u3AqiuJ6z6VsH7zo8XGL81bLNkcZrEoF6aumQnun6iGxAswnzewdE5qXMi",
  "key39": "G8QmLhtmzrWzCLCCB2up5ZMbxQXyoqUsxyygvHcdbbSHBRnSBoUddodewa4h3eCaVKidDdLzNZD4N38ZC7KXWeV",
  "key40": "3PdyFZSCCyfTVD2tjVjAXQ77TYhL4nXo9EVcHUCAvRcsJQJpwi2e2g7q74uyNSCLcEHGLsb5H32shUojHfq3RNVq",
  "key41": "2GKs2v1dpPe7aD6yXaLd84MtYUZQ2WuAps9MpBdRebr9Q1zEy7m5ut2XX5pJmL4cHNnqBFRGqEsSD195wfaJCcEB",
  "key42": "jgvNwhsaBHomQkKbKTD49dRJZf8PzXwMnRaaAqMppRRdF8bNAWyWqDXDrdhySVpWhDfakRbqs3BepoYwCBPE9UU",
  "key43": "vGC92h25BXHpPcAkRusCSPRS3m9P4fnFMy8RYoXcqcEoYEPVN3c7EhjW1Wp8qBMrrXZQuNUVJoDW6W2sJAJPfRT",
  "key44": "3wpfreyDgfrmNkELordEm5K6SjwQ3MPcUprfj5mwfrRqzUuvEwX9kccW6efJYVW9KwBv5muuBfxWwpX3KaefRU8F",
  "key45": "65vfFdVfC54JDE4t3ZL8skYoQVKMj6wDhij6hTPWrbBWMaUut8K4PkNFxTNA6761fmat4pLnN3aJLfPg3CNfxDkA"
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

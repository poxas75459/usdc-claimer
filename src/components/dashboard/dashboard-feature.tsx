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
    "2iZSoUPtLz8DjgSzkHWfknqUTBQvsGHSxkoCc4Vcg6XfxpDhHvMrPRrDp9KaJNFDpNmdVuPWD9VwCdLRQMGgnmrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWmZcmkJiQE1zRtxfAiirkmosw69xvNQkTodDWyg9JFDMs4UrdPGontebHgNSTz4cPwRp6jvcM5LdNQi7f1bD8C",
  "key1": "3r2gd3XPxJh8YTPHVQmHxBQwrL622j2evrVXoLJdL9DKExznbk2BKpEwKRRKQr2NxfqBtBfXmC87mHeGYaNm5R71",
  "key2": "5Z7sTdSxn7M8AQDj4a21gSsfzgjshUPwrsE4FiQrZWfkeq3y8oS5Dpx19rUixvRUsVUANbBrsyKNDbN5wgQVniaX",
  "key3": "524CxeSAvTKZF1CgXTsy2ABYFjpbBPUacA4s5VeZD7wnKgE7GfYgCs8aeonw5aqgbQbJQJp4BLSrvrHHNCw1QV16",
  "key4": "21DBnVhUGStow1n1upqEUPtpPAHGJuursaj3doxFtGZmRHwisUSuGSq8wUGvg1xBJCE65qZQb7eWETCAvtgF5fvD",
  "key5": "2wYHtedyhmTikcJaW9994ZWM79gNNpcgTZAAnyVcBGuKFrwyK7ZfkAuCJx9hz4JLQEUk7Zswcp3jjT6cFHKf9EkE",
  "key6": "5QAv6hewdD2n5vLJkt1kC7HykX9MLmRoX3kMuU16iKusUsYEkFVf7BeSb24pocqa9ER9xQUB8GVLDvDVgc3RC4HJ",
  "key7": "4oijqANVtS2qFRp4L3rwYRLH33B4qHorMxXZSosi7Re2SB9GnaN1n1p33B2T436aDdCAcPQNsydbfAQqDfFedW5S",
  "key8": "3Eg2WoXFNHBzY7Tvqadu8z5D88Pa7PguEboS66u5WSkN9sHWUFCwGV6A133WdkXkUNsVwjdWStvHGCkJhTPFCykH",
  "key9": "5DQAR73RT4jPy84sf8a5XcHgSx3EUrTWrhG44Ys55nbXKGMducXybPLZDULN14UBKKZCbqhbaZmydZy6eKSYXRDJ",
  "key10": "5RAatyawzArXahFNCq4CezswxBSq3MAVC3NR8dvVkLz7YvoHAPHLQqMQkhA97mrXNiy4GGyVnQWYnwU5cqVhUA5d",
  "key11": "64TDCUP2AAgXDWu9Ed1wug1W7HA3h8u5ejNdj1MuX7FX8rko4tojha46QrKJeRjgpVVRLkUae2pLBwj6LDoUcmEq",
  "key12": "5Tn2pHCxaGCPTZDH5JeTRCJET1aGYcnZCBBwxUtcQTYhscAxYbqhozAgZdYkqSenr9Tah4gRFmy67rpqnGuZqwtk",
  "key13": "41E1iXC7av8m9bNFzvwmccJdbagy8aR5w6YZh49gZYKcdSRi2r2YGZpS9xDg2MLK9vMRdUkmjbLhjXmCpPYFCL2i",
  "key14": "5bSqkRtUF2m26rcTg5Do5CdmgG3ZC7pNaDZ5ggNvWeP5F4NhvqvKAtFPUVePzm8rERsrxSGDyQZBP8nV6G2SmVvM",
  "key15": "5EUBYkyAFRXWTuXmKEKr9htmgy7gcC6xE9AZTfDaDKx52qEFepjK7caracPZkcG4BsyFJUKuEKqZtWJpKGrvxkRN",
  "key16": "5ZhHt7fm2BQ4hLJpkTYAiB1XV3cZtzUBcsumQc4oJ9ic4xKVhz1iiiamJ1tx2BGRwFqCUnNbRPwN5g31gygz48a6",
  "key17": "4BeiMb7hJhpmMpAvST57UBPsovTHPVsk2REVCni5UZiqed45dEpVZmqqKndoiiM96ce6mtKEC7j7Kxarr9bMJcmg",
  "key18": "4EAnaDYjunnAuJ6gqgp5sMsGgoL1yxHFMS4kqQ6aBvT5asdkLumQbW5HedBxcje9Cf1j8hv1tBVGrKv3vjzokJqZ",
  "key19": "3zSqxscXTLSD38vxLzRLoWFsvCHupYDJ41xDQoxDDjvECdq14dWnWWd7CWH91TrNd4AGKLKdpbKEmAuWXUzNwVVj",
  "key20": "2v7zuAfsH1mWtB3pH6Hg2VTZ9jxiDjf9DoJRnSrr3bdtXp268TbpjVxFmvFV371i3fg2JMWhpD9RkRFEB78k328t",
  "key21": "23Ejxez4gedsD65nzjEwjGF2J3winZLFv3jpuowiCABHKPCmapTxFFsXD51K1HUu1dYejN3KM3oMBBjCpcwtnfNy",
  "key22": "55BBhcZyneE8WZ7zMTzRb9JNyJThJE2pEn1682qovbS1f1rc5BP2LMMygqdDxFpx23HYBD8mJ78Fi8VDYtsW8KNt",
  "key23": "5NYFCpg9Kzm2AdSLQoUAQJ8EyGAV29ytohi9rsxZaQZtEexXBKoDEMC4xnw7fxKtRNygQhiEWwG5FnJ1ozMiy6qX",
  "key24": "5p84LaNJRfqC3z1EUzS23WUraYRja29rHMb8biisb99EDojxf1TFN2WKxLLCuG1P5dvbQoASs94K1VydFXYoA1z2",
  "key25": "4trzkQssX6cjVtmhjg1ST2ahc1jAQ4f3FBGQoBhABDeMNr3cmhz5grNqMKjAoF7MzgJJY8AXRpEzZb3HPL4YXxBn",
  "key26": "46RMxxRUARPwGhKguask1hJmdPe7mn5nrBubH8Enj2ExF5KHq84exqrfJLmbpBzxGkpxfvb22K6c3HRdkakC6Msf",
  "key27": "V3y4M9CYE69z4PZVGtH2PVKncSnkVtoG5X71d1h9DBdk5R4C177DwRDkyj7oj7bJZN5h4bsRLSgsXW8u1bBe8RP",
  "key28": "5Af45ukmvWbhGXM9GB9cmAYZfsLZYUmtJCgjMn2xUfzDEp44QBqy3cb1Q9MJN8aRBqtdSKoJd4Gpo1b6Y8aGYxk3",
  "key29": "4ozZe7BHPZBg4TDuHjZVUmtjZadHgck6Hi1Kwo4zNy84hDWt8R5pCqZ68kiH8A3vYEn8XB62rSVfHHs3e29TNAuu",
  "key30": "4u9ESJrJAMgcJzbRfyu1JvbhDmDcDKtFKoLwZHhzmRcBVxgMfwLRtzo4fohtX7n1kpkWdvg4bMcEpWUze2WLjJyG",
  "key31": "2ChWB23RVUcHVtaZ3vus1NWXedBRm6pUUjD17PA6yaQQzeDJfShbKPC4rwooD2LQ2zGqXZimn3oz1m93Gohq588j",
  "key32": "5uqihqe6GtMdhY6eqbstzkY8RRqJC9hiMGHJv3siB2MqhuYNkbfWHLiVaSWFSL63c7zh4wS6JZiXzUQWBF7oKWDR",
  "key33": "2YyPtDjqrMVXDHoSzLHFLdDFHkYN8PBmGGq1cJU3g6brzeJqEj94wJVTYhNJEwiiBTdJjBvf1eFsagm8D7wHdzZ7",
  "key34": "SWYvBZgxsEFZ7krX97eCzwx3e5Ws8AavepCvVC6qcf36nZg8EamyXGgmVZuRNWXje1BA4FqYJ5KGoAGqRc8nbGr",
  "key35": "rTt7rSe26kgLfWMD8QuWzpw5bJrpU3ex8ArZcKDmsTZRMGkQgrHTg2j1zCdQFUpJDcUAAMTSuGitk8afCB3SsoN",
  "key36": "4eu1KM2Q8g8nRYaVEnbg3HBBg1op6FybdTVe8q5su2XVkZsNaBGw66Wv3tAynd5kuKtbuZbBRK86VcZXwfHDay4i",
  "key37": "jV8o83ogZSr1aVV2f74CbM4TuBYDmoVDRRg3UwRD2dcqF3KRwHt6zGbDtsrZC3mdSWhFYtXgkaLDsfAbz87SLmV",
  "key38": "3Yhc6H2aBXbBYwoxy1gbzawTDjfVCgRw6LbcxgzkvXSisXd18nznpDE2FgS1FHnSFeN8vcHKbDJAW3k4XBQcRfpf",
  "key39": "5o8qcfpf2gfNdmZm7mkm9gcFWUNxL9K4vDfkN8eB1e5cft3DASfp44s8K8Mzm9w8vtNUzUs8cKm2QTkN7ykXM4m6",
  "key40": "3VwtjLetxR5RPVWRg4rW2mqUHbEwrgmhiC3ZcGbemUSLPg4scndPVpjpuNcKjS3R7ZtUXkpet5nosC8BdqtFHeSw",
  "key41": "bQEpnQ21J7XxE3WAgkGiiJKiAa9tP9vFeb5NuAcrty7mVgzaUCzr5RCWLoJBJjDu7W2bG3WuB6ssWZUdg9Aiw6M",
  "key42": "4rh6xj1C9dpY15EdRkakMmMDp6mkSr7uzRnsnEAxzsj68fnhHkZumhiiVvAQ4Jpq5BomcDhMgBsYr9pNrhwSzDtK"
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

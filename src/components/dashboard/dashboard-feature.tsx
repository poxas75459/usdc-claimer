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
    "21YrCNC2V1ftw3r3BQguHEBwhBu1Jxg66Z67jKfy4oFEy9nTkfVgkjxKULpd2Nnr17EeoWmThcKmiW99uNJ2p1u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ej7mC8QLNMYTuXNZYwzJajna1n918UuaQoRmvwRyF4hd3UKvjC2uGknTn5wbcLGm5KKVCntvABqSb8oFkDUriNw",
  "key1": "3iy6NrtpgJqkCw8B2b8uAKSYBZxRt5MyMTAMqjSZUMTAyJ9339hzYm6KCrvz3YFcyadxtJTDUToFqVXrejDxr6C5",
  "key2": "333xD4WVXQ37uhDoUmpZE8RkMDyBx8tSH9Vu4b9eisqpmCtz1sJwDzZvWDjPjzwDkEgJUHx4Mrpkd2YnuHdf8PU6",
  "key3": "64eFW8kcU8EYkrcJHCHWax9NP9G1F8ZRKY7azUf8w4T4X3ztd1eFEfmRGPspYQ21jGRnRqdwQLwyZR8XBQmUpEdu",
  "key4": "5hPNfGb9WcgTWw6t4wS2q65wATKXKZw2TybB6FRp7LxQMHQBuatTW44aHQssYurRbgYc1Jm1rEGgKXaKDTwtkoF1",
  "key5": "4uBtB4yrFz7grgCNgFLCqhkc2ErmzXT4Nrw9XvAz6dFhn4WJrSn5yJPKxDTThXGeGErjaNA2LWP5r1LdYGS4kfPt",
  "key6": "27TTbtD3YechJ7TrSAPiqcZCNM9AegKeAueZctKCHXSXhqJdyK7RGPpEfoDvQvmuYsBTUVGUdKoNfuSEht9k5juB",
  "key7": "XgMXUxR7SXjP7LLAGfcoiHGRWPfhQB3z8QTufMB4HNkkZ5crDJu8EMhD3rn4WvdXwNnw5GgYBiomVi6cDFbJ3Dk",
  "key8": "1NZDXeyirAeRyooxhiw6N1qVku5TWiMGBEmkg84orazr5PMani6N1E4xQ2aP2ctCbnuo39EBg6zvgby4EE7SQLt",
  "key9": "V2GAjZg8hrRzFAWdvgRJhguTcZ7ifXTBotk3hpetnxSZU8dukj3eU9etPa82bnoZDWYcGsHAhxE79WAPqAKJutn",
  "key10": "3E4B4WCNYygHenzP6tLGh6bdLuXqjRYzEbU9j3j3zCZEjCKyiEU7HobRsjbBeMhFHbtWR3cw4McoSYx7XuLRg3c1",
  "key11": "45F8F5rviSkbksrNfdeBwgFZ2CTh4BARi926b1tUF8Dt4BzeC47UfqkdpsnKv1tFV6sH5ew17a3xcCtxLqHC15u6",
  "key12": "wjXfp3DMnFaue49XT3c263Ka62CzhGNrhz5LfZTMcJHoTfpFnRkiKgL9RLW7GtxZ1kY8Wh3sXN5CPYBEnH6n1Cm",
  "key13": "57AFdfKF1D8AVYH59PseKeUQ3NcFnSrvFEr8qc1nXf5PTf4MHmYDVY6EcXB63HJJwx5ZxnrqR7FKaeiCEsdddior",
  "key14": "NReMwM4CqDR31aHLY8ZyV5mukwEGpej3e95quNv9xdsfzu9dV9rnofEbSobzm9KjgavN181acU3448xrSbemFJp",
  "key15": "2q7hWiLi6s9pvFBrMHTg8KyRDPADK3VWvAEuzEC1jpD5wZ2f4JkbdMzBu2bjDYnGvzGtpAV6VDU7cPfYMXayi66w",
  "key16": "261zLCNfdtq5Q5G5GyXwecv8pFzmKFq5JRvH9Z3Rhzh6wwp5armmpBUy4tST2CG5oEGbxQdzp9wVEKpn8ZhyUcgn",
  "key17": "5uTBsmHXLtDfTSKce7FBjFxTP6g15tPaJKyRPEikX8uEhnB22ZBSKwHA7EHEJKGDeVVP66mxh3cqpkvmRVxrrT6x",
  "key18": "nMTsk7XPCxjkVuj7e8yKCzd44fQoy4tTf5u152xEiEAHK3eWANQjuTrEw2fB4wGQoHBGNogtQeqzyse4DHTGCaU",
  "key19": "5BuTF98SM2ez5uGQk4F9SoSBazWhejgAxQf2Ny48YMjnpVnXkLbxvm38Fdyny4Ly4e4QBQ9NgzGUWFNS843M4DR1",
  "key20": "3WRwLS4dHkdoMsU6Yy7QJiQ46FACRQKmcsuswTZ5Y2ZbaK3nfXPMpwzAVWf9pS8aRsZ13gSSV1inzP94Mu8aqcts",
  "key21": "4QMXQLAiDYZs5AxVyotJ5x3LSiNF68g5YtKqXw8bR6RFTvYpXXnDesSPgTErS5JWzwmqbNVC7ZLdB4oE2PDL49bJ",
  "key22": "4Wt73rKob7EJC4Y7bWSTZsqeYvELD7QMcFebd3KPyRkmBjaxsNk35boizN2rCRMpdR7w7eDRdxuzYwmsU53Rw6Dy",
  "key23": "3pe5gQV976FoMYdszvPJEgDQDZrv4izHL2pcFFCQqu47Ce33WxgJLr7mUWrBL7VNavxsVtX2fxdm8WvRCydzCE8b",
  "key24": "VAiZFNqKRKTxxoJD1YujC3FiBB9p8zXAVdNJsEDTEJB8p31CF5FHWrA4AaznPhkVjbtP9jqHj8qek7XVcjw2s84",
  "key25": "4Z1384cm3CKAT3ipnXSvTxnwgGveuBBV5h7mqy7JrVLHfCD336b1XrT1FD4RyHCZRWfE9w8yhbbR3gKVk4kAG4sS",
  "key26": "2LkpvTBD163VPAJsdjr8npowDamxd9v1TPP9zhdkhpVDYBgswbcyCiaZZZ1PnVaEfSmoRRcy2kXpV3dPEtGeRGxn",
  "key27": "LHXAKHtFfhLyEFhSFtRKopdJsUyfrEewwM9t1D6yQheos7F3t1cW3VAjwHHbs4kCJ7dpiFcCJHxiFdWouZDvdpd",
  "key28": "57rYcE1A119KDKXW55pj2KvmeZ1T3zN5yGLJE4iRC9fPb2qjLCeFoePzD7xhspLeUE5SpHPJ8y36NvjGNjE7rFhy",
  "key29": "5Tr2uHmC2LFiDLbpR6fxJcBEU7u2sLrvwybUN4texGcKsFwPbuDTMArjPt6Mgxt4oiXp45e4zxVM7GVo86PzDGa4",
  "key30": "4NPLRyvc8iTTvksXYsNXB4PNeop994ccAPTwxNxvEc7QvFKnvmKNPaVGvHfvYmhrDSTVKuS8JrkQFzvZwZk2PL1D",
  "key31": "48nTwNo4nS7PvbcLdThNxMowZGtLdLtMA5Pfq3f9VeECCYiDYw2k32hds2MHLkCXt4aDTKE46NSx9pNTggwuBSZe",
  "key32": "3pbhBCnt43nKwgzzPsQKuF7kzmNRLbpJ6tggKDa3Jzeg4Q8rfjb1XkUjQZ9WApMNGG95sKMysntX7wN8YVUXCQos",
  "key33": "5sJkfJPzeVtY6a2vHp7RhHAG4T1PiwZbCPdG4X7BhcK959S4oTqRUfgE35sPb6S4hxaH6mRdocqbSv2oPp3uoBbk",
  "key34": "j61YjgvZ2UoSGnW4gUsR1uj8YN1jMxK1TpytYBaYHfN1WNUBRDBjrQ1epuHnzarAsuHwDWQDu638ewGVC4B2dmJ",
  "key35": "3Gf5X3UUmo7rxQ65zN6DoMD5SbxDyVMZwRY1irPxpwazaDzqqWhn6kQawj61dToePP5PAdMurVC5w5JpfJ9RD4ff",
  "key36": "4UjxbhzN8fFDgMqEk3RoxBi8A3SzzK7pDjsXSgQtcTkQa6CAY53qWBBGcERPMtGf9pFL1r3eqhpbmhBsw6tJV3nA",
  "key37": "2WmCHsvamgaD7rHncEJKxvrFspn2NQ9XgB8mJSDqSokphwTDeJpCAngY7g98LgTm8uWF9TyjarecsFipKHiobAmg",
  "key38": "5QL57kLnpZMAyhBAmMf1c6vF2EKgZ1nERk8gAhATRoxFQCAzaVmF7Mp7QEvtkELCCPHMQQTAMAKXXX3SikmMUVPc",
  "key39": "5CGPp2ZMAf4UnAEP9qtf2DTmVwmWh5rkUxrmQ77HycfNrQBN4149kRac3WvaCarceW7wcZ7RPgzUTspQj98XCSGn",
  "key40": "AmyV3ojrsS4CuPSzbr1jLFfWpWWbL95ZLJCEKwbgcMqoAksdX1n4YQnY7SzqwoUXtHX3K9swmTjDkC3xup373hR",
  "key41": "2iEb7CyfcBSAGPtPS5hsrYuJXhCk928hM1qbKp8j52tTFgXzkJ52mJAeorfdXymUDtfZr6nhuR1YacfTwxLB5AP2",
  "key42": "367ZUGdeHaHsEyU7Vkj5Bf9jc6juf46ELk1218Ap6g3LjNL9Q27Lx3qc2SBU1gWEN4GeScWzGFrXCsKGmTKPBT1o",
  "key43": "4oB4PEL8Rmje8V1ij6xmn4zGyonpDi8eUR12XJZ2pvWV7xZtvy9RdNTfbHcEMiCFVRZ7a4QpwqgX8Am8SMLbQ74T",
  "key44": "4t2Z6LxNW6iu1mvnjE1L6EeG7e76mhJu9QT8rniNHuo1aGTiUX5VsbpqKg7aaVspSDHzjUFAYWgMhQGbfEZEoiq5",
  "key45": "3ZH9AnqS3GpJLhDssybkfpWZneMzUcgAZMTjNCqHQ4VTNKsjJMgYyRCAM6W5YTpmYp6JecenpKfnkx7id7n7brDP",
  "key46": "3FscR2WqynRVURy3RujViuqsrF6YqiLtza45Dg5wYyAS4ZcaB1V86U1x4w95VHvMNLtUuHgz9JUGCjTkDFBbzwt",
  "key47": "39XDFUF7Gy9P5LUfwpy1DD2fdNnFRWwD9u8sM1a5qK17ogDRHYidF5iiyGRcu85Dy3LEHZpCrytAc3qkQrtuJSRg",
  "key48": "3YY8NkYHjoA9xJWe1bchduFVziRWcMqxcqBqG2JeybPbWYrSD91KG5p99YGgvjuVbdqDeYDBf7KEiWfCSpsQzX4U"
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

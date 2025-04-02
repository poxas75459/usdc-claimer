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
    "KdVPdVENJriGPMQnQ4QzE4pG5Vb3ZRF8XBt5316oxpZe4fNY8boF8yVitGNyVJBWAcdLGAnZLFYfP59YpPFhmC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VH2LcjxppikUbNZkQhAyTgLurm7V8BPFXmyhSS2akSWpNHHaaECLmuU6R8Jm5pKYqsbGt3P6xR1xbTryXJyeEEx",
  "key1": "3RETFswfM2r7xj7tVeE3Rrw89tQ5AynbfUm7FhAynGqK4i2bX1Jzb1BFBn9xePqSbkQESxuhZhUYVUDSyZYtxHmn",
  "key2": "4cs41SEb21cVV7oNFL2mzxQiwmGQLVUH4D5CTGuzhT8yh5opq4cQBMvXaHLrvkpWRT1oBJvHza3k82453VT6eBzX",
  "key3": "3raiUShTSNbmBYoytXi6JJi6mkQbTcGhz4yn9FEdgANtkY4nsCSwD5Mhg5v4FbciVK2KiH3bCshirHfqWjZPGeWG",
  "key4": "2ynq1PfCKWRW9eYusDKV4ejDy1kqd55WfWCsScjjS1ekXP2F36h5Ly63M7cAAjYYhfstz5EF9h5KWu98yDMLa4iU",
  "key5": "3g7a2ufUVaNFG8Hw9h1Lxa7xJaPmEk1SSqSkGTaSmSUmB8GxFSpxJatudAN1DAWRz2XeUFoGwceLiA1B9KAFMEZh",
  "key6": "4C9G6vmavmLYkRuFAY2pREbhM1oXZwAJb6EihXmef7QyCmJzHzHApaJ4GrtwYKxK8sgnzktpyDwegTzdkUtuqegw",
  "key7": "4SuqJdve8prU9Jum4LYASeEXrSS6xZDkJnpDHKhtQH1daNdUMsgkUu36psb5jU7a3AHabBjQ1egD9SnRi2WwThrm",
  "key8": "3UNs9Yckcn9m7DSQoHL4zXoMU7MkX4qZtd9fiQJjc4LWc4y9oARXYTEorMFnwfmrrDHHKXA7ZPf6PWu9Q4pnmKCz",
  "key9": "3YyXtqJcSij1FAENVP8nyiHNd55Uzp2hmc8yLuuCp4BhJYuTGpbFLYcgjevR5UbMHCgysEPnJqPck27axvFRLqPE",
  "key10": "1DRSL3eZHDuqZT8Caxgn2dKss8W8hDbjaH3XGxJ1rLMEokFP6e5TuwcMrmzZSPPCpGs7Nk1j2usth82cpBmuPiF",
  "key11": "2gsJpaW6jYXaXdDjuh4VTUnsNaFpnMigz8GFewKsA6MRtX929duyaVckKwwJTXkKPwhrLZkNtacQQnahUGeuoQq3",
  "key12": "7SfZAtbxGYx7Rp4S2E3rKYV35jMdpUHkkGXE45noChwPEGUyKQ8zK7QczFWyKt6hWKN5d8E4mcT9yCkcbxvtKZx",
  "key13": "66qQ7mtVUadtvRdQAMxkWH8CwVxX1d82bqEB387TDsWbZKA2XiFNqDnxytUDM6uhZ9rYxVk7PMjmRztwhvDdtZaK",
  "key14": "51ZUD9rMW3SB7ci6h9HjvBmn7reo9ogLFKv5YRgDgBdcK4JDXSfx1gwVYXNnSwtzQf9GhvcLFFpEiSiW5tZTvWa7",
  "key15": "5zFZsyVTGHXW3nYuSNoLafbVMm1AQqFxwmEiT3ccTNJiJFL773UPuyopfZNutgHspBWYyXfEe2oLzKNvaNCnzxeM",
  "key16": "mCbbsvsXJueYMQ42etCRG567u3qZvnKF6EjgiwLsGsBRfPUsmZJZeXncyjqybth8opBtZngzfZp8umSKBtJSToU",
  "key17": "2DSfGRNDtyvTQHEt2nAz3NvudNRoEADYCvw5geNpvP32pyikSmt9o4Jd6DfrDxACtxDBawQxFQDS5BvJofbc3gz5",
  "key18": "9di6hKqNkuebHhtF1hX9DQD9bvP5BsKgSAb9VU4ffCkk6rcNhHcngVeQowmiKTLmCCAHWq8ujNwqwmn3d5B8WXH",
  "key19": "Y6vDWDndFiYfXafvpzWB5tk1NEoGTuuEikn3ziUei5ZWbpT1n6b6HkkEcYZWiLLmjMYa2YaXZn2CCxwnDjJzs3y",
  "key20": "5Zs5B57wKiaAp2PwAYQnVSgeDYiP6HXXJSSNqSjYH3PyRY4UQ6KF4C6JsyhGz3EDcYqHAxpa9e7rXUCNBe66hkX",
  "key21": "5QgBxN259L6MyV8DP2taCX38uVja3DeMSBeB7KYv6j8725k8zeCwS2fvGbafWEWmCy3rQRoToXvodksxsXd97L6G",
  "key22": "5UTCn71fXuLPXnrg4GJkTuMVuipSu7SfrGEccKiL7ecWwzrFqY99LXBbEVGJifur4UmcLtcQSwJLJDDJr9Te1aCS",
  "key23": "NKi6HS4RX4yGnGojcHgdtfFErk9zMZ2Kbm1hQKpaAsL6Nm6kwNXRJnC2GX9Kzsm7qqsDD9TSwZPZVyTEGBihJNv",
  "key24": "3D9Q7W6jFRZiuxR75th6YjGjbn9n1CCNBhkvXZW991DqjG8XhZG7BsGwKDQc52rZpqukB2i5Pbkxg5sRYUHqRdZp",
  "key25": "41dBS1pF3FReNdHfdbP4vXSwT4s3N1EQRwrFAYKTxizz6Q46Nc8PhEVpx2S85eJZ8rBgWsd5xsfMLtUjS4N7gTbk",
  "key26": "3ZQG6as2AFwPGwT98Ghs6hgd7Yfqe4qs655iU9JvJcGz4De9NitMjd9AUPTofm8fr3uTzYwnyYGZuH6xsT21NCLP",
  "key27": "3BtGP9EakNCVAbQ6kX9KoiJQVoHA54LYqK1QBNrvXfBAuagYSAECzNUacKrkpVJwJnXtDmknTojDycP1Gohw3e58",
  "key28": "2ggJsLvrtfY8GZG5QqvzZhZcrw31rAiuDMUuktNPqPgZym54jeisuPfp37asPkneSAiEVjrQcmiwuSDm3UZJfoM7",
  "key29": "2eCc85jcJjuWpUaTx5XfpXStoApkUDJzS6Tuv2qfzPKCRpVmezJmXf3HhPGzR8yckBihbk6f1gKU85uogwgCkyFp",
  "key30": "3w2xDVN3NCNdfk1VCvdtTx7JrNZDMmSYnEe8GxhXqQTFzgSYAPM8mEg3AiV2ohbnJRSpoXcyFZAhFSxFCbPWUFG8",
  "key31": "2Vddfnm63GsdUSPLWTneYnBuiyUwB74rrFppVPhn6QD855kdAQR1RYFA2oPv11N3GjkWWPuvxc6ZPT3H88PG47nu",
  "key32": "4Az57NitZdtGMsvvo98uBzNhB5MRP31vQ6jzibf8QofR9gQViTT3mFFCNyN93zhWFp8TJ9w5xrj4JiknyvCfijVY",
  "key33": "5xQCad44qmZyYSDcb92jxVhyJgN83bwPzec4KcSz2BL68ocrFogXE57bfUPV6U2a4wFK8hybBQDrz4cv72vPqgB8",
  "key34": "JwgyZrREeHMon1EBZcoPLyvpQdeyMn2o2utZcwtWgGDf755B584oJ4ddC4dyRJxGiV361iPSzPiCDbsVVQnofdA",
  "key35": "4SCKFfzzMKV9tBmQvnGp88B2rjPWgV2DMVxzfBQGm5gVC6NchxcX3qPwnfZP48nj83ZtRcFjcr1UTwjF8RxVQYFo",
  "key36": "5dMEMHqfyBU33QfQQ4oXNEfkaaqt7ktS8Et3rEpHHnAf362KCgXJoFDNWakMt9GeN6r9fV6SeB9eiE9QhyWiioXM",
  "key37": "2nLbYDcD8bL8hCxC4GFh5DU7DJKGk6KRNM4bCVH7wzWEiHYep3HBcAmrBEza5nt6koLkTN4DebaCs6Hyv89NinT1",
  "key38": "3tyJW6CB6Fp8ftAExCpoHmtwzivhPQY6EWSSB6mAyKv3scS4A6CxJ2Uij6ZHUD51cGrwUiPb2FAM86T2nxaQa7B1",
  "key39": "4SEs7g2riB7oQok4GMcSnoCuCbMAGHKyNWTZaBfsGGq3tj2YbbWLW6NmDgVaDNdDPupewTp87esnqVaC8hKfYoD3",
  "key40": "2f6zktUWntho38KbDYgbYFk8i1jEYVt6mSqxw1TYM1yVhohAstCnVBtT5WNKW4LaZDEjWagcb9xKTP1dg3NgPHV7",
  "key41": "5LpFCGGnSLUh6NdxjeJhFsqct4QkGS1GpXqrb5CVLEBKeSZAqHaDSDAePayWhPRXoS4pkNfNWcq7F7whs9PHSFJj",
  "key42": "4sjpsaD8Ui2hRHnJbQYXSJ6UHFP535scKJGfjRxrArynuDCoMG9cYgNcsz1RYPhMpBhNActoD8NZWmpUvjHwV2UT"
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

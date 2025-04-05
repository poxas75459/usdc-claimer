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
    "1Cvos8DZncfwqMsHmy7upTLnBGSLPiLCQaMcfL8QisS1uxk9BatyiUPBJSZzekPtgEymd1aP33YhQajhiCFE1fE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2oagD3ePGRGwvp6sSwBSykpbXBLYx84XZBRCNzymRz4JFPHHer5YKMW4WDf5sbNjrZthpXd8BhFLTv6a7MsQfE",
  "key1": "9HjZQn5pMk1dR91rH5H5URuFnDiZPMB33EGEh1Kspy1tFrhTPvY44DcoKLUaVNVF5Cf4YSeSm8SSPrtfYexRW9v",
  "key2": "5KmyMCwFjp3ap9QU3YAPrKFRtxeXja6tseKLDapYhTiu5DSjEwzrYa4h2Hmjr2oLvo4xR5xMuPsrMAkVuNre6Stj",
  "key3": "CaaaqFxwgbjZ4ac5Ubug7kSRmQGzxbssmXVK3KcWnLDcZ9Jx4RtU6yKAriPbuuajBnCh7GEsgdLnFU76NjZ3bSb",
  "key4": "4we5ECRrxeng8seG1WBeJjuUiy7jY9VpUXVb3x7LmK1NuYSAq2KGJMTgApFRQPE2M2oZRZ8J5YGdzWv6wx145jSK",
  "key5": "4GAypep9MnFbvtyByMvtVcNkHjbEErtCkDe9SqnNNKWBaL4s6yZQ2fUiBLWRnTB8717PohqBtxAeJvCyErMeZApJ",
  "key6": "49a9MAswThk7HGCNWtHySQojxUWbeTFvMtjYtaCzC7LK2W4tWFnvBnGaffF8ovJiGSJxHaa5vY6Ukm8DLePHcAxE",
  "key7": "2DWq7JFUGZV9PinzLkRst7nAWtuZLbcxtoXs6wvZEQ56RY1SByonC4JzDp432LeV4hEca9svHe3Y9bkAA6Pdss7P",
  "key8": "62Bm74BFibkkjgsCmHayPJtABT1PvPCP9S899PRnHDxxP9XWUoQej16yMh4Qw8e9T4ZLnYb316yNopSTBYqCXCaJ",
  "key9": "xAyJ97K7r1hZjNqxAXKWgACM4E7s4X8oB6gfHvtoXkTPCqL7hxwkUM7KzQCLD5zAL1EZ5ww5c4sHDAUQ1NeiZuG",
  "key10": "2qZwqFzCkP5Y56wQXNhLA6ktJR2qGfNmcGvFLjnpEgpDeZGPXkT62hyspdH2g9bJEkR7tJeuaYdkhVEpNQm7o8TV",
  "key11": "2iMGzUSbrjZ5KLRv2gVhDdRiQqgLSi5vfDvmD4BSckKjTNsFJM2EH5WQpj8ZJhgJ6cDmQQ5wouiCB3ZeHTkQCoVj",
  "key12": "43hVfpYaStPp1b4c26fqC4yHRk2dfT38a1pCv8diB142ZkAYTih6JzxxVikRHKhK3bCevRvqgZq1zCZ7LztEJmDN",
  "key13": "46Z8E1cVMxSDgL8JqPWWjV1xL6T778RJFtb3XYPGtWV7p2e5qEyRayjjjZFZqRBJ3hMB1jcxR4cYth6PVBLmGacm",
  "key14": "2WuLHPn5sTBuyUNzAdzyAxsvQgcXVkiMW6DkXW2pH7bdMTMiVLqRt9XnBJKtF56jnZZGLzHtECgsbsWiTMeqEfv",
  "key15": "3UhDL4Lrku1f2J9LfdFZsGzX73g2UySWhTeQ5GEYz1c92PxLmgBPKBkcgJSyh1PKznwrGDXBVgvL7f2F27siUDcc",
  "key16": "2bn2VEqneNFVxtkMvdspJcU6k3fhsNV2ZGMyth1Kv5E7tq6tvfMfRPC2cwRc69AmMheDXCSx5Mb3Kv45V3QNiKeo",
  "key17": "3471oyK41qnK61dqg4tuwYEczzmFhvfscEYjpPP3nPnRjrQPAo2VroR9yCji83M9nUG2RS3cU1pNf5WFsiGNfFKz",
  "key18": "5TrUqwkjXNCgaYVquMsu2f6SYVbtGuBeVti74WVM4khd8GHuKFbnJbm3cFE9yKCRs4kRNA5Z81rVqNFVunjEge9r",
  "key19": "mQtC48Vo1MJW9E6NXxA76PLnLFChXFcRAWh56JESBtGKShLcuAXDAj4D6NiftnbwmnMcnFHqqQcG3KDD9DGqCXM",
  "key20": "3rCno9dt27CFc9LY2DLwwh4uWxErWGhVjCMSPYsVdGcthjj4YmyDDmmUdg7HHwfAkLL7v3rdFGtCnQJVCXh9v4bc",
  "key21": "APLZGzF7U1u29v3e3FCBZsPDcXZHTpS2KX7NKVFTCqEoxwSgEeyp6uNPo1z8kuhwLWYBD6o3jyQwdasuuuD4dV9",
  "key22": "gmUsQ53hmSucRw8ez6RrWaxEYYyPdpmdrA3y7VW3rRUsRF3Mbd9MQq671XEVJEJAuTkorgidj9Rp8Bs6JTEFy3p",
  "key23": "4ZoPY7GAZTtJiDumvayByWboeWRxoUYbxmYWtzd3yD8p8h5n2m1h9rwViWiCJftWVyWuqYZRqi7t1tdo4GyN5j4f",
  "key24": "5B4dEPSqBAsR4y9ZHTJARz8QyBzsNcNKYiwnFR2ErvZTkzrZbqTUVXy7tBfr15jucNFKs9RwzU77ZQxxxeDnqEoA",
  "key25": "61iES2i5yrYhwiEDbzv3Ag1wb3ZXgNYBQdETyB1PcTDrnkU6JfRDj6b6ug1j2VjpMsMh1oELbUoHbMFFdDvRNGVY",
  "key26": "BxET8A4NGR1b1MxYjFCeoMz4iHgRz9GPn6NjynuewvmKTGt6J6MiVirwHvGWnvQj4ce5DraCWsjyrMLeQdT9CTZ",
  "key27": "wdo6nuAMdicBvXCF8sAD8kMgwvGf38TJ1mjAwZUUMxKSLiEYmjLbyz7jKX6fWGLBCwRaCanc9gDDNGs1kraUFrp",
  "key28": "3wBMoSTDaZiDniztjBLnPZrHsj6aPDxzU3arZbKUTHtmjh8emtKUVd2GwdZEKmS4EUK4kSBTVAPMJMUc6Rs3678j",
  "key29": "3dA1bJmxXpMjiguRpQeK7iwdEnUwKtrUtyWnYLFyZbdTiAnQ63U9AsaGREM6zNi2P8xAV7EggKxdt8GCmzPUVpvd",
  "key30": "4pKUDscWDFkJY6V5R3rJdo9wTn9Jp2tvN8q7GaRfErzqfoLCDz5xs7ykNDn3WRobpWmoFKNgPpGRMq8fHsHbZKC4"
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

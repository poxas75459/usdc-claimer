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
    "4VbhdGQt8hkm13xxRNu4bQTp6zYZNhoappHfoboxe1BE5fnZhHJA61oFyodhJG8i5BYURThLzVobwaGdz9pqXbRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65d5ERHwJ7MgRp5dErZBhKPnTJ6CRUEdEftwMFBzppk335YNcM73c4eHYxzjCF9dhVxzNqJSmdsb6HxVVXNpa3Vp",
  "key1": "2xxD4ZnAGV1hFKGN2j3WNk1HLFBHZg3uXT8TVeoka23UMg4uubWczBxp2SBywQKmAG4x8oxhUxPibK8rWUa6Nk86",
  "key2": "RaDaCQkS98ZRvRZt8cbvNVnj5N27LyrcXWGKj9NfNwBiu7UdgnoZDepxKVNa5ez5TwUBowVMR1LayTBFtaT6Dmq",
  "key3": "2a83FawCdcY9KyJAYyR3nYF48bk6jpyeL9p9UZ6t6gtan4kKfNdiAMkhbcgm87WFwtw6Chj9rVKfGZG2v6t6QxT1",
  "key4": "36bWdnoK5n7n4qeFGCWApDiW8hWzVyemrBW43pe4RxuoZEza7qLaiK6Zz4T4JYwTVwdZ3u56VnN4FK4Cs4acXV1n",
  "key5": "2cMczfSPe7pi94wJ1ZExVwUWrzgj2PHd4vfG7MvkEdzu35YGCrVNSfsLsVz9a7ApqtUTiPcR9wqUK9ocgijRAWc2",
  "key6": "24iJr7TnsrkXso84hHaB3PSwah6kVsR4dMm6B5YKuRvVRJgh6ykovfKhoMx9kAG4SijYa9Ly8Wqkck2ztsupiZ3b",
  "key7": "62rdg9YgKHM5s3HRxywFK6WZmMxdNw4wMq6BmiUQV4NtCCy64xEwPW8jvNtNzEevgndmCb9CmrWrvceJMS9Kr2mc",
  "key8": "4iebunCg7H9HshgVq2LVKcqSV1rpmHECkNtR55QGbPT2zE3d4qLaRgiHk8LVzmKkhoQoH2TLxsEa9nqdQhULHsST",
  "key9": "48QQDboN9hADoX7xeXzoTh7nC3DYaEECqmAdtR6K86U9eWRSc5ksoa4VR2LihVpNa66iWQUByMXPJSpj3WWoZrAm",
  "key10": "66pNsvuF3GZynZ66izRWJj7nzKUeLdeErYM3WVdfEuBXNPKMdzoYBYGyxmzYZ8HamWbDSSL1sC8bdVrQxVfoopYZ",
  "key11": "2T4s6ohGrqXvijLEuLPTjtEyBATcQRByRAo9uNgtjkVpTFXqERLeni4EaFNV321XK6Awrs9UVYgU8hFmBrHrW4BG",
  "key12": "LGxMCuXiN7S8Ts26NNtTQozMnHQXFWkZ3SBaRcV2YYs648V6SSqSqRPggnizwMX7UMERbPfVrU4MYsLy4TTaogx",
  "key13": "5y9fkgKEE5zH23Suzngyqky4S1FxRtYmFr9pxBD222wGYdFWpMLbHmnWmkHDhRnABQ7sqHwnJS1PwScm9k69Fj8a",
  "key14": "3sdLknV7uX6GxT4MD29FRnLVeV9prvbwNuxiCJBfGAfpYE1Xg1yHKYfRTRu1nKUFJqhK5BAd3H28o6DU7P8DQXE9",
  "key15": "4gvJQWotwF3DihASZaJevzSpWzS6AvRPQVQUzcvApdzjy3jNjWeLogERptVrveormSHzjrVx1KrRCK4TNEG5RFjh",
  "key16": "3LLuYQ8pHBA1Mb2rqWwc4QV7ermzfwE2V5zdwfUR49H9Cy1AVmkGKspQG4FxNyPh7wKWx3j2K5krBQSxnYvs6S3R",
  "key17": "5hCFrJ6U7Ba86R14AUEAjkRKML7J2p5Xa1NaZGczYuXpfY5kpLRvAmwTXP5D3891F7nGTnZ9Lwq4BdQmNzhxQaBi",
  "key18": "5eu4qz6nWgSfJzEhpKMkzkF7t3Nt6aH41e4uVnUQ1cR8t7CiWpYYApEohFLvFcnbdNwa6LkhC1ovwo4yyYH8faoR",
  "key19": "3329uB5KNjFLCzq9exTp7PARCpr1HJt9C5dkkMoNw1btGq1AEe7ksPSRpimU3xffj5aZ2P5Gd8pw4QauxxXmxmxf",
  "key20": "Spimt61LLrLaGzyVgeVaFgwZ9Ropx6eCzCc24zAhDKvR4xAuYRVB3aYLtxGSMDNKBZDdYme8DbptzfjpKqxL1wv",
  "key21": "264z9d4KGorazzxqvCNit3fSsVWEX4CuxzmYPmgunCD8HaEuVYft2YSxJVpKSoFG8gjBv5Mf6wF4z383XWNRp75F",
  "key22": "3F1uLj6J4wHj9NxUD3PyFkWVHB5JuvR8xVVGdKJMDMQFddXw7LsFxEcCJEGBLxL8WjcEnNj9igdo8VPppEcirbkV",
  "key23": "bCL1BDoHF4okGCeGjNAEQyUvUAp9zsqirVpTB3RwGTgZbwWbQdFg5h9B49PR68C1BFEG1TYCYiL4HDs22qtqN5e",
  "key24": "3ynFbmzhjkF8jWZxsnSXwxpReWTG4HF1dNGrxTDh2FJdi24wcY7kmbLfnNvKS6iX2D5jvpCNUJtyqFsHun8LL2TQ",
  "key25": "3TEoL5m5n6Djt4LsYWaLT8Ndk7taniYPAuzy7i9Mzj49gfubsNXYCkSkzqaE4Ykky2EHPFcuyT5sRDM231uABwwX",
  "key26": "49LUEZxGi7dNGtPkPG4D1xGAsjZiZdN4X9FN7P3LgAXZujXMmh7FHHVw6FQxdmhSQGkh1tjyziRubowKEvSCYZhv",
  "key27": "2737UxrBrX2HJeLdvJAJmQLnXcPCJgL5h5sVehEd8B1SARfUrt1GzYFio1u2HVsu5Emewf3B5X2Dqe18Ai1tTGgq",
  "key28": "z1PhRsyPShxe4Hiun5BXDBb3Yar2rSX7ANVqF2sTWNAiqdRHSdCyu9Znxs3g6t5QWomF9VMWBymC7kDz88M1eNG",
  "key29": "2cXVE1SZxwGH3MZ5yV8KDru3G67Pj1S7kiuGfk1x3AEzaNGpN6jzXug1SPLLQf6Ao5UyELSvCmzhTNgzBfknDoft",
  "key30": "2Ut1DL5etvB1Q5q7pDGSpgpXmkC2atejsFY7eXF9AdGEvaC4qBJXP45erjgSwpN1zQwJgYK5mxZBdPkjvfxZBfKr",
  "key31": "2DUDrh7vQRFMokx8W5hgQ3cpsX4c2GkefSrSYemMXdNHRbrExKGtcayz47cF5eaHkK2MoxUCxWwkngyLmePqgLp3",
  "key32": "3LQZLZY9ZnDZxNXVo2anCnkdVJ1AGw8b99Rn6jE8srksQ2yFGCB3VcGEwoYCwzwetHo8FJmMvdSHN5aJgRd2kGP7",
  "key33": "Mn2yvvtLwEVkNDN4tFmvZwQqadibzCiuPS8mHBdVFGB7ZZcrKgpgxupXXZxCfCMS5dX1BHvjHKWuEbm6hHoju5j",
  "key34": "3dwcmj7seJiS2PcLHKYUdMQ7t18Pb9DnNNJvH622sieLMRpmv8W5UWy3qKq3TKb1AxWZz7jcBn668mKwxQRYwtpv",
  "key35": "4k9LouJhkAbGbDzzqvSgUwzUTL2L4pU6TPCCwNCUJ6xQLcEauLjsjE5A5DcZnjNftfsktz8NgdwaUV1WzrKaNahJ",
  "key36": "4A2XP8pN6Dao5Ck8fDK5J8GCrBkQztMPQJ6QmAn3zEV2mJ92Z64jNnNyU4C3rqK4NbuXHnTFMfaLEF3ftZXASGd9",
  "key37": "5LhcsQLF3ULE6vDtCuXucMYyCVVVNM5NwXUEBcRu3kuUActEvcXxGVhSMdyEpmHMJYohdydBfbtSTCUrmE7d7YLr"
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

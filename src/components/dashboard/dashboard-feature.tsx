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
    "49qBjK5rLiLbwxoxx8Ti6CYR8BdqtqkY9Yw4gjYC4vaG5j4VMHbdAkz2pmTKEqqVuERfJSRCHLjkpJenYFxuHYoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrbGiCsEdrMwQ4piZXCLgNvdasR3fhUHrR6d16xXtVgs8KBRrgfVqGV3pFiFWfKkwoATZZuzmCsqwPin8wXii8h",
  "key1": "qznxN4UdZzdwyQLftDsCPmodBRr8yZX4pDe9L2AGLPawf9uiN5qAuds9MZi8LEZev98cUmq65j3vniBapgf7TSL",
  "key2": "4RyJRXrxabcYMxYYbz25GT8jH5HYson8oR9PTYE9gutfDRHHtd2KrVQkJfN71KG4HjLjU9yhWvQxYXG1iMrpk2VF",
  "key3": "3EZXNCumQsH1KLyYzBbCkQ51PHNFKhYHbjki2Pfug6eN7J47qqPT2ju5nCo44fGtEEHy9VA6L6Kj25yFyma9nFbz",
  "key4": "4reGBYPNLEEm6LfUyYcMbA5FTcoKBaGBvXKBTQZQ4rAPcM77HPE3w8YaF199FWAFCD1JKzbaLoi4jZsXqxtPtzeN",
  "key5": "43n9H7gxDDwgx1UkeAPjJffD1Lw486vPQP1AygK4SW4WXiJoxqP7KTid2FuC3mNpLcCeDLE5jVLGGdVWEUDWLH3c",
  "key6": "2k9vWKR9dgQDN4e3yaotNasnVkdARBzpiFSTNPDRxRKqBmWitBi1xsmpPMhcTkWCZKcNf7G3WaJQxo5Enoh8XDZA",
  "key7": "4A9TKErXrQtMtZrLLkVnK2fvNFPQqL5FWR8QC12AnQtqDMNfWvPyv82MPziMTAeuL5htAFTW5Ez59YafsjzyrFX7",
  "key8": "fY7xKiWHbfoAejbtguXtAe9Jmovx67cnAvAtZdR5eY27SH3PxKFCTcZ1pYk2PzfUspq4qK8fSNRe9Tk7JqoycLh",
  "key9": "2SibRukPUnxNHU37q1qRxvLoPHNHpkN5jQeVW6ZrQdpLxcnQnpYpRjg9aeZJgbMecgVP564PEe1Yej7iWMLtmDTH",
  "key10": "5UL8PDHHRUAK8NzDasVqNb5JQGjotuJmvQ1ec8ZWTYx2zNyymbzT2RMJmDPbJ2Q5Uhc8GLBVEdGXtitxK717e7rU",
  "key11": "3Y8DEEvidgXQV9VhCHpEQxDoj1trMC7FUcKKrH7eL5frCckAGLWAEmUho95Mh1L1mHgqLFEhhX63Bhj4QcBrHAhV",
  "key12": "5FMTcDsJzMyfCyGsWPNGokhRYL66hY1XzEkhoP2VmtirpiDEErAA7QqwXJYgMa6hqt8fLgZd8hxfr6uaHB4yzuQe",
  "key13": "5A6qfATciJ1nPhWXvyFXa23N1pd3Tx9eGaGN7cPzAb6uB1ArA7uuimZ2CccBuzk4XGbxHNgnh9r8jjfxZziBf7ov",
  "key14": "9rKi1LmrJzP6762RSGjzCtDPytQdtfn7pe9qvNh8U5Pqjx7qtNT95sJk5EZBzLdF8pRNypj2qwcx9ZRFZop5CMD",
  "key15": "5zAL5sAUphzAYxsea5cMhpVjzQApzCNFfW8paX9RYFB4ERX97YdymSo1DSGas1JTZK4MSXbqDEChrsbJnjLBLoFq",
  "key16": "3hT7aQbEr3bcWDTeprRGreZ6uYWwKgc1pxNeXaBbyD7kzxHRszz95QJferJ1Bqzc7tQ7wmQzFBbDWzNcTbPUsh4C",
  "key17": "3n7MoyuxrFZBe88ckGbe4FevfgvPvgweaFS9Aah2zxYEKgnQvPjCvuWUjfzLmoAgejZbU3gd2Pb74KgR79FSGD6u",
  "key18": "4xfkq1kjGxBXmxku7RrbYa6ra3vXejfbgAeN1vZcqZ7rfercqWCkHNwGD7PSFj2ZH8ipzr6WXZ4DFhEo2rqc5Q7z",
  "key19": "28hq3HbxofW4ia8nyEbpPfzHv4Qm8hTeJFgnkoscinbbFS6bvrxv5NDMs3gUKUMRLxjuoE7CQaPcsN9S4XMGtT17",
  "key20": "4Dt2JjZ4kvYgiQunqC2zC3iKGDiUFEdHTF3LqKTPhgV2KA1E4B9qUQn7G19AM5urJuff3neFtyqdLRBzcWYGcpHW",
  "key21": "28dzXwUsj2QnR84MGJZ7p6wPHzNdAHfddm8iw6pXMED8z98aic5L4RGHLNjp7rTx62b7nRcZ88FQZy4qXgvHWZsZ",
  "key22": "62GuB6ALsVZGgCCBDcVBrerhJeZ2apLiTqB7GNFs6Lan1c23jS67vsrNQb2WoSeJenKvr2AVVXjrv4pSZCsmbbDn",
  "key23": "3KQZi3Kh14Pq92Wv7rK9VUQzbd6xUbx58A52tJXqJPHZyaUyPbnVZjzU47a4u5txCjEoYJk81tDaEb51aQWfGiei",
  "key24": "3Cggf71xFQ5XgWSiPn5yauHKnB3VTP1rAx97QYR3A7GVCtZ5PEXJAJv847GGaHXeMzcmmVJ3NUhkbBSuGD2JGKaZ",
  "key25": "2ph8GMxoifCb4Zzp43D1eb9nzSWYr8RNuiy2osGB4NYvGxoqyHBXsu4CHeJeXYQZvdYvJgRJ9DwjN78AQgdinvPy",
  "key26": "3iuNQKsXuZKWHctAL1y6WVcCXB1ixUrRXLgqgP2AocbqU2zvNHTiJcVUhwUxE6cqpEo7z4DzcxxSwwXZQwYTjWfS",
  "key27": "3miGujKXZ16JFTbircGNBx5wGxgTPUVy1fEYvkDTWFCp2Cx6PT1U4kTEi8KbdPcJFXYUqB55yjj3Bc1DfcGspTUw",
  "key28": "27SJAJscSNwvNinXcqnY4oDUrNofaHNTRU5jLmBwFEKwLTvKF8JAgz565WsTmGjkf9fQyymA79UTfdMPT7DSiudz",
  "key29": "4M9eKYHSVBcGtuekVLVjdAkTrepiwmNtsM5NwNzyt3i9Dfi3ywf35RLSXBDLemR9D7rRXNfy6CJnohZZ5bE4Tpb1",
  "key30": "ReaQviMTa3SqP1ask2o5qUf8WaJLhGp7wa9KWNDan8quwN8GHBzbQgi3fD5fH5i6PicoCyczCn8NStMvZMy6Dy2",
  "key31": "2GqXUxC4fjENsETcavz5zxHzUqwVrHXgUQFujmssLFHtb4BWquds93SLrWaom9PC7V1BYPC99KAbHYtbiPpPbaLy",
  "key32": "3gH4yczZSQZrrcYPakXqbmrHh9XBNG2P8jPRJcXmTwkMpKS6GxykXKh3mQr1m43z4H2LSCCYzMijRbcRdJaeFDXT",
  "key33": "4Fyn8FWn5inQCWNSK6N68iJyrMtarN27bagLHnSG9u3ZsYJQssiyKBZzdZVKjXqz6N4wCmxPyVc6Am3KS23KYcwK",
  "key34": "uh9eDW4hXMiEmXt2gc84C5uAUkDsggkYoTR5AuyWDagXsTAWnMtTwLRRNoTK8kZ8SkXwRcPk7Tp1AqNf3NNAYxP",
  "key35": "yjis4fVhbsDBeNFmimA1PUcWRkXLKKr2dVBRvDkE5Dk2bAXLwS3VTvrBT12AiXEjxkhHmjkaqLG7dhXdJ73vC4k",
  "key36": "5HohdR93GickKrAXvJZcsEfRg1bqBvZvRQe9QU3xAGkfQZFgUrpk3azuPBUUvugcSqNruo2KsUAe66AJmK4oq5mt",
  "key37": "5CoGmTyivaoPRPwEHeJmDykE1uY8z7cVYRhAYDuLJYD4WYNCeX18qmCqsiu2UoHs7VLMPSVycan7J48xL1mCXicM",
  "key38": "3PrhyX579kATHskeUenAG9YD6tN89ZkWwakmfP8UDXD5RVjZ99r9vALomykH64cR6JQbo5dkoEcJuQn5tPHgbdaT",
  "key39": "2cJNQfnpTeJZeA6XxufBbXBNochfR5d5hZymTcBiJHaWyKSzQPz23ZSYo1Q71Loy7oZWFFheBEtgfeieZVZikt8H",
  "key40": "4fQdhsm1Aqryy6kwcRLiJ1FwdGsDm5GFGhcQ9WjpJTeMbvmhGA4CKFHcdUKsPsWDhNKq8E6BqAdQBM93wQmAqYyt",
  "key41": "2MPvmtpjMMeP67CXsDXCVHKYVJtgcHC6Wtqbx5HbTUUZc4VPMtncENsjnBddEjV9YGihbEtyhPpWL23XiRBYQG2c",
  "key42": "4iyTafTuPQunoSoJQ32tAsTqaqxudma427oKrhSR1Fx3qjwWUWFNVPssGQgQSgFKDLbNes6nStMhpDY1i4ZKdXy2",
  "key43": "2kdcDHWrzZmEwUMrP4HD1fM1pQeMkfBo6pwXtnro497j5ULjdqzwbNFZemmCBB5rDupd83Z4kB6856czH9RYuyXF",
  "key44": "2zPPHgAeVNgUAEFevoYc7K8gUR7Hiz53VqjfCGe4o7GZakiFgGHEE5ZpsgsvfFCrX3KRr1wZJgMc1oVzqzFnzT1N",
  "key45": "2raFGvFQV4eeEorK4aV8Sm1ddGdfWes35J8UgiJwJ3dkNmyaTH3Cijjk6e318XLYfJU6yJ8mtVRnhLLRbvDthVfp"
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

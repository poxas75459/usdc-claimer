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
    "3evNg2uR227TueDBHK8pWrCSU9XjTwStGvCLuyvbqiaGgM3y32ZRkt8Mf7UWp4pzGG6Vgp1MtqcRAUozxCLz27Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WeRtRAfxYHsQr5FQVR2MhLrkubhCu7CwsjFmtnD2eraaMTvY5ff41y7DWLfcoq64yuoCGbBkuJNKqZrJsSuvVuu",
  "key1": "5s328UWxXUJXcYtqaYkZVE8v7shELoCZhCboV3RJRmvZSrz3RhVi37ZnNpt53HB5z5J61g3N9HHAQp9ymWq7pmRD",
  "key2": "yAd74AKn6E9qRqRn3rMs9sLS5kaHmFzc4dxGbfCRdsgDTWw4E32wpHc1nuRZP8kQq22ynnPChhXmWL7LBgwsTjF",
  "key3": "4kc7TbSZEZDJXCxb1CAWuTG4kyFk6zFi2R6fSfJ4EiRNPP95zRSBLgCaNYRaLkJmT5pufzVZcZgS74BNZhjLsF3n",
  "key4": "xwXb88fWKjD31TJRiNPad28KbveLjZq2W1R9peKcM3MFwi9fsTrppvpBcpDpixaHaK86q3md1rhhaFirG8dKLEX",
  "key5": "38QkMgLJVhJs7PCt7xEWhd2UVjuosAXeUEiKtTuc2VQBw2uCP9QAwAnEBiFyo6WSqRm8FFwUx8Ssty4eg7FJacrN",
  "key6": "5UbYqPG5nnBahGKMfLet3DMYUEnP6Wr8cajS3ptEaeus64PNa4bMxSSt6W5pz2s8iu8tS4q9EgzEop6FyQtSNNaX",
  "key7": "4e8pgcge6HERHGNuDufXMqBToMZnThUwQH13sJF2Mp6KJWeUm4eYK3Yd4PhNuUyTNBWTF4RtjW2Co9FQxPM17YkP",
  "key8": "3LHt9uzsLPkb6Bx1NB6RQQbfy993ruveyssMrgGt1zhhRavtrxYhiUpGrSpw7cw9njBDb56Rga66a9VFN5HWgB86",
  "key9": "2wzwooRAQsWN4WRHXT814xvV3TzMEatFH67AsyWXDU38BK5gX2PvV6DTERvSefwE1yRZnWwWRXu5fufijdi7TASF",
  "key10": "2d8375FeZNJXXD8KDwjpCVdHiFQc9nraHFFjc2ynPXeB4KyAPQPNRjBTknNb6kGd2AropfMboBWqu8DMrn36Z5xT",
  "key11": "1SM5BJat3J5BMtS8U8ErP4BLcBt1dfD69L5EMXTGMMak9EPbv9QCnwWUCXvcgETquM1JzW27SVkzUXxb2yE1yxX",
  "key12": "3ZUnyE5s7KVJcDa91AFC9yT1YwrYbctmYiosBFKoNUpR8UThk3KLbmTE3HH7h9PtyfVaUaH6apTzWvqhixzhyeLA",
  "key13": "4PRRSXHb1aWiVmwT541sPZHYVGBZaBgLrQ7xui9yGsVqrikLSM4hTrPrNf4Cn937LdEpm2D2ghJvwmDPZJvuBhRz",
  "key14": "32n8gRJL58ARKshWw37yi7ZBMBgZZLZ9S3gCtyfvKpg1ixoz6xbZCPrwXd8CqLXZsvoMeikBdHHHpvu4G1n2YCqv",
  "key15": "4FHkWuCtFNqLkUMh1PQXCMdWvncfYMQQykQpQkxHVeuV7V53Xz8auH4vEjEqbGCYcrYQhyq8942LiXeBwg7aGMEF",
  "key16": "4MuW42NujwbvTXn2wxMQoRf1g1X6jy9VdgbQHFYqvDrqyKb6qfv2jopQd3wYMAFbaK3bNLmiV3zBpsks93VTw64w",
  "key17": "5RNU6rZnft2Lh5e349i17pYFgQoLvQ9eTQjvwxB5HCezEnRybewbCevyfnWSUgVtnsgirejn8wisEyzR1HbUARd3",
  "key18": "2EcxWhSM2E7xS5BVkJEb3dR2RMRbFMg9suHmyLbHmVyhGz1LjTB1XNwQeh8T5urkJ6pqp9zaSMtZfDggZ4Z1Q3dy",
  "key19": "3Kc3nz8L2n7DCXXaATxXP6VbJHRs2QAHzKW2ofmP7FBgGuRXDCK4UKH3jJdkcjfXKHdht5gv5bcQJGshF7UfaEn9",
  "key20": "3MfB2vKn4oSoBqwWYMbbMGknyzGx8LmWtrbdE8iMrZu9XnB54QMLDWP1guEfZ2rdEZ64YmLQHJF61WaoX85fxHjm",
  "key21": "3mow2k651YTykVtzQSVEdxTnGDiYStEAbM9q7y9QTHQvvt4K4V9Ldof7ExMgvDcotpnLQQfBuqzvhnx5eEUHBMfn",
  "key22": "CSUkFVMkYjKdyUMSe8DWeDnbHjTufkzjDnsBqPWSyg3oaD6s6HDxi4zuT6L1aV6m6z9KMbTKzEuqgdcA6nmEPtS",
  "key23": "ZmrahYyMsjuQKF3xeQ2gYw7E9qFifJESSSQFpcft5Qb5ytxFKfGrX7mf1LowFt3N9gtSHfM4dzmGAxQCQPpaYbq",
  "key24": "3an1n6tGKUs85boxFXYoHJveMgkowNCAapDZHBwYVK35fDazh2DSvPNmdJ1n7kZwcWDYueGxCVZeGKsrS2c2bdYj",
  "key25": "2b83m45gVuER93YGnVsJfQgpi5eQpPRQ9RY5rhV1yTt3KNf2kdUJU2UEEPrh5HbmBCEgna4g8vpujz4X9q64Bq3j",
  "key26": "RBN3wgwUBGTCibFy48efo7CCEoDDE6KmD33PZW5YKXZ7qkk1mL72SBYU6PRDuYYEwAFkMidKwZozuBTSE7Em82w",
  "key27": "345LjDENDcK8QXfMWGwQEsG16d6DyDyvYug4cnMSZjMyCTbDBvcWx5iFqw1NgaUD27ft76jQbCv97BSCMbHzkJkM",
  "key28": "2B5AN9GgPGvbUhRxENrnssmsMjur9yU8sQmTJxfWwdxkVCeyNTWyLvrtCC4GRJvU2q4GDm6K2PhrKbzMBzusrc9x",
  "key29": "3Z1uzXb5RVaFHcXNbvmH86NeanhqVM6u1fRLC2oGRLkPamm3vVZKjRtuwbNTN2pysisMuWgfJ8CbarDJEsoNvPJV",
  "key30": "5FBZFPzk51znAFuF1jTvG6MLa51ohG2N6cn4UFX7abCfCRxoHQe8vmUV6jQUvwoJuooPMHZd46SYkXp4c2bYvPjZ",
  "key31": "4BxaqcyfZdYfgs29zsooDwcekzXJzeEUwKsRMbZjnv9emJM9VHdmC9QmiWeKuJYm8zW38axG4uevkNqtvM6WQMwq",
  "key32": "CXmn3xbKPLyEeuDyE4i6mxXtVgkx8edB9iusiaQN4DnuRqtG8teSBcwrMums9WGBdZxPFxaPavdahyQVotiLWCH",
  "key33": "4TJez2uDHgubdo1BkeaH5zTPdDSLXDbdB6ezZtaNQZk2sbCr6rtDP4d7K3wu8vXgRusNwrJGuhCB5m7DcytMAD4G",
  "key34": "5XC7tniM1yWDHXBfvrH3FNovY66hCARCJP5NBXRhABdiCo1RPfnaEFB5WV1n5vzi7Luz7naoX5UuFofrTq59nU9E",
  "key35": "4jUmAPfpd4iewP8JfNUoatyhxYaXPMeupnh2VRuwBgWX5qhDfA7h4WoUzX9UEhTaeKFJxALzMpbKM6u3txvdQbnU",
  "key36": "4RppSkQiKfgbPMEXyJGHo9vR9VncGsAifpVWvhVu3a4bKafDeRUmf4sPtZW7pc5LDhd72wc5hs552jnPB7szy6ck",
  "key37": "5EVx36fHFUMhi88RQEDQTF6CtFNdW7GPcNBmDbZY7tMMnx7ekZ1LMp21AJ3p3gN5c8UKj5CbcymJeDLnbZsoHTgn",
  "key38": "827FGsKmvEyYvXUyovymC62WNZeKsecdnK8DGNZPCXHVawonGGZqG2qwktom3eFgnw87XVXPAjSp3jPKyfUwBVM",
  "key39": "4rSWfF1VaNCw1AhHBcoVUrxXduJivuQiTVtTNCuYV7PkUuGPXPbcWGBSgW8cy4W2uSWkr89PC2mkPMajoyRewwEe",
  "key40": "4fHG2NDJmRRCcDjA8qtNpMhy9LT7RSRHn1mRw7JmynBPb8iX1c1gTQ4FXALxbQeNE1ErQqv61Hj6WzcqJ9bkGdHy",
  "key41": "2D8WLp867LUu8bckRxGRpMjj5P9XixVBXVCQLSoZSFymfMYjyJUtPoeeRGLzZGyACD8Cs2SvzwCsGqmH3B2Cp8TV",
  "key42": "3dBE5gGe97drDvGgsdntGDArZtqsPAbCujiaVUxxMfoiqRR1mczAx3V5rbN2qPUCFA1qhTr7L8H7xcnmXf5gXU5D",
  "key43": "5t7kes8GhWkcjQMnYLWRJcfJ4xsdgc8i62VVFVeZLWAreFGSkpuoGKGH2rzztJ5bF2hPwXXPB474sFDDcDhG7wmw",
  "key44": "4m1uWbiWUpLCWe7EGLNeFRYskWfjrZPV4ELafnvCsgGSajfQHgRDwYHJCt8r29Bkri6hzh17RiVkUM2cy9Hxe4QQ",
  "key45": "4uBnsyW889aRDZViuMHHYEojJnQUv2yguVBd1WZQ2zMHsaNBjD221E3XtcbBgDMDaTiAkZQP5A28dgeqbE248NLQ",
  "key46": "2BV3KfVyijc1gLUYRoEHd9aRgc7XVPt97VovvbHZ4P7rSZaa3eozhPLk2fetTpoVQA1oEJzEMFJ1NbHwi7MxkELu",
  "key47": "3xEF5aBvwiqm2ngBNbdLeSHJR8GBbXMumkwjY6uhbnKK1xkn5QbHFYrYbNGq5qs5ADoGC7RBo2PUBKwV67UCWeeT"
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

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
    "49Dy2HkxPzKxv8UqeJC4ePBEufJaN4NL4mnZsUJJJ79eVi92HXfksgeaU4zYknfKWjUFM9SRJqiLAhTBpKwZHRJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dkQBFbY3S6MFvsWJu14pHKSkyBCfnnNKsBZrfQZovmCbrafZxdPDaZfJUYwAW5rWgu83obdz16AYuSeLa3nwBF",
  "key1": "3RTo4iGk9mqSi76h9F4SXCXm4L3HAk4WXBhU5K42dYwdfmtykxTTNk5cZ78K3im3UPqkZS9xgvQaGAybbxpwCjqq",
  "key2": "2jtToHGTMRR2ffbuwMbpRG1UTJ8rPVPEUrT4wyGQ76HD64sWDXcFGkHEeriNGvhdExZAe7ZuJ3ER9YgvJfJyTSLs",
  "key3": "3Ywkr8qD9yUjbakXUFdkzC1mDCq19N8xYUqiCiubEKcDiuDbyjEigLjCPZsxarDRv74vGMBghE5wSu4knCBK5bAL",
  "key4": "451itzJMEvzXATsQ6QGctGerxyvkuVk34UqWu8CTov8fwdVAEuRVBKUdSre2sAUq6wzAdiNsTQDqvWVh7YbtxW2y",
  "key5": "2iUAx7rYuJYusnVRhawNt8FrkydZnGMGmDHQ5VVEy6Jt9p3LqvK1aCnd3n1iemr2NiFCAyR83pxRJi7QFtj55gcJ",
  "key6": "cKNQHPLM2jZUBL7F1EPcDaoCPjPAucUGXTHFhZ5Uz2vUvurScvyXAQqCUaAv4EX2a5xdJhQWQkjZQn32WEeqGC8",
  "key7": "2jxZ4vJgMTByUGjd6QGSS3ZBhGXLMJCESFha29WuMW9Ub1uJhGqiKAL2ad43pMRsF4gKMkkpXFMyGeRobkkZUdGV",
  "key8": "4e2Jt2edkLBNHNMJhvKkVT1iEc5ykhcRPHgXveNwNLQjpVdi9kPxgDUfu2sT9tQSc9sCcBYkFkng2WkWrySTNE5a",
  "key9": "kv1mbRKbTZrYXrpWZQbUgTtVow8CJ6oRgvg762CCumnUdDKdxo4gEDE74QFtXGbZSz7wgb5EWkfuiEHaVVccpnC",
  "key10": "2eYyAgJZTec7f5tJY7B1i48kRpNKvWXBEQ22YiXYs6PJhrXx261pAkWqfAoCRYwC7Q4WrU2neodqh56CMu3vrEz",
  "key11": "5kg9q1fqdtsZQQ8ZBBmHVyViT6Zk6Eerk4RDsDycmZRjYcoiFkoyLoqHsYRLHSe5pJ7GWDeYXX9dzj566nJpVn6A",
  "key12": "2yy6t6qqUKymYAz5SvEdvfEC3rQVEdGgTELMnZEonzrjjpAhxBu44xhieuXJjPxbf4zP9d9ZJMZ1G9PghP7RAMQc",
  "key13": "3hxDvDiKtqg5VVc3jSjGvk6i8FqeetZCQQKYWdy2RzMf5Pwnud3ryNonnKkcVZtsSYKjBB6gSEC2ZFuJcvheo7Fg",
  "key14": "4rqwf8bqixZZ1aUzvjSPhhtUi8UgBKr4pyFnWrH46xb8WdSfxPh4Cp9MEnjiGbKC3AZinTKigt2A1CsYvUrwQAaB",
  "key15": "uoen1fZusPiJCEqgXPJcX9uoi9ftH7BbYU2xvn3YqPEgBCGaaD7nYzbSRiTht4gJ2FtHBogJMW3tkgrvxPLHqR8",
  "key16": "2UdjuaeNXQEws9zeTvPJFXDmyUb68QPCozJQHV6wNSnLdZqAotek9CXDAnJ5dAeNJNWyvfEy2qJstuNwb2UeWpF8",
  "key17": "2Kg5JTqTvkef2ozaGnW9ADwZSRmxourVhKyBKszKgDwMio384K8AbzJRMqWbsp3USN3VwYfyTkPyURP9YLroXfzi",
  "key18": "psfFgsJJPjPUYgkzirbEPNuiAEhAJPzHEd8wTP3RH7yL5x81b5DzXBMf6993sCoxTPnE4mfgyviFcJPkdTbJVRk",
  "key19": "2syxjZHv1dAXGpyVfYaLv6nYDSeubQYYkpS49oTX6Uj88xKEpqnZhtmh2Hs7esukSwZ4RwGwEYNVerbTD7YvzonU",
  "key20": "2Y7HCiW9BuXMh8XR9Vj3Pmk3zxV3VLe5BN27WUTu3q7jbgsY6S6Nhm7gwouZvLvmXu5wzARohsXGD7BPt5bZ1jkG",
  "key21": "2Txxi5QkXTpNtHrUAPNgHu8b6za3x7itRfrKsbEMp3uL8dUWTGn8VAUirv5tYzdkTbhXo2tYShyugGgBt5hWNym2",
  "key22": "5XDYMwvLNh4xAvCDzvgtvFRE5cg6SwGmW8UajWLyX4nuywLNtajB5BYtUVjcRef15QTMe4x4bvX2LhXq6QQsW7Rx",
  "key23": "4mYJgtyXwbFmp2wvWCsi4xudCZMKtH2QfMeMwxwtqAhjjvVN7FojeGf3oq8hsyGn8v47B31zwTtkD1MR2vRcFVes",
  "key24": "X6vjzB7ZajSsPJAmXFfiyHciTkLUNWKZbKg7F9ZtgAdSbLWkfwF7JdVa565SSBKa5zBCXiTu2f8vmwv6soCcrjV",
  "key25": "4BKFKCzizL7gfk28wjVZie8pn7VdHeb59sPGoj4oMZjV8tUkTrKvmwqBD79Mfw8LwSVVa4CBVuZ11wLVP32ACJQM",
  "key26": "4z69kDsbRgSvDHJECtyR4T6ska4MvwfFi2sJ7zFQKKzYxoqsKYec9g881mud4KM9dASFyrMsYtW2Y8uDRTbvxnuE",
  "key27": "2AoaYtHxvUFPDxBcXTnVUSJu4adqUztLNegyfQSh5dSxE9TVtYvkUWHirv9JP7vWzuq33HYMyEPfcr5twdhCz1Q",
  "key28": "2YSFB83emdXA99EKbU6aNmnYozreCWny9B6dXqkbLT4v3xBGecUUHzKqh2BvFLy8UnqWVK3A3oPzpXVrc4PMq49g",
  "key29": "37RxyBHUEd4kaJS8ws9bRjuD6whBDxK3RYRtw6jx8zHJg5Ju15QCEkPzDFLLFpQpJf1U8X758cAoB1CYpDepeJhu",
  "key30": "5fhUtRXbGqGadRCnUkmK2zc61S2PFYTdaDuypE2yfiPg6Q1tctMqCfJVaHgP2PBDDjs9SoddyXmMrw5m9fSqVGsd",
  "key31": "47PJxEgzHdcPzbFpWyjArcZvEW43MP7LwGmQf9kWomY5bEKSohVCo4wodAKdWxXhN9ooutWivcP3TZSa9rDQETQS",
  "key32": "2mcmETWfi7QuXiqpuM2XLyqSRxxRd1Dq2fL1f8u1XHwHMcMFWXQ3Mp4Wj4wzaiyzBw4B6gx5Vv9VtsfuLsc1fZXU",
  "key33": "32xqeB6tYB3J7uZyMpKhp7ehEPBboiEXe1uaiKi7kHfQr8MJSBAdswYHp6neVzq3GWBqvQg1LjQBucU8N1o5XZ33",
  "key34": "2yCTzWAmGogFgEPYEtw2ErPJNA3UFwSnqwqL7Tt9USZ7WNfyHvVK5f28GMojszdwwvXMu4yLxRAB6MmQNyJQ8M76",
  "key35": "3yovxZdzK6bMxNLs61W9G4cKPHQMqUC5Dfecpcs7m2A7zmhvXybTth6dWUZv3Ea694pkW2UiN1t4U5CmmLYgwjUX",
  "key36": "5NRKUzGENF3ouAPC6G36w19hSPESVucQwafEaK6EEL9rQR2ScRY43UA82URBmwsM4Mb1Wzw1Nmj6vtfYte9MxBY8",
  "key37": "45wUX9EGDqeW9o33tyLB3eUwYhyeEqCXqygginGokPAcpJNTCbc82bVfCTxXoTr6sQARfWV9Qm7qr23fkeQwGPdz",
  "key38": "2chju2zMssmTmy9xqeLLd3RnZgBf6btX4o6MskKkp6a7QLR7k31Uy2Teqb4hkjUeZPd9yocPqqLzrt6qJvPr6anD",
  "key39": "2okzKJ6NxTDL8WYaJCGHGbWHfbezEjQCVs8VnSwdAZgqGfXtcykrWvfMNLoTtEUkBSazMMddcKZ5pq1F77sHgeUw",
  "key40": "5L3WAK9CqDUePriNk7rTS9XYv8c6PaeCoXckvv32SooZ3ntikfgXgXfQHxZBNPRj7QXgpzvz5aiEJYHTPjX7Lr49",
  "key41": "2MxfioERvgtqXhN61aPCgWSLKihHnjHX5U1fRobKC8HPaULyPTgJGsfKXvKLDVToG4S1hCz3VHXPn3TyS2S8sJ9H",
  "key42": "534px79qaxjVmojNpUy2eM5YeePTzjGRouqUGC9d536TPuZJFbgowjmRhVwoFtaYNdQWCy9pBdbAZ1njYfR86DeB",
  "key43": "uYhwnW4gX1q3ojZ5uaS8z79M6rihqqcf5srx1kXLUHNaHvWki2Qi3DKyEi5egCxAheUonp8DJWk48jsBnsAWbtv",
  "key44": "5p4ko6gR4j8fyne1vyNcR8vrbecEiR6LT1PLd7t5SKbu3r5hKaqfZcWRG5nhV2QnsMag6pSTvKqqjY6cjrQ5cLSD",
  "key45": "2BeUvUk6fr9Y4z9bzpEQeya5T4PjQHMEc8sFDA8Y1m7Mz2moCukobhVY4LPs2LHuv7RU6YNaKamATTW36LVPbBaS",
  "key46": "5Q63juEPqFem9i4jcXTegQULXqfsXN9Pd2SzCeadn5Ec82HaaxvbRPbFFGdwMkfsANhyjcP11z1EokPLk5V64zoK",
  "key47": "wUinh5eoY7iPrCKAsk3uEeccTEDHxUXKtiBSsKTV6dKhRpCNUcyi3ZFRVaF15UEpqFk6tdj8tFrdVagVf1zJdf9",
  "key48": "2AZsecF9a2NhGPYeGHBpTZM9LtS7iKEUa5pnYJoicp6ARmhFHGqb5ewpKbM2nXJ75dTxSNoY1tnxYztWqZAuREtr",
  "key49": "45Kof28Z7MQr5MSDPZj5A4SgBihZAMnCQt3Qkx2q65cyhBwrByPtkRrorEbNAgZdK1FWDH8BPTXig1kgunavUHNa"
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

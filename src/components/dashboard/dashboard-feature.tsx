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
    "FznaWsQsxX7nHFfznhqyn4K3jr1omVdFKsJg8nwchnujFp6MTCfagYYCkVNWwK4bM34oPHQcKRNjeRifKDynBDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUcPkyphKPp2Mr1FccTwfXjjVg194frFazFvuBExgQghxNLWFtcH9dLuAsz7YRkHuGcxuVZ4cgNHQF2FiCmDEeT",
  "key1": "4dk9A3uHx6Uo28Nw5ZLuk8VGFXB13DooVzwpb3RLR7NnR9pDvRgj3XaLP5g27BeUG8QyknNF92nhdxCDC4Jy6WQJ",
  "key2": "2v8EvrRRaU9HAw66J9p5fHtoDfREKGnGRVJUcm4Jun2GUxQsncyhU7f9z8kT4f3dCP5aSsGMKYizDAyPHtThSAze",
  "key3": "5q9rDkZz33f1sQNNFCnrtY2V1YxSGKuXXYuAcfwS7nWKdMjy3DZAi1vAT1R5SJUUryTfxyEY7EhrafPi4pXYu5Rq",
  "key4": "22pkVx5R6WKoR1Yu49xRa9ddnEWx35EqhNqrz3ygJVRupUVgojTpsvmACiGiTWg69XkPPHvcmtH16e6XrGGLNjw7",
  "key5": "65VodZBuArnG3x3JZsYoAUbWUNeNeWYgdP3yaqS2b7D1G2pyMwcwfMEsqzg2cDFAJphjSQRu7tLArT7vTzfrM2mj",
  "key6": "USrZxWS8rHLZc9LjAJW8vWCQpqyy6aG9Xn9Xewvd4t6pgY6hMMbCZWq1jogDW3N2egdhPiLDyCSJU8wKxKpmEre",
  "key7": "4UHsf3D3f674KHwZd436vJc15KR5gEqwRBGjLSuPmihKzXibky6GLeXevJoRTJ1xCwZymTdHoH43zEQBH5diK2Su",
  "key8": "44Hg6hMFEfAAMftdzae2gXyS2XRhVUthNgBhkqjewSYKrUjMtTixMA9zNJ2cygWKfbdrhSHdZRnchFdca16fu1EF",
  "key9": "5fxzp68kfkCoNiN7zp6CTE4kA4JaeU7KQQDageNG1EVozKBz6fLAgqzYu1bsiuvVLoZG4HWAULin6rn9DhwQVm9e",
  "key10": "5jxR2gS6nowvr39TRKNqQVDW3K7ovKUc3dP1oJR3FHsG6dpJ33uKKZLon1j7u5gGzbU1WXy7B423bCiA1Npbwwo5",
  "key11": "46HmX62BJKqzx3DSB98wbFfnxCKWLqgr2XWpMYyhM4rBiaDiVfTBqJp3MmetQu1khyHGipAs8ipR3SGJNGQTYyWc",
  "key12": "4mocrJZjzeotSPzhdUPfVwj9F18C3Szuz2hEKVWV5DAmUFCD5pgc9CTvBvJpwPaGr79XX63PVTYhfDdfjLBMf4Jt",
  "key13": "5kvfihuKFQNEsA5Lm8sja3oFtYZrXNtJavL2BK9NJ9QzWJHYAHiBA3dyA9BtEjkeBNngRVWV4BZzFFizMx99WuPU",
  "key14": "48f5v8QrLZcztrJGK3YStXaxjPQDhTyyKgjdQaPywRQXUjRrYc6GrB7qWnm8ej5HxwTFDVb73ytVv2dME2dXrhFZ",
  "key15": "2Hb1AxN8pnrcLYGHaHdhT54qJCBmeHWwn2GnMUZRpjgnAaiFr9y1Wzujp6nXad1EeCEA3zhiSBNKi3rFS7r6NVGN",
  "key16": "my2KJd3CrtgtymtwRVvC1iR2rsfpsjYRfBG14Aht5p6ngXtq4A9jr7jVgCS8Cm8vTsAoS3dWuo2ZnjaRD62BR6f",
  "key17": "5KsFLvyoYAGe3jei6gkZ7GRC5vPEuLtNegJKTUPuokkCqe1FZMuWDhnzRbD2DgcafCxxz4tnBcVQ8xfQff4dRLWZ",
  "key18": "4HQb2k8BjGAtHstfdk3eSWdTDn7318jd9p8CmeRmbRd1L3sv3Xf75FKiwR3ZQAbfQRd7R6SYacDDgp5og7QEeoit",
  "key19": "4zGrYbfe21ftprhM3NRPxCS9BZr1ZtrtykCHjySPjnoaDxiQghs3bqGF9zcHFMhJyLhykPuRJydeo5i627GGyh5A",
  "key20": "43Mh2unRG11pXBpHhU3qKgGNAJnRn88JK8aJtWPskmGScJMGQs98LaYAmioM8z93p75gegEoVWB9qaxyZxvgiwTt",
  "key21": "4rvpXucjCkwDDWw3ogRcZn5QCvKPaN8X3adk5vxrcFjVTay9VbCcMbL1mH75wE7DSED3ohgzu7eQGT83tsKeWnkJ",
  "key22": "2hNc7Pr4epjCRxq7BgFwF2PEMP22pUWJiEATwFzECnGAma9ucXSwxWJafTcMjE4kzGmsevG6r4NQH96Fq34TdwHc",
  "key23": "5nkBir15aZ7bSkZ636TeKZmki9mdN3XrSdGQCpr1CfmAnGpTYyHqfWpN8kFkJ3spKNJDdf7MzZULwbfJMasRxDjA",
  "key24": "61Tc9ivEfWW9EKyEMa5eM5ey6MKm7w1r2nBH9VNzhuebxWkKCgo3d5JrbL4Wx6MD7AiobVvCwQ8jF2se6x7Dutbo",
  "key25": "4miYqw432ygZrAgSuyKH5PxKzxjz529PhqQFCwsJRhXJATfiRKMenAGTgqJWZBJ8w5qdzAK2CxF6s3j2Y1Yqmx3d",
  "key26": "57vcr4c8qc8UL5eMexpkVqzDSbB9Ji6MQKycCN5gnNtTWtFhtjNYvrRrA877vNbWSHPdo9pwmQRSF439FoeHRbPL",
  "key27": "y1yBd7SaoeUA2oeAcGkYsZbu7cdx8Ju2tZa6WjxbukKgGMvmDZgx8ikE5HYbHkgLuJdSn62VQS6a1mxCsvKPLNx",
  "key28": "5iUdDbyTm1ZJNAqmY2gXGptXF7FNv9ERg5QWJKPky1HPMBmsGwjD6VPocQD9Tp12NHc64PwPnUdX1vixLAKL2EAd",
  "key29": "64btWFaGfs77A87ZtY7jbP7RgrcUzNs3koSE7TE9JeXgr2XDbHzgrMuTUvr3ia8aioKWi42YJj4bMqNVPr2eBoqg",
  "key30": "5bTq2nxQhJCsEjHiRSQFtw8MZYLn63pxDBeNKmxU7niEfqvRtdXt3bEAawf1BxEKKJAdQTJGxcPP8nYCp9aLhqQE",
  "key31": "5zcBJM4hS5ij6GtVurJzxrWFUVm8rpZQrxoXVugYDFFmx4CBRt2V4pLgVg3AWET4N75HCAL3rDooaUQCAe6jHUb9",
  "key32": "4bGnuBEocWiseHBRcpRJFdb7uoS2FFrEcqwGJ7KupLD2Nay1zpHj9rv53KAnwtJvgWzqiLojg9W5LhGPrabqGZiQ",
  "key33": "3YVam3Tks27bfUM4CEd2F1eC2wPCfuV3skr7XVjX4hgwCyNRdEvs6dy8j1V7naAN7qLtRhXa95tMbRtpDNeZeX6F",
  "key34": "39cZXDWdyKK2EgA6XuvTPWk4y9mie5JyuMow6HMsmJ2RxxY5wxqDYDBatuMY1ikKVCwYUSYADicio5cjK44hHPMv",
  "key35": "2ChpvrRQTghxy5gEjEPhmQiQvfTEpZHYKgkJZjqYowZSVsHccio8Avg4Txf6AxZaSDdSxQMKKYTubNpFJfQaNd7p",
  "key36": "zm68caQj6Se4ci8QrACry4aEbe2Wo7Z79itNd8SSNYiD1zmtA7o84FtmEB582KG59r8PuMKzfwv8RvdYy7ny4Q3",
  "key37": "3Q81RUWqWsA6bfP5M5skjEe3BvPhzjsiSuvwDmw6YsTNnjw3r4Mi5ha237bCWiCczkaQwNQYT4pN1sLFTmHtk9EF",
  "key38": "5SeChx5iKhHVNLL88P6nAEKdvHWJebWVFZcHYc9rLzZKJ6oaR1SuvfwJwDMq8bfgxs1snu58sauXPv4stDsCPLck",
  "key39": "2KcEfzAxCespvSL5XKpYJCi6uP2Z6CezMk7itDVr5f5HDNYDZGvcLXiQpi3kQWjvuwPi6gdp2R8txf6wu9dK3Xdx",
  "key40": "1SKEppG8vZgRMaNJBYFTCfsXa5mBWfBzL4DbsXxpN5xabfU9fkd78Ftr6oa3pSFCHv2yjaG5FiihPkTkkiUNg62",
  "key41": "3PXz9kk4JMjsLHX7u28AkDktjUMMFSC8MmF7Un1tzwR8cmuqoiBXk7FGq4fJG5oRE68v3Kro9oziDYEhqVZzQo3z",
  "key42": "hYSQCynsVbt9UtkYw1RJBLTCDUTrMQoajbeENm3i8zwpzHinuAz23Y7hjyCtUwU9na44L8yWHq3y31Sjr6my4ut",
  "key43": "WodrYKnHp2J3djZzKiZ2rzLe5s8LiBprwtdhTGkzhGfpzX4C4QCSMTRqeCMpfisqP6o5pQnq5oUSaF1Knf25bfL",
  "key44": "4GZspGjxsa3PuQULKa5dbxCo6JAxQEHtpBdygnDSJAuqXU9QGdkaXtPMAJd92TjEoDpx92PTSg7ShmbdnVouVt9w",
  "key45": "2QB5zTPjs3uJmUefybzADeojd6MVtoZT2FwtMqqfWVsDctU74QgkcK64FgCc76EMxLxRxga3TzVSfH8idn4N3Em4",
  "key46": "43cfJvU6PMkr3cGXPzK7grjLGgrMy8T2FZkPmrgZ43D5BfSXXvqLLnmQ6nwhGaUue9qsQYS7wZfgEfzjeANuPspX",
  "key47": "5qEj5aCDMQQytPZD5SPqxjMxFGya7b9tz8ZVWYzGRLKjzhVYhPNMR8GZUXWVUxYVJcoe7VGaKpC4cJSbrSM1dSbe",
  "key48": "3ZdHJyEKkpQQgXVL6A2nPt9Q6NBKaiAuEZgeWUQvsPPTuJumHVmJRawgaNKc2pzCmfP5Qoxe7qx8yxvcLGUV4Ki2",
  "key49": "Q21gHeRHAzEEHvZptRkzWMnwyL3EWgLNrvHu3qZMRTxw7qmkfAzwg8QHQUeA4dpppAqSDjC4cprjQpbp8xdeq5N"
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

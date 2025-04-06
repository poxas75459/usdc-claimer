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
    "6fN72KccUXGr51djoamVe85mWiGuri3hT2dAa7QFG1CED4mTyqWwnNzgDkd3sCqhWEDxoY3yqfcHSKMa9v8hEX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRJuvvz7Pcmqdi2TMEP5RprZAejG3zoL7fMAFGw2bnq6EbHZHpmkSUvWdPx2YTSwWH2FBY7EoDuH1pAMrgzAqrX",
  "key1": "3u6TUV9d4W1dbMGqELsJb4oQQTanhK88JxYHPmJRAceSQK3BGYeRqUVGyMSvawkcDCV5MYe1thvFrSuBji1h4QFd",
  "key2": "2K9Sejww5TMxGNyRkntuBd6MGaXDpKuishALytqdKauBzxtpPgpFGogqCRGPGv8PcsbyLWr9asoKGcrfYqjcmgE3",
  "key3": "4Rfu2vBW9bMyxWzDFZaUjsUjPEUkVGYgRJGoqrQ2Q9DsoWBfscD6kFoudnC4N1VUuSE46ZxqiZjfk4bMfH3T3nJD",
  "key4": "3bHYA9yHXDhbbp9GcFVggRjhAHEpNP8ovir8mWit21emNMLxCt5sTcg4WpBfKD69XjKVwQ8sfKSvmA6prXWoNWPU",
  "key5": "5RyHuDGQCJpfuxJKWVzBGdkpSYK51PzcF68jYi1z9Th24NL8sX8HznZecUw81WVCCocuy2dTnMbBSc4RrbeLPwo2",
  "key6": "5548V71yCWEHBWRs2nxaGhqq8ZX2bfNeacZCUfYa9sESL65DBNsiEL4RM48grbsEMoqKQT7bjgT1UMtpHJUTgjFW",
  "key7": "YEoYut5DXugtbvbxM6nWSx3RUpL4BZXKn31YNT2QhGNXpiiXBTVb52mH82PQqySvBKpPkVxi4tRwwC9EAJqmeWJ",
  "key8": "5uYgAL3s1uNxTCGyWmw5Qv8j4aNQeBEiJE5iepSUdffwwptkF6N17d8CoSQt92DEfTzWwpSVvzJccQnBVp3bDFTP",
  "key9": "5HoB8uZ6Efp7Qye93STYMB5cc7S4sZ2DGR8qFi7bxdLiEXA7vZ9mFRZ5CJEMR2H5wDkn3D4vybNUr836W3jKnp1B",
  "key10": "42HJpe4967T3WqBSD4iyPMtiQRGoUzeZry34zv6hpeFCBZgyXBPb9B2T6Gaj3jJHsuHVc74a2dpanFTxt7SBpX9",
  "key11": "gJJovjRTrS3oUFitMhe6ZJ1y8pkJD47h4YbJAwnFXZLcmFb7ejg5Xz3vPgEBu3wRE4JWok6n2HqJ4WauKXMABJA",
  "key12": "2AqgpAxu8JfiHAKeBuGcMAKb6kGAkcD7ZHqsqjiazzQUSABduA1sj86oT6EfdbgFEDLQifnkf6oZypK9BbTrNLcH",
  "key13": "5iULCkzzRp3V138vXYG5SiJR985wgAG9PU59AAx3q13RKW1SwxieGtmmjnU7k6qxDF4Vgez7jQ2YTruwhG4C3VzR",
  "key14": "5rhjqj7CbpGm9iRCupXJcmzCEqQVrdS4XXifbsziJfDihspr8TevWb1tbFVUcXjaswStjYYgTWgKuSEgoJrK1Bvm",
  "key15": "3N3zZbAMxUJmdyKS7gf9YjEUPp889gPZdGUVbQccYDURm9q1SX4oLJkBr1dpcvwMpq232xMbgaQrYxGGjKioa2P",
  "key16": "2bW63LugezVGrmYYquzbajMSsJoSBrjrW7GyjVCov5RLxsL7KuWiKvF42YWFTtqsj6qyM8iW7q3tnkcG7rr7awR6",
  "key17": "63KXWsfEwvkBhNeTRPQfS7ZEHTxNzPivFW23GMq15cxWb3F4aw4nQakuz4kSMYosT2vFwwMT5AuQ7rAb8CEcKY34",
  "key18": "4msNzHgAnc5CtHNsfeycKCoFSym98xJJriZXiunPynWVCXhCxNKPPmVsSCFqBmy5J3iJgZjbMhcSg3dsrL4dynem",
  "key19": "u1C6UmdgMrPEPbSF8KGkCTGvtzQ2VBrHS6icUrzN1PeeC7Q5ZVbjgz9WSUkpT21kLonwGJ2CMcc8EmQqQbDGFtd",
  "key20": "3e6PGsk9cezp7Rp9epCmtiSGs4WusRdQfuuvh4mYq6f7FjAn9ZNZnUe2i4mcRGYgxQ8JdGDu22q7bmgbxxwudA3x",
  "key21": "24stYEbahTkqUiR8gcfPBqXzPnLarjv3hpD3dd1GUunSETYa6Ko8KcxsJWXoTMb2nF511hwuQTNTzpV54dgAV9qg",
  "key22": "2BdsNsq9rhVdSP1U6MBX9vxWfCkiy9dP2wbmxVWYrfzHunRPEd16agkfGgwHGok6v7jGpLrcLAF7Ee1fW3yqUqrd",
  "key23": "5SM5fudKtFUSJhksBgjPy9hKYp7pnAAytc1ZHWmRb6PkcduDogG9RBuKxB9MeYC4J6pezp4Gdp3g6KLUCRad2EPq",
  "key24": "56pnHXK5rYJFdMsRzoen8jSGnkYr87fFZs2QRFhM3L9ytFFB1J75EhfTdcAxbcuhhXkQGBQcDTzkVhSVoWwMbdzT",
  "key25": "4A7WBXqEvytMnRsW9E2WcFL6WqQXW79V5yCbLHXMkzmaAxWCv87UxTeBtDAqzP4p6Wv1BbCMvCiMbsGGpQpPiyQM",
  "key26": "3Y733KG6mxfWrVTUBdbdBUqiygg31hsQmNEEmyNMcCUZGe4uEXjQK8VJG1ckydJ5q8Wnb5JEbUvhDAMk9xpADEbK",
  "key27": "3735WfnTwXFR9uGVkD8uqoXPpuH5g1qB1CmVN7Pb28tzBGiSFCNkw5Aic4Gsq8p4K9PY8S6po9kkeZkhejNym5Co",
  "key28": "BVh3i3u8ARCkxQxy63rNiwbqz28hS8NT8YnDc1PqbVTBTg1py7iGMZw2BoA3GerYZ1n34F4FqTL6CiYMjUoJwg6",
  "key29": "4vt1GQPcUrcbjf2f2NkiBN9WXHBYuTgrt9a9kxKj2EshaqTwNp5omy1Zee1eR1RxvosfDnT5cF5Xvaud8XefUjr",
  "key30": "5DK57Wva4F1XvCWGHR1orkCDM3VvL3YnGRKBWQrQ8bAu2sh7Ukq2o4EUTn5gRShS1exPBZvnoouhWbxtwhpLAWXo",
  "key31": "idKHVLKRSx6bnPXyVf4RZhUapMmXFL6Z91Qzau8qREbugRaGh1LpUMYCkvBXDz7hDmoDgJnPUwqw7SxVV3nLATJ",
  "key32": "3EkUu41qY6SuB4S2Eenx8dujejAL3E7bNtH5iYmfTZh8sGZYR6aXASzfcMMM2Qz5SbgiC3SLzgaL2xq7p9H7jPkm",
  "key33": "5aVmzr1cayBkFxTtm3AYDHqtF9D22Q5yV6gGzTKkroYWPH1sNT7CBNUnWnK2LDT6htCqmRquxgaTvgygtJaU3P3E",
  "key34": "5EbRohQucRGKR45bbmnYLK22bH5h5i7drkAR8h3vDZmJrUVxkgai16RvtQ5KPbjfvtCxwaEWqaYcaQ9KpVWAF3Bo",
  "key35": "4WJVfvUGdNNYUj5jQakqgnpkPkenJaP365U64DgpuWZUw2rb5p99o9XRyjGMHNgm35Y3UBwvXGGWMqk9zWUWKktZ",
  "key36": "5zbWqoWZGkzH6oPT4Am8oaiYFYkzYjfMh371uXkvEC2H1vQ2AoU4cU8CYwLSUwrL3siV3S3gekPECjjbCgstn7jx",
  "key37": "4CxrURF34etq4uzituaQHcCXNRn7uBdKWFFi9hwGuiuxLs8hPWJNku3nwM4zqd4ggwT2ZVMfihow4Z7zHb8DGA6s",
  "key38": "4rE7ryR6ZsRdHcC5G33CgVQAQh27WxPNiGqVNnt19bZTjJaVYWedsYiV7BNYPCUdeS7MW8wRLBthErqFd1xrsTgC",
  "key39": "HmeEngRCqHkKD7CF1VGEHoHFnGBJ2hZ8DqvbMfZPQ2mPxQ39kneUeFGVvwKZKPJge7HwCM1T4Ji94pSDqAkYCkE",
  "key40": "4qq8EqPPXWGZUNWBqz9rR8UhnZfpwBFyKwaHfjiQc7wSQPqmz4xYyASsxiSfm1ttcq8mazEKnmeX6yLUSCd8JTM8",
  "key41": "wLpsNDAwA37MwPGctQf9Cxy7HkEXWBTirkiWd8yvFH92vst4gCVBXu6tYcdBhfix8EsbLeGxdoavLFmncBVgJ14",
  "key42": "3Pnfxz4MzYJSeLi5uJNiabF1zsUZZggCpHQQ8QqbtErW2318go7ZuSxUSDwEZTgAxtERmuEe21BSN5pcYafFvwpt",
  "key43": "GMCeDdZTP7Vd3JhcYMBMaxwxgSzXjePdZ6rRzgh5UQBdM345mprynjCGioqXpMGkm8jZRoLVJEyCpm2GnBGdT9o",
  "key44": "2mTvpbjGaFoiPbSVPVdrFgi8kiWn9DANYCMpzDJAmPmw5tvcCmDuyqwCzffaaQbPeL7qpmSJibXZZP7N3vUQ8Ap6",
  "key45": "4zYUHTTaQJaaBmyWx8JiBuVdBeDxQmmHRN8NPWPrC6GDBMgM1We2M1TrrvGdhKaBgCuaD1fgMbaxTdMWDaoxdM1M"
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

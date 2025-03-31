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
    "3zdxVKnFV28GXEifEpAy8kVdxcKvgu8BrYUaEod8yjrCNKyg7FYSnTviuUvBxZnsYXQKZcseKH7SR5cHk24Y1jQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jdudZhW4G9KETnFRpDTwwHra5SjJc8hqXZVsqBMw479hEmTPJARVougcGPmy74BoJvDaKx1BNL2GJdEwswmHRV",
  "key1": "3gv7zRVYV9t7AVEW9VHF6KGSsGF2G3xLamDrm3DMJv1rB1R4e2WczrNRStMPi1x4ztEK3oxwrN5yGBY1eGAAWPtf",
  "key2": "3DdUguHfM6iXam1Trz1vybrnqAjnQ24wcv8oycfnUEMpMWRby8Ug5i6wmVs9X3SY8uZ6VbBk493DbEGGZyU3jKes",
  "key3": "3AuextoAgPtem1E7zX1ySNdyQSKD1baaDoJoP8PguMpgSLyba1CY5mD7kENuxxx4SyoJJGmY9QSBrctAfBDfhQmL",
  "key4": "51tXryTJqRovtkS2GoL965nE3yEBsiRm7opSzwkLJTv5EKA3qBdjQzwJKW3p75enojkesf8MAP3Dc4DDH18V3tPJ",
  "key5": "4uVnH1yS8RQBkkhxPq6TuoahtvrcTWCbbyosLdmxr3XEDJwnkyBx76rUY4pRf8KfjuMnTWKxuSNjVYxyNkdasEK",
  "key6": "2K9DPUcwMkJGWFZ3nHG2tiHwAvkCEEtcqTnhfswyEyiTpHk1HaNxhLyyJpzSKYScZWyGykBNP2VmCHp1q2cPmpw2",
  "key7": "2fCXc43gNjMaMNLkMoN5Mmick8XYZSeHunMqr7ki1NXUNFKqLVd4ZFQYW1fQ1bTXqdoRp6w9sy2XuYxwDSTqfptq",
  "key8": "43vX2c1MzTCggyviZgbbmA6SpoSu5G7ZMrqNP9UrMdyV8k4wkn6paEX8zmZynWCnkmJYxUz8C6fnxSKzGryzDv7u",
  "key9": "4wy6ydiWYFiJ7xVhpWiEeoeVuhJUDS3VarwSaBWboRHCMwtRBPLgJAYrnZN99RGKPk8CmfkHhXpkf7N67EQsRYTC",
  "key10": "3fSuL3bx6tBJdhEf38CRGWsVSPMKWG4m43dLtAAbA6NTvgSxmv7E7yZQRJjwgWVGTHMoHb3BtgJhzMxE7ggb7P3K",
  "key11": "3oSSek2r5K2zDUcM9EkuiwK2H11PDLZ93jZqumWRHpJvyF2JVKz2TgJxVJFggK1Hmhbxo9zkys1CJL3xbxsVPkY8",
  "key12": "2D8hqhDTkThFBgwcmCkoWqVbQAQjVVzvH5aZiat1uz9j9fR55VehHoKSfP9xAWCndD1EUpCcsuiJsDr2d7rekxYR",
  "key13": "4vHqNj1CwswQmtS1Tq2hFgTXmrdH9uLn9nqhTLJFCw3tjJupJ2kkbwFCZFN86oTDBLen1BEgR9ZG9hRdkn9iG1xU",
  "key14": "PkaQeJQeiMZQ942fB6aS9gHvQvyMrBHHzuqeff8Ug5Mtd6wyEAithqJeWERNWZrkJ5RkAXcJ41imC2hJWQVBZLC",
  "key15": "57XxJWf893miD7dbSVg9kohjB2LwBeZnqb8tqDzMYCTgrRsBLtTpaDQBdEnwYr7eQbUVwsdG3WAKg6LtNg64bSfv",
  "key16": "2hcBuhFNk5uh83sCYH2cR49TrR8UJEuMFsWbwo8kDsFqSbFtiMH986rEZptLy1qe3jiBLUJ3WnR29SLNf331hu61",
  "key17": "3yJKywzPMHS2BjynG3jAQddQYw6ffpfsNaPjwUWyJttndTqjYPFtFrcEYwjwMBbefz1bRdHYLi3Dvo5uAgNNHmSr",
  "key18": "2pVs5WmNq1hjuaDgr2qKK1gxprvrYSTDTn8WDTqQCMDf4TeZxsNvNpi4vrK68hUmu9QAUcTEN3RWuwn7AjGk5WiC",
  "key19": "5zy365EvAqFwTzgzfv2PE2NfU66TNtfXmcicZyGrRpPGfQ8zHbWHFDsCmFgWqJE5wbd1XyMsDWPyuYiB97hVk8B",
  "key20": "2qJyUJYvQ9UUtoQXMJE1oUHyHFG8EWgdgyysjbm99KhinkU46gsyurjZ7kMgnnRZZX6t2yPhu3xRCgpTZpyJWLNN",
  "key21": "5YTXqkGKK6VWu8smiiZz2gfWfKUq4BPVv3nPK9NrWwquaA9HTZrvDhMidWVmdzDPw6MLR51gHZXVG2h8jgiLTRWS",
  "key22": "3rSeE2ip1jygkU3ZbnBFj5doVnNYbGuL2hK77wkpSoCF7eDpdZraVz14sePRKE4dhpAvjLm1nPv7pGUJDyLtbPmh",
  "key23": "5bUYhc7Wgv8iaeCUcd1UfDTsM3vBpTYgGBqTP9imvx7NgRc6MHcuh6zHZPn5BEj7S3uaxnc9A68tU6SZktEV8KVT",
  "key24": "5w89LZ9oZRn9CTEtNSobPwKXMPEgT593h8ceqJ3aoB8ZufahGppc8SYz5rAQqt2odJkYApJVjb56Jbf47wZVnwmP",
  "key25": "59C35n4zcWWQ6UVegK4J7PQES3R4yVD5DANq26udop5b8sGnLf71aPGmux8WL6bjg1tbgcjPFf4jKe6y4pTgKEoC",
  "key26": "5PVchhd8zB3WFcoUBuUJTfdwDKUULq2Tn2HryGZsUT1UjPbFD8hk378bTDbjfBupd9JT8US9acwcZqaPgzEuezux",
  "key27": "67V4ZuAN2tEWNVe8hHcWfp54mPD5TcfW4N18HhQwXviNtdrc4SuUFiiHMEvpcSSC6M7yKKYDdS9MHT229Qoj4AyR",
  "key28": "4Xeb8nkbXEhMCttaiefM874wqam9k4E2oQRhJC8bgU5QRZpxsCVwKden5tbcuh3NxuV1aG3Hnz76hBpHujpi8bdW",
  "key29": "3aLSx42ZuAsb3a17oKSWC3g3J9oW9uY8r34L1jb3uund9r8NRcF5Zsq5ZQemmymcNT8CgN8DuvAewU13bAqyY5ff",
  "key30": "3jHmUMgwFz3RDgenZEoNSnZXdGXhP2ptDc58yquqSiTaYM75nuVtTiSkJahq1tEczEakXhYhqFdU86zkwqRh3Mw9",
  "key31": "611ipYjzyrMWmiX2ioAurCRvJudpYJhMVMYJfa9dyWe5KvyfWVCuMXy4AujxD6CC1sFNRtwJgeBiDnMdWXoFXJ1Y",
  "key32": "2zj2ACMYrk5nmYLL6znqLUQfZHmYTzKWBXnL2wDShyDp1g9HnA7CErDaAECGWLy6T1jjrkBzDzZQepPavQPd7CbH",
  "key33": "5Uzmqy68yZB1LfSScteKxm2XnQvFUzKDegG2LFhp2ryqqW1QESM28EjQUEzBx8ZqTPt1jTVHazZ2CoM88LsQLmhn",
  "key34": "3pPPjygcfXXzhAezH61ZZj6n8h2x2AjUamtZtoxmBN8F9jGBMvXWC6iLCzAEyCPbXv7m9mwZgk9wXnzew4Azg2LP",
  "key35": "26Yjo73z2hZXsnMWHBLWbnD4b5EUryXEQfutcpRRSfWwUdK42geFgzBa8szfmTXYYSDjhHGZULG2sUKdqbTXm4gJ",
  "key36": "5BYvfMS1oh9ciqNncVLT1F2XaUHbCZZSx979iSCzfq1dDMqbgWXLCAfhVk3KF833pjTxkiaTqcug5XNqEnURjCmw",
  "key37": "5Zoj8VfoQFf3VuhpASQCyukF25xwpRhkg6HFt2V63w9TAdGxJcb7bYohvTfAaHGhU4Sym4tawrJFJtQG5AQvL4cw",
  "key38": "4cNRd59SevYXLfPf5U4Q3BTn3miBpiPStvhHLsnrWTaWBWAKxKDrcwYSKLNEsX13bHXKUH5M1ZqCew4Cho3Dgv19",
  "key39": "5KAHjftfPSPhymBJrBC5zXFtRKPdB4No2fvPFWdkjQJrG3D14KeD5cdGWP6pjQ95skKQD3QLsnJ7cQB1k8Da2oWa",
  "key40": "2FsffxZtMen43gqNMp3GF19XHAcLSnFH2WhZdkndZtXU2Vv9bd4JcaUVFgmWuFAPUeq9KsBJH1ojjkCrk3spThkN",
  "key41": "8x17GVrwtbbHGcaD3m7Lo2a6zBauePZasrxTdeTc5ZmiaAjCfbXUoApaqYDvJoCtDNP6Fuu1rd6jsLtfd3A2f7s",
  "key42": "47qJgnEEJ8gH7rhf3esYPpYzgD4HpdMfesxABi1D1kaqqTm5C8jrA8iRFmioa7U8RJKNcm5qDzM8yBQCkToog3xK",
  "key43": "2KvJmco26BhUutBFJRvR4gz7vXNCmaXt3MG5gT4SkLJLHGxFC98fhn3rbxYfpfhXtvqEUFFHjGdiqVXD1H7Pvmoh",
  "key44": "5wp4tNKK9iQ8fXm49AYaRyCbTVL25C9aHrHV4pE6a6fKiEF1X6A2QYsGLZNpU35SiuD7ieuCaCRMLubTgstSK5pr",
  "key45": "43fU6wteYkrRyv2gRfHUbNfgrsqWECkc2JEptqAjCABdvokx5dghvBhSFmbKKQU3JA9o9jvnSWdm4Qmp63o3vJSR",
  "key46": "22EpCKDqanVo51hsn4bpQjUeZCDtdJHSyp39uN8zE1JRA6D6jH1x5FX8QsKvxQmVT188rLM6MSjfzsF2DV4C6SXi",
  "key47": "5L3zaz2PG9MYYuPYHc18oyiTQPvYPpew6bNAVEG1F6Pn9shkaBtCdDsZGHY7DZWKyy6zu7UErAs2833Zcvwbfoiv"
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

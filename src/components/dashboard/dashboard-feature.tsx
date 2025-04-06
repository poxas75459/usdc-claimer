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
    "4B6qe6kc3meAoA6F5G75gETkfAbMvMDSwyPGDo89P4AVpa4FcrwXEmnyQgk3wUXvaS26cmdrAPxUyfTQwoVpVbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLUgBSm2kBbawLLP1hGDUDAk1RNAPcebFopRGASHgTxuzXSCa2KuGiXgcNNawFbwaT4zGJqwxuCR6H5tLU4QUYo",
  "key1": "BTFukxAgUqfTVsTZE87tA1DABmVRWfuL2yaJWxd731Uwvigx4esuBq4yPk163nDui18QJgA3qyJ1Ut569xGWapD",
  "key2": "4mtj5D8cgqidxbMFbmQAP8GwkthgRgfn37P13BfHCA8ake1nZenvKsxeFArGRu9DY932jJWwU7m3ZfRkmjLYCqae",
  "key3": "5YSLvbgenn7kcDP58pdKzmj86MH3WLmNSdEpM8KmTqVf6e8H6yoaqDRw8uzTqXTkFto67WRMcYYTMUYWGRcwEebM",
  "key4": "4NT8wjYvB6n62QsiG8JW7iG7cN5S9D8WshncYUJPNV1qz1WHUfEro32P9AuJycwTtfBZUr7ZtWT9MFd3YgJeEbso",
  "key5": "5VvEJJ1jR1SBLAA4x8CkFQKWzWtue1Rw36F3vRhZCf8r7LiysfKqxr8xrSreNetoTGyAGCqALWw9HbEfYbKowMsR",
  "key6": "LVioXRgNojBtE3WojeXHqA2mywrnUennbmKFwXNxdEWGhV7pde7meqNQmRDXoLW7bxjEt5QfbDEppQJDdY4JSf7",
  "key7": "4wWMCRtwVvKRijRmHNdJkM8TfMag5q3neMW5NAMzdDgGwVuVhoddAGWQApd7tv1LgD2BRTdjYC3RqJA2foTKEU9m",
  "key8": "gdjMk8MiTXvwEWgSL2NWQ1P7b7SiMXWEYSRDTY79SGatkMHDRECfodQFY8xuL4k5eimohR3yP3eP1rZap1EhPPw",
  "key9": "5RASCikk645aCHwYVNwAHBiqV3zjuGar5LaJjKadbeJA9KaCtZ9MA2eS8GzYCdn2oiQRPqyr4jHkrLJnXgmDrzfF",
  "key10": "3r9qQ6wo7NiQQsccV9BvKTbS3QnxqmejKqvZuZNsuE1J8E2Um9zo3891zFpGrrjhgnPeX7zEVJEHogpUQSB4g8zS",
  "key11": "48hzHgh5XzZtG7WC9ojrkn55SFATPzWiywQPDdvCeoLEGX3HmhCxQnuYKuZDtamcotfHwVSKeMgDscoTZJaQWpxh",
  "key12": "8rfkWurAGEdJvhcaRhJq6akzarG2hFQBVrZku9sk8iWfpSZfYXYygCh34C5aG1u3EQCfpGkz1N97KrXSd8KrVxS",
  "key13": "3ChdPp93BSUJQr4TPpKLo45e2mSdsJrbxnZdAjw8XGJ5Kdxh3fDzK5mC1xqbPJDokiEhyTc4wFJQQrydWuS2sQKi",
  "key14": "5NHES38z2cWJfHG5GMNtwVUXyNr6ZpXH5Jb8HfKpXnBq8XckAMmpu5TVzFkFjDLAL26A213DByLnbfZ4AG3Gwso7",
  "key15": "46bMfPP8M9WddYZDJd4jrovUG8VSGWNUPg6Kx9KzFnP5CnfHwc8AgqNmN3u6332KC7Nos92Rp2sfe1odPMQaiZWx",
  "key16": "4KrXQjtKmdwArxee8rsFVRk7LCEoWLzJZ54VVkYAepe6jWRsmyUPmQCPhtwsPNVxJxE9pgLPm8SaBGm1ht5TCqgi",
  "key17": "5Gu46p6GZySVZAVcFxyE59NxR7MnBReWMfbGJxb18H4vFqjcQmGitQcPKrZhWLMoKYQbYYx18JR2qkdN129cQa1Q",
  "key18": "2pymXyX3zBsDaNCWiXtTsnt2bRp3NrGRwvoyBVUZKw8etqkY8tRw8ApW52jeBWcFBS5bUt6FqmpZi8N8Ke7V4Ghg",
  "key19": "DzAuPai8QKCYYpu8CmZuY6t8bAdYtycme17r2QPe3Zme3aVhqhaZTesMY1EsBmW4iZTUynTjoqxwNM1XcoW1BRH",
  "key20": "54LArGGAbYjvvc1SV9fC9eWAe9i8WvtMgr2F8rBxVj9x9paSSWjbA3fcbThQW17nVyGsxTykFiVA2qBY9F4WH264",
  "key21": "5E363dN5pFYhgVBfCbicR9Xv2rVN1Wi9p226XzjeizSezKRshyESw6Wosx8VPGT7ihQUQN682qDueRvs8UR6ByxY",
  "key22": "3iQDxvMvEN9xNfrqKWZErtBjYKXmjxrqzFuTaCrZMSjAWU4Z4ftpvhuGY2uBDsAAcowgwupni3BQSFn8e9Q7aRfx",
  "key23": "4dbk3L8pGdHwc1rjvjrRp2oeF82iEKRSH4oVxgXGNNcPhTy1hedVuXw1B8ZfCEVgXDB2y8oxqH66cC7s2hSuytX7",
  "key24": "BFWv33EDCCCkNFaE3WH9y15BvmhAgBW1moKURUvT3cEC12mc93ERDLkZMXPbrmfFcAroQVjzdT8hpxviXTkWNdu",
  "key25": "23jvsPvpv2F1r423Gsz9dhHGeRhzoYfCQBz22HSoeSSkamSvcXtVgtbETszoLVcd96btieFBdYtAnaoefMEpyVxg",
  "key26": "HTGX2vHBsndTrMhyLwzc3LpPsLWRRnW1DAM88Y8doFrkVbzXsiU5yYc513SxENb41pvoS6Qp3TSyRbgv59zn2UY",
  "key27": "5P5M5yE9zqeLL2qfiynxrCMDVqfdKW6W5nzPxZHdH6FaYMxYVc3ytGsEcd4iFZ1rn9ikZjzLCnp2brij25FErP5L",
  "key28": "31V3r1crmahy6B3ZtvH18jYxRkFS5UXEAAVwQYEBmSWDmWEtrUZaoszrzkCy5dFtw7thtW2WsiCy9MDuW8BgyWpk",
  "key29": "agXUoyAhbg5ZrHGgpYRQBVHsX8hzDGfNGvtuKUnCDC48rcFJzzFGt8B2stjVTmfMR4FTsrXiDv1z3Hr5Z14KwcN",
  "key30": "5s9Cm8TJC6VvEmwyaG6X97cpngAsMeQTH6itSGfydW3casMCu13yTkCqDLkF5ebY8GxPjB4YfGCWyQSSMa6UpiYM",
  "key31": "4L5vuURkNKb4xMXdAG7m9Pc24Qv2aSQFHWWvmXC2QRcdr4H5CxK9dQQXhYzK7DFMq1TBRMTEMNW9u6KVrR47fhhR",
  "key32": "4EL12Tf5UdPiMSNQn9av1co2EyJ6Q2PDiueN847E4GsTTcqVhygRTxR9miGMF6eDRMpiSngnsLqfZkASfWkno6Ye",
  "key33": "2KpPdwRk7hYwwXsrACsEkBHkWxqgT4kfdTU6Vc32xgTR3ACgFV8KbZMcCusXvg4PbR2Bom9jX7SjZB3SwkuTZfnU",
  "key34": "2BLVXDMqwwHTin5oT8iWJqBJ1AphN3BjFDDt25uidLnYvEy29WEHH7NKrBkCehc92NNarw59fqkWmkMwWd2ciurE",
  "key35": "ZBjcG2qjbpYM3zTu2ReS8V1JWXhvnoLwPFrXQMBVSSSBWaMLcf4z6BBTCQwmGHxZbn8ANkgzFrkbmakWFWCzzLS",
  "key36": "4ZPLBJvYTmQddfimmWaKbQFm9bJEhMRrnNRyCG6pm6zY2f2JXW33PYJuFLPW2ZNCnR8opPKTwQkGF2X4QC91pab3",
  "key37": "5efkkNjUK7tuVxuD3FYEWgRMraFjJPFa6VrMwhh6ykraiZUa1k5AnJcEiS2DJpdJE3TQfYJzB9gjYifSUuy24bX5",
  "key38": "4AD3fy7S3Aodk84tEYH7bjf89zNEkVXTbY81H45L7wavcNPCrsDi9ZHPzEqgP8PzvLzkb25bwQU9W9LHrFWnsPnV",
  "key39": "34gobMQfesDWZJcceHcnyHqpYMnNzZQosBQyaDfGv2idmzzLkZt4xM3fBSWg9r5zExrvg7KnhreRMDv7FtVdSAC3"
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

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
    "5niVV5VHa42qjTq5jgFAFymCRfd8sUzttbg1Zc1cKZnqMVs8GgiHjzM9zzTVCheAChM7NGQMJSAKZyAAauFuqCoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fgMtZyQKzKibbyk6vhwXW2Cq3BaXQ5UUeUjzhuBLiEo6yVrJJxBbeZJeA7sspTimrGZtQUd2mJgGp1BsnDVwbV8",
  "key1": "5TioJU8MmeURftLL2tJbd54c21xzSYrL6RPS8sxDyLhCG3aYVi5h25vqCsfsaTCDKm8UexMJtvCSSpa1TkEyM9hX",
  "key2": "5Unzavj9CrzqpNWSvisH2PvK8fPs5o3Zh7V9JDxPBzdgHf4zyTiYtQBpRwJDPZRtKACA83GUgTpRgeHhJa7zZL2B",
  "key3": "5JCLq3rLMxf78XX95jQvjm5sMi7QiWMqHGbCnLCk4bF8bPDBk9L4bjkMwwRe3SLjhrgCRAq4Fm4VdSw43c5bXX9T",
  "key4": "2k6CPFhRYHtvzXXTv9aMrkwx9UVXnZz4U7e8ZkykSBGPynmm86xAAeHnpwiYhMdjPLs4JToGGisbzf54rb1cqodz",
  "key5": "5C9A1uGchc6r7aEDqPR5aqsCsKAyf5mAoSr68kYgfpjUSdju8w3S8hJfgdkic1UDe58Eeiz2tiMvmWi5nJCUorZp",
  "key6": "9Ht4AyxEPdyvSG7Z14NaT5zQqXqS845duBSv4Uvm8CqizX55FSiu82LwKsVDmBjaZyZ7Kn2NnaNR4gsCDbxAkgw",
  "key7": "3HtPfC5HwUp1WSzb8KQcNZ7T6wtaFcrcPko7tVYC7auGDEtiJuHDNKgMQE8yqVaVCtH3eGt4bTWGE9L5RE9LCuS6",
  "key8": "473c7p1VzS7X77EfbpH8Y6mfw3sbSxV5HrzUAiNRCWyi79qSirTSJFzziPJRkKoTpVTFsLFtsswkAnmQ2Y6iVgxz",
  "key9": "4ci2dwTDYqZtVC3ntM9sc3f1KBCfLC9p6fNDMj6dj7xAdLQYu5A2TGxtD3jj8jmR3ZB2nf2vbyxRbmYsnks1iddZ",
  "key10": "4qrKwrsK6Ytzwj9ayETPGLbTnWjYKeoq3ncDoKEu238gq7YTAiwEtcYKr6YjhWoQ34g7PQZ8D3sfTbdgDFgR2ffh",
  "key11": "657xt9HXm1cHKLGw7XjmtLcGNY1soqv8AwyrV3DKh3Li1NAqFGXfxkaPLHvKLB5dD6tWcBk1ivb7JUoc2o4WZ2WT",
  "key12": "5rD5mXeXmqvhfrz2aftJYLwGx8NwDwTtrgSyr2cxJB35xqoNgkfoqAbeHAYR2QU7rUBh78m3gGKLVuvN3i3YLGCM",
  "key13": "nCQKsFw2bSeCvEGvkBHjnvTLqhM7KQDZPwYS3Yk5nZGGZEKYNum23mzpipzCg7pcuhAvj5tS3fELLwMyzmuTbxH",
  "key14": "5oa7gGEggc6WZNeL3ktuF8Gvqg9WwiVSAgAgHmDaf6J1Thf1qTS8uj4nQ7BNHnFfFLBJeWkK6ALjK7KbrS8R6VJv",
  "key15": "3omoKcjHdnu3aPL454ir7AkKqS13TEQn22ismQnLnXXtSRbgyd8NoeTMeyFmM1CQ8taJ55Kw3FNcxNSmGkdWyTJk",
  "key16": "2y1pBdJZWy8fU8TGHUtzwj1jdtNYZoNtxnnuGjxPVadccGfuwaVA1mJXfgA8mqicbDUvpDQSVEncWratuuuJZUcj",
  "key17": "2xqyeFRZRBFenyNJLZBr6eRVUFPpGLRkptkXFZUWtgoREXAKrDmkoL5ig7mQSREjbNNtMgPXJuMDTduwj4Bxg1Ui",
  "key18": "5eR8rb4AoTNYuVbJ6hjKKxP4umTGG6ygXakH5FhzWYjs9TrhMLfwvYvuPrghNNuwzA2N3GhMtrdxGuPYBKvg7g44",
  "key19": "2axkjG5Vom9aFq8v5iVMWgFTo1KRPWRYbN4aGcpznpuekAirUVDLwHZSCSkU2d5cevMcH1VS69ymE9bpZZDFjB3j",
  "key20": "4BMezUfb3Sn1QayWzBZR75zPzvSGFed5xBLp1AgivrRQcyBXTcFMMKCMeWWz1RzfH1P2FAw8PMMLfA7f6DV8eaYx",
  "key21": "4w7m3tGcf5n3e53dFQEqnJrdUcp6NgPwpk8pjBa4Crbv4y1MdZEDpHDioBx7HSRko2fnRWGZx9GDqPGdUxCUdyFa",
  "key22": "2NTCi9idChj6NuBMM9kjX1csuiACsmGcyUV2vKUTTGmtkDh2B3ztpRv5o1Bqh5TN8wcVZcBnFqH7JBeGKWc17SGH",
  "key23": "3M3u6KnTVy6KX6TivkuWS6U2cxfdFvzHExMdL8U8zyzgDt8gnaK8w6pGT5tQsMCs7SwEdwnjA87bKSr3xdL6goGU",
  "key24": "4jpxqQAK31v1J2uknXF81HXYm1D6BkV33ePVMePq9cT6cqG7wt3i5KKycJfxzjecW6ALfBWt2ddU76JBzNR4RNNV",
  "key25": "3ZMpnYRF3MT6nkVuQvkmVp8eEcZbFen4nYaoM5mg2RMxUhj4s2U92FMQzFnspMURH86KK8NJk2xNXfccEt6qTr6s",
  "key26": "5ZusbXTfZCSrP4RUp1pdT2BGf9GmgBACLcngX7CvKJ4QebR9qTAfns6HA1CzWf2KnGemE4rAtShwjbjkspEfUxGB"
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

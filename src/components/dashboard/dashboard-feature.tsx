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
    "HnMDNkJsFkPV98KZjJoc8n4Ww6Ea1AGLwBi4mFwkMtSzWwUiuFDKYbKz6rCfqPZ55U8xs64rPEEt4AjN1yiyGzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLbC3zcwJ2GjvMV3csQwa7kMmAEFXxp6urTUi3x7ZqWTYXuppgTA5xGjsUMgqHA8x4rkhJWi6LKXffAA1iZVJhR",
  "key1": "43GoLMCW4V7J4cfUGrcd2iEfUj131j1A9DBgiSe2QAS6jUKkrtYzyWsaHBG4zDg5okbezSSqEQebuDYcVDfe5vJ9",
  "key2": "4UTqsGWV6bf9NsibwTDLVLYee5gwmxu99qR2BBrvm4MVvev1x8jD11rEE8NJLupZ3eS7VDzX11oXTChZy4PJDurS",
  "key3": "4NpXy4p6NsMZknbYRoFCzn9G6E51CnRrJYDbYrT3JEQxCBZ8M7Ppyvd5RCbaZNqswQDSuEV9EyQf7dSFUeG6vN2y",
  "key4": "4W6L8CBboQsqe3qUGTGtzFszuSxPsbwhC3sJ6eAPg9kfxrfoTP8oEVoRELTLGdBMzGGs12FP9ZvMeha7zTM1v81v",
  "key5": "5Yt7P85vKPk68D1iCvWnDJZ35V8NwVdsCELUkP7jm1eipXFj7Bi2wX5of7XXBCkr52w7YLSaRzoP5CjrGgKRJyKv",
  "key6": "3JJmccmDxLWenuHTTUvMK92jXJpvHR8SZwNUaQQn8UiioZNCXFstMU8VAqh7BRJosaq7uUC5zFYx6oCJGM8Lw7WR",
  "key7": "5uv9ECL7TdqDPmKLjDAoyNswtgfRGPzLzEmvG2HFYAEuTqqijWTC5DWpLhMdgmPP69pD9Ngom4feoVSUwNw4nNis",
  "key8": "5PyMoNW5UGbEzu5SukWXWy4zfhuMrjuPdd5NZQN6PsLdMg3Rj8LP9y5QmxTCVrjpMvtjjbahVs3Bxw2uTw3K3wtG",
  "key9": "EvqdvAXQsZDVH74DGpAWGp4XbMzUUHXCAdfvfEk4PPt56E8QbLaSdyQ5uGyqffGr954pEBgSSXnTnhkCtHurEy2",
  "key10": "Ynm7kyS9E9Txj54VCcCupxbGWTTACiLDz8UGgUp1LcE9E5wVYqrYhe3HMpKJzW9ynXq8vypyjAcjw8auHQXwjeo",
  "key11": "5dP9MrTLpDC8TJASCCM2aCvXqL8cBqdR1aG33LKzskWU6MF7Qo6F7w4T1nmsEKCn8gjgmQytnRWMdbpSJKDPrmfp",
  "key12": "4cSspAowonPu14Vu3JNpPdqgBH7A3YaBfjATHa2YAQPt6UE9NetcMzuSLWu1pxzGoyYhWKans2JLrvGYRQfGLLdH",
  "key13": "ASMJ3tJWX7c9nyqPNC5KmmWVV22onDLVqMakLQAaK3YfkSNk4Zoewi1VHDMRu7amieMZDBW2r98kmUg4qbpCLWj",
  "key14": "3oEqngmARFspiPswe5KgCXtiBZo5naaJJndemyNHQVhGWhgq9ussGz2i9igBk3kQvquYxHkHgP7w288tjGRNYMf7",
  "key15": "54wgytKmhTJWxXFRDvdGGBKTfhtSVfsonjLjuijwpA5GoKsG63kA4ZVPeuh3VMZNYC931aHAiHQJPLdD3hTGzbWN",
  "key16": "4PuHGwNYGwWHWYCdUtKTpgftjKzYr6TDXHiZ3PdbcmoHYV1h7kFb26pV58VRQKbju2huaaKSXmPS8B5oAzyuFxjT",
  "key17": "4YQqFucq9eqXnfksGxcS1uG3cWTokfybMa1n9vAxqN1apBaCf3dekavX4UKpHdK9yJZs5p1LN3PzYSRhiVR2ppT8",
  "key18": "2a7giq4XfrLE5tnjWSdXPxzWyzrfZkehDy83kZ1yYiBPcYeaek1h8DtSSsXqsSPwZRYrbFFrRKyBzkwSMou8WpEN",
  "key19": "4iVXW3MiLRTtoQTBACrr1SAnNXkFedP9VGH9H3NxmuRVh4CFcD58o1KRTn6fBiMfBkHcu1NgYAT3q9LQ4fyyhpqH",
  "key20": "3LEFPZ4WH4WoFDot567KzbN36Z3MpHRgnXYwZXVvqvXE66dm8cMKPUfiwPCxW6Dyry2DXgg6BEzyDXgw1rH2b2oo",
  "key21": "3KMY8uwTqY2tXAsxJ1SgTFPfs2bQHjzeP8ERei94aZZyc4K4ttSBpEWmTDnNvJSF94mEskdqtz9eodNiSPePX4tY",
  "key22": "29hsXCeBecf5cYgwMuM4ZoG7P12tYsfFAp5FXYHtSBMJsje97Mw1faFYoAJBeb13kyKZvjQsFbo2qvgBwxSQct3A",
  "key23": "wLtFQWNVxfxCBpSkLSgS1eFX5T4ayxkfgpKLsn8bg6VRSeEceKFnfNnELNE9c7PeopgNg7DC2mGFyYfub6KFaeX",
  "key24": "4pHov48DPtUm5FjFLHs7222ZqYR9cbtwoA3hfWQX5b36SAxZNgS33hMwWfiTn9hybAGHZBGfz3yeoMk3w5yucSSb",
  "key25": "3hAcjrZ4BJuhEyuu4gAeDJA9DxwTqbVNrak9KNoUBoGsjsZa3EYvVpbFrHdGoX21HAPhkGw32eUbFjDVevejFN2f",
  "key26": "4oMG3ig7RmbUgXgg3GvdnhQ6vFHi9DtA7P4FLbutbHLRf7NNESdJBKgGgU8RRpsrCHgskBSfh2RPJSqh41DepZMW",
  "key27": "4wafUpEScggaiUiHcE8vmiJoG9Lo3kgXwbQhgXce5eSFL8CGB4sL1Yk6oEZQ4fiVLJcABTzrYQ1RfatBiLpbWSsk",
  "key28": "3VYvzHffvXoRfVTMX5y4ezqMht2g9k6nprSnq51NcKEecFxPBQSJ7ngEe4tve4MA7S2GrHRXrLSCtufwtRicDyKr",
  "key29": "57nkZCkxcnPzqH9sMrH55oG4eMbnvz3pK4YmRYmiMpbBuC8nRKPVeeJNUiG6TBktdyLC9bRhrirDNmNiHAECxwsw",
  "key30": "W9srkBq8AWcfJeRLfUq3nb175bmYNXyoqLndUWLbeHkWt5mWPm5YyzEhoqG3EiHJpnjmJN5XMQyhjsz2tmBUA2Y",
  "key31": "3QKjVEsu9NYiV3McWkPCRoofkJKNfoz1LASAtRzjhFKmcBvnfRfLqn2DSb9ioSjyVJadPNintAu4WKJpjjC1uLik",
  "key32": "23DNzPEcp2xRsnCCJj8FbYYq8mnktgjsW4vNxyssV6srJFJ35zokFt78SzeXNCDfFfVSXKxGG2w6ENGUFwT5iJfy",
  "key33": "4izU6ZkrywCP85jVEEyhfFone7yNDii4MyNnUaugsf3kftyXEMKH2VM3vupywFo6fzCr1t2KavyL2M7Jiwjv4sjP",
  "key34": "29LRe71uaFdPbrWc2VjWYbQBDbVE5kpugrMCyXSjm68ASJ5wTsrBvoqvACHjWKrpDTdGeUN9k7XySCYpQD75Hi9m",
  "key35": "5FBV9ZtSFiU9BRmbnEoqZvayenSPW4YXRzpPrwMBXYjK9Lyz96QCfme4x9CAhGhv9rvYr9PRLDE7uJSp9QqNdfah",
  "key36": "4B2BdtT3yDCEaSyKmwmwaXmFRhwr2amgVeDhEkBfS21Fw6KFGi5AHoi5CwytHqQhQ43ckSe4YRzXeagRYpnzJC4K",
  "key37": "GbKF2uKYMcZAJogaWAtrSS5fXTyKQz2MjqFwJQDuQwFKUtfZegV9mLzp4oqw9uEVmux4QpiUxAouDCtBnZPVCnk",
  "key38": "5HKvV8iPSaF1tWCSHaMJGzWiMTGEirJ7KR8gTiwoMRP28mV9vjKkr9nFs1bsac1yfHW5ewsAKLmLKNeSypFqiU3c",
  "key39": "5JytWKn7Be4xvRUPErTskZD5KrYuJWgUNzke4HUJqBLUY4KDLEQ97uDsqDmkevY8ktrrsxUVTQkMcRdiTg8TwjD5",
  "key40": "4AeFhKsLSwwZk4dNJEkbh6Nqf2zeMkxbrzaMEvVoUxnB2q2RT9kpAnNBWjkonRq4k6fsfgSwwr3YZRsKpb3QYiuy",
  "key41": "mQDzTHjvwURBxUVMaEY6ba7cfLatEsqsoJPkqEuF6qAxA3gd6WuBYepsAKjn58NmFejjaRvu2hgAz1VwsHewtBs",
  "key42": "3bzS5pjwEp5S5m91ig1aYm6bhY5mZdfocfDPSwUkxuRQ5u1UArYcPnUZr2ynugWJ4ngHg6DHTeSERrBKk7hXUWix"
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

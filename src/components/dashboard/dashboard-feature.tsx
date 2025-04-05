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
    "hmjmNwHrh1rdkTZPMTJ8LcqfzsvCrx9UhxmR4s9qZhYbuzjfGwaa2F3TSx7o8kLPqWV5WeZ9mW11Hx4EbiUURqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42V4f1rRpDhbHLLx3TPKR2hML4aQwtYNMyxrHhDYLDUmS4mrz6TGPc69TyU9z7ex3HvoTPi2tbkvofMZxyegn4WP",
  "key1": "5CALCYrMn3see5ACnXsLQvSTwjPYUdLbLx1bCnPg5n9WesGSfnKZ83ubb5qsG6WNq7HrvrSbotpF6nB8D1C12tV5",
  "key2": "45zStyWJFntsTvetMCKmGrkDUqchubzWDWhF1neSyFUC86BgH3ukqtk69RcNj1X2RSzrdGA1cnKnLo1K8c4F2ich",
  "key3": "5wK4mvUJ3uZeqftB2DxEnirQkBPyAtr4f6NiQN3aPqYJwGqovMrnJ5S5Urw6ZyL846oGtZVeSQ4irpQLMSKQYH53",
  "key4": "5HPgCPA1VnxwHB7h81ZoKFEbLtBj3jUhK5aFeddMh9V3CR4CXhuypKzhP7to3zg4GKM4R9HPPa8j1tWwgGTNcdgB",
  "key5": "3jJLBn28XxgDUMTpDqXNntPZgPHJ58ZaoarVwUnkHoFn4ESvA2BSbvfRBJKmzMSgG1dLa231uqg5aHZ5449rod1n",
  "key6": "3fw9KpDmGGv9eUYWPW4qdgpTY9Y7WzBLRhBXrsDWvGVUQTDoqzbxUbk9YgrCSVxoKjM1Wkz3T1WuV2LisEzy9Su9",
  "key7": "3d2gNjuzBhdzoYLWaeR6K8cWMsDXMdRNzmmcXM6HSeph3P9Gg9Df72VcZC76CvkffBxcK9nyMjyAiRE9SVmFS2q3",
  "key8": "CZSnZhvjyUJ7XC4nggh3xZquBKCR4JxRceXbFfCEATywxYQSpGBsYdLmZTjZcX8aJJ35CPA9isdoTaG4Wn19uHR",
  "key9": "53uuovQo2G8EvpRRiiAqJCCHb1jh2yuqsaqJyWKfk93Kgs8msib3z9Ws19bHBFveAJG9frSjmUwvNgtBoRdgTHur",
  "key10": "5DNu2wzp5XnMsyyHDqh29bDs8DxTdZ1DZLnzDbT9v7CnJriACCNuhaq6P8j8iGRBUqJyyspMSsQCWe7TvDoEW1fL",
  "key11": "218kGKhK13HZveag5MzDicsnYjn9RNiXu1R75BjsBMGGPgatWMz19vFAfhCYDDfV11cLpK58ckAFCpzn4sYnTwtL",
  "key12": "fgXviWQpeBMLLFET37bP2f4nwbTYSakEDnSLxxZRaqugkFCoVgJ8D8zg7tLwTLmHuxswbc8wyc6nsuU1myQLPCP",
  "key13": "kyeucFTtsRGUyJA9mUk17zcfbirbMjwQXYzWrmQLSA9FrBTo1No8yWp9zZbQ2wkaJSGAV9BoagX9smNef6w5uQL",
  "key14": "5pAvPwsekX12UNQDNdNWfVsH2pHFpXT35thvD3geYSnxutqviAVPFrD9w53tkGxLmeZM3jghQwYSQc8DCXLKurdZ",
  "key15": "5yATcvWaQKYLx7wJUywp5hSeYfKcNcDiAoR6KUyVgbq9mTNSk5EzJ35iZAkdVFW9XkBkP6cgTm7D5pagTYCmi1C8",
  "key16": "4fWG6WX3FjDyaSZBFcEko42iRZsq5FPqg9SZ3RCgJ3DxofDfeCiV3PofijTDZarEeQzQgaARTD5oGX5XdTBNwLf9",
  "key17": "4MwDXdXiEqMEwfXuALRQXDM6VF6CTpXJwrWQSFpjYBAxJkmrpNvyJRwvMtHHSnhDUus8DPDoSeULPPdH6YyBBZyK",
  "key18": "4P1pQqa5srZRNWAxiYGMEchGQQGhL8k9g9Rj8xHTLPo1MFsXvmi4TzmsUUzw4NUEhXXFEiUgdtCde3FzEq88Fzpd",
  "key19": "5LRZVisrJHkd6gymzHZkbN9YDEVtXjhERfa5L7oGQAH6cqMJoSdunTSm8rgKQsb5QPg2Vn8PukHFEiRLZBgKhQZ3",
  "key20": "63TfR3uHcV8Z76upX2EQHAQRD2zm5tx223WmRzhBVDAh34uSKzBJv4QPfdTupQDDJb8AUnZzekjfZNadJHwW7jGt",
  "key21": "531n9gxg4n3hsEQP4QFHPCBCx6BG8SSVk4qzT1AFuG9HBdraVzFbnxJP5wzg3fkkFeRELX2PRnH5sTMVaE46gdhY",
  "key22": "3iVzysUFLRBq7uWdDUJvsiTLJ638mL5jAV42pcKg3a7PfxXK51TEjm7KdDjPgNoWKkQ68nxfskxv1b26tH72Su6x",
  "key23": "3z7RusA4yse7GvwFZigMTs533TX6qh7j7ytmrMuR9BuvUMfLgH3NyBYC6rALgaq7M6jv5b4HBxuv6BfrsDZxm2UW",
  "key24": "5c1fi7DfWQeNtNoK5QoQ6uNGZq7RBjsytFBLC82XTHhBfL5P8C9qoG2W7JJd58qHucuSevTNmVkzNh56cMfvEL8c",
  "key25": "VQUSyKyms2e4gKJFVSP6xHiUpUHWnPd7koTDSYuGu3CfMKz2R6BNYPeXcdA9PHuNtri7UkQxNPJVDT3Uktzjyw1",
  "key26": "8wkDb6LYXTLZWakH9MGDTZm9EBV12PTZqiU6UH5xwFvzxWyduN2wT1mJnDiERK46iDpHSCtXm9TiLtbDJjPGv5t",
  "key27": "58f4ftJcSmYbyrKBTkU3UgMp5h2KVRy8b2uDL6wQB9TxnNJaKtZ1hmzPYWRrxCsam2pFDJogCUb1rWCQrZnbRZZb",
  "key28": "2roQdiik9L2ipBGHzngzEnrtHuYNGirMaTNQDXCAWRhpCEjraAbXxTWdxJF44LwFb1sqpvjrHNQys3Nb4P2WXpFF",
  "key29": "4aYhcXJUNYsgQes2X9pmZ2etHu72xHNNKp94Y3NcRAHHLBteZLUBdkAkcvFMVSk2AyQom7BwmBuojihTWs8BPbX9",
  "key30": "3wZMGc1fcCFo4Z3s5KAoKWDNS9iSPatTG4KKpzFx8vtygJChxZVFmcWxJHZ2KLMuMC3yEGzeCoBQdyL5ZwYhryeY",
  "key31": "3kurGnCP1FyvjYgN3NSMQJSqDwcwS1przMHUu83vFpNgbifXbZhPEVKYGgxYvRJP2on2Z7R91Bm8EZ1bPFczDLQ2",
  "key32": "5FCjA9fkwNTv7TK5TAWHVATiUx6ZvZzecgTi5aFHLpW7wzruiDr8w2HY8BxD3HhdCSZG1LBcknNNEsz8Pe5S3BY3",
  "key33": "43DYvmTi9PCnq85KRn763gdn68uRm15w9PHDKcWJDL2P56SZNdeYx1fTNerYwy8V7brb8VCwzjGoqg2kNXUrYAs5",
  "key34": "tNdgaRRRRUhq9gN6S7hSQFWTiSErbYvdVVKz5axShwrkE7uCpKfmhTNW1CZ7FsS2dKxy37rnihctcXVJvyFU3Go",
  "key35": "4TFjcj6JPt9P7jt2PVdFHAMfKjkNqAyZbdRynuZ5sd1qM65ACd87mDYkPE6nNGXj5uUJAFHLdbocQ6QpCqxnvPG1",
  "key36": "5KKZTxZ66G4r9J3GHpkmRBTuduKPt43efuqzZ75BJL8dMZuFpkoHtNk2Vp8RrLRjpSMRpmAVjB5tEmAxWgC7juey",
  "key37": "1rQmAr2g7TKfCbAEfFzibhDE8BQpSa93wyWarFh9jcjG9oYWYjCqPGXMc27NUm993gnbUPbvPh1WGN5TYVtDRZ"
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

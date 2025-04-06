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
    "5Q6sjNYR2o7r6dzASzcKi7RcgMz4s2H6xJLXtJ3D9DUjB6rxjhrZ8zTfpsHYxfcgymxfDvRmHgnJRq9roQinUvL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPDCaq1Y9eFew7KzwzGmq9V95vdi5Kr8uVibjAS5SmCnbdXKVp9V2FWtETjnG459B7DtSnSfTftALA7RC799Q6x",
  "key1": "3YtComWmdzrraw42aLgBunoaW57bJPoZfKkWDnBUqxngSzVYtabxRLJW8MY7SqAFMp3woNK5976FUkSW445vAr8L",
  "key2": "5chMhnF7jtBhHykyp158yJBqFe6UkWUeKQRf5GU72vbsxEn2bVJ7AN7mFKg3swPQB2zoraTTuHF5G7Y28X6cvydY",
  "key3": "44bNh6R3JNvbrs7oWbPUR4iLiZ8PEDCbtKqVGjAPxHp96TrTnxUYKDkJJAg6PPRDZh4AXMdRDzjh3mBRRwf7Zwen",
  "key4": "4jXLSgV88G3R1ZxPBjMT5axWAJPEioY9TSmFxomG4cqv3nj8ysBgR5P1TiomTSXXUNHakvaLCm7ibBwN5UaFxBP3",
  "key5": "3aiZV5Mg3QUWnnoeJ9y7CPJB4eWpLizk1oMTYPMW2mW2v9YTfaRbSEcEYNSjhq6RkBH8WQvgdTac85WEBKLtgsqC",
  "key6": "5sRCnp6AJNVbCT4s4PHfCbnraJsWnQyUL9iX2WioEGnMqHyUFeHXvUuDEsKXppJ58YRhLoKxpiApXFxz19DYvaA3",
  "key7": "nxfDRBN5FyEA9K4XzHRjXBh6HjA2zsmHWZEmCELaD8ttinrXcpBgCmR2Dphdu5MA5w89XimBTAwv99pazX4FDHG",
  "key8": "5QA2GJiLPv4gXfA6AgTRLcoHXLcrLFJvn2LVEx3GtC83yS26G3WF5z5McEGxkidVBsMH1AVmwo6eZrktXtJHXvkA",
  "key9": "UHuFcf7woELe1RyfmNFoUvYDvuoVnjBbx9opn2Sx2WFqP8kcbE3YxNHNTqviC8om4Tc64HvsUzgKSkmj6CWpBv9",
  "key10": "ycA3iyaFHbmaZZZPJweHEKNyBzPgZPz8ki7UPbdk5xhMLvmPsPD6juEQkyS9ksJaDizFor9RqLLjUwNBo4gohUj",
  "key11": "VSHcKLv2F74uSMZgNdieb2ELQtMg4HJu72Re2vsrK8BU18PRQyQBrbVtmFS2nLfqEyuj6PkAWJ1NRGz6kSd54Ri",
  "key12": "5eS3KUMNspdcoa7T3ffJcq355b5Q2aZheHiUcysw8zgPF6yMqcY2ywjUm1o5hrFocEveZCb1SyhWQhjCtwMqvcM2",
  "key13": "44VtnQGyLUmpYx329fcEnRQzi2SxBnkXrRjADF96dU4mSfey9suw8Qsc2q4ZnjTi6X2Bxw35FDiBX7ECeDSwSSgH",
  "key14": "33VyJWc7QPPkaXNomRtnaUZwwnEvVAWo5vLy3zkVdC4d13Ub5U4e3CMYioMCm5hxPb2wmSP1w9D1QgtWSr5jKPbQ",
  "key15": "5jJWkcrPbtfumz8oE4BtAAjtSdeZQHAMCs4DBwejuMow6ekRdd81wabdFK1MkmaDgT3E2NyAGe3rBgJYsRRWb2CP",
  "key16": "PxFTYHYtMGm8Gj2VH4KA28A53MytN6s1PCnm52udvmE4CiDZLshyhW9sBUPabyVyYFAMrNzUFCHQS1ddaBQqCY1",
  "key17": "4a1JfcgY3Ze5uRS8ETfvm2C8EfD2U7vVy4LUst3zedkPkTd245dUPK6ovkYRidYyj4iwRBseXBMUHHSVeoRXQEgt",
  "key18": "38kVdPwJ9Sg6RsgtK43VJKG76JT3V4AAgZNzXYBzv6HZz8uc1uaGdJMgsXrENa2nRQJmg4p8Xm64scVAr5t2qQNP",
  "key19": "3gBfwyjHBn7kNzjynVQZDYxmfg57THjHfDbSwgfdfMPsYPn2Cgr8RSA9mDcQcEBR3U2hg1pvNbAHVonnS5P1NFBK",
  "key20": "FiYvWF8i5jd8tgenyzaxgtzyeGYfxDxUvZFYXo5EBQRL6jC5qqN97GD6VMGcXR9Bbb2AnLAjmBVLuvn7rQzc59q",
  "key21": "3uivro9vwQjnHuDZrYsxkVyv5uuPEctegLNiBK4RZxb16EaiwYFH91zrhUquweCnvC6HRyRYgru9WUEKLx1eduYu",
  "key22": "4ypo3HdDnpa26ARGcmGsMF2KB8HPkNhb9CUmvhxvx93XZW2WSpfNpUceuiqQNZMe5AiU8bZxdoj5arXRTmuqGqh4",
  "key23": "46t3d9AB9oY84cGZ9bMn3XoPNQM3ReXnzMd6wTm1ubBc7R8M9yjErH5GR6PUa8oRPoA2NWuTSjEo5yTK6xhLwxAm",
  "key24": "2XPC8f5Gufa36mNivToajHNYF8LR8rUJ5FefudGsPN5eQPmY1nKapGBwU2drekWFuuKxuZ2CzucjGcpgaAvgH9j1",
  "key25": "2NRQhRSCnH7wDw4qUCurgft687kCS7wSqJAPDUWWS1PkkqJWoVjBwbfto9tCBqWWUhKBm9jjQY3skpneJyuY16eP",
  "key26": "58x3qqLdfbfothXN2ZW27Wi96YoxAr5pnJ5MNeM1SCdYT6kRmUW662HLhcAyhN1UtdVZ6eY7P3GahuTf1mWdEuu4",
  "key27": "2ZhMbHjxhJSAbUbBfXMk7Yn72wjZQKut9Z3cSNa31Zhthzmrk3xroVkUzrn59TxQghxAqGQFvfUBbtcJTD5CByaa",
  "key28": "37RSwDvwN5fgfBy1jVAWngFUYW3MnCoKFPL5SUujHDCUmP93vdvWfdxVrvc6SvBDb5rg4sYSgmhRMUJZ9ygvpkjT",
  "key29": "2UjzjCxdfbD9bk9DLhQt5m4znBnyzEoHLZekwz4XLQkUbW5pb2Df2PYtTq4XNpcNoNW5wGGf5BWqCPGMETUEVngX",
  "key30": "5sDTyqJL2nzWbuFiqDJuLUQyWfKxeQg8x4m36pJQmRZuV7LGHaGWvtcgHiPmpUAPEjmYEVaY8SumKiNMkDSpdYTP",
  "key31": "2hbNVWVNHtR5C7UKYmiZRqKUNctDc6WZxvcPTRyvTeECNvX7tm7Dsj5gpsXCZ6oZTSoPSb7LtJi7JYCUjH5Tn4u9",
  "key32": "4VtCqV6JpAihFom6FDa8veBvB39jV2pnSHC3LgaYc2pb1PWV5kAAZf6T8DpQQYXSLSMjWirNEuaF5QvaYMfBTYSd",
  "key33": "9DkjGCZbQFpyixkZM81QTX5ruxRC39XQaCiMgbsXiW7gkjwo9DQ9BqZSrMaqKjpESJxCkLVx8UoMEb7CaB8SjbB",
  "key34": "acCcWQygQDXJ8wdbYwDZyFBwVULYuvTi65dmupRABXtVMmuXAkv7jtg2rAMpB9suJZW37pb8Lf1jcdJ8FmDxBwt",
  "key35": "ukHztUS7j6m2HVARStqJwwzWM1FzTjzLh23baY62KJK8J1hUiTNaGwehC3BYSPQWp8mQ42JB79SLmJT2G5zPfes",
  "key36": "286xZacu8hzjMUiimwoAgrnqCZeQDM7BtzsSSnSvbLQZCDqd88Kgh543RoqcZ7Hctgw5xKjsyYtafe1AYWaF7YcD",
  "key37": "8kAwCxPhjJpKeTyrUj2kkrk3E64Qzb4aVuULqszG3MxiVypTdvA53d4Nx8bXPJcKmDiL6tYiPMQzKc2t2pP143G",
  "key38": "4ye3kJ2Ueqe8B7ytAHZ7kSGvUcUffwVfas6BWtGDm5cKx8AYG6GQTVY4kG6PXBcLmAduTyg6fLx7523XRaia3DG4",
  "key39": "3NHvy3oboLsb4qoKHHGWKLAK2VfXGEW3etTJ3RyoRcu684Ja4uy7vjQkt2suNwCXxWmdhJTNezJ3sfWK89NNji1X",
  "key40": "39x1Gh8kbWCvBAKGKjzqhrAurXnu2dm5JhkJZYyFVeA3CpERMeHNjTPy2RZmM4wrQSgTfH8Zty3zvN81TbaNp9nQ"
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

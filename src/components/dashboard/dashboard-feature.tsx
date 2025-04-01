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
    "67DRksEg9SiYFjaPVhZrXquGTRartpMfvpQZDhNWYqHm2S4Yyt8NyHtcrfBtKJ9vRSTBbi6QiH4hUiCwpw4rozK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnozvirXqp19YSwk23u6DsnrKz2mcAScnvWj766FMSu1MVeCef69ku855cMvP1CbLBpgquU7kLLMPJhRwhHDafv",
  "key1": "3t3QizkHwSgTNELR6hoEo3hLoqnpSpKDq9v6gAeww1U8YtcnLtAayBfCRt2iaMkmQ2GmtQSYvFefLm9odKYv7gbf",
  "key2": "xtNAVubxQzthGT2S1DDbm4FsGpySW9ChfQhUNTqagqGV6DNAkz6mUHfBZwNDfRbnxZMwcpWYK4nadxjA7AWfr1V",
  "key3": "35PYhWFohFtGsgxE4aDPW3erz3f9HkqP18a7DTdD9ZARkyM6scBP4dLzWSXHZovdtq8knGaXcQFbrH34TiD2Juxa",
  "key4": "4e7Ark7fFX9156YqZD6hALgTX15EBkF5YjRx6NoxiqYqXUxwFm93gPMUinhKTYd7E2czVzjxRQi4gmY1VLAjiUdT",
  "key5": "3E5wWhfyQNwXJp81huoVQKNjAC5AnXakWJmuPMjNDFHpQT5shEKJaGnjEvWLuXYBxrWH8i59cbsRNaoXeAqMUNb9",
  "key6": "43CnZMbEE4YzwtovALcqqcTSuP4dLuaoJ3mMiRb4DRaRDePmCcDYKw3AjWcd676FoP4jV2KJtssKZ95xzJFR1fEm",
  "key7": "5MRSRsCzwe4kQJhkXkzFi2j3cpNVsGmT2usrEpxCNkmx2ABHJd1ArWXa7eDLaSxoqEjG8hrhX8yAZMghSjEbfVnh",
  "key8": "NUd3wyk66Xg6gTLK6KkBpheBBfWipaX53JebC78Hikokaj8jcp7VPHEgnCF71ndo28UehwkurwfQN8Npg1fNXdL",
  "key9": "2tnLeUd2bdYtYbSgLAv445AHeJ8sCPmZKgrsjygiYzXk18pAz8dyw9RcY4bc3Dntu5kQmJDSG9ZHRvgHwBoZYEw",
  "key10": "5KZ6RyN31xXq6foaTqVkJhbCEewFTXgrzDa4eQZfsrCmoGmVfVNPi1ckcCZMxMpmRwmoQAqKFZDrAmkJjSCKrJsH",
  "key11": "54XnhA4qK3gtUvuAkXWdaCnnmWEBKRyqUEJq5kUpvJUMeSLSRx2zQ3g4m5SMSJ6ZutSdGKvmT1wVSWSuVxK21rAr",
  "key12": "5oL9XZRjvCorj5NQcEW6FvCg55GNXNqU67JWES5dnPcqFcEgApGSistXPUsv7tzzPNAuRDVh3PWAarYUAp62EYm8",
  "key13": "4ryqPJh454jBH9MLHWxafZdqMAoSwDixKouamFBULJKdppnapmtiwUn2tZRHAwAFWc7dXL3mho5WsWSjuyepSLWP",
  "key14": "5RpwoFrCKrwLJBbvVUTrx4yREUapR1XMcvLjoAzkqQbiiTDBvNRjuej1Hbjm5otUrmH4JmQtQZRDRGLv31oVbg7i",
  "key15": "3YTw3M7xsXzudWRAHSKqmEFxbXvQ4eCHSXs4uFYo91pb52RWGdvQAEoJL4v1U9eGFTJ6Y25XqFKtgJFYqcQLBeXZ",
  "key16": "MNkD5gKPC8gNCitaZTQzYr7dzhvHxhyKH9bxcATR2TiwgWs89BqMFFcN32LhoaXbQtFaRAS2fJCTmecA247gCy1",
  "key17": "4jAfM6cZsn8YX8KC3EDzUZzqLmVa6aepg8GVDay5bhxfLW51DagnNqe6QjVBGBsVHrNGZhsargCgiUbGc8sVaPTc",
  "key18": "56d3C5C633tcUt88vSPoiR8jDpmYBBAdHML1Hwdsav122XQ5tmAP7S9SpZ7BsPmZ9BcnkCheiMjx26VWVP2VXvce",
  "key19": "2erpEAYK77QY9Uvc7U1jc3rQdur4yk9aS9FnZKBTrRxMBR7pSrJ8kqgNtqRm5eRSCLa7WvUmsSkTQTc83RoXGHpv",
  "key20": "4Mqq8K2kjUALZgGSij1RvBzvDpZQbkKN9snBfvDKnxE2qBs9ZDwGVt1xoHytphvRb14vNpgnw3Nxn9ZUYmYrxxv4",
  "key21": "2Bi9ygiArx7FG8PozDid94XhkpP6Vg7AEBougdzG9VCWRqtUZXXbDcm3BF8pJkFGuADfzgNix1Gye4hiRs7kg5Mo",
  "key22": "45YPZmzviaqW5J5YbswKRHLXh4xMZzg5HDLkYKssKb8FZPMcD92TewZ9WXBmSoJShjUNDnNpeYBzVJpwAxsHxCW2",
  "key23": "bBC61WxfEdkmrsjgd6yAJhQEWJZRGnRy3JPoLGHKsaZMnaa2ArvYERnArU5uFHomQCJizUwBGaZwx1GAWzKcu2L",
  "key24": "5akBgSkxK18EanHqJQULpsJP9cwWvtJc1Jh5thnZEe6PrRvEQ2gyfzkWaQeoXwaC1G2TdDVTpVL7zsAZ2z6XTZP4",
  "key25": "2A3mB2fSLFNX7tKwzcJPSba9YZtAMtRW8AJG33kX4pBzu6523TpYuJk2Pbqn8XjP6V7cvhw5kRsaU54zpiHkjioC",
  "key26": "4857i7kWvjis8bfHg4sADpVSaANH4RWUi8iSqDZs4xNMThDAWw1ZQUsfykUFCr5CEWJjvLiLmzRNHoC88sFA24SK",
  "key27": "2s1r6hG6VqCEeBbh9ZECwJ9QzCCMDJiaAmrcg6VepFZiC1X7G5f2SWxaVGCUFB8WPkaLtfEodrkhLSJzHz68aa9N",
  "key28": "3vkDZKbi2UKre4aR8uYZbRkmwcWHhqkcxwKs3VVyvaurngtCLajy63fXUfD5Sx3j7rJknjHbE3itZcMBhFcqPaDU",
  "key29": "3EZ5FRkvgowHwopisJgzZvea9PuVryzxTWZfuQR4RVb85G8tgRrsxcUttSsdFjH43iKXZ4oj3Tt428S83yzxweC7",
  "key30": "3i7xGGchTz1xvRCfSNBNCMhVvEpHyE8qHW7d5DpNa4SqGk5Y52L9iNWkYQFW6UTSRWZkn7qHuAfBGwhzFniTrLSF",
  "key31": "2b1V9dWcPcpmgRVEXPqqaoGtEmZGynTsWiaMMBJLogj5HMsFddbBVN23WbADqcwqwwDuJj9F5uGQs8QhusM4xtVk",
  "key32": "r9gJsR5HJgHVru28Cvnv9avwRAmypU8cXg2KSDwYJuiZ1xyMK7X1EuaGXzH5aFs2XLJw9nmKB95BvTnR1Vhks4W",
  "key33": "5PWFWYt1Pox55Z49YxFP6btch61DhczYMS3SmGbRSDppZUYiArr78LQRBJMA9G97mqFbpa48fKCQe4GU8diaYs4j",
  "key34": "4yoaB3RtKbNLKXqRTsKoFn2m2QuJ5yY76u2Rn7qn1bwrLMUVkgVvozsCznAPGPxXb8nF1nympt6GJ1U7G4P9Qjko",
  "key35": "25zgkaVBcGz2rXZ5GpG1f8Bd3eHUMGzqKA184GuTMH2eGJkp6nVR5t4xMQ4aqbvigqLBwcvp8zPm6RkoxyREd6yo",
  "key36": "3tQ4ov1dHt4SLKsFB7T1DzdcFjX2BVAWHAzcPr9v2uFE67Bq6fLWvfX7DMd3FGi8RZKyZvFVS8q73QSfzravrMLj",
  "key37": "LyBdfNWETJ89sf1nWof4LWNWcaFET1ihwFGzpcjt6XQbW2oCc5WT9jfpi64FT4erH4XTQBJJQX3C5zHCM1ANQ7n",
  "key38": "55JZBK5sni3SqRcS5FXSkQ4qxr6gvhi8kP9ZCrpf37JJ6aHUqkFY8wr2w3UuvpBaXhDF3W2P6pbz8P8MTwUTdp59",
  "key39": "WGfebBrUt5Td5h5hQigscuxmaHm7QD54r8e2s6bH6ReUc8vfPBdD7RHfhWSGbTDB6guLnHZgAoCx8KWDtxQf4P7",
  "key40": "K8LHhJBaYwdNxd45rTVUbyHftjGPN8VoHv9uSF6p4SyiA4UYaCt7RzosKe7mtpUNY9FoHBQ1iEZ36Acm39zpryj",
  "key41": "95vqgNC6p3WSTnzt7zwQnHPtgRiAJex5kYC98nC3R4ZE5mxMHeQXtd9nUDJtzcXkpnHYL998L9hbxEhVVt4E7ZQ",
  "key42": "2yiT3iv7LqAft3uT3GrzuvEJTyR21ZGueB3bGpjWHNcp4RnNrv6obatyxkdVakrikR8ijRGY53twycqpz95kTByv",
  "key43": "5VMo6EPrhK5UyQKkou2LvWs3W4gVZ8CLZFveSv1d4QyqUyjKbzGvcVZFLvHAQQM472UpW772fzSX6CZASMAKUzrR",
  "key44": "ZxN4PXFQn7FCVTVKWD3xjVxPkRQ9eSsCTmgvEj9vGUCJ2m5aufRNeryHHADwZ2EWnUDDLCMiBiBs4GHpWvJ2Nhh",
  "key45": "HFTDJ64SeRa3P54bqN75kayJEzaoiZUaZFHQvSfbzVcVCK84UTTu6An4MzJAKTmY7drqJtBCxAydAySyStGCmYZ",
  "key46": "3jdd7adRPXF9y9UU1EgMsxbLQgXvXAdACvsvkCSiB19PCtAtmLEDkXGVvvLg7nYKFqrxkfQnz5djLqhrANj1Skyu"
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

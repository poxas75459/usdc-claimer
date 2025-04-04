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
    "4CsRr66RRrd1k1x6G2E9FFRYLnHM9ZsDRKXKSV3Suh4Wi97QL8n9qWx8W8Gku8EMQxWHviHBUSaF9F5uL7BuEAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyQW3vAt3ENUMeUZvjNEw1MhD8BmjDsfayWi5dV9mwqrLjw3NHgsRUM8k7UggTJgjDMmm6Ef7FymTdvjd4sxY1p",
  "key1": "5WouJoEuVxcrfsEZFyVNkKE5JkXuSKaUrxSpGxTNMiNh254NFtm8LT5Q9sagZTUj2QguhC6Ng4PHr2cKTtmoUXEX",
  "key2": "67MreNYYivFedSsechmEs3chEZBXnzti18qinZ79Z6nwjnXp3dSrmVRoZqC7nayf4X5QcVYfyc2Mm6iTzT5DF4eH",
  "key3": "3je6V9mqh3xGtrvcT2uh6KtHjbh8kfPM6NeqAKJQQ3kVrZGp451cap9fc2MexbrPwXoXG4LrUwmhq1zEXRLQtbnp",
  "key4": "55JnX8zjLViJ7Za3rHW7hcput1bhvRZLNEkx2cez8LJQjYFhvr96KLuHwpwnDj7X7QEkSva9ujxrXsUaYDkf4shd",
  "key5": "3NQbv1X5BUP5ad9X8ofrHEUSwtg4kU35QaRHgh1BKJT5oeQgJ5yZQPDEwFCiNDM5gkafUHTH6uEXhRhi7pCsHQVc",
  "key6": "6H97dQAFMVsvvF98GPGNmHVwmW9Noe176UPiVvT6MeT2kmzTGzmSBxqSTrkLwstJE4HGgwWojRbCAgjXLSeLxsu",
  "key7": "4EPaeqNGyJ91h7UeGn14KPeXsBPedgvQK44Gr9f4vHiZaVbVqRbPwFuuBZef1G3qBMNjnxUYQTd8xqBd8XTcF8k4",
  "key8": "5pTzrpndqmuqLMg7o65cxqAcdfBVgAdTh6TvHHxoL2xHoQTQZdwK2iLbL99k1RyKzk831E4eZupLFXwz48mEm3Ca",
  "key9": "27oHM8C384pNVwJa5UvuPqdeyAWcw5DNbNNwxG9X7Rfwu7dM8ZgXdAgui83QHhtTe6iyky7DiTpzyquSKiztLAnF",
  "key10": "WNgKn54u2WQQzGX81eUH77Ruin8kmsuY1JwcRaxE25es2XNtb3kE6UTahfZzo8NcJAvkW54GtKWNr5PqTCPeGKp",
  "key11": "2eeXwVWc1yLupoFSNWaqNFtFDoFPjkNNfsdoHFawbJcd7us7P4wdzR2rNLntaiztu6RVQ5zv4sqFyb7z8MmoSP2X",
  "key12": "3gRTWm5PCaB3x4muKAbuBFA3ckumYS18VwK9VcNJv8pgU9BdW4vwnVcj1Xbr7VveEtQEyBgwZ11So9TLYHTe5iTj",
  "key13": "5DNB9FsoM7FaHcbZpQtiBM2SyQW5E5H9JDmxKiLr1R5f7qJgyuTeu6hebNquMgFRv4rAGEdTwug9EeHJAzLw5m3U",
  "key14": "3qcYxXMT8XRySA2RR9zC6aqd7Ye3PZSaw1WFXX4wfaXA64Df6gpo1iJ4T7NBydS9BkEAG7vzVQMp78Yx2yLfV564",
  "key15": "5SYhewbbRaoxB97QuuBLKxFFSXVFAbaCY1jBWtDaP7gUV1qMHfA27iJ2H9gbV2i9VRWF9Co1LmcJopFgJGLGUBrP",
  "key16": "ufCoEHXNH3k5ayD2KaXTWXZxLyxYHwVjEpHL9jGpjZWPYR2ojUoWATvPeoQpTp5K3hxRRDnR1tuMAJ83HUoAQeB",
  "key17": "36tA8AYgX9VBQUn6BWyBApe3E36bP41mA4yUAxDWZZDFjNRdEKK2Tava38Aqhjuifcy8Jkkx7nftJ46oeGGgvFT9",
  "key18": "3jDXSdkpRgYgYpAbAtJmmiqPctTi15SodFCcLeEPTMbN922LvrEaYjG3PW4hkfz6TA7vFPctQiq6h69VbEG6RzNz",
  "key19": "YKi7UbPLdrmLC41ZrfGJ4MecdjTTNLCNrWtDzp1SpuyPQB4m8RLWfwLxkcmoLZBtFGpALggZrkXARdiXvVaAdGq",
  "key20": "4JFU3dFwf7oYT6yPVBBH13FTnTSBf6NCoN78vWhHHrruKDFTrWD3ycGVQaQ2nWQezu3WPGDviCf4RyjAKuJp2Fgq",
  "key21": "3hRb32Zehm5poa1Q5jthWYbx89WhNTcF8NZAwgs6koX6siddyJPMYdN3bqRhkBXQc7STTQPYcBLLseqYv9LVrLEy",
  "key22": "3fKsSzRykgNFnDYoJHf39PLPKV3PYqApBtF8X2aqYuZaR6Nj9tpXXCyJjJ9w2srX86KbvRkCiusniVMTWexZfTuM",
  "key23": "3VPvfgbPZFuReJtSBEyykPiMrPm4jeP1Eeym6sMybidztJCET5C1JiW6RQPPwmQnwjE9AVbfoFmFKYDUNWJwVMnZ",
  "key24": "4C8Lrp1YM6fgsgzPJvCtDQPwpGL79K3YkjsAwdHuX9fbfYphnjJieSv8KfpHXCHpPFmRCjYjHWxaL8sbAATodV9L",
  "key25": "2xvbAbrHYMuG4FLcUjaJVuc3A35yeQpLDinGiCWnwuXxprKFU749wiCRZQwkcf4aeGQpkWJ9JPBeZq6PViAeGtAz",
  "key26": "5Tq7RBn21QMHvMJNr7mLFm9XwkcPyzTLXJU7S5QdTbsJVuLWLMP9ZDAMRtdDJAuqWxb4PWgeh74e1vLjrianPCew",
  "key27": "cGNUGRRcVfWb7E5UbcYqmeraTCAtEjG8JtLaSt6gCE2Wa4b9bgUK7d41xRKFpV9PrfeXZUWPCDPRJpsvDwH7zWz",
  "key28": "35gmyeXjcrjMMkkNzpFnSKcTSAgVnNhDQMcB8A8sqhqHQjfKDFHFbpzcp1kmNEQnNiex6ijCYenv4aFEfCL1zZrz",
  "key29": "2tfrQjyconUXL8EAvQPm5MJmSDy4XzN76zc4fPZE1siHMqA3EYwy1Qfpdjg8W2Tbsi2WcnD6h5rpPLzYqWhHTkxZ",
  "key30": "3yAF2skW8oLPjkUSn1WjRn5fWMfoJvJr1rvjtAnSE2a1JS96gv2eNqnhVDCwRzSc2R33bheqNVVgvnmCdXrkpG6h",
  "key31": "AuwBuWAwHdqJo4BLXUoySfTq2fSqzZfV7eXAWjPjm4GG4q6hMvgCSE925nxmDmw9nEHmHYDEvfDzmT7iy3UpEbP",
  "key32": "2EXtDQ68ic4kr3do3A358hPmCFrTBdWHXmz4g9baf4PcbD3nVc2CVLdaKWHpixxaazZY29DZXLaHkMZ7pdgDn5bb",
  "key33": "67Mrvh7X2WYBnvUtSQfgqjEtECYCa7ysZJFTMwHncejWVPaYUj2rHjdBBNZDby7eEZgnhn6rcL2cYHZ49kgeMors",
  "key34": "5sd9C3L3qsEF6fdKs59WRvYvyMnA4hZhWJxj7f3xXksLmdeiY5D7DvrjPh6GkFbDFdw2yXkkAPMLAMuW6cpgJKNG",
  "key35": "3kbTZzuXwLuYv5bW91GkbVEkm2V7HoTcbA1ZSJ6SD1hCus1abndBTKY1sEbXAytyEqhWZscqMUKobd3qBSH5q4Lm",
  "key36": "3k282YQzpsTFgryk2AzNNQUJ29tFcNNNUqKc8DaNcZA6PwX3hpid8fzTJnWAaYtUoRFCHzuUt4AWYSEvHMv5QXaU"
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

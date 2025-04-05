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
    "54ZvKZisqsbd1eZC6wUHKc6Z2xWHYEEfp15vM9SwTQHWSGFKvpCfLynfD1YJR46qaWXJN5Q69gbGNptj78fi3ZvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fs7WrAeRTvuMpTRbWVcLoHeKt7b7cYKGHNT1hu5CxfKEyi6ct3JttWMtiWCLMBKUfx5d8j1gQ3vT9husxDqjMo8",
  "key1": "4Tp5FqpfjuDQWzAXeRrjBYifXVspbeHgPBgpgceNBxrBKJ7wXFiFCrz4ePrLkeLU9Qpy8owT2YybM6cMrqEQcQTy",
  "key2": "4z9DcPqjgCHWc8CqugVef9RvzXFPhLXrhZ2UCVdP8dvdtDL2rLkZ5e5QMkUxSJZZ5rUev7xfXP2F7Aj4z8CCWr1T",
  "key3": "4LCVU859YeYqTK7GgTTmgWcm5X8AnQ5LWWXw1onbjnRHXBbD2xEyS8sJ5FxKgpbCBhH5jz423NrkVTJKADihiUw1",
  "key4": "2Jd8RDELtHZNSD2VQApvo1w6dqvCcVzoHNyyndrEpm6yhfx7UivnP8y6fB8sVRFjSRhaz5YCQ3jJabtZP5STPo5n",
  "key5": "3c1SuR5wyhpewBgKF6YfkGXDtE6ZuSUSGfaKgVEz2N4MbYWoKSrMqTseRBLjfietHZBYZJ8SnteEees7d72p4vde",
  "key6": "3jfj4pZZWhCkEAmHJM2gE4M3EU8bKJdK9vMikwwKENVcqyZ4BNbDgk3wFzy32THZRHY1LpkXGnE8f4e7HNcC8d8a",
  "key7": "sn2JNLs9wTgT64XAaa3fJrQYD2Jorp62VBYkwj5WqJeXYXWeQTyDLQC5cuCBZT386LJFZmvRJuHf7EEyH4Ghhpp",
  "key8": "2QvVGMh9NQjoZTjiTr8quS3w62YQeJP1paZ8xe6mae2bHzbL6swmE2tyTKFdKp2wHR4UKnbdTPaA9bMjuTPCdMfu",
  "key9": "33p9P6dCLFAFd69z9Liva78P3UPF7AdMVggPmpVtL2TUaJUb89VuPtCz9fhuWJeCmUdjFXvEB71hFPUXvgVQp1vu",
  "key10": "31ATmkpyrMQu4wXzM4475eBHDtJKNWLrH3UEj9EaGPYRaigGpjbejem1cMfktdJvDGf54hZGoVDZDagqektRRcyY",
  "key11": "4XrTT5yZB6bSFTGkzZcEGnXfipsyz5hc9KkvKaYLnw1Hc1q51QBocr7qVvopUiaq6TyDDkvTybNeqt1WCGnRguAq",
  "key12": "4NsQ7pAXE7SdKUcsrT4Q8FUnwWDjaB7gSTdPH5WSyFuZ3FM12pMtwKmBYrUq3Qj8vgx6d4DQWFHWucfg1TsZU7q3",
  "key13": "5r6VSCkgSwzeYBLDA8kykgreqtFzkf6MPAjpwSX2XZQPS7AUV8F6azTvMkiAvU2QfLeMdjSNVqKp2fcoEsai7PTn",
  "key14": "vugjnyfuoPXUfbPDTM5o3oDr3ZLwk1NWQdNSu2JfMrSMMTpyKXGXfo4u7WAHHAVia6hjamyCjvSz3EYWZrFCNZW",
  "key15": "4t84etjRJU6JTk72hR5Z9zYFEJSKRBbndUGn2WhUpExDdUcU2PakwY9ot1SegoBrcSU1FrAuwy1RHmmXHfwfitnr",
  "key16": "5xHtdsrsEy7gNJfNa2qNjBRDaTfAzfkaaAjUGUV7q3dmnWoWJLMXHPxTBE3rMX28L9bPA7NUajmrDQm6XuTBW5E4",
  "key17": "2etGqxpgTWJFCB7k146stYK4fCqwzqJDnff6fgPjr14Qfnf3AJPewRvrL4ggxGVU91ELJKCgne5pUgKfRkxBv5hg",
  "key18": "7avKNGWVpPVmR6tKTudNarKqgWwXAJnd4TuKxnE1vNFtCnSH7MhG4BDAbTD2StYa8gp1jA11MY52rv19zJmGjbX",
  "key19": "4UfAG97K1pd5U1gELutXD3p1t3jX8s18kfJedNB2UG1eqqnBm8VyEXFm19wLLpF2sdRAFiN3J5RSqAkBRJRLDLeU",
  "key20": "twrM13DGpdj9cwAszhT2nh7EB9jQ3CtTVRzbu6k44S3axyTuwN7rfR8RcZj1paYdjgh2w7YkU7Tco6JyCrzJ4ih",
  "key21": "2G9kh1VyZUEJLtwJHseCTdCdbUXqkrYkkqEKBdcUNB3sCx82zxdESFm74G6nV4BtQLPXeyJZsFVUZSKT9BkPrSad",
  "key22": "5kLWxsKkgKBouD8J8GLZwucq78oDjWoUUJKXD8d6qHEPWuQ295rQ5mTeHVNbobQ4qd2wbXb4nu4yW3wYgQwJ4EFN",
  "key23": "2hq47rCqKkdfbCorMQJMyvo9ZhFe6boDaAuP9mvzdHA8fcC5DySMSzGrswVwPShVE2c8L2PUPMEZB2YhSPxrm7HQ",
  "key24": "4SDNNxWSUXxaHmYscraaVH7btttyRcmca24eQqXnkH9WakUE3F19bgWCaXEQtTvBerk8aCVVA6BHyRZsx3WDRG41",
  "key25": "557RKx78ywMiRAbofHT6BGW5fD7pbB4zxofYGehN2QqCMveZE77GEHSSyz4VZWE6QDVsjvDQKT3Mp1d35YQGHSNo",
  "key26": "5QS2oZza1mgWXmMUgbzJ3LTa2HSk6MoMaFvbcv5jhjVLw3CGU7gT9uDb5zLSyBbGiWswDoJCsLmeuixhLVUe6Y9W",
  "key27": "3i1kBB7tEJQPakD5hW1CBmu2S2EevaSgcxX6FHH4xhwPcJchQwHY1jASPHAjT64RMnPcx9FWzWYy5GkQ4ZKp8VqM",
  "key28": "N7o6PDQNcgzGDKQcVh9Rb3HrDSVVrHqunnjoJgarpZn4vQtKqvXwEEVHwXishKGqy9MQXD3hWUSYAfLNMWJgLY7",
  "key29": "5LwzG7zoi8PsBJFwQu4QPFgRQF6XrzzDo4WfEdU6T6Y9WijoPx2doWPjRuodGFAf8zMse6QLzdKrZQ3wwKvdL5Rj",
  "key30": "Dg6MushV586R82RFLs6zg8w9AZSujNnQYvLH81E7chzvVjyFSCstrtVCweTqV9jn1rGXX9DfhYrQGoaVfZzrbPj",
  "key31": "29qqbSgC297ca7zp3N1nUkpjvwtnmKrfi8v8jGosNzVEBPCpPEEDUQVsjT7JbPkjsM68SG5cm6cFC4N9i22dPixi",
  "key32": "5cJgwMRpxFKz27TgL91KkB91ijdtT4exRpYgqxisDtwcDBsgZDCPevTmTdfyaZAqqJe3ekMLvuyxextma9jZNZTA",
  "key33": "2uoD56b17bsiQYGPF8Uko4nLmaS3vkm1Mz52XSyUNJ2uemgSmkWvTNKodsfiUDcbd5MEFY4fmnWknhRaXm9EpiPQ",
  "key34": "3HSwLikzza7TX1dpuRSmwbxVhJnzNZigCTbWPeKaHAW1i5xo6gPmvrxvd7qppL2tMABnS6jGHkLzGMdcMz8ZZ4N1",
  "key35": "3t234wQqzmFM8GsgmgEksAKa1YZ54oUaK7CaBSmPoEvS6nexUNo11VmR5b84dBFj1zGZs2Tr6pkfutpwMXA9bcU6",
  "key36": "a4YewDxfBTmJG5y8isajZVfyZJ1WgLHsJa3kvtbaZA2PraDpssKa8FE9BEz8fYcAEbDUYzjMJwGfNJ5upDuKZRF",
  "key37": "41qzdd9pEWL7YaaK1fP662R7VFKUNfoxePiaVU4tXrsdZazrWYxe14K5VHJhYXzymdU4v6AeAaCaN8juCTRSCdEZ",
  "key38": "HBv73rPnU74Zmyz6uHz8WogLCbNfvYQTuRWew4Qfd5CKGTNyP822d8JQ1SZ3cxN2ruT9jbbvspNEi7CAcTkAdff",
  "key39": "5ozfPiJyX6fHEeTcxGkC37kLfikrpSDnTXZDN7i8pfKxxZX2x2P1TsLgzN6DSYgMfCFAEG2RQUDWSJ1zCXPJKe7X",
  "key40": "38mqfU9fRrJrtbU9nWZzPqHejhsSWD2n1YFtqV8ASE5HrWGvWg2M7kHiMhg1m4NyEfSJx6MmFmGyuFpYptGweUCi",
  "key41": "56FyJWQvQ4uUHC2rfrwaeSCBxFc8NXWHbVYwPpAmWkyCG1n6ugntawoRoSRJ51WWGjXiHihqP7fmpiAAUxx4E7Yi",
  "key42": "khu1oErfUmsBUiBzGgMmE2WmxDcfnaa2mzoAwPCTwPaYPPtZHCNvWRqDfm7G7qzshEBNX2n1VweVFopgw2gALhi",
  "key43": "5PHa4cK8ryxST3WgrLTR9QupzVgzvC1yEMoWenXSfJPbG9GwdRNEsepiNPVbe7h6uVGaqFZUvBQECLgmHnXSjZ4x"
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

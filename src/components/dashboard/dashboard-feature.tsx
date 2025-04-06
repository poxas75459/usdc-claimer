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
    "26x5tVNY6QQ2hBSU87Gkn4mFGApuxm4CNY4uGP3XwBWuzBXxAp8QRYNLneXXjXUZ1DFgUhxZFHLHyprYwvPaGhgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evrcnGGDr8iHKr7oxH9zdEByZB661zQRrBHN9etgkV9QnSL6mHNJxM5A67oMVz6nBs1wByHV5oyqpAreMJjPJug",
  "key1": "YbJ9g9N3pLQW2Pp5v9hWYH9YYie1FbEY151CKEGQYtDByX5nkXeSjrZggrmMbmDtcq4zBT6bjt9cEFfSPtVbpxz",
  "key2": "Y92J89TPqDpVSdyB8S2coC2cxYpALANAJjKMckMRTGqzghUMQsoCyi4YoRpJRQibUMPPykvkQsvWQGJ4FqpoZFw",
  "key3": "5e1WP4psgKXzsXxzwYnoApGyTMRmFCYyU32o2XpMyzic3ESypafowYdNmJxpMBEb5KZovZwjhZCKWFEF5jX2ucRi",
  "key4": "4g3MmThvc1KyzikVeqn9BoEW3p1yhq71F7iyVnxcQEzoEThfgT31Zt99EBXM5qNq1Zi9FzpYzHgDpo7JxRMMbrgH",
  "key5": "3MgfPhZEqQd3FQqMwPsXg2LjzESWLwAkHYqkHibHVy17ZruJ7859BRCVKXTzuFqMLu4LXG9qu66bFpdkKMXiTZuX",
  "key6": "2HuZ3vm9wDxTVenTaRkEs5X68egFBDoPChq6JR35wiDwCvhv1KEfvz77gx83CJVJyBSC1rtgGFmfZBG4A3z2qBDN",
  "key7": "4suasTmYZT9FHrJ5nLPnsrtjDywsZ5K9TeAvs11PSiDh8B8Kvz3hjcQarTSqvjBQ8qGQTxPwwkWzgt7JFkqoPo3o",
  "key8": "2qtUKEPw1SdSA2WiTpXHAH49tbX85Pi6baUjdqmUmmYDsz8kP6phRy9psQjLyrxPu2yRBtiWebcVe5b9tG1fxAiL",
  "key9": "2q9R6jDW4diADiQ9D6Hi515NQUWPV76BeWv1VLzujuM1ELg3e4hfn6X4S6iqFnCJKvXWWcVqKYseYLqXjrPxEMCX",
  "key10": "4xm4Capksf3RJVV3z4p7REHYAwbLDuDr4HYfYanopXAw3xr2KSdnogp7CGHbiGgCsWhmUKL4d9wTvB92TLZxorPW",
  "key11": "2VsrFCBsmGHuGRLQnab4eZgGdrVvmNRambUwY6Y4fbvbXsFvrbraBzYnQfc7ehDrpUDTnhQUNufXQpdmQhJP9dn3",
  "key12": "3Dup8DU3SHcxC7sJknUQygE76U421QhYDRD44ymHBgZkyzpmjQwKReTucgGYUVjLsg4jdmjLEGCXiiZ1y6BHgEYF",
  "key13": "5FyL5Xe5S59e4a7c7StE46TcVkTnAbxH9Nu1T8vJivAza97uurDNHcuGh18zr6CDCkVXVMxHK66KnkkvcQUuzdQQ",
  "key14": "3Yeh3vayntSFtwde34ubXxEm3thnYwhaN6w2DyJXkhF1eB9wAXWn4ju37kr7krtnsJFVDyoTXZhEKu9uSUyPWY3g",
  "key15": "5hbx6pE5QqrVUb1VAvwCVTfn8CSb6K1neLnAF6vxC5bEPTHziUhXTUWGq5LbFFrteBhQWGKjtDYufr22wPFRVDcj",
  "key16": "3e9sT1SAZvZo3yXvNb7s68Ecf4E6hhjNzEXWuXDWfhj7GnnF2YcuL6QwAjcizGZM9nuowmNi8gBG6ucDrodXr1Ex",
  "key17": "2sKeKZf8d7SsVQcWZQEeisdnBb8DJeDdaj75mtgCxXyyL397AoVNzVoy8MWA7qwDG7F2FS76643Zps7Vu9bZhrpP",
  "key18": "vmhYzd2UZzgCNqtioScQC6RZk7M6hL3qoBYLu8JUwCDsDBwjgHEu6PVxQYYYLSkSq1VvyVMDgg1VJjszvgVY55d",
  "key19": "MLCssrAwYzrpZAy528Ro8Sk2zCx7ZVgrDi5T3CWLJFRacHPSj1ojqzfPTHPsC8rv9C8qtPTWXM5hHsmRx4nmNnC",
  "key20": "3A6otUmaQ3JjyhHR4NUsJpooggwbgzJTkGB8g9LSWj65KiVjMUoDVi8isvUeUBCNvknore3yaSQATB4VV6iQyudR",
  "key21": "q29taUDpRx8H6JSgajkNQemsLc2KNvDRiGRBEkiGPWrXB9WgYx9cszLT15fwR478Y9VpUPA4CNYRStshE2m2qxD",
  "key22": "DFzn37kdh891p5rPoVUZTP4wdh67odvgbknTRJMj7tbEjvFpc3Y3FPrjmXk2qB7pAP6y4MQCwXukAMtxzKhczKG",
  "key23": "3PCGX1AnU1eCwZTWTPVxa5Hu5kZqv7oeBmBDS4ofQvQiL5vq6zfM97rEtMNDNj2gjX1Q5DcvUn3U42FZe9LdRpMq",
  "key24": "brGWEzjGSATQny4j2kkJoaSpVu82JQXCYrmUMwBmuGA5ahm4UqLm8WfJgyLZyNWtaViyxwDM5sDMXCDDSzJfBT6",
  "key25": "3ngc5VvBCmxpv7nhWo18gxKvAp5Gn3sDAQfrJxU55XcwXVb1fDXtDayZHP2pRZc6nyz4VMDd2TfHRC8Awsva44UL",
  "key26": "4Gy7GHNRLMwFDq3SRrydmRZ98bxTEHN5qP6efuBKTTJevs2CovFzbfcwvGrwhgpZAMcEvWvooBdewH41uVuC5Bj1",
  "key27": "2TZrTNiVBP97dK1MkuMac52yHgTNr5i3AQspyqeeXRMcC3XHYvmZo7x1ueR8P4AZJAKvLE8zjP4bzsrWXfqcARz2",
  "key28": "1QbnkdVsN4pKC1HzugyWNCXxpbY2vAX4CazD6fhgXzybF5mVQP2Db8omDMpueFQyAMnt3Z1rXUFPH8b9TrFRxT9",
  "key29": "5rYCboHzHx5QXvkTXvzyyxYFg3KAqHPy26SgDyQy1mVo9fHG3BdPTWsaPHNCBMeLPnhm5uiJRoWrnRRe4JedLYWg",
  "key30": "2enVK2nswtfgf8Nrm2bGHyvfPC7ARW2rL1hU3qdaWjjFwREKNnewg5qTqw82oc25te1CPcGxB5AGuKczUbdF2yWH",
  "key31": "4hVz7RZMDKP3C5KwCu16YnWS6nK9kwxtJQmbt7aYGdnoDGiDMGMBsQsustXtuLXVAnUwfuazZfm7BEM1tRp7xpSE",
  "key32": "4REU7Wi7cDDRVk1prJxnFeHN2SsChCKSvFmoH61ZQmKtmE68AWJi5gfh3GBU1qrZdNzZxCc9uycaqTzQRTZo2Tjc",
  "key33": "2tLPrAkEksYeTxHCF97iL6f6uixmQs3w9DfVv91Qk7YEMRa3pDn5cV8Y4wyd7CSquErssMAsgjvQezLRxbPxskjB",
  "key34": "4Tohwtm39uQafWkwiXWqYhoMpWLW6CdAfKfeGF6r75QbgkM2sJn9sLpkBFSUiBvaTnwaKFAwuMjPGno5upkP3K15",
  "key35": "5X5CLgNPrP8cbU8pVHHaTknvRcrSg681wMmZ8iJY3eTrDiGRvrcgMa4jBKGdT42gnsuCvCMkcFPvX21q64TCekLq",
  "key36": "5CxaR3FNG8pdrD3sHvAmc6zazgWwnBP8oLzF44y8yUzMbRSN4pxspMXfu4Uaz7ue1dCBW4TrRtp67zN4ScJ4cUCf",
  "key37": "22rqETukpmrqR9jmK6owpgm6zhLwxTTJr3uYhvUHsNmrPvwQkmi9Yija77kqSbwG9Hbg3oiBkz2zHAeMmcXQmjXo",
  "key38": "39k1iNwyyNxnKdfhXKJh9ZSZaBFBgQp1KohVQwUNGVAk1jY75XDroxvsTWDD17b8ecWQPEppc11kwUfRAXjZyky6"
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

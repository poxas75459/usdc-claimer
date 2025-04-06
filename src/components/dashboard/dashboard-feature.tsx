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
    "5AmhTW6ykkKiHFthApzjnnskdWCLcnTpmaDMvhBt83GNW4Rv7iLo1ow9TgQ5SbGFsPXWBA8d3FzBeyZcgSi81GS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StC8wRFzDjBibjHQFKYaPRNGtU21Ly2jW38tpCUP5SAUMnSJK4gzzV4jo2uLkTtDbbrY4S6cA97rj5yuxUbC1ke",
  "key1": "3Gc73xniAKdddAusPXizbV5y7vSnoVqPj6ea4ZRJYPvNo2QVYgw8VMA2nAcnuBdfa7JCuShXZfF6EBP9Quqh1Niu",
  "key2": "5TnKHrmz4jWaRXmMADFe6emEJgnQFXp8jGXTRHuM5kxGH8nHvvRiowAdMVAE8xXUgsSpvYdGmkMcJwPNxqVGvwdo",
  "key3": "3JLeqV6y5TN2YiWin3VsPtvdv1rGYRrJXZdRF3yPkNQeL74k5Nnbz7o6RTB6fh5xNgaeDfwPRHZma72C8RJiTJe4",
  "key4": "2UbYGbJjuE4uYBpPxqFiZAsv7EoJDrMbNtERPhuhiUu4fjpneb4tnJ8obY87Y4VJm9xmZiQWTyhdQ2b2TierTFkh",
  "key5": "ajyaA6CR2LaLThLTAnszMZyieG2ABQkpWx8Wv5NoP3SKpSofJKDWKmNY9B8r86hVbTpy7uoQEJQBozfvpj6Unrv",
  "key6": "26ERe11gbzu7NXz1xPv7M1cKnZAAb173cccnGSFJJeJKvDftcE3pfeQ4gt1Ge3SGiT4DqpVcCHNxRwemQgn8xKZa",
  "key7": "2Bym71hgRjwk2gM68tHxA4JPrVBc7eAa7xBsmKJe5UcvMCHfYewSv5yZJZBaLzMehuXwaXUn3QSDFNdPMWamaiBq",
  "key8": "2rShSUdkvtrFCcA7yxfNeQanbVcc7RnbR2S2ywhU58Wex1AXwDYnoHUf3mfMbEAjzDQs6LNrDKvDnAZG7UgY6Z8N",
  "key9": "5jfVWN1ZffDeKVux9QAY4UPoyesKTP21EMpCjYbVrbS6Zipd8qZ9QvH5Kg9h9g79YEG9z6QgZAYFcd5fJ9iNKRLj",
  "key10": "5h2oD8k4gVT3eizgSH49TaNAuSVyiEQBquTjcQDsGVcRzXk9eVB1tsHQWXirXhHeBiAfxpMto8kyo9h4sDkSvihF",
  "key11": "2n2GtsGdXn4zjvY6uypTqmr69eXMmrXeXw8mmhqwYDpFnXrsiTNR5nsaSUw6wGk44vHvPT9rAw7R5vGFLMi7d2ux",
  "key12": "4YNjTyBMiw1MsewwWzD1jRRKtQzZm8MkQJKnfGpYaxWYrHo83KiUyHGWjzUHezGkF74uLmfZNq21RspLj5a2vnbn",
  "key13": "4KfNwgdCNmgFL4bUQ5nH47VGtfotFaVbSBSjTDHhtzePtsVPCthHXNauZP6yFWf6LSnbs89JMhnwXftm1YFaWwb2",
  "key14": "ZeE6XCPMfBaB7uvjVhUeNaQnsbWh9xU2C1Bi5Xo4SdDLY43EPooSXUaajKQzusWC7Ghb9zqQDaKr1rzngpNNVrU",
  "key15": "5Uvo3pJcpeQDZwA2Ygc1SpBXWLB1ZF3b5NoxFhvYzLijsn8fTSVomvA1Bnvn9KHs2hpHf9D9zxXbhZDPG4xuNk6T",
  "key16": "28pFFgqiZr5LDT4zRrvNuViVjmLBqaguohGNpDX8KYHabSNbxvupVLLrHrRmPzg5gch4wBfDZah148k16xUFxTLD",
  "key17": "vghnS2a7i8bVi2dG25Fbh1PxKzxnuHg5gZdRhH9nUjNY19rMvEqfD3PrFmBwJzya4hYu3iPyUcz92AgoKoNFtG9",
  "key18": "4MCRVPfdBzpQaBNaLVNLWRi6M6V1g2Q1RzXVMz318EftXrU7QBrZXfLgA8d6KrEBWNSHnh6Rz1Qg6vgqjb8sQQVm",
  "key19": "4q9xuUj7HHFUxGEnUWPmaf9auPHPyTR3iX37r2JpPmuimAUrPK7X14BzcXfPNLJQy5jgRJK6eoZDuTrHJbSQmqen",
  "key20": "2qkNbi8TQCmP61Ymun6fqTUEbvZz7ijXHsKuNLQMYMjH6y2TBoBvtD2pMWH3Qx67vtjryW1U9X5sJ9RyGuSUX6TH",
  "key21": "3zKg4vuYFSMCnte2nwVs2skmk9vxxjfrp535ddUKdTNWWNbraw9uNZYBYZSUGfRTNfdT6yGmp8sbL3o2FHkEnjRT",
  "key22": "1LQdTm4T4WooBSoEPZdLWpJqUENePuYx8ENXYzM7Ru3Lr7FYsR5HX93Nys3PGqvR438yuqrt5UKmddghiKrqCxG",
  "key23": "AupR5vyBoW54BPkDgUuyXv272nyZkRumzBaRruvuqA4J3aaLwu33THR9a6p5PvciMeAqviCPY1kSn6WznHxKyLF",
  "key24": "D3fBhFdxXp7fy93wNnvSb2FsiM1E26iRARU1rjaRt1Qsdfvf5PivFauxTWU5SduxUazuy64hiva8s3rv6hsioJx",
  "key25": "3WxkLBHizW2EUmCi5r9jQF98Hx2R7UZoZnaxepmBpAX5DubpBPZjNkfrVFPPLdYQnbRMPEU92abaotwfdA66pmun",
  "key26": "2dhJ8eiPpyJMgGBswj465gpxSJfs98M6X98CSXcFZRBAmJxssCpfM6mkR5cxMCxN2KDiguG2YXG64LRrSd3ZbpkF",
  "key27": "2jcUtVcAe92HXQ9KNGkPwN2PbMsCDN1Cp19FcVJG3PZqP7FCHL9Vg9WxVnXi2iGEHXpcUcvunEQK4qtnn2mp2ZVe",
  "key28": "8Sc48VPxTpVwJYFJZ56CfNDueAFMxYgyfzrKw8dMM2zKgHAikEhNFKSSeYsHXCJdpRDtst6YYoqz8iyqcAF8j1X",
  "key29": "5rLvDu29KjgaBg3orf5MYqCc66FHNT8H6t4B8thC1GeFLtsLfJR6k7TCSqUAwKH5xCMofHRBDGWgiRY2Zb5ZGK84",
  "key30": "3f7DB11ax9SyfbYoVuoB1zvMMpqFo3t59ZJdfAhaDaxEu5AUKvtSShZTo4sDGrfVSFH2Ur31AvVNqRBiDK6JPkYs",
  "key31": "4yoQhBQpHZmscnkPzCAqgFjMxV1eiHZGchgG6GSRjG8amhVf8WAvdziNKW278NKy5wk3KQftnATe24G8mPNouvB7",
  "key32": "2PAp5imGMBWudC3XePhPdZdMnSvXrMUkH8wzAkXV2Qf8iVfwmpk7dhVom615kWXDt2YLv4tP5EBiuVWVweyU35Pb",
  "key33": "5Vf2BRKsaFXoTKJFWoF1BNNHtou8w4tWu2yDdc6czprYcrPVjmztxpZbcxZmSvt2E8DthhJSSLpWUnjK42UCkNUw",
  "key34": "5w6gYf4geaUBr7aZ6iZZTqzcCx1NBNRKfFGEoMbsDDHG4a2iL7HyXT9f6HBNJSTELxxDw8AcxbGSwXdbirbkgwQd",
  "key35": "5Y8entcTMGDQikJDFKSZCzbUyPPvFT1tBBqa5fABWdJMxWPcw1BGLQ9kDR7mVucwGNqgT885L2j53oQhwUWh6pFT",
  "key36": "5jxZQE9JwBfzAcV3qUnM5yWgFM4FXUEzFDHa3Az2koaurAtWrL9WkepaLapKQfnpusMuTJCmtcEvSu7hctPmku7i"
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

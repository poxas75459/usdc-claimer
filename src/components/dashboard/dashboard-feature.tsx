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
    "2oF99W7iAZAvdNpQjpqJYce4uh9noHzcjvqRD7X1MBzaH8KhuWCnH4hVpt11vkbRwFaQQFx7tghgKRXSeTGQtHJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykCt2oiHFikeq4VyPvpefVp6kaCTJ6vi21ZHUCUYvB5oasSignBdgj9bt78ca6x6p66fVdDAfq5vm6GCK6eBFLY",
  "key1": "3jZE5hoCQ9LYN6LrDmqpnQWdHtki9e96ijW9bWSY9LixS25y5o3cdEuSJSVDCF8pQQLXmkCo8R4gow6Qd3KfNUc",
  "key2": "5XcsC2Q9NoL2HJsYm92h3QgKqxgg1PGHfagd6PYFD2g6EyeGSp6MatBmfbUcgM4LVhpc7CN9iGrFCHAG8a2MMTuK",
  "key3": "5qrsPrNbGYogTXwV2whjzeGvaESWxSNz2VDjbvunTD1aRMDwLccxUnFPRBFq89twri3uKGXuzuwE1PGKoWfXGHcR",
  "key4": "23qNVwt2yt8SVmxKycbqb8DPbdpXQvQTWPy9onYrsVp9xMhXStnxfGRX7cvJjnLUXpn49QmUnn2pdcPBMARdwYo6",
  "key5": "4sYnNpPGGCLwBXk4qGestbLxp8zoBUwoXjn3WxxsJ5nB7BYcp3SkfsNpQ4jSKsEhkqzr2e2joMm42gxMGVh2DVTh",
  "key6": "6anZC4EaqHbn8BSWu9Z5jZwEpunb8joPo1m4ZKKbd3MsxMJs1rxzRTixc1zwgRrShchBTAQdEgDDYptFjAZ61Bv",
  "key7": "w4s8rNsvtzFK8RcJm9zz5rusTVF3KJMnEi1BKcmkP3uMKvpYRzv25BesXvRTqJLfkZXKzRnu2kj4RA1oi9LxLpq",
  "key8": "4RyKJmANB3Dirs7YokhENfBDKqsKLrmRfqEnczqUgTq9YynS32RLyysMysDvxKxaFaeQ3ntp9PXvN5YbYPHz3Z7J",
  "key9": "2NT46uypBaoJn3AxwUoahTQQzZWhLuMeJ18e9fxasvvm3ZnVEdcyLpmL128hE5M4cg4kEw2K8HFhyi8qbrvQFi4T",
  "key10": "67fFJ3Mfeed1SBWTUjFn5aYvxHZEscnVBPvV9WKsu6oZtuCsNDVxTC83yK9FJ5MZ2oF4YyDbVStqaxBsaA86JVAB",
  "key11": "5spp8nKrkE5brWc3JetCyej19c1BibD88EKcvXdYfPNYjYdi7FxjzSQAT7PuRJR3G1dsexe22o4dTodmYpwGiXhm",
  "key12": "5XPCow7xZGnTHEAVLbJWmbC7qgN2Gpf2wUcYF6JojWpAMMrWLgZJ8asUAFMrEAmC8EjCaPKG9stnZ6rM8tDdKL6j",
  "key13": "3SztSpVa6i9kYcyxNGEMRg5hmNki8HyGw4f6Q44qjYS4xczx9vtzh8ew6EtnqQzNDFLPZhFxb3K8i957fcC6AiCc",
  "key14": "2CtbS7CxT82fyj6hR31zLVQ38XspWty7duGknSFThHRTrUZiP6BaYGq9NhMtJjbKy4KpUjsCZiNrhNgmRPu8BrVK",
  "key15": "5dBHSbZtGoHspsXokgjQE27c3fzEYTPGJe27LgzjaNrooD9sBWdNMytPGgpS29zy8hTBwrsvkh6RBouTfK4ZKy64",
  "key16": "1kBuZPwCrdrBis3HRtSqHGY5uNZdtogZAopstd7L6bBxHMTCiDXcEy7Aw9we3Krorzq7bLZoPCeicd4dpxXFCq9",
  "key17": "5CpjHaURWj6tANdxg7s6hDap4ENx6QhgkfVjxtTXuS3yhbgN7fKdYbD6nA4j5yM8pbtUiPEPJ6zkECoRGENDmWRy",
  "key18": "33fe59XiSQUmvLDRYPi9jNx2RVN8ssaKLCWJGwsK5Zjsc9muy9RxV3axWzDiZ9SkK4W3f7sHraunXbT9RwhL8X3J",
  "key19": "3jjaYa36nYFmtoS4zL1MXGLt3uBsVY4nS6A13cZyTjKqskdkxcp61ixBupQSm9PVSpgLWeELocqBGCNtKYgLJh6n",
  "key20": "47JUuqse6grQK1j5RMguTDEMrYwskWdCa7ZRaWJbZjQskCbN6uidCiaXs8T5Wup23hFdTjiwnDDEtew3S2qnDRUk",
  "key21": "3nc3LdngCbsGh9MJkE9Whh2L2EnWV223H43n4vhisPBxqCfbWoVPfL63zeHf2j6bacQTdYume2UNqbrexbTs9k4m",
  "key22": "2DcvTNQCTTZyC9MYwPgcLL9y9dXp5zZgujZ4BJudLUaHLdyaqJr2rSRXYJp2mPMoHEZd7BeFkYRHhcZHvbioFZ9p",
  "key23": "2HdYCZ8jmgfn3kryERpFTXkutXVE2WsnmnkgzbQsHuWbt61yBeHUAUv5R95N5Zm86bx4FTD79H1UvnnLBJk6pwrq",
  "key24": "5R4Y9px281X4rzhzCJ2UYVT2BQN8BwbhkYU466o9zpRT5WXH973XcJnD5XSdCtiJAoiiS82B8AtnnKyrDsBNUnPx",
  "key25": "643wyPif1s8V6W7XfzqH8jcXuPWuGC2yiVFWa8T31e8ZCXTTUVqLC1xm8wCdEezmYhBxiE9BNY1gDb8pT6yC76Nb",
  "key26": "34NRM6PtXL3VnHjehXyaYoEARgzYYx71yFbA3dnnzAUsyX6W7qEPHeoYEvncCQxob39sPkHdJTVKQndBXaRh4e2b",
  "key27": "E7gXCgrUGEN7e7jf8XbifSYjQZzL4Gaa3WxK2qiV8r6sdgWke4BNczESkWTih9xqha29U6Qo534nJ37XPTzcjs2",
  "key28": "2ww7Nc1z31sHjv1azbWUGcNWPtNCyWQART1jrR89uzgAenMDKD93wbGZn1cTG7SHTiKJdBquWqUE8cigd713Rpi9",
  "key29": "4YnY52r1dHEHgH7fhL8Vu1nF5xomBbHLLbWdXD7YwSgJvMitTbAogBN9AUNv5CAnqzbxLPyfnRcVG3GvA4PM2TZi",
  "key30": "6UAeN1kDSzSGMbqj98jJcECEk22e2uv6MSqRz8vkuZAoxN1gHsrgtDsEBiJDxLaozSbZauKLaRzUWtKfRC5ouug",
  "key31": "2dZJVh1mnvRrbre7wx3F77wAUirytiuwoneZTotghcbZG8hLBtucwcbmgMj8fVA2pbXh4CJrLK2zTWwaGtQwbfby",
  "key32": "46bfm6EYbxrhgJJv3sZwoHWu1okexM213A7M7ciqoA3saA3kHV78jvrWu18G9mh2F1Bn5KvmNfzw4TrjzzdxWZ5R",
  "key33": "2hbsKWJPHZM4GUmxETzs17Ri9w78UmnxgQ9Qa16VxoQRMcJUYpR2dvd6VGqLd9CGkAgpV7s74WNwYRyCwQcD1r32",
  "key34": "VHnmWSYP3fdAMDa91WSfVmkTsy7o25QDWvSCGFun9WLUAm32eKgGn3ZwxqcDrJjiLWaHENXHGJuB6ho1RXsTm9x",
  "key35": "2bEaNNCKHZ8WWQejhrY1csuB2YMzNnEHdzLaRNyuFrnw4C3bs3Rs6WQ8xnVZJL4MWmW3pJjLqrAv28HCHVAG867L",
  "key36": "227e3ryz7ijhSdTpxJcsxXzn1vwCRtgRb5ibfDDGRMetVdvPojLuhqvYpFWBaP7HhJw6J8VrGkQyi68q7fZ1YKQq",
  "key37": "XNjp4mE5mWkzro2EDehhUdssMa1YP8Gur4Pt6mmRH8Run42Tr8f3k3YfXChsR2GL6tCSuck2hDP1JnKCmc14fED"
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

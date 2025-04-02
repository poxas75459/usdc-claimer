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
    "oD2s2XCXUA8oWfj1egREfd46vwfhKcdm1j7N6JKNUncDHJiaqB1WX9HDpdLdsaEjWNgUS8qm7gzSn4WZKAzq32e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkFEHjumdVXTxUffoHZ46S7Qjc7BvwLgevEPusKPv6Hj4vVhkK5J3kyfPfUY4Cg6FkRzuv87Bg5enUF7iVxvfcr",
  "key1": "2i5S9VJn4h1MDJhRwHG4sgqsfhVRGTo2jXpcsbKPqiqESHWr7ssfg6uHR4j4uqz5oZeyjufzsPoieARXdUXqJBcb",
  "key2": "5HV3zUUHH9uZedoaSL4zyCKnLFtg1k7ZhuvfrdR9x3bNvAdrbUf6q577dHviJJ325zM9aM2z3gecG4Boe891zf7w",
  "key3": "2KgVQE3ZEK3kAaDUJCXM57yNLs7qrQEhcwLxpvWbWNmmdZeKbBK3zkAT7akLWSn64JkwW79HFf4u3WVUABLLFw5F",
  "key4": "49EXkcTfCTMiCGHsXrqxYDqktL2Y9C6wqkgYaeT9fp9mcfNmD8Wmr84SyhZaoiWheMjjRjY9HjWb1SLeWrMMfH6S",
  "key5": "5fzj6sFHD79JUCKie8svoJFFyeWB7jtu9Xw4GrWE8Mv1FSu6NRGrZcD3ymPPfQ27FyGZH8KLh7SrYn2TuNUFAgvy",
  "key6": "8SUzs84xtEM2WeY33cP64zgfRwwfH1UDdsxjRQJqkGpwYEU3pJumBHisxQSCEEW7r2vPeuMFxW12spvUEo1MhHN",
  "key7": "xCiwmqen3jfc8GcMyWARjYQCbJJxkFKFyvNrwjmqMFgrCur4VeTZqmJNhKEd7kVAVU5JE1Du5TWh6MKn6kjT2Fs",
  "key8": "4RmaSKR42dnG8JdygRVRjcD1U9RQ9UzGB4q88YZR4Tyhd3mwGRU8DXaY8FPReyyexDMazVjyBy7QmHgPf5Qh2Egg",
  "key9": "2ZQwnYXD8hRMKQLrAGvsPCtZdgXe2C3s63EF2XjwnFdH55G2L5ZXgYk2L3CVW1brR78zeCy762qiLRifngoNwmyk",
  "key10": "3SUXKSw5VSUn535nt1nbHpP8bANf9T24nZLMYyjBe4vWWw4XWrpjsvKGNgKFBsq42A3PLnNUz7vgUbhzCrR6FWL9",
  "key11": "2VqYfsqHYRw33GsStXW8RJFzw1TmYQCVja3feJKVWLjPC3G2ULTeJPpHpwXjKveeUFr7qRCQkft1dDGJTaZEGQAc",
  "key12": "4YV1QfsuBxGpiTxMX67pa9ckdsTo8jgcS6ZbZJre3UY6EiABokGncxA1PCj6awCDdjaNWpQ7Pm4pTh8WHPi6C1a1",
  "key13": "4FwE64vmzSCaKMoKoSbKFWxNY2qkVMeJPyqTdciCewKAm74ZT3CtdRtfC4L2YuE7r4upfuXhCJAbVj2DwCY48VWK",
  "key14": "4khy43onzxYRVA27JKHP6RowXHrGp97vtpd7xiGGKnsNTRKTMMtGHsUe4UrkREM3ya5QYhPqEbRQgAE8Zs6ycC6z",
  "key15": "24vMWz4Azu9y2w44cDp8y4wRdM6GZcxfnHnGsNt4pPCKLBsxE4iGbSzrunT8CKtV4iuJhsS4oEe1RYBz6PTSkBB9",
  "key16": "4eQzbtUPrhXahsxCRDSWWKie2DCt63QnkWjKvRaZLWi4xGkzqt6UoEWLeHHcub7FYwSW6X5KfFpR8Ms7WXJgExHC",
  "key17": "4MAfGRePkYrQmn4YVh6F6JHtcb6brbfSMhG7Rg5ny5fVd6hj7LAyhMxQvmMEGPNSPjzEgrkPbTn4koa7hFXRvPA3",
  "key18": "3Mtz4Qhnmjd91arcbjcCEMFjRHwdBD3cwwHDMwKdbFc7jP9oDiNSMKrEbYaAmMc8SRRhUnPyeJ6iFFteYJcdKPFM",
  "key19": "4g6dXhQCRpgDhCzo5kFfZCBCcQeo9YsHxfL638ptVbCkwYe3cxP7Xha374FWdTrgPKNuTVyaaLkUzsqGNzGu6raf",
  "key20": "2neidwAg8EZWLQVCFv4KBEFm1Sw4pj28PPTjogdnK6Wvyr3NCDuhQSmYcPagxv8GRUYN8TXBZz5u7rYP6fuFrhbu",
  "key21": "3fmxV3dMpd3QoF8xcJami7xQCPxZgsWeGi79HKJcohHH5YpvzQh9yNoLfYtyf1oLPHTmTCNznHgQK8pFChp2RNW4",
  "key22": "4LkX8dm1DZSG24GR8n6Sn4MhpTiUEY1AnRhshkJJoUTSyXHijCKKX9EDhx8yXdxZLgARVovhiGe7B7z5HGst2Zr7",
  "key23": "3Pkn9jSmFjfwVpamWhigP9XQhbhhW4M363VfQVYhXURRTxRZhmYqXphn5xoFcarFWWYPnxRaQRe2yrYm9S9rF5Bq",
  "key24": "5FScPQwhPW7YAPZH1vRTZ31q88PpNj6CT99fwpZByShPUmRBd5XgKzQjk7LizqhQSzgK9aaDxEbMiVA3D477f48i",
  "key25": "54h4PMzfAKe9itq14LtBLRJcsUYqEyXDhRuRZCD4P2A7CbboifbUehucynTHa4iiVNSZ1WLESxLaGucZ3DPRfE6r",
  "key26": "AyxD4sinWX8AD1JanWQucHyfRjGFTqzG2W4yGWUzCQ71ZPrfpJcgSd2sTSDdLcDU5xzHSY4oGz6Ycef67wQ52f5",
  "key27": "3FDfh1aNvgwRUQBwrNQofyXvtbBsBGwcRkL9LV658P6g9zh6xDhG3367nPcm8DrArXAhBzeWFa9yE4a2Y9SUoXEU",
  "key28": "2YgrAZf7cnUH1jQ2WyXxbKCbyxyi6oGmeYf1eCLczcHLQCS69z9asmi8WDMtLGDriAm8GztvqB1a29iHovVoGN4z",
  "key29": "3Ji8jayhWipdRmRrzu9xmyHNHY4kiE9fK6B8ehErf1dk4bQaMfJRJm1DEViHwiZvzQhny57n4pkhsUFmknwXYqrs",
  "key30": "2kzez1AdHHnt1eLdY3BFvWgP153znaHsT7kqZsXqdLcs6G7fEPXhyeDiUYCMa51QniMewHFDXmaaHF3hiLpQLXgW",
  "key31": "BogBMkXUqjHdLN7ks6UsrPQfd6fFWwFKXimUXxAa5ZRTJRSDWt7qguzQKT7HBMC5wFX7oTwoJHxAegKgWNBqu9P",
  "key32": "2qk7cxhYXQGL1sjNBCpuezr9pVNceqCeWAV6U8TcD1cjCdAVFbRdqSqffWyXqu2GRxHiBbJXaUCrJJd6ZXJuh32t",
  "key33": "nP1A9CkqiKPKatCuZKRwJ77iGrJtDYQiSi7Eso6mT3y67GB8tK25JSg74n2eLAHyBw9qfLcjvCgYnkMNxkCjg87"
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

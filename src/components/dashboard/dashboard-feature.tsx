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
    "2V3M19XU4u7Ca9C2H4qoF4mXeTgeE8AA9Topc6oz8eqnRDiTus3RzFTT5tyFWTJMKuc9vMRLbLBjUSwPaTZUJBKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfgbmERiRqTRTHNJ9TrXRApGcJez9qh7YJnvfUtkTBssQziQRtdgX7xsa6Ax7tdUirDCg2ZvcMPnM87Es3rNaur",
  "key1": "2vi2E1zjaEfSDZCcV3h5wAtLXGxMop71sjWaTFei372ofgK8JrfjsG7KUeNibKJvtcLpKe4Vos2nsXgaJRUifCzo",
  "key2": "puQQXs5onM3GbseRdd7eJsQAiihMv9Qnb5YysUs1d9Z1XEtcNeePm5Eep1trYcsGcWCSaosQ6Tqgq8pHEhDhPxW",
  "key3": "9ZTnLDRBpX7NfwKv1uNK5bNwYMRPPn2amEHFRSK9jwxqRenj2fyzMaRQitUifPrzEQtyiRVpdvfpA2Q8r2UpVm7",
  "key4": "3hR7upWL8eLrXys6dAoE3UizTLyumdktLevfbWJMVzGGWkvFozQA3KA5VBYeQ5rkKF26EsN2ZTrjiraiWi7pjKLd",
  "key5": "3DgenQigjrZBidhFmd9HxcCVDAtUmEZHiz3fcQ1USRJcZxgtnQdmwicyT4LNsvEZ61hGr63UbedxXjbap5myw7Rv",
  "key6": "3wuaUhBBTyU8aLfwysNupzb7ntB3j47bet82jxFTNFYTeM7W8jFayxS3FYLtQshSPPSNJRe2JM39uC58XNmWUnGN",
  "key7": "3ZQ6gEKRvqYXCxbkL2PMZBM2CpiCh4Xja7qLkEVnkTajYq489aPe3TFuVjWmT47oAQJ92zM9AA6kCCQiuWd6Bmx3",
  "key8": "sgnvMoHov9JHbLBHaz6P11oQUrktiBCGRwA7wD58ATMYWHDT4GBam3kTDtRC6r2uiKuoLmCRcjD3DHjAJPwB72A",
  "key9": "4a5iY7eRNeYd8aaA6yEJUQ3q5FwXVy8hvgtR7dMDfzqJGbknqDsWgz88JXTRKfStvHry2N4bq7wDYinTT1ikrc6V",
  "key10": "ynLBrqpW4J5vHDpkSuEb661xNqY4SBhF6t6AyQnZRETbFTJE2Lp6oQ4XfhJZjA6NejXvPiKh8gPgqdzNSZWHXJF",
  "key11": "5ztFRDQcE8bcAWRHLeKp99GRYMQ1z7zSSD82tAAab5Y2mk7tAhPW9si64Q4efwL7PnLDr1Qo3TiBrvw9svnKpjGZ",
  "key12": "5r6FCEsnTWH3edqExFdENn3vMUBbkExRh5mwwZk4WfpvLcicKkLNoB2jvsCwCE1bqoXzzwWKWCVXMj2mNLSv9KxF",
  "key13": "5eT4CbYYgE5eTNhUa8KJ3gSBjhKqQfiAtohmpC1DzfqmfKMttw7xM44ZYw6KoKzCBGFFpBfk4nFsRdXzGcc7Wtpe",
  "key14": "5yGT5ZqULL7EZ1kARX4Qg4soUGPWAqCNgXXMAQeHcv7KqQDhNieoDMFgbFiEuCWKRiCVbgkNwQg2z3Jk9H4kfLZ4",
  "key15": "NMvhyzREjrcrSWbUjTw3eLWdxffVGfFpcpDNQvVDEqpsVbcYdPsybNkZME3iqFkChzDD9eq3cCdAi3QjwvWV4Zd",
  "key16": "37SLRxyM7KJA4zshaRUqgEkhmWf3wRNLMiizJ6qcZaNEubYj1JJ4vB6oWQqR4ndrxFKYNwgZnX9n2FpUZjEcJ5At",
  "key17": "3X5stMxnUJyNsbgQMJLdzDLeazobomUQNsxXfmHVZ3SJK4uRtu2BPPhUwyPGh8V2y8RfPA29BNJq2Dtb64CNPZLd",
  "key18": "4V8pi66UeSmRGfmBS8Ma5pNcS1K7E8xGxSVcqBgHG5krzWt3KYcVvUv7oajWiDbMgh3GjBN2rgcME34o9mdvYTWh",
  "key19": "48eKR9B6s6NnpSb7PBSx61z9EAaGft9eagD4Fu5Ts1HsAGyx2ycXHAGuin3yfFNutdA4Y6pEcAK5ByKFrBffZdDt",
  "key20": "4hQ9vLELqbwBJScbDbt2PW9e9Dfsoyi7nCGZrLU34FkrhYsLQhmpLkAJW7fcqB5JVdNHXjoAokBnK96UFnkqk17e",
  "key21": "egjmq7vPJbEaHwfNS2dscHPkSvNNCobg6QBdkjmHTeWWwjUKcRb7VgZiPyfbuUsLb9chpsHXULFVzz8fiYVUeTQ",
  "key22": "cJi7PVcmxA8cFKdEQ2itdPSU8KJQ6wDZQTzZTY15mQ9cEQ3kjaPCFBzZ1r3qGVkxRSvtG6xVkGqjWvBykF7WS4N",
  "key23": "3MZuT2ZvuaSgCSQhNqhPzVcgw3EGa8qRH9mrJAWj8iA35hkhprYKn9CD1aM7mPwLPofqcevwpvSRDTuyZMJfAcXp",
  "key24": "BwBkrmhwiWSDyJJ67BimaHEc6qKi2Ldbb5HGDggZNCDMeRUSLYxNvVZxxY5GmNDLei6jLRjHwMTSzEKrK2sEZEG",
  "key25": "28oACNwSgRE1zaekT3exieXsxJ8DEoXsjpGRPZ8g38AmjLVkXJwpNT4MAxoMSsubEDSk8VRuVELotPVVjyeQiu5k",
  "key26": "4Rpx3jb2i6NNGUMV9E94ciRe51pvokfFXopGnGcyMbv4tgr4CWGFEv1dATM2qbkWZagbJCZMRVRt2nbT7PsuC7eP",
  "key27": "4Zj6zvvfTSMCrpmspRVhFrd6amyd98N4HdyNCYbn1S41Na3xceU1p7nf4i2v9bzWuWhTmwpBGdMB6aJzwbKxbCEJ",
  "key28": "32PqAqJ13Zz9iqnxR7bCSGYrcytFa16GjPHMYhWsLc6EEVXkQFqi1wVFV27E6ioQmbqjtW1VdmMC1ZAyv9m51eS8",
  "key29": "4tL67wH8Unx3KzgABXKhETB334eKK8cXoMuRd8pLdEBJHVgaL8onmxJkSw3eGyeHKcaZCuBznvnPQJbkdYYbpRNM",
  "key30": "31n6m3ByRGck85AVcDDei27RCYemzRJLLkPWpQcdruWSdrNwzqDCpk8CjyoieCPqC1k9dFQbggNQ2925wrvgJcnR",
  "key31": "2z9o3hkWf2Gt19BWjBnRa8mzd1ZvttafEYZ6QkjpYnJD1ZQS3aTy37ybZtzTzzwURwmcC2ke431EzWRziGDR3Fqk",
  "key32": "4iwXKP8zkQYyhWoK7Kz41KsUsc4GYkTxBAuY8BSSrQGecR2bnZobuvFaYoviBFXEtQ9jsQ7PxDCvwjWBU3TN4s2R",
  "key33": "3CZRbeExsMoeL7DWSrwEdcC8AU36vwjY7TkfMhmXMWEgdoX8qr5ED4EZDfYaAF76DMogMzPQKv5qxbeVC4owkJN7",
  "key34": "49UCMHxEZiHaDiR6rqVQm9dma3bzk4jfvuYk4pPXTv4vhZDpVn6ek2bFR9J8wJjqHgvRNvEQKU3ZTur8JjTFRMCD",
  "key35": "5t2tw5D5SkxALG49nJ1kP6mKMgrEu47YfT7a29T6p8Hre2sgnTBJUfoiJnnGzif8q8q4kbQWjgaFHhcE9dfzt9AX",
  "key36": "5pjfZ9s5FPjFufhazJkVpEVTqFtDWpp3Pkqw1hX1MgYP52cU3TKfo833YkMrKnGJs3tEh7G5Whn2AMmQANQEJyvh",
  "key37": "5pW5zRJqYmb9Dv7CC5LC2DQTee82MRwxrSLGhUz4P7iateya1UCkVv2H3LCiQVbUnnDaztgZvmQ9dozDAT1qM4Gn",
  "key38": "3zH8UFeHGiWkxXmGd86z2X6fW7SiDEUhr499cDye3kVaQsQsymNiXp3NHhe4tdN2no72fAwtHwfux6da5F1AEcKU",
  "key39": "5TbfFAjqRRJMHC426evwrcpm5ZXjB5RiKNCqTSPyiWkn8Bu6N48jeaKq77EoCaqxRRjCsewkT2XptkYfHPLTkWei",
  "key40": "5YhAZYjxnLjfRmEH2NqJkZzKCBRUK6iY4em3dasg9za5THHZMBMWBn4WXJ9Vj97Sv3D5qKR2vNrxrpVSq9hW1KFG"
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

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
    "4HA4izYv3WWFTGEaWNT13oR9R9HtPLm6dirqDygChgPtB4j8qG1YEUkR3a1tqsKbgxmkGv8nHCoWv83C9WotW31u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBPMoypt3QDJ3keqt4fxAR7evWp6eKChUwbecGdmr1RdEkXrtuJ2GtVPqfFfJbsnxtdRidbX9XdBh2e77tw4PVC",
  "key1": "4uzfXd63Pi4vUz1UtMZMzYxHjL5JzUjGMVhRrGAD36rnchUU4Zx2y1ZMYsLArMhTrdsjdD3ndgNYy3MKN66APUDh",
  "key2": "5xpRSpWuNw6CAWCqZjj3eaDpemqFAp4PnaKNqKVeFmnKvmegpuNKr9EkvSt9mmJi6EFa5ui21DRj3AJENNeERwN5",
  "key3": "5nTxGhvSv5yyaxkCQB58GybznxvVMNZKXNH9TmiCWZ3FcHDDgj4rhvNR2gBood2QbpdWwvz43KRmro7PyX6Qcbkx",
  "key4": "3UKN5rZENBjmjzGn1bgG3Y4hUpNxsXXgm3c5do1MN3s9k16DpCE4ghxRfJf87fVWsPiLRT1ehLN47cQ6CJ3MNe68",
  "key5": "KHHAEho63xvfdPhwvXrFLh8pWt8fN7u7dDbSsKjhFzTuiAvzTwzR4fn4683yLX8VNwuYqbGTp58jH3kPyngcomW",
  "key6": "reEa6x5vJ6AGcA3ZAPC2bwCq6KkdPSLx2rFiRFjsZNH7zC66NTgJZPYkk1LqnxmqteSBYjrhpPLprNNMG2KiAd3",
  "key7": "WC8vQHDMqLRpdvQptqcssZG1DMsxZ6QULWzoqCgqckVUa5XbzAdeQZaqbCvx44E59nDF9xn3GubwYxPyYKxgPvk",
  "key8": "66esBFJtfZvFfhrqT6D9kwjfzwvxyJc9YJ81KmznaHMmML1JT9vWi7MEiKyJ1c3e2GbZNi5msXGQs1ErL5FXevYD",
  "key9": "5TCiMZacHxvNvoikNzXYaWkdkPLkEFJXgWrbbXMFKPDVU7EsC9xhaRCVuLJRSXWffM3pNAg6UfQTw9cW21SoHHAP",
  "key10": "MUgFDLdePrz3ZGTmUYQV8zVtrsQQtfFZPr2A6GvauUDtP7uDfvhL98wPDRZsV3tnPX6mk5G43CsLjCYCmS3j5Vf",
  "key11": "3DKZe966iRDRe7nP4YS34FCBk4Ghnpvtxy6zetHr3Nsoms1MCs775CVMpdCPifeMDYr7CEDspTUva9pCFejeSm5",
  "key12": "Hce3FR5KcwGDu3Zc76WDejUAf85Tgm8HuLMi92Bnthcim3z3EoshJe5493pPveNLW2HTJrqKPMdi5uAH5hFpqsg",
  "key13": "3yY6CxnSsqCuPJp1riGmShmZjK14VHBxggksJdLDtZrPo6M9ZymbgMexh2Di5KYxtKytCR3V2o1Hx2t6dKvzGWnB",
  "key14": "3EjPSoCrV3RqKjaWkzTj2WKCsVSZdi9twfxzxxhbEdrBVGFJvTBasNRUwsaY1sv84a5XL96TytsQJfJcuVNHMd7d",
  "key15": "4HUK8Ffvr9SUHFX33842kYHXDrDViJFBwfwxv495BArMJzG96YCMVgjqCAf1vtqSE3oUqgdAsHkxnNavZ9Swt4tt",
  "key16": "2zAx24tYRyDZCRcUGtV4WzTWqMcUkxpHhQaRPJkHxFUwxXaVf2BUWiu3LrcoK28XLfgGqikYLE22G1nrMDEBmvjA",
  "key17": "S51DdYh24AxTWEMVP9egjCUFTt2FFe4sEVES1Mc6gTANG4eKUvWagbQKnz7xY8wMGwcLqPzt9nsdJxwfCsmaqW3",
  "key18": "15puGGZxDuo9Gs2HhRkUmudfmuaG7mNq9zGJH7cpQtuk44Z4VQjpbFuV2QWGqdwz1mQAjktdVxJ7VmGqS2VXQah",
  "key19": "5LMGDJRzcNd97HDkm3UB7MFy9ajHVkpV3Li38ZDqQayVZeYPWq9Yrd82pNmhJwyv7Gp1XJHquAMPJHbyFaEEesSh",
  "key20": "4jdHnzm93owQTxPxnvpdQHe5AtUsSdmscVKxgUzZkLBTQnSEtdSPQDtsNvWqaKKba9CfHiTkC1EazKeSPfAjju9o",
  "key21": "5ywx7ay46RVYj3M8Ff3QkdrXW6bKKb5h5N5DVJu1eq2JUradtjjqrPxsCN6br949djEew6YNqCpFRhwxnwou99rE",
  "key22": "3NvCMKS7aFmeaPyFCPR8yZZZocsBtEg7V6bgE9q58H9Ezm3m311vciN3pkRH39dipydA5ZVWefGQ2nVRA2a8XcLe",
  "key23": "PZFCzEPGQiGNdiED1Us629jgAndG72E2pCr1JsJwSNtrbVjXCVYSXWMTgVeb12uGXwe39FYtenhUt1zdYB9QSQ2",
  "key24": "Mk4Apwih6XbGYUVqy7dvA8nt5tx9wb4geJhrskkWFvUJTSoSMNBkGuoquo3cUZvJwAPpRpVHmZUKNAPTf1qNJEC",
  "key25": "ty23Sn8TRQAj4ejjyhiwJxFhEdUVPdT1uQcoPYPGAsUxRMNhMFzdiqR4vsA2qgb6uSKxbU3pUPt7SD7zuNG5J5Q",
  "key26": "645gSZXqmmH9FhjKh8gj4CUYZ7kFdwrZg33F2JG8Bs5utBxm6TEykLAzcsueJ1K9gkMSdaG6xKZUtiZBQdR1dRdh",
  "key27": "5uk3hNWEr4sdUsB5zhY7HBFapFkCK5Ck13s8aoo1RXTkQWr8itowPYbuKFQ3kbMT8h5ajRnWa6QUPTAtKCFWcuD6",
  "key28": "61eLpa9nedCKqu3dq6X6f1qf7yiRqfW1QbXe1wJGfbZTZQxLy11N2Nqy6H5KmzZ7xuKCCBS62UMtk9BPJGsyxuDQ",
  "key29": "5kgWiiMmnCHLWyekAd2qCjy7xyQXfuYaxURGsn7HRs8xVq9NtiEKhUPHZvQqgidb3gLUjPLykxtcDNimPjuiXBJm",
  "key30": "4H9q7RDL8a19Gs665HXMjSyUdaLL3JJkcLyWP7deH6umTRNXJSFVs73qQCALEfFwh19Z1LSqgrdobkVyRbtK7fYB",
  "key31": "45rKZW4Jh82yNdXv2DJxqiNBc5LP9uAbihMSJQo9Zig8kTkPojZof1JQtEqWqcLHt3SDHYnpVmWYVCkWSoKLaQqc",
  "key32": "3v85NcURQd12i1su7qTgdpBbt8Ksz6kebKWmEb6wsYnbAJ1PiNLNQAeBYZtZ9zsR6pfKtChwYrx1VffoiwukkkXQ",
  "key33": "jiqzZ5ySJ6XwAWQAtsHS2JtFdmXTG8QiDEUzy55q6v5MR7XTabNExngpGnKPzoquDVyE248wtKPEEoepcRVReAo",
  "key34": "5MHJiPCeWy9siHq4RYueW65mvi8qhq3nCd52sADy6udRGGDy3LQUxkvHM4sysm1PfNAbXHGDLRmGkFPsXRSRihJM",
  "key35": "2F8wnaqSonHZ4SvPyo55Mj4Z6ozjnBgn8VqAhnWWNX6T8iVHpMg6FbeMuCyW8gSDez7GXTjGtqEpKQJaQxmcqeag",
  "key36": "57Mxgdch2z4Tx4hTLrxRacv2uKkt4iAm7yChN2RGwhypBsDQxb3hpmF5QgbUz8aA9hphUHuPFwqBTL7wVxCNoyH8",
  "key37": "3C9P4vN8UwTggr62amjT1fN9aMcNetjeYb8eeuR1bkTVxERZVgZWqjALGkUK8yykzmtmGt7EdLTBWAt5aEt3F8PA",
  "key38": "1TYYSNT5eQPe84xMCoWnQ6vw7LRwwshZpPZQEwnY6FSeSUGpUXZGQGoZjGdiKUYWgKMRFbxSpuvUwX1jGWFgrXD",
  "key39": "5qEAYuUpb2ymXFC9D8V5GLqy9s1EwjUnJ3RhtaySB7ge73Rc2vUr7ahqKpMYSPNHzFNdzumUYudB55gz58Jsogs7",
  "key40": "26K9a4UVfNWnkAV2hj7yhDxz9xCBoRnT8dy9q7h9sp6tRQDqdG5JtdiQcZGtoQDpiWzBVjw2oqPFaE7ijbYQJGZ7",
  "key41": "4bLgP2CCGXBLxgDxBDoq96hw5TiQkPf3aQwiCFtyT6gc1EtUr22Zp6HTtPQfpdbNtT4pQbCtptiLE6bR6Dg46QvF",
  "key42": "3826JCudDLe9BUG38dn7bzxNP853NVSCrMeAs4kKMocdjnq14CvMtQYQxymqF8Trw9Z53Z9mSjA9QPre2LQtHM8K"
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

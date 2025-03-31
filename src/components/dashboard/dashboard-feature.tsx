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
    "18a3o1wgWAfdkrrURsuX3H49h5EaxJX5v27fcZLhBjHxsXsPNE5G4ztMQfPhinJqn58LFNhctGqTTA851CQK2BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51v5g27rcjXCmYPgmMiThCTW768c232QK71yPREBJSTNwpRhje8qihJ5K2XjYiJuqiifTiQDUcvPSVF5puurdMn9",
  "key1": "42MPVDBRcxz1gdib9v7aLRNbPH294HEP2HxFMnj1CcT2EMt58YNrAb6WdyQvciomDxTZ5UzM34avLxQe2G2A5nKm",
  "key2": "ypoxKwLmTQSKELcZgjzyjzw7zLyHbMhmEBRtgKFqhvireycnwH6JyuAPM5Vq33FRMziFScDphva78boJt5ievK5",
  "key3": "46fEBDnw7m95PShm5WpHwn2Ejbz2ZNvE1xVzQJ9pkA2v6h3ud7mEeXwNCt2HQmWwm32a2GrZyv8P2BNHYT7unQUA",
  "key4": "4vauuptMu2E92C18hQNYUQSGjyLQGocNxTNszjHL19GuKFkBYsFz26A6SxbXUewPn5ZCv1tsqg2varTTMMosTcCf",
  "key5": "4foLsFradxZ4KDvcEw84ARd8rrYM4oRjqvJ82jiVQ1tdHqQ7CPo7gSVAWzMBH1ES3xuQNHRM8zupCAzXyrw4B3Ew",
  "key6": "wTU7jrxh8vrTBYQD7GjKjDeoN1u4odVrrTKE1ifuw411oh1dPfLYXqTHtdkoTG2djABL13GCCvW8RiZQ1AdgbLS",
  "key7": "3wSGuWBQFwAk71XjAZBKsssWDKjpLCizMDUT7hq1G3VYfuevwZHAhZCWCgyhDizdhjyZjBWssYNU4bj71wcjvGSB",
  "key8": "woD1FmzowSFVgiKgGsU4ZJZ4JKximKjK3YyZDrw4gwSnT8EnjPKekD8Hf51u9nuLJffy4K1odX5UfPuJoe1XkP7",
  "key9": "4WSpyf2jGm5Z5xFwqTv3cg1EbxiRXTQa6AqXNB3fR6zin9tf6eejY8wrLzTwUiLfFvZYzyZXVboDtgUEFF6de98v",
  "key10": "ttaZYXW5MqTrRx3kqnrcJbrMqeGQy7Srv6bWTDP675GtgddyRAcAaem9Kfadkrq3irTjUWcxeNVw6xvgEZ6yFUs",
  "key11": "29iJ2p7trQo6gzDm7zRTWmvM7XoC2WuiB1yKYMUQLoshnP4GBho4dEUjgJXLRCE5NQ35Z3J95cpktSvccbdECXiB",
  "key12": "3qXbPDNYHmzfAxMpjY4WAyEbfABmKEtVf8vFv8S8SkvvnJcSYouRfPzo2MjriAoGhGDVfGWkqjD4ZSfDUqgwyzeK",
  "key13": "2VsEVpki46bpwPcEMYaBGs1PehmoZ8WngP7Ug6b2zpHgNC6qXXQihYa6gCBTSJpPFtPFf6NuvF8uE28kkiLgrvPr",
  "key14": "2MA3ffqYuumNMcmS4hx4BvB7PNmt8f9nAcn43DFvCHga5hpsgx5pCzxBTfiteZCMwcqzP823w7F2V9bwZjHYJbEx",
  "key15": "YXsVCjinLPnAy6d3wMpeEA74ysD7Fk15VrfWw5N5Nn5xguRgjN5r66C8tGzvVzU8PDYdHW7vqpLatDBFmHUaKgZ",
  "key16": "4BJHY9RzGQbXeN52fMjAwo9vJkabtqJzUpstjyS9tZ2peWLUM3PmCdeBUoizX2AoZj1ZyPtpPx6V2Jb2T92PseXJ",
  "key17": "4NQ9vghDmLcqmVcTEAEgDa3gp7kCusTJ1i2bEYP5KcbSfg95b8L1rYtAuhF5kzB1h9PnSZRK6iBJyZFYP6hGi576",
  "key18": "4tuRmaPTycbxGaSiLyfRRkUcdRwy5ZfQ242iTMVXJ2mnLQbJXLxX2erubpyBnj1NWJR7QGGkTrWbqiDFU4d9Yg9J",
  "key19": "4dbCa1GvRofSz6U3S2V4bdazorzECzXmvB4aHk1vzDtcFAvqXmeF7chhJKHKijdxyypqxAPX2UFzdkeZ5hJrRZPA",
  "key20": "3pqV4Cw9VEk6c3fNTmNgGHQuUmLMn2gFhesYC4QXjWnpEcxjcSv5xMbQZUtjNLcTPUJp3vGsU7BnjeXvyS7dLNVw",
  "key21": "2bcMw1n7kF9JnCqg1NoVMg3d7gTpFjnMm4jWorzgmxHadqxpmAgZZd9eCSetHrxue5E4vNtHdeLTLjPzK3Dcz83x",
  "key22": "55DcxCZJf3siNFdiF8BtUXn1DPyiEuJnTo8UFZNXWQd5TVDU8ffaPbCC39NBCpAqYtGzKbjPG9dQLtrogKjpEw6",
  "key23": "2EEL3Vb7SShm4ByHMG53Kz3XWjaN2xCQNTnHhUjGgCvmWgbnZTWiLTgABo2z9UG2BJZB1RNAQk7FgmT2ZFgxn8wD",
  "key24": "BLttWxcRfPRgdTsQnSxd6TX7i4rYJDoRPLWKiYY8cKZVi97mZpsZ1bWMXx5p5EXcWpGmobAW21z46Uw5tUFeXf3",
  "key25": "2Z6pZsxvYN19peUm8NqfPPVAGBaX9Kt5Q3P2UNWSYMDUaengf6rqcHJMgYStmxnVHpXwnq12n9BfL5ycvHXrqVtE",
  "key26": "5VwHkskk3ysXLZAvboLnAdm5erVZyQh6pWmU78reaqMfWbBNVowdMboYNp1fFMHcmfLSeHafn1noLAmaaUwzxuMP",
  "key27": "2jremEiCk6g3ZXWjSpgu2CvGQZNAp7kSV6eeDMk4NeEYwj5i3iAUZFAwg8BArB8UYVHhpbyPEn7ZLrWXLrERC37Y",
  "key28": "2LKgnwfcV31U4sVhMm8hQFmdq2KdxNXxLQAk7uZJbPWLU2H3UZG83HQgpLbVQ53djbxupbxhboqhxytqAYBzicNa",
  "key29": "4BEGF31eoD23mMrKCkN12qiL4kNKEzSk65ACRqxhih6gmF9WmcoRcGXBVswfvDPkXJawpH1THeLx2tYniGjvQSR5",
  "key30": "XJG1MLYaM5v85m6cWejjSkmhBjHY7CWJmMtMfJSdFtkJ1DqPxDFAFk4WEoc77nvAN3SUcbkGmrLTtLFk9Zep58v",
  "key31": "5b6gB5PfCehS8w7hFeAUFyUjhY3e5xh2mYfrtTuLQvYTKcnDC8dAvDqfoexDdgjeHyL8h4D3qEA7m4CQjKqUQcZQ",
  "key32": "5mf4CEfaNLtXSK63bdUjenMQpPRVpYGDeSSYuhrUgeQ1tFyyLKecrPfmV5mNBu5pDH3rVKk6YovQJYEoNcsG56Aa",
  "key33": "2HcU3bsWdCo18CateFkXLwL6fQ4FyCqYmSWPE3aLCQjnE4xosjb7bRagmzTJFqvjeoASa2AJfN5bBcNuwdxSmqb8",
  "key34": "3m1i6TG4TZJYvsRGSFwuodcYdfg52Tr8wNwzv1xwZh1kf4zVkpi163sDXws3dciAbd2szRig4mA12gAc2oSGrxHv",
  "key35": "5pu1eXh2Aq9sFNJQpt92kdF97LQ6BdfhfRHjHVjczZayM31XgwEgYGzTmTRjMGMKfKqG6G5pifscSNJQJHawA2No",
  "key36": "5ehhPkDwCYU8CsBfSeTyvANYt3cMauewcY3FEc5WPhP5HQCHfCecNrVHWG9dKR92C15xHtW26qnjEE61tYLCtZLT",
  "key37": "5n4BvmZNeoxsVzK9kktLf9XhbacvvrwkUgHMWs4myc4M7fbSmhuESS3oDv6b8nrHAB8b2tRy1yWSix2EiGjS9cps",
  "key38": "5oYefvheHkL9QA1qpNYqHoHwxa6J4JJDceCajVhby71QTsbAHB5EVJ2rEJbgCoYH1dQbe6zhwvup6z9UKLTCcbbW",
  "key39": "2892AsYkZUaALJhfGzaSCtd5Xt4uNr6GMJXRKsdVB5AyUUfFgxEg6o92nyfGRWqPUaFPYRRvDqqJQ6yooR6BGbBS",
  "key40": "3mrpHHwtpR7UpUVa9oDY97iGktQAse9PTKSrcZqbWqzxXJ6HrYazU5u44e88RpJCdfHRuwamhLpYVC7N6UFBVB9F",
  "key41": "2q5icPb5WrQKKArW4n1smXC3Tcgcakpkc4dTJYnr6zyrkvikrBV8tzjWBXX6dBLkf5i44cUxczQxdSw12jS4Lw4P",
  "key42": "3ZfDgtYnestCXfLYobpq9c6BNrD7vL7WbZxPsDVo6BQhfnx9mBiDaSK3vt7Loy9hEFfQ2QPeZb4AxHta2E9cjSem",
  "key43": "5NoCWNETmxaHK26N3reke9d8XTzAuSymY19dboFR2WkUFGfDhMD7BbhnQeXa8buLFpTEEwycWYca2T4DEkZzWKyx"
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

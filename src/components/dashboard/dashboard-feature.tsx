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
    "5w5xmAAExb5458RNtwB4GnLtwsJJc7cNx2yGN73Jw69Tm419Mav4JrN1aF3tq74Uf3rJ7FNe82cCQhpqctGJGNS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxtTQ53ayZB6BUhPBwe5gTFe9zHpTaYQyXFxn1PGGYAhuvEYR9axFirpv7tL24AyyYtSasSah34QP7rf6z9CCxe",
  "key1": "2iPdwj8Yyf4LfociU17iXe23iC6ztfCt5V2ZpJyWJAjRPsVW949P91jKV8HcHYM7Cskb1KnNzxQZK8LSjw1DLP6J",
  "key2": "4sqeEE7iR3CXnjyd1Vftahed6Ssz4iyVb3SkUw9M6nkjT9ZaZpgqaLBA7TEw3tC9gY1ddXinNb2SkrSKJ6723N3Z",
  "key3": "KFhePZKNnSB1LfXMST4DUqEqSLQFznMosjFhNi5LW7NyVvrq2xLtGtAUuonBNF9NzPUHYy37w9h3g9nwgsEDp1J",
  "key4": "3yvzfsaw8RCQBkk9At9L288kdw5vT4j7tqtXo4uNCuzq1ntcRdDUC87HRVBDiPvghTbgZKD6tELDB5pbwwYBTxUq",
  "key5": "24cZJzB7cQ3j1fahaEBPopYqTyVsGUfMFEneN4JvWy3RJsueAfmLqszDhhwTiXstvVD5bjTVK8xN278fPVJ8mQjV",
  "key6": "3njUq7qP8QEAPwizKR8sk9MveJL5EF8eQc2askxTnhEvz3mctG2HcL83zmUMCjV4kUeyvDg6rxQKgHdKZENrKP1u",
  "key7": "61qMfSJopVdaEABkHgdpXTcD2eHksLfakJNXp4aUwgJmCoK8947nzaKPXvvpnPbbo5YBY78sprXeu6cqXWme343d",
  "key8": "3pkmdzBVUk4DiG9j5eWwXbiD6rY4jzwfPUhvhNGh4GjeEd1vFaHBGEWoSQHRwjCpzrLz6zzEApf2uvcpJjZMobcJ",
  "key9": "Vq2pLi2e7cnUua8UfkhbncE1EHQTxgmuoWyH5HrjhpmKYwSqNM7T9dZoPdMgat4vWvMtVMY86X27wUSVNjoLjPp",
  "key10": "3CLgJds3LqQfhVGVa7VG2Qjq3wEbdBsurQhpcE1abm67MTE33RJznQJQdHdiDt8eajsVo2DAedEYjQqgEgnqmDZn",
  "key11": "5weNvDWgT6FguVF44hkzKxEeGtUMg4dVQQA6LbobopvT2sZGMNx6aALjRLD24chS4SAUAcgGii16rUeghsmfQjMj",
  "key12": "5zjZzPANJDkXCFgM7fUThtkS1NuD2thkpNRhtXnYcsLL6hoPs5R8sGEE73n2eYCX3JNf5VgzQkN7aUBDcnHpJkfN",
  "key13": "5sBcG6wZD9wqhZhkViPkGSWzLcuhPrgykxGMKi14cycsMwJCGiEWc71HGUyxvATBUVuf5itH4Ze3DAhL2h58ktT",
  "key14": "vZ12GbDfLK7836jXtULijgxsSJcCdeHzySDNkUWbPPzgZUFJuoPWL9T16YQ3GWTtTGVfGNZu9Nit1J5wHmt2UG6",
  "key15": "3WUPryJRnEpTj9iyhhHrJZA3hRbDKuNkKk9HRToBA5iYDHXEYwY668acNVCTUP15xucSLWZMUL2jLnvX6jykK1sG",
  "key16": "4TDztYqcovsvSNje6ab7vuo7ajS9jQoq4Uqv3x3nUkE3Txd8DuJbSck6mXcTWYo7tXKHwCfoxRYwAmbt25mRQwh8",
  "key17": "37eem8aXJTKJDsxpqJsiuURVcm953Rc4c8N9mD1oP9QeukqCFtnn8XLyy4pbQjVaXuufjmoDzCifW5fUoYVKqFvK",
  "key18": "2TUaYBJRRtK8yCfeR5ioaraY8BiNW2ASn472oLvzCRsBE9dC666rBrcwFjDRWzJFstUU2pAGNXdBGo9hGDR9oF9E",
  "key19": "UB8FzxZh1mYFd1r7UrV8ytxsc9Z5cgs33n7BBMoh3RaUPGa8Wv3hTzfDFAbG4HF1uCv9aGtLVLYuNRRteCSX3np",
  "key20": "4rcK9TjeJpBhff7LwoeXimGra5aWh5efjEkvrFn2z4id9PhwvTvxqoABRSNJqwky4HLaD9Me4R2hoPTs17RcDS4L",
  "key21": "4UV24ftrv25sY959KSFjU42WaA6LGmktVY4f2BvrtuqW7LnVAm1hR1acvvhkZW71vH16qz3W7Q4AFHnq5v17NEMU",
  "key22": "5CFRoyGBhH3YnR3szRLqChVvVysTqgmHjNJVdCaXdE6Zwp96pyhCCrrVygsAy8bpaKEqivhm5rfqsFGNwry9Rurk",
  "key23": "47gqzM9KZ54UJN8rKAX24UXm2JbY9JwTE8FSxFvSzDh16GNCo3Aein3jZqyJCmdhczTmF92tsFbyRfhTPLPvhmS5",
  "key24": "4VvCF7vJX1Gb7ptpMYpKTYMjMBnKH2GZ9x55CkFVpS6J8hd8q8169qTgqYCPGgXpKnRjyZwk2toPSKh2Lz7XB1Vd",
  "key25": "3WwFRNEv7g3R36JHJdbBeY78X9xMibguqKi84KreR1LzU34zcquNYsiaY4fEcMs1BXF2agrLyMws2NJ4mFHCkHno",
  "key26": "5ExKiUqLY3pZ52LUAogbNV1ENgW2fkTzLrZssHU4cGy4VYbhiN5aNJEsae6z2sB2ZPFyjuTNcvmrghMNcA5h3H1u",
  "key27": "3ASTNyx6wbf36cuAGBUNv86nAvi4xdJqG82BNt5wktv73zMTcXtbBwA8SMnoGyeCXPDSqh4N7MAyWMVVNGBf7m2f",
  "key28": "3zbDRiJ9jc9sAt6Hao7LBxthKRv6yxDZ43hxz8W8cvhH5JmaohDA6C93L23Fj139VUNKCwvsdN7teomgfaYzAHhM",
  "key29": "JvXLmnNxxqGMZJ7N5fnog51Z2apGZLb4zKGFW6Ng56F3S5Q9BAVbh1SkoCLCY6MX1L8y1688r8xGo2W8iEkVdG8",
  "key30": "6EN6Gtkayn6gkP2nBZmz28iP4F33anFHBxiGsAPpF5SQoWAvZrqdXG6C6zaYTjW4uXitZahjpZDkYRuCgvuhqqm",
  "key31": "21pKMcSEWm9EEWYcvUSVmwdXd5HRc9D5w861tVHiTu5mf5SD7VpcVkAEBQnRiPhK4dLwcTUsQWXhvrsEyBH7mNiv",
  "key32": "3BJorFVokUxjFPtaRSUks3mT4SHMF7bVkZFe41RjTprV6sfeqE5Q9jovgz1a4hp72ExksQpG2aupHj8RsMyg2x4m",
  "key33": "4baSSi6AWuxusUqDoU79oEMt4uaQJx51qb5pweSyy1eeafbKVJA4khYnhnHHtJHkRruVqJszmzEmPQawsu3CCVW1",
  "key34": "2baGfXQQThC2saeyrPFbuTkZ21U6aiE5wghPH16jMtqwaAXpPxVBszAR7VvbjvaryKqQXGMa8PB5BhhjnaQzVnLK",
  "key35": "4pH3TJvv69xk2ysRc8pJofZjpmW4ZMBmYFeJRjAPfDQe5WKUq8rAJWTB3wf725cWQRFGaAj5ZV8zoxi8qGQQjvLx",
  "key36": "48pVvDTmkQycDDJsjiY3W6CKa5hpVfuwdPovdFBEomnMXMLakieM9DSrrN99SaEGchnDuF6H4AWxLFQrfDsTAXtw",
  "key37": "ukZTsGWwHzQrz6X7p8JWeU5Z2Wm8mxEebB8gb3XGvJXSMsRzebTKZQth9vyMTcDWcsR7axvVTBs2RtDp8NVhxjf",
  "key38": "4PS75teebBaCwNyfGpnSwcr67swyxD1XCjFQbWS5iqbY5SCgGjuLsTH6cWw96XrYGM4h9ye1F6FFf2sr1yZsXcuR",
  "key39": "aUEydaS3biLiWPapqeQmbBtC16oWUYVVi2cf79adJTdGf3q77scpUd3YThC6bpg5vo4Rctnz6RGetcqM7qdFMbw",
  "key40": "GJf17WEAQ8UZ5JsBVJDqhifasHG24ka4CNDGKuUZq6SS9N1GCq2GA6njqqKchiGxHPKfDdDh6NnykyPJwc8PPZ9",
  "key41": "5ZjeZdwSPBAiMHFALFPXihDVo9mFrVhAAYjFT3pVRik4pzkjVXpq2KGcrgwrmYCvHqaN1tYuuUrhYE2nZhkDkXS4",
  "key42": "2zx2pcoxdsk91ThF5vvja75RJZ9NcwuDwvJhcVR2pVRXSm9okmDcFpBbW4izXqGHUpBgxqXNHJ617e4HV1WcLwci",
  "key43": "3cbncXYD3RbC1NJzoqXJqkKPjqcfJjXJUNeFopx5aafqggR7RfqJk2uqFGe6fPV4VQeB6qHxq9aa9HDRHLgu6BYb",
  "key44": "4XfMUjHXwQNQ9M9YTb4psUzSGHrSfhu4MXsSDXdM8ZVGmEGod2PrJa5Ccymb1Zvamg1AJk2J4dTggRre3dPyKNtq",
  "key45": "3wcMPr8p13rD55gkp9o4HdhHAEYEBeDiWkk9csdkgHxNHfLfUHSu7YMi4Veo5MJHFNmvWM2qaYEUYgYqn5o3Jgbu",
  "key46": "2KGqgDranmtZcq1kLdUMhRT6LSF5YY3RTTGRb9H3pBFoTyUDHtyHWnfYVMZg92u7d6De6Ji3HSHFe4e1U37YcXHC",
  "key47": "39aFHiVWXbhANL8Qp6RBGVDtzjbjEBZd1ZUL5fnXE87dvpPTf4P3wTtdwi9XmhAkp3aYwxmXe86kyJV2ds8jDDdd",
  "key48": "4vYxkkgaTEjWMFJCurjVdpo1t7SAPdbXiSLgQjFJejaKuVP696iWfPovbnbhYWf1xAjqLiLMETsUx22DFWFuq3GV"
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

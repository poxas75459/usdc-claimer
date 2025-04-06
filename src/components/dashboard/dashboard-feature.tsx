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
    "38Cb6S7qzYYcWGvrUXK2LoZVkmurEufe6Aa3Dr6H3Kj3JfLSpBhuxK63t1vkWSZt93Dyh8ND32vLPXbDDT7AqRP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SxUvfY4NQjqNbXQKCf8uQtqgg3EFbtCpwi9tSwAttTYPZBauggcg5vstqTNqgbRHL7VHEGHFgfSrrJgbQvwF2gs",
  "key1": "2n5rJEz7z27FpYptKFHDFMXwi9LHqobfhBWDi5oPFW6GzTrxLWCKRHhYaLFMXwgDfghv7LbYkTBSLLr2yTqjqHyb",
  "key2": "t5rWsqB6jy92y7rZvtB56wAxnX9LM3QCTEa8eu8XN5F9JHbhE4AvB7bKPrbu45t72pY4wqAjCDDM1QFNA8YmFrg",
  "key3": "3xjrSqfh6dG22AoGKjgxVLAEbnS9ZDHRnB8sfdChkjFPrE89iJFdZzG6EFBG5PuaTRyNUP1z8hzFfVzKcL7JYmLq",
  "key4": "5VVmdgxGrPbWLbALVzRdxK27aNtk7Eh8AvgYb8vd3BddwQZ7Z3mAHBTMi2HFJhBATFCcd9Esur5dNXhYFVmLj18r",
  "key5": "5FERtJfCZhqFCGsTk3SJnyD86bnW4mVGCbm7vkdBNnXx2Zm7x4AhQKkc8g8ZQqEtvhdki5H41YTtw5jEYCii2oBA",
  "key6": "8BduPPPeTutDu2maaauWHt1ERpGX2RynFXd85GRtEorxPz9ruxMVycSCmHeYcBEXoBXJARCZUBzexbQ2YJCKLPy",
  "key7": "5B4fhA5ZrULwrifKsYRwZtPyZrZVPp7qoN1kTpuVcWJ8QLsRwTaYxNzSx69kSanSNUyxF3aVssy6fjGsiZe4rxqS",
  "key8": "4Xp6cc4qaBcmsUY7nLZuivZnV4F88FKXqNdz8AcpkUUKLJPvN89fbS8AqZuiYFoj58fCdbxjNX2KKuy6ZgBbTese",
  "key9": "47ZM4GRqYUBJBk3d8kdLDCDEqUNssYp4ysFdqPzexGiD7CHRRKDN6Ky6L94cQnwM2XGBBmpDjNz7RiWZbAnQ748J",
  "key10": "284sTTgeGqe3W4efLb61nZm1ub4adxCcL2GvuEoEZ8HuAeYPRQ84ZdHkvyD1xgQNjEjUTWEmAoJ2GkCFf3PZ3s4q",
  "key11": "3kFsDXj6zMxyD8oxUft5Fan1FqtkXDbERR81h5v4DgPbmi5EkCm61yMjTfT2mdok9f2StyNT9EZQXsh9qKZvNEGt",
  "key12": "2iepgz2qCgyebUjY4rJ9KAaLmzLwSJeddqbQJzMmz8Xy6yTdjEGKkxYL1i39h2h9DXwpZSRr3M1u57wSApYBCf7c",
  "key13": "5mnprRbhixy1mGDNtVN4uUQVMTYpdMUHmBQB8fcaUmU4hsrVxDrjJF1SWXj2zSVpyHTDyitoGKxxN21aEj5kBf7D",
  "key14": "61SN3LrXG3urJ71fhZUMwR83UGEaT8nHs2SWxucBjax6bnTh2P94rVATnXapWfRtrjH6ATJrdurxn4PguVhacF7z",
  "key15": "5wnLrN7AEjBDXJ9iNJp6zWKaYn5tqeLP5njZ1UApDHs1PqNX64PFK92LZgPeKZe3GCgpststs9W9MVtzNvy4o1QT",
  "key16": "XAcbRf8FzutoBxZRc2VE6Ut9CTBzfest7zMbDk8raJ9XtpMQPFiB84wLdTntCUKSi4YkWekBMrT9CDjKQf3v4fs",
  "key17": "4z7fdY3ZWPuzw59NfHuHyQrTFyQJUWio9t9yxHKtejqnVVqrenRGN573vnkREMXT2mNP17DShcSRaPJvDdGnz1in",
  "key18": "qgXq9tXgFH7h15XiqGq4Yj9CshS71VKgQvgTQvwKprPXr8JAswhMSK1BtdvPUBhARRduBjefZgXhkL7mx9FktoH",
  "key19": "24QVSVwGBcpv16o8SbZ2aX2J4UUhvsMuLXWaWWuDCzj11vAZR57quBzavh66nMMtUpVc4ynX1aBAk5wQ9Y65HYkJ",
  "key20": "2tm2BX1RzeasUvHMgRYKBnbdU6TPeGqWzQNJhj2NBEYuiyo1DYVX2BEc5NxRCD3TNDYbDJJYSuzFchoTexLs9pyA",
  "key21": "5c7rjijvZN54ojxfoNkq3jvzKZb8k23soNGVJqJ5G8gfX1ruRmv7EsYi1Wot3yY3V5ouQnSPYeK6sBUVcPMabnP6",
  "key22": "53atbnfvfu7GC7A1UF127XVDF8kXK6qiDj13rzKKh9S77coSocnJV4AkHsmounCLZLUWhtXpJLiYMbbiPqjbExwp",
  "key23": "RhHBG8pqjiZyKVuRUwqRzhjk2BjGgCPystHqJVm1B1TZ6N2rnhvzbyDsBoFcmcSRY4tMNypHbEfDynqoUNbbBCB",
  "key24": "5yiKErBfmHqDZUfHEnvBHDyFB4k1nbm7vZS7fa2xEoj3KCxpyMMfomSBjtorvWeAHztwf8H1gaWs7anKwuVbDNgw",
  "key25": "n5oCyfYNtTBUYhR34487j4a8FhVRNY9ubiAotWGQRoWKVAR2dBEwoFU3zEXi65GX3gWyQBaYs3F7pvxH4rQ7zPk",
  "key26": "3c44rUbushaaQN82754FVbMfxm6o2wNnHetW59gmyebqF1GhxUVvQty411cjj8Kp4Z4EgmDUfnjpYXoyJK2HKGfn",
  "key27": "5vihQN9kfcxn78k7CEozCfSm2Uugii4zy7DH3JBhYKLQA5q1ajWsUfvjatHTkCCAZZR3uh7YDoM3trmMGZWLDVJu",
  "key28": "4QkJLPxMK7r55vijXeLMQ422rWhTDAuYLaY5NeD9UMKtFBE5w5NBhRNiR7cFXc5XZza8FLxWbtGTCmAuCkogfQmt",
  "key29": "4UbAuHWnVu4GjwgfjPY5q3RjeozvgTNFc64w2AaMbV3BJdNPMibFJzMD9qoJJRMtNPB8M9MEjJcV7QtphM4yTih2",
  "key30": "5JhSRwwYDsCGQgA4jSrqWXYnKB3gR9bszg6yLnCE8pBZjM6s4yTgyRavzkeVAVzeHeQLHMWZ7SpDi4pR6xqUPgeR",
  "key31": "5R6ta7PUUuk423xPt9q9uMeqisVuYZPYYLscHN9gUUXxh59MhHrTygSgT599nNz4WHdYsPEVtCDWQadCV2sGWDpJ",
  "key32": "2jJJ1kyKiE4Q85SQ8zaGpA6SfD7YVbC5QJGBRg9zcYg2oTKTi7MGihfn3SGMyDwrtiPkMppsmvmCb8M1fY6JA2G6",
  "key33": "2amg8GQc4y8qshcMvFcftpMLJHesQmENqHd3eRjF5MuB8Suk9o5psDDWj8qKESiHfhG8RVSy635DJc8bRPundFCf",
  "key34": "5ZxJbND3zVb6yhWkPzwg4u4pdoXTrD3zhbCKLM5PfLEhd6Zvf2LVns8VuTDoJa112NBXQZfGNoo9xPb9sFSxTWXq",
  "key35": "2gkeLXQw5Kt1JUcASwAKayg3GVVyNyFiy7QPjcMxFe8V3pfUBdh6eqk8JtJiZUmzwRiJ3xyQjfXQs8taHhtvQEEs",
  "key36": "oZA96MjVuz7ZAtpB1W3rfaRbMc4xmueZA4gEVWrC7EUvcLzdESwcawsJhWN7wBK4idM1deZhq2NKH2MW74GqUiE",
  "key37": "3pagN9G6r8LXTiFXqP5Usvx7GpGpYeSNUNwYKTouLwsMEHYuzPsD76AW48JuXB9bVyi1gMJ83rqNEcSS7Ly1bjcb",
  "key38": "3EMrmZx4aNGWzHkEk4wKyPDyNfd9BJkswDaxeFx5w4esWVouq6Z8zUesFThzmdsguqaUz7JwdRXCTWhhGejkiRC1",
  "key39": "3YrLUkrtHE16urVPDFhpooMX7ywHEQuqhi2GL6kYUfhv1csZsg2MFDGWpjZBfFTi2in8BEAmMH7PeFEemxox8zMj",
  "key40": "4KRMeSoVW6fc56zFNM5MLKtNqKEv5Jefpu9k2faW2MeWdTdaUMvGiSiGWghW9T1vyYkA3MAmfnVyULkqtscudPCb",
  "key41": "294j4DWWcVs8jjynWw4AcfGgZzwJr3bFPnpLhQfuRA7BNe6toRUqb5DiCJpXbJevzjL1TJUMcrjxwt9QMbduw6MS",
  "key42": "3kK8tJocpGnLbPMZYmYg7gVe8tCezwAYdLk3jkLh1NCxdNKeL7Ndx38DSFUJowU1LKT4hTttbP5kuDmhbx3sZU75"
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

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
    "5ft9537k7Yo74XYq4FJtPZH38uAuTnfdBBjrQA6LQPBwxpQNJzJoQ9ysKL7pEtw51vQUDyBwtNiTbNrCw3o32n2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psBRyNhr71TPnkjQD4R3AuRvaJWZDpHSburA6j9udLd3aijiC8aWJwL7dkLRpzCyh9AyQ35kvc7p7WfNSkF5cr5",
  "key1": "3wvp4wQvbDqCqwkTpZFXdiu2ELnxPLxNM6g5fMyHYYus9f8cVFKREv7enFt8arqo7nQC5sG7kpac96JPWoZrPpFP",
  "key2": "31eKWBu6zHhWtDRvwQTqgZ3MZrpKSajpjCyWtsEomEoyi6JRhxQgnFVLKsbrqLvg83PLLCJsw91eR2vp1bNdT9m3",
  "key3": "K1CVYtSpFnwXuBWRmz1ro6NQZAAbWqeE9SMKtbW6mJTGfZaYaUq2LVEGqMRbN797MXMe4xqrFtX5Ck49JfqYwPL",
  "key4": "3wnLacc78W7ujD5GUDdELWxVzDNxszgTVkXzW5pXsZ1WmVa9t2jGYnJVzc2fFhJv9xXxJZ8guTz6NJx6No9JRvZM",
  "key5": "fqHZBTc5DpDdBj9g3hhEP7KjeHybg159KPmA2jdoSxREPcT3aSFky5zXPudK2ZmQaKCJujascDsAHZHscV9fCJW",
  "key6": "46y4UEiCpDTjKJchsJLziFT6Mk91y5yfAxJKbRn4H7BtnunbJYft9qcVqhhCQwMKhDupVxA1hY7jLjpQKntf3Mgq",
  "key7": "2BfYWgrMtpnKcSnTrYvZqazN8WhoR5wsTfnFUbCT621yobjqyLDw7Gd5V91KY9AxbkBUZYhExS2jmGY4ja2cg2ku",
  "key8": "4CLXzX9yX1q8edKsGv9iBAzj4GvPidQtp32EhZG6NDPTXHFMm5seuJFhr31x7ZLqFSYded8WTzGMMWNGrNp3WaGB",
  "key9": "4QqdZF2BTWX1VmkvwtEQnird8AXt9ciR8CEJqeS8FrV6JuPr8QPgVFKKerkB6kJXq1KseHM3BfiRakg5imKFH4HG",
  "key10": "2Uf2qQagMrcXx7rHPCtkWJGUJh8e1j1cwan4ybU9TkZFGeQpQeXLroiZWQ12kYQobJ5rFB16Er3sUUAYYq6efGRB",
  "key11": "3WhK7QY6rSDRNWJLsezByxsGN5EstDb2aAQpSYnp4RjmNmtsorXY7vbwVF6a6UoQzpfu4V8bvfy4pGxWHLZpDNQY",
  "key12": "2PuTW3V4ZaRDSVvNQwa4VXqXf4NzeH6n6WeAhME8rPh8587qVBnUiPLTXA9YRQEKLKMKNfridbEz57eq4g1QGogp",
  "key13": "2SKGXs39mPp5r9rZrzBBnjmMV3DffjaapZqYEu7uQNCZqzb2BwcQLgwUdvSYtgmwnXKrdmCJ9LtJBtdERFKv4aaR",
  "key14": "Qm8M1ygVnapLHF83j681GZ6hxZ6nNvdcEtvbUhdotHKKF8Jt9dgJ3P4vqL4ew8hcjuzb1VW59RSab9y8MB2NP9w",
  "key15": "4ehKfw7coCEjCynJvmm9QYBxEqzZV8wmy3JNeLEPBzWbegEBz2v2hma1pPv1Tq34pvNvRnKc9dd7aGRcvY3uQtnC",
  "key16": "2Tqg86gYWDCKZSZorSUy8Qh4XFhQyzUC5a6RYs2doZAtjx1j47nJQj3oYfEM3Pq7d2zttFMPoqNwYXqhjTRLbb1Y",
  "key17": "4jnk6JcFM5sFaKkPevg5jppsfxQAEqkvtkhEsKHSwmpWVZMy4AFoZAUv3EgZmiKnUzcP4xZSZbvhMoPXrR2oyxCw",
  "key18": "2XktZ2hZDC7xDcM357bKxFEFwX2vAvHyL6CjxCkg4E7SQ29rb8BQAKGYrq8kjE2ZHfu2xyuxQdBmPDQuHDdBBwvF",
  "key19": "fpyS6KC4R5bSQQKrL7CwpSjFPmPS3WzMPKFvvutuAPPJ3WuKdPe8MKorfqChJ7Ut8MSbFpAZzPtE9tHYJn72FSR",
  "key20": "5A2DHgQQaJgMmSETPPWr3J1EMtccPd2aRQSyxTqk3WYsCUf6krU6dPcCyegARhJgqnhavG7Km4N9dMjz2PmsmeMv",
  "key21": "55EZF8wM7oSRPBPA6cdXWKSVMccqTrc1UMe3piRTCqnx5umFPRBXP6Wdiomv75HarsU6P5o8ZWXe4dsUjCnVqeEd",
  "key22": "3i1Kpfh4d6bMj4SYHE74CtRWRL4DhQeW5PCjAefBQJ7Xoawf8HE3Mu2bu96MrC4bgg1NUJB93sJoWADt7Pka7m3n",
  "key23": "3CqkvpC3n12yQbfFTQe47dbGCtA2VgoybwrbCybvgdaQ7w7STTBouAzLY9BehgcqzNCnpLWjd2wacM8MLkkiYPMC",
  "key24": "4ySiP3ctx7Wu6VP7nyoPFmmGm9GsZBr8e9us9PPdJEtSWqovcXV81JohFgVc1vE3YZY47UFh3pzNcB1nYDCTeX13",
  "key25": "3AaBeg5GYuiJpoqzaVHVjCJfZijqSpqS9VJRJAsj6FrvBysSqJE7b3xsubtmEAuCHV7af52wy7VrJ3Kr9ZaNLYxR",
  "key26": "44jGFJUx9ii97DLRPkGgsUxh2grrDbrBaUvjwCxTmbS1sRFo9snz1NovzEyv28sFHwqFWK33NMqkW3poSGsfEdmC",
  "key27": "2rL6jSbEpTJYGYiezic2jeZKDoQ9nXtDHxJNGNDNpzvw3r6Ar82LiJ2AWen69QCMVRacMjyL6EYJGhDt3kUUqqbR",
  "key28": "3PMiCarm7tMHAy37CTR7bx8EEm1eqSG8D2SNpAwrkwnpEVpDPJdcaWtQFmW9QdmV4YBS1atR57KWnCXtBza85vZm",
  "key29": "5KTh9h9sxz4ps3vF9fDuoaxNjd9vKZgacTy9FeY9tLr75qG345rHmSgQa8zh1N3UTKu6AmchyGUSu3B2hs6Fb4rf",
  "key30": "4eCMCSHWuJPs9eegXPqBUYnYBCW57BoD7p8XFEUJtj2KiGkyFsRdZN4XLaevagT8X5xcyj8v1dXSZ3hyMPmU7nAN",
  "key31": "4L1dsAhkn7XPG39uqhPTnXygr7e6csojD42RDNio5rtXFv9m1aqpXFEQJgk3B6rrnaNynJxnsRMbgtK8pAMv1Z48",
  "key32": "hV7gKPZ7qbCAU7qQT4BcBbdMeFvQqgzdojKjKuS92wfiSgfiurD31dGMBXKtQWdkmGD9iyRq27bwg1knnGGgYnK",
  "key33": "oiWPAgTW7m4dptB3eXUX3jJSRMJsxVwJPMuw2k44tFhR8hj6K6i8mDA4ULQuLfRQBm6RQSxY4cVfP5TxPeRLXq6",
  "key34": "4qiCgGXN55UAGVkGbD3dBEayjfdu5uvkokBBTHVBAQScCMHfbNvUxyZQeVjo49jD5dkyah2t1eCEHe8wiQnmigH6",
  "key35": "MCbWnSN1cFHKBJmgEMZdMHNDDNN3LSfsbkUMYfj2fJk6vQxqDZLui4EaE7MpwWYNibowZJj7Xcu7Mr2CWmF1tUU",
  "key36": "3vC1y9W8dFiWaAeyLs47gZNi4UgduLa4D9J57uBNvwJbLaUJeii9DTapsxganiQjx1LTCvEtyMK49bBsaqUihaja",
  "key37": "4Uyvs3x3MYKxJLTFMeXqN1tLpn2urftjYr3rWHbH7rFZiMQe865Hg6HR42qX4c4FyQYxSXaW28ibzcZjKKrp9TJf",
  "key38": "Enwjfu9YtCBCqDDYLLAvqGXaSqk661S1wwNQmhcY5UJjc75DvpMJjrDpUhdKgZEAr2PTAzP9btBKqXzEee8359Q",
  "key39": "sd3V8fyemFBpr3An9vdgZstN6waijsXTzNUPgXZLsKdNtebLPqEk1EfhgojC75XKkNbRFabDz7MRktFB3w72too",
  "key40": "ig8k8r5VX4iYqU1onHFGfybGh4EgbnsAAhtdC9QX2HkvsSqDnwf1xhvbAeq2RrpNh7QaykCrS3i1w3Vjd34iacU",
  "key41": "o2QF91tAuPcZbGDbYiRyFCDkVRKRkxQAp4un2dCZYYe8TPsAxcjAhfnZ3zEXbfi91jzQKwxdEVjY8wC33Ro9qVu",
  "key42": "AqYyvYEdwe6zibw8Dir3qUiVwD15CH2j75DwZKsrXRwg598p24xcnwCWyzXHCAKktoWDRPTHWA6jiJq1rMrAa2L",
  "key43": "3247jYENrasSnWdm5K19A1N1ajEsE4agrGhvU1ezdZttEMpJNaxrDMh5qYWzmoGST8Jh4uuCBecJMDV7thUWiwBk",
  "key44": "k9vt9YkPC8ak5JXouaZdxbFQvaspVUNcD5GbNTUrpxBdTJt7zSmbkMVnpiwcPcr9VhfZDWJy6zK92Pd1xf3qTx5"
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

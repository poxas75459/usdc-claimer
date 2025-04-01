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
    "2Z7YerYXnsFWMQ7nfqzQSdZNYUC9Y3PZ1fTu14xSQrFB42xc5qdoWUKJFjgmNgJoNxB8vXzrRD2MT2mtfh3WFiD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BkVn9BgCMz49noerE64ngEBf88JSZnAbveSj378mH9dmUEr9bzRdAfzdJKHkYZNnzfEc84U7q88jpYrFtVDz1C",
  "key1": "CuS5xNa9jRP8rVT8NndKsScTPBVBNk9TjF6v9ACJzufBdTFyRSP29UDx6phwFH544bB85f1vVEux6xNVJPcbotr",
  "key2": "fEfTK7XmpfjFhKH7kjF2WhJLTePs9Xb9aAQGN7YWnbU1Y5c74ihsvpST5Q83J9MovbUo9gJvfKxGSfhxzPmt5Tz",
  "key3": "5rq1ZcSuHJpQZAyNgDydgWdAKec7qp1VcLGAJmeMLUaTdtUmUUkDQ9facsGEQuZ9rdCcLkkQVbfrD7fdWb4q2sn8",
  "key4": "2tRHBxFTyrn8hGKMghJgryD9SBrsWQ2NMhVJxSQKiXfFZLWn1NjgCrDX87QbiPgnQAfZwoxRWzWBkEuBAV8fC4NE",
  "key5": "2jevqeFDyQhYFaQWe9nMLdwEHCgzjMqCKEKuKtPjrxW79enVyuihdRMoBXSS5DrL9Ryo2e3bkMj7kuant7S6a45A",
  "key6": "oBh6bWdR465jeFeVETQRnVyiQEKWfa4LEtDyhGFzzn7fgA8fxqvHeathBgGXmCrHfUdjtvqY1YfGeBPDHrDBqPy",
  "key7": "5Ua913Rtre8YWbn2PuzgV17aCymBGYtq9Zpv1L9Jr6thUSp1HreSBYznKKQ7i6MdajQucqUemKjVkHNFa3jiWDUb",
  "key8": "2n8adbqhBXzmfAKzmHB5ryoqVWqiaipwa8JXYMM18DrW5Lz2K9quxCY5DMKvYA5frmkmXq8myDbbVb5HoMuCZGtp",
  "key9": "vNkfavPaJ4hBZsjnBtAKbYumbuy82hR9fPe9XAoJ7GSnbPj9Nu2H79DJD356LnUZgih21ih7qado5pFAUGEpjxN",
  "key10": "4qSGRqujYu57qmqGNEVr745XvkK9KRS2FaJjPnCVCBq95mmn8knmokWPf8mfwz59SWpz4MbvmTMWsnwgrDp1u6hV",
  "key11": "4AG3erMQWif1SszWUJry6RDRQ97gjsUQucTZBdAGLxvZ7BBsEHBCssSZ6ySpYDNejeAakZ1NNSw3hSfi8cwkAz3E",
  "key12": "n5FM4tQrnkE4t4epeUzYUcXWHzkAoDxctFDYLhLnsNmZ73rZspNdcJCUFj5pE2RmJyAe4cCwa1RF1AN9RefKLcP",
  "key13": "T3EMDwCMUk2AsDAaJGSD1eQTCKdaSeQmVwwuXRPSgX2vxSrqvYAZe7D5MTsapUeEJBBywf3Ci33Ue9CG7UuTYg6",
  "key14": "5UQ4KzuKhdTKwxEn8jovjUhPvLv1cQRAtedkALmZT4JTxKNAWKVSc2WVstrKZ7pfB6oVdsosSszJW5x8W4vXdrsi",
  "key15": "3nCHe3VfbU7ShvCMgRqytiTGXX2UXTC6rPARvnUSMfDbCWDZkYNUcF39ySDj91w1ozcrmVGF4c47Jx8cVLBfGihP",
  "key16": "5NPcZJcxrmrPF1PXxQAteUkxvzbWkv9pw4DhRVZ4SmtrV4cgwc4qN833bCEZeacWpMcnHZ1LHSfJfLzKVqAiX3i7",
  "key17": "MSwdEaJgH1zbzxQKwpjzsZNXnP6M8ARYibfpYg15f1EQxbdgcL7dnAnKRMASCgmbb7RMK4Kj4dpCWtJdDgKvrbq",
  "key18": "2bvRvRt2neCbzQBBM4ZpCRpyD8Uyke87qEih22H4sq8jXg7gSn7ResH5Qe5tMWmtt912SPBN4k2FPTKAVhTTwWxH",
  "key19": "4neF3tQg1ysjDknUrE33QUXmCcKhUodpPBrxozRRZGa2ZXJ2ojD56n9R8vfc3AYwzBJvVeaxcczqSuXo1NVyRbXR",
  "key20": "5t8BMu4LYJnPzZq9t7LeC5NQY8hWZEFncM8rVZhaXFdULqaSWVzB75sgRtMYUgz4v19ZYUYRhNR4QrUd2vRULtBu",
  "key21": "5Xw9BVGaXF8pXSrXkPcopUGg6hbcg31tqQsTwDVHuTNNnRQp5ayBTgadLKUvyNAV1Sgvf76oKCmnA3yfaT1v5rBm",
  "key22": "3GZo4xqP3E3awWLq7zaG83dBdExQt5WypTRSmkSbry3EX9i7ap5weFji28oavVUTQEijrcuiJg96LuWxVpD5euCT",
  "key23": "4QaJBA7BcPqVSuz5tfgSX6pdn27hMzHWJs98A2Pc8YftjC6JCMBqSpC6mR5shELikRV4TXcZRD7y7wSj2LBQm8X5",
  "key24": "4T8tLTXbjuaUDvA2HhNzhk3YMSnZZ3HMyf5kfhx3Q5vUF7Psx9bWNvjwFJPxryDhPkx3VfwmesXTBJ8xpjwx9ohg",
  "key25": "2pKxBMjZncWtdZ1xYuqJwzrPZjoWV3FKfBuQWUKYxYK8VbSEE3Cngg4PNE1F2pnpKmNZaB3AN5rbYqhNEVDfEHYL",
  "key26": "5xhkFu9RZE3K8X6Fjkv27fzY6egq77s3kAVUsfzeTdTY8v9cywk9hpmuKZb6fkZQyYTNp1vYnQUp4VzC5ZitwEF1",
  "key27": "2Nt2yaFLCrw5uhJdYYfyey2vzNXb96rHAMK28QC8zzLZp1qxekovFKmmmi62ALLYxBXJJ4nDfdJVj25Ns5FMqh8d",
  "key28": "4fadgqw8cfB9MPV6YZmsFwaBHCXsPhxbDzxVQFdmLYNuxdPkpm6b9htvBQyZv4bWT4uzidL3Fo7y7XJNkq6irPGh",
  "key29": "2YKPdz6E3gbGGgCNmXiYRZDyeUiEJNw7k4Cv9vMdDwLQ3oa7z5t9gBjmxUk7NT9WUGJK4ACTXxECvuMtqdXJYKEg",
  "key30": "T5mpqZear5tm3Xtc5oPgbrMgT2nWJn5oVxsKfVQ7NzQ6rjKC1zxJ7Y4YWSEqxwg11A3yyVAsScUN1NYvFDToSC2",
  "key31": "2bwyZovtHKyCp5C6t63G9hWqSmRK9SkpGdTncRkKkXtMVAsfU7frNApiry9SiaWqfkPoudVZsGpxXejDo4LXMU7z",
  "key32": "3Xj95tcVsbJsK2XkdG8ZYJma68cU5P6kKbvwWqeRFXC3hXeCJFwuY7hCWSZ9BeQmNShn6iRRBcwGeiiAmfSRf9iQ",
  "key33": "farCp4cu6rNb4b4fbvfo1BmsY3LeTNpYhTaL9k7WvkHsEp8ecJ2ztaazvewP2cMGU75zTdCnpmVhPRAkhps9FFD",
  "key34": "2nFTPMwqV8vSoaezSXKhVJNKRXtYvPbmd6RBhoYUGd2arYT3y3iPcYXPm5WpJAKwrzKKi4VYPoCELoTTzuZo5BjW",
  "key35": "2JAe7W5sSKd7kNhjYkKrj8cv8Azt6E9a91zHtrctQt7AGatvqG3oTqabm2gqU2de7sHgHemPQGzVSU5mEu31eHG2",
  "key36": "qDgj715t33sRytnbu1pS3v63rsfiU6d5ovmoPtDKJMJkU4zAn4MFdfnSkVHsaWozxNYJ8sMrdHs3DDF1Ct5FVfQ",
  "key37": "4VJSSBKFch3X828Fg3o5me8keKmdD2zJaaBHcVQ6Q2me7ReLVnBD3tcBzf9LLL45GYfY5AiNaFqCMGU3Pxksv9zR",
  "key38": "4zXHPhsDxUmAx13RBuVrKrbPRQwePeF8dhComLS2Hw1Q319HxobVvTDYjW3Agq5ZPZqSKMzsVo5Hi3PK1icpwPKR",
  "key39": "HHaJrD9ZM8XgwKdN4Tm2eRc831Zwrd1ZD8rNra7devtynMajvxMgbPL4XVieRzmcLFYDfEuLLn1SzYnd1HECXSN",
  "key40": "5AT1644WbHhwZezwRWCeTPGxX6Cb23oQT9z8mtoQTugnrFBrtGrhnhWjHZRv2PBeWqHSFm1MPWFtQWYc8hWfRYJB",
  "key41": "47ab8GhNSCgh7yKfWzhcWC7ofrZnYgZEpuZaxkiooSRVRbdnLEE48DL5CwRFvZRVVKGZG1mRUvhnHDGSbFBFLgw9",
  "key42": "34JRncCNEMe13Gsycdusd3qVTuhiKS6vmVLea12hgGLLJHafwqv2TEzx6KTNCijLW6RbnuAQAVsW8iwQU5acucq3",
  "key43": "5xPJAuMVzyNvwzHVRVNoGdHKcw4ATywRcU8QG1675mxUpiC8Gahw568x9DeLG8ibCmi8Z9EGzydmdinTM8Hb7MkD",
  "key44": "4mSBEVGLDNtkpCq4eipbfrB1uAEogT76FZGXTwHY4LMey9WdsqLLD1zkqsdhHUEgezj6ySZitneDWDjTiyywwLKi",
  "key45": "4XtL4ZRYtDuBuHira2M4aicKSntexrBPFkr5UoMqhVSkkdtj4JDGTTiNa9LzGV2T9tDXtxYwd4gnM5ubf8jqr6FS",
  "key46": "38c241g94z3ANSFT9ARv2tppeAKKTA72Bjx8oc5s3MBkjJJs7v4nFVQnqpXbZJW9jvja2dM5PkQ11w6XKmtJtkXS",
  "key47": "5rY6dVfPYASQtU9dHvNgKQzHkpqAMk2ERaatZXhDBDcTm5oynNx7PJKJDyHMfTVH4hQbz5yJVn4yLQCYvfGacrv9",
  "key48": "CTdVb1QSizSfiQ7xLfjuccgKXqhauqZjGTxsWb3KGyQQM3VhTPDtDvYHGvPnFMhagurrrQ5dNrWCJQePDDrghet",
  "key49": "3NKX7NRRDHTRH5s1A7Bd1CLhPzh5G5eFd8kWamCxTeYf5F4fFoQhbYDobMeEai4tSurwnGwTapjJqyKqbNvW7Kdk"
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

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
    "5zPgCi7meGin79P7tHqXmziX1riNwY2UWP4jn4r5cHQTUMNbMAxiPhwrWuWZian9kbjaSRe1s5hEwwVPBAsz2Nyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRuDDmEr8Gqj3thtA79FLRb6ddgStwpUfqmW8Aiamqcqty8TomKFMGagKF4JfagxMRFKjv6tPgLjghz5cpydohy",
  "key1": "36oMTY2UmjWb9tDP9HTR42qHgk58znV9ckzEKcCeWZUSLTV8QWTRg27pNNdNQaiFNyxTPoYhSfC7ZbAQxqNpgVWQ",
  "key2": "5jNXAw3V1uy7y4vJ8Vpq36Az1rjRfQAs9QXJmrmBeoNDf8FtyRGkSjcAPT6u5rdVgXhQ65HAFhZ1LeyqJmHQ292R",
  "key3": "Q6qefRRVMiHujqnF1FPWYB8QN2eJVXvbccvZp67ekHR6FDvooYvdVaPT8wPzKwjmvjXQXoHHQ757db8M9pAp8ja",
  "key4": "iSS5j5rbgreRx6sto1R2uuMfZrvEVqdmqp2919WX7qfwFe5acJq8JbnERqABqTktYAAb5eY4mxGqMRSGStcJ19M",
  "key5": "5gu54F6M83VJha3iG3yTavy9qy8gzDHUBnDZrwwmw15pQ1cAtkmj1HKCV4PhHJQGgVxRZUaEDKopFMZPNQc8mDC7",
  "key6": "4xUeaCoLnknrCGiTQhfRuhegVJszHjwvMSkmYKhT4nUxcrzrbeUwU35hbA5CKcsxjoktGy3S9AYbjNY5evuirfNS",
  "key7": "5K4zevbrMPvacxqcU8x8MdTTbQavQsmVVQRfdTG8os98gpp51DPvuNnvWU87tWyuXYpzpztXRu6a3gDVBwimRrAa",
  "key8": "sKhaDas1Efhxo3K8VNKJUHVi6Nyks9so6SMq9LD5msj9MFeRBp4FaMRSNb9o1dk19GL8uweUZewgR6yceKJisVH",
  "key9": "4dfWcgyZvuRUhyCJa9D4CxFqiTfooUfBfiNnw46zK9D6Mhr4EyU6anx8uZiys55JjmaJDswGAk1wVjpJdYKsvhrv",
  "key10": "phxjKKobSQHb2M83KRCLJx7p3QKDbCqTsAEaakUf32KnXkT52f2fJ9LUu14DkKEaQY8SRtirH5bQyJ76Sg9WNMD",
  "key11": "4YRuydTbLDkuBodzqhaebDkDUMoShY1rgR3MoPZN4DiA9ax6KjXsSSs2U9W7uRLTe4qWEkHzCbB7CCXbHgwqCJ3Q",
  "key12": "16dYWyV2Drhh5ZXdk3zCNSPCCEPWBMKmc7DHBCgUdKPKUAfLcYqHNPhMisRiw6t558GtVxPoKkFE4aF7AJ4EENw",
  "key13": "3MS26qfvmcUdWaUeCGfMeVE3vqMW8PCjmUqizxr5apY3sAy22pmXNta8EXtDKuqwxdtCofuR6NvVyqVm73SfWhbo",
  "key14": "3aDt4b4wQvaF9T7zC7rp412yZbxxpagoWid1MaV1ymLQ2BjPQGYJNFtbNbqrSASoyqc1sdEVEX5TmHYVZzrnAxUz",
  "key15": "4jmRpmriEGec4gEyDRdT5cjLqHeUQuhvAWV8aCS1taLguDzapxciMAr7iBPJajS1HuNzRCd6jiEjhS1Tp3vfQptp",
  "key16": "4XLtoyDNiEnMBQxbcKLUKsj3F3j6pbL4sCaTc53tkPW3RLPVHzqUpsBowkGo4NjaQGeUvD8B8BfojhPr1o8Y3WV4",
  "key17": "5r8nJT4TovZLu3cEPSLXKHKsmwUarJxcxfcwEP2iQR3J6oc4rKkEvGQEtcn5C56UTrjvFpXYombGNUQBzbSAWzAT",
  "key18": "4TJo3gPFXNRYmjUj6kmmphimZfpnNW5cCKX8sZQjvyHSzFRkHZ1W44NbP2CzMZPBZh4e6ZYmDT6BhVRnmYdn9aXY",
  "key19": "ENPQhsmrTxZXW91mdxngYhE9pKnuX7Dm73xvTdJURfThaKNjRVwCRtKQrXtLUF79ZewxVMgkmQjqKK8wNC4QX9J",
  "key20": "24uBQSk55NtxiG5RZMgn9Ky9SGRgsx4vmsxrBoC5QkgViVAEHTUHDxNDLf4JsvERnhNuFsxR1sa3ne3DGoGP5DWo",
  "key21": "2ED6n6QrJqJnQZyPjbfbZnPJr6DqfNFVdHvpA5cYAwsqT25w9QGP8bfdUdfnV98UAoLgf5tCHg47ATS5MZwuy6SE",
  "key22": "2gbXGaC6tCw3oKppzaAM7FBQwZhgES7jCxsuVRBU3mJJYX5JAJQy8TRpuZt1wJjG7ZrpVbi4kunpziUxRz29xX1o",
  "key23": "3ZdeJgzd63f7TLQr4QSjkgkj8xuardpv1ok5RZjTUFG4e1eVUD1ua14XMiuQmbQZgyjXtGATiAzTFyhj3PUciPCA",
  "key24": "48nhjV9mLGWK6CVr27HUMgADUEZNZKxQ6fwvW6p2ZTzdg3YUDf7xeERhffvEABzKdBLvhzHQHtDHaXpEjLjN2t12",
  "key25": "3SkrnGogyeRLd1hqfV7juh8ZE2JoSDC2WxMAbwv37iTzwqWc7zrUZMGyK8T7k1NbKujxrGM7bLjTUtnQDoaLGAU8",
  "key26": "2THFBhcAkqMPyGKvB8m9PgD6E9uoYXBLBjHCvUyJTMKFWe4gCyN4i7xHPoMjfgtrfYjdBs44M3UPp7qqieJNs9d6",
  "key27": "5e68Gtxfxx4N6oE91FcFn5LgyCRJMT1hFZ8i4hAU5SCyNVbrHGz2L1vvu8UzxcuQEgidXRrdnrRzhJBaE6ep6kxt",
  "key28": "3jJUXyrCxFMxkcBE78WJY8kVQAfFbyAA2y2Df1tgaMHY2rkdzpdgjdW9PgB6YbvzBCBCAzwuJGExG5LnT7CjtMJX",
  "key29": "2CaqeHHda8Hbvae9ZbcXdo6mcw1EUNu3aZy4Rqp9cez3HsHWXr41cKjvccYCrXQ2wxkyFBd1Zoh1KvWhervu2TCo",
  "key30": "3F4YC5Amw3W24d1NSqSn2xkpVDV6d8jDeYPL8sQsoH5NGchAzb6go5HLZ2zhJSSwVyhEWeeHrdcv3j8N37BWxHex",
  "key31": "5BqFQyp6ZV7ndUbLaLUsGR2gHsRxQ23bXta2VXq6FLKRb9XmYC1NcsayqBprvCF9idDm5QwJawSTZ7cN2m2fN2R7",
  "key32": "ZDoxDHMbrgmATCYdj2Xq4iWe1Y1FH3iXksaEs6ms44ZDVPckMQKGecB59EUH7FBWzL6QsGwHv2DnPZFuVLZYGSm",
  "key33": "3BEKvWvusXSCUVVeFvYJgoQ4DWC24mBhZwPHpsqyH9eRTu5rb6rhpyE5Gwj5d4ZPoDKdyj3aiaEss9Enco2TkULd",
  "key34": "qn9uyKCp4X2rhnpPz3uw8h1svm32JFf3H3v3jmjGJV6pFbw2ERRiasnLVhEmbaraTfnyH5wbSZbAh1bcSDyvkhC",
  "key35": "23q31yaJsLq48hq2ihxgsWoPjUzja1cubQuXq3qsv4e6AVrfyoqbaoTnNynY1ozuj2mybuReTJ3a59Zk8TwTs3MB",
  "key36": "3TmWtvP8Dp53m5ukVGvekob7PKH4pXKzr8mFTWG6QiyTFx1QKxPKMUevYAwTkLcmgVro9YnA4997twYyXaiTPfMw",
  "key37": "4K3StSZ4yq1qmnm6iRySPvGG64jGEJaAKi1mVTRWqFRZUwHCb8wj4aM8cybwTwB4y3cyCwBE81G2aScstYtPoYFP",
  "key38": "26g2u2nuJ9UgWinAWWGZa9z52JW26wNUq6gxAEHzL9PUwKat9ATSvxHTxBKV9REG1zsUaom91jf2LuSKsUXdBKBd",
  "key39": "52moVnLuqaDTqwz8qTwkD6RuhTZRS7JdV1NUiNDwYUR4DT1mZRavuucFBLQCAiUMXj6JDN6BYSRRzLCh7SzcV3VB",
  "key40": "prtubSPB3PND5adbwZDVFpFfMbKwhQ3FdA2mESCeBprRMETkiaUyiL3gbKcHqrCGdtHqCrcJNkmhrVceRk5iLTZ",
  "key41": "5gsA79nv1sc7SGkzfndsWhxAEPLXxSp6ffijGoxY7a6Q9YqtVChfk3gUogChzKeRag9pyf6v7XvdjW9qyqp8oMo1",
  "key42": "5PxqTa5SrjcsutbcWdBKMnA9oeSzGz9KwNF3JMHcqCkwiSSWQ1sa7sRN4yQV9Kt3YTagL9W6vPhnrof7kbUfEAN4",
  "key43": "kbQWp9hiKZDLTipH4LDWBZMUqKNvnhN6di9YVn8oJFZmFGAYbUhWZQwrej8bHbgks9K96USBVyHqnErtT1xZAMa",
  "key44": "21gqHmNkTctYKMLoTtrRAoxNiEofS4ioRDyLxZFWzNMhTjMCwhQzvDBdnvLJt3yNw3Ww5oXs2wQaqE2qRoJJTW1N",
  "key45": "4kVDqP5wgbMEdNgAV33KEQbPyRNa6bRgwn23fT2dGUK1kq6rE6vWEiwDxijDwH3DswLvsCsR9oJE8p9NEPUaZs3v"
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

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
    "NrorJLj2UZQ66UkwMYT3PZdSZQcDEQvaHZNfw3nRTmFKAmDxeQw8zNnfCWHyrTJbmSYYe1odjpwgR1rPSjPSQQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHgzpPW5VY7JSkE93gvoyaLwN2wG7i7mv5jDNe1B6FUEPCMthHD7b27XnxZUaCVWrZXDLYHuLrwC5Fw28SLqrPg",
  "key1": "qsEBx31azDLi7EGsQwKGt7ZfRPcHwywZSVuFn17XiAuNJhZXbLqfeHifKptMvwZvbVEPvyxDmE6Gh2NzdmCJj48",
  "key2": "TWBq2kPcvvgfWV39qz1Vm95d6L5NN3pMJj8SZodFTGSc7wsv1TxUFPQk3KdhnR9ZtKrXLDkDFn3mjkJk4CF6P9w",
  "key3": "3YFPkwiHwkLQwoBmhcfQTrtdUVxApZ1o9xCjTcTs5bdvu4FGWmLnYTxAefnYp66WQcFjJsQoN6BFDDRZmB9wYH3M",
  "key4": "5nuuzqaYKkWzqfKxmBbLryz8L1f8YgmXzT7BbCpAzSDt2qJePdvr2ygBhhegGbXNqmoS5QquegxyycbxZgSQ7SZJ",
  "key5": "3qvcy4YcSa6zifSwsKATqouCzBSYnMee7hH5v31eYN3BhJ2kRW5v8DpsQBeq6FJTPBMnRMNkaKgFhL8uoKovBKpf",
  "key6": "3vnxqYeJm1qm1UYgTUFnS7q4jSzUWPNFRxWGNZ9tpuzh9NpeitH8ZrtNYPqdGvPeBPR9t2kMdrSkJjuWUqyJn5mS",
  "key7": "WiJXmi66cnJ3uRF3QVtqyQ8ELmAZMbwLzcaUfuAogm77ZHEB42wgkCtwXJHkE1v8f669DRz2CXDzzwCXbjQhsw7",
  "key8": "2AwCbYN2zQVxkJizvD4vS8huRAdijdtYxt53mdczymUiNJYDEHSbaWE5dsarqwzxmEvqPp7uvxn1kiR53YwtUfNc",
  "key9": "5TBMBhGWwpgE515joC5tQoh4FvTYKHNVXcSUHFojx9MbUPar8oKz593w4Xm8vw3YWi2h4JKfsAfgiWEoDUbHifzs",
  "key10": "voEFaBPYiPzr8ZYEzSYgHb6cWsy6SupkBupG9EFeFtm8PMrtKmptPHzEUruFGADL7f5hKbbero1k9FhT74tXsNk",
  "key11": "58UUXFDkRUuAsvCSm1XBVxqZdrVx7XM6dcUbBrn7m7KZe8grzZikgu1WDBajZRG9x14eVq2kYXnhRQk41b1G2yJb",
  "key12": "2JgTk6paDxdKAMW66rLAY5uHDpLFCLrkc9MhsCGaWA4WN7dWBmjb133vj2mATXgGDEwZCvbPUdMbxh5F9GqWd1hj",
  "key13": "5S8REN1aHW3uyPnMxRqaqLey3QHuYepW7fZFCamzrZaKfUuNzp34YDxebDptsbvPgkEGnG9EKFWDg2bncmB4Zv1",
  "key14": "4X9mjfjUwoerbu31KXQVeWQbCSkiQYXtTXQuAu3WNMBNqY6jbQza2ozvW9A1VUW7FToKjHieBUBUVnkauDAZJ8ra",
  "key15": "3JDpCwtHVqwrdeXC7z3H5WdgfBjFbhxwFW3Rzk8mc1HFJqLxy3RbHhkzevdQvKVVHnQYGkwJvuhj7iFpHUHdYEog",
  "key16": "2fhzHk7V8b37xwoan1F9h8cqjiYBPh1Xum5L2ZUDiNy4NjHoMdZYEuz5Rj2HqdYoNwdKGuzD2jLG3LGHdMHKCWfA",
  "key17": "3vQ6o9nynRZcnRBfPY7wLrwfwEkXTTjv2ei6ohDWdAo7wc6c31ybbBo1XmW4h1UKNA8fHKivoRV6R1DjGMpJxEpW",
  "key18": "4SUZyiktrrdXYH2SeX9v9jGnUhkmfmySGe4ATwjF3gmuHoun7ovLVbvJatJNtSi5YSzHaifjDQJPNRbQwJHDBi8o",
  "key19": "4TKgjrJ3svSWUD9Spy9hHMaMsQYPQEmW9FoxmeNMK276mwfSF5tVPfWrLpUiYgZiXTCBqWFctvgjRAohZB87tKX",
  "key20": "jBSthebdr1HLVWVdoCjd5whL4h34dS1GJYw878h7BrZMbzTWWSLunU7PCV71bULn4TXNwgdiQxprGh9cYBzFi27",
  "key21": "eqsZv9JSjWLKSy71PWyh5fUfWsbiWTBWemfSjic1tiwP3E7zaPp1RUzRKuugR3499e1GrB1SHcrSHHNZfY9Y6kq",
  "key22": "uqxvK93N7zryyXAkX4nzh9QiCjPcjBVVGzqgZAdLwpQn14hoHFouHazMqdTeyve17oZi14QQ3EXK5sGMTgoQxmg",
  "key23": "3iFiztd9jzTCokUUn3ZD84D5PtCJA4qjid8EeJcdcMAaRQsw6b7p7nR4dz8KeS8TgAijPVzDcafkY3PHh4Gh1cjN",
  "key24": "4nZCpJy3HyrhHDn1ws7A8C19JyzHSH46qTLudPNbsSznwmM3V5qrZGn6fWPz9a8nvxuwtuocJUGrq6MSBRqBCVQQ",
  "key25": "5aSAVd5wgiuxW7eg76YnBpLf7UdoRVV4x495moVFDXGBuSUgEqPNCA5tdzfKLf7v3WFTRv7YQLsJKgBSHJ49i8cL",
  "key26": "3VPhG9eRs3BqsnMzCoq5rqcAqptHo1PRcMGxbi4RhR7caNbqfExb7kEWreVMo6npR1zuzySgbDPSaKtBcT1QWe4J",
  "key27": "3P51N2LTPpny6bbDe5PZ4exbXHwJh2pVmdG16s7LqF7YGLHXoKd1H7Ci2a8j77vPwCucPmbSxquhqpZFEK9KoGRR",
  "key28": "65ExikPMJ33EjagabyrbPPnk3RA6NAYb3esWsP6WaE4FJPU79w7RRU6EAeCGMsyQEqYNDuWhw9bXWJwxbmvek3UR",
  "key29": "qwpt8opWmsSo4Mz4seftR792GhhAHsKCPW9eWZcc63NfFaJGgTiaoHkHU3uUxXeGgySsGsAPtxeiqDNZ19jf6i1",
  "key30": "3i9zunAcHjHwP46gNtMpzvsN7Soehc4ffDvJcyP52HnpghCn5Lgft6FF1ZJWSiD2RCwcZocdLxgE2FhL7aNgLZd8",
  "key31": "3c6gq3DiW9a3DKx2GV6jwFZGBLGiicp5Lgt31ihqcJTqYUvtJSuC8vRMeba9C1YNVeKLdh1ijUGPp3T1PBRUQsTc",
  "key32": "34x2wnHxtLV8y1JUP1gtTcoMA4JwobPqXDJPZaoAauNV6d8NbCeg7zw8Gvn69ehNhLnmitzdACRXjwsYqgvJoJy5",
  "key33": "2Jk4z9FT1wub3nFqaA2zVpo8rQdhHWoeZmMtuZk5TqbchG5tkCrG5dV4RViex2Z8GM3KtD1Y5pcHBjPXiMrfcR1x",
  "key34": "3jqZSpekxo2nzDy1xuZQicxNcKSTkuGuMeiqYshwvx5WQNRFDti4mbkDZBX9ZoDT8Er5eiPEUJnj3gxqZangGkGA",
  "key35": "3AFFBHq3yMHHepwKV8bdeuDNomuRF9sHJf6gzx4piiF7ySkkiFkaKSf3PDjS7VKrs2EgRYP1gJDZyJRcvnFjdf7D",
  "key36": "5P4S34ztifnZ2xH5eh7EC3SLwsgy8mEizQWvis2Yksxop1ggT1dP7sBpeL5NukougXkUKBmuh9xDbDgn2rof2zkF",
  "key37": "6Usovi16H5JJzxAFDMxMVqZL75NcdbLhQMjkrbDYB4YUX5GGwYM5EMbjnGRbVsBSrWes3vYYyjGhQbHhmLdxFnu",
  "key38": "5CvDv5efLS1khuRxUG2EYXpmHMJoboy82bpn7vCu6YzYZNoWA717G4SHU1KxD6aF1bCcARGsjUZMay6reuBMQwi1",
  "key39": "3agsiqKYgibCTzkMs5s69sVZjuYy8KRp3tW4kYWErM2hLDHeA2FPm8xdyDi8ztBjoqPLh4F9Gt7VXymbbFpBpCrw",
  "key40": "4eX2fMxnHxdtxwpWEEN9cULXzJbXCXcuPXMEAmNYezJQPGegNA5rvm4rghygQ267MHrtKKoa81s53d61gu35hGbc",
  "key41": "2ws8Lj82hqV1NE9Eu3NaYAnCVpXuejAna9rug73CzegARrzKaKTq3TdcLGmmnRRFn1GB7mAHfLoTVhUp1hj923Jq",
  "key42": "FJgeXDp1T8GG7WptAifb76yyVR1TDRsiEyqndtqz8B6Yqi8348ECjr8Ueft9c1Nt5rAB6m3wAWFZNDbXMRjhN99",
  "key43": "2sF7KGj4M3jtqa97bfNH4w3BxpSpiDPUyN67RuiY7ktmMWXycs7zV2D7b6dqTsyG3ZvYxa7VmaUwz5whWfZLav5G",
  "key44": "3HVVy3Y3F3RLy4vMR4bv8BMpLLKmVSggXCnZokZbTDm7My5sRtxHs134kKXxmC44oRnvCMifX78dYw3vstgheGDY",
  "key45": "4zG1RHZ2JZcbXtYnPWQDSDyvESG4cnyqRBRwLDT6puB8KdKfEvMSaBZvkN45CYW4wzUP3noJx4NvE1Y1JwiujBrc",
  "key46": "5PJoSrDLBmNiXowYX6Fcp3UGvACWTKCeDorkuHBCvmdKUxSNnG452owg2Pzw35Hd9R9nd4McybYGfTJJSHETrdqn",
  "key47": "5H6eije1Xbq5QbSC3A3tjPeDicC2iLjVTUuFjpyx6zxN5D18nWiwMWVs1zqf3YsQvhcWwk3NpozvGwheGKhZFFae",
  "key48": "5WfCCzYnuLXHCE9Y3AGfGJDYm6CZujCuqqUssUpyMp9C6nX5Qqef7CMfC7rUH8yQYCoA3CnUr6pTRC7N2vNh8Xk9"
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

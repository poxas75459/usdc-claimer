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
    "4fDzLAhgPreKNCzxTELjmJDZK3kgmxiFep9gqxEaSHzzz6NhcFg8UUhXdW1Hr5XrK3WfR9HLKDjEsjcSyugiqLi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4ymaaGE71K7kmd9pKfp28nrNt5GjdaX7Z1hxrN6XehKxtqPHjeQtpUySofsD28fRDpTH6CgyRmBoMrCCy4duad",
  "key1": "3vsYSxKLbcPQ7AGUcEfsxhb6RJD5NFj7khYtwThi77Ep15AdndNshS2ZiqRPRSGcghLXAXnDTJkjdn1Wbz8zUYyn",
  "key2": "3uGs9aYY2Gpe6tqei9XaTq9PmYFsYaLYW3iocW8qcW9Am73yopqLodkA3Cbh6zjqce3QWJKJ27x7eMmvQXGfYgwv",
  "key3": "5fbzKQSdzhgNaJVBAyAxYnftqtPuVzfZ2WVAKtA16StMzV5aQmr5LpMEC2BhnccLY49z32NAfnGhkKT5B5gW9bfw",
  "key4": "5wNP2hbCNcp3KSj4FS141b72v1poLn8mWm1JfN7TccK9pmfF6cwYSJziPiFEmXgrZjAe5WC3RGXRVVNCB5iLHSJa",
  "key5": "2eBniE22UnL2PaTcDGQWYS6VXAs1toUvdM3Fy7t8fDKYaWtwoX1WMoX3acTL754jzpGaVJtemfH2WKfvX8ajRZEy",
  "key6": "R3aDaHULx7QCZ7dDqhEfkZbU1UmFjZvyUvGUEUSsnBMneGorVGmjfWyX99VNKy8Y3YG9Jsv7y2aJsBfMeErsurA",
  "key7": "53UuphfPS25c1r5WT8MeSwchKyBu2qFqB4jt9ztv16n1FfGQKbDxJLRqNbFToM9KKoP3mEQHzfjFzavbz6LokFMp",
  "key8": "3ipNLLmmRWMe6dZztPs2VGnj91eHcUsGGrwv2qMga9fKHKWAuVnsvR9gVaoBfJAcTJPzC2c8SqitLAayQFswx14j",
  "key9": "38Qo6JMATrYer27xMD71v5QFvyw3wg3oN8q8bufajFMc2yyg4sMFxriuhzaiHQD9ctXqjJyYfoT4TwBowmTvyAw5",
  "key10": "2QFXZtAjepXu8ESPBP4ReVLuf42EQMKUrG5JCH7Dtu4RbB3kgwiEs9hNLBxabzhj6fBSerFEqsmpr1a3CawHbzzL",
  "key11": "3FryLkDyojZnbTChwX1aDDmXsACz5jUAa8y3y9fUbVbg1YBPfUh2aaPoPchz4EyNztvsv3TqCy6YnyY5NEq7msCh",
  "key12": "5PkeX4ymQsXmxk8cidqoZURGDkUNvnbh69nfNpF8miRbC75DyzvCQJU81ztvFqx6WAjLvu9tJnv3u6zxjhC1o8Jz",
  "key13": "3VmqppANUqJiVt75jzhpx9xpLD7V1VZ73AMkGSb4cPtmcf89cU67GT986yeSretYWdmF7FvC9B6cnYvhwQU5D1a7",
  "key14": "4reoMksL2LMYoGNZPknLzP3S5JKxkpNuFJUjLcNcFJDTse7qgxk9yRo9AfLdo7FhTZhozLSiCp6dTcCm2tXAy9GC",
  "key15": "5Xu7Qx4K7htXuV1iWyrkpWoZFoEN4BuJT7AjSkwkEPCA2c9Wc6FMpw89cWnwG1GPCxyGodfaebWMt2m2TFFiquay",
  "key16": "L326U2ivC3rgoPcKT93XnKm5VmV6Jm7t1zMXCjLdfiMzMMJgjVLsM8qRvPo8AJVjQEAbiPNRrr6hHBELC5nnHKs",
  "key17": "4bJhjQLWPgDHMma9jZdW9a8jWvQAsS9RQ6Tg4eYmnXFxLEpx3DBJbBdkT4gVwneVGmWnnVQkyJParMEY2ThnpZZU",
  "key18": "2RB43WfMrg9HnE556iA7Mrk4LPYVGnmfd5PNWNvM7rc1RvL34uQUBpHSEKR1gw6wo3QmfHJzQF95VhqDT2nWGT1f",
  "key19": "2LQRhG5ZR6dscZvimmc4Bh2wuKYsBLAeU7hb3GUj29ZUqHs9EhvtDTaZatT2uEr9FiXiqr4WTddR8zftE1MMJUyq",
  "key20": "5vUAxLqvSAbMgATYA36gopNXpffEwTLk4C9RQ5dpoQtGgxFeTq4MjUFhdoiaNZFS2CK1rv4kr95VtdNgkE2P1aNW",
  "key21": "vJkU1b7vT2Bjf7we1CkJsoBCmKUpLfsWAAnRB9xe6TwKqc2ayCnHymjYjFix31DwjWCHT4WNu7KzE9DJr7N4gqr",
  "key22": "4DXQTNRz2rWudSdTMwEUf4sFMLxKyKNTdVFgeAYnep6EqE8sgX5yQ3TUW9U2MAT9ua168JtcRNwifLfZMqgveN6e",
  "key23": "kM9noBuqG64WuES1N7n4fS9bjDuzLTCQhJQn34weKtr9cVoFvgLkKLcyLiQMRoYv6gyBJXK5kn8psGS1AiPDWMS",
  "key24": "3rDdNrT1Gk1Vnpyai4etD8Q3D15QZ7RzHqHcMQtegbbVTmEbemYbeioGahDtiNdQTwWEipFKN59k1xHBHCzSK3rg",
  "key25": "pA2WQeeAaR3P4BFmxo2iLMiZBCsJxdxLKQnANyWHqqyYHgLu638LxKkoiCWK5H7yqTzUbNHjJMoCNvEuDeofLkW",
  "key26": "4LnR3hPNprcZEbFhzUirpjdUnLpnvahUp2tthfZhJVgrudT8e2Tvvp4WH1x7ekvAyAKbTDtpAR2LkS4LLj3HTYMe",
  "key27": "2fCMmbu8tZxEPAh6JKNca8BANvUXr9NtsczrEWk1DZz1NSfq5zem8uyjUQERt2Y7suTZRBhpPgwVZ12WBXtm4wuW",
  "key28": "2JPeKimMkMhXDWRcLJfsSfvuz2XuydSprgbWhxHsTnYXWGdhvxZ72HkRwdmcgEPejQtjEcJqX5fVLMpSPRa6RZRK",
  "key29": "23mAKJ9DGMYfRmTwLd132tS17S5ems27KaohcqVGbiBoQCs669ju9tp6b1TKetWT9ESyVYjCvLbfWo2zd6V6ai2W",
  "key30": "5xfPgJRpSbVGB4hkz34u4uQm8TMMyfhNAqaku9LCq6LVWaHWP2GiUWSdRfXeBoFk1hfwiQzjMmP8G2jdZwtYEADf",
  "key31": "5byikbyG6CRKzpJrrv8ofky2npthuPKWCof7i5AdpRZKyHEfrNdWnc9wKPw8nodNgEKdB2nq6PJYm86Sux8RRYbw",
  "key32": "5zAUcvgxfgUjhGynGCcKqwiouA4jVXcFUVUY3DPakXbV2X8fHdXdW12uZ3ftRv4bqLpWE7j2uqDdU8aDa7KoQ4Nb",
  "key33": "5FpKEuApEVDFunqByr3cCzoLYD4xEABED6aJaEooaRSWRJSZkYxd9cyBJp2dq5b1E37WhkK3eZYRNzwhVpGq8THw",
  "key34": "5mJzDuevCKBDQAKxv2eUGYSboknybNGsgtk6wXn8jHtZ4i9gDRdjFh1cwvta6hy2YhUri5BotCvaNFboCNkrw7xa",
  "key35": "3NBjaiugKz4LmNV9vritshhsMS5U2mG9SXshpqUZWbgr8gnJg132VLdUaZTjobnDaE95XHYjWVmXqtW1X2dXyq2k",
  "key36": "4t7nuRkegh2RWD26QPUrRUNCMVr8f7ZMVZmqgPGWTuJk2aH9nHLHJpiJEhRsEx9nS3Vitf1cVEAaoFLp2t44ZuYV",
  "key37": "4JhivRyVT2qm48APpTqnZAJomNSCLpSd72qwrPfo93fBRXUW6yZ8QSJJsTJwqvhopd5L13eWQGjkaKMSJ4fQVrXs",
  "key38": "2hGWi1zZ6CZZRKc24qrWjoQzC6ifzKSTvymnknFKXxhmhWuKXKv6s3WwSxCScXVHqUXM2TTs8BsQTmyZ7PHwV28C",
  "key39": "5YfzZxaCFafSXBLukGWcBzPUQRKa8n7o1A8gBcuT5VKiA1MpsFT5X73sQcbqv5cdxtY8RG6KL3ZGxPK3drRiRiyg",
  "key40": "jrkRnWHMeaqxEPUesQQDGWhja9776CFNeHMXghPJDnv5vSNETna8jS9wLBLH2JXExf6KxvMTaBTRCBXiA9aS7eD",
  "key41": "XuQgUnEe6sXhjHsfRCjLVRXgjy681wDq7W9NuUBvcjbvCuEh9z1SwKWEDXrZrs3XJLW6ZMtPWGHbz9h83f5d2g7"
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

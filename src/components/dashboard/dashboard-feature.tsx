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
    "5uxcqQJDcGGdoXfKsiB4wGY1sLjNmutbjSqNFiZue4Dt7EcDbU6kpDFCi7BUnsrgnqmfoEhzUFdqibxMeKovtC7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuYAf1eX7PxnK4XQ5wFYfwvGxTWbRtjsR1Qmyn3pDRBHjZpEt4dmtXHTb2H3PTJFZwZHBx4roPbfN1rE3GCsQdZ",
  "key1": "3Vq5VMARMPYnFTTjC7zWX9LKC4URHo3V39oRLGScFRnKVhLTRw7dD9yVRLDnBp1VQg6U1R5cxRgdm2n9SvLbGycF",
  "key2": "29zYteoRxga1z7Z9LMWRPHRUWw26N3qPFEZxKSMyvNzPWLqLNmToTaHJKQa8ztV4h2PjyxDAVMcBq83HizFrCx5L",
  "key3": "52PXs1hxU6AEWAvcZs7V5sYNyuj9AVjBNDBYuqo7SFJS7McyNF4xAdcBroAj1y1DLvHmeSfkNQ9cpjSRer776nSt",
  "key4": "yme6uHkaamRCkGvaNGd9BmdthngSAcY8fkHVqtohUCwt6fZKeeoyoXJpy26Ae21Ee6YiFezTCkZbQcsT8ves2vE",
  "key5": "3HDKcLpFZmfyJMXcBZEHoZiSAc1ViZsXmwx5V1UKsgubZCLP49YszG7yMUoVTTVyApK7H3M4CpmNCPGQcDH7ZZ6r",
  "key6": "4Tatpi5QzBhPoH4pkZLx7T9oLJdwwdvj1ymGJgwBMKhsbSwXiA9Ezc6bYnvUi8Q3yG4GLuvyzULkZBHxxGgzChiZ",
  "key7": "4LcXgjStGErbyKnmr9E1J3sHJnwrRhQynBcExSUwZSA6nqina1HsZX4kqX24TXk2GZvnpecijAfg85Py8c9xAD38",
  "key8": "2o7oheyxuk6ZkDoZAq1unYZhGqGjC49knbGmRD3Dtoc5AJWdGSc6rYpRChD9KBYDC8jBKdjLucjPqQc3kpWAxPqm",
  "key9": "UXTPkk5oea28ZKn6r9CHCB2cwv46ExYkxHHwb6wDCWZoeDRdK9Evc2oaFsHFaQ14LezEf8cb7XCXpz8HUAQKCRK",
  "key10": "54ggavYAfFpMmjvC7ZyjxNCxPBnVyykL6oEKsGiUksfeUQQb24DSSgEvbTdWuFEj4ijjM2bQQxEVc9VYgLB3Arw1",
  "key11": "3uQfnQeqoERB64CswXvaFVFCQsV2uDA6ANkdpExmxRDgNfR9DykSRSRfpcn5vpF7HZEV57Sk2g18t8cd9wiZGbr",
  "key12": "4nHJKnyfTsF2LDvjoK61pBPEjG2d5ofkpes1nHiZvGtGK2Mjtauj78LMSKxfigdJT71mBqUaVwi3PQbkUeqqDfRK",
  "key13": "4y634UrvF2toh64mcx99btaXnrsCpXPPuy59pV9f8GM64CzaPYxLs9nB1U357J7KCsLHKfjBfvEJgfKku721Jv1X",
  "key14": "439mFRsKVFY48Q522i71j9kcHWqDDhaov7nLr4sm8QD4hsT8SspBSdNh7pgj7T6YpWLGmZcrXomxCS7AP5uaNbjd",
  "key15": "yPweWBVP5AF7DUFKid8tx5WrCGy83SVJMdU8KQsEJNZEXASRhhRsbLrMNL68yADDYJwHLUJUY78qEqRJAZag2Nz",
  "key16": "5hCbyotKr6AnGvzJ1sBqaWXMWDnKkVjX3ou3WaeFb4pgdVo63mn3WU2f2bCzgyb9cBKQssRAeS9G3yNMyK9yRd2E",
  "key17": "2mt2F7RnhUZTJ8VFnG41VZDnv49EqjANkXYLzskkBCjTsq4hHTVLPitCBGrYNtaVTATtw9d8ebF2s9YJ8V1oGkfb",
  "key18": "2fQBaVJck8ibqgqkDcnit93xmCGdXJyQ3QP52mJbfrypjCAZn1WpGNngJvdv2WeFr6tZHqFQHAjSDMUZnzuPBfLz",
  "key19": "2LCCCjAXXnjGaag9LasorDkSdXL8HiUx7DLrLosyANoGpmJSRPWUEmaAiYrVCNBGsMgbzQCzym7HPa2KZDNcZaNQ",
  "key20": "2NZSLP5fUYiynrPGjbU7hzemjTz588Mxni44LEXruDtHbVY3DD5PiqAs3P9fCGw9i3UzW1dsnCGPfR1TejjhGZTd",
  "key21": "SMxg1Pb8UcSPi83cLSWzvjbPijiCYjNEaB5QVTEp7sdETTELBK36kcQhbwfRm1MMJ3AnzCnqHyCBtH8jJgxw7Qn",
  "key22": "JMFqPgznvhS756iyy5KaRhbL1dUUjU3ioiWZpEwHZyy4vJB6zbyxDRNgDo54ZrtfiWddxmDodb47ca4TdNmDJX7",
  "key23": "259DfRX8tvWNFAXT5cngiCE4QbKtgEuHovzEhSnYAdaYwNawVECgPyq5y2YR2dUjb7Ty7Z76EaKZ19xrPxoaaNoi",
  "key24": "5fTzeokkxWibt8mzo8u2rwwG6B3x8Z4kouaRQshyKAoDw99DMMV5Ubkf2sdaLMhDXxUBuWd5b89RCEQbDgGFcn75",
  "key25": "41n7douju6YaiHWPBurMA2QbQ1v2EmaRV6e8GBLn5HkVY5KEJMhn8j5KbdLZQyosbtVfo3Wh9h4zJEGUTQWUKJP5",
  "key26": "shWvVLpCfNRNc5XEZmqs978YcggJSxWJTJK5jR8TTYSxDaGKtpHmi55znAfHA8yYPASzgVnzkz6vyBHiZgAmviy",
  "key27": "42bgxRt3WLKSYhjCmkCYaAK1u3xsj7BDJmMN3M8j2KBDPjkUy2DVWWwfKtPK7MZKvRYpJDo3rReb2CJCfM4XeWEn",
  "key28": "GCTqMYngfjYc5w89o8XAoFtE9QbsrUKNVyQr6PTCKuQprowgUcGrFtopM4dEUhbo7n58mGsv5WHEUQ9CqgfA13J",
  "key29": "2PsEQVV6c3ci1fhqnJvjrT7DjVxcRnSjM9LeomGGaprd2gPLeSc8KUhoH2qCsPuEmbU614CLPAxrMZRorjUejFoV",
  "key30": "4bVTMGe9ZgTAsRJ41gw5pjB4GNDzp6iTaHG4iUFkS2oPzAirasxrgm4QHdcRBfxyxMC2pAjBaimirYTmWLZZWZuS",
  "key31": "2rB1NcbbgmfG9M5sbtu6P1s6FnFMYdLz8ByXhB9TPVhj7R6UefKeTubCo4GnTRHamCQghXA3cPQfVinwhMJ8ucum",
  "key32": "xQ8DJ6CWMjZUqxpjvQvqpRU2W8wbqP6THz9kLQ8kfewLCs2LyZuw2Baxb9aXEjUq4RCBbhW6BToK8yeo1VXkAR1",
  "key33": "ufd19UDYHkNTRnENkHYKCHFzvE9UtJuet3oHBWKQ1oWYjVu67h2CG5zmqFDJEbwswiCgyKEuKqtxHYKMRVMBsH7",
  "key34": "TJVxj93ZT5s9fBVNgvmK7waG5Y6Cbf1yk6ANfPYxuMdZc5GgEAsWdBW344uqDRJvqnMiGsNrBTNtAyFsSQY3toJ",
  "key35": "5QQ9uE5Rs2KMZJhGuosveag1TCmvBVAwSZJkQ66vsE2sjXf4q275HFhgcNRJYe8hiZ1N9fLwGS1Dnt1uX2D2V6dk"
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

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
    "3XFvjrLAmianFGSjYQ1UhWS3GtNC5GdhBECbkVygWvbafhfjurvQESR7KgeUhrnssxxNeQ1EBBqDTqzcZQ3pr6qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Czf7pTM6CXTVyv87H6nAzsnWa4AdHLmhV9YTscevmstQWjAvLx4ySZR5E16H1y2yukvn5FyZn8vA4pSywXDxwn6",
  "key1": "3QmqZbZPu9JGNiLKg14gLKRpYTfmMaSoweWgtiHN4ezaYU8o9vL9FJniKb5c1xsWHSuXMdt9psN8gP37Aob5cvhE",
  "key2": "4nGKdcffeiQorxuUzHTXGkeKHhwjVh6z6wvmtcb9JAHLzJz3TAzgX6XGZLTniQpsHtGhpcPWDARA6GkfdM4u1UUN",
  "key3": "5gFvGeohKm3x4suzmtfycHQFjHD4vTigt7qnhrDDpVps8ffPYA8wmxN4BgEeEbJSTSsS5tsnd5Bj1zrMHcppn4TP",
  "key4": "GLnY2H3ZC4SXbq9q9cmpkWhhhCiGe8rBm615YgRnrvCa4iuYV8m93mR99ixMkDyR8Sw76yjB8LQ64p4c4LDhgXo",
  "key5": "5QWES1AuxERv9fBJp58vf1TTL9wFHEaZvc6ocfz57ee7Cb1VoN73iGeGpvCAEH1N4jUPiY83B3WYZRyYaw9eWt2S",
  "key6": "F8MbBpzj85eMHkZnfD7iZzer6UnZRfgt81tPhdvxXdYfw9FpeJRnwTuUwRk16xCCgY4iGWmE8r9PWSbgbghCYTH",
  "key7": "2uH4rtqNXTSrxiDBRcFBfoSx4u7PUK4PrWggzCp2zQDBJVyuSRq1kAKuR95kRQEAXM5YGukGVSJV9AosA8b8qkyB",
  "key8": "2yWdbjfkHgtRbTWQffPK3qs2oBnJef2gJukW5v3btiaBCByPmyXFzsa3ArbXaD25auaHdSJS3ps18XxfyNr9SC4s",
  "key9": "3MscPRZ24a2WcThiuZeoRrz68pKUGCHbAhG2Nf1PZk1TVp5Y7nUK9jU9Af958fnSxHwyXJ247AzSE84ivxc5QZwB",
  "key10": "4v9EYPmRNnuXP3gS1E7oVSTqfVtxPb3wUj1kFMgH7RrDZBL8tPyv7r8fo8M3Lexj91AipRMQPMcDgo62WZ1cACwj",
  "key11": "65oW6GJpWQhPjJak1KbE3Rhj8vACN87RKFPf1iWxhi5wrv29mDob6BmsqSA24GM77fx6ZMdRGsEohYKzW1R2ZDaZ",
  "key12": "3qVyfU3vbsU4p8P2Ydue17wvEQCiAf1WtxyEqmB2irVQgz8TPCZixYvEqPoXf9McQ2af3cUUrMsa7mVgxbJ3uAvC",
  "key13": "5j5kaktFMyxn2VPAeV6EygCLs4LXmHWeoASjUeawd9iCwDankR4bMKZo1Rjj1oyHxvEUdEj9fBhsSZVArjJpbHM3",
  "key14": "ZeiMm4BiQ8fJg2kDcAQPC6a7rvL7rAQdrc3H3A5xtRugP984mVHTEun7gdcRzTMjqhCBa8NvS9f57NMRvnD1ccK",
  "key15": "2MfvkKk9CsvUFoLbXWrNo9u9sX4DxyFGxgDEj1N3bHmN32WGLTVAkpAgQiVRjuVjBb5RnMUP76xeH8AKCHguWwYM",
  "key16": "2Pqzjtc92TWxBY7kfPxqiorPdNkbbXamAXKyTACCYRqwysZi9DjYirxURhXVdgKJt1STrbNpKCiuG8cJcdsP2ECg",
  "key17": "4fQD8HbiZbozHkP7aknXTCQn4yXjmRWAcFU5thyyFGvSnEFo6a2TCn3pDbeBc3jXsD7Sxzr7wdYnoqoUte7cpFvN",
  "key18": "YZKGnccjmpYtEDroVvbRfc9hf5jm3tuFp5icoc2QLQUdRRxJSKMfGWweM1e2uLb3UeNhsrgpXVxBHUYYWVT9eDG",
  "key19": "hgTSDs85UALVZm1tRVYpvpwV1xXmyJHVbXGncTkrk62rmMizeyEbKCN6MNQdwUiDuwwqcL3YK2JNLiZiDdyZuXZ",
  "key20": "4SC5SLTdJoMvygAoFHifHC1iASM6GRPakeHLQBee59QbuYUUerM32CMA9zHmgfYC2qM2QaoCmdzmTNvw2HmeK8pC",
  "key21": "5ftmfFndXBZ2jTEm3Lc9QQpyEPAQX9rK2gJLrFi7LYJY1Hfwxaq5TfAzroYWfMqYWSjEkBKq6yriQFEXZZuuxRQR",
  "key22": "51TCLwKZqQbFREfXhR9LL2C4E72TujmVqTAJRZLzkZxWVUvYdgNozaz6X7QeXqx95VNhANn89nGdMz7v4xFjSDF9",
  "key23": "WhD6A3k8Qis4tN4CbmAB4zSaRqQgbGzHDyDyRzdGWQYC7EsMWTgUqHV1dFnUf8LR6C3g7n1BcGQdBSERCb54Qod",
  "key24": "35JyGBhUyWAu7xE4E88avavV7iGYcCRrL5nFAwhYoffXxxo64YW4xARBDHWGqEXgTUsCmEtUw3i15cusLnZKF1qF",
  "key25": "2rwmci9734kFeSJiJvVxqx8sQV1sdWDT1L3tTUxdD6R4oSCHdM1JewDNj8ZtJ71pNmWLGq6gxbVdBynWj4C7xaEf",
  "key26": "gLrttbe2XA88Vj71Y7n3bvzTpheVkHrNvEucix9PSmrWteNNTb9s1FArrLwdsnPW7Jhm68tnf8X1K6JE5RxCH41",
  "key27": "5tRZh9X5BEneTjDtC3fskaoer3zC6AVzgr6Exux8DjoWeUUZm8ett62BAcMZUXK5qrv6sGrLwXNFqzivnrvgW1ph",
  "key28": "3fRyobVkm5XoFRUZKAEjQaaAsEFR5Lt3s2o3Vb3ih6GGhFaLPob4M4x5D26TRGhHT8EaEBYT99opL4bHZymFKyjp",
  "key29": "2H26bVv6yJAmwpfuKFb6a4BtsWRksAR3TgUDHoXiz5Z7TgtQReZUBQhFwPXMj94KZxmsL6SASUt2jQcqBDB5AQ4s",
  "key30": "48fhSCGbR4BseuyukF3hWgZDJHyhv7Cm2BJC8Qiut8oMWfRXToGV6DrtHjAPitSskEUYXgZ2m33Ng6rR2MDoWoYf",
  "key31": "3P48Q2tieZkZwVGYHdnhhcdHmQoWzL9h6atezKnXNQYSCQUkuzKcJbaDyLq2568mbiWkuW1DCiy1cacViRTiAxBY",
  "key32": "5F3LAvk8PT7kFuoVN42TcSezyqb864Gm65d2XXdFaWYbqZV2J1mVicRe2H9ASkijjodPmL7eAJ1nWaH2FEcVkcAK",
  "key33": "67aXDbHGFmpgfn6oP9s5docPso7xqPq3EQkVTVdiQgmBrjkWA1dKoAzqgEciCfKcChrZT3nVNqXHJsU3Fy99tCNh",
  "key34": "2FSfr4vfFhAsQcnGoL1sX5AJtiBH1pGFX9XoZYQvYXEmLbXX8fTZ7ZZd7J9tZRwUKrBLasiaqmQSnLj9zpWLTfGq",
  "key35": "4YQsvuJfmu7a4YrSNHGFLVjNBtvrnPg9akTkSjCg6vdy8fJ3zCMM93MQ4bKd8qQFTmRfSv82riJpQmt3wqJJ5usb"
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

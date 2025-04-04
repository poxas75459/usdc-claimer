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
    "3a45tokpMp65v3MMNcVE3AvVgFrMsmJD5quMzwRY5VQdR28QjD4cxqvismo7XDup7WQybypoENKEp2UzALeaLUsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2idhKt25AXHsuVEnChKQeU7voznNEMzDiT9xwMHvoBXhH4oHdRrdCZPBTsW5nXF8q3iTkhS6irYUiKiC5fcHwyFP",
  "key1": "3zEVNb7VGRNasCe8QkE3mrVW7HfDQnJHU6dqsCxmXg1kkXAVDFdVKUzkECcDSM9cLZWbKYjuvAuJWYFUq5kKCsio",
  "key2": "4ocfk7Xz7sxu9UdUMDS5BcVX5jPoPA89yjZr5hGvNmxADiny4QBPEbNnpFanGrbiRZ2NhNmUx6Tt1cNK7iipU1z7",
  "key3": "4mm9cL3sMcN6XwyZWodNDCxjwYgXMPPE9By9DacqhjAfvr2uvxvTTiwRVBjAiuEgkff37ePb1Cb5UQWkaq41G56Q",
  "key4": "42w3Y7CvzD74yRxKdzjsbMuug7iZbRbcd4DVS557LVpZ97pUrfRsFrSFdkJeaa5H9czKQDeptYarHrTg1KhXbpdB",
  "key5": "5K5VfTyca9exNNbtL8xApH2BcSSFDzQXDXhYsc2iDzomk4HgaMpFruWV8Scwiw3RfTpuAAiEL5WhB3zuDDq4UA5w",
  "key6": "5idocDLBUAwaBu43KjEXfZwHZwyBf64Md6vRcaVv58ppPMQeYbyzFqy8CdHptMFYNcxcS77JpjtPM8T8BtnrBZKJ",
  "key7": "vom9xdJv7nTzchGo5XjfNgBwL2u79GCUSN8Nshr8rvLyEXGg4FzGLtjg14WHzPHVv2dguRHPux8MpXfvnN2Lj1c",
  "key8": "2piBPkS6QDxABV49KteJQNkSCkRytNVgVsgxczqJmbgKK6EcJz42mhajFPduHazzkTLQz22JsAFeQVPfZk4sxBDV",
  "key9": "WeFixPWEZZdh35iMeAxcyt6WnGcUrtQYp6nXyPABbsnZy1QUPXrohMRGW88erPSBXVfWyzuQBxHtMU236PDxZck",
  "key10": "5ccWyf4xfnR645BgV41caXYGshoL5baULbTDG2QEA2nwPkuwH4v6KmpMhg4bkqtdCZDN9M3jWVVPsHhYwubKqz99",
  "key11": "2AvtsWq7iBsVV1iCGq3qiym8XSmhRwfBVfYJjAch58GmN1sX5waDcd5yxPJCVxt5nntJ4nPbmxk55ZEzq1gZtbET",
  "key12": "4jVDosWoToyeT3EgrvQs7H7U5iEAf5qE4CsytorwbnanJ2wSWs7SqCnWvrMNjVchYfG7Tu9pC5V9JP4ftMUKRTUU",
  "key13": "3c5axy8eazwY847n2aLtHMJghaBkoasZtjhXHerAACktqKBD7Rj9Wsx67hitPDy4gaxzkzWJf7UNJE3gefC3c3U8",
  "key14": "3Qfzkuh9YhgYnUc1Mp48reWa2owMouKBtYAyiQtcrJM4Sb1HFGJkbBaV85os5LKPjrG8wsrj4f3s6VLMSCUu9ppj",
  "key15": "3rKzBNdduxb3CDcrhxerAVfN92Hp9GJvyckhWDMnchbtVLYDQqntdAquj6QAL15LTzjiay33VDnL2UREvDDebYg2",
  "key16": "91ACe2sEDFxjDV7N4Xe5yhkMdzBpZRZH1umWzdFiWLheCtNEY1Vex1y1VUd83CewvT4GXPu3ZLvhphRgATeJt35",
  "key17": "4A1ARtLvxWmydfvZa7JTdM9YQkokSLfCbKpdr7gd3rdGFjpPrAeW98tdNRXjCsGfsy2eyoKAGQjbEQd8GEDicQGB",
  "key18": "3BLhqyuUvqeUGjLGzBghbweqoSLjkHjHuFdEeQwaFrLin1Ut6qax1ZzwQbWFELM8gS8fHp7BJvxdr1aVukxQSXdL",
  "key19": "23ZUPydWNujPWk8pGH2eCez3YN9WK6GYyuDBFxhCwRL7duNuTkJ8dxYdrUzVqTGvinvMTLgb2EpVd2hFYbeLLK8h",
  "key20": "4DZPUSfHrZRHJbT4br5eRXxLMXReL4KetuCFPkcbw3w3d2fV8zYLMJwRo481LQHi1c9xGkYSSXPMKpSEGn9QK3uP",
  "key21": "MDWt8RUKPtBxV5cUjJAU6jKzjLsdkcWPV2kAhMntPFkKzqErrmnM9ggAT4QcRt6cMWns8KidTM9R5H7rAEDXCqR",
  "key22": "7hPqJ3ZXo1H6NhB6ZnY4D45sALYCNuGJtt6iJCq81qiFpaq5rhXgfmRoi17ehc3AHBuYquYqCvogUAsgF1eoTHc",
  "key23": "3fp1WtREuEeDjm3w3pmdSHZ1xLdPA2bstv6t9vZGBHh2Dgfr4LsgdiTWVJ5gsvJSpt8d8Amm6ezu9HRRL5KoTnUW",
  "key24": "4n72sp3Gx7qDwxkMBK2UM2Vny3vRb2quvjnzqCTvzWcqw6xRN3M9nMfP7ErpxmHAeip4QEqt5eq8Td7KT9at1SvA",
  "key25": "WutbzK8VmJMBUuf7xpcRdF94WJqnZgMBXttYG76ziCN8JcPdWYLCi8YnkwTfDNv9ZwMcW5PUeKFHvQyE5mzmCY5",
  "key26": "325hfCXurDdvsKcsVWnAUX48YHABecEHe3XLj7so2tiFXVmMH5zsE6GuDz4tGvMaXZCSqKpiRytjQXjAz9rfEEnc",
  "key27": "4aXcEcCeAWMpvRLZBNF7sipQZScEXQfgy1TJXUtLeLiv3pJuzezt7enKx4CscbajoQzQtMHXMDncqLYp7rYf3hYo"
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

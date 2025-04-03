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
    "jrXMMreCQz3fPB2uE8XYbzZvUSe3K3uw1wUEDEbhyaHkko9oZHET5ror628e4GdeQfZnZKMELjSx18eBnBpvjkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfu3NDQbBqzkNimZ1gUtWgQHeL2uwrpfay6VdSWupxADrJNn5DBhRzK3k4sP9o1YEhjUDnVmgYSHb5Gz42FfnNi",
  "key1": "4W7x3zczq6By9mywxmKiMNQsKLqkyfUt1KgkRtGQjYz9sgajucYj9GuBe9mt2LRafMrnfM6gD8Q2R9SEnRH1HNxJ",
  "key2": "3Lt9f2ymrnTKh1Kf1ZkwViA5QX6HXxU61qmbu6begfhbpUf7EqD2N7iS3T7A19JjrhwGrqYrtM2zVkMFffonP7vU",
  "key3": "25oZzetyMFPUWPb96hn5SBGPy5Gm2x57VcRLmfkS3LB9GDo7mVYu8QFSFYPU7YBfjsXSF3GgFXmtKTAkoBBDXWBM",
  "key4": "4rBoqCiitsc3n6c7PLHuqWbKe3k6N8tmstRMMzfbnueE4A4BHF2xhp24qPdPiA5wmg3NDj8J7ikQ6T4EdiKFpwTC",
  "key5": "3yDXmCvfZ429u1vcXNMQ1nkCJ63mS2dsU54s69ctjmhdrvyL3wn4CAsTNW51v8UmTF7RanpJXeJ2MjBpujPFqb2n",
  "key6": "58GUfzXcraHvBkGDUVGsHXc1mJGp95j9iXCRkHTkVRiU3GxgFQnrMtRE4EdSY3PAuJg7BEUURuBM1HxUcKSjm6QB",
  "key7": "4REK6NYAPiMZBHMAYD7zmHMsfmfFHc8sUxKeLRGqVQiVhYiXch16cFvYLcieoKT22KoVP7RtRNJEV7CHGAS1MVD2",
  "key8": "HCHi2Mwtxa2WoaYNR5vKQTJXxgpiksmUXpKCryrEnj87gedR54BK9eHmndYQRtxUWaptyfSDZzQ8baJcw1rwUQ2",
  "key9": "66XipnuXvf2fECcQLPVieBg5hkFELne35Mfi25BRDV4CxjcvgRYKqKzA5qVak3ScD89YAvgmxpDzNWVpVtXKu2J",
  "key10": "2bH38142gv7C42iy2SbtVriL6PJ9rhmuE7ZQdjx7pgC7DdKuazfaDtXN9kfAVuNyUBsQsQeSGsys2P9vTbqcSuke",
  "key11": "2j8JedEkJXwXXGy9euWX6TaXf4zKkG5jh3ZEjAaj9oXaWGsPbprsppRLJnvyQdzPoFyBYLVmCQzgSVA66mkzqxGD",
  "key12": "5wNsDsbYgyGMNQHELnnPWC2tFCGmNUrnb534BevdGjjmTJa7mYRrSBbpyDA9gVRhabaLHnDeSq1V1yn8CLUeC314",
  "key13": "4bzxqhFLW9rAPrV7gR6B7t2sXzdD9q5B7MvbuHdDPUWtGmo6jjXoVKN5tqvXH7nr8xu1cZ29eCwSFsAD3RRoahLg",
  "key14": "57tztqutD6HCb12diLWSxr4JNGS2EyMEE6oDkRDpxDtQXU6XJmRhDNmsxDWfBEi3jEmQ1kmfyj1btEVytnwWRzMT",
  "key15": "dhgSBb8uqs28JxiGkVF2XwKT9KbS1Eu3YratNJeMmDPcVWCM5GRP663Ps4T4bMRLX4HuHb4JNyquvh1ysr8Ld3z",
  "key16": "5xvrAX4NgNY1WGhEKSGJKPE6SZPgGhSBcHrR3NrARC24NovePzz228izGTva9vacXYFnTiPyCeMT9VxuLr2CnGCU",
  "key17": "4TdfZJ27KJEULXpEgyF8qY27X2sx4uQGGrHTkGhBWM1medmKmr9FZoDvTf7foxoFWyWkkXgkNZoTui6bVmiWJJ8K",
  "key18": "xVN9zWLfJNosktH7NRMJKRorvMrBF7xNHttVdDEShF6wKGEN725gsEfmXP2NZkZWFyLR1ujUiPieapAzrEQTxaF",
  "key19": "3ZXruHAWc64YWrhmgAm6HaqNit1LhGZQRx1rrx9sAqKhpUPtoQ4NkH6ohPXcFL1RqDJk12hdheV72rBYCU7hNTRQ",
  "key20": "D497Qonho7ZNKnPWsavzXAeBpnSqGcUJ81PhpEfkKd1buayxG8tCV6uTZqUwBsyfTbGUo5oYaBvAKmEVXjQ7VBu",
  "key21": "2rK7adHMSZmaBr7eMWUDQXsek95Dwtz1rgTmf1qY8RwsZxyy7A27nQbE4b1bHHTZnxduDikWwy4gGKqTiSVPopnU",
  "key22": "278xEzhiYH8irvwvGMgpGR1S73kh6EJQpLJX6ArHhQGVjo6hjoAs34ntoW3ojpL3d5ybp76jQw1sJEiFxg3emET7",
  "key23": "4cWGAo3pJewHjtMqeXc4HKqcMACsdY6p2ZPP7GjVi7qRHyK6pxVo3YntmrXgCEbwcUyBDP2GyA8imFVQEVehai7d",
  "key24": "5tiNXfYSc2j5ckWAuXDu6PdoyRj6sJJKm5M5XWfA4w9g4EGk5LgJQz5SiwK6xYAE3zZKov7enmboptp3LrDMCTHj",
  "key25": "3xXm4LN9HxjBkEne14rdC6GA1Fv81deJCkBbEns4Y9uhXMYLjKyhGpTmKhpfde4CzwxmFHzEwFMvLVtPFnivke4S",
  "key26": "2TnAU3HBEt6d5ecstasFUKtrst69Eeruj5i9LDK8Y3XZeCsSpzBj4PQFWUh6iUj3sLC97CvNs4pUUf9WTJgVNmdo",
  "key27": "38KyJzYAfDPxrGUpJQ4xLmBQrbSmdSAuFaqhguV6PEteAD7snYLSebqxZA7anbLWZDwenjM9JWiwAsSJg3xdX4Be",
  "key28": "cMFWHqXPbbugzeTV1ARoL2TJviEqz8pbBkPVnDi7W7rFwR9u31jjotbMmZPoYHCHqjsC9Qybhy2CFZUmU2eyxnf",
  "key29": "3caG6CQcdfkkZHSfzf7TTAQV4RbGfo83ou4JozJcsT2kidhT3ANLG25fAUefVTKqEU2qrnik2aHsTq2QxfwVKX76",
  "key30": "ygiam6QtZDUEUxmRwonS6YJGYkdBJrKFfAzZdM36SPFranVz6eEhNgqDtcvKFAEDFG2SpyYccTFmTXTJAcSuH49",
  "key31": "APcdMbqgDCFHs4y6aTtk2aeFpp4dyXHG9QgabjKgjU3qVELXidYXEyU5jyLruzbuEVwfpJFNRfnXhEuWXg5iHQx",
  "key32": "3cnPVxaWwNZMfdi3EiE7g2ZBs99xEce8CLioTmNpLb4inB2Kk3iLmxWA3L3kAx4AvGhRKDWhgNGecj1o5BHdT7YJ",
  "key33": "4hJc86koqE6ZqCUAPXzeXJcaHxuf2M2NMarfaMNXBmaESoN6pQDZuRxaNptuuSRtGTQJ8Wis34Je7KsZ6hsgvgxd",
  "key34": "hEKX3Qv2j9TxUXkqeiGHL9pPNvMkHZRFs1K2dT4kVJqttTX6HxFBo1e28puB4JiLbzLghqLARzLPMMzSMuduBd9",
  "key35": "2g2qiDjit4cJ2tgHzoh5STDQieKjCXdswBTVsdtGnTBCZRdyk7zfUxNckBVfoSrDPFvqeTv8XGKepG9rtJ6DMtND",
  "key36": "6RkwhpAK6kwbKrvkVxno2R851QeupqmhwuXM3XKcVeBazuLd5QCjeo91Ymfy4yasbJ2LLafuD8tsSN1jSTCD5eQ",
  "key37": "26fjT7oenr9pvFKZezt3QVEkCMVJf6EUYMVqvRwUut6hRauHvo7GN7TX4dsGcXMAzF4W5Yu4jXbdaVShgvGj3UHt"
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

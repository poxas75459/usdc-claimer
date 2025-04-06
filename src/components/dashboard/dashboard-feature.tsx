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
    "2j5XXP5Ac2GrfjFPYQTqaXJjV9ni6txmaHtE6o6RHPtMFK2L7aCf4SJSYFSuBrCcAghFqQQkoYwx586nEX1TvKvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qdRL8yueZoEpJS9N3jCrtfyytVu8XvesBAwEfVeegYFGDuYnXWPx3aaZV6mu7crT4cW8jtDFYQwifebYAsWWoo",
  "key1": "3iDUCX1EmN431ogNfcM5N5sg92dCLx5NT8tCuyN1AhTVJpZHwAx6dTtnQzyK464X62KV1x41XcLPyBnuRrXvA8Ci",
  "key2": "3eTPCP3ts2BTofKEGau6DTJkFdyo4uJJS32jGT1BJ9Ki53DEMgSQBmfy5bRBv4Cw71qEsSHJevAYWHLGQQmnu9r",
  "key3": "98SxDYmRnRKNexZKHSVDhNqenY7GVZCBtnVwRKV1RKGkWKU8V1i68gzzA4HZnCSBizk7oTrUECYNXZxakLmmKQD",
  "key4": "38RvibgkhGZhbR6uLSGKsx7FtCF2QqNM5SXm3sxZFb2KYQbNrM4whVLJcPyUFYaDeSpz9kMsYWAVfDZAZ6ensDPW",
  "key5": "5Se84dSMJdr7nW6ELW9YZ1XsFtxgQJp1hQgeuEnUhhCWfMv7gqEBqc3JyRH2mSAVqtRms71BYwKSJdTCjcCESkbv",
  "key6": "5ENMLLpSqmQVJ1tGJhBKES9naySVrqFTZUicGNCtdSdwoDMPxuLCLYiadxe3HuLzWKwv6EBTtuVH19oUhWha2Ymm",
  "key7": "4nVuiGDi1YrWM6jqhYuhWjjo9zzvLETNFBkW5gA9YoZ45iBG1DoxPg3q2hf2ek3Vkmd1vc4gmB4AJzhUMwqgemPC",
  "key8": "FZhhG2qAe5Zdt2LcLn87kmYK7hfDAGgPEV3YgDqJMqQXuQEppkTLJ3qDdGMEp79ivPPAttmw3r8c5mKHjkbb9ny",
  "key9": "GUg5cbGKjPZ6kF5f7kqe339A3ALxELAsFk9g9jCHCD8vruoBFYimF8D8MAxtAiJTkD1engKtZGozcQMwqfNNMgc",
  "key10": "5rA7LVC8cFgJyXe8sAaAQ4v5tUzzYnsUkLmhF4toP2oxq86vnYz1sfrTToKXv9KMXkF7iQLpPKfPgtmsrpdXfYMH",
  "key11": "jjY4B8mnXdK8tEAaww1Ukm1mkZMhroUwYB1Tcu5c2dSeUWpHyibRs2i2ZVqWBAc1dRhzKVQF1iQJvWu2yVq6ja9",
  "key12": "58uEhdQXKFQbnrxUvBr2kE3pvJhcvHvwzopRMWVA5NXJ833sdLJiTbfQKWnW2Ws5FtJheW1sew3k5pXFfdUQGyGR",
  "key13": "5fE8MLZvJxnwsXdFYDaeAaH1FGGhuUfRtearCcWtwp2M534ebjzu64EKfML2McxGwVCy8qeCy1FGTmwDySKADiX3",
  "key14": "5jPX4wST2X8a814kmhrDoQit5DZ9p1boRjrcihNK7GYHu2Rjn4tBBodnSwCaDLNtrymxMgSDtAeaZDoCiKekoJx",
  "key15": "2DzZYLV8omXji6vyt2JTGAxhbyd7egN4S4QkptPQGBwsJz6pCex5KSjv2MA4nGUrweURf1xs73h5hwhVQ5pWm239",
  "key16": "5wtbRZE3ZwEtQU8NwQDAn6MNcMcMAqxnKRM5ABKZXyu8ksTMbAPx7R8SmjxFhCtSpkJfjRpACH6CNtpHax1KEFdD",
  "key17": "LoQeFxiCLPu2GimAySjjCbDHUTzDe9DJBQ8tNXqjKAAPp4vXBQSyoPoBmJhBBHApgb8oTKv6zqRCvxGKWFiR46y",
  "key18": "8m15Y3aWogEoFKa2vXx6U2CteXDc6THKpmP1GFU27cU9jV36RgRyoGrxuvGe4xY8YPmpjqcHisHyHGYBN4mrABZ",
  "key19": "2ryKHEzfDXtyzvyprvmvKo2oxwoTG6RHCaXnTgE3EbQ335w7iD8DkTEw5nydHV7USBPyTKi6ZTCX1XbEoMrRq6gA",
  "key20": "2XvjGajF6Y9cCU4hpbDHr8B5W1jRmk8KXH7GAhHxd3tzAAbLr1TmJuESUubTekB1Spe96DAAnqvdbe3qRi8mEBUr",
  "key21": "4prX4D861ujJRxUK5Ym3AXJwHR8dBnF3o1hZ8jdGPvHnqxiYjxtC1ckcgrUMGLLm1J2W98VuNPjsLjbYujADv7UT",
  "key22": "3Us2TTvEnXYpsfP8yhx7TPmGXSDYFpENCqQnwhPxftUsXNzF3ePBxbUaG17nxphCuweQrwaGcMf4ZvVjvF6TNeJS",
  "key23": "4dSJoiFEBXQQzepLgyscSWF9EsrBTCyVZ2pc4T9QybK8RWjdCfBrwxbSsDjSs59hPLFGJ6WbsUg39DGvvKQPrsDP",
  "key24": "ho41ihXxDmiGoAJxRSE6oSgvGfqkawpsyHvCoJpABT5KpMa1iULEt2MWRaNgtb5EDvzcwXMH8Wn4r1mfYsEsYMu",
  "key25": "4m5mwqCsXNLXK276QnyWk6vP2jb8ZRbaMrVCd888iHYUf1KUYnCr2pQbR2m55muFEEYXcuyhiryTMnfnFHcgVMVc",
  "key26": "56hUA5ctyeRuYrLB1DYSpYLtxcB2KvLPPZNEzA4pa9uUzv4ADCoGwZMkPMk7H4Sac2qXeMMpTiR9uYKZyLYC2vWn",
  "key27": "67HvME18JTduaeC9qsZanAKAGBzMm3iqhYsErLPWHRZcosjewB7y152yWRWhspyJ2rLFjS7jExSP31eovyPGU7as",
  "key28": "4coCWGAv1LkDj6kNAf7DkHdEefY2cNLvuknG8ePbMMrB3BgtSxvHXwj4yJ4uMcfq2dY6xVh6xUHjLLtJLJQyQF3T",
  "key29": "5WhzqTeZX4Tk7mcZAPtTcZWCTmATATJe7vssCCoFEC96jtJh66AYNJuW5kt3keSaFbe2NNan5juR8Zom5Ugt2j9j",
  "key30": "4DpVkPMAXHhHDDkefe6DytYNLQXo2fDd5Z3iEPeLvjNEjUqRHePHKAkuyfGyXAjxo6qQA5A1bgs3p71FxC38h3H1",
  "key31": "azUbPoGANJpGrjM4iaHHZT2C1RFHH7f3Ftek866SFRyBSYnvKpYRDLiRJV9yHqmf8rfGScUEhvDg2kXjw2aU9dW",
  "key32": "uMJK3YpJPJLsSPWZGNjRDs4GLDYsWRriM4Q4B4jstxiWPao1CPUZHHz5b1BcaoSZayX1BYZUdBo5RyVmnUzfNPD",
  "key33": "662jPKhLfSc9b1VqnN9usTeaCBTiP86yX7gPwzmXSZoMoS1BLpgU2SR35ReG5UDAD2jpcvzEuuA73S4X4SV1AV6T",
  "key34": "1vVe7nEhaxiJRwBNgyrUetmpGabzswpTykzPEaMeVo2TxAuKQ56SNhgR2KbnKqGe94A8mJAJGsnFfCh63KXDgaB",
  "key35": "r2p9xZPX1DuxRpEbPE4F9ByBpVNfkBmmywN5cQiaayXGTSx6eoQRabrrY9iGb2CQF15JHQyGneKpP21vVTmPqrh",
  "key36": "4uQTFAVxoPeATBoocS2TeY8ZNTwuB5vMYDtstTpsfKi81jWsDEnRfqz2Latb2oue1gCv59RT5C7ZMgJjWgUYRsjq",
  "key37": "5HzTHcm5xuNP63B6aaxrBH4kxNw446HJm7sEeFoZAYmKe6qEnC6HEb8BTP8dnVHsWdjYhHTJY9Bw7RizD4J7t9oJ",
  "key38": "mkZzwTwbCXduexng9nGayKTEhTm4V9qeh7APrStpWyP22ZY2sYwWUsrcLAe6oREKSn3AQDgHZK2Q1bixKEvC4mh",
  "key39": "4k7mTezJQCjFkVpyW2DuWqUfhA7Zmu4B2gFyfKtt6Y4hAvKEfAeGS8Pg9vNSPiR1C4wbY8EZiohd27b7TctFYe8a",
  "key40": "2ZvJJNTnfANbji1dERSj9fwtTtoZAsY9jdiR8cgEn7wcNRfSMtDwkaLejE2C8om44e5WykVgoMsMCkdtgnDxMCAA",
  "key41": "2a66N8tFh1K1wbnzUYUwctg72EFRY3pwsK4FGi4B6BC24YByJYm6DwXyGqJwamtDEMggJuAgYWg3hpGKnNyz4qSY",
  "key42": "5ZYLPv92LVHm4G2z8Gm7uLXNrELeANtcXkrra1zkK1UvM2ETu8tpTpW8wbyzP71sWsXKSRpXA7QztcVxVN3c17by",
  "key43": "2tdZvNiKQ3W4xuLXJkpdk3tuggV1wrJAsj8KRHkPcvJcWvEqSJb86uXiQL1YQiQtBz8W9HUCrtBNR22wa5GtXGTA",
  "key44": "3F7EEqMroMarXzxdSyq9aRci2B5BWjk5jyAkChQuD4mubEAvqYNb7joiXKGq8nJ3Mz1PghWrLqf9rPsVSjcPcozM",
  "key45": "5sqQtYkUiLo4XNmobEEgyb3DqdN89ffXjFdZmjTCGw6CsqUtXuaLav6Z7J1oDEMf8vaJXKBRS3iguvQ1V87WQYzN"
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

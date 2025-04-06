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
    "Uqh3gWRpitHXbQPDUP7iSCHWBXjnYdhUSY3uiVAyvnaWNMotSphM8zEGnZ4TAsjSKanqwuSg1WYYUh7G2XLLYdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jztxdpQ6r29XoZu4wbmRS4LfVFP1CEjWTWVK8anZWSP3R28Gy6uoGEpWUrzXyWSG57eigbqFThYreBt3Fumwqx",
  "key1": "5PJJvnqpPoUV3LVj38hy9pPxmczFwPYtJhmFhWYsW8TrNefaVYfhrhF3cVoPVuQH55Q2u3Ki6vZCjyMTSgpM7NoE",
  "key2": "13NSeRnVdhtJb6E6fpA46DLZTeFQ4frKin3gsMPf3AVQj6GVpy6KSTGeK1HGmmi3H1z6HVkaM1fUzzwEfiRsJns",
  "key3": "52W96hy34mMDqEEb47Z9FddjuXLUq3Sqooae3SeMZJqwZgg9d3aSH5PFVesGvVLHLmc7MTBuPCDqNRy8kGCYgXVM",
  "key4": "2KpQnzDEF4b59SswuiENm9pHpqfgsqvX2voJKU6xCm6BR4czFHsoaovZAaTxt6Y12DyH3uN6Bbc5jy8kcg2fnSuK",
  "key5": "2FSYY9XnwbW5RfL4dobWRxjkcrgpomVRghbrTtsCQYoYwMWb1d2CyvL495NFrCG4FiQ158R1RizYZR3BKDbBZwME",
  "key6": "3s2UHd2GskY5JtXE1vM2ToWb2Rx2ScH63HtSzDnP72VKJ4MjGV4APdq82TQqoYWJrYr3nUpSnwnKKzDN4hKEZDTc",
  "key7": "3cnCUgJ8fdmMMDs7UHwxDDJ5VMmyzw4BaEEcCgnKFvbhYBzeWgrpy8adtoz3iZ1TWFQ2bfErQzceXfStF5yUof5u",
  "key8": "4jpNUZRHJ8R9AnSzfLt2qXvUEBcdLJsf7EEWrFG4CWXdDFNaaLkENrsf5fQoWsDuFTFmDyHHvnp4YTdE9sk5dXhW",
  "key9": "33XGTYi2bPW4L3abTzEoQB8qvmULv8JofzqnGEGWPdbD6db6QBgNpjb4xAeTDXQLs6SsMA2TFZZsKBGLsbkJoKhD",
  "key10": "1NzscoTUUvpSRUfwW81ZdnVyRJpnBk9x4J5PcNZyKqkX7NhFTfQZxabJanN8Y64FAKZzyRXyntU79Rrvpj4adib",
  "key11": "4VSVrcRCwCQjCQAxE7QE86xLvc3fgP4uCABvpWy4qqiXSjoCCzGCivezvmNEYt788dB5PDkP6QMk7XZfUz4UmAdX",
  "key12": "YGKy8hsYanmdi7b3tKPzkPaHnP13wX211Lh1iUUzqHARrbWqQ2QWq1Kh4U2TX5TUKmrNvrM6YYrvNgvTKu7uudz",
  "key13": "4AyMQEDBRfj1naFFviD2Lka4DqyTda4MfXEYZJ45RBU8GyqbDSiS4rW2id4pwBVL1qAeEz8U4CKgyzxVY4AVAw7M",
  "key14": "5cKXjUXdkAcHy9uNAPsFx8mmSK2oaUKGbm5MyYe9ZeyBdaK34rwHt7Y8nAg7SwkukrKcb1szeftQ9vd12mtyc2Rc",
  "key15": "4AkZf3aEpPASQdvMxGMMHqLGSpeAHW8g8tQLoxzJooNgPLxS7126Yf5eaovcBiLMFctvm4QfRekiBzjHTGypRAS8",
  "key16": "3pAAULokHhsoXSJQPDUqx1bjqRhk6qCnfqRbDpXFbeAZC5Y46CgPCce1ZpbAsngMKCtoiqGAtnbqEux9TW1EVrLM",
  "key17": "4hVzkrBCAzuN18AXrnyh5hh4V87mqbLJkgioLiwyj8PFYJnCwwTtj3aUoDj1cYgjZ4xQhPTaGFVFZL6r6NM3FnPa",
  "key18": "yteQApS5VksRRCM7mjHJFmNVqdnU7KM6pCEgu6Y99mQd8m5iVRsuFGcW14WzLAKHNMYrxzp7hTvPqTmU7WkABqf",
  "key19": "353JbquhLPa8ETb4UWbeFjEPudWiQ1x25FspZy7kZ3GDDtvF8yCVxMoEhUb8gmQRNxT69Q38b9DhSur3LqcusYa8",
  "key20": "3MfbbWpo4tdP37DSTvcMbPdoPzEx1dHPfeUzDB2ACAZNd1MdUnCzhiRfVqbDahUif1kUXuQ7LEnZoGmGuzbzW7wo",
  "key21": "daLxZVWMudHKC6FDEYsjSWLjXzqDvXFLMe298rWpmM4sPrW1g1wNxWBunWUrB12oZc75LcQ7W8HKXS3RypcQBgp",
  "key22": "Cbi7E1DMUhjsX2kqrMj2w5cR71ueznKJN3sQfyhw5H62GYs4RdKKXs9uZn8sCASdAnrL7BYxk3rZeBn453Q9Yip",
  "key23": "4aimnM65xE4eFUt4tr554SNrurxogJ4FNAPEbpgANNoyAG24apr8q4KmRxGfrVK8WyPNk5yBw8tXXj7DvAAskKq2",
  "key24": "42dtXFdQinUxLsGYV26fNXDrVjUcDnTeB3pd4spxMsmjPwySvFqtxqDj7b4JxrRU7wGgsFELByXZwzU2uyF7wbRE",
  "key25": "5ndkdYaKUAD2NVu8Fn3DV65MP8RtaPGTRfT2WUK9fTgW95HDD6PVhVeLVxHXbHtZsAZHL6T5TiLnERG7cTmWxyZ7",
  "key26": "2JQiNCVez5s4p9RW8HkrzLNgysvEUKNgs5zrSE37ZF3piY2HcEEJEt4j6VC59q76m6N7FHhDBVkQ1k8ERjQjhJ8R",
  "key27": "3VsS4fGs16zxwQpyi48ExVVnnkEdQ7YHrHdPZBTiagvfdLd8URkuMKYAmLHxj67CotByUGmja4UbZ6AYALK4FoMz",
  "key28": "2sr7y3Fag7dMCZc5VUuPFXMNedzGiog5TgmpxMpqwkAX2Amdrbz89kZzhctGEU4YS4YdAJ3j3Z84wr2M8PrTFQur",
  "key29": "5qzFTMQBNWfhqsj5FJjEgoTGK2cdrL85S32BLe5sE5xWPhzXRF1hu9trmBNP26Bd6iiH4pobzLTAiXXLZJF4htCV",
  "key30": "x9j8oqA9LMciBxpaEQZHQoiwzZqyaR9rtoE5BvxoNGPD2s1btECB3XB2trzR9ktaYQNadignqWvE4BV7b1HEszp",
  "key31": "2Ypv6JkLpSX7z3wEW4Mv29LFbDWFVSMFoqtPRh9YwdWzSGZPQnmFS5aBZcWbG72vsd6agMyXpWcrREpLUV3ptA5M",
  "key32": "2WxHCy2JWmNKsda4vJLJiZ7SopM9ZqitqhymDrTqiC9SSYBAmEcPcADHzqgFsVbXyoSY57rivXFm76nN1UzvGpwB",
  "key33": "5ABQvayaDS8BpPsij5wbafRP4Xw1tzD1NX6bX2eNM8ZRDpxtk2rSK9rYT5NurCCNyNMpJ3BD5z56rwbU2Y7WMVVJ",
  "key34": "4BGj9QuhW5oLWnde9ojqkfqFhds1tPqzUQu54Uogzb8t8pSUE3vXveK7BKxJAKxSYXwAoK8GpuXcrgbQkjrRbw5L",
  "key35": "2KZVo3mKFAvs9hkjyrp4HLF7iw7w49Kcxm5JKNVQTEeQMw2wBwiwwBYqEgHENvg2SojLuSdxDmR2CqH5m2PFLFRM",
  "key36": "TGtrqpGBs4tghCcoZCoTQKdbUqpX4ExiBxQgTHPXeH43fU9BwqeJfzQrtiD4ahDPMWB6LAMMVCXjCmb6bXJSPgK",
  "key37": "LKLsHp2zRYVAMj4DRV9qYKtNj75ujDyfSZASLdwQXsrrh2xSHRMYc6T2pNz3TkiVbJdpUsZQJKbefqufewbeVYF",
  "key38": "5sGphR5mFHWFx79mXWzbsRLxkw9UdxfSdfaFkf8VUqwy7fzvTrnKDWtLg8XnTx8Znnm66BpsygxbHTbRXM1MbGBg",
  "key39": "4gxMQ7dLJb1CmYsAPRUaJtKuXctS1PbESAFdA6NjBpbD7bNpnYZkkZrHTuHRtKAqZbzYQ1Gs2x3F4uyrqemSS2oM",
  "key40": "24jPU9ui7kxcaQF5NGounJmCCCupwW4fGQANqMUWvNozPwfr5MszYtkeEHgAVmpaywYMdrF3hwFL5KP3Bqfy21bf",
  "key41": "2cDtAm9b3uiJa3MtqYXbmHAM4L8HFbgAMPiSs3n37SWTvXEi527s7sMiT6CCygsfGizdQ3qCzMcnVANT5g1ycb1J",
  "key42": "5FYqJWsvKZGA4PzX7m95Bu55JJXWsbBgaKBDVHKy5SX1GhrY4ZeFeswSFJqAUPExiFHJwYeGfWCtvpoUMZqWnwY",
  "key43": "qi5NThBXd4dq1yP5ouv4hB79V4Mnb9m6fF8U8B73bzUykWUef3wUSd8xdwkvnoihrPAPrzmhUZe6mV2KNmyauGa",
  "key44": "4UkuJ3NH4VQKNR9osRUXhZK6Lf83FjGWxNYctdKwR2k9KM4vL8Zn1mHp8uJL99ntGaco92vEPYoJXA5quXcBg3qD",
  "key45": "MLxjMcthETD4RRDmkB7FrU2rNvn9qFKf2Sy4uwHUZ2fwe9hV5tyWvJJf9aFoZDSSXLDkNxrXb7kdDfc3Ehqd1YZ",
  "key46": "5WUWfqLMvbEKFb5vH2pWwNxAiAqTxk857PRsowfqwH4wHb574LEjCkD9SmdGZ39WWFEjtwKPnXC4v836j8SwFEtC",
  "key47": "3SdSu6JMaZxpyuNBb3S2EXbpJYtPoW2omuMKStHoLVoejw8nnrJ59HXSAkgSh17da22MY4dUi27nSHYtWaWyUd3t",
  "key48": "2s1KgDPv5Ya8CvvXLV4ETRnCkm544vCk1j9Uzt6U7ysTRm9PVWNGdr96qbfjgjQHVEcm8haEEfw7eLN8JSmQcPNP"
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

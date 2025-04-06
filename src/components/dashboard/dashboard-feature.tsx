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
    "2BA8mxtpGdGyyGLPPiapphy3ZB3zh12FomzuD3QMHTr56HTwHXtNZjngrxX9rw5m1396Mr2AV7QJjBA1aw6M6YoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SnAt5ZVaePvgMxJHJHSZ3bUuMkaMUGcbQbuTeAeZ5wSSXbCAtKsmwhpz4qhZCAmXZGZKxC6pthwSrvs7cF46ahG",
  "key1": "4bDzwLWr7nrTE6A3Vyr9CDhf1FeTJd2h6PyLJSTRWWNRFVpF4ZNyrc8JD96zPaW3FAd8FKzVk1XiePawQQQbGWZm",
  "key2": "4RvFaSvySVV9yH87r5g6gBCm9FPX5ySJ1LYPnmFCB4WhYZ4f22t2inNGo9MHswW47y2BXTahaGCV61mwupof411d",
  "key3": "3Dw57iB4TbkKZyJR617qptP189NopcaCAEJpk5ghJVETAFNsxp9m1qQ93EPJNzXACtWL7m1nVRUHYyb2kfLYSSE2",
  "key4": "tXz866xDCJqMDurBG7R3CtF4v9Ay3UBcwsBHc3WXXxSp46MtpTpAhyXTX7Hx7FuCJEQUtQtBNB8pqSv9bV8je84",
  "key5": "7FNQfJHDFj3NagVYYRp7s5hhwRzzzjhAXrrTqEmdhboUE95H1JbFxUdrWDUXhQ8X78EdYfEq9FxMfCk79Lp87wi",
  "key6": "2MNaCXH3i5MXFB38y1M8vPkhgkVy1p6nJ547KiX13xb64bBrx6s4sCFk2B8pBZ2qxAaU8AcMbPJbESrcP9ijMCMM",
  "key7": "2A6vL1imqK8Fq3wYeDmnMDf8LTr4BaZWv5afdVSJmdicEE94fW55sg3QhdKQJXkbcYo6vfnRJvWCLwfqFGKBAfTa",
  "key8": "3VKCtAZkWnECBCEcvHz8gvsFNaEMVsmYaeD2B59D2WUdLziJ4yXv8WVVuegqmGPcRTsoQScw3Wx1BVtWT5cDaFNf",
  "key9": "3HEEHoh6zbr3yMfRQzdjUMZkStPvZ1Lp2Ht33N912GiGdnpfiox6EoQNKyq9jWcGWSFxwTtu6EkHcVaZRR3RHQqM",
  "key10": "5QzdoJbZZDUBivXo8WYt2emtqhnFFQtNHxArdLiz2hQuH9wdxmzTmWz1KvEzYLe3aPBZU2AVNLLXnEki2bjyfLBP",
  "key11": "aAZFZE6yf5FG3dtCvHgfVcbKQoMAyHvhTVNoLHg8azehzQ55t3nJZ4vBZady6dtX6nnVSTzgEUrGKuboxn6cbkJ",
  "key12": "2ZLMoNQVQDvVWrMSHsWsiruajDYvj5So4jBQrrPPp584keHdA2jVKgTG4Sa98ybFauiyzrRHuWJtEzjcHPpjxPsm",
  "key13": "CCvFLjwTwfJpMBp8WeKyrXPT4pREUNTFgguykkHqfF1Av9tLyLX3RmdNCXShEUspUFMyjMRdmipN3ptrLC7oBT6",
  "key14": "4CsouEqtNkGvSiZ62JEFsGfQCHQYk4U8Y6yULGb4btWL8CVDtxpP3V1N1hCEmE1Ft29fDCuWvyQdrE8DNYzUANjy",
  "key15": "2322yMTFmAgoNj9gAjPC8mR9MLsFUK9LCbXRzaydvi9HZH8RQWyqcT16ZZrHmQZYxVFQYXUDgUSSeBajhpHXVAdT",
  "key16": "5XCoNeyZNJdhE8mABbkTDeVdWZMDQzVKHfLQwYx7gSYRUKUa7trJAhCZGTJFycdVhGvJCU2g8Mz4WddA4sUFRV8Z",
  "key17": "5ZKB9MqK9xFPL5QRtSknL5BvSb9rQoPoF2x8Wp4xRHw9X4vmi8ALocZGeVuExaL6ABfCneNj8bFPDpZyjf6APLvx",
  "key18": "5K3ReHdp7FQCKmWr2vt9v1VuAZSqAr7LtRURjQZTB4tGbG1cvak4r7jJJjPcx84QXdGtCyMDyUjBrbJjvQLTkQEW",
  "key19": "5X7nE2pTsptKaQsNP7asQa6VDpJthY6emXjRq1PKHFCfDMjxcSrQEm4a2mAdXLL6yFYruByXotCEUZhy4ruUWSRX",
  "key20": "5XNAtsEpiZGBhLJosh59v6ogEJEWRFgdEL6bVr9c5W3ZS7w7oD6wt3BA7ELPZgKmQzSAUddUPf2oLvSPH9vUnsuu",
  "key21": "5UGxk8hf6kkB9ZQrc72BSqLkuWih1khPXDVFEXLpzuFzCPR7goCzR7Sn83D94yZc8jqV2p8fYLXi994XnWJDuf8e",
  "key22": "q986fkKoUaKiUr628v2tEzboZY5nmim6Hn3wfNVXSDTkxyRsMh85fgKFP8c3rJd41qFNmgSuzxTu5JFeDrLthWV",
  "key23": "4YDHTxVi9A8D9YyAtw5zyV6wzYX4xUBdGfYo6u1fxLD9B9bNR4vpDWSDDsArAgkHA6fmPfB7nNNTzun7mLkmBk5S",
  "key24": "n81xcSvd232AqEmP9BarDSHC61pdCYd7M6yjvotwmH8TR1mg8Rx4oMs1n1i16epM8MRs2Zg5AMnMwHH5Hdo4ztB",
  "key25": "5y7bpysCnsg8BoEp1fL8yuo6iBBiMz6v6Nr1kSLgQSyRAQGNkgcmse3VsJCaXeDHEJFmdM2moRXAh68LqhDfSbbY",
  "key26": "t9g727a52oJqxBytzLVqv3nCfxYTkzfoQdBMSnSQqPYCZ2w1HraChY6uiFagobHRskZ8TmZ2zAkg7ypeeHigc8b",
  "key27": "3ANSbsFFM8WjuoFzPmqY4ikAggqBdMcwymTvGz3aaXhM4fBU9EAkkwqhSnzxCfMUv4rrJBxg4s79unkS4JszQuTX",
  "key28": "4Ju26kA6Bo9m7tb2f98e95zZ15gEkcAtDERPuJ66r32p9aVFQ6LQbxzmv96Kk7NLYHn1dvtrCiZVGERWU1pafgDc",
  "key29": "3xpDbesruAt8ESAATPiYqT2jV5emkPrKKEsyQkhaeqPq19bpm9ymrkaa3VgAu9B53NjuPohDYTbmXcPVuwDPVGDm",
  "key30": "56gNGbw2UknwuNs2V72uCSJWxiipMgp8dboDzHHqGqNN1Azg6cXPHuEZ9kV4YFrE8etabkbF1nC2grzsGA2RYe29",
  "key31": "xiz2qgJvHta5oiCLqCfxTNMgUhHgVroNFDh1fGJGo66Jnu83ofC3LGPs5jRQWN7UDKGMQ3CkuSWg4KERP8eAdiZ",
  "key32": "3MZQ6p1zd8gVtVX8aDmXtoRxyWDaupSmahfJERp3deWQba9sdA16SGveDJ1Tc9qY4XnMHLz2WNuwhZ1uckMX99V7",
  "key33": "8Kua6owDCkJmRGq9qmTQMdp5LApRUzwgv74j6JykEj2yn5Lo763xLorSn6wD9Ket1HLbNQvXxASUFt7UDXH2BNZ",
  "key34": "62vYL2kY9JsY4HdZZhbvCop6tZyWagVQ5uDQhdcWQ7BRfVeKC6VmWEWsjEE5sjuq9RevG8PTVKumWybmANzsVLRV",
  "key35": "2vLdNuj2r73pHV6kHBTeDYUmcbwUJ5WeqW35exxbRQToZp5vLyxbRTsynorcBytQzWcgiGsYSt5q9YD8L1SWSySp",
  "key36": "4Mk7uXPaiSoUjmfbrPXpm2zbCsHsyPKNmgVeCSq8FP5Vz9LYhhbFT1J5smNoYQk7na6Cg656JTtmbqhCKpJY9963",
  "key37": "xn8CQAjZYfBvem2CUmDtpE6tZBdmUbynfHVhd8jSXsn1gresjPQKcT7MU4mHH4Thx8yE9zEoST78nSGgJZbtLJJ",
  "key38": "2qkchjpKYtMEAd8i6sTu39bpv9zm7t9vSMh5j8Ltu4xPbLUJ6TpvR7eTYqYeUeXp7FT6Mopys8n3PQhQAshcxUbC",
  "key39": "33ZtPxdnGCkNFU7nMNPrHNW8dgpfseVdpekcbegFLUhSaeRCZGpstK2LQ45xS7zTUybUCXkhiGWb7mhGttqeQbx1",
  "key40": "2P67Zuvth9u2YknspDNhYsh9xXmEBbzXe1vAnAWnAGNCKfHkYZrq1RdKDpVvknJWKFUikMe33jdYDfCukAjReFt4",
  "key41": "5vfjWxcHnmJfurdgwecY6VaD1mAfLGiiUobA3cmc5Bd323zMZz47Svqr6D7Hd2re8J5kZQh5cVJDUa2P2Cn1uGGr",
  "key42": "jvHQnTZTTWhTB7cJcMWhyKZJFXMv2DsoVTxo1uu4e717KxCBBSrEiSF36UyRA2DYKxkaU5SZVxtJDxtxqhw7sRZ",
  "key43": "5Pmiqn6hPgKLCV34BkyYy8XhZmg87uqQPsAs4Wbq2HcWTFp1aFZHLRbDBGzJSisQxqNr6824eGUTSeiNJcegDeLY",
  "key44": "3GLu8FtQuZfPbjWyXkQU2Ae2PYVqRcVHtdB67b7SmLvXwyFKFe4c8htc6Xc7cib8ctvYELcPKCN22yTv8LC5vtmJ",
  "key45": "52a31DJD9g9DkHNtZMFs35CMpMqj2Ye4DDx1u2efaMmjryFJf71NjLqFQXJRKQA7TW7Cr3TNPyEPCj6UyrD55yFx",
  "key46": "5t918obehrbMDM6zxiS3tJbdL6a4A2dqM9AJCM74chPUiVUudsCPqv55QSowqsKhm5WNBTAamZ2ioxAAQYiRXUjf",
  "key47": "2ZMENJpDexhCs4maRpuQYUwQ3zgBCJMYjFLJu8CYGuDTcStBHrUPsNP6fvpqE8EJjTcDmPyCXWHzijAE71z6hpN4",
  "key48": "22LiwB2yxKgUBsvqQgjqvirE3rKrWJCTpoGD9qf6KXBuY9XTfs55ReTRpzMLsCTvqhrEizXQjTEh5M6mZ6hmRaKP",
  "key49": "65GL4Z3AqpJWJUdSt1vvKkLRfNWngyAK3QJwDqPrJh27DZv64La6ykJqkVpxFkn95XdSiRvtLwwmHmjSNGWf7Jre"
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

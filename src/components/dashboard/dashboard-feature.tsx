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
    "2aKyeo7uZ3go1mp7LGa9NewivwhKMsuqi1toJu1q434xqjPseNJ521sbrJoo6iVMBtMqU9ZMqpQkWK2GHzWxoFVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iV9Gsakb63a2Vm1AN1EpzP7H4AqVhctPtYVLv7hFpuDMfbbsEa96KPwKzVyjS6yB4URBCgGL8pwD3UxpnYqfxcv",
  "key1": "bsmybMNJiSGqUq5vCt2kGiVCkFdnJUfNXCMUekTnLZV5KAUjhG7PpiWdNoiMEAEzfK1aJUWfpxxo9Fn4mmase1i",
  "key2": "31iJz9ckmN1XYhA3Z39kUzWouXYkahTDetfC3rshhZjUiofoDYiXsvcfSvcaSAEqW7wn5XxccANoHnkzU7poxpyn",
  "key3": "52xyYhEfmrFv4GKpXAH6gnpofTL7TTtvYzixd4MwbKyVRqk7tCWaTxBPqEw1r77hpKJUWbEYF8f28ZwPASdgMQei",
  "key4": "466v4AqsbepBBCTRvsS4nKA8siVaABLUAJ46KoLSw2tKKr4zQNj7yVNind6c2adUAdV7iFzGDB3hZN9vx3gbpp9",
  "key5": "4qSd1U5xAGqDhxcqqfoqfZ8HP7eo63tihrbefnFwNTPid2NSvP67oSFT5UvkAUdBV8SjVwiAVg6Ytm3weB7ihwwH",
  "key6": "sKP8JXbdcq1f9GVtarMd6TatiVvVFV2YysjFyWuy9PL1pCeTgzcHNez6HK7u4SXzJnBzoHJnTTptgpTSeYhibRn",
  "key7": "gDR9Q1LHzn9PYERpu31LarW4LsQ49ewfW1tpnTmrBcpB53PeFHBBA8DqZYcNtTn5K4Anhvmc6zGhLXQr28Y7iYG",
  "key8": "33uzSLbcKZrF2sCrPsh3ANtZzSbdhHypRJjHDECmbaAT8gBxa9QG1CgMuCLoXWAzq5sWZdfQNjp5LtLNJzgyvyzo",
  "key9": "35wufymQYG2zzRUJpkJH8oEfLLRyJgTpqYuH5iF1VggbtKatHHpdJMgbiW76cL4a6wuXzRQLqo6UhUxrMrYGQH66",
  "key10": "3bUPwHRqg9yFAZ5H1MjCtHNJMktvX1AwowqUcKR9V8fSinUujTcSaFvxAEvaKWkdTYhZV7fy8D8tJh2jENzJ6Jzo",
  "key11": "4AAwVaiB17CW7Qu1q8jTmdTWMjdrTmpJaEp5GJu1Sk2QPmZPZBtidhZFbN6MJrvJPa3jHBQzXq9xHY2XoBD54a1d",
  "key12": "3aQevCUJauYEq6g63Y4M3oe4dyxTsRqwLhDxxhds1SQZQbtmFfBPWanffCWpAVzZFJUDHCXAQHxs3SQS5X4iaNuP",
  "key13": "gvTUBvV9iv3axEzr4hAUCb8WBhCZgG8Dp2WJ3oW9Ew9DBvvecTXpkFuvyJJYnrFtq6YTbUhNmCUwwUMbizFvVfG",
  "key14": "3eeepd4vdLZ695Q9TrLWQDCZBhKQkjiSEW2RXoxucRvNAS6LwVYLKbYiVDzUufWwZQBoMrVLhvLWjpVjMSWjMS7S",
  "key15": "52Drq59JpboMzfQEPZ3GemFT5oLxRcLKJ2dPg79GTKd11Nvw3dLd9NNoq67vtYS9g47R9LsXQS7tYRaPqSy2y88R",
  "key16": "3ePkRkh4cGDEzATfgRVg6fyLCti18ZAxCW1udZsg2WpqmjNAUNubkX7pKfdXdeJmeVKTft8wUUsUbfFHFjXeGnSG",
  "key17": "39fTsBohmMfymCGBWddtP1oDiEMLZnPLhbZpoD63bEx7XQEfg3rmPUG8GorvbH7pB7H176kTZATmY8f2fdQBv9UV",
  "key18": "5Uc5JW1DCj6RvNLLAXLPcqUENsGSzTbhzKqwEJSw9DwRXvoudp1GF7mLDAntXasswtoBNRTbxPcJpvcsHpTr3QDs",
  "key19": "347NZVHHzvkJrNYux7qdxco6xYXxPi3LjzEonixLZKijNfNihLLmksTM3Cg8Y2u33oqKtPantCBVEbZpkMtXpxRo",
  "key20": "3C2qETQWqjfzQF9gJP1rpGu9hLzu1TTRfjsDgfD1etaeqx8cbP1LkpPV9C5LyJPTKMedRrytMe4QNW6SDXVrA5w6",
  "key21": "32KRu36D5jaU8KkEA2KY8hbMbSLTELZippXGa2PcWNK9EzpWizbNoVLnqbfSxtGdPEqzxHKWFhA9eB2QUBfBVg9t",
  "key22": "3EJJ3jbCYdNmr9tTzoXP1dE1WMb5KG6p4VtzQGzs5KgHwqHowa88VYUAzDwz1ffvoUq1aFc4Xad7waB74GDkVacn",
  "key23": "5cwJbi6PdXayq56rjug1inGpycxeTsZ7Qu7BuEHwVvb5Akq8RThv8SeCj31s7LYt4APo9wSv5Nuji1V1uzKAvNr1",
  "key24": "61HtT6JME3oYbt4uhKV18NvP1DD74VFoE5NnVQ1CQ8B55ejkXpa3KCMKr1krXTXbPfRnStSqGmytsdMQiytpgJMN",
  "key25": "2pR2U9dyJJBSdBdagc9rayvK3TKoNSTtHWKmNN6xV1gxzokNAoJ6gu14yccgfdkb1hQKwgQcdkFaaNPkjSU6njgN",
  "key26": "2qoJDbxobNpPK8uUsW1frLZZpkjKT7Sd9r7hpS8TKVKWvN3v7PWCHURe8NMDajnxATGt4r1d6pZ66ADhLYZo3wsq",
  "key27": "3WBygcktDU49QCbKnUizUGAyg5adrCBbJN5KHwWB3X62vgJWfq4N91ACjc9ZJgcP2PmBZh7NJ5QJHKENnTfAgv9e",
  "key28": "2kFqXDnNS6BbCopTGF8nQMNViMRBPXZaoQmjkiqisF16zfg8sMHE5JGYsx5z7ooufgoHHYE9zYw1zjXZgzkazkru",
  "key29": "5bYesomZmBY9f561DWtHLPD4iPSFpt8EhKyxV2fdXxgGaR95VYPGuXfgvrsVGXYz6FbJ19yDg2E5eBu2xefpBkFF",
  "key30": "4iSoZ3c5BmFQyQSZ3GyZrEQ6p4YqagNrpxP575tQjpZrnHDV88AcuxJw4f1UDhVaz1ojNYQP4wZU55c4UKyA8x81",
  "key31": "BQ3xpzHaMbxBRBsoGw1M38Q5W9JSuzp1Vxe96TMa1YcxLEqrseeer6ksT8eS73gt6rriPLzHXfi4XT8VBCVDPQb",
  "key32": "2RdniTyHf1rwSUJ6MH3hFQaEd1Ck5veZYjHQRcf8abpvrCNTv27KKGQMzbe1qgWNBqfNJ4D42DZ14VRVoZZdCCcU",
  "key33": "4n39dtnWsQUwARuDNjkDTus2Xmu6vCKf9vJyAowGuFXTJN82gXis3AzYujboBCZySMxhnk51U4DhQ9UUubXtgRji",
  "key34": "5t3zZAGgQdeHXrh1YLwazVKvHgLzwiQj6F8NYv3vxMy4CuWcQMbnzYqq4BJ4MMy8hXV5MbU6LkJSp5wxGqA72oSi",
  "key35": "5p9RUZJNmANDvoarxuitWE1n84diiGft3kgABhQ1ipmLFCRyh5zbu7Bh1udPVKD91WPU7mjEYHH2KqpdTakmcbw2",
  "key36": "2eX4DREtD2qSKgmVLUJxxbZ1s1cKosfKFWzxQfcdNSUzT4DsRtURWb7pVHEPAEicfKaCEinTEruHMMpNtgUDADPT",
  "key37": "2AyresFzErqDNm4bLQwfLxY8tABpenyE92Fd5sbXCeJ6C6hwWMwKApFM4mPXRN7uKJPVdJdPH8uV32qD3Ncm3dBp",
  "key38": "5chyN5rtw8d6XmLP4Hy8Yt9jmNKHMoxpq539bcvd9d6UJYShQPfSnkh2n8krPVB8zMZmJDABiqLkrFANbzgacKQA",
  "key39": "5hVCjXn1wtQi597qsVszikBtcw6STdVRxTjMLvNyotePeLJW2aXQRqHRErSPpaJU3iywE4ExDsNZm31qFhjppdTn",
  "key40": "2wrAdffAGCyAQfcSKGTFjTTiiHfo1Gvijj711fECsbjRGdh6tDgu5WszAX3Cr5pFyNF3J9wBuPMCBVLrdayLCkf5",
  "key41": "5qqitB8C5KMvZRTaNKNK9UBafeCWu6M1EDXUNsr6xxEYHp93TADjgonEHt2dpj2v5RPB2xV446S1BRx1K6v74WsB",
  "key42": "3zzEegjBedpuocKTZATqCgxQocAL8WknrxUReVvhEXJz3gtBb2XBXY6PDX8jGucfZVJi4vMgFhnEMQrVkDZU155t",
  "key43": "3HyahKJw3vZWAnhsXLBZn5G6fmAshfTFEd8gsNpYTqqPPiGxjJgqGUWa2cQbnR8t1p5XVQXSsw7aXPzhNzMP741G",
  "key44": "2fRsGhAVwau3bJVBQs45QoqJQSKx9dTMEmefgPAMSE1m2eL3EL5USDcQa3XJqimDp6FReS6FsLjZwpNYNyt7Z9MW",
  "key45": "56tiinnWhbAKthJ7dEaoiqaMrfaXuVnBwqgm3hFYrLT7nWUzt7aGcGph6MZG4EmEHYEGnN5XEa3sPhzDNj7ZLz2u",
  "key46": "LYZeLagiNdLaMcZfmp5xDhP31ddV2G79pC16xSVMpoCbWYyfyysbaoeuZJLZxPi7UtFT5PTi67DtFynKbZj5eZJ"
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

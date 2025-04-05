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
    "5qUyusv1PxFrwPw2rGUyU4eeMvTwXkjbASUhrH3HNNd1XYfgjaJcno4zZYtyxuaPWNXxswm7HEVkxagc2kNVt8fR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zw1jZ92qKyMtJ4NBo1qYeHmvWfAGnGpjx4JqxDJMEvxo4NBeFrWzFyJkNHfub85iEtcnPzyabzUvHkrtHaznDC9",
  "key1": "D7kCy6rZfa1kRQbh7mAT8YA9fEP6qGMzbwadX1fr6FMCTWBkHVGwqgnFv1rzhdb9CnvMd3P9BMJrmdbuyxnzoJz",
  "key2": "K94jnydcCeuiEB3Yk8u3Wn5ERLVX7qdwqP1gdwX4bGRqZqZCiPtuDisYcmsPWjQQ9K557sQ5rfVXsEVRW4vgt1X",
  "key3": "3zWpY8ZAuU4uy3vYZGKr4dPVuMQW7M2idfPSA3hfWbAD7rM5TxPtwupAVE7RYY2jr6r5gxXvZqrafKFuayNhYFwQ",
  "key4": "4D1qMpsJotkEyr7NACYm5ZLw7PHrBG8f1CHsz9J96wCvhSCSFpTwmBaPiuJtoPqdS4Aw4w3dZn9H3oTfXot2PuiL",
  "key5": "3z8Vj9pGANeAmKw9oSuLsWhikUrUxQ2sZGdqdmQCrXWXyj9JertoUfDW5FVxkd2fRdX4W5FUW4rc27WbZ8GMX5e9",
  "key6": "4CM5g3GkyqmKnu3xE1VYhH98oigby9Xa1UNwuo6ACre8vkBynXRdcdgAsdH1ZFJ1AtpVe6eC7QrgnCwgKYWKDdrx",
  "key7": "2sdum7cxFv6zBe2fKDRyMZ1WNZN3o43qBtb1xMQHvS5dJVCSQCetH3LF1HHnG2Y9xHCodpaGpWeiYaf6fKxAMh9L",
  "key8": "5tTEer1rCV31pkWSS7W15EXmWv8YFKVxuSbkq83t4anc8H5BMWt9NtgxMd4SwXVSawaufgwhVAA4YRzsemFQjG4B",
  "key9": "5hejAGhgMSgcaXvKk3Co59uSmTR3ZouAc4LMsHbYa9R4TuPcgw2Rn2ZNiAHLtRvasM6jrZ3q5XJR95cdGB9gxco8",
  "key10": "nANsNRC9smks9VW3asiPWgJ9qSEn51jW9iC61UDVk39qMrDBA7P1wTKPTC1q1Tziic2cEcCzE2ypodPT6ag22C9",
  "key11": "65EzFZdT4apBNE3MxBvyv2eqBng59gqWAawVxM7tnSU8iqJ9wz1HAhiJ717MBm3xZMQv1B7iAB9ifDVQm8WKMjP4",
  "key12": "4kYoeb5ZYAAebVYJLrnrnzRNmqUthbeEuwAn1RStrkEgWRDyot8BQ2RuHWn454zRVu6jVZxXdrFUjg86Ripkxr1v",
  "key13": "2DRVNFaCZbiiS3KkbqoDsXagBWapY5P676XRvtYBBptZTxwWTvTZvAFJxsGFr6TtB8FN92dnWW1btGSqzQvFEYHA",
  "key14": "2zg7TeLoHPtvZfpCTDSAq9FUiPHU2n17Rz6tLpg2xLiAxaV8Ztqa1tC729FWNKAFYSXSioLETMQBFej5fu19oGUa",
  "key15": "4STzbAMtQF8aruK4YKBmQaSUEoxNNWkZYLuYNzgzfRQrLwPtW4qWu2tFfTeo49y9L144s6cSKi2dcyewC1ZPtuEj",
  "key16": "2SGswFMB4dbjwH5gbZoYiif4vp9vtygi5HeMJB2dtceVayT1XpyJEf112vsLTXU28Jro27qmFuBfmZR7c4KVM4Mh",
  "key17": "5CVMzFN8GLDSHXpXTHhzew2NPAxakw1qkuFtZqmiJzNVsWvbt6pWSXaCZtdXYQPdPW2YkhSEB7iUEvC7BpDeN5JP",
  "key18": "5mrkGKvmLuT4ziZ5hP1NmGgQQTrwTYvjJ9dZPYsghrHgrsBisGCu523QNRyDjjXDmqeL5ZpNXbuKPe7TVvkCq91H",
  "key19": "T3tv8GcvhPNknmZ7ebAsgUAcXT72rLdsZo56ZkiWDLbpo8KNkX5TWX8SZFWDiBAJkeoeGTR29MdnauiAEEDzTvU",
  "key20": "3WW4pRD6vetmNS1WwpQeEBokkH8ShjoDxvC5Ue2U17zRPFHYuDgosLkLGNGzHUxDM4N9ZgM9EdwBx6zbUFnrHYLJ",
  "key21": "A1dcnGwcuGX9aTbSHRVAUG5RTDma9E5fCvp5qdVKErkw3Md7he34kxYTieR1vq38cnGq7BmtxH7CEDGpmQtw8nU",
  "key22": "37TxiJAnA5ariKocGGg4fy8wGypgLdryhbLVxMHS8tiSZuQ4uQFjFr7ySgBscStZtqnbbsgRq7xV3Q3SqM3j88HZ",
  "key23": "2J4322m7dgwAa7YZz9Cvh62UzrLknpR92kMtBTA3CzrJasLpdPTE3wNwRbr6D4d8fVA5hCRRDRurFmCRxkkxLSKK",
  "key24": "5N525ViQrcVbMZMEw8nJaE7AXyF4BsggDyfp5vzGj5CtguWKEKXrBJdrgBmgfgbCnaqQm9JkUAjxYyHhLYFLMQSU",
  "key25": "3DWiLsN2cQ4VuZnZCW49vu7u5VoNizx26HDVkUwYeF239GMQSio1jKo9pFLbCxQHGCXdL3jhtsck6SdiihEzn3zA",
  "key26": "39T4FZY8VVz31H7HJiTt4WeSG6n4Twq3oSxvfpMRWsbgad43Wj3RDEQxgE5HLRc6LV2AuVyDSRTkbPCpVEZk6BdH",
  "key27": "3dy1g4MBgykvYzABpLHYMzQcxDHXvyF7s7V1Xv1M9Vmfgia8LLPAgaghkNiCMZD7QXpwQDrPexcN2DsHR62WUDSp",
  "key28": "sxdq9JwFQTR3YVB1nEarU8hBzUThUskH7wMkRfxizGtn7gH14jDd4u8jezzxdZM8Q9K1ZsJm9LBCSCvv33aVgKj",
  "key29": "3nRePhzTgH3GjfyhFmHgB7XZoyViVufUwUb9k7UdpfC71gJF5H2XYiMDYJfvtJh9uYNfC3Jrm9p5YX5hgprNow8F",
  "key30": "4uCGciT3MUNqHKkZ1MaZvZSHQ1YWNtBpz4xB7e83fVYWE8VVLtvRMxkmXArL8mXRihe4iiupTa2iVJRtCNwRaH5R",
  "key31": "2UABiSMJXE5e88m59mCJoLnf298nF6Vi6RqoyGTvnSQb52FEWHFt8rovVpunhAGYAUM3zV3Z3vC8t5NZfoEiHs3o",
  "key32": "3WpK5N2LDD5NDynxJd4gJqzo1kWaDQhnAxrkA79bgBhGaNBcWGieLDydVw1bSDHrspBWtgALKMZrhN55W2Gb6jwh",
  "key33": "67LqL3js4WJDs5SzHsnKAQXNju7ckWnRCWSoxzYeDGWJbvzx2WUbGGbaBcwhjQdaSEVaDJ624Z5UG34i1qtASfSL",
  "key34": "NnfjFMxxATY4wLMCTeWs7m8YqgfpigCLMfCmokzFtux3vgRd6MLKppCLdfq1YUJmx9VHg1CtEwQSpW9qEit85uX",
  "key35": "3V4hZN2oFGVUTq3jfVKCvPunMBKnDWtc13Z54q4bY4FqkReDptVbHoufxRFC6zRP2ZiHkN238M85xPBzjTGS3TCR",
  "key36": "CipghxUU65NcPYuLR8nmL2QyTxPGPsuTHqA4Y4e1MXJ8vWUr3RhiC2QFvGrTHzzwjcieGqeqfmeEA4TZzQvpdGV",
  "key37": "2evn6QNMs2UtoNioiym38D3M962kGNWeT6cfoY91UQzrF48eNR3mXs5P5ZrZoMWs1zPgY5pGaWSgWqwyVWpFyvqX",
  "key38": "4XdJuK3wyhbhXkJZXovy6oJnx7MMPqa2AZqofkaw1F3sLRKFDU6VuSnzz9K2bhV4Jpxp2vQXywzguSqCVY74nLBg",
  "key39": "2ZzpNyQQHysBK7hPzKfZCWkVEUFn3B1Cuf2fjpxVK5x4nmWt53NUVCjgweWnveQCjg2gqJuHCK81hvzzAEajrP5e",
  "key40": "5nFGbcUrRHrQmMGD1JJSXUGtmdRrLsoDwWb1WtuAu8CameX8PzcbaMGszhvbAX9ZvpyZa8BHcGHe4VNwf9AExDLX",
  "key41": "3AnCTckjsXHQbCwSBXNEiosRfqQAKWQfFtsfvC9HKMu2vkphX6RmRsyxMx191UoB3NgzHmqgW4w92qvG9hTorREE",
  "key42": "3RhFBqTYEL6pKa5M6g7J4ooUxddBKUkNMoaiQKACjxYU5yHPYFXMe7iFReZ8djqs79FpMEQa8jDRo8Dh1SGcALK6",
  "key43": "49Vj7855bW3wgyFY6RiSQSZAfiLbyagjzf6SwtFcZUfZvkZt3PVLZ7Au4ixRaAR7UTTftH2u5WEc6FmtdMmST9iJ"
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

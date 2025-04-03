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
    "zVXC27vMHybmHDHoZWvTrE8Wn4kZFbwnFCUTbQW6WX4qaEzE63Hkp5ZjjTqzL8BS7Ro9iofi1oYY96oeFxdSXnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oratMjhkdPc1RqaV6LG746b9DJi4iqQEYqLsMehY14wGoHZGy9rDWAZh8pdnngh7htDReRKPhMcQ3J4HDvmPe3N",
  "key1": "4GuVSuGo8g2N5UZLhJv95YjwTpShJYUfLPtfCeoydguoGyihThhMXPtAh4qtr3iZxPM5LDhDbkUyu9d3q9Hj1HLu",
  "key2": "5uc4QUrHWyhw7uxpaSVYenFNU9Upzg3wMNJaGeRCAxJup5n8ZWGsLscNpHcNwPTMLvPz5KDfzBTrMD2eBKwvPB34",
  "key3": "2AAwrHAoDNHqGfoEEWZSY59Z29Ua6kXmVskppZQA9dF9mRJxuTsqCmt7ecyZnx2vaCy9JCNgo6w4f2C62rhYs795",
  "key4": "5rhNZGQFY327PfmaZnwnhnjqZPU2aAg7L69MZGyS5kL8Cfuf9Zz7Mqac6iRxJDYkdpWApD4v7TvUt4juPd1iXVv6",
  "key5": "31fGR2NVPDqLVXHw9FeaSzu7uhVeWeL2kWGwRcA66puQ2aycgDr9Ct9U9HTLCiAdb8oWZqTtRzrPtq1Dw3aLukXv",
  "key6": "21NF2DEAAZqnLcFFUm27ZfJjdpAAPEYymbnrK6y3MfwXvwNnY4fUyqmWP9NVu9PCPreoP1s5SUEuk4sqWFUzTB6G",
  "key7": "WQWBNY4VRns3AmCHtQNFfC7DbCcdhKkiyCKr9JriqM3V9PNroBK9xpUwmBtGqVyG8X17JBTMX3A81uC4aEF3jAW",
  "key8": "RTm8vZAakn1Wwowb4ew9sw42fkuNdBvLQvZJn8w9iapoDbMVmQhSipi86vxC85dXM2Q7EzPLS3LVuDTHapFyxZT",
  "key9": "yc7ewA3amFcwfQNaTfqzy68JAnikFFQrKQQPBKfbUfb4aZz8CkBEMmnDFWibpvNxzJ1NQ726XJmJ14L82nb8NyJ",
  "key10": "3neGgWFPYFvA9p6sNNZynZF9Jw5TrASQihT8TqD78GbuexsFji2bxmXDqzCoaskj72ntQc3bNt2junfprQPSwjmD",
  "key11": "4w996xTjzAnhd2dYE9Ve4ioQcXmxgfXAJCZzJ258iGD8dRUrvWRoSGEpjM2Y54S15YVUbung7c7M22XTqy2kcBr7",
  "key12": "57KB5sRVitGtVYjZ433yVscKJddoT92tKpvPv1UqBb3thFHQhaSsQs83NhUUrYxUmcxpogSVsFLe35fqNGi3CYQk",
  "key13": "5FeDbSkymzxAJv31pZQzQhw6g4fEHAAC9ZZusWe4XLDzH6mq9X3MmuTYm4LSkPtMKoMqinVyF1XCip8c1F2Viufe",
  "key14": "3Z5hYYsPzgrYjAX51D7cEJn4n8kxftkqnns1qk7B4DBsYxhWaAxff3nSxqMcafVdtwzRBWaxbaHNj8pXXuqteVne",
  "key15": "5cEwy5ogW5awn6EayCpBtdZuE57TfDW6Bs3wtWUsL9TjKCg4QmhtJvVAeSDu5bXp1ScP1aMqks1Uv3fiHo1wS65E",
  "key16": "24X8YNHY5CZ5egG7LUhjb8sVMZXTSkyFJV2YtgWiBB2v447yTfLpeioAUmpxakQ9KZcNn49WgBgG3erXY456RZBR",
  "key17": "2TBQu3ZaPbBFYRsi2V8J5L9wfnReAZEsNZ95pQawNfaySBDkAnzfiNQnBahG7qTerBAH7bJGteDdm6eg9NzT1SS6",
  "key18": "3P3t4b2nHomDGQcozFJqMGQaMnbqSkieA6h6nLvPdr5nA5vH4R9EajiVozRbg4bE7Y2CGg7FxcLUtd4GUBBo7Wot",
  "key19": "5gKgbb9SVkNBoTeaDwDd5HvPmBvhzNGBcCt2dq4JJPmNHbQtDf9THJXiQihdkpcS6PTzMBTEw2h9UaoQo8aGaP93",
  "key20": "4DEGtvCSNsoSrzVGrDJsHLKGfHPBjqzDQJreQSP9dXLakoQaA4Hq3vEvQq4xi6sfRTjkUq1wUYjSpKjUk7qzC1D7",
  "key21": "5XibmW9wXeqkApTxDWBt5AsN3o5GvHKzDUxMQK7GPicUpKDq66fPFWHVrEbcRmZYfTquHGUAwvinahkDy6f3pFf6",
  "key22": "3xt1MNeb6gBzigz3mDJM2kxXw6WYkZjhShEPxU66ahsu3eRuw5cumWTYEJvNsoJq5ACkFoRQtCHYgdxhNFuEqtuq",
  "key23": "3qWWPSHBY5MwebmYjcb6Jb5yeSGunsWBU4kGnU4JcEAkvk6BvWbzNZc9JdBPzgsnmPtEV567E31iSmz6zMei5u7b",
  "key24": "3j8vURPi2EVTqeqqFiePBLBMdHPfWGjWxFRFWmuMpgTA4nP4b9eGu9VwJ6gH1HgDFuhvFwNNStvAfnQw2C1GH5iH",
  "key25": "4GqAkE5Umhk2x7TWmvKSYaDaRapQzyebN1kyrZEvzzFZmKo9PXPWJ9yFi9EHNL4qLUDgTxjP6C2UtNrnpEdTLNFE",
  "key26": "5Pu7g6gco19hmGpQAQZCwefBcZqgizsAy8wG9ADbJjPjbw4xeT8vMrqYVgrq7eyMeccHfdEXUwffCehY2g8GUbWu",
  "key27": "5yGb7GuECUWz9UyvRcX38M5ngTV3S7R8gSQC4xcQQ7V5gZgxpzn6iXW2xqL2qydim2sK3DJjHyjPNDsxRuPiK9F9",
  "key28": "3fGSYMg9tSF4v41hZwoAKG4J4Sd83BoCcsspwV7LZpwng6srrpsEgr5G3eWytu9aMtKgbkLEL8mTGwMSqpT9SgCQ",
  "key29": "24ykdYHCrfypBbLeFLyV7A6hMVKBncNAV1YxqHPPJeAmdzyRSFpj1T27SFMdyuJNLUyuD37LmNwMDyDXP2ToCwpc",
  "key30": "3BBBuNxmx22mPXv2epGBFMexwW6SMFPquVutvdWDzrD6RjCVPQCGnmRcRJH2S1RrDXCfcn8suYziNztFhwhAZYJa",
  "key31": "4q2F7dmzSFbA8XofYQqTdWHggX7vSNAAFVzNhAjfzxCSDuU3G7BbQEYN3etrubFJFyJmYwFcmXfAjcVqFnG47XSq",
  "key32": "UaycXnzMSNsisYr3jvFFZ2w94oHLRHPU6TMnVPNHiqdRq5Ne3NCueRz5vhbiGXPWiyHSptY5jEYk5GyD7rhn7kX",
  "key33": "2HscHnAabbbqhpWoDThGjcd4XA6MJ7kqQUFURAsr7aikuCfusbrQxZ6T3v4qTj1TPG6bVXtHaYGods4gEpdPvxhG",
  "key34": "5EBstHybccxdFYE53YPFbBPL2yoysjvitPthYD7sHHeYAhnXZGzekd7Q2z4xWjJoL9bzqBUpX5kZeJZ6zxhohoUW"
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

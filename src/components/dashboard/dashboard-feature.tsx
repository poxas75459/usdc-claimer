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
    "5XAf2QTBZbzmF9fjWSoPqGfAojNf7KLWk3vCzd9W71n3g2h4GAVpkxZQrhnQfZ9JvKejHeffnCEVXpaHqEdLa3jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u7jVFxGpWPGjUjaJBGZgGX5eqA6cGyT8U1hF72nSgdL8rieJ2rMx7SCS55Rc9VhBMQ2S1jb1exs4YvfYuRqRS4f",
  "key1": "4zwsbQzosfKaDyAr5ryCYfSzbZC6F5cBFcQM3Vy8YxtRkFmwMQpXwnXxZyJ5SVmXDo9grtW5CMfapzgQBK9oCqWn",
  "key2": "3eAU8BSpnVRiyr5UEXK1vQ58BJmYMN6R1LfaLUCAS4rt9dxTkF7qrKMrVd35wGkV5hvWJFY5nG22iH3dbAoY8RQ5",
  "key3": "4L1xWY2bUpZbtsFdtfC158qLcxNc4oG6Yi77k1XcdpnLrkBcX13sJ7ZXJhfa91XXLaDF75SKR1aPzuKt31Y7YpAn",
  "key4": "3npSwcwFqyohaDXYqW17UL1gPW66mCCAPoNUqpu2EL8wmw3DtJTN4G958QhPBjHEJmo5s932C531ExFLRr9D2UpD",
  "key5": "2Awzxymk1jDnxEHMori7vpco11jsQGdSFQqGXBXWWc3xKUbrL2vcKkh9rycYsfoXq1dQx4Gm1bkMNy64gsCWE6jW",
  "key6": "cKEFNpk3raAmyy2AwBuEVTpeJCrbN9uM7XSg5Myh5FeYzpjoYnm5wL4DASPxd3GFv8kv7BSnrrfoh8g3Z3T8mcs",
  "key7": "5qjzHA1x2H2ZHHHFztQPsK9Z4kYgKKnDpGiDfkZUL6PvMUuyfhjWQfvMT4LZMLPtVHgt37kAMYQxG5o2DddF2GEX",
  "key8": "5oXSUKmrrPH8n6Ao3Qt7aBbiZdGR78nLFirToukG1o54uHP6YN7CbHiyu4pPy8iVmjU1pkjsa3JwiF1vEPtunkXU",
  "key9": "2YTShhzotboUBGDmxPA13vbBSvGvAWuzwJiGsGvoHQSnou5sTmQ9oE1kfqCiMQYY2pn1YCXZJb4xj1xzeCgdpDXS",
  "key10": "5xsyNbXVrmZuc8TWj7kdRuvaWu3JxY9VReq8xDeTLQXntQsg8PSh8oRvioYMQikBqE2jzjjv4yAXeMEtxxLF1KNc",
  "key11": "3biPB69tGaasBjuHF9m5DfvBGsY96bxewGLrj2eGmqpQZuT9kgfB3rkSbYxbGsnHqMKj4ghA3aqijwwxvRWnXocc",
  "key12": "5WyyDzGiQfyLJL2Yr2ugXrYjB7kkh162q2EbuqdepZjoRRX2hK8eVaRnbgpYQHK57SgBySKevHkVP9BupRFUHLLH",
  "key13": "umLk9YsHxfBmNWzfST3RsDcnmQm4aryh1BYz5UH58oFo6cHfRCEWqoSUvkjKgGKekxRdPcfg5WK2xVZsZTC1RwS",
  "key14": "CSjeDW5BM2L1jHi3mYEreNyjG6KJxCDw97PVZXVowtqohfz8b3GnjodrVzugS4NUqsTk2YoUgfez54ADxDrVCkC",
  "key15": "CFv7xvVcgcua9T3PoEhnduk4mpRypVjmyNgfgKamHSoo55QKEVDGvMeyQtcfXA8njujEdCcdPPamXjKqwhLK5yV",
  "key16": "3SnMq6pDCPr2LvHX3eLWoLPQgECHTQzTJVsr5SMZrdaExupkZFYrqeGLf1puN7jEoUAabWsH7sfGhRL4HuZUSGPh",
  "key17": "46M1gNtNqraLx2GVLEFfGxcnvXF6TNdnMwZv2AnWgBFJMP53whiNHD8boLjEehTHUY1dyRe9ncZ8QHoGQkf39go4",
  "key18": "5HTuRS9UgtTyMb4Gipzu76q9GoiPm8FfamQuo36muyx8cNM1wiFhURFYTWnRZWN3E4gUwoZNqZ4szLLXLJaFoXL3",
  "key19": "2UR8RGbgSv3CF6Zks1ZLHDQNyHpJMWv5rGhPyifL3hBABAN1Sys67Xm4U5SMmXoCwcWDds6vz7zkxUfpYhtzJ3x5",
  "key20": "3pRXAXAbZair236UD8714jtnbsxohY32SkmrDs7h8bRpcd3rLjYJQX76mzE86W753j4cypmn91QY7fqW4WKBQ428",
  "key21": "4C8mBDpfYVJBKiABmMpH6QZJRhYgmfCJNf2cWorPz2YhXZm6oCP3DoS85yVf5akbYcziC4d6gbsFn5vjjsAX3KD6",
  "key22": "369Z8GaGiFVyBha9jqFzdCMH8XZCFK86DDc7R8bqGRRKMQpQwKEazUBUoF6vtnDVgDYt3FmZk9BesSA2KWY9US9q",
  "key23": "4FmNoHRU3MP4KVFLwSGd1M15Amb4StFBAmqydtJUzE34bGuKLqhH95nYLS2WMLXXD1NUrgP5of6bF7XLLo3ryC2M",
  "key24": "3A8MZospArRqRNUS12fHtSyW7QLi25bEQJ7UjxbQ8VP9f6423WupRmP1pctCqeWmd8tA9t7Ej7gVXC8izdr7ti5e",
  "key25": "3EohQRx9za3PCKkrCXABL69e3GW9oWa5LRt8E6dh9vKTVtnFLXqFmKkJ1LD2yM4V478gncVvGeaCKhbZCpscspEw",
  "key26": "4eoHuZ2Csut67HjozSYVyFpw61tuaUa9VSJjKFbrjEpe15tEgrRsiJzt3cSnsMiER7cxrmd3WrwhfDef75Abeo8a",
  "key27": "2HWegvK3o1Xfncc2yqDGPtwBWzTDXH6Dpt66CjdrBTLBn7nX9ciWNzgx8Pqjs3qhWCcRea1BJv4W6N4C6DtbnCdQ",
  "key28": "4VoqJjQzZm6PhzGGGRYb6Njd3d1zvxhMiRtYa4u2PR2AS7dTJ9TCA6JMXNJsxzH8Z2rCDXP4nGMsjoXT9dwGRE69",
  "key29": "5xy2dYoVG2F3fqKnV2rnGJoajcL7bkSqr4n5deJR9MN6B76Zmx6x4PD9Tg3ujLNdrHqMBEzzapRgCqaeUhD2Mwn9",
  "key30": "K8gzbNa1biVQDubduUqfaPJw84MLvLBf5mP1XsRfU7FyA2jbvem8AaYDqeFXoQzzM3qdKXHuhdA1M8PRt6ezptq",
  "key31": "5U3ehyCzPy4hw3vQnBZuBqJ79XrnzpPsJ3ZM32Tu5Yf7qb8TwwbdMrLH7KnPXquo9ExMeNoWVQrjHQ55DwCJdoi8",
  "key32": "47ZQu4ZBAgQRMr6PhWKbwsx7KpQh6ET62Ltrw8LdbTXEGqaBSUnKB38z8im2PGGMvm91Q5xRhQfPnTRW5aKYA5BR",
  "key33": "3bXuFLzcKu3YEBvFEKbg2DMtqArbqPDQtLNKZBWazRMgtjbPVNSdFLcPPTUA4Q1KbbbrsqCCW4mqVhrGtLmVfix5"
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

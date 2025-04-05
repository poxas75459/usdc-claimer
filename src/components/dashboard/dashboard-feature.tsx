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
    "ZET6dDB6fBXPQ5oDrKP9kTYbYkVEiuByiyVPg7aXRrv4MfbJhcXm7FJr3abja63sbk8874Uy7C3ZxWbmsVyHTnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7dHarr4RZVyU9ydyvgtEiwNY6fvMetgLh6vsKGVRkE8PoXyNEWSEy3V7LxDHsAUwfb6zuMwUToAzy8PyHQTa3X",
  "key1": "43rvqUXg9nPjr5kw2NHEh8XQV2Ky2iBj9H3GVkTREbVUXZwoXi5ng9iGWSWs9BiaJ9pUoDk3UX2iq8KX1T611QUh",
  "key2": "3BVTjqZopHgqnkYGePJadNqPfyTN8E4sv28vLaAzGQLfnG8z1PoWFRdUqg9rQLeLFgeATAduNNMBkNhL8XEcotNC",
  "key3": "5UHaUQHuxEu7CRnGDtyoZzp8omM9jLzaFaHukH2VybrLr2JVWkzW1hoUwbCMprUoZ9RZFneaH6WfPrAGXHaqv1Cf",
  "key4": "3WDudjUk9q1cetva9F52hxzuKz2EQib5Azjd8C2F43zYu7EeQJbzrK3aGPiNdw38NgaUqE4dB17Lr8pbN27skbNd",
  "key5": "2FFAwgfxQVxXbhQmaZDcYJaPNvcGxMBG3ePsiwduaa3ZUc2jVc3LJFnX9b4JknPhZjgDnxAy3mu1Cr8S1wuL3wtt",
  "key6": "5x9KxCsw233nQaMdReS6ZFYN4YAp3ddqDeMbeSEekijK4uaPgyrdRUCV8iGK1t8sZ1XC83hWv4KYRdA1xWLUgpND",
  "key7": "4wkGjeLnn2foJsXEM1dFjd1GzW9nqXCRSpHsaRfHGjwLxDVkLzWfhtmmYXjEAWqwVu1hyj59xq7sFna5fndaAeJb",
  "key8": "4byTHvqz39N3zit2Hv2aHonLNoC2JMsTGNQdt8QxBFXdgyNz3B2PAFgnJXizS57ADP2wwxjk8NtCs8bVyjFt6UZ",
  "key9": "Z3evj6Pdqqfemsztg9LPoxsLtmRPgwJYMSFX65d2o5gf2p4N5FnYknNe93UAQEf3hw3quCyMzPUe61PiSxnz9ZU",
  "key10": "4Ac61ajf1XRjv3uX2kURrGWTq7MC82repThTFzF34zqQNUUEDPfePibnrQAAnTL4Ad1hnM7iNjojeVgQWNSMMjmT",
  "key11": "UhbKeMqpckGxnkEZPinT7k1dKkWd2s8U6byQCdWsmqWW6GRv7j1tCxQxF3isEbRWWWae3AhJgPU1VeQLTGW1xcu",
  "key12": "qbL2WZqCgM8j56dU8ptdao8DX1D9WcmKSvdMjQJPxfqhVogusWihhYhYmxKa95FK7AaSLb8eHnw3TPE7FnkmWif",
  "key13": "2Kt4xERZocBUgwJhiAuiAXJa6JyMuquufjLT26uiwrWCzy4dX7trk8hXgPQ5YezDdSM3Qy6L1ZG3JUuSHh3iMpEZ",
  "key14": "2h8yGa2ZLMTbBJpQM7HDP7VxRxXKwV2Ea1MA7aALQgd9YER5Xwiy9TPEDA7J8Qa7dRxzeW4mr1xqf5512uiB63uG",
  "key15": "5kRP6wR8NkL8AmWTmJYLzjgv8pDXJtfChfQAHDrsgV98FjDyXZyLr2ovEbEvQRsPTum3n3ieBohCYCWo4uDbB1z6",
  "key16": "47NQcS3J59h7fi8rgjM1xjk5vFpNU4GsGT1XrEAxruGd2ch5rt7y7v5scR5zvRsaaMgXhYAT1TMUSYQpSLo4V2Ph",
  "key17": "21SgXxKg3Cpdg6NgSG6uNNpxxKwqfuH5tugQ6FYLogJCMFShYSfhz55Ub8iWSj3k7PFdUKrQTuJSUfUdYeR837bQ",
  "key18": "4pTkV5CDiSxM2CXCHSW4P8XvHxBRj3bxdPSVfzEhwJFZwCUrFcXyBFupeufkz82kdiGtdPbCXfsbnCd2y1Ydqhtw",
  "key19": "3sm7Zcfb4FxN5qumwznxZqZFCwsdqQptNSX8U8tVMm82qNHondapXPL2bMSLMq83o9AL5LSee4vGzvvy9wPn3KkV",
  "key20": "5S2HgagFvXUjxrKo5GYxmqYK8gfnt5v2nARxU3SWb4DCc5Se1M1W324R6aLQNAA7tA92Q4EJ2eP8B2fHB8CPcRd2",
  "key21": "4b6kjnmjqkXFxhqBPuAHUGFxHQbewoc5Lt7rSDkWpHEaeX46RCh83DA3S73LYGpzLfQbJ66WPmysBMuNv9iuZEfT",
  "key22": "2c2cFYQDpN8wPpmJpYEuG2ow1oSHbAd97sHduQuoLP7DSbk2FmfXJqRd6jLyRjiPmYTjhP56Zw8XgxPxaEg3oCSx",
  "key23": "25PXQgrrowjoKYSqfidutv8KfsmTn8Zm95sjDX5fJ58qoAAdbxT8V94Ph4XZWcU6cgidVPt1VbUrKUsjMd4rhavy",
  "key24": "4WfJYmx9wGCqsxdbex7tArGNjxPSqJukyppB2tZ2GKgQpjymaKeLEoSdJQtpkAdxYHewrfkW7ozjoEWo83pJRWQj",
  "key25": "28DCV3qMTfW4YiVEeNPnwBoS4sd8KJmWy4AkMBpcLmbwpXsP64bHrd2B6tYAUonPs1MFPNQhcJJCtiJLPN2iVSmS",
  "key26": "5vwW8BtX9svwqxUN4zPoBPznYXjTN4H3QCCu2cdxDE1Pt7t5ABJTfetR31mTqZPcua5bPhtVvdJDeQ4ZPTDWnbeC",
  "key27": "1T5iza7CsYMrhuW3qwHhs5DmGXw4oKRKrBc9EitKQ3pppx7FAYKLrJXqneCFMhkAnm6JzmxCBVPDZfPBMFxkAPh",
  "key28": "UPZckD7MTzy5auQzxpHFSvPrffGRKhq45QapPX5otMjEK6JbQ9gaGdGDqH4LWbSWQmrm7uR7JwfCrshFVa9bYzB",
  "key29": "4rCJ96CxaVKcyuZvZpg32cx5AxwEBGJSSf2jpqQbZcF7BFu8GsKKNAGYHH4guSTicyCpUA7DThu1N1PVVPzy28St"
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

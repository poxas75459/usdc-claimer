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
    "418Pwiek1a2dHqKz4RUn5PuFyk96iJkkPSjSzFFDQd8UWTTxtKWvU3svRcaynV9H1JNLBmuY2SKDjG9DE64TrYwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXFxsv7f7KehG2cUTwrJStQy2Q27YK7mYygM2eC6G56GZ5uyT8TGGj9JyBGpBy4V4mcszM6c66eFcECGJGH2xkf",
  "key1": "2JDkN74Dr9cERUG6SetPfDYoopgyRFEbPzAojcrNPHosFPvTUwMBXy6FPW3jmgSgNgJp53Y7LdpSUA45YxMkdFUY",
  "key2": "5tsD5Pavndm5h6PUfBCLuTSTwEMq1GRtSraFzW6Q5ChxaPwWqyFnuUnMrR5NWceJRiU77twuFGFkVrKja1qVFaYz",
  "key3": "47HDXSB2StSuGS6257dBgTT2RDQQDhKocbpe6ASyY8D5tU1vAScgDTtMo2VFLSfi7GAGzpTxBbQ7d7wu2m1uZMqX",
  "key4": "4WAMJJtVRoke4DFijnJA2yaAbBtohBEg6SgnLFRHJUT4aZquTkL4hJMSG88U4cLn4S5DmoFG6z23XtZFVZD4R3Z5",
  "key5": "5MotM1m9MDrFfBGthUhLSrWLyeQcPEnZRq7ZZQVWsL2Lp3TfJhxQXiPpSHvQ5GwzozB8A9U1E5SCFokQQEdtN1CY",
  "key6": "L2TWkVSviZf5h6g9cpyvLmpQJUk2wNT9Ebv74vEGw5EVjeLAK4rEwAeqBw3HrLmNaC1y2nyMoEeBdQPJhvmABms",
  "key7": "448NBj7LtedWhsCAWg2NaydrvjyjYvVV2PB69s3CBmxcKvGbQV6sCwCRshKKnrDtZumAegnvYpecDXty5sTcQTrH",
  "key8": "4hPrSiwFFiaVVf8fQL9pxyn77XocV1TA3NnepUjkFCrNCHMWm5VPi859oZCHKgbVHy43KZy5hyJJ83C3KfWa8yeV",
  "key9": "2wcsSMn4LZnrPXe2T8k7Uvvo5qMJT5sMEtDfRsTqMsvNBKxo4GxvM7atxpcadZJCDX3xKKCZejvxC5rWtxtD2aK9",
  "key10": "2beN7pcBK4EJxaDdqWs1ZjXmqu1J4eKvLnPUKDRB84nELC1zHqaTZzEe4rdLJsUdj3A4QAJqZCC5wCM4h9SZ7PPa",
  "key11": "n2GGakYRyX9V7bKGbBaT4JQZuCEe1d2Rz9qRnBckskAXzykXw6HCMXCWKdDVAwxHQf7663Ej1MMmJ9uVh1DWSGi",
  "key12": "32s57wQL2qTd1Qfm7hY1dWuHEAetvTsLR4tgkmqmmFDTRxTv466vUkdoZpeL5u9tdvqprTJK1g2kxmv29S2hb8jV",
  "key13": "538gdMu8HCX8Ujo4qqxRJLWh2Qrda7QmSzWHv7qGkqcHS9nd21YWVsEq8pyUxZDXgepGHaehv5aog5HbiC7gBTUY",
  "key14": "2pVWdTrm1DQn6kRSGHsbwTS2hJmqQfUfbdfra1adsP39xcbfEd6zHdyQe6oU4sfuR2L6UhHzEpRz69suHt8uUAQm",
  "key15": "561jRmGGAf9aVxjoVanXc75yp1eaAV24tXipFhUJmyTdPv6dtYTjx5C6i6FwYHfGrRBz4EdgNtzCue2PgzV6kgYn",
  "key16": "A96EaCJ3QoTvyCzCsGSkQqS6mNAhAaHBvBGqBqtNbGig5XVc2xPo4qssLE1s2mo1FXgoTJMcUNvMpvkuoxBvBDi",
  "key17": "2XByZiHHKQ6yahjnpirZjaJhBm4gXCcCKbWPfPhFtsQsJ6gVDvQXKdupAvFtrQKZZ3QKWQbgquBJfB7sXsqLZEar",
  "key18": "5P9HGtpVCRwP3jjowytAxU1ZzBEQft32NMQHjC5JebysjPF5YzgGfhDvwBp3xP9U82aDGumaTz7ub4wWm5dmktHr",
  "key19": "2zVUw29reUqd64MrwqaanNPAtZ2vwfw3E3rUFzwNLrCz9Xxj8N5tpeLQppqhAaifUzWXuWuMd79vThhEgFQGVb9Z",
  "key20": "5HWmYkjSgAxfJj45LRFZGSYU3XbbiLmAw9eSKJB44wjvCfKtKHm8iJ7rHvX6RiLS279rUp22fdm9zigxEfCiXMsp",
  "key21": "3yprKC1jEND6ku1k2N84HJtMmFMCJ2qS3Kh9rZ8kSGSs1y5J7FTphnNy9QFMAzb8ae57YGEu7Rnz4wCuA8YA5t8u",
  "key22": "4GmmqYyuwB254ZttxiBSaazjf91mtDA1azcxUw24RjCVKMNbxWYYEEFbvzyutUVU3zDxBNpFrWc2diDu3yroAZaw",
  "key23": "kg4vBRCceneeY2Mu5Sgcf6vCtiVugge67MijJGJtjc6JtQYq5LoQ9uokSSzo8ePmM8wy4yDvJojWhAScjgoCJcm",
  "key24": "4Yo7rV3B3ndSVMn2dMjxiqj8s15s9oemMKZzT3xRsb8TjPtmAhHP1czU4v6ZWpeqjVXYLbUPCEmGXzP4KZMnch8S",
  "key25": "HWs3hZZbZJbxTtwtU14MxgkaWZ17B75Hir2QTAyVbvtKHWhHEW7acDJ7q186Ppc5vVsCgS1rtoapWFzi9QZGAMP",
  "key26": "4TzVTqbMZfKygTrA6PtCzWU53vq3UaLTkbjK263rsARepzzRX3W6g2oaGmzCw9Uns8fegt1XxiiY7gRLynRJ3gBL",
  "key27": "yHUUz79PdE9dYM7J9mRYZULdxtTgZDbgMeKBKkv2CiRrMN3HNiyYWninj4NfZwPFia1yAJ9Tj4qfZ4pVikk6jXZ",
  "key28": "2Gw7F3F8R37LHmCmPZuXVUDdEDdnmG448r7TPnSwW6yhAo5xa7nmycztr5krXDb6bD6KJvsRPdzr7HZHMYTPXPmk",
  "key29": "2vb3gC1RyGR5Z2jBRtsuGHGcRPgKLZY9iM2WMVYXp5xzatFYNYHctaqaKoYd973jAmXRKY3q6NGwyA7aQFCGQnFY",
  "key30": "8XRPdF6s5pCv8KSaZUDd38hGc5b99NvcDPrdBt6myCCiJy1nrUrd3DpfxAXjZv1YW9FAQ6gKfLprwgiBG4ADCXR",
  "key31": "378sj7ppeDN3AgzG24aHEXcLadqMLELV6rbgCeV7ymi7arEPJUMUHz3beSSktj2JBFhEbV768yB7SrEDU4PJx2Qn",
  "key32": "2BwSFJNRyzwy24G2VLtpoHzBSBrs6pTQbP6Gezj9QsHmPYQzPonXzeuJLw1rh6tJrmG4gs3moAL5VougZvNTcCah",
  "key33": "59ffqDMF7tXGcB4NfSyYyv95dZJRkx7Baad6ZN3dFVg4fM4mMym548VhE57Bj7xAPMJsdsGvk7wom1NjJuawWoUB"
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

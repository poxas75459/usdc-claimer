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
    "zENvrWnakMbBGqj9gkoBSinFJDLMmWmjyDCwLNhwn6s2fFcpXkx3x5QFqrVRrqTPETKQ4ZduF7MqkXCnSfHhtV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxSzYbeUhYNEnWVsqnt1dD5Hha5m2g9youhdFcM4Dz4h3fgbPPjb4t7hqdX4MGDvQvwPmEpsJMu1kEkkA64qtMU",
  "key1": "66euSQo9YAHZJp7pYwV6iyTunBb9GwW4JmhA2WtmjxLU79VVn9smzx4qW9cfWYAswoBJGBGyKVXUrF6GxPSpLHfV",
  "key2": "2AiCfqd7vE1g9uC5VgbKPxxoKD9wVTacbipTS9u2RzB4cnVhkWeYHvf8Bj1kafUDC1qghGYEBEbGayogzwBNMQgJ",
  "key3": "3D22QUv7xVyPqquDTWwpAczYVBW9HAFj6HhqcsUvrQtxM2LJiXnznUKaFLckchWsJRq8q7krZCZMMzQ5UgturG4M",
  "key4": "2SujQ7qbpU44xXPGgziuQRpux77LFRyvPk5SStDFT57cbZZcQemKgfThmMrhUgetFnPAJMsQjwC2ApfBWGRwhZNb",
  "key5": "5Y3BPzaDVD8o2CNarqJBdY2X5muNNGKfCCqXL17hurkACia2MKeeFBQv7E1AT2o5UfSMzBxrqfuMq4M3jVobfRh6",
  "key6": "33pPvyzre8SxuupzMn3bYnsdEGGHQ1Yq1HhLv1MejY4vQ19iBL9fjsXMZZtbJextznGoZrMRxZVFHZn1dkWMpdjh",
  "key7": "3e9dHG113TwigfTPrRaBWFjNPGnK4PyiHztxECM4xueTxPF6T8jktYjfX1BRtCfiGEXwDDrqvGS2yNmqXw8C6XSi",
  "key8": "b13urYFxoi4HVVH2UovNbQXTebcitFspB8BqBLNWwBj3tUCRHH34mJJaxUMaT2oPTMNNWXrxQtqXx22FUz2BxYc",
  "key9": "3bvP1vejrKih1ui4V3kmZLt789MnBA8rTEt59XnLzU5WckAvA83SUBqNsmBik8XNaTqidnVtei5GwXsYC6EYjGYH",
  "key10": "Y3ebdNickPDR1wJv2f1y8neuwmFnYQ8iKuWeFt6WkEWabjsYDB9UbBPgzaiFK6UAPWc9niu8nkoi1JpaAbavhv6",
  "key11": "5dnHtaJtVAxnkqc6d4Ex3j5rRb29Je1ezrb4wEK59auUn8DQfhsWBGCZ6c5PCj5eam5sjko4QT5xKnZfSVhTpguN",
  "key12": "5WNY9Jr2c3xvUPwC12rPyrEUSpCBkyXuSPq4z3Z8sMX2xxXt98cencmDEZN4jJRgTYksWjZxTChthqAcmnhDYz6o",
  "key13": "ftchdw1KQmiT3ufh3JN6yGPTWWTtZoBk7LKaGECabv9QeeVuRrWgxY31XbHaFNQLXqiyxpqLBuXVLUrkUSCZaCX",
  "key14": "HQ7MkAtec4rNgFzPWJUREEWMZy657wPKe6RD4pZ3Zm9ocEcW4K3XSuVyzimpAFmn3F51gH7iZPWf84WpABADHFv",
  "key15": "2dNdoj1EGMqV3ERTEr1jhahK3MjouTRSr33CJPoA2twDtxLPTm9CpY7sP9FXEwEVw3eSXeizmf4GDN27eV5bBE8q",
  "key16": "4RDrJNYByqcc1MzededG9e8B1Mxw7AZRjD526dWpTks5ZNj3TwwYTyybz9MwkRxebMnM27AvMrcstWhDnFScMZoQ",
  "key17": "4ECaWk7EgEMyeiDWxYsMNr5byGeXa7K9vkvCk9DAQGDBU9LGoeBERNJSffRzvKxVNBDtpKLP2ospkBRiQcy4WSjo",
  "key18": "4vbwXW8hxh8AsDWVbybNvyZDyQQDqwqqkwyDy39YSpMdFiPvDPeRRQvJfq8nesRVCMHrdYtcgeszSgR85EUTDkeP",
  "key19": "2cujEh551fwUA4wPTjfVCTEFDCU9UfBecUZw1mCtMzjw5jgvSa2YJXXwE18VFBhg1nnWiEczfezy7PuXrEw8z8FC",
  "key20": "5fho8tKs6mX5EKoWQ7EKqHLk1DeCvhsuL6WijCH8cazGJ692GQ6ownMX7xWN1X2DccrSw6yupFZ5tdvGE7MyfH2P",
  "key21": "SJXEjkGmiA8KBrPCrawndxEmAChVNhVtUoVnHnYsyZ82Sth3kSqVrCaEkMHB6rnNFyJ1BJcnuMRhNvyUvpAVrPV",
  "key22": "5HF579Fp9SrBXYnJr9kAMo8hNQRoYZHXrnmbATXnjzvyrLQnQRP8qLa33ttaUpn7aSW95DxFHs1rX4yZ87nfYe1u",
  "key23": "J6qS5XtRgNyovenCmVED1i9qn5dP1eHNRYX97bczRCDrKaXYp9qSBCjBVh3VhMBDjjpLp8nvhoePjLk8rDKYfSc",
  "key24": "35cdrzmDzCggGMuv9bLESav5QRrab1BZojXMTf3xC2HeKUkYDwHwd5NyhwetWr23fg5Z2aXrPn3Z533H2XeUFBTg",
  "key25": "2iZ333u7Y7CVHodrtsUabb4e5rUChSYymgXTrWkZ3vjRn9BGLpX3CNHr9X5ms6Czun7iqtzUtJ2YpTwF2mTFsjYy",
  "key26": "4anbd3NQFtVJ3Zwfisgbbuyg1pHtcDfu5hJ16bnP5orZaUrvm4V1fF3aPGbMtwAhFKjPn93Tw1mSPnX8tZBEBhxy",
  "key27": "5UNxk5QYBkcSk2EWi1KDWabgxWNugjwxC3RAtqcMzjKjpB4Suaw4UCDvPSFrQ1KudQPwVsuaLkKu3C8MgQ5Mb3F",
  "key28": "4KWZx2RKyJ3huJcpCuMEE2wa4QPTCwkBcufqK9bLwksjZQVaEktxdTF5rgJmpBJBN5QFbtjwyz7AooECJe7QDYcU"
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

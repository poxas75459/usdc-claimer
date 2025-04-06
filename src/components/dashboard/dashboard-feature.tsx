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
    "5kxwttKEpQ2jUXj8d2sdFq2XZeJ3q69xJyGkgiXHcKBP5GSo9Ae6bCK9mxsN4bqi48TW7JdXRFbVUs3nLvX464B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5kjrVBsVMY6VMu72v5j62AfM8ontvA5UmUARQAmbLekWbVG8116xk7UabjemZhW93tE9QFGYpYCpPpzjKfGwgY",
  "key1": "2yACPw7sCPkxzh9yyigPyvTpWh8c4iiiT1NeXCa483jsMxcLi41K4GRqF5v8Z2Y3bK48H1M8Y8vN1J37heqgQhod",
  "key2": "4k7q7q6nWZ1Q4qSzzSjxo8pLgBbUW1htfni8SeKdj6gCrMmhjsQ4rBWDMyozu2NsuwNQRaniAhUD2vi7F5BJLxWF",
  "key3": "NkugUVyFzDgW4UzbRcCzgx9HxYj315FN69J2Qf3PrQkD2eLy2sRm2wiB35BYJrLBtHfxhryERKqznGA48yZguZZ",
  "key4": "3myAj5PQuG3PrW2UGbXJ1RKJpyx3zEnnAyfQd22ZvtmfHjUsfLvWmdN2DuLVp3Et54MzXgQv2gHgMFJod94Re1iD",
  "key5": "3rnn5QGw9TJuMr1gQVncAJPJBuWRTxNEpFW3AEj4y4n9bnxU1gzm8Hh2coDjSnv6T355dxESxambbNe7zr8aXdoU",
  "key6": "5XXN54d4vEmhm5T4aKbeLMnsLRUVNa8vZKZMYdpgwwy1CXt1C31KC4QKp5A5RQk2AavFqjcfXiMLtueTR3sn2ia1",
  "key7": "4H3GrspY3XTpLpiJz1srehECyeqKmq5oYGagfBco897K5QKqDLcYf5cF2niRomChhgeFZP9mZ5YbJMBMuCsoUq8i",
  "key8": "5Tn8JeR8DRxAeJYcYFy1QZZYCieY7dgoKAoEJhZyEcmBYyN4K1eTDtYL8mFfLKKSXHNSqbYpYae9fUVto3WWuAc5",
  "key9": "3cvEoyR3tMSHvQBsmApMtnvpycDGwxm7A1ep1au48Kc4D6Mo67J7N18ykekjqon6LExHswnc5K5e8HWiXTWxrCg9",
  "key10": "4irtsFQbqWzLroAb98EyC6aowVzpCFX5ZZZjjkNYurWnP5mFsRwjZn6sLM9BVaMQaerrBzokZdTm3rTdwGBB9R6t",
  "key11": "uKeVpxydHbd6JNsqFvLWMr7tVca25MXmqVhR2FmH2vWx6wXcPttRAoKQJEP5NUPwkteVW2ihkXNTA2tJmV4m2to",
  "key12": "64pT9z1UHTodbdQ3zPLmaWaGd7DrfDq1EeoQiuo9x4NEVZjYQtGzRw2FbQfgojvFoW7gu3NiUNUsRHRzE5pjBaCe",
  "key13": "RTX7cxQkbMXfotE4Zyw1vjZZ6Q7MbH2AFvbL1VhSG7QUrW37XJLZHRV3n2ChVr8LiED97VE1oqa8wK83oG7qtdD",
  "key14": "57B8Zoq3Q726LDkVrEWRjSf7mrSopRF4otA55HYzawv4rfuUBtxPByCccd4fGYtqQ2VyV93UPLPxJVYcr3WxEkhj",
  "key15": "G1uV5GLX26NLT1h4xDvK96D64owsJY3t8pWTU1t5EFrPgsWC1rzNcx87f5nXwstsLRrSxtA131wV1Hcm9NQd5vt",
  "key16": "3cvi2XwMFXPbhNUS3K8N3gAkuQZva7WTVtKvkSV6iTNpRTLNBZZbD5Sxvp1qh6vrNEMV8uZP9XUDqZSaQrVnchzc",
  "key17": "5MBB6mtv9BaEbga9mRjxGB3qCY8xYo14vr5HwjfTMsgmDPkSGzRadEugDjPPdk7qXWSBRtahEmNTsKiWgacKJyoM",
  "key18": "ES2Q2PuBAX5nmTFKDAiPaWapkms62j5ABTTw9z52XBR3stEHDqbcDTFuBMKmpya36a78PUJZSnXpjX8LKfEJtFE",
  "key19": "4CozJbSfu6bcsdfErScr71fBwHumpRW4PZrXiHW8GJzdRzBejvCheMKPtDMZjHVx6o8ak1Ng1o6i1xqP5B59vAii",
  "key20": "5mJHFCLAQDf7DEWhxFaYHqnDw5YhwLuvkeD8G1X5Sa19e4G7o9iBnYr8736B7xsVC9RkBHWpZFxrdnNnCuWiVFhV",
  "key21": "2vYfxCmoGFfuRcDqakEwsC414cGQxcycTjLUTWnQTTuWNanY8Foj3ZsyKwTBtTpnmRBFEZQQTYBGn555o9LHuzpd",
  "key22": "cgM3m7gUXxcZWXDQAcrKCe5ZCbkG2evP5ip755afxmJaB49LacbHuhF3ggQh4WmXmuH2UcTKapYaN8Yy2Ui7vRh",
  "key23": "47ZMDV7LxoTd6rjHAg5XKuXbFSzhFAkdwEpUq4zoxTFvFPX3LbJo6mrCrD7qAKaWHf8bf13f5x5sW2RWJz1vYMNi",
  "key24": "5HR5bRQ6FwPRV4v4DrzbyQbnkZwEZcaS1GtyunZdex2LFWSTofgwns8HkMUZwkxKdPqwWWQu7zmxkKsAX2VzjAyv",
  "key25": "3UQuh53LGeHuwqY2EdLE3syQ5AgPgFbsFuuhikYRWcHAhZ1dW8RJcS1y3hNxgxf7igqsf2a9xCsP5rd93c5yXP1i",
  "key26": "shwpKUeHDtMfmMMDqWqv9UjmxVnuj7vR3K6pr8dNGaUTKniR5mVGnBDQUdaQzeftyCkG7pNQroYAnDhZtRYwgMa",
  "key27": "2MTtG8pmHRhEy2C7h7mmFkqrCmDFonaKVKJ8DxSQVeJ2NVwQtaFercCqMLaAjSTDasyKL3RWqCLLpZLTWEVRkdo2",
  "key28": "2f4Gd6wUxZhg3gXJX9yHRsy8fUhCQCboZRRdJkkLVoMGxJdzuPZGZHgr2fp2aWfcxggyQFNmWdqtQfkSFMfqXBWG",
  "key29": "41WNj5XmK2LmkHJn5TTzmv46jPjqr2inNAafxHn5nj3PPcKPVJH2tqvNgQ8K71mRizCfPA87FHXYhDXf2VajbWQk",
  "key30": "2nmVFcBLYHae2oZvfKA2r73n6GqRiAUJSq9ZKv8eXZb42hUGGANAbRHvrtLqXis2iCcrLMtQQc7ma73ufgnHkbe2",
  "key31": "3DXazSnHwX1KDM2h5je1C5ocMFCZguXRptSDVzuJ1YyDVodGCg799rjuLkJg9zsafvBqc4a7uTjP3FyUoDzZNRh2",
  "key32": "3ixdoD7XCFgQ13ahedT1oP7vkyzGtmpx7sGneauELYLaeACKLF18VT6yZrXjQzReLBVNby1kLkFX7AdxkJMxpQmH"
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

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
    "37jr7uc7UqxmPJQUnJidVVsJRFFQf6Ke8HoAeScbZxFhA2i4DF2fXRv2S9niPASEL99nVCm3bXequPDa2i92vSBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q1CyRwYVTSxPw4JDURY9kQgUBT9fzykre57qTgBw1DWrHdzL5HGXn1cVsG9jyeZSTWQqe1mDAd9eB7NdTdmbfce",
  "key1": "3uEXCcvEb6q7ei3BygZnTzHnC29bubEHoP5V2Lk2XCe6jp6zQkAHvrAexD9U8HnFgyTXL74M3tqjrJST6yVQ4Tvv",
  "key2": "5QjmUY8d7sM1U4bmy8WLQxzBLZjvajaeftJRF7eQU3NHixHAdcUX9DLVcwmduua4eZMuJB3ppdRfBrso1RQC6UCt",
  "key3": "3kn71d256czfNsLkEXn3psVq8E79benuqANLLxvLJ1DynZ9HUagZLArL36uawERS8r6bXZtUYpNdBC3W2abU979L",
  "key4": "533PD2ae88yQBYgevCT7p5DsbeqHs59wMJvqCACDZ5XEcFCNGk97yHMNvZwPmDD4ZHuUwV27w7s4hPyEwqyMHdXH",
  "key5": "3yQ8wHs8eT1wSLVgZ9QNZfGKVHjVxjvfLrLcpLL7pcJphMNbSrKJfZAH2hGpfuHaS1YSwo7i2saRBpVjGzoG9QVk",
  "key6": "5NxRQV7Q6QDH4D7LBCoYX5txyJ7ftUQYtgBusNEpeDSB9hrF4dYrw46L6oTWhnTQWuQbEUhwpcWD1DtbVpj7DgnN",
  "key7": "yAQ7PsBPF3oo8N1gc1KtkgfanK7wNM9DTyeFXrjHLjkHGaPR3JNpQbr8SHbFKCbseZNuHBTwc2qQFwGQji2NbL6",
  "key8": "3GFxoghSkH6XrtuVsuvEqKpAcvaWK8fsbeLwRAKRNAJGWRcAP9sUzrqggJ5dbZ1DsCCr9dNLSwKxjJNUxBjwZN6J",
  "key9": "4NWRrovjUdJ51wcRNMRRz1tp8Ukd6GyVYm4RzYYFJXhPUujB8eosut3z5V7yVcc7eEx6DaSeptrji6UUfe6PF3ho",
  "key10": "4Y7QQvk83UNBekPQ29VVCWUfMA4jtsNabcmMX83jpyyp9KjUgN21ZdHZTv68sG6wKdyu38MCSftg2kD4C3ea9nB4",
  "key11": "5nn8Kayis1RF3A7Qk4s9CPdY9qgUgy8ZsgdwK46oH7iBRGcdi7Zrt54f9LB798vftDpNKKWCN8u1hzxZ6SkGJP4f",
  "key12": "97ec16Bmjs5BhVVthsjw1WPBW9MjWSeHYkuCau1zpioYmKZEk7g8zW85SykMDFB79yUNsZBfrvDA25Ej7mCPyGP",
  "key13": "5PYiAFFEGqfe6u4rT8Dp287oTfsCp9CWbRCRJGVBBY3DiW8VF4NEf4ZCoazX6T2uZCEKiero2nXZxg8XQRLuz33e",
  "key14": "2xmMB7vQsvuKPXd6Wvhhev9BW6k8LhQaCEREQTJxhoSXf7Km6rVsSoaDYxR9VeZjrATnoecoopCakkRV4ypgg5BV",
  "key15": "3Zo55sJ6Eqr2aJLMnuGqcBFWn1iu4bn8TtnEneH4Hims2sQJQMDduqW3MXNbeZUg9hWtpWh3by39cBpCZvLsien8",
  "key16": "4XnQt5PUP2FhYeiwjLmMxSBjoAB744dbV8J8gs2pW2iLdrKoqmpZsfZUVxoGakyWJJcWXEtpoxXHw5icD1QRTWiZ",
  "key17": "5pZNk66VmsThVComuBGihmNaXiGJSF97ENe7o95fQ4x4anBDT5K7gyV2GqUuKWib5YZ4MXvtCdLomyQhiiZwExBT",
  "key18": "2xFrg33w4fY5dsK5obYbNkyERrC3Nu1KGKX6J8dWDakjfPPEKdjumnLKGoZhW8a2CxkTdy2NCkre4cP7CJBupeTe",
  "key19": "3ob4SWKbybGBmq9yH2RXYSWMvxQ5w3giurspqRgYKA7EYFwLCQKcsonjmLH6j6rNo5dZhw1wMZJbK2yxkYyYi1Kj",
  "key20": "2PyvnRVMfjEsvcm32LsRSLLTtGyMvjYzQLgEDEDtBUdSLc2obxJhcgGY1dzPzK3LZZuAZEicLK25wats3tYnFjSm",
  "key21": "3GjUWRwxA3cyKFYQxiGmCW1L2uKwURUhGqzngNDd4tvXt5qEK3Lr3N9B3MUhVYf7A51QP92tUz3DPzgXn7P9ujfF",
  "key22": "5XhquCna1FEKi9n5rjqbyzxmBgApcRRUVe94iW1KwUT47Hrjn5uh6xA7tzhG7xTzenZRwk8niWvn6nschpBV7EuR",
  "key23": "5GKm3N5G5jiUrj1zF3TtxATP9xGvDp9VPsJPyF2U44Du2awjnRTnqGy6LK2rmYT7nAF7keTFNprUWDbrRfw9M1Ne",
  "key24": "5bEumfaaS51FHGUJdkAocB72Wve4J8NrT6fHQChTFigZc7t41me8dycsmBQwM3Y7oeKXcRaKpx79ECqBMSDuoP2K",
  "key25": "4SgJeCv71im2mrNoUadqwGW2FXTzYbYgrkrLTfMyd4QNDJQKd11STdWxNUkfRUMbtiL5anwdQq18csGdRWFuN3r8"
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

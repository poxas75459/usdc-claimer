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
    "3jNBoYqxLM9J4gy73C9cpwxjGWtQVfYhBppw8y99eM75fiJ3mNd963vTa7feh7gn5ZiFpDKUKLkDNGDAH2AHKVBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzMr1NVpJLvX1mg1YriZZA5AcxG9UmUe1oGXnCSWSYLAigyFZKyqj2BM9L7ENgqfdrrrQNReG6e3cLzi7CoyAhX",
  "key1": "AdLrctsb5UMPYPyeDxSAVCiF1dQYfMcJVoCtcbzest4CSAYQ7PWahX8rc3K8kFHVbE9SkLEcZ1nP51M8AQkDw4J",
  "key2": "2Sv7kysr2aWwhEERith4hGxPVfRA6R172fk7rpk6imSyQP39D1945KhekUVsB8ZKHcCwFjPnNZXZDNCjhtFxFG92",
  "key3": "3zmP1znvfvbrNm7eCBN4kNRM1YYvXbW7F8zma1zjTQyhAHYodmcmUnXdQVxEt516uq1hWC25LsjwW49rqwmUNeHy",
  "key4": "NrTb2oWKH7hZqbShAUwsCvokrnone5xpqBPo3XLnwAZczqiN1f1uuy16McdGv4xeCoCsHRnobN1XUGZLL4bsdvH",
  "key5": "5W63atRVhSEQgbhVFjVnCbSfGgSp4Ux5P1m83zRwb88aGp53XKRFXXkLh9289DRcai5nDzHdXysAjGDMoKHXrJz4",
  "key6": "2BBNq9C84UwF5evfAHXAy2poW9ihU4wRFzZ4ikqZrQfRhvi7NBqLxyANXqnbfxfrLRJbMAWHbHkodB4uH2czGVZ7",
  "key7": "2wtvBLBwaWEETQFzkEYWVKZvGUKkmE1VEX5abLtLMqT3pfLV6hGa6r2gLR5Bz8GoRCgMXnfS9Lx7Kqq6ZFt4VPPH",
  "key8": "57nqqEZGU4RRvZL3zp8JhPwqh3AqoxZDs2tiZ8hryo7WEYHwqcgjrEZCgJ9525G9uKn54rh2wfSFwMNEQZqxqFyk",
  "key9": "3xiYQouAY5XYMF9tWVVubBPCuJWL6co7PjGHcvaycizG7jKMJGHz46WsF4T85MuGAd8rEXvTc7nQeGU16x6y1WhL",
  "key10": "2yBa9koyRit5HiKypHSdP8PdYEtv8QJt2Jwe5wvxMyjeUhodXJ3Qso4jzYihvGfp8LMxGz6dbubzFrBiMeRnZZBb",
  "key11": "ngLkmTR4Vk2VGhYWvgqYYX2DEFbAjezD8VjHmsk8RQfdHYBcFtTEUJSqKfzbVvBGVMzqEa3AZ6hrGguKePyQXLD",
  "key12": "3C6tjTm1KxjcVNNRq3xx8uiyD7ihv6PLAoh2WQ3Hu2VJZ5RawaNY22stmpPggjPuVjgf4weLCSDTiQsKXBCvRiYa",
  "key13": "5ZDJ5wHmLLM3Mv4MLhUCZktL5egFX5EP91JAMm3eQ1xmpkeGkqVVEi1pdWBAZ4sXpt8vURuZNt2JAMegtsc96SNp",
  "key14": "5RiBQT3nHbx6ByZQU9rCQ7Ujm3D5AoFMUdcfsdeqeqyECky83ySZsXPdq236V7YtFKG9mK8kxgsG85ZoF7epSNK7",
  "key15": "5dQtaJViNSvJvtcsevT3NusYUzrKmkLZzuNa5V9TaVePpP1YWPDkAGB3WrmQPov1q6tX4SpKzVY6phrV66tB8UmD",
  "key16": "m3hZGNDkMZwLC3mKkfiz2iBsDM98ksqDRhYwn7Dz4RWVLge3s4nK6Qw592fCfet9SFrYahS4irGwoRx1QSdSz7k",
  "key17": "428Vz3xEqToKe3R8RCYTcEjmYDCRZjLRhxB6dMVsYyoQgZvpJdLDuUwZz4MxUjgwFBtZu69AAYCsCsh4xRHtMyBP",
  "key18": "62pZNHxCMSspZjPuiJYY4ieUBvbgjjKNieYxqDgodEAScUeRujqUaovAabCrKS8pASsWpeczeKJSxszqV9RDFH6g",
  "key19": "2mFBfj5ep89NT4F3qxti9CaWMbPissNeKYBmAi5Puanz78eyodUgy4NtVMtRraVZtRa2dAZaufyyNpE57BiGxUkk",
  "key20": "BNWarS2RWdmApbseZ17FzhEUFvR834zJBRJFSBvYo1DDPEKnM2AWoPPsrwBXWhN1CBpbHXeJgtKCgajLX7LmpVc",
  "key21": "2o8dgQ7av16zULJQTVJ9kq6FHXbfTm5NeG2nwPBUzpv2hZMUxzryEKLAL3yQ7pzsCufir5VkCcCXtJtwuX7hV2hy",
  "key22": "5967eSTkAU7TrSUatjxaUC11MawXzrGnHa2HFafaNrTGmSZdB6y1mAeQvFCcX21j9h8ko5xGdvAzP19REmmzaQwe",
  "key23": "fEcbyoG6SreTV9EFVpurExijhkjGYV3r9Fc6CzNbKnba5vFZivVF3nfeqv5cLrzMyP49cb8W1Fn9HtxzPHnb3Xy",
  "key24": "3JVZFvpUpFZHyYREHzmFASWFs8JBwpve4uVVpF48zmkTDaRvPdWaTu5hKtBuJQSLsvDXhrKBzZdbVnmnmR7uTdwd",
  "key25": "21c62gNZGHRn2GfdEgFxAEuHmQYteoWCn8fUHrjvxGj8mVQUAGVR9DaBCDhP5dT6cQG6XzNGitMSPEx1CKz11HCW",
  "key26": "yfuKtXHW22pLznE48FepqUmPcpfCcAivsu4UvpFkLmrSiw84dqSTBBzyrdamM3JMDEkWTYhSnFyi3dK5H8B3DBT",
  "key27": "5fH8ofugrrt7U7YsAou6KFdXudtt3SMGWKJpaizsj5e3xpNaPq3LW1afFxRsJNLNsi6GZpKswPE96YPdBC3G5iw7",
  "key28": "3i1B3aXyt7Z3eudv9NZfjpQ2ErPN3qioBTDQEFajtA4pp96Mo8tpr5X8XQ9n3mqCmByhzXrmCwmjS2VV3ZKmyFoh",
  "key29": "2AEchk8gxdkiN3WkaU4Vy6VQ411ZF2m2pTyfZp2cVUpbbTSKoUiSTFGhHuFAJ8ZndFmDk1JJhLDPzbA7VXHWgFKr",
  "key30": "4ewzBhtxJmYuPBnxcjkafvUFFyR3APMg7wReptA7axCoLwgYg3CBf6yS72RHi92xwQhVuLN68QcrcTdqGCzwYztM",
  "key31": "3U3ffy5Hb86n6rDX6rP6w2TPxkZXa1PqnfkWT6RwubQZ7tFnnz4pKgrEyEvQP9Tdp8eYjZSqmA4zBGUKRWUaSpNb"
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

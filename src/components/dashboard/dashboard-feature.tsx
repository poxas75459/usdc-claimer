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
    "j1o88L7ARtHw4DrK6RJTWbEgiVaV49u3vFQATCwipmprTvoj2C9wDcr5ZNyA8HuZceUgdf9qHgBhUUkbh92Sxeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YiDgtsCguGZMFebxz4BjvefpYXHwUL7soMh7SZQVvvS1Uy386rnZ7YQ4BHK537zrUV2gEWRmdwWwvuyv8rcpJXr",
  "key1": "VsGi8fH63Es2jvvAnDRFXUMsopV7G3kTwon8yoqmErjM5jeUW9YqnEYLJekTp38LsNrS65SmHrQKjFnZ8Lx5JzX",
  "key2": "3kbr1wG7moSEALUfiDdpTd1oAQkXsSyoMnZnwfEVbFybZAL6PUN8vdw3WpnYDRst1djEfb27pptWE9MYGKosuyC8",
  "key3": "9KLZs5qBYUU7VKkN4ZH1FU2zCGsxRo1xjupj6PrXNR9jJiQJYGX1MWsXW5uK1oWH7arZboQMHibAUpbLDxRfWuk",
  "key4": "2pfNpk1LYeQzPP9zQRtjEnUFQugg89sarfArNem47gCzVWFhbN8heY3EkG2f4LbC4vsKb2a6LayFAQqQF9MjBFAu",
  "key5": "odkJJKJdXE9na6gjQk5Gzf7Rjfznf4nU6PzzohFoDFpyn7uRUZwqFR9X5XTfiwQRfX7JE2ubqoxQzKMF1qPZS35",
  "key6": "ZWY5vEirEzvQYftjgpu7n2Jzg8KBE7PLKHcbnmHUNFW5UM9NaaZhxzaHEDummRkphHxGA4SiysF71A9Q9z4YMtq",
  "key7": "2ZHbxkNYQs1n1XQsJuqFj2xDwxpPbPgyaRfVcXE4cKN4GuwhWUbYSXHwSaHh4Z6w2a465Y5w59anmTmEgEJc92H",
  "key8": "3kzBwxemhEakiH6zMu4pbvqCQzsgEVF9xDPyAcYNBDTaJBVseyn9SoDtC4TUXNaSCJu6tPw2TAhPpVGLoeZV4FgY",
  "key9": "4xyUpzsssEkWnfsfDk6RWMmmvDVSMVxyQrHN1kn1x8fmWRoXTMn2W6N1WVkuCHx4sEVyH4sUUQW5NzMZFU5reHZk",
  "key10": "eWakz3HwbpFj2dKWRrG3n2Sq89DAVwqgoLdg2rYyBNFGG12CkRovg9Taa4YvRPkdm83juTz26M6HLrmyWQQpisZ",
  "key11": "5zAsCwD3zgAkLB4UBPD1pvkCS4qNtGYcQWKaJ7MDzntG6SxqfPJQnY1YYD7axgonf4UAJS4cyNZb1nSgeM9hGcgi",
  "key12": "432wAdWffWDJvWS3LTHvaZJYXYNHnnAgaE8i2YAhFPckQ9AMoZHW45RrasXLen6UVrcSz1S1xYpUf4Z4CipDXbXf",
  "key13": "2AXTaoJu2RYMmGXPtgkfMEaqAK1JKzCZTXHyGugFMpbbkwqL4Efp3rKmWqNkUDj7MN57d33Mjcj6NAVjSzWJ8w3Y",
  "key14": "E2miBZqhenwE4z4sKPMnxUCbbE1Krxm31EV9uaEns8PNVxWhE7YdaPZHaakn8uSrWAEX69M8LAb4aqat3m3hAmF",
  "key15": "5oTYCo5s97uCrRfaLHScbZEpXSd8AvAFg6qpiwWD85b6XPcfddXu6jdqVazxotZppcL3Dgkjy61AERcDdQuZGKwn",
  "key16": "2dGfG4Paitu7msZwSoia4175E9qSusX1MKZLPsSAHPJVgdyB9bV9zRoDgJLdPEc5xH48FGRs1w5MYKUPSEnb5B9f",
  "key17": "4P6bhJYA5B35ZanYiiAZ34KuueRpqDSKmQVKYREJuJhgHBczw8WcNr4wZx7mxAjn51bK43nEfdumA2ajo56W4mrE",
  "key18": "4CAxc6scZjC52ynWnUYs5ngM7FaoYGbKVpnixVGzTGS2k3ZGmfYNTCsc33RenbAkucZGKjdzJo1KSSmEKu3Cs6XJ",
  "key19": "3w5hU2mJ66DKhGX5qgboenkWgXnU9AvUJeEtz4NUcwqVMJ1mVpobwAJ3ruPcDy26WMY3jnX4vFWcWZkyj2P4iM68",
  "key20": "4UWRFUmvqbBnLposZEfJmny3xcgHKxZDtgyaSHjLsqE7UbAgTaghjpd1jh1mzUttLq7pS28JwWYwPLJoF26PBSPp",
  "key21": "38g3SiF1u41g56Yn36R5VtkBFBhGvsaRSMdkVTJQTUENLD9EDYExwcyaUkjzVHLEai7gK1YeSG1ybGX6oGak5bSQ",
  "key22": "5Ms58efDB8ZWAZHjuf3SQeQhtH3ZHTyGNvmN4RLZRzCPGPXyvwgbsdAZj4ut9VZvoP5n1mCZ6eyegqKPdjYDPhVk",
  "key23": "36ELRWLSLGJPPeGhoHUioJJ28AtE1kNEsfyuXqT8wC3GV9YX95FR8qjGoPShM8PNpP5it2Lpno4HT8qghdLXLtAS",
  "key24": "39NhHAGSUuG99GSTjKU4yPyaRLLu5p8ANb1KMHu7Rb98MbLhiWRi8yVeGdfwtxXmbPPEn2AwqVh1hefWbZtEqxME"
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

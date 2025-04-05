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
    "4G5QLdsUe8jkbe1Xbi8KTDYUYWxS2i8jxE5Qofcpb5Hx9eNqALhBcXJkPZkhFwKXUqDNCbNzkpdewQNndHpJQXVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mN3VM1eUFxzEPanxJU7E3GrbgtnELxVHzDRJbzr9jBwNd3GzAHjZWgQJoy2mCSHUYLpwX45J36KHjr9xf8Pcdwa",
  "key1": "5V8bGEuoR2sD3ju3YJfvk5tKfGM1ZJ979B5eXH9ViKqjmL2sAUX5mvaW4HwxAXuZ4R9PA47iLSgC7ZAc9kMz4JYE",
  "key2": "4RYvUXQRZSDrXNHVGwZB2uXA4UPpKhGZZQk23NYxxazudLv5YG7SbNCrBd1856vb5RJMjE8z71GhfyBhYTu79aSA",
  "key3": "Zzi7dojauKDxYHemTorYn1LKTgYvTiC5pQuqvm62pBKNQJm8JxrxBLwnCVv6EbZNWxcCEgvMBxBPF1XL2vqbk33",
  "key4": "41k41VmTbzCdSpvz4W5MMZa3o3BgUEQ6Y9NAC6ZxuytxjbsJjLQEG5vNuRY7hoo4Gd9mR7E55iXGUnqcHkGUBwiv",
  "key5": "2nNu7aYv5K7D7J9uzDgJ4w534HPdrBcJiDarKvgjQarzBdQW8i6Zbu3NHGG1ggAZjkFfViKxpQgiLYLnwuQGoyyn",
  "key6": "5pGMm53UmXSvuhpmiLprrRqpv32V6t9voD6a2D6WHj3L6oEuUDBhCWnefeP1i1s828cCTwEWh6odqF96Zu8da7eu",
  "key7": "SNQaWsQa7y4W1Lk2Qyhe5gAVp7rnAmt6M2feCrPEsHXHjsRE4QZKe1YTus7rreGu7WTrPSizSyQiBXboHsctq92",
  "key8": "24LYnX62QnE14LaZWTaPAzap2TP2MFEpSgE2pbrS14LjCRNekQ5C5Q33mUbyAemVkoQg2UweJoRQq58P92Z5t3BS",
  "key9": "LdyQXfBy5qHQKAoAU3zLwkDxFuTCX4jy4e5xSTmDG4N4fRJcKTFEqqVVzrdC3a6trEg4MGmJ98W7Mh8kbw88AfX",
  "key10": "2Nz6pGSrQUECi4LhRfbQmRMz7k7hxXgn6TLEt7vbpL1zZDk567S8SpEZR3aJ3Fyi41YBMLDNj8JPz716Ggay813j",
  "key11": "3FctpnKxaoyDdYimTCdqXSwiNLnXwwCbedchXdTHz1WCH2UqB1XxUo8zP7DhrFfwHvKo5Pwwyjr8FdSgmyk8tbjt",
  "key12": "3KE9jBbdEqcxr1nc3PRshjNg6WGxVmbiX4dexfCQpfFaREBJdUvAuu3vxxbLH4KQjzCeVrvzdv5AEyqjBj8vAdwK",
  "key13": "3W2iw9VUqPeNXkAjAfvBiSMtD61VLzYfdWMD4th82f53UCMW57narxFXNuAj2a7mrPhxZCTfC3Yfbjvr8QQ6G3uz",
  "key14": "bCobwnucHcBo6sxbPRwxxYqjyjMuBqvqjPVp1Md1xZ63fbHMoiSuSbXhUYETWZpcVajAB777fwaqxSKhiN7cDxP",
  "key15": "W75cbRG84D7mXUF2RFc24Y5WNtXrs19VUzgWjjxiQvMKTkJQhHmCEz7Y8a9cpgh18y1scpPc4scVepxwZoqzejr",
  "key16": "5JtmEhQjWtjjbk2sGdRBNLmM1bwSqbDQ5iRx6u3rCc1jAZj67mwqcwFBNoAQKYxMaWf8ZWkdrwxSx7fRyQfo4E6V",
  "key17": "2maFYeCY427m92Y8JfiNSKXKxPSkzqAkESaXaogNr7rLJLd1r55gz5sayfHFt8qV3iLC6gf5SAtxuU34KxUWQ3zM",
  "key18": "3EGYqnYHp9STuRmeB5woZgK2hwZWkBPiKgr4QAaFJv7jWMonqNjm7dcM2mP9UaWtrLRYdyjVbtsKwfxhdWNX1wYn",
  "key19": "5dXfx78fdz23bExqnZHkbcaKZPZRKDTu9JxUp6qDSSkHFuEEjyvNCKsd6aqSAcp34cZ5qD51p8BW3C5q2NMZ9cRG",
  "key20": "4zGmCaTCAAwkTSgMgQcqaVyTeTjRzebELCjQbHoPBANa5F587UHpqmpK6D9fjpHzVgi7RdwnAzBXw3eUj5Z14Pan",
  "key21": "59KfoGB18yTaX5pegpPuayCTFhAMcwyetxKEgufMkYXM6WBciQsUEAoxQH1xHDvRmJv6kyspQGTv5b8BEVT6owrr",
  "key22": "3kQ4uBsFfqYfePuF75L1VTC1ga19ZSk4vK41ZxDba5Q7YeiSeCaiXj3HVrLE4tcP6b1QDGrtN5N3n86TwE37wg9D",
  "key23": "2PUh4w84u4ytDdFfsRoBx2ek1janmTx2Dtp6bTbcnqnPHhZiy14TDs5GN572EqW3sC6WoeYNZsjVF9V7c8HGpFb8",
  "key24": "3qsyzSF5bcfHkvKmRBwUjFvuQSkEBYzcx6hJ6T9nkFUxQ5pTFkm7SDYxe6kFUYEoVzNok2pJmsLWrqDSJRZ4fL1w"
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

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
    "4eMBjb1net4oFcLpQtyHwMR6h6HbzR2vaZ8mFSSU6j6JoBrkk3feehPrzb26Y8DRgtzzs1t931EkhJYnLJeEu2uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKMBu52czpMSf7HozZJCjmrRHMUHAFLNUhsQCDxu9yDsdB3kYSvRNpLNxCLPsTTwstbeeya2B3rBkHcjFDTiada",
  "key1": "3omV6pVMgAAkLVWgpZj7UCtQJDraVCkcVB5LLTDMNWTHNnie3zHNrzV3yLFhG59Eo8svWxUDhyiaRbSrWYycoeDx",
  "key2": "TF9zf9d6uzhzsRTSyFNjhXPC2Mqso71bdpeAKfNAbGrXSwtnZjbjpyL4K8hNNUe2RBCHFnv8y3w9NCMW8FKdgJQ",
  "key3": "5ei3bcVfFk1P5TL5LuYj2JNdyk7827A5uuhRWtTZrkPxJhkuVv41wmFXgi83uWXuZmyKGxwVhKH22Um928Nyipj6",
  "key4": "4JxHJrycpuCi7uvTssdXHdJ8EZP9nZWEA8fZcb39kMD7iWvUZhiivZ3M6mfi3Dc3wBJMNmSrGZQkKvBQcoDXzVZh",
  "key5": "rf47vJTPWXmTfZAMfVL5Tk8D9gnopoaYHXLpw3Jo3jxvF9kRpW6YEzzwBp6CEmh2zWmrPdJjGQefdobEh2VoeB2",
  "key6": "2irNi8cQendFHxJL2wfz6CCU5Xavjtbdn9Y35wV4kfyRcmvxD56dehjGjQCGXcA9D6Z8b4qWMFZvUn6fpD5FVd3s",
  "key7": "2TA9V3NRNqwnys1cEqSuYG1yJRbo5UfkHmq5f3CPZPHSA8rJvMR6zacnWGCDvfNhMGg5UEgsofVUcMkVYANeTb4m",
  "key8": "2ra5k3sdgBG3sUQXDKRBwqryPCT7YcmH7vpSsTL4T3KXo63WE2NQHdYZAzzx62TLAWdRmPR4UB546Pn9h385o7G1",
  "key9": "3a5E5dzo8FNqczT7MMSuqRh8dc9USbnyNiVuEA1jGeGSRZeX7sujpvXAj6A67ngTwYvoU8gQ8CFxq96wBx9iTNyb",
  "key10": "3XVTNd5J6P1nYZUJmin5xnKPeoHG4cNU9cg4oGXgshZpdBcw4754hBpXyqfaz1NDJSzarGrEpZCTC3bwD3rNP7h8",
  "key11": "oW887ZPPjP5RY1ekdWjgXgpcYveWZMPAUuxLFWn8aQNHkLcrnnBZHi9DmNhSTynVYe4CSm47Kcjz5dG3QHftVGA",
  "key12": "2nEWziFfyhicV3wVrwMu6jggjMadxBcXZMa98zd47AabEpsxTtUVRHbCF32L9vArL9NuiXU3FakeL974qJoSpuAe",
  "key13": "2LtCpT1vwyLRYjd4fMfUiW5GoDgQMUb2jN4qmjduUUrUouLTB9ZVLPDwRKk5yp2x17Gzpos4pRBy6pYc1XEGFCEK",
  "key14": "3GdnAcTbWdKi62AP3VHvLDQ3B8XXuJEySr3RHzhpYcd7v1dgg8WhMAG6eU57qZLQkA1uJMTC27yMMqw4TGWPSxSn",
  "key15": "mWdB2UjNZDg3RGycpepn7beztpxdbwDZgYgqL1CpifRu6vWyg3Z22KiPCeYr7y1nbSn5JRfEZ8VeswgQhgJur3J",
  "key16": "4gLY6xMEJtTe5WcThXwLSGNDYnVZfUHm4DgcDt5She22kp9hpPkmHEe9zcFZVHhieQ6UdSccLzfeV4RxdHG8z4gk",
  "key17": "4vuik8g5PCAAfAu4iiyoCubmzUisYoZXHaMdfXHnQwmBx48SGRyK6u8WZdCmBYfVGs3X2W3W3pea9rXaGf4q1CDh",
  "key18": "XQ1yELswvyR9b8KFLg4RUc5faKAdLXJEg8QvCrsQg6rYBmhq6r5Yrg3GgjWquSKizVMfYXN2XpdJX7UpdnYZY37",
  "key19": "tdx2KcBTVJaGRJFFTZmdkbRhSe9Z9UF4VTXyssL9jFxMSg14ydAQTVntg35qzPTeqYJBxorCYGNYDqBk5zewYmh",
  "key20": "5AtowHKotYYmAMndbWPXp2mqwR6fvJgjE9yU1NDa8moxPgGZE2CbUE9HXgbJYP8PjpqqyxGqisUTC8DhXti5jFUv",
  "key21": "42mHQerMucCEXPyAGeT497PMAuavWdDv7cnsXxfSs4vpcJv7nq97SeSGJDh6FfRzGSsqgxjfeVPyFUHwuHeqHntt",
  "key22": "5HSQmdfp295CZD53Tmrj688bLfutyia7K6K3dSQX3MPCPM5rZ44hJ2ba6PYtfXDcpJ3hqs6iypqq6iniBXjKNk4D",
  "key23": "4oFQW59Rr31bcJt28tEFbTQsgvyD69ek37he9YPDrZiTnJNDjYmGH67cVNRRQd4h6hNiPrh4HEmBnsdkM42YpauX",
  "key24": "61GxUn7oLmw2TFt6VFyuJBvg1xFRRrNRo5quLaGBoBNWm4GLW8Xir34Yy3VZVgGWKjrmyr1msAAdnsjHq4wgNRvj",
  "key25": "2hnFpDvE2ywMTLP2k88Frd1HMKKVjMsZYLZWyZCZw4ny5bTQ4Qtv8YeCPcyxfgTTE2z9PVBt1zyoWjpufnoQioy6",
  "key26": "3WmTjYG5crJqVhHXZro27QKJE3g5wVmVrdTKowWvkksx9Lv1XHWNBtEzVCd5vuFcigvJNKxbg3iaaD3b2CJxWtwn"
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

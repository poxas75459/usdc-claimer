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
    "4SfYkqmddKzc15KpTWeVspow21fYwoek8KpMXapZqBZtHmiZ5jg5ptzFewQjic4sFmELFK3zgb3oro5T7jQ4oLMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCkhEcpBtzV11kUTqf1s7WfCzJJvwp6XEx3FvhuMUeYUZNmUZvVFF8N4EEkpqwq2wGpSxdAVdXTCFncPsGe625K",
  "key1": "PaGhCKLHKecFtertuMdwkwY7T3R7tQNThevu2HM3NWJVUZE7iLBDS7aWrTSAa2Dehaj9Yp4vkvEhfSFc9sxk4hq",
  "key2": "4PvjofvbE128BjTTU8UnHPjRCPDY3z27D7DAZyqAtEcq7UMnewAbAoDQjccSa6KebZStVdPQu8KgjCoKy5UbLCsD",
  "key3": "Ei2Lqv3LEdK6wGyFjqNDyFMjvtHXTDMumvvKAaULB8gEuiQRxALKx3SoW4Far86cwD5UtXZnssLw68eQuNKPTqu",
  "key4": "24ip6fpwAxZhz1MaYRmvoqLrRYrSbCKdBiJEAa2RJd9hD2G9LGmNt9w1BoN1pANab1JpaHrKEqfiUE7HQu48qnAm",
  "key5": "2EEr6WwLApNQEeVCf1JJBjCL4RWamupiA8jAiqEu8VGtT4v5X7bCCw8kp9x72uWPr3EhbJtcXTzSxoYw3emFSA9e",
  "key6": "4hdaq7FJ86DK5VkgMgMN2VS9WXCr4rjc8fwtfJyVXHbHtpLG21C7wzFkSeCRLAGEAgtPSC267cqjBixXqKiYdzx",
  "key7": "3GyoS43MxraBYTj3zx2BkYWnzL7XdHhRfQRKiHcXX6fdisaz2Hh5VMx25w2rQwBRy8aua4539ub3AwaCi5dE194s",
  "key8": "afdHyE5StPrY55RNtkwiW7xovxQ5bJuVD2XU6hPqHX6roNoPGMj8aqUaeaqi2ZxdSEQubJ2Ugy9u1ZGrqRQskWr",
  "key9": "TKbF9P4NiGeXyWE5rBukTXHMR8yi8SPNVJpXgChw4B8Y3wf1vZdFVqLnp5vyHabLHYZqZYMxoAVWZEbb2zpT6TK",
  "key10": "5e9WUMTPjokevPPAinLr5FFZAinWg65buBWQcJ1FakqFV3Kg1Wh8rKnRHMVhErYTWPJYCeCMD3EwXrfVmzXnp9aq",
  "key11": "EeqdemxzEweoVf5LV6q1VSDiu8YE8gDF7M7qv3xEmPEe3bGfDPNZph1HbmngF6TXKQaTijXb2ouYSELz8FyEqep",
  "key12": "4QVVDGFaEgGD8ghGiF959K3H27jxsyw8DZaMq94EN1c8RvUCwNtr73TJvUn6X4BL6wjuVCMsGeCn7UuJSNCb2PVn",
  "key13": "f194DjscCqdJFGZnymF2GYYWTySB1apPdrw6WincUW9Dt9JnwJhDa7nNaJdGxjSq1g8i6kA8pFZDCM6eiyUFHUL",
  "key14": "3Y12apaBLVnjs2p2afoQydk3tAcCKuyCqPpYw5hnqPPHeC7VFCPEVS3XVjyhbGP23MwPeyYJigMvAcR31DYpRWjB",
  "key15": "2R2V7yoizUDC1rqawoYdqYf9FeUmBLsn9JpAQ11BzHhfoAp56uUexSfnVKADskHN3XgvXk5s7EECqgUHzwsdkooW",
  "key16": "4LQX4haYDwXfiQmUG4bujEtLVacro96HaiCkVV9uP1xK1cyhPy9Lr3UDKBJMLfRMa2TtiCxYxonEvLv7YAMsV4Kr",
  "key17": "mzQXPbyH5VCnA8Vd9WJW5p6PZkGE3BoRq2NVxh2hz8HwAWjnfSK8sviru8M3tDVeJ5nbz4f1Kycn3UMYYHEkp94",
  "key18": "3YF53hKgwsJDZQRfQThqGqmvbmyodQFZU5JpvxQcigZJfZi89eTXB8XGmnBbbkdXivJNEUx28R2rGLEm4hq9EQqZ",
  "key19": "5nf7LeR9KsqUZGrjRDq7ycNs7t44DYnqdkwcHUu1vGD6owVWfGENh5fBK13XWM2Ro7jSM8yD1BgdumdEjCJeyCdG",
  "key20": "3LwQcXENgA5DeTU8j1GHoLTkJegXjAhojmqG5JrrLZiGTpySRkkurTrm6rr5mMDxG5iZyosVeBpvUtFTo3DgtTq3",
  "key21": "2mUcZPZpJ3Pnjk1nspuGoPFEShLdZxZyBjEFFLn7nBBH1xoKdzRg8tK6wk6ByPcCfqNXFL8qNRxzw1WKkwnpfFCS",
  "key22": "3R8BqjzYsL5Nfhcn3tC9Wu95oBKxQ2ZFypBmuGiJeNmUTVTye9yfiFenqQTBUU68sGu6h6vBHM1QneWAMCMajzjz",
  "key23": "22eMsEaBE7eGLrPSM4pioCdj2d8kH8aFzKDkL2SsEf9ygEyumm8fDSHB15qYjadUwDhvH332tTjTfku3W5fCuEBw",
  "key24": "5KbrHtCzJpA2vr7Q7njusnWnUiTFdrPNzqFZGmDV5qGk3SRg5gUw2zeSH5LCqKUzBoxJb9PyMtrvMFRJtQrtfeSS",
  "key25": "3vMk2fc7SDSv9uGXw9bA8gRyYZhNJBPzmuyyWhcy3XkNUYBorwmB9iiqPKAfARsrjDm38bfNif1Ty8F8XZMo8QTv",
  "key26": "3vkfPFekGHX9pyVPT4px8puS4xrzu9DzMjagXUNxQRvVBNozPHkVFG56jtTuRydtBQF5kRxCkkFFSsmbdfsLEBQb",
  "key27": "3KDgWSoqoGoLddvDKMzU8d9245Bg6jAPUdD8ag9BdsNk7xgHVRTENd7YnQWWendnPGq97QTVUX5SGCoucebfgej3",
  "key28": "3ct7vXA47itBqdShBDoNigc3meY1VYq62tKdxibXpNxjUWYmYN4fZqX7YLEzNQf812giaVj22TDPrErV6PpVesgc",
  "key29": "3BQA4aHCzDJ31FX1TpjJz4cRREmTa16T5eL5woX4sNAArDwTq3x4KxCxBjRtdXe7WhFDFzBh2YebAUL51tWaP6Ar",
  "key30": "67Vw73ikTHQqW8bXtBwvHzgehy6n829XmAKXVNQ8S5uNiHRjQW1o2yjM83u9YiYaZRy9qZo9D7k9ep11Kmxr8tEj",
  "key31": "aD6UBP1c8KeU74tmwgt9e5s6rvSmdaqoyvbqSLeJ2dfxhwaeGzhUdJhAkFdi4DM8b6hPcBiAs41KZWj2kRSibpS",
  "key32": "4cLBj5N5TFT2Zdu6NFWzx5Hmiuifx19o5Mnf1Penz87xbr2BTwDviryZr6kyZ7dW2RmUAPTxX4mqPiRU5BmK2CyP",
  "key33": "5qh3JDLFs5JqyaL5Be57n6EyApmoycoJ8imZDfA9LU6teuAoudahfDTez3D5PniuCcQgUcKRga1iyK2Krty1Gzpo",
  "key34": "5f7JWEZM6HH2qktZ6EdJpAoDHqtcQQKKrCZmupkKJY7u2DhrL72iqHrw4hxh444i51Y7Pq1RqZcz17zwAeCS23Yy",
  "key35": "4NdMG5nGuKdC2HDv61wR7vvbm1As9g9589GQPkE2noJnbzd9baMSSbomKD1ktKrmy7QKjYxcHkRJvRyM37XB39gP",
  "key36": "5yaadxxUzZDKLp8ihLbrCZuaRhvspLCgWxtaum7phJHoojDsJy3SesWRFdzVRR2yCWx342BzcVho2AoGFT8dnm8p",
  "key37": "4jXTeTg6Jd5AL4zJ6LY9WVcc41WPrNXxY9DmxiFEMc92JcDMyG1aqaYp8PU2ZjPByPzG2RryWtG1o1jc5hTAnhfF",
  "key38": "62ako8PqtmAgRZ8XgU7zQJoXu9RV9QwnsewZ2yzeXDfzBkuBnoLoj9wPYgmG1EPqoEBAtS78RS5kf2xxYoCpGQQx",
  "key39": "5sQir9X42viF4pG8x6b3PBEnBGbSLQ77ckZk7SjydYeMujqNiKBqsDY9EWqtcv1vR1qXqBDG12giJ2hGbecirdsU",
  "key40": "Z78yh2vjDN8ieL9tCEYXw5kmP2BE7mnA5yhW8iCxgTnM1hhCwjzYm8NWxdbwC2XFMV5Fxb2ezar32B5KUHgennr",
  "key41": "2Nq5BoaeTgZBQqkT1K6LZcdd9AQrF3VdS1vDKvHKErCtzetMkgfYDmG3EbtG7MFvwwUYzixiN8axtGCNXGruLnEZ",
  "key42": "2GTCa8ZjQEPYTsdyuJ2KkMngcaSHghFmPs71Zh4nnniCaLVHBaYDUc5jb79r9QSK3YDQZJnJp4C7hbQesJCRwqbN"
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

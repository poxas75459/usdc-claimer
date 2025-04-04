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
    "3XmanZmBtm8ngHLXCH5is2HW1wvMa3Esj9Jjo1WY5ziUgMjFsEm4rNVVSKk8xKizZEGYYPWQVM5rbAJo3sWLzPQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPtoPU5NLUVcFUEdSCCdLevHAvG3qxMpAb4ivGWcyqdknqFD2aeV16NXTb6nQHiZarwKnPUNgerWUuCXiPfHrh4",
  "key1": "2cpCcmscMb1ZiLyoAysxKtM6D5En8kbz6h6KFdqDVEULQHRPNV7TzPTte1qC2NqvWYrKbpPsvFmsKVX4rpPpNxzW",
  "key2": "4wzhgLaNiGR5HgANFvLzyCXzJt4W5jd2JhfpG39yyKWp5CMnT2EScKvorzMqvuzvmRNuWgoPhYPGJG64ojbHq1k1",
  "key3": "26Nd3NYaPYdc5WoVUFffTbYhmhmbBdjrLZvnSxcNhJptDmuD85VvFbtBDynJaTYDmAqgReJzXnPYD2eGBroXbWcY",
  "key4": "4293Rc73mzDeB6EGCQuZS5mu4i3fDDEA1PyfJnSHFqb3WMZh9EF4Fqp7hsZ5ioPXNPs1vjWqUVPk7e7vYFVfuzaK",
  "key5": "HuyWBYzUbZixcTL1JDMZE4cAy6LAsKJCGUdoggK7FYT5HsnjdX4cfF3QmHhyfrNvfufcDaJDS17RGTLDuHkhKRn",
  "key6": "5xaFsrtLXnT6mu6iwu1NfQxP6azsHQLVAcwbEENVzCxeqGdCyBXumnj9PouDTdZMzhZHRq2HmyDLHtM7av5mcPcr",
  "key7": "7Wv69KnTENE37XdarJNqnFb3kQQDZ9uHzCJbGgVA3XZ5hEPU4KrRKfuW9VZFQH2MVxfiMiyPSS3w9todKmt122v",
  "key8": "3wJnj1eyR4MYaQK9vtjq6J8siAppsnLN5zrJN7Q9iNiZDi5MH8BW6a2xWm1JvpZfApsr3QwxNc4nqy6PLSdHjMwz",
  "key9": "3CAK8Qng7imrNP8T5FjKU7vz8TYiVytypAyJ58WGPQoEWdG5ZjNZm4BpE7yekc2omf6bbs7KZfEhtWz95a6kqE75",
  "key10": "uKvrxXHHwyx3MQjxxDxAxhejTKjCmf8D2pCcjNdDDXeVka2zhPUMgTU6p9BjM7T46fYFczWAU6dAf3kGY2xMr6n",
  "key11": "62JkkrYDSJWUmS8eyQXhvRYHYiuCVUdZFQmvBsuNsyta2jNibSo5mErtkQsAvfGxQRVjnUYmxc4hWGgeTb3AxpK7",
  "key12": "66hUzoUL4qh6f3R76cxUXA1xb5cKXf7hqK3dm9jy5f3TFu9TFBnE9iF8hDZWzCyKVPeVLQW2bSyKvx9bqQojk9qu",
  "key13": "7zUDW652seFeS5S1zGEGHuoZdLjfHG2AC6mgcinPpSCRKEUXqfQ7zgik3VNW9m9R1o6vAhCSDrnjvqoXabbHExz",
  "key14": "525FXwHrEt36AUCYp62r6CscuiakjD3dcZsaEUofUgucmqmrUbZkT4Xdoyc2wH8YqV4PCbu1emzMSdSgxjyYN2rN",
  "key15": "36m5r1VHhFUJKA29DjsjZ2LYiwR7aZYkCoXpTfovkRDg3vtXzYmA8xAR6AQ9ifuyMTKiQeDjqmtKrxkDG2ehJ3A1",
  "key16": "56xCqkxc59iVDfpnkmcQSm83CULCZRN8VWwmgwdNtnt2tLRyWtrH1ZTt7UBP5YVmESyxgDAZ245qr5TfQoJe1zME",
  "key17": "33FPJEp5kHE3VPh4Cbd2TFVtQenDsRLXZsUh1dcpU2CgRYgzyT6bqQftqvM4F4dokksAvZfactiGJHfwPMzryj2f",
  "key18": "3JuM82qUyVXyAfVPvcWxd7CRnfBf7Qeh7er1USV1H52GxDaj2VKA7vXadkkz8jpKjF39ReQgStEPcJG1VGQaypsE",
  "key19": "VEpwFP71Lzff3Wedxr2ZK5cVvRHY915GbNeQP7QxuCMsGAuU4nKDqxNbeWQBwxiWpB811vW39SfZ2zF4Unps7ny",
  "key20": "3Po9ZZouKcua9Lv2vTBBNEgRW5Ng1obw3kt8UTt5FwKTZtg9Cfhq4Fy2obmAoTzhAFF6QefmMovi42UrZ3e2e2Tr",
  "key21": "4zs7i8n5QfmnE6LPYNSW4uASgiZKSBx1yS1ZyyTvdMj2ZGZ2oXdeWUR9NSEWHf7JnRH2ZAL1pNRXHwgHixbMGsTb",
  "key22": "5YvgVegykyaHDKP53ZSCs9Dazwgbbsu6RxbLzWnPUjygc7rvHJcavAwBiTThZAYEykSnigzTYrbP9hZBjHoU7rE",
  "key23": "XqUAd7k8qq3HbSLEULobguh7JxM4hF7quUSdNw5FrcZgeDp61s5kaj5K9xZH8hxnT3eGEdbmsF7ayr9njPBrJuX",
  "key24": "2wAemQc6E79CQqUbEvZzLDi6xBAuzbienjFKgCkuQhAaZrLPn51yJP9sspZ6AvsAyN2XxX4VW6gC5bLABr6zTjz5",
  "key25": "9e9tccWMWd1FpTgCEHdpSh4SuPfaANfxoGWU5qgB6bbMhzMZvqreCjeHNU72bXiGnno97TT8vmq8Qe8HAt96bid",
  "key26": "4pEtNGbhTJrTZxnbcimLvoTMjTdzSRpCyjxo2vAh3PFLALxqQPjA7Tpoi4a95s9UaFhaJzvQcaJq134XrpQV8dSS",
  "key27": "23XbXZVMJKZrw8gF3oEFGh3azDrjtPXFvpNHSd3morPtyzBedJDqypy8qYFQWFsV5ydkVg9frzS6XKGG5nq7ZkDv",
  "key28": "5XHBr1ai7kmLLrPDoaGH4C6dtnR1qZgvJpwQYiKx3nudHP4MXEgXyUB7hxMDKHUaVMESsmfvenbRxJHA6tGYSWER",
  "key29": "234BMcugM2oCcJS4vdVP8QfAP5yn1y5awemSrRHXf5UNMVcqTs9e6f5Wgtew7DdArktRPC92YGWjjYhf5XXhuSum",
  "key30": "23JcnbJdAYzn8GL93UeKAxhfTqtVn9PXjpTzX2PKavQU4zp4PMJKcw6vFCnwEmiXnLn5ZAx4oK22Qd75jPKEna6M",
  "key31": "5sHoYMQ6YgvNax2JhSswpNTL4CxA15zh6Xxc7DBoj2ttxkCSvanN3ZTWiVtwNY23SGx5VbKwsEpkzPerXcjFFauM",
  "key32": "MSTsrFXacq9UmyauZ1izsSh72h57LsnGovro7VqRx2NfTN6a9EMxqisHZ1s3UtZqqgbByPtfs8G7QRR4EHzhHe6",
  "key33": "3YPJRCpHtNnEUZ2CA614T1bDxiFiLGskd6HRUGk9qpQSvjQFk3ybuS4r1QTyzm2DX4YDd92BhCZ8nMFQ6XPtTS1A",
  "key34": "3FGueZYAfv7N54XdcmwJQFX8QVQ3GsFuvxzXo5442pp62d8Ym14UVfkQD5bmrZRWHsrt9BujoqYYYpJsVJnGWH3x",
  "key35": "m7szwBzLAUPYMasCn6yCSQDwYhgwKF5kG2SMYbycJMpctK88wkZEnCKQbsZEF8yB1GopyxQ4GuJkJBxodNakJwu",
  "key36": "431X2dNMoaT34EwpAqjwBop3RDJF8TXEaF6TrKzBdcQJKFfVm2s414XnwJjNAL8VKqxxn5yWBK52PCVb9JF2fRbo",
  "key37": "2cnhSz4r8FJdurgmVUytV6x9fX1twhU2K4AszCA3hn5Z9oJMAgbUu9Gi9rmimZiBemx9dmJaqTNyn4S9b4dqeZoN",
  "key38": "3wBnjfm8nVV2jVJxQXnMMHjPvPKTdB6SvZj4iMfcrEbpRztfHg4gBCBjmoo2qMhPCo8vWP77V34PSJUQPtmVBWFL"
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

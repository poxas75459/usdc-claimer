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
    "439xgVvDu2Uy33du4dfGmzWDtCSRAoEVxUMXqHwc4Td6wMZqfSU6kGSPNaPxyQeZpqrLmUZBqYoAcZRFjf7YhTg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqKynwZqf4uyQaasTXBrBvT84Jpqr8MirT5LtzPry9hdbmKtVnCVNyCEQzUaSUpqsvFtyB9X8jr8EhAVA34uG5n",
  "key1": "2LedmXHdVEqfUSFgc18782gkho9XFdPydfwNhKHehPpwGBxT2RcWB283DXygdzhi2LbDaSeBD2WXtPXfauk3b7ae",
  "key2": "63bUtGcoRCoDsDidmaUi5qT36zGKyT7f8vNuXJNFMrjCXCTcK9JxHvXiPbSY2QgNv3Vf2GyvKsZhxJbMGKvpTzbX",
  "key3": "3B9CtAw3A8Xq5e96fDBJNpKv4WtWnZTjq1GKhXdJkaYJeYSXJCZT6qdsJDf9NT3HuBLLXhRp7rdNqDzQo2Rk9WGQ",
  "key4": "39Vro3b6zyx1WpCmCvS8DcPqcrWi9DXjXUtsf67j5esN4hkXriKH9VRH6DixYUYrdVXQmC2f9KuLbSvHSc4FMZid",
  "key5": "d3eDLvR7bKpNbhTXrAru6T6WBYJf6oK9xhAXDFyU8gQkawMhVb9UvjYLH4exk61KYVunMpb4w9zsRnUNCo9wQRe",
  "key6": "2do2iSDmkL1nQntEGuqRwMvhdseK1LmZBKpxpJLSFWq9oJ4a4hBZa1ohxrVssvdXUwctgLfYRhm6CL3F9ipYVE3L",
  "key7": "21mAXdNwbz2Xrn6RbmHPVhPUuTB6Kx6CM2FkxVvg8eeKiHU2qjeZvUugezqs4g4ZHVBBTFSovefWFzevosxKp9r8",
  "key8": "5BVVLez1vntZvcbW2Sq3pHqNuxxm5pYkuEp9jniTnehRVJMKRDn6qm8HgacBJxUwa25BnR5Q4c63UxfZTus9ES21",
  "key9": "2RkZYfwakwvut91vKUAqegE3CPwiq9QYWc9ntVHMe3p5sszfpb3dZxgsh184kSsdmUenB9gL3Eqde3jPeaJAMQoB",
  "key10": "3TZpoUWvfd7oGr7iGZYhbGBSS95H9MK9G6zv8a6KWab1WS8dSk32h9WowqCNUAdQJLaTdmXRVErzoSeyQUuyKncX",
  "key11": "3WbfZcBfGgqDBec5xtYGzeCLNcfqVXToqtZ21jCDza68rKMZMQkAhbaZuYpkAUW1UUcnG1pCrEek17VHrE2YAn8f",
  "key12": "5ANC2rFmnM6ojsDeeie7GbMTcpe2LV3BwmQPiYTu3RYuPtsPcyA4jvpRv5fLS3cPi2bp6jrJxG9mjPVxnCK22wV",
  "key13": "5FXzfQvKFrM18CZZAeKFCzmmc6DGAs2WToNxxK89rSUU9vem8Kid1hundH8wFbMnBawCCY9weEuKSagRpNPczrMS",
  "key14": "3bZhqytPwqjDEAg3oJx1jGNP6voynRS3ihQwRSqTXSBYa6bCRm6rUzvAU9DUzPqBB9wydkKV4h5wzS8BNcoCxMr8",
  "key15": "5gDPvkLKnHWwKFVBryUdbYSMDoDSUC14PRjLdEyAZLq69ZFpcRLmUZuh7Ppft8RjJN9i19wFw5RFJn7ebs1iBCFT",
  "key16": "3tuKE7br9tN3T6JjCMGnErzfXgNNHzvRENEprQ7Lw8pxH59VNCx2W1o23B4M9BuA4A7C1FP18p4tTqhivfQmkLnp",
  "key17": "4XaiUwSFtvWqZDoMZXzAb1PVGR7T16fE7T2ToMdGDHTzThXJrozaFGqymLmkfnPkx3xECp5ZVVjiM1ZKWQejhhug",
  "key18": "3tkuHy8pGBSGhpFU3LA5RLWHAtWjDstFWVLFY4tDxUwP1Dsq9nUR9iVhSmf87Z1BBRpxRzXFwoXPZEyw8qipCTWh",
  "key19": "2M8WGGpZZ4swFpeYun7RKhq9F1BDZjQoNFreAC1FkHisF72V96VkhbXcRasriVVRrex2zJqLDP88vfL8kqYwAHJH",
  "key20": "3iGeqJcytySaPK6KhbXwKpyKY6wHsrYuww8bn7AXuoU25M4dkEpWAvhvF9iCcDRogX8CNbPZ1m8LUsvhn3HnqGh3",
  "key21": "3g2Sci61uea84CyhzWbXY2UR3kjAvs4t5V3uubxEMRFRYjsUw7PEFGHGeVM1TDT5BivKtaG75dvZuSjz4p6WG8tx",
  "key22": "27mW7L5LD7YB14FpzasWDnBzVbci8vj6YwGgzfu76T15xHCg8h5VEbEz2QB9Ck22W3fdXyeQAAjxcMXb8vFh3yP7",
  "key23": "4g4setxJTHpcGG9khi7z1zyjVAWuew2c1fXeoZsHcSmi9rxyStg2CFTBbFcfZ6Fy5YwdNjWJPvY5Yaos4nwK4ubW",
  "key24": "YLeJJir3KYmnyCmpvV4WPhynppwu4UtNrCvYxhvSv51cdKP5uNmX7LTk6USUSx5erYkv1qhkVoUtTmmEqv13juK",
  "key25": "2nFHve6bTFPi2M3ZToPXyUzQE8gBFafoYz95fBVs5bieDUnRKw2u7EGPymEWrVV8HaeyC6KRH3fx1Q9v7D3j7mmq",
  "key26": "4QEBeoBzfVKRt2gip9jFrYDWkv9bJgD8HwqHrLbNmyUeeVPkJ3BVBfGHVk53JFp4rMUGMj2ofDNPbCBiVWpt6hCX",
  "key27": "4rqxtRoTsWaE8JsR9eS87Tsd9hXbhE6LroLyRkoYjsu18E6JKu9VAwocjGJUeabarroBJg1DtBt6kgnCvuESgmo1",
  "key28": "4kut8UyzmRBX7rNb1FQrNELrQJ1bwc5wK8XneLJ7dqaDGB88dKbu7DwwVf1PXq8DyAQz9oF6daXfKuTdtszRMCyR",
  "key29": "3jpMVHxpyc6UHXWknRvL3XhN8jhoSh1dB1GrZMgAyHzzZm2ZZG6ScUkTEpYjkJQrRLZsL4LQq8c5ZmLu3Yzt8f2z",
  "key30": "5y6FVGJv8c6ZsG8WzcuTGZMengKL9rs2efmYQd9JNRjzvBCqncf45nbmeWQ1wuUf7kbCA8KYjrxJsuDJUhaEgPLX",
  "key31": "3VJkgdGduSe9Gz8d5vQAYfNGboE3S9yiGK8z9N3tfewqCrgFLMoSJzjzknxCQqN3RcvouBtKthXyBfYQnLtqp2TD",
  "key32": "4e5anUkh15oLiAM61zgYRj2idGEwBkasHc7pcA3NF4Di1p7iukov8q9Ywon6L15kTmiHZexXtvX4st5cbD3QCqEh"
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

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
    "5sfRniGuskc1u7MXHJKyCzz5g42nyeuvWjxooxaGSeA2rz8Q9G8H92Zd8U6gLGyDp6dM9eabhdDrqjaGekVriEzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YgWDFwSrVsGy73UHcnmzf8VZRYaUAzGwtpZSM4pFC5BERecwxdNFHzeHqNxMYzeuCpf5qZ57KLi6xPdcryipiE2",
  "key1": "3wJnHW58iByJoZGqxevoDs5Hc3GUqNTaDZFQtUwZzu4pSE463fb5vM8XNWCGk9fTdcN2tqJUxJK96fcF2bw3DiDQ",
  "key2": "2NKaqzSh9qqrmfANdyrNHEt8q5U8wzpEPNBJZXwXFdQ27puQL5apy95sd43CRya9SfpRjKXn5gRxLE4u9u7r2Btk",
  "key3": "jBzybeAU5kUuAo7tFwLN9NbLmku4MpRLcvhiQzkFks5B28oKBVMD9QdoG4C17h5YYTq61AvDCgWU3kBPqEQLypi",
  "key4": "2EhgP481s4ESJYx6XMJAq2CfjWmCcdrR9XhTiz2iiugBv1VHLVsKHSoP9yucA1BBxPNJx9uPXMGJLYDkdLPFFRD8",
  "key5": "343T6tXno66DGNVNbHAnpJppY8g9qd4stvaH6CQMRBdYRHE56dGvu13VB7odSzJMKy4Xb1dNeFR6EyKK6FwmC2xv",
  "key6": "mghfkWH7nTmaUHLpTbSaGiyqhwduzGnsjsZgZBcqJ3xMigdrz9QbUrNs4Lyr7mpZXdfp4wnJ6goV6frfQDQJfxM",
  "key7": "5nCDTbbxAL7yiv88e9DnNQgoNQQnCB6sYjVTpdu2b6naGrk5poJM9b8U7LKjthixLNQxJqtzNj3EZ8jnS9RGZygs",
  "key8": "3RLQz1mwvCFxwiZq9U9YzFFMod1bPm3wfo1KifUtd6Mwev1G3eaQUGpHXyJaEUUFR8GvjLXVnURVM8vqjxJRYagu",
  "key9": "2JHRVFVkMSKnGDvd3x6wduDKKMjz6icSJ8aW5ySHx7HrNyVEosFRZ1F77vPSd4s3BSHnZ4YtLbYzkQdRH4h26DBK",
  "key10": "3UtEGxa1NznSiRjbpL2p54jcC5p84JhMpN25RL62sN1UCdtvYvm1zxGgbYjVtePpuf1Gz5EGB3YF2S7tCj6geVwq",
  "key11": "2Q3u3A3RjUqbukWqKVLJv5Wy8LvDJhS3GPSZnJR6Z2uogfN64EQg2deBCV573nxroqg3ALVEMvciKV5dB1KH9yu1",
  "key12": "P8hk9MrKXPVk7wMUhGGKj3vsTFHKzKYqrvPDxD838iBQePgYKiq79annN1KfbKGBkZ1Ky6XdG4BnMo4kpgWMAig",
  "key13": "4uaWD5ReUAFCZdg19RnWiGhynWAQSDL8B6W2ZEheSN1UZpU8s31khVC4XFxiFhchBgey8hEkwSKWEL4KUAVyMPeN",
  "key14": "4GByFVRkVEEHNmYmndMev8Af5o8sYkpfAY8EQkRkHm3t1f5k5q8Z9yBkuCq7kCBQZUWXSswJSiJdZHaRAdrPW8B8",
  "key15": "29PGEYqhnVzdYPVe28zq42aEEQDTMB49WjA26SbVxB7kKcSpvyBcJLbx3LQBBtHHy4HmiSqhGVMV7cnH58WimZd1",
  "key16": "3qTNTXwZ9AuaL46oF4nWZz3ezC9YZ9H36vLKk4M5AXkvW6c5jnFt6qeWQp6HKJGAJB68cfydK9Qt7VsHoG5TL296",
  "key17": "3sYw8bTdSTLQCLXpFJfy7FVvgVPhbfCcdzh35LGqxRFcUCnHpX2hVrtURnzbfBNytDJzS1EFzhnkvpat2r5TUxv5",
  "key18": "37fNVdNPfYq9ZaTchmNCSTHRGeGyEpBGzsKhAmLoCeiDUrmeW3EpgQp9kETUmSsvfcjVMKDQdiWMmUfZo6syY8E4",
  "key19": "2FXssrM3fADofQU85UTgRfWYZHoddJ4L4FAtWZyvYCKjPcRaokjrE6j28Fe7BYs39Qo5rotatVofEULWK7Qr6n6h",
  "key20": "3BtpkUiQ4w8vrcoi8v2NLj8jNXrru4M6Z1bzCAUmH6harL8RsUoEqNeeA91st2ygap7tWFgL9k5QDPxqP5royD4G",
  "key21": "3SbU2PcMe7NDBrufkjSpGmRVcUbSN59iiEhnb4vuQK3Zb54oRESqooqTyj4gYoKq2KLGVpRRYfvb9HkuQ9Cak7LE",
  "key22": "5qJ3Vpn9N8DPFPAdczrQG1yaUW5LQcEw7SjKSV4yELmti67JrFfMSe8JE2LDcz4gRew5Q6zj9H7cfDG5GzDYD7fx",
  "key23": "2Xw4h3KNa8HyR1KbiJDTELCxpe7wgnFXv9CSw7e26XreWn3FHm98Cko5ZM5Pgt6vVcG1FMEHpV8f7Hep5TVhPj2W",
  "key24": "pKmvbdkCEJdPGjYNJBK45FgkhFaD9UaJHki9LJyP9a4Ebuc1HnAFsE6bu6rsncu3kKXeUoYkKQu9hLiBxhxQc6i",
  "key25": "2f5Cf8EsYV1LEJHkkTCpSjwZ2PWFcEAX8rLep3Ww7o87hSejbZJNwuYh757SvzCeMLsc3kDemwSRab34ZuNhr9xp",
  "key26": "2xzsfB6QQRhiLpeWeFD7bdLALzta7wbCSEBiUiTSGzx74fDHSsPY3N8RsMx7HQ9k9CYKa7n9XkQ7Jw5Q9QLpnWzc"
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

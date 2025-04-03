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
    "4QUA1M1rZpAnEREhwFMvKz4QAySo3x1iJ4xHMXUsihVXgKFyVuBcznfQHe3xQr4YrdNDgVBLf32bSgZiiKBWRdgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63d2LRNg9EqYmuwsuQonaRSwPP4P4Gk76aM2jJ3p3iRK3SJRteBYEWvJ7eKBjiQzXTaMcbeWwDHbkeX22Cy8WBWB",
  "key1": "PjCYFiq9qoZRi7ZUnGCyf1FpBg2QUTCu9AVGUN6yge8CYoM8Ze9XWM6kyTxcmDQfXN4pNZwuzibBx2hTF9JMhih",
  "key2": "4TkiURgvhpxK2QiH9C34mW7ZifZGPdnrRrxayjv3ndgbE8LtxvaYE9zjWjMZzwLHnhRLFeiQvyMBoDqSsvrgDPM7",
  "key3": "4BAUhqZnF5EJgmXHZQBZssmV2ShzeNsJM4rV75xYKa4qzGmskNuwqezdyrZ1Txi4g2y1MbTA7GDwftGAmubRJ7Vs",
  "key4": "3x9Vy17Qt6WzBDgxUYTsfk1Hmtfmr6MM1aytKwXJf4rCN8gAKAKaLdbhfF35ftVCBU66pCdpPXSFEmdgvYeVzUrJ",
  "key5": "HDV5jm41SZEyzKQS9Q8Z9cfkMHmXpRvUaNLpWmVw6D8uWu3TpbzvVRtXfzvDWFNvSxFtYqWsC8c2bFPvHwAdigH",
  "key6": "5UwHx7Jjujan155MYPVn6y8215YFSzLxan7stad1SKHNpMNYiztFxafqq3E3vhiRRHYdFKBdry1c281amk7KvxJp",
  "key7": "wr41g5rYvGDZ4Qvg7LepGyEQCWdG6nJhrTAoMEzo6ZUhVBcmhrmzGh9aBPMfW39rkaVbpuztYyRXftQr1pjG48U",
  "key8": "4y75b7XD32xic7kWoSUpD1z6miT8bXxA3xcHqDyXVxsnRU9k21vZTDe84hLzmhxG3sRfyENV7L4ddBdrYfwn6dBh",
  "key9": "629sJR8w5QWUqTme4jxKqiRMQDkmxMhmrkZxkJndMxgwU82xygq7g6a66fdMhu6RcAWSRsbaVreGvjv2BqRdAWtp",
  "key10": "2Rs13m2q3GEBJt4SuGbyhznBkLJmX7QQgRBVVbRFqqNAWP2socvZ1jeMz27HXCrogdYb2VSsoyaofAkunXQ1At5M",
  "key11": "4pqWPTc8as9MQXo2JMXyfJ7D3wb2t3fWdbxg5XJTEEMLtpb4ZfkpCeAMZ2RTGA1VjoGPJuqxkZ3W7cwRAZKCCxjd",
  "key12": "4BXSm6aPWP5HkJx1HhnehvqBUP21LXVE2rHP5CLUX2jGTMEHKWnVaDe7FrAqH9Exkn1dVeEEZzg1xzrG3Eg8aAvC",
  "key13": "5Fusiuq3jQazYJ1ZocdB7DUWy6ctfbyNTzMgbWtPVEzivjT7hqGRAqy5ERruDu7daP26ut5AdGz8dhswufwue41N",
  "key14": "3AdZV6y4ukzLPsHLJRTrnUuzWXefQwB6UcBbyUFGpgMk84Ta7wm9mdE7nLHTTQWDUCNQZjjiK4GVWXuHDKN7F2Ry",
  "key15": "4UG8fCESpGwtdeZmMDQLV4pVoJ8FhkFY4E8DEqxBbnNiPABoPqutq2yTkpnRtD7jivMgVCompwwQLA3JYqTiUUgZ",
  "key16": "4wTiqcdyQ7zEqzfftYZMwtkmpUVHqwNzDjPenGpMnmcoNJivDNe6aE8uxxpQuYReUdzQUsQetBDGSN7s1q6TYUpd",
  "key17": "5tCbZgjyAyTb7KLQHpzPp5YHybbMmhjTV46DuWethTYibAdEpDXrMHWsJ9jqzrPMujfiUfS3Di6EsGERHbZHvCnx",
  "key18": "tz8Vq1CAfm9k68G1tGcQx1vYJiB4KJ9765HZQR6HNCDrqATcqNKpCiuaHmYDuSpyBxv7hhaiDRHYZYTWTRy37EW",
  "key19": "5UmZ9fXoKQhrfMZrGUr3989g5CrZVoavJPhXkubw6HjbbP547Kci917etnZve9KJbYKBEZyF4Gqk4Mksa4PtYqTE",
  "key20": "49yXYhHYW6WtZxaNJDrHnDt6oECMQ4x7zTPMEvvKkuviqRaPENnVEE1qHb6gSSMtkZvd6uEd5wA4Ne5abPh7MigG",
  "key21": "3AqjAaPRPGrjBeHFsGUTTBvJfrMxoEWgrwsEL98brKt9vy9MynbnmxKeUkEWJ6Dkq77JCbTjVkZLtRQv1fwZomnX",
  "key22": "4imFA712ehMaB16hDFrZvAoaz3J5snAe7mSVQsemFrGHbEbCmvU5w2Wfc8sy5FVvnq41abJP1FTnWM1aWXRaEyBS",
  "key23": "2fGMpUFeihC7gCNz4p3TXGaFv1j6SfJ1VPHjR8eJtpXRhJCKYsk7z198Q4PXUmpNcNqax4oz1tifA1xCNeF8mzmH",
  "key24": "5dJGvLLqFp4tShgdLN5CsKEFTKJqHHJU8EzKZLdUuSKhRD2bD515sxKaFafHaMnk3C3UR32su3JJYTxAcf2v96FB",
  "key25": "2zdwpMW4S16Y98gKxEyjftVq3rkz5PezT96aaSbGtiWw9iUygAwEdjve4UAC7fXry3a3WP4EcW8PLR2xeeUksf4t",
  "key26": "GwQp7gm4BzZUUWEMq7hWyt8tS2A7ve9QRoZUYh7yE4BQGYTgE88FhAim3SMSEXm8WJC6xSnLBxaEaATSngCSzKS",
  "key27": "3eTBKBDQaNzUPXKcYsVjfJp2kLu8NjTLtf3Pkz6RabZ68akj4bLUPsUAGRLAqwUResT1gzYCjzKZLSsk1oxCTC8X",
  "key28": "53u5QGQdM4upfNgQ1q3VrFNPGbkTvJbm7P8cEkHgLgFrEpTumsDaGUF5xywvmK7gNJvZ7FvpEZH61NnMPgGzDzjm",
  "key29": "4aEZ6Eq9tzqgLnorK6JMCX7c15RPhx7BbVsPDzxFDm2XdgxUHDhLjNjm5PntPMMqVSAPZGaxWYvakxGjvq1eqWM9"
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

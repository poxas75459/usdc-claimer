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
    "2Mj6yyqsEmPwZY12Sjaicx6dxgHpCA6wHLb6jVn9ak5oY1pCaTeBD75JHLVggTF3rfEcGQVsQbBi46ZU5ptC4t2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Akn1Q5P61zX266ZJAUbFTw8cJfhbq4vaDboYVRMEWBVGX2SUZ9JLMYHrj977d9XADR3iXTeaamKJE31rRSgKSKX",
  "key1": "k7eaCBdbhzAqH5FhzaPZB9NEaF9qaKGHNVtyCjmQrR5sWAhSa6ffdYc1Mu6LLnTynRfuGaP7Ke9DYXddWyHYuwC",
  "key2": "3BPcsy4m5g4r7sGw5yjz8fJLEGmcdrGaAT83LvMY7Lehqwti4fhcfkpZyvKLJhzNqw4zToqRnP58GkYqgHSKem7q",
  "key3": "51e1KT4VHbkpGEKki8sdWWso8yHj6r5UDQnJGuiA9GJtG8SC66ou8JW8fP6PyXaKPbCkWFR4TepQuXF1LKuzCK85",
  "key4": "5sgwRpGzcG6Q1twcfRe6JLt3SgtkZDGwKG4DdjArvfo8tzE487g2m4DfW6Eoq2qVYKqJWEGQ6te61LD1Etw6R2fc",
  "key5": "5rbBRSCALngEgrS8KzLwCAA5b3cG39YVjXjoC6pdJnpNuSbK2txp3PVzgLFywfEVxGAPp8noSYNivzoAeB7A19zm",
  "key6": "4GQ3S8kRfdFccV4sg9pEcoupyK6d637yZXa2Afn7Xg4wfoYWcuvARFM6dG7zPJJHRKjNTR5ZtQ7nS6L9WqyY2iZY",
  "key7": "2bx986NeA4DNW1ZttezqaeEBLsQ9NzUgkqMtdPh2dhKxeYEvoe1yKwuy723wTZHxrWRY5v9aJoTzFFvQsDefejMQ",
  "key8": "GrvUCsB4BwHQXUQSKpbXsJE2TNRchMnBgMGALbdEmdxizRtfdnKtwyqWDT3sUhPv6PrMNnEzB3JzxbdzS1EQy1m",
  "key9": "3JD6bi8gEarKstqdNunBhqPrdNz1u7jbMxu8qRZLewMQoxSTJ4vQcvxLCybA522EHj6HZgUC29Xmp4PiPYfJTRfW",
  "key10": "5tLwqGCEAHkwFjNCW9LyA9hwtQj4Cy7MFe4zL22ZQmSDWnBjd4jkx6KhQEf7YWpdAPSRn19wU9LE9HsqbJz57UJm",
  "key11": "4icwqtQXPBGZcSWX8bQaDq6EtyHch11cSwBumXGikB6GcSn6jkVP5PiRdxN6anR9Vrxf95SFBfM5CBtEoTq9BemD",
  "key12": "21BuoFohTc9pu5uTghK2mpqyPDHM5uTnurGSf2N5u9C21KBGwXLzfkNN9aqSbDuyrvxSPtK3WMmgBfP3fvaB449F",
  "key13": "2sc325onQidWBwGuAQHHUMQv2CPr8p3gCDDGfBywwEwmHJpznjEakam43typX3DVb2rXzrsPuNWDNfJz8B65BuTB",
  "key14": "47Gx6dcDQBHSqVDkpQmdFkKHEACWNYRiQjeUc8duWxV8efuMALYYviZm3DhCjSqHj2PBr9pm8hDLx79BY8tF9qJf",
  "key15": "4Sw7q9o4dvrWFsCtX3zYtdUrMPUYeoKbMDH8g58xYPCptMqcGqcbNujzR8Hr954HEf9GndhVqdWpRdpfz5Lj2sNB",
  "key16": "2z9xP7Yh292fTdb8b2kmP8k1RHadFszm3ejBEBF5QKQ8JHBUThjvcMA7jZTw7MhZr7hiH7Dm7WeYmH94shsUXvF2",
  "key17": "2FtScjL4SEZquEaEqzUNsUnNqe8vHv4mCwVTPE3pKwQkNAaJWdXMVwptR4ZAtNyrw4MCdsq4b69V1Jug9pheiF5a",
  "key18": "3zFZpgg7WHjCD4tRHbDUv3z4E78d9wMQF22dwkqWsUvqKmfxgtEe1wFSQdq6aFdN9FyBvvDvvhf3Mb8fvcoT9V6N",
  "key19": "2FSvDnynwWpD1qJ5pPjkEUWZYZFLjD3iwDVk1tCCjjqMBFG8VRgZBD2czuRaq9FGdjUzfUoGGmBPtk3FB9LWXrTu",
  "key20": "DR1JG9HKYjiHFhefKaT9HRq43L4bbLDvGGQg7XaDbj2kKHPjQ1AMhCA3uCehrboad9LKqvtB4BC17YfhQrkeJEu",
  "key21": "7yPuxKUGYepB7vg1G75d5Gj4ux4EyKrUdNbTSnvBhc7mZmfF1KL8uaT6Fo7TXaiSQNMs9neFKkhS9rmJF4ZMxLu",
  "key22": "5Dy9PaYV7EHdbpRfRXfM8LtVkTunKzskg187T4NCbmEMitJXmG7xrmTiQdfaaH7vbzBZpBFtPTktW4hitttEXhgr",
  "key23": "ASs76BVvpHGPA27kNHsKEhtjdcj525o3tpi1Lwp7GdKiBbJHnQ2WwDs1nbab1nqN4GdJ1nuja41LJCyxxPBuMCt",
  "key24": "3MS97AehvR4hSurXS62NDwenzJN7otzabtQYYam9Jpbj8h1vz7naYxVD5NvGf5VGQC4fyFTQFybBKag5XtyRSk1q",
  "key25": "5ExGgNZtXdpQtMJ9ZWN8Jy5hiXNReXp5QNKwVEzzX9qgSFBdz6VosdjBofzm7JS7k55rm55u9xbZVwWqX7vGaQ9Y",
  "key26": "2U1pSQn2RrEjAcbfL4FxVxQKjYeRh2ZL9Nww2YgMgiMY3UMmXF37E3FJvJAJsZSDLyd5e8B8dqoAF9ncxZXYpWro",
  "key27": "d3G7b9Kriy3Z69JvbQVxTm33M2gEkyuzzmavwY8eYbF3yFM2rUtLtgKnUtvyESgFZrEVHd9QHzzsgouHpYfMjfH",
  "key28": "3XE9vNiWEGy79HUep3op7joaZTDQ1zhLVmeabzYpEf5MjZnzzk7wF3dvpxT36NipjKqds7NMccn7pdUZHng5UBaY",
  "key29": "38giyAn1o1Zi62RSXwvvXmVvVEuGcohBu1JbLS73vvFR5FeP6TpntV4cH9hhfhUmFBwyWoNyUgmJdaZ4xBpfVdm",
  "key30": "2ho4Ct7nXnS38JpPSkaCJ4mb4y3QCTAfG5heXjmjze2eS6JJbpqGoa3VVTe9ue9dxqCp3CHUhcWf2SVyDdta4Skm",
  "key31": "4LHtmpaUM41nxEZAhhktgKJ6HMRs1xSs5dbJrP511AyuqzJkLdbSJx8udTiuUda21qHuMdX4gyBZYvnmwGBHYmqm",
  "key32": "2nmZdYvhWU4ds9ECkh6RYdF49tmmLqzqXobhWYb41QvuPvmcpggcfZM6YCpUMQAvHvPKB2AQ6uCtksYAwUVaVrdA",
  "key33": "5vn9iQbEzM6no5dBNnxeMx77C7rWZn8aPTshUtJWUCCGehtBgDkscV4KBSWbJEDdkEZ8RfUh5kHgjz7k4PocDXn4",
  "key34": "5FRK9pUXPuTq3LC1ZTbcuJcRp8ZmrnBETudibspL4DoGw4LC8ufLjegMLWfKN8mmKUqy7hbGUzA234aZRzrut8MW",
  "key35": "32vbfRq8JT9VcAa1NgbNiDojg8jtWvZnbMMBQKz5FKvsp9yKzQrzN38ZXeAoywo9GfJMSpRLpMomPuL9E85UxkPq",
  "key36": "4v8TD43eqwDrtj4tfrLF1ViyokhmPxZ7E6skHJs92sJdMxWHg2JVPfEyfg5tVrYj4rbFcahZXZKMBd2Anupfm2Q1",
  "key37": "C7G5c4AQMA6K5PjLjNg96Sm4xSwsbDHMEdDBx3AudzZvxiYruhVCdeJtbTdUcrAbRjmBAquZp5trk4AUHBWQ62x",
  "key38": "5BRdVx3Pdpc79D1aEYW3t772BDJuv66NFNUE7kzK7x2niqM57idS9hswjSHtBnyBC7FupRvLAW1cgFr5TTgByFGZ",
  "key39": "2aqGqvuBt1C47ELPbKfCQCwBCJV6HqUc5QnB63KF8pU7wZs7dGM73c1HpRcQCMGceXdyNJWAUjjPCXLaCvTQbYem",
  "key40": "3m3pEpX6XiqHr9NZicxVv5EsNCsg2t8KmZqAYzAvGjTsTyFNUtPNThwv9ba1hjxtePaZ7GqoM1Yf6cNJ4KnyVaaY",
  "key41": "3dWmHnw21WEXo8fUPBNjUsoquQA6RJSVW1bS31aMvRJS6SyktfDb5iUJ9wKRsxpmQNky3ksLQtE2Jsrhj4xi35fV",
  "key42": "4qjmJpVSYYRxejeTv3cmSgwtWCHduCsAvtpkwD6fvGMg7pSLRXJJien26s1feLH7asR4MYGbv9V3NpwoWJodfj8D",
  "key43": "3kR5pMRaeetQ5XvgKTwKXaY9yADvJu7m5QUQEWtkDq34NqiryHiBVS5ucgBWeogsyJxeg68tQbDNeoBn1y6q24am",
  "key44": "2D4U2P6UyyuPfkMSAivuCVf3HjhijrWRM7CbGRmrToNBijQWxHr4fXBcgz5dMWot6Wt2uA5dyU621AASDa77D5gK",
  "key45": "uaGnYamJrauazvVZcEzcqy1twd3d5DvbxjNaXhnZVqbsH3tfoZruUWTbboJqWvfo93KYrKFthHwUchSjafso21e",
  "key46": "3hjM6xksq3mCVMr2Jbtr6rpoqE4DztYM4e5YcWQQsRTYjNWtgFTXxTkXPUBigTiYPbJDdbFFVNyMv5XHcqSq8W68",
  "key47": "4xCKFayUeti95ARUrYpX6iZHhuUnXBDejyD1Tob25wuzCHpM3w5jw5NDeSN2WHy9gMfXvAZA99j4A5vMxSfhAcef",
  "key48": "5tcyRQ1hDH6toYVtkTNMuEF67VF6Tf9fHNtkbXxjpFQLTrauJxzMwEbKbyYEA7riizU9g41jgouK9DstmAcaVaat"
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

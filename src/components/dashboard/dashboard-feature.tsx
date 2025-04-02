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
    "4TY9kdkLuWPuSc6BB9SoTEdhkQiCHHZ64UJzWU7nRMBajEZT7aoGm6jfzC9deK8Spp8z1GqHtuCKQxR7JsyzEDic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h34gYKxrLT8SJj8W9mkkj8Q9sPNpszom6EyiQBdmMEh47hKqUrctv6kysL52TU3uSrAiB7QqCpjRFLwxvo8RWv4",
  "key1": "2pqGrpEmUhMXyqy68u4K79XzrWpQd5qg77HwfzMmzd3soauSwr8gxVKeeEDsyGPCKt7n5RSEoRENnkzD1qxXckGw",
  "key2": "46PSXTMFFRug3af4hvjK1qDstR871skip3bLFz7zTwHEsqiA3umYr5M68z9DChpDMFPmjnrGwaiNuyb9gvp8rpW",
  "key3": "2YB6nrCUJPySc2WGmgLKfm3B2RRS5sXRJzTctXEdn7juYBSB4wY7oAx3r7FtmsH4oQvggpJwwXLdZ1zisLsJ6bdL",
  "key4": "4ZgrZYrFrRvhS2YPepvZ9e4oG8cPxcsE7iZ1Q22Mt88hLa13N5WdtiArWdSpc7jnrEvVq3pNDiJDSY8ueeSbBEXg",
  "key5": "4ADVWYTQZhbnAEZc4RWzxQpBViGRUnAfWrXWiEE2pX42msfiiTCZfMkz86kcqTHz1riuEAQECm3F2t3HSZK4HH8p",
  "key6": "TGC4UE2YFrawrzAY2jT1yGrGqSrpggrctuX6htA9dnsQ4fEMTYNpB3tdgkjJLiuqoXbM2D5SUaXDoGuHWz9cFCp",
  "key7": "5ZeWcVUfSvybu3QXcPASHxn4dycViF5MZ6Mjm8p9ybm5Fi3fmyq6QWScDRpkS6cTG1rdsQejTzUYHdw9tTfebxjc",
  "key8": "2315CW3KQJ129xyhdQUaKYHzbS7a5BXn9uJ6VHmBDBNKDQZKaLjFGQesWdWtUBCpA1xNFaEqZvKNT4ZcDJGhqrH7",
  "key9": "5V6xQ8g8gMgUczZbV4dHjSbUE3XW5zS88ej3rsgfmfZvW3Nv2GmeFLPPEZHmefFoPiqGKuJrztVqEs26MMyg2ZEM",
  "key10": "2392TFv83gDvwW4mMNfcTmAchi7jr54nbj7hsRCcRTUb5NanFQVipWhDYbKHJK3DjxCaUndMBEBajXGarpEv6Rrq",
  "key11": "3GqxrBVPf3W3tbeYt3ag8gjebLPfjoxGtR9r54AZAS7BkaeyAUyetB1HDDfjkxKzMLNr3LgvPJri6GEUfjLjruDK",
  "key12": "3wfTcnNA8jRRrHyhaSaXbdgZxXKJc375W1XeiJhctyhzAWfG7u8wQE2cz3pAr7dvrNgPjay3s81fHbnVR88BKp9v",
  "key13": "2sGhLXZobhcupJjhjSHRm7FXXBZNUKqpG2LkyJgyraXQmvdeFavdRaLtHu5vg4LsU11cBN1as4bxS4rkxSwQDiy4",
  "key14": "3PD5gtgK5Qe7ju7KADmt2RQAYWdqupfHyYuDnEMorsuRApcQLmvLj3fzjLZTM2K324DMDV1HmFXvY8frjVsmVDgh",
  "key15": "2YCeRKmSfwL8kX2uN8yKgPWyQ6n1L43m5KShHAMWzUQx5sSpcPLfvNmMJBh3JNfdKojdrJB92gQTiHMYX2AaQqUY",
  "key16": "5rGcRH7wLuwbpJaqQ4w6n8tpu9shG8oHCrxjayfqHMei5nMEoiAoMnFo4bxGqrhQCP4HpSC3Mz3kEh7KmqELE8DF",
  "key17": "4uH3LUqJAvS2tJ6KTQk7qAqfteUR1QZEUvNfWYMPzUrpvvi3VpK3sLTyntdJBp1WHqfJLAvVnwaBbfd8KaQHH3Hv",
  "key18": "3UuvvcS7BRN8gYLarbJuoocK96QxbimXuxMYNnWzVt8MUaykZWWPPs3Qga8yhqLtCh4QzytyreuL99fhKNc5QFGg",
  "key19": "49XEZnRcYixaWTmZrwTzGSfxZK9EEZriS5DnCpuLqzRr7VktBF9qKyLmiDKq94hmobBAbMT5GGD4RtJ9H8Bnhrr6",
  "key20": "5iNui2sSqn78YYgHxF4FNKANaYkyoDdgEKFkKHQXv63vPA7VzZTbftSLB1zmZF6bSyQs9gC7QSTwCSxbWJPo4Azh",
  "key21": "5DbtaUmx6WJ5rKjydFtP9Q9wLQ2Y1J5AcVY312qjgpmjydyqDxMKj7fzcUxPZbfP1dTTfaLzn7uL7k16ho7dunfM",
  "key22": "486KkgKaJFtojHtJfCXvPCWyzDUWVxyfdMeFRAfLDvshu2v5FbFvikrTV1cbqJMQRTPjyChiyTY45SV1NBYVCrHG",
  "key23": "2ocpNiHSxurecC1JscREyeyhjsYdmZBwerchQgKvpQUVt8NS9bhTNexLv1D4XmPsVG8g95hKmSXmtmKRngN3qRuo",
  "key24": "678frh49cKFsVVJ58Sfe17Zv8rE2YGYphvQnqhSnVtEM4841ojkHgsNEE1YAwi8VwEUDWm6WATzeEnvnCU33qx7E",
  "key25": "KgqBHmvHcU3ytswemR5KExpfrZQdGA6Sd7jxTFn47Wo5MZYTyZLVprYKemD3z3kNdC9ETCna6u7nxspjNeBE13X",
  "key26": "3bKWHqrQ4Qdj4oZ5JtR4geCmeV38na3YHzcNHUJP4eJf2xFwLWS9D1eq2MPWwr3o6u5sTwSheVoDFJ6kgipMKdph",
  "key27": "2RGbSdhKoWt9hEYe5NeZjnAKXPAGbbJvkH7Zbtn3H6FPdRptUUMGhGxSyFgQrHonvojggTB8xaLFnKezApqNn69e",
  "key28": "5eAVUBnuUT2QJ8P7CS3Wmmo5i45uWjReWGP71yYx7zxeqFf8RE4dVuKSSenMh2t3J2hMRpJamQXSPvBJF5NgdCLc",
  "key29": "5HmS2TjhXUw2UDy2DAXqiDiii3QfbbSTtjt2oUQ3XubDpvSsV46bsJmELEPWhPLTw4w4DX7h2xHwWDwr8M1Nro1F",
  "key30": "5fe4eCKQxbNdsodc7DPF84nLH5pjmmkR21mHxRA2BxTyDPWtB8ttWRzMqB4YmhzHSgS3xudcVT5JphCH51hQm9pt",
  "key31": "4vzs7UPrHw7PRwSP1f5gMLdiVb8h9A3EAAKubLWSvYoJubRHKfBiRUL5j9Mw6pw6ZSLQUJntASeW4aKUkvTqLbLH",
  "key32": "ipgXUp7k15dNfyDjfPWy3c1mGYPLdwnonPYB2XdS9geFVBHp443TE9cJ1QQxeaBMVtZHY2UFqxf5cnrE4DiAaCQ",
  "key33": "2FEVf63sKoPsFXHmx5gScbGGds7AYp7NAvQFGomaceRMnyBBHtUb4Bvt1UT65Uwhqkn7qKu2dKj87zrfdPciYbPj",
  "key34": "5Pud2NBHaTNgsmgtKToUJZnnbr316NRvTeEBa5nWwL39QPLQm3nqjbjR1RSY8r3xwyy8czLt4eGGRUUGhhqRbrHw",
  "key35": "5vj3SMPVG4KrXrib1bn438pbrf4LjVBiKTZAHcbktvjxBmwkH2zDPSdbS3dBRReehBfuvBhamUEPXkioWwnZyi9x",
  "key36": "5UJW6kUYE6uxdWycmhHjAetZ3WquJKVwKJhBC9FDSvNmXKwrYzw3zNFN6oTTjP7ShhzAmbAZoZF4qrXsJBqHPA8x"
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

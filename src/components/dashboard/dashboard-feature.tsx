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
    "4BuELM1nhb55PHwfqNpVdU1zH2zuqfPNjydLRtuWj3Pdk13UDzW2GHQPxpLXTQZ1UjaHfumVTtqfWHmk9LChU64H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRxo6R172GiPn54wfxpZi86jm1ifke1vMqhvjt5fbx3CMwk1YtKgRE7wB6FqAa8qRRjGf3NV5TSQLR9T6HdeVMh",
  "key1": "4zXw5hBDDZd1m1shW32ZJW8sMchKdpr6zCpVjCATBCYmshs674Fggd5ujmjMtmHeY6ixQFdHveYm2DoZPpLPnfG5",
  "key2": "4w3RFwF44VNr1ytQVWGMM5y3Vv1U2Tk7mxQo6mQsLShVNn3AFtr5s5Jiw7pDRr7YrhhzuTGmyHZo5244gX3iT9XL",
  "key3": "5sbPx9Ncjwdc2ayFjC24KpwMt3hvL1tAkpTDbbmywNnNri4QCnQBgqm5ZFN8RUCv2jhsELgWTYgeYPL1aopxH1Kh",
  "key4": "3tWxcxppSU2cUz7aTPK97DrUvoArqtsGPmdWTW6hjDdgfoQrx2iQxbJ3BUAnEZ2CJDcwXGzUgLrMf5rGaLdejqFw",
  "key5": "3bvqmmwTtvwZ2px1Z5o7FzQH7CTtm6FYmWq2ks1z58kwcfiy6q4XuxNg43xby4ibqcAZX2Dm1CGAQx34unSV9Tze",
  "key6": "4anbNibCXucc15CwxGwXCqwYBwt8na2v4d82QgCaVDe1Ks9LGhsQ4EPrVF2sLQiPkWcJCKe5jJ4SFPKE4XBqsdFk",
  "key7": "4tWN1w3hNLCbBj85efMoHtYQKdfXVT31WrTVyUox3AtxZpAY9b2E17GDaymEh3md51UtKpg1Cy6upwxC1A4MsKWo",
  "key8": "oLsrDWd7sygpMVp9jEb4KJKhCEM2BdDEeazDoWddaSYDNx8MPmrpjCRsHYWsj4XM8ddJnmddHUioLw3xWLD6uEJ",
  "key9": "2yP2tvmGfXzftMtJjerEQDrmYfnpaJmhpw5ddBkAa6un8MrSeGXdziZRRrJSxgCnc5yJuM1yg2Dbk56QT8wA4B2D",
  "key10": "5Ak9scbFFUrZUD9UUe6Q9EutEQ4B1S2TBTM8i5HznJqav9LkMdAw1dPcEfuKEpxDcaVRMLZodnJoaXUvaAUWyGna",
  "key11": "3zNWXVis7RYwQNqNeDemaupUuEXKq54ERtkx4L6rER4eKtf1jujXCNAPVWh9yePsHbEa2QNeuch7mZFBQYNVjGnN",
  "key12": "4i6uKkVT4kXB5h3r7bmpr6PwXwnBN9ECCFUQ4JsshdfJsD7sQCJJVsgRsnUEs4oQYBQbkyCd537SZKxrfoDWtUdV",
  "key13": "614u5vrznJasavM372KHREkwq83UH6NrC6TUk1yHfLPSNxs46oVKu9vrrH6JNd6PaxWy2bs8PoSUoxCLVJ9RcEtr",
  "key14": "76HxzzZRkgJpdugPfijwSknHvsHrRjnHixywrJ1k3W4eHkU5Qm8J49NkNQUUV8RegP7N91QnbFRnhvWkiXmp2PG",
  "key15": "62ytNwDA9hAJCSkRw1ZoxHrgPWekS8mzVPS3Jxg7R3V2CdcSSAMLrk1NTk59oqPQJ5SAEsBnAC9oz7oAkm66Ftxi",
  "key16": "4RhwDbKSZV5cDYPvxLJpVFWv81JxKvyBCajs33kyvkJVtXBDUeiE5RjTpQeEkFw5ryx9BwsbFr6RwDzdJr6QKX9",
  "key17": "4x7GudEHVYDNBcpv7rbKKCHoVMTdRw4vZ14Gm65hgXBDH84f3tQPZ919LT5KdSdwMUdoaq8McjUvXDdKSfYyTsPV",
  "key18": "2tZbamasuggLxfcVeKWT8i3EKGoQp97etdydJUXNvdwhkUfFdKYMZANeetZQnfU6FG9dPehp6ECr4o9sv3KbpL8p",
  "key19": "4iDCcGyh39yYEEr9fgJYbiJq7RNUTXnceTNYoqxu3to3YZq9FP96pBVkZbjtTNvMza3btB3gjFCZWLfr61WoQ4Ra",
  "key20": "5DMCEUFo4ssj8vkH3a8HNa5amk22gLkDPQtsUMeovnhMbCBKQZdUAyrVbjJucfrcYq9CKA9x5YUVTeVM5FMVowtB",
  "key21": "2UzvzN4R4V2dLXWyAasQPpiBjmpSrbwXcDN443xGCv7RFijvm1MCW5ezfhMHxdGA2YZcj13SoevSW4a1ShaRiRM6",
  "key22": "5RSvKH183kHonoM7Ah8TkUQ2abmTjg6HSam51hWmaeX1dubHk3WJbikymPmzXoR3WBMYqhqQ6GDAnZ1ErEsdwx5U",
  "key23": "TQj7ggp5NvEv7eCcKx5EbxMDSZt79MrsVx9V1JX2u34TdLiwtQvZFSLQq7ji4iHuaE39tHUsbeHL1v5uXgq1Kdk",
  "key24": "2ZGZEtAxQuofYEuCHV6tAEGh6YBxiR8DVNycE3YDkN4KqjSGz57GU4wWnpnqdt121gGa4mVeLqKToEGJE9h3iY8n",
  "key25": "2WVAstrSJnemGWStP5ZEZXPfhAGEV7HcYsyUbMbMLv95GkXD3fvWKtZziqYp3yB41j9iu1XAvKHn9SB3oDofQU7L",
  "key26": "qHi8Ttf7MZwg9jNSUEEm7kyHneAKSZvGb7pNR6x5PogHtqNSrfPTe1q9fZK8fgiC7CALRufmg6vhWLAyVMTaKWJ",
  "key27": "vhgoYhojF96CpeJK5jX8pg38dEzLkGkS4PDQKpRjSV65L3HMbQ17Aes1LztqkCxLX8oWTKuaJG6R6SJjGTC2C4y",
  "key28": "yYkiujkoh3hSBZo6UqLywv4dhAiKY6tzgSiAdCSp484AoGsoEFUaK6EE7qyVEqxAi7rinPLgUQkj8wkpNDPku1v",
  "key29": "44uDM7eAr7U53PSqU8HCqLtEs8DJ18umvAnGK22ceQ5Mz9KG2naC5tRYnpP7u6gi7y8qKGnXmy34L56ibQ9SVsfX",
  "key30": "2pUsrY2HxHCsdpsR95RCVjVw1nXzF4k38EetDrgyUWdALG5rggxsBAXSEhF9Bw9piVh7uMyprTQRepgiAKSJPi22",
  "key31": "1C3FFMbkm8E5yMkbWkqaywD6qYN7JULGZxUB1iNqgXGeYjCgBiR2xCXEbmAsHuPNYp5HckYLBxXduVByJB9sqT6",
  "key32": "2g8QFuv1bT3tUeP5sfTUK9nC6zHH3qsHGgLU4qG5QhbdzXBhKVtUhcY4iUT2YPVJpjEp3JgRb3zd43AUGhYNKYHc",
  "key33": "5ptPCCA53WZMnE8W725SQAXPb4h3nb4bvs3BfHbR4pSBMKzBg29PgzSjFNsEU4Kkk72RCyeJqezuKavFsbG1hLbo",
  "key34": "57BV39itcs1oZncFxcfp37Dv1XDZBkeYWDsXSJbLVVj7FxhM3boZ6Tn14KYSn5NMd4DbXirhvbpJp3n9TEFrzacC",
  "key35": "pGJ1SK8ny7JNtP8k9XZGgGcdCedNDXtV2gKd12CVRxbcgJhdQeJQdVQfPb2PGfYZ4CrN5EYZWaGqKTjEvVuabdX",
  "key36": "511mBm1s5HZAPgU4W1KRU8YktpRjTwZgCQ9DQ6fgBheP7fHMWcuqjPhZtu2HrKVUwvuWH5iHKuXjVahoZyNnFz87",
  "key37": "5zjbdcqYpZgN258VRPyZaLr64HXR3GzKMssVEbU5wCgeuwWvQszgWHybd2q8r5xs6CPRhjLaFKtv5MGnaib1vE3R",
  "key38": "3A6w56vb1LrQho5BVwi5dnyjoLSNPWJnAeC4QjG3pgDRKhTvqAdcapDzZovxSBjf7sQju4V9vg79HEpVNJePEtuK"
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

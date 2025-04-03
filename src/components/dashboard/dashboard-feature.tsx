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
    "V7CVRAz2QEbJrnvYQbaKUzs5YQ9jXTcYtXddtCcwUwvVRsHNMQdvE2z54k9fhovrfJPwRuzCv2EinRtYrGaP3AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzY3mx39QtqAdHQ3L5PKd1S2Gg8GiqxqbS9Rh6nKpshUYXxQWibZ8RK8wq4qVRj5SjPqv8miF4vtoqJ8DgaYv54",
  "key1": "NLz1LEAP4b6BccAJeh1qQD6PcrjHTuD717VBQs2Pe8eDetiJDSTntiZuF8hkp4JwLEk3osqXWUd7JJU6uETUJAw",
  "key2": "2LzkLVuRm14XVjngmbemCgyN9rVDuLMekVyNaPi1pFtc5N3rGmt5ALfwJsvpofY7fju6oMN2ANKX9eq5sihqc9ZR",
  "key3": "3tYEtx1YTSxDEp8yy13o6gnwHNcvjkd4hH9qhm3Q6Sp3nt35TDP2Uz1UBKRadFQi8voVR8BWXrxUkhEEG6rcXqP3",
  "key4": "BuUjv75Kfs2Dm4gtWm4fW7hecPtb1ZmmGe4MPUUEykhq5wRoqccTrhngLCeR6agiN7sL72Nu4Y53qDPcgsirnyj",
  "key5": "BtfGJUXNoDf8U895zLuHjeA3yu7HZispwHXhm3SpnWNs5tzG47qL38PvBrNTo4NfaM4sUAqZvu8KSMmZMz1nds4",
  "key6": "3DE5eERytKw9JASW7GNAWyZ8Jqc8kfjq24BCWNMZsn1D5nbtXQkBVRujVVqtsEp7x9dn8DM4CDvYwuXZrQgdmeR6",
  "key7": "3r4gP2rJrBFFort1MjtySKAuYRnsUponMW9pJKez21AbPuTVPC4NB4CS1uX1U4mKvXvyVHGSU1cSjMMwsXm72tE6",
  "key8": "zy9TH3rzPNJ2pYD6445f7XGvStgUAZzmkQdz3mkYE8A4V3CAw2zRbgTfkSkvkQoCesPKJ3TsHWA8Tz89YVg7cNh",
  "key9": "mqdReohbRqbpE8zqugb5hSW93xGgqZbMHszmgcw9cFp1YdXMfrZw4HG67kYTdXWbb2pTMU3SmQbEBWaedYaUNBd",
  "key10": "bQexSHbryvUbXnC7Jy2yZrJAvWgeW7Qn6uAm1i8cMEo9HZwaUX23rLrusorR5cw4u2dVuoD2qiGuKjTmnbkxZ57",
  "key11": "4AwGLRV8S3VtzQUyrYs4xFeJk22dpHi3Zcsy4RgXYHJFBkg4p3VNc9n4CKXzCa3RRoqE3rv8BUAYSaDUN8aB45YF",
  "key12": "54MQk1s1b3XsvhrSicJBbo6DoDXnAAMcu2RdP6ctdd25PV4Dtj4FqEP8MPYYk1jbf3zVh2E78k8wuivK9JFMh6HF",
  "key13": "4XdxPEpk8JPS7d3yotVdQEGTB57K1AAJyQqWbmyQUc86gFd8Hhr19A8CZvEw1UrscDCXakG5Efvreh61e5JKp6LF",
  "key14": "4x3QscCFsy6MXFAFAfTUgovhuNiHaMbrv2BaPGmNA4ptuyDMWJFRA9iHkabZX8yeAwwJ2DV7ACSNF6uVh92bBxTV",
  "key15": "sR6dkNhjo3tZEPvcWENc4vQvd8ZXZMtiDnqjgouNWR595nwGU3d7G5217SzyHtNVCdfiJC2YPSWrG5hCTtF9wvw",
  "key16": "35KjaKxWePxq5LbzwATctuZ1f3tdxxdka3sVPH9vnD6BjDjjxRptihfy3MwsUVF9u9y9zzdu8qq6io47pbTSABdU",
  "key17": "2vJS5r91wvLAmZv37YaTmxmYt6fH3zfhAuMFVsuzF1pKj41zBGd9enjiD2j8xh2RZEQZou3qTe6r3EAtEViSK2zS",
  "key18": "cQC7L38pf1wUnb8oyt4XoEhdUrfnucRQGJkGzcbF1anBAtubdecaWWgVZouQZJBXvq3ttLVfqKzWaV5SPFU2c25",
  "key19": "2uw8edz7QpAqKwYg6pu9VniNpAQL8omaUn4jPQ12GnFZcohw4QfStKSjVp3gRkRqheg3tjY7jxZWNAbKEATPis4z",
  "key20": "2UarxGx5sfp3E1eWs4NFSKkmMDbHdodBmbfvpkQsohZo1ufwqiyWk8HuuVxwhb3xSNq8SpFt9H2QXFQbnperPwEc",
  "key21": "2gFCWYvdhCKrmub5tZKjqiZCrAV1EauHr99d6dbaBvEUGeaqbHvTMX8Sp9diPjxcSD1Bs9qLqGa2tafAZcmNp2gg",
  "key22": "1NncMdW6cX5sJmhFYX4cwXAmHyf7XxKfCyFAe9K3DSuXsXA8VU9392SE7QRvvPCeVjHKdURKFefgjSh6fNYWZiR",
  "key23": "4Nb3sSqYE9fbkE6CXUVi72S1j3A95DWXfpkMNTqJbi1Xn7oVuSLzmK6dGnT3TzwWdFno2XhqsH3TFqYR5a5t29Be",
  "key24": "34bqvPrJXT1zQYaNagJp4b3VyxbeXw9GJehFikjhHNPRKzGZSdUH1g8sYwZJ6mFS6LtnX3EQMQFD1hfyW8eXWzNV",
  "key25": "3eYUHuBkGwdGxHYPLmWdWDgccapHJcakhseTjkUxBjnHZoGMyUys4YfCDC8R9K1Km4VMFHG2AC7J1su1dzEofaLZ",
  "key26": "3QiEVpXn9P4YqouRKf64k5C8beWqVgDmTpCnW5MmTU8hFpCUAjqXbgXJYcRzy25aZeHaSCvxa7vRdizK5ZWBwecM",
  "key27": "437vTmH7xBzkovLuosLdxGAAE8qAiz14iXT7hMERh38wCpu1tyv1DuQFwMJzpj9uTWgQ7SSuQA6SUYmqSyB4pjqz",
  "key28": "3VZMizssmTsXdykgjvZwvHrm1qpAtBpRAkeDJKowrsGKBj4Sxk5rvKJ8meT42yFHEupXAagT19GmonhtpLCCktid",
  "key29": "37yzZvf3os2kYzzs6sbYnh8iNZ3xhRjmyXNJR7oH5GLAib5nkrXEcvMGrhYHvKo3CsnKnB5JTfVXeC6MN72TPz6S",
  "key30": "3hsGSmDopg2ejv4tdhAjbXVmQCcqZxYuSYpXgGAQixFcsaNF5XoRU4HUcrcWoQYXFtva4GAgUyp9csUE6gwmmZch",
  "key31": "3zHCDDpAbWqByX1eiNLrvZyLRjreyfLwyn4KmkHB8A6RLkveJvpfdquBwyYX7gCMV1Fjc1PDJRDKS3Q1g4AkhaL1",
  "key32": "2DRur9hcuWnZDhQLEtji6W6mS5gLjMyfQmL3wr6cwABNg93xMBSvs18tNcDG8arGxyktFCkXwo9Um6DSgPnG91vy",
  "key33": "mJHY2wwy1H5b2xrdTSmbNCKEonACY2WSkro1AmjtW2jzQcc7A8ytFa5cmm6KaVARuZgeRAsZ7oCXwaSe6xWtvLK",
  "key34": "5iAXhAHWk3rr7baUDzz2ERe8jntc7JApGgobfN3MFhR4xpTYvAw3xBjaTREhf7ApdRgYCXiFUy63ofTjSKrGsjWC",
  "key35": "4G7Cjpz2j5mRe6oEK8r2H9qvnCedojMMFmL7mV4ddoqGXEbLbMMi7Qkb6yFTnqXeyCdyFWEMw4kW4KUdX3Esbx9t",
  "key36": "3tGJdGWiWLReoJt7daU7LG6pTkcK9Jok4xcKW7YwhQFhr3SFNqba5Wj44WokJYXYSrBi1M347DTig8tkqtqSvF1p",
  "key37": "3TEQt3hsN2Be3QJhWYRyxUBFJgj1ZyMt71aCEURy5gtsvJMimfPud5qkKZDiRGihnzuYgoZ9PgVpXKC5Nm8GuajP",
  "key38": "2y2PAn2Lpmj34jYqr3WppFDGMrZXoD8q1QcNaWL8Sj8tCiJRNN3G6QLDrntzRBP1D7r3NijR5gMDuLBzsDmrNwEh"
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

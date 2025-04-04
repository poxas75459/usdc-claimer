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
    "4Xbs4Yr2gjXAy8XuxaRUZNV4wU6Spf5pBMXAKjrf1bBZLbBqYYkz27m1aWNowewZARgqSAMaYR88me1crvpNsdBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzr3ZoLaaeXcfyKCXMYoBNsegUZRGEKhCpqcdwB2ecXwoDxrGKnJRuwncVRTqUphFDxXkqGAxLzrzrE1ph8putw",
  "key1": "5bDb1QL8L48VKs199NwZ8ADaUkx3njySN8RjXxo7GDxmEYx69yqtNgs7BRghRfdJsrcwj67ykxCRLkiJqRm9hWCQ",
  "key2": "3Y36iM99s2s7pR7xDP3UqcCcs2MdiowqWhdYJki8fm42Af6KNYmZq5uKYVBAdWz4qUQ4BeXoG6Y7jtpXZWebTfXD",
  "key3": "292FZzp3YPzDQpj4aG4xzZv9P44Nv6y8X7w1QubJ65TRwBwPSJUJzw6c8Fem8eTYzWQ5Tio4r7Xo1mP435tQzGBj",
  "key4": "cQZeq1qmGfQmEzEoaLSPdsFBw7PgiSdh4aqtWKAwS3Hb48a5WTbS8r24TDMuwNc2vmaQujbSmGEgqfWpK7chTK8",
  "key5": "2dLmw2vvhrUyZajkxPL7BJ52kUxn8dXiLzjacrGXdGdDYqRohgUsCPUnEdJUCFTx4n58NeFMmJc2W5JYdG2S11ba",
  "key6": "2kuDtTURicf25a2LDUkpTim15VrXDTukVRnPeEjDnps2r8W38Yyp4UbMKGVg6kGiHUhDxPQtBrRzrDHSjwHxDGkD",
  "key7": "R2jdF4QzHW5xn2Z3cT6PyPHZRfhvqKBoPCsBHiTmQo9RypLM33bfgnRtstcb6yuGNXYhY2m8EeUAj7epByuVzHE",
  "key8": "4DyDqdg1JgTUe9NbaBeDA7L8V1oFwUYHeWkUGYq72js5QYhAUaE4995W9NXRpvr2acxEjPEjn56Wyq6tXejEb4jR",
  "key9": "4AuSoNgGTQgk3Z2E2f7YNWu5k75TRHWZTcLSXJr2qAUH4ZGPzwHPUFw9XJigKikNBBz1BV988TQuF2VEdae3T2XX",
  "key10": "62G4iCWKupY9QyaPf37gqMRbyB4pArXt2A6XWUy7PGYnDe4ESQXZLntR2dcHR3pKLSmn8HKXZqc1ZJNC8vumPVFx",
  "key11": "4jsY63JPqqxKkRJxBhT1suEHQsz5SkawEahZWsfqPxh7PyMy835D2gu8QUXN7vWsdNtnVhqaGopERpT6kR4Qy91p",
  "key12": "5p8YTfArj1uP6su7Uo8oSi4jmvnBFQnkBVDNXX7q5Qfks6PYYom25dkcNXtygkuAcx8d5H5RkuqYjaKzzfAU7ZMe",
  "key13": "67acKooNG5sqbnUPJoB4XUtkdPtgNnLPT2UqmXV9g2bd1SF7DBRkTkiqDzwJHVXMf99j33gabqhdfJojbT399iJZ",
  "key14": "4ECfNX7F1zytJPgDeJgFXmNaUG8fxJ1xxtjZQNuvZoxsT7KAn2rAS3SZMTLKM1wJBvEWef7eonHVHti1Etf52pSA",
  "key15": "5M5d4791mWgKX6hnKUU3QPeRXeSR3P7sVehNXEUoziGNTVACEenWKny65sv8deyBR6EUjJn4UAY4JVAPQrjTWtS2",
  "key16": "546JZ6Xh7ioQGrau7MhNme387dA6Hx7kLa9X3hvLXUqH7GwJLS2qkgdLcVyXuJ1jqAThez8RFn72JCMD6MQhzFA1",
  "key17": "2ZUX1jphGJsQqArLQjJ1AfMUwZyQ9rXSzNMCFgF4ZeK8NtBDrSkjRy1xaiRWjrwjjVjK5pCyJAbWj8jp8ftQgubH",
  "key18": "3zvyiDcnXRhGqg8CLJ4Z51yAwtsuWm2TnBaNkmYvncaFPTQPbkCQKXs3uTHQih95G7rCzeg421a2ciDdBssBLjdW",
  "key19": "mKBWw6EyzYYcCyonfjKbG58mfQLAAtpap3vZtiE2HnwUshEDGvfRM8aZgLX6Q7Y5cuN5sdx9n4kqZDG9H9rPkkv",
  "key20": "37q3Y95DmseTziJfni657Cbmu7dEFjBN4KpSWEMuMGWDtswX74M1z5UJGf9a2oqJdhWgTW3EkwN4yJGLhmGwGMRu",
  "key21": "4RCk93amTgSJkz2MY3ZhGFsQuVywvsiewnqGx5veoaBZ4XENLstg9PmRKmTegT7z7utsfgcDBqBGKhSzHj49VHVM",
  "key22": "2gQxzBoypqfgNLYyZXk66uKhJCcSbt3vLgztfegN33bz8pgRwyfcPpBuwVJ1Ggwcwsp5XCLC2ytqo7rQHexmkx8u",
  "key23": "yF7JDivEziWWbqfT1CEGk1rXcSW5U4dJCzWjDqVWfpZFL7zae4AFSgTbgfk4pJANSyN5n7nkDuwx5nYDAwsokEB",
  "key24": "3ZkWBp2uvxN78fXciRDUV6zriWv3U6q4ENGJ4BJMKSyXB1tbH143CkUApoobfy9MhtDnL1s7HEqyrdF5G5bQqxEj",
  "key25": "2EZTqyk6xEScxsUETADRCtzdJjhoA2eirEHFHa6VsARFGpaQ5j9fqLCpBZtToyMGtYTT5R36RZzH9wopZmXh52rd",
  "key26": "2HNZJ82QD7s47tVDKBbLpimbznen8J9HfAKnQ9pCjQua4RCcdNHyfCuER6HqCgW22EH2FNo529oRHF9EP9hsEy4D",
  "key27": "2QYDZ7Z5jTPAqpd4S7YMuta9V1ZpKxuUjK6HxW5Lx7iQqRzPMbJuMTbEoBLi2KZLiYu6MnRuMiHqn6owzeewfRFo",
  "key28": "2vimgzEGf7V1pgcgW5sUt6BYzuKL7W5A1B3VaxNQy3ubU3GM9xS6DBibfbDXo43eppgrSBaM1FdRvGutsaQR3QKc",
  "key29": "4Y1cpFxwBHptm2srR8kWEsZi1WjFa4ZVqN4MpiceFfp9pTi3RCeAruTM26wwnvxEpumbHALUTvh4WdViPShwS6p4",
  "key30": "CneywtH3WnefNC3qC3WxnZbSSRpXzMHDp1i1aqmJrf45PGUvknmERM7nUpJfFyRJkDNLfTNqZMuJKyLAm9Wq3fg",
  "key31": "27T6E6EGm7bwCFHX6GaSiGcwkSyhjdLQyg1MAZzzrXd6QooumvvZqr6zGrAkpVnU2GmR1cb9x511VpybcUNinsYb",
  "key32": "2Ag6rodXbyeL1tCvws9ePBX4faKLnnTnptJbhk5Zu4wUCdqswwm8xZxR5CYRNVk9rGHeqfLvYwS3fvdcxbkvN82U",
  "key33": "ktm5s1uYrZ9p73MNb9ZtqM1n31ie9D3MquLG2nUiCWQ9v3HXWdJXwkYtwrhRHNfHHr7c2tk7XKH9zSaeLmejYBZ"
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

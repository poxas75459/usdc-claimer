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
    "bZPkKhuRUbyMNgphGjEhRL8uq7GwXAcFW57GErRKs88ZHPbGpoJQZW4Nzw1RH7sDfY9EXQK4xEVMuV769DEVSUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umGtc1ymFxBaCfuXXqTVPMAdX5cWy7p6Zx7LbrWNwMf7JcCuvy3JirjwpEV6paJ7iaSGdEt7CobutWzRu1EzJiq",
  "key1": "2trNEHcKSyP23Xa693p7zKbjnbYQfDvTMt9YS8aZvaD3ABzUEW86tBQNmySWEwksxkhQ9ypHCFWDJyaXydTBS6pR",
  "key2": "2VMbwswXMeL5jXv7NWByZcxdCUqSY8n6MQyfzG3WmXzLVaXAHSyMsrfW85dST2hxwhR2EpAMVrCReFbhm8Ax9y1L",
  "key3": "555rabPogB4hLuw4XmQNTpgYLCp8CzMjMtB5VsvePKV495t7S5u3jFKURKbaKVVyKSjx8nrRm7HC5H6EF7mwdast",
  "key4": "2dK6jJTPqfJiqJcm2QdsNS7eKhWtebYDNoByo1zf8Q9wnDFHmez7oFuqY9SLZbk51zoQRYVmLpERu6F8wD9S4XAY",
  "key5": "59jZNdgcX2T2G3Mzm6ijD3KkHsN99XhAX7A8yQM9Rsf595YK28jkBLfLwS3Dc86S61TeDpguVnFGyxyrsKCWnzok",
  "key6": "3sj6FMP9aovuESQTgYejbYHp7JhRRP3sTCbi2mMp48oRHC61J2jqkzeJysNm3UjyD7eRH26QwFtjBeRVmFEyUWBD",
  "key7": "4YzGoc72bPyauYRAGbtFsqHS5PhaAKYdmsNZdo4QkqXFxqoBTRbuBBNmtxan7FBRLHZXQMWKQajTsWeKULkGe6CT",
  "key8": "5sjqPbCLJpjV66mdF8DEsbZwckdPLq1GJ2n9cEHtMj6X8UkB3ViieMA4QpHXNKZyGcBgwRGVytVb6F5RRV8kAUY3",
  "key9": "47AdPNnYf4VcidvG5jh7DcEsar9FhabNqkPuC41BhAM3t5tdnDWXcW7yQHHd6zAje19b6TtUqFyLUK5Q9HaKUWcA",
  "key10": "43CburhLgX4c6RtvX5gwuFSP6q8VjUXeVTyouWcgVtvELxQxkSbtAR92e4AwjZrE8jfpuriRQbPuJkFU3htGV7GF",
  "key11": "387Y1oSs5hNfPwurJadhQNKxvHTMAHP9mJHWZC1eZ8hnHRyJHyUf4xzvLkDeweK3nbVQFWUPcW4gXq1fgN3UdWJK",
  "key12": "hMMaZGpiYFoscnnfVQtyttFKtkebhdrJHzBpc8HxZrFGosG8WHa1xu2gp7bKRzAjUTADWqeThBtt5tWExnYqorM",
  "key13": "4eXKKkSJUrNJHcdfXHjv541xE8TWy3NjS2F8jWzCdDZqzKVNAHPihfUtdEnJjdiGsgtwbWYPNmLvmg9i4HHjt2bo",
  "key14": "5bNviM3UEYBfntJPzhd262hP6eVWnZYuymsXxPjjfBKDx4vJMLWqsvVsyNGFugYHojvDCyvGt7KreHktnqaBj1eW",
  "key15": "yHXpQ5XCcvU4ctsDBYnfUBunXmARMHU33MhEU1Us9ZYBGYnbGfzFY1nrEKMihQQRVEcfVPwb555HDqgDAnkUUkn",
  "key16": "59Es22mEiTzY8uUtqqQPbVeRVeoQk3e5exdcLYnXSk8ujuA5KkUZgcxLz6YfbkfViyJqAactC8Ce4JCdGne51uHU",
  "key17": "2qWUPxidTDykdUcwXtZr8vME7cVhfgMznTrQtGe7sAwKzVErU7QgccTa9mBRhSJ6Z8Ttj5iaU2WN18X3AjFbLhun",
  "key18": "4NuWwUAegmx8FUzEzGhWctonSspA7q2ffo9pzLXZLwfm6iAWD14aRyD54uscqJUnfhyYwMrEpuZWiQuJFEkWJSjd",
  "key19": "3riJYVazEotVKHMx1NRHVgYadiSKRh5HbysUhVyqzfkm4UQ8hvYpEqZEQqFhGrYhTjkAqqt4Jco2yNmepAsXtBcN",
  "key20": "2dxtEasYYZG54VKkHm2xf9muHBwSHYzfhU5PvZTh2yhnaVPtMVgtSwLBPHGnMyW6AraT33HVgikVxMRdg4J7nqKG",
  "key21": "5mGT49wUb6xVYmtxDdUmvpib1c1DBrn5ot7o4GUKUxLpMvtxQZhzK5VXmBBCiinuxnanL7KC7ZKUhwGiCdNehDQ9",
  "key22": "5hmWcpLkanRuN58xLdZrH3pMNVAmEiL9vxGgjVuH3kyX9MW4ypmGKX8eB8C3u9mrgEEEqVn74bu1Q786Bs8udCHS",
  "key23": "4uGBHH8Q82gEW3zgSGYd1bGtyqvAHgJojEacJ6UVrv1UF1XVehrgDWqxRZdKQEQ563Rq31NZjsyRSsyRppNovAx3",
  "key24": "5gmN7V4rBG4JjgJdXKoqyws9JtJhNZ86YXJFW134UaN7ywhVJB2Tc4L14PQVJ5WM7s3BVxyiub5TJBoxCFKds6An",
  "key25": "3rp1GWY4meurfi3FkJgp22ap6cZQ72M3HuYHnmB4U9KGBmG6V6Eg1eq5pToJ51Zy4zZCGUgprCM5iXr4HfE6zhkZ",
  "key26": "CxmiGugmLXmpLXZc4fkBYp5EDX1By3MAd45rnh8f1FxJPkF4cGJJqfU9CrGoabkkkQKATX27Dg7TLGj7CVMfqeu",
  "key27": "3pKAbBQrrD9xqC1zBHxjPcqFofKUxJXCry3X7yrLCGEdTYkdK95SidWs6veYVgMb2Yd95i9Jei1j2iFaTErh3ixu",
  "key28": "2HQV2FPH3vXNBEY3sVE5NGUvJUGFXp4GVotuzj3joyCycbsbr4p5KfTWxYaV1pQG95airkekZJepNLmzteYcZd6F",
  "key29": "3ECJwtojCjydVVTTPMgZaVVxcWps2S8KfDm37XYikYs5trCEabpNpQm9nFydHoPraMYyQrAgxZx6DEtpZY5G3HDg",
  "key30": "idxDeYV19ZuVVPqmpkbgwzbARzJvSJwrmzrjFYBqffHzeVrJyhvUYnWCspF1YDzcryqXAoWM8RohpmUUMJV1bSU",
  "key31": "5y1APJLq2wDHVPPzucneHuYgTUNj7pMfT6V2rXCtrnXFb4i4jmwq9aznGzwrvwb4xpigQykAJVkXR1vQC5yTJSKd"
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

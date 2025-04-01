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
    "2RcoCrCPTt5SitN4MdXYANQwxfGFz9zZammC48ZKE128hSFbkUekwcAbBxY4d3tUxA739S3KrVcHGRwUxNMENTNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SmZ3UeeNBUNxgirt1gCbkaSXxkAFfwqFEYqAzFeWrJTBTF2eeaRXTbJg5cBAu5M6CJN6AE6PJE8DpNGoV7rBJnU",
  "key1": "SkV2oP1U8LftATffMyv5k8pBe8FrJwJ1vKrpkrCST6KKCWv3ysstxmgRM9sAQGMNhe6QbRNE4xYELxywMEMK89F",
  "key2": "2FBMiy4qgWmCugPSmCcdp5FqCzjUBkkeWCRqFEwN5HFvi3zUGeaiKPFx965W3YR3ovyMA2rRx7jFFV4Uq6FAaMVd",
  "key3": "4aX1oQhzBGvW3kaRADrSXe6hxK1nh4mh2jVHPKoQGfyRPffPXKnsKYBPfcEo21oAKdxZVKx7xc1jZWG4s9zicEKv",
  "key4": "49Pra2Z7fKgDo4jKcBdCr8sp3DH9PGhHPFgfJirtyPtBdvfiP6zH13iodTdD5zqxbWpYNrDKwnY6rK4VakepEdvS",
  "key5": "3r1iuhUb16LyZw7FjWQpxy9T6Ad1PvkT7naSk2AYSs9bZ8FAF8CSBVCiwhUwUQoy2g5oYQkaPyYP9v8xqK5afiFz",
  "key6": "4MqsZkADQLVBAQ1BXoTiLjf2KbM6hRdBwx1nLQPjUzpg2FiHP3RgVBxondVz97vjr5LcuzDX4yabrfSfA7QuVcD3",
  "key7": "5w1nM2GGDSrpvGG28cnyQbeakRHqY5WNPtFXPKbnwhvuo1R19TX45gqBUNT2fYnThcPWdv1UgBEZvWWgfiXJq2hJ",
  "key8": "35wp7eK6PkyiMVnj8zADL4m4sjcu8z6Xcq9GQjhE193UdUU1uVgeCPnq4m699N8EjbSMycSHTpGFyzbnPy75PM8S",
  "key9": "bXQVgWDpecciEh4dFifU4MeKMttr95PopGC3JHSnQKS484NEHZ6ZMTgqgpM1hPLtbTYmUHjaaPxpjf5TNmAurdC",
  "key10": "KJLZCmADcRaAZ7U1vmTuTkdoDLyhV13E3bW5cPYDFCjBLMEbMj5yZYJi5txwZWGmoeZQMmzFpGxGteSnfdBiWeW",
  "key11": "4kVt8qamgau1xhQfPqCcSMqoc6Jgz7BXtMMwjf5gR2Tne9d845KNn1PPj4X2J3dZAG9ZnAwNMxJbgRyVcmroEAMm",
  "key12": "29M4XqoLHWjrU1doPzsAAmCuLjsi3m4M7TcVAVJ9FQnd6yrSWJr9FuFvEarYEfNBYdHM8tkxhWpBfqW9LAC3PgJY",
  "key13": "5wKWuno15ctYDpc1B4f1E9WHGF42yCAE5SUwrwmUbHuUXCRTw3XLz7yTwBQbZTm6mRyZ12aFgpTD7ozevpe8ffGU",
  "key14": "62DHnm1jh4VK6wkVaTXAW5sW2ainRncBjLLs6AwA2YBD6YgU4PowK83b4y8miQfi1yNvCj9FaZsDopo6eJaMgwKy",
  "key15": "5gjepK21a6LXzf7uhEQsJZ5w9MYbCGKq5p3jiYZnG33BhTu578VfYNAiXiEcUzYcV8mF4ft6Fg8irtD6WGrBiRTC",
  "key16": "3gQSoE3tUz5eYmDcGa8HHadka7a1HJubhUHDR13RSveK9ypqrBcyfVTrzNS9WB1RhTuWuXQjEN2tScigHU9EZYBe",
  "key17": "3FDM8zUokUpd9C7fYnJguSp3uKffRc8UaSJ3XYwFAWxqe3VXWhCruWRjpJz7yEnZ85xrjsDcHAW5oFrMZNh5wmdM",
  "key18": "3rnpqjCXMDKWJWnjDWkjaqe42YTU8K5JS5oMNv5AAKmjhNPCnfdMrdNghh2Y3A9CK7qDprhfjj5BwAW118vgMHNx",
  "key19": "5YVcGbu9imd7caKTbFf2kF6Wvi7vByCbFHu1CkqSGWfhEfUhD5pHjqWUP7D3RNHEsgh7R8BkBVCgtJgK1XkGcV96",
  "key20": "C2S75xqMsFiwJEctNXpF3kmWx2mJ1adrZ6f1kftz12RmrDinPdoQwpW2Ndg9NKTaWfL25ydBygtsiq6uEgBUkMe",
  "key21": "36oFT2vR865NnmcDa5UCkKKDefxXkULdHa46S84ei7YMRzkXqJFUKUrgbi31fwuL8RtfEyNurD31izLe5rJ4tyCU",
  "key22": "57y7ooxrsRBNaWeCqY6A3CBHecuc2iwRmaYagQieM8712EWqN7FYHrTjrwQSnwUFd8PZeCh4WkrSszSVUdpT8Xkg",
  "key23": "62xsQZpMJ653yHt6Ut5P5rc9mZixmwFHK7p1T1GLKBMUnsHrHs6qq1VLUqxwSMmSU8Jn5o28u6LFUsNkqNPLLkyJ",
  "key24": "4R2La8Kp1xAbduyW1xVUgwqfzmdYCcC2qZZJMA3MbSEftEVv6c7VtyifVL2jpgRDVTa1pmr5PFYuTUy35YEpXEn9",
  "key25": "57Q4bgQsPFLvcTcCa7etrqNm4bVdm4bbWEAj36yA5Xj57Dnr7qbfDXJRYckuTnje2JKhf1h6nUCGp9j5m1SxAnkv",
  "key26": "5iYaxMELKHHk5Z4G6WBbs9wN8vTtsaTvzdSyDfj7R5sM42BumiKqrbNgutqFTLn1TJ6wo8PfJ1kmZuiMfn6oqDAp",
  "key27": "Zi3vd3pn2AppWJvkLei3XGXL6gigNcFXpTNfxZZgRX4F5sytkDNRaevbpJgvcQVAMQSsaHfZAm3wVtwEdZSRtDY",
  "key28": "3a4GT2j1D5Sd3azGfHeQTUfgRDSccuS96QhvhyYtLBe9hXaQrmNzWXrkGmULFJ71TFAZ7qUToSy5s2AGAgA5Y3Sk",
  "key29": "3rAgCrVkGrUX3CiUgdTt14jj8V8dBPTi7oFcuKVMmNFL8APY24Fb3XTe62ULXi1Gb7ZXymGHVdH3UtF1hbKkhqPt",
  "key30": "Lert4cR7dBge9qMiJVC8WGtrK5YokrGWNDvB8YweBCeNDv5eeKtg5mRiruJ1PgxoKnfpWkrjycSpEaeP8LrhkvG"
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

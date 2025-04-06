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
    "Gf1Kuca6uBsESAxaSNmAQdipYJvULqg1K5Dtozy4UBbjQkqpNpNyBUDpuVFU3DbFTiwNXuo5iYuMZKq1ybXq2oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DBsYfcRtqTB1yJsjQV1Vo94cNWEmhxj9dk7EQ1d6dQTYmi2VAzvd48bn7BzYz3Z5kWDXyg58FmNhDhM488GyNQJ",
  "key1": "4exXXGyfPf6k2FDkyFkeLaJdfJBq3YhyeLbMhrvipzvRPJGdMYVccRkppUx6zPa6MnsWfgUMDmF2NEzrisWeapAc",
  "key2": "4WGSJArG13WrbLA3uRpcLzb9usyVijxoWqrjBNShqJXGnYowjxLBZVkFEZ7c4iRBUnBpAqvvZ3qTr67ovLU3etaH",
  "key3": "XyVGYtHSMniDU4oXNaaXJ7cNh96YQzRzvFGQRgzuCS6mMKJMrrWEs2wVUkiwM6yujHnq11Ji5UDqtDKpcLxJuL5",
  "key4": "5RknLSaJkftDtjVASxHzJ6qWGHejBbzpy1et7J1CaDzTnjfgvtTxMRGUQGAC5ycXVJzFbmQ3XTf9gMm24ySe4KbA",
  "key5": "5Q5DSWjUGULpLrcdvq6B8JXyRJnCLRmYK8LkqA345mVnUXrwqdMjwmK2hdk99CJSWt4xFPqr3RdbWBDJGAjAaP5Y",
  "key6": "2TUMEqWBtPeWGCCFncNkmut6CzrJGrg1iyMp5jdpNEL1ZhF4h7PTar8VZ5gYkpC4Nd7zEq2burMwePVoNfmmEypJ",
  "key7": "m7sXWjN3HnMsnJMqXvnvEQ1doHZyXzHm7bdkPDggh8Le3zojkoePW1nNfpZfTtoRv9yqzXspBk6Sn8Qr3W8rQJx",
  "key8": "2Bu8bE8uYemPf3Wvtk58HV2GXxBVdM2k3ngAfFhEauUNCaDNGUcKkwfjAixUEVdtQqXozQ3DpQK45Sgeti6EMpRq",
  "key9": "5aA75Q2eEDH9E41WLEpFy6wg4v3HCMXnU581W1BSZuBxNb6tX77oriyZ2H7i8sbpAhTXf6CJkyUeitCZ4VpEJ4dm",
  "key10": "J77s29KZ6vFE4A7RTKiQUUYT7mQ27CFtinh1BC5X2bSoKi7KrGjVoNyeJn1Lz3LFycKMQ6psmapmiYCLs3xNEq9",
  "key11": "3ePkX3RKCT73ZCdzUjLGYPjgEEDJ8E2593gFvSbKJvGwuWTUTPyzC6mMW67j93UtwUAJmHZ62YWjJsuY8nGVqcAA",
  "key12": "bd4YHWbeP6ZhRvVaLWY2W7LctFTSqiu9jSiCzJ9LZJp3Hyw647Q38HhTuEo26cMPb7kkd2K1pnbk7K2WMxviAnS",
  "key13": "2aPz7wBKRSJghmq5GYqoUQqCxc4hsaLCunYUXrndYxmDP2J92xzxtwfsyjWncQ7WTx7pMwYrV3Vaz57qLADifPgB",
  "key14": "5immSzz4uUqkMcd4sVsGDCzpAxahhN52Fv8vEygjmJkhF667vUkvsESb3L1FfRJ7LWre3mLXiuDwH6rZyqv2oHY7",
  "key15": "dHpZD7jJthFqebRDR5o1EBqzArQCaTSq9pNqd3oqrixZ64kFfodwsA7um7A64vCd2HBoZBvryK5UyVJC5qruaYk",
  "key16": "4D5whkypgUKrV1KCakq5EMKU7XHffA7Nex9XNQUbh5FHRk7s7cvWMT14CGpFeYNe1aj1UfwFkmnPQRMgFTeYqWR2",
  "key17": "3ovvf4YKiaq6wnC4hEimyxmqfEihMooCdJvpSj8o9VoYHktRrVhVh6nHnHxkoTkt6zyoJ7o9bexff4nqbzc8dU4v",
  "key18": "G6nVHUDs1Bh1wT4h9ZWSgwSZQrB2hpV3e9M8Xj6VuGGoAkKWRiX7eiM3F2yubgKt466cSKz6JxQnQvuzxs5sbsp",
  "key19": "2VpoTiHNDtDum6eGYKpfGa9k4sKhEq55Ljm9iV2EF9EK7ys4Y7ujX7wpSdymfxhR2REYruRHwDp8tWM1WKSuSjDi",
  "key20": "2vxXqwGtbfnHtG6qESNaW8JFeN4wi6kWTTnnwGhDZ2PSYzQGj63BqHYJJisycRruJ7mCncaj6vZj356RfxSUmE7K",
  "key21": "61AnyfJWor4HT5EKLLdnJTuKE9wMQwuG5NoToiTyjMoX8s6YHbnzgY5stLLLaCJbQ65yycMKWQP7KVLWrtiq5NDY",
  "key22": "puEGtheMTMCV2i7AtU2iKXRSZkw7zVzBt4yeUEWST9sANgLdpswq2WHTwuK5YHoWxjKSuRigLXV73Pn9TifmFRE",
  "key23": "33VBHDxqrupbfxzEi4yMNKgC28bVmBX1UWsUb1sZ2VUzZ9FNrNdQaiFLhkmFj399nVRLGTxCAHuXq3ijrHebfHup",
  "key24": "5HEAgCMvNwUU645v5APfNXX7F4XCtfCs5wRPcYmWfMkXg2j9XLppARzh18ijyBLrpA9o5jE3KNatvXVWor355ov5",
  "key25": "2uG2ruDzyKK5a81VTd9PESutkCa1j1sWbmhtVJvzuuZTPfEkwEFuEbrnjeHXd8RpFcdX2vF4NFS1Pqcy9V9V69jL"
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

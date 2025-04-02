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
    "35XzFcyc1v3QZhfRoz4129NgiJT3No2ASD7wqvuasB87FMtmzfprWde4HWMLwQkJ1PdDMgvQ8JAjaStHJKjS96FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aiDD91A7ehgydtfQDXv64CTBnoNfmNLuCkJX6Tg8BKckH1oTqpeFdMn5bceJ8izGSMrDNrByENm5kTdQGvXoVvB",
  "key1": "3zhjaNwChTHc2sENRVbU3gjZKcDCMrtEoPbUsF7XxeXaYncqFBsqbHBbxVXwCUr2ALrrYe3yajG2hwJgZeKa7VNW",
  "key2": "5UTD9ujVuyyHWhBTrLkB7RhGf66mhpMRVgxMVTekYTy5RRU9hx6CyjLeMVWuADqxKdeZkeGF8r6afohE2JmVGdPJ",
  "key3": "2jHxv8AnYLjb4qRLumSAxH6ijkvJjm9Mt66LWjuGkKyA6KooM2haLNK4WX3wBAJdJit4zkgi3dNkdqWnyfigCeZz",
  "key4": "5PZT6v92JLhsEWCfGACPAeinmkAdzMVCsuyLtbPSA2VwosrvzNecsSx8vywkcPaKWsDGbw7Po2xqTZPmK3S2Y3t",
  "key5": "3CMyuaWQDMdVftQeRVLBRNz2dNmeVkACPaaF8PR7jn6YfjKtpMc1VMcX9Dz6QiSVgAFfkmDiMV9SzRe8n6YxczWm",
  "key6": "2esDdujbHVTzfU2NT5k3f9hSXZT8TTe4A2GD8LkGUdNHrRuF6EmZRhiu3U1WDU4EzKkG77ufu6f9K9LYW2TcPgHx",
  "key7": "66hvwWnPCL72Rm6p36nfM7ECRm1wZsVwQ3PDS8juxgnj6V4kkXxqvrt635kqSr44iHyR6CryH3MKrLUScKmhUNRY",
  "key8": "2B9atnDQPmuabSpiBujLzd3NV4HKUzv5QwCF6mQFvN7UxeNHogcrWwNMFP1RMfkGkAmyrnvs6BvKihCL5rofAXyU",
  "key9": "5j8v2MuASmYR5oQ71BtPiL9i9DoybzQG5DaeXPQ9vwsufDj5hzjfAJsm75mXwPU2NY1qDoZ46jF5gkVR3AbR7cnN",
  "key10": "4fn27iD1LTi1rQmoPcyuArvXXEMGFJ4PB96ibdL27cuLCeDGZRs5PyZYSXkErtwic6CfZLyd7t3qCWDjUYsUfo9B",
  "key11": "28oAPodwuABseC8Usp8cVrJF9N9rLzFGqs1Fcsh8XVcXcpoYhdh2eih2jTFjy5oonBFCWsynYytvCC6V5nxziE3t",
  "key12": "3nGU55eXV3yFM5zqJ3zKGgqgRpzm7U6J4RMYwgsjXi8eHzxJvfL4mbmfYAaAFHfWRECo34zzNM9dhHmLr5SZf4hb",
  "key13": "3Qt9fdeffbWY2fEwcd5XJPBnptuHZrNKbLUUTbqHPwk7eYik2NECYV4PzdyCMHaiUWzcYJ6CCbkvwJj1RHhwu2hQ",
  "key14": "iqvM9XD5cpiRNfWMUW1uQBARNEuWZKaBqDWoSsHLm3mwUPd8Ujy3AW4kEmm7VywrQrH7CKcUswXe1ERkE6oPfvm",
  "key15": "2secfq93QQzbQM4bcyUVLBKauMudgbo88jr4xpmDyAMqyfF86YbY1vvSHNZVoz4fo7yLegHbXQB4D8Z7gAocX1Ps",
  "key16": "VnovwLJjYAev7pPZpFLWkr7EDn4Ph4R5Q6NkWfm4W1XPqedcUu2TZuTRNvxovFChpgt7MV5y7mNQ83m5DHkVVZ3",
  "key17": "41pMphqJ2gdSJ2u65CfAJoKCuv7KahKyffmCJ7VYv6oQXBsTfAR8Aa67fyKm8mX4rLRKDQZRHKosPe1fRVkqXyNt",
  "key18": "4VYw2dRSFLi7n71BDYTYucvPo6qoycL3id8MzkofJ6GT4zP6zmaMJuuJKw6nJGh6tHrdABdS4CUxgKF5ix6j5QrF",
  "key19": "4ifhiJkE6Tqmsbp3cCDfjzJRt9QhHHzLWWyEYZ1zELALYFrHY9J5MUwmHLnHxBc1nPMLGpHnHercfcaQRbw2y14A",
  "key20": "3hc9DHFcCVzeMVv7TGsUz89SsM7H5SeNmm5KqjSQRzGNmABm77bjKfLwodFxqMucm4gg4PdiAL7xp7ep676YZqAy",
  "key21": "8FcqAF8eq2fzbSLRgwAxLtYpBsce37BhyBDZjAHt5p9yEQE8XMh3vJ4CS3edz5xUwzRS5eK7zyzn3vSXC4j1CuG",
  "key22": "43hE6hhAyFfbtQVroYfcUfCK8QAsNsaBnJMVvNmxn4xvPAzoyYke2ZCfcgWkA7StsBGPb4UR87XaNte2emEkBTBi",
  "key23": "3ozrXYZpCH1vXbhLtKDkd4QPbE36Y3dpGFRjqcL2HJxVxiaZds6wPrjJSM5iwQ19CrFzeYGuf77yxvYqVTZiERFR",
  "key24": "2XW9o11DzdTbze2rL4Xewu87t5SGZbWwEXBrCKYVzNZayW7bo4Wy99o2pEj8C81CfGFmmxCvCPszYLRDh8tg8hUJ",
  "key25": "E8UtrMYkYi51sAwXRMw6m9Gn9xbj1Bu7yncr655XkiXb5Yuc1Q9C5sZRhi7mSWrsnjGehVTkwpksFBKzrBgR649",
  "key26": "67cd2fbAPC6A2t1qW3CLtELWqjBRs8V9bfKRCEFEK4RpGGsgQZ4yC26mFGz8TLdLFx1bzXTyWbvsARfbxdKKwNy4",
  "key27": "4TfzAQQctuRg3ZyTXE6RcPkVfCAEWWzRapUaeE6Ur9E3qnYXBVyvYKisRynmPkWgHKYGZx4q5Rp5mpaBpEVMHhfc",
  "key28": "49L9EZ6JrTYPxai7EREhzaHXc9PLm6Mskv3ZFKbjDGqCzh9RnLia2Qrefwhbx6xjPKom7D5GBuegka8LozkjC84L",
  "key29": "3b9N52VVarRnD1yzRcxTijCiKNzu7WeXkvpGXZpvF1TjEawwWrQuQ4HhukVxaLWUUahL82FbcyVd2PL56i5xeoeb",
  "key30": "EfXnJS5cWg3t85M3iVRUiEHjx1rgexDAv8JgbQMF3V3E2ukTF1HEJLBhWTX1RdhWqPa7M8zAPnv4MZ2qSgcPh9j",
  "key31": "4PCaBp9HwVNkrm2DvfSokMZz9KGPddnumkGS8gskH7cGGtLxfjt9mbfYE943wN2XrphToxGADHWrspTMrZy9EEo7",
  "key32": "4RYoHogV3kN4CU5AXbDJT4LJxWbugtH5ohnkrBjSN3nhr9r3Uz8a6ws6RzQqgThQtzi3AhwnSd98L1CDMQcKjLfT",
  "key33": "2vjyHJ97D4i246npx7LXvqUJNLW5uk2wbzrRtwW6Y6486MCGBqiKe7E3j8tzDWcpMiKbmNb6geAUXbkWu5Ebpkvq"
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

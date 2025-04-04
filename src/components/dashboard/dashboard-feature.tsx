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
    "5BTrRYyd238mLPv17MBpPvcZVnurUq5qH3NruEijGbkXu1vFDhBJDjJDDmdhvSKxXmwWif9FQk1LFquuKCsRpCMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWBfj2QusvAx4oPS6z1HxLUrFTjTWhTLWPW3JDKYKcLhtjjYdg45xHh6NG9rDHzDbfuQKq1qBsRZ4h97JwM3rB6",
  "key1": "41vUCc2VTnrCXcyrHtFTbrh5yXwPKXUdnQaVNAN3LMghTpDLMF65nbMk5cFTaGiJBbRTxpfGHJd6Xnkh4uKNSKWg",
  "key2": "28DjxAo3c8S7T4249t8F88LMBYb7acGJmzVUk8RPhtZMN96NtbR5gbBB32iJ96LzYzsymbi2SSp6v2gm14Azj6z4",
  "key3": "3fEzPhqUQhVcBhMERtjw6KgAiT5qKSmZx2iUJWf9ZnCGZtLPmZhcmLUDnmf8iZLwENBn7QoJe13vBiGbvZMTQwiv",
  "key4": "4rSGfSpBUetg5KRJfQauctBftVPdrKz8v6Wh4uNAYNBABikyCA7aB2nbRovRfamFHh9w1Mymk3h9jEo8Nw5YEizL",
  "key5": "3iJ5F26fv1wqHjjUqqqBZDkp2qeEJW7QtpgpVwTkWyJbGTWgc9QkQeztPvS6RrSMFp7coj7aSEPCsGnCw8NgJgKP",
  "key6": "2m2nRmoZ4CfY8eahNYLEkAcbrtj8UbhuiuYJJeNjSZbQyFdSbTPY5rSCvYZckVhZKdg1YVCEtjCFFYe6HQ2CNJLM",
  "key7": "4NRZfDirqm7P9SUQLm7W4fScHxkdfNdyLjsDRSASmWZ7o9JkWoo7ES5T7wdqz8tP2YpBUL1yE7D3KpKmsU5hJHat",
  "key8": "62RndYCJ2WwNFrZQ2HDN8jzqi6ryKj6ocVNqeMHpucwUjvkpPUFbAeGGRaqeUxxRtsDLWoSpEwQGRzez1FGr688M",
  "key9": "5upiWGWbKhBUgCfjePsmhrzgbKJM2puwSVZeBGW3TKVSwR2bEtgD7hDhaRZWm4qDaGVQoB5Fhj9LVmqwBaF5DrZb",
  "key10": "3ZeJzCEmUXbHZxHuUdbppPAF8e7e1R2evnwmGGMiCaYSrzk6pNStsryr6nFcxEhuozxjoB4hhr8ddM1wqwwCVGDd",
  "key11": "4vzA6e1SifSeAECUoCYBZhfeFB5415CCgh35RSjyvoXKCSFEeoPGVLDQnXSk6pm2U3pzx12wMeG4yzZ5uU9puZDQ",
  "key12": "5EvLxTfNuAevaYGkQbV9bb4MTg1iPDzGxmqVkW2VvWXJztSBkaxeVHc3UUwr6nRG1oqTbhBKZnLGeDdCWG8o7VdG",
  "key13": "4s7GQbetsBoGCiZEpb6ioAyJ8LtXsYS9NvaMAaQRDSbLHXxQc6q8W4Rn7v1hoF1D3grfhKqTa48NtbMJD4hxbjEZ",
  "key14": "3Wtpj7sQsPRG9m63NB856JsBBtfkmzd5pdzn17QmwwaKrSMfumvdvHtf1NGDCdQRebb9kyEEPgXguvkmbiUPM4sn",
  "key15": "65ArRg47qkC8rET8aqJoY88BfUMG4c9qFg1znxzZbHFB9WsjzDPKJxPU8FvJHnfyNjab2rD8E1kbVZtaC3GDLuR9",
  "key16": "81DpyKmX8XxPni21P1FNMaFYPgsuBz1B4nvV3oFVEtycNe8qWBCz929PEQAuWJhAbBkvELujSViiWrx3eF4PPgs",
  "key17": "3bW9qYGbsyJdPqNhN5kbpaZLQNCfzjVsAK6Eoc87gQoQEoQThnwhGPGrdBREAxvv7kyVj9NUHdPuBH5MN9RfmnVr",
  "key18": "qMaJUva6uY4g9s7rtuG9MjqMkoBNs1fnouzdhzyH2QydyXbGwU8M3KcE2hkysPjozkvFnAVMKPpoDyCf8bmKiht",
  "key19": "3uBY6PZSstxCfRWCRC2CxhZxs5zZApD9AU5MSA6BQXtbQpcjZ9BZ8tZYJZXBTdjDrFNXmHUc7noc4eLXGyygXhY5",
  "key20": "2UMdBMM3oTTK3p2g9cTc1ZgXZsV2Zydf3Gsm9xJkpb6oNwjMUnGaQtihiYdJ3QFMPiQvvdzQ7bQhnr5SY12EArhi",
  "key21": "aunVLNLEAfiKmRj29fu9Fiv2rozds5yvcGHNByDS9RC5VsMTbG8DsqYegPkCkPGoK6Ve23qBkeTRc2wgBVHdYJV",
  "key22": "5qhzRaFnPMZHZBCzV97Tqbicj8XD615Qd6C6dhUjQSNYiFTK2FXt4ZdXLJi3rpRNawEUrU4fSvyG2eQEALqGndJ5",
  "key23": "8xt9EF6GGWbHrRuRhKXGmkSzdprVMLoYboD6zUzrvddJTgyPsM5Ag6NVKnywW4Vz7gPBPzvzwb5arPmv7RecRY9",
  "key24": "23zyHvE2hLG8b9ucFSf2q9VXNcUCCy9LEcDZKH3ATT7q7VqSRWmVfHrCmAmFLgRcvv5MLVAQP9Gsm545hMWto4La",
  "key25": "pKQbNuReJAxsZqHiWU1LH1MTvAUCgkjR59dTY1C1hNyCCax1Vvvv3gytQzNYjBe13hBFoHp8kmuWRTkcyhK5ZPD",
  "key26": "3Tb12Hc71h9fAVmYKHMT5py67WdU2RMTwBSfjA5uVRiNtQD1yuad5sort7uf1rZ9eoBbonXRkqsdXwkRW1TUxdAa",
  "key27": "5ryAM6EYrc6mEukPRQioD3QYzJW67mmXyijqyNmUr1nffLkKhwu5V6BdXugGqxxorw28RbRsMJDua1HqNyUbiHRM",
  "key28": "5X137GfBkqEcvuJf4rdMRw6Fwkyf1kGeuufWnACS8SH41yA2as92UxwhSLEsmg3MauV8Muca6W452Euv6W4vcvQy"
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

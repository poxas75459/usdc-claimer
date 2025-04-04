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
    "2Tz6RSWbuhKS2XbxzWgjiZo1Cd6sgTqUxymfkXqiosWJL4SKWEnwaUowKooy1wJFn35R26Rb6RT885qXuGzjgRdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6U1UWEaojDtxGcxT7ejRPmrUoxQXtmVR9K2ozqfsSS1Qj5QpB341F77c66nC9e5m5JW2S8Wn5cevJHkMWQSb3d",
  "key1": "4SvN7otYqnFERpzx84ehTPgmwsRHySEd9U8JDDPiuJsz6TxXBvvuvEDjWVEW9ZHjTPSfB28t7K629VWyAwsVeKHE",
  "key2": "21pE7xhswSXoK5ycoonDkvvpUCq7KVCQHXY2nGyfR71Hbauyn3bQoe44cufmcqeyw3RZDwbaRCE9ejFNcGrQ98BQ",
  "key3": "2pnxMVz1aBLR4tvRPWLGkyBb9TJeureEgYNP1WyxbGA7JiFaVoWM5qyGstaVbLmVMt1rXAAV6K4htJpwUsZeLm5e",
  "key4": "3v3UEXVLzk6CfCf6DNf5Jyf1o6q2BQkXJuzUVC8bKpsjGEWzN1vQWqjAQnBVHAnxEf79xune9by2N9jQbnp1SUM4",
  "key5": "2LHpuB2qF212jVyjwr8bbBHF7ncxMXx6icGhBpukKwSjRAVqsq8xFALnxeXnYgmQDLBP2wKSCb9twKxt3CbwG8N3",
  "key6": "4vfPcFS515xBnBrp68K2g6FM1928gLmQPN17jCSCye4RrY69Rh2zUZBpDif2TZRfmuX12omUTCasWkKQASVgxHby",
  "key7": "64AFk3jDyYyJMEk33knc4tbn33Z4AzBQ7SsPTs9eQT63RMkWCc8kGFJsGaW6nKDENVRe8qnCYZtyxGfgEN8Bi3SB",
  "key8": "3rZ1EgF1KLRtR1bAEjVJqcbPaPaXUdpVUUSkj25aXzQUtgsjonw9HGJT9wQbQ86b1Kfztt77nivqxYR3E36qcJTQ",
  "key9": "59pLeaxCScVaktLYSuRnpWjHQ4V4wXVUcn8HGt15kEkSAc3XaF3XXeNeZdfUQdvTDwfZdtzcYEV2reMppDZB3nyk",
  "key10": "4mmi6tdBJ6uwhfsmGFGAEe1haLCpqmChkDbNJNvfowH5tBhxaFZmgPr1AzBKAJYPs7ARsn5CdFotuG3HaFBMQ5Ch",
  "key11": "3knw5GN97GvudMTzeDq3BAT7QsiTfV3opB8tPn19Cmj2P32EBrNgPu3Lfmqwf5QkxVtrpXQ4SzzGV8oJEwxvZrdK",
  "key12": "34svFGJRdTmvDKYCHjYS4d9LQrhEkwTiGsTAxTvmmEtsr4afWevxJcnpmjVnzmXFHWypawdg1hB5moV66KWcM7Ha",
  "key13": "2jj7M2taNdT8R9w7fMVgSHBr89kuX2iyVuXgagzpmnEiaJsKTXAYWYwGAcpcyBkwCB9wfdVhYbvfVgRr9kpmGKmz",
  "key14": "YYrtB1xy6bCNVZFg8Bt8dNXwHbqE1gHuka5cdZAssZaKMVtZw8PFcB2g5NY9f7v6PA722RW4bx1B1JHLZ4XSEPb",
  "key15": "5YoigTXCzrbjwdpEtXoSW9iHHAnnVwbw4VC6yUJbmCmjPqpgUzaMwDz339zfrdey1azwi3nkpc3ikoztfxv4JQeV",
  "key16": "2jyv61iPRjpm1n6dPHMPkVWHoD7rnnzWYpBaZyZN3k8ea4Qu3MYpgc8hSA1vLWFDsx7sF16riUJH9Z1dzz1v42Cg",
  "key17": "khBFTdMeuP5yTHEQdjGSjP9AKFU4rTq9XPt2hVjiDxXePf2FzhELfRNdFV3ndHqyhBP6Rbe1gQ1nX8B7fy2WaE2",
  "key18": "QHyv7UwSiEguWnBPRvtymt1ExoZmK9N9SEG8Uet35ZBMX49iFNsmCnapt5zekUEkVtD2c8aF9jP3Ck2DbNAPo1u",
  "key19": "4GatDLuZ3YUfHogMdquVghRAzjext6KNQfyGRn3xNs7fT96kfWAdxcBWPQenTqduUNyph4DgeGRFfoUKzqEBQo8g",
  "key20": "d116khdwLFSJuGxo3z3fhCc9VDyRcbZMa5pLTUe7Sx8yTTwEL3PPY142xQHbw27eZ3N1qpFifCXiXoXjna8kjrk",
  "key21": "4Wgxis6FUg8LwXgSyJociXTukfmzR5SHSRAzvDhyRoTGyB1m7UUejigLJS5fPge32ouPsUZbXNcUPJCwzBM2EVJS",
  "key22": "473WuJocVtZ44HS2oexBq7P96BfWfsGHBqHBeGwPCyqaudvAbzqdgrhSmDSUz8hEZpwc9VBNuFmjUx9HKmYJVzm7",
  "key23": "2Zn62VJwGfMKqPGKQqxHFsJezBjdwtb7SnuVLzWE11Ugvn59i859peTjn6ioTQRwMCWUwb7vTZG1tY9k3HJGvfeQ",
  "key24": "2tKwXVofjC3Q65RfzYXkeCnvA1v5oqz9ehXQMxxdfmwWZTvuciNhJHhtPqd6GxXyVL5UoKcwEsqUKeLFQWXZmWcM",
  "key25": "3smhnTs3EiFNYeHcnox1ZzH8sqSdp4JKh9VysbBQpK47nQVzcbwetajbNTijuPhSb7ZknJpW6eTbmtP6oQic1YvY",
  "key26": "4jcVB8CnTXtPvSb3SAx7XgrAGJpPA6EFp7gkLBMx81hgwke5tDgzneQjw1U5amPQP3EeU6XbyUrCtM9oezf7uv8h",
  "key27": "5Eja961SWmqtpgWrAQsjLR9GBiLA1viKRLRJ6hdArPqjxQy9cAfsz9W2shNsLKyXjLJy2pE8X8fFeUjDZuoAgk9g",
  "key28": "5HP9natWxqGvNvDFYgRQXK6yhUdhJirWLiNz5WXn4cQnRjiKgh7uNBLBKsdLBMi4CCBcjqb3zhiq4N1XvUKqWeki",
  "key29": "2LYKWxiZtNU8J8cXes2194Gf8YCiP8sZmLU6tVNGShzx9V5aoF6rXibKvVpbEbKFBvBrt6bfpowonc2qboKNQaPm",
  "key30": "xNQDe2zqxaT3SyMthuJhSS4gP9jNK16vUJiE8rr2mvH7GhY77HejQYcvHBD4GCSTzQ2LYExNvhdrD5NWuuUefCE",
  "key31": "32Yz5iDtFwr3wFUscSVvFYaPZVjCY5xMGsxXFaRvxdptoKpAFtQgmxLFmkBpjgSyg8zB2V5o911gsyFxLRsCQeYt",
  "key32": "5mCbEKQX17T4kARdxsKweVqif4BCdeq8ffnx6LxG49oPz2pRtyKhc2YM6LBkikgqWejpzqKGAmqGkyGppR9jJayH"
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

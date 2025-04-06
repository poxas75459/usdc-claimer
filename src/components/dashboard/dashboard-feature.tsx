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
    "3y2AKMQXxq1fTs5SGegH31N4szfwAKG1S5BgeN42W43CeYNen6TYzSZUU8NB3HgcARdmcLK9q3TgRcvz8xYtEkAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxc4asBRgBVTLQkACqQBnVHDB8PwKa5ou3fBWrheXTNt7NEzxogcjFjf9RteJpNREJExmpkmdQbHq1ieu1Cp5eb",
  "key1": "5JrHaaVPW8XZ7xFJyiRD48ZaemGvuiXce6j8dsyao6As9kuT5D8YozN1oiogAfoYmrYEnCydNVDy7Hye8usFCwhe",
  "key2": "2LMgAb64tCE4ieqxaqJfy32bESqcbc1MvyEzkBzX23GyecXQ9nCt9CiPxTCX5GAhQWFGencgEhzZH7DLyopN5ekQ",
  "key3": "5w1Xxx8oCbzBKYBqBBqu8GGGv89UuME7ZBsydDks8akL4HwqmFSwNvsh3hA14R21aWgcWSqoykpzdZydMufShsSD",
  "key4": "4bqDt2GdNf2tPLuFvsAS85gX9UKM4WksTndTFM92fuoqAVr4fc6o1nX9susf5URiTBRRVvxK3EoKp39aavxjBMZd",
  "key5": "5BDka9AV9paefUr2AioDEpcnLYe4gFJByiSCZaAacntCVZtwNB5dFoujy1RV97afcdakSkmmmhTYdvWKTsqpXjg",
  "key6": "5aRFpJJab5QrD3zuSiNiGtAGrSCTFbgff2uCPRdXm3miG1oMLYdFUNQ3CmWeRqHknEMx83rLALrc5jvu3rbwXe76",
  "key7": "ArfmdL75pKLAVQBqov5xenerG5hdq4qd5GDsdsmK5Wt2QybcwhbYm6Vo1wcLoasyqHvB4GPNATJxtqvEQRGnDHv",
  "key8": "3Shq6773S8w8HBrvwWaA1zxUFG7R8XnVarWj2V7GpyPxWd2iNLZ2bj5A4q6vrh5TpiW5WRAS2gsqbhPPnkZTy8qj",
  "key9": "61s7JCGDcsRrukwrTFrwPMP5fiPRZmZgB6ESjF19NE33BdUhod5RLbqW79KeCPbDXaXmSkU7TKKJAv8iDh8Qrrxm",
  "key10": "b2Vma1UHfNESyeTqeb3NJ9DDvncbE7c6TuDR8fwAGnxisCZJABPrFqjAZryxjWDUVZg39H1N95qMok5E5dFjCEx",
  "key11": "4iwnA3A1Mt5ZrnzdaYCZ9hAkjMPmHoabMfovXjj4BhdYgnKN85vu97nov3gVLDgQp9JJBAknJv3NU14Ww9onbx3a",
  "key12": "4LBcVnh5qLtaevaefFxTP8arqtMLMWLtan34k9Vij6T7bFrupBJYem7RPkwXWzwXesPWM2RRysvgxPSAV83SxYy",
  "key13": "2N6kUKEKGSn7fefL51TzrwJ257nNMo4ye1Zfa62xXopGMVnrVuSYKMt8xtAAH7fPNkuAkcjW5LtKJ8rjfxXPEequ",
  "key14": "2b4eAdTiBjCGYP6vmbk9jpr3gpE5guKQquxUNtCmVyxZyqAXS1YXiDVaz3hGK2DBWGJNEPvFeAxrkNc9mRAjZ12T",
  "key15": "4hgJXz753EgoUhfhCvSxU8197C2dJumqtoH2TtAKfVn9L9VHgtgVuNG6KR1rwa16eNCbCdPG6ygsvQssex6jWUPq",
  "key16": "qpmDkRQxwTTaudhNguRAhPLe2wLBSRFw5cHdgp1G89rw74io9MyxHD5SwVMo6WGj96yNDqat8yJj2DrfB5yzhf3",
  "key17": "rWVyTYwisyUbdt6Prdfzpqxr6zKpuMgVny3x5zhmUVNNLaGNTSdo6PWuC1msgWwM1evMfqpatbrkdRHTwPgrDSJ",
  "key18": "2FACUL7aZZYMp8nL3EPvHxP6kkzHDNnYn6GgqvoshAUaAMtgtWAK1XyJau8qg3MLatNf86ncszpt9GBjSVXvB1DR",
  "key19": "3jnwNvGGoAGcaq9HR1kpRkTQb4MtS3UCYv5ZmkNe54i5bpvePUQmWJf3TXpJC5HfrKhXPPx1p3syBg2AUWCWEDdL",
  "key20": "PCG2XvmQwYGbgo6N788e9k1sAGvRRFcqtCJf6M283V3sKgNnaKJEnYLXL5sPX3TjH9b6HCfNsE2K2eWHJxt8BeU",
  "key21": "5MsofZZjK6G4prhj3BdX9qFoHtryNZKCUKBesebvqXe4U4qNxzqYiYESzrXFZCQRXKXW56Nyg5xVYPwwYPGxe4bs",
  "key22": "Gj8MRkMxZu5tmK6YsM4RipqeVq9vww4ApTUCN5eJ79ntayKkAY8umDBfjsuZKWhoaVDGP9bURsjR1nvB3iEW17X",
  "key23": "5bg1ZsGMwt8sxc681HKg5LBsUnoENWmWwNHTppUkr3BPSEMcfRJqjZmADh5J5ZNuCdXiopgwCURzX46chqxycBYi",
  "key24": "4EEyyzPf2kbhzvYXqsuzwgvKyC92wcDjzyrLUBdDaZfdwdXTSYRPi58cV6o6xtXvL8q2mpfo1mKy1eJZ5kiSMjJ3",
  "key25": "5aJhcU7ECA3bLtkKCU74fgpeiiRkCkaL5USx228xTFihKGRHFCRQ56rRBpJEVfiB6JkJvHg13M8sppfEh1za35XA",
  "key26": "3Fr51AzJqYVp9cc7i2kx93NJEbxmoiNf6AifTV6Q84bQ16Gy6CceizEfDFEaLFA3jRbkwhSt7ZQCWxJHHDEJvntB",
  "key27": "58K2H7hWbUYgtNnz9ygZeFEzzTohGAHpLTdqoxGpCfEdYxvKNMK1x6tnFyLS5MoitVd4BT2kh4ktcTNFgfYsUcje",
  "key28": "4i7fa3wEbvcpfKnQje1yargT2b6H12gT6cXysjwgHCoM7zC1hGiz1gezN8KqjFt7D9KizRCsH8tVLe1p5BgEd97s",
  "key29": "57iRnWL5ge77rRptAv1gzCAYxp9k5bqZFHCi1jXNZKuQu5PJLWRrA8icpqaRUEJ8iSrbq4qzZ6qXuXi4ZsM2eiJz"
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

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
    "5tzFtELLCTDxQ6cRfeAwtBa4EGg9kXAartGqPFLrGpvZFqhZa8igwZZi42CbPeUJB3qzUPwFZXi8BMyu7QzmvAhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VykHCgEf2S4fkupbAbD8ZTcp9rkP7MWX22T9ojXeSGBDvUUkyE1bNjZcMWS6KzRK7K5A67PhkpvgRvkaNKH5JWz",
  "key1": "5tAc9CySheuobiBtszpz85fhSUmx5RbnUFC8pg1RQq3K4bZkqeX38aP1JxB5HqgJ29sHqc2Ca7ze6PUUEDd8uhsG",
  "key2": "wcFM2GitskAcsrwpCkqeRH5D8M4DvMCxtcqpSaDAUxknBJrXPFxCfCvFwATzXauhzpHd32g6pbmb5xRhNvzMqFW",
  "key3": "217oq4MrSaiJWWsGhWgSkFy1ZH7nzqzHdXA9tES9PuZKZkUyKyFCuYCyEYL7GwU61wnnNyLi7YnAYb6UQnHvJWE8",
  "key4": "5xzLbbDJ9tenq4mHXKbwsZRCgG5Uf62WfrcxJGZCnG5YakWq3ihSR7zMeqMD3e8xU1f9kzfCQygduccuD7eYF37m",
  "key5": "4RuShAK6HLWAUqjER6tNQFHkwcyVD4xZLJC6FfaDTNA1KTq5Ye4GN1zqTgBSbVfeb6mHE2DeVeZYHoAAnmiqtAmT",
  "key6": "3S8UmE44oo55gi7ZyPxVXCmveQwszaDuoxKfTV61WGNSowvUpvta2cvHNJGik2154ki94F1TZGfpbgTEVpgzMEGC",
  "key7": "4HfxDWQxQvk2bSYBy9Djkqgg1gVCCgxLK6v3jyexCdhgW7kdSpofHBg8TBrPCp3kAMwbA5YSiyCFbc9g5yPdG3Cd",
  "key8": "5cg9kCTP6mBiHNe6zmgZBVW4aZUFy9yc8aNPXbWtZcWPYrqT4uMutzcx3rPHBb6RXUoQkuk7J3Uz9qUrkPiQkmA1",
  "key9": "3Mc5jp6yis6wkyFA86Vqcz3EbUtaTqL3uVnEBmTVkYqek3o6boABpU7FqeQgv63jk8a3TxrmoDwQd5GKHq5cVnpF",
  "key10": "3GHk6nmZK17b9zEGC1XSrhMxauajjQ4XSXnFsZkhiedpoLoEyxbfBr7PGTxUBBX6fEz1At42WFDqu3UubxDVsF3p",
  "key11": "5zx2WUuT1xsoNJ85d6x4oVBhRUFBMBSsYn8R9Hzc6qX76918dKcsijTXZvA8MPjjGjS5uCTCbjBvhVz8PE9JRRHT",
  "key12": "remDwtnD7g9CDftHCjcSwxsJTCnsFAeXBL1ovdjKgZq9fBDhug786rpc5EVPfHo2a41eokVPqVV7yyQ5ctbHVfh",
  "key13": "2L1pGcfuycA6aeo9FQBpC2KCk9tGLTFRJc2ZfubSQQNF4PnoJC32fxMJtsPTcjnXmdyyzNfw8YU7EoW1z74iMT64",
  "key14": "53K3PkTLrk16RjGhXfkubJ6XPRYxPRy8rzy5DD7d5qFSy6HqWu4ed1CyWSreS3qsXWRnMthC9rhD8zMbcD8Xrz3M",
  "key15": "WF2kmTGu2g588BKFrxXwmJZcCHNorXapiaWodPuuyc7sy5G2VC9mVpumHC8WdqHWwojqudnHk1tVgLxMtiTNf8x",
  "key16": "2pji4yWcnN3wGdWfpywgR9r9LenxGivVVgYYTiVVpvowG2eemLSZ9brCav1QCuz9aRCpGTcfn1fXJ44EB1nwLdyG",
  "key17": "5h5nLb3J5hzbCnjfvMQaHfp6vmN2NSsbVQ1Ne5iypBxq4L2GMkCxZDmFu8nLhjJeB3wBgHQgyesJ9fZBR6Any3Dj",
  "key18": "2NFUuJFdvWq27WjSpdmjEMJfZq84Ag7rbQt1qJLRKfed9hssYx3xYWAhrPnH2y6HKkZVCyFXAQxJRGMYQ5ruNjPV",
  "key19": "63JuHhPqpSkgGvtwy8A8MqSLr9ifF3hEzUeR44TTDGKVbnwf5cV4Vzq9yco3a9oYLNvvas5MYpX5G7GC6EoUGU7Q",
  "key20": "2r2ywtfBkb2ZwhUx9L5mTs5kt6hHrTM4ABRyuhkEx31S6qZSd6rbp4fK36JmfLGowEDBmimdEF42dnPzbdYa6X1q",
  "key21": "BiBgVy1CbfiAvWVbzrFARtfNwF76vu2vdYMRPPn7V1xdAARpa7N7cPr4HZLtFR66niGryy8TrHDdMrCRDvN1crD",
  "key22": "3pREuLMuzAiMAp7vNmGNmHabZD3aqzquJY6YFmHYsMcWLdLHXWjPtXQRThDzWQn1V7L9ZFQfn9ohwMWhxb3EpUeB",
  "key23": "2RTzjA9RGbWACCF7oVjRTsCCtzDjyPQn5HampYXAnxzu1sGkiyqtQuz7Zfnr6Y1WfFHhoBmLM1hcx4myzmCQqBWB",
  "key24": "zCiLWcZj34bXySd4B4TYNWS9bJEJtwDrVizg9TpEgCkGu2Pa4GBij6g9Hd6wvQLe9V77NTf6k21ZonyEWaSXBtz",
  "key25": "H3DeEqRuWVVYSGzNBMnUByY2EW25nRbH8ebVogBm9bun7G4rfUAHpgQpNmPapnU4aG4b2sQov1xUZKLeUUUQwVg",
  "key26": "4JrrDawkMN6h7PtY8Lqik5gJ65YSprqKzmR35foAtyFMagHj2pWKMrspBFwnirvdLtAs6KDgGnCgp4JqA3uVZ64C",
  "key27": "5HTGtmqBmdMJ3YhM4dt3hhm1RSEC2YKeqpKnJha7yT7To4zm2y4uq1jk7iWtC1oD9Sq1jkUwVvBD6bUcRA1F2Twp",
  "key28": "55jurNPZbuR9yCTK4cL361HgD29nhCzv46313nGtgKdKitdznhLoywn5FvZ9v4Ynm9oQZ2q8zCkrnUE2c76PhVov",
  "key29": "2DmhiNBEcZjYMF9z365YWHKu59NbLTUN4NPUR8nrY4mEX8cajU1Zho7NF4FZSoRs7bA7zRqQC8PSPzPuqHPPvQ7v",
  "key30": "5AFT7d1Ho8bjbGVU4fUvyUbgUzj2fiaUhDhYxtU7HmHVQ9qeNU67wfWbN1pD6813e9Gv3zD3hiEFvUAzsMfRpbK8",
  "key31": "5913Pk4Zxn41CnsdSotduGRT6EgxbgyDJ2tuS3JszZEZ4afPVk9Mm4MAddfkFs15U3K6Pk3GNiJCXzTdPK395RLb",
  "key32": "wK3LH5BkkDyjbcLPLb7WjZ9hDJmRtyTqvBkz6BiQXhZ3YyzzpcMudeyCUxenEXEoohu1kGzZ2Fny9kYbikRzk5G"
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

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
    "nVpXXPgFcpne3aC4zsAUCo48xE9AsP786AHEEAm17NDA13vpseWknxY4Fqb5gsWfzeLoDPsLWVw74mBWe7W3hwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDMq2FUDVRFd4V3gbWrTXgCjSUwJNq62Kkb4dmjice1c3ddsYmGgJ16q36Btfnpb7k9d3aLTseqpXnQBYQC2Jzq",
  "key1": "3qbqqmzCuijZMD7SFMdZgEpTBZwbnwi12yeWs3sGjeWxoTrMWQhTk1dVY822kWAJr22oXmsk7iGw5iueYq9fdwoq",
  "key2": "2qbZiY7LR16jnPdWHg9uYWERtaxLL7YdrqubWtTByUtiy8QFXtpHpWYbeJ2J2AhNt4Zq9dGDWLsAmG4GHAPMhX6c",
  "key3": "5ZzhKu166JhHSfknYp9TLRRqdd1qes5DkiaFCLbwXtkoB4L2XZhkBVtWXL83DbAowfuowEtKEJuhpT7aWBwy3tct",
  "key4": "MGHyEAEVxoAzhZ8sowozsfVYnDrwouLnMwVRkqhbSfJSXZeMEoVBwxuCzjE58pcwbruwz5F95v9aSoLtqNjt9KQ",
  "key5": "3cEGk4K25RDmaY2ghmYrhFvXEcvUuwsqSjXxGXbKQ7bjgS77mzh17gEFfHcBPCC67e5s6XZAotyTnaT32M5YnkYD",
  "key6": "4gQyKURfjXTKtTEv9mWKttM56GUNNKmhoTzKA4bJ9FCEy8ozyNNb6dguvdEPKtWjAfLehGZmaammvpiv7XD54NeJ",
  "key7": "2J3rDDtydcs1grBqKDUycaQCxwig7UBxEPMhSYFRSNVocWzALbfnNfbDKLYmhjyaMu8rzGmLNTtKkgVwc71ZTrD9",
  "key8": "5P9u4quCk63HpQCL1ACYpGD4jTBe8MqofpLjbyJpno8SFTSoRBv7gtHPnXP73SL9WetMJEpT8xVydCfcFKiDnntP",
  "key9": "5micKTRBQ79XxPH9hZwMZesh6idovCe9a72wF5pzs6hRxtW2u7sTXXEbp6d4uPqGtygWZ8rpSki5hxCYSziJFa4E",
  "key10": "5BhgT3RJbK7M5y81HVd7BsruGnc4LpTDiLfkfd17MSnNJAE4dGBrVXVccKkBHNi6sjWb1bePktFdLoCYVyDXfjt5",
  "key11": "34Nb4afYEDsfdT8SdrvLrhuVqaHEUfS9ou3K9Bgg6mATxMi5SZhCA99wz1jmyDE2X9A63TnesfFAgVbZvxi3SLo2",
  "key12": "4e5hrcBjrRhYwgbYXJ3NPYUhEpeRfGogGqnGVRbZz6CVD6tVHB35RXsrtGm1jpnNR8r9PNohmh977VCFrsvKkb4Y",
  "key13": "aTj5LNALrGcubBvDD71UsynFwmaPFQSVKgzYy8k6w8N9d6kM4NpZbtrHcDDaJxGDB7ucm78ozKG5S3Pf3df5ufc",
  "key14": "5nHC67jBxhEPKCZVcTDtzwPGQLFo8cDnBcbYrNBPzL4BLXFcTpXa8xyma4GvVZZqwnv2CoptBtEfYXWzzs2WnHPo",
  "key15": "35yXFTymUqScqtd86eTKSDwp8VuTJBBrU544Ejt1ajL5A9od9vMYMbzZdZXrAr23Rc5UBh5qRq6m5RwuPmNgncAW",
  "key16": "FtHyvNKDFQDzhfCAZqrmQZeg7X2K7roqXA1qRu4PmY9umZ5f6GD1KHCpyEA53AZZiKXSU1wACh9UfPukwmZsEso",
  "key17": "3q6siRE7EXELE5XoMDh2kWAjLJAzH2uU1hDiojWvRyuTdD7pnHP1HqpJyN9xcTM5uAGjxvzgqaUnv3ntiGhACgvL",
  "key18": "ag9F9X96P6L6QGtM1XymDXvjD4MVWYbro3V9R4mdwiwLtU4xkDpoe95x74njWXwiDZKteNJg8bvnGk3vUx8bsgW",
  "key19": "5kknf4dYpNGudXc1uHNgBGh8HRgetj3QWXptWWWSJ9TbCnjpKY9hP6m7HEP7DdYArKNLth9z37Nq2wyaaxumpSE4",
  "key20": "3CM5zraBvonBbZ98PsCy49SoTSRDRJYtzvoUqUyScL2dUuXymXMbimPgmuoabya6dGeubyvYQC7UoFpY7JYkzXib",
  "key21": "2uxPF9peWnYVqQRZJxYn5BPoquh9BvzrRhwN8Q9q689AxvYq15STtpRakYY1gEk2PSAdVm4JfWCUxTysvu954C8z",
  "key22": "3hJXA8BAzDvUvQqqGsJvsGePRjDxNBfVE7a8KW5LT1PVAEbs9tXqHAHF9whrP9k8GrGN7g2Jbq3aABNG5bZsxfdf",
  "key23": "2BetHrKwoLZx9BELPjikWnjvEhVEs9hwPuEmR423QQr3C2Ay489AazW6bWCcypYk99v8HofDrt53u2JHwoqxdnYJ",
  "key24": "4YxjQP5YZP7sSxutkxzkCfLinrmRNuu7QAFyPFNujcHGzzJpVymPt6zV1KugpWEqSbdTZG4Egt9WFVkych9jFedb",
  "key25": "KBUuM9U5RjGrkjTR6XFE94FEKfb76Wrg191R5HnZvBsMs4Y9spFwBioTX3NWgJ7iZM7nv1xwofbTgrobp4ZHZji",
  "key26": "2koPGAfxEbFVQknLDWnMcBbxWt5GHbqMu4LhRgL1YZqTu5zkk42VLdddqeh2ww3FZdyURXWMhqdBCoFST2Zitj6k",
  "key27": "2SczGzuH96g9kv4wkhjybedYmrXFUVTzqxjGCKj3pxwjYDh5FAfEXKttCzEJeuKJfM5cdCbuxf85foBkqVkZBBBT",
  "key28": "4kGYjdVyjR3XENh1wJdLgyEkqdJq6A6pbhfqzt8x2PSzZkmwypRWNHVavx457wcCgQsLmg28JE4HvTTsGF47KomB"
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

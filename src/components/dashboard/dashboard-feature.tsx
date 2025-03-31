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
    "3NnuvYdFThD53HfeU9GAZ9xK8NShbnAxo9PBoYAegCkofrv4HgxeXno6qsPjwdka1kQjxTjhduWdtvYje3rbBENX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xenv5NeVWTdE4RLh5ZFBJPi12huiZ7cS7N7La6q9Kv19bE1NDWN3TVT9w1WVeVzBRxiD34wAabHtuZw3aRmV9K6",
  "key1": "7rGpcfZzdyYSvp6qQBzRHQrf8HAVR85r3rKq9Gc1TYvQVg4fCg8HEYoZdLzEUzyNi92dU1YL2z1vfn94P7SDade",
  "key2": "5jr87PiEmKA6gonARJ4fNwvCZyxM9dUqHx6Gb7JxT8KaNyEWLdw9Yue5pRXVQk938Cwz8cRWdamgKcZNxoCXe5ie",
  "key3": "3tHVSwavwaXH294puRJYg78gfLcFz3EQoWtPMH1bZJvGgWqkRMFcdiCoBdi9rvkJmFyR2XDLWYmRKkMSoP8kzhPK",
  "key4": "DePZiWfXjFSBy6uVSztCdYAKhKt1A4dyPfRdz74KicRKvnTjDenXisfG6iwAAbiXpjgkuW8hsGEKQaxjYJmLeXN",
  "key5": "2p1x3NYcTbspUTiBhW3emCV179YuwjWXRwvh3i13GJ2R9fYT4pf5pbz62zYfcd8BZnGqEF4HKYEsYvrwBVNgsb3J",
  "key6": "3j91ViCYUADzJhwbVoV8k6qM72pGMsPQ2iEXrjZ873gcBBfN5h7aDhbxpMGthr3NF1JHv3bjae5xFEhhYF6nW5UR",
  "key7": "2gwwkyj7r6a8zu8JsJj94Y75Neh1yRCQCksJbisz5LDFjEXNzF9dszQYaVZUevKEmZsiKp1pPLc83k779NXkG1H6",
  "key8": "byM367BzQrFbcJdBAabJTp4M9zc8ujjvfbvvuQ7whjTF8TJMV7DJoeQA9cdm9RLHKWbQzAqqpd7MacBYdyuFrfU",
  "key9": "fdymy2RZhvYCxhTtYpXHReBuef28xbqzNgoQtEoDaJfVfHMjqveCMQRscYeDsu9XKsbswkcft49FYhcZBjKqKEn",
  "key10": "5x5MsupgLgzckkGRptHX2XMnhM3f9zJNDCvutFZrqmDtmbU21QgYhZzszjiShkaKXnhniW7jZp5p5gyeNFhmvqPS",
  "key11": "55upwf17jWRGMiTgKhWA8SiSiozK4nWuRXqSymHsgGTwAHsXDcTVxxq3CohVYtZof7wfdxyRGpKLJ3xZVtLQp3Zj",
  "key12": "4QiRUzwJAUJqKXHJBCHR4B1UKGujgzuJNwdmSipTY2ae1w3pjV8HGB7BTd7Tng6rWctLwLirETjeuMG76YeGBXgR",
  "key13": "51T1NKHRXCC4yAD6E1YUr6kGt25NGknNYBM75T94f5DW2qxCuXQMMtXScXeSbBFpSk966pswA5TKTcZhaBda6zws",
  "key14": "4UWbQr3F6SUb9q8GXY4u9JdcmXPuiBWsf8cjn8c4M1evAZ6D8TxaJrmFEPB9EeCKphR5BtNm8BMBnutFr1rob73M",
  "key15": "2eMz2gFNvY2W3Y2tQgyx7ZsKHxfKUi5D45qAr2eVJvfBHMSRprxeU2nYyf2vPgmqUNMWU5rgPKrG9VXGHYrpNtGo",
  "key16": "eX6WxwmzvCiLjJhxyNLc6ZStQECrDncKAAXxwGgKusc5Dea7L79c48Vo8W94q4z4DiX65J68qkAf7PJaqLRoQvr",
  "key17": "zCNGbPhBRjhnkXYQ5R2zfNm3Vwx2EQ9QTmpPzUNQJP47cQFxpFdGC2pDhYn95LWVv2vKR1UxqzBQ7HfAvN8kd4Z",
  "key18": "66TEWkUpEMvRyHLQXddJk2WhWURFGNgsaQoJtviAxh7vSGm9gnXJjg4CxCJNWqoZzWo96iqMzSPxZm2mpLFxUDoP",
  "key19": "3Br88BUMhHJo8EufAWP1bTjqynyjUe6VhtAyryeDsu1mGbCT5FC1GSBBBYi2zTRbLmnzFQbygQtsUSAShrSNg4Td",
  "key20": "5Qy8KmpfrDzCYD8cNX49VLLzoptmZ5LiMSoiqqTcRb93tMmmXp9XSVrBDhN4nYvjivKcqJud6Jr9KD8bPWrp6JXt",
  "key21": "2SaDKDXPF2peuBWtJvfp9tGmimcoRgcNPj3QLAC9CTVHkRijppWByq3eQqXJdLRz8jaUurmfvkrgzDV4cubc3PUf",
  "key22": "gpPEq6qYQK79U1jkCtvZvuz1U5ZTyQXu6NKzxRosWcdT6WWFPvW8cZHYyQTt8gHactdKPinBurSi4d16hyUDJiZ",
  "key23": "4CKmPXwwFbzuE4KzcmADy3uu4tusdg7djXN24QTRdHMDVg8Bfam2A5FpTtLgxzv29jfJTqnk2Yv1N67GC31AHxST",
  "key24": "4GeciJWXgfVYfN7vC1m8GSHzzkWvevsitTdbQ9XQuL22Axe7Y8QXpdeD29GncGHZ3ktuGmXfwa1mTqyJhiow9Jzb",
  "key25": "2zfetQeMSFWpR9d4m2CbrYD6rVH5R6anykpg5azJCbPqiPYAQvyne2uVFZi4k6Wjgd1dYS5BUPhpP2cfYToW3uyr",
  "key26": "3NVqBCdqMVZi9jFFrhPtkd8oK7yRuGcLK75VqZUShqXmogxWa4XmtQpdwCGLvwSE3sn5GC2MXASXoE3aDjumps4j",
  "key27": "iyqtkeC2An38b1XJ8KxdJGqKK3651Z1wR5hpYZoZZ5KrM61PSHKD6jHMDwWvPoPCNc3YjhbNTais3UCDPDhenxL",
  "key28": "3i776qwvAq46MH2KzNB25oivAhYU2pATENz7CHNNkD61WQusLsz5HjX7tKUqWWLwHzZn98EkDfUSuPKeH6u1kBtD",
  "key29": "ojpvtPcHFW1x8LNQneC2duFhfUzNrqKD1d2GePBDkf75JU6JqzD87NT8YtKoF654vXdd77cBRNe8cjwrB3kVn7s",
  "key30": "5gViNA5JN1NgCnbsCD6KCKNt3SWtHDokKwsaZimSMwtGHryPheqMXRekEs6rUYV7xNBbmSwk7cRxfiJR8tTQCqsR"
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

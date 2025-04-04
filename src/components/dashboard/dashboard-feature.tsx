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
    "2vViALNaD6pv7snj89RjbWq7nRfPpf3Ts1e3FM8CSvrrXGDJMr3agw3dPiRF5WU1dzetWXeECdp1WALxGAyyaSPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VYa7RmyPEBDvzF6W9SuiDh7oExDvyX5oPHfTzSEc1e1PXah8TszeKkefKy9pmGuE37xWdfYJAsT7sMM7wuMpvY",
  "key1": "4dLTSLy8mJu1KaDH3P2qFaQGC9B4xmRiQ8wKxQMZWbFvCfrSK6x3LdnPbj6mK9DwR6fHBj9RBE3URE2qtLujht3r",
  "key2": "DGuBmkLqyvmgaqyY8QV4BrNHp4nVAYanyy7gQUmiSRgdFqBchA8NNG5thFBWb3ejr1TGzZR19iRBfezostPjBQX",
  "key3": "RqoWyBXtXMJnQFiQhq6sG6N4wqNE5uWx36HPpzrSUWFb92HbvgJUW3EeDjpzyTySoAoWP53M5EaiPWZygTm2KMc",
  "key4": "5poEhfWmcSdniJC3MbGH2co21PsCxnBcWdgn3NXQYiFn1ktX8Nj5B6h7sTLePGxbH7bk2tMxggoN84Ruye7Q8cG5",
  "key5": "s5xuwQtgwpFE5hUNQ2Q4KWhqo7dCtidPPmKhnaqMBZgPJj5Q4HHV4NMxc6rE3Qbzkw2sb2huBTUH8RXfrBWYFMF",
  "key6": "oZHyTWDgTwQDARez7x58DitMXXsEdX7y4UwTW969Bmz6J26qks2ZXpHi13dWn1CnYLf29cbnVucBJEmnd8HHE7r",
  "key7": "2JzB8YqRpZDMZPG2Z6vdDVtbWAaoCfyYrZJQCNSL5TSmMN9ZFShtWJoSbra4ikFoRjj6xZP7j7cGTRFM2HRGAzgN",
  "key8": "3YADa9QuZHRUwFAuJ2bHe8PX9wCw2ETxgYyBAwq4khVJQZA1vbLghQW2qpZa8B1SGXBXmw1KVNMhTRTJhbQii9Ty",
  "key9": "buXabFXysY9RwiLs4SvmqByAeL7Yjp5M2hHkvqVXQSwJrPjoTz8HSLyMfWEYoPD8CANiKWvJf3PXRtuswGuQUtq",
  "key10": "2AGSV8k4TAWyCxznUBv9hJ4iPJJW39BHukNQLsgzPPBcdhHYFGsLBCugbEvdJE1dwWCkPx2FjvMZAxTgU6bgckCn",
  "key11": "4RMQVX7yt5q72VT5NTrdYNAJnKKMu6UqU33g6b8WFEnbRrLtnfPjtqr4Kkze8DoMZakDnXMWGZ2yHydv5Yuon8ms",
  "key12": "5d6XVKdmYfccsvRxpCxnWUp6t6f1WuHy6iAYYMswecZiwCGvwoX4Cd7jPhixzPEWaFFt3RduKtFmMgXZKghtJnP9",
  "key13": "4CrCKVpTWMKcD7XBXHifHmT6iNAP1pbKrcyQQdyZUNBmmmogq5PjjwHf53m5b8XraWYhntm1CVaREHJ5UGCkmKCV",
  "key14": "2AnMJyLGiHCqMqaBwjA6ZpjWGkJghbonSS5QxZx4hLkDmEUERSvZj2SpJv5PHU9cKWt7Jh6bAroG6bPy9ULkrioQ",
  "key15": "4Wo3YNieXgkETAvQQkbpGQoZ19Mo9W7MquzsHq3htKWFNt61FcsbeP9Muyh6JZDp7ov12L1eapnQpHaS8AJspRDK",
  "key16": "7cvyPufmnhKYmvF3rtDbxZvjC8Mshh65q1mP4zRA6MKU8dUpv2v8AwE1qCFUEE5c72RF8ACREqTK71EMcUmPc23",
  "key17": "31MQXSFEJsJZ1tRsG8JEEhdkvfKed81EynSQRzPZiioa8XYXExgZ9gKxmHeoiVi8yw9BkZoJ517PHToVgvsdJJR9",
  "key18": "2Hk1Tx2tqXh9Sn2TukmNKxAcQ5JYP9vbH5GcgEe9CgiwVgGvUe4jBTpkNNuP68WmXckt2s6E69h8MsTLCN64SBco",
  "key19": "2pSoQi6KnbUmWLkRYyxHNuBQW1Zq8wCkpy6kdkxouBiLFUqjR71KXgzJ1d9FGiRagnvBBc8YPMfxpDiA9GFBr6qf",
  "key20": "2hYxgRxc8fNpjAzB1Zi7QGg7M7gNosD2TfavbDJMvGJuhReGsFdga18h1nGSzahSSViJWrKeMKyWcZWJVfzFGAm",
  "key21": "2wHBeiiTUz1FP49N2psZTwiDqMfh5e4ovhABK8aMYP7QbBvfdorPU1ocesTVZUNJfRqjtoLCm8TWSCbam2rrXtMy",
  "key22": "3gY5w4VaaKvehdqezeq1wSZ2ZzDtZ8J2vWzVWKhZD5WSuqu9dvBeXGU8u7jQvBT3UecSHxiJuYsLurePRn5Brcm9",
  "key23": "4qF3oqicsxuTJ2srtQGjDXkHrv8tYNnDAtDAUXrkwTgPmVaF2nHpCxvBrD5tfqpXR4eMsFm8aL8DyZuRuwekRHCR",
  "key24": "2zmLneeb3VTZoaEHB1zhRjCheaY7emDj5JgPyntF75LxGvq8JfKbiGenrSmWRVYxWrFBasMnL3mz5jEKZa6ZjM9c",
  "key25": "defqB3FVdYBKyjMKsYE8oMZ1KkQTLYKVpxD5X1FCQ2Ez7znZSoWMFnwUdq9eUwrznFru7Xj57uuvCWPkxLMp3mj",
  "key26": "5Sw4gMwVJTPQbZh3nQo1gSBM515GeYbt1dq9PbthJ7X4WMMij3zvyNsKZbDofC8dACwySwkGVKq9mrwSqqkkXQWZ",
  "key27": "63HihghNgAyX8Gxix6ump5CZBCJ3oquEiwxE5mEnxUhbo86938tHnWHjzYwMAXTubmx4g26vnyC9DJBYknfgYf9"
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

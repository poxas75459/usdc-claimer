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
    "4PJhArTN4zrQh71Y6xDRbv94NeCZsrJxG9K54wwKeqmuwdtkataZ8DJYfsQzCMwsbGKp3kbWrHCy9Bz9hAY1H8pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFqrBRQVBr56umejomjfUfUy9ZNBuUtbBQJo1rNXZeW3gbqN8rHjYJntcwrdW1VKpnHS7PJy6AXrEbPYuwEdWXV",
  "key1": "3Sxvrpwayr76ZKCBEbQPhM8Qy2RKntivSWVMXpMfVqGNJzWXMr1Bcvg7BWxwuMKwJ63MUnzsFoVrw6wzpdg3DnEU",
  "key2": "54t7j1ddkgxgmxfWp9P9hZ1rMUhL385qnNrsGJvYhaC11qLvKMo3TL6r4GvyErpEZnNv1Zg9LA1L4bVrH28BY4cb",
  "key3": "5nGMYGXQjH5CrBX73ADWfdLVVCezKUvYqPvYPHk7XDkdTMGw6JzYzTbPLDwGydyf69sRMh8vudRnQNrppPb6zK3B",
  "key4": "4NMwGAAfk7qqydMydyML4h7wVRtKCYNr6xhMbiVRhVB185Q9YjFffPZqfMvuQp31QZakc2UFRUxjjuwYMirj1FkB",
  "key5": "v1HUqsfnDiY6i5gZtxGPpbDAuGS4rG2XKXN66euxuoc3MoCnF9Tc7ZwbEKKULBxfWCfh3xUeaUaga5TpubXcwbT",
  "key6": "2xro5LjfEKZ7VJdrRQP3vUWYa7eiPFRWSxp8APgm2HEawz36LdZa5VVyvfzwUEwpfaWDVxg8hSQeT5HJch6UxJge",
  "key7": "38LZScGPVi6n5nT91wsxv865QxBfD5kvYVzuRticbHhbZ8u2Afjj1ZRYUwEj5iGZ6VJZz2YYvJRwwCCUCL9cMNM7",
  "key8": "2kFyzkdjdEGNFfXj5dq6jg5WzW34LcdVzP3TgVzQt2MBahgDVzKBFT8CXsQ2N7freakeZc6uG2LPs6jQR5asHA8T",
  "key9": "5xXWju3Lqd9ddc28RVuhgLgcAwT9Q9PNBjNwqLLuJFW9kw5PVCWoggPohKBLCfEKdNh5PQoF6wodg24Y3CaBiKtB",
  "key10": "2GjHNvnTJTT618Joujis9eJN3acW5FHq5UV3UDEypmGbo2QBuCijpLaV7d62aYwLKokAxipFVD2xRMPb4pAcSsZA",
  "key11": "NF3X1E8ifJN91LA75tK5m7rSgUbVHKJFZWyfR4p66ctCxLwuyovY3teeN5b1yY4oBjZp8FqUkRpdoAhrqP4X2Ni",
  "key12": "287WVHihVM3QhJu6d7vshZbdw98KfpRxUegZqoQcydQ7gFw2ZeYLiSUkhMWALCnNGpvg6AtC8TXswc1A74nzq7G2",
  "key13": "2zxjojMJfaxb8BhZNR2TJPD9bEjnqQ7xBFksvHHLf5z7JDNz4hCA5eb7Y6PQEgSNFwBDcpPKLCye2nk6PeHBQFns",
  "key14": "66BdWnse1FSn9Y5RMMyjuiGaxknrvbGhHpFwq3HErB5ZA34hyyu8pU4Xy8us2EzvMvaivy7nauhCq6o9u22W22wk",
  "key15": "5mF5u4LaisSEzJJSDMd2MkK6p9E2egJh6CYQdGqNPGpiLzQJixvPrcwVeV6XUh1dgeadHhikuJYx1XgSFoi3ZCcB",
  "key16": "53xarZkg8L25GjNLgqXqQwWWow8Nr7CqxtC97YmAYHsdjdom8CzrrZ4wcUr6dcDdQu5PgrxocxaGvbUEoJdGyk7r",
  "key17": "ZvYT9dpGc2WGbQCGx7J4vwDfQdVxcY4q8AcZtLxQxjD2SeCgDeTAy5G7Z78zJMbNTJMBVVvzXRCHRcauk2KvYgX",
  "key18": "3Sghc3iRpPMKNhdSrCWf5QGCZ1FJNgjp92bYpeMN3N4qpZv9TjBMuqCDrpuD9yHSR5xhSnSDXsMbTQS9H4hz7k6w",
  "key19": "FtN7EEtxi8QMuiirFEfsUBgaEUPsmecdLVi273SEQcXCtgepQK8ANSVYWZHJxZhJEQcFngHj9UzbvQPq6iFJKwg",
  "key20": "FRbFt7Wz8wV7QmE1fWXYuAfDiZgRt1T2NcQEC2YJ5tC67cLR1YHxAJu19Gc6BiEN6g8bC1kLVVLUWgWWsCExsmr",
  "key21": "34ZiQeDSJv2P4JnqmtbjGwwpw2coCizT7euJfttqeyuvUL8janNq3Df41J1Vc6g7dv6dGpSyntKqLiaojCavTz22",
  "key22": "27SMoS6PFftd5spc77nxuZ8FZdA3kQ9oWaDA4jkeNNhFZKBTtXNQgDWXHd7qjyY7cPNhncWYY3a6pnnejYp9WdpR",
  "key23": "4BD8GaqtJsoKoddkYppXNFhAtxTS8A9E3GHNzky61qLEKtqJ8MPBoa4SCtKzW8qEgiwx5TTaKXvE1bWZd1hRqAwy",
  "key24": "2SwMqYGFF7FRmaJTAtMbDNpwggUEZhJFeVcPUgcWLHH36Y2bkEbfyK74b2SUtd1eg4Q2vBKGdysceEhuNAnMUadG",
  "key25": "5pkP8LQ7Vk4g4LKjJ711rV97YG5UyhkC2bN6uQWcrJcAHNrnjPCGdD6GQ16z1Uccwz9aqHvaiC8AUyeNQg9ZCk7C",
  "key26": "55P3VhsbKJhFSjfmD6fPnWAzf14Ck84a5io4CttL6dHRSoXNerVD38bQVhDBPCM33BcP5W8mgYC6syjVqawjzB2c",
  "key27": "4vvt2B5USi6GrymmJF8Ry6JfTQqi9Lop8XmYVCXRV6gJiDVWQaz451ZMWrAFACgGaM1hYNC2T2jzwLfoa3sJCXzv",
  "key28": "2t7m7QQy6ko8qEpWERj5d3WmDY4bPjj3ArgRAHV922DLDn2x378FSUbcDybHg72cZHejj3LJ4mqNfxtFM4yofF7d",
  "key29": "3w9sbu3QVff1WjA4TsVSqw1fHKHvQQ9w3EurjpfbtQpdDEDk5FwBW5RhCu4d2SMXf6Tw1YMHrYHxLBoU4GHhLhuT",
  "key30": "283V5H3Hm3Uf6oXctW69CeJCjZsKuYbDDWiS5hPtg1xUHcW3eMvZ7XMF23UcwWtACKgL6NQdFwEB3B2kWgC3aXcb",
  "key31": "3BZvwegNzqZhXMBNizMaWLU4aXqkLPgFL4kffEJNXRzv14vfTGnSmSg4ZTFFBN2voB9TerA2uLm7vrAFDqT9d2NH",
  "key32": "6765dgJfyyYeFpFcGcdn3C5YpQp9D3kSg2qTt4FEL46HLNanYwsiVJ53GMPA1NUh79qMVBUr87SRFcAcVssjbcpt"
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

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
    "wVVdoGMuDEQXzaSUc8fxMStt1dRMPJipHGbT8wNkzNpVqt5jyB7tfw4ko83vKrMddcVFC4Kz4zeXQmLUphXmrTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G4qbWqKUVJQMoH4vzj85cidqGeoFjfNyZzqr7amktvogRJ7LnvyeuGXJuzHXaG4TSanWWNMGoegqLkBdXoyc3FC",
  "key1": "61nJUdU16jZxdD8869ehKd5UwSb98YgWuy76nhGGWXARtqJi28mk7WoDZmdpyHq3T9q6C7rQoaB98C9cnGs2xgCe",
  "key2": "39abvocjtgS8eFQYmLLvTePrggcR77rcsfr2WAGCasjF7Xa8yucd3R4Gy9HySdu7ZP5FtVV7WdCTCcHpGK4hPtof",
  "key3": "3yGB4xYMewPtb66hTiF4verYRzUCENaVec7hgemYEh3vFJeijo6E3WRX9d9EMG1XoHEh7Sodie4sm1PL43qES3ji",
  "key4": "2g9Rj9jfS5rHqZcXw61u9psZp4GEvUzioF8m5Y9niDmjV3iMAesxqd2Mq4boYSFqynifhQzKwD44ogmqDLiqkqNc",
  "key5": "5EW2Yi86TWhZ7k2cdXwfAJ2cpAsgjYf4bosiWMka6CBPgLfovVZGmQqafwP3dwm6ojoFgxNT19xhnjxMaCo4AEu7",
  "key6": "5w2G24sW5GuCELpfKsECUG5YjkGRDG9RqeTrYoXfGP5ve4r23MajHWCLXnc5JoG47twGgZWKVtHVhAgE1GLrmA49",
  "key7": "MXsh22LHYQ75KsKAamfGH1ZKhfZjMhLh3F2BqTJtPpXqAvwv66Y94qCRBjVTEYEdkNo1VbLXn8gGCzsrYom3K6t",
  "key8": "4hQ49UBpxqUU37HJqy7yqu8tyBfqSCSVG7HhnujXyJSAG1657vhMHncMrZCoT7WVCgjoExnfo8dtkuGv6f7brpLk",
  "key9": "4Y8w6k7dp1z25cKfxU6NqKx5adKY3nrwkcNwN1zjaDv9iqV76YhqLwQ6af3hKMeSiexbQQhpC1hbAaBye4Nfwbyx",
  "key10": "4TeL14kUe7C9LQ7G3WYSwSU26xjEcGX3JjsVV4QW75cyosiYjNXGaz7kSuJmNMxMkfbBJiWUSnd2kADpWKQ4SYMk",
  "key11": "xRXjd1Kbvvr8RSnMpYzGekPttKP1W3tFi11JaMGreED9EiK3j7n4Hm2E1h6CsdcXuJtxspmgTy8CqWJ7ifufqMR",
  "key12": "5uqWi7SzHJpDuPfjpgcYJYBrnXzAKejLoDu3CZ4ZyfP8eWkKAS3mprQHn6qyYbHFDB4ukpw9TQtaCAVnT9vq19Ci",
  "key13": "5PKd9YX7tEfANKgYjGwvjAAzbfRvt4WbjB4n1q96UaFyUnzT7MjpuVoSrDaRcijh1mbtCqNdAsA83x95NJdf5PaY",
  "key14": "2MuH3HqpqcJ8t9aCRNay1Vp771VyWPy7y6m1rJn264juACbVa6JnbpyHUxogBkZCbznPVnnkGgpuTskLEpxvyiuH",
  "key15": "2FWs1Zfe7tUMhPD6nQtLpCzbS8h6CUJo6BD6reN8fFttH4K3DoGeL5hr2ahSRK29KHKmzi23vovwXUWS9Fuyo3dS",
  "key16": "4Q3qB6Xh4D3m1JCcwKa3JQMUmNPjjWM9Drs14pKCmEX1s3Qmr6T2rakRZgKLDmJfz9sBLzHrvcsXQRYhhgYRvJa3",
  "key17": "2D2UYMuQ8VfWKSxky2C4baoijRHJx3a9MskuwqLwXmrtgBA2dxgZgHbYoGHtGZMLXrbyFqvoimoc7XHHqCK7M6EB",
  "key18": "4d65uVoXFYW6EaRisAs19gmbVDE7Bc51UoYuDD4zNbSoCaPbPi9epQGuEmB7sete1vtpob4iYptHu58tAKsGJeJn",
  "key19": "384qRJLVVw8Xwovxb68BtitiPCCGTTQMo98YGYkXHrNrvq2p75V7WrztyZSuTMUeZ4aAYUp17DP8a22f1aq6h6pw",
  "key20": "4YL8HhtciiYaN73qNR6zPwAe5Nd3VPjXPpE2kEKGeh22LHKafoCZXTw6iTCwjop418NAEkXzrBvTEpLYLdUijJLX",
  "key21": "5GruYGtgeQSkefAjSNPAZ7BHXapAh3i131W5qASwZa3TrX67zJj8dE68zT7iXezBzby4HsvLqxc4AZYz5nj682mQ",
  "key22": "2N51GSzVyYnsvpZRCzcBkDenojPayQSLNJtAzMdHQDJgybhV3TQ4LPGmtTt8PtwM8TnjzDo9YoEyu38dM5kweY5N",
  "key23": "4taoPvGgwQpoWmek9pQJXN5hNQhcncK8GFWT4ETubqSJAxftBHTNSWKKmEFZSJsstCintUdtB9qn7AYwVk2VFfzR",
  "key24": "3XqjZjbUneQbLTCjNrTUAsXyG1mkZRj5sjRYW654xedCBWeBvWRzz14HTytiJfgP4zr8zEMC6hRCnSgSZTD1Bdmp",
  "key25": "3P5mfR92KivFi1uNczFNAaNC6pF9LjtwGtDwXFHr8w172ZheVJDycmcgiU1jNdBVu7Z9uZPK4UjsFtKye9Y69Gaq",
  "key26": "5BZLXGKoJCr6BiVYc9deN9dnbR35SubFvqkyYH6XrzigzpnQSQogWJpZXWVikDiEct8uE2Gt9kSwXmAWt7HJ1vnp",
  "key27": "SUqmKxiWKM774hqkhdpFFABXg8CQyacq6nhcMWgHwUU8oU7hQ1vKc7jXN8R7RFjmTJoEUjPkhRNkrnwLCkhsRE8",
  "key28": "2xvs75wU3FBgEZkWqHUQ2nbQapuVCVnoaHryzapYC9BNWnMLHYyfZfYBjBkkXVfjkVUxrTqLZREivoK6qn7va7x5",
  "key29": "2pkePe6q7nb9q1XSGxeaUsa7YMhP3TwydDxbWPVh8UADvY9RWAMZRuaKKaHy6DYjhEDZoYNjoa42vid5v1TTZHoP",
  "key30": "5r2U1fgqw4QSGPtUakbRYMZcS4iC1orHqTp4R6eqbfeq5eQAk9zraLYEn7UxqTFXNkErtwChP4GXc7PpHPoNbbZR",
  "key31": "4pNomaYJc4Cvxhjho1XuKKN4zg2xSnMSb7rWJQeoFfiqgDpJ74ACB6M4tKyoqBm6wXeYnddFe7jwWcvaSj1jd6Nw",
  "key32": "232ZkHuDTGzp1ZzMQP9h1U8PAf9ZAi6v64WPNrjcBSBn7K4gw2Wo2coDndEzrKKf6ynxmPtbMJfFQroPmQ8B2d5c",
  "key33": "4dx6Up7HAKWdWrkFdpqt2Xancg26agnVddJ2yuDE2aumJVmhac51fdgV9u2vgyKAnk3SdTWGEMtjJRL2ea7wQG8c"
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

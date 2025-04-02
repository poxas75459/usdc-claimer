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
    "9efXgcKHdzot6xh824Eevq6YK2RDVrkjWb3ooskTQuTH8DiiMwgkyVdPjC6VnqP3485PPsSybym5869bC19TSTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2oaeNSBKEkGPEyjK12BummZiodmYcb3iYTXTvREPYAqjj2YFHY6aGUui4tn8bYyzxXnXvAYtcoA5N6k2GY64nM",
  "key1": "5vhSoqyQP3b9MiGhRY1xzMi7W1aV1dNcKbBEaUxs6Wp2WJToH8tDb5rTnSxBsqrZ8RkS3cNp55jGFzkCYwsTVfGf",
  "key2": "5sXHHvHtR5pXPRVHinEh8osTYrtSrRymg5PZ3LL2kVmtvghhEocpySKEE3D8Nc2C2dG2TmrRqVe5SHBcasQ8KJZg",
  "key3": "2BMvAvQxpMJ5pu4EaW1yJcWCnzvR2vDcYDjFVT3FyJL6JnQjV3yMEy2zsGNYkygXXnatq63fA3NYutGwV2uQaL1A",
  "key4": "26K6XSfUsywzmDBM3j4AMJfh9mp8hharmSLWdraPFW99AmB4JSqkzDdJYMwR6aY2kg3xuZeMZ8DBW1A4di9EJF7s",
  "key5": "3uZ65jcAjQ1ZykntcBFZQKnXFUP8xmA2ruZ2ZqNsx7gN8cRhpX6HzDWmBnfGesGkPpE4qi1aLT7PCNV1HWD1v1yH",
  "key6": "4fK54tvZ6V5Gr2guh17fMWxbZRc6hXhuyP7FtGmCdMvujHeYWfRz9cMP2tVPnfdAHgicVR8Roat83Vrf4ChhHEAm",
  "key7": "4KTHkA9Ak69KU2SCBMoXGfYhMtemZtjUch7zt2nsDfBFUhK7uErsS2NCkKy8DLJLKjgKDgzg5KDh8Lg79iQRmwZJ",
  "key8": "3k8ds5BjBYmUonrzvojRxL6UgAqdF4yoJRc9TR5iovvGaATAbRPzQccXkB39FYxjuJ27dKw1kn8J1yk1pZij54HS",
  "key9": "4fAGh2agx4nooEAUBcb4T6tq71M4zUokg9tsbqaMf1nPokfuQReFcpfrvVQd1qA7fSnqPV2micyNhahcoVN6n33L",
  "key10": "qV5EZyS7cGkXCP9yTTw38Py6QeMsGTdYV4mvR5nn6TqkDbTN6U7bLfRjwWcuzDkqbHz2NqjGuTg7p69r2gZnCYo",
  "key11": "29mejepSRJwYvULsQkodL7AAsw8GDighZWQ8Ka9ssiu2nP17PSJzEv4rPuM9hwtH4JkPpdxELe5k4i6gMa1oe5n3",
  "key12": "5QmR2qr3WGATHkcNxNbUB17Ar23wtfw3Bm28ov6FnsxyEzWqFZGtrbdcPkyYRpjcqGZL1DUHQAoKdZhiDPwUZdvN",
  "key13": "5MuTkLq4difoL5QYVTz8CU3LEAQ79ExykDvRukKvStPkcpsbMxFs4CJuGHFXE9wuTKV676EukDfg5Q1a2eUtThhY",
  "key14": "4Sh9D5CzzLsVHNrBuRJMTWJfZKJNaTt51eUM9wa1YNeg4PczWfPJp7286TWtfkkbjmwAmf1xL9zRviG7t9WkLK5b",
  "key15": "4atJme1vhQu7vmK7pvsehHJ8USoZAWZXSTP4SMek6r3HgrSa9GoWL9SCHnLSPo43Rakdb67YkSW6G92zukUYVvEi",
  "key16": "4GtMgCecW3MiTtTgcpMrYBiYJYfiMbs4xdPoZzZFpaXKy6tMz7AUyjWnYN65orZjBWTcu6Ym2wpwGKfj48oFK4ZG",
  "key17": "4ZUpMW8vAqSMN4E7GUeM7bGTsmNGAU3KZ55tHYDAXKCc1SLZgKJ3h9obK9s414DzqdNpSuPhd7UyoLUENaZKrPBZ",
  "key18": "4AHzfwbAMvRgANKKsfDA4btVrqpH32TnkDgGJt2RupWRm1Z84CTBivtB4jHt8uDSPkKuYUVXCWyiGdYq5GX75TkH",
  "key19": "5ihKbu8qCYTW74e6TX63LWDr8uGwjuDhn6dBLL1GAnUejUAQnnb8yAwpgdogUbGKg38azBG5GLkwfsLprFyjnEjc",
  "key20": "3tUouirbdSUVhzKjHtXVDq2G5TYzhJvR6u1YGWtxFzZSTTHZYDa2yetkLUu9MAWAm3DAXNHmr31gmAa3y16eGXLR",
  "key21": "4wZpT2st778VwKVR7FG18NcSmLQFTRmgXYwZ6vHAmpNURMSyEbhXwJ3JkxB1U4PGSVwBPS8xYUzFMRBNqhFSHiRm",
  "key22": "4q1v9yVqswSiEMro5EXgdY2LNWrHxeLY5pbtRaKFgNzcUwiW9agqjRssmYzbavaV827Zu3XiFmHpawncQGdhG7zc",
  "key23": "4jtKxvHGJVemf9N6EJmSaukHwyDQYSFX63imYpxGybuDP42zLYoYbDcF24mnTNTMzJZUQ2oa8r5HN3Fxpnzx86iD",
  "key24": "MEMNbtX5io2LXEkqBqoTR4pc1r6owhWNmdphrvsjXYtT7SSprb7S4SErwbK9qSuPf8naquVQhkBEgEZHtjzYuJm",
  "key25": "4CL3xGMxJNY7ZgnGfL9Gnc926Tjcr1zEEYYoATMevvx5vmK8YLhdfanQBVJLGhqv8DD7kqbUHbkoMEYqA21LnosZ",
  "key26": "Pu6vtJ4Kg6UWNKRWAttUn5XDYk5dw77G2u8VUhmTjGSiiS4Kkds8bAthpigfj5Nk3X6t9SoCds9Q2uChc86pab9",
  "key27": "5r22uqNPbdh4vYYYydhxbMXYS5WiXVjt16oyQD1mq6cmMZL4QLNvGHRVJAZ8nieeBZAzC1dJbKYKXqoa8csTfQAx",
  "key28": "uhAZLXSfmxdMPjV5kVtTSgYWuBt6g3fdGz8dbwq3EsmXmHeZeHnr5zwqw2VXsJxYBPpUfUaCMjfUpRr3ntteLRU",
  "key29": "XrJRhQKSoi61o68NvnRZ2vMhe4oRm1ukXa9mQNqUi8fyKdKsNgd3CFdpk2ucns1LNKBbNDeqWbzcLkoGqUTF1yf",
  "key30": "2CZeNe6Qt8zsPou6hnk5Tp1krxkvadpXWCwmwfXafWpAqnPdfeqX2FCuwSxiSprZPKyXJU1bCHDDXoYejfhLaVMz",
  "key31": "3oZcFhtGBFUtyaYNHN8RiMfXypHSD9ZYEagr8t4uisdrBXLtL6w6wo1Jrsc6WhjCXTipt7pvDjrxGTub7NfudfgM",
  "key32": "CFfn4zEzrAKREUvkzRWaMFqvhLgshgtFuriv7c6Y6orwUePJh9j3wJEgubzYHwQLtodaibd9c4UZ1dFiaLMqpgE",
  "key33": "3mSWzhBfHcvy2DsdHy4w8K5kAdxneFgf3sCUtp6zfvDfd85Vay1J4YUdqosti9NjwL27hxATPCHLDYqbQpE2fTpM",
  "key34": "gEvGXzyBQEpuTXRCXSCnF1VqrkaZyA68RB4B9JNtRyVnKz5ttunwHapJrUGEWTjvGrEdyVVZXuDKUNQrmwYwxBg",
  "key35": "4uq47D5z1FCWxTFnBSc3uQ8pbe2UypYgeydCFytjvAjDWUB2zs4BcrCQp8iYqLFTfkcJiXjqa5gTVLTqkRHn6KiL",
  "key36": "GkNaAkeXUZviTpexwXnctiZmrc3cfoGffkqBs2Wrpuek8u71CZ6SshrJBNtmsviogoKvX25xsqjWzvsywKk1oQV",
  "key37": "2A9bj9ifVSKn9DctknDnmYahcTqxV2DesZUFCt4C33QdVKYfGi1A8K28SFfypDSSDdAwLH7R37pqidESQLFawt4j",
  "key38": "4dJRCRVxFQijvP88UgmE6scMpH36XkBTUNGzNvik11GqFkMLRsHti4RjN2g1mWrTjfL7wKhwLuFg8ZgD4XENasYj"
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

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
    "5KK3CTcKkA26DyMNpCFZ9uZTBHXJphff9LD4W94fY3pJWGNrGSxibH5gEFMfDGW412TsZxy4daVA7X3BLdXT75KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jzdiY4NZcrJxSEJCsH8zTYTUg3YodhbS7nVu2zM2BXNCxFRwLZLnWv9dB9HZ3WvwgA1v9KL7gU2iVWuvwpFUXN",
  "key1": "2sfoBcN877FuYJWt9MDjMhkshZMbysBC9hftRUhMAmwEs32rmwRNCaJ95UzT5z2mymFrbPCyqrKT5R1orWVm9x4x",
  "key2": "YsLaAHzDzEwwqRMVHSnDCSPnQsaDpbySv7zCVmF1E2VBhsRkm111YXDLw3p3od81uwsYgDw5kvqzTuFQd8Uz5Ri",
  "key3": "3n9RK9Z6VRLPsQZTfXKj5edrRDpqk8U76RmcZLe7rtyjXaPT8SdENEppX6LwE6oqwEUzV3Ru9KziH6npLV2hJNeg",
  "key4": "4r5uEsxixSt61tyKEU5sFx4NUBF7rR2WPQd8n9pCMGNgKDBzjAjSM1yxev4tPUwTykqT1DLuRJrT6Evyu4sqSLVk",
  "key5": "8DZ1S58dpBWjrfHexLYygYVjMTYC3CHwNwN732zHZ3Q7fi62wCF7v1xKb2FcBrhHYqKhWhnmx9T2B3xqEScRiUJ",
  "key6": "5HiiB1Zqxe8RRAuiFXiucScEL4gFq6pAjKZ8tYmGzS4Ci5MYs5M8p9TuaZAFKKTDFgqJ5rXixa9TgsgUWxT6rjoY",
  "key7": "2qRXdPFrNKzFQ5Y7kDWz9CXg1miD8eJeLqXtb31zHbtfHE4dtYLoqAe2SZjKUir3FRXAmMToBWQ6jFS5vj7cCHxd",
  "key8": "4ziBBbipCU87dCYqJTcxjvDmi3XKBAaixY3MqkKvhujt3SXpf6qkj3r9WrLduygmfWSJ4R1USqhPKoWxCUden8X2",
  "key9": "2xfVEXWVDkoh96KFRvvXW4mreRsVkxFKqYwUW9A3nsK3SFeGgFSWxdVQu1QbgEo82bZc3yk89shQpETjAae82A6t",
  "key10": "5NbdJKYHprYmPX8T9fuAWA7QzbKLNAgdycseuWjmcEf2SiJAHyQp29ofSygXDQ6bVSQwae5YEngnBZyxsA35ZYtj",
  "key11": "5TxrDSjLuHuoo1QPGwMyA4AVAv567F4cstRpFBxFrt7KQS4o5d9rHUm1MEUdymhdrG81Zp8kcXGJQu2CXwveiCf2",
  "key12": "FeTY13isXXi9KkRauXYBc9ztBvNiK4PF7qeSpxf7Z3GgWjb4nin5jUeZ4bWDpLw1D8twpK6ur6d5ZuZZ4BFiTpa",
  "key13": "4JDn8s58nGGcAtFLWK5yRS1AW3N7sHNKsUaqP5ZbptMroz4hMSxE3MphwAXwTN8DW8oKu9BKxa7PFG8F7ToPEkTe",
  "key14": "4kafTJRaAemQenQwASGTxrJ2yBjKg9qM7Pwfm2dJFfU7aKr5LGLqTz1Ab43KDeBrhxhYz3PFHyfdJ8e9euTWTPTd",
  "key15": "6rNTcr8PKneZ9e1ZwPXhS6Wwii15vmSp2PeF72CrJ9WbXajQbkmyp68p58tZyQVHNKqAq7fKHFfqLYn8ViEoW6d",
  "key16": "a9Q6WzXJ5t9phayE16ewMXkfsoh3sMXqAXdc5wdeqDA4ntebrSp6xxGwTMFJb87TTPrnEiqCon9tZdZhuxxgnQk",
  "key17": "G1At2VwV4eMrECQsF1ufYXPfeuWpX5D5YN8bV6mwFq3p52ZcauDFCEigVe4AhKuQTUR4ZSuc73AH5Thu1iewnZX",
  "key18": "3ZR7Q5pyKgj11wzWS4KUX8qgL7QsL9FobzS8c3YZSaTiHgRQD9ZZuYVPHZTwbBnxfTMMhH8VfRF7gUvScZfD6zqB",
  "key19": "4tDYEcRnnoh9AASg4rXQ7TyN3wyGsagoFDMuPRnDnV5P9sY9MikzYjCLfV567yfDuvx6wFQG5KYLtWeMfpsHAGGi",
  "key20": "4G3Mq5rUNdnGDPYQDi7sAgVHu5e898P9WftbszdbFYkPguWeHq9s38YMcNXvWrxwR8paPmmsM8PgLTRTA7FdRNWo",
  "key21": "64awSGQLJ3Su4rPNGQDGEfjEAdmkMigpRMKcL8pWDVrGdNcg9f3TZxMUiz7SAUSdBcetMLJf23r7D2WYWvTERBJA",
  "key22": "49UeaQvR7HgD3AD9Yzii3UBSabS1Q3y4xiRUyfuWozue93qC193NiqgksJ4wJgGJD9KfQnsXXk8GDgPqqGjNrUr8",
  "key23": "5jJ1UYjLMLWM2CGdhVHXwZwXByobB6U1oXWvsXW1VNRAMMuGBteFc2gx6DBBJimh7LZV7hT6hXy52RLD3cKugfXd",
  "key24": "4ysKsyG5ydMpjYWM6LKY7wUqhFVMDyipyiF26mpWZNv4U51SYrbmbnVVQtMyPUKvsLVSZBS29MUSVNycWXJKFQfV",
  "key25": "41NZwgs3dnFd2PiVw4tjz5coe7fjLmeuzFw8k5Cc46SNH6KmgtDNMT7PqXBuEi62WPspZYe5ui72PE6RariVxNTw",
  "key26": "5cNWFA71nDAiD4VuM1LZU98ekFVKznMjwAko5kFK42WVNdS4Vzos2y5sn18aQrvgCq6wvfDXdhzapekw45c1cjZ3",
  "key27": "5VinUoQ2tERbdSo5b1AZPnoNFDBKtiax6WezgbbMUMjt4XxKDFjqJAazSwiWYhuxrMMQWpJL1k9kQLwvR7yduNh",
  "key28": "3T1JDL4ocTR4mqJbCkg6LdZmMA5Xx6HKhQetK7hwhUos5UPinCpjfTwmL3z4dC8EUFsy8KaxhcLyZUSczi6N7Go6",
  "key29": "4ZURwkBJ7mdBZm8EkmN3j5kaBM67ZWh1XHttNz8jPrSnWYA2eU6yLuz5nt3tLCiuR9FtVA6C87jDydyYiiEw8dkH",
  "key30": "2om7RKZ17Tgg5vYQureUkkP5cBjAiW1Voq4oJmWbU1GmqV2wh94xoNtqSxB2SKLPLoL4L5ByHvPh5ipquN9h13Uv",
  "key31": "s6BA7V5tbfhf83D83D5N4uo496vuAp3eQfgz7rr71uAobjWqZDKMzsqUnPXDRwRWcXfKd69RwQBoXzKf1jg4ben",
  "key32": "2yq47FHz1a7caBqRwhCi5ZkJXzGdhHTK8LN7tfTGjsY4EKrGfNVes5DdYVdKSjRNp7Y6q4ejjSAeo72LP8q5rZHj",
  "key33": "qJwP8soeSEX1LiodfUupRmKPoppSy2ZPVumbE2PW2zqCsKabcDje2TgeobNrRm5EwFcFeWsFm5qJY2HNeKUEyWZ",
  "key34": "2hJT5jKY3AUfyqQyTBYmLJQAqkG3uuhbDUXJt8qr4r544Skou7ywz27ZH6BbNvk1Mw887r3BzJ1E5z7TNdxMpxn5",
  "key35": "3onfDG5z8pMGFKwtGWDBd64eBQVpJ2ZyLj7YRbHnaZmcWpdS7ttUVAUftbBPvJe6BGcdDiWpEFWCUXW697oJ97k1",
  "key36": "3mHv6r8rt9sXF7Q77cyJxCFe34TdTU4jnHTLKbVjnyZJsK18Xiqh1W1MrE8oNqxsUMg7rwtqSxVQnxBv8TD6aFYV",
  "key37": "5AFu8fZgqULCXa7Ez12G5P5yQfNxijXX9KzLQPHfPZqcQjmvtFNNPD1dgsHo8McjWJxs44FpUZPvqYw1ubzrvrZo",
  "key38": "3hjooYSEQg92AwTHJXGUocB3haWtpcJrDXEgCaPpfqS6BM43LUh4PPY5YHhCeTSNqb8UmfPyz6UtqkX4Bwi7BcAM",
  "key39": "zLdp7u29R1Qm3EMsTCBnbzTHz8BTFrwFYvzGi1wTgzsBLUJL1odKiM6qKbhxdq9E4CfkAUi47icUxx5iYRvqHLj",
  "key40": "478iWtfPbvjF9f1hBcToTHFB8bGucyGRgTwfmYukCYpAFXY72wc75KMJCDjc7p2NSGqBiNL2caPmxVuZmf3MuNg6",
  "key41": "5piXAGM8Hdvjuk9NzzYD3Z6JmCNWmUn2jsSinzepQRr7ghvYS4PzQ1BQHW7Z9BJtuZ84dwCLENiVEcM5MS9dowua",
  "key42": "2JCrStu9df2t9GkoCAv6Q8LW37FdEQBzAbfCLYMmTt2GTJA57KNY1VYKHyGMuGNWYVomAvJsaXMHQ9NsSzntoryh",
  "key43": "N6iXMRFA55uj195xss2s9iCpHs7YVhDdjkGabfS26khNJpCiAsBGLwc4Jn9VRyeZT49s5R7dxafbvQAFRLAaoTD",
  "key44": "3a1CbwkMJyEsB1qbmdDnBbtxuTncGRgWfnUTGp6UH3hfbPM55Nug2kwcvjRwJwZ5TSCfT8JrvY3aZGE4e3WEWrm7",
  "key45": "2nar4uJqbrBPQ1zPJV78yATp7DawtB4xMB8nxSeHACX7zbcesL2fqqzVsAzDVf4JHBp6iC2qpozDZugk9cF7i25H",
  "key46": "3M8ALcyMPiYePukbpsLoJNskpB4sWkcuCup7bjmthf6ESWDma2noqQr395m7SkYTqnFqxxXc3Y7BvWsXmQr3WsrW"
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

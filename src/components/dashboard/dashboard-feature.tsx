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
    "4x8ZiRd2vbdrFptX1AkzPeRqvJA9bXYzutfx4qTiuM4z144DqAyDiMpnYKY2791hhWAyHcXcN7M8bM2LzuwvQEQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAe8eeZiGdZNQDMRdwK2VEfPoLW5fg9MAfsNymymfQAbZRaTnyyHN2x7BJTJWcHCVGLmaeDaiemCFVucptF6mzq",
  "key1": "5Ac8W8Wpms53zW2tjZMdXHTjmPEfBm8HYhAmaiKPQpLTymskhgjwJMmfvmpdWNVfQdGRGPQpcQWvbFUuXrviS1Da",
  "key2": "3gUWPMj3mqFFjcdUZ6qRG5GBn4TvQw9QHZm3mBAmPMBU9GAznEiLQ1aM87s6MJENCkFwCpyMtpZz4MNSSS97eCNv",
  "key3": "5bZ4GmNNBjcmoUjKrB1AMK1Lc4EdVRQVSq2XgQ4UyK7SZ5VxyfEGgLdAsreLPwh8rGsaWyPSMVa3HodnUD3V3nxE",
  "key4": "3ZBgZhKGRV9bpfCvDX2vPdNRDaLcktxyG3ehgW9kcuKTMpsymbUzTzJ4zd1k4E6WtrfhZypLJo11NAhBZMSbeusQ",
  "key5": "2ssGYa8gifkiJFjnfNhU7ozDK88P33B3PMvNH7Kjdbp6kLWAHeJn4xzqezP3FZ5QedD8xRaxLjJ85A9DrzHh21y",
  "key6": "Gi8cBWA3AQJrczVGGFkrAKKdTde3TckZx9iL6RB7k1qDg74vEBTM526WV5jimAphPP9Pb9awdySNqwNaWVaZKxT",
  "key7": "2GNuy1n69nUtSZhtRWS8hNsnQuu7EVRsvCYgq1pL9cC9fwiMtowZUXk5YY4skJ4QEFCxMqYaaSP9kcb5YrjvUa7z",
  "key8": "4E88bcfDmXJtGAvvFAxx5nrPUc9svEi8zB3w2575rUtcsgRKBsUNXuEzkbP7E1WLXCRGwJLNf9cdi2WFsdrbHkVZ",
  "key9": "417Pf7DP5DFdEqkcbadnZQLuYqffvyfEYtUs3Bd4jTQ5NgvC2Z8nLqvnADtipwA6wRVfuR4BCkcfaAiXKn96Uhrk",
  "key10": "63qmJoHAoAgneBPELjq2YowRqE9Xz1wCidnHsFWKt1d4zSTAHj9Stb59MpCHbQW8yEDUMhJLppKvV4VQCo5DiTZ",
  "key11": "2JFCESLrnWkNjAiSksQx5BsKdCdB9Wt4oV76WPTBjPGYsry1rTvTrwA59kEyaoNy6E8UnuJyqbSrFiAujUQ72oB6",
  "key12": "634XsNwa7UyhPBWocSEEeps8EF9sYsZQpLhZifGzVRrNuqhsStedcjGJ6QDEjKfcUbREXhihgk5gDgAC5TeJS7Fv",
  "key13": "2puN2MJFuJS8QiQJ5E7eec8CWomNUrGYGdXW6DJ5DTZi7RXBaPHDmDc4AFGpCjMJWRC4iDMcwwPsiYAG1gqqEnjt",
  "key14": "3yjBaScjhh6KJy3nveF8uCZZi3PSAqALrCRK5eeALJZZpCPT2bYxYVupFvhddQTzrtZYGp38bNSgeNxjVgt9zhMV",
  "key15": "5DyEn8ddUB5ahhvdwEDocVRWevPRvcsUvhv8npni55cmvjCyyvWtL7qmm8R1NYUgxfQCkz5pbRWCLMeqEomUGXpB",
  "key16": "62V6cY3xGLstJdz4UUKsRBACQT1TKAzuVJdwRzGfm43R6UB5g9WEawaxUEKESFQBXgExxSF46cRmep3eA9CF3kBM",
  "key17": "355tcdsyz6qVZXvhGHAg6jUneSSHsA7ybzPFMbypSuCxnMQQQnZE1jb23uwfiGjwNZF2q7m7xSxTypmE1RDq3UW",
  "key18": "UC9stJGn2JENuxzkypSuyMAbWQ1E1aoNtFGNBeiKSXvcnN5XVxLaRyQp8SyPwGrnon94sWjd9tFtueeGigW7ZmF",
  "key19": "4Ewz4N7KWAGzW9Ze7AZtZbvrRBcpxgAnii9r4LpVEgi9yMY8wMc775ws6x9F1PBZ2HjcJyZcr42G9pL6WmjcSEGB",
  "key20": "4xkNq6i7r1tz3GfFZXFG3xMTqpLBFztau8D7gUdp8XqP2LXiD6NT4S1hFbogMu5icqyV6WRfzgPAmD3noaGfDnaV",
  "key21": "5HXb2ryb9a7qmyAUHDSzdpiVZsotbL2cdUoJ4Wtt9gpJL1Qctp49UVZGUty4zcYFBnh5c8F7dcqJckpSZEPzLYUc",
  "key22": "4n5kaYoAgfdsCqmUMVYF2v8DhXQGbjv81P6HF7X58H2PBGg2PB4u75sRHm9jGZew9o7XYHiT4aTSYnxTyaJ7xPG5",
  "key23": "uYPjfYu1JhT372LEvtAvRzoVGKV7fAXqUX5KVgWsP39xsHwyCNtxtJ6M8WQQAiGucDp6QgVnvsj69dtyTUC2hnk",
  "key24": "4nTTXfD7ZmQihXnDFjy6Gf9bXw2UQSLFHhpVphyWeX9ZW2sHaKdAABDndhZynbhEUpPnHsfKaovjbgAKCdUxxxuu",
  "key25": "32nB2XuSYF7jVJkksggKpasadBe6eda5BzXG6YDBNJgooZdB213kDaqemzzhBwLu7E8g7nXmirBpSGXS9fMG3zYC",
  "key26": "3qtVJxCWnvx6Md43b2hCDsjoYVeBktQuwJ12hWoMFet4GEjB8XX1dAKiqrnkcnS4H8YuodLY6HASSnf8zeYE3cEq",
  "key27": "5xzb4Yz3DRgBoHFe5vfC94LA7pgBQyAoAdzvdeMrPpvAQZ21oyf3tMU935oyh61UYPP8dGhvfsrtQkp8bQnrZn8E",
  "key28": "4zb3ysAzrVKEJLRjwtuXYh3fdTsPU5NWWJH75qYQMgrfX4rFYi5pWiFpjZAJ8uBuvKrcsSNiL7vUFJfNCrvydfYm",
  "key29": "63tdDV2L31EzE3vLBmXr3Q9AtcogebZ8Efbi7MvN32iSvpi24PaGVEHYQeAdVdFqhoKjntJwgssKbCLWi5f97gkT",
  "key30": "5KroUymnCp9tcSTbWMx3aRc5voikigmwyC8zvs8BpJFAsUGifufdhtm1ENDs3Lomt1Dv1QP8RooH1JHfRPcKHPCJ",
  "key31": "2bSXT44aT8rgqidwSyyMeMEkC1L9KFAaMmR2ntfPKJXg21CtfhSRNg2YXriw9wSkcdWXfPFz8PCCYG36jbbyM5c1"
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

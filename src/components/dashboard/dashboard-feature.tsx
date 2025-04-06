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
    "67EJic7zNpXdFmE6awLU39jA4t6G522uQ3fupWrzU6LVWeivA1fR82YhEq4upUcNcnJAAt7i2j4edR83nQhEJFYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8iwcSvdyp5YC7VKzv8XTJUiX1qTzK8j4hZVzdMDz4WJ1uQYE6vFxFgEULQqLrDqPEjWqhFqp2heCVmiCWSWNXQ",
  "key1": "kA8QhmHPCuk7h4aRYDMtRpDDKv88ff5myhoG3g7psmDe6bafAWQrLYjGwZoa4ZKvmjQxT8BNAYhJpV6eqvbV9Kr",
  "key2": "uKyTjVfTDRvSHrZh3uAkZRZV2BvwZkFfrAZ38EfhRP6dVknaiTYM2Snp3r3UCHLvWDKrHRtvhbgk5R4T6qqa7FP",
  "key3": "AJGLhKrfUCTFiJDUXdEkjhgQZh7uBsFRBh1QczdYW7aXmwZtLS64BoNJnvdKAu7r1WhGkKt3dvNMbmaJN7EvhmC",
  "key4": "rVJvePh5zhe2tqZDV2pCzMpGnqAjRiUSNKbfRDkS8q3zuqCmj9xSaZ2ZfQj4F3CpkRuvX2k9J7wLbDfNJ5zbzas",
  "key5": "2srJYj8bncj6mXysyZ19dehqw8c12XXDkyydmaNmreoHehVCXgsU9vJBkHwpinuPMJm3yqnnHwahR1NFynrfbGDU",
  "key6": "5mkLyUK2u1SbAJaUSjVAx4BovczMgUUygjphU2AJt37squsjC5C2F4uGjXtP8PjmvTiifnux7BXFCesMbDqi2WKg",
  "key7": "5xbsMjLtJAnuwpEqsXMat4zHKrMqkY8XJTrV2ekxjfqbGr7VTbdrEt25ZzWsdTdtoa6m3yzVyQaExp7AUUB3ZLAE",
  "key8": "23ug8Lui7e6iqBs5pJ2BUngibrLNoiT4F4DNwLaLq4XJ5x25YWUySr37KiqC6wpujw8PfqGHZAw61v2CxnAdVQWw",
  "key9": "5DL4yGgt8BamY8zh616yYWvshxGPP1ZYum6ZYPas8bCQ4yaqViD5gnq4e4H3DTgRrTMukLft9mWbyAhxeUudCvDi",
  "key10": "4d9518beWYREvvwqhutiYNhbxT6DtVCXkq5mxdRdAk9kKWXVTzjzAnBQ1fqKz7DriiHLjFx1is5uHFFrMUeFKyv1",
  "key11": "3Tmrqu2MU3Ri9As4ENbexH9zKdL4HyLFLN3gM8tsdwY1tGejiQxAbSFeuUYwaxYwA2tK6omKBbK1MeTKBoVjjaVh",
  "key12": "5q2LwwL7enhV3piXLr9zomopGMDcSwncn8zPTdwVkBRuFKutjNNf7NqLxZP2SFpibJJ2b5B5popf1thHZWwwSnor",
  "key13": "5zHQBhWpfthYbkEUrMTUJH8yxgk7HBDLXvcmEVt4TdcnFYef87KeYcokwbvGptrno5fVXjR3U5gH5DEzBsnKR9Af",
  "key14": "2tc8pefsHHsaJxJES88QozxKBthThJHHvFv7Emp1t2UgnMyAHpETP8CBcDiUhjfNA9ZaN4dwpCMY6ve5wXmjGNSu",
  "key15": "47hKL6koDAHU2mExtiSySz3eQUrnG7CseSwc7k14p6Ne2rkRawSkgNi1apmVbjvsRkfZH8drtEzDb5fSsNo4Gdjj",
  "key16": "QkuRnH6m79fRErUb7zWYqqB1andbbExSRBtakyZXqrRVrW7MNUgFGE7Hpv3MqL1wZiNSKn7c7Qi6ggPQDCUW5XH",
  "key17": "3t4dVbmEvhrxwZgdyXqXWnhXeA2mZtVD1jf9Gvz61W6S2iYJQ37YzJP7inh42SzjV4fSqpgoekYrLA2QKtpKwcw7",
  "key18": "3aoEc8Z29D4uvdddG3CiGSCm9RWnaqoTpC6EkkYAgDXTobt3UUeAwi79MxkcEtTfCx5UDt7EiUCJ2HbE79GrPssN",
  "key19": "QprH3TBBddzPSQ8nGNFMW7VXgdvGN6VeTdKEYnQ8z3SDhqffUMBg8KEgqdbZSDYaSeiQPNhbbLeUAx8xiFzeCLJ",
  "key20": "2aecYqFj2SDzyC6xvFiphQEpGKhN6eYry3e6NkQAykcRJDoeUg13BHWDcAyJgkbQUYDsnUhh2i5nij1B1RxN69dn",
  "key21": "3ntWmW1YReP3Dx2fMswftRBpm4gN19MLYGDAh2WW3ccQHAA5hXosp7yPwboZJSjFW4fdLRw8W9VcZAwfx7uJ3KQK",
  "key22": "2sYgNX1s7AxmfQf46LDf8g4GBDGtgy84r1bSyBDfNWgFRVptrEWhUH3i9axWUdh5nhMoAT5m82uG9gq9Nmcpxa4R",
  "key23": "Sj2FZ94kFAqXGJ87Rnn1nA6Ux1fbmzUzjkUxCneKyGe9pwK1irUFhdQMtKqgmvkPLHcYZZgRavdA23vQLmNz9pC",
  "key24": "gnwV1DJdE6JXCCj6pnwX1cbxmJGh2ZkxMCJQEYVpXEdLWCmFLZgQa6Ddsfqd9XuNWwFCVrMzNDk23UvURdBekhp",
  "key25": "2aoCtj1Cb6WrQmBdYnD9kXm7DReh3j11VEp8beQiaU57WxurRoi5hUaGcWtED2jQEBgsqwbEwuK78AKrGmXGmmKT",
  "key26": "2UxrYsii28dWtiFDPjmpiEAZhPFdpSMMrWQM8MnDRtgeTc5jupP2r8hS3XbR8VXnUTXDqr1HuUEQy4nBSxKvJi3L",
  "key27": "5fRbFsJqMM5VYc5oiRNMAvaZRzgwJECddSiR4Qzp2RQenCELo4VZn3PCHTy8xzqmTU8sUqMAnAeffFBNZNZkMiqY",
  "key28": "3JtryLDDLQvAtrEJd4R4BfkcvZPLm9oHVgsSQz394AUQtzb8ghAXnq5WczWUGR8vPZY9p1cjnQ2kb3QLmbQCeUsM",
  "key29": "27Cwcj3oJR4aHoDG2VYfY1xn7BJYW4xirFNsz6kSJH74NXokHdoPkzGo7A67XJGFPhsZxwne2sPqkbmfvfFNgbX1",
  "key30": "2MnVKyWxKB9RcP4d1P8bQFdWBKjQx9i7v6jL5xZ3GQhuJbJmxG1aeqvT7XNtsGgmJhsMDcVVnsQujso7S2kjCPhB",
  "key31": "4GADAyULGGLNXymHeV6QuJFM2BcVVgvqGQLVWW7Cuq8NDSqfaENBpZvnyufzGYsdiYDH9BS2nvKuikGjn19y65EH",
  "key32": "364TFFj3B2gydmUkmToLDi2bcJ3ssrxtUrHLFTDW7yazfuhzZKGELKcjja8kx82FTZSQDSaSBoQGPyPuz58ENGcY"
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

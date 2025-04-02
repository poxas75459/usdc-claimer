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
    "2fQJcRccHpV6tfUSbwfvQy2yMEPvqAPKK7PUm3HCJL2bVYRjEfqqw6jVyZk7fDqUfLyF6RBSGSursbBxBCBMU7df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHaL9iUEbqkpCKnLY3NLfviQsWc12bxUTsGitDFrUvFy4Big1KUXYAqedSLJ6dm2TvJa3zQHcLJffjJWuLk2TrA",
  "key1": "2QCKCXYjdPc9CC3LbzTs75EV81AXkzjKnVBRmqVHG4JA61R98715LjduGmJee1Bpwkyo3xzjtbiqh9KyXA5J64sz",
  "key2": "djPDxXuzLKZJrPU3hoF3M1FGQe5hH4FRCnK1hRpUEcCWffRS9eqRatKXvw9fgqiXRGhd4NJcQ2txsYBLBdHgHm8",
  "key3": "2rUi8HC9Zwek56rbtVFz2sjsn3ks16Cg4qnXKaueGtQ9yiVhLKd7mW7mL7o5ZtHKKpmDZpkXunpJggdo5bCNGHf2",
  "key4": "5BiTqDPMvoivGqHU6XKQgocHHu7aKDVN5HAsREAJqo6Y5bECk23L5khENHrQjxJCa184D1DqjTtHQsfWPgi2t4dk",
  "key5": "4J8cMNqMarLHnQ8FyNNZnfdfTogMUpamQeJWo5SwzrMhKRQEwVmFTSNpMmpDAFyhBN7HDZkim3KeoLZD7Vw4o9PK",
  "key6": "4st8xG5HZgK86QNPuYdh4M8YjjeFtFyKuxB6bACGuUwPZmeW1pFFsMKQERRqWwgPFLdgNyATzS2rvwrmPQPdFMLn",
  "key7": "2UuXz6joDjxa8n8bnyN1NhW4GyYnr5pm2hJDbnT3ffPSLN8xsdBNK8oDH4ADGd5HWLQs8XhqkDrSDPMaAQHRTAKD",
  "key8": "4WYvddnd1FCCgzj6brzBAwTnEXix468mVDc7Vs9dVVDuQQSS1spK2kvqonxoWdUqw7GUJDiwVuwgn7ppXJWhoUNN",
  "key9": "2CJkoh6Jdv4aj6cpEz5daVfwDabrxFTptkGvnqQJ674JcQ6fUnQLH3ntLtZH3RmnCBhfKZ5MndwK7E2uhFPL2X7A",
  "key10": "47HFYBE3xStoQDJSrSupiDM6B4sFe5qYZDvbsHP3EbeMckVer9Zd1ZkVk5CZkWcVVy2h9PTeQPWYoH4zwv2LMG5T",
  "key11": "5N4EctfuQVbuPm4NLRYRdgrcGSzMesh7UfJVCLRZicNNKdG3KhYbS67RiKrcMg3x2rFRreuQ7erZam7XxiWhwSvT",
  "key12": "41zZ9A1wtGVMimcsb4VzQ7tgTDR2khCBey7x5Gu99JtpkJKKBvNLsEaGV3VR54ZXdsjvniDnCuJuUYFTkHo8wfw6",
  "key13": "2Y7TZSuxghJvjY3AdUupaMuE6xQ6n1kRqGbR25fAhkMWZ1AYCRvfkmFdWJjrcNZrjSahv2snWwBhg3hLKcyHG9fa",
  "key14": "4GMfgmqxUrA3kUUymAneVqemwT8prGiCGaKxcJsyNz1NgmDHDk5YvWRGD5Z1WWJCffn165LYiXaLY69TVRrDe7aD",
  "key15": "2iVhNkPbyVsMwvaqXkB4pYC2d68XGNRSi31Ei7W3zTfQqDs52iNqA19mPSEjVNw4cGn4FdUk1SToix41JEeucoz6",
  "key16": "3fhRvuCnpXrq5QFnLP2CvnKCz1QuuCBCp36bdMbKTNXFLGCnAjAYwE5rZYtvGXquVeirdQv7iUZMW2NakWbsvAk5",
  "key17": "4mduXv8vRbwi5JXVTkJtYrJwdoxvUgTnb42yykrqqMDevEWo4C4iwgcBvujdgrHfbReFZKo8eMNUAhZmm3KuDybX",
  "key18": "3dzpJzahz85CPRdQM4V8ujW4a193aCdeHFuRpVotK2F2k2pv6xUKVnczFx79hF6eSfMFo8iJuqUQjomdH9t1bWCf",
  "key19": "5LAUmBHowv77DqiY9FD4dgCvY6GpkSVUawNzpr8U8okbD847jFPcbz9bHfJxWDABhDnxZnJpde64U5vU3PZXZf5d",
  "key20": "3UmrEFKZBSWjjXqopohWLJ62e8D8mBv97UjYTceaqqkG88vjz8eq25AgYGdsGDCDEADpchgnjYGRJPBYwQYLPUpM",
  "key21": "j7BJU5XURieZdpAhKuBkP9NvVddGCwvuPEQtGtQuGidLZbXkNqNKQDKN2KvT7FZciqMgU4eLWgeUHP2EADvtoDU",
  "key22": "a2HwvrwNVzYYpYFWo1mjHFeGkikQN2DhjSJr3zQSfsUUwDv8Md1KKHMCRuzkXwotsr2FP6g4uV7FkDRpUbsygGg",
  "key23": "3FicCxwJpt2JrAGTCtGjaJjWxaeKnCtMTh8CLzpteuoCVFhK1sa7Mr5nNvL2FGANyd2RejQ1MZQSv7PYLeSBaK2g",
  "key24": "3ugUvibyCg49vrdksnSX83ZhtJsNZjhuCH7cUW6Jg7SNsSG8L4BGuq5ohaH59vfrwEap3FGtFYpQZMvXMMo79Ach",
  "key25": "4EBXvfHkqiWnYvHZsWW93b5s7A4ZrxhvfpBHvYzaE5e7t91DFh81tzDSWU2EESCh4BUJsEkjGNhybzE1ZWieDwRi",
  "key26": "BwLP4wsc6sZMtK21jq2uWiyEyWzwvnPvmqzVgDZ4VbGgw578S2ZTwcFU2VcaCqWwtouHa2UHJKqExTqiqcNzLN4",
  "key27": "3k4EkfK4FzCjwKS5KzJH3MKvUEffZsxTRUt995bNrfqPiVrG3bpgdCyQzKK66ArDTRFvbnnRR7VX9fS6bLa66XVJ",
  "key28": "4irdzGWkE44DMxXB79townWK2KQjqpk1JgTkNXACZmkBKgyT6WpinztXM8d6BkoTK2avkixBaRzjfS1Dyw3UirV5",
  "key29": "2t6NfWTycKhy2StStJS5i7ekXhceB2cu9rtTZn618dLzBbi3uRPNcWHDZ1JyNjt57tK2tBPSiRGGNpdbRtcSrcy4",
  "key30": "62WqnYSJHGHMMk8S168ebMktjEkWbiyjBhVoNsEJNointfBuEzHLH98K74FDg5v7s9Wa1nQhiJto1bUaG2R9B4Lg",
  "key31": "5jupFVHC2xxe17srsCb1Gi4wi3qdXWNH1UG16kuQFH3RKmRxa1mYsrnvXiSnKpqiFmWDvtPft1LWoYtWVCzHEdFy",
  "key32": "5x9s7SzyPbLjSLRjiPfZBL5pZ3b4MXZvna2ofzsegQxbf8FvmTYbvATTxDqfopyvBAtCaKHedcLAw5TWNut1g27y",
  "key33": "P4iuHwmeZ78puom6Afhui8te1tb57wPqE2sN2pozLxqQxE5xaMcB1wWT2XxEdEFkbCjmGoNVbW5HPaUMdF1WyWC",
  "key34": "5ruyf6FBmpsWhs1oNpGYCbMN5Ruz8MdtuxKPkZe3omXz6DWzz2LnLXENoikfTQetqBVWbpsTzK4pHgN5y6dH4zDJ",
  "key35": "2BYJrbANg2CLoCbWNYzVnkhhytq59UpfxQBZk6DZuz85LWE1LoFSqCtgntQucWA3so54oxgPCUpKfQfGoj4Tf7WH",
  "key36": "5ZddmceZrWCNVpJHxkBvtC92xLpeCf2sc3kRSuVfnJqj2fi6tnbXbh7THHaveNFiC7KAgYmRGcy1g8J8ow6vHjEz"
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

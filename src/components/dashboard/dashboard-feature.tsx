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
    "4Y7WAf3SxGQ27Bun6BVvoanepgj6KeZ6eGG82xAVtvwFdCywPo4bKAnPEPH8ukZjxKkEjkJXrLZHGqdNQmXadfsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49syPPHbGfZEoaW6QTzb36FYH9732UUyWPSPq3DbDQgp4SBdukmSWZ4veHy7FAQ66WtW8KXuySjmuvjwxnK3ypuE",
  "key1": "kuKhq639XCDq75UkYuhY3p1Zs3dEdxpdvoenmN2FRedTWFFP5KEJunF5QnqAZbxPT5SbVZ98cyLG5m1NQbHqNBP",
  "key2": "48gKB3ZRgHB4UKC3SC3DhUiy9sSKEvTqsKrbToTUUSdc2K9VdSHtr5qEhUVtqJNZvV4PNqnYVgdmH2W4kHz7jwke",
  "key3": "3iTqTsK2HyBQSn1Eqkb3nvtfwEtsjVcPKvw6gp4bJcmLYKCx9EU3d2iL1AcxdAhMxnfwBpyobS1WVHbne6nFxhSU",
  "key4": "2Bim5BVutMq8onVVNahKNQ3H4ryrScEMchjVWnezCTu3QkXMeczc8XBqA7EuuaoKBSsNsvwDP3Z5QsoBWvdJkkcg",
  "key5": "pJfrVQHANZpWWnqUM4tD5AQsnS6w1cjyKK3hx1gdNffJaYp7DnWFYjDgZhpDGQg34Hauqa896RfGYqd5R1kzCPr",
  "key6": "4VokL4hozB2Mojr6qzxgDku2P4UUFeuXEP8d3gBUvjDtgCCwzYEu3Wc1Z5WFYTNK7y1Ekh9kAprijkAKgmnTMTuH",
  "key7": "qMRywJx3wwxoimDTrvsg9toLmfFA2W5bfXEk4GwM49yy6JcXvDGUf1bxQpk1AmVA4irjAkQrEv3TRPZP4rjqEKU",
  "key8": "3pehVXJb3ToxvfiT9wmdArHTsJUVC45e7AwxKhQJDm8nu5N7ouhA7cjCdvv736Sgh7ygZNSSojYvqqDFCZGK37YF",
  "key9": "24CsD4oXGEo8kwvUWhJLgGr7GSYu2iMoqtxU5NfBjMZNoZJmGCAnD1x5JQdxok44z5eqxNd1FpMxEttgfoRnvwj3",
  "key10": "eoU1XWFMheB2RbLGSLM37j5XToWbVmaRZ7kTTkAr2WQRDxhnA3UMcbY1evaU8bEnHgFmVXB9zxjj5MtMYfPzQ7G",
  "key11": "5bV6Je54ygRJQ41zcQcCb5LYh36cRxHydV8XT2yg62YKHuXYHBdaBqafS9vPAiaqJSEeVd6fsNjQ8Q8LaqgeV5fa",
  "key12": "ev7NCkSrU5ENi1Nut2wxSi5WBuorAhemQKQYs8VSqRQ4Uddc25J6PSUpqeSFyrRU3x1jagiUBASSu9uY84TECSj",
  "key13": "5tSYzv2swKU3rMMG4xCrGtin785t3BqPEkza1cJx1YNAWCm2LUj3gnWM85dXEebA1DdMiwqVh3H91x3r5RfLDn47",
  "key14": "32T3TcGuxjptE1jSSYVyDmJ8sdfus9VKpVh3CdGHyBpXttByaPzAhguvAqUKsPiXQ9EiEM9giyTMhtBNw4jSGuX6",
  "key15": "5k7x38Xw71jC8aCGocCuhNxMoCiwWvKNy9kgT9MZqZcNHySb3V9EToAQ5tFBgNagG67KBCC145URN9zjM1Lk4Eyd",
  "key16": "4rHApg6r7wmksPbdBG7gtMNvhPearLCBNKTCoH2BDDeSpR7s5FZMttN6ppDgWGx5Tv9Fxwrvr6WYbK35rrGtKMPZ",
  "key17": "aD18dfrAH7kzXsPqkMuRrpFy5deG42hmarf2P2XwPJBMB23LtQrxs2bcCySvWoPWEVsmgwgax9K7tSscuwZzM8h",
  "key18": "3jwvqkMdoPMxpHpFJaY69vqb8dUB8NP63SjYHiBkTwKgcYogWTL8aPF8Rz4saeUcWtQywnVosDk1Evd1s22zpen2",
  "key19": "5FcfJzEvzvuM2CMgZqckKiwmmRK56aBi1saqCNYKqckSRBXDxnHyg31TJuJvQwY49otTnZq7boS8ZJskbSm93o6b",
  "key20": "3dDtHUjbJhDf44fJZddMMJK3VyuFCxkbALfrKKoK6untUvMMQbPnntYJzqdQNZ6bLTinMZk4sAhaBVq2EYE3XYuX",
  "key21": "2NzPGhc547KjCJDkjvXNxmpHm7R1CpXCNW8K66ArfJbAPSZ2NB6jwrjSrz8PePnQNzwMtxYmtTWVTi6SyaJGffwh",
  "key22": "5nx5Fh7jBzTWhW7qrGZTN3mgGENStfVAaZTwCZTwgRbvq7Bd5P14xEoa9r72hZJ2qU7MQarqWaudiuKExmfnkr24",
  "key23": "5y8vebA5NJNVGeJibi4TTG3BaEbqMC8XrwABr3rb5hf4Q6vA96upssoxFLD8SCbsQmFEWNdkBwjPZwmQmNq9STZA",
  "key24": "U12fd2ECMXvfLUGShPrgHWfSSSPv3x1qsNiVdzRzeSwChmnBHV7tofzYRejkU9BTyt6rcgJCQFTJTJP6FZtB44x",
  "key25": "F3xe4Q9KPdAGc8ajBjiUK1ETHsiaPfR9fYZTQqUATYdFpz3oW3DQnFmziKviLyD87pWCRUt9EPB1edzxfiPjUYk",
  "key26": "3srDZ81itS14h3SDXViaapiuovWL6X9u4kHyNw4y9biFg1FLupDG6nfg4mfBUg8ggiaVQnTpxQzf6KyUzxi99dZH",
  "key27": "4kCswBjA9GjiMwLmjhmHezBXFZbSoszoVUghqyhBemvd9N3kqfBbFe4uVqgqgm7DFz61En72HstGEWRkXVkwDeud",
  "key28": "2BwVjf3GZsbj3gRUreivG4eqKodU2bds6R66UoeeGKuEA5EN5DWe2tQD5gh4oda8LBCz3PgNABqNTnw8bKf1iizq",
  "key29": "LB3C233CAWZdTSWuGMT2CmxAfdDjqSN9w86Qsymh25Z4t1LzqDowAifr1a2FMw4SPXVe42dnzhoaWtNcufab21V",
  "key30": "21s8PbsiGWvZ6pcBnqQzhAqpGk8F3SuPuqH1qDrJbS8zgt2QkKnnm7UJWKPDmdsTFSDh2Vpc1bUD2oPvbp75hM7S",
  "key31": "5VuhGX1rt6dWfspSMWvDbp3DwTif9WzpYRARUCzkPNpMo9fcEpD2eeafTQyzkm23w8ZsciU1RqFtNbVXKQY5s8KD",
  "key32": "5dr29oTPrumcUWsbaebThwMe8kC2rqAL5Egy55r9acvPpqPsTe1MMDbWnThb28ZVu2UxNCRxoQjyP4eJxDFCYw5G",
  "key33": "3ezAN9RYtCzw7aakArJZWyJeYS9BoBZUKBY7MfG41ycPu4XKDFYrkULB6gjxQ2a1VbjrnDXtpiT7KydDcHXZDFiV",
  "key34": "4YiXNmHq2F1n7JPaowc5pbgEmqT2YUw8T6wjEGARL9sapz2fXSg9mJ6Th3UtJBc6wUCdJGnMevRgny9yZX5REE8T",
  "key35": "3yvp8ycJmmurfeaf914BYoQNPoAbhjSybYTUpx5eRd72R7DV4J9qEvwM9mnHjbvh15mXB66vfn6oHq5HY6aDcoEc",
  "key36": "3cEJAXvTnbpdi6xXiB9htr4WfZjEPUJbt7XWxfEnjMn6yRF1s6xCokL5Lqe4g3c3uv7ozSAMKAaug2QxogY7F44s",
  "key37": "4T2PY5MQQC78w9wAp7VnwdvhhMu1GZE9CQMENbPckUSDx7P77dZMGR966EL3vUWmYRhA4SVnu4WCQcteaShTn1U4",
  "key38": "3WtLYF5REhKNZbUhDcBtQZPWXKnLz9d6ZQ5p4YHW5Eugw5PEqogZM9ARFUpDFowVbRkXTSYT87W2KYTuMsTtxm8E",
  "key39": "xeWjeDfzGew3L78eM24XC1TNmdqg8Jp731sUC8pdvWW2qR1zy2orPmzxA7Pi88vQQpjKsEYS6tomFKMwRFUsrPb",
  "key40": "4FaScnKsKrbzCC2XP1t7EECiq9aztYzz5VgjcBiFEYALQwpneUPVj86dJ8FcPzYdK9oKJYXfBhv199M2EVzq1NMT",
  "key41": "mhoXh1Hcey3qywDb97knt36LgfVpZk7gFvWWNapMqgsG2CZmcCgSAyFjcYkL35pcCzvxau9QWGW1jjw3LBPJ7cp",
  "key42": "4hLoSHz3yd2SvPBv2SUxDHzU5cwSWM4Zg6DbPEPMJxHcaRppzMv8XpaPhUp71W8NaR9LM2hYjBPo6PnEVm5oekgz"
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

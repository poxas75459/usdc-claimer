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
    "5r4Nhs8evjGXqEstNbwKvGNrfNfYdLCzN2UujowjXgRhiYE1kZpw4idiPpsEifuSDhXsaWWaYgV6XcJt22k46peg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWN5hLRUoXcApRBJsKm2ae47U4Q2acJCfMdYCAuM5Mywp4WqAAApc8bGMhfbUC98ZfMW3jYfQFHWgmTEMtKkWyB",
  "key1": "4PVvaL5pw9S9GjdqunTUibseDsKr1QDMzRkuuVjUQsmPNa2Nuk4FmzQLdRhas6FQMV1T2jhhtpb37q716zZtwGsE",
  "key2": "5XAM2dDPwdetvc2pHQm7Z5kZdM3iYdAYhPL3HrQEJ6Yqq1JSCc7hgnTyJbamLPQjJVqLAwoUppub3bu5F9ePbefv",
  "key3": "fmzoqNWtrF4e3Bpn6g9LDBiZqSPq3RMA9RW4dEPwNTmsusaeQbmXFbdXEXvsEsuVqRGVAxHfi3hzkZvpb3DG9c5",
  "key4": "41JsLHWHrx96qY1AxrB1PySCo1vjdDESmXYQwYDzJwr3eABhL7oQWrH4Lnz3AU9BpW4K9kWLFfrpTPf3WQa46FCE",
  "key5": "gH1EH2PkVTvwMHZYBHHqfJFCsD6h2saJ1BjrrWPgL6qJsv4JT5rxA8GVB571ULPFMk6xV4ur8AzKRpcnJgfKf8S",
  "key6": "2eWrhGc1nMYzX5EYsn8NoZVjGRSWLmyyaoMWvEw7SvDNhZNDnCFKiwaseUjyyHmRx2MZFgzBgxdAYDn4BApM5szg",
  "key7": "3YNH8iqtCbZ7SjL4okVqUvtHQwNuGY7Eds46mwfcEaBzAsAqEMkjShUs3Wqyv1ECA3Dr5uKapzmrGv3sJEpVrLkd",
  "key8": "4CB9M9n2nuWm2K3xtxSMJv57yoc66fUVX9hfoct3jnKJC9xEDvrEBX2aDJBrGe4Z39YC6LR7izkYYGFr9JwgdRKh",
  "key9": "5TG2AXmForzJGU4QAbHh8rZRZ7iSJLBo6U7V21Kj713q24nqczC67zUWfVnUjQB4xa52zXANbRK5DFkwSucYt6Zi",
  "key10": "5b5k9UnyoQNNdyreQrJrjR7MiY7RyZk9jeK7MHtpLib8hwpJ4CnQPrD6W5SLnABtbXYXscG4mn3LzN2eJnyQN6cu",
  "key11": "5XaJhzFSJ948w1nAoE9wZU3YWKVjH8oriuQZCm9SpYuuqoAwx7w3aUB9zQARh7umzR9JCVVpnwKZpqpa51nHt6aF",
  "key12": "aJFtCLuaqJUNPxSrXD1zHH8aVHfuE7P82fDbxSwPGCnnBF13QqQf7ha3kztpoFtR4bNmdJF6woLNTetA446Uezb",
  "key13": "5tZKrj9yjjssYGVXKgsKJiJDr6qQzi1VbjzynXGAj4gqotY8uS1iYFSFq4yvrXzWj2HEtYNxdJACzNt7snu5YhNe",
  "key14": "4D3ccB3QJxy73HPbKemdCqKHpVr4znfMoYHy3bEc76afCuUqew6opMx62Xq43kR3jM9zKxanjyVsKpNYK6kvNVTy",
  "key15": "3TNCTRzydCqZAoMNppBWKH1tgqJXzjeqYkGFErg2zEDbZcv58d4e5otaQiaTtWYPpHudbSZqw6VBnrb2cuL7D3Fk",
  "key16": "3268ZPQxhBV8BruzUbmzncLVUCrCycub6E9cdfDsqQgqc9dX3yiTuoyBxZrcpVxX8gex7jBMpfTFfb96ThQxHvz5",
  "key17": "2qAUQZJCgYMqShgMdX6kh6nYuGcfNwsSXccX9767XZw98TWbxb3be5Ehmp7bxq15UjMZk8pDLPLtnLXjWb2rqiGC",
  "key18": "Gh4becPuMcQSKXqc2Y733uFSGx8MwiLsASwS1U55QmPTgJVQhEHLTqZcMHDtmXMgwAhfXfpMyXEUuw68TbWJC1B",
  "key19": "3di1YzDFJrJrgECumStHGXeAy3VQs19DEECyWp4pqLhroQ4bZViDrj3QnTboji7MgnwuXNphzhLQ7gXg6xWzxBiY",
  "key20": "5WuZ4GAFY1MVzhDa2uWED82ateZGLnJj1HsFZMAoT4DYj6eXmro6hVHq5TjnYH5R1paqV6sW3TAfUk8XuP2ys16J",
  "key21": "3FVUe98Er5yuQMkCbXzAjg43imNyimUXxsTy3aZHciuYwB9y87Kgt4zSdan7UsqWBGbDTouXqHAEFvHgV1JXgiqA",
  "key22": "2aWGYrhGiH6dVf3hzZQnFsp6Jkbhw4JPKQd16zszuoZ4v2EiRjfriAJTuEuGS3YGHuRt1xHSH8kyKKppnG3HHo68",
  "key23": "2boX5Qq4yixj7AZNk2nx9VhzouvpCYTD9sCB6dm8foQ6G7op3UTYoVhK1bkjkHJVoXgCNqBX8K8UzYpkhQ1rnK4F",
  "key24": "5cPKWtnAfydSuwxPkXFksAjmzgUrii7xmZiyNMaoCjJ6PRHwm45GFiNGBPpwNiiP6XDAgXdEhdCCKs7VotudksKU",
  "key25": "3FSMFm12vbFS59iaMKR8JerGeHocKb3NXxPqQdBh8bonYtvDFv31qmKugJUxqxL2ifJRueexSoB3rbMTARd8GPiu",
  "key26": "48736dZbaCoAGrdjBLbtxZTtxEMYuUA5tU9YN2oca2hHJLWG4YGJSAjRqXrv3wEzmnC5uPcCcZPYz5MmpXKcWAuw",
  "key27": "4ejRVmtSVKyL1zVu11ssBc7BQDnTPJ8cEh3rpZMCEbuHGSAPgFqtY1gJE8d8im7pYXE2xEmGRQc7TaVYe6q8Wy3i",
  "key28": "35cfPXYu9y1Tb3iq7Zq8YvHc52KYHXAheBXdrbJZXy5Gjmakj4w52GGooTe5yRtQuxED5mdoqaGeCzSMtjB1audz",
  "key29": "4UkSUTemwnmzSBhV1BxAJn1kkrgvtj7P8n9rQd1656Ap5iSmyM8aSxqNy7CwaUFkpFxc5t9LYFmHLbFGW6fPJ892",
  "key30": "5s2i66wyGyy8PWcy6UUw3zFP4xuzDZEuXvq9EZ9ibsbS3QXLHxkzAM1kWNGPKRQ4XKWyfBmxyGxwFNLwAeVdq6DX",
  "key31": "5cjf1dJphNiCzRWD5h4TTLPmkyy75xSQnQeTuU5BNT3rVo9y12AHQVJeEmoQ3jYw2UBS5gM2APed4sxTo8hLDsqd",
  "key32": "5MXjsMs6VhKhfJdSmoT3ewsEhR54YXX7xhmFY74zkQwH4kHSEKnH6jUccPsBjGNCznDNiU6a79Hmq6rHpiMwX7Ub",
  "key33": "4kGF3EkQgGMANzzKEg8TeVm1pJLCJUYiKoinoxUPzAtd2i7SyaNW63VauSF2yBs5qompebGXYbKd8y7VtWSUK5K",
  "key34": "3at9gShETzacVQ7sXpNjsmSSHYJqgEiXLGsgEkzmaKnP7zyzmqZA3ypV4S757sFRFYofQPRVtrsUs4DzWzQP3MmW",
  "key35": "6MiHrZRm1atgJyCjx7iYJKa2iZd9yi5s9GZkyUUVZQD9B3GzAhuBLkHypHTvfz6XTfCFGaFhAeEDjhx2bMP8rv5",
  "key36": "Fk5TeGcKgmen32qoJuEtmxkz1Wgga4NvW2TGQyzbjjVv51me6CTX1Ab5mHaHkDiRjxSRAehBGQERf1StPmHz81i",
  "key37": "5G1zJLMNbVyAAP9zmMJUzGdiqekNXSw7oHE6ezC9Aggq5mJAQ9w5uGV3PjfHXG9vH9uRcgoCtmpiJnEMAQgBBVPg",
  "key38": "eaG7YYChRNvvS3a2HdWmrfGQj5Z3jYexmivNew6NWQCGmaRwyKsJ7vBCEoRWiuND8Gdmytutn2BpT53LbYocwne",
  "key39": "3RuuPPQ1MWgM11SXq7j6PmHBDcPSAW9tPjtGUCXWevJiyNF8hjcE97FdBfLm6oQGD7XH2usotm6bedYi1sZV8qrc",
  "key40": "5retxrkctCPbdgcdZk6yE6x4JYrLsLKxEX8RDKYAVfio7nNdfhJPfCQnvGPcYkrKhgBbBAwGzw7rZYmpmFvTjCTi",
  "key41": "sUfNPMQcv9hHCRVb7ggpJJMvwQxvZeKsRwKUaqw9HYHKqFJfL7DPK2eNMsKJNWA6pPEd3yuSAdvqSKyBoJm8yic",
  "key42": "54XPDXYxUrdrzNrqN7NKLc8NCiJhLkBFcS6avH4BNqBEhS3vMSnQX7pRzLdhuG9G1XbCDyB6bMRXRWPx6ZcShn1m",
  "key43": "59cArZeUmbv29qEg4Me71ea1hJbUA2SAi9JVo4pLQtqxWY3qpD5WGymyrq6XC7tMXroE2CQSpEvEEBfzhBW38fKv",
  "key44": "4syKz8L2MjPmyWcPA2NrSPqHJoRe9axKv7Kj73sFsNix5oZsjH9673GdYcATCmBbchqkXFVKdNTwFYmkxvgFfVZS"
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

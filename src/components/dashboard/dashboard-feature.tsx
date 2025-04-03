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
    "JUVmKZSbidCiQM1mGFpRER69YztKtXLa2Z7Wxg3NrsxTd264k3KhXXrNhxZYAEMkxwPBd3St7egLum9nuy5MPgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmgRj5gHtCnjmLGzD4ZB1PXKLkDbXbXC5dQFFxLKNJ4HPMNWkeqtuWUqSKNSktf9UUqD7Lws3q14peTBtUJYXZ2",
  "key1": "2NmVeQ7MTBVQPnG5xdDx7PjkBUt8vV9Fref4RszQrPjiSZZw9roscWpgZ141xWX29Y8Yy6Mq43e5Qu2bLz4x88EB",
  "key2": "52omtqW88m3hEXDRnsg9wNDmeVV4CoqNCpGmLmk3joKhqs9AzmHRd1c5SNwVLWmuKA74sgPzttGnpscmbLBmAxv1",
  "key3": "2oT7uhNkM85q9rvw95DrXkVHnogqLZjUq4Nz19TcUibuMJ6ofBkB4WByW9XD7kTFTSniCQmqiBG7bep5UQB3JHpk",
  "key4": "owcb7b1zC9EsuTwFh9oKhJDbQJ1Kkh7zDikegTnCNURpcVe9pXRQ4JcYvMN6UV8qSqKPLM2SS2nFBGqpzDaEU5p",
  "key5": "39ibjNwXybLMweX5eseNxSgrgvtT8LJJXxAafm7ijDCwR6B3P453aE9BVaw9HhS8uyZZzxxzo8s75Pmgax2EYdyn",
  "key6": "2JcpSaYQAq7tkoMTZwj77pJ8sxY9yXtHA4s7EowKBY8WrwVyFVpuohqFbZxo1LWaXoxCmzQf6XdM6UfvZnYn7KeF",
  "key7": "32ZBZnVTGzRSQahbxZLAenCYAg1TC7H4b898poU7wUtEfPQzEekhDSXHkX17rR7rQw8Qa8hrKbJiAaajBmsjFr83",
  "key8": "37yzYeiAdhUfagAR2ycLUR7NHbRkKRCEtKCDcwjh41MiuYtz5if1JnKHt34jqnHqBMtzDrnNj7mmJvf3ikDXAHUu",
  "key9": "38n5eRvGVdcgeXhJQYc1iaB4TyZQJwdoPZC3AR19jLNRo9wFDZgoeUgakyz4PmYB7rENd86wUKab1DdnxgPzkXBn",
  "key10": "DMCMDuvpacZH6o4jMMo9n8Yhh9y5KviZ4WtDpCAzGTWsaPz5TyoSyTJm54HmLiBkTbXDpxXQzJLs3gAjAgCJJeW",
  "key11": "23wmuUVJcXfc64ZhVBBYyRL78RibbLoeApe41Fz2NqDGRGeuafPDBx7CwiBWuoJcWVo6Qb76KuNz2kTPaVnBdtyG",
  "key12": "5ABfTWeZd8okESptgAYiSfZptW9wHHVqv1g1WvwpQqwrfYJ2mRHLggpZe3JhCiCoimEUca2qiyMhUg17ZVmaYRcg",
  "key13": "ic9xYQ1Swvhqvn8RnJsf8gX7p5nPPF4qm4v2aj8PHpReD3aWzcUv4HxaH1HcDE5Yq3b4h6j3uy9yrvESe9d9WHr",
  "key14": "4J4wAcFKuaMiFdNve8LSvimTaH4EtNirUh6sjSPcC27noeYxV4RVrMFpAAyr7UfjE2THgEYC62GJEJJuCL4cNP6n",
  "key15": "5BQK2AP6WeHibmMfykCdGSzdKQETw9yJZ2kDvNtV9pAWAaBdqJDmp25tgCvKkMaa4cEpqLxTaRuhfH3ssAXdp784",
  "key16": "YkFDKtLQG8ftN3VRFdb4Q1mYvSJoR3eJ7uVo5zrpYh3P5RMeahWyH9S25xpoJKzN7otwGppBiHd71yVBrY4FdC1",
  "key17": "Aj25hkw8HZ1UAWNEFG5VijRtLgwohjES9NARxN1tmV2HFoN9eJxToLqRbZ3Ca93krAqsr7gRdKT7hMwp587KrXU",
  "key18": "4NxwA3hAHsx8Vyo6Jqw2bQ6ZH8n2AoFMeNrhnGE3wNMTeYBDK4vaxtdsXoVEgXQubHVYhNK4NjXhmUUTwhyJh1Z8",
  "key19": "3AmaXjpnMWkw7d61CTZvUVbzG5NeZTwyu6nu9FUFY4EUn6TGx6i9YyF8QTCD97sQ1zhHQTYR9pyGdCXxoL8U6fyB",
  "key20": "5LDLipJ4mJrJmEbrrHxnKu484cT3CLcArEpxkzTiW4ZcJLRtkW3L98sSLNs3nB41xmFcvjodM7q58N7iJvYuNDtm",
  "key21": "3bu9bXsRay73xEKbjtHFiHmNSzkzP5qrtQgGKdSkRZohzqoQ8BEWMZkDB15ysh4UMo8Us5ENEMYhozMCWWQ5Fjdq",
  "key22": "qLJ6n4Mv6H9Adyzo8idmQJQQCLp4XYLvoJMQpDhgnU8L2uyCUwNkviUkst9JRn78sg6cdLZqevZHtATvEHxsroL",
  "key23": "5Yk2MXuFJT3gbyY2D23jCjmpXVWXQRXRusVxANrcZEdtavKAPDKxrzr2iVeeDv1Y3Tz1Xr8amTLj732L99GqGvox",
  "key24": "3wbA66RCuYGFzkce4oxR6kqbo2WfYonVCEpBWbWyzuoEGq5uGxwQBjWrNPXQhe7W5gdmmvLXtoYsQhxNYzdj2HJt",
  "key25": "UiNwcQZRDZgtKyjLUu2b3qqHTFnuyGTgQnrGpcgZfMz6xVQWSU8y8vhExAKqAc8UtkrMTkpZ3avZYJZ6ANJH1Hb",
  "key26": "bmebCvWY3AVpmD9nWHC9os8GSVgaxifmN834eKt99sY5zEJixVUU3cHPRqm27ATfUgvxvYmmvg8mo78H3ZR2xAH",
  "key27": "5tCBBtqX8uFKQcPW1MuD3KPasxhzQbph6HV6j6P92ymgmuoFX93XLMeB2cnzqX1hmYQbd144nV3bPuw72wqMEeMH",
  "key28": "3gGi6f7hDn67TZnLGowXjXhNWLyTrEgvqB3FwdC4AcKzL7UFgLoCvymPdUsbRcY1cUQbRoeP5yLjAiMpz4Bdo4Pm",
  "key29": "3GiqTCfBbEivwj5HNyxBNfVXH2aSNjnfQsumAL2d8UXzmCrj6uY7r8aSjEKkTc8eMyaEVAPAtLs42DoMkXqT4BKe",
  "key30": "3f81umvhu165K8pM6as1TGcgPBYAzkQJsnfG3j9KE52zJFuv5EHGq2ZdrBzbASyecEKdHy4rpJg6fmXQcMHY7agH",
  "key31": "3kEKKioLVhQ4n3EpRGHhuBH2PBnwKWBoVCpZFpxDEFyGN6VvwVs8RsegVavgredKvKknNeZXtQaE4xybsz5CqciH",
  "key32": "5FcaFRSCuchXs16bZRpq5qRNRx3hvFEmvr5mWTk25eCGrptyiTRxTFWwhYMd1uj8BEgWN5ZrcfY5Gqj8rJUrz2VV",
  "key33": "4zXhMHka1FoivPaTTb26nKTkdrSFhNG7Jt3ZCtVJZ15pu6kJ7ByRxT5WPquMj8CXQEiQz7oNvmHmrBKLuHEBJmZs",
  "key34": "5dSh8fg1zGtpKLRn4SJGKuAWv7GxS9QvjQGHuQmzkbA8v3VzjPS1iauBys9T82ZeDAPrBgvmgFy91jVnVbCc4ffc",
  "key35": "5r4W8Hwipd3ipHcuTmrZfeyWtMrBgrJjDu1DWVc5rGCQREmdBLKEJTsU9oZs4DH8DzsSQ85vti6CZdm9SP4YbHRN",
  "key36": "33o31ZB49awP9JT1gDYbqzUCZkoDX8zNbbwBjJTAiStdS2Fh3ojjdw62Fb1P2brAXrcQMcVkZ5UH5RiyYqL7YSZG",
  "key37": "aU5KK8PPwocpJq11T5cJmeNYjHxCietbgSQzMpzKxMWtuQEHUkcFGdRTvZ8DmA8SNLwwpWPniDW4vSGbqBZZUY7",
  "key38": "2gqRJwH87vYtfS2Qd8RbftQW9pmtpNMw3VxoM2rm8mAoXWk3F59dRTk8rxG6rpkNECxDh9gyDNJSNV4pDyZwYae1",
  "key39": "2mXYM5zDZ2eDnpD22ebgDJa6GApb8oZZ5xxezHKZF1LLyigS9dGnNgWqxj7oH5LNCTGd9hUYYo2UoPoRfGdZjiyd",
  "key40": "2sV5TDKB8ZDeuvsTneKptsNkzPhEU7Yr5BEixbd6Z5i7FZHhn5ipwiCpuXAu5xA2YEhyqzgcy19u2usvSBnEH5Ua",
  "key41": "5UsuRWbUSYiJWBVLZH2KQwFSrxMHDdaLhZ5FpbTywH3X61CXmvmXg38qvZxK73xQJccNwtwJkXtdrkx2S42quXhM",
  "key42": "huDsDR38y4MUs3B85WhoSguPbNB3LTL6eQfRCHEqtnKTWnBK8mxttWCZ7oG5dPtjAM3fyqcV8w5VUZAzgdppncX",
  "key43": "D4mpZmxXFBPgXKKpPD46a4CnrzGsdpccJHNrUYC8p8msxHQsm5DDB9DFb71exTH72bfGPurjA4krsAKNrwSArXd",
  "key44": "54AEfcXh9DK8mFZ68utg7oNt4MoGhLwJz8aj3SVTYkXENQLXouLSHakST2rZXz61QjKJxPvDKDHJ5vfQ4rYg5uB5",
  "key45": "2CFJX4Ht7Bx3xCkrN6LotqTzjtzWMZuzyW6qUXXGSga8aPKmvamB2Aousxhte1gs6V7zveu8p2NkHFhCm8A971PB",
  "key46": "4xeq6qBsLVvmGkpdBxCcfCQoW7JCWPiJQFv3PcY465Xiq6XavPhSZ1QDC7uo5ptVKA5DKFVrbpM7vK9BBhe9vfrn",
  "key47": "2Zpn6Km3qBcBoVU9QZhNCKeV4biAYTrB2fXp9MqRNbYc9Jhin7ETJFDe7MQTfntuRJySATrVAvKfuiPS9jEiVXp5"
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

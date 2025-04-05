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
    "3xs6LdSzZdEuX8CKqQbDJkCeUmsj5djuA8oFM2r5i2hKcfK4jNCX6zPRRNYqeDc1xd1cEnxRTPAsvNRbvc28HeQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQvMMLTSEa4H2pwPNYXeU5oFBwtMA6uXHisEcctktTzNFX4x37g5vJsqZGrPCyuSpJ6HPfBiYhM9uxfPV9G6CcD",
  "key1": "25VAAE3QrSVkGn8kT4nMjGTvzUYFqmMTdQh3VDCbF7kniwUkA7WSus39iKYoENwKx15BZfCPHWiedp1jMEwEcy5h",
  "key2": "4uFo8t5AGPNYhm46HH2c6SqpgNbzQMrGGZ35NZS3XHTSDgBjZHb9sneEsMfAg8AxT1MeuSh7ebkQrjXyDa9xTE6J",
  "key3": "2QYYfMETkfAvSJPtJ4upfLSRMZfadXZFpYePbx2oqEJYbK4VnkqwbSzkvvYoQezqSHwtJ15H8eHjvWoG6qAbSHic",
  "key4": "5qY1YLwtDJ2rJJZrRC7rNqaPmMEDNGthThwAKv7LV6ZFAsdp4efAAxuomAnV6uStGp66sTn6NvoRBDAu8QkXp352",
  "key5": "2kej4VftSJg2njo5tRnQtzjWThyNVy1VaGYhG7SB9MHpfmzYSjNxDmMTxHmN3mAiXgiqT6sVhUg8mZPYinMdKRhF",
  "key6": "4SYFdEizizprgi7Qv1vhGxacRyTXMLKFjp4Nh8gsTDrQr4MtUeYq9KjxcCTnJ6RPby6Yxq61QC62pyMPyFEmEV4f",
  "key7": "5oJUYhrEPFnbp6xzSNVY72EsovyeKxg96Zvimd3yQBnkeVguF8Kh3Ly2a4Q19o5YtCosZpK29TQkzpsyQ2r9YNNc",
  "key8": "2K2ZTtXPJKpGJPaHnEEQRbc5g5CsYTtnTtbqgn2UgMLA19UdHvYbQWHMhUG551cBB2ZWbFGUNkXwwvU4VYTsceAD",
  "key9": "WjRYo7AUALZiNL6d36KaQThg5bEvcL4wMm5ykFoYtLkG6bri4pPCWhpY75s9PYdtxha96DAA4hmcbuxnxoBjbUw",
  "key10": "4MC7tw2NiGyEqSwa35QCd3z7ipKqseoVuAa7UpGNSTCBJ7o2oaeXE629unHHLCpiQ9f5oCHreCPQD4gUmAWc9fNK",
  "key11": "4vThRJ9AntMoXuk6G1bMVGPRM94iGbY4NM3RU2GzKUGt4RQ5uMWdM29yLoqzep9FgBALeYDF8oDsAx2AtouBT5GB",
  "key12": "3QkemZPQdpgz96PVEFnmevQ4UqgTUbyt3FeZ1c7mCZe8Y4mMoek7rUniNaBjGEaxE5vb8Bg6h7QqutJHALewXXJZ",
  "key13": "5JYnxR9ewGuG8QW2TLLASdgDvtAth3qM2umSii87BwFbWmtFtSgNEHGfU2d3WZs4UpXHemQG46dvnEewiM5hDqMK",
  "key14": "3K4P8J7VdF5ey6G6cW2GNocyNUHSGhNUkRN8bye2da6iBMFrcXen98EcmLv1jTuDVFBTkFwjfCVbE7GPK8UAyfSb",
  "key15": "53J3y6y5cqm9nFMf3MGoaUhinWKPGYVzn7osSLXo5co8hQo5oxYARSXB4DBELfWZTpLUifwhyHGMJtJaZFUpXboQ",
  "key16": "3rb2uUCmfG9nhaGRE9pjrokdK1VjhQzqwrCoVScMFzsn2K7V6dVzgrg41hanN3QBz5gKJARkojLuLa83Bx3uAreg",
  "key17": "mpkTSedFX8Ku5xD3QBXshDAZnXwtu3ga9up9CJg99BMdJXPb7avWtQrUnpXc5UmJ1KP28AKmhpC9Hn1zyXZAHoK",
  "key18": "xnVMipyYF7yoxnnxgM1fw15UnsiuahNJCXkuYqkj4VtYMEfbK1itiTGLnSwwx1ANkcYgxNEJLiGUNcV9pmnJfa9",
  "key19": "3JGK7PCGQeVZkK26vp98afGtVg7yDL8qo5BTBGatCmDVvHwRyPQkfuChbkpdDRETez41WVR3QXQYpraLaQ3qTnTr",
  "key20": "5rtg2CySr6Py5JaK5wtZpTbJruHK1VkPvKXwGaXdMN5Np5koW3xKkxDEqRYGUaPBXoURPo3i5KXJM62gWRJ4FZ6p",
  "key21": "Qogb3KkrYzmAMgY3ypPrec5mdjBxyKcXFhJYqRqeZ4QCkobMa1BbDYWmV8xS34g79FFTVPCJW3KbeJ8CDv8p6Gv",
  "key22": "3tWETtWXErgFV9mKSLHa2zBMfvNd2Q8PAAMWBoYPwrkBC8fQLxCPoS4u7BUjETVzYTEPmxWu3XoHv1yjHhRT2VTr",
  "key23": "3Tv4ZZMcTBwaFhLxjoRuNcpbwmPS2xirAEDEupMCxw6ZECf1ERmVWHNnH6LFwzJjGTLKSg2HcpFjvsnGNGhmzxLk",
  "key24": "5vDA6saXh3etgRuvCnYGpivCRqpw8rZTjBamJn3Dkin8QEZQCFP9nYjwn69uZBPDZ34rF9v19aG9hf6oBAVY4K9R",
  "key25": "5pHxFn6v1yqMf2YP3B3xmJziUCvgsm9P8ByABLERRcbjaK1kASCbD5SNXkBbYCWiMdrvyg7ePJm73iCaWMmYrvdz",
  "key26": "3zd9k63tgYsTNnsL7xJ7vWCD97JVLgG3DWFoCLcfPxLsyu1pWvkB1Ask5jx8JXqhrfGmESRwBqjuVYDeB5kX91pR",
  "key27": "5Vnqd7JeP9x3SBUE2aHi8MSNmuUCoXHwDMJPDjJMvqWSLFt589eAYHvxGmJaTFUTrqZ7XPRBTGNCtSou5M6iJZF5",
  "key28": "PsPNN6DAvQKmxpU69dbaNF8GQYwFLyE71o7TStWMCGxfGR7BZxdHJp1UXFszdTgEZ3ZQsGYGk1uxpBvSxaTFxy8",
  "key29": "42ZVZxpfSenBJG8mgidJQUNCAEZh92U4M4U6cy9UBxYi5uGmmtRMGEgyACDyCsrqj5R9FnxnpC21oBVgW1P6ruCm",
  "key30": "5oZTcFebQmsYN6PjqhaAYJwGvLaYe9fXKw3r3mswMSKZfX2yVFqJyWtRgqmLxqY5qzyfhSA29gWgRGmmVQFU1R7L",
  "key31": "3B2sPjWW32dNRqq437ejgSSKb4BnRbt2rTzgj1NqNtuo49HyGBP4v15GGuXGhzB6ZRsyb1YzS2XvjmQdaTHpX3Fh",
  "key32": "7GtVH7zGm9XU5xLdQJ6AbtiUrNuFTNZM8x9kzfij1DSomj7PW6HYvXJtjHBJeETX4XqhLV7ZPgnZexJCXQMkcJc",
  "key33": "5kmQSEs3eZi59eRmStzwUCdVUijtWZEQexYcYpYKeMRNWCxDF4FNy46kTPYbnfsZyDcvDYLoVMSUCR4xMqwTxkp8",
  "key34": "2MNjnozMQZHXPhDu3cNJY27TqzTEL95pAY56UyHm5T1kHCU3fFhxwznGQwvZodgRLQy7tcSodyLQ5x9Pk1sb2oP2"
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

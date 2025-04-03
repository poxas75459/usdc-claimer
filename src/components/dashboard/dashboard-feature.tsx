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
    "3WZMsXFNAfGiD2w7Ahrdac4qwT1PMnrxAucuu5rpt1dMMnym9F5bu8zwuqgD4PouJGe8M6JL8PJSj3yBrDUUSeCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GudZ2d9ZnfjugpUUBDW88uzkUxpqGETsanoJvN5rsMChDn5WR35cjeBe4s5bhXUZfVkhhSML8FFZviQkPJ32FSL",
  "key1": "aDevzeUfLjCkvD3QTUCYoA9BHBefTDb8XQxsuMbudm5aPMhpogBsksb9qEtAtwt2b8LHB9Dh8MwfHM8WT7wVtiH",
  "key2": "5wE4PSFM9R7cqSvufSmqjQAhRjcT6gLuDZZWN6xcX8ZE48ZT1VaPqRccX3hDZcnvYJ4DzQnYWKQDXBHcvQdeErZX",
  "key3": "5F8JhDxe2dafEZyjRbNMAXTskpsQCwV4KPjuxRsSbu98ov9RSTbx6NTXznyyjmC9cxapg2Bjf7xWHWhoeyW9VpCU",
  "key4": "5SehTiGt5E6EcWcikViaBXxjFMPiey2PAUipd18orTMYDF1VusR6fLbRhmvFW7MA3zrB3ZXzdBMMzvJSjamMy2Pn",
  "key5": "3kA7EmnLgbsb1d5zRyWN9hBr6GTtQpdZ5zSsFc9uNW8HBW8mWdSc8SJDTzBehiG6Hz8NA7tAAG5FEVGy3yj7f77v",
  "key6": "4tJfWL1v5oWAWv2SZcGHsFcqdUMdmp7bfg7sCsTsBfWUWyVtFdxYPt7rJF3MRGJbRWhbp6Ask8FqMA6oGkTXe37G",
  "key7": "2aVPZACewhgHGGQCXy7vu4H339q2j97AZumn28sGVPx3fYzfGo3JwntLpDTdZzLAiZ9QNU81zWYNQgcYAGDtLHtQ",
  "key8": "4iG71kdewWM64rDtwpoDYv3jUdG47cxiMk33WZ1m6Ym8r1ExrwVpikGqZHZR7P3hxkv9vbvJuaaZCjUhCzYzp9MA",
  "key9": "3sB35n22m7NRzt5oxRqNpfNYkFpn8XcVaTop8gu74xCTcqvHwimgfN5RyrgdjRX4SMutboDAGpkDoGZoZVNhamvY",
  "key10": "2W1QuYGdcodCb3cwHJiLnR1RrtF3tso8Xc8qqi34GmFQXuKLLzT38io1ug5wV77P6oko257sjV8H8JA1sBp6EdWy",
  "key11": "tGx7eWQqPgGyyUGLA88yr9bvxnARu96SwMBKbyQMuDsuNLJ8K5ebUgWxxi9GLX4K84N3786ziXuuysoxvLyGTMB",
  "key12": "49hn3dx2jvsxfdk8etuQtP4TRgNgdHdnRNNaPrns2wBtKgVHa1FnXkhMgMCHDP4pr9hZmWN3L6oW5tgKbnu2Cc6g",
  "key13": "3jjoYJ4KHL2rQ3kCDvnBzSdvKdyZp6KFWwn5teGuJPSXV6Au2bT99xrsX9bBWuF1M4tnkgwmxMBAHaAgWK1SNtPY",
  "key14": "4tMJBd3R4z8bagkWu1Ej6UtU6y43XGnvFjxAz6GedexFwDRmVSAohTyvZNNtM8Ta1qNSMGisivG8VUvVvbBC7uYF",
  "key15": "5vd6fFJT9UtpMEedvVq8jmf6KjdeCSEX9eYvpfK72eeP3vX6SwjQVM6ASyYLJyaVBW3MULPNZCL9V2fgtgPMM6kJ",
  "key16": "5hojSuvsQuZm5h2cAN6P79KZbdyK3Eqrac4u6fPTQVd1VEEWk15reDHQxWKE7WmGdMrb6GBCaQ4FHoCP5idsCpqD",
  "key17": "4ExHg8s4UNDyc6P2Fy7AgGRL5x8nZ6oFgotAP1fFoUvKcPUJgGMjfCpeSAKaDd1dWz6pKu3mGeHjTUhxsvhgMYPV",
  "key18": "3EqwJseYWDuqtc5wuNjFj27Kq5XwhLMd4LC3Qc2gjet94wrqHwJK1XHQyFMJWs3egwspbZGUyNYMckDXSFXDDhLj",
  "key19": "QEP36MCdwCKor6CByo9zwM9aUCGjLyxxv4g9qeVWefgGq2VF4Q2K3tfnATe1gd7Kha54cGtXGQtdr4cvZPVk1ZD",
  "key20": "3Fc3FGSYbWy739X3EvQcQMf1ddqmzXGPJcjjGYoE9Nc5jrqnwzzBpFkrFP6R9tSpkxUouaZNHA2JrGWiZiJJgGEG",
  "key21": "4iem2Z4pg5XyuMF1ibXqSuN2uJqUUgp9rUC3yzGqjC3ijU5GQTvsQLrmVkC6b5JD4h6NKfdkLD1zCvmmaYJ9FMbS",
  "key22": "3iuo8dsMmCJa3QdC1E2bSXeW6dDb2eLjSX4jLAhutNZy6YtVL9o9StggVHpgHyAeQq2EWuabo5T9aUZs7Kjs97fq",
  "key23": "44nVT9cZxbrDAE6gsjwZfxWKC3z4tjRSGwBGA9CSwyBEeLssVPHzdxPiwxok7fEsQELrmz9zg4Njysnq7MAA72dC",
  "key24": "5PoADeMRHAYzkBK3CznJxzoTzbusMdRDyNGCPCDQ5G8UefvkDEbu8ALLiKapo6Si7kHEPjSW44x4AkrAPtykagGp",
  "key25": "5DRbxs2B15t7jtRchE3eQFor5j14HNA3iBtwwYC9gqcU136sSuuV6u2hBxDr8ezcSo6SJfDqUKjZ7KYqMr3DHZZM",
  "key26": "23SUzH8g5oB5VZrZLwG8LuCvbqyyUi1wVKGkjj1NEpMr6pTy7zkxbCp9QF515oq9oRKNRaioqAQNvSuy99yuUJqa",
  "key27": "NaCuVo381BiWyonikX3TovZx2mLLM2rcJ1A4Da7Mo3sYRrAoCPRUopZnDF9q22eLup8FhHtWG5vrz6J6BupzVFv",
  "key28": "47mA4tDp1E8q7mpmnwsjA33pHpiBn4zSw7vx8Si2dDGD63WJgzfATww68uU2jy8YL4n9KmsX2WNNpaTTdM7V6Hyr",
  "key29": "HrBrWzKyraWwrUaADAnmihruqhqMwq892fLDpKiCGK7EaUuGpWT1qWNhZiFj9ZswwhXGVAXj4SMVecDFf5PSui7",
  "key30": "2k3fdg2Upuy8jAfF8mQt916YaM27Sk72DoB7tmQPodg1bNa1YHDVrjfe4zP5cTEJMoRBqFQ42GgPUYAGYbte51hP",
  "key31": "3QrgdXpS8JpQjMbszn5BKwxdgQeyFdxCeyGTvwzyXbfw3J8fbtYAcPxE1nJ51MN8vLKXS2ASFtq6VUaVd7jFw8ea",
  "key32": "5pN3CPtCAyK6gP2RgGKbDjnsG81mjetzrTHirqrUQHFKSprqxuHBK1k5hTq4FoAR7JDXp4R4wjsnGi9wx28KPHo6",
  "key33": "2FCyFjxFKiexEiztwytcTMdtEh4aqePwWviBqfk5938K8q8z4LFVgVMr2TXxwLqaP5vyKtYCPjSCJxCDTTwpq1tW",
  "key34": "638ExJeFT27zCrWx3SheQ8KSLxJKNzUyvcxtty6jzmiEDYhcUXcYyE5CEumEgpmQzRykvh2VvaCxeeW6mr3kiQyN"
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

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
    "3VWq5BrE7g792TuCfY1vGka69bigqaFtxbby3ErBTamudK2FGXquUjRJqtnYK2AN8AZcatjkbg2iy9YADfvRsody"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsgZv3d4YvrQWzSFJtgzKYAFAyP4BAPiC8DCEPw3wuL213nWYodvx9EsQzp1Tmmfr2T7DcxhvcsQYcqfhXAco71",
  "key1": "4WfuA4K6iF38ZiDixnunY1yt5fYuQDTLC8ZHqhiGzBHw1yTQ73E3KSF2SLf1NZRLok99cPGWVXgPyecaqvx7tLfq",
  "key2": "8aDBhFyL6TaXfuPXHjtcXhXTXdKxPF6tWzfz9Hd5Ev85hjhaRxyQj9k2ro4Roh2CyyxgPGxyQBqrCRMnMsBEiVi",
  "key3": "5NBTsXJUycMjndTA8CNpzSdxaQTrE1MU2DMncANY3W5AgdAY6mNHDh2aKXRoAiwUJASgaf6EAWe6RWwDfMVY1BZB",
  "key4": "SDdxE4nv7TPk1My562Q6Nz7Ewrczg8SJVoTWTxCdUxjMZ2EPMiHrxVhd6VorsPhVbTjmdEPQQ8Gn1637iynwMjV",
  "key5": "67Uov8ZbncRFKihMgLQ1r4n3Xotvc4qSc3vyVGHBA2Z8gJabgn3eytESywjckc7HrVwagetPXzXbDSLsZho12u7h",
  "key6": "56ys4LYVXed2c4ik9T1BZbNAFSA41N64ANwNKzrAqQaQFKfGDXxNVJxWodFNtF16DFvyjDmTnjBHUDp6wim2F88d",
  "key7": "4J4AHx5jhcb8Hn3BJQ4Y5KkCE8k3adqXadrsK2LysqtZnBPFMQBCj8eok2B98w4MgT6QiWqrSBghxYiSG2oEwCNg",
  "key8": "WTSCufnmwRAToPR4Zs6q7jj22C6tDJtPeVTTKezvkWtEXK3L6ZG2Shtkw96ehVNHW1tYNNTwUXgDSkBjR1YeJfV",
  "key9": "LLTv3UWYisP19yX7b1isMh2SFSdUa7Gnd9EMiqEZnWRiokPbcNkXtoKMYBLhHJMiqGwz9iUFfRmucShYbTRAnrh",
  "key10": "hCeHtHc2YPJc6BG7yg9AUC9FnPgSS6Qzn3S3mbgidbVNjNRAHZBhMXhhbudUAhjoLWReFCqb8DBEfAxukdaJB8c",
  "key11": "2N2nwVof4ppXsrCx8ThbwgfkxmjNDpGTZQaj1rW6ZhKMY4GcFkgp1bKn2cfM8xoxiCGDZTSLxw7s6AAJ5PsxaYuu",
  "key12": "PYENSLTe2noo1RWPXxXC4azCCpgC1huC56AiJB76qRdYhGBKyFdehZPp32YNSmobtfNDeC24pBr7UTUuoU8P3ko",
  "key13": "3EwesUAXTbQpimTy6CYmi3duCpFtmj6TpkWmncAv4YuAsJom3pUrVcvqCwXb9bvEJrcCfsovRUKHoWUEQFK1UTGR",
  "key14": "5vLHnsoNThqDso1CHdkJAoX9Xza6gWp5FB3xN3wZiePfosbnv9ghRLaV57qU59bkC3kuEos11g6eKnGkeS4fkM1p",
  "key15": "5FKQXStTf9HokH6FE5M4dYrChgrjjRWRkcGcapJTvB7MqSDiNWVGnaGbHnwx7q7FdrotCZJHQx12uKQzHpfmsQKq",
  "key16": "5789oDULw9TpGXAaZT5PaukPwBdJJ6aXnm2LbgPNXWZd9SHD6iQjzc8fbD5r8ajX1a5EmL6fQpuxZ6oDgBeYiJvX",
  "key17": "5YkyFhUPSjm5fn36jLUHynXv5Jy66uNmCh1joWjtkU7WgMoLUy7BkGBVpbbRVVzMfEA6ijiKuzGqTynRSMgAJyr7",
  "key18": "4a73Jrk6mPpoY9PFbU66hF2LfRF22DoGNhNHBdjTqtNLCsvpK6JZWfuY7GBNEQW512qQx1AVkCynhJDawk7gPRVA",
  "key19": "5hxLKrA7g2ft1jXnLU26pWGoZ9Ts7x9KbYzYMdgy2TAthhwnqvHVzRQSNYwcfccSn81UBtxTKRBNJuDJ2trUdJ5X",
  "key20": "sZ7oDMxZii5f9HqTfcB2UzLMtq5sx7z1rsWt5f5zsUqnqmT5crvtnDq6TxXLNV2uV3FvyPH9wuZyiMskEKXfULn",
  "key21": "AST5RsLEAMvUoDu9Fg4RyHDCHCbTdxLVmdZMCHLSoGUh327xrfC2rqL4Mbn3GCcep3iqec2ySNM897qWGYxY9Pp",
  "key22": "2xR2hV5JuTYtKnDBMCKkxN3v2seoF3t2tFCvrzRiXe6HfUDfsajJzUVCPniBsnfsTxnLuwF6fUq7i8WyonMzg3kK",
  "key23": "44wxJAG5KK2jEiY8xkJudwKgjm2Vsx5j4LLKGckc4a9886VT761PBkVp1E6B2Wk2B1HGnB631AXfw9PT3h2UK9sA",
  "key24": "5vPBhu1aHcx5YfM4PKzZe4167PaZDJL4tbMacEGZGYVuzTXCzi1AeWAaVBFFfRJgwHadK5fFikzDLSfkaut77KAo",
  "key25": "4U4nkmqVTfqX4EYExqgnVzbi6XFjmk44qL38NdRZxoYHmHNZ6d6ahD3H3qUmQSkpwAjTA2z8XJDLTcJp7WFhFv4n",
  "key26": "43D9Dc1Bjz6iC9YmMsbeZ1FAwcup2jzVmH5ZN1H58m83b7t4wMevERyNUw4FAoX6NfScRNSVL6A8yYP6TY8zQrZk",
  "key27": "2NZZXanDENXUJH8S3vPDW4d5GyDqq46Fkewz15pMQHk5Z5MkttzAAsRc7D1uSj14ZW3wLqvzqUHsnaungCEtWkRZ",
  "key28": "22En6wpMH4JGLqAq5ves5qjycA62XUDfvNg1PAx6r5KNscEGgaAHyC9cEWmkVqp9RTJ7EQuLNf2i1uSryNgdDfZE",
  "key29": "3WVQ82BnPCNiTXFXDqJJ4xcDNgTtTMDXzVNTGTGCHyU8k2CkXEUf7pMZvvw7F2FGRCe1pGQdy4YRaPoisRQ2BRuP",
  "key30": "3Sq8hUBfAmegfa1BX9wu9tgNFHuKH9UfNpmsXhCQbftJe8P3STBkDPPHp4PMhESkBLBUHfimgwQhiFceBp72dAxy",
  "key31": "4Cc7oDcc7Ghj3nBkarGHLU1mMwN2EiPz1vdZvf69cDRkFFREvTsCJiQaiM7SLKn6sk7JYkajzHpi43C1bVEuuWfP",
  "key32": "2EkoP8Ui7g2BUF93Wt7g4nnurMJjEbbpb4htxNQTZWgyetDHHmJZz87EaEsj5YR3qnzvk9nBo3onqMhqK7K3rG5a",
  "key33": "2JhtQTH6mxKPGbt4Ed35uzy5htYxLRhDkpXhsE5QddJETzaTYRbW8fPCvEEybfTXba4HDqbGzbGFkwG394gURUAm",
  "key34": "3J1ZibE8qPk6159aCvbTyc1Y7evmfSF1JDM6hXx1SHsV9s6sAjhqPnGqwpY2gscxdrU9QFtB1KdnWvEN8wRgChzQ",
  "key35": "5KDDGcqtktafj2RzURrmDkepFFQAYsSQo8Gxn8AuEqemQ1B9JZ5bYCq52q2cRaNaznqzia6Y86Xu4tjma5jCXwVp",
  "key36": "4acC38Njq7Nh1FMdJ8BFqPpvfcjV8DAxTJQiuuu7ijxns5EsSwgRiPj1RCHza5URXFpSLSp4ZgvTNWhVtG2jpSKr",
  "key37": "KCqv4xbSDC275AQNHBmTQgtcmiDkSTepjUfDEQWmL11AGhGFDpwkVLoLsffJYDnBv21CUSQxhuCpD58iU1xbdtw",
  "key38": "5zZsGGaRapEaJBUMpBpx9ph62FajSdcVdEuh2LJ4NEntsjtiHQKvx4rLFpxXZmxh18Y6aqxqdGf2hmeP5bMBoUge",
  "key39": "4dsHdBY2ATe5i2Jyy4c8Bruv2Eq7Dtdwqgty7rWATTJhqbskLEY7e2SMHHoWbU2xtMrWYwRX5uXQ7n4Q9GE7VALb",
  "key40": "o4wzkuxMJpkqnj4JQQcxsc7mfsKuBAEjGFB4xZJczg2kcej2oaYaL2Qwf9ift6CfEecXQEhTUobTBNU7euaYP4G",
  "key41": "4gTF8f8tTz5V576v3MoZJZ6vzHz3s9rn5CaeWnCoNsmT9PaPsdTL9LG8x1Afbs5JNNnH6s6GYDBNtgRBrMSpv7yB",
  "key42": "2Y8DYNDHNXxmLNsgvsTC7BKpURJyWi3KLWH2Ka4MTGobcMS4pHGwexKk5497Pk4mrKcHuuCG1mB4gRwCULRJBkxJ",
  "key43": "4NgkZ1PK9Aogc3mda6KYkdo9bvkr6F75yiXZ8s9tGCnB3GdHDhsnJs6d4aGr1iYZGwtsMBS9t884ZDzPXFWPF4Ld"
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

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
    "5ez2YrFsxs8vsbHFnbyRwGgTM6fi6A499ckscPSFPqAkwNodPtk8LfMqvX8NQN6z7LNs4HQwJiHzaXhQhSDqimm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMvWQAiDK1SssUwponZkF7eaXJR15ZCZByaZQcUCnfsHpzp16ngRBNQ6WTgntt4vkGVVFr3CmMFLZsE8rqNCR9R",
  "key1": "5LfMhowdXJF7kX6XSJTejsgvb1CBzYXPegUx2QFhayCGqgDqqdnXunLPqnM67ULCw8GSvBga9upi61jq4W2J54MA",
  "key2": "XXgEYwU2Rbzbw6LkFXDh8Ncjq7hTj8MCegfQ7TXMWqi4G8qTLAUoQrAoFxmzc7tHrEFEBzAcqwajtqbmgsTwdaK",
  "key3": "2hM2m4qUrhT5F8Nw6LdHnfpDeGZWMYcpqmirKq4Lm4MLi2N23FHVtx1ziFdZmAPpvZqHbJFaC6ABJEcUk1UkkMy",
  "key4": "e9za7WXAZvYjyymyQWTUhYxeiwgJ4G7GFC4sRCyngq3ncWh4BisiM17NPmuuqU4kmi7J1HRgZhftux8nPernsoV",
  "key5": "4FHRJAR7nNbopAJMFPWNgk7cxNcbqWWg1Wp5vxNpkVohC87wEL5Gwcnnfff7zaMFy9gzMxLSbgr5ZqbvxredwE5c",
  "key6": "2SYQ4yYWdZ8ggKCqSFkzgiHu1xFzipRxXBfEAXZFAyHRHYbEx6tHKdK42JzUk2pZvyWFUY314bJ61p5diKyvHBZm",
  "key7": "2LKCEXNzxNy2UzRc6bt6or4gpDvY7VLQFiM7o2A6s9JrmjEv59wsgk3VNnb4UNz5sHNy4X7y7rCZD96rJk31iDnF",
  "key8": "ALoWPmJXc7CxdS9KUXB3TjsUxGzkSCiDEaYiJmEjhnme4tvkuDnagJK5sRfQdKjcwZmQpLGgXYK86QHnt5upDk5",
  "key9": "2F5nof9dra89XBSjZ6nyaeNpt4BqkZSa3fyp7SZs8f7p1Dus1ajorrzWx87BcmDpVJev36j9fcDhfT4mXQqkBnaw",
  "key10": "3zUe3YLnmeVzZSAMPTWu4Mxw2oZhnz3n1BRNx5tNir8XBBcDLMNXv4N7hekvF9hXCAhJjXKrbeC1hwSN6Bk8BprV",
  "key11": "5frNnJxw2GwXuiQg7k7cYgM2u3x9q8Bc8AC93WumQCtqVKWGYP2gyEMd7dcWFnkVXGKcUeoH37AyyzY3vwRV4uS6",
  "key12": "xmjPPrjzJ2XPHnhZp2FEXcncYDqwVS41odT2brPmyBfrAVmFTT1M2NwCBJaQewDpEoP4Yb5jWovLoLJRjEfd98p",
  "key13": "3ujRFmqpGzqQQzdQq2zEdZKkEJyFkNbDMCXG5Jhdr3pNQssFjC4J9N19E2gacHFDFz2a9MjJqLSeH5cqKwYBD9He",
  "key14": "4yJbrbS79JFhApNeBZZ28dWL6kqevEF8kQBrjVjkFZ96eDLb46rYDLwm62LbVKiUPyGFMCCXhmRk5XSTcsSJGAYv",
  "key15": "4epZWTG7fL2g4k6PJf9ijSqQTibKP8N57vnD1VzGbeWZ9u159JUvhahjcWSgKcEnjgfQjXphsYjny2gapFkxSxWW",
  "key16": "2zpwsrhrRhLHKayfB6GzeubdrS4a2UTYqGP4eGQUuWhBLnStgHDAm8cV5VXM9uDVraJ6TQPb1aTR949CH7jEMykw",
  "key17": "DJCEhJKyyJ2ceiF6cK8bG3sRcZX59FL7mCgKomBQ7NH4JqapDpFcQ1eHAGWB3PqWCcN8vVSPd46QW8m1Sud6NL5",
  "key18": "2xjS6eu3fpnzAigm88n495tybsTzLiMN27hbwgtLjrkjAUw7pPqeAFfzUhduaD1SCf2UMSWuvAczn31X2JMLqW5H",
  "key19": "4TuxLwHtFnRg6kyDKEQ6MqoipESYLXp2PV7SHH5w7mHxKKichqK2j5vNZtsZc1nWMPQynmpLZ3LyRmu2ud1DqWhb",
  "key20": "2CKrhsURifFzMjYyAFVM5xjd74nWEbmVLod47jmV8T6jb9Xet4bnCXPGbXB5xfX1E5Ks5G1cEpa2i71q5WgvneXg",
  "key21": "3TrpL5VWN7ZPdowLVTDjCeu2hT7RxTVxpC2WpuNheNTTNComAtbrNt4dH7GeGvjXzVf4FTFCfTxtwRbS6TNdjFB2",
  "key22": "541ze16NoQN5yvwJQrHesrRc4CCcT2DD442Vbdi1gM39xrjn5Z2srT6K4yjW5AWt1fcUmr1KwpvtzYLgvP3Uq5Jx",
  "key23": "2xf2frEYSzsvDQ8wLHGS2fnU1UH4ntGiyZxxooH4e58Xitqtoh9DqrN6B38msWLKoeQB7uBGwd6tTuyfje2ngRfN",
  "key24": "5a6ftCwtsWgq8VBRfgAQmU2oPuHkKEhJwTZ5eTHyHjFRRZAKJCH2XWhNGKrMDpP3farEieaiXjdXG8pUMt4WtWxH",
  "key25": "oi8ZJmnCcpNvaSv2i2NqFpu84LFe1uDp41Km1dZf6wMxLMN7Ft3H8NvqaGWn2nPCiaTZe8rQ3gKrzYRDY24Beph",
  "key26": "2smweGFMpKKZ71X4PTr7f4S34LhARXqPpG7UBZimKdiHxCHyTr1zLLfBSXvBcoawvZphchyvg7dp587URiG5Wwup",
  "key27": "3Uq73UUHsRikNG9H3WHnt1fG7d18wCoSjyPMqhHvzCNM8WdHHyGzGdvA4CyzLGBL9cP9YNoFyDtFpfPQxqBNtZ69",
  "key28": "55VZUJgF1bCUx2V759gnjGyanZT72As1fVbedVirFJxDsKxta1UEcQXqGcDt1m1i5a1nWxnhMXSX5R9Af1Z2ja6R",
  "key29": "3HPztTrkU4mQrUCrgXYeNvfMaezkdsCFSd8U5DyJskdpHoQcVtNcaM3HAsNCmWMxnNGdEs826LDopPjyMpiGwyEj",
  "key30": "4ug7mYWyZnPf82mnujv1JoYNbYtgsZxSJW43TV9eXAx5fnUBLX66JuzeGEsbvuEctGJRPZmp3dddqgNK6pWbjhZ6",
  "key31": "4uxMxv4sbo5L5YdJ1fLKUpAcm2fiuUuqAsy38VGsFkZTSzqfgJg9uYptKR8R6LJQtLMNpwmi1av7E8epLpif9nTb",
  "key32": "5rvqMhTm3MjD6hZwrCQREsSKGrXuExa9nnFrGP1Kpgqp6F3jsd9XBSg7qGx7avg4jXSRo1CoXm96SH6zjynMSHQu",
  "key33": "55PgztqbwhNNwb2fHEP266nDMmPPgjz53eNqDWi3mLn8niWXoCR8ChohYtDDRFA4C6euo9w2kjJ2YJXse4zJr9N4",
  "key34": "3ayqz3vpfcBmDE3CbccvEGXi7j8XGHiJMcFDnRNRSScc3qnrpPG345ko8jpS5RTo481QW69kEw4DCg3bFz64CWqc",
  "key35": "3m7Wvzuc8e6Jm1C4uKqA8GvozUdXfUyapKmyF9fR7aDQw3qHZNXG7vvqWU8HzVd1vp7Tfrz1JFEVZMXu9uTnjVjh",
  "key36": "3BoireHo8UzRkC7xTTeAYs6UagN4CmMmdeX5gruRQCHoUFwwC39LLDK5wCYZiU1NxF12w78voHkdzSTVDsiDkFtE",
  "key37": "SM8Ws9S1WebvqC42X4Hx1Y8JPFc58ez4knPQaoNKWo9yXfujmw8tkYsWSeAYL3vngphVbrwTWttvBRwDQq25EBe",
  "key38": "3h5n25kdq76TeggD4VmLtDtqL3CWCxtgtDbC9bPLLuSAv9FGHz12rgwScZk6TbSZQ4qF5SurujegVfyXUbGAMSsy",
  "key39": "jA3y1wsaVjZxysYwazCCfr4SWqvX21iusHkXMBoUa6Hh8Kid5uHBJQNucrGd8Q8GcyfPcUqnfWDuR3mEcnVEGX4",
  "key40": "5ZgzEVdM3AVUuAQBJAYzkRgJZCLiJuhBbCHGgcXL4jFXLPHqxhiYkkKNbLckgWT7oHMt5zHx1PkVAGze8PxUQ85T",
  "key41": "2LqSN4jZBGm6sL2iiEPn8Qdzo1JvD4TtijTCAGctbpJXi33iHCC8z35j4ewVhDZXCoJMntqQPmdhwXPP6vWhHrfZ",
  "key42": "3ugD4tcCRaXiMMhK5r2nhDmSLqzwU2aMte6m5KMuQ32X2rftD9p4QMGAKKFtgj9ns1EUaDQPLEbvur6RKRMpSFmX",
  "key43": "QTRwsXPR3astveCXwK9Svd3beY6mEUwgqruuoQLWuji1tcV4zk7NVGSWMoTR9ViyDWX7FQfwXcsb3jHkzjiJwNQ",
  "key44": "2dcCZLcqF1WvSCAMVSeomhkjtJAgvLnQQ3b3YHrU8fFNjcajx1ThkFXiiSQo3QJKs6AuoF9yCkMNSuYNQjev99gQ",
  "key45": "4f7xAv56EkRfUYMbkJsbgpf1emdiE15x4pi8eebqPKrwWKRNyUrwv7rk4hUcyP8zE5o82a9nV1QxnZpe5VmENrK4",
  "key46": "3GS1ss8LheKYZf5wGxtoK9DapR4s13nfC1XRqgFUWdaENn8dYpjAXoEL3LF3FPr5oNpB2SJJzXqPzJavWAbuBx5W",
  "key47": "29KffvpwLL8umcwRTVCsmg7EkvWV4Ef5pzdygtEL23rL32H7rsu39aPCm9cGzBYuKXd269Sjs7csLS4Kug3Yxifc"
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

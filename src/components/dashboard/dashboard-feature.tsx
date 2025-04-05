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
    "d9Cnq3vBcr5R3MDbwcb7J3nRwUpDAN96vhBhHQJESAdzMrK4GzaHBYAE7sZEdBkCFGTKctXGvLJAWkSbeBGH5HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTyM3RvmeXyxcE3fqjBYz2hS7oj6KRbmdH6aPrG78NZA2kDGeEt1Tegi9dHu1xop3GcmUXBReqi2ZHJ7iy5TNbU",
  "key1": "67G7x8Yk2efxvwxVM7BHwHgiC21TfZWiQfRvp5xFeF6egD3o8dbxm46xN8YWRRNZvNFof2PMebT33kJP77cqGT4G",
  "key2": "sr2Q2Dh7zqThjyj4517Mdg9UwrZMbLBnjgBSqKsBPMqRt3x7z5QjTKyCmFPFBWjZ3RzUiphCrAzL4FAktK8bqja",
  "key3": "3xUjZMaQLiYp2oTL7F9CL1ky3p9MME8Kp8NkkrGmFpH8YX4gdhiREHgZxLAo2ohqJkfUm4NXFW7aJtP99qQSVatQ",
  "key4": "4EfXKULxpkCMkUY63v9eoR9R8S4RmWGCicG1YsZfKazwMzNgZQMheJCUaHGUN7sUBU5HtNpBvrVzU82tJsxotNr8",
  "key5": "2tPZFnapUeMigTtZhR9VH9SSjgCQCyZXBNBgmgFvxKXY2mWti5wGB44rQMCnM9BeALtfgjnR7FSTn5PfA435S5Zh",
  "key6": "3aGNq2i8qewNYGNUYL45NQ4Ae4Ui9HUBxAaLYF8boqbPi2odBAb8amk8Ro1S1F8R6nhHeNZbWqn8wtKH7P55uqm6",
  "key7": "5HJyFdvnMN7hDUy5qXJ1cu8wDeaLznscgNxxhWPUajKjFsUk44dKNtKwa3um3xCzDDMwVAnC8uvt7jYNxpBPkn7x",
  "key8": "58jt8BSZ3smyvTMhPsTXAjdQWTfQVmrCBPLLPkrJzif3vBZ8t4aiCjKmLqGDSJokjgVRCyUC1E1ab86CM4WRsh6o",
  "key9": "n4gbrwNsYhmz2H6bZDhmR9zWT45DH945etNgCtKQKjiax472i463p5MEUk19szgAXZxkGGG87jVUE76qJ4jjYjv",
  "key10": "2218oEtB9W25eCmhXMdLiijwfL3BoHtUCTyWiPVK9T9pHxmWuASnhhAkZ9e5Kh24AVGQS7dnawnNAJuHvBLErgWc",
  "key11": "4TBuPN6QcK7TmThnHbeVGmrGjhzsvYPNAm2wxCc3MN6QXWXH5ZLc2QRpSbutySgLYAADziU3SkvC4QaJLuafeXee",
  "key12": "bQjhN9fvrT3Tgz1uqDPjC3eFqA2xoSEjnyoSQE1ZGnx9fYuste3vceSyepHQuhhQTSLDgzXr5o8udk3xkBfhB7p",
  "key13": "AcNn2rcWCjPG62yBFb9dmoJzo7ydCJQwR8ww1zbXyKZ1mvgkCztBjVKR2XUkTgNvuHUawMvSAzQeiGDcv51mpGj",
  "key14": "4SJk3xQAYnGv7yXbUnMoYnpEsczdSjNU8gi5PsX1HsLBMWkeaJefPvWez4opGuPgU469Rf6wCxqkK3Bn5SFi7CMK",
  "key15": "5kfjJgc9rbrGvyu8YvPhXVd5Zwk5U4kUezG4zaN4EzYXPuaagGHi2cGy7EHmGksHPVQXCnWc6WXQGZXTU1fY5UJw",
  "key16": "mrpJ1Um2EH2UaknjtUHWWxV6KaHk7jC1x7hnR82AjUqNSwMtUUJkkM5oQEc5XT63sRMaMEK1SHGXVz8r3rpZqy3",
  "key17": "3kH3y6V8sShMqzJMdPPcLN257ED7Ay75usZfZNP4pf7nufmzaouQ1RRBr21Q4CB3ypziAKKD3LR37J8vDKGvc7Z1",
  "key18": "2aXFSXnniK8VCNaUquTdTXUkfm8g7zXroQCsuXPVf9wWyZoAuEhQg2oios3htH9VeTkmiiuXZboJYubanYv2wo2J",
  "key19": "5U5BRJ9XcX2nXVMYAv4osJAV1ECGd4vSM1n89Abam8RKji9sL2FBHsJ5UXbLMV6P4tWfhj7yAtKupUoirj9aFUek",
  "key20": "5YEf28ZB96K65jYrDj4zo9f8TK9btatdTLGh2cB1fukJg7BFM9T2fxuGL6jgSH6d8dMzLPBodVniPA2uaDJaUKuF",
  "key21": "563RbxksC1LTKomzoDviMj2dskhqPELf7ojpVtcEsw3fb6izJF2ZSHdHR9gmEuoQXRJyBAcWxk7S1W8mXrAVnkXy",
  "key22": "3WQQ248scnFTLeekbYK1Tn6oPEWgpL6tZMDckcq7MKAevREPHxLfc8EYAjHb32zMsVb3U7MxTgVstEYdDmGSDZiB",
  "key23": "3ZkqBQnZuKJYkugzDCvcsykz7x4WcXF13DweqHge8mz4ZcveeProv4ufmmk3jBuY1bMPoWtFu9imRnmkQQHseJvg",
  "key24": "4T2jGZ1PMwDNQm54PVtnj7FqmrGMGy8Ps2jVdGbCd2Gkdq26gL23CPy658SVrx833ynMx59C22Urqdj2pyrBMBGB",
  "key25": "2j6NqGQqzu5XmNcsnPRvRoGqMLS3gL9x7qGtTcq6HG4dMzVh5xFVhMw1Y3gE7zgDwF5T9jX8Ux7rmHuEj95ypsxs",
  "key26": "dETwB4LMY5UzoPSxqFqqs7n4zi1gWKhygetM5JxYaQ4tg4pZzVFsUpYsWBb5rbHeHiocWM5JNGu8kPKcUHHaqRC",
  "key27": "2ZGv7xkbancAgJf5qU16scXWhrREbF79hojYaPZJfxQJsxAHrrX5zSFez2rro8BUAc5DShJNEkx7b5mWQp38NZAn",
  "key28": "LXbDsyVC3kqQWQNKzv7vjRWCbqh73wnPYdq2VLw9P6hqgQ3TFXv2AhMUgGB12xfFMT7GjPVoGLn3KwK58grr8Wf",
  "key29": "aYBfyv3xR27CMr8egBBXxkgZSFBXG3k6K3qoA8qBDJVW5jZ6usTZaumSxHXkWfQSGMLqCL4wvGG6rX77qc4Q6jP",
  "key30": "4JLBTvkqHydYTae49JuqpA6CLR4apmubJsWqDKbk4z7zXxcwLYycYSzQfGorxFoVnVUew7zNUYcffEE6QCrhPgo",
  "key31": "54ZJb5HMAxK7eMMiiZ9Uj3F4YiZz3AS4KHJtdXbj72rweW84SAbmQBuMe27N6WKWbsHAuURiTBQxQQxb8aDugeiU",
  "key32": "2Ljt2RzpjhYbmLPsoxm3uZMcBTT52uChhZkziKjXFFTUSNt7DbXD2dc3t8gELMFCwbdpWGLR9dE9BtedgasB1YTa",
  "key33": "3ZSGn7HAjFbR4oVzcAHWAvm2bB8ehhPS7cD4NV4DkLg9eZ9BvwVSFDPS9fk3nBiP6fyqS74AmnQv5n28n5YEHNdy",
  "key34": "3RAhmvot2CtDrBzqtNErtoRCSK1NesULGx2bYjDdNWYGKAJTPsDJKpsN2nLuMgUxyD9TtyJT9qyZPdNFmdSxAq47",
  "key35": "rhT5woZs36yVdagmKmZoa8DKEbhjUcxkmrVpSxGtyzCkUP5qHbHK3R2WUUQQ2jyfzDsSbRRxUXupuhdGsaiNiA5",
  "key36": "2gC8zfWrgXZsKwf9AcVyNLnBTH21VEPhrigRP1xpknSiSQuGungt7ZDKi3biaXZ9KwvMzLnMDoMsSSnmAwycK4rQ",
  "key37": "5TJu935CKBWoyKDqhmYp4j4pks84LZN2GW4AYjakdfeeyUadfrQtSJwXs75kQfrzx8ToWDBM4haPti35ics2bv63",
  "key38": "3Gf3YMYLsCpRtRx7g7SHavAz5J7xFVSRpzHMdYgHUxG5Vm194j4nowTK23MwW2VmtPiX5FE58LQWYkoYRQJ2U19e",
  "key39": "5T2mtT6MJjvCF4B7MtNCqQmDRLs6cBatoFbKRZYCEYN5g58N1sQjes6yddJtHDS8qcXowkRQBWq3UL1GuWHLtaLe",
  "key40": "4FyGSqKfBjuUaH6K9AXt8X1D4yVR6qDJnhBSvXdECLaX5no88G6xHBWfuQ4saMnndpUEfNbabzTpLQc2obo8QCGg",
  "key41": "3N38q1wH8v6FumaeB9DGurkFo9nx94Yu4sDKxTcXETiDoUXMWmTMqxM8b8NDQsGJLEbF3Dq6vQY3trCVRcYbeBMY",
  "key42": "3jqFwUzubs3iymYZv4R1HGZRPtqDnPpxJJHWtYZF4R2PxNxnjLnMVCWox8K3nVvhXyG9ZkesaS6hSYrvxTqaTTBm",
  "key43": "zacispxynJBu4dL6YV8icvKnJTJzzENiWr3W2JRjXf9Ri1VhMpcZPsmgGUESsK4tbpuC52bKoTppUB3yttRYzgv",
  "key44": "zWdh6hZASbwxurEaMBxPW7yhfYi8CHKdmF5S9RY3Qsgtc4hdGcC9kshytwYziH7Ennxe3shwFydeyWqFy7KWTxy",
  "key45": "37YR4onyRXQ5zPgNAtRY7dABBor5VtxfHGr3cTtevoy6R35XZCBQnpGvvJrPUhfiM7oqGG7fG8ahw7gkekJY8ZCx",
  "key46": "4ZtjxPECmPhCLoqpmDY1zxX98uD7fzVqhDVtK6Xbp9mo3ggibeGvDvNsmV4zkBk8zCvtJdBSWHTpWdb7UsAij9uG"
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

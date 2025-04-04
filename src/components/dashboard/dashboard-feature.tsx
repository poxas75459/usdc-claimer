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
    "3hvTqD9inTES5R6m7FApjDFSvH2g5AiS8HFtnevjjeDf25p4stVZEfAxVG7ie2sfsph6TeggLUtMVoRLmuNEWDkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33dyLpHCufNpMcUqCtL7MKCXFMbWvJ58rWvGenMt2nMDwRaS34BFMV8aEEBdAoVoy44M1gfDTJHE3Ez23XuD1nVe",
  "key1": "YZv8zi9UucYkK2qi4m9EG1TcPMzNm5jHwnRHqaa9kLaWXmRGJo6TFsxfx1AZPAVZn6XdTFtw92GBVxW7Ea2ezKS",
  "key2": "4HMzks5e8Lby1CF87VqaNh8U8i8Wj8VhFFFVQze4YqsdcQ2TMje5TsDNwUwGw11Sp2A2zVvNsZq6r5dmBjEtGXBy",
  "key3": "35PZed3nUXnk8M648c23L4wtsPpc5pTqnGaynauADzwK8nfFUWaL9Z1aLAjUk9scwTz6vocLhL8nFDFjAnmEtteJ",
  "key4": "3746xpFjQSia5EumxMT5XYhwVRFzbfABY4KAZqRuXx6LWvYSnPRvh6EN5YJ7NStKa8uuckBVuEEn6t9nrLxudTyY",
  "key5": "5FfM16KrpqaJAsEQ4LBE9sFGpXcahBG9oYeYsEQy9Wyvpx6PZNw3fR5VDiMNLHK1pQtXMrrrdYTptrjWXMDXZDmJ",
  "key6": "5XRSBqRaKF4Le46VVMdvPjF9WVvTtwMQUZZJ6Nn6TG9KVC56hzC7g4eb1K4C8njPsXjMRNpJfdJ1q3NpK2fusBZd",
  "key7": "3Zm9zSKYU4ub9odukABxVEuf8HsxK4Z5AXiJNSpUKnrXjzQLZZzWkxKjE9YK7tVXJvBu9ULBcfhbkEhvrSpUZTLk",
  "key8": "DaSxKrz1qbwQD7jppVCF68mgWqLYbmp23ah9ZM6kqSwZUyXRdbUqtpUdzCEGBe1PuzR3wEZV3EAt1SxXRRmEm3k",
  "key9": "48dEkydnbZ9SrH64MBqEFHqkdJ67TrCxNh9L6D6EzPuJafEumQ6aFU8oPWBD2TCGQXFqygpnmkEUJvkVL47Hsygd",
  "key10": "57DXeDCFGHAaLfdBXJixiR8VCZpC29WdmNSmAzaexGkX1BNR6xE5Xsg47rAkPu6GXEuEVoAL4RtSh6iet9XFzpxq",
  "key11": "4tPs9HUP4516BuBGdJMzHFC5xaFv1sWwCip2UQ9BP7HKjTTUrHbaYGEJKYKRWBgRbdxBcYGF5xvtkCVhQVRdUuEG",
  "key12": "PcZJBxH3tQtKtTd1icjd2hPkAn4anWkAdCjSjdFMWSxc4WwVHFSu5L7We4TcvdXHjb8NChkpYKFMbXuPb6GxuWg",
  "key13": "2fihyzadLrdsWF3rSPX5V4MYxHceTx1ZomRHSEBsQ6fHjrRF8XuZat6JhFdWNufHAoFRsqEvndZ6khhXE3hxM69i",
  "key14": "4aSs4JfejbiG59PU9i5z12t9ceDTp3fzV6uErhus4V4vFbERu3SN2PuW8DW965FztxfdXWdBG8CGGcwQZWuEPs99",
  "key15": "3axkSBuQaHsqvPhAfjWwz6NarH6k3dkxXe7fNCXNeTBLjhRgGw2mPBjoqPcB447wLUxgVUE1Ty8B4wdWdBbMP5oH",
  "key16": "VmQMQsg5bPG8vgEhVuXUxHQVHUDGhCTKt3tmgoM9KCnrfGkbqarJ7fVzwtTvTq2wrxxBHDHCi3NnBckoEEEDt8U",
  "key17": "NhPkQ9C3USfYrVjC8hoPccJYbdTQACQj86LZ97PjcLHBALjMxGSC6ppyMb5NAYw9VUNAkkdQJX3rJyiHzCuDBnn",
  "key18": "3kAQ44MuSKV4isqhdGHibxYg5xzessRhcqhFWs677c4wWPvUJAkbzi5PH8CaCp3DiPuqqjKu9koAvSNeooq6V4vq",
  "key19": "5REEY4VXh2AqoWKt5fdqpMhyukeyaKZcEEHzN2KZMcLaitLgqaEBX8sPc29Hrvdp6EPfoFNitwgzPrHct9vtzFnr",
  "key20": "2FVFcdXazsQSTS3uzDAJNwCeh6LmdD3UB89sSFrymN1oETShkfopwnQhB5j5n89giSFYxiqmZZ4gJYa3Ph4f6Lzs",
  "key21": "48jrDuRNu6FjJNzB3stRCvYPzzWzYc2qcYFwUFX4jKdr2xQnfQJN3uoJ2Y7RfR6DP8vNszGWLKtXBAmopiWco2BW",
  "key22": "3F37ts82Yvhj8tHK8iPwhLqGUoQLAFUHHsaaeQnE67ubUKpH4G4dPXqzH4XA8UiSmh61Ev9kbSZSzfyWYtQigTco",
  "key23": "4uXzMWnipdLu7moAmED24jEWyTJh7HPZX2wjj1GxME9Z3mRhVpxaWh8dq8p9vZ8FpCSb2EJdg5eMZojMdhKEtmCr",
  "key24": "5dhGznibinA1WTjzDc5zfC8A9RxqqCTFEiAHEs68qJJSNUwWTL8YofQQ1WoDTZsNQmkFKkEEyBS1mYGe8caSmgi1",
  "key25": "5xYP88ni6YhS223LD4eeqHgRyttSPYkF75askKVBBndM5KZFbq3tkL8ufTp1dLiaxT6rwEzWgMwgo34m423zNAyM",
  "key26": "3N2n2pDzMTjJE9Q5Q6ERdxUTgpAoC9PftNubgBu8JvAhf5QbrSqZD7Nv4EfcW8eo8YwjKkVTRQovZY2dg8iZW8cL",
  "key27": "4xgekozc1Wow3t562XuDxBgD4NYuZPpkBp3HDhJ5STirHwRrbwWFAvYo8W7YjdMibZZaiCo2fy742SKgZZKHnCeJ",
  "key28": "5Xf3hQ2ahALU1fY7s7TtviPfL6jJeuqa6GEz4szhc9QoJ8Xo4KkJj3E4kjoGT2GNGgJ3AwnE5BtSW96xthycmCCK",
  "key29": "2nexQzrTrbU1KBg5fP6Psqs7LYD4AmkhmStxDQN5d1anpfVcoLkRJMgZai2dtpwbwp7d5QZKn5CSpnAuWwWvTTtY",
  "key30": "5PGLmyiEn4nVtBaoDLKAwsa3y5tSoUCoTx4tm97zdKYgESNQvoboqj9pTUUGC7FLVhSRrTABoNGKGiR1cEs93ZDM",
  "key31": "3wfXAf1TbJbUwq1huB9Rpg97VKeiWxDaDKDvyHy6DBiJP1fRpW7VnQoib8vHTgZ4tHPhjNAVGFtZog8KbNa6u3a3",
  "key32": "5PLiD8gHN8WeE45eX9gEMtrkbjdadaugdKZwjkubuSD18LjSTBhiruF3tvnX1E94sonCu54d2zFLngGEWUnwmvV4",
  "key33": "2ZoLiCtmH3A4QcFJuTkw3BBBqYogu5hZPsd25oLRkXKPeLDc5saA4S6vXJ7eQk7Mdm7KjkowrpJzc5uz8JHUj6RR",
  "key34": "3nNkRRMNQcmsgtbWYGCYZkRhMt6X1ZWGQArbhNvxQYqD8mbPVkHJeJfJanYWD9ZLpxYjbeZaiB8cb8wA8cCUzqLg",
  "key35": "5VCa7b9ZxKdRJNMbWEYFYRW7rG3ZU3hLFu1fDVoAEBtc1fjAH3sajU5Z4LKcEoqCbXLdELthY7eSUg2omFBnGuLX",
  "key36": "5uEZUrdByhgXNygrKNM71QH167ZmmWKKxyzSZ6YsrGfxY2QC1vtM5hR45P3quMrtfBuezsQHN5bQtiCyDYP5tWPD",
  "key37": "4rpgaWfNLU6uc9W7MqcrX9hr15r6oXSffMwHQFo7ByktMrBunuqsxryJ12ioye2LJMexZT6ynG5vaN4SJLEtTKNw",
  "key38": "4fTyPZJ3CBvnMLH4QTzTyPvCBfx6vJSqqPDCFgATh9nw21spqevZ2HnuaGLG7YrCL7NGmr8jDoaddGPW8zUQBif6",
  "key39": "JfAZgZFRCxex2eaEbA3kQCsdcx5ctQfhq7Y2Bw9Rpj8sAjS6d6oVtRwQpV563aWn1trrxQdujZ9TLQjhwuqVMnj",
  "key40": "5dD67WRFKCRHeWvoSnV9eUinbDWz7ZTv974oPLM71XAehrhSTkQA5TEQjFTdbfv7jKoVHX4b7yZ2fzGTQdQmstfh",
  "key41": "2Ybq99CwZ3L3mSRvd64HqnmJenptmPjX6MfA4WY3YRKAMM7sxQYas7iVDN953wHPEoirEX7uDyLn4sawoAj9rD57"
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

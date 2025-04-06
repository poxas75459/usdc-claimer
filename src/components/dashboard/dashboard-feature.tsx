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
    "4VGRRGj9PBzQwAjR2FdSP1bkEeXovFodncFihH5uPZJ2svA1Ck8Wx3kZkiQBQL28V3thgdM17Wic98ANtdxkM3qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jomEic2eRWnhQe3kWTc7imGvuWYbP4xXKjWd6iMe3rtVwQUGN4myyvVKkcqBKSV5uRcebvxaux2A8ouELL5UR4",
  "key1": "3eZZ46pFs4a7PGDg5QLcnuBu8QmcTLeAqEWPPTqfkpNLQjv3zvkCpRNf5KAnpUUduFJa4y3aJHfg1Zd8JNRwdgfB",
  "key2": "oJEvHjeUuBgCDsM6BpBE3qXL3ybQ1Sx4Sabe1ff8cTr7SguwgpohTtfh8hVQjX9Eqn59uSdPDjmReDAKo64UMrA",
  "key3": "Za26iotU6NR2ytW15TMUMqhjUoEMTooZMRRgTYU1NbZhaQH2m7GRXcQYLaHFwvV8VWhDeZGEznNc35numhJaBvv",
  "key4": "be3Dps69dgBFyqGYGNA9U2uJgcuRJYVtaSkp3JphR4FSd3m55HcFdZbkEKBH1fambJtoMeUiV5h2Jvs957qmxyc",
  "key5": "4hUjw9jKyqyUD4kA3TxUqQYBYtTZV6rvr481nWz4EtThXr6dsoQcMiFZMtVUkA4HiJe5bFgzMLGaLQ6fSULcoLtR",
  "key6": "4mQU347LVqebbVDmjAXxh3XfD3jZHDMZEPvZxn7JiaLGkZnWMLkqmexJe5B6sNyUPNyVeqoL49RgDYAPHiPc2vtP",
  "key7": "2CBjhwCQXbbxHqvymTwSdxAagcj1V9RTJ7GUaRVU6r4JPFix3XKL9QvM8hBRCR2zDGcwS8Gs6A4kTgbcBpEXMCcd",
  "key8": "3ULfnvyxX9MSeb6yMh2GQVbtD3KVgTQnZnYnag8W3URmdnAnSyiMDTrioLxyEFWLgVq7743ZFGwDmvnd8EDg9LnS",
  "key9": "5E7AGPUVJw6sXibF2jkG8gmELykiD3REwL5dLa2aK2saR2F6sA87iVPZWBFWAQ2EDjJG832bkezRzFNxwJ1ZcdET",
  "key10": "2r3gsNEP3UyBXLMJufwxE6BejTXih74uub8JubmCQDDPmPxJ9yeNZRjS6dnH4iSaytBX4EArrPv8W9fJkiVzUgbv",
  "key11": "6ELWEVuXdXjDSAwSbYTwDTK2jyAgNSNhv5buvZABqHTnW6rLQfzwrFrCHMNtUMwT6KnhVJxUHi8X3hNQKDyUyoM",
  "key12": "2JhpifjerZemQERrK9sNkY1myn3SGBvQuV4pvRC84p8oVfCQ8k2iLS6sFktrqVzXQD4UdHhJRUxSuWeCTg3KnJXe",
  "key13": "d7vENPoCPMqGtRimVf5bcmd4oT4tykmEvTr3dEJsrPYsoNcpCgFVwpRTPdhM12JvWn89B1QnGhDuCuvu72VJ91A",
  "key14": "2MuwNn79B1vFVZvPhP8KgnWVrz2PTDrqSAhfXfDt4zLE4FzTiD2tTY34NUhzRQPgKHHaSw9VhoiSsn84SmoJ6sXv",
  "key15": "5evAajCwUWU15ixtDjQAFcGKPxH8U9hPDJJVMKhYKfigGqJthQVpdZJYCqFdGGcbWvT4fwhzVkZMfHYvDAQHgsQR",
  "key16": "2s6eNHaFoCuprz6CLEaDUgVB8qGad3rH75n2brcEJ7dTTysGBXfzRPKz42uaFRStzQV2tG6qoRWE4yi7TeqweWDi",
  "key17": "3FCNnFVACK3G2eJEm5Dck6YiNz1fEg2MLKGJKAkStoQyqtpi1op1ekxXVubEA2xX5GYsZgkXtDuKYhSYH1LLon2Q",
  "key18": "5ccYkQV8ZPSy8WuoDTZkJUsexqi1m5a5vxN6e6RmCQmydV3bdFBwdJPpEGGoVtSwbenxaWcNwGgvw7pjVzxd1VDB",
  "key19": "3VcC1pR5TBYjj59YimSsy8yz7x2iV6yhLHwEhw4wQe7Ms2P8nKaf99f9b5Y7kA9G2zx13zJYeHUoJFJc8r38ZihC",
  "key20": "nVGMzwLbk7oQ15g7qBJZg3xe9RkoCwmrUHFNmUSgq63PjAM34oox8wWkJgArBURpjZ1qjxfsahSK8F93SYq9iRi",
  "key21": "448XnVhvE44TiL8fPbbEHvMomArweavuKxQK3xgV5jGbuW5kupZv4rnY2MznJjXxk2b5ZnhJUFTwA8oNrZoajykr",
  "key22": "3YF93MKhX4281c6XpDF2Me9hkFbWcQf8tRaReb3ZQ92DFcEFKYTmHqYW3kgDkt8aGjwmyYgmrEfNbNmXSEmttXyd",
  "key23": "5w2UPPhWzHfFpR6pUC7RWCyMNo8kR3SgXY2Ldijz7UHjoTK1F7EKQnKF2eoDfWNcDrT6hfq147uP2ApJGJDCxNRX",
  "key24": "5osn1194MTfccrwxBDxxbDYfP9iGKft4hqhk7grYNKRtTzKDmprYcgebJ3AVsNpQPiCM2CLUDnM5XKr2BGNUBGwQ",
  "key25": "3E3mAMDxL2a3QSokhG9r1w3hF5dWM42Z2TEgMEDT9fc97bvz2x3SRV9sSEjpL8y7EqwgRrE1aPA2sYAVvRp4pukv",
  "key26": "2jP9vAi83qfAXq5jjDueiQFek42rN71EYB29povMairgC6B6Wt1cGgDVx5PQhoqBRLdwRKCfcHU3CFoUtMXVNo58",
  "key27": "27U49vu6HLPKFLo8hMRYbDqbxdDWvjMxuL4PGXn7VPLoCrRgHkQmzJzDRiRJL8qZooY4UELYRSTWRnvbLEpMcNAJ",
  "key28": "2tzVWENNnk1P7cLCTGjHfTumfQ86HdpF5tkdGjUATWAfjuqex5meamNE8gtB5aZcmYy8uuXnJS7dMftm3tLJCyr",
  "key29": "4skiqUdVQce6Y65pCyLXhJGg51TS2owVZyZzUMUJ4po1MvbRN7pnuYr4QwkzmDpGKf4Ws6jJSQDad45Ue2ooaTLj",
  "key30": "Yeri7ArH4d6rPMmkBS4Uqr815pZXXDfHeDJthSEEydTett6UUKZSEXz5ZyddLF1G9oUzh3eQvymj7C6HTaXg4zu",
  "key31": "3AS72bgXYPauGouLYMiwY7YvjtpFaHk4nDqbv4HkWJdcZ1cCd4TWU4J9DMjXGQkv3sqd1YtjvATJ8kayqGDZz7rX",
  "key32": "56NC66JVC9JbG98HVQKWLhg5So3KPZSyHvkmH1CThSTFqRameGS9YikydeHGDqeTHNKWv3CdX6gkUrzZoRE5i6xG",
  "key33": "3ruVJrAALw7hHsWiWZGqWA5SThm6P1s68T7LkcM2xMUMchcDmujkGGkG1aFUHtXYCtCxAAuEDuhVozMHuA4ECKLv",
  "key34": "4NAPPYi2B9pNSZLZtrv6AbUm3kymdjsQj1sh47srpFhv1UBQJxnq2Z1i9nXi8QCHd4FQyVDgyLtPoGg52miZckrE",
  "key35": "Yz9Czgw9YuQN7cC2MafVWxFbXQXdZxvotfES6AJMgMU74T6YNZQftwGvF6C8dzibY6k2tv94kNu75mVWiCdnUKR",
  "key36": "3RojJbY3p4rqrCrZSUa62t2hpDEJQpcW5h1bURez5mraRsZEwFhfgGqHDjyFk77vXCUgmXQXc2Nx5VRGVfh6D8nk",
  "key37": "2emzB1wNVtfibGRfn14XodxUoxYmSh4FH5eAxYfSSYVHU2tvV7WjWRN3wRXmaYzqTf6VL6BzJWskuSVodoBcHP6v",
  "key38": "641uyyJjQU1iYq1kmQj6DoSJtbaZw2eUvVQEEyRLAgtH529LRAATRmHY2f4fkzGXJRWQdfJbjRhqz2jucQ4YNWZZ",
  "key39": "3EfyeQfbsRKDrHVPpFkfEKpJSjK5n1TKXr2n83Ltwh7qHeWmo4C5i6CtqaahAbDBLRUf5YCxG4nDJnRWPn92PZrN",
  "key40": "5TW4xPYEMGno6nFLF7xtKEroDy2cfrKsVANq8et2BBf1rCGHHuZ3mACVM4kftBvPx5S8QJa9UtFsKPxx5aQEMu1u",
  "key41": "3KQmxh7q5KEvsUB9sJaXDQNih4LiLhtsWzNf4tenGYsVK3XH8P6bxeLGD8bZiZPsQh9aKbtgJh29EZTrMZP7J39R",
  "key42": "kQMaZtY8yXxQLkCwJppk5yoLbMHPiHEjhQcJSMWbbF13HES1duJy1Cg1i8VcZmT9g1aBR6BokZdpXUSyP7aGQAj",
  "key43": "2ziYa2MNHUo834si8KJA9UY6pHAxmjCwwPwv5DqCeTimXkEynCt2VDJCPD9V4uTpoMB6xBYvMQxj7bCs3xoEURHq",
  "key44": "5Gfmvg5Hrre9nnbP9ZvqzakV3pssYGT3ktVL9RFuHNts1ERAqcb4ugQBApj1p6MQT9pS51xHUaQzP3uR9t2VLBrS",
  "key45": "48LTcVXBtPc4taj2UPm6iAm17CTDFzmChUBbUvXJ2MqyvFQuHaN7zoSATSUL3YjTwVdgz3dmDJ3to1CeNFxbuz6U",
  "key46": "2zT9ZRUvXA7vigWGsk1PVH44orcAufrztSDnWdy4p1QP5ijBJ4k5WgfWePbDkCoLaiF8NTFMrvuJYFis3n7kFGah",
  "key47": "4PKBWzh9vyoRJ8KXJViE4vavTKZb5s1aiiKzaD2QXsLmGuvmZEpJZtrCVVFC512JA7GgGuBf6seressmNUAXJRrB"
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

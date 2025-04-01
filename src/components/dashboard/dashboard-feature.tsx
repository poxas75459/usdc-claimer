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
    "2TQE4AN21rgcE7SmwR92SDvFghXSeexHomoitXtYhckmamQxrdmG5273W8g9QYXYA3xDVzoN8rETkuoYjLef4T1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xv94ZGyFsXpiBgHwe1MNpURhxVopqNvTKyUDhT2NAibPyu8jh2i6iFHuPpCyLGPwu5r35829L29taU9rHF5CqL7",
  "key1": "5jNE479K8pm8w4j8b81dUHVYnxYCzyNSYrjMxVopXfZikt2pvq1e2TTyza9YaRmincKUo9dr2uyEdK2zYXgvV5TL",
  "key2": "654Npoz1AWg51nNgfqukXJJD1FVBXdrmqDX4nNnHwTJiCmHcQbk4vhNxtheBsCdxL7m2tKZSTzeG9KvaXcQoKx3P",
  "key3": "4CFt11T2toHzjJGQUfESJ917QHs8GSBzT18XZX1FTzVsCbsrq5ioty9jAjWMBzkEx26UgNWAyPwmC3q5RpG9C6nN",
  "key4": "4dHGZHRHSLCCXyFFwpzaYGQWQgBDAxEcLMo3rQmJEEusRRhpsuiwdLxvbVUWGPb5ZCaaBrjwV7jfYNJKiN5nLGEx",
  "key5": "ygunFRx7gyAnitVUaUodnuHLzcYzCLsfmZuSKeoVUp8KB6HAUXT6fuYdENgnh9G2mscquMSjm8rQhxMqE9ghyZn",
  "key6": "3dFQ2SWUuU1LDYBfoCtFF37zcjnDQ5S5sWM28cWfwps6BTfKwpkt9THFAkErJpwSmvmW8QBR3pGXjfSu7wNjYbFo",
  "key7": "64FJXqEkn8FMbCJtW8ifYNaTBKSrfXrxJnd23GNJjDFSLKxSEt4cBcchNkjGCiMMiYrgn26PKsovBmRzmKGnDPrD",
  "key8": "2NfzasTVeLmyJ9cN5gjyR5Uk4DdFyijErvKWF7rd1MrfGYG3PGHNpMVZDUwzV8DfHXot4poAKAs8t1UhydBz9aAY",
  "key9": "3hyEdFYegVeHzyuH9eHGVGt8ySARGne8FQqg94BukYsD3oaR3LUkpULNqoqqQNkdiUZtcUToWGkFdgiT8zG5kVgv",
  "key10": "3WimR92u4253bFDKmYnWFsyqEsg6Nbmw2tVunkRnN83We8p4UR5eC8FtQANkKJ5XFdvn9z56hQJpUH9HkvqwxtKe",
  "key11": "2JMqDHBALi8uLePzsGnPamo9RzsSoeEB7dixyqGQwEuqg3u6DcFxhcZPruUgi2MrTV5hUJf91ESaTEHCurFtXhdg",
  "key12": "4MqKJ5qqiqNQNp1XTUWMJ6PY4U1YT7MHUh6bb2kfUAnMw2BveAbKmt4uvQXM1AxbuV4RsHUeVa5HpsQ4uQL1e9Gn",
  "key13": "5vLVuuLMVwmstsXaywKFgR2Dv1AoLdsVtD5towQ6LUEhnRPm62bfkj6zMEWQeZZpP85KkhJkF8uBKQHNbccmsG8D",
  "key14": "2bNa3m4BaGgzDV9p85Ng3LXr5sGtzGuBjpHDE91uThD5RwrVLuQ6m7USK5jLUzWtgTowDJRYXw8RnsLUhvwyvWJd",
  "key15": "46mCpK4MsYCPDsdXocPHiAW2Pj6ktF3CgFnXiA3KNxek1RXsPaq7zPnmyFbs9JANWL4dHLiVFC1QQXnTjKCog2Vn",
  "key16": "3FbFprVyS6VayNuG2YpufdoEQ9CnzUyShBPxaiHendSkNaLkrtPv74znTi7FShd2x8njb6zYiqosstRHGGX9jQPU",
  "key17": "4NDSQ7AzQEuSB5HHgHHEr3BBLPmuTacpKhQXFuy8hh73S7w9uWaySYZcVT1hbX8yc1tmKiNhWEaYcbk85PGahfS7",
  "key18": "wi9zqNiK1GN8CoMh93TmrHkxwZGsX4YBfkwq5dh2SQ1CjSTKYEEACthsZTbwTHpqrWqSDHn3etCk8qqDMWX6Vph",
  "key19": "5i6UUHiu4Vm66PGYTapsXzDvGhzG61ftEXtzr8JmQ3mHMtmCn9VAz7mEWt9wZaDXGfunhVWbrckrXbWXBR8dXWRe",
  "key20": "3jJm9wHjZy6CTbjryK9ER1NXvWVxNQpzDpoAQmWZWzAHUC12jgsNBRVCcr2rjyPy3sec9VBysEhrvrqwoVSW6HUj",
  "key21": "5AeanhD8WZwo5C3XvW92F1ingTQcNbQobgaZur1wttC3fTsfj8KcCeFQ5YVEysr7iKGGkT3RDpPGJ43MvScpFaxk",
  "key22": "B9gWNhwK8vmH5aHBwa3mUFw41YoxUxNwiyWc5EhHPdJSne7WcU32HCqqiaCDR9Hz85ELceDDzXCWrR5Aga7vWNh",
  "key23": "4Z1Feuavsu1v67E9m9BYyS5dSR9W7hBXkNTaYpmREfxaHSCRz6uRwgPVbysCsWGYQ6djivEwxR4o51KPYMEgw4Za",
  "key24": "3tC8z9bFZWGKnQhTMro6EGCXnLTCX27rznKY3odP1Ewm8TUQPkeNzMhnkZDiWz5RumwG1XuoNe7F3vaMCmBdAjEw",
  "key25": "5PVqdgLexLqeQU2WouthgXE5SiKsgdWwMn3WmaRnWiz3uPeRWDeR78BE9tZdLpLqVg6ihPps3N11VfNeZT8xfJpY",
  "key26": "3vd9SGxEcTJF3fExaMatvp3THWRrqqDE71PMvNdJnYqXMfvon3V6YB5YSYPhMdaUSL9Zgu48EmtyNbr61hZxsjXL",
  "key27": "2rpw9Qnu5xZoeiqeCXFU5WvkDiUNMn3EVnZTqpy9cymumdp2eEdifYgRHDaoCfHEWbnAJ95fqkWtviaJkDvKvJ8f",
  "key28": "3f3iYpPpEtij3LwrEni9ieegVjMJd8DkrSbP3kavfjkx3URPaEttcarLsR2McWj2V4YGwSo3aewq8gGXmuB4JBo5",
  "key29": "4LDGrxHPuGqzFRMHaHFmcKXQqgwz8PugmU29qRSLAGjUPaxtA441KKi2aqXS5hsvhoeEd4xDhZZgzoDQZzh25ckG",
  "key30": "5qZ8htMynePAzxS5xDF5PPAQCgYMgwhLnWHY9H64Bc71tpjDzZjkCrpav6GNA38EK2B8GzJ9H9EHJRgh279sKgqf",
  "key31": "4GvJPFuksJJvzxWq9LqtQwRB9WaPLueLSZsMnCoWcLRtyErVqJKeLFspT9Qmxu68XwZW8GU4VkMWkCmEf6voaEfN",
  "key32": "29g7yYpbSLtn4tnDjowgVuQa8UK2NYRPh6VKDyXz1qzVv7ofJK2rMvXVY5g3PecDtGyT11yQg8FiwLNuunAp3rdw",
  "key33": "3XfyE2CWPW4jF37DbYhTF8WHA39e4GtwRsWKh6Sw2A8zt8cruQMUBUyQHzuF5t6FtvLRqZ9dstqDM9m9gpQFCdEW",
  "key34": "2t25Ap3dw2jVqqpVRsBB3YJC2mWNrRYx3xMLf87W9trTFkcwK9uGqyJbDYNcr9Sps79Ddsi9tS3fhviEBSta2sqR",
  "key35": "kfRhCStvvURBvipp44oBrVe1NpzJ6DhesrX9K92tVB9WpwaudfRcGeuSMjVX5wSNe6hVsybuuZdTzgzP5odCBqw",
  "key36": "64G58niGnkYf16ByRPXqr4rwMvHp1Vy976ZGjrhTcyKMcZiEX4KW9WFiShqhaRVtztuDvt39cRo98JRmQKWUfLdC",
  "key37": "5iBrKogtiwWZUBjyAs9GyStxtoPcYPts4Cf2mvYvTdJBTqbe6r745Z5jjbQzZVYv4euFEAcqo6jmXbbiL2bVo7AK",
  "key38": "5cAbWRsLSyMdh35hKMp1zo8dHmsyXtUSvLqhcmNfyBHm339kzMKKjkaHkEydc7i4RiNryNqbRcB155XSrvVe4oJY"
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

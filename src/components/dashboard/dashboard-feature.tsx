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
    "5nykY9EFgcv4Tk7pXabnkLfjDaGSsLEHEZVDpchGFv5azUr8r2Kw9g8D2GyLPzqRQwubzbsiYMh6si9aYvGmDbGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHjAep2d9dJAVEiGoiXXYymwVdHECEQyogdiLjVPLVAMDT5anG83k5nWrcqTc5vXyUMvjQPMDyjRG5F399tARKu",
  "key1": "5KnC3wSYwMuun4uQfy1CqvfXrFsbzU6gMKcDhq4Qgd3v865dSp2zb8VeHU4urTksqwPV7ptoV6nQhd2MAEQCjjBN",
  "key2": "YuRHdfecCoq7aKxSPhWpGLNHNbjSud9K3vvvXdjAZmjdnYzTfLBTZVTbfpBccDMTJXtiSncyi9mqVFz8QPTWE4S",
  "key3": "4AxR2sWXnfy4pPDW8cLMiR9dbxgeYmBXaM7iQGpg6y3DPFxYBHwDezGvAiXi4FACyDRKc7qWzVSq5DvKEHX7qeUZ",
  "key4": "L8BtDwqFGfGvNga6DjCUkJUVTjSQhUcjJgGxpV8JGiG6sZevTfEdWBgEzBUszpS2Ef6MEk57jU6oEDrAzrhaWUZ",
  "key5": "4TQ5K1DMmLXXc1GRKx8LAKTMrvdS8ByZhBVvoUTh1nQdnoe3S95MMgSVascvFfTdr7uxoPWFCFtCJvtUmGxWssdK",
  "key6": "5rp13Rp9gV952uZ3FCqHFvLsVcGNw8UaJJwE35H8rZeCEsSo1sNfF8imT6sYjZy4yQGoZRLJipRp8YevqBhUPQFZ",
  "key7": "7gMTWZcawJWZNPaRdmvjCQCKmFyrds1D6wz6wvYdAj2iDEjf4FSRM6pUT4F5bHrx3x1S7zK53VyCSkHC2VuvYuS",
  "key8": "5yFMSSJukKSDVyghrW4YvVWQtKvs3EDx8rCBtHM76yxeJL3wpP7ejHdCGhqZNv36vm9t7yLPdZbvdCeMr8y3viUe",
  "key9": "23akbaRykTG2LDwGkA2paNzS1k2gJdUiJZNf83L9htt356eFxZKi9fTdt7aQinta5NZyaJphSzaQiuKiWHHwSzP4",
  "key10": "5y4T9zyzYWccBnT5Waq7nXMBGCP7XcX1eACUS5RsBCmTh8nQMreqqzQty22eBG6U7ESsae8wAsXAMddKPtB2N34x",
  "key11": "2moc928SYnaYVH1e1E3teXY21XdTr31PwUSj8Ei38DxMEHYhCfJNvQFhgrGboy9yaqcUpzXPf5RvfcnB2dwpD9wf",
  "key12": "5tpVYfgwdKgykqmNsusyeE2SRJrqyRbq6yZc9VhsCQShCCLypNiW4kUsVXYcmZsKePZJqWhq2cjvWXrwCR7SVKWX",
  "key13": "4jde7YN8stdXPW9t1c2EhTt4g9wB4qffSdHjCEgYnGmKaJcU8cmBb4eK5PDmsHXbSzE5kf4CKHdLK7teXns42cgR",
  "key14": "5eASEbid53zxJghMV48oawd3jvTVESxgenWriKN66ARgQCj2exYAeHEVwCfqeYPVjUNg7qSYYeRD4hQB8zd9gV7T",
  "key15": "3mDSmv5Pn8zHu2n17FnAcm5wGGVWXHv4qb83JNR9m7m2SK1rTmzCWPFUjm4qkeqHRPYjo9hqZSjjX4GpyUqtiCzf",
  "key16": "4TAKDp5fG4ojZwum7rUepgeGTnP2qKJm5dZqpTfuwYrPRUoR64e8w2S4pQBpQzYhf9WE3wniVvi9k7oe5aEiAm57",
  "key17": "T1g5Eu3knZpFGwU5gP23mdMFKom5WDT6doc5g15Bgv9JxZdz8VcQrmtzMaPFnGv366fXB4peMzDNX6EQiF41Ui1",
  "key18": "4AeZYhUd9ShTJbMWZjuZedpYq72eX1QjKRUi2myyhKJxbRaKPrSy5My8XcZ8GXPVuNQzNDL14ogV1Tqcwp2Gyo5",
  "key19": "3NAfp7bo2goBHxRLrZ1j2Be2Tmp7X1vYrvem6V1UenMf1fVz97UUfQtTPRa4DR5YbXQZtqcZcG6hjXESNNgLbF4D",
  "key20": "3xKju3SjE48r8K7e1TkrGUNw6wA3pJpg5Nuo62UAdEx12FwCA6VJGJAbDVQQSTUTMzWUEz6t1bwuUFio9hXW8Tmw",
  "key21": "5qkns9aeafqtcaWgTwZv7z3MxcPM7n9DqL9EBjLkxfefgeSA1P8En3jz6vzs7PTfM9cTXTxkcdPp8cLtaqnNi9NR",
  "key22": "5vq79oc1hpqaySd6Vb7uGQvFV7LFKSW8z3M12LdnC9QtjFRFeVbE9sTnT3UFuPCpUX6F5RcQnpmssgc8Zho6cchu",
  "key23": "5M6CtKQn1LucUqLARDxKf1Z16KV81BcNvCeJAMW4fhWem8uL92Y9Wf8QgHKpkkb2Lkzu5HJG1FqX3RNH8Uj94jiz",
  "key24": "PdKKFLxo9okPDQvMiu3KkjqiEdN2e9FufnVbVSYsuBhRRfX8uRif3yXiahNbGkCMDZvBhv5QLCKtGCsTrzmm7Ls",
  "key25": "3REbasnBmfFy1V6The2dqw3PKQoipWioTxV5REPfimdHZM15Q5zr1YB15P6Kgmn5W1jEhShCuZ9eTjh7UfvxZdw1",
  "key26": "4AAkVL5pTHga6G5aiPKixK1NVAkxGsG3XDkEiyVpkzKGBhU7d5vRz5LkHxug5bPNggoBzqwKxyhfihg72SvhBo5x",
  "key27": "62opBrkYJvduCBBmnUH3zC4ZVLjUDT73d6tcQUqZRGWQVvXyL43g1KWXDj8jH1RPQJ6ufCNhucyQAMB6DjV5kprb",
  "key28": "5Ko8CfrrgtpoJxdTxBNGhTM3BDxkdnxhfWovw6TCy5JnBDGe5WM4pAi2LSMa658nChMX5kkdQjkM4QX6wPLvhsad",
  "key29": "2kYHvNuv9k45ZQVAL9NtCzPTFQzSpHEXYKuHheJoEQ9FTdyGnGQy4K3BTNHU9gX8w2FtJQUin5c2ii5RjixYjdxd",
  "key30": "5ZPZERtmGJipuXvjf1dTeXEE3wK2mEdtAGp7q97K7MvYjmeXM2WwjhCyWawyTR5kNozpWpPNfeMqSvVekaVAg5gx",
  "key31": "2eeXAKLfxFCERiCktvLmtSGuko4Y6ghurKhcYRiaLwmRk6L8QZ4zDJj8b45ThjVX8VgJM3s9qKED8wwj9k1mjMxc",
  "key32": "5guD7vek7bEGLrrkePvcyqcAWDScrSdDwW43axDhwfCjJX173phNjFUAWinZwHrpBmswiRP3tXAbzRW5jRJ22Lpe",
  "key33": "4ujc1xcTPvid8B19wXnjmN5EnJVCVRyuJ3nJvXKcVNozsT9MSokRdh2LqAcEQXjF74mq7Vrth3jeJiqjb5Np7pjz",
  "key34": "22K372xzQmh5wuvQC5w4H5eP9hYM1UJHYSgmy5TeJjkUSZmLprXWaTHiNi6xd6c4JNwf7AyBex4cJmtxpiNeq25V",
  "key35": "5m6F95L31gyMz8nxnHmYyX42qrzRTu2JVE7KZNSWTrkfDb1UpLFvsaZrJ7bd5PZ9Z2GSiWC3LdB9vG8hrefJDM9z",
  "key36": "4SxUDMdoPoAbCguPUqgj1DZNUXnLPo47prCKR1pMZ8xXwUGTtSghPiCUzx72EFdNKin9DJ6QqX4MoHwFEkWmMY7n",
  "key37": "t8Lo8oNBs8WEdsGbkbq8XX3ohXi7xfSxz6hiGNEBsyFZb1hDwEwD6RJkrTCQ4dmBjq3K9htDys4x63GJ2Uk8FLE"
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

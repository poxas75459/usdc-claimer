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
    "4A9xKd7rDe7FC1xsx21vxbGkvWm2sXV6c6xVF4HV2r2Hg3spbyceZe2ULAdQqBjXeyLsPMH5BNovq7Rzesaookep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hek754UxK88axXF5shoFuRAxXiLVb2j8vNTzxAMv9jE3kJFkMxr9Gs7Ts8LxVhEHSvbEE4ZoEvyoqoJ7iPKVZa5",
  "key1": "32izy35nYkocnChJFeeKKwzgbGNwk6Zc4ntwFDaMJYNkqMgc5XkVVw29jmdB9ZRQ1jf7FKuK6fgRR2u93Br4npDh",
  "key2": "3VF5QivdGewqCYgq2BF7VrKrXbgXqGiHuv9GzEBf7mnQwUBCK2fjDRLjWxdGFEm8oXpDPiRLMQJcnuP4r14eausd",
  "key3": "4EwNVa6AX6H2b8H56S1hxDZUTzHgsLSAqd7npey2ZT8cL4nJkfJjXkUzS8fzqtwoVZnervmARuSHr1kzevBgjYkU",
  "key4": "fHUYYoBdFFnLWFHWZV5GygEhGpnEnNnjAQ2ZjBJ7BSBYbFh9XzX4yNwuLCEEHQmjsB8fimCykxSreGuDfRycmzU",
  "key5": "4eyeDDU6HDZoKh3jVomWdQAS4NFRjcCNWQ6nbLwVSvnmiqSbQBAywPCvQCLBgeQp9KMJ4CW4gMbUqacHrn9uKCYi",
  "key6": "4SREfeVMKhCeZE2tBZCfxfiCZ7nRgM75QAitavkgNaqQwVQPBD72FrEXhyqyRJ4ZYkX9zoeHzVw8AB4GSwf1edkH",
  "key7": "4duwvNg7ccvyHUdDWoBuVqM3CXJxTgxZDYiUEmwzu3cGyGr4xvR67ugSjgRz8cc2grUQYHVhvVpgjNHbQBKjdNJe",
  "key8": "5Zzu89e9pHNrFRgfkd6AJMRniravR9hkR33S1xdpiT2oy2Qmif3FRAXsRD3TQMHxJL8JwdyriUVBdx1iFqn89awo",
  "key9": "5Dp2oCVXnRBhGVeSyhqcpkTjnZuR9UpoCVn3zQzjuj2h4jXDUyDVNmPZo53v4UuKEjZujrFhh98FsoHMHHpUJv92",
  "key10": "2ufpQZimd2AGfyd4ickbPcFNN2Fexwjsw4oVWtKkupjpiV3QKCzRy6yw53QSbBQZQcNQVpARyBjcXzPMbjUaxBm6",
  "key11": "5Pwns8dJYmv93uqWUtD6w1y6kUtp43hYnhdFAUAZNx9LGCoAgjLCQ9QFZFNta2vXb8vkUrkdMsD8mMy6WBRD8cGz",
  "key12": "4z7i5EfUz4mC1xEKa28u4YnBDmmvqYNPMD43aduy67QX9UxrZ564jHZ5yvEaEeizZqmeM1Bk98mGKjRfjkPQHBJ",
  "key13": "FMHXeQqgZm5QuyR8pncvW6Sr3h2KpkbzUtyBBysPfAkRoae3iC4Uwuj2MUpvnirfjimPkMfeQQPyrN6bYZngc5J",
  "key14": "4nbtfVouayecEF1s7gSm39Cx6i4fKTLp8fuFPJFSEizivLUzS5YAzCKeLFK6VY77ebaKRd9rTMUCKjAhfwRh77SS",
  "key15": "dnfFDaQriHmwzDFB1HQ2psqkbz154RvKEb3eojf8nr18a18wyLNdNDpUDDP5iWAs14QwDU4q92vhE9bJ24ibf7g",
  "key16": "5E7gHi2fctLhCe5YhinLki75Nzemkwg1kvReN8AVUABupTdG4YVf6wZ3M2q4vL5nBWUqzvBHdK8faUGDW5wyP94s",
  "key17": "4j6HdgVuuv53Dda98nHKDpM7Q2UpCpLLokVGmjmeCnJaJs7LRDr9Axeuwod5QnFEenJListMHfG5VLjCxEBBiDsB",
  "key18": "LmQyTfgUQCf4DVQ1pqnLR7boNPbTJ2hHeMpD8P5FN2tG86SHXejBziUsvj2pN9JfYto5sqk537MCWYdBk6hqdr2",
  "key19": "3kh8kZpfUmZ525TFhhHxSSEhDQwF6cZ1ygtaCe2kWKu3619yvBd6ii7JyJvbzESvxcDwLM2sbaALQMA9aJ8xVmX4",
  "key20": "3aLdv6HwXADiQfiBRdcNTGicPyX7MRqUcmy4MbLnXSbgHbb9ELregGwsVvxPhLspA99t2mifVAhoGXtiXugAwZpV",
  "key21": "2yKQqGZfaAJP8RcKJdQEfhkAyzPAoyU9HhwANxguhsLaVLAfoJLun2AkTD7SwTb2PSSHaP4aLrtHRCfdoFyFVgUb",
  "key22": "KQ4N4QQb42TfcaGiHRD9UPVQAhKP8sqQhGwn9udfNpQTrrEB2YhLTDU9fz5tVMqsNhgJLaSK6879frz3Wx4BbMh",
  "key23": "2a3UJmdbBxiySYBFctmjZ1ZCHEWZCabD3fLRvA24duyDoKvZyAa4QM2xcKqbPJv29wszawCs2ATpPr2goSE1ENwN",
  "key24": "3NQkBisAkdEPRCyDSsnYahu4b8DNruzu1XS6MNZ4pEcpAY6oR5r3ZLYXozyCidipbf79V3oiw48o95srJ8q5Y962",
  "key25": "d7oDU5Ad7aj3xh1meNmsuJXg2JzjcE8CexxKJPg4PxzCsJjUhe16QGQy57ygbKAQiSZryaWB9t2RtRXkvqsda6p",
  "key26": "dxLEFe2asg6Qz8gPSKLnQtv6hLZJKSe1uw1DXmHWyY2mHGbU1NLzpEeMQnkMMkKBRrC9QGxBLmM7p6SBh2aupP8",
  "key27": "5RqzjoxtLgZtZXgnPwwck1RxPeg7X3Z98ZVjw1HV76VLX6JKWQLe4niZESkhBtjttiSzKS4PGZT6JVfqZAA3RP39",
  "key28": "5ZCa9BzuJYhfUTpGFvN6nKWtYUEYpdecMJaDfcekyTU4vptBKbf582cstNqJL9AoDZ2nzB5QF9fhhqfpMJqzfQhx",
  "key29": "58bdGT6TZJcztUJogaRS1WaPEQLViQSMYJrPxn8tzCNWLHkraeFWKHWrSVA83diggx7Qr5X19WpAXfQD7Vbtkre4",
  "key30": "3kYRHukNBmyvKzJi8evyqRYdB7T32HkJpGUcGVAB8XJKhLG793xfkBxLpuzyfeWLaAkLxn4uyuunGjMv9SUYo1C8",
  "key31": "5SBduL4h4dRztxiyf4aFBt3x6ek6sKzCXP5U7wBy6a6cFV4nP5EoDJ557KFz5mjEwfbEVL4iPpLk6KRQgJjzDtef",
  "key32": "26EhKAsrYxbsTRTCXL97q8qP8ozYadZfhKhs3aAfs8JF4btbYwNXtRQdg9Cr5ig4RcWQ3rXSR4TK9n4JnjubRA4f",
  "key33": "5oHKg8s3MSSenMKPHeox64WEPZLzpFmgYL3XfePiRrq5DJKvsYepGEkE5Q58RspSDHBJSzY5P2suJKFoMTPQkG63",
  "key34": "FaPgbAiLkXJFNMsekhCA7A76eHJviHHB6QvUnMpSL4orBguUNdnftqnJkqdxKc4iAAtU4obELSH54dWGn9ybDRS",
  "key35": "jMZVhVnRt2PPJCtduECLTgKULJc6HeFmQDL1XSnCFaC8Nt9SJdr71AxyipQUcSC9jLcADPWFEnxgBGMKH7Yz3zE",
  "key36": "3rgXsBVnkmMzi3f4LdDkj6YU4Ct549fzF4iSBvkjJW9E3ACbpULgc7vQwUJzL379UzdcaRVCqXciKMK1tRQx9snG",
  "key37": "2kAhVoqx7YwmxasWnXBPFaTVkau9DoyT8yU2nJQd9gqVFihw6uN5HVn1gNXroYrTwEnz5nQr1oykkYieB2cqb1Lu",
  "key38": "29p6wyt3z8fCk9UEHKsn6r8VMbvccK2cYK6eT2HQPDcxfaAsEARZWthCcdFUDKDg4ZUzrhfbh5eiyMzYk63v3rVb",
  "key39": "4nqqESf7TCnpdPMuk7tiP5bsuXiQkKDohJmKrhAno7sz5icYsjXtdwKRZBWAKZtxqq4dRgtwCNyV566zmHtwZ7Kd",
  "key40": "4nuYHMcCNPkbXKY3S1KouSc1hq9uzZFpvRUj8vD86HgR1uRyrMfawb9nS6CdkU4xJsE4bqULWohRqeeYjsFJnnbY",
  "key41": "cmzFURVdfq6rSqWbnoNgvDzE6q6G5HRjvsb6dPXTBcZWHraKFeZmLDHz1fpfAD8Agd2Z3Qe7bhvjQG49eYNNH44",
  "key42": "5s8FzHN4cV98gQHH9qnSqEXWFWKQ7WypLc3bzpKCdkov9DrR5uoUVTN1J9F8VPDFEWE2rZNdTnVQexTJ66pmMTaz",
  "key43": "5eFgkrWDZPg9TYzUwHHGZQJJb93ZGGfmfHjF6pRam7D42z6qd4boJJLnaC3YbWFmRBBMHHdNNcVPGU8KDxbY9Vay",
  "key44": "4QseYjBj2orfVfZpTzGZJJ5q6XhnetBz4tEh1tHHbEDMWpCJ9P4yvynKKrbhxVr32FD6PNifU7yGYsfw9PruQ1s5",
  "key45": "WaEbhrUmwwvnvxupUo4hHupYc9Y5hqpR5FzWTXdPGZvKnHGzM9eRbwcks1gos8tJChqwhoW4GdbokdyHbZr3E7S",
  "key46": "49GTHpCPCSPBSNmiNA8EstKKKkwefMyRzcPkb8fR5zPwTtGPj72zXKWmHVTAqjjfhxTERkiRE3AGeiLxh7kodM9j"
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

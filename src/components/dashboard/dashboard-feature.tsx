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
    "2qZyQybK1iHDhD9jK2FYy4kENHsdWLxGrrG4cJr3GaiTqNh8kA7WpFYFzJdjYezZxoH8qxpumzCAbgUHMhfqFZYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5px4piK482ogVgPoQnAc4Vqr9r4eYxLe8qYyfoBZQ7WWvQimK6GejbENEHdYs8wHSc4731bXkMa1PU7ThuTnoc8j",
  "key1": "3vjXu23s6cwjr4dGaGGXBZTg7AGY6YmZUvDzpWxFoVas5cUWPHq63kpCpXrMvb4N1cuvK6pae7TCMN7Y5mVwK8ud",
  "key2": "4HpNnBfa4GDF4NaYGxtb1AjZmwxSN2on7XqcdfSSUX2EMQ6AU5mGP98uPjD1i2n1HyYqjYPPy1ycQao3iv6DVJZF",
  "key3": "4vfbU5NTL7zXVyBpm3T5YLXV4n7XELhRCJMjjB3bppSaszNJxQF21nVrqC1Pq7Jhn1qx294ULrXtwkfbNyRJhNvR",
  "key4": "679YQ8DATBGoYQSb4vmQGpmcHnMYeYDPGdbjqYWwgvpsVMJYiGYGUsGWp75kykUoDz3UUiErvgamarBesmqWfLh7",
  "key5": "QV7jZhjoxvjSUHeZW8MpoSXgc1qA8BL9UmXD5ck3tXabSNaZxd6XNRUi96Lgs3e7kUQuXstYcUunK6HsqxNsTqY",
  "key6": "5DcZ9HhWg6LQPJ7JQZktfH6kfoMqRPEascw9zx96cMomRPk85kbwCK6QxmjewWArZ4BjcSZbb1nF9CLzizsPzYW",
  "key7": "2Kc7fWNfDwCY4pz1EBvCQ429yDmXJg66HyDhVJyvAHEUa6FCA7pWyc23Cdgqmj5JxKEZXvhGBRRq6QRRu61KieEy",
  "key8": "2ne1GVS899mX21EDyyc7iJPE2PGiFsxoYuTXzJrFYRf19f6K1uukWp6jMzKN2zKpAAxkKHJu6u3hdFBKGMNiZgX4",
  "key9": "4QdtdSeUuUhhnCFU3KNnW7rFfKrQVittmGMHvVFKuKAVfm9LDmRrkJZGj1sC3Hc9YxNwLCjsiywYiuYED97K1z5W",
  "key10": "4tUH7mdbf2MM75Yg1soJjaYotyS3evYuXDCaoZ5wLFHqPUXXbap4kH4TSsXXXUnfBSeignJd8oAaQUvBNZtvdFr2",
  "key11": "37euR61e8CcUSUDRrmm6arYnntbgYF3cLPsvZeo7xJ6fLXK5scSih614BpaUFiGRaaZUtnC7XgdGy8qy2KYQjmTK",
  "key12": "5u8wxpbszmh3W2WsZZN1TUSQQVvqo5ZqJaBVPdScYFuwqqe7ppLZYwPwVK2PgHbTKhm64LNeU7rvM2LjXHNfg2kH",
  "key13": "3idK33idRngJj9fDcPVUzqBsvHzBVYWjJtBB9oejYvrQZzxNgTZfYKfXgR3iMy8wNdyCC8HZGD3zr5LxiqbYfCeG",
  "key14": "2otZ3LB2xR1C5oqxvknQG3H2K2WSKs4e7ViLxxmid7JyeXGGgJ3tZkTXTgwN8jRUveLgHdhNbvRXNEP8d3mRX9CS",
  "key15": "5Q5cHKTGo4bfEN38zcMTvWPRzoUmYx86q8JkyUMXCjPY2kxH6jDzvpRfX991UfbhMGY4kSPWv4Q1VGZ7qgk4z7Bb",
  "key16": "4DGdYFs7ar7NdY7Hz3uRaQFUTX4vpRF3gPAKLnwxpTBXXJC4qK9QexFP2HS6pcNxRNvhfovL9mF9bCEv7xxVhfjc",
  "key17": "ug5PVN4rrL977LzHsxs8datTjHTDXEdGRoZtvBZwh4SACyu62wGTjW9VBw2t3LjGnyTVQY52TaYYPaW4xpdH8XX",
  "key18": "5iBrwSUsqwT9hFnHNazAufhubaRwuhqSouKmK49UjRk9bTkCUJRBC85DEeHAb1RWme9i46yBZgZfMBAicpgjZDiR",
  "key19": "1pEDG7PBqP8tfx62HN27AdZ74TALx9Zmxfb2oyMzuuKRUn8Aimb3xXJSmSsnukS2oAaBZjsTvKokZgfbP5cBePb",
  "key20": "2tKvA6wqy8MX1m4TaeKcsvWtRVo4hHDWybSRAnL7vnmkhZqATRV5zPgbcEEb9CpFnBKBostejDd1wbu5nuh4njWp",
  "key21": "3TZeHVhfJGH8SDjxUfCgaEshVhL4iJC8J8zqD26fQJmrDmkZrLnbx8JkbD5YZQHhnfKj9qvsM6HmGRjfvzua9R9f",
  "key22": "5AsPGnYpRC4RLeFG5Aq8orV2RyD6GbFq2og1mhXApB9QqFNzzrw3YUm2qCGAAgEQYpGTjtJcfD8KFLAGf1JHPXzU",
  "key23": "4TXoA7hGQJomiUPv3Jd5FnAdpZVABVe6SmGXRTirkuWMoF1PozJtzhihNGytTb8AKz4GSvf9szdEPpHjZAZnzXWu",
  "key24": "2s7hJDymkM6jffrEqSVWRV8GQArqsZm3REu4c2zes6KFt7mtX9WMVpiM3ip8GTz2LVJ8wZF8qH7iJGMJJXrMh6Yx",
  "key25": "5LwyFxihTkEEw9cd7RUNXr6839so7EE5gg8As6qipJyQxQBuYFXojyTjrgVWSqWk5WPvAm7s2NMxf9usBwM1Y5CB",
  "key26": "oAGaysqZL3gEaTEBzG7ZM2G7Mnt96uJ9CbM2qbcEihew55fVhBNTL2NonNjdz12EGgsznCEjHLKeenn51JsjsYV",
  "key27": "3pCFAh5uh829iA1K9eqcieckhjtm8ckXHsh5gsaRSfa8KUj3LMNy4zsUbyrbuyL2dpAkyep3wfJP4KPdGQrEUw8f",
  "key28": "BRawm9urgmizWkwsP96mPPYtgpLKGts8WVqd6cHmRWW8n2NwJ6XfEr3qPYtaugaSgbYYejrzBp7AJ9bRyh8z8CX",
  "key29": "b2TJ5PgwaDhJV9gDqxWZMMEX3tkmqJzpdj3aGPJ6iNjRDetbX2qwcwW5cCeRCq4CNk7WL9zzYYsBcSgqMFebQnc",
  "key30": "4FUxDuEbbkZHCg5CiQtgSLoNvedKUPo1EXdpMzCYFLhxaWJQb5L6TAhAA3ewKUpAiEyYWLe1KEwFPKdytVX6jqYU",
  "key31": "47fEHr13Xauo78S1NzDjKAJm5mXSELyisw9PP1yyKjPunvq95ZbpXLheXhhty3BGHVbeopwdERD4T8d28cDJHxba",
  "key32": "3fpfiHY2PSSmpqrDA9dgRhXLM4KPS8ZFYDNiHzQcFQbqsr7DW6fEpUBWm7Tqx5aPeem1tNUMHiKZSipsojpR63bx",
  "key33": "4Z9fuCPjzcJzVUgH3U528MD9MYHwH7e1XB2HDLiZHwdYg1AWNuhFqoaxrQVyWYVHGLJC4xg8jWECFh5qMjZjCyhn",
  "key34": "5SKfCymDYXQF172U8frhYcZN1WygimLRN4rqKV8QN1hny8Gxxyhke17Ra2At5eKHo4D46qvj5ofNx7u19s86bHCt",
  "key35": "PqEkUKdCk6TZpN4fUekC58HJR3rjQEut6JEHbWStNWHPgL84t14BxH2h2WqFL5CYia6EkyYmoxdacXMCVYq9Pqn",
  "key36": "4RNWai5ESexvvPKHbpfShHPHkcJrbxw8D5yFTrWgA1pUfVaHjPDHXn6NRQSxrBHQm8co2nue9SL7aLBUUXdmPDJh",
  "key37": "4yaHvNhowMck3DKmpsKVvUouMaTtz8g5Nmds6abJe2oAHadMkJ4GaurpSuWdW9F6z4iUt9H5TPmYRwymnBC46oL4",
  "key38": "1dVAovRUMoNX7vGhzMbf13sQjEvbbHKn4UjmEoK32fhWPy5no9xrWbHhTRRSnGJ8vihoGQjVTcFHyJBYSMi3sdc"
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

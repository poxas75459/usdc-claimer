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
    "irGFAmRqWNPwQhy5nqWTMqAdzje1WSfuK11JAdSH4ZnsSXcxMZ236NXtjeGz5Q4WjznKkbnArWJxQv57yv3TJs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7dPGtdUVZFV5wqwg6vihpeRjD1EjkkYXeYNcSLtUHefko1rWyvYPxtH5dpi1nzcF9xttWmGz6wWNtZBf7yqcYW",
  "key1": "4TQDEoqwpAsmnvENvikf4BP8vbgoczCw5dzCFxR7E1JNX8UDSDosFgTxBP2bBcvK24Y3KxLgPE5Z2CYP4TPN8c9r",
  "key2": "jnX6xPf7TQqwQUY26oXdGHxiHey7FNXZXsPCiVZskZTg4jCaUXSytMHFeRAFVWuuBj7e4RzoAe5Q9bCQcfqc7YF",
  "key3": "55XNXqmFQh9yNJbR2Az4YKQ9crzSejUsBKXfi8KWegJ6Dex5uaEYun21qUqHZqvSCVCPq4C1bPeFPEM9o82RgXXC",
  "key4": "GkdCzhccDEcxgSN1Lxu2PWJkeUHgUWhSu1ZnXforJnPBwJ3VcUeCNsZwEJCMnNZDXDy6cAXFtqMfhvs3QT2f6GF",
  "key5": "wE4qtkv5Ftq1RbpXCiP8ygkW6z52UdYyn9PVPMESSndXxQdiko9jVVGFctHN24FwSBehQR4nn4jrm4EvcG1iznW",
  "key6": "rGTyNgXLRMEtgg6bxx8vVwPCbGDLBQ2qksDdhcQjXkHvcnUu8sfD5QNA1nHdyYC4bUCkDVPyoMMXZyJDBx8V4Q8",
  "key7": "3WBbG7xw6SbVR5Q3iwCqp6jDUJdTxr6wMMWNvyZ6j3UmHhtrSbzfRp3uQ4ih788sm49vkmyL5nCCYWuTUhfw76Rj",
  "key8": "33C67467nteGjsZ28kLdV1Z2CZJg8H4fPgZGNp4YrGK2oyGz5s6Ld54xU6Xw6jZ9aQvM4fBb3mB39F4iMwrqz9Re",
  "key9": "5Kcke2y9zbgQBTEyWeCpFeSBfq4egWWJuTjkyguMwQ9sQ9w746CeBpdVc3UbrhFLJd7QvUn3PGCxqLjy7f7Y5s6u",
  "key10": "7rwiAZgXmKjjDQ5MbrPtSjp6N77hp2tS6cuEWQ9yQbZfBMmo6a8b4D1uo95Y8uQwB3MLv7C3Y62gsCVTXAM2vnt",
  "key11": "5xBfJB7gsAtHa7LdGVguJ9BC72EzEmwN9nAsyKVR92t32RZJ7tLmASQSbBAnnsWyHPesRYdfN747Cuo2YUW3rHCe",
  "key12": "5AYNoXneGkbV8CBc1fowJzJZKbzpF4Lccg8sGx3tarMrajJHXmmejHwmVhwCAaXdrHmbxUc8tPpijMenGJGRRmsB",
  "key13": "5pFVY6Ap9ZjByQXaf8JV9GSLxTwPpu38pwudMdM5zW45v4sEhJPm8yDZTXd8zPgY5dRstGhHGUzhzdtFBjrUqJxN",
  "key14": "5SSiNJTJqh8KprKPcPRMtVZfBou83ZaB3CztkdqxRajdxfjVpVWUcWBt8yV7MUKMqjbho1UY88r2kHVw8jJ4H4rV",
  "key15": "5SQvSswb9AB1N668SR9z27Ew6tHUUtTriEBhqTVscwhiGqrY6qb44PJVtiPBuHtrGjhSXdsmhoBTfVigmxbVtajM",
  "key16": "4SLLvb1JnVboNFcuRrSPdwdhgQftMtVtPKt7WxAtkX3QjpwR6FJeTrxzhD7JUDBuLTh4jTxbjyzRvhLDtsA6SnWn",
  "key17": "5kajgFes7QkMzGxYuG6KKa1ubXCRmQAgGbfGH4rGx5RDePPQRMTYBMq9uqyXfWmeB7nAjeUhjG9GYVU2kErS63FQ",
  "key18": "5JDNkyA8B7NVe2o9pP1g3kFWJgrVA3kCRWXiJ6JVrm9uXMzu3EuNQa87TFFyDCoYmNKQq18bqEe92DoTyjArP6qL",
  "key19": "53SKPpSvbLCAioixprQDk6aFGgV1MEj1ZLigzYd2N4LXwXeQ192uCnWRY61fLvkjRx19FKtTy61KcGKA5G55WBsk",
  "key20": "5JhUY8GzYw8Me8EQtC1QeJXaYYCcgoxzMQE4n4xJ5JqZGy7tWUQ9SEdrXTgtHS51KQ3VC7ZiaZfS9WhGmPq2M84F",
  "key21": "4NRXLmwKxDveHMyhgHWN3qgfxY9gsAH7BzogcpgtwMoR8kVAwgS5mkCTszQHHTFFU6pJtuZQoeXTfmwTC1sYhs2a",
  "key22": "izeWM6De5MueFhrLzeCT2torPpuFAvTfDYYKGCnd5xwy6qPrd8c6HZpGqk6UCgX8yXGrzRJp3JajRHE8bXbieXk",
  "key23": "4SEazn27dSDJXcLLyp4prjgruXkRJjrNySTuL8cDVgAgorQX2CdGe7mdUzraFeGDoVvGvZHGLmVUXgFhAi57SMwN",
  "key24": "2EgeySvBL6214LUbHD3VESxv2NyKqBCE42LunG9NocVzkB7oaYDpLDnkdD1qf9a1PA8JRqSDQ2Q4pcgQFqQLPz7G",
  "key25": "2zZcbrV7K84BS2TG7nEJC93AhQYpJK2oq6mCD5Ndzx4JuufzpB7P9yAMbznULDJhiVACs51HZXUzGnzMTN8DkVFF",
  "key26": "jEsUH98Kz8QGcoYfgJ4nKzwSkpyGFcy1GwfuGfwY2BP5CwGkLd1CUuswj5qNU5S3hV97ptic8sZJLMG5ggQQ2j3",
  "key27": "AQGv4PyaWWRjCKaJHr2ve41erEKPwdT1SxfbDLJXdMcfadGAhDNvMUG3kSLSUEmUEhTbaCsZAHBNxMM9f3AgeCU",
  "key28": "Xn3QvwBaDCvW6xeLtSmjSvGQVrbstssvzGuwCrrhZJLAFEZ8rBiWrTaZApmDY3Yx1XjmstdLdshYZkfkzdQ3NH7",
  "key29": "3DTtEuAQnpSoJyeNfuqLQVnbFj1F3jEVgeV6nXRjWqZKsZzjk2gPCB1caHxoWSmKdheVzX5LMi1vGZvMwFgs9sYG",
  "key30": "2Sd5ocXPrKuWpXx3PcS9rummWEs5kw5xQG4BL1m36nk8MNeRqM8QkbbatmqeuXp7wnCMm7eZU5DiPUopCYca83GT",
  "key31": "4REm2mbBiHHQsfjBdnorEV5tLfzkGNobwyUJUQcugXynvFh9mSVpsa4oKm7oda9bJiYMa1RcAipv2ZfKr3Jibzft",
  "key32": "ywDyLvzTKRg1qmDUYnKCz38dwv4r7VMi2XqPMUQ2VeShrhHJigFzixYShb6o82PKHfz9HWE6tHfmUJv4UGo5BZ9"
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

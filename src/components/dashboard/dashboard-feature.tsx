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
    "4bqqJmhpjsK1bJ4rLX9Zkc4AxJgAhcmgxXpsX7MhuXdpzLiqYisVvPb2JTqwTgHwpEiGVdaW2zwmspAbcTefDvrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iziuWk7iF5hhB1NzXAaCJQBmiXWEyuENbSXrmXvP5jcfHTUHohUGn8JXwCmFZZqa2QisJ6K7wBUHopvmSss8ygk",
  "key1": "4zZocwp9XW6ocWg6rEiHL5SMaPpKtWrdMFbGovxYSqE8vphMB13YxL6qbEJUNZjFskKDYAyxrx91rWajxV7NCtoJ",
  "key2": "4in4JiXgq3jC648X3dPHnJ9c1Cujf3sVqWMYAkMY2Y5VmvFYKpxPaVbRKLSV8xGPaFVRic1xnPJY4UDUJKAtzupL",
  "key3": "4tdiFr47kxvAK6FfNqJ8XQzqKdMUxHhfBAvkz7XtTzRy4eahEf8GDTawbQsXjfoBfi8XgKfh8XMKPwqeFtYjp6ue",
  "key4": "3iFptr24KJMgNZ21nwvS43JrcnFNTQwL37xrtZSKKciRuNADxNnYv6xbv3jbm2LvSiRBBS22gicPhNGv5e9SBmPy",
  "key5": "7y1aw8EhwGC46CFrg8XV31r5NDi7oUcDW2yXCmcP7GpUQAhczARk6EB9DhajGkJ7FqeaLzQXJoQT2Y3DDRH57sH",
  "key6": "3JKQSjwsAHvJ6Qr4QyZxAePKN5c7h1MEGF8kxP6RzTQDM8SCyU6JpTGxfLPK1m9fmudyjAPQDnDHtEZT6ZsVsK2",
  "key7": "4KAJ7rPw4E8XaT8K1CqoTtBr9V4LnZt3BfQ3WBMEyJTxbQ4r9q4hwN84WWaKUD7c7Zb6coBPgKUaTm7zeCZNrYg3",
  "key8": "5GHdCDnh1L3XE4K99tRUiC6zJnDMqVScjbAnF9GBoTuxtE21j8przxa8GKZ5UKEg1AiMor81GoN7RZTBs4EpJdc2",
  "key9": "3rBzsqhaHR7WgKSkCzJLd4dWk4EATFiSUdcTK4c6YLmSm9Qxkj1S6YiXRqyZ734FvKbu4RK6hJ5e1v3RXbmj4gcX",
  "key10": "2SzMNn8WYZ6ngxS2vgKGfDjPLSWcHnU1Gjfz7K3AMtfcdMAFxrKRSbyZTD7wpo5FoSRqsm46QST5cQFuJxUkQrSw",
  "key11": "2M2enxH211pAwa6uzgnd8jeXYihBkuQmfcYzbDRoHk28PeCovfnRSWcJhySEXntEcGoXBa7YbkuaNaEWivpMhnWt",
  "key12": "64TMQ7yHedVss5m29N3uQt77RjQ7eQDs76XhnjFBvnvdgv6L5iBMzp78irZFn7TpYShg8MRJu8wyoJ7WjsFLcTjw",
  "key13": "3tZzRHo3uFXZf1j9CXLdLNkHjYcz9Jj2NJQtCtNTSZKTnh6iUWKyekd4oH65hScnQ8cT1utJ6N1QLmEWgfRhSUy4",
  "key14": "3oP7yjcL4dfBm5Z7xjeZG2Z2AV3ZbFbovc5qHD4bRrFxBaNbHGH4g3jfdzKkf27eF7SRbGYaVYoVBm5CHbD5SKR5",
  "key15": "5zNbLhQjUvWQoMdYXh4bpBrPNND2KSXQTM22EgPcEkrzTCJ7qWDqkoDmoZCCEe5byR6wnadSBQcX9uXRtwWRwFXg",
  "key16": "5KRnmqdtNmUSyDrGk35s2v2GxL5kiVdpAVbVtEvKPNgRSppBmjALbwKHv8pcTyxRvVQKhKwv8TZHWLdWVbNwSyHL",
  "key17": "4bGxz785PHxjWVdEJ7XHRTtoW1kDqCPGFcGmhFuZvyirbojc5RGbQwH28Z3kpEsTa5mHe8Dnix3ZVsMaJTEEYufy",
  "key18": "4jR7hXMwTmsKob4T8Kq5qs8UKNyuU2VFbX3pnLGe7cTL6BSh1jLH3yKUngwKKpkesKyysY7F7L94tS1DGccXFjJJ",
  "key19": "4GDV3QKAuBc1sijpasghFt6dCjbKJddfrartg4JcrYcApYc77MnNMJxZy7b6v1owGaFeHCLte8fJYFdKY4eF2uKk",
  "key20": "3YUEjiK9ri4qmxRd5awF54YJeMM2BG8quftxDw6dQJyjPTrSHd8LMoLwecZjw2g2qksYBWXd5Cv4i8qwZi68u9uK",
  "key21": "3eohFQXPnn2fp1hqiuBRd5WQYpAqZymwcdovM4TG6J6bUzkKcLCiJvauAPoEnbUiDxdKpcDLhtW4kxxLDAgHHYaa",
  "key22": "2hyWhTSaoRo8yzs45gYrmBbqPMAxXcfEvTEdGnBFRVhJQanpFaCEgNoiDLVU4uftZyJD7SZybqUzmq3Zsq4MjMdQ",
  "key23": "4F4J9Ki6ZncpzGwbcgj1xxuxkZU9sHc9As6orx5rUTArChpMVQhDpuCQBKnsTwjGaExgcJPMJhU82Pg1WCzrEyoA",
  "key24": "QRtFEGcBP93Hockx9PtE7eEd8Z3qfnpcf7hCnA83RZmJ8fVfvbgnr2LA4DTWKF6Gc4pKHFPqwCfP5MdTvLDzCYu",
  "key25": "4c8HDdFfe5ctvbgVxQPPMg5Hamjmcjyh7DmQ7CxjFyDtCi1xogGvn7trfJr6S18AsTadkFxuhJpoCDwi9rRfrBEm",
  "key26": "2PmxzARMjo6p3wfKC4MJtgA7aVzDNDwcgxZecops7ggmLaAGcjaWbwQHNKL5T5ChzjtwZg8H4rMUcsiyBr5HTTa5",
  "key27": "38EKk2EHi6HoBFwnatcRXe3PQtxV9WCt8c54goAANu7UzFz1qiJTYBjes8DDw6rCf5UJtgfm7Ktc513bEos5sDdi",
  "key28": "5Gp2B79tPN29Jdpaew6uUUEUfCaqM2DGSwHnqx661D6CQjhME4rkDmGfc84BFAjNVLsNSRyn4ADaiNUeZvbT75gz",
  "key29": "51JoVXZWQe7rq4Zy1SfMDBw6EZ7Rwgu1D43rDCVjTEWQGLa6qcpyzVtnBLdSGwPxKVf8JhkS7aG87q81yn7AuqxL",
  "key30": "2EoWZKM7dj7ESuqdymbMBGdxgAyvHJPcZCm9MBU8SqDhTTZ2c1o1jBbrf9nTsJGdUFfBdUzyTDUsCPmFxLCH9Hnc",
  "key31": "3yWk4SjjNet8bhDd6qYXMxqmd1ntmztnGoecRz2UgqKCUMGjxbdiLu8Z6QcXpyKcV9Q2fRz28miXgPqTaUtEuwjF",
  "key32": "2pYDcb1NaAy3HfuYj5PnWGPhksTn2DardevoTdd8wJxNcruZCBjnAeyyWSazgrS5Xkio7JMUz3ZLWzFg6ARJggme",
  "key33": "489zxU2bV4Fx199KeVYnRm6JWHrv6ZR8hj6687YDbyKt5LHNLCWnLDVthcdg57FndvgzF7x3KVqHf69nyF5e2s1V",
  "key34": "2xnfVdNV5c7DwAFB3u2w4sNP2Bx55Ck58doyACwd6HxaKrsTVTR8MAXfjAMQxa8qViMcjDgrTQPmsjcY8dwKEHqp",
  "key35": "3gmQdEj44sqn49fXQcQCnYcf5r9kzbpxbnW4mbgEgqBdCLXW4DDXS1tq2XK5eyLKTLELgqvoHPY4DByaFQa8xqSN",
  "key36": "3ZAujnZorBEWvXArzPj3BYYKChDweASzk8i4XmQeTtTsLj9CH7N36UGh9TkAHYX2bdGUHduWYvpK9m35kxKQ2r1L",
  "key37": "28Q2DyUfcK21kAiaADdwNfQaQ1n78e4uf1cKmfkBKZo224ogceDn6wu96fWpcBSm1c9cMXzuv7AJDhgMKFJCn2nq",
  "key38": "3zoBhpeDyV31qrTieJ1sYXcJsF9bGqwd1SmT9b9T9mHCVaF7KD9kYiPcCNWmUaeXf5aHdZGtnaPWRnv31aiUuB94",
  "key39": "4q4bqHEgALAECU18S7CwYcGGVS6Yau39KgSMCWVyAoHFAREj3noRGP1qvByVr8uhnmJrwG78hUGj3hvACi2npBJe",
  "key40": "VUqsoiafdjm7vTCozSUC7QEVxjfESmTzM9b14VZEGQs8zBU2v5f1UcrxarJvDaafWDEYwMrkbZXqHBD26uG5XgU",
  "key41": "3P97icXxCJCj5FzkztZzDDrgaFeXpfmEBpgwqioqjFsRDFG7bWnrdxHtfinkYTzFMb8DDCsNz9HfoChN7QRPEtNL",
  "key42": "4hJ2DFSs1GHdGmo31SS3f3gN7yDbVkAbr8yYsQL5wH94zbffub5goCaCzxQQk5wBbW9LVXtFb6Jo1oXjRFxF1JRZ",
  "key43": "2tngEjAQ2HLgyY4rfHzqGPC3BPSp3HPKKKUtBagdKaryiNDLn9D8iznDsJqAgTRfnQKoaKAZmsnKzXLJW3DKXoAJ"
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

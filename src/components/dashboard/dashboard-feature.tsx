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
    "54UqmtcRoinf5fVpfSYrTvhBYyXr1agM1wMS2iurk5gSTbSyeiBonVGv3eq5rivZwJvaoLnkSdrVjuoLTQHbvZgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPZKjSrVo6bcFXPqHawn8HZ6yEBMdRPiGq7K5B22E8oGRPq2X7qYnE6eJKdMWks9Q11MawAGqGZb6Tc8AAr9it",
  "key1": "4R5yJrcdndymKA9X7qDTQAAeBtGGz4oPMiThAz25Bh9PKWsUwdK3QNkKfsmMsQU2CcVFNm5rSjBkNm13xCBJjRPQ",
  "key2": "4kcmtHnwfZqV8zU8tg3UQpHdzJMv7MNbsHTYoMi91Szfx5D6P8dZ4z7Ua7hTjwxXHk1LXK2EYpmPLHCCYefRzH6S",
  "key3": "2vkvQeeqmcHnrx7mfcSjWV73a1gETEctxbgkzZ4m2fHWH9y3yvf9Ft5YqtbSZAvwaNUz2YdJyyjtGKz8kBiZxt9j",
  "key4": "3BAr3bSYzbUkKr4kd3P1EFAzAG9aXSiTYP8mB1Yauz5Ac3aPb3GbDh1GcYcxk48PRtyTnsTU2sDM8hh1S2HyopBw",
  "key5": "2918KmXme5QwVY9BwNmspcgcPeK3Jq7bQwgzHC9nm4A8k1n1yaHAYgwJ1YgEcydVJ1TAw57sCjcAgmkXKWWamCxx",
  "key6": "3AxcA7CqM68GLT636i3jTzUzLLXTa3LmZEyo3KJUJZK218jbkgnJqvtiHvqtqojrMgpRdeuN6qNcsxqDgF6dfQ1o",
  "key7": "5eHSSK3YkNQifvzmoc9bsnH9EMSiGHcPzxxm4hT4UyKDrsBeMuQ2RY29Zsnwu5uoagU3GCLYvL4g2tTEFYnSExZL",
  "key8": "4vd28yTJzdpLq4Wb9Fd7tJoKsV8tQeoDaMgFbwRMmJLfgjZupMXiFFNzvUYwzzToeZZay5YJ64XoCtjJQ15ED55M",
  "key9": "33ztL8cARW3jBtrYjzRqCGo1L4s4YkLiwh4vaZBcUzyxffsTSLxLNc2NwaUvVms39z6Lzzqj5jrvCLueFqYdd3ix",
  "key10": "67qv1eSfx2nX8tUQiFkDfsUVTnGbPDmwFUDjh5T7epd1k8qS8tt9494svxxqSTg1ZWNxwSpyorq2oeLzMasbTmmJ",
  "key11": "EVTHhbzgnRHJsa5LnfZbscKfnax6GbikUihfH2j65RHU4hk2iUV7vX73yHnpVAJANFAW1FBhSRfRqqBupGdnNJS",
  "key12": "eKz1P7GzV1PEs5ZAR9d3AFbMLszkuSXSB3k4f1XH2MuYsMMdxxT9sQbWzQKhoSVNiVwQGSY7R25VysT1ywwwSgK",
  "key13": "gbdY8Lf6FHmsLUwW4MEMrkvVCgRUQEjAWmvgQKDHu1HP6YiRWemMqV3hkJ7o36m1fQcL9V6MkhEgMDJ8RaAtwDz",
  "key14": "7RsHsGX6aWBiVX9shjcmr8uUagQzqmiD3myrthM979eZxjU6pCdP71gEPyCpWJqdKpiben6GyLdnxFPussaM1mk",
  "key15": "2jh3Rh7Ya744U61LQnY1D9tKVsEKNsthGBJF5sRMmRyFuasxfmccX4xBUuQ2quHsGR6h8rwz3NenRFmp9fgrXLNi",
  "key16": "5ih64fGUrciRTJBfP35HyDmDMbsPperSVB7xZZbr7JSCM8NwJJe8Mn46kQ7c79WjrQygPdtKFDhogXhaenkcQFtX",
  "key17": "36ZMcbNQLM7g7peq7awVnhZYf5ay5Cn5Dh5RR5UK4nwmPjeuj3dwCCBd5cXupi183pQfBe2vJ7ig4bqR8c5T3Vnk",
  "key18": "5kANHckLJRg5nZcgaYZhsnRH6ecTDGHJRT27GcDLwbJN8mhnH8JBzSiMeLBmFVSdLi1sq97dtQNzoT1BFC6xCkW3",
  "key19": "2LDiGiWfE2HT4rHJnWWF5k3aDUvqwJifkT8yvH9RTGd8k3cYKMHetYF3ZUESs1gheQrqg7eRomKhiimjUEkSLqrw",
  "key20": "3Z17twkjoPGAdt1HfonZnkoiLsKY8vFwUPx5tBscjtzV9R54g6V1WmrsBCzXBJH3Xu4Kf18wif9RSq2ts5SVR9t9",
  "key21": "5JrAXy8Buin1qpk3jZXASeECLhG93wGZytXaeH1cfXzN9K62rrBdFTfPfG2Upt3EiLRUoFizv3FyV2B4qCBUT8dc",
  "key22": "3TP6t3HHTSX9qFiYsv3HZvZnzW3B2793yQegg5AUYNpDMY9yftiYEizM72jLqLKpbXEkgYu8EgybJ3XUHajkvazn",
  "key23": "VHwLtuK9omUMLYCHfLRDo9rpARtJtBKkttU62SANU8FVDoLeWkGwB7FzYnbYhFJRVMhPmQeZHEEx1knwqMsD68q",
  "key24": "iVrVhrcfmGjCEjkJWYkgSHgzfJtkHsPjav4nhEjicvZcQ7wM159YT2pHxVXDr4v8SguDD895LhXCMdp3AqpGVgM",
  "key25": "3vJAMno3ztbLJH4GvZj2iFfrezvLh8ve23qBPZz6xYFWZ2kPJyLf5wGKfKYvnhB1E1iKENZuPXWLycof5ghqLXjH",
  "key26": "2ZKyhCG2PF8oXBKHhirdFTQfocbuB4Q55xan24sCWZ4zuhfaV2qdi5HSJ8pPreVWbRWqCD3pTWo4Bmy78eCUft1a",
  "key27": "3dKPubMgmJo1MXydFAYoJHVe77JMaTMgBdVu6uNmDMchSVn4687WoWuUz3zzF7uNvTJUCFMqckUjUHvacpFvDrXC",
  "key28": "2ccGwux6KNZ3pqopzTc5xJA7FspMtyizQ59fu8R3Xz6jX75w1CeYqfme6D1KHYebMqFdeuiPSkaxSRkzHhPx7HDW",
  "key29": "4NXc858qjXTksUQSNytmBnE2ucYpRZxa7bG9YqDeNzrZmqRmSvpFWNs7g9ZC7qyXhbzLB45hCFU5rKLc8V7dmcLf",
  "key30": "3sAHtK6KF1TKmgMLNAnH8CovUihLsUFhiBVsc2XSwdztt3WQwkVupKfKeaC3xuEBdWqWLGodZCPfQoy97CKk4SSm",
  "key31": "64a7ZKTXRi1xwT6j3QuWGB1dUQYRyDFSHhEpQRoXsY5PRqguBSUdEUxALq32RTZF6RbR7xPXX5JwMTRBC5Jui2Hp",
  "key32": "3s1TidcZTbYNELSCKuCC8Mp541g6T48XoEienDRY7raJtNtKUrYTPKRkJnR3ZPRvRVa2J9jyg9SBKPwPTVLms9dw",
  "key33": "5aP19yuZNkpzxsvyM7vV1yCaUgqTw6iBRUboAexKRMbsAttZ8iWd4jDyGkRJbMzqrDzLiRVpNAiwoTPfJCuaUtsc",
  "key34": "kkndWbBqmLfgRpMqHKoR148HyJdtWCGFErMRvLk4qnf8Z1N9vaKCTcbQbkmEhDw7MKHe2PQGw6qDWHCUCjpnpdJ",
  "key35": "4DSu9DBcLMr8wDdgK784S84eyE8jRLgjE3hPMKrWqm5sezwsusKiyFLHEHxCBCHtQ4ctrepmy1rp42MSDuukMCka"
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

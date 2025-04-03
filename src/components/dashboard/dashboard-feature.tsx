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
    "HmKZq69vverFqCq8GHWKiNAr3mYhueUrunMwtXyJ3JHtgWTU8c8K9TXgnyvMBzFje9kJBMBXUwWB6fqQrnKwosb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uguEqozF9dUcQYZGsYh8Dfy7mbh6CuyNnisqrdoVFDG91w1o82e8DrUTMiBmjXNYdN8kJcUBA4kCZU6sZ55CqaD",
  "key1": "3A42GEbGUSj6vA68xgzs6Pqe84fZW8w8GBzQt2WjxTJeJvXKjyqZqY8jZ3dFgsGegy5WQrqsvZyP6jTErByiH5oJ",
  "key2": "4EGXYisQapCqiD5oM1HuF9JeaAcnBNxVS5zKXnqVz8eWDko7EGxpGGaFPSqRbqbkQ65c8BuMzFN5wNDMFAaPtjZU",
  "key3": "4jY5iQKN8TLpiGvotXX9dMKkssy9JUDRZDFNTUA4sxLV14QaoCYisKFF1RFnsKMfMaa2pYs3jbc5mgKbXwNZfj19",
  "key4": "CLtZXTGUejHfVZFRa56mDLNUTEQYSGdQZQaszd8PzjCpFnVLT8ev4fsE2FmqUjRoNtFH5bXJL8HX4RFqFqNC9Jr",
  "key5": "2oJYNxiMe4AWG8GKrrGLkTue4KiVBxuinzHmwT4W2dD4AZ22U6zaAHwHjXmxwYzrjTXbhkovSw9VMa5Xwpd3aYGt",
  "key6": "27SZt8XnXH48dzfaJ7rQi8AJDBoqyS5P8N1K5rUrd3eXqwFtcsLwVEDU6zno5GGL6XiDmvfpbHjBcoEsMTWUMDcb",
  "key7": "C88RRR9nnXTxPgTVnUykobVA2kdrtga9Y9FWjjZu5hzFvJHE5UoNPA56iYFQD5QechYXhtVQmisPixeLk9bgDTp",
  "key8": "5jMnh5QsSYRZ8izbuQsoixqLjmEg2hYGcGjRfrYnuDhJksZCpwTidnHxAJYLp4VKrVXP1p1zrczdrQWQkxQUdu2H",
  "key9": "5iuYKWs6PhgAzpzfYMWm9EtHJNNaEjLnDPo9ECaYgvxPfP1QVDGaBSmQrfKgUwasotDy2eUmoKSWCGb5MPtfVi6M",
  "key10": "4NCxo5XL2X1R2t6LT2tn2zdeffrS7Lk4zDFAAPRQmrM25D6cqRmoTHeE7fiJVs4MhioGvM7tMkDxUnMyxe5ULsQX",
  "key11": "3cqkVUa2Bs5fFzaJ9XqoZEKMgX5fdPUMXaRtdnsToExB8JiKMHzf2bGewjrtXf3bKguoA1xtcEf5SqboPXUbp2j6",
  "key12": "28oReWaJ1ynXQ4LaDvKeqYyaxVWsHRn3KUGzMRsxuGGPzyJaKqaJcUEb5jZRSppArXcYpXfXJmyU1aXdTpApBTou",
  "key13": "gzUe2ASBjvXsmCqVSYdCwm6rtHqfNtULW1kQwqufu1KUy5noGfXym8QzRoUuhSXfGPVVNehVgaaUxyKRL58hZ57",
  "key14": "5HccWn7SpDjsEsxjGXZubGSDjmQSJaR69mqJpcG35gFpfHdtx4gEDfgXZDYJg7f1VndMoG4tWRoDNUf3xHScT8CE",
  "key15": "BTz5ubjxVYe5763CmifPsTGnVmnh4diNB6Zg2YuF7iigTUUDCdWQpJg39wp6JNWxYUSV2ATc2k4BBeo1gP1j46L",
  "key16": "58SndgLWeLtaEoerUUoA23VWY47qS7XxqUqa5k18AqYV9og4QbsgbDnzbhJqzUutkc9Svq4Zm5usY64PX6DXWorN",
  "key17": "4UG58f1iwoBVpFCmqDGScwHE4Zb61tKBQPq6UsNepNbmzeqg4gNT2e1pqE8mzNpzBPJ59Dj27Dqt9seCjp85AbcT",
  "key18": "2PFuAfoAxwt35ALJrn6vfUj1hys7K8eoD5sa8kpDvFpp76J3p1MzdY9dPtevWuKbVLQstErpCvrfw9sLmbrBYb3y",
  "key19": "qpckRtdKkGeDDzszjk66vNfepSYCDGjq1Zk4rT9WTXjLygY4QcM5W9zppRUxc38PZmTLQFWuDSpG2vJ6HdEmcHw",
  "key20": "2ALhpFbd4VMze8dDFWN9r8ug1Hfo1SwZP3qTTzhKzXpLK66rxJ9hBiM6hKLo4Pj744Q9mXoJWJvdJgtBy7ZNRoGV",
  "key21": "65duzGy1Ao6tQozEfh8XhVqVmwMYZZHrj9DEGuqwDjTjvcmaiFJcp3gyDSanZLxvvDhVUcNs8DbMAobrDgMtK979",
  "key22": "H3KNWMNroGjPP1CK25HM2GTXrsiW4ret1GvJtpXvawyZZqXfA35fsVGb4rr3uP8yTxzrgfG3F2oK5ZrhiBmu7zd",
  "key23": "3ESPCmz33qwWaUjYoGtuf5FWLJpNoPJSXwCXqJAttNSphrpLv5mLnvTsw16CYGxRxr1xF8FYvSQ1e5vvTtrJddMV",
  "key24": "3xGdiPR6snUrviCNojScLpCxZVF9iZovTTYTwTaS1VL9ipEt2eGSW8CpyCYJNLnePXyf1eQAqF5mMa5JdwsjEUva",
  "key25": "tKnqgtrsTDeRFfa2zwrnD3NpXHRggvG5jnbmDbdwADxqgJRZtucN9SJSgic5oSntD3Gh1ZGR974QRniK2yg545o",
  "key26": "2ARtsygvpS8DJnQgz1beNkfrAhcvpvR5p9xhakczZ74yeVfe5s8oYs22wGab1Zxf7ccwMUu5Ax6WXR4kbTbu1sLh",
  "key27": "3HW77igsx5Q5XSN5Tq1VSHiw7FuUU3ssMw94uQXcf7sF9er7BZK2V9yw7N1xvUp9uBiiCvjz3kXC3paxM5gEozCn",
  "key28": "42muss7cmjhnyhc8UFahRPQLFTWWanrPx5v6BKcEss3gi2m9qFKKZxvvvxXbp83pWEGfCt3nMQnF1uoDdZBbZWWp",
  "key29": "2jFzpKp4VczcWRvCMcv8FumGuSEU7W2c54HAsGawUfPStfWRAxLxCxcZ3vqq3Y5GNvY44NS9a5tyo4GWDEG86Q6e",
  "key30": "jLdSuujUcifobxGrtL6PUT85Uf8PdsJTq3kHei9DTw57jhvC5UGCDYKBa8rghtzYkBHw8p3Z3zPzSoPL6TLSQbx",
  "key31": "nzkT913i23bpBbsd754Q1NDjzXQ6t7EN7EhPWHg77fL41iDtdPUtXxoPxJ7xjxTuL2y4mk1vLszJSH4gqsLsZuU",
  "key32": "4tq7Y8DuTjCVK2JLt4oskarFXwTSmm7UWRFB8sRHNGm6NbdUELU38VU6FF48tRpZbai2YgktSpwx9EX8KgSgtMXr",
  "key33": "2rEyPvEohwBHJ3TQ3SwqGWhbzwrf7wcEqSF24iQykSpfp7zE9RjcuB5gba9KzCz8BUa79uUvXd9RzK8jaDrxkvib",
  "key34": "2Xz4Bw2rgZYMPUq3LuX4W4xeZHXTgtNKAbrAewcgDLh8jApnBKGcRLPyLzksp5vkXDAwp5mEjMW2MBV1gcYkpLvv",
  "key35": "nzo3czXPZbuAtmzWD8yjjFSPjEgF3cztNJtAnLPrEfctrw8tc5H6BhgBwFseZn7NXcusZCvJFpW48KUZ3o5er7j",
  "key36": "3SzYKJCManX4tFFyKbyYjfRrDJ9XDaLyVL36VXHudsFXB7ipdmcDiKxU2LeBv51HPrzgX1aQ7RRmQxhPE2A4vjR9",
  "key37": "LDRnYB1TAfWedub3CHMhUu76dQHepA5djsAo1Sth8QyHgPYmV5qaCTW3JjYaWSM4H7JuCsLR4NiRNq6Mz1Lvt5X",
  "key38": "3PmSLcrUtqtMtrHQjcvuD6JSyo27tjgBqtQEt1EVEw4PQdeqofFAnfD7SoizKF88CA5drrCVYdoSpSh4TPrFfRnW",
  "key39": "j9Cs78muHD5aQn22PFZ18umvYoMjEhzMQ5w9S22ZJ6FppcL8Y7ecsuDfwKrTXA8VXzmZ6uRJQRNvout4PT91vB6",
  "key40": "3hh6D4Ted8pCo4wtC3h7LruuXGvQcpopBYHwfqH3vW153AoYreLZCWFH5StkCw64TMHizzrEmDu5kGREWX25462H",
  "key41": "4cH1UuLeKc6dmgmdy5C5AHJUV8RhYmTj3LcgZuSoiiTWHejVjeZkU8SbeJNKxRyxnJ3u6GwkvxTX29ReTngZ1Vgr",
  "key42": "2nryZ7RgW14ixfdPZjU5iiqsBr41jBVCd7d7CmQvxaFYCVb6SntbWqGC35kKjvEsunVdCMm2XL1xUENM78o5HPnJ",
  "key43": "23rFdonYb2gzjB94tUnGZ2okgQMNxpderQEVpzz6KpSnBL8wYixJEjJM3CQreM9cDzXr9fGxHij51LCbgSy9uMAW",
  "key44": "5fpPFcrySacdDwnc4qv3j6PjdRcrEcpEDRy7c5xsgPX25isJK5bPEeSgUbTxAdoPrPAXDg3NjLNTjS3fGRbPE8Mw",
  "key45": "5iAHTRvkQRsm7xxaLnxjRwQG8h3w7dfh9AmRnFPedtLikm5ZXSKFuGNgNPDQJxszogPfBj7qEy1q2PWmFSBTi8t9",
  "key46": "4MQ6qAWxy6U7y62Xs4Gf1XSy2oBb8nq1NV9s9VQitzSGVJ7CvsJtND8yExwEjZvszQBV8223NPwV9gmmjFPDwF5m"
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

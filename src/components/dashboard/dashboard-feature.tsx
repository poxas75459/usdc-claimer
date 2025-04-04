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
    "2JkLKJkovtufYdfJi8qyYtHStzqr3CHo6q3CuVUMS6tkFc1w6cfrGNZ8ejedUSi7bBQ8BDKy3DPCjg1aCy1WbASK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RH8dcyaEyz2h4UL7B4T52MjDUkBojw1yZn3S7cG9H2dKeDPcpLLeStdT4qFZC12gD5EJe4q5VsDHuBxt4kemX41",
  "key1": "5xjohFZCHQFuLfmS1qvh1HiLCbof4sc8E4YMq4TLDGbJJ5sKWbvC71Bii989ScNqfLYXWqMqZAMZRcxeFeGtLjpf",
  "key2": "4j3A1ANznsr7shFFHDHU6unJwbPubExFTfjpgPYvX7nFBZa2LUzPrQrETDZVcwZy6Sdu2rigbEFeKffmDBRsvVvQ",
  "key3": "4NVG1VKfKuNPmqptdyfvcaDRjH72g4DfB9in6VNvbN7Ad2ZjehqdcDSYajF2p88dxpjsVqjwiS8FQ7eb7XL1jUWx",
  "key4": "4ZRrMtq81Fp6KTZtRDKtdCZn7uk4DkSEfJCyLs5RePRrLPNZfVAEohsVeAaBD16Ym1bRYEuw7PTLBoAwtW1DqVC4",
  "key5": "24MHkK8ngqvYoTnMRkeeVnneV46u2PzP36awfieFDptF6HjWq16raeqNfwx1KpFxYJiwypdz1cCGA2pnfbVsRu5Q",
  "key6": "Xfyu9xZJe3MA4cAuVhV4UtxSJLd4LU7kgUFu5ajKSifH9nTZbGwJdVVnmLeFcZeYVJwe38jat9KJKrSi7B1Nv9B",
  "key7": "2SZuPDUMuYQEtCeRLGQLLja8gGm6ap7W1bQB8Vf24TvjzBi4G22DgpC2uHKbrUGyuJYmvs22fKQLVDZkpWtr3teo",
  "key8": "5PWzu51PvM9YFemBYda75JCVyNNTNYVVozYo3WFd6ddLbKzowQWjvdEqyWFuXZ6oisrsWhzKcK3TrRLVrLZQqcRU",
  "key9": "2QVYf8i1zVg6eW8uJiEQTdS9p72ZT6ixnitBNS5Lh1SdbxuXBVQNqksXL7fJh24DrmfydfJTM72xavAL9MfNV7Zg",
  "key10": "35bZyjQTwPu6Fjdgk1hK45EuzH3xfkBkg47FyHfyHBErM2Tg2Fe1FZCGG94jSAMKwtaNyztPwRUk3xmR9eRGMewo",
  "key11": "2QKuBphbxTuundTZbnzQ6pfbMy514CK9gZJf6SDf4JR6rfxqMvqvKgAsci4zTTAbkcdRP1tUNNQdicigtK9Bb3ec",
  "key12": "3BWXBeXCuoh47WtGFaYEdCgL7zRTz9PytcGd1W1B9JaqbhLPvPRsK6gh23zVNktjCKU8ocZ9fEk6RzZZn4nTngYi",
  "key13": "61a9rfkDWbNPQJBVKY9zHHxs5tLAVi1nhtR7eRV8kEzwLmnq9ZehBggLgMFLXjRdbgz9YP1oMvd5eiyjMFBUNtFn",
  "key14": "yVzYxbNCQSb2wW5qb6rQi67qJam3C3CUvPyoJsy35X16puPb4PuhfRfDXymX69mYrHv8TG4nYH5d8NBrAUjSau3",
  "key15": "3Am3c9FCoCrgyFnLLsyFSoSSRqxkUbUjk3aJ7sA2Sz4iP7Ms9TXYkJNqr4ibKYtN73PjTjkWvq6Hk3R8XScTT4ZX",
  "key16": "jMXr7kzs4v4Nhv4DCZMeVxGJ7d2WV5yk7FiREg3FciaKbWsbAHpTwAUZpbhENsUVC2iXzwz7M1Kn8KwHAfZfJzw",
  "key17": "5AnVzTWZEFGPeAavJRTug7Gk3BFpL3ARVt5dQRrunhdCgqDisPZom6RJDngfGyoH3fwXfGhzacyyRFGxMQDzMXRU",
  "key18": "4KyzdGKwqMg4gkGyP9Lgms8mjsGC14i22KbM1hXM5dXJQNwhCjPJnTmYPrq35DHMv6Ki6CrDcv3FYiGXbcj5QM8D",
  "key19": "3PAD8SpPrCid9GSeySKWUkb7eS6TQnw58omtMi6qYTP3QADGqocbZdRiFqE1btMwR8gh3Fpgmxj4peq3FVJn5fkq",
  "key20": "5CuF54FhkYUcwmEazHiZrPQYxaHP5th1wSWth9NF4wC7jASAbmrCJY1DDFspiwLQecATVGZzPjuVbAVTuBRUomZW",
  "key21": "5wLznGgddZmAUuoGgTSknPWfhb2QQVw23Z4WDbWpiKEZyCQ8Vgbvnbi28GMFn5VtR5gVAaxW552UP9zz7dGtYtr2",
  "key22": "5TUpBrRAHA2chcN6ddm9cqk3P9hR2C4ipi7qY9uJAap4MuNWfkCxGahWXpADZimM3XUxHwdEiGEFBw24UjEPY3Uw",
  "key23": "K8r981ZHXyFJ2jmWFYNwtSipLVcEtpFFe41MdVTVXvNTncneKxThqyzUn1RDq2qT4ezZ8zPVjVAvXssx2XCBnKY",
  "key24": "65P1cVa5f6FVfug7J7XCUReK3SejZEBCCcXnUeiJrFpYzK8RRHzqigSrNYKN88PLmcWXfgcU1V4WiRgyRgi8yh9v",
  "key25": "3WE7BN17gBrr92RZ8u8vMXTf5SA7iadt9MQ22DKmZnG5JbsGL2jBKCd2L5rKfjzZBqVUPCGurT2npEEUZAdK5QwZ",
  "key26": "Yif1R2NSRi34rvNN1h8W5Pihv3sJD1HhdGPMHvyn4rDZJTBf6sNz5F9QfwfKmjuqd8zJNhBDedurCwG4aYiTRxW",
  "key27": "5nidWTai6rd6Ck1BE8pobezrPS8K9BSSGANs4M3bkMfuNwsh3kquSEU2LXe1aY4aE14oi8QyeyEV7iywc8uWWsiH",
  "key28": "2dUXrsHpMUDb7LYF8DjtUS18KCoh78zqpn9qSiQ3ts5XpqcefAhCeGazJAiFzGYHfQakfmZayCajRvh2KcY5Njfm",
  "key29": "5zG9PQ2wWzY3KDtvzUQzj8zicDvkhB2i6CkLGgJzzCcvgtSDbnRXaxL4bpmkwe6nLZxRkp4ZLwNMeRe2TMNLpyEZ",
  "key30": "3CryCbzstWevYgiCcNMdULQs6ymJQ3yZmbShvUWGtVVAyRmBatCFZafVXCuVdt6d8LA3pbcGKJZ5TcJ1TCuWiDqh",
  "key31": "32Ku9Frwkc4PF3urmn64Ndzt6KEbwLBjCwfuEF1eAghVd4HSTADQK3BVkB5885yiYEUPJ3wAPcEAvvvcmDHedTck",
  "key32": "3Wc4A4ESyZKG88hjjYgz3KzNvXM3w455hspf6azVEeNoaxB3T5cDzytZ4T1keCUqvTcLUmNcSH8BXaxYKj4rfWct",
  "key33": "5mXWEG8rt6n2KvwKS82AEvzsHsfpzFfJ3TM2moNa5xm7jJVYBiLGs9bC3Nen8qZvymro8R6bBfc555ZFa2HxayvD",
  "key34": "2w9gfWCtkKY2UPmDmWTfwZhJgTPpT4F4ewxC5Hu9JmxHQChNGQzydpw724j71cNaBX7tfAp772NFctQHhhnsjPyu",
  "key35": "4cPgmuioTTsupwbUcKEJCcx4EegoR9MWV9ukUr1eFy9T3xnTaN2gicJGA3UUFfissPFXcRfhM17qHhMwUU7JiSg",
  "key36": "2AAPEwPddBTSkX8sAE9yWTUZ3ozdKLZK36p91GDMbCrYyzkoTjUASTWpTBNBpmBywEgsgbFfk6YRYxpTH27MruWm",
  "key37": "3xpJMw2uFdYi74AK14oWb1QY34dz7PvLM8EyfYphfHVafiyc4pMW5k516KqzrvbkMNYNftsFLipPS117MUDG3SMQ",
  "key38": "4wZWUdHtTnML8Yqzbx1LzYCcHQzBEzLMj6PRnFpzsKm3snUojStA6ica7hL6QBeJhAs7HQFXm4RAeVBS1iz7DETJ"
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

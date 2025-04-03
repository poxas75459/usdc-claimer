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
    "riLuBoTxNctq5H2ZS3j6ieLCcuR7PwUbtbtgd8EQCQNePkqxNsDu5ggGLfmcgufgFtobLDspzHSxBzYjqTjwxjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgjXxXgxzVZqk72Cj5ppVft7zFdbYnVKmQ7fP59wKj884TpdfKXZjgEcKx4EfKo4vejB4xWh5WJBjnPeycuM96q",
  "key1": "3aL64BpDzwjiM2ju3GX7SZg1hoqG5kZYRypmc3fQZdB3sZ9k7KDkLZFWkGSQo2jgSWK1jNtRbx3ZfJZh2AQSdy6D",
  "key2": "5cMuRT83gTYoukoepRSzSVuRcxdn7UntcyYPGs3omPAQ6Dr1hqnvmotHXy1pmth8j7MTwMKGrFnYeGUi9jyRNx4T",
  "key3": "3TiKLWBZfCVZRkPRd5MMMPEkD2Lw5LxMPto7Bq1nSTE5BZQoT9m3pStYC44LSfnD1dedpqUjY8bEbRBHpftjYohp",
  "key4": "66Cko771dAC2xtUwy8iePJM8WVoHrKp6aEsdPJb7n5fCCwTJXE1AETKX4DRPnzM4bKwdkJiVSe4RHA2VcRHMRKMc",
  "key5": "2759754wxG5ujokozwGwjmEzXHQcAdFJBPn6ftMheLFrfBuHbAyfRNoo5YYvoKp97iFApa2srALyqzTPzQjgpSv9",
  "key6": "DKSZ4P9zQYBwcTmqj9BkoSzjRwNgoJikPs6YFE1VmPYQ6Swjk3cY9J5VKnDpYMEzfxcUnoc3k5NrSvV7KMxocGe",
  "key7": "Y3fPBJSa3mSzFmKfzhnRAjnQdD5TrXTQFnJ9nynatHzse9KzvGHiNehHkG9yzBKQBCT8ZELEWCQGB8GfZ78Jpw2",
  "key8": "2Wq66KDdg4LKzZUoGfJS4nX3hzqMqzGYHUw52BVH6FegpQHR9ZVy6dz52pLJ68rs8DJgLRQ54ySjbxgx3DvgYAc1",
  "key9": "cZtjiA1FWfWfKHC8hYVoELfxN7LcbVL8Rw91B1rugZve4tDppibzZjEUpE4aapLhPDnk2DZTLtafoJCF54SdRVR",
  "key10": "3UZR6UoCxFfwMNF6p39gYtB1uFrdA5E6bWVz8Ht56ckNDQfYf1EcuHdGb3pyVX1BkhopytKrUFG1sqVyNxV3tmwM",
  "key11": "4iprp1SAfAkqSuDX2zeFvPM2LKEqkF4c5N5yiQyRcHgxiaoxLEvVVY8znupfcfaEa257KyKmToYG8SajGEjE2BMi",
  "key12": "4dLXa1e65Xk4cMCYtEo1gFhtnnDW1qqEduaf99xCWxZvLfyX7JbzfrmZYqZB5yHf1N8vRt9E5uHnSTZU1vKVVJUe",
  "key13": "2SGyAqSyqUeZzsaDgEVv8pzA2mqgVVAEV6aha7sLpvWMg4rzW8xiToaGn8ob6QBA4LMdw3WSN4vc3DqqrzTrLDrj",
  "key14": "4cCmJn3S6qkYHv3t6iDGSU9sntMnvtJKwhWzJsQfjAG4d2mCa5ZWwGXwSjV3wSf5XYnRymTG24WQYLLZyZ3dPNnK",
  "key15": "24dxyvezY1Eh1zFryFutTg2iAzkh2oKh53mUMNF7H9R4YsmifaX6UefJkbn99tRHAxRJJKtj5PK8in4ZJAF2hS1w",
  "key16": "bg9kh8u7yT9hXa8LMDps2NSe5xtQuBwShi8TQg5tRHsh5snydw7hQ8KyWkJp8a5ntJGJEm9BuabaitpZLawDCfg",
  "key17": "pH8ZWtvKBpandgtSGoVFJa76MtyiAupMU7P6aL8aoKJqpZGQgqHUCvZSPvM1pvKwsD43js9ud8p4YTMjkZ35ExX",
  "key18": "5ujn2dTPdf7tn6gEJiRvMPjYcVfzxEPAtXWec94T2qNuWawy6Bjerzbv7BpTGtWeZAhPnkXoAJT8p9mSCMdqQwbD",
  "key19": "2BA2zRi5REufhtVdE8St3QrcXYALTjo8Qog91H9VxnRxoQwTzMpiGbj1Nho8pFXWoMm7sRUQfeEjP9XYqs3HTVTs",
  "key20": "2Bjr6nFMDwdEFMJ5uf21JKakiBL68Y7XVTQF3LbszyyXbFjYxNSps56tUSoSHFhuQDyxwVEmwfPutSWmszuWSVPS",
  "key21": "EWqTgyDAypzkxpAt1WfrBMwdLQS24JKSvjw31BRJ2ZYpRqkqbC3xnQAWg3djcj8T79XyFHQ3oFXEvbEAVxL7Hq1",
  "key22": "4CYZTw567RdBjLJRLvNMzhq55G48Q2U4Cd8QSEe2J8meCtx1MTRDPNShGkqfsHpbZYMUWMrNCCU2Padi3F6c8hU9",
  "key23": "CLrKtNjBvFjmkZdDxS3azbZYiV6Ga1uWw4u7rPDzLjGeQKv2ZADxbwtCYCT6QoMUw6u8GkJTC9t1S94ZYPohoJq",
  "key24": "G7gobo1yai3gQ7xLvNjJKR2q8YSHghMvu5qFn6DJJvJUWCaJgfWwXAdmRRMXJjbfVuwDfJ51YEh9usuRPk4WbgX",
  "key25": "KDiZ5U5RyapPM7gtSzxZ4NhTp2pREBA1BntkLnsCvzgbkL8k6ygKDa9HRNJt8xVS7iFMRQzB35DinGHbwbnzr56",
  "key26": "Nb2mp5JzLoc7BGaju1jgMa3u6jpdXgvxLFR6gmUuKRsM3zoJ3epUn4YBJzSqfE2aq5oEhfrTLtwguzz6w6R4bH6",
  "key27": "35hgb3BXg2fNWrNv1U72TpKYc7fnjjZRWtMrkzRpjFC7DtB1NZhA3EFWgDaQgPWyGpMSFz6CXEZHcFp7JgeTzntC",
  "key28": "4kD6PcaQcFWfHgveUEr4G6xDXXBSqm15uMS624ZCPsUVTEUv4PzCWpVAa6JH8QdYYWJzLKnPu23YB5z52PUBDWrB",
  "key29": "46XkSGtNv5dVqF5PRAWyVdYHcqFZrcRy6477NAv1CgsfeniR4bLqK64pAq1ZRC2maaWREuiGxVPaK4dDvA8nELGx",
  "key30": "2Lypn5M8rhPP9iLmbL8X4EbhtPs8hvJWHPBpi9YQzWpy5uZkxr68GsgsT1YhShM6T91L69nXxdfugJf2C3QeUUJm",
  "key31": "3y8BPi4j5RHKMq99F34c8BUjMfZB8Tzj9qmxKK4sRUEaNjdBij5ManNk4zHFUbmsSC1BnXom5Y92Bw8nwFJpmE8u"
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

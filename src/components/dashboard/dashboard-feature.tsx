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
    "2WFzcXqFQxx2wBkUcCYwHuQmDx9ussGt6N5i8sy8rJScGgpvuqVSKWc5txRAEg2ztP6X1F3i6k6pJogK4wasmoKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F4vVmmfBMeTjjj5WpaepokXg3cAwjtRo9HAMqq2M5pi5BAudcxaiEuxQ7sjww747nhqLGgMxvkEeGsHJA7FMv1m",
  "key1": "3LdvkFqEp6brCWm1DS8TZyScSr2LcHJYXiBtnoofjeE8eTbheQAueqdoCW4sKzBE4yY933q8VjpNLPoWR8Rb6Mio",
  "key2": "2JQyETHdrJ7z1dWFMtja8yPExotpjG3cZsMGFHtRrE3ajLJUkbtetNveXS7a26h2rDsh3VsyrShELPcQMyzYJ7Qj",
  "key3": "4jcQGULbBiDehzrL8YzS8GMhFMzF75TJh8TTBBiooHHojqjpGjrYmZg2xhpPyCDdUyQrS2d9yGNWXhUtA73BdUk",
  "key4": "5d8EuSTfyGYfcQYz26D1MvCKKwr3c5LA8WXYw62ZUZCAYfbzHrNtrKXmq4pftMrMUCF6E3Tz2K7hMTtDs3oxYJ5q",
  "key5": "2iwQKrNiejYFQNYUxpcC7boB3mb2phDvNbhhUT1mL6JWNgwXS19Eb1gA47T9SqNf4M1y3Lvoc3eikR2mFMqfvy1y",
  "key6": "2ufnxVLdHVCuqYS4DVtBTVgWyt3kk6yD3DhshaXVnwdrDvZT3Vb6MX3iaSZ91tuaagMN3AuU7b4qys9ygia2eeWj",
  "key7": "5GLPMW6Wu5drsa9N1vM6wySjv75fHw7x8F8p1vzczWu61cpwm4N6G4ULXTtarNTK9HjLUq28jDb1ofUdWE9FSKyW",
  "key8": "42BM3mkwfXMAvALBQQxgc5rzF4bPHoui2AEoHvZDw5BEH3cF3HzQH1mgeuTbYF2S8TxXJHNtJqpNA8ucQApW4Ly1",
  "key9": "4Lx85QCud147SsoUVtqTwJyC5Wsq6GePTgrUuJcPnXMX2QYZS4JEb52w7T5LSGxMpaVceRa6iiLJEt6gE7WYZ73D",
  "key10": "dTybrT3VAqikZsu2HuUh96sF8faJ6XG8t3Smwbtgq16at7GC1aAXD5Wiw7h5tLTsPDXShcztuRZZG9eX5aT8285",
  "key11": "5cd4hxhsGzE2VpxzmADAFYeqbWpTfEn7437qHj3LHCoTM2btEeABXkouKHSgRcBDrpQJuCcjAHhtVhJhsZE76t66",
  "key12": "7JjpUibiPcs3Ps92XwM9PVqmpNT62WF2cBM3H3et1XZPMHDcmCxYL7fDZpvLWjvLAN8dnguPiMq1V7nKKSQ5Xf7",
  "key13": "3sd4MjLoMGiM9cG4xwUXizXLPhVFK5jzQGuiMoWoEhijEZ7sUJuVq5v78hr5BRyCGprxmGVq9iZGeKLRP7m8byEH",
  "key14": "3fDF3zSyoo34GdpD8kq7bzb2kFYLm6C8uJiaanMy4xLbazcvVgfAoVHyLWoTRp54oGdLjMHrWRhdsLCDpyHvvbPq",
  "key15": "3SjVo5RBYuKojEWFR1ER6buLTSXufxGYLKuuKoEMozNFvYmsTHmXtCGZeXN6S8MHqGyuaYukb28zab59Gk5tVRxd",
  "key16": "2s9tCamYTZFG9g6yiy3nePhbHki7M8vhAr5oSWYMZfhk2CMRqnnXUfRkiBKKF6kHUyWCNfeo8Dgv9mia41xjwq14",
  "key17": "28thpFjhuDRC1dcTjEJbWYssLP8XpEBRRyxAjxy5NogaYG2gmrhT45VSKE3KMCx4bRAJVfg8uP9ugpZHDwG6oeeC",
  "key18": "2DzqKN5RrFvcruCXBQBPqtXrY9YaaaGVajgqGACBCScCzdVpBBpijeeDJeQwFgsLkLfdfvjokBwYn8922BSHiF5S",
  "key19": "5nwvuKVce9gASwqdVjxyQBdp7uH5TrTSP7ro49an61BdAfWzaXNajQbu7GSEFFjvZQ9hTyScjsVmeFhgt8jHbTwR",
  "key20": "2WMFqpgLKYtthRCWfPyPYpGvdRf9AHU7ucgYyjSwffsk4cF5BXTKByHGP5HjdWUxA8PjuAR3dVhnJYKph3Hx4pbf",
  "key21": "4WjoQrUrmsEb6QZGoW9CG6mmn5tZsHtQKRX42zGqtGGwq9vx4ZUgYraVJHCzAKaCviTJNP7GR79TjBqkRBLr5aq7",
  "key22": "2vj233fHnX9y9EyzWs4HPza6BZknT1An3vEmQhtSTDJLa6Rjh2UTC9Cq5D7tFxC6fT6B194xQi7hvWdm8T5pqVhJ",
  "key23": "4qsjVUxiJxAzhvhJGWYakckQCqYvqunfk32wZ2NEBNFPKo8ZcAwAYmYaEGnHAGr38W3SenA3AdA629HspEW5moVX",
  "key24": "5CT7YidffgS6ViN5JTSkBD8QNcWFUDacNah15PaiLaHgzMH4hGy2PRsM3caEtVewrDb47afNqzE6a53BKeMDMFp7",
  "key25": "2FQwqQ1nN5La8jqhyWV9wWH1mq64a6SLaCHUVGK245amqwYVTXME57PE3BD9sJAYD43Yo526MJVoRe35WuivS7Gm",
  "key26": "67gRaC8oDbx9nxNkncyiREoRnUTMu8Tsc1UqWpxZmWT74yv35asRTzFMqzkF6j6JhzkFhXFWGwy4VRs4aMVu72MW",
  "key27": "3FjA6LHhDLxnUzkC7LWtm6B5yqWiNArWXSyLp1PRjdehd82SjsY7ZfeD32KDcRdhGxSGwBbMiKSXZPnCwVoZusrv",
  "key28": "3VpFcSSQRevY4yQAkjWmwyxQH9v5rDMJFnRsVwbXBZrdUEFDBzUyjjcAL1CXcqNJ5jv8bDQhGsU6cjbe7UTyZZA9",
  "key29": "2UTZV242qPdFXVco8wvvGmYwKrwC9b3FyAkUuq4YDuDhDMGvxjHtLFSKn8whnsKgkYQuigHM5QoBHYBgKmY3vZx6",
  "key30": "49z3Baye8CrLuHUsSWpZ4D7xRoNNn8hjLnnXPVJu52DStH7fMNia75tqcgAwstWDcufGRJrMUFbrz9MaLF4gP2zX",
  "key31": "jZvXpXudc8uS1XeEK6jPYn9KP3eFsav2krKKfh8kxS3M9QVono2tt3BR88sVqZ7Gz7HERVx2Qu1YrKGsJjb7vHA",
  "key32": "567XeqSziYQWMP3ZZ4aem8VT1Jt7JoAh5abUYSUZN6QHyqjCJG7DGRfzFPRxpzYe8DTG9rDdF2Dy7pRvSuA6PUP6",
  "key33": "2gbtG4LuAukUJfKA7PoRsEMQQYL6zmb43MNLZBgW8R5kQxPKnueQwB5W71ypDeRVbYtQPQpP2yKqZiAxxn1U5hua",
  "key34": "2MCPyvXEstSZKKSK7BNcEe1H7EdwYLtJeEGyBeWndDHqeiDMX4k2C7fZCHbrNhsyRkcFjkSM2ezpWVijFDFmfJqw",
  "key35": "5RZHbYsvb2Bo1WqYQhdkdH8A8F6nzXCiVfyuKASEkB8WU9XU44GkUzTTtb9V3KZq63J3gn963Eg7ZhUE7nijUhp",
  "key36": "38KSb1zAECVDMGqRkoTA2z9bu6BEEsfNBSo9L3jgTFJKF6Ayk4giBLiZ4L8Bj7r5UFGxXQxDuSYmGroAreB6H59"
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

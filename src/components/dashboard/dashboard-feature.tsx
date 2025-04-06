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
    "2NBnFGEd3zL1BCKEKuCGJxV2R5hXr6CM9hBnbNkBU7rLkYZfxg5nNNYNEKmL3Y24ngwoz5zCGQE8yojwEoRv6Bdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TM4Fmnef8rQXxMQxWvFm5Lz1NbgJf2JjkXJz3o2v9jAr3EkXPaWGnTdMJVhygYYzpZMRgBm7GTkqakNHyVqqNv",
  "key1": "2xAQ544a1zDXiHzy2yQw9PFhab9vVgqRW7cH2M4MnY8kXEMMNyHTbT7J5vZXsTW1SoPNtoNtaptxJSTZbFk5U9JQ",
  "key2": "3yscpQBAGXxFnPxkHNMUn6tmjvZePB3EUBjtojfDU1mXiLhwid6YQhTHgm2X4nmWZcmuFeYgoueNsLc4QhpJW3MX",
  "key3": "2hhEFWLJTJAMrVy2qsyY36Yt98ZkAEtfaj1d7RFj7Gd4CcWKRVhNb5ewz4T5XvbMFkGZhnu6iPfp1w8KaDvoXtsD",
  "key4": "2L6FZbzSNG3kbpakSCQjxj4ZU5Wck9UYupkaLa7NhFQBpeannvnNJ1sir4efg66PhKVKx3pNrJmEiFDY1nb2ADW9",
  "key5": "5Xrdm3tpyr1C2vHjSGSdbqtBkg7t25nMwj4vDBzofiQnZsZU7ZkdRxcregTcoc2cgQSwCGDtqKhWM6jReJzbFRCC",
  "key6": "3QbYWHb6DpYZy39mrifgxGLbTc3aS9rEVVRMPMnGoZ7D1Zp56NHFEXAe3pU3Woz5R5pHUt1wJZzU2G7xFjahRL3L",
  "key7": "4DGbZjLnZun8GuQSaEQBVJ71YfK6MfcfyefRSDxCo8qo3u87WsZXSttxLhGyGxtqJ1SJLFRWJKrPcm4oBwX8fu1X",
  "key8": "2PpNNADywCokt7oeUyDhdLvW5zXpSgn1fYm1D779U76r6Vkv2Yx3kKB83Bmp4ke18FQnvgeniJQPZNMXdoVUZrKD",
  "key9": "4FrK7x6BXUUTk6SGEyjaUZqnRqgc7EL4c8635oXbyYAFoFU8Xs6grFAwoLbqhhgjVNcu3Y2S6daGgjZjkcL6tpcT",
  "key10": "5H3SCD5nTnpFJgdqtzX7dHhD628ZS8eJ4SmCDBsMu35aoCdcZQypKvzqKSXFTfEiDQiPATRcD7eb8EZV3QByvhEW",
  "key11": "4cpome11MXoKvZWuKDaoaCbzBVszSF3TZ7Qj2o9mvk8QqPsVVya4NYMQxiubqpzJF1cb5Fz5EFkhUtFGnxmfVCRb",
  "key12": "v3VPuKKyNTtv4yHz8L6FefXHtqfB6jqLSmHDDW98Ca1G8vP8Tcnehn2g31EgYxhBJHDTvWAShJoMxH5kbdokwSz",
  "key13": "4uU4sdim58iSNg9bZykXrADSq3NLURS6mWRVo3WRXmq4ujBw6pYAbETRvDUZRZEpGojouEFaxhZkwV5WZsbwacKg",
  "key14": "3a3FePb75ASHDH9zbVV8kEg4PVhZJwHJ8z88s1nBqRGHfhCxPpzUK1dY8cs5SRbkbBXKdwLHtCZBd2jYZGG7g13W",
  "key15": "3JABhVS7SBjgcihz3vem24KHGoRSiD4ye3pZssM4GUejL9VeH1cvbhmgPMrsWXjkXSFJYDYb1QCqYAxiLkuNyJRq",
  "key16": "3FjjjNw1TPEmTqVrbXBCSBLKFr6MSuKWyJx16CXDgNSioFFT6bGbWRxNAJhposUpq5Q2AKDJV9RyTuBgtx6zFz7X",
  "key17": "2LBDrxg9CfYXazQWzBZGU8Vvg7yPSYagaYbTUXdwLezEH3EMZsTMrEErUqdTVy8FmiwyUcmHUcLa3RmNa5twTTab",
  "key18": "5WESjVu8HA12DcKd8ew3tQpghViSTUY5qif8WvJxcjSNp1q4tgKvkk9FiPVDCCfKy9T2PJTRirRx4cJPhEZqtqTG",
  "key19": "5HyuyQZfumb9GwAUb2tkmccruu1rz8WjHRoXivVEotKFyXhoThZMiEGitGXAh2T4ZaAAFAKaDpGzbQVsKBg7bc6Q",
  "key20": "5cQwQCcfZtYXYNHRdGkQDN4VeTnhWGd61TyataxKSAbZZ9eHDrNbWm1B5Xext5Bnd89cYNBsy4roVUW2ju5hS2QD",
  "key21": "3ocL7FngkDTyADPdnTfvuQKuRpJ3bB4JGW2SGvxZjiMUX55G41HffPWeC6bHvkJDNHnHj266eX1KQSj5xbQxCT35",
  "key22": "M8wG5sBGB7jWPgKzZfyNyvskBwmc1YQMKvw4ZBUVZkhhpWxgxF6C6atXDDYS1a4o5NuTQpC8iLrXdeZsXh6HTRU",
  "key23": "51wn4hFk6RpFtmVPmnAD4bmA9bPjGr5vaMaH16KANL5a6oS1389Ed9TD4YYFJFbroZMhCcAfeSxV1jEnxPufTvBG",
  "key24": "465uJ4H3uNzBX6546qhSKXaGygCvHuQtE1HD7enLUUJbSUjq3n8hc5MBtANu74ZN59NFxRoKA2Ugeoop59VYjw9Q",
  "key25": "2EY8mcZaSvWRPUdazVu8c4mECSqETKwHkrXfWV7gYMCFjLH2tiLTqCzXanL1w6Zck4w1QYpz9RifyUCAXppGibLm",
  "key26": "4AGKpCQwNcEMY85zRk3oodh9Z8bAufdQA6Mh1iRLryTUh9AHFdD6qFnumzawJTpXtvZ8XvWZqKhRXuSRXXzEyQ5P",
  "key27": "4G5dEWnFzyuBiN1ynJ4pVgRtYHX2Z4VJ4S862XkWAMyvLXzHonK6uFPGjhVNnvDreNdJADW1YnngyBjcaNPk4kfS",
  "key28": "58T7PPdEpXNmXBwC8MQud25MEZnicZ12Q86gkn6MasgXSDX2wN2VP9JQ9qPNjXNdJ4JfgbsM5NrSzW3nCmm5ZwE7",
  "key29": "514pAxo6f32512rYS9uwv1q9YhndqFwTLa53n6mnRh4cGUS32AvUauhrc6hBsEBoHEZJaiaViQv2DeD8Ep6grD8q",
  "key30": "Je3JiZhwEzDx5T6C8DNrft5tr8CctRpEy2i3kR3f56PgVFHVSjqnfVat8aciR7vZatj3SHFkKJLGaTYHt3JZhPd",
  "key31": "5om45HSqVwBxp4vfvunyRBvsKKdHCarMptcP3RYkNGeQja9U92kPn1hfRCQr4wDfBuK4mcEYMganVvhs59huPcSW",
  "key32": "4z3Jddjr8vbCUWjS5vKJCQLDYaAwoaqDdC5e3jYAuaQXCi4uKSs2VkinSVRgUjoRMDJ2HXC5uyr33RczHtVt23rN",
  "key33": "5236zMCr4z48bohatijsXzKLDUwsiXQL9fpMrgQcNDNAPTwwVKhqQqSLn8yFZYU8sGKmuBYdna6D4mujW8HoxtZJ",
  "key34": "2tWfdgegdhgXSL3eMjKjrZRkDsayy7KJurcfFJz5eP5KGF5JVrtErcxKppykx5cPD2153Y24KwLYfQCYQHGBhqyG",
  "key35": "MJ8ewNDUh8rn538UuPWgwWehb64BuNi6X4bU3bSXShb96F62gThPsRgngJTxPoQ91RKKavjJunLnA4hZ7swUwQg"
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

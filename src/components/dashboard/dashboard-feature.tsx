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
    "3xHHzarvjDv6u4J4xdc1LUncWbfxRYQsFwAw6BsQnkLz7xdRsLorPoB3JMUjSkxueRYYkbWDAZnNzenC41P6ZkxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNkoMfFZRp6sPACH2mcJZCaR9jPHRwvMv9Yk3d3RoqueUpCgSVPSuFTt28nP6WqgyegMTEXbQ4a5iCCCXaRV7Sq",
  "key1": "3LMtBxzxJ9dT3jyN8QBdQeXrhqRrGFuuHEwsbRCLJAjiiY1iJmUyJbQUuM7DgVFAXErchuFjNDd4x3ajY9s11P4j",
  "key2": "3iDawhVgXJYhD4ZdjTMqiu9QkrQcHahreg1TJk2ueFBBkuabfTtyyUTYmo8cC9Q36kmApbCvjf2usPFbeApEVcbH",
  "key3": "67DiF9nudk5mvtdXgPRkgsTqwcoPAeN3Mik2KsNHuPWebGfHqsx9aZdtuqRkufFsds1NjmbSvxkU3MeAjSWVimgz",
  "key4": "4XtfZ2Ys7DB91jgFZh9i8ahEkCuovXKYrr4V2Bz4vDd1xCuFZ9JjM3eYzR8vz1Sey7pG5t6FR36r89B1ovFpjn6D",
  "key5": "HDMfbuFWSGXZfWyMDoFfSyfpJAVMdn4PM68AK3fbyzYfkSxs8bv4U7d9ukAyYATxdJmih9eGGVujUKoy8B3VbtH",
  "key6": "4TwLWaSAYcPddLZviHXvPs3pUADvoxjSXAB1SyRreBoR5mEgruwrW68H1ujTuZ3WzeKgBNMwextqFxTrvRMoFVeJ",
  "key7": "5mbqUWTjbFPiYXnin7B2EWqGmRGRYmf1Xb6qL4UTcNJbr5AFv8hZc7JdZTnBDnoEZWASbKywM7pz2kH64CSv7BFW",
  "key8": "a1XkjVSPVQt9LQWZN3TFKVUp3pqGByVNDveHPSCZcsXZKCThuwsTfKTr8XaJuQ4QmAkpQ9rYkuVhMKjW1BZwWde",
  "key9": "B1NjXJGWRYW9DHYVTRhbVJL7DJT1d2MMgt54n7hjES73RzAyfLR7gUDzQa1sN5UJedTjzdX3wxryNigMYW3RuGd",
  "key10": "3nGAM1r2cFSrKTEPagvXxXNXvuuu8rrCGf5tg1zKptbJxe8AT2J8Qm2q3BBqrLr18NfXnckc41LQPmoiZkLNkYuG",
  "key11": "4wtN5ySfpiLPL5Xp1CfAHZXUbi5G6nkNqaZuKUzGqV2S6vGLPQRRQtw4Sn4JJfvRVWw68bd1nPDomoqgh5EMZdYc",
  "key12": "JXCniMx8CVy4dkcKqSa6Tog8QfVnpfdGb2otkgCAxKn9YP9icMQoWCRSD1uyw3mmzKSzcKhnZfaimBhPsfw4ET7",
  "key13": "5qpvh6PPJPWdmYq2mSyndv5ZgBLAPFxo3qk9rBJ4yP7JFNVvoZmBiUACMFK2qSAFttqVPZ7M6MuWTHT6P33Kd6s6",
  "key14": "5SnjxC52Pi9NnViwYSYHNqUFjwRAEubL63RKCoxQ1jvHszWp7LL55BgLSJ9xKBRsYCSpKnq7QmR7MyEcdEQHBfpY",
  "key15": "61zZbkVoCPW7STFeEeAxeUBuHgoCe9yyjTRHcLLuLEpQdAQmUUqCGhYTT6Hpzeu2LEjfg8S1cnSy8efPsB6coFho",
  "key16": "3Xe22pkSk1MQ4c3b8xxZUWZzaLoeHhT6YVSds9azKw1Bv3H4DFcyMFK7wmK74EoHJFW2ehtAJLR2NqLsA37xD7EF",
  "key17": "1MgZ8j891EXj9d1Pkmieb9LUvpJUWoucTwJfNvQ4t6qZCaidgAquaYhxPFWU5qLPS4Q3YuV41jXZ2na7Bvf2UbL",
  "key18": "4uZAsRQ4EW59CwPtGkJf1foFSSCiu8cnQbmk46eHYtostrjHVrAkgfTCVp5WBrrDuqzRqLCeZtUCFYWyVaRCbwir",
  "key19": "3xCsb9T6nbA1LAFGXns2tWr8i2tBJzc1fTvd1i3iPZDz5TrFn9mdrpDJZH7ivNq1z1MPRhVe9erA2XFachRp4Uer",
  "key20": "34oe9QbAA99ncUF85yGEikfEsw1NnL6bS9GajV8o5wtz6WRgkxiVVjCTy57xmuCqVnHBi3dBfi88bAbsuduDMH7N",
  "key21": "2hFmbBQQWLphzSQkbHq9pqoRHgjhXYLQEMxemuy6dWjH4q4biVYzqzTZ6V4PBTS8iensPBCXifyWc11wcaoPrSJR",
  "key22": "5DBpka1pFNQvrixi9VR49vgFWYDUKxJDfR886F7JfWkErE4qPvmXxrZh6mYHojyYnLGCLnCvpZ6eG1Rg28EvdzzA",
  "key23": "43z5x2Cq68kokLA8JxCuNvWakwmwvsh9yvYhBe4FbDUAzrNVgDJjsPocU8yFMuyPLVayf51rPUyYinHuGVZFt8sy",
  "key24": "4QDcUmeb49m9H9Zk7jbGurFZA3xYoiDoAgEsA3UWXyuUe74D8C4fQSBMnawGvksBxUuDjJGfeJXEeGGeRHsGEK3i",
  "key25": "5yx1gQVCUY4RG4ZvQGec8X1ZNFzsh3nyNkxwBddRufBFbogE83ezgS6qkRysVGm5AUjHcRCci9uWwvqJ7TRnnoPM",
  "key26": "4o5Yw4g9SaiMCW4ghdidF88CVnQHKu7nEc1cnEj3uZP5T8tB8iTayWpTEkDCAvHo8cKcMFt3bBRVb5jDyx3LdzJv",
  "key27": "5isq3ZRSgzZwaE9d9GiiqzVfPDWBWKfpqqr7pJ8D9b2kNSCic8rA3sHwur7toaU9Zpe4qgEnUG5QAXde1yXWJPoa",
  "key28": "2fW6GkrXCXxHNV5ULrDaSejN3ESBXk8GoyXmgEwiVM9wPU3RMKLoCmWKJdHwnu1srBXPY3b4jrqfuHao7nGHpQ3q",
  "key29": "2atoFg8MtRSyYqfQPV4VpftbaRs6uEunmAxCrWonzPfr2tGqGGY7aUo9tBeiiPxDfJJTnpAgkda2pgWFwHGba9vD",
  "key30": "4eVC9hFyd4sV12gJ8kd4wdBbrQCJAqsfYMJ2Gs2Bas4nD4FSNS86Lsyncz1VzvzN8nURKiVXXXQ3E7vLGGam8nfH"
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

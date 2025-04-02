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
    "4rGBNthECFcvqmuTQSTYHsQEqgpNYDsRoRhRwyQPgy4ki6JkRzBA7LTpKsztmzjHY7WXchnmVJQJEMzV1bQJhKU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "337AzsmkjBtiRb6gtM2XACf8zaBnKwFuowtcpUwYH4EFmDz2Nvc3P1ogUdpCU4nzFD3f3vvhH8ZbZfxSpWPoCK8g",
  "key1": "XH9LeT11Q73zTD1vY2xhKkMnb5JtVsGTwfiwG7apyCTpq4vXy4CCaaEoQKSrCYHNi8d1NZg9kZGXK5SVDUpmdfL",
  "key2": "5rXf1v9nQ9JVC3spfztogazznneWcLos2yZyZ23yKoUa99KsSQdwLZW4RcP4EEERLMs37pnT1huVKAPnjnVkWVBr",
  "key3": "3Yza8MwsPzrbwJYXUcTS3RPG2qAw8sHiTKXYfGeiDkpobiJamecopy9xSHYNupNRxKyUsYEDrgvqCs4sB4MFyPbX",
  "key4": "4gUE5WPiVA6PciawiGioAUk6mUfd4mK7TzyrJdHF6yyR3zg4ueQ2TxY2GCQHw1oaJUgNXVkNnLXLNzWEVWxX9E8H",
  "key5": "4JMRDwH5ELJ8twGG17oCLKrEkjjVyFvfGaxFmTgCpqNV7PpbderE2vBNNPvb4DR4d1RARvS9PqqwdUf8bmzhh5Rd",
  "key6": "3owttCKWT6gjTYEKsza2Vb4Cu7AHYnrYVjL4txHDynJ612Gt2XT3EtU5MxEHfXoWPmskpJAaAWjiYeu55P4Kuma2",
  "key7": "42ep174oKyBJ9V1aKZ9e1mymL7hDW7LsyxH5prZim9WZwhknjHh8tPxjGPynguc7kbXLKpu7n57k2crGKW77c8Cm",
  "key8": "5NvRZVaHd48YFUvRqMM77TxLTYM3kmsF9314HUYjyjxmvk196hZVYQ4NGntvcnM9XpJJVnkgxTLAgqNE3mN6scC7",
  "key9": "NZWyMZ9qwyB7VRpk3ABt1sPRwMe5dAerAcp2ELcTChGJKhVsPDXouHxGkTispabiqFCHT5HJ63J4xFoFkyFtd7D",
  "key10": "3i6gXL6dEvtvX6QFwPCVEcmuvx1gv3bYeGMD7WbsgjeY4XnX1jaTscLbjDR9fNqzganuq2WdXJNbXAJZX2WnjUJv",
  "key11": "5YpWXY9Z1G6WU2LBaurvHNXNp1yNo3RDgsZATcwLjPb8NCfVki93dfwyYNZkcU4Z8hseK9msFaZyRQxEKc9K5XH",
  "key12": "3FNBDRE5cYJwqen6VukCz5jSc6TZqa44h7egitNfZh87G7wDEkkXT39VFXD1D2rg4PXxMeKc9CrofkMgkESyHuCo",
  "key13": "4kFv5PVd73yGjUymN91cvwY1NGayB24mzGZJoLVRF1tPdtu1Dx4cxgcUJmE8opTgMj2nzswpp6ao1REhtnrNmuwJ",
  "key14": "24VqzF3ZSLBqtTGswNV3nMTSkiiYQWRQ49hTzPZ14WusvXPFwSprpH71DL4sswM2pSCA6tPnF6HtcF2EErXAyiZf",
  "key15": "2hLgfUr7CHXf8z7mXEqR3tDBsoxaE576WmuKVERfSVVLwTApCUAZd7EgqnhJmD18Y9qnnMTfCpEwhqiUZVgUFmwu",
  "key16": "3e3vpbKWnA37KQtK2eLdMm66cZTHWzVU1QTcZmzLDsBQhK3LvoJcJHx3AHkAsxUMCX6fcYgCtbBy5JMgjGGxJ7vT",
  "key17": "4PkMnwuvki2fxFH9ySj5PSxHPfF5y9p1CBTA2Qx4oxxEzuwkj5YuxaZ6KBu3RNfd315Zdqi6y2ZftssY8xBgCMQG",
  "key18": "MvcuJXf1XUBQX6ZiL97sEspqZzAxNbRLA96rSZJjsDWmWtbtnbzBzbij5GGuzR9Umb6To2uZToZpvHNKMGbs2jy",
  "key19": "wwP7PiENYnz5rCmZDtKEYgvPYu4t8rhT1inhAvHvKf68Ga1eUPCcd8E6xhEqjKWLAqNNGVew9HPU7mrRTQWgNjr",
  "key20": "n7boAyV1yNvhVegpFA2RiYVZDMppknETLdfGZwjZoQ2PG5eAahFDuVUKStYcwmoqaR7E95czXGD4QJcGi5KwRFt",
  "key21": "3rRnpqK8K5g6PhdwQKZckCQTCoGAvZ8TMqiiphFhchaSqYuosUBQBsQqNkqpw1UjwUGwwpv6LXK1ZZr5a4GH29kD",
  "key22": "5hDihCWGvLXf3MbtBFigQ9YabZX2wazt3o1etQWQovYbLJDoqtVz22RhYBXP8Lz4hqCJp668g62yJ5ko4r6MhBjQ",
  "key23": "3mxeJaKxBfBzVXybq2XCTJDJ7yt4ijGsSipC2kD9BLi5n76NiGwoCmaooaRW8rhsZAGzKtW5YsCpKK8otZcL4Zu3",
  "key24": "2Kr9HVTBXv4Wp7Gd9K7xV7Je7q5QYE4cDz14zLwJNf4qho9677tdYmgDvUdN4cxQsobWbQ4h1FZhWPn99ReKnBQ9",
  "key25": "4vhBv2PdR4BTXi48CHVxnL7bJkpYJdBeF16qNMY4a5wPWCzs5kEKTcVaijp2Kroha2qbQhKyKKP32m92GUnq5TuT",
  "key26": "3jijDAr46DbWobqkqwjpE6ULNQe9ciTHsBLR1WszGH1yQoNd4S7gHGWE7w2iDDg7t5w4Kg6yUXUREarfQeZoXHjh"
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

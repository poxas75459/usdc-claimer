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
    "K5hr3L4oLf9ZZC6EGPPv2AD5cqfyQoVQN7YAEn6ifYficJokw1xSNi5fo17GziP2XYHdxRGy3vJxiYpAPF2JegJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsXaUhVVLz8ENjQzaC4vrUfwnVCjvC8bZv5jo1RMZxoguaFKV5oPrapn7LLh4qgm5jb8ZrHygAKobadv92R4vhx",
  "key1": "3qkdmCHkZFsPdWdST1tfPNEx8DuWMCwXrX2DxDhDEE3Bum9UGNP8MXVPieKn9oN3TsrqtN5yP9ZKefj9MWNDbM5W",
  "key2": "4TmpXkrudB8GuJgaKC2xmsregCLwc4xstaTiqf4DeT1caeK76TKDp6VbZAQfTakHC5y3r9qhK4Lu5PZTnwUxvAaL",
  "key3": "5d8Fppxaq2kgpJfkRN6jLSgYaxUHUejpBNn4RjfsBQv3uAeetnAvGkvXps1HRph6x5NXhC3xXiTafEfdU2cqH6CE",
  "key4": "31Na3ZdGaBgvL1wgrzrqagbzuDQ31E9wYK6wR9KQ9k9YYh6968VmbergqFegWzuWUBYsYNQ8zquWz6cea66jRrXH",
  "key5": "2YDYeCoKmU3AKpe9MoQjne335QUBB7Q6a1tHq6qYNjKMKNWfWUhxKMv7aCfFmXMbQiUGAVChbpLVTYaXjwAVUQF6",
  "key6": "546FiowRHo66BUeVkUsautcxu3LUeEzMT7osABPYPFsEKCVj1hjoq38NFJkTgDLASBNvwdhP2tAhDdeC4U4yXuth",
  "key7": "3mX9YrkXaMhzm7aJ369JqcquMrRqD3uXo5EgbGzKfDCKeC8KTNWmoN2C32Q3MWR9iz4Xav2Lk9FwwzKEhzY7VX7D",
  "key8": "534uFPSkTg5sVKCrwrQrWQxS6K5PwjmWz1Rn8yJVVcbvCpRG5mUkEYYcVess1Vao6YUgHyvZsjFxdJrRCwbR9s5E",
  "key9": "4bVwk8hCSrBwxhEYNdt19w54hAZkEBouspcsm4XNzQmqX9WSWeitYg57nXXVQvDVBcBMnpa66zHeqQvoHw3tsQWb",
  "key10": "49fbusuhMVND7v1HGQcdFQCke35WLc9PameQQ4gwp4zBd7APgEYjCJ8UuipFVYYYuekzqRSdtBMeX7uJ57E4dD3P",
  "key11": "3CGix28dr3dRQmqqFsiS5TqsuD3vDD9Djsjo3aM7xgY6K9TcPonQW9CxiUSJAcpVHemRF2wtS67ymJ7SRQHAhmGY",
  "key12": "HytsDg15ecFAFaPR5Cbch2HHsuXmkUDuJKN4meMFk6pQfUXyeVwzogsRFuyfxbg26NsZ2m9grn2hvMrSUPDQxNQ",
  "key13": "4yC8P5G94Y1E7x2zcWsj5EuK4uPDAPtCWj88qYaxXfbZCLr2rKJtRMEE897vCuy4GC2ycVmJpyyBBf7mFyFfo84e",
  "key14": "5ZGdFuhqFk6jETY7QWutoyB2feSzv7jeh8t61v2izgtJuYZh6uUFrs6L6XrzsrqT7S4eeChXPaMnHAoNmZWWaPd1",
  "key15": "2R5pMnt2BJFgY8mnhPt53TZ2cRn2N89yLqCzL1gGnujUTCLgk2BtD3iadwsSPdgLMAmpWoRs6hsV6dM1fHFEwwg5",
  "key16": "2Ls5i8FWTyCt4AXYbZPTfVNs9Q4Dv3mkwKBYYK3uzHb9TL5ae2WGLapUxirmYFUScCRACaPZWDbTcupcMZAPGKbU",
  "key17": "5Bg9TBgUE7KHf28qbT9FJvDu3gWRK873r5ruLYAMK596kwDxiCAqCSktmCtFMQjoE7XDXodqxHyi2ygahNU5m4un",
  "key18": "3y2DQMciCNMwzv3dpYabybwRJAifdQcMUfR9nUNthdqM2JB9MYYQgpgbSo3thfxVA44BhQTYTy7WqhgtUVRodZh6",
  "key19": "44HFQiTVPAMP1QfreayrYDiDNVjtRZrvri65kQjSZAkUGo3LCBTzZHTNjHDYcZhhkNjMZfGwV8Zs7fEasttcRU4d",
  "key20": "5G7w2jScx5QwBcrfqb7XxvB7xzJybduYF1CiS1FWb6ZNaTZ2ibEC6v5rv239zJisQ4nLhyCMrtQZCmUa7QbrsQkQ",
  "key21": "qBnT6XLwZH8iDrksa9rA3VQssDAujLT1sWCgdKdxRdnjXk8hudDdureRH1rtDceQLe5xzkdBBkh2jE8Z3ECjEtL",
  "key22": "zU4fLjfg5gTKDnZzadU5mrLH6gPmhLBy6GCFfft83RtkXGVpMhNwq4Agjq9H1BqSdZNwoAXzHxY35KR3xPRuobH",
  "key23": "9xP3YHZgue2NxFeUULAN2LyFwz3FjKA6i4wJ4DMs7pjU7Ub1y7UmV8gnDA3vmbTxvuj7aYxT9XUm4ZaBb7aimvW",
  "key24": "22D1a7ss617mCBUMK1CtanF3yphYJkufwGdYgqvDku8kMC2dWf7bBhYYYFbyi8XrFz9jbeqaMHW3CaWRY6UBx3fC",
  "key25": "2NYMgix2fyZW7uFaejpDLpdvrvQ7tbkSDmBFcGQNJjnq8JiuwK8s6sV6ZWnGipycoJFutppePpy64EKBDQqREHyM",
  "key26": "nKUuP7e2nPkyBbwByp2e1diu7mfvgPLwREskybouDiVQpyM9Z7qKVA78qFHQdGpADpLD5vLqz9fWqfxSiQkCMVk",
  "key27": "49hnq44PgFNaTgbrbVMUvYaWatcAvij8t9XtsoaKdz8LJ1L3FT9aar7a5RTPkSqcUAgVv1fVmKR59Q5WeTW7g5Ep",
  "key28": "4VQ9X1vLyLW8rRLrfutK7w4F5JcHeioTvXNRR4JcgrrE15v524uk9HArpa2yCAjgQVQrz6TBVFbCbXY6XSbm9wPS",
  "key29": "5tyTchQsHBKWc9L5HRNsDLf7JnNnkoDWeYrKUmntDJqsHp8NnRJTfbxPbK7Rhv9WT3pYKWGaNSAZbDJJzW38xpYm"
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

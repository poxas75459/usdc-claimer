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
    "4cMmwdy7N5baukrnZpY8CBb1QfqN8NesQoBuNz7dzaazKyVbTxEfJUNHvFPDYhTDUjXZNRRQozaPaA7rEhUJjQvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637cTXCLctmTzGCB8r6fjRcQ748ygKLVJcc747PpidMPg5qGj6sD76dAPXhUJVWfYVaFXq8GgmkXzPL2WoMzgW5V",
  "key1": "3NT8UhUkWa61HQkakU7ZiWgdFE79pWoc94RHEMwKRaNfqDbhdHMnSMkJDnjsBCovWDynmY6WJ6Srbv4sdKDCK9gC",
  "key2": "dxQgSbwQg7QkPvNv7cFLrTmfkw3bzvbCgEnC4YaZbG8wp1vPXgTw3hhzR2k4gf9RR7vsXccL8fxqYkr8iwiN8Vm",
  "key3": "sHp5L4QjEfxKZD9E1EiyfRGYXg3PRd5GVpv47swvBDiYQqFQ97YnsBF8MmYFXWuMz9fh4HXTshgKqzPxHMzwkZo",
  "key4": "LPFcVDvHhL2VwUnP7Czjsuf7XTHik2GEYMzazQShgmiY6GXAXg7c6GT6ArTScZgwVaM3o7k4LKFi3yo4N7wGF2x",
  "key5": "44A9nh7E3qC6qQGj77MtER8S8hyQnBWT5oem3mZfosHvz6FVGvRnTMwF2mXxPPft2FDNpWDxAEMjXvSC5xihz47c",
  "key6": "4swngTgm1TuUD9GFSsHceHictDgjR8CgezTSPR9jnBUmxMVKJBH9gRMofYcx7sGbRY4ZKfD4nUEc8ibcirXNMDEX",
  "key7": "4TUVyaEyYNgS86tokymD77XeZiqhgouPYB8op4a562oaiQpTA5NS7k1VXPMxhW5sj3H5WAc7co1cQDmiSkFwfo9e",
  "key8": "ELTQjA8bFHyP2SyVdN1WntVQuWpSfKP3aWa9yRnG1TiW3KqdqmNLMHoobiy8WWwhikPfJt788DYAMS6hrfopYMf",
  "key9": "4GfH6HaBybY27XnAiNJ2bL8gmorrk1CzHGapGBiRvxjrxaRRtfK37JZTXt7zmWGdEgLQ6JLNpe4EbNwJd11hpM2E",
  "key10": "GiN1AFtmFzg7UVRhLooT2iEY9TK5ooWSunUTxerYZ6kYB1PM9g5fQe5Pdm9MAhos16t8RjSGPAFMxuPcSmf8sTH",
  "key11": "MSxo3tSrKoQhZjv1YWBLtSxufv8X6fbzGeVGRrr8eq75VhgMc2zV7Ed5uoAegv6yW3CzxoBoMy16hy78vE6Puiv",
  "key12": "DU2y4y6wchydbwJPDoNeJDDW8dNH4VJheMq1WBb5bFFpJemnoS71KDnyq6FS4D3M2o4AUGcwUVezDQpA4SMYtcp",
  "key13": "3PUQv43GRQueEiv9e5mzZJxSHMbvEYtm1LgTek6kq3exqRWR3bRGCmiyWLvnYd2FwK2MFtT1bK4ftKukJpezCntw",
  "key14": "vFvxsw9j7ZbcfCMveeicAVULpWsnxwk32SVtmG69FZhDsmugSjEjgR4Thypvzg7BPiSfchqJc97ZU7BJeK2zAkV",
  "key15": "2zf7L1t7TytFW9rP6avoy5oZb41aV3h2DZcrTJ2fzNt5hC26Ga7MSSHCB5E8F3KhSYwNVUYuJV4iDYS6hVzM5VdN",
  "key16": "5vYVtKhWsYZZLMZ9tfSvZkQaNT7QwxnjD7XRPCcdh79tdompCMo8chJnmuJbtjGmAyLcuzQZvUvJZPQcFSJe5bXN",
  "key17": "KkVNtxZUubLE6MR6qH4PPtR55vZJpaMyvBqqNoB5iLVxwkFczPCYpBbGyJgZFvfPtiDmvakS7V1ScEuokVZ5k3Q",
  "key18": "5H7nGhENeVKbqeyYZTnK5VvDLs8eKTVHcZrdg9FvJermxhYZBELFaBHVJavsXb2ZutwMj2tgfpVECJJZL1YmYFza",
  "key19": "2q6iYbdWGcUhdsSCRwYKLLsHtQi9SFkFGhfVie7afsJCZGSKAyEobvmzeJhQPhLnapEWWTSDqm21K7freeR3Ujf8",
  "key20": "Bb7yAc9ZuWcshT9SPbto3JK8zirCu8XN41ftVL3jp24vb7KhsPv5CHDkyRiAgNWusxqG5wWtzaBZGq3yZmHwB7S",
  "key21": "3HFbt54ZrQJKGe5rynNzH5jzJrRL38jsBWGcmWm1r1hwkYAHTPxhpG3PbXKuTopubAot7JYUBTy64vCtki7bfP73",
  "key22": "t3jSSBfY99MHrUPCVeNkGfyk4vHe8YwAAUS4sPM78QWw5myAqJ4jChFk3ce7eSENkYgNfbzNAiAvMorsiQA7dSh",
  "key23": "22ymkHnZsF4J5ieye1GCsmbrPbkGgE8LjCjhXDBT2FtG3KusffRz3n7MQm43qNiYQbjbiWP7chN5rZPR6wqQb1qu",
  "key24": "4Y3SYjRXTRwWJQ3hgZ5kH3wPbsUvPV55MvDUd35RRatsdnBNaHxSE9V29XPmrrQbS9zDhChNXMG4Xn3ARPmxYGz4",
  "key25": "5gzxJDzGnN7LeQCh6mDQyL1y429b6KLFtLRz5pd5My51N9qeJsxvXsMc72jRGcN1zgGk5oKN7ufgBPznSgPnpjEG",
  "key26": "4knsoSTV4AP69uHXDDLfjH2fBYHBP628gyNCheVUkjzAmAXgjfhBTQGVoxyFD5s6BWPDxKHHcH3QEktt14D4sgon",
  "key27": "3VCAkjBL8uDtUVbpvSMTd5nAg2ARMw94MkkEJhAuHhUKZhHfuCZi4dTPf4VHC3yEYaqxKGNjuxpcfgo9WpaTVnE4",
  "key28": "RSrbZhUEmAU9iBJg3yhsjWQq2zRjZRVyosj95c5wgiSh6pNDYFZg3WyCwyrJM5JxSwpCwosvmLE4KPHmup7S9Aq",
  "key29": "3JLSbTBhB89LBcoPzEA9SGQJm64F1TFP1qJwZCt8dbjgdzPDZ3hZ161Sd3J4Fd6arK8iiwHzYYQdVxD7M9Xmcu11",
  "key30": "5quf74MQic6G6MtwatXiUay5eRa1BuNvD5HUzEBYGDwAefSLkdwnVDvzJnSGNHzecXJ1YRFhocBszevYy8sNxEX6",
  "key31": "5rTGFtT5mX5fUua6mX1mDiJHn7Kj6Ns34dKnx4g5CFFf1TtWYGMajKwJ3nE5cqUFmbJitaJYaWPeJzcbY3diNdad",
  "key32": "4NPA3Jx4mppzRMzwkBEr7FQnciD75T8uQ7uhXaYe3xfGgX6jmukioiQ1sEs2R44f2aD4Dfmw7JWQBagR15NTiriS",
  "key33": "K87PtAwCmaax8g6MfuNHcf6L3yBjFZeKnkPozRz1KUykLX1h61zeC962Y1KBeAeqcmbzsBpRYYBK9ZcwJjZgLNp",
  "key34": "4EVBKFruHRXftRSdc72Aq7dWZkVz3qDCz2R8BmCcqKFtEyRPr63aCXPDxoyjdxUQUUEGe77fGNfRYhAhnFwUBJtn",
  "key35": "2aX1Ehbkqw6Fh91XPYPyLxYbGk3rFc2t23moRa2ZoUBPSpLbxPZcCE7SdMExDVFAva846D5UmUyKMnG8MYMYRkJ5",
  "key36": "4YGWaNUAGQPXT5vuoZQNYN7A8nJovy3wUbNNaj57JzMdBpvxcvqmMwZmuYLS9xagQGQo53jy9qXUjNqAis6kkmXB"
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

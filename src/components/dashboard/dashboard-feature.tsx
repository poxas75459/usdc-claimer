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
    "5n5iA4KGrgfK4a9YKJr88wGmMfHEEMUXssbV1hFSAQYzQpsj3gnMvcaUNbWzPGeCT5BuNtvQktgoqyGKfJMpdiSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hAEyRcgkVJzM9VmpFWRgdBfVhyQuB6fANVZsck1KiokZD2icMfv5swf4zs4yN1ns1YZMrxtcuicNjWAjB8Lfn4m",
  "key1": "5oTLB3Dk9hr7xBF8amHGu5neFbtPWBz9mZAZz1QKyRLMibuWSnHu3LRAKnE364WA5crkm9vqU33f4TvaZMVAzWJa",
  "key2": "rQ5ZGeHDDJ2GaCSCCh6iq1Tnd4kG9rz5zHTB3gnxPBh8pqdHonKamWk7Djg9BmJtPEq2XrHeRntBiVgY4M6LUJZ",
  "key3": "3KMtfC4WQRQmmGU2Ryfkya3DYNpWkWZPCa7jDpCrc4Buz8uhDHkQQzMJwjvCGv6YyqjuacpM2rqQy8Mwc592vZw8",
  "key4": "2iertvARKDXcgLJVePg55EwazPc2EZ8JCzgUir4gMQq2T5Y4TfxaSFeA5Mxx1tbbMYviVYfPJUCVXDqAfyWptBAW",
  "key5": "3ZP5LRysiqh27Ydgiewc6GjSuJjHXxDvmQeVJyc7oFZucBRx7JmeGbesC7Bfxj9FbBJs2UggVK1QPCZ5PAAWBA1g",
  "key6": "5KiQRxoVgA4TztqudQtJLUjW4maahS4SZM6XFLh6sHb7uL2hmFfZDVyw7QuVgAN3vHA4jrBwznoBD1jqBLPTumui",
  "key7": "3KiyjMgDWiHxeiW2EUkW14sdAMZkQwPevw5VDwK5Dvp2v87LFHJmr9atEDDENzJ8zb79RTNVDGRBCQkfFsPrHoat",
  "key8": "5h7ZSa8bBtdGPg81nqUCDuqSpYuctCDkj6RDnAYDLfancnEYmrzPWHUnEmFCYLpiSTBdtmpdR8dVsRx3aDdnGVy2",
  "key9": "611s5FXxPbot6USVjkS95fCetNdq3E5fJePjEkugPSC1nEcswr2R294N5NCjLkKbrqw6JpyRRQWGP72BtoBTT6Kq",
  "key10": "4NxqjNZqJd1T3ez31eBx8s2a9NdquTNmaqJ4vHwRmryekvCZb1ncWuYrLWWbMHNvK1SnQN8pxtWNWmGToZ246zpZ",
  "key11": "FqLc7ugxa4J51nhCCw7wYmZfiAuXyEDdiMw3jyuPDs6REU4rSF5Na2qaktR5wVyq2cmQRt1Rw89Joucn9oXTp64",
  "key12": "63uR4R3Q3tReRzUKNzoEd5onKiKjKZVWr6SY9kSGhLUZD1uq9pZxjLHT5XwB5UB4kMboMGzmW9oEG9Cz6xCMdoJC",
  "key13": "2d7aAdyhcnEQ85yNGCkmMvox2KGGKcbh3UdHdNunNcHQxYB5i3ykHuvXzTWs1HA7BgkpFDrS6eww8z2pQCYksnyS",
  "key14": "3KNJSDoQ6YRvUXCq7TvTaDYHFVgQsRoMdHGaCLpuC6MQ9A7RZpQKnM71K89icsoaxUBkWwNAPCMJNpPKSAnbn9T8",
  "key15": "zu5nzwLpZ9kSK1PfHckxcSsL49bVYkXKSQTL69h5wozkUMWMTyZpN1RL6kquimZm7LV11G696vxeEK6j5vrycgb",
  "key16": "5y5hzREzEmKTYuzp86EKC8yYx7vbTsuQoe4o9oMRfjjjxaMDtLFDPe7gwcqRvP2QtPU3zKsZz9r2Se9QApt2fp9b",
  "key17": "4C3Ygn9WN1us3aDWaqf1iLJn78YDBEgYxnKsfzW7Fw43ogf6kRwv6vfMVqAUojAxJbjyoTes798QUc857e3iig1X",
  "key18": "3rWZ6A3qW9cL3BA5wdRAGfgp9r3DecjgZNtFqrFcHw3QpLm6j1As8tsoNDkKkDFpJP11XB5YZF6zmXNDfsKpjLv1",
  "key19": "YTTx8kGhcrnZJqhrpZPX31a4pdiYVSrZ8TE21fF81uZUMwek2sAmqoi5JJ937ePZfrzbs2b64rXHi4nJgT7mmrj",
  "key20": "22BbVdZsWdYiBcVwYNhzU9wmBbdWPZYfVjbsrKTs8oHF2yoAZmtAUDE18ngGYHHD8r8Vv3162xb2UHYqwZKf2kus",
  "key21": "zkd8o3VTchBULwH3U2Tqqtc2gLWGfkrrxhw9ZxRowu95aKpHVX4o9mR8zRSuHgGBFyK61n5fRDcb32g2xVebm7E",
  "key22": "3oJwc6iYnt9bBgp6DqwUgfW3jvNQBmEe73qHFVURqS7J1u4mcvFqdV4jNAPm2nkrAvocT2zs3NSC3z6S1x4H7MLn",
  "key23": "4Sh5J5LHoH3VJk1JqpzbagZdB9HwBQfsEDTYNGAxPcWLui2w43N6155NfgViGrgUfkWH3U6qgHwDRfjcQ9P3sk4L",
  "key24": "5u7ZwSXuWo2qPht2YLebyyGVMBcsW4a13tzgBYbLjfh1jVYuDVJvpnvjH77hyJHjNDgetDNRD9YH2Bq4cq6mtKnP",
  "key25": "XHeeUe1NNEtwbDLacyzn7DVW6pUNCmavxFd1Q34jEN5WUB4dDLuwvawT85SRm56UMQn3VscFd57BvqVtW8GRzwu",
  "key26": "5BT8PG4jZMEf4GaLGfcNrM8UWahgjzPc9jj7iyB88dogWBpEXPwKEjgyqKoRj2ut8DDgRktZZQJncgDA7DQEUe7N",
  "key27": "RgeENEZf7xstMM37ojAwhPHhuqhRZgJyb2nsGnMPQKP6rQms3HiyBHfR7Zh2JAAse2ncLH2A8EtN7yxmbkcBamk",
  "key28": "5AaXMpbWTVxdLRqG8yDNJbmeKKvRF9HuoWgQrbeMGEvaSjs2vvT3AgcyNcKJX6NogELQZrFpEKXnpg2d59Z4ArcL",
  "key29": "2fdYwhiez1M84JtdgpspgC8Gw8ywGESbzgxPmmPeD5rtFjD35VAvxH6obxkEDebUYvmQv6LRkZ5aLEiUAECehnHy",
  "key30": "Fyk4gh9Ef9kXvvr6cNQWtYPiTGkPEsSSzxyzzezxuzZGPUHRZm7mUQTSehC3qBMDEV9D5diL5rZqzUKxps9DJyM",
  "key31": "4NBhqRfHt7r8gLasGpdm4HBpb6WbNSfT6bG6bX2ovdtC2XyMqXShpTzjqMNGKNq4Pdaf6Jis47MgAXLhymVojWCG",
  "key32": "5hpv3Mea26NNvE8p4a5QjzLjoDXfe7q8QFMw5EBsWxQki8Y4sQj8NVFX6BMuqHs6DmyQ5JaQFNE3vkzi3LZ3NCNY",
  "key33": "2RcQkjM6a6VJarXVyJFrPk7FSYfJFaXS5GBVyxdKhSbZv9cFcWV4sKScFxSZnMNSHpWCN42gAVBixoWcxkvzeLrR",
  "key34": "5EjPHNciVxjz8EdKKtDsyfE18RmNd7mRaksexw4j6cvFrf6gptert81Rn83xMyc4QrtBdLYFuRdZiixrWCdHApXN",
  "key35": "2LfkqBdVWNp1pAQR9M4riN3MtJ566zjsrkwC6VZnUAiXZcJjzN9fCg4UCGRV123ArMToKykmU1w5xWuL5MsUiAqa",
  "key36": "4gFPz9KG5U7uTQDPcwsjnJwHgyXH2GXfWGPxxmv5uD3SqJBrJhj78Pamn3hB7aLLqFimke2YsiHAtg5TgQgSCnaC",
  "key37": "3UBwSy5xWqUMY5Rhn8318xkwyoCDqgS34ckUL41mTRUKofZ4Q62rJR77AJQwspuWEB3HH8aCVpDiKtfY7sLcdqqq",
  "key38": "h9LvFZT4oT7JBAWrMv6DWkkp5bweG2Tx8fEDaX9FrBNAa63dSFKnRmQsNo3sxJ39m5oxpiEmPsNoh4goJf4JVBF",
  "key39": "3sKv41XZZKeKxmHhwWSkhLBmdLkUVv2T5iJmyQG7Ajt9nsT8debvV5VS9nHXMTcFQZKL5aJ3THQfUXf2Uyf5LbF1",
  "key40": "59vGp8GPejqh9qeRjJx3EupAdBF52eeQWfcGbKhymrTsnXJ36BUEaQSzhjrxf6t2vFnj6g32s4BeoVBcPERGT69K",
  "key41": "3ovULo1dGxVWtkGPpaZzXL9V8ZazzjWqEecmdLSj7YhQ9YohyGDv11GCbCvAWJrPbKMAV1q2NwsLLqszmgXmcC7B",
  "key42": "31eGuLTK1qwqJM4BqfobqJgzDLVy4F8Ui1eC5Dc2sZEQs3YYC5Fgsde4xbTzNvBXN1sBuAYkVskoCsuWY2HTnbLw",
  "key43": "3P1UieA4N4mAgjTRu93HGiWVJT4wJECoKJnPXiWo4Rs3j6jLZ1LxpRdZALBctg2GPuaE5KanR4X4jtyrDzyzoSMq",
  "key44": "28ebXLKutJHeGp5Gc4Bf6X6sZys1eCB6jcT1BP3zNCSczTXw8tubbjoHtoftQe6Xp6PSkd9fEsSxBwMYyCC1ZLXb",
  "key45": "nk4EPQjfwVVzpN6DJaWfHRei2ybwovpBayum1qC1Qwva6RPNESQ2jj9dhcxrqSdHfpoKeDAdi4GaoESjai7cZw2"
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

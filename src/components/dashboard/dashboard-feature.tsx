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
    "2YvC3VDKk9qwDoXbiLmhtH7T37fEtf3EJwxzjo9Bxyfs1GsfewF3dzVr28w7nm8eDdRbuyECYM9KgS953Mzr5wnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ece8eKYGFgPNLyrPQSCimAVeDU8Uu495jSBBQQQ45mPeuJzZbX1LUC7gisSLj8m44WyHoUAhJPPYcW6qd2Zdkzt",
  "key1": "3jmjuPqqxbCR9yCiSCSEPtt4GTU6kWZeb5M2UN8qHmFPXQxMe2iLvMU7bv1QGBEi7mGEhQtD6g519aeNdqPXPLSZ",
  "key2": "4vja5XadaoZjWuXsA2MRYsEMMvQadYCp1wxQ3ncPvmUT6fcKhy6yqABPKQkLEGeX1inkbPNcPcANkVAbTuoJywHg",
  "key3": "3gJuBoJocbuWH6vj712L9JqJUpDWdKM7UekB2UaPKaPWhuerEGvnhk3eQbRxTRWeLUtouszs3hsZxaiT8t8KiPUE",
  "key4": "4CbxwSdpf48uBQt63kRc8pWJiyvFJC9ohaeeSv511Av2BWvrSoLn8e9aHKKpJm8W6c6F2VUvSYZTJGGK7z2Gx3sj",
  "key5": "2Yz3c49cAZN8emxZ3J8B4uny3aP3e2PiTC8WwmRJ2SZ36gteSak19aFGBnBbUrf35g5nLphTx9jS55ZAwgKtokXm",
  "key6": "4LoJ7SpcJuFeXovZQN64J475AoHBjAhvwWoJTRWscSAhEc9X2DpW4G3pSRxewz642Fgf7BDiLYKnBH2qLtAPudv9",
  "key7": "4WofqWG8cfxzuwebBfZuRjKys9Pep6wcfiZR8L5EmgEbLxvcgWyvoqZJeHwCANqrn3gWKJAN2QwgaSyvM2HTpyiu",
  "key8": "5deafYpTVkHYuM8PLzP8sgpGLnX6FJQQSZ8umJ8iTFQwNZgCwyMpAzbFt2Yumjo6nJY9rXUHEjNPehrTZFwmuFgs",
  "key9": "5ZhQgdGY7yxWkxUhCyZDj48cz1RTCoaYR1wbbEDR7XDHBnUFe9gx8AFR1g1HHagfn8NL5wtLyja7vEMXb3Ng2LuP",
  "key10": "2WEEY7KK28SK3M6e6N9UQzNCQcqV2agYm9uKinRbAzQ1vosZ14886CCeFmYmTFMqQTDUUHhrLz8jxU9Xge11udP8",
  "key11": "3ydQjJkhE91dTgP8fj6ZcrPPZCpUp8UydLgwWr5L7pWoyaUBYAiUBCjijje4reHm1p3K6ctgWDzR6faanZ28tTGm",
  "key12": "88X284idPLMVrBS2UEAouYepyJYwSjcK1pPukBw4kcN9x3vudaaKRL9jkpf6k4rda9MGd2Vwn5MVLct71bpyD5T",
  "key13": "4p6aMLnGdzFzYkWroSqLt5YM6HN8YXxrD8b4XsvNesDftgPKD4i8Ck8aXLrv1SYM2qqLfFC3HLWBkVGTJ9FDWFRS",
  "key14": "3t6TWYeXYqM1296C6RwKzT1KVVpPkmRxZbXY1CyxbDSTtF3LfSY29QHoSELZQyYefnaEg9w6yZKNp5WWQ36JTo2s",
  "key15": "2V9eUYakL4y1WrSYKjWTWPiikvToeVyhekzSX2VBKZTopM5K1Cte8PQ3UTMU64xQYwS6vBUu68n8s6tp876bAYhT",
  "key16": "3qsvYrYjBpMFJmExABfxq5bxSUR3xRAnAmwQkfk2SYn47CfhcrkD8Wckm2AmjGEQQt72DuiHx823eRxms79pc1wx",
  "key17": "3aWr5xo2XvdiRJU6KqaSHU9SDNTeYobcqmDCwJpxWwiGgFhZPBJVQXjQkbDfXW8RGFzembriD5t8DqYhwLzWnYzi",
  "key18": "3bryW1EszHYZ6Y5st486mbBc1Wpzb8rNgqBtrS5pGwfUED1gkpwBjDi98iTYpukTYZJqWk6WF8zNbf7BtmD1oZps",
  "key19": "67EoK6ku4z8wiDUCugdF3Efu2FsZCUFZUMq9XQyNne1nJnaL4YoPr8gYhWMfzjeVzmPTW4wAoEg6qKSqJ8VefqmF",
  "key20": "bQYNaK7XWEGFQiSoTdAWTpxsE8fS2pXoN7QVQyPWftcse7y92VYmWwrsqG8a5am2r4YY6bfJBM7jAGXPqE6Ma8C",
  "key21": "4gvPfPyja6iDuKQYtVrchffxj7rHcJo69bgVaG3eoafJwv74urZ2Q3mLS8UCf39xKnxipDpYmZx22oE2QuCeJFnF",
  "key22": "4q7W71KhkYxz9VhsHNmgKEEbZLH1CSDwq4dC31cGdrDFmAAirk7nrwJZoBzEnCR2JyVVhJYoz5Fk5pxjVK7aWR2c",
  "key23": "5y9kKtdguNfkKz7KM8EqEpd5kgCB1PLhmRZTAxv3s9KruJno5sEaGUuEmKg4htzQcBP8Ki4Lq3crHmUxvq2y218c",
  "key24": "4JinfzdN8gnSiyiUtS7oRicTRGcLjZ8JncrT7EaJVKyrLQ1yVBzqJBhE4ead9HgSrAz8H7QoLjdpuScHd1khgZEF",
  "key25": "2hZ2Svvt84j9aGtQzCpr4tAzbDxWft9ES17Fkf1AjJTKjGYwoPJPKzi1KfWFgDUE9wL3JSzEotHLwhm551QrNsiH",
  "key26": "t9zRnhWEj7KaVxQc9aQeYiFATfjMH4Skf3xRvTjWnFx9YiRih2Ai1jWobPURfeDcAqrMnkfuaUGfg1reEX1DSy9",
  "key27": "3qwyRGJkevDM7Xfv4FLCgGDvuUUS8SB4v8LrmKaPMM3yFLuUG48Uge3tWKiEuoKc82eh8Ha7taY8khnLUtiZKzzJ",
  "key28": "2UbGDYPQ96HqsoCBJ7BGYftehY3AvmV7jToa9WdaS5413oSR1MwsiX3n8y6ixRpY1pg54edRE41LAEeRNjAk6MtJ",
  "key29": "2jvSUJbPfFQzQP3wA6wzrkGzkUiSUrYmUg7Ayy5ERigKyHURjgGaiTXdoV8BupwAshVox7mzDjGjmmCXtHvZ8yfv",
  "key30": "2LMkFfKxQXXTFcsdefeNNQgQHBG8RVX9vbHNvqZHU8H2Gkk1UCYUS2APjynqhkg2qwK2q8KjeSGSTEEg64DZn4UX",
  "key31": "4kiqZ5x3UKhm47wgAZiL1n6Cgb6QcNKeSvRSiUXwAHtsrxf7VArkrSDsTWGjxXEbYj1Dn8iTXTku19DNCKSjMZui",
  "key32": "5qC8TStKRnXTdxt3dM1kuk9KBn6NDXs5eQjxRtJQb3ABwMeWPoLHVMrmzbmSBrJLu5qbEiq7tj3m7QmLiyy65Mxk"
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

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
    "V1MKtwTaJneDFFtQqDbqQ7ic7to4qqKzzHi1EEbbFbSzN8dHTCP7FrU4gHpjxyAUSsmBe5Q6Q3zjfCLAL4qBkMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgXuq1pQCAPmQyGyjbBAdBdGe63ByS6ekY7zTLuJdLua3YfDqEK5w5PF1NyaHKrrqtPdUc54KChYLbFFwm3A5H8",
  "key1": "27PDVeYpPGSqb3VFgSddhRduSGBTueGeUTHVPfRKWSpGDC4JBEFVhnAhHnRy63XEz9CmMVB42mv8pGegLJrg3hbm",
  "key2": "hs37EYwb3nh5Sa1Vz9eXgCCNQKM9dP6UQPf56MAKP6KAxcB4PHwXK2rS37kvBCv2szjeBAUiXuCnFWp4sJJjZrT",
  "key3": "2YzYnZr398fwswGMhzMGZXb8p7okC2iLWD3ioHYvrFULPnLKxipKbjLhsyc4CUJAZC2NdDydPm6x3CzT6ubK8b2Q",
  "key4": "yDKdvfPRwYxuKKY7XnUe4LFtYRs7pCh5g69iPq7mGif4z9sFb52UaF2QKZwzjfMTXCGutNcedYdvafSy7GJC2nb",
  "key5": "4owoRFMdSwkjKzj2pC3pNpWXoskcTeqVLBxAu8Q3ap77B1qjVKFvTjzjJCbAczjXmQbMh3u9yoMg5DnSu8WPcrkx",
  "key6": "4wFXx2M7iA8skGXEr4H2yUEDvRzcRZSnYsJZAwVvkrhhGCHxuW14x4fa7LKVGzhxbwAAWH8GaQxuszfpnA43w215",
  "key7": "4mXrLBuhdCbPHN2baTaqQME6akrqgqWFRUqM1tDDVnfd8tBPJPGt1yTxLrR62jGJa433M8P5BAjzA2xnNzwjUdca",
  "key8": "3WqziPwG9iP3Jy2UeEUgvACiX3wLRZtEJsnZ96cob8dKCsDqEtPXb3FsRVVKPUkQuywcovYaW6jdLPK89gf8Tuc9",
  "key9": "4Liwie7bWprPb8tsFPRoM8sYvi2sk27fL293BoneJAWntUwtMTxW5U82W2DdE95KLLfgohWwgawYHkmw8wSpJDS5",
  "key10": "3arhfY2W38nAEckKLzy9tJnhu8NmzJ5oHoNyNXwjzjwWUhoswvBiGgmkUTqs2o4o5nfMDZKz8n87kRjCCxrimqMW",
  "key11": "5kor9KNgnYqftKC6tqyZUyTnBoxDPJCAn714hetCwPJtXdqCYd7CvHkEuFcNRVdeFGq7B6SmhW8XS8v5PxkRK2Yz",
  "key12": "2jiuNQs5Ebbyp8pv6gJNZxVmJazCDAewcHEE6sVdNEPmfm9UG8V7kA4V9DkjSurbmrK154ZVCXCmrVc9GwtUzvqu",
  "key13": "5bYmVeTvXnL9g5fzcSpS9YAufDnhuA5h6fqgoo1ihtB9giCLMUzvJ1STitdiT7xGNMi8zkzsJ5LK6NtyieagkWuR",
  "key14": "3AQqRw9fFjiByRQ9C2AXzHNyyvx5druY4AyeekKZ5UXcHtrRVyE4NSAigzaz1yKkjhEe4HqegqKJULDNon3KzPJ2",
  "key15": "4WT2LfsYq3ZfEcqhdDXQaihPRXUb86fAppHdyEpPszQ41GBciu92eaiuCjfckHTiJMvix5TsCeGLesrYTPezedpB",
  "key16": "2TxucB6emqyvCpG5rQ2RoN88kMn6eNYzqzfkvuE7rf86eritCHnvNo2iqQZhsZWnfXbN7TTmPQcGqGTbYUfsaR7n",
  "key17": "qZMbLtCdpxdSVUGguczpfKnA8bNRrfR9UhY8xyUsYJ1yATEWPJj7kqw56XTffTpdyGvRfmJ2UXN7ZsKDiLeiCMT",
  "key18": "2CRyNwfyusjnZEQiskc2XVva4QT2MabZXEcxkM9KQ3PBhhNtztXea7yg2dbhcZseuExJy71N4PjuWtaAVjF2qXGY",
  "key19": "4M4QocPSLkyft3TV6n6P9tx74taqPSeheqBMhqAYSWCYT5HuMNtyVotip9efaURznKDaL4vWH3dUtSRA2fF1PQba",
  "key20": "22ZfLTE7Z5JdkT1WqDU4NmZ64sCWbFecoh8hvCQ3kjyiLj5pRi5fwPghJfvkyJj6QDai3iFJEaXtXqy5x8zsDVxA",
  "key21": "3KRQyz7W9aQN9e8i4ZxTVMYnYXYZrHmtkUHv7doJmvXvnxvdCu5f5QuDcHtWJxqnw3DJePaqVP3PJYmSYCtqTcu3",
  "key22": "3zko2Bzmz96ZQpMruJiF57HzYe6LRbWUnSs45HLQBqBjh6m5w6HsePn2EVStnhinc33mFnFHisYV4pRjRa8YZQoY",
  "key23": "31Q2atoq5fNMtZxG7QXGk9MRWUqKC5akUgcfWf7bUot6ocFMn7nzFU6s7125z3hYMdpp32gGPL4pQ1ZMdbcTvsd2",
  "key24": "55GE9PdFtBsanoiCuVgELBNk2Qp56hzuAedw4JcxBkon4hxWqXNhoKxhQybA4PntUhKxRUSLtWRThN4Jzmpxpwc8",
  "key25": "4RUX4gWKRM8uDqUS9Rb4TEmQgrhMg8rMeHbeg34nzscZ5MazWAJxZSJyrk1Ln2k1db7NizFAsUXPJRvkxgHAw3e6",
  "key26": "3c8T54ADzZ32QgYtR6VZo7gdYyRKsiBg3YXVx8BkRvUGQndUho3atMNKwgPyhzaNBkTMV2axZyYojHeA75bne4Pk",
  "key27": "7a2wuFPSs6gCfkNDB3sgrNrdpzyP7NFZUi6Czd3njRkQWfHaESUqGpwv3NG41bcv3aMEdJfs4VWby8YBuLmuEmv",
  "key28": "3woqw565JV82hrw14AEyrtHpr1kgPyVUS3fEoeEofDv5xct6vz8BiBDtAgxsTNAjWk7D7ZDbXV4A1CLsuCbwn2Ld",
  "key29": "43V8szUEQorRoeSqdwP1Evw47WsFJT8g6pxeeYNYDTQR2wvq4XBYGcWqdNMb4W92uvfDLVANkG4B5tmHdzn5B217",
  "key30": "21VzYrmmcN458ursbKW9muwovHCEqYAfWj1dcWJ8wgheyfgALVE6P1QZXvUFUkPrVsXv3FC3LAFJmJhC9mHjS4pw",
  "key31": "2fF31Hbuff4oDsCBRwaXV4esZViUKy63c81bb93b4RoAApRBDsLNA9uFtg81nPPd2Q8E3QFPpRXuyPJEHWbMEmYi",
  "key32": "3wFBThNEC6LsjHttENvKydBhA3rNcQnYrUiJf86hp49ygFweczDdX9q5ViZt8Cq8C14WnBnxWizu9uPhpA8KK2HG",
  "key33": "5mCNAmQVkzD8ik6o7NzAkE5fNfWo7ZER2ogxa1p5skiAExmsCvph9kqb6DEvPbPFJ1huypRtBF5VGb8gJCkVrGuV",
  "key34": "s8VPQ7hp5tgiCxYt78NBuoy6phAo4zr871uixuvLX87VaodSWeTcfGTGqjw7vF2tvcwJTNSYkjvwggdxgcRvWcw",
  "key35": "2mmqRsgJF2CWjaMGCqedX6LCUnRe1wCsANoeARcKqwcgENBHHjs4UxUc6LuTbxxkmRPYLLitjBAfsotjaNU3EjY5",
  "key36": "2s8qnZhGYg3fyh5dqheynXUTfcRHs26xuJ2NcQXE1PF3tF1t3J8edE7QyLVCo24mufr7n9SeZhNjmaAPxyQvY3PD",
  "key37": "4bY9BLWdAWs69w23qeJme5ks32on6kQKNrYbkJGLoyCG5Cxvv3oguepkHK6xW6FdrUdY5KuzkE1QsB5c8WDwYt3i",
  "key38": "29RNLk5923ThmKmfxg9xeMk8KT44paaeEuuoR6wuzz3otvkSB21PpnWfi7vWppdnHdG18TzrzkHPksqkP64bmxvR"
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

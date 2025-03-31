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
    "3u5TfSjkJT4pEDgcYU3poCimujeCTPeksinwBsb2iLqvDUh3NyXt6LTw8oCrjC1V3DGRLdN2SFVByZEe5tcx1gec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3idHHRMdDSnzdiEA3kxLJSX5TqayX3ZVSNV4N23UuXeTLeQ1aK2WyEYb5sRQw3MBAAc6Q6rvFyS4wbPPjbxBe9wQ",
  "key1": "5gw2NaJeqELsD8qjJrFZvU5dQZ7dcMX6ffFzvMtoN5PtR8t2VHD2qfh7eB399JcYoGfGUN5vGZUZ9eH2ViAUsgfv",
  "key2": "5S7AHKtBtM9xFarushoFGaU2VHogVB3QhZ8wFExMVcA5EhVH5SHjtRLLDXSvSMyHqB19kF88CaJjCo55mcNrh6rT",
  "key3": "3cD9qzaGwZ6zuBJVK5zfTJcfEXmqFhDzST8RGhycsyy7KHDEmmBWYSPPHVdyuGqnNAP9ae7pizsyprmGiUuwfQA1",
  "key4": "5NM737bT6KpZQXbq2ncHC5bBQbzG6grciCiFQoeyvfuzyYJpfLihzTT4u1PMn3yVHiRNtL31c3oJoep9Kg9g5wc7",
  "key5": "8jRjs4vMqcKyrTFcheothkJ1AQMLdynUxsmZYfPQ8ABTXXU9JzPs9TLUfwe9c8DDh82L938kYAgq94VSfzZURRu",
  "key6": "3DYEKrMnR5YVt16nF4uaGwXBDYGSM3BKhAcSbR5rHy9egECJgvttv3RQFuAUYqzx7CFEvAuD1X9CS3iUtBSFVNPa",
  "key7": "4RHxgoMXvfmuNicNnYXkTQSJfUt4hf5fMpufBmGwNqazRxuU1iEB2K9BkvVqfMx6keuV7yKMXXas1AERm2qkV36R",
  "key8": "rC7yvUnahm3PEpuTtraksa8Xr4VKTq3LuwgeUS8qD9cjsJReLDkHYjVFghQN1uaT4YjWaqTXgQvrEUs72ay28e8",
  "key9": "426ha5xJHZq6E6vvJzs37w6CxtHcuePenev5grFTvJmsAhaQvdKCvzw1sfFs72mgfnad1ZeZA2tZ4X52d52xCLRG",
  "key10": "bbmQiLVNEgg28cKnDbezCJDhqqnS3WymDQbU8pBLkfSacoojea8vWr2YEcZYhdic7xgf1pVdK57omRGGwxGgpuh",
  "key11": "4VQBPw55w1JHsTRYk3Bui7mzt22y4VCqNxKjKDBRLxrkGXNZpCvytfxmruucpj9rG954dybTvT8yjAzypH7M9oMM",
  "key12": "4zRh68MJoDW59Ctq4HC3sN9u5eG5QXCweZSKVNiy66yHjh3EY1ZkMjK3sEcmWboKqzK6hUHCpbhoVRNbaJS12vW4",
  "key13": "t4sHyNeMX3j7QxMPovztDzyqsfev4SW5bX36ipdZ5Nh7zTUfkpiinYiBYpzk8BJzgpcf3Ftai42grXFs27kBCsd",
  "key14": "3NYNroxcKToyjQfnnTNSceXgm6jRroduCswRxKm1qRb8mXnLgSEmqsCobsGvRGMWhoXE8j1YpG71KMZ5GUTyMThi",
  "key15": "4E4wA1gN914b16LFqUeguQ2gD3548rcxfK6m7MQ6rYMzkGXZs14MPN4c3zqhaVcVFQiDZVAYVXXg4gkzMaJ3bWRj",
  "key16": "3W6LPsydBTfFGzZ858kaX5f7iEYMGi3LTMTePFm2JicSb4SiQ9v7V4s9UBFwAJwnUY7hAdFLs9skRGeeYVcEM29r",
  "key17": "5nQTmnecTagJ4wrrsKbyv4AG3NjZBdMp7BzSyuDUmhNehLTrtLD6ssYP1WvGE2mCgT4cBPVzSgGbruXUQVq3ZrHh",
  "key18": "MaNoGh5J8QwpvA9oZN6oP6QnJMQ2BNBr4JPyLn3FUcBCmaBeqSLm59Mv6HoDs2HE9vYuBWvHhmN9SuvprSmfwPV",
  "key19": "27ZfJ7Ry21yuTVAWzaG6DJqZGsZooYipuABGGc6KAYi4B6rBrBbVKDXbCQ7yF3CGokdAQ7da176sa8uR9icTuD28",
  "key20": "PRUEDacEXKqZ7usMsNa2ZMHAUbFvj9aBxK385X1MDUT5GyV1vJrJTsufDVjDcajhT8QBakEp5983eG3cTk6fdRe",
  "key21": "5k4qqrk7P2z5wKqmqqA4HAbmJ2yxfELaJ4JMYW6R1RVtTgwhVBVps9qNDJogLLV1wQ2u1J2H8B4EAi58v4nj3R38",
  "key22": "4x2dJYGDuCCZ1FZ1s96Sy844fJzkgGShKc3WGz9vKZrr2CqMXXGHA8CDoA4Joh9Km1SxLZJb5esu8Y8j6c91bny7",
  "key23": "4ENCm7uxFYYKHB4VR5wmchVuVKdLGVyWjFCXFjz3szb7Avnrou9hSgLeFTGzqyHuTW5zTUjJTUvhggk7a4HqFEBb",
  "key24": "Za6kuaXMuNbxXnUfjPTzWHGQxPmS6MswktToZA9eWrN9V1ZALMdbD326cgiQxHoYmepVjN4KT8Y9qCQ58xaw7F3",
  "key25": "2HeFY3TugUohYtfrm1WMxvUEuWevGCzvm4m3Ltbj9mk6cNDqouiGPFuuP9FzBMg59AGjV98ARSskDF2VJV3M3yAz",
  "key26": "5ZAwkpEj6AjfBCK1vURH8dDEweCyPM75crTQJA7fm5EM7Nmh21Gpd4SuaCgYC1V4vrW2jJBrV8bcd4g8ksyMjJkL",
  "key27": "5xb2uhMRenoaS1uFWQDSSwuvuubSL5zEn7WqrE4UDs1HNvevqPQxsiHPooWxD5CuqmPbWfD6yud4hxD46cuBvm3Y",
  "key28": "4si8SBJuRCC2jHj6YPWGYYikgQm7rjTbRGBg7DYSthQbg8f3KqvrYB6aQyzA7911rv6x4dgCXFEhD3MG55CKbMgS",
  "key29": "eUz3DqrydQzqMCySYfDTipEcxPXWzWxzmw5ttzBLjRnyD5Y8zweE8iVqEwFQDbub2tMTqF1h27E5LZyg2SWRJ2g",
  "key30": "47vhtLH23sL7XrH8uYrzYsmUFsGKf9cLbz3TyxtMsxd7PZxx6zLkZDgrpfVTu1ksApXd9zaZnprgfh59boKWpXr7",
  "key31": "3QjvTtm7oC4cJ3da9D8FJMKt8PTtwrwiuekiD54NQ9EH6qXbAggGKVdyMBPhmxR3HJu5ZQJs4TJgKnR7cbfmppJ1",
  "key32": "5QkQXJwbx2knmzPUcU3c85DP6xhVK5q89MY635CL9MZS9VMUNa45CHqhoZtSio35DVN8StN9ixLEgEB3SCDAyJgg",
  "key33": "624LwAuR6fmxmtmjEc9vqGdtyXpsfonXJkCCPcVWMSXZWJBHBJr66P8PzkhBUjcV9tp8QE4M2MgEiHPXVJVjT68T",
  "key34": "TQSckekMF4SUANHTait9tZWqWe2XGkfqp7JkHw6PLj6G9h1A846qdqGSvbYeDrKn67GajDob5xpuvmojrbmYUp3"
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

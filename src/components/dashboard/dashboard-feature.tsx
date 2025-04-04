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
    "2yciiv9pJhzWjj2KcWfKuGCTvqpkY1zJDSoLbX5rDWFhChPT5oSqSoFBxbdkZbnk3uPe93BYAh8qKD71xKTemTDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vnRzKgzkJARLeBkmuoNuVULYhhBiGcWZNzdc1L5cmR6EwJrWBnJ3LZ1b3KkwpM1VKDjLGRbRWT4LhKUTQNicdSa",
  "key1": "2iPYw7FFWgkk1Tjuw6Ued72k4yxS1d2Hk9m9gu6FxcK5YMZoYWXJeR6eMZ3FaHGGCrfBiYNTVGYzYA3R8eJa9YLA",
  "key2": "3PwozVVKJrFtEFzTdHiFXCryh1Wc8K4YE7GQasVMnFGRwtGs3kftXCNxYHCDnnRdT9CABRo3esi32m9HwtcqdG4Q",
  "key3": "2i9Ct7hComyAdyRcPwRS1DFa6vQXCQ8QcSfPs89pJrmGg5zY5vbwdpW47ghqoMvXk3PxMsR4gYmANJe6EijTrKgS",
  "key4": "63PKb2mgDcrJwETvSTuCziiWJNa6WQyxmtjXTvzjVpWP8MVJrphJTGCzpcHLSwSXNfYE7JMK5haieSTKeKemQgXY",
  "key5": "5g6wQzEckWjbJw92cxG1Y6bNSJUcPxbJH11xp3teSMBoScjDuGwvU9Vr9vJGD4feAhT4RvxtQbfhVxuDe4XG48sb",
  "key6": "n5VqJ3SBQGfTd6Jde6fBHc3Z5MuGqTfosNEogiBr1Kw2f7EL3C8arKRyfb21KE839Uf3LjEJa1iTxqoXonME8dV",
  "key7": "67MMbLHobHcLWaJ5Tw73sfvQ1QqGsJSHNFaTdEC3bALYXVp2cYk6kz82JDndhDyxEVmjqmueH4E8sNvr61Lou3t2",
  "key8": "2kGshwSGL6yP7uyRq6Zkt7q4Z79Yx4UXU2nFr7aNPkxcCM5R84aooX8JXeftQgSJvEdynDka69JxEVuuPLwWRbGL",
  "key9": "31LyNCfYUt1iG1Kv222FPyG6fu7oqrZCzSrqQPFJLDsQLHUF7znQJaassqbkNKd6A9fbTuzQe8V8xau9HCB3pNZb",
  "key10": "2szfxVCwDz4LN1aC3agTb74Hu1czJ4ZvAAVNCC55R8H4gubc42jzgUQPL9TpwJCcUG5ge66LVjx2mo9aJ2XSm67i",
  "key11": "3Z1U2XRjdGoUxN33RVDiZzboiRka9gtXNGH2yGnAtPQ52Xsg2FYjiRsq1VEdaDTS9kKAbKVVmTCqBE76QaXpSFch",
  "key12": "jSxQop41QvHTC89veP6wdWjHytGGzLgsARZxM6VpihVaDzfYV9bjkMFi9kWSyJXzJFucZFABdhw63PZiEmZwrsh",
  "key13": "26R577ikfhrNwU4eC7naKhj7FVzpjQf7pGDD7gpc2y7vSzxuHjsRHHzvdtyKf5y3bAgQ9vniyD79ADyQBkpkRM4o",
  "key14": "2fvG6EMHzhu9vqhEXjyHW5sSbJfEFjTJk4yc2o3XbKvuGHac1fi6t8WfQV7BT785dX6DT1RuRbMemrTgPuHqPzHY",
  "key15": "5BBB992waCGbE7E8pcCogrtWriwgR9yqkpeeKbTvuz5HoPKPYjAbA25Z2RK7C23bDZorit2omF4zoeyx6UhBscJA",
  "key16": "4ysXAQQhPxGU1aD2otRX7phZWa5WPgfYcqixhiqcSjwuFWybbrwphHWuURtm76D14rqTvJBkXfV1CxYKKReT2Eqg",
  "key17": "3trirfNp5EeNm7bzHLriTs8VRDxkF2TXZEtFLd7FB2vsS57phWT73bXTbbK2QWjpied9DbZ9kZwehy4fbYCWYEwR",
  "key18": "3ddqjEpR37uUtzYkpy7Q3NmEp8ABtKpQ3rVGN7HzjvGnrUknHvE6hyHnnWympPtGv7cwTUeq5bFKwVxz9Swr3ypr",
  "key19": "3VdNycQT2DPuELUHkzxzJ8N7a1gmeonuVAqPDQtimeppu7c6guX7pgPJro3LD39e9WL7eMgWWpheWqZsAhtMU4A6",
  "key20": "4gtkZCsYUCZtd9WEMniTkVwhMsS4YLHShkCZAShNSCzJFMwqieLK1NHnpASB5eaD2C14KqRwtN3QYsnZbioDhfj3",
  "key21": "43FFSKzy6b28Eo6m5XKcqCzVMcQMBP8u1FvYwuAsF6i616aQ6oxdsotuk1FpaH7p9VWuKoCdsH3xZXVhv7Hhe1fy",
  "key22": "ShMiXxkx2ikCgMqHrC1nN1UdHAmgqbieywNhgSx8HAF7rws4wKksEGZiGMLJMs5pBvwjBzatzgxSEhGC145FZHE",
  "key23": "5RG7YHRjRbzpievngC93or6aaRpjVamf6rH64fFZ7Knx7v84onh4stsik4oJk444r6pifQMSp3guh9hKaGouHWGj",
  "key24": "2tjGuDMsnbybepgmkJ1RNQyHxBjyjk74ih7X97kFdzcJadBibRYcKoC6mrf1wuuxiucHgYciA6skQQPVw8T9Ekdg",
  "key25": "4jyEPTXP4JuEgc4eMuy3QyaYdGSMrSDj3jfMZPCdiGi37SkfjPykBj5SYL6yns3ATwXGRHhemenNVGGZ2pa1ndwx",
  "key26": "4UjiFqWeretBVKtiKTqpq2B2zeth5ijVgDgP6t5pB5H2TYkziaM7VVLwTifg94EKaccpxdTaKfVGQAeCfN3dRZBg"
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

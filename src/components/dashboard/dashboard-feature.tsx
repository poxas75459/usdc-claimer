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
    "2AMBmoQ9SJyjgx7RhL2xowgayNCKp1vMtRw4jvtsKfE3ZGZjntwhBtVgoSM4UxG5GvdAXDLb6bgtkfLphbGNqL9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mMeLtAjxN2WprmhWPMBTjNnYwUX78WSYG2X6Hrrezh9DhWatD4uPjpi3jpnBEtkWbKHL18T9nz8Pg93FhcUyyp5",
  "key1": "6bUd428SzDxcHDJwwpuDLrBBY4wDYvaiGU7iTzxX5XFyYWYrSHEPAwTdXFNc5C4t1sNvxACNwK2RFa7ZMWdcd2Y",
  "key2": "4BDDbEfWjufNkr6QUZa3Tkz4uPKg3fu5g1fy3zuGP75fCqV3pqHrgjV4BaV8WRpgTJN6idqzoy8C2KFPyV9bC8cr",
  "key3": "5oyH1GrvuribG2GkMqmPfzHr4pExWV8kZtREJvZ5cxta3ViotuGUi58BRdC8ht9vjAzpTzVa3D4FQiviMLWXKPBp",
  "key4": "3dXxUGqkW8Qk8Ftty3xDmxSKvBM2pyo3HyNnEUqg9adSUmWWsySiVsx8qs8orDbiQq3ZbATkfLTApwYNAoewDDK3",
  "key5": "53ja88xkkvUjuPYZiZqLPs2KmkWL29HWF9tbxCykdFu9Hp9N1iv6Tds4iDiAZD5ituqKNnKzBrT5zWEE5WxpeUbM",
  "key6": "3XUjZBAjLnAFbkHZBpJqGpXEnEA6X8bkARjKSsrDwNCAfWiPQsV3Rk3eRs2LiizSFusinbUyKePLz2TSoEtHVxYz",
  "key7": "2Me3GjADknQNLXw65PvRqmJgZDNRLsKcTGaxcFos1c6y4rErTJKRxFuz14JGNXDieYd5DXy32nHN2Qh75pNdBMmf",
  "key8": "3VbcY9hnrLbbhoyoKr79fjBTUzJFFazTzhPyA4riX68g1AqE7oMNsTH1Xeg6d6usxconeQUfauz86RorB6eruCgZ",
  "key9": "ABezrHBArrNa6sxmjBiEKyn4E59V3FGAETVFiDv9Lb94u7euV5CNUvFq31VjyNr7W4hwu5HxbiJsXzuyuvPKoYr",
  "key10": "mrj7mvBPKUADzAiNqtAP75dEmvxYGMN79Pq6Nwse9hghzDErBSEPUDg8L1dW5nRmHnG74oZiVHifbFXYCZBTh4P",
  "key11": "66zKZqvt96KWxDmTFfQ7ZvkFJKZsT476y5HKjcARCzs6AS2sk3dvD9LXf8wSR3EAgzzvchyVTMoiXxqFnyZTZ4hu",
  "key12": "3sjJ4p772zq5u4CVM3nekgKFBgUvx5Ca5FSovXswYHD4TsnrCBSGXb7Z9grHY4SvJ6KD58GgnesB1XnuaLYiCuzH",
  "key13": "5H3tpwuDJCcj1Ve8T6zV3u6dbw8LTqHyNzQFeWjZneUtXkcKJApBKPRYwN3Dht3RMUNRxoLYA2HgF7APXUMszLAN",
  "key14": "9NsgTKJdzQHtCVw8zt7LFWMJLoDu2pk63XWMXRzBtLLPjsH2H2KkjBUg42R9BVoaUCC7k7VSdtZshpTAt2VZ2BR",
  "key15": "3SD8tu7sMrw6XmtWJtHeXrk1aoLdVHKbn4hUdpLAakN3D6hgoVpj4CMNV8YUuu2fc3CAp2qX2NAzoUskFpqu1BJN",
  "key16": "3oynVg6ZW3uoZCf3Vharpr9tduUbmwnmz3Aq7zcybpn7jznTmBok4vCoMgYDAJp6EaLFhGnwrLUNG2mpUHw2S4Mn",
  "key17": "9dinZY5yvXhn21X5ykgtfR8r7RAqzrEG7jAmEpCsFJybhiWHFDFfjhEHLa8RASm6q9v8pGeg9BGnSKa8MV5F44e",
  "key18": "2VUSZAMVMfERDgtKdMD3pbbcMBU5AnybHKMCtVSWhMDYbekxX75kR2jP5mBEUk5p3uqpbkqCmgsu4kPW38P3tS5G",
  "key19": "3o84VK8wsKFgPnP2s1LuJZ8NQz9bHCfFrmkHPjHwYFqRMFnu7U5Ru7JssEgyCGbNXrd4w2ZpaUqopviBwuDnHNLe",
  "key20": "3eYZhhMA5E44HksTsBkPJxgXkCwmTjskfssYrwt49MgpUQSFHjLfUBmtSv5VV6JKjB1zC7U5n4DmpxBEf8CGytrh",
  "key21": "3Ne4BQ9Eio25qFf3TtpNRdRzb6YvV6SHGipfMv8QCFj6uUTJowVdcNtneTjym3KMJebjkSVHtLGDy5vN6qkeKgxZ",
  "key22": "5WZYghGn7m5fyFGE1c3FZKhoMmVnMfa5Bbbw6UNCAvyxQdgHUYeCD2C3hUuwAdWmwvtTRMdTkxKMcebouUM4Fqik",
  "key23": "2Kd2C3UMc6QK6sqq3YMQ5BuVsmdGynSM6Jf2rWP7AazhuuKCyL4EYyush1KxdMAHnY9m2MFwFM514CLYdm3xhg4S",
  "key24": "2SNFCsbpjpUr1KBkRbMV59vufBtdHtjj9PuZ3oTZV7XthgSUTjCRbBLKDEjy4VnXugRXF34Y6ScJjyWvNo1WZdjf",
  "key25": "593JE2adZ6MKXUzuHnFfuJJy5ffeuE5HWp3goEJ3BJa28CU5NiuF3YGihcL7Q4H57NdGCtqYVJWjJj5eSvwdAZpm",
  "key26": "5YN6uArM1dgxwN73DavTHzQMq9pdYifEreYAiysa4BmW6Tyc3osKkrkrRoWg3bMoonWNitfBxJj7B7PBAB8xjjWx",
  "key27": "122h5hEaGiJGY1uLRFpLZFgtdToWEzYaj2Uj4Bu8igZi4idt7EmMAcQcZQqd8jPUHz47f26Ufg4d7jS2zhoXKCHv",
  "key28": "2888KV1VvLSViKbs9y5fFd8bktdXBxE7mdHi4vWg7nsNDWABtZKz3P5DLvXzpfuhhvz3pg1rr63FuQQGeHcTN7Hp",
  "key29": "32g6MK3tMiizzp4UkufqYHh3guihrCKeXCH9kHFUysjeYDTz9Uvvubwdm253my5cUmkP5MfZAKGS2tqmA8qZc8EJ",
  "key30": "3VU1Ze6f27fbU86CaRa4Jpq2firSQhM8zhNz5yHnkC2mhqmaSFwkuS9xBkHNHHh9He8AJ8v8UyAFbVnPuzDM44BB",
  "key31": "p5Lz7tUt89dNqHoHHz4nVr78TbUWrWc5R1xKsZw6XXg1uEvkaFEEGGXDHLRiAbKuSxkmXFYW4GPHggARXEqojwU",
  "key32": "f6SkYgBQGsTYMdxi3QtbDozmLHy6DVoexE9VuaejFDrouHeX6kQVKxvbApzTS9tTu2cn3CMeQU8s5zZVyK5cx4m",
  "key33": "3h98Ae1QCQ35MFV756vcFY3squfKzRSx4ZCiZKoQJ1oJXRYpJtRnHkdwhsTt2tuHhsmgvNxsAepXX7oeJCzfe7oy"
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

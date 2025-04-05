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
    "4123pBB5ZTUzAqntDEEapwTFCwiFvDK6k1emtNBNx5GpcXvgJviUKP45kSGnqBt1bAUVNUYXexjr5Drwhh89NbmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5neC2RWsPfwhxPFiiGYCwQBSux2qyPAD3WtP1rivVcUBDMqL224cSqV65Bvb6iXrmH5JxCTMedfXoqAG3ka7UA72",
  "key1": "5qawCFMFpfqXAG2NmF5KjJyoxZMrfjRTHV6cKif2fvJrqJUCBXwbrFSWqT625XwMaiKKUThv8578XS2c4tWUN7Be",
  "key2": "22Yj7suQYeRtQPUC5d9h8tLbZwhK5EDy3ybLVrM1KvWscbUv2keUVUDMAnQYmrG2ueihbwV4nM9fmRRWkLRrfMor",
  "key3": "3dUoYuaJrhpJkzWm5f3wzqENKTYXz3KbYPMCRjRFqsuXros1TarxsN4QjUEL1zZVZkdpHC8C9GTuzmxcUqE8wnKg",
  "key4": "2jnNarxDqEq7cDVBKpD8e3uACegExjkD6JnFWXrkePGwTqGUm9tCXWJfxGD1oCaSN827D9AseuE9sXa17KbfrXmX",
  "key5": "5iiQvw38qsTktakfYw9TR8qjBfbbgvf9QzjpRJRr1mu3Yv11uXW9byDc6jfCNBMYr2Th7LrsX5kzpCLW2MDSdafp",
  "key6": "56zmdWKSAGXPynpiDR5b2YfhWDYKV93HK66JXJPmdFVJUG6RYAo7U9UjTYreF9RTGo5XJjTSdewCCGP4MxHYo5rJ",
  "key7": "3n4xfRyRTNMB4f9LUJewVg7DyYu8r4EMdT6MD9WFHSJwrC5cT9qUjxcjepByDwAXodKEs3n7FuidPqiMgW1mmhSn",
  "key8": "5fF1WPLSu5VaV8ox6PLBNan7xmqfQwqMubmwkwULm1NpVmgb6PQnwUTwZRkLhGwYXrKNg4jydbkDX2sW5m1zZ11Z",
  "key9": "64HMptZsNup9Rp8bL9d6qanrtDkmdsaqodcW3oYi4728LXZ4cESmvRZv86sWTVpPtNgeuEN2omGwq9TzqsfCkjNc",
  "key10": "23EKg8nxazbaqmqnksJwfaFm3JE45AVeyRSjehHQv2gKX5JtqXdcqkwmZJLcKToVuR1h6UrgV75CSE8LZMp3RVAP",
  "key11": "2xdT9eqWFQrBYqrgf3bnJZDjG4p7nHxHzebQKs6SbgShbP1iXrnRQFgw7UqxKuuLhQ73oemE1h1pXAKoGWJMs88f",
  "key12": "faEAdtFGLPCzSz1VGFnXMvCQwEUGFSvHGxr2Pq7Y4FTv5kGQUe2NjCZ76qp2R6ThdbELP3fgD9PKXjwdbNfn4Ex",
  "key13": "2uRBf66QYWWz2sBfb5dzXFeKHqW3rERzF7HGhqH6KK4CaKiykJwymwgWgyPL8GQSyiAfjPVZwcCo1bQ9bE59LXn4",
  "key14": "vE7W8QxBngJNmiiMPGznfGPF9uhCrvuTSoQzcH5SQ3Xw5w97bVCn8opQXT8gr97weGj1hyQ5FfgYmuzFSCzSQew",
  "key15": "yExwy5VWoxwAf3DkSqLQ9scBxEHayBXguo6LribNAwv1ZTMiUYdLcDDtxQgnc5iNUVVfyUSpLmam3GgkQTyTuh8",
  "key16": "3UrvMWhEhi5n2b85vkRhikmCc6YLY3HomBDDra3uH1xvbRRqBnxZ4LP6omxEyuy92Ar4rsUw5vYjr1JjHCZQuiGT",
  "key17": "53nqfauqZcggrDDVGjhfHnESwoV2HJNBf6RGHkDa15RrQBiEz5VdiK8cXF6mzXt6TUM5W81mmxLEqF3cMWPUojvP",
  "key18": "2JPtEXfJy3tfgVpLtLuoGXk7hh9JYYmr9Q7Y9UxG3DGZvV32pWkvcJ2qu1H1AnwBLDQdwsWqNc1Xec3NiRQNUJfC",
  "key19": "4zPasVJJTR9jBhk5JC3iXtwAYLEmYLBpzgbbzSiqFhGJhB2MU3xqpbTJ9GYN2J2hb3jWr3gATHoMYwtSDn59dqo5",
  "key20": "3ojZ5kkW63LvGzfJHv2HtyP64ukds7mVmUYvKjhKj5DYXwK6NqReuA1w8CM4czzcyqhMdXjqc85LV3iAbX9KsWbx",
  "key21": "2jroxLSTtJrH3u752Q7WYDfB66wPVAEjRhBZddP3PCqCwwpwax8hMs63YRvgd9W63rP8JjV7EQ4y4w2LsowVvoHS",
  "key22": "5T5CZvVv91FY5zn8urVkN21QTsEWv4jp8Zri3UzURs8BfSNmGmkQhjc9ByAk8DH3N6SCsb4gMLDxCmVBJLSbch1E",
  "key23": "3Vk8N5Jg8EcjoxJzdSaWtAMiNqStxe5SYtHbAvcBy65w4ooEeANg56hqUcbqGoQND9cquNzo3jj4cSTzxPf5GMYt",
  "key24": "5rTY1oWzXdu4Hq9Y4JHiaacraggmE861ffGFGwPCyFBRf5EQ7V3gDrbAmuyxea1ktohcFmsHbSm8AbcMeibqpXHH",
  "key25": "28tayiLAhGLVU5kgxWm7ZjpAYmLA4FRzvDR6CdVYfSuL3ZgGqsuAfNn85q147Z2oo7caB3MKE8d6boPUH3SuCgad",
  "key26": "2EpNpc3UGjGnZa4KgdD2Bjf5H9e4oJo9Hn1fWSX5urWdLrg8uGDG1APSNHhk2qKbFgWz7T5eXqvEDjgNYYzNE3hk",
  "key27": "341YeT7dNV19EZAeLtM3Bmcx8GP9JhnBL5NNcfENee1hbmueKQ5EVgwxe9xHimQ5bgzRYRuwBG5C71kmc1Ub2a6k",
  "key28": "2phPg2mz8QuSjyVpmjyzu8xZRS53myUwr3ndjJeMaQARKrNrp3j7e4cueNsQB2erTivwdvdaf7Zm3tSoMKRYsgF4",
  "key29": "3c9MgoH9bXYTUKNLJk5yo8Y2DUFivaXkgPhHPUT929ZHGLUFYztewa8NgseWJmg3zm4Fx8o2MakNP53ajN1UHFtX",
  "key30": "5mmv68NVxDLAWA35Jqq3DukhWyD79MnD63rijKVreePqChcMdZ34XDwNiX9pVJKi73C7W4Ca4jdt729hTT6DF3sQ",
  "key31": "2vq1SVacwLLbazBp4V8KhMkpMBj7mGrqBR7Aw3PWc5UF71cY5pRsE5atmZJpL2wgjhW37tPSN69BKKZqHroMsrV7",
  "key32": "XHLencLwnMKdNeUtY7CWjHETtga4k2ZM3e95S4VZq2vmHD2CCGHgxuSfFyK9SNLM5xJYJCuMm3TV5xAncL8BfZJ",
  "key33": "5cQTMB7yJsxSipHpEmY6NEiub2DHTf3tp4Sv1DedwaM1N135gvUtdzKN68EHepMBhbPiDbrUS4TvzdJwKuBvPmnS",
  "key34": "4i8rhdashSD61X9fE2Ffac5ur6K8bdcsj4Gopj9meBWqBwLFENQKbzspoCc9VrfuZ7HLqNxj6roh2HUNCC8HsaDC",
  "key35": "3nYgKdSgdKMXn5RzdxrVW1YCc1i44eFZZdTosFKj3KKgv8J9XSaEPD9CsGyqHVXPzBT7tuf9dZte7NCTPhbHtidw",
  "key36": "5V7sX8VZez2n7CTyDMgRXKJLwNvvtf6RNrKDi72iXuGVudE2nPhxSKQsRHpR4HmbtDT9gqLZcLza45wsnwuLWfit",
  "key37": "659PKEAMTZHUr9BPEnTLfan3niPevdwz93oHNcwFH52BUyznGhzoh68QXKvF8vfRLCJZLyCS4mSuBaFVV7mapanG",
  "key38": "3Shhjh6rNoRMhzvJ7aiW6ZNB6zTF8YqVEjG8LkK5CJ3mA8MDRQTd3A2DgBwFah8g5rsSmGwUVyuvmvs6i2JXc2uA"
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

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
    "JJKBwLFVhz3Uu57s9xTB6mMQGbXqVaRLNmpM7TVbohvWQkRCNQYi5kZx4URNU7sHjTrfw6yrgq7vjReVNkbja9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pPGvmk67rMCm1suewM3AKrYgnS4qpgg5YPytbDfMZRNqNQ6LDRYoVBd77v9gyovJsJLE3YyfaMrmHzFeFZcEWY7",
  "key1": "61sz1EebQQUfZVNQ8QQVwZuh8ybfdf6YkHmHxo6SNtSv5yVa1MT2FVx8foWw2fd69YixxRZ6RfukbLTaMN4Zk6hj",
  "key2": "4peDeruLg4RfzSzRbGh88CPw5o6KwSyQafuWsgDRxD2eTW2bq1xaeHX9AfZBpZSHaLoPuGCxRjxFs1jmg852yuQY",
  "key3": "2ZWPkPPoF6Kkr5khk7S1iceFuc4f7Q4Y4rKqg796zjpfFn3M88jcUVxac2DwLTrto1enbvwcaQfx12BZvhLJ9QX2",
  "key4": "2KRkrNoByCvtyFx4NcdSVDyfpFb98s4uVjqHMyGuWEm9Gie7Nwk6yhz8DneSdCz1B5T3NUdLdwwQs4dpPefjJhXv",
  "key5": "3mNVkAqt7sP8Xzm3XnERQ7Nkg6DZJeM9mYVCbZDX6BcWmkgaSa7spdrLQyFgrPutmM6vSAiDzs5H12pVvK1bkaCz",
  "key6": "2skXdsDcebGQmZx3sNMSh684G6jbWCnZ1hyXPdnLSdLmkJyDoX7WYu7fvGZKQ2jSST6Q6AAK32gFDrqyF78FTkCy",
  "key7": "WkQDMQLnKU8cYitNEagk3MHrcbRp8PpKDidiuJ3FHdZDmCud82tp4LVrhMKJ6EvYbc5EAxSF2ub4GRvzPeT47VN",
  "key8": "4TozZ39T9FtHmScD7QJdJ2qgNGHmHGHniCfkMwkFTLVBnS71SbTBZr6GFJwY1qUy5SR7VcbEqvacBy9PTChBSPzf",
  "key9": "5h4dUMT2F75quUpGNY5n3eGdvAiQY5KbzfPCdYs3fnXZyg5omSUCSMA1Ejj3zL56ngbYEFjUQdT7fVKouJZFMZSX",
  "key10": "3QdrcvgdtF9DNbQT6zgjAQyDZMn6CrH4rso4f6td5H5uhXuj1GKYbnjcKZEngNtraTz9vWgZhUJfiD4ffRfHbxEV",
  "key11": "617vgPJn2D7pxUaE5p4fUzWngTLDMZAL1peTg28LBB5MTTPgWjVTGT1EPKGptqeuNYkDZEJS2kLUjaTfXZZUNrbR",
  "key12": "2A8X84YM1rSYrEFKEC1L9F6Nu3BA7yPDEYzDXRuvF5s7EWom9cK6bRtueYRtVHQjETmwiKrsAHLrQPFgfwVZA3c6",
  "key13": "3bknv9XScTGe19SjcvK1MhCw28Ly444wqP9nAo8QyLKYngt1aK688ksNMnNpZxVx1PmWGB4K5rRFndm9PPxCXA7v",
  "key14": "3HLurPdXnqVsmmu2EdHi59yknfMnFZNwCxCjdU7yJKC8Y7iHvzFrz9iamRVJqxWymxMiBvtqEuFcqNsoej7NJVVf",
  "key15": "2yyvyiaSnWStdt4jRZa747MtQQpBRM5RCEDwQJ3SFGv22nXdnLeEcdMRUwvmbDnNfwC5niZ14pVd4mjHL8iPKXUG",
  "key16": "45eArbP5HDz8ZdxQNWqPfPrvNozDN5CbhdCHJH3nwG7PKZu599eLhgiGUmkpJHoCWRG3AbZ2o4n7RqEfBRYFAfGC",
  "key17": "2nmBz4fhv9SMpUdQh1wPd3DneJtKirhgmdEEZf1qxuTnzBA9DgX5G2TTn1gFkR5qtKT4j1ckD5MD6D5eyHomEcsW",
  "key18": "ChyyNwM8ggwWmrk7JYD6N9Pa56mqgLmiqPhCCNzpBF9o9eAucjiRJcN58NpRJ9kLXzC7SsHsQDnjJi261gWREWV",
  "key19": "9cGPdsJRw5sBZH2S6rbzhMWnTZBo53WD2PYpT4NDJNxXnPig2tUswVUTeawiXs2ft4ECTyKDHYjMx4sBLB4A87a",
  "key20": "5rKN5pfH3Ds59f3B4Fo2XC1qKgU7Y4GzrzJ3KmD1yM23MNcckWqMoNbacrRPQRGhHFNM3dynAFTnTzPMoeNX2g4S",
  "key21": "56UhENZ2pEPwRKRGdp8KntWQZvE7VCM3i1rBfE9HaHmtYudUpBp4888nW9L66H7Zv4zvcZaPvuPPy8bzEN8EyTyh",
  "key22": "8xPm3y4a8KFDdq9GHgEUdXZDSHqkzQsbpotevf8vuVAw9y7CKWaM5ivYjcSDEdyWEUTg3Zi1iG3orFTYRKTopag",
  "key23": "2jfM2LxJcrD55aaDWBCvrb1jYwENSyxbxHcwevKyS6EisDXrnBruyhDfKvoL3UpYh3yJoKgnoqirCJ6YUTQYMMzf",
  "key24": "5fL2E8ciygYJBLrjfABHATDDFc1Cq7kvKWEYW2HeJm12eemY41CH3QjoqJAGVwv1Q4JoseZqayYia6BMHeF74LLi",
  "key25": "3kuSsJ13fmnhd9D6PQVtYv9hN8ZiuYajUYDvC5VxhPrwjPE9TvMSkRx3M8CrHC6LmhtugUSrYDkmY8ogPSRVUwKD",
  "key26": "4t1Rwkmfj9RF5TW8anVo6kWXWJBiTqs5BKUuUvGLQ37qb4sk7cbi8UPHGqrD6Da6uyLmHUnVNsS9VAqT2iMzQsFg",
  "key27": "4peNMvRFkMUzcpgTicQKJWovzYibpr7zMLF9T2b8duSMrz4v5cdtk4oVpicoKCJazLF2yj2jCBvwFdUzLwyZn3au",
  "key28": "zETCiss2uSdEhSLq9eaVGY3Q3cVLAdqSi4a9sTc23PcVPhjnsdKEhczNCEu8HqvNtagByVey9MdxeChLZuoxQhU",
  "key29": "3aPbY2A26WhG9NpzLuX4Q6LpUYhGEW8SVduiagCWZr77wjz3Q4XQ4dKmq7TUrKoU83xyDnsmZioMLimCw7j1jkYp",
  "key30": "3bDLFRUJiZAucsQXGXZa765VGJa8fpYC7FnJuEte2Lhh7kdg7yZrwU91YoiArWrVmE7DoNGQuu371Hi8Qeifqcsc",
  "key31": "58vA6JEdbcyr7fL4ENmr6gtVzV7ewgqDhWzF1dwSRH1fX3DZfobJH7P9K3t8DWzetfw9V1ttcLdkbtyL9ciQMPY9",
  "key32": "27FYcjmjzUYJYBqSQgFG8acgSdqqtwmwG8yDNtGP8RUo4EPpShjZMgbUNyFiWnC7dFcNTqfmDwZty7b2ioi6PqAg"
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

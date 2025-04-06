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
    "2u8SwAspJoGfjfeg6NFyvfra4VjScaVeC1YHfg9JN2hQi7VSdsKewwB3bAgC5ZLGzxphT79F2UuN5U2DtwqyZygD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzHiqkiYJeho9uxomQmpcvwdKesYzYJ8KS7xGPCm6FsHgFUEnKRMGk4kX2ivZGUrfj4SKkHzczNh9dmpwVXai6y",
  "key1": "xBgHvJpiKYxhCSLkefhZFpew8qkxuRZZEGd6UwepJfYjBmT9qWnZG8MM1DxJJk6pcGNzKYJjBFmW6RhTToTwyPV",
  "key2": "47krMdweQHCKSBBqDgKyVoESYKTTZTMwRA1gMHDUNfXYSTL3Er7hFHPv5F18VB8or7C2QCsxrZi6VkPd2vtYnRpU",
  "key3": "2YagypZseMfCKQadcsE3pshF3ZG7CVEYc6Zqy9cCRLJQsj5jFqCuCtJFbUmg9Ebw2ZdSahdvzuMELWYNsgAyF72E",
  "key4": "FkYS7NgDv8y6jsn1fFZGXPGrZQXpfK2f6aUMchBRKArvu4XbiJyz6KwQiepYR7zmR1hENdwQAKRcQyef196emPW",
  "key5": "mkpm5Djgsene86JLmfH84S5bJWFfyHR2zq38KHJMZ3MMN552tTqG6HbaFdf4AGFJSktDYBszKw8dPRXJrpnkNXD",
  "key6": "LJ2sD2G9hDrnx7YY24rfYJNQxYv3ozZt18fA2FF6MRoMz7RBihbbX1RXxqKJYc5J1dEF4ULjAiiZmm8YVcyF9nN",
  "key7": "3KtWZLf57iS4hSTEZjWPDa9aRxBFydbqiALLzjGNkh8ySACXZXJJxRyc3bhzgvoBZiaULib8QfX5aUdXXgCpsNCG",
  "key8": "34AF6JUDsc3xhqXEyWNhzfNj6r9XzJwZTQK2BvykgdhavVkyf1ShVvBRjLGpzCjdFa2ttLwsAc4uAiqgSeVNksdt",
  "key9": "45xYP2E3YPtLYYSkD3NQobpkLpgxxFYgcZ3rD4gGQwemMMXmPLFfnDFS5PTgWkrQE3FWnBDCnnwxd5fKUpgs5rgG",
  "key10": "2knKMU4kmZRBu2V9bFAJSwDnbnGPUV2iCA3N1W9iVm2tzcQeVYc2sBvxmuPGzURYS3uxmoz6N2NLKc5nus61TVrM",
  "key11": "4B3Q7jYWMGeYfenzKt4y71m5d2jHLxv6mBK28Bx4cT9bj5xFNoSXG9meqTZHFNU4SwJH7gRJCThXrbZvxTni1z8W",
  "key12": "3JmxcnmVqGCfbcbCwWNcZA9P7GovQSDJnbMqjYntuAPUUkS5rnL8zuV6ymV7dzsrnCD1CBcdhr9brDi1nkbmL9js",
  "key13": "23qgTrtHv96UJEZvN1qdLREzSSMP8ZkRFq2fCywTzUb1EeemJ6McPFD2dHkESZJsA1wrBu35q2t6Tegwj8prmkHk",
  "key14": "29WwniFBfSn62wQjNJGTqLBP6ze5AqBaCyt6FUrCQoYHzLin8oMA2LJ5Qc2mWpW9BZhWbZMbMKSnSTxqZYbsMf6Y",
  "key15": "2Ww5whBPa9pS1mn1eCDT6hYZ254miQJ4xVHoxE9wpS69oAY8pg7ssf9mHKqKt2DXM8rg5LHMkn9AKFDt325f2hSL",
  "key16": "39TEZFYr8wbKcjZAGMG2xGs8u8m1AeQAZQC54SRrqQWGzt9zxnxGcVFeR96QuF8s6zCDdzYkAST1mVPHHUEVHHU1",
  "key17": "4V8Nwmq4Ur21ZvGB1eE1BwwP7tzNHWPcS2isPg7aJW6U9iawxMVDKwLPgnb1ijno3yRgQoGZqTZhh5daDXuRQwsp",
  "key18": "2wa3SFfkiTniTqkApz8XxFkup3ERumq9ykQ5swhYmRi4nujNGBbYjgXVxA9414aa2NBRp2k22uV39d6TL99V88kU",
  "key19": "5qu6BRELQS5VXCcLamLfp6mroNxju6hcKV6ZAMgXPdupdNuRhV5WxdZrnzctafc3DRsk1qHBW1ffFwkhf2mYYWQR",
  "key20": "4JbKr9mopVZVT9zi2ixthmbkZV9GLez9wskZJdRwkMqNQfktLCXaeGG6WdNWc3Z2PDKfrSgEqPGU5NeRn4FGCtPT",
  "key21": "WQvgAdG7BTkNYLhB6Jz39138eqUuXcedUujMUsQNyqSiNbQmkL1SsycLbyHZHTGjFxdSUZgU9eCPqwsXEmQso49",
  "key22": "NiuoDsNx5kcPrmporsY5EcsJ8vAVXqa1ZwSXquKge5Thvq2w8w15SFd3asR4rMKh6iF6RsDU1Gw7jdP2QDvn36a",
  "key23": "iUsZFKJ3UGjPKqWnJ6aMkL133QirhN4JDBpc8sBdJXRm2rRPtC3jrG7bYgXBA5PKv18bf616MVavZzcnPrDWZPz",
  "key24": "64BvzfFWV4MFzMH8du4tyBYQBUbbL8aSDcUamrKPZfThM9XMFb8SKn9Boke23sjbX41qiLSf3pgrSUNCgnbt5Saw",
  "key25": "8ksJV256aMfs76EzrQh2F8xLbVcJcMdTJJ8vgPm9dLDvEPci8TUBnu1kR8yydcGF447aVgbWHYVsUSPcV6it5Sf",
  "key26": "5RKiM959c82H6ZsvN2NL4pvhefQrUXiCY6tVuMDpdt1RYAoLRtk3iX7UKpWzMEJSDZkse7z8DKQZkV9FRMDtzCD8"
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

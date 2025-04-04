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
    "2Hz1z2ryr3w7NETU9WaE89docMhA6Ea5Bvdu6D7KANWRNyaWXw6PaZHCCUBHfvTM7eBYXskTyVFf5WD6GfkKPprz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpGZM7pAb5YWEs5DY9CwW8Z2GUexBwJqwVgaoYrzfE4ZExziZaXatuiBgmMjWvD4rtRvrnUjDBAmBFKS9VU8HpW",
  "key1": "4W8mLYhSUSw2Nd94kJNGr1gZYbHmdtejS9gq4zFQj8dpbXiaDoXCDJHo3W9erHMZinAXLuAXsBXd2kz9DhnNR9KK",
  "key2": "5wNjYi2v5Yppn8cQzDykKvrkCaBUXwfS4cuRBMNUtjzJPvm9GewBMY2EjyFvkvYxmqyGz76xwnGd7xtb5u9RHJvC",
  "key3": "4HexMSxo1cT4kjiEYm7LD5BicXiXP1fB4UApNcW73Y5Wdonjjn34WsLeWTGQ76dg51pignFmKv8AfBPx9AyuL3tG",
  "key4": "4yVTcYdNda7dvXg2UuiHtmzMasCw9h9S4UdCsLXdV19T4VE7ULrjEc4BGBSGuaghn4Mo1ktbpEP8VMtkK1vxWdYj",
  "key5": "2kJhSF1v6cLDqWN65daSN5HyQn7U7VxAPhJ4dg2bSiU75NMibS2KsVXPGPdnWSE9NE6QoqP5BkbCqWBDzeFQXUrB",
  "key6": "2yQVwTAGK82uejXvVNovZi4mMPHrVtXgd5b8Rg82K7FZuQkzZWyLkX4Wdqwk9wZ5Tw9N27cbfsBgKvGCjDLsqi7L",
  "key7": "4AnThwAikjSUR7MKsydz5JVUswkXx6xXM4z2CevmhcXJAbNZp23hpcd3sVvD8bV4PLeCgLcMhr3TYGrvrkLamMXr",
  "key8": "GhSUexAxQ3VdTpc5cn81XsXB8dcfmr3CgqB5jNwBtCv5SbtsYCgFevMADKt29TdVaFsP4psymzi6NKJjbXaMgFQ",
  "key9": "21XP4eJ3DEXfiJ6HsXi8V8R2v3YzaBB1ZJUQmvqAb2NLQsTJM2HBn79zGB5pWzexxzgTsTyMGY5moj9DPC1SmMYk",
  "key10": "4XQcuXsibJN668MV7VyrFGyHL5W4un8KKNmtjeMC1jPRHuh3XxrjM1UKWCj1bfFjiem3DMefWtQoMrChhitDcAut",
  "key11": "5F2yYR8SLEzo9x9jVL6be5YP5xCpv9M2piMWeratx5uQLoGDqypHBKoxQCLLmKmjrK8tTHtffN1griqfekS9c3dM",
  "key12": "4Fj2Qspbr1CqdeU6v4xVd3tQCPGGBbKtigvpL1Frfvr7e1PLeKVpsVTMgtNktQmz2pzCyaaqS3SEg54vNi8VZ8vv",
  "key13": "4fU8XA77mBZcPrqMrrRvWp2whJAAAprJjDm1w3XrP255zdWQmiYYdwhUfkmFinJnEh8VEwCtbC8G1GT3yDYLEBUf",
  "key14": "54bYmrukJ74vYsSW7DRPWLw5VafbL1VvhbeNdJgeKwnXKy5HTgbuXSdNNBUHSmmYPgvPq9247dhiDEbLN1vPD2RX",
  "key15": "4r6iZWWHpdq3fQFk1joudgHXWAbkfy6QEEYcS62eCZT8UKgY4725kPLhafjAWKeok8GcXKQYYdowCzLGL7LAEsFZ",
  "key16": "2hTTgV2AtgXiKnmZ4qd2E8qBi5BS9L8tiucpwRhqM8dRon48o8ZmVFqfS2kFJTJQs2hSep6P3GMco7uinJ9NEURX",
  "key17": "3XF9yWCDXHS2otBFBytXdFHjVymg4rCFvWod5eR7sDo4aKgwHqmESU7CGWN6RWGspTEbCbyEYT92AygV75bXttUM",
  "key18": "4ZVQfXWThQeho54PGcPf5vD5hv8J33FtCqDW8xM9Q6dZL748iUztpJuTcEdVtQZnpJDgrXMRUgzPmsycJFKKcDU8",
  "key19": "FGVLtx3cug5QPJuTTDjSrJgy9WZrAH18W31pUCLeqAkft8jKAcQBFNmoA7Cpk43yDm9HsWZamYM4qEv5kZ9f56t",
  "key20": "vqpry1mGjfmJgTuWiBbmwvHn65aUfrggUK24QvyDU4oRyV3rEX2vsVpLpCCMhUqdzdAnjR7n1hMVZREa49tyS3E",
  "key21": "62K3itEtxM8Ak9N9hYhEgZVDxhELFcKZ4yQvByfR6m3rmrq34DUEH2hLKWjR8K9S36bCysDHBxxWGwMbe4oMNU6p",
  "key22": "4psddKPQxdYJveHzDLquWmd3Y2fee8AKREniNpoi1vdUoJvR3ZQaSdWBFHbbrdcYUBEcDdK4XdGn27wgMeq3tvPq",
  "key23": "hwRUGymKxmfbhbt99VQJ9uJAxuHiBKJwxY5cB1LVHwzeCR2Z8qX3EtA12ZMistahTyRJKigDkDqw8RzCT9Fovzk",
  "key24": "4wHY7xY2jeXnyux7RNb3ZzK5mAwJGywKdzR4j7A8kKRU1mmgvcbmqYaRE8Bet2LB9vmnN8R9rkJPUnJ4v1SUceGg",
  "key25": "5kY245ma9KMQnX6AC3zxP4BZ5Mkt2kjGsHSuJyCFeP3dFxkF7fjqVFwRFPdRLps4SgKb2F55xr6j1c5SnEjADkK2",
  "key26": "4hqucsYVhmqS1W7UdBEbra3FAif2NsPbxXydfB15epdcH1CHdYK4xMZd8JBz5LtbsT2sWa7F5pXowHi7jRrpcApm"
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

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
    "FNudcL2L7Rd6CXucN3GB2rg27LraW2HHNnkUd9bc7xXRtEgkKUaukk21XAj4g27CtKzTENyqESKdnFfxPR9Upfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tSoKLRB9o9wmonfx5PasaRRGBhdLyXCbWZFMAzyVszBxDZXFxVytUXbF1C1DbCiYtutgyDedh4pfHCDyF3UkVT",
  "key1": "4LqSo3herDBR66joAZptGUkCNhTKae5VKENUYFSnySrPUY3A4BhixArcUyRW42C4BhTW8FNV4tizvHUA3Hn5NiqB",
  "key2": "3WvmXGnzP9pDjx3wXFquPmsDJ4n8MkNxEfU5Z6fvAWYaXGHdpTRX4PLfg98XFTxzHZJo9zxnLoL9xKqroMzVyyDb",
  "key3": "3k4bi2ik6rUHktPssjsFvRqmApAZ8RBxkGfN2RXq46PmnNdGw4N3Jn2rifmUGJtA3YeKeVCxJKYrFNGSXTAdVyRy",
  "key4": "4MacmS5ny1kxJUoWwunkyoPv6mz3Q5S9FCQUZv12QXyCM5Q3D4hFWBYdEbzVqj447Bf4qSXbMsJhvViZCqGQ7zF7",
  "key5": "4P2J9D2fjB5AHHtKV3hearUuKn1ZpYAbyKgnfofkwhTNerdPKbizftbPqMVfPb9VqJ6R4JjLqA2o8s9rNk938K9y",
  "key6": "46uos3oGLL2MnEjryUZNo9tAHNS1N9nQYGB1ggmDRGg7ZfbHjfjy7MP2DNa6c8Q4uqk6WFUGXhTtBegdAnqayCd4",
  "key7": "4EYDDR4BYRJv8dpvVCRXmAuYC8vu1KUETmqpk6hNuCnpo5FRK62hqb4ycQiiWqUREqCzqHErBQJdhDfPBiD8p6j4",
  "key8": "3YNTR6BqxA3ssqxLkv9DQD7Jdm11LwtishMKHKCWFGuB7qW16FZHwGuuLXMsX7PSQfVmMMcSh5EpRkWMdnoEVAk1",
  "key9": "31B5Exufd2KJ6u9e4yLih5re9dMkiXnXRH5gpQq1oUxuq3Q9U4uuSuYMnCuWP6NAGWSdNXjCamwBoLP1yLBNBqj",
  "key10": "4SazjyhHRP5TeSYsdNZy8ugLNv5TQjMoUqLNarytrCY9LgTNQ7bhxo36YLZQVmZzveW5LuW1MtsfuLj9dXGZVtEd",
  "key11": "36ggbp93MR45J8ZsAz3cA8gwLtE8ePgyhyjC4oXKWcw71Uj1ejiFF8YMCfJuHPbM2Q5wGUiri9iQ4qGDijaenzzw",
  "key12": "5fFTpKDBihi2RM4sv1RzPjnqs6CjtmHJp6m5rfvFYcsvNouhPEAcWA7c7fr5WzyNaLBqdewAwysMvoceLxRkSDvA",
  "key13": "UDjHDMd8w2BCyAtC1F3bSKbYL2ZMX8BZDBqoDxrWpejFa1seDqax3SoEUd7gWbpJoXAx9RwPybK5Xebb7Hcoznf",
  "key14": "3xtHNgoymDq8Xzcbsfe3TMtgGZ37eXz7X7MbDWv2HgDXCMQoKLfadqZMSATptWLZW8URNk8L1ED3uKhubtnTeqju",
  "key15": "4V9PF6ys9hUUCwPUB59YzPykHHhLZ5p8LJE2d3v3Qctkbzj4oPZLLjVKYxE7zuS5t1LXKRR25STJS6cqioZLkePf",
  "key16": "37odiTtQDrykS77Rcg2r78Enr9guKe1pSMnH8WHZ6SR6WeuwPKCAaHrbWRQgAK3sRfmGdvLfJycvLAcJPxyteemQ",
  "key17": "3YiMwviokon2UioY2PTo2NN51SZHhgrXPPeN7zAdmsUfrWuH3Q8dZf6rs8g9KayTYR9p8iWkUcjFJifagyxGW5zh",
  "key18": "2KgDdF1BPQKjSHJS8aqAe6tceb21hpd6o3T8Mtkr4bHBAMp3Vm6MvdMpwY6AVW9Fsa4DXtd7mrjjqdc4J9srk7NQ",
  "key19": "2QXzTrZ8msswiiis1rkgUh7Nw5BMi1ffJTKZFyqUD3QY2kUrEGn1KUM7ZktbCRVNvPnKv4a3MF3niKQV3eoS37Rd",
  "key20": "29hmr2sWxQy9T9f2LFr1uLb48UvvkpXJvTyjENTVBpm1yDaiqnEqUTkyxXdvtCnAYuR96fss7qPZbvEMFS4XgvFr",
  "key21": "XJJy3t1DTswQEU2VrRggnZUSh18QdjDQaVhYYLa2x4H8gBTv5B8M8KbPmvYvQKC5KSFCowiwGvygt7zCaJ1HfMn",
  "key22": "5xAoWdUxn9eHLiz3UeFt6KoWoHUgt7nAS7n6SqGeaQ45iCrVkoBiYtY1gHzuqmJDUjNbhg8Wh1s6c8bGriUbARSh",
  "key23": "631zXgHitashgfrpTnRjDgtVUQGqyNLxwZYgwUBUa29YvXYboToFs89Z8McDte6xJAjV9YCsiF37GYMrhPj3XPRp",
  "key24": "4QupNSk9WbYuaf2G7mobikvjSpBc1RHpJCFiGBoDn8cCQHRQAPcCDbkP1CxMywjVnbXL4msdjpEjavwQUNjD2uGm",
  "key25": "2k5B9yYcDdD2y4vSvBkVrLyAKDScUzVHoDcfpVRoKZrWzGcuNfVQ71m5wkpg11oqJLxqwCp9BAQgVbk8rHDSBur6",
  "key26": "4iA6SvKLuZZ6yJ1jB5jzJ1YNgMQvbn44noV7VueMWb5stPvsXwEbwSpupgtnTCxt2qd8BjGJCQXbNWs1k8LWHR4w",
  "key27": "ark1tZeq7WLRodBc8aJYdPPJu61ueUMCV2kZbBwcQnDof4ScXh8KeQCN9mDPWu4YuVC9EWeobMwN9jvtY7iHJsu",
  "key28": "32vDya47MJfAFnWEUsnueFxYWvkb94F6LZEG5GsYoSjbJfeDjCnENNknFnQ39yNNuprSNiG8MJ7ruQabw5FvpD2d",
  "key29": "4sR9u1FVY91TEA8AKNkqB9Z6LzqDeNyAbU3Hj82RuJaE8XrNa3Mjx1VwW3R4YiPqtS2VzARygd35b8ssSQ9jVHim",
  "key30": "2Sc9w9HioQ1vAfrJkctYX3rXYU4fVtYDBUSq9QPYFgdb5F5wBopQgjmb61Pzf7qj8pV9V45PBWu8pc4UCDmcFNJx",
  "key31": "5z2zSogHxX3RAxvNPXKxJMboe7V64GrPAheSk3Yf1gFCaGbG9JgaVQVqcs6UJ4bjqWbMUFJbayN5rrn2qa9qQRSS",
  "key32": "2CcfLAc7ygUcdVb3dL3VDvw68dpxiMCCjD9hYpjvT9HHvffDUJgSupwcMuRhwQGm5fRt3ExyvVTLeUPX9anbYUDB",
  "key33": "55hi63DJN3rVvRETvKDiXoa6PDAVn44JbU5C6vDAUXrkR9eXCEQAE1NnrQecVCVLCvfRHw47FAKNxCpRiUtrnTSL",
  "key34": "3sH42kdYcWAhM8ydaUjPaNWJgMmB4qvCEkZFmV3BjoJ7gtAC9dady9VSQGEJdAnwqDf4r6m2wFs9uc8yVtgGnpdH",
  "key35": "4GunCLFj8vHZUQW2EYNwK6dCqpckeorYFyGfnq5u4aC2J6MJkCUNGgzEUKqs4GmptMbTEnyX5tPV9ep39PLKZ2j6",
  "key36": "29P8ANt69nzuq4mBqmGqDtKHPBV5sabW3Q24QXpTmbMkbXgpBXNBd5GvTudqW2p4Z9rU5fnWMxiMVKffzn3krPWm",
  "key37": "3U8A1KUdicasjHPBqVJBwBpARidMJeHWymB3mRTTj1EcJQvUiBJoyMXF8WfsC5S4YB8EDuGgT2nJvrvZg4mx3on5"
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

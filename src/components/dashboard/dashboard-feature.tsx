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
    "56wYELakNRKDEnXyJqUJ77U3hwMWZDEzC8tK81V2NqNa9kibxvmJt8TG871nN4eKiijhC2GwQM5tqZNE1W5sP7oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56aJzMtXCCLxVqchqz5kCvth38kAeXS8DLYVJvVu9VUJBL8G6Np7oEX4iVnk2wnSvL3Ht8hNWsoBczu2g7X6dHM8",
  "key1": "3Fn479hkxAegSmgrhX5mdEKCcuqMJW7PR4Qnct7HU2CQpuNcNUhLryi8KzrRx5STooakmtz4fJhvxXXVVbNgKEtW",
  "key2": "wGwAGmubnhKN8RvdNVoCgZhJEmPxvWyUivvD84PDR255jw8GkbMmTz9P2BwcjZokyKc3dGanjfKpiif2odWxfkj",
  "key3": "eDwKi2cetJzSU14sdmZBpYT82NKBtVNSxAzb95eWTj4ZMSzyTJx33vqArLk3XopguHxZatpF2YonDSSLrMygQkV",
  "key4": "5wgCnzK9MJd5Rh887Ccu3NP41xxrRf4oxaTZ4c3UY7PYxwPvhbHxwKX8LEX2FeN2FVUi7CdRRM5DyBQzPMknZg8c",
  "key5": "aQ4fAVcejW1kftTMUzhfoXNGiy9ZQqemQfYcqaSH9SLhj9Qc5h1LZNNpWnxqihHrK2kLtx9bxjeLzXQfSZoDg4G",
  "key6": "rECbJvPUbeHx1xs5hmyc3YdBuEcw5XTNqEYG7pF1SzBuz5hVdRxPGBhzsTUmRhCMLgaVY6bhwVv443SEsvCfJa7",
  "key7": "5FBMDZtwLoeWKom5QyKwMTcwKMTkkK8hu36qkG8qbirsgtenP2AsH1DM3kaseN9LmoVkbaUX82og74FNUsj3DmSF",
  "key8": "33t7KzzsY3b9qT9dTREVnKz3B6WpQPNSyJsVvWf96CEa5x3W3hBxtL3fWyBBLpLNpcxjaQsmcRmwiZUy5JosLk3y",
  "key9": "2SGR6DKNC2vW1GkQqEr4Y5t7ezAE3iMLE6PgUfqHdwDud7pshFHKDCAE2x8e3vnBALZXMqQpFjGXrbDTCfDmhvx6",
  "key10": "4uWUqzBmpuBddExXPjRjrPeWqAE3PP8edySLoBTGEhAnpzPkhGS4swQMM6pJxRs3J2CPJMsgf5Q9YjcPfGUPu3be",
  "key11": "34HAgoNC5ht6rLVdzhNarwQcNQoTubhrh5LuFRQv376XvG9V5N9MQfr6hLaqf9Vx9EnogH4Di6emf8QFKeCMEefE",
  "key12": "8L2p9srF2H9D2N9XLVtQkN3njtN7QrNPTDTtY5H72uk5yDFxR8nVUChfhJ5ehU1zVcDrynnk88LKtk8aGbp2FdG",
  "key13": "gd5xAfBj5xFyfvK6KMsRNavepQE5S6FbUFqngLLNWEiTfo3FPyeRqk5DrxeatcG21CH57cHYT5K4H5icAFx5hEj",
  "key14": "52BN7tLyrM7WYK3RbedwvFS6J4H31Qt1YBg6CeQkgwwY6sy9deWqhdYLg4x5pMTHCPkeiBe7TNxLqRxdJt4cScbh",
  "key15": "3rovgTkNAXm6z6yo99EHcgS45aD3r7WaJpxHoJb3kVfHSovywNrvkvNpQpK63seSUUCocJrvf9WQ72grgWdxJzMa",
  "key16": "u3Hv6QjuMgmeiS9m1pxV7BQPLdKUnfYeorWiYMkZt8BZhmxgxGJQspN4JYiEvPL3XF47SpiJfigHXU4TphTu2oX",
  "key17": "65SCxKDSXZyyasPH1LkVNUk9YXVF4Y935A8u1mZKyPCcFNA935NeP2Q6NaxJTXq2A3eaDwTCrCuCtBZnJWgnv25T",
  "key18": "5sXXps6dsNykUGTSdQ3wNmQfgQ9BusRJ7A9C1eBGP4t91U8nuuyQqsQs2EbHjB9jHFGSfGQKkp1X3PTgYLQrnKFa",
  "key19": "2cXPv5RZ4eDPEfevei1SrBBaA7NbmwKMBF9mkMnY7FxUBDS5Z79bMYVu8gpEEXKSkmYLBuYwjka1G2CJ7Vf42scS",
  "key20": "66UFVt8qcx5zrtVQxWDBCvQFc59cA6P4PtfRE7TRVfz7AZZLmVNpNKCUjFr2wt2Bjjzb9jBeqcWycM1Br3sCJFPN",
  "key21": "VN3GeCXKKxg2XWggz7SK4JrnqMa3k2UDdV2yqaT3cfyQs6MvYP3xwdEt62VzVsyvNUT9vPJTCVRPUxmhF64beWV",
  "key22": "4UGQv3HkXcoFRgnySFd4HLSgQA5yTmTJfanfVxbdSu2VP1n3Y2m1bMWCo1ai3bfb9GHm83tfmY6AJcvLRaxZzWcY",
  "key23": "2qD9Q4xgqoYx2du2RuRedKXsrs81wfQMD2xFJjk2mFaVpsZsSk1ZKJ67BxZAHJcWcEpec7NMebovkVtHSyNQxidC",
  "key24": "mV1xvBQDw61KcgftCMo9HNATMNKfkwVsivGxCRSbvjrnwVHzQXdgjsqAZCCe22JTi3taHzCdBGq5JgpV1wDf3BK",
  "key25": "4hKh9Fob8y6q6W76Ua5R1mk4vdQoMbSUnfD7TwsfGYzu5fEugVQbKhtPZJ1FKUGfvxtMo5kULagFTpoNVrsq5tTk",
  "key26": "29UJCD3CA5Mk2n8jH7nd3sp6U35co2PTiAVF4WdPU7x31fzFRtCMk8kpL19WhENeF8nVJXSZzcvgWRRxY1u7x5Sp",
  "key27": "3K2BB5sjsERJgaBkyfbBjtBgCJqyVzSSPRRbPEDjB5zB5UmgaVxwrVGKSC7rVnFp5D2zyqLKMU5wnf3CLn6PGu2v",
  "key28": "5DXRm7c6oVZ2katsLrHLsUGcZsFcR3nhkujveAP4ZUAyq9gecWe4ZDSzvQiA75XpNFLo2cMt6VuATGRz9r1VhSFa",
  "key29": "64MXpwtmozKqWrHNHqraH8eaJpG2RaMtFzmtiz1VERKmW8N7bArgEmvTdyvf3edtGgNJ1HbPEb2mTnKniJ1NpW19",
  "key30": "2j32wssbBHab8k3T5m1F2S8FaGwQswQzsYk67PSD9ft6CrMvNfUkmssKdewPuNJR3wkYkJJz3XoxLW5rrFG8dD7h",
  "key31": "5471kJcM1jjH6Zjyr5YpwVN8FYjBMcXpniEp2fKFVmaRju1GqhKwWB1cMQ3GpJ1inGVHA7BCBaXq6TVG3J8QThs",
  "key32": "4ptWrwmUEo95MHUPEzTePxeSLNH6TWhspvjbj2XuifB1ZpeNSLetUnW5b7YRHcWsn6K813JNS78fNfDhiSgunrAb",
  "key33": "3nfAQHSiLnyHvcR1PTxmNkJJUredEdjg89V2pwmMcdLMCEh35SsCuPdm36jw1Phwjjcc3D11e6j3m6wAaQp47Wfx",
  "key34": "2NgcMfLDoyfk43iHaQ5uoNAmbTspTa7qqtEsAKkPPTtTT72q61RyFwZfg1MvkLQKEAvixk841wFKdiEdDZFcYaU6",
  "key35": "2oymx4P6EtWn94fZjuKWo78ShQLDtEA1tHXud2Tyga96S6jpKmCCuZf1rxrnN5qN5y7CjNnVwByY83E5KD2NXJ9o",
  "key36": "am143AX1hzAkhRTjdPutj9b6JvxjNwJCGeRj893mcgScR1ANLP3LfSYvVtnS6QvhMtFHLz2Y6HgEZxvsN39hiWu",
  "key37": "27PDGAca89PwCuXWF13K88wSG6DKDWwEfU7AgmRAs7NTeanWRcNTHx5PehtEiQ13XPpfXdW1VkroXYfbW5pLcHc1",
  "key38": "48suqgpVyETicZQKEmfBgUonHzDAkZyZKwCTnXZtxYQKWcTHjrixEVr8rmsAVof3GBMbjeQJcfG7ZY389eii9ULo",
  "key39": "5tLu8AJwF63oNxNJBdtZQUUG4LKuhTEaceyFg6xGpA1fQGfNq89NwSsdDfXSxjZYWCSzsoKx3EdcXrgQhRqp7UKi",
  "key40": "49EuQXFKFL6guhAXn4cvTmhRaJS5CbfChhCza6RJj7seeDMgf6TdLcTBskSLzte16ZWjVoSFxDwDNEdabVTtfU3h",
  "key41": "4QANHhHm8akJ2PLc8kFybjfbWtoF1h1KiMpsydF2qS1tDXE771sApvwVHU4yjNr4Q6XLLp7feGsD7dcxuBr15yQK",
  "key42": "55PqxMquEW3APDm6DJEUtdu9AomfzpT9VeTg3ccMRxUkUGBqYypqkXBKB3khY1cN3Qtkv8E7G9b8YEoHSCjKtEXF",
  "key43": "5hFjCDJxfqjuBRwr4czMYivN4PuNcuiMXqiKoojiZwShPzGbhxt7B3tjo987Vo1nCzyoWMnxDKgTGaYiUgUErox7",
  "key44": "3fKd12U2mJUvwVnJW8qVjH7vchPTqYzm11RxqpdEgsiTYWacfTSZZ8XDQZe18YuHeEMVWezRYwk5zSWDMrnwdMGF",
  "key45": "55KRsViV8ggNcQvDBUzBTrbn3526uCWUAi2Utx54VbtcKv1eCg1wCWYZdETaPCZHVXutxnsXpHZ9rTJ4WBAF4UBF",
  "key46": "21c9WPcBN9h6aQTEipaXFfxecZJgjcaYt4A1uVUwxWiBmULFUaQa23YiHygU9RkDMfRm18UnVZYPQVVYpVPBbham",
  "key47": "4Z2F91RiDBMPSRjxRTsNjv39T53pY2WnqQBqrPL9Hh6z9yRmG22S163zWzwASNUqKvQkWmEvEp5GKQYikMMb7HfT"
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

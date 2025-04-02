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
    "4Tg8GsTYPsXbjcGPuGSjZNxfTuFdATqvkBLjKnE4JKCNRnXrqYWvrHBYHs4gRApR4GNzJsiTEmNZfg42fBLnrmNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ji4uZWMLEuTRxsQbSUkZh6aUWeGZVhEEUpiBJzY1Qw71DwUxcUNnry5HzP13dGrnrcDGY72amMVSszodtj25tnd",
  "key1": "5zGMy9xuZnxabqTvP7veC6VvQckLKQqyQJes6cLFKujMs8CoMnLvpqVgNczCbj3Vkj7BVuMeg1nYozZBPNC9mR3A",
  "key2": "aDDD6RjP8uq45MBNLomvTynwhb4FSqacriHrKLjtt3xE5Awhy3gj5oRYYWXYPVuLb5zUPVsA1JNVZetEXBFaQfr",
  "key3": "4nGMFCzjFQZvL96P4kcgYHxFwZ7QfLnCwu7YJu6TR9HKsjphtbheHeaxZwrrV2D2TsF3sNjJgyW9WCVRy34SdbET",
  "key4": "5EE2hygCYF51MT1xWXxJZDBvBkHp6nZxBrt9hBKvj7c6aFDHKc5smxSAMSkCV6g55c4h8t5mPw7v1stVRpSBNMvJ",
  "key5": "4HvL2piKsnKe3cn34ChbuZwFRBrhncnsuo9TEsPoYECv7phe9Qn5MmxaHyE9wj7tpDAq3y2dNtJCVk34rpvbXTjw",
  "key6": "4UaeEky1xVz2uSSbz9ZZXyqq3TfsiGoiC7iQdv4qJ7TCi3FzHcuqcE73HBMea8ew2KY2nDM6nV9Tw5wbs6rPmtHE",
  "key7": "GDZU8vwUckboyASeNuQgAX7KiZhZ8EDUx8fy5cCwRZx5ZTtUbmtyVE98hbGnTuHG6HvR9pQDRifhuvcgp87Y7vK",
  "key8": "4bMDU8e9YmhhSz9fayYqbJ2hoMbkWjro2Hddot3NTCq8dwBmQ1aQfFdvkHC7LqUH5NXCohBNoKbvonh4tJdxf1pp",
  "key9": "59wPbm1qWYUWT4cPy7f7iRTWDe4YWGuiz25U9rCakdqHBkW6ggWUodMviC7kUZdHu14EUEXVCrB29k9Nc7vZEESR",
  "key10": "2gBf1wswA2gfxSqXFGcdCHCw5UThbQLzf92tUdgw5W2LCdZG9Na1ejPRwvz33TNZba7BMihEKCxCWHTHwEySbbWU",
  "key11": "66MAzfFZx8pqXZ6QUBFGGRTp2ZB93Qj6deHtyUTw47K5UH4NUt489nDiKNbsSUKfYBKPae9qfPBcfD8y45MRYHkR",
  "key12": "Byyqs2tUejBFMnNgEi8Hi3bStsxAmzWGNmoim67PhWUB15MEWcHkUWGWWYJQs1r9i3BYw7LvotZBDfrqst7Yk2p",
  "key13": "43psBfzkXCzYZcFP61SH1MJJu16rzuU77RsCQusiAezUDEWpBwA82TUA19wz5dPWATR3tANPJNdahLpdzBr4dZjg",
  "key14": "3yNZEq2PFNmWBm4rUY3Jn8WiNJ91AxwdSpTMaQzDH7WWPUhemFpsbwgWtNL3Fz5dS5x71jpPfpCjn4WJBXXj8yUf",
  "key15": "iFWrQJPz1tQLT687r3fePyDgE4bXCxkuMGwwQgQesQEVNq8vUu9DHZX2742xjdfXvVPjvkJfwjMpQ7pzPKA8X1e",
  "key16": "43w8NKtmUDtyRAJ6xXmTdkVZnj7BxYgsDCLREfHkpVUZhazfsDztGsyfUNDScryXZG5a9WcxZKkUjJNt1JLcFeas",
  "key17": "26VXQF1NgugyJvUwCyhTURzXK85WDgPea1bSZ55hr9e5trXawmtC8B63SoJm9MmWSTxg2vNJvVxoYyeYTo3SE9E9",
  "key18": "2jrTdu9Bcx3TXdAs3LV2WRUKcG532BAETkrtgEYWhaLHgXJURDzBegEmPFr78YXQhtrdw6J5c72BZFWqNY2CTMqm",
  "key19": "ycKRq8pNUr8dhT23vgEYNDt6xxZt97ybmYHjSXkFNkbe1JWfk6pNVYRq95VbAaK6fjVwVghHQ7T9vkzHstBviWa",
  "key20": "2LHzh3VAktYLhhPM8BMTtbDp3y2k4TTT7Nx5oGcBgnkcpCa8NjG6PShE5Wo5UJDgB9hkYWr4wq2C5v3pwEFa4dnt",
  "key21": "66fjP9yEfVWvz2WJMqbSbGJrw8rG4FfHQyeP9TUErKbRkkCpgJtAy6eua2ERjaNWgvG4aTAebpnJauXi9r2NLGzD",
  "key22": "peG1erRkgEYjCagmsxPTMUGhnKypSK4MYQYJYBJ4fAejJeBN33SaH31aH9XhWp1wfBifENjoDHmhQodFrcmbqPY",
  "key23": "DQaqKbZVDDFoZmVGH1UAZewN3WmMeBv1yoWhPaSshYAQPEE6FmHfC1i8fp8j5TEdd1QM4drJeT2zeqWgb6oKjjP",
  "key24": "a2U7M7J4i4gukcGYMp2SCM3q2JLk9LxdbtFSfg2jgQxxnM1ZAKZVW59VLzpHhCEj44pZqQ9UiAoZBFWuqrw5x5i",
  "key25": "5Un8vbCXqXo3s2RrM5aw4UFPGSv7HAfeNRCbAReFGKsExfjs54hjYKnUrCoo2CN2QtHknzWVANaKNJn34k65cQTk",
  "key26": "3xP2bdnFvHABa1f7qU2d4gKwNCnkrEhRVk8KcwDuLu8RgVJbQWxdMBGozuSo7PvjC11eQw7FnHGNzZ8z5y5S1kCS",
  "key27": "4YJzQm1ZSz57mPyJ7oqaD8Fi483HYi1W1dKdsLZgaNYH9QVs4xuQunrbG3PbqZ7qWF5iD9gaQEZitrEw4r6iAL9Y",
  "key28": "vhhX4kErFkiBmf4ZVNnsuBJ7WiKuMBfXBy1hp88pHZywuY7icVryhgkkXzCCaadQ2d54TDK9BmSxb9U3wPZd9tc",
  "key29": "sgKsPw9AVkVURR8ETXfDzzuTBFpEcDK4XXWAXjQ6uokvGNVm92WiCUbeCzFuEtredx9zcd5FfgP1Gsns8oQbmBM",
  "key30": "3LoCUvwrgv2FeW8U8ayv5DcQ8mrVtg5GMHycaUYmSuYaG71kBVQdsoyoY4oHxuJSCPykCTBfynGemvqj57h3reDN",
  "key31": "2zZ13b3PVsTsEYiUx3tz3T3pWXyZYxxN3NxqE39jcWqJ19GC1iNsWBD6MuSU2d9ZgCTqaVc5SLohYreGpvvj8UdL",
  "key32": "5yBuSoSzR9GnaRUMSuv4BK8zkTs49rttFYUgmymKTRJKSZk39kqX87owiWBvfACJ5tmUyextjg8d6g9pzNPvTcJ2",
  "key33": "5Admh8DF93e8CuPYxFVN4XLTmgxytes3u9bCGPdhgzhBkc5dMK92QyHEE1GGLANc5p4rjMqbmDptZToqmvkhXeZn",
  "key34": "4bADgDs7oVGU9AymZbL1qQDHt6T2Z1PfeP6mmrA8pMDzsJDHH37sWy8qvgwyGvs97oNJFJc1gTkgcbFZYvHdFaaw",
  "key35": "2Umz86okmjuxmrUbeoG9vkncePwEaVHhnxW4M5G4fNMWDftQiWoPfc9HWsN7SmE9j7BUJUNpsmGUwaGMFoRBAzat",
  "key36": "3FmDKXtSTMKo9VfF1UZpqKa9r9vPfubrmz8eNWiEd1Gb8RN4kE1N8D3xrwn6jtcPYVwdxtzko54FPzWWJGC7yWNU",
  "key37": "5bGsNW3GmpJmHjvMAYY6Y225W7jjmZ2drxSkPppAvT5CCsLBzhzeqtAXCBTsiDw7H7qzQT72UkK7i2VyjwJymvb",
  "key38": "4Uom69GTTJwtKjjdEKWsTKStHuhrm9mwZQHFbErzguDiYxV4vs5kXpbaZaxd56EXnp8tGNFu3MVSb9txgi36boCU",
  "key39": "2jFfpjEgUefAX1aznSAdoMg3Ef9rcP49Yb3vvGYPZn5QyoCyMBwmp6jTaR83zKEa9m7SCGVvAuDt9WowBwRVRyFA",
  "key40": "2HjhQJEbUSTwtKfnz8iUZKkPjmiXPivsTAgCxPCdULzYiE1XBiUGw54BDnU5p3wwSLtCwxQd5jiCxEGxe5qPeDqi",
  "key41": "2uGDWQfiphMd5rtmpvH2TUSjYv18MvpUrrTP2MTr6hJf2TiYUXf6gN8MY7oQT5G2CjfjXLigoHF6RxhnjJABLzPB",
  "key42": "2WdLrgmFkYeTK1etFiwGi13U1YJbuaHfrrz9fgVbgm5E5pcygoSoDJ9HmFe8KosDTb917puPGkyowDbNhmosVaFB",
  "key43": "4p1ZAMNFHm9HqTkMj8dR6T6vnjgmRcquZdtYZKtFXBrCAq96cqJ5p31G2bVyKZD25nBh9QFLWU38rQZStHLwnCHd",
  "key44": "VkCj8s1vn1WDsXXYt4RdQCPtuwKGpScbvpUbjMpBxykD9ugWmWYC14qg1WDyZjvWVJctw1hXEPqo9GqNZQ1WkXB",
  "key45": "2AUbrHkYfgWmt8pQLszQMT23boWk9DuYqcoNoUUXavxSUDDVqNimX9BHByvuEz5nrP3WE8xAJuNK11vKXwRH5qUR",
  "key46": "2ioYjyVJ14WzYTJAiScr48VRYn8Wk19D5arJdT5gS2hQpt3ECE56Amoi3DNh3DK9J5cB3WiZ7V3zh4AZeRC4EEf5",
  "key47": "2ZYP9MaYuGwa85K2N9bcRL1YqocGNJWxBeyiZQyBDhzs9xz7vh32j7aK2CBpbkprRykbXBjDX5qodqHAar1G4gW6",
  "key48": "3jedbmhick58vqyZZPNJEqLHmeXHcENGGY1jVNgQdHSzN17TNKja1QHr8Gw9ycGHNQHejAZJXXX671M1wTXCtEBD",
  "key49": "59QHUuzHzieb5Aa4EZhSjGGf6Zcow8YN5DfEJefjD244n11P5fiUx5Y3pz8ZHbSyt85qe6kD5A6FvhDDsjRufJwJ"
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

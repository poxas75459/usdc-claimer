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
    "445BfXy76LGQuWfMzLwDvFM8ggNxCFiq1dEao95PLFAL3QzdVimAdHixZ1wXWSqZz1fdp8UL7oyENnUmbRxuApzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpSDN7zANspcv3Us7jnGGiUWSckBWvBocpE9vZPdpg7XxhMCFkS325xxeF9VC2VqGq8ZW5hF8Aw7YcZS1ADyMfj",
  "key1": "KXdZBMGuCrFLizWaxyQX2xkrtJTtCDzzZJCsaKcdtRt4YL9CesXtaPeCcXED273dTGtng41rCS3z2vSpHjNyFsZ",
  "key2": "G5aEf8Uzsa8SEv7ikcyDm4wCziEFZven8JUEPzVv2jZizSvjFuEewSeJRpHL4QMdodcnQAcQtt2EBKMuFBxSsxC",
  "key3": "4tdMnU7XPtV7CAmQU7jPFnGTLNBHPJJWN7UKTtypFSLqGnv6q3eU8AtCp5q9f7RUMumRk4yzt2WkT9SN4SE4kRv8",
  "key4": "vqd8ECeq4WWxrWWx2uF3Fn8SMzQLUP66XKq54dGU23GNFkmJVBtkGAH5W5FvMu5a9xWM2pBqErS53jdEjoEMsqc",
  "key5": "5Pt9BBMuzksuRPB9JvF25tQPPuwHEsSU7T3dDsmV32R9zXb1cTTERhHuCyJEj4KoXWsTgdfhvbkSWNZv6m6LpZe7",
  "key6": "2nsUxDfbHXRMw2yrhLTGsUgjJb5gfqJ4hze6D54itym8uMxkiXoEfkkqaPDaBgosVBHiAEuJMCuczKzoar6zAbLd",
  "key7": "4HsosCXPoMsUsPUGdyyY777qyS7NwVayUtBvpsZePRvEjqvhGrGWoxg5aC9SGoAXFbV7tzSwwaakwNKJrLioqzaJ",
  "key8": "5uqeGxQuXPoejstDih8szrdwy2MN9qRac6qEwBtoshdw6p1bz8nxN4Vi1iRirx5Xo8UA49D9BYhzn2cwTeHPp7oj",
  "key9": "gJ8NydUBXGzQa9AaC2EQh3uZi5d35qEG1YtVhKxMiBXduSYwLwa8jh19APfYuccHUg27HJ7fBjGezoeprGqpZMQ",
  "key10": "2W3jmTsvFL8Zm6q14yMuBHPEgSg2XJdJ6dpiYhV3DQwvL32Zo91kJvgwiNvugACfR6Dwfo8TN23DTrquiCA1zqwX",
  "key11": "2eahY26Yv3PTv8HGRKzCt44hj3q5SLN5FgRk8VX3EydDkGYDc4sdoyEQFNTFkx4fLtkvPwJt9D9X46AQZfuBDpsN",
  "key12": "2mTwn8GSGFFcfettTT5o6j4JYG8ePCroxvhDMeNugpK71XH8puypUunHmATFM3CpLLH1W2YPqiUrRGQmf5yLvZsA",
  "key13": "2pT1vyekpv4GDwjTX2Uy8H2wiZ5YphyVuQFyncsRupRSQ7sdcgD7S2T6kGEwPVXJ8Mv3V8vZCpQmveFNmKwfXhbt",
  "key14": "2YAXBYKYq6m7yCeF3i452kt2qVe44x8RfZNnismF8d5iLq6UcfS9DMtRjrPqd5J5wjbD1WcrufCep4mGKsyHAfK8",
  "key15": "3Y1KTkriV67DZ7zC9FNwbG6nmbmAxcJwCBduUtYjEUUCCWvP5jp73VcWYnHb6yqxfejcwR9ZEYQgsvHYmMESmjax",
  "key16": "2muyPgHoBYKSz3B1GzRecpWstHyfhaNLY7em1UgWpMgUrmZb7BnFx65t6njA8NdCFxUfpFhHdyAkyCacLsEQd5MB",
  "key17": "2FMxU5jKBBntBzK4kXkEBdi4861JYCwek7PRuGm1hrGFRnJheTUxXoerq7nyCFbnWY1AHhbUzLKTjwAjryde2M7H",
  "key18": "5CQjxhNpgD2WqGHoSziBSr2qGdrGdrPWo7uaMcRVicyXJbwFnPDiQHpCGyS9vTjf57iBLReedSohvsT5K17t4hc",
  "key19": "5jSnVFKdYhjdivCQKqAS2LFHkWCE6uCWU1ovorVej9843awTvgF7sp9dve3XigFHEUqqGAiiPTMywTka7urWXivX",
  "key20": "5wV21sr3b8fUi9H4UX6nWgRhxq4mrGsr7eGs5hEk9CWYgU9mjAKLdFpUYVXCRqqf8FVNTVNUfRBDKLtKRZN265Eb",
  "key21": "3CPuYjBsnWmgqHhb949Uo7trwXy23UfQ3bN5ogfFH1duw7yJjbWjD8jVz61YDXmNXVx9GsKY96FLMb8kVZy8PXVf",
  "key22": "XCPhpYiTTW4umFmSvvzFGXQzaXv7FkvH4y1ePFu3VPuecL4cyUyzDxZWj1WhbrJmzzrWpBpKXLzjncvrGvmyGj2",
  "key23": "5iqJwA3VauwLY8UnyH1JhEVA1dfu716E7cuV5pAcesr1n6bo9gEuZNatWGEAG4HUaQ9aiqgFWhk56FqLJDi5Q6De",
  "key24": "5TQT8e33NPH6FMXvJBiC7KTTKtRu6XDxWoviCaU5tXtCznJiE1VwgdCcyPszccPbG5ymkj31i5NPwhMLEBjAmqSV",
  "key25": "LXDBJ7JwE4SkcJSnVDXzASnBgXoLhocRssjUoMjGKcFsay2Z7oLi2q41CVi4BEMwQugvh4URijdwnfFpPyddhkh",
  "key26": "3a7BF8S1kKfQdWmH3fx7UYZoPAEMMUUBhUrys1UPGNqK11c3M8tsE1h3c8M86utoxG5giE46TanzTL4JLyhG1HgT",
  "key27": "5eYw84TeWC95m3DvEfMKevdZshuG3bUDZAbGRmAySjaEREp9wjRBjhRQNYfeigdnmPwo63oJB63DkaxE9mfthqtL",
  "key28": "4omsaKASQZ5xcyW87YxBkcTWUDd5uFEZmcyzUtiyASVPNhXAgBV69TT3LymYARhENRuSZKAXU9Tb3o1L7qgc5zhb",
  "key29": "3TTzz9vRKNLZHF4svdxafTXk5p5JrjGvAup7jFq7bm1jqZ3PPDjgYgVmvY44zeeSbGxyGekRmW4K8vZQHnf4RArZ",
  "key30": "5zbp8U1y8ZT2kSRdgPuyjZAc3GpMP7P1GzDi2Yj11yud8hA1mgsHFjUsDsPoStoKDSTx5AykVSyDYWMogpLSP2XK"
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

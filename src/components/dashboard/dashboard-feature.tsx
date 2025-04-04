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
    "tSEfeYwWTMLEL9Ng2NpwtGcPKYmQkARm1PoQaDMtqj24e8NGyMzXxPgEgHAkLR42Zj7mBx74SneK8BVZUgtRgWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTfun6PpoPddmkPz9x9DMMZEo4E9YtnPFB3mP8P7W5skzdjzAiPs85XfhjxSDg4JCaLn1SDPpEosBWMpdbquCDP",
  "key1": "wrWTk81x4UPZRA9WtwpvUmj1uV8cQv5aoVJfEpoD8y7C2d3jc9VPNY9pQj6ycLPNaX42iHGqM8z9mRFMvpkVuL7",
  "key2": "31RMcS5vMw4mo9bYcXJYfepRC85LfR6pmyDRUGFcA5LfnAbwVhHDqxtVbNf2uoxNeh1wZ8de8PHaGjpBiKkJFNGq",
  "key3": "2PynCNZoFWtti72aJ4NnhUyGohebn48e6NsfYKMdjM5A8r65RFDAVEHGLsp8R2L3K8g8nEho3NvEpUJqukDwofm3",
  "key4": "NgWY89zHxXETJ1WTqceTpjn6LadhkjZSe8QioUjvqutx13X8iLFqvnx1KE92gy8gsCrwHFnzTcDytJu8gYYrFVK",
  "key5": "4mSyXDTGcbhpTLbmiuwLvxShmGNiwtwjDK1hpBWyDB8yc4VUDxsY6wzbnXroqC47uqv7CtEQGwud1dLRuo1WLFu9",
  "key6": "55SckFrLVgoZqzV7BepKsWk3wJQELSTR32Bweq12Q5Aj48ay3iJ15wXCPf5CRXEfzxWDWLRbWoQroEodTnhtm6KD",
  "key7": "29RUNKFHtZeiMJWZsiMAU2WpQXo6ofG8S2Q1JPChLy2YD8yi6N5n1KbEduRbw87EKtkkaKF1fthbxqY7mtTayqqu",
  "key8": "2RbGUUR18ggJeYc4biijPsqfnfVd9T6ho2nw6LV5HvimE2XbaDTUxeoBDhoHHM2QddoPKJa8msfM6xJK6ttTgkH2",
  "key9": "4Ts57TJXz61ZUgwtt8F9U9Qvcmo4DbZY8C5sdrjE9Tz9tJB7A1cduxFCBjZDu2c7NEiqT5zmw4RQJ1Y4kFuJo2pk",
  "key10": "3vkYPLL6vPD8iBrVp3iA2fcsrHdthyZGXde13KqqPUgsKcEFJh8Mcjybdrsxat1yJWdMk4zhM7TL1KS6RuNzAarN",
  "key11": "tXHnbeFsLpefWPrWzdvRWQH59PZdd1m3iQFA5pMQ4x5dzF8vaKxfjWABYSnxaADjDbLuDsHJwGFPa4CumKyiL11",
  "key12": "4oeHBtQiGcCaSDn7cYtLqLzPuNbzfZr62Zf36REKV74wz6Knh4STEqKXZZYjBBrNWoKJs1MNcVAwFZCnKxQxk3Jj",
  "key13": "3MvQNYnJi2pHB1H656smgLZZf6VmgMsqfBxx64M73Neyagyf56TxE5N386Uc2gKKaHydea2E8LeL5HBxzWjzUwj2",
  "key14": "hsMKf5xJkFzNEgWQKJhbKYhBu3AqgW1bRFvZdgdfgDfXPUmo2RKUGD64S7iRu48FEEeB195WCAZ5hWb9uDFkZU2",
  "key15": "F58ktyekmCgbRSTUcxMkCjQCNew1FJmwX5ZwMznYqw6AssPhVDhthsQHwSKbpHHGcyEAQbi2SMHMRYFWmiUTpBS",
  "key16": "5Scnas8GBBbLMxagYVZVEjV3YcQ4vcenWQTouhWYUuzkWsmaUbw8LuFXTricGiWvhWp9ppjY7Vay3VaKfnR61cz6",
  "key17": "4mk1ADSdkayGdksGMCdJyMUtLhb4RVbgn5uygffuSpG7yqDB5Y51EeGqnUW9YGhzd8iuDzx3a33tmsws1z3oeosG",
  "key18": "6zc2PvYmFzxaof4kWC7PSu11kGaHo7fABbU3xmrAnSeNqnZcuJU9AfYKepKRQVCNLiFdzAYz4EBJRryDxAR8KLJ",
  "key19": "3ACxL5JCySDtuVzncACuVKrQTmg3RHk1CXckyjTEstPpTKAfa2dhhoqxsABgxXr5EpyTnZawe9gnBQxyhMHJSBea",
  "key20": "4jzgqVEgitptVZXxoaDAAo4qzNh7ArpsuyKSSUrpZNk5ig46TmG8Dz7irXYKMhqz7ppApEQs6SU1LkAg4bPTUdQj",
  "key21": "3VVbUUXJVYdEa4Zw2CNEZs5ic6fvsyZN4Hde5rVCxuUmb3e4sxApBJDyRPdwEjzwgTUPu9SyZfPizA6zJCnTo8jc",
  "key22": "4Sf297o7FCcuLR6wQdfFFvRfGktQ3y82VyWmEUYzPtBQP7swDwCWL5UDNFF45ScbjLZBAcMBXrtwqmEzV953Lg8P",
  "key23": "3ZkJx9HkA9juYyp6MkjRJ9Wi4hTfCmEQwg6S65uffQvTNYCYtbrmdaSWjdtiW58GD9hLVE686gfaQgeFZxzttHGu",
  "key24": "4ZsFjDsiX3mz1WmsdNPpFNxBiCYR653C58zSqxNqoXGTnwbcg4Gf1FxCNJF5Jcgg7kqTvYv9bXgCZPzgZAwZioQf",
  "key25": "fwJW4Q3GcFGAvzZ4txFLbkF8wNYmiDdUFfsg6gobqh2jgNQsKE5UNhbA2iSvNC3793sf9oMghqxjXxiEDzgb9Cg",
  "key26": "4AGHZHL6zsnQ6YLQSXvrDCdzRyfvsu8jgBMY6C3qsxcjPCSvZjiyimS2eCAbqqfsi8R3WeijFBvjbyvBUmrmaRMH",
  "key27": "4HiRHjzHeXWuY5G6LgdUoujzKqoAsERFfoMwP6gStVJRAMFawkYAvMA2rQ4jiDd67v3kcwvFCje18Q37Px1ENBmN",
  "key28": "4NaQFWPUwkbA1SzrwoRRYpqV8PcdQim51f6NF6FTcLm6MGccq9LCLUsoq2ugCfDz894NuCo3MiszH6uGFbhfnA4z",
  "key29": "35SVXW1R7SC7kjd7jSi8YpGkLHScJw6Hvnq9kr9FfNJXKisFZRpUDTwd3Db3WvJki57jhUmomqYV5GRK1tasQnUe",
  "key30": "5WySQyXmnvxJkAyEEHXmGs8AVmMihzu3HmzRuvrLzemEqMU7pF6aKjgtUr8QYXSp5YXQNSFkH2s3pVEfJDUa7S2s"
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

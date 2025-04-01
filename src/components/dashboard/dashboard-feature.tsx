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
    "4QwjhV7pd19zfeEbGm9ZD4fuvKCpxTd5NNGuV9g4CBqhMHkMPsbfreLQxnKiHveWRAB3HN5Ru2SYpqKXaLGHy4i4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDX8HNS6oQGs9M5AjGv7tYWZTCc8cnGNVDx8UzWYhEJn1qbhESjXUp27e7tMYu5UpbKVHqKXn82pqQ9SCwvhNWP",
  "key1": "5Dm6W81nk5KUG9qs9gnDe9qX78kmthhhFTA5PGbrHjZHHLHSR4ySxHaXBSEwEzUB9vJnZeAZ4yUZmb8ad8ND8Uiu",
  "key2": "5yZa31g8LXkZ5ttbCGCCuRuL5hMmstuFwpnKjxMy7QJxts2RTAW684YWfMfEXwVShiCowBd9qATiQkYGx2qvVGXV",
  "key3": "2SjPxogcozVVKdgQ1xRXT2ggombmVmX1xQgaaVMpU6atdNA9NayKSnUc9xUCYw4UXsdUBzhgzNocxkpcXS9HQ34p",
  "key4": "4yN3b4AZYUemCym7w3czT4v17gAuNBrNxnw9RbdqsXw5HFvX6KJowSw2ARRWCNTJwfFwT9qnrEDoaNYaWWtqEnQJ",
  "key5": "4zWYitLrdpVgFUibZRrbbr5VPw7PGKcHFzWFgyhzf6XxMDgmKDsmLti6tqw6bRW1KpGnMMgMYXuGP7sn28hoGVAL",
  "key6": "abrPQPpR9k6bfx5J5AR57bVEujMaPYGALjjs5bRqxzkU3E9icdWfwjJ2nz7ZzKAdH4z7jDdUMmFxa9gzTpLvdN1",
  "key7": "5F7FQ9nPmU6m9NamLJP3dpg19yj6rfHC4oJnkczCTHaQjxP9nD1JmxtVLU6gGoqEG8BG9zR9YS95ixx2gjgD8UUS",
  "key8": "3CFFfaS7px2AVcnBKhhTqbLHu5YTG6Ka7pLDmAbj4fCJrGGohALCCfNFn4ecvuMJvSKCmD3HeW7DqAHoUx9mGveB",
  "key9": "4YJzX8MJZa3NwV8DVvQygici6ndDXnSQtFYKaTQZtSvKiAt7NFErKw7xqCzZvMNJurmxZ7jcSXV7CuPhrUK2VpBt",
  "key10": "4CrtWSNHKVzEeJ5cxPA9VTQw1S1MeFif6nYMDwMie69K3dY5oZtDhmhZjDcQkNG2MxuFFpX14XcXH56A2zr3NmhE",
  "key11": "5RdLSmV4hsjaKEvXKhrQ4wzdu6xS5z7BJxVq6G5jWv7JQisVdBzVhccWNAZDwz71y34aJNmeRpQbCT4eQcwvTLcH",
  "key12": "65dkDPdr8HSHCpvvMVze9tnAxjoGQZBdtZ9Q6mzNpNdZgJwVhnc22HZEFtx67X9A2B16WJ2dmayxw6qBkjt7LkmD",
  "key13": "4B2JG4bdZMBZaSHmt6UF7MwPJgXqeykVsVXHqaHeBuUHy3wK6NBqPE6xbcMC8czwNU9GtdJpbMtdCie3pZm3WmCe",
  "key14": "2mgCEkPYTT6ci5e5GiUxfMs42iHHBXTkiDWcs3dn17p4DAgtsJD7u7QmTuumhwhAr3DZUb9EiwQ6BZXPB8cfXdMn",
  "key15": "5sUSstAgYZtc9gxJGbajQAuKXFPt3x1FqJ5obbkaK4HKRbtiMrsYQUQzQXGf1CXs7sUcYJN6qSZJz4KFT51gd4xH",
  "key16": "4JUCtaDmjzxA6zCfJqf8RvLiXdzvJFyWMCYY7e121kGJCVjbVJTekncuc2S6S9rUBfRKJD7NgkHwfUnpceqFPGnW",
  "key17": "4kF6kyWJMA97AjzLFxE6jzhDLxpP1WBNiusS4GukVkTj5q9fwgGFx5RrJuAW4CbV6A6i9aGFQKznMGuKqLPqqMZR",
  "key18": "3UG8SLHTraac3QgZqGiFAeJ28FVBdpeVjdR9gf5a4sSA19Ph8kTSYJmprFbMVAdbiNNYQR61fvUYCJEUGZBdLZLg",
  "key19": "2EVPBFSJDUeRRRsgX6nf9WU7pWoKMSsXkUTuYQWSxGdE7ptZp1nQ6g8DAzJMc4CFrjb2dBrBCcLXAwiWHTW3FKrf",
  "key20": "3u1zdUEEMk2z2dHUuy9GkHWiBySkRfhExHTEd24A54JWZDn8xCoBDVwaC9nTvXmXeh5HyG5ycXbCZKgnrGpnoCLf",
  "key21": "1oqTwk7m1dUTcrd9ZQ7g4EhK7FzsChYS5ZiQ8o6Vsz1jvVzYK1ZujhZbkE3oUDTpHYmx5yBNreaLSkeg75JVDKa",
  "key22": "5DipZjCuMWnGfjga43D6hh9HDA6VTqnscSdCpk3fdk9ihuPF6n2xwxDWngz8HWe68CYes9US1icbrJMqLK1wkLfk",
  "key23": "3qVEhbpqCG5ARkLnc5gVuz1dby3QS2Jjh4EDhsSqXykNUpdb54joUjWQdVnxB8262ybuppVFYd3ycRrCUKEBuNFJ",
  "key24": "YHVhs5AcPVj7MyKQLodm4CjDwRgvntTffGfHwVHDv6TGM2kj5MYE9bBRURZZuveUxytF6zkxjqbZEvtt2r3jkfz",
  "key25": "2mB8doXr5hmyp94qjqRhMCeLFo41P4baJwzEufereYg1KDeZBCzXUTQYtkTQC7V2kLWRkSkp6QNBfUPP2gWoq5rN",
  "key26": "UjHoPm2RvvSWu1VH9t5Wbcch8519dtHx8eUrkVDVjjQ92qHrDRvjMYjDacrPFnhXH3QymJnoA3d3YviojWi4SC9",
  "key27": "5B1K1g7Y7u2WvgCAKmUf4vrHF55yGbhcW8FLCr8qxtm4gfySqPCxxUhK6wD6BXMS8eNBA44ZzvCnUytGjS2muw19"
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

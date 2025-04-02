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
    "2pJbAPdVap3y9UMVv31sMCXZCTh7573BwDXSGsFvw5MnKdvqA9dwpBQbACkQWHXC754AkwZyb9Czdz6PURajp52B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abr6eMUoJBnEFYgwweZSBF38mumch9fGDiVnYLCS9ZNFUspWMhPW6QK5UYHNr3ZPe4Y2c6WdfrfrBo51qGfhqnx",
  "key1": "4MXWQMuDYodk7aHvU8MWKV4LyyfqpkCtDb4o9dtPoNLEn6dtdwN2zhsYzwJ1EAmPQdna7Yfjohw6QjyPjUqiknFw",
  "key2": "3kyFmvPe71YJ82euqyr8UBo4Aa7pe5Zag84swAW2DBEEpL5JwYFDLHVU5wGygk5VWif5bez8s9PRuYD5wzcasKQD",
  "key3": "38xwV4PCwLtNDnuq1c7fSrdNjAKwFJzyb7NjwiBcRq7KKBmV9C8giKrPhLLuvvv7E7mExwNf9kmKmMFMa6QrJ36k",
  "key4": "4iqcwEwsgVs6z82NwDLfkpjMY1ePk5GaMZWfcEz1bSdNLSdvvJEdNWwfwDovepdqo6zYqsoNRkjWoUmhgL2vgEwv",
  "key5": "owqcmQkNRFd1zZeCFGBERvTVNBukinjUxPKmgcpkB3sZYTZw1iiANvXiWV2w3adkwW4qijazqKscuFFwYfh8jwV",
  "key6": "4ZPUJTdu9WVo9fW4tFKEic5JT9XXpGpKVLW69FyPBoJPebzbzhV2fiGAuvoe2yN4V99ZpLJqdppWYvVyusZhhKdV",
  "key7": "DcH5nK3deZnkT7SjcUXasGJYDpfMiMvEfjddM7jyHJTLFTF8z9GETzdFcTJxsggSBA7zEvWcJrSzwKUuFSD7ucY",
  "key8": "5jMuYpDoBkNwXMbrjDyCTo2x7bY3BaK8tBXY9e8BkjRcE2kGrExUpupU8euvk1cb4BJ5EwfnJqYNJN6bcaMPQ9Fj",
  "key9": "3V7emYSxk8stZbNsYW6RqBQ6zeT3T33gm8jn63b3BsghkscUmsSXu2j94ofQ8CPJNvrgmSj7JZc16YW3eAs2UNwz",
  "key10": "2Q98EgyzDzKxu5n3cfEstgwa7345VQjXSBYxz9UjyLDWAiHm1PpJxguetqsgUV8wexLjof254YaPg2qjEME6H2WW",
  "key11": "2U68WUWwJzRQPFNZVbfaHQogHDyWGCMRCBF9ivyJgRwCQCZANfgSUUNppzoBtLF7cXrE7Y61ZYj9ZK3ezg8Z6ZVi",
  "key12": "4h9WEoWEoKKNxXeAhi5wCFyYfdR78i9wwtiAExppVfRBqAseMjBsiiR6zDKJWmiiP8hUfJUidDSJv3X1DtnRVP7c",
  "key13": "2d9uAMUn2gSusJjXpbYucQXjHucBkkVMfDKYhws5y5kikXkoPmFUMaN8ehpc6jCNqHFQeNzmpcidcgfSDU2feKer",
  "key14": "38EAYu15RJS2KqE8RCAcHiYbCHy8yvWwawMHVpHcd7zvTDh8RBNWUYkNeGg5mpEsfKv5a1dLMzVdWzUoeEmse7Yn",
  "key15": "4kx1kja2FjSWcZKkbzSFygFVYuji2HoDKXZW2Rctkf5F6yPuxd6FPToNiuB4PfUkXD3UP3tDfjYFcszEqiD2m1ag",
  "key16": "BrVKq2hurV2vRsyQLizuis49TzQwuEsZiuzuLtSX5cew5KosgVTgp6cMu7ziEM6kty3Fyh2zZm1ZtauB8HV2P9d",
  "key17": "aBvfSxSRmTWmcKgbzA1irJoh721FRPEy1kpHUbdR8Yc13e5L11crSX4tzmfpxygoyHyMoBkTmYsFRTbvfngcycW",
  "key18": "36g6tyyaTHeHpu1SVpqfPVodbbLiWeKkuvuwujwEWVbZpKrsn9NCm1LHz7gC7p5fKJA2xwndzCskAiY3jNxNcANV",
  "key19": "4PXoHZzP6X73L9UT6HKPipWNKiwKJo9w4JHhvKNFfMZgPF2r9pXw9aipc8PGnShNahQ2zECBcjPo4jFk6vERhaxq",
  "key20": "4KU1kb7GnCfnjqCqnYq9pyPGB21CCy3VHbE33uopkygM6d8t8brPxYZy1dAyEsCuRbGYpAL5LPqgbD2rviw4kmSo",
  "key21": "3xYsSQWE5w9fCjbfjQgti7qQSth1MP3rxCPzCzVQSYgFpJkQ2d8sxAEdmkBzjKdvRtgG4XR6U9J3vN1KwDe9iZdX",
  "key22": "2FQcWgMqNk1XMLfN4PGpK7bmWKUZL7owGZuN7mAJxtkk1pkJrCe7ub1jRzdkQxkn9d4tunGzmmUwzvUEyRZuNy4f",
  "key23": "2hRWdpdS5uVDoEHSzuN3YSA2J79sv9FXaFnHhxKJPgEBxEaPXTeEjh7hKpT24VqmNsvmcMcnTr4NBNjNGwgNk21r",
  "key24": "3sd52SFk1SYvQPT2cSF8gUYdiRTxmMkgFJqnswxqwqbyTo49v9JL97ibzPsde6L1MHn4Q2C4JXSDLMQuhjGRrJg9",
  "key25": "4CJD2EEndQCp9dqPgkPxtHTnQHkD19wu86ginLLVqh54DrKa1c3u6qkYMJUgKqYbqq6Vtnjd5ZdCN3TNpUtpfFgL",
  "key26": "4aVLQGuc1s69RsbWJijVfYRbWEdvaFobxVr5mcSf7vCD9MRSHo8btG9m1jJgeyM549CQYaEsi64Rb2YovzUR1t4F",
  "key27": "27kxxwRHHqThJir6cV1Z4j1q6XWPoHtkoiNdUZu8icw26HocFQ644v8yN8bKarbRRgX3XmvByPvTnxJeKypkonv9",
  "key28": "txkmVxeAGcvWGo6eykVWmGfNmeh9tEHQdwWF4ATW7bSssXP53kQcwsg4isyp6QWDGgyd2Pcp2wd7secjyRViXzC",
  "key29": "3QNzvnzrRR5Y4cWohAXWSa7oD8FxfBrrnqaQtwjpMWBVDf3hs6Xrc3Rfohd9a21MVEhGQhUrPqq5iyTQP5s8inc3",
  "key30": "5fYwjegzn6nP9XEpyK5MS8mVcfLLxTYQdhTzQEGa3ePW82pirqwCnz9FSE6EyDrm2SBS727Giv9So7UaFuWq9urj",
  "key31": "3SxaS6enj1v2UWDNW9oaugUqYdXxA2PVdJecwwhT6uMvDPU2tvEv2Aw7mJ6sCn9Eo9ovA2Lk1MRhAGxQAXGaGSyz",
  "key32": "h9FchmJNVpcpnUHozjSS2i3vtzRJ48KqynsXAsEnRkmHA2Yt4Wvx8cna8oMSe8hJazPue6ryM7zv4mmqXd16no9",
  "key33": "5KiiXy6oYQqR5mk1DZMBu5gByRwCNo7UHVfwt8TKqSNFX7Ti9PAceuqaB7RS1c2XTJjbzVV8xgmv1XRwsiv6k8t1",
  "key34": "3BYZQ2bu6c6Pg4BorN9sivpbshWk7W51XhN1endeuUJVJH7NZx8qCze68oSisxjVaVRCSC6w4hScZQMKuwWmK4Je",
  "key35": "3z5vftHdor4x8P3LPEwbDWWUeTrvM8rsuQVv6mvXTMmqzYP5jSc745QkrfA54yZsGd8fJCcS6aHwcpjKc17JQXbt",
  "key36": "3f1vrFgNSDfPwrY2zWkbjx46a4oxPcrwtrLgNYEsQixd2QRS84RYnbLL1TVjqBsX27zDGhGgX5Wd3Qcbmec85wQY",
  "key37": "3BW1xrDp16iATT5bjiHqeXzo69QcKmPhL6cwK2mRSSayb3W1CKg1MJS99nAL33VNQ29enECbnorwzpBVM1Tq3g17"
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

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
    "4UmWzVM9kDahcex7k2e29p4koE1fi1ACjtqfzYV2Pyy7TsfamotEZnJ65FHXsADZperYPWdfajpeWhmW94DJyVZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5J78c2udcTqq3KHTe9TbBgnD2V1ePjVBDtt8ZWhB7vgDRwPmSZpnKxJDZaKndSsmJPyJ2h8rMoys7BPiKPhRe6",
  "key1": "3cJ2VnxkEfSupgLyMNeqMnRygbkFu5Enn5ifMYvQZPdFCdUAQd2fjK7FnrXVAmtbfX89Etqe8Bxfwk8Sdw2pFsFp",
  "key2": "5FBRC45bz9yvNWrQDLxT5L9ng7P8pRNnGnDkXGJMWmshCx9mERGC6e5Kg2cXLrDprhqJs4CYeFVfABY6pd5qHuQz",
  "key3": "2So8EvKzCSvs92tqKXhyXPjoouqGtTV27pEGAuK4HVPoJj7d1g56B6zzTRNnujPT5mdyBqMThTppsa9GogKCUUsZ",
  "key4": "4wF3rgtxcckgfVipHsG5VMW2dTT1t3e8scjjJga7zVVbnjaqdZszSRgfDp6UmxUcXcaGz6646TaGs2pdvMN8om7v",
  "key5": "2M73HRQwv6xrybuPWzjYuHFAEWvVNtDA6rZx5wYLMvsDxtU1J5wqW4RvYtyLPmD8GsJ1ZC78gecaHDiRN372jw5m",
  "key6": "khCGnHpMZkQJ5FkdXCsonTiehgUWHLL9KyEhP2e2MfK1Rdja7Cdobh1MquPCuh6Gau1cZqwKhBtwoPE7zvLZKXL",
  "key7": "3TzxGYxWvgthi4fjuWtpPhqwk2BdMSquj54viLa9hS3SqGh1mfzNs4asv5bPLSxQPvrkd9MLr7Awi5qWZ2YdDWZ7",
  "key8": "5A33CCeH1E5Rv1NPTCizjygJajwUj5db1vU2n1kLFyDxxEGJHTZRsWCCvEnFiuEMQZzA6yLC3EfKvP7XBEZGwkkx",
  "key9": "CwLvrXGkuGXKLFLpLaxxUg7nUnuZJFkL9rQDdkMaHC1sRD4i3Uqp4Vp5QgjNSUHLg7brqVwaRQLZ7BzL2hCndVx",
  "key10": "5Ki9uUjZtY7D8etjH6M2fL1QZ9gvS1KjdYnsveyX2HKhj8FjtF51GZkXhaFaQkPrrtxTA2mNxA15hBRyjh9vn3hZ",
  "key11": "34y1hXsbUdr3FXsTDHvJCexCxe5G2PWmBGftihfBpf59NNjrv6LQNoVJchtA3Ao48YnN1rqMKjoCLPjvKANbYRzf",
  "key12": "3qSHyn8T3WWcuSWbeMeSMKLiLSbJEmpPLacGMvEew9p72WNWATbqht2EC1YUyhboAVZEjr7L2TeVMBEuc1KMSpsu",
  "key13": "5SpN5ESvPoUaDQopz83ubeVfnvss7NcBENFHQWrvrXz7fry3f4i9VZbrAwaAMhvs2ynJtZkq2nojDD7f7PmA9Tbo",
  "key14": "5wAK9T43pp5aaK32LqNCuUgCVfiWkwGxw8KKKePzD5C9YKwoREdwFEknSwM4ikXVyZvfLnmdjR6ZmrttpXsQAKN5",
  "key15": "3CRmk4ehkpJmdkCDN6JEy4RNfgD5zS3JKxpVZ6X9tHdr8NR835VvnpQK6Nqxu9LPXSHrTgu9CKT24DYveGnaHAmF",
  "key16": "24LYEM1JySi9cLKUAphdD32iGtwVF5gUNZCaTNjVo78AzWTBYkEm4ocpGAKi3FYPwWzGQFPw4XhDprypXiNL3UNi",
  "key17": "44hteh9L9kQU5UvVuuY5XpS61nD5PS2F49cjZBVa8SJo5e7FDAWXgsxrV6RZ6W9UBLjJEvBPXpWDBsDunPXf3qwj",
  "key18": "dV7D8rDgsF7LRcRC9Spw1uTsTCtLAHdCKmUesGdWKHToe9aNLV3VTJRCYrUdJBazKC4uda1Vq1hVyNiAa2ZD58c",
  "key19": "5RMUonAYWBTybq4QZUssUr27oNBmd5euiboFQqN4qVh7mW552QvYK4rFpzCcqVz6XF7MkcZqJdnSGP5qfvUAAgUj",
  "key20": "5vPCHThV2A9LrHWzK23ZAAkueHSxPTSv7iob6NBQexzDrNRq3sJ25YwN7hR214iuuwraD7poSaw1XWAtxVzjRz2B",
  "key21": "HmoGVGf4gnfLv4Lzf9Frk7BrpxUjLJwFu4VozQvEuirNK2eaFMVnCCj7bQn1ungqUKDVw6MizhChvpz5cN5jZX1",
  "key22": "3Anq1bQb4LqiecwiQonaZtv1m2qmcgyXSWGy8KAnqPYTqPCh3av8RYhf1ezknMWQLgmuLH2yrGY8NGyFGd2zSFZo",
  "key23": "4Da4Z7uxJXVmmRfPv3CFmaTquXVQdhsrdDDmqprUirDnKGDBuCPsNw7uNMBLs4KMYEDcREW1LCguBVTAwFhAyEcH",
  "key24": "67hfeJPTa5jixKoMf5hpjf2yq43FsbMMHiEj4hHnNEK75LZSYAS139FKtXdTaLnuLFdMXqzycd8VrznRoExQbdZN",
  "key25": "4w7ceRaeLCMWrg2uMNuaFXVzGzCYRmBmcT7hnwYV6GoMdzAnEoL9EJWyX52phttaSy9BhU7dbxJobknLKz9Tjyhh"
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

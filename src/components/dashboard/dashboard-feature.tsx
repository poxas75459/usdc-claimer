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
    "67Dtn4jeNkDKqYf9g7yEvuiXaZcWfrLv6L82ASDCN9tkytSDFR8MvuFrbCKSuBa1mjz5kKuS5kiwu8gsCg7t2BuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maZPf2mmdfE3ks2AmV7REEe2vtfycR9UhU6acKuRHwNVwdAApGJtktiH5Qjt4f1apkthWHRK79nfqRBg92BHKTv",
  "key1": "43sa2V3S4E4UiLvo2VQpMhhuJfxCJFBwqmQnS8Td55qR5VrstdXdb2E9iXpRizrdNJPWAzH6gVnYb8sVtFwjFdbc",
  "key2": "5E1PEY1RyPco5qNAG7RzoiZxbKW3oRArDGRm2iG661E8CSe6mdXjaJGCWYbVdVwYgTLDHABRV8utdav7RJkT969e",
  "key3": "5wF4Nf8JSkPSFYMZnVvfg6EhoCB9i8FgmsmCMmUWBArCmBu3L7FMhwdA7zH2uanqvoijTPUExrtJME5nNYzYnf1t",
  "key4": "DqhExdqFz9imwdaWXBRWrMv8jjh5bHj7iA5VX5xK4C3VbKGC22ayg1F4AUai7A1K1UVG7Xp98L7MSxCCvGRJxB7",
  "key5": "4EYCbhDYiWoaNpheedibweDxFaQAvXHpd8rMv1ehvNeEKtH8x3mFe2JGdLJPtWD6Dmye6cf7qmFrPn6DXm7rkDah",
  "key6": "PszV7DrQkzD97aXHrrzbHx4c4nG3vMyXvUzECwJWxWJqkzkoP4876wxuEherYAkyPZqagKMS3h3EScZzGcNxJHN",
  "key7": "59azcHqToewWNyKCTwaFxLksJHEJAqAhgEQgiti1DSAqJLZ1EECch8HNTfCdmJme3bBWk3GjzD5xxfLUNUa8veAz",
  "key8": "61JwZwYtvmcYUT4uhpKs5BkVboUWsGhv2p8Pe2R7hVQXvWnr9U8hZFjsw8bSeQ8vGXhB1ukXAytU6kc1XzTjjusE",
  "key9": "3w2obK3BAL9nVqPrvDbQ2Wo2bFQ4yEN9sdruJrHvEogrbzZZMnUXv7vAkzSk5SSK8itCpAbTvMFNEo7BJCx7JAqN",
  "key10": "oKsnhqjsdXo6uBWd4BkxzxCAshwGQNyddpVDsnuEiaFUnvwqmAdiZ3pqpV1mDp87tmULZM5LDqnqdvLG1dQb7E3",
  "key11": "35XAGB4Lf6wkHHPVjCFPoBMjvEwRMJpoU3Z6uoeYikNT95FdPSVV678gQfnNzFibQBJks52vdFd7Z9zPjq2GFtrX",
  "key12": "5tanEwK9Y4ENyWa66XxNk65bHZM2SrBbG9VczA5sy9qs3XbwDc4rsLk14JwMvpbvPy7LYNFmgdUbLo7mFhka424L",
  "key13": "22MJHNNjtaApdXqZJ2PrEfm1iFM3KSLDd1dDYthZxKvcjbKim8Q72zfJAmZEo7EkqGZzAvZRWeSV5tHSyuxcXMRJ",
  "key14": "2hvpVZdF4QMk1TVETSuWMoPsoCEWNgFnX1QbRF6E1zGjpfiNVq2qVEtRQ4qNZ7VAJQhQrxkZFWajPuHUr83cca3g",
  "key15": "5aYye17cWo3jdmeXrZ5c1oLDnVJBD6CxGJzddkeTikpXmTH1G3VZQnvfWKBD85s55tbMCDsAi5geV4NREGjf1S94",
  "key16": "gmDYthmhup1dgXPBxqrvhwZQsFS86aqs4EYZTsf981oXmZ2YDVUPGYgkfK9sCyXzBYzjnzyWMgh8mR3uqdjX7Yv",
  "key17": "3taHJ8N7EzfAB3FkSrJ8GLgGYSycQFfETvnZrRax6fruPNQcgBgFsK2dSHNiK7pyDqUzx6YmqG7hfdg7Nsp6hNk8",
  "key18": "5b38VdTrYK1PYXTfSLrMLKJkAsjMxE7qPw1QZGVJo2tKcFsRJE9CKqdoGKMArY52dNMWLbHyS1VaS2yf9HgtH7Ew",
  "key19": "3DxNpHgBTTd8qQ7HvjfFJ8FY55sYCc1PG6bmiznXvm1RXBxXoFmqeX9M14dyU6MbefiWKPc2ZJW7644MK78SuLuk",
  "key20": "4Nd1uSKN8YFa5oobSZHjyvraFqyB4tEWnGG3ViziuKkfpmXdFhD8zqRYYkB6GjQa1VqnvQBs6RT6pKqbsucmMUx",
  "key21": "9JbWhdVrp7EMp2zsw8corSSiVJs1HkCst5xudUUXT7751DSzLAZFMyMTcMHFumxZixaT2xm931J2A3ywbtGh9xm",
  "key22": "4H2CjPUpi2Jep7hLe1SZDmrLveu9o8tNYmXH41b7z4AwEAPD9yBhuUpTNFSAmKBUfrQv9VePBbJas8kDnvS3UuwT",
  "key23": "3vcQNTiiyNFqGdBGjj6TFHpNcAzTT655LA3HYVrFqtRQMoxWfVQ1mwefqbhBD7C3LzXa14XETrBqViSBVvA27S5V",
  "key24": "3k3oUwjh6esgdWvneaiawqChYbRzLTPNz4BTPs1BjugSC4ioVrQvnNhAkqCHaMrGkTRuVjEgG2cgwCSdVHVJ1GbH",
  "key25": "5tF2LJ9rqTjaL8AdxUq9DQLHAK4D4Ntp1NGkqbyWqTEuUwDYLFusVMfrm85dtAQUckKunY4aYUHY2KyBDAMrBnjY",
  "key26": "4ADb5yaDEJkhZd3EVV8hkRUXGZYTsgiKkqWxqfTDUiSjF7B2dPShFiuzEKc34aaatFKpmr55Gcc1f2Pa1gfs6tdq",
  "key27": "2hW8bqGQ4DUchmi4Nk5ZFgU6WS61dGrgAP1dfdtmfyhTBQ6Qq9XpKexL9Sp3hGR8BGyTB6DADwbztPyMfqJQesKC",
  "key28": "z1ohZij6u41un2C5eBMJSgVdPzqiSkK1hZeSF591vLq69UkprY7TXyYMWu3QcfCKsYannSSMdyuJ2TkGup9i3kA",
  "key29": "omTbZazUGXwigUvzMdq1JsovuUY9uj1nvgWhfA23JRg2vspM4H6c7C22jyYEQNb2RuPaaVQHv7m6ZdEdVT9PFZs",
  "key30": "5JXyk8do7AAtUrD58XeyXeuPJNwTB9YNHeuFBMQ2wMCJee91Qef7H2fbbz5wQhZZcPx11m3qzY8mzqhxfRZDhZAs",
  "key31": "3qNLRjzMaA92TaZZgshyYSXasrVopi4Y74dLiXJVZCQduxDhgNh1Kt5Rp4geffUJXtZoARmKhYCRg8hsjVckL5gX",
  "key32": "4KWKBq9WujQ9JRLe8TCp6wYbuiDjHcjhtYdFZeVyKfosmqCmicTHRn4YAnKt2eQdvc73MjJvMotPt6iqCrSKUQN1",
  "key33": "3M75269vtnUu1aMqiZUzkUFr5eN8W1XyuQCvq6QTTo4XN4EJdskyJx5nBskPFpgM8dVxHYsVXEfHghpGeGMSjQtr",
  "key34": "5mNp2eCz7E52Wxp9T1HqEQwt4Bg2MCfyfifHajSt7yUQ47kw49jVnDADNuhPWrrFjJxdYUCP1dgqWr2XcwdJArHm",
  "key35": "2nDQFCsyhenh14LxAuGoWzAgUaXtGvMHQgUM4ihR4tVGPy6DPcWmQ7X5DQFXL1PDAaK5cKVC6kVJfo9yqeJMBDVj",
  "key36": "4tU6mT1b1W2BvNyFqPMacuimMvcKSygZMnp28zurZxacESnKYcctBVb2bN13EZvNxufDT4MXZCbdUyHcrNZqdHWm",
  "key37": "413GKrq2RZAk5agyWWb9gempj5VTjRd6SScvSruB3DRNGiD6WtYLP1rWMzwh72aAuuCgqnfeTU4P9fyHocYfyncp",
  "key38": "4m4VB81w3uLJCN7HZkQVqYmSYLWeBRdaQxFzxA2YV8349nNWNsU6hafP15Yc6MeF5KSTgWLru4tPEx6p9DJc4ndm",
  "key39": "4craGphpqyWz2cZ2YpRWBvPYWvCspkomZdNh9HEayDXsDze2SXMtfkKn5Ya2Ugj6UpRV49Dv2tWDWP2uwR7hpAcW",
  "key40": "4DerG7pqpbU7TmYb7iaxMHZbbF183FHPHimDP7ufFidbFF4DyJTmS6RhMfPWJGeEhTkGFokANDULj3QvSu6NwdCF"
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

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
    "24YY8bWLiiU8Lg7piptApr3TvvmR2gfDwSmU2buXomyGtFDTBq997zg32atVdXQAF3qNchCF19b4Uj8igXCDhK1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dka5rkEGu51TG7KSkf6Lywft57NF42nEVuLXRvfQFKYbcA3S72yRmAw1Cf14Az53M8gcXeeVbRTmqVUPAixAYur",
  "key1": "4TwwNTtjPbGCHn5bLkyGnRtdJ1MZtZDJsF2nhX4J6KJJkNZZtNsnkw2iERZ9zRuVLCkzHSvUr1TCPoLirVtB2kUM",
  "key2": "24Q1rYBuxMmhJLGRp7cnZ465BvP7Dxe7Fg5Kj9BYSJeNVjYAEiwBUK2nfCAfByh8tZ3F9e5SikC9ZyHkoBjPcV8e",
  "key3": "5rk4Pq71m5cBYqQqrkY49k3AyHHJvb3vekYtRNG3hfkU769SgkYGjjR1tYHMVr7nyvwXWcoXGdCYzN9E4yJBvEuS",
  "key4": "5T6AkzC3NmMHE177Xo9x4Ks9sbTGHc8aKi6LA9NAYKwU885p6gAYNocTgzvcyqimBTCV5Wizj7qFxVaN6HfChqE4",
  "key5": "57Exf1MyegmSShVbCoTU8Hp3f9N2N44jwBXrEPpn6Qd37vtiKo1pQiXh9gsbeMJT6kqa2X19XRbueRobwhm6tkJw",
  "key6": "vaY7ZVgqzkhHCQhSYpjh8D6PQxvhCwCe6GRUvVJDDQQGwfGJemutT7WkXQw68vTaguK7pX3GN8HfpN5GktHz2mg",
  "key7": "3eG8TGKJCyoMhTihtXsbammMAZ2A5YKnqZucKu7Vc6tQ49Q6mRHDeXerSecTK1f197hkCnTfeDdQnZYCbkBqLaXy",
  "key8": "4Ju5o4s9aoRn75sf1fKZhyeg8tyNWqRA5XhCp2fVqPDSeMZBj2UJFuEo9hCWx7UGRXGxPCbxNh7Rd4xU1ekqrh9Z",
  "key9": "4xk4zP6hB4JtKuYAkRbGyjU7tL26HmwB2BcoU2oQBXhsPUAh6BPYTN3VpWVQqtV1PMjWDLfGqKRAV6UcCo2urw5Z",
  "key10": "2xoffqFDFJdoogEUBQSypLJJYVvdoMeEmpuou7i4i6ZHvXJbaPnWqxjCzSt2vNZ49cQeb5C14igyuDhcquKkXoEz",
  "key11": "2qp63qyndD4iuEK4rHsbBEveoXqbArguHDv9P9R4jJWdvkJvkyHtE2aeriMWVAqpzXEJFkWMiBV1LAUw7cZ23gDs",
  "key12": "4FWhJNce2ACPQXXjawBD5ZnC8GkmugQXXojjNqDSbhyx3ivjodR83M3HyLbA8tGVT8rmCCB4tLfnVUF1AAzb8KY2",
  "key13": "Lh57N2ajpSYnof7QmuYs98c89CS2k1yiuuBRSfhkTsfoNZs5DyfMXPJNvh3XKLGyKsqtvLNjiPm78ycwtvHLmyz",
  "key14": "5tEQDexiXSktUTwDPQwLgsT9PXtQwiYWYL9BqhN2ZEsbmGQeu2JbEL2cFaXhjcHppcZhrb29wG1AEjYD6ab2i9VF",
  "key15": "2yXKgvcaAt6cv16krbRXgCUtjv5tcVuT6rNgfYmGeQVruSr9dCWPh2pA2dx161EjgajCVVyyotShNryGiZ3EbRCe",
  "key16": "hNBvgcHLuUKf6MQ9kQabBnaWCgJ4ut1Xnyjj3MfPp1tpcJpP4DZmDeWCgXTGVVwYUgPQeBMoeWaoehHTjFhsa5p",
  "key17": "5NdikGbQ2fmThuAHvGUM2ia1JqbjRYQKibi8naBCmseuvaFx8o9Wa6KMh8KBp6nESuVPwFJirD5ViohdCpvws6MB",
  "key18": "3oMDxHAxGDoDvTkBVpYwLoiiMwph3XDRgp2BywGKnQq4fADvJnc1wPHneoPEu1PZRwu9QFMDpiC5hoeCmxdb2FzK",
  "key19": "4ivcYfU78GXL6zA6NkxY6a96M7Ns6o7txY3N93FteVrN81DQgc88t67Xph5vBD6jtitRJqm1kTuvhbcGxqZ9p9dh",
  "key20": "tT9p7gnwFRYYunyBNxVKQYR3yvo1sHVdJkfvZgBeEZwLH9sx9Psff5LWHC1P1X9Ap7v5JwdXZY7PQtnyWNdhi5k",
  "key21": "pT6KXys82S5NhSXZXAtXyV6H9jnmtcVa8MqZMHAqbyoNuaXVR7VnpWw5buYPcU9q7NtpbBChd8WMaRhjmMDuY2x",
  "key22": "2fHLVk59MNsfhDrDWSmikNndnEgsa6xgMRkLyi25Ch4BfqtWyZ2vKTsguyZ4J6d8gLJm5KeivDgFFb5wjacVzREc",
  "key23": "2v17puJk2ZEW7mSjgqjXUJxY4Diktn2Y9H6BsPQas3NuW6BUP58XmpiheBKytxyNpSxe5KZrh4nNYTKqN4fwDjYU",
  "key24": "2ger3es9HBp4Wvyj2tH6hsJDTgw6DtNs5C2Gth81j3vXL5md2F2iKNTNmhaHrxz6BZ42ksPVwVyaJyHUy1tiTr6F",
  "key25": "33E3qbiUwYSNeNeC5jDoy5uVKN2soMyCtFEBJBmE8cLCekgMZwad8pdtGtSR1QfBLWk9Kmz4H5Q87mvzYu75hG9K",
  "key26": "4WcQemeZpD7MrwcgNcezeNUezzJPfz1fSSh9xT9rLFbsqxGiq7GktgFeG8mpykcftwoJiiNe2ynvKxjW3oQDkd65",
  "key27": "4nAfe8i3zNiJ8hSSgvJ7KHtUAip4bT6UCrynNT36Vj1Jjg4kWBBvFWeFMsV3NzoMJAxhKPormEUzqfdyJLwEskAv",
  "key28": "2BJerfGEqfqGfam7uDNUv4EofR2TSXQc8T2fnvgFyaHeTAHu4n3VYK3CLRqX266yHff9kevv9Ee2CFSAhQbcWCfi",
  "key29": "2HmYhr3ZmAHEgGJqPpoxDL1NZs4DWwsfwaxWMe5MytQJtJobbnc7Fjna8vQ6guUMFNEdEE1vNxT4SeGzN5UZgf9s",
  "key30": "125DVG9P4HX6eeS1sNUxu9CFUTreuELzhgR6L3gGj1ekCMA7BN77xpb6SCjHuHu7DEXgtXezWkjC7McFWgiDKGmw",
  "key31": "38pWv5qSiQUVtBrJVAnvR83YG3r8sHiALTgSpN5jvgBknopkMdL5VDRtcybS6bRnr4kQGrwajPkPtWrnTqjtH3Wo",
  "key32": "rkWDD1AMEgfoaT56vJm735qhBGSz3WJvvix9EQRzKhkcmYexLvSTnSaXd4e15hKcYovDFXCV4XJToyFAfyDKaYd",
  "key33": "M7fxQ7pvS7Hvbk8edwoMPFWJSxbcaru2SVBX5Kka9fnTVYNRzytCgtw9zSXZzMKu96BHv7xPaWGDTNevTfJYCmz",
  "key34": "2yxQjU2Xw7jrmH7JK4irHisxcg7prMzE1RHgsYfWp66kvF9Ee3MQn8nc9z4rc1AzZmPfq49azCh8txDqDzFwq6aG",
  "key35": "3Wn8mSCvZEi8j6YSTbbVP8p5tbU7VzcXo8FmHXvy3utSPzWdyvYJHwhDEpzamAjeJrZj8wd1aAqeH6VaSkY6j3ET",
  "key36": "2jCBArv8VCscQ9kgVFVqjvZ8HiKFG8phRNgbNYyD2Ah4EX6wNj3pSdkmR8bbHxHZ3ZKiCZXG6eaUbJDGwS8kqcAc",
  "key37": "2Sdzn6vqVDXPdNoZeaT8GmzBBwbDhKa9gZc4Z9GYFtRVT3epVYHA3xqWQSUj9XUjY7mvNXYUzh7JRWEimxGhLga7",
  "key38": "5KVJGbSVoEitoKjbRS17WTgnQEvZZzJbMKMUqcLRrjkA5uNyCmVBgTBaJSP9XcdPDXwNJ7KWV7RwBo4jeRZ4bwF3",
  "key39": "4azKHA2JvSiQVw4DWJARgGuvgQ8yBjVvUb6EQqAzVWTAvLJY74Ltto2UEbouUAFBvshpjNndPyyQH8Trsfpiu3ZC",
  "key40": "43UEDQH3CCR4LWFoatDFTuTuyTrVF3t1jUSkzz3izbW6SfhcgWVq2aA3D9WVx83g1dNZcrRXLQzaog2KcZncXd7J",
  "key41": "5c6hMBWYNSJVvmCd3Tb8sWTGeoKzGA7MapoLnKRoh7rYyYBvoaBU4ncRwLKqyUTSYVkzuWv8nyusUpRgYyEmqPWM",
  "key42": "4qF1qbiGtuSwyQsQG1L1sux6tZopgATygpYTEzgrFCSdT4oPzCXXVbbwR81idiQkPjy3W7FPEeSzvyDkpcHRHv3g",
  "key43": "498kwxv3tyPbXK2SXP4V4h7gq71evgqrcWedsE8P7eDjFhxT94XgYXddBWWdU24wy7hKS483omWFoBMqG7Ls6zMY",
  "key44": "2QNiAG2FdiufxnuyJivaUBhz3tKuo9faStevrpaUhUD7dNqH5gruzG8DrF4P3iCdrqyRMSHXNHu9HkW28h2w4SvN",
  "key45": "413gbbDbQ9Mzf3vVZzbDDsa4HMyi5pXibShp5Ea2dMtftcFeEUkqdzmp5ejJFt9YeaFdwsGXDqfW48DFzwsRBdM4"
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

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
    "m7bu3eyKHLFwU8ipFuv1izAnHMvJMbeRN2sRHnhbL5RsSTDVe3C5T51KwKHN16cUqDUoJueT5wgKEekTKmeWxzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7zPuhS3tcaFcfoBhLrVEwFdCJeNS3B3UZHEPJEJVvEBRXCMFK3X5K7gsBXDLbHyZT8tEHau36Jiof1NX5KBxX3",
  "key1": "3i82bG7rMCHE8XPzRpms6pf7Y9ajFXHxfJgfUFrQJiNyYUgmuTVRtkvrzF9qE9kUEdfP2WMd7H3tEMzTm2yVhDYY",
  "key2": "5YUgSJZcjhbH5sbfqmYPhUTxJLDHDxppS22cUzSyFkgcgUGpxmt4jfPTfo6oaunEu2G97HqQVGYAy9Hy2g7eaxxb",
  "key3": "3dXCsfNX7nezAWGhKNk5mBgdxjzjTBadbaFF5CHh7L2iKKrRfswEvH9rtu2SpvDZdYcQsznyN6ZnYiP1mKwVnwEZ",
  "key4": "rYyP7F4ka7Qewhf5FjnHxrKr9CDLFBoYWjcsMmFJNy8mNdjRv6nFSghUZeabVPgj7nJaVArxsZfyQeNtDYBKH5n",
  "key5": "4VRVch7GCKpjDK81PWf7DGjvqKb4XFV5Pkne9XguvizZSgv8R7iNfwnjeBFYiSXisupqJN4WVCNdJvBKcKZozrDc",
  "key6": "jq831qzjEEKV1gt3iNRJJGouxi76fNHrhX19MHNoCqRExtgHkHDCbhzq2EvmgYxfBf8b3TUQtC1ntWJLp6WfUrg",
  "key7": "MkSAwRczW3vusAmFPzdZ8kCSzUtJnN6RsuiQk86gPFr6CvZrZyTNhv8wgdYCk2gvCdbEWY55k4NRSupTYwmVi52",
  "key8": "31X9MhXuGCYNoe7oZ5yQGNrfwsXVbZMxGFkNM38fUUepJpqe8afHYGVWPBet8BNagtzZTuYrE89Fh2575pcEAVoK",
  "key9": "32bFFf32hTY5RMp8TWEp6ven4Gs71FXBUgopoZJmF6xQ1vpHuFdgMDYQ4uFViyGyjDzs7HJxKV86GSSiSzL4Wva5",
  "key10": "hLdfQJT6Hxc4YupfVqHVhzGPmbsDUJ6tDNqU6jPx4yc95vC7pZntzoxAKJNNww6iUtizficrw3aHfyfv8BwbYiN",
  "key11": "3XoynQaYoyWQJd8PBmJyo5a1oU5WrwCiQ2PNQ95KsZGnQYBg3cpCCDQzJ5j1RRZr5Kn9PGf4r68XiLpUZdEk2eNu",
  "key12": "5Doi6fqS7MKhoVMSJJrD2hxSsQAeLT5xm4B9AaVmV7FJQxjU2v8tbMfpqq3Jw8U4gD4TR8hyMmniSTNtJ4H2hatn",
  "key13": "5SVFhxv6dho4Pf1169FyAPB5fsCktCsqJWqmvs8YESkb6aPPAxoxi6ahyGqm9NW8hYrM8XqAotcx3fmSXYpzTT6D",
  "key14": "4xh1xxAt629pSk4zzHz6v1TwjoxjLG8LS1wJopDB7MVE7hL6bGKPAw6EiwuTsRMcpJd7UBJpH4UG7SXbKzm4yTiY",
  "key15": "4zxKocYFiGVnuAQ92f6GF2t9ktv4zpz2ZUExBK1Bo9RBKqcahbwLSRDQkuiXoebM46U4p9XtuzCgEdpJrpSHg6a1",
  "key16": "4Fd8GJBxHJ5S8imDJd8c9QqP3Zz7fUJmp5Y8v1g8bDRCuWrSU9KbbTXzaubdCadHbRaMtfMw3Fp9HSDGzQvEBk6c",
  "key17": "jK2Ts77eHrPzqEF7X9iTxJdpTgsVyC61c7wci85dBj4ocXbKDiog2H22AGB9Q5PERHmfSiF2YhbhraUtcLbjnT6",
  "key18": "2dSDb4YwmCDFem9Phjoik2Uok2brjMY977NjDbNYzeW8KThkKsp8ujSmP9CYhgenUzVZSd98KtMDnPAdNj7Hnuv",
  "key19": "4swWnVxHnwJRaoFX9HEt1TiWzias9i4mZtTpoTB9rgxbGsDcFsEeRjERhoQTFqhFUV14PFiW6JmQWf29qJdjTAio",
  "key20": "61xmTKtMxmKTLd6SyHN2hpYyXCdjvpns1edJ8i3VJNUbKZXNcQi5gZw24Rs1BSEEd998XjdvvDmdCaeiD5CMVyEj",
  "key21": "5pNHRj7o4nxJpuVDmwjMfcQE5JG6BfxBmLGqxu3NYQ6LudwbuwvFVd2eNPfCFV9Y2kEaoMnSEhxXHp3j5Jz8LWDE",
  "key22": "5PiQP5AK2CQ4avZwYJzuEGCAmPBeTM84aXLUwCemSeSsNpWknUeGpEyrvDUX45j9Q4cTeHqtpRNKezfcVbVRt7PS",
  "key23": "4ukjuKvtDbzg93Y4F5TzYQ7fbxJsJpGHLPF1osjDQujzbBkWR3y8fqvjHAH1G9GgAoSQmF4vq1DdgiMAFi4eNyZ9",
  "key24": "59ka1JdHQp5X5vZ4q7uBCSw3h2rmcD6gqN4KDxELSjgsqMnNap1JCTkjmPuxMJVXUYyMfTTzh54r4MMDcke2kj5",
  "key25": "48txbCLVGqyxAYisbkmMH7F8rXuChNjq8Q5gvrLPuVMgJnyTbvAo8kWUdKWA4VJM29QARmCf4MQu1qKp1D1PEbdv",
  "key26": "s4PN4iNn8PXTPpSFhtq9XGpAQGNB45ySAkmvkSgJgcCwmGGVW1CnHBVA8ro6VWGHKX4vxjPohS8gdm51DwNPTuB",
  "key27": "2pr9revUeZjGZQ7zfqLHjzDgaZKQMdQ9gDQRgbmEaV5xr673BgMjPYWLPBR15Dkytkq5v66Z6sayn8RiBZU5i4s6",
  "key28": "Ksvk2Qt1X5U9fp2zM6FwPFxX5hgtKsuV69vwxv7KsKwd8epwiZsMzwPbw4j2XADbXNVVjASvGDfGyAHDWp5Mok1",
  "key29": "u6frZ77zvRYGEXsU3Yh2eiq6vv57xR7AqKEq2ZNem2N4iirN1AVAR1BtSptqgVqXQ4cajaXrqDsxG9f13KdD4LX",
  "key30": "29ywiJRndZFFb7D33DhRJ9Mmf7Tnj1UxktnKqE7cAVqXHWkdHqgcHfRyMeZoDZG3LEWiNBxjwML8mN9ayNcpyhCk",
  "key31": "3ukj9KE9gsJxEmGgTiWfwSRq9CxXLnLhCrx2aeVGzQDNKyVvmACxsGATxCh3pnUM6YDqWQD4KfhW5hkbayvFAcHm",
  "key32": "32wbAWu4zzV5QGk52rKDuruA6p5kzxkdKP1PPkMcMSRpeEoQ4Mb11kaUuu11bYNTHwU386Mj8j7yHV4PXSkn3BEm",
  "key33": "2AGh7Un95tHCaim3oV6HqPrQ3pnWAVcfr7ub2S5551p9LQtq3RQc2TBPd1Lv8whgEP3KCWDQWrbdkam3KEXecWnr",
  "key34": "7i1EsMTLuovqyTLBBGEPFiSQwwRN9SNQRDc5hZ5zP3j7SZvMR8JUNwEmdUT1yAZ8AmbnQ7au4tGdQTEfS5PAjjm",
  "key35": "4MHhHE1GYRroqWZnxTnxxeXykTNqTs5PFUjSwUM2QUVyM1EwfF9ofyAurd7Zr2mwCVupsRPpUV4XpTUGDpr6ufgX",
  "key36": "4Eg2ELZNXNQLm9YHrrn513goCSSX8nwURt9QornKX2BebSWnUXDevVXsCAq2zCZWQcT9ir8aDME1xoUCUJZn86RV",
  "key37": "4fdrhZKFx9y38YynVBckCRd3ZAAFKdSi93dQzPKSMQhUF43HifKYv5URwTFA1sfpRpzsZwD46MWMobj4X8sdFCzY",
  "key38": "7xWsKZ8Z1E5jd48HQLeg9wPvGDWkbkQdVRy5SuGEcFPuKUvUKK5A3EXDTnTTo7sGxFsqH8ENBrMCfWoyXdTK4iP",
  "key39": "ZaAW84QgmW3q8CLtFgfQogm6Bf2MZGAf2jYcDZxAGcZJ13E2vBwgQp1wojwQi2f3iPeMBTNPTEuZ7M6t7DGvFFh",
  "key40": "5XndzRVnNfpCgJ3PXYMYmSLevHpQwtfyJ3udWfYiSAVXaGkQ1Ftja9LxoakpShwmvgeH4p52dBREBanFhcZQYd7S",
  "key41": "3izbpA62YBNd8TAJYf7ZZqreLYXNHSZyYvxN3fTMYYd9JvAbawAmup6HqToYubi43KcAkCqouJvuEiQoT92cgMRU"
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

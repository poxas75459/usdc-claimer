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
    "pbdWAFSZoKyhjx7BVdGWpD5wBRHoJ5uRYsPs7d7Edd6vcu3vejDVpfCc28nSNiJSe22S6FFHpfBHoVjZdWfFifY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rg6W81WfhZ2WocGXEPRnW9cGNhM1jQmSx7YsBhaD5LCS2B1rAhJoFrqQ6MvPiFBiNcHe2kNBDrs4cYjQtAm2qkU",
  "key1": "3NqbJPQQ53yLHoRT5KTg16wQnZtN5D53JCx9h7yUjT74cyw1vZNGhqZyMQdwK3RgMSjmsqc1VvzkvNEfkd3SjGBE",
  "key2": "2cXNh486X5tHZR4BqfdKNKLJxvrFyY3cxMrFkiND82p7EHBF5JtFhranDDgCqguhwxs1EYSpYraxek5sfDbE3Fp2",
  "key3": "3d2n9VtBF6kfvuhMgS7L66s6gCZruQXtPfz6PRJnedhFny4qBTsg4BFzb85LYMRmKktUAUVhRTbKxBc7WjXD8Ako",
  "key4": "64GcMwGTLv9xGGDYBDaw1JtdMYqbTHMvbDpXYZraSi9Ead4RGyq3RWGWEtgm52GgzHxwmnvaFGxkiTgbdRWq6GFr",
  "key5": "4qTxZGgcVbioQTRGfvHiEqUp8K2srQ4GFwayGJ6zT91FgxZvpMk3F2rBrK8uBVfCyhAMbSnfAdDwbz23cd2PZuQ6",
  "key6": "QVpHykQENJDxjDjxVcmA3cgY4n1LEqTqk5ku8cXqqNL18txvJDPvYUFQnemdAw2DfqQ83i7FPe9RbbYSEmTwAAQ",
  "key7": "34u5Qzu1RjKxjEj2m1gYnikJWk1RF2mUZnN5emsby3ReqFbNGZtMgrjmL2fVo3vEtGNtBtJ7pxbc2JJZj7TeBzru",
  "key8": "2xiWYNN7WgGBtxwvtUoWa89a7A8fEhELRcVmKajSf6sBsUM9jJPvuf3jXhVpJZqtp11r161jFqBy5xjFW625wyiP",
  "key9": "zv5Xu7jnN2tcGZAxxjp5ZcUUFaQ7BWpwqTBK1tR4hokEKU1UUMe46CXKL2bisYmpZPYkvzJwKD8XnYrBsZnve2o",
  "key10": "9fJ99DXeq7SUMo3Q1SKF93Rbiee7fj41znA35asvQNWFrQWuLpRNegB2AudtoX5qsNWkDsqfemWkcBKD1Q6SvvC",
  "key11": "2uVaJpfd4ThtfYzu6udydqWRTSbtZe4ZVD5xYNP8n3putnxkFuprW5ZPG7zGaGuKCxujErR3Y52ry5jAgNp4Vq3Q",
  "key12": "3x1j5rkYFyboyGvgtmh7pNs1fm8j1u6jMmNDmY3hmaJTs8kUPVaviDW7Fb4DeTp7M9LgjQd2cDLz2VyXrEBosNme",
  "key13": "2yni1mHUCapdL3KkPzK3mEWtvEybic8ZEJf7CQaqLU3Fcy2CxT4oEvzf57EZ7hAeP3xV5UJT1eixurpuiamJ6zXu",
  "key14": "czZmzC9gU91qd9Ei3vToB53zaxKMPiQWJL27QUzgmv9wDg5aq9iPpo1Q9e5KXZyQtHHBvNtPrBjSUV6NMUXeXK5",
  "key15": "hQ8aGQL5jVHbTDyz6xqV1BKTde1wm5CR1jQKsqH4ypJBSUZvfyodUx9DuZKgeUsEnsqT8jYF1Ugzep37df1h8Ny",
  "key16": "5K2XNwWmemCBrudeHSvR4A2tmHk2A3FE6dACaByAUWTEoFEezBodn2Bzt5enH71JbboZTYrPBv93f4Appmg3r5T",
  "key17": "4vGkKJJnMXGrNxEBA9upqicy2u8inWHReZrhKimpBLEg6Qew7u6uD6nmUNcDNygBdyQPCvZqPw2PiyfetePAeDyy",
  "key18": "3BjLEETLHoXCCHUPkNniZNukpGwJuiAPtWvSqSnGae9JTMjpY33WkNESTNBcAjr9NiXnQxRP3RGC8buKYvHXCytP",
  "key19": "1YDqmbrqUkPw6aK5s3eVRAzRaRai6hh7ntkFTPMjMh9ewFTSDQosj89oERkBDq7St6CwHhSzYqi7wBA6J6WCqJF",
  "key20": "4d5tNmKnn2HbPS1AK2GUC8jtR2RAfyJ8i5xebA3oktsPJEpVmJ3zWHJ43tKbUZDuCKYQvi2WomW1XG2XiZz2xdXH",
  "key21": "3fd3Qb43Js3gB6TFzX7aAGrL14xEdydCvW7hyy54udQwthJPYcGxUMG5GqrDjqhE7GobohGH4wQCiKj458omaNqP",
  "key22": "CGsHxjG94UN5rS3vfDQhS519jCVaHMmbTmKRMiHWmzKHpB94imBnsb8XfdriCHzKFXtdskUGhusH9eP2BQdYXNi",
  "key23": "2PHZcXg5Tsqwt3CdVVyvhXvc8D3jX2Yj5Ri8m8TnCd5NxzW5npCHDeLwhbrXLn3kvTLFEHxppano6VHgE2C5mzKv",
  "key24": "5zMqrEd4Qt85ht3hLboUDbjPTKuxRd6TaSE4EZAVVxYChzwdufaafFJRw8H2jT3tAmCSmLEaCrtWyzNPP2QuAwSw",
  "key25": "2sNKK2cikdc9g2hGH8mz4xa5LFc4orT9WLArSoHtvATkiVSRj1UkVE5K2vZiEVGQBNFLxv79yLLLEfmuQaU4na39",
  "key26": "2ZBxLTWnHnxRS1anQh7RrXxTaHN6aoGV2GPopxYErpmiBrdr9x31QiBKKYrQn5XgfkL2FQuGY6eBnYvcvS4EtD6e",
  "key27": "5CuLFJKcWo7DGSBMQ4XwgfJi6v3pjEF7K4buM3g1hNfuG1v1QTv9XcZG1mF8pbnCvZnaBZuSi2fDvie7ep3mn52U",
  "key28": "4ABavT9tPFYh4DkUfmNLW59biheHQo1KSiyBU1jFxjHVHFtErbzWAGK5sb6Kh7Sh7emHChBP65mpYc3jV78dvJnt",
  "key29": "3gfSNnHgXef3QBVqjtVxEPGVermf3JRLrvDcJgVEUAQ97nhxUJ8zRAj5achEGW2bSv8uqpQgTUAGWio4MZxYPr4s",
  "key30": "uuNwwbAg7px66U6Lq2FNHZ23FMNBRooHvWR79oKr4kLitSHFrK2KdcVt4RhJ8ZipqLZyGX3tJxnE6rdufiBnKgT",
  "key31": "2rCyQUuYncy4CPbqxYvhQe9Y1NpKioQiBXhevHdzuTCgrwGHXXgMuyxr9dDxqpmYNA1r8kqEJt7NzSwxakgkrh4q",
  "key32": "cCHSJPmyFLMY8WQuQK1v3ZEgVvLLYS7U7Hg6fCRuMJRGGMhp7cQY784B9FtWfhzWZLM9ju8CLVPwhT79eJwFadD",
  "key33": "2Uc5N4JZ8KWc8GbPMW3QFgtBSAbwGzMnZxU2HJX93vtZ7f8q9HKniMfFBUdFhQiM5yp1Gj9DpJrUGj6wLdfm9Y5F",
  "key34": "iPrviqnPfsNU4NSyHRvanRuXvzqMWH8tEuhMoqFeGMPXMYrFwB9m4RT2RvJTPS1tHwsKJCsCVcHEVVJwkHTGzHu"
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

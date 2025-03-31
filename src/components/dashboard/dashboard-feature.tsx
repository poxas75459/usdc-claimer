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
    "igWeZqX12dx7TtND9ztwr3L37NVJNKy7jahqrjRk1GAex97rLLfFs5Krg869B2gijDtt8L6HqXK5Baxp5tZRVFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eYcorjd9f6uofSQAMiMgsoMqhkeM7Wj6FQMEEyFmBUTk5aYmcgs5Zs3BRrCgqM1DvqbLifVVLFQCNZ3WHex7K8c",
  "key1": "4jSNNKJDn4cdptEAKUPJBCAp2NYtyGci882RHG4woikq8Ncu1d8uFbiPiy8E86VDhpnb1NPUCvd8kyDFjExcwqPR",
  "key2": "8U5hjvu5HFVX26CVWkEN7XFqAnQzqUSMFYVwVQStgfeECr6C7nn7SYD8YnJtxXKRGLe6AqFXhrCR4fr636FyDGE",
  "key3": "5pmWWwe2pU221WkiRNXjLZdb3iGyY7S8mhUajpY9VreMMmifHpodXd7juyptSjaCXZ5dxda6U6egCZmUM7jVF3c9",
  "key4": "373VtN3AcuwMfb8QacGoH5jyGeibXeC4SiUimv15QhxEcEcRvkhHtFHSpDaVvZADqoNaRj3w85E7GnxX5LHLXRE9",
  "key5": "4wBkmMszrvnMhtz194gv3i4izbRX7ZS4yLQfPbTMNio2EHZqeGDpbkSNvd71nGTxMdVhHxtV7aM3pL3Bj3DRybHe",
  "key6": "3dgXFMnrSNojwvLLBfqg3xkb1PrmGLTGZXReBBWFjpiUbQUqg7Z47JuoARTDm7phu87v6r46UpFZtQKjmCNH4NUT",
  "key7": "4YxfkhEGoNVYhMdPAxvGj4HgXBJfVhi3vZFFaDCNvr95Wnti6pS9L8UEPFCrjGk153pxrXcokvzuyAk264haeHhC",
  "key8": "4jCf3dD2mKHKH4fRYeUUGdj4VuPymX3MAcksdA4M8zPgk2mHkMWR6QyH9Jy1wZEzjbJdUQ9NH2GkxMf7KmjxFfzK",
  "key9": "5HrgqbaqF5TWTpWmWNLuT1AjuorF85AtSQZwBepG8VtWR3Trmj7CnWKm83MRYtv8KghubcGaSrd7QuaV7QMoMPsu",
  "key10": "PiLodLEJ5n7KbjDTwkMd5wpi4kxEvD841A7Nup433KZjS8wZ2YMH6SbgbBqLqo1DKtcZBQ4YDYbj6wbBRG22GPA",
  "key11": "4JTMRPCAkFRPVwduD5xCaKtEztL6BtSbRxdJoNLW3w4az6iKMRg5ZMit6EWDpxxvKPDCGLAcETs5X3ygXkvxJyTW",
  "key12": "PC9HortK9enqvnnpsW72YHZt5ZkKsg4aMurdLiiQtWXNgZhdic393tNSS9pauUBZrb3tWZbpnMUP2tTkwpGzXfa",
  "key13": "53k4TkBsF9CV15g3CaDeoCGsLD8fC6N3hgoytUzvW7uTLmXxqyaWVKbF3h5jYc9zyQmQT21VbdPh5BEKxoC47K7J",
  "key14": "5aWYXNB96Wo2dPwFFbRMjNV8YJPPHZDCYaokntJi5mAMgCERkXg7fK7jwggwqdqkunnPLk3hCpZjzMU3Dwu7EpJy",
  "key15": "4nAbwniK6Ko6tBm5ijRy3mLN9CsYtEzaVTnnYZd2rxgo8ZPHesvq5fVAYfgLuFgWSdjC7KZa9V1Ww4H18zJxaXJN",
  "key16": "cnNdsFcfsvWA2NtQ16cF8rx6dfksqxvu85psGKZ8hzJ9DLtaGVkPB49EytGWrHvET9d5Lgbiuk2XFToxS81g6jM",
  "key17": "2Dj4vyY54oDcAZbnXdAFtbRPYXtJzQA4QL7pL1afzXs9aRW2vgFND9oZJExMQ8ANUJ7rFKsCKh6cH1Ak6Jztdjb8",
  "key18": "62HMKbUJpBkECjsPmWijUzZGYLD7aS4fYKN4Ax4sPD354notanEx1dXtqtQUjTskDC7pQwwFZN4EDYveLBLNHfKF",
  "key19": "4R1Zr382NpANxeDoXHi5smZmXp11t1fLRQufxh8EKBDRzeFDu1khvLquvaNVNYgfNaY1dWSX4xDhnjzzHQwctKTy",
  "key20": "531wSzdomFJjDsSYFZyy7ay6MsmyELvMpW8RaFSgh2Yw1QHnzAmrtBBQodx66XKj69der7QnqkSeo2aN1f2yRHg1",
  "key21": "5fowLSB1Yufqti8M9oVYiexaBHfeShQ6t6AU4qxczRTVqUuUdTwnJG1GCvqx7LRFoL7k2kgGvgCWWSGA3e4gGX2b",
  "key22": "BVcRGqpJSsHLB2eczTuDoXVmZEriiTf5DjMeEhXqwRmKBm2ZBojDiX7uMRZceKuExDrktC1Mhecr54vKXvZXVXm",
  "key23": "48TTWVDJTCcddWbRNexj2cfgfAv3MC1DYhpesXxr7zNR42zzJWDtw73jhdRoz9jFL3gwLbiLbyr45KyhVb7WvYG1",
  "key24": "5i1GX5DWtAphKmJGY86Kdc5unM4cRAbJGtWwbG2CJ1iuZtqbM3bdaQreiiBDdDFKfMmC3GUvyS9AKsBmcu3sbnqB",
  "key25": "2m4anWmuBmfZ344KYB7QgA7cwoGUivFz87rT3zZXZXb2TB3BYSCV47Y1zLkZxGAFWVEC854vn21JAkfn5EAEJxzW",
  "key26": "BkghzBJAVA749xQKuk9KX45hDwWt4Jm5i37mxBY9ygrfWVVDWUwCMsYYgQWoxS8PTPeTYegzbasFLG1YvFhyETV",
  "key27": "4Zfc3Sf2sZheQ7m1hMkKas393KaS9R9GMawUiWbKcBt8xz71E9EH8NhKbS85QGRPM8UMak7BeJpG4KwUYDrhfTpD",
  "key28": "42njvA6cZZ4WPH99PxM9vsnrb4YFkpev8hQL2BCyhgAx7c2GcvmEZCByc9QWW1vJo1tXdBDkFYjEfrs1UgfmStJB",
  "key29": "2JTgyhrJdX7r92g2gPD8S2fRj2h2Q9ACPR6HvJzKunBbJ9z5LTVwvcunpSHGEyxuGZ76b352cfeP6ofYi8UvgZwZ",
  "key30": "4p9ntnS1VvKvaJDUadc3ogzULqA45TSBDr3y3c5nTAPbW2VjwGrucXwEsvwcFCM1aLuhdSNzWqjB3xWFe5Fb2MqK",
  "key31": "4rJjPKNTrmQEpxgZETWqYQvGSoo6BiYW7nUBHpcVRFJ1HR93pT6uEEUZ18RxDHHBkyZHX7WcAvFgWuBkLQARQAbN",
  "key32": "3VmSFQoWX8Jz2LqUwKrbKnRn56AZfXSLvhdSfeY6Am9EeeMPEAAdqgJgWzTdwCQM9nxqC9fBWEur8aGuqfNkHbQq",
  "key33": "3GwUnMs69PDDZHrWfJ8aKvAKMEn3Sq5yryQefXWLTfq5r8TnFxVNzUywhZzLrvDnqcZriEyTsdiHJcE63f4eqC9u",
  "key34": "2gXscbuPYhySgRn87a3aT527T2SiwxLsnBPLeiWcbTjXXy9VU3N6764KwLJL4f5kfhdqxK2yrSpUSVCkYj4hgLXF",
  "key35": "2N7MjcYNzWNKJwzYn8R4UxBa78KXHjbSxjArNHwTL7mRawekwn5EZG8P1NHihtXWsUBxYJUzQU2KVXUgCWqmPPse",
  "key36": "yDTE9c5sby6AXgYQLV1mpAt6TqpJMZdKXSpbXU1u1CfKyzEvULzTyo3hUYfUwGNNNJoNq7nqjmrw8KFoR3vstXS",
  "key37": "3pRQencWhaHonzqNvh1PKB6Zia53fW84kxbg7HaVDyFzuFqA6446t2SqTbzvQ4q55kcnieP3AMiddWQvJWwFAYiJ",
  "key38": "2nhpt228aZeqxuXxysUoNc2pZukneeFjkiC45hjzLXXPmA1qUTWSTrMZKLWBpbv6FMa7QFn9SsXbzAAnimrnk1yp",
  "key39": "4jsULL4nTBwxQqYPD5PbwrtS7YxJZJ9dezZxZDXgAVBBUbzgaLcwVs1hJ5c6TpdM5mYeFtdhNtwMA8RWqeFum597",
  "key40": "dEM4bkbez9JSo1xJTpXnsKH97NEG4bE5aLAEodN9wjy9vpbGJC8vJeqwvuqZxF9AAjHJSpxCXt9h33fmqjLPYJc",
  "key41": "3wVTBoi1S58uX2n1v6jzeGu3FqX6jgJJstMhb8wdxnGuy4HKmXGgTKEjkhr7VW3sYD2wY27aUGhM8AwQMXxaNj7r",
  "key42": "5rodRbxykLTAhqYnrDQ3RE4KzAJFkJHYAu6GmEzShW5MWRuuzTAf5PYP13DJfpv6PsNfDsCwnMjzw685SUMBaTQ7",
  "key43": "3MdMmfwfJ7MwUQkXFZKZAChuwk612dhFaF4FRaBvQtmmRtaGJUq37RPyaEBea7pjnrw7bBDWb7uXr8RjiGiB93oK",
  "key44": "4tcXtrYxmC2DtWVJdQpFrSrgQcGPYXFW3dM7CsM9xzgJCXEhF1GG6ZXBapXzm1V9mHBUYx5QhCK4k6XMU1yKP4Yq",
  "key45": "5NmhtUGquWAzcED7mAsUCvb6Bk6fc5CoCCizE1xmLoagnj2tRsCkB7HiQ4J7Hgq4MEjya5oPE91AehzzFD4K8ULW",
  "key46": "5DKDTEFngT5uDAxodU1HF5mA2LxSYg7FvDYzWn7ctaWCXPpE7VTT9fnxHGKhjs6Bxgv5GXfK5Pf1EHCHcgoR8eV8"
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

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
    "2iVNesRnWRQXEhNWLSbmjrw1ac3L5j2a9DfF38ZJTb5N39k3wotT7txbqRLo2Xbp7WqL2xMUpTH3oH5y4bs7gAFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P83Qn2PSK2Z9UbY3VhwR7K1WHvrXR7jMVnNhntN9QQ157DxQBpMQ53AmtttSztbUqCrM4h8mCpNxYdC6XLvzuKp",
  "key1": "5jdsMGX78viG9E6o9HzrjqTaBsAwf59MPXx4SqmWJ3eVigPYqPX4kg4MPra3tfWxjiXRqBiz4mCgzowikMdGwNwD",
  "key2": "jbLYPtWHw8cHWwGzJWmoKVyg6tv1ncyRSXiGoYVQARVA7eKTJymsqwmZ4g2zcYRtu7Nam8etBwR2S5LPjSxZ8Z6",
  "key3": "4hNfwfzkJBvEK9r6qn4YFdh9yySkBTwXScULUiFSqWVR6ynoKZgC7d9RUKuvkzREaQSqaxoQm4FeTUmzajP3FSNx",
  "key4": "u5WJ3Y2AQLLXQ3vMoJRZJX43JdAyYxs6iCgP6YxT267xHhVMCGdCixDUAjdnrT2La7TwW85BjbrHA8ueCz4m9Ao",
  "key5": "3XXLsEGjHU8q3yFDpcjKASaQiESM5W912uai848yyLg6KXYUcj7VPZdtBjVaTDHsJdYBR2LQH2QNA68oyTaeWLeP",
  "key6": "y8sN7pj8W33FZWFipdb7auiNMCEGgMXXr3pnB3zdHiqPCePQxiaxCXVeRXnrRD3Yrx7Rtvi8hrgDFmoh687hXYx",
  "key7": "4jjjMX9LakL3Qq2D25PoNtWNZyP2GHywegX4n71CTtCBw6MTj5AqbpgMmU7Riezd9gaNAbLFzHPaatY4Nwxu2xZV",
  "key8": "Xh9TprRtPsVyqGF1JnfX8j261ktQ9PyFjYD37aZmWi2TRZ1Grmdi1on8rdjTPiF38JKvTLjoKHhydwuQYZ4Vpwp",
  "key9": "KcAnvo6nyzJoAQXqf8gAPxp2Fn8WHfNVQzudumTfMRdptVDScSVgjfJkbahQNa8NxxW77Tm2vHxAK7GRYhyC8VA",
  "key10": "2fKdyGnX3CXe5wAtfzfEW8QDhpz2CFyAEStDR7aF7FcQqiP2MFUrsCpAWbpDE2d99utZxL5gFNg3u6DbzKP95udx",
  "key11": "3dbCuDDTdasioM38bDKZoTxTvCh5fxenCiiEQcY4x1g1saCkogfSYprMuhdKaPTQRnkAu3SAp72LG7FB36fGbdNP",
  "key12": "4JVg2fPejqRbKU8H1ed77wXyycFiU8WGQjLKqqJZHkAm4rD6MhykTs4jaPawox8kHtqNqJv8Fagc84sMWvURtTm9",
  "key13": "Yh19WMdk5ZeGqcE6jgTDnx9fCLwvWAe52CHuukzc3uxwbQ87RiBZ8hYTm639Xq3AUqEGyWXr3fjdGRuubh4vF2s",
  "key14": "3dFvXK6Y22z4SjAoCsE8JerJZwqdsTwPEqzEdPQqBU5utsmNwm4vZiULUPSWyEy1gjeyKV6gTAWetk2nkvpAxmUo",
  "key15": "4QJRnRDij52aumm9BJf6wsQ6XojdVQKseZj45agKaLu4bHGKwGVN913wJHAhiiT5eMyLAds5EKtbrq3do79DaMeK",
  "key16": "4BCJjsrnp8H6BBQCB7QJYDaEqwZiv5nkH8yMdEZMLWLQ8ZcYivk9U8pP2khRY35iVmQUMsAZYPnNXJsdiyRpPTmv",
  "key17": "2RSa9ejNC56mUoHdMjLjPDFZ3WvG8NiECzhkp9NqkmPkssVnsw4vqMG9TCDMxvHF46o3qfR4s341z7pCqTeSkX87",
  "key18": "YnuVJpLxaZX9GH7QBsu1HmdeDjCzSFgZjkzDjfKTmHMQEnWwu6JSoxfovNCskVbAvpPKDrEecGwFKmWdaaAoTJ8",
  "key19": "48W2fZjtHgxUZvnNE1aPeBhU3mTzaasJEdsqbnhPkhMjbkLJq8WGfJpGyCefWha7V7VcKsy7MVpDVLJ1EeBeP3xp",
  "key20": "2Dqs9vuH7rwgFmS4ZWRb3ZSozdBPLfakqyqNshcv3ZrLD3DuL557BPW3jqPKgLufqqdB5hnS6VsV4Mz7vLxNUC94",
  "key21": "wLwpjmM8mX8EkJQxt78Nc4cWxsCUdGVc38qVvrutGPQJcvgkvNPsXRRxmeFhsv7RK5uGj4bVLuD7Mau5GLFzmp4",
  "key22": "4RjSmJJmF7iFzBLh8BUfpxUVZRnv71VBDU6ggaJxZEJBGAZbq79dgXr7QGJzLdT1SitkxnTo4VxFw5M3JAxzUgSY",
  "key23": "2ptSj78aYPGWpfwCXpxZgkoxmQFv5FpLUT9ba4c2C3hJvcSLkiMCWQc6DLPz3t9kSaQX6SVRLVzia8XDLAvozPK",
  "key24": "PNZ42a8rwvPQA3DCa9gKxVHT4NBQ8zCHGCgrS7xc2vcFpjdbkhUhkNrrM6qNXtbb9K79wApE6isMFTftm9BmZDa",
  "key25": "37798du39cnyNmyUHcNa5cSqvikBncakJgsF7xG1chScPbLgrsSzSvh4yVExqV4HYPDM47cNKnLnRX9ceuLe3Fg7",
  "key26": "4so2vAHBQR6RgAaQzp95t2cKfDFmYDpEP6oq9Zks96kZeKgTrsA2pNqMMAsmARGZGbkXLRfzpuJHXbVri2EXT1Qz",
  "key27": "4CSn9w66GDrZkkCB7GB5PtH8rbzSXfiCgqgMXfS5isqoCGLpdoXeKq9xP9MtLzwXetaf1v2gFvn5DMPYSQopDCZj",
  "key28": "64YmfrGRXDFudyKhr7Mcp4of6hFu6Pod8f7Yh36xkVmp5ETjLZ93EJnQHcGztQuqjg1RuoRGbzL3NQCzVw7fEsP4",
  "key29": "3DWKDkP5v1n8ET763jQ7Nk4FRr6Db53qFWHuC82JcaKgogjXEAJJUZ3njHpupqW3p4c7kwequiNzhM5GdJbEhtyT",
  "key30": "2rcPKvZ4kk3zLMfd5mkWMm91yi2JHdBjTnRZCqgZNZtbTv9UJPhLaf7MC1eBv6Djo74tAzheRNQAujdhxyxhEHzG",
  "key31": "vokyTSuPa7mhRcZY5wcgsqxJpehdx76SgUScfku7wXyEVfrJSwt3pdGbwwJb5jnB33akNtGpJvv8w3X1J7bcR42",
  "key32": "5X8tqsx8k6uxeZD4ezCHXq4cnz279uezUQCwVDAsDEKAkFh4pe4TiMnwEu9gk4z6czTtZQp8QBLCa9137uPd4eZA",
  "key33": "47wj3kq23qWtzMjpzFJjjJKkyggQbpS5KRH3XZG7c4UfnMYbbNoNPn5djTsPHwvDh5V9FtYkVyKu1GrdsBCG618Y",
  "key34": "f38s9UPKLJy6pamS5TEkzeSHrLoWLhsmnvhGtDMRUKpwQ4wkrC1UdQUBzBXZnL91uwsaxr1E3sS6Ux4uVzG7QYj",
  "key35": "3KMeot4X1tiRRhwc5ZHQ8VDa5ToPCsVS5UTAhy3GrU62DiThTVeEZMvGyPELDESayDAN9Ai1V5s6kvNdXUcfiRMt",
  "key36": "2mku3LQRBTXYtbCdv4G3zj23fNrdrdcY9vCH5X4JZ6sVhwksX82wDvnrtsiMkDd3YVwUKse2MjcLXxH7Mj1tnq6h",
  "key37": "4QGfJbQknTcqqJrqGnsyj1saigu8y7s2mY7Dx4vASGpBvisx4T3qTwZ4LpKQh7rRfKyvatbbstAmBs2X9py7Wva9",
  "key38": "27mwYRFmbXNzLgXP46hvevgk5gPe6ovhDDwe3ZcduN253eWjFEjDKajY5gQmuEneYn2hqmszR6Z38So1Zik1Pdc3",
  "key39": "5hB3X9Z2ZsLHMa29fdQW8L8ovxz9LPxCaV5SPcwtwBU7rqRUFnBMKyTLC7nPv73n9JAcRvW58AgZHjdCss13GiN6"
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

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
    "5QXq7mjyean8g1DsWuWALg58QPTDKVbip1rqzrahuJh6kUMgJc2eRnpNT1Vk9WZoyjkvy4EJtbNtQfWWiWktb7id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ty4fAv6PY2Nkv8J4hNZzg2sBeY9iWMzWEwZNVvgij9fUPJPiem4Bwcb3s8eepwDqpnpeyRT1kBPHPsVkXjX1mdN",
  "key1": "2gF82aB76GxvDXs6hy8hPkHjzVpUSBijty8YbxDnYL9dUTQuUpsvMQMJtwZQu9k7PQAyRetXWMmN5Ne1NyGbwcz7",
  "key2": "3ufFmVGEgTtLHwajgcQuw1C9VYk8AqSjBjYJbh5gG2YWxkHxc41EeC6fgaPYfaanJweHkb2vqwYA3Uu3BpTsGYCm",
  "key3": "B466BN8ca53jmLi7YFDeg1iibwecpN7wPH8gF7CcL4QZdEoBm1m4tXkXUwij2mHfbLV9f3etTpxExzG4hq9NFoq",
  "key4": "2hYYwns8rvSvtwZ9pM4KR7K6WpCeTtVbFVoxW7srCGU2jMHJKEBLbYCxSUitFBshd9hHHFWBeuF77NmK2jbXGM4w",
  "key5": "MJ5jSnBUokhZHB2MR2apXGLp7ib3c3WvdpEnqVGziaBy9QFR6fcG2LNLAHmQ9YeBvtotDzZEtqCqnkGydxFFH5n",
  "key6": "41kNN7HFHqaojKpu5WZJBgA3gYpta5oyEiT4eQYHAMbY71TtHayGVmXbKSmTRtgKRoJuSm4fY6BpgiRPgDDwBdRR",
  "key7": "223SJfrpMZykqmKK8zuQqGC9DYjskvzeCicJdHweiDiAL9R9uTJnm7LZNZm7fV9rUsQp8ftr6r3pk1j8bibqGdJn",
  "key8": "4CNbiTDSL9wesNxV2S8q2s8am3dt9Rt7RLCgr73u1r7kAwwf7qcUN9kznsFBXRmXLHcJZ2BshibqM75kV7RYm2ZN",
  "key9": "3vYnt1BEtcnkPJiUmRbLXkzmqxr9pz2L5daUpXzbGfbYbbF7bFcfGjcpyEBoKiUqX2Nn9g4of51ugJCas5Wi8xqR",
  "key10": "39ZMvT6qHpQtUU5kQPfvMyYmw5mbJCxa6SVeSqBHxPNuuTQpHyn46PAeg1hofKKcwiSNkGwdTAxKGAbgkjZmBfHd",
  "key11": "3tTwJ6QpjuAHcCehTCR6r6nAP9VU1KJNv2EV8gKpR2r97BktK8kRQEYLBGVxjWtRDTLdtJBHEz5576uqWVG2nqPk",
  "key12": "4BabV9upGUTPC75dPEhzhAQ9DY5VbaCYe5zRUmkLNwvHMkVDjwY5vW8HUL4ewWbGQha7ZfxMzAkUhEivcAN7aDN4",
  "key13": "3hegL1eK3Pmarh6hQsaN7bwBpzaLrd4JP6uhSjKYdxGgp2CHDsEAUmcjjkF1z1fEfjbCvkiYz8NqjQUw8QogaoeL",
  "key14": "3bx716RNFjgBf8nNhALVVtwVExmJewvtWEDv2Zjahv31nHrwT72EVg2zYH9a7YSQrWsrfHhzUmnw9VfyBjGG4wPN",
  "key15": "4K5e6f8k1pFSuaFJG7ALXLfRmon2D52MhBfSx5VoHVTtP1jqigr2FRyQUpxGQ6TmwZhU3b6BTJKMuHVcmujD357e",
  "key16": "2q8F8vnEm82Q2qa3TF71eF6tkbyEsHR1c321pSoxCi4LjQAsAtU4fNNpvoqzFhFgoC4buCP11249U3oHuQuZGjxB",
  "key17": "3vGBYiKv7UofHNYN2Q6zPyMehq3aKvPPkZqjFrr6T9eiyXrzkK35FyfewkSRAdnVbzEYqrfN9bLDUCZ6KQa4MVUh",
  "key18": "37Q9j2b1Bw43aVT8ydmqB74wWqXxpjpEWxNMAJMKGYMHYEAWNHMqt6Gtir93f48Xk9YdMHYzGXjgszPPmC3Bmwjf",
  "key19": "27Ho8xjfUvYdtSLsyXnbdrwkjKe4UyZNwqa2YDKqyNwTiEB95EJSdjoACnxVBBeaU4AXHKmbPYJW3C7TLqM5uixZ",
  "key20": "1GJCnH2noqm6unjR5EmGsihA2tLKS6nXPXEbBrG7WYovKjxNHJ4CpdMV5BSKhiv1iyTnTdHUtPz9LYc78sHhfzx",
  "key21": "3aMnpD8SFQwTWZt9v7KsGA7soiQDeWX5AsgexHzeLzR4TdCheqE5d5emZw7bZCUSm1NdDbFgu9KZE5KUbT1NxiPT",
  "key22": "t79SQcXf5iEsu98ua8DmzJHFudd5jiqUZoqQZqadWTCVPjuWUqfhBrw6PHjdTBHkPs2MdCh76RXuE3i6K5Q5B9S",
  "key23": "2689AMKuUEQWNqnpijLqWfc5Gb3yaMLjnz4gQKMCD2BWtFQwrmAGVMxD3hhAL6uv3kqq8jXW8GmYiFrSBJAPZB1P",
  "key24": "XGySS8hhJ2wirNmcZzCXeyxvSqUsbZoUyZy3pCsuum7scBunEt5mo2vR2niWvz37omsX4uirPaPhA3Yb9awqG9M",
  "key25": "3QGdYwJgyNT2TLC5ZXuyoamr9WwDXfsB8SaGQXqhtJm3uMZK9mjh3G4XLHV5nuKTSej17dudwHrfGAxhr4sYkDaN",
  "key26": "3H97Cad4mcDnn4XijjhWc5YcZp8qhcEU4nZRarh5ScAEpS9VcaqcJY1QGiSh22erTXvtEDSs8n9dNQH5XLGiSZy",
  "key27": "4eTpyhZrGxj5bB6ZMkEKzfn6peQ1HZFeCwbXd7RkaDV7R1EkRgfJupkqghvHqJsXyKzzbP2vQr5Lp3RCcGFd4NWK",
  "key28": "3imUyMn3yja3VkhNGfbx74Zk3yjb5NGGgivWZn1tq9pKZmF2tZKd6fBKCTBDbqzn6wJKKx2yz1FChaeeQ1wxGqWv",
  "key29": "5ZSCKc1AWCv3eXm5VLqrmgxnLNe3xw5aezH71WzNXkY6yMVM4WRgDTws2rLMV69nkZs3vxFBMYmwgam5T3zSjdN7",
  "key30": "4ZEfyyAmMbK9tL2ZXgxkhDRKcwBfx2YU786qnw8SBnDqdPN95VLyYN6ViUModPAP5ArSvkzQTq2yEKYGtY8FMwp8",
  "key31": "5r7LFSbhr874rskxV8ta6ajQBYxaF15LCvqumUGRgXNHdGRx5HEvLwTLt2N3fskY92oG5hyBPXcop6uLvPPGSno6",
  "key32": "2g3i7Higrb1ZrBsR5W1tBN3Mz664JJ2hoQunKT6s5Jag69X836Zu3yNRv5UKJretsTZENo5daWtWQZfHApcy8jVi",
  "key33": "5Lwn2dpZXTUUqvQbhdzehoJnKMku6yWxUGfDWWXXpiFGyUtjr4AhJ4Z3iRvdVfc5eVRWksWLU1M9LPXAdYfrhzfw",
  "key34": "4duX6WUNuxHYCjuaZMR5U4FQg8m82H3ixUzwADG7Uod31rn9xpqre5DexXt4q79ALJpAqCQF1bu4bNCuCPJTRTYd",
  "key35": "4HSGkMANGhPYAZ5eEXhaVjzYTNMFWaf56QLMFPoEM28uVKVdFYLyxRy9AxUhLZtdTNXwVZu6ZmNBowr6FgBo9CZ5"
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

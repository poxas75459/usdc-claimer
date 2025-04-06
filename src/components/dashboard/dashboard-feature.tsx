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
    "mS2tCJxTb2ZTw9XsPwFwyrL65YUfxymYQpoKMs6J54CV9cwon4KkG41RU5SkA35XcFgfia7J59z8LiSmcFHJioc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzjSdagdp6fepKVLTXdYiuKbLpVeAkdgHJYRWCoLYeXzhjhm6EAQ5zqHqBeiy8qQ36YKk9gwkTrS7GoBGnEjChF",
  "key1": "4cdV7nSVA47Usvwi7882uoFmnK4d7AFRgKeQ1bcWYBMgNxVtF8mYzCTJ3uVHXy5frAQ9AQNrWyRhE4KQNZguZLpi",
  "key2": "61S4W7KMGm1ZS4p6vzGoFnJ4ygKvbsksupRKUPFEbMhyPkSaXGJticC2FxaiNvqa7Mp76Es6oYG3DWbLabHMbiJ2",
  "key3": "2wTmUDjKbEi9btKMJEzXURmRMmHzMeRpESW4SCfMAsjSW4pox19NhMWdrt4prV6xbX48uwTQVZGwH8THoRAz9i32",
  "key4": "4qMM33hVyAr4J2BvYu7XnbmAgMdgKoCWx6LyFcMrtvdXkBzN66jEpsLsWgKQVGXVWcEN4zMKX1gbzguMaLEanoRA",
  "key5": "4MCVtPgG4qBdhEbBxoUsTMs6vAAYBXubX32CXjTiVsb9P2DuhSZoLzv9CkzQd5C1y3VTgt8JA5j1mNiYvxXybeZa",
  "key6": "3dHgaferaptb8ytcY5eXHy1Us52WwBKa92anfqVbmWk336iWDWMmwdQNw4e5uwzvspzJ39tFuBUKxKT6Wo5Mgg14",
  "key7": "43zsamTPwhZqDdrw75HMAQ13i5ASRWc1d9d2cnnXwYei4iNjr3aQde6FA1QKwh2StcLTi2k6cAhyPvPf5u5nDpXb",
  "key8": "5PaTKXfKP2hHE2zWJXV8cUndPcPNHxJ5sHgPqygNy2imwpjxSNgNb1DQkJHZDw8iBJr9YvWfDYS9HMpHDxVW1PaF",
  "key9": "ESobFxmDuqfTZGd8ZuBAB7BFZAGu1FzihKmYbF13w1CKZZ8WhxoHVZiHjuutNpUBiByki16dQSSTCyFLCgWTDae",
  "key10": "2Dh9Y5ffycWGdtKqjnyZ4tnrWAL8mvWXGyx2Qv8bbVFqU8v9t7ahFzKGZjCyZbA5BSw8Mr38bbHRcyb6oPW6yXrb",
  "key11": "5pikPSJz6eGQBbzx3qGQMfnYxe2RAsBCzkSr4BYYKKdAvhanr5FwZA9intPEkxPbvu8orEXND8LsxPLnm8DBeCge",
  "key12": "3oZt1xR3pzs5Wa5iUFy81xm7JaY9YdoEYzrH4V8qXJx4PLWmvgRGhMmBV1eEbDbWmczvybUZL3GBnWko84fjUk3A",
  "key13": "3SkYvuSvgotHbkBwqm5yx83TJo4YnzhXZv9m4hy2kUioWp8SarikwQoyWymXaZTK3mwp1mX1SJmyUpLp1b7eLvea",
  "key14": "4tRbnUG9CmQYuLnLgF1F1cic4rQqqVW4mFdDgTRxxZRHcqfwuujbpbSutZLh4MTHxSHB1VeW2Vn4EWq5ZX1TQ9pd",
  "key15": "2W2h6wZ2NgoUUdJFv7KP1KryjiMLmPMzW2tKd2gDj1KG6YfbWKXp5hNs78ra5Gy1QPbP8rkQt9fZuTbGJVjYgFCJ",
  "key16": "74pf126etMiygDum6rVZDeCBBG6oFyao1K5cH1bK94hyYzmyEWRJNUu459z32azhDrSP3iVcipmaKxbJ5jRpuQm",
  "key17": "3NiR24REffsLhWNKLRzoLvQXVyqV4wT7qLapEKZfW1ge8pLYrs87HTX5UtDNFSDmkbaBTi5m3pUw379WMZwQ15qq",
  "key18": "2TonLWK5KZMyVSjBdeh7f5RWFSMsrGmsveSSSHvMfwL7qhH1gdaMbPwjviZREvyTFCN2y4vu1Xgpo126uV6vXLY5",
  "key19": "4bqw5Yj1W8SpJNiRurCeq7Vmv1PfUeBm5MAQGacfSmQSxEoB9xZLWDH4wFEJPMfZp9NorStWYXD8hYRWGjN25Z3Q",
  "key20": "4SEnGPDxqSnnmhxWJAFkbZLZtNJrWw1Wu91aC6jA1paRGvSu9bzaxvxouHxsCReupzvs1vz5gBxFjJH24qr26ztx",
  "key21": "4g2cGcNhntGTwLX1zVkiBsjNkKHSDp7RKyqSbj8VuoQHrJvYktkw7e3ML36CZUJZdwLgGtYGsfLJXtzENbPwJj4X",
  "key22": "6nCtXMQXaoe7iR6cmyUJhC27qUbZ8DVvRubFTU7gATdA2JfuXmqPHkMm77wEiYEF2Gzi4ibumo3nTNtqn9UrzkX",
  "key23": "4UC2CvgikkVvjVu37bH2KAXrcLxKx388bte3uiWAzzoRZdz9N7ccpxUZ5iTPmFDiBYMYZAYC7qVgdWiWgE11UAjh",
  "key24": "iWfpQtPKRt3QTufQsubR4mzMDfMRkDUA2HQJ9mFnR7AXhaRwpzfiRZKErhAvDCM9GTwnASn6qpSUsE5gi5sKBNX",
  "key25": "3vHnAFcEPT1TszWzK1Jb8XHRR7fBMcCQmozK2q6JLE6QkhBtTnbHCuvpL9zD8GpjuntSiqrG6rvb52cJNYYyRYua",
  "key26": "42gQuqiU1JtrJsuR7Cge4zMzp77jq7gf5uqxmCZ2W8682k1vcMTxouoRdDr6RKeucoaSz9m9MUuye2yxKEbbLKxc",
  "key27": "dghqb6JA6dHE2bWLmDMLTQ78bBn3S1f9BjfBYAzHMGAaRczJvz5uqKBqgtVHg89jsexN85oCNf3TwK5dqRNdidC",
  "key28": "2yiGN9mWpgsYi38sFFJngUvczngBTarwcoSqonhS9gGbaJ2pYgb47sb6SrZJm38C6ewq3FuYhTZ23eF4Dv36HpUx",
  "key29": "3VP3omssG2TgUZbfw6W7dMjn4qJgFQxm2n77GPDkc3vraehnGuKCLZhRgNxvzUKYCpTFgmcjN4UQE7QaXH7RJf1o"
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

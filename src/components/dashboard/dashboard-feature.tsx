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
    "wNK4JmRBK3sJUuHJFgSvS74Hv5M8QfxYdH15nT7uKy7nCTfBoFJvg95Qbai7sxY2fmsJYdQo8Y5ufZhY5aZjBkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pawq9wsiQf1Vx4ZeEJHZH5NjxFDtofwmEEMAinQdff1DcHMaveeE279c2fXECWZcnvL9wSA1x3RkpePrgwvTdx",
  "key1": "2BYBf5DV2EKUVwcxsB7mCjGJRxx1Dy52Cd847GCcXjLaUrqpeXTfd4k59ruRHmKJTFGyrnXTF5KWD6cPCf8EJB63",
  "key2": "5tezYJdU6RPrNitXyHBL3MeddoSE9GFe7epq7kw1ofyD2eEAZAFLHdUvu9ZABDn8pvunkU1d8KKLgSLViARuXu68",
  "key3": "3WHZGJmu86HPKUXJniuHbt2A5JmhEtenY4t8jRMEHFhxhsQUnQN9tvevJWRTp8t48Gqhw9rc3QfWG6er4pUhppFA",
  "key4": "4SsyNuKswu2K7kEgggeJAAPxh6rrNV2vSgTWhPNRsG5xjGwVuPVUSH6BRWZExQLdMXcNV69C2ZbFBb8ksUztH5ta",
  "key5": "4JXWhpX55QX86ZfXQVULAxrxE1JmbucNb26P7kcSmdgvmLRMkG4W52WgeCa8iKQnccrvaKcac18EaxUfPrtZJejD",
  "key6": "36StENvZCpQa1ftbztG5KfLru48PuZaiUhKZ7JW4x9ZhFNXVT8XJGvx7S6JcAzyop24tCrQTPiQoHdDVtG2BmvWg",
  "key7": "4DVEyMAGMV8YtRVAdbsq2PntGsrV5FuHA8BJGABHp8UsqW2TTSpmRaBdL4AJhdjfQxhT5W94rg3Rb4JKyEYfsxwc",
  "key8": "3oEhmxXggm3sqdoQat4JindLy1AYHz2rAQ8ezBfAwJM1zPP2Srj7VpBPPJmcr5oAeBiTgseWxL3aSu5h1vaLj3f4",
  "key9": "4K2HaE83Qw1wWm77qzHFmzj6jfkAo4ssdFmG1Ye4nb4uxSFQmkK5QwJY2fJDoQs7FmraBGPFDAiP8psP2icfzc9A",
  "key10": "aW5ZSX8zJoPw8RQxnrn8PXHwQjn56UqRLJy5mdspXaDRDKu5vR5AKn73fYkABRB4hv2zRjPANZDnm1McY9E6pwH",
  "key11": "W2Zav5JAQjzHh6ZG1ZcHwAVKY9q3qBzkPQu6fbeJyiqr1VTPikZzEYx3Jcr8inK3RCo9BeVieBte7YTvvJRnqBX",
  "key12": "5LGM4FfWKx2W92X365e7zFoF11SJ9muUcmQtYnSS8sUSmkGFZgWTbXsp5DWTzKouaDYmQNWqXUjT8nuHRUBXKuwY",
  "key13": "5wtRqHP2vYt2GDL7JZwZnJxxwfkmAjCvuZQ7KEZjQS3xSryCkzqtHjPK1Y5zjyj4P8SsuzAb4d4zYycYLXgwbjJb",
  "key14": "45oiyrjLkFiZpzQP2FANmEBzbHRZQR9cNg8vNQJ8gBDva13jVEtVSdNabnYopuJq4WaU7Sm6UU11YmpkfESxRt2Z",
  "key15": "2VRMXtsyHx2LRm2zGQLB5popm6ayjgKc9Z8p8DQ3KbaazfP67SsyjRW5DpyRkpfudEWoWkZMzWjbgFgVS8txR8R4",
  "key16": "4Y6yWY1mdGAsDr3YEnY6vN1UPvt17j9SAsGS7P4oxtdr1scqDp8Sb11QY1bTiS15DcaSpvFNiYbY4G6LjpXjQtF8",
  "key17": "4Q9hYvmoVwW5V7w2bWHsdPfdsjhE45Nn3TAzpuMdzpmkr3b9rn2vxF376xrti9hTuRvfgGXbGzXsCcRfs6wTji9N",
  "key18": "2sXaaKoWDbxUrjgqeJY9NQngZuPAk2eP4TtkPDVenoribJHf9Sg9zFeC2r7KeGep2xJSXup5oerr5NSmEd4nyTBu",
  "key19": "3FMKF19mGGuceWK1T3agxQUxSKJbRqkgW7fg9gLQfhtPoMWddat9Gvwd9JbAoRWy7fpG933QcmqhbcCj9FkSEnmf",
  "key20": "2vE6yRVeGCu7jFiXq67RZTx8SmoP8c8xW7rZy7Bb8hqRPCFHdxhqMEsW8F48VbiSyoQEmAgX2mYzgHGtPFVUDZxo",
  "key21": "2aYJ9JDU5DJw7xxzVVBAK69fPwUVgWGpDbNHrLgA6H8akr7QviLKQkoXGLFKu6wQGMsVYBpopaK1bgHScaSa15ME",
  "key22": "k2EX38CMhqJQS7mQf5ZieWJk3siDqqicUXwyMzWjYpZV4uQGdfUwFgHjMK8thyQpUyXiryhJeC8MNuoxk3Bs9Rp",
  "key23": "4iBEKfEWNZKZkPjiw7qVgYC2z54BHSaR9AxZUHYY3j4Jq7BN7z8B1xfbC9NhN4gjuPjZqxZbMvpz9yccFvnqgNZf",
  "key24": "4BsvcRugisAKL1Dz4McLn69TUakzwYksZTMcNi6kbhdAobNj9MVvptvBvfznSkjkmhAbBcRXXkFT6ejnGBTkKN9Z",
  "key25": "zuMAmJimxvudkfYpfoE3NcUfxUoCXD6t1SC8EVSQokT6MhRa955b21LMT1gf6SzzagQidaGS6Jpi3n3rDjywCBo",
  "key26": "2ATfSP9dQzw9cQ3tFuxmUZkR7fd9dBFNMkynEWKAdQeNqU8xxRocw2iuwHQXZvZ7Mp4vD7jhCt7rjUjxdUR1XmaU"
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

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
    "w6uZCm1w5FSGKh7yWDmeZBwK79rmXNYnPP9czvWWixGTQbPpdmNKRBkbhESxnYz4BKCf4yXZ5ndrzbujL5CTrMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5farBmUa8BHRXCB7oGa1PGYqmAZC9jFNk6uR4Lxr6KooecaLxpCNbwU2AdbsKwbVh91sxtxpjuLNNLewQNY2DvCe",
  "key1": "45uQo3oXHJVi8frPRvFJT6NEZSSPaptTGDpbnENRvgoQHYY9C8Ek9SWFZ4u2RUWXtijdpKSFFKkyee77RziL5Xtx",
  "key2": "253JzoSYuDcfsWUEkoFVYV8NwtiAHdHaCcK3YiDPb4yH8JWcivRo5DsT96az23gy8Ax6bajPmazuhpoDoodKNm5m",
  "key3": "AYgj6xFiU6UsEw2kK3coaR3jBTgc7n1MQkuMsAK5R5CtAe8CWXGpCEzteBRvjj9xG5j2ptQ92RW2e22Kf7QYDBy",
  "key4": "4rTFYNFfcm14qDTUZgafbuokGbAx28WjyDLUoKCQEGKUGUGuPQuC1y8p1YyjmTtPvjgPqeCvscrVhdLotyHn8mCr",
  "key5": "3xrhMW5amDousrdB2R3CCT6uRbPFVt1dPdJUgxvHXJQugiQdn5MtkwZ9LxxSiugvZ75tF6A1KSS3FKMuhDQuEoxY",
  "key6": "2ivzinpfd6c3Z6ihcSA9GDH9BdCpREc6U54sA2JALjJqPE4g7uH5DsRY8RAJtSVEZBnK1tgnunVUnBoZY754Tz9Y",
  "key7": "5n73yhNqkFN3ZrB3BssZRZZ742z4MURq7FVAUg7K6EHJsAJJa2YZYr98bMhhBXtch4eHNFXQsXbaQw6DMXry8MdW",
  "key8": "5PxbGaBb1cZLLKcuTowkYEvNuuF9TC31MqGkZ3mykZ36zG8YxK2eBmWiDUK2h1tHUSuwhRYMdzCQzZqHLD4be8pV",
  "key9": "c2yZy4u2phkYzqbcenVR4pQopLtmSfysDMidrRivSGk1epdBJF4vWNLeToWz5qziMreRbwqRSTcbSLASFca4drY",
  "key10": "Hv1KzUncpj6iAPxCeiJ4Nexjz7b17qC5kFvALqGk3vDca9NzCZj1GkXLu3kWYEsqJaV8tYHAoGxmCzA9NaXXFwX",
  "key11": "328p7LVQdoABbfSy14Q9mtTQiCXDpFhx6ypQG2fXkyhGdz3aiA3eipqaZUi334Yf8HACyF3PppTnKnPJn5FkRaeu",
  "key12": "5Zdh7uvpFUue9qLLgL59hRZQUJBJcPRMtzRyCfKfchp6HREShLJ4G3aUcBVpLifJeiox3UxmsxJLAKPjcVofbcxH",
  "key13": "5iNXHf7tnyn4xUGSi8HN1ffSDTa2C64wdMPrQL8qbFPFXg3QfsRDco29MvqJ2KjnsyTLTpgtiqSGHvShSquNXLPj",
  "key14": "5mZJ75Zttf2a92JrfBwnhPLEsiaMMxZp4SH9RhP7iHDcrzmuyt6Ms8dA6xiXBroMfT23BpM81bQkRBwbNpZsn71q",
  "key15": "5c2z2ArVRaKTwUn7bpZNcP1cSRDXLLmRakJUUSj5oVHWthiUeZJd3tjMxhy8uJ5idLJY4s3thFC2e1AMoW8uz1tG",
  "key16": "3rdse2C9SZ8mhJ5FsMXJKtXMuvt8GqivyFWpn9hw68ZEScMuVAnf2zprP13dwANxY9cDx1btLZdr8zcEt1ttsTGi",
  "key17": "28CKahWJKsbpXfWJf37V8jPpgZ2yUTxjBMyhq75FHSeyTGghPDXGFuSyU3EQEpZLG9idQpkpQLSLmKLMVzDp854Q",
  "key18": "3fZ1mG98cqm26ehXiaeZpcguBXyjUXXZhNVebJXHsiJUS7Bj6onoZ8yiE2rCdCptPMuyQxwdywfDcc1Q2jdorARx",
  "key19": "3CWgRZMXzdzKes36VtuyzB6p98dq4uyJKg4uehGvkRDCPBwLXduHFCmzx6L7MZAcQLM2jcdtng3cnTw4bygzyW5y",
  "key20": "4G9Rr9h3QAJaScCJcXujcfZRPMJnoh3SCHxYKK2YwzgWthJL5nDgzzpQCxfR7aSEzAivKiHCg6CQpv2cSyfyMgwi",
  "key21": "5Ch2qUkqATnxSyHvesPto8NzbfhdBjAWUmfe75Dd5EQj9dhnoZrGcPoXJFL1E9UE5HVSWvwgRzK8D9mhtoq44vyp",
  "key22": "291wZyGopuic6LXuV8VXBb8BTRof7cufVLwoF99tp7qp1brbYzGFbPBb5fbb5b3BNNXYvdwavUQcZbW8XHHkqem5",
  "key23": "4yciVLx3jWX6X3hxYT6VRDW3BoZK33DLNriv6sFASuDbEdAoBAJLbHsKxD69zMvNkuxEDRsDGVc8X7d5bUuCjmb6",
  "key24": "btbZaJGsRtwF5c8uJ2BeWxn2kEL9fmvdsSvFnS6xpdkSnWjkppRbcZyA2aNRyQprBABQEEmCDU8FD7PKqPq6f4H",
  "key25": "2Y9tRwACEEZUpeKcHxoBSRsmTa6JdugeprZ8pdT15poTPhCuMuWCJcumkkFLdLWGiaFy2ZyH1aFE7cyiPp8GL8BW",
  "key26": "4B7ajj6hUnDFWRpaJfFN8VoTVBoxRV8HoRx9mYhGCevZz4UK5ACVwGtrwEhE8wkfnw1q7cUQb5miyfYqfbahwe9t",
  "key27": "5gHxM6K3r9y1GZs3hwBVrJaBHSkqBrMAVSTMSXMEbpa4cVwUKrA4A12bCAQX5nNEcLtJak2xYRPj2AJhhLZwghvE",
  "key28": "5PprVXLmLX5fUikUtX5qAwQXJWFC8jxcEqfri6S8EUVq12AfzeLfCjzJftrJQmxY2i87g6KQCh933bJSH8aUWJhS",
  "key29": "5f2FVgUMEH4Wdwr1hpS4g9opCwdDAhhmKrnYDVL9i3qBZ58ks6wiRxzH4i53mN54PG2EkZdHGnfkrapXrJqpbyRL",
  "key30": "2CVM6m7ZZzbT5SM1HtAyFrvM7MYQhmmbwxjNmKEuf9gEXwWqHeAeoZVwDbyMv7ikii7Se61Rg9znwCfzPWUuaAri",
  "key31": "5Kc1HKrkqfbyggr3sqty4o9M37W8UqFBaTUrpZ5sWpTXXeRgsYGU7hHvfcTGNfDx45yYsaXUze9vJxyNQyTGw49a",
  "key32": "2m3kD8eqoZMxYYauQqoKj3VbqEb22C7QLrwpQqxVgpNyYsz5TaQrqEA1cqUCUbDcGjT9iAkhpgcYXt8XGK75Pcfn",
  "key33": "5vvvXG3D7PojLxTCjv44TASacUaobMNCZb5TKwYf4CyXegQCNMueaqyKrQ5LyugW8MkuiQSHDgREFHvdtuLZQnod",
  "key34": "564oppP49iyDjmjUw1XgSbVhCHdR4cVZzSUCdLJ8toAJpppw2vtLYej1nWR9kx4rB2HHmdh7jFu2ncoWhjX999BH",
  "key35": "22WtBKTjPrjkg4QJ8EKR3VDqDpBVPfG7ZNkVhXX5mUuQKHqS6PHu4DKp2jyCMygWRGWiVzgC9XJZVvXZGMYVyUMX",
  "key36": "4MbRJNNw688QTheGeogHyGcDNQPw1gWrkBKbJ1CJWp53t72FG8uPPnsv8RJUPrqEJn6aY6gR4eY6ckw7CVrKBc8J",
  "key37": "5muiHUc1cDHf39JrzvHVWGfJwjVx8LzpQ91oSWJvSUmGZcq86gXnD3sy8ih4aMYoZqtn6JF9PvA1hpkLd9HQXBhH",
  "key38": "9V3Z36YqFX1YJb4nhjUHGP6hi2TrLpPTKuBMnDJ5wPNnsQaZS3pn6K4p85VWZeGmHKG2G8qLa77mBgv33aVuBcx",
  "key39": "4vBRmmHD1QKQS3sbDMZVh6a3Po79NQ8KhCzBVgc7h5qnx5YHfRfPwFKUPERr44SgrdqF2gWjxtra89ooBLUDk7q2",
  "key40": "mRrDo4HZrUcoJyt5sdQmAkuQULWze3k7skuPHXjr7KyHRLuoyC2pjwJdGftXDuLFkrkYvTyVWtwsSZHiRMUttyq",
  "key41": "etRzFjeNKEep42EftTdk587hnDrjGNhx5ErevFcSqpG6M4p12rTYUMotbkYcQbjChtj8GKnvEcbALQe6qaWPVzs",
  "key42": "5JsWgJmJ1akAVuHBCvDuu3dhcZu9wmbFQTtyAWa3nnqyjrbwR1DJEyteyBchyXwrvTf5bK99otBxCesEYZLJHiEK",
  "key43": "21vAQGxjBUN9JQh8K2PrhZCRANw7wfQKhZoTxKFiKTGWFUg2GEFoEWW2zT3D3VG3yqSkYKuPVcyHxr1Hg1Gw5kx3",
  "key44": "45bJ8kE5D4YgQq6FCpdkinzk9cg9ZRRAcQrKEd1F7FLCx1XovoasbqjsUhnbrxXMy5Z1E2ATu6CiRjJGcNKVSvQd",
  "key45": "4ciVTNj6S8mMNrRnc1kfgwEpzVjebaGjfDcWNLyfBGSxZ3G5A7RVZuXnzJnkZ9WKJv2D9K4HSoWoKWbtjxomLfPp",
  "key46": "3Z7ahJj2QQHKBtujSTZmSKDqPgLX7pfFJAoS9qNynscaKJ6bj9w4cAFF6mdGn9jitS4wf4KJTCvrzV2ZM83wTWdV",
  "key47": "4KbcUiBqA8rJcSvSKczsru7y8Do2cMB6kM9TwJaU9QsG7cPRJsRVQ6SYBX1Te24ZZL343XkgFmMCGkDXXJwA2Qke",
  "key48": "3nSDoX65nSKThaYXD3NJ1w1wKoUAqsSbD4MAUd9FVRm9RsDchBMP1jv1ZgbcEogY9fzrtRTRXyxdRUegFsLPCYRx",
  "key49": "66gMWe6uUAXWZTeXo5h2iwzuXfrdMizeigRkCwW4V3ZuWWaoWLz48HnUEZbgBntCKSbXuAF7f7DjBhJ8EADaERS"
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

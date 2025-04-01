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
    "61tHGv6JnYbMkRcBr9mrkRxrHUDNca6xokbByFAvJknTa68xzjVitfdv3psei8wbiP5FvqSzNiXHgTo5bifaevBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rGDrfBVpYr72NH4ojQMpiYZWVeVouU4hsGMkd4yaA5SLGeGvwRsxjrR6Bk9QHudtgVcehWu6Krea3HcioSff5Kx",
  "key1": "3DzjJse3dMT7Lfaw9xFF2xFfsbDXozQ1R5pwofSfNfe9q5wU1Rw22qwqtt1kpv4kyq8q8ZN4rtKGUwgLJzWdpUoJ",
  "key2": "3g9sx6rbJp8JyqNKutWf3YeRoeF9pxqVGMHUvkNXxqNPXGWTRW674v68kPsPCKhw9HY7vDEqiqxKcLHbpdh3Rf1w",
  "key3": "4CUtpoK2eHYujNWaVJja7HHDpMYM23TKovUW4uiAwKkR1qz172AghV72EABzRtJABFb5r8qj2APNvuPedBRsmfp3",
  "key4": "3Zno9K8FHA3VcWGPp2PnDmQPXpM66mgQepXXNAmscJLJo8YFVeAfvR7Uciyw5RvtPiZeRXZ6E71uCHXrr1TvZWqe",
  "key5": "3ML2ZBiifWruLWWa3uTxYfoRb8aQqtdBJrBv1XNVkq5D6iHe4W7T5d6dv4siXSTVLw836daN7duL8ypDMXnxrBSd",
  "key6": "5hh595kFuS8dSwyptTNTkuScdtcqLLhjde8RJLR4t5isiZJ63fvLK58tC5KBT5BuyH63s63CCCV9ThQr6cFwUFwW",
  "key7": "wuyhY5Mn8i2iQtKEEUDL2JSutocvZM6gaeyqAcrxjB1WqDv1u9qEQLhL3scUJRdh6QKGmNeTwccti9egSZqMwJF",
  "key8": "2mzQYvTMWvn4G3fi5YnBspB5PVrT1EPvfpCPMBpXYX9vxyht5Ruhcx2KESRjDMwrxUMxHbpJzxKri8TtAj44hVDz",
  "key9": "2r6P682PYPzgkyeHUN98FYFpeUXFEDZ9BdYfzLx82Q1BPX4dRqFJq1SKd8ba8p1S9sx2m1dMtDs8tZX8SutAzNWa",
  "key10": "3fhvSkDPB4JoxYKpd9feEPWG18mxAf8d8ag6PmsnenfLPF6tozHPXqJ82VoYSpNqKQMZhRyBhHTAuQcjTPDg4zmZ",
  "key11": "wZcgAqp7cYzLQEBnoA4dZWtCY5d3BYY3RWFiLc7iggkVsqXtrh76wNUbmSBT6bzcZpzX1qcQGknXZk5NnsxVN71",
  "key12": "4JUMkAi6EpFxoDJajML9XWn3vozNDUdXgecUNHJDh8hX5xYqvnyEv3fZYqX4tmUGoyELbCAsY2kiRssqRzdQby2n",
  "key13": "4YAgpRtzvttoGjHWtAzvVwHas6PSA3h5DQNWLtYNAHAo5MeWe5oay8dCpSH8EA3NMM9kGWRZcMqyTgpHwEmgUUX6",
  "key14": "2tWPFs556dZ6KKrEMWdUi1vmYA12g19C5HHV4p8RxzQ2bwjVhXM7oT9duvAUeJNHKwJNSUGFYuqhxrtr3ouSBQ9X",
  "key15": "3VtCbAMdqCba2KRurkhXvzjnJwBMbqoyxPj3ZCXsRynpikhMZhENtcUiQQ1WZLEQg4uvSiuAzh6v5jvR2s5cEBA1",
  "key16": "31MonQ13xnccaYcorqcFgTWn6Bm2GWN2hPGxZMp8BQ91t6Rd3TrqxxEhjEAS3mmmiuiemQhwWtJhD1KUtFPbmFuP",
  "key17": "62QgU9Y2aybbhV1YuzKoiEjw12s5uTCjpjNQXyMyipKg8gqjVv4dxCZb17mqXx6aFkR1XoiewMAitHfxKNgKrAeL",
  "key18": "3Pxq71uaJqMcp9EvHehfg8aUTf3YrdkzCWQfAnopUHRrhZ9r78n1M6fqoCisdzwo5cj2bn8FP5gWc9UiUaihXToX",
  "key19": "2wuxQjApvzwsCABk1e3HipdBCmxF5WxRKsn2F8fASvVzARXmTw6oD5zwpnErqCbFTpn2eKuxKzZ9vKD7trYhp5Di",
  "key20": "2N7TbUt9jTdMFofiLd9j49yiiByvrZjSJcmL5QkVBScrYnPUSxZRo49K35bZjbZEJkWUJ1iNRnW2MrKvP683Zf4Z",
  "key21": "4WZJg53kZTrs5685XPQzBwDjBcT7ABGqYykmT3mYmC31ZaKUkThn3uSmHcFQ7p78DJm1NWBNDLvsWn5ZZ4WnGNVv",
  "key22": "2REMg1RTHbBidVZ8LSPcfcZ3zvfmMpsw3ib6YBLa4doVtfJBjsAjS1A8GUqVY8ZZUqGxB9w6duk5wRyPmLhFi91e",
  "key23": "3CL9AptvSyAWALEJdW9dbPDtXHDaxhxeDzAgqteULbfkaAPCjvknuPc3jZQpfADDPCUuMmwyhdnHU2gf8rhv3MKt",
  "key24": "61n8gQPFuhDz5C4nbEyeockpKsJVr2Tj9HnpwdSZ3y9HyZk3AENZbG3SbMiFGZkzduavGXqmUbY3HpX2vq96Hd72",
  "key25": "5k4zoRHfhn1uDuXFezv8ZaS4tNCM8rkh5heRhXmGgTL97TQD9bJEwtAw8BiwTKz2GyhxiA4aneCZfGmuiSY9SAdQ",
  "key26": "2mvWJbdxjEqWvdsDqR97MeSj3fgUrGbtBnifgrwJfpAVbmm3m6PdRP6WTkHF2JmFyQdrzsP5LLDFgxaDBhJixCrF",
  "key27": "5crkuASx67j9SGxo478EytLP6V1g8Anz7DscwiUsCrmGcZF7p723Zf1vZUNbt8Qy4sJ5AoAEimM59pnGPNTAPHBY",
  "key28": "4Vz9d9XTvE3bx1TNZo3U2asxv2G4eneUj1XMrNhXqSeBtund4wr1v4tyVBXwbJsJprooKAZa1cRapBQ6SopfU7Fh",
  "key29": "2qhqRE7EGwth2rCMn1Ur69eTV7tM6NJqbyQRmr1NKabpya6ingMikdvrHdFDzqBGs8tE3tcnj1uxbCYYkRUvxt6U",
  "key30": "3AJnDiY1kbbStdn2nh3Ju36U79F99pD64hMYMjJMxACZZv6YLJH44REFn6LGs17iS4modBWmGGrxeBjbV4CtkJLo",
  "key31": "3kFz2DEGJcBFWLdDTfiwjmywiaMxAgibkcXGH2u7pMbpAeA6sfGDspEvtLfQVkAPwywMhHmKBi9Awy3GrZJDfUmS",
  "key32": "4rZNnePEySCiYQyrcZjEyUA9eamGZAybhBY25zGQ4u8NAcNtAX7958y4vUy4NkWPnKEqpaPnWBikrbxJufThCXsD",
  "key33": "3EqwHZRzk23Z2bAhvfnrtd84ePtxccxghsmxsK1RDYWAtnfMoKsGTCw7WsseHxKJY8mrfXN5vuuytEeWnb1MXTjm",
  "key34": "2Bau9j78fCkyVwemacjkeqRqi6bM3KBwqquJMXiSY74uA15c88KkqcDfLLLg3T3w9RWNcUSJsBSZVMD8wCz57ca1",
  "key35": "15AH85otXoyATzc4ewLJ6VvJF78dA7m7Gx85H4gZesbmEuWnhyCYr6d4oqST4gVzbA39PeiAjxYps872si5FevK",
  "key36": "iZ6ZQ8YicGmyLDezo2HVPi8wHcHGEFHzLm4qUA6kouQh9Cxp7mzDWer4PiBHeP4cwy8UXGi4ZQ4n2ic47afWaSD",
  "key37": "2SgjJiSUTxsdvexe66TATw7T9iizYo3Ez9XSKrBhLsA4mrg8Nmah9NQ9mwQQTi7Rj7jvHHYqYqHAukJwLKtXU7hV",
  "key38": "3WBhmJi69b61DaQY1X93Z6eM4piK9iVp1dq7tNx6aWP8LQEoxLp5KG87C1oMcGjyu8ohShPaFsDk1j2yCGHsWW8L",
  "key39": "vsnyB2uXjf3aTUbPUFbW2J2GKr6kywv3EQbERLPBYk5LUs1rQE4rAFe3e8fHr6PwaUfFzuDofD8GS2mGEcWtZnF",
  "key40": "4DPbFMRQGfKUZMkUdz4U5kGic54e29EAVPtjn676786q9XeSLJbSaM8r9KnddMnu55FxP87WHLBhF2v2mK4mAnVR",
  "key41": "2wuUaPkqxfnu3vqJi98NvtKWm1D8GkjgJvpm2HDrcKCAaiqoSvTcKnGyw7Y7DAJVkShAPXT4bLnBLJZts7Rn2Eyz",
  "key42": "5NrhEzzcgVqG1f9saCXoFCqowUzaFGC1EjWyhfbBiM7qpckSBGLSqfjTi5P4LvimctkzGHsiUYpypQFmbawFmLr3",
  "key43": "2cLka8wwRZbwXcH4g9sgvBjAiNA9L285rjYZFhf8Jekc7vFYR35MQ7ZXs9hPht4o9cTszTRcbA5cqFTmXWUXDU56",
  "key44": "2yZXSR1ZQunaiwtSQghcYGUuHAJk73Cu84GPvhmYrUdhgPkpYHJ86Z4DK6R5zvnYty5yBKdng8mNBtxFZ1aa82T4",
  "key45": "4dzbUDs4cKz2cqLvaotWd7F7u16aEaqFChBrGYuq6QKuBP6CRzvDB2Zn5phPg35wnpWdZMUNysZYufTKi6E1FnqY",
  "key46": "2f5wQWis3Mqicp8975DJHK6eZt2YshqgVRTuYzpUKkaYByUParLdHCU783iYM6kbag32gMkwmrs1hbYana6oXuVY",
  "key47": "3R7iuSFsWpx6ZUMACsnaCjm8LmyDGkNdSfAoT9kniAUAKt7x5mX8P7baMnqve2XU5UMHgLHE6BFkC9DANc6mMsfS"
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

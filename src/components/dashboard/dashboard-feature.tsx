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
    "24zeB7PHc7rjPdiPgi9x7PPMHMeKBfiYm11b3cdemonsXjNq45NcsJnJAQRsTQ5gGoo6qv1qiDaEd5Puvxdf251s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JS1Fkgxz4wdPgfBGtFG4oNxJQq9ArqVpuJQv7MJs86EqLTRurZV1eYF4TRBUd6gUQ13sEH5BcBX5a48N5ddwY9m",
  "key1": "44iKxJ7Vz74aBDh8HK5TMhkjLK52tQ1VTvbXgswezVBSDLZ6ojqWkuuij3QozmH27YsMWgoMMqsjQyP2DLYtbSuB",
  "key2": "3mudhnAE2ztyswmXzuTudc5t8zuTJyBUc7myo8tcXCU7rDu1KzKVTkE2DRwtE4SVrTfbusYjBAMk8DVjPcf5dxSG",
  "key3": "5zESv87wYArNVw8tdXQMeS1AQmuV7BojVJHLamCxUuL7AWoHvSd1FoZJ43aEZmo2fsErr7hjAfTA55zMHX1iwJW9",
  "key4": "eCD1wdsFjJWTgtgraovtYSuTmRaYKUgb4epVeTbaRptGDUACMkJx9m8xSc8PkwhHuKrmKQac4HhdBrLnX3uiX61",
  "key5": "4521ECSxgXD3rfeGGmXaRAmRhHCSC3p5DBtARBf66VRZHTSH8QMSGiU6WbjkKyBByN4h3DgwzEJ6TAYNiG2RXvHy",
  "key6": "5mJMhVuUqZeAECS8no8LFaCkrqv9ykJjyaTQtyYWysQ8buzEKng4Efysi3VWiuBwUqf6dQwfoniAQb5ecujtVkf3",
  "key7": "46zYFcNehue8RVYn73aWVLgKuiAo7Q8rMq41ax6DryAnQiSCC3W81S7m5wK6tt6EWxQyiSwWcpQ4rHxC15AcPCUh",
  "key8": "42eNXCCvZHgd5rmbwCKG4FCBV1HUnRvtGrwD8emUN2SPNU6E5XZdAbRpAE4d8cGucbU4gsjCRDCt54MSqodb9sYm",
  "key9": "61Boa7YXtwAc8WJxzJvEJyLsmZXM5itMvhSYebN72QQyrw2JYBJco6tZVyMP5fBoDeFk7UVuaH6U7tTMnQfqk5iR",
  "key10": "2yjW6A6g2cSTV1aKkmyTQbMtt25d8JHwMqfjH7iA2TCKpH7rjNTTjdCFndN9dAXvKA9sbJjj9t4Qknu77RMwdAWe",
  "key11": "5N6aBppaxx2gAn8K629tEfrrAqTkEqSGYva6xMmEoRRW1jSbjNg2xdX4ze7Sjw92qNkGQXCewng5yPjsRdiRKjRU",
  "key12": "LaY2jnqtL8zKHHtAPxXkDijG68i77aVKovY7Vm5uusK3h5nfeGDt9sjUkqBaURaH3QRawwx5tdxqT4hBriKPibr",
  "key13": "2pAk2T6dt1THUTxqtNigmVVFTG4BFMpKnraAzHQ2CAEEvvQZeDMmHjCcLbue5hgjP8SoKw6riCMA6dQKSwEjyGDV",
  "key14": "256E45Zh1bmfUvMjJe18uddY5QAepruhHuhicYEQpejQrgNfnpa2brBmwmL1qt7MThjehfri2iYMXt5geLDf27AQ",
  "key15": "5LGAuM61sBNEXzegoYU1jxKd3zTm9XC97w2s2KEuMUVRAXRvYuqzmBd5aCXkqwXkYWdLmZTPg3WA7iRKZVtfFNkp",
  "key16": "gPpWkN6Mbw47BvdBhCQhm45du9TisbRKGbxDZTNHexR62FMko8nAVZ1eVHUwLX1rt5RsZyJ6FpWCWSQ2kwPETXr",
  "key17": "25uzXntYYYjqJrYM2QsFtntNHPgXsGteq5Y2awXYZ3s6fqYaJdQVaURsMZZuzpakjzVFkkNn9yRBQxm5jtKMtLRx",
  "key18": "64fw4dTtinuWf5krTBkv6qpf5CCGQsmkAzo6GQuv9YvBHqTc3y6DZydEGdpUFcF2JKDadGD7nFTWYEnuEtyFQaXA",
  "key19": "4ax4TNfoRnmH4hp5DdbQCKmHyVpTCYLjt1eYXZQppf9QbdeNNRq7Le87p2Sks1iLwjHsdt6orGH1i7NosLQNsPPm",
  "key20": "4hd7PJyDtEGyPUjQuW2yBG9tjnarTrUrgphg7hJZJiE7TyVkkRTTNtTrHVfALCMaQjrvgvCsh4zic6VNJDFpnL6f",
  "key21": "4RRVNTmAc9y134kCAN485FcP3bXXd9hZRd3adDqw9nsdyhgyTXRsp4zFmkwaEEMarViW4CwoAbJBJRov8NUarMZ2",
  "key22": "2wWmHvqtNyjJqRxa8GYnMNSQVrQjQ11TKPJqWEdqgoA4q3PsFxnpKPHkSycaSECtnxXsHViW5ZVu2h4pmRUyCpJN",
  "key23": "3fqND3aS5BhP5aYiwGSGiGczf3c92ZqzCKBpTTmxje68Z65gN9ZoNFnAmX8hzZ1JXsPrnp89fZqyRqLWhgRexDAG",
  "key24": "EMHPZC9os6sKZMMMHXouzyDdTSpwqDMDK3JSK6AtqDU9EkWDdmLWnDZbADj7fV2GTFecXLzZgepPwD6D5d7YstP",
  "key25": "zeHAcN5kkFdYPE2vLbSRAtXgvpiqmuGDYan6Sr5QBHDFu3huuZEaf1wd1Q7iUG4rZm1rVY4gwLSH1wbNJQRKS9B",
  "key26": "2m3YPyWSDbwL21p1woaWaKKhDszsHA92LrRrr64cTVDR5rpKnz9DD4LygBSVuMKfQ6yFTJbgRn464pF7sLxZW3aC",
  "key27": "zJUJHYRPP76NQiLPMdUSWsXJmZ5RCm9xaGm3NyP5N371e82Ej7R4PtuQGHBp69hEnTm6Se6kW7vs26xaVUTR6cY",
  "key28": "5JUUdqYUpFsQazxq5wdHnv8JbkLmCAsoAczx7gUnTixt5sbWab8T8tUqJgc1eoevTqhdUNK5VE1S8pmQd4oGvFXs",
  "key29": "5VLon6T6awGMBRfvAPv9Uctx9wdZq6Cn9d41anE9yGtX3sF92Pt6GtGttN9tXLMbKoSNSDX82BxUDcd54dC86DV4",
  "key30": "HKo4vShbjgiY2xcBF9Ea6xQoy1DrFqViPB5LHSnDqkXf76cRBy6r3TirzZrZt8vki4tgx7ehNzcCJwN6TKyRXKJ",
  "key31": "4EuzHFWgbrU3xJcenD7W69kxjS8ouZY7NRib4UqpHHy5U65tYfrhZSvmXzDtacvWvgq3vVRr8N5uMs8js8cGYcB",
  "key32": "5QM28oq6RGogakJYsLitJqwNUp2f9EYrLM3tcdNczbjauVAmtVHxhafVb8JHmUsoKQSMLmzjTRvgnjrwAMVAHns5",
  "key33": "4yzsyVpkkngPRMm9JFgT7pxNZMpAbuRNHxTXfs4yH4t9tecWEcqEduLSfb3S3fH3du1pwvcHEPVeVeZecxp39CVK",
  "key34": "5nySyUK8ZugPsShcivtYC3iEpGt2ZCWNJb5RaScp8A1WQn8eGvV5Jkgcw32DzRkB9GSrkpwNiFwYudM1QxTn7nSa",
  "key35": "1bgvTGj8AzNqqpcatWBMj8vaVZRpConFTQgk7mYo59RF4dAxi2SKdug45MJRFsxSM9zXfaQ74ce9zx3gtB6sq8g",
  "key36": "4t2q1jSL7cVGUWQrxoWXXpL9yC79B3Avubwtf2UfTHM2cnGcBhj5cBdTeFKZy5Rq4cR7KbDKapCyJbrpU3RCRfxf",
  "key37": "3PkbvX6CKVeVLG9Ns3D9bMWAfCmft84Muchx23wSYNkFfZPrnUP2fLhRfpBby5TAHnrASNaK516pmuKaJm8KpcvZ",
  "key38": "47NwgQijp3k5ryV3hfY68tMUV835n86RYJ2SiJbm5KNAqTTmaMaASGfXHk1eRtDFofw8232L9GpsVN7aHabdzCmo",
  "key39": "2nzXgQvqyokgTGoWhVNobCpvjw5JHscBzLAij2AE8ad2VDLxMwnhhyHi8s5zZC1Gn4zyVYn1Lo3hTVqtjHzhybM6",
  "key40": "519rfkhdXZMQaTYpsNp3K71ixuRGFkkN2xSnzpTsGZRHUhXLUCEwvWYqaoMtsvhVBbKrnbXgH66UoM2Km7JTbDXq",
  "key41": "3rWRgAABDPJFcaiWmMnK7nAPx1bN2VTVtTKtC3u2YZTvW5VHyWdBVBCC7AYnDY6swmYaeomUH7vTyJp2VtBgyXgQ",
  "key42": "UFUT23MwqLqmLD6GRgWjR1ZJ2bFjoRWPyjsZzG4oShNrs3zHsXnZjRAGFWhgsriT9h3dUrXqtffp52GQtAFoVSb"
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

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
    "4t3hiLW7FitfwhikKz5DiuFpFGb56Gev3Wzbsz24ZJysNfXBJU9cRDSuyKak5d18JQ25fNNsaYVRYSpt4B8fzjEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swGypeMqGvFv5RLNy8tgtpZcv4xV3H1KMrUVboteE6xYP5NvKxM9kc1pBmW4rzcZgKnnp8a9rxf6YSVJYy6QAFW",
  "key1": "5KyNdQMZajMm38iJQCBZzw8rPFEubgt1FF23FySNXvwGTvDg4EmsMPfq7jTdZhyoyrt8nQEZH2RUCwZazRWVo7Nt",
  "key2": "5bvZ4ojqJMfv3wWGaE5u5pzqp5926zRakCv1Ney1H5tEL1doVvHmcAsNAioFmx6rWfWrAkjMyHsF89qh1PYQFQWT",
  "key3": "51N4Dt4CyyWgRqfHQERKpfivpnBd7rnzhahaKYQ8fC1WSzEu8RycAbjCkdn9zgDC9uCHNmoTtkyJZdCJ7r8bSXci",
  "key4": "326CTA5hvLoj8ZHaRhPFFWSUkChdbzVktdCvLUN5s21ixuL9S21TDCmwXaKbWz1uyrunaUp9GqXFksW5aMytH9WX",
  "key5": "5a8DL7nyZGvLPTFsnac46A5VHJZz4Gbgqy8faUCG69wmuWKU47FzVnpY2A7Bwgc16rJMGxuQMQBmPDLQ1vRDBwUz",
  "key6": "6nDQjgsviG9b3Ky2KEPDgCL9mNZoGX23SDypx42LoYhkJE4vU4gii27mCiiuV4RTtpZVkE6jPSHLoiSQbYztsv7",
  "key7": "3FNfvEXixQhJDexPaLKjMLA72dgsP86yzLtYR7dJSvm9gcqenuPzkx6pK1fzmofCy29KkeEgbdbH2omcZyh5M5d9",
  "key8": "kLjcLYLnsmoqpcKLm1zmzgcF4bhxKY6vr1xFL3xTKkeg3eGtJMaj5JcLfwWQtu1TETst6DVoj8jzatMRp5b51a4",
  "key9": "JknaeuwJnXyE1fLhTo5R1yD7yYpbwCJim5ZsZW3ynLUHsPobHk6mb43wxkfNsPJZrfLaTSeu8Q43mDhcsSk7c5Y",
  "key10": "4hBTPYskQhcLPHyNh69UVpCEbhjHcGW37anFfJUaTmLJ38EcrdGkTbuEDHUtwjRSAxziW9k3vvaims6Tp9G2yu5w",
  "key11": "5rKZRdL92Qyst7HDzC4xQz82xgSdSMSnzaBYfBS2szLBJcpKJivWT7UXWubdoFHHqCEpBPZDudpbaesArxguK6DC",
  "key12": "2nYFKwYzLoCHcYdAc6fjKgPJme4zoe7ebrZDMxiY8bNCHQEYVhxZV6jcNdqNah3Y27pnpSXq1AZx5xMLrTUG9SsB",
  "key13": "KFp6SokMuPGEBtATqVaQuR7itPPUxXNwzBF5i56V3H9QAWAQoGK2fMUYcbqfnSTyPybSGYoBwhE5MtGXZkwZLAN",
  "key14": "5RyWGZqBn2Sg9vLcdT4FJznjusZBF7DwekiRTH5kGpEv73GVf4cydKJVy4NPaWD5diAjcmFTKSrEM6DhVAr5VVa2",
  "key15": "4HwunQ3JwK6eMY2sJCwHG4BCFDFRFiobK9M6mLKDAnT9P3J9ajrg5s7rb5tshWVN2iGs9ZGZpdTGZbfmrMrA9trV",
  "key16": "5gaSVPg8TDbM7VQXKWx74XSAHHjWrdsH6jhF73a5qY2YfxTCBkTAvRqs3gECdkJRLMY25DfUj4Kr35nicnksT1PT",
  "key17": "3iFivoh45u85B2eQjbzo76XaffFRGQYBERh5sxwk7C9unBHyAqVhCVsfoea4TgfxFw4RCzBQcaiqej51trMK1dg3",
  "key18": "4oAUWfG5wzkfLcpePtQqkj8KydcnbCkgfDfWth2R385HmikahSXv8k7g6dbc6aN2RRwGZBnHqyWrmfQX5XC7hdGV",
  "key19": "5RqCBxxk25MuKnJ5QZjxjqLF7KjfTjiZsgTFvpiK7BurabwYWsvftPkd7f28viSiQwCiWFpTBFFBN4dCVgVcZSVR",
  "key20": "2kwjarPaBJSvggVhra68GsaZY9JoGYhDwC3QqUCsuvMZCccG2B3QK8u2G9mp8G2QTUEhw2mDWP6Uz1bVfXwiGUc2",
  "key21": "2uW8BsiPV8excjaJzQdTqeVUPxBj8PNPnx9XJmJ4tg2Jfkj6t9eonQBHmoA7iiWXmfpvPbdbJaR4gAMLQ3s4otQ5",
  "key22": "2CHEBJUWDGNS2GCNgj8FpPZq6pomRc84JjxFLM3t8cYEktgnGZUBmg4yEYocCaHwxUiUgQLzQsk7vxNJu3gjdHYY",
  "key23": "V1qNkzwLLW9Wm9mVpmTmu2dddXDkt8tfiSMCMJcdAPZ9TFb9aMnsA6S4LLyseb1cbViJ9ivwx5dfXUVnp59Vwya",
  "key24": "3TijTcZwaix5QGx11vCY53HjkVLX5ZWPenB4eZcD4LeyJEwtifTLfXo57sLimAmEKNRyppvse4RZwmswVJ62YsHT",
  "key25": "4yWynTKq8HkZPHToKTpyr8pEnhdXfHYKKXmW7nJTxjcEjMyrCnUqpVFeDrNfFzEPrRSggSfLU6721nZCvYKApa4H",
  "key26": "5GkH6bRyQtYh3Kr19DarztxASHykApgs5BDtDVvnNaW8bF1H3iiY7XYpKTWJpZwEkCJcN5wDvNkdcLBoEMLLntXJ",
  "key27": "2YNEqwp9Lazq82q6MPPZXvrqLBCaKndsfRYr444bjHUAY9b9X8vt6xeiVJkG1tN3HicXJrF9tc4p4Yent9AvkvMA",
  "key28": "Hu5QaixDCJCiD93QGzbWSD1NbHBazkLrPvTdyHsnkCCSH7S8BjKdTxYhvgpXiddgVrzUdE6YQUsroRgWm3e7SQD",
  "key29": "3eNtSUwozjpv5wVpcKNdVEyu91z7LoXSWXSCxCbW6jACE6kK1TduAErbqYFDUCMhu6Nk2MUFaefYcUeLkXdNbbKe",
  "key30": "3X6VkpxJ154qmqsWXmv598k2NQGmcBazjg4G3emNPHVP7vjekBnB2A78AU4uBivP7rPrfDALe9ZZz9u3s58ukyRn",
  "key31": "454XL31AoJQ52kArBY5qC37DTZoL7qCmbQLShU2xEpBuf8qLk5LwqmPDnwHbs3am4ytu8AmQmC9f99L4B5YzYMTS",
  "key32": "5VtvrwisHGHWoneXyhMy9DcG1vFMi1ysVYuYgw9TxZQHgreASck3qg3B35fe5eqb5WWNVmLNg7y9x8Be7cvjnAq1",
  "key33": "eUrzbFCZfweLV15mZt8fpiuEZd6ZrqUY7eY1yzJPCRUozSbJHygwTamDyssPdnw1CVAsSySoz3wSQnSiEpasKsb",
  "key34": "34cU73j67rm27ZkX2dQezXNdDSrSoqRLW4BG74efitqpBWdEiDi7LheUNqr3MJU5sEtvM3LL7a1Ui5wKdGhg3YW",
  "key35": "3TEG4mxaZh1LqKfyGZ5BQXu1G2J3BZwaYqhUumvdqoaE3h1rQcaVUrw2H4y5Qf7bt2tYUSNFj32YwfftjtNrvBax",
  "key36": "2oRKLzpAnnCqfEzBi6hRBy1dKJbAatohu2CMA3NTuuQPUXjLNFsCJw3SKtAmiq9UNfiBUrBcKmkHQwCSDcBpE2fL",
  "key37": "64mmm1Epv8WyPsANpxVWxVYc4gBbafZUVQdPuP9ZdaYWG3a3e42SWADBbSrfDgoANjXCiFkgovUBfoEKZBJL9dPz",
  "key38": "2NRsuv82DXfqRMExfquAwRwwpFxvG8HK7nVUFdy5btkByVeKziAbQiYgWW7StjiCSUMmcYHKvG2bZGASd5p822bW",
  "key39": "44A4xsmohefnZHbeGv9jgxJ2Lm2SKNhB5FEfMAmjur8ng9ohbpSJWvTtCN3YyjLj4fonHcuqzDKhmJq9TaDjXkMS",
  "key40": "1HnxnhutqXHasJNSEMeUW7XGYmBo4hFcYnzdRXkBsEJRHXQunaADSuA96XsnvLU7eEfacyPQXh7pHVB6H2Ryoce",
  "key41": "4QRJSsG9N9xjDd7kqj7kKBLtTMn3TAyAJ5rC3Lv7LPqCuHykKcjM3ijqGKU5AFJsGRZeo5AuzQhK9QStpQ9MtCeM",
  "key42": "2frQe1SfzZBTcUnJonxFCQx6j9ApoGbVBhGKbtoLgzG3PFbkR3f4Agy9R2GWTvQaCcjnBP1n7pCqbHjfj7S6Gytm",
  "key43": "6dxXasfnffRGS6tZrb32o2FQNufu31bfcH1BeZfKMK1PnPD1LFf7FYugvEdLiFNcW7wbKxkgTPVyTBuUe657xjB",
  "key44": "ip61n2XidCP8BHafNG69Jt9R17NyaHKZSGhpc6dUY4XjSxTGJZPThK8MHTH2DUsyqTCK1JmHutG3YauANvqeHZ5",
  "key45": "bUjkMoJSJs1kwpSRV7MvRHgzC2UJ4uomwKS3JNcyjC6rXqu1yAnwkuJbPPyWpzZdSgxVSu6VsM8jxVodjii3zBe",
  "key46": "5J6n5467UeemzfwdfJXUqe5hy84Z3xAPMFiWJzj1gR9mGCHLp343TuaXhiPrF4nemLo16Qx7AKRWRbrmy1oCKNQ4",
  "key47": "3rVp3YuaAa3XSTzGqvT7FcY37PfJq56HcWD7sj73FNoBC13yeiPAk7hFDEvZUNmtzLvHY57BixxY2ZtWKCHavJBX",
  "key48": "4H1tags4u2CQvHhwR9MdKjsuxWURAU2G15udKxveXtF3v45zPKJ5sJbM8Q6Mb6JZb414aaQL8Jfu1rQmzvZYk7pn",
  "key49": "iokMmLwJD9HzriCyyHUxYnmuEtzsDhZi6faEkPxn7beALkhwNY2yuAc5Brm5kTAgeh8n6GR3utYVoFVnNXU8Xmb"
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

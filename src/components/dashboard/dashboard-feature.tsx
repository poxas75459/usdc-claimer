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
    "2PFo6EHC5FK9QmRWGs2D8TWnqhMdJwjksgvtKp1UMTWS3iARQy2roGW4FB4tZAk39b5qPfWm7CcRSvk4RFZufv88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zh8j8oeemjq2W9AVHUHK6cXjnih7nKMLTejfb7TJaNsYzMcq7Dce9j2eKC64P7BUfVWxQMB2SKPXUYUMHWHXRfR",
  "key1": "4JyPiAvsvraFHw6XtDN9cq3x6MR93juA9aDbc4YfLMDmi4PUDFvqFjFaMdTGsYJaUDE9px2JKc2DfhN2UjQxQNjY",
  "key2": "4MJqhhfAtL9jRCoGnrxvj98j3vzCzg8EM3iDf12k2EJoroVYdcJNpoM9vJesaWhwD9YhqWvcCpQxnvrHFEcF8pMD",
  "key3": "5XyJ4syVENDWPbxaGTHK5BBXSME4nf1Q6QPWM7MBADAqpo4jSFdgbML48jC3zJ9iSV6Ti3zmAWRLTWH28zYVSyEW",
  "key4": "3VaZRWAbSDbioMNn8LEH77Uvb2b95TukRTFmUqMd1FPtiAma1SDagm4MRX6KXFkjiGy85SRByCccYQaVdmfpuyaP",
  "key5": "2269K6eQAKKm4C4Epuf4J7tjX8KYeb5G1PNeSdxrJzZjC5sJzsTBECmWr1phfhPwNLm9M28xam2fmbPnUnoJGdeB",
  "key6": "3R8ShvMdtGDizezvm38yEkADqh2JDHmdU4REtHH8EvzHhJzhD8YNpNsNfDKLm2KToAZ4Mqq1jBJ6aVnY6W5W6yTV",
  "key7": "2gAZSCuizNDSjAYpgmtHmS4Wnp9BLx3Ew174qSB1M2aNvP2HN85CdevZGdGMYaCktB1qobqbU4xyFDYHmS3nV7Zr",
  "key8": "5WXfyL7BNoiUekatPn1KVTZEayGXEnx4DWRUs7LUtvxarKohba7s2k8ZP4wdBtXPyrNLCnkwKvhBUprD75j1QnFP",
  "key9": "5JwVK8LLp1AakffQCUXpASgxsocjAAtva5aHX1b5W1nkUB41f2Qy7Nx5xBZhRB3ZRgxRvmqJEBBS1rgnZPeD5qv9",
  "key10": "PzyMrwcz2VWdzGiBXPEt4532GxWVT2dMnjM5ZtvzfRDEaenr72dJJpBTidBimumJQma4S5yzPsqjeKHFZQ6Z2ri",
  "key11": "ALWmCJcXqBMpnQMwiwVAVsdrj5Vpep9pJeQirsUKtupd2QSeGM1Ep25HZQdiBcZp9wjufmbY8jqBFnAvuAAdcnV",
  "key12": "2qdTf6ft5qmoPjBJQ63xPnUZXdTfL2LhPRo9hTdGT5iTAtFu7nEsN25Ct1ggjzT2wrJeynLveG1Axv398Amfygz3",
  "key13": "4vBwFRWQmmHHmPszfiozKQbULw2y5SXgJHH2tnyTvMsQATmpLJFTQrhmzjjA2iQKJ4VT1LjSvJfAXTJq479bZxaZ",
  "key14": "2zSrsiJrZYWNAxWSoyKXEsaZkEFWxytUAdLpPaJejSpvwrhHiVfCQn4xiLNCL1uVqQAYyeVbcSsM9f1uLNvegXUR",
  "key15": "5tfLmFoEKcJ8nRdrB1jxnDu4ufWsh39xcrcn3kXzW1u6d5RNyAHJkW1WAPaT4WDVokSHMUoAvzVjyPChGfhX2bPW",
  "key16": "4KEttvihV3sfpN64AFSDsHcZrT8EnCdZcNtebBYJAYUHE1DZPHH6pZwPwWzxu5utj1V14A8eyr5ieXP33ZNmbJpo",
  "key17": "Yz4ZkZodxDqudSx8oxtoSWrDWa5ZvW63zaUS8Q1gc5y9hECqKgX7EKco7fiGAcV3Vn6PZFNhrrecYVAH2rcMggZ",
  "key18": "2JL8ij3CJzzvKemCzUa9JqCrV2mFWzUYokuXJL52NFgJ5Zj967nSfHY4biAcRg8C5a624ZwbzjRXiqWi4bepkDri",
  "key19": "52cVnCSQ4zRMAgCba7ghxRqh1u7SWyittLRE4KQTNChja7capsfpe6p4UijrFp49TyQosD6AR8JZDqvUFsU6o42J",
  "key20": "5RqQJmzMT6yszedn4tWzxv4gq2YXpKrz2dNG6BdHqWLa7i19JSx9RMFLYDYXrVDXbxgLr3ZM9WGFWeHHhZXipyAJ",
  "key21": "5eG3GQpcGvkpdHE4mto3HwRRNkB5RAzXKTnN5RAC8nctoHcr64xSBQHyR1XhLJHkPbvjUNhUgvzPsaEvxtkqLUvu",
  "key22": "Cn7oDw6mB6AQRcqQwQkYx3oATvtFzYd9QtyFKG1Rc7BLy9XPhwDrvLZYLLbLNQaGeHsiMdQCo9rr9epiezS2n3a",
  "key23": "p1azfkjWpzTxNbaqVKciXZukUkdBAkj5MLzHcCXyJDGXASLxmdpJnyxPBJEHMgzviu1PeLmFCvYsZ1yZgkonAci",
  "key24": "2tvJRus9LaRU1YVb24t1QucftNorvoNWP7nKUsXmCMNgeVrccbLdGFvVtkya5A5ptk8XQ89yBzb8qkABVD2o1agC",
  "key25": "4gThJzTZ3U1ixyWrHezjK25ReLMQ4PeDazcGYXP3hF1JUmd2t7NytbVk5aXiwzwXRY6wasqMyrZW64XJihhJonKj",
  "key26": "VyykarM8RR4N3ixLE4BRUXd6DLHgZN9Gs6BHTxikH1hp3zyaJpCk7fgvKAUtHuMznJ3ydVZgPKwQPrXnWbxFcVK",
  "key27": "uWjZzeGJZPUh26zhKQHzghpLqtThtEcPbe4jUpVz122jZrTEaN3s91kNgtwUMHz8FkLcjp21hNLQ3Lf38HDdSv6",
  "key28": "4ViWrb1CxEF3P52SvGx8wVc7qnDrYEkFyvoew9NUByntuUvR21PFTCWS7Rg4aJEVbNtHjUTyWcgDoUiCb4rKZZXz",
  "key29": "43HNRvP2wyLgzyJKcy66VYhGvhLdwbF6JDeAuWHpStjixTDPZU8SpMr7tMjUeoxQauzQfSMzWR6q6RztYkFxraGA",
  "key30": "3FQDzWQGejPrCRSBvVE22DguxV2CfRXq7iLNQeUtcPnNLbLvjvg59dYAo3G8qGno76jG6z5nogRLWXzDeVJdCyZt",
  "key31": "51M72vRFNB54Ymh1riDUjjY1Y3womQpFxiRa4ViJAjoHrzt523dd1kHhng172fmKUFtyDbkr9cjLoHmM3bTDvvp9",
  "key32": "4gt7EZbfKEGXtXgopJavRtyRq2NeW9sRj57vjfEnwuJHhbc99NJxs6Sg8xxrvq3J9YPj2XG7cWJk9nL2ATnZM3TQ",
  "key33": "5oPwGtukT22hT5iN2JetxJnBgvVxTmx7YfvwaYxbNKhS8AygRvPJJqn4QLKAoKdB7NwYmVKV6ZUgHPfzpbuSaXKi",
  "key34": "24NhUBokRTziDpzYuCyg8MQampSmSjh96vShFrtebTgPuYMDdHX9BMeoHMYGwoo44HPhu6E9aAwNh6BvnjjbAMbj",
  "key35": "2CbCFfPmQSoWsoFVf3d5utbJVanCCiqTZi7e6ufYm7CHsu3mkLcw4Pdm568xSCYGLCtosytS57dJBT3gQ8Bh3SH1",
  "key36": "5URhzqawnXueo8YHfpJ1z1pxfJnjDaAGiqa3oEg33EATPhNTnuo7ovajaKWePgEyvTSiheR1gjR9cvyZUAuS6tQM",
  "key37": "41xSrz3stSwLDpcsq3Cfg6duG4gQGuRXWYVX7kkM2aKU9ujAVSyDixsYVVvSyLiufnUWEgVjXrCtVesozxfTbGhu",
  "key38": "4sroceMH523WggWDAmz8sQKfZGeZrYiwUrLDxMwFAjp8Uo2BtLFpmuVG7xQxX3da9kzbizBxBmtXGSDeAsLBnvSW",
  "key39": "3LQsRhqUNA648BgZcZRy1b1XLCwE5YyCauZJgcXiBpQX2MewRS7GFa5Pes5K3o1YyyGo4RUvgnfjsRtGb2nya55B",
  "key40": "JbAMczNZshEEAKB4R9Jfsg4gUA6QwSRL2Bgc2PD2F8nKXnhnwmTEMz5s2zJFSNTHCecSeKEatmyeYMhDGAVYDpw",
  "key41": "3dix45Av3n6dBa5XCeDUYuwjdQad8B9H6iC4q9GdBtR91xJpWmE2wuPc8k6j7bnVNgNJc6ps8pKim7KBD8E7Jfp9",
  "key42": "sBTFqrx8tmAVsGwALmbXvJfebhxKE3rbXXUBj2wxVNvPEf7LboHMQanFYdRncy7nhfHurck7G8mrnyzGSv2LtDd",
  "key43": "5sm74CtvGU4aUYFepAu7HXkuhFe8vW5uiHgDV6L5NzQUC1LKZ6GawMkJ8BvMhUgCA4XnCkMixouxXcW1ZukUgQnt",
  "key44": "bEybRqt6ucvJrMmRpw1HYMXxaUkctCHDPdEAvzEdpwzpsiWRXEWAyeXAkYKUe1qkgzhR3HVQaeeUNa4gitNM9D1",
  "key45": "5tWsSXo6F9pGzfDpHuNWe6UtJ3xmGHnUd9dGeqqeYdFqh2G1Avu8N1unyNWTALYhfU18MrkYujDPUDB14Ubuoj6g"
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

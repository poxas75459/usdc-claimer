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
    "4xrgNF9qhQfzHxpar1TKWAmfmKAVSyswXQhm5tH2Z35oRsEqX7hAfLz56PPnJ1TRnbaw3ZpYXVdDFdF5krbPSq4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBXiNAwzYjxMfAhQiYraqmVyzKJmAfWXZhq9vfiQ48tkGYkXYFE5Jo9cEFGV43T2ePYz5pJmoEhpZF25Bc4DFgA",
  "key1": "2z64T2DDDwHrb42SF32KjFDYHPP6zewgmEaeB2eYcfizCuo9LQyc3QYTLEevzso72wUcCaqnpY3sLUsUK5buLt97",
  "key2": "2XhGqWYHrzjano3qTndHtPV85b81Z9pbmirgiWt6yesA5B5LAYTJWynwXgissQHxzopsbmi1VWKZpYTMn8tjsvFm",
  "key3": "3LsmLPL2D28fB5vKmNCDY2R1NdUscvpFyjssaRGz2XkozGKwdsV3SQZtP3e6yLLBPNiYdkVNbnXfLC1FGj1LThaY",
  "key4": "mt7bM6nKUGj3utcPY53GZHw8jJpEh6W1WShKXhy2KdUtEjemMoBPuhrmx63rG1iUQbZf1iMFA33UY4EPizccpjJ",
  "key5": "4V6YYqsZcL31m1s4U48oFVbBEtbJdn5zVYPsBoFRMD69XScJTSfGyLsjGsgj2v8ExdTjryyKbXavrurnNNFFV8vt",
  "key6": "2ZXtrWeeqp8ZVqsCx266BTbDYgFhZNf7QvW3zKTErPHZLabcvTmwszBrmvYKpeNq3PGdFy85r2Aeq7bamW6gbAwA",
  "key7": "67rBrrBg4T9wuwAQipSmW2HWEhsq3CothGcFc66SSJ46seGFXAQFoy5NyvMBJfKKTa8MUkPRdBA2V7bhuxmuo6uH",
  "key8": "2Xnas5UBib9ti3uTWaB1G6nMjF2u8VfyVmemzUDoMuXJnjKqaEFwYDobv374P7ftoxe9aQjYKDSbVzzCLjrQcSY3",
  "key9": "yDufinbMVtt1Ck1rvVu7fW6ybudDH4sQUsheGFdFtadbTho1EW89HHpeuELvKn1CxARvUv86ZG1Ty7TyrMWqzja",
  "key10": "38u71bDiLK45HaZHLSd2Tkqaua6aopAinVS99ZzHv6ZXF72jbA9SfMo3mgPXhdKiD2Lk1SRDPLXE4q4NjGJUU83N",
  "key11": "3RC5CeiWNdsVjZRMe6SkivBJxytxrteRsL8K6656s4tx2yhri3cfcVr4Go7cwGwRqeVg8NoLBqAk7mQu8XEkkgVr",
  "key12": "2qsTsvzh1uuUtniK4AVTwBrc66YteeZkpHNZwbbq7ueZfRqqhDBiTs3hPbRvA26UCx1w1u9hm1BeM5f9uV5c2UcR",
  "key13": "3Xw3tiW56tMNt16Kgw8xXGAZYqDsLEXHTo712RMbc9DyqtbHZt7PbvQuPq97U5bVARULrYCPEXKJzUxGhG4wwrch",
  "key14": "4TeHJy7Ymf2TMyLnj5LETgwZfLSPtY2Rk2LncNBMUYNrpZ8BeTxPbUfLBf83KjBy4R4HoE9MA2DhgCtUKYj8edPq",
  "key15": "4wMn5QFraAAZdg6AhnPHoYfDAQVo11kM3PFM99mZ2kWksGCgc4seddweUdAhr3oH58PgCCfBvsYfvTeCkDBydKsE",
  "key16": "4ZtXRn6AAfVcqeq2ed5kvN8JR2R46d6fKSCYjBXTkyjqQe2qppUF3YQ5qBJ2qPop8PxKgi7qnJXd3g1R9rc5tCCH",
  "key17": "2Z9GCNXEhDnVqHHPnm1jyzruqZLcetGWJHqZfQn82X3SobBFTcf8iPSsMJ6SFAdEFqEgnouGKD5qtMkhYuzLzKSH",
  "key18": "49YAE8u2CMMtDrX2ZxBBsRHUap28uLMhLuPkJGnZ7bdjv3PHbPGsCMbvSQYijas6XAk6StE71YyFkmnx4Hof73NE",
  "key19": "2jw3FCAPEBM7u59woPNxNvcTDUReVUSjCnX3LhLFJotVqBLVXzWwtEx3s79hSaxbWbRX3dPNXkY4zJ91UKxExTRa",
  "key20": "56WL9U812Sg9En7i3s3vL2AtNu8HHKSLYAhGnjpce32s9ZqoiSFLrDoiXmcz9UXD2H5C2W6XRybydSDkbgPynRJS",
  "key21": "5CGNVJg9ibVNzpxeBmVsbN5u7iHFLWHCubAz4VwWSAiHsey79BeqY4KUWTTdxEYswRtRSFY75d2kskgm3zBGMKoj",
  "key22": "4GV9DngR4XvnXsA5o67a6hht3GjnJhMD5VVjGeiJ13pCCeCTqes4M7251qRvUiG7pvKMfXYrreFh9R99bRP5B3ty",
  "key23": "5Ls7doGkc1DvPhwg3Lrij5TxC7DhVCbQLDQXXzL9n8M16drz2YmQtjEYcsebcfiU2dZvk1ozQwobrvCv3Axwyiaa",
  "key24": "MZzTogAGGtNLZApTm6SMaRJg8s7XSaDmXRHyfzsUDeW6xSK4XGuiDsiQ3s57pauPbw1Kc4UzBu4H9y633zqgNF7",
  "key25": "53rjaHErstacdgvtTNK8KUpqQBQPceCZ6ptWTr6NwVpyFKWavjzbjo2Q5fGbdpuQn65svb3tHMY7rvpPhzEbPrWN",
  "key26": "PuKNQVKqiT8iGuL1KRii1DMHz8RQrX14gNWP5GWR5rwHH7ph28bnvm9mADsoNRmnnz9zvjNN4oHQSHsbbxYxkuZ",
  "key27": "w1McWo7C3m1y7zyX5HYNqAHDF9mAmKzfSy4uvC8c2FAwQ8neQndUAhLvGQ3Z5raZDrFuH51YGsSnG3KuHPAMu1N",
  "key28": "kqUYLYPnf7msb3qLLuUXykqymevoRAcowCfPNg3zTZVcCEym1PCyuJRVuDDiXVkNYtmciGRM8TE7yHhNziCSpnj",
  "key29": "5aDtYgsZ4NRtWZXoU6J6f7L96d8i3zubNyYkqHLWwjh1FGihXusfzdp35Qc1CcSpG1Vq3fc1BybCApYVUicesJCG",
  "key30": "4GcL8hxPAeGwYRYwJWppJDe1JAD7np86jLXp4AB4ybxBpRH7Cpi6ZipSiaXhf2m5u5foxTJ6GKFELT4LpgAVrUkg",
  "key31": "5bqZJkWZ7GfmVMckpcoshAGnzJ3RzMME9o462XHE7EETgY8MnPDtV3dXmx26tQ7mSH1raTonmkb4AvTqkGUUmMXz",
  "key32": "8BB1JbLJq5H4cQGJ9quxu3SARZxHrxFsUG2uBv2dgkAZvXpGZHhTatYN8SViTQzqzFeK1xj4twHL58kWRxQkjN3",
  "key33": "5i5ZV2ZPnSbfNHyN8GGgUKmJW5eoUfFzYGaJCRcNFFnJ6Gagxept1JUk3egEvQL5rYtyDoVbcrqBZ3DpsG3izPLb",
  "key34": "51viskugHSz4Hx1Yts7ekdjq3tDT4D8sTFJVxwsaLbnNbERo332xFPc1UbcqKL6LWHzoBWmqdizo65u1skqzFuqd",
  "key35": "21Qdv4fXvis8jbGzwhGmGZaCaZ1KMkFJoKBhvbfV4f5RToNWkWGwddCnEMndcxK6EefhLBNbUfyYbZEi8Eyiu3tL",
  "key36": "4hVgRuGNPobdbH5V1WJwfEWku345BjoPXF4B3eAacMM2Z3EvbgKZjVVJkD2obTZbxZuERwkXfbDQhysaf3YGxq1h",
  "key37": "3i4YqjLD5KncRo4VtacVCcLXqaGU7Ne89vnMsYRa6U4LXxrKV4yQzRDbHxBKQfSGNNF5fZQZgAUSu8pwfwqWVDGy",
  "key38": "59Td5h9hPeiLEv1r9pxk4hPbp4nQbkLHBaqMBkg3EEd426YpAGWnuSDJ5m6uonavN9gVQinYQPu1W9BspoFYGfDU",
  "key39": "A2Tw4huT6aNZ3VKaqC49F4wKNTckaiiwktk3Dpbfu2tkCYkx2j6u7twLrc2n6HPR18daxn7g9u3d8ZMmAVwneYa",
  "key40": "2jQ52hByBVAg2o9w4QSCgbedAkj2Dmhk5AATdK5agSumx4gVjiufcaXXeujE4csTa6Dxne8HZf85h3dmESwwmMsr",
  "key41": "2woGPz6W1zZgR73XSaYx7o3tJKw87UcW8mSjM6xb6bbqhB2PoaCFpeivHNmQhSoJdTPmjz4nZn7157uJ5JvriXqW",
  "key42": "4Nkx5UXf4GJifpHNTavyWcoJV7fcK4vYy7BGATrb2EmaJKrEqaAdrym5Y85Gt1VWicniCMKH9cmpjpN5QXrN3g4g",
  "key43": "2XKhQ6goStUPT32FH7GS6Lz2F58tdZbV81ovxvpR4PER7jgPwtYc48L2BHVHqBHvXeGpjKkerZAMj7mgHKvJKhqD"
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

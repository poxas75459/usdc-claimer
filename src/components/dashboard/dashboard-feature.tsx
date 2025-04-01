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
    "5LszBJdqTSMFwVSMUBarkNSgtA9preDqJ3YmDJy5h8oTbLsasSLpHwff9M3X8UKAo77PpFd8ZrTHGPujpZAYPPwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hd6JfqF8uySXodGMruc3KAGRkudQtLwpxc4jWRqMtwoU6DXypZS26trgraC8FWtA1xAnPKrHFMhHsnuKNGqNVSD",
  "key1": "491SXdWJsxmbcSttZCgVt3KHZLWMMK9z4KA9xuWE6Cf874Bpx67r4mMxvjwfURdX1rhW7qbcjuVxvdm5Tp4XMeTr",
  "key2": "4kQM6UxFak7Fu2G1B9DHTbKjxYy1YN7R14WeZbAi5woR6YWZpkkmdGWddbrvSgVZTVcCFjSXHm5dDu139aS5HKjb",
  "key3": "2qNKBw4wtQgLx72qm7yKgZD2RjphAaDYtoTfU97H1VnceMVWz1xWdRot3LzBPT3ZRH8QJbo8cRJsnaoFrjTKTWZN",
  "key4": "5NCipvbxMTSWM8SbHxg1UgnagDjeb426qh75iN9d7bkVKe8w9tRzeZt5LovaT8JxDf9H2DWF7TqFabFoFW9FNrBn",
  "key5": "31y1eGcB983dhi8xyAUEct5JXh87UZtvG27W8u7r1oAgR9thsbRVD6VNPscgsRY4pur1zBRrPVKcwu3BhWDsVQNF",
  "key6": "44pTzoyJR2dHLy22NTkQm3zngj2VUAV6oxCoGiHU9qTjzXFsuKSvEPMSRVqDCsZcTnAVx9Q8QBoWehRNejkZNi6o",
  "key7": "H5bqfThQE6LriW8GsyaH7r3YyNan7yewLX5DhcVYR2mQk3zT7PsK9eg45tjtDDVFiD5e7dgnEgmVhh6WJByaeRv",
  "key8": "2DjQV42a8aUsN6P8nBJEY3cz17Jesyi4m2oA1SMY3idSYdUCZUZeXHpVQuF11bH6f1Lhmgiwtn49gSp1zVXXnjW4",
  "key9": "52ggfvz9qvQTtTC8R2WJkvnxmNjVw9RjzSyxNSgsSHfex6DfNxjDLWo1szhjMjx5XFMoYbJXmbf9EZEzLPFqGNb4",
  "key10": "ACoRYKihH72rdD7S5q915X3BsXvDixBTEGf1EJCTn8Dfrjmz2ZENikk6W7bJbAXeMGiz43wKStVrQRgPH9yhGvo",
  "key11": "4D64Q3wfJGBBcwZ1NLaxxFrQHGiw1pk9736ZdgVybYAyKdSfpL5ZmaX2VszmD8sQBQGbade5HfrVCRHq2zFq7iE1",
  "key12": "4Fu4y4my2yhtCMoQHGcsr99Lx9DSMLdnDhmGmbirVMYnkTLcTho86cKnyjB2FNjagHLDufbamZpGYLftUgEryosD",
  "key13": "pMa9dXYj6bFkYY3Vj3fDAAAj1z4CvXg7WYArxfECyN7AiDz3JE5fwLuEi8sVKg2ZUm4cZaprmxcWq7awCTxFYJT",
  "key14": "4MkAJZm5kqo3bjpwnotyzJohv9LwgH78Y6wWB9euW34csYJ45vB3YYwis7zWBYBps1PXjgYTXfXCuc5hpbM29uzU",
  "key15": "V4WiCUWnm9CUj4rXD5YGBNJbAKWT7xKsw3yxtVwTSNSCprDurQAbv6WeiNHidceSVJnJV2xM62HiGLd3aPZvaLG",
  "key16": "5stndC3YrfjjAQvtNj1VSpqAFjAg2eYQuqJxc3TChzB9dcVzkxeGsErR5byTRxdYjHRQ4qpDoMdVyALrWGjYZRBf",
  "key17": "53m5rYAanVbmjx7hzygb7fjdQbCqyEpDymqPLN4icLgdSUEmqCTrXAbgw4LwXGJcHPAHK2vKbzqGzch8HzKtnjnr",
  "key18": "2gdTUC26WANaBD42LsxufhaCUbdpwvrPnoWdn2RURCCwSHuBDPDQtvLoL1zrdFNPm6grqk5mrk5dTHNKRXCoWqf6",
  "key19": "2RXkJV1A5NmuZm6FYJS7HUxJnwu7wCtGXpeNNiBVHE4AUosCAuth6nK1pVFPnAEBeiGU9D8wFNxqh7nH8fEzwMn9",
  "key20": "gs3LGgFCv2YkQa8pdF4dATimd4JUPBRaQ9NAs9Fw9KjaPKZbKV5LjLEFa7Sq9kagDbWrrv2KdEAAzJBMc9tkF5V",
  "key21": "sV394Cqw8k6jxhWN72Gn9WqmcZGcUU8WeAMRfyz4TM3yXzFvriBa75K2HNLT32cCQqxaJKBcHBgPqym1D65Sgza",
  "key22": "4jvBJEhJkxkmxioSLi5FGbRw6vGkeYN6ZRjUku7jDzNPZfT4Rv6TJZGMeuoFR98ChPDjn7VybJvRu1MoaDLXV9wY",
  "key23": "5n1gKv2vSf3qtSQYTCrzfBe36kiqgicW9ychDJVLpe4xppY4YFcRnxKX999RX94tYfaHfNDv6kJXMJs3fHER8ah5",
  "key24": "42cKunU3saxscDogNpiK3XXonsPKWyAhQcLbcqheUMQd2gyrFJqUHMTDBpkbWK1tr3JVktskvrayNH1KjytGFVwH",
  "key25": "ShEozsFHnXuhfrTeTzR5kid2u318qnYZPhJeVxUT28Uw4Gf8U5qHzXrin94K9PbsRGyzvDpx3QT2ws2s28wYQvh",
  "key26": "4Zg3mSWqzunQyvxnLDQBoW879R9cPf36EY1HkFVQmCxweAGPaNKzy1jCgFksVZvLCvMQvJpPCnUJRNhEqWsYNiaR",
  "key27": "5GBRM89r7GVj9SREf5j6JYXbweoaucQSWJ1gcXm1bZyB9Aq52TuhYYzgLvaNGdjtBLCKnw2kMWktrCtbfwRmyWWb",
  "key28": "5FYQFRXyeeWjtBqCkRTpjTHp21NmQ25ExgGR4sSiuL1AMmH5Db7HK8krfBZrPdAsRDCFvebbZg2t142JjdAGkKZH",
  "key29": "5KBvY2PKP6bnaGQDyorqANds5XaieB6a5g826oWCq7Haq55LQjU6Kaq79BzNyuSKw6tmxkuQbFoMigTHVp1V5y3q",
  "key30": "DCN8SCqtwCw4pswqGfMkNAK6toFXdJ2YkkyZGNgqPjrMS3tz2J3rfE4xJh86ng2XLBS5QiAnuoMbtTqFawEsYdM",
  "key31": "2o5z3J1X4p8eXT7Kq14ZSSJTkUMKJcfpcayDJaNnXGpmkU7QGbaeg3RmFV7J77kicezN6yK2ULYUeDFZNArcEGkm",
  "key32": "3Q9chtMR4rJZ1ewr6eNoCQGUNsTdXGpHQyeoYHpRCBi2pR9F7FPu6Rg4bboJ6GPYu6SevTBEkJZFyn3Hpvdcigns",
  "key33": "4odx4ygMqfKCLZBAerKEH8g2Aq4K4oTAnnckeknQFTB6VYuJNHrPaH8TrNDLYxhh24nCiHCjdu2MkFevCyPFrZx2",
  "key34": "2wkGjV3yLoCjihh5EH7vZkQE9FHN2Yq2jpx5rxGi6HJ2246EWSq3bwYUJw4FEoH4Qx9DNrn9AB6rHmFcbi17BPXy",
  "key35": "3gYjQRnEmciMy9FBc8iWxSyb43ykKk1AoywWBFJyN8fS7PA6Bnpj4qFVyNDoPB8aKoaDXsp2p3KzMEgG6SwSoXN",
  "key36": "5EeiFhYcNo1dvJxLdv8nZqWZbzunN3XjXP5DiCMV9HVDLKAHnkRbmkeFHSbjVx26bG4LgaqH2pmCCwKBFJycUS1Q",
  "key37": "4mmU1ruSmz5h8MNphpE4NXsoBG4muZxCfcfoyF9Nfs6xSz1J9HKvN9qL2BjXfdqysoW4zYq6jqM9C6BaK9Wubrgp",
  "key38": "3gZX4eSz3VkvkxpTxKk36WtZ4fAgUEpgebRQg24kxy9TAFabCwnHwJUsk5yvicgiqAxTkLQwTmv5MU4X2jfwnipw",
  "key39": "4YYj9Avq4G9Lp52VC6rFKrLHHV6tFe4Uojp15L32v4iuM14jbaBFNoLjrqAzLNmfJQcBJBn9TXbvFjaypcQW8gis",
  "key40": "Z6sMCs3NUxU2TAc2DWEBfGnbfEgMVpDa3S86xRq3nEdzqUmFsYDzXtn5ugsomtw8D3Ps96YVvKTP8AkBejNx6B3",
  "key41": "4ExXL6XCRo79ptESi7aYeSxWHQWaeUckn369KvJPb6tefih9mJY7BGEHRMsZ6EkV5zNUk1s7dVZBfBjq4dggW5qo",
  "key42": "46fo43YkXHj2kcwbiG1FVqFvnUiqkk8Ev6jmSV6zLTYdotLXMbeMXeXStCEMuoYD74ik5EMh1ghZAGNg1USVswVD",
  "key43": "5NNLw8MXKjcFPmQzwR8Qihyfz4heWtVRW6yVoEFBMA3KR1Mkj67F6CLGTgt85cjWTYbh4G3aj5PZxEwtaXLVjzds",
  "key44": "s2wsWCmqXvLwLj26gc7AVcQnGYHfbiosTfSW63qAi2BxsG2zvVmYZ8RpqNs5tbVnTRyL7kMwMbc1dTHQ5TRHrv5"
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

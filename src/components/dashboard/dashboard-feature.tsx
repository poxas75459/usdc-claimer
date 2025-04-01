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
    "5VzuNbu2ndPYZGSDBLLc153a8mjdjYgNkTBQC3DWDwdv88Q2CenTKxGRS5g7Zf794879BhCF488Vy4VnAgppnyLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fRNXwmayufWxhkcsg9J6MpZv8Uj5uVqdYy5UPeLYKffUTqWC9eoXAHoiFftrXw2Kn9wdHP3QMSHvQo5sKfqjqm1",
  "key1": "3MsBHKPeHSWHydPwaMx5sjUdVgWGT6PxtLLkiLDmbZGMVmjz6tTvDW3GQcCYisSumLF2AqhK5d7SzpANqBSqeQHe",
  "key2": "32FwTVLKhfuTH2rjnHhofB1m88yam7vhLgiRtBk52A1aakGvwXDd42LuexBX7teiyETm3kegJRVMk3iatedmPQkn",
  "key3": "532HZS9fm9VbJ3i2BhZLKrG2kctWDDL6TxMqTwkhEGQxTifP2PAuJgGsrGdAnK17YBTyMVz1MRdiqhgReQ8b6pGs",
  "key4": "4LX4FkgKiatFK8vGNoYzKz6qX4eM7P3HYzdrzWC1j4Bc3tV5TGwKUG2S8UJneyY6EFfA9y4cVBDmYCVG9tBaUeGb",
  "key5": "2aYhpt3MHLa7Nj5XKwahBaHhVzFqGnxWJck5XvUoS9zvftQUHAKAp8yQqUsPd9734cng3NeDiEkJAgWA4ehNVdGd",
  "key6": "5o4Tc5N2SJCjWKcDZPmUsvGipspfx9Lfap4hiM73TEhm4U9ePSeq8gjBeZkKwM5xpjjZiR6Kqk22xSA1nLMX5FPM",
  "key7": "49T5NnZkv9pcqdzBKHpACCUL5zj3h4UoC17LM1qqxdTaBbAz9RXuypXCHZDeVDXRk3QLJHMQXTYk9sD3guUDX76Y",
  "key8": "2iZqayBuwk4zjCkZAzDqExxVqfMDf1ZwsKHkgoeQig3dbCcNphgWCBWmgdpBVK6754FdGUes3qJBNi6MkJ9dqgw",
  "key9": "3mcTeHAhN5ganmyc1bQ5U723xR1DJt6VdnnpAwxJzFzus1CGmHKnQRguNRdmaTr14J763N3urbyfZcfCdFRGzCzm",
  "key10": "5sAY2dSeaR4bkqhZLA3h6AgWK7ZtiD31qt8X9NmJAnU9BTRBu3VwWUpfZq25ytsLGzmbzh1pJdGRecNJaoFxiyaz",
  "key11": "DRabCRVYSHnxaJhbAE3My79aCthijc7d3KqnscRrKwCewysbZnJhBnqpPvvRtTJ74gWd8j9rn43GVWWDqdpCfZn",
  "key12": "2Vc3P6oxfQhQiWBqAdM5Ekjj389fKiShXjmjDSW4NoMXAmZpJnhQLFAyN7hpxdF6Sjr3bRpWrr2Tm1693Fc7VfYX",
  "key13": "51fdVSJbeQoCWh7zfAs8YL8fqVopySS7ccA8qZyapyMGnoBRrJ1CHCN48odJoFN6wvwTAmvxj8NVq8gnYppvHTrW",
  "key14": "CtEoYYeJEm8YnCE73eZVPUjr1VagZZdE8eFgd4Wutb8YED9YDDfwgLrwjLn2JsWH3nvvAYYgCStGPBVJR2b9RoV",
  "key15": "46LW5SozW6QeQqgj6EkeytuYRm7yTL4yvuGfSq15UmACFFjKpbUr2n7fCtxHobbCvpenLAt9BfVG1HqShBaxZU7X",
  "key16": "2GHPUvw1H7EQAVLxywcuTLANaUr4FrunuuNaTdM38rNJdFTVSYnrUod5oTQFbj5Xvezw9cDNCZrwRXzJW2xBZY7W",
  "key17": "24XXVXoRWSeh1pNkRFg7Q8ViB8nWVdN8yHMohqLfDqc5ZwgQo93kwDxNHPr2TMSTqyhB6BsHo4S3ikxe7Dopvz4j",
  "key18": "3ypQ9eWPij87bfvLF8fvcJjwZvUckWepwaVwmMq2kUfvAWGe4YqkJSs21YDT6JVfnac8PbEoSjCTWGzQ5isZVKPq",
  "key19": "2FX3hA5e6AjNQfApzf7PYqcYMqZdiekNr3h2gEP6Dsm16zC2Hq8QuuVBTmzYVRSL6yV6FP7wckvggMdL4AifaSni",
  "key20": "642Cv6h3bwtWEfVYGN5ssC9xLfhdBVybY71bLAqYB3HMx3AzpJhUz4yCTbmCpeHfojxprQtS3uZ3ERLm7YXYjj5c",
  "key21": "3CXrrbN3dCZG6QsGDu8SM9yPZWwJj57uDWrhdPe2c3mJpQVi8MadDY2WpahiSyCcG31G1c2XRuhz3sk55uz99M4X",
  "key22": "526MJx46LvhoMTDJsQBvmDfGxYFQqEQv6Njk5G9XrrQnMxz6Kkz4Qu29eZzqKJSGiAL1g6YEM374xecJfWQ4C5Am",
  "key23": "DHgBByMokA7wavh1ZeBqDWeq8j7LqaTwqLFi8D7p7qVKmohNsrLeugmY2NJrAbXWCBuY3DBwMVR8aEmKhTQVbTh",
  "key24": "5BY5tGaQ2rN9NrW8FwNZGowjvf3oCYujL2BSswUBmQB7aGFYA8sadximcVDNrimv8pVh7Cera1NKkmLaHQtoafkL",
  "key25": "5EtycSW1DnqypPYgUN4GNgfH5MzfbEkd2DsqtX4q8kJgss8kboXrpdQhtJhmvVCVX9RyCbUzBnL4bjLk3UJeErvc",
  "key26": "59KRHc8pTgbwJtNdGRxbLUGTo31cfdXwMbP2kpcFwkFYpbh9ZLYRkqGNYrJBWUDGe2c2oQuTkS7qtW5M7j8tnVQb",
  "key27": "qGUjp8uBoaoTBANPkNGVQrjGsd2eWhASenUCUAURZQ54Sz56DdxGv7wt4Q5SUgWeRWcSgqjUHn7VgBnaTLLBEVf",
  "key28": "4gDRYZMcPikaeSkzYV7qE9RcX5GLgjtBYymha6GPnk999yzVSVwN3Us69QVmqr8o7N8yz2ghptKLZr717Po1PWtP",
  "key29": "3CFLUxKdCLRAJQjaBo8PicpT7cTUFM9Fm3pGYCC9HGCDhGD6QJpDiPEUmMy1wXSxMjtxqguUbAnKCkUzBn6WyyGV",
  "key30": "Dr58jHtrPJUDoY3VJ9X4WM6BRK2Xfapn3R7Cy8FrjqRcR48ZJkaMvnHWh6fnboen8HMp3YUb7gfZVyswTABSYYx",
  "key31": "Dr2HvwDopAKVWTFdVVSdBR73EQwtc9o9LFbQeGAUvRyR3o3TCcLtGPDXc1jqwNfaEDMSLPcpr1AFXdYqADiWmVg",
  "key32": "36FVnZYPvW65q8cR62zrsMR83ojPgcoVtmJPS1DVsH323gMA141Ar4qyKfAo4io2J5Mz4y8joNGm2aFhoZ4Fdq5t",
  "key33": "2FJiVKxXw412h7Zp27cCYD9DpBEdzt2WcNVoQL4SCgtmnvV4csnCUQDvgv4h1KwN1JTusdSyrZV9dRWTDUWV2RDN",
  "key34": "2Q5crpULNd1AqDGUatngVrcsBRrDSXR1jZCGMauxxi3UCn443fZiMisCCg6kPKRNebZWcjmoB8xGTt51ihavr1A7",
  "key35": "4RNhAcwT545CKE6y6uZA8SoTfarjqqy3GQzSVxik85xaGeYqhsS6Z8mz4HyDZKs1D8zVGQ34htuMbXehH3J342eY",
  "key36": "2NvkiPFHLhjabjkV28gCzn1FRryCXk5xgbavEk482PT9xvNrHJnkYiSkci8wka3A2X1JN1g8A5F6sy4gx6ANmYUY",
  "key37": "3FoPwrx5pwqNdDCWn3oEbPyZqdshqDg1sV67QSJ7GE4nrqivcF9oDHvY12YrixvBF1B5pwUSW8Gf8GGHqtcrLZs7",
  "key38": "5TbVipHouLVGWiZLMcw2Wqs1282yB47pKsLNZm4HodDSDvASbrUas8jtBcpe3HFdYHnmYCBBjTknFEW58M4LYzHt",
  "key39": "61QLvk7fyYRN5tgXsM7U1zZxdqSaMBWHNAqKr86x2U1mLAfsr2YtNcVGNuB4P7igW1QHoxn1xEd1nwv9mtoLqjmr",
  "key40": "3v5MbgEDeqpuKMgfjzfTsbATDo4wXSMMu67oUm45r9Qq9DCNmKpbDEE9xn1xLMD79CAqAvLPAXcAZmN6qgUscxVf",
  "key41": "39jdJJaF9dWiHGQAurb2ekLKsE8jrZNYKRunJ1mT4jv3oo1UzFbf3FYL6ATy8SVn5yTo6Y3KFmdwFgzYgL8AcM5F",
  "key42": "4EECafq7HwabncYF3TdSgcUbEdyBMxcHaqqd2ER65xxz7P59EGnuahaZHLLZ8pAgQXpELn6mLM1geQ8weURgP777",
  "key43": "3pRhi2c5xiVfCRfm2f23YY73g2hdWvX9shehiAuz5QMFGVo4XPsPYpuLy7utALCG1YEf2Hsfim1Q3MFQ2vN2yeb8",
  "key44": "5WqSbJkUfU1yC7z3cossaVMbn9hzWzhGJtyyBXHYa4zhQsbFkW2E1m5Rz2fXCBYfNgPR5jV4j7NQgvYC1s1XSmV7",
  "key45": "3xj8ygZTBufu8C1LfTCSv96juXQaFnwfcpk97EQcKhvFwP5u4YGKnw3gQRcBVv24UCLC59wMgLjuAj2vks7sSfpu",
  "key46": "2tB8EtRPPWbsLADBcv4vTpD11x8tpaJT3Cn2yyXvWY9nZ9yGyxbXcvGrRTUxRJWDPgQdftL7iecE74MaecL3Vmg8",
  "key47": "4cDGREFSPW2VSAJ7z4rr7qLvXUS6fWhQP8egsgUAZWX56ykAUWcbJKF8bpuGNizMEM9ULscLB1icpJbdLfchQYAf",
  "key48": "2EYrMmdK9niCTr1ZUrrHvrhszo3uVNFJE2LUwRc1DJsvaqZeorQcWguy9mMjnNuAqQ2iCzp2fcK2jHVwwqTNSk6X"
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

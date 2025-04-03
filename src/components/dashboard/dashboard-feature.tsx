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
    "56atZ3z5qTY836FyJXATnqMhELK5h33pksWcvC4T9vUZsVd2TcgT692qN9Pmzw6GBmS8B63geWX5qX5JQbX9TfTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3eAsLf7znzKkDJBmfeqzjkx5RRN8zVV95yKwuBVmvhZHTsDj5run8YEXptwYGmW4P1FBeBYwce5gGFx5Vu93ef",
  "key1": "4UJ8hZFgWMpQdjZ84G1g1eKst3NdZ1f4Dq36oqtmiU9pFJ46YwCGqRQVGyjdhnbsEbbZM4fzHkd3TB58z6DtHjM2",
  "key2": "a23XBYziHAJ4BDFcusmdWzR1HKSwWn2LnBkcYB6FyfGZov3MB6eYvELB1fy8dPYrxfNZpEdVfhDEEgi8jGWGFw3",
  "key3": "47U12eSdNdw56FALBDWhwVVBrfz3MjuugM47rf7cAMZqD6auSkZ6quTsp8a8N59uWegHgT3GCh6pbzUYCv6i5aaj",
  "key4": "5gHrP5ByTFx98CcTK8jhS51E7FzbSPjYTuJ8uQssB1Sct8YFyPJVqfHC2bANtj9QFBy4QffbLAaevvPFFE1bBjcC",
  "key5": "2cUYYHrB2r2iY2HZUR4JHnqfAoFmVPFwnustw2fXimojABPqzLnF3cUWvpFUGcYQ52DekThxwT2JD21rpEf5pfVN",
  "key6": "4XrpQnuxY5HPhVHyPt9qAK8uEwaeyze39BCXhm1BALXNVqSboLABkzq7fG45mHe69P2Vwbxrb4Wbw7jzjHH1nQuM",
  "key7": "2tXhcrbGT7aMWN6vuZvTXyZ8jsLodBA9YuYsRzmAFQ7612gRFkXtDiu8qJfagqhrx5tjHt21TfACf7rcsgBBmfLm",
  "key8": "4AyD2z5aB1sPJ1zFxq66FocDMBcq4XSFe4JsgQcBD2gyGxPSC26Q2nCYf9Tu6uAqFTAYiiUBjK1VofMvxGkPYh9o",
  "key9": "VX4JwUZuLD1ciJbrAodRkqxmSHgP2WnYzqRdmmS4Q5QiaVmky1LmRuGQkzd6URsXFyaUnpkTMjVFVmon92uNjNd",
  "key10": "2DQtTFTh1dy8TAmKykhg4Jd5bHb5sSJcpLdx49V6uKuoDm94i2C5ijpHTTb9H5PTLUaBMuLr4a2y3BVDn7uJ9pvX",
  "key11": "54dq8icj8bYdgsRJ5UfszLXEkFqCtWowipUe1qxEaVVW4kCzSxmdHvrjMr55vMSFxAUNuquHCP7F95csHNhRwTii",
  "key12": "m3TCYFtJqsXoU4DT7Gv1rHD7xZzY8zTLu5TszhdQMrK95adHGffq58hXjRLYYEvWoKpddabTq21YcEfmMHSdmjf",
  "key13": "2dgnZUqcoTH2fMxtxjTPtzcEr6CVekM7AdsRFMFcWcRw5Uv8kwgGMRmySCytHjyfAf4oaHceYjMNGpMEanKkRjty",
  "key14": "NSptqz55aSPjEJg8dZ8RU4er7Dmbqq84FQkmKx3nPL9bMhmWk1kcE7oqBnwemiaYr7XAwdvFMVnLYtLPm1C6ETG",
  "key15": "2Wk7ShWWv5aPBfYkjh5fsfMmHELsMNCFfH9RrfD3nyUFtgxZm5sVYc7GDvKW5jSqPZeTrGDzpFCrw3DWkGuf4YoY",
  "key16": "3WeBu9PSuUwFKjuTuzEk4jiPnBcEbJHKqrxjsU4TskSB8FFPAmjPuQv629JviDfrvjJDfi22tyd7vMWjmj2mPigC",
  "key17": "5J8ZSrbc9vFwMNBcTh68ogWhCxKLRMYuktFpvvq9syS7sQXjg7rkQPN63qJNFxyVcdHPvSzvrZjbzWcfmyDuiuF1",
  "key18": "3EDkfPBtWpTnwpnrc13CMSDEMJ1uCfvKy6juATM9iVzkw2uFFJdTcJfVB4BP59xR4AsKcboV2bSjHj35spApLKh5",
  "key19": "2KpUM8AHtQMsXH6tW5qd7RrJMsq8eCCSXWRruxqfuQ1TRmLHdvAwrr8TKeHPxorxPbZytsdp5CbByJKXQQLghcWh",
  "key20": "A22Frsy4uu84zUoJwXTFvSXzXjRiSJZEkDRanTASxueHnaybT4BzvckjtoEJKyF8FRumwGDk4Um2ybwxkbpnzrd",
  "key21": "JHTiFtH59Dpb8foeRenM8RfPptHFbfzjMSDsGDnWByxsiNZmczuGKvmoqpmxE2p2Nx9aGzGdhYifymTtk6Wo4Ui",
  "key22": "2woQbUGHkaart9v4SjWHfjgVHHkKRRySgTSUdXyawibghAEMF52AjAvDfEZi3Z6L7qtYcSSmaWg1YAVtoeJenhVx",
  "key23": "66eixtqGfn5n9Y8Fyrf3ugs5v9H2uqPJHuaPm8ifKyv7atf6Auwfm7EKH8d8F1ZoFHcWYR2RsEMknAmqtwyuqQqN",
  "key24": "67kTZ8rsSZBfK785dRVMHPXxsaijwEa2FGg5kShvUMCyxPFeYioiNxkWK9oN6Bm64hQ5yRZqroySVy6VKeXeygqP",
  "key25": "51FTNTJre6z3kkMaUmeYCkJh3hBcsoH2BWfcwMFNhUh9nvR5kibDqc6EdNBYNZDmHzw4byLvQ6VjRfoiphfzLB4h",
  "key26": "3bNz85hKNvnM3YH2ayJEwtqxLgbBSjNpoqXSnoWWytZ75hwyQcoEusmQY5BdQdYUyFSqi2SKLoRwMzANY9HhZnwt",
  "key27": "63fkt91YmQbTJjVtenZdT4jV34h7cqYssnUsoMr4nUPa4jCNPKFbAH8t5doX4xy8GN4nDzXi3ZSqyfUcDhLY4buh",
  "key28": "664ANKfMt12tkxeRQdGwqouM8yGYRWVUMXo4i5hyHSJMqYLJX2tE7ULC5M7gJe9pHoxkiPoSdimdb2wbX5pXihoY",
  "key29": "3uGuHBT3Adwva29Kh389fJcsFqQKzB6jxBorTtbBaFhsnUhSonrJsXY8fbzuvCoxhdNy2U62uxZwtUXr9tJp4NCM",
  "key30": "59WpVhs6tRnoP5HDQYUcuo6GruigWwXAviJFn5EycUTP12MbwthgwJ2LBBeiCRabXVgeCGV5L41BdkcdnUSJ2UtD",
  "key31": "4qd6EDAJy1QKzxRiZAeirkWUGTWdzUB6A3p3TPhAaWNxKSmiFSfNm6ngmwpEVstu2xehhH8V7wbRxTCwdWfTng7A",
  "key32": "BbVdwMcMzFWKEPmQi5YUJ5u3Pc4XpxQ8xXCLdMGsEzdNyAiDfNiPtbp4EJAp69ZQ9zQ3kiWe53MzHEq7jnuvH46",
  "key33": "3CR4ojhb2RFb1TVnogYLP1X6uuCqW9qUZAGHXj8x9fSTB5EkRaSArK9MsJrm9tdSZQxamnePXR4YVHiycejSpayZ",
  "key34": "5YHHEQbJEUqQLTXCVbxqGdpDY3bSqgE2fzLvgHcd9usZ3MzJZyic4wHnGhwjYrfiCcMG9t7MbesRa6878wFe42fY",
  "key35": "nmB7ePSo8pLtSmPe8bcayZWdSdYo5oKzj1qNq1eL4VEQU6YuboknrfRsTaZkQ9UHaGMN7GT7ucHEZJiU5dwTMFM",
  "key36": "29G1RPeF5VyFcjEZdkKPFLMA2Bm4Xq81o9hRWa2ncCWH2ph2kjef5mK5SursBppRbite3snwN4tn2fWbQiLJeXBT",
  "key37": "3ifXqyFLi36rKdZYg2q1G7obssVA5vGnciayoaDtkCAjFwryc6fRkU7e3GudvhEGCNW2rpEZmbQiDY4NxaPJkjtR",
  "key38": "62iP99rjT8PxJX13DHW3eBoMG8KPG3BW5QDdBniBxuWavstDWFdXZ8XM5Gp13tkWW84kwwKxnQCzKHFPYvpWeKmU",
  "key39": "4ycrCXU4BRcLoQ7yToZtHGP5Tu9sXsPCGkMVYXNtGSYUb8UxAHczVxbhiM9sY9dEZE7juZ6V1mAK3pT9K961gueR",
  "key40": "5rcPrHLbqMSybfP4PHysuCHQUaypKPTYLFFQ3TKWZA5x1ARayeKEb4PK1hKXJxWW1FDVuaqvvj73wLnTd7QKg5fu",
  "key41": "5A6k75ZCFtNWdGqYGcu5ZTbBrZUuJLNA1XGQaSeSX78FsLX1gKoyuVs6Ui2DRxJzfjuq9HJYKj4WbuDN1rRtndFR",
  "key42": "4cGgkd8HcXft2e9xzcUeVEx5QyQS3iQ6zFmU7GBnCs7HRNyXnTmnz5mcn2B6KmLUHFK94h4Hzz5gkkdv6G35XrqA",
  "key43": "5Mjc2meCKzj3YnMG4g4EuWPG3y9y1AwCuas8T2YA48sJjTEGhkaXM3NgGwpWbK1XWtU4YD4c6pUXaeM2X6FbRAj7",
  "key44": "3dn8ud6H2SVBQUex4FBX8QmWUGBuqLCaZKxqGbzAQswTdN4SvyPBysgKTxtJC64Fui5KRngued43jS2NCMZhGK6a",
  "key45": "2429eTrEVWDn87B1wuBad4pLytqrRZR7gr1qKmBpG9JdAgenBTfE8LV26SECiQJpC1wBg4SGnBt5DdtFd9yqcpLo",
  "key46": "3JtFkcvGjzXACUGtRXjSbWtnS6yTwoenACuw58cdxjxH383v9jJ9dLsSH39PLvR5C4fwWBD5EFUD3X6nXEbYL515",
  "key47": "CvZS1UjZJjY52QizfhRJgaS72noS3VHewYSC1nLqHtDi1SybSwbyoA7s1AMEj5xu82D7HnWC3BStvbgoFYcimMj",
  "key48": "umBHh53yJ7X7bqfDguWaKVsoHz5RuySmYytKeE7NM87BveearXr5chSP2WmFj7sfVior8gA6dwHD11rFubcCJar",
  "key49": "4iv1hvVfoG6nc6p2uQ1kFgQBG2LrBJh1vtiUcJCqymPfHHCWMHiJWd7U6VBEAA2q7UAKqds27FR8JJ3sMuATDQMB"
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

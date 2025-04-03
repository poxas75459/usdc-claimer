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
    "3U8ycP9bjSqBSMJpRjtagvH5bm3MutD9fZRkB2SuRZ7dHvRbbwYs6EJeSZS5RaGUTwWFxrRyMmwQmHnqLLUJnUcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2ZUGK3wNMesvG6sxrYs35CDqZRa8ApESu7No4rtwESSj4bufcqnAbzyersRQN1veQycqMadn4KYErNTT6w4GXU",
  "key1": "5WuAhcMCrp6BCYPVePQDkEvoT22MM3YH7Sq6cFo1nh6grBhhaC6DDEQ7qoyivt6cuSLCkV8RyzqfxG34U43WXaw8",
  "key2": "sa2HZpWAkRLDoTtPXQTuxgofcL7Jorqpf63APQuVR6bf77Y1wCRSN7Bvy4RQ7hbQDxsvarKffPV9GmMHYp2Nr4x",
  "key3": "3ordC5y18dHzimLDaxV1Az9yAywQ5zxtHv7B6EmALcGoaA2AYZNDRvH5dWv3FtfBW8ddmPTGaSGK8S6kbaUc1R2n",
  "key4": "3hVy6qM6PTPc8ZAh3JxULuhxfpwy8ZotvWDsQQ9Qqqjw3t5WRtiPQbbNQhVoeuLHn9WX8k7W6Vq58VtpPmCvM7K6",
  "key5": "3gZVqvQR3x5B5CZfcQCLRr8TG3z9tyX9axFijPo9X4PVHHrU1RDxg1nJKNayfWd25zDWwPAZiyPHgEu6JRVeZHyH",
  "key6": "5sxh9ipfLwYyseai6N7Wqx84ZXvHeaGpSHfGThQFNgRwbJvHX2YQjo237JedktZPhPTfgtVTDSincTqwJDA1S4dt",
  "key7": "3ej88g46fqny8Trszo7vk6gKTKr1srgzApaNvFysZCe5c3yaVHTQghFphTjzhrVFciWYCkTCQt4NviYUUwcgskWu",
  "key8": "YVMjGHxHBzYkcKwYMfgYdhnRRQgffg5N7TXw99c6mTiYEoGonBvZVm7ZcMZqP8DiMmGpPCvQa2YKUvYJhwtmuEd",
  "key9": "4ggj4c85ZbytFVfKtSgvKfoLzGWTay5GcKSmCM1wy9EPMbizMgobYdoz1VKHN9vGekP95m5Lv7HzHnTmy69xkB32",
  "key10": "2k22DRAmhns46aNLjN4ykLuUX1vKxutCAfNJV2aEdryhYWrmFKfVPnMsZae6QgSna57jFEQtNniGzaSH9KasUZHv",
  "key11": "4K1SoNJpyjdDWCSoJsUYULKhEe2NdPVCpBHNctQ4BnmUDUQTxMkynjHsC6ZJR7QuF5M6U72zt7Rc7KXEskVqv7xK",
  "key12": "4kuW4z4ahnHC7DEttDQBCVocU6GWJn2kTVdCMAVZGKrJXcLAyrQPLakTUQkZsFB2vx8kn2w8wfNdrGrrf8fnxLR2",
  "key13": "5ewZ1rva6fD9AZbJHjM946fM1JQRKrAjt2aNcqnDYSU9Exd9NMdnJHnLde2SqNr62H1fVSETMvaVsFebd9Ayf4X6",
  "key14": "57RYzcibC99wGP1S4xoeHeJaQbAUbaJz4SL9ewoB5Na9JGyuQTFTsTYVJ4wzwiPhDNQFLZNEemyKfwVVzHtw5Bot",
  "key15": "kLj9zrZ5PbbHe6ENpEerYoNXxKbixXEg3zHm6NqN3mmqGPUSDFmh7wWRj8sQRo5gvKoVYUMvS3K52tjN6Lkw51a",
  "key16": "5GXcZ4NjYDJpahWnDWpxie64Te4iptYYiQ7erWHNBnWP5M6ThdfG98JZGxB4thEWPxakrCDiSdCBraATSK2H3h2U",
  "key17": "4c9ESFRKJSvmEHqSrMhaDMdCB8wDT6De7BJFy3n2u2FFZz2NXzNsi5yZYpRcQBHefk7wjFuXc2dzvvsCKvz8UAhK",
  "key18": "55aSC8q1WvFvN6mf6hvyZu8JR5iMsurPzSbmHLG4G2TYdkikpmaxqGHPL2bmqrDS9syaN2cncnVXnxNm3SRvwnyN",
  "key19": "21v7DgMzC5R8MXdaog1NPYWF8wukdnssBdUQAoCFy3PTzzCvfoVPFtwAApTJgw6gnmmijFZff4DaZEEYFUvqaesg",
  "key20": "51SLQpNzWVFfbgue1NqZx4Q5cjaAxwDJpJaCiiSB3DfezvPAuQurFEN7YMUL7sMuZStxDNcsJ94KsLZnzTuombE5",
  "key21": "5M44vSdWR3xAGuKgEcYkQSHN4QCEQy4TNdG7YLg4PUEUjKfLh2QUHpTMuuzfg6NMTxVitPJziBcJDXcRkPERDXdd",
  "key22": "2EdLsxwuPX3t1LijecjK23rAGqnfEa7PxfiBRPSadkN3WY31pK3m2SC5tnuDoVUwaMmBtMaqH9LRpCthC6EPrN9X",
  "key23": "VF7zPk3a6y6fzARuDnF36XBjYJVMm3ZXXhetfNXWePwqRL2yg4L7rhKKyjL6dp77w23t5ugTyWkaBkWAdJjvP8D",
  "key24": "36oDVg992UmZePS88ujKqes2rd8LsJCPuVBchZpdpssjRrTwWPBXesBpCfcsDSrQYXxqYTt9s8WXJoc8F2CqjpCE",
  "key25": "4P6h6u5RCbJijG5posrcYkVstNJvkcpYSNsEE8NzKBDxYFqWMpHHKk2S23uWB8NbjEkW5C1SQpWe6LM2CnVd1yEw",
  "key26": "2mTspNF4qsYFPcaYqahUeC459NDJVFPkwRp4WJS9vyjfHvoi1WR4qPB1Tf55CaapUrDtsddu8h4BQ6mmu6WVA3mD",
  "key27": "5yyjwDTHBWrKYuiNojYwourbGnpENVrrJXtF7kxFJEurdHkHMgUBZUFhLkeQG7cBtCCBNik3pWBjWSM2mVyjLt66",
  "key28": "2uGGJPbzEWvv7aMco9gYpKZveZfrqBYP2srDNQM4jXsn9H3UmNFKxX9TheFpBi4KchB5JgGWxmhpeDkQTNeooQbc",
  "key29": "4TEzv6DrMA1Q6SPApZqBvpzfKmnJns8EG48HdU57KjZ3EoPNVvp5yzBP1J5Ev1N5kDhkDpUKPts5dkba6nK5Log",
  "key30": "5B7vK9dTvMZyxggFPmLvL9izLuQitWL4W35i6h9v4UtU7fdj1qcBmuLFEtq3j5FTjj4piTAFKRJFctB45QU8LZv9",
  "key31": "25mcuWXGg62hLgfPkXLv2batt4J3WS4nigRPvs2nSBbpqmsAjFbsHSaoyb8646HCyRj71Vu1xRmC7JfKgYS8Sv7c",
  "key32": "2tXs85gg2A1NgXLD9Up2TmRvLFj2FkCEMnKFeusHwuVc2rvh4R6H6VLGsDCQXxZwQpQXR5uYWWbW9YLGksQYowmT",
  "key33": "i3iMcCqJ9WdYGs1nVZz4cT1C7PmhMs4ZyztEXn31Ej2qhxNB1zYnVgsUbEVantCFVNG4oGMmY1JGkjW6cB6nfzt",
  "key34": "3fpxEhCHUJfXYyTGsauA5ZVYsrq3sEk8AP64WPsyKaWMKZskNXS1myWiGzWP5oKsw65NVjmFUgWvB9NPaDEbThPz",
  "key35": "2rhC6WnjRwEfoGycJvYDtVvUeHYH9db3fyjnYEk2mDHSqEEBnWztFoBshGcsZ6tEawwRjbTmrc1McsNnJN8XGVxM",
  "key36": "tez5nVLndG5nqPFqSRkvKuHtSNVGEWLGRC1i4GA3rYm5ptKuvhPGW9NszywfTVW27VtqvV3SC4EdYd4DGWXycDU",
  "key37": "3QD8KJAMEZRi3iRa8AQaKScrQMxfDVb5JEKcuZh9A2CvWqXtJr7iNXA5bWNvq919k6G3WUYphvXCqZ3K9L617hoF",
  "key38": "3FMFYEeM8WSUoNaZ9o17wDNkgwW2kceCxdRSYrxe3uw6LtJURLxiD17Yqw8PYEAAnwm99GSnc64c1Bg1sML9uyRk",
  "key39": "2Aq9z3G94Y8AuCuVXUe7zGduJaCzxDwzhFck5pvZdb1hpdLQXgVX7XEGwghWSHHw8STPY1BqBD23VNqsNPRHSbuQ",
  "key40": "3oLosYY1azA4V6aPok7HwscaPaUTMTFR24tNJU4fU2kM8Y3FoDZf4Qi5MLVDYobizS3XGUVS3wtAQxYvWoRvRbxL",
  "key41": "55FQdXPDgJe59fxXGMHy2E4FXZ5MBjj4E5XCoVGb9MkJGCxbez8r3of7DYAfSfCRhQnZ6hwm6hd9StpBZmxoaFnS",
  "key42": "41VAq6Hxi9oj5WMR9MqGCXX7sGcTPALe9H77G91FmTv15AiwJR75EeNsJgNDBokHxcfGHnwTMmTDzJLFYu4uzh7e",
  "key43": "5p5vhtRr5uMVEaccJXmSf4ageSMAzEbmVE8BgQLnAHsgEsZXqdK3Pm9waA9YVgNGJccTQLSQkiYKGyLKSarQgngr",
  "key44": "3EqNDSLXqG5HzSdk4vvbZY3AFKMD2pWUyX4rQvr2Z1yZA6Xzp2EpwZaGTX3hpT8ycKHgPX2HttvXthkATZmtrUBW",
  "key45": "GkNreC2dhxsJjN4HE5JX6YH8biqsyEgatLHDg3RpoXeGFeSBdq44wEckLCQ6FWKN8i5sfq6QQfYT6y9h41Fd27G",
  "key46": "akNARDxwtJaFrPfcYBd2nkCmFeysNKFet3Dh79DAomQxriufkbqfArtBZ5Jx8CGCaBoJAVWz2W5qyUf2Mv7AerW"
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

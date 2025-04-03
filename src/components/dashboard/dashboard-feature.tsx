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
    "42WQwvfGTfnPAsFUpd2PJKjrpuJjPf83zLbtBmfYb3Y5jcFtWfDApkigyUC3iVnYp49ihybF71Zt7Y6phrMigRaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8kymjqKw8QjGK3MmV6oLEHoHgxfbPwvcNjvLc5gTxVRBRoVUY1z8uekz8tEWwzDGQnxrPjkpNuaHm5GAdSHx4X",
  "key1": "2EVZx38JugjJXykpahToryQ2rcDBG9CaQVF8Cq1yT2zT4n5KikYDxLRoYLAWMBbwuEmxzwdcF7bzPPDnYThFb1qf",
  "key2": "2EdVUSnJAjhiHnhKPdUTqiWAeBMEp6pEEhhRnWcbYmvvLN3i3Jo26vzXm1UNtJNEjHfntSwTEdVAwJnbXdW1T3yr",
  "key3": "2UfBPhoRAANuQVipXMduV4ZKG3h5rW2Xy2JAkK8iph6c34uWdPBRrowLuaSDhJCs6k2p38AvW6jJKoqBw2Pfekko",
  "key4": "5L98yucadkRk23yGf8mLnMyK5s4yUypSLZabmSWBkhkMhSAPfG92vbo192rWhurr4bg5r8LtkqQ67sKBiVWQvhtH",
  "key5": "66mUi1LRD56KiPsuMLz8Uas7RUFgosLGVxo98fKrdxFDnQxAqzigDXTJ667KWyYtaMeUAFkR2Te5ppAeVqHuYk1w",
  "key6": "3dNrtQ9xU1L7HgcuW5S1HnmAjPZyQrUbDWvwvTCGLXec5P7DCrgk8Mpr9EhEwtNxgixjVimbS5XmpLj3CFp77iEy",
  "key7": "5ei1wS3UjfEKK5vfgiR1vn8ikS7HSqu5HDn5PquJbgK8GUDP4pwpe2w7sKbfGwXwmpvMkwkmwMKNiqqT4SHvffHb",
  "key8": "4i8DNVC5NcFcr8WQMbS9WFGN3wP5EDcnP7XjqzHXKyXFztXWtsMinXrZDxASDqY79bMeTNNDj1w6UDrzAF6WJdoo",
  "key9": "5xoVxBiqBxvKRewEinmPffqPnXeanzfQxcMLfk3wpaZAubGEMqc63wysfhHCoXwHSupq69CzHH5UbXkzDisqipAv",
  "key10": "Rpvvs1GaKoajwGqmogSuS1386jBo2gfZLmJuwkFvkWEjhDdC29gM3BsYYc4SmZ73UdwxMpu4Vwfcw8JHympy81t",
  "key11": "5oDt5C9Z6PRnJ7K6E6d21DQbfqKr4k5dvqFw2NXgxREXsBJQWxSeHzWXmmcwfqq5MJkcU7QtnRDHBGKN3PnzxGxA",
  "key12": "3vuMCLVpwUXrsF7CaqL2C2vrYcTfyrLr2L8XYHFYpS35n813gUMuHMtyBNHj7HPjTdvGTSmeqEdzyW7ATczeq9n3",
  "key13": "44mLHak3AwtZAz8TAHH7L99zGn7ECgPSCWfbd4kjNAK3VoTnC15dwszAcPCwkA9pjxTKZEqQKfF34AiwPckD3Jc5",
  "key14": "5DdV81XheQMpBSnjji66Gygkk2D8AGUcXXCeenjBM4QN6trCKknL83LFKLGWwqi2bLCouRb65jJJ6ee5uzSaiYow",
  "key15": "4JZy3GK4rkyVduLY69NVTCSJSHjAjb5j92ENT6kYgCPmT2ZZAR3WZXfbphr5F9NGW6t6VwC8pj9PtjtiBmLuUFjh",
  "key16": "5FdpQLcx6KEYnHEdGPUsk1NiXM5c9GqqLsi5FTjp3b3EFJ9tegJg1G4tSmtXmPxnnn6GmwLMNYPtCPTZwxBbkqZ2",
  "key17": "5VWmw1FQ4hnAqAbfxSVoJ3up1g3gXEKaJparAnVBdvjomSsgzyE5cmihtFHZxNmseikS1yMCLQtZNAExu5kaj5U1",
  "key18": "55ifEZQxuJLa5msENe4YqCqEgJDgPgbhH1ogP2BWgSRg6UppwQ8CmvKb9RYhQLYZPRzhQb2TUExAgQHnrX85joaT",
  "key19": "JPpcac3qJ27vurGLoPHRrB5gXKxG4qiwUfuKd7YUVryBuD6vWA69kitEjeTWqpoZNLNuhkEcFHtvzCGHCiVpsQE",
  "key20": "5FztyuMfLaor2qfz6SPqsqMvYRKycxSmUcc1QuG7ry84GbmkmUcS6fQyJKNpXt2j4xvb82inijmtzc1doy7JnbvP",
  "key21": "wDLYTajaFhso5B7ytVbetQmFrR4wfCXfMRoiTK3Fjc35oGiNc7MTUwoeGnc6qSXu4puZG7SbzneZEE2czcRQDd9",
  "key22": "24n761qDbG2Xwgsq5F5NYvKPGLfPGRs7bQNyk2ZrutWPtoAJBi1k4PQvvRTskko3DzFoG4kx9EUcTudeSVS6EQrV",
  "key23": "ybLvkwxnr4frzavtnmpCaw9fSzwqzxNwHLd8x8oZPc9eEctsWJRKFpB6g8TT89yoCsa9QznFZ9CyDWSGrkiQigj",
  "key24": "4JyfEWm58kcQXmUy3GCLNo8G72oGAidhf9gjWWThs4TvaaP2egGxg11Xyo3buC7RNnoDpgYCT8Whbv6Vse769WYh",
  "key25": "2JvydT5im7k2RjAkwzk1Q4tapFYz7DRDUFf5Rix1uiMyBBhrFUpvWuJ3oVVZCcspREzzcpEDsN8qGniwGo5K1a7m",
  "key26": "4bwxx7JtrtD69ReDMmMwCg3Ao4Mb4njgu8XGDvFMQ99PUJxNkdWss5yotJDSVDgQSAPzMkX5iDNo9WHLm8yN5Mgy",
  "key27": "5MvMfv22zdwG4dFfXAMeKWLTd1Akc4HhXg9AdCzyEQ4zumsVHP1Kb7W8iLLRi66TpvGqytoY6WAPczdWZoCcqDeX",
  "key28": "EAQLhPgM9RdEk7xvcWVhoQN6eEVJR2fdswwKNi3y4TtrxVejTJ5XPLFXw8zpE5TmJ71GnftRZ5yzyFVj3pxYmbh",
  "key29": "Zh1LVGHNz6WmJqajy6GzBDqVT1Q4vCywxumc5vwSWSrjAw7Z3guAFByTPiNgyDUd83rKitMHpdDXgRy4cE7634D",
  "key30": "4r1gdcgGTdXeGVvX1cBuwyKEkYCgssQR4JviA1vhhzKBmuJ2f8Ce2uKJCWBwewHFrUedfdi7eaQG2LvBBbLLzG8M",
  "key31": "4X9aYo8ptMxiAeAuXoyTbfVGPqdDAR7pfRVD8SV1uMXjHhkxRMn5oQcm2dTgCiKnSBzD6Ziwi9uZBshAdEedY27Q",
  "key32": "42zqnVyLDEvdde4W7WD8HnfhYZK8Fm4jB5PR2XzDgTpRGA5ZZBhfR86AMTzRzhtHaWnfgzXTvDgJiMnjvCMpiZMF",
  "key33": "5MmCBKghR26GSDyUKSyw2DiipU3rGUEWz8Rsm3WFCohJPFbnCMzLG87CD5S7g9dUEbkFTMHvJdK4MMSCi3QzNoYy",
  "key34": "5CbvBNLjqGBA2RWgciM3vgHhYnBT72P7K7erFftkD393ygePCGeFswsLdCXhW36FWbQ1H3CR7bi8jHykqrMppdCo",
  "key35": "dN7R8CMGgraGPrjGSRPbtfFs6XTu9WWLZpNvoaYM3AZLrZ43zL5A36LNAMjqYPik8VtW4N4u93J9xVJD3HG7qvB",
  "key36": "jzFoVT2251Vc3fDNm3a4Gtfa52iWRrjE89dZ2hdYd9tQXAjzd8TgFAbdtPttW1nNdAPKRTNVwKrLquFxSAWHQXG",
  "key37": "4nfVnvF94LpexVJSe1YEfhUHY3hMg65aL89qT4dXGT52eUea8VpyeZLxxuqSL813JdPJn4zdUG3KC9DW1Ggc1HTJ",
  "key38": "4QQp8mg9tCK93FvdNqCY1643FeQcevn9xPKYwcPFohNEKvqGobhZruZJBzvNomeZg7Wq2SqarTMxWJ1mC41XcxCx",
  "key39": "2nVsR1UvbSdPbjQe6Js4p2Lg83RbBsRQc5zjNHDLbeAbKZnGYRvu2QNEoVi8hqamFJ1nLDyBRUv6mP33Fuw3JQA",
  "key40": "2EmWH9HY52woVQmdnaEa7KMn7qmNxAwi17SRZBJofUb6kXkGzdUGsgyXi7Q6qRR1iDcW2mKvrHqV63Yjg4A9njNg",
  "key41": "5fPEn9GJ6jvUxS9CzmR5jg7X9oqXtoqj6it1tFVZTBUgfTggZKqB19rx8RR32sBLbNCRRWbdbKSD7yoZNuv2udoh",
  "key42": "4ExNy1j8DayCSaA2c24JNP7P7SBYeBJkF7xgD4Y1XDk4NgeAP9JnSng6SEBpZfMruAQ5hizaMit7iiPWFeGec8TQ",
  "key43": "231BTp5zDgtbZCneryGU7yfy6beYcC8BH5dsuqhseuCoWzBP2C9v3Luk92iohRzu5HU9io6pCRcGbwTxfaZmLUcV",
  "key44": "ZnMPzSF53toGubv2AdWT7NJzApeVhsP3s88uGqLYGHvko65YuKBS13T9ZV9GhLFAF1BQghg8k9UDNPkJUtHN8Yu",
  "key45": "x2zLovNU7FJQtF2gkfcvHnNSUsyTgwp4mPFVQtLAdDiQ3pfp7FsvBBWB4NWXCbZiZPfkizoEq6ASRV7iQfgJTvK"
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

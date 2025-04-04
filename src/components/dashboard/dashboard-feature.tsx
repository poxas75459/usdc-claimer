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
    "3JePuo7E3AET4kwXUd3a5XFP1GeL3ENpbmPianEQFpj5gRYUqvKodNsW6FaYB5XKmcrYxS9URtajvR9BgfWne1ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ZRCPhtVYw9Mri67fNzNPuf5AiZLXW7dpZmMcAmFmSc8QwHhGuvMJSLLUd8AUKs3pJMZWqHeW8neapUe229z7W8",
  "key1": "11ETh5tRXRuNXs3HoEuNPugEYLW1KXzQVZ9SktRP9jJ35Y2AFhPWmv33spkP74azgS3BDQvHFcnuiM5GCzqTr4S",
  "key2": "3AYX9GBbwxqxe1VHkPg9QGojL7asLWtkGom8Wysb67a4tQTVQmfoEtADypBSD8UJ2r8zCdpBjLdFNjeZPFiYJBij",
  "key3": "2yD62rZBTfCTFSUnQCfQW9xFziwXHNM93MBkY7aLBZF5jAvWc2CA3Bs91zuVa627hiwnHV3zGfPX79RiYRUMeXw",
  "key4": "5AKWZ4vFVV6gJafzn86axMBRC9mtdbfcFBNztAARet7QpTETUny5FKrVo1VPeTpbrwSB3FtMkjw9WCdYPaHTco2i",
  "key5": "4Kuj9nrowEfWEz2ZWWym7FWJzxUUbT3NXe2xpn8ewULnq7sUxPTTpaTyDgiafyxCXGkrmsGSYfxt856kDcsHvb8",
  "key6": "3HpAprRL4ktrirQ8TmfuHEH3g6Zn61ZwkfZsXrH2EkW4yYQh9Ur9rQZ33qdGrUux5M1gygLT4Wh7bHeaQ6CxdHMY",
  "key7": "53B8zbfYok1NowUH535oU7sdAJ9y3ZcKyfGiU5MAqvvzBUensKPLVod8XGZ4L2kpYnvoptPSGvxEdsaGd1bALTj1",
  "key8": "r6UZALENUSybqv6UAybmpvrXTQXMMRPhBvAkx9TWio7ZxxDmrgVb9sZKN87b4Beom4FQJPVuLXAkY3ZH4UWq8oC",
  "key9": "56BJeJ7Hh9hgwtoBYx8cZnMZQh7j7kwp7fsVuktSousgjEKf3bng2r1vMUf5qL8MRJ8JpXjai4n5gw5MSZGWf3HD",
  "key10": "268w9tYD5etN2BruBb6tibMawXNejrxG1NQXn6y91QeYjeCTAju9AYGZw4YE3KjpwHShDbAmzskFcFdfTxueYg1Z",
  "key11": "24qMjm9Kr19WwMFmR9xchBjkPtvwMtUXZuZya5oLdMJqFwsH7Ge48QSTZbBkPkoVhAVLvK7AEVJiecpLNtj1ssBM",
  "key12": "Q6JmSz3cgypiuhVkFvrJ9m1MAaEVMExpcconSmoiksS2YTwaASQAxEYrQ5mXkUg149uWUhEtWyuDtPv7taULtDU",
  "key13": "5r5FrNX2otTofQmXYtUe2cupecLdyeaeaEWwVu5MaXpMXzrPdTx9UAUx2MJCWFxH8zY2S6FPdgsrUyzHQ2qpUrPA",
  "key14": "21bK7PXMb46UZsBmXxuoCQG3p7UmHcXdgmXe3NHvaH3ezUJwvPCJZZmTsQEWXFrkcohh89nUZoF68TFhsDnrYxx5",
  "key15": "4vCRfXjnVSmxi5sJUnwBqrQexsewGeLoHcyRYNoNrseKGwrZ2Kiy5dhWAmXf2ted2YCVq4yQ1aBhvGPF1YJ2jyVG",
  "key16": "4QUhGMitB2Fr6nRrKroJEgRssxDkNYnHTdc3nFKG6DU3nKCFPTeGWmD6LQ7sERLsceH7Fkq5nWL3AMzrnN7qoQDJ",
  "key17": "CETDKSCWmBoveKabTMDSbq6rxj7EZwzEyt4Xyrt165pJHGrhj1wTS1Z9XwXfTnMo9CXqgzAP1pXFxfg2kfQkbpK",
  "key18": "H3dBwpHpN1k7pNm5Pi7tr3pNFg2BdCCMitoJN7qxdJWtvkpowBJzHwq4A1vpDwJswK4wwGGcLMGqr3KVt1PpLTu",
  "key19": "VzfWj7HRJaWjw27qYTZdAw3Ez9tsJh78udpsdvcF4BfkrVPqyeMWGksiRgr4BP4HjSzTueVJ4SkXjn6PCjhBkg5",
  "key20": "5jCJ7wtoxnG155N1X9dS7mQXQtRMqKiWeuLHDy72fwfKHwvxG7zKu9vjMALQW1PKC3BqAmVr7ZMtYieJRsB5urCq",
  "key21": "4e2LAVfrZxrcwaHXWfrnt1jrjzUgz9T2KsJR8zUMrchvw75gd2jDTQoZz37fpK8evvazPiZHFTGXvzQM86TyJ8to",
  "key22": "Nbfmrw2LinzEVRP9s7zp8nwF3UhYrdJxrxSsrgsF9MfMAnR7bHqFC1xfNJ7LPdyLFh4rqVDrrzBJbv2cyzv4sgS",
  "key23": "5BrJE2MpEdp5mhD6Sw9fNdfMzV3T5fW1SttfL2nRsQrMrziUQsTjni5G1vX478d1FhysfkmBPxyg5YufuA7A73qL",
  "key24": "5oxYjMj6Bzvi8B6mnZctqkE2nt81xUPHu2VxYESWngFtqcCQVA34xLAdZYPcMNtUJ1SPuuQRCLPo4AMtWuMhNLFT",
  "key25": "5T2MvTLg3RkcJJbkqKgUAbm29RP8UTMJaCpBvSGQv3DiAoktNSph8qpKbCQtae2PQYNiG4uzLTrGvmhGgKj1Ydgg",
  "key26": "oFfiwyk4cRrhQ8WPTmRiMQrF2uyaeW6PzEEhiKDaBmsMCtSDnKQNhhUD9FfUMvdBvbAxQktRwVChXWnaEURNgbT",
  "key27": "5C1xmYB6XU7VLCmj3AMihrK6ggFt8m4DhM4b1dczAYPkNTGkJ5ys8Pkb6iUaQ6zVAMRyTFm13QrgPDwyHUnzgb2T",
  "key28": "3ikf6fbswyBwRhB9PAGdhQGRQVssJcMhBUk4GWeNN9yp4vVNYYd2iTn5jVqipQijzPUDmCKe6FQ98m9FaNztxYmk",
  "key29": "59Ho2wgniEzADoEhR1389CbFX1uymf3jtsne6tdHqGHwWTmpQWL5g3E68wsubMUiyY5G1ind3GEbKmQQ6HHJGPhX",
  "key30": "3C6gWHPeYUFfJuhzLRBZwda1PZRMFRyYHYE4ysNiirpTB6AXnefpAKRpmx7VyxQawzX6aMyrcCHUKu4xMkTAmiFG",
  "key31": "3XBVsX556SYYhnHH6Eje57ktiCmSrbcedugjMfwPJNXwNhfisoitJMh1WAQ61pb4yzA6HofpadDQJ2P4axx5p1aS",
  "key32": "5NEYCeVqf1957ivhWJpueLGbe7sf6ijthqhbkdrVKcgMz7Ln3DmZ7Smkqz8S3yJ8FRFc8gje9na236PXom4tSzx",
  "key33": "36XQ1t9q74hkJizggXpsiojPCn3GEeTxr7ag2mLRbnSRkvbnw1UEuTifLhvcCTc7iw4idqrJfLnzA2ddU8Nk2ZD4",
  "key34": "4cr7HVwWQ7PhkziBGSuPPsvNSPderErbiGkSTWctKYbikQ54GcJtUrEjWCu9vURVqiWwF5omz8Tuq9vdHnPkXxmf",
  "key35": "5RZEy6UxoykdhZzKEoW9Aka1ph1bfEsjAphdtuj9ee28iFpkC9NEuFddpnSWAaDrEzzLTMTwgD8HgjKqZx9y7om8",
  "key36": "5jT4yCP9pQprssK9VkfTnrPeUdQdn3QC3x6HY63Aw5WkcLA4UY8iKtJgm1Za5SBbjwt8WpoP7enWwpvwebSWV4kk",
  "key37": "Fc1jHSumrdjDHmd8LYgu5hiaWt3LnyNXFjepu1Uiw2htQRjhyBnjVDje5XMVT3s7mvZsjuRCyvwZg3LYArVRoi7"
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

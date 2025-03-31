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
    "5xKdVn5RFXSnwqPSC2ipuGQwDnFjVjqdxDEfQebVmpHjmU629ebk4Nigda1WRB4wapUYCq2PUBPCE8GzyDMN55X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1JZYFyVF275pj4yX22ewGfxCiQ5GkkLHjpKGdRMJYmP5DJTyLwLwAdk2fe6y2afYhcz2L6h94gT4bRDfibZzmD",
  "key1": "3m2ULs6rx5dxtfYDDJt9YHVt5agR1Qgj1w57BCfuPEndMidWYm4DKEA1smGHQCat9xNJeLU5sjhGARFvWsTFm9Ae",
  "key2": "4D3CWhKujXxSaRKQtU9nxWEg5So3hHDL83dG4WS3vzdFqzb4Q7Sj3bwSS4wmzzJkHwNAXARKPCzwUDVHLRSGZuCC",
  "key3": "4xeEYPG62JFnBXTCYaki1FjQevaj8zBt4c3iypXPkcPfSmQ2EyCd5FenFTbdSwgRHJGGVzj4MrP6tqFYgzFccpwE",
  "key4": "4YupJX3V19Ka2M7fiTBtMyvsvDTw64mKtdpNY4XUp6Lefp6azFotEgWP9h21PEKaR6EU3mo69YTMA7hbsBQmFQdt",
  "key5": "VpcnU8zWigjAzkcmngwP4y1XAD5qSmHF31NE5k5we6WNXR1Kvj9GKFMvcicYmSayEDp5CbkRDvtdVhZpsxR1g7n",
  "key6": "HxSFMYzFmnYAwsxCBAAqhYCt7CTJ6JLjY49eqQzsKVTnc6hrwX7z6otSnVKwPwWN9MPTJegghjvavRBpQsCxx3h",
  "key7": "3nocgxX4aKXZihbAgBx65f8NKuENuwq9xCxD85TLUz8A9RMSyfLtJGCFT8P2ikFnN4WzhCLqprA3qeMYJ6UbCRzF",
  "key8": "4sNFwjdH4j5H5xo1hTHLscVJXRjbQ1h38JHqeaqDhkCjPAwb5fB9bwykdFvycB3LZnFUkKsqPiqF5CkyVSmeHFgC",
  "key9": "ZvYWk9vbnhioGWcHGx63k6PTuFdbTz5ARJvZP6wfjwoiWUXDzj933xBRexJRtcVFHYzvxmvNsKSUp5MW4MCZrT1",
  "key10": "3sm4bUGgxe6GaMbb8c76J9ouSF5FTfaFJ7c4GPJ7z5SjPq6WVPNNZphqRMVHprnAt7J4SMQDyrggLDr6zbNJQm8r",
  "key11": "4noqw8bjCepnaBezPxkcr6BEn86Lvvu6gtoA5ePMoA4wLcakLwAc84FG8WuZj5eiDDh7tt4g7Xiv4pkMhrfLLUfd",
  "key12": "3zTVBNZCJtzDhqqpHV1M9dc35sX5cnsQoUeMaVFfcraJn15dPmAY7m28QLdwbCZs1khkMhZRwiNXpN65fEvAQ5mU",
  "key13": "5ZLmGCQLwZomevCBEKmPUBouXiFCxK8xQcWdtMhT97C8RiLqhGQDfMUrMKEhH81UkmRYLsbfbBaDnU4d51WshoSw",
  "key14": "m5My9qzCTh5BWMvkZznWKGGYQ2JBgXT6asyfee2q1UBykrYAVBzwysW19C4BKZFLB8KnAb2qAE7aQ5XVQ3PSMBS",
  "key15": "2y58XnDe1HJNaTkEid82LbfpAiq9dZ5ce3qZAses2pFQXNxSRPdjDjcGq37rRaRGLjAj6W2Ypuft3KmS8KPXPTmZ",
  "key16": "4kdNxVDX5Ak2mh8s4rpWpPPUtWLBXpt3391YRdowoztAou1YjA7eiHVkx7CmaeETUM3rE9oG52fNtYV3MV6mhxRR",
  "key17": "g3KH2Mexu9oAAWPmfwEFBj1iuy8yBj657wEzvSVhJZY2CbpbuDo6SuJN3hBxsZBZ1VJVk5U1knciiqAyqsJAqXC",
  "key18": "3TQ4VxjFu1QzMUabaLyw78GQDTuW4be9WNdWwAz5bvf6zWsDeQjsbjNHeYvGGsGQkwBNMEYRCRRFbMtMa6PPtVwG",
  "key19": "5eyd8epsP2ZFpxFCFTgCThQ8TptCZe8miGKRgJ71MYj7LAsgeqSSbLTfKYRMjBML8nL1HwAuGhaj3BAGDHaeDqDp",
  "key20": "5uYrKHwaqKpDscXZHHRpZ3SLbRR3RHPQPy9ZUUVkzPuXujbKCtJzTSpbyrmhEfKTQc9sYbYaFPWDXR3GWwasFJPw",
  "key21": "48tS5r5S1a92mr4P9FWxMUb7DTdu6K7ubVRqiQ5Ckc2ufuMxatV3eHVGMMfGbiDHxQXkkC9CxoDdodyQ4q8WAU87",
  "key22": "3TkCiUcJq4Tx7vGQTVXTpUniTizDY7Z2YSFXvR8u8Lbzq6iS9aZucgDeiudMBnF9pf113bXDYqpYzQaF9BjELkfu",
  "key23": "3rW193Y48B9PrG6kYsTgjL849eQ2xFxcpNtuz2THSGFTW3EHw3ujw3y6g9Tb9xsuNYLgc1W9vSM5TTodnVPrCxnK",
  "key24": "37FxQhto9YfqQS4Uy5YitvauzXtpCv22ST5uENr9QDtu8fWNxg8iZR95HtAgHqUUJm4KCoeJCurGpwZ9gepZtQ48",
  "key25": "5QLEKjqJJt6bTwWkBnFJ6RYQNgFpsPYB1F4zphM39CbQBFh1QbJ9xEdoVuhnLSt1Hz4CUUr4QPDeTguAgbySrazN",
  "key26": "5bBsxTbeNRxm4Pes6nKQ5cDf3WuPaP2Tdqm6H6qZYjGQmm24mSVYPQuCxz8kBGep7GH2A5fmX3UPW42wJ7rjuqVL",
  "key27": "3rYQsAEdWgoBK8KpbWPqvcmCYMBwiWxvstc5zhduEYyx4LJ39j9LAY2iuk7Cq6if72WynqshNx18K5KisKrt1TPh",
  "key28": "3DigQbuhs4vRX78LpAfotTEPfPic919q9YvgU1kk67NQK16qw4hm2ejEyGXcnCQ44pKv4RnNm6itX6FNfZuEHTXB",
  "key29": "3MAeC4WySihYKbcpUQ82Qx1SENWNUjoeGtpnKZXUY7smvcUq1XU1HNy7NCo2i6C9BCg23ECRFZn8qBcqKrVEj4C7",
  "key30": "3mhywzQx5vbktqBZujxxzxVhUbMvBxuuPv5N74TSP3PN3fkmAP9Rn5FLHtHKi8zsMf5sxGU4YFJ81Xqsv7gn3YtM",
  "key31": "2ethnxr687u7ctXxz2tzzrADdETvxWaKrLJiCpbJoqEEyZxCqCWdUMudnSBKjpQXwmDR2fbSUERAwtvw2CrEMaQ2",
  "key32": "3nqTVWs5P4rj1YeJa4Dyv4mWMA3EZS5y1oAWbpWjVG3uj3HTs48h8ts52KMrf5w6Woirmjtv9PPNY9YiVjar3cKV",
  "key33": "5w6xzo6HMyqqCwGn5HQ7AncBxTrBP9bgALKHpbhMrwpurTxuTHGzaJwuL2xBJCUY38T9hu5LpTjsW6HEUsMxX8KD",
  "key34": "27dLPq9ziSK7rowbQ4KzNHzPd8anvQG6ipMjRtuphcuCtCvDwBkm6Pv9dHF2d9MNZrswb8LNUyPqL4Mj8PMfk6gQ",
  "key35": "Pep2vwpjSEGmvHWcKPWiutdrBSCJhv9AbpruRnqAZyh76WLRzcbFyyKtzDcLCUogVMtutjh1U6bxU9Zv8divPWr",
  "key36": "4EAgugaJyEVx4M8XcckVgS6tEVWHcPWre4XZ7TJmJJ47JhcFEpwmc8mGVEc6MNRhPchM5x6TkfsfpYmhgZXEcNNt",
  "key37": "3qGEMcajxjYW64h7d9ELvuigoHF9DE3kuM4GTiCTQmKTDAF5ytVF6tTGxXbaVqKRMKD2taYKpGRLfpeVCm1QVy4S",
  "key38": "5RuXFDPeXNRBFrnScw4ztaWSWAjmfDsAGcex7cZuYUwSf2sL327eCWYUNtFLkgfcB3aT7RqcEBZR5yyXPFnJtjCE",
  "key39": "53V5VRH4E49ASjWMYmfBfkWuPLZgVNcChRrNpJigDjQb1XjozjUKnVrcSLi89gRMFmkYxa29UURWD1uUqQsbRHsf",
  "key40": "5Aoh2D65iFPpJ1TZxmbbQD4AQbWyXJH65uuPW6oyMUxx6MAXqejUdDdzmkhbWDYHHqArzkYufNevwxv5vhm9Mecn",
  "key41": "66sJKfZDHbnBpGarhUWmMag9yn7qKHBvzTDNrcU5VdnwafAgGAiLaw98oBxMrfZ6AwgCLeBzRbVjRB7qeYTCJF8p",
  "key42": "S86mBcxrFRYj9TwSMvrzYqgyk3XdSMtZueyfhQ3c5rnbkfFtF6cyiseDG81SG7uRiXfPTQwA3s6HT1GATPQSybo",
  "key43": "4TA3dN1nCpjYikUHcmg5dbXVYS8rbJGT9TWrUsYjLeFQhJKnP6N4E4o9oGgiKXCcvNnV3XeMZtvXnXzc9vPxHyeY",
  "key44": "5XeKFFgziFfnxW63ShQW4awz5hHybEDRTUCeCAatLMaN5QKBvDvFdFjNNWfvpZ4Kur9PXufud2qF4hGZN14Sjtn6",
  "key45": "i7usrAEfbVyJTJWd9w5KXoa5Ge69vzv9uvs3weaV8FxzKhccNEFrzPp79woJgSdpnPfBoFtjtZ6uwtzA91wULBb",
  "key46": "5jees4Ur8iGBbrMxZN3NJnYY5avt1UavZF9GiBDFo6YVroGBWC1ovk3F2hQTEoMF6utHi4ehUijtBNNaTpF3T7g2",
  "key47": "4e4MXvf7f7RtfbLGVvJamK6tBgiEDBvsvcModuEfo8Pc6CFbxQViGYqXJ2Hr2v4Rd4DniotyDNs6RTcrtxC4A43Q",
  "key48": "5aqwW4vuoKAMcvtw9h9ERN8XcjStvJJYUgBtvQCxiwN38od6Mfb9kfw7YL4asX8iEmW94jq9kRG9WmrVsA7stEpy"
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

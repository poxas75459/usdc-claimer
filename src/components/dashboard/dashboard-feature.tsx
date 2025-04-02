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
    "39RVhYiydsx4Bbu9bosyWY8TjvHra6ouJ7VMLEEVxMxiXpXhdLFv1CFd7kepTwqMVen4vCv17w9cZRSSJuGeZDZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YJs2wnjKTNnrkVQpouNNgrbphaGjReKy4admGL7YQdmUjPJom6qDvLoY2Eef8vaeQ9DG4aewRhUNzLy4SwsGR5",
  "key1": "6k9zJWg1xTDW88xGwumVcnGYFijVkshFw8zUNEPXb7jVu7UHGxjw27qwWqukNNF95TeCreZXEQdSGpZVckx3hkT",
  "key2": "5frcXcvCiJ8gtPqyexEFyP7aTBtkwK5KVyAQdV7m4poJgC2KPWLcJxyz6Vk2A5iP7vHndwdA4YSag886RMUfStsn",
  "key3": "ea6suyKdDY3KnmuddAQEiFCNVyCaxqP9sGn9PaGiQu4pAynfp6UmNcroDQMiA6FZTmJ3Bfbc9QLnSrwc7DEJtuR",
  "key4": "yFsY6RFWL2v5DnbxVWBW4smtwZPHTiNmYgpKxVVJ9E3CiZPe5vaGMf2nZcGzjjXGXFTKDnaYCPWJgfLkciSpotx",
  "key5": "3aX5VYi5JC3hW9vbagKFv5wCgS71rdywAQrFt1yGCB2GBjMc75Nd1qqtBwssK36wPjtsTVpbXfhHq4UKu9U3ZVTK",
  "key6": "3P7BfTt7uEcy4VNxxogApuDfttyukhrUZAjHn4V2nuZyzUrYSyPcyTLYnQ5sTeN1L6bTcQYEHjc47XJaTvWV593D",
  "key7": "3Xzhp6bvDbtfnknnPVSmyzy4uXV2vcgSMu6qiDB33pAgCGCyMwSLfX3x84BG5qiLLtfPv2ByyMpAF7htkRss8UBV",
  "key8": "4HrUUCujY1iTD6sKjLVjtXfwUNPm2WZcj2o96fpcbu6Gu3skyhWsv1pioiYU39qb1aJXNikhT3kHfadJauvN9mY3",
  "key9": "cjmnkNwoprF8V5ixa2Ab68ZwXy3yT5JhDtmMypgP7ozUwRNVCQHCRo823pijmmApKq6kMq2xiQR5GcrNrDdJAnU",
  "key10": "53ooK6NofNxff5iwU2ShPFHXPVPnyzVCYWUtqSsEeiW1RQx33umZoBraUcBUcYxeF86wPMF5BYEBRvyU7ZBM5mX9",
  "key11": "4C42BF7LT16GYH1td6ZWi7ZczWzi9FhRHpfZQ1FYuhMNFDK1Been944Dh43u4zUChSRwtzxt2YoxybWWATAJuCxW",
  "key12": "67W5rab9NLCkJ6XRd641qgyiFGLzaNt7NWcPTnY9CRK4ejEdw7sgKbWj7xfzmqCNUWH3CN1s4sRn4SdXeTWt5YaH",
  "key13": "hRvxjUqZEEoB8SGqwk7oJHLTChNSdz6rkDggEnP4szWEAvBesPRoptZgmeV3eYaMK4HbbwcHVsjbB5S1N27t4GZ",
  "key14": "4GRsACRpRs8AwnvE1XMWcBi7jNe1jmqjS2VkCWYG9qGMypi62rZvbsMpnTBXMDdEpZ3na74ME7QJCknSgza9SFzQ",
  "key15": "3aM31BHgsMYe2jXsw7eCjrCxncqwCAbvCwLovTTfL8DTCrKhmzECiiuBDHYuSN9JDch3DQDkcxHHQwQQ7EkrunS6",
  "key16": "qi3pjYNQcaFUDZtJeJevcEVHv225HrMdmXUPRxCLE2kKjJzChStkxBTk5Ha2yVoqY6MtFujEbiT9ydc5YQUwy2E",
  "key17": "JuFmJdzAit2n941bdaCn3dKkaDGbhgqw52DSEhZWvW3ec5kzZLQQuzgWLuEcB7nHgejFF4NTPXs3i56tcvGhDXb",
  "key18": "2KF9Xu1PofvVSQpDmuYbjt92sskic8LYut8nw6AiY8SfPGtqrpjpaj9etCznZAUmmardZ1bkVNiv4FoUsDnkzLMF",
  "key19": "3RM2nHvfnAdrG1EzWCbQyMS5C93vzWb9ASH8bo2JxZkncNdVPWQSVMBq5s32UE2zW26FiqPMFDegFVZbLCzF2PY7",
  "key20": "252fNp954eBA29JGhyhYwU243eiekT13tnyBUKY8eZSxJgF9d9VXy9fAa69XV1TYY1BMSnBJB22zaLtwekcqsPwY",
  "key21": "3sTe8gLNwmMi28HjQnVthPdYuDe73xg3mhi1JewPPH8XiEqfQ3qhuw9Vhdtmpam51PxfzMYHzZReorD8hhwgW7zs",
  "key22": "wxSNbjup9mVSZQfN7xNNa3iJEshvgck41X8MBC7tAkkMwZXLu58wVZU3ktkiZiuPHakpU6SFYT3t9UepLuHwu2k",
  "key23": "2osYuH66BxJEZaR5ZFV6jWu8Xs4tFyTJ5uHy2cvkgLfKcDzmmFR1xTm7nmKrdcMNNzo7Doh7fYpuCEtcdkgJpvqm",
  "key24": "3M1b5ykjGG7r8DowiKMJWUYSg7vxmdXZLuY4QA5ZHNTVERLePWVZvmA2h89cz8uZT5AJF8hvBqetpmgAtzxuVr4A",
  "key25": "2qgPhfFdtGrTKgqtHFL8SsfdxJspVTu6UqCnywot7ZZSWwwSMWxBZrxF25c5Z1dsqWpokaJ7syp5Da2DA4pwhEn6",
  "key26": "PyVK6GhyxnnpgcpWLVVpMpP7VRRNXgifbpYQVz3ZVUMieDHZprspHv6x5qNrX6FptRsuGAz85f7Jbmpp4RFfT2r",
  "key27": "4SUjio3PMsLWVjzU623t5mUyfWQJ2ZFobShimnMxiWW26a4tLSoajWSPMuPUfVwHnZHdaMaTP2edkfweoNCq7rsa",
  "key28": "uy4MuZDxfDivsMQpBofABH1cPbnnZ6q8nLLjUe35FzHDPYnfqHDze4VVDrwPzZPRFRSHRtYnvQpfJqZsAkHLNpB",
  "key29": "2y2DADKJodwMrmRiW2AU75hiX49E1UM1PFu8MtDhua8YnEz9V3hghpGArsaFKTT51YvGd9dTzGwfDgw4R75fBzYf",
  "key30": "3ENKS2qjq74chsW3eAgbEyro7jMfZ7E1DWRJNfEwLU4ZPJwJkNLuGdgvMXSqu6DVbuLEbPbAhYoKs39XV73wAu5j",
  "key31": "2Kg1hVUcsMBFXLmaFBHmtEbbyLncnfBEfyF3DYuMmJdTFZmherGmCgzGNCG7pFku9EAJp5FJW8a39akDmKm2663q",
  "key32": "HH1f6y7nfH6wgrTfoV5QdfXq1hKKLuPEH6jKkvZyqb9xDNiRqW55BpAyGRijdZkhgGdHamYCA19Rsi59XoRTTqj",
  "key33": "41pfqqEb7oFECDMaCp1YvAYqQgMX7QdcNchhG7yd5XXaABxx4LBbNHYcQQDVxKvVtih32GhfnL7tXks6b9fKna3J",
  "key34": "rrtHhLk4S2DtD9E75gTHuNPq4SxAsjC9sQLpgBCCURYZJB3Wxiu9WZWPmTTBSFBvwTqixqjMji4UE7d7GpBTDqu",
  "key35": "2w7DrmHBK4D7vxzxLjDENDaAi9dfAMiWoq1bmyNes1cvREbmgQSmcrpK8wSYTwJxjD81ybXDH9Y3boKF29tDY3AW",
  "key36": "4WJh9yoCQHcKfDaNVWVdPJ9qRXN5cTCa7UF9jZoHZ45a845YFHvCzzo7DLAoAYaSwz3hkdoKwQRfXBSq7zqHguZr",
  "key37": "2YMgMvJF2QRFY2ittnbuuciR6yKgyCwwNrnSkwBQ9va7RmpSbUW6RgbwKPiXV1VnRXdF4ynosASFTWAHVW19oNSo",
  "key38": "5KBAexD2ofhc63sPB35g5L8Qua28eC8aQCEmw5y9kZe7ZSZff22WUv5WM5FvCe521Wae55QNBzut7QFApU6U4Ape",
  "key39": "3snHEDa9NJcRucP9JxHrqphELJucUyYJV9abmQaLb9A8zsqErqpBEBt8uGwKUaetSpChGakF3Y92SsQxiwhHQFyp",
  "key40": "4Usphk4KcWtSc6LwrR3w6qA8A6uXDERY7M9KHLe6GqZDMN9cYxUZa1sBG8yLAJqFxi5grC47Rr3a2FQr42eCLteV",
  "key41": "4AHjsHe1dpthXEpGp7FcqiBgKaYAV1iFEtxgrxDnQ14ssrETD9uD8xmSjoe93RRJc8SCwDm5W6u9GvGdb3w1X633",
  "key42": "HBahNFDJAShcQCegemNvM8rWXzavBMdjvqpxC84N61rAfDy4Mps3WsychRxkJ3DkJQSR99pDUK7ab49hxS4W9sP",
  "key43": "4C3P6CuvVsJ7bXu96L4qhiqPhVReLPUo7ek6GRiyo3ewjuCSDnEGZg6s8HmDSWkXSbfeaXCJ4no22vrpzRSVga3H",
  "key44": "LZqFLsZ6iLi58B4xyaxc5XvFCEtgX1qfbv1axTUdWbitsG2hhCDRgs2VxvjS7fpL5qMUo5YGW1jap4mJwnX9q2t",
  "key45": "2LCN7wrQtKoi6hNQWJRMiN2dZUbeGqa3MBoDq74shLU8ihPYx9fuL7odHrfH95VtibC3yFGwTVneguEoSGwmGJQM",
  "key46": "zUnHGAJnVp5CcM7rExWsbPWZ4FZ5KbZjRiJTPiRXcLN94Fy9WBnHGvkbJQMmz9m39AAnZWWhX2vT1RcoHiGb28n"
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

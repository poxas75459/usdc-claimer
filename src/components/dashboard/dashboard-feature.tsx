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
    "2WA9QgVDCBRaHXdsQkuvejJbShSZCQpGkFVhkj9FiZLmLvrNJRv1n6gXehiJDdMqDPanBdRUgJJMUVxRh8y2wgqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zynhfQNjUDx2UppNZVfeWdb6V2CCXRvU9iVmk4TfAwyHecjSNBwjQ5kAeSrPghhgtn8DJcviKTEUtfER8RtLnSt",
  "key1": "4WtRULVo1gmu33V1RbDayv4QyZk2E8BXtNk6XRj2jmCPgDer6f1TYjgSSTmd5zftozaB49gKPQLkn2MPkuAgahpj",
  "key2": "2VcaYz5MFMJhEuKr7CQdSztwbcCtPXLANwMygFzwySZNZ8tw4qi9719tG8gzLHYkq7SNwf1MyeCw3FPnMAQ7r6H",
  "key3": "4dDd5GaZUrzJoryN4aoiUj5AknXpjU232WC8uNR7uVxQ2iZ9ho5Xzs55iJCvpo4ufsJik73nv65ZqztbPohfQyse",
  "key4": "2ff7mDgDtdjkhbRyrB1tCz5LGSUTLsNGDcEyVqAi95g77mRj4uDE5DFfHzYFJZFSCC1eQBjbDiEJYiF91vZ3cGNa",
  "key5": "3An9rmvK8L8rsLFgKxYwYmwoiKAh3yQWaxqj48AEFmcTYCmusKS1n7nga169b5FgWX6BrQGFgPSwqq7E48HwAbeV",
  "key6": "4xeen4n5FmaQyaxc92nmuXnbh18Qp8BKQrz8EhfrSWsv8bh2cy5CCyfX2dDnxLRhfMnHUHdZLyiZzrFHrrxnX9yv",
  "key7": "JNv5EWFucuFsDLZSyoWmYULmkVnspDnEBqPT6Nubj66MMu5CWTNHTdBUAzQFkxL9Gv1s3HsqdJaPcCkVC1Tqquk",
  "key8": "2ejqU9H47EeRBypdecpd5e7Bcr2YG3kCfinjbsdMfegR4wQaH1EWHQRnDB4yNKVGwhFYQMhwC2UKZKqoxSAcHRV",
  "key9": "3G5A3C5XMPacwkBMDFb4Hzsw1Cfnb15BSUx99a3ZqLB7LV5wZzCguxk3rekxE2SG81PSomJqHyqRFbJgMLQRFJiJ",
  "key10": "4t6BJnBt2UcpufQeGL2v7kiZ1RLF6nVYtyXLsmoST3C2JShDvq5HK9DRhThtDUmjzEuPmUtSZSyW9yjFXUDHVbrH",
  "key11": "4ePA1RZP89wyNm5wwZWpn6G5LjTMoLn1o7CSoygJp4fXAFoHNj57yL4ouRFw2hjRcPE348QDSL3vSgTUk1mhcFcP",
  "key12": "3xAHJHXaXFRKX1YCkwVxGZGqLUT8RGukNpToAFy5yS437ThFgsEtb3B8Jgfm96bisDjWDr94UP268td8uoVwCaDm",
  "key13": "2W1Ro1M1rvPgPuWnagaxLMmbhN6kYws6GRKdPb6wT5SvTRSimfaqRSt3KGu4uzEcB8gwQeSQ9wK7hFqkvBs2Grew",
  "key14": "5E1GKKjAc9rdSKNzRc2bGF73hHBiE2pNTuLB36yfFPRNAJbu51djjh9dKNBtiPyZwHzBmy2D6K7afnRCrvWo8xHS",
  "key15": "oqk9TB5iEDmdhsdT1mLjNUa5mNyD5SpxGQpJwxBgQjbFnPXeYtBfF72h59mAK6iZBggczt7WxywDZHW6sFgzVMc",
  "key16": "5xXkdZGKM4DgzKHcNNN2hiCn5zmEPo2YwUDFdNh915YyiC3eHtCqENfbh3nV7r9FSyNpmrA1U3YRaEuScQodN9wa",
  "key17": "3YPinW1Q6MTriBGyWLydkGMBDieoxuMypWqEbcAZKKMFrR6RHjV5LhNVYdUW2sy8q8itNEsi5svpgyFHu7WaokRe",
  "key18": "3Ugkv1jWz72zqv7Sqwqa2YXwwuyYwYsVDzQv6LbDSQ5o43L9xHfvZqRjz7sguE4TfGkZowpjjKUHEngAhTexm3fZ",
  "key19": "4uDTrkgvE1CpGRJqiRK37Fb38qyjQWRqfUHNJmdqo6uumcYc4jgoypWak2rtmgu1BNbSJEoeQ8GkbwqFQ7UpphdE",
  "key20": "5YChuEp9J4ZybXS8GxLoqBd72z2UBBZo37QnjeXjLXdWhefwBy7A9Hq9QKWu6A3tH29R8jfcycEeax3DRcGC9Vvs",
  "key21": "xPUaJWag6k7zjf6UVNLe4b94Z3eeC7sEE2fKBsgzxqKgrY5j27ZvDWErJNbx5jhhdwzn2Td9GMPo597iAZpo6Fc",
  "key22": "ib1cuxCV2qFmkchw48uyiLEa7gJTFrFDY3cdqgGukDDvF2GqGaXqdefDjov2H3eYf8mz9fCTDFkdQ8soXJsayhe",
  "key23": "BcE8En2niGKJYmzb3HDTdufgYddDD7MYgZYWTacEpF4jGGwPZ7ca9D2quLe22DwomHQsTbzbBeeJuPM89ByhgXw",
  "key24": "UYfdwqATy63m6zdWR31rBfJCn9TJRH9pZapodRmgvFZXKnV4hVF8thVpZoyP536fU1C9mUuV7FSa7zqzgrgo3BP",
  "key25": "4BGc8nJkCtkqxmByJBzv6C8EZ76EA9RYq8jBScv8jj8vzCxtPHXFkznvtD89JYawt2j6gGFMy2fwGvRCwtzQierA",
  "key26": "K8aZ52kKwrcevHgGdCVCsRDnZDnokPPvNq4vTxfq5TU1WrXiKzEkTxGocWH3LPY3hhhee98mg8nHq3tgQddzHvZ",
  "key27": "3GLuPPdS6xVfESWDS7AeYgt3LEHYgrad6N6u2ggM89BqGovPAPPYD5b4m787xAELmxhkvP5vYnk1yLTtJj7m6EL8",
  "key28": "5SS7T4jojy5D57vuFGhPwGjWchxfVvDeY2EVkVwBQ1fxYvMjL24GDUGZUPAdUXYvu6tmNHnxxFcYc1t1xmhHWt48",
  "key29": "32GcUJX4JYvF5awjhb8iKcDPMmgLjs1zBCRsCvwSgtrpcJw7jiK6xkZiPXjyqHxQn9aVHZ3wuMTcbPD8N6SpkeRV",
  "key30": "2wG3dBbbau3u9Kjrb5vMvuKXF3eF5o9irBJ2qVnsjmcAbWkgh8JqFD6uGDxBQeYFQWqfUJCUk3Je36k9Vy9zQ98k",
  "key31": "3strKMdiJYRBnhJatTDZ7joUDYg8wmDvgKGxeoZPfvBDcYSGRQqsKvgr3uR5pPftm3sojVDrN1kMuJPSoPJTnuqd",
  "key32": "2oR6WnqgzsiWyX7Lkwa4o1HTJ9VqkB3u4PLGrYj9xuLprsy4vj3DweXX1Yk4nBCjQ222z1QQy324qJwBVhheijEV",
  "key33": "2ju5bKdWQ4Zx4vN3T7f4Uc5sosAwsh8oyCwHJ9216FZqxS9BXmn8swXZWWWJif3S4kLEMa7EFnmKbwhQHc6isFmi",
  "key34": "4xiG8FqEVxoSTTwRM9eAaho37A9aKe1TC3SjHCuhy2aqXDTvVCNzie9dotN95fakhMUX1o3Q1yUueDS3mbKZXsqW",
  "key35": "qhsqXrhguRaeZuKoeXjsYo18yMPWddSxknUUgGPHTYqQrUFVb1M3FCAnbEepJXHHqkFtRBAxqBgeyGcpe4qt7nA",
  "key36": "62m6fEpVZpo7LWq8pp3cvsk2GmpdGr7WcSzSLi1jcTukoBsR9uQXLwd2vze6CUeZ88ZakmqGRqSs5bWh3vUczTGS",
  "key37": "4JsLvNADsHtyrWH44EBkJMUiTpAYqCYVWdyzN7LpUbbd4oTeh2YZ8PJyUsEkRtJPtxQby4QF2NmkTywCuEGBXFnx",
  "key38": "3bnyYrzEJxfBVvq91UH3aMo8btdpgArSYpBk1GU854Mha1Xa31ZHiK7WqgE7iNLa7F19WYrgTVdNAThFshonSAdv",
  "key39": "YCYzoJPZDCqqSZPN1KhSXr7UStQ1kWs2z17srWFREppWeCrmqkFVUxW88SJquzF3cgeYv3QE83mrFcAhLFrLxV3"
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

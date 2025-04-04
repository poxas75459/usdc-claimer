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
    "41ygVtsGeteo7S4UJy4a4drsSCrkG1cNsSna6gfwXZ7Hqq7uZk5r5nEpLKq4f7PzZGce4ZedMADxFLCzjT6vVXVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCAeuJaKRqYBQdgQaEkhjiHnFH5VhpZYcSy2wsTUNzUi5hveVxMTDumGLvba6WLQ8fAvK3ikaJhHxuDPa89yisG",
  "key1": "2zja3wK511mPCAL2DPcy4Vtoaebb5LqQeQ4BH1rmGFWhoS3Nb69SG6bYhPEijjJBuown4AES2D9x27NL5QNSyAFe",
  "key2": "2mtH9FfNTU3CxCEDaRoGt5zpTZLgB4s1cG525sLnEhDL146NRv3zNqPSbeg2pw1SK3QfQW5TJsoF7cMhegtec5eb",
  "key3": "4pXR7y3g11wk7kCeREx4sNTLJRYmRsQ1dEJZ36iMhs5BHfGXvtakSv8zi2CgLsaMdPNN5Vn4GqxNDb3je46Lee5X",
  "key4": "3CWXmywTeqDHDTnkhqx6xDEyteqddk6TefZALV5Yv8Q3zWD6hxBnLpqmKnC4zFw4S2u7YovFAV2tvSWaQjVNm4uh",
  "key5": "52SWG2A1qR9umhnvhQi8j9RQHaxyQkpFJofn1hRQowwRtjCBN81Nt4avv6tCDzjnwQiVYhjaRXVB1Kwzz4zyy5LG",
  "key6": "eReCccZMjgo8e2RRFRXhuR52UMi9sa98BBoGDNQDGVcGFxqTk6aTuCMSvC65nu7QnB4G5VtW5HzkDGSFB4mVrN1",
  "key7": "5XKfc3eD9TCyvsrvQfSd9Z9WcQrCaActAq9CEexfAncanmm6CTwZ8vvBPYgt3NFkHKKVZUyRABDhTUxtsjxy1sZ9",
  "key8": "3dNAss8r6oKCvWrLUu1PBiUNRc4CjDb62YFSDcg6EDiszr2ubeV3qqLELVLyLuYeYkZYuy1XzP1c9w4mXLrYgGPX",
  "key9": "N1781QqDg13rqdzjZJg3WEep28hv5ymvtV5WXPzRSrjSeacAw1t6UJX7s9uRqKX9ghqgvCQtrbYeqHA1y5UjU97",
  "key10": "4pdQBdubbzJK8HwAmJDfcBArFF39UK5hhvKzMFUbM3VY7LUD6o7tQR5eZzit1dxmSjqC5LHn36KvYyP72igDT3e9",
  "key11": "5LC2xgG9zSEt1bmLS8GjFHEWjJVtPNaiSueqktbfkySZAfJgsM1vSa6iy7cxpxVn3UAUixthqfA3iF2MsxmsbcyE",
  "key12": "cJogyEYJZXSFBYArvtsJQzeGHWGEhoXKDqyhfBuF28Ya5TLcQXXX2PVqd7UP2neYdCTL1RgATn5dsd7JA3M8H1c",
  "key13": "p8V8siCK9shAiCLdkCGp2iURA74popojhcPqDv9zohk34gLCwxg4wAfEmHBJBqDRSyshM3jiNWGp9r7X363tUZF",
  "key14": "X3DtfgHybSR1nXcAQKSA2VATjGDLzXyPMY5EjYvF1wBRzKzQvZyYkU8dXQbiSML8FsfnM1MaTNbTkUv1wQPYvfC",
  "key15": "3UU6vgLFQ1hcT8CfugeYUcgwNq3jVvHtAxwScdakuEXVsMxhp6d7XBSeyTD9YorXU9QK7fhZs8s999dmJ9nzgvHG",
  "key16": "1MTTDPnRWQwUmgXAEs9mCrhoBJp9iJWsDmJArJ1atVF6EhioyTbLSQu5HeFQ52LDc86ZFqRbpujVrVHQZnmanHB",
  "key17": "3JcynBFNRgwKXFxeCaCRav35KxEQnvxNL3Zn84KyxRYKJp3BVpNaNSX5fw7CYeZKyabhyqfqGPWpBnBEyoCb4DKn",
  "key18": "yua9g6jDU199ZvSNwNW5UW47JXVdX5xtZKwyxcH2yZD78yggmRBi3F7YtRbofyhekijokBKeerFcXMfhdkCgGNE",
  "key19": "YvLm9wAeuW6pxzDpnuwiZ31KTswnSzxEHfMTJrRpw9JdgW4HUGpkZGADzmud9oQAVuBeLBZroWcLpwTrAMMeTHC",
  "key20": "5cLfup8BGbF9LzN8BvEAqebeFBtY2yJQ5hYqCZRmaR9X9Bg9z5PDZwzcUBTXEURWDbdyHpj1wZFNy3HdRd3mxn9j",
  "key21": "4oSSZtKMZR3mUJVqiNoqvfnXtUm4UyMbzV2fjjAZ2exqGFRWF8kbLPCtFSShevwd1z8EKpamnw3vqUQPcocqdMCr",
  "key22": "3mu3XQfr49sqefbUH4REUeZ7iuHpZLJUNXNUnJ7M4mag5PBcqepS4AqCF6VoP95HEHLqLtPHbyogFRRNNef64Cuj",
  "key23": "4fweSb9YJcaoLCRGmJqZpTinpPV3Un84kSussLVSxgpdjThM2Nq89wYqyoHf47vLnRUpEP33KT6GB9eRA96Ax3kx",
  "key24": "2ah5dxYWcVuMJbHGHzWNhzW7QUoAg4GjpWCp9WpaqgszfttC1sXMxWuDrcecp3wLTViHn2EfNZyZGZP7hA8wTqPD",
  "key25": "DtpfqeUgMuTe71d4A3mc78Lv14kkvs8uWpSzbpzsiyKpVjETArXH7QBfA5dotDdcamE3h39BdWhDZ3rXjdUaHGk",
  "key26": "5tixJyZe6Gk82jcjNQeSAf9JaiL36pVhqt9WpQ11JjXLrJTZtnKWvNi865mJnPq9bj1x5aFcNC9wad5eQfd9vVvz",
  "key27": "3SzjEdtgfX9u9gronasrvK81UbZ6mPDSW7Qe2VHmao5N8LYk3Tyq1QxwcQm2SFDamnmAKbajzLxAKH42FWbDhE7R",
  "key28": "41vUJjLx2viqXiuptTiTNtUfY2UuPcgZa5N4jUW2nvovQPiBdrL8rtrnJLgWXWbu75d9DXp9YNf29BtadEst6mV8",
  "key29": "5muhj5X2pRdhuspLy4v12f3gA5N4deP456i1HKBv82YQuptKZJgqs6y7AicGfg68RWZziwQFxtuFUefMBwYyVKmU",
  "key30": "nnf6Zrx28kqPPUy4UvZPPwGCw2FKVJmvfysYcD3q9Auz2eDwE3KRwPPDGBHYFaorHwqVBp6cJkwWDV139gSC9uL",
  "key31": "5mAKp8X1nPoqJAKjqbHmNZNEcYJVVdtwEGvvjfy1WxcKF43PHbMZrJX4mFT9RhqGu7c88yXjtVXTS5hFii4xHEHT",
  "key32": "663p7cDkZQbLbZyioGLHpJCTxtvMvQV5VRajWzEQzniXAbAraUN1mFNsLQrJLBreK1XbuQpCJu2Sz97DzWkNPQAn",
  "key33": "4f5nMNv4CgTVnv2YRnSTfnC727eLcBk7Lz5huTTg1EH1i96VYjnuruSbhyFkFRcavhHJ9ZtpCCWPQzkC6pVvJoih",
  "key34": "65SKR7CjtCTwHWB2dLuvzw2P5LCRsrC5uV7Vs13NUzxLHa188J1o1GfUFB8fr8YN9RNcjoX7oTAu4qwwN1frZVt2",
  "key35": "2ZttmtaNfQt2tVinxX5EXddsm6FtvZ7293eeGakU2UKE56ADagQ2uauQtsy26n3obegKTzNFxEejkVE7kPeTBH3a",
  "key36": "59rPhhKS8pjTE1zEQpj8cBGcY8RvTDK7JMHpKvAEzzuCaybY4VxZBtYyyP65TDLKzLcocpMK4KUmYoJvWyE8FABT",
  "key37": "4omv2Ppknj8WKdEWU4WvBnwNBsq3qPqJ5VQoo94HBKF1u14GVWHZRhtLNzG4ZGzVUwwno7SU5BZFf7m3DTiAayLM"
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

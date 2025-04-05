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
    "Fp9y3DuhN1wQAMNbbKEwDJUXbfycBvPvqLtBWCfNvgr7Kyg8vbuMaNFj6Joxi42DQQaksBfk2wMyDDBEaw5FsUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pswH6miNSRbAkF9gjDjmnjABmv3UdmxDc4nNpPzEFbnVtHkD57LsP8vRjv9mKfVV6skQDdfJrq1GEH22ZE4Gdym",
  "key1": "5Z3xzFs7GKp9QJxHaTQkXvLD2eae6wnfRwdZ23uUkvWHFryWe3tQXKqPLFe3wv7pS9Kdzf8avocvZD3WLh1VNB67",
  "key2": "5mTkVeu94VHbz5dNfjZQcpessFoELYfpU9RQVeaheXTCmn8igC8fUU36sPiAXASGR2NF922AdqTL5stdURzZrMCg",
  "key3": "3xAic2y2s92zeoHBZzp2WUyF4bS4m51stLemg4apMrbtipYXvQwPkgn6vKsvR2CuEx2APXWredBFAu4G2xMbmnGk",
  "key4": "LzBrtrzxFANLiqnzyK239kqVVoAc4SKoBCBYgSnetiiys7DjfuJqdjnK9vPMt6z2B1Qh5N8YJ5kUxdDbHziVgWn",
  "key5": "4ac1b6A3SfDooev6TZyh9gX8bTuVeQ6Dj2vb1vL3AVLqVMEuu2K1Fgdn8qNKgPJ553PSVfaLd3MPKPwQ43Hr2S5J",
  "key6": "2Z6Kp3fBt9s7m23yF2xojHYcbU1LoSZv7UgagaSatpdAr7aJrjZT4AZmDM4a2hqb3eHZjkSenSPoyifGyXchabw7",
  "key7": "2X8xicRFaJbyA1RX2HgPep6aRC2Sj1dBXQL9tpday3RdHbyzYMjab6KhaT6FcNzco8b6TrLbyAdmBXPLE2VRW7WX",
  "key8": "wYCFVuXaH6oJyzRV76fwUiGSBegX2K7eA4QLoLsEUWUc4frPLWkx9qdQrjPHuNjDv6tD4S1poQTHhMSEWEcyxVZ",
  "key9": "DgSzdns5mRLa6EgcoXNBVWbvjKLfp6k6FWq8YKnLcCUcSiDcBEogu4ZHAwMCRdoD19sJsvpY1dMGKFv4oxCyy9P",
  "key10": "4wrkLmVecyzb3b2SR6GLZkLCLyoYrKGbysiJzsZ6jTfcqNKVtwuzgzX6E1t3QtiVkSFCePnSjiutySm2PiboKZBz",
  "key11": "2AeGq3r6tSMrBv6qp16FUUEK5Cin3qUQiRjenXukvDkZJVUgzHJLy33o814mFDiymHpzFRAUSVkWgA6dktJN589d",
  "key12": "2N5SAEdxUJqnPfR9SiahejD2jShtLbzY1GHVUmRofbFDFgifkkxn6RXRPsDhtVy85jeC4uDPpJcfHrB7iS9UGPUp",
  "key13": "4JTcdMZcADuMnyGdcJm6uZbcAaBXuUucReVBt2FRBf3qkv5rNbcPzKb5uSotmERvethnq8ibymBeWBL4tgxmpnpq",
  "key14": "66v9jeRVQdvcnsKBnj4teLNjRcJGamPFokDrnPsEUPgBNPaD3EpvU9jMfz8shmhpTbNu1KfQ3QYUvVYUrXHcTF5E",
  "key15": "3R2LzfFNnRgzXQkX1NED3RCqCwrfaDaEf3RKY2c2iHHeWUkdcStAWJKxT1DF7xWv4xKaJffYradt5XYQx3VgMoo2",
  "key16": "efXPeuHXAwgaho4CU8ESR9UMu7XPU8b3b41Zp776wrBwM5yXi9qPqmcqpYjYwm4urCm7dCn6B67PStsHZ5quAoe",
  "key17": "2eMDL1zxb9ZtaXkvpfgiWLZkX4JryHMxkj9o6q8z2eRHv6KTCXxzSvQWpiBZbJcPrZnrFeVrtJ61M7mdAiaAPLFU",
  "key18": "3Y6tqrcjh7UQnvUzEqXwe8rpcfmCXtjR8qcDuVLoBy4Q9rQt8KUhPwfbjPBxrvQN9uJp4fx7E25mcDvzFLqiZ8cx",
  "key19": "5PUPy43afK8HcmV7JsDfzvzRYh1SWLNJeGxmJViCoaXcXiaNreFJfqhkUUjHPN7WDHHkfxXWd7nPC5AwJcc3mRZg",
  "key20": "2nF6V1AfpUsRm95TMjWuWzaZqzBN7k6JzzAaPauCE8pnN6LwnDSVyrC6tbqJxfPkZY1jUZmQ7vFRBYaHLxc4RV6s",
  "key21": "21Ug8R5LsKe6G9DdaSSKDuGo4ZifEm21mVeTsks1n7ivv3AejsvEzYDnU7FjwTDN6HKtcwrgfsnf1VZVrczuaXSu",
  "key22": "55zfgMHxWBFFXKRm9JrbHQcD7dAcAJNTiEithwfgLY7cWqcNV2krSBQ5jRgd9uoAccoUtd1DD3tUFUcDnennsDN2",
  "key23": "3cs3iMXrsekoehyuc6iJv3JTUP7JKGenZ5xUcmgkLtHhKezXCr1wYV6wHugQsQWBAqsjEq4saEjHwcbSDSiAjGwi",
  "key24": "3avgGGL6HS9iCqcCJZSLYuc4ECpfUL1cnAsfrG61BtdUcvu4wQ18zv3ZmZkhTtRAhshj8KzxM5k6GZ36FUizxaRg",
  "key25": "2eDKNkmAdPZVETEeuMt14SoAZnWRjN9zteNDQSkkWUhyXVZ59mEF3N7mRcndo7WGKd6CUjUW3vwLbRQsZ9DKXQAt",
  "key26": "67CaYPhsPbxmNbVnh9oJpqM6RsdLVf6YTfrvQ68ncD5v5g9CeiKkWfL68sFC9U9DvCiK7979XY7C1ML234a5gem",
  "key27": "5w6tMrzQqDG6aBidhuz4f8Pc7J5tAoW5jPUsvM5E17ofeYmVSpTcHBGpf6FjTc8oME3WZGoXAMQuJ2g6S8i3B7bW",
  "key28": "2pKKsEB9ZWe4cUnxH7vT2qUA5MSimhKTGqyj27DTJg39B1bZN6eZ8MV6yfV4WQhYZBP2uP5FxT5ZDo8RKGqWHQ21",
  "key29": "3ePCQaxxPBuFGFuvs5L9QHj9xCH9VuRDQSRKvJqdb8KgX73i2P8TQHFRhQEWAkDiRsnhbobVGjVnLh6AhkJDHo8t",
  "key30": "5FXgW4Adn7Z6RQcvKVR23eDv1oiMnpx1GRrhNMimHwbNpBhrV8RtbCS6yjsa63MpkET5MmviLJmRJtqCyVACYkvC",
  "key31": "mcqSF5g9CnEtgXZ4v7aBDGMfknFfLVJyvxLmb6ZhnM8xBkd9BATaRnSqtbudBMwE62HHRfefzVaCF9SqfWRygxM",
  "key32": "3NY1vaCeDXkg473rEkAFeekCBcp1qB3htCijFUMW1SG2qA64Jm83GAuhzq4giRcwu1PhhQcmet5ag2hcnxk29aV2",
  "key33": "4pgmdd1KHZS5LsbMjfw92wXT5kNUQCAzesGpntQEr6uFkW4Mm5hvLWBXVb6ALzWqN4fTFy1DH3DaTt59oy8R7TwG",
  "key34": "59q9eS84mQ8apN2GNDVCfDB2L9Gnw6MoHdTo4sKL5kCARJuWkemRhoRnajdwG7i6mBtZVHmoPPCEb9TRCBz9MQm",
  "key35": "4onxm6WNd3g3oJpSaVfLyWZLkDnBY86GAGBes3CSWiKrZHrvKUe3GCZuBPh2D9HkSwXuCjmpGVtTkjUVNiGhxkWZ",
  "key36": "5c2jbN1fwQ3WAtXs8JYC3hBhUx4cba1Actcc5YiNr9hHT1sFspeMaCExwGuzvU3zfBDtmQCV4VRmzCURH68tgCyy",
  "key37": "2iZt569iT9qBqZdxNjVbEhdhHKWADUN6CgHbkQTV2jg6KMaSWcbUj8sVfPzr9Xq4xHCwV8y9usQ1Myh6bWfQRfr2",
  "key38": "NfikZA9gkmTGfyozdLd1nNq1pyoU7upPoESrdg7P76H6fpveVnYr5GnWVuyMTAGZwz15eN7xWiBpyN32KsTae1C",
  "key39": "4ucSUAfEuQazisKNdvCNQLaknoSCqqJNdzNJueHZrL1ududhXaAywuUcdaerT2WtsJ1MsRtbeyyYq7T82XmguXh8",
  "key40": "2Wm9DeE3u3iCw2M9gu1SxFHxGvrgWd47ADymkksEzwVh8V6JL8t66AnnGReoKPJPSsEKDMHRnGZsSrwJa89Y2cUi",
  "key41": "2QCpSNJVeeK1KJ6cYChpK9rKrBzQuHRnohuLCzNnPMRUkRb8qs6uSoTogcCA7DKmko7uooGdmiQJ7fxdgFQGD6vM",
  "key42": "5tpQTPVoJFSV88gLV53RBHi7ZCN7EuqaBcGF9p4isj7f6oxibiVHDh71tSaqBaZYnikjB4kRTCriGQvdfLP3ZYo2",
  "key43": "5aKPLU14LT2whEZyx4oeVCFvwtJ7uvEDYUqJiRtyRrCVYrxyXRanL54Fa5xu9HPSGw668StihE2mfpd8Ww5fHawP",
  "key44": "42fs1Sb5mAe4K4hJViprpuoGpHbiYTbmgACvpVvy7JAQbwr1KzHXqYzyb8r43adr7ZvddqhvhHBTxaxs51HKjwMW"
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

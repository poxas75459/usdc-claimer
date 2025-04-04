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
    "3dRHVusVr5D5Xt4xiw7Xh9n2ZubcHMEvkktnfCfbQETiowLkNnzv7QxEFNxSLQTTBLCHdJxbrcX5wvNuBGw1Npt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tan6fr5z36VgAaDocWF1VFDE6HVmMdeRrgs6mi3TrXzUSpDj2smoP8yRa5cMPHwDm7w5E9NeJhT5Re9iNgTPqVd",
  "key1": "22L4Psa5Z5jAtn9F5Lr8q6ckU2MHFfaLaEzi8Q8TYYjcdX6pXwrFdf7KAxzL3RB1sb2GDf8dC2CkPYd6XSJNwXo6",
  "key2": "4SMiB7pGdbs2DGfWNM4GoSrDpek2o7bdSLktNRUWyLytfj6nFFqUSTMp3Pv9Fc1FSJJjWZk6mZWhKfjUuW8P8zeH",
  "key3": "3JrkkKfSgmV6q2FQ8CJ6D6Djp2K7jXheBKxfZHfYNad4tScHaqdGwJ2Qr3DahFxbbBE9jzuU5SDpJhr3KvnMyKrk",
  "key4": "2geM6xQSMvgKBDbYY18dyBUfoB4LeRGyrM1PX74X77qdAZB7RJErPvWHC8ei5FjM92ciXBLZfSNhkQiKTfvF4pTh",
  "key5": "5bWz8J4nue6yJKNEuvfCdsRiJ9qp4e5UbAbNpGGycfuBE3xCaZgtrNaMx248CmsNQSHB5wKAd9cCXQ4yGbbV6sr1",
  "key6": "2r6iM56jjFS31PLDpFSTdLjCdhqcmpsUuCdcvtWvJe1Y4yrwrdLGPuB8ge9sPCnho9PrVJAY3scsPfVNVRBBhyYL",
  "key7": "5qFwPCv5GGbRRTJLDCHHM9hmPiMhjbTCdnMQKsCvFcMLM8T3ntwks3RJ9SnAJkBjVoXgwS9Tvj7m9qr45aFkQw8i",
  "key8": "2Nh8g1dBHXN8VrrswcqdAaJ96W8zoYjXP9PMw2tWu79oPh68nTJMatPz47LSUp1EH4o7E4aVhuG1YYWyKQvBQckK",
  "key9": "5M223xm17m4cAUbZJobpq26N2dGWqveDt968LT2BoGAkFWx2KdCv91Yr8BhYPpRgAgtrydZm71mhJqJGxVDD1nXS",
  "key10": "3SrqxPbqUVoYDTnJaUejqvh6SN36MS3t9sx5T6JbnQjkFcWgkRV5xRUkHjdFjTzVW3sfuTfdBKgcz9E3ZNF17UvN",
  "key11": "3BrG2V2Pe2CfM87goghPkYNskD1QH8Q9uwz7s2bZ47SrtYMjiGKumXAw6cnoeCqGCq4vV2juAQfk3ejfdGyuCY1Y",
  "key12": "67FHT58uBrS7K9dNeKhNMxmTGefEUbjXzne6xhku1WgUTZjA5zbFRxBQJH3zRe92SaEBtQMfMJRrA5874QgsLD3Q",
  "key13": "3LvS7wYZ2MiKNMa8RrJZXCzfycCWm8z5XQKWvVq4zrNZcSfMAK1EpaqXPKdnwChipwuV7QAji4AwBwes9upYP4EG",
  "key14": "3qEaAdrz56vgR31YodPhwePTDh3ZZ5vuzie1ssUPAMY8csiJp3AfTCxZXtLyG1J4eEtnbPbEWpCzXRrmZpfgeLKL",
  "key15": "3WZQXZVDtFjBx1Xk8fNZuPx55W914Xew5x829JQUDLdYjVNee52iZArYyKbpyozv3vEeSQXYsadVgZEmCRkVB5FY",
  "key16": "JXjLmE6JR5n87XerG2DBWeRrvic7f39vhCpj5d8KzzryoHNa587A8JWJZtbS9YrybfKdhi6nLPpihnnJCrRM2Ve",
  "key17": "4Vu6fXQZjmmhS5AGxuESKzCFtcssuX4Bur4AGMUa2DPh2fG56vnncPEgi4Dze4WWyZtjN98yc3dptF1AeZqfUf56",
  "key18": "65TVzhLZwCkbrR4pHSbWMGWxgsjs77eUGRmxL6iHrNMgr1oMnk8WPiDf4LZQDDrtK6F3P8EZCtSWG1NZi7SFVfph",
  "key19": "4pCSeDXN5tbzgetP3DyDcMyPdxGhZN4dscgABmZDXDdkisPKUvm3CmfLEFExUxDC2gwm86jixJ8y5pcTNnzT93Kf",
  "key20": "5VTuUTg1NkYHbir4e32rHUiJRvhwBpqP7gCyAZmG5hL9ecGbRynLgufQ8CWAtAznEFvddQnGciZf6NEJ3TP4jJC4",
  "key21": "21rVQgoKJAKWr3xVT17D5G49ZFnTxpLLMZzm41Gy3mXixdAA9J7ze5axfCnjsswZxisQ8BuSEsdBEn6AK8hh5Bic",
  "key22": "4hvxnZw7DtxVg8JrWD77TUW7two9FHv932kFaF7J4DN6fLVygN3VcVrLxMts8e2N4cbUecuMuGkNsuH1cF49KyTH",
  "key23": "3WGrT13TDffFkAkQzP4pR7cG4HzjZbVU5kWh9CNDRnrXRd9Xh4DqqHtZaHjU9FbgRFyNukEbwP2SQDT8RwsgNmQ4",
  "key24": "4x2Un2d7QxQp8TUWAUebZEHDgsjJpzEnxBNtLbRvoiShLH3GBPaAy12bwEQaimK2YZkjNtsihnDbXmF85MNou4nH",
  "key25": "2utsNJW6coj9noZFU7xekti6ZBna3j47vW4x1jXv1srKJLt5QTg15zmLZStgjPf4ASMpYJjExf5ZKahZ2CRf11MA",
  "key26": "5ruuea5qQxJt46JCtNkgEG43PXTym1tSQojtDEyphvX66pmoT35PH3s2J9aME6khyAk19UqQhXZBN7EEPQry6M16",
  "key27": "4Bnngmkf2vwjqYMNqqyALLzVDY6FE6U5e3u5RYRWpUwJ78Sr82yP5agW6TbERuNGnYi3b8Yxf5VhP3GEWT85hX2z",
  "key28": "5P9F4xQuA2bPPWiNr5kTuLt1ici25defAbbQ7uEssQXJNahCi2NoK1q2jWFvfTkf6ySaDoZkZx1UoURpcPLzf8qN",
  "key29": "2KQ7kvH5B492qvMrFGMMdcfj47Qaf9RPNAkmu2qEKX3dy7oXLmNV8fNuFqhHJjgXcoi6joSkvkxNRgjpdAfLPzCk",
  "key30": "z8sF9oM6QuRRpbPeZxn61q6xBs3kSXsdryqiW13oHVqL3qPhCpDf5e656WuRcTPYb7SLimJVi5UC21QGRtZGLZd",
  "key31": "3ty5SFDbusRTyt1bFZjRsCWDN3BKHvQGhdjYm1P16eMBA1Xj822F9GeB5KSWsSW5D1ShLTBpqaxQDFdBkbD3E9rB",
  "key32": "6jTYxupE5oJRxnL7z8cNCGdHYidrvoR8ecndEpqDbAyHpu9AkcUPSSgYCMzWM3YJhi7FW8eCgmWDigLYBkRJjHJ",
  "key33": "3aAFmzVFxGU1Bg5ZUc6afvQ4MSTamTj1fUggks6RSwALojRDbb2Ty2w2exiQVsujBzPrqJ2E9M5f6yZSMaKYbXV",
  "key34": "4x33ohjrsPtSPmcK6hnV1VHHfS9g5f4V3wu7fu9xSpWc2JXKvvbqk7SDzGwnQuxWESw7XjJcMi8HxUgjBUKWZ9zf",
  "key35": "2dk1x6XdEnNs1L4c8oJN31jkENVbiGTszSywxztzKiaNLdLZ5Et3MdExYPKeCvCFoBxVtLfYa5gAXM5LFscCykfs",
  "key36": "hKbfBmMTT1DAYUC4wo9dy8vdoqfLjb2FJUu5Ct6QTtoeBav4Q5TjmJVuEQhWvYLiPRvbA3HQNQUPxQqCNkny2oi",
  "key37": "3ZnByY2fm89FG6HpRq5yA481onu6z5KDsS6hjyBSWXX6eEPYy6onScDqNPo54wuTQQuTo6LxvovAHUBAv35aKejf"
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

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
    "AVgRR12DFWzB7FVKohaJRPe2ft8ZrqKvL6v96KJhAP48m8hzr4wq673SYyVmUVzXwUJ3snRxa7MWRC7c6j1yDBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bfEPMNNXSkcGDPqjpK7ZKrnafKh3Js9tR5VVHCcAd7LyPNn7o7S1Z5odKEDyf8ZgtBpgpBvucpopcwAycGyxFQK",
  "key1": "8YxfNT6BWPKxTVrtUypGBcDiGU2wbF9gaGu2LWbTHimwY1GJ26bim8Dbbjtdcu8U74eQu1joBvccUyJHwG83vZW",
  "key2": "2dPDZpPk6f9PvNVWA65PStY9kvddNWbHnVBjRp7g1YY1ZFiT82FkJRU6eD6Ph1c37P4NzW8rE3KFQhRxKQ9PQCkS",
  "key3": "5MMne8XZbjnweYk1GfVp6SHZ9zLPuTy8GYmvnYTY1S54ZfDCzrtWDLsvUiqZsxH8HFK3WiCHKzMNdZkaws4YBmnq",
  "key4": "2ucAv1TNhwHY4Sf61mMYTmkm3zpbsMcirJKtDWz9KFWecZAULMNtamoLttU3RBBuNm27C2Pw8W94dGZtskUJN21D",
  "key5": "2QKr8oqHy28YZrStxnwSG1QJNgtcvE3cUPCa56HHBN32bKVLg5rSupay85vvAVYpieC38rSvDrd5TFhQULrW64pm",
  "key6": "2bRQpxonP3bUDRx8cdgimcZzMmRBTD7na4Si1QLHxMmzuHX8iusXEwVAKd9wBewK1PJQZJ2TR11F6EWbgpgWuTTh",
  "key7": "2GgWxyZa7htEJZxrdnf7nn21DmHy5TiWPPYzXRcesLjRQAjQvLD3DFd3T5ghQGur2KUaH4yLDPrcviVWbr5hTjFb",
  "key8": "QnFQ7jie5Ejwo9nNX2zqNLGHHK1oGXhAeMwbdSqkrNZyCb76DYk9paGrgaZmsWURwbbHLZ9JCKBQuzhCxUvA1of",
  "key9": "2C4QJeB99vdXeFgfY23g9Jo2BjQGLqN9PswjujC7NMUdJY59JyVUVXNSoiZpcybXkJhPPDJr5QPGL4Cxw7F5GMA7",
  "key10": "4KLALm74MyG6eb1qVBcR9ctZ9sbTSePG5vHMLRs9ur5CvjZVYTCeWsieBAw63qqKn7gLD9toJ8J6R7P14fw4p2JK",
  "key11": "LCKWypKAjBvyFqtZfakej9et9JxxC3b4zxWpLwM1RnJ7z44K3TkrG6YdGXW2sq9bfL8AMXjeWS3XiuxoFCY68c8",
  "key12": "2xFCEiK3sa1kaKsHFumW68CzeyVdfYEbLTUHy9Uh4WbhvnSza7D8DNNuRTNGNVzkRy2N254mXbSXeCQwE6qWH1DQ",
  "key13": "keMavngCsQnVzMWcvJrmkAyZtK1oAXZndn4FfoN8pGAia2KuogqimUvNsPDchVMXACFV17bGR26VFZQZk77GYCK",
  "key14": "4vtbiDLVWs3QetHSPCzsbkMQbxgUGDfYR3Jw3JbfLgEAxcgPhdSs5xofphin3qdq7yeFEaRaLbMSmhLpPFKfqyBs",
  "key15": "3i93nh31ejo5RTSocMXgGymfptJkpMREi2b7i3z47SfayMQt2jRjwhNCbewJFJHQBjwFFhPB4iH8gjpC78Cyi5tV",
  "key16": "2qVB7QhDNdHU266TsfDpsBJY8sbSVp5Q1i8PKSZdvf1PeJxnjDhS19qdGF4EvLoHkjHgbyCfrW5cBKneajZ4eNN1",
  "key17": "5jbfAd2NGr9asVMZfnwTkdU5DZfc8dWvPoVYkQsfNCr5qBeH84E1Y3nEHZSXsHMeEUAsheXPAyeGycSauNZmZr2j",
  "key18": "2BFzjATqk9VutG8yc7U4aQw2z4KNspj6QoV1V9qWkxCDbc1vsgRT9jQpqJDJTW11JwwQkNbSQGiESSokV24rEkgV",
  "key19": "2PosXHQMMqiNMsyvAx4dJ9JWZLVcjX93EZYPtAVaHxsP2VJ6wyMSN7AgBvTXBUbC3jC9CFzvbtM6urfYMMRmaNSA",
  "key20": "5EY9W8K4YdH2huJw76DtY3WEYNU9YrSggujbHfJqXfsxVd5aE7Yk3X5kqj1u7smM9dKicf23ePaXZR5Cf2Xk4bAQ",
  "key21": "2yt31622GfiVeNtSCVwrNJSvceQGYR7FHhr7TXy9FDwBMS7hfVCxSiNdXrgrRGmHRAiRRkRN63rWAHfZLAT6daog",
  "key22": "2KaSGFQ37SizQsmoFFsvvorohMBbpp2SxVR25DyH3R7Piz4o1RKPJojQ545CDTJK8iavSexXc5botAPZmgYdaWoi",
  "key23": "28UmgxekqPWi3kgG22S4uZmEhREaah9NVuMuQRXVSdNbcArHuqnbdAtxknD2ZrKjyagabTMPBPXorAyctez6FHKc",
  "key24": "3jNzU8nbzW2qjxnowdsUkhj6QAV7TFD6UdayWnShAe1EeKJxHKAnUfEuuudZQiSr1zXEmvrqA8EG5XtggpM7q9d6",
  "key25": "rvg5u6dtYgYekhtMy9LygWDLVd9c5At9m3sSRYFu49YD8yqbNXn8LBURdfpv8bwhdUgtYqAqLzNuA3XHVuTSngJ",
  "key26": "tYip6iEiac9sYJrRV5tUHi7AAwimRTzXVXvtygFyEHmCwH8dJ7hTwTUjKpGdk7A18vU62AHtkJmFeAR5hP1mapo",
  "key27": "3w3x8LW8QWKwrHSQY3tGdnrY3cQFdi8HWgzHEwkMF6gNWb8RtGpZw5BVFyZbu3diDqFAG5R5RGCLz9GrG8EMzRsA",
  "key28": "5LBnMZbWnD9tDpG85pK6aVC72KipmAgGoMT6uUqg27dSYEJjAyq1RB5c1U5G2cNAPDTso3Mdi3XX664CDRDJBVso"
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

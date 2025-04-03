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
    "MRRuGcKUYkh4ZLf4Zp5Jf5vn2D5PDoZXviLZBVnjfbYbjEj5So6XVHRBaGNZre9UeEkwuYMez49Yqtf16rnKgEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59sBCMuwmFjBDEAxkzY1ez2nBQHQhXrtUaR8iviyW71Pp6NEiu7D4j3Y2LKxdyZCAYPTj2XPdCdrULVbmMMQ6iPP",
  "key1": "4ouboWDu1hBhmg59zerotDkYxRHDbm6GZ43HLNauJGwEmShXUXyJhvWf6cZtHf4ZG1FRQmtMLKLtja3ZMpLyqy6Z",
  "key2": "3QWa6fnHMteP7eTj7uMnt9n6zy1aGGbot1t21mzRnTRo4MfsMdk3PTMih4aL54DLvbzbHC7EX8wxFNfDnY9HbLsn",
  "key3": "2vXoWXxV5f7a6wQ8iaQ9SQDTANFABydK7vuCmHHo8e8KaU38dB7fPnbDrznYZpbMvJKGpk6X6GqYPVBMtRSMPmGc",
  "key4": "5jd481qqTrpy273HSszMStG7yxYN2n9QxAJUM8eszVvTpEmqNAbE7YwQDajwuH8T79BHyNFra8PngJK3XuJjeDWm",
  "key5": "5VoaNBVg5UXLtLRd3xRQVf6nLMRPDDFzhWQ79TUkevEGpLLFUJ97ga7UHUQSxu6P1ywQRRnocTgScpCJ6KjLQer1",
  "key6": "5YVkoPxEwD4iUh4XW5HaeUKuy9T3EAWsyhmoont8DMt4rUmN7apfPfXGKsQUKKPccpi2Gyruo5kbp76zc4RopXMk",
  "key7": "3fEf3sd53eVACB61t9UDSkmtVgVGGRS4qePmHZUeY9Fo7B2e1gq7hfVKuAhtzbNeWt3mBgALNkA7sMZUPf7FjJpG",
  "key8": "37FHHWS14vxCfCbWnGBwHoFkDTHQ6gM4Pimq6BpXLeHZR8TXH958MFHRwT8jjaXN6vikQGKSUeNMioSnDejFJshK",
  "key9": "63JumkgVEhxSb3CdMVjL64ru1ZU69oqE5eoJTfksEiaExPeaz9MGQge7BfRhGEkdzq3TiMvTEED2ZBxriJLPDrXE",
  "key10": "5V8fBu5RFFhjKGEUVUVpTUU35d47J1wNEpLf9z8KZDpwyQzvUV2dxso9oAQZu5JRDPzNnzUGwZn9tSBfWG3aSsBz",
  "key11": "29MtEn1MBvHCrEtNtedSszF5kfDTj8hKmwEzFkEi9uFzNfT4P6Tf16oj8NbP8CNL1qT5UUogMP5zggBR2T1X8JpU",
  "key12": "2pmHeYxH5DGSXMo1RnFP9KrWnY6rcX5hs1tM872mkANgQhTCiuV3GdDKW5qeFVpehVxWqF9sFF1n4bSzcK5JkTjA",
  "key13": "4wrvK8T31EEcxqpvH4GdHpXhMhiLmCZDQhQrcMBKAEUbjXqbnZp1SPKxNgvEcLnoB1JqeDFcMN1zAQwZZ11VRes5",
  "key14": "T4VAmys75b9Cv4oMRNSNBLGLANzCSwNY8qWvdpNmqx33R6z6LBdCvUiE9wTULBJtHJSis2vR57ap3DQUWWdMa5q",
  "key15": "G8A8Hw3h3RnhMVBSULwqMduoZ8JntN2kAEgENF5TunamGuAgGnim6bhes94ZEEmpxMwVEERpjdnvndzqR7NyYfa",
  "key16": "5MszgEDFauPYjXZosoi7BMXoXA6Jbj3iyineZQg8sHqqYSUejqqM2BEpc9BcQWZdnqYT9BZd914UwxBV7m5TYGfc",
  "key17": "47R8XMQxeYmDDhNeLs5J3FvqiRLjLpZCUGtf2zu1zqGrDTd6YwuN3mgc1ounGmmCRym3i55v36iX4rc7sQL9FY1S",
  "key18": "5Tm9sMoojyP3N76kTYaoTZJaemqpkfjYofR8pso5QKN3HccsUDdssSR2Q2AEbgwAhoeiUXg2dtQyPPnQTKBBa8PU",
  "key19": "2uWwYw4keXcZhyDisQmryT1uqf8ePnArzUsqHv3AQhBUQovce4bwKg4b2S6e46nxoXZYyC3n9AWe6M9Dh2Rr3Drk",
  "key20": "2q7VrmrV7Qoji5YL2boYMDaqiAfG9671pViNWTk5NzpgjTTPmAo7mV7mSkh34JqNDJBGKcRbQFC41JYFkYBwxmgs",
  "key21": "5ff5z1AWvVrnmg7qmz3CVfa1m5QRKu1xCiyGdotsAq3aCuBpcQVgPnv75mag9AU7EGQS9QMqdfLcF3NCZzNUx1Ue",
  "key22": "5JWPzxNuoXXS7CvF4iz14RCgUU7rgdf1LJNU5zow8Gz91KDsU88S6ToyxVQRKjcBFewZq63EPd9v8TXZe73vuLUp",
  "key23": "4ieNBNvBUhpMn8XkrTxm7aKhUAsWL1gbWM53Zh6sanZ6js5aWaZj6cKxUQXDB1j8bvVf4Djz25yUEKXVTiCt1GUy",
  "key24": "QfvepT9cva69GEBKNgg1XgNSqVtgHh4CMJe7jAoRtxKPiatz9uoe2oANcikVUVvqns5EHFcy1k8iaA4qCcuHCMp",
  "key25": "5DZ2ye3gXZPDru3ZY6s3aVDoQmH7Zi1eG6QjUTJcfqGHSXHw1yLfFFV7GHkf2JceU5QmwMDwPnquBvxNyYfnquPN",
  "key26": "4dxiTx3Er9y3SuSeuprZ3WorzK67YC38AxnjQyXEwFW3Za94FwCajF1caBAbkHFDRFRdBPuMXNveN2yj6VCdVw2g",
  "key27": "5dM14bKtBY17dUYTMWesijvwt76RxUMqPCkfs6JxvSndSbMkejk2iiGWWiFtUvts9VYmUffzDyoFWPrCGR5wwD2h",
  "key28": "nHfyCCKRskiXnZ3UZqHPVUCRd2WMoNEJPbma1aA8iGZxygERgfhyv2HtmUxw7gZvLpVdco6n62CLxkR8LE5AbWL",
  "key29": "5gg55baDXuzmT4LKEyTXSpPbRc5Uc2yjuzwD2rKbWUJ8gwpViikcEhPcrkP2rDQwdUmLz433BnhGL9TuYi82JJnU",
  "key30": "3gYjF3vX9Bxg3JdkAhkJhByjojRxsp9NdzhhxVy5NYFyhpGHh6xc7JAar6H4damHtu8h5VLxBrKcDc7MnMfkYKcY"
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

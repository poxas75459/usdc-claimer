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
    "5ap4q4cERcxgsuqQdPJzrtoGn88BnduzzC7N3edmodHXVngihdkDn5BJczPX6ancgizTA1rRv1DrRZu8nJEVbLeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36eApnV9JWbqwys9z8WthoW3JzLhjxaM8NwSZZnaFJunRxV4jqvkYtVaJJ2CPwmmQECpbsSKsf8zLVhvUkaM7d7P",
  "key1": "4RjG3L5oPdwFkog6YQvtN4jXEckxZs5m9kd4UGTp3gwLZMorkKczjM5DMeoTUnSFEwmPhZSsUS7R4Uy1FCWunTad",
  "key2": "3r6HAuMVodd3okuAQJkEyDuj7iKYC1iXmEK46JN7RiPCxXSoJMNvKAVXAx4PKPnSBoCRmpz4xUAiJJ2YhpKkpB9",
  "key3": "4k55s3J3kuUAcySEkcp8MtrmzDvXgsFs2dMjxb3z7Pk88RdpbzM9woG9D1cSNHfCutoPoYRfPgzP7sN81kdsRnCV",
  "key4": "NMpPSYxVvohtjRvHpfBTqK2kN6rWxjxWX2QhXuh3q7KneCMsR9S9H8TUGoDA5g2ZtbmNR2CE6pcxkJzu7XNhfWV",
  "key5": "4b7JPRk1Z88mABERADc8FoTqxdPEoir6QCFJ1Kueev2xuCdjgZa8qxvVN2CRpGTbxg2kEWoKjzpUHH9UKTB6cHFo",
  "key6": "5SP9k2LdjZihX3vjCKbaa2Na42r2x1gc3Mz45Jf8EZLd56F28Xjn1vvm4Dyih3kTJnsokjkke1kbqRRXbCL4kRm4",
  "key7": "3kD55ny93gNCa3Q6WRChDq81r2TJeRmBfGGvnmX3BgUf2itQL4NnRvRB5KzE4jgBYvamjrUpQXgUf5G75K9gVZtn",
  "key8": "2f1uVpUZjkMP3u4R1aFqU1FAabR5RL6gXeMAFNB1GRYxxTs96aFXPPrGd4amz4R5uS1eSbLbEU2UPVWQ2PCtqpYw",
  "key9": "5pgaTV6EongwnDk3g1NYK9B1gXbpP4wTwWvSJge4VTRUiTdDxdHrpByZEY5yhr4xRfMXProZeRfhoMoxXqk3q6No",
  "key10": "3Vp1asxMHGuwoHouvCJNbqJakQEMHBfY3ycJa8jZKmnRkQ1E3M4qhpRCg7wYkxUbby4j69z7QPmenqJodaLY8y7s",
  "key11": "36fvpnXWsABQ8D2zj1iu1puNBYKi7oCDFL2o8F7axPm3GL13jFbbDsYW2u4LYeCbxRgV85thRpvhgksJaebzWqLx",
  "key12": "46Qt5JS4oQRWfaazUNU66ExknLJ5VDrmkrUG2GLknpE6uPh1524zQab8SgsjhsXTw2PJZRwxNZTkc1H8esaz5vtH",
  "key13": "4grjdFWVayEHd4jXpzwbQebu4ZuHrvyiA6pJXstDQ4VNff8z7QR622EBT5JVsTLT5n6LpaLEaR8n6DWQ1f7Zh42r",
  "key14": "59Y738h31jLm3rqXj6uWwVvC19ZsXaj714LMQwrjsZtch14SmjYr2uGFZuAjyYYX5AsxvjrjmXM2iiCKVD9GFiPt",
  "key15": "3KL2qmJ9sogHaKHurNpqNoqPeA2bCvCHxoXcXdTEBMbaLALsffztMJYxTWUF966QYsXLXFcnFpKiSfwgzMeNmeBC",
  "key16": "4D1F4wMnMW7LEUZGFdqYQ5SJgcsUBuSHzQUweZGVFfmL9PoA8Ya87AKFiqZBpP93LwcdxwBTAXRkx5ZWTnnrL4Cw",
  "key17": "2iz32W75TFJYmAn7GahbUgSiWsw1aZ4tp4g5acQBHQnwM5rhcaCgMXxrp6hdkq3bxCpxPBQ5JBzqtvPwHSRz8Ksq",
  "key18": "3arn4Zsnkam87cpRiD4Y9zCKRFW63EQ9HvRFT1sZvmVdVCsL42E5S8M7T5iDShEbkq7DCPHNx1MfjsyfUXWuCzMA",
  "key19": "5c4JKCgvpMNWWqLi5QFuF9vrScDEJCZPHXZAC815tvsfsZ7iPkCGEQ4VbJXbjpFukqzdGHcQ9W2Rbfh6qUbNLCq2",
  "key20": "4PoErFgU2iBE69YMUa59AdcBkhhHbFVgSVtW7S5TmnH3Tf2SEvKcHbgc5J7qU9hu5jaLPsoCoAJM2cjNop32Ed43",
  "key21": "5EXEZHYSe8CWWmP99Uq5rusyEPAireoW3U33BqMykdzsJZ3ePCFMpR4FcV2Jf61UznvE4STD1QZ7oT8tJqbvuCsH",
  "key22": "nikpZChHAP6SxEfpkpoJvm7HpgiLGCfs4YpN65Ksz9B9iEfoeGLBsm2G1W1fNUUNaiGCsjweTWWYZpdN4BPnZHq",
  "key23": "4cRJ7UbcjfPNKMyWzfKeBi6jJtiDqNEX83D365zoUeR3qe3MhKvengdCJPf3Szmt7XepTt6htK1D2vbkUQnv4Bce",
  "key24": "2GLJD3jRe1SQQgG3uWvz9quh9MatJk5hVDNVVXM34aTRG4xsVaFkZyDy9MSFRPUYk3ncvyDRCV1uGrrfAmP1MXTm",
  "key25": "4A47u7x59MJvNy8VVWG9Ev3bLvyNx4Y4DH9wSe9uFD8TbiX8AExForH1MTL4MCH8YFbfeaFCzBX3viS4wawKiVFK",
  "key26": "52J1DaxxoA2kjsM3cBc58WhBcaAE3MuPRHceZhcwnUch4KSLowBcvRL82Y6t9QhRwe6vK6kH8Ah5hHAbFFgLM5Tn",
  "key27": "MA9FMEpfomdrf6q9J5pwkQ9RRuNzb9cBUqYUCwafAVVHZfe3i1RtQnrk9BL1eJpCPfc2XXcXp9H78NUR3WpdJ2J",
  "key28": "3RPVsGdRtgguBNUt1gn8sePVFXF5gB8WHB4XESrTeGV6YzSifNFY1ban2iBE76zyyfjV9cFUdcNiYV2dqCMiSvaJ",
  "key29": "59E8CbVxbugb24Hg7fvGxrWLbrsDMc3KrGLVAHnDpgarF3oJbrkG3oVHTscXe2Rsg4DovesHXNbYfnkKi6jUNuMT",
  "key30": "djKJNDHbgUaoVerSjz8oV5a8YKWVsEL2rtz55YUSqfJNSVuVfh6dxDBEhJAGfmF9PyjPnvnbBq5Eu8x2w6sMB2z",
  "key31": "4iasH9GcUz5nFvVvk4NZBf93RwbuZAHQ6oYLYGE2yPVxs9wrQRN26gGg87F6XUNnG4VDie3M9SAafL3GpiX8TQ3p",
  "key32": "4nuLkny5Hb9XaErKATamcCjtM23BSUR8pM3bfMJfdhboLdtLE21aJR4BMHcmvNhXMJrkrkNDAvQFod4dWGyb7yUa",
  "key33": "2haT82bHijFUb7nfXwfJWXgYgUjFkb47XHjpsJKh5fvVp66fPSbgfwbiL32eLXZ5pRbNEAQNZzDfENFtDNTguz4P",
  "key34": "3wm5Ma2gsX2SbumXWaYfmE846tBjx5bCWwGnj34DPjXtyGC337bbk3PLnJ86pWvoBq4FGoW91pfmTZM9924sAYTF",
  "key35": "Y5LkASqC9jxN5kjrpqphHX3JosqmVekVUsNRsGSRLvFPfbJzzLaSHxWFoUnCcGvqjfdFayKALRYbsL4ZmSWyyTB",
  "key36": "3WjF1y46cRMmu2cpaZNZh7hNa6jenTPN96BZVBf34QEhYzLwZsuTpVs33r4tx2k4kfpEx7rpvxYP7fG77PmSqRJn",
  "key37": "4SWW1bCg1gaxX55QazKAMFRJDMq3qfBEKxuvimRPfUuFeuiR3jYbwcJSYR9czsN3c1uV28fkahnCP8jFYe8quEWw",
  "key38": "3RBrM1nyHbxMqyptE3N89RVwBpRaSaHTxpCYnPQi1DDpNMeDzz5rfV7NtbX2UFTbhcdHEJbj1iPGvhN6pvqSE6We"
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

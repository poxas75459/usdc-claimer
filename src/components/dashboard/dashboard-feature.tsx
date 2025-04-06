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
    "Dnv1XDLokmXybQAw6TjPodNmkWpsQw825id8ZPkb7wsanGTNs9VnNw2ESSt5jSHciyKFJJoezRJKPB7255QKiup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sKaE2FR2xJ7nQU1J2zsoPk167dgCtaj846dCZqpoZwPtmPfjPn1EGUi1emdorYQDiAaJcP2bNSGUao2eWJBjWZU",
  "key1": "5BGjHPXEzvyYaQ39hx1bYh2WirtQA9qGBGusWwWhGfUsXzLPSGGR8Mtp5GtMMFEmdjsvqYmsQoU75QsvjV1rEcfw",
  "key2": "316ZafZnSXTsvXMNS2rxsuAzYK4QkzRiQtPBbbx5Fw5VbuockpYya3cdiddWC1aibmMTKqhGeTvUF27e1Eb85BSv",
  "key3": "2wwBzLriFu8KnVFYMDQDizkPVh6snUF8YMntP1hmRyuC4ozsZQ8uuXJEvzLhcuyPqPR82wkhEHVzJ9hEK41qReHQ",
  "key4": "65gqGWaNvDcFXSdNdk3hZNouqkMTSWZCd8RYsiUgHZqth4MN8oiBarMC1hU29ckhuCEDkYhdwamGsN1eJtkiP4zJ",
  "key5": "44eFoQjJHbBhK1goft4cnk9MASK29LFCXQKhaaGdh74AiyEvmzGqD14PKdyFFgyDPkyoM3nQmy1MJS68XiRDeCaN",
  "key6": "2uF8VSvDoPA44rNMmMcL9XnyyZzkEg4q6R5GFDRoXpG82PDLvnuAfVy16BANfyx4Lh8uJAUy7H8sKj2V9CxuWs3J",
  "key7": "39L3ev9fvbSn5AZqdoL7DVAHpzrvnWf5WHMgVEKLg4bATnW8wvxLWwhma1vBzG6oUVvi6xgGeqiJF63qFdUvn7Ws",
  "key8": "3Cd2qMCBFjnfFTA9Wwud9jgBLsUgHejvyxtqpwsGhVh8pMSuteMTMdVuf6BwSmJ44Kjbx6mMVLP4XfAziZgeZjPa",
  "key9": "H47bqXbivgaBP4NSTrh1J7WduSWZF1zXubJnyu3jzvDYUAvzf1Wwyqnthn7BWu8jKasuc6dknj5gShcjvvdJNGq",
  "key10": "43GnQFLX9Pf2DTSWSJF9qrjdqdLR4rtmRsJhPEZcyWQzYxr2vFtVq4o3h18vYJJ1AKvyGBdCHHZZHRiHewgNmiBb",
  "key11": "2N5cUL4j8qvGHUmZZVP7C6KSvNfSYGQt6qPjZnvK45bnvxRGvDBgi4ctSgEr4pan5TcjyWoMpu6kjACFWEz1vCYP",
  "key12": "3uKbvEFJ5EnMqHRhwZbcp4Ny4VYYcXqgvWnTb1jjuKbXngazsM1wuKa5FS8euD2LzNp5tj4c1Nc5Ts9mwUyiW65k",
  "key13": "2cgzPDMgpZxi8MUafodqd79wQbReFSiWQru5F8Rbag8BTqsZAMsCEaUMcCcE5DxyaPaJ4apeDENtv5hitHhNMXpV",
  "key14": "4oUn6RFSg6Hyh6RvXza98wQVXMoGsN9XAHQay19BY5ZjhsgsDCr762HQnFoeWR82w23RPUK3J1AgdkEH74gifWuD",
  "key15": "2Sd66dDy4WqRskjtmo5QrQzkgXzRPugMAmqZsPDGsScUQpNj87deKQybzaeiL8Yq9d9wgLT2vnu6XbD4qXV9FxB1",
  "key16": "UbGSEZbEeR8jAU669DZTUE8kZdpY9o8ZCSaUUqGt2qynE58qBSQDX3mt8NHTD1hnJy567Rxut87yihe1F5UjaL4",
  "key17": "znYgHVSP5X8vmExNU6vu1cmQb7fcsb9ZHG6spQd5gX4DWk36tVRawTpqFNzTP6mDiDsqhvuRbpNapvp4mBhbLUH",
  "key18": "38FK5WjkQrjacntACeaDVSRgd4qYygmWyXqHdRLNfU4JktBWtS7cT8jYH5mC17kpkhViEEnYpdWAubffw3Geu4Jy",
  "key19": "PfTwSXjc7NXWotWDrUo8vNKTfKJmpV6KGCUp8hEdvCJQWML5L1GYCbFFGPrgPPXndzUHMVHZNRqe7WQGXp938NQ",
  "key20": "qVEHfZCBWtuVzk695KduFjBmts91KmqiQgbXKu6B2LqsnERiv6fBQBo1yM1c2raMWx5Z4mdJEyyqZW2FoYUwzot",
  "key21": "SzpiA1vgnSL5kbgKGwPp9RYg83piSASakQ6jWyFv19nBc41s8WP2KAytuu4FBEAWUDUccJtvpfcz6PRtkVYv1aE",
  "key22": "55ynK2XM5g3RYzwdbstEPB3inSDdd8nnKvTDpv4UPgxA4xa1d2gJi1EVeyUaspRXqPnfYUsr92XC1g17RQzKUe5q",
  "key23": "2mhtYQx37vLtn3iC4Vux9bqSUhuvtqShDqGcBdTCU5W88y1Ugmsrm1DrkqA9kGfAR9GqwxKinw51KmNfuZhEW3UT",
  "key24": "5qY5NDZGWseiTEyEGien9jdpyi4yJU2a47qxKfN4w9k5cXLc93T4t7Y6bvuaXghrTySXgm3U3NqrAGCNKS3PqUep",
  "key25": "SPsCRSChdSC2g1WXP4jg5bdzMquiLCoGkJt4pDnWwPi7NZ4VUKwJnYSEnDQttYrtJF31SYNpRS11Qyj2FCwEyaJ",
  "key26": "3f7xMdhnwQQ2sXJTUApqRe7W4hDSfrffjJwDG5cG5S6cEd6tumDteVdHMLrwSyy23ohiXTjAYdcTYJ8toqRzDMxT",
  "key27": "4K7GpQLkG3TYw2c55pbWdG4BMHcVzLwpkheN1Ma8XVwgXPjeRf93csfz6c4wfBvPLfVtvMfmUzFdnmTPnyd4vAr4",
  "key28": "5qYt1ny4dbp8fDkpySqepACahhDxhCm6vpjcM6rY5wPs5EYURngKeMwNcxK1ZmDeWkosS6mpkwRsoK3cga3Fbmcp",
  "key29": "4aCfvvvHqvLvRNJjfdmzYu2Zg3m88uUUGAwUFXPYPyKkjjeEEuAiDnSE4ebz9i3on7a9KUV1eRx1UDgYp5hDiG86",
  "key30": "4fiC46JaSDEYMi8xV2svwEXbZAA8mYzwFgRJR9WuS3BN5jV5KCKpAVMRoL1juKLEBnu8GCqAK5L3wEbY3vUrudV4",
  "key31": "7b49U58br4NyTkze4riJjL23pZ5JFUvKc4nwm1YgZ4Y5R2wQN6TYVpcMgMia4oGhTpqxrKCW316sV9Jdr26Snu6",
  "key32": "2hjwnnoZFBBmp2yLErvcAWJCcAMyYg8pCKFqEjaLBG454smiQUMe9TFKiYRfxD7he7iwkyx9aDKMaucxkGXNSL2D",
  "key33": "7WkFwy7DfWPEF3mBEecx8hewpLGFVpQtLS3E6WqdUdACPPngJAhH2vJdueSDAwxqNDNPiFq1iuRgwmLgWxo1use",
  "key34": "XH4Mhhyyu3XArH1MVbxE782GdZqe4ZFXvKNVfDn2JERtLjtS3sp1rhJ41juv69TU8MtgM7g5KhXo7stpyP1EWZa",
  "key35": "5nAT88Yogzuy3oMbymDjjXvkCTSMAqmN1XXnNMzJhxDEBQSFLLmqHiFj7wFQkicbwaR31Qhcg7TxJTsXcJMh6cVf",
  "key36": "8dLcRkCGfL2EQWCABitoBg4v4m3LnNvAKQFm8uugnc9d9guyhi51CmiDZfNcc2Pn4enbrhGR2fvcL7bso24SXa2",
  "key37": "3xsMDxXQhNPtqnn4y4Tj5Dt95HPwrqxF5YxYf5MTvpTGHGtqqAoxvhzS4bL6Fb1zGLSyLjfzg6nZzwujfXEeKRfx",
  "key38": "3wECsMNvp8idmxRGZKNtfPsrEFBF2oLN3UfokrDRsNNBxahk3PiDrA76VQYD7qhdGMA7VoAbVBtbiSnLj8CwjdpA",
  "key39": "FUnpGG3Q14y2E1FHNmp8Jew56xwJMnz2DKRmtkRRzGuojegEjYSm2pwcApyQnVhVa2kfVcbWCkDT34aTjJcwW2W",
  "key40": "2eoJp7fDSQHciGxmmkxkeSezNnkiE363ChbGbjieLM4FGwhd4C6Ge8afYgYt1tX6318qSzfhWk2aNjKJqAFU1bkK"
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

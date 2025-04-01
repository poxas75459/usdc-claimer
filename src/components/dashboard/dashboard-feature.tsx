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
    "4RVwgc19JQK7gWyVxwAXMcA134utHJHhwpCawM1yE1B3gre9DPYtJaBSkwXKsjqKyRexcH9ZAV48Gdan3EBsRuq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRuMNm4XseHrFVZJgC1zQR66m1rzomm5ZBndiF73g53R9DLTUGcVMTATwgE5Akx8TmrDYRafqVAzAwXzXEELH7x",
  "key1": "1EwMfKQeEfmeaq963oKymFbKYiWa4QExFS2zL8MgJ5hhxACX6CBEdL4NLkDQ4C6NVobDLdWmH2vQGnCvvkVW6Hh",
  "key2": "4Cv9fGTwc9jsp5FkaS1RsrvzT5izQCP5TEGpWbwWG14GBXc1tWove3264gkRS3pY9BRgcKtAwC5sHTK9hswWz5Nz",
  "key3": "243pszbhW8NH8ycAqd38WCbJ5uvqHsrfK4pWquT2ewbN2PvQkRGBc2LUEXvxNAr3fEVYa2a4zd6VZ2uBMtC7JoRB",
  "key4": "3tSVZ1g7RzHEa4NNjqb5FDHamTf2SJkpJL9UgFyoY1StNbk3i8jL5r9FjAWQ5shJNxpxLpQi6uAYaSTouZzpMWMf",
  "key5": "4wb4fSAYN5od46AbYqt2jhjQzxvH7HKb921gLioUqtiigKrUTuyb2qLQy2BuVpaomYgg3Zgd2gPudi4VBkrCWVwP",
  "key6": "4CooeXH7PigdKmvmkgBkD2sF1JnmXHqusXg3t75J2HwJTStudmJME8GTFJUuebc3fjjZDWX1ELocrbsxcx5AX23W",
  "key7": "5whbr4w6z2SyGE2JyKp8Km4hkSVqVCcPu1Z3fuDxJzwqePUPRqjweKtroRm6yJUMZVWrNcApUWmUsHFaj3NJ7Lpx",
  "key8": "4pFMAuuNVPVGo63un9aKXf4iERmQdvib2yVXVknqUB4Q9QuqSmfeCiGTqxDxHSR3N5YR6PGDL1ML2g3pNmaxYoo5",
  "key9": "5py8RFigBJYN3cRLv7W1iX3yZd6XfgtRKjRpmrd2esDBgmLqrSTqcdSjNcZP52LgUCMsjkRNKe8RXdZDVMfLZidt",
  "key10": "3q66sALJ4JsWiGq14CsQ1DgvsuHN45noaAoywS55idyY2PQc3CA7GhxJPwE82Zecy4hz5FRfgcS8cMSAjxYEMgdj",
  "key11": "4nYYUTwYJsrEquZm2ZGoM4YDvCvyCU8nwPcP6STiXZ44NpKF2bzCcU23NpVruZWmoBRGaQbziiAVn7txfGJqcpeA",
  "key12": "5NRxjztkgZeV99D5Vr9ynhR8SCTG2LqZLoMPzeznQZSZpHxuZ2JC7z2hGsC2wsdFnrsq2w5ZfLvU6nmwFEVUcEXh",
  "key13": "52quijVCMzxc8GVxhpFwwnuEY18TeUDWffVUt777QR57hFwhb7rNiQigkaKG8cVSudPQtthWHUn84o2iX7C8oCQV",
  "key14": "44XV5pdYr4JicQwDxdMMAVR22sZ2K7V97q9VjW4nu1pxoFsC2tcg3JTzZCWwKEkKtXv5q1Qd7RG7KPm9FQmXVkEZ",
  "key15": "3RmKZf1mjFSN94CMVP2S9Xjx7QeJKNw1VyhYqL6L8Num7YvpFhvtrzTtm324ppz6q3T24uHKACUYK399F1ZrWxRk",
  "key16": "3kJQ13rPvBCvcgz9xc4f1nfW5uDQYDHLUfqY1pUK5vQNuHiddnbeoPyBkvhoQYYX5jMr2PfVAEaHnv8qsYL9Hy9K",
  "key17": "3aRA79RKkxWy1xem2yvLvWF4ZSq9EdSmhRgJSBLaTAmPzXk4QnkqcRAqXcdTktJEsquJwcd4wAtLDFLMKuRX7uGs",
  "key18": "3M4XLEx4nVZ3U9vPjzDGSPovPQg6JWZ8eiss9XoqkGp9GFQwKAFd8W3b8Uj9wVBGvitAq7YYzaykVk8vttoYygD1",
  "key19": "TpDRPyaTiTtehCkmhYdgFERgkxpnx4GymJCHpRvPL6t9xVByKePrgrX4TZmhU7SVV1xZLFVcJj8acQUybKUNBBE",
  "key20": "3h1vyEiHvoJzEtfXNbRcfbhq5Eh2w1yUcAMmGq4Epi9a8MxVJ658ThS2Tne3kEp73CemdmH9xDKdX6xr5iGSFZjq",
  "key21": "3izUvXpsoDmYNj1RAT98Mwa2Fb44d5LyVqBMYkH4BBwrNzC8BfMWDzPhmXJBYQVPxHzFbcPW3ZoGq1d94DJS9F6a",
  "key22": "4W84aXvbec9vdbpRwBWwxo3ovWQ5vR6SKAxtRf6CqDvFZcTfquH3NAUc498krmAxa287F9h59ATwSy4v2EkGQE5a",
  "key23": "5bBiGb6QF4ikqU7p9J988VkSVi6pDCjm41eRpZywLhg4vCo53grwwqcfWvS7ghkMkfmLkt4a947Sfw2n1MPAcAVK",
  "key24": "HNQgUTix4hkUQsFRGY4YqFitwnpVYMMVbZybTkkaYrV77yC6MYrapyfQgwDnc3jhDspJQPQtAEtNcQAZbU1RK6T",
  "key25": "5KyV2rBq2vC4WZqtB2CB3ojBiMdV3GAjLcNhCHwR2NYmmpeWNtJxdcngc4Vy6AoCKY1Rab6r8cYpXQ3mg3dZqzxg",
  "key26": "5cjgRAUe4Yt4xGj9SrGWGBP59tqcd445AN5tpTRQS6yAPcHn9bREz27pp2PU1otnAw5JtmYyoc4HVxBh8ikv1kvb",
  "key27": "46GMbmXWbeaQHabaHFLtTA2h91znWCpBXcMGzopCx9eauih2cyZjrFj1q2RkfJxC6rAYxRZtB7bW5dCNe7BvjuFF",
  "key28": "5cMcDfpFZ123vqMVWeYuJECH6MQGoW9KtP4MS5r8giW4BQ1PPbWX7qGAU6LFzzkvrdptT6ioqLAvW6q4g7UHcTsa",
  "key29": "5NZiuNVfBvxUe57BF6rqNvwUe6xXr5xTLPfaQRhyzSHLK8zE7Zkip29GAorfTX3ietG94oF4mLhUm567ksg3UwCn",
  "key30": "4ATfsxhXXxoxuFJXGDTCwpdsiVwZhiZmtePXm3LBPzGYpRBdZsb8yqyKL9oZAHVR3oRYG5QtBvxaix1wUCJYQY9D",
  "key31": "2GHbJrMTjWRzg9rG4nkDEYuMcXpvjDw1d95n4tHeXy9pVyPwZP7Fy9QPSaSc4sfu9x7zSvaq9tMyWgVUvbxuWGcB",
  "key32": "59DNH9wX81seeM5q9YhswEWs12umH7FiuKVtw1qbivkR2yzKYrFfjeNGUXMumaQDtuGfm5FP1BHGEcBoPNtB5Q8t",
  "key33": "MfEtjBi5vHHzKh4wLdK1KYsus5MgU8AvP93mb9eFNEEJgz2n7bTK9Z3JrMYZTDP3BDwb156tZKW7pCCu8A2sX3W",
  "key34": "FTVjADudrVpx2ZQGVrZbSTPMeAumUsrogaQ1P3KZ56Az8PMav5aRmwxNVK8fcN5UiiMCAXPdnfpW7hFKEA3cJoG",
  "key35": "4herrp65qTakDcAXKzMFRrmJcB4dSU4Dyhv6XRifEuo8Wy4expyMGiQsh88FGZpyFx7VUQPmwymPSAi76PGeWgW2",
  "key36": "51i31N86ifwhHbuWti2k1e6tJJdd4Y4D7RQZmbF35BE5JH95h2j8i7hP5txFULAXrUwunXpNZEetaJ8TijNEia53",
  "key37": "fM2cKwwSHzJx4Zk4CdjuLpdBtukVz1Zvt3vi1RFX7eSzswyMpqUrpPf8FthsPZsY4heYxbdwUVdK4seGgMThLmg",
  "key38": "4GZkKHZ1uBRGT8RfTUtyTXDsvUth3ZW8UYNCGtaCYEq9SBbQxRgYfEghcsVPWzkNp5esBnRvWTYwrUNhSPbMt4SH",
  "key39": "4Rvv3QeTXAwpDZi198vJJ59YqsLKriEdx9Xg5za53kp76zHbcMrdq3Vc8GwsWsEnJWN9bWvTUD1hHFduCBHDurGL",
  "key40": "T7v3S2UdHTWBiyn3T6FjMYDYew27Gd6DppXFK4bvYfPJgjf6KKxi7VK5jwhDJBRkAvkdtyk31nB87Ni8GdWaCiQ",
  "key41": "3xhFFBnMtrkW1A4SvSBHpvxR6KS3AWa6Pyi3xPazE8ciLijRtZESizTFjfb1LZVAzT8D9U1tctByN15fqZfJ3F5x",
  "key42": "56JyMk1NqPopNVkihYrVNUmN9zYpUgLP2e48TkygeExy1VhVeZNmx7xokmo4EfghiR3fvhsW5rhtHtxWs7eTqr79",
  "key43": "2GeCAh7EoN5fgNo12a5XWMJ6L9vABL1bAytjreQ8ucPvmePKoFJP1AQ5wtWRPM48LmspE46Tk9E2VzaH61NsxAsn",
  "key44": "2zCUXJcqAUUCdwZVMZrGwfGpnwNwFoMLkYMwGKdFRS6pp3ffSY51rKigXVWtDL6QpbaTSvaNqM6xRLDf2sUDD4M9"
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

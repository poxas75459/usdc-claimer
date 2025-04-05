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
    "5wA7wj1aeWwKMzBp3yqEavdbvTu2eUf35JoRFK7svtEzkfCvAmC2bVmiPdt2y1hi8jfuH2mjBLUX3TWK5XsHZP2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNxKgLfK7AbZAoyQQJkJo4YE26zxtrCrYhzaP7Y7Tr1tKXNR3Xjwhfmu7eNz67yoKUPKhKgAvtZH1Bn9JmY5vZt",
  "key1": "2Ab8Mimo1Woopth4uVxRPjDRTjFkKE6XuJbHAaPivsj1Y3ReSSxBaft79UhKJhmynXt1aTvyeiMmBGebhxVRoT6B",
  "key2": "4UzBWCKyfYgycGSvkFbzSabg4fsaQauPsfgimDtTBumVX9vudY4hYyFUvNmSqtKUephcbvfJzDmYf71hv6AXkFmG",
  "key3": "28i1WgGCkuDJPx6ZboqT55wfyhAX9M62UMfGbbJVE7hSt1fr2QhMFDpHtne1CvLtSppPgHnXiHPrmp4jyqq5W1ZD",
  "key4": "2PYBo3cThoemwSjRJyoaNSbJs6x3xKa2EaEJhWaCRvBwNuGJrgYyxAH3uoXaugFqQvNY2M8RAvaBNGkmVb4HBXan",
  "key5": "2ssfXghLYZK5GLbzUhut1cx9gTtQmk8sAHUzKTbqEypi2EcbRSh6rFMgSaBP7zzybRKH82sE8yyPzi1887SWNtJX",
  "key6": "3XJsSq3HUXfgnMAs3GcfFUUoZbeMeD2WrtvCqzGBPBFXi4vZGcLyz1DKpfqrzJKw7e5WTjscg7qGrnkqKdrmEySy",
  "key7": "4h6kwPrHfhNUJtZvpePRYR7gvQ68mm8vETjGW5bUnT3TqHbTc257xRW5RrFo6LJaVLX8QreZ9Ynmw6PapRPULSdg",
  "key8": "4V4UCAKmG3WmK8fFhAPc2toPRdMkcpdZGqmEHNt1zWkZb6A6CAVYaccKtNQMdbwsgB76uDCGe8WaDZEwrvep2j65",
  "key9": "2mw9J6LyzVSpgwWb3qBTfmxopHyfRGaq9dwoJWRob5dNvTDxiPEh4Dv4YvUp9kxYDgmVQKL478r9FtgoyR1FTYtA",
  "key10": "XZ2H1p3P6kBugEqw2oS8XtgbLqC5SbArdQaWzgJoNrcd1bctzA5gFwy9mSrWbhAqRSLWJVg2DQqfDeg4xBR1po8",
  "key11": "XQQ4VdNUGQXuypj44mwKjajTTe1EvpfMHqyLswaYdQ18GjXN1G1mf5N5eMFetGd15QWVGVRxNc7rJpBHYXxYJND",
  "key12": "4yadUky1ob1bdRt96fLoemjHDQt8QUZ5mjFY4rHfNrCW63s8yYAo7SCxbG6b7qMYyTaQWazNKYGKfMsYdFhVZpW4",
  "key13": "38FtidSsBq9SoQoUzpcTY1DE97Q3SoREJE5fLuNjKpoJGwmGkhX1ig17T6qnyTt44yvPvzPZCCt1J28MvttctTYq",
  "key14": "64aKgWsNazHMKiJnwYhvFFRSWzKjnnyf8i4NsnEJcTN8tt2A4M4opkd8BKsiWY79YQxXG5JgEWHUCyrFCrYQz6G7",
  "key15": "3RtZbtzRR2ySFxm3SLWoAMsVLMT4FUh1z4o9HqGji7AiUwcE8YQgbuEb2j8bXJFuqL5bYXxx6U5J941i9P9ipXaA",
  "key16": "3RNPq5tJAgtvEM4kuezHqepCsEHXW1ZfmWDK7wZEWo4xxmhzmmd8tteBXaXJ18KbCbdDjnmQnSz12UK5iSdLvsAC",
  "key17": "2i92YTdzp7U91XkpvTheqrhDamMwDDz4MfE88Ts48mWx3QJLMgpNVfWg17cjupFNBMBwdGSy9aUQzrpWwyyt1sPP",
  "key18": "4QH3Yxsp6ZejarXcLjAjuUwGvngSHSvMSkv3n1W1QMsPbo3hvB8EDT1bHLjXYojr1CbhzyVZPHrEbUvCRvidgjw1",
  "key19": "5vFwCtPwT91RQH5r35hWXBa71gWmjUKQwntbhnHRQ5KYGAue9gRykHZ5e6xstPYB15J8NieD4HY6G7GiCqrBQcBT",
  "key20": "4JHpyS27B9dh95mQUAWPnmL18hx1ZG1RCDhxGLgrkxGzsUDvcKG9fw6Hbp8PqouLKLKJKkJ9LTmBNbqjJ9WEstQg",
  "key21": "3G4wgineM1NW8bX6RR4PmywguVk9U4bGoQmUChX6uqijMNBmLFLDJPs9HSUtGi2QG4xmMx1oyxvEYR9JURFocMZ2",
  "key22": "5Fm2ZpQWnLyVabqbrU3NqjrJSzrAhQZenXNp8hEBwFomt9SwozZyusygHE47awShFs2VTmoMrvc29Yzr7r2AmLK4",
  "key23": "58KKkzLufYtG3GRpSa36XB7Vw7XLBvRKQ9Ax9RSrcXdpzHquUvpg7yCdZo5q6c3Rq5SKnP2ceo5ujCBi9KU3s4mE",
  "key24": "5uPamwXsW2qbWKGGSqQR5rFz67tRV6awvdEn8FUShnxsTaV9Fn1Xx37fwKL5AaPEy1FNWcpboo1NUkkgrMV4SPEL",
  "key25": "5fDv9YSYPfm3vp5ASXyHoTxCFHGMV12fCnpbU4Pu1yGT66RRHCoSzfhjFqBrMnXeun32Sgxnr1p4ZmGJAwu54aGX",
  "key26": "5Y3r5xYip7raumPyx7uVYQc8kmt6JAAuMqpQyZxERbVBddxtmLkFyTAzduQeC5v48XpeGr8n8yTEdFFtZb1YNSo3",
  "key27": "5VqoFs2zyppMvdjvpcvRthtjw4ZokrH6yMLf67KYg6FzgJgNxqQ4zLyj8ksVSniwsZjqDrzfip8FUmDfpegUokmt",
  "key28": "3gBts3PB8tBSS5Da9wLf8geMYB7nF5aCurBWHfk98xWxr9nXqwemNQD2DdhsnvsKpSPrNkVi3j3it1ccVQwRf8sT",
  "key29": "4bm8pgrzzrgMGv1uEdMHZtjGtp1D9gjkWothJeUdcmHXdQ4PrmjuQvrquRxq1Z21oQn8Fc4AhXLJDinDZsXAJT5U",
  "key30": "4U6SpDmL9VztRgPAxHMh7ZwCWSkmBYAwaW1qvgLCwdjfnSXa1MNM4P8xp5CRKuMe2imxYKcC3BKziuSQn6ybdMdt",
  "key31": "3Chjnu5HDkjz3yrhbzWpVCoNEiSqA2rnDg73qGk8W2oMX7EcixbxNfdt3PeGRMCZPMi8Pz89Px95bxiYXpNEwUhA",
  "key32": "2aRJeiSiRvGee3HvHexe2khpd1pPM6TJzrcpSgT6A4zN55hEFmUPHHK6z7q3QRTb9EVNvfSNDSMS7C988jX2NJxo",
  "key33": "2b3vEH2MBqUXkot35JKWxg7pvmucnoGU3g5Tx5byUAk6cVYTvs2kUSHzmKL5YyBqfzjHMvbLVpKoSrn3Y1vrNSs8",
  "key34": "2BZwJBEnHSwSKsPoKiriNk9R8L3Ycv3Tjda15gGhYjKJhni5983UWWdJX7e2fBgLtxsHKCw3Kq3Y3S4Phh78Qdym",
  "key35": "sMDxFoLkc2LsxyDvor9t9F2si6H7mntBtEemwh11fFVFVhRNVw8TU5s6cVxX6gGoF8gEqwtikJPQKx92gW8McHd",
  "key36": "LWragYz4L275w6LztuKe6PqiKCoNjNmHB9ML7EQyXk8Wy1ApczzvVcNU98fofpuK1UYALmHNRgUBgSXkk5S3WW3",
  "key37": "5yzqPgNVJ7T6GHbaDSh3ov1LS8Mw1RT4UrbaHYMQfodsnpVComgEVF1LhxyV5oiED3FzUwiyafHfjrX8cPA3yk8v",
  "key38": "4mvS6NqWHG8MjK9kguCyN9FRu5oeQ1H6Z4wjS2xZhwDBeCKCzDFNt4yLj1EmtEk9Fqb98fQ5S2kiBzfQsc4qjaXc",
  "key39": "q1THBqoeuD1JQtXxzVecvJqzBHGKsPFgu5yaDj8NrWDHxZcb6XQs8GxfHtWE2p625JbnqU8KvoFhdGkbsVJ9nfr",
  "key40": "a9bZRQRwGZHxgGNfDThrhfNqTLYcQvADDkDtCdrCkGfJKgZufoFJrgMm7kjTAfRrNhK58RrUrkp9tZoq2tnAwmA",
  "key41": "2H8qY35i9c5xZLeVF1B1gSkHiZd3X69VYySniS38qbTNsk5Tp7NH1qPvVzSvYLU2xuinX2UbFNhAu2cNzPqSb27R"
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

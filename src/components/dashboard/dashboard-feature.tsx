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
    "54bvDGCimeSRf78etfVLJCYWoQiBChMGL2EmRRcSLDoGCiWPbvrCZpy4CVFWmhzdoPqH5SQSKNZT5ermr9jaVV1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGXm6hABHrSTkxA1KVYboQyUmw3UKUWmGYJEZtSCy5YXmUwDqQeaBLPprnJ1Uu2ywLXPA4bPFyBDuVGC1QTDLDa",
  "key1": "5SsFaHXGgS69GtjH2VBVYBKFjBy2JUvp5gUwpNGk1u2qDuoxihBnJVcPcoH2YyEUNpKwjsf2KynQ1RBK9kHkuVNX",
  "key2": "4SrM3M3voBUN6ZYy8Ty3md1KhwupoqTW5QYdLyam5b74o59ML4XRYR8fRSaWKMxZPkE99XDHtoiZ1DWz3YDCR9n8",
  "key3": "5zN7QhoCBFRW4MnPYbz9BuimbG5Ve7whbpgYuasWwQLvgFtnGRc5xFK9QCQxjq5SsaFCiD9Pof86xWig8bTTiQHa",
  "key4": "532maTdHNfAH6D5yfSChG1pGz5jyARKdFLwtCFgqC2xsrmiafP2pS6iiiJw2agLg491hqEGZwG8M27qbkWnr6xm7",
  "key5": "3Gh2NUjig6JbrVPhWFC1uuG5X9DDV7NeJ2qidh4Wom18AmZNjzQJi7UsTu96wSqcvB7rdprcgJgGsCBLo7zwfcR3",
  "key6": "3fX1qmpqx2m6wn5h2o367NLfmhwSBDXy16B9PYH9mQ6L3CpuKYcuRT3zRouiTnjHjUtNGv4oVnumLDehPKwau9WX",
  "key7": "hZRaKzNzE19w5d5upBnvYDLgC6sGLsXA98ET2RH2AShcUMVT5CWx86t9kk6DHtyBEXoQGiDNbcfzGeBQ5Hti1bw",
  "key8": "5HkRr8BZsuzLNqmEVr9ErS3JHqgUNdkrZFn8uT5Hphev7jD89NywfQs8RqM2GAXeC3h6keStGwsJqcsGuAXUcMTx",
  "key9": "VjLm86weg4mAwdKBHEBgc7bUE3vGt5g2x4uMCm1RprmYMDnEqVpJsBkc5hdtuauPVqXM1W1uLCfRjquGSNom32R",
  "key10": "a8k2ZEUZDbGNXd6viXCrS5uAHKsed4d8RY8nU6SGpdsMavn6GYUvpuH73GHuGrq1SgiyEFUkr1KMkmAdYiUhv9a",
  "key11": "2YBAzxKmuDi5Lg5A8jXsotCXDhsaFmTTXaXB1TDKHbefGH2o3xLW6so64CfTK2rvS3kHdcnYMfVWondBfbZFCeXi",
  "key12": "52koVSD3bvUYRphZ376WURpy5Fc9SCBNmD81VJGAcidUQi6QVc8W1hXt6dbh6ZsyBXBMBHgC1fACZHA47bFQ3Wym",
  "key13": "3i7oiSYDpgojNHYQw4YYRkB4D8gcAxzt5GbFqam8Xek24FFKCHyre7xDGaasUc2zoQmfUsV5QLPKquxCxzvthWqT",
  "key14": "2sggRdcPa1naF5aDCus9D2VQ8b7RNarKCr21QafGX2v6BhKpcfawARGJT6uAKAVCRwa71v31YRm3VtozSWB1ypGQ",
  "key15": "5fbhj9qitzxA2iuwPsE77MaJumkEjC5EVyZpeEDmbjUjcqBfEqtXxTxqvqdFGFCM6FvuuscJBbzfg8sDzW7yZ1oe",
  "key16": "5suKe73PBBHKEF9S2LcHGpGr3UoV7qC5nZM11rdZXhwdLTgjR2quf5nKeQ83CW1584URjw9XFjt7ko98GLdQCBuj",
  "key17": "4W1xgsvArH1r5KQmPifzJjiUHM2SCH8Adn8Wnz9gqUBZUtJpfNd31fjo1i3ziNCK8UDgkM6qDYrMzutAA19Xdaw9",
  "key18": "3pjJh6FgnJr2jPApjvZNu1m5hm37KRbyg99MivoHSLU1avAPVTFP1KjELK2DjVayb6jyF73Z1iJH5kvKdahWSt7n",
  "key19": "2WuP8iYUZdcE2Wn32Je4nYb6VhimgbuuFdLDZ7BV7TVWGvq9T4Jwa9AheR6us1sNzSSm6sjeG8veySg3hbcGvcJo",
  "key20": "4qowWmZNiJitg9EiYxCUPdbRiiq5urqUXvVJjGx7sdiBnzJArEyxLhb7JeqF9ySCphaxtbQETeEQKsm2JMjEP2x5",
  "key21": "2BQ9KcWNr8TdfBtF4vdHfSi3aVxHQa5BJfBQxR9wW54ogHcTEoKCZjQ7ehyCkWph6HExNzJzYovRNF8gBrzwsDAM",
  "key22": "5dSn9g7xLrkgx5JjQupRvQejLsZWrehimpExCYZQmnKKmgWtLC7krgyeBjtXJ8J6dVzf7UXcjASUDgG9oNnovyrb",
  "key23": "2zHn4QiXyRC72noEVzsXqENc713iZ8ndRQECT8t5ymtL6yiFAqHHJ5YwwgRackUAYsnpCYR7yQq8iBSQd2SEm5vC",
  "key24": "2qKFU3guuBfCEXGL3UQDxJyEzCJgfESmJrCFDF9yAjC5ArRXg82QdH6BwbumzhCKLC7DLAUeUCVdp3THxA4mFw9Z",
  "key25": "4AnbkS64R1JZPt28DBxr7eNFbUfYHHKGrYBvCC1tv3h63fkacR8KUmrq4eVgMEutfBja4foc3K4cmtM538aBBMAL",
  "key26": "3daSsWGLsSi6GBu7AW9EZ2ahLf3PcMzjkDEPkTPn6qfp3krQurXyHHgmXVGay9EnsLYsWJpE7GCrXdCe2MamSmgi",
  "key27": "2SCk7SGqwCTkJJD273ffRkCCQCrUxQFAe4un9mqpPqPmb93hvWzWnxDScqNxkyE99dJZGKqrGZ7dwG7WMDeypgjn",
  "key28": "4rTaDoBBL1b8o7zu6522i1e2phHLxFgsZF5uTEJn9admo5AyhnHEfVPHyAYYkdCMJN8gHN8RWKr9nXbKKX8M7b1D",
  "key29": "3i6DMGzYHFaw5wQPMAfHwkkc3Hm5oC8p95eJot4LExJDt1BM5bW26rESYxDkehMPRkspM3KtEXaNPRSYEkvGNdB7",
  "key30": "3JsP6MupAz4Wr6H5kznCV5iwSHE21CSDLcBmKKBxhLCW4bDAGRrX4Eivsf7NY9uVfjTTPwWuyUbWUZwfGRe4wwid",
  "key31": "5F8PmZCYn2DGSeFimmYSYs51cy3C2rCgPNiyyWd1nKLDST7HUeAfwfWK2YEM9LGTJYaYUpWw8ccM9LeT2kaofSZc",
  "key32": "3BB5kv1fyVtHVhmg1zMR8T9hh4cDcZe2pZ7GRr2Xqak9fhdhpmPuqPkzDSC5txs8aWHeL5TWNXtjEN6CSdiYRAqz",
  "key33": "ywGQrZ4p7XqPSjShzVy2X7x9Q6xzcK35EA4sAQ1Mgf8ymAggtx2MCHVubdTSahzatnidWrHKkx7iwjL4Km1LaQd",
  "key34": "59i5EPpZidJymGgEkK6FcNUnoWGRauqmNqcfwPc6sfuitZJd8HwusVfydvABxnEBZDgJKo9ueKqrHeGXQnGsJTcf",
  "key35": "2iYDsueXcU4CuTZ4Sn5iQvneXPMYss55fhe2dMWTK3soU7BgCKTzWCFRYNzws3etC7NfcfZXThejLuAuGWeL9a1H",
  "key36": "oxo6aqpp9v1zi6XkWe7Tyz7jQixPgFA7ipHvwtJsVgpEqafCdJX74bzeyGu6v9erKi6JrYR1UAyfYuPJC96s28m",
  "key37": "4DYd8jhJkHqLizrtpa4PLvNquZGPRsMFZQPcj8vtDLtRrZnGG9StyX99DoWCpBNbvqegXtAqUg7cxbwVcR6pP6C4",
  "key38": "2P47wdff7XJcpSW6KEHT7cNx5JRNoeWzkCurUDdR3a8LfvRW4KhREVrTmUNYZ9DRdkbgaweE2qYMFbNBAtJm2p6g",
  "key39": "AD8Rdqg8zfdJGJcXFocvDaUg8UoM3Ja7BZLahW9DuZ52uo3xi37LkoD255FGZ3z9oZ8qztafMEMMJhNZowDhKW5"
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

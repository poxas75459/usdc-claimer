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
    "2VKqZWh9sVzhcUsW3v5Mkw1J9Wu8tx7XSfxrqX8YwHP4Lm3bPHeR9ygDC4wwRq4zWt6K5maQwYK8UdpojGBdGB5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZkZKgWvtnbGmh7yBd4gyiC6exGDiX6QFrZBbBNhFKXYvMDZru5c13YSWJcSpJy8vfS2RQKu1yaizKuwWH4x8SK",
  "key1": "3oYs4SFZEYMjTeVDsoVM9GCEW8PgfpA4eWvAShnvucsJH8o36Ga8aPiKYszLTZhhJF12cSze7CRHv2op4NWEZ3ro",
  "key2": "3u9iacC4j3kf38dYW3Kkm1yt8AUapywSF5q546QvPuqBKq5zbDwp5S9mgCmR1pk3s811NTnBqsdfC3HSVkDTt11W",
  "key3": "KcM6KnLGvkWq8g63ovTw8XioQUGNgmTkVqHyhtToyvGYT97JzmBwRiBn11dnbs5uobJn1huXzqFLvx8oMnRuujp",
  "key4": "3J77VtdaimgSdEeAcD2ef1LvaD6oVczuDSXbk2uSE1HvfsiviF3KRzSNs2UGn6z4DCKxhi4nhLc47KmAuehfbKDP",
  "key5": "3SbmHg1zDaJeCkvfsLn4qgkG6jqTXfRGsZXbVyGhZhbrZycuM9y7PgrBCJ5K7eejz6UXynTJv7BFuLPHyEoQd7qM",
  "key6": "2ntMmEouqpwdN1Qhm4q46tr2eFGUfhFJFTMCvdKbfYw7hXfhDVBV2Ft72pzjWBYudCHr8KkRrT9TQvSSnGceWERc",
  "key7": "48Le4ioVv5ynpvy9FrasuHaur2tc8RGr45EW5j9X22zzcZGm22pr84K6Kz17VCM8DQXrg5RfsiLWW7hW67hX8L1d",
  "key8": "5KZcYKMuuvy1Gq7wtqpCRQiN39jGzE5CjCnXi6X4yns3kMjGqURFyRmYxzSxMiAx5vwr3HUtswF4snv7FvcW8Vv6",
  "key9": "4pgjjGFiuoLAyxQjVSh86yj5msKyHqr41pTaD8UXq9r41hrM4rtQo2qo9WoBUxkcERSDom41dcoyNh64oytFGTV9",
  "key10": "5WCxYXvBD94o1mUAcU6Y9igwBSQUpLfbx5ULwNvgqneo54gyu6ceFKCSHG3TQYb9AURedB2UUnDtAXJbde4THteJ",
  "key11": "3pvWEUECTMRTKE2sBhXMfuFPAnMUTUkhsDLC3LyfBPpKtpGvBX6ZHjgBvkqriiiGMjbH3diGfrFdPY6S4eR8JsGP",
  "key12": "53kfrur9Pj86Hjb6o9LX8xtfJMBVDDT8i9dGxZJwzSQFyv9j5kyB9b76D2hSCxGjfGRtK41LB1yGX8zbdv1a38S6",
  "key13": "5tSSma3dydLHFrkwYsnsRZEEcserpoXA7h69KQzR4ZPAMA8Sj64xT3agSjF9EtRh4AoSxc7N9GKiX4N6cZjrGFQ9",
  "key14": "3d64QsV7wPhu2z7LNoVoH1xywiHQ5sUXJKHqqN9cnrXKRwEhUSfQMCHk1MFFfQQF3HKSsNHuVEWzZp9gicRAJUve",
  "key15": "GtMek8JSLq33paob28v6pKJ22HYHqg6zAThR2cgKFYxcTR6SxFeawg62chLCT6JiXQ45WV5j6zXajs43q5tnbQd",
  "key16": "B2VDzdqLXotb1aJtxxR8PrMjrHpDdpUTibXowHEE8UoXGgP4Ukv2JHK1Dy9gy66zwp2creMQRtgGcGKQ8Kmj4cw",
  "key17": "3iUyy1Mtb2JnqBBkcmUEarxnK2FLq6258WGKuGb4W15VaQ9nf2nEwNG3Z4d1qn6aiCBEgs3ZRWdd4fpqGvxFYLZM",
  "key18": "4byZK5xC3rNK7rnbguKZ7hu4EDmnZ2XgErCXjmJk7DN5m7fBqe48PQinrSQEJD3oqSqdwu5Yn2qadHbztkFtVSMM",
  "key19": "2F7Egjh8Wq23ywdcgKpEwdiF8kNjLZCLv8eWzNeTcUWsqf2Nz15pkUXtjfhPWDc4RRjeKLp96PQPxKJxdxDxx2rN",
  "key20": "4g75uX9ARPjiY2TvvGvb9wgHQsm4H6Xd8FZvCFPp2gzubuHoiZXsqh8PM2bGowe2GZtPmaWp54VwC2Jii7WKRJJZ",
  "key21": "2xiFjmXWCjw6yxVLigu5CbebDkc5dEMheT7m6reoZv62DCPJgDLbR7YxMRJJdvBg1dXkhFGzdrGr2cnS3SXTk6TD",
  "key22": "fQvkdc5TscS4TzQ9u4sfXJR7GSgvSWYzxvz4UfscwAMtY6kCnGR2ykRiE8D3SjKn6SZQvnNi8eurBPEgnCi5yjJ",
  "key23": "4yaRsVeF4vwywnsxCVkk9bH1rLMv3Mqn6cv5WbzLMGKtRStvBnkryq5hqWe41cebUfGMc4B5jf9G3b8uUF9phJc8",
  "key24": "5Kx92RZhKgqunEYRy4WX4a2TnL9mNxdzZTrX2HNuDLnoZ5ZbQqihN3nbrJcm5maP5euenVpDGrYyc1TAgNLRR7nE",
  "key25": "5FMSxVwVZwVNZqm9riKF1tHHkhnvrjo5AHHFM59xCpJ7kAMNkmGSuy5TC1Lpn45vkg7HFpUd6L9pJAfAcFbsgR6g",
  "key26": "2DtAP7XevGR4NsbnyreymTXkr6zDV5qQwrTyDf8XcMvx5KMDoqe3tGWr6BqfVVjahpgvPVCxjCH254gZXZikU1vY",
  "key27": "5kxu551qNRDMyjYhndxk5cHReq4J6PzrsRenA8BGXjWhdfjM74pzcob2EE3nDmeAmE7YHHpdHsAbKVAPxZfwVrLZ",
  "key28": "2Jr6cGCbe6nAFdMVW4FQpF1uBgJezbm7VY5yAharxnvqdebyQNVEESWFZ1xujkcrmvuGFPheYKxEGgzqVS2q5urz",
  "key29": "4o5FuXxRJAaVETRFtxHfjXjgMrg3CvSfHNdfCnhsBDxD6oGHEwQhWRF2ysv4jcF6ZArxShYD74unPEgVYDRMEVeh",
  "key30": "5ttGHT7aav8qUW48P2iwjCuX9ZivRtM2tjK7msbTGezm1RLuYxUQsoD5YRqDLMSBLn2JJzLu12P7gbsKAwdwmfxV",
  "key31": "5hYHamwYyvFpBZmJHRmepYgc22sCCJig2dhWgYRXSKVXz6EQerqAaGM7v1qmUNVV91uk2Nrjpmq1stNVk2sPaj2D",
  "key32": "4AAQBdK9XQ1JwK5JNKAdeeRqU1Xr3q7hjxEtQxDdbjGQPfXAAxys8QWKxg28aehcfXyRxDTcwG3DtYjagnNNG8oT",
  "key33": "39vH7xwBGi1FbWLfTMP56acSpVwFxtW1DLUsF2spodGLqgry7BhaGhX5XMcaGQiMnoTBuuJ6GXYRTmKaTxrkiExr",
  "key34": "3BPPZ6fdD3R93gmGotjn2LWyB2W6bYnJdPerGeNYivMYfFLj9jG6ChbmrHVkgWUMpYTrYCttua88RXSeSCiK59qQ",
  "key35": "2or8jDwvDZYmbwX2MvwTe6pNc4U9tsVHDx1BdjksZE1z9SPBUeS8ewfydDkwRK8WJ8AMAZktNU81GY46WZoqEH18",
  "key36": "49f98Qf2d4fruR25c7CAPFq5EAzKspRWpVydSPCvNbtWtPHsp1CHZWmihjTd1Fubi3CbdqKhUuNVUE5NyS4SXjT4",
  "key37": "5Nt3ZgS6VbVdoKgtgrR5Z9unxEuVoCvMvt3ZKhkQuuDg9Gg9oa83itnZ3Bjr2nAU6cBJ1z4WMZhrTBLDhTr2bhyD",
  "key38": "4DExaH4SPVPnjjq49u2wDuCbELZHYQ5FBfHdyPFY4FTFNnfB6NqFpRyWcW2sMp6jr1zUG5GNrVFQCsiUpmthAn8b",
  "key39": "4rn3tRV4amvMM39p9nJgrPXW2TXvMfbZSNmn1AqKrh4GKeM7PgYv7Ljd5VHnP8YjNmLPAWUmXSdfKxd2karkCM3e",
  "key40": "36skDgazX4DrETMSpwwzG4dTJyRL5hErVGsQc6bk6iWwAMpakXFREXqY7owrUkx5wM6tsidD9t7sF49YAyauZ2Vp",
  "key41": "5Aya6RMy5F8Cabvau1QpNgkBi8nEJGqbqJYogz7mZ3GJXuCH5vzc2HTtbQu8eHXC4RgxpM9fZ9FcQNtNdWvAFHmo",
  "key42": "4HvgsWBzb3oFupRSWd2b1Zvy2q6PNSBviTDcN19nfqt4XDZc8tRrHB9dEwG14JtfxiYb13EHWrLyecaWducRdLcZ"
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

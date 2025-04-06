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
    "24yhHi5kuDNJHjtAL6vnz3LAt59H84hEwgmY1KcKG8TDe2n52f4vrpNXsikAbgdPkgMAx5vXER8xaUkScS5vBLyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBuf4eytjn5oUSp2wZjT2diNzxYieFCSgJfef6PjyDm5UKqHPHT6zv7vaty8bofTpprL3efEDSnYc8r53cVy6pn",
  "key1": "4byFjdNKf4e5jwc6SU72CVv73H3U6dqCanvsZ5ehh4UBGMFgvfuFsEnQ7KrvfTMWPdYRZUYbfvSeEJ2JXTsEYEzs",
  "key2": "Db935FChFScbLpBMqjhcqUnNPwCRMC4s1WFSHEYkkUswwRCfQga3BHdaY7BWys8Fv2RdqBpnky8473ZFLP5RwpK",
  "key3": "666ZVuqw7PKiE7kT2EfLvnhwcVtTFwJNz6gaEGrG6YVNi4jEZJTEs7fX6zcALGUP9evtnVN9N6by6zsavkgmAjJN",
  "key4": "3fuZUS4BqXfNQ2aNoLeLXUMMAtGj7MYS6HM2mpxcHeiVdTZ9bZwy5js74wL36H5DtwyPi7XLJaVGfi78mjWT77dY",
  "key5": "NkKbyxuuvukTtAp2MKhnmJvSGLauHpQEdRFc3Yb6iaC9dW2PMcknFYgEjyYH2AMSRxajwZqT467LLZbSZLtuXn2",
  "key6": "3JL844egECm4r4ptvohxpXYynWji2BQrBNyp9YS6JTJaynhfmErTj81jpnLGimV3pCeRpArmC4V23MfUJnskgCC7",
  "key7": "3CvDaRCCJt9TGt9AKVCA2RYo4L61GkZ8Mo2m8m5uxcCEmyA5tYwBWD9DJZjdnVfuc61nrhnTTkDkGJikd4aa3Qm9",
  "key8": "WuKAqwy4stpEf57n6A5C5ufcxEmRdAM84ohCLN2ZsA7ypCM7m6hKMoHApHSHMEzSeJ6J91o12YiiAdvRkzqAPXU",
  "key9": "3v46zFXJmtHheqfEvf49dBjJWvnMdShdEzYXadshxE2pvdyRemTjseceyZE2QXP6wpjVvf9nieb5863i7EsQbHWe",
  "key10": "2RNwEwNGYkp19CbWzDmJ5ibwSFCCJrsEQkW1UhR6ePvVgXagH3es7ZeExbbLPYMvmEFDGV6FXX8QyrLkpMJPFooG",
  "key11": "5WvLcfEugyaEVVkZSw68Qod4qNxjDvMAyhvxxTiNj8sBcbepk8LQAQ239qMaaWUBTXi8QZp7EzuDfxpUJuxcTKZu",
  "key12": "3aVTLZsbjege3Qbc1UKnqtZtzd96mBhUTWE83iYyTKKN12YYJj3QrVMgRsX5JM1hV81JqimPsFEpWYHEDrprGasW",
  "key13": "4c9BWPuo9Zn7htwTePMLZ8dTUN59mBbcGsCCeUg1miVG6BmyJNbfDmPdCg7F1Xn9VnPdy3fem4HfUtMt3cKLfgMi",
  "key14": "kezYMPRD6bpbGPsDcGN6a4a5AbgffUyuFzhtahbdffyfuVAqtSgde4c6mXqSHBE2ycdWpXhTN1miigWxKoBjeWw",
  "key15": "3cWduQtQBPHTzLwHBM8PLDQ6E3xzHRpxjevnozpeouT9f6ufm2iZYnMypjXDUcrkMXqVL16eoYSA1kr4AszL9Kjh",
  "key16": "AR9Wdwwetxd8HTfvVwUD3odd5ccQRTc6SPcMFeCjzztjjNGNG3uLvwQJKpfuMpyZbgX8Dj9C2qgp6UB6KjGHXdt",
  "key17": "5mLzvUsDRxiXRhhRS8aQFYBeHT2k9518yzFujMF63WhG1xjTDN9iwUedKebkdEb16rZoQq8usFdQ5gXNXMStTSqB",
  "key18": "5yPjftsbWLEtpxC2MVnFYjQTUUVbjotDSVCeMpeGaAvvzLNLtzaZJU62GjTa7bNSNWBaj9scunUjhZMSip82k4wc",
  "key19": "2BCXGHtW4KDqZkZaAuygDrp3Av4QXr1WZ2ER45rRxc9xAQbWsT6r41QsYZg7Ndz2FLfGmqmbiQabJGZtvPe8wtuD",
  "key20": "3tmfD8ELL2cmJ1UQHwvFMzL8JPZYmqd9VA6ncn7dgzyS2bWHCNH32zG7m6Gs5VnphrGXoqRBjujwa8hqgAiiKh2h",
  "key21": "3voDjPDTAGo91AcVVFT6AMoH439XXqaLzEAU1gACvmK8wzRMjaQVTqamRiSjmHS43EG2UbDCsTPDXS3nyV9The3g",
  "key22": "21mjDSEVnGcAqDTuCqixmw58zRJuaPU64Szs2mbSf6y5pMG6ExaDwGuUuGXny97C8eNyr4op6XtvvG3uF8rzfTx7",
  "key23": "ouB8yxV6umhQJTHspqURqurfzszAr61BM7JipfL7K1sD1KHwa9LiNvV1XC2TNabrMoKN1TXQYAuFjpUXSMnNZXW",
  "key24": "4DAGWbLkLdZT5ACYfnp8h6qJKnqC85Mknocq388tiyCU9t4iTH2M1vRQwGbULWAQdGxAL3eCx3TnN3AwfKTuiXD",
  "key25": "3iK7xaNEvkEMv5tv93K4oDmhmCZyEohud5FqJFSs4K3vJy3DoriMdeh5qbQ6fTYxuTXzTNmakhN12GEeyZnTMiN3",
  "key26": "24EhKPtw9ozubJpfBvus3ztYJQoSUttZyQiHPnesVMgvTNqHPsvrMEXmqBjp5e3dQVWrjVYhVNz7Mvet1hDFyfsB",
  "key27": "3Ab1sTf9CBqDsDKqJMBWF4K9Vc5Y1SfFB4WhKWHwu8g8BggTycagTiVGNQi5ZNjXzJopn6BmSLgnuAtYFPHdNMv",
  "key28": "34bwirdJen7kQPRCHMiyRNbJQQ9wgcfz43F2jum4S5nzPjZEz2FDnvvWfmoD1X8m7LeZd61hCk3YnnnXMHEpyiy5",
  "key29": "4VQZ8UPUFF3jd82vyhEwSKQCvNWEeAYZ7Dio7tAyo2jc8632zVCjeKxbZXmUdsHUBniQ8SRfn9Q6Lz4nLag5Vgi7",
  "key30": "37Gcbi48pVsAE6ry4bgr6qFAkTsBkHLQDvQYULFBYdg1FJ9bbo5ypeZBabyhCyyKWG4ND3M4WzkN7tC7EYcmAW1J",
  "key31": "4ULJvhYqvrwJmFHj9oSZurfdHAb7eWEq62kpXWyri5thJ6VAVhANoNEhLzFk421RUZeuEeYQdC6hUmeF11aFF1Ju",
  "key32": "4Y6SHGweympEjtxtZsYxM2HmNpFuA9o797iQGxtYZHE2chStqXcd2LxLx7Cg4XPgncsUuoeQXcVBqQvAgZ5bzVTD",
  "key33": "3XzgyY8PvLirWk8wFcwsyn5boBHV3iLUDJ4cLTyHoBzDAwYsZpyb5bPBgNDptqEMPYLLN6DaYoRDBP9gzqog6bVC",
  "key34": "44ztvsqsPstusVbYjWLuptybHXmnfk6yzXEZ6eayt7gqYbytDD4GxZURwfpajNWHYW4nL6tXQozxBBmE9YrkzLkZ",
  "key35": "45D9MYhHXtTKoDTKqWL5LyeLuVTUHP6WDXqMWFMwJ1E3uE3FHjvBCxsoCgwMgr8DrHg6rVQzmL3w91ReZY9D7wtD",
  "key36": "5jnWjyZgh4sSVJMPn7xZnLT4uf5cBFi2PVXXHqRE1XKvuDB31sLSgfLtBtqMqvmpN1pRMNt4D1XwKkSixXfU6Lg7",
  "key37": "27ZZW3kh6QNzCd9ZJGfsmVGBx6mKkG3d1oTUt9wzSNPvUF9VWgKZC91CftRhqGY4pUJFzpf6x971A1Wa2Zwn26Ee",
  "key38": "66xmJEkvK5S9hU5TC5P3UDwXjfYSiizoY5y6zcnWTQXvZtBLn9RcGMGHf8rZ5PvYM6uu6LMwpVGUvfqaNr31jn9Z",
  "key39": "4VLNg3TBkYfa9dWBpLB3xv3c2GDwEBjfPKRisLDptJE77izQxraCtriuzgkWAnMzJEzTCqnVuTBz4fyZ2eGMS9DC",
  "key40": "2jqEpYpeCoGyEnRULhRv8Rt2EkuU2eiHm9AvyECYsDY9hhx7yci9wg9G3jzWDyu72CvNKtyieUVRZuctVkc2R15K"
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

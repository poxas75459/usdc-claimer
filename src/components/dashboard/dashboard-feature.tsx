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
    "33F3LLs9EqUxQuBR4FZhKe1J84azVAZmkanzhVJyJ4GUffXuZEa8nR6moyMyBrAoVFWW4aokJWNbCjSMgsZHhzdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTQ9pX1gKBfdwgwf7jjGYJrY88beKsKHywFU4uCRoW8qB5XqCriC7kFi4MgGMufmkBGRJEzvfjGbZjPSnETyXLf",
  "key1": "2TZ7BwFxYFKVCCSKN96YtkRuTmfuW7VDh1K6XPBwK5eQarrdvrVqJJcXwdUwRVeSWp8H48sBkxNhZB7EhvtVMv9R",
  "key2": "2SLsAcQVSSBdkGNEoFigaVmcHuevXvuqnTGb3HBje7sRc16PXGAQe6fntNmvwqQHHr57S6hoZDvse7Mj8cXdqvXy",
  "key3": "3gYLdyaDSeNbUSh4R6Hd8gchH2AUFhZGrHTY4MV2Qv9xhrpjs446F8YLg92whkCu7VfEUZKMUzeEAoXERYZAMCnu",
  "key4": "3XY9zVuNgvtUNx1MX5QCUoDUjEBWrrphVDJsZjSUpK3BLPEnT9aQLPhHz3hEWJybQS5MCH9yzFbh1KF4D6pMWnbW",
  "key5": "3S9VtkVJPJn3EP1xNjnmhFQJuPSGpuAr7yubPcnXRSWJwq2MNohMU5SPZs9ThfKKDBaMKYvKPnAiKY5eSqLEDJNj",
  "key6": "StC1jYpv1zpYJ7Js6uQyZHwu6xeAYZxFjPBsZFX4NqM1u2qLChVnMa9kWdXATJtqHLvRwLRcrCVvapqXGpvy358",
  "key7": "5EUKX5Ea1Tbs4nsp8RJpYHRkSqrFdxyq5Ck1Uw1jwQjtGgZrR3AG637F38tCeoQ6rcbSZr2y3zRkKsJQVpMgCjMC",
  "key8": "A6XmtaFpNTzRdZNRW3NfYYioNu42fPeV1WZEdB6Z3QU8HBqY8p1xycndNmaoecfzPWfL8dTTucYnrhvuYgHAQSv",
  "key9": "wTPSseaqVME1pZUkfYRibDj3p1Dh4rpKpC5GEz8zRmwfgNhnNUvG2z5MKJyPbp1RajQcCKJF19LvJBDf676rB4K",
  "key10": "fFKj6iReTataijSVu5PFuzAGRd5p6zkcxVvHitokorvdNS6G3tKxaxJ42BKxnYkgHmBPB4wy9R6KVx1kprPHA1C",
  "key11": "3oWg6eFaHeswWwK54HdwUm6zP7fJzcrCQFj3JWbEL6oaAUa5q4bZtHK56VWeBBHK1sDfzidCGLGC3BXrtNfBX6Ze",
  "key12": "yCcBcepeNCvUGBd5rVvon4F26ZbwwSzct971afaVQ4Sev9RKrx53UbX1yWudXsYDC9qRXPexiyrU2YVyBvkt2Xx",
  "key13": "2GNrwhXFYfiFc4TBJZFDLP5fMjg25HRKhaWKqQ5s1Ah6yrScCyHTzncjRRhS63fCgk3WgNWcpsPMhYxwHuWzw8em",
  "key14": "5wy2zvwmxrzLwXmNLeCsH3ZMkphocseWnY9EeG2RcvzTTMsHHHUEXLi8Xb8CimZJLP8GzUCZFibfM3MSeKhaUKKo",
  "key15": "47WWYbaFSgxTRg1gbBqc3cCbYUh2rWKMHayf5sVhNbQe86vvYG2jRkyug5vy4NjVd5xt1uC8RqEoTzzU1HnouBUV",
  "key16": "3HQv78xZFeMBNqPYLj2eEAfXj6dQx2x17yKGVpUTAWknefcXsDEZ3vH7VYcQaYt9Y38VB8DvCGEg7y1D2LA6EMue",
  "key17": "4j1FPXqbEgAaq3wYoPSvMPEuv2yZ1h7z2QrEFv7pBXD9Fiadue4uZwTj2XknMuzwq9UcUgXDqHJzFvZVSckqDhoq",
  "key18": "3WLgcNbyhKVedSEU75FgSatU9qHgTomXu1tMTRDWtVh7ztXbZhpKzn3cqcjmrc8gb8DYWeSm6tGL8AFHjk6EYVDM",
  "key19": "5qr5tLvVpdZFgB4ALiNK1EMctXAGNcFMNgbbtd6zsN65cRNEoD9PBwsCo7Yjj3VCyvx4NjTLUmmePUP783Xh25Ce",
  "key20": "4n4Lcam4AK5oXCzn68PmCnCcbxVS3m4QsAXEqNeNdGEqfR2T7QhnREsuXSPYTZUqJhqwMg1caEiJCTv9HC72EWYu",
  "key21": "5iSLK7f57azSj68d3VYfrwX8xcq6fFrS8kAEmvVuqTj28K3JR6KHu2LmdvfeKPDxbDEFnMaUrV6MuypdabhxvQWQ",
  "key22": "4aHR4BiaGPuuFTjsWeQEfeiqbNtdXiCxDsRAy2tDS4ZnZ7xt5fENhU9N9hjZzTNABVabm26wfj5bUQUUUaYiKBiZ",
  "key23": "3K2TLCSsv1EJDCkhCVKoc6xHkKCJXnXw6ZBdLkT4K2ntDnZDCB65asUerY6yCtc7q8xEuFJ7AqTeiC3UzkALVPG",
  "key24": "3iiSnP5FMRRZeRMu3YoiWXDbNVBzCRE34uc5iPLqmQLwMyBX4ifN4s2Lfr6TTtkdYxYKP8FqkwCYbcbQTsaPhd7U",
  "key25": "zxw56K4qLnZzyRHQDRtvkAjoxCijHMBVHAHbwq9dvv3B3WnxNkYVNUYxDGjtdqPWcJ9V6HoygnhUJUpZPRsfvUi",
  "key26": "4DR5UBovbLEEyLjfbF2HzYtGxGE3jkyTHzHYahc4v4AofNUBPZJfC7ZtGeCcL7NzZ7doHsjgTS8zGFCBUWz2czp5",
  "key27": "4inZJTMsadvCkTUqCQiuk4JczKgT2wrmvuWRKqcRgu11UkoB8gyYQaBhvquh93aEKtSYCFmCiKBNRQ4yetssDut9",
  "key28": "2PENoRgo4RzbckYHdRRNXn8C2Xv8bTTcePDNT1pAemkMtH5cT3ug3T4FHqeJ4UGKEtfWaiLeE1nTrwk46YtcqvrN",
  "key29": "5LEG1GwWuXuSi8nto9gDY7vuWdCm8GvdX1JBP5WKteUf1ifrsnsY7YvxpMzSdCVAZnfdRYaFowyyrNBGRdTvoHVX",
  "key30": "4dCaGQS9gLcYwb9FxKVPuAVy6brcnrio5Dbi6kPy7qtpXivcTQaMAkMVH8cfi3wi7N79ZoYsJprbURCWvDwBigeG",
  "key31": "3pTM2pQKeMvvi5DKZCkCWSxaVFs83yWSNrAEX1ypXA8KCVd6h3C9Dn82ZtbSbLiyBqMBGKi2nzMpYGgMew25TvHX",
  "key32": "4oipf4qZQUk9dknYTbwLERWkxtcxLynFFY9C6ez1HeZV6HFLp7LAoEnLQX6sZ1WasQC8JPdMX7Yk6NF8QZLLAFui",
  "key33": "5BrASe9QE9krfo2FhdB3ceNVRF4yoJXGrxhEaoksWw9XJCe7AQstZ5HUz9XqMfVqKUbQdii9eezfKew2PohtRs5M",
  "key34": "3bJmZDV8XSQWaHRhwW6dzMiDJGviN5ym8ZC31SSZzWvYLtNyiUPLHNeqwQtXdFpe5jAfWKjjEPMBDb9ECpxtzsp8",
  "key35": "2v7vZE9A7CXKjsZ9UGcPLJffJ2kekMuW2LfiReJ2s9JU3TLmDCVpDtnEdiE5XmdBm6jj3LrLCwtXut7vsX5jTQcD",
  "key36": "2oajV2Wn8Jk6nNQJk8y74eJz14gxT3U1muSEG9zVGsfsyp57XKeWpPkb9rWJMVBK5p6zTbhLyakWpapHNX2M65pZ",
  "key37": "2SEWrMhku2ipMgj1GZimjNLGunawy5SnKaxGR3iuU35hfjJ9Lv1MzuzeB4eoqMqkeqthV97Mqqaf5csMHG4prbrC",
  "key38": "2dHwKGpumjovxgTYB9yPSwwFTaqhRhWghcnBwW1RpsFAwptxM9WEFMJ7A7qaffCAvB2JRbzbE8EpvVHheCwsJMgy",
  "key39": "dgnKcXzKCLxfA7ww6Y498js8EHCB22eynazcMQ7xBn1bvTTRjm3GvwkUPUswG5LgUootVDU6YPe6kpSJZY6cduA",
  "key40": "i9qZT6MhwrFwMyTBgcATQ4AJY2yaThyaPta96BDMGSJgPdu7Tz18v6GQgPfHsi8LfiFn3Utxbzyk2jZ1eFxdhKc",
  "key41": "597pw5H152eDAssNmDUewDZtdrFiE6fwF9XH2VkeV6rktfzz8vL634g5xxheB4hsTF1Mcb4iDHbAajVAkmviAUcw",
  "key42": "GGV3L2Gdoce2GgDPsGSxzhiNQCunBYLj6vV3eHzQg6Q9qMdSnDqZzvdGFxCfYJzCzWojKXr2VaB8gqBaj9RvrAf",
  "key43": "5w1DkjPLUpZVARwmePKE6YjUVVThkXMfCsR12JTYyeLGu1RfsDbt84U2QAzhjxzxnui27CLthoz63uGUYqaK8SUX",
  "key44": "28PMj6zwdmK8zYdkhv9eicDswspXbHFC2GhVa6Bh1DF3bgqtB1jtVuqrvgu6i4yq2jBvj68GAnD8xFc91rdVuoHU",
  "key45": "5coo5KgrRSeQk9cxNuMtCZq8yg8WupFRwPSVP98ux4DJgdqMmrLySmk9XBEokbWJbaxcfzm2664ak6S8SpZn8i9K",
  "key46": "5YKiKrB25b9DTm4iEdpDWGHiFGKaKpMbtrqE5pkGPgXR41hQUAqX2FHaG5gNyaNMpLGxVtrxD6AHXPPauT7oPZTM"
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

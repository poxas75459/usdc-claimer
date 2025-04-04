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
    "511SWFuewEq25J8FnNtsB9EDfcAFfDeNaxMkVHX5RdeRLuVN3NcJr5MkGcBAvyZMUM7NtgUKNBEZNCZoNvezNgZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHJagWH5zNXpGzLrpLwFoTKq8x3Y1uP6NdhcUcBvGwACPMPdqQHF4LWyTwkKwYsNvbYhxWkQzaRuMV3NoDJPAjL",
  "key1": "4FDsEYeYhc7Tp374aMyu9e6rRKb51P6G7bNDx6rzJ5JFrz4zdedZbS3c7ts815FqwZYxYXYA34WEaVu9hej6uAWw",
  "key2": "4Ejx8v2JnDNXSYYXKyDEospb82AXn7F1dGFMUwaPjVYrUDsKbmH4q8yg74vqxyPRbfzsMroqWkhh7wUj9qs6Jue6",
  "key3": "42vhu8QbJBv9FcLmAnQx6PXqkZZ9sm9PQssie9gsHxiXuL69FspCBSPAEP52yYMDsna8ufbUZ1jU9Ks6JFNzPkRw",
  "key4": "3931GN4pMgYRsJYuLFyBvoXNYJNgEXucpA9ysdm4nTsrnMX8vEkkND9T57DGK2NAeRezVvYBHnbkqSwZTvn8pQwS",
  "key5": "86r7qtVQK7YbZFLWJADLHjerZ9JvR2PE7gQiZWeruyL5Tsigk5iUiusNJ8kLoxsAEGND6LVLwd4ksbXfXy9taf9",
  "key6": "Z6tzZ1Zsdiy8nrcgh1Z9vW438fGjF7DTei6k8C1cFjmYWEoLxhg6TkKHQCsPH5tArhGTsFsbMcsBvKNNJbYfXdG",
  "key7": "2q6pUnK5MPZjTUHrPfAttNRamSqp3nUTGebBoLKL6fqbgebVwuMX7W4V8ujEmdCh6HF6iM72qGR4iTgdvwQ9KAgr",
  "key8": "3KJin4aS1LBzaNUTFvZq8jugTeenkZ6ETKNLqJphBSbzBq5SfxEPQroNsR74UmGrjHLQraor4hYjuAQQpKG6zrNW",
  "key9": "5ZQdiHnLs11eAyCJTN22hE4ddh3YPMXeVLCntfhLe5sjuxnjzYvJJ81xWLxeKx1754DZp6rHZEJJCA5iXgrkksh7",
  "key10": "2qPRrHYZuRFqT7H9jTFLvXDYi5rjGTrxB6x2Jr79ruvCw7SWGH9NpGnhsjagaL8Z8vZqU8zrJsTjWHJNiqr9MaHf",
  "key11": "2KKDq3znvNhFCPZCbw1KduDUmUaqBrRKbG1kopnNRk7MMmc4hmoib9wyXBEqH9ALkozWRvcAbmajUaC78AqVkpK",
  "key12": "3SC861xzsZXrrKF64ir11ttWuQSpEZeB3VfeDPgc7ckvw4pymLXgKotqK6fqYVJa2qLbmSKkY57rJPCxqok4enXP",
  "key13": "2ZSzLh1kE9NPoE1pVSZqFxZuaxiC3STzTQM1YRTgjfTdHg7tLC1Szv8DKLDijAkevHJi6TAvM3aAs5FEXVoq1mtS",
  "key14": "4QWNX3M8K1N8Uziw2j8zjMkZMsLkRsypj3X5u9mF7fW3Tohj6D17K6ogFBSUZkZPBQwveMpTDEavuTHgmLzzU872",
  "key15": "4EEG31ZnxqhyPRSwpwNdaveTurEmfDDwzqHoKY2tehfXup2Xd7fTeFyAnHVv7xtcBBYaZThXm1F15wgp4dHjx1UN",
  "key16": "yBmZ8REiMQLiqm2EGcEeNi7apjrU5T7ajmmDcd1iJHifqtxCC9bjg7GPtNSytGCqU1Rn1ZqkyhnQZyts58voCuZ",
  "key17": "3rQ8jiJ4w2GwcqNwoU4LoMfa6Aw5NA2cviPPQ2G1Xb6Zbf4FMJt4ZNNSsW9Ux2BR5NAjYL4PfrR191DpfmjGCXtn",
  "key18": "3eaaACHbdVBWb42wYrygSzYRtVXBXPPR9ZZXf9mdrMWS5ipbyXmFVZ64tSQoGd884c6wiGerEY26W6DjTFsK9Gu8",
  "key19": "5hSnd57NkYs28ku7egYcDk3h1W6RRKAFHUux8uo6N4g61rF7eJzqCBHUMaRFxpPtMfBEbFvh5b7enaWJhn7WAC6f",
  "key20": "VnE6wYA94HbxvfLvTFLFmCzUaMQF1nWFjxnz5cd27UXTrbHU4Nh8VgqkFCBQWhWGCaEMWABg3qvzdShqZKA9Yyd",
  "key21": "5WBv7zy2cmHtNDJrLnmiAxEXQZ9av7CdwQK7iez34n7MM3qNp3hp4WD3BUUuz9KVLs5ds3rYQCFdbJ4bgpkYd5dj",
  "key22": "3HR4yjLAJAmpNqHYcTCqSJuD6cJATSGBGBzMmzrz65F8EeiopJaJ825x2bh4a8RxNMD5vFA3fuNvZHmmDPjo7S9F",
  "key23": "63ftmDav9AtU2RpU7ud4ZuScbgGYNwyVPp64RB6qboPEGwoXFcAY6aJ3AbZfpfp7fC1m7YpbhUzPwVVohWXb8Ps9",
  "key24": "4tgBRgAwVvABZMerq5BRNj6tq3EkmQTavNJ76ZkS89pgfF66wFYFS3AAcYoRWhq3ajCvh4i6Z97N5mM69ptzLdsb",
  "key25": "hXYog47oActjq8b77mPU3ereS4wcNPTRdgup3yWnnDxwWvJ2rjum1B8LjCugUwW7mi4EwHSXVNYZHi1ieRLCiWP",
  "key26": "9gnTVQTskQo167HNtcY8E9Hysh1vmYAPG5cXxaGfgdfaLJRnmcUK5YnmQ7XGq1CDsXixo5D8z2A7jaxtCHK9kdv",
  "key27": "5xh9zCA8Fur6LJT6s5D6mUscwEi8FZC51LWRhTHXmtGL7kJsEB32mvvFA5tDRHSLbJkFnvV7T6NdSLgkPLgSP8yx",
  "key28": "43LJ7R5MCxuahhuSwuFp7SUPWesDGR3P7wouhggPYn434K6a5XgGYD8jYnaozEk3FkGrFzxdF7qdcqZnwe1Jd1TV",
  "key29": "58wnnaZQTqpmJcxjVLni7YRVk5KXgoNnM3HzLTaTaLxcnBoyQ8yh1monZfY1rWDuobWv3F5XUZePEQVp5LidtNB8",
  "key30": "4bCLirfa18nNZrJcZ6FSAWMoxttQJ7SZzYZk4y6KVRY7w8gSUghWwYFDR1Cp3epkcMQt9Q9KFpWZUWH4cSAZvHmq",
  "key31": "4ecAJBnUHT1m5bYF3KQUkVDUqwQjW7PLSTp5ozPpmcZCsrAtDKJ1wAR8UU8gEvRRizDXEQCrJQhqSq1ywtxqaNxZ",
  "key32": "2CZA6qcyGmWhFL33NQha182VPK5Zb1nmfHkrQMHtbgjotXKcLg8eQVn3mvURSoYa9cjLo18Frh3v3dPosEaLieBr",
  "key33": "2npzrTNZTn2a9KFWLEuVDELeSqNEVV46TfQiFjBguSf8qwi6Vt8saJoJTJJfFX9P9cSeCSpvJ8EZx1uk7XGRvMkM",
  "key34": "3UWFJwmmoqoom4jwC9vzT3WHr3ADAKBZRH1iaMeXYYaSrZGVjy2mKWgzruSkoFz96M5g1rK9Rpp1CiUigUhR4gZj",
  "key35": "5HXsBRuYjQL32zjqAQwZKe7teVCBg3A1vGo3TGJrAT58ntnrK6TWCGjCPLqZ7fBy6Rvwx6utAiRKH7UvFmQQdx7z",
  "key36": "2SEizX4caWpXrbvZko4w36PT6i39m8PpQNqqeLLNb3dsR8Jmj7hMJUb7MUdbAhXZFcvVk3jHeZECKg2U7731HY1k",
  "key37": "4riyHWzbnvZCW45zjtsepcSTwPzURT4FvZn45TorercEoAG3UZQuHNq3yZmzifu7uxQDmd4vmaZdj2xdZe4SjMC3",
  "key38": "4vkkJ6GKikn2v8Ji249w38Xh5j2vJi9TFybVyr3HAz5F8bFGsM6L43CKBitBfuxWXLWjFU7mPX7v8Z3gGq2asZQW",
  "key39": "3fZLDzgdTwvgkty9JFTXBNkMLKecqUkbwJyMcxpozk6yim1p1YshYJHVc9fex39CDH8firBHfRKbxGAkhgSB5JuR",
  "key40": "2eMiLNgSSu4dFYbh8XudPW6ZKHG3GYDwBJSRMaS4TjGdoCjXurki3Atw18TKXygSnj7tkyCci1tPEpintrh55FcQ",
  "key41": "4thySuHeXGR7yPPZayEvXZvTyfhJiah9sBL2F5x12amr8fNMPf9NbedUFMfpaiTn4dtMVQfuYGco6yQ7DhoGdjpv",
  "key42": "2Q5V3SsWPkaAvpNdiAasHcjj4GiBRABaFLHhd99vPbg6QQy8SQBWQi5uPynDmGkk6itce4TQWFD3WwHZZ6ufoeVi",
  "key43": "3jVVBhuRxaL8LScDga4xBZMwJQQonzFaS84km4N6E7eRD65vH36yuyCPXXwcLvDrL6Un4ZkbNa7oehDjLiU81km8",
  "key44": "URvxmbVmLnoMswcgz669zkKPXchwebBtvAczZ3UJKWDKz1pCGEYdNo4iRFBbw8UmuST7nMNow5FLwqu7M154cCL",
  "key45": "2LGxmQSwaDrkcadHdp4cMP9nmzeoRcBDKALEzxhykYvf1Pqj3BhuMSwtRujXiQSUAyEAbMx3EpY5C24yGajpmLU4",
  "key46": "5kNSdVy6epdVwSr417h924Z9b7QZRHzUchJk4SuKeMXEn5Gv5kjkQUmmAU9DtjD3LbwDpanXkTWvE19nhsuyTGkm",
  "key47": "xo1uYzHLXzkezyrUYjtbUtjgh2mvL8mbVxq75d364j2EX5vzG3zzU3pkAxpWsgcCs1Gj7A48aACVAfVr4LgXsts",
  "key48": "4FAQtMmWQg1bihCc5f9FzcTGs2o9Bayao6eCknADH3fHQ4BwpVwucsVHC1vdzVBgVdAtSXxRdz1zXD9tRKVFRRLJ"
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

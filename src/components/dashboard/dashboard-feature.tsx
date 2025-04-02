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
    "5HLLFcbSf8Rxek4zhNkJfXLuiMjpdXh9LUfygmNJ9kTZoHpgKN7PsNGWGeJrgbSUSL1NTDBrFXHov1v5Lpp5yUup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41i72hbDAnJDm8AYdTgjvsdhLCkHnsoVBs6YVxLQx9su4UB2EXoKZ23o2iNexZcyQgRF1GmjPrPJzHgtLTP8wwd6",
  "key1": "64TW3M4oCaz1wJcgVrcgcR5WNQzozqHrp7EAJ4gMZnqGiwGkTd7fU7RSKvo4UoniBRfMHj9hAbKngQcj37pNKgnX",
  "key2": "4c5wWqvBLrorB3xHP4WGK2BoWAR7mENZkzZLVuzAkC3uucbk3uCszhPDBSAAsdjaryHEYF9aQm3prnyKotni8mPf",
  "key3": "4GGqiQVyvQcXEHEokZ4HQvqorsv68Aoi9H5NhSczGJiqt3CfAENTwwNmKqxNM6HsHP5doyHwQt85JdrfSsRg4pXR",
  "key4": "2AbtqMv1PWJuTwvaRxBkxW1MuVC4ChhybeteMK4QJLRT3tzJafsWdGNqsgYgEy1nQJEQnZxVaN9FvSqxmpAF9Y83",
  "key5": "ddEj7YW3R1xwNy3rPaPcYFD4dqfK7x67yTGq57miSS4V1pMos5HkG11Qy3B2BXZgnBkUnFnBH8ESQNDQYP9vTfY",
  "key6": "3JuKCTvRdMGbXLt4zGJNHTSQyWyK43SAj9eY7NVmsTbexovw3WofNGqT6fHn3VATaWPmYSyet1qdsLqpjW5urbkH",
  "key7": "4Wm5sh17L5iW1pt562V4UpnZ835FoqjyDQoSVHbefoHn8CM13iBopY3eAxdhfgoKx3o6w5mtuucg2wDhS7DscPfz",
  "key8": "2szZ6xQXCVr4yTqpDBCz5vMyUfsdgh5UFoJRgMRXuJRYqnN2Bin3ghFBTrs9aaMd4cWK8md4nFiz2FB7rSQzaYWV",
  "key9": "4WsnfFBD8ycZRVW1BcsciZt6GaUPe1kmrWZF1YrJitnVEnfV2NAmgE4XaZ3M1Px9nYiHFc9y8wvtm2LNezzyx38z",
  "key10": "3SbvbxJvzwUX87K6dtyohUQZDCJYaKCnWK8EDmEHtudQDJt6Qc6tZLYUN55j98wYpincmnMxSGTpJ4WHWLeRyLH6",
  "key11": "4yfPErZAMraTQed3bYQMykhtG9NhPJeETbs6ggczErRSGnBtGj5s6LvEvdcs9uRradUxt6xwPBw3VmcPkgGraVmb",
  "key12": "33xUBPuLVzUT5ZNRv1fndzpFyLMHn6hYW15xFtPbX3Kcfr4RrLVWoTKFHHH3YUzJgtWLt53azx9kkY83MuKtYG3L",
  "key13": "3UqkKYU2FLJBTW2KWaHCDAnt7BgVxTDPxDB5jbi5oSk7Hngkggz5HE7pGibUQxzUQtruWLjgbMHFUZxPrwVyRDqg",
  "key14": "3rPpUYFNTjZPu5yQMhka9icVhEkJvGkRj8PSUFD3yGjhzJ51mEh3vAFfvQXiusSP8T2ccW4hhE5xcd5ccDomTG9g",
  "key15": "3TSdv4jj5WTpjmZd8EMbRGpMcsikW8SnHGyD368fSPJxrvw2oiEsT1UJLsAEwLiCseCgx8mfU1TuBTvbagdTWmug",
  "key16": "y71vCNVNLULXcWzSsW8s2aRFzr1Y7moMMf6Cjow8DNzcyDb1QUWH1YLuBbfZM2ezTWrnUMKgMyuXCiEb8d22Ba1",
  "key17": "31bxM7N5fNyfScoknTa9gXfPur1A9a6UHFGHEjxNVxaTLjrGWQnK4DXfUZ1TeYYjijn3afcJAC6m2vFEbcfKAAi6",
  "key18": "2TZjzok15atdyx3B32U3ovfySFhPKZ8WWRz8YHf5GSZuThnHMjRWwjJZpwYirgMyiTJBVJexyfYwYfGgEy2pM4BS",
  "key19": "2JHUc3e1kzLWQFwHpMuoWCxE9KjJesfdXVXtv3ngVB4baR4SePX3hqhfEegehfD8e4BHYVtuihwCcC2jHizV9GCn",
  "key20": "5gpcRx58pRfYq23y8uH35NHfpEDXytK1HM5C7i5BqwZ2nFSeiTPH2paRB4yxgz5CTjtwuP6yYwvZGqsvhZiY79nQ",
  "key21": "3d9rp6DuZP8tuvkYGuqqA41SGrzKHrpi6GgXu91nUXY376GWY6HiTHmG7T9f9jA2XBXHb9vtrLAcoEDZqsadZ1cy",
  "key22": "2x4kHUHevS4cS4FYaExzr3D6M8ZyEbFgTpde2gjCKYJJDKiYAsEWEmyhifn14Wubgj42THiBwVJdarH3fk4EcvZT",
  "key23": "3rfJUkv2xUjfzfo386VDCGUXWBC2YWbuY2nwiEUjhguXBbf2FSut6fBrBkt4ncxupXZd6r1UaBRUHPtL3AUmbys7",
  "key24": "4xbimofNVkTeDW5m4UkN2kjkFTPXrGeHLa5b33zYAMm3rDD2txXcYjNyCJG5EKPzc1PPv4vboZfrAryk5dW2ubnK",
  "key25": "4MMi3tmh6uZ94iuwo97tJsmDYErmMYDvxLrepUGz7Pim2uwXxa4DjfJLaFxRb4KU9RY31NyqGCUNeNyYcyMPZhup",
  "key26": "3JHPvAsQ5h1nzXLxAVL8uQBjcH7aJm9o5y7nWuq9psKNrWkqGCrfgbXkKMUmqn8YC4Z94FZqpaUXXz4tnWZzXpTB",
  "key27": "4jiwTR6RQsah3Wg88dnw4rViyCiMwz8gBXEPzKHeoUqMjgTkAzosKrRG8QkJY4wgK3xZqSMKgbMRNvJjqWFeXYnG",
  "key28": "3exLw89d4v75wFPLmED6bF3cKaA3yimCnLowiTwHanC7Vc9C6gU9witfGMgoLjYX1nzo6yr9ae9YHXhapdpthrxb",
  "key29": "2Ur2uxThXct22aaBoeCuz1vGNjxMuaDR2FFVVFibkDnLo5XNnDAc9cRoEdtCFMbyZwsB6kCe2BSjgA9fQhTypiLa",
  "key30": "2xropL9erUSfygRRoo1MBsFjogXLE1KXnT9smCT59TwmMmBH1G4hg3WNUXuFY5A95Lhrz9ShvJqiVPei5zBpZtPK",
  "key31": "4fqBqyXSSJ9eE4UwG66DbMHAbjvsywFDvkdzbkjebGph8PCN9siomMx5trDbFuTP4CnG9N5KTQuWG4KsMu1x9ZHF",
  "key32": "2JWPHTfhZKtpepRxa1wNiD7aDiQyusGXNxS6qQy9Bm4Ep22myci1hH3puHbRf8bSYcAhPu88XYY6HnC4K9mmMoLH",
  "key33": "4C2EHjgYmjW6t4aShtiRJ8YHKx7qMnwrzDaCzowfSmaRjGQ93Qw7SLx8qDKuDvVdDUp23SGSRvyFcmATAG5pMPxT",
  "key34": "4BiuCyUpdqsEWCcVHLZHTmY1fXcPehV7gRJkyvXN5jgoQh1fo8K6gHr64afrmzWBP1kpH8odiRDKsnPfBfTBmN4x",
  "key35": "2Jj72EMKFueaDc3X8tYyh1pvozJ6Q9yuLo3QDJtckvLdtVMpKCTZHdfAQPTWfY52nD5LPKaiZba7XxY4L93fnJik",
  "key36": "36N9oNrKbfSNa1PY4QQuvvFVVX5Pq8p5HdWn95mSSCTZUxgKcPPzGrG7AFwWEEmB9w3fNqLaVqdpXZfMU7emp1RJ",
  "key37": "4Emvx8vqGASEh1wKmm5Kz3VP82dqfN6PFSWJTRQUMvPHN4kRHb52DCeyEMqu3T6Twe45Ye1m7y4JqcfccMYPMWxy",
  "key38": "GChX8unEG3NRKtfKHra1hfCBACFDyZvp1oCHXa59TTpW8CVLjd3QvURWVQADp1rSytDySRoKMiWx6TxBAb4QMun",
  "key39": "2NqbaUK76tYWjkj7j3ThSuNpobTisPaJqLzhFc4MWhGHpW7buBqgFjGU6qthC2eBvuU3q9761H4YvEcotmesHQAc",
  "key40": "41i5kbKG7WBDpHG14e4VUKwiWsnqfmDsNZtxUCZhSDz2h5vf4wGhHJxiEN2hSr5KVaDKEnuUsrwAQtoDjjPr9Fj",
  "key41": "3gb5fp2BuSBZsAvWuKdge5RMvrdT25mjvBGNL4Cv86uEM2vMjkCoGfo7iiNCFJmnYh6JCF65LuGv6y4D2mPf3WCi",
  "key42": "622qXrAps3kKryuH23Pi1ocnnj8zcXQdpZRbn8WbvzseXaS8DsuJsxmphtW8dGZUw3rxkjDZgU2UUJqyGpg2UKN7",
  "key43": "2MhKxvNsKFBFo6TSfQEKdTAWpGEUM9oNPMmeznZr1vrUPtampxBfgPGZNv5hqZUE9rP7YLJBvMRw8e3sVs8d3PYx"
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

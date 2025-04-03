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
    "CaAUpzt21EKGCoTpjVzvzoSn4qZUKR258gACgYg5pWTp5TnHUzTySzh2vsUJyVWs3Uj2gYQ2aVoJhJDHiNJpLKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fUysszSSdFF5XgLzceBmttLLduGGJewFnrxvoKggyqLKwB1W9pEJWKKsPf9iknMHtrdSW6wRdASZVacck7scFnm",
  "key1": "3LABaveqUzanTz9Qst1UgTMWqt8yLAqwxEbJU6jxm8DJRxCpoSNgVVj8F2cVjt3KShS9MvDTrt7YyMN6y4UgPYnZ",
  "key2": "6WRBE7tdCcsY6r1SNZxgbNkErFrneok92GCedszxuuriALhadSbhNQQAH3HrW2AFFERxBS76iKhEgw5xSrmW7kv",
  "key3": "42Mn95fBHWBSq1dQ6rPB6Xxo8p1gaspmkLGVagm9sj3zMBn3B25hpEEEM4LgT7R4ZFbT9huq1ydTmm2NaK98BgD4",
  "key4": "2sRFrBd2EYXYfo1qwTixS2Lt8B9A2M7tm2hF9mi5gwQFrExVG5AccaEQft3GZa47jCRgT98rY5W1nM5TyfX4cUdx",
  "key5": "52shVsKvrqa6fLng5Xz3bRD1nmZess7HgcXFtpG4YV8LcQk9NfRKxSr9tW41kKBFjt4K5jBSysMV7jXoiXpbR8pR",
  "key6": "2Kke5rkBTPzm49XLpcyDE1wCDLSoNYAgx587rGou7Ft2QnzkpbchnwQcHocTK8QYmJTbQCkzAS9rhQEEtj6GyaDb",
  "key7": "3NsdfV9cMCksL51ixbns3AWP4W6RUBJQrm7EGw1TnBt3jhzu1cc3dYpBuz4pnMfKwbQsZ1JaY2ityZKsqiVMKLvS",
  "key8": "3ADFX9iS1pGNp6AitCA1bV7QptMUoSwmD9Z1X16DKhDe1QS9Jc5su4VxTVgUZcumbgKxBLL3cSU12q43A8woPtTn",
  "key9": "XdSdxcnzPj7FioNHGStn9riAbactEL4K5Jd2WkE4sDAJKywm5uAtnvrWo5sTbhUziW9D25ct4WVoru6mozWg9No",
  "key10": "428kBxVUn8Jx6ZYY17iLECYYQHDcMJ2nYUb5VLcz2kT2jWi8bR5mD1GQ5Qpu4eHJmNU6ncqEyxHnGt5ipP9DuzG",
  "key11": "2ib3Rp2wrKjqJSebj8ddYdASV5WWKEMUprXqHMZWDCqMrLhvdZxvAmKzQy3NFhhR3HywfixwRiYpGAQtB3H7Zxpw",
  "key12": "znKnQFJytVZ9HCtsBq5eDuxMkZZuKWESpkuxkVBTJEs6TDyUYTWXJktKynsDmsFswD2S6MyQFtDeiPAzE47Fa4d",
  "key13": "4qqvGe8xJjHAWEQ4NYuQZweNVSqYW5b2HpTk8QYvDoqYzrfdZ6WWcv9XP4TcQg5Q42yiKrdwi6BDPWJXNTBE2oFk",
  "key14": "5fktAPWMMMdN8gvVCcbyLcoX6Knt7EG9oqSbisddC4QvBoJVaUzT3aHTWXtwbE5YKPwgj1b7j7AVqJMeS6QnSSP6",
  "key15": "3d2utVHwWmghLiyFMPsaT3C4q9kFXZKpS9gfE73ZGau3Yt7dftKsU11vMhpXHeSoMkr33BtVAU5jbQTefamAYeYm",
  "key16": "LQ7qMKVguEqFGM9tqsejAx9SXQF2QQDhyQeSXvi3LU7yfQNtFqyXHFxoQTftWnKcnZ32H65iNnyFSuPDPWLmHUT",
  "key17": "27bsok4dTq2McvTXnuXQuS9va9APreoiuRhBmy5u22YkEnp9vAo2Na3xbAM3gL7FAdMSGsAex3przaokR5soXMdY",
  "key18": "5zjSKA3dBSM64N52XR4WQpBC96n8P1STmJRYZrG9wSU5YaUsSwgQgByWCaViMh9TscWWhUgk8HnCyoqLHHbakcCu",
  "key19": "4KqNRrgF5SVxGLcjoyGNAeNstbPoTzuCxKjyMAz1DnyQQwncWtYk2hpZ2GEV7A7R8yTPNLER6snms3vx1R4aYbMQ",
  "key20": "5Ri3nkZjGXB7i4UHcQPMTLg59tZnhjZ882tZ29kUZgqxKUZaRAauQLZYDnnSMCSyWYxmF3pNzELDCFuCYxakzeCp",
  "key21": "2iqUZGNBaRn2csn7JWhG9cLZW2pN2bDrjh2eRDikUtaPcAQ7NQDaDUBQftbTKZgpjymDgqEzyUL6ojbq9zp9BweM",
  "key22": "27iyi9Wnfodiic8nYhechr3wu3vpsAxpUPsQ64oHkAHUWi5Cf9g4GpbbvrmXsBcxKexNvzKwrga53jwEzrMMQgpV",
  "key23": "5VLEKHEmaejwN1WKMAJ8gzukPpL3LGMGXu5ydix19xh4eTS74ujYQx6HE9jbftvy5H8Eaikq1TXiwMeSJoKdZ7Wi",
  "key24": "QhmDKpvqKL1MU4B73FnHyj5HUxcqmFYuH1SHcDcuS6afwdjPUAadszUUfCQ8e69MDFwfW8BTP1X4KsBbELRaZbE",
  "key25": "2sWRJqkDBrXJCB8MEe8KUfoK5Fm72zKEDbTgqWCUHXUrRbqDKGM2zcFV2F7bnwEzrJ9TaG8cTd9LY4S2SCQQ2rJU",
  "key26": "2QNRT1b4eiynyeQ5yDLU63XochhprpG8PzSAgTHv5Nm3YBh3PcNMau1HmAYRjNzzkRcsePh6bPWvBUYop9A552TM",
  "key27": "4ZSQXBFYChJXR37rYe2SEeYAtJMYwgmguz6tEzNGbbXWESZZtWBS1zC2yR9BVnZ1U25V7KZiU1AdHubTH3LVEmQH",
  "key28": "4euNv2UTW2E6zitHyM4KoSYC3JDRmRWDMtXWBjfoD1qTcvjLhjJ6LHiDSsDAky11z7BLiv8CteyuZYKfAHxnTEsQ",
  "key29": "439myMKmY3QoBGhyFbe2VDgpLCr1vDvHaqZBDj5PYh87mMBQ3yvXGcaqNsDJofC2Mwe81TjWJXGBshBsw2QCKuEP",
  "key30": "2SUvqTRB9Ci2LrGBy81oFX8wsdTnY2LHgDoVMvHCKdhh5TBvfc1n5qAk5Vhvd6aPJPJJ4ebsbNLs9ZCBNTXVq85t",
  "key31": "24j1UYuqZaeYCmgtc34bQMroqrnsvPmTta6Kdq7xzFKoyQQV79HcfvL4719SDi1wHjYPuZ5j2iqFsZaLaTP2oV91",
  "key32": "5Uit1KmPSgtH6omTPvLThgFxAqVAoVHYSi9bQbPenCRxAGkxP1sCFqguwQAQ7mJud39VH1mb9Y8CGgDFFkYp7vPd",
  "key33": "4eepaSLwtS4Le743e3kCdEMZYWDvB5yXn4a4pqm9g1NwS1Mr4xcNBxXeH9cZxpVEv5LpzT1B3zCLuU2kqc8NdAfn",
  "key34": "39vdTaBpKSf7cWA2N8Kw4Awy4r5P1G9ZmEuQZ6C1ovQbNLnkuncjveTLC8M3RLUbrtBLFnUoMPxY2tfZ9dwoWTBY",
  "key35": "4nEz5amr5ypcqYwbur8aAzzXF6fRfaJGP8FysNxABxUZiRBoM5m8z2vh4eQf9jQPUBsqVciSuUC8qzUWNKgkGjVu",
  "key36": "52ciSQ5ZJJtqCJGhVxZ6bcheQXUX1UfQAbyLP6KRnECxLUGM65GavZysQLqjQJdNaKzLxt9ZUewqeezEQDFwGS4v",
  "key37": "4px6B7vDdKjKWdHvYFu5rqWTmham691h5Vct6PNJsbVzaDWTHAhUq65fvDtPsFrpjEVWFk58qJNVGEg4DCc6JDEp",
  "key38": "RwnCGghookRF7AucQaB3yFJsVcVSKvUiQG9cWgzQLG2FetX5EFoLfHb8GDMJvGUecboFgPpdsrkcim9uXdoDx5C",
  "key39": "4W8Rx2T82sgM49fDLaKmqdpLisWrkbWTtezWb1WNB171A6ayiMkp3tYM9u1sgZwVD5bvXcbavFw9YHUdh4da5rXb",
  "key40": "3H3GUR9EB5E7NxTrLApBMA9KQWdrfNvC3NTqhFERKrYu8WJp3orYVP5dc4EQazwvLVqp9SZocmxrCFcTyvUETjMG",
  "key41": "34Tg5d8h25H1gRsGxBqWh7JE41wF8Ads6RyEe8pHVJM4YGRahsq3qfTGWQcUkDtCrZfq89Cg7KGARnieRPQKduF6",
  "key42": "5oi7DN2pqRUqLwbEvW7bWLJ1UUzrZfoDnJTtHTtWq3iDEntLapbVtmADv7JSB1c3aXKq1Wu2uqbRFhxh9Ky955ax",
  "key43": "t4LJgXtL2y8hTuuEX6SZnj4kWsrG83zgsPCKpcYDf5WSiPTTnQuzmdv8h3u8kivARdhdoutSYhGHKSQB6qMxxfP"
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

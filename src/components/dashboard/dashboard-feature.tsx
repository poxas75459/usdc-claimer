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
    "5Ub4aw9dQ2WYCm6459i8LrtdgAi6XsJwkNiTYPzy7LNmCPsU7yZYswZYW1Ck7AKYknywEF3CpXnn6NXdEVa5Fxor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUJKHcufWJYcStfia1XRBzZBiYNN4UYe4CURseY4fTRBRhjxbznjSBmQJjCXTqPA6TUtbWYXUbvQnykZY5AYB9e",
  "key1": "5iHVTC5TSK1vcbjfh6ouWMdGfXLj7gvEkUYCuh54wrcEkbxWcKsdcKTpZGMwMtVcPwqiCWKMpWhZcX13ajX7Jnvy",
  "key2": "3EBVidNQn7JmufM2C6wVFtLJQzmzPnNTyvitJtCmtQ8MDXfQ5MQvduDck6wnWAQySnEd4ZAP5iYW8xrneWztz4E2",
  "key3": "2fdftMzXhhCCAZVVwbBxGkjdKaPbmD1qDuNC77vrZ2Axw1V38eG3n9WHGzfchzJSKL6DhWAPVTNisufMGcZsG1ZZ",
  "key4": "78UaBZs44pTDYNmstUQ4BCSJYYPtc5GP7uxhvpjoxmsPxDD5zLVNGsDHzqMd9akg93fEtHw68qEJS2Jm2jvwUFS",
  "key5": "63rLY9jmVV422eTGv85pB9Zp4MB3N4srK3w7DH4GPEKjBQATz26Qr6FXtqL8NBSHimsnWWxQzKywShv1ZuKAeaWo",
  "key6": "4AgTaVSREiouGpG8FhVCP8mDA9MKxse4Wd6AaznqUcMGPyfVDPCQX5nHonvQqAW6861Hn9UTicQ4LFYeavF5TxVG",
  "key7": "63QcogNGEeWY3AuGKdBubLvtQ2Q8FKzbJ9JRfR9GwummQUu7mgUqDnNSfFC6mVrTpSMEGXs6kxva8TqjfYYbZHCk",
  "key8": "5GTFtDFaJTPub1usiFPJvNhZtx7PpTSmFWyL5jTvpEdYUftNzA9iAbtRJUGCDNcvJjSh6j4chuS7o6H7NrKrYF79",
  "key9": "3BswXJ6yCKbbeymn6ZkWEYPcRZ8qidb3cZ2U4ad4EGz3M2hNdY4TR9xk7iQqBUiJcbfR6hAxEpQb1DSnvk4bGcrq",
  "key10": "27zekqVt6a4JebDSefXK8USR5hf3zRM4hKBynizZP4BrbpXNE2MttKQKsorxFhw59C4JSgw8o8xgAdLcx6D5kAwV",
  "key11": "23udCT9yBG88N99sjJQfabKoGs6NDk6EbhrCnBY1LoWVwSD7Z6jBEfTTYzcgHVqfoHjboAdyr8xi7CnMH1rApqNW",
  "key12": "nJFzC1UtQJCLqsD1KkmPi3KR91Q9iE9ZDNUp9HtP8YnqppezJxSHSdxE3Yw9xouakrQXDBkSGAipBmfRe9uSvhr",
  "key13": "4dzrdj2zGvctX7bjikeAffMh9a8TwZCK2izrvfkEfPh5Kqev5aDTtRBU6G7xHBZBGRMgQznsKfFiaQLNkg1vEYSm",
  "key14": "3FUuZBCdTa6PVBJV51YRJ96wRGwGpidKQzosPBdc3GMPEhHJjUgEF6u42XCsrFR5AsBr6merEZXNj4Ga5yH19Yns",
  "key15": "38T5XMwovSARWAzAofgNprfymVkaDuvbtj9Yc9A1kDdiE5ZB2G3DnLavdx17AsNMcgJ2R3aJVQaWzQ8TwF91VQvi",
  "key16": "5J1LSsJ98y8vT6MeXh2YVAVBFUBsk8ZpvWvtyrrk5ZGMe7ZHxHFqaVNkt6wuLrbZNNSqpeX2sdr474WCrbvptiFw",
  "key17": "4WkWZP4vfufeogUbFNkvQfPU5eEpysPY4ubgYS2AHd4qHgPADm1drqcM2sPzu2NSGcfSsujZ1nkL7PEzAZdBLi9p",
  "key18": "2vaU42bMKv97ip1UhbPSitiTskxj3xgr15M7jK7nrrZKwi7pHjFDV4cTfPUXip5LGsiyi9jpPcxx2XD7StyTPECQ",
  "key19": "5bX66tvjmpDk5r2xEnUZHZoPKhbqHWJYtaKhVAAT96gnNVsDFNoqyXcejd31TnkFbtQ8c5tK14w5ULoeBHCPkNcL",
  "key20": "bTn9zHXtZvGSts55PJmwTDaoq1KYNbzZ613yjf1fsZFRGyZGsfeJyy6uqrj3BFetmtQzLcGhU8NMC4UELnwS75n",
  "key21": "3Wswy1zzQfYJVyqwdTGSmUKMMXXenCLFmVa9zs9N7374hRWkCyLqzTiY3zAxgo6sqHsZxZRneJdQxFuLKnSL7V46",
  "key22": "2GwposuQAJ5bEbPd9EJf33wX7oWtY8ZywD7WNPn1DZuPfkbN9EDAkhw2gmEhSbqmveQd11M7adY2hLe9nERBuXim",
  "key23": "25HxquhZQv9pihY3ysiPaq7YYvAt3j96vCv723SHmWwznRpDLKgNtxx7MnkxHyHXcMXh55GXbd24GJUYnnMpou8P",
  "key24": "5gFye6gn1AhGTk34ULLd5ueYgvuXCQ1Svqk6dMs3A9CfLAadDwgpWiGkSMV5Tqx1B3v5CJ72UkqJpf5A8n4sinUX",
  "key25": "xAb1L9qcfPSgUuhhcfNAHHK8rxeHue1BHjuuabQcWzPbKPoq8KyfWbMX5L8RFt3X1e7sdMuGG8tRiM2WKxEqsrC",
  "key26": "495KFw3cV2sV7m6VSrJB9onm4P2YH5D1WKNukUUjAmSUsECH9LmZqwtN6KRtwssSFUFKksxthcjuWrq8YbWSg3zy",
  "key27": "42FtfatDB8u5Y9kR3eHKdXCzJnTUTmL6gw6H8sX6kTiDdN357vTGiBAPTXsHxWVzXwogRj7WqVnoyiwXNHn8JRuh",
  "key28": "2a3N6FSi1vEqBML1jjQLZMi7ZwnCJe4aoRJsFTPXEysVbriXtHEgdsE41rsV1NaTHsor2KHqtL4qfwmDj47VaaK1",
  "key29": "5ne9xkVnBoLxqS56b7kRoorBHobC5WhUDVudvSkY14nCR76yzwS56Pjtkvztx6BwToaWXunY4DtoyGPcSxh2vRJ7",
  "key30": "22W6uQ7Q7NGjpnhhXJh5JLMnxpsYXQrXWyyWcABPKK345oKfWSBchMGogyidprvhMMtTcLAVbiUqoyJUXTajVEHc",
  "key31": "E44LyevW4TCivC2HmgzGnP46joFMPCA2icD6XcbCeaYrPsRvPgTiX7KopFPudTsq45VvW3BV7wxTwv1bgLg4TRk",
  "key32": "2iVS47HDmxuc9r2v37HrvZBMFkxiJpnAhqyZN6Kjz3VYLCUKEPE8CiLmXiayQZ7UghYDJNGdgMgWTLLS1A9EhXfm",
  "key33": "hKwtvcdTSiFkk5xS71NyPPmvqyaw8yJmKRVDR4NETkEsWHhHcnMds3886XZkfE1HM5S4X6QJiUM8CANGkJbbmyc",
  "key34": "35AVQjh2nNvm1chrBrVVTi8cLHKG6UiMAcdU7KLxvwkMZ9zPzrTt54EP5EsNDzhVApcajGtJB7U2SMDD8jS9HzZD",
  "key35": "2VTcfgVSgqmLD4mMJUFoN2zdLkVXBLHhZuuBj6VsVpKF2LJu3JfwHntPa9zhw8tBfmCnXPr5BrXB4VwrpfhjeBoP",
  "key36": "65sLjJ3ZpyHSEmzJCYtG64LsH7t7MrJVFnMEi1Pe6NDUJdxmoapeXLjQVDMZAQaVtAWvt4FqrAwiT3ctCSi2iac8",
  "key37": "mDxMRjhynRyGDha3jebr3LKpDyyTvpTUkDUCa6eXWDMNA4FDfM8pLakmD2nSJZT7YMsTL2spDMgkWQVNNsvW7EZ",
  "key38": "3yEfCWVxHYPk4pw17cyWzGn4LvQyjtsY1FdkjFPkKFj17G3L4N9x7syJT3S1v59Jsak56fAGtY6Gy6L8j4xG5E5o",
  "key39": "2eCV5cYJia7dphCupWE3mgvT16zc46g8WpFJXLDM3ZP3AnQNawjiDmGcvpyzF5VPv8LGasgn3nwJWwLXUT1GqkaY",
  "key40": "4Fkx71VvJQKTWhitf5aitedEDYHoXGSwfVDXGEqx43zFNndVE3Y5aW8WyTzTxDgBTKZzbykRTdRMdhZtv4JQsEAy",
  "key41": "2ZbqTGYt7vQDjC8oSN5qYbKqE1YaNuzfVB5Z3HtfpZc99dQzMY7s4hjPyGMsGvQQ1M2jEjMcm7yzbJa7pC1CdBxK",
  "key42": "taWG6rejoGXYjboDs8XXEEYpe96f8VeBqhRqf5L9QmQBzGQM2exNdjfsUsyNGMULcvKTAtHm4A3JXJLxFNyE1p9",
  "key43": "4aGEjm2eNQgee4GAvoaYksruuh3EPMyfw5oCUVNYPwmDzFfxtCPLFos5efG9MQoTcvpUYHdLvAjVeZoB8VK7kQkZ",
  "key44": "53DhcZScbgYkEGe4Ycpa8NYqT9gCimYvaxLQb5RZPYfpsuwxV1QM5uzSuwbMSvFhHKJqjZ57XZ7q6BpoppGvZhay"
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

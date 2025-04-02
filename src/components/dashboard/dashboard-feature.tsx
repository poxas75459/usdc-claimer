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
    "2eqwWmpxVPLigmd8uiS9EXNEGof7s6wN2SwaAJkq1FJ9X7zngNptNTZB3KuVoDyEQMFHB5L24hYtiHras3muPkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HRnkx9hntgyBtV9Fe3UYkv65fFAm8J1LrAK94f9RZPkc1dU7eUypSt1JMYbN2zsj7EhpKqt3ZFmS7H86UM1UPf",
  "key1": "2DD7srHvhoEVWdb1qFhH4CjjFtbFAKASEo5DuNUoA9FEQTcF3nFq86J8KDrx6FPVdPR4UcZokP1iisANSCixDcTJ",
  "key2": "GMHK9LB41ZLN4ZGPrMBLgmqZ1m6isBaoyoYNb9LHktbrJThUxaR4CBx8jBFJjTUX9PaURrWa7ghTCRzah7oNX5S",
  "key3": "2yyBki5xFTf3htT4L8VuxGvN5FeUVkv7SvfoZQpiYJ8FgDhV2j5eAAV4aGUQy2RHpwmAi4mMGmuMJYZ5Fxwq7vGV",
  "key4": "ChBgjAijc27SprUNoBKk4228VHMCMmS9p1uthp3nsGfyJY9bLnMyi8YiwsfF8aKqaNEETPAeCKhzkTSiwSyx9QH",
  "key5": "4c2WJbTjKpJmGkEq6wRpm92ZYHprQvKtxFXqUq4y6mH3Qbh1xNKNwYkJSEFLvD5goQiTecbEZ2s718cuPiYid3hR",
  "key6": "3QL5NFgdDdvCeWNfio4A8MVF7CaKXJc3zTJ8FEoqpx8nqfJZyRZ6eUkeJmSm2vzYaZNraaFZvdQ9nYEswQkspAdF",
  "key7": "5txXqoHAmQ54eDuZgZZBu1ximgsz97mYCx518YzF7TXKaY8XRLBXUUMPDYrFZSW7vgmi49CJcKJvMAxBiCcA4giN",
  "key8": "44urTzQoKRRAL2rhcNEAFfhTwSf1Pg46UWn9CtEf4JyEFT5dBxA2o3ysTVidR5JN57pnRxW14qYgxtdTdBZDTzWn",
  "key9": "4qW1x1YFtdmjpLL436SG9JwUL3fBCw3w8SuoZCkEK4Uvvz6nSEkVYzbwCW6rWE3Dud5jNt8nkd635jdzsXSk3rHy",
  "key10": "5xz1ginZMTe3973cVCsz8DDJaQoLCCi21fxX3TYEdefhRc8yT4QmeZ7EoEWBwyNCSSsBabUVRQPqqxtQ4rf4L5hG",
  "key11": "479wDejv48XR7iLoGjjgyeeekdzKCvrYF2DE5E2PNwB2e9XFwND9UPexqXQZBMVcwh2Ugb9qcbXpKQQvtWqyMxUQ",
  "key12": "2L8q2eoukTw3vGct6arH1atyKMnV5qBbUbcsm6JzmvLWkKA2wCYsHvpSF4eQ8r5BLK4NjxCT4baLUugK2pUZnEhJ",
  "key13": "3yJpyeEpvjJ8fb55C7WByVDT3DpaftYJhyj9xGefJJi84kK6MtVN4aLxvmh7rZARfkZ4Vy91Q6CfTHYgJnfgRYVV",
  "key14": "CamkPufHtSEdkWaL1QTjFNB1jKfUGtdFSmyHiz3PS4bTqn2cWXrcJ6jsWjzgoobFsrGPDqAnvW7bxPDZ8NZsDGv",
  "key15": "5NTk6D336Tf7eMgsM3DKXgTKd53E9iusMPaaunQ4BQ8UhrxgZ9FqPDVLN7jnyUPUKWGarzVUbfnPNs5nxpgyjwZS",
  "key16": "3ynLCzKkDpGkoAHMae9URgsj5yzbGimZYS3AEmfuqJjKu4sL5EDrPVzCCTRs7HZw1MmjcfAoZLgB1N25QYJw7WCL",
  "key17": "UX7yZLBLauEmZQBYZ2A893RJQu81vH1YVN2g9woy4xfaZvBbMC4ipzqXsWsKJhvciQgJV98mZugkf2ucuppSVX8",
  "key18": "3i4xoz1ajTUsquDREFZheyNT9oR32wLRrMr5AmdRowS7bHfA7eFTmSMHxN3J7QYiR47JyNmhxbQDZ85UkVwoGqVS",
  "key19": "2R4rAeGSYBKERiLs8nka71dwp8PQtCQpJgFXeoQAyQKqtaE6xkvZXZDmtp7e6iiD2zDNGoS2mJchRRuoLfTWH6qL",
  "key20": "2yFWA637dXz5cD25moNoFskQyY1xZxXa7fKvjaTksXpjYwuFun9cCUr89Cfr4scBTq9xaZv7EacCkE4qbGbJzYxC",
  "key21": "SDKtshbjfUEn4xYKZm76DX9drHsj7D5mpf2R33RJWZDUr7SAN48kskrK7enugEqKQzo3cJoQVqf6KZhGfvJg9fq",
  "key22": "Xr5HhnNSmbTZqz87DpxTYg4BChAeHpAz48s9eDi8e3pEJPE2AFqJC3N6vkySjMAuH4SYzzCsBn7Ai3cBtpSKGDU",
  "key23": "2FGai4gqATKicZfSbka3gccoSwnBYGgc3qVwzjmfsUrij21gckMVynvD7rLYkWCPSyPFn7D7jxK6pJ8fB3sTsQBh",
  "key24": "4X7c3GC227UDw4cXVPGwgpaWG9RZEahapiXf7hrLZJjRztN6mav4hbiyj9iiid5u1cTGh7u1d1bML7V2y5anKZtR",
  "key25": "M1fQQCwQTH1zfUYynfvyM3uiJ45Yjt9P35iPy1RGEGiQPeWJcohP8KDuR77LR2QZSpXjDXf1dJGrv5Rv3hU2H5T",
  "key26": "8QBpTunVprE8SjzbiuT9BZL2MEY9iGX46m95Eu2ud7QLN2tGb5JFSzEusk7jTPvZkBrPov8TMtDvYhGmwgfQnRG",
  "key27": "5KJkNv3V4wtpFUnL8NyYPkEKS1AQ2Bhf5wbc2CGRn43tvPMKFRh94miu2DikVPu8mLqMfu8A8obwmj8JsnvSDoXf",
  "key28": "3GNjgsC9wTDxB9R2szLuxZUD9aSK6qBRFvNCHHpEbLXCtYqf5GE3J9E4izaDAMKcWDAUqK4CYfbvxrECtfTUH17a",
  "key29": "5ZRc1gvodu8c6NKpmxWrMJ3wkYkBGcts5MtZr3HzquX4VmYBkuCABsUfrbAZrcFD56N8GNBraNn1Zvzpycdi5NN5",
  "key30": "2fE8uzn53NdHNUdJAKFHSZaBtWmZvGg3USkpWMEQ8ZSmTeeiKUqWmj7P8MvZXaNfKQta9WEWDKbnxp3hrqJUxxog",
  "key31": "43WN5UaiUeDeTF1dAPbCb1YE1uDom28ptX26XybXsuCJau4zza8GP2CFUhK7KbVBePLKgdiG6JY97Gb37zectE4W",
  "key32": "Lpznwaph9hMfmtxH2pteverEYU4Qfx4JxM11pDEeGyXK15JEMyo8enc6f9nWBL2E3Z6LY9eTt5UDdeuqM3ZJrFy",
  "key33": "5vmme8gBbTntBiwAF2bzZAvsXvBUdYijYiJeZQisMtkQPjq34YA1KuKB4p58n9f91AGntj9hxUEpTUhte5jssqjy",
  "key34": "4V4SWAmqDPkp985A4T79zA2zBSgV6G8Dpncg1NhCF17e8nVXJwsU92Jy2vdYM53xNFduS3Q5s8d6xM8qrmQtpVBy",
  "key35": "3q5Nu1CDm5wNjEKqQ8ndcKJBC8Ztap4ejXUUmB9CE5rkkK7nvQzSb13zs2vse5KwRQquuVQq5pFAqqtqMkSakuCt"
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

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
    "5zFyYzQRs8MPymFqyTaoaiFKqGDzVVpdiLWAMy5Q5HC2m7dLNu3y8cFiooXT2MV6w2rUL62p8kB1szR7K9WJR1WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PVieULtjuxWDsTJ8mzM9Y2WPeuHe26Hp6Fr94vMzV7edNmGqgVzUXHiPnc5RkyCBVkyPHm7JwHLq9eZZ1NQkocG",
  "key1": "3VQrBViwbd5stbp1nKT95eaHVTXTgr187stPwwDBcAx7iUATeMde3J7hrCEPaoE78Q44oq8wECicZmNN7q3BRoN5",
  "key2": "2J4rTufH39qJwdJZP1jvHFzmVzbCnegVm71ySmn5y6JvTCTE6C4YNzWo2V4Fuc8tiWCMsQAzNPsoXZ87xcXkL9F1",
  "key3": "5imQrS3kDsuEMtF3G8TBXpz8fxd3o1kF6mX1Fiz1kmydYfc99mGEsczaQSp8FcxRWYojbC84KPx3VL4LrPNZbBBw",
  "key4": "usSoVVucm1cE2g2XzpcKyNzn1fGyjRNsfkxoBZeem34bhjQw73SjpiEco3VMhLgewkkN5uHuXMoEe3vngKegeTP",
  "key5": "3HaUqsYTooTZoD4kSqZgV6DDzuVd4pux5gNt4mUudDeAovXvnor6v6V1zUCrVMg7N6Fn3GKrD5f7eB5a8m8y9kqX",
  "key6": "4RLA5Q7cG11jhxhCmqZnAzZy7pThadSBz3xbS3QAmBZ1MNqAbXHBDUvTZRC46V6ShFh1RXs4cee3zNoJdwJF5NaU",
  "key7": "3934zcNTptVAyWvKk9zEpmAAPkzV5h3SPKKyJksSh22iZyyLxUdMHciBReAVPUskk4RAKXXpJKVFDiMds1TEMLWn",
  "key8": "4z6Lyk6j2iXtfrnbRmudNVYiJphgJwzSKHqBVh4zj3PBEfCTCgzt2X4RLntiTMoukF8Udre1F2TYFyAqVbiAmdDL",
  "key9": "3JdSezBUdDRz2qGzc2qU7HFooBVkb2N2a1VaZnfhzksXpo1qqm8TWFaYBHbbAHJALms1TLjfft26edpfa5vjoAo2",
  "key10": "3Gmab6Ban7vA5htXpt4SNu5vFYg4zCQ5SGQuwkguhx2UaDhZAjeNH1zCDB45iY8oj2rgwZPA4tDGaCLKxaGCGxVn",
  "key11": "3pBvAhyJ9KBnaYmeTjnKiq9JT2KcSQwj82fWfWwgV1tT2aLiDCLRgtzfEUkURr9kXTthbUrqUEyBNwXzFbmerqGK",
  "key12": "4qouLojMTDZc1unziNRtVBLEyn1SY9hwyFmficNFL1xg9GvCScEyNaXpGRdmsHKqFWheQSHscTae63DaV1gRzXw1",
  "key13": "33yFfC5SNsFu9Lgxv3agT7QCVRw6WYeEECbKGEbABajzX1SgnFZbx2giDetc2M7pBHLC3ucbtn1XmaGGrweu7icL",
  "key14": "4gYuvczSz6wn3c2deurWkgnTzFfyEQ51Pd7zmcJqNZiU9uMKiJVyBtUCjydCyqyk9PPBSAuTPP9fLEZdKns5ze15",
  "key15": "3nPVQ2yLT7ArHAstZ3Vqb4UUUXEbjyTDN1rmvhXs7p9ypL3Kd7i27dM4UrSM4TnP3bxsNzKZ5nRpeotBvcMkCWVQ",
  "key16": "3reE1CvsP2REY8EPm5bdn5vjBNzJQcMSKEVjzgf8wKr5CN7UcqaxpBFm5C5etjLEXAaNKdpd7Zeu1Rz1X4LgVz3o",
  "key17": "5zM5hu7DSCXYdDMhW7PoQkpfM5rqDbGiHGVRqFYFycMJDriDCVu1ACDYWTQqHnpkY3HcNKGoZaU2AYv8EMLUtFJF",
  "key18": "5kmyxnE1pT1W9regLowvbfKXkDo8QYUd6MQGGrooqVAVdABvKVyPjFf7PQj8PTreg4AhqnjUiuXJ2oq6L6vfjsKE",
  "key19": "3X1Bg6kanUXGFTeMcJy68Rd7Tn2aSYV7XgsMzE3nEPLekPfmYL19L1fWXYH9B7RujwUKcSXnVeqafUYtPvF8khX7",
  "key20": "2MGKT8BTJVsLHPBNyBuH1JDZUojpm1Nr5aaThKNwn6NDZQWBgz8RH43cxSuktfNmeFfvuVPo9cfbvPQwsdDhxL9r",
  "key21": "BwLmMKuWQV6Tzpx3pLgdjnVCZS9DvGMxAHGrTQLuRUfwiJDcS6dBpYz8wYU1w6mpxKQCpPS4xWnmcnGjtztb1hz",
  "key22": "2ABKQbmpxTUduHzPutDvcWo3S2G9todYC2FGR7tsWVCa3rpVe8X94rfmodDabL2TpgGt5VkV8XEBdLQcVcQyqYNd",
  "key23": "47HowJ5A6jHvmfPXbw3Z91C1HFrc3Hic9UiF6wpFaaidVunMucMwmFLQe8pF67ho7WH7hCRb1XdfHRbV9tpCYQ3Q",
  "key24": "3YyjsXXoaXFqgZuSvMZ6BDuFjBahAnt7N6WSCyBjEqxbeJeqEPPzx9fkuCwo9X6FFTbQnbf8K2Gp8uRcGEh2cERm",
  "key25": "2ejwRbYagxw1ZGwKSuZYMnF7VdpCqzk5YSGC1RKbiN5A8ixa7aNGEqa5hjVKHgYVPPsofB9kRLHQEFdQZp4wX6fM",
  "key26": "4XoEZQe9FY14o3pT2BAL9kKb94iiSKveH1Vqf7cXyuRdzzX8HSmkoE7qs8noaZjEYfTZLSkQC4nZBWZ7bezGxauZ",
  "key27": "4KACeoBKF6k34TgDTbziYVFnUpy7xhmb4V7eLo8JvHd3yo4LCa1xzqqQVF6Z67yZFahMRgmPEnV7qurKR354Xq3F",
  "key28": "41nqXhmoqKkexmedzcJwQVXAjskNCvgnKdU7MKYP4wRipJJQJ2PBFcX5uSnKQeoeqA1PQFuQ8Zohe2sXwUeJGXd4",
  "key29": "2qUCS5HbYTw9dsRxLEyy6rCxjdw9cjKZWHesz3a3qESMHQSeEqWDQWZgEzfsDkDdWhvqeQ5fPP6WH6pu81cDjJsw",
  "key30": "xP3nVKrdSZseFcEyJKHLEiFuiVkpoq4yQGBANhk4jMZbsk8ZLsPfbsMmHixnqpg1W8xGeHWsBTjhTo4ZVAbSwvQ",
  "key31": "4yCNPRE9DMGV6DuzeHNAECEbteyJXy2TumAi7K3rLAb5N92w8eQK4wTuEtRoQRLekNRCnxS7QpKy4wNbFhXSfMQR",
  "key32": "261rd6QGfjFHWetrTEZbTAcbZ2TzZJ3CjQ3hPzkQNGAyCeDiQkYEJmjfTUuddqYfWktTqGyntuX7pp3Mh6cVunqP",
  "key33": "3hw9RNtB567DxpMjpb3mx1JtWSNQRfY3Z2mJK6i47n12bmSK2KoDoE5rt6x1dVP2aT4YsPz3KbzRF6NVtebMPdyR",
  "key34": "iKHs6xUvaiJRDCgDkzogF8bzKgfuigZgR9ZL5AD6U5J6uoyZ5kDShAUvGxDeGom4gSC9LNnLhfoWSUCpuQNGHsy",
  "key35": "5JtynBerjQGB9CiCMwoeQdCavcXkoBt7Wxfsxyp2BT9wMXyjaztr8QZ1U27anGcwRvYiemqDysS2TJv3QXEPAhQT"
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

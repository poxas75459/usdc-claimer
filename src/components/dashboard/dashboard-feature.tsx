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
    "tku4JjoazHH94SvPzWoXtpXGTmb6qzizzwZSnahsfjQWbZ96M7b5BQBo6DSAfVEe9DbT6aDb7pP4XifdMBp49j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqSHM11zGs5FJ4AJwZfduZLzCowyjJuysPAfu5oQqrPQJGrfhVKyCL4EYSYTEZrqDkd9BfXS4mkF9ikMMBnXDum",
  "key1": "2q28zd4Qv6YcnSQW2BFTxN5Z4XyiPsTxGkG84yaCieApAUqJ7LbXAQghcswWQqYHg1UMrp2a2iEf1itTapoUZoXQ",
  "key2": "5TVBSS8jK8P3Bctr9KZLyur7F3T1fpNH2hZJnFpuVh9zorT5Tb5hGhpbejPxSdc1wC2ttzLcGD23s21YhXdJeY4h",
  "key3": "2vdpSHM5nkSnr5Rfx1bJVAYJkvDgeUpDTsvZ9qpYKxSLNBHz6u4CiRTcFemWZbDuHT1FUHkBuxYZCxYWXyMtmgT6",
  "key4": "4tLqTLZMvSwxAVU1aerNUGz2fb1Ls1K6yn4Mru8wBGmVCGAFKFHGBCYZk8ageRfuEN8AKnBzLwpuniujzHUBnVMK",
  "key5": "2Fi5niokr4WLd4HKiN95QegfhXp7UAFSvokY7LfZfKyLRrywy2yVRrRkPHHfEmzsrFLs7d2Hh32RDB3KwaYUNmkM",
  "key6": "5sTj2BPY4SykFCW5izsULrdz1HGnV5kYu9rfwEdfQWBBtDMRamzDzWzYd77qu54rbrdwup8t8KJjNYZ7wgEkxgES",
  "key7": "5tNW9ibhCwc5WfcsUrWgoE1afxnmbM7aTX4TVHXShQTTJU2AmPKbYhwuEh7ij3PbGiCev1hDEs4RHEeerZi4w6dH",
  "key8": "352XnGJSuYCendoWaM6or3w4MLaZ4oFohRcv88PXTwnzh5RDD6mHTRs1bHrNdGsZXsHWkFDLpCnqdWrHmWQeHDkX",
  "key9": "25e4wrD96mNkBA6Kca8KDzJWs1b5DuRpyzgx8S9Nmt7s3XzoZPyBj24zAN4GSMjeo7PgjMLkoAgX9VQn4dyievBL",
  "key10": "2oFm9Aqj5nRKADFgPadM8NQsihTD3US5wyEsfEQG1gzs9T9wWRt2R6Mg4sUFVniZbSFXddnjqzngx2jwegAFAw7",
  "key11": "32JdQDgi24ADKGhdnUCbNiJMQH7HLmbJRdhHzkBWkZQyYpteZVGgLm1wTp2s84sm5PHziP69EiumXjFuUFuW9yPN",
  "key12": "3HEqf38JSnZaHo1aM5v4zxvsyrawYHHsCosxL4JwowHBDXuGXjNqZMP8yGxnnQN5GkkfdAv833oTGNDpd8tqgNa7",
  "key13": "3obCpju91W14FyLwGgt2JZvxvSyZG2Meb1VxttypJvkvjULee6q8ac5cn12yUMGKAenfWT7JA6BccM4o6jn8cT7q",
  "key14": "5uG312CxRU6bjDzwNAeTqV4YzR42Hroc8tkYvFWMtK4eHML8QAsVnthPrmfcZFh2ZTUSLGMiyZ5YiZE4jrE6gNfH",
  "key15": "5gc5ztE84RDDuwu47XWQ9eAVp3dMHEhU7cW9kDd8oFDmxAmBNEfCvZmemBE3RhasMnkjdfvTgH3QGYwzq8d4YD1n",
  "key16": "5TNGUBY1mb6JwMqj7xaFXDFPaQNyJJMNZ4WE5k9rrYmKGL9URJBmsa3ECTKSEdVSGGdsuRVRT6U3W3ud94LmRX68",
  "key17": "2oQUwEJEaJrVnXv5oKZrKELdsH9MjCTXJNXmeScYR6VB8tzXCULgyrETZWiiK8Gy8q2iSq9MQpRe9G23pCraVCe9",
  "key18": "2hJogCzRZRKHa1igJbS7PVFqKz86AT7wfbRekZv67yio1chzzStWSRcTCBr3RNTUKBZNNaaTEagsfQ65p3yNPAnM",
  "key19": "61TVUc3wDvwZbFmufjoAjPxvBjvVeiX82v7pfDRk2zgLjgySV33KNFTGteo1F6oM8SGe58x134Juc7gBCJJKBw1W",
  "key20": "2zkaeXECxWdY8Kefw8f5sEmuvXZjuvinjLA7BJEeoSwE3A9sEQ63AvNuSSb7NZmSNJxHeqWL8jqN4P1VZcABdWpt",
  "key21": "5D7ydKLviHYk8ZSGxLKheDNpfMRsXCM5Tg7SjUBFMnDmddzFpK1HM7yvzxMnN6VqbZZYQFFvRvZ9raoC31h98Bry",
  "key22": "5c3pBwXMH3rpbVMfSDVCK1LoWaUa4fw7GFuQHrMg2bWLyVWKYu6XxrCeLjaLXZ4Bk3i2xcdKcmcaHnCBenxw3QjJ",
  "key23": "GArJzG3V9pU5YfwEQQ4irYJu9cyxJm85fVht3hiQ1dBJ6ACxkWpuvcR7kWxZq2HiRFhwxxweog1iWaZLNnBbjUv",
  "key24": "5rwnRtpMtfoHAeRQhMUQpUo2oyGuEDiYY1oM1Q1fjA65bmiA9ZFER87CBd2ake2VE6cpqiMP6PnDEQdWRnmQvVHs",
  "key25": "3Rs4pk4jeA3PGhj4tHXDuaohJVp3tkMuCq3WV7SKENTCw5gNtiQrJryr8XZvwm59gfzfD4wjZV4CVfjC7HLSvPY1",
  "key26": "3V5rzMhyEXKwf2vDuihKCcn6HtnQEuj5xuS9EsHh5nrERgEVbP1dMfCiRmDj9KTJgfSwd5NeaFFBtDsaUJu5cteG",
  "key27": "4cpjpvkmxCejAaAZbLfpQRGpJXksSYD8ymW3i8B9KmNNtUhLbtW1YuDS5DwwxnSgNPZkwpwmnWH4SVuvdQXPkaw6",
  "key28": "54hfDJrtrLZYXSrunRMQL2j96z2FAs7fAfhTDgmZPXRm6oMKT9J1EgAxqT7cSVwKDw2tRyBtVMNeWMM685vT7rrM",
  "key29": "Av3ytdDUKS4qa6G5cZb3cALMGha1Ar5nC5nDo2SpP2Mtbm3tFTuUokXjFs86XibskamyhK57MdHVUK81w4nwoEB",
  "key30": "5hujkiewqBJsdAoZzntxfPLMiUWbBSfkoTXE86EE5CfMbtLm1MB4C9EnWHwezrhTvH3ajPZdkYiGtSPARGni726C",
  "key31": "3ZojhWj8gBvpBzMCyEWFpqKXQ2SK9CkxqyRiVViXPFfZvA87M6FimS5fHeYX6iNJVAYr4YqaTMFEaamJGePhZGA6",
  "key32": "3xYd8Xt6CDtrRdzpNNWcrRdh32Wrv3Vadb8FHYJGJaqa7TVrZh7tdCgHJy8xq1eJeWC9YAmDWHfCxhF88wcqkre6",
  "key33": "2mAPwWY823cVC8AucuRbeeiWYrXVLbGZbukGnC6eBChU1vyc9RN9XEsypihtdxy5rnc6HkvJdhR5TmCNBNxWr6xT",
  "key34": "2LHxzPz8QuJKKXPhcPrCn7SpEVxMpqLMytF9sXG7QyR28EZu4MpetiVwS9gMpQn2fK8JQ8pJkxPNd6sYSASsxNsf",
  "key35": "3W9LqGiqHGDMYyNZdFFDSRuWJfudf1iDV3wfXAAJU9jvniazdxjadpn5jYRh8mSR8ueVciLwXNmHw9JZukYnDFLh",
  "key36": "59uYctpfZG6io1JLBVDNrzSEC92vnuUws8Qz434uyJQcvwthRqZ8Vj4RgG3bPoWBBu5tfKqA9JdF98Ws6GJ9q4si",
  "key37": "4cLSUHhZ4r1rjLUBKFPNLwp6XziBpeS5B7UnDbf1BUxHBc65b6LfLnPkDjtvvpzdge8nbVe14GTQMDe84oTh3yP4",
  "key38": "5kTKA4NV4p68YpgcNQS6pgtAAkoLbxFPHaLMPt485AryDqsd9vGLRu19iGUGZYLMvtrbzrqWpksdn8Jw8mv9SVW5",
  "key39": "2ezgSdWtxz8wonaNxhA3w3VfF2GFHNUBk5CsqXGvRjFPhHUgDHfaDAJ1VVkEuxj9Jm4dt9r62Z2khPiVhmh7Efrm",
  "key40": "2txRQjWyWYY3ibtCapvaNenLAbwxT6ePRk9ShzNRRFpNZ2AA9eBVSvPQ2fLuGA26Ht5EFQJYV1o2wY9ZEaAP7bdF",
  "key41": "5WbSTB4swRTMB2fGyHgu6JoJPD3j4zdBciTR7FsFZ1bxUoin3bT55H46c7TybtPqQadD7sD8GE9VV68uFXw6AMAt"
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

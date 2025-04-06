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
    "4XMrX2mzyTwodEUWoM71AZVArCvKN6vBDgELxAgeY95N7uypXfHv7LhyVZbkMyhFU6fviWri99XbzYbGTqEMNsQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysfjuWswXZctJnZZvVoinCyAMV2ZkihyasPxX4xbt75y6zKRAPupNhxocz15sMHSdjqyoh29AiMGiHd2n4w5nTF",
  "key1": "65KcCLnUK4Yfkv3h2Prc91zPQxSWEiv2jqwBNGtsnFEeTZu4UGhyEcWSmbgfPBvt5whWvksMXxej1FaVQ6858aCA",
  "key2": "5rH2dwXBAtqH4aWfqZJCvbsP1T5zuvTSckL2HkQGaiNNgn4AUf8qvxShRbseaxM9sdPsnjumaYJmsHMksuasZoZG",
  "key3": "3pCjqbee96AyD8E4E6iDuUphsSKG9zZJL3qYHmdpC7XgxZtCqaGhjE9eK4RJtWJTg4BkvQuRNBM8cTzkBSFcSGy7",
  "key4": "3526NiqMkbpzbKnZN3KsL7uKts2yixLAiWYunCAKBCRruGdJsRKkfTuPus9BWAvuA3BKFuiFSYXp7vnHfEZZpjUx",
  "key5": "5Dk7JuZEGxrvyyuCscMumPJ1ZFpPhzw2sxXJnkvJistmd5x93w92iRDwufNxVsAPjyUHe1kwSbKPThmcZ2kztKL6",
  "key6": "4EnLBa5BiWe4FKWnvyExsMdU4naRZSr2daAYpQosmpxbpYrUeVfz54F1gP6VtaMfP3RMGSxaJAMA5vL9Ukq1vpTe",
  "key7": "2Abbqn6qHuxbCr97KT9V49hmtMtfeMbo3opB9TZoKPaLmaPJh62ZU6RtENH3zcbst3c9pKqFPzysh6wiG7SaJR91",
  "key8": "5NE3nuNcSWii2er17NLwkyy6V3snBcd9B7dCJHbBJPQCE3YMnqtTVZJPjscenPDdFrE6oY7bpdEiAEeqBwiMqqR9",
  "key9": "nWCsyZm9Cz3Qo4JeMcpumcNmibe4noqwg1p4fDpSJKGz5HrbdQQkqGaBGfBfc4m3ahcff5EB8HhQbJ2GDT1TQPF",
  "key10": "2q2AdQL8RwGgtYvpckhCZKkmsC9AFSFJWkYzXEgoQinoH8caDZnBxsMZULZtA1HbAw8FWiF3qHKGSeR2q6wWjzGg",
  "key11": "3Ldt5epS4L4Y7ZxL993KX3j19BNhuc8NfyKkrL8EyDRJqrkKHHJJTRNz9Pf3cxAZbXQbDRJxubvFgRWYKeaaA7vA",
  "key12": "3o2C7SL7oCWyWN3oADrkYLN6B5fhPqdP6euL2mK7bEQtHhowc8e8VdougcuJQstXehxWarVnmW6NBGoDDm9Svz1k",
  "key13": "hbfc18WUff3n6ncnX5qy7e9GmVZSvgXtkXv6qHVRYdhW6U2Dc5q8SQzQccm5DGL1CMQt6gRK7dFoMDczrFyrafz",
  "key14": "37N5PChSH8kqxoNcXgarFGmrYAgneGQe4MYjvyDjmyoFnJAR4WB6BPfLY51xdxLGEWqh8Qv7sVZ9qxGAAUXcTA5C",
  "key15": "3J9Dp6uW1ARXn65nUr8gYTWdWioZ5RXWdrCDXEC2wJhFhqxyRqTmA28HBXSs28Y75p6qP6c8Y7GVfqh3qGefT47R",
  "key16": "2VYEQjeYph1HNQnv9gxrvHRTQCRSE6A5cotWouHpQugSCZ2ZDYESwgTExnd1Ud94J1wmzpsaJtrQHd6U5DXwkgwE",
  "key17": "2XBs1MVAwaQndrBDwpQAS1A5gkqKiUmcwWgM6RzSYPywRRUyjWQsbW5WiLNnjcBeA2FNqN1rqDbwhvPKRD3BEGp8",
  "key18": "2RAKGttQCb8tyQAzfYPcGjNhpViKVv9n4yJdbHT5r2CbnHW9tw3vEpMt77GsLGymoUuCinafJJoWJLfzji6EgfQu",
  "key19": "QoS7zT4eGfeCNer79S5ezW8A9o1cKXDkL2xAwKaLHqZFYn864VSyTZaY45AqRDXJ2z8fnzKQatcxAL7cFDKzQVp",
  "key20": "5YvyrBCK7MHrjMP5LQLpqjavXT4KB7eJXwJSFVfFdaJW8BJjsLoSD4sp95A543gATaoZrFtbAFrsEG7CLhTMsmAM",
  "key21": "3PYChUrtBFaSZMiqdW9uRHX1xAxmjkLoC2Ku7DqfUbxssTofmZHn4aV1cjpvybSuJtW1TeFk3CCW844fwKfVpXXT",
  "key22": "3N9SQift7ccAd4ZjmXY2H7BQXfKr94ayWc5E84EZhUNCRTNw1n7XANExWGYERpKEJeWfLgFsAR3TfFVPABVnT1nK",
  "key23": "4i7o5R62Ga4XHC6bZpSkebJYZqrWwAr1FgkosCQc7yRmJp2cdrxs3A1hqhzfKmkD5c775TwYDPHadtYdExuEmuEW",
  "key24": "3fKJ5Ua5ZuCPVPJKftnhdCdHrtYh4h8B7Spf6o7o9wbHFSCs4AnB1DVo8JV7AdCiYdKW3A4CTcuzANUkpu24q31N",
  "key25": "2jkb3aezqTN4G3y1jR5oRd99kqbVSbaVvi6beUhq9CjPQM55upP84y7yX29x16sXiPqZ5Qp8b29PeskiUWLexnym",
  "key26": "5ev9DPrqhF5pdQHLADrhau5UVhvzqLHShezBnZkniVeFYCYsxW1tbDEB7fRsJnQe3nA49AzXCRsuA3gC5TBw3FaJ",
  "key27": "48y3JsiZPBfVGYvmbnTwiyrQTz6itXbGvuo93LaT3FttGnoeLRSGrCEppvLzFsg4D4mCbsGKbLnsFNLgMcWrzAb3",
  "key28": "4GKAaMijoMH9vETnvQhwnPCKT4ArYxh2fzWAwyve5vgCdq9cxkw7GYau2bkYU4iantPrTLEUTdY3iMA32j695zWh",
  "key29": "5GvW6z5ZFm4fqfhtFMmRZsBehr6VnbVZjjfv9PdX9APYsMTgKFZCfnRcK1MyM7tkdhozq5Y4vuzt2gV6aTLTMU2q",
  "key30": "3QRrG2RrHHaJGNYDhqSzAZc2vwCV1eponEAKyvmBZdx2gHn6RHRPmRcXHhXuCWHfkD2xrnmv9wkXmS5S1gpzUgdV",
  "key31": "2aw4VA6iwuxXx1BYYaKXANLDQuDpVRsKbBfwRbATCnnv3w6Sa9b6bN9jF98dyrjk9sawQMA4FMz6uBodpkTBKyB2",
  "key32": "5JikPfwg7X7PbEY4XqWspcACju7Tk914x79ZnW7AXKNDyM6zP4XCq6i9Qv9jLq6DbpT6WTpDnfLMvtdcrb3xWnt3",
  "key33": "3rVMQYR4i1SA1iXUBUhEf9Xn2XhFPExrKMngorgkJhiZWzi2aRa68JLcZthtYV6YdeFQVL1HMefgYi2b4cyX7CVH",
  "key34": "FmAs2qfW4yk4b7Dx3ScXgqvQwAD9XHqwY3M1kxJnRkBnp1tjPAuLTfSnWiGPbkfzD8oxSP7E6qpPZut3oJG2zvr",
  "key35": "49KwWRfskQw6NjuJ4Z7U4tUyAFjNgp1bbtWD398aBaTZ34ekuznGTCsG5nrc73G4YiCWUqSXjYTqWWTiyQrq2NcU",
  "key36": "3zEAqGz9DQBvEpVYfH5zBih9Av2FRsK5Ker4RAbnFywn9wgUQnr7AC93a2pWdhUcCMQ63PW9NdYtUPYSqSfko48J",
  "key37": "31QRwC4md6XE2PEDL4ShRnFBVnqfPK2pv7GftuCH3688ZDCznKT6K7pG8HctsGaRfza4D9fiAYWtGUnsApyrHifi",
  "key38": "5uvgHpA7QRRbpZF6R4ngYV81gPnrbGCubH6AEcXUTdaAnoJ7wgATJYUysWrHf6YW4mTxZG77mCuQJQiBEq5yyxb7",
  "key39": "25wVTcHpDMjYVRk6nnzzbvnqYWHefz74z5gvfvHcnJsFH25mcgTMJYeFdkXxUSvgaUv9DfaMeGrFevusb4QVEKGD",
  "key40": "65RK455oDmtzwwrHWeydFFJRDRYYvWBN32QZKwgp4eQSmt2WKGkqTGDZFkk4uXCG6oAsttX3T4hFKwr4gRfS6Msm",
  "key41": "3jfYKGSBqJ1ZGf9e2vxic1eBdmZYPX6D1rb3MKkpekZqPPA1VzgQZ18a4jyTZxzkDDm4eLVXoRvv2b5EvVBKuiBJ",
  "key42": "3Bo4mF3EBQJ5oHKgj51igQCqEhr97HYWzsauXr3UYh32o2pyTcNvSZp5GLxC2EuoBaGTCoKB3NoqrinmCfWvsgQg",
  "key43": "2sRecPYRCMM7RFsWFg5xHo3sjkaacV6h5USKcfgR8DMPkf2CDWC8tBKakZSJcdZm5F6W1dZMEBEaernkwdgj1fby",
  "key44": "4kPGdGTQG61kTeGGdjyRbPV7ZnNvRqmT7vUr3BdUgan3Q8RQqBdpEj1pEXPwY4ugcr6PpBWfMhMSXwdNN1U2j2Wi",
  "key45": "W4vNCwz3hSrhbmGvyRpqLuEE7tRyG3jxecHemFFVnqzEu1wedZomcn5EGhy9hzyegFPibRHPYRVxwHJnhsxVydz"
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

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
    "3ruHuv9cbkJCtUgmAAMZu7K4RcQiPQzscN5USaQbGWZ35Qc2qn98macHFgstMsfxRn2M4T2LdHD7muMi9r7PgtsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592T8CJuLN6oRCitGA756z9F3xFHF8hQwNtgQ1GCBpmTGvYGhkxkN3fDjt3wJW9PK3SNfLHerMrn53p6feP6Mg7o",
  "key1": "62VizDUy9h4S7vhkwCjBx6md283GdTfFUfBEo2GUjG6gST8SaWTcroXtFH1RC6eBsNAm4vtCf7VRsyBAkcRo12Qz",
  "key2": "4jqBNRwTVxNhMoTUm5kCHNyTubPFbgLdkLhwcC4aZZ2axxqi53a4ed5vdwn5DdECLUWBLN1cyUsCo1MviRssUFbv",
  "key3": "4mkCe7gcQrHsc3LGCx7zmssHyTGuSAyZZTw71hmyapRU4UDqcqUtijZDkTYhYFAH1gKg5wvQuynkfGEmmbU5dALa",
  "key4": "3ECUKw8MH2WATBBijbvHTCmYXYPgjJGs8XhBhR5LNJDJXKfJZUZfTives6drb6otVAbdd4CMuvH5QvcLTFapSKwL",
  "key5": "5AWCDMN8aKQHBRaaqSVge5pHFTKDG5eoVxSkAiFaGGsWyth2gxisjdWg6aq8Nrf7revkQXZd3GYDWpHFe4nQyZD5",
  "key6": "5uensRStTfagc3G9EyeJ32RXsTWU5e1xheDSD9ZQ8B4xttECgWqxUyqzRCfBNG9i52wYd7av1EukmD7t1Hq3VPgE",
  "key7": "4cBLaChLZD5H9Uo82ye27mubiw4fNxEK1uuwSroQ5xsoh6DCs7Krhxoo4BSxqBcAfgevtfNTEQaTkTu6WopLLwDP",
  "key8": "5yVUgYu3GY5g8ekP9pCJ322pZSeyrCuWBLXbCP8NqQyJ2i3qqYKcAkXdA7Zzz85ub2in133XQxuQvDAkmC8FaxKp",
  "key9": "27fTizuvZwvY2VKjRCJqNrMg3jbKAQSkQvkrQmf49issmQkA75rPVMrD8QsZtHoJhGQidD2v5rmXTPGf4RFUG93b",
  "key10": "MP4JqcB9G64X522XuoqM2pPmjsYhGwLvA33Zk8utbNDDzVzPMw3qdkAmhueMLnkaamfxFWq8dtWVr7iW7PhsanG",
  "key11": "3iyWWzmNkcggamhbG8qMHT3nB19cSMkSEnG5pi1grVCkZ9SoVQSaJGUwckL9en58E1CsbCaaiNBnnSFGwFbd7zh7",
  "key12": "3ihH7dHBYT93AFHdUd58534DSsHHtpRHA6m44UnL3pE3pQDJQqYGJJrC9X4B4nDC53vUT6Ynxb4zu6TkYuW59hR8",
  "key13": "4aenbEAfpHdcqV1Mdq9ucSv4xmVEz4gSJWWSt4CJbKXqrFQQkHMSMHxTG8MwbrJLrg5C7mkozoW6mRoxHJuBxYVS",
  "key14": "5Pusfmp1Y5y4CfCLEXAG6SZYMPqopzEDovfhSmdhiYu4ANNxyKhvYD5RaqhXcbLtYQXtVuiTLYauYjtC1erw3jGV",
  "key15": "2KvBfUjWroB8XiN8MxuZbEWvWk8HoXw78Qacv1ePHmuTGjdLsmypffHZ4vWSWg5btEmqTy543FFAyub3T3rb6Q99",
  "key16": "2KxXRcaaitWJnFAYBTophT8KAbYFQzmvit5RN6BTKpY5x8ewEBkZFSdW4hMThow7ZPx9M9Kts6mVHPFwNkiL7QqQ",
  "key17": "24EQ7imiNLP5aPLh5Z2b3om1UnEwubYrQnJGo2DPZ378XWyHcfZTPqv8VXVvp3s1bUaa2LPYKVsbsBQfAdSjGN4a",
  "key18": "2mqzrYb1ggZ5LrPt7mhP7PNbUwPEv6TgA2qLEhbkbqsSyFTLaUv8xyfpEhMfYeC4dDmEhCK9caEMK1wrpsvFyfBB",
  "key19": "2QvNaK7ZTpPZVVqTVrui6PAwZggAVTLUmaE2RfnwC8SkCuwgooq2tJV3AmpkKas9YDmYJWF3KyEzyCfrrB3esrFC",
  "key20": "5o2vRvut7NQYUQyHxRbGHjRBckb3Zq9MRob3js8znvGVbNZUVf3CmWXmoUjd9Sopg5Ntukme6p5so3sqLiWkZWMp",
  "key21": "3YhqFaX8ikVBz3XJHSs6C3thKcrCPgvJmUVd2bHMuZ23a9vmXtrZJtwTxgNCBRXxgfR6NxDsWXwJNnfegwe5jPq",
  "key22": "36aJHaxcQG59KBq7XVzyGNZMMTiGEZAf9JtPQPDTWiPdFU7UuWtgCa7gteqt8Tz4ujwUEjhc3FyzwNm9sWo8GvNM",
  "key23": "3Xep5GM7yX9H4unBW1u78JPqAmoQGmeFqHyWTtT7wBnhwiTsw5HrHQCUVX2rgM4V2ahL9WEnAbnhc2jcYBbT5KMb",
  "key24": "5ksCxPBuoP8F2MbctjFawePbAGZr748jhM7wiZ4fQwEjjVuLsVEHKNMCNbhUG9hq3wyH9sCNJBonLLoug5Vs35W6",
  "key25": "4BvdGicJrRqvhQiRnNejRHVeGwsQDvYfCM6MJKs7Cw3bP3s15BeiU2v4vZ3treuwfd28LeCjAR13eHBeSMU8sfKd",
  "key26": "5Q4WFtg7FPs6wBX3WmmLbPZv2sCf8wgbefU4XxusgNjctCCmKDNajEnmELejhgaQDS2iqrQgH4byuUcB1r3XpXSk",
  "key27": "4eK8H4BfwVKjU89QRi45UFMH8QvskgW7V4a3qtEbkptKZ1wMTHxk411n3K4qGKW9dUmftofV7tiStgvN2MjjgAcp",
  "key28": "3z2SXJdMrsokMYQjiPDwwej3jTZQQ8zWxCTh5Zqnjoixwed93uaareAMx6hdWyCzWEkihnrH32ubKHGcEFgErGeg",
  "key29": "5eQucjVscTf2iQCbyDDjisD2ksG7KXWDNBJGjPa9M3TK4fNw28h4gZ2TwRSkcrirW2ooq7Nds5H8tpiFVVm2mrkH",
  "key30": "W4ogFvtdgptufQD4VM68Enurvha5FmGM4snSbLiEF3gwBbZdyvgLGHTKbcgN8GzBepE8VMFufPDdbwCouPrYozS",
  "key31": "45Uy89mZU4JMv4gsD5i6fwhGs2cceYoK3o4kPkxPia5nZW32A7BzKhvrEBJ5qk8fSQ6FgEHR6CZM2pu8KcTefQVH",
  "key32": "5rpSW6C37eTDnad9NyMimFnGXi5gS5Q699AWSDXoxBdDH8bqZfJFPbXX8Jqs6Jyph2xequnVLi5y8K4rJtykPWvT",
  "key33": "2odS4uk5EQCuu3oJNu7t1Wckmhkj7e19kktp1LCRTsbyggRpwkS7QRznETXW3k9bTXeGvkcS6VtziSuAEghyNnie",
  "key34": "4ufMSGFkQhjcpxW87wTwMpbc6jdUsaK4hrfP1bPUviC1yxcDk7dqS1wMYdy37TD6aavCbSnvGtsM6R4jsjwdgBRM",
  "key35": "DTmZ8Fg7NXEF2C4HQ3X2eNzPK5gY9eToKhL95ck7tLW2MbXc8JhFwuhbXRidmB4ipA1YXMizpkrLiYc6FFnmkqH",
  "key36": "3WZ1rzPhJHJAqKwhgsRnbu6Ws2Mi1uwHa7wYAdJ7NNSzE81HvQC7rBLWSDBaVgXBi1AUah2eVmb3wTy3rVhcqbX8",
  "key37": "5cbMhWwr4unFJGWRF8woEj45nWcyAnjFSHJt61qNwp5RUVANBKhL5R8C1HGU3mcAMa4cN4BuCW9XVAhzeieNgLTY",
  "key38": "CdahwS8E6EWsCB3cEzEbedewTDNrV1ccuRcnjeBrTWCpc4X7qvopVSuuwAzndfgYoscSX31Us6nbmf3oiQEhCKW",
  "key39": "2exTFag8TuDvNL6wLvND7q1dAUirySB7JDjMnz3gB6REp6YjwXEFGbkUEGJJSxw8Ak4rtH5MB5PrW4eiSUm5H5R7",
  "key40": "3MVRsSp3hnGGe3GcFgoUR3hf7C4TkzabmXcQRqfYBM3jb92WDdnfjScu3pSBbTebzefxykiopDMb9AoeT9Vvqhv2",
  "key41": "5gh4UbFrFnRTTig1qJszcvX6zNQ9CrGRssBAWsV1x47whVWZXDBy9w1bbq94yNJ9wvmmNkSYjFmxCFdv8JmcQgtA",
  "key42": "8ZrZp1HaKJWaWZBj7LHDSPwPzwiSsP77VXQq9gxFozxnj3dCAphUmHcS1bFNp6KHEmzsnQ5fDhTTCozYnTpakmw",
  "key43": "S1x3XFe5BJtZpwVGExVm9BcsHVvA5YAsxdFF6akRXtWQT62Hnu135ZkUbRQJ74RKVDdqtNjHbWxegrUisCHrfmk"
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

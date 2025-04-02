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
    "3TiBrxo1NnmiAQgFTedFFosTNqpgMFepExn1YsX7zK6mEBCf8mdiVPK7iY4SWP7qsqgBbvG37NEg4TSGDuvAYkcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQ3aJUgkcQnUKMwJDEST4cWhQKfy3RMgnqwYLWrd4gSpWCSA1xmZ9UDBrMBf9h2huNwouszA6Bo7och9ujHJwgr",
  "key1": "48eYhukMyG9n57DrXeTMSuMWd2E92HNZ7twq4rJmphfX9mC9WqpsehRRQ1LrDKVo5a67bK3gy7hLSCNVooM9owp4",
  "key2": "4XhBgXbo4pjgkHmUh2PRygHZCtqoZ5CqzrLCd2CTTdKW7t3KcMX8bWMtmGvVZjtPbwuiJNrEaF6j6EpNbvZMcd7n",
  "key3": "5Yft8inJscevxMQagCVgTr1NzLYZpzeV1WfQsfXSBbyF1MmgG5y8wiZTAXWr5LXufnm3tXBxTpka3xkoHM2EAhKZ",
  "key4": "cBwToWvHor7ibBJgMofvz62LtcAHm97Jg6a18kWBWKsnee1Dou136Z3gNgYzNGEj7xzhSZ9eAUtQSxckCTivV3n",
  "key5": "4vX6tTykspaf2He8xAKnUkuFuEhhfnU1HWGD4h7cH7QZziHh9ivsVwueJ4R9AbmG8e8yNKZ6SvMwoqHJ4QpBMT33",
  "key6": "zpEyhYy4R2tykLrMuSyv6LVaRA8An1StCRMCRS56bkZnaJUW3cYiStBV6JGnXy3iPSAAEKbRLwUmztrz9ADhqjM",
  "key7": "3vsDim62hGgjEihkGPjiExvSGj6xN4ASPa6Wkt9XNmaGYPB2AiarG5JTST9d2fj68ya5MSXwueaG77X3PRKWyi7E",
  "key8": "4z3C2YbHcttjYVnciXNybwKo14yw5vSENpXewP2vkt68cwTbfEbKkUz4bRJLW2n2doB5CTNFcpnrLm9v8Kd6pSLn",
  "key9": "37whEeGwpphE8WhiqWFWHis1Fcf1PdL76ydVM3dykusBUiuZq2zzgcRUYBsbPsqdaGR3aT16TfPUTE7i34QMXULu",
  "key10": "4yGW9SgsGPKxw5h1FmUHZGNvqLCUu1r3RSiMunoeezbPWD8rjeLYgPqTbmGV85KzjodDnr7gCDrYm9WkhL1ego7M",
  "key11": "5aQMZSWuFspTAceETZR9SzeFKNdx7Axr2E3mV7VmtwDFLT1nm4nELmaAdo7esHyrnrJw3W5Yjg2tCQPJM61AeoaZ",
  "key12": "4uVpkMGJ7vtPfkTHifrd7fCcDkpbJM2vmevdjpDCdPmvBLybwXMvujyQGTqAjFmGh6TcRiSQ6cGcZJ4XTzwJqoRF",
  "key13": "5sJK3Rtrsp5j7RTBbx5QM2YdPVKfDLQgUpv6jaGRgCdK2Pe4TRdL2kz3P8w59AgmSM8BeQBt8b8WBbjiLbf64UeM",
  "key14": "1q6djDi36u33v35kRJMdBD1Apt82UnVjtcQ2P7PDFm3mFXqPpYSrns1fZWe7RMucf2CrUNh1kV8kp1WkQzvCDYM",
  "key15": "2XEwkjnEeDu8qZyZKwAK5feRxtRwQWJNZjuhV7Bx1F4yW4mb9QUu21f5boNvnrWUHUTQ9CPeWsAZkdeYhjT5t1Rq",
  "key16": "4F6TUfmU6DbaybVyBP1A8JaBLB3Sy5XWYNzv1FtQpLZ7h2GUnv18iU2vLtP1jQUmfcMgipQkkKv9JqmmnK2Ttzsp",
  "key17": "62gAwYeuSQNQjSkfy7vHeisuixGf2GTyUnegAv71kaZs3iYPtEc7dDYr9wEdskTR3Nud3jdLVztaZmnA1CkSSd5T",
  "key18": "3hHzYnyRhnYqLLK8iHs6WvQarfNLBrs8VUgLKEcKb1gyxw3pAKcgG9v7bhEDSYJD6uQN89r3NHfithh4rsH2XZN4",
  "key19": "3q6fy2zTjbihXaqLYV7BU77cYueThyJiXWqdXDDjXYVQvPw85L8oe5eYRa4YiYXbhkd9KfGYnuXafLCUQmdZGWfH",
  "key20": "49mRqE3GstWF8XYmGDBuvW9qyJv1UyxBDZeB5vpx66jJiEvJEtGAsNrHMPFYFA272ii5NNKTUi4vFu7MayWi4rfH",
  "key21": "47Vb2HpG5iLy9decvggofRE6P7DkHoVkh598ygjo3dhWHuZqwe5Q9LhAkSDpLyWXPetEyDRSLiBvEzkJMERNws38",
  "key22": "3oRcLRKWrmNoyR3LRGiZXkea4hcc4jc4VHzgxqMvkbxB4hDMsRubrgPbvtyctwphSNJzkbuXNzbcSt8QN1V2v5jQ",
  "key23": "fnLB6bm19DAqWy3wGGwTQe4kzuXt3BNenhEphBkqm2D2dfjpuW8UgRLmf99yhaZJkurbLJ1psSZqHxFxvw3egCD",
  "key24": "4bWePHxiFr3yUbzxGRBCYRQjZHC7qwSacfX5TrHFUntr7auHZV4r4tPWex9VbGPLwqwZoFnDkwJigdXsaW1JsJjQ",
  "key25": "5eiTXxy32QBywprWjXoepUaypEuCbvppcUnhqmKy2vqsqyRNtfcdikhXBsGmsDppk7BCLzxhp2Px2nBD387qN4ZP",
  "key26": "rYeUQzH5nHgjogRdicXRjkgqAb3mrxsr4kAvpFVLurDZH9N6aACxqeoZJxwKgA6G6JjVcFUGxydGBL4WwSr4wpL",
  "key27": "3WHDKNwHkW76RjcJGMFbw2RKXD8Ygr16Uu31goUdp7MLkJw3fseSnyTov6fSTQfmBDRJMK6LLu4D2Wcfajyk6Rfk",
  "key28": "3Lhqd75u41fB7pycJ7ixaQdoiC9esQkTtMDmpNbFvEYwzoSkWmiJ6fH6NXgikzn2D3iewEYQBjHuRGEgXgzsvDv3",
  "key29": "4ou4jhxwib2o3GRATGPwDpHvkkJToJzfMMhDkTS9R7RQb7efEVK2NAk29MgyqYP3GEgMweqiej5XJVf1rJfAK4TB",
  "key30": "352vrjp2ebak5j9RNooh8hxP79TPmpQNHyHyETJS34cyAPHAwR2RbrHxQAGqDgMPEPqhnVDsqs7aPt8khp8RdbY",
  "key31": "3ePxay51H587ehemVtJk9XKetDwGaD9RZEk6pR5s7qrGiiaE88j4TtU5fknfBeSTcn8XewwLeGhCAh9PHmXA7EnY",
  "key32": "7wfz6WueYZujLMKanCeAdeEk74KeuBZx4Lwm2randZB6fsUtsYHQv7Pv2dSRzctRrwWwDP6jKfnT5zyXwCNThut",
  "key33": "4mqWWRCJvU8Knd2qR7D23y6sJ27EVFkFtCVuPq1BTGV3cA6tDiDnhoDTmyy1j4SxLQ59C6yzS8TbCFUAP4dEwwr4",
  "key34": "kjJr5xynuyCr31TL5JZdr5DKCiRqoFz89KhQBaSVYEHNuAjWAf26ZFHiLHNTPo9gjfjgyLu32TP8GqgwyVdjFy4",
  "key35": "3uc4CKXrkQqZkxPTx1PND6UakPEVcS828PNvXj9xG4QGHDTYP4zt4edFzkd9k4oppfXRGMCJbSkqkcFAqBTt6xaQ"
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

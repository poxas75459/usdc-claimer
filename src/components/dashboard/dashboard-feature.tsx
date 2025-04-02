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
    "4zxkufRzRHBRYwLqb2JJTxPv9omcq9q8e5c1CJnNcNspyKJvh8GZJgcn7hY3CHfbp82cr4QktCLUHUyzagVPkthz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657v6CxunCb251AENqAfXGLYaDn6eNXfNHYcZH5EVMeYF3KTvPSdgFXhojg4abk4G8UPGN5q2rAAzD5ze9ppmygk",
  "key1": "ZMBL9bFQaX6MSZ41GRq7fRDVHDUzftwt39QgyEkXkFKeqMGok8hh1QsJdMFBPq6oy6LxqmhD9bZPvzw1fJ7XsPR",
  "key2": "5VKEXV7fTL9yJvJ3sgtUXGhmMfY1kcjqvESDnd58eqSapXQwHsPxn7MUV4HTBhGXfkFmSbrnTRxEZjYqQx1YcKqg",
  "key3": "51KjugnCknqGq8CBE3CkH4gNdBrcxjZ3LqnaF6d3ZnP57EsUBLttRprdzbEUkqnSUCX9kNqm4RY8BeRmsGxcCcfs",
  "key4": "WZy597j6B59VT3jqc4sqiWKeGuve9AQrLP8fdP8ZVQK8DbgiuhC3MgUopwfSqXaAtkUud86xBmusA2X7CJLccif",
  "key5": "5D8hZFbwVP382T8QY5rM7yt3HZToxFF71MLNmwrA2RUh1YWMYD7Frr4GC1EWuktJRnByBTi212sWrEr1Lu6RGqem",
  "key6": "2YLLZ64j9Rh2dHTktPZGsjXKh693hXaPiQkT92PrbirhVuMAKz9PubJ1ZU6HkiL2PthY43638EVR5WqomzrRHXaa",
  "key7": "4yKaBPyuxKF4CuDkP13Yo3kzjSzvhqXGy1UsqRyHV9HYTfR7mop3pAPte15HGbwf9isDTVM92pJYumscbto8Sni6",
  "key8": "4GDsaiwDNppTqmRNHprhD5AC9LWDCr7EuDKyDe5gG1QmG8Ymn5pr5vBGHoUsFsCXC7cZ3TZVC9PWavJmqEdGendv",
  "key9": "5Am2FGjXes8YVoWhSPmp6xgBvbeGSDwDTs9TjTHNcvYPhDDgSxoZ3KK3qcR9aqUnKxsmixpGvehCvanjisXH19wj",
  "key10": "3E9MbwMitit5rS2CzpLBwtZnCKbiLsgw7onyAA43bWVJimjPsKvddH91eb1SSsCeepybvwZ8wCNmXWmb2e1K5F6f",
  "key11": "2ZknRFtU7HUrCNGKvaBsx5Kda7ykEfj7oNpcy4UFT4LHb4NAoKTptgxhTF6rF3Ssenh62biQCz4cXw2jGLjfP6gn",
  "key12": "2P5DL628LJbRxhLXJZrG9rangm4ysWqAQQFB7DFFdgjDSC2NuFixcPSLaY5Jh87nfQq8rqX3DqXH9Hp6SdDViJib",
  "key13": "2fUHVUdyebAducgV7sWS6RG4zEvUvCbjvEFwuwiozC6T9XbudKUAQK4Scj3zEo6eYVrqNAqNm5kLzatRgPAdyPtM",
  "key14": "tuhkLVQ62wauFA9oxuvmqEBMxQLMngbWXdBfjYNFxB7kPi5jynZKtSt1giFvN2vGtabtpRvNGXWpz9izv14UgsQ",
  "key15": "wRY8vqT5fFiyanEYxAKrTDQZR7XgC57CkZ2MvRg5k6FxJPj6PMDaWGv5vhgtiVqPkgXu5U6wZfzy4BcELmL4YJm",
  "key16": "5U41D6Vhax8fbJmcjPgnQ8vx7enkt2RcfoT4FYbvwqoJdj8MQAqLi4AahXFJz4GH15m63FCLmEv8PLrKTqwDEf9C",
  "key17": "3Jp82Wr5n2eS4WcM1YbjdzoYivXwQxxVXCuPFxxRTr5nCPHNWNSqKDcLwR3n4bsZCh6nWySgffA43GRWrFowHyQa",
  "key18": "2M5yZzeBQ5ZkVkWBLsgzZDixaPq1eK2HeR9ziYksh8VB4ynbEUSRVkHdEDDd4FQyu72gFG7jb9JmLoUbBLcNsdN8",
  "key19": "4JCF8sMMbdefyEhzESryJtz5hihSm24DSG4auN2aisshJJx1EttJowhFtkeZ5nGobR9fdF9sktqQJKJVSMCpFkwN",
  "key20": "3sWDL7AcRTSvrxwiRZDCz43VDUxsRd7pfJ8vLqgmSf13yMqXwbggrcSenabi5UxTNunZpxg4bTMcS97w217p9HiE",
  "key21": "28KhtMtoUaHahW746YN9rez7bigKCWFWm9Bhier8LxD5SNoxiMFqwFz2pu6jLDCTTRzFdsGpg6JwY6Moy2wfni7Y",
  "key22": "63hQx4RAPVx7a6AXqL86mMAamcYCGqz1khtCBfLLWrf6pTXhEts43rkMJgS88hfqLDEi7kokq6gA5DJSuZAz9r26",
  "key23": "1Q1CHdjVMHRmGiJdL2jHfpfXq7HWe2fNpZJRC3mXUC4SzCJyWkqqosascztxf6NDUwN4qUfc54MAoXDLpbj3a8b",
  "key24": "5Lsk6Wf7vS12jQQinzZD7Y66wjp6a3v1gxcJsWpGCrDisMRVyU384VhbwK1rXmqYLQuKzfj6jV5BkYY5VojnVQSM",
  "key25": "3BbrGy5KpAh84G4ZE7VU3e8njrQaVVSMB1epAyvi79BxTpFDv1wTrGEwWtvWAghfhPkiiBjSaivWaLkdcpqd1R3U",
  "key26": "4qajysqMfqCPXqLf2to5VXPNf8gGiyAHQTJyRMkhpr3yj4fo74VoijnFXP4t5a9Y6oBA7MnddDzysoiXtEQEKNxW",
  "key27": "dM259aGHLyvh9j8gtCYLk7iaWYQFESJ3N51uLw2Gr3QR1LieZHNwAPiLscMgMp58o8mJqjcqZvWsVGuo49DSp79",
  "key28": "5zjfGVyxcdU43eC654fuXLsHphgYVwhJXHz8aUkmwMVtKs4ZLpdHq6HBpzffyGi96iANpk71y8yBTjKRhewbfS2W",
  "key29": "3aptGPkmXrtinxCJr1xxuaR9kXzhSXB3kyHJS3V3VxynW5ZcZPKGedbizZ84yTV3z9SAuEmHD4rSuLo8v7dbAfin",
  "key30": "2ipuiqb1pcRyZYMmDiabvTkg6zASBPNsw7FECEbXNv2e46J1eeQRFsvqeDC1oJcutxU2AG6sESfSwobdtwXurUU5",
  "key31": "4kSZVcf2JXyKn9m5NUmoPcQcULxwh8deRLwb9WsC28VjNNe9HQumujzqcTiZa7hSfYwpRbm1RXZTsPyGMourkRFE",
  "key32": "ryXpbbq5SFF9ZgcATtE4Jo3kUR4nhfN6TW1MhkJZHdBp7ncedKy7m7joP6LnKmRuMmv1T2w3UvtYcBHU1Qvx9jv",
  "key33": "ysGRsNo9Ks71ppUSUSVt7XpU4buZG68rwfVDdYbqJfecwhpQmwPJwfB8fBkCTn7Uyko7HRfFV3iyX7mzd7g9RLE",
  "key34": "4atQ7YwxnUi7eNSwf4SonN5HqqGimFeukTigT7FRMBdTu281jhfE9Dm8ET3iHDMPmyAM9tYg5HHHBHTr9dwGVnhm",
  "key35": "joiyvjMEjqzc3zt4PmVhkf6g3dwi4rZoYeCJb122RnyAsb74pemp5Fqj1X65rpK92AqHMxUaJDBKqkzdGC5Aiqs",
  "key36": "4teb7DcfQ5Phjb7aik5zAB3Q2d9P9LEMh9t3jkGEA8gTQpQiM523mXzF6iN5qJPeB1ePNXrWvrRoY1h4YdaW7bUx",
  "key37": "zDFGzVhs4dyXW7DgsLbsdDALTpzoVhZHe2kdzBn56GKvZdQnCh4ec1H23YQyQLnZdSj53n2cZLRdxZeMvquyoBk",
  "key38": "3KFxEfASdSxajcWX23H7TgmnjqP59FTuLPSyYWLFHDpmhWuDoH17UokDvLWpWy9HV5nfyfXV9xrXruYjYujnt2ah",
  "key39": "2dRaxcUFovA6jmXeTFZ6cXUVXaxb7EH2WhVwUBmVwUKpCWyXhzvWWi9oUv8Zdacw36nBKj5mGnLvDDDk4qiCYKUr",
  "key40": "3djKN4AN7PUcjC9vu5PUkBKeR7YTYY9YYaeT8fZgWDQVUHiZUhfm6U2ZuJ3GrPTp1H6F7rwK4F9asZDNoukfErau",
  "key41": "2N9ZFL7hQ2xuEapRzRHkjaiAWjvDb66LXmQJC3jmE4qMKekoNP73KapG7TH7u8orXKzm5GVCUN6PuTU3CqaKnqzH",
  "key42": "2QpRHiiNjrPpwu5CyUGakqX2X78Pc16K1vZi4fKBkPzRgqCCV195nqH8WnX5np2ksXMmcZ12Xrwytk1f3oq7eA2D",
  "key43": "56ZT8LEtggYZPJv2T1Tc5uPJBF7TpsrQ9eBSxrVLotgFCCPvHmpT79ZryqfUMsKkcaafRy8tcjWx44g44b1r1oaC",
  "key44": "yHV2BgtKqRS2MqvX2F7zpKUj59BDJpfDzyLTwZ5usb7jYRAGUbyyE2nSFtf411zTnBLzrreiFy5bh1r5gAWAp4m",
  "key45": "4wRRsgd2hDJfw8jR85qXL4qiQax47a6S6mqEebbwBX5m81xAfUjqzULLZVdkBhQ1zm72UfjvZpgXPcB765Kaw9og",
  "key46": "2rxG6Yuwog2C6yiN4nDJQRBsRmUyMKokrTsR1UkxW2mLagCAQFWNAcrYBdJqqhnniQp1rZQVEXXykpZGQfyytskB",
  "key47": "aYR2YwvTC2YLUPXT5FzXRLqswDWqd1bwUkeWPd7uWNMTYo5QUXbTVAeqVDVgwwEm4qFEsbFY1ooEHD8byWpE9Ch"
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

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
    "5DsrwsBDrPSQbavdnBXi4vxgbV53Z2QxynXRW8gP9pyX4e8Rr57nSsqvMfYVzqsqyjzZ76y3Faf65unbR852wqNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pc95QUf2niz1uVQ7C8Y9sfFZhP3gNd2hMghVYxRMymfe8ASN4rC1dXcsiGVG9G5X1A1fko6ZPYXHf83edmh9k4c",
  "key1": "4xmrgFNqnaAthFjJSzrvcAb4ryChGvsrusadK9pibShu16UQazQrzR9oWyR8DuW7H7XNF7ENjoZx8t7kQ3RZHWWx",
  "key2": "5ng5ZBLgFF6F6x1T2P8qgcnYDm8JvRLdva7tbjqjXanhjim7EvWs9tWSC2KcDYiRuREQ89W3nJo6fDh4AB78Xum6",
  "key3": "3gqAx2XCh3KPih4Fevg6nD3ykCc6UHYuTkJS82mXxuqyMJUuCPGiDxh1PtQ31kYwPjmGA8WSi6YwBYvGyG8nuLUJ",
  "key4": "2fQicmpa4GPGjo1F6PLEyAyukDfvRUPAQNwtGbsjiiUx63EbtnB9bcjteHioHTPui6cafCxLisQMsmGTJvTQBLkB",
  "key5": "4HEaJiEXUwtb7CCDFTRUYyUKqcrPtEGXYcZWGRct4dpGbVarpvX2AknHRTdp8Y4iFDRG2ak9yE8DshNYW4PH74Kd",
  "key6": "4Kf7en1jptoGdNStXQ1RrPpCdBdZcmt6mzGH7ntMtFJMknKNDrRDdjVrKtR1UqL7kvp1v6CKdeE9hJhmuyoCYcZV",
  "key7": "3st5ERMC5nuzTDWCjKkTB6JZWh1bjMuBDXXEDj7q1KoMKP3o64eorL7k1btdLxJmav3RBmkEn8Kbn8QbZCbTLiGz",
  "key8": "4rG3tASPbusJtXz4kM51UPL6fTRjzwt8rDCGvg9tfRKJDqxbWaTXVQ1FNDwNVV1o8428N4oiHGA43ty8hkSttV5S",
  "key9": "2SQ4qNyjaYS1pGHkiipE2pyZWMSDYUZDa6NmrR9d5D67xUmMv4K1M8YEx6xq9GY6QYsfLxuwvt6dLhR78w4pzkw6",
  "key10": "5smkDh44TnVEJbpKzczSiGu68zjpM6RrTsJ7d8hAhTc9Ri2CVTVWCPtZV6Ck5CgY7qymVMzUnRTohEzkFLQxawB5",
  "key11": "67gAkeuXuRhfhL5g15tuFv4n47WJpaD7Jq1DvhahLEVe6QWhTCXznHBFT2oZRanuofJXHBdMDGTEfVobjq85ZeZx",
  "key12": "3jzoJQRPSKp5xCJc94CTuYstx3fXqNbAqyBFsVrnorB8266sG287wBQUSsn7RxnwgBv2e49HVVPXgowH5PBNWL3T",
  "key13": "4pfCNhoVMN9oCwS5hYPbnwJKYU3d1upr4wiPf8VCee5oPu57vymZ4U43CdSejJvRpBNUwk5e5PxvyS9RgubeWM3m",
  "key14": "5sRjwivFYXrTUKLm8iw4wm4juEnVcFTfiVjfyLw88VqunUQRAiAvm7z5LSK4QNEpt8YMdEw7R3Y7qqZoR9BA2xLS",
  "key15": "5dkjTbdz9WwKKjKXXimmEcbxsJ7rY3FHdQmoEGMdQWDcRXRVuFxybVXKvcqbwttRmtLQrF3NMSVKMA4CBJq1mcd3",
  "key16": "ZRtXza1D6pWtCA6FiXT5arix8b7spiA2AMdyuskW7nrTsm4Js8GbxQ5f4bfBrYuAqiXyGTnMcKHnAxnu8oxfm4G",
  "key17": "5SFtrWBbzMTSjE5FLxEJBFZWVTxvf9s6vHLpb3odY9QFPffUf4cT2LqyB67HsxSYvWoNmtofQD92LpPZ6PyLCti9",
  "key18": "6653CFZ3RT7auBDDtBv4NUdzUmy6wfPv2ajzskvED3M5KDVT1kxQZ7RnD5u8umdRtCN1omWdjbgw7nW4bj5tm8sP",
  "key19": "5Fz3sNEqourJqZmjJxZJ1mpgqPGm7toWKy83hGiTT7FfeAEaXoPTprzPSKH9eMhMJ3yMpWb86fTeWg4rgRBHQ4KX",
  "key20": "3uRgWMZZvtoEQ3sMku2KYReMqUMHXAqPAXT9trHMkCCFeCJeAZqmnfjjc2WqeD2B96yB27BG3fW34L2EVENX7r6a",
  "key21": "2aHk46zzp2B7M9oCXpcwC3UQSuuB1XiVcfNtZhet3xU7Tu59ZiAR9BgCGQjAQz12TghSP3BqSaCtxg8YiYRqx1wD",
  "key22": "tfqtoHfxL6nUq7H53uDPGBKudEzFsUUsPEUTUFqR3xVHvXC4cp1BNLP5BYREpVWQjTVdSenYhRFyWE2GerfSJv8",
  "key23": "3Yz2P94VuxW8iSU6LS9RRUhisFyZ82gCaSByJuf475RCdSv7sfDXKEPDgTdRFWgESUVZZgXDtQULCVHrV8i62pbh",
  "key24": "4iYsaVJhjWsctLqPah4K3uJRhzjqcrB5La27zWoek5egrLZCifVdZKLK63JREoMDhdQ87CUaNPZMRaScUef84orK",
  "key25": "5NdaeUS61dHeYuWEcyPERK1mYSFSKDyo1Jfz6ceZk9Mpyfw8xQRyNbLV95v9cTJbehMjmJsWdXH9sWNW1uzK1Wxr",
  "key26": "3b67UwsaWYQanBqaxZTs6r1mMWToak6boHqYr6TYTKqnCzHYneThH32uJsm1PifHTnN5WM3MjPuUKdmGK4Es2ayU",
  "key27": "55SH48S1BBVQGV8Rr3rxeB9b5MuJUQdhN2U9sgt2S46vgEsiLYc6D22mFknCnaSHs1x68qJvhoG3jdR7GMSVKeTM",
  "key28": "49cuVa847YMSo2eX2zT7a6agde5JKjcL7uvZgmtm9p6GfWRDTiH1VNTuLczfvF5oTZWgfckDJHXUnb4PyBnEfmz4",
  "key29": "25Mjhn6vBSnryPiDQF3GNcBsBuKGpdS7r5MQMqgZwrR37qCJkMyB13JMH4MVHvErS7reVkSp7ee4jq1iVwopsqn4",
  "key30": "5xTYGd3mTU5VcnuHyQpgDF1VG3S1neroomhwZ5LXMpjvFvQ33Z6gY66QbLLkz3kBgpy2ojx4EbBcRWRc4YE9oQ47",
  "key31": "5VsuufekArbEPYN6yjs9owkUGWLccvwNwbEDHmVT8GdBU9R63diHsFWmpZMiaSN7MhaXEWjrGwNapKjPY5E9Zdxs",
  "key32": "5xBmcFMVhaeuX6xxDiWr8euVtm9WA5MgowLN5tFM8yCgyK9PStASjeKmyz8Bs3U24FiJsoqM6uvD4c8QFdrusMbW",
  "key33": "2WTx7316qUEB8puc3D3hDvfG6gs84FgbyXUnS6Esag1CXweCzSdv7yTquBuZ11LY14CuwrYxwMg5348CpgHQzPmS",
  "key34": "3Mwjg2pjHHNLT4oVZvd18yPi7iRaWoxeDgvrsKxxip3NSec9dLVjwNgPDWG3dLNAjDNHb4ReeQsjgEDvzXXCkpDW",
  "key35": "3niWh1gbgK2PxTXugJbrxwoF33jFpQ6nRXdByLhztUDrs6AQ6g3mAUqbzASdV8AbCnqnSKANvMy3EmjfZszhyWJ7",
  "key36": "59DuNRHXmA34iLKxt9V9ofKe4EJwcrNLz5mWE5aZuSZxqgbXnAK94fx4H6qfAXdzkMW6ZRuatkWeqXD3RrsbCAK9",
  "key37": "3MrgUUZE1u8gfcqNE8WxL9nEdVq3mWNZLJyqosLgCEBneHpkFG65tCb9L4ewxX1m8nN5amrFEeL48YxPL4YxySMM",
  "key38": "5jsmWuQYiRa4iNt3dttTLgHiZqzH35AiJHpjqxDaWJFjCTEZkFhrQASe5yLLGwLTEqYFFRXSdRX6EGQQB4wVSbJG",
  "key39": "3Db8HpVedgbZpZNTZrTiMynd9kTFGifjMUgjg2DpaJmyRmkXaH2Pn1Hrnvs3Z6y51kxqc5mL9AQrKbTQ8dcX7Eq8",
  "key40": "2J8j6CPYhNEQnuzQ4UrgkH3oyKmuPGaMpGFeRBSQRZxvf2b2FbVRNfEA3fF1h4mBFnaw6sAqjqeiUJGm2ePBJ7jT",
  "key41": "1ydswdi6esMcUf2EyXfn2bTY5NtuCtY4Fxxh3tcJCk7J35byUUHktjijRiHKeHTKfGHZwV4BSYCFC18TSQdphZf",
  "key42": "4C4s84Nt59satcJiJimuT3JkSTX4V8yQxP2kFubqWvLLjR7ZxS5brgYANhKmgDDekmNCT1oBMto2jT2Bh36Q6N1K"
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

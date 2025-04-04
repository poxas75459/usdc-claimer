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
    "PaWJoKJXDYTCbKyPwm95wTZxdaQAjucwLfd2Unp2qCGgRKRkXmLDn21Ji6TaCbEw2y2HhJXGSbwpwuZ5DECBo9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtxAr2Ckn3zC3jBH12QcYbWSTjFk6ZTaX4aa6AKUa8TXW18ugZiPwDQU4DyPvD9dbkotSQ8GZittVF77uV4YU7o",
  "key1": "5LUiCKRYDpcDDQANj6PpT9eP8DDeyWfvVPGzh148qkdiXNC5MzK7KR8aq7MKq79fxk1XZz69a2M9FA6Uyyt1xM4j",
  "key2": "3tHgYSrZBGPS2XusVtp6C3mZgGsdELBJb1ScCpvBtmrzh9Qjm18BW6wAHZ2zvHGHG4eoRsHheRBsvyTmgh1W8i38",
  "key3": "uNfbmYiwa1vQFRcMtHhBt2ZVpur1fdQ71cZhgq5hBsAZMFKGAkt31NKJL2sD4q8S1YnoqUhqx61evnJnWB6bwyi",
  "key4": "1jcBcny1W8fjkuRqmB5Q4MfKSPqJNSDg15UevquWTbyHDEeNY3As9cGWmnf5XrVH44y3oQoLgnSAR3rLvSqtXsq",
  "key5": "2qWdZ2pDUj2UGps3xv2U6SWV3TrCySPRuL81SZhFdJ9kh7jeQA5SKhFhu6Gxg2M5VeKDtkEEbqPLXekVL4BwX14B",
  "key6": "3TY2CKkwXX7wcVh4WyicjwRUVCeyf55E1F2tRN7dLBbVsExjDiunz3jgrmTKmKgQ7o2kNzrAGhwsJoorxMdcaADK",
  "key7": "4nG2KHkewQ9RXskoKWynR1KhSG9PoDUkhESG1qjFUffJ6rHsh8UYdf6U3MALiEdDiVd4FuNqGvmsTtoHwePRZiFw",
  "key8": "3F6G2R4VHLU4Nq2hpGkUs91iAr7yhh4RTF8Eo4hhBP6op4sRLMoijqELNs5rKLCW6wQkBXb89JNYgLcChmHW8fix",
  "key9": "472QPvLn1JwgZfySXpibpLE5DARawouBnRo64qnVd7vBpjCgJ8ppWgmwmLX1axRDGkQTLgGBjRkdvXLCS5U9HD8Y",
  "key10": "5hLZwSUbNFYeP8CwE1cQMZCjhCinCGsBqem2rxGRBEjhc4w4vNrqVyQdZJ35kKpAGsFBrRp8Hxoc8dtB8XTq4SXc",
  "key11": "2xEKAeF4YHvbNZmZe2nkrT1qz1DiDMP2w4XQKtDD6cBRC3J14whvq4K3wykv511b5ntx7PVUAC6ixGwL3cZhh1ZK",
  "key12": "5JaLBCTMNGVudj7NR2as91Lcqp3zLgfHFN3j2XdvpdEohAQLo9werE2qxqVETRTqFfGQaQANGkP1ERE6TbQQqbBE",
  "key13": "5EDP5hbpN49gPfAEEdASX4r7w8XyoXntwpkZt6wxeoJxeXwNtog4VT8m4UqUa8uyJfYP4mibdMSMJWDcWzwzKofu",
  "key14": "327VCe52g72o8GN9mxCLRbcsrehsTGb5fDLtwg8NVGGA8pF2WJJg8kqpJ7Enmdhieh7qxAUMS5rE6AEV1yaCXiPp",
  "key15": "2SJP8Zmtc3k3Jcw2MqHWHVBZi3Ys2Nb3J192dMumvAomJRnUp6JkejVjbzwFpnhuWXdJe7c6vVPx1unv6aVvC9J5",
  "key16": "5iCqySX3U2eH5Tegh12NfXxjHbPoZEBtUnn27ZhshebyToeHK4R6WXQ72GA9By3EF8LgtipRQxmyyMaUmVDgecoj",
  "key17": "4ZrmK38qiVbQi5GuUZasLmZmrqX3u7Necw1LMMc2pAf3w2NMz78n8JwrjmKw9prAwiekVktjjrJoGw7CGs2k2TjH",
  "key18": "4BWpND4WhvqcsMwLN4tuTdm2doKRvsKgyf28TruUN6Da4yoGVdjBjaEjVXRHvMmfZyUtstB1z5kH6CHfar9oqW6N",
  "key19": "4z4v9AjAqPey9dJijqVava7BsoBcHoayLbVQxDBpDpkX2g61KwvygTmhKEhYvCy1wWnzWtthVgnKd1Da7wCTE838",
  "key20": "42sCaTGLE7sZ7tfw4Rmzoo8KnrEbNFD1SrmLXbtfP6aBNbMfwxZRMkgiyF65cC391bzM33d4W2aJP5hT6jTrtU8S",
  "key21": "59TkymzcBicAkVSToPXiXkRorzVhgVs1FoGu8imb7WsC92cw9ZHuMLNX2wuVBnYEpESpWbqwyD784A1d3VbFp5F3",
  "key22": "2K6zq9NSMm9djGXYCqGdrbxMpkizCWmowEoBUJ1mxiGKnJT6ZGKTTZzqAHTARdc6QuSQPTc6fRGxCLmqqBjkWSZH",
  "key23": "5PXEYGkT74PjRJ7ZFVTZJYJT19exf9qXnQz44GxMj8HTWj9eNWViXZitbgo8K9D7QHdeQSs6fZyyrtXDateWM8w",
  "key24": "65eQgTGW94LGr9zmVC3oKu4yvc8QC6Ts8VYjgVLpwWH2DrGdgN3EhFMQBKiWNZxzJZEALDjWx2Vvn9SRwpsendZv",
  "key25": "mk7kXDgEuMw1Jk158hXQBDP5YG2Z7HUT1LasbEtSFhNq7EtNyyVNRzsqfUEqKMbp9DjPnB42YWeq8UAsNe9TDoJ",
  "key26": "5uuiHna29Nmzr7zyr9UGyKPwGWbThJGLUaNGacDPZJPR6Ux1w9v4yd65S9Xi4juXFmNEDfSKW9xnVVFYzF643NUo",
  "key27": "2zQv2uoa9pgoVH8fQpQbNZ5q2rxM89tD4Dkpk583Pv6ZN9iHWyTnwCydQnypTQyx8SZHqAECZA4aCx41g3VWLLS",
  "key28": "YJobXapavVeir4sScvARp6asaMUzAgvuZLRwXkxQfW69K5h2nrLV1jtRbRQdxq4ye31kcC3ELvBqmLHVcaNkv5p",
  "key29": "5QcHixU5ufnPVDy5SYc8wrGnHzxDSNVEb5FWNHuvZR2y1F8gqMmF3n2Uog1KBMbrCMgkLH2RM7tDnFuaag3t74D2",
  "key30": "5MpNrrtvBfHGjrD8ppj1B6N3Px3Bvr1KnKnLDBHqk6NrPMByviPd5TzuUfxF1JqqM8fH1bgecMcsLv4HqxsX4XnC",
  "key31": "3fYsFPN5bA5HSnz714WrXKJ9dF2iSJjRPW6ovVCJqB3JS6Zm4sXopzMCpwZ58qgrPsnAPJUr5Qq1CXzWdrDNPMML",
  "key32": "Tioc1NU4LbrpBFuAvdjxDSMVmU7BNaqnsV6rZKr4aH8JuXsEWF73MVVGUNRWytCw1Hn3ZrC3hrqpzsRuLyyDdKM",
  "key33": "4Z9jSGHY3LL9gzwzDjPSNAicsT24kTsNbSbiC84C7B1aWSHR4E2jNhmfTvESpyBsjyKpHPkyGxnAvKXcrBa8JMkD",
  "key34": "5KHuitGxa7XseMBRAzNtmfPfuJJA4JDARkhY48bjh4Dn9bdLXjykiG3KGj8CLcuJBNnZkX1VQdaAshvEsLwTeeTw"
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

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
    "4WTMNS3LvmJ5badUz72gdRtzP5J8KQDKFrd92VU7b4kqoe2fL9pmEGafBhqqnAouhcPBnadv9Be3domsdWGujk6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbKSZxJnup2g7HPcqyfQNbtprjVzi9yYiJKqHmMpnwmed57rxbKXFzY4qf2o1SrjMxXsHdkpnx5RnrWr9dVZbVS",
  "key1": "2eaZUEE6eiQFyt15aXAGNpmczccCTbJVQaWovyDbzfeJFstq2JDjaQzfwdrjokdYb8SuNDsL6c7ePBrhnyHbdo9f",
  "key2": "2nLs4681ziPwDXaxy8Md973frtAk3gU3w7XyruAFCJ3z6Hj1xvFBM7cLjxuwd12U7tnFusKhjS2Sr9uhZLD9WL8n",
  "key3": "3e4P2rWfkdNmVgYk2qA66yEhVi6vdePjz9QaFf4SY1jaLnPAkjbqp1FQdoJe8cDRJUVrj6keZXVoypuQ2EcRqTKu",
  "key4": "55zAzY3bZi31zDCBkX9BLQNoHcamWzLvWXcCPfwPD9UBfYLdxhcX3QeWeAqEoYkvbuUVAGbdTNAtM1UNHwUa8HHr",
  "key5": "23VayM5Q8E9REyBDLgJxfGBfMBQMMCy395ibDBJSKWRTyDdAwKboFw9KZXw3NKBjEPD6ArLF9ZxsgzHAFCggLaJx",
  "key6": "2gcr374Ee5wYobWiQqjEasWKuLtJ2VY113jebNUqUqzfjxGTAa8U6cCHX8aTtD5agNSe8FGYmWwpGMb6W7rQBNrE",
  "key7": "4tg58d3FgXL5G2zPv9z2QAjStpEKz2uypRoQTGrP7RGbFEN1butF8wSgUKP6vvPzZKqrU6dWHgWmbvbLaXyQMKPC",
  "key8": "31JWXhZJf5ASt7j3etpUcyLA8prVhCxggaPS3XK5w177qien153ux4ZtnjbYMgTuVx3ox37voS7Y3BGRSRRZ5Yqd",
  "key9": "ah1SMbQqV2xVBovjLJGtXWxv9cqMKxkpfpVgqe6fvtpkH5QLLY4MWSNm3XpDCWFZsFVct18jc4PoB8BApzLEYg9",
  "key10": "yC186U3kY8rrekpKHzAZknX24MVqGaxnzHEvPjrNLEk7FGd67b3hgq2XqtJMoZejhHJk6XGMccPgtjH1ANK53KG",
  "key11": "5wg2MFosmDUQ6PHL2W2utbuott9eAjAFyPQRcSHBvGEBFHqKpT36yNGapwnWvMTGunQ3ocYwsvw92EFkBtj59M1P",
  "key12": "4RttZypwjZn84XVmC432u15cCiQgsmXgC6si4yGEwUFPpmk4U9Mg8i7QYprfGfwUP76H6zdS9MbkMTRyAXkjB6Wu",
  "key13": "2ZeAdZkpcH7TRtfSU6EQdtStMK7Te212FxJb1gMZwfbzhi5bhdUk7LhS1nsDEx6cQESWs28JupL5EqhLr7DLHubz",
  "key14": "3PNRtpAeWSwWQyabo4Mz6v7Z9TRnUiFCLfuCgomzG829un1MQWbNRE9typMt3W2JBsGCwrKn3quyvxu2L2eCuQoJ",
  "key15": "2o4EtDTzxZNwKDSuEpAkfRR3GF64dEeVKqDwcFAKcm3tX4Cg73iNhdzM6uotYybvmY7dRBjGUwdMKMT34CQYb8CE",
  "key16": "387PrW6kwHVZJqHXCq8GW1HDdViSorihh5Z31RATikKTKHKNRm2XxxzQhK6FWwvYzVyActvUN9PByuE2qpz1WLhQ",
  "key17": "21bQJJR12fD5oTP6AMK7hJgu2tHgEePzEAa9hkFhdiwVCjR9h5iqtEccWvyehXdWVP8in2599of6UMEZk8DzhUXi",
  "key18": "QFkEMaSnexoZZtA8stYUom3Lo8tfZh1zx1fKt4kdZyukiz8fxjiABovgmSAYG67gHyXdvsazgkG6ivGGy25Bqs7",
  "key19": "61NimXdDwBTb8wmAcb88qjhgfQckLfDT5N6FSfzkvmMi353AkCpiCLUjtDAbgEx8q2NUnnZKkRYwU41PzWHT81ca",
  "key20": "35ZpTU1JAP3R8xAYwFiQkhQo55TXbHZEY2uj6Y1Kg8LgrFoU552ztywQra9qp8FGg2NS5bVfGsVETBs7fuKkVhQ3",
  "key21": "3py6KYB1SVMmT8LJRP7VWB2Xg4vPHqJ9V8aH3a4eVVrVP2arCaGrow3nJ3PVR755vccxAy4PCUJ7Uy1qU4wuD81n",
  "key22": "2wXi91NVLwspYfw3W3dLqWgGvEn6sscHzcyGLAqUSqPaoDMq18cNBMTeEp5W8MJnCbmuHZwhJ8ymJSiZHZAzyuVu",
  "key23": "28csQGC1x4UubB41cGcua6wTuGuR4m9agVxgsCs8KmkkZofhvbFr954JaQRwv1B28Fn8DowcmUFKcAHKMYhGGKwD",
  "key24": "2BLKpno3yAymq44VM7eqxoKLuYBXpWW3x9BG6qHagjQ166Bo8RMT1zgkPRtNuViwwo4yq5CMqnZGRkLD6tzWMSio",
  "key25": "2zKgWC1rfnZb72tM9RU7PoAhkeD7b2sGf5wPzWaG14S2CXzxkfqwjJhPbWw7Z72VCS3wfLmQpxWMYYP787RzbZF1",
  "key26": "4XwXfk6msfgTwPvh8yBfb3yqVUj1JsexndUR3jnJy1APWTjrtY9raovbU1d1Kk5Qef9rLP6JVqDzgqJ94Xfvvkfh",
  "key27": "36ae9SxFWpFnLnR98JwLDRHG3UNo612LosBgt9GPE5jkYUaNWpZSRNttpDYPm4L2ijLiC1drwpVfJRJpUZXf7FD2",
  "key28": "4R2tcMryYskhBPY5EdCXCBarG8MjoAhbxyiKKER6WxD56YgArdFbq81818icVQ1GJnvKHSop9nngNQqnYwZjPjrX",
  "key29": "3WfQkh8mTy96JJ1DJ6XCfuoJ1AmobvEPd9MxxMmDgdQe1BMzFHRRuJ8KsyvUKhTEKXumFAuHVCXockN8yRxJ5uwe",
  "key30": "38pMLiuShKmYijZZAWgHx1NAkzshZ8cHRUH8uir75bU4C5w8zNXx6pLxT5e4WuHpJ7hS8vBcbY9E3pSePnkt84Ni",
  "key31": "5NXFZsZTAotxJFwxRCZWz777JE41p3v3cLkfqUbrK3CvmKH7j1QrPva6jC4JTDBXuXe1zviYbqpUMm5oPNpxcpjY",
  "key32": "3pNjv5rTokQwaQBqVA154kNuXJEeQP2JL1mAPSC9fuvLcnEvZ3gv47GoUSk3gZqycxLX93uWZ7Z5fChv9XPCRPTQ",
  "key33": "4pSXpVcLDyazv2D1m1LxskAbohjx3YWKtQSN38Ndc8zcqnAyhC53vpr9JHVMHa9qAisqBUonvqvaYFXe26JYbzGn",
  "key34": "4wkLAKYFhNa4jUB4LGSDZN3ZVKia75CS2Stvxd41mNKDiRpkVtsmahjkfzzvHC1DdJMgfDAHZxhnLrASWKCW7nKa",
  "key35": "2R9K8VJAMDGc2ebRyVUPRyWBwNRMuzkMiuWmEnUsKvz2MvpYuVmaXCUiWEPQtC98j4v7GN38qoi2cHfPhRziNBtM",
  "key36": "23Q1MW4V9REusJMTQ4Qtn9yJ9kfYFWdTFxGesWx1kdndDt77pXUK58PLvnMiVEKhCTkjNr7hX3u8qBLxQpDQaPTF",
  "key37": "2zSRVbR2nbUkCXTU2tZH1wEJaMHktDdt5Vex32cxYmEqF9Bbj734ckqZEKGXBJHHKfaEUj8WDbpDYEhv1BZLzD1C",
  "key38": "3qwrzfSMRdsxLkQrCQsaskzGGudxErKN6WsY69mahurRCrkqSzWhYkJUFCLuB1HAc92RzMArRC7v5aeGkiQwSFLG",
  "key39": "48Pdi9ZanmL4io9oz24XnzPE1GUPP2EbyiyBCsyiT76oxV4zNt5bL9mUQCn6TK4KvabEGETyM5U4STbw3BwAQiWP",
  "key40": "4cio3rKjW112qikZhhPY9rE5vBXunGMhWFKHEDVK1PonogKtz1XxErNj7XGhvXVvYWNuDjSTN4fjCee7XVNbLVuu",
  "key41": "3A7DTzjb2iSmXjdQj7VNrZXdnSuGvXm1382HwniGPaLWK8CwnRdv2k1rayppE64fUsAsonTwodtikW7c8h6PuPoh",
  "key42": "5sWXxi6nZS3fsVpiWsWZGZDXpMvLwQKLvUiKQ5f7KX4ncu14WxUMWrJe54V3vKmo79V9Pc2ypjeUHgZXoi4XFALL",
  "key43": "2owWT4YWT81mamamabfZcnivqoNo2jjrvy4DizvemAw4E1ydWbZ9jZJp1gbWG1LwACrcgeaVxaQP6Qvw4x1MYmrH",
  "key44": "JAuJyUPMd9dgK6u8eZaYdZyXos9CQrDJEqudJePgJpLnjeZmVzCHwwqavXGHVo2vLBuwaoW7G8mwrY13GPSTixN",
  "key45": "4SysRS1NinBpLaw8SEDUeKpTdSwhsrneMbQ9HyUMeQnDyoSkiytPTbDn6tiWFxdYFSxv1GyLtR6FWX73rBVBhTFy",
  "key46": "5ZicCd5SMo77cq681dTGzUY4zMYypYYYsJPZNnicZPKC8tnHkz3mZsttyHPrhkWn7mC4QRGDeHxBwCE6co5E5vfQ",
  "key47": "2eBwh6QVzcc6Xh9vgGCjWcApTPrF57uYgcrzXUUbXq2fxktztwRm4dfBwZHrF6o92sDoMaT1HgqXiwfBdDbCkFsR",
  "key48": "5xpuAg5mjCServUNzkmaUmYz4gtTdW8d1Nwa4b7QaXeUF4Lid7JFuPNzXnwPAxDMxnkjcvhk3LbzfY5XYtGestcL"
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

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
    "5PmPWvFkmx3ZCPMfrCupvs2rGU32uKafiiZF1ZHeaYfVQfTvdK2BHEE4kwNLjUbgqNVPNrBk5RujHXCQQ2E4G7sy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dz5nUy1uaL8pzCPpvV4GQ6DN4FpFD76yo961Cxn6rvXz87eVmyqmeneFku15BLiZxpPynEaLkDL1D5aXnzdoRBS",
  "key1": "2YAVddZotts5Y4jNxshDqLQ5k25b8S35TMJGw8HACJnuCidYqpo3utU4MQCJePQVAK6obiGmDhZXLxMMUkzjnsM9",
  "key2": "3VxT6tarV5r9ecKzn1PRmnJ72ynma3Eu6c5SdmirBDMDUaLnAYGkbV9UoWAp6W79vxwYmK73meB8XQtjEaTdKyTY",
  "key3": "HMC9f8MzYBYMEnb7Jx1SK87WhXM43A1fBR7WsEXXicdi2MUKo7ACYsRQ82Ch4vw4VSz8i3NmVdwUJvEi5uJ7jVJ",
  "key4": "5PFeWx86PqZiefZNrRrZoYQJ9ThVLriVnWZPtqQPQ7dJL7rvM2pDHAWTu5sXFutkKeRGtr6Gjg85oF6mk52gDRtZ",
  "key5": "46UfxGpPUscLDPuec8agfDhapLBvgjnpTVPLUJMGJZk5SWh6s4ShehMXLorXfxwyYKzkzJv29YU6rVLh3Dk7ZjR6",
  "key6": "3VH1aFLbr7qM9H1bdjb9cCAKcpEDRzGFxMt2TvEP8WLTfhqaGMCvYqqoud8ZAPbfE5efFUeNDNbXZavDcTjYf3pu",
  "key7": "2PScQqDDdVMweuZsbGoWW9ggPoE2MXgcBUasM7Cq2NGsFGzv96duFR3h5HJdreo2VufRhoneAzFPh583xgMbMjS3",
  "key8": "5tzfde3A3j1M9P9m5yZeddNpHPxcAZjWeZimxymxK4GUiLaaYT4rKjLXja19MTXD1HxgAv8AsE8zXXbLfNUAh7fC",
  "key9": "23a2Ji6KxFAKLQHH8rL48fZAoVCgK68YDLMHVQcuvK1jGfqfxScpLS5TwWNJ7MbvPUHE7w7BoMrYUmnyi6PC3umf",
  "key10": "STNCgdmVNnb5azVHGaAswTSnAYkQe33rhoEULPmtdNitwp7ZJZ9AJRDvENztZFp7J7TjVN96Sbq1Psnm8PBXitV",
  "key11": "5iURiYRJm9PkJty47SEDQxbgp4itdW6mnw5wZ19DXwHMpGtjEkiYQCnG3t5fFgycFgajXWaiAio5NzvrceNhKF8f",
  "key12": "2Ar36uss5NYPvbKo2uJxg7tAvpTDyma515jujbiYWvDzThFA6apbCscGHe2r2Zuj4JS5kzUdcyGr5cQNzRUe5wGZ",
  "key13": "5aJhDT3diFK7eM7if8SZ3RYhV1pVkGPQUwXkicJ7eCUHfTBAvC4UybUwL1YJfyX3dgm6aMX4hUXUck1FJC9xxF7L",
  "key14": "BWfvnkAK6bSr25idW3wk3ifqt9Nrrah2mD1UnumWKwZxXuMURDXF17vxpPc4PJBD3YpEFozzxLkVdTkqSFxU62N",
  "key15": "vEagvXHHg2n1ZxA4mTvkSKH6BYzkpa9dTEFRwsvDg8rbKefTNadYMZguaAdTFxdUrZosH2J1xJqd16EcS7Bcnyh",
  "key16": "2zkks4V1w1BNFKY9yPDhdXL2SmEvzdgxNEcnX1kGrz8XKNkhmHqnRnA554cRahVHtoK1jCNcXYhsawh1WFcTDpCQ",
  "key17": "KuBYfm25iBYf8imDQ4bxyXKmK7NVVkp8d6y9SsUiuKB4Qu69GpDGP1BgjR6wiYc7cF2bMCLv59fVb7tkLfgX8mn",
  "key18": "5gLD4STASPcrbe7s9paMjsSNFoxFXKiFHs4qFMH59sn4ukHwTavu5oF2WFdtn7fDAmJxqZW64hVEgtd5RBPaLq7a",
  "key19": "2xgWMMQYRH74N88iaJkoYVXgtzgCe65cYnAoRE5ZJk3KhJ18H3C63YUfzVFC4ycnnpuwxUoemGXRuAwh2joraQ87",
  "key20": "33E2B1gjepriaNtjWvaBoVRanUC7NZyA2kq2LHzBssrHe4AxDcDBRqJHt9Ysx8kPdBJ1MBUAasrDJyL4h2X2UDVc",
  "key21": "4S4mjLess9DioLrhHHnjYSfDnguPSLSrQi39UJQzTWTB71mJyTv9PQw6qGxYd29mNAx5uJupJ2FBZvNJ7KVindzg",
  "key22": "3PE6t9Eti6AyQV5Ziaqty7psLyLoSiwMKsBu4xAm9aL7YPwy6sj2TcwBBocKEq7ZvgeEP8uGyDHrEsLnPpQ6KBKd",
  "key23": "2mWk2v257AEgP3zxSjqndbxiQCyFQWQj1RcjEu9mxpE1uwNo1UVAWWrXMPZJpafFBcofYMW4r2gSFL1eVhtwjCqi",
  "key24": "5QBSUKeYFMPboUUYBtaq8992dRCftoQrpVZoez5129goqvGQMT4HURuiUL1ZZqntLbutWwE5sahRnXZowvDnUoxo",
  "key25": "4AeBgxcYENkLjExqdr8ZMvXDCPNBmD3mFzRYPkfxj2mqvFjwYYXtLM3XUdMA2ZfiBurddBBsoGsnaKx2Tc2siLD5",
  "key26": "RbkzeVvF5uoQFfQwKk5gAb4Rd37BX1yTsmNuYxJbwSvmVCNwpyyypb7r1o73U4GazqhWkekMNGYzwx2xPTAhkdp",
  "key27": "5Z9RWuLhPZjC6NTeR31JngKnhBLVGJf4CpcWoDDYt4BETtUhYLb6f1Zxx52m4f2hLG1syaNFU9qoEsdA6Vi96kFT",
  "key28": "4ZR8ez1kbU8hXYbt77gXxxTenUUpf8koxwVaFrhtRXdgaXstMWRWuXdWWcTiJRBFnfebroYLM8c2NeBWbzDwbYkP",
  "key29": "49jqrcCGYuMSzdgKqY7Y9WTciLEAkk4rVbWTeAXv22MZ86YzdnUAsQNsXEvrgs4vh1Q8AnKsL9LVz5uVAjQNtzpk",
  "key30": "2rLqZyKQdN3eNCkAoTPEFHeixzHpHpSu2rTrzjAEst6xT4v9wzB6Wyj1f42XuvTcYLcKv9WxhL5Yd2KnC6oznvnn",
  "key31": "3uZdSjmqe5UQ4DBBFkaQ98ogXcpwz9BwEkpHNebtmuNFAyz2S1hKBg21Pgx6VR3ebLyB2QV2eBmn4J2D6Trjgurh",
  "key32": "2GqHNS1sERZ9c3TeHv9EXXYUiBfwgprgDXLMZpPN9itc4HhWB4insXTyzQ94stKwYcurvtQuuu8zY4vwjShqfL8X",
  "key33": "37p8dnBenkDmZk7NthJoQshEjdPJywisVS6uZKUvMNsp8h4wVHpLbDh9gDnFws8h6SePgtnpYmcj1WztGHha1H3B",
  "key34": "wuHEaVRQ5vqZEw2CLzuXdMYFFYcwzCPDgwYxBnUQ62gP9nncWKT5TEmGh9tK7kFASvhqAj2thdWdm7LDLLWeaAV",
  "key35": "313CDkQpKPEwDeL86g9fwGqvxYDpsw9TfLH86RC9De2XnnydkvSEEyjL5V9Qacg5paDvfz6PJNgkDVnvSAiFw3RJ",
  "key36": "gSNgN2jfYVfFEYSruoziBEayacQX2HMsWfXLxa7M5Vwa5pqfS2z8T4JWHDp4jiDGByLCxQBWRtF3Ms17Qnos3jC",
  "key37": "4bawhW86s4DyMJG4UmWnsJuD54qs1VR7QQDStx2iKProijJUQd911kmGxvCAdWvUaFk7BdSPz9TcbgjNmMeWsxSp",
  "key38": "2JYDnKhTMHS5md2QeoGhcAikHnV6mTZ6hq3jKjBbCSAZCBBm7mMJnPDfp7yPG2Svc2yoBzRou78mLV8LwmhGewPA",
  "key39": "jKG1PsaptKttSixyictwAJeTRUKV9QV2ShodMshuDQVKaf9pgMzq2jxLhyq7i6dnntU8VAV5nBJymajWMUpTDRb",
  "key40": "2f3B8GPzQ5sZPyzGYeyX3ubbXuSFFuDKkW6szYH6rbeyv4uqRR8QJYg7P25brcBmCJdpKg4PHHnNTwYshD6Dqcgw",
  "key41": "4Xv4Upe3JZCLQCqqt5zkxQW4PajKUwysbWewCCrGTiezXKPzPS3UwqtFEMyGvaojpXTvCjP1PSfWgLCUHhzLQzfC",
  "key42": "2pQgrCp8dmzViJWKjeFDL57txQuJPDUAFGPPXqAmPQxmm9A2eBqbi2nMjXmDRnVd1KNCvyzUGqaiHtWtXYr6rTjr",
  "key43": "2HdoAmCCTBKcGSQWoAJpATryXCyeW697GyKrusNkEcB9VWUkGuRmUrEti723EiBH7F5T5eTGLoDQAzSa1kdgB5XA",
  "key44": "4B4aYxRrSH2uS4uTSDhiDgVFErnf8hWFKwL93dwDvnRndfRrwPQwhPdDt3Nos5DETsXJJ5ydgr5ChQq1bcPHjYPh",
  "key45": "5JG1gNyX8ZEybkkWdXrSbG2X6CEhFRttnvgLSRLUHFgLcERmA6MtCN53SJxEg3oYoAR1u4Rm19W6JqFK6EnbxHAy",
  "key46": "3LpJ4gJZPzpJrFPAd8WmzmiLSLAYQyWsVE8jSqELCjRWBhK1ok5GbEWA6gvk68fsekNadfNXXVsCHN1PvuNUJz5B",
  "key47": "24zoZJs789g8nsC3cQRvTHLNcCZEzQQr5S577Gz6Ay7MoMA4w1bnV4TPiVx5KLqmSXmUDg12zF4y46h8X9xdkqQB"
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

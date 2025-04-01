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
    "53wD7hbGo71672PseqECjSgzBeE8WssgZCzkAWuXdqya4hsdhMWK1AHuGjPCYhigkARZLsrVL4D9Jb7he2Cs5jh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pCo3bXrvFrbFQjZRnmHwc7GVpCVRZpCBheajjuQeXvGdUqoT9Sqca9BPQswCvYBXjRuVSYAaABWhkFVZ4ywZYh2",
  "key1": "129Jyd5wcXTZt8wsFg35ZcWh7yiT4KcbWiw3mXyqSbxQiFGbqrwiEV9odBdQD6T3z93rGCnA8XQ9voxmqMebAd34",
  "key2": "aw6qCEv86cAzjd1ch5joDnLVNotQr97bofFHpmxhRVYYyUhLL2xuwoTsndZTAwWyrL9QFHSYgWjDgnh1sDWTWCm",
  "key3": "4TatZTvJ3kfq9pdGqcS5BUPLmQMSFDc4FsV96222QS7UwZ48urab5NVPjBPbtLT1CotKPbAT2QzxYdCGG8aPbJve",
  "key4": "3bbVx5ANiRKRMvY2mUz1vW8HXtEf5nBwQybGCWZ7knvLTMHmXGRG3zYGXPLJWj2KsaMdMtKoxJsm9TZY9v74rgZF",
  "key5": "53PQJcCw7wdDSV8QBNSDYWwtR3UyqUjDP3fdiJ4mUY55WuCXMtuPmfJMQhgub5r1Ex6tKihYvph8Vnd2cnKGPbHC",
  "key6": "3RqTsgGSephPVWY4uNMG7oYYsi38qoagBJMp8rvhsBZSLbJXuaw7RYfJ1dr4qQRcD3t3rgufsmsAUNHPmbaPQ3iQ",
  "key7": "t6a8qJs8eU267B7WS2UCaj9RJHiamdT8Mj5xVXEvKewMMZxV7E6YoE5bU1vs6xS7LFucHENFvC8fzTB5k7rqaUF",
  "key8": "3mWpKMdiHbQN7gFGPuofp2MEfBppM7WM9vCeHiCMSPNSVo2EC7tdMDfer8wKjqC87dCwapXniT79GhMLSEnnvj3N",
  "key9": "3jhA51ZcvGDQHYpBQdN43FwLbDxbnv6Lxb8UCXduj7ytxcS64WbTr2UCvmZ3LYDQvALPiujxf4eeVFSwRKeGL9UV",
  "key10": "66rUnr11PQ5uoTnq2apg1EjeaaKdjEH9x5sTDYfd1XZMv37yXxZJPUWzYnhygDgnvEqXk8z63S797HydGaus7uLs",
  "key11": "2pySHKYnD326kBHtHKUpv2KDDx9LZqgLN4njX5SqhXDW1QLwdL7jq8EHN4oKzoKzjPPn3byMWTJZDxkiPvwfjxzv",
  "key12": "5wwHicbuU55GSGvNuZNvPVWJuNWaYm8HrXeM8CCnNvoMUGjAtibscqMh7FNzGhwwm98BsWQLofHvKFchoaWVPihc",
  "key13": "5mebDfbiZDLa6h6THc7VpXjtqVqD4uhsXXDRWeGiHEjAXns3R5kFCcjbKU5c7i3APhTt9DQDJucVZYcf7w3eJWSR",
  "key14": "uHiU9TDGykvtwJtBLcC3jYay1aCijeUbxhg8oAKiygdGSRZ4vHf4DHuWgTVHZovfC92XQFnN4bABdgVUTA8TWFv",
  "key15": "B2iJ6EVbJDJsH7BFu8Esdj5vGWzvRpBbE72c66sDgM6HHMyfUTCzu7ikTdpFpJyKSEw18FRFjxVi2serkh8xN8d",
  "key16": "JWzSwp1DEDLAr4mtKgzGGgwEnvdZY7H7nXFcLbTJNujfnHdjeyp79AyGpYy3GvncUqxK1FpdPZvqS21po8nm9xb",
  "key17": "4kjpy6dZMUhMEUNzckpDc4nuUs5qFVTSNdkvvuhgY4Kh7RW9vN2xkmAtDDoCTnXbf8p3oH4qpRaWMs9wA8LkP7ep",
  "key18": "2sRbGFjhbUtzkgTD7zFrKzKsTNQysercs17FbADLoBu9xkPueQ58quGPyPU2H3hLMe8nuAQCJMEH7kUiUxL8et4D",
  "key19": "3Bi9B74dxhty32V4wndCuCS82wUY7dzVav8Pic2ZcpgrrkruHAXe4pENS5cY2CyDdbgUNMDtNq4CyvrEH7G6zBBW",
  "key20": "WUsr1FqjCzJTkfBNSZKtWZc23jwGqX5wMJEM27FoDBrjTQY7Z92f7iv7JH4UN9y8rAP1giWJMMZjVoX2Ywg9XJj",
  "key21": "3biKThBUWJtv1yYtEok8PfoRJpSs4zeNBppg46ZkY1ifHrdBmUfYpy9nxg4gAbRSfgupLJanSWGwoerxMb25JwX2",
  "key22": "5HfMVsMBTfJHaA8CsGAGktM1ZMyYPWgp7zvmUt3CxrEhzVEV1FLKbFAjYKqVP2DSADCDwkF11Sf27mQkCWykBHPg",
  "key23": "3rAyUuDJbx4Edce6n9zo3zsSajZTLSkwTNgR1cCskBd9koDnuXq5AnPuBUnJGWdhc9oT6F5UpzEFY8EaGGaujo6y",
  "key24": "kokg1uwR9rrQywMSpwqFkX7wBwwCfHtqQkAtTteH29uYZuqZg2XLeqpffajhXSzNt6dVcz6JpFum2DT52UcHUFd",
  "key25": "3feEViZBCNvaJ3MtPSKqsYDLovfutVFFdz5NTxw3kHeZ7ejqQfWBUMKruZiKyedRdkBBsJEvuUPos6KWMmGX5iMa",
  "key26": "Uo2HHYewMtf21rL7PdYsWcejK8HF4TgoQdKq3HvQsr2ZrkJcCuZ97rmKUdwN2tjHWLWVeYC4xUnZcDwLMThVNT2",
  "key27": "2qSVHURs4FBUhstrFXDeb8YCf41jxA3f6aJKVFjTkqGPibtWadMJTDKFfyXUDYHugq4c7Zm9R65kHxgt4d9CUphM",
  "key28": "3QJMKNeTtT2tLioadkCgoAgVQ4yJj8QYZq9dkrm3ms3vVVAqiWVyNC4Ee6TJSugy5NjaSx6fCpmWA9FuaRkB8Zc2",
  "key29": "5YH5759sXGkqGs8uw6zmv865RvEDDSKcNhCmXsyMPRqRzK6Wf1P9GGNhpPGeobjWUsvma8qz7dhiq3RVkt7ixhP1",
  "key30": "469vig68yttjtx5vsdWbrpH2JnG5NKZodDhadg3nCuuEj4PhRpsTxLpPmJqNK2LGLEKANcF7DC9oWdTEko8gtSXW",
  "key31": "58ZVw6bnFG5GPrXT5geunxkduDNmvz56Sg4yCcfMvdFJLo5zZkJmenrCDpfWHV95xw5xjarHKYYe7uZyNWqxnE5U",
  "key32": "2sKrrd7cHbPHHfYgGMqUapdo3dpUY3cZmBnZaYvmMDV2XJJjFQACPnmekjQf69RzjqPamxDTKv4XVdmCLpp2eMmQ",
  "key33": "2vWZocNNT9TL4ityxLAxPN4v5To5EX2VGqtyBhGrtiYy8ZJS9kMtaabG9hT777ePDzBbcufKXbmwyp7ZfDsEJxL8",
  "key34": "E6hC1zMcTRZmWD9mrjoaB7bezkwtfqf2fZbQb1tUudx6B79NJDY6wxF2W4QJi2bEPWpgnHMnTqWR4iBhiNAubpF",
  "key35": "2NXxb9s3tb1G2dDtKcSPcAR7Djuk5z1V9naFKTkgkEeEFNpdVX93HFUs9UqACAoSLu2rGKa1ZPWaGEy3w1ckZg7B",
  "key36": "455MTa1uJgZmQCFH4WXEsezMeRVw4eDoBo6vNwZ2BftAQKdq4TJ1gqFgeNQ4iEZFreA6u6o6tEzWB7VXupHGbBaZ",
  "key37": "2cfPX73dYTChHtUHMi7Ws93iUbsU5e5X9dT1T4888MV3dYuEmynJWdBCVuVc8huFcSjwe9Y3EGfgZ9z5AaBNqs3Y",
  "key38": "2zXfAio3AEqAd1wFpUSkNcsu3zmANZ6bM9wiCEnuwJUDwhi7BnRm9Tux4UHo24ckYfKPsqoTmhN1Ppxenkdp8qA4",
  "key39": "3mZGj9qQDJhkZV4c6yGXYNge1i6LndfYvuzS4ka93r9EgfgdzCYgyxckFqZi85yVpo59pf925dbPc22pxfuWcQt7",
  "key40": "288VocVT6bDp29Y1CmjpH3zvbhGzXvcXJp3V4et4cMxHDEBNqFHozt3ZK3vWnnYqytTQmXcbUYA8h9anUDgYSWXi",
  "key41": "3n6tQNBmkam6U2WDbafmLc6yQoXjnkLAJinNUSDTCxnNS5zJjeGBJDaSGqJ6XvKQGy6sGPnMrBsiScfsZ6GqfrJC"
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

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
    "XjxMfG9xZoLcKJPTtefJYMvkYwVNPQDky2Tp2wBvcdszCezMftGh8BTWw7Po6SRkEkXZ2Ko1NJr1ybJVP4r5QYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6F6GwrVkbX52TKhZUP7CGHFppEbWk4GCFw1nQMBRv8EF5scaWjcCbkNDM4GVea8U4pv4sUR6zmnJVDhyF2DbF2J",
  "key1": "3HmCPvGt4xQih6Q64F4vLDvoXAFXzBE4sE8ppqsRoTLE54Eqiv6BbVoDR67FCp8Xb3xQzBGj3pPdsCvdCzeJ4ec1",
  "key2": "5fHiv23J2xGdpMA1MGPBd7rwfEW6RgYxZDdpowBwLtAchuJTrZDY8BuCKcsSPdLbpNzZqDMnLp5b3QMUgVeJ1MRr",
  "key3": "xgxxbm3UyuQTaTshc4Kh119tMu3vuuRBGSkQu8vLWKRF5D9uz5DDS7Qx97eMcSPP6sVkHdPHvfHTZQQ5DpMZgMD",
  "key4": "4ozJo36dZCesyHSb6byBrvhr3CeFRpoMYZZevDQnUYZJdrSRrjJ1jz3D8Mz5oChv355sBeuVVPfJKjkuvezWBjzP",
  "key5": "56qwBphzBUVfjwstPfA5crj2NdAeKMHYiGsamYGmJPZKFTuUkgrmrL7GzrZbhXgTpM4RM2ZcufAK6QM2wAkmxaJW",
  "key6": "MwPoxKYqdNJeUykP32XVUZAoS9So6jPhEzXeVL3pF3akEDFrEFg7R7wobapEUxNk8GMYm9LU89i3ZdsxbqrhCy5",
  "key7": "5hZh22YAX8gJxpSfeTZU11h88K6kQFrg74Y7BT3QyedMqVK1NjU74KC2JSJj1qCbod8KUSi5gfamo13xcK8FN5b5",
  "key8": "4xKm1dufwMf1VpxgZW7ShV5sqDep4bGUKzjLX4A4Kht3U2SfCndd1uTREB2YKzcL2czQYXrJ8idkLErsfeUXZQVH",
  "key9": "3aFiu1W8j6dDW6igPPZBTiBbyYcm4YxoXmsVDQdDfBQTNS8wx85aqYPL5kU8yAcQwQPDpCT1HC2PFGVoCgDz1mum",
  "key10": "4nanVPPSHg1oAjKUi5MVQr6NvESWjkNG6JTCXLVQCtZNKJKc4j72Z5vxSgHB11Po2C33oDngtCmUbAptUf1Cdkgr",
  "key11": "3mftutfHJCMnXZtKJBaVzkMCdgNVo9ePvkMHiqn75C31ADm5ajQzGfsoNn6WkBVy4Yen4naoLA596CV2wkDPtjdb",
  "key12": "3waRw9dRk6Lky9LYAPrUwEk2GmbpUV9MAbCL4JMftQyuotgeUvf1XZySu9TnYX4yrmairzHrPnbFGVGyqeXgpKe5",
  "key13": "2E8YZePBCdER5Jr4uhHdVJPmgDpVmnkxgRT9nK47J2NKD9fn2WKzKBKHCJPxrhMFJYaipf7g8k8k2wUQ4zXjmSvX",
  "key14": "4KVMHcndXV5YfX1TWcLrnMqXRxr5oN9eBt3W9rXNPagX9LYgzpuZdnnmxrfkVVnrT7qEzNsfaGiiVVFxV2S4rPXi",
  "key15": "5us4mNE1B4tfC3SHvw8HTUTaj9iE3snNrohadAV1fyiKKkJCbbt8Uvb7ZL6vBXpGqPdMwD5Fe4WxJu9VosHwFtZ8",
  "key16": "52orTpq6ba3LPiJhSNEzzPDzfBD3XmEP8Y2Rz8wqMGehSsbSfREmW1xczV4A7V2geibr23D7UK583wAPupdMnnKV",
  "key17": "5fxWG4bjwPfoeiEUJBc1Aop4zSuPgMn8UWzm4UNEgwbjYkVLngpZS2hb6HY5K942wpvZJMdEXQYV64k8PpnMKaT9",
  "key18": "5wPHbRpYDA2dzQ3Ks1pWDTN78kGDNh8a6g7GxTNau3vzqu9Ba4FsJeVZ17nyxUbDmnNcyox7UZo6AHbqvrQ7xTy3",
  "key19": "27YWpb9SKVKFnb5R2Gm1nFA2iWaHEDRoPgqjraiGvYtKQFt1XxigHAmGXNJyZm7bbSHmvjq88G1AjJZfSdBjahXr",
  "key20": "2JwSU3qDvaGHz2yDt1StG4d1wBTc7NnexsQUMso8CghQyqAwoz4pMBe7KWZCHxgx3yEv5MU8ysJikXThYNXHD8pg",
  "key21": "5bwo7i68rQMEyyi1197Nz37XFAp39nrdyuyGEA4yErgiVhXeubjywxqTgtsMixxYvCeCNNCrb3S8PAptZYbdy7BG",
  "key22": "43DV4hrZn8LpiYpeeGyru2LGEViAniyYJSyfuPZDsj2C5o1P1sDNGRtxQ8dATdsBPKTbiF7mfv49uvQoyi86zPbn",
  "key23": "qTMxbzcS88Bdvp88GnuUPaxjc7w4yC7gLiKLBy1VRihft2SLeeJpKn87hDfVC8iBS4jkffj5eatiERGVHf1Nzv3",
  "key24": "2T12d62cC2TDaYJoRDFyvrdfJ2GDmdzoK91GioHR56Ju7dYX3r9totufLRdRHeq5L16CH5CQZZeaeV9jqkGBkJZp",
  "key25": "5imod9TwAdRqqN9mwaESt6prYA29hhGgvWydxJ127kcCVLNkwPAY47Rcm96HRynT6wkxWtGoDK4FLpFGC4Bgnsxk",
  "key26": "3sJCe9fETKmRcwqxK7bZBwj7xyRHomXfBnkS8GAyeGxi6FxYTtbJvKEW3HqYr7MjaiPnw88uLUDnvokQy7Sr7ip",
  "key27": "612pkMMQ5uK3jUzoZPu2cVwb4drqWUJoAxxNBZcD8cPpq6m7RWeCwdwR6uBwQzokGYWH4DKHBdfoCLm8dzqLjNdT",
  "key28": "4ZHvdZjfyrsJN8YkDnAuYMcvGxdJNtZ2A4DTg1mVgyVMwBpdp3arU9xEXXM4gBHZJgbgfXLuKDqvDAiJ3zXn54P9",
  "key29": "xYSRzmXhUW544VZ6U33iHv6T5X4eVXU5cywcGzBdvAvbGXAvsn9CMfR5xnXQ854J6H4FqLSGzsaUw9BVxH5BmCS",
  "key30": "2zz9R8RHVQ13zKtcApph9XGYp6q1yWnkk9NHq87hBRxsWJkTznxXoq4NNphAHoS1Vmuadq5e6mmroxx76dfVkGbM",
  "key31": "DV2ax9CtEe5BhFLTTXCjRkRgnT1x2pv998sy4qTTi6PkNTVygpZYbqcPYhYHN51VN5XnMziqv8nxsygqgnT5bzK",
  "key32": "63ZKg4YYBvzTeUxxxvDSSmE2SVEAuaXYVxCak7qDYDPoChCRmgTM1sW3yiJv13F8wPgx7yLFBWFqHvF21pEnjas9",
  "key33": "2deh3bDJpee6wRm6kaNiSvhkbQStKsxHXnRqhVPbREdd6PRgVx6UgtiuuC9Xu67eaWScTatWQ4FjG5uFZanpikoA",
  "key34": "4m3YBkuqHeggHmzfoyFzMKLxgKFEjc8WmEzo6i1mwdVaxuw6K72MkWdifsCrRWRRdF6k74bGKkLNwusRzDR4ehFw",
  "key35": "3nVHceNr65RJJCgMRH59hT7ZHwwG11rb53pdFHJaupBRnMWaJ1aKuj2AzJ74ryCeCeb7ccr5nMAZ9HTNEHwSxCnm",
  "key36": "BmMyy6a3pjRZp865JaqUWWZsE3wUsVG1Cewx4z2WbbMgwowBnZ1kEm2wSEbdD8vBuBMDVQ29BDxdJUHPEZQubxy",
  "key37": "36vfYU9hZWmDWR5y8STef3qoTLqLBqshhKuZKazFEo7g4ongJcgjzmFU2p5oZUmKkEdgDrLxJJAfWV8i2rxN73A6",
  "key38": "5XqaxyZJqy5QHx25zhDDRDaTprzeXdfoDc2k6vFgUmEhB4JQo2F8ucoMHPTfDKJDDcGwxgVaau6H7XAK4xfZU1Gp"
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

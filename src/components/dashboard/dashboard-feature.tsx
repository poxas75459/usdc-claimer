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
    "3BsTGSTavTgQSoxzqKst1tWxx6sPCE3YNasH6hipJSBqKmnsybWANGUQ9fQKumMNkzNU3j93PpAYSn1C3fQ3toQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7WviTCSWWXj2PQu5roXBo4x69f7ngBuRuUzKDbPBgPARgPkk49RwH4D2VSk47hY2uQN3MuPZN2RVR2eN89zFXs",
  "key1": "gqPCZhxFzby85ow98tA5ugbNcXa3yVkWuxJzSofhbhnffPu9ceUA3TNUJNHkM9FpwYsJGn1Gi4ydXJD69b4dd2B",
  "key2": "3qb69nViuLFj6UWqja38At4LKM7Y8WEXAWT97W7Mg5kRCjmBQ6qfACrxm2YJozKzwBRk92q9EiTKNQgZPqhE52uX",
  "key3": "3RtRtVSBSetdDpvj2YRDQzcETA1wRocM3ahNv4b9FDjWx5BxVzKBMBo9o9piBGrSme9ZzTAkZ8Zu4CsMNh9TxXxm",
  "key4": "3t1jETV13J6CYzuiHSTG7jDomJnYPCLzDzaUetDPynhuPr4t8ubTMBQE9WKbb5QehKc71HkNUamzhXuRcA4Ucn9n",
  "key5": "2XUATN5kw93T4YE1EByXgt4euVkbGHHJn6gMXw5sCwpa2Vp5hXqrErvsxSuGhY9D32kXphomoJtgapMCiPnBHkvn",
  "key6": "3EBVNJxQtK616k1NJxLoKqLNi5RaYLKfCmZX621wkAtLwE4RW385ViqoZMstv3q6K19vjniiXBcntnh967oR433U",
  "key7": "3J6fSVG1pxrJ1tvVunspnz9PYA7JmiQrkEncrHTRfyExXhUVpd3hQFGaCxqMsocogwywL8XzAtxXtJCxBJAjATRY",
  "key8": "2CUXJZW5UaSjQsXc6gfRaoHr6WzyPKzYSFHi67HuTJ6R2oM4aW9qnrTRDXsNFxey7yNYjFMPPsW7Qpi81gSgcyDV",
  "key9": "W3gVzzpNwHW7CMvxEHoyXZ9oKeqpQfscQrnrAWUhjaCX8YD7KmoxXudGp1p94HUbDX8uiZ5BaB1XEVDAwoNyxeb",
  "key10": "3zGXp5Mati1PJ1bhmzyMRPKLKiSk1dbAAGL6zRNfVSYo1WREgQkdC6yoTZERxdXxJpdo3rMm3xY6pZQqZLcYRjE9",
  "key11": "3QXM33kBbnFMqYFSSUZsrS9uXzFjsFBvD7twftisoxffaBGiXtKc2LkgcsQyct2gcJVGg2MBACaorcaykNMmxPSn",
  "key12": "5gF9hQwNYDo3ZevEcHQTrqPpyEN7NHYhbTqYEJEfSwezMj67N8URxDtG2wLosaNs39FA42fS6fx9C68TV8dYXDuy",
  "key13": "67aZ6KtDDjAfnirqZLNXZj5CxPPMTyxQx9Uqykd6JCds1XDcLvAZVmfFHacrEDNBk74WnwV6T2nTJ7aHcRnJSQ69",
  "key14": "3hpE2EphJ6g5i93rZSQCoiq2KLAshKkTbEqHXtziGkLxXsBFEjy1EZKieTuzMabvNAF7iWcXyZHffLH8SUmqhvtn",
  "key15": "z6bSxhUEpe4v2ZAgC9YA2TRRpCXDDkPEuE3N7Z2WBZfvjvRzDSyBN1q54VrQnKUwjeNPsjSVz3Afs7Vtjy6xFL7",
  "key16": "3EB3qVJa7N2Nxj2K7Fkis2SEM3bXRwJAhvsC4i6CCSgFLhyrbEkXkdDMPZ7QaPjh5LDSRn1gLmmeKudLEuMTvdZE",
  "key17": "5jy6U4uGxYgDftNVza5jHJRzkCVJkjsMgCVeD4MFGLxGBpT1UTakgRUNnmRyP5rvo7ErgN52eigYKH6HMZ4WtYaZ",
  "key18": "YyQ1MkrDSnuRKHppnSfg2TWAzD6CaVDgVcs2gEPNzabdvYNPsc2qcDA5Cy518KVNT838UV55Ykq2rpods8P6QFQ",
  "key19": "2SwKke6bNMuffhoTdicnwf31XrQLbJzXaoKMkPUEntcrHJvqLC6SeMphuAUv3Y8XYHPV68yNQRqbjQBebiqstoxG",
  "key20": "3x2rSqH3sYzQMdQ8iQCMTCnhcegu41HgoVfC7FTq426cRZor9sjEPykt6gG86zZFDXYXC6MFCV9fMxnjmhhagFWW",
  "key21": "KWyppBvtceJ9nTQRjuoV9ojBt24Q4Ymaab8xTnqJzxeJA7k9FKcQtPMtF58kpedgnwk9gimtbaH7BH4mYLBBVL8",
  "key22": "23wYefMqFiLU6NKjrKNm4Ziwhpei7MUCDjfM2ry8Wgx2LQYtGGQKgjjLq1LTN8xernYLjQm6dpzL9ckhMTysfehn",
  "key23": "ZkzSqvyyfAn4tK9cvDqyYAdfFEud3kc22iLzoBTpezhjhT2A1jifU8YEgVgKqFeZg3cCJTRLGkTFKKEfkz33oge",
  "key24": "64Dth2iu7eVyfGQj4yi4s4qqfHA8TRmbmQmiihgXFWxJxdrHURZPTwA6XHKPJx1hWGBTQyZi3deFkRujd7UJNP9L",
  "key25": "CXQnT2V4WYNUTvyvS1sUjdGPAC9on1PPiwbgKEqQWndVzqG1jwtDCq7zmwRkzyaN9MuvSpqGvzi3xvNDdXP7JqL",
  "key26": "5t2gYo4Ybb3PdmLYWradGMc1supUhizGBz9vEkHpFvrsKKJdeWBLdoM4osgUspSJwEfVnd9oYumJ75xqxvJ53pvD",
  "key27": "5bdd5R5ebPudrfgBSMEcrn8wdiZQNoQLuuYuPAhMYMtXp6t23EE2PEnUZ7uGugvr7xiHPBphc8dYuYq7G3enAPAe",
  "key28": "3LsCJhC1rGppgjWo7ZuyD1gCSstjZ2Ah2ssb3bcgn9xk2qCf8nbRCrQKgy9NQyoHZtFTd7vdKJwtYiA7qqRgNuJ4",
  "key29": "3oEeWHyFggecizovXunqR1MRMAfTi6D8GvFHBz5yLcymt6bLjqgt89fHqkjL6RHW9UaGrEdUVhBhiYqskoVAWXWH",
  "key30": "mwkZ2SVsqQMhuzoALnTD5cvC8ck9sSNYoG7zwWzbUP79eqhiME42CYAP5BiAKZqRYYiw4BGEPRZCWQd8Cy3KKb5",
  "key31": "4Vvr2hBERnzE9YC2Tis1cMURwiuGERyoetD9XhS8YsqTyzvAkQge4Gtgrji9BQeLd7KG7wi2xxQGtiiZA7yHXoDv",
  "key32": "3v6i9xaNpHfoQwkAATxfLrykAn8wRPpfAPLZuNZC7nga5HCfDX63nX71ZPEtHgQKEtptifVxrWFpK99L9PeWQnV6",
  "key33": "5VmsjhdRvCDMbdtRZa9RXWpAwytxue28xxL8RStCZGNfAAxf1z7usbzBHycvYJTCwpu125M2ZtNDaqgvRErZkaZM",
  "key34": "4pomj5ZhJTERfLBP78bRfPcVZjgPfGPUvF1AhDmCuy2o5CJRZWcgWs1UPmbCvQ3eotBmvSNNp7icMouMrmkehYVh",
  "key35": "2npqYi8eRrcYxxbFZUvGwDpjbEDPcTq95UJf2atQi3N67SSCaPkzdy5mVyiT4Lsb3ePAzBoP5WsP6bmDKNcu4SQB",
  "key36": "DNYuK8yPqvMdXjP8jjcdDLMUxT3wSnHcKZ3ND1D1C2aV5mhzkbaSBRGKut3jxPK3NZjuwrG6p7HYgDv1h1bqnVF",
  "key37": "4YgmkHwydAntknKaCd3aARiF65WKS6QoSYJucz6TZSMDQ15jiNxuXfW6MttKhGygHQyuGErvCoH7RjBCTFDy64GQ",
  "key38": "38DyqqvSDrgq1YPhFcp2QivXBaswQUd1Rks6Vg2gdqn9TFACJQM96m2GYgTTo9736X2o7abdT8wrW9HCTJ3DoCX8",
  "key39": "yN8sAak6oeFStPY95mCbEd9HUk6iCPbJSTxSGGRhtdPLo9G44DgB1bWt82qMSJv1QvMQRXwQCBvTiBNWPQPFYGP",
  "key40": "ppGSMupMGCwvMk1gz7SJ6xiMKTep4XqJHPgmn9h7ViijRZD8zErBssbHV1W4qvXHRWVh1gsvGGsa18bHeLqRemU",
  "key41": "SAfiQ3H93r3gC5f8FXRsbN2RDbgDmDugFqcPRbS5uxXmSAExSPoLDCdXRwsXirS9vQwQb7bDnETuRuwgfNfqugs",
  "key42": "5uwinxENAdjVk6JnFT6ngwcktqZd3Jfiaqa5PsV4Ep6AwoNhud3N28AF322xXtjhZMdPFZbzQM3Re1w3DLUf5aXr",
  "key43": "42GNSYxgfNwFNJC9KLTXKuge7vGbizWiEpjSHLXwGUNta6EVQT5aYRyQMDDCscJW1Uy9afhmAHbkSbCrAB5ESPhT"
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

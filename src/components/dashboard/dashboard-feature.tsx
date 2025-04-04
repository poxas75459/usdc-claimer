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
    "2oyvWFm4pFVxxLYPf4EmZazAtzxPQf5Xg551o55pB4sXmaXg6UYZRVPTK7T2FH2DpMEyeAwGn5Wg8k7riSqE5dFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajo2jmNSrMDrtYkoBwCMpTmqiJfx9MuhJLK27Quz4YKgsVsGPpFZPHRAh3NPLYQnpmrmmicEMLwJakVkh69rwWT",
  "key1": "545aBQWdBRvssqkrq4a6tVYEMEi59pxskE5vPScBLKihVMvXMrUY7jJda4BZ4uf3z1Zu2jnRMvCCvyDJ1ih2cmHt",
  "key2": "MwrcSAa92qcqsATysH9rb7Q17tKdgkmQqsexjKZ4HxwkS8oDwFgj6YMnMSq4vSVRwFhDUgRAADaghVy2XMhSH8B",
  "key3": "5D1mAdePExUo9LFtDUsUvUgXdXysd1Yhw9ezgw5iL4AhKueGzxwjhTknH2eF1dG619tpUNZo5SsjpcqYZvpifN4e",
  "key4": "2y3HbSKEoLQLoK3a2HiNf2DWq1XGKrWCihrHdW2Wy9qo4RJtLmfqARbyjHLWwzNNEyH4SPW9YziiLregtvEtU4ca",
  "key5": "2EznCyyAqkyqe9R2vyiUi7L5euKGm98i1VRbYNE6bk7NYcbi4bS2cmk7u5ZUkuzy34angsjigp8nECsFcAw4H3qY",
  "key6": "5sBjG1STQPKW3L9WpJ8sfGgsK4Z5hFzyDdmMf2SoSd2QAgC8gDK23Td5eqA7hnS8Eu1DPeFZLer2bLSY1sVs2ga1",
  "key7": "3m7gmYFu6BkBfBAZrAWXF9wfGxGw1vdnmVHbqtZ14Fc3JY68cKF8aJpFDqewg7FnVUj9Crkv5hSLprHa6j8d8z9d",
  "key8": "3aHrUP2G3A7f4Yhr6TGDPbGy6VUNt77hQDq1GKq3oUir3wFjSobtR8TQ7iBoP23NixDJhmWxo4tR7WQtd2NAzJBk",
  "key9": "55oFZZZqi8KPFoVRQ3ZY98atv5psnUEzUKtEeHKh6RgBJZVrnAjvcgh1gossndfvytqGB3H7nH3CiAHnxKUdUfDm",
  "key10": "27BBYhptxprymPmXoDnaXXTRBCPFUKgn1vZg7Vy9NG1Sf6YY4KD4kg1q22tzXHYyiqSEjjfSi9yX3s9noFyfEDXX",
  "key11": "6rBWuHGVRQMBPvjoFLneqz2FaJdc4QfQ9upQAdbNfNRT8vYd6UUeAoGUruSiLmRDHixhm9gYY5P2fJpQvHN9qHY",
  "key12": "3cswjEzibrQi3AYBcgUnqtntcUkifkN3o3L7dqx88B36w1BHaen6i8Mv3pjravdc2EfyWnY938i4FsJLTEwPVJpX",
  "key13": "3Pa3Fef13TBgJFscCXFzC16dpQnWJ7k8c9xrNHd1VFH7239u1hw9DDD3qseo6rXEzJenCJMVCG92v1LgaKW8NpET",
  "key14": "2J1Sm2XroD9qPavyxXw3ptpjpDWMZa5uPbnx6UfhQN3CqgGNRAzTp5TtpRrPNMmoPx9LNkGrtzd2DdVSL4yVYqkS",
  "key15": "25PNd7i41BbgVxAqh8ezedb1RfwuHfWGaYrShVCTgbVFRifSZMCyNDmAoqDiUgQSZog8iB3aGkRb3hvFf7emFiR5",
  "key16": "332CChtGFrAnCJwBjn95y3AExbU9E59cvDUYPLLMsPzKXc6Cn4WJwqZNbxasEW4o9oD7oztnpQECDwsBtxq121Eh",
  "key17": "5gUEsbhvt2YW3eNPb85Je47vwigtVK8TFaEAMTBT9qevRLjSiwHwE2X2Hvc7iKqRboRF9M5opMvFGgrt393yx5eK",
  "key18": "4BoyKoAZHrTwTmTgJacEjtaQ93vkf1NWJsy9xRHHvYjRnPNRJcAPFrJe7v2vesfiHrPa7mRfkBvTvirLW394pe3T",
  "key19": "3F8oToteWDMZwQ56K33ceSRH5Zc8aV8pZuiTDwHiGmRRQbA9o4Am7HL66QsqobXQQMfwT8HFv3qGrigmjR1FKE3z",
  "key20": "4ikw2cfG9T2M52KVagSai43z24Fxfp9p2HA11xNJr6uzc7sAe2NWWtHAS15b6yfXfDzeT9veyt4VQU1PsZidYsbn",
  "key21": "5p6iEsFP1aYEZnKeAWhJVgfNXMnP5yft9ZR4aDnK3hgYM7Gb3dKUYwbdMEvoQ34LL3ybHnaut36J72fdK4d2u1x4",
  "key22": "5i3fYUwJHeMHNaSFGGujJY5L8hdUwSZ4QdgxVTF7SMC8CH1vgC6zHKKJC7Xc2eK8CTeifdzd2uqWyGsAK5AC1kcD",
  "key23": "4gMDBQ5RDsSxmW5GjcXftVNeXHyoeRXjy17GzoPdMQo5gcBEewtx2Uiz4f4N6i4YdbyerQPSuj1oP2xZwKmvV4Bt",
  "key24": "3mYTdeVx1qVicH6ti8qdYxjktWBUwnLRNJzgNnfUGRkWTTvPg9UWBDsKnhx3xhmQ7Aty89yM7QbFFnZ2p8XCFZ4P",
  "key25": "TxDCh3t4upSWyrzgsWNo3BkhirkKXFSpKsUPhKCGKpgMg5f81ZWwxey6mHBwWCt2S3THdxxxdvV8qLueDAjX5r9",
  "key26": "5SThYUEow5jcz3hX8TUdcpzVYKv7sH1ed36zYxT1VkFbYDtb5oQ2k2LDimjdPcUoNeZ5ZgePcqQ4QJZ8YvkjmCUP",
  "key27": "2qZA1f6Gu6co3xfeNRRLcjir6ygvZfNVhruL4RYha8VdX8rEg8KSJmciRVMtc1X4WFE5nmzXBw5wURNKVLqt8P7n",
  "key28": "34kKUWd5YH1WG9NYXpG7shs54F573DCmUKLhnWJLYajqB7R6QrVfsrGvAjfVHfveVyL5M9SqtQCC8GQgEJn1Z7Go",
  "key29": "2GJXjt98BGKAe4p7oJd372i43uidexekYwRN5BXVznxPtBNzUr7kzVDWicKwjEHg7RNb1ycunaet4ftw143LSPq9",
  "key30": "41ZniCM4Nv3VfSCC8ZTUBFLS54a5ZBSkbxUbBLc8NbpxLqE5F1cPV9jUDTs1fycLLt2ZuU2jinfeH8xmDCE5odLT",
  "key31": "4WcN9j5Xb35d6sw7zcn7KkbSBWd8ctiE7eLVxgjgXys7PJhVHwUHJ5dVNb77vzsCGUVuizcADR9Eqwa8XfuZbepC",
  "key32": "38zrb79spbtbJuJqiJcLx3QtUaPt1w46kW8eUiTmxDczEqc5uPem68gptajK6zEvWM7TJNkutgz7iPpmDSnx6YaV",
  "key33": "4AMAAWGTNH91sbH1Xbdo1XBpxWTkjdkgpTR2xHs9BJZqkkKA6ZisGEYJLepDFzyuNxUwvPHJnoyHmvp7WEJT9HEg",
  "key34": "4iJZ2XKGZptXRjLdnH5JUyY21ECFHjBcmR1JRGLH1pfvgGLEiJ7uNFnA8omZaqKruvxEab6LB17H4Wj4mEn7iH8D",
  "key35": "65mgWhrTAFsCDyYPxV2vKkv5CoVfyQLwg6WkQcBJs3qbLswBfCJkJz1nLFgA6jirRtA76HCqVzN56Xmo4GYL8ERp",
  "key36": "5u5LE1tQxVJTMXkC4zyT3gbp2ywVXUM9dwbbQYQ9gkANz88qc1NDZasBMGmn8hVMYxo19qxMNEezjtoYJCyRUR5N"
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

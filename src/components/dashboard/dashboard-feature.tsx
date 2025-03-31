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
    "56QFn6MxauHSu51v6WHdV4PduB9hMBuxbDtHFkXq358ogVxS5fhQWqtQRvDFQvhgmLMzCwYG9EPnJmNd8xJAtNrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kp3J3SRD1F8yhz29qB67sCNchj9MJWc8PgxGxTi4AoPMUe2UNX9hffmbGgr1VYMNjh4q3aRZk3UAmmU6hAHB4tZ",
  "key1": "5NX2yBkpeMXRsKbEbknebg8r8hLcxs53n2F7hGthMx7QGuPEby4QUi8E3NCXJHSrXY3KsYU9sS649gDyKXzRkPsv",
  "key2": "j4hTgJAhFhQ8yqe5pDy14WgrSV1t4d6m4jqutT531M9f8Ci9PgNNv412bqPxnY5oVQYKrPvCdHFUdTnxPEDX2fw",
  "key3": "5pRy5t9HhghT3Xp3ACbjSowdNgXtNwxv4umcwrjrALVwwowG18xHU6XXF1ZqsKBoZs1LUtZ9MdSqfmKTAgwWfc7a",
  "key4": "5CgBksSxz17vEmBtRJC1jimFuY49PYqSU3bjnNrfsZB3xu1RPnuZCqPjaMhxv9BCjA2qfvSNLDEuLxrxdaUwu35o",
  "key5": "rzopXQAcQviPgyMYYPdvEDKJs6LJjoKoAGf84Zk57XHCgr2Wg18hfxqKW4nSPV3kqiVoVH6vj2QBoVJB6HeA9gr",
  "key6": "3BpxCY9NT4TEgpZohn4ow5egWpbj1DvVd1UB4uYuvRh8p8r8aNdRVKqa1eDSpXXPJJiLrxXi4WffdDkXd783kYfP",
  "key7": "2jdZVeLEHNRwXgbBbrZM1g4f27oQczkYTGigmoVJzLowJoCvpCbj3EsYCeUZ4STXC2AJmQZ15tyiUTZBgFSXY7U6",
  "key8": "53yfhN6afNbR2LtJjLg8FWPYgpECFGB77kpUPeHzfwJ2Gyqx5uw1v8jHNaRFENy9wkRu7gkfwq1vqVEE8DMoE5c6",
  "key9": "3krVkiKx1okGBRSn9FenDmSWrj8eTBoKxLRefMqZxoYMdgBYkvqUJZfVeWbs8gGzx583CY2SJGCSEbq7BgvR35tg",
  "key10": "2dHkg54Y4WpgUy7XgSwqLfLQ7p1EVz9titwP5ozCxH7TY8tchZQFWERtwnyDCHEVkVjkNDX1V8EuiwqVpipa2VjZ",
  "key11": "4qHC6MyasFjeDfwTNSaakBxPZbQpDPj6Pfc3upxQwXkm3QqoZ2APdK5vx3HmfGbXi9cMZGVi2BqzVtbtUQ6vKsCk",
  "key12": "2vPF8GTnEm3tX781R77EJ3GAraohtxJnG8CmqFYjexsJKNKmtpPtBmepfZKeReziPWw4df3vUU7UZeksnaZLHT8Q",
  "key13": "3fGKziJCF3c63mavkEc3UiK7ZewBJF85TBrvmLRV4W6XzdS3s9sF1h6GP7ooedrfEf7w1QK1CFfjZ2ygqL9RzXS7",
  "key14": "284jVa1JkbYhtKtFh3yAwzKTapSJ6NuqZkuYRVpTqGZpzhWesUUcePo38Qau38BcnqjGNwqZ195STtw5QBeqEKXJ",
  "key15": "2fPoSB28hMjxQN4kt6Ps9RMEQuStcoEXQRTHoG5fUM9V1gefwMshxTzA2v5mfaAwHZrBCQ4yd9oEuC7hP1HVKT3T",
  "key16": "5aQCEFqvx4CQtopQHYQYwpYyVLG4PKZ5QNEdasosjXjHEdxeVnLzXZwKFQ6vDazTmF1ft6g9LZGmKFy72dwoByo6",
  "key17": "z9e8YawEEkA4Wj3rxw1G8U5j5FxLUttreiKdcdJUcdrAKb1Gi7v1LYaLkgsLckXV8Vt3JHgAcnLJ9ZwjjYUtBC6",
  "key18": "2tHuHvFsD14CV3dXpFeEBcjTySfE5WhDpV4tyJ6tE5UxwkRRcmuCA1C4yjcRSjAvN1sEhvZJprJ4QZPQkKwyCjHG",
  "key19": "528EWRUKV3U8rpTCQwRAMAWKDip6j7D6o9HvZ17pFaGbED7wfrfgHVLLC6azrtonQpGjLo8mgc3vMbHm1rGm6mBR",
  "key20": "487St7atqAREyH7opbnR5VFMe53xcsoggT443vCHRZWQaom1NvDfWbhQAGga7hGaeX7ve14GQ3H4zZMHLW6cFwnD",
  "key21": "2gKWWK5fi5qnufHWSKRgZPCK4k1iXcAcxJsAJxcNwrn1Zk8qYEfYkcn1tEtF4BFUAuutVp7EzPkprW61gahgzUGC",
  "key22": "HSGL3eKXeesgYaLNfN8sbpneSroSG3DKgazG1oP81ymzZg4KCXH8s763vhkEkhCK6qPhiwFDYaedHRfgVEow2oW",
  "key23": "mvFRPPr3RYTSmtz1MVBCGQnSeo21XQAkCsFZtEuUh8iBmiiamyTWQsUgkfegViLcFZXbErGVuXgZMLBaE7B1NZ4",
  "key24": "4GRWj3Ue3UATxnRKe2ZTrnHBvML2YZUJsT8URFWgLSp9aD5DHZNtwXVK7hH3wPgcPyzDy48humxpWTrHMPRbBbaU",
  "key25": "57kAJsED3vJmoPuTrAzypEsHc3rTYwX3QJ9vn1bcBwjnYSNd3oMAA4Zfhw9UMZknMiBkcQwmKSC5RBnrRfMpR1cA",
  "key26": "4Gu7EhzjogeEvAZRMrsDDtK33M7w47TWKr87hTGPotQ9n1mCw8mWVdoMPPRMaBqcSU9z4Tx1UXnZoi5RMgwDtFQi",
  "key27": "3fw7GcpjoVs5BgRFu9ppEBiXev3FpGpthodY8EEQYUpiwMwF5F6rizQKjKqJ2Gs2K8u9hbgtHfTCUkzL9WbMmRNf",
  "key28": "5kqtDAVXbzkb6yNxzkXHVPtsQ54K1SYa35JA4FdxXQy6Qcm6wnu2xHBoKv5fbRuv9YHYQNeVeLwQ1SENMFA4foLm",
  "key29": "4CHkESdhx2xd17RTHPaAhyGMJuWtWKvhe5ghJhJBftYz378wzNuHUD2qZ3wsTwz4D33YD3fpP9BCguZq8fSh9PTr",
  "key30": "5C66EVdW4MeHLDkMwMTEKj2p16ZKt8iaZt5SkWQQt9dzF7HN5fFjCtRv4fnwiLsXqnZhtuSSfTWetQtURwwrKEGN",
  "key31": "jkcLJTsA6iQYe29HwbVoWAXFEUpvHa4R9CtgYJFbPNBDtvydZShT1TA5LTFVdTUTrTqDnx87tfzFQQkALeoEJGN",
  "key32": "2KLut8PiatMCTeq94FfYXYMzGaJc2eRD2SHDBauxHLiv27EqyYrF3dAtSCMYrfMdiASs6vUDtZwzAVcUFLbc22xM",
  "key33": "2gmmKNoCTFvUD6JgmDZmUxqrvFLTD6jbkTge8oEuAwq6tiJtnwEcmwKvWaUuJ3nmMVVdx58KZZT6GJwAeWXcDaeo",
  "key34": "awSLwnDoB2fHemLsYLqUex5TWQnuKz7t1qstUY8BcjZqnBW7ZBTyBY4vAaXe3wQXpbi88imkhjmbv6aBkeXDZAo"
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

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
    "3WbV92o42rnRp8DJ6TA6xu4tDazAA59v6QnVQpMHf9VGjEWMt6xp62jWw6J8Lo99myhcprqkAoFBwysh2SFkTZEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWXsGnJmx31rHz6wS43qu5Q5j73c81LFKQ1Pzgs816kmaqeuYe5wbjJ5P5Z1n9R47X15X9WRnUwhM4fRwXgTXwo",
  "key1": "2brVFRTJuTPbuEWDbyQfZLcS3cTNJomBzZJ5tAMqQJKkuYinB3iBHet3Qvn8fMrvNmroEgRotsbUP2adhkXnT2Dk",
  "key2": "23g2eYPoziXBFD4jiTZYgA6CifpeGzUbWUkpjTsWmk94Lj26n4w6QrbRXarBZmVUThsXiv3eKA9CwwcpeCXZ81YC",
  "key3": "C2svavpSoNcciVGJhBNpxnxN8futa78Va9PwReqy76rGJfWzb1mEsiSD4n3Jy4B9TfmxxSgWkedUggiVZctAHYX",
  "key4": "57RRvBkJPtpsN5CxUiJtBEMJwkwL1p21NL81gtsWr5pBCM6CQVfE6H4ac4vm341vqZRgFiCSSHpFRopk16zoCxrz",
  "key5": "JJ2R7QYHujcPbi5Mu5DxCiPstxKNu5MrPhzKwQ9w4dNcgyiCGwDwvLYqSGGc5ujyuhwkfgYcaqozh77BdHK9UDc",
  "key6": "5de1vCbEQVCGT9K4Yu2A4uyiePM1qgNUWbeb3QqHVEV8x4LVPoM2HKwonRz25bBiupfsBzANCBUnQDEampEa2CB4",
  "key7": "3fvFHnTd7CXR3xxEyTdsxHKNRDCPaic31fDXnb6CxPtf8gyezWmTXkWWf9ad4TM6S1idoGxCoG3WhXz7doLiRXBG",
  "key8": "26QFHKAMHD9Sgq8Tb2PtE7vU29dRK4uLsHjr89aUCCz2meQs47yCaejmBPVwrhaSbypSet3AX3CuHuyohETyemwH",
  "key9": "291yxT6uWy19VPUQNbpTzKpzzg3anHj8WkQWgcWzkXdfKdzLNiCQqnDtGKZAihWMfyvaDnQoY1qTYwzL5KQjYihD",
  "key10": "5EGYjN1Nc9taEQwum191dfP8GPcTbc2p2rMwAjVxHDTam9stf7ZGc4yWJmamVMDiV5QpajmVRkHqFg3VtwgtHG3V",
  "key11": "5vUaUsVZRndQc1oqxf8rB4TgbHmzWW7YLx1TN1p4Di84dQcgBJyLaACyGpKuP7hTP2mBAx6Wft6Thhys139kMjkt",
  "key12": "3wHouTgaq42RVo43KjB4cesbCSsfyXqvuCUEtfwABmL1R3sjVb7zhLvkygCJyT7JwoSimommaVZbu2iwKfNACcU4",
  "key13": "557UJfnVNvzATHCCJgWYnB42YYD7LDoV5EbjmzNejS19tq4nGFWUKuUhjVW36z7Zz9JLenQdJqsSu5drjLAiCgek",
  "key14": "5K3cCYqyT4MtpzHFNXr8yEp4WHe3WKcXyHtp6x9N3jYbmsBHjotdYYZrRAg64RudVCqVV5HSDeTuSKbVCyw3y3gs",
  "key15": "5u3yM5KQ197DsPcef8Q6jfPvuWQTnfJFeMACH4NK3Fynqa2C2LfYSD8FFWmnqMeVeReDmbEVryX27a2pvwCw8LxK",
  "key16": "7RfnncsN6aktPTnHNdRY6ceeY4WDUqS4h9f9ePMA43MpUfdwqJdEgJvXXfGsM8RVMrHCLLqE6biMi6wWvyWXzXq",
  "key17": "4ayimQ2uQLBYQCW9CPJ2rWhSrrtx33UXFWrXAVDkwnVSyiLwjx97PuBgJPG5ULmnvWToTAUvNThkaTMBJ6MVAv3p",
  "key18": "3LkBkT5euVSziEfn3vEHFhnxbyxQdaMigxx913ZiZVLUhp9goxXnDmbecaMvCP6KAPJorHmGcqZ4bHJXrwdVettz",
  "key19": "29XMb4hSCQr3WsRX5r9T2xkNstsCpjXdasemdGiEp5okuuHhe9KiUFgpeHY1pUPiLPpj32sp1hq5fakBZhUF4FzV",
  "key20": "5m5nvDFutcPjqcoqFM6u6uk4CVgWxvygENiHyhAc7ykBnon6EYGYf8jpkc8qfR55sk2i9hk25SqXwLXG8S7DKUQg",
  "key21": "NK62gTjgwgJEdhmUNvcCQzZJt6ohzR3xHwHJ9Tb8wdDWGTDCyqAvFqgsUUVzMhLg2MpDysPHWrtGDbQ8MQRML2B",
  "key22": "2Gv5omgecJa2TSFaLAhUQQNhgPXQA3dPNNpquDbkzLsguKXig27PFLezGGcm9db2mSamjznBLhXo3eUAJYjP68KZ",
  "key23": "2XNfx8rBLTRwZoQ6Q4iNSQP3AebDfcXjzfs4MgRBevoKx88kPiaBqha8BpYSBXgCLPzakvN5n7Ky8bx8zeTVzWDG",
  "key24": "39FGzXTvoG997UM74N6TARbmC9zQzPZL7mChefG5gQptGzshk3ZVeSRS6TEmUjKuqffripaHK8a6dCaKYBYKwJMk",
  "key25": "5WKPn6ESKJEg7bu2Ek5tDu7KVc4wCzpxAygsScgwzvkvAi51vQuGEvV2d5gaKt8yZvqcyWbxfiFre8gaeYw3CRQH",
  "key26": "5pugyN8NHonSUtxPd4kZXnQb3ns64EmNHaEQdKxvj6VqGtMjtx2FsbQN1ihKoBMRjqEoLN1U3ykaXgNwHNr121WN",
  "key27": "2N8wJoWjeQu94yu6FQeHeTX44qstYu8m32jHMmQRPALwzbQRuoEF2msjjWJdFYizPz7KGdtFqyx1a8R5tFRxzaxZ",
  "key28": "43NYGELAoqPTDc3eJGLCLuFW5ZkFUVjJiJR7vod2VHu5S2FBJTjWjn1T5wUFMkSffLn5uG8qw5jDzgzj2AVv3vsb",
  "key29": "21aMLuXjSRPZLJDY52juob65Nqcmaq6yiqecUGP7u2A5ZEWnrUhMw2fiKRiY782pDHWpGJq1BkJ4Dpox2rMymSc4",
  "key30": "2XnYqREB5oEgrq2eYuRpBEkYqmcLA7HNLFmKyKLuSpjQAe4JR4Bxi5CPdBtwcY3YhRSyTmfGitxbZX3v5BgidESa",
  "key31": "2kqZnX6DFSKYYDccxKdARRGMFbQubWQAbnW6YnRTpBrL5cSRQnxaZkWAHJzR3dpsPKXZGx2ScqvH1s7SojWxms9g",
  "key32": "2gQE4G1U8qCzc7sYeGmywM82AogPprG19xQNvQXLjHX6uBJHEAPCn6r3g1dEGAXJF2AZKQMpsRkV3j18D7Yxi8k1"
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

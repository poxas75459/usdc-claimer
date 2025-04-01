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
    "22P1hbm7MQuVgaQRw7EdPPoaBDKVafBqxDkAFJJSB7SCdqzCu4icLefGFFq9iJtRptRqJwMjiAaVcLRLVFaQ1Y2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FQS29rwkxe7YivN7SS4d7YHVma9BsTAfYZFhaFv3SCD77bipX2QYRfHyLUF6ggHvafMVnoQtb9LFTX2Gx9PX9dc",
  "key1": "3RrEqGSztaXFRn8MRqQmeJh9c3hUSdMa5dKZRv7xJSSvBoQYLx1iC6wMGjLc7gBjQzDAPwtpiMXrjer8tpSGAvwH",
  "key2": "3zqbai2UL2JY7KGRQH4hjpf1nxXbGTE17TNVJUFr14n9A37o8GmZndezzvmJ9gAWLcDiEtcuXScAQP5FTF36F2px",
  "key3": "4rCVvAUkvZkeVojuWaozYwzBjNjUG2Cxx6VE73hikkhUBz5jSPj642Rc2qK7qjXFsdDR5npxmkGhonHKLoJmET8J",
  "key4": "3dUKLFnsp47sXZoRbAMTUpnQfGUWpzx8yeS9wEFyuZdCwkVgxzn1H812nFxmLzmZV1UshXkDxmFm5V9LnBJ4Reyt",
  "key5": "3B71N5reT2Td4TNL3v7u6AeXJXpvbN9XVazNDFpw4V2GW6aAiYLntaark2XM13r173NG7NjobSrgKiHGgmCPc8Y7",
  "key6": "wxjC953MqW9N4CoM9fifa4PgH67ghuKPAJUqn4QxFMTFSNEb8qU6dYH6fZLh3sHZy1NxjiTjSYkmAW2jxHHTDd4",
  "key7": "5QcpNkxuLzsTFXvqvSgXQH5ukZryGHFWjAo66Hd6GC3XkvHixyiaaFMgM4du13hz7ggJkCGe4cBdcYrfnog5KudA",
  "key8": "f9KUqNFJHoasJ6zvxrcyHWtwcAu2faY4q4mxvSeGiZWo1JZMQ6fTPgTsodENL9Ry8Nsc64shJKa4tAfx7EJgDNd",
  "key9": "2EpTx12oEmKp6X169XQyYLFABqGzQYYUZFtas2JgohZKU5BjYTJUufh8Rq2azGyKkskSWFJFMGvDNLudrk1uDAQ",
  "key10": "5peZgW4wBBpkZVcggaHEbCevfxi4kqDetxBV3pfrvCJeuyNL49WMAKjavwTnNA5iLQFzUqyUVzs6fzFrRZjwqRpL",
  "key11": "656ZjTnDEN8MfZ5mdAvc1DEVruqhrYF7ayNvqJoGMzzrb3kBtHpJoj76YpobggwutgsoapYGUGsJJsqrVg3JPeuZ",
  "key12": "5pMzGSYAWS2jKywwJFYT7Rk4oEQ3XkiVFrTYg7seTVUveG3jdcYhz6uoYtSSPxq9wB1yyDC4ksddaXLWzhpzZCkB",
  "key13": "5Q4JLDSaYhre72gK9spRmMkgTKy8JAL6mzyvu9846DqUwwEZZ5QyNu8n9wt6zWVRYfTNQ4JEra5BPYpaW71K1Lf7",
  "key14": "5aNPLtrFtM1RfGcsaRmkt5skZJe9YuPyqTnBnxY9DftdgXWh1bB2zmjuKQxNnVj5vRDtv9fSMCykjVDe61xibqLm",
  "key15": "48yMoWPz8a75UfBDHbTrSSnKeDn8wMNonQHe1A5UH12d96uyrbcQMqstgQqCsMuvhRkG7ucensGFjkjVXTbrr299",
  "key16": "5YwJBqGFUJRLTe4CSBDm3CRWBJ19t8U1raZQsLuWuECDZUeMHBKh9ikEUhagWG6oxAsxzeuUmBywQ8CzWpJaZQ8F",
  "key17": "4Jxx3hAh6PqgKHckgPmU9STEFG2p5k8bZbUBDd6kbEuK6zdKb32oHke9fLB8tdJCBZegvBS7VUS2fHcnayMxKBSo",
  "key18": "4Zb1cRLHvsoquKHk9MY1mWf1bfAaP71BLTuqi6VEt2QvQoAJKUktWEKWpBZPjR5EpzeN7QUL7Spqib8e76MUTA4K",
  "key19": "567etjEqiEGdYgXFPqtTJGCn8i9MgjudZyw3hA85Q7VXYNrRSgYbyg9556u9eKt7vKVMXQMiMMpehdHnozaWCHzK",
  "key20": "4Qd2BBVHWVKRtx7j4RFvukmenJ82mapNPfHpdt6U474ELWCDpeetoCVk4Zc7zfffT7Qo71oUv2CFbZngAAG8ACMo",
  "key21": "Y3di6SbLtMazVY8oxnsyQjpAu1ujvsEchL8r5FMy2mKFrNUBSE6WStKe5dJVdug4S2uFLtHB9GxQRPR5yZN7C5U",
  "key22": "491KFdTQCtr95YBWNMTA4oe6F4A2ivE7QLNiVeDFJWoCcXTUPBgRN5hcm51CvHNbBxDKi4itHpt6krALCiRcduAR",
  "key23": "3caUZUiMwEMuauiqYeZaMz9fuP9Lr9SQRuHh5wXErLtDFKJPCskihnAhB1tgwgbj6aHhdmCFRGawnSJKjNg2jgPB",
  "key24": "5VeRS9jLzsdaXU4eDDdyPtdQe4QA91qEvb7ZhRD2zG5MHHsP7g54FbegBz4FLDUMy9PKN71GAJkyS3tCRmQ84PED",
  "key25": "5ktgpQ3xu8E2nED1uP6UwPB6jGaTttupfDaqQi9mhsdB6Jr9oPFaFV6CHNBNJ44hRoWHYQvki2FQA6vJRmvapxm4",
  "key26": "3Q4K4L1CDckjMoqbSrxRwZ2zEM9CWM47kuqwRFPfdacPwJQnp9kssZC4iDPEaSKSK3u48Fn5etkW3NVqFSUzjhEV",
  "key27": "3s8pXtehLaiGtQT8V6y6Ti9hBsyg8HFCnWSSLvVoDuiVQBXewSWwzCj2zHXzQ7XjeQpzks3vqY14MKFHxbi3ATXf",
  "key28": "jo8ixNnoGVmjw6ELAsxHVpqFDqiLnbjdLGYFXNeX1RooRkqyn97pSLW9BXJwXXw3iL7ifqU8yvR1jqajk9KspfP",
  "key29": "25cFtW3Xd6cUwUMM9LnKTTN8KF5Z3Dy6YVLmxpcYG9RNfhAV18b8m34mbbzgAie2YfiRnwnsgWHNJ2jDGffXypPx",
  "key30": "k1uT811KvaSnBC8buZ4whytPc72R9LvKj4UbAvKZuiWGnybS8q8kNUd3dnnBmQ4RUGwGdc4Z36rZS2p89yvd8Wg",
  "key31": "3sdMz6UudTLEThfS8RH5ZFyzky2CZCjWBHfnGkAdUt9HNiRq7Dj4fbcgoCoMUekhZh9WMKfMs9EVCHoUE9PeuAhC",
  "key32": "TJ43jM61jQZ1thnYf6ry7iCBZu89ipcd97dWuiT4KxmAZtxjGoQ1Wt5dZrEGPMreiH9syVWYWWngUJEQYtKGSJU",
  "key33": "3gnVtfsTiCH1NrpcqJ9SPoMU9qfvnLzrMS41vACfKoXqo6nwyAR3UCoMYhLXwWTQnuVJxfpmdyNCdjCnmijZBiLX",
  "key34": "48f84B6mu2NWisfoUusrQzWgp7kpmozVBSM1JzHJPVnnkFmsFPzf8hivSXesy4KCAuHQEzyNeobcLua8Xbbwvh2E",
  "key35": "4kBuCx7cEekz6cNhyVXbYLE4MzrTjeQcNzYc87BhMYxf5YjVMPowptLrxxasA4VDuiqr1rjyxyxx5k6eeKNj3xe4",
  "key36": "41FDhG49913CgUrrgW6yiBejW19YxQ3NMY3iT3j5r7334SBBpowahmAzQU7nRFJ8o6UEtNb4FNXyE9e3mSJqWpgz",
  "key37": "4T2drfchftPMEUX92HjdRMoMQTpveHS5VpcDoAFK7Y8dT34sY27SjxXym9HwDwSDPNoAD4krBZ2o9PK3U3yXS5QL",
  "key38": "2SDZGfVwwfVfcNSBVNobH3cpMj2LFU3druqomZJHBnf9HhpVypjsAcUuUo4uawRAhsZpK3vDUBG1Jr7SaYVF6QNS",
  "key39": "62NYkroR5W5Bh6hCpxLd5mr2o6aQ6mHwMBNR94QYsYbcKKieFLUTajYBxhZRErErGsLfNKskhAYvFWD1hf6g72yL",
  "key40": "5wjxUK2ahjjnEmScsZCBqCkzBYqYt9TENJ6g1zL4FzzmXYYtncCJpHmrz5eK7jkQ22KQmvPWGXmB6FNPA4DbFZTm",
  "key41": "2a21WbaPsC7pqxqj7PmFZaUmauPuWQpnKWQ4UVu8wuejGD7MZ1Z2NjkmEnFhCVbemWqut1XYnZZWpS6Nxb3TNHeZ",
  "key42": "KuJMmYDjiBoEGk11g8j7e8DYBXXYQedR2rhJrabw2QCg47rneFUYsrUts7X6oBwX7cJn2bdfwgSyzTVHa5FKzCc",
  "key43": "5DPfSN2sGWs63fLuvoG78uK4GnWXBoaC4sKu6aoxSukVMQm7Ka7zoqnamYmGLPZ9yVoSft5GK86VMouoVMCYYHTp",
  "key44": "2PzyfthZsGezBGLsGpzPCx134Vf5mpjeJB9eRD5CRDzjzAF42G9NZV62VrKB5ZV8rS1oKzs7mAG9eqFxozRGCSeM",
  "key45": "2hkn7ipr2tkVseHKCvLwuEsdUhKPuWxENycGUTC9MnK4m7xYcSVi9Y5HzLD3NZrkeGcpWKdDwEFNpYHjp7mvyQSJ",
  "key46": "4LfZR416yZTJFHxuoYHkEHftAA9MvHgdhqrEiEfSr2eCWWK2TYb9y3CD97Dihv3fACZSouppVYrX7VxieccFCMkL"
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

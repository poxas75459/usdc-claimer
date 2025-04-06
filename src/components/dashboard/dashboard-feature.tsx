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
    "416YWomBxLmVYG86bDzQoCfyLUYTvjHH9sny8iykCR76zUYRGJpJ2js1kpqwpM4MjN1HysiwGmZ5gMrn5A3aH1Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jNq9CfAeJ9oEa5Bm36Wqf9CyjJWiqFpwfDbJYM3CJ4izcEU5sqE23kf8oQkSCPEW2xgVYGFbJUGDdD2AZq6cfXv",
  "key1": "4RuEkjVFRs3KSVq8q7EsXQ7zsEj3RHQLtSJormwcVLvMBXofBnW1tYSpXJ7UHeVEQ1h89NSqHN4WvbTxEyyyh8UL",
  "key2": "3NGfF2i8e3XGHg7vz33pWyXgegch146FyCJXTqwGt9gbrjPKBgdoDYpFnLVUdMeRv84CTKqNXgwp7QcJX93WRb62",
  "key3": "5j85YaArG24WVtau77Puvvrrd3NwdcTWg4XKn9Erhg648Ugp5F9TugiC7rNLi31GesD9bopEh1zGJFDcEK8gYewr",
  "key4": "fdojBMtzFUJKvmB26LM7uuASCNg2sfEcv4JvupgdorvBGW2xM5kjFohbhj5aJf4dw2nUKJcLe5uDeuxyp4iC55Q",
  "key5": "2YnmK4acnnbCrURG3TMuvhpUWPnpdYkxosSdNkSPnQTw3X2eDCcYn8xQ431iARDzmKpFSwiq5vpg8NDozjSXLvR3",
  "key6": "5E6kjwv8HA3c7g4BdNqV2c38QvdQpJUzWu3JV1Eo3dosBV3A7yQd8f4tA14HVQdwgf9CzVvkpdxy3L5xnBbczSAz",
  "key7": "67QxbuH7dbrNodFNXFb1dotZGJNWXLDQqJV41CiCHz9ViM8fZwSGRnDxKaM7iSCygAhFkVzRcoaicmG8HfkLEMpY",
  "key8": "4nTiVF5VdnTuUYaebAZRoi6mmkwz53LmN1g9hXHW7Qd3eh2MhVwmDsxLg3jkrsnRtfAiWDiyxR4kzHsCWXe1QPaM",
  "key9": "tWweU314gXDLu2U2N9mJUYKKqg22yrv5rS5jMiGhEHr3bxYGg4f41g4f7gD22z1CrBh8rbt4hwENr2x51JczydX",
  "key10": "48eNMkJ289e8CbuQkvcHDj4SXPNNy495XqjNY4GPaGVK2LW6RxoDk4mgvwdPh9mZ4cEHAkpk7NA8uLiHxEFJ64Fr",
  "key11": "5Jri39JknZHDG8296Rj4JrxWs7F82BbTgrb6NUbhxCPg5BzzYU2ZVa1WLpTG1zvTrqXDNcivQi6qjUqqScfyfvDr",
  "key12": "3PXKorhCmTz1rweyyMFH5YBiTDmFqMxs2MyUtYR8ryRLQ97MpfdN8G9EUUvxUBMaNAJF3nqawxCtGybmAFEnbtgS",
  "key13": "eeNTdT3N2UKhiGWFeMWz8Xu4DNJRdKqy8v3f2eHhNRjrqouXM2YsqV7eNpYW1HDuqadN44Yhfze73KaQKkyTrMp",
  "key14": "2snw18qY6vhGmmNdpULruQzGBuVnmsiFDHmT9cUsYKQrRSZG3t4Bd5x1fEqiFJT2cvYS7HUCYHcY4y4QMjjmkYP3",
  "key15": "2oa2GLANPyr1SPQDRE72QLJd8p3Yav39MszQGc2ZC2ewE1tgwbnXcfXGZs6DQbbapmTJtttq7kYcTSesHXfsLegr",
  "key16": "DfSdnH3SqU49hWPKXwv8oR7xbr8bYwV3NwFGMf2P48cbUXXVGVm1fHf1qQS78YPTLogw9AaHddTK5PsBhDhho89",
  "key17": "2TeSDiBosPEniqRvYLp9vakikGq19AgK3gaK8wvv4jY7aXSB1EZEYddHek4gJ2o7MgrmEk7PpFwi1cdmJSwGTeZ5",
  "key18": "2qyJE8KZ2JkjyN5gvoDJC5FQ8n1W8T4xjLsUCdVfUUduKtb4myAXwpHjGZDPoc32fciaHruTmVZsp5V1spbQ4QDz",
  "key19": "2JRvdcBvnEFh3ALS3XRzVRV7WvBmEQQXx3HuoN9vuCwwjNAekNibx9DfoaCXiFLtAGp6rEYMnzc11QTaVXxkYRt1",
  "key20": "2JBydnZFdYxgeW8mFxYV9FFgYunPBYrD7B3PxQHdSSMjmoY4ySYsRtxgXuTqoY6Qtu3tBoYxd2Pc5kHrvR9yGyRD",
  "key21": "62Mh3LAxS7caVjNttDcdeafqjst24c8q9LwVVMAa1pwdRMUiEB9GB8UnDk4RULRrZ6ucjW6iEx7vnFB8Mkueqycy",
  "key22": "23pQYcpwPeR9aGf5Xvb1mQ226bk5RRaUZhE59KKUJWETM9LdRNmAVpBZwKEX3LrE9Th73PTDG7vT497SScSHojVH",
  "key23": "2vhcJN77rDakbcyCRuN55oenUZCCtVTniSX2KasJbfPqhMWyXtbEC7UGDBkUvaYio2zPMbXAZECvTom8xggnnc2n",
  "key24": "361vm3wFFQFRPy6WF4p61FuNvMiL1DVe3AHhds3vUpiY2Kt7qBoiW5uJq9tozmVQwE5hGbKR5giQe7VNDXAQgTFm",
  "key25": "4gdai3tbnQ9PLuXVjQBoXHBNbDEhBiNEETSLKrYTeTE6jvDm4gVhz6T3NTaj7wv8HdwRo1Jk5nwpbQG6tFuAHc1t",
  "key26": "BwatKUXqqbN9fWsUzaJgBh5SLu7msyo9AqyMLAuD48dcXVTRxdbu8cBZ82VKkWbQ52Y4M4xcQugDRdXJQVNPGKF",
  "key27": "4DutSUYgAGPqKUHqSgWMn1BVWs4J4Pf9fZexnB2FU4s9Pog92xYftq9siV7myYL77k6EHQo21HFF57LcTtH2tXvp",
  "key28": "vV2UQsUPLVrD3ktGjPyPoizNkE8dMY9E9Xcqo1M6xBhBUUCeWDsig7c261rU1KxL281qW7VpzyFod74VQJFDZP1",
  "key29": "iXydTRe5Q5CEjQhf4DZHz6pgotwWveH8t1kV5DkffdpbiDVP25sZVmmXGeYG9n39yCBqH1MDPCsonJMaGZM5Bo8",
  "key30": "2oiRPhVD8bwm3PXBY8f2cswhBp1eMNjc6Zv4XV37xgBmWEA4KJwJtAer1NiXP92ZchHbnYq9nQwfJtccPP57Xott",
  "key31": "LE5ejo94YBHwJkirbDZ9bv3xRV4GNTyxyibzE6aXQZpcfgCCzu8RY8F5he4uQ3ueHk7dpuH5YJED9WEW47e4tLy",
  "key32": "4v5vZTVaSyGSNSbhsQacxdLb8yDkCWAr6jyCbJQckvZZzhjNoo2b9E6bMDE834zTyGeXgfFtyH7VwMucRSAHtrwG",
  "key33": "3evAPgZuMyJYa2jw4LvTs2MiRBYLvf6FhHsX3iUGEDpKi1MnM44rqBiWKh1s5512zZHnzbGh3WyHL1G3sm2yVUU3",
  "key34": "5awAVk5ewkjXcYENQ4Q2XMYAazeWGrS7j4dggJnvue3PHwPjQV73zfE3cLfgBTYwz2TtLhNQ4nPS1GyQeZp7qsLc",
  "key35": "5LPAeBndugiX4Jc4efuNNmRxZ5tteAFHSiN3AC67fEu8VtK9VsJuGhLD8TZskxoeV31mxSPVmAJTPRRBNi5WmDf2",
  "key36": "Em8bqx4wMxdXKkaPzoomzpmCQJfx1kMxBQDSAcKcNVkd8dd9FsPvr72HXaecKF1qoXcCFxVZ2Y7kHKXtSHkgYna",
  "key37": "5AacF2XzBVa5WcYreuGCLk5ynPn9ELUBS431x8PKKZ8QKb5VGidJoQhFCpvSAhFZaWfQrVJyXpVaBF7dxFsR4XFH"
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

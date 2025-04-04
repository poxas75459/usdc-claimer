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
    "62umznNMRhVbtpBUL5A8d3k5tcuYmj88E2qUMriEPJFoENJHJJ7kSYNkXhikm4pUhg69BAJduoiXSwLqC5vQCatc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQpC7kXTENwpwMo8zu3unVNsPpcyXDWMz8iyumCo3ZLZNwqQfg4SLfwoZxjoDCJqKeKYmhkTM34rVYrUCdc6GXd",
  "key1": "2vsAS4SuRTot8XhQK6cRr3XwDRLzkd9XeYBEbcDGw8yZGPGRchS7WLZpFJTdYFpvUMHqbnGCyVU4vAoZSAqL3UVD",
  "key2": "5EJB5R6Fkxq1TiwziUM6iiPydBacu3GHTatPFGaZJmJWmqCHuSfdYMuRjKKwn1LbLRmLY3LLYM5PPn21T1o4p7vf",
  "key3": "5xxHrbiU2xbLBJJBC6mVjD4C95rKfA3JmHYjH5Rj6rLT75uz61mqSqkVBqKH8nE3uHY4nbfQc1T6YfHkFy7GhV1i",
  "key4": "2EUcZYCTChis9kWuAxPZFCm3BbFAmffLPRHZbAKYkfFsgXe3gqRyLGLBWM3w1L9qMDxiwoHSZw6hyDf8Z4NW3tbC",
  "key5": "2BTxxJ7ciKHjK5bGtgEV7EFPRF8kAo6nrzVtm4mwmaFrz698QWTWDbN4ygVoqheHXXrkQoUaaVdcqoasawtfDRbF",
  "key6": "3ihbaWMvLorxDjj1E7EbRoj5PdkELSkvZrBpJY6JsHGNW9vryV26xH5BwF4KicEkFXkEQLgYYSJC3xwzifL31yRG",
  "key7": "4eM5ogxsGNRJfnegqqcR2px85cCqDWeBwwNzS4hP7tH7wJrhudhEYcUBTC74rDrezVTNgd7kyysp5YTJoTgVLsNe",
  "key8": "4rCMKYyUpLQ2Ro4LBGj1tP2p4w45aWrSfG1y2szsiYrUySZsKFpWvgQF7Y8TxXRVZMcfvsNzfXxqyyf2pvsDCju4",
  "key9": "294hEL6Zdds3eHB5ZE6JbEQavszKUGzaS9p4Mse3xSQkPReLyRrqFiBmJF7g5dxEkq2gc1nEKmu3YKrjhxBSFDtW",
  "key10": "31j1XjAckBELn4RyiojcvXjBGFtYnowwNidMLdFdyjEvXBML5btyd9wzB295MvfYUMryEf2qzjjhk7JmGEqGmcQe",
  "key11": "2kgQhDnJi8Vc2QbX2tYLN9vFHsDjHwtxzf2VStuEkRRLEMdsokbVpxstTkF7XToKkA4TSgdmjKC2Wh6qLwabJ7hR",
  "key12": "64LpbzbTFwYHvTEDn2McwgpRMeiqkTqhaAy3pq3GNjuTVMMaFtsDbpLCrihu4w6vPqFJ3zNKKPeBWHRfwNCdwxQb",
  "key13": "2BbVuTgF1fNTjhFx7NTt2ktQZJ9JENesoxrNqoGn6n2bZjf7ZvvPkqDBbDy8yv3n1KZHVwS5XcabGTFQNBR41Nxm",
  "key14": "KRtEmkTMcga9UgCLSybRPsqWFU6DJqhFpMr8mMVk8qjD6r7ypPPbRU4xcCDX1ETmyGQcwBnbGUYSFvTVLMdsTcA",
  "key15": "5iuy88CfUatJFGZmQKJNfcCw3CPs45ryYpLhH5EMRcPrWxxtufJmrQAaJvWaq6MTU93pZcpWTcoSu7TnBCibbWaT",
  "key16": "5JJFZWiTSDF3KSLv16m6ynJunCJyUbtSY2xZ3jdn5dJCEdCLm3mXyUoRnM9rV1ot5rcScHeJR2QdhAU3T7ywYYUi",
  "key17": "368xtmwfQ7aPzszpoTVUAskNBWZU3Kja6JEnNxVxdAiN8JNHSoe5n47EaePVsQk6LfotGn2t4zWW9MyqXv8MDWrw",
  "key18": "1eezpoaZQCs9Rz8WXHVbN86DM38N8BgMYgvHEgGtRyrnzXzUJ1e4DkCf3iZ38yKmvLaTbyqyBY7T3DuuzSXqymk",
  "key19": "kZyzMea9EF99b6aNpNEC17w4WYHVUv3115tWWzfGtphto7cuYqnfmzYZ1XdAnCbY5zajQckQ7kjDLF5U8NgtKEc",
  "key20": "mMi2VuovXxj5jo9s1cGnnExDCbGk33G6upVWAiTPXaWdd5Xdc3KgYpe8pC22nmXPffEbUWJVDtWrrYiASksSWxi",
  "key21": "5VFX9LJ2sH8NYDdcjZ2DU8LnwJpPoZ7LTYUBYJCtT6xscHQxYcC8AtmLkZxgBNYq9UxPRMz7pRQnzNwQEEzrpY1Q",
  "key22": "4HihQacjTBwV12SzjM4se3uAWtT2DmRG8FiZYLFgzvybRgwFbDWW2M9n4fggY4FkbyhFwNxuiTbsNwimN2jGArfs",
  "key23": "M5M76rLfzHXd38cypwGp1A9fS2hJoHWYdhzwdip67VzQdn7bBFfNKgkNzqhcEwmdmAnpsVUrto2eZb1JGbLCCkA",
  "key24": "8xyaYdYzBTS7As3U1paiHoaKWBYCBKvTNk9mqsKhKahYDs6QPw2YowN3NPWLAZq859JDXtMc9966YUCejEk5Do3",
  "key25": "39DLUPN2Wcj4jAAmqGdDAq45LvGcb7Myy6F5qATfVcmJ7wdzaHYvuwAsWrbmDTnpNjp1nJ3MLKARyeZXEmXzAMJX",
  "key26": "2RPzk28tq6KuLGq8uyo8XtrXxGjtwb5mRZkpbzUpqrmMzoU8Q7mNvz3HPEJPuao35uXLrV8NSaxJbNjq3xNub3tg",
  "key27": "2vVfkZPeiwZPWcUmjwX1temMrkPsxHq8ixubFR6dSTr4naReqtvCVJt3C3Tf1um624tabkN634nHFCoqakZdFYkv",
  "key28": "2wYtvE1F5wvd6ciFamh1ce1qz9NqngtPxMPGyiQRPbFjHHoGoTsZkaxG7mv3Q2Kh6ShgKJ7xENJBb3CWuDnWRKoY",
  "key29": "5V4TLYV8sjdPeHbknNH6v52sZovgSaou6s7TdtbxBQwK3Cf7fgBkm9Zo52wZEdrgiMVzZQTNi5adFvJknMArZzgA",
  "key30": "4DUd97dnZcHQZcxKM34woFR6exKCbYJpuWh4bEbraDeuNswZNs28S1CmXx6KGJjeWVwzTpC93Ui3GAZaWVxjtxbF",
  "key31": "5Jypb4vJnNcZW2UuBWLPqx8sNabHxvXbA5vUcA717vc72FYGbvo8Rr5f6CGG7mcMH9qRPf1GcQNW3Gike67ABTxq",
  "key32": "3zJmKkniNcievejVthSA4dLdx7Ffjrb63Zay8h1jg5Mnd3Uj7cpctH8X74WHmqZBhxvHAZyj7g9B79VaPSZk1RPv",
  "key33": "5metZAfdYYEtwYiBLeKEEjemnm3K4N2gsTbeNMuyfGyoVFwQhi2PE4de951922sc3mPGRf7o9aBcseo7rjahZKQa",
  "key34": "2HsZcKxoBJP6F4F4NmMcchVYVMajczwoPd7agco5iTWB9m1WLu72UKJpqv8pBqWqEEKELcb4RzzHNDZs23StrAZp",
  "key35": "4qCx6Whr7A7AbtrRuWBsgtbrLPSnFw1CmJBroq7KBXRtLDDUq31z1d16sBdZ1kGCpbbwChZcuJjbSmZyd52psLLu",
  "key36": "37rutBK8sJ1ksdgGzg7E2FUQwNHDiaKv5is31HASRyb6jGKmbbF9q8Tb6xyoiQZqSYLNU6TBJDKZM2ePXgAudR2Y",
  "key37": "3qE4BgLUMfhduCM9SxNm5yHmhVyCWtgJJUpPUeVKogjaFwpDSbryXFySc9NiNHxMa1YjSQYFF1nLuQdX8TPQzSvS",
  "key38": "X5ud1s3BpmovPhGhyc7ECJJoAAUXaGZuCmMVB9dp1kqLkgczctxEMwegzsuqT2as7Nvo8BDE2mc4dV9oD3CtUqZ",
  "key39": "s92JMF5YroCo7pEoSLKCDgBn6F5VzLuK4SH2MsWeeDFKZ1w9ygGNmvs2QtPtQPS6Xq1CaYVmVYJTpCjnoqfkXCW",
  "key40": "4BKKYatfSZ7K4wzMJ2MXW9TGsjbQmKi9PWr438yM123vEb97rY4G7U4737G3Po56qcHuoQokwRviqjMbMske4141",
  "key41": "5cSrrf7QPYQeW1PNsuKFvKtAMsNCvkPsSyKPuXH9ef6D5GuED4Pk6PmQgbjoeV5Xfk3uL8gATJKXswzLPd74jrVw",
  "key42": "2Kc4iiQTqpRiii5zbrzLTJ17Eu4P1LaKpfjeUH116JHSo7QHspKQTbonEuAttcyqQ6hwNxJjb6Vk2QtSq1xLRZ8K",
  "key43": "4veDVAqUSx1UfabfT4cdvrcEdVV9PMy4R7rX38whFseCcoEmKBU76zta92bAZADKL3zqSptDAjDrCpiPoGvCymR6",
  "key44": "3vpda26sgrKcbm9bECCqT8XsEPpRsYymhDTfrMdY6eMzNft3YBav4JkJN5ad9dgBA93CM6b5xfcdiDHBF8Bqnq6s",
  "key45": "4KnttryrfHSrpaoj96poLa9SwCCCSFzSYaBkF2jiNV9mUy2u2aNLs4mmznHcv9gjGMbPwjRUgFtwrmxaFYPQWTgF",
  "key46": "2nicBKeJDSnELEw97CHHPd9PhXTnWDxo44Bmwgg3mbbWVjZjxsHz65ESJUCrCJY9gQuBQ271ByVGPpSqC7QmELPS"
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

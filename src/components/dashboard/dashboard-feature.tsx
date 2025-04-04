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
    "5HxTHsubUAnVrBF1AcgyihbHujKRhguTm4mMoFtCpKvbLd7cEf6Sbdpim3KWWZA3KHXLuiCSaRmiXXx2xmr3RfZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpmxXNokVjRuwMzd5XFP6boe5Z5JzHg3sUGMiVEwsVZxkRg5nzRemtcPPcjadzxvJQ1jam8N7wmtPTWg5o4Zg7t",
  "key1": "2qcs7ZdvN62hd4ojG7pTRoQ96x4rdt3Sn2sov9HMFrTebsvnbtuWwAzMaxVsrKeGnZfBAWXFNhKWNktxzJmKrz4W",
  "key2": "jUQM4v4qe4A8gw6G4P9LRDNmTQjhe4V66HYE2eVr69jaESEiGxveKbHzsLtAj37FFL52iDhnUj5qfmdvbmr2xNF",
  "key3": "2KewEA3nHK5gAkzJNUsc13eAXo4inh4kLARMD72biE1jcCcRL9Y27QeAsEhGPPPKPt4csfyczNFi1oDqNHs7WPxA",
  "key4": "3oG3tSCXjnFw6jmwN4K4W2bWMoGtdZ14BHZoJzajMQr13wADMeFPGFW1Bm9AWjdQonJpGBZTt4oEUuJENk4X3BQr",
  "key5": "4677FpWDsCbEDrF4bY82HY2w7DVKgEKr8s6u2ki7pNkGRNmuy9rVrmknoiAwU9mUEtASgc4umujZhnSPxnrUbdtQ",
  "key6": "4mUn2wiZw1YXw763FeEu3ku128YrWf83Te1J1utJcyJuC2CX285TRRMzm3nb6MywcMx4Q8izb7hyVqPs7QiR4m7u",
  "key7": "5AssLKGRzarL5mbxMXuui7Ye3kQH6v5kZ6Sd4yKgytLXLAtZbzuypzpVvog5pKtX9Ef3ZD4g6qV58RrbRPFyXGzP",
  "key8": "u3Hy5CCQX1XXPTvJezwwbuPp42U6Zvx8XYLqate2RnkcFFcWmGcZHLq37ZpimMWFhpsCLeScSLRsJ5TQCjXBmTQ",
  "key9": "4ZQ3fXB1o6F58WceqGJMruRnM8PPv8f7NeRJk3XoQ2ZxVGYRQ6QQXcsoqrLHavcvgDMn3CFhiR7QHakPEw4yuuBf",
  "key10": "K86UTswfSewPofkZeSb7UXecZiS2ZR4cNmZAsYqWoLbEBsE11Xstkjoq1hxvRCvPbzWdAoHaXzWekXEiuM7UHHw",
  "key11": "5UCS2QxYqhp2Hm95kwgYhp149JW4tPpy2ePZftcqh2eYaaa6HZg2iA142WceQd3Yyq3Pf7ABXw83VnayRSfJ4N4k",
  "key12": "M7wgfqFLoH5cCf6zroJ7Nmyhx6CQqEruEtP8R4uVMj41tBqiRikm4xzrFDzQkqArm5QVD45kAK5EwLF5vWXp3Dh",
  "key13": "42A6zuss19TWPUpzD33BiG7avdLsmeBuQiMJafzPew5N7DSTJfsxf2aCsjk6zmQqaSUmvGGUxYwqHQ6ZGq8G33eh",
  "key14": "36H1suiuh8Ufs8bffd8XWvW2yemLTks4j384vHhtS7Vi9fZAe4SnVPhDdeY7bkiEqrkWZkMAnZUA922EoqXeYd6H",
  "key15": "UGKLEpjCWrMDttdjvacgSfewM4Kkyf8ZvRDUZDjqVyYsifsRHvHBdc7mg4BrEjQ76YRh37npd4V2cCEkSRfbmMa",
  "key16": "5sgCkHaW3B14EpYtjuvvVpu5AWubkonXqzCZXUGb3T7zwt9JuWAbKsiZ2gWaA9PQ9H8w7qskFM5pWb3eeRddR9oy",
  "key17": "5LLKD8VgMeS8aUWkkP8AccCwcWzCCFjm7bSmgqwivfxPwb3mUNCzGvvYavqwF1pxxgNgBvTjzuyYwdHpmKnJFUa7",
  "key18": "4QRG94PoQUKfaer2uDhFA9P7hXxNzWSR5tpZdtgeT3WW8UsPaYhqLpzohCvGVSPTS4xwdWp9cAjEAAtPr3HmijKb",
  "key19": "4e4Emyg975CPswkXy5kpwh2AGhDB3vmcDSpmkqbVYByJMAybZjMdzoEPKZmEsXYSKofv6e6K7SsyP1x84oRgajAr",
  "key20": "3pAihMuAqy8GcYMBN3zVRn5sG9YCSc14ao41cuSNRyZsriCsZEEg2AwyJ6U91HXQTBWagrxyuVcjnpFRSMVzJKSL",
  "key21": "3K8EjLUVxoFUmd9XyRQsWywfecjWf5fcuPY3GQ6XNaqg3w1fjxLP9EHz6MsUYNzzYJW5CsSouVVAS5A29UAcPt92",
  "key22": "4HqC3fg4NA26hLhjpeUnEz4CuQZSKVfvtTLdnxJmLrc4cWmW1cEKLzo5DYVr9FR5r5es5S1LAnKdY4xbBoo8ZMe",
  "key23": "kkR9rZt7W88FrBfosYsPKYLQsxKzzof8jvo6UTLEs8edRELE6vsSbzu2QFJrJMUjZy715SMtw6sYZkpXNRCv9Rb",
  "key24": "34gF9ja9yw5qeuW3Zjo33ic8fNPp29Kv3JpbP6EGNi4G9XB1A1vCMdjfz9qW9mjmuLUc8S9PizmBkHWcogDGt5Rw",
  "key25": "54zULMicRpVbJRR1YmmuHuBtmQLJiH4MCAWzA7GyFsxW9ihRjyGEY8qJNZxgRhzJixbEP6dF6GqTjCzXYRrzLeQd",
  "key26": "5XCQD32LjobQRTM4xDvfKgYjM172hGV86w9Kihp3RJCZLSpxW1ZADzeAppVF8UL9vgvji3zigDsPmni6F2BbVX5E",
  "key27": "5jM3qmH9vZEi2ttwvcVss6nr5RMfCuFMETXo4k8HTbzBknys4F2kHH7XhfWk95JuoVHhCaaQMXrVpQdj87aXpew",
  "key28": "39bJoHxXu2CwNTVTKuniYZswqbhT7nQFHteHhrZFcTQBt19j1ZuWStYNJWJRaYanb5qdhhJztgzCXfzvxB2WfCRC",
  "key29": "3w4LskvUXv7jXnZKqcXwXvffiZPwShK15VFZUVmMJstBGhW59m5f1uWDNKtUSsZ8B7KJPHdV14jwDbbQ4KnkRNuY",
  "key30": "3ZMmhXG9JMPQVMDWNN1D4muZjrefLHAdVvjPGWFmdCHTb89HPfxHrwU6i4awJevbZ6Xzzomx7upkh7X4bpiLsNEm",
  "key31": "4Lj7jD39gbVthVqp82fzvXBV9XFTiDrW9Qw5rUhTdqrqAdE6AVkUJ9TLfvSkynmf9MUjyN4ttwz7iCwBBVFr1qcj",
  "key32": "3a5LZjZLtE3mdxEL8etkv1RDY5FjyYxt2pSdnzZ1ovNtyB92ZGGWSZGGJgeDrkEdEVQ6EzeVwNmumrREb11cSqkW",
  "key33": "5mWi6qVg5fBEtkD5akf7XL2pWJbcXjQnEHV2x95QhGJJH3QRLRKhLv96qHiY4KW9LpnjbVH5a9LTUCFFQs35W1kC",
  "key34": "63iihzUEZPcdwqbJZATByioWQ231MujHKasRfbdMHpfg3Srnsmo9Gxwx8Jh8UP8eAf6mXe8V7P1bUKYDWuimoJMN",
  "key35": "265x1EJGRgbTbeZMsLRLUzN1vncE6qfzQmFrFV2Fpt2iuWMH4LUAEwVkPTQLcm7dM2vTUNdbskyJeofsvMednhFi",
  "key36": "TiE84V29KhMpc9rHPDFLpUSjjkCuYbEa9Pysi2jNZnVvEV2fpJBdsiDQkUiZueiB2dvH7WKqoacjAABDE9bzSMK",
  "key37": "24BPTwsA94B8Yf2okQ8hdjXuJb1k8HLiLszieJSqrv5Vr4i2BSiKdEWLLqBXY1Dn25kTRRDP2cSnWeuBNwvoNJmD",
  "key38": "2gm2CwNcbcKsnwEpREV26WNanvv5D4z4MkCeWVt2n9PhgBnqfjVjvZqxgo55UfCfn46YbwLVg7kkwH2q5yfxrt9C",
  "key39": "5QA2aZyYmS6PQ7zyvuDNi6Bf1QAYj3C5fbQNZ5s9RNA7ccASV9wsEPHgC7expqKV4pUb8hj45b8DwuCeV56suz8e",
  "key40": "2vVtr22VUhx7pEckMTUHpvtdcT4ko9vVUzL2rgu2hAeCYyLFU2wdP73cAeBPaPQatTdTTGmnfzTTzvJctC2jCda6",
  "key41": "2WAqiyj4WJ955dMzkqmGCs799HawPYqzEFP3mmMQUCNKag4Y5MqxwfbypNMZ7QkQyGAFxxdiW65VSsvxRDVDF6iT",
  "key42": "3CmUEGdVQ7hu8sRPdGSaT8CA7Lbz4zP3pY2y45iMv9r7jxYnhXMDE7TtLQmx6WjV9G9xQBz9J7QYeNZFvf2R82oG",
  "key43": "3dfN8veRrMtEZ3DoKX4PeHrHzJZD6G2wg2sLYL6nXFt5fEKP4dAVHteEBQ9Mxm5h4XNicGbQPF7zxXRBpgiL6zMS",
  "key44": "4bDPVwrF8rNDjcULWx6hYn4uYRuf37BRf7BYSnJ45JJ8sGn7fkQvusUWJkJ75mQm9jpCV1pPz8pu6WZr6c5yHdC9",
  "key45": "2VVRhK9syP5LwCgDo146kQcTDig8xC1oRw2ya8j8chtPW7JvojgEFWscYX4PoQi9YsQtuT33hdueSBeqmZfQ2FR7",
  "key46": "5GfhmysP3ARRQ5iZskAnWq8LxysvCeqervxLBnQJD44HHTwsReLcjHiJcDMrri2yLc18SbqmgDm4mSjHqdjZLBe3",
  "key47": "4M5PGD42d8ChmacUCvf3gEDDqLWGbASkCqHxcmBTDzuEsecDYHqD2kXE9V6eqPc2nXEdUTuhSAEykjNLPjrPHDrG"
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

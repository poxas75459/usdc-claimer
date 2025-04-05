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
    "5i6D4RVPVXgHVwyHgqGuLsi7GsR6PhaqPhuJywzYKNdqTVJSqRWiQVAt3NdrzpWc3Yvu3x95jnTnMQ2tA8tcyaaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m1WareFW2atZUEPguPY4bWRrCCkHkRG9kfUC7JbPbyLWqM24vn4FqbXxxEAkfajQba1Gfp2VGrXbfPqVipW6CUD",
  "key1": "UVourQd8oMQ8sh1iA2Simye52TFsJB6zNTXRbaVRPYyMmPehN2h49dutBXxQ61Ko358YmTsBuretr8znAKCRySC",
  "key2": "5UwLYWM6dhFyuVMU4UagTWiawdQbBb44HxvBQ9L37Z3j5j9CyrRyYAyk7mH17EQ8ZoxGJo7hrkFZn9XhzDQaW7ac",
  "key3": "5U5uQD9yvQMhjKpb8ZFGjVyNn1oEJeVMsmThsvdMXPjeQ1yCeZ2AJNxfWFxNkH7Gnt9XZdVdiFvpEVX3jhQ1dgZH",
  "key4": "5fc63WprhM27kWFG7N8ktJHNgLEkAQVcs4etAqKF4bEofRQrKdeopkZmYuoiiKXrot7oFdfbKLHfw6unuZNvhKDT",
  "key5": "Xj9RFYnakFVkcaeF3RhwuN6rgEAELoLMUS5HeEdAiskCnJWdn6LwXCPa5KX6oGapxvPNzmfWda6nsP5f59uX4Zv",
  "key6": "gcESDys8KY9mua5tzDgy37DQ7wob1eaQhUc8iKc11wVdbKQngpdWKanJbnPE3vPdxem6h3UPCkNgqt43u62rojX",
  "key7": "2L9pvN7EUwKzAwaLWNHazzj6VnrF87uxJXheaXctNb42jum3a6id6s6QB3DE2EENCnJJVdBnC53DhaAJjtmH4Rys",
  "key8": "4SnKVTALHHMHYGCSgffQwig1joVtXz1cChn1XdXFptAWuCbSKxMPpEPB61kXu8aVRABbueYt3pcxVhb318DwBGVs",
  "key9": "5QUpdHuNCPDRcF2GntMN7aDMtMohkufHFBFCt78V8Up9c7k5HymCu9XwVQaPJLW7a7BEytbRKCAmP6FVQwZjbDai",
  "key10": "kK6i6pkZjiQqtpBv6qFcNuwpF3WgM5E2pKGFs2zs3EdW3nfEgZtUYternLmpMFmDSh6xZHChB9nYShQcMEN9q7W",
  "key11": "2sQ64pjrwS2StHdXDh8ixr8SKKL1nfVwwKgEY9CgV2AfBHsfVGYEH5rDBgM95Ww9zktKbhmKHZdMn9Eie621th3G",
  "key12": "5x3kYVWkJdwjKTY9xwnDvYbwyuFFFygTQY3rcgzej18oDzX8dmeEVbCuXwzE3hzRTYhK3EqBZURKGbVqFkXVVboq",
  "key13": "4mGNKFbPvNnm4CQYq16b96gju7D7a4G6tYU7Vgt57s89EimtLPJvivwLDQgzDm7F89TFPWniKKHZdv5MxXkriWTh",
  "key14": "EcLagduwNGMFMoGrvnMtAR6GxPdJGMPLVFgeDWo5snEqhVf57SNM4Ar5xxZUeVmhyzkbPuU9fFVsfbWen4pwSzF",
  "key15": "enbtuq8S2QoEkshgrLT5rjxj96diK9ha79o92QXnRs3Psq8VdvKaBceCWJuutxfLbp4nHxU4L3PKV3zwc37qpMz",
  "key16": "tqnyw7CnfNX1mMLn7yRcWQyNVeVtHfoAyWt4zVVX5j3T1gnNvUthErmxCvpHaMiNcVCL2nNE83ymEMotcWEmNdK",
  "key17": "UWViJtUrR3DUWGLr7jYfdeYinVT9yybMr9ZKXz92uY6wrDaazUM74QqDgRAZCbj8cpPdUDfjx8FkhcxbugpXqkF",
  "key18": "47GbXChZsFLsdkZdsHLFDAAbMkcMqg7YF6dgbNxXsSXw3KPcBVbAbKemGJCWjrkzUYZswL3QVqLLHQZdirQEBTve",
  "key19": "5T5HZXEsydhDmWJTH2GVSVSzQp9VpimWXXY4hFGtJecYkMSEUfPB72g1HKo5nPTu4rYDq54x5SaVctC16fL93J3D",
  "key20": "61ihjXFLQwoEpGYMQ8sRxUgTQbS4trmfjKcaT2vPwqibCDwBZiMsmnbMcWgyqfr8roaZwL8CTKq4ePYZqwPQse6i",
  "key21": "5ebbTsDz1doqEDYLMQ5ZhqErQEDkpyz81yyyHMwN44BJWKYiPs6ntmV3rBfy8mzeZ1Hm2G3jQzWenXuoFQMS6BGx",
  "key22": "5A5S6grVCbQib5TRFRu35jicfurWuYJehphiNVsQsM6FmaACggcPSwh4YPxiyTffycZDBiCq7ncmWPN73g32jVjt",
  "key23": "2CYLATDs6LfDT4vWj3evdH2UiaUDm8skAQxM3dua1dQCKioAh8qbKmtwVctVwMKxFKnwg9WLCxRycVBw6ajxi5Wp",
  "key24": "4nPaxSkYHVJw9XiwmmDFM8W278GFzdTF6RZvfFX7yxt2CLqn64MD1Z7vwUKZix1q2yhPDKjT4btNsqVu72FAosD9",
  "key25": "95nEbndn24446YqvFYKasC9N8kPY6ZEFx8ANGqyjS5qvb53B9kwzaUgmpABmQiAsw1zNtrFiw46bA24qEoRtrVQ",
  "key26": "4d7ME7uRgqCEuBAqVCXJBts4SeuPkAruUU2fdgqM2Na3we19MS1zswGhGUrwkAQzjeKfahTs5KNqnZBFMX6kQRv2",
  "key27": "6ZJfTVqiq7Ed6Lhxvpi8NJe8P38NTtfpmfHXtqYjhpi5ZNraTyGSDaKucUwhA97S7p5D5VgymXKp7PzLuJwr7Q3",
  "key28": "5RUAFFfyjhTRUcmBoU5fNGBqVA3369CsnJjYK4P74CqLpwbdf7EMQ9d1pNKhhvAsH41otMu6w8oeKK3TTv4W7doX",
  "key29": "5YdNqn4diBX7EcQAwGD5muYYbhKR99cKixTvpRUGRMxkYB9E5XNkZ8s768rBcV4h5Jv9Za44Jcu1CJQ1nwEP1aTx",
  "key30": "jGZnXMKdhcuLq9UezwGygJ6sbYuTpfByq2nAvMd34DmBriyFZmRkh6ZCA7iWci1p8VsgKejW1oNBxDsebDE57vt",
  "key31": "5ETSHUsvENvSZFePavjmrPFqoztQMiD4usMachTEyq67r2YhJ36YKEAAtMwJX7FgYEZPVs9JFPd1wKsxUqPhrw5Q",
  "key32": "5EWPS7hnG1Vyou1Vuma75g2khFivh5ypxTsxJ8LJSEAvuSh9uj9coxZGiwhk4AM8ta7ZoCrk67CvDPTi1KTHdFGr",
  "key33": "5NbMAj13pKBjau4n5WBucntprpuAcS8qu1JMDDktXdky94mVpUjbzCFm5tZQ7i2bYDDaNn1ej5DDdt31eWFs9vyn",
  "key34": "2d27SuRWQmffNvRvPkxuQZYWJPW6TCSANKFjqsm29EDyswsPDx5vFvQBTWRcbF21SMpiE2SZFkT9GN2NVJGkuhSN",
  "key35": "2j8vciDvKhcV1ZyWSYn8kFxMBsemchnoa1GFwbEvqWYG2Hz2YVYfNd4sLonqr4H137UfLNdJbvPhH24CH63QzTkr",
  "key36": "4jnzX1Vv97MJUGAd8qEjsAi2X85kza85J7Rgqy2zNH3AffNXfJLHZV3tZoXwyh87CDmkRfpmhk21dry2JMAWhDxb",
  "key37": "HHty1BP1LFAAFUBqhZrPXEg1xdo1pZa2hKSiqZcRRmLaS9KRiUZ1uXuXSaJ54XsXwkhXQpC9CKpvg4Jkf9u9fPa",
  "key38": "5Jr3PuTduWCMX69UJtZUnYAjFeVfvRh4nhH3rv8inFStJET7CWM5BpJx1yAj5RNEQqXYfP1xLdAuUEXDpBiE3atV",
  "key39": "3yBXN6XttaP5XKmWSZSw6QA2rJeUgirQ8UQ2nMGdLHW6snnQKPF3XL6Me6aBKLVwBsjLD6VoRjbx4muPh9mX9GBu",
  "key40": "fpUJmLiVvgfqGvSn49tQkMi4NKtPtby3QhdmPSp7u1Ye7XbAzBippNR6P2fNJQfoeh7oTKaFUc2ksjW5HL3usRA",
  "key41": "yaDBZWakixYe7qnmvgsqDRyFZWwV6macQFr2M3FX5wEq6Fcdi3PagYwMdeYcyz4jmxLTarU26VxWRxDNxdd34Ep",
  "key42": "5sUs1UK3QyDpBHt9nNWqKQjrsYjAgqwfDJZJAwpowucfTe8LF7jLFUqsDzFztQXJzCrWzvfMAmSDjwQMpdzHtQTp",
  "key43": "s2fQLZh724SrPd4QFv4eavo6H1Jx1YQ5uhP4k8f8QsGV8HmZopbKrKjhp334cjPc9H5ctXK7RVcz7PoZFuXtSyZ",
  "key44": "3AkWFRJp9VrsVjoBfVr1VjrFuSkwdkqkDGEQuqgwLG86TxcVCgRyMQmRvNdrk9T2Vz8TDdxb8E9VoiJtReGuhEBe",
  "key45": "65zsVJAocfMU5UxHMr92JXWLv5FgBFszVRR5C7aJnbeziDA4JsDg3gVeDMmiXY7oSkJaSyepidGXjyhNcfVU9ZMw",
  "key46": "4WgVzx7cMf3Kv6s6wE4veX9QvdxyBpr8FqmqZFqwy8GjCFC2kzKHA4DLcRU8iT9jArqhq38YvA4DXorX1pWWDrt4",
  "key47": "XYAS3LJP3VyoYagYmEBvwyE1VjDLzFHkZwmZA9jJKFSGZPRKQxc55Xkq5LS1XYokawC2ngPjpu7fy5mZZJGCWmB"
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

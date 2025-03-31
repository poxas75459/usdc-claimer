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
    "3zVSXRRUWkdBweeeihve3bAzv9bYGAyMmne6n8eH4zy2M3fPKuDwA7X4nzBMXe9zDPMshv3MdterhVLUW4YkcstH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zU9F6G1saXwweGJ34EMDPajEm53CPpFydXtAfZsJZR8DHKfswpAZmbxEZpmBcm2JLH5uFdwbmWkvnQKda4iCCq3",
  "key1": "4PNKcC2bNyXpYEjH6bsdxN2nPmj8JXYvWaYJcjFGyoKYfKejxNTTZc4oRobgzqG8abR1CgSLLPfxYi8wEcafpcat",
  "key2": "48CeyFQTMTYppYNhvsqH2nNtGzm4wsWA3B2rucdetrW2umaYUMqzR5A5kakmQMALe8mo4x3hQ9haik9owvJPwN1C",
  "key3": "3V2Rw24SxT2YCaCsDyEoYXnxcMrqypgktxtWorXA8Zpzciwq4ScWdEZkq28KXDycpxyjBtCsqJ9sbWUPHvBVegq6",
  "key4": "4JyvVSFXv1rV6UpTLpCQ7pLGdGUDCPTsTWZXWQsYqeqDgDpgFxkYGnSv9bxPxkvWDmqpuCppfZuPhBJYZM7GToZc",
  "key5": "57pQDP7ZJsZN1PkhSwGWb1fxQQ2cSJ5WGxQgE4VQJVc3yHhYBx37Uq5Fr5yyxJmMVd9GqhKZ1zdNwekCmo5dDdBr",
  "key6": "24DpM2NMNERdj8DsQ8CnKbXh49SgbXa5vcw3KbPkuB4UHBPnCAVSbEzEnEGVHMPqFEmNe4vMwrBT91s6tVpg9PG2",
  "key7": "2XdnUu3t4a9XzWQchsyP8vw7sU4LWba9agDWCJp4gcyKFz9Ba9NmLNWQjLLRMFDkuqrc6eVTvpztpXNCs1JBKReb",
  "key8": "2W9wA6ZnTifsYte52DCQozWLsu2skgaVesnSbAmnqXkpAb4s8WxuthhJhNNemjVw43LGqyiXdeHJrDEMF5cRUkv9",
  "key9": "3AcWjHh56QRzxup61fbeFnPAwVVk1ArTE8PqUJjGVAj7V3Y3DKat2wzFqPYmPk6NxGptG5thptAaBQBa4Q6NVpt7",
  "key10": "4PXV7DkKQ7ZhT1CmAs49G2CwRNrAJnZDNkrwexXTmBSGUEqqvDwKhTfHgqx51RakY22ZBSHrv1WaT1i19goBrtYr",
  "key11": "5jZWYicU12FGUDKBCcEtwXZrHBEkWixfdvLbXwniTPwoe1J2NcuEWbWbLNyPaYt2tmxpwJB3fwEjN4NgqkYswNRQ",
  "key12": "5BExdCqvPNNE5RcuFAKa88czcz9TnGre5DqtSCsGeRPUzRgwZuacFqjok6gSFcRv1Avx47m4xAGKtGMtxEgNSCW1",
  "key13": "3jfTzHVM9K89tYfqXxTy1dDoimjLmECYLJJQmhm9TPN217PfhpmeZuwJt4YiJuyZY7UTYPpwaR2LZ6g8xdKQyrTd",
  "key14": "572aMTu8L8icnw9xHEJX757TZUhJH9D1pGEebNwZYPruAw2DLjVTaed7Na5skE8etDWuBnoQRPmbNJjA29Wz81D1",
  "key15": "5LgwkjZRNhh141vgcitpZzaQwfeEdCh2VJTcQXcukoPqEL8r6YUT8jdiSZGAFJ6o9FxRxWLq9PoajoHeFYwxa6WD",
  "key16": "B17HHwFHp6vfXY5jtpBTwDcM1729YZ1UhEUctUBbfsF3wypqoGKF7hSsB29n9p8GVv9H6c8gZYLoUqhSQBcbjLR",
  "key17": "a98UDdPeciuskZRrkDWqvtEEJiasjNnV3qLPnBTpG11vVZNSn1TVw8ybp81RxNG5Kd7DKxfzvpwJUL5Kvvw2MKr",
  "key18": "5LFh8RtWJdnx3NDBYeNPa65J2okkQWSqvE6mZZ2yvR7Q3xNoLaX57hEs1tKhSQZs4N9yKt7nGEc8Jc1c3oTFQwmV",
  "key19": "3gbN4EkbutW4ZDhKUsfyC1AVR5dH3LNvMUEBo3RKhMpqckmhX8rQdb4wZXbLnJJwpWYqWGkxUjVfgRTQeTe98sd2",
  "key20": "57utcpFNcC7UbJAYo9bAHkrWFbNUESTrHcaRDAmvw5DXtnUQTmuegDFjq1Fdg197RVZLKufiTYnJQv29uXGhxdQA",
  "key21": "5qdDE9uRg8JtWkpfRsC1qpshBSNhfCMcggaaU9HABGhFrXVKctEjy1dtQNzk9JB6Mv8DSg6tmgS3nPFL3oDo5FbN",
  "key22": "5htMFYYCoqP9P9w986tWx4b5JmokFhhmyyeB18PRaDxmGHQ8jThzqAdApkstKRonmxZzKvhPBCcs1NR17AjZAf3s",
  "key23": "3ebmUGaYtgiMdwwdDWpzgSszzBghdMm9Xcvisb57fXLx1dptdkV7sJT3v62GGvxmrskcoCwkgC1hRg41mBesdTmx",
  "key24": "39QHHg8LrEB337YuinWtX6ExvosbJmNSnNSPqfeVSsc4rqrRNUpEJZVfyn9CWXBFTg7yXSNCaqxifWxSbeYjJWVA",
  "key25": "4nS2aeYDTwAC9NXRydU8V58T4XsaMqpMbid4G12r4JSG42QM4k7DZmUGKmxkv6Qv4sEg3aPBrX9RkaEaiN1nT2W2",
  "key26": "66Azr2tZNr7A5K3kkkRUbuenhx5xX4EMu9VmonUNTvkswjzLTN7TknqSUjXS9DZVwN5koXxGGoUKb5hfLdjQDx3M",
  "key27": "ZmXppcMVNtmrLU5GvkU8ACLreyUboH94Y9EYpy4aNhUTYbHtdew3xxyBqRuvBiDfVhG4VtjhBQf2bhT6DDpqiDw",
  "key28": "4uwKj37zrjRmbLu1ZGmwgjoKtKypyADeyJ96tXyE83CZqCHkNXU6ULMhqu3uFDpAhvsyuaohJAQ3Vf8qN1EXuiXN",
  "key29": "5q4Z2UJk6rCUuJLSuiT3Ch1WCvXHAZE96Sc7xjDhhYABJCWvak27yUoS5rFfmxRQ37KqyZmbbdKpbc3Dxur6Y4Uy",
  "key30": "48ArjCMZ1mfuaMUv5DT2xVW5GFnAKEcUuAcTKjwp47US73sgtEgQk5fzahBosjMEEfxiE4dMzoB1rA8a6Hxxq2uB",
  "key31": "3i4Ld4RY5Eiu26vyNMgrTzgzc563ck3aKv44hEMhs8XdXZ7txh61YHQp4RfNym4w6T3UmBKemdjWPFqA6BVTDqkS",
  "key32": "3pwgp5Y7LNveAUXYukD3Lwd1LixgosgjTa2tWQp4PT7hgSzedaUj32nBS3TEZFy4xjK9DRLRGQC3AYuVkofeGi91",
  "key33": "5kFED7oYwhws6bogCribff1HfwiGkf4HxvGmjiz3pDbcg4VCVFr8ny38rNCY4E3Vkf3EvC7hvuvS2Bz6B1jnm7sj",
  "key34": "4ur2Ej7iEGGj79uf3SQNQQcjjMxVwmoC57ErmDrjM1tnPaaobvCjpHPxUru8EPdTVivb81Ab2F7seXqJ8LV4aewE",
  "key35": "239xJp7q2njLTvsTbw4MZndWtZGizfpQPxbQabU61seL6fHhqYyewXDN3T2R7ANEoiomrGXPsx2Lqhc6yHZb9tMD",
  "key36": "44aUwhWpHDxLqzkn3EYnvBohhn44xeRiBjf3UrgLDnPTrYicX6fJjmqqshMa87T9PWEArG5Aj5tduE6Qhvu2gHzf",
  "key37": "pXVYyrTNCcdBb9WLvqzmDdMQSSxotb76rqjRgAAwKycwLGd6pVRRa4FrCNiTdFoe6w68ZmRRPyZNFEty66BuyWP",
  "key38": "ctFnWWABUD3FHijvcbaRRr5h8jFokSEcRf32a8tYvhexoe5nLeTVDGi8DC8j2bBdaBFjBDvjyHyBcQiZQmjJ3sD",
  "key39": "1BwSTz524sSe4idVNb3noXPtvcXzrVrjmjpvJof6yEiFC5YVN4rVSSjjpFvQQz7NEHwGtx9ghWCnVHusR1so8GA"
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

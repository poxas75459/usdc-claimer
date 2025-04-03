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
    "2EQsEDGb57fZBqPgjXndC3btJ1KGU2LDquXnv5gTAyYZ1VM2zCb4SrDZj4R5C4NDGmC3Kx4QJN5qk2fmBHiXUwCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZNSP8uov6BmTuoK4NbbH4XNUADJwX83mJwLbuafAmnQeZ4ttzKQZioNDAhTDbQdrGN7kp1S4GjuCVLPMxCXWTF",
  "key1": "5aKjRPj5ZeFAJ8o7PrbjutgGguJA2nTvugQQjhcRGhqr4Fhn8tkbXX1kNyHxB9nZDevqvKk6bdA7rZThFrGPmJMe",
  "key2": "46nopLcGHcLbwvNjbJ22wJjm1gRJpSi4FjkgAMiJo5hCdcbTJ4naD2QEANVvDRDjtrLeJokXM7YeHhNb5UT2Te1n",
  "key3": "DcQD4YCAroEk8b5z5rjCGrKV51hYdt2rPcNH59az8PibrVqJMFP3Gr7bV86vUGgT1mhih1z42jBE9PYofEcVdjk",
  "key4": "ptsZnsY5DsbfwG1NtbBees2X4sL6V5R8Def7eoKLrXXy2BbgkmgLFvCSpzhaJ4T9cUDrQmMURYbMo2f8aNvXqp2",
  "key5": "3MQ7sQKksmsnpQZPG74Q6kK7Kbcy1GtsB7WzYdiXnSJeF81UEE3gVPrhbwKR9BpDa4ZPob3eShFvsbQFE4ZyZdKG",
  "key6": "4QAseCcaHoRJMXt55yrQrryfAcTqQcZ3FWbg4pYqeTWbafCoXEZoyymBERvHSSoda3ZJHeXeqHp2dT8EEXETDdxr",
  "key7": "2mNMP3rdZPVafSrHL49iZrixfYEig2cxSvonoPsd9sCT86AuJBtkos3W6wJz4LEzhMiaqLZ9HCkeCDN74tGcQYYX",
  "key8": "5DSGJRWmdAmVHYaZ93g3YdNGiyaRhdCoXhrhEPmRgXL5N3ENMjGvriU4kjbEcpSxxsfgbpRFGc19R1BSZbxzT2gy",
  "key9": "tcKC8jjSRNUKun2C41gBcFFZfoL2u5aCz8aBYpNS1oZdrSV1eNpygxoeztp3AUt9oXndvcEcLwkvygfTsVmii9r",
  "key10": "47s4Rdp5GtX6fC4FiPHrrGPYmrKjAiPNdBEze2rh56PTTxtnqMZnfEN5QaHYg6DY9zzboAUrZB4B821HJGjJpi6J",
  "key11": "3DTFZiAn8xZsJ8x3bPEp9LsEyTQC187MjEb4z9uWobUytoKL8Hsv3zZKJtFcBGMc7EDqkTuh7bnAT9soLCUUc2ni",
  "key12": "4kFbgE7vqa8QBMabzuuRxbapRMfwMukybZj3aH2AG5LxG3E6KeWXjeEabNf4ffYaGMNuRHmBjnQHeGHir7AWNaA5",
  "key13": "55cToquJQ9LJ5DZBssd2xfA6G9wdf9JqMTMBG7Z7ykoDq82Z7joCt4o4gr5j3cZSqF79aQ4zy8aFSUSMmbd6b6M8",
  "key14": "YyJcCpUsykrUdb1bcNFSv2wG7CQ1LPbC9ZyErCcHk7PRCg3DHY24RtRfgEA6knCNzn2nvzLKH5jpbxkCbrNswF5",
  "key15": "7tKtX9r2JUuww32gMNZHGk5cRrrDxSwVMAxwJU4RF51KvP7nFoRWjWGt4L5K2eKC1dxxvv4irJtQx29ivNNjfZB",
  "key16": "2hhHYUtpwgL5JQXXKmDpQfvGM5GpyzenWFEnvsjXWkowvZNBwPzAm8V4rM3K5yUwacniAB49TwMvwhfsDujA8Nd9",
  "key17": "2yuT9vfoQQj6d175zdZ6YfA69bUTJ3TLfiLNCfzFEjpHX3oeEX6TkcKhhd3PSQ2VCo3ohW23u47xxmYZkkcwnkfV",
  "key18": "3ZHFFDQZ6x56Z4LgbbWWgWmPLvAAwDf3HtPdR8JhCQsrwZgLocM7a1s3Fi9ZnRpjrx51N4nwdHmTo2PcXB8vc4vD",
  "key19": "v5j9g1yPjpcWVwDSdhqGzkUrejkNp75DBx9rQdUKdfgtzcoFSPCYBsHhSUexgafqhwrxFke6EG7t54NWwNq9Yvq",
  "key20": "2H1FHLCTnbi7dUvjgTpRATMiHHq8c8XZF7eGyiUv9hZAoSXGPpinxtCFXsjCEqKFqveLinX3wEP82i77RqWk9JPV",
  "key21": "vM4134Trfvch73b4kBKNH3cf3mmRMCtkjv6fx2HxZA6hX6KvbcfbHgrnmwQeejurVzeB24Ai7zZ7oP8haccbmXy",
  "key22": "64JhZBENhoQ15AQWsoycLq5tCDDYYqNMxf8LKb3BT6PHhRYG9kWDmH2CwjC4d83DqYr38uh7EHiarJQ6APAn7uBy",
  "key23": "8DztC7mHgxzSpiVRh5GkvXjrCELj43GKB93WkXNmpcMsciZ9zVPxvg4mLWN3YoMfNcuwAzbsHxgLRCdhfyUnmAd",
  "key24": "2JC6AvTyhnXr8yuHEumq6inSboXt3HPxzYLYAMzPZZCZ6WgANYZtuq1xJmje9d1Vg2p8CeuuerMDwDEeVi37c5Tc",
  "key25": "3xDH2CqUFe2eVLUPzXGELHmLRNufFJhp8oV8DLM5yXQ4dhnLCiTkin1PmQDaGUismZy9wAuRYcJxr4eBr3PhkhrH",
  "key26": "4SRbR6xzgS1Q39DL2NPpH5gWCzHLKtw1DXpf4euqbQ4Z5zPp16iUYQXKohQbHT3FuoyqXe21o9fF65hf1QgibFHq",
  "key27": "34toGGe8WbM95yc38NYXYWvY61gU8iTYEjrPNFsdetKcY2DXoCnCVzDkQqdm6GZ3EYZWaUwQFCh59XMeyLzjtST1",
  "key28": "35eBapfsnyPJnFESfZzU6W236zysaaiLm2Ep4sfgMfRhHbATDDVpPgNDYxygzigKANDCo6UMJsxmwF7upxhs1mV4",
  "key29": "34Q9m5LDdLTHGWrtYhAzqLVrvEuD3TRz4TaYDCLYaJipAcRVu4E6QV8h1vexG9sD2QZRfkBweFXzb5bfdegeANhx",
  "key30": "4f6cefBTR76auBMUgwdZYMzuexv239GpUvb3BNSD8EqDU1LgDBzrsDZoVpLknfvYXX7u4zg3oJgtCu1T4XfUpxFd",
  "key31": "k3n2iJNhTMe7i8Jcb9av9PqAoQUfEXy93d83bHBkjcdARAbaqvRKJUBeiiMhF9qjsXcuCYVtEepoKHswToBdQnb",
  "key32": "3TqSSMAB6bpyAdtnAqfZYQhyfL1pXDVQkGriPeuzwMi1CnpnHjfZP2SZoD3HcevJ2wAkorxBEJiXVs18AqhxdUYb",
  "key33": "2UJ6f3o5pKcciZtWj6u3Q6Zd48xKe3KH2NxJDBiZgaa2Ufuzn9mYY2M9oEcNV1KqYpTNt4Ywb3JeGykyEQQimXpb",
  "key34": "4qfB9aCRB7amfzMYXwnDgRiumXJD8zrKZwZuxZFQASFapBrWgYJpdM8A7GkYVbgY86pF5HGk1kDzaaX9qJUcMNQL",
  "key35": "3BJ7QQqH49jeM9xMHwHrtQyKxUWwgADBcqt2hpFzXcUeKqC9trPVgFtqmXGRdnzaL5jtzqE6gkZSUNsxrPrFokJw",
  "key36": "3G2sqZJiN6mQQhHub5VpUCjSBJRp85YgVu1KMP9r6WHHiRX4NaqydCLJw2huKND87B3XzcgyhW9D7GFBXQx9Mpyi",
  "key37": "5d7syJKy29yGRhvExBT3xC3KEH7y5eocopRv4jDK9ca9RSxCTdFqXmiABMeKGCR4G3qbgYN77AqmKdyT8Pzzk6jS",
  "key38": "UcodBVVUdb9XebTeNKTzTsCWDp7iPPstdnSM6ZVU9tFPLT7MbZS4UYMZy5RnKKHhHYATaaaGaEYzHagXDk4nRdN",
  "key39": "5oHqgSxRSPdK2zftoSHLQeFjiVTD5WWmiRfyVytiBEgSkUKaGTXomRQjepdNc3HCgmMM8TnMPnskmWXdJzR9F6pX",
  "key40": "4WtJqvcg4fqB6hkHDUNHVBHgabyYvoqgWdgoZ5n63JeXtVPhyHeUy8JgcsbpbxBABZMcaW6PgTe9uLuEsXPmqBEB",
  "key41": "55eeYzmrk3K5k5pz2bHiTHB7y3nSVZX81WXVWp9E8BetEgFCi3htob3BaTCJFHwX9fU6W3nYyjqyWBTPVfSqoG69",
  "key42": "3eaFPznS6NrHNjYjfGL7ZoX8YBQzupN1HM1VJzhdGR4FPhjRrF7CBV3WEucctWv72GRhXx4pm4fPnz7MWoAxcx7r",
  "key43": "5dJFEPa1NMo5HYhcjfUEV2oMvu555fpPqveJhTyN2uV24uVcX9NbgTPDp8vtJ8nPRaj9NGCx2XPh5gxpqmXvxKTk",
  "key44": "4k4XCLU5yP6feYtN89astghAfM7ZkKSor1Fm88hKpEHFgKeJUZLHm4ntGzJH2V2K5zokE6GcVoX1nrW9t3F7jJKe",
  "key45": "282s9U9Y652WAzwcoccJ7717nUswgenpoZt2bqmDpRgwvmwok8vb6VLYR9RDtmUw4F8QQhiULimnjajhsiitpifD",
  "key46": "24a6G7ARw41cGDfYNLZHW3LihnGmCKjiFoaDY4J69AqdCySzZW7rQ8kTUvycGZETaHSVmX61qqkwfkxEX65uKLMx"
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

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
    "5fL9rAty6h5BF57w5eryW6U4BWFCD1GogLJ1jTS5BbU4ew2GZSNVcA4jpu2cTqwU6xoC74JmgEcDAGsVN3Te1PVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpMMXPPPPcfxjgjU7xT7e5DJSbMGy2TY55282ousaiUkw852ehia2HXEg9E8B9iLLXyVikMBqMaRH8w2q39feo3",
  "key1": "kmJGx4BbSgx4noxJSuRfsHEqCMsVLvYZKhzhmXbs8aZ6ajGKSTqpiuGprfrSHzihjskCu7Ds9rkGRFfsa9Y97dd",
  "key2": "4gY2D4tyT5N83itbCTtCGeTVGWmmwNWTJWVByaxxJN6NLwE1oZVvsMikE9bhbezsUFfVmHELk5wfnWKERrH7E7i5",
  "key3": "3McRn6HCoHmECahGivQQSDctUWZRVczMkms6KBhVbUsu4e212AwC2Ry3QQQqKMVJ7xAoK2XkFajmDFJyzoZuDZFS",
  "key4": "37cvfurhh1cDNdf2GQhxb4ew4ZgrWBaoiYwsUAcPxnizxWYfpRYN5UYEpyHJoPVn8LwGdhWYrEyS9JQ7pVRGQYzL",
  "key5": "3JhAVkayZkgxcC2xftLZg3nVnV8i22pQYY8VQTEfXLvsYSvoj3cW7TLGgEWkVK3MAhAnKBadbf6kGmpXFR2Ea8m1",
  "key6": "4q6V8JTB8EgpoyK9nTXCn5EtY7vtUHa1j7uehaEyAGegkPGE4jSY1Nwi6RPCM1rCEmesrN5nfPAhn1GGLLeccywu",
  "key7": "4A9PuR4th4Nwjg73XNhJjqeShp6XX6iZmaNUo2UxwMPbsyDTxnwBctVGb42hi7q6HdrXE2YRXjqGtcHbXX9cnVFh",
  "key8": "dkS54mPhT89AUnjxvzTNrdz4J4pzPgXSH3ieK9RJbaJZFZVo9hr4SeUk5FndMhmDMbkHYNfgLZh17uG1AvLXDdh",
  "key9": "4CGKFf5WoCjd8ychqSW5FcgFWrrzZWpNL2haUFWpPmv8tbMD9y9CTE37dE9T16r7hpj4KVNBpCNhbmeJQZX46fAn",
  "key10": "Y9ircJ4WRtsgAutGLxQFhSUEJhJjrtzPeZ2hiHm87KByYXTxf9DjWHQTxBcMSjBNN86tphwj1QcVNJb8nmTXSfw",
  "key11": "5hVUnrYDqZuj8dzjejuj9XnRyYZFKRvjt3Uyucnug7amjn3tt3f4W2jjaFYuPvFaEqLA9MwGEgJG4KJmNTP8TcLU",
  "key12": "34x6AbUUBCQnAUwBEjJX2boJRChKVF7nH8jRbUTus2Z4SEgKB8QwVxfzR9gPE79tsBjJmAuoSm4kBH5KzvH2azeh",
  "key13": "65XXYr4Kdgv7NgCKiz8EhiH9RFdMRMaSQfABhWpJRd5u5aYyssupXYzsx1YFkQWi6X1mk9B2mKWzH82E4eFawS1S",
  "key14": "2vvsHn2dK2Ey2h4aX9bFgCHhoC3duxpmVXnanA8FjUJLbeeiUzm87caWAuBNZBKg32f2ptwVzAGp4fHiVqefFAfK",
  "key15": "5MmGyw1bsMoLgSeJmLdDvnQnuWXUdq45R3zCbEcmFBf7aRoGGQGEoy4LcBEEBu18UFzWfhbV2U3hpy77V9SVRrrd",
  "key16": "5JSr8pE3ptnp1h7LhzWzgnzju7QCNRSnksSrqyZbu2Z4vEZofhLpP5ALtcWpDdcD336e25uYtrZq2q7vsfisaopD",
  "key17": "251mJoisZBAqL5QpwStrSSnXS3vaQVDsJCshrmXx7s8fLFNqiLD73G5YYakakX1Dhwk1stBYJfqUA1pHbywm5djA",
  "key18": "5sNnTHDSoTtrzSq2tsTVXXyGYgwkZfTN1geD67hyHNoLMPcwaPT55Be1pgCPNUXjfuTvebLcRLpMUidnbMPzM4br",
  "key19": "5A7QCAQ7XnFCkZ5FwtYycU3Jfpww2DgZ1wYq7qiYauEb71vuPAYYM6R5iZLADeH62hLApUPXaPvpiDxu9mG2qEjr",
  "key20": "3t1Q33MfjqrTi7Q61P3hWmUq2TxzYL15x8sLvxZtufxedvTmprUf9eXssKJEm69PqnybLte7m5D6HBydtjdoCcxu",
  "key21": "3fTjAbpUofwDVz3N4mNKVd5eq6pPfJMz4jXwh6MZkGmEgAmLMHZqsKGeowvtxnCqa45xfv1aaWz2Lohg2xywJr7Q",
  "key22": "3B5Ss8VAeqttvf9ZyxFooWdETGDLmcSwAEhhacgHWYEbEpfMoSLNomT5zNcPnMQMHcaWyMmnvDo1Hj4FMrFzipL6",
  "key23": "m3xxtfJAfynK9S4WR3ZSgdqCvLx6nDppg4yCvGwE12UjTpJMH1QYxAuJ1pnVTL8C2mirrcC9Wq3wNU5ez3FSWdj",
  "key24": "5MUs7dxo5piDyPfWaMyERp3i8gBw6rGJBMLhLFR9LpJDQqkZhVMgAosWwQrBBYrqeWnH2jnnKnSj3VsVWDT32GZU",
  "key25": "2SRpyat7aPAcK5zFNaMKL1RziVcyQaM2N1YG9YJdkrsGFFDnmi963o62D48VpBARq8yKki3HXtBbF9Y5paBsU6JL",
  "key26": "2AqwwAetCjxq2MN4cEPKJcZfhSgg57L4GfutdDmW74toydW35b7yZVTT66AMLRAFStrzeqgcLQKML1fUvSPQKrjb",
  "key27": "jA2zDCVmu28ohFBV8bGVj5TnLzetmoWpUdnee3BBgvoQW7fmwggfSJJGEsatsKL5zaWFmZTE4crFptZNBTeRkm1",
  "key28": "49zYQipLcRz47hA5hTnpufNHPb1sqHWTvmQNnjqa995jvuHoV7zk4ke6mKbPDTcwafJCJfP3XiCJVp4f5F3LK3ZA",
  "key29": "SJjZ8fd5mF8hzmdkjVFFHFBKVhqufHxtFUbHSgC9y9t9NVovRkjJtdkuMoSvecuSfdL9QAqxPxz8Uc7TzW1WG3X",
  "key30": "4ot42VbzUqXYEqn8pWkoVWCMMHidiZTDLRGgcd56PZp5ymvQCfqVMHtgNSudmF2MqsZKFeR5xZpCyK4tsfVUJHhp",
  "key31": "4WQnmsKka422t8WuFxxL5jhrPEkvYuqWjRoazopwQpbaB4wiBacb5DzgommM2T7MLaqZKMwAQqKPY4QsvPkjY5tm",
  "key32": "53tVekGzpXPzYRsCsboNCfy74fpqN8G1TRJPqiHU8N8fo9hpfwF61DdSRqCtpuCkN82TpFZLF4Bq5w67rvpSLpVX",
  "key33": "2riFjnzTBX3N7CXNKuiGodBD1BnDgzZfEnj6ryE6ZzKWaoiEjMQMq4UD4C3NxyaJ5EeVCCHDGQXBroc3P8uhQG4X",
  "key34": "4xV5QUtiqn4nVF9ZWsDVc9Tt1UGZ2RJQEbrmqCkmm8f2unbhXjSDeKYWpahk1nCxNgmNXzT5dkM5KPQDqC8oo9ja",
  "key35": "2QygKbg3K7HiwzTahp4fVP24MZCzPJBARG4piNonatYgoeuH1vEbXquewzzg6L2CCQDAShRrQWVk8hs76ro2HgWc",
  "key36": "RHb55R2DMKK3kNaXcsWNxS1gGBg1eyjE2NbktJM6oykxV9XKhs8zdJZ3YJgrzzoeWEs5KRKyMN69v8FRpf693a4"
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

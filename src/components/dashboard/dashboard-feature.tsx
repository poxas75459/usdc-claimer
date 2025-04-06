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
    "3B2bVo46aub6cgEZT4AwYtLeGbxdX7ts8gm3myixo5GTGL7pofVJf4KkmfRnNDjrXvDpBMJYKf5KVaneoStHTzZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KHX1TNTP87yVtobF9vToJ13XGp7GAhhYWwiVEg9vnQ8WUgPLNsv348jf3sHtVTma1qvZxT51vaM2ypZPd2mf9E",
  "key1": "2JxVpYwBtSotYYaxj6NCkAvM8p2jCzPkNqEJQjvEmXvmsTvzLp5PkrFgf4fuUGhoqett249MNW3UN7mHN1YFVLPZ",
  "key2": "5txSBTQ8EKiB8Paxc1FoEHr1L4VdHqoXrpxBfGNLqxbnt7EBTHfMPbSi55qL3s5YK6LcMPYirLzmVsojGyEUHtXW",
  "key3": "4rR5hCrN7VDfD6FxSwHuPLtZrPr4RiiGmdpkPTTiyXbwu8VT3VQTQ6HhV9dqfEVXNZ4FJ7uhdGjbVvtcZSPmuv31",
  "key4": "5hzUTffNiGh6P8MvZuVDM9N9vBuqygwdcSa95KztFc8FK2ZqWDsJhw9nGyuDRTajjxniSGBvp846uKuNE75ZiSR3",
  "key5": "34RUP6tWnprjcggMYSUWd1YTmaYYAZFe9YwzSavaQ3fNYNM3pRqvGDSKC8bWYdnVUDv7eSu151AsemXPEL8qfsBa",
  "key6": "4YrXk7arAb4Jk6PYDVi1cKHQfZL4n9TBv7FRibBvs7Po8BRDC2jHAc238Hvnde27e4YrbhKkEMPJHe37pteoCR3k",
  "key7": "2sGNi4yqQLriJb9kTxdwhohRdm9WLf32GNBPqU1A1tcGA5gAJxKQZxMwB3VF7RhTGcr86jDdpJnqqoLsDeH4VnNT",
  "key8": "pALJ4eTkifNhvjS45pxTzzSh42AyJsu23BFcRNb2KHYBnTZMcnZV2bZaAk8dtGG5GcVuwX1p2wZPL5eHJgyypVw",
  "key9": "59QYN6QCzi99FXY8DvsSkzrvJigcTxYsHMS9azSfXGNaqFaVFsPw5m5Ao6jVVMWm9XTpMSBSzHMMwGeUV9cAqkrq",
  "key10": "5pw8dkYaVNen9PAucRTCxLHjZrGn8T1K7Ej2Myaj8Ywb2LKGdXZt6Zhb5UpDFoXjC24QcUW5zh4cUmYVqYk8R9U6",
  "key11": "3npSZdV37qNWJ97tkGW81437u4i57buju3SdrX2Sxv6PqwCFSxk7dpQN6ctedvcHcJQvwvtoAk2FZYBWGGRtJmBB",
  "key12": "xTBPDeXu9BRTx62rhapoe5u5xdU7fdsasradSBptADgHzkb3vtgdw9PKkStYSBC1N6HtZC6eTmAQ5GQfMW2YSr1",
  "key13": "5Wty4oTivz318DLHcwVZEz7Z4o6W7TY62tppmuR76kbH1g9ZNwHtaPcKULLs1RDswz5H9guT4pToDHoqPqrw3s6S",
  "key14": "3c8u38TZLJunCgAQX9w69wtij2YXKem3nnxdYSN2g9h8nG915QQ6K25ZCCzukjrNVVRAQSvv5pyL6pUaVtBGPM2T",
  "key15": "3ksHXW5LpVCBWs3pqYucWacAARYT7zBooDH5bCF3ivS9bQ89EoJ1M9FgekGpCZGTEBTvMSrKFNxYdoLu7CfSsMiF",
  "key16": "eHkn4Fo7EF8y85v8U4RvKC12fZdKyeVGRfSCouR9H9fbjZAh7ZnJ3pkejvnv6o37TV3tHZiurmCCdKccPcFaxt6",
  "key17": "2Z9SQfWgtstM5MeNk65pXBoomUcsSb8D8rmUbNNYehtzNZeF9PndHXPwLgFkbpLaytSrZYcyzXTnJBxsxQu5soLy",
  "key18": "3AkKMFxBnwtxND58zXCmgLisdF1TwMa5VNBtvFu6mzayVwBVhbGFsynpjjw1ao7YKrGW5vzsNz3NySg9KasaaUyy",
  "key19": "45P8ZXH7Mri74fon2ZRyajeMPq81jADiVqcRKQWANM32Kk5ghccoLR2ARj95aMRMDSfxcigVjk3A8ZMYh8EAVne6",
  "key20": "66tHrWfrVmrUwYb5YAhJronHNMnU4FnyRgZetGQGxoUsyp6j6HNxpi6pJHKHL1WGaF9xc58tKPxSYcoybb7EMC6J",
  "key21": "TNYHhNFWng5crbRR4S9UW6EiB2TXRqa2aAdPPQPop5dRngVgZ1hSXdP9ZcpyDmukDFo7d47d4MUyV1Pw6gV3Sr7",
  "key22": "3GmTjr7YsgXyMW14ae3VLcpR8r3qezEjsKAk3tYppvWRWyZwourjKShHRqVVRMkFDKh9AM8CuhzGHgQ2SbV5odWT",
  "key23": "5By7nLLVmEMtQPaUAmYrAYBoQR8WxxhFUFdxSfFSwzJFxMYb9idoJw5FkfoW47ypJ5rEXKysH7JLmXBD9x5XNvW",
  "key24": "285qCYAgFbtDsNZJifDc6EPYUFcLruoFtHeMUEuahJrxq7psyN24oCsryk4paR4Evgy25u3RwxMDEyBPk7ds1Nsg",
  "key25": "9pzt7mNmxexuDsVN3WhjpzRVr4hymsrygCwA29mxk8QrDRQVF6uiUPGcwaLmqZgdHGfHRopRzZDa9GD8go6pT4E",
  "key26": "5trWtsxh3LfLVc9qcss5XQ6ZnTsUd83JjhMcUhj7XAv4w2CazeiT8UgPGcvrfZrmq8q7585E3V6n2VismHHfc8sG",
  "key27": "3oJz5WBRomrXS4JbXxPgmNrbs6fF4yNTKDZymLSup951ximhrE6jm6wGK7wjDRE5TkBxUBVA386bgS88sVUUftVW",
  "key28": "34VoqzTvWE9TzZdCrjw85jbqE7ai7AQezZtcZZ2ktFYnjnrKzZyjwjNWsjHym8qmVppovJ9tT9Mpm2XHgYjFiXSr",
  "key29": "5cCtSy9tVPt3Lg4RrGaXk9rtftAUj19Ec5tNMZimM4JankS5nhvaupt4o5u7LYEEJUsjsgRNPCfCjVMkZY2x67RX",
  "key30": "47CyWVnec1cxP6Z6DuBQXUtekHYnUMazWYy32ZTQCnhpy1DkYRZsyYtGitKm97KYQ9j3LJbzZ7PapUc7YfKAS1wN",
  "key31": "4TW1MwFRTTtNQvQiXDE33dBxha2iZNa771NbefCvx6s5kdfjX185m6NGe9DxfSoYf2wNBzdBGY6uApd6VnUt7isS",
  "key32": "46HWyt7ueWkyoMaufBTP8bbTRaGZCnyW6gkH157jSAMEQ7SGsPvryphc3sudG58snQXQYJMSq5h7NForyq4kHob5",
  "key33": "5qjG54zFaGo9L2VhudehjNDxWyoYhiy7KGdjR6s9kF78SksARLX7gUXxwY5GVLUc8VgXiZZp8PcFvKKjqfcN196M",
  "key34": "2WgGsb5AWxKGmbn5HpaUc3hnjSLT5wrsWXe4TB3qK9qvGNgiWRsnYgFFraVpMPLwFjxYHFcvZ1btistqUi1Hm1EU",
  "key35": "63pFK4GCgU2SEgoYbsnBH4JN36F72oSWLwF4J7qomPSs32ZqnwbHs5ZNjpuXSX1LnTuwXK7UjiDyBWBBsjW3Fx2C",
  "key36": "4yFiswfeM87yu3i8ZWGvLsgj6Abtuc1HhYhqrbmd6VDJsG3bti3rukjjxh218UAA2mFrgYMgAEu5DGstD6CyoZFp",
  "key37": "388Kkwhv3A6JdiayYv9rKj7Y5Z1o5cdg3ZCAWzMhFeUbGtbC9XoESdYZSw73biXPpwtbX875M5QLte5kmDtDwCvL",
  "key38": "5NWGh4dz3PH4mW6gvwodEafCtVpscRiSPAJRmiqANdCy9prDQUbsD1PiZgMj9iwdnZENMTcd7yUQ6Uu3n7nmyDMg",
  "key39": "56R27PSf1YzUktivvGmNFEWHtNVWAw3cv1xCidDe7zH1b9quSbLQnMVeVCDKjGqiJiXMuAsrjFTsG6hpJJgRf7Qm",
  "key40": "3Xi2EwyAw6RyDYyNkpgTB4Fwmway2mBeio44KF2RQDfpv7zwB1beK5veQMMTYJsKDYpC2VSkqRkynfrgfAAvQfAR",
  "key41": "eNLGQgDgEd4Efo7bFQDftFJWxUu7zmRzwxAY6PKU4UfGinxgMW769DdRWji6fExphzCQR8XF4QE1soAmpbxdxRm",
  "key42": "2ajHNdrfZMb1vmTFDQCWHXPrdiZTCk8qpsG7v4XQDB1Hxy4R2RGNgWtD9jg8oRoP55WcGozAyeS46fjQRqoHZbKZ",
  "key43": "61ZGxbzh1N7X89KpCJW9SDi3hFUyKXo3HGS88V889p3hadMJnSn1FevCPSAAqh2Hs7eQuGNuwqwbmkLZ9DnTgwKo",
  "key44": "3yHLey6mSQnTumb6fMtaWn4kw9Hb39DzX7B9UHS66xku8QgVijcfEhoQAJdsQexweYeNcjzYgjJ73oFCkrWoZxgs"
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

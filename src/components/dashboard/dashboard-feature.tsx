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
    "2dQmdwWJZUuqxA7mV5AWaHi3obLR6QgsTw7JuX6qmeo9x11pSFBMJCm2WK4XCTiGLiwAacQoiDXJB8eBL97gLgMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hRSzSw4kfMN3QUYvgcL58nmW4z684YGJiHpaHsdwH3RovwJ2677GNLPRjDL6dK5rRW8FVE5jxW1LMJKNLSfsv2",
  "key1": "2bLtQDjmas2DAtZyYFrBzPYunChy96cFeYd92vqDZyvUNxRyk97Fx3ciy2cq8f9xerFLHMoefxjmNte4iU4iCpWZ",
  "key2": "5k8QbE7yhCEyNXrU5sGYMJiZAatyCuo2CoAVeANSuLsvHeTewbp8JcWw2p1iv6ANtLipKb8ECVaR2m4SUQmX3kNK",
  "key3": "pta68Sg5164HHHki5v6Ma1DyJLT1hgzEDrNVASYkC8r5TxYr4H4GuPcZzFpRQbP8GNon11eaCPKay9ZMFg1rLbu",
  "key4": "5HWp4q5toCohdFQdPRojY5SHBWZRKFw1VycMtmsXArPACAYWncyzVJNmNvqqdmUAo3qnx9MLgsEbAkPF3UwmUB6J",
  "key5": "2bDcE8Z4TaDtnVPGs7cd4xU6ekXvxupa6oJhNGeA7w4v8dfwH7KKEjw4EW9aM1WUNXYLzA7DqpWtCaKhDY63bPQJ",
  "key6": "2dYk64WN99Jo4edEmfwidPkRS3yESmzx9oAf6ZpG153St2EbsDMDuN7tsRkVw2t9vXbCLkX9YUQz8gU25PRJRDsX",
  "key7": "qhEZt5jzxD34swNCJqUrVH4vvcTB3Y8Fkh2oHf4wHH4AxtKPFRweYJBZrxqGY81LTLSgQo9zfeFjNMbowoXSidX",
  "key8": "2ZaYaean4VgZtmy5iT84rBQDWFvLd1DyLGt9uQSF9VRZzj3NuhPqLjJ9ra5SHEkkANyrTAcFhW5gfY4GPGMdFjy",
  "key9": "4n2PEA5CQ3ET3ZzfCTo8aotEhw3h1uoTgVCBTutXLZLWfXbUwfdfURJfwnkuxVcJjmqt2zt4Y2RgxtzTjTaNaw2W",
  "key10": "s5YHK41oscLuwWZtvh7ppPR1Y4yyxwspEMiZ69m2ZZiuzFUUumdqqC5poETavgovPffmeD12n9jFHDrwYM5Q9Qx",
  "key11": "28cPjxxsQY46iu9bCpnJGeY4g16K89YB7EG48QVyD6bqrTutkZL5d73K8PSpDcFGbLpKmSdMFGYet1BubuxLCiLH",
  "key12": "63xRvXecBhVMs5sXRAGv3QrJmQW5Z5fN5cUAfk6JetobibxVezj3u2rvgTtLQZPEpwTg9r47MbLakzeaSFuby7N3",
  "key13": "3Vz3kdyNRY94DMpaZVTSXA94hQeaeht75tZrEThAkG8MovUwmvSE1738YTVps8smfLGjncUvUeEunPTAw1FPvm3R",
  "key14": "LuLi2pqaanQdPy3UWQdoNSVtmBa79uKDrKL4pPRm6cRMaUiKSHUT2djuWk86kcnVE6YrYJwk5NmifGNdK5iyjRu",
  "key15": "2afP35t3RjRt6ajhq41jPC8GBVhQLxnem3rhuG7HwzQZCgX9QBHoSAQ7LRhLfoUj1ru4XunwUbhstaw4aDSt1Hkc",
  "key16": "51eqrPhbTZef3wKgGd8Y9FEQCUXjjNiuaHc6PboVFJLTS5ajT7TXB7zjQoJFnvng7bGmiReBGCn3NcFp3Z3sRHFm",
  "key17": "3BSmZBNJReBrycboZLnodNvmUTjuqpwFVdJYvq3ySndw4cJewftqS7xXvRUocxMtrzT79sRZE5Hf152gxq7BE5k8",
  "key18": "29GCVQBKZvD26GCorE92tA8NsMXCRZ7FVheLbV7iCGEg1YGx3iWgKTmMjMZYn3nr2aJk44ZKdD6tLsiJcrtAmKhs",
  "key19": "5YMNTTCKj2nubNFPwj1LMs8duoCRYTQi5wLCAhNUcBe9izjzv6AbyA4vaWTSFkEb1AA92PWSJbuhxpeSRe19MKwV",
  "key20": "6bE72XZStrqxgRGbkiFa2SahqRPe6LdHTCByukGhbs6TJ3DZXqnQXoFgyufagx9x1T3J5YTVPsSqjvcL9bH2pR4",
  "key21": "5kkPjt1grefpRxQspjo5tfeuUMvq29nyHZgtHrtZcmwwmPUqbgMHkeu3j6QTCTLJVMBtyo2VsputyJCriRVkBZtg",
  "key22": "2emKU3NET4HoDmBFKUPUh7NAJmZi6XQ3fmrzgvh5AjyE2fHbNTvGZp68vzUVjGNZsXRYWFPAPgcPwMtFgX8qMjab",
  "key23": "46jEyafA1okcUEBqqSeEPPJgdEks2eu16vrumQRrwLE6EtgBz4m2AwapYW99orHP4C5P8VGhzb3YKx5NtCaXjmXQ",
  "key24": "5wYiYFp2zKcxP5N7EJWF7R5TCUMbRWzXeEGbQy1yeP9fDqYA8NMwcLZr173FjqBm3Dnt7dScZAJTs8HuZ7JSQh7t",
  "key25": "534CJ5W5pAksbYBBNieMh7A84Fn6ZhmutvTfCahnD7nsxfqyu4MWS9VS5ShXDPbvT7eP42kZzysiLsXo8tjkKeuH",
  "key26": "4zxuhq2W13tdCG42eXSh5GKeTYJErVrQr83EBQ6hwa8fibbBNp3bJQpuDq4QaHSf6kpMACL6d3PgnVaFo3kFmCa7",
  "key27": "G5vRmjXBnYLUpjkyP5rRRXYZyUWkAuKHJcZd6vnE9ygfGTSs2gyhQtm68Feo4rFXfSbPApwzaKGioBbDAjnzmy6",
  "key28": "2C2QT65d3hbE5vDWv3xQLuGsmL7EXh6qd6ACU24JD38YjB9C1rKEeXMmy3EVX5a6Zhv3rjKX63AsspdMYBgzqzdf",
  "key29": "34CCqNR4BDePiLs5XGBMheGKSca9TNsjbb1nPp8fknNPvb18429qeqLaeR8bU5Gpr2W4YiTxzn4fS4PCSsxQhBmg",
  "key30": "kTvXk66Vtj2VsVbnGfXpCegpaSd3Hj4XHb5T95D4jWPinRUiTQabWWUCcyZTGYWYFsu53ReUyruvbMUb48LSGXd",
  "key31": "q5xzDqcQWHEsBKUWkVFtQp8rFZox7SMHdQUhRYDDFaQxZqTnh2Ho6Rwag6GLaLDC8WwCMMeGijtBLmPsH2gUiYX",
  "key32": "kaYX9pi22wYW6wnGZsh1E31uvGcDgBBhqgs9sZLXBjXktcCeXZ7EqCsy6V9nJSg4gbdzmmse1UnU5NJeiehUz4E",
  "key33": "1FTWj7ME3QEvFJDZPg1VzRYehVubmj9hRsT7YBhUG2MkBPFHSXk3J3pGWPyQy3ahvbnG2NsNRjder5Jn21ZZtRj",
  "key34": "2CnV4qFULrxj1NCtAPGZZfL9WHG6XuiN6VUGqqwDzNztrj6EG5JDuEfvBHPU6fmtHZAZs8H713QGT7pCaaoGF1YT",
  "key35": "5j3o3zmFTqmqwNsGanFZGvz1z7VMtwpSedhhKgiUeVUPqreM14FsfXT6BbgmcTN62A9Q6NFC69zBpRDp5ZSG98o7",
  "key36": "eksnFJuXcRzGhJgEf6QukRjXNj7odcF4jE3Q4uHWZiFjXRs9QdKaCML5XVFKmVwXPDkmTByGrDYpZrsbM5T73Do",
  "key37": "2rrBaTDVu1mHy6RwTGj9tFVPxkF8hSqkrJ6MLUHn4PCw8L2uHVW2vpBx1z4Bsru5XZxbFHWjF6FCCVjRKooyHnXc",
  "key38": "67SyD2GCiZpFMe5AcEzWZQfn6vQ3TVMzpZWGUZVyJzV6GBxaXaBAvFdsrwBkEgmsqmPZYggjgxwAGZQAtL8D5Sbc",
  "key39": "ZhAtcTXkycwmav9oYwDmV4zCfTW8PrDypxFexLdAhhdwBga7ihXpGucgeFzWHxSLTmZjQMRJeXAtSawkVVXkYmm",
  "key40": "46BQ1jN8YXhh9eQ4F84icUTppyHHzbrKUMaWCcJoHLF8e9zybEh3oWJTUR6TP8JqZWFjEYRtM6aydJoywG9R9une",
  "key41": "5JyR8sVucMfP5pW6wFyqFgfF4gnDFbLd22nhRw2XmneFv8J826YXkGj5DCgeFeybXHmbqERso3tg9K5KM7KVqY27"
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

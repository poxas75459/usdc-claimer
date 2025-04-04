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
    "4yJ52VujzwtWPcaQ2eqo8vhsopuDsMRRgABDuFiCR9NWNtShxzfrD81fBr9XAPA2ryz7xxtSaTg9Q1Y6CkCw4FBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B23q46rEf3MZgZ88T3xgYdqiLFXgayX7itAFAPZ582RdPfpcD7Xvq5GBEJ1iNJrhrVyFfD3HGs7AZL7vKYWZKFz",
  "key1": "3S32Zab1y3oyS7wYCMWqHonfNDYmGSgrrGQFVp8izUn4Wabpky4gM47D2HWq2UUZbZhnMd5UjnScMddPMGLLsfJY",
  "key2": "3ZNvsGcjwH1G5JXjPsN8XRZwrKrEmyNV8RqhUUEMVCVJZz4gfu8qECA6wRkP2dbDooNKVTJLdrGqJELpjx3kcs7",
  "key3": "3Pshp4x4H3nM97Jt5SwpHsAkSTHjvHpTmn9q7Yx9yTvTNnX46f38yhnKhtDnBdpYmAvQmbwaZVCYQ3VAkJ4Exvso",
  "key4": "2653TTXZQEGK23sPyPwA82fnSiRKfKGXbRU15YGiv5NqfEs9VN6wJ299BHEg4PDcN69pokPWWissBazZVDJKoP2U",
  "key5": "4n3XVkCgoPcPc1L44ShEsBsLzZprUuEbzVpBQP1K3HBFhPwjvfrLuFK4E2Cqq2daUHUvP35YdNJmAS8EN9d4uxxu",
  "key6": "CGPt8ht1WEXSSNvLw8KNTNVayKCKUs2sMRxa4VB1Q6q57GunthkVuDwzpV8i4G9Cpy7gmc9U5A9oomyHqUw8MoL",
  "key7": "43xg2VKMiGRudmardW5q8HAz2MuqgQGLfVmoZPGhMkiFndFUHZcoHufq89aaYic2TRWKHERoJo3TAd9t6Udi3rT5",
  "key8": "4Ja73AH8F377cNA3AjRmpsmQmjDYjeCDFa8kugHiMTPJ4B7R91xfdTFLyDDR44MooHxQtks3r7oMiB9Ujr2VUj7c",
  "key9": "bkkPhJstx7w9cZZ4sT1q16UunA2wkXd3EHbaeGEh9Hb9utqa8kfkDwTh1mNcNXBELJaLe5tQvYQUnpxo4b5LQvB",
  "key10": "5oPFGLU5tL35gEEZqcoW2WekYey3RE5uDYhaLcRESEhW7U4MEj9aeV8YoPfKeAeHr5qoYK5KHpKM4t3vqLyrb4qX",
  "key11": "3iQQjzvW4YaHiQNpwzGAAGgDEEtQjVrDXfYBAUtJdabhf533pJfZUX2oRQWJE4uK49STLQWiiPcbYc4vUsrbDJ3r",
  "key12": "4FthySCDGtBZ3Ufw5qRqe4dUaKAXrtk7YvEyhrqiofeXC8Lq5zxkTcDaYNV3MUd3oNgR4YJrvi74jW2Mb9jdta4F",
  "key13": "629YwmqNppFVCykDYWrfaQtbPxcGAVNxJr6fivFs1eMYqgqXSuQ4FH71cuvJhXGbTzvnsx5d5sALG9ifzjUPgX4e",
  "key14": "4DYRHx1kfjfe2tsxXBRv15DZ1BH77aRC5T948JtLUyT5yXzFB7eQNNjZX8bi2GtR864PxF6RzxBEhFp883Ci8X2J",
  "key15": "2z4jJrJMZH7ArDLs9sEKmji2cSJFJm1wDfxY4vXZo2NncQBuAPH4zrVzoSR36droPcU68G6Xtmg6WzSWJkdSUHaR",
  "key16": "4VeTeP478bmbEzATh49Dgop647Vd7exJiZt2M9x31ABiixtXgh1ygtMYv9PXEjHQ4ZQ1A8FJdMSKBwned5WVkF3W",
  "key17": "2Q4bHkqcMYnXAdKiLst3MYmJQVkJLb7z1tcc8B3c3kSCAJSMhPE5UJQZnYkUu5Nr8CQX6s2qej4rV6b5G9ZUDZTp",
  "key18": "3RxgE8RhDYT6N7yT3jNNk522gfP8WnVo9BzCk2gr8jayKANVH7A3DQzAje83QvaUY1xoFYiSYkJba6CYwBwcPy5M",
  "key19": "3wzoaVbgxASBinP5yo79EsqgMYDmJg6HryTpnvXtMUpkmDyBaBSanB3UeDj4CmXfoLpngGRZiJXa4VLUj2Np6Q3V",
  "key20": "2xtcX2Cr9vKb1WMvWYMmzJc7XgMVTCNRcHVKR9tFebMk64iAex18bCZ6awe4mJv8o8AJpAKybR63u49yoUpGXoYC",
  "key21": "4A9BeBgJNUbEKUBtjR8fmBAkm3itnBYFrLNmv7EVtJNJgoAwdjUphHfq2HvyBN31S3ehvqatw7GS8aA2SYnXKhtZ",
  "key22": "5ZYdRjvq3RJc95AP9cfF5jeJaUgwgKfb7AGixancMgFwN5X7yLVTTNtdCwpeXSRWT9etUidGNy8uFVjbckRHvyXF",
  "key23": "5Sm4X8cpVT1fq8sGv85bJGMjyBdZdaPftZze9W7rovUCneboikeszFdRqeSBQHBbuXfnQYQobgKUcXyaS9igu8yy",
  "key24": "AyDksD8Ec6yzJs65SY4cRxtBH85UycEP4hoZWoyL3zTnoaHbTBJxrFYCxgcFpq3UfA5qMcYyW9hbdonpusYz3d8",
  "key25": "q1ywgm9t1Qbh7G5a89CK7RBaG5HCER3C24GteQcGC9wNqQXDK4aAri9v5GCWkGpQ5tCTcbt4cQ2Kb9cgxn2fRy6",
  "key26": "3SVxHn6x9KE3XB29cQxuGU4d7nipKURfN9hQjTUdAYmgdJ2qUE2uABNFFYcNSXVPRrhMA6pSmv7Pdrx6gZ91HkPp",
  "key27": "dBs1UeqkYgfwBNngg6bFxcxXCXhz8hmVw1bor1TeD4bevNgpT916esgi8HKahcVhkCmyrX2NVq69AsJwRpd1GAH",
  "key28": "35UKKmGgA47NykHsz3FNMuyuP9ZsmowkzcEV5SNyZ7NQ6fTNEBqqcnumkFuKx34jQecnuU7LGasrx74ji5ziZnmJ",
  "key29": "3TExyfTsj9WYEQj2mumEqAA8MXxT2tDj9JYWwaKTgHvttyMatHVFMLBCHFsL9AaLh52FUEDYQEbgdoxWhmRtotgA",
  "key30": "4SBhAEH5YDGzv2Zvcx1AUgHhp24b1BYPdw1oBKUCVD8ow6dm8mCoZ2XUma5DHYFbwuTN9mkxVb32dxWJ78gqHVzD",
  "key31": "5JMgJnqBRCicQ8FnpVN17pEQfs1SXitnNob33gPsVwW1hU8ijikUTKqZ19Cn4qaDQRhyGhLWxp9wALi7TRbYdhPc",
  "key32": "k5BYkgudGD6VAnvwUofvncGN6Ac7UQQD2VYB5p2A1BVQQh1kh1Q4YmifNukqZpujjhacHJUgBFxYeSwVNVUwnGo",
  "key33": "sGVUW4VkzyppyJi4hqvJGn9YZeh85QAnoKbh65STK1F9JPuSwomPGTcvh9A8PTXPm6v6YdwxyzzHmE2qbU2Nbn4",
  "key34": "3mvmvYDebQiXJ5JhP63nkbhQ85YnqbM2rGqMHWqFRXfaSbHG4DS5YfnxzqapM2rfaxR6NU1diWjsesdaqpRvdqER"
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

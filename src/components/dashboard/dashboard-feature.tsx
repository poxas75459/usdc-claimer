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
    "3spMyotoZoLqF3oLmaLspzBhtEV1TzFS1MPzRQUcqs6Lq96s9PqptAmKtG8x6pw2ge2nhgALVxHFMJEVQczKJpfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HEjzehdTD53bkG5jJgTiehYjrNDyaMb9tut6VeRNt2RvvwAYPJu8pvsxj9sBHSmNmtDoVScDGRGtDVstDjnzUjy",
  "key1": "2iBBX7dbBUPPpE6MNaHBgGFzV5PRioF1sLia5bxnNBjRGub1hfZXF3Bars5Gah1oyq2tdWywkoGVqBTDuPFtL4QF",
  "key2": "4MfcCDEGoq4uvrStAkeRsDbYgQ6k2yhnmyZQG169JCR2KejBSMQEiD5bg8QEiGRKvS8fGfi8PJKHvqJKnrYNZ7zM",
  "key3": "8MQYyKQWN3szWAPQxnRaB4QexSAcZRHXfcpmBynZt2McSeJwkDsHo4ysTYFsyLuEi1gFuAFDm4HocHHFJyZdsgr",
  "key4": "4hio24bmjsT64Zm1LRi9wFab43raGpKKQbxr4T9NZkjbbeqB1rf1KVfySRZaVbV9wJLjD2mp4fsaRJsisSRaqqbk",
  "key5": "5EvYMKQvhSKxCTAqENovoY416RuRHhsWr5AmFvsq7nmaGQTH8HoTP32KbfapAMgYJHP7nEQZzx8VfkPH7SYCPEzd",
  "key6": "2JJs37H3upV6Ukr7nyyHxNwJ2neDTdLzTSVntuVdaLHt4sXGP3VNZsZzDunGofsZa45Af1fGYEjTXtgaVMAPSPU8",
  "key7": "25rHPHCqCzYcnPkirqpVJD6i9AKMf4xdV66PppRUneyHMoktq2F5RipU7R64Lee939vnds9fPrXoSdZzB8d7nVej",
  "key8": "49ZbS3C72pgryBxsTm2g32kyFJhDqNVkDMgWCiCvgS3PCyeWzmvv5fNJJ9JRmMzm5G6PhfGmYmiQyyEWXeHLkzkt",
  "key9": "4cUxYMsvqNfJZarZpsa9yKmYSwBqRiqz8NkHU1MVxnwfq8FUkb6tHZ77UEpKw4gbFGqDhVK8hhaXFsYMRax58E36",
  "key10": "2pmhabu4MVnx8AXPWJyFzmQpy86fa12oyPRporBRMUxdryFQAEspu3BHuKX9nYqy4aUqx6hk7cuxrdE3uWzkSY58",
  "key11": "5cHJA1mDjGpPyc4An23ozF5NFisYbQK35tNfvUQSeYrz22jXr4F1PUsm5haJEXQf6rRVMcDqMRgXLTLe6pZ81BSd",
  "key12": "35AqY57H2R8xgYhwvDYMyzVKpA627RkbNNt6jb1PYqdAxCTTtJoYocqWCVocThmnfkVDKy1G7zjJarSic51Cz6SF",
  "key13": "qXMk54h1fq7bpStQodjDAYcvNKu4moZstp5UHkGzrS3MgdJoihQor5UUoRhHH1u391m8g77nFpofw7mjAir3rwi",
  "key14": "4Ray7wtchQf7deBgukgAm6FaCtV5tRyFdJVx2A1wp8Qi7PTrXfbY3ZCyKqHwuZQJPJa9cAqBp9CS7UumSmxYrfnB",
  "key15": "WbkX2oRA5LZXFWFTRUGrmstNjhG85667hBsBHhEvqy4q1u2F313NwPPWFuBaVgGxj2hcHV1cYrtHAos3fxBrgnE",
  "key16": "4fsTppoUGPRQyjisaiPZ1TLc3fXPLJiwMju2DB1nNKJbmAZtGCSPgGBWo2LU8nmQdYcukuB74QaXK9Qk3NexcSjz",
  "key17": "2qrm9p2eV8XGqXjVca9mc5kv7q1BG9VQUASP7dF8NbUW39ximdBWvJCGG7HkZ6b3rcL4fNmuGgoMdJ8W1F3fQE5u",
  "key18": "4EHqp4FFWitgHs2NcrRzsfLWYxs7QK1WFR92qE1Av3opSr5atf68qV3cB9eqicvAwPfbZsCb2ABaTvBduxk9GJ5J",
  "key19": "5r7NFrHZ2wiAPDfPaJm3VquCA8dUToqiXc13fQZS1tpvmrXUiKPu2EqrFquyRmE4awh3v9SN1WXUdfP4iZzybCZs",
  "key20": "2JR7ryNL7J82SHKj3vyWveeMXVzbWGQViBzgQDk41NoEprc4UayWiUWGa2dRd6uCTT5eaieufQbh1iS3Y9m46QMb",
  "key21": "2U9n51CZvyP1Qeu8CsLuPgNrpAdhT53KqqF7KXEMzi7oRwdi3DzqWrmkRQwpt1skygJwE4bUtXr544MpFEwcyqWT",
  "key22": "362dsU5kT6FQE2rhKk3hwjEckd94cyYNLvrrEkcEf18jFbZkCnBGp75xdAQebsMCNGLm69w6aPzYMmStgRFDyitV",
  "key23": "3kfrWWF6WMvdXKKKAypaC3huY3sa6Cq6bib8ngPCondyoif975YqwzTnpbMmwwZhwxyi4Ye7MmFsqmoCsTBBZVhc",
  "key24": "5ZiVCCLPU7zXD8o28VTMx9JrEN3fLqdPrN5fzohLCkVrQcgJfEGqdkUFJJZZTvbCCciyr7SoPscZM8SEkpb4iqHB",
  "key25": "56mVG9KRM2eaq11tZTmQoThyFFq6Q5WJXR6xEf8w4Wxj6FwVizkcUnbCjg1vKD3ZMkLfcdcShR3fq2Xv1Cxe7nS",
  "key26": "2BRRXPtzjSakDts81WnyEwtox5AeYdkrGzEisk4XS9iwKVDZ1LaP2yvpiqt2BdZTLH4h81U52a2YuWwAbY4Qz6xf",
  "key27": "315yZehhdnzKMCrx3yFkv56Zcnuh3FhL21Jwa1yAh5jZkqApvXPhgmZvEP7x9DFYBvqRdE5785939gb4rnCWR7HP",
  "key28": "4n2bNQ79CR4FcwVhsCpDztc3P71FBTEjepx8QdGFhsU79UVDDcZFQDnwA8ZBETyUNb8zGQNnYaszVByUCFqbnwaT",
  "key29": "36HSMri9kHp6A2fw7Kqg29YbhCmDjypU4VdSKfDnSdexPT2McxEg7m6zjfzAqh7UBRUNwEf6B4tB53KNVRpWxDj8",
  "key30": "5K7zEpXhH6NyV24f1nPM5qb9WLXJY7Yh2tHmreDCxjre2j7TzcAT3PQScuUhyCATsESfRtVsZvBf7SNq6NkttSnT",
  "key31": "3Qz7dX1b5QyhVqhDJTeBe8hH9pDiawffwbRFMajB471jqFSoJruZyyyMVDu56dc6r9f58QNR6nfh8con6Eai5N9S",
  "key32": "3fXzBDiVQ7vsarN66jzjupHwKAvdhbEr35L9aHkvEW35ceaCYqM3XSadsxiH5iZwnF1uMYJG7WR7JivfGNbFtBwF",
  "key33": "5vN2RH28jLCGR1VRfFuaZZ5q9wfjEddbiRKPHNxQUoNz4r9psVHLuUdjFGq4kRzwqg7RjjaPVKXpcRggWWuVGusB",
  "key34": "2WwJ9jLCZTdKLYoRfSGaVaQiZsmzzs6a6QtvLngiKXMYAiFFqkE9V1CewtVATao3NGLbzXZDqGX4prwZ9QQV8ReK",
  "key35": "4ZPQmHTVGVobMU39NUsJjShKw63ZtJYR9uiaStH1sHJN2RmQ1EERXAgpi7J9DNnJdMXmTnFxh7tJjFtqyLTKCPao",
  "key36": "htdvau6e1TeRAmDB5kooni3B7bVdaHdkHufoicjYAP2rmYDXJByvD7DD6FEpLjzCbxyZb5KEk7QYrnU3CnMQcJx",
  "key37": "2fACcWXcZyDRFRWftwvxUzW1GLAv5zBnAo9ukfDtmyLqfyy2CyTunQth2eRugqwQaB2gLM5r1HEMW9Rw4KbZngTP",
  "key38": "5ZPqMfowe58FQwJMiHbMtQgoQWSeSyNVnKHw3UnTf2RdEQdkzD9eXSC9NtAvDVzfYQyXRKTh5WkZGzWeGBXaD6oo",
  "key39": "Nj8cpYteYyicaLhbbteswg4fcZJzTJcF2cfHtZSLdmQqyxNjYMXZX97bkhPLsm6ukDfBxTvQ7XyARNUTdDyfV3U"
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

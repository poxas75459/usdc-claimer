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
    "ZxpRtVAxs7ShYMXqumDCtV8r9qSuu2d7nRLnVWXWgZtmqbU9Me356gdgUccPQ4yKLwtgVHXL3CohyGNW74pmw58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFZJzrDaAU35uNce8CgPepPi8Loo9grD4usakdU2kYf1TbbSD9zt4gms7HME5FiGVuaLLsLbWQMTngkWy9yNZZz",
  "key1": "5TeFgdVxDMdMsseh7zJbQLuhxWw6SrbuEwRzThmMqjRAv1twMGKjmihUkytsCNcuW5MXC3RMgwicpeunEpVVqA8E",
  "key2": "4hHGqUWdmaoyVHLiB1sT8HJZKjj956KwWEHksWGDVdy4HLP8ugdXMgP4Q46J11fuceErr7o9TMMAJb3WH4YDeQwR",
  "key3": "5RWhJ3TC6yf189nkyuPDqeAQFidiDmYwz1SLc3kfvo8GzeoLMA5MzDCaTHorWWWXxEDDwX4Mmsa8bxaGw1AgyCA",
  "key4": "5Fmf9KCMsQKcUP1WsNbYdyzkhoMKeSMvc2JqyV7kpP6wy5TPfuvp6Vm1mwf9RsGAm62RNyySvdnLZktJMZ33yGrT",
  "key5": "yXTjVTLjyR1wJxVeWomcSPNETgRiZbzijVNRR1PuHe6pXx7wbYmJtYwS8MypbQ1qnRBhqDenKrMwak6dx8toxuD",
  "key6": "58zbdBLkvKyKsUN7FhwQFwExu1nHN3kByMv4GmEP26WbcpDVwzHQdpZMVjXmU8UToPNsXks2G5WUbrPzdgLswP33",
  "key7": "5bE37tDHZNDAgiExzHmWbFFc98PFu7XMS7hEwCRY8pp828Ax3U7TAcgbeiteynLkcqrig6Ln4gzS8FxgPGk6Jk5R",
  "key8": "3myU2pmhrUqxxervtiiSnPvJTimPC3r4GQLrAnjaWzfo83rJzfb9CCxBiLYs5QbELWYzzxfec2cLTf61qvPuZF4F",
  "key9": "21V2tPDXFYHGr3yYmRMuV8GVPpD5dBM1nP58DvFSARK1tgEeFA7fhAuQ16HKJy29WD7UG8T15PeQKGwm2JSuWXVB",
  "key10": "56QZtNoZVArEnd1b4hbn9u8ywdYyEtgPd1bjYxsTpHE9edVxQ3UTH9cQFxdsptuG8VzsZbgLevUDHFjKSzazgL9R",
  "key11": "64cG4yNwv5KptxVAihzjQA8AhxACoKBg4hCV4n7WJUHQeA1iAgNkb7987GMfiAmVuWSMLYfTSgGjXHdVYkpbRwoB",
  "key12": "3deVye5YKqWFatauQVdKhKxz66avdAKM5ZVYMpC8AcnRYEsqT27wcPRDU1JR4VFTWRHt1VQoCBJHTCdviEnC4BS5",
  "key13": "63tep4PK663YSX682oJ1k9pyrsPZHPf7nBFXGZwxTBzdyhXMKrbxN9DzRtmxEvR41kugrtHuf9h8fTiUjSkgTbCc",
  "key14": "59qUZk4nBVTywf7hfdrwVcfLDaoPYayDe1pEiHr5hD6ZTDZEtKiSdn3258ydpYR5ViQGqUExrpL6iMFZiRegD97o",
  "key15": "2Jy1hZWVMJj6mM5K51ZZCq7JNHkETQtzPbw4DWM6rD1kDmG77JTNqFxvujobb8hc9NrTFaPXayAucYas3yN7CKGY",
  "key16": "iBjwNpVwUu85Zs5TZkjhFm8uBG4aG2oB2LoAhuEg5ENfWBTtA1t5JBrZcPW5MBJZrx6fwxi6PynrkhcFRJbgP9A",
  "key17": "3BdURNGYvsaNtwTK8WcHXim954CiqGt77dVCaPiWNWbidRMJqJ5YRTjo135qqRrre36kwWFjAQG7dTZobH12FKwT",
  "key18": "oHQqt5jq8eUcz1tLG6c6Q8ztsGczmgPP7W5enGoCaZr8Su2LRw7EjvXQ3ZR6n9h2nssqETYkNW2bYRkDYjcMxEU",
  "key19": "yvTt4DHULHKXTYZMZ2LCZQhUJaK2bGgXkEsPpzkb3JKT4uEXgUqS3MZ8T5q7zGdMesVEfg68Hfcq3CJGyU4LWc7",
  "key20": "2sXkp3zYUyCxnLaZuyqyy8SLwY9NiqqDV1N2dzFsmpSugw5rFftGReq1Xo84FQf5Za7Nmctch7TUE2EQYkTiBS8U",
  "key21": "2ZY4JpW2MduyLkAKCtLqLANxrp9wSqMXPhS5UajRTQsNZVgn7qrHBD7Lqs3H8rLykLYmsviWd7XmQK998rbgjmM4",
  "key22": "4tdZKKptCww9EXJEpmHvQhdwQqVqTNYqVA8YRbvqS2rdpWv86dgw7aQ6A3M7cXa2LjG8MkW4btiGJFFphe7sbXP7",
  "key23": "49eqf599PDSLTkYmMe4tHEVkSFdWRWTX2DpzK5nuuFxTUP4FhrWM6QN8apcY9zN2pRyDqmztmL4nMs6WrLioqrL8",
  "key24": "3Z9W3oX3PEuwQPzECuxpxQEabvMtJd4vVwB8x5G8UbZWWZPyBpa6MQ7fy9ZqJTxVK1HFUwbhkyUytsvBfmAAQSSR",
  "key25": "2aZUE9jPR4ZU26qeb3iqCGKqVaUyADzSqzpAbU4hubmdo8Dhz8x8anFKr2T7p7uXZGVFoFCayoErTSnwZ61fatBj",
  "key26": "G6RdtwLjsPD6JqM3JJf8BpHwuYdWya221K4eyUmAKoUWca2bCEbuCW23WDSoTfi4L9eaQukbZAK6mxEqAnGCyG5",
  "key27": "55rutNoy924Gvjkv8bL1kGj1JBgpKcScSj66MxCRWHS8fven5jgpigEgRRmV6hfDXGtyvFqFybJAyRTuzjVeQqVn",
  "key28": "UYi1gPBH9tsfDkW8actGFEqDPhc8f5f7V6keXD59BahhVtCGKKVFtKzyjEamRzvdjbkmBb6W3sA4n2DKgr6itoV",
  "key29": "z9bjQTWQsSvP6K8WfmpxrTHL7ueJKmgN8hPXTh5T5bCBn3DitUXzDry93KcTw9xxMF3UdY1ZSGmotpY6zv22eX5",
  "key30": "3RCMaRyCbapzSYPw3w34iYh8ki4LeoQq1PcaGpJfoBGFp6J2TRqRciA8Ann8acC2kHSRFhzDGscBRtMetNhJ6bgr",
  "key31": "4BXkdJziyW2SqS6oHGMLBpEt7DQBPorruxmPtgfAzBRCy7QofWZeVuurhuwyw9segAjD1b1b2LrU5R7eBBxMXiFD",
  "key32": "5xppctGeRrgUHQPSqkvbH9UdaeaUTzDbG7vfaH2hwsg6hJUjaRjquemxYWrhjfdzHnT7yXbRBb72uRdqXVNVf9hQ",
  "key33": "2VFjfBj51fkh5wq3j6iAEdDizVpeyTdf6PBkuQCzycc1obusYfJREXuK1zp8tqpuTJst6gYzbQNjwwkvnQ3kumJB",
  "key34": "27phK8HncCVCfAhDYcK7Bi7YHiZ8aRM851xNfmjUvBga8xXbQxqzJXhmTSib6j2m9RKTiXyHTDvHxkmLs3BMeYEd",
  "key35": "3v9ndmdN9Hm8rF2E5z3nNa7YhUmQUAuQ5VKhoczuMXZjM5njaWA2mFdkMQG3B9KZgw9VhUZk4ET76d77edq9gAqm",
  "key36": "554k81r9AgBQyZdoayuv4kmZkK9SHg1vpTEQRNijM9U8kPqD4akvVvZ2QEq3N8TSPW4iZ99491fc97nCLCeyjt9g",
  "key37": "3jxYxwaNKSCUn9roS5dr8csbjL1bm3MWcm8ynPoaxjzY8trAf2UHS4MJSHKuR1ZENpwyCq8PNKFBUgBpz9WW23EJ",
  "key38": "2oaMg9Rr6auV9nqwuDbxK7LAKX3PCc8gLgNRzztCeQncKR7bHpinHdQvQbrT3k6By9oDN97Wfp3hn5XGf7CrWVjc",
  "key39": "3Fd15yr1RR3H8rhjn5XsJ7Xiva81ea4HH6XqhBL1F3WXNakKaopqutG4y95pMYgJY3Sy6ehnL5fF3XgRc8Q8CG8s",
  "key40": "fC8RU7eAAx5aEYeX5s1M7ZzVhTuWwR2AA13t6ZMTw3TAMrr8UaLNU3v9Y1xN8sP9wE9AHn2XoheHi68ZQoR3AFu",
  "key41": "EkhsdW9kKNXNnXvgSMF8Jb177EDQ1RES5JeuNJQN7ZpXDVYiuS4skRd9PaNmPZgmjSQfqZCoJR23QdXBZqqiWYz",
  "key42": "46TGACQtX4Nt7MpFKNdZrCf4XvxUJvqom6vPhnZ6VWp9rCPgsVUPLX7LJceqcQ6iFnwEsrUandXQY682USSEPrHz",
  "key43": "QfJbGT1d8xB5vcoPXCm7hUjdjmkWcxHUTmNzfBxJff7LajLFNDZVnaG5qvhhFyABaSwFPX9jU9TkopXLBCQW6Ai",
  "key44": "KwqkuH1T2jzaKPnW41qwNf58qnWfAYmeg9jqAphVAf7qXJr4L7c2nv2AJAVRuCYccGP6TYLEx7gahhdsdEHr7Da",
  "key45": "7fis8oWF2GDTa27BA7EVVN6b4oR9aSnamVtd3YqpaErYmmo3vPa4TJo95yNEWzrh5vwQZXy3R82xd4gEC2i7Cau",
  "key46": "ZUQy4qNhKcMBtdoDuLq5tb9rHSKicAMmUXVvUU5SSzUhvKi162ktY56tabH27jqxjwX2UuZhgUJ6KrdtHw8KnpG"
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

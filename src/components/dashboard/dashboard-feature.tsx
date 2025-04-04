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
    "oq9yGtwKaRLso9smuxqEA3gpnexBhkRu58yDU15eGnkDhcRMR5MnsRTTvpRpmQJaTFkeXtCEf225B7SVaNBD1Zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RpL2dNx5xuznPPqRi5U2CVBMrLsuSn5RMFvUMPy26byEzyho6ZJcuGHxptm3L2vGFtSmXQdFAVD5vng3YaA2cw",
  "key1": "Lyy2i1jhLXpBUuNJVyw2kcLsrQNVCJLQi3Rw7GqjycU2N3UmfFsXVWVaunPPVEo4mwgXPr3TSHqGK4VrUhgDgiF",
  "key2": "ooheTpRjN1qBSgvviXDSxnxhq3RFJqnVQSed7LvKBxmzueksq8E4xuanTqE1eEV58Rq2EBVgaTBcsTHdSNzDBMs",
  "key3": "znJgnB4pAV9bZ8iiCM8yMfKCR7A9nCp1AX7sxtvtukxijh6vVFnsqHYbjRV2Yj1N6micGjiZmMbRwLT3gFqVmVD",
  "key4": "3wpxvHsJ84KhGDiSFr4oskVWr6TsNfFMoD8SLKSp5kbNfzhdmuDKWvzktahg4Ryuy21FcNfrcPKpxLj5J6eir7BQ",
  "key5": "62w2mUVbnjHQdVrEEPEjnJHmC6ynaaAhebdHGZTak7MqkXwZny1WK5drt8BsoqbUZw54MMxpz4a2Nc6s9SEuzKxV",
  "key6": "4nNsA3RTKttxpzuGDe3Sb8WwWs32kAP2MEe7KKmNMxKYGvXU8qG149m4JKGnpMKbt66pNyibsRzuoxYtey2uboNw",
  "key7": "3WuwhfC2nznHfqgmNb6QeCYM1MqsVkN5y1rYsj8qFcKZ2MrCJJhdxXR27G48QkzJYM3nPnSKjhHBRtFWV7YG6e9q",
  "key8": "2bfsEyfmtT6z3WFCK7m5ZyfBuoeWtRGg7rYEDJ8JbjUN7RujgZUQJrxoNre7Yrgcs4mQemJGg9uCoB2qxqmib9dt",
  "key9": "3xh62WVaC2hG8hiNJ9yx1eg8sFUmYzm6NFEPZKEMxcJHQRTgvLhWPeyCEzA5UHdU3pFmqQpoesGnFJMVP6gmkZjY",
  "key10": "5LwCPyEgjWeymopgEmapPDQJT3La5NzBzcsrf4hBLbL8144BWsxmTwXo3K5a9jyB8XkjEnPiHYFvbUULJyMgY1b",
  "key11": "3KUX39C1pEGdu8T8724ojaMU8jrufLF7z8K8jg1XBxSwe3bDQfQ5h2io619oEtDygGaBNaEyMdVubSHyfSkpbde3",
  "key12": "5xBzWD9cXB7HEUJ1FAAPLBv1Fcras6YC1sUysYGaosKPyU3cNmDY4CfZqy6JwYmdF1SeTGHSmimapEbsQGTYztJo",
  "key13": "3xEj5CZvhCaygjhH8d2oF23rTp5pgSHtMgjYaLkBXZB5eq1naoobPff2kSaWvoF4jMj3nkFK7nj5f7HH1MkDmkJ",
  "key14": "3gjZcw3GvGmCrJDz6DyJjwa7kni6kMk56f4swS9QkkDdoiAazF9Wx8BsHs1YDkhtCxJFhmZdisVC9gvLWrE6XNzc",
  "key15": "33ZtrBUEHK7sQ7QhiEiDrENzcCxJz281Ws7DYncpfaYGV7viML8orX9yDwP66vkqWBWcSTzbr22eYhy4NcUhk4em",
  "key16": "5Nd2wu8QSHNV47UTP3GvndKWwSDpTQouqT9QHV8onaENpETu2qiWTtLcNy1yodBYTgzzNDG1UGFRgPrK7NwBnXiM",
  "key17": "31nYPBUnHGqiHLbQYNcq76H8dUwnKWcUHWtX2ua96fAkr3zqFYtSK3envX617Mnbw8DcHTnvwGdCAc6qHx6trgEo",
  "key18": "5VB8nEPqCpQPhbYDmm5ip8LiG9owcTbjxXgHHsqzrPx9KCd1BU1ttD8Lu8KQjyZY7jdNtfiNbj9B9d7ViPdZHnLU",
  "key19": "63BnFGrnEPgyGakrg2paLB9aueM3txH8k7aJmproSfwf8jmGpA6Xw8oMi7NG6RJBceQQ5csVpV1o2qRE3M7DNJWL",
  "key20": "2cVhaCE8zmraRaDjPSNn7nz8Vnarq4hvszDEJbQyK4HAr4ayCnag9bv5Fgq5NwsSQKf5fK8TaRqtiPvMejh4Xjbj",
  "key21": "2Lunc2nsN5gG53Za11kfXBWmMqTVFFUdxaC6DwzEHuGsSGTXqxQi9zwmiPZkP8De7XRTas9N7FJptBySrMUeNZBP",
  "key22": "4rwQDpRAD4kHsp52Dro2SRuFyzc99wJjfh8fNBLSLZiAjTyVfYzYTTvwxzKkQEdzwasAwsuKnS9XNqhsYED63cmC",
  "key23": "3ZnWPKjcq7T22y632YipKDqUihGNNhdXs9i45uzaR22XDCBBBfGFc9QXg7vhYF511pXGjGMRirMfMqKHpcrkGgqs",
  "key24": "3hKUoie8zGAYhnbBYX5LejkxVtvqRfhZteMAG5vL3xRcsQFuD14dgC7k4j85k6ASqaYsJoaG735uJkEZy4RBjqJy",
  "key25": "4mNjfukecn99nPcMmvsQFkLUvEBnF7KNGk7pbjgrxfJVdXM66bwz2G3kAZ7yc36dz1vawaLMjerwxtivhg8CPrwU",
  "key26": "4Easdv35GgJ8j6vVHLyNy8AfUpn77msz1p34zFE5Uf1NESPf2oQZzBhTN43yhXX1HHqqFxVYg8hMbKWdm8827oEB",
  "key27": "4KeMrQi7TAJnMCUr9VMZDQqFvS1Grj9DdLhTs18SVqnGheiUCPw1cfB2dP5LY7PW1B7sk7KnKevZdUks8bkT8Q8Q",
  "key28": "37cXf4qyMjfsaengdnBzSYXjeVD65UpWfYFsobDQ7UADqWY1cfbbfCUmqKePzFkHsFYucdgg4gpCWKzZSa7wMhea",
  "key29": "2VtJTZvxTuXf1ySsYVPsyn31vGnFafnkwR4BSP1Coeomqzpwcco3whMD8TeTx5C9RBm7kcU8HVZE4Q73PgkmoaUV",
  "key30": "3NSuUi6evM3W8BHaVzaiYxHPiVxsBTDfQYfHw3ZZJC5UNY7fof9LmQvo1f6rome6ATS9mRrPVmAjjKoxGkgxzCtY",
  "key31": "Hbp22WamQ4avMwe38LrRsVn2pH3rS2tivvFiKJVMdtDPdjWVy6WTr38jkJRPtxvohBUYDfrgrznW4a5f1yH3ox7",
  "key32": "4hds9feMF6rcnL1qjXftxSk6BSkiY69fHK3XdfaFVqV8wGvoBGbi7CyVADZV4ZQHR2G1m2z5t29FABHjd759hpfj",
  "key33": "3Fa1LMgzoSjLTpB9MtBsNoKNH65q7ph6aowNH7ZTb591YNdYqRB9zyYyFwsipwucAV5krQ7s8scrn7kUx2QhETPe",
  "key34": "4Vm4DbwTxS5ZD6QTNmFowotmPGS3w4Z4RMhyp9YZGqG4KDXLQT9tfcfuwvSuJJRPGsx1Jy3SLMX63SruEi9zRjCZ",
  "key35": "2yPxt1RyydnLRn5gByCUmcJ6DA53CAcaD7tNXqbJotSTZ42zetzRoYwozyyGwkCUGpFqJqMxka37qav68bJF5tRB",
  "key36": "4Q6VMrN1hcmMBoeaNDejs29z5Tnes15wn2WDCJfchiZ1eWvteP28A37sfXTNUzYWGL2wTwvrVDuAoU9iggQDbqaH",
  "key37": "3JydFvy7Se6o3Y9BD4M86unPN9bZjS2J17fa1TYFrgZnyk3p1V3FwZC6Urk9Kkxvbpja63VKbHVmZqHC4yhfLDbz",
  "key38": "4FGQH2o3XQoY1etZzjCAt7xZTmdrQoas6ZDdsUXLJStDQsqbPn1mHYNqDXxF3ZJnYfSMMDUHz7zBbWhyp4AUVy7M",
  "key39": "yFeJBsgpB8k2e4wiMFvhB5T27553woGfJMuj1vFLS7kq3TDCHMb45rVttdrJwF53joKpKNqNzhFVojQgoVcmV1S",
  "key40": "2ADregJhFYkePSg3YpbTRKC3GAerr9PDjKht3oWPzFTGdRuVTQQuo7jp6y5j9V56ADSTM4tTgfrn6P4CKSY5hRdi",
  "key41": "2WEsYJT72BKuiVe2QY1kyY4Y7FFuPDPJ7puLL36DduqpUAXgK2bhQmktzob2RwbaY2sVKnfsAdcxiBi2f1BjGjiV",
  "key42": "5neY8vAKjzk27PBXbjswBnEpwyrNLBqiR8Sakkg9UaJqbFecrbxBtQABnfWocofT15FEM6D5RBNou3E7A8R3nrgG",
  "key43": "5JK7jcNELNJtUz88VmU2uEHweVGCpkBEZpcSurbpMCyEgjv9E15wizM1BuvGEGDzu9HyyWfUNQVhaj7RAtGdE2Hs",
  "key44": "4EPZnJWpp5EFhBdRX6pXQWqsrETbEiJFdnkoJpkwsg8kA6Qy1wYFWAMi6egk3UXnmY6BH6Dg7uSmcCaYCuFhB94F",
  "key45": "ptVQCJohRcif6FG7om9n9DxAhtN1YJUd17UfUcinibLkhJrhZ84PT9BPCNbayYB8eKvnMxZW21vqWYERiqFP4ja",
  "key46": "2gq4pZEFTeWzzDexhaNcseRSDAETfFCFaKRDbKh55fJbLqxrvTu9YcMQ1AsVUQwP8M5LCYJpRNvs2aPzQr73McZS",
  "key47": "4z8A4G1ZRuMWHQx3gdHGEdKAmXHb7e7K8sM4cLu9Ty536ZiyQ2G5ZtDjumpwHpaK9ffthFGbMn3rgcrzWenbTMQX",
  "key48": "T8T24m5em89Qq69fL5RKC82UbtBmWGzC3enYeR29w4KxC4dxSNVcLJVFUG8P2NSE7Vn7iZxHBqqtiqMhQ6yr4pF",
  "key49": "5MVHwGRZV2t74d8crsUPwtHZxtjB3xz2ct9XQuiAUMUaq7pB51cqzuMC4FzXHJ6MWwRM7fZazbJLfC4HmktEiL1T"
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

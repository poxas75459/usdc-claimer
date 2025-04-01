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
    "2TNMoZWTMZeLwyNddrNiuB7ebQAL7EFNHSQsHX78YEwrVNRGPmw7vZkvHbKkMqD2kqikPB5u3CdDZjaTN54zeHRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f597izDZtJMyuQnHG5R6SWM7DYM4QJT9GcNHTJnE1MpzbuD8DUGbLmE9B9JXjomERJ3S9mGjLZSjTQJN8pcYrNV",
  "key1": "4EvPK8iUMrMstQkTn3PVbMYX4Bs39KAUGJBEcWS6G98bLPySGberZDaHiEx7SaqhHzDwr4VArCLZP9DMaV2Hset8",
  "key2": "4gf1ouNN8xXkd5ca6M8x5G8Gc6Ad6oL2hdW6ei7Vm8cdmhohPFN8qnocpojN72rGk7ZDgY1n9Nx2vCNPcgCGrcv9",
  "key3": "2Z2FgxfNZja41TDDGVD2yNst8cZxszvf6gWTmG4T6WarqjJDDATWFnVhUxCfJjYrQ8as2FSx6ygrRz49roaEGTmS",
  "key4": "fnaySmVybEXxHAoRQ68z7Y5oEbm3dKzCNEMiDFxBA8sbT3QTb3w8aCiSArqsQMMCBmbFyxPZAGP3rai5YGVbtVV",
  "key5": "5mofrUHi2jzUR4gJbPhjoFQaPVFDSTNqwDs2EfPeXXsuEoY1worWvXW85Pix8tADeD1CB4u54nhtSdPYJGwazMzc",
  "key6": "5uW66U5yGRZ2Sezinu2ePp5SM7A13PUrbaVx6uu5VTMjtVCBKPDuCpjYbjKhEg24iu1ysGccq3xqWuqCwiaBtB5c",
  "key7": "2HDSiWg5Q7xafAZRoYnMdLYvsNXezhXpjHsJ1iMTutdQ1B5HjPPJFLbDr8wb2xuudA41NxdN15UXAYuRzkwfpQAU",
  "key8": "2sButd86V98VN2w57nniYuaQmPcNPvvNSonB8gYCJW9H3AGUdxe3pfWLL1LJMrT9JCdmaheJ6qDCHjeS1z3djm8T",
  "key9": "4TJdKQo5JCTCovs1Fx31WgSThdzdwEA9LXBtFpAMXB77D2A75SWk94ySvYnnjDVuiKdnXhpbhoJP98KngeCyEjnf",
  "key10": "4CX6yMsPMa6iTz9eCkNJfKCMUiWsaftfXxdAFUo3A2AHbogF1LZePFcXbUEXhytQtWFvT2GrokqdrkuZHGW1cNhT",
  "key11": "66MkGxkCWJt7MJmU3k3hSFJenJw5Zjvtz5n64R2M8VUySmL4xsRgX8yVyBspQjWeLuiVWAFvJWbWdWtr2Ngp8zTH",
  "key12": "28HYeSsuiDnpv8hjGfB6gkHs8pyxNDkFxy2WoGxMradXF23wWMoES7gRCDVQRWBA4y6THAfbRsQGSZfwiGKWdEZZ",
  "key13": "2rQ7UetmjWzaV8PwuszZqhQKtFGF5BdfUQEYSQeYMmWdty8yi7AWvY6Le6kJxr2BiYsB3zhFjjHrUUMLn16DXYYL",
  "key14": "58JLha1n4tKiBRLJ91cg76nG3chXsyNRsH8ARRV5pjPWQwBDDUPSho5KBviRu5KrHQQ9N42orty3SQCUvrVqVV1A",
  "key15": "42szNdmeqoL13j9X3DB2JN5fwTzzwRuDqP1DYZymDURrqyizVN3mZYEggvSK95jvpavxTCyae2ouEgLeydCpzqPc",
  "key16": "9QFy8L7P1NQtCTQ7PShJm5Ka6VaqwYr3wu1CTwG8RNJ3VJS8KNbHHVWmQxXAAW9Qo1Cr4qtXrxDo3s2iqJGaKsh",
  "key17": "NnWCJyTMqV8GGxvvgeooV8b6DPCtYkALB6BPVLJhRKiWTj6WtqJxZkoEcZPDWTDA4ZXxaVbkwH1nybQdqPpf1Ak",
  "key18": "5pGxV9LabYLvef7VD3kLxzQbDMFRYsg9wyS6UJcxXeYX7AYTCERETAFkFrwU7HemCUFeSw8sVqSF85A1wXes89br",
  "key19": "3Giib6nYb1KTAiaQkwkhuVzTx725if3iJtsd58xt5rCYJpGLRwhFvcFBq5CXUxJZx4ZYxjq2CBk4xgXJzyuqbzuv",
  "key20": "3piPVdmmysp89iewYiRZrG7s1AM8S4XfaasmkmM8Bf9T3bV7CG85W1y7WDZpzinrC5T3kaWPX4n23dTdZM4to5CR",
  "key21": "iVbf8pVmWrNitdsv77RTSRWLFvtSinDgCZZBNJVbPKkjxc2n4o4ceWC5TEU7SrMKqREf5ToqgnH6z1zwdC4nmsB",
  "key22": "3KCx8oseRL6AMQUr9Doczt7ZGkrj9foCJurXPFDnAazK46JasFAJiDrQeJ8Px36wNqC1acnkPeGUNAkif7m9xPC3",
  "key23": "5PJcd3HFqgoboFRkLKE4zNkuqj1rXKT1mHRzcLN8yndYbbzjwWX1j1spxJAERijSP9RMgKjk536axdtnDmw3ThxT",
  "key24": "3CP9fueFbkJax3ZuDwR3YyoKU6Y4k6f7987XFADbhjbFbJaYAauTGkBBkuDESktaXkKZogd9C8Jv3LLJYqio3bU1",
  "key25": "HAcfirFXgDSNGv2h9t4JqVA5Cg2qXJb9C1CCzQf7RNw7e3RgfznduAXH7UmifWcjAxz4pTqMv769AdGTx9S9Z2t",
  "key26": "36mvtFxtiPHnFj12kGqTmKh16dSh29wAdwmWCSbKfKKiTbAqfkCnRtjHAUjisns4cd7HN5KaTtbgRgMYjj8tW6Sa",
  "key27": "iLoSRsakYRpUHjNikKDN1bkHbV9X6EiZSEfjcRmSR6rA5EcNFW5C6ULx2GC3D4HPZp6Votx89Kz3sQAYP57EPdP",
  "key28": "d55fL2Sms1Q9t2BJZGeEUBAjCPHRhsbWThwCmidZKzLGWfAG7pCGixTfnSiyRCejN1vU9PMEBrCfGiYkteVFiVY",
  "key29": "NcsWfh8BP6MDtGaADG34g2oVXzif93mbWx274U1crT4jU4r2WQ5ga3yMVKT4aYPLK8zj3a9cjp6rqQCiUSEe1km",
  "key30": "5WzKxY8dWyaxALAQoQZoVs3AwzFVEiqmkQHxNTAGUQaukkJgzAgaEfd53irhWDeWMhK56BZzZJDCaA6f5LPf5fq9",
  "key31": "5BwV2sbWWKaKq7GsP6MTSmuKughek8dkUTXqzDg9Wctb7CHBwSaGhor11jbKZeazfMrbG4aJZRap1w1dAX4mX2mu",
  "key32": "4SZdFWn92pWgWEAZfeivnuUD1n2ZcZzjFswxATCHBY7ABUXJaawQSJAeatWTJ83FTc4qp5PLvhRUzPfJvs3sdadB",
  "key33": "5LqqEX5WjKfpuU1CAGHYsupKvMe4TBbw1o7r9ydSBw6wfewAq8nZxvkhhcYk8nM5Kv8GrsjA2KXMGNigRNFHU7Ei",
  "key34": "3nBqWQ1HY7WE4WnPUQeRuYFE7HLinDu24eFLBkjNBxoLAGQcpR6kQ6yqNETCBKmbqWwkUouX6e9tq2GAnVF8ANtV",
  "key35": "3jec894qKJXifphzBvNCpUmRoMZ2KN5oiNjhgvzN7C3yYLptsMETBALuXkLU7xLSPYfSpyNak9RbqHfGQGcekGjC",
  "key36": "2owe8wHTT4JKTKKgc1zJDz5tH76SpUcQvnWSAahRqyJESEaimxrDPZM5kTAAQxWXBY1aAdxgxmcw4coG1HbtQkrR",
  "key37": "2D2VmYiM8frNwmRsNRBvufe1aNvqJExscqLgBuk7BpdXePZoyxTszc8xgemPHtM8ULEKkc8tgFviJqQZMq8652PH",
  "key38": "22cm7PFN5rB9EvWU55RvR42bocTxnUpP3PRvWsLJkrsJk7PxW6jajGMpQUj9nSpRH9c1ttYV18zWt8F9GT2zBhMh",
  "key39": "2r2grh38MHFQaT7whwVQT7XPo9HDs5m1zoUSqudT8iSMn3vkFJESx3mkDf5gqESqh1c7tN1VJjvna1eeiHoj4NCt",
  "key40": "FXzYGnUmXDMfTjN1fEKmoeAHby8ftqanfCN2W3HrHXiZ78toqbi4Xx27MdFfYunMrhYHBTfkmDLAqdwUZh7W1La",
  "key41": "3X6Co5mozyzTa13sU4kpNGhF6dXb3g9LFj2qSuDyQERsy9DHpdJcKzTcuDUovBJFZVCY4hMcbEqBP2g84um9tHqM"
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

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
    "J6nKE1J7LKyTRZavhH1cYtuNiFNggwDocAKe378bp7HP8ni9Y8Yg8E1gV7uhGtNsThw7EFSE6KJiRuXWJMHhzJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqGe3SqGYAywepctRPsE2UUrLJsVmwCh1GNLqUqpWkJYsTkcBLNXdczm28thk3KjKmDAgkdhTSDdm6oMWumA3cZ",
  "key1": "mbdQEfL4wquwKjYuLMUFUoeUevom3vcQnN9FJcHfQpQWjf7vAmWYhXtPqU8HeR9yyGcujvhMAqbnYBgUej5LeWb",
  "key2": "4XD5mHFdsAT68JfrMx1jjiEcfnN6SymE2gcHvr69VX4ayGcCno9qcsrgzNsxtqRY2xJeDGnoeBi3EPkLjQ26k6J7",
  "key3": "6ugSfKqhJ8tW5zvRWikATcM5YE9Ug4dKsrHz7qtoTgfMTwDdTSHvaRQkrDoeFRLSH7RtfMmzB2z3Lcg6SMBHGDC",
  "key4": "2wAHu1xVfN8rWU7ADuZjBeggZMh7fEyehghBait5xt9v8pLmg2gyWCq7zMU2Nj9nEN119D4aT2DKAyh7TecYQnjb",
  "key5": "UEPzYdawa1NuXJiWU95sdSYtWUHmDMxqowufs9aRtcJmhp4tniZTiKPwQ2WzbMa5ybxFn1TgNM8qvnrdJ1LS2YD",
  "key6": "2G34tpu1so53bRpvmqefDgX6XeyMAejPDL4ghvoy1Megjax7ScCrQkV9EyCMjbx5GBDALvDUDRvnB4aY5W76wS7k",
  "key7": "63vgyvJNMFhwgxzb52h7RvkMRYcsYGLrvEZxzGfpzV1vkdLF3FbRhEheip14n7hg8XqYVXFBbmiR6v725DeiTfka",
  "key8": "36dC2Cesk6c7oq5azx3GxzQAxog1wanueeEQm5RwsVYjqgVZy2tV3RJ23Pq19kHxiG2BtuNtkFXjHm81G7TvvQHq",
  "key9": "5rrVK2AiA2yy7BTkoCjAR99q3bU11gvBnwh1XbVbsJWkQsMVJF1egdJ13GT9zJ5G2WoqrWaNMsX7nSqaYTSzeF3U",
  "key10": "2aR2swdVdXEZAXCZ74KrFVdsUJ8XfeZ8RiYf3rCdAfjFTkxswEWAAZWGtWjW8L1XYowTJUkwQnKPQhXBUHW6Tdcz",
  "key11": "3atz67WN4urdi9qyppB1REKR4EAt4ZCZG3YkivjU1gcVWJPYr1RLcP3uTMzt7bPLzwQ5mvcewvehkboV9A8Kpyws",
  "key12": "77ciCjPzc8wZwBv5Y5hwuR2gN9k1KovvJp1wxrcThH68k5GWGiJNAfde37iCT9apVpKWmx15zM63kdEpDQ7KyF7",
  "key13": "3DLnHuf4atS8rjBhBNvqxcCTHhv4vBmrJ4neDtDs87UXtuNCzLULrnREznrBZ8o4nij3KBPBDBipiP4JeVkNHRm",
  "key14": "2gzJ8howNaVtcz2sy4Tm15Ms4tkoUw8te3FmPwiQyb34UwgtVCURaveKiXKGGEyaVMb34KU4UyKtQiYG3W6931Ad",
  "key15": "63g316Ejim68WUwECbZNnYdygDkyYsTUWdWrbvQ4Tj4E5ncpHkNDq4cppGd8H5SSXBHeeqvXzyCVY8GMYuj27ob",
  "key16": "3UfkeSMtqj9Rmgi3pwfRqFCLeBNdecZKgrxtiKNJ1bXfNcNhr1hPquxWUv5GNPg8qRRqV7Vk7Xa7LtFyFF99sPY3",
  "key17": "zyzVp2K21HHCSpHcTWQMsKRc9eTdSz7AAEGx3Fr195MVywC2Jz3QVtTw3stSZHrswkfGwYMWWSL2R8q6UNQK3tp",
  "key18": "4fWnyzkJd1Jq5AdfdsFWw1L4MsWBiUUTvWVc9vUWUSMncwhCpTjm6Yk8dc1QYMpPuEEk9i2VZHKCsRcEaXwckMvN",
  "key19": "5ukcEX8bHEAZNgghCoZtSeChvveeiWJST4dLKWCo17JmRgWFw9nM3FScxhx6miTgeomauwUbfcoLnWNMmrVNNpXx",
  "key20": "pcN8CErfttByy5hJhaD3APJbP819tAtANj5fbAUrBSmZtnTc2DZ3FADjfXELpt4cnzhMNXx53Rc4eeY1W4BmDB7",
  "key21": "534vJgUUtjdFcscQkdwTeXAkU1mtHexMKUbnUDqA1WvPeXfw6BsnvnC5jp73y75Wgr5ubLhvZcMS8r3bkbtFcrq6",
  "key22": "4P48ReHsTKCAQmbGh2wAW1agAnKHSQ3TYxCgxuMaegeNgUBLWB9cs3GHdAxnmF3SedhfXSSeRCEkygzPRN2Z58im",
  "key23": "qdgbZCDG7Lt9JDasra2n2i5CCicyuoXjNkhhi9sbcBEv8UFkRzQjcvHYYthorZUPZqDnRQjoEmS2H5KNB6xXna7",
  "key24": "2TG8F2KekZLxuS41zJWwH4f5YKD7ZynGHhXrqPsNkvSLN1aCpMu5dG9Dm9LoALxLUyd9pb9YeLketLL7SoR7utoH",
  "key25": "3g55LZpR9ckMz3rp8zsarCACkuMX2yVmtSqn8BKTuEVtEFLHTrmVH4D3wr9Yzd5FERCW8nZ7QcbKqWjinzg41QSx",
  "key26": "2rFWXEii84pXkFqgkpgdgF8g5G63Gn21hyZmsnJvZPpnf8eAPZ1ojNr3AUFJLbqRpXBPSN4aGxnqeaA91EcNtau9",
  "key27": "qpJ1a1HAAMB3cpMhGELTwBeL5FhwzfFDeVc9BPhsGPdAthpT6rPC5p16NuutRGKZxSb5tnuYtjur6AwEDwPENpw",
  "key28": "3KwQXPSXciz1xTsXvoMXDCqFx3gCKwVR8gQ9VeYbE7g7MFibSaB3xQZJKZdAiitdRfBTbXrWsFAGvJFAdfDghmUc",
  "key29": "4GFcpJmT5G8MSheP6UK9rUBS3m1M7bPE9JfzVEDGr7NbcAYQ2pLTfA7WAChENUkujynH3BBkZmkPXB7TTo9VS6XV",
  "key30": "4azhKqBFbsEsRg9qpNJVbqFn66wwB1PJyspbb6K9RwZJLqpWB9t3sR5DKDz5kbdzmuRbN7XaymV7gHPppYuyE98k",
  "key31": "5Co9CbRHqUBjZVSQ3XR1BTqvxjaoERmRS42EaCM5enFub1fHCnomvqT5Cu57AC5E1Avq9o85LY5yNv9MAjgevrr7",
  "key32": "3dNLeRvkNHaAmeMNrHGkbD8aqgcmpqid4dTjtKTwmCVR5wFC9WySRCw4jJnu4P3GY4PfBtxJpUVbPmt7QyYNjtL7",
  "key33": "2xaa5unP1Bc41MTPVTc4jwd3cMxxYWyYNjo6FxSiaBPzfu3mFgPQzf738nETAeffU1jDevs6Uuu5KxvhBgMUKne4",
  "key34": "5kqfWsctXWUsLriiiHGqBpBrrrLaibmo32etJKqRm9zdwZVmenCHtzmD1D4Y3Hyhzz2Vyv5YGeqaediHFjNMVTz7",
  "key35": "Q1P11sxEXmEgKLP8KYc7oomQX3Rv13GsDnfhJ3tXzSNfXuzahYqXuEaeCRqNcYXpBhBFLWs3pRS4xdtgogWQtju",
  "key36": "v2fT6t2mYW9XWTXSGR5aAu1dfbFfvxJQfm1EKJiVBn4giCADoXMXcNf88NXfkzeJSLTknXmBGi9gnDDvTRwoxWZ",
  "key37": "5kk5QoWxc6oyYae9FA1U9wkTpMjMt4M1pUfPqYKwwAF96EJccMKdWHbXojdfhHjMdLgxy5kSePAJEpuKTGSHySHz"
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

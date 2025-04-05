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
    "28aYEAeW1rmDQEBpT7YRichK2m3cjGpb6HWE4irBvuoP7oErUGgVyyzVrdN9XpbwNy8i6ootYFFGMPLiWAUANuv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZpXCCidu3fd2piEvihN1hsYhBazKbpQ6twzzGHotGLJn65w1GmaWnYj6mLDL3MdJ8fBwX55VzWmNPsdqpVNq76E",
  "key1": "qe7wFTbkHzP5RgAgf2DnRKYH3fjfBMgRhCjyP3LfimhNEESxmKsG1PaFwsgcBwHDRYhUJPM16YNx6rhxSVRkwAe",
  "key2": "3EcFLXgr9TEknqHkwiVtHFH1uxAKe7bJSNeRVanYzkYxX2x7hZNQ7V2VxfJ9ivHsaFAQWvEJy9xAkshKBnSzvi44",
  "key3": "4ynY5dyk4KvwQpzK6TEQjD9NgkrPBTwtLc4y1i62QD5s5xMKAPF9mi3urqyJVffQ84VFtJGgvse2kArqhiwSQGEr",
  "key4": "2RBohDbhoBjwhcpQQ8wfUDwuaEd5goRwUQA3gXjfnnkT79sZsX4QTJz2rcpfic4RuKeTjyQtuQubHne1XXH1vZ9A",
  "key5": "2kQEigiqEMYiQpMBQQZqnSvs5xrSah4Er3yP1tkF2khhvQg839fQVSraatwiXRqHKmRdvFbNzi1harKq9CqoNtip",
  "key6": "5UARQL9iRLWYm3PfdZZDnhBHaJ7msnEyh7msqiHqq1fm8m4n1QMZo5YWyYoamn28sPsKXbr4nCJ1J8EWyTPFP9xu",
  "key7": "2h2QotYFdwSpyzSSucC6tCVSE8uyLyuoRFTgEWQexsH7wcSVLJKRZnXCGak45Rub18W7UkExkzbwmFEEFWVUUKhn",
  "key8": "5PHWCvVTBJYGze7ZkomEEuBGtjoxN4xjnfmT7A9i4bdvE9GdJgy7WzkupJ2Fw32Dn68FYiSiAeUV3jzykT83WMsS",
  "key9": "56GC1RqTHLejZmNd4ecSaApsDhAw8d8fXscabB4yoyRkTm3NRJWNyZBBzAmaWMicoZvXEP6KAtdc1BswmtLypsbF",
  "key10": "4kyEwKNJVSYd5G5BSFh4EcLVXht6jDBtJEdt59zYeyZK2Z7qKdFoP8CEW1c4PYQP4QHRoSKkx1PHobDjBMSTdk6L",
  "key11": "45zKvK8UibwJdWoBqL9Rg6ycfNTa8M8GrN5aTYBZ98pyQnjPgWg4oGfYsL7waDFUbCEgRg13UTv6hdYzz4ro3ETx",
  "key12": "3QwVrX8da276gJSeZ7qbkEhkFcNngipkLsVvn247mihhzpUWJLt8vDwmDtaejKdvT13pG7BUQiGX9VCWz9WVti8s",
  "key13": "2w9WceyW1JAyR1n1JDSd7QjbZkYetPzV9QKwyF9rTARJjrLTcLd8L1FwbKNAr45sscStdEQa2mn12osG3cU5Br2z",
  "key14": "5MpP8v7gbybkyaqDBVuj9hvJqjzNPVRNsuFeXMVxthRtgDBACkP4Ldi4EqAPVqE34PRVQ3rSuqNwA2WRyj3e3Vpo",
  "key15": "4p7D5qu4b3P8t9BKoqEgWu5z9K9MJGYXTDCwkLuhbrBJKVpKDUdeDUBYkomT4R1VaaUPXMMDe8UYXqGpw7hySfJt",
  "key16": "3rH3GQTejjov5bDh55EqmhB7dNBaPjC3jbbjNvQEqfJjSD9jBGaWZKz9cYuRcCKQbDrT7mdmUrMaAWY3pAYJKF4a",
  "key17": "5ji8SQnF3YC1VfH1kam15D3LnuZdFMnSudPVjGwnAZHXbdcVBiXPfC5MnLcJUucYCuoZQ3B94ajU3931HYqX18SZ",
  "key18": "2w5L65nrxyRLtd7X6p6V4okK48JMYVzTfmEmSMWsb6dh5XYyQWuUe5keSC375Jw2eSKf1tcy2bGsJGvgkcgiPJUN",
  "key19": "32Cwc4CibTd4LjtvzxVhWfMZLeQK6oyAfXdwCtT5JenPCJcsLiTt7RjhfzjUzZqKi3VtksFY8taaxkScn3E6yLC7",
  "key20": "3UmUEvasXsTL5PJin6FsB82JMtoJZffVSZnpEBz5iLHchBn6MJKTejf79udkgBsMo6wnfX7Gju58ZynrsXKVnd7S",
  "key21": "3Hnye9GGiLnXA2dSpNgR2F8NLbSqT415roJqMnkY5ariNLAEAkqDhDcHJ8GqsuPYsLmg11tRcjyZGQvcw6shPoP2",
  "key22": "5ngnyFnkd6Uu8QhiXR3tTgVUWrrm8Q7o9Vj1mb9aA1QjERk8qRTr4ZZF9ArDrubpCQwWD79bR4c8zEkCgZP9FXp9",
  "key23": "5iFmSkAi6YbjQT9nR92SuztCJRPRpPnbnJ3VkzuezgC61JgJbtgfoVHDjbxk3vX6SgqCM1CfJccbReRsVf8BzBtX",
  "key24": "BNSnnLm4KegPbwwWQgzQP6KaBnkocjXoYR9skbT3PpYi3pvWqetzNcYoGYrZob6T2jV8xod2eukyFFdj2A2CX8n",
  "key25": "QHUqDfrmvjgX5eVgBTurNEYbt2pQX5pyciX9n6Wcs59KaB5NbNr2er2GGjnUWVtm8NKHngGcsyJrp5UMrCpEDLf",
  "key26": "31htTatiLUQSfqrAZ21u4UAjd4kp7FMMJUK1dBNMDuk4TvsYTqKYCnnmbRBiJXCvKSH4bpvuwPVB5TsYu9B58LaJ",
  "key27": "4azBqyAxmiofvoSfNro95z9wBopyx4n5gZxL5EvzTzZteghxBVLWRHsLMDN1ods4osjQqGm23CnmsY612fzVdDWM"
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

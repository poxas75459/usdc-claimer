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
    "22xyGQYP6MLucPnGH1LBcLWTwaEhGZNQKytppng3boHV6fLZxLYP1CcK5wki9HPKfC9iQkpPv5RDQ5JPaK3yM5HB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BgQDHJ67pofRSf9V7pEafXA41opiY11cV2MxBF2evbpG7ttjNNAtPogVvW38NCbwk27xYVWckFxhi6Muo66rm9w",
  "key1": "3eS4QBQ1X55cwnpGQLnE9WQtSrz7fkcsMXEd5iraMZJEW8rYMYdKtrD69Bo4hyqxDEgrfLf5JAMrPedV99FjqMjc",
  "key2": "4FprBWjg2qJgFxEMb6s3WJtkyBaZfvsU6EgAUc9PUVkT1pU7syM5jSA4C45xh6WK5gBiXFSEGvxkxLZNKjQc8Vcz",
  "key3": "34G2LAzBBmZinVncJ5YysEDHw5qiJh6RNhGJPjdtEw2QHj3oXHuVe7XzsVZjfBs2j4KVLn3t1MwTyr5ocuaFqvsg",
  "key4": "41DBvcU6xNL3mCHiBFTJ7oW8k5Kagodbmh7kzrZLeEc1eerMY8abvqYi6FCfXRB2jEvmdUTJ3o2fuMLgHshe2NPG",
  "key5": "4qJrzZVxRgkG4WAkMRkfGM8xpPzWQwf94ZFoz84DPoZHtWqrgFCygpvoPRiiFCBZYDYJPSXqPLvt5uX85jCBkMRB",
  "key6": "2Z1sybbprjxRJGV7x2RYcyYgs6gR4Ts8VD7sPiWoEvCMQrcUrZhEAcCoQ12QVJeWUqPvVzYANKzCcfmqNhMzD5qK",
  "key7": "54PCsPV5z1G3VgL87zd7dtnsm3gweokuV3UEn9enhbdjSZvCLRYqKbGQpQFT5JeLdgWLDE7BxkZdLubnSnGi5mQ6",
  "key8": "4ptgH6fSf5LYY6Nto6rebYDA2zmmnWUFEHi6VEiqE7sPrHMAuG9oaHQcazY1DukLFCvCguaUBPHhcnQJsE1kjL1X",
  "key9": "2pPi64y9CCEDaUorvrZqZ7V2HYE3frbMtX18rkeuKpFg26Y6zUpJ8bs3kTgPXf4hf1wG5WefkkisNddFq97BGKs7",
  "key10": "3E9EECZHV12jrV5mHCNwGjj1U2nZuNqauhbPs1EvLLrzbMf7pUfWDwsqtkVk7BwsScX7JPvjA4n7YfwyEundUoQ6",
  "key11": "5xMBk379vzkd4mxCu9aMa6eLWY94qtY3xRdvwQp19sFse6LDxWocXSQeD1iqzkERZHuEPyjhZcKUDnFZp2LB8T3x",
  "key12": "5DHozERuoDm7ttL9WujxbU8yqG1moiGSjsvBj1PndtuT8qS252YaBhEUjTGAs6Zo7A57KsuUdj9Bojar6dZ6dDNS",
  "key13": "2qPGkEmcQZLBZ9LKd3tC2KX3pKHCW5YiFaBfykdWX847DeGsoj4fbPGbQZWLjrf7c4ZGdWJyHwDyaAqTaHtQqwpT",
  "key14": "4AQ4EEduSM7FsaAqAw2HMH5GSDLabCwgegd9apz6tc4adCF8upFZ69Zz7NFMgwRhzJyMw8Skv9YBLc77UcQQrmhn",
  "key15": "29dN7W9cM4chXYoHW89JBe94NMNd4rBVaUTMBtGxMbxCtQKeVcHZ9u1m8nshssTSwur8N9fhqVh3CAgBh7s9FTTa",
  "key16": "5cqnfTn5x54Vaz3yNU6BhNc1its8tnK4vMLM8BgsJ2WCzZfYnFVPBLEVomih1sBG2UMFrCdbb8P8QWku1eC1isw5",
  "key17": "4MAma1zxHfzKBqJULRGqQYPD5wkZBUtm56xGEZyEjYozPMkz1CCSSa3wiAEzbGX449xLXsmjFyfeXaoskD7todCQ",
  "key18": "5oAUg2bUhvejeHKczfL6niz47UHsGbFqnj7ZxsiYkQNsCkm3efMzRAMnP7rHWhjgqHdPzCBAvivycVeNpSLycy31",
  "key19": "mAyoF4VfKTWwuKbGmmpBMGuAhi6q7bPVmLrkrTzBQixjrVsiPnE39AvXwYE4mjzPmAibrPNJMNJnStE9Y2z9Lf9",
  "key20": "3tfi1kuF6ExqSphkp1WUPu7MqJAkqq9mn4XDfN4RZKg8WuWk92Vbq4X1i8wHU1bZWdynva2XgNCzQddBBqCYLqeJ",
  "key21": "4zsyAZHCrw1HTU7AxE5yz8r969WX2w371Vr6mmxRYGuoYwf9QPLvAKwvfUGHLQ7bXhuuEJQfaEsQR16KXEvQCtDF",
  "key22": "3VxLJ35SKHtRskTHghiNyNyhLtP7SniCH1wdvvrj7wFkE7VYiQ4bcyDv7KSqrDjoH2DfkszW1rtT2PAajTD5Wy7Q",
  "key23": "4KcqggMiJxvGhMepg7P3aBF2SRqm3AjRc76RkhiSaSNYEfRE8Dw2We8vZH9vRnpZcVHXPuq6R2ZSpRfd242FAMnz",
  "key24": "zNznZUxvmRWqoCtFPnuPBVNuyiLBBhSGvnW7SJ7SMvs2poaqPEGKb64XhTv9n1cnJmXT3DrutYv5xKZSX21e6BB",
  "key25": "5WnCzezL6KovqtMmf4hReDXNvmzcbzeAekUyCnS1cgtKzi4z9PwfFYPCs4EcyXiLqyeFQfBYsGv6XchZGnZ5qWUJ",
  "key26": "53BR6nQYky74ee2Sghwz6BD6SCZ8GD7Prw69Dqt6HMRE8hEzcXSZhtyRF6JtymuwCrTL6CD4fPocQWCALsuzXAj6",
  "key27": "3MkH5VgeEePsstB7VDemdRWvXY4BbSh8ua4y92TWXgt1voGy7RZKN78NW2XWJRZcpQezGwKa8YLhX7MU1wtEvnV9",
  "key28": "QruJehqzNa3FgF1AZ48NgG3wwPmTMbCTxGTCQMnhpDk8rtYhn57DZ9UJ5WiRDsZGdhjoWGkPD7bS7fc3up8a4Wa",
  "key29": "2DZXEcVMxapg6UrP22oNMqbyTC6zLVB3w2fUXfGTyerv6DQxgDGGYPEvVdAJUnhf7WKG2ZyF1ZGpqftwF8MWJuJ2",
  "key30": "26WFXDzZQQX7n3n1VqJZFeSrK2ZAWtD9QjyGxJtLCTocCrtURVfTgxGuxsty8UGVmaxU962PCJjySUAHjVkRbGBK",
  "key31": "RmJxi3WB5JpFGV7cz2Lw3Wb4Mk6dFTsA6L9TnW8c2A1YwwsZag4uUUBsEFqaUesE4mzicC9hZjQL4yhcqyEJM2y",
  "key32": "578TR7S7HxDYn1tHrvNVfU6HQkDEzPEeJBXGbFs664wqXbiWXZy53DfE6NUyZCxDgXVgKBReTLHWjZ185N1paU5T",
  "key33": "4KJk2uAu94i22sej84JsLy1gMHHkrrmFhN8AWUDmDZbFQxmwWRCm1rY5DLKYkaFdxxPZszz9gj4ZA1aTJxS9FcyJ",
  "key34": "PYePg486iejPkpBL7Fawu5E55G9ZRrUgGig51ubakTmzbHwTjyeMkny1V86tR6myQ7y4x5T15Hizw6JR7qEDqZx",
  "key35": "2aLLF4NWXAgkzLwmiqkLWnQ14pJLJDDxudt5P7wqAtcsnNpJwnWD3UJ4q46VfGj5wEgzAa68hu9xZrVp17fcYaCW",
  "key36": "5TcCb7DAhc9M4MzMkrEABrfGsJLwK4wDhwuZGxDXvFAAnWKUghzJLUknnsa3LBShdZszDQuPNgsfjcf688CCNSNe"
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

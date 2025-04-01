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
    "3M6X2EQXTUXVjASYZ6ieEkdqdha5QUzNqcpKhUdDKhw2ovbJNSnNoQS8ctqNsKNm9VdM9DXctiAy7YgEER61QSot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iWZWu5YkBjXccvFcymzDrTHdDvUWSvpZL6DHSh4SjqQPMWhgKY1kLFntaxSbkDNERijtNsXCX15T1vNnMKFdq2",
  "key1": "32nhs4tJyA1ZHZh4ZeLVQWsrZveKLCYyvsoT2AYhSP5jLomc5462HfmTzYP1seSqgLjgBMcoZ5hMM9oygwabbVZ9",
  "key2": "s96g2SB7m8zEvSEDefTvjpC5YpjD1tHuUAGfoFZhDHqMVFAXPzmsEXngjZSuBqWeMFR1dg2CcbT6aM2LR6YJFRc",
  "key3": "5RAhUsLLxp7RTAdGsWEKSo42BiudGVhWxdQzzgQFvvUqex9PEPqGsiPWNujDBMJrXgst8XNAK8o1ABeVa3SQ3p8v",
  "key4": "4miXDoF93ZhFfRwa2zhytbk1NMJcNx1ZRHsC7tE7SGuMJeTfSxUyj623ucnDYsLvV1bJmJp5MExX62QoUXsZk1aZ",
  "key5": "5pJVjPLPyjkBtaYUUH4FTaHmTMR6orXyQkY5bQq6D19uT3yr53z2grpVc8Lp5rYHBsj69ApYhczw7pdoWDH7Tn6o",
  "key6": "3wqHYYAp3bEZ7zum3KvWEqzk7jMSrejz1w5xcq7r39TXac4o4ZY8uzBmYbZSdZzWELhyd7KKZpSvgRgFX2SvVYKB",
  "key7": "4WjpS5KJQ3MGTm9LbtstzsyxaBeYtHmH8wzfp6HnWknA8pUv98tP9tQ3EWYELyWqVsDCgx1adb6p9SbnuncdBttY",
  "key8": "4nN3aQQ6PvjFLmXrbRFfZYFyu62ZbwdYSUXSzDpZsimAWf3ahYGXLvKsoA2jxMpoqiztDRwyBmYFJShdTec1ScRe",
  "key9": "62hRzYHaVUTXmCnb6ZmxKGghbR4rVNxw4xzHR9wxzTGwxDJucSNPBZukoKHid3Wx8FTc8W2MdnQVGmb4prFHrqiE",
  "key10": "4nVSNovsQfEjHNVuypTrEuwrgKPAddKALrQ6JSjXJbVFGezF7dHNxBTGnt8CvJok9nACEeLnWb7TGQxGsJFkFKUR",
  "key11": "RdGT92yPjd9jjp61GXRL7sJfdee9JeYtRpwZR6gk2dw3j7Ko1SEuDrMaVG5csDvtzY7xb2HEyRqouciBtAtfqHX",
  "key12": "4BDXKjMhLbgV1fUF4SxQr5VP7N3K7eVM5YCmiVCMq7c9C3HVSWtkJ6tCSWcdbxZ12SrAxncn8GBsJneHbKFqFreR",
  "key13": "4crL4v8vvYZPsHJudu79agFyRBVxAyvxtJmvhEAy6SPsdE21Khxp38syuAJnarX8XKhXcUwyCWxKiFBSfoLggVFf",
  "key14": "5S5agdZxjP7AiaBBRHYQymVYLmA7G6xS8G93m2667KGvjLvwGd9kRsqME27GXAGJBKCHe78nAH1WequCDx1sfnRt",
  "key15": "4CaGnzjsLprFdYdyV9MjVuha7SUEU8pmcFnu2g7ANKcYPXPmaBkewNwhiqzvirK8eyEiWqWkzmUP1JAe9ezyTtGm",
  "key16": "VD7ukALEUo1Fp3awnHAWHxK6Q6H6oqmUsL6GwqrFSe7PN9zu1VzxKpnGTXDppGQMcmGMcSnEX3oEvmXf2TyH3Z6",
  "key17": "3z22WfwhDQNQW8SiVtf38xyqAbiZPhxfo3zVv1v6cvFTeVQvoeDtqbpXxgVYh8LnTFhx2u3t75qofiv2gocjcNBK",
  "key18": "34M1T8wCyhtMVVB1817LTrRd8fcKeBXNNKbR73ML7vn35hvBCPSN3MDzEEMwYdU3GPW7honazfN7A3HSkx268fhv",
  "key19": "o6jUWWgFKH77m67ji6kTmSmTZBrBz7N8AwsvQvGVxXUKm7zP3CmmiUV92tpWuXy73LQrSjfiWnf9cKcLdWEWVTj",
  "key20": "62fckmRWtmVdzUsjJqXEExYtJp9yzn5Q2XuVKRHdV3Xo67Y7wHKmFWN2NRYvLqh9WoRtxfK34q28LmTeq3q3fWpG",
  "key21": "3FTxB2UA7roeuHjiGVZdPSqWPTHBezAmEiVQQRgY6LUs1oDyZBYC9uvi6RJsPF57jdvC9Dup8EcKfMP4oE3PsT1R",
  "key22": "3cHTqZqXLi4Quei1pbPouKF7QJp2pxkXx2rSNenhKLb1V45gZVPAeWwfdYytcwXLm6TCU77LJ8CXLtbhmUf4Z1wK",
  "key23": "kFFwNCdzzoPjvBsNMaWuTFhC7vDoaxecAD8BtaXJ28URchgvygWvMFkRkSPJAqfqfw3QHVHv796qNuPEPksz8ZB",
  "key24": "2DX7P4qnmNtWhstWb9hJTdnP89gEfnpBejDVnnzAJvRo7sWNAtKp88p8sTJNRkxv1akHAVxSWaiXPj6Ug3bKPPPg",
  "key25": "AfvRyrH8L1dhbm3MPSaJSV4Gp1cCAdsdW2u9eQ8W8WEaV5sDWbYoAMiTuiuZUpLA19JnRv1GTzHthi9Ewoe6AkT",
  "key26": "4owiEeMDF5tRCi4Fxik4HtoahhQznEmMqSbRDSb9jXi5jnVZotNdANWDxUtLHHX734G36oYwSu4Ha1DeVSVvuqsY",
  "key27": "5Npq9apXDHPSZwrwpjYzotFw77tjmybzPu8wCTb6ciPoaisUXZFxMyB9Aqupif3icemF4mMJQ7z9agpAkf7e9nQ7",
  "key28": "mBMqqBHn6B4Z6sZW9RWru4MSJ9JS1cTk9TUcraNxi514VTHXimwVnoJFetp7yxeTU84Cvm7HWnud4xEZe8g1ggt",
  "key29": "wdJY2C1chPDqRqwRViJuqJaFdPtUu7voQzWzzGdLZcXUmF7SwFVfT1yEpDKWABd4jEhdnkkJJ1MSpAEE7SxWPrs",
  "key30": "37AfzyVnBEqafLv5Xx3WEyJ42j5fypWumSYcbeCo6dC4VxrMiyXf5re744zrLjjqCuijo2gEeTETbd5F1iMKjfJ",
  "key31": "4sc7Y9YWmjsS5smH7QuwysfpXG3ttJQsNX5dzoV4HC8BJqrZAgr4tWDSuLsp73gFkRJCQDnnmJM48jqRDdCtcY11",
  "key32": "5XXAx9et2AENCzzTvVKwZRU8Nj3L8Aook6QwYu5VCg4sbenT7YgMSarXDfpWCtkxB9RPvDqGPputsmXhxXBnANgQ",
  "key33": "66D2J8UyRrhQXmbcaghZ5X3JZwNjSYNvXKmtatAQZz2CgJD2CKPArkxqwfSKywJJHo8qbeSxK5fr65PzU9c56WLM"
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

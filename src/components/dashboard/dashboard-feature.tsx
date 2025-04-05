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
    "5SaQEF2ZUZjJTt4ytZZ9qoNwZDeK6ay8gxWS7jJYLTocbLaZJdyssXKqBAPnYs7g8PuiZfmw6Rumi3Uf5LG4d98g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAy8RLDQmkp17HTnHHMx8sDyUjxQgAPArTmBdqgvTxqQjoc7p4nbsEznin4KLzi48eovWiJr1f8yiCR6N2c6nmZ",
  "key1": "KGDAdV6x6WnrChmsRYU6NYNcMpjWB5umqGgxmuKkgPQVA42nZ19C3uBYNQEBzDhxJCuAZ2Czj8un5dAPAz8fn7o",
  "key2": "ZDozs6hfEPXDPd9C4r9vQJMUmt1KAX1yDWD4ff8h87ti3Wi69zQamX66GnewTmuydmoCFKRv5YJnVzdWFYsxqkX",
  "key3": "3u5n51UDTNx85H83jQR9nF6q4pYUmrcRdr1gw71yu8EYH6ZbYzjcySboks69uMCRvyyGfCW6qoAK6UTtsLE5ws1T",
  "key4": "3YrfuZHaFuGDyRWZXBhcUApuK1nEqUdmsekaQfRLEjVihyb5v1qqBuMAde7vosc6gm91pREyWnegB9yzwQmQyVpN",
  "key5": "5sJ4UdWSdCq8zwiZ7KHcUAL9qtddowWtkNvwdRgbFzoJDiMLDzteFvDjNWfo1znXvrwuuA6CwLbZxgmrjGP3QRfH",
  "key6": "5sLpqjiSvqxe1hh8X4sv6UDL6J9xzchxDHoLbCanW6DAK595CaiHMnTRjt2ZC2cAYUkjDEBo2635bMjGnAmjhMh6",
  "key7": "4vs3QTBSbPuGvcknEnyANWnxP4sHQN2Aejj7ZjuVtRPYkLe2jobvjHhTMyLSp4tfrZhk7BaW4FyvuD64PpJ4YG2u",
  "key8": "5g4n1PNkLgz5S4onhQRqQTT5RjNyzzztq174XV7qy69tTUvGKpPdcrYrFeLBrMpYhUnmHXgqQypzCjEZmH8ydtqz",
  "key9": "3LnXBSMWpmMeZyqtMz2PLnRj42tMrB3tZ8LTd9kGfeKKMUwSDfqNTcb9VME3vjuANGgsBQLnu3CdrHSkyKzU7P74",
  "key10": "39zYd9q69be2VetoJtJ327uAT6LSsVFVLhUZep2hrJ6TiyfJMW55xvd4xURvwUJUBGzAJrjdQXfoUtDjKK2866Jx",
  "key11": "3LW6YucTTAX9tHjFhugSFy3EwonghwD7Ku2quoW3bnEnqfhMtayWFNQ4VYueh3bn3eZghMXKsz5o4eGdCzCJ1HZr",
  "key12": "urS9b6qF2MpiV4xHaTpmD6Tj4T3sEfhHA3QiL4DRjipszYXkPKGRsRmFPuhEGexSGESEKjYnUV6FZf8nsfYj7m5",
  "key13": "2Yv18DdaV8QyrGfATiPqunPRzUciF7E3rXuLLn96KjTvcpaC8g77wWyJ7ojr9LAPveBDscVgMayKQCPu6dn1C6du",
  "key14": "24ePYPtaDipobHRk1eshVpJ8BZzQHgXKsVbtMSQKkW4YphhSndrHHvATzpccQ1XGmbBcupuYRzoQ7N77cVnWheff",
  "key15": "2QE2jWQMTb7qGsfyc8jxTaS6JTniTudE5tuJu9q4uQb1uwZBVNx9d9jFGpabkkQ7AQWr5ytgRHBqcV19nh5K4KGf",
  "key16": "sLjYbC2pd4B6P96Yfu37xaXu5mQessQckSkiD6PnEi4F6GZpNSdiSAVPa9KKRLvJXtZ8AXfVsAKGG79qTRQfTdD",
  "key17": "53t49xM8TZCGcjhBiUMgDUTNCh6To6DQ2yreupFDbfQe6jyPPnRyVcbKwvvuQLVCWW2o8Jo5cPomhT5CudSb1wQp",
  "key18": "3d2Q95xRc9FDF15H5xduLpsuuhLtpRAxg2iVgGZBd3qrrCF4ra77NjQ1wsrVbNE9y14sbxV1wwN38Tk7uiiYVMNy",
  "key19": "rRVjqSkud3upY6A4QyrYodvj2T9DmcMcVhXWRs6CUKpvu6NKxJqbwV1feSAE9FFBE7XfBTUw2VEH4psi7ktDxSv",
  "key20": "388h1dKrrmKApwkQSWu8h4jSdcPNCJyGF7DC9d82a3cCU6X1Pj6JojkcSxpZ3EJHXc9saH7SgBvQdKxJFkFk1455",
  "key21": "5SCCC8Dmy2prH72w7Gzoo8QjKVrwDA14QcWUuaVPzM9wx6Rwa12HcVbpuXyZzfpTWNF8PR42dpxQkz8wRzTPPXp3",
  "key22": "66pDfUgojY8KkkEvKGkhinWkeZE96WuWyyzW2MUgzg8ZqwzRvjh3sp72gqwH4W4d8XFwZ8MEqfWxcj8HCmWjyVgo",
  "key23": "99JUvQkrq8G21qo6cwE3ZjXdy7cfXqg9QGhz4QejtejpLSntpToJrWmWAamAv8kpwZHxGunfQFnmHw4fWC3aSjs",
  "key24": "56eryRow8JaHoX35YfYWTYVmA225CbjxviTGDiZ7pUtSwE2SxdrG5FC3qMKZANQuPpMh3cv5BupjwFNDhwR1Tmhz"
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

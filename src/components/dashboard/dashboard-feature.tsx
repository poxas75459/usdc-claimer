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
    "rodLoQr9bD8Pts6YMPpax5GxJU7WqE3gN4zV8ze9dKPosytW2962JDRXsZwZKgpgLuHFb2473anf3zav9VW3g49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ece36URQgREV3hMPbiQeDDwys8BQjXZzvV2AzaRHe7wpeHeL5NQN4mQVur3ke1QuRxEZnrEQjx1zhRCgF6CkTTm",
  "key1": "3k7sET8e3pik1ivRtE8sMNB6Zv4SzU7MM6ppp47z7qooVdG4fiv7NkNQHchT2Jga56bueJQRAm8cE8MBeZfWT8Mp",
  "key2": "5hwatxtUUL8m9e97AGLj47jJebkPfDojBmbof4gvaayRgjmZFwYmQHLEiVum6GQxQXSAbs656SaKhvvnLNJHY3Js",
  "key3": "32d2mDtj1B5GVi2wMC2aUutC49VUt4rwK1M3bbpyJJQwgxUDjkbzrS9sd2ZdTpVo4YakAA3Zq4RPxhRpK8msbVXv",
  "key4": "2hPgaU4ChkGSheS5CL7LWe1wcfRPf9eU9YaNwhwY22ZLX9GLdDe9Li5M15tguLQ3u5t2bHg372fni6zMAhpZZtA2",
  "key5": "2ohf8HPc2PLEDbRbzvmGeeccegkEWd6P1ZBAEMQieCGojGg6bnCEYb8UX9ohXTYk4sTqjLbfWpdUY6CtSqGmxLwm",
  "key6": "ykY1TVUkehmm7A3aEsQhaKXgKtrUdQukmv2tHY76JvfSvLeJfSeqvzanYottvgiApviqdLtSGCww1YzdG2HWKLT",
  "key7": "4CJ2ybNNx6i9tMVgzwuJUxhr3WUZLVHB2VUvDWqZyfunKLFYtX9Fvtwm27d2jMe3X1KD4bGe9xrJqugnzJAUJcRr",
  "key8": "3HyW54Pgd9fBS4owy4iwKoqx7pkGcYis6ByZUgaRdfMmV2DQdJYsCTp9rCw8XPD9TtCZBYniKawJDGfQC1AkWLRy",
  "key9": "4P884cQxjyZxgD7uNcbBdbte86HRzwm2QUNcA3rW2V3atM5jCfEm9dGyYHpd2LXfYQ5Jna5yYD6Vct7UZJcVbVeQ",
  "key10": "BFGcGwcVcwEe6p9gy2nxjUdWEvmz59p3xjkH3FDXw58zz27bJBurDrFC5D993J5CY4UtEVYca5Ss1yKaPhaBhK3",
  "key11": "5EDi1zQDT23tmoMVeGpshS38cM73siUb8HbQTC5yWjAJgmWDjApBQ35bHHaGAAHizJqcA9vqyvjDn16jfBvCh5SJ",
  "key12": "4eK7X8TAzWroAk1ky7oSjLjNzHG6rCjUDEmffVdQnyc3hgRHvAUm8qJnbiMR5aR2VWgKvWusXThZJ7u2HWiNMsZ6",
  "key13": "48AxfHgWU9r7wyNASrrmXkJYDo7DGx4iwfZAc4Vez5s1yBmwY3KKRh8rT6Ap1DEo9FHDhnrxFmcsAxUEurdWSeKE",
  "key14": "2huziPHqfpEsbhxWcBaxrn1kFrDerXS6XZg8E3VvB8jMkL2ADWVhxWSEoYXU4XYmicw895qG3sU6Sy5hnxTnxJQP",
  "key15": "4w3oX667sMRcEXAQXsVKrcwQtxMawp3eeTx3m52JTPbDSXKKhRUPiRXokipyAGmUuVNZv4jeFh2SnjvEtGgS8BTC",
  "key16": "tPfch8zn25Ge7TFecsXtTqgwNMB1Rm33QFZZby5ocNcpa9e3FP8Ar1etZXhKT5JR6oMw3dZhuSBcxpCKaX9dSVn",
  "key17": "4wUzV4eLNfeLmhbw4gdcQpD7LpgB2PPyph53KgaY8wE83G5JT4fVRZvkxvfwyECyU1ducvDjenCJPyozrxWcDVN4",
  "key18": "5gtHmZcnAJrNEehc5VLrQn4F2sRVoDADDCQ75ainJayCK9YvuCGJojLUgrzxcah8TV51ERQYA4zkWAQGnWJ5zpoV",
  "key19": "4FkdniWEAhoRHPKa8741HRxApiAE6ZvGGjKm9ZnUmL5TTZkr8oW9KX8931yFRxLbhBSZ1JfwY6rvRSZ2gTeEGuhX",
  "key20": "3iaJyYzjLzD539SFs6dtm7HjgejDpRYBdZvt3VP27PWokkLkmrerVCaHiEu8RjnsnTqmaAaMz11hZkBATYqZ5dVq",
  "key21": "4Ejan2jKJLa9oksX3zH5mgxYVNaJ74TmgXWG2x3y25mSPzKFnHDGBmGqu4GMHAjT2mLPbezXHsd6kK9iKd75Ai7r",
  "key22": "cstEf8hnwzUwP1ofRAwy6bVoKd6bjQdxP8QUugCyXRZHQwJfWFMnNGxuoGAqUUNNmMKHX7ghiipj4Lkby8UkNxg",
  "key23": "3aS7EN4YqAj6oY9XXmEHZfrCwwAY5BYGcYu2pKhJWvXB2D7fRDK5SdDb6w2wWqFd3eqeeKjvttSfhgAfisf8JUoP",
  "key24": "2sADsx38Sm2UXZ48bqBWVsroH4jFTwcFJgwQkHs7s5vaaqNncmWfArbkuTqs6BdTgsUHaWwTKbnxhK7g3gNc5va2",
  "key25": "56XgKPhmuskTCHSigs5Zij4qAPMQHg7Gkvkr3HQcAyMq4PLZ5RVYvD77Qc5kN7846p4PP2aEaEPfEWWTBXgEp7Gi",
  "key26": "61cqKyq4jpSZarJ1kxJuYzNT5FmFXfz8MPjT35TznwgFU8NqCuwiHWap95uwAu7xYkQaxj74fbB2YVdy4bpkh51Z",
  "key27": "21iQ6gtS7MLRGddnS4tAwZ4zQLJ8uT4FLzcD1s6am47o7ZQeC6hZiP3GGuxWWpvetYQVL6BnRYCyubraouFVnfZK"
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

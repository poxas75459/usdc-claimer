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
    "3G6Adg6J5dHNbpNHS6Yu5ZpYtYoDcBhYTrfFCazyqZGMxvdzrXsYnc5jtTwH8RJ5LmR7cSkgMHRiLZuhrvZEohpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqKrYH43tps3v91aVFaymds25BcVz4GkNaEktC2fbhMDZoYk5XjzT5eBVvXVMmzv5eZsp25jjjSZs9PBpo3Uz6i",
  "key1": "5nzXPUttV1QJJ18sXCyyFJJXBmxUVZEh3hPzBjyLq8bkhGVLeZQKovKontBcLEjJaiQcTRDzc2KhUXU9VLxUd37x",
  "key2": "3myCPZVCD6dBaALU7VN86AhVF5j5ecVzv3o87ZsYZo4wAFMAPd6eDxNEh4BbBcjj5S5fs7fB99zPd5egveQGkfTg",
  "key3": "4xMoG6Wv91Ap4DfXnvBCGLiioafgiwqK4H5CKDy6vX1yhqBGFZmDosRVMx3XsyqWSKhGzNmA6UZyFQmKCtkJYn8c",
  "key4": "53awXEqTvp3jUDJiAApAJjgZNGTaVr4PnB2SveDzrNtqqqmpgdou2ykRnvQQkqZVc9PCRdhfJU58wsL6m7zHQhcS",
  "key5": "4ouMbwnCLHDUfe3xfB5WLQGTkXD2LQ6wLbeNxZ4cQxb5kfpy9YCZfNLYh5YRTx7aEkyXorpYEnTcJFYJ4NgccZu4",
  "key6": "3gXpofDvwbbVkQ7TvN1ndpUBbK69iNeDWjoT27H2y8Zhiq49oviD5KCjwERkzqPAE9KVAVzojNnjKoc5WA6jwBNN",
  "key7": "26vr117anc1CmmUzVXHKseUbEJxWpjqWiDgSFuPonNxLfNQMegcamCdP3MmyoNsVWEtCzURt3cbzzME1doWD7QoN",
  "key8": "3P2spF5n9LcxTb5GPPdQABnWs5L7mAiVDP4NsZtawQFNUFxqJ6vhAakPeK6URzVzjmoeixPDXKpdZSxuqnJs4Fzz",
  "key9": "2ZZ7NKMt7M2nidNys4qG9WjNNDK2AnV4WjWDKKhbbwcgFJLg3wYzHH3dUQvJWq8ewLx5WYh1EuYcJRm93CckR4TU",
  "key10": "3Fn9ezdRUusFGJG3a3EswZaQgrTtZrwfBCuTchj477VBV6ezYdXXWdU1riEcmFjJQ5FHYFvaK83aopa3h7uXPozW",
  "key11": "2toCv65UdBYbAShSjawJmvQ7XQWfyESfLyyYsAfUU4fNWsmF8ouEKyKfP7reFZZw9V2UY4NFvM3J2bCB6cXvkeC7",
  "key12": "h4X2C1qagndhWu3Yvbvo7SjxnzYkH3AyT3am9szJS8EyZj3JqSK11t916wQfy1dYX82jxkZKWqrxCH1icxip53X",
  "key13": "5eVCvJS9vcbZ7L3LaoBB2vPR76BgvzqZWwwiNKD4ew9uWFPb1VushA5gqzwLh7m7troP6v7t7ycaDrjCPtejEKgs",
  "key14": "3msVAeWMQxKttFEmELJW1FFNmHgnqtHMVXFH6LjDS4gZga3xBxgyDNz2YQbXMNJCHyChu8WcDhKkRk3LnnrkaYGq",
  "key15": "4RNcXfBWKknCSYMJPuWi2RVCWbrDxdUQaMPCsfG5ftCKPs6gcruWJFmBEDDWyP6GXvBiL8mjv9f3uAYbUCpgfRon",
  "key16": "57z5BxgZWahEdYWTpiXs8G1NrCtVRXwsiMjSwoBRgoWQs9RcrkVnTvoj3ttgM8h1tWtVNTEQMZ4dpM67q1ZZ7Kwi",
  "key17": "5PwGrBUVju2nWqRAwZrNbmRG9zbZD553Xc2TDyhUCkVzAXYMYLnWYEGJsb73EGNYDEG9hmUpdV8MgPrtuHzUMQiv",
  "key18": "4PuEibPbZYjtQYnfzvCi6kpt7bqEbWkBcQSWkKxgnYSk8NQ75tZekEwS4x7cSR4hH2YrVjNeaL83NeCCjcNDsVor",
  "key19": "YHm2KRhKdZuukQ1fPMJ8uarYFUZUJf6iACJv8yxRU6V6mmD5R5rUhHzVx7dA2X8Wha2dAKUVxSZMNMhauRz6r9R",
  "key20": "3NTYFDGP3FgHUX5KRXNfQAe6zktgWGFGKidpdsUW9tUYgvt1uDHZwGYPiBwH7sZCuGYxPtTAxuky1TgMRxQ4Gmr7",
  "key21": "4FJJqnriLcFDTrSxnbfXJAPkeHfbbV32spVj5cAH8Jis6GRZJ1yENT6xf2BWRvdwCDaWmHCC9y5KF2wrwm19R849",
  "key22": "3Bq3KfvGdZhpzn8JMhJbEkk7pUnQxWrRXMycLTLrqqQdfYgUstC4s3Fk9WxrXdYKgQkjnV8tmR4GKQfkoSSnn8gv",
  "key23": "G4EgjVKXB9EF5qMtaDysH7NrCvrX7iodYVgzxey4JrXcbrkUANwmeruzid8K6no7Ws1XNAaQ7R7pKuLQ6ZfHFUh",
  "key24": "5PJiJuqkp9N3aDhf9LWgHKqzgpFRVhAn9RvPabXYKLH9EzaCPHJGipPRNLiXyKTo29gkaEydVoyAGM1P7tPWVqfy",
  "key25": "2SyvdGVhvaKoFahC6RGJFQJb41h5tHZc6faYroaPjrduJGc1qZoGKLBuSkmbkAboDHTRye68YuC1fz85ZziNc5Ne",
  "key26": "4h4HDGPn9B1dbYdmFajhw61h4miJxSQJDcF7z1WbhuNnrLjiu5xC9upbuGbu88kABiWb6tvZpRfWf5HxoLQ9z2SN",
  "key27": "5r11Hycyk62MZn44YSze1rSPvH61DAmTgpoWRY36vwMrk4mYCXTdoAANELrbbtoVUSEqdWSCJvPyrokQMQjsiCt1",
  "key28": "5fS5h9nHyahMsPnv78TvJLkyT2VWqDS3dpfTJd4zKTW6chQ6X8CmU6eb9aooeKuv1zFXksA4Cfu4hyRpiSiryb2x",
  "key29": "4eQo4BZiHwAqPidPe9n2741VMxmXSoQWEW5sNNQHfxJFiiQipi74oDpsQ4xGt2XnG91Cqnn1mLk7FLHsy78MTX7t",
  "key30": "5LXZ9oQmNg9BECZ7RHPDdatGRSh6M9D8LGrdEv5w1tGv3j6R32R4hMvFdXgYT7Aoghwi1BMAoCkRZdTb1eLgYm5a",
  "key31": "phssQYtN3iGiju59FWa2FUWwdZJt73NE5hy6R2d3RgKvnVJjmMvmA7Ud2Yzoe1djbKgQyQVvDKT88Qeac5WpWeg",
  "key32": "aD8Jv5pSyNeit9zd8pZ2FteWmk73YdGmzemcLtw4jAb3SGSLhVpChsHhySW3EVE8iAqLCZMUGkPjbRyjcAMzF5o",
  "key33": "5jXCTNX87MJNUmNm3qCkFYARKrxNXbPFjZJPNES7jwwGxsr5XRBmrMZPGw9w3CmcgAsJA3jC2d5gaHzqz3y1rS3b",
  "key34": "3qe3MsyF8TA3JbGJJudv5XQ4Cy9SrBEeXW1pStQKtiv4aPJDP54LYJE6kRpCWXPqqofCnePGFMU3dmXvuyenDBfk",
  "key35": "3oXyH3vt831Gsftj5itnD17SCUqBzbvEj1QQo8u8QdB7SxKTjJeGcJxLddByrnVRkZ52bWKhaNx3YQjC7pXAWZ2d",
  "key36": "3aVhEkpk4F67x4bZtgZtSvKppjwPzdycxEFJzhWRQPK1RMUJtrX8rWrFM76jJ4QxpCSg7aMnYKi2s6nu185waQGR",
  "key37": "5uRN2YiSUnuw5fH8Di2a4jJKLaNeU5GRkLfXcJm4G2aYqbRAPFKEGBgwUm4jFtoCCu9EzZD1JNxzyg2Jtj3AqAK",
  "key38": "5A21C1boqguzirgTEWd9B2vYBKBeo2XmxNCUoVGWsMgM9rBjDqsWq5efgBSGAzwXGz3wpqpkoSdVLH5kPhceXgcF",
  "key39": "4FJ8HBmswTe6kUJY78dnqXCaDppNica57Uj9BsZZNMPfS8uJ7A99MqKhQkTY1Z3rh7EXQL5RGibJZPh99SNWy39V",
  "key40": "2uRa4b5DYj5Ek9XX6tkS1YjWDmMcAT8Vtxz7R3Lc5p2959GdE4pwXqgwdmKBWoX4fHsQ1ddbqTkoZ43koDKTEr74",
  "key41": "4Pe7qsY2C9Dff9KaQP4boapThCHV7EUsaB2rLfWfoWFFehybyTGG54mXYo3S5RPMUQVsicNtLYXrz9jgJJh7C732",
  "key42": "3qG4BL3xzbUfQM8FMzAa9ShCaeRNbSjL3US9dtknRcyMCurZRGn4LBjNfHYjd7C5tu2zH2GEPYK2GMGCJoy46mz6",
  "key43": "2c8qiVVpdaJvT7T88V2WVSVGsUeh3G6ESXea5NAQ6SY4MFJuFyngBwL82JS2eKVzzjDQx5XDaob1NehNmFM9WYGP",
  "key44": "5TfMQVGMoPYy9LLSdsCHfF4n3ta1L7PMhNNYmSCceb5qKY5F9BW9h1nGHhuVyqBybTqPqJAADESepFfWxYx89EKE",
  "key45": "4AAigcEshqVxLeQWd6gZ9BxVCmSFrPvD49HMoxXkgMVwweYYBn6xEPaWDuYwHiy6ZvJRmtbGmeyoUkyyUuNDEncU",
  "key46": "tdveQPHru3qhTXpW5JprPXGrNaubtFi2AjQRofXeEJNUcLjCBi953SSqHmkf2L1Lg2USEZ3K38Kyqz9g45bYZ3p"
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

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
    "2tMjZbbVXcCZ4W3x9SNBXYbq7pxZJbzfSMwunRTqXX2XsZK757RWV65a1k6QJf9UVBYhzTTvWqCnWY2CTshdXLmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSXxw6afiWsJ4THeg26kLue5jjS8TKrRHQLmpXGMzYxtxwpFHU7b6c4ucXh7Qyxo4mZJMhxhsaJmJW8vb93sc3Z",
  "key1": "NsVnsvxq1si9sz8P7FZV76DQaNyufm8UkaEbhdyoEtUWeYmyLd4wdK7Ly3WSFwwanuTMhpTwnXMrzzy2AxrAHRq",
  "key2": "5Kr4XSk3awnepVFStDWNjFsjiKYGr696uRwmW6C6voTLgRTd5qUyrVPYH1rZN4jMXgRug3Zp8QC6TWJ6ubHf643S",
  "key3": "2EuWymGLPECdzAAgAj8aLWjEws6Jyh2S94DdQWTfLWbhe2tQsaPhmfHoFBi45isRGPstgaAN7kmGoQCLwErJM65x",
  "key4": "5NfyZh1rRFnsaDho2fhiAWsHGFSn8vj1bHz3sLDJw2xEygHTMPynRhCQdZ7CcrKnwxqSrP3U3DFHuxGDUJHx4Gvz",
  "key5": "5QsDetgCyVhf3U3jq2oRzZZR7MVBrWmzeKMAaXdq6Gaj2dryBboFNHZ7fDKjJyDuLeA37aVAr6nKxYxrZjSD6NRi",
  "key6": "4vaZrRrBPxP3JbeE1oyL3BD2qJgQcvYqn3xZs9tHD5DVeWrj4uwZWDscjUxo6mXM8P5Lf1DQ1YNVo7FUHYNJeyvM",
  "key7": "66MyJ7rCBHMGd1zVkuvBju6VJTYhz18Rej9xfNYCR4gMGHMYLQZtWZbAVpBQw9h6EWYbMxpkcu4HDkkdCiPs3w4k",
  "key8": "GsauraLv4CriiyfZqwnDFSFMDsCkW9zU8zWYrbCHCGdBCAPPKxwpH4CvsfJym2rpLDSAzmaLtVRodJBZsJUinJE",
  "key9": "AsDMvYZFwVRHySHj5q7G7hq6KogE5SygN1hExufjhaBaXPKWvH5NXEaRQTDE6gPSTouu4Hu8CqKXZtvHkNU3krs",
  "key10": "3n6fsCSfemC8RbVsJQNsrAbDkxREGBdfFjKLkJXEWovwRoibV6v59f9uQyXGLB953diUM9XPU7X53LJZPRWL7W6y",
  "key11": "21qvsdU12mM2d5PHpxrrkmK26zCzczppGweqmDuv7neQbHnZ1VEQJugS9ckDkRtJmYvud8KtZWn8uVkx5RX2jzD5",
  "key12": "5GsV7gDnjjPcrynjccnxazbdKUaf8qM3FvKHKtNyQ4fJnqHEewQEfQda9yAdsQEXvPJLcB2Rnviu3caYo9f8SYbn",
  "key13": "uLzYwCczDyQyscPBcovRfNzJuCv7AbrDYfhUBs4akkAFv1zEdkWJ4GgtPPdkHAfxMaxjeqkKjAuvVj7ACSPS42S",
  "key14": "3p1BUcB3ifegkFyBPQtUw13cshZNq4xPN36os4GRDy4rmyrxyw3qkwCMU9SP9yxXcQUT9X56ivDwGZAcHQMpS7FL",
  "key15": "31HUXWzFz5ejpzpKac3N1ULMaUMxjetReTeHznSQEiQyDXUumECcea36XN33EWxCufupLMHcSNcjTRiqp63pboGy",
  "key16": "KmYc7RJuxTRKQLWN8tESc3AtSwHvQRLtpW3P844YP2RnRCqjwvowd1aAkropFnBrzw63BzvzNaqEUyqqDsRxhtD",
  "key17": "5eEMHvpvpo38Mv1CDWyFYX5Cmpeqd4B8114gxWBqSUCDzbDSTfRV1jHeGXArkCNa9WeqHQVAJoFEbb7szkbVXmZi",
  "key18": "3Wb1DSVaeC1cPxCt1yPAqYPcvS4j34LnXxnFkCogWUwAHqd3WY2a1KM2AQeeWvPWXp8U3EkeLef3ZV4tWLn1mPNh",
  "key19": "4KSC5oiBjo1enC7ijn54WmUsAbDpH3YcFDE1hsUVNDN6rHZPRhtBRgcRnpKvejFtAoqSjvvHZ8cGgto2DnMs3pcn",
  "key20": "3mp8mBhji9uhEuZUKynh4hxkPQZEgRqWSWcpKFCQdzWziUtN55KpXFbV7y16XM7sZJLEKofKkugqeyNe5kchMehx",
  "key21": "4roJAqvjZ8pkzyC2CD9cJNzXC6VTwzHtedBDoSRvY6eXuaUMkV7335geHNCREGeNsWZAjzePWNkjCFDJhQnueS7Y",
  "key22": "2AiufFvtwP5xHeenqUYp76b6yLyn46k1Ty3yYUXUSMDCPDRJJHgGXkBL5sF6RcgdmUDyTUi6HdGvUehUCm3KDLUa",
  "key23": "2zBSdGaxYPC9ABABsjrx2k86oWAJWkRGvWsJTbdsGindJJN5fo6A74bNCyS3CMWLrPMmHNDn5GQcrgiuevb9hsDn",
  "key24": "4A5E7cSXMWjB2GyLt4bytXimBGMpedgwZS2tpHv3zFfQCftpsNQyP8AQmZqFkrosiMRkctr5giMQkrtRfkMdR1wi",
  "key25": "uFDWE5EtHv97DvC2EHYw2wG57Hi7Aeuuf6s4NYbCyHYUMvYv8h6hS3sUB81FAJKSEFyCcQ3jLW7iy67b2GRJeNw",
  "key26": "3FCeQSUiSPwsDM1J8uESHs8bB9uFDHEGCvKr6BmMUhbjiEz8LaCmtXD5k4HzE2ZD6GCeAFFSuPb3WYvRCHdsp43C",
  "key27": "5x8UGGHPgnhSeNSCURtJpFxaLHc535kEzvHbisn19sMkqJMXNBzY8eUpsmNLwepxefLkPyEizmmdrp2KLR1H8AkD",
  "key28": "2hnbHqvYr4oLnk7GevYWaLnuXttroUyg1amh58vokNtA2H6MS8q1mYibvdt9pA6qcXrrKtp7QUb9Q7W1Knmc9DBK",
  "key29": "tiGNzZ52zajWp43cLtwxMvf1Lcx5qKWAXmrbdbfoTUfCP39Ydx7PFAE9uSCpFnepToqvQUaN84fDCYdqznpmwzy",
  "key30": "4uicyYpz8yXjYjxdZBNHteaTMXoLSBuoLVwAAqJQbg6LXXML25Qsv4hpFqGDSoXcgu2amQhVBK3JJvA7HLgY5X1A",
  "key31": "5n35vbnY1y9wFmcVJiqYxcmKoqe4tCzhvsHt55eKG2nYPypBkzKq26yY7kN6dHRfEkhfzSPvSqxrZ9LqG1wYoTAd"
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

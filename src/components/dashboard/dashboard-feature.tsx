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
    "3k1VyE56U7jtdyoGU81Y7L8JVoex3n67StrCDaRuF5FDik2RAruUjyuazUJP4zPapeEemozq5YbdwUR8w1EuAUrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnhXYXDFGcGEYsp12yxX5nXrfE3fXAS3mUXJfEaKREjhHEGtnWNz2TBb81zb1fxUNie2Qpaqq8yFMqQ2foD7HLF",
  "key1": "5APUXJ9XWCCxtG4p5rhdWvQUskvdRxUWtxcceqVFVQuJajphuFYLw4vJWt45y2qQsKPZpuipcEyE4we5NxCKqPNC",
  "key2": "3H5j9hAJFgJbf3YTh3pjXcrNrkTZTucByLp7HMdispfFMkDY53VVrjD5Yjmsp3Svx8bSZufA8HbHD44dW5Jk6ndq",
  "key3": "Dd2wmjyBNHbcTPfw18YzECnybXozH48aBAiA28TjEJtcYzzoUyk8ZWXnKGyYSi8vQJVBMx2rUsnbjCgh5r2Xfc5",
  "key4": "5pFZEwZ7Ye64NFNgeESYsFVDWVjUxWFWr4z6ZLhBoVaSeS8eAYE4KBw8T9V8Bh1mGFNdw8qEACdAxrbtQqdyuDWH",
  "key5": "2fLuobN4DCg7KpscaaRdDUEyazG1eHs14zZ34tddRGaFvDXWdrbhDXtiCjmcLhTeBguCeL6L6tEh8wf5gSHTn7Ux",
  "key6": "47oNGP9eY18NK4W8KYXuZ8evmmbomNnAspg9YsPtuyqTAvJUBFRnDEuMa8XQN4SpHMHn4RXUFzNukPvx8uqLxT2i",
  "key7": "3yWocQ6bSKZNE4PwDWpzhS2nHPjUzFHVyFhoXxr97zbkKaRgTHKrKXxdvXL9KLDMmwLnAdwomiBLNGtKn1XeS1B3",
  "key8": "XzXbpVFDnATsFt6B2GUXorncVjbmmzCHvXMeVsUEB1eNsCD9neYSUJtN8pM4iCEfE9fxBTeX1LfzAzbZswSaN4c",
  "key9": "5vfvYm3LvoyPnYGYvZpUdius7HAEYB65bNTm6M8G7TyT1HsjuqWtFtF471HodwstEc6E7LnyF92LXPyhcAnA6Wjp",
  "key10": "2aVefVRUXMMDF86YsRdH2pt17yUjKam8JuWirP3adst3mGLZ8uoNZrrCYR3KShBWtM7LFxveEZvirAqFgvrSAnW8",
  "key11": "2qaFsr2D21aZgxhMNro1yLT8Jh7PzKA6fzdV1ZSwohXd2Ndg6g1yLKus7iQvx887iocKLJFSL8qhCXWtELN3EcTZ",
  "key12": "5JnfjdDUDj4YN1PtYmrt7rwZV2it9zFi11DZUEZjyZYk7A3GtAd7XiByRAFKyTiTmDqeWMtmrsNMMKnvjS6qkYgu",
  "key13": "B5ZHXSvk34FP5yZuU7yAyZ6F7sP8A6tRyuJVsgydBhrfx1fXeofB7mEcwrLK8XryA21WcnkWwhCooQxP6MWPQFb",
  "key14": "KoP124KERJP22RRcwK9zk3nFR8eum1ChLdXAQ9jyJhw9f7YpDCPSe9VaqeGknZoGSNCm4WwgymzMGJs5ft9J54x",
  "key15": "2USwM87pHMJFNPHmxxWSaipcxif2mej8Bvk4fChZmYajwpc73RYFRGbvDi7CwUGPT8u8f1iUFHAgjgnMNbffguhb",
  "key16": "2BuQdtdAJLZVtySL2QEccXAH3wGq5YW4tx7KDF7FnLT4Pu3NGiRUZDUrK1s5qpC6BWYpdKNCjJSkJGRxMiW8EsfE",
  "key17": "2uf8KA8mqfLPoEBHrsAJC8yuVzBYWX3Xv2kC8DC1u3X7DsP6f4H77hrJehgGd56RJx7cH1Lc5tbTyFWLh22hywAT",
  "key18": "3d8mY1kDJJ7rq92eR4hGdcBpUssGZBxQbaLfRGZiyxn5pxDDxk3nq9skw2e1JWXbzbe2qce3wKqophK42Xquuqvi",
  "key19": "3Ksapmv5Bv1xeCepqW1UkCH2KrmjEosByALQ7mtPf8GV9HEt3pmEijb2oh4jSdby6wKUh9iRFcq6yAjL3e4t94kf",
  "key20": "3mQP8v6uQ74Awxv27zQwBbJtpojdvrZ2w7sdRmKuB1AsgYx84drrF6CnLkrR7GaZqebFpDdKdhVjEGjuECEdZTKF",
  "key21": "8frHG7BVyqHcrxJMye6BBT6hATDkLjgCVzwq6C6taySorrGdKjMBLiukzG4xnhy7jcLjrj8othGzc6SuwV2UDTJ",
  "key22": "4K6vv73c5pBdhwRUpAVQgkqa16HpStWXB1LibmL1Gp7o5dCYgY6XPRL6gi3orH9peKaVtjaujL9xRcD5jZKCMkVR",
  "key23": "qLWGsLeLt7zYoKMyBWkHbPs9NCMHbnZQKx2GaUHzMomH57gQspy8tcHsJjPEJdV53iaTPSEjJMmbgEMmxUfreBF",
  "key24": "4q78mRYFyPJGPCeHV4te9NUkLWqQmrsn7CRXJwmGFvQKf7KJFfQzEidgtpNitJ7m8yYg8cvcxSogJW4aFCpPE9DS",
  "key25": "xrbsGSCHbWkN3W4U5iEE2M78J2xBKupS7Hh9wTHrp1ojYtR1tNkMApvUfjQfwqu2DCV5c95dxWcU4NLK4N8Hxvz",
  "key26": "4hJuH9QkfG6iEDHTg5xHExzL9udtTUF28o8VJknpYHWQwHCzAZtJpj1R37XyDKtjkKULQZE9jNPg5WNyXHvssFDW"
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

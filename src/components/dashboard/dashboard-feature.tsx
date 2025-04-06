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
    "5yqhvK44KydXHm1BUWFJf7tNqFU96KgpnV4jgBeszE2Pd8zv8EMEtQu1PFTjRZnofanuRTYMbLoKTm2UQsKPo6CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S7CY9mixQ9Lada4kQpUoMVPWWAjYFGM9ginPsGRrTmzpCJe3S1nbCVjLd6fMt6bDYUXK4MqBQGU1NWVkK8m9D2c",
  "key1": "4ZC1VRRLhM7iAMdp4qzTwzXBjA5nVutJqzMyRmgynvxKiTdbwKfd1Ltdd9abATH8qnz9YJNquS1Fo3kUfBAkjHjY",
  "key2": "3cCJ9BvtPEzJTaFpLw3hF78EHJGCHLnso5adkuMWbQbBpx5xDi33dY2ypyJt8Ta8ZuXPaPAH8ViqBdQHLQg8VP9j",
  "key3": "D3mYB8JCunvzXKLKJackdrWWE2LY5dqQbn8bV3Sa9GZCTNqtsmVRMkbAq7YrATS6XBAhEu28hpYtsNU1zjrRDwT",
  "key4": "63JR9j9ko6V4aBZa7N8axBiESVSqwK5VCx8YZqXZebiNrgL23Mwn8WXDjs1vxVLB18AisgtSQAixf2CJiyhPSB6a",
  "key5": "5zeySaPdRyZYQJ7yfq2dzRtMV9dQXSJaMvPhtJumZdofKopXgAvdFtwk4TQTWWEZUKESVLVsiMPZ9vJyUQognQTR",
  "key6": "3UVARvKQNNVDTLtAnvwYJfuVC5Va6ZFneCkaCrfA2jcYFHJ4PRtcERpGMfUNdbc9Nzb9nb6K4Q97rKLHquJuDtNy",
  "key7": "54hC3kCwf8YdQPx48rNzdQU5Uwhtb444WXidkcza1dwLsY4TiktqAmCLFrC4CgmcF1ZyZevr97nxdcCRknvuALEN",
  "key8": "2eXUi74Ji7gCZ81jBnpXzSXeM4t1dp4o74AjcBXkQki3mix74u7g6PVTbQZz1v9ccrNyA8SGNtD32ZYzxEZAkKVe",
  "key9": "55HySwukVZLKjbWjZe5EofaiSVLDVWsUnxihUZssZdki9JjXutNuEQ7dgSVfKZZJL9X6ucn4tacZJM4MbQPmrsXE",
  "key10": "5GWpzkNjJR8gi4fRV7dnjVoNCvHAMqb3zjSyG4pFS3vmTKVWqBNsQp1tWVLjUHEXvd7vBsw7kDkVWCF9SdXiF7N6",
  "key11": "4D26TWpYieMjYk7Rttv3nNe4GCqGhZziF1Aijirf7goX2ZHS5iXJvsNLrShpWqU5kWnZDft4hmW61sNNsw3VTQbB",
  "key12": "KydNVX6HTaHVgdR5FESNNgYypmgSjvDBp18zW1jcmwUgb4tiKqwtDCwiFk5U7YactyXLFzkgTAkXzLA49QnJaZ5",
  "key13": "3JAQMiM1jkqzV3b5P5gQHjpHCUuxeEZcPdtn1CX2Z6qVGHetwq1Fjvfaavfn4ZNtFyiXMoS32UVxTC6ft9BqHdfj",
  "key14": "56TrR3fWhQkuv54kuF64qAJZNwbyfWdhfpyTFfvHMLPUHnjMCjqzAkRF7sYuD6KfQjm3HpgzHrSLJ1TqcA6Hh9PA",
  "key15": "3hmrhu7D6QNrfqwUE83JykkMDXbFXYN3upWH6xcciNnkQCTzKgHGuW9fPzVQcFY9wtLq4JNqmX99wus72jRrBBJ7",
  "key16": "NFNDaAFsWbZT6S5dozfGPUXcV582LKyUCSaW2akgRGNJHCbne87FeCKbguHLzb43BJK8rRJhk4W8XR3mSymDzkK",
  "key17": "5D1fQkoWFDwkmD7T2tdEPr3hNmdG6JhLBpMuZvf6PmWtAU8fmgo4KDT2t4s4JxWKZy4Y9sn2ZjGn5qfU9Subp6Vr",
  "key18": "2TNdALQgivfpKrqMsVsnbuPsiUfjdJqMRpej1mRruk6xpRwLSSK5oGrzuXQjdR3zNB9yYSpaKyCCimBudDcsjSkP",
  "key19": "2n7qL3ZjjuzkihbgAFpU2Re5NcFSNEgkd7p9gR96P7GnXLzrFZty5soBs6EA9TqBjd3bGpkz1a1gHcrY466pzEk6",
  "key20": "4hPb83dMKNvYqtszktTNG2Uy7HQLbYbDnE2zctN4HdriAmjG826oHKtJBArMj6pvsjwSFTn1R8yvmbU94xD6QChy",
  "key21": "79xjkdGgeK7ChBrgaLuSXgJmJHjuYEBaBwWkYkbJTZSZ5J37N3X3hRzDDSQ1A3pDJ3zbdyC6G3L7mYH6ANG7u9V",
  "key22": "2xAq6FVKREV7mSURYTVRH3WZX1nYfoF4QheVC8cSaTiq8rttWBxuP3AxWxuAsv8oo3yg4NNEKFGcyPCfG7fK9pdo",
  "key23": "21wRwmRpeDXirQTnKYcoiizu6fpa7gqYJ41bHCW2o5n81LbF7Ay4pD8kDtxqK9cg7PBAboc7oxz8iZvfRE3AVEN3",
  "key24": "3JgJtHJ77PbPR4W97fthwt37Nazj7MVtQh8fNWeBxxJAJuELgfEM6db4UfvVTtTEn7NDGDfjG9x45Qo69SWncMcQ",
  "key25": "2qKNGearas33BcYM5WTs1jgjYBkx4bNSQ5yBXcfdXKedJBNDMBB93a5HjNLBajbs9mWk9Gfq6DjVgcPkQJ5JAmPL",
  "key26": "3yhD1y7F21Z1CZNQgxp2kmKePpQKRJ4EQm2w2xpJpQapLvtNP6hB13CU7PiocWGhhb6xN9tUuvkoyFajXJky2kQj",
  "key27": "5zvQsjYXdojB17Y6s2KAiPym4Kv5t33gCqzvo6sdvtA6aukGoohb67fmU4RxgRzFHxcTQFTEuhG8bFyyKMEhFEJZ",
  "key28": "2hX2Hoze3Fbhvfqx5FAFTcJthD7xAeTKiTBCAK1PngbzZ16ke6z4EUGY6THmbh6JzC5rVGscfrdUSsmu89GDasDs",
  "key29": "5gwSH4s7Gmb4mZvXPPfoLQaJX9BNLKRXqhG9Rug95YnvNjvCjPgV2MJgjQhWzqA1EsiAgf9VA1oZYG5PwBXk8Pe2",
  "key30": "ruZRm2R2tF5vFChsfaUHxrx3p59B7hFyXQ8QKQwP2d7UVthFyaMVY4SJubqHjVTr9gppCjYicsTjMpmCF4gWfZh",
  "key31": "ep32HpcEQqVvWAhka122QN5QXghwBQwkHg7P4WRyH4WTjPYicYtygf1gHzb2KmhJoiyHfYRFdkjmxSaYt9PoDiF",
  "key32": "ViY3CgCBsLsMx4fZ4iky9nY6JtDGb1TkPnT8SWzRHnwoLsRMwi861Ro9cTPmDUGjrFNnm7WRVMuYyZvgAXKz5fT",
  "key33": "kjkBpQkmyvJSHWhDcqSt5zJKAHM8pRXnFkRYgnnFVD4NTNyr6KLySptHARW11tin6EY6ac2PMcJf33zDifnLsoc",
  "key34": "57pn5jginWKQBnSToqXYh3TRqg3RFrGnNkLnRwXazh6iihw2Rn5hGwDxSPgJjcYLqDidYY14ToN5GfbzS44nX85G",
  "key35": "VVdcQDzPBmgx6kSgJnXkKeP7qMa8Va1MCcyXcXZfZ6tNtj3M3fZNPnVeSqc7DfazdajTBW4YRpzjAkfguHEm9nr"
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

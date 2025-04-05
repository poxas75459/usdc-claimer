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
    "3qm9FgCNVL3MjYStVtpCj1nJa98pBFfZcZTgoPmBvciKKBVPnj9Q1boE9Wh2ZXvCo7o1NNau5Vd685dBRXuDfeHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkdW9dfgJSz14EUEwwUWK9dCAFqGVUerKUJeRkjatKskg8YCV2YA6Efom95t79PfGZ1qeRYV3iaKDee7FVH2YNH",
  "key1": "9FBp943ti61GCUXe5sn699viCbs2Putkag4y6ngzzRJJo5R86rnT5VurBy6tkGjG6pnmLu471E9Wdtp3rykYcRQ",
  "key2": "2FvRqXyVVz5JG4v7Jvda4RTQHifCsHzCHgaD3vuf28iYLaBiyLWzLvLw1c6iYXkHFLXN2P8LAAcWiJmaJeG95WE7",
  "key3": "5spz6orkA2TiSQnruWMUYboRQShsYf5hdvatHFMtkkqSVEAtsva3vw7j5ErxuduxCTyi1h3ZvLzeAhTpoRSXnqxW",
  "key4": "5nxVrva1xD5dfYQUJhJMhQkZTTwzYb1KnLsoXA6pAdCYZJoCJC6Mcz6CBTXyE2dtbaLkttNnYqLa2Jxq9bqihCqE",
  "key5": "2a1UJUFVpi7AJ6ywT9Md7RBbKySEaWYuFfHC6x2MnH3C9F5odAZ7JXrfbMAdrwXt9FBM7XMKP5Sv46uTQ3zUJoGR",
  "key6": "54KUmSc3fh2jpCwuooUGfBazaFQLNtJCnPNSDGN5j1sp19psezHc6EaLA5K26bnuTxVbZJJ6b6EFdgrNojZZBCht",
  "key7": "31xyunP2c5XKPY5nYVC2RFUqxBRH2WfMbBqxbX5e34fP5fFuoFzHFd2Sm39R4rBYFnNUupWCMdffVPpRvzWFdSvo",
  "key8": "2uBBdoSjTiWRuq6vfBVgYNVhhmyhtQM2k2fhzSSwfbAmbwc2Qgw8q27wk56p31o5eMxWohyiEDEHbaATMdKUfFUP",
  "key9": "5KDrjJrs2qzNi3VJP1TYe4jawWm9AtC6ZRa8J394wUBBWjW3j8BNP2QPFWpGjuv34JMTuNJjEMbTWpnbHNXZ8jCG",
  "key10": "4YC8jsRWvvRMNb5cKBpCL3o11DYZTv1Ka6rGYedTZYAPNzYyhumjFAMKx1tmh41nQDGd4ARaMLCdnnXMQKHxTF1w",
  "key11": "aeSimZ1g4W5GnGhPgtV6aa67RvA5MLcestMvKAPfd5LCqhJBGyXVEB2Tgxog3LyQckaNi4zbgfiGUfHQsW3EmkL",
  "key12": "8J3ksMGqD1BhimMAbJ8f7DYij8fDnoXDNNAxWz4GaCYwv2FZAdZsT3MJeou3EEazvGGn66wPSyfpZQCZJgxkBo3",
  "key13": "5W5uaFDWYy5ceN3DZpQvaD6AEpwnKJauyXrwi7vNJmAZASy1xRprEM45PwKTa44pthrgFDzLASvCwQmwEscWU6vf",
  "key14": "4bdc6jMr8qu9MZ94e6kzYocwXzHWW5sqMEnANqE1MsQCEDWja3WvqoAexo3Hbx4zwfViJK6S6WwhrZHZDaddiR3E",
  "key15": "4aCa3bCc3TgJE2PM7eJP6TLvZxmhFyyH9xReAwu7kuv8SK4kuEzfd83zwfmFZgRh5jrX8ukyaXULis3bPbVDSw74",
  "key16": "4G2sW9vM7PiNinhFYE7H4DzXyRHSpFnHw9oP6yrk44mbgRELQ3A3Tw47C8gL3s3Nuamgyus6vgHozFMVhtfeuBz8",
  "key17": "2Ls3vXGY8EgdB4VCSvy5CRDJG3EtAJVRDd6LC19YBekX3YH8VsXK5X5aYngxbm8SLdf2tNgFuUJ5AWjWzagMjKeC",
  "key18": "2ymkzE4oRCpRMZtMeGTbcwTkgigsjxRY4tZFNNDCTDQ1DWpi2fFi8hXPDdEo4qpGGf8JSQ9YSD66dhsj5LNUX4ms",
  "key19": "3NFLnxwDJsfZYRwfoKk2hupLKtxiYMiHnBdmk5h6HWLKHLrMQvPZjrMdMY2aKeVGjk9R4EGPFyVWA9zgD5gZ2c3F",
  "key20": "4aUGnjQ7RBzfhMUHvh8UNnVi4jnmWrMVWpZ61DfGEXLH392A6DFHiHrdyyFdDznXHuvZjvyyckhwzCy1SQrac4Mx",
  "key21": "37Yo1jCCifw1YpzvVdk4fpktXjHTzhs2E6GY7EkgHuBwBWoxRaqsuQCFuEagASnzw5o7jGPkSfTo53FrhLoubhmg",
  "key22": "3BUAcKRveDiCksZfoxke9V465zA3ryRPheGRs2iB3nSYu2tq38pLc2Gj4zEqqyYUFY5zVVMGnvk1PYz3ujVb2k56",
  "key23": "25MEVE3a2nNxSEY9qVzzzzH16N2qVC7rhhUg8mYdM2KVBzd9B1CfJLuxfW1WFdu9w2S2kCSQBhhVajfARBWxaiqV",
  "key24": "4A83oJY33PNw1ExNogRVKFZKF2qn2pGJAMcVVjzoUmmy5u4zq9aNBEmXcE11ZHdtEWFRNiEpMFWNG3y9PkhJxH1p",
  "key25": "3GAFDgTMbhNaDCwnrp5MDbQQkQw71LnmRQcUoZVuABkv6iLtGX7GWz7qwjhYdcb14JWzpS2ZxYEqWTqe3KgHW1Eo",
  "key26": "DBCVLvyd2apk6AqBfCQu8qWSpzCvJpJPc7UHFxTu4vw31aQJ3d1ffbhbyuvuGZXjAmrkYfAhz6WxBdhVKQvRjxP",
  "key27": "54A9YMH565YkadrCQ9KsBdx16DSdZtvC8kGaSkTGUxZNN4qhofC3xtK6D7tTcdqhKQtqZfDjkmWehrUWqb5NNkBM",
  "key28": "53x4FgNQT9Za5vGr3p4Q3dYQ2jGqLdfibUhVne4fZkspGw2ji57BrWrrwcnmGReiJS5y6vfZBBGKuBpDTtoRb8F9",
  "key29": "2ZeWSNNWmkbGLhUhEFjb3qqZgFn69LBVfNZFdvxo9mE2gyy8umbBzj3qqAFGVS7VLxCzFMERSSg7ZBpHzsPrktJQ",
  "key30": "33QjaaY9B572A8whTBogFf6hgn81edbpYAn4VwZ4x6Uc3VJzzPyEQS3jxDqqBEDWcavHH5EfQkVrN4gCekUuyQum",
  "key31": "5bPPAthoXUx1ym7RZZmGjEiSmebhYK2AQggbmNcPGjWn4zQbdPWdQYM4GMgBDnUwy6rbwomiBaP3zsuV1HpD4Rn9",
  "key32": "9cUoDU4vg3EDKECbEqNJg9mQczw9r3Kg1foiYa7ASsaejwfQzEcHTiV6NuCVXcN8ptQbLVQBBqBtjnC6kKh1Hbs",
  "key33": "5D4wuEWuMyc5iQAbq71ebmzkXLiqj8zMy9oFWM1J8DpEdS1F87A4LHp5mAv3KEgS47T6MvoXztVv9Gh5aEvFtZBT",
  "key34": "2f6StzHyw1XSu693mDZrDSYLMkZ56AL4RD8fHZnRY4LMy9dfUyBhQdJvUm89RJkd8CkS3ZERF9NFwmh3re9QRVqn",
  "key35": "22bimNQ9tXyMHeLVkAJhQmAsnaEbdu9cuLGuTCpGJVyCEGuTNft3NxFNonPLRnKcNhD7wujVzYcdtWaEVTyjKzGj"
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

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
    "2j1jLWsm4FaSSFRTdjhZxpha96DL47wvg1E8f3KkJhAgaVWEGjtHmFyPKfvV9A5nZ5jFHY16DGMR7zjbGnUGdGWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22PQTCueXWdvhtYHQqD44K6yT4vC2tyYtTUUye22P3dom2s4rv9nE5JhYRPSpKJqgHhF59D66hWg2EzkPhekkiQZ",
  "key1": "5BYVxbvGjpdSH1zNpNqHtByxFXUdXHxX4UfdsSeBFbz2yhb7xPUmpyDZqTrW7GVtujMHWnk2bg949CbDTwd7Y3LR",
  "key2": "3APqGnRdyDyN5QELT9cuEJtX5RCKFXpTkmbCT7jVtM8wRZyp7ekwwPHVT61SWKrTgzgRU2uzfvEuLiLLmRWBpARB",
  "key3": "56KLmJe1zg7BrKwYDa43gkNLYbL4X9K9hgegEt5zsKFnuQfWKJtvgJrmrSP699xGoytaxaqB3PWQXLqrP8Yh7S8y",
  "key4": "4PBsrXwTvgWeaC3Y7khyRDbUQs5Rpqfz3y8iTX5x4tNrjcA624ECWGRgRWah91pqLBWxnNp2YZExVT97DxGaAwnS",
  "key5": "4VBR6famm5Sao3gGzRu74tXsL1k4N8vWV4q2WWiDoLLxoTEdp6NpdohLCfAUcHRmW6RXowo53Zd2FGLrW18c3A22",
  "key6": "3Az66pBueDiE6V9uWmDvm29HNWq6SB41os9fHhmS99r4Gd8jKki1frydm9TXNvum6ddGwdp9iSv9CztMsTqMQcPW",
  "key7": "4jnzwVUHz9c7zAK6pwxS8EsEegqkKkYoYvUV67WUQ5kPuby6tjt5FnrYLsNjSrQDYHHnmWctJAsw5TLchgQGisc2",
  "key8": "3JDaYWonqrcfBwG1ykKzgAkLYbtvyX3F2tTQG6MThbJvw83ux5HrDfF4Be8YP2txZ4jwGsR7u4Vmbfe2r7t7WHNM",
  "key9": "2yyhDy6pFk611h7duwbSojQ4QZc3uXrNGv8fn3HAPPgmBYKqjEkZ5VSMSk2xuTtk6sd7BkpJonnRfNdRrouDHktE",
  "key10": "4zGtDCufaz8ER8W5PkxumDy8YijKMkf9fDvpxfLEibLQnM8PQU5iZjEjgG1ERXLrBibgHJ55e1teQDMPEjKjCPvg",
  "key11": "3vcorJ8r9dvQPMG1ZLSFA2gA4Vbf47Hrm5cF84f2kJESpUkcS3hLsZg5RN7pKNP1AUcTH2jC8jQvbgcVtWtAmCdr",
  "key12": "3KewdP5AqzpWPwXtvMsDXkgcETMwSC6U42nekZRGRdVBfKyXrSA8is5n5UCJpp9Tp8PJ43GpwTRxikNZCvEtmxce",
  "key13": "24tii2G7if7Ra31uJqhgt6N2pPdBufAfvBiRhCuMWKspDYiJbiQiDRCeDJhP5E7Xa9Rye1KkR5sLExriG15uHzwJ",
  "key14": "3iVvqNkjAMM114LTepTnzNhr6xC4qrak1awuVefmWr6CHcimJTXLttGktU6cSm88Tn7sGRnAvU3MCz9rp6phn95z",
  "key15": "2hjPT4j3sQ7J1Vb6v5MBfYwp76f4V691z2KNWsNC7Vnu9nWf55q1jqcK7dtkymLfSBLZnjx3ygqCSodjt2Nnqhh9",
  "key16": "2w57N6by51jmAeuxiTyRErxgGDkMjG7vZkKzchzAjTu3dJWT74JXXsTUS2hE43qDjRouxc9Tza5MHGYir3yViLuV",
  "key17": "4cGBPnViRPjaVP5DzpgRoa7KF5M19TyqWha9T7frWAuwvxGRFhgg6YzyNbNSAH6Z7EDaKBwv6gkJCZpAVdTwSbPp",
  "key18": "51xAHcKEJHCS9yQhJqfmoN1QX3MzQ3XB3AMnedDEW8d2DLxp4a2biVrQ35MVf98oq2Qff39qSxNUf49Hs1HHYuKC",
  "key19": "3UuNvGjQExpZdhDUs5K8sdf7wtUSVYgPgV929J4vauGMxFfUnMnbwCWFi4wo1VWi6249vbBMpT37xrhMqUWH73Ko",
  "key20": "PEvNy2N94MAdRQEGMEaouHsgAZyhLj41d9RyggpNwrZKiTAuwLSLxuxEdC71239NfsmGAhVqDZu9jnWmWv6Z9xS",
  "key21": "8YVcL7KucWnhJqixg1cozpk9K5EXBz4AyzJYTJxxdeQojkb282NLjb1xnGJBBQTjURsuE2SpYzMX8JewSRt5vJ4",
  "key22": "4XSG471q4nk2j9z1Lw235r9ELxFmypQperfwFf5SwgVjqSqxsPvg3vfDBbxD2RQ27cXBYQdJSJdiPQhHPZPQJPYo",
  "key23": "WhiD7ScEJjEXwX3AKT7TRq9mNobsGPLXPFq4o6AnvoFKw5Svef6kCSuGMLQbLjm8gUkxcX1xaZ7eN69ARAxCLAB",
  "key24": "4mN9ohajs2o6e5WxVfyXL8AzR3x9PviJzxoZWHmucCwAgEuJa4eAr41eHznsyKKhKFxZFzNaKmbdt4s67P9TBuAd",
  "key25": "4Z1nDfaf3tNSxty7kdX71ZvJmL2YpBidpm8iTSeTmcLveNEucmagf7NFDVxqF4cNBGRYBLiGVTN2YeryHYC8RMJc",
  "key26": "9FKHzGAivfqAnf9kehf7zDpRDqVE9mxJjH78KjDZfqWwUv7gcdbC5mZxTV9XxNW3Ni16ePQ81gZM6cXsv9uQbk5",
  "key27": "5uiZLtb1n7he2RVNzw3qVNCaX2UdKx83bokK5cwoFezXGuYdAWJMcFHts6Mme2d2ttEhorvaoyirdATVHXs4SWjp",
  "key28": "32b6goTv8VaNwwDTiCW6RQZ7LgWoiMbq5zSqWzt8VJe7vQv35vG6uL4ZASnVREusiPdtRW12P6TMroPodWkQFqJ5",
  "key29": "ESfsodi7imSoLT6EmCZmcyMpnqwrwD3i2PuAAX9GyjL43jjeekPV3ebVXxSL1gP589YEQG5eeSetV1duG5fx73L",
  "key30": "492LSjS85sq18yjB9YZeNE4LMY2L5aLoKJUYiPNGd9VjMyna6KA6YZER6sKbK319vcMxes9TJ2S7vHUJ8Z5AuL2H",
  "key31": "36ExnpViVeF9GvPa16Tfr84Tk2GtBXsGpa5s3c5eRPJfs4JpZLB4xt554GvRAQZmvMHcdxUAFpK7azqmZskaYpYp",
  "key32": "Z93voWg5CT44LN3vRD11syCy1NrBMrEnAnzyf3LtoijB5B1gkPA8xvU4yQmpynbFwwwpDCAArmbThK24Hm1uGfa"
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

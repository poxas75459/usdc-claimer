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
    "4HufKdJSktH7ay4bccBEC51D6xftX5Zyu69xAxktakkKbvFg9iGeTSidTNy2uaMXPVQ442vhd8SbimLKTjkcz9Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qg6GXVqg3FKd3ZWjWTgFVqNrFe7mAxtNiZigm48LAohcEYCte5ALJ7k2cTmo3YnsE2M5QGo2kJteWxpkkNdTcq3",
  "key1": "4wekTKKH1FJTyNMJhbMuFmruG9wk5BrbArx9ejPkZa8U6mKZm3qEadNrCpRMWz3kjZeecCdR3rsCjFLHPxKFt6XY",
  "key2": "5dcdv43FH7KUQSpx5TPcPGEjujbyEfqqYrUSkCRZJ7vGY77Z5Ahph3X2MSUBRB8AbP7VgVGij1s6cwNN5F1GdVLj",
  "key3": "2s9cpdT5W9ddzVvvPt7bFomaEZzBJ2Rg4mAP67dKG7DpgpZhmmTnFjMNeHZj6mrsrpDecG8gSNzdsBstqR6iUmGR",
  "key4": "5P9oL5kUFmboixB7X9A4R2cKSzEv6Pb3RQTQbZNFEZmmCxwJwLCXnHNNUJrdaKhj8Kfu87h8F5kQNXz7La9MxNuC",
  "key5": "3LnyEe8xfrSt38txxjWzvu34Yd6WEpPrwpnoHp6LWKHJZgvu2grmBcgTBtB42f7b9Pm5qQvJYTaBwkWQoyNXw5RR",
  "key6": "3bpaRLJBpUANxsvsv4E5cdvGpuskN1XtcwcgKBZRTUz8f4hjkG8771gkc3ZWcXxgcX5TwGZKygdkUXRbTyXPPPYd",
  "key7": "122aFKnDisLnZ8pQbE4UjcWBnDK8SRAeMiigfP1pME4yxGfWATEHASqzRi7kYCoCKBTR7hFSReApX5H669xk34KD",
  "key8": "2jTEKS1mvBwEFQDkukYkeQwzPMwjhohaXFUkaDPGVnV3TaikBiTySF8p84LVYegKzfRwMGiWXbduhP9jEX6mPGo3",
  "key9": "2c7k2MVT5wYxQhJSybpjCZLsKFeFbt7ps4uUMZMgDRMF4RKJBrKs5nk1HZRY1Goj5HYoZt2LEPe3EJSHchw2rT2Z",
  "key10": "4RQJrqxY57hoBHJGJg1RiGeP98uT5utaQRg5nAxJ3totEXummByxbGNab213m6TqqyafqWvAnmggT8JB86H9eEM9",
  "key11": "4ZZyzBi13SnxC5bZrDG69SrFQDoA5BGRJvfhgBWowimkX1Htd1NN65RvTwwaFKuvkjvognx4FxtpojKjQYPKQvZb",
  "key12": "K31RS8gbFkX5teC4hfkUJNNUBkgkeby33XcFRwrZRFKMYgHV7djYs4X31sanimyhDSHdmBqUtC3BEj6zmF5dTC1",
  "key13": "5heiFyE3Yg9r2bfbPhGQ3v5bn71Zu1cbUe2NWZVeUkmpqQfEy2WskrCqZuidj9BKTuRnmqqJonqjkf9cJuyKEEr8",
  "key14": "3xEcPyyWjC8M8VNkGeDYdpTPDebbReLYt56pUFw46LTS4sFK4ySHzp7MQ17FMayhzFJjJ35cS2DZdJUfkQNfbXGQ",
  "key15": "JaV2mW32npWCWhh13AMrxCxBi2e2HnwEYTTK6AJjQH9uECxF4xDVDMK4cs5PvwQs1awHMAgPnozrxTuGeCcp3PY",
  "key16": "3r1YHv5DacxPkdUTC54R2TmFFteke2MMZGHtNGKNkrYWWEajDB5EoyZh5EdH7HzxUw8SsAkH11Jh8NeDPBZ8Kpat",
  "key17": "w6fKnWagJvGrw9eKNVM4myrUwpkAFV8f6LiwuKpLzARLCh7ugRSrBP19wGumShUgXV1JnZwwjnY5EkmhYJ6DDC3",
  "key18": "1qymbtJSY35sZZxUH6gouJtgbM6aZ58GjCzA6DA2JbUBaKZFJFzPeWuDdQPFyMu6m7tTiK5VBWBdxs1NwmaN4q1",
  "key19": "5bzP5BjyqQVM4cFuvX4YSyFzXPKoY2RMdR3BtAXkfiCoj8TiY4h9niNhRdLGX8r6g2oWRUWdrVTeMhtd2WbSZjCY",
  "key20": "3eo3vhfRedipJfCMfk3bLr2nz4HH9Jop3sk3pb4vcGGM5xoioiqeqoXQM4SML3KAW6D1eTcnKvi3fS4CHWAN9qxn",
  "key21": "39n7uK7Cp9mRmfse2X5qrV1B2vX6E2XjzR5RLEggoXUojo9gnqpg1gBVrGTPGp47vxGgzQz3D8zes5Uq9c772isW",
  "key22": "38aBWz1efS4AC3qATZKFMEihSwrzVsUhPUvdHjxW3rcraongfMe6s68vKPUaoKmUFAs63WvDwTJkgVyGJsDNLcME",
  "key23": "2XiyTQXvJyKHSo7DYbQcNS3MYG7MkPv7sxeVkrzDPTP2MaFSA9DfEQhbLctSADmaUZaw9eY6yfuWedk51aBNK7Zq",
  "key24": "2Jk23GbQS6p23pdfKMcjKhaQGNaNi27euqtdLAkpb1Cm3ezMKQB5n7odMEpVzDx4WFkRcToqNgiYJgLtMaFk8ppL",
  "key25": "LQcGiTt1aDWq9gG9o1PDDAojMfsamdmDQMfCUz9XghJK8xL1xSq8QhCXfbnrk8uKuEbPoax3ksoppXkXZAgjDdE",
  "key26": "6qVdp11iCdqmmhK2JUrCWJnjSQCF1asy9wxpSQbd2aXHtNL6HcPv4sqNWGxzKZ58qbHhWXL8uuSgP2f6DqTdTnX",
  "key27": "3ccDHgU1yC57uCvbZiXBFWK3iFqnyC1z7BrUPSwvzdCR8bmr1YoR5MipnFzzAZL47F6DPMtpJXGXHdUDxL8ABq1L",
  "key28": "3Nu2U98gt64rEHS7dNLR6D1BN4gG9jpaLqhzgS628KFNJJ4j3TbjCANZDFAqRuv9RhE1sK59kRzUdQ3K5YuNvwnA",
  "key29": "2mEaokyg5DVNtAsMdWmHRnNfKmjpJhsuADQBvqxvCBKwApE8cdfhBtFESBwEBFfu2uw2qDXpGnE9EerEbK4Qwff4",
  "key30": "3VSwsckBbaheGr6TDUSDzvzwn9TiUb7xERVK8nRo8zYUXehA4HrAiu4hXqDzzPGLQmhWhFxjy5xbc6zNyusGZRzx",
  "key31": "5qzpNTN2Q9mg3CVDznrXpa1HBsd5raStGxBRT38oVQZENb1kv9RKzewKviTtd7VCQNrS7vnNJ1f3ntfGGgFdQ6zK",
  "key32": "3akqJMmEjWm6FAmkSkoHRd2fUj1afyAtgLWVfw4FyndP1PtXj6pvCiZcyzjYCxjp1FJZPbWkk8TNTuCP7Vk6LYGx",
  "key33": "3XrKipSR7sLXdBk2BtHVbuDJH8ifZ7u2pe4JXj54HkNCEHSEwJmWACa6312EKVPaMJ1JYwW45Lqy1NLZ7UhQVv8s",
  "key34": "2zpKKqn4qSZPqKqPgLVXgXEoow3ctP8Zysi9iEc4kguhoq17q75cZnH4sBacfC7m9N86wEbuQ2Ezf2jUK6pES61g",
  "key35": "54xUHhaNKMejbNRUkuubKrFtnbZSKVacibdj3a6V1TMRuXVi7iy7wALR6gkxhpypZPhuDAFjPkodYByBwS3nS8Xn",
  "key36": "4umya7fxq3peHykLJGSS9bvk1exkvSUmpoLnBcUdEU6ptvBsDC6ygQAV73TSYUMtLyoxX6SpmtoBf4XHArfxJSAF",
  "key37": "5Acp7g8Ep4r3tabmnLSNZov7saYctrvsx56w6dqZYZocF9URF9ow4FXJX51HMJJnTWMkUGZ6PkzW74gGBxhWFCzE",
  "key38": "3Gqk4XKuiQ7tSMjXPC7686Gnu3WwNN2QRpmkeWhsRmuyb9PPAYr4cuRfqj2qAuZk4RDmJyvLM8ozcWKzaeN21WVe",
  "key39": "36MV6cGWNV7enimXPAndPb3FWCUBPQ7URh9BnXEnQB1T1ehqzUdFrTafqtzC9fToPZq2BKGdQDkXFS4r7pLiXQFK",
  "key40": "4AF4PqhNs3E9NXJjpgcDwzT22HfHyeJmsHUzzshTqsHdctdqdYi3ysbjsHoLVGSdzn84HX75UerFJBRj3gxqfHWh"
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

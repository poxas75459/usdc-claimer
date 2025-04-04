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
    "VJCxoQU1zzYZ4U2uDTef3BaWoLo4iCXhjiAB2v1R1yFuQhPRbRiJSWmvCqzqtUcxsXbijdJ9NGrPRHwE8bEVhyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DpCMCobtL1UtKuS7344bNVHNZjkj8wNQbcwMbz2fmKJkeZbfsTxcL5cXDtrSbar52FPKihm8ZYL7qh9MztQY5E",
  "key1": "3VYRBEgcqctzcz85TnyMxXfXstXou11iQBe7eE2EA5555r8jTi13bZhdMJph8VhhvTvGBkd8kC95QYrNhit1X2kS",
  "key2": "56BtvNo9F16PtJW7Thxcvoxtwog2WUFnCv1st5Ee8UerGnpKYJRMS7yN4X3LT7fp3EfMyLffpez6E7Qf2Kg69gaF",
  "key3": "37bQKU1HDsEg1X1pzCPVF6VW34Mcj1QoKLuGhVhz2SigZitZ7toJbLmH9CbfqEXjCmpCtPtMsUPiJwZHk1cg8Kd3",
  "key4": "3UVGFKS82GxMuHZTXJXtDajCvDAdr12FPQYCzptnQfxdEymZ5uayJ5y8yh78LnTwewExCxbE31V8aAAojauqkXJG",
  "key5": "4Wa38csP5MadS5B47yu4Gd5mtWQjzaWttC41fqhmgFuzK9n3mNjRZTnuD9DkkGpk7JxNsubcpc7LgsqEz36Lz2cp",
  "key6": "ZuGGr4PH3RpgzBHtWy6FLsgWxiwe2hPx2QFVaX5SWhuU3zdZD8LiX9TwiUohwrvDraBg6cwxHDxvHXxAYEPZSCU",
  "key7": "tmeNNWydxgLNNFFKGaw6ztkChD8BU8bag4CEdNLqLzrzWcctVKwm2M4akhC7E6nvqe1WiDJzTWFGrHNuX25fmM5",
  "key8": "4vSP12DiJt1SPmdocyibFagvNAuddACwb4AztYNZLsRqbZKmebCqfzEYoTHcSqRdpwv4iZY2QzpKUmJ4UshhvZCy",
  "key9": "425KPdf7aXd1eLJnMvC1KyuHhkFjb1pzH2y9d2ke2geurW4YiBQbdhG1Zy7kSbaVzu198S3iz9AZRKhKnRAc5NmG",
  "key10": "3fhRHnFv31wUGn3UrAf4PyrHLETneFkjBEBfAJ9DdiBXMKbv746efTtww9cToi1BexiCchgP5czREtLzjj7zzQfn",
  "key11": "2APFeU5pz8FxsorDrcUtzEnLmL9qKL6CkMK4RqxcXuPihSoWA9jBvgZHf86rLN9vPQU9ZAqrui1DTrC8kijepRqH",
  "key12": "2cDZJzKXNVGmV5qwn2qcsdK7oMXYq9yyUMtHqTvVLd5D93qjvtWTwXZcZ8bLcnnEwK2E8DkXaLYzf9KmoB96qsb7",
  "key13": "5h8qAzrWzc9hVUHcTeaWa9ivo9tBsTzPe13CK9jX5KTA9kXz2DnmRSkrf73SAu8q7EwBKnJP8BM2svLL3sJzuwKd",
  "key14": "48Wu3kVrFnkxB9UGSpLn3FFtkwac1cjhmnknwbt9JrY1pwBXD2TJ1uJ5W1y7a6ATktF7Ao49Gku2FNcBffVFJwhT",
  "key15": "3iFedEjJVZhZJaV3vt8gydEKJGG1iUpDJ8ztGUiM3JmwzXjufKP347iB2MMe1g1rvgA8PPsiGfqGMfeeGLq9w4Lw",
  "key16": "WvnPZbmZFJYveRQKWcuvmAaKr1p96qmy8xtfvDYCbZD4bzaQpU9b5EYVdQob3VDZQdH1HuNuNd9NZAS8dJ8ymKy",
  "key17": "3yixQfwMFHLuAjrtDXBLtsicYfS1S2qWTxaiXskt9ZNbEkTDPS8FriPdL1BDTQM63rQ5MbMWg5PnUnxiZuPPY3fD",
  "key18": "bX7eP1pgZHJvisUvbp9ZsYXQGSccVhq5RKrdXgEBtagjPyGYAdgCQDGRK6aL1A2pRWAg9WKy1qPEGTUctr7AbBD",
  "key19": "3mMjCeSR5Y5FbmZWhepqsJjfe8vG1UuuZpFD7SwpqYMEafddRHQ7UT1hJ4yWEGx9fnnLbnJvYf55hKr9psqg3cKc",
  "key20": "oNuRM2Hw8ckNnmbmFfoCXSf5rtbyNQWYLyfDBZ3Rd1CtZMWfAeYjuXecHgx9wWELuu53h2NP6cdGvan4kcAimxY",
  "key21": "3TJCgGj4g6EbPQooxjFMHsnBM3FExscJZXF3yStYJCsLCKsbQmCgh1rvVpcquxKSkRkXVpcdRA1NyWsMbaHAed1n",
  "key22": "3rpSowk831UHm1ZszEp7yRAbUWEeaFV2z3gZQkPhQmfivVkcho6CnQJ1qk4aJYHRpaAWBJGdEcYsxLkjAra3Q13Y",
  "key23": "3bqUyf8GJ9jKjaT6V7yRJsva7xSEqD1fQXcK7UbGJSDEceR3dGrW4nyqTQvTdqofaLC7g96ZoS2ruWS729RxyKzx",
  "key24": "47bZ51XEuDKFA96s5hSsuz1YnGJVpJd1uACdm1kHMmzFcarwGgBZuW6ePj7zHzzHrU3xmwKk2RMf552GWZS5dXJH",
  "key25": "B978dAXPSrXWKx4BJuNQz3gdcsw3z3hj7JsZcx7vinHwEr4C7kn7sw6KwRDAvF6PwgSTKCwa2dRAcQiPFcY2Crt",
  "key26": "5SM8mz3Jp6vXphFPbuPj27kwV9LHUD5cw1V72nQQWHj27NFhWekhASe5cv98S97t1dHh5qd5YzFYmwfW24xuhugW",
  "key27": "33ugoShGfcZQYmCaTTcysS7TkJTr7ENi9CPHdLSLF6zBTdghdWXmNU5YoxJhykxuSn4fA4P6jvkQ2NGanZqmUeNj",
  "key28": "4uJfE66u5GUGz1XMJvw1vB3sZ125RQ2SjaFGaqbP9XNkGmWiyRkyEVWbaS1FfzRTtqAUdjWLffWPsGDKczWH93qX"
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

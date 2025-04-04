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
    "35tcxLiRCtyw4s16PY1tGC5QCQxZ6ioserT3Mis3hoAKkkqYxkGReqVXJzSB5hn7mAbjSNxQnRyEJwGPbVXfvpTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvEG4Tv3x9GGZcaXywJNrZQVpBfDB3xYkhUqYR3EwNVnx2CG4bgrdWS8qKuEucivdzwG5pLsN6uiSP3mcU1c4qy",
  "key1": "3vj9utVTb8fbj2Aa4hx1SEdaVW664CrYuhz1mNUX67AYRmhLCkPby2m3QZe3sB1VZ2ctUZeu6QB24Hb9ypFDeHdo",
  "key2": "VjvVqkmQWbtDYra3jL6aoyJ738vL7enGuU5jGvM6y3wSWnX7zLjUVJu4QVNMSpY7EGPih2NHEZMY4bbncco61q8",
  "key3": "eUcqZJ888K9rwFy3TcB4hXaWxKwU2YaELBUGRXQMdBCUq65ofpwaYNm9fzEKQXTWS9LQFDzWxM3wEmErsndHcp1",
  "key4": "66Co8Q5q7T1agDQo5LhQYRy42f1s73V1um27QX1topR1T2ARJGnhNoVW6fCKZB7t5cLp4DqqxAyExvN3oj6KY4DD",
  "key5": "5LTU4DjB7zK6XnKnrqweHtVaaPLFGPgRrgrRWhkZYQVE5a6PNrUqL3hwyioMMUDQq9nQJ2f6vrWTebWU8QiVPiAY",
  "key6": "j3W2GyPPy2pHjFFzo6iyjV2VvNNKvzytT9DDxWdZjyadDjVt4R1YwESpembzLmQd77jyAimefRGTeUsSNrcd2xR",
  "key7": "49HRow6WaMFE15sWkjXd2J9n17zB49mQWhpANAavtkpPUuZhtTDuFqRFkaP3NBo6yRfN7sfAc85vF9gUeaAwvKi2",
  "key8": "5nLMnczmCtdg57JKAuSj7EUtwo2CTkW8w1rnnN8zGe1h9YCQ9GFm1FdLXPiWoGdLK3VgRhKfqAk7t2Hryehx89yp",
  "key9": "3H3Y7xv1QFVgFRz3WTn1CXHdQPdheQRMjHySYwLEzauyFFoiJqSP6DKJJogkKNbA6F3YAbEro6WnsyDRENZM5oZ2",
  "key10": "4LrsYZPC4AaUcrFoXbGruzJbg4oFyY2V1RZ2bzVXWgLtpjPUXFcCev3JC7rnS5ALdExpDbkrWxaenwqNBJX1tPzV",
  "key11": "2BEee2UZ3QmXRUNJ1cwQeHutwBHNLDiSWiobPWszSnwfUU29AokPAiJCmUoXxxxuQ2H2aPGT9R4RpnfBJeNSzhZt",
  "key12": "2Rh4G7aBF1wurEMEZjxYdWfXuLQdhkdMdcvaqhvmc1kGW637kKnLVFLGfwS22LSnRyfXjGkkXb8Ve4hA2a76DaCb",
  "key13": "2p2NrHCt2okKBZGXb2YAUtkNoQE3DiAJzMUef1RTYfqftx5o6xrnmus63X3ktnMBHaavAZddES2WTgbFueEJwMoP",
  "key14": "5wxGngFR4VZL3wFwBcB2Bap1X4tMP4fK5RRyJAVSwi18b94xJNWZaFfkzL7b5ch4DCg4C8pYZnfCWTMmh9xL4P4H",
  "key15": "2eSWT7kRuRkowfes5uroGYiGuumT6ZvYgpNZJUw1JthapQt1qwp1tfzUYsuqhQFtZgaBHu2htCq76TgTmH8qMv8J",
  "key16": "5FjXoiv5QAW6y5Vaz6KwK72nb1Eqrs8bfhFo4eqAeaBpUFF49Q98JYvtLsJM3BHNHSkMporBpUyf4YFEzsKzPsPv",
  "key17": "5wTX7M4jgJzbPArM9iWuoPUpwjDwZ282e6gwLKzF2mRpLV3QT3zvZHpQPxRaz36e3TiymUS3P1g9DCtpceUzPBQK",
  "key18": "2Kp5FhqGxNWpXvWCyPxWYx7rCs2rpFmNgpwExSoezR9NiBjCkn9ct7Qoc3RJmoFTJvUMfCCRRPiVbKKfzkR3ZGDo",
  "key19": "3yXHD8ybz88CNE574qAHuPh2TA1zJfAbnssYbrNBTUNXq9LBjEywzD9nArFHFwemMdJij8JU2nF3sZWwtaEN1Uit",
  "key20": "hJsX4DKYkm1q36VZ5HUGqoxKSs8Exeno7jQe2YVL4M2HCti9r54cN5aimfrTTycdaKgx58pgYfDtE6L2e31XxnE",
  "key21": "2WEde3WPejiRqxx64CRBN1123cJFaUm7wLsMwPivZRy4ZMLYbBhmcshcYLqajmNdKjj4CGcesnugfKHyFc9bEw7f",
  "key22": "2UWvbtn6vGXHYakAAcgqqQnM4w51tTfvQdjRdWyKyiJ8qpW3SotD8ZLKpsPPmoBbECHhJyrSc5rdixqMW9DsyTMs",
  "key23": "4ZQYF8DirULgtnKsmiB6rSzuTUCZUPHQ9J6SzTQndQiG6fFoXYhT81RiiDi5TUwZ1fW9thtM8rCw1S3ZwjzZ1mxX",
  "key24": "23qmvmEDzDWEP8BZ6oqDYGyMrdWLxThynLutoZy9uVVks7Qc7vw8dqDkhRMgjgzJtrZz1e1dv4AQzfwHDn8KuERJ",
  "key25": "4hpGqFnXuKgJyLkjiEZ3HuyRTW5oc5MpMV1WLT1XKcXLoqeDy1g7wFVXvXDxDDhsJncCQ2VvC7FshqaX9r3yVhmy",
  "key26": "3dtLC8qyyBXhrMm8ooC9iuzLoVA8ezJZV5CcfqEMcxKcuj8jES65PMJVWrhTnTVwTvRDdjkzXbvtN2Wjiopi9z7L",
  "key27": "2RBZjb2UwLrabkETBCmGJRjroMRi44S85cft8n9uZYFUM2LQL6uoezpVdf55GVdwhtpFsknJBwYgLN8zqy1wv1jv",
  "key28": "4zdVmdv3tDf6N3taiRPhfDU8Wex42yP34vj81FgNmN4NdNrw4912TEpnWktoNcJJYHusEFot7PTNaxCwPZKsHoPP",
  "key29": "43LR4QsvNQpwUuWcPQQRCjA54siAMSFAduuLsV2L7UvfAPtHebHBck6rAU82NArXm2ZEWm44yB3gpqeZXNMXRz5k",
  "key30": "25GXQRVMgjMogWZ2i7hLDhPFgfH53brAsv6Xco8hXRMLJso1osrqCXNKpEPjYqjNZmDaJT9vpUueWDMcZcebtbkT",
  "key31": "G9sApnfiroVCVLQT3YP9VQLhQM7Yy9SD99Q2ZHuhKDNHSUXSnZPQm9qaUYuQgRYHeU8p3Cj4RDW4xMdXnPPQXPP",
  "key32": "5uTgqoKcsiweccB9pMa1cpEuQhGMJVvZo6zXFGH7LNwou8m1xY3ATARFG1mxQBxxCucAFhmyZUeTYNEKAKRYWLHA",
  "key33": "2sDaekevfUxR8xP7seV65B4uXmXi55v3aE2dhU8DyNoE43ArzqNG9jpocedX9WToim64mGsbxhYMRXoEUPxG2c3A",
  "key34": "29hkbhnY8jnbtaA7BJcpcNj9BhBNDLtXQSDRdKv3ZeAY3XiZhfvkq8nqKbwmiGddbA7m7Cic9e6zzCyiEpy9oxPP",
  "key35": "38gqDPGXB2TCGSWoXqWYKy59pie46jY43cuE7u5uCsinEq8EH8HGXUmEpmkypNHi34SwDK1afma5LC5Rp2JMZRPf",
  "key36": "5Si4zQaoTJHVWZVqVxMhNrg4sdYaoyg8dUbD5jvTkZCcxSZDdEZGTBmdYvgFB2oEHK4u9SaVzhLFCMifMkQAuK4C",
  "key37": "4fLS5SV2r6otzHXehLJZ1xevo4gSJFVoBkCM3jeGgxqxECnwEyDAnNhphRtPJFRiEr4d4w9p957GgV4vXEs8teds",
  "key38": "3RyccD7z4m4CA6bPysVySXMVgcntKNnnac8HCS1nnoBKom8UGng87FbLLCSQQwh8JtszbAyDcPemryKQHJraiB3k",
  "key39": "31wk4XG65msCaymFxCSa8F8hyweYvxSCvxMVMHSDsvD1AQZG6QK4s7q5kqB7UXrKMxA66SZBh7gFkNjK7jdzgPTU",
  "key40": "4oM2e71qunJUu7zE3JdQF3XPh8Y8WDEmWDKpsPTKBYonbRkEoSEo6M9jNZdq5pNxsaKrxopqbaCtE7Sfvd6XfEvz"
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

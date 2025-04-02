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
    "2P3wmaG1d5hfGL5Kv7gcGSxbqQ9Bkd2pWDEoUxe3JR4PHQCiLJDZQSJCha6iNKdUQ2omYraVC1rxfpk2Px9JWBTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bjb12xLNg9BR7btDYWe2kiHWW3YUktQGzgi1hFfy7fKgekeG1tT7f6kNMmx1Fe3GjGcLcjGn1b3uxZcvv8r5YB",
  "key1": "2KdLV68GawctvfLf51oXZry9CXokzo9oBS8rZwJmNmwHhMM1E66z2ecseDxrtLqDWUFkzh7Wn7nJixh9zFb5jsA3",
  "key2": "r7JG8QcnYYZViDh5ryWxfCGNViBVEyXF787wZYXiLMYuGA3Ek6pVfTxTEqPT2w2hvnuvdDKGLGVBWQJAejbdu6q",
  "key3": "2qdJgczCTUgMGQ6CBmqhNumfarnuNPgJ1NGoVpoTmohubxc1pUyYykZFQf3wDn1nd8mSSgK7qVKLpvH7ptVysFXV",
  "key4": "kBZ6x2jQF7J4GQoXcu3QzgAvFRmVV4EWhbZC9z421C5cg37WaMCJuEEz5phUMtKyfZ4Woxxj3cGJFxg2AgoWo6d",
  "key5": "5ef5SaJ3RxZdnY99Z7FKqvkqjFxZydcinh5qrr29XizZmH8DmMfeFxSXDQUgrsJKHxcLLgYwFn9UbbfyZrVSFcrT",
  "key6": "4tbUBrLUoE9ejJvCpK2kB9vLca2DJ2pC6N3U81SveAsvWn1sZPSFwAmjHeh7G6ZhCoh2VPusL8aAxJxNV6bhCmGC",
  "key7": "1Ju2oxpikWZg2n1HHXFKM2poeKGuT6kDR7J88E6JuLQSSdejEsXQzJMXS97zuzZ4NYCqvvMUcsD2EUC22LUjRAZ",
  "key8": "5YYhqy7RqqrRrN2ivg65BV8zqdUsFTYFPraGmmYKB49YpKkznCWyhqLwrisrDWNY1jojakjaxrW7UvmJYRnNnKGs",
  "key9": "5gGRj8dPWWE7vbYwmMjjP9s9nbtGiysayVQvc6RyUeQCyjfug9nieU8jbUBX9txsyv6rZmzjkqzF6fwxZV9n4Jud",
  "key10": "3HBxH8jWcjNpw1bnXWnSnixmH92QJYb4qbXRcTUayZXwTNzJzMmm1LJQcneeob3C8R8QYxfGQokoke1N2hbNY7NK",
  "key11": "4EAWEAW3dBxqRZv4RSGvzQK7iaTwv8kDnSQyzJQQeWHKa353mN9rRgXthmxkqGkEbY1c3oqn3gC5PyntYj7PvBAy",
  "key12": "45TY34CdkCW9GKsRvKawMwUpu9ozdADMaPsy94qpATGWakSEW7vRciBV7asbSU4BQRQLzVjRJCxCkn3WGgQwsSko",
  "key13": "4KyzAyyxhjp9BMiEjq9c1VooPfc7mcDtD8oSekLYWcyzi8NCqwxNkDKC53TRLbM2yJceKGQXMY9UjbK5if5eW8E",
  "key14": "3Yucvt33DrLGydSgopqsYZvdBFy84zwT1mBeyXjWmoiTFyQLjKJwZdBHeQo5EK4DPC2Prnn7b72WnGWbMHUMv3r5",
  "key15": "Ss9JkRc2BDCmroLybcJPE2WxcnNyLKQEhbuUsEoDxrBWeZhRwAWNLSM84ErYDi1fxSZs6CjtA2qcb57G8UndwzG",
  "key16": "2fDYJQzifv2TLJPBh4vJi1zcGTTZBSAUWfCE5cgapopQ5MaiaPpy3XQznN4FeXntUW4JXigHFN7ECeKesfCaAir",
  "key17": "2aKhyqhdATECFotbrtM6HxxXducbenJTVnh8hpu5YJ5VcHm6G1K9j4DwKEXGkkbo64xaELbZqeh5eeQ43DagsgHb",
  "key18": "25dB1gYmFYLWnyjCAb4ZxmETqiKkKfTN4K2cEtKhzPCYRnrctKUbJhAvZn5tUTFpSTRnrdqdvXgsvw6j8JLpNMMx",
  "key19": "4qreX8Esh8PosYiCnCVxxMsVBK6yrGD85p31Cj6YZ5JoQVfUVevtg7PawgrsvYSeJd6Uvc8dgHsajkfXL5tcMvvx",
  "key20": "3id9o5xuZXZBNyDMvFfJrKnp34Zzq1Rqd93VT2Qm5mnN3rSLuB2tC2fyb37DL2X8Bb8sgcWYEYweRkDmeYbNN9Tm",
  "key21": "36aecDiLThW2yBg4CNdGupCDRo8WCYJgXEKmQeio5yXLDkWMYfdju6CqSTXz2JRubQBRgh2WTeTiYDUn3uHjxqxP",
  "key22": "5BF1Mtt44YeHZxeDYHrk4mra6snB1eLhRP6x8qNNeDiPBPyGpqTieh9YzLuR8aRkMUQ31hxLqaqb1x9iBYgQXyDD",
  "key23": "3Abd4SJMmQxEc5L9kcCmnAd5zT6VEm8uEa5BY3sk3c1dzX8ECuGV11Riw7TNpnWRK7T4HieYhwaEBbcrQPeP6Eqn",
  "key24": "5Yb26QMoecFLvHZDcvCSqon6jexvA31Gh7g36wXHVi7AYnnEdoG2tjsjSZC1UicEAk2eRMmxjhcYhoh8QCuwvHUE",
  "key25": "4JwMgBhN8XRMMpm76KAaqjRisxc3ksGtmM2jhLDqebhP9HDAkqMZGsfEpQcr1GuLqsMMSKRt9nr6f8V8qwitYr5M",
  "key26": "kMXPGmyvRoGLKsHS64qsJ6Vy4vogYEjPGTgMcZpfBz6TpKUqMag9UjFAyA3ZpKnnufmzR2ueXHzWpAaF98UMAiG",
  "key27": "2WnnHjDaDkac7pX9r2DgUCBEYftJ6syN6DAFEmongTGN64bF77xtFvoxMETgqRK9hg1BfpXxwyjpA6mMM3JGoPx4",
  "key28": "23cpDK1XPzwqPQk3oj8vKf2qumqTLC85CMD7oM7Cd59WT5UTvdGGQrGZf68QjB4d7bgTp84iJxfbLj2VfjVjGrSe",
  "key29": "3fX7pWsmuDS1EqCRJZMnwJZaUXh281zpApWwfW8foaM8Lkp6XYfPZD6NRj7k8fYo4Na12FzfmPXKWqaKjxWmq5WD",
  "key30": "5xaug4TN3mGdcT7QxSAfT9droexjPHkfB3EmLA1YQQuMTFkXYmYAqTJt2g4rvmi25X5tkSz6kyzZTsm11s3RVg5A",
  "key31": "34HcbsfMGGJVejUpbm6yhTyy6DHREAzqhtQzrKw3iVGAoJEJrVvBA18DcNtKh2yhCu21BsqLzKYdFDLr9jzbKMF3",
  "key32": "49oNf21UjQobyC9coz8mtoZkAvrj7QwD6D5En5kFsaHUjcZCvWZWK7yBwuJFGwjhHShQfsjvutPZHNsVo7456PNu"
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

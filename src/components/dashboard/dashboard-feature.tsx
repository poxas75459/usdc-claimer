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
    "4pE9VjfF5cCWfmvzEdeoVqNvJgHRa8kuDbYnPo969pqb1GyuvEEBrChdLeuC5VaAiEjmHtw5EVi4LXdYJRutPk22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYkSFdCZ3hz53Eiro7BBT9y8dEkXbPQUTqoGUTsnxzHGvGt85HtCRbJuNRqVZZT2QyNRur5vzpjQ7eEPF1nRi9m",
  "key1": "4crfdgRtwiQNksJFj8mMUJHoaF6sqHZc3bq9yQS7oA99b9BNuigYazcRhp46WffnwUzUqRjEN7Wfez85titZEZQj",
  "key2": "346STqs7NpNg6gkApyaAEbT6QtQnAgwXCVcdQcCzjVqY1wNZsa61YYLqiC94zyhqKTFdpoKfix2VqZ2GVAUKZrwp",
  "key3": "37hHjhekomw7dUoAKB4qpCidr82qnST1nYDQy1mppW96PtGr4yoXKrNL9ht7vdj2udYc336Ao9JHqiWzFcTUavud",
  "key4": "5BfTjNeTkF6tVKYKCTwqaK2XQofboVdVSMXE8qxgWiF2qRhF9FXVdncbknZLLaVDNwtti4BrvLEFdznuNaZAoRrU",
  "key5": "42QGnzZjNApQZYT27tNDuKeEbTXUEn2vjAXpkrE1NKS2r9j68L85oHCjynaVbPhcuP34H4y1BZ3gqjD38bqPu7rT",
  "key6": "2RLXnDevDbjvhjQ73LqUVqXDPPT8SH4gvmrgisXVcjTCz8FPJBsBpcFni7X898zDFtQvmD1HkBFfWwMK5U7rSt57",
  "key7": "gqcsyFs3V87GYk3fMvJgasXpNDTxLYEvJFC7xUkKsDSNWytG2Gpcwnexpmi6zGXysi7F87jBGw5zKRY8zujHPgg",
  "key8": "5sfakYwgNshYVYjDuUrfmLEj4HhbQwGHmpstgft1LnWGzrv3cRF3Scv4NQdCQTAkPbPaxfW9Lj4KGFW9GEE2gs2g",
  "key9": "3yfiWfwLVGpP2tURazKq8efXLC3WTKVo48q4tjuURjh1ema9fWkiAdL2cBwSjHRa6S1dVURRmUTFJnynFjgJLphU",
  "key10": "24KZVHUin9tyynSLLtGJha1FbAhvTmGr4yebfgTKqGxPJVBW8vGeuHG5RaCxgLa4U6m7bT2j44iTSbAR59myo6en",
  "key11": "3eKPtfTSu3HbQyfk7NJfTyQfmmwRYfXKvFY9QaqQL9EZFgBpS3gyWxjGjfht6hqPgTJU6MJ5XBXVSCzGwwGz8w6u",
  "key12": "29wP4Lcybtopv5EGkwcoRwkV4P1VGAmjDTcFjyp5UZnEfpM5ZpGQk5P3YX3DyjAz9mQ5YN2BQuujmDmEC3fxhGi3",
  "key13": "2JVZ9LnsSMLZNxXGNtphj9UKCkwzkxBeWec8mE7hUv7webyZGxjQHswGf6jVvdrLDQuuTUc2bPfsT1TTewunzKDF",
  "key14": "MUBhrD1keLQe57kAnCsaqYfKrmtNKvbMrLrWmE9rXKy4MB4dWMPgw1KLWY3fjejUju5yGj5LGgMgBmHMzdspU3u",
  "key15": "28i1DKdudZuy3kHrDZokUB89nU14mReKTLjwZiHSjPoCnresF4UyWrLB54B9iXfM3VyKEGMVhpbSUPWbnZ6saa3T",
  "key16": "4vZJskxCp958NSLvuWyKLQmbehHHPjmaVmfc7PTzBVFcmatfn26d6HVhPkuybx4w5kRtVt9K7JsSR19Loby9BH7M",
  "key17": "31K8cSWneN1Vmj6hwtRwCdp55gZBUYV18RatkCfiUJiSGnmrj1GAiRXi89ZnkA6ZDzvyeZSQZn6QKYJnnTjQJePa",
  "key18": "2UBkLtmiJ9TwmkNVKPqesptQsYFE8MA5rJyacSgrjwVBGgZsyPjvqZmqcXrcDCdeKcmt6wz7Z3o5ox6rRwMyoMhh",
  "key19": "2EytrXCqiid7grg1gHM1exBfBk56Zcg6BJdxtPYcGm81VaNw4PpAhayPzNRrjesBUbRePzysxFht1k2g6kFoRe9q",
  "key20": "2EWeWUQm9zjtabT4bNQvRkZSo5QdeBnXRHCXRZptVuQBDNp2JetBXiDq75CktwTM6rkSxNbSnuWBi6pFih6FWEfZ",
  "key21": "3de7honayu4drDQkQmKtTqxPgYV2UaTbgSKwJeZUDGGwxCHcMejb7TnsqZtcgNVM45t361ieF1rvjg5j6iVcGxgH",
  "key22": "4HKAytcnoPFRXQNBT34Zi6hygudg2Ve5JJNcU4suXS8wrhMWpYoZcX7v1utGRR3mrpD29iYoT3xK9LFZDB6xZGH5",
  "key23": "5yT3SRsqo3ZDupyBUJuNPx9nua2sVbrw6sJF71dVouhfYMuif2Ba1H2awMJ6mRxeqWdr13B4ZsvGDwM1wCiJEBhu",
  "key24": "5B2KWsH77JWB7KLZ11Krq57L3xtJPL6kW5a6qC7P5dE9mB51qKNVRA7UAx1MPFZ9odMymiiMTBLysEdTu5DUvw7G"
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

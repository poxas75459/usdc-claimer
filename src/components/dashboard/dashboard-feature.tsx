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
    "2y4TsqWkd1Myf5abzvvxMKt2WXcH5emBqykXKHuC8yxbBHkb6yf99Avw9h43bq9BEtwmx7s5SHucVAfmhXf25w98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RTZ1ewAWs4RVzwJN9FYxZ3K9pnHH5Wkf8RS1eqhqDFS6vVXMLv4VMw8tfj1yT454W35kGitBySCf97mTvZgTt46",
  "key1": "5M3jqk6eY7WHvhuRBkuaJ4iPfjWU2mC591y8xhuKpFA6u9DBXwCvQi1ZiZ9wHwcSA9pjcKUDmTukhEMZ5BCWnosy",
  "key2": "3DyUW2EoeACbEeZoopYtVfGyfDJk3QwyS4bXnhJuyVit7aWKA2Qky3qtdnDvBPMjW919yzLaDkMpJVYpWX8wVZ7Z",
  "key3": "4htuBYfzgTa6tM9vCu3qdqt2TN4gdva59AkLsAAD1cEWdapTp67zt4VodyswQPxuVVGi9czixKM5f8Le8bAK2fNn",
  "key4": "3mWgewMhduf7LtUkGsQVUXBGv4RfdWHJHweYaezpteGo11FhcgdWkKZ8VtjxdQePjGvxBt4CBhd6XXs3QMDKHYbR",
  "key5": "31VFWbt2wPZimqJ7t9sBb4Un1acK9PiSKRJUpbBUh31xvubgin7rc7dy66ZMKX9mzzDUf3mhFWKJfBHBiup54FQP",
  "key6": "4gZbP9R8MvCkm9KcfXargGK6uk3LkU9z2g1d7EsUUgqoxiK4fZCT2V48NeNSBnXajon3EAtKTqk4xSfSpJrYSRxS",
  "key7": "XcXGZQHEvLoKCyDy6TT1G2UPpoYYZYwUmhcwN38RTbTSsBQekTQNcDnBYG1bduDDkAuMzbqXCGU5sPCtCanE5H9",
  "key8": "4HrCe8icSbP6euqCUtwn5uSUms9hAsaZ3zQrxih5Fx3kjbua5vLcQGsGE9JHYtkEAm1m4FfLu1ApKrAn6N7FSCDZ",
  "key9": "4FLnZWi7S6NH2qvcHZfcouAxgXCec3dS5pDHQuoUwBNBwrcNNe6zBnsXG8TT2nvmj2XHyicpkC3DHaSfT295ichQ",
  "key10": "46LHZkYDwtM82imU3rBDDbuUD48qxZr87VWBeBGX7GnqP4tMExD7411R9jZEsKuFehy5hwnnYFSUTZiZFxWNdLCv",
  "key11": "4tjZtC7sDv5gq4F6x5oh5AbAH7iXY66M4bkGUUBr38bqY9P4xnXct88d8B5nC4CEpNcw83QvV1amQ31UXePcnwd2",
  "key12": "3AhQRNScgGQBAp9ueP54TS6dnhDYuRz5Zw33bYcPsj4BjXTM7k4u3kZWMis11bS9NMkgTcGuuStezcmwrGJbESL8",
  "key13": "67XJbZt6buWgUUUymq1T5qqfatx4PR4WhL7BexxXY95rSiUMYctr15fiTSeGzw1SGg8LX3Yi6UMyMiMPGiLK4f57",
  "key14": "4NBDsv9nfhGxhK4f92pe4BPj2uiFuyz3fayAeNZUfUJcXnin9ozVAVhJ264HFUK3Ni75bRzMdjdTBdNrZGpvQoYU",
  "key15": "35yCjoiwiamzzmNy52Ts56LsaV9aqnGLxFZs33FK53fw88u9R4AdcfcHTXTj5GMyRZeTTcDFshqExk2MU9n3THN5",
  "key16": "3jt2xoGBmUa6Bm3g3LPBGMTVe5Vi2HPGg6dBVyX9mubEqyriM29bW4DYH95dwmRFkMyPYo2WykSBeZzBYGstMarQ",
  "key17": "T8kucCYWnqJJPdcg7AqHF12KmHQ4NGWKRhEp9SBKgkh8FJbYLYH7Wwk9sVRTWUKuN3kTGQWnRfiZNrFTu7hpwjV",
  "key18": "22hCANdi7JbSiXJiBYB6tLJxAZ1iv9aN3t4RXtHTicwwnvQg1moeV6JC5aLHcTkizYTvrQD9N8ntmBnaUkirtDtU",
  "key19": "5E2CePcoVYewS2VXDdp24q6xShbKp8MPvC3NGgW9JEVDpWmAQw1vvvtV9pmRgwsvhEX5SxnAMMZTEATJJR9cfVFE",
  "key20": "HMBTxDPuim1w7YxvWXGawDyAg5T21mtPTj8jVNorMEKNYfnCiePpRgitGFuWXWPRvRe1QEJFC3fYSVsxt7euwjw",
  "key21": "5wHMVJYUeLGBksNre1YCu7tzjeJKEfKXAnLvGbPS2q8b71abLRXaBwf5TSNrD6pZtcUdjQADz41K8QWNJJ7JdHLQ",
  "key22": "4877WHjAjEPnPWzCmZbFGY4qx6reFp3qtcZDNJd5SapmK5p41bDB21iGKMtEvM9FtHSZdVVMMkD3rC1KaA4nXX8",
  "key23": "34KBbcAA2eP5fm6kUgHGGnUQMJQpQqR5odEtRJnp28bJcPPJgPJgxzKGm1QXpYy9xKqAKTiR241Rq6qNDy7Ljq3S",
  "key24": "4nDx3Z32m1iBm4KQqCgCEZcTaJVbc1y7zq56hTtKpWfRKieAtonWxh4cpuqKvBopPbZB6icnYRZpznwbReRX8Rrj",
  "key25": "5rd1dnwCB5KPCaCsTVeX9TD9r8JwAs53uRJE2uuXzvWPzCDo4t9AzouNkXqdKF5X7mv2v1G7H9hfbD1sMfJEYDgo",
  "key26": "4qJgashUcmkreJ6AKArFx9mqR6rZhjipVxjoryJjJosqipV1vCLpaNevZVqyR3kKTTk5EigHSk2VK6BZjLCyyro5",
  "key27": "3Ei8z5bwim1CJRyYhSBVFbnuED9za4kV4tSLip3ywgvHzZU48bDLyYrZUgxmYtK39JDcdpCCXTsnsFgbJe5NjipQ",
  "key28": "4Q97Bguyc42y8GPX749d3hi3Um2UEZLQxpoGZVKeXX8PrSYcqHVLQTsGYYQWe1otRu4a4kTFfCi8AQjDXjjKmAUs"
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

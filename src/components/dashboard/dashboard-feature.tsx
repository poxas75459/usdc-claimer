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
    "4fYFzYZLPqKirF7DHYK8e684CuyeSYXMBF2dWEoTZj8T9uc58hqHPH8YDScedQupbyT7bHtDQR8J72a7naNJunLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KqY1jWidgznVrTLQRkA8DcewfwLu9UyDCJF5BXYcGKGGM761isn6WMFUW29SrKkLg4PWjj2So8wo3XgEoUQKhy4",
  "key1": "3i31c9Rvyqm765PNwB1wqYG39WcAG8zVVUfajsXVrEFC9j9aDJJaD61ATHp8rgpApZtdfe4khpNpUh4Z3fJNeuCD",
  "key2": "5vfJQEouWEiXg7ZNuT8xdR9rN3uLFgJHGcMpfnCCZKwXRrudrZjdyJKPg2aVaQHVLCB2aGqLPPw85k69VPAdNoNR",
  "key3": "4TVWNxLsrkvbN6Enp6ukFcqFQVFfALdGot5LF5au9KhvNucn59ty9GmVDLZamt8tEcGCpT2xPHz99yvEn2D9JzLG",
  "key4": "Kzrr8pdGp2aQvqdMAjnP1aFdz5meHDQJLLTws1UejKGRbAM35dBWVNGbdXqysNJDcJsXdxSXWRVVUPg5g7qkHc5",
  "key5": "oLZVyJ5eC5BqaTTFE8kivpZjwhCHWq3TRcnmciEBopkXnBESAQYjyPSG1qveHZW39GHdPsonPKw9KJBaPLXp6HU",
  "key6": "5E5hTuD9UkzZBhUTBnNgPUrL7t6hmX9z4gQSEAsW2UVBLX6Gb7HALMCBcUXYiGYKK8jFhfq94t7kDLFEcNKMK6zZ",
  "key7": "7psHidyPk1wWm4YsGsozanUD4S4ShNaeCY6P2zCuBu4cJBV1v4s9PV2seLZRoau1v5Jj6ieodt9wwYP9Nra4PS2",
  "key8": "4jFy5TvWZoQ3oJqDhrFnDzoysqyt7WMy59e6L4JfiXbohEdzGuv1nPbDvVaLr5zqBbsBrnyuqAUbQfhUnCDMoZ7z",
  "key9": "5kYRbvduTsbMhJDvfzPuYPDQssjLsiUdJoMyq4W8EQW7GPrfHDnJea8XTz2wjFCyJmjbELu2yNeSt2hiWK67i11E",
  "key10": "4jMMtFmwisMxjuKgYDbHjQ4HPpb9PyB9Yq3tUNgSdkYCayFxkhVPRKuhquiyjZsH13yZuSzSfSrDAvoHZ3pWnbKU",
  "key11": "5PF2zRzwXYS1AvriSmFWEirg1STVasLgH5QQbT84PKvwCaTFBodB61VRnR1PBW2DFTpjdWnxueWZHwSwcQowBsS2",
  "key12": "3uP9ZBC8NARECpv5FALYd87QKkU9z3EKH1o112g9rREXS9t7WZEQprzAjWcK8uCTCgvb2sDjD65AcHmvimkA97f3",
  "key13": "2ycbHaR67z36hAhs9vez3qyFSkBhqwNdJSHmrXutJKL4uvKXzLYq7PtmPXijgXZRZ6gNRxUhiqBJU45jbbXThwVN",
  "key14": "5yQ2zq6hAhfwcQWcx2cEoea3ZMhfYLPyMHetRgyxAKo3Hvhv521cpuyMBpzYMhDykB4DNsiMwxSrxfQJnrh7k1QL",
  "key15": "3WtDRQr1zR735QDwsk2EGEZkrvCvRu1zhh2Ak8qeaVArCegWxkuyr9pyqV37wUvGnXWA2Sj7QoXVyjz2HGEk618i",
  "key16": "3MY91qB7FAu7sx7y7Xj1YXnTrg69RdV3Tq2CPwcXA9AV2iBsSbNddmoBboi8qjVY8LwcYFjfAPfivrAggbYFxQoM",
  "key17": "2PRRh8RyJCtcxMtbNDY4wiP8tLQQtNwGXHmB7BK8rWJSucZMAqUn8qq5VGsB8ejrKe35FXakNibtwGBy9EYonFTn",
  "key18": "kvkWfVyVshmdAhEatupofgXbsAdauCqBu7yEDovD41pSPtX2V31cUb8ep9CBT3KiJVjwQcqR2XphrYUTrZ8Lmci",
  "key19": "39XjTWv45tYsUNvzf11g66o5K6vEwoL8nk4LNkLLJdHPtz35e8sCB7wM5g85P8GtajnmkBowh1sZNYLDCnZ2J4r8",
  "key20": "3xhi2bq4YDJzfVCyh7qxVUCMThi96x37FketMaDbdKTm6LdDJaEKAsG7ZNAATv3ktC2EhcY4gw4mqu8zsWE8ar1C",
  "key21": "35BvFGSNaZ6JKssmWwGRxYjZX2VyUZ4zisF9zj6ijpKBvPkjDnUAcEqCqXkHsnj5E8us4H68LR7DAD9rmsHhsAmF",
  "key22": "5F9jgkqZnzYfFrsDCvfqkWKYRf2hKH81Q6xHpB5LPavLQUzJuwBk4rGujr35n5iTWYZ9ioB54jZ9otiVhJmi1m8D",
  "key23": "4aWFt41tespBPLMtowbm5BM8KRivqEQbW2NG3U9fNDzh4GzN5EfsjVfrqvuo6Ewy2yFgGYw4WbpaTSKRS8BCxgNu",
  "key24": "473Z24uJ4hDhdnggc1Qyhb4rUDJ3ovAPtXjZ8tKbGW2zFNtbZH7aiKbAX6hzUTj5Yh8LP4vY43rMVdZ7WbVDJsFS",
  "key25": "2a1xeMi6VFDoaTKJ8HsU6kmcerSbZkvp8agRfLyeMVnhiV1nvvGrsWEWv6yqaRmjmMWWupHqsQz5V8MQnUZGiLEi"
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

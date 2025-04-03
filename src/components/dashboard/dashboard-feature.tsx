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
    "66MvgJtPkYTLA2gHwYtWYumAPaPyuAQ6f8Aj14UTg2RBF6Vmota7GFaz97aRSvaSQCUh22yeTyNsoGXuLR6RfayM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ue98U1XKQSARWnMYXCYRPwCsxkvWRkw775Q3DAnPYRN3mbBJnwJJNAbucz7F6KcYm4WTVMKoewQQpPJBTpwiB1K",
  "key1": "5YCs24L2rtnzKdDnBC5Z2Y3kGb2bBSqcUCMwzH4TnwcndFtn4jWyLsqFKZNeeGaYPnPAJPYGvhd15VVq6j5YeHQ5",
  "key2": "2pFCEjjQwmgWRQnz4M3zSgG9dc8NdVEGpREwTNCc5jsPrc4m6c3T4UANVZauEG2dbGHv2uhELyZMEe5FAnn9R3DN",
  "key3": "2TukBs8qGgExCCpncWoFkEJy1YerAVGC4n2Uji2WTVmfK1f7U1gugZ6GBS6kXwXwwyaEmzwQRRZS7hUCJHA4ktL2",
  "key4": "4P1PSJReWKMptUcxrnjb9PKEHLHdsvbgHV4tapEqhDrDcdkLbxQBrUXbeZacCxgSUiMbY8CTAwi3Cfw6YSQJheTc",
  "key5": "TjPJN7w5NSr9uE82hCZFWBRKqhZ5YYrXXrEQBz89dB4QQT8otdRhoiXKHdSa9gNutdStxcSK8AX3cmedXE9FXtq",
  "key6": "4517KYgjnNz9n8Uvvn8D7VnMot4CdRw4ErYNuKTEYrPJ4e5LQsEpm2Cy3JX7eTb6kP5WSBBMHXZQ2nV88CHouCgs",
  "key7": "4r3PAbnprU8ywRTwabGb5e7ixJAiRmDcNjQsEHfadV7pwWuPkVTpRxDgfy7ib3f6uT7snz4H8f9bU8bmogHwnGdk",
  "key8": "338ttb8ywta89KLdtLEfjcm3ir6e7ykimaxjmYPVV5MQZ8Qgohc2aJaVpjcDMqK1hMHo6f1aaUe7u8yjfWSRaPM",
  "key9": "5SVYSfGHRyQcDtcEhp22sEHtQ7w8RqY9igauMgoYjBjzof81ybnaseGyfPNLDscSdwYWL1igyZ76kDyq891qT2nC",
  "key10": "3RuS54hXTyGVMjFndRJgS23xpSoodruT1gQ4BB6HpDpYBBSkWn4fzWCo6HtNHwiZhvceBq34KWdfzyng2Upj68J7",
  "key11": "29GYPWzHDwvLBggJqi9tC8xp9vFDymDjpJdsK29cGwe3Te3yojAiGqxeELY83DJaTXD7VhQvMBwjhV9qXuHSq2dB",
  "key12": "2jGoBLMwY4rXSeXRbK2CXNynm6ReVw3ZFwzQ4TjzVDKLinFPwwXkeb1MK7p9o4m45KwftFVxupnUTb5yGpHAa4w1",
  "key13": "4wPyAo1yMoYjvwvafeLwFNXgZLmXFzQzwSqnJDDH5Ggi88pBG2Mxx8MUUmXpM61nSUhGYaxTXCw3fyjgejNv7oHZ",
  "key14": "5PpW5KJ5ZbRVmfVWEAGqTYixeyjFQcsdWNBL5GQL4jiS34FyAR4hXzWRyM2PEM5yqtM6XMBfU4hRuDQhdwbDanTj",
  "key15": "5grjDKsvjeoB47mncSCNd9u3QLMeysZEajRsFZv29475SufvuZMPhR55HgtChwN18uLjD9YREeH5uHETkw58YLCX",
  "key16": "3JKBCp1sDsC24Cj3Qf3d3Mad4LFzHdZud8XXTt9qjTknSA6XwySZppoRxge4hSyod6x5NeV8mudGBhhELJAz4868",
  "key17": "41zC82xXWaQe8P6MmCLxBpjK1hFzEgrbdzvBikx9kwqT8ta1WnxFVRbRgxJtqszrwocxksQPSyvtznhA3uLC53kw",
  "key18": "4ivF6wWM5pGJP2vusbuvHHxUJBRv7vHWmjAc2B3snGFfHQwjhS8aZvwPfcJBRMtWbHJXZa5qTP9zxjNeVWZAnhXD",
  "key19": "4X5e18zKbw9jyFa3MuEzniwAU17Y2F35RaGYUouN75nYwoiCqbL13nNkfKcDDsJNgoTUVN6g17KXS2K1VUkYi9c1",
  "key20": "tgJzBfkiKg36LifhiZEr7Ur9g1q2oJKQUPgRJNfoFeDV3cET9CbXyebinfznBLKLynccc2QbSuhXqgMrSUuMCUp",
  "key21": "wRAGxFPm4p3joAasF8WYL7ZnKG5XZzHhbDErJCj1iZWBT1XZiKTfiVrP8Ln46PH8zQF5n9KtxipBWQ81cimfvpi",
  "key22": "6vhgNi5yANQJNw7ZwRLc5u4uGZhDULMNDPDXYsmzYXGSqQ7xaxPSuQy981WSDN9qvKFcCbMH2x9sj3rDWvBaiY7",
  "key23": "235a9mPEdLzWui8jVkSc1rxovHLgTVXmV9356W1peXN8kYcemoWfHVv4SrySUZiLz6qyr8sVycL5BQPQnLMuhvLC",
  "key24": "5Gvi9jaw2tFs8a3Dhq2C2efDEGZ95Q3b3k9dBfunzAt5PWeo5V5J5CeMfLKwhV3dXQgjB7P2tBvFE24AmVhAxkdk",
  "key25": "32aS9yKXGPMz2DuE5RPCesBnkxFZ9gr6VxphQaxHwsbzjYPrpbc16qcKzUwL4B1wLaHNmYPtcwNMxNEKXaVrSjb1",
  "key26": "386RGHKhwYyEiwixRhoyMZKh6zyRo5ixi1T3uQFiCbA38VSj3u7eyAWTgXgqHz4z8ErQ8EbkKmHg4wPWc25HCGNf",
  "key27": "5hpDpmf1YxDgPdqFYbGEFJwn4Zj4i38u4r7ussPDXmuzmrNL2VAwz7ry5RhVZoUDm5mtTVXA73qTySCmXxitKkmz",
  "key28": "3TK8rqi51qpcYymHc1jzmqGGpBmL7ndCqaxUiNiyTzTcTMjgjdbzonREwAsM6yqhwFe4JENc1313aGFvPRTxP1Qx",
  "key29": "5ydTE6AbYaPvF3CeiFqffvywjmogj5UXMouVDU8dZMoE18xSgcV1NFZHdbxjS3Fb4tFiNJSXzGjFs8c7yqm9ms1s",
  "key30": "67CERAk4Vqvhe2KQaEJvTdFvzPwbh1QtcuNrWREtLDSWHURz366xcy3LN1B48pwSHxMKFzGagnVEPKo3DeqAkpgx",
  "key31": "4N5cT4Xkv8Q9yqWPhp1ZabM1Mo5BPyF5UJBokNAAJXgFVFKy4JYYRaLpCFFjPdmwjFqHgWAiyYqw2Fai4U8afRLC",
  "key32": "3fj6PxzkoBuA3rV19bDUBBMxTSjUgcZ9wg2UDst7Q8DJVp5xNsWncA4TRr5728rmNkRp2YZ4mUNNkBMCRDHY7Svu"
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

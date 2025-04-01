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
    "fYKZyWEdbVpij7sWn1cRbsCWv2TnRNHzMBR9QguH1qHgRtEMzU8x6ANCNNc15xfcXKatVRsC3eE6ycoRRxo25vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9saKAdooMXPBeQCULzhnY5ccVfhEQbNV7s3LUFAss377iwdJZgKEHwFPtR1hgFy25qPkxfh2zJkvvAN5yvmsCxV",
  "key1": "2CA2PjY7j4Uy5cWgrFxZifYWxrYHL5vmFAzmR34ddMSjjTeG1ZVMSVsfmC82wVgS923gwHTayPKEaMqfQMgcs2Le",
  "key2": "4uK8KGz4Q8KDp3L5E4hA9G4FQ5jQ8yYxRndgMtM56WAZUZkNRXJoBmiiy1doQp8etsZS9UJTeaVdod7DoYC3bEtX",
  "key3": "4DtQJ5YCBcKUxNQ6KYW148CS38FJPpQxX7ZqtPgALzsW8AAxngMHn1wCjgLKDEmratF8WfqnaJ7yNTyA31TTEKvk",
  "key4": "4s7RvYLycSDF7R8bpx4sxa6UbEPV2KqBA91VWgiQ2Tg7N2Ts1MM5LG37GTeiL9yQHT9dFEvXVDdVbZ3bCohtnJJi",
  "key5": "3oSiNpECmNrSdkH7aC28pGroRv9FiRHVdNaorn4gejz8ftEHmyeX5LaxctiEhR3vAaAKRnZ84pCMA1hdJZRFxPSy",
  "key6": "36cc13MbkCYozv89ND7JustejcXHEZtkxAJTfGAnqgEky6go7pNE2hMiC9ZtUKXUj6corqiEqvkrRoVm4bi1N6JK",
  "key7": "59wgtdkUCzpH2WzAmtrREBmRWsVNAdJFpgyYoj6yx3mmUTCrDFK1S5wzDSwPMQJpMtBPBHRGTkLoYyEJV3A8KxTC",
  "key8": "2xzTBgK1VBHv2iau3RnXUAAtRibH4svkxJ9bu2VSy2o5H1rwg9ELgRkVg4qyugtrna71d2xHVK6Z86tTL5U3CAWz",
  "key9": "3YkoP8BgR1xgLVSUskZo9PvJmDNzvM8ZD3SHmjpwoxjTSgzAZKMZZzngS8tm7TM9ENKW3bQnNui1pFZzKougz74m",
  "key10": "5hvtF5MMMdwvUMmAX2yWoyNcDMt4gSueZDdnoHd1o2rHRLAfGTUyGYqMKF7XGcHVUDSAwTyBYezoeadTwv6BESxP",
  "key11": "ZDcK9H4WWVTgFGAa9kdWP86v7nVNEjrAczEBk1Mdc42NzdSEtR9tm6snSRgiqymEmRmxwWqwCez987g1NgPx6qD",
  "key12": "3h4Dt688mqCffAL6HWtmnMCPZTPhR9kbJZvLfhHRrvDJZ2rtxxAUqxnMEhYjrzZDV1cBECY4UNhnXcesHnFBpg4K",
  "key13": "3mHTn5ZLsRbbrNo6LRoxEQfdqWfpyNSKwGFgQJYVP4qCh1TfYymhxJUbAeZYyaoMaqqM7PkWuAv88og6mZNXRBPR",
  "key14": "5HsNfyCwCzu6rhLDNkVLqMhAhtddA4AC9pz2GeKSsEdiKZ12z4kozCtaNnr1vfa2kY1vZCdSPbwmoxgCppNd5V7J",
  "key15": "3bE4aRm6fnf6abchjTJbAgXeKaXJ6p8Krzfvt3yNQ851qCponbz6mQX936yHh4ogz9xAtMrmDSRUTYb24EzNDWaJ",
  "key16": "dksG9ur26Cq2GaeaXHsAVhFhL5JiPxd5t2aBnQYWdkdzGEVoPrrQb6yQ3puk8LfVLZFKmGB1yNxAK5VH6DCHEDq",
  "key17": "5oN5MK5cLymNyHUvUhy82vCJNsQdwvn1qnPktS6WhxpQevCxh5S7miLhp6CUVhvysih45rkBY3XJBaQv8KWSoiic",
  "key18": "QeoJXwZD6E75n9tVZMQuoYf9Y3NCnA44cbvpZHyThAKKhvKYpmNGx2Z4rP48CKrwY9rt2G5jjEHUvfJYaWV9A1h",
  "key19": "35D9ymgtUNXnL4oFRJG1EQhD5kjQ6HuAK4nudYTsgbzeSG9c1XKVCv2xQzRYzJPUqaRehRhDg7JUjFL7fnrigQ6B",
  "key20": "4JHNk2uF4JKQnycTCMTGghDKTLJd6SsFaWCATsJdH7Nvg9a4E7abdPEP8e4JmrC6HMGrhK6WCBEU3NSBqpGo2YQv",
  "key21": "53DWGotMwU8mpzthF3cFzRE2u1Y7qxPiMgaayH25TigssNbEiyFonMCZqjGpY8eCBhGQZUNtbdiVrc5XHkYhBw9Q",
  "key22": "YQYHXMjSLho385u1deQz8fneve7BXVZQQVXwP2g3hdhe3UdS8ao7guRDcGGWDwKmDt6g6pJTF22RmJcrD3X41g8",
  "key23": "k7gRTMVRpASFfHgTPYBv8G1zTKWcTCxtniFB3rWGMMGMFRge4W71EsozCzFx2yq1BGGtUaYGAZWwCLoKZGonHb1",
  "key24": "2gRvvWsLmHaEN7yiW2qYWTTviYtktnBiU3sQZrhq4uNKxH5qY9TCFEnAVS8MS4xKPEG6kAP986EQcgGFueL85dvX",
  "key25": "5ih8FVkKLQgfQrypq36YdipvhQhSaHyJxxuCCgTqw6Q1PEsnMENVghXmHr6JsxW8C36iryFZqQ5fPqZYsrrPA2ft",
  "key26": "3DKYNpRX7NiBj3XFycz9HYLQAZsfU5xJDuSo3nmzMDqoxJQ4nJZWCVYCefSXrsqRrvjimst8MrpxNLdBtnQD5N8w",
  "key27": "5J9UJnU7WwyGQkzYvfSCtHBvjBZD41YvPrpUXbaXtmqN7BYM388qQ49CvqrGQifpyLRdEu8omqLe6T5DZHg8S84d",
  "key28": "55N6N9LgpqGYPTgwvTSgXEEjb92BwUVSX34UxVSrpgyDt3EFFHWaMK2ufaehW4wkmmL1WjqLQjSbFzJoCxCG9oti",
  "key29": "5XjkDba3JRW3DEc6SnDDdGVNFxWwVFqCNtmXfLRraX6Jgirk88BU3hXscVwMKfqCDS8NwpVjcdeNViVGPdKPCsdX",
  "key30": "4fBMExFNhfpZrdeDrAjRmbznwmVqgEFHKrra3tAfwXLNDN7DUerZQYPuEArSspdQmXXzLQha1bTsu7g8Esukf9s4",
  "key31": "pwLfEFMpxGakzUuepSLg26snw1qbvixUwWv8kSJpvbUUqnKJkVnEUFVZ2zhbpou7dZ59t6FoDx7UqBMWRm2z6WU",
  "key32": "3QVPWBhxHC4mpphKwkVE2bjSdaeo92B5qzooR5qeojfaVLtZxQ5tQzQjpgwRYpRNDd3KQw2jkfFkZ8iT1CfYx9hu",
  "key33": "qpqvMVuLfX933UdPMNC1QGmKAUkXXcTkkceksGUunVT7jvCJmHMyq8RN2L5gaqJg9QVteKsEwRShyZR5vkgnyeu",
  "key34": "57KDN489MXHFbMeNgJXk5cdcwjV4cV8sGWfSXentAjidLYJNcxFHPcLwjVWN3DAgiJc1XEnXLRPtiqvfdmNPRHUs"
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

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
    "xyZi7YQRm3woPQmwk3txqtPvRRYNVRreNwoBbg5kwogCmChq2Dnhu7viTH9jKP7LnC4kbtmpUsNtbr1F1RieDZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtPxEb5BW44Cw6QZRbYZM4WZZhB31N6dyb2EY2XqGgFPR8FZ9UAnnrKvLnYVJaGqtsN1iLygMBx3Nbs963nZWbc",
  "key1": "5zq9DsLwn6gSqhDHDFbcLq6yZ9aAKXALgrqZqnrNESrkAn6fAsd78mkimE9aujdBH3fT85oRdtzUKcf4YFxAZMMo",
  "key2": "mGgcPsLvCF78oGCKMxJzjfHtHgTAT7XPDnebQ7LpXpv9QEogEGGrevEQ6JRfCuccyNhcjNB4WZH9UZXFqc7DncR",
  "key3": "441mKEeMTQQqk9rV6PyHZ6it4kEctfsaEAud3XrchP3LpkFrs9pQaQxATdC45QxemyAsJitpFR6UqBGF2LPHmMW",
  "key4": "5L8FShYxVt1HRp2puCzP1Zhwxi6qLcjBTzUEb1YXKakDiDSrYkZhChsLWBSXZqFFFKci37rgHCABebsgQR6skLaW",
  "key5": "K9WVZ7eyNEKs6xn9zDSdMsqwak5kDH9dJ2JsD4Tc7SHagAKNVgAW5RNc2GB7G3aKsfFc4zZjtrJJjGEm8Aav5Q4",
  "key6": "3jKqukDYWaUJQeMXpvjJqppLRiws6tnjJpjnDKcQVeJL78X6h86d4rNdRj2h9tcUhRwsfYULKKs5DEVEHQWk1scw",
  "key7": "59MU6XefHRRZkFCJ4WA1RKxHwmFg52X5aUFkrEqTXmJv2Cqn9EZ5faTtw45QVynJiNqy7GErueEj4faxDk27zQwh",
  "key8": "2SMJ3rdryVt8eDFGizhSUtLPhpZnNJD4qjnwXH6yq9g7bYS4GycomxtvDGnpH9fczn2derkKCicEL5ndk7MbQ39x",
  "key9": "5bqaxERqT5pQosbmzJzkuJxcTmRczy7YVeoKmcCRHm7qAqN5WiAfti2p8cZcRhNhxK89674EvDCJJ6cg6RPLr3fZ",
  "key10": "4MJzSN6RmAehB317D2NygpFTNhcGibAw9eCzB31A45Sw9mBJQw5z2t6HUnbvPgejmfRwdHd2n8MFyYQizSkB3Qd8",
  "key11": "5RPAUtmw5FZy3EV3sRYBccL2rMyfGQXbYBzVtTygVqeAsK6q9jNNS4xJcEX7ARvELG17GZpAR9wMQ4GC8u1kYvXR",
  "key12": "3dAHC9w3pyCkV3Gk2eaEDy1XTPMzMsBkzXwfK6eZZMWRAbKJxheJaR2GRtedyt9T3acKEchWLLaXmZ5PCcTH9Xxw",
  "key13": "49CPvrD8wQhwh4mVwchYp1shmhquACvbe3bfsoskLDdYYGkSd8fY6XYcasBuSkngf9oeoYcXfvkhpLzWezdTdJSk",
  "key14": "UETcSrn3VqGtauy4XwBjfJ7WDLevjGphtQKkqTYDQ22d6tau7b8EGUdokhW6MTrbPTLh7RBcBdWRAXnRCABpjHi",
  "key15": "2qaR3kDmKPTQWe1jDDCmvmEtRNaXYWySn72E3fYJUvGhLpmvQG6mWWXRSe9BtaXh4a12J15LYxd4A9qrjJ2fWPWk",
  "key16": "2JGXgMhLDvP292bAgMrF56i4m3yJp1mDjAbGYFRstZcaBY7nzwMWaVmTRJgZQ7RRejna8JsuDW777CGvzqbqBG7H",
  "key17": "2UocY1SYVQni9j9gZdzqLb3sQVoFCe4LxtGy9KDJkNzsmC5JMN7Q9vzKFt4fqKZhmBBtv2CNNFVKdJXdMNqVEbuf",
  "key18": "2M4duEbg2STSAJkGSJiJm629Cw3A4Y3R1wQSWr6EyeMWxrLkY9cCeEXjuEcmXMzbTSvm2YLjqsghMWKauUHWGtC4",
  "key19": "4ihbmFXBvcVGyiAumD4WWxdpt1a3tspqM16JThfvxP3xBFgTkedUykT9ktUfcXpjkxqF1BymXfXQTTedaEBwjEam",
  "key20": "4j86vaxkKdQUuRz7RYQuUiDsa8iugXAXC7iT3pGNY2dHNw34cjs4C8LdzrnMt1pxT8WeB74nYbtgrj415tM4iZno",
  "key21": "cXxSfx4W6rYDvAdTe7vSbzgaPT3m5bCQ27AYqkbq65wT7jbrDWoVyBcEZhHZJnMph7wYDrJSU1cFg7mERz1t6DH",
  "key22": "ACAR7BXvhexpQY9URDLccqgdWDjf4mBb6aHFFexg7khqXJGTjx2XMRR2NgwwqtvyqhS4DFpsTo1WFQyHGVTki8o",
  "key23": "SkWa5k1yR5tS594SG6fgMV4NhiLxxP3nWfiUkbjY1ViruwoXjeJqWn8orztuqEfGr4pGyHyji6Bjiq2Ab64M5o6",
  "key24": "4bwy1eY1NNn8xWYp1AxRsbyLebqqaNrtoBYG4K3DkkKe2XaS513Lk7yqR8Epq1FbSsR9q6kXN4mVqfqFAPiWTGVU",
  "key25": "3KujuNa2RcXMBTGcPs75Vevjzrq7rjipHYnEugF3MnRvw8vTznnLnnpd54qQwXhnsuJgj8QcNoon2HXVn7qspChE",
  "key26": "3rVA1oWZXdMnpMCSPDcToSGpbkea9E7weS4ez9ukuzMjr888xVBpETGciZ7exRNLLQLpHboYuLqX2vckC39s5vLA",
  "key27": "3EdAURccCWuFFEnLm4AhJ6mxRYTtjw9CcSggtQvXuAvcYd1tZPLrcpf9JTxTD8Q8NA9hhnSb57obunLmV1x7LfsS",
  "key28": "ww8a5TjCMidUKWBHqZfnHvkxQ85vELnGGEpqnbcBH8qpApHDRDradPjLQjsxSi4181Wvfb9VExr118kksJ713XW",
  "key29": "TxYdFkAijL8n1PGMEwmevcRp38aYLwzYVMBDbem9jCXfp9sv1mXw6yGaksEeN22LdzV494mNtFRWr4RoFPeA1uL",
  "key30": "4kSdP5W4HKVeFdaphQTfA42o6Qzgv7znFz6aB4vwdoYysazWKYfWhiFGdMiPL2Vj5UykCoRff4sgKvfEbXpx2NWW",
  "key31": "3pEan1KfnYZ4C2G382dLxrBJUsHMRX1R98FDZb7F93YUAjKSBvwYw4sy51T1fR6hqiGrDtrJpxp4HBPmXaAUdcVm",
  "key32": "269VhPEEG6YE8pJTURuU4WsSKSDSmdQGdF47ZgP3MpCfbMSQUVmDAwEtf4dtagpedZJ6GGgDTsNh2SGnGPk1kw7Y",
  "key33": "5DLmZqPFcwidjpVsgmt7rLyep1gCxnZSPS9avBTKfJ7PZaVoUeLzFzesBnfYBarvwWZShWXxY4WEtmqsESKjkRyA",
  "key34": "5ASbXBp2dBa4GudfUNu3JVs4URLD4pNqpb5LRYPMtTbpHcR9i6MnK5uhRbdmmjDHEacgQgu4hLqDWTv3pcbRpWEb",
  "key35": "4d5VPXpx4q55qusAXHfgDihz3Wgu6LxxQiTEXRax7CQZSQK8B856VPaUpCnEUpvgXxQ4DvDZABpETr7ASyGhHuj3",
  "key36": "65r17ipNj1gQq9fbc6BcrWpVwCDHfdMNCodBzJbYMVxLCUn9Z5S2ju2DXYmBEdxfn6DELoDRMhSQ63NyRFdTRVjp",
  "key37": "4BH7ajdPAbcHR5dW4exAhw3KKJA4Ykx8drV8x2YqbqBDcPwzREFZrWsH6acEtzrpKoTRNEkUxcKC7e4LShaNsAJc",
  "key38": "5UHdV9rj3YuBo5RztBcJFs5Uvo7L6wVpHd1R1sG52tufF9xyP7gSSYceh32yBxgxQgVEAY7UeG7yb4URXZUL8dm2",
  "key39": "3KyB3wyDn3GkysuboUFzovh6Jn43KY3gmYi6FdHeE3dF6JP8XXAHqvDZb8wXyMctXcdjgdMhidbACHULQq63P9tu",
  "key40": "5tSuKNaVSnUgJyGkCqenjrB3qhmS6GgCN6K3wRTzrHMeWnBoyURyc3qP9WVvJCGyuyDUaBbMNP46VFCUccV6fiEc",
  "key41": "fQABjKi1s9pS1SzvYgdjPBbHFhy5Qs9an9QcpUJrLctiMne6gPoYomiGUdDVXaqYAWvjXu6cKmogv52APL3nmtw",
  "key42": "5Lpt6xPnAXmTrLGWo9qAwrLYxocTnrVd2H3zrVjZrdnN52bJhh8ZUcsCHuwFkfTymEZHWkg4h2Mbuee9QWyACLNn",
  "key43": "gyHbyLSKm1ivZHDo4CHQUWd18Q8trQ9CzaqRboHR1tyaJrjkaEM6bSUvVRdhx2YbywDFZ6A51nWyiRCeKDou12u",
  "key44": "YvQs4UydYVDSeRrdQnFucLMvLRdEyxRt4D6LVMHeDMmahVju4hWvRyL4V3h36KY2qQ69Y8rdUzhyugH7KcUL2nr",
  "key45": "1BstY88bWGd5LAphsGmmGfqeYmbo39TpYS4K7bm98VSnaKqpbwKHYDPMCV7tMMwNrKBa4b3W5rh1nLTGjeP5C4X",
  "key46": "vnAdo2q1d1Zn7i9AsbHW5LVSuqF2PKX2xCnJosVoyLYLBXAp4GT1efwemCLYr8v2orkHLC4Lf2xLv1fY9vycLqw"
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

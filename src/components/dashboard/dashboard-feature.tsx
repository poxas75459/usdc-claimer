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
    "2S8Dcjh2YHSLyiuWCAsCX9AYxtWFUy3XBaUHpWH7DLAnYLdHXJXuwhHAX58LyWUC2LDTMJAjbrB736qbumsgJfjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEBWB99w3DxSj4b9YArQtUgYDXCds4dUXauimAn9QWcS51FVCDRDgzBgmaPWP8r5nnozPzs2tRtVq3hLWcoxN4R",
  "key1": "3N2btMCAZPt2Wibs6FjAw2By6GpfX6PxCDvD5Bss3GPGJudMKbaqZMYUC7DazWzWcB1Fym1Log7ZSrWFQZgMRZ9y",
  "key2": "2dWYHA4jVusU7gaUufCJhr4kJwSTZTJUg7qcbHNyny5oePH1DsJ6HSVmzPQYHNwWq6GuyF123ARznj49CKwQBZrK",
  "key3": "38PULavNZgs75uPnQcka6fRfeHC8X7pJVFjrnLsCczzcds1s18vUTmfVR35FBkfUzv2B9rGQ8CBaAHRPSYkigWoJ",
  "key4": "22NpeLrpde5AwMxT1yJ6XKXxqiNtjWGE3Ew8uUFxNbFEWmdKdXASA6EzvKwsEjB3xoJioYjAWtkTqFavCbQ6fPHu",
  "key5": "2q9FVKsvkHNDMS2p8J2QD7U89chCHvQgCpZmDCyxW6A8wbSMBWNoiX2CqF4vxUhcMgvobaFq7243ynfmFAVJ3msW",
  "key6": "2aCYubrcopwzFsur6m9g4Jro3b2FFPxGb47am1r4MX88r4kZs34vxffPBHkvoLXEuAokfn4bodNfEECNHXXAoH3s",
  "key7": "4XmckYFhN3q8UPVPBtB5SCnCSN1zSmpEfi8zUmQNfTwSSDQnzj31RBxp45RCEMdUJvJhYgUrc1oTBSTCfBZNpVEL",
  "key8": "2v63H1bptGkNkbjvLon9QsiX5EjRPd69xrU3Z7UCbBTLXW4k5msKjrZngFkXqwNWFZZvnVKvMgmijozPgu2gtziU",
  "key9": "GKSdJcyJxnRaJNk11kVoRVUuJ5una3XFtqDWyZSujy2v5GiWYbqf617VuTRBEZoYNtJ3kZYFuXpStRPYKFUuKMN",
  "key10": "3Tb96si3VR1aaT1fkBL8erLAHgm4mThLDdG3jXhhachP8hh9K3SN15tZoNx959X9qM9K5pdM69UixF6prqmHer6m",
  "key11": "4mziJsE1NLeqyQR4ch1fNmoBuAcLzZHkm1oYy9u16H43T5FQH4WwsCCFDCbPmFyK3rKDFdVY2YWeby51jua1zrkn",
  "key12": "Ec7d55ARe2h56xGMxUvQamZFsFpE1wy4wmKQhovZv1iPJnxdhij9mNMZDYgSTPNQXRBL9eqUwkXEkDYYLyLUdH4",
  "key13": "463PdcRGkM343TGWhRmdA4xshSw7Y3VPx3RYqLPY6rwp7s8HEBBGiBBRGW9yGPWaLUiWgaGtzgZ2GynUuCnepvCk",
  "key14": "jQcf17UFrG82VhfNfhH4594Ea1Avv1RZ4S1Ceku2rS9qtedip7W3WzSRMQeeyLkfpFgGwXoGbF8G5W2YDpoedvy",
  "key15": "2JHRXNPgxgLQ59v2hN8Jf3n1vxyJfLynM58tzw4eAyHKEnp2KHxoSMGiybL7QyuRoNNfR1Nf1KWBPwmTtEUpbJCr",
  "key16": "VJuf9b51JzF837Mw4ZBiurB5YyYtzzyo7G5zykrmHb4QECPC2mTk7E5nGSNHtnAYmBjvw681wXnPnVXMLC7xXjX",
  "key17": "3Dv3rQWNWHs8fWxUHPTnCQLvFfVuN6ccDUYWkPMoYu93em8z511Fa7v1q2tRma82TEW64Gz2ZmA4zVhSQQJAYgWB",
  "key18": "2BNpBLAvm6hk3CUuuPN7gPqNXGEkURHLZozYfiJWUCwp7yg4DhntrgW9mP7R8xbdJRX8jtEGSEwETpZcBKHv36fD",
  "key19": "49fRgfCRM7bX9rYoDRqZs1NBzkCYPAdhKGByyBX8VqtHGMQVNC9TJEqSPYMifNkR1bjUW3BDRAMVymvbAwKG5Zko",
  "key20": "w4HRTacLWTwZkPWYimezBVkVizzTCjJkYmk8mEKU2czymciKWfBfSign2UipWLsQd5GKDcnhTqCZxwG7EeN2H3P",
  "key21": "5kmvsQLkWHVgVWWJhsLriw6YZXokbQKUWi4mEAw3VWsSjf8vi4qnCFwHMQKUXaD3fWXknn56FZRGaZ6q1xgqgYWE",
  "key22": "2sKpWKViwBaNDTTHyArnLbi5XnbgRojrfBC4KyrtYVDJqhQ2o93kW5SnoN5XpqGNfFZHkjTsv7iC7dYj1a5W3pqE",
  "key23": "2LBp7xBwbYwunHS9jRK5EVLVJfjQZd3q1Dkj2ZAnb7rxPUugUxceEvhyNfp1HVJZs4XEXeNcjBgoEsGCwfttjNsy",
  "key24": "2HpmdwVMVG33Qa1VgiKYhe4xx7SigEJbv5JyRqzXoBeaV38QusRnqZbXD1Dst1HD3LFybfXj2rEhPnMa39ozfbF6",
  "key25": "3g9zsRZFxAVUgHnFh1q9txyB3NcZDKkGw54ChAnAuXE3fqs3pnb3Qf3uwYf5UP2RzLB3PbHs4QoMpeK9Yw4TW612",
  "key26": "3WQVDQM2wdUCHm3PDsCsxZg7PKiNTvpvzrL16MScKC9jjeD77DHm9j7cjETAKgY4gvPURYLK4MzmBtnHuJiUHPBB",
  "key27": "5t6ToAgtgLEB1iXYNcAEmTuGGfkZPmpWzR4Zqpc5vQptRD2gtj8iDYdLnMrx8BgDLiQDysEkpiM82DBcYZnWDgjA",
  "key28": "5AHedZzJskUgDaq6Rma5tgaB6F8aVvxmJkdGy9Ybee787wAv7EsmhazV7S1TUqTKfrUMJEoTXtXyjm3LZT5MDhyV",
  "key29": "3gfVbVk7hm2BD2QyjbKvSQdaqyMxjKVS1RmxjZAGqAkHHe4BBjtY2mAm15bn3fBVkEBMvfAde3TBHgGzQfeBKGFf",
  "key30": "2jRyWc17RKtd3QUWikVvkUqo1rQJ3bGoE22kQ8fjgg5tEuiRFLi5Rzf8fgPaKJU2s3YqngSJTJDhyP2YMiXrYiUY",
  "key31": "59Zgu3uZbEmy7AcY29wGZHe1sxDxtRX4rDEcqaStPABEpQuj9NbirRoHFjKkDzaV9vDhgzdeevghYzhekEJnFWwQ",
  "key32": "31ZiQucam42Lbp7GEFG4kr4xSvDxoUotH7nBTHzu6dudrXYGQvn4y1VjT27XBtDwcsH3bb4xQ5jnwJNH65RDgYhL",
  "key33": "63oVZHejznuYM6u8jMyBHkrh1jPUmrfQdNgXTSy4rWjUN15eucL7uQLCNGmPhnExeC29KfuPpPNAazU7SCyAcDNy",
  "key34": "5DBH4CvGydG4uxNijzwzBtZDdYzEdj5rg8cfGpTFiRaZL4xep3omWVgpSkwcC9gHut4evyB5sRvJbf28XjMvX6md"
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

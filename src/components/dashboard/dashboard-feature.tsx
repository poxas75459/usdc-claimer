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
    "2E86jBERsSoy78iWSGBnnXhavt7KFKm7474cxikdfKvBh69QP5QTetMfxfZxLLjuNg1fKnnzvXJ9NkEMTagx4WGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdhSu3JkdeaQK9g9CM1m88irtYBejN1kwxgYmFSWYPfdK4RCyfny7r5XwsR3fy4FHNeZfb9hzjY5gekvzPSvRTZ",
  "key1": "5UFCFeHqv1QCzsV3s5hFZc4rE2wbxwDnxUxWLaBK1z7RmLFFT25E5PM5mH5z9mnEEQP61r1oYYaEjDoq7xkHxKDn",
  "key2": "7DCLKurAisjQCj6LfggpVixiRpgkqzUry95qbL1rC8hg9n6fjPkLT1bY3u4RfsXETzY67Za6rdkj6HdNnfpnAsu",
  "key3": "USQukoTWVUwyN4jJddD2x7RJCiXno5LdorZyQm2FzjvJthQzwxXMcdiQY1eADJ4QA1tCiQoTJJo5fLZ5R874Wk1",
  "key4": "4p17YNbGq7qipVZ9nFoZP3N3oR8jKhg5jwVyttJuKwJiSHmX7noUSRqr12z7XVn96MuUe1xvF1fbMGKgdVHoRwry",
  "key5": "27y58ZPHDKJPX6rLMuXr4MMhdj67a9v51iDBuGy6b62bv4rQsXthBVVJ5XN7JMRJGYQrzpeFd3YdzJ48S1gMf28W",
  "key6": "4dcZsewrozF1gA2YGosBhkjXFZQu1US7F7xKHNcd7KL9wC4U2uyyi3FVViYf8mRwCptXcKM1ygYB65PueKMx8LTH",
  "key7": "ysoyxpjiKEDhZp6fFPNMVQpffBha7E4XTJxVFkhS4cVNTCNi734z5tuNjRdQmKPn9EDAPtFYTCZoBGVQpU1yeSS",
  "key8": "4JBFTfHVuTrJvdK69qrNGk8SfCcMLNxQQ4WyUmDgZSPsXMFTPVPE4KuhaBfqf1Bvy6vtEyQH4ucb7NNdWBESoSPS",
  "key9": "33tyrfngwLFSiXN7JBfsZrR6swqoAFSwR9pYsgHN2UVHpkQq7KXVmLbjWZtKup52pRgA71qSZAwvcwVRGzuY27HK",
  "key10": "5CCLcijY3qUyDVxc9vvvKsBSwWfnSAM5VEx6obsd1MLwmD4dxb8nR8hiFXZxXgeZEVeug9rMEbgw7zvEeJnMRJb7",
  "key11": "3Jj9bvMDrtDzYLJrjNiDnko9WiMoW7AYJYZNLSsP2TnsxyxJNdatkTuPDKLPzjW9kFAzP9CnrP9U4yE6jxdtDPot",
  "key12": "3mFoD3gaEWmP6dC345Wi9DCYUhuNbYcSKkkFm5LDpSZirJfc1676eRSzUyeFWJaKjCY3aRAvk8V99ix1BiLndhHU",
  "key13": "VcznYHQZpWQp39RpF2f1JmNLKPrvct9AVZvXp2Eq8h9HEVCDn6kZSH1ECLdG7g3Ek8jx9oJxshbEYcobgbSfwoq",
  "key14": "3HrJgSbNHxmrvDkUxrhaugutJKHR44xp5kNkMu1FNFeo1MTLBwpJMoWBKF4Yi7Q4RdUoBrsjEPGZVLgdryyLUPUB",
  "key15": "2BKwhLtVKwDijPQVGiMEatxtUmCUVM1LdZUy7e1TMRUnHV8BMKFfqxZySBN9RChooyWxnEgMpJ6RYcFAywibYD7v",
  "key16": "2a3qd1GyoLgMBdAV4T7SaTMb75SkSi4M6n8GughKxoYfHi7eduDyr9R8w2Mv7AfRzGqKpCrfZ4PqReDR26bGAHPX",
  "key17": "5foe45AsmdvbC79h3n8VjicQq9t3nQLPeAKgz9eEmj5ut8KD1omeqqSY8hBNi95wb4wApC2okVtwft7tJ7q2Lchr",
  "key18": "64jA95TKsofwx8AcN7ZowDzJiE6bogY9fnGCqcpjxj9G3hz13q8rJB3eBmUnu1kHxNad3ckkYc9PSV7wQpLXqoAH",
  "key19": "2J2KFqHZTZMo1rETDKJDroBnMbCZ17qh5hVs1Af7si7Kt25RRTY8hL6EMSSqDpBPC4tWCFt41BYmdWN1a9WCtQp3",
  "key20": "5PgWfmhdSx6cWviKfVKoysbkYd82fAgFUrmdHPGf2wUXrF2AUPytUb4rDMzhghqZiHu8tqraPWob1pMQStk8qQZe",
  "key21": "4aKnATLhdFnLaW8hSS7wBtnPv63PE35NREaWeFuVjAZeVzqDgRwoCNgMrKJSLiHFWWpesFPeJWSkWptKjL3MKpY3",
  "key22": "2nz2ZVuommPC8iyJWyKuAqNEegARuyArYHfPdKmWfk8c8YQ6CQhjpzZK35cp3na7NbkK1oqPU4piNrRVQubRwY1E",
  "key23": "2MZ5KxRuQ7uT8QWLUAJL1GMjEP6LswMTTt96BUM9CzawHjNmTXCgV2vhbUyotBeYynWkkhR31uGNUPegecZeFpSh",
  "key24": "4iwrtVbEJJtkxNwYtUC6bwHGK8tFSQYvMjc69UeWVWJjzzUQa2A365szeLeyTT7fPWiVFTGc5USNSDaGBAsa5X9W",
  "key25": "4CSmiYECWormN9SWAwZfXaQchs5XoYbieEWnrCip45VrjyUzmAtkY3wEzLYpFspdshU8MXb2hTimbF292fTw56xk",
  "key26": "4JP3fL2MBb4FrxUDSMvTPEVkUW76ca8HgNe8LmLirYhSjXjsQjXoCkEqkXAmkfa7KPQpeZ9yfK8oXahGx5JzkwYU",
  "key27": "2tgT9r6dbaiDuVrWPEAh79hQ6et5Gmk9MKh9QtEzqm8K3WDiso4wQ44dK92ypeegwMqzN3FBpnYcVSWiBKuWy5W9",
  "key28": "31y5RSU59YvD5mgb1eUhqVZ6BFdYTPjqJuh1VbGMBNt7vL5PUyfatutVTh9XoP6UfcAhPBHqJp47FNbdENZKgDbm",
  "key29": "65deaZpfkzK7ugKgYyuz8iVantimqGXNNhXznQYre61NBCzeu3yGEEqvs6RvY9jK1Mi29VqXz7TFvBFnXDG5SDRM",
  "key30": "5ze5XkzR4VLVE26vQwtRYEWBXifJB7pV8XpFXEkkSo6rfZ8HoiqWVHJAZ9QWaY4Jgtrvg9N3zPyxdkUgzPE23p3h",
  "key31": "4hmBQfPcYaWWW2zVnGUdnGJ7UTdoRYLQ9p4pGNWv7HQ819WJH3R6Q8X1hLowAzW1zMhvK2NFRhq4XmEkbzK1hfe3",
  "key32": "2xonSU15JFGTXskdqDRf7UPPbuhXYo2SL8k4H9iKaYBuyn3CcVYnrGYRPYtCmAzAE3zYyBTp5t7QJjU3fRDfx6Jb",
  "key33": "31HcyEBzV2ryLQca2oW2uiRFfQD9eExg55F3AMLekiDeGYJteYm9vzSJ9UCmi9g54byCLhF5Gz7r8MbouCXcBQS9",
  "key34": "2nu6oFxpz34wwW8cZuqNnyTq6qr8eZUnsDjCaGotWcDCuJYuJtGgaJjr6zepFrcJk6XTTNHCuXekEg9DQYWYF3ws",
  "key35": "2VxNyh85TDxzpeCB1ZhN4CSXzkBwH37avhutEvg196XyquNC8LN49QqP3wBhQsYSaJ2xmRGSbSdEqvYN1d6qfiYv",
  "key36": "2zWefek6eTJNwrhVWhtrnsaBhnfQGw1Z2FkXZ1jAftHNkWJezmRH7uPSEqZjsNumcA7rhnycw9dUUznR6g7Mhrhd",
  "key37": "4EKefYWwdRBEHzUgw3hbRgixPEECPP5k9nEi8vmvYpgdmJpL5Ja1AA3L7u2stJqMBHAY7LbputPnVSUa6U2N9W6t",
  "key38": "3tWXdHUFm4TdNLDYsoiUjRrKhh6Pei7hRorXjZ9aPXQy2vi5ko3cnuRDfjShzzt1YAGFNjfk5PdDdGUanZ2mBQqd",
  "key39": "4DZsdSNJmL8mMJi73VyHwo4aiwNF5CArrYoNUB4yxuvDTRKb2RoRP5dTstsG7ZTDHJ3n5FTAkvq1E58qJeLsnSHG",
  "key40": "3CbXmn1vguGH9SjWFrekFJx5ZDCwoQ5A6r854G1tb3A6RoYzU6eXmwa2iSJ9KaxviLUyCCFtrMgWsBat5k7ZMmGH",
  "key41": "PHwckEYKhWQb6NKMVXVvvmcUehUvAyT4Ab73661sUaXMyhgM7FWKVXhHcsEpPQ8QtsVhEmzRHa5PAtyGNwt76Dd"
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

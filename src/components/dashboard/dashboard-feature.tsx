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
    "2PbNBAtP96Sn3kFMuJJBDE2xqxQgokDE87JoTRJFLoedmaEVfrALDnQRWRwumJEnXwPSifJ2KVU2df8HKs2YJtcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuF3eyXbNvVaxuv8uxZvYamiBWLsNBq1sEXV5XzREtEPLQ7krPG3z8PEYcTyXK7BFbRdMonvhZJvJGnv6zN1wVR",
  "key1": "4939pmeBe1QFbis85Mep3AP5dmxedBwjn9GP9ZcjzU5djG4AawV1iGMo3FKtKr5v6oBmGk5qxKspHg1vkJK4quLk",
  "key2": "GtFMdG1FfS6kmrEpXkXWgUSfFoqgP1Po8MNdkCgyWTqHUCBzUqFZCqY1NgDrSXF447MxkaXrxLTbvCtCngNRFuY",
  "key3": "4b7VpmEkfa3qJyKJa3Cjnpa8k64LmqVTkFXuVPHpkpE1JooCKMNxAW9gkrvRPYcd4ybLtNfnAiuWdwqoi9BdZKe9",
  "key4": "2wPzuqH1AnTLveFqhk5eDQEEvTa4tG3YDH5Yw9SLfH44m5KmtEnAP9fojaQB8xRzxEJS4S2dfdgdkxxr288Ut3P4",
  "key5": "4wGXw4De2WhGXiZ9xxe2ScUMjBpPzrbcFaSQaNmNpVXEfiUDEsUHDLtrKz1kGvFQnnTGsAQAcDh2B9p2FtWKHKxj",
  "key6": "5tLJNEj68sMahbekGTkyZMpSKbUJfAZs2gzfbVYPsGwPzETgn7uAg7qYRk5RMz7DnBWH2fceUMu1PMYJqcnP6kAr",
  "key7": "5fYrAyRTrkfvQ9KCFfhX2c1fZwP2rLYKz5w2sZSYTmM1SxiuQo6rWkCxsdLGME7BnyADeXDYautYdbHsnEQo1ipX",
  "key8": "4FBjjsNhtoW7dSptrY5TqLQXPHAB8V1D19u7HyqT8f9dMYQHT7bCzVzawzfTzDjM16GM7sGdzUbY29BZm488tmgr",
  "key9": "5R7eCYsr5U28zYk19CnAPyjktxyXsYfdhWH77pzMfFyDZat9ZPhVCtYxEBNbF12aEASwYEx8YLos2LPThW3uDede",
  "key10": "3sH25jxa1DP5JZGQxZpU8wZWbfuGQMoacTDcvvJKrPLLWPhBRYQkwBXJPW9uFNj61cbanfXCLAHL7U1EgevYZT1D",
  "key11": "2dFxkZKKLTnbjEyDAhthALwz3NDzQbuTo3ZctLRyxBdeyNoXJfA4qhB6eayYuX57Y4apmdZNhSvLeNJaVxucx87U",
  "key12": "3F6v3TKomhv1QSRcstjr7exRgnfS6e3SZx99Fx3ysKgebPH1Jcyd1Zfab8cMQPoeFeVzhdfDhUBxuSJP1mMvXgak",
  "key13": "49vYz3vB8S5z8mVSWT5zH9FA1kM692pdSQLCjA6iFjzTtqbZ2b1re7sGZpK8d4c4mt7kyXYupmhgAwJmXjoc3hCC",
  "key14": "8en5WzrnhgFpJt5rqnXryPBUEazyfRoH9TubFkzV8GHKsw6x9jqiLC7Np8ui93Q2DKhRdVVpeLSGrZPxof1cjN8",
  "key15": "2N18TxGzaezXLf4cZPCoqA3zNd4Rhun7ujr8mKADhnDhPnckQmH1AHECcfeNeSFxiyDnkSfmG1q8VWD9NuRQbBQb",
  "key16": "4Mt5woDt3z6vYYo4RsDRxvQ1MC364ta1YGPSzY7etR3eMQUsGgNpJYF9wBmhnjyppVMX3aBi8PmPNazHwzPQicmZ",
  "key17": "57VeKJnfLPEJ1Z6GCuSBWqpQ8VjRic3CMKP1hg5kx53F1nzcrevfmsjmBS4nVnRfYd4DBZjh6YWiDd5EUtXudnEF",
  "key18": "5YHuguzsndaqtwuvktP1o1SpU5GB9azUDdvHSQiKJz5qQbRpcfzRHs69mXRH58cwk6PgRBk6dmcnbSH7VHhnnnXW",
  "key19": "pjv1rwCUeLrTZ6u3kjviQ4HYLraQzCuAV6dkXvo3pjfeFkhv59JUKESSZwqcGPAss8sw4od1ji9WvAtUVe8426R",
  "key20": "65h1m71tUDQM59f1JbmKyRWrezdoJu5xVLUA4wDSxwwrfnUJgevuR2TZxkssZ8kYPiWuhnb8SdCcUP6QQ6fRuPdr",
  "key21": "5eyi84p1uuTUNMM42SSKpCanSnrL2jejgTfCDTfYCpcsfEy95G1x9v9Qr9TKZk4R31by3HDBCZXmAYxi1vc46nHU",
  "key22": "UmU7WpZgPBTP9MtZrGPfaE755Qu6LLUSwjc1fVns854fWbvnea7ci8m8diYZYs4BxgYgkuDTCgKanw3twswth7S",
  "key23": "2v7ypwk4mt3dpDHf4ybjdfj1M9BCoQmDcbH4Uj4NaxN5JNGVuSXY3QwKC3o6SzK1G8gA9PbFvfPFTmtWwTLS6zpk",
  "key24": "21PZktnDeszApgRFCBMfz3W7DEw72ZyNA4Hpv2kJL6DXWtgSJBKmomitMS85aFE4KE91TtPsFxLf3reszMLXr7kg",
  "key25": "4VQVSLgs6scPNod9i8zQBDHGNo6QUk369xuPdgGzBF18oUExKoRb5Gyi9TkBhDksJXHR7TGmoGFnrU268c7pkRA"
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

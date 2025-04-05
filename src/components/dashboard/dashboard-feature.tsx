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
    "5fH552xBEDnDmv1QXATpdHaQJtJRDWGbVLwDPVNQ1bFeC1Vad8rXdWwfXoLFF3QNCpAnkEtbWysH4Hqh2fjFR7vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wxhw929G48uAqejteHbsGGUmMhsF86EWaULvmu7Z788P5hURVEHfmDTaG9X6fy4TEyeNz9ayP2Mw6WP1QJ7YhsR",
  "key1": "2VqL9BGWexC1KVxVP4eah3AbeCFaAcfCd8f8kmGuRz3zpVnMUdBVDuZvHHoiqZJsrwhKhyMDfepxx3MASrWETfMc",
  "key2": "HvDWyw3sw3msJFbLu7fRCzsuJQtoZf11xn7avXSZZGZyMkDZjbphHzZw9itPmUawTmqZ1n2j33mdznBQVUpNPhs",
  "key3": "64AHqvAzVn44FwuwB5c3wLk1yFfyaThkwS4tJi2oioZbEX6az7Y48P2DqzvJKS8zoN24bqCrx9eDJQd79hdcB2Pe",
  "key4": "NosJS25nsSMJMVqtbnd4fMxwuS7dp2x4Jneb1Eee5wc6je5nBdbxKYkuZG5jLHVYHR6tD5THE5C6sTSHwzrEDFG",
  "key5": "3Pv1c4ivkoA8ipsQ8ob2Y1csFAG1yTF8qDgT47dF8MdBtqZGgZsPQHo4dTVdQwVRSVuKeABGXGFZsGe8G4uYNfMF",
  "key6": "2KC84Jxps1nVRLhszybtK2Vh6KB6fjbnvxYs6zQpDer6EpHeC1Z9xT6YruB8RtBGwLmdwSst8ZamVhrxK9zRfU5B",
  "key7": "5MggdrbncrAHspxorq7reMsDzJjrQAwCyu9bDC7Q9BbdS4toYze1EGAFYByjuPQACoQaMt7oKyBNcWyBLLvUcQxN",
  "key8": "QZgN2Akz3panWJH4pqqNmNJ5BNZhoLKHN2uNXyt3ZPiDuEU4QU7D1b8dxzrboB2CYWyffeTX94MzaqUSeHxyHcN",
  "key9": "2D4ggwdwzXgYutaMgTrWdWjNq7DurQRhrbhdi1YpgoYxTaTS9jdB3Q21ymqcemQbxGfiBDjJy8BifRYFojsg96bw",
  "key10": "4EUcXXxuNLb7qjoWiELvsCzMcBAGaf97ZWTyya8hyJPFpdWQgBYwEfBjcaxKVam8QKXnkfmeN2FUTcnys566ZMJn",
  "key11": "3QeAFij2AEjbyN5mGCSyHtoHYkJ2BBgMsWQN3Ju2UGdzxXMDB53ZJUzD7TqW4HDH5YmXC95AWRNcMjyPk57UQzKk",
  "key12": "vLPerViZZS3CH7DCVtCvzM3STbhjhfuVBNKzwjAcXg72yrxVwwL93sBor6yikfUpr9EWvNmojG9B9EammoNnsCs",
  "key13": "4NHLfhrqj6qmKxhNh2M7jSHBdy2wxmDS5evK9F1eepQtLKKPfvQfhAS1pizBYp1YKz5ZnMG2pEL7aHLdG5U5eY8",
  "key14": "5sBSRyJqGY6ALxwoW141UvVNZzFUXBKjxW72CSJbBwKTA9LuqHofYj3ix9KyWeznkAJ2zDbA6kHG9ocpiZaL3wZW",
  "key15": "2Sk6EfPGRzn3csGmB627NFfhn1BUNQUXqvnDPZPC7vtTzAzajbonS6KMvmYdVy6S4HQw6TCpYGEA5CPPVN7t7KCs",
  "key16": "4wt8HkASYauLn5ytjsm8wgM4Q5pqdeRBnHJAxQKTTckgee3fHpS8Sx8rQZGtgstZ39dp6j9aafuwEKDKXWLKJNex",
  "key17": "BZBcuj5FdaAXtHYUeEqpwPyoBjGuWwudEfLzm2To44HhWWPFmzAdnAeUgLCzfiKBqVHAy7s4FvEeab8yUwupomE",
  "key18": "4aSNm4P2uBKw5gaXiSVd64vaLZpWeMNdYpRxmMc1tpx56xcH8VmG4rYY19NAUMiHXoWHAKGJ6bLWCzsfxkbuaug9",
  "key19": "2fcrm8EdgYPpRqNnZDWmZ9XkELuA2TZbZuXc8RFYvzSmHMZTQw8JEBFv8HUdvUJcReQgGxUcdNfe1eVqtBSsKHLS",
  "key20": "3dnRaVHqYiSQWfojnT4eTnK7FZMsgiiiqc56Bw2Y7CULGTpG31sdJ9C8DNf1hzTT46Z1znuVhLbLkbYbd1UFHA5B",
  "key21": "3tBf4f4pVKMsRezfLJkfksakbH5aAypwRf46S1ZokfW1UxmokrRYSvLFxBm6ovXZ1bVFPKCrtXuNSyUujnUtVdqE",
  "key22": "3Gf6LuiytZYnregXeHzbEAQXckpNQ2Ro4ooEm2xSy7yRvqaqmbq55Js8PHzdFMqKsgzNhdz5kMT4Wqwv3LJ9Yvz8",
  "key23": "ZXQ6mLEsc8DyxfUV4iayC2PNvGBS9x4HodhCDdmMJP9vT41w51DTDUV5ZGw7jxVag8Q3izGdZGaSFMqDHwfsJP2",
  "key24": "2QC1w7AAspFZfc6o8fQPxEW87eSPNJEuR9vHqfcTrHk3fVMaj1oWKdB4erMr2LWF7ZmdYLNCCuuxXHg7gUKMbxNB",
  "key25": "2Ssi88V9T5gJPQcpYQU9E2BxeVcpU1w66MLrH7ndU1NY73NvEkEaNcfk9QRERGmMEM5zzjGehqJ3MsP9A8EKoX6Z",
  "key26": "2QFUyokwQav9ZsN1knWCjzRzJLZch1TFw6FYhzgifCmCEavZGt7RA5bSUbHBzahNW4kB5SetDAwoVz6xj5nxU3zk",
  "key27": "9omcpX5Vx5dqcwtwD31Try2BydwywWHK1zmBZaTDqKrfEN4jLaAFuUt3HhiGAPM8u7NBjpQELWbBDmcCeUoccvc",
  "key28": "2JVWkrECmnHHxaisyjocj1Qbr4PL1QLbnxvZBVR5pqsttcrXHyrqsQd8avNoLB4c5hSWKJsZxmQyvVVbg7nAyYrx",
  "key29": "5niVajZMpWdgBWETLJwbCpSyEtvpbRMzC8LsfkaSqozQz8DZL6Yw5CPBs1rBBpHitYtKKSkWz2HLHPxNAs4BmwXy",
  "key30": "478RVqj2mobg1BuFMBDdinNbLKnvDK6X4uqb8PTSH7WW49tc1QsKJxfnMvxZgsZrEGwLhMoFqDNr6DEJm8ZjbnDf",
  "key31": "4EpACErLCV5C2GEEKq7NynMW4MxcfWqLGNecpPG7UJnvtfeCboTKztyvhreLWGrS5VRsw5jMAyvfAf5wdbya6Ubg",
  "key32": "5w8zPx1NxxBRX9dbSfLM3EEbzYR3Jgk1FWNkH9sRyKRGzpqDpi62uv4UKdKFNVfnbsrQsGPSf8bJ3niKwLgiQF5x",
  "key33": "2GDxWjK8MpyZora3wob2Xcm97VwnJTX9ZmTeBvNfXSuVHjahtf27RjayB7dE4Nd9ZUSHteixgNxFNnT6BzrvgAMB",
  "key34": "RSUGsifNv4aJPE9KWeKwr1oyizPQkPVsVDTEJt2eyBHgQWZk3BKwpDo5HDfe5RHtpzNAZuG9CiDxv6mAUNLXGSY",
  "key35": "3uQywC2RzAX1QPWj3svUTzhvdURmcCR2qKSETgJ4ubr5c3ddePiKxjesyGCSh1NEfkgr9shjZVxvBkE61ieWwKLu",
  "key36": "5vHPnNg1BUqD8oCgqGgiCASFZ8CjNVrHTk1TWFQeTZch7ZwyFLp8fs3Sz5JHFbt2SL2fKTEn47nQ3ZwzefV72xLZ",
  "key37": "3ZvbTh4a7Y73NANx8zFKwLbzhaHiNg54w7B9CYUonHi9qYxtYRAjR5VzQBpaRsVcRbH4nMnmL1mS9JrReoLEkrrh"
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

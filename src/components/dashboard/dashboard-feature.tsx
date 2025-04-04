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
    "SUTv3dCcPhK3VFU42cuiix5BfnbQDq2wx33j3fo1g9Mn3pun7rg6ixDJ7uHh5719Hhn6gzd9FEXkesk6hqE7yzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWmsEqjZpURTmSfD6tUGvoqhqkGM46WSM5RaRoZMMn7oKCa7gLD5RqLjM3dfjPzARHDJFywfcpMvyDC4Xavqheo",
  "key1": "556oExJ6EdM2qansFDczhJJuRNBn6iepAYCqNcdrGRh4HNB2z4du3mi28XXPS7HfMUp5J2PicWhCXgZCgSqUuweN",
  "key2": "2Y8ckJaZ8Z15mFBp77VoosHufdUDB8y32Eb56SZv2ZY4YJUZ3KKASSjPZeQaoVhELAJr4zvEHduiFQhkhb8XMiV5",
  "key3": "5CKZfi7tq3n2AkToERdNWLbFhWywvU7MQNJ9Dbeh5hrfFS561tFfyVmSJXVmshMtgmJHG6JBSc9ZnKb7S6gLNvF7",
  "key4": "33L1NmVAy1pFvvKS7aKt6HfW5ax7BrKj2Aybhk2BBoSpMtrCFpCntTZxZWYffKkV7ZZ7RyUZRKeCGMd3SU5jSmg8",
  "key5": "4X8JmngzqwuWFZYmd41KyKmh2nx85gHjCQwjUC2jPhHAhQpFw1Af8KmqHsazcgLk45GSmgrgf7C4VUy1ZPPYPDjJ",
  "key6": "3rBEaivmeReCYMtdao3E7gtVvK7sAoWiY7Q949FpDVaP9XDmyWVXagHsPB6YcnFX5ZzTjKMKNnfUM1QrLTHY7gh",
  "key7": "3ixF1a1LQDsbJbAW9QvWGwPoxzJnaQJapVDyrM32iEnwDURakSnfcxPQjbf4MXXrxKyTTBTHekyMisYZLeYSswMR",
  "key8": "2Gm57GhAz7JrsYfNnBsTc9s3pU9XhG4p5p965wGc5RycoAZexy8zD7nq7c57Ejrv6ejyvFkEyDsY8HvjgxXRwLZw",
  "key9": "5QhpDCrE3AvA9UWxPLz2G1vMU2LyNiq5ZPRyarwHDP2Zn6Vj8gwrfwoEVKdDvprfLcoVNsFUMLSWxpN9LKu5cEZh",
  "key10": "4g753cWR8UTmUmSKzCpowQuByyLbexN4TaTr6rq3nH2VuxwDoPMEQkddzJCYfzjT1DSHXcaArP9LfGLns4WET3Y1",
  "key11": "5PpNdBv5Wi9URouwzGLt7UShHLUmiYsPjtWepEJf6SzowzweVCM3YwNMTsZPy1bMHRAoWmcNMNTDExoW3xWurH9V",
  "key12": "3XSRim1YBmDN9ic9PtT1aBHS9Zti6iendHNVy8XSqKHaJg591Y4nf4udvqhqeA8SseGi7E9mq3Pzhjrxk3DhWrv9",
  "key13": "eob89EvE9irEKp2jEFByitFabihVCV7pvjMoHkE3YyeP4pYEJnTRrYkFxJK4eoqkHgve2qiJiaCSx9BvGDtBsxV",
  "key14": "426YNRWippPjFFhmZm7QZLzb2zSY9ZUrcxs5dfHGFJMMp35HY7mctp6ECHfgN8wKFTjkpNB7DXQSsqZGEm2khFdg",
  "key15": "RGEg9Szi2FgK94MxqAcZfTqCsRD3X5KnE5EV3jVTLeUPWg9DZ4KBsyPPvVBfiMoRok7ieaASTzy513FVCKvHC4B",
  "key16": "cfQ9Ni1afbmUGWVoHG5gkGHG8VrDFJNfPKmndvWUzpYmrs5yFRCSQwhW6NhCCGmcK2r2Fo5HK31TtAgmGXTPj4Y",
  "key17": "5sHPEPVjM3pBqBe5SS97t9uH7dpgKbxfL5sWZzCNBgYUoTDP4KwwgVoC9Fz7KJERfMTDYpJ27SNhJHWkXEddYDg2",
  "key18": "4Z542gUgH79QZq9JVtMY3hJwvFTuearKW5XkL7xx5wyb3c7q3x5i63bqwYTiScvsqDyV7BdATSR9fD9Zo5pFnBbT",
  "key19": "4uoZYt4b5afoGuf6ykz9Wnmk6XUpezBNwEB5Ub7E2E3V8CVmF4rjtyv7KXZhKdKCMvmBcyYtpf8Qg2DX6Nq6YT3F",
  "key20": "3VG7DnhFey3haDgHxLS8ezJvnCrEfBzpwhwCRxCf6XafhvktZrv4eTgUsrkkWevopVeiXdVMHxnu37WDyX7VjdJB",
  "key21": "4SBLvDP73aLAbXxgFME6HNNbqS9H4Ym4zbGE37n93U8Jwfhxn6PJ5x2yCMMtD1EYLTdMFxcGXwzvU9HVWdwJ85KN",
  "key22": "4tg9Tz5KkfVCkMXroxg77E6S26vioMv1DVJJxtx9ZC6CxjazFf2f3DuYjTYw45deaK8mZs33drBzFWwdDuhrDJeL",
  "key23": "2paUAztXYXfExWh692APxqQmhUZoGFDMmQY8ktuiAqgsxxYBsoW91eojft6qFs4WXwkXUC152teuG4iyWriB7LFa",
  "key24": "3oJXUiQK7nWRZiThGU5tJGA6kxBU6qWYp9xRTyMdudLHo7bi6FRkAqw5eocxtJoAogCVpCwR6KdxSTjYn5iKxFHn",
  "key25": "4Ut4N9uBctDmQkt1PzYS8q8YQR7w4sVybPjwvVkif36ywAaUuScR4yv3EefKgrTEu7rGc7TBdoF5YGw1RbuuKgNC",
  "key26": "4KtWfusFQMkNJHmwsoHi74qRUcsvTLXiMdeoExWd38ygJfbqBRzveuYkFATusU9FEWJ8cJsJ8gJ8rTg9cTWqexDy",
  "key27": "3FRkpgjsHHESUY3Rzndja3gv9YTpRqzRfivKbeyaUVH8n3fHiR7rsiqQoi65HrfXdD8BiRkBKsHeRYo1UdavAEEv"
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

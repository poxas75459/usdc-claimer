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
    "2eTBQfm3g7uE1DL3ar2jhQzPG2YhNrfVhJdMHM2e5nRgHA65eBgBwnxBJNKwaoUs5qdEShXvuWSLUT6jGkjV8VN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGZ1QSMBDvv35gnSY6eMfX1DZJVmXB1nRsHnaUWWJhy6MMJWURqjRGAShFriAKWErnJcbEw2bLJFzXatSdHxbVn",
  "key1": "2m4FHppej8T4Zj5rHS5ZXXhgPEfjEwEAT7jdRxSv12Bn7cF1bAW2iD6X7YctN6XGdW2tjpttMiYMHYxmFDejR9eJ",
  "key2": "3AWnqD53m4j3cHr3KSsnsp9RxDWnzFQjnFtMb1Pb17jBD6DmEYQ4frGRJ5HnHmH3pd38WAoSNHHqzUhzUN6HyJCP",
  "key3": "252zrSZUwo3MBrSW9W4nqKVAafr3taKf17dSafP4TfX3buLmarYGqY7424m8NrCy9s9HGwLoncTwU7MzThi3k8P6",
  "key4": "p9Qub6kXGSTNAwE6AQTMhnZnxd77KJG7BGhdhNFEcgGB8MHRwamn7HVpy4uCAbzjizPPFhRwDUvRPgVRXtULjmG",
  "key5": "4dBjqPjXrE6hY5v25aLAFCv5SsifXRbBX7W4Y5vYtCHpW5UtBVXkUFEL5UTEA4nrbTaqSNU3G7wudV81ouZtRYDm",
  "key6": "267x237nbtjbYheP89Mw2fy6N9ekfJdpoeeDCL6DZntCHyumEQSPqTS7PNgQ1tdP7NHrUbwrqxNyb2ihgfLufCBu",
  "key7": "2ZQQ48fq1QqcpwZMcjgrdyXzTqXJzA8ADuJmjGh8Zk6kErNZo3XFiivGGpLCvJrXhv7Ur5EzKtpXjTT1pjsawbyP",
  "key8": "5KVsDzES42wj97Mb3Jgttdr3yunwTqsdfFrsSbcDUXWK2bG7h6suzbvsbmbLwAoR7FaoiVh3wQa4mKqSUgGMnA7z",
  "key9": "3wfnx6J4wLrXQUQHYpZSp8CbshgJeUPMmiwuodMQ1LosaQcihdAZHprMLF9ScGSSZ5zZ1f6Eqnak8MspwPai4tBP",
  "key10": "396dHLZFiNHbmGM7F7F4vsfcWfpbrM9SjbH9RCM3bJSLgzNJGtoY1WWU4QcbhvQ89aMZqKRstzghTucLEYuf5PHf",
  "key11": "1io1pMnpo2zbV2Qx6gxJEagwwCGXWSVhLSVigvR26SxAPY62SU5eJ2JLZPkhx8NN8AbWX7zV4eZesipUMjST63V",
  "key12": "3EMedkYdEdrWGr3w4WuTuA18cWyz64cYqGDrLRXWenZr3TVEVt1xn47youBNjURnqP2Exi6BNmiY6yvn5TEnqukL",
  "key13": "3Lb4aSbvdHdNWKvd2rH6XKTGC21VMH4tmMjnrZ86XQHisgVRy6NoKs22yPxUDM7hq4DGK2NiYyeqURkg1kCTZzQw",
  "key14": "5UrAPe6fY3HNJG5eyarAZnCD2htmchv19dhrKWiqJQVUp12xZwfyDakARU2SWsTfui3acb6DRJKqRgDES3yMdEzN",
  "key15": "64yWbZtfwjYFFZXouJoP5TYCzgx3PuXMVed9xzskuKGTYLxHNUnR1gUC4EZM15VcbSbFaSESEb4SxQk7hWLdSxtD",
  "key16": "577eNzF11njUgCWSXyPwownpfMag3tnqB2XPvwrDPmePo2yR1GDVKYi5asGHka1ocrY5zpgWeHM3x5fV5H6jjDF5",
  "key17": "3S6rRZAHNNrNYysdZK7fhHDTpNmXWXjchYBTQVqWLQeyv6DS12mmQ5LTNYAyJiJefWBVqUfAYCsPepd2Wk1aGKfu",
  "key18": "3fScGYcjhksoGQusG6kcM1AERVHHS2Q2h8XMWSQo7XYEhJCsQf89pwMxi1ifuLdBPWbFdTMP4jY9VsLR3D67yTw6",
  "key19": "2cMqWQRAAuRnMfcjYfPuCmma1n6qLorMTivQeKeGPdXNuVm2YUDHNAtdg88ySQbxp3pEcZ4AVs84NUdeAc135orb",
  "key20": "495cNsiKz4W1VCEGqDbG796o1dLeaRLit1EayJAcrNG66uAuX1A7HknRnbqAxHiGWf8g9VJNseZ2KRTuQDXKCCRD",
  "key21": "4frSsQ4GPd1BPYHTqDJZDGXgcSXLHqhMsJCHVHP7GvQSjxMR56AcvjBhYqtCAn8nJGPp5e2MfErKRykp2FjUJgi5",
  "key22": "huwNJF2oCbAnP7GeTsUiiSc6URGBEX1DK4MAYrg2psgtKq3E6YxoWxvAfqVdBwdnS3AQzH3RF7pUabLAvbPHmVm",
  "key23": "326zuvDgap2LRv7hJNh9S3PTbKsbi44pCiQ1AvW5joE3WX1oTWUmzkvvHFzorPJVNTnTtmm2eZun6xdsNHt61mDY",
  "key24": "JjWZoHWUK6fVxVoG2xQSeEMx85ipN5trDqhDL63rBrj2boscv5SnsCtCExEGC4KwRUzegTrjcFs62QMutXDrpTJ",
  "key25": "3E4y5vUzQrEfqEcNdZPMWUJ8r4VwJum2ckLKobjq8buSJoiooPt213RVronwj8JKYLKFj9SQNsJF8AbFcMfHha5b",
  "key26": "Hy4qDk4oiHdUdDMiz3QMMX17XWVJqAsX9EHwB17wNTUnJaEbSxL7YK16evQskuvnf9SUmoyhEr5uMceEvgxFZQq"
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

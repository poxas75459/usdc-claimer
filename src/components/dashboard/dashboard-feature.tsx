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
    "3gy8CqRHdUzKnv6p75DF2jxfnDbUBUY8hiTpcGb1qngjg6tCbCUrhLYN6wLdizp2yUQ1aowWvYwWF4bsdxESCeg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nqinajo2ax1HDYHPpX1cuqZnWfXTyMzRtR2Ui7JHaMcGqdZ41nwAP3VfihHaQ8AZ87GdkDEpMpkVAt5tcMsHLHk",
  "key1": "3acPLBDY1Yk6MLHnHV3GNquuc6UtyiMqr7r1vZJokmcHYZxVaS1t273SdPKXDo393oMN6BeRDqr4yAXxXEiGBkUQ",
  "key2": "2NyFBEKdUhi5fmeZ2oaUybw75H5oqykFeLP7vWzZzeiETrJ2BzWjf5m2vhykf1yuzwUMpzYhctSBHS6wtj7YpoYK",
  "key3": "258G5yCeRzAd9didtuHkti17ySqfe1tzo59adLT5hS2a41tUmoo3Y6TjimvSmbV5joY4aSSBgWox9HfJkeJ5rkar",
  "key4": "3rYJCAwEvKW5ctoctYg463VjDNsP6HaADNEpTFeKvTwLhP9WFwswuYoGp36MfmPMZ7gb1ZoSAyLnGFyjJ1QZM9ux",
  "key5": "4bDxNbT9uETXTjeSgq4Z9tCVTsns8mFV1iyA3TFL2ziaGvYYG1QCD5UZ5i7WV8reVFdVUqe8qEJCE7RPUS5WdaPE",
  "key6": "3PbVhoSWsQN3RLAjjLvbC6uJsmPPxjoaAT9jfxtwQ4i2y8jv8DoFi5t96syNgdW76yBQh5Wj9X6rGE6mEC7NCx86",
  "key7": "3Hd8aoYpyLGe28uhpZousXwTDBqUwVYvxvN38rkX3XuPkcNAHbSmj3oeW88uvZ9fThZHrnEt9zbczVw64LaHDXXR",
  "key8": "4uoHXR566nYhEp8Ckga29N5era7vmPT78kpDMUGvU7EdbdSgNWkWaaKFYMvd69s8KVNbJKThGDeWb1jTkprsKyzd",
  "key9": "3pZF95DU9kwcYGQmx6teALntSdkRgkGZydANJLB3Dc7YakK8vop6UYzELtvyLyAtobxgigAVHcTHBwTpDMj81zAi",
  "key10": "65MvK1DLweZZGLXpbqQyGd8bRfiAHaRrrSzvySCrxwQ8E3HtEBWXmCGeWiCAe6yzXv4bdeG3DX5mJrYjU5PpgLXV",
  "key11": "bi6Z83r8ex3s5nQMqzSbtaQdSQQAkRtxKNf3hKoFy1498FxQ1s7td29qMi6m5shmNCwbvoDVCeTHg4nYoRU3GE5",
  "key12": "3FbGmXDrRFCUnJ8JH7nXBbK1xUHeBd1KLMA69sT8sKM1JCx5TYpag5f2pYaRhnXc1XCBYjs1hopBFC651KJjnEa4",
  "key13": "skpEAZpxM6TUe2yJhNcUpQ36V5Gq8siMR7QJqFxCrpqXtqSmnPBypo3rZDboUT23whsstP9VtN8AFsD59AuwekV",
  "key14": "4iAd9gd8RbXn5NM9Cf5eMTtfJUymM5TfthNLg7PsX79pBzjSnTpGuuArcKMkvR5S9pb6s11HkbUyrcyNfZFBGSEC",
  "key15": "3UmaYN7DoJCxMA9iJqYZez2KzHaC3muc5GKcAAq8Gvdrs3FkZM3MbWL2ceLTspHGb4sKphY9bexT3wothepBTUBB",
  "key16": "3rXfnVVFfhf6NfVnSCVWbVdyLKxoep2Y26Hv2qCmTngLtH4FtiGAvmgzZkZCkikiVVTxUc5Y49MHZHxsRKJrevhf",
  "key17": "4H2JW2JXvNdoSUkJobP71jsog4b5SLSi4Lz6UdveM5bt7Q2YDCa5xGLTqPJLMgzPiQUNWbXEpHy8cfv9d4ns711V",
  "key18": "3tT263foWhfkBC45CHV4d9gw9K2Djsf4Enio5zQk8MbEkXvTCTJtAufNjqXw1yvJfwjzNDfHdLvEWT82VS1aTmxC",
  "key19": "5VA6V7f2Mc1g4gru14LaWEiGCSUz4zsK2pJca9mEi4qseb8qoTS9XF2wxg7YVMKHCq7E7WSrhPvho83mwdrWFouJ",
  "key20": "49CXnuBB4DoofH4aMXDWSKRRPncty7on5vCVtvw5q9H326fhBaiAWis2abPbrb17Rzn7WThe9XwTpFEdeczCZ1CF",
  "key21": "31wJ5AkHDf74zSho8D7W7HL9uSnDbURjLw6st8AiSDSt6qxvUmWeuBGLrit85kbzKzahqcSTE4H1uCc1jzKTuTUf",
  "key22": "3FPX4UAViNuGzT6GgmQWsCJJ2BfgkjMaHHuL2AgDjgg6azopS7JrqsJcFHh886wuoyMJ3SQ8Jho5KYYpwAPA4Qru",
  "key23": "4BCfnTWmZAk95eBkrn4pngZCCgZUPXfk6W3BXwW5ETm1XPNtsS4Dh26xw6u8cebizrtZTP2Y3aw4PqQkfvSmQgTp",
  "key24": "5TbD9S6v86JCcNCVamkQW9YgJk7DcGBpoTESNpMSpDRmH6HNWkqu2ga8f6b8kcZtewSMqy6ARsd5ZBcUaMrXXKUP",
  "key25": "4L48g65K2WQBoPX5MAxrVCjiwJbL2ni9euEVoHDxibAKrwtLqu6fNjR9836MhggvxnvMsyf6x7uaoXVRKQHD8ocx",
  "key26": "2PALUt2nibWRgqn5oyJYvcc49wN5Fe4WRsJ23eRnHYvz5TR1oFBZPwk4i7psH8wKRRyvjM1XLMrDHtEfNdN8YZ3m"
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

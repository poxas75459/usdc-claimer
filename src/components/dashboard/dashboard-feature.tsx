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
    "44eekE9M5Rh1h2Nh2WkzgAjZrhfKmtbNUNRW518iRGSCeqguuonVRS2rzx3G3MCRAEoqi1XkeaoU6iZ9WBABW2h9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgsXX8BKJTWCK9zVsFavw3Zfk9ojwoZXLEKzoZwghuNXePWyuUJR1gaFECNCXvg4DdDBaxPKxiHe9XjW3qQBp2y",
  "key1": "2XyjhRGxS1v753idF92a2kZb7LBshw6xRFZo28KZPLmmXyjXoqkFzLo3vSYyE4RCx25EdZg3UNyebKUJkyYDn4VN",
  "key2": "LLv84cZTv8LSDQ31eyPp6geMEo5bWMTy1CeCcgiWp4LAu6jqcF1mgwzwDaFATPTwSiV6xFRGeVwqoTT1x7EA9t1",
  "key3": "KtcGPjoFBJzoHKC8fD1aUmaSg1YDHUSHLf5LZGP8KSLZ52Evks6t37f3ATFB2FwjijEzHME1EpU2wzEhcKLuwV1",
  "key4": "39VuoSVbpXuMLS6zW4AwbmxK19hL4jwAfLf4h2rYPVUPCb4crzjKXGaURUDaqRbWf2pSfRwSE7QsxL7SP7kMDzzm",
  "key5": "5YJB1WKyppAVN1yqopieXwkyCvJ1kLcNuGSa119aHK8TQtrTapnm4SDuNWCpGv5dABJtGQcgqdV5Bm2LxrJD6BAn",
  "key6": "3E4e19y9pAPZrvDWv9Qi8E4b4MdSiGBAArRN79DnUo8EfbDfHZJnhYzPBrA2NwBtUmcjHZLkPLbp8PfXqPduD48a",
  "key7": "3SYjBR3gg7LzQS9DuB7tRMHK1xomb9Bj9mDRv3WiaU5WVYsLhRxSPC1WBmqbkeYpScJ1Ksdy1LXs2LZMDGE7vEru",
  "key8": "3Rrm7smmi2HRUu2PgMas86TEm99ZZ4Ddwmrkt6B48mQtAiDJbBPCAzkMaS3yZ6BvmCTUYdNYxNGyFWZxjTWje4tQ",
  "key9": "5gnygHsPtLJMGbQqLHvU6vE59cgg9PsDgs5Nr9PyriFY3kBnTcG1eQ6VM4LAwBfLjcZhecZAaX7AysQbnG89xxmM",
  "key10": "5dMpCv7DmUeW3wWsa2zHiuiCxCTkc7rztRs6DdpKbAVPHmYpBqcENMczsdUApXo8EC72F86wk7twtF5qPXZ2AXTy",
  "key11": "3xHRzGSLG2bGgDgLxBFzTmwMLPZx9RUswGn4grH1yhRYBRsNddhVc2CxdeXhhKVkoKwRax9aXFWTN16eTNj4nHjE",
  "key12": "4Pb8emxrkFnggvgf46b1HphaNCGZWspopKnF3CtPTAbovAatscDg8NYJkbE32FkSLA6qN18QghSTdwZSA5sPxMo9",
  "key13": "Rp2JPLdGnbkHiRmBgyuFHNoYETGobtj3gLRQF8VhSxhDFDSnCStTnshFR1nFsJyvN3LyCjgXn7DHzCowMgqJVCf",
  "key14": "4RGZNpxEcHRAmv814JBb5fA7sEyiAmruV9L7yw4x2LxtKvE6o81uFGF2bmjynHvZuNcmqJb8cxqX6vekLYVLLFNs",
  "key15": "4LyMKfUU7L9NQnkAfY2qfMUivgVqHU5uN1nMEygpo25Xw7FuXBKqGyjQ7SRzuBWuHoikzMjzRBMpHtMxN7S2geYz",
  "key16": "4L2g2BfrvwHNVuhHxsaWkWABzi1umitKnqPu5UL36bbyruP4gQSXPfCuBTy1EjqKPhGr595oS8xSCfmYohcPXNjd",
  "key17": "4fGZi91PvSCpa4GoZjPsnEutoGrXWS6BbmKKNGDE6CmCJknzGeqisqBaErg1r9JobiLf7cyXg8mjd6ZJHqVwHEFV",
  "key18": "3JCWZ7LxQ98YQnyoMiJapgbATHN275t4JQjzYLbYC3BZzMvARdDpEpu5q9jr5ZfybsGXwiXyFkuDKSzY7f3xUZPb",
  "key19": "3AhYnanuTWcn2maMXTaQdM1ErDKcKt3mQKBezorsLriifgHCsyt2JtED54dmMc59RuvtJzDQYuRKSCRdTYowPa2x",
  "key20": "58V59BfotarpzcmWwY8Gmb883AnZERjr8uGzcJcP2neRCv1g1LY1Fusua4zDUWoK8a6SwrzAkf6sThg6MK7ydQDg",
  "key21": "48Riiy6VXNJHm8u88u4tLkRD3BkV1aH7A7hTwDCRKjUJ9QTziYxod9VacxCQMfUzYV4PgZFtzAQtD79VEZYnoFP8",
  "key22": "4oLRcfu3L7tzaXfgoHz8ZuPnpbhx3fXvotjtto67cvABHEqChnn6cfvWX9xA2bUjvXaaGkRQrQizoVSVeN9Mjqxo",
  "key23": "3YvpC4bT95Zsq29HrDrmAiyorLHeCKBvnYGM9bvUcQHN8PJ6JUHuuN1Gs1rsZ23fCBrr19qywwLo8MMMFah4q526",
  "key24": "5a5PvzzBcMxW4TzvDU7sZN32LZTvvdRTBmaCoiSqeyL9teD4hXNFLDfp1dvyb1mH8YLovELDsEhJRzQu4n7jpkTR"
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

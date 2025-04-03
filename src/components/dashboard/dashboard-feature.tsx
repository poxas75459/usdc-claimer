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
    "5U3suviZztUVMDwwWJcMZpsGrBGyjp2CvaWRT6YfkaYoRqHFtnLvVtyTzATS4KDF2Zn436A829f9b51AtqHaiJuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfFKRrooPTwMUVhKhNthpvK75fMWktNP468yQ141RYpHJtS1KcmZJR15kjR74EXJ9A5iE9ffBJBvEnuWxNApBpv",
  "key1": "3rrHaoqqkhYzjn9x2VgcBdNq2dXsVZXasHcgzy4s5DaBveMsPSWXCV6xnCZMHdsQAp4RY9qiVp6nDmykrnw4YApZ",
  "key2": "48M6QxjRe3nouNgyC2N6QFYWGCZcdaspExeRfXZXFhSN8ANGtUnGDeptEL5bmFhMxEH1AdSraDMcQRsRAqxHhSaQ",
  "key3": "hMuYApXR8t1fXfZDargRnwf3cRWSRnW2q25PX9nmZmtxp7wmxqPMssNTuLj8JNzEj2KCYSJVbNfJy18kSN8Pxn1",
  "key4": "4k2aC7ecvqRkCctNH6wvn7knJV6NS8EAutQRukBh72844uNENkrmCseWQtPrwQuLURLhNhMz39KvPv7WYqVeaa1q",
  "key5": "3xXHvAMuhvVktM1qqnnQ9DSPpQtgazibJC5Q93xPzUsbi7Xkx1PhtFgKDwv2pDTbm6AyMeTgrzQURhMuCpspPxLB",
  "key6": "4Ve4Ua5n7xjUto2xp7ykUnUrQt2NoKPWW1hn7BnGSnnYjdHdXeubMxaQ81mMknw83DS28vTfA6JKr78s5DgZpgns",
  "key7": "uxRqMYfd6kvUDLv2vhm2SQ8MSNAj6b7SznDPwLKe5LvnQWxx5hhM9fk8KWMhVKbfLjmNSryi6H9NLjzwd7WenRb",
  "key8": "4BcobJMzBwZCPo3zM7F8SfkrndtePU77DNevufHSdRDKyopFomWPjyh8VA9sS9jMEDYVUBbwRmwPXk6Zu6UWZFSd",
  "key9": "3Cc62H85LrtJi7g2kxRRyryWs4Qf7ZniQFyCMfrejgzgUNnRQWpFVR4ZuztEnXCpjTLHry7X7rBPr1gTMwEEJmrQ",
  "key10": "2UC9K6i8aGrbQ44w5B83wNXfhS8ZSjpbZhRMmREZvDLnkYfm9vMT2XJS4yrojKPjJaFU74RdsH5vECEK83UL1BBM",
  "key11": "4L8yn55X5f65kMzUqAgThaatkz5wDoQWSpRtVAHedcttPgXm2SZPcwxyGq4zFpADeVEXKbV9C7551wDmoJzFvrxW",
  "key12": "8SQR2yEAjoG2xQMXRHZ3MgSCgx7co5WeJGS3o9d3gtoKpXsvKAuVBKE3bFCQM81MMxvpTMSN5MDKmHbhgqEqCkT",
  "key13": "RKMc82wjfA2v8GXefHaWHL7w6ehuozh9tc4k1s4fTyAGWbMhbw2K6wrBKattAi59t3FBZ3Grdzbagv4EQEqGhze",
  "key14": "X5kUCJCWo3pKYju5uWpBmmDnjHZgXDBfpov7KoStZpL3K4XZ3Qgh8gRJ6PcKLFDFNFY8zuy39yepYTUw1TAT6yM",
  "key15": "93FPQgERZ3y9JWoRFmQsu4jsurMxGoYRcD4ZNEKynYbaGE4qtAfPZm7LAeJ5BAwN4Ji2DmLxk3oD5ab2QCAPtgA",
  "key16": "3sw1LHiMEjKCrcAQYmmk4vLMBqN1gGZsTGL7mb9Fc2ksPrka1ipCdHgt3qpW5cNepATxjZ1E5tBq2zLQv7a4Xd7p",
  "key17": "4HiE44G2bHzZBWe71HLiMxuUzt1BbBBB9arXHPhmJnkkvzburs2RReLZdyuRUThwrCqoLiK843dLSQsvjsbSDYvg",
  "key18": "WrKF9ha6VCHu72RPDzqjr6ATNp4mPtWFxhdMYRM7pQdLN1pL22AcWi4PdzJZ5sd5uEju2QWooMfN8WC2Wkt36aV",
  "key19": "2wkRF8XPpQJv68SVAcimMN5ixRufwTcRmJad1gicP4ydyvY6CBiNokuqBQNGCXWEM7dTSAZPnJpSqCVG7nu11du7",
  "key20": "2VtrKdrbRxP16HMmGxXTBjH3fJtxzTncxTmEmSwazXZNgRWyMndxZq3hZMRMy6oSobyc9v94HxUoZDww78tSYxdj",
  "key21": "2KQZgYSexgAvK5sziYQQP5HTZh3n8KZZKQePtUKHQj9KaShSKxQDsweTqNZeN9VnTxdvUHJr9BGNJA9ZaXTWjNcM",
  "key22": "FAKMeBPFhzJDShEMu4gaVk8L4PPnpB5wWZJt5KXuAdwa2SctZqTbGzTHSExtBwQx1RdtQzCay65mqufw8KHodZd",
  "key23": "3QxxZ2aNg3o2bd5LzSukGL4Empu8bXgbYQoTmVr7iYnhgE3ypdLwYctTgzPWXBojZTS1maBUffgq2E7s1p5zyndA",
  "key24": "2Lt7UVFGjrdwhGFMS1moKfPgZrzCUvqx7ZHyvzwR7XeJZzBzPPkAdDopXmGkDQcQHi7BJNP5fDg7G7KUYb1f3KGT",
  "key25": "4JcoGxyZrU9LqWAsacXMfTgDd8RkdQFrEBnEpeo3koGtRhu2RvbqxbgQWys7aYJ6QwCTaqe7WbkLhN3P7ZwRY9mx",
  "key26": "j9QgCR3gr3Ai74cfcUXEvo6UMm3mbDRukkYbxYK8k1Zt6iVMtRKkjDn7GpKWLAZ7YgPK5U2t7xJYqzPWkE85YjH",
  "key27": "21rw96TQGSBr5AJFJongwid9exB56mCgPcqHb265meL1hg9LoJqGndMzf6ojLa2wa42jqfDEDm6MmDAtVSoBwENc",
  "key28": "5sigM4RaWe3jzcA3XdyPg8hLMVA7giwHynnwUMk9AuREwgq8vsGigN9kZbDgNJHc1BRQ9cf2bUiEZtxtanRr8oAt",
  "key29": "5eCWSURqtoCAofXzc9G3NsTLoB5Y7fMzMy2iJzfbqVpRK5h7kw4r3FnxJcvJMVo9z7XPFDr6hsXeL2Z1wZUNWdYJ",
  "key30": "5F51utMGvR4V7aqVqX8b7Pz1TRePPnLszyoTENFZbmGtjriWVGB3kYcWmcKU42iMYmhE8uqBGVD2pjzFjrZ8ikAr",
  "key31": "5DEQRbqzwWz44nJNidkriF7x9iy1wR8iSXUnwggdJF4Xhp5uYKYUxgKktmozfcHpxqyvPMvv2QEzzK2LhjCU3xq4"
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

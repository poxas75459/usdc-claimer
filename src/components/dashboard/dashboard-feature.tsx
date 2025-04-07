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
    "f452VqMbNkjoHThLY8VQnHhazyckvRCoLYDnwszED83AJfrVjc55jNem833NU8wA9x4bqtoyFLgamfVUc6ZvSZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2xnEZktvsffMMpXA2LLtTt5HvvN8iCxmE41A1ymnf2XQtQ8uvkUrtySRDPurzXYSjjVR4Ui4DTtKKFmAJYmw2z",
  "key1": "4naYnjKgEiQpfEmTssXruiBrc2fdq5Fme89reGjFf7La6g1SnBcxhZA5YERJEc4kdST7aHzwhK7bnMkH1qEdJxFK",
  "key2": "2SQDYSo6Mge7DfraTXMLzey6L1ZL3NeJg2RJbEDk6mS8GAmY9JYXC9NcmjKZ9W4UteZ2WnHrmCkbZWLCgPgnQ6gP",
  "key3": "2yH9kMK5xpJN6s1RqWuoUKrq2SUnfX9RnRdAmVRPcaXv2PAFiTsAkbT1vWP8ZysLcA1Lq3mNbk93VkMRwGhA3frB",
  "key4": "2aQo6W99iuz7E8t2jSeuLeiHk6jw73TVbffSYdTrTJnBtxaa55YwgrJ2oJeGVw1DX8Tiu12tc2xXSS1bWvqavinv",
  "key5": "4aJpMPXoByaBjmMSLxbAyv3WYzDfmkJRBs9LTMbvhYT6RDzzgEBurEYZWtGdDHEkiBuT2dQbdvtKVffnfT5BzLF3",
  "key6": "4pXBpdSM6pCJfyqJyrFnrgbS2GFnNmhYcnqrg6At6YpNqjaaxUusfMYpV6TPYgZSGZngAyLUZsCzd9aHjDXygD5B",
  "key7": "3rzCFLFEeiZQtA6D9LzLK1wbgrCNeEqpYaGQXesy4j3Lo6pAAqd5ntpJRMcF1VRiSQBsrqzHtrk4VBawvApk9Vd8",
  "key8": "66NLcVz4iJdtrki75KQfsivPmt3nir56Aqry1BHghbbJZZMqeZuGuf2WAVZxNK3izyFxgX1Q25UYy7Cjd6AKeoFG",
  "key9": "5ZWCf5iepZARff91D1xi7sN73ttU1Z8ZJFWo4YZMZXib696bUD162dR5bdZGPayp961h19rkH6RBwCzkPgFU6mDN",
  "key10": "3vWDafWp1gcGA6GbsmRF8cLXZeeh22x4VNqkwukyLMNve3CVnRnzzdjYtiebQBw8pP8qcucm5qEArF6aQDVjcotm",
  "key11": "APaBf4VhWcdDKr6rGnQR33f1FYXJRMZ8ezJbMJXbFdhRcSUXKQ4jfucHC8hqX65gas9LSswHyx2sG6b8TxJeFAx",
  "key12": "5ryvtbd3uDYW4uwcNvY95p3NpX9BASmMhYUr5dCh8619RDuPAZ6XUjJyiA8UtGhz8Bj2rRY3X1PyLzU2BZKxFj5s",
  "key13": "3HdMxmmXgD4oTgBGk3T9xaQnFMhgMhiA6FEDt9XwWiFVPgQ5SaGceWaMf8SzntaySdmunjQHqhwS1kYEBXrRgJjw",
  "key14": "5c9AUHA3VmCTMBb2iBXV3E5U8feLDarC3b839wrSQEXjkjdwSVsjA6diJsyjX5S3pcERQXK5acpXrwLZ2QP9JkGF",
  "key15": "EQfT9jeLnq6rx1DnYha49iYTMW1ztr5eY6hfFimfXBUnmGMXfiUeZU1i5n3rW9VXkkMGkC4wPgB65wGq4d2kVNx",
  "key16": "4dp4WqnXqLYyyQoAeiiNrzukH1sgQ6onMB1p7funcXWiLV3YDTdMTN7MP5gqHRFb4iZLEbBGGjB5YUEN25CX2sWp",
  "key17": "4FtUdhKD1fPxTtPttMGaonP7Ak4Caez3XUjZwUGvjh9hUWgCxySaBj9iQZXQ51KooBNtTb8aptuCy8NEWbXu7FRt",
  "key18": "4vqAyWLTfdeHtvcS4KR3eQjWHWZRX5H94DHDk9qfS7TuUSpoweH1TCsJesZRdyQdhjXctNpBLGF1rXFCNRPjHrzB",
  "key19": "2DZPBS6nPznFCRJHttDvXFZEvwXEczQquyjfbEJ2mHeSnWr1E15KNgnyVasZYd45VTF6pJXp6ntnUPNBCUZ4rRGb",
  "key20": "4dsF5PvcsUq2asU7YzCTwtdiDKya3zBBjvzg7mvUWy2YSiqfwVAzFWcTLXdHtjj6P4wKEmxBBPTpuxei929sQiea",
  "key21": "3PqHKjxQocTCozYyyPzvgVNpeTrJtNBD4EUYJNkRLwzgTiLK7nWEpn2pJSnW6NqnTovGjQndLzF58FtXwVmCNGgc",
  "key22": "ViSth23s9cAb3hzwChYcdK8rvWY2msXWNusSPpbPga5Q4bXKDYDX5nZbFfpjggnkG88qvRWzYatHmJsq8RoAX5q",
  "key23": "4KPVrUKPdaw23evqrevsCrVxbJzR2jXzdxv6cKnBfuP8kG1dtficYV2AccFn3Feu4thCgW3nYnKaDaN1Lg16pyVj",
  "key24": "3JX3RDGAEszSa8B2GsjfgRqDNuQpnrqCWnKmYxx1KrF2rcUfys2DAFWZcYgTZeg3mty1jH3sHCw1fCm3XnWoAkn3",
  "key25": "2qNPnT7nDgS3nouiefnapbHBVfy7vdK9au4Je2Qr2BUrMfXnpEx2e2EzKBX1WXBSJTn3X23XqksLWdcdvnjd3Qzr",
  "key26": "5ystsQPFeNHtCGQiYhEGomMELHfkG6S6f4wwWPr38b4cUBd9RmfzPaQKdr7uDoUgkRj86G1RiEXEX5yiHKB8H7PQ",
  "key27": "5zawE3c8Vv9dPsjcUVD3BKWhw2hYqvZZwid8aw3w4h1roTxgggMwbBZAQVq2E6YRRoc1pajxpCtCAriXR7vTp51",
  "key28": "2jsCM1kJbpiqJvNNME1zSdisHvRR6Hb7HzxSYp6dYVFvuzE9EJyrxfkDhd7gcs3tB7nz35gQzMTJnEd7RqwV1qqY",
  "key29": "5LRiXGvTRsCA37wgtYCrNcN1hFgFvBwYuiqzC4AakihXkvPxdmFcpjmq7uEqqsJDkes7WjZxDbpVLtKP8j9L9MxC",
  "key30": "5A5bQf9tC4FoiCzJwjCyUTXfeVycwPAicyKSuSpaJPz2VAyCEPqZvCDxjoePkm7ZvBE9AcvfJc2yf8cxf8gDVm86",
  "key31": "486yDnphJ2RgVqXrg3UGr7R1d6zmrpXJnwWQSmMeZGLoLCGUjHp7DjXZP3wHPmecSStGQCxxXLvw2LPYPJpV1LQm"
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

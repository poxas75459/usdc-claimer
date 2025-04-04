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
    "4ABThUy1KdDpJ9ZmciLJscS61b3XjWTQU6CwGwNUynwcCGQE6rbDiJMbbwyJZHavR4JfKDyJsBbxXXFoXnog3BxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TkMx1Sf9Wu5ZFqX3ebL9uGvBHCa8Yjk6qus6SG9rBjGrRrBLrtUSvaihb1DqkVM8hFocCUwYNcSNXQ6nY9QyQng",
  "key1": "HozEMU58R9FCAfTZn8duXCDGcqbizzYQtJYFquhMPmrAWNG9zeNzM1vEyBPSxyhvSLL3fE74cLyyAzXqF49QhYB",
  "key2": "2L4G75CbPrE6p1tbNZKfVYLkwozxwFtmqBFcg95DjycqipG1pTSkeJU2B7oUepRTKfRFCBWp79zK7b8V6PxFViMw",
  "key3": "4p5Ljgt6hUGzKsSaqkndUMUJdp7btPkSmZ8cZAGWnuPy6wBjzZGeEUu7aQff3YxMa2C5E2baTGUyhcwnvc5wPEBD",
  "key4": "5TcwT9newRUnXrKm1H95FBdJahtguQEPy8LzRu2E7BHErpsCsQ4mE2hAAKfK6uYmNHx6aQsjVLX5yBXujBYmdjMd",
  "key5": "2w6VdecqhSx5KUpkpVduwvGu5dP8PpKDNZgsfVLnZUr9tCSxr4voARjqEhRzihJYVbNA16MJxd1QCLE9Mw8KLevq",
  "key6": "2L12xceGzjy3nkxbbrLk5avw7w2JgfWRDUCAtuogFcZbc4KwW4hnfWaNweJikfvXKKVGWuw8fsCXPn6JgzVKBy8p",
  "key7": "2uphxNBvnFnxrtUggDCXokRq11eKvNHFVFhFF1DPvk78HaLTCxQb6NXFo5mjfGzxKDnaYQ6uDYy2np7pFkM4aw18",
  "key8": "3WqUA44RZWWSRw74cYt7cYFKHGmeRMrT2JNKY9Uk2PTWjGJuQffxxitVmVSxsQ1Acdk2iiNVWrCyfcXBwhvTxBFd",
  "key9": "JwCRxDv3HSxy4sicQ5hDqbEAwaYMuXeHuff9ZmobnNDiiYSbUgsYNhXKDidytacopzbfCx4pFeysgJYpwRZnt3Y",
  "key10": "3gRMCpHEbwWzT7KBZGDcf1PsWhLja2PqF4uwgHujLPoyPgnHFvVuSqyybn15RRHte9N2Fw5zcP7jWK5TGPNrZvHm",
  "key11": "5j9aTzJDxsCHYHCDae4x6oV3ogTRr71BmUrCbDeuuv4MkWPRHefPBBbTrgWsFLUCJEFLR8YAUs3HxkoufbXdeGAA",
  "key12": "2zY46b8MskAe2qdC1sB6nLiwbJyRHHWDj9UgM7kYc2aAGT5AZxUK5sH3eVWQPtcHB8bDnHYwiFR2B3C7ASneviDk",
  "key13": "Koq4GSkvGtFmSv3Ym1T5GpsqEoGhhouACwtaYYbmxNV1zbPi5itNwnFzqnPPjaNMuivXH6ZMrKmoqriroGXJyMA",
  "key14": "6H5dPzK8oywBGgUfyoSN71mztPyKoY69XRF1hmYGf3ZdKpzXeD4vZGpk5RUYPjDTAErfCoMGM3t66rQrFtbYBnX",
  "key15": "hcSouYKyYQ1Xx5YaXkP1pGnEfSYAifg7M1qLXKw6rH7io9HyDY9nbWRoNVqdnAVZzhmJ4pUBMemgg17QQxfzbJj",
  "key16": "3pV2qLuWCpXPqbgQD8rjkjSdcfmAq2htB2fwoBUE3uUVq7Wpxbpi1gVtg3BGvRBHpduxJ8mMkno7AGHfBmyLaGLE",
  "key17": "4Wz7Yt7iuBr93UKcukfkXZ89DqfMeeRbDRDVCusziAifhtBE8t8LR7uKvzrSCsNVrSopiyUkEMD4b5YvxTiNrgFm",
  "key18": "5g5JUwpFWpK8hCxWx6Lrw2k1bVNWyaeqhrWZD4dzjFMTtZeQe1r4taXLNfc8Qr43bgZi3UfRmHTRtN5KeznNsrNg",
  "key19": "3bTk9VDNia3LeSboWRCKSuRY42c9ehvT73ub8DPoMV9NByZNSqnJVv1yZ1dMyHqSB26y2VfPbxCtfnBBdaQef7YY",
  "key20": "3r2p21Dkc8b55KvmgEPdhpFWi4Yr5ddCDxnJSiEGFJvyjuFM9bdLoJ2cvzgskRTvD1T9mH8hd944xU1W4isGmD35",
  "key21": "5ze5pSVRCWtqYdoZu8oPAPgrRTCQuAJGhe65DFwSjPSnycZJahavK46gzFttYJAgtXpem15Wh7MjhLWi6o6ojMD2",
  "key22": "UNx5g126oY8As4i3d6Z2ZDiM1jhgG1SnQKNTGQeffeJsQfHiewgU1PS7bPkDjy65hEYJQFkUUGEZDE6zu6wpbPP",
  "key23": "56xtVLaZNRSJyp2PnZQfdz3hzWvqrsoWN29u7iYSsaCgrfoLZjbBDs65M65C3fXLyAQpXwJb9Y7UAqhZbFFDd9BW",
  "key24": "5uq2NYvaPD5XSQkZHg37AKvk2XJP8TEkaJ8zR9CX8EeXgJAEGA1nnkV2kXmQCS9t2g1jj2Gb6yQc1NCYeSTAGLvK",
  "key25": "2bDQxAU7SZpxwgkGb5oWiXgYq6w8Ns5tAoELnM9K6mv4VsjDi3LR6c9HxHsRBoCQehCveKD8BQqFpZqTmWufgrn9",
  "key26": "tzdUBXoQHr6QK46TGMc5ySiBJN4nYqnFDie6eVmqpypLvQ19ECdcQHDJZ8LCNvtgbJTU993cMUzobacosUXEygz",
  "key27": "2x4d8AtdRDWtkjJyYa2CEjS9aEzjix6b1UcYfpymYeHv9BYxqN1JQcvraU8QRZnftLwj9gMdmmF9VpyMEZmjgoMY",
  "key28": "3X7tFk42ksSuerPzmiALz5YUPi5YSNPREGcoY4rRzobus1SMQNoKSW4o4VnyVT7ypTz39JYaWXEJnRjFSYJW2dRB"
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

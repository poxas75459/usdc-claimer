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
    "36bUU4Wa1Eoh61W7TzEbspdmioytdNv6KzkQ1tqgACTb8fsiHDVxydFGws7X2n18rBWLuUqg5rszaM8i6LE1VMnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SM1EHXWL55gkEFgqDv24fK3cuDBJaaKQuKK79C3nHvxoQsHmmqqZGRAv1Eg8rnvDUQ6DTUDn1AZtK8VqG1FJBru",
  "key1": "5UvBPxdxXB6yMfxWa1FEYkSruBtjM2cDLuhBh5cHS2kovEswdsuJyrw88CHdEv3Bte7NxMCLseXkVfZgruajA1pD",
  "key2": "2s3sx6wtF4NZJnWXtdKtMyk2kyEyPpvGksfU27z11x3KQs1hVwcZyrsxCWAkZT9jtmoYy5NZwoaDK9dPKYaUydq4",
  "key3": "2ivrdK36WeG5HptrLBm7NwfNWPrqh6KVRJuQrT74LhwehVCueUX6u3dWUs2riSVNFRP3K25FkeibpbUVPb2wwwou",
  "key4": "2QGFetoc8wBnEt6T1Q85Js5EWKR2mJWtYHEdxsCMZ5GPm5VVrm8obgGZgfD3b5i3wQ2QmJazxYgZ7hk4PgM4G8DD",
  "key5": "1J45bTudpX9KtEW7aazWAvif1kS8xmSXSCVa9o1959N5mk3FBbc8SqKhy7VcNAmnTxBSXMkYRPZxZf6ThHN3xFK",
  "key6": "3xzi6aTDLiMpSqBd4UFqe8RJcbcx7PYe9S3W229XWntrrc98GmKjRYnpUmXtN1uRFR1DyxNEWErot9G7V1T4QWwc",
  "key7": "5jFWfbwto2M9T1N3D5YPBoqbVke72bp7jWbW9aZQBdHaB3Nno6y3YFiYjkn7WJVMxGxCJ6kJtheYBzGg4KmgpoGy",
  "key8": "9sK8FmzUdCtRKxaVAwhK6a5UoDR3zSqq7eyDTnVYvZ5gFJ1swDUPwXVbxvC2HrDN3zkXfYVi92mGT5G2B37Q6nd",
  "key9": "2H943TiyRZM5xdbWzvp1kvZ4gDibnV4My9Xz9yE7Z1eoioR1FmD9zfCcGbgZ748AM5BqsK8QJGkDNcTs52G6SxEN",
  "key10": "4YE1DaXumFR1c23uswp2E3sLNsrvAzyVoEaSqKrvLkcKq7MhJQsAibw9A4Ujjbh94jnMfDHAvkNeZHHWVFTbzaqy",
  "key11": "42rAKibxrxE7uhJCTJ97FN6seDLavUcUynijSUJhtqJKtWFTuZBCM8RXnqaJ86f1kFbM8myXrHfBNUcSL7a43Trr",
  "key12": "4XGneMmnNLq5ek8WcJvZ68K6WYRaNjf2FLDEoYMMmRf4EETRwSFygkme68GN3FfwL56q5ow3RzdUx6tDUcDoqbwy",
  "key13": "2d1t6S7QySTMCuaykR3ukRsdWLzonCY772wJKNdQTpDafpUV89JZmzPp5rSgbjifB12kGiiUvazZBqkGMwTxHfrA",
  "key14": "2wqq4Be3xSc14x713Vi824fKY6p5jKyBJa5G3isqL447rybc5nqf5JCnBcrkKGhv4djBJosfKaxS3yjy85U4NKNP",
  "key15": "3Bfbej4mouigsVp4CvTzsN72Sxob8s2jrdcfwPuqpVASVXm5tTQDSdex3dVWZpdAvgEHLvLu9Gvyk61yWimhuGCZ",
  "key16": "CEhDzLHc7GDZKgmjhUSrJuUSWTH3hA8VjPHBcZkbGZntRHrLoyuj2mhupAjJURVUNLZGZU81eZDCnCTRmA9xkqs",
  "key17": "2uagoXuDDRDquDPHuMEsvbytbMb4t7wq7eVtJy5DVAhNV8naUXaEktZhXRxqqNLj1RkfC9TQRKstbqoLaiu5b5dM",
  "key18": "4xHoCw9giEbYSrPPTVHx6PKkV6Vm2DSiiP5KiyET6E1A5F4qyGhmuB11EKWuUyxGzSPJvLXHQJ7wX8Vf8nDbi2aY",
  "key19": "2xv97orvk8eG8qXjo61D7eJLhuSagZLTJSNBy4JNSMrjzGj65auoD1wgYNjiqzT9kRMGgkn9y9XiFms2xAHNby5E",
  "key20": "4HehiANGQMRK11X7WKRLm8vMrj3raGuNAnP7BQXx5SNVWjtzstFuqLk8fVygFnQB5XpSi3ZWpQX35rQsefDYqNXw",
  "key21": "3retQkxmsvmbCHGpa4f3cKdh4VAwPicQcRJqvMm69zPiUJ5qgUnLZHb1yWQSBQHXgYwk9khu1E9ANwXCHxUkqpFx",
  "key22": "46jcpHuhcCBDPiR64hVDyPP48Y2QyA4nSfNZD1HpYSsFHbcJFW8GV6MYZxD6tZTAcv6ED61vWKCX11f6K45r6CcF",
  "key23": "5mXNMe63mnBaxHLfvErfxeAxJ4JMoNzbMZv9yKASYA1AFBb3LZvSogjwCzocDHM9BLFxfuotwuvdvhNgZXDZnebz",
  "key24": "4WxcwAvESLpgjRsQJ7ixCdQaH8MY87UA7ZUWfRqsoNRPM6BCQajXnDtztvUoXZKJuUzBUyfmYYFGR28vetB2CWCv",
  "key25": "2tUmrFyrbbYxtksHJFsLmtqpEKhjT2CezrBtSJqGxCwq9W2dP8zLu2K145fupHnN6dTGKGhz3zg1b5h4yDrHi7BY",
  "key26": "3SsX5WyqPhkWFLt1xFiHN4CivpFFkHgEGHF1mhfhgrF745dCWSyGcdenf5nZyKrM8MKoPUYqXqsTJPF7Br7htm3Z",
  "key27": "2cgY9BAzeYD2RxiAkNPqV1Fq8y3PQHbBKk9SvUh6BQguKF3TmVtJLx3HVzCyGC4gXuB5x5y4LLJu3q5PwZihRcmp"
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

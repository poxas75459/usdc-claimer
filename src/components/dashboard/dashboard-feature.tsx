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
    "2LFpVUNGpEefk8o4dCWGT7GCov2TyoDANng4WN5A4M8fmnJDPz1xwE73cxPyBhHnc3fByJLmw8WsaMjLEokP3gmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jA8x7T88QPktEsMwWDNk3PfZwKmSrT3aWu6qoJ3RYSpvTwoQ5fgowvQYVkrDPuNXkz24b4Rzfo2qf7hRGA7wsW",
  "key1": "4fqQ9zB5rvuMJKkzucAbUUy13ELF7AzY2d4ugWo3cm2h3z6mYGcgzFSkcmSMy1VUPYK4XHuVAGvb4wj9KujkPX1N",
  "key2": "5heeeaSc8aT1ZVHb81VBQGddhRQSmhQa19LoW3jNRWuTTuNwYDVbkSXPM9u7thPpGUEgSAq9VtB62qmq81UffDxZ",
  "key3": "54vY25JDesJGLWNoAyjC9sTxWC7vQtZ88Waa5guKhRg2UTZczRLLZkU7PaHCTQ8oYzs6RpTF8GLTS7iTKHxqnmn3",
  "key4": "3pTkNj6uZTCc828M8h5mdCjYMRf3LaHCpaaGzSUDgLxnCjWbCk6bXGLp5ypwyZudMQSLk1KMyDcyQMK6gyobC47v",
  "key5": "549HBmaF9FUnuK9fCy3XDJcN3bzyfyUfVmq8voJwBdTxscLspBdQMcfGcf989dEJTAXmSdt5ptwZk6kPKGJKJD5C",
  "key6": "3FxKJ8AiNCk8VJrHzdy8ga5jKjrBVLnAB3ZJL4LyP8PbopR92Tsz1Lj7mLGEC6x2N9jN3uF2GAh15MoSDr1ig7Gh",
  "key7": "JgAZFuRNJecZakGRXDJ4vSmCBMQb3QRn7zJns8xsYHhfAHBoo6486pzZvcqV1FyTzFzFZcq9k3XwNxuPEvDQn2Y",
  "key8": "59Rbqfq17qu2gohX8MX2SXKa9KwTxjS2JWB1BsFRoswtLZGK1ALGN3QBm4iZGSTxBREaTy42DA1euXs1eod3PGww",
  "key9": "4js7Jx8mLpCyVmM4hmybgq4qs8SLH4PznJGKhfMZpaZQaPEu6coRh1qBmjpvWtdJ9oBHatsKbrZWo44h95uNzMdP",
  "key10": "bbZLsxeRJKf2X3SvdqbJ2PXt5jknCheKwJWgXy3zK8zbHYUCrJbH6p2R8hXNUePUQy1Hw3QdoVxpWp7L7KW4ky9",
  "key11": "5WuboVojScBjHHHxRPnSYxWKia1HcAvf6EeYNjHWThZpr2DWETggWpe44dCBGabSPNuwmvFCGSLzCBFh9gt6t6dw",
  "key12": "672m4HJqT5frDf4qpGYK7DBqXF8oYckS6ac4k4CwG9YUALauZXbUuPt5Y4cfBLDfeBvjdGp5BSD3iWqNC2LRC7f",
  "key13": "4pwditQ2ScD6Upgegx8JrcrDoDihaxAbivMbkGK37w5msNwna3r6FNsXkYNp5RUUpNi8mneNo1mZ97P5sEUt62x4",
  "key14": "y3rSvTpY1qaoJqCxU6RvwPaUH6xjbYsxF2QH2TE39tpHYn12dfcmZQ8s8tNPZZrYP5Y1WHc3MDq4tZ3eZRqmrFc",
  "key15": "2JNd61aQpEnZjVmH5f3vhLP5raPfyNCks3yuZT3Uh8ThGuADjp1fDGjffhyLvzUMmaZzifcrZS3EbiU1WvVLmV1t",
  "key16": "YHrTuCJbKVttCTuMFfaG9SMy8YiRqvNZ5N5MWUg3EuZo6nyhfMGWjgs2uwFMPcb8PBLchrFUxjgr41RdfJMx16A",
  "key17": "2a5sV1N6bqGd73viDWLyDsiR1wpRaaNzVNmA6nyrM1boTVtzWwFYtwGGdyN8VC1i712q45sDY2GR3zwaiJNH8pGw",
  "key18": "412ufzz88EDZiK8oWqyBW457H2S3LabTmxhqVv3ikvx6Jtq7i5pjpRmmQfJ3DDAQjkWqNbcqhKaNnZWc7D9gJ5i4",
  "key19": "64jY73aw8R36nTbnRWz4QYmB8BWgkt1i5cHbzTBwT5WgZyRtNLLnc3uVrptbXuxMNdozKDrvyZBzF3F7jUoBtnEA",
  "key20": "JB6waVBjNM8Tx1YC66xw6CRZrcYRrQwLdHw1YPMKUdWYfWWbMPUCxexjnMjfbp1fA8wmZ7iFs52ki2nZrnsz4ya",
  "key21": "4Vt9M7fdaK5mbDYDTYEYDrB2TbgDvSe3jLMToD63ot9dcSALaBBajn8tU4nCyQ8pYmrNVDe7p4ZWzNZnH7JJLkgp",
  "key22": "UWV1E2vBMB81M6BM35xuKUoNpLF1GUYdsSWh2dwVfyGX57i6Zzkre96rdyrTxSp4hiyJib2pU2zzzfurzTWPrkP",
  "key23": "33TK6Qbs8s7S1ShbZ3JZKtDnnwsZKfU45p2AfwdbPGAKhx69pCFzqrw6sjCJP9b23ZDQ7QeA2YZnY75DNvfPuSMK",
  "key24": "2fFnrsHj2GSQMQhyoNaWAa48Z1vVzvP8t5ruckngyNKYtwN8Wk8jYhazERfTZLtVubKWZcDCWpoX541VHyNeLC8T",
  "key25": "qJEHXXGnbEXTaG6zafgCiusGL34jksqKKAbVSdzDvMwmG8Z4PZJX3gYTqXFUjXSLVWhnsr3TgPBxsfdD34h91gi"
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

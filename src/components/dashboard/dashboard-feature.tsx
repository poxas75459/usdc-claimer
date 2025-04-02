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
    "2znaz6MkgQp8f2P4NkECu156szS8nJi52Y91ueuorkL3gZ6yjKyk3WDGKNrfT6rSMQ7mFf6kR2D5AUMKaY1oJPKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWmFonAciCNtcZxcJNGXk3gY8cFpKY63rFLQk8kUceC1N6ZUNxpTNwgg3UTSbA9ECZLZWCVzrGG9n2xr3qJQKaU",
  "key1": "5zh6dR2vtRRbEWsmrTJgjwCDR48XyxbbhrRjuzvTj9eLLoYZ8WKEDboFFvW1KJkVsGy5kcCW3NocNgDTU2TFHUkw",
  "key2": "3ixCkSGJv9E3rC23hK7XCZKvqi5eJSKfG3JUdQVMFBQhATVKgekBiF4C7ViZ77Umx53gvtyuYBGEJBBFFnvJAeXq",
  "key3": "266usUYUyQsnCQdYGTBzxyxqghahZuWW3NbZwvUMdD4bZKbTuFrEjyyHDAbq5GGsaDoP1fpsx5hvcx7bzRXKFxRW",
  "key4": "3zUdXKzmqtdYqX4CSNS6hF5yAvxBsroELUd3xNrG8vcAZkhyTV61bH3WArseDrY5nXqWXNs9EjN5nvJ2pGR64fcr",
  "key5": "2N966aXecXWG6bfA7XNtkf4C8PUgTMjgZfwEMjcMKCJvPQTmQUq8hMMKLM8PW5jd9sBc45UDaepi8kJSttkJ9K9L",
  "key6": "42BKijhKWZYcp5Le2c82oVQ96zvpYvk4D4touD8CrtsnMdoPCrcMavqGBbs7jK7mfCi1U8JYwPiRRmdnCS969WLo",
  "key7": "2F684U44fYK3JJDuhcxRrHj4U3nhfx7kELStCuxgqX8FxfzZC4CJCbNkUUGzJJV68RkBQz3KDTcQagXxnUj9HDja",
  "key8": "4WwY53YaKw2P8ewdZUD11LoNkDJ2jT1zv2k4EafGVKscefUQk9yLCueiRX96fh2X5KEkWrAYiASoiGCwrD9uxdHi",
  "key9": "2rfVGkn5KeDgiy4uxcxUNNJLMt3jd8VRtqKmG2wJdkoMMDPR3LMz7vq12dvcDuHgJ36LqSWnJmPsJHDtJQRyFAkL",
  "key10": "XRUBog8tBD9cBUiLPkeqxpgzLuBLQ3QucswDQBjUYE9aPtRsJqtpSgTQrAq915eYtLiPMV9nqKZ6SQWikMsjLRA",
  "key11": "5Qw66wXGCZ5HLTVzyjmtYQvWRARAWCWZHgShfPBitYywBQSzdpNED91HBrAXfEoKih1MuKi57gdy5YseeGN3pCny",
  "key12": "3HXk7iRy52z9Mema8tv7qGR7czjCQ69RESjGKeEMPNrfzqNz8mieTTCSsKzEB3y3Kvgr5i3ZGn8h36K5Y8iD8xgU",
  "key13": "n1AqKTTsqnAtiE59966DKkE6CFf3DiyBP3VZUM4jaEQjSCqCaJ49wCL7pdeSsLGC7ZzKUvAfNDastPjLZaNPUvp",
  "key14": "4XBKW3iypX3i3rq1QaJ1Pk3V25ULgRAozgS1o79gLaFpd2yBq7A6dbtznXWLwTuUTDbkMFGybzWYyhZTYttUJe9R",
  "key15": "2zfPS5SxaTLuDhUMU7DfTA8XCgi3r2MNRvGW5FBCdSP12mcXB5jKcKaVRLCDeE3RbmXsz5mEqr9VVp3b66SPGTPA",
  "key16": "Xqdr1YZd1tG3knV4pcK1HG5MXu2Mp5YjDYp9PqkKqZNn123c6g7LxLz54smQvDpwFVR3JBjn63dgkNeSVdqzimM",
  "key17": "5uUtbjuUeMzfBKohLtqBNynPrQxR6sxwF28ppnFGgsDNzjWWbqFDYS6w5fFyZuGMMVcJAu9cwHXqCfgvwEowU93t",
  "key18": "66jwMu1yRoLk5PNtedy9YSAA975ozL2eZXPZmvqaGPCdS43VhCK3T6hnG84d9HrmLdNWLEe3Tgkmu2hWTknPiKt1",
  "key19": "46K2fEykUEVeFvjpznx9Dk3ACnPq1Jb4E2VpE36pMJDxPVLottEqn695UcNFEtyFGbVUfhnqtM2WDBngpoK2Yho6",
  "key20": "2c46GuWz719iqARRALUFUq7QzugFRrpSb14KKFmdkLzj6MQXZpvag23xT8X8zFnZZvTdMbwe6xTJgRX2cG3G7kvZ",
  "key21": "35RezsAF2NYVSAcNVJ7nKYLEvGnrANPH2RxhGMMuzdLk4gUfdFsAnegabR4tvCoPnYGdCBUxbkuFiNn18uHTKnP4",
  "key22": "62AN6QC23zBXmqzgBjqGuK2FGkJ1TEgQprPrBnx9woa1YRb44fFQwfJLdjgTtCB9G4z6PQtBfcmKtN2sn3xjN4r",
  "key23": "4gYG2dfuwKkBTjVxnSf22mnyBRySyXALVXG3AQVKe6kvV2BcgK7pYN4MgHbnRhb1eRahMBq34QSmnyJaGz7dsMRQ",
  "key24": "5veiaxzgR8KQRv8DveKePvA5CUZxC9JNTFyspE7ciBgoagQsCswPCmTza9Zoo2MTachbrXwU7PzdiCsGzEZ9hUZA",
  "key25": "5Mm1QXCAX792CARgdFszkyt2U9nk31XqrxZJiLJKtHvXSRXcEQLZ4JqYXiLnDKvuiH7uYuNzWodQyrCBzrLPYcte",
  "key26": "ArbdusnVZRTX2iUoPEUf74fY8JJ39CarSyfftcXqAnaBctTJER6wb5m9grerYAymowmutqCZAXYN1iZzis4eTU2",
  "key27": "2fZJxsr9ozjbJFwBsdkaUChbKH1skJczSR8BrBrvQ1k4JmWUUQRxvEFZCEnty9YguuwRmyU6Hb4bp2skgSe4FVsk",
  "key28": "3WWqQ7LNdfkJn8uq4SvV1JJaGHRJYBLjLmDH1jp8FCbPUXz9V26VKDnXVABwxrKwbe65Gs4hLMerYj6F4dcQdvM4",
  "key29": "2kMbjUdTsV6GNNvLqaJg6s3GS8tLyCVXo2KK9dyLra6LijKMLnZ9Lf5jyXcJSYvcfhGas9ehCMc1M9cegoqZ48ic"
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

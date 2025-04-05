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
    "dbWsRe8nsKEbJbPJNHuTqSKg8UdKJHoccTYMbq5E5FZDvLh7dFZur4APCoPbnyHm1xB9RnxDYrQjNDbfc1FYDM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lrgd3pp1gdnj9PpwLNKYpwzFGKxkWQ6FA2JGFUxnQUDqBYXcpbquW1c3UUChy7LT1H4YtbSXWug2C7jL7SF4Db4",
  "key1": "5YzEGnTs2zTjnY4xDChfNZnt3iFbxmonB7dPU8qaSBhLtCVvpxjP7jQ79bsUryxArZTL1QynPrYr9zJfqL8FHSTb",
  "key2": "3HTwnV8wvN2oxbQeEac2vJ8bYaEq3DyCbT8DghGdYpJmw6QgX1bqAKqHQpSVn3echTFMgVntiJooYXZEeHATJjbt",
  "key3": "4oWztLspfL7Rb788xpaM2q6rVeaiN6HBd7iM3Pk39qUZNBUVdb3TL3GAo2EjC3kitDfP2gEnNNmCJJhX28JSDMu",
  "key4": "3vRQCfzKbGb21kcu5jGdSBavsuzye7Jck16sYNcqxQPJHCTuop9sqnUxDRVp7JnnP1cY5uStWT3CHjNAmxJznDXa",
  "key5": "2YJn5GrhFyU8baXUZXGNtfvBvgSP4VENpSzBvJg8DJp5T2SVNMV7Z9EYtqWzgTJgaML1sLWFP2gQrwnnyF9mahy2",
  "key6": "2U6YRKr5jTHRe9MCbZ45jLZu5P1BihdtakL6C8Et9uNULcSvNB1nBtvtRvnVgnV8aR24KGEbftsudp2J7XRe5CHZ",
  "key7": "iKW9AuJBYwkrsi7LJ55pdACEw1nZcY16GfSmmKW3wiBdiUhs5HTgmBdQrb7bTDyoQYuG56AoBDAfq2d1ei1u8Qa",
  "key8": "VZsSBqhRY2NVphTsVEgknZKMV7Dw2sG5k2mh33nmMFsQHi6S8mg3KhrCdYkJSqaruKtvYKQ6RJTs3m3eYWamD9y",
  "key9": "5T1fVvCELMyt7WBf2FgSqAsf5Am9vM5G3GzGfwr77PFsvUrnj2aAtnJQ8VGDzaEdSNHQEncJMJ7tApDsra4vyPEB",
  "key10": "XnrhkAjX2aqL8izAQdYXthMjKkXNXiReKqLzNCT4gpzizoTu3QJWyRaxneC1bc6LmPuaDUd1YhnRvHngxejpriY",
  "key11": "2E3BxeUyW55pHdH4WJcT2CzLRPUYPQVDjs3gUa6o7UJusUgsrmn3FEmnXN76cS1becLJwyXydvLk6dRhjm9nCDuv",
  "key12": "48qWuHy2wgB2bWevqmSqFDtGp9KDAPLhaiBd8gEsN3p3apFM6FtZvXj8GkdbUz4x99emoRcdmsQuN6kUKC17Xo77",
  "key13": "26Ac5R62cxMobxyyXEwYdxkbcMAW5dsUv3SkUU19DTGjpfCSLHuRgWev9wEcn8uerdAi9wEAQuKqtw4uYkjoDFxk",
  "key14": "4Ao9Lat5QCRyVGMqDH3Vmzkyq1ujoUo3p9kuGciE7Lk4uBUpi4MTqNhAiBbTrhUPWzPd8EMB2oLg7YPxZ74iiBAW",
  "key15": "4bXxg7pkeRK8oPPjJc6TdXfUy8qeTNXYyoSuUhEhRjEgU5AwHDEKpJR93DckUaU8vrPTFk1w8CLCUpbLR2Zhxas1",
  "key16": "3dJmGFp7Tj77cqmmkW9pZBSxUpvEYnmukisJb4VdmVH1xu24kLBkuqRAmAvU8wLSHn876XQCo2ywwYxszy8DLb9u",
  "key17": "62xwsoEr44AV1Lz2aBWsCAQptUYDFLB4QgmZQDmstbiQcJk3nRJU7mRxXaGhJBmDnA74uALTYfTXbsGZE8xcC7Q",
  "key18": "3zu5pMo4ev1AtAihWG2VdK5KMMTcenpWGQwUuyubUUVXdtiUFc6zqAGkCJHmn6u3BPVMWBACe5VjPWE3vyMWfZ29",
  "key19": "36AsvS6R8B7YknbLJv3Z1zN6oGRLENsYf83AkmJmg7yWzpSs68NLxK9MF2DXNqDBkCDougFUHnuDuZL2mzUBu8VC",
  "key20": "2aXcB89aiJqjPnQqCKXVbnuDEB4a5yzsZDkAH7FyvubRLtjMTNRgF3GCWUGzJbRcdSS2NPz1kHHJsuhDGAEYTp9W",
  "key21": "5eP6qbQ3MbscZh527Uau1JsibnrNRNJKBNfyuGJL6Xo8TKtCd2JoHH2xe1E1mB9ExqkG62KiT5yfbG3zBsDfz9Ze",
  "key22": "3J3q9YgQurJL3yBUvbTmRRDpVHejLHk7cCB6Q4oPhuESDKZbRRFNAogD474UKk4PwsKUoZSVKyteQHq9EkQicTox",
  "key23": "7cHPuDwDxmBn3UhgU54w3k7YwiR6xnfBNV88Z2BrB4jwo5duLqKvUXNxdVNrUeSedHgdDuaufkbEZGq9AVSAYYV",
  "key24": "4MWSZju2xxUepPNnU7qGy3X9svKFNetG3RtsEhWtWpGvmy1pARbtUdtPSg61xgdmV8wzZTY1RSjFfihWvQTqrEb5"
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

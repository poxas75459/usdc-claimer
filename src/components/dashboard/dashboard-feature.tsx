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
    "VfyagtjUP4Pn8ZWKvtSDZRGPx8LP5Hre6Jyf2ynTZsi4gSBBXWrrYn9jTFi4y48hMzNCzuMDnEgYFwq829uwXNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jCrZBfHKRdnFRFA5BZ5SPPYxbTroJZTZXm3bhfzQ1K2k6cKmfLoJzExrc8yFJYqxEVkn6bWaZbJLSyvvTTnRYd",
  "key1": "3JpAKbKkoXxH7CJtLhbsi5K3aMaWYAkA6oFmiAnRjFiH4wSaFeWEaJg7XeAE3yst6DxYKyp3JgTBDA6g3bjtEUnX",
  "key2": "zWj99QUQ94xyFu48QyUhJ2u7p7PVU4kxeWiyCFfED7iZ2GcGjzUGEw291rgh3cVCBEKsV8QfbtPYvzZvkWWs1QW",
  "key3": "2ByuGNs8AHa7uxLrnMkaQrF2QdC4YTz4QP14XxyUogSFWqqALEecxXSfjHug56xZzdD8xWbmm8rVGEaF1jodb3zF",
  "key4": "EvsnQ1efoZbkLbHrT3C3RCf9s8ffSzdgL4PQNTrRFd1cnc9QGCvgsttjEJRYLTcdXWPbaDKRHGZ6vFX3EGGXgTf",
  "key5": "2p7LwZZCcvcxfRhvD26ddqFQi2GRH2SFtnPZyHt7zSz6BtQaAG5sHsrwzVHohspJcrm8J5imQAHa5TvsxAQEbLFb",
  "key6": "56Guqw96Q6Xh3xtbCat374tGCjfPd9JiFhr9xpqBxwpNeALmMKAWaExeNpXmpoSWeKV4h7zacWcE7qhqWsz3Qecf",
  "key7": "61BzBwgMMEogAvPZNqfZ8RczeMw6BAdAnu7VB72tFjd2DQXtJvqKTDyDvHRZj264C6tHPvq4d7w9gpMhVzB8q88c",
  "key8": "4NYntqJB5he7bEmZ45vXc6o6csUeEndscTBNEd4ZMJHvD2Qvo4G5Hx2G6QV6QmAG4aGrvQTz7GPvnCnJJD3F2o3y",
  "key9": "2vhiveSScBDma2ohesQuwzB87ojDc41t7ZjJ8vEVpSTwyroQXb3WbHmdbvPzPG39usDWjG8ALkZDFKexnqY6hnUH",
  "key10": "2VP6sN6BxZXNAdu73MeWprQ1JtDCZ84wiLcLmkywATEAHMsYCya1Z8eG8L6i1PNAs9FPU5MLL2A2R79XCxbTPzqT",
  "key11": "AbJRHZQuVyAHbtkVaFPiAqEUYnbq8NQiT6cmXo1PbTWAnbJwHgzBrMJ19C7CgKbydsJ8yP9cL4GijEUxP3etxGk",
  "key12": "4pWY98a1QWJHAFdH7G8ybZVA4ELrbWv1qcGyuXcmuFzyzAGQQyeMofPByCiA3yNokwtDcY7uFRsaiZH4apkEH4dy",
  "key13": "5eGckwefXj8FGdLxgZatThM5d9eW9RqcnvjC4WdBe9W1yBeREbHAnKFCyjt2Nba4X7WJGjibuUcyjBcLeRQ3JEM6",
  "key14": "2ksi7kZUYzkPZKdnczBMRQbKTuCUVMtGCjQRhzN62h2jdb45oRiW4UXojqvhtGU3tU8tmQAJuZ3nq7Y5dSgUNTUd",
  "key15": "3vD8Jqs5DfiS3eCh6owv3E5ixyxmfyGcaKr6wT75iiH4VaanBuYiieXTvRMGPFCAGQgEeGaWSEc6QdxAitXwcwMo",
  "key16": "38KCy61huVJBmxz2dMmSCaJ4oShBuJVUghoK2EXyTRbQ5BHbWH7EigmhzPChakQkHfVSP6ZNn9YH4pmDMBmn53PR",
  "key17": "2YmjxjC76QvHqNhra4yw6VW5zpgbWts9QKCUzkg1sn5uCTC4rVCJuHm5sJk98G93GZUHZFs4BdbPWZij3cCLjpot",
  "key18": "4Hgg8mvt2XamPHZiL5jzMJ3jjf2KfE3fgW9kxXbFjYqNKAoCvE2HcnTAXJrFz7Da2UJ7pedQzmwEFVw3nT4Hbkrj",
  "key19": "2UHRbFYPHaEdrGeBbAmYjq3z3Yn4DUsmTGuN45sXr71gqY2bbeF5EnoubYVp9DB8LSocC6hi4JaVTAVQNdojESCp",
  "key20": "3fR2REuCgb2BzJWT7zkPRUKvm2GN2gHBQc4k9DSNLeZQDukazBGZtoBZyoKvhXwRr2vdnjpoMe5PM28B5Wh5dbm8",
  "key21": "5ncwVtWUPV4yLrgabrYpjPS6w51VEPvcKuqhJzsVLC67Xatmb916kg8NjX98dBwVgmNLW5H4N8taiZ8kAx3ks423",
  "key22": "4tcFbXUSNXsF38hUQ9qeQrK1hWMkfegGcxL1VWLtYkHBu1hNaWi1mYypkoDbHLx3RB3xWhy65CZGoB93hmikGHk2",
  "key23": "4sJaatyExyN2PSBvXv8hzf7Uw5X1g6S8QqoZ5cJv8YaWsDgbaHbRR98ExtnELL1n64UtrjyPfrRscufNpLBFTFka",
  "key24": "jiQrpcyh5EGBYW5rnP8KejrFKw94EdqLDVW56vZbWTEL1eSNkdrUMbSEHbPApdLv5KUGVE2r12yUTWa6HwkMMq9",
  "key25": "5EAWPQbSwdahFhBycyiprZEBKynxHkq3TBWdBrXU3LtUpQkFNf3y1zcs5VoD5pqhpv5mSK6ACbou3RUMbMzjhcaC",
  "key26": "4phGHLoDTh5HV6pdL6teFJLtgke9riFwLTv7VFVjfJqaiN3bu4fTvSV6bdqJirvdVedgmGMAYXYLzHTuATW8i32b"
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

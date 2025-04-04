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
    "4uNjEEcJkzAV3qsJ9kU73QaazxiECJMGCsBALHW7EPGSW94LNscULGekSwCTGgss1ndo5hbE4G3CcLYu7G5RN82W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXhWt6VrF1KjNjxpPZ1fnj83RhgB4YYRy2UHSJ4dKLwJ9YBiER9H1LmyWvs5N4VJDeijNH1NVS3pzoo4tSs8MRS",
  "key1": "wC1RjLJnBwZRdyuqm6HG9kK3L74g7ai972eEWXYqp1WPLg9VSi8KnaqHctAesCMEeiWhVuCVzXPUYKy1XbkNMPV",
  "key2": "4RWesEMACY5Upmq6Z6ZJ9ppcwZWUESVSQRLVZCa5a1NXmY1nW8AahM1dhy5uvSXTTFDwSSEytk4bdn3LrMTwbwaW",
  "key3": "3VspammqvYnbq1f4kTJ8Uv43tcCEp3TfKVzQx4w1C9B5JXoX8UmtExZ9CHpdwvqKJ7tAKqTvNRhUY7bU1wXimNiP",
  "key4": "5xGSDZcKjpAzCd1Ry8UcH3AdvBE9ij2BDdQRYXdzq56Mq8s3S2Sk9AXoV3Por7W5KQb4yCdvcCHNHkXopqiNaHom",
  "key5": "4Uzsp9VFg1xw17bsZc1ngtkZ32EwyM5WYfXy6FhTBbyBzrAFsKgPCeP7KimBD2HxjE72n6WrkUFd5SNp4U4sb3yg",
  "key6": "Vk9GfW7o4XbsmWUNCE9HL3a9DLC2zCM1PK1zvCRCGXkgN96eMR4BvCiM9Jf8VZznhVEuGeqTLhWjmbdyBxEeSGa",
  "key7": "3gH53sqv9xH94JxuxosdFsRMU4C7Sf81FgbCzxoLa7QYmGjMpRV7UFNLtUBsWYyoexu4zsDUxkkwjNXiFYqGUtfR",
  "key8": "2EWwzhdAqguMRW3Rh2Q63Yjnn5DXMMAyRkNAP3HnW9bHZcrfWFXStcFxsradMfN4V8QxmhikEGq1h9Vz6Xg7aapt",
  "key9": "2nYtBxCQxTbB2nrhjD6khmvMTMcz5a57mV2NZFTnyqxcgcmAixWuMEtFeyTteRpowP1wWFHN2Qr3WVrEUwFeG2ZS",
  "key10": "2GLgLPtaULzv5TBGUgF1U1JojqkF6EAPGxJUz2uiVh4Pi2ocjLMZWxK4czgBs4ekJCUrnfEhdA83bu5hvT4BqdWZ",
  "key11": "aWKKEQNg2xh9icSUzVLa1mnMT5qaP2y28AL9196a2zgtLpg9gJtx348CCuKy8sUyPMGCLRhA3rLXErYSTLjDA7J",
  "key12": "4jNCjYV6cM6MdYRzRzFP5qndAq8yghXpQw1Usfg6FkfxXEuh7UjzKWMZnJetsiDa2W41baxggbAApt3QNJwJRQHt",
  "key13": "26NfYtXFoX5MkZhP5TqP3iJFE5n4M1QFw3nBnqDiMdAAFpScC9TwvXRbHEaxL54bm4wbLrkkHrDwiCmDBL4U2bj7",
  "key14": "3BAacQHQH64N3N2ET4bmuqfzr5NmafLzuE7vmkdo92A2UVnMqKwN6vGdvMyDtKNqWCvX4dmJZmKkxNYfxUUzupzj",
  "key15": "51pNShhmqaDuhWPLqwt8vkGLwbzHX832BJ574yvvgJa4yyRnjSbJmNv5VgccheXn4dKMKLeyT4Ez71PfDN4dTbSU",
  "key16": "41uQ2ZbJLuKaq64zS1CiCReHrrsk5HcCFy51iz5bwyuzcoqbEikpKyYEkMCBVt2myZ7UsNe8sXuCaJdHshX3JHun",
  "key17": "Mbb5DavioivXtF1VfqfEKvjunW7ozcJfeiQq9THGomaQJfkjy93BcYF8pXZ3xYnEr3dsDiULr5DbtDHPKjuV9pp",
  "key18": "5dhsTVe1NLhgj5U7xdJJj5Ki3YKbc5C8pCFqVNQSAAkish9BLr5s4Zv9dgmokn1rdrttizP7ms3RdCHUGucpNza8",
  "key19": "4QzJA4sNnq1NT7vKwx7LZ19hwqXLsfgEQfRatmsm3Qb6P4ji5B2xsXjiq7RKgz9aRBcAuasQsASPpjnrMjnNgzGv",
  "key20": "3x2o3Mb4hg7SiBPR3xzFgZYWxieLZRCm1HhjJztNcgkUDXjPiZhQcFbBtstRjnTyUmpN7nRYX6DAc7A4d7rqusW3",
  "key21": "22gpNwyjSjB9XNow1SnHMGKFfnxLZsYKhKBMkM7zEH5VcTs8J1pW2B6Mo9GThWpHvTk1v5BHJEPqeuLKWNTsMX3W",
  "key22": "5bez6j5eNRPXwuo5PV8yW5wrKKxKj2oBbbJ6o2KYBgLoHCbUyXsntNxJyAQMTYdtSb2o8PR58AVmNeevMSEQAoC6",
  "key23": "49maf5upuiPRfbjeEkEWWJ6PYZ5n4ro3DG1BPbCdHfNjJaHqCiHiLC1MNP23sLKGayrBcAepH2mKm7EqQFPtFZcy",
  "key24": "64iaugDZMiCh2wtcqTsNJ3zhu1CXCeAMVHjfrZdRtQmxHfQG2GSeorL3DE1vZTHxLnSCBLQUBAuFcdCTTcwZZTN8",
  "key25": "32nqD6y89eWeNXf736uhXdFPh6CSspYxGYsiC12HqSqzq21B5aa5fMpzQtvdyMJTW9P4ViJkrcPpnktUxvXCEivZ",
  "key26": "3SzGbsNm7rQPLts6Y8Urjq9FDdw2ExNgj5Kn76UX6TmBEbYmxfz6oaUXdzhr7SJ8C6WP3FzZLDS6X2M81AnxjoMQ",
  "key27": "23ze2CRkb1bPo6ukor7jZ6d16eQnVbNyXCwHW4tXHCEK3y2LpUSdHRhYFM3ZWXymKxYizRCQoy28xcUiV2Vh5GEQ",
  "key28": "3Voovfu85FgndWkZC2qSYXWfSJNrUoxgxcKHLzqCsqcbdWzgeiXTuKJH59C8vC43qHVFeFgUR8LFQE1mnVvqo19A",
  "key29": "28UTMrbNpCmXdsxaXCr8r2RmCpwa6xtKA9V3VNE5ByLibY99dPjj9yX2VwSNUK4WeJNxqXCtiJc7Pw2dTZcGS6j6",
  "key30": "4yBR5wtGFsh7oegtsQeMCu4Wh7T3VEmMJQvEeKSZ5PFJL2MmFUHe2afs9nw7f6tF43ou2euWB1bDfRxMq2MrW4rL"
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

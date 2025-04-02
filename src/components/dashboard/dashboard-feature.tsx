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
    "gtW4cXARRZd321zTVnJPUGoeqhsR9JreNPxF3bCgAWKiFFZFCgKZii1PRJoSJdJch2WLMSTECd5qStVEPfPqB8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERCBTHesT3AGaJVHgUUayecmsRKfDpUsQgTRb1Kk1PR9HXxDSb3EB8jyd9czDNMWwvD8THSQurgaqWyBc7YRQ2C",
  "key1": "ZkAcztqPtqR6QiHcLf8FJCrV3y7qpqcRXw8oXPNRiYk9tN5ycm1M1KfuTr37ozi5PTwKYtzuRcPK3PkERFdUGo6",
  "key2": "3sLCQiW8jQQrNdz46YkUz5HGQeM7yjdeKhmwnYRzxCNfrhXRg52T6FXDmv9C4RpYuEVTZL1PT1Eiu5c6vQEqswKP",
  "key3": "jFUYxa1f6VMgfDThZqZDY2D4dZ4tfT6Nxf99ns36Zdtqn2eVgPHqg9qQUEHp2Nv9argZG7ffD19BTDzbFCVEmWy",
  "key4": "42iuN4QzQv2UV1bqdxUxMrrfT9sHFpYfajqn8qxyF4oCnHmcRew8wg3DajCxRMqxjtkzMT1HznoRRuWiYmxZGAqh",
  "key5": "5ngqRAqHj7iCSrWuNzMqjCKsLnoiA8PqPCJT8iZtthmQJ7fBWJRtavtd6zxdLQzKBoK2pDpSS5UdKf9FAojk7tu5",
  "key6": "4W6pwcfXuvmwr92wHT1KupQYYhgqiMuZyDnv6KggQaY9cnCvNCzYBfb83qDhHVM63tSyUHyk8H1RCXkjUCREb9g4",
  "key7": "2kc6rn1ADdfMss8MtifXrwFTgaNTZ2ecrRjWQy6XgtJMZg7TZmvwsD6Quc6VcmuRBzLhEZmHm5HstnVyYWCC1DLm",
  "key8": "42bYdz7E6xV3ioCNikFH97cCUyQUqVwtEj2wkmFKQqdwLdpWX2RaPKLQiKxEhBA3xNejSNsfFgagThxMQcEtBK7X",
  "key9": "2MyAc6teLCSWz7RFjf7bHMjfEi78d6hLWc76YJeT11MF4GQVSnMMbVPnZ5KPAyZ3SZN3QCjcxg2ZGeCeJJ46RNcy",
  "key10": "4bcdbEeGpnVCxWTBy5fo64qSRD1BEQV7yFUmtN1GmYgN1QYtCkZvRr38mkxsqHLxAeyCQ2sBuin8QeTTXwSnkwQQ",
  "key11": "5S244YMDawZPW1RKCBLYs7EiKz7YTZ6kJyhBeasTXztUWFPYKhNuLBnry762p51bz93S73uGDvqHUic31ZKq9jnL",
  "key12": "3zw6QoRspeqpySp8x9JsSynD2LYmFLbn4Lu49CvdzErTy8tY4ujyPdWCwTrpWtqGkUjavedNnExM8T4845PahF1F",
  "key13": "4f4D2N6Q73tKVMeyuU3VDXkWrhReSjRHFjPzCbfQf3spoDvz3ck9NiW9R4g3AvvsmQ9XWi54mvQhgwG1PKGmgLwn",
  "key14": "2Le97s9GC1TBBF6JtDYSeUn8hJixYfbfEogKWbcJrbc4fhfUspnSEwJJwZEcfYWk1SQ9CDVbmTuYr5pBA6obmG94",
  "key15": "DGr8UuaMzAnYgzMriTNDisPQADF43mDEZGstDMNe9SHiQN4byYkPNMW9HUoRLHYRo1v8ec54zHwZaETh1E1Z3pZ",
  "key16": "5WLNwY8FpGYs72UjuwmMUJYfPzxfE7gmjYw5j3cBRJM9VpUKPeUKSgnmHiBAnK6SWQ5gVepCmM4XzsaKtnNtKaBY",
  "key17": "5WeMBVuKPvwnoBFW5K8TmEKm5dG7JzimajGgZ7asSCnNwNdNDb7gcrBtA8XmLT2R5Bb99WdjK9GJj1cR9yJtD2dp",
  "key18": "5AS4tbHAoeDNy4tCfx1m9aX85EGPWXost4Ax1iid1NtyeXz7PZDDUDpyzyAW4c5DevXyg6rrGjWqmfZSGfQiY3wT",
  "key19": "2h37LRd78wF8HfgdfS3bU16SvJQUpkKAnFw63tKQAszLxWc7ciyemRVHMRvGFbUzuBGxTtjnRE75NcGX2rJmQmqy",
  "key20": "p2mZzqtVjtvyMx9CunVYerAn9n1QkqgivTMHYcSNTdAtvvxFys9TAyaTyWPSjqcYyWPZao2M7z7pgRygJL9E5K6",
  "key21": "2CgTMLy9J42Mba1gb9M3bf2CoQrGkw3LY9HP8i1SykNjo8QzDKjsqpEZHFeLwc47mcojzZ5JwNdAuTF67tit8bWF",
  "key22": "39qLMihWg35zsap57EKDG7J7EPnpFQvpJDf8P4hExd2ADCRQ9PWUVsAufKoFYBkXaXHsvLuazaSE2QjdmXf1hxcw",
  "key23": "5ajfZw1XS3PudYscqGJQVjBbazURMDAx9G9K5UmqBV4aZR4WTrC4DyopPtCfRZheaKMZGK6Sm1yENzxDAgKSWmze",
  "key24": "3H72XeAAbLuAE6Tz4asDSFbbu3MeWAV1yZp5uBtvQS9C6kzYnFULeWoEyHd5CdLnyxdiSPWAVKXhK4MLPsS7chRT",
  "key25": "DurLAEJpDH4bE5w4zm7BtTRPd99FSVWuBTv72sq5UqSyoHXLu6QC75ngZm5QyfSwuJcroR7M4cFoCBHkxaG2qkr",
  "key26": "4coYD6unbRPWS5EzzUjpTCXLj8htmgY8ACGCMF25NtVhwveazkq3zJkvJEDEDzaAs1nCpXxYEcmnQjN7euRiiYU3",
  "key27": "48Weu68TupBsxU1epFh7FjWpe6UvDgZ6UFL6DmJ6zssEDye3od552eGW6iBCoPHvwCTYSMMiioaczfv1XJ3UMDjx"
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

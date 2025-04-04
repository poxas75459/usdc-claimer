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
    "4egb3MSBuGGbf9Nxe5T1FLYHWqrPPQdsWZW2BCNYsQ4K5NTpXxCcBzhLhFSHHrFhDHg5y7cW5MLAoDG3CxZ9mSrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWPuUSNRWTtV9RTpGjY5Sgfqpza7RRNx91PkpjtsfYvpbNFZPUGUc787JuYrAWu5djsMA8V36uzfG9n7heHVhUs",
  "key1": "39oUpb9qJSwux1oz7SuMqiqu68wMZKQq3ZYSqnGT7fc2bKpqnMwHNVhnJdT96BgJ9L3eDNkApwyK92CJDWaHgWkj",
  "key2": "s7wnjRqoQVWo4KK3u7mm8Wnr5v7mUabobrBxCxkP7D1Qy1PJ4sPpk1bjmBCT3gV631n8ooh5m5fT9znw22H48re",
  "key3": "2HtVCkvMFWxgCjjiVsLRyZEWQiWAztVMEVdAALdsrnJjc6bxBf6Nk6VBoctBm3GYWKPefCKucHC4tmtujt6uJhAh",
  "key4": "4BYzJEV5mJoKWUfoBZEvNgVweGSMdELxiDEUvBpp1YUWDci5rGL7Uy7r241qQt2rjBqHFyDpFscFGpP1AwFYKJQL",
  "key5": "3KsdH8kHJFfuudLwDkZGNxrTrGWG5TxiPJnp4wsj2BEEJPpCaHCQQuHfTwdTXLW9ZMaAfjYZTGLufsjZmrag5Fhb",
  "key6": "2CksQnuTk2T2wQ9ansoTQUFPhAzVxQnvteQUns8RwicYiK4Sr8aMaPZB2LhNL2BfporPb66VqhCoB4t1iWy7xCpp",
  "key7": "5dVm6CtAjA7yxAzUpKzrjqpLqqjVdrGvtsoFarPtEGPYeVnfhARfCwtrpxpbJPdmQ2hJoudLQS3XxSeuT4ZDnLLq",
  "key8": "2EimJ2RSumWC9k7h8g1H5133uwh4ZuAbQ7Ckh7bwMCSS1VztR9US5KQjM37ptiMizJzgipB25v8p1YsGtuuYhYq",
  "key9": "4xJ9rYGffH2t9db6EMFZ5w1mbXRyESpCrP42C8dnhgMzobKZp9p7iFCXUmGoxoFbk7BMFypPbV51hn73qL5eNbrM",
  "key10": "wczDyQtLMesjJfzxJ1UX2C7b8CtMpeag7J8iQfAkjjrPttYdJ8EK74kv2MpbATWDwe2ocNeZUQsxKxqqZiVAJ3H",
  "key11": "4mBi1SkuUpdbzLuFanUU59w79X8WWrW5PwLFWcmXAfcXXeTWhwQkJfiEU219mrjkcLtTLSRNv5NZAoj71tWyYTGx",
  "key12": "4Joe6NSvs99WXvS9PXkqgyzL93m7AvD6yaMXTNLzQBwZZsU81qVSiu9garV8LNsh44sCpAL3kX2pbzSbAWtL1T4A",
  "key13": "JtEC4oTAc3sTyBCkUBrY57AHTAtwPof2tEh5wHMXh15q9P36RFtCGQxCGHXzRV1aR8pP2A5Nn7RSCeLF3iec8r1",
  "key14": "45fRHvjJKpnn1ja9C2ce4pduD91SLE6d6L3Y91EuvPkyEoWfZjvFRUXkDNriB17eqnmfxSkxmTARiSaiUYn2wocT",
  "key15": "3uFCVcmEr6DnPwmvEvdxcPAht7RRry51FomiGZrbNkqCtSb9TLMjVVRRW7MYNqBchdUrW1PCvzNwwwKNTyUFKwUw",
  "key16": "3XRfXgghweWCFwGCGepeqqrKE4c2NkXBPPkY8WEZ3pbri6HT7Nb3m1yZUrH1SoB27gfbgCvEjEKni9kwiSLspF3F",
  "key17": "2MwJ9MVEkxhHzeTfLvqaJtLR3bukrHzvew9G8jLsCe2JdhaE9PY9SXckpWHg9eAdW8BkiLD23G6o1RW6KDzBx4CY",
  "key18": "3EAsLjWSNhN8WbJAYfoVeUb3FbEYMN6kWNpNigZPW7VAnbmUp1PxTenASxshjFHJWfX5DDv2HZPcEDKYFU7NsytB",
  "key19": "FVusDBzweEFuDmh4itn8FUCAYmmDJ35oqjgNTvsYTp5fcg3Y74uEW9QzDVB2kEzq6tuTC4k1xY1oWENW4DbdAa4",
  "key20": "3NYviohxBXgdCtx4ByZjzBCzF27SQo9mQfvtTrhTMkt7FShDycNBCJWmNyXBpiDyHZZfiJ7ATdSZUuvWCW3ZTu6Z",
  "key21": "4zbLoWbpynqEeQSDrkR56Cf3fZ5RbrUFfQ1FKFCMG78VdagvxPiVEJLUK1p42j6dPg9fgjoMRpwZKZ7H979zawVB",
  "key22": "31y5c7fZT89w1SmLM1T7AxHnTFPhzaL9HVBeZJKfkoYqv3GM38gKY2Hm6CgNUQfEpTn5TqWeRNrnTARQfiajiwK",
  "key23": "362mN4HrFZtqw4rC4E2WqfkWnDbTYATwHzXZgBtzEpnBifBRfV6PjcBfB7QzRdnM14kYYXH9P5RYZ7UGCVPdfJdV",
  "key24": "2jxiKKgCrpYEMj8rd3ppEfSdVEX9AmEriv4B3iwyNgHq59qzgMtiEXDSZeM9p638XKdmu36qQJjFE46TvJcea4cx",
  "key25": "YyvnvSaQYCWAj9w2Cc71qeSYkoSHjH4bbaV8K53rSFi7QZA2dFkvWVXybSoqNJBUuuQsdt2sQSCRE2LuerWSCLT"
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

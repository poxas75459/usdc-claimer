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
    "msUgsMrJwdgZtdNcW6ypPN39vddNNifoTFY7viaqeK6jSiiThjCas7k1zNSJWqkjYHRU1jbXCAor1sxnaawrGL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EzEnNfwG5fN8RgkH8p3T4WvoPeFU3pLMoWQxvCz6ZqxLXoLRzmD1Ec8rrcTiNNYt8uDeap1pHdgp7dLC1JsCLyk",
  "key1": "5xYj2o6JhcAWDCpHSUChirSRj2QMLwapsiYo6k9FbZiDvtSi6wthvBuPnAui8fjE76ygpDgbaDzfuew7XAEhgSCN",
  "key2": "5k8kyube7Wcm61sBVwjL5SurhAposSacdkAQ1jycS98KkdELeLExZp3m1LwXpFTxPQRcg6ZpQYZA47XB2UwHsb19",
  "key3": "2Qo4MfvyJnicdHJxxyG4435Xo2Hu1i2dzkffWP2AkDcm4Wa4U5RkqzZDxLXJdFXiqqb5Kd2GsNFnhhThqWBcRJzr",
  "key4": "3NEutT9CkD11V1mSBK7heYZ6tvXazZgPThMc9yv6JtUc1jVwx3bqgLJZ8dzgW4hZRhfZa8nrmRWT3U281cg78ZBU",
  "key5": "FbqNQnN9oKRtE6kXcBBCqPdy2dpFTFiUJjFBJqKfRdF36ek9YBdwtfpKhtw1kjBVtPK3Jz2pG17yTcMa4pZTUia",
  "key6": "3NiJ8AX4CKLdvzkYnYaidKng3wv1G5Nw8XdTntgJaKQrgDLgKyssYmLp4bC2SyYtQAH6J8zCaWTBVYSytkKN892U",
  "key7": "2aJbcQujHt3Bh3GLi4PsYaVHu16uHi8fSJasg391U1wbfGFwTJwHsJMXJqepPe4PBo7bya9MPGtzXNkGR6qtGDou",
  "key8": "5igEHMvkFN35nRCWwWxqQrbKFjwTdk1RAPwYeXEvc2gB11rgs9ycEgBA92kEZ4yAGULew4P252sogQLBSLRcknqJ",
  "key9": "2Px6fyd72UKpwmzr22UFjJkzDaeHP5zjxN3eDbf7AGs2UrLsiD33Mm5JD1jDSP45hYm1GrAm6SpY6V4BX4P2boSB",
  "key10": "4UjFYuYqHvmstm8n6FafYeMY31Xckg7YbR8BUDibuVR4JC9w4mqqV1tgMGfvrF1QNN3dgv5NpBX1y9wfwmvqZzsC",
  "key11": "4ppPyhwuvMVbiH9S8XhLkeNcj4wpFXydrZpVUUaiSma7oa2XevYeyKdosmFQaHhoxNYWRHozTWZRBb4JgUxCKstx",
  "key12": "2GHQDBrXSwtB9Wn2CcmsNtnKefCUU3oUPQU4hhPbHob5Umaha9bK6LHBsaFSD1sy26LDbujBaoUUZUEpntzcw65V",
  "key13": "3AWvCpePWr2R22MgMtpkWkXfLUCXMk9L2vBTqBHkxeQfAu1CoWSVsXagWPQH2tRH6PbYDhLLbbhtuP5oqSLevU1e",
  "key14": "2ERSzUosNTeV2HhPMFs3k1mg2MYufVnujs24tHv8LUb67PHDBLnEUtozXcXTTqf8fG1NdUotuFCTF4KcgxMfVYae",
  "key15": "62Y918Bt8CwuRVfxPGY7EYhxqJCvM7i9mSbRdcuce1L4UgxUhtHSJgsXey7dASXfkjkGUnCSD22EPZKNK2wcwCpB",
  "key16": "42guB64Tk7ycEpUpxjy7BLiECLCYZa14BbfKTJUa3CksPx9x83DEHr1BeAemDW4PK6HqwN8rFUxBDFCAAxSh6NtB",
  "key17": "5bVQr4YpTEDmNdYfoSQT3zJS6QvCosqfLwFqGNTsgsVmDzUDvFnzk5o9ijL3sF8zVrxVntPVfXjz4Ut4EoWCCV2d",
  "key18": "4GErRgCqrcFHbMKV9B6oyZGo5aqpJo26kwQPuFwxvWvF7WHuDZARqVydckmiie2AGCK1bUHZ4YGMNKXkEHcsxqae",
  "key19": "66hsV58naREvyrcfTVrgkEp8JjWNxy1gXrRWsYPLkZ3rpHWj9nHZg9iD7JCqYxAiTotGm2u3eG7mtotfWTzt5egy",
  "key20": "ktiwjy2JZTh8KPxh9pZikbfP7HvV1ZSCpRSoZxAL5MZ1NxvDZZddJrYhBxQk3a8Fonzu1cThVMsxC887ZN1V17H",
  "key21": "28AiPz94e9R8rsGnMhZfrrCL3iJrU17atNokzjU77ooybjkB2rhECNEDFD7jynFvk1ZDwMWjPGJh2oEj8wh3HkXb",
  "key22": "xzkYU6bmBAaL1UomHW1Roic5TRVADLL5AtBqDRNxLxpYSVGu3sE1YAT6DE5MpDknDTvoipQB5sMAfcxrnQNKvJL",
  "key23": "2HvzdXD287zT5i8UWFspMQV3qE3NPcx64S8hxoK2aqhwMbdjJwweVrtP88hLNkBieCELckKgXUBtFTqnQ77NkKyN",
  "key24": "2TjuSmiF2AD4bTWMjrRKrQqaC47mrEty4PV8BRiq6BvP1RJdqMNecfSp5cYo8mCRt4kmx3e4gt4ppnhEpd2hWKWp"
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

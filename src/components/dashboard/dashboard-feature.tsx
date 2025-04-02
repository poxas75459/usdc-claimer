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
    "5mtAekfr8g9qyCZgwr6hX2zjqpVmTuuWpKbymP3eefGFxzfU1RaLVZBuYcji9m9ZMGtvPEYTXZb8igwC4N1pG4RM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3834u66Sf8EeLCf6xsKtmLkLXNdcK2tSzJxNpD5DyVQ4uoaMoS9LcvjoHgy3TZXJ3FczVzaVU3yVYMRDyZBeaFk8",
  "key1": "D9uoD4aJ1KSaN4vuwKEsUCwSm3YSyUHykgdxhD8QVsben2C6wUrVbqQtL2o2tFgSdMkArJja2WXZfGdEy7axZs9",
  "key2": "5jJBizs2bzZuwfDuiuCbwgYJmZ9wkeqojnY6gP6ZkLvYeGKNWYa4vTxFBT5TkaxwoWLqhg87kpWHogJ5tkwcrMND",
  "key3": "GqCkX6eaGdJMipJH7UkWhVN58Degnaz4BRq62EcV4ggphToHHaquTXDN8TrarnZUxy31afNvKgTKvhnSUkxf27e",
  "key4": "2ouxfin1yXLuczyhgQKg4pqdkusTzB69Ag3kN441TjXsdcpQ1f8fCCMyDE8yVSXPCJXqgp6q1UtTRMK8tMWpX4yW",
  "key5": "2zBLTDhmjfcqE3G4Ak3KTudijg3PmoZPEwddyJhJZ6mCTiSHcMULNJjBrij3mMwtfJR9EYTW7wvUaJohGWGh12oa",
  "key6": "3sGdo43jx7y8cCEiyZg3g6xaqgEDgY8LTzgfFmcL8efhgudcHra3RL4H9kDvDPUBFc9y55hb4k8Z8kiN1cYMZTJF",
  "key7": "5Rez2mA6RX3mBPtWJG5e1h2v8b19ZpZDn9rBG3HDfLFA5CA8v7j7a2dLcCKCZYaJeBTYeDzWPjU6ADa62pEoQFyE",
  "key8": "2GfuMXFECJ7Ekpqj5msc5twVY7K9aoq5B71GJda4h4eu5AWvqraz9cEcZNpqqntYnEHQ7LCM9TKyswbuJmCgYtS2",
  "key9": "3eFyvt7XqsFX4KQpqVAT9fJQ14jXxUzc6uRCb8uGixLG8fqvR1F6sQrr4bRR88FbNVzyC3fyVkzzM8f7BXW8py4E",
  "key10": "2KZuoJ79msbYGoLeM1x21kSFrqsDNTZbr15nBUsgpdo52BnaNHSmND4hthKCmi6bpCwj2nXPsLBnJTMykkM2mLdz",
  "key11": "4MH7h5kRb4rjJhx7yi3kTSqnvvgjP8fWGK85aM5WQH1vP8HxoDpUVf2vrjoEQkqQV4JeGFo1571P7Gu888hbmuW1",
  "key12": "KQvB3GYVo4D7tzodu67iGABusr42z9H2MnVbFU4zQakZqy3BaSCnW7RDypnpeD7JVE1oLjtPGGCJZwjFfWnXNz5",
  "key13": "2FJ6XA5yAf2DWs6miW9gqi1WEz2emi2jRpR5Z1aZjBhpNHa7SQNV3a5sBdoLqHmBeCHsFBF4mA8FvSwyLj1bh1RT",
  "key14": "biJUiZauB8YENQyUcP1us9zDSLkKoFJUPMcF3NSvmWY2Kyw57uzphYT2jXi3GdHVGaE6gGedH4cSCi718qigncP",
  "key15": "26raqAtRZu68oyoGC4LC7KN8S4BUvXkwSmrEucxx8AzYwTHQM4wzXG6vsXyTXTEutvDcBuyct6SnNLyesGsw5QoR",
  "key16": "4XavWTbDdiHb9tB3949iynAb58sowP4Xhm2uQXyQDMy5S3kWf1QLo7GHGP7kksvVd6whCGhg2rrEZxWjkBSeQ5NS",
  "key17": "3rz1GaM6r866f45EaaMoPA2yS1dL7p2oJKUbv64cx9rtNKACQMRmyLFXWhFhW1C5Lt17oS3hGfRtSwW3gyJPPRQL",
  "key18": "5w5wJdnYA5SfCgjJ5tNkcDzPNvSs5kRvXr8Qu5Qi3GJ7dYXFLnd6vtQsjpKTYPCJemXkCsHk1xCn3ikQY55vkSu8",
  "key19": "4hHE51p4mmgiTe6eguRnAbpchJ2rBnnuaZyDbKhwvEfRpfRutgv18wSbsN5AS2CYL1zwYKPxgSMRkZx75rJYR8ed",
  "key20": "3t7pmNDhYiDRs5hg3MLoHPhb4p88T8G4vBy5EvhRPHbMeCKmzj7kkDuTb1hDC1uAZWD4mhnPQVDmueVsQ8HcPG1A",
  "key21": "5JPV11KHitWQ7efR4xYspJsAygJEu99CizR9LMayEUP8gzHXMTZ4xsLnCwrERhQvcBtxZLMsUDP3733NxXySpdAN",
  "key22": "4HiJGjBx9U8dAd9UxGTHDPXuE4ooxscHKVMQsyzn5p15n6tAWuNMt1vdE8uwG3Xyp8dXa9pdGky8aKDQdnsNvmhb",
  "key23": "2oMDViP28QrEha9Up8hMYHfczqFog6FkJzcMTBvQQM8AeJTXoBJo4LseqFZiXD6Mux9Ncs4TLSC5gRBPjE6BUfxi",
  "key24": "5irs82n9X1ZmTCDhBLPMCu4HvSRDPpXEzFTS767Z6xqJNTeJ22RL71s5YM3cLt91Xbvd3LwqeUUb6Be3dEea4yyc"
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

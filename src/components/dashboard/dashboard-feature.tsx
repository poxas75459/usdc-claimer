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
    "4FkrieGUddd4W7VqaAdHyrcBJGpPBL1qswijpUgaH1Ud8kL8uPu8s565er1KGnBuC3zUMAvXs8Y3hJ5YNkDSvrVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmpo2Jaznw8wMCg281j4Da1HL6C3UPyVzCg14f1N88C9jkXNyy9er7TgNek3jpHkvvhA7B3z4gy92rBHgZXkppd",
  "key1": "5s3cvGGdFWf1LK2dfu7WdhNfa4EEwGwTSiaWomCJBfFMN9gA3SLnmnZVtAe6DSX1SGwVacPaWNwUEHAyqTUT3T8o",
  "key2": "66wAa6PgjiQGNWAQWTaahiEuMqHbYnQ8gxVxn2VnH2Bttc2SBHbHgPqVFBNdPE4gvfRCccfRjTMgSnrD8Fgth6nu",
  "key3": "3X4GQem7k7VHQ5CjArK6hDHkHUwDE6ERvJJuf3TDveQjMNLL4kQ1Vfs6X74NzR53us26WfCR5NzUV4t4QkWg2SyT",
  "key4": "pKS3GKQyThujYvtjnnfQYaivnBbvhrytKgs1Znfrt2XTEzP9bsriretjZhwpaf92TKx8xCh7paarA5RMvukU5Ar",
  "key5": "4snizxnrRmkZWwxWF1f69YV2Bzo8n4uUrcSeVksefFWGXMTL2oNGDaceErCKGWdscVy9bNcXtDqunFFFiTw3NTZg",
  "key6": "5PZsg9sqqsvDmywWF3dby7xjWt3HTbAkAaob7s4nfJjbBL8KUEbFQYc4iGsU2moARPxQ9Udpdg8gCk5AvCjyrd6i",
  "key7": "36eQs8mgic1H6aCcRzQLqvysufF2u11LckK2JqFcV79imDPxaC7fAhDGgn1sppjamcQSj47zAMzGC5y6ezYMoxSv",
  "key8": "5pTqc3rfDPmsnjmphW5HMvgphv5ETUb8GNfE9poGUqjMpUn2rnriwHy8NzHeGbecDmLMFrPMii6zZwTVNsRVh2Xd",
  "key9": "5deda9P4rroY4EC3bdMKxDY7Sj12BKxq9gruk3WHFcp9N7k2qqoWhV74gZuP8HceSAha3qhRBTGa93FHozdaJRv6",
  "key10": "5E9m5jtgxfRujLPmAnHoq7eFsFkhh6QYL1Wg2rh1XYCtnRSNhEQo9tPkf3VWTouxxUJWnG8ughrq1TYDu5H32HcT",
  "key11": "3qxmvvHTr1zqKQPYUreqffYLp2cHGSdCtbUs8ipmSk6V7HhwXhJu1ujyfXfgraCc3CcgU7XYNYkgbJoVRY5xHNPc",
  "key12": "4BurU51ARF6ypsxtMh3KD8atRixKFXq3Y6X5otXZ6QUvy5GMkURHUequmrYUmmagxsZQ3M96Qb49bkX2VFGwYLNr",
  "key13": "4KbPhCsWj4SEkqxnnjv72JpVXrbmbzspz3xxxaEN8VNhk8eTwyqiU3QwFNrTrVbVf8HeL68GVq1BcqYs7CFMP7Rk",
  "key14": "4Hno9XBM568fxntRMR7YXtiWgM8beXTmJVAoqtdDBu3TWreM6GKGcfBEHvYRXCng4QFTZkaSZB5hZwe8Ra3mRJF",
  "key15": "3GhdSmc6TaKzwvkXXV23hwaufNYqnU3qyRKkgdAoxK8kzteMpeVrgHA87R7TSsHvjwovd5WBt53QqTY3hGfh34x3",
  "key16": "nSqgoMA3tkxJFs6XnaJMUfHLCNQQXj2Uef8gDux7bq3V6ZxsvLWRGD8oqBdnWMnyGHYmhTxtD69bTRGUTkyotvt",
  "key17": "2qETrnMcZwDk8YudNXGgJzZznWUyNCFKD2Wr7LCasKxzqQZfkGRekmqoAeN3snCJm4fwJW87BLq37gHSshk13cTu",
  "key18": "4wycvXiUWgkBwzxSPSoxqVB6JrZ5CPgxsRyskaNdazPoyAq94iK4fY68zvtpsp2RfH2hsBgQkJsQnmGyUMpp3NM",
  "key19": "hoe246JSQt3EnCum9seSYtfXS2mGVhNzEMWmHoUBiHTJjWTyRtetATBXPWv5qVWQSGDd949ZV262cH5MbSc7LZd",
  "key20": "eo6f6L4vrqimCFAPNwo74aBicCLFgR3NZaqhebdd91QjSSuyPQWEuaJPWjTA8q8oZeUTPVL4SNXEETB7CNVeoUX",
  "key21": "3fo7jJUFT5jANeWnWJ4MBZz2MuqPdDhUNJH1C8sG8DwnimdsQ3RyfVZpTCBuvzmawTSuSCFs5i1ysNgdiyxRukCC",
  "key22": "4EjGsK1p7TT6aKZLe2mAZJ2kWhKGSG6k2CKzWREAGACJXcBaNhSeZoYASqgh6MvrmekJuyTSs6Xiysa5c5x83VHM",
  "key23": "xmqRGkxyF64iC3u8fu4QrMLJVw2BqmJdq63dafojShVxS47dByZhNFAepHFR3fcRg4xEtcKdPt1ejgMGuRDnLLW",
  "key24": "3f5ZGmSo6zARioUQvZoSJUpdFdhrg2FJU8wRWy1Xhni5XT47USj3WuoN55B9tPwK8cAwCGXMJnBYKQ7eCZRKkYri",
  "key25": "52HzcNXmnhSD4usb7dWJHV2uqDXsuV943DiRqSbwavTqwAzgjypfcThBrkMw8UjUq31UUcE9PcP93J95MGyG7ZGR",
  "key26": "2ZS4d21b868MZuTADMs4q1W53wagy6CQYWx4xWufuvg1EbV3pcssdf8F9A2So8DyUYQUTCqyb7mTX32jCDwkQXTP"
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

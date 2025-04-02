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
    "5Soepxh5V377Hvjkoa3DbA1BedYFzRhHnzoY8kbtSiFRkxVqWGGZCk7XcMmuB5M1UiV8d5bxCG5ZVMp2d1JPR6gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52krevk5L7ZJocxfBiFGW9mWvcxqWnszmpMAE77PHw6MKhonxMHBgVb3Ht8Qn7M5f2zVSh7XWmFzTHJWuzBfbg3B",
  "key1": "2VuLcDZ4kXgVaEdJg3mr5obVQy1VYaUMQX8aGDwRUWR5GiC7fjqfx8Ji9eGhYduJHbFw21tYdkFCBuTqMV8TneC4",
  "key2": "37EvZ92iGGYYBHnmMfUmkfvNNUGNXbRqGZsbNCvzLeXN48LtdBRkaHQwDBbQYnfiLNVkLVGp6Acw7YEjYa2FmGjt",
  "key3": "ietJovFyDSAZXMZjQXLW6TM2Y56qn1E2uN45NXwyrJLjwNNPJmFxpm8Aw6E2D4Tg4xD6rEXZinrFMD4J2Wf4uq1",
  "key4": "2p4Wa9LvvGVoXqq7RFmmhZ3b294UTTjfttNL3daePTuVpBcRWiAsNxicMvmC4zSgYu136Yf3bgg9HEBWveX3ErL1",
  "key5": "4AzUExyWZnJbemPnyH39GHQ2v2At7LJoebGFJk4eY6hsRo6jujJGNntzpVHDB6VL4AYPwYMxAeFaRyEnD7vSf3je",
  "key6": "2x3m7q1eWa2mRYkKoECfLMPPuY7SUWhxQqG9eZADxnrBXzCigfr8TiK1NZ6ECrYsruLoGLGyPGwgUC7ZHKrjzfg4",
  "key7": "eT1KPSRZ9E82aovoNr7L6Sf4Evbp2KAzUYqd2Z3LPYYpr7uPbgeuVL3BoqR4TXYSuaxSywnsDbJkbKLcMuZCEbF",
  "key8": "3FyrJz4gHmShDS9kuX4xWwpcT3f3WxWDtbzsP3c8gxSx4ixM2VYgeZBULH5AEM88n6PVJP4piCkBvWGxJwExALSx",
  "key9": "ANcGx665X3ADj65qGQ92VNXVCzb6vN6tF47HTAd2bejrahScN4Y8kPUrsJSDHidSAYsYRXod9rf9fdd32msQNGw",
  "key10": "3YVUPbFCMuqAL9EnAs3mygxcfAbT2333XD3f7Voe9komgw8j3sq2Aj5NvRrDsDdpesE15t5jU1wGiK4dKSQYDCW8",
  "key11": "4JM66SxwyXq69HKu7toaoEyuCBXBakxj3kn3mN8WV2C7UPBuEE5C7SDT5UXQbJW8t7mp6cjz4jt5SPVVLBtrx87P",
  "key12": "49GtXD28eFpN11uCJutJbGdNS2mLingUo3c6bdARETRJeQZnHP5YpuWDAEC8BLbAWUW8GNpz2NfvvPLyqHfSnvq1",
  "key13": "3LFSEmqEJDTAE76SyJHdvPDF6nb2L99oGyMim1SmnDZVbQLRELoUUMoX1ULQXWAGjQFxkGJwgycdr6vieeFjuRQc",
  "key14": "3LeHBwj2XmtaCHbB3LFCDi2B15sPcfcg7fTQwnPrc8qGVsAfyMY9zEfnPsxm99QRhEEnJAVQzihZkHzgg9KM7z6X",
  "key15": "3LBwriszVZrhUTLRLK8PWszhF8W5AAdU8atfryLsk7LrmjVgoLv2WDcRk2iP2RHyxR3QaWJ6jzaUVxKE7wmH9e6e",
  "key16": "sj3XvyxQxggwYkeyJc2emjVKWQVviHPSnc3eGGVuoiim1gnjXgaWGdLZabCko3Z2SeCkSAf2PdLV9CaAMX7ZqcN",
  "key17": "2NQCEDLe9oV9Uw6V5ySYLy99h6QGEyS5Dqjp2scwH42N9fGh3VMZUPvT3cHnQ9DnK6yo3VPMykt7zsLxw8UZXxPS",
  "key18": "3nuYrzxMC1WeiEJrxasjfD1ATfT7rYiFFZxTLMRtZgb2iHwqQTV5PEQrdMp5UkXpJppSkBLtax4ZPuAfQUjhEKA6",
  "key19": "3sey8YUHGfDjW8XfUPYigoJ8g8s3T2x63b9y1jM2XAYTwEHdvtkK6caxCjsU8CQQwFTh26d7vbGaTEDLbSsDBCY5",
  "key20": "rwXfkrFiZVvQFb17jAhw6horL8LaQBcrV5XtnpoXAkuVQU3HpTkmJHyarzZhLHtSBCmxbxGSdLyTM7BkT45rpyW",
  "key21": "XraMCW4mXsS5uLW3v6NH4vBRVVUjYbhB6XkkE58iHg2raqiRrowoKuT1RwBARPoW4Dq2NmNAonEsDo3EGzhmM59",
  "key22": "bqheZgL2GobCc6g8HZrdFBUSfWmbxqUw3r5ePXoVmaFNHEiEQRVap5psFNkWXjyySvxWdVjeSVwYZLsiQWhWTGs",
  "key23": "nF9ZG1ce4pqQekABeHDh4S4M95XpGBkXysHwfsuX93Es79dsxxhBxWn8hK3Ri6Nj2LbZUcFsk7ojMy24d7goK7i",
  "key24": "4LY63AiE7smtzR5y3Ke75rTih4vbLEthyWg45jV25jeCKAML3rPFdWavDpgzjrZ17JWQWBwzx1XCXnv21mNzsYY6",
  "key25": "38xMcuxCGuKLJHgYKdT6QqXGnnD9vCxLQy32zYwVfe8j1UVr7znZesgGU1eQ5pz6VxcbT7732yMyCJUVYafBmR96",
  "key26": "3AUhG2crPAiwWEWe24XdgcjXx1ttLVM789SwtKfqa329S6VgwVgziBvvkAoh11kmjFPGPnuGGtcFSn9dSKBkfnFx",
  "key27": "2kdjHvQVW4RVJMdNoNPi2rKGYouBoMSSxwkq4WanqVrDtoxWjYGLkmDyJi4JaYy9gjdEaTrPsddeZQF9EUq4AGrr",
  "key28": "5ACAvbHcc2rugmSDZJb8H7CrciBj7FAyShREWRVFcSdK4bKQEMivFTgy7pL6xqASJoqESa6itCbjZ2y1Qyo5cjEC",
  "key29": "2NcLWb25LCEpi7cvPjf1fGVTKJqMznayRLjGuSR7FVLQP64uyHE1v5mmLqfmjxxUP4XnKx8YVR1YVYkMmDWBL6fi"
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

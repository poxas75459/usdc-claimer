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
    "4eHqtFr9Et5mFFjjvGyQJHNtNHEBPh7HZYnDGfBuF4eEq4rY2VBfsQbvvVjrH3hJbLY6sM17daJGSKXAHUxeWcHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkUBWPaGu72QFU9Xjce21NKiYZnAUHSKzHe92hnVyhgaAYSD8PrwJvTDnYHHoq2ivzii2Q2w52zRKqWPcvzRWp9",
  "key1": "591dgdXRKjV3Ezyks4Jm2Uq8Ae7ccFW9vc4bbuMgDutY1RstdDVMUehpd9Ywe41nGhfeS8zTZpDM3n3sJnJ4KCnE",
  "key2": "5deFdbswV5wa7Jyd89D9ZEcAqwmWhP2Zo4Tgink4Ktpz4Ga5UEKFjMcwzPVJqZVKkXDMGqE3HExWf2qmjN66fnnx",
  "key3": "5EjhLn9oAiXB5wNMLLBfqZ3JNCh2xkfMnZ3LMTdNxS79n2iL3srPm3nTRhsvQMLRKLyJpEPm1MVpBA5J8fsM79KG",
  "key4": "221MySjWUpSPNAZrdfCMb33uS2LvAECSXqPDqRW9X5v1w8zwA7MJmjceBpnfXecwxfBgFzx5H5TPgXVxrr1B4Sid",
  "key5": "ZBELCdVqhFJQNfejaMyuUnpBpwrsvNLsh35udUZChV7yJxcSq5eGxSe2DamiomxM7nDxK5B5cevgsG7fpKMX5D7",
  "key6": "3Bdqs9kqjg5s5tbcS8RbJL8Zk6jYN3eCLav5xduWHvgMLTT5ZdJPm3dYDdnTEEC3gRUW9BZRYkkaXZi1koRm15z6",
  "key7": "5tuBqax2XE9pMeBHdeRdhHKn4gwduxuChv8FN8MuetZFcuy5oTyzFSWW333egxcPXfJAhNtcVN5rKEmmnKX9uKF7",
  "key8": "hhMxC98heZ7yJoEgXfeauwCWuHMRz43mj2xC7zTE8gKTB5kwMNAGCPQVqA6UdenwXrVqWjrgPHqJUaWWwegJPMy",
  "key9": "4MLpsx5XKEt9eqA7cgiPN8aZbBznqsBwGpD3ZKuMcPkirGJ9HPijy8soaNwcNNPfmQC2DGxtqkD2RbkFt5tHMt3h",
  "key10": "3PNS3mHvGea7FE9nT9S8gc75toxbr3jGzE15YCR6gs55bYyMZUsCQLa3Hzv92xyQ8sVTDsNxEZapS1UujcYoV3aj",
  "key11": "MMNMnvMv9H1VfL1f7v6jWzW5SZ7oAks4k3UhWsiNWhx7X4Ds59wfWJm91dkRyNh7jL1A2Q5xqduuknyuYbbaRpA",
  "key12": "4E7AcXD7jPH3o5PWGrTiu2Uq4HXAFSsUVVweYTTqdJS4bSMnYMxPARZkPGskqKruq8jV1jZAFRojjrELYPQHa4UQ",
  "key13": "VDvYDVbaWv3bb9aeHBU5BqDytxVrXC845JeVwxpXSpBST9MTvSnmGfufK2MPfVXDkzkZDzhuKTe1Fvh79S3oZYk",
  "key14": "2CbCUkFf7sCKYsBtVbEqMKv1Zep8FGpKzxA7Gb2NpTwLBt95Mkk8ipfdEezTEyGcodFYLpEPtKcFsHYKLa91aAMX",
  "key15": "iycJeSLAiUuz3T5ta9iPnC5GQ1fD1CvFVjYAixCCJAwEZjQ17SYDdibgdGSnGkovKzJuaW4asQuc6dZPyXBgqX8",
  "key16": "2yd3TjQ5a1jccy69j5unS1CN8XxN2bgnztQqG4WoWXqS91PZ8ksHqQr8SUP746r8DAkSNKpoGtmMYF1oZ1vYCCnK",
  "key17": "5E1vp7kYut72Dab8myK1Vei68ny7NWQBuD7TeSApLNhNDtpChdVaALdj3EVEDcprepKhqBrzYgyKnio4fK3jZgJK",
  "key18": "5QKEjrSyFwqEL9C45Q8EKtqwqg9N9nTjSB1AkYxmKqSL176U5CTsrQbwiGznA3QcA3RuKiGNuBApkR3SobcD8U5U",
  "key19": "5cmaSfzCuoLrpsUAknwvC9oKFeAfb2YuD2MRibbWSMrpm2nXoNPaX3o9Z1E1fpTVPEAbJbYPqQW2dTokbvGrYzFi",
  "key20": "5SCv8ZxQCFo3T3UkQb5nYbuyXY8YhFVuTpYGpGUrsnAWuajoXPpo3tNCRV4gtrXRHKCeDHcW5MRD4AeJLQaB1hW4",
  "key21": "w9VCwA5Z6Z4ZMc5Pf1tMrdVpT2z5nuDYHiJtf8XsNv8BdTkpBz2iGvombGooKo1ArqQfXo1EVDS5F34iYe9KVhG",
  "key22": "676ADWz5sjFSUJd7FSky9E3PuwTbj86Fe47HV2SEzzMg539wU2QMaTZrQSCRJygZnRzDaDjbYm56jFRDeAPCXLgB",
  "key23": "3ZqasumRTXgRLbMpzdHtaPLN11w7tHxmTi69LKLbtk5BgCW5MSdjjspueCtXbSGBExLgjwg82utfBqLtuTg2wCQz",
  "key24": "66G1RgCNrzSoQBw4UT56MdjpYu3cG7uiiCmCS3DiUB7UbCkojnXfQBZ86tJmp2HGyccSDawXx4CCBQ7qQazksiC1"
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

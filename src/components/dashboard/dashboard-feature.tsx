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
    "5QWCMj2E9H5xBXbn7a2T3uXEZWZSS5P2mevW7uNMWPxXA2s7RMeRTaEYvwxdjbeArHW7hCdDVAWAAgpk51n5yJCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6jjokE5ab5PZsj5iM4TcvdHt5CqCiKHmPHuspaJxciktramdAn4S7xRyYBjw8xRRkk2QXFtEy29ofw9sJEaCtcX",
  "key1": "5axEq12N4RiPwptDy8iL13CCuRCy9u9YQSKZfP2peKFTjbnVUGRnFyWVeqMVkGjeACYNmbqRJSsprgtRc5ETpchB",
  "key2": "2SzJrDwkxonhwWmY8f59QK2ztTxVGDVi2qx4rE5hKY7i5V1PJFpzAQxSVnsbb1tjng9Ci6KB11ZABU7M4C6McGta",
  "key3": "26Yisk98EgFVNhSKKyaBMZSgDtChdr4RqhioE3M8QmrBFj5E7o1th7PGDuNCDp1bzuonpJC3tg2AFQpm1xG3EfjE",
  "key4": "2XuC4MqSCnPTQBX312GNwkBnDXMHhLMEotCrqruadt6TakDoE6oup5FW2FVxT5AuyfijNLnBCVP31kf8YRsJ8p2e",
  "key5": "3Ey7F8mScxRVucC2aktyvnvZgBcoqKfxJGz8i5bqoPaUdBJfeH3JDYsZyTBZX2AVGq3BGZ2UygzoFVnBgAwL4MfV",
  "key6": "3Ts7jt3WHncRcFEBSzaRvfa3Gqtep9JFBTNMqGJgZNxRxdkXEWLEsD7scPmmN4nqFXy22J4qdpHpXqi1XK6ueXZK",
  "key7": "5AVXXAqtWWskeUwKpVRYmALCoDDaDDSf8T3eU4yzh8Y4i5MnSpJDaWmrGwcaV8CFMMW4LG7GewQBgr9tXAAn8gWk",
  "key8": "3B3o7vRQcvF8XogLadobFXDDX81peLLweGqAZQdjLoxTTkDdeXDmr8Emb9Ui5Rg9fHJUK4ofYSWNXGeZhuoo4jTk",
  "key9": "noM8SjyBmq65ddBTiMpqDgLmtKwoTWJvx5wKXARN93F58LGpAaFFivqxd2tDNvWm5u9Z1MVqqgnYww3cGyDGbGQ",
  "key10": "w7UWrtKzRmP1QsmDDvy4uu75F7dkKq6ugCu8jYfakWDSwZtEeKST7CCTnFZw1nLJtfKRpJqR1ke2HvYEaSxmiVW",
  "key11": "3Gpt8fWuiFGmBrxkCBQtifmMehTMc88oQRwEp3jS332KUdsKXfkD1NMLBzsyQBHBcNceFy8zzw4eq82q4MNK33Hp",
  "key12": "HGUU9DREATLyvrPz5VMjTWB7LQFkxdNx8429EoAoKjdGkGSCubgHDW5knE59zm5U4SaJur35MDaKtEBatrBvfGc",
  "key13": "2vHWQzsc8bN1BEGy5t1nAnQuNVr1EtfLq7pKKnryjLFRNjKJ7gLuJuMn1ppK1QkHucMPFbK2HibcDgFaQZy1i5Hf",
  "key14": "3irsNBAPF12663VCRm5VFTY8fYW2p7S2DXFpZeZYYf7S9c6T87XnS3sjQfkxGaMYjpEud2y2aDoJXADiACRThG9S",
  "key15": "5EWkpodRFcaxY3U2fRNFb3QA3wDA3CL56dqAvbUe9a9bTsPAUgedLBBQUKDg1MHavLFhjnACrYfrXT8DVzgKMh1m",
  "key16": "7Zkj7fnqP1nshoSndNQofEMoV9eNMiyysk9Dj2ASiPwgZtpaFjKTBY7yMv6fqGQeuWr8ppR7F4Kuo4S415QgPqF",
  "key17": "36xJ4GGmXAQhDcibtomroVQw5K9Vo9hZ3NuuXgAP5UG2XY2bi3j6KT9kLtqoGfpitcUT7BUQB1KbFKjwy95TcsEQ",
  "key18": "4vZiyi49FtHKx5nPie6puCbqsTYm7xZoyqryMeegwjgib7REQLBDJdcH77CnnPriCWhvDwPzk3oGmXVvBbWSgfDK",
  "key19": "2NxXjFZkLcAsL5gbYZBjbaf9DzmXcN9fKaoZsYScq7ceX7tTdvMJTVnKC2B63xmM8XMMsXLGruvJAB9119B7dR4Y",
  "key20": "2CNnKpfZEqQuoiDVpw4iWzyvUpHLsLmJ3gFz9hnpTna4sV6a9wHfkeFgwdPazmeEgiV2ieWQKhX7UaSB3DxW1PyH",
  "key21": "41E5mV4N58xjJmZDzZzEXupwgJ5xhpNciQVQAL5xL1i1H2L6MMcwkh3Z28k1HNg7eNPA2BH5dEH3XUd627EYezqF",
  "key22": "37EHgDSFHTs3sBhVexrM4YYrpYYTpVMjUcNjH4cyHwbMXfu6Ec1byZCTma5tecZaBshok2KyxogwT73Xa7H9huS3",
  "key23": "2SM9aRMrn3wQoefDx6saTAqfHaRa16vo7c3Eca4cGxue7XPkT7Raug31rm4uZHn511ufLa8Bo6Kksgs6e2kKLMsk",
  "key24": "2v197ywrt3JTmeMNkdW9X2ASwAaVKKgcMvHL9ExpM16va9DNtd7zGpfz8mxYM8GeCrTV1NAYUfpK9VR9JsVGabjw",
  "key25": "MBW2guWh7LzjYx1iQjQH3BPhpbNyhHMw7sFSg5sDAZBahxuxB3UF9P2yhzSNpyYsZNyGfYxs24dKuRqXzNHoc46"
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

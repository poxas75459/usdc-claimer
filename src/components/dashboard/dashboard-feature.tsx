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
    "2sqEqR4YogJuqX1ENdWDPkukmQXe99Zgp1GU4sNRC4Rmc8oPoU5SSDQNBEWMc9t19s49qDKE2Pe2iYaYGyGeSs2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdH96sWNpNaxHx7rmLCkAb76X6NproTUbkj24En7Fh1WumT7NUdzdSjmv17LLPpAsqVfdbBiGbmqfzP6Brdh9Bv",
  "key1": "36kvNfd6CfDX3gGEwPcsAFMuRCwcuAnkcX5TuvJeVKd6EGebUFeAcPfKqFbRgS4SsRox6GJxfCeqqUvazCkMcz8f",
  "key2": "3xgGMaZu49sLyLtG3qCKS1trsAT5rZ9afYivzA8aa74FLDs2D3r3zVN8VhV7MC6FuG7L1CzS2ZUbJvJiDVkbepC9",
  "key3": "3TjXVz157jR81gc53bhtGjZKWSFSw3kt5tTttXr2VBrpkZ9x8DqM4rB34dFVJPUfbtuh9K6fynPXTsQHTGTAiQxv",
  "key4": "4gkn7XLsu3hANPKUAuMR4A84SScCpjpF5dd2xSQTXZjP8QKb43tWdRV3CM9B54BCsq9VzcJ9RQokkLdxPFXYhqD5",
  "key5": "4pYq7kHABQ91KqUEMrp8ZfuCM6AeeJhZXyMGUKqY8x2vBC1DVMYnT6FL6NakYUhmHYbcyNphX2uoyxtAocxA5YbD",
  "key6": "2oDpuDxGW1RNtmtNhPkZtAppLUPqgCAu3DXz1rGkqcwGBmvdCHw3ouWLEekRU1HgzKajuU6bqZqXcnF5r9vLmz15",
  "key7": "3J3B5fQpUyhmHf585YB4RHeg1sk8sxyN1qVMAwCeBdE9Yj7qWBrx5jy3Hj1Q637tbE7W8ohPrPiPuTUd8eAnXJXR",
  "key8": "2VCtEL1jxc7UZo7thNvoz47Fsn5uevftp39xpJm5L9iDBLbHqhMf6XTzdcbkF6FSQ5RNBvMPrR4Eje2Ja1Z5meKV",
  "key9": "4NxKsfbYnu1mSnspfyKuiaWsnHy1Fkg6F4sHMG8qv2cj1cSQi4Jj2x3F8aBg3Bg4LP27YKawU5t4ZXvVPT56kPmy",
  "key10": "rt7gK5oXeiAoYtfXQxkKVAH8ZxpM33sw3qje1ABKpE6nEDtBJwf3cgUtE1LvPf22rHUGGerkCgxG5JwHiQu9QLG",
  "key11": "66qjHDm4wR4qMk333DjyRqmKMytWRZyQ6WUj8zmWUZwd2ZqMMMjGwcP8cZarpLDW9a8dVEmMfiv3gs4Whbr8NnW4",
  "key12": "a6ueZgJZ9kDHRU3Y4RUTNosagA1Vnw6stBuv8afmWx8Gm44EFBN4edtTWjHoTBN6kfjPAXXV9RM5mer3H9Xnx78",
  "key13": "SzN6FQC2wWYiCE1nJC5ugGmpB35dEbkkYyW6cbj6GiqGxVdL3KNJUT2WD4MqfgFFEhqgYGWmWJq8Jpzc1BFZN6n",
  "key14": "4Um8S3xYnm2B6Y8BRF9yzgWnCvnTNNEefihuyawMo4KzxfWQARn3u1drpsn1GihykPCCjBfLsGmrYZxGEQCvgdSQ",
  "key15": "3uXQcKcph6GUgChvmjDcLSj8dw59eiwQjo3rDtSGjFUtRpqWNKwkSydeAmCPTpVingRwjT7zrqqXJTb5dpuUErkB",
  "key16": "47AMwi6CFo6ok3Ht1xYYWGDQyed6wvpzGHzno2jErxmV5my3M9Z8NXiFRzytpazMwnmn5eXgHLFX5qno18KxT9DF",
  "key17": "3cyEuYG3cTi7q7xkYURtKn1TUteKf83fW4GXSzSo4dBgZ5upQQKC9yncYdgpLgMozTk5ZbDZyWWPUsRqwVQbPxwY",
  "key18": "DqGLTRVQ1Mo38MezZqMxTD5XqsvxuUGzif9QjojYAoFEJUTEpmowLhhcoWfchkhVuaZNnyiiexhnL58mZV3AG9b",
  "key19": "5mnZN3wLgFNpkzfxiGzojgtk32KbeCTqCKZFTuXD53cPoC4xEtTEPcM59m3HdQ8d8c1A4GV7fKohQ1WYi8ecU85W",
  "key20": "26dYAu1DKZQ5Pb9jcGE9VrzrTCidquBiDNGwafToxx2KJ75iMcjBiCNS7BvDnhSjsEtYGSU5qqTw26Ec9LKr7ZbQ",
  "key21": "4aNeFNGEZyqP4XBTGBg9MkcH2StjTBosXS1KY5vmeaTbGZJwCtZ9UkNzMsb6ctrYG3pjru5XGGAHrXA195qQPWc8",
  "key22": "KYzQMFKFeVKV4vU8MkKxn7AGtQ6ew6M6eYcTPVhdtFMVc4fiHa3wYyAWWXyEqESQqaB3ZWtJ5MkkSW3CKmTwqf3",
  "key23": "4S5HJRJr9F3yvHMZQg7bR8dRBQZwsF1tQ4BAJHapDFiWkcuQ1GZNxzMsq5ci8C9k2VkSMqn7DtFuJbdCERWNhZzb",
  "key24": "4q2GgFK3LCK3nGEx7mM2qqTtiWE3vxyxTK8T7WLw99qzHQqFhBBVuo3h15yafvkQowd2fMG2FBELP2KDjwPTyySk",
  "key25": "2HVCnEoNvAL7C7Rus4sBayWs27WJBrnozVrYtaSEwRZ857nkHut9fsBeiKKarumMRkCxLngbFG641uKLDbMdb99w",
  "key26": "2PmPhGqv1jf89RbVFiLKz4J6SS2tZZ3TBARrfRAzzDATBG2HxXvBdJf23BpJAWvammnaCQa7ZhSMsYegpdULAusp"
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

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
    "3a3hjz8sukHMRZYGRUMj43Rr68b1XDRkqWJfC4k3u3k24WkZ3ckKhJ3fjYCGSaxgPTwJNQTQUHJRKkQZ14xYdfQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFKtx2n5JVKvVnbhPASHurzszFa65v3y8DZkF5eBkDpt3cuBayYhAdwhjhULAq1ZFLHRWE4ozum7Mq1RjqveqJV",
  "key1": "4g6yVqDGj1efZUBNF3HgcK3f7GrvyooAxVUhAgt7LE28FG4DsVdkgHFQeQSJCWygebGkKj9ahZPD2KmTdntzbzwo",
  "key2": "rZvvbG9JXrHsv4d9EGwryfiXy6XeK6LdxSj87iXfcBJJQky4ZCuFMnTikWpKffhBFtFNeTVZ3j8dXTWg8tJWwYz",
  "key3": "5Jtn6UwUnm3gH6drHXbgps2z8HztWy5sqJuoNwdkykKjDPoDmewKotKXMGzx5FgheR3EYExVf8Xh36CMZqn6GfyN",
  "key4": "iEhfjLRAu1U9sbmUL2JNQyPiaAip1X9com63YdsPPusknDNhPZVXoCAgeJzjAFfgUutxaBMbg7zuzV1KNMrbFiY",
  "key5": "u8jaJVw8Nh7a3FHGWMxnByK7YzKrUoLcHfmEudpR4zt7rb3qqEcW8FhFUYiRedEpHNRmehtwvJFR3RDxwWJY7AB",
  "key6": "2ox35QFoPfna8pB1rhtkvbS3qg8Uf93gD6izx9erUN4d3dLU5hP3JjQgHo5nSSoCjRwXrizLw5QULxC5gWtmrBUf",
  "key7": "2xFef73tt2p4BRQPhonNb4Mxm2N2fFH5LV9vKoUzzzqrLbLNJFz2jHVWC1mQShAKUuMUYs9uzYXU6aSSDAENC7Wr",
  "key8": "4871j7r4J4VqbhTfd1iKY2crza5xd3nELuqmTJNhCD6vuUKqwNQTCzPiMiPudjgZnWV726rhanf1sx2amAo2vYv9",
  "key9": "2WLTTyTs8mLVbFdBLxtQzKQjxmDQbxA2gjHN2jMKa6TfNGwsC5xaPUoNkihtN7KBiz7yt1pL4Jt5Uop1jXAPAjEj",
  "key10": "5QqEa5kLsD1e2xw7jCc1mS2yQK439tuJWxQpMVK64CwrWNt2LKq8mEfaomBvBC96m5xvT4JVWbTLjXmB9ruzdojj",
  "key11": "3c3ofmYaEV72sfdTi1G2EFW18ZHGmKcxkmrffw333kScNqFKs6QHSRzNSjzN5iP9U5sEp4ogR92vCjabrk9Xz9xJ",
  "key12": "2g1fYCAHikEk7JnZRNbKfThgbSoxWVvVEFp9tqGJDq96iUSW1tc9bHATMoKoFP5yCsJyuJozLdbgwJZfaPvHtxHm",
  "key13": "2yE4nUEG9gF742avchkz2wayYHWcBLQ45rt5EcQ9KKpobUBH8RzAQLtpcAZnSKqKBpJDdB4g3w5yxHG9RHCcfwFA",
  "key14": "4vWyKbLzW5pucA7DbopD9RBSdwcoDxSmpkUNto137qHuV79WHLMEsFcDzwuVyjpWwAwzaEk7wTULQwdTa8EDm7t5",
  "key15": "66UDXBnWzVZCFknY32uTFFX2s5qyheC3NiRFq8DSZi31KQTYk3BB6b7fh9Ndq86izKco2J5Uvpnhf7pbheNtUBaM",
  "key16": "4S1XfyAU3KTqfWhUkwRsDjocU9qHRikHgvTHpJGHhLcsQ5diZqfRcPnJ8UG34HFtYZmMHChMxVremUMvidPa2PcQ",
  "key17": "2i8xFAhcTbtc6AwKFj2W2uqzDQLVS5WnFabhFb7gCiQZY9RvC2khHbSLYRJgSgHFsCY2sE7Rxkt5AhmpMJjXy8aR",
  "key18": "33oPX813vXSdLQ9LwfgVxzpQBiVJSNPKhE9Kt1bGwgztWnr1S7SJQA5aDMQaCFvsYpcjivuMeuYP6LH1LgvcyRRN",
  "key19": "2ByoeXhMh4PRbfBgUd5dUKrMHtsxnSQrp1kxY3G4UrkXeYKFyKCWnSPfYCXLvwuhfxX4AeSGUN9eGdUJqJ7CvsjZ",
  "key20": "5d2j79wrXYmXJMsVL1dRNWcJju2aeZAxDvuyLNPFnkFSa4SbzG54JD8xMR8MP1xCuhyDsF5TCiSJMXVdAuepXASc",
  "key21": "2XCgB2sqHDgQrGW7CiTNiY2KJ6RuUU97pk1oGEyt44UicaxPmPKHp5vw4sFr158pXZNYRN8Xkyrdp8v4BWVQ8kN9",
  "key22": "2wopNMofQ1tiSNgSD72mqCG3JejwUc3SmXyrjd5hCYs6A832jNZFys7vY7QoBbPgBZmSDFFj3v3rmAte2tZ6Av6K",
  "key23": "2J6NYi3WBe18GLTTkoYPiCURGM5yi2ThaxcpA2tkUgHo8EhSjRxm6CKsbWKVrbwCJVEM3BDfvsD8D78C3y5NrA9A",
  "key24": "2j2vX6Xvp56xvx7WfPk84SJqkFkvuFCWQCmjcVEfCqeEwVY7sd5UHy7iKFUs9iYBte5FX22uuAd4jodWVdN4CnDK",
  "key25": "3N9tMpN3ZfPKgU3Fak6DTY7FWCbH5H8xVT6DRxRtG7AGnjjDUzVG1YyKRDp8WTyX66vqHrZfkR8vsK2BFasnq2MB",
  "key26": "5Tf2MMUqCNDPMzCVBwC3e2zU7x7EPYmbtCSCKrAMkNzvngaEMCrhYnBpEZSNf6QLg3BiVYe5UjYpTPfdoxqCvqah",
  "key27": "44M7FSuxMro7Wz7Xn5m8J8de6uLwcoTn2MUz93okTqSvr1UkKE1s1TwyywZeNoLNZ1kUJ3zBtRgegxVg1McgVamb",
  "key28": "V6DEvXVwH7BjsNbeAe7cXVFdLEW2o8ytBCSBXWpXvKUSXU7E8oFM7JxVeZPCpeWfScaeVM66wdMwAAKb55r2nxv",
  "key29": "3h3ULcsiC9gsY7VwTw3cv1EKDcZ68XoiwFNiJZgposJVXKF81ikD2saHnTLuw1Zy3pvKv9xR4kSqHRV4M6X1zmBX",
  "key30": "3N8tfpuudf1CDKLt9xooa3NXGxUku8YAqHLDXaULTUtRa3RceHuqpciTXEssdjDf1626BxSTEHBwoEkHkE1Jq3ud"
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

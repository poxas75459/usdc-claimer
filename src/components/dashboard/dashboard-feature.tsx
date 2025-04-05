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
    "4KrDSPeNf5GWrLWe7K1EYFMorWsMPSiahFDapv8f3hscp2zNdpWnqwTXMS5J2ZWZprGRzJkSAaHnD6H8Ch1rmAUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "565NXcDUmU4LThHDxXwxc4mYqLArB3Tpz6A56Cd7wxD1d9seiaiHk3FSgs5s2AbzkZBntExEqZS1fGm9PSHZ3ViU",
  "key1": "5zgKMMATDTmZc117XgJGfzUju9u7mpJhnKdgGGxUdV4zFjUVtZAm8juzQNwQpSDehQFiWLnD18RtT3YsLjY8ma7S",
  "key2": "S2VncWhXUyyzifzwJfv2NbQXNhcHHfXv5DXAgndqDixXaxwPxmeeVHHQMV2TbN8THnGiaxHDpL5r8qPGB1u2x9Y",
  "key3": "5Rxgr5hKyFsCRhvM93TERfJpB6549WQqkWhKSExVWYh2ZycScCYjmjoCnJBhSPHdUcaHGhjUcV3R5rfYx2s51YRn",
  "key4": "2EoWno9PWBhr9DFHJWHbS2fM4khtCVE7uYrd8toqTdbQDvRpSbBK4cvsBtkmCjaD3N7n2zxuxML3grpNFpx1XrnP",
  "key5": "vuMkZvxuBiPiHiGoqNEMiWd4MGyHWQKcNf4rYLdyh3oCegRuvgeKvvqZXqy3nsCLYhoHpfCqPLPpq8KhYFuTmFq",
  "key6": "W7W1zDtNHYnJ1kuqhUaBAqCYeicmCEeeii9AWRp8NXk6wyX1TmF6uE34aHfPpViRMfpqMNjZNENdjhiEDytf5wd",
  "key7": "5DiFyf4kJzCjXGm7XGZ3x3W6V9hh1K9Qut2UTjdQzCBD9ot19W8JDyDfe82P6F6xe9eYLHyHkHNRfpYnmAkkF5eu",
  "key8": "4W7VuaUjh7PJKN7waUhsULuNQG7btizgJZ7CqoJ5jSVB4CGfvL1K1MFF34kDdBayYwCQxvUhhpR95GCKBQZLaWG5",
  "key9": "rVGZfDHbDJuNsp2n4jq2WJFAj2sPDVocEgzLVYgkhppSZcHHJiZoE9YyFvnWeohLfoyoVFjASE6gLVVKTwiRVXE",
  "key10": "5b3bjbyx2M1J1kw5To6JLkmYY1upQp5hkyetz7mohpZDRSNRqpZqtjAHYRRBtZpF1NRDDa3xpzYfT8oJAqA85wrJ",
  "key11": "bPAxSfo2pm1RibJmNG7twFjmPqg52NDcpUnwypEp9vq3hHP3ysr9FVEj26HtvtZQKBgtAqXET4uEso5FStFgh2U",
  "key12": "56vYSYLKniDfitvyAzTZj95ZmunriMqkLQzqzwWNDFnxjgUvMR1JqPCTrzz8RyRcTBJxC2AqZbJehxHzwTgpR1Ne",
  "key13": "5ispKUmz3ftejkQC2mBtRXtzcF6F51dKYJE8Zc63VnsPbotMciNLqWwwsmQQHJidqEhk7HHAFoTJc2RAujCpTpF6",
  "key14": "45ysJEnbDuvckSiTbGP96AexDLZSrZjf1QyBZ2DH2JeKLZexz1qAteCM5RAAwib1tDouTN9B2AxxpHoe5rYWkXPo",
  "key15": "3MuHwBdN8h4vLG393Pf6aCD4igUWNEEZtE3gip8PHP3Wvz14JcEPtVRMrRp25qjeqAP34FPwDqfWTJjVghXYknxr",
  "key16": "YWSReX1p1NzJNFdCXAwkfmMi2jcQcCGY4UKvDAmzYVBbXvQnHYXKgbKWwmFjgm3UGqq3CSVUbW4e51JtKETgN5Q",
  "key17": "VQZ2Hq35sesFMFSYyCnuA9LAXURu4T7RSTFepgu7VGkak3TJ5eg4VTABTFJwGbkzCd8mHuagRFxQ8vsNs6HpdSS",
  "key18": "3nrLnrGbw9G6b1txUaXq8tuMhfBm8YYmuVXBmi9G3Ck2VrtUxX8twFtcwj357p4dQZ6eDVNVFTudm5GMTYMHK9FT",
  "key19": "5Z2XnanL6STcwUi1p6pZNPEoi83ZETrhWdhhj7RzN1v3fEgJ4LZgCdVmvV7xss5ttjZVcdhKFCpVqom9vM1EonWG",
  "key20": "5ZhzmX6abELkfU7tydm8h7Wa74SKJfLSbnQhHBAfLKuyR2qCkmG4eYsuLk7No1rtGdtyqnvh67W4xSCZCPHZz2PX",
  "key21": "4nrpJ6SH5eaoefZmYKbL4jbKcnurN9U2xegRKeXQjNTXkZcgph7b5TAPadgHdjKuGvR6XUdApRSr7QzJtqWzsi2z",
  "key22": "bE5PYmh5fdEMPrQJCe3VDXswhqfmMBRy2sbuxWVRtxGvzGYpwktCZsmYr5sgvw8uyVEnfinLVBfBNVeLVJpCdzR",
  "key23": "3mkbbtDwhNPnrPGgKvzNatcbeVYPVQQJviFta1XWLjDpKyNa43A3vP5eRpe3PqDyochkXczZg4JNDJCTy9H6zgJU",
  "key24": "hUTL37aCh6bTXMRs8azVap2cZzYZbw7X772n2ZCvqgk8tp4iJm6JJN7xcmsozYDGefoK9hgWC5ASkgC8KpYovRN",
  "key25": "518fg5LCVYQYD8td9jeKDhVSj7EQ6UTBofu3E2om38kiDeLQasj3bgLMXSgqxs9rB3mcVsegp7Ro1yQyq9NT8E8N",
  "key26": "kSyvWsma42djLC4ti4sacvmAx8U7AsMH91iXubde1grwhGk4UMfCmoHeJgvdN5hLAPRXnZ4XVxVNYFb95sttDV2"
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

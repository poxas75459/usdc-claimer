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
    "4XvJNFQMghEjaFWJh6UvWPET4zZaScfva7ndDZc5XWnch3z9XoVEX5g7uooTydyJ2HBq8YxtYBLGiGEM1TjWkJMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQPLbS4sQQBGwLsJfT88zhiRji4cSV4oR9u4GWe4o9xFPqnFGhUBnbwLkxXBBw6sxEWunU2aajJL7Tu9mx9EwTh",
  "key1": "2o5MoqqsAaMQ6oqzVPmbXTvpnyKjPeYJTNwGKGMmBH5KSvAn8PwfsyPxqYB5NeqNwj8xCELKxQuw4xKCLWv4tVXx",
  "key2": "Ddsq7bNuA9HcFVqrjspv9E9WLoJgcia8fiN1Pe5dNbtFrQPLnnRbAnowU1mj3WYAMkuYya6drEYYDubTmCsPT9T",
  "key3": "4AbMJcdwNN6vVJAx2UdbBxh8wrgpoVRnZxqMh1iTSudmisnxsu91Bo6hBMKefTPeGTtFuaGTrHwWavH1uJM1tPcZ",
  "key4": "46hpeChniy5gotBU2iEMVpcZMrufxzrPmyjg92PLEcyvPFH1GWPSDNSSGN6k7sFsqTLmqAgXEtmMgYBnEHaNRpNs",
  "key5": "32XB3XgDU62XXSA7T8gSEkxhamPXmtEHExxmiCh8fAB3gL2bS2rGSLCP8kYJSggK1Qc59R2BLorBDqeDeN2UtQY2",
  "key6": "2BbgbRLMGYdTJox746NZiZeRGsC13qDn1oqwN5Tzyc7AmBc1JvYjzWF2oUPmNwUiJbqK8sFMGBmfc8mFUn9nR4PL",
  "key7": "3GFo35A5QLdv7ZZn54UwXNncpUVom9wZfBiUTYZHhsM6NempX6tr4htw4pMEYJMN6hcmVmdueufwZzR5ifQdj7g6",
  "key8": "fWgev2X8wEnxsm1LY3aPfyKGgDj38DuCFm8UfSGmWUNp4pWFkaVVJwts2bQF1LytAeXvPFVaRELr3L56fKfVj9L",
  "key9": "5GqwQ1FoFiQet4jaeyWcjH1z5h5ygb89hcnQkqZhBsvhnqTLQ3hovos2jZG7La51FLjfENGCFENaGr5zHUCGKdy6",
  "key10": "2Jnu6rFiqFGVqqsFcCudRJEA2hAn85pR1fJUHJKQmHumkNLAryVPUt6kZce6p4WfQaqEo3TM6Fqbvr97Jcnqt3Qx",
  "key11": "4cNUL2SN27Tg3MYrZsWeDtdS3aHPzTMbDjueWtdV8W8MNTKFFYT86duRkTpGCdxaupthgAAYYETnF7gqJpcAyyBB",
  "key12": "2oF635EqiBEG2tW8sL3psYrRE9ynSv1aFU7gh93vU8faYoTGukFbQfrZhk8wD3frE9YKNknnyJ2kWUpqhy1bPpXC",
  "key13": "4B93dmPaUv3mCAbm9gJyiaS3C23fx5PrHBc1SxCE5tuJYEqvitZ17gCLhsuafZDdgkqTJube5ZtTqGBc3v99gdqy",
  "key14": "5D38bBL1CRDEcZ9GyFi73mefHEX6s98CTrWm3v9jAw8wxepaTZjiQKFmKLN1c4c9JGMGm6XgRJFPDfQxof8RGgsW",
  "key15": "3msRNxhbxKVkhzSWfV63kr3ov5Vqxqfv9QDHzWsHEaHPcGKB9keWfzMirmxmy2WuRJuoXf7DjdatZAhFNxfaQcxx",
  "key16": "52xTikhuwWLEDw9VV9GtU8NP2rEkJC9ztbsxip8pY4McM7swwWWXKQHj1TUWVJkkw3nf5D5btocRPtKm4JRoSm4o",
  "key17": "iJ88NkZFQN9JbmHvvFXPHTjkwwWho8ceHCvkeHMQ7apBxkeXdbxiqhMj5scPn4mpV4NxLMN8WhQEnqGKmcAZvpR",
  "key18": "5qJKMXUQUTHn1MTy5Uf1q71HY3Q9Xo6UMqSxqWNwL11BqtgahEE27UMRZPrerehGuXxbXXYML58TWGRfR9BZrKVq",
  "key19": "3GdJYZ6caiFestqEQXmfuNXHbJQ8WrnXa4zRBnjF5tzC2RnJsFat5Zi2qeP38eH7tsGnkRp7W6dkNMQrEkeNLVKL",
  "key20": "3LyyoqgG9sa7QAo21ag44HqywVt1a7kLx8u46nSfkD6B1LLkBJKKZNMjNoYqPpGBebasRM5HVGqPMFYdatLVa4Dp",
  "key21": "2dTXo974oMhHuf6BNYyvA3GCus9NvSdKjn79faxvSdAU3hDttvBB2AQNasrVwUeEoUXi2Loyzj6iEo5pgUi9SGm4",
  "key22": "5eh9NVCmTfJ8pLBJy3CoW4CmgyUdzmRzfwboP7rBnunWV1Q26i8UyybnXpo8cSWo8wMEb7o5LcD3kp5UfAZcuc7j",
  "key23": "4xLTSYVRqxXxiqfw71HGy4yxoHZNU1srMvpLM6dEa9aepyxumfG2XTTCroPmu4UuV2iSqQiqK9BtgSHaHmbwce1E",
  "key24": "5Nu9RYAy9NBx31V8qnX9TBWC8iZK4bE2pn2uqZHGB24F1jBkqbppGRRjsN4KE2XJGRBMjSPjx6p7SsHGdNk2Gg1z"
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

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
    "5ThBDetwqUgvqrtmpCcfmdcT1E1TZLmrKwwVR66nZg6M9RHbo8Y7rY4LXVvEZiJ6Ti4DLspyj3UpHpAQskVeQ2kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JJ3pzXNBFJiSwKNS3wR4rKCNgs8PnQdG95ND854yxhWu7WbzEEYssi1aRXfqHdunUnj9m8g79ZE6ej8Py1QMtVG",
  "key1": "4sKKvddXX428UWQwZ1DfGxKaVp87KNxP9Ai7BANdvdprF32by9syKvoi85LxrDQodKSyM4wrwgp9rRjML5Hcmymu",
  "key2": "E4uic5BvJSKPe9yNxb71WqwkAeo7EuGd1KDRGZRL8VfEAvK2JurPYjsvUR4R8FNpb4cbVEpskYoKTeR5C9jSRWK",
  "key3": "5RL6kxRkuy6wYqXWtBJnKBSgNgiSHeFYrBuq9LNR8Wp3zktrrfmQMPuJSyDrunWNDKuZD7TPb8yYkT56xWxR4h22",
  "key4": "549Qk6T79h1p6HnUNPB7vUqA9EBYhvzHu3ZPxsimHHtGwngApSukX61HS3TDo7L5R9HJX6Q1sGf4rVCNREbU5iej",
  "key5": "3ycWdecujt5EHNaMWdG9Db8yJKHB2DqoY1u2SzUj5pFW5A9cVppibD1TeKN1CdGaFb1ZKm1n9av1J37H6BnmwnBb",
  "key6": "3xftq3d3cRs9QWyfVF1H79jhHaoigGQuwZY1ToYzjGVUyFGY4HgH27aaT4HeJTmpKEGnXuSD7uTmBjEPFtMbDVYu",
  "key7": "5FNqsGcWavG39bgb6tsFqB9Fuf9TtCYripKZZTu2JaaKeK7HETgy6321FErazS56YfPPEVToHBJivk58QdAHjYmn",
  "key8": "2ySWbqX4C38k72vEuYiBTppyRGaDEUxD6tBor8U2aPFybVJrJMEVXEJe9kp2PMH2icoBsRgKccXBtNU15BvzzkV4",
  "key9": "EK2tzYjkqR3Mwux4ZxvtZo8HAoGZpwNMksTMxrKuauUXgwuA5GaCo6DVAy4ByZgrWD3G7LBLkrKxhST9cMJRkBg",
  "key10": "2GKaQNCnRyQhtCsT9huJdePG3mmrrkxF8oCwjs2Cb8Yrdmnt5uYUNFx4wcFv2chDVeHJCvrsdBnYQQF1W1Jd5CQ9",
  "key11": "3ku8xEhTb3Hm5jj5XbQquAP9U9gYpiutmFEW8gExKiDfEgZnkhpQyjvSWFysTgZiYrRdCta7NX2zAvFqfkzkUQD8",
  "key12": "36TiSiSwBajHTvNwtozZEaMQibqqNKyuri7S4uukvLXFeWmXoQ99N54ohychGZfnLEPJv3QK2xoKeicKnQcH7G66",
  "key13": "wxHkUq77YvA45o1dREB6gDMkgNueVoSVKhz5avAjf9HDA4UbKad5ccxyK6UqtCc8QnJEmZLpPGrVc97Knab2cWS",
  "key14": "4UYdS2xC178L3AjTb9E8W8ktUSZurhmvj9btZsyTSevSz8rrtak8dqWY1rKF7FotvY2V45T32wbbvAGx6dSfQAwL",
  "key15": "3Y777xZDCme9K6ZUynPQgCFbkMwvXT9yXdjJU2UXcK92xyqwQDYyAxZGvPh1gTKxsxY3XZGaUntxHuZpwHRSAfgQ",
  "key16": "6H3it1icVYzpu3fAN5JyroB4aDTbPgxxRJo9hj1yGykfcaA21ATDmDkfhvemvqLZpaNNVkxrDzhjeKwc8QSarcC",
  "key17": "4MfmZnswWsv4KtazBq2TSxpWHmuYAQXtwZpAuByGiJCL1ThYp7obntx1Jtvg2XAPeE7MPqGhLAmLkd3gDv7bb1Lo",
  "key18": "3Magfr8JDUN7BT9TSqQCWVmRYWLpVmQdp7C7ArMRQEjJ1rNXpqHXyBkK2SFm5GKmRzjmrLupFPKq4qVPUkZnZJkm",
  "key19": "36Mj4XSY5YrBZ4f6VfMD2p5i2i7xTFiRzHZjnwcMiyyH6S9R8Fhv6KZr9p2hMrnHTvGb9vcGyWNMZ7qgvxLavoG5",
  "key20": "2c6Pf2WeChLFo9LUMeWQMASpDLUCN82R9HjnQ6Vp6eR7WAK2dZbYagboEQwb7txUcaLPynHamCRH9Dfhu67YAWmd",
  "key21": "2ZVsj8ksxA9zAk5hyjY57o6bRB4hLADLvm9FxLeHk6rs5Mw74VdAwMHoNtknbZQzxe7WJvDYaHbp3ZwDKWHx9eYC",
  "key22": "3wG6ZTKy8uBRAxdwENnWxvcBEGP5kaQEfB8SzpjDYMmJp54KWJ5c83EcAShSkTCEHpJR3KXLhu1hQpTRTz35M2Xv",
  "key23": "YCkgg7JZxoqjLbGv3JuhPk9cFQ8N5uHyVnXDEzhfjk64sLCwo9ETXGhmPo4k7hUPKmWEowgNb4aJwhFVnUyQxs2",
  "key24": "3Fmr5LbzfChY9LBwdjMt4hKQ1k2pDcxtVdNFL6D4eQyeqTBNAS4YrfqcbtymdJA6HrGJuVimWJA8y9D1uQ6RasGc"
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

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
    "4gURqi3LGC3NBCCAzxiSeCYL11h8sMXu3ux1saZ2AnWbcbwiwp1cH66wme6qz9ppauf6s5PfSwR5Bm8chSHzhaVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oSw2Rfdh34tHU54mNFkG3yDYAf9yzfC7dhwrKjgeyxjjiNtkKQPX4aKSMSuo6Ba4JNzSLxyA9vHx2bzMFogbjbW",
  "key1": "3kLzpMKaMyjkKugqHTsedKXtf7nNGXFHpyu6CmpSpWdEmeAjmTmrER74NcfuGRFWWqkJFwZsruRXfSuirg7q36Ww",
  "key2": "3FD1qG3M3b7eGJ8jSVvAvpQQfJD3uWM7Mz7TFXKGTwEFSC2PzuZ2abT8Wua9VentYqVRYfjY15Bp3doFBoMYx341",
  "key3": "puVCA8n5zfUw3W11YfDZKX9ciznHNcBqmaqMSQRV18uqhCubsbAqrXf57T8SqnBAeVuVTkg4pQTf8pUieDi87Wy",
  "key4": "5prJkhLpJPEbVzVi9QjqgLCQHadSg6mBuEGtpyPPyxQEdjUVZFjtwrf9T6oZ1k7N4NYHNCviEFQqx6rbKTNz17CC",
  "key5": "2vk5w9XHpMaJMzfgYu1SKYbw44hnGtvuc2EYURtvU8MmkCtHXUV7NrJwg3bp68SUMgDo52rTf29p95UnX2cHwNFc",
  "key6": "GBjHUXZZaCGctigvnXx6WJj3GNgBT81twijUaNF4s5ntjyi2vTASD37D26SBTA4E33YigicxYEDHj9TMWm74yoq",
  "key7": "4RtyPth6YbYu2hoXKzQhJwzBHTWch8fL3Wfckb9M2RvV47vCVH5YEDmhXCtWeKsk4UXRSAvHhTqXpYRfpjoCMh9R",
  "key8": "2iGkuqsr6U52HACUqsjhZJZNsbfUDtsuCJkfmDjWwq9dUYRMod6wPHRXHyXCFXvXG6tyNqRQ9qXNDXA1TqkZxr98",
  "key9": "5tUvpCcUFHqV4swGjmUnpeZGeVU3JQ7C1vGbi5QAozULJNTwwqsnoK64BHwwxXp8T5HEAUEwXaJdV2YRL4tmbvxW",
  "key10": "4k7TzoSnwfw23CD69ZDpgxv18zup8Cd7RTrYNmzX3yADizDJo552avZ9659wMNaG7PddvEnqotmhELCapHH3q1g1",
  "key11": "4fvNC1m3Yy8jjH7DvxoPy2uszbsYxUH5jA6Pg4tUNjE8LyX1WEdvoLEQCVUErCG6G9Jy2Fhpk3mGqq9wVxuZypRV",
  "key12": "477Qrg8Xbb58vHFeuuBprVpS37ATdSLWNCkTKoFnfwo8nf2qPR1tmo4wmqb7vt6KvQK1EDCQ4fTK13FskHxQXDim",
  "key13": "3ZRc9kxLd3q1KnbxRwMZhKS1fXUCm99pXntdBrXjDDEtPhBNtB6Pw9YpnmgSo2Ud5Lii2fWgZREAZk6Fg4zGUnXo",
  "key14": "4httk1PUhvgmMSfPpVb4QvN8RfcN34jYmbLpXwQZVAEaiVPEuL9F89CKwi9n64C4Ca53Nyxcb7PY4G7RNtzoGvXb",
  "key15": "2vHAa6SCiNFJX3TCsT1XMFD14kMqrdoCWqy7foKYvdeHCnodzkGdJgvNogPKBFeXmFSd77X6xAqizEF8q6n2j5gv",
  "key16": "4VuVeW1RDo7Mrfze23PjCESuKWN9e9k3i9hT7WezjVU4iBxgeyqEmAYvrryqntGv7cwViiau7kN2n3oo3wCPYAB1",
  "key17": "5vMysQTDWhWPgtWGuLDxAFdTJ7m27wbTiGbBNbhmGZS7kQvAJNbqSvDiwbHF8xbwBZfq7ij1jdrboQrVHpeweS1q",
  "key18": "2tytDjFkETG3AwSotKqKpDkLeTzANFh2vjy78RyLWwL4LGMrLkX9jw2y2mvT7tzNSHV1wuKsSw3QDaRFEb2dq9dd",
  "key19": "5gujZPYD3uNtmGNS1MaNJKW3rbgxcMje9HyonKHePmk8AMrr7Dp8sXozXewHKhhc41jCV1zcDSzu24HKMhE14CxT",
  "key20": "TJwMTapQkuF5ckCAB5j1d4tz4jQ9Yc1iu5oAuBF5MTJ7RSiM8byJ8Jq5ks2i2Bjn8o7twbvuFSdtRqA6tdzd4vU",
  "key21": "35KbgpY6sGEWjEWNUbpZRwtQwyjPGrryN8VR3upE44YJNp71FM2eiUodbXkvMrYCRi5M2PTXHTpwwz36w6ubkPAb",
  "key22": "3iEn6PqsqwrTcApKHqFe82vipaDwv4Fzg5BNnFqjMGvnhYZ84RKGxQ8LbZmNDd3v9W1AKkGRcwBDBUq7WZW5bR7a",
  "key23": "54wSoJnuSgUkrP5BNnyWWmUaibEdJGNUU85gFRcxqTA5hCr8Fjbzv72aSjwx3RYd9jgEd9sjo845vHapVwbD9861",
  "key24": "4jSVn8cmuDRQz8PPSRoTL4rqANsSFEKsBvfLHsVf29dYVEgzf3s963rvMAzkb7VDmAgvBwDXB15hrByssCKbGvNm",
  "key25": "Zvxmgy1BXzvFpfRqpbqsiKBiN4aLegRMbB9eJ2ZTVBjVNbgSt222G3KZsKf2PkqF7U184oGgHLBvh2uwA8rKjoW",
  "key26": "3QNXSiyKqJbJGEqPAbV1o6HRtEVFrARvRmeYi7Vx1bycnNFfaKJbXSbXZxBFARZHa8pAb5WRxYN7wZ8q7Fmxes47"
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

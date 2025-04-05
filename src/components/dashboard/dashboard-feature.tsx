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
    "2hd6Bran4Sok4zzf5CzgGmo9xi1Btzhdwo9Nares8oaNJDug1xxVqMfPfXspQRYY5onN9PnM1efwEu9MLLL4PLGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xSH3jTHqDLPwpQGwYW7PQHc4CTXwPqs6mDV3WjsG9U9aSUSmhYBoMQkZVJmczyanZUFp4tJCChSxk1A7hrdKDK",
  "key1": "qv2K5QPpTGpP17RprVmYqivQ8L71nVmYbeCb26jxJc9m5XLccmaiVQnEK9qAhutiDjiMxuEUjcPM4C3FwMZSUvz",
  "key2": "47CfWqDrL4oFzXNen6sWMHB1hJYCpJPKqaSfeEfNmaZVEwGEoVBWZy65x1qDgFgmsu81tioyMsJKq6LHpW3S6ei6",
  "key3": "3e1SzeCv8MyfwCo2FmEY3PoLZLUUZ3YkzSU62JXLaHYoapdkGAbeoFiCzB1znTDi9W5kBdBXfnRMSUvB4mgFPY2j",
  "key4": "4r3Fnd81By7yqrJUyRNReK6ANWdDKiLMYZVFETm6nqmXrMgPPHQWMa3DVhDjubC2oFnh5P7uCxG4dSKTY3sQcAfq",
  "key5": "4ieouLSMConu5p371S31bPueft9dsjHAma4CKyhi2EW4zZ57jShDFnajZoSpWV12YTHy45Jub9BrhvmSLmVzKxVc",
  "key6": "3JAXhXjesWvkv1ZwjrunpxDYUUqDRN9UYpouasvDmpuVmiGjhhLtxQtsfrja3rDjrBnW75Ge8LG7CfjCfxzMUHto",
  "key7": "2YeKpHN79E8phoHzWYVtNhHSepoQpVJB4qpFaozkJ8xczqyWnZhdkyxHafhzBpqQiHkHXYDmJve96EDa7W4o5QTx",
  "key8": "2QGHSyKnETgNdJcgChDqqAaSqMYzynbsFiUf9Z9tWX77eoqPQdB8Bhq3V7WwddSbkzYACLcDVtnC3SMsEutm9LuD",
  "key9": "4zMCmjaNxCGMH44G3yQqghaad8GKocfsv9urJ1Wmb5ryyMLg8oiXr949BdpTz7AhjJ1RPKTPHd8EWaLYRvpYByD3",
  "key10": "43QrdUAsrwxsYxHeRVdFPaBqAdRTsB5PURZZKumQg28qmtJBvVKCs274bpLC3hfvo3brYqsgZhZFPYZHJh9RjsEX",
  "key11": "p8gif3UvJjgr6eSa6KV4wiAfeAFh2cj6z9CjA8Z1Ldt2n33c8ibyDWfWZZm7xPsCXkxcu6ypfNh1nqVtvRg1ouL",
  "key12": "5oigcZ6dT8UJSFzuEfs6bo9YC4tTNCz6QQYx7wMHeR36mKNVtHBXoQkp9UVhJwwEjx7jXc2bkT1X4pE85iBUWHz1",
  "key13": "2dH1JKSEjRHRSzSE6VWLTR1giLHJfRiXKqhHRrjsx2qWfYc5MbdHcorc8M5pXPMoaPTAd4tMtNHBrqtnaLhcGJoT",
  "key14": "4RG8ZJk1wLDFAbaJWgTLMHZhN2EuUaTUWqkbxi4po1SHpHypJi3p2UJ8YvhUnQZo7dxYWkngC8rkWFzj6UWzUnMn",
  "key15": "qRHHEvXPaM4Lxuy1QjPXDTr6nwQ38b8fjPSWMkjBfzzE4qNYFsWujGmr9FAWYUJgNKCMvLBqzScQf4RpQ7iWGmX",
  "key16": "9nTZTxvXZxAdt7zqbwWqC1FyPxD1p3JedUSpJnTn1vyzqsGhnPNSBXWVaFFraZnDYu7T8f5uXSDiGsnMsM79xux",
  "key17": "dK1KtXj31rXJqiPR1AHq69xm53xyHkiZoH7DsqpChgysEHaBzc8Ba5maPzcLnEVXrKyKBdqheBrP4FijRF82Hqk",
  "key18": "hvxgNTzAThjvugaQmZRGnwoCUF4b7UtZqz7CnrSTkLWoq82qNPtT7kqJiXkzi5eU9wLY4D4Xa6wYHRwQ9VjBFh2",
  "key19": "dJRjmfoKt132YJBXdadLppw6wrdr2YEjyCdrrdZMSvVcciUsiGhRAPzjLT2GQuZR97DbLEvR9HkyrQezSTjoUq5",
  "key20": "5dCxJqxdy6WTFAHnncK9HyzjvEJgye1xTe6q6nFphtndtnmoyoyg9UY6F5e67XPXgCwCvKZ6bxJLkx8uXbQDi8ru",
  "key21": "3ANahdo93n2Y7TtPb3Ht574GJzbscuduLu187sRk5NdChrLJGSwZUqPsm1ksVUYetN7zjYPPispccUiLxa67ETKA",
  "key22": "2pYBNwHDVhoQsc5EHrdKq39oyPDo8seacAPXbXw51FVzAh6vkXYGEHzC3yZnxYGH3N1ZAv4qLhy2TNjYYQVe7mno",
  "key23": "UK1T1KMamPy4a7J1mzaBpghhPsG2a5tgDa9rFKWEPpd1ZQ3bDDv8KptGXpVmmNBNXgbQg5bbCLrcYKqBF3jLPbN",
  "key24": "vo4zGuomvGbZsKeGeNHmowkRVhbc6fZAFhTwc2nmVwtgJP8V94NazBDhYoUZeLEdbEnbVmooaNQhTnpAu5dtXQq"
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

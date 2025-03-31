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
    "5SqwCr5mxtEdiEF1wK1cZyA9eUiEeoEXcigyXZgiFeDGgqU5Yf3NVT8dGxEYMmu7jSEQHxjLftgRsCMP878jvGcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iK8UksfKuhpqcRwmMxAEu2jiSvyUffeCD2b2dTc5CfYbA78cLiY3KRuuzsuf6M3tc1wF4qsHmPse7T7cwhmPE4c",
  "key1": "MSEcpvQoCCqx32EDKwhhnAxBeTe99nbADndYqXLDEUEHf6n4zxepoU5YvJ4Q9xdSti3CHVugj4ttz22dSCQjrrx",
  "key2": "32AbASQARYgvbMzasfDCSQfEEWdkfnR9rFkTymE5QUGy6qop8hoWgwtSV7BVsbV2iCkfRfsKes3bjJ2JfWst4jb1",
  "key3": "5CKH8nZM7hytELobW26AUqyqk6uCzjMDXm5ZiPZ7EgLcRNPxypN3tmT2N9JvSmccxxKu5dTJU8VdHuvCqMPz69Dx",
  "key4": "4XMfbAijerxG8qz9NyYch3g5TDzph7roDjvMxC9dBB1aXrJ9tQdGafvXKeAYtgvLBVFDkWz9T6ZaBHU2UmRC2EWT",
  "key5": "2rLM9BM6VjMQHHwnYydUUZfdSRtLBUcHjGgvtzkoFKQkfKnwP5aeTmCaJV7UEhRALejMRseJ9R1r3WGKneUstD4L",
  "key6": "57vHmCZK49wEMqde52Xk2SpuqcLayeWzN25xHbzmkPXHhmYayWmu4AG3BkVmJ1UMBrUkn9ZziBz5xPVVbGNFt2Jc",
  "key7": "4Kfso2k7WeVQUsztBwJSFEkhfHkqyFcvM4WcRmjHguU8prnAhA96UwoMN76dYAQYJ9S9a8CQqMjtPyW8aaXsqPX7",
  "key8": "65g18qk3TWvDtr2gLHS4jypDwkaRpsQNP5s8iw1EroUrrVDj3gkvVdQq179NrKPnoM8zB97mUB7spcTcyCRoA2qH",
  "key9": "4txYRrVjXtNbRSHCvuopL54VMn4AvxAPEqg9cYNANabV5skpFFHWFFsRisLYVpsMrUiEGhQ3KgUoT1NWAPNMwnmh",
  "key10": "5LRRzcCJftvhZbLKJiB6AA5yWeQsENX2FWxMdUPsS7zUjMRAqzAG6qy2Z78MHJ6iEKfVvNdX7yH8bhJNiJqMMVp",
  "key11": "43M6aeawHSVLWstSKSx2BZhYiANB2Rk1oSfpf2sKWoRpEJViEd33EGCAuhi9gzZzdXtPRQWwfbLzmysN8ync4Giv",
  "key12": "3vnJL89qZz7cX76Z1QRKK7RVvHUe1gyhLy2WEt14VXcnXDjjSD82EVBPZMiXsQyRcsZcSHg1tjuArHMuUEyLm4dN",
  "key13": "5tKyHPmRXbtBxedP44mmAHV85yTg7HvZNkbLjMngiPV8rtRipvLmV8AjpBLuJzVFyWnvyJtkvbZZBQMroWh3kh9f",
  "key14": "418bk7FYk9M2WtzCjVgDCqXnRBPVhFD6WWgnk3JUPpdKQTSmMWXRsSKRWCacxWMxKmDz6BR3Ytqp3Y8YkTr93US5",
  "key15": "F6qGmcLDXtEBEnmgdbUuK4SUDMmseievNsvvFkN66Ui5jWDj9ekigYuY865PpP6FEP2LpebYkoVxLLeVGJzGwP1",
  "key16": "25G5dJiFXur9MFMWrnDXBMRGpXQs9kqToTypUPcu92ee8E9mjkPg9FLHvAi7vCrYtTS1PWzyWf61PkcwhSb5HVpJ",
  "key17": "TcVQuxLXH7SPsRjnWh723hBHBu53i9gj5grn3cTNiTctTKq7QD2B75V1yscMfMynampiqxq5v3BnuqBc1sLPn4m",
  "key18": "3jDsJUziPgscA5zzDuvdf3PpTj8AnxMk7AGVN5pU47x8sQxcq21rHAWpmd16g5tEuzqZ5qU9TUZtUA6y2v7o1rsC",
  "key19": "4cSamKmQzVHCb9QRfwoS2KqPPHWvknDoPXy7963AFdfxAkowGBb6LzaZWfhmfwRLzr1BfZrmtBgnagppCHGh2fqf",
  "key20": "4h2wx5sDLPELF9HYJpVVnUD9FHKbTQJ4Yy32fNfeDDcTiLrFnChS2eCcLwXBvZu9MyDb4AakwJWMUFgULMQFHa7U",
  "key21": "31qbBUDHd5uWbJqiLwMHfH9jbXmVJjBLHezncpSQPievqRysHScneLbaertEV6MoFvAeK27tok8pDdwt4doQhEyc",
  "key22": "4yZxWjumjSYwk8ipjaNxrd1A8jYWVJAeVaFYGB7rcQsCmkCnew4iQq8kE8bjPpQArXvMnajuwBitoUw98bbdQ14v",
  "key23": "2h6xaBifJ2a1f1FTgjwuCXNCzUZryANhExDaTbH54MUJzXuDEd8LDRVQ5ynmxWoZeLNcrJY7Gqrt32nWH42KCB6L",
  "key24": "4yYE2S8QjnRFBrT54fMSnz6b4SyYJM5tBUppwosPHLDFMEwdmYPUxYU9RbVdU7f9zDMNEZpUc9jHtdfgiT235PnH",
  "key25": "DpdLgbH3LC5wno1ZJ3vhouBkQqo5Aao6ZF8mqDPFqXuKD1PGeeNbzKnGdyT16bWLxs7kqpLhkwm3FXjRqZSKudD",
  "key26": "4f9T5DnXaYKwj6erQ6SS7aYU5J4X5vATU9Dxxaa3b9SCD1YCcDv1LRbRcUnuf52HM5mAAFUxRm2p47zxg6ps3fjL",
  "key27": "5wC3FyqjN39XD8uNdi4bcGbmpti78thP2cLwwvt9sRPmBwY8dJsoxEUJt391opZeX82wwjNMk7hHQfQx7QenZ2L4",
  "key28": "2Z4NAPHfgDcktpYC8ipEQXkPxYBgYgqF6nrwHV8ciD7g5DcS7MSzcbb9sP8a7LKugE4yyHqBE1EwCwqcUyh2hmo",
  "key29": "2JgzxmYaGGFh5vRGNtPiP8u3BM3EKQRZ9o9Ehp6Dfvr1oicmDcg6v4CJgS71jeobPm3aTMBYJ6iAG3r3ub5Z8ntG",
  "key30": "2bVstMJGBPywDrUhBNrgD9Q9gJNvVBak6Vw7sCwYRgtniMy2TYx1mrt5FHmRFr4cFLHV7rPWDMxy8Rbzs8hkfEjW",
  "key31": "2gNeJ28MtTk41ivGVGaQNympwUB3Fj5Ho3YKmkzjaNrQwHdL457oLdsm7B8EdWVFXnZEJs3WXGbphzNMdXZLajM6",
  "key32": "3C5tEv49kxXrAzKGdJ9PDyT9R1qaP995CtnXMXwLgFdtEV8cthRCAMHzE5JtEGQUzjJjRCzaY5MnDeV2vZvZvST3",
  "key33": "2bUJw8a2RCb1rBuiwT5KeGhuLR4CKK7HYuifQfhPrbccRkDiiBnXDPECJ3iFm1VdMyNAQe5M5GvNjxEYtWDpFd9Y",
  "key34": "5tG3f1HCu6eoXpUDdumGsXsKRyrAdfpohRUz8kxx22gVRBfaBPLMfHA4zA4iDZFoctj2sKaqGFTodufyQBsL6Bc1",
  "key35": "4twwv3ZsarekKVMxFQpBC9iG2QHYhEEN1ixeK7bDAiAghFSPDLnQmAG5oukwbPeynAKJq64L2kQSbPpyzjMYE2Jj"
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

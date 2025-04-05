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
    "eNYKxxPST7rFfGnD735YaWjpqCHqriniqe6miC1iYygZZ3euxb4sikTRVoBNcaWH5pNLCEBoaxBw6e83agGC15z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7vk7GNfzwpUiTzgMVBAj9ekj6ovrMPqtT5izGAbRqjtaMgmUCogPo4qrhdZgpTReJRwTh7L8L23P1UVbs2Gz8m",
  "key1": "28toZyEZsBo8KTuAP4KvzRFGdEyDHeeLDABCPQ2rRHzmYWxaxeQAubNL5WqEqggJyE31ZZhk1Lg7s5M495np9JRL",
  "key2": "2N5PRZK2b1EiGgngqaneyDwAdj3vngqtnC4JEZ7tJbNApggppWhZJtKGNeFe3STuEXgxRNRLAnxQwxiMJnXMZmb5",
  "key3": "CCbJFkPowgNaWrUFWjEBRDr28Ra4T8xHzEv6kTTf44KvatYVGtWbDu2cYwwpd5B9Ad2SwcccEAEY7yC1LjSYRRN",
  "key4": "2DvBw8qWE7t6LTpNuxAm722BGdA6NUw41Pf9LKDbZ9BdkP5LaZTzb85ua4M5H6BeLZWYQY6fKxLbw371UAAbFNvc",
  "key5": "4bubcUTfPfDAPgZ8estXqcss4E6DvKzAic2Vte6dFuCgnArGXsC3oWjrp4wDcDPiuor4rfvxLNYUaKYk1zX2cPju",
  "key6": "5Jx63XcZopHgFNEHSC2uEi5sukWSAynnfs2JPdcHYHRBP1qHnCDaNxpaLnmpAYnZxBQfGAGVgXRp8bjs619w9gei",
  "key7": "5rV77sPR5tGnhzeNjxSXaN5UCmxsdLXNZUY5JgiwkDh9isNuAA7BJzcLrzTrFWwzX7Jh1qMVYJAq7ZEE4HJJRuD",
  "key8": "jeadxzQ5MqgnK7SP6tP1Ve7fCZ9XvbQ2QB6EHFSEshLowgqK7AzSRnXV62oQwaS2np7N2SypS51WjGk99ujo2r1",
  "key9": "RTv44AWTJkh67FW9x54Rn4sM3m8XUpR9CVipvBDN3cXFiT3beCYQMh6K3rfGhXahXWWSNkybP1xLadRAHuQo1gm",
  "key10": "jStcZmghBiQJZRnKkfc1ziKUwug3tPgvHQrKjBAu7vc8HEXFrJ6tJqPmRi1WMo1MqHLF8Pqvi6N8nTUf72G24mJ",
  "key11": "5ejNqELqESPgchVq8RWoMz9sAfZmntwAnANWhRNrqBS3ZFRfBfSkxiBXbbbvRVpbHTdyx45VPwmDCbCtwWYDaVpr",
  "key12": "26rrCcx44U4DN2ju7s4MEH4yZsTVCMQNWoLfwDDCwD4N5y4qP6P4UsdwWrmiLNy43yq2sYCM1ewonLkuWnVncTDt",
  "key13": "67hg2TiBJCzRuEDPh35gHywbuubsLTK6AHJEgZJ8TWZS1MjVBk4fYihAntw5x7hohiSKuzULrC4m2z1CetpfZCq7",
  "key14": "5oY7cE34th2G3zBozpYidsgArZgzU8kFcEP4wnADTaTGu6bA93wUZ2YpibZsBBHfnzHxdghMBc1hCwMbsNN8DrHZ",
  "key15": "464LmKzyzw39GvdCrVLSb2RcC4huCc37GAXDA4EhsEAyTWTSQadzxB98YA9FMtWYWWzeTCu1bXGnkiz8gAEbQ7fy",
  "key16": "2ARzsb8XkWpzGmTRdbSyZ67dERGmrSqgovC5vNR9jFeb6zRRn75TZ9Vyp8icfoU2RQSXCuV8N1C5eTTnKtRibHt5",
  "key17": "5iHwa58rvVYqgQ21cFYnTDSoKzB5LxLLhnVK48MsLfFHYLSp4tVK9zP1Amq6QqqoEN46YeXyE4ezW2eJDUKaU3vj",
  "key18": "5LdDvcVHzWdAofZEpjFYaNUvTHfagP1Y8iwtFMTS21cJ9ndEJymFwaRWbUKnkrcpzCcp1Zhu5qU4wFkchdJYrMLD",
  "key19": "5ayJMwfipm7uhUGvCjpUjRrn237ZTizwDExHDitwoRms1A9Ubvxu3V6jgY77T33FL9Vs2tSC8rXkaGzwqiqSDPas",
  "key20": "4cKAWidWuorErDuyxjViERe4DDn9vpjwSoDkFqQpCwSSmJkboA7rnwEimhVh6eqcTEK6rucAm3BHNjEHp1ZGAQPX",
  "key21": "3h5Mk6xgC46FhDJzH7QzyUf9sr4PXumH5MS9CGNCCzzJNdUNyUEZRjqtXjCqTMFySBAP1RkdhNq5HFJJbdRoA4tS",
  "key22": "5ALWeoBU1YoRGQYRB2kkqvLQapVzECrKwNQ1SzSYoYHRYACxS586JmF2hFP8Yw7KtDYdxY4uMZSxFq5UY8Rpvsr6",
  "key23": "5niTCx9hdLknZoHEytAwmQXWDxUZNyZoDzWNCF1KYGBqZ8sRoGznhRBuBCWpHbxKhVCuXngeveTtQNpW3u3vPeRP",
  "key24": "5pHmnBQRRHApZ6KNbG9Dz4rKsR8ikvbUKATXtjHQowE55ep9VCtrKs5uhHw3hVtgxW4TrYGPbpun2RxGYfKYXUn7",
  "key25": "5Gas1kH4Q6tvqR7ESH5eTTRGBkwg4xrVbpLsCDwZvZ69vEPEMNCzY2zLhEKpDp5K1wRa6Zxi8GzBBxrezUtRyNdX",
  "key26": "35PMTDn48EEHgKcErgr8573DP6rBi4mSGQ3zzXcdCaDnfBMrw6q9cfAqmiea2xzvaL6vXZABWAxKke41nSPTo8qF",
  "key27": "3as8JKtis6CxqrTkQWDQMZYANpycNAGifTSw3rmWzLxuhKQ2fWNH515bZULEtyGc17JTyKYDscPvXoQy1BtNQL6F",
  "key28": "9opbpdQ7dVqSDoFFE9fYpCuFfk8ZvMUz94dcgbdSUBFF4J2LuJ3busGXsQpVbJLLS2KCPEgCxmKVpFbqAbvwFYw",
  "key29": "4WyYTN7MSZann7KmsDXwkji87mGrb7KjNaApbnBRwLAPQSBSyeiYdNRRctvrKE92LbLcnHxFZXr2uCPT8Xq15ZwS",
  "key30": "3v61k7GHMfHxZ1fMhgyPWhd1QsX9P5J6vjZ4nKxd92QsQZLYgjzrgp8UFKfWSLcXjjmiP6UfphcnRmwjqUtSB41y",
  "key31": "3muRyqg2WgbNxWoDQ3WA925vs3kCYfEJPrupt264HqSjQPpk9g1zs637cxRv3ugTv7bGZ8q5eKSFhHcDuiL8u8e7",
  "key32": "qi3NSXntDtqPgg8exiqpTPi9k9XE2sS4zLXeQgkhMSNQK3cWvfhSJsS27xWvy8eWdH7Z2taXgRwNMjjyPDz9brL",
  "key33": "4rfjUsUwFsWwraC5DcggQD4Q8LRaKwigYFFdeEHbJhnN5jZpFwzPwf9n8gUb4c532eB39x8EM8CysjFj8Q3Zsej5",
  "key34": "5ybT7dBh3tQYVcFrD6g6SX3m2J4BsQJBqJmGTcfiGcTiGNPR2UGXDUAFcQJjaWyvTr47acRQRhyzT63MAEknizqh",
  "key35": "3881bFQ88KYzfJoQj2rvK46641NMN9YCNP4YyyqjvhVgxhfvzwZ64dmZ5TanVVfRjQscvTRSkuG8G8huehbzZRZ7",
  "key36": "LEXcHDJLedjbEpGfnP7JmFd1YodXS8CNq1SC2U3XGGd7YqYrZsWRRczQjwgtfVPr43BQ18myaVivFGZK6yrMsWS",
  "key37": "S3K9SRHm8bvvpirPbo4sKH6hAp26F4jTjK6pRfmLKcjzyq9G4AF6if2BW3cfZQs1pq8LBmocQZncLr7yP7xtZ6b",
  "key38": "6EPx2qfwzk66E8nhZMJXSASopEKf7QhqTKgRHa4UPvz5rmuN3T4Q9cFABRtfG8nf9zPtsE1wkjuKbANfMB1awuL",
  "key39": "3dQC5oLnggeM4SAubFWQJ54wzJSWcUo9Qp2sct3aNNz8h83uhkAv61JvcW2ye14WkD4PzHGRNvQuayg3ebyviWeY",
  "key40": "eScxf44oD6gUDgxPB2V3YMgRE6ohjZhBMfsiFUpZq4EBwq3ZV7yDihNywdQj8ufevfUSDowQSghPuZVPxCdzZeQ",
  "key41": "2PZQsF4Si7ffu3niy91CrfPR7j17BsYTz3DPDpqP8vxueGZ7LAkafyUyKnuhFBENpeAxJRHWmbfQoWegU8DZwkbg",
  "key42": "2Ztu6YLVSnSFxccXcb74RiL4H7eJoAY6YzNQHhyLh5rH5ctF9vHgB9N9S8knG8df7FLBtAhTJbNuZxsPAaHTA2QN",
  "key43": "4ujDMumgeik8sLBRmgfQs4b6VRwy3Pw5b62CCgRAJYussSea7BNNHEy5uXDPg8u9wVQByUvfaNvNBgzTdMshW21c",
  "key44": "KtisTxrrrxSNn2EFxk7tfcdTWqZtx46Az6NAEoVYegfnR7FavUmy2EBRF7oDQjaYwPh3S79Kuytk4E4LYnCiAwQ",
  "key45": "2e2LsDRtdrfRwmnzPWe1B8NFNnvr2zHV9Qgbu1u4uuHSHZwQHBdwHu7nLUSXCmFfcwrJMMxRBc1HU1qW3pbq5L22",
  "key46": "4mYF1xdL5GVvh3YXuZSoaqXsLZqK61PKwD7HM55KGhJWvdob4mjNSAfhHAyWNAnYJRQx3fWrxvGESgwnGp7arUMY",
  "key47": "4Zofk1Uut4p8PMCyWqZ3B2ek9uAgKKg9NoMhHjxXVqNmrE7SwxuFSnX6nfEvNGTsc61XCKHLtVoqCpQCFkrxRbDR"
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

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
    "5VtpFrUfYAeLGzuVWHSKQRFBgbLPTkX1Tz7BKkRQxZAHGXhd6rqDsvLt6hWbUXwT86jot9ULTwXu9bWWVzhh4DEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4zuSF5yrjkFtKN87MceE3jgJTquxspBiaxvbi7DnjRyidDy2ceVaj4muKzAHLym2GWCWT51nv7kaxMf3fW356i",
  "key1": "3C5D2thS5oBPxmEN1FqDNpnns97PiitaJVmWjQSQ9ZxophA14toBoQSRJivxwUWUcEP7CiHeDKps5Kki4AQYMPzN",
  "key2": "m4aqGCVVHeYqFDazJju4ac5JFckAAPii6MmAALAQuRE9gzf71fJjN1b8mTfGyM7ySAS7dy6W6ibwpLUXaQKNEYZ",
  "key3": "5GzpQc7c5p5ZFRCPNAiJPPWnzHNJoAhYnqdMxfCteiwEhdUceUuLymsnj1sQQ2NyrGtmdiG6mn85x8g39b71Au3Z",
  "key4": "jMqhM1LpUXtzWU9gBub7Sbe6fDwT7g6k9ncnv6BCqydQb1xGRp3CXEZSYwV5bzXHd9Wn6V5tM8PT1gjudgC3RRJ",
  "key5": "4id4PWVZLLtjBjuJoDeYrSweBm4GhHomE8JPWpaMLFS76zQFi5MYomj6iivPnEeNMZsCWYCH6i8e4aAt2Gv8KMzR",
  "key6": "2dvbC5JDRgFBvp3HHLWpeof8ngSHnp32QkH75UNsTSAb3fugHbpQCP95pqV1CDRwJ5Ubp5ZANc7LzS8RSZS7Hyfw",
  "key7": "4Wgw6brVDLyaCGvWVfssdXsTGh8FrYRiRPS8BNAZ9VzuRBrBDE29Yzvshi1hDW9NSbBX7VKPszYWEcvXpw9tj3hC",
  "key8": "4JMFf6dKX5R4oxe14mi52j1Y6rZT6iRXjZM6M68k7y2o7UKUWtcZMVYLb2bZrmWkjNoHhiG8d2Un1YyBKsWWjpKe",
  "key9": "5dsswQAttQ9n8NesC192MkeJn6GGoktudh5jSLrynK8uE7khdFNAc5PjM1NT3QerCU4vQDmarUBAqAaPdHUSompZ",
  "key10": "4TpVsj5Fy9eiiPLpXpsE2DJeV1vpqKXRbaxkh67CZb3rrVz9SZgmvkDYRB5rDzJeYcbpmboAZ2QpLZWCPWa6dtUC",
  "key11": "4dfPDy6smfuxsUWgWdsyfgH8HnbRV9wNAuFFzyVaSkVNswfhUj15ZfhD5Dn8pM5q8maQCLYbeBkrVGw4uPSzeqpP",
  "key12": "3zKFXJ1X3h7wGAkNa3CmwGGH7MibnFTtvgQTY1WzPSDXN6DUxoYhNAswVegrMdtzSewAW63iU4gCiRuRfBnfoqBn",
  "key13": "2TDtA31r6c4WBkVEyakMYZqF3uq4MgR51VEzT7gZ7rRs2zg1JUgwshDfTt6ydyGgb7DPjBjUqi5ZTVCimXWDKcS9",
  "key14": "DYgUATfGAkvzr3LoNxtxV9TzHy5pFmLYfkBoder8RKGMH34k5GWhNgcfWmWwBaRcUw4kDueS7MZLHFN2wFQidCw",
  "key15": "3KiLVqCdXGTmehipCy6V9HNtX8y51ZbyFJBLeNS5pwh3RSPZQejB2NnGpKFiMwdaJwMk7MQUNhqf98zLqtxKvfDg",
  "key16": "31REvwVRTbuLfAUZMEL7Zy65EntnHBktjh7j7E7C9xyKapv5QSwZK4iAhr9XruKJ7ji6oXM9bWLwRyv8GkDcA1yp",
  "key17": "34ciwdJ4PKxkWe78Ksw1xvSUZx3YsRo8kCTTDtr82bQ5SuUdpPuUSBWyWQQPGd19zuVpnkjmzW7mJF9qGnppwKvv",
  "key18": "5ub2r3JWRJfJB2BSrpJL53DFz3ozjYsjQYCqpvLmbUJFe3C7dhj5mweoUBritnonJNZVQZrwoXL43i7e186JBo9S",
  "key19": "5mT9k77hkbJVg93qAyiSXHU4JEabi7tMFB2xQ8bUtQTf8obRrPC2MbxnegigZxemAikFz7UiUieGPVgcyKLTz8ZG",
  "key20": "3P1uLqXAMUrVBrtSRmmynqWRLaU59fe8Z2eWFaCQxkcyGhnXF6o7gFGnRJN1rzEExRoh51jESjGZM2zh89NP2Zqt",
  "key21": "3Ng1mSZ1tWSuU5zh1BP9nKYhPfpqJYQbR8YUybsF7rUt6juxw5RT8wuHca2o2iBqfc7n2YUpKPVoE4xHKqXXi7Rv",
  "key22": "2R5uVPvhEoWMrCHr6HePGJr78TuX956j6YV5ndoDyH8VgbMjRoeAeFExxAUmZuJLAiLjZsqHmyWp39qLMDJP6gXw",
  "key23": "3tkG75miUYjuBJ7N5gAEt8SnuNq2s1j2gobq3tk9ry7gtMUriRix946WUaxMZsB46YawTk76uoNoEQzBN1XNte1n",
  "key24": "2S9ZCo29RPUD2DkcehAvNPj1HNHzshC8hw2ZSYGu4nmpUdB4NPnpamY7SWnEHmA52984DnwMFAcvMyp7vwVmo1sw",
  "key25": "4JizxfjPjNqrorAnMjw6pd2RdAv7otwDQypeMv2nJBovrnXsmv5TevUFCZS5f1XM75sDCFWrcwEdbGQ6Ws8oWBhg",
  "key26": "2dhAjXAnmbybovGYXG2gz7PgfJWAT7jczqoPZQ3FQ2B9ZNqoKWtbJAniLrKXsZeRmSa8HJnxLEuFy9YT4nmUn7Vd",
  "key27": "67m22HckCz25mPxqpt2yF9fKF7QYuBTMijNggUUTEKoNWyqmFsLULn3BXneiK3NdZyPniJupcQvkMxnjoSXnbeb8",
  "key28": "2ASXcR9eiEsxbbMjePgCLquKL7sJu6JnZFVZVVLEV9kmd6fwoQbkxxW6Cav1hkvN62MPQDKqtUVxHetpxpDoC7sQ",
  "key29": "2mYaGgwQtdD9anoCZgE5LCrygPyTHF1YNzzLCZ2rquoiXd1Mkye33sddMb1ckFDhnFjyDFpS3wQUgLZ2cPMdoWY2"
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

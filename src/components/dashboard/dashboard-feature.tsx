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
    "2eQX3HhPfj5BjGQ2MuWk2j87WMFXQSBMVD7Lvw8B8BsksDABQZaHtfauMooCe8voUadcehmo3vUeYjuK2mnqVeWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1cc4Q11st92PsqvzSpCLKn1LhfxsE9i8dJ4GKz9qHQgaVmiZZcLgzY1qnBTfs6t9W4qzdvqC2VERcagdqy2bR9f",
  "key1": "5W1W28UR9YzNXooQiSEwwEvwjw1mEUPYntug6YMWZjopvZUahMoFKfvrFz1iEWxzqKgVT3qFCZSrKcH1czUSp1sX",
  "key2": "4Yb8Jw53aBCJvBS4Uhk5TBAaVzEBoKhWGn2uHkqjsDMg9a2LBJChnLwGmiUVRhfjP5pDz3dtuAb4DQbj2Ake7MsH",
  "key3": "6trr4tiZYsMQiDGZM4ipCzu9priFt4pCwTxVD9AN9EBun7NL52rL5BrEwmHyYyNF5mEvHyyuFeE8V2zh2HQguvF",
  "key4": "21oZX5BgWPBptvv1uZWcyEKyeER1gQK5wTbXyWtchjEKduWLJcsnkqnmUX5rPLV3Yrctu8L6Ke1sAbz9eVL1DmhN",
  "key5": "36TDnw4zb72vu5CSVGqsPEJanVFCocMwRL1FCRsAPQKWNKrZBgpT6ZUckmngircQpgKwt9sag9VqmEnrM8gdDmus",
  "key6": "3fGKP8aCP6Avp3sHbWhZUi4qDnpBzAAVjpYdrRFZwhQ9fptBFwz2RZ9NmRmfXJkR9Dc3YdgueMnPyeGy1d6nTau1",
  "key7": "3SU1wsixPMP6LnQEhcy6YFRgCb8bk4uE8kQaY35fJTqUsv52twswtEpd7Ko3hzXDPb2azztEqmzDKshfrciGVPFt",
  "key8": "241GJK6N8wWmx6GMYnKtuisygu7iMnYPvEWghC2xcnhUJUPSg2aQr3eCNeAohougQBXW99GTDrBNHHenEo4mmMt4",
  "key9": "44z6e2rCJP5HeEYW2hCyT3FCm48eaJDHXD6NwjKD3xiR8NrKwFHHdPN5KnRpLbbaBNTUznwj5FrADLmQXrKyWc1k",
  "key10": "Q8HRehVbFCfXpzwsuagFAZRdQFZdL24MJ7qXde7YkgefNgWUnJiDmqfMLxjxycsuF3ra8VhjahJq2Tu7ruu9g7K",
  "key11": "5WSH7k5TcjnCZPK6fWNRGTwVRs4q5g8ZfQJF5SrUmRA3SJbGA1sJRWjfthDCwrdnrrVJv2NwNoucaTwx4RjtwW46",
  "key12": "4y5cprWKHvn5e9aeWJoEGNEfwKRngxnFNy9k9VkbR722TsUnrtP5WJcZPevdyhdFBFbGDbgDThSaeigmtM9He6AK",
  "key13": "3edRG8fGUpZvbvLRe5LbXe3AnLtdQkCZz6U8mMXjmpqV7oi3b3sk3mYuYepqi8na2RZyyGUfuwARnWkodnuERH56",
  "key14": "4YrTQh3eDWCDy2oSwrxLoKZRu4BuXDvrfRYwsBmzAEX7L5KorzQpMeC5Gz6Gbyf4PbcHjxS3vexHheHd92P6bwqg",
  "key15": "VvCYAPo7ALmd6SR3LDXxfxEWtoPMEGxPP9ZDUETTcoRZbdYwJgqMmAB3kyfF9oYqeDnEaGQDzXg1jgzJwpiV7ws",
  "key16": "4Mum7K24pZL4WrdpKCPR2oUJAfYhYii2BUfhi5Rnmce3s4pcNSVzMw94JYrRa1ZkXUHFQy1GjdNX24srqdCPesgi",
  "key17": "3jpT4FsUoq4m72CkhEomwRoeoXknjef4NrQfjtJ9kksjVMZKzCQ9qx74ZUsTqAU1PrF1QgHivu5rikZFU9BBUBvE",
  "key18": "3txxc3nHGiCjThdyn7iPXBsiwaHqto4dcxjH7ekSpYs1dE2bWvvKrkPQdhnUxGKBUnKsBUT1SVtkn34369TaKuMR",
  "key19": "2u11u2xv5tztx9u2QaDa6eZJWzE6SiMqXdjSQaKGeAVGUwSXTHDTHzJijNp6CWmTM962kzk5JzLX8McmpDTXd7JB",
  "key20": "XXAR8cW7FMmFcbKqWrQeco23QwUmxHJWowFY7qeTmd3nrXoL5AjcWATEQh774E6ZosxMetfud3iosNwt2byTDhX",
  "key21": "FFTM2YWhV9h7eLFY3vNia422mC9NnXq3vufyywTyp5fht6v1NxQKBRyza3rzZzeTpQWMrGMn2JVzSwCJKNXeYND",
  "key22": "3nEwDo8Y24SdER9ug7a4nEt8Q1m4VwrKTuXGmsRyudQraL1a6pQVi9aZLJKJSB8NhquhMUNywRnQygWyFM2Mfx4a",
  "key23": "E6HEFKtHrkAYfRcmigTtCingwVM9LTNpDjCMkmGYJdamZYzDBnvuCtCLrTNEDcuZTVLaPU8KE7BT1vT1jdwh8qK",
  "key24": "1B1ZNieqDWuJvMautyMAE6Vs2ePckTUC1D1WqTXyeXDvgVpkbbPn53djoQoDze2AaWM7RcLrRdf1xurbRSmic5x",
  "key25": "Fndy5QAmfps5ryuQmKPGkMf6AnkqFRWHdNASSj4D32Quy4gj3w79qTiHBcQHfiqTo9SJDJzLhKBbUz5e8JokPCd",
  "key26": "55jT8pL5wzLgncRfaqmies5jqMiBozQ5Y5tRoQ9XKvPTdftaDbAUR9TXMDEiX4JdKwRJ16W55vpBoKs7b9nvpqm8",
  "key27": "5pkJ3q1vzs9WZF8QYg3esmn1DqSChgd2JwNfQVLJXYGCpDsRcpJLMmxht8ZmyEi8XPJGoJTPSQbvigKMCWVTcaGU",
  "key28": "34txZMdk3FbUXDcziSvEhykmbwqJ7yxnw1rxQBWSvpWLt8H7UU3LCYYit9v4VMEVa5zRtzcPmHjSvNwhGzHZ7B32",
  "key29": "PAz3K1rvFyiPiy2JSyKP23H4dSiKaqsyQP7UrNUWA1Xse8JMX8MVmMf3U3xYupU1mtRo6YrxCnF9tBw6PRbWTnQ"
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

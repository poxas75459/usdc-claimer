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
    "mhdqgRDPpusf4F1ZeLQoyEkpnerPvCpkZH6h5FXQ9JzKJMiPCFWqua1RpdAEF6YkgUqMuNMGV9jv2yuLMhkBGxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Xrvp6zbawASsSJ2oueoepb2Hm1LwfZLhqnKpuG4hxYse5MRVu8CNQTSKPgU18NCp5YdN1wQH5xoJjENcmY96mD",
  "key1": "44B2KHzWi2CTinqbk5ECUdvdkUTPvmWGyWoBF44GdQvjpvbfzEw5NWhkYUtosHNYNVZGx7snqQU3evNoPYJ9vSF1",
  "key2": "3xbv6DmNSekNgTLjiEFQyiErQ7GosCJz4xBYJK2SqCxHoFzCaey9DX4kFkopJf7BKfnsq62md4CAfGZAsuGxUAg2",
  "key3": "2SQXoqorGACN8Xp5acPrS6T9mxcumrjb2B8MwnTYk9iw69kW1wvPm1G2cy6PSw2uZzVGGjRyXFjfQymMCnBDd1qk",
  "key4": "E3fRK8LX7C4HKvcg1Y7Xhbh9nfS5Lj8hQQ2nUccTJihoe3cwbQWvhkQWWT7ibq9Yk99MggyCGcHZ3N7K3F2Qhqg",
  "key5": "38KTT54ycmPaoPoev6aT1PZEBVfqotpCFUbJPQjjYwL25nQ54AAkLSPDa6LxJenvcKxhQm39ADQfeco9DgDdtfrc",
  "key6": "56xsomkVWMda2C93hB2nvRhX1LRgqKGxwzUbApMjpioZXMQdb6qciqC7dAwJkgdtKyrcKCLJdqhQZa96X7M6pyKf",
  "key7": "3FEhrUmd8CBPmC7G3sh5CKH1yor2LqXQKFbLWYuWgE38tMgjCfHkQe79E9U4PiyKhT23Kk53BtscivBuoW424CGb",
  "key8": "2ge6hrXjFdR5btLEzwegfGSh2H71Q1UCkamXZjKcRe4VoiU7f9HRLS74n98PWrGEXZ2JMSCBsBQyHTA1dzqJeGas",
  "key9": "5sQ4E1Zsmsn8f8nesNYWbZTnMrGMo9iRnz8XyzGbyKo1h2iYE2ur77gpbda8TynYgo5dVnHbzYvXEtuYGzqnWvwj",
  "key10": "37ov8Mev4wxuf8pV3DoGgofYX6ZDZYh4HzogmdnZ2aFbYjCuCnyDFVFFRpgrKDsS7SKYhWBbC3kSYUmuLhHhE6df",
  "key11": "423341davnqKFit9j51p9e6ysBuNCDLtEPmFkVUCkCnHkXUpZKYHX4YoGi6fCCk5ZC6UocXrZK1ZGNAidnXuXZu",
  "key12": "4XGwsrqyegUcDbMgKJHe5awVvoLgVqrzFBzvH782btnuVHemYJFHT1vtJJqtuvTGw1fW7JpWTcUDJMGUaL1WCVew",
  "key13": "owcZ8q1PKVDHdydSUPt64hUghvTVUcovHNW4ZTWKcehzNVTdJGknfuJPDHLZiysARzX5h9GM8JxhZDpAFC89jg3",
  "key14": "5ZECUMMxVb2RXGJqeADCuEoRXei5ihnA7WWw1QvXmiKDgHgWQjsSaazynJnmG1gwJsoULQ9XXnqYbVEbdh8k9sRu",
  "key15": "Xst83ydiEyzD1mYVW36jNE5dtbEbmtHAvYG9XAveMVDsUrPYWyNNVKoXPTQZv3ofGhzHcwsYwkATBzLc2xG4jek",
  "key16": "5S1E67VBaUJiLZQfx9McPnUiweXARxYYFbiCQFiGYSw1bNPkGmZJAcvkd9BqoBWwuuApLi2GTajBHU7kP3ZgwZTo",
  "key17": "2E2K8s2xsfvgg8zRwQaqffFTA6WesJgEE6xawLx7TJVBnqWs5YZbqEuME348x45dYaCdje5vswnTJW5Uuft1yHmz",
  "key18": "mAhogvm6zwpvQapPQKL7cT5UM1ffDdptuVMFJ9bg9JKfvMCBbY8FULVJxY4TfXU76TmUXVVfKgcrE3AVtJKQXmx",
  "key19": "4sa8866y62jB9syf8o32b2VRTb5D3YkLXEmay4k2Y9tNvoqRWQfHreNwZEKoNbGwLryCWWNyzCJhVa89muHDnChg",
  "key20": "7EuUB6zGXGeQd1j5fTRUVghNtzNP9wYNGFzJtsnQDNTVgVFzxumnciuHYG37GeQgPe4Yb2j9crv82efYYtbV6wk",
  "key21": "5zdMA5E6QQiKnjorKpAAcy9KVzZ7hsaVuSusSz8T5Y4ZowpqLoSZp28UucWBt2K5LGEFDZLHuBSST4ydYMhWwhSv",
  "key22": "535zUa8apdFiaRp2MbpbruB3rZevMgnYDgeU6rGgJRF6Lyvm8LnaxqD69wzRzPVdZV9VCTuZU8ei746fXfADUR6",
  "key23": "2U8FHwaq4aaBEny1juPpDcgJePs76wdBsmXDL3Ud5BUwYdtNGmzthnX9SqbMyuxTfgoGrqKoAEKp6igeXLexR2uG",
  "key24": "2ASSAoctYqNv89fbxfPQwPim1zAXEcbALdPV8UVpA2EG6prTqXecm2WH94xd4GhVhMjcLfUbbY5q33rpNbAi8Zyn",
  "key25": "4dkeyFqgyeq9T5Qa9vd1oDbdAzUQm3ME3NRFJqrY1GnZVhFtKK12LNfEpg7edVeqkd2pdSfepQyf45zFsw58yBpp",
  "key26": "61r5j5DJBiH9ByMY5ZtYF1HpjKCj1nKxZX8h3B5Pz7atZM8LmDUx6RCf1zM1bdnLjnyqwfW2XftkvqCMaPzhncyP",
  "key27": "3dyxSAhpCDHLWQePnmPNB2ngH5e8kA84YX8rqjP6232ApHTMiYqR4R51bxj5Hv722urFgSzTCFJifCeiTybrqFvz",
  "key28": "M3NtQ8RHNkGj86hy9AnEFcb5MFReHrYbMi7AL77qQ3VRjGrSbF6T4FbiEnqXCRULneGb9ZG96xSs89YG5zyQEYL",
  "key29": "2xizNddeBpxtRndZYpQ4w7ZLXEnZMsw6qERWzH4jYCn7kkab7iWPBgHufwxaA9uCxk6Lisum7qbs7pBRzZcmdsXB",
  "key30": "61gQnveNwBn67StR7e1XQnvi8HJ4czoDzGVHK8kGPSFhVPSbrJSMhmJg5Bv8aJWt4TJkLm438gKXVTzzUsqQkZ1f",
  "key31": "wD3Qtn1huoaozBVikbBN94D3HCt3weaFYvkfAptgnqTSqbeSkH48Rc4s5HgQKPzjumwJQzYozvmRRbJSDaHKrr2",
  "key32": "28p73mjP3CDx55QTac9Bidzq4M5BdYa4EqfAqb5bQbAb4vzR9Bc3o7i2J4GpbN4RZaLis7vz4BnmZL1FYNPiUA6U"
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

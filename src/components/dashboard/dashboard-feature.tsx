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
    "2dqEr29ugC29Eow2dtj5QYyoTHzhaq9eoo6PwoFaVfxUYZmCTkuiaBp2ZGj54x9hYhFL369VYqNjaLiJJahbjHGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYM2mtTVWd4iADaFEFsNRz7ar2GgromLXE6sV2X8Bd8WBasqzk7Wd3LEAFCdxpKV7EFDrwB5nLp8jsCG3rHZjE2",
  "key1": "1gGBr8YodY7dEUMsFiivoC5PNYEGe3tzn1871BYMJP2UjvXDHvwESo98JnF7SG83LwFZJvoz1kzfhacujfDN4Mk",
  "key2": "3PB5b4gGdn4YFQswFzwtENTBSSXmdeEBiCBNuEJivSbUYoHzR5MdtZKabvPVCwbfhKKktsWJu9Jtzv4QHVr9Yfpy",
  "key3": "3UofT3xX4xGWVwSZMdyr9yVVZz8gB8XAGaauTA6FN2o7FdMXzwD3ndzg2XZWTwc9eVwwf2n3zbpgmLJZVVXo6Qqy",
  "key4": "g2axKRPM8SSnmz39GHqwVG9v36BpUEyHj8YXihJg1pAo97inC7Fgem2KEcV9oWGKCy4q74V6ezSmBsmL5A9C692",
  "key5": "66mDBYW4qjVzNnEtAXr88r9myEWuKDbZdMNzq65H2eabpyQuV3BpCZKqaPrKcS2ke9aTWaTAWz36xkvfYZiNjgqe",
  "key6": "2Z44EcPqHbMLfYVdr7pHvvqmwrjWajuJpy3KREhoxcEvUhC4SrkK5PgSb27ifR6bQw4fFu7hX9mPeDPYQqW8jSR9",
  "key7": "5YwuJxehMLnnKKUsvKvreRV2cEmJ38xw23LhJ7xoxhFpTzP2BEqNVzTff7zFHeBbn4NZiP3L1NbLVZYm2RTkSMsk",
  "key8": "3vooUNwCMRifTbrh5UHJPMjbxakArXQdejBEEcYiZw9QXBaP7cq6cTksFsg5gHJ5u7eeaNNBe35HwiCP7CpeC9xr",
  "key9": "2K4gYPMbLKeXVwttw29VcR6eCwQwGNVC5UM9Y73qLTcZb6djjmeMH5VfWeRvfVhsswPPktDfXqRw3cH478kcyvSk",
  "key10": "3FiGAgfSVPQPpSqahKZ8CwhQYJMR236DNvQmDwrAP5Lfi1jpqxMfeCFs86AoGskCcGgEdryFt8mmzTHAAXu59XPn",
  "key11": "2TzN2ztyWCJRXXR5mc2MGqNf8VTJC26DUR5M5bNP2dbj6YtmdSfdkDVazSkEpaxmahSN9weHM2uyLs9q8oLcm1j4",
  "key12": "4AEEVARmtx7ew6XpUbgQTn2xmt3H6pJ5HMoyjiZsNoMHtqscpdXwF65PJLm3LUKSXBXWfRLLtdePLfAXfThB5BNt",
  "key13": "5DRvJ5C8d7tC2hCSkV4716zPiQQUv3kbBongYupEM1sU1rcg9Q8ZKE9Fq7MEZNaZSN4AZvvcxKMrh82SKSemUCMX",
  "key14": "4KQg9fr9GQgtBzY3vPuMn888VHBACitocJDCo99jdG85sRa6gG2jbRt5YAunKEzxGJC9DudRp5qNBh3vE4WHr3uK",
  "key15": "24PEf6nR3Uno9uy97y9WoooXMeuwmdDT6d6yALFz375H6zUY62GnTDnuCfiz4Lp4LvtVuH6SFgDpZqQsD35FbKgE",
  "key16": "4A8jchyUPqSwrqANpNpgVhyPqhdntqPMmaFqhzvRCwHhfacp3E255cVBDe5AyfN3wPspn22tGQ4MaN2ovPfNbmC",
  "key17": "2AQRV2hgqshyRJCcZMTw3JTHvnb1raFhwASHqapqnujJtHNgfzYN7F327LGEsqEkp6xhpaWx3A2AdQvktQmihD7h",
  "key18": "4Cd8s1mZsupECfdBQiHnR42bsXSrfZqw4BheobKdMTkHEGXDZ1EJdiEDkweVm7nDsW9uNqJfoqWdb5NYD6vR397N",
  "key19": "37qmd19hVQGpjxp55mC17cpHeYkYw4wejjjhVVPaSesGVFsUJVUnMgWQ2G2Mjp59P247nW9Dgy5ChAG81qwz2FeQ",
  "key20": "4aq9VFXd8gDet4EgEuMdAoM4sjFQaGTbKxLcsaSeKZRmaZVvAQwpkq4FPYCSvzGUZ9srFUGD8YMouLHjCMZqrtYW",
  "key21": "ZbfSBQT4swW1nngvwJSanHqwCmqTuVVtnZtKzKgj3hxYsA2uw88GDN9FtLcgs1XunKiA9CuEQfantHnUAMkE94o",
  "key22": "34WryB63GQ3AYoXzXGUF8obr6XY8mRB79fjABkFPEf5k3bhqNrr4CT6Y19DtSdPzQvoM7PvBQspmXUzHszRExRrh",
  "key23": "5oGYjG3v7jAKtdtaR4VLdMfDMmBvDFeNi81NRJWLYBsADLAmBhJVZLC51dJ9UY8RfCY2FrXoayNce2TXSp1T7jrm",
  "key24": "5gPoRFpXFyWE1hBJnD2uSYqzpTCUUWGHN9JqxRy8j2hkPNvh1eQXsbGZxDVyjbxmE1dCo3tgwNKGsXzCpfuE2JW4",
  "key25": "2fCUuKziHtFHdEqTqvSPMFQkj5qfDnJE9yYVLCo2AVB4Ssm9gMrRgR1eSH9x6G1MhpvuMFNkZHtPVe5eih636R5i",
  "key26": "5BG9GN4RJ3gKSCUihgV5YKMBPQFE3Q8cGfCpYZupGi8LfKKngoVVVrjoqi5eFntMvE1wLxpzpzDzhWf1BcWvZv68",
  "key27": "3utnEwQKx3K1KfT9fzcmSSi5wpxqW18DuSqM73hxjwzpY57fCmAXGt88mqD17VErxq6AGAnbNte8CFhchGZD1T6h",
  "key28": "2YdZYxVyGuBbBv3Q6XRY6GUSaV16GAQ5ZgUXuCXb33v769MgPLjv4ViFs5VumZz1fDptL7cf39pC6mX7KoRJYHmc",
  "key29": "52DjvaiFQNAEh3XjVYaa5RXW52Y5cR4u4TLqxy5SfQFYxKKLmdy1VXHLoiom9997fKoZ6EVxccFim9hF1shdDb7B",
  "key30": "2gyjXbERJZLFkBv5jbTWQvnuASWG6K7H9BHHPEb7rS5aXsmrgGFX6pRtZD3b9y6U4WZgA3QNkuEdF5dKpB4qPeqU",
  "key31": "3C2wgtNEidTNvYQNXvjTMraaBCk7ohLy6ADCe7KFPUKfdmnzxTCSg3hW3jVd7mGPrPPabTyQrdi4qmqYhqjg7M8X",
  "key32": "3QLEo78DgEvFewnXc2EEHdFWRMhUEMTm2NMAwQCgmF8rjRQxoM2aaQw6B6Wh4C92MvH2dWaofUE4F6oPhHy7jFPh",
  "key33": "xUt8dWGZFtnQtFV8PnR5ABt4FSMRVZFUETY1qHdGfioBZE7R5NbsLB8cU477aYoF8m6s22MaDCfwUYp5dkbZYtN",
  "key34": "316PBVGozugornkPzjunfpVBYFPRjFZjqtr1fbE83mBL1v5nQJAKbvCmzA8YffnmFhZ93rQcSxfMZiE3m2S1kmE8",
  "key35": "4j1PRBuMyCugptnPpRW79ZTBbwQHC89vci58VW9fM2L6bMUUfK5PwMVQbG28CyVTCxh9r3VZFFtEQ18fbunm81n",
  "key36": "35HX57jJJQaeFBbuZHrNKWV6fEaux7AemUTnxqD7ELnk7fU3QKjFL5Qyi5eKXNmn2Wr9iPd8mCwstJs1VadnsazP",
  "key37": "64bAUQ4hPMff9XLqGhV54GMXnuVXzBSjRzVhzppFFLPjhjxrLSYFdU4qY9HLptrwkz4PiEnZeDtEYW1uG27KMkfr",
  "key38": "e3Mi2nrQ5dphkLuQN887QEmq1pGvViN1PBL5YwCp1QQTEeJAcWCN9QurEzg3N1mryj7BFvogCCxpYdhzW2E4GyT",
  "key39": "4qxDuR2qXynE5dk1ZBUqeKvZ7NtRqb7zt7w7cEf4ojdKkJ7kSsyMFp1dQYwhnEoMbH5KUMFXhcXX8D52UtbPQ3Uu",
  "key40": "214wV953dksrZon5RHusWjh1mhL1owznrtPo2jZdrKQpHMSdHdcSpF58x4irZETqsJ6v79Cqj3qLX5uxxxXQp51w",
  "key41": "3wGQVZWFy5yMLzwdPcTn1wCHVgXYccsuLs76jkP7fM2viFAhueKwcCW7SLch1JF1WRa3wP56VWjCPGGRr1qE8Es1",
  "key42": "25HgdSAfYtdKCq81Q6xkcEFrYRAxHLfswn813zhhevEQ3jKJZU5t2D5MmsGC2eQU8pUwkzJJc6FSyLqARrdGNmvb",
  "key43": "3xezz3Dnez5AzSNG9iSjcx1h2NbwWpuBQb9faeqdkH4nkkiBekxcDs9Tq4esbcUcJgDy4qygknJrvXbQtNre2ozE"
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

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
    "2VikkGb3SY6E7o4D3VWrUjxm7mairD1pTMPzMxEsaP7cbGip9Kam1yDU6Z1MC78cXz9CySvRRWDoQg6Y1AcMDYRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kc6uMgiPGMqtzUQr2verM7HFv9dANcbbSAtKjAG97DNsHL8pGLq7mdN8NmPhKoHGqcZu76vcnZJiPFJ5cD3J3ta",
  "key1": "3BnpWibpMYmcYVYWWBUt5UTJTUEuTN39q3BscQf2cnBipmBwXBYBH82tUp1EAyVxC7WFiUenUqG8tJiNm1PDwSnj",
  "key2": "3XbMPiMuymUpo2u1S6P1Go7WyZowUoE5i4h4fMjAHw8yasaKTbWvJ7XukoAPofD8AdC7EtyGNZwfbCKZ1shU3v29",
  "key3": "52h8qLX7hFmziRT3gjv7vMc1tJZtBeys2Sd1Sy3UKAW9APNxkdxgPruu6Dm3iT8ytukBMy9g7aX3gQowzqxs58hA",
  "key4": "8wB8DZ5eJMLL6jM4mvJGa7rSUS5vVX4sHtcEpCj1XFBCNzdy99qzbfKRTbaqULg52npJNpWNRdhjJ6eLNdLhzUP",
  "key5": "26WrEhBPQugzhbMwpHjQTd13aoGB9zNzrafAGjr9xKn8xRGwwhevQWoCtcjf2nYq8sXe2F1MJByhizDxLgpNiYR6",
  "key6": "4f1KjfAUgrmgEceyAFdJe6LKjP8FT3VWU8E6nCFsgUDxu3d3mctmZ9dYeBdn3fdgLYCDYkaiBDLSzm9BHBqFLyi9",
  "key7": "4TmtGiB61a5cBVRzwhwYpDCgHfvXnS98r9KBQe2yX9v5PCVXX5kiKQSRp22QY8QvcRpUPu5WVextQg78PfZu6iRS",
  "key8": "3KMXmtN9sJJjeqZa85fCcNb89QcNADg5gykcsTHCE8ByQvq5ALjsm6hm487sccnDbahfGnKqXkY9uLb7Fz8ww63h",
  "key9": "KbV3Z6G1ZizLkQ8tvWbjoJwtxHQt9khowrZFjV4PwmQAQ7DhCR3cKnF4VG1f4xUYAT2VC2pYSpZGkGJmfcdvZ9E",
  "key10": "4q1Vs8CxhSQFGte7aS2NcGU459dCwk7TRseNsJN7VTpUMPtyX2KzHr1jfcBGUtpTAiys9SWv4nKH7efqH6KrRPF2",
  "key11": "5b4iwTeZkVC5UFnt8Jys5jWbYrQV4inqKNV4sxVX2NWiHogncR999YTGdqpHgyaH6kgeN9sgKnU9SnzyRppvUgUr",
  "key12": "49tJfpCiHthF3HFqtL1dHycQ3aZ3w8rtwAgjnCGJHqcnC4H6vsg8Ne47rkvpaQxvcH5c2VjxgeFCrpu7z7zKfH2x",
  "key13": "2AxdDuHNfFNKyEFsDkcHiqWCt88qu3ZPmB7Q4ckQbM6DhYQcLB57TRR2vH67Qa7FaREXS3Z7UEA2HScxND7UUQBW",
  "key14": "5B73xfKQjy8UgyHXEpd4wfbXDW1azbqjy5rwSQ18CrU9Zt4YC5m6JzR6QNAmcjtmFARddg9XJCip3kvgLgeNioMT",
  "key15": "3qkfyaJsp46kbhHgtrpzNUgdCe5TPppLvQF49bJvtQTK6y8hKTYxQZDS77rohgcixXXRNVC85xYiE4JG6weHXQ44",
  "key16": "29BdDugTtBo28ZnQZ5P13pMdgc665CdKW5wYpQmLXSqmHu2DHrx4Y97YNq8RwkjxPyRxUy7Wf64vJG968qRoPS3B",
  "key17": "3NWtyKGo54uKCHDJ1FuaXaDfKUHazwvodY3sajBv3UKryYJEK8jmtLywuvTuUPPMLiHxKWJZoisq68doswFtjZwH",
  "key18": "2CzCW2jfLJJoKHwqbCbv89GVUzUABuwnLHaDinV4genmwnJyTxqtpvi1k4AxkLnt9MdKzEHf9pVFsJ2mtqwwVsfv",
  "key19": "4nKo54ovokMzYckmnktU97cDLYYYek5VrdwMtiZFis9RuWBHBmgN8pAybY4CxfVJYgA8w2UpZqzHhAFSv2f2grzN",
  "key20": "56ooTCWbf4GBX8EknN6J8F9of96QohHLUVZnas626aZdtVVMfLkhL5VXre7FMqeQ4siS3BBj6oShamZRaarkvXFs",
  "key21": "4SJvnSem4Nc8VKU2pM9g8pkm53CKA5C5Y6H91ReDJEAjKNVUsyTCWjSWQgZC7ZK6nSphqqpntCnbjqLvm8PSWUcB",
  "key22": "2tkLfcNfnH9176vCkQZYW9w5Ajr8vRo1YC26yHfjbR6jmhAjC56nW7DDH5skMEjFPFHkJbHH7uJXFqWvKQpmKKn3",
  "key23": "5H15MkmbLW6xDqFj4pDGgDS6N1x7ihXwKDzSVM6h8FV4fU3rJZ2messUXvoL9mv9dnsetGrUsUgfuPXHwXgV649D",
  "key24": "4aAvbohPjFiXpJDe8oW2aHCfBJeMWRbUxP5kjNiBDaTrzKpn3JVtJrQe9PZPKUGShhH3eZQMKfFhEay2sYGshve3",
  "key25": "TvndYbFBgNQX1G41QtJV6azZ53WtKrkWcH9s2p1reb9wzZNrZkchgBhX1jH8XZ1FyHfSy1UTiWqvGeo4nphvpqv",
  "key26": "nu2kyTefUMhbeCsga9AcEQVKypGDhC65FCswWZyzFHbtr6sUtoxZmTFuTtQUpYKAk94fiK78Q9xGAGHgCvQjWAp",
  "key27": "45nKcPUTBCiTduuHUW2A7xLdyvAhs96hg4B9BfzhSLDJpfKqiPUdDDTLCHQTxc3MHfZ9q6ZkcaJEkKiMjR6dHTRd",
  "key28": "2d3EKg6Rpkz8D4pACYhowAEqknQeMeQWx7Wa3gE5AM7nXvg66m2H1nuMhgUttxf5o1GJYvkxWYyVz5dmZYUYiMX7",
  "key29": "37iQV85MqQ91TVTKYd3mQ1c4Wy5kyPWvaa5SQJPC9cUo8EKxpJUXtPQbVgd3vY74itpauNkKcU3ttty5Fsjp9BFi",
  "key30": "nws4LGzn7fXCKBnUDozDJW5psAXqeNZMnWZLxCA8inmg1j5FG8a74sihajy1As6gWk4oyYUELnZw5AURrSSrcBT",
  "key31": "2UqQqu6tikKRGoD1wwRzt6e1DFUCfsjpF54QLep5cCuUjd9K2yg2vDc3uzaLL9DPsNPBoAhU2VtAH7QPMJ3ufCJV",
  "key32": "55CdzeR3HDzrzUBtCougZn83oBjGRNgJLkjJKQd3yjhCpYpTozBdTnqZB5UCX1LCxCWHtNKVBFSc7zr2NVFiuWxB",
  "key33": "4Q3FaWVR4q3WBJf7ZSb6VtT7cSCdQwtze7ECvYCifrJ2ZWA7eQzEeV4gABHD1iiSDLT3ZbPnuwRSUV46CTGsai4g",
  "key34": "3zFMnFjtgRJ9h74W7zUwyU6mgci35rTz4Ee1gATHmqBkLj1R4fQBuxZCuaCPSJW1XtAgFcmNhjJwVtSb4Bd9dKJi",
  "key35": "5jYNfaCbEdrRseksgE8dk1pXRbposTbeGvFHPZxtozijsc5BUh7pVA7mkPwp8tf4BWPgLvYRSYMghWs2sDic4Yu7",
  "key36": "3iTu2gFG25v1BKfTaziYfXcawCS4K6638cTeYmf7Ufwa6muioWHHKPbA5ZXdCL3kx81gqUGdNFRzN7AZzjAsyKYE",
  "key37": "WHSvsHdn1qta6191NmtVkS1jZJZtc28M3fr12zZXxND1kDUXLBtryF89Wmd6BDLXQkM8fTN3HyUwP18b5ygpkn4",
  "key38": "5w6Ka4FNZxtDwr8UzjpyQKnN7fr7CasjdJKRpwXJ6RLZFANB513xFjPqcVNb6BDbnAw7WQkjbxiEUHR5Kzg7UQL1",
  "key39": "3rG5KWNtYvga8jJiTXfJLaBwzMxHfubMcJDHi1YG2jxtbQEF4YhYA4Y9h38W4XgBR7JM6dY4jyo8RFw8KjjFNbbX",
  "key40": "5DmzXGxZaTkkbS547yaLV1DB4ymwNEE2Yf75n6jmFjgFZZfKbUUH5UyTSQWX4Xt61UrXUxY7TNNuVfdtuP1xLFjd",
  "key41": "2sq3zrmdvsGTYHa9JoeposspkXuN39HEc9S3huzSLS5MQTixiC4q4EbEvNQMurt5Z2MfptUgPXvZq1HmtGwTJo8C"
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

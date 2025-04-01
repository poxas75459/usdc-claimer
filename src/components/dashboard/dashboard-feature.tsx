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
    "hS7yRWbTrQh43W2MV9MdNnT97QxnDy8zpFKjnf6kh6X5hQDAxP5kTDYx4QZPiaRcyHdQGJVWvfuQBs4sZfCm7su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382pufxpwUTfpsqh3Pr5qjKLS1DPa2FJM8v44JbG9d5uQqdgXYwu1FFyRT1ZDTbirfz2EszEBD8kDEGqVSYcccHg",
  "key1": "2K93Pv5vhKR8QKTzWqEffGNsyhfP8heHx7QAmJEuSBJqp8xD8d69R58vtLx8uRniwEbhnL3UyvEwfMpAnNDxQJFz",
  "key2": "27GSBD9eecavJDZncRnKUsBFxPaFRG31uDdW2dS7EfKJUFAUrZNF8dME5nqjZeZ1TnYugbxPfqMQVvQ98ewbLa1J",
  "key3": "BFDRkCe9Xh9dMEbvfehbebpSAkkWvTrF73HmYHhS2Q44a2UNVgMLhyBsY7gmmnSQzKxZpL1fMrMVv8ySwHewXAj",
  "key4": "5QmvQtQvNSvUuzWjjTcSjWe7Cr5v8KeaWRaVMAPBL8b5hQQr9NjWjFF7bQ6RBS45X7B56UWXPR15H9RBP1WhKo42",
  "key5": "cSEgTD3Tk6AQ2sMTm7Y88knjL46JZfgErQiYhxr8gSEegLQ6D89V1LSjzRZeQkec49tTSntiN8uUPaaMSud52jD",
  "key6": "2H8ZbmPvUuZio7Lrj1YZmszWjpxTxbg1moxNFsvNhprxzrHydQYYvYfz7cqHZ5vMztJaSubSDWWqbvH8uPhTVcrH",
  "key7": "3FfArjk8MH2FzKPhJshU9C3fPxBtqKAQ4nRBnRJjVA6WsYU79ffrzFZ7d8Jx7ZiyFNKWJcyitzZZy5mEah2Na5YU",
  "key8": "2Y1UWYitcUz16sNsNt3y3u4hYXsqdLiZw1eF2iL6tMnDWCUmC6T56hsYfrKY415VwCQB1ZNDuYELC8dk1D5aoQUX",
  "key9": "2CUWJGcWpH86nFyBmhvoDcddyVFWxtheQ2yL9rX4HgNLm1q6JU8NKejgcprZBNRWYjRFmziQJr4wvur22vkJp91b",
  "key10": "4uVJtgeHUj4j4L6SP1TnRyWYDvxvK4M4FVW3LRnLriyw16ryPuG9xmsqe6SAHZyJihbbree55kNrJacEWEiNZxJ3",
  "key11": "4kDLaDeocZefWRfRLHRAUAXg599TpwMUz3v3UtNfKYgdyEYk5Uor49ETejaS262g92wMJn1Raz67ZJBcwhUyGGBv",
  "key12": "4RRKume12QvRYf4pvB9M16cY1331mnLjNaUH2CcpnG7xcJ32ZXmSheVUHV4cv7mtRuDyyccMxacRuibYMrz2P21p",
  "key13": "4HgPNX9ERX1sNDD7JpmqJUDpBDw9dvy8XdivqW67ZFNWx81PFdJxiCva6tADzdXMFA2S2yVP3DGVw2P5MxPjQKsj",
  "key14": "5GNvZJgkSHYJLXNKgmYm1ckoyUHEJjSvfrqWYqMoNfh3A71P8qFMXc9Doc1miBZ5JfDsuvXT6CZEBHePQet41JHj",
  "key15": "5bAR7zJ9GNvK1rEUqhMNHVfu73piFKBJJWXBryickxokhhoY6MaE8j9zAapsB2EexDdkSR6VrXxVEW6dFSNzWsjH",
  "key16": "2Dn1Ags4by67LScsb6eCx8k67949jttYLUqZDXjcbYtNkY4W8SoKvoakR2huL1qVAuN22cNmmgNMLyEqzghzMhjs",
  "key17": "3cyDpGobToevc7F2RAJ5zYMU6BTVX4fcz3mDSeiiHqMc5fRifrUGnfM3YCCFFmsshgNc5diVVfHgiyq1JRz6qsw5",
  "key18": "3ATNRzc3QoeRYGjsr34fBYYAoUAVdyv8HTiw32iMhFjR3aEZ9fusScB7SEvDog3witUVwMRBLNzsNrDRy9A69VnC",
  "key19": "2biH7pyTpzHr43pMLDkuTyBJtXVgMBJxPxJCkt5NArX7v8McNi2Gg918CRsgnGTXcrnaC9QZQBqjVxyYTo4sqUii",
  "key20": "3ksjAqCwEumkB63Cz9r9BGKZEpgL83oLhHxoZ8q7TtN7wQYSCzauGM1yqzw2mv5N6NeuwYYZZinBxK25f7bgj4qb",
  "key21": "2J9WFEqy6L6Aie4Vb4WjTcNpcrtbKALH9VqrLqwwDX4STVfEpx9EcMa3HgeKzkb6ZsXGy3xsfYepGcJtQoA2TLZb",
  "key22": "3m7yB96F22AJsJ63ezpkxkTANYQpyy3QyDe8VDzjW74mhQWxc6Lp2XrcmPvVBqipzxY37UyivozwCXqAowW6Eor8",
  "key23": "eVT8TQcwdHpw8NYWVGJJwqZGBr6URAJ6ag362eYcAM2BJG1qaXhuM2yzJe3c5m1mVMjw2i8xg5xuxDkLCTX184C",
  "key24": "36cYWwSMrtcuN6BKvThc77W6jT7chx5QqZb3pmyFw8UUiyqhYnFqVtZZRdZ5Cb3N262PyerRer1C95pHcVJEBZjh",
  "key25": "2FJQzoqsCBPWUy2o9VUGsmcaiRtWaqmU6AokyMxVf6rWUBh9qnfyQWezzyFg7sfEUoNv9d32As5vVdbdVbHh7XH6",
  "key26": "4sdNB2MwdD9d6mxvYVwqX8WUKhN5iMcVBghBfc2GQtQdBJXqKmbziSLJ1aHwRYzfHVQvJHpZViR4owP18g8cDcs1",
  "key27": "3WqGD7PD8tC4MnX8vLLB2KF1eq2A1LvoPcqBboaJqHzo6vqsZQ7XuNdLGMzewyksn9jyFNCEsPz4QPteUbPuJEnF",
  "key28": "62FwrmxYfZVpptvmkx1SRVRXtst9NSAxM2FhcQA3XUKd7YxwD1hVJabjrKtTTsy7vP3mkMchpdVrz73iBKPdfSPR",
  "key29": "5yaLuVybYjAFzXQETta5jvdZ9y8nfkqJop6rRyzHPxVrnxQudQa7h5tj17n5xg9tA4aiXMgMDZQ9CqvD4qfNj1Xf",
  "key30": "4XZsnHWhKgX6Zem5mDvPVedesfL8A6rbK3p7fxGZmVXuWMtAg9bvKi8CsjsWg1GL4RZnhx2dWQGKcSeq4oB9UoEf",
  "key31": "4PL7BxinQ9aqbVkpz5BsUuQ897XZs3Um88LTB65BZ6xdNSSoddToVY79xwPEvinf1wHtMdifDiNApuo7WLDAdQaR",
  "key32": "5NroqhLog5WaStqNz5vdoxoe5txyKCEFYR2NvjfNoNSnbj9Y4jGN76pESmjsiis4tj6F9DCjanEXBpScut5LB4zg",
  "key33": "4RJ9Qwp93p9FhrjUb9dKDRu2eLB7EXUzVwQb8yzYu6ne7sPRx64iY6hige9E41cEYfePbCbJfv1NcFeSSKU67rBd",
  "key34": "5f2JhbDvsufMp1sYWkdCPHmiNSN8zcRex5ZkUzGW4EvjaeC2T472E62Dq4tQPgrdokbTTV8DQjuYQ7EWyKwSeDux",
  "key35": "eMePheH5qUWZDf21khsNrB3HzWYW7WvC72sv2rCL1YFYgxrTt8swGi5SoWfq13uFsMNx8YL1EmpnA4MUxQMso78",
  "key36": "2iogBXnxUkoeXu8AyUudTRP82oSCpJAqxxPvPzD2UQ1dZcCRmUYJYepS4GmKu3fU2CpckCG75DMbdV2omXmZ9Hvy",
  "key37": "64rixUyqPPF89eCMu8u4yKabAze4sB9nPcZGDqZpSzBkSNdLqiGrXfh8aFh1aVr4HLGNGQLX2rW4NsYZv7ZiriXo",
  "key38": "4xBCG6bkRoStzCoFp78kM2NVqZuvmEbozvb5EuaBhCpAA4P8BnSsXXX8qFtwMUk8uCsfFCV7RzXPhEkoBVEwtb1n",
  "key39": "5cLgmLkij8HEn6sMcw2tJgef4RRmqCWDeMfREKeUAaLbkLChXtiF5cjR6Bp3onUT5pWzpKJhvQUuQNTEWqxN4Hhf"
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

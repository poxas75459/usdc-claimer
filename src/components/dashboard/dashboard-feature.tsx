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
    "2GEceDkchq5LLpqogyheQZ4pr3KMf4QyH3t848c95WpPiaH8o56Gk7ogqY5qK2EK474FdyTkU3P9zVNerESY5mHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EsQuQtVgXwZpfUzkNh3crorsWErm9cffnAo7JU9teK9RFgRyhHJSrz5mQkjiYhySZyJa4bBhP3mjAYECBWJQB4T",
  "key1": "28ZHjdBvrnngNnStPPcLsPLfPG8fMti3GexNnt8Nrfm2f5EE6k4qN4feLp4aj247DGrX2NAQFaf2PqkrpY8zpgUa",
  "key2": "4usp5wP2vqLL4KZbRLvLXWCHdeCaq4RHaW5nRp9EhcguLcL6Cuy5N1UZeFwbs5BQXL91qG915yJqo3ceremtSE32",
  "key3": "4HaWyvhW5DTW5q64dqL6rBJu2bG5zchxnUQVfG72RV6Rus9fMuBeBFwSi21bSytcwQodQXvhJffzTnrbMt7uboBm",
  "key4": "41AtKRY6RCbd94xghSjAuz87po9ADDMHhKZpqsmwdWDrJMNNgHyKUAgmePodCpLYCnTMhM5P1WR86XkeVCm2XBKT",
  "key5": "4gS2NvDvS44ehn7gre3U1aLb4cyN1M43yd5KdPfST2ToBp4vYUFfGyQvWVLX8QNwDrYKTLrjyG8p8WCfGNAqu8R6",
  "key6": "2i931rRWdqsC9iocmukp7D48Ha63NGSK654yYfsySiH5SUJwfnHrSMWeewKkkTGE7zxGw4wGEnb6pJkP9jurY6Nu",
  "key7": "29SBu5ALwwjr9qMqjWuKkwqs56wvW9jid6rwUuE3k8eCwWAiKHATsEf6URpYPbM6AyAPsGsG6eLyeRQyy5xij6wd",
  "key8": "2cgGg18odXZv6rPC2Nqr8ovuoLx66WXGxjU6iDr8iPNfqQhfyQeC6e4WvduzeJ42R6GGmYEi6KW8rGFbeZ7HashB",
  "key9": "25ESK4JsAMVDZqwRpUXJmrm12HD8LaruFTS1GrvhjAt3QNuu14MrYiQwyndTJmaVXUkLLKUs5PSfi8f4da6Yy1VJ",
  "key10": "66tgnPeFkJ7fwGn6KPYPjyQqAgmtwxnfJuEDruazxEevcd84PH1Zo89UkR4wLGgycSPPAye3DhjiSbH9eTFwMkXw",
  "key11": "3wwqLJvoVG98oabHsKqvhNYaDXRnYW7ASMn44HENpj1TceeWUyeGNkuJA981dU1NCCR8MuUFBD5AkFXEn1XmoAeg",
  "key12": "239Mo45Z1WL5rEEYub3HPuv6QobyngfNN9c8wCBYTnt1VJzkSK1FHbWTVcfV79pGK6Fx88qDkDwAYSh96ydoWUR5",
  "key13": "2LJX1u6KDurmqritrZJZxRk9LPfW1qYjZgfG9VgSCEnXWD5oREvWkcHy7FQaamF97w5HVgSE5SStpNiwbAhkgoXr",
  "key14": "KWvp29BJjB1J6J1iNJCMXvdC9hFnBsA1KGWnKE4iXCsowZr6nadFVAXbX5DbMbtWcQ83CLdTm5xTzuU6m2EAGos",
  "key15": "3YCpWCdum9VxbucESe5V7CXWXktB4LRtdPLAZZF2PN4bkkEzSwSCybU9riT8mZQ1uptf4dxfSvddPEQ7Preahkpm",
  "key16": "28ockavUVJ2GDyYifkT9RsVo6cMnSeE68zsSajfDnnxRBBzJU7DZE33AmHjvJLVjXyxAYaifAuXX1suZ7bNRCHmF",
  "key17": "4D7TUvSuoRCn7nXTkryar6pXVAe77WNi4haHX4CVf4KUWdiG536wVcfBdRW5AeHgfZ8kuHn4KXbyxMYkuZQ2mV9o",
  "key18": "2TWY47V5kppK2m5ZwMGtaQm1ZbRN6ss6MEtFN5MtdMSYSDp71qpN6pP4dzKMASKUNRhuzNMB7Q1ZWTq7MtKpBwx8",
  "key19": "HN5wNGKFuhhBVzqHHGb9u69KMdHtvPb81v97Hkdyb3NVZXCBAGDfM6zwfuVftdonSxkWYkKpGoKTxLtw6mvaLEY",
  "key20": "4MaYxisiLmDwYhxiF8zZ7wEoW7kPuZPLpjFWDG7xX2kbG8oqkdrKTRUJSe6MgGPqTVzXMXF8nDvCmK38feZyZwXs",
  "key21": "59FSVBFKc9JRgvyuQGucN9LnyfwbodebRvhcznc23mn6GNX3fzaGU8h2ytRD3FYZacwt2mQyifjneSVosJxJgpKX",
  "key22": "5L6YMf212fQdL9SB4azwoW9tbtLe7NjP4gNAnrzZVijqkUjKvr5xZ9BMRXbKiR18hdyuXky98h1p4Gytd6p7BXQw",
  "key23": "KQ6hZb3Z5sHEzk65n3TDMdxd3tXadyTWJd8F2g7CJPoXaAvGNpGeLjKVuUPgRkXL4RjT4NmrEfZVXvAxdtB2nk6",
  "key24": "3d5JppSRnGmpCvC1RTsEFABQMSScVE61aCR6py3hyeC3kn8kJ9oCoJG2mv52eTJsw7sLT3nDwYkao98rfwr34mrm",
  "key25": "447a3NhYanMv4dxnnUnaLsNvo4fzjYPaqZujQQEXnxuu19MRcJ2M19Gnydmx9TJkRbu1KzbHZoz6rH5ojFoMAjEq",
  "key26": "2z7CCeDEQfe8c35vqrRyUZPvhSXEtYsrUkY1xVCCBZnANJYnCVqhz8eXNujHSivaofUv59rQqBdeGzNCtpPtS7zb",
  "key27": "2ZLRLTdKJhigq1XpVKKmYZUVYcLMtWyZ92xq1NGy1Hzr2RzfsVa6FuZSEaCBoKyPPg9jfAVYw6uCS7jBQ6D11f7K",
  "key28": "4N29nz7NLiod3YSknGSdMkyJqfNh1nXtuVmTAzHvwz2targNzeuagAes4QK69Rf6YrgeZa3mELPNAfMdwGdKYwqN",
  "key29": "2zp3MFHZuGvjVYSenmsvt6WCi5LnEVgN5xavTtYLqzefEWFvfQuyzGVxob6x5Ar3ywqW3yBXecGSSiFGz6Wvy6em",
  "key30": "2yY6G9bK2mKfmnBjrq3gx6ah5ZQg6SoS1JMxjzD8rv4pj5pgQNdEdAtFkabk21dmVJdwJVA9XDnXWr7qXvcirDEp",
  "key31": "2zfLvYLAbJqghH8pCyDPVBLSwiKHjTeAb3Vc7JYLF74zv3LAyCmSmb2YgBexwEoRtkrKF2135nZsdA5RRFsFdxgu",
  "key32": "2bzyuixQzL6BiQfarP3MbzBX2n6k2YCAUNote4EMh9pUTFeU69F9Pc2xiT4pygmx5PfNAeVF5shLW83KDS4mcsSx"
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

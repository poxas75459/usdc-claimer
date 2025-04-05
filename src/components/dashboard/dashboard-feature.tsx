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
    "3ajtt217eL1LZ7YYKqY7FadRaj6xEx9HCoNDHseHx9hJbBqrVWxP3rynShBZVvLA6Gi2gvD7jBSnUKUn4ZzwkZ6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XpiYvTsAFbXiyrRNskcbwR3KZNriXLjkGnjqRmgEPhqFffuXmcybVy24FRYYWavkzwpoAZxZgKYM4UzUwpMK1cr",
  "key1": "4WPoYGu1mSRKXT4Tbyy7GHT3EeZFuqZgc8266vfV3atg87j1xg3CwgRrtyPQoQKdZ7DqmMGnGo5VP35yiMZDY6jj",
  "key2": "4MPS8CSfuHKodw3jXpm7zX9o8frCjqawHmropqZJPVqfa7V5F9hQMsFkVGsBqjUxZuH8maDaakewy5QthSrpRrKQ",
  "key3": "2FMHmCuUefqq9vPofjUcg71Dm7KtsjndY1ggapoNbz22FkQ4PhWU2s3M6iu937apso9duwPdCimV9iKCidNdexJw",
  "key4": "3pUvjc9sfwqfs1Jm79F9Y1e59jaW1bK9xgnjZKrY6WjzuoGMXEfuVq2Jg9cR3ayynSeBjYSaZVh4BV7rbPj1d58n",
  "key5": "2PENKFoQgjpDj8zDr2fCWVR2g14SPez5bbZrro4a9kwfyqEY9uFhFtMUpWhbFKqybYNU2mXz7DsLuX69AstXzSCU",
  "key6": "5BH7JFTegGj2yaLkq4KtMfauZjCeHNeQZSFmrL8DdwNMPXyhs2exATdaFFjLZgN8wLEpEy9C3yB3hV5ptQCr6Mmw",
  "key7": "3ZpMzaAmPNnr2JBuZpq83kE1o2zKkhCRycUx7dCKtTxyJhTR6BAeakZRppYFDdctVhSornY5UYvp6y8wF9Uhy7KS",
  "key8": "2RYmj6nh6sN6mtCmvDbLgptAc2t6y7oBVgBm9yUsMNoHTwy7CCJkoixadricrjWRUF2er7nFgWcC4BHV9FTPi12h",
  "key9": "5keVsdQvp9gKKb293yFVkJ47mt1iPudndDgiB5ZfeEh1XLCAGKXv6eCoMnGpYy6meHEgf7u9BKQtuat9tqq9by7g",
  "key10": "4VAWxtXGHBKTAqoTNCyp4r7UAR9u37DnqDBod2vKZXnYRnVHapCift7Pp73p6vLSuBrQdL8KjLoQRhm9A5fQV3zb",
  "key11": "2uiHEeVAhcQxTnYTafqpoVFffBu1jSWuNFsBFRLUc5PZy6s3agpwuNsY4Ed6VNE6RWSGHYag143y8JfSxba5qVkp",
  "key12": "5WYLT4HtTuUxRXqr6UiYVXrpmV35HaPZdCTq7xtRTXbDcu8NAwDn4inWcHtRcNFUDPqVWWcg9eCMmw5Wj7UeZznx",
  "key13": "4MBNJ1gkdbnRVz2zhpxCFoSPXj9y8WkKpbZKAfCUV9nVzu52ar22XoSMT6d6tPuBXP2kSxbMpKbgnJjZQ5i93EBw",
  "key14": "2LYCQ1tNx6Khscybovxb9Et5wnUzpoLsZmRz5eVf4PpqMtENPd4WXKzUuepMUK3M7AeMZu8C9syNvBhWgQ9zHiiY",
  "key15": "52e7UhBY9NsywpNcPUk514bBg2LsET2gqGt2FqAvFmDTFzxEzi6T35DkeLVUQ42iHfeHZJ86rEd7V6gRxEjLKJKp",
  "key16": "5YHjKmCH9E87Vm8Wn9pfCV7Zah9PjneDghvLL5Wfq3ntFNGphimpGoaHH4NEj1423M2G1dufjaNvpDja76dbUDdN",
  "key17": "4JrexhaDRrNJERzFap4ZTrSpoXD28QczzvqBzJhmAvtf8t9LjPqENhC7Q41uNVW2yBmffUwmEjmyqPJVz8Nmfwtc",
  "key18": "4qQvTQscT1SvUrcsy6XurCkLBLju5ovJvzGy3e9dpCxML2cpofiuTkM1CYNVPE9QhmZMhkqgEgmk2d6TLMvXeSLo",
  "key19": "2EuHErp5fJmZ2aP8KYEtjxmv4ceCF5nf19Q3hTqwYxDRbfxpKb4ARu7W618YpcJEqq95rghZrx8LrfmKvyNiwFYd",
  "key20": "4xG4zUSk9dUCyVPqx1WrN1g2Lek1EUkedKivCrVArXCrBNXx7RNha6y729EmjCbgS4My4AV3KgFhbAQHmNiiNyyo",
  "key21": "2NKzMsEd4XE5aoqBbBHTVozVtNrQ3AJxzreAH4iK3Ao7rE8FxTySRZnVBtAdNRrzuQUM89ccrrxh8oMYeKFAAaK3",
  "key22": "3SfmXW5f3bA5Jaz7Y1N36MURbu9wBRfLthw16snYgFqavXxRVNvdf4EmFe2489XbTGwEV2wDcBjE9tUQYckHheUS",
  "key23": "5foTd2FuxbqBQnS6Qony1azrnGsAW4ytNfW7mvugYWx8Fggc9zLQ13ynHuGMU1F4w6P7gjyGDDjKeBkhE1F6bqDG",
  "key24": "C3Nvc2xGsSkWBUtYCgZFENaf7W81ymxdqYCNsrcaqzvmU3YBmym7aThBK8XegWHX7KXrni1ZjNqbnTuqffHwpf7",
  "key25": "2gRRHhXTXUGZxfTmSjHHuP43y28AFhpx7Njomddu41EsrgKSQDfwDJyFmQWDkndmCqWBYczGCYe38gp3koNTXJiX",
  "key26": "5o8eiCUCSR79K5fJ4p64S6Kp4RwNdwkHqm9ErKWG8SNLExzaTFzvUo2B6iLu5W9j2DK6pNVJW4wUsq2ALFkohduD",
  "key27": "4z1LsTQfgo5Ar8LBGtnSR4T56RtnqXVjE8ZbbgFLUkYHBN5FXrxXrRMnN3H7QErUQwtEKBr6zc9pyYc4ockczk6R",
  "key28": "3uS36gEYwAF57MJ1RqR8m7uARTHsU5UNJ2RzUJydXHFgjcVgbn4WKQV7VyU5eogmHsTTe2aY3Dj6qdquRXnapVrS",
  "key29": "4hGCfuXFf3Abs9Cuv8JJhF8HmH74uwgd2ExEeAwEwo9ijDEEeMx1RYUrk41mFsZZ7hwFArXt79VkunfQUijeRZd8",
  "key30": "kLpWwpWtLayfpjrpDRte3ngBx9hqb1UNQWqDzLxyxY6fGSTAXpKYqyJPr7gxYHNDGecZCSMYNu1N6kJhwXrvLtQ",
  "key31": "5xkxma8ALDSXHKHv5Bq8mhjn535ZQf2e3U5duqavkNwCMnZUBeHqqznwPsBKiwBs2yof12Y83HaKbRqQMAvsjoZR",
  "key32": "5k6XWUhsp7nKuxsgRnGQtwWwDLrQ7Larhpte7UEBc7i9AhLarr6JBgnbU3kgH3xisvCejQYYQJvUr4cVS6Aa6axj",
  "key33": "ABy7LmaLGfmhqJrPESPMHcJEifYVoteigvTU9FPArtaHo8ZKNTUtq6EA8UH1vuo69Yr34NxhbhNycudW7joakjt",
  "key34": "2Y1ceP9ARrw4Lzz29BF8rgwnwVaEhHL3B6DXcA3icskCZ8KHoBSdw48NfpRGiTEzJnascCgLqj11cw9enV78EKpZ",
  "key35": "XzTb7eow2kUoAuTrNTr3NA3QcXeTHDWoD1b5zDe8F4eSQMpVhGSFpK9K35gtrHXvD33Ro57vHjWke1QagMczJLT",
  "key36": "2XNMXxZu4fQtJpUAodD7SRpaV3oLVzRFen6Bp7h34zDc6wynHJvyPWcixu9xpJ7pM7vwRcNm6wvcGn7WTYoZGZ5H",
  "key37": "RtxZNuRexWYBUGDJd1bQuz38EhqCfQy84XNyyiVQnqo6rbEwM67Mbi2aiKMPg6ZiTTiKKqgUqj5PACHHEhJmXo3",
  "key38": "3REPbMSb7zNrF65zHXPXmsAtTuKkzxQAoq8YRxKAFPZzcW2WnALaQfN9VgzK3HdANVRt4dUVXa1Kd3omWAbc8iuF",
  "key39": "AwgaZ7wn7Ax1yGVwKm8rTbahsZjyVcrAgtyvMaX1JujNqWiiita4vXSSbuEoEfWhmFiDJACjnyGGQmE6TzgDMbu",
  "key40": "nuZRX4eDV3dfHPXZbLeBCv5m2S6baHPjEtZcgwACr1Egb62kdRuvhsK1h2GVeCmkaLLrDjK1Yv5eTh7S7wQ7B7J",
  "key41": "5bpNwWbpYUrs9y9LeH7MBASaZ1q1NsEX8E4WRYXAkYyuUb9kSjagsVm7aSniqRRPLxphcpU2ZkRqjqGYEftE3fA4",
  "key42": "5U9dWPZ2K1kwKcpH2uR9yYECfkJcmU56X6A156oNoW4sNssRWrVnfWrp3R7rFeQMh9aAbwFHBs624ah9xQh1p4Eo",
  "key43": "nTUXknnoTeqdV61dt3pUMTFWmnkqrUMHWaP8zMk4m3eUar7vsstweeB1NrRAS7vh1wg9EV4fDTTWG6PzzcVnKtT",
  "key44": "21kehEFp2xZVEiS1RGmJ2EgUNCERA1MQTM6i2hxynH3FVjD94kSYwMcGHRRXuGFubPzgtuSN89GjdRWEZkhMrRRc",
  "key45": "GPzBJNBAvxZYnEd68NrCbrkeBkFrzLy1vvFLZaT6qFsV1q7tnERSX8XucLiw9qjVGujZevG4jYN3kwzwjb84p6R",
  "key46": "2ThwM1w4F2QeK3CWPS6ohRjFCakt5kPXGzjqujVXmvnvVmmotsnk5hA8QMyEPWqGBEErRdZC3whvrdsi2Kq9oujg",
  "key47": "66Emd69VAr3qLfCnM7g2zhiqamBdE7VmQ4NNv5LPBYtyjzufUCovWZF61N8gPPycNEaWVfKc5WCLh6StXoW2ixw1",
  "key48": "62rdKpPtPFkgunaUCtjTfZpzhNUy2yi9HHkN42BTFGdyFtdazVM2gcseZMCBW2icjstcab14fTCNsEfvzxNzoCXi"
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

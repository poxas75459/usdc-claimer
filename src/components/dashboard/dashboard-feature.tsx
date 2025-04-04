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
    "2JTxYL1LYeBKB1xYf5jeMyzKZM5MnBVBMzXTa9iYDnji9D93UneHtitkBNvkVU3fnD4gLZREnjS5ndCMhKqkdJrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2D665fujNNS5Si7y7UpR1nSDZ1oXQGsSjCsfaVDkeJmDjUBCcn1FnSVp1ewC2w4MHKLENstFceT6igTTDCSS6Z",
  "key1": "pc4Mfr6HddSR1rkUmbdHLNeZEXW7rwWF7TXNGtjrYwFtSESrgtj13EweypiuAVJXGoVFhvGH8gi1aU5axapS1Jr",
  "key2": "655VKK9YaxZr3ieJQGuSZWc2zxxNFsAfG7QBPTcJuj6X77i9Bh1YX5ju2ZcsS4ycS8ZA5KAkDS9ygktNmASfM9tM",
  "key3": "2eBKzvdnmmDTZ649EpS4YeN5wdkB7xKJNnabs3XhJBHKbY6knP6feRvn2V6CDssFXakZCowQopFqWfgD1d1PUTno",
  "key4": "GxLuu8fTDzffpnytnApuXuPjZQi4Fa1symeF6EKUUubeNKHpNmCEtpM4r8y7aZzMAPgqotyosbLS8FqtrznNac9",
  "key5": "4bZEBd6Tyj95ppSnDUmUUCzcvfELbkSAy1AH9wjFWCB97R7FzXouyo56agenV5tnx9PqFkJNqrGwef32ihdUt8X4",
  "key6": "2dFb4EdKFwy3gzei5cAT2PJrXL3fpnm7FhwZiKvXWBvNHytEFuSU8bqPxJwjk4YAbShqF3vx4J2eqYdvrWfqAitA",
  "key7": "5h2NQymFh37HJZ96xD7AL16W3nFpbgRs93oivW5MW4ZjyMEuGAoZB4cPqrMd6dWbvu6bjzntJCJutGMMtie7i7xY",
  "key8": "4yyU2ZJa8T6LamKW9afmejJhwLDUaJEFqAznce8YKz7sw2GKSAKTi6dXn93nK9Ubvao1aKNnMAHCsNePubq9JtJn",
  "key9": "473sAF5ZZbRg6vS57fwufXSDLYSrUTtJG2T2ZGaZev3cyB3Z3taTMJYR6JghiZYZJHoPKLnza4KzyYjcrcCLnsYj",
  "key10": "XJ7nHMAXZSd5HNsACEDWPXcMuuCDyTwHKMcUs9atHrrHiFnjoWkxoM6iEH55oE6J9KF3f6FxvwDNH4LZVZtjJDh",
  "key11": "42hQWvZnhVzFGFCzMogfUmH4cBAmWX3s3tkGhqEPsWXFb1iU6kqS6H7Za5cjiLRtdqCvS3anFFjGpRkUK5Byuifz",
  "key12": "44MhXc4YQiJrHBQoDiMimLThi5YzovnsoqsEAWsuuCW7yL18g537poG5VaMwue9FGmUCb1K4kRmtXcAtP7fuSZkA",
  "key13": "5bj21dpCDQKRBrgeE6kFXeP6WVBoRVtJ1QhbETExzkgZt6YD2FNUqyuRiKtFLrWiSvaE61jfaM8iEbFbkmC7oaXZ",
  "key14": "2Xhtg5w3EgyGc7SZErUqqSauJnPiGUsuLukR9HjW6searP4wJAeHpZ4AQrJAbXrMiTw9Q8RtECLTJhFRz2uLFwY6",
  "key15": "5hWRL14TafAU18X4CNPCNZpkZef9uDtQ347bBaSedYCyuk4mX5sqTd7KbkdhmibJA2tkY1HiyPNtvdh7G5Q1P8cb",
  "key16": "2F5Yyzz5zWFA4r12UQ94zXrxMFae3q7ySc7Ze6e6X3ACdNA7dQ9KTgE7ArspQppN2ahdpeT3y7wh5k96C4nYXuy7",
  "key17": "4pZuZv1LmxZGHJDVmUup4etB19md9zoVrBigJ2LjVzLgDEuut3CZMdZpzKo8AY2Cc1j9v7pzN71C11yTRYzH1zUd",
  "key18": "2AYfSjT5JwtPwmyn8XXWWamgEukJLSMsXF7PcGft6iKucFpBrE3wdJ5DgJMACjFJBDyyjPCgss6YcAQqGebi82rd",
  "key19": "5aoCMa1H6P1DUjZr8bjLtUNYt99ocRwYHhmEqhVFY5EqnAttwkJdZkBZHxPpJpMPhy9EuqPX2vLk6jsXgaHscJGZ",
  "key20": "5oscK82r82TuwRi5zB677dLkpJcMNqYp8kb2GEVYa9Ksv5x2AJVeD8YjavPfU5Fxk3WCAXqVrJzQn3JWKy36SWxH",
  "key21": "3e8sisHGAVHta384gKRv6wywqZRMnvVmxtdjty9KymLLoQjDwNrh63CJoC3hT7YaiG1o59FJf8u2nLETDgWv7Kd2",
  "key22": "5bNprwj5o1s9ekHvVQAuHZXJTVBNGnb3eP3qR1GUaqbWmKnYtQ4SdmbfhgA6Pm3ryCw1RFzN1BAKmMy2Ea4DkwJQ",
  "key23": "3Q7R8rxnf4JDqRrdReXsT7W61UKG43h8TaMVcANgSDSs8Ag1QZQnz6GEHZY21Q4M3heQ7LA6aYmt2T7a4TFNEYr",
  "key24": "2Syw2m4RLfshWbSGsuUZ5ELLUJR7HGkxC8TtG6j9ZviPRymvxtay4EJP5BSmG6asjXGgV3jLNGHS5QwFfcn1oTE1",
  "key25": "36d73S6JgAUDk2y5YahPuk23CnKvMtMnoQ6fGuVTkA9MckaysYEgmt9PkxkSQjBok3EfrsaFXGUR5pGE7bEARp3y",
  "key26": "4qrTSCVUYyPPjcpW47xWJY41ZuVXXRefeoWHZ8vsEDs15ZjebPXG2zLEMTpifxnPmh5ei2oVtMeWjzrfASBt6Eju",
  "key27": "8EPUN2AqtV425XpYvuH5eAY8gUGg2MxhK1H8EQSpbFbVjb6jVTJHVuXjfwGJGJHaXWTL6ioEhVg4MSY7EFsnvqb",
  "key28": "5nABrEcpXTL25gjLdGkDp8kJWj3D7bUq4jZtn5Atc2VZ7a9Y9MiL4YfKnri7Z6LixfsimofTsNda4eaL4bvAeUz2",
  "key29": "X57zD1yPWsVRZLreh9PAxnuLFQPE8TVMNGueTRTRVFDVrJQCvyU7aJRewZpCiyBRuBZdez8J4SUWFzUeArxfSHt",
  "key30": "3xPphK5Ek2qnfXEokWviWqFuYCdyFAmMx2uK3gJYmLjdfYfJsxtWDjfc8PfNfjBH7AgbReBBF7m913STJ2jPavyv",
  "key31": "yR1WsorbKuG2gGek58LJGhxhix6e5g7NWPPjM33kCNSx6XNzeruhLYX6jk5NCrk5GEuXyq4ghq59GovivEUJ1yc",
  "key32": "3vf97y7J9amnwHdZZWqqdPrSWGKd335WiQXhafucWEs8F1kUugiWihJU7mnDyyXHmfAkenGYsFSxKTxavnjgUbjx",
  "key33": "396aPiAquzRBxbNoqVFtTPN6okxXuDCeL33FcQcypz34J8a6ErVqTWsaRaqhavgCb1chRXFhvSf4yP4VvyduoBRb"
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

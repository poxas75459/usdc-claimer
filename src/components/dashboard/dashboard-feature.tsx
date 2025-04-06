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
    "nEs3YdHEYSHvEtQdpFhcUqueUc2EiYoAJQm7Kfdpw5RyDjQFikWgwS1TtCYCmLDC5YBJSxYgKgeB95emNHhfCZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNREqNZWQsyRf88bdYmX7F2ckCWw3DoUXrA2dg5HZVzF7uzzsPN15i3xU7D7LYzBRPRpugwGFLrJajr26dkoiNh",
  "key1": "3jfwmYwvV8U9ta41Noo2kBnTwDzbBrABmBAXE2uKXJAfxkAVUEgtYoowP4ET3XLomg1dEt2MQWrWts3gjtT2xwtK",
  "key2": "3g6Wq3b3V5ZARXSq92WuDnvCsVuznhLwrKCQLkLLfuBewcZ7tGBbgVCJW8rsRAX93FpvefjkcRyZeusBrheh5DPf",
  "key3": "5hbuhvF3ix8Mr1gc3KPScENrKYJdeZmSmJyaAxDKUdeJMZoxGHFYtyiSf9MfUu6kQN5TqsqTczP4FeYKZUUtiQen",
  "key4": "3ghiG1dy92P2WcCkKck7RihPAxvrGJTtUctd6WgZeLVckDa5rZ4BP9te82tUUFdyZFDVxCNQWjMY9aYjpfoajtUu",
  "key5": "5irN1VEWyDgj8jGfChkfAoicu6Ma12baCEzuXfgxJrTra9feQwPpAgfLmdFX3DZLE2RaZLBSShGTgdxAkh7MxhuA",
  "key6": "sWg1TNubs3SVdjCxNaDTeysktCpwTxKCopuSEwC94F7x5RLJFCTz9TLZEHjn7gBvULTnLHHSJNubHdum7GGUHMJ",
  "key7": "3QCGayyWsJPHLpWKCoqUQgxiy6yDY6FUBjcGcWuKGbPDJad7pCmDC8fuNzi85udLTkzBDq6DW3ea5ZVqiiyGRpC3",
  "key8": "5FHShupH7bpNN3ing6fDm9FeKLRSiKgpeMmqNQx8zdF2fQxEbyFBe3xw3U1fnnvbBYkbRqFJJPHLCM6xFzLgMqtQ",
  "key9": "2R7r99xjxojezVxAUZEyMfTFuG2J88rZmrgZ5bj2qnpbRja45C1zufrEy6rywG1FbGEDJPbAFDR18u2QDvEQriHQ",
  "key10": "2JXRzgmmtXNAy1jP3Y5yDAofVFBvBsvb1o4HdPbDLJuYLre5UdyqVvP6CVGXfnhd6wr9rSGKZDWLxmWGJzB1zCi2",
  "key11": "547gtwRfC5eY2qhCZZAmmGVJEfE3ZQ8DyCX73STLNshuBkSxWiMq9vVjh8SzDhzvQSrskbngzaohUuHnbpaTEaa4",
  "key12": "GQGhFA6cyqUyC3TcjSxpeTRh1qAaC8kY8km2ZSsfa2mc3LSAXhVPf4WEebG5Dkfvw6JJJ1VRfggrCXrFnMKdHJB",
  "key13": "4pw7iYihRqnfPUiDfErYyUt7oDGMP4U8BHGKW31XcbW7R3xVv5uq4i5kn7qAdCfuPRZYh7hkwS6jB3dgYrabn8fz",
  "key14": "2wD1CFmDWwAsy29qw7XVKgVpzYWBb26UK3UeGa7USeyS9rAZZBaXExDsdPahpptTZQpB4QYUp4daNyCemsigR7yX",
  "key15": "5CCFHmPwrF228hr1jnSUC8VdFcUXiZrhSW8vsPEht1R8ZqUg1q9adac2tTzpHnZF4vnKNGmhc8kSc1pQFSssp56X",
  "key16": "3JmY9cz62PgALGMLHx7EThAq9c7p2tv4dVfEie7ksymioBwQdiGQPY4PQRQ4zc8Yudy5Pi6mA3vyb9pEjAzzybtD",
  "key17": "2eNrCbWp2qaEZ437b3HmfUSe7DRGshr7A6s91vySuNZ6LwFJka3hGKZK2g6e3z5cCAM88LBifqN6cFhMomd4Pwm3",
  "key18": "3FpGWXUGvKqvxGf97DXzr3ubcXzYeCp9gn65gSSBSJDbxj3EHt46DduLW5JAuN6V232KhqgN2MuJPHRPLsyQ7ha7",
  "key19": "bVUTWuccqPvgv7fSdNm1aWmvApuf9j4qaDfHRjJvQk1eH845juxh5TuwuB6gN88wJXYKLyQ4pbd9ki2puQxLx5R",
  "key20": "6gxx9vwcNJjQ15VkEyYsqWYQvbA1HvxFfCY6AhW8UcXDcwoZGW8KwrgNH1M6gwUobBsBJTRE87BLi59BJesh2Qu",
  "key21": "4M56jxUNveVS8ftr47rv4UArxH1VmXDph351HvWMNCUjdY8aCvdaxbWUwGJveGGCwU9QV3p255qLzerc1Ux12Qas",
  "key22": "4Z5zzE3Z4NjNXeUz1AcaS4Cu32zVEjXEGBTTtfTXo8h7JbJBW8idKaXJpqcZvy7e5DDYqKWUDKLqJqt79iwc2Kzf",
  "key23": "2JhSSQcHFLn1HyTWYeMFhs6iRRWY8o8zpfeuSXj2ot4RwrZ1ZQUJXheLW1FSvyZ6nTPNswAqe6FQefUF11tksmpU",
  "key24": "4Te48LJ7hWJK44EzJtAz3eVovYfs6GMXC8o8c4NeZD7bE8gWRjP8a2HANNKenewxjnv7gBy87AjBM8Hn1r94WeGN",
  "key25": "skiPB3oyYQyX2nyoiJbp7JXQhTU1CvPfDxJYm1fHd7Ka2hJp6gb3u8ZjxnSG1dkf6nQiaMTET2DYRfGEzfrTxNk",
  "key26": "HrA4JeDyfRYmbn9AMjT9G87q5KKnirUsF4iJHS5jDYLBg1X916qhr9RWRfGG7veuBCnPAtqy3okCahaNGhhWsXz",
  "key27": "2C1gynj2Fgy2dbucyTToAa8ppRmfftnvUAFjxLXyS5ZzZ7abpSUrs53oU94ytuGBozfNBMZunTEkkvoXGthieBTT",
  "key28": "3w14S9SqcKtstZ3Hf4j9y1KkNmq9ZZ2exr1wVPHA5mkLd1r6eFzFE5fjQugYwRfbXsYrXqPLyxXjNA93wN5rXepe",
  "key29": "o3QDZkmfrUPksruQXepy7cxyihvNSSgrNJKLUppbbEwLWUKd7LUWcnFV7WC3kpL1WAmxbb6o7KVNcEQFzpV1r1w",
  "key30": "thKSUfDWj4UmwjLcDHt3aAG8S99Stoe3kUyS27xccjp24S6TFWfQZyid4s51oGUoQxs5s1H1RPjQe3BW2Db9fNF",
  "key31": "4wEUKTKWrieBLvS6ybKX2nRiv1X8UA4TvDpS5wHqS4JE7MLqt4d3G48mEytKxgcr5GfaY5zC9yCovwLn2RnWdoHv",
  "key32": "2zqaHEkmRbb47Rhd7XtG7BF117SscvynSLTaypgfZ95EerKiKbPvRWdfo7asjXtwm8nuHN9nTtZZNhwWp5opSpQd",
  "key33": "2KYxMtzbf8GA3MdbnNwyadDVfsJ6isuCDqupHUJmsYQMeYJCRGvSatUBWZNQVQcmyvtCYenK1UpdpJ4r7Fc4M7Bk",
  "key34": "4vue7WZQqcYjYeh27VZYmW3icXT1g77stZDoxeuuWqez7EKpZWbDB2Fkd18atkqEe2JaxTEhFjzWAmKDwjAvmTyK",
  "key35": "3LrrhwxM1pCpZ6uFEkJsuHDySMoqftrTseEF8xi6JRmGK6XHPfMKgkpGT6GTzYxs1yZQADpcZjHHJPN4WYhdtKgz",
  "key36": "4W5i4385VrYsgMyR3R23NmMZ4fHi7aBakXvYfurMUeViUcdSVA5CZvzqNHFcMCjAs7J2b6hg7ZiR6YLCpxoRAcTi",
  "key37": "3HTAMzUF88pJ5LNTcurpNRUpLmH8He6gWiBNyV6tKrur6EqPw1cFSH5MuKbofERBxvnpyY6fpjZb3ZEvX1KtKVGV",
  "key38": "54hJTsu43EUuRfhXrboXUoCRUhxPW2QKy5knwTxDsJd9aWY1MUDWWfr1Ce9dE6GjHK7fdV7iVQvSzPRnrgAvvAMZ"
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

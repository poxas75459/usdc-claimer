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
    "2UmSSpFoUdTK2MVS2MCF3ctmVhYee3RVomCvfbRUi4gJdRuWYoJofxbEdAKoQvQrB7YTcpn6cqVSPgviESSybYAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gupcr1BxFNmyyx8sXKfdsAKPiBoFbpUfF8zv3CY1Q8ybVi1gSij8ZgVA7wSN1ZWbvYbRFfqrAdqFtrR7y47L5yt",
  "key1": "3qPymoL8C6S59qCx4iyqbxkjQT7yZCLQ698Pi5rLmqWo5gVFsx3wGdXDL4yDoezNP79sSZjL5anKK1gzuTHGLp6e",
  "key2": "4fcWbgQMYYMFw7N41PTEzmkM8nLR1oN4mL7iq3fQPqLHSrWbSumr8PJC9iq1tBxU9FNhFA4fqivk24Snk9S912mn",
  "key3": "3euSfXfaywcDz9vSE9Gpz2TpBpr4ZUKwPu9kMrChra5u8sGvrfhjrN1k6i2YQ6pf1wvevFBpywbPvGgeyhhYguax",
  "key4": "4eA8V3PNM8TPgndwffsM3uuU6CZteharebeubQZVutTdeGRUREHZN6PSBF4UQcNCiAuWxuurutzS27LrP5Na1ttW",
  "key5": "39WFDQhWTCSoMNaGMe44JhvmbCmDo247q8WTEjQuHU1bhVXjkneYweUQx1r3PmY7YFzoaiampsVtjWoDA32iwYgz",
  "key6": "ZTFGxkhYMUutV31kHGMz55ZgjKWxeMSUdzcc8YtB3mcbeQjiA4YDfErHAGcU6Ab4vLuN2ncjR3TcVqCcKzSUP4Z",
  "key7": "56ZE8ar7JpHcjaxavYoMjyhy7xmXDx8fK1uhbrvTPU1AteVSUB7LGjTZTncLrLc1m6xqVs7qWJTU2MXTohp27x6a",
  "key8": "4jcmCeKXYVA1XCV9LdSRphFUKmerJ7d3TyJ3oVd9n2n3CtQhPsFYds67W1Dvxu86RojKEbJskENnFTG68fPzfvHy",
  "key9": "2x7jULwj9WQDXcxwZiAvrdVmgdfJdNw97bMkKZ6VrF3Ji78E1hCVX3jSKyUj2Dn6FvHESn7ByaVsdHPREY5hp2m5",
  "key10": "gF1wYBb8c3v7wkq4ufATCqeipzDjUaExx2HANu5BtWwuDzWb2PzQhigdqxRttMBN6x5cHe29UZ6y4m9KVESfdea",
  "key11": "4gURCs7xfsCZYt3xvskKAyKtDtnTap3wEXBNbxp2MfLWYmxKA8aoDzatQEydX1x5qpJs5YR68XpahrqfG7UbEt7n",
  "key12": "5U2P6y4zBkLzY1tLG28ZwxRLpaoiMf1fiCny6QfaDDuJEWrMJuLECaJDHE67tuNNeCgLb1PoN99ip2yFxarF7boW",
  "key13": "4iwBPLFUpfFaBhVQHeymZndxSkaCjLjr9UmF8zqk9xYdHBfwV7gPMxNbL5Nhhi1Ber287qpwFuNvgrqSH2WBFpMe",
  "key14": "55QmGmwqN7aGzWSKfvFKsq4FKTdhXQNPYXvBPksuvx6g5cBGvkk62tfkBRYo1Vr7bzC5CTpq8QFk21fwkAr7DsNH",
  "key15": "2HjEHARwZSAmecmuwg9fPbDdy8QniGw8trE68jnrog8B7EZPZSTsbfXe5K2wcRqnkVFdVLjSm2jLReG35jZsxGgE",
  "key16": "3x5jLYco5KgaTsp87BoRPfrivJTpXj2C7xwyc2gjckutMwE5UyPcSPXV4PDG75UhnqFHzKtgmxqoDkKUWDTZ9RM8",
  "key17": "WpqXaYXBbPn5jwPKXYkqx8Fi7uiNa9Jr9fGMCmcARA9dYR4mY5AoQwXyysffw9a6pNkxxXD8ZLVw6JZtAKAC6ms",
  "key18": "5U8MmYFARobqCzjTEioNZtG5aDfPPbvMB9P5xpWWBLT8JZoUhzUjsFWmSVTDnBHcLigeuX7iaTsrxSoMgZRJ5Pzc",
  "key19": "VtyNgpGqJQTuCwAEZb1twiyQoU9E15Jf88Ga9VCvLNaqQ1KJZKNMUHEWSca8ZZ3j985C2iAGgHjvKMDNTT2q3ps",
  "key20": "2Kwhbs5YiXmoWxbDra8QxZXRFSDTrSwGvao8FcK2Bs1kuEUTwKgwEFHBe6JYMyraottpS5E7MQw4wTt482tr38WU",
  "key21": "2AaQts8kxtW1FMA6ZfmMP1EkVpeUjvaJyMSW7iWMpTN7pwwXs71MF4eeV1bsYkjE61FLmBkF3tZkrEMFHpQBbUKZ",
  "key22": "4PKz1onbsW9Xcvx3mbz52soHaKqPbdUqtGZboZv59ZZ6ukpF67joowHPsxBwsC1GUq5sXRyMQPgMHtxjhAXgtKxC",
  "key23": "4Q7fucs2RQEXkCbAWvBGKPgyBc6uN8DufmeKJajyUTCC3dnquyrwNBkTwC28tGFKVDheiqmwnRYxm5GoMDtA2Lfw",
  "key24": "66RgAXuEGPs3cvrD5RyFa8DjRqUAT6wgs3Xdcr63g31JsMsVkWv4itEJpMmntKTagZu3kHDtriePyuNBNQtyZxfY",
  "key25": "2SvpZ6skR3sMd65KJVi2Xh6ZAtH7CP1Zf2e39CatsPHSAhuVhmn1RahApPz5FLq1Q8tefYETiJAZYGVnjLTLMmVe"
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

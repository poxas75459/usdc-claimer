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
    "4XFdyjK4wecKu56E6W2xKe4KbJtDojWNj5Gbs93poWmUUKmGcYEJsQkHpiqtzoPCaFmnAsSR9Uy9EakEUX6ounY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UcZREwKWtfkuvJRZoqCRwHCykdqMV5nxtYH7S2DWBbgvjbwpwQM33hBCc5A2R6jNWpMjpj17W7Hm8xJgc8Yh1if",
  "key1": "4T2XwA5krJJNafhdcAQUUCzPTFYtp44RgpMPXJHbu8YZSouwjeDLfxJEGEfWUa383X1XzTEh3eGDDo9weDd7UyDC",
  "key2": "2mfauWdKSN5L9CYzhop8s5c8q5seVijvrqG4g5bo7cHk7t3gcBCJNDYprG5qfexrXjn13UgfFPXSV8RmyaSQrccV",
  "key3": "aJgrHCqtd1H9xcA9jn9cc8S6QKSW5WzbPh5KvctpPmJ3nQfB2fMiWjnECbo6LKdXbD9Ffuy9uPyLgPJrGtzmFbA",
  "key4": "5iCmNesLwGccCcVmHgbRH5eMZ82RTQ6GqxsZjFQAS2oszNBgygnT3oHesnftyn4Femkcz2nhcsVv39XKrtUHLS3t",
  "key5": "3L4Vp61s97FRRV2a8xx1hrsGZJL8HtCoLgUUYJ9ES6tc32pwngxVyGCv9rtUufagHVmPvCnNEnpFB7oQqfKEbqrz",
  "key6": "3EKmwAtq2m44N2SVx8FzUDAyo9XzRrGQHyw5HeEU9tCT62VtdoPFdhmLG26mWJFHMqqviYcZCBTkcKZPcfx8t9c1",
  "key7": "2CEzPDMGredoBbLkTkPDE1p5meeeA9mosSWBvAxKefMXkAVBujcCdhiPRhjwnwmiTs87JGqjM4kwWDAN59kmJkEb",
  "key8": "2yWoMjWNvirGDdFqnqrRkGNXKeENmF6otFFuTaBcJWxt2KkADETNeoL9CXjQjY9CFZpGRbccq43fAfXKJKMM5pSQ",
  "key9": "4BNZfgzEy5jLbK1SrJF1TQ98sxp7mcCA1t9NFvja8YSyeUi6GovA56uCfWdYvrx2vXvb4mBQUugHp5wMTMVi2zfc",
  "key10": "4f9WRFss9rXUTCRBhppgbbuAyfCw7UqL8wr3Yz9SwFyqC9XNt65jvhis5UzPpgjB9sHM53Byb8prbrZGWMNjH35T",
  "key11": "2ZHsjSJ7F3ZbA7fdYT2oSwAwsUECGsyS4xA7arfHYsPdmiDBNpgB67tFFE121YcTg3Er7SamT3cYRNNfw2YKXwA7",
  "key12": "52Ft8aXBJji3RB51Tz3rm1LHRSqLaux7BoDk9UMRrmhDEXFopVRKauNCuDnxE2kCbuZBaBa25iwPkctGWZLp92Vy",
  "key13": "5dpXibHcHmGRsgZnKL1Y7fmn9RYvXn1SLQEF3YSTgrhQJNGpCZDkgCwMvDyPFdiaMsnqL5ix6Jh5XDmNx6f4npiG",
  "key14": "3uut7yMpUKC6FgQLbjpGuvfYrYJFGuG8vwH4rKU1zyYstizqL1dySg3pihonnkoVu7Stn9zvv4dTxgo2FvhEfNP5",
  "key15": "3Q9GLYkWdneFChorzw5QbH6jUJXvEw1fFEqt9o5G9xzH2PtU6r6wTiPZPm6FR14jhv1HdwtU4gLN6Mq9KxRYAvix",
  "key16": "3Jmf7LdpsLopL2sR75rzYhhdSHKXqjS2QiQriujgnMfDgaT7xpmGohHNfLRNsHGyJa2JK5LYK9psyYpAbDn4zDgs",
  "key17": "bTLJpRi8EgQTaSDcDA53wVtunR3UBXqKJmkaqTrnpiakJK2KQAv2Tq2FRA1jPHN8qJ7k76yK2RGgHGjA221oSju",
  "key18": "5BswE5shkY2nKyVjmtdxMdhnjwY5dfSR25DgadwBsCDZtetxLhwEmLjhF2YmnF59yH9RAGEojuZugXkLwnkTXc4L",
  "key19": "3m8LXSz7ie1gQW5P5Ydmact5sfbJfTeaMtRHBNc1TJ8fqBouZSKbJ7vykX2kRsy1GiBVz9E7c9UjdQCh6wFiFpfC",
  "key20": "5WxTw9noYXeYWfQfCdjgyS3hgq5Dmh5Syspm9i3zawCKWCZpNmqw9UJDXW3ZEpBzn5xL7aLZM8zQZLeTTqNHME4E",
  "key21": "5vaVUgvxfCJ83A2S6WGcjBPyAsuoQzxryDD93vv9gzkVLj27sWRm5D3npsZR1Vcrg5Lqsi8MBUseyTBTSSsqjXN9",
  "key22": "41HvLN7JPLczocRVYFEurkuaoNMgEtXdr37k6PQGLjoeCwizVkfuArgRm3uhyHkVLvoD7yAJkBEfyC9SZNWUgwqj",
  "key23": "2xxBM59z5UBr777SMixritAMBoN3prQMzonnq8HtS4po6uQ2b6rRTrScjBoN9juDmwN8oMVfBVPy4wGdAfFY5u4X",
  "key24": "5CZrxwzzzym5FASttPUMmQ1wb48RVp8ochcrs1hmjdsfxf1BeT5Fwjkca9HwPiLAPZxc135QwoBfE1HLVjYyRdkj",
  "key25": "3Ai1BVrtyHvBpkXgw72oYSjLdE55ziQnxP92yGYN3Y5a7mRGUgRJd3nu4Ce3wjGKef8hBGDvbEjfqMDwCKcAt1Cw",
  "key26": "2XHmHjFubWSTaELCJ9uNtQLV87WCEHjJ9aaRo2XPfd5JmWPA9jAPBahvrkk994Z6bCGsixdPm2gJxVhQLTZDiHFv"
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

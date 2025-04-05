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
    "2ZjsGqTq8JdMNdAktAGsUhYE5WK37eacPjWeVVWeDtgVC34QRE88ZDZSm9nj2SoTWbPCWWeJbXvmUPWwWzL11uBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R8rEbxA2NvxbSEFHRgpHF6cd73cQw2mK8d4a3yXGP47ZnBKbhxtCKcKA3P4bqQSbuqb8Wr2duJ8megrK34sthEL",
  "key1": "67S8KAnXbs2rAgWG4Z3ozZ4HW3H375fzkqnHddvKar8ZU1xKUma8Mw71mAhskTWDDVnh98vp8XfuBT17xwC23RBY",
  "key2": "4hix2jks2E4AkPB2BcmQnrVdbsJwTWC23fCumRKZtB2UTAvFK2XQVY72vwbd7yjMFoWLVmtpNMLzUtk6fjpbHcrN",
  "key3": "39fTFXqP2jaAHTadBPu5RRHufmx98BcF2C8CjARJu1WMFqz4TqFEx4JNc6CXjq89K51n21bz5hBVUAFB523CijSU",
  "key4": "3a6WCco5jUAPN5qXenio888qwYZFnZ2C1k1jbQyu4ipdDk6yvoxJARhy52vb4QuAy455BPrnohj1NNDEHPtr9VWk",
  "key5": "4gNsYZEkxUsMXrtah4Mp5ijYvn1boRPndDRezcVjvceSRomLhWFyfWU7PtU9scqixXRCkR8eu4Kb8Qr7qcDEGxWd",
  "key6": "2zHNhtZzmPubK6xBkGvdHLuKJJTk44vw3CQWZoBPEgfgCvfGQzSm4wtsbSoLWZzNwP2rWghzqbC9FJ5bkv6ydtNk",
  "key7": "24Bobj7RQ8RxXndfXXZ9K1qXSkDS3fg6crZMatiKdryjPfa5dUhL47Mtq6DPnGaFQHsvHFtCXznu9ongCq28wCnH",
  "key8": "4zjtJhP6tu9kT6Ari9LpYgKyN7hVVYp6dKAhQ1rWcDnNygu26vig68Pt7tLJPu62dNPutX925H96Z2FD5xcxtASM",
  "key9": "2k9vvoTKJ75jDqBNWs8iAfPvUF7XwKxxnYAzgrdowFbTJPeZMiuWZsY8nkKkqgbRnbiWLotqPqjcWd7VSX2c2Vdd",
  "key10": "4a4SCnMrEUfe1dr6eEzMFeW6viLdSqJaq8kaJjzpzNKCvmRbQuF7zdAK11yxBpujp5jkwJKoEK5j2184CLgmajpn",
  "key11": "4wDGbTvVyuKeQhyxeta34U3bReDQc25pBBTaq2S22d85gcvoypCk2CngPZvcgb37AsSLAymuXKatUZMgggPo6S6J",
  "key12": "3PPNEKKiqsgxVBpf8vQaG5igmHqTXVcKfkHW2GuDzTQYAEZNeMgem4fhhMSV6vEinKjXKuVoyF9xLhubeDV5CUW6",
  "key13": "63JWL8MtEB7N1dJLULCnPNTnCPUfjaxRoGDE3ibzWTqQKSonWwKifiyrQGpck2qvTwGAuFVsZcp3RRepdUEfNtd5",
  "key14": "337swyD6wRRb7j5NoKximnvZwSVc32j9yXDqzCd6YCQhy2ghnoWnE1s1yXqw9tKvCY4WoeSBymY6wD1tm4tdpVUJ",
  "key15": "3BbvTFkRRUaBSXG8rA69LvkB97FsDeczw8cVhX6zL8v4u9PPcoP9wnB8kSbf7SGpvJaAvWxa2DnhURV7XGQAyuBv",
  "key16": "5BW3GBTYi8ffuYa9nm5i1DiN1kr964FaAHJTvnZMNjNcF74tkgGES1oVz458XATnvS1freRNA4T2z22uD1DTDisW",
  "key17": "53nKSVuEXo5DwQAs1totruaB1K8jZ7qTg5P9FdGyzWKEq7DpxiCbT3n1NHrHRTqpqfg8XLRdbTsrmWHrqmYbtXX",
  "key18": "3EqohgvPZd7tQwQubwUaskmUeUGcvN9C8DL8W5kvuiVtMoAddDAS46oVNkmpDku624kV5t5DYyMcMwV7ExVpzzZn",
  "key19": "4r5UeTvo5SsGESr8nsRT9Ri69KMLEJYR7oEshkTquP4hQA48UCnr5XMHPmL6ryKUb13Gp41gbBxGeLkkSQGT1dmN",
  "key20": "4177oco2zPNBVNArAUBmvPu7SqbGeDxg6mPcdPrsD7zmXZu7L46Lrph5FaKJsucDEkvJFcS6ppkct6mfbBFNz69W",
  "key21": "2jYvJ73P1CtaCm1okimWimpADYV1y45ho2yrA3Fo6p1QYX1E64CYXnJz7tSCqPJyXE6YXVoiiGBcjfKG4TfVwB8H",
  "key22": "3mQwi6mJT6A4YdgTydTddR241WYcioPAtEWfv67pd36rrJRgsri96CgCtTC73UN2ZuD5xPf7p1X9Vz9S5Rua1ojs",
  "key23": "5XWdSQeq3UPupJ3m1HATdGZEKyfEaLkVuxcyi5bdUPWoxh2Bp3rhgWg6LwUNGTBueJ9Lgnjj1ejHV3AruNM3XFH5",
  "key24": "4oNWt5P2sWu1EkWCJhJhLLwQyBWwfxM9zux6MGhavW6mu9QzNp7LUqJAZ3Yzb7ZGpfv5zmRGcwGez99iDPMgYzUT",
  "key25": "5JDhVNzFKnn71b6y6bwup9iLF2BhfeyZeB8BPKAxc55UXy5VuBBP4gjvwWMn6JQt51xxRkgdkXFhC7aVbjFoPa3A",
  "key26": "22JeKEsxDR7xeVdXJLxLNUE3nthTAh5qQtEi6Z4LGL5ET2izXuMXysCTHr3VUQhpiHdW8qhm8dmo7EW3i1vmfS7a"
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

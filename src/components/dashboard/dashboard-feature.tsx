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
    "3BobCbfd3Hc7owKuUxS41iwpYLu6sQdrMNoi27VR8qumSJ4gB4vB44yKK3u5tkEDJcppNQvwCY4xsU8e3dTnFU3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnThRd9h6boXBmcUeBCAZ7DUJWYdEacPyCRmXFQvfCFuTwM4CNDnZWKxsPsiXgCBR9HANjg1bN5oXmMo5A4wRbF",
  "key1": "3BGzxn8bRF7Fo4eNALpw1LjBNZSG1NDmLQ1gJA9nQc6ekt9Q2AVSJUYzX1mjykhMxNBue88xBvEcWQPH4zeAFDUe",
  "key2": "VGPEuaTabt6P4KuUxjY8tETxUCJ5Xw3h6jTucrRpu6WHuj8aDxQN9z1FnL1Viam5yBGDCt59CmV6tvPAAUzsuXb",
  "key3": "92PprZZVXpniAs4EUCDHDEFeYGeUPky8CAQqmF3TQQxqqkvbsgdAxwzyqhdvCNooVCjh3xqMfoypttnxH89dq4H",
  "key4": "5SeCeqJ2V4RNzQwbz3FHA6BgpXDyuKQmAVYdijvV9peZmTvH4vtA86AhfchP78MxJMkoPGq6VP7Q5VdjqSVD3QC2",
  "key5": "sa1RGkPcNtXmsXxBo5Vv8NT4MLxSYDW3BUr1DakgzajcEwkPhzsk6X9AsdjbdJM9gA7XG144nPP4xy3Wd1Jq5rq",
  "key6": "4c61Eiw8GhpLkUBxwFHYTD8cZ9siJKKc9BfHgqdupphXVpYgcXbQRZQwTfKQkXYNVp3uj7BpJYLBhrtL8UumtpNp",
  "key7": "3fr1GVTgo4tsgTadspvtwFZx6DLRLTSNTKwj453DSQ8fbPFs4Va6L47pYystnrbvpwKC9nW4XsQ9jbrzR2pkCuKX",
  "key8": "2JEGcwNbx1q3uWCYuCggEFMtbGQ2p1QHQQzkM3ZDP1QjncPHuteanQ3GSNdtkUEJ2wZ1SYcKd8nfgH2VnYRRaVNC",
  "key9": "4YYDErZGteKTjCQHtw45683FaQszAsrs3JQ7Wfk5yXsAUNLY8PhioLBQGLK5ECjsDC3JBm6mHikLdYbA2q6aVtLe",
  "key10": "5mpVC5wzZUZdqAgh4Zy6WvmQUYxEDJcJmUVEjKaAWMNKZ3KkRXuoMJbsYkrJiVKDsRcxo1qv2UWX5FEdNmyVrCL7",
  "key11": "2gitzsfGR37zZ8wnJugL39Ps9YfLtrK5qUm4HtJDLSq5dq6V5v2f3kFYnRTqswzgwvNJ88ykoJTwMUCDNvgkoYmh",
  "key12": "JdmZ13JsW2WUYihphAZ2TgfUe3LHgW4dd8rabCDaenmBDG4FHXHqKiwEL1NPGCjCFGMWjjF3ewkVFPPsGhocE5v",
  "key13": "5UeWiKEiFpE1WmoNJqtKvE4Kvx3Kyh4xUXYp5scC57N2Nkf2XJktNx7ViNLQRBqq228efHwnakktNBX2yrmnssJ1",
  "key14": "5tvjHgcrTjeJCEeJQViR7y3EgzkFHg5vhkASidpYFCCK8XDNSBvduPMspNsZ1GAMsfFUPFgdSVAe8m9dNzxGgJcM",
  "key15": "4zHAt8Xg8uvnuJBPv5VWH4tQjifpRo6Tiu3GvL19iE58ZoGVfwYo7Mt4cvii3eR6eovL2vfeSGFDXbqQtPLgaLyE",
  "key16": "4Wv16KgVGRniBey1fubWs2yeMyGJXAmNChMiNgKMBTwwKNGqUFtUUczx8nW3FQ577paSRnudELZ1QvxHw1Xckx4S",
  "key17": "5cUNo3WPtXBYaEfA8DBe1Js6ssgKnXLANQWhfDooGBvKZex9ixJbcQrrSTuBY9Rfv5VNRPnUwev59DoVRSGPQLRY",
  "key18": "3X58TPZQaXYevCvnYcaJkW1w8zvTBTsUqmtKgvbJFkF1VyUMeGW1DTjqjYJywX2Y7LuYXkMT8isWVLdW6fR6Dx33",
  "key19": "5ECtqPHUYDnirfCiK7gsuKibf6UoxdmHeCPaGqs8jGpLRw19aM1zwmi2L3Bz9yL2k4bY6mq3vuRgHWbher9uz55R",
  "key20": "4eFRDeKtmwNMDLPYwFpYDvYX91M7hsspwQoh33ToTrhACJFfWYCQLEH6gZqLQQb6uxp4J6DetJ3jjVSouzQhRfka",
  "key21": "2NqzW5SYATiEkoFsrgiRko2NTGayJKmu4tVoiAMAoXVUSgAz3wZvqk31j3NDyJDY71PL9CUUGnV1yzqvUvwt3rb6",
  "key22": "3itttA6A5PatTg5HiHsjGsx1EdinFv28aSZTiVEhyFY4P84UiNwwN3XaGcyYfupcrRzyXPS9MCcsMjFTkfQkbzb6",
  "key23": "4mo6uPjobkiiAD1YThrwj5uPBhsc292pz2zjLjsDJdW3HbF2KsfWv3KY9ZhMtXn3z8bRP2ev6eVkFMRiqxBoNWro",
  "key24": "3GTvuwWeTddCH6NHGCdU5ZbFjsjGH9sCV3FkST6r9pRJikViPErJ9PFWSHMmedoidswXRfZQ1GUMo88avBgpXDdy",
  "key25": "5dyvpVmkDY3HVhPZMyJSWbYg9f5rpVfdPgN5Tef82xKCQy1BqpyKUrrkrf3YTudqTvzMEcmn1nPWz2WYt1DcSN2Z",
  "key26": "2pxgHYNFDMjDvH8ENXwQ8AoQDfqRgQGygq9dWTq6hgWhTdRuQTAPD4hoMbGN6xoMQhKJqGzcXusbhvHLGZ7maC4S",
  "key27": "2zGrgcrGHCcWMSc5pr63LCndLN31zgnMrhpf6ec5upv8w1LB2wr3Wmkkk954psMebSgHaqrytLJMRsaCMBKjUhcT"
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

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
    "5RtTPQSnZhARkUdtCnN8rwdv7JufM9eBQDA4jA5WpE1iyeWozVamYWyoH4nCytgByLzKG1wHFa6DLh6bHg9NFSap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abYnKWbxGKgK5KiQCg75Ze6wv1u3YSfZUDFVe7CFU73VkZk4j8Rxtk4Ti3ZeAC6ypUgz3X8CpbMC72RkdFC1u9x",
  "key1": "5qc1fdhA9X8emeP7B1QE99shRgeBHHkr6B94zcqYSF7g1CDSoK1xPtUEN7qBWhNGpG3QmbVuoCa9Ne8Q9MsTKXwb",
  "key2": "XZFCFjLN52nh6dWCqeUy28bBjPjZWdNuUz2VY3ojQ1sxTSnDTgDXrZoELvz7fW8j3Yz8G79LtbknMZoVFxnSUan",
  "key3": "4wGaAPB8R93D354vfayb3XkyfrgGZPw4dYnvHpBneQ9XTGm4ga3m8rWkdjd6C6xKyHpq1uHCdDD65eKC5F536FyM",
  "key4": "EMh985U5q4cweiwesGu43WMMdT6gSDRPEfjuRJ2NPUYb6Cgk7zx8Z9cPBnw6Nu7mxgcHU47cfGqwEfKudEQ9NAe",
  "key5": "3wB94YNT3K6aGbVUYUy7gHbTLwvdAbpZDomc9PYu45tWkEsaUzasSRS1umVFj9jLKi4U5rXdgtDGqFLNPdVK7u6j",
  "key6": "BYBueZYvF6o9Su1Q6cWS7ybbjZg9jZL3nBJFUVHBvpbHv91RretEXiVCDfmoAdTFv4PFtDwJWhYnF3uq75zmNFg",
  "key7": "3K41vxbATug8f14yrne2D5U4ETbmf8HorzGfv7ShVexe59tAj3GmDCVK5nfKaGgYR5x5vCETvZiyha6JTDfCdjDd",
  "key8": "3LQZSyh2XvXZgiexC3G5ANfyna4ikV3CMwXYPLx2k1SLEEQUKE7pF94AACew3XwUaCFmmeStoGLpjUuQpkjV9mbm",
  "key9": "2ZUYT6i4hSHmDZJNeBjrEvwTiRZhEv1wf6zTtmESScFpZMPMzLK2T7kTmHTdPtzHwG8spBKPUXtfnS3pDdP8p9pX",
  "key10": "3fWH9qn7XR44o9EHt9bhxvwmvu4Ab4novzGPUfjJdWihToBZRgVfwNEPX4iZu5G2KgkYTH8pwyUPhw3XTCDg8pNo",
  "key11": "4vdCwvnBgiXVnbLLWDFkLtp3g737aLj2o5brhT5jzRft1ZQyRcNuHehMapr3tQ816QsqqFyXW6WS5k8GwDeXmsvW",
  "key12": "3wujq7zzfq7dYrwEA9dMJ1Ny7M7gc6CFdHvhJnTr92LvyDiNPmwhhLyVSajpJUwFRaoNoACCNFL3aJHDpjhVeHUW",
  "key13": "5eyQEfp61jYf2vpvJrkvAJmqNpCaqRPAy2WfRfsp6xXXSUDNF1rQdNCK9Z7taywUvAkGR1nUW534jziGJDVVNCSV",
  "key14": "5vcH42n6gCyhhuf8hYSURY5bRPeYeaDuKMsyBv5rsdUpaPaK4BGqSF8rRN9QXwyTFvFmQFsYCB7yq61R2TwSgSJ1",
  "key15": "3Y8SRaeRuP7cpZv5zocccmbP8W75xGtAWsqjatepS1dktuP9pnQCmFKaQUR9P9R6WDhviyVRmHaEVxz4Jj7bpLfd",
  "key16": "2Xch5NGDuzDnapdyduPEkVuoYgtnjnF6eeCJGbyf7Ff3kwFD5Y1ik272j4n9bJt9KCoXkFZvCHagxrWhR4P48CrN",
  "key17": "HQa3sQLUJ6wvV2MD9ubZqR7UeAQx5xdBhaD1kpTymiETQQuZnVhJFGrRphcVAs9g5atEFTSvuSwjCVzYudkL9EC",
  "key18": "5zWBNkA4YtponSsiVUPWVzBi9qoxuCQi3knfQY4QHFx6vFQP6JWCuSYw6mAtwDUmh9Vs5mZbcufpMELzbddg3Y6k",
  "key19": "3UdJ7Bn5xwqUzjrqy7VBqdwc6m7oY2oXmoDG3oepmTXugK3CtZb8SsnQnPpRXd2CZeEwrwHchoonFT69tmqxVaae",
  "key20": "hyjUDb8SQirMK29XM4iUtnLBc84B7cR4XEiqNjY7JV4Etw3CZseX4mLAMSzEjFK41sU1ssmjtyeG4rRDb4WsC29",
  "key21": "2cRR2fWzziDt6UPt5jy4YFozwAEEevLp46AqmNLBLGHMpM3ygyuZjRBFpLKVHLqpWLXC4g7TVZ6tVdfz13uRGjNk",
  "key22": "4umZx7HVp6QYeWyfh7j4gXcVGYaYSiDgLAAJXcXRK9b2WEuLFb8Q2Th3EMmDrrfXsiVFJFSBABQKkUgjqqtP65NB",
  "key23": "4KYxjrxB25FFRwBhTASGeNwf4FQwJJm4JnwPAkeYQUcvA4EsRBbsDLGja4XpgLAwvuLiSQpTwxATcU5uqddyNg6J",
  "key24": "5NvRHnhr6xwy1J9jarvUc5gEWUZFiLaqzt4oEahfYfG6fgQ8niGSQAY3d7E6AeCV88mE67yc9KtSLhtkxBBE34RB",
  "key25": "4d4tGqwL4DnVhWBH4ymLFPHzu658uBfivKvFpLBYA3uJeJgPUyuFSfUCP9j3fA3b4jDqnbHvBQuLQakh7pesdb5G",
  "key26": "2BAFvNr9Y3rkmYvvC7nZyJTpfGHU5E1AeY98EcpvLQkm78xDgq2h4wpMZBuSeU4PLT6yPAuriEijdUf54DJmgh6b",
  "key27": "3crVg2AsSkTsuCWC9ZUr6fMyt54JNReQhhJYAFXMgk71EtQBvHs2CRm9Ff9mc7KFkTwwts2qZjd2GQNhWV87mBD2",
  "key28": "5oQXLqBwYDafSHXYEZWN3PYE3zpDyH1SxmZ5LVikaQGurnT934AZCFc3MQLzgfFYQEWDPiz3GZZJaTVD7ePbiW9y",
  "key29": "4bFMaNT2vFPQQ8pvjGj3bwqvbFoKFJiX5h8n2NSpNYxKeePkM5FoNft4TmtVMkPNGPuionZhFL8R6RCBzE6ApME7",
  "key30": "3xSR8sT9M6TUUDJCsoMWyQ2bdPsEgYjJf9yVipayacYxYSJ9gYh7JAQkefXFTcXPqkCyNKPeKZdBuJrQCmw4BwKh",
  "key31": "27iLVnQUvdnzKRazYysUSitYbpXtjrNVzV6zQZZ8fCCGx48CVCNiqLV4ZHASZtS1g8hd4oczrzX8pxfHR7KA2dEJ"
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

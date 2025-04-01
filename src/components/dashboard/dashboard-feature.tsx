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
    "2hkZd44MQiPEc7ddC9AJ1HwdiCoCnqeRz6eZ8CMXM6rR8794381ZnkTyTFSbZbczmyN7MzeCvQ9edLU3SAjtrwby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwVeuJcgZDqEDrYbowkM9eN4mjzePr54Gh2v36qj3h8rGKgcGtfCJ3FqEaQnCyn61z8egR34UE57xwBTX7a6ZGd",
  "key1": "4AmK5yrygmXcrdVKttojQjmmgYtQffvoLmTvst8a8Cf7Aq6paPAHNC9QcWwY1ujNXCyqT74VfasgQ5S3pn6j6eYB",
  "key2": "3v3ukeAPc1dYUhy61CYRjE7bHozpDn62sL7ZS8z9DHG9yfyo2aHhYDPVbbBRnXmHX1wttV5tENytcwkTMDQ33TVE",
  "key3": "3vvA9JSjTq3ftKZk4PHwreNtNuq1sX1yYtqFkyTEJ8LpKBgY2gxXL3MdwrEdYbjSjCh9eYKZBEYdMfqRpfnHZsjX",
  "key4": "5c6hEkbQvQBKSrsdfYn49N2EdA4U3WtpK5cYuV6w7rkcFdbwLjEyeFcKrA1r3vwqkwbwhxduH7otYBZ5AA5sBmPa",
  "key5": "2gRxrgNDy7327scrxZ6x2dD3qopriETnqjr1hYebgVfJRALmzrBwY8pCpQ1KDKtQLqJHAKvQA6YARhBnQkDN2Rtp",
  "key6": "4Vdmp3zbNvxt59Kd1nsUG9v8yunDe3r767UVc6gDx92AWrjk2uJ4LjCUS9s45wnyAJKZok1Jy4ynBAeyJuazA2ES",
  "key7": "5No7BBzXkoWKWqV5FokXKXDWCN6fMGuRMRYWqNuxA64QcEWKD5z7w1fRzvc4KHKx5BEWhL58bjfr2fNBxbArT1E7",
  "key8": "3Yik1MmqTTyTCngPtF7yoExTWB8WG6P7oZUfMfAR8rsJapxKdFncMTpA1fALnUofXYooCiqZA51jFzjmxwkXiqPB",
  "key9": "5G5xizNHuMVgkZxqjK9WNEckD8VUjtuwxZH3qnMZpeyKS44aJywbuj93aM4KybFYVP9YbdVqGhdxW4aVyqgb93zG",
  "key10": "3et6ghjA4tLEHLgxGi6e2EUBPoaQNrp1FAJJtK89sxzr3nfxCwox4fC6jbM99rjo5bM5RYVeTXofHQteV4bhJscn",
  "key11": "5GhKcuq2Qf8MDmFWAusDYWcuAJQaX5dJ4BrypxMst2C4We52EvwUW9PUe7VrVxqkZ5FVKPQkgj8ZmDr8wqA1ApQf",
  "key12": "4GfxqFdxuYJ1aQV1euo8AcQbCwvFcpHjA8prH2umVG7SjgZxnewbn1mKQNzS1K3cvx9dqiywGABEKPdS1HyPMXDT",
  "key13": "5GCsdEEGrVengvSYxchbCNPrfDpFEi2EEgfscjwgn9GZjB1bJP21n7DTw5JcorZ5YU7rW1zbzoGgwEiRS1J5SPnP",
  "key14": "5paX8xTmMRsqSRTsSsSuVr8zahdBB9AcNHBrYJ2f8aJjfGmbS9KVbR44CPNZfMTwrSrCAKekE3VY2kp8GkNDFSV2",
  "key15": "2HLxGYkk7c6pa2bC1m7vpwLAuria3D3NKCCdUPCs6jUgFQy82nZWn6gf1Ttb76oMyFws6zT1Yn94bEwGu2mWKRPH",
  "key16": "7aureBGTWCBbNCUCwCwyRs58AviZ433pmWXUtm4yqn4F4x7oG7mk5s1XNn21gsTSK5xpSAaBAX1fCyqNhSnR8Yp",
  "key17": "bi83WwKvco8fnWJ73f5MDYVLHpdwX9ZZP8QEvJBeXDwjRpL6ejrBc8TmQAATH8w7d8QCATZev7Zv8ypq3tuK8oJ",
  "key18": "59nB7yHsj2ePgX7om9ChvYV3LEoykQtYHAdvv2bX7aU5Hzwrv2b671NrXqByYJwgSRaUvFxSy39k6UvnLGfgM1jv",
  "key19": "QPpRBcyJJsN2QsHx5UEPFSUQs4umqKBrZQRMvyvy5onv47ypd4wZWnRmqa3swJt66LqG4FZBFGvQ9LRX4cxoQYZ",
  "key20": "TEEWDRyUDF6ANM9qVJz8iCDaea93VpH2jz7PHNUoPnBKf4jnZAqt9S9dM3yeAbqc5MMteL3k5awghbkonntrjb2",
  "key21": "2zDpFMZuQzF4wDEHjMj3A6F6ZGHQPshUjdeTvcK2HkuvVWErDdxrGXAPr91GnhFFT1qtTLAEfavjUsjNuYTspFE2",
  "key22": "5RbKG5fsa6gQ9RTd4k5UH9sy9DSaDVR7DuYACkMsthMSFriiJZxmVyUTk924DS6iuARSLHyUhgiwiEY346UWCY6s",
  "key23": "3E84M5LBAtDgrVsJAFzDx8QPYsCMzwgjrjGwDbPhFT9nfwpSoA2s1Rq25EgWmohWVShzGcwpdZBSFZn9M1XVa6UE",
  "key24": "2WMY8GQjDCjDXw82UnXSUKHcztfN2nVy1dE9vEyuPsF8JftXgn97xZ3yDHFAUzr5RiAmxEHsTWnMhmhcYn5QRoeB",
  "key25": "35vaArNFJeoUR9KcXDq95KgjtRDF9yCk4kei2PsU7LTBCpXWpQ5LA75HzTjzPPqZKXQy5iknrAgge5ydw7cKhV1x",
  "key26": "4aATSyNmHwgbaDFUYyFTtBcKc6D3v2Yn66EaPVd36AWN7RPfJvHRo7es8eNh7nHXyQUBJ51n8oRNhFYEarmDYiYa",
  "key27": "44t2ZbtdE6oH4SwMBFWMB1SdTBzM8tbZ16N9kXoZreMYPoFoXCUaTWeAsYG3meyb86v5FdvMHzgiKQNk9facq4B2",
  "key28": "5DhN9fVfCwpjsiAmCHtsjU5ojfpNDv8pX5nos4ZijZTAMFYHkuuJnGA3SK9RTkGPDEC2HQYgQJs2saqgD7NCPdux"
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

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
    "mYqGqFTTK1YmPJjt9Agh2GH7b9nwCLtz1GrKKJi49EZNKfv6qUitxAAM1iU1w8G8NsnDWr8L6cyw254GPsJvuYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YM791EFXR3GbgfGrrSeskCTD1kennQJuhXdShXeEhCxDYMvACugP7gAWD8HLv1zVG1maBbsBGADS4HHLxihmBNb",
  "key1": "4LRkTKpMPbW97uMixsKQbQ4jXe3MjGR5j62S22LvzvEesU7c6DFVZZaEynbfBZwAhUvNJPywgKD1cSToNBPovEWE",
  "key2": "5rKfn5kH8Hua62MNqtQ3LGj65uuWAndryvadWUtFnQGmAHkfWpjdNT8LhCC3WmR9wHfLhHLPnAanDGrwkGKWJCiX",
  "key3": "67KebAu6z7cdJg89LkP5VXZ6DLEB3XMNPPfNvK1r46zFUoFWNKCmdrJXbcCgSvzYE6NEF3urYQxymKNxzaQhvCai",
  "key4": "t69dHpUTzfQ9NGJtubTA4LDTxS3NV5BgCdMKytVZKNxWb2FQKQrY7YUQip4B1PGRBQux5WvdFjqKbXgwgdV6mVP",
  "key5": "67VSnxNcKK7zABChQfC8Uam2qxEnZKoUuZfoMMRMUCDvyWZsGN54MUcSvRUPEPCmrF2BfGwUAYXYfHHuMpA8pNNd",
  "key6": "d459pe6CaB1HZJ25MyPNvspgrGzkfE2peZWHq2VbXP2SqX4zD5MwtafyoB2pVE4mmUjQANaXryhn2ETSCp5L2En",
  "key7": "5koWWBXiPahz6Lr6Su2uA6s1M6UMGmX7rmXZNCRcTvLJGyPfQ6f1XwyuNhQM5Bsh21zNMxDNLpFVgN5UEUVqosus",
  "key8": "4XrPYc3jfWenYjkosd3R6qw3Z3CBRN2TwjNYik17egsN3Z9hhGnjzoprBBe29aiWSvEGM9Un1vCt1ScVi7FGzqFK",
  "key9": "3Q1asvTEQ2yXfdsyk4fBSBGC3NsqSgbs48qGeGpv9GHrGDmF5qp8ChgEJ5aDKtABM9YeFdL9gLPq1DzpGzWn88eU",
  "key10": "5oKgVuLfXMwpCth8uhaZ616Q2qKkEPWtY4RURhmUunrFMQ4DVjaJLMHMoQyMu3ivFUVaByqyTM5K8b5gYEmmxM6E",
  "key11": "URcWwyAhc941natsrPaBFCwJp5uwSWbEYCaWTp1MyKYFSgznRGnPwwbK5MoT9Eri6wSZ655q639aqsj6SdVUzEm",
  "key12": "rvYeS7BQtMFPnkggvWeALYU5FgkZHxCpdLybsCAEMgsPZLRUwTMmSysu4D6pcuP5eUfYzgh7WptUx81nbtKa6iQ",
  "key13": "63ADWNCPiwArrYp5GyorykBtmYETaYq9qrvioBg4gF8rbKpEJcUndXtmBQr9DZFhHAAzihLTaBW3Aa6cToAJkzME",
  "key14": "4HHKZMdY41R86acFGj8853wbzGiCeiC2RE68Q7dRsVszFwJpSLgXdV5cCKgye86K6wzCxeCEg5bDgUYiR81nesFQ",
  "key15": "4ZvnZ4nq1BDN85kXLtLfFBi1hesNNhzoiBd2v6YqmPRH5MA3TrkAsYxP9u73M5kAoRQn92b5hYZg47X5fkmYjVAe",
  "key16": "21EknvEZPmUsznzr41MHmyQSpfLVSJG9cJ7zc9EaMvuUKQRqsK48ZH1fjqoeLQhdWmXYz8Csur1oEwb7kpqSpsZ5",
  "key17": "2z5KH21BT9dKDkUdwBbpxi6zuTbGAZDgSvagJURzhmr7du97NfaPHzAtBb2NTaCj8SQar3MPTitM6cvFbDZk6Fwe",
  "key18": "4SNDj7G1Dg6xiVTJqu88exGGau4kbA22ryd8MaMVdgfGHzjSbkD14tHQpsejbFtRPZBDFvnjLVGjSUPqmyEqu83T",
  "key19": "u8wq7wQDRPKaK1ahx9sZHbkiw2JGDvYg1bgtuQPQsdvY72Ch5iPKY9d3dU1yP4JYc8RN4UfHNM3b7TTJcaYF4iG",
  "key20": "5Z3C5eqUbsWU9Xp9xNhxstS9d6K2motuhcvuLYxaYUNuatgrYWCQaaGsCjz6XGpTEZ716At8VmBk5wdpymzx4BYM",
  "key21": "3xPunkFBA2gzuazqM46HZ8PrEvrShvFQaNz37ANM5U3r7zmXoQGaS9fUKdSYqPh2NH71A5ZE4gMgpHVkL3jjuPFT",
  "key22": "5FH9UvvcUyfzhtZgykvD7a4d9QrmVsuPkJcBejNxybfKKqjK1pJSLADWxXsTxK25FCRMFSXG9aNeZqMeE6wvxuGy",
  "key23": "5zoyvcuZwZSEYrEwAUvovCxeyNx3mpub42H7JbcwAobLxCPRXbC315qnpbnkWjY77zEy9kspwcerMuHVJDsy21Cv",
  "key24": "RDJYdgmMGQ7kHKnhs2KEXhaX6Jfqf7TuYrNQsVgZaSHXciYJ8gAP7bLKmCg4TCXfhPaftMuB5J4FKiw84N9UeSk",
  "key25": "3BwyeLb3zZytG2ReWKCVdm2jPzZMk1ujeN9RJ5nhFUfFbph6E6Je88S9s8RD9nfyShmhqyLUhxKRfiFW13XqYnpT",
  "key26": "248hB7ihVWHFLUgF45REjeqoH9abavMnNGqm6aGZc8PcbkVA8XiXNWD1CDTDFRDA2B8C7pU5Ha4szUCpzXdg5Pg7",
  "key27": "2Tv2rMJg1ZKciR1HAxd6JSmLVUNhEAi6nYScAmjVkf6ckYQmTpJrd6CMmuw62jiZPGEvZrLyB8hSDkj38P9UPVgm",
  "key28": "4CM3VU7nENZ5rwgLxq27REE8L3xR7QnDUUFWVdH1wHxwjAECtoYtjQWJMzoNSVrCNkXmAknrZpSZRMWVfqRHys43",
  "key29": "4v8TB6vwrKBXFrNba3LDXUAiBHXdCfh9D8Nec5Z6pmFmneZctyfzAigiu2DAdAYF6LXpiFhZUe2oFGtAaq4y9ZJA"
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

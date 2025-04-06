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
    "4SToSygVitsy3hZeVZT4s6vPh9mMwk8nTk7VVT9Y1w6x8qhr1sSMZaD71aR14SQiMw4X25z8sqRPkwT8CvpB6H1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGuqEpUvzReKj7Rx3BT3V72gfNESfvnyT7EQvHbEXLk6xdKB4Tx8qVVwSJhzmpHrnTZ2GHD8icWJgXZSwbHMvNT",
  "key1": "4NAqCp9Vwy6xJw5LCBCNeXPToBoVMVcKqoKR2ZMHGR5RYCoy65yxiKUPpJSDibNxSxZ48A9hiYR8JXijevstvRrd",
  "key2": "2PjgiLaghSixWB3W3Ym4Nt2hcnf4F93fPVLQau4CxYbBVFfAEoULU1qYamUgP1vULyu6wMnAaSUN1XDDTD2A8Ai7",
  "key3": "4sMPKTW2bRaPxfFzxYP8DcbJCiQBCqtoqLnZKDRdEXx1xs3ZtTUUfGM1kUyCLXojE6TawxoDYFSLeBUoE5GjJFj4",
  "key4": "5TCPRffoM3qCco9uPHufGmbbncX9Rmne9TfoBJKdERVM1Mt4rA5MYF4uWPqhmaspkC45po5bM2udNwpRJkBMTtAf",
  "key5": "4bD8eAT4s6h52JGz6qJ8gN1sL9jaRXJaFaT61gq3JCbMuaSK2jioZDh89t1T3aUYKBvekoBQLx5f8X5PEhN8vZkw",
  "key6": "3YG4SnUKCyRoc9FPvNHegJJr5sb825T9hiJeH2GtuRqSzGiWvhAGaDC4XHZSWzh1hsxQkw9QcoiR992f3KCDa3wJ",
  "key7": "3EUf2ofM3WsEG77ETeXQu3MQ9J73vn2biH2MJiZ9vb43DeEMBTV6rf8wDHALJ6YnCNj7yBoubTZBbmgxEwg8UmeF",
  "key8": "3mDARAsHcL9QiBqDy7VPvSbBdG7bhMzGwEvPf7CQGeaHWstPwYe1cfnaz1sY8tqs6SduZAwMtUjR662uEVpDnYrS",
  "key9": "4j7y2ngHVatmYzrUzQz1LH1bvkVco8U1JtrrEpvW6x86vnePwZ1h9zVUW9fEpLh4m2F5h5bDTH6kU1cEvy1CoUgh",
  "key10": "2eJrDS1yyZ8nyhSQVpiDsG9m9wiKm7oHy1Diepf9Uyhmggf4jQ6sAAsojaAUmHXwL8wqT2rVFNqJNhcoNRsysExa",
  "key11": "3Uoyuion58Pi7AYGBk75QxDycG6hTMSn9MYJ4yCYNnyjN2D3TtL7iu5GMrSu3Ba1h5Dgt752X4ds1mrFQCxwd4BC",
  "key12": "3X17R8D6DNinEfBxdMCNpaZZqefdSxm7smNBC1aadUSDAc9woGasF4iAR5rvWBpqF5wrcUeMYn7vQ8DoG9V9TX4k",
  "key13": "2knn8GW5DLPxoUojhmYX8f5QFNd4JXqd9QdLfrrv59fHiYCU67JqFEHHRGHQLMkqxuZ2k4yEwbJ8EdBiFmtM3iya",
  "key14": "4a3uLVXK4Vj6pVUR7NWbYo4P9fKG75vwPdE6T26YmPqTgR5N99b2wjLY4y2CjJr6Z1x7oNwQXvn72aTRPqAaFtKJ",
  "key15": "2V4AkH5Wj9ukmrw248PFGhK1fT1b7bEKU9JmffwXk3zEPn929tJjhGLwBxSmLChrYTnv2HLDAjQNkEqfc2wb4Du5",
  "key16": "3RmhaZYTYTKdWNCexJjK1JpGF4EEqq1e9GXmGvJPahtajov3QUR6WTsDYW2bsirRSnEZmni24hmxeqSdVVJFkYN4",
  "key17": "FSfQNeJ5rdDFToNqX7HHFHxDgmKkEdSY4TYWJQkyGoP1GmFRgo8EXwK3MysAjV8yLKDoK4uBkayAuvDuY7k7bXP",
  "key18": "5RMPQMBVDzM2b8QdgPSSqqqnxBpop8MtiWNBR9aQJPX13k6Fo16KqtygW3L4pxWB8kweScsYsf9S1yLN78H5aYV9",
  "key19": "2FNtb7f8YHGK63d9YT1YFWzmFE1ofqMCJrwsGudz5HVzHyfLuz4HKL3AXTnn2hxg72mnTFbqwuh9BMZoM7BUwymF",
  "key20": "RsBwRympDEH2XAUL5afpxPdUU8cF9JFGQRhugzsHriHNxbpWd45EAxtb5PGGU1oSNBDKoF34yP3LVydcznjT4en",
  "key21": "NoPiE18ToFt8LDJch2aerY1jRosfsaWQmyrmZHBcyyDZBAtb2pCsDXzaWYphV5jFbkJB4NjvCX7hwis9AeP89Bc",
  "key22": "bwG4W5WKwoKwC6kabT8aWfS8aJavmJ8venFDYiWwyMVowQFZvHkBZYbCCroVp2859MczTQcXGrV3H6rAHVfYJAD",
  "key23": "4GnQXtsKvAKeo2UP5cg9ymZHAv3J5SFidtEyqJecRHZTKbBtVwho9qHzEsMQ8rtDZA9qiz8wHRXu8CTDVqDu5Vwq",
  "key24": "226dAkU91FzQC1anGJefPLFtXFSRKFjsG92qeFkc37aCSGdBBp6owe2NQ7xJYfSt9sDWw6oQKYrQY1g5B5vmZCUf",
  "key25": "3sDSYmfGCquSWxE8gphb1AczabuPHGhY24nNfuPdiGH1JCuQ61cpYezQtSf5wMVqfhQU6XcQtqWZEzeDMZJt5z1n"
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

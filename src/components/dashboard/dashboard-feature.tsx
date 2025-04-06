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
    "3HJvpmfJ8xuyv4Pz46zMcViwjewoUnJzx29JUbVpVJaEy9NWSPTWajkjPZmuq5iB5YBZ3zj7nwi5ThQhmqCPuzpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWnN7rUpcLGdbZS7pyMDdJvu7dDT9rWrEtJqWEiw5p5jkdr5afv5fdUQHNqkCEmPExR4h2AbjaByS7VdKAvHHWi",
  "key1": "cWeuUL7LyL5prHbXKQeeXViWRWPZcQyTKfKTRgXXDJkedKsm1ovxkNorJZjKuZKrQ7X9jGk1vJAP89FNULQDrDK",
  "key2": "2o1eawJqcTn1P51zWZhErJRPMcsQPtVztxynjLjK4MqrZmLpiA7kU5f26J6Yo3v1G5or94fyh76X8eZh6dtu1wzu",
  "key3": "TvMg33koy9dkWCfSrrxsdhTHFbV3dEKeEqrojmRid2vzNFidsvnYhajpTq2ceCPaboWHGjWPEV3xLXJsqFTTstR",
  "key4": "4ZacsmUKukvMFh9BSStWRGker3PWtzpvKVvLFnuCyAs1xced9TGbskJfRsKQSSgVeTqugpbLuAKEbRUtWzaihRFV",
  "key5": "2EhwoMBpYJbKGuvGesMUw1a6QhEGiiiZC2EAqnuWF7R78xcHVDx9RopveCLui7N6sBTWNohByfNHxJ8Y6QziqESk",
  "key6": "5GHde1q7UPpdeqYzsyYvQ9ZCxYdu6gnrxqRqCu7eYiUtco8RRBpuhyWomMpqDnkWDT9udYhX6qUADY7ipnvtnfDf",
  "key7": "GxDHRFN5AGT1biLWZtxvwqUgPb8LXzDYMmaUyByiy3ssfbz1NSXcVZADfBVynDtjAUDpjvwEzXWoX63KJMpnTTA",
  "key8": "5y5XAPFsEsynP1164WMrFNyTJxc9x5d5ZvVCbwSS2P6DTT2LwTRTvVPFVNnM69vCMrKiaNi7WiMipDjnARUAz9F",
  "key9": "25W1PHoV6J4fdPnYC2hYM65gz2LWhgq72DbDbrn3pDVBJBX28b5drnKX5pWrEMw36EoCE6egRdxQ4i3oudGw4nJT",
  "key10": "2HmWBbhf2HivLxDMFaBMv37EWTTkQcMyxTZont4roRNcSk6xGfkTFuj4cHGG1j1LkkRa92PdoMZwR5FKGoSfTmbY",
  "key11": "62GiJ2ofn8R6csgfhWNzyo9mZzpspi99FJNf3yNRYnLbZKBBekitZ2mzVfKaE3hY5x5HkabDiLqeZbXapDgGEKsY",
  "key12": "2JAWGuPkmoAwwvW7BB9mVm5c7bFvmNHcZFzxdTGTcx3zr32ENPDPSzLYGLAJGgfWmKyvkXJsshHhUMkG3pTnFtnr",
  "key13": "44ca5BaLFZnKGPFEtM8vFqZzwiT5jK2fViio2p9zcNt5aeRkFiYYS5udhrA3TdSSM8yW3eanK4zRCyo93paHyhEh",
  "key14": "5mGAXy1jZap3Xv3xV5sMS2E3A45e6L3cqUeiF2oC6KXuiSimXLSWqWduYZMxdgRwm3gW3grYNpMg3XxkKEKN5Jp8",
  "key15": "4e7mcc5ycBfXjTcD86F1YTwwrXdXL818GSiDjQgC3ec3RrnmiU9BamHLX74jaHKJqxqqRNeRVVwo6p6fS1pZVKQ3",
  "key16": "3iURoxgPKSqPT4sbo7ZqR1AZdQ3L1jNDhdARQpADwJHn9qde6iVNdLf2Vkt267AibeBJXN8cqD2ZzAHwf8VEDfvv",
  "key17": "4b1S6773fxw6R8P4bjFqfkLqq2WQwjpWKMHwAgQJnmjUFCbi3EgNo8DLn4kQjBxN9NP8sbmpM4kdZiV6D2WnZr4Z",
  "key18": "321d1SKxSHf9PeSvadaT1KGEbVSh7HfSa1FkCESbtgjKzgeaEMDTDLZ7on3nFj3a3s12R6J4foGCmbKZXvw6T4rG",
  "key19": "67Y7UWwBJstghB9sEQzoMjrPVnUeG5Ycn6YTNTNaHfkzQPkiWXtw6aF1Lyv5hXCHUt8cPptQR3GmPHDtrp3Yo7Jn",
  "key20": "XMa5o9GYfMJKgTuQ7c4Mtc6taEmE6qsswRPvr1ytnW4T1vdBPN3G84TDmNodCtXkGz2KmuJnRXFE6QNRDnsJd4W",
  "key21": "54gQwTLCeVnu3mri7tKSnP7mMA3NCSXxvMmxornT7h8SDBFdtKdNT74A52HdTaE36kCu33rLUAvzSxDZC9ySRDuc",
  "key22": "NosvTyVNLpW2nmWDphGq51HcQPePR7ZbMHvGvbFiQnMPemZ1KrtdcTXqV1ArfA7bTYxwv35852eCRnn7B3QCFWd",
  "key23": "5inovN3bgsaLrkATdYqZ2dRt6EWPXhhRbL9nS1H4jZWskDTs4VTZeBtxxsNMUnhz8xoeGRf6Dse9rfVejm9kimTH",
  "key24": "517SaRoYFHrUzLjtGiW28Asv1GR8MyLPBw4mANhYTYLuNqxCoBbvLqGizw6hpjVNfQQEGPwcJPjKr37ShG868psh",
  "key25": "4DhkbJkD64CdFGFf9twSpaqAPabu8ku8vx47xMoTqLNQEAuQhbCzyzpc7qwyYsFNvmMydja8baPTy5GN3XxHV5ph",
  "key26": "4jbvDtuXp4WhjZCXqrw78PTaHy2HHBxSDARVpTvubNivJZhE1ez1ACAVZZZK4DQHbqfQVLmi7BA9LT83VzDrAAqV",
  "key27": "37tFyADKMHHBWkyim1fB4Wb5uLDxXQa6GG4adxFoE8VFbGFkEZzC5nuToSArojTuhz8oi9jfJj9FJLuycoaTaWxp",
  "key28": "2rzPv9ymttEAxqvCQRx13rChQvLAbi2V4vwdgxRWriP3cnR4Em9BTKnN5vAxTAYq8UXz3vCmZRZnaLjbyTDCjjHq"
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

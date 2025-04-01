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
    "2MHPrhXHJULau85CKcHFmve38SwEFN2Q3x7hgLZVFtm89r9tNgffWysXus1EzNL6xZZh1yHNxEmMQJMiroVSd1Jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxGg6xmJP8RfAumUNm72UjtfQAwo37u6LAAyErfreqfwxWbg9R9dLVceHneHnYBKXV8RoWfZGtWN61S4vRxjwq4",
  "key1": "4noYBpbvbGiNRY7HNqDFjrkvFbaV39Z83JbxcqdMF2uBHtDQv9U44M4PCTWyqxXCvh9makW2Z3yJLWWzBVoniQN4",
  "key2": "2nRqNUDBtsy3TuDXrgfpsaGNDnAhkQRykGgB82cgbBbYEhDwb4i5S9bMYKLbRYgFNdigG1rCGzb1ZEnMgdfwiGKB",
  "key3": "3Np6PFVNB8qEBrZKMVoK2jnqUAimRNNfSF5FbcL9wX9aV8uBCUyRMj3efBtH9nphin7hhdwCxKAiBDvVh3YdGMxD",
  "key4": "CFPD7cuJ48CdqatqV94Q6kXHGz2Tj8tzuMoQcT9FpvBdfzgaPXooRG5ZaSSdvwPJrYASoko7cF3ZrheS1NeYvzv",
  "key5": "2PiKvTs2FDobxCKuaiXqLf3Zrmq5TCHrCG4CtheeycTLEtwsE6i5ogeBLoJvh74fPETVubP2aiQ6NRs3zPbEp4rb",
  "key6": "22QZxmLXfX4BE1RRkmFnNpH6iPrNQP1Mjsw3ASpbsFcqz9KrW56wTEw5hZw6VpSzQjwqaE8KP39kVjroNPEsjg9Q",
  "key7": "57ax8p4is2MFFuJDyrPZEsut3i9dSiP3dc3HtSRv2j7hrVFhrgZWj8yZiBHpLYbWra1B3ve9m2Y3VbTJ4fiMFiJv",
  "key8": "258hQ74zJxf4UFa1Uo5XuTe6WWQP95ed5b41372xyf72VVa6HKKaCeNkda9phbGkh8dQNUHXtfhpEv5zVDpddq7f",
  "key9": "wNzNQwwUwCVkmPFdd6VCNUsb3fdHBmhAUM33xndpcbCoXhNHsrSLTzRwCojz5BCPGirwefFFYg8YjdFCQWguEo6",
  "key10": "4FRhEeyyxhrvPSzzPWjdmdHhniJrRWWc6ETdusuGYVXiJfcctJ5sX5Fri61hfs57QHQzuMc8DGpN4Bqt8NwGUVBP",
  "key11": "3g6vrsEMBgiNW9gPC1Wqa6gSWGbBxLjV9MWcCfususiLXnSv8ZGK17e3eQXuNPZTpd5qGERr43wcGx4huNgMRT4P",
  "key12": "2V8LxYf9SBfEbUwwdGDB95da7e2AkF3F5kDWNg2yP4MZdCA7nxj7eZJL8VDME37YyCyxd71CjYYCTEox8gcaXWRS",
  "key13": "5c5ybbXN9J4n4NsHxE4MkJ3gzLA4b3zcXuN9vAt78acDxHp5mkMeMApJzqNQfWsTJ2dBiD3pi2LeDCFeEGArTZLm",
  "key14": "4iewXTUYMwjykXakUHs61ZYeNq7pGyRvcdzj8WPMc3TgEBDJRdxpuwiTXqerA2Lmch93UpCgSbvXGYByBSx7jJUY",
  "key15": "7xvZef1iCN3TykpogCp6VzMncPF7soH5EpLhum4fashWBDLrnobnuid3GGQ5sfqH7E3aANhPmK4B4BhUA46M6S9",
  "key16": "2NQyCr1VbjfZWLqN4MEZXij6n7qpWjBa3LU5WuQeDXkT3eR3cqnF3jdPxCMGFNNBLMdTDwDxN85UVWzKamJEmr83",
  "key17": "5QdFFbKiewDWnhtTc3Ejo6hSGnApyqSHJQDU4MYovBNavEjvkFrdRbBagTrWBto1TYgr14rdJv1vdSDBsuKd5cL1",
  "key18": "P6ijazJziKSHBsu5DgjjBQ2p5EanYw9bgzrJYEaigHdN5CwQRZLCCCVfdcWg4KQ1k5VGjHuySe5VgbyF4Be5a5a",
  "key19": "3JXzXTHZs9mJFyK5bDhvG6aZFqVdAB513eWxzt5iKDfj1hKxqzftuwstZKYyi8XW9DGV1ThAHNB1Ji3Y61gaJqiY",
  "key20": "4i3xG2S3zFfUTp7PeRp7vGhGLQY68u6Po84AnZ3jeo5pVzs9rYgazfZRG2dRYcPEokKCDZbgxm99U2td1fnsB41p",
  "key21": "45wbageSZQ9qE8u8AmEQknj8vfMDLeQXvQ2mGhLQ63eebt58czEk1jxvNeFPDxbRHZf3fKEZYXUENzuwV6nBwNig",
  "key22": "2cU5vNr9UGN6a8pGrGnVNZXqgHpJkxdDjDuWUD67Z12mrdS54QxtaZmYB6RPMTWayfZjFvzMt7W1izYyxApfELpA",
  "key23": "3aEHErNiVmC2zPkkPReCuTSD3FXisKhZUXZW5PksYNcZ78woTAM3Ek2WAkf9waukwDaz7BZ7rxRYwQRDVy8xAMeo",
  "key24": "2PCRkCj9e7r21ovkoKzuGM5bfnU9a6ZPN5VttNs4VvnDq95FTR1NcZHcTV8FupyDPLLS82JMhhdj1Yg3h9qGPhC6",
  "key25": "4r3M7XoewL9DRf65xqNPJ19vzCxTXxbLyCUN6aG2KeiSsHayqk6QCZTVYHehWTxzArisnVsVTdNVTK7wW2NxZRoz",
  "key26": "5HbryaYRWhQroq6CrMfb1TNqF5YEsRyjUekV75oNgctDV1mvYctJrY3npL5kJprUAxoabCFzkfSjgWPSmZTWTb58",
  "key27": "y4QF6QpdpCtReGPfz1jTzmM8ZqPnRPJBf8AeqdX2GUgdYfKLd9jUBgmE51HzT2CeLKUYpya8Kirhs3hHateGzCL",
  "key28": "Ly1jk4PqLUxi6hShj3MJtjuxUucoJpnWEziFZNqU6bJ1LLgTnDQsys3fGnxfBLjoiqEAkZJiPkoAzGmxVmvMRoD",
  "key29": "2em2GjZYxxsPfnSUpN7HWVini3pCwqxnZwPVyvgEjmHPmDzUWzHhcec8guEWgniCzpji46RAFNN9Qn4318aGyYCv",
  "key30": "yd5xWkDimzBWiFULvXFSvNi8XvPzDftGExHMXht5fK2vBH9uyFf8JQfoiaSJVfLC7dcfy8B2SgdtBBTzdVTYzMS",
  "key31": "4DjQY4qBiX3YokzFtxPhGEizyYaQETvVrYRNEPB9kFEDbcdDnmHKAJKKw52rV8vgGWaZt45KrWK2xWitsWCp1ACn",
  "key32": "2M9bSsF9cadyof7AcZcmCFZYBG16WHFyG9hi8JYsY5FmS6zEK6K93ADJ5RHb4bdqjeM7MxdX4TT2zjn8RXX17r46",
  "key33": "5VDYQc3Cuukds8umL7x1Vu7jmdjWuY21N4dS36QzQSi5Pq9pFUdM7zsFfXPEMeYoAEXEPXQ19LoYmHuNVVP51N8w",
  "key34": "BG5EsRCERaaqCi1bEoGzLBPR4LKxfjoDU5gaNLtM7m8fUfbNzQ4PKZWMf7fgiJVHWQmEvV78barMkxteqkXqYYy",
  "key35": "4cy648GbA4wkdaJYTzBMXZm1RFrdNpjar9UtZLVuU4bqN6d1y4rD9MHmTbYRGsE4fVbqifem7EfMN6g28WeWzmpK",
  "key36": "FcHazkSeSTLiRsw7iqpP5Lg6us9w3oAnDHZvNWSpAWMSfRGgLVtPUVZGynTKEwjdbKpajrvhDYeNT2ZCN5Zb26k"
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

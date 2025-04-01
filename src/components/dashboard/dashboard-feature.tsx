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
    "5PEuEsoBC86KaUQH4L3RQgqwtpJSR5Xo199axkRRECar4krQ9mNeGgSwDscvnQwgvFDMdNzQGjizeEZDvba7WVZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nrWtEkxaEP6wvU4pUzobCrLLuqsL7g9qqmxVbSkeay3WKXdCVUp93vF3871LevdzaNGCxzPVvXCLijfrxJsj7dX",
  "key1": "3mdosPuC3kLcqPJYawMHNeLChTRKzbr7aRAgD3YfXNsxxNVVVnQCKTUJY3kLXEyVbpG77FtNM8G3VVjB5LJkgBtP",
  "key2": "2Y2Yo6QcH8NUcXfVabUpWkTMHFBKmcV3UZXPAKKenbKkRF539HfN4brtKdqeokjYYZepGbCN7Ux5jb5AwduWnVqk",
  "key3": "43var1kUjYdhH4m5csd7dYrGW9ZsKj8EyrCwn9xoo2dZnCu4mUXbBmQNAPuSgQ8iuPUDujCNWMxaXbyB5Qp7KFHk",
  "key4": "5RfJXYtTzNhyMSYm2tZEpqnYMdGqu8a8s74ArzahxmKBebVULuWEBpN9LfEszxJ5gAdadLvUQggsysR8VJqRvAaM",
  "key5": "4rK9HYnAFAKNYG7xbksQHQ5pkkc5GUjbL3c9Cn4WnNpaHjN6LDHDepBCSwHPnwZAZUfPiUvbx8Qsm4qFwJhn3bWJ",
  "key6": "26dLNocXtBBf2WdKX9xcyoTZUm6RVKdGXSbRyXtVGUm2VWfUzZW5UY2kjVPRG4qQwg1k6m2qkfHdLnGrK1vHdtBk",
  "key7": "5sAvYnjqJjLwVp6AjgB6f81oNpCkbeULdqSwarKGF8Km9WgbeGgJARCvpvocweGviNAvYq3YwGLwhHkHoc9E2zu7",
  "key8": "2hxfCPJyXK9MJQLYpT6BfT3DXQqxvmTUVoE2AsUZikMMPLDMJqdQh4QXx4PnYGNKy1DfAFBvsyhxCCdd6taTjtqn",
  "key9": "3v84ZzNhGaQiWEp9zY7xLhpzHxTLAE9K9gVY9zq9XhFpsF4iHaLw86NJPV4j8bdatbEXtsWJeV8kbseHmA64s9j6",
  "key10": "2NvfXGBY2mGRLtFggyWzrFPfq1NuqFm4VmfcFn8YP2wf3cjxch3ktmQiQXrDkTpqbisVCANKLQCfEMece6WaBhcV",
  "key11": "4EruQgoJ8vRWXxYjopCv2rWE8JaeTChSTuZ5LhzMo9hVC1wLeku2SfgH6siQck6FfKQ5s5bZ3uuYmi5c5c4YZmaz",
  "key12": "29f4Jby6LkaD9LjksY3AxDqyVoHvczXBo6KEPVs2ae7rpqEcucDAoBp29GWeB7eWBYQjYpqEHeiFD1qctmwiwkVL",
  "key13": "2P349ev5ujnrTS41g1W48AcvooWGrfW4GYem9KhTN2zDXj92EPZxACeGgBJGWhZNHRXpd9gNbrPHrJHLkQiC3cVJ",
  "key14": "5GpbhsyurDnEMJiP5g6S4fBCjwciwwtrG9NRCfvSqRZW8Nb8RC5jCEG7RRmdWmyEeZpwSzckaeq2KrhRq9UXpfam",
  "key15": "4x2YLDxwLoqNMFTPK5BLW4GTdrYMBvrQ66eRf4rqkQLyp2NqCyTNuRrmaKv3bHXZ6bKiix2jwepw8JzCCGyR3bjD",
  "key16": "4KZMorBZyTQybpgCfGd3aFMtjZW4FMTa3h6HfWguk2p4M1RkqqPgNHGu9FbSEtbVKg9zyYmLHmm449suiNSALDro",
  "key17": "66Tcik3mtbKeCZcVMnVWffgYrLdsrFtXz5j9ifgg9hakfCvQ288afZHAfJhmbV321TgBFCMwgz2jLZ1GBaS62xzK",
  "key18": "2m24qhYsFcYN851kh6ptdRXA6pz6uWVhVacwWz7KxRvwfYqd59gyMyj9G6yZYnGyZwREpe4uejsScrRfXVcoFgHv",
  "key19": "2oAgygJR9rmAGjC8pUg4qx7Ravt6UbZwDjX3fwqbaG51V2JaCCSPUSUAXVt8yHf3WgXkdWTZsB6FDHBhRZrUdxZp",
  "key20": "326vWPxCZfbKTBAyKu9Xivyozh9F3M9CWyhwgSZ4U2xubxvxt2rc5VSrayvZ2ikaTFK5aiYRqtcj4jLG6vdiUAsn",
  "key21": "4egMmhvVQ9iMy6XZBFFkkNKgmRMyiXbNUS1qKbWCQeYEvgur1TJGAWGy931AsL2gEzpqoFFaAh1vfbcb6sQG4GME",
  "key22": "3XXdwjzB6TxfuL5tKbJGviRVZLe1u6Uox2HiJ2RPgdzFCk4E6w3HFrsYTqKg2ZR51rnimiLdRs4nKXcU3opLJxTc",
  "key23": "3zjcYLS2ykZMzvnvL5b3LEwwTWmvX93sFLENzvkUdGq3YhRz84njSvXf9Cs3KAJU3LidBs8cAPmWCfUN6bZcEZW5",
  "key24": "yfsU8gNoV1yxuAo4zQ7xwU9cL3nwekjsmoom3P1mVpEGWXwovokM1UEa2Cx7r123PhwuN54mJ3saHjtYxAL8BZa",
  "key25": "3GQLxsTjESxSRqLXUDZ2WSkcZRyUefu6B1sqfjBygoCDXkiiHqDU7Pkq9krMad1hqTs9EEZ3LcZnimXZomDdyB7B",
  "key26": "5hznaSEhPJ77cHSf8erqJuMUCNCgsiXd1Yue6EJUWxsyNMbsnfD9txBT9xfnQXUV3CPq4DKQcN2D74pX6NGhRRHV",
  "key27": "3NMwwizno8xDPYaJkAPKjN3EwJMPcjHufia8HiYbzZDoxQiAcaQgMPH6JEeR5RqjseEh1boj3UGfyj2Tu1uvLsUG"
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

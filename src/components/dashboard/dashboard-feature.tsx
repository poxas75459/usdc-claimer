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
    "3XN3GCVKYT8LWF8PCRFDie8gBbttjdHEC5EsTeJq7aS5PevtPfyMQeSfP9EV86MxLMqszLsKVjgnCyBVuvDNL9Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yR7ZXWhXNJH6o5vqqZcx16FikJ9nVk832N9S7Ewou41depb76ysGTLE4u7cNWX1GZa2SKYAmJ53RCnZeENbhoYs",
  "key1": "cD6ydhvS23TRsBgK3HXqTYgF2xHChVA8ZNDNtZvSdq8gygycUDAweP2iAmBWLNzSG8RcDZiBCE2Nk8b3nHPxSC3",
  "key2": "r3w1rnEyUtTBz93Q9spNx6A4MeoTHoa7T8G2tZ65ALFQPW3XhXtQFkyg27Br15zk63KZGc6gXaKjxtBd2LzaaX2",
  "key3": "2uQCyb42owr9PnT5epZfJbugyCTne2hCHxndRghQuD3tQW5vJHT7Qy5mDK6Kg4L8YUPFchKd6GzcoWieupeuaqgN",
  "key4": "38dyLAzD4xLVC5M1FuNZPr9auCTsXYQ8QJG4cqhVT5cKmxJ97SVkRHtTawQqiV9xopVPTdqT95ptKbfeCfkVb65e",
  "key5": "2s29bdEti7jzGdUfPyAEfVTG9cJKTvpQeREur1nHX3uduZMfKTpDZKi8LAvbcDhvaf9R2zVuEfXZuzuEu59ewaCb",
  "key6": "3VJPaNRi6PNb7oGTNzpecHPP6gvNK1wc8RQXio2hjXSxpk9J4YXVevNMVmdw8gDoSqhvCxTbGhsn4YUsLRiPNf8H",
  "key7": "5joGF3ABAEZtW6an22HNBFz5vddzGMXhBkXY7bMczedBvwg6aG8Sn3gZjjx4yVWGzjN8pNkK191TwstHrc2dSPgN",
  "key8": "ULpttNb8ASmqC5bbdHd9FTRkH8WAbEXfAbUniR6oTFe1V6RVWPSjyxfn44rHgz8bmricXpUvW4K9Eouygmsq696",
  "key9": "5wfkittYxo8hKwG4mGfVjjQV6TQo4MGwGiGph8bnhNhJQjzcKm6KdfCJ9UvZrnK1UgxBA4MGb52wFDb3qCSJj8kA",
  "key10": "21s4Nh2NAjGWLfjWpkUjhmZ6keG2gHSzXMm1qGqQYepurneT7tQim2TQpU2nL12uk8Rn89McnTPPREki4kWGYzbj",
  "key11": "6U4QcrxJgHwG3FyrpVxJ5NuEaoBzCNraDNSMUdGbat6722mecEc9ku4BYgEpc4QwM7TQPXnsUSeHshSnzmDkvZJ",
  "key12": "3R4Ee94ibPB32oqmUAaaBk4x1nqMDSDN3vpmcC14KLxQr9annwzXnvaAhmwhFEhbMkXdfNBUB1HzdiPuTdoDU1sm",
  "key13": "2dpYnp9TbyRGG9qqYCPeZEKfSh4pD9JCbEojcVM7VCiT7AsfeNe6NuBeJdckFRDmApdSGt2gedpa7rYA9CTpmFbH",
  "key14": "35h8VnGTsGjD8HCWEoPwKiTkPchUtKfkYfhQaMXnkRURoFEy7TH9Mh8fFUJS27n8KzhWBsneeLgP1RpgHnBmQfHP",
  "key15": "QJ5c6d6rpaztzMT9mcnwCPMPbFhUa6hhwmxK5sXf3DDgbQiNPENXTs8LDrTJa9ioKaQakrt68w9ennu28UtN96D",
  "key16": "JK1gpwdukaDE22w8qGEiTDHNjaaPMi7D44no7qX6BrUJs9CS6neu9vr7aNDgCEFPq7Mu3XxCL92y3ERCUJiMixw",
  "key17": "42mH1kXg5ftkhxhLJ213YpUs8U9bCrnejMJZ2auFpfj6zLRZknxdWV8dJEfvzjZGk6YjqgKua1LYMPVb5AfQm6Z9",
  "key18": "5Rmn5Ap127nk1gWHBZ723Br4ffosp3sHUYkbji6wwCoPbu78zg11WsrksEW8bRDdSJrqsYe7Zvq6krKSZuVUL3sb",
  "key19": "3fEaMavW2WPCZoJ7BkJNNi3ZM3Sb2GQWueQEF9Qg4QtXApoPi3zpvCvDyG6Qmp4iuPLx7aHcpH3Y5akENt8cunq5",
  "key20": "52BDUDWkKq656q99sAzHdBgj1adycVE53t4y7yG36xUBXk7UCSYDkNvAafY8RYdaU4h6DeEzpUboSz3CH626fagG",
  "key21": "4WnBgB8FgZ2ghtY5SFo8RNaQSappwQNs3p7bQjLYxMfQX6733sR28cFqoZo4BgFSz7L8JZGghwyGGLeivFRDsws7",
  "key22": "GryntBcQxAJvyDEn53bsUCDQ4Wg9tjV85fs67Rc7oaa4HdN3nrCi2496gcZxo8Kp561u2KTbKrZyNnMF7kcEmvs",
  "key23": "53g64zk3iqg5dDwPixNeLrG6HpRbK8DWnx3393xSBasiJfRjYtDqR9FJFDEv7LCF51sMqFSgpg5uQ3fnE3Qtk7xT",
  "key24": "4hGYJaN9u5S8RRV2UTqC4xkdfaiqqhwWwiEfXCSNCgvuxhvs3kmofEPFGfueJSkxkwVahdAKDGL8jyDD49E4s6C9",
  "key25": "5iqVxJci7e2ofTanSthThUuTyDXzThUyma8uuh5EKRigyLc57957Tx78f88f5aCst66ftkRwCJ7rLPHWNwwBFQ4p",
  "key26": "47SvMRvFMRMa63XNqAAytVNW2X1q2o18DRdrWYsYcyFRcSpFvJ3Hct43qCvZh3qU7t94r4kvNqJeKsvdmX3ujwxs",
  "key27": "4nNFEmdPLuaZhZ1N7XZP5Uvn6w1E177GxYJXWKhtm9cVWCZTAgnaVkPshjQAVvjFtp6vAunsFznNdEHVNjunJZVH",
  "key28": "2vTCee1ynm8fX8ChFjnMfrVyukTWhjUvRj7PwdFtA4BZqrGeC23dxU3bDqzYbRoMsY8JTtYEn6kDcBGvZ9ykBt2h"
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

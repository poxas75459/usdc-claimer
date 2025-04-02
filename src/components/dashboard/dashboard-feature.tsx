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
    "9G9qngTh1T1K9zLsBiJx7UHTfEEZ9FitoEhzDnpWQxMLeALB1VZxVJxGwvxjBmvvypsuUnUow2zZpLDmDxGY8hS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKhPEvWBR2qstqMYed4qJMFtHqJfXhimveoMezxzA3pmH6JkH4nx97fgoNZeL9nWhnBFzdPYWK8g7LmUBfhqw6G",
  "key1": "xuH2cMGuV5V2Yz1FqdFEbomdYdcpLnZRy6hH8AC6HQ3iPQDnP9vztSJoGa44iRKQoAPLieZAEkqVQ6svpwCZtkY",
  "key2": "3abzv7mVF5bXBpMoJVJwGgE6Y95Jq4Su2YG7NcigiAWFEQxuDXvFHxEG2X2XTU1WConk4gSgan6gKcQfwRzpmMu1",
  "key3": "3HNH7MnSYsANG5rb4ejtWndfvNFTTnvdAz4RfyQ987R3vW3ntqyyZtcX4be3cLAVGXxG9BGFbTxdj3chEeJ5wP2b",
  "key4": "4t4HFVK1qpE7rUx2fgSsCedEZCDhVfPnpLBtUqTxQ8wHxv8v9QDiSBMWdoP7G9fr8QiNVHy2JtTUrazcLHeEabi1",
  "key5": "42oiU2YeabkdULsWqvcZTCyLrz32kRa9rBhFf4vBrmL4PrbXLBMGYNtk7HFMqz8xGaDhwHy51BPV5HndfQVNvQ5t",
  "key6": "6eWet2igwE71JgqPPAosCXgqg2imVMKUSJ3QgN6f4Ymy8ctHbKVdvy88vncPC23PnfA2a2QbBvqP8aqW86myut9",
  "key7": "5hG3bUBjkM33f6bP217Zs4FQPutY5fpMFsvssQVoTuRY7EWtZXQPz28NuctPJ7ZAXCTMph6EJJDDdR8wd9drYDET",
  "key8": "2zobYCr48rjCZusYpg6Q7PNGqheL9HKBmm2QodcqyA1siQ5iatLEiiQff64YQxfbvfnHmamSHTwSpf52Q3XSAG9N",
  "key9": "5sR3cLM2C8PifugjKY1eF82QSYwsYwLYXQD3bw7G3n9cegg3WfemWCNFXCEwAAHXn432pZ6AeumZND9i1TVnYNNf",
  "key10": "YwubSM7jF7Ke8gn2n1HG6gbz6wNHfBQqfHVzJNsJ6tgvNTDmCh4sLFfbuAsijbgjr8yhsDj5mWU5KVvHNgNnjBE",
  "key11": "5AEs6BCVMwQPodB5E6R73Zjxm2B8jPAAoku4xHsfVPcchzYiw6cLrvzPKKA8MHjR2vEwmKByeWQ3Kn9jQEeobJ5D",
  "key12": "5useuBWTCynW5ZMGcTZrRMiUZizF6Ct7fnX4ziRCMUL4jY2rHNe7PGw8o3gGZNfgA5VQJWhBu246pLszHq3wPEHC",
  "key13": "R4yHky9x4cKGLkhgALLxSzcUPkqqkUDu4ZCMctFud532GHDsrtfpWCuGi4ye8UozUtXboqViWcj5tgXRQoa6FHF",
  "key14": "3NvJShaY1LwXhx7bNMviKhP9ci3ko5srDcVDpmaERxb4XE7gPyVWp5bPJFHvMm2poBRvPKNbMKenGwmnLMychChR",
  "key15": "NnJnacqzivu9vgAsk7L9iPBChyzA3TQrA3HQoWx1jSh3S3wX3VEmapx9MWtpVYCTU6WyFF11gg36CVhBdjSxxFZ",
  "key16": "2NDobyt4nBXJDxAQNY63HJQdtfGkigP2cLcGgEG1ReTKastNXPvpGT2C3YYdEiYAC3ePnWe3ZGT54N3SQ8pPwpne",
  "key17": "3iBZPKp82XP7731HnvcnsUVEg1Jc8TuwyaeSxsrRN5zksyCRU4yF2KWwZgmhoVqBPzwPtWmKw7bJoYKENWfdK37M",
  "key18": "8oqVDUGGxyUarQcShJbHKJsKD9FtNMs3qCziJzEmnZABsNbUNeEvR9aV6EHhsWr7kZhR6pQRzkvh2LnPzSmG3bb",
  "key19": "J9Qa649TPD71cZrB2DNSy9z2DShCtMQzsuzgC2Sa6P1xx9eDo6qBUxFxABgt9bYVXq3UsK1D1GLfeCbzC88J3J8",
  "key20": "5X6CLcunpgg8EQT44HsYMTLLxvQGNktjiP4xHLev26XTbiKv7y4h61dewy5FW6jkfDQnDJtFQoJppu7VrkkUD3uz",
  "key21": "2HqtjyLth5sKfFdkLxYedfF9N3V1EAZzKT4VBd79yVoWaWSQwiNA521WJTWgkyerCx4TZwPt9nP9YmNBjm4TqkkQ",
  "key22": "3qnGBgYuoTYvULJC112DjCBAQ1KjdENxJpqA9JhBmZafxmmqCY6KTZ1dny1HZJusjepsrtk8PS64HBnks5NsPLqY",
  "key23": "3tsrMNMeBN9Kvd4bV6Rx1gcvEWgYup8WGipAyzE74d1hWq14EtUDpSPvsFqbehcgbzE1Fx7jWCq7UDBChsVvsuMh",
  "key24": "nDC8nYuJkTx6mQvuU73oyoV26bQd6Ayp2EWParHUqN2Agb9CHV93uz3Hx2x3ZLorFQv9KeZ9MFZm1Cq1fUutFKA"
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

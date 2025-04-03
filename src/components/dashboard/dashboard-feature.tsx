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
    "3vK2BiguhfJ1SHzfnoBP9XMXqWGgTTraoDCsys56iz5FXrYiAJhQTfEP82rfeuUWN4uNCm1NePoQnVVobv79Pfs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urQZibAHfhYunqvK1cj5AxpriSNs9gRYT31rTp2bHPcAdCD2gecSN3PBWyFYwrweBLEDwmGrc5FxAsSX43NZmMU",
  "key1": "5GegtsMaXCiVrv5HaGr4MrscinL2SGgRy2ZecKGyT3PpbEJtZLaXQhXo53uu6jhKv1ZYNLmWVxZNYyAMREVq3JV5",
  "key2": "2eoX2QpMwa17TqZ7krstoMfDT9eiqixMZrkMNhpm1GQkWiyAuvTtkMFh6NXTnnRwK5KEpsqwQedyRqJGo16epn1e",
  "key3": "MVqG9RKjrQXUvb66iiLtF6beZoBR5XHQSZFKF5JiqjeGQ6BSrVQnwStCNqFXyPw9b7x7YsXnH9WcY3EzQQFeXde",
  "key4": "34JteJo2o8oBte41VoEahyGRHUjwCt6e5ajmhaWccmAxyAUYXmNfScXJVkssgtVCkN5QuhAaJoNqgjCHasA3eoag",
  "key5": "GqpABBdrgkmnSmZ2hxXUiBBRA5T78byPk9RBi9Udn7rkmrnVPSViU5QKFmg8bMPPtaSeobW9pNrXxvownUQfBv4",
  "key6": "4aBPHECe1WnUNirJKKyCByYC9GEAUJbBGYFVR4hJ9LNudhdUctqFzhVwHc2VTewnR5TKPGdzzfMaHnEduvXAiGfR",
  "key7": "3DrxD79wChCuUWuUANdiqyXRiGa4ddMDnaJHnQuf1JwwmNcfmykvCBrVnLKGRRpyjSuf9zgvY8DbMbXAyuQ5KbHn",
  "key8": "3kzBWZdQvVgRFJbwrmgRBapwyN5Ef6B8DEL4T4YT3bj1TvRxxwBpJXs1GPMfmT7YjvTbN6bRChvWrjgYRESgA6or",
  "key9": "5qnis42Pqnxfjxj9SBcun1KaF3uryoamJQqVekE7B55kNWqP6936GQ2B2GdcPb8aP2ChNPWNcyrVm77rKzGJJM9N",
  "key10": "34XoEdZuStHc2LNi9WPUWhSqEKnck2uGpAZ5GMbgSu773uhEvnmRM2ashVWpWL9xNejU6DdZH9npx9Zb3stCoZ3L",
  "key11": "5k3HpjSN6BRArzXbQ4vAP4xK5JEQKyWzHW1sLMLm5UCZVwAA4bHHKjvcF9Ri4QTDPdjY7NjUBfouHhf4cbuiqqpW",
  "key12": "4gfCQgmotJNN8U44PvaxwLfd5a7SLW8V9zxhug6VYkxaQhpQUWtyBP2K5rczyzaLT5K4YpavoW6X2SxtikAdrRUq",
  "key13": "3YdhCoGDHmmP6ajGLBYMkUd8SSP8XqcrG1SPS9YAjYtCd9doA1qWXhBfJRbQ7VNb2soEHXpF8xoZTo4qW9ctwQUu",
  "key14": "2bfbzGaVNtTkrg9eevvBfbyEsZzxFivSfbU6zB6Jbg6X8he7XiMnraktFhK3MMJrrS3fo9ttmAiSBtqBGEqbfXwd",
  "key15": "4LrSML8eyek1NSgToPKvvTsSGekzjFDAkJqgCybHWUFG8uUDk2ySQmtkefehZsATiux34UDQSuys8VHrAXaZxpK",
  "key16": "uXFkkTwcpsyxyuWfynordHt6e3HoFZasjWnzSNMKxJVuKt3ACKnQpLj46mq7wtkEUAB4Xuu2D1bHsGNakEM9uq5",
  "key17": "2WHBTHFwCbVyuDLxshiLwbUhEV2wZMQ2nWs4rFobTxS7hpucw2GfjWmf9sSiD936AsESkojCVLzgvgSXYZwyCKwf",
  "key18": "5L1HEsZtRwaRMfeoxY9ZdvHgi4Cqvr2gBwkXthtBAUFoAw5R4MNGVjQw3k44RRcHaWZZ2VrCXcFy2BJudRymNeub",
  "key19": "Y9b49sBB7BjvAptT5aRLCGzswrqXNtSrYdC81sDgQZtZ5RC31p8CYiSF2wi93r6q3XwLpvBMMps2YG5GhzCDxkg",
  "key20": "2ZEQ4LU11BXqDRoZDu5TgoTKEroD57pyQTWJxbuzDjdycZJDFikCZHauR2JKwQUm8UCDwbXgXZ3ibzrmy8NDJcAN",
  "key21": "w9y2NJbcNzZ4c4rhavAk4EjKZ3e72S5zn1L1yJECYRmG8maYCvuBnnUxCXGTv57R7GpYbLSpJhPyf9uHriFXG3q",
  "key22": "3BkoQ9YpHKfuBDxMHWjf5n45XZzHMeYgnVGw4Q4dkhs4qjFhXoRjD5RCtpYJjN5sRy8YunwhPiqnW9QWSYXmSVGK",
  "key23": "3AqLArs9y4VwzXZyyYLfsvcBq5jsNqeEcnreH7q3sswfFmvotqWYL4z1bMbyNpRZTduoS64fpRheSAE3zEPs8m7U",
  "key24": "5sUfVETsVR1rML96KXUWWKfN6ceRn2Le5GkbwHdKWBxCggkabw7kRsC7xoU6Z6WQkLQZrLuFMcrgBk3cwCFxUZQc",
  "key25": "22ZrDWLpthVWyLLYqiBNWEbdC4G4ggjY8ULhaVbGEn9qRTdyf7ae221MESMJvgFKLpNSfbukvCMrjhKK1Drm9xdq",
  "key26": "5Juevoq466M52kUT6S8LieMLwgCqPrKXbkaozUYqnYwnwVmJ5gJ47WEam7eVTkBZjJZAShBQ9ijaSdb3VrJDhk2J",
  "key27": "4FNck8zNW1FrC9RBzZvybiwYKPWex2LQR5UqJEo3Lm89hyFykSBQdLDBRCn8BVKZeJJcirzsSXuvpQbWnC6a7k5Y",
  "key28": "2sQPUA9EwGgoL6BVueJE6hGvcu8SgfsRGoRN6bMMPR85Ds3CgsU1nJnUBHTwm2xnZ7i2ZKkzvWUPadf4VWQMPjL6"
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

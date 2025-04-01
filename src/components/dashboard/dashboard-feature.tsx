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
    "5NKdRnDAzGHR4BEWT9nfbSUnZTQgdfK3rrJD4AqJMAHNk4UbBTHb5NFWmy8iK3iTL4XN51uLbTVr9YiesGjyLnZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYFrAAcjgyGrrd3tSaMabuJ5EvQaaXcoMT9rvjhf24bEQcjvqydABsGYY7md3BY4k3ujd1tRyA6MjWoB755MZxn",
  "key1": "2r9v1SbJauD6QsQExpmKgthJ277vCPoff3Vmj2MuHwfNYr9t6XQrkVgzNQDDTaieRbHuzv5zUQNFdUfziP8UMjzV",
  "key2": "3tLpjkAUUXQHGtvK9RKFgCNctKvzoZM4M8E5MSfCPhH1uRDygku57HjKDYtHxvZ58TivwHvbiGeiBAKk6ZkQb8ci",
  "key3": "4VswDurWis1CdhGEZNvrHzgQ2rkM1Va7qKEEEcvyZSY9AJXXAmBCyX7iqszV8fASZqtbMPy4uRbuHRF5SiXHJL6V",
  "key4": "35B7dXeTp2JuPdbC9x8eDrD4Rid4Vb3dUNHfHLFbuaSxeWqt5xjE7MN9PAuAEEvkubqCXaBQL4kzQo6kdV84zPCr",
  "key5": "64VrHvnms3qpAnPesEs1vNGfpBVMjDZ23MHGkNM2i9nh9jqpJumwonmuBSxhi6jP2RxgiYrFBoXSCu14cAmdoAtx",
  "key6": "585ctvivqiV7XNddqY1zQaGtjZGqsN7fetNpXSWiCWVu2FjeuF3n4oSmyMZor1CjAwi9wpd11gqdFuNSbefCqWpj",
  "key7": "3564fmyL5HAiPsgT4frMKCCJN38iVLgxHdEc3wxvdGvztDHjn1hQ3RZwLge2RyG3sBoXdygcZVciLdaCGhNdsnTi",
  "key8": "2FTfMLwVZMY4LLNT94oueAiebEDaRDydXkF43HyueCgguJs1cyRQm9egQiCJkrPhEY8uYAvx9Pxz2qqueLpW5RiA",
  "key9": "5K7hu8btPqZDWrrF8Ko4SGME6aSyYQ1zgjiiBHiq5qbHMD4kJvpuiJoHT6Q8iWteRs46a2xZVKnnnP9V755suiZF",
  "key10": "4YrVKt2fHirNhrn1bFGh3gvNnjhQLMGwukod9BCr63A5x1vcAr3AyV8yjnyA5KeqYwZPmULUtYHmqZ4JbzQP4tkJ",
  "key11": "2pKsnAgNTHgjM728roC5Lhg84XxXq9RnBMiMMvkx3Z83xFwa6GwpXw91NcUyvMrq1uzBCpEbK44cN4GpZpZBoqu1",
  "key12": "34SY2iqyXCrQ4iqDgFMRTyKUVGKQLxK5PbT3XATeQFJYFEgWSFLbfsraqDb43mrZew42GNyJ6RKrrvG7QNZUPZSG",
  "key13": "3o99TZibbhtBqrvrKEwyo2gaDANmHZvyGDu4jn9vwSMMb3JptebvS5eXGyWpwzjMyT3NkqyuRKfq8k4RcbqaB8zB",
  "key14": "35ZRxa7f6bC1gykKXKtsKw2pP7xeAPJ8mCVAw3YiMwBz5h49jXQzcerR9wx38aSivFStLj7AB5ZrBYRAPx5A2Qbx",
  "key15": "65uRbaU88QY28XZax3c4eJ3UVeRtb4FHS9asjdXUbWLPa4rkdP5ZGV1SJYafRFNLnn62GGiKF8GnKnCZE3vriYBw",
  "key16": "5XW7nyoqAbWqd4XQPccoFhLYhD41GvVUhdqbYHFArMrwiW9Cyvoe2mxZX39rUXxy9R4S3NTN18mhxLpqg2K4PEoN",
  "key17": "52r2kQDW9SHrjZXiJtEHBQPRRJt12HTHrU99o8poLwQHiUCz5PG9W8vx5QQFqGw9w6nLGx5eirUDA5hDaD8RrQS9",
  "key18": "DSzaYCtbDGpy4EAaikRMUHP6GLPbN1eDVUAzu2zSYxdYzGcsGGp6CEHUS2qhbrGp7akuLqxw59uJNDbkX7nxNxo",
  "key19": "5jveEZRe7fdEMsFPqsSdGFZs3pTV9kkNTntWuqbNw293jmUC4aDQvjpFu6RQfR8h5orEnx4hDm8cz4vWbYmq9V83",
  "key20": "4LZN9YH35cTj8ficCrjXGgv61i8V2J6LHBfymNFzXA8h2Lh1mo1Mc1Fr4knF3eZ7Sg73MjNv1dXP1KTqSfi8fRFc",
  "key21": "5qB69suSikszU8SqRVDpqHtjDs8qx9vnzfyF9dZb76hYdttNsWq7Fo4uSCXJa5bsBCXoCvwiyswzuCXhTwSQuj6c",
  "key22": "YP3W1xdvfPHzaxgh8qcSA1uPrRLgWQxmbsYqFBc1eqtFdi5JsFeM3eduVmgfPQqiDKvoopXK2z5wiNJnuAfRfm4",
  "key23": "4QFXEKxMZX7NxSR16NfHyvpJrf8Gy3YSkxRM5HoaNDhyLQxinvhBQbtfEBgVBVCcXCVgLPfCQbZvdBaU1qFtKXFL",
  "key24": "5JzZ86eV25EvisLRnybUCBKw3nZ7SPGPtapNzzbYgce6F9n8ytJSARmZwW8syMd5txa16fFVeQSKDYJm33EKvsn4",
  "key25": "55x95NvRsUgKa1YMEjCfWy6AaJdZmtY5iEVhp1BUmotjTZsj5m6TybAfD79zbpzC2kuRoeewH2KGQmSkA2L4cB1C"
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

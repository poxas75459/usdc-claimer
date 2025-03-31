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
    "2y8VQNHY7X2C6YgfzE1ZpPFDWrATLnCJjPtiVbX4ZkPJhdy6EKtZaUrGGX1Lr864k1VMjihkda6FS8qB2nYjDrbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DhNixSmSMoyjv6QLhwsmJmPiift25z4XuiU7vZ7NEDfjNzg9MXW9jNoUP6chWUPeNYTqnjufoi9of9UwNskuM94",
  "key1": "5gJ6BMvCmYicRyEisFpw2tYKZs3HEpC1MK5A2tyzyqoZbCTjBnwPws1ytYiV14CFhDMmkbR4aNnyiNSt9qrDm1aM",
  "key2": "33GjD9tPw9yizzxwxVEgYGoMHuxSi4otUcAUH4bXRTzzByzxKNSSoRcsbMRD3bgVEPwbGpKiu1syB7moQVonTh2m",
  "key3": "56CWgBSfes3qjBFtAWES35m5pvpcNFvX1dNzX2k7vhqkeTfTascCAXSFZRr9drQsPjFBfMKKY5xV18S8udXvsW31",
  "key4": "57fjfkXY7pdp2YX2E5GVg7pjF5oKusHhyFqE9BfzJfL2GJXAtYZfSVHibcyUCBJMzrLySdg4qzkPNAWXV1ipHhP9",
  "key5": "3jeBSXZdcJrW8KF3arQM1BigMffyYnxnykzZxrdwVjwhUZAZDQK46MuWFyn4V6CpURPpxHxcfs5a2UmV5ix7pj6N",
  "key6": "2JyUxmEf4AzJdNAgW1gRmNdvHRrxmzfuHTvkyeMTvpNvVzftyequiAeAWQctP44kqsejVn1hvntTQ3WCWc1Tm4aK",
  "key7": "55ubW7Sz9orKza1mY1FLMr1ZhJcoRKq8JjpsNkk6rwco7kijD1pf2JBThP6wwJkZPwFWkwM6vRKBpBmVA9C66hu",
  "key8": "ubnnipAdycruhMNXb4Uy4a7cM7u3EygWMExha6f7TFNdt1x9Z4LvhWGw7mFSYGLsEKQ42YyKvkushuyPPGJgRf7",
  "key9": "2xn9iR3SfGv9DTUAmGhQHXcf2FZeM4jnkcesit5GDgLGpkZJuq4W31Qbx8S7MvixXV51DCgWbRpMRw6DCRCnn8tF",
  "key10": "Sf2435d8uwdtPVs76TvLoryHEaMfQKLCiMdT5zJM6o5bgwWTZotYxshfhrDJv7wJzFkqgygb9jnHEtWLWk2RkWz",
  "key11": "36ydrVXnnddD7HTcPpC4dT9iSmw5qxXyABthwmWyUCv8GMzykWYtLHA9vHbKRBXU8CJgaiWNUiroKMfxvsb41h1o",
  "key12": "LRZrhpVLr7bkdxjwYfqw5HyXMCumM7vseYEx2TetL9BDF9QkkrqYrnT53TRJq5UbNK4mXEYtPU9oGmEy6xfLXMX",
  "key13": "Mv4cdPBzqB49KLKrjiJT4ayi5RYPF2igphEd4i3A6QCUcQ9RDdjg2sWdLQ7adi9gneFR8nCKkAnhwDbp6pVurzN",
  "key14": "WkJCGmXUkkMUcZf3YkkGq8RfHCHM1bmQ3e282gDbHEkC58AtjWXiPMfZQ25qjsCseYieAUTfvV74H26uRp3uN2R",
  "key15": "hHApbFTFvcefUEZM2g6riMrFgFrL6ztHnzZcf3aHwhJvbWShizTKTu5FirjRwY6rZhBEGVYH3SqkBrAHeCG2fSK",
  "key16": "4L9e8txZHm1AUoSQ7sZRXAUZx1eaewRCEgGSjqe7rygKkJYLXVy7uspwChPckiJeApuD9ywuBs9pi33v3aM3VcHm",
  "key17": "4HtGiJhSmGzkugvEGPFUE4YTjj6yni8yxTb36kG47YaLVSfGBmNyygq2WrGacor716tLjNWVzJtgfaRX2DEVrTVk",
  "key18": "4hoRTzzWmxxn4eN8Fpr8yhKwnANPmwUxhQD368yaaPPaXXg2y7STJR6YrsqdEYBrosWiZjyqF4iFznjE928D6YN6",
  "key19": "pYvF1uYSyEgm6qc3eFqt7RxXbupiFnFBURwz2JFbT9xc8NdgEtfNbyhKYaczPwqoZSVQtLcX6pejKkGykBmS8p1",
  "key20": "2MqiicDboiRBzL1CKz34J9KAG77VYyqE5G6SbgdxxiDdXxC9Nz9Gq2FR73PzUHtSw4gFUz95t4qek5FRZ6cXG25p",
  "key21": "3dHh9cCHUgz8QrL3kj5iAxfCVbv9dQcGiQfBuXVN8Spru32j7LKCFmbtxpGTpLskfsoKJHyfK65pzBp84fRbkzYC",
  "key22": "62P3yeQobgAkbiJjP5kxPN2tFijtCXGFVqKPxsgpinfbLMdUaEuftEkxvdpBiUScoNoH2Xaq9BRsTwMyzSt5xNNQ",
  "key23": "5Mc91W3x9yuJswbb97fcWMjZfphWmQxk5E888vmoz5Dx123S3PcK1cyaQXR2XsZ6xzTjN9DLJcE8ii5PmmAXNWEH",
  "key24": "saFi4bEfAy3nkzbtsFZnPGugo5C6KevJefoZHAcprvVs5vdWbtEPbSG5q7ZSYv7eJ1TLBNt7cBoPoq6vrRfdQ37",
  "key25": "2sBKvjnWSiwfFj47asXNAexZ3oVbVoSSU6hqZFgNGLvXRJsFo4jT9YbuqXqkgBG69mMc8tGfE5qSmxFHY9gqGiRa",
  "key26": "3aA1wUvkn246VfxXCUFiWfH7Sp5cUWTMdhmVp2N6vpZLoDCXvkz4VNe5xFTQr6WCrBomBuEdBGCC8ca2kYHWVV8H",
  "key27": "5qPi9GGCBzgZw7TL9vpkGky2w26jfdoLvuDS112kTnRo4JdyYAhyyM7YKZC5hcB4MZrju8knepA8CkoPc6K9m3oB",
  "key28": "44qZyVXrnffD2tY6Lz54ovCssmhTHAVc3kuFDi4QcT5jbqiEaMHyzyvRrFcEUHaZHmF1zemVEGGSPgMtG7cdyjXL",
  "key29": "55UMJna6VmgHbGRnrW2CvxrE23oZrJvdMLa7sderZrjSrA2jhQPnDgSQ4hgPpkQmzm2xBW3Q4z6NZwqwQ3iMpVBN",
  "key30": "2Fd6JroBRudKcxF3EVST39dUNqx7PKtga9AtgSETa8VGMyDajYWtrKZpyEYyEbV61tggXqhekvvQ9rExYZAStC8w",
  "key31": "4MxMxrUDvABEfVdnfTtcKppA2zh6646qMQGJYSMvBP9MQondNE7hpQqSCSAVAK7BJQuUwQYuxG23Q9d73cPoUqv9",
  "key32": "2xJ69R1XZmnJub9D7AUYFhCyrpr651xQUnHXQa8DQ62chpEynmETi3pWoLPVBy6FMyWsAfB35MerFb1hApzt7NQu"
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

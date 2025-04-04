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
    "4UUVDY5By8PHgb66jTea9aaECa4DFfnxgrZszFtGt81zE3Sp3cQkSc6gkxrETDew1w2vLEnwMQJYDSR5c7YrQ1tX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y44cpB3B8KFWxhVFDgwd1H8pt2JkegT6dSqvmZUedtcEnatiqr9KDU3AdUnLg6mDotge6ZWwJYubTjwP3GhqmDX",
  "key1": "5PrpcidUw4rTBz8fdwx2FbnnSL1pKy7opxd7DSj6Us8CQbGjMFe4pqDycAfUKje39jzitxtwxhGNkWLSgMMNkyBc",
  "key2": "3joZ3obLQbuxJuMq4KeTGGb8tGX7CxHRQ2MMHuKorwyrbqL7wq43XY7Tav7GbzDinUFWbVojfqSYYjy6nbsiEeUU",
  "key3": "2TVbwWLztZkARvQyUXJJnvLfeMY7KsfjnmKV3WpghqDJbaKhU3xLPStUwW3bhLKrPMosSx95ZYo439j6ypVkLXhN",
  "key4": "4MvfygHtyThJKJpxERx8MopNJVryLGQqEGt6unKZB858nPVA3otn2MbXk6YKZ8ojdVB1b97j1UtjGpbasgUxwMxK",
  "key5": "33Kqbcos2hDRGVu8CxjkNi9TF8JFuwARh3N95e95tLD5ZcKwTjEgF8Zv3DD7XaeYzD37dQ3TTUzwTpfncfJfSzyD",
  "key6": "5nzarLeaRT2TS3P3QyeKMRPusYYjdVu9R2UB5iDA7vtCnN9QvRvkAG2VwS17Duvrjyf5qFZ5pptYt4amcDFfJgBi",
  "key7": "5epouFWyd9J3CE5QGmwqs8epe4CxMi96PSiKLHmzNXoEKh9q2ArquZtoA6pnZ2S2UtchNoKj8CuPyhgNQXJ5P6t6",
  "key8": "T27wqeStsjVDzJs9EP82W4Muewce8vUadjwri9R2HuK46KAEaw5gQmmEB9nDB8Rfx1kXRg9vjdTfQ7wHrYBqAvY",
  "key9": "3oSVwXjiMbU61Lbyt2Nqaq8we8o12okAxq9bu4J5i5r3bFsp92CoEGuFoHTY9kr6SD1RB5LmRRJjH386GYPc1YzX",
  "key10": "3u2CwfQtc2vLphSZmmP118YKoK94pnZSnZzfqp1appTYZwuji8jkQxNLwjPzwH7ezjmPkqJMA4iT3HSwRPUNQsPh",
  "key11": "5DnmDk8pFkXxuC8TXJyFB2bxfdkmpdizUqMTEqQe1hKxpXvqPTFEUBi2z8UHEHiBtAzkKeT7tXoLAkdJQBwKsf1e",
  "key12": "41iuLCCLXmi2UEk6LeQ5YLNyZKYT5VhvcQkn5vU4qntx5AiVkpBjhqPBuKrpJLav2CPjy4kcYbGMHgHsjZkgFTQo",
  "key13": "4e1tVfgZ4RDgUVSFv4t4bFoMLdzCn45VChjXybnPEdpiSCQSoepZBifpm1zhmA5H5oH7fPeM8SKh8cRdtV1Gnyys",
  "key14": "4cJJk1S73sHbsAQcn5ikG1skdezv1ARU4khDHzXLx7HVMttaTATMSDkkc5NNk71euCmdyrbtyTj9hdxf2XqisWQn",
  "key15": "2RcUKkKrpjCgDrTeHCzF5KQPWn1PgUsa3v63LqCKLcjnzYLxQPvhKnUnXd58ua3NDbrq3kRTfFi7magNw8KawVR",
  "key16": "52TURDybFHHEBzTNxpGYin44owBUpNzNTr6badFPHtZGZUuxW8YCKgPheNkSoqSbLcK8F9vAx5oosad8NxgJ2zkq",
  "key17": "3m4CuK1S71nn3LYCRn6Uw2VQAPGm93NgRYLXajZQPvfuY4nNnHrtv48bJADiwB5MhyGYF7YZfHm91jw8Wf2YJJb1",
  "key18": "5MD9TU2TppiES18nBpmQT5ddvdqx2Xwm5qhCd5GQnynpfiwcBL7CBHbt4JMGfBZScd7CHG3r4qnbksB8DakFXF47",
  "key19": "3jNHr5EL6hfnK87GDu7ivAGVkmf3DoaYjv9XdbepoPx3he9fi267deuvtATs914rg5zxLbugduUwRSZUwPfVDSup",
  "key20": "3aAs6D3rNnRVCceGXGPD9EVmg7nXa4CTD6Y46uhPszp3n5hw4gn6peTsUMfH4F89UjmHFZvcs8k27gJJ2JxkFExi",
  "key21": "5HWtvPC6Zmsbh8AMeJuT28fM884GDk7KkdJYGe4qnGguaJzgSDMHgaDCfu3Q1NEBfiysMnJPPakiU65i51g8LXaq",
  "key22": "3AhPErtxjNFJnKrHewvoAyB44ULiC29FWwh4WFYFZFuwohPBWHRhWY48h1KNLEpKwDQKQN1M9NECSkZFuAYD7ydY",
  "key23": "3n4mEyx87rG3v1v9xMYhrwZkkXgiJSWo5p3EXthg4v2KC9quqYNrizW4msi34yz2MNXpKgw7CHDBQx9GFDR72MdD",
  "key24": "BQ5U5VRWnGV5vPeGzvfZ5budcfM2DHJwLMWmYGZhMiXPogPMvrEigtzyyw9TJe3GRJQhyb4ecsxBke6PSRbRkfd"
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

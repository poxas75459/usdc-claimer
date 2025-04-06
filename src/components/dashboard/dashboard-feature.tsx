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
    "s9XFmjcND3rqjc8CnTboQd7g1zoEZVZ4vkXBvPoP57vtQ39yXugFUk3MQrbaaQ3Nj9Qt6Qpaw5P4v4qn8QCCrTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMvsfN5gDKY314tqwKibeER7K9GxwZ7gx6wwZ7hDMLzPvKFnAPNAtqNgdAPH7BwehhgWbWHbw9QhY4F3Y9nW8Q9",
  "key1": "45W1x5Hc3dnnCHQYJVEFsfbmhYg2Gs6nSeeAkBDUJVBmsgbxMhemZ7s2kzVUbCbS3LfhUQKDg92qGm78aU8v6nyQ",
  "key2": "2C7Sh8uKVXaYEb3GrjGqxQnp5PA8J1HLQYVi42aNGkr464ukQEdwsJA477FhT3xSeR2AMeTWfZxqYgyHHZZiB9Bx",
  "key3": "2KgY86giWZss2vkcaZPrELqb9nj1A1RF28hpoYYkWY1yukM4wtyacbDd6QMrGBWm92mzR588pjQnNZaPx7tn2PJS",
  "key4": "sMAkveL2BsKNkvrL4EnqpoXr5v14igs4Zj7LhhsU43PfntA2RBWyD4Fk6fA6V1SD4Gc6k1hp43mpSTMWSCqz4nk",
  "key5": "wWXTj2EM91SPN1PcbytzDR3Njaew9WntCsHkrM9Ncu5whM7LBgurXvK5LZvPakNQPa93WF3rUqMWYp9kU2ARQNZ",
  "key6": "36WXZjTcgyzHbDCYQnNF8K51kpkphVPec3g6bc2L2EnL21Y6cNr1DajdRny5EQ7gmfbjv3RpLPVzZLRqG1Wkn84j",
  "key7": "4LF1ysZoURv9fJr4BkY9FsGo7y7nqhSHCwkgMiN2NvnC7KFcCsz3N3trJsPLY9TebeKBccCcPrjchzCTBS8K2fNB",
  "key8": "3KEptWhW8zcgJPFAkqDBiSHiCoJpsZfP5XsVx1gFy6j2nCQuGxrYMfrVwQ6WkQa7S6zDmCGZA8ATBr1cif1LYmUV",
  "key9": "2VVUCHRsQZMEzLajE46gjNnDiw77eGkwCmWqKWM6AZ1tR4AFhpjNRHRZA5P5bMrFN2wxEeXc2ye3qawQavP4AKzm",
  "key10": "64Dnqt5UcTLgw2wjkzTtzwoJYjMtvz7B2dCjhGxCdd9nVz2rXJAGmMqWXaqRNhFrNtsmq3uYnkZiBcL6M6XdM7M",
  "key11": "c8HcvvPZJPEwUzRatoh6PW1jx4C2v5mTfafeEdLi739cisShrSWteRdmqjbBfpLo1nwx2hXoVQVzQvZB5k7ijNn",
  "key12": "2PvF3EMVzpUio6SNjSaMRnNz4sVVt5gvoW1mFQc8nioPc9Q5ggvuffgoeNroGUEKpZ2NCRcQkxjpFxX49LZ6dfnN",
  "key13": "2bUAbRjJLwxQw1scd6WMkvusvGakaWEdgBC2sC8ha76kwPZgvLU7XCz7i3pE96eqxpcqqqAqBf9KPQ47U8fFjQBx",
  "key14": "4bkmv8Nje5QNcBUYnpzYjuauuSd8sbwTzDsX5hUUi3LFPkGT6HMiAk4HHWndqFAGcBVZ5vFvYGLJzHNfcLYwgo6t",
  "key15": "2qdb3uDujDfdtm8NofmrwohJdrALCxTzyKnMLTXzDtkjrWdMbZv3oK7AbcHDRi7kRfWNRMpwmQesnNAPXiBRhwsy",
  "key16": "25KGz7fkBqRi11mSK4CEMSssv9Ewyvr53vTyEPs2WZfrJUQ38rjXjYnFSpaD7F7Z3T5SccsC7G8AWQoPFHJrZL53",
  "key17": "2k8fM3ntAJaCBSSxkQtfY3pc9Q8dczGLEKRLXijrQSyZ3NjTLgzMeLV2CAhCdGPhCS5JSn5DZwwTrPwwpiuY4fs6",
  "key18": "2pGbd1JT8uS5KhPaYHXC3dv4xSDEM9mcLxFFqS4DxVnSVJeNFPGFJToGLtFnrjKdex9WtfpxmXQZb5gi3puTSGRw",
  "key19": "2XgYXdp35Eavq8cphoYyVh91kwKnbFXnzrPgZshmzt4M8rnAabBU6KhvDVfR5g5VwXQQRX1eov7rB6QKHJgRicg6",
  "key20": "4oKwJjiSGWs85hgLUFmVA6mk3EgM3hLjAKrHV8QnFpoX67Fji4KNcSyaohkYgGX2dmWM97DAoK4HSbsqEZsSCHxf",
  "key21": "3LbU8UqspJ5iTyzYbKwDEzpyhkqtDreNcUPBRd3hh8fGTjxNMpq6YRH9GhgMz7yyx4SjEdqbeURADiYsj6r6jHXa",
  "key22": "2iXurxpxsprj35Dxm7BSpruFUpMqJFuav3PEZe7sCK52TgbjRh2DRifPi8kvzHSKh2oAQd24A7qYRtcJ7DGtHms3",
  "key23": "3FKifNkca7Jsr9dasERUd624VUkHsNrsqPeBaBp3BVMos6B7uLrBkJWFGkDGmoFk17H1j4qTmNCyLKxYDdFkt8gL",
  "key24": "33WUzxhwu5zzM2ydoKabmPUsgZsPH1MZxFFGoLDpbXpv4YUHMLi8j54EkJZQFRkVwViC6Ay4d9PcWYnLUdmyqH6p",
  "key25": "52z32JLEHnhNgsUVqC5SuYhNYVqqmuhVTvamzKcKgqrCBcjymf6dBu6r1oEsHTFD2WWvPK5e4xApjhEANHT8dt5y",
  "key26": "5Y8Votcayyhe64yN7yy2D2npYkVxPW6mj5cCzQSb1bbwKU5MY9iHvqpVvrpDTWEWiB7oiw2FEDcuUPboYp9FBc2M",
  "key27": "4YpgGKiUdQi1q9WhjUwdQzsa9hWBCsaufp1ij2TwKaMz4ns2uMZwkyQvo2y53uFaCfja7GMJSMFkVMRv1HNxJci7"
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

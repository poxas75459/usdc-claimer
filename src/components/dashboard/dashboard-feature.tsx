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
    "4fkM6Y7UW9d7j1zqyqbW4BEryrNpmz7YKxGBHX6muFe6vz2hYXKwSa3H5e2jHVK2kPs1SX8YqfaAeVk9JgqBxCEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zobCfd8D9HV7DQMqyTwZK7kRVjc6qEQA4snDkwYoF6TLUKMgTckpSRBLGQtAkcv7bZY425ZdKgHYYWD2iagnxKp",
  "key1": "3a2g9366XgKRWcbzHRz4bW5N5yRw2To36dttBbsyXFapK79DjN86AxZr4LmucJAMWxabRH8i6zcFMkLp8gyjj4Sc",
  "key2": "5ETk8ja3V3Su4sUVM2qqeHxG4tN4cMomNdCQfujgb2kVCHoMZ9KDFrJEDvhp93MLM7HXAyn5VWFg2YotdEEQqCZw",
  "key3": "weDWnb497wDLbeYMQpPhxjEFXjJyCYhjY8E88Wfmf8VGnb2FGA9DGqE59RjPtbg6syySfuUsmoUpm8XvXCnhd8H",
  "key4": "Edtx5Nrfuv4hnermZ2y1ua4fBEY1mX2oDdBsAFdWo6tgjBxMaz2u4Gp2D8ZWEcMsRG1tHL7gp2WN7PNp2XARcr4",
  "key5": "3j2t1qyRCmcdL4PNrufYMjEvRX3ewj1psTJCGY1N5oyeZYQ4aCo7HUAa3Xoohi815tnUXfm5UbVTWWpgEtaQAzj4",
  "key6": "2ciwkhGpMvNnwzCrXobvmo9SXujRkLDHyxc88Fusu4c88fFBHHZzTQvHkREnJz9GQx9kazL53jXa6gYCyRqdjKG",
  "key7": "5xHU5wQZ6dxNFRhkSqQ8vCZiChS4oTyeS4dpo4gQNQJroQrzjEfdsJytRQ2bw8ADChiKePd2VmSpbiqf1LXHtWNz",
  "key8": "5KM4G83DipAtF1rtCg3mtGuXP717BPFYFDFWzn5j39ZyjJfFNVq1r1GDM2iJUzEvLGJgqj5Dht2JNzAzC5FRUfHY",
  "key9": "5h4jMSw5i3zYcZWYQ8yuJijj7QUNkRXoGVLvbJxaHStTWwCtyqb9YmDTJnTyKiP38Ab47yzJL9x1C1PJChGSJhQt",
  "key10": "5uEhkxuZp75SBmck4EYrw3Ye8JjDGxDEcmQopBUkDLUQ5j78YuEK2ZvrX8CWDc9wCvjzoKxxC6hFuufUhmhdM6hi",
  "key11": "255Q5c1k9J34tj7vagJrvdrcVoLqutLxK4n1RMpN7nEPEynBgqGxdQjffDbztDMNph6asaepAMYZ4HZY5kEgXBUt",
  "key12": "2SDa4ds9YT3ZJ5ZhMw374vRNiCc4LeQbSJ6ksoovzEkmj3cVHuFYX3DEYdW4kUXk6bV36FwFKEPkAxqUGLCh6FTe",
  "key13": "2NSLT2fxzSiNNR5MHDd8L6iiqQikpBQbtKGpCtL6276XDdo88Huk6UadKfZXXWUP2zzRWUzyrCSqNwWCKhTUmUFz",
  "key14": "2yQnf1B68AZ4btrE1ny7Y3TCNHcpRDSPkxUBM33tkx6duE4unGPq4XtBC4EQBHyjmkiW4h2tDmoW7sdnsHx5qfPN",
  "key15": "4YoZ89G6peWQJFGgZwuvXhddwkdHeKwKuEKuwQ6Ja6E1uPqf2zmrR7hyfYXMtqSGB27jXNvKxEuxruPhscMSFj9U",
  "key16": "3FjV99395BZJWqMA9YxmtpEY5tkVkMJCyH359sgqq2f9TNzhWLmTBz46gc44AMFQHUJQyWkosPcw7JnsDCPJ2H2Z",
  "key17": "2cnwgrzELdZeonmfbEopg9uh6dK8BTJEGDTWWVcmZ1A7tQwHimXupMmpZS5LEiNrKfZk7GA3SZE7ZaudcmSWNkzR",
  "key18": "5ww67nwoEBVJw8u8z1WukSaVqxrMYTio1jWrvgtD6m9nFnxuMRaAfJLDBnvXMZrWtpe8NerKxStRPoMN6Kbg6WMr",
  "key19": "2cBJmhJGQYuFn9AmqT1S4yrK8mVhbLhYGbsjHEaSKgVpv6BYY8NCbNhqyee6MLsqeAbnw3fhZeD4Y2WJvp1opARd",
  "key20": "2jkWFewxRQ4Hcm8MJ97B7YTWy6rPNE9CCpG8uy7ZnPWjQDnrj7uyiZU1pvvB5JLvbX9MoUhfEvGmzoW9ePfxtKqa",
  "key21": "By44FQ61FeaipEm5scZgFKqEUG4C99DW4EcoqkbCy9UBLwJwSrBhbbxU7drsrKRgP6roNksFC1Pveiay6mHYhFq",
  "key22": "2KfSrS9mJyEZoW7U8bQURrQkku8GguTPxMFyftapE7b5RyoS883hNUFNMNZfSxioKnR6bqeEaTcpM1JhD6SNPzrt",
  "key23": "5p5WH4aCKQZrDFNWTWKYty7MPkuta4Gy4RoE3SSDUtQ6LoMFKtzXvCczSyDh9q9GbaLdcHr5v8n1ZxHaU3ynp6jg",
  "key24": "391Wj5BtTAxwQ628KYNAM1cDKm7ykrerGNbG6D4KoSJcTV1SoZRS8R9j9ZdHLm7qtMvCFV9My6ZH8Lyh1DumjFk",
  "key25": "51ZJfWMUPkPiGpvcDoCdU2QdaL8D5eUSJ8XqmoAarfa8zimgWUQE6cXSHkshdsJRPuN6Lyhu5CTrQrUnyBJ3xDRL"
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

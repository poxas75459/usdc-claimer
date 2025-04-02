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
    "2wHwR8prrtMp7X9vcy2yPPkPE4sdqTBq31Zbs99cz1yydY9HidV6oGNvhMG8jE1d4N7jApnHxSJJ6dYpqon2Q7tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z2rZJTYeikfxCnx3G6ALBYNpvB1ufh6NdVGkz3qVbSF1hLCxN5m2R7fRg1nhnsfivsPzseq3xFnnvEeq1mxGE2Y",
  "key1": "57mxhEzs8xW5DVacitXkgPTUVGD7cVwBjZ5Yii2hbjGzRaSE6LaNe5iGvAhMucZo6xWtt6C9cEwPq65GuNyHoe6E",
  "key2": "43YvtpHYPzihXdkFeTATM7488Sm7D5tDT8j81GBypZnChtjmeBU6vBSHQsGjsG4wDigCmTq1ESiq1XmFG1UsMWPv",
  "key3": "3asbdV1hs7vTkkuJPxSYKVp1qYxj3Zyoj9yrYV6VtFYSrHTueJpJdqbsPWaaczZt96CoPP4WcrWJ6dUkr9BuLUda",
  "key4": "3zpARzN3K6Sc5z3QV4kGv4wQSjLPs5G4hBSwHVJs8vWjbisAzuugkFPghguxuFgrytcZKRkfhfudXHHWMb5wKVLZ",
  "key5": "3EwKv46XVb8M9Cra7URoBhPZcsNSrNU143uv9Rkq8reQWQZNqankV1Ko3JALJA9Q5KySCpxyzc9Wuf4183VDkadX",
  "key6": "2UiFhB39AnBHd17DayFA74ainUFnWybcGtWTB95HPyHUXx1qCb5iCpcJCKJ4RvJgMkPQJUyuCsSmjGYcCXv6f5DA",
  "key7": "64jtW1924puvFo4djqhzJQnobyKYAazQTXC4ymioUop6dw1FLsckcwWmL1WoxK6EAVhQRNVACFHr563gpQbjLMXo",
  "key8": "CuE6PL5kuPpVeiCFdM9ji9wKYH1S3rVbfzjCHtt7g4LQJQBxXBwaJ8JgwD8ZnB9v4KZNSrktnkiDravUSg7oBp5",
  "key9": "4DyMD7BC852dtUXHbwzfSygQAhfL1mDkyPhGUbUaNAHptojfsfaNkhuUVBpYst8F9Yz3QJmrgW3NLeu7ZRtYwAqp",
  "key10": "42CuZbWUkXLPeCJX89whKF3rh1XRonsS4rLJMXtgnaBjyu5tR7J47FYoauddpsydpJKyY6d5SPcSbkTX9QnyFgVW",
  "key11": "3AYSSNZ8Gj5DxHmEXKjum7cTPRs2dgkGtJw8Pdy9HFo9EhoyEu48hionWc6GrtfFEZocNwcLJQ2op3NoYsqJrjMh",
  "key12": "3vJDcu7YpKSMq5MFcbyxBQD8YAY5SS3nA7V3cNS6P9zeRrvoUBhnN6r7mZomZXL8WoZFt8gLD7gTh4cVztWXsf4Y",
  "key13": "2Uoj6g1TYmEKSXFBDD3Dkv23EbcJrNLRJwnDUNktuAAR2jdyaanFANLnzEydrSmSAJFcybDkn8UgjHEpzto4nK5G",
  "key14": "4S54KABtdsorrk8iMkiY6QtAaLuA3c9c147BZVxgJHFQCFtBpjEV6fakq86L16evRgx2CjosiyydFgnya7iDKkXn",
  "key15": "5MxY442u2mJuHFgDhR6sLDrQQ6p671hHQTbnSv9Y1R3KqdBo5xevJPQiSDkNcsqXgkXk4eBRE8iWohcL3iAfQEpK",
  "key16": "4fikc71k9xczVDdSN4BUg9hU5UrvePn1NSVFp2jN6pPaDn35aFvFMKqdrqR8wAx2c8u2zLjPSTtryyEZqhtW5aHV",
  "key17": "2Lsbz3W2t8FycmYBPPJ5PhBgJBMig7LCKmCum2xwwJxLe1CfP4wVjTX3xSrABrZ6S4REuZpKnJCDVKB2GPLzbFbf",
  "key18": "4UYtSPGbxEyPtY656MGjWsd4nj7EnLrZL6hFqWagAn3o3mowhkqLADb9y6nLHY4HTh25MkzXW2VdcbDrno4McfDr",
  "key19": "49JWTWHTqbHFJ98gvxDQTciKKrGmnXAxtTqJixraGUNfWCp9mCCwrQMY7CAWf6UAxeuT7P2XFtnvJaxhEW1b8XN",
  "key20": "4njxJkZPQYSLYmzvESkEMZP8mDbQg7nBWTakKzPBYP82PE1r87xCxCDzwpoVZPCzoQZx5sUtdACX4qgdh2N6JvRq",
  "key21": "2uRa48rLLjyn62xtH3xhw9EtpaL91n86Zo9LqnAZPR3vrRKnTdTDwfqMf8XWfodf4TR9jyGBeZA81mLfSUNQYpn7",
  "key22": "4WzkuJsJnvnrcpUqqzztrL2UEuLXngrjb1teKisQWSAcuuQC52YeD5TDvwZf6xZjvgh3ZgcJ8XEtaou7CLVbKSSU",
  "key23": "4rHXK8NgZD7DUiNpUfnwwDYkkDxzQdc7BKettwTu3mDjZfVCgipssmGN82cAKeFB6WXqjW3AZ29bsGRaCk6h81M",
  "key24": "36798xiDDSRRRTYw5pHyWbJfLNtneyuPBWPw3VxnUThmNvepdLkFWYR2SoWdwAEDGi6V7N7ZJF83UPvCewKRpK53",
  "key25": "48PU6CeHjFKaraQLyx6sJTiXsVmbGof1PBViQhLdKpuNo1tqTURTaoVsDKjnz49PeRvoJBp44k7Q3a9PDC9aUjbk",
  "key26": "2AtDVQQQE4C8ZAf65sWUiAuQkADgDy68fUpkmZEtCpqxPETfeT8FLppxjHdhEZzb5AP79n1v6Gox1BUFhoZfoU3N",
  "key27": "J7qrFRDUcSNe1QX9ZaUKn5SVpqowwTpxQThEZcM7g74PP3VDPHXsh3hLti1gZb3mUigC3E1GAzzFGiUUeQ42XCk",
  "key28": "2SpY68A8npTSJyZtphnzvqmKaaH4vNitrSnGkKqng1aV47HDpxSvtLBihfwfyeyfF7paTMQpYmMeC7EV5czF6eRB",
  "key29": "JokVSfo8Vo31oMZ5AL5efYTEZyNEunGxn7eMShbDmMoYihhHYpsFgzpBFMnxoTBKD8YJtsouauExKs6rsSBNorB",
  "key30": "5pHGAFwTdf8AEy2H1reuNuiEj4sQ9Kvjw3XtmTRXgDjZZNgHyAHBwxY1A7J8sVAkms3vKCjYuZsAvShw7dg3Haz2"
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

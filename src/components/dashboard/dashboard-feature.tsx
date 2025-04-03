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
    "2oDGmqsvez69qysG3hKRA2G7W4H7VmnyL3E1iY3BnQic18NPeWig9BtnxZJjcnEmjT5RVY79Ht6zXbwQo2Ydf3u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VRFFPuWpCkefhaqNxr3PFgx9wsCEyhiccGhbmtGW7jSBcPMMXjT9S9AgbswZERLQi3njC43YocfjYTD2Vvqztqx",
  "key1": "3HGx4xZf2U8yaaYoi7Jw7wdJjuutBJDtVw1mAGnefuMHB3NxUPUSaVtPECPw8KKdRsm4imGU5YbNv7z1DVjE1GL3",
  "key2": "3uGg86ufjooSwg5h8E3LLjMfPCuDvjvcN9CYPFhr9bFYWLuWiooMCwQbzHSWDwkR7unHhjwQk6FM8HXGfGYga4Vh",
  "key3": "5pxCy5SmouLtQxh6nszobswX9Vf7Bopa2w4728WBqjD2GASGCZ63nbJcERa3gtUaUaBZj1kG2KXxWpszfc8DKr2",
  "key4": "cZPMCqAQTZATcFTfzwp3M4tEWjFEbLVyH7EWxy8u6UidFeC7FLZAmEVXte94Z3aEwfbi9WravDcRwkGgMNkHwTa",
  "key5": "4oiuRWHp1rKVJVwN9eX387AsvYMgB7odFFVZjH9hTji7EGQe6yR4WmLnL1U9qRkp5wTG5oherkpiDCw781dWHTNS",
  "key6": "2pJmyTnxchZnkwSTbtfUhq7dKXyky3FM4tjC1b3rPm3N4xmsqgtZbjEjxQNLUbPtZ1WNKvQMCg8vGrL4ZbiZJiCq",
  "key7": "5PwwkYhx1Khyw8L62oqSRpBurb5HvHR5Qdq7WoDNz7FjkCbsbBckSKre352bNyv2zYfVyUqyDWjswAYZ7E7iWuDB",
  "key8": "4kGYKERf9wPeiEq87r7m82C5zsKPk3UsYJZEdVqBKjU61WTCXfy7oDnNc8T5Wy3TBB3MMUAs4ptZFwkmcVp7V5F5",
  "key9": "HBPwfRzkPr7SKYq77Loqu6jnmU9GCyv4wWfHwgRHpZpxhgPpSiXACoEnZTtThPGe9Kbav3E63PKsfpk9erBCY25",
  "key10": "QJyQyR91CcSh95iSrG1LXZWx3jwrQPf8SLd7rx9kmq6gLT6CVmRrdhpH171TrRdqqDgoQLVbT1spRZNmZNUEPVJ",
  "key11": "Dk4RJCPrwgFbt637RqkvvQwoNenaFyEbyd7qJwhRVrjuP5GXGk1MVxMYrgUNAZLKHURXxURR3S1Ed9cyUXZMF2d",
  "key12": "4dHCaNhBw7Vmi9xNTy39FyWf4u8qtjdJJdqwEmPVywQGvaA5wfuQHUMERQAzXYBEbJKQeHNhTH5PheVWfQwHyCrs",
  "key13": "2zmZEGcs7Nd5SNRwTq7V3PJTF7vTEHxCuNWrWnNUjpSujMS8eSg1Xsk4yhP3h51e1pZKJ6EFuAf5iE7mJiTghpJp",
  "key14": "56ktKFLUQZpHiidSyaunhPr34CVXTBcQLEsVFUCqbxmsyz766tKYkcnQwZrDM37XUA4C5uoMbvn2AKFsZjzvxDj4",
  "key15": "62g9hJ4TqdiFAuigaWe6Mpek5wYVy7WJ5oatoeeC2UR6anUAf5WnrFM4kwh5AAM9BeazXgZf1LCkH53gJQDCQoJS",
  "key16": "3JdbPWDN5jDPoS9NKvmXuXMSPfXagPn8XTHvT9F4HmSyKpQvYFGGQpdNTzRBqqJgZdYpydpuVjA4ytRoPTCpLpix",
  "key17": "28Y2pm5fmpgQTqe81p2kCp4kDUzeFMq3vnPGwVw1nFuxW8Xs6jZjHTae6gZ1TMKoFHN62BVw1gmX8t8QdFNaF1Vi",
  "key18": "2AZxejm7ezEbkQK9kU1ocRnFLJEcwdAvP3yhnPYRWxU9wonhipZxFXVQtVAYVbLf3SkiXoA59d9ZsGN6RnzSFRvq",
  "key19": "3m4BqEXLptjuR1hB9GgqGFt7h2UVsyXY1PTDi6C1zL88QwEGB8M5oUij6A2sDEZECDDUDRhQG9LruJJF1i4iyW4G",
  "key20": "3ALTmpJ2xhsQKqvq74N4Yf4eyJGx3KwqHwFYvruiTobHcUbkdNtFzJBE7RKgCpVTy69fmghb9utMHjUf3togQTee",
  "key21": "2TBhbzGRy6z4Sv47kerooYNzHR1LvyLRqePnBWqpEJgKG4YQqamdaHvgQrcH6c9wndSd5k7cQhM1wyXxgPejLzhT",
  "key22": "5RVeC1gkje1vE1BPZB4wYvNgL9GSkDuhDaXNqvtDpWJdB3tNPcbCB7SLvMAtdD9kDFUyZePC8vUtr6DuUMdAgx7Y",
  "key23": "5fKsbg87S3MnmDHTzHmi31TotXcjkroxq2uvEeZpdj2xxvRxUnit29epGX8JG3wRRNNosv5nwvAqU9jLQ3i3Hod1",
  "key24": "3gbyEor1jMqa951qEGXA2PhnE6LeJ9H3VoHE2wtRBFdK7iWBjmJUY9eow2ju4h3XaQDSH5bt8vASRn17RNx5PkEX",
  "key25": "5xz6HKWaFmiuiqy4Z6FWsN4LJnPeDwjHpMgotzGVodZGEHvfoYywdc538RVSzYD1XBytMNKKTrXDXFZDxA7ZsbcY",
  "key26": "2m7AznFFCyPK68uXsz5VMSbdhB31TYTyGUnUQNKN7hqxYmdLrRySWTWt2vEhLTUu6ecoxJVP9eCA6rF9aqyovA3G",
  "key27": "2BoPWrYv47wvRQJEy6QjBenQdqeVbFvZuNoXWMonp2MXHqGs69e5xX4bP7t6gSw9dHqN2JuFHsDCkmb1cy1MCVxE",
  "key28": "2KGk6zddz7XMVB6mF2wG2q3Y5N2Zn7uJa2X5RHTRJGmKoE4vghFHGwwNY2gnRanQ3ny8gQY2YsvdqX1tz3rzdHTN",
  "key29": "5DnNS5rqSBHaybacvjpoBVYJvgdo852xD4xqeZ8H9iY7iUeLsQacRb2BTt9D3degbRo748KUD8buqNzbLdPCNCSj",
  "key30": "2eD4tCs1QL58oeku4Wk7w3R5Wa8eWT3F79x1zVVERxr8bJn5eZkZyvwJqz91KVcBZ9CACdPCX33iwjJeiPyhBCxi",
  "key31": "u2i9eBdyHGfq8JpWKJjKbYFtFZvSgduJsLv9X6RyLNAKxa7YQBBD2DKiRGY9vJJ4NuRyFtQFp5k63yLCD1C1q98",
  "key32": "51yASzVsi8DKFZzs5reAUdwvXNyAdpdybG4q339daekcuBmw9C7kGkXhQ1To3htf5xFuEmbjxMocQTCFn1BGh6i4",
  "key33": "53aiUXB8uCE1PmUAxcBNr9sv48cUngJihu57rBZUFpZ6eT9CAMVnLA6BAVuRwD9khR3t1GYY2T6MVWQQMqFNcZge",
  "key34": "4gQe9vsAzkUxCTK6G5Q4THNsYYAGwQXMoenQ6eox8MaEVvHwn3sKnZvRqmvHvgJ4UphCUyR6WpHx4Hqh8mSiyEA6"
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

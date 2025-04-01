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
    "2d5FhxbYDYafJnNQ8dcghFWDmNxxzuwhxiLjudBrEY21GJx912qA6CW5XFd3sqBWp8kiLNhUQFaXriWQWb3SZWbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59YynbB9soYCDtyriq1EsH8VASW8fHM7tX2pYbkqtzX2cGuMHytmqeGoQzaQxiBXjTPTiwy1P478gxNR7S8gsjB",
  "key1": "gGZX3DugoED4j6cgDxisMjFM1MddApUr5M3rZK7otequREMLZFaz29xevyuAKVt6hzAHt26z4Dc9fECiGbETLrN",
  "key2": "3k7XEYxQm2hd3hYTTUKb9Di3dJ3dn5dmfFaXT96nhFf5fzB9WuGzwnZyG7mbUZ5bWSaNEYemxaDqvPN7ZMtVUaaE",
  "key3": "4c6nPHFmb5gQMng6VefF451Kpy2EU6rohNgePPchnLrwGbF2BfcT7xekgoGYq6iA1XNSsMxn5nNoWR5owySmLjRZ",
  "key4": "3YNLNwdnvh17BoicmPcPe7K8xJ3Yb4Deww8Tjz5UX2k5AuroKX3rwQHzewbqP5quspwCp62rvz4mmUaXVp4zQrN1",
  "key5": "3W8aZKX2gMjzCyy6RHNo3azzyw1wLPErWdMumY725W4Dtujm5bTECgrMrFA4XEemnRXWYki8MPYcuMsseoAjQTU8",
  "key6": "4xiE4VNqmu44arDpVdatA5oEivEtYR2iBeF5LLDqwRncZU2zxLThDK5aQW5BBfYPLYHPpsxWfRZwi3RhcQfYr38L",
  "key7": "WvPjXetKi1uaZ7YvWfHhqtuEpEjVEV8g1KY8Ba3Ywowi14GADhSvHrTH27qogMomYxhXfxikN1YiMkhnTLehyaw",
  "key8": "4WAQv66GGxWNPtfYgxvUiAfZapPRTRyp6nkYxUksG1KmNCVerLseWkkQTzqj7Ujg1SAsWEmhvKrWEQ2Z8G6Tt7oj",
  "key9": "48pbUpkBn3TY7cWUGS2pH3Z5xTUT9cMHbmEbFaUxvA4KW44VUD7bSoBdbtvEM3usbEr6KTK13T7Wb4BrJi6XsLBG",
  "key10": "uJJqLZQmjvprxoecKiJAiqmBh8N343yn7H1ZE6xhQ8g9uBhtBFXikudVBJk61mT2ymJsR1WHMEfwUXTqXMRYnuB",
  "key11": "4EpSV7HmJqk9es6PWC2EaY4toLre81h48M4hLmSQC9Z14L5WQ2163cxWEiRyA56YTwvXTw7yJxENxKJoXJ4nSoF7",
  "key12": "3KuapTESsx94wwvh6kry4UrG8hhkJ4cceXE3PawzSxB7xa7A41hSuTmiswPs96SLkpCevFTTs9RJm3CF3wztUiAb",
  "key13": "4HgMhUyTBMHELz7fKLKWgvnyZH8mnLKHiRfV2JeXeoHVAW6MMTzTnz9qgC5vU9xWyvz5qBbQmjd48tR7XKWGpTsu",
  "key14": "631FTd9QSySCjWrLXcgCbPrz1NbEtRtr9FqduJYhPGc21anZ7mWRTTGEbPJ4xpfiquJwebYg2zRfH47QirQ961Ls",
  "key15": "WBNnQMFWnXMVRFjRDRi6keyvTdWaY75hmignDSSwiUoZCVZgSEQimUz6Uo9Ar96mVbD8M89mfacf36MYRsjjhhY",
  "key16": "4Yp5Ht7xdDr3pxojCKTLajWLEyJxjyyArcCHER77dsRSoPrFWgkGdSNmw5SHXjfaQWRWctwPsv5VQdL5Qj6AUxdd",
  "key17": "5Prs8t4k1TgNkUciwjnJQ9kpEKmbhf8jzG1SM4WTCXEt9MHAAFoTWw1tJB2zkjt3Er8x7GZ6drvsGvD9a5EoGwrv",
  "key18": "5341EdGqr6Ecs3ubmehaFqz1y8f7sYZT9f2X5tvChY1rkbQ7nByjyTRoK85iMNDV8z1ZS3d8WFZLRpY2DsSMXYao",
  "key19": "AJEYuFt4RUUsmexiU2aig8K6Q3jDdZQhw74367r8EPzXBBCiJcCFuXGrshNwF3eLR1zhpNsDQLeFbdmGGx2Za3i",
  "key20": "uTzcmjyHR76ks92S5Fs8PuQ89R7Ucx8ZigJRVwHmkPEzeoBrpmPK5mCpACoQnXSS999xtFR7GV9QSPa9dd9x85x",
  "key21": "HtsCwQPcd5PVaku9TtDwtGBUE8FebfPewfF7aSweLsxkZ2QPFEkPkZ2FDQXsKyvqmZPnd8Za5XZHfhEii4SVkrZ",
  "key22": "v5tcoQF7Asz3q3AUUiMwfApKgBUaQ8gk7Y7fLRBgW5FjXM68iqM6VAg4CU3tRyQf8wTEgLvFekTpfAPJSz2WBU1",
  "key23": "3snpD6RHuXsaNMFDyaz61H9VLdVNDe26q82WBFTDTY7RzMMYneMzP1qjBNf28S9kZvHRVdTDds5tC63DU9L5ZtqY",
  "key24": "5pVFsLnBEjFfZ1y2a5oqSDS6cV7puTuXpp441EU53SBmvXGQ1zrsqnntfHAWqV2n4aZJUfDadzMVF5XqfQGMB6jT",
  "key25": "4QWLxXLxaB9J7KMBhrEhdCHusXcG2AfD1NQJukL6AGhgFQvG7A86e6nuA7uskHuacMe2uPNfF4nUtCKKDp8BEwFW",
  "key26": "5i1MgdMSosouJCQbuDN7CNvP8rUyaqw85iHP3oHKaNmJwzt7zZ9q3rGarrmZKCWDJGrHvtrV9LuoJVEJ5CRAiPux",
  "key27": "4uc9w5PecyH7wJb6CNSEsMpGdVPeUdnAYnoPqBedSwsNb9qsRgqEp7X3GpDzRBUUZ46vkqHtuNqJZQZqibgZJGFp",
  "key28": "PrsaFc3FmABcCXoZ4yqSo3VpGoqJjCuqcU6u8CCN9iUB54PZHmQeTi8eAQaRBYEGacd6yZv8Ce3JeotWZHuJPqi",
  "key29": "3QnK2QteDKKtoKzqzGSfAMxzbkc27o1iGozhiHD6gUdpgFzThvuDKPLmWH2cbMRYTv2Q4WhgoCZZaDLD4agiKcwH"
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

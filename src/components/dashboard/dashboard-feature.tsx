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
    "4z7TsMZqTpdW4jSafhLvrp5WdigtcB9VNYfZAKeacjmiJw7pzfQVHYyuEc6u7gv8BZGbjzPPXNXw2rtu5aX8rvXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPcphoZ9Kt8KJ3bwY3f47HXKj2SnfLTKfkmopbvSVBfbn1uXx9uWWLe99zWFPTDpSLgzybMhmg3X1cfsAynw1UR",
  "key1": "2P2pWq1vAqfG3LARCRmUmiAq7ioMQzfWuRU3yvWScH3gGd4ZVgNNTS2SaPt3BobkRzravVUjUU9VjydUSV23SZre",
  "key2": "4awJmBaY2WsThBkWNjUkR3DqFr9pFtqmzzuD124BfK3b6LTwsV2k49bWsp4zvfz7KJAGF71678zTdXg5rAJVBZNY",
  "key3": "5W87EBSu24tJ3U9H6bQ1ReWks1cXSYgeM5o8u5K2vVoAu1aeQCwk2HrJsL3Zebcpqy4dpX1QceF8VPSyrTWEGJ96",
  "key4": "4PcqpFyyqpEqJth7gzc6QcPjoWPQrHxQzHfCuKBBKp5aVCWCYdDhLwAy9zzYq4eid5mDBmamQdyP8pwuYgb2KkRy",
  "key5": "cvGdz4p2R8isSpVk9FCpDBNwhY31DiLHjJMPfMLoRkQhdoCxJ2p1NGjNUa5yYjwgK7Kz7LYbWqknDerQjBDSm3p",
  "key6": "r8ts12YQC7LsK6CvUegPeAjFyW5XmrUtimLUFLbHfykCivNbnnFa2BNnDR5gZeyp3QKCLEshumKsuxQcGki76FC",
  "key7": "5emajTnvnZFttoDtWYAsWJH1s6e7JQ8TYSHvA4u2rvZJosw5Nqk9vMmQksHPLEtpPNSpeZsJUrvYipTQRjuUJue",
  "key8": "3rGnDu8og4PTqHc5E2ccNXfAQNpdVMUnuxu8kUdhx9p8zXXMBYHevxjLMn3MjeSAJdJajmc5kWwU3QABMGcBbzfL",
  "key9": "5cSZsEtq3war9juPobbMjvG9QkKXcGnV8fGhutFMBRgtNQPDFyG8zTQNYt3y4Z3FZKcLYbdsdJFep4TzFWuj8cWc",
  "key10": "5vaPfuhzs3UMJJ8ZubqfcguxLpVh5gPP2xAJyPKfRuVU2ZRFCeZmpc1N5x2znJqbmPq8Yd62BGvUD3LgJv9pBVs2",
  "key11": "4xDGSVw1Gw296smcsjdmVNhZxNpaRyv89xXtTie6JqxNvAyxhDufSGoumZXGzZdhYXJqh47pe8Fq8DcZm3rDpH8m",
  "key12": "21pPBd49zhdgHETH3P1xCx7Gn9Lfq7Yy1fJJTVXGLekv7spjqjggmuoHN7dr3NVhfPawGFWUQgcn1TDAErXHDfmX",
  "key13": "3X7NHPB3BiXusfxzCL6XvovHCcgWTN52XSYtHAThnJ2zsiH7Fk2v8QrWV5Qez7Wqzqa9ULdCb2n7YMasn8t9bNSY",
  "key14": "5jJ6eUUHp9hoegmcJGU8tfoqhUpY1HKjtT3dtpEYV5ReVUr6QYrythZtMS84xbAVMKzGSXDU4M3HNTs4Zs6KGv57",
  "key15": "4dBpLzgn2GxrXjG4oiKkDvbsp5q4uAA9jb7PL1yoTM6Lv4VSi4NEozc3zyp1CiFwDYbQHsCy8gyapNDJ6z5eD5eH",
  "key16": "58Ho87D4Yp6GnhkuLrmEua597eX41ZjCfq85vojmQPDNDG1DWPDc7vdkRum6THgb8STpQvAN2AsUH9293RS7rw7t",
  "key17": "4xaqVtLwUJtiNmGXXsn54kjuefLmrE1tEJZrHgApz36hkpqKV4nXqgYnLe2uAp2iZnWBBmxDQGjr3r3fQkC3Vg7g",
  "key18": "2LHMVY8u1kqcAUm3uP5oFayBQVomi6iSXe6pinaDyd8yHnQwttWjzTVVYy6fgBNkoQMSLrz4vUZzABczMQDSb9iY",
  "key19": "571nYmWiKt1w2Xbq359FoEFFLTz3rRkcDs7HkSxJBrBvVTa7brRZ6QWKioB12JLcQ2YpDznw1Uq4wWAnNyF1vtSH",
  "key20": "4NgutSHjUhKBpYxPXdVudvQX6MpaGkTicbW4qkwEh6ZLTzdhoam16ABBEnWTKPnQM4X1P1Z16Dwgsoc3tsL5fCbi",
  "key21": "2sDLAgc4z2JmfXbCqiLAUvZDf5bhoNGTpipKPe2uk8tXCA64MKh7fVfvbsQHJp4HMfRnkrMgwY9pSLyXpXSnanem",
  "key22": "3gXKByZhfBd8YcWXC7Pg8mgpauS5DrJnBA2cSn4ptrcQuiF4hmePaT3agbZXbjzVdece3A966LepDGDJx86Pk869",
  "key23": "65fwkFHHVyWQQMJjS7d25hZmzLvYVWoDnEaAuKcdWiK3bCaCU7g1H7vZqiQgJs3EzVULVrVcvAU3pmgV8Tm2wQWN",
  "key24": "5BEzk7wWRV3nfQzmKLks8t68Uef8yP9LTGkHHT9p74F2SgFKshjADNdLntMDdaTnuxwP6jxqRyPgws6nCLJWdLBn",
  "key25": "k6vYoBqv7aooBue9NgHFZX1HYSFPwbqBuqNoUQpMPECa8akD6ugX4M3Re9qfKJsfeANmuBDMEw7wVUhKRGKAosE",
  "key26": "iZRYjXGUr2KFb2mDbRcL21szHYNb2748izmmNvMaLNSkUsMmp9JR8zdN88wEWqnxrwqCLSbgCCq5n9amp5qWn2g",
  "key27": "5hPZRGQegNp3Y8DW1SBxxok39xKLihwbVeoEAKQXCJXmv8jtNowGs1K5FNTgTs2xcJ1E1h4fFePkxUBP2qXdztUz",
  "key28": "4pcqKokTkbztXeXNKrsXsBwhh7f2RBosQgjdNtPHGscPypg2EicvSWeWLvG3PkoBAUV5MrkrGzSbXCTTAfdpNE16",
  "key29": "41sjFE4tjFZJzLL9KKLYh4A3zrGRnG7LNu1vgGwRaKUydc8u6eW6weai91AL3JYwdCwLNgj6HtfWaKtizLvaWG8A",
  "key30": "5ewwHaejVTdmQbFid1jkCUHP7BzFvn4PL2xiH48GuK2Gm9WGBePFZB7TmBqfHByNTmKUdVbmL1nojvBc2RapxQcA"
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

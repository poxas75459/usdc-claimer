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
    "5Z1yamCJaoFkGzs1KNuAUoKvRwqYmgCkS8sXuedv7faSaXnRers7QXHE5DDF4qycwiUrL27EAsbQFyzheiaGqAFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2NAiqy3d3oMNrKvxPe9Vqr6JszBeLudgbe8q5nAxbKDxF91Noog6dDDa1ghE9mKmKR3yUZMZTxigVtTRqronqL",
  "key1": "2Anygmfa2VGo8vksirnapaDb9U6kjs6mFYUpfytbYGy3wCjCRTmPsy25zor1AB9h8vbWX1KhmcyLjEwBo5axN6FD",
  "key2": "m63ZZXPifJSEQLstUpYCoMY5vNXifN8xo4XnsSV9FeyPCHEbFxTq2FsKHLrjSY7MYtphcN98pvijD7ybtzARL6o",
  "key3": "3uwFu9y2qqitJ7N8sMJXVeErmPH3SYS8G2ZQJ3MN4d7nCmM4yLP1DQKWTT6vhN7rpb6Qez93H8azmBQMLC5vzvVN",
  "key4": "4EXZUkwcT1R5e9BJKNFbkduetWojENZdmhwDGcckrKMbAMN3ZqthEzfUMmgRSoxNu8P1NyRDLUYqZMZKuqzfTFsu",
  "key5": "3Z7NZanB7hprhC7qyGP1joFJXzUG8Y8kwqGCuJMsVTiNjjokmuK4QT3qq5Q4mymzZ6EYgPUSTfDgpmPkR37m3w9H",
  "key6": "EoWZCKypXLuCYTwfC3t12nCJHgx9drk1XuD6Qs5ZZZugaj9FGik5jDNarUVRfFCK55Vaf5PSQMEw7zcKNupYFCr",
  "key7": "4gYYAMp6sEX2cSV1vY4nvHiF51K3yPbfeGgmspK6EGV7xbFGHPxVhb8htaLggQJyYSygBY766AfgaYi74sT1RPyC",
  "key8": "35jNhXhsSN1eBAcUaXP2pzjUNrimWgqzgXePZAXLxPgxfFnTGcKderjru5WRWXJ8wAy5NdtAQPW1FYYArgUA753L",
  "key9": "2roZMWXjkahTFHCb5eR2ZgMQxdTNKBUXUe5XANM6SEibdkVc6E7dKsHMuL5ojPmn2WxZuKVHMUcRou76G8MHGmzx",
  "key10": "4pdiYefiNgvApZDJrPGKyxzxcrzQ2hbKUBucEdvR6epeAfE5kN7ebrDj3byBZ7WzGYP5NjLyKRvaxziFG9n22buk",
  "key11": "2mF5zXRYwS1tijPSZaUTRojLw1a2hfQJxwCjNDViYeQ5shfqov6gq9mQZnMT5JjhmDZVm5jcUER7eeaNrNBNxyCA",
  "key12": "3HSck1iyEoFSgWEhYtQ74U7riXUXpMKnipQPneTAgULoBc1gHGn8ocyAuXATU3KWBUpYNornAvo3JU3m1LTA8SBB",
  "key13": "5mYkg8bFZ5dK9xXtczbQEmRFcRZcCNuRQLBUr3qW6tYVMUZQZfomkhaGNqWrrqDRufs7VxtrQv7GuEjj9dHe7JRS",
  "key14": "5L5xJbwT8cpGoSu3e3Kx55pHE4syLqnQASgcATrsj1iTmsTZ43FLqyPJm9hwxqrX74xvjJBfs98ahzB2wA5oWhHN",
  "key15": "ZkoeN8EhuR2YjBtHYNXM9kPupQxyAywxhj9ybFgt3voebYmP9oZNTcYrBf44XJCeQrMMPkJjF1UWrm8ybE9dPo6",
  "key16": "5YfqVYT66LuiUdb93RpRkyhCTXaRJpXE1qGhJRzpSNFvmyq1vSkTrc9AvfbBXxW1VFpQmscd4meFDEuvifDzsk4Z",
  "key17": "tPYv3Snw9iMR4hj5jBKNY3ebSx6S7ATkxJ7wmQnn78q7Ld1S1hoEk7AHGgXxvyuSF1MA361hHdypKfSMVxJtQb9",
  "key18": "MHLU2xLnuBVrZgfeYFMCoFexwP5F8PnfsjLNWYmFY8Xx9po4FJpZsSP7m1m8c4CHi2aj8KYG9B8HtgaxHAx51tb",
  "key19": "2vDpVPoB6Q7hxwkrWP75mccNDrzPTzrqEqSDgkj388yQVs195Lgdv4BdZ9weQx7oo9q6yPafbKHPXktnJBUNvVsp",
  "key20": "SJQN2toU3Wp1skK2f2nt4PomeMaGXrPupPiu2xgAWS6XXHVF7BRhSmxy7dJjCU8yNVVbAfTYqfiPRWwfCXQyeaS",
  "key21": "34jkFdwxu6GS83wvEYM46ynhxyb8vyYjxopSPFD2CB8L52Zscmw62GkmwVB4CEsP7KKrDaawfEHywBGg4Vdtom85",
  "key22": "2Q9HaN637FNgLPbJZzKecMNW4apiijiJ11k8xg7GNukDwXjVkE3KDPL85AsdutQSUGKz3RR1Q8nWzAA877dyoNCM",
  "key23": "3iYNeWL8YZLHQGHZYFM5kh6NMjbvQ6s2bo9XKQAcjWpv9wyo6RaqS2tp6ENmrduLAg2Smkt9UVDxebZo7trWNGCe",
  "key24": "3JDdXHfDLiz2qoM4LUTgNvt3bxm1myQRc3Cg272qLenVUNGQUdU1gZH4TQyxAob4rk84bpeiPNB3AVBG75bzbiFu",
  "key25": "4dPiTUBvUF4JFMotYsRHLG9kWxuVcxF9ZgpK75R1PA3HA3hqobyzwMfCEyiYX6tBdtA73LGFDrgSdwtcDr4pwiuo",
  "key26": "2tQ3Lv6cH5CR7czWDMhX9AWgMLHvRjcpWPbfULeDJ2bcmAgCuVa1qvtxHR7PDGzLoXMYhScZtwoQzPbx5bXFSSSM",
  "key27": "5dUsUongr5ymG7WErh2AY1twkPmBK1a5syxe2FZkVBcD62qvh92iXQoQyR7GVg9rhG8ehyFKGkW41a5yhwwo9r4X",
  "key28": "3nS3UCXEZH8NWuiicPr15prdUHGNC9N2uYxqHRJdU9d5gRUCFNUaEnbbY4yGmiHjGyEAapMuhmKqoDUXHgdVB8oy",
  "key29": "DmMpmrXGfsK8UrfewvLcUseMY89yT7Fx6hMhmmRybJ6qX86zNF65A1bDPV3YFfPfnSPFbvfZWw78vtN24sQNMD7",
  "key30": "hGZFukZ9Pdj9DbhmXoQRthvRHBoKBvAt25QSNrAfSFePUK5NXfT6NSn1eHQVn87f1EDMAEAEtP8bjP1osdB5MwF",
  "key31": "phYzQmnCJF9X7zYkaR95zgtZwpQBhUJu6npfk1q4Y3JyRL8cCsVjxLFX2fis9weMhGeTMdNPcCL7zGYjhBv65AV",
  "key32": "5EZoxvWV5Xt6WeThjXqsDagkkfz9cpCfeTdLpuEtDZhramjAX3SNRzmJomWok7XZsu5rwKQrTh4J9NXhH62TcmPu",
  "key33": "r2TGHsUPnqquyHiuDHpk9jh1fAiDmNHE9hASLpSyki78PLk9iqgccj8Mpa8FMrjbnGneEuDZCdEqJ3jgbump4wP",
  "key34": "3bJZMpgjPMDoNJvSEaMs5Uzp5DN8JPndptNNtbaEYXngWt3E1c5sgkgk9ZokjotdUgDi6nA2MpQLxKKqjntUbMfR",
  "key35": "4k1pPTZRSFDQscndoJz4Hf3K7jKuXiFyBEFFoixy5hjhU785po6qwSQP2Ff2erADR87NRKgBuR6pWmsTAjh6uQtc"
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

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
    "gqToTAQDdVkMhW91s64vw7iRpzSYRWHqVPJz7JwF3gnvuqqDDEeV3nyURoDPB2heHmopWn5R66YG2s6hBQj3jG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wAEnSacKjnAUk8YzDvFGs8NuVPuVpFpU6T5q9yUQBH4D86jR5Cu3qTGkrSjfvPCj2ACZXZyZLv8hn8BcmAfvMTU",
  "key1": "5XhRDRzJpmj24n2QZjzbN5wVP8gZ6djtimeLtrdGa8DURdPLSX7oZpnzZeofHNodeveU3jRnPzokLEySac5jN3i9",
  "key2": "3zW25A4jgJbdkLzxcXMqnnbaxrDTh9aaN4r9SE4ScraL7i6o3GxRHHZvc5Hs59LPEUaNdug8W4N8xF8bEwRYtQr4",
  "key3": "2UAimyLRAdWYb8288n4ypXMFRzGEMjvucuDzNRUHzVUxT4EKPddrjXdwTZnjdvM1xUVExvpQWNQeoWd3FRQCLgHt",
  "key4": "34DE5ZBaTchxyBM6t2UgmgEeEuJDAFZVWQJz2mUTsPvjwbg9vKymeBzvdN7ojFHvKAPksGzyVGLwRWRbFMVuwY9a",
  "key5": "39TQgUYjJijF7pRFUd5evYvtKT1opybXNDFbJNRktbsXtQDaUptrxSMxmadJtHMhm9rxb3tbUQ2x1cbZYeaxcexz",
  "key6": "4hRnSSi94Kc3dP8D1JassnQiGyZPueWxfFSby1XQ4Paxw5SKyncYJEcnNP7aHcqGg1CCs2MzLSfLT3bf6KLy5i9m",
  "key7": "2n3VqyEBCM8wmcuPjqDpKLfC3WR792GYTsh64vdjM8yBhbczBbEsc39StUbhyQxo6jdzBLbXc9nPgSwGDd2rAP6i",
  "key8": "5oiNvRHWtfNwEpzJBZqbS6qJ1T2rgQLXj4w4sPR3v9H1r4HQ2T4ETkCdeeY9GhZwEL8fKJFJX9EH4Ffraiet6PsU",
  "key9": "taYwKLadzZTARr8QsgakZbq828qp1MFKmi3cmxYgzqcAi1ieoAvXypdZq3qMXp2mbZctzLzX2FCkZsjETcsiYwz",
  "key10": "DqFrRUxS7THPBi1vaEpviResU1fZBuLFvGp6jk4X7oNMNsWdt7J6zGQhSgdCZYDcEHqSeiWUsJ53u1QZoefkZ9t",
  "key11": "3oeGWeEUgoBFogELNmX3PcWpxvvzeA8P9GQxx5kZHrLUTVtQppXmaWVaKb1PLNvYousMDQpRMAB3HdAF41JV9noB",
  "key12": "5SasyR67xGQgbHL14MyhDrVLH2YYQbmbLBePSbZoXe17rCmPoYFJkJTxZTtnBXR96ZKDDrFhFL4wJw4ymVkpyA5j",
  "key13": "2vpzPPi7DzUxgF8TBfXLbxPgvyaWMBPCMTwLSERehsYte6CrMw3ijJqpQPH5kNMuV81PtEmqkFBShyw4WJ8jzkR6",
  "key14": "3HYNkNCE8rw9ydg4DcNqyVcMKBdLE2ww5j2WERaguAuM9odh9LMiVUmjLjtFtpN5mP3NcBRs3BDLeUATaJUw2fBX",
  "key15": "41oo42PzjkvY9gkRZ667dxemvSCLqtedPNEe41fM3GksvcZiwLtmuaVSPNqAVRKB5GFg81gmNSrPsiWTccH23Yki",
  "key16": "2BubpBWrYNXVyxEjKpUwZwohaKyU3mydwGFBNCQQYJ3Tei9gpxRRnREzxtSWoFUfyATi85LpeRzbFrrsBtwjY5g2",
  "key17": "5zWDrCQ27M1DJ7LCo2tMJGj1BjTJhFfWNcrp1fi3YnKVMVhnW4JstPFo89zpBMQ5iSuv6rxZEwaoVpqzVCgvreQs",
  "key18": "3Dyq1QY5g7dkJFeXPzTtV17F7hdVibyboedMN7jqMUkRy3re1t1iLMzFuVhsYdZjfhq1stBmT7kPcJrBjdVxu1A",
  "key19": "2rBb9nk6HLwRNUperKEjt7roa8H4qLpqpkWJLeeqWPbGmuFxdHdrm5waygE5B6V7hrezsSq5SS1wNDUYyFyKBZSi",
  "key20": "2cBQx1vDBvyfdtNzCmLdsjq45YixDsJME6rArrKn6gWEctg4AJ6NQDvSpdqd8QqZeRBBE4gSXTattfNB62Y5xV1S",
  "key21": "5oeGFqS8Gum7ZpF1uCxQfhRH1VGGRUDEaa49LMfYkDBSrfJ1WC4rJzutS5peZYvxAMNySRLCNgVfAPRJgQK9WDuC",
  "key22": "5TwbFE1d9KHZYyEyUGvpHc6Hi2rvPhNrVc3D3zxqTcmWQGswkUpy6C8gEPMZGpczkkGUUrTENjWpkGrBo6UqBP9v",
  "key23": "5xTF4F7WEKpPjXFPLHz8HnuouVkrYbmaS9ghko6opEmL9t2BUqPQqfaova3KSi7mVXx41MctmogMdTsyDoYQJuV7",
  "key24": "5cs8Unte3nvAWGfgXTxSaudoqUZzNcqWeS9uRrkz54sMsKTH5bggsRfRkmdqe49mDEeWjSCRwHMHUUJkrBmu4bVH",
  "key25": "qan5r4WN8BT6FFmQZ5VmT8BkhxMdRtZ2yzXujcCQPTze17TMUCcbmdJMJ6CgjP9ZRzYEerRG5JtJSHY7CWmVSAC",
  "key26": "61tDZzWrw1xRvNGKAzer58yKCbyaZudraVxYf1zDQ7Ezq8fAvzZzPLdZtFng4hSdFAyQ2NKgX4n8ff4jqj7vdz7F",
  "key27": "64tcLqbmHvuw9iHXcDfKeaUr1M9bo61AYbtoe3vs5RY4dfnQkmYUKhWmmzduKhCyya1HjqmQK9oN1wPoSAhXJzKa",
  "key28": "BVVWuhpSvDV8FT1eZ72czasVHB4acz54zMsgpv3FrK82oeozb177KKototMnVjeLweHbDGq9bUkbS1zzPhodrWS",
  "key29": "fDkXGqt66LR7FakTu1fYFdj9CQ1Si7a3Cq7n8Q3BNqxViEmNtgRSH1dfDGf4ivzEQHxsYQ4tgGHz9zVsd5UZwv6",
  "key30": "3M3g5XqdYiop9RUpJjdzLyhoBAc1PBSSyjp5VuXmEdDDiXMEUUJ4hRE2yJcNJwJfpNaCQcWhkagjTtJ7a6tw5qih",
  "key31": "a6txSnmBq1haVyWzQjge66hpQafqiMPXnYsrWofS1CphYqhnZKcyaVLhGLx7dS65L65XhpZsuG4k1nqWiQLDWpM",
  "key32": "5v8T1MhKjXgfpkFLdrMHbZoBz3BpprLM4hX16PNJwTp5QYfPhHHBbnp42je3QGKRasBkLTW9YFo5UKKgKgWhftzJ",
  "key33": "3eAVsKP9Lp9ANvZ82ZMhB7F9g6KZxiK3RzYGW3xHUVvnuzomD9FPixuwPiJXC7oqmnSUYDwraB35VXsppeuLoEj3",
  "key34": "4hzc1KXW1fj1tgnBbh4qTjBq7vZasBUt6Z3oFRbHKzEosvDofYGzRhPvhoVUPZ1B8W31hVhm7WxsaUTBaATV7Cwt",
  "key35": "5EVVNioWi6LTtMdugyN5xNZcC1ettxTkRZ4gGzMJ752AyRc926s1W7TNjBeuftW6UDGm4WgqjbKKKYNghLXR7ZuW",
  "key36": "2iG1PkgZxoVJNQ8ffLrYMm9PBd45sWwtNvViKPB1TtY6uuNkiVPqpxsHPfALBAjRcZh1oXNim5izsVdvMoJ31dNZ",
  "key37": "4ziQnreZbxX2ey4HmqDQxjMPYNAuhwLQL55WRgAGRW4HVkzE9QBgLe4wmVB2uwDoocUCo7uYg1SBmV19WiLeQu4x",
  "key38": "3nHM5bHSxzJ4WwtewVbqCJKLdYpgtyMgMsc25nAmUJjjkfqnm5sM5oahyBoioqJuDvuLrKjsHjgSQKVxSQqfsej7",
  "key39": "4ZGqWr1G2U12WJHEACeCa7CB9Wzjk461tgsXt3FqMrXyNpuR1u1zpVY1ZpUFqze2Y7j3bz8Zww51dQ5adWocof2y",
  "key40": "2jbNMVB6NwiyTpqWfMMavqrafVepsx11EFA2R2GCYmJDcCUzSem9YL8FbCDpZBbZFamrX669GcNUCW1VE45q2Hzc",
  "key41": "2tYWiPucijikefr1YdjrM3ReZwDntJTD6ABqECkqfKyTikhdhq8g7EYGNM965GNSD88VbwqMbZmkxLsYna2UooYq",
  "key42": "4FN5Eu3XgnspQtvXWR841ruxXXcEXwA6YYwdkv6TmUrwC96FkVAwiQUWBhgjaSczQ6iZrS3P9BsYpCuDBr6QSxcd",
  "key43": "2hGGQxHZmYRGy4QFGkJYa47igYF6sQWqGzuqwLeQYFwLCuXG25KMZcUggmKNuw5S575hPkpsYoju9fCXWjkJDV6o",
  "key44": "4gwoLWcHoBgWKNPz1SDzLC2HjYadVR6taxRGVntnaMG44ADeUBqN4AFDo96ADPkePkPZXcszwgpkgNFfmW8a4THX",
  "key45": "KHKnG9mRdUtPBkNodesHUaCB6wKosgbntkfrTa9ZUSC7pPjssm7ZjxiKUJ9ei51g7RQawUWrXxoM7uYoAxaMvov"
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

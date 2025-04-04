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
    "US5A2hssbxipGy5snTXpMHXLqBmBEH17B7EtzsDwQR8Nb7VfQvUPN8tBFSBPfrzcdhFUc3pmBAkfcV4e2y4xJWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55tArgXJSwToXY1RuQKXdyUUUWtD8RL92Am8nFzLPzjgSm44soCL7h5NqFc9kwXNDm8xRWtqvggnULp93K2kyB1v",
  "key1": "61HXkW9whQSUDeKxg7grh1QSbCaErjdZMBzTwwGW2sdw6ukzzs4QpCX6Av8ZtyUJqK3fEhTJpTRPVGudV5quMGVB",
  "key2": "3UHEdBFQ8yGHYGTyPqdCdPRKSCc3pHEtFPjQihJcXsL2UbTfpjNpKQdtjFf8jhcCbp73ATi5V9E4EaJ6c5GjCKpn",
  "key3": "2GvK5s44tKvPXaUMb4xgbCKeVwvRZxLhijFaBCN5jFaBewjU8TQuueEhnT6CsrmEAdonh1NvNBvJiBHWMJQMoeSq",
  "key4": "3VsBAhEUpKr4BzUitPh5uNAT5URdKBubEz6wq3Q8j4N7hnF8tCkUJs6D24on4AFPNFKaqN7f6aofHZoyqh4Jk5SQ",
  "key5": "5F413P2amJYQmUVNZ2dD9tdQatiog2fP4CcTAXKq8Bo8eQag7entNTxXNpdWbRtMw1RfaF7TJRAtmGLBnVVkP57e",
  "key6": "4hTCaGCyTAEFoX3KTNZLoTd1TjF95aMr2TkFEFbtL3MEdgwXJJ6SnaFDtZgbqVvruEvbkRXYh9838vCAgAHgQhfH",
  "key7": "596RG5qSRZeTTx2EUguKwpt9KJrR2Djma8LVfG1rZwcj2fLseMhG9df8Vo8tYrfwoQwd2B7dxBn5YLjwecCTjhza",
  "key8": "4rXwSb6an65VKuvxCZKhuqjsVtujBRfviy5u43kptpCVLTCkqQzH54Xahhae5sRmCyVZZRqJBp9YFy1dN6LXK1gd",
  "key9": "3ksmVcmap82DLzU7xxvFcARLUfLgSEfWtXi34cTegTPKUBGCBbwaSqqbiTg3wtfzCiEJgJJ1GvmKkCvMGwLW5sV6",
  "key10": "5BK633W8QzV9aRRTCf6BnJ6tqQWYNbKCcXwtuVLFe8SjwNRk8PDddssrtsRPMvqF7wkiwmDHPz31WVH7DqBK1nz1",
  "key11": "2FSFEUkP2eWqrXNk6FBKnyNPQVxcPKMfZu1FjFLoW1FHM2yocGeuaCoL4rgZXCV8qb6v1vv9xntn3ovK96fDoo5A",
  "key12": "2rJizbQsF6R9kyg3U1zHEhfkvdMAStp11sQCeVhfmHtKxGhqTGgJoQurf9TX4TST3kxgp8MWyQdWFgMYc9sNQfUc",
  "key13": "5rjzAENcjtnPaWqFi4XoWvUpPUwmcHhoDdqbpwvuD6v2uv5fnq2xP5qDGViUMqTswTRMJ6uVFabvmkejhkASvUUR",
  "key14": "4TGCR9dybsV2LqkEJpWfsMTiBFxxxubAr9YV7bjpMPBfUT9GQzcQKqpGr2TGMmM3RQSV5pzU95wvVfmJ7c5Ds15h",
  "key15": "23LPNi9f8bxVLjfz5MRWSm9V3PsH5NySbp5e6Awe31qQuwwHhvbdcgYTWMtw5NKR7HeYoBp6Kmv31vJRM7xHxwHY",
  "key16": "222iYAhPKzWcJATHXe9J21oZYUt8BkEQNsJq9hoLJmHfGNUb1r23NmCG6L8EX5PexhGvpd6PLnuTcDedDGUF99ZU",
  "key17": "4JviTq3Mh1DeJkbtrweA1SUvdVHu9PdaRL2qYcqSqnG5wV5b8AJY9mxDB1fTAeiqsKwcMcL6Gcf6JC5YUnuHgodp",
  "key18": "2PoRoiVnnrCXBp4uJu17cJ69WAHTUPPtNRTKaLHRym81kp8mqRVYeHBRA99GApnkCgmyiPDdUJKrMY5ZfrW5A9V3",
  "key19": "4gt5DZrnDxuzNwszCfkCfKvPK5uB2r8gmaUXiUUrQ6rHkGBzskbjbAwbaLA9tEfWRL4YqmmB3KDLBQYqf75aWN8W",
  "key20": "123jR6p8hMcbSBuXiGbArW6C3tZbM54DdbAqxvkuyqVMM1NgoYNZpYk64TiTduxanbspCJdKtA5NrGkR3394wFV7",
  "key21": "45XTkDvVHac85p1EVJmvxETu1Mhy4Q4B8ahy4N286LrmmYmtXnLcjpSjn7Aptvjg31tCcxLVkDNtpaAy6vq1Z6uR",
  "key22": "4WRd4QHbtqQhzzu6pABcudcpQcC1bjKE8XgHSTS5mAbnYNk27c8UrJoWA9EeCfb74nRjffQJy4X7AT3xh3kQnePH",
  "key23": "3uTGW5HvYVTNPDKxZVNK3mvM4jhZS6hCg5RtCHDBn8yQgUU8p7aZze6qYiKUkbphSHd5TQ2L62ZfRzara95skCnf",
  "key24": "5sxxgbHCqsgRNAKCkDy617yYvmJ7T3pB3R7m3gRoPNDCaSUaTWSgYyNHTmD6v5YjuHvnPnNTSVeGqNG8C2iX8vjy",
  "key25": "4opf2LFVPkCUCN6XkngxeiHfifZvZHHUAEwQ927xTSdu33M83R9Z1fsdYfX9MRQ7pac41qPwg5n7YoDFesmasL9Z",
  "key26": "5axnu8xmEbGWJhmgqNUf3L1u7wZA3szEQkz8RRTfMtEgcrgEqLaNpbgzwDhEw8JH25RVpjzssFGXQNyAKC7WYcx2",
  "key27": "5SRvqdtspCsE2txp392VjXYoD94vdcZteERemfwcxfMoD5t8h7TPeUYyvwvWTRSar82fTGU5HJY5WsXkycVncyQ2",
  "key28": "4M2Yo4PgRGE8r9SHqxP6RFnPLwQK6NZfA2k2Y9JMS7bsVvRbGmRnBnDk3ubqncLVDqeoQrh8wKUgFQjKH1sC9UKZ",
  "key29": "3xeJ16gnAyaBkHfcQoy7xzDpFeXnHuq3d6PaF9AYcSpj3EDyQnqfVx1r6ezAWzJSr2GSwaFHtfjt9QadhpJiEsL6",
  "key30": "33snBsb3FS11hMqFGzYybRkCj8s4sZ3nTfdiGrsEaTtiyMtjCaBkwHmdZt8R91qTBFnPTxMQLZmVfpKzKnttBNt2",
  "key31": "5a9fHryHTJZSqyHyFRB1EPAz7cMuFAxdW39sVKWqiG25k3CJRA7RGP5AJ9ZiVFRNtC8DdyCgAtpShawnXDjpXMmc",
  "key32": "5W3niTadt5pTL7QBd8xx3neuRg9wdULWYE6KD8exAtmgVC8aqUsqYHLdrEG7AxLU6aBBPv5HqDkRjVsaWSCiQD7R",
  "key33": "4kzgCQvGuFw58hPaYs6Zeb9uVyD4wsp6kW7UF6p7KoQXK2emttJFPYPPyqB3kUZNJSKmJL7hWGGmGS6Y6aEYHnUB",
  "key34": "fcmwFHoS6snjN5ovY7nNCqfDvhvKBpB3AhkjfT9XfFUczX6HqrQdiae5T9cm5jDzSuxHJnGrutjZCpwZnb7DiLe",
  "key35": "3HcWea5s37FFLwCfsh24Rp6v4FhBQaSH3eeBSJ2r1dK1QXBCxBmCQkibLN14sCnx7k6HRzsHUHCVy6dAeMbWq4dj",
  "key36": "2b7qNXLYfmfGzX8wwCC6VjSxjhnkbQqdWKDYNPYmSyVbtpYJit36t27pQmouSdfSBiNuRwG3VXzUQABTJJz9cBZq",
  "key37": "EWFNnmwBuWmchfXNbx8QYgrsoMdcghmRaJpP4zrCq9RjbwJ4JhDPp111rTZuLPGSRNRfULVjRkPatfTHrkgj7dM",
  "key38": "g98Yg49RS4wqtU2CqRtE42RPYhmvPvoY5qf3uFEUPUp1kruZmMg9Ldbu3RUE27A5z92TCeJHTEXceJzg4T6jb5N",
  "key39": "2LEjZbHAdVzEBbLQt6oGtxbHL4gwVq27Jn7Bt5mdG2Ybwxx7wjio2gNapK6MDZ1yCai73WncrmCb34PXpERH6CMa",
  "key40": "3XT29F85HdW8iMudNfiRoRfVufUdDHErF5cd57DtUWhYmBakVTazuVPeLBt8NLVFp4q2CFpoRmiScW6aNmX9K51x",
  "key41": "4wHF7gaYixBUKwDtg91QFrxqV6LZNyPqPDY6mWHbM3f4TPuuwqKrvGTwQ2vNu9yz1vnpixfiRFdbndLVWZpAavWb",
  "key42": "4aBXBeYS7f8Dd424C3KBAsHXVmEM8RZtiHY3wsSj4mJnPw1HF8KqybMVb2A6uJQ9r1tAxZm6NzxmKKCii79RZEk2",
  "key43": "2bkhMuz2s5LzBp9BMQSn4212Xh5DJwUXq6GMR3J2Yc13Lgdy4iKKByhDJ3hRRAGNm2BsNLj4QciNSrdE1F3bbHAZ",
  "key44": "5uUmErzT2v9SarfA9kUx5oLYZR9tPZsBCrbzWdiRo1LmYMvnZFKbgZfynadLTRA3dU278wQWi45fpUHC6qm6V32u",
  "key45": "aedDfd3akh7E44GFYH8EPRtPBTGXi9TT8ZRE48B4Sn3CP8JvmU9ri9NbZ5mW6MDJJqkwkpw1mDZissRcZsnxy4A",
  "key46": "53iH9RfCTBQgRdDirMKZVrwPjUAjWAWTzTWwEdrh7KZGAbDefcSPBYptfde46o8WWEGco8qrb7P8FiK9zGRweYkR",
  "key47": "2ijmgM6krx6ikUykFfswNX2cvmarTGzUHbebcXT3Rj4QvPi4ipUa16Rhr2paQJmA2fXkaC7zfBDzVbyiDQHZBKLC",
  "key48": "5cPcZkg2RvRBEzaJz46Vrmis8nAPoqCQY81KyGRmiDavpvJ667qmev3mrssvaoVYFrQQrZr5eDW7FQrhETdicVxA",
  "key49": "4gwYC4opaJ9VLx5NcrqGUBCLkSBbo3bsQPMW2ZKzK13vxDiJThRx1ZW75J928929SkAbMFbHuGT1rCBv8j11csFK"
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

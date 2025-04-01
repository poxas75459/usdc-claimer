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
    "2nBR2yFdnd2ibxB3mi9SbUEjJpLZrjPvLawKsY9CGWsHPpD5fetnDcX16sPf3MbVrJ6dCijhSm7S8DGqpoEyWmkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ABAumPnUKx72Ek1fdobZqxJv9ftGzupodGFfi6ycps6B5KnPGvBkh5eBzpHzLdH4qtc1Nuggio9XvPJBJjKJPH",
  "key1": "3PtVv1P2S3cHsmestyZGqZyH7Gv8QkkwUQeRAvuEepwKZMfUU4YcSVSdsfCteD2YkyybPLmAnXyPbfdxCjK79hhC",
  "key2": "4owup7wnpdttjQo9dGELejBiU5MZs32b2gyEEhb6vbhzNLbFhfZaTA7mLZTmRkzZ7EjLD7yPs5XJ7TpmBNBP3qYa",
  "key3": "43G1MdaGsuCDyibY556LA4DAPF947ZA94styFvJGycFVPVNtqpzNidvv71qBYSg5guc6kk1ocFpzEUkhS3V9gMLa",
  "key4": "4ZQbK3u9MR42A4U1PGG2BBgsfD8UFo1LQCKNVegstSHwaXp3YJHyJFK6HbLWWwc994kq2Fr8vjBvxhT7z27LHyMN",
  "key5": "5yQNi8n9MpdPHu354h3eo6wRXozcWZoxY7jwsyqDLduGxmMSWPqdhd73LipF6XZ46XHBtTxzMu2KeeAwvJpHp4uX",
  "key6": "36huVUqHKvp3aiuAFJSaZ6XhocWbth1ifitZ9VoMzDyf2sypZExVYUz7iFCmT14iexw2NSA7fSDnZoaaAdCmPGLC",
  "key7": "2raMbW8ayJGKMi4QWMoo7yWEhsT25j845cpkqCtVLZnvzTN1LmvqHW8KtXFqhF2qHJjxgHcoDsq9qaL8b8fXbZ7v",
  "key8": "66QJm4cfbuqvHx2pV44xvjbDNr6ZkhKRLy2wmrS4VbK3bozJ4CXkhoLZYsiQb2PH3V2UyXtHoYFU9MqBUBtpGAGW",
  "key9": "317KdD4PMEDPJJtYMnbgpbSYwSTkGChYoqdhewJpRYdS4oRXTjCq38nm3SRBaH7GSb97zDjG7uvH56Ndfac5QrjX",
  "key10": "5RzcAwawY4Av3LntUkTSKFbaXQPryBEVoFntmc3DyWyujygcTfVtypra2ECm6cnAyYNWXS3RyGxd4F4CYRWm4Gy5",
  "key11": "kAcmERoKF5gxwGVQXUDUPJ8kncUpzRdoFUwTCPyJt39U5KMFUjcU2TEZKbBsdvKjyiNT9Vy4rESHq2KJG7wyw7b",
  "key12": "2EBn2niFp64NSLKsbWMN4Ews5nX6Dc1pvfKfbq8X5wHXyobjNg85ydNgqAAiYwuyTYt7QWzHJzF7qvvoYGZNCfFY",
  "key13": "2WMZw7PW2UfsVULtsHGd1pbGwH3oq8wpZb1jafWNrNvi7iEPLDuVjVwFwGFDhXNwBzp1YixSQimguT8j6r7KJwri",
  "key14": "67A68zxFPdazEsd3ctauFtW1AjSRR3M6wzE5CMiG4rWoifomJapiTmhm4EXTDxzRS5GnpTgvcqcE5wxqwxN6mu6T",
  "key15": "3xyrH7ZMpuT38fzNqsKvNjBwZaVJGPeXJs9hj2XFagRcbhVxjTvkAH5vXwQLfQwZD5cbZ3RJj8aEuEfUgL8YmhEc",
  "key16": "44nymUhrsR7Eg9m39pQKBtK3phtq5p8gwyusk25F2foUzeZ6TjNm3J6qQsTFhHDpTRVtLtvGcNqggDqHcf4gvLmj",
  "key17": "66xz3U9esAVWaARdgiGzRgKPgsdvohUDDfsKRFkkYqnjaD7yztpWtS9Qc8jgGZr5W6URnTCiqz17D8QVGs3KowsS",
  "key18": "N6fBDTb3sQBoCazDv9e1ov41NKDqqyjNpHtmm7pBvdNfYyD9Daa1cpBQC7YKsMcteUpbavZVVQYxwtz4nckeUo7",
  "key19": "vURZ7NJcJpSJtZEQnfL1C4p9Ni1gGTA9UHQXAme3huVnftoXVi6M8EQ6MzYnaC4Bk9thReYB4v71y1xBQW4rvAA",
  "key20": "2dCnqLnMH4jHJq6KrZXTvxvdpqS3XvQrvxrUqnU5hcd6tVBATK1xz4o5MgZLbuuimTMoE3kXGTfFG92SxPAbV8CS",
  "key21": "4BZL6wR5Q3kDBU5USGm5qytdP7DXR5bB71QmUNKCAUR6BHacP1K63Qvn3KLy8a9TUFxqvMunnj7dntHHKCxuZnKr",
  "key22": "5uTEG3eSd345qPsxG4fiQquHLE4CHqjK58GnbqgTNZ9ZPvx33Gz2G9Zi4NA3YpMd1xmpWr9Fi4pa3df7Kp6QLxKk",
  "key23": "4u7YrwkCTkJ2h5Lt8nKFk3hSXavtBfg31JiyGspQDEEP35ZjfnfjUovcwdSfmvQQatz6NQSQnr15MsaMko6vBLN1",
  "key24": "5VKm4ARoyJJ7APpnoKiPWwEYDSF1pY1pqhMJ6cMMz96yKghAMwoHTHDPoFNqFa9mbXEwCkMfo28zAfeSAETUAg4u",
  "key25": "41o5dpErQnbbZABXmA3TQ1HCT5S8UC8J59WncRkNS7F63rGY7SosLdBZXYQ1oC8Tneyu4iehumxxF7gBsZvQ9aze",
  "key26": "3zoF9mdeVX2kXndQje27MwKQniuQhWMz7eQZGDrnU5KHBUdMoferfmc8xo9Rq1YTmJaLHFEfghXzc9HdTDzezVcB",
  "key27": "5bsC881hfZ61HiNu16zaaL38VY4PG3veyPG9WG9hhnsLvvhAuvJCYj9cQTgQxFcuR6Uz12bHJPzKQsPvcFjRshwm",
  "key28": "jwGPvTvbUfVF92QV9o6Rzr4KLuDGEuWPmaEH4dw1JHfyfBQRgeEhkyGTsrysmmFbcNSPyfkT5ggmR5hwCqQx7uy",
  "key29": "3TuZmsv9dsKpwMat3DWfDoLu1TwtbRe4bXbD29NZABdj36ssWSFMBpDiczaTrEKGcGw4USf8LRSvMj3E4xHuqVfo",
  "key30": "3SHReMdt4VPERHo3LngLYE27nC5F57PvWjtiWKP3MNq5ieUr4C4Rke62XfYV3EKKGu4oPQeHFJTRKVdQPH9gLqez",
  "key31": "3o6KcFRafoATQC7E1NayZMWzDRRQVCV9xGj1qCAbenLeLTM8h4eLw5oR7Zr5LAgMfKQcYjumRT9gto6CjbyVxcZQ",
  "key32": "3mZKMhCytapQbjcoFai8Pkkkw1cmqvTtb7npNVWqSet2JqxhAj46kUy61vmqV6FHFW68Vb65eeitU8FceGg6RibZ",
  "key33": "16N3CoqBvkKE7rnkuEeyDWyfxDC3cBevfvxAv67jPxr5yLH8aceBCJRCgv3NvdeHQgTvN54m5ozn6qooHEQKNwK",
  "key34": "3M2cS7vG8woY5N8P1ogGQM8QjTgA7gnDVSg6x2zY7in5cHoDAnhnAAd9kiXzvCZmmPpNhJLMkvgAoX2TRETNT9XQ",
  "key35": "2kZ9iTKMUppL5rHwL7sL9MWv4KgkmAAFngpHGs2H3PR6mFFvWt4SZxMDz34hDnsUjrsg8SY7XpCAkCbJSRpdyrNv"
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

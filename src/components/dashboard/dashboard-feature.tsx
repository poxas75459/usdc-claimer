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
    "67GwAD5zhVYupt6pY39Gf6wEAbC6DZTwXa2Dt4K5SiKbYMS7dxofoyufMvnCKdmZq69T4GiTQA1ATBwCvGhLTu8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62byjQDti6kBJAmjMpQpGE7KqHGz9fLoyP2RhP6FiQzoBsbjeuuqTgDpZQ6zaB9oVSE5esvAULTsLo5cJ9Fqyhdx",
  "key1": "neNaGfogZKiVcK3YDyiJHQDf71t6KWamUcN6uKpLerfA93HgVH7zgW7edzbZpvMLh8gwjDz1vkPAsFiVAbiTkjA",
  "key2": "3SLGm7nVTTLgL8Df6qXNcBQGBNJiQh3M6fCAbmJxQFSGHGerCg69EKDxeP2FHWaUsUCAp8VCcPXUR3h86YaSMVzd",
  "key3": "PTeMt6Rm5Rya6KBqv12F5X4iHVMxX2YkHH3VWDzkJyK1uihEMYXBS9Cmk7XQGRYMEUZz2dNpKEWWWi9K8CaD7tT",
  "key4": "4yG8W7gBYRwFEW57RY8DbQ8Unq7KiFY68j3BMcuwVN7JvjAHXgWZsmBjLmoSeaL5xYLtUejyBgx6iaQfEJZ4ULxh",
  "key5": "2fZdYZtvpjoGUJvPdb8xeb8U5qPwTtGP3kUYzVoyGx8pFJZ1ePR2gTaD6GGzdddYp3y9SQ7Ly6hGiHJPcsFCogMj",
  "key6": "2WVzRaaynp1JZeupqLP3A5ie7p4fSCNmx66c4FpaYjsAZAbMYbMaaUNKBnbepPY2c2qJKwK7PsMCsTWmyjGjR9TD",
  "key7": "3ieV6LAhzNkc8HyDCb93EswT1jTRkCi6L5m9mqSj1GZj8jRQHPN6vdtqhqigfhvEU9Lwdx8tU1zuynSEHdxWevWR",
  "key8": "5Xi6nZawA1MMu1g7dYmHjq5JjpLE9x1v1JyGSWxWyEtA7dPkZ8V3PZRnuNa4RR3e6cnczCM4vgEodndzJV2hAexb",
  "key9": "3hzjW5wLF9urKExDwYmjcyJqruJrqN5M5Azu2PkaQmU56W5hdVtjnCysH6jsxWo1zcLiTxiUpqzNsxdvAYGtEPXL",
  "key10": "2zbk7vEVPKAcuqLrierqHiQzXWnSqtZFbCJXvCd8YwrhNWfrwhWVg6kBgmehdbyJ1QU6fe9c3R6NdeaAoaFAGAHk",
  "key11": "4hjBUDKNwxrYr3iwQWkiUDjhn2aUxY18nCr3k4skCHCAvSxoDuLzuHKYf6h3RD39s3S55fER584H8x7RkpMDZgUB",
  "key12": "64eH2g4BVAAyVtxoNLb7pQZZK6vxqTqUS1SsT2zQY9uu5Kqco3CjDtdZfuNScsJdaN7KffX45zuL9CQoW6WZmyuT",
  "key13": "4kQpUyCxiX5cTGByFPSP6dr2y1igCF51fH7gh29VAWXZUFMDcA86EMfWX8LFnv32HyLwRabh3fFA4crNEcDL7QcL",
  "key14": "2UDFnkqU8jWa46haE2muK9kbmd49v1FxfLdLcVnn3tSjgbo7pzjQWCXp1JCzEo233J5ZcxrXrWLh74MNZzojZQfq",
  "key15": "29FgBfKfTFgBMw3qbKrCbKmW6x9WKUzpzKebfmss8MdNGg8zsvgdqSb1jW69keTgQ4BayUVe8cbYjMzx71KdcYbz",
  "key16": "2FNLPxfCF1DDJ8NPHYnivnvpGj4kQ3LjBCHyY2t8CUP14YgEtufMf9cQji3dLpuNyuf5S7RXdQHZkskRhfP9MFEg",
  "key17": "oWvbHrNFUy1Sb8ChmuqYroCRySRgRsyPZRHDixb4XioCYmS7jJgeFiQWNHzwmpsR9YZHPutQ6CHXo8MWUMfRM7c",
  "key18": "3vNoDoWScckFuLArJEZ1Pmyim67eD14kseFge5RQBQeybDkwjifdXCSRf14YgzLzFkPakxtn2WXsnBjeyX7GBjNb",
  "key19": "4wESjUVtMVyiM76W32jMpQJVRVrfAqsevF8gqSZsXhf6kKZBebdEG3u8stf9Nz6TUExsAJpfXNxKvZp2rd8aetUv",
  "key20": "5ZGjwdcP84arKGm1DAe3ScGUMHVcKWy3joNMVPcP7Tntyh9sQj3sKvT8vm5u9wihKgA4XRPcNBHPY5cSj5GT2F7p",
  "key21": "2dKhSx9ubBHQqsf1pyGWJd23wmvCbe2fPGzdMwHZqHU3tFzdihaJJqCfbZhuTXus37xaPRC3LoRnV5qVEHPHL7nc",
  "key22": "32Lty6V6S1RcZpHm4JsgMzs8FYrHJ2zuETaRiw39FXMKQwJYZgGYLzgWSFrS9E61YSgoGRMxbx28Y12HNUTB7NoD",
  "key23": "4R418w2wcR9njwtnc21FbHgSbRi1syS61XSx4NhfixxTuxEJSewq86NxJxJStCvhNFboQJsFuBhqbhhGMpPXAGeB",
  "key24": "4zCysq7st2Ghh8FUFHyLk7oBTr3HYfHevqsQDniH8tgv1PD5SBoQjFjF3ykMbxNo2HrVXmFvQsuAM8F4u9Sm7YHG",
  "key25": "exqGp7kTS2mvgUEcWCZJVwU1N4hLns5AEs9tnHRCREiGuMNunYoEHEP8Hv1bkq2V9MLu6UCE2U88dE2YLJFReA6",
  "key26": "2HzrNtxYn5e2DhyN8aoB3ndPwUMv4pkLW5WnVYpqB4MgLhd12qcscHEnfGSpHk64CCcYCs6YEYvv9GZ7pe4itSov",
  "key27": "54RqtqjnyZiaBcW3Fwc95nwsmfQkjQVma2iMeuxvZAabH8PtLT3Gw3NF5TNZFoxgfVVja6GAahDJDVen8jUvhaxi",
  "key28": "43ymdjMUnS8soWxLuLamMjaz9UyuFrpnNUyFVSwjeEu9dAFWCtPqtDBHJf6yXSSZP3yn8A5ahow2CtsBKjPtnVF9",
  "key29": "39yzSP3fedbQA8jXnVgiYDiG4uTUpNg4UwERiFM3Hhro59jLLXi6SLCNKJkFMQSMSgzrZDFPS3eGYF9P4TctfvJJ",
  "key30": "4VW4esGHC5BUEnw4VLfTQGPC97CWGtMq77sXhHz5GeeJbfkriWuJkpKADfLk53wEZ7wSTcer1P5RUpB45rEdddcK",
  "key31": "4ABPiLFh46gTy6FBjfwddD3qi2AdHoYrWvgKcwvJRQhmAP9cFMKUcBki9m2DogWgEqUtdZYLZL5oi5wAw6oEVMQw",
  "key32": "4mf2EM2hUsfcb53Je5Y8g8ZGyqBs4n3X13eSAf84HzCJ4xtapnX5tFd46QWi4Dp5ge3ZC8NqyY6GdeWz3gozzDDV",
  "key33": "2vUy2dhi4tRtcpVir9SPByPvMcS7zF7w7nbUW3Q1nsBNqHdXorBYj22EFwfZtbke1UQjZspb5EQZWQGpyKh5aX2m",
  "key34": "cVe7xvEnkxVpQrNAhLrYSJ3vsmifn94LoJyKydTPLYbpqwvYXqN8ctQTmUL6EKzCatHEuVPNBNKfXHiKwttDSCN",
  "key35": "3Cu4tryRCgVNqvC1RNfo93ibXrGkzDCLawENEKbZ4rHYDoGjDJcmPb3XzQHxUSdSGoCheKsWuVmF7kfnUQaMQbFs",
  "key36": "39x4usV878quHaUBnprtgjzxiJauLGAUQCAQH33fYdrDmjKVxfSh3VGZFWp9oxSp3d5rw4FFV8hTbPWHo4P2MEf4",
  "key37": "eCeGKeNtzbzH8BGa1riyiYJxqEznYFiugTUbB6wF8pyQp7TwcK9TznaNeEQGnyud1zRt5qdqLXkJJ2bnZsc5VPq",
  "key38": "4HW2zhJkcm2nCmuTUciHJpYVp6KzeNawQoGRHridzujVAUgNv8JVwbGTYxpGAuE4PSf9LD9MR9KPYvN6MZZ9ndfR",
  "key39": "3WPC616TrpF7e3es7144dzPhq7T9PctvgMS69CiX9XfoqZGz85MG9rSsDEionyvKgaaj4AaA2WHwLU8ShML1rSBz",
  "key40": "4BZskp9P5b9p11bPibQ9ZaWHgXW3ord3j4jzCYVmERVxht3cpJKJtqRoxXWq8T6nX8xVppoHJ2qixb8HswRRTYjw",
  "key41": "8oTQnZ3B1AXn9p1Nbm48EwGYptCJN3f3Vh2S7a4bHVxTpPEaqkmKNRVNeTHFKLjaeLGfrBLZXdPKy5zD9smhm4u"
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

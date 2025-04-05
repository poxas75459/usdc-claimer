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
    "48nC1e44T4nNuzYga1LSqbbqdPoywGyRfQ9s6Fvsw6NnyqEFGFacjPn216csHdiXsm6vyGdjX5th6HrtmsjPEBFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64uixLtmHG2nMivdr8qF9NAe1vXJsp7n5MBXyKdDyd4MC5wHnKjastNCwJBwPKLwHTXPVLv7VLZ76cUKxuRfEbNH",
  "key1": "4ihbLwWqLX6GXCFjpoVnxEQAznRHKwTGX6EjWmERDnZJEs8WsCocv9zj2RBjcDuSyBPRtfVzxomTfNLiedCUoeoF",
  "key2": "poY5R1XMDisQ3FFtJw2hfj2XeJ5fjdC4cM5q25SPoPg5ziLXEFL8gckPHCWo1FYYSoARJaYvE2Au56nhxLnb9J2",
  "key3": "5FcnKAUw4tovg13izfLNtVAgH18HsG38xHeSLYwzegU1ywusqknoPs5PmoTpQrUqc9R6NNqf9n1HHMaTLJk2gQbA",
  "key4": "3kiaF4kxbJhxtsYmy8bNKttDTPVxz7A6gT5giZ33KRbBjXmm4bfw5gV9LRL2A1zRiHHrnezJpmdQkLKkqWrb8t1z",
  "key5": "2LcXTng4zyr4rDw6wHQPTRfKsfKMsfJiGy2F4SWw6FkPzkARXjvz6idKBsWsfTD6DtycgEqofuiZ5mNEK17fGkPn",
  "key6": "5rv3uB29JT2MXZEvw2knyB1Df24w3MmpKMz2eJqtUHHZiRguxwZdvLiT12knhUpgDeNJ9GAqYXD8jSo9pv7i7GfF",
  "key7": "4XS6oBir1za6PxC7rDhpoWe7PNXaMxTLAUjDTN9m2R7FtmTJuXrAEDsYC5rS4EBBbi88Mb5qYLginQSrT4ZeyMTY",
  "key8": "7MrYo8h12F1j6GA1ZEcusXfQRxKKFqkzrE1rDngPP3e2158HREjRyCjhTU8m6KwGgMGm42tULEfwTNgrKVtgtKx",
  "key9": "ZuYUwdyKRGpuBmJXzdVNe6h4gfjnfhA7tvDjbecWo2zKEmRS7gFxGSobcTdRVEf3vxLDCPVGfDYHGSUfwbovq5t",
  "key10": "5E8qY1qATStkPBFsMPtAvGjbykht3u2rKk1aXXt8Q8KgiDCzcAdBNCKNUAhfWepdDDjNWgpARgBzsPUjmvcpddRj",
  "key11": "2HuSdSWuUFDgzp7w7KRGP4KAkRj677i5ThRnzCjg9b4ZMgXJGenNRa1wzQ1ehHtgZRGRQXqDnygSEejwaVkxYtPj",
  "key12": "3rN3fAUQoTxbZ1B7ZNsGHyCjA1NcMtQCQsHEqmPngdfvz8tHukgX98NCGrJRsncGAQh6Am3N7BKFaLBZSVXbfqjb",
  "key13": "YqSxNcA5uvSY8WnDW4ModD86GGMQ7SqrGXdWxEdYqmZzpY1kquW5akFHsjeei7Ds4NZxoWn4UADx8ds44fb2TiA",
  "key14": "44ZxfF7Q5JrT8eEd2zvjXcfgDuaZBheuw3cYw3mpKVD7CfR1svPb27mhoEwcF13dJUe6AWRg8f255GGeyyNCV1Fz",
  "key15": "5iVW7Amf5oWA2akmPUbXeXCxC3UCtk63u5M725fT7rqaFu5aBS6GsyPzKEd2a2JJaVS7DkM9u2d2nCDThCHcyTYi",
  "key16": "tDne2F5h3fFCMaK36a8g47umsPpFPc98UML2AFaVs3j4PyW8q89VxMaK8dT9GdbBbyfreH49d1Qfnae7x8wR5Ti",
  "key17": "41j6xQA172z3CmHEYioUUWkiF2VCbs9piV1k1zdN4mQLtPVrMSdz6iHHmMta1KTT7N31AZrMaw2YBjgv9VRJRXtu",
  "key18": "5D6aQ2f7daEBfZ7VcCJddZJ3sF3kkhr3WvzGeLZ5Z42DH8RJ82Y2c3yKy8TrNCvrDJGKFmwDLGkJJK68EyfgzxX4",
  "key19": "LREgUxg3iCEQ1PNnf3RXUvJcspu4E9q9iwDm694VRrQncMCBqfG99WGo9aKZnuZmvbGdFx8dsocrd33rMNKQHJ1",
  "key20": "3shjeQ2VVUNHsp4vMLaKYUcTmHznyY3e1fwANSnnoGYReCquGg1eLGPSPnm3TvJBR9b1jxpo15Zzm1p8CfPv7EDW",
  "key21": "5zRNktgYCnQvCFriDhgiqHARxQhP6DZNNnqgzQVpM1JXGZd9cGnpWMH9jsp8VE3yRnjoiAMmXhYJ5FiKjRjmMvCd",
  "key22": "3WqqF5krJjY5tG3NHnsJQih8FN1HqEnf7h2pMwzq48snx42UVSwh2MjjT2W3sedhRcc41o4VhfxjrgGB49oUuVo",
  "key23": "4P2fvq4MdDGhZ6xGx2xmVCTQ8KLcumtrNpkeRVi2baZPvSY1UyZ9uw34GQYLNLheBkJ15miY9rmBY6Ycs2YQ1EfA",
  "key24": "3CxujUbfsr7g2dUprDU3ezfipXynnqbrraCKBKyb3RPouiisHHNWi7BYJoYNhF1J29VTxK7GsghYeEFk2gnxBR17",
  "key25": "5Xo4f3ihXisXcXJYkB394rKSUKJMYnT8RsQPyj2SNhz14h2vmwBrE2A3tpPubN6Yn17zeSPfjQfD9pzXuNnoVWLo",
  "key26": "3u5xGKJPzSFtZKvt24x33TrTTBNMhFjhQ4frh9v9rYdG41zFXRe52CJFG2JgxqUnEGzE9ijwDh3CniE5GxhH2CTo",
  "key27": "2dZa3sYy7jXwEGSCpdD3bFZAvD1oKeuMXqWdaoecJALRKLMXAtjpfdkujaSkiNKMwBvbbzJy1uN8mw9JP7QNTh1q",
  "key28": "28i4N9ajD4z1FKMfjeRWVQVKcyHokQnDU5Tne3MrriL1LXweSVXZ7mksgPn4xEhGs4QPB6kU1rg1ZKeq9n5Pjp9R",
  "key29": "3EKpNPbRijbmChNhNL2UviRfVKMFZ3JVBqSvM6D16NZvbLy2vFCcdq6hPCzDqfLrwvhSQdG6zShdgFj1nqG8TudN",
  "key30": "2kcRHoLaHVe8vFKyAZgCD6FTrUMC1ZMHuWgU6uiREv9fobMX2vjAv9o1Xedw62WBgxMypC7KGzGPPqFU9h9eAcfD",
  "key31": "2pGGYvo673QudBL6wkGCyFLF34YAzA9wS1pqYQGbUkRpEMxUqL5TgrkjWRXAvbMdv5wTK1kqR42Ep3aJwtHQC3va",
  "key32": "iTrpbZfqTCPdPXtUhhGyXFCvn3vUra2sZfMS8wEhGipta8So99YcMBkvJQi33d6KEq1CdQMdwGBwuCUEYtqyZzM",
  "key33": "Whv6JDbE8TQtEZg1UXHbv116XEE7P2dUrFMFaeV7mASLAZfUQrFqGi4qt1S8DDJhfdLEjBJLPdiXLVodaFAkKXM"
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

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
    "58TZyYxc66UVQ6cq6pRZSLLXmQ3H77GtryDfKUce5LVLnCJM7Ro6CU2m2H1pcnk8zpYmbacpi9UT6h2aBNA1E5Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9eHDdzj8KuMFnw3nKYbrhNNdAjTWtvJ2VhsCMZnFVnMWmy1WW5Q5wffBggNeaG7vnTHBbfDH7LZFpeZvQqV3Xx",
  "key1": "251m4KtGp9d1nwjQsjxwABYmtNuBhZ2fqnKVh8uHorNjfst8zcQdSkw5Q14ifQ4Zm5hXMHF9CaELceu8rVq4neDY",
  "key2": "3Sy8T6sUnbjZqVUCJE2wfp8DcEuNrp2SvNRGsFu4yEbHd75uRXhcGDZkjbD9GX28nzeWWnRTVJGGZKpNtpuBJ7nx",
  "key3": "KGpR4MTpKs5v1VqdfHb3a7jC4tekULvKxpcgmGKhp7akUHsztoedZeHM55j8rcnNyxLYvqcyFAcjwrkymAcAa5A",
  "key4": "vbgGzcCXhkRxbbgDG7jnh6R35wD93NfRxSLh8jVuwhnashgfYGAh7SFTy51gsevxSdsPm82jEer7ngWd6cH4Xaj",
  "key5": "3cbYjPNsU84aPc1YHAX7eC2XL8XTCkvEEjSU3989qY1FYAfehLiq6rDsH9E5kyrcCeNUwJKirZox5rFBrj2iWjmN",
  "key6": "5WVaaEZNybg2RCX7bUMeiguKfgj8nmY7NxzCKU3525wme4hRfbQJ1Fj4eUqtK23AMzZ5eTSk2teGteJXJBtRMJQa",
  "key7": "2Wdxw8EMydcY5BYVuiECfW2hkc67rhUdT8zcwgeq71sH98AqzpuJKKzWuXRVSNjvAsjWJ41x7JHfjq76i96exPun",
  "key8": "4jNHTdi6P2EizifEzp4UUt2bBaL2aqe3uE7i6tZkbq2vCZybQzbmGFHDe8D5DsQByxo46xHzarJXV3CEh19WC5Cj",
  "key9": "3UPMDDJodWTfbw2dsEkyVPcSbvZn1rMBEbZk67tWyXAYkFsUBaeAAXhMeJMKGBMEJ5vioHcD1sveSoA6K6hiCPmw",
  "key10": "2CegCQ5Q7dyCUKS9GGpf3zFWQ5gb5BZPAtPnzxtrKyc9ipL4HnjSubwd5YpB7AVSMRxLE4bKZPAgEyPR1JXVQYRV",
  "key11": "24Ls8bzbmCajFA3skzqjFWa8eQRfvSV7kminC6bp2EYgduAfN9fQfARi1zNHNbvHUJdL9gtdyKRoLfeuDJ7HNkbr",
  "key12": "gqCqeDxHETQ3FJ7Bx89bTXpsFwtVbzXpAQMgY8nPa3JmZUJNn8AGynhpG61LZeWrji1Aprys3HtncxoYsWXmCXc",
  "key13": "2goFeEXGNb2AFw9nYLGsew6RgVHUehpkbUk7eW5jL4REEnD6UZdDBE21SiMJoypU2T3sfQZTkmgdBG6zm6oGkD2g",
  "key14": "5dTW3fcTuXg2h4q7XGrQyzu7yoNzXUoqA1Dkdf4cbwVPmV8A9n5tyhym1WKyaMmbYSCxujG4AFPMPSEicU8yUgzm",
  "key15": "dyK7mks5ThpAMpEJA1VDsQm3NjjGVNkLYCB6UL4qonf88ACQJr75VqNsggCUDVfp12zoxNWFyiaE9sBNjHivMT4",
  "key16": "Vd4wF5mA743JS8fzYFh6pTS21opQesKAa29VAE6qtAfeduGQcdb9mfYSDMLh4ynz4MALLAAWnH2rnk62BTmFYHu",
  "key17": "5hXfosSyAHug7vGYJdUt8XFa9xzeDTcvrN67h9jt6UkChH8kQ7rbyKvuBrHtAMqbEcmT2xpwB8P7MkULwUFArFYt",
  "key18": "2knD4iPYYjjroUyPeah3rSYyUXafy8UyoUW3DpwLVx8BqNz3Jw2FQnQNUmy1FE4f4Lqu6NQ9BRi23DhHb2fCFDeS",
  "key19": "3HgqUG82uZ8iptt8AyG5MSfVTUU5mYfnpKZbYSU2NqmrjbpeoGCJyWcth7eXEqGcPeZpw4KKqFALgFy16oZp9fVr",
  "key20": "27q3GjTbds7QgoZAMSkPzMpyuc1aLe9PM7KuwSw5TkZwWe8FpAd9rctxPH7fGjjS8VheNK1ookn96MvSrrXtFtSn",
  "key21": "3iGoFcFtVjQsFFtZVXhMFHoGjec4eMz8T75xotQ5d69kMoczEK9bFkm6xeSV7Ck1Nw38imfJcE5eWZosfNcDZyqT",
  "key22": "4w227yqQxvaVdszgSD8imAcpGgFS1oF82EsdHUPV2Ki8Y3KAiRoFxPth9WaUrPZMVqj2C86umsitWFjFaq869BBi",
  "key23": "5UKfqJ79mNptNA9iFGEifPJHzvLEHqXt4cHuXEjwZVMCqi36orRGrnQJG7X89hsrPL4RCvKRGNmcfZcUSJsjhivJ",
  "key24": "4qFqUDDpqrBcnEwmsTELtj3aF6DWa9qYi8dA1spq8tNxnscwrvBDBnsR2tD8fCdpF5kVh7P4tVLYVfMn8T9f5sKH",
  "key25": "4ZBC46Wavff7xyE51uSEyeeW7L3oweaRG3h8PhxB59SDMgn4Bx5aGw7LZWosmPJUXD1s82DgvbZ7q4XEM8qS2Bvw",
  "key26": "2ciwi1Zfegv3j9P9t7AizJ4a1VCNm5cFUnNSoULyvU34dkJRVXVpKSj3VofGXdwNTGV98mDx6xAsDEdX2A22CYZD",
  "key27": "2onmWbfnxnKTctvaamsTPD1rfNdnfYFCpgJEmWDv9GbrUbtA3vDFgGAkHncUuCsRXCitFvZfuw5brDGjcH4KSEWD",
  "key28": "2V8FZcLYM67hVbnT6i2VXKj2z45Gt6V3yXMZMJ4qi1RdUjTEyk6eUkVzShTy7wUv7ugHbJdACrFkBsn5NPd8juKR",
  "key29": "XbkRRJShDrEoFLXui8ddbJqcHNrBLJjzPTWksYGrNJhRpHiYsA2etwa1iecPaYSBiVDUMa6UgvFWX1s32T5vjAZ",
  "key30": "3shke5RmFnsScKErUgn8FpH2b89zzMcm6iXWCaHqzWHFjzGXLsgF17fJGAr6zG6QAmkkgwzJ3PJBkKbjEALx49xv",
  "key31": "Nt58gmCj9yrhSUYc7XeXHjrk5GQasibmmBCx3CULCjrKVdXCPBqXG87JVg8yPP5T9Y2gRU9MM7jM97QzFPwEpNW",
  "key32": "2p9e8h4VRFExxhPNVuHeFyphjKbuRnrVrWxAYCBSZozdw7ic9QrE6xvgWg2sp3HS4PbLJvTEetkbDid7W9bcJhU",
  "key33": "5BbceF8X8r4pmY1y8aogH88XkJYjuNfjoXWUQ1vBfWvzyKZzQSHwNqjGUkLXUMBJwSDdNBcpMWCaier2u5FJEpn7",
  "key34": "4B9QXbqryHVJvYxKBRRDrNzcsyv2MkVS6Hx6RsA2KanZVr5vdpkRptz4qQubhdTa6RZGQ8cHxWk3xfV7L8VDWvV",
  "key35": "5oMTtk3z6FMceeJwSsoxML83NaQT3NYkcf9tijQkQNR2zkPRRA3WCgu6XGYthLBUwXsnj2fKJXBHuSmux8n4EGc5"
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

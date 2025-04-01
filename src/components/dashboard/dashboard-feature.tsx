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
    "3PBduByv7SSK9TpGRECup9kUonRqBvx5iVEaGYviyHJCJveRRo7pP4annFCmZVawLxH4Xoz1ZEZF5p8KfvhYhghM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvLQXPfQkchTQotacEGpxb2e8RTYdG1NnVFcdmgnwfW54wJpjXEUoFTzrDeHaNt9WK1QVr33PjZq3C8pcuUDDDH",
  "key1": "5jQ2xY3BiT5HsTTo1yEkh9Hs31LC1ncNUtZ8xSp7hFWDK8EjB8ZkEv5wAxURZZ7TV3zBXah11PeP85Lpu8ia8xre",
  "key2": "2sE5bUcTQC3PjQik2cu26SWkNaWpDdi6fZmcqJWAKSbbGK29fqjESLR4cJqwpusSciQTBsGQxUnpDbxsFf4gFARx",
  "key3": "3beYeweTL5Sxq4uVT9jfWPWP1ZeMZp3nUZqeYr765m8vJeWghTkGZXsknjhAY8R1gqitrCxSNfF8z7d7uwMFK1SY",
  "key4": "57QXTxGhDmirBtzrPqFx7TSsge3G2jd9uwhdat5hSz833hxGy4JPXcS6kQXXEwByRW24gAuBzvG87Ejtwtz2MB6a",
  "key5": "528EpaFFLh33heTwGpWTTi2qKiubtA25xsR7LyAX6tL8PFQ3q1CJtAJhjK5woMGDnoxUh2z9APnvsnYmra5mtQCs",
  "key6": "4YhbR8WeGikYBk7bcsNyAXYte1bwf8oGCL3KESd2fjnRTRZkjRFDv4cFdhAEHviTKMoaUsiUqNBpsZg5t1NpB7fu",
  "key7": "53tqwdKriojH485SBJLDpEoMATknEpXnadSYkrgkafsw8fkvdyYfo5R6dDSG7892kkJxgwwdEweKn5GNNDbcbEkv",
  "key8": "3B3G3wqG8hgHqAWyK4Npk8VnUcdzGh3Y8yZUzS8Q1wjRXf9e57beE1YBHtDGDzCTH6FuVScUubNuvQmjCXEU2b3N",
  "key9": "4jkwxeQPQZHqcGctUo5mLrFf8StiPQrS8yWZR19AZFoL1MEta9xR1AUzeMqeTh4nfps4YAfYa5e3FMSdtqVRXHqN",
  "key10": "524y8bxJ1coY3u6C9dGifVR36ovKW1p6XeXqkwU6emtb83VtCFam4rwGb5q88v6zJpiT3Tg2D3n8bfMj9uDpdjFj",
  "key11": "k3LunRZF7es5L4LxdJesfsp9sYzYCj37BTxT8Zk5wWKGhiCsTXDFwuZWsedcHcvXztZUqn6vHsfTW4VXJzkaJJg",
  "key12": "4X4daRaiFSFmyFA1C8ENmDH1M4NNCnWXBGEyuZcxQZSLZwWVSwZwLUjZ5fRmSqfhGp4EodZ7UPF4nqdRvhsVV7W5",
  "key13": "3nm1o37pGDG6zGyzpEzE3C2Se8Bc1an8Q2MHKWVQ1y9475b9JhNnwSgpWb9fGXhTVb8sSexG6Q7fd48bQ11h7tHu",
  "key14": "4vt45u8uuxgUoySHoNESvaDH9ytjdPwjkaZUqDmpDWoTCsYzcoba86hqgcsPAqS6UAK319g4N9PHqTyFhpRqnAsf",
  "key15": "S7E75RVaY6LyZXFFw8ZiHrTSGQEw8b5WN36Y7WuLytctDgHP4sPvAcAYDAv3shrbMVVutPe2a12XcGamSds3mAM",
  "key16": "3QfzNLa1xR63Wst83B6iytLW5fWZp5Tns3nG1k7M2aF6eg8fHVwB4MUroptTBXxzKjHQCqgW9o3tJLh8TJTnVki2",
  "key17": "57NAsfSkrZtk8ErVt3yUpdzPi33GsAZCKwRHSssBJFyhfPSgKssJqHrfpWykm6ycVwKRZ2VwCeofUma2fK834f67",
  "key18": "cv121g7CMVuvUyrjEq5jiRkfTEP5X8eqCgAx7qD4v9cY6NAFbYwpm31pdXWwVbnDm23T8DXxDLfmGv4EwTHazhX",
  "key19": "tr9Fo3PmQXgFDHSLto6i3YjmeSbUiUscNTwusc5LJosWemhJ4jihMZ2mRBZtiVmG53LwSWXcFDzqveLqBD5FiBV",
  "key20": "5gWvPLp6FgBAv1cPZuH5M2kv2yqoUGRPmNUqdLSAuj6XofUDw3hWQybtSYNDaZ2aZN6sLQzETDBhw2uVMWHr2mXG",
  "key21": "64AFzbi5F3FBLvN5fE2FFUhKADgftCRBsbABCLo1qmMjCbCDfwYxV7cFesH9nVwdzLCDGq2pyJCDzadLjYqNokVF",
  "key22": "qF1zVUQe15BnJfR1USkMchgwk6bt8ZZ51yw484z9X3dtkDXjdMJ5oPnA4VmdWnY4yDWDEnny7zxj1duHaEjftSb",
  "key23": "2AR2wYVQRtJRgAPQUFJcax8jkJMhRM88E8z9Bi1d1Su5hvLrBPJAHfe71jqqCQ7yyRd5qj7oWbUoDUToPLBTY3Ms",
  "key24": "MSDBvuFP7vfpvMfb98iQ6hoXK4jBTFkfrSBWFpYBYyrpwQS7gSTXgSvVqcoNjyjmtGVQ3iojsoQxo2hPn5UGXjn",
  "key25": "E8yYyAnMcTnrYPFzWGK9J6WGJe1XTSwYaKFJRogv2Qi6TE8e1xmxtWFF7mXbnhht8xXNC8gMDSSeQY55dXijiFe",
  "key26": "5dP8UyZnAU7zreNSgK3tPMGRmiXb5zST2isd8zgPZSAMBdvpTNtqSG6iFwK3cqRnmUN4ePBDLhMzGfNjW6HkmT8E",
  "key27": "aA7UJzBZ287eQVW457w7SnZBPxCzYJH3Z7FppthZjPmreNWjikW3xk3YCh9Pi5MwAqyUvt1Sebij8Ci2udGSPhQ",
  "key28": "29Q7PakZRkNWkCHJLaz4hWT2vbnAJJHstS6xGStjyoJoYmrjmfZQTeEZQP59nZVzp6qxVt74vFqc3UQziJBFLWvL",
  "key29": "5bMbEdNTMXBUMJWgpqFVG35V888mqT3Ph79NUoCtnF9hAdv8fQecpn3ppUkHpbwsUTLbKg66PWiwVQnVBwuaX98i",
  "key30": "4HZY8m6du1eW8H2Yj7h9MzpgCogrq7FtebxTm6SHkGjYQgWiXixPgLpCa6w6ebDyn5hwaFHRr3yYNdxWmgTe6Fnw"
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

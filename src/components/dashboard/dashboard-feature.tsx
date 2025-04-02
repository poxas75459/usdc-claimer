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
    "5Hz5swmNurqWvk37V3af1tTWWNcgJqpviVw3m3MnDCz76A17xFe6mKVj8k2HJKScH5GsVMSDLiT4zJDC1BaWtSTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Wpn15oNPnbuXBEafo1fPEXEdAvYDPVjrpdoaFT9kJvq3GRQt7nCjKqNY7Nrm6V368AQKq8iWj8vEw1UjMkwfg4",
  "key1": "28qo1bpXHXMrZNYsBVWiHJJKHRPBUx1Z1aSSpCBevjEmNQCdtEVXUJkpaAhNrZDows78m5CcRo6xiBA5Yjs4Mk9E",
  "key2": "3hzy5TiNhJARwCRrYmht5ZJ7yLcBZnx3Bq4MdsuM1q4xrqzXhS9ywrcDY94V3NJR5QPfA2rKcY9sL9kJi22ePRKW",
  "key3": "668YPDfCqWAykkmcSvhkxzRZPrLSujgTEaCjUzB77yAwqWqZBLQVUNcJh7DfTGgfuLKBRdPFUgFHUf8WSm1iEnwr",
  "key4": "33VCEU6WnH1xEWX1FjLboNXSKjHayqawsjh2gWbKDg9c3CJPdoR7ZMCaxyCipzpPvetM1M3aHC8w94c1GQPLpmGB",
  "key5": "5w7ee8nVcYe6WqexwqEs9o9hJNy5nWxDaTj6nALuiAjvc6Dpb4Lt6edFBPFSRN7cTH8ft2d9f5hEobVC93BNDVu2",
  "key6": "5XhiFMYK7ojLrw3HHN4xVrUKTKirVcLR2wxEKcENMmJp2Ro9fJAYekgrg1HiH72ZfVDcRUFMb6E3awgNbVeP6mKq",
  "key7": "uZrZ3Mcsfk2TkGMq8VuXAzpjiUNgqbyMKZjVoQqUA6ZDB5BNSx2DfAVH5xu1StUy56feRu8dDBmW1YnN2dLLCmo",
  "key8": "49KqFoDQvpYTkrtQyeM3MEQajSwbpkX2tw23AnvNpWC2SXxrYf5SKwej99EAKeKym5LyjuZk95FQXpLGTiMjXEuW",
  "key9": "3F5vWVW1db4KnqXmB3WxCkMJHa6iN2mh9dfWMLAveTSMHkxzecKTXKK7xgDmfYAJZaCH3p1KiQGyJnTndjDxcvVV",
  "key10": "3ms7W2aPNN1FYDUZJzkBX8yEA2g4DPeE71BEZoeEzJ2FjwHYDUKYars76TPxAiU4Mc1yGejRxPmKVJNmSAGjE9fR",
  "key11": "5Fo5FuUBY7FKG9bS6pN2x4SZU1g9dGi5K27sQJ95ogLLE4GxYpeTHZQM5w2ttEmaVtX5aXnwCNbhCjRbRtxsVeix",
  "key12": "yDsU5ynHf43wfvTJwBrJWSTzsD2wVuMUNULDdENQPCWxTRhrbB3BBmFJdwNMusr8LyMRLJW6ihgof4JaZa4RETi",
  "key13": "2K63AzWjVSg18tn19wEJ9uUoH74WkjjdzAdVj78nGKVPrT3KTCbNz6i6ts4NZA7yRPcGVoqE9wiiTU6ce45fjnPu",
  "key14": "4UKzr6AnPvodbbVi475G6J6U5dM8n8D8FBTcv67dEFoDquCWVy887deJdWRqg25fjRes7hFn2Hi81ddgKT2PBzvw",
  "key15": "2wHNUGWHhWXgd48oHjhBFpbrjoN692j46y5dfdMmqvxd1Fq7U3TiXfRYojcDMopvWiG4LRtZXBWzqcw61dyW7CAL",
  "key16": "2pLYDmfemuxZ5zGrcpx6khmQChpZbXMdqeBYPcVBnbmwo6uBowcLj6u9a4vAEAaZUh5R9T8nnAaQZBL6ZvNWDcDW",
  "key17": "5AivN6EaMG2eNp4eRY2fT3bUWCo5AwkEoubBiHe5oLfmddVNVk1frXFhVccHcsmmE3Jbxz2juMdGZ2GsriqbS3pc",
  "key18": "2rJrTPG4q5B9MBr2NVTLTDunHZSXLXFQ3T48yzkFrbbVRYe92fJCy7M398v4ZWNUZuLYmZQzTpvy47baP7KHMzvL",
  "key19": "5Qn1hfXi1j6qa9q4JWoGWmnjDj6V9XAfYiJQqqbdUyKmTUNdGN1Whp9owRvS82M8pRCHogNiYk89wdSUiWVZZ5Y7",
  "key20": "zL1qJYP6deFY6UQoHzJCEAhG6bGsmL4MrkMNaMgX7FD5xbeBpCBnd2D4HKJcHR1CK9cJ2fNHVNGvKmC47pVUGpW",
  "key21": "5aK5YTAdjgoo98FQfWkL12nb75poyWbZSLydZzr4GnqPe6ApR82qpAPR2tAr3mZARykbCCewCfbNx4RPRWtZu5r8",
  "key22": "4MV4DUjEctUDj7ZVZ7nyfViXD8UcQ3hLSKuVTR8LuWpm7TnbC9F5XjNKgbRmGeq5Bneakujc41P88dbKZkSukb6f",
  "key23": "4ZuUdTaLh4MzipoJ7EVaKtdUEsMtykaMN73RA1LGSVSoAr7r56D9MJTqQ2GXWQkxF8AY1V2h6nYxG3NZpPBUbLQv",
  "key24": "3pfwnsQv53FX23Tv9Wag2dtmZ7sdnCzqwWHRBhEeyd4avQcQXxNVQvHbhJC8scuHWqyQojJ9tLBH4dpKJWZbc2w",
  "key25": "2WNUL9mFzc5UVUmN69vJjpEht5AhwJZBFHpq4MAbbYUbqLFa2T99YwLB2Yn6iR7BbLKASY1VCafRVKPRty98LLXo",
  "key26": "3z17ovF8bWQ2aqNbJ2mHaovY5iobeetnHyLKq6hQLWdN23APf9XnXsqp7rXE2mLSC2pMvaTRAA5k37HQQ1ofzuua",
  "key27": "4oFxj1eGMr1kok9xEAoMkiEShHr9xEQD2eHkBYYc7F6vYyovE65azsJgSjTh6wzdUd84M7hP2fiL8mweXpP7qTgF",
  "key28": "EY1QNtnFMjGKFBthmpYwHdH6ndfS99EjQwXNb5cDmD5csV88cn32nJKY3L7wxyBcVQM6s4ufvmwLUbRcpyz6egk",
  "key29": "fXGBWnAMp4hiF16fPxWno6Ejc8MBVDFqfd5v6sG6ardzE1Ys3YYdMXZdSwUsrjJ4dJKQDSqjT9DeE55nDkAnyXD",
  "key30": "5UBwmKoaDzEA3AUwRP6TvRnqUv2SJcfEVcRZ9c9vmoMzhX7TCx6hsuBLCBvF6JWQM1NvkhD12Js43NNMxN4Py13w",
  "key31": "58UFkhASAbhkm9fXoSWJ3BKJH8FAFgFkrmS8G5NQAYeryAuwXBwXKvGXchM2KAZuCpxo3dbb4Fji7apoCYV1VhUw",
  "key32": "62a4ZnYh2yb5YFWHD5icz1RCNCooRsc9bAF79E8wVp58yJnEV2tFWu5wnz3WSceL4H9YdDpAAuAtY6xyctLRdisb",
  "key33": "4oFGSvEhRC1wav8ZKkqQJVFLsHUYrhziKoMo9GdMzG1Q3iLHWziLnsHPvmEbA1c6GbpKUNu748cNS6t6eN3n9aBd",
  "key34": "3pQ6jQsPf1nNR1czrdLXkRSXqVn68HyT653rb116sW7vkBgDxChK44S3GSQ45kewXN9awn22pMqNLgbmxz5QA86G",
  "key35": "4PoJZsQjp6uWTamRHQMZZoSknktLC3vuQphWdepzeYgabXpLRZVpS2GHr9djB1nkywWZZifNkBapvWL2TUgeSS7a",
  "key36": "5yMyX5TshANYKSDEarvgRHDtLbzS1phpyY7E7rQvxMUsAKkQw2NfEpYnTFXJdgQRDEd2pwgNe7dsL5XXBLUtUYtq",
  "key37": "572ww7W23CgDswzHRP5as5eyJnPQKqChghfu4RdqEJcHh8DN8nGxJ6QfvVKtdc6Hoqbuc7mdyi1D3xvRMXyeCKCo",
  "key38": "55qJd2zaaaWNhcjb1XrbpynQrXefRq4mLFZdeBMDgspSEthJw2U65veHdcSh3YRGAHnr1KXyoGNKKikruh6roA6C",
  "key39": "5D5KynnWVBijWRN2LizJ2J1Wu8eetybkQBB6v1mZrvBPKMXZRvKMhdEGMdqxS6xnELUu9aazT1YTaM9m2XX9EumR",
  "key40": "3x6Q64MokH64DbMJFB925tnETcDjaV7YGjMxFQzURqVnTuLUYkGwwzfAXesrQuvdewuUgUPn6HXwJ2NNDsH6wDyt",
  "key41": "3qfUxzMiDRUweJJkdpmsSsE4zzgko6i5L5iPq8CWnYjysvQXoG98KJqdqqEQurP9K2Tc514ibN5z2L2K7LMCoJ7g",
  "key42": "3ob7niy6LV4n9VCjd6AxdeEMCaW747HHTQLGTf48Sz7B9T72ZuaYG7SEYMsBtmX4LdHdKBBDsALRuyABp5jsUuBL",
  "key43": "36KHBowa8CHWNxdfsoHAdPEJutADbGgNagP87bUtTqovgV9b8jpX3HKLwG6RNECJhTCW7hZu87tiqAiLUTUho7mD",
  "key44": "28YJrbGMZKK51G7wmd87ncuCYPvay66yWfEE1QBuMJSZr91oC7iTgau6qSZdSMmiZvPgJMmgowQCSrg4WtZ28MUV",
  "key45": "2Xo9d218RLv23PGqnyqmd1b3wJ5z7UAabXg41QPMNzCRhSw9qAj4JbJtHJGqPtzyFyWN5gpP6nV23cQ355J9Bq7q",
  "key46": "3AyaJuiW4imZ9gD7QTsKS3rpTFUfwAtps9Eicma36cqtiRotqk7UjBp1xBwmK9rc62PEjqdpGriFWscQUAmqYxqP",
  "key47": "9Q7YjNSKccB5LA9csresrTreiNmV4EGRAH2Y2L6VccxmtDf96xoEx5HGLHU4EzVSX6E3tjG6kz341yPJw13m1Jd",
  "key48": "37txmMbPzPeo6wk8dGk1bvCJGf4FHspTuxQFYuSiUsw8TK1nLQX6hWVwyNEojy2gxs4YUF11b6ve9hZtRq5zMeFK"
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

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
    "2Sj7Cdr7nuYK9dVPU5aRtfoqvTJrSHoY1FaSHeB2QzddT6ibaw86VRUyy83tAbsgFwWDtaYw43aZbHF8h5nLwykv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nDB2zaPqd53rvjywEnGjgwfjdLSJhLRBCoNMHn72wtoGMJHPK6kv75cbYC2Sudjs6n3KnJfH9nxu3a3rGnaS8Ak",
  "key1": "4BQBjV7YcjhQYs89ysekcmdMbu6eXoH58XHx386JPPh4SHXNxogTE35ioqit2B5zGCjobFH5TejP5TAoWjztzmbw",
  "key2": "fH5akNhkgECZuZPpWVrPPWyPNZtKgKEDe5U8cmJRpzJTJQ3kDUrb3ySC5YhgsL6ErP15L74R4FagwMehNd7wq9N",
  "key3": "5yduYsSMYXrXoFcA5X4yr94fYt3LFRVoiUfJ1EJd9ECmdjQFHnQoBY5kQ1KkXtSX9M8eubnyqWDgq5ypFMM9TKs",
  "key4": "4QWB8HYgE7hnhuwVWgt4xCFZH4dLQXb38aN3wkKHmFsGDdGNR9ZM5A6aiMa499uzusaNgHGHaq6X8iDSi5Sfzvmt",
  "key5": "ZmBL6METJdsKqfRD5CmH3knCFkgB42NMxg4eaWvfJ4EW4dDmeNXnY8FsKmNYMgrzedSWywQ4YuAL8cbfpRziDjZ",
  "key6": "ziJWLPhWMD8zWyXjWhhVqVXDa6tUqgkziFzrJWxVVP253qjtBcaapqjLgYcmsmoJ6QPez7GhwsLbnDbW4KNN4xv",
  "key7": "2PXcUqyeHUfxuhQVj4mDmrLz5ydoFnhzW3TZLiRNagHUCxgreRvrKzt9z2vwxf335FHCWC6Qj6mHM89XdLVVMSJE",
  "key8": "44fCgKhVKAMip9z8C5jwSr91sxTSBzxM15RYxiFvQHCjmhmpx4aLQ96ynpFTZX147nKFWQEVukdYJ9gvy5Qoryrf",
  "key9": "e7QwmFLbpT6vDhanDP7gS5YJk6XUPBkQMG1KeDYxcoWSnoTjddF77AQSKUnKQ3ERCq2jWUfoT7UX6dXTFFAV6uB",
  "key10": "4Eu8NhMRoEvXwhCrf6ZrhdD4arPXDNghHQmqWtPu9ZNXJTop7nUXrUHqSNy4jrMuEURMbDd1fc7FPzEjfFaxkvnM",
  "key11": "UChz4s6fgbLiijqU58wgAnMu7bbhFKBNyw2Svkd5mLWqhX5a3twF6otgYF9DVyprP8pbhuyYaiWujDEsd1dFA3r",
  "key12": "yfzWDLj1T5XeXgTm1F61t8cmTakZmCXWoHN4GHGKVuRY3jdhFDRX5mA2VhJDp8ibwwrstkZqgQmgV1vMdehB1wW",
  "key13": "26N1PKWDvyZBfHFqhmhZ645ne6U2Leq4KQkJqbbUYVkdQ6DnMgbMDRuM4rJSHrgDHnZFqpbUyJjhiMZsmzn1zWMF",
  "key14": "33N3AQVbP6ti5L6mqPHtMEYtEKX1DJzXWcjYrafGVvL5KDjhBtouBbSdgyH5axJqyqKvgzwrrEEjRcUtvn8abjYJ",
  "key15": "QZEEg92njpmLJGpmC6kMWYMujEGQ2ap4xNDUrPwoQN2bGTrxfJjatnymtKBEd74zb1EhVtreSpQGUY4TbCu7KsG",
  "key16": "h6iYcvQLi5UX4JC1MYS7XsjbdCvxZPbR7Twx2ZTGDtMVJkzqN9ngCCZvj7BuwbSvDECwBCB3hthEH8VoqwETPFk",
  "key17": "3xez69sWH2jpsrKgbgtuYmn8tfigbN8VpBtdw2JUVDVUBHvSUZEttMAt9YJt6i6HX3cHyuPUZ6aSpsBLuTXktZSF",
  "key18": "4WA7Th2kqJsXys3nHeBLGYTLyouGKQzExJPujT1uE1V7QRetckTvEDKjpKB8RLxLqvSH1NnF5W12fViVvTXykgwB",
  "key19": "exwJnTi9Nkso5NqmteDTfqgQVu66n5GmnAJwxPg6ERCSe58Xgk2BM4BdAgoYnWJw794YwBU4w6cXjinrYbyAfHE",
  "key20": "3x3qb26fyaLxZfXm6yVRcRAMeAieSRRB6eMBgHqQYx1YXSm844x1PUAq5KfnYV72MgNUGStNeW4qstBXAkxPxUpq",
  "key21": "4uHYdCoRmWaMCDh9m5sDjurbA12VpxSWBAUbQpJDHeCa3RJHq72uzNFdWJaSCzScqepqBSve1vy7cVsp17FH5gby",
  "key22": "2bu36JVYPMhZmBwadzuKWVcpQeLKNzYgcZwgAYx8TCkVctZgzgwF2QfSSJ6rWsjNHtT6HWgi6CGeXeXE8HnDTKbf",
  "key23": "3UJYhGR4joHehNKNuD5YXt6EarXrnehHW4kbugWma6sZmQqKhr5ZwocbAF3RkER4HVebuZiDF3nFzhZc9Dp2BVxH",
  "key24": "4fXFTNiBTbeyTNc7zX4HBWAMCFLqnmUyubozyjLWbjQtwiSQsQmV2r494eBmP6eaVxnkrdKGNDoVfVkSqZbBeLnV",
  "key25": "27jRqGrGJP1pmEXYGkTXWkbmg22xg3nbQ8dzt8SE7GDcxFn1BBt3jK9sWLAm7C5Ah8E59rKJDSLmTfE8gm3PqeK1",
  "key26": "5gi3vyHhRJnguamSx4ij9mgqgDb8dq4i3v1guxaSxwdCe3BEMbCfudUC5XsK3pVJRCezSBejXWrn8L8EohjWJpoD",
  "key27": "JGMpuwtMM8MH1DXbwQmagw5q6ucytMgcf6RbofaT3RFUef6paTYha8R38axZDZFt4obeHC2CssmQ2N8Eh5zcT4s",
  "key28": "5EguQyU6gXzd3AJ2MyC7JS4PuyDrPaLfVgtGoMPti1k9hPB5g9wvhdkK44FgHb36weAgNoykrTkeJ8nt7roJtis9",
  "key29": "3oXhsDCq9Y9zFMReYmKbuzp5MAHFMYzz5SHVLqDtNADYRhep1JwxyF7nxsm8nHELUFZXMfQgzyg4hZSBdZAhkacP",
  "key30": "ex7JPfp6fyioeRYtnJjqLpkJRxDpa8TEJQBGDTojao8L9GXCLBgjuPRgVrjq9GHFXLGgqDqg1qa451XVrpACKvu",
  "key31": "5KPnZoX1EH514bDFh4QTe9xEArD3c9kCSrqEjh13wAm1GLxeDKvhvWf5QsyDqYFbKfe8rRzEgcN66jQAtamUbVqe",
  "key32": "WuLPnxpq4fC3rpKioQU6dWkJVyu2SzzBaYj2YUXpykeCztUqqq9SqsJnm2BbiBDvdNqeXJrgqYEttc5YLLuUKBm",
  "key33": "5RzcMRGwNMDr4J5ySNe9bmmh1NBVfLeHxRV59JUkUqUVs5SzzutudrZjV39v9WvoDaKBvA9veGoH1WvsW7Y98b9Q",
  "key34": "4ekfRoecDvmZh7DZu7oaYpqQpQCKheK21X4cvdktMhCXwfhUFVDiSfiAxoDXFSVsaetSw99RAF4gfMbW6gQLf686",
  "key35": "E11gSo8ENUhgjKxNTq7jhZf76xP75222df9Tu3p8cGiJe6TNKNQWyzrt38zme41qXAsC47huhWtd7dA8KZNhiMi",
  "key36": "4r7rjdNiH7JtHmpWc6HdUmmkHVTMrmAj9yWsiWt2rjWFYngymEFf3da5nwhiaZ7EEmD68zA17hDG7JqoeMjt5Ao9",
  "key37": "4TQkPLoKZjzdrvqTknjpWS5qupn8mQS272DqCQ5kZReTE4QgpLqFybd8t9Wy3AA6EmxNkfdAnmrq9pE4Gxgy8eVd",
  "key38": "4CXRD2AtHpAZbDxBwLTq8E3qg4SBr2vB3Mp3uxvRc4hDShRhARMaHM2fNsu2yBPZ2Ds9T8PkPHoY4oXnn24d3nfZ",
  "key39": "2NaPALNkhhp6R4HYpTmSnEziMJxAa3RKat7oZj3Dd5m8ctkW5Unqo6FT2BhqBU77zkDEVLszAb32fnAQ9gxCJ9t4"
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

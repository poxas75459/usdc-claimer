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
    "6JQH1je886x4Aubaf7AwagYYFAUqF14BdupbyShhX1HuXLk3LjPqA6g4Cmp2MtipJGhFPPSCmKFBKaKQZtTi46i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAZP8CTaEACwgYTnYXDxsVXq6f3JtadfNAjSLfwdqBxpbTaNMAMQTzJ6bU83BJSCKEssMkW2DzXGMSpcS7BP2tB",
  "key1": "7mbtjmBbSVMvnJtfwzm6cf2zg3ZLJzB1PvPxCGLBmaXF7fbQTtYkXnjRuyDNQzfUME2qbJgoeDJ9unJ4sDfe2Qi",
  "key2": "4nUe1sAnJHw1W5AqmrQwpU5JCvZPmYDedxtogVWFr9AtcphPKhabgP5kXgqYK4N4UmduPNxCDo9ByDMaY5P2znmB",
  "key3": "Ut7eYWCg4ngubdjnuDirJLQva24Drp2xCBDXqNorrUHBKszatefbkAk9C7Qyn8Cnj5sMBjVt6hHJwai1tXYFJwg",
  "key4": "5zDytPxuA633o6LivFdLDB7HiLJfKPkbtSBFhZrJ6ThC8ttLypFENUaDDAdV9hTUwHGxRUdXAzSPdEVvCCFTQdAr",
  "key5": "VcrdbhJbW3NJku9z2q4vu2qVBMPkrZEWGmgkY7bCFQXe5ioEsSULQdqD7pLLQF7EJ5CqM8Cef332XDk19P5zMAf",
  "key6": "59njRSKfn1K1xvu7fJGntbAfhQvEFHbcfaJuuFMk5iyQJA2MsJyARyNPdveKcgTXuXek4CLRM37JV7BmfzuVEsok",
  "key7": "32yKQ76xQPtY3mumLRx6j3MYWP3Tk1j7AsFAa3cHCtsgR7LPGn7tT1h79bseX5yrEiKU6FNSSQDV7pS7fpaNW8Yf",
  "key8": "4pF1kXuxY8AEW9rti8vHofzi1xL1fD3NvMg88FdWyJvU2d5TUStvUe7KLnnSJKZKepxrMCZeBkaNtXP67yT6BqUj",
  "key9": "3eBFxACiakvgenUFqskiVzxDfXobkTaNxcJKViq8ouQoAigZYyLFFVKTNZjvcZiTPSWRAxDpWmPqzjzZKwzGM6Kc",
  "key10": "2scXhngxi1dR4j5ZyFeUXJySG4YMWf3VQijUDzTQxVg2M8rBVuccSyj2imnG6AqTE9KKBi5Lw1hZQWBTueAEnLsC",
  "key11": "iYkNVECyy7vMq7Spg3LB6QT83ttcFSuKrHN6gaQG5RpV2QBAWGRCz2NpmpSVgxomL8Gb8AeSorYNLBY6DQ67szQ",
  "key12": "4p1ahjkyXDXEHCs1wsRTU45WZoBy45rdw5q2vwPHXDeVT3jEhVykXPMGmSiXVEzsLqB5ggdzAtd4eaMPEFeu7bPY",
  "key13": "2zrDQq6H5sZkV1gsKQfmgbqFkPYppLPwKZiBqiR9fYzMkFwjrsgPMQxSpCcoa6jQAZsWtS6NjNjHqa5DFxHWTfiA",
  "key14": "5YnECsfTAVHCpHnTtRR4seM6rHjjxrte8npuSBghum6tTguKfSgGcssEvPnztaBTR82Kj51nu16AL82q4mKW4FVc",
  "key15": "4styDCY8frUwSt8YCp4WXVg3SZJ6a4Mstch5tZiY6iqeXLj74iZRbJPcPFG6SbCFQy6z2Fh3x6yZVxzS4neTWpT6",
  "key16": "3rWF4sEJ5VpKSQk9hksGgMYnKHpNvdU4pa6M1mmRVYZ6QBFPiTo8S4hgJ4ChvSdCrLqoVV88V76KGhdQHFUmrQg6",
  "key17": "2fHbCMUqvXfJLcMSJCKPUSYkifBpRFE7hikiwWykbJzEAZrHBiWNyethWZob7X536tw7HMFX4vpL2DFHhGCU7Yfe",
  "key18": "jbnuKNiA7JLUr34WjmHs45Z2Q1whaCZTYxVheTXPu2CEZspGv9P5DK3Zuu7VzvzSKpCA7eXpQA9k8tWPioFFVHG",
  "key19": "33JEVA3nZ91o29zGu13QWxgAUR23DJjRFuVJHRBLNMfk6keSDYWkgvpoVWtDWtTPNjyCvJGzkJQVgwm9mBfzerRK",
  "key20": "4bSzhH3XVR3f81PFMm4M8ZB34EdzQL3DFhPJg5DcWyTvDWGRGeQqZgs7wheeotn3oMegLm6L1uJuytp87trs2y7Q",
  "key21": "2Sx2uYhJpAgmSdKLPjcpqyPg6phfcrJPxteyH9ATUMbmun8jbkJjViPsTakfyA73bTthkmSjkqz7WCUtt6YZ2jAX",
  "key22": "4eK1wo2JAgbKHaeK5AF2o6iAK1rbX6XMZXMhNdGtWpbSJPMLHN2A7SXHWCaMmy9ymJ9w6QoEmJ8uH9n7QhW458St",
  "key23": "AZzGRjzNswGfQEN5XBaaTDSpUrpe4VcSmDxjtcJtFUHFQJbe17DzFbZCM4z6BYd5cWud6KJJYjKFNDQrTFfABhf",
  "key24": "GUJGuS5LPton7gsqnkgahzykSgA8rdEW8wcLu6FyjzhXsZtb2vBCBUB64YFpZAZNeRHVuoePKWb3ev5pJaB7uUB",
  "key25": "62tedTEuqRZU9vDXqLVzuMe127f1tGVQTbQ8wg6JsKmSSbteYZwj3GY2HD4eDxYGT1X4xdZZSUqapF3Wi6KkB4t7",
  "key26": "5r7io6eo8hFTqnnWKeQ8D1YauPrhctrxHxHvodzf1W3SqxF5RQweUUGdbhymKnA1FDAwk3Q4XpNZkG2jPpXCtnjR",
  "key27": "5Zb6g18HrpeD5PaQRqLEf8fEfzPT32QGZb4tDZsYFcDLAWu3MqDedLwp3ncGdxY3d5rXH2n7wgagjzRFR5ueYRC8",
  "key28": "wFLhYFCJLPLBuSoJsVb4e3Ysn2gXccC52N23P4mKCMxUUqXYm9R7mfzz9zuNutYedGxzEFzzFnN2iocbtgGfGQp",
  "key29": "53NPEPBJ5wU3NwisnhKLSnfTBqzCTh5yBNxQjFWveazZK1aDbaHJuK1YN5BFSk7Ueo8VJg5HTtCHNsrTqFJgr9ss",
  "key30": "27H1uzyDxgyuG5gVQU6x79MqQwHNjH5tqE7wbpVZjjBygTDJDPpyjEw9ni6b3GvFE6RXYXuVYrWtnZ63pLVhAtG5",
  "key31": "64Fyw73GDEBAPB15V9MZpVmAGtaM36ZJZn9GeU4p4LR2pU2FRPqjWiEDyv79Qtob7Kj3i46a6wHyzchPFYZUJWpe",
  "key32": "3CbXaKfougXuscbBWn6WuHuuAGveboj65VJZ1SN3dBT7a6gwcJd7CZUkBgms1uxx5pavffaiZRcN3kHHNBKzr2kB",
  "key33": "4unrrEw8GdRBDX6xTzwD2BCHbVFFY8Ys5XfymwSjuekqEVoJ7KjN5YytbgooDkHuzGKehyCSMH7jj8GDfL6k5Qvn",
  "key34": "66QaZrG7n6xHV6dqeAuV3KqcrTDAMfFijvFJeY4WwwrEH5HSsGNnyKKH8haZTYdpyXSFe3gcuzyVE5wHMBfcRbhU",
  "key35": "221JQuXuVPdgobUfaAnJ97h7zFfyYRygHj8CWQFr9cXZiRzgB77BgSXmXvuwty4FQtqNAvLgvYsPMSQepR3HavmN",
  "key36": "W8UMakgWKiDDWmG5hXekVvMbhBBzmkXy8JZEkxYme9fevp2gmHeAsn7Ca7vodGNNTXPNQuyYyq2fesviTZGZ476",
  "key37": "4nP4vwntJNK2cHGYiXWgWLkTEuwtacJF3p2YosZGDWFtLxU9JW1JrhxFg991NUmqrbygMJLKNaN2YY1GFm9q9EFE"
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

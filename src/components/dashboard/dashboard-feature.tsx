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
    "3Jc6yCcX2VqjBLbd5JT6mZ5iMvwn7U9Ct2yEqeLgzpTEhNhY9YfMWSrWYrN6H3eo7FFBv291HXYzm4gU5Df5RaQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWoJcuoWXpC5WUYFJptaVhSJwtLPV8jsesR2UK1qL6z8qVFkkd1pe6QrSnbQ21nbNMsTuResknZoVvTB6yLxAPt",
  "key1": "42Uy2ZLcGs7xf27TyGJPKLNWDesvA3xKbKYjCsA6dmvWBdJ5GHtvqS1KKRCwyamMA7Esfaqdjwhatgrev5BRyXMf",
  "key2": "b6fLJJuxHdtQqp8utdtfdoc7j2mKwHS8hSsAW5EAspuKTyAvhBQGtsnUcgVmrWHzZAdeD7rq4vrpYPXniphaGZ5",
  "key3": "628USoJAKPkzQpNmCffGHddNMrAZNSEzC8ccjUckLqHDPZqEe1i6vryDiBrfEpgZAF998V5ENg2srAgA7L4rDRJ8",
  "key4": "3pWzvo4LbKP2zwBZwyrzmdvhyrnukhJjf8r7zuaj3kknTa2eL8R7d6f1q5TBEvLAQxKwcrHzsksN4VtvTvYNHqP",
  "key5": "4goKD4wesnCG7PCH5oJoepDpsviwxVvJ1SHwaCvdQHfxZRs6dXk6k9ATAmd9bbwbMrnGC8cfHHrCjQBufqN1jP7Z",
  "key6": "2RPncA4bb7uzPxhW8oF6MhaqGdCNs2XNkkDaU4nJAuJ8R8Wvw4SUuypCSa3cFhztofC4jxRFirSxDVKkqWo8VUWn",
  "key7": "2W7DpVA3fWKkMRw9Z5e5X2MRK986tE9QxvjTqHYPjPLWxfqxzTqTrHLBEEuEn93AK3qXdUEMVqh7aQQePgHjbvGf",
  "key8": "4dpLsp4j871fL8y2sbQnxDe526d2PttwdM3YVUdwckahfGSbWZDZU75sWRaR2dVNbBv3wN4PyoPzvGT5mQEtt1qw",
  "key9": "4468YDNw4yrUvJqPSq7JpWeVht2Vtjif2M2xTiJtBotb47bGDzFN8Tw7T1kp9aWcLXBBkoyH79f3Ey7SkZeUyCi3",
  "key10": "b6f1csi1sv3YTu5DtemjRhB7dGp4zu3gvdMEo8Ddd1Zme5kuSDbc8FSRVSk6kVzLHy6apvPJCvynUgtGAjcvx9X",
  "key11": "5k4VS6j5BNhSvUus3BLRPxqQwtPRwBHUMc1MjjBbTosemuk7mxAxQmT4gosqMTkBR85dkWHkvVAUbWVNs6vkgYN8",
  "key12": "2DActCmAUffnRekMAYsLzYV77udDZzyvm5ygmZY3xfo6vkHBRNdBiwepaRhuHNqUmjBQ86NAYmxaueVAvaxDYM83",
  "key13": "2EWftHMUZzQdRJUi5vGavBFFCV8fpjv5KLAsrDSp1Emquq7RFbmoN3BXs6uxPWcgJhtxg6FXTxeoDn7ez7j418oj",
  "key14": "5SkGYrw9hXThE4Z7bBf2uuR2ioj3qPAezgGa4KSz97Wcao1EJfAp4xY6RnzizXiTZY8o1DSrG4uQ2sAibX5SYQBn",
  "key15": "WMSNwk3pnWnyzaXUyEykzmhY8yCNkJ8ZnvWnBTMjz44fCWdmCqQgRfjTzUdPAhFvc8oeTsr3yhwmYAmJjHDXfPd",
  "key16": "PhMpNdtvuB9qpxathy8Wxr4uuaSm5fzrdQU5LxGjpruWDdLhsu9VEtXmZAwg4iqTCmFsSj85fk9EfmHG216Y4Cb",
  "key17": "5UfZHwxKrqC3fttxpNjy6p7c98o2NhrmRccSHvTPCyWqML8MfGHu9jEp2dZrgHQkQzsJkeSgHDwLqFsUCQvfBBEL",
  "key18": "2XKynvf2L8thtTETx9yjEL5FUz3o3sVk8ty9UmhLRCvi5GfGTWgcKeY8uVyXXSLYJSsXAhpxv7R3zcm9xyiQmq5y",
  "key19": "2brdVxw71CCnH2qLyd9i1eydd3V8stMrMgSGCZPSfeGhTnvTuji25CnxM75ibE2jR4RQ8rqEf68qcYbe3uRgSjTy",
  "key20": "2MVXKcaZCrnFRqwTw9H6m3a9WLDEF93sVVqTXzT7JmwNyc3sr7WTPbYs9cg5MsTpMN9ngnu4Yqoec7j3HBqS1XAL",
  "key21": "3qpUe4Kg8WoLMz9ZhUSsDtkb8SRc934XiaWsydRfdZEuKCXo4sv1QQf1CGjoytoCqJsrjXtjVUN8hHe1cxz8xCtQ",
  "key22": "UU3FQ78VYar5XpYMqp69bsrwR9Yx9gnjGnvvX5NqdiSDQ81ZZSHKQtuWyNSvofiXeDw6Aq5CzzNyezcyVJCHuVP",
  "key23": "5e31J9Zs9LR9RjThgdCzJpviEi8UYKfYRFx8syHmv5txoTXAvJvDhEKbBa5m7W5VnSY28kuZRkeY62R1H1KNhqJG",
  "key24": "5E6uuieP4MijKnQQZBmUwbdM43dvhBQ852ddVdx7wGC2QDEMv14ALPuTGPzBJWu81iRTD83c9ZHKkqYcjaFmaiQ3",
  "key25": "4hX946iCKVAyeGFHRTjiAonVjrz3ePRmCweBu1r4VAqcJoKrv5hXKGXuCGVGh2vsuJ5wCFp2hzdj37Nux7Yqt5bq",
  "key26": "4Ncked6t4K4ySKwDH7eFNPLxXPrMTiM77f1yek9ucLvWqLYZ4D6orxBHQGGXihitHwASrqeWnjEBnTYjgCkGk37i",
  "key27": "FJVAeEx7b1pMRT3LCKiTLvsVPHGR4N81K8tEYjQenQkW4kGL6KwBUNNTVFmqjexr9pRynPBmdybVM4uH6xhUbcz",
  "key28": "4mWWKxT3ZkP84Lx31xZYBgeaa6i2JBkUL7YTWKo6rVMXQqiMS2vhVipE9nxZkxUm2N7rKz2hFoA9LvzHtPdqVhec",
  "key29": "2NsoPKw7UudhvsQgdT2vDVMAF6iQAFBapGckfTfRiJ3joiGcL4xkj5UiHY6d96KTzXwQBYXz1jpgcnuNJDihHNKV",
  "key30": "hQ1w8CSJ9Z8GzU76WiDgSg73jsrwBbeytz56DvnRSM24zCP9Mh3tJ1gMc4Fgif4sVVr5gVpfk1qdyggJJaoJp2B",
  "key31": "4diBmdFUQEPQc4rs1S8sHWVwn9pj2YNe8oVmXjDjQZmf8uBUDfR5bNkLRW9AkLFQjStxKEAzYb17XYXKvxHybMNA",
  "key32": "4GYQJC5ox4kB9wTCaNgdGN2BdpDpTxqcDou3Zn2fPZ3BEcjsgy7vaWv7bebYHU4kMnHTRcZABagSc5xYRWHcD54a",
  "key33": "34tnUcpKDxUyP4FpiRFFRye5qdunX1jpe6esdbUXBFPqPJMmnEwSsL1MstmdUueixfeXnRZNtsUG7mCXoVMKi7Cr",
  "key34": "3CtN7Vgzi4BSUuL8TvqvVkyXFYhWH4dJzTBibcN8wK52ArdEBKZ28GCSLgPxBQW76nuEif5ko1Qn9c7sBTh5Bcga",
  "key35": "o8LCVH8kSLENJA9ZnAKfv1HXNfund11xyZB5bxeGFc3oMeAKSd7u16f4VGQLEtMZ1fvPzfBqAd5H7MGrwLWRG2L",
  "key36": "3E9mPv2zbHMb3awGLsaMF7aB41ezDntWjVpGLT8P6YwgTxDW3iXWD2FQ9CUQzKjrcK3PQihfBbh7Qq6BELprZMff",
  "key37": "4MHjcSFgHBjTQYqNNXhDoLq5E4rkEzKvycchxKfZNB33fPY1FhegKizGuqwhxHknF2nEWidLdFdDjzSAmsz37KsL",
  "key38": "574GCpt2gcJUDx9Dwt6gG5wW4jdhZ72BAeT7LJPT2Ac5eykVUj8TxoCcC7SS44r5QHbhxSic7iPB9tDcqcuH1LZo",
  "key39": "88e99Fde6YXLtyWVKPDbufkShZRp4zVFFrtcvomAzbFdeXL6W4Kmpfu89ZWg9v64rsAg1L5fJVsQXgq5ttGHNjg",
  "key40": "TXVtnr9beN7Pvn12d2VDY63DYgtvwzAiG8vWtfKkUNtva6wZjJEBVPBx6g7HbWSJM3DZ7W4XvaXGruBydkNDPeC",
  "key41": "318ZdK96UhWYx8mEN5oiwn3ponVWAWGVybLDYUccWNHJ8cHqpD1B4pT95g4pmHiTALPh5mJnEj89ikaaTTVjWFkJ",
  "key42": "3AVNLJ7yPzk33BF6jpZPymwoPmCs2pxkjvtP8mYnGGJhzX1JZTPaKSxA5L1ehQShrmNkaK5qS9Z9fP8Vai16wPHn",
  "key43": "4odCGoszjQajArkbbapfonwH4mVa7dBRT4Fq2cxz2qjYM5CdY1kKn7vsHuMsRdg8NyXGzaqukvtDMdDTvFE8ZNip",
  "key44": "2LkTakJY3x5BUQAKp7gT3WMo9aiHdoMRpE6LSPFSK8A7RW1TitQpAveEJvjymJkTCg3jcmgbjMn2UgMwgqDvXQRi",
  "key45": "2hdDwdGKJYW8njfiwxCHyc36omXywE3fpHm27bfMsCkuVoeeM3EZCTB1TE4ZhYTmro1dcfDdhVTJgPmz7qrb8ixg",
  "key46": "3yWXdTGVEaA4ogpQDaxwAqQFpeG12aYp92k3GnzpL6Mqnt2QvyHs2ZTxk7ViaAzoy2ZWesQq1hs8yGqCMnjYT4Pc",
  "key47": "o2ZRtiXKuB39Gx4ic8SmfLfwHFbigtNPuaSqtmaKZ3BQRXXwK4tgs4NpgywUV5RMUKxwMSGwMViGFw6ymjFEhuc",
  "key48": "5z3HUwZ5NpbR8DR51igRdYM779mJcbE9C2Un7waC2XqqaZc2Hge1UTf3tSDDLdrxAFpiWQWB147avYGvS6cmMrEb"
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

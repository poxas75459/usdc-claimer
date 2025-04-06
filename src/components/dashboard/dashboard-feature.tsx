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
    "5XQmjeeC81i91GuvVnqZnAuGU2AjiqAwhtWCXn5qhgpCwrDuAteNWn6rZMyvmh6UHscHdzYZYmarR5MGwfHCQ2Uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQCyEF3VwZ1shWsLriWVcRtmUN3UNuMhQ2Madavi4mtMPrUNmWRNn7fMs1kKkJ4jsb629zWgFFm4zPb9Cb3ADrf",
  "key1": "bmZ5J3B5nCB8j2mTvZab94vcwdobmgcWKxVXdB145qkBoJWbUUhYmYTwR1jvumhMHCsQpbgFr9sVpnsQ7zSaFRF",
  "key2": "3WrH8DbEcPr396j4JH9oD26WppDQmFn7Ur2MAtX25oud5GUB4UNewacctqKWvaRAtw8s1sBpvqwL4K67ggRhy3MM",
  "key3": "3HatdTfhq3y46VcftRGzDy52ZrH2fmWgqfBWZUgxJrTc1HPejsCuR6gQhf9ixuERuyXud6E9Uc8Pz12pesyw2dot",
  "key4": "5UrZvvZxrv4TGy5zb9PNYSWrfc8qjvAym95XtM9ixuYfMYuhp8sBcVA3Ma11f6hHgVS3tJfAg3irYSdP4xfmRgD3",
  "key5": "4WhzPx326QBxZmF9Ht5dtzLZKGGvsBKHfsoQm6tafJPYB336ahf5BKFaFNDWWSNyPdNVcddQeiNB181Pf3qSAMja",
  "key6": "2hHBExuQCMiim5x1Xx1HfbZfXauKhsofXWvcNVsMVQyegFAeTFtFD19gSwZ9LhftFSjzcUouuWc7uA5r2KDenrpF",
  "key7": "pJFxqvjX7uoWTxqgRm2Poo3c7L3hCdoC9G2y1TQrE9gvR8hbSA2VmEAzDMGycmaY2Nv7UShwXnLLotrBMn4KWBV",
  "key8": "5ApRJipRYyJSgSmdS6T4bcjtXYs4cHoRxVQhSR9QBFzpM6c8fTVZbSH73VzYf89uFjgN1XUdwaSTXy8GRg5tU8pn",
  "key9": "4dhyHsendHm5ggzGTMymxiqjDExAZXzBt8T1VKbsvpA67T9jixi2Y1UBDaaZncU3nRvLQEjm9zo3HrJrU2nSe9xR",
  "key10": "6pcU1Fa1FqYtKuED11uviW386VbWaUeARMPCLBanJNQakCEDQcvpWtkfJscDjtwqJy8b1Zsekgrzz1E7sSbCGf4",
  "key11": "3SZyh1R7VpjqTTsNBpqBeGgF5jNTgShqTxs3fyMfcssnQWTYfR2c6jLgCVvGeC9LhwUi5pYhhuRbY1D4bhevBGj3",
  "key12": "4SL4ehqEnz7W4Z7Em8BYmW42cPSSYyHUr1QnzEfw6ZKM1jDrvB9ByTXNURwrsYFQBKWvzonWknchs4FVhE1sLwTw",
  "key13": "46B6qZXYfZnE1TReohjAbn2XfErZJDUfLWzvwxwUXsBsuevfk5hZnvabALv6bJJwcecbrY7krpCQVRsw8xpCWUoJ",
  "key14": "5QbTroZrvdsjtFDjikyu6hd2QEiAGweFRHasnene54oeWBVBpZjf2XiYCQQBr53F4PQ3nFhBmELFcjJRVyoEZg3b",
  "key15": "3NcTgckbTq5MwTdzwWorUEQv1tJNwAXKZSiLL4qB5qN676sjdaoCmiDyTPDPNP6xJhSsbm82GZzpPXmmpa7M9HDX",
  "key16": "4hwurCVQ6qA9wzBYTe6o781VYzYJrR6MbuDoLR9Ds1oFCD6Y97fWVYyQ2HuMwCjJ5sDrrrUVWFkT2p1k3KT2kFiY",
  "key17": "QtC1BAgN5Tr52YcEw2a1BK5uLgX2uPix8DVnksf9ZCKfgVDvKN6r8sqjjjQS5qK1LYBYa5nqfD9yUAbf2Vpq1Qd",
  "key18": "zs8codEg3T6ojcnb1rtGzzKwnciGxrgHzBLF27Y4RrXXEqwkyEaRmgBmKjnei6xb5KQY2CKAYmkKjyapcP2VRLQ",
  "key19": "3Y9vDx1WWyX99AGEH6MrzkwPwnr2HoXyLbCfkj1PVDcaxXKupCcwerJ5J1dtVPZAF9ZSZtkKZitfxiE4qe6Yzrx2",
  "key20": "29dkK55oPk2zDesnki35RaqhnP3C5dzFpaqQCYoh1Q55ZdLT9EMxD5u1NBcG7SCY2hH17qYPWBW67oeozePmNtz9",
  "key21": "2w1VgVHWEWtU9YgQvWm4YgCf3njdkhKJgRbJFtvSNhhnvnFUca4sStmRDyu4qbvNCdR9Uhq5DpNk7KUcD6WchLnm",
  "key22": "2aNVFSQGo2n48uZGkXerJkiz78PZLkUjKGG8kWzS8fmHigFXUyxvZ16fXerjWzw7kXKQmv5qL63eb5eGRjxRLxsG",
  "key23": "3HYtdpixSnbGcEzBQUUqxwbrr6PTS6y6GaDfKPyUGiEMmsCA3VduJyGVBFUXrg8hBg8E3JUJNRqiSg1aoNSWgDSN",
  "key24": "5omVoA1ZFGhguHpEEpy2z9NWA6CW1yqkbYRjoDKfAFn61brV33MqCLPyM3MeqivW77hLcyu7MdQgvww3ubVwBW4Q",
  "key25": "61JBe1zf1fdMnL4sJzw9ZnGceFFZUDiohD7twVsawebfcGDfVJ7KvqnL189VMawXz7tBJaZTLyM2nGb6D8vAnTZe",
  "key26": "2STG33r7Q9s8BmcgxXpBDLmc7h3Gas9ybdJjdLYxXBF8ktwczgNSo6UbwGxRAWdBm3B2mdihVK2o8AabzBEMyAFM",
  "key27": "3eGTSazrBvEcdgDqVaDhXZPic3wnDEFejU4isXLbm7HaLeFJm9viH3zoFs7dcqFLA5UJKNJMuqnDhM3gFC79K68U",
  "key28": "5dEABDdc4VH9kTv8XLCyGh6rQPSULJVPtZRwrZgUudssDYGGmYEM3L5NaPJee9grGgHFbC6QrFiTEwVa2mMwvDJP",
  "key29": "HTTDBDdtNg3oPLEZSKTKh9qMLZ7nJyGEXh5HcJLBnYByt9uZmThAwPv3t7TQeM8VdHavi7puA5Yf9fa9cR6dcYz",
  "key30": "3Viog2aYwNt77GJYe2jDihqqtWS982fJkmGecbH8r21swhFPauZ63ArozZv3sZAxDjhcCwBme1gJEqSTZKhjADfd",
  "key31": "4CDWdBYmerg8TEsoDkWYaf5sFjn8jTS3yUszaz1APVCoJ9rgSaoUY2q8gEQumAnQ3yG3doB5mSzqxfUPdzqoybBt",
  "key32": "2yTjcMAUH9MHHxYoFuBTH17MS6dERdeVfHnFwsAAbszRFSUAySoMmoU9iP3STUzDByiQmRqSyFsSNcDikpqzNQfT",
  "key33": "cgNoNG2wShRfDkQ1doNFoyHEy8qnzvkRRY1AYNsHB3dd7Vv42uFsiJhJ8hQ431nxL5f6TTqd9UwPvp9qksVFpcq",
  "key34": "4ayFcW1QJduHu4qm26AJmyzJ7nDj9s9hDxS9bFVVhJrCDzcF2TH57BpDZmkhS9tAFgR6RvQMUovHgzvh4p6Ceo7k"
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

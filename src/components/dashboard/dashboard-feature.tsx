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
    "22TUfZdBtWqrT9ZcqkEixgLLTc6EVjXDfZzzBMrXRGz51aCCAKL2gTnyQ86xUZstMKWRWpby6w2787SPVEfUVwkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J76BHGmZofBgv9iyv2q9saHAqnCGrTtK5mzUQV8aPxzHzU58UfwZTdqZjBWtio5dzMnhJKs13rSmLqXhQQbsgnN",
  "key1": "LJk1H7LaJjPdoWjPkLrQ3GjYfwJyrZ2BWCDsZ48f8F7gkLmF8P4Jhs9G9DaAgK6zQZND4r5ZHHB44RHMxvxWxsj",
  "key2": "pAVEvfxgfuVTStKHf5Yg2a5MgxVxVAaxN5Gx1nDpv5A1Bpuh6tC9iMNzGGBS7CPEr8CtmG8yornpppAq92UZuod",
  "key3": "4zFMoamMG8yUkdk4vcnhaeixcYWKbYy8mSYyGkbuBdqFqqb85BKjzaJftrQo9cJng2TgyCGiSGd91DtG6uuUALU2",
  "key4": "5MWrmQ7aCtmNE3pMiZpFmWKg9zLdwcchbAVTtqnHNYVDArbCT2HBXhzjfoE5Jya16GPRzF4xV3FvqXWzkTjGs92B",
  "key5": "3FEpP5mUQQLUvXDDfZT6BPLq5wUWQPovzNn29ecw79DCB4XrTuHM1CpTeZogjd6waFnAYKMo5B9X1724hCcynGfw",
  "key6": "3HapDhTBTRYeXSroLFdwWhxePtu7Ld3inKkcYzcdn5GNohRFfLjfZaupeV9jiQqdYUwe8zr7SruaYWLDqVUmEgCZ",
  "key7": "2r6yLum25eh4q21MAd7fT4ZTsTdkRcPzU9WfZsxfLT3LPsrnQH5B9hrJWurdFXDYs2FE7bmEgw43nWN8M9nrWSwG",
  "key8": "489UgfQTUaFgFrEvKk5LYToPWRmD71PrbSoHLv4DsxjzFidofofX4Kh7xUWZDSFo4yy4cKgC7aoGv8seeS9u3KpW",
  "key9": "TBa2xAWWhfkF8tR8vR1km3PEZFAHAzARZjMdKACuuUiVLVvodRDoSefhX79EhBHwF9n7KqDsBhTr7juMYwS9kEi",
  "key10": "4YUvWfcDiY3nJNGenvRA9qesvHAef4ob7YAZEf1wgByszbW5UrH7J9JAMJFzKJB8EGGuU225GhVCCZ8qNLJJMbf3",
  "key11": "3j1oLp48dYQxLjZ6k8bUQqz6Kt3v2mpj5D6X4nBPWS5VwEVRqjPAvqLKVEQPR3cVuC8bJcQsbXdQ8AjiYjKtZejQ",
  "key12": "231Cpuz4HJkcjW2W8mvLxxrUQxFg97ByQsFjASSf6U6q95aB7azQ1fZFTTY3YCpoXFzG7Nt1hZ7y3xssczoeW6ch",
  "key13": "43qPpxSMep2ug9n8GZc52TKPiRiiZ3eA8UbjKgC9CuWaqXcJaYNk9dWQTgfCDLxCpQhT5Bxfndb78NDynPuVqSCL",
  "key14": "3Mg7JqEDEoSDKnBv8zf49e3JYxk5186zPoxJ7u2LDkR2RTCSU5Leo4Azw2R5fGnENX2KSA2ghTUbU5beQ9XFXwPp",
  "key15": "3WP1oNXxYXbRWeyNH8JcZEkKMHvTW8D1J99GLC8xzeda23u9eLa2ZrZcxvGH4FspcejpCfESoQi3YHUp9Lsti4Rq",
  "key16": "2siTG3SPzVsHvPEntABTDZeETWKuUB59jBMqjixDiWQXZ4nPTK8CF87W9KQBhtwv7Ahu3JWx5WCZRD4XkZic8QYq",
  "key17": "5HwRyHigf3vcvw1JwS4kddFcMXNqjs8oQjgeAV8USpRGfXTL2QoBE7gTYN2qHibQbizeoKhhff4Sv8bWTWwMZ15B",
  "key18": "61KQiuXGFEDr9UMvJbYXbcTHWXA8TqQ3yk32GGCr4gn7UNcXDqHZzFKADSSaUH6BhJ3REq7e5wRHSbUXNFkesXB6",
  "key19": "5ucnfqXottPMdsFCLsj1FmQBTAuZX17PxjkzxX4VpNu5Dq89N7V2h4CCNdTA3jsi8QX1hy2R5ihqEWLmJv7h5ygx",
  "key20": "3fXbMT2NSK4jzdpNCtbvHPDhHukhcvTL1zEpTDmjAtLRvewY9gAHFXaMZkDUdjhtJGWMy6moXYd97JdbbzgUhhrL",
  "key21": "3JjE2z3uwoswk5Bf3U1fQvdmBx7oH4K72862ahXeTHak4ebL8dPQB5wTxUMfiqJHfRQYpBDdVUqbFmNTqa5GgYe5",
  "key22": "fXtBpSLyRu3MqSA4bPwHa7BwSAbaD6QNpaqSqznYqV2ApRxBW191zGgz7V47EjNAD2tJfhcnY7exPfXbVP35w7g",
  "key23": "1rzQPLmFkHxcpGMBtsh9WS5MdnftGzSThzhU7AfASkVeyBcxcyz4wUfW9S82qqnDhgUhxmTKNKxBNpqubBJ1UPS",
  "key24": "4hSNLzdxVFoTArX8sPiyhDWwrbGViNCHWK5oR755i89ZvLUmZiVUcKVcsix8iuWdnHaWq4NQqWNnv5jWn8pbbf5d",
  "key25": "5ZD8PxmHNhT9oxRzbSoYMJvcGD6CyZhmPuzGwgb6xgt9EnvDeCqNN44DE4rvfKy9wLNoFqxtH5rmQ5z6w1Z5xPG",
  "key26": "3s82LwDmM2FtGZBQunqZLg2t1K6uZWL5idYa4t3CNs1CTZV8ptRaZT8VVc5UzgpwMYJAaWgasEfBa4FMB71q85eW",
  "key27": "GiTNoftDF5uqrYsL1AAe1haWMrbdoqgAgcVjUSvRtCpckLTTX8upPRX8iMYB9QmPNjfdW925JAFxRxAAbYfHsuV",
  "key28": "5gEaJ744Lc7MNms5GyDBz2nmuPjHc8g7mxxpbZXZXJXi8VkKKwWscAuYdAyEShEYgXMM7uZahNBA1ZeErcXC8wJJ",
  "key29": "3988Aon8Ay9mbC7M8ozLb4evez263jXyUjh9FVwYtakgmvhRvHji62bweRHXeSMeAD275i7pPHSRKHbneRSypbwx",
  "key30": "WNzkd1oBhu24pE5cS3gVN8vdRD9SZvLSwPam625MfhnvF9xkqi7edvrz3vDPbqCPD7eJxaRZUUyMFL5soXM3MG4",
  "key31": "23htDaWrcjpUfjaoNKAYHeEgjV3Ug9cB5foDaAhYSAuDsePei9KAj4Yzm4DKjFGd5BLNXijXhn2H2MKhLXxgFCf8",
  "key32": "3ERBCjHSjLLjqKRrfc2ejA1sTyhUPT85KpKYbZ2LyW4ry8exBCn39C5SMzePA4kD38RtYtz16EcAuKnsUYHu8n7c",
  "key33": "67ESEq4oMNAum1nFVZEZw1WsVWuDJC58GqyhtppxSDQL5jrr2bRDv4pvGGDwcvibrDPcqyku6HJBc5NZUmKniZsM",
  "key34": "5mjdKvsDM4wuhMwFoXHG9ubdmoLQmsAG2YtE44MtXGnnPuyejw77TL8E8HoSvmMxw58L3voca254UQAY3BPNnZmk",
  "key35": "4VBLy9kGyWumhxhkfRxG2K5jT34edpMqo6xx98B6UcjpYCPUi9zvRVifQXVQNyJVXFxheFmbRBLptoe96Ad6VLio"
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

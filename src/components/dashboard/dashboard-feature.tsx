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
    "4bE4NbthxFvmGSTR6jFUnbgwH3eNdq8JTBFUqig1zAuajAGuBjj427xfa5XWYjgN1eBwkCS4KtbPMmEL3RbnRNaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeDmtJXSkickhviMHMyTAAZXxcwVYpF8wWVHgEZNAVbLhTrXok42MQrgP1Y7NcHpaqV6nWp3i2mfNhK6W3Voo5T",
  "key1": "5myKqkfjBSnWFMjs3W8Z2ZmD3UbkecN2zJwh7VevEiPJy2SZ14JCWdWVEG12hRf51voHtEnxdxdnwt973vALq1kt",
  "key2": "4RHuMryuXCUCtXqN6iBUS43y58uyWVe9wbH12CoVNKVWkuoiiTPJjMSskeiMkthk7u6aQGrevtwpRgWqEaFwo4gA",
  "key3": "GN28ACrUnoduoYQNt5szT1JMfwbU6SVpsYJct1FNcnLGRCSGNwd4W3JXuiT9CgVHkG5Yos1MXNqH2uUV2jmNahN",
  "key4": "3p3ZC3acEFFjAMciVUJLSPgFx7TKsyqcxLQN51QbhrcZXG167Co6VBJt5RErHBuUxCHg7oeHzz2St43nsWxpiMq8",
  "key5": "17Vb6ktqajzot1pRFkESjBFqE5ATih6jgKsXf8aSPePLUVhkaWwTQ6H7eR1gVYrsut9u2TKrW6WN3mSBHG7qnH1",
  "key6": "5iLdoteoCd16Bx6RLYEgMkidGq1EZRbzYaCapHqSW55es7zvbb7Dviy1hG6q2cov2XjiLy2cUuYmW9fSNXhcHicr",
  "key7": "5iH3US1Gb68Ny7zxNce41t5U6RgDVK5hXon3x4c4RhNCvShoZWjWDFuo8LxmkmeyetF29cTN3zfns3gbMn1szBd2",
  "key8": "3T2dvVMSrmqTJxoNoXotYMYpHgCavUyMF1cJaFWNt7xrGac5oXtwviouq6t2a59ds3evSpFfUa6UYpgVJCZWH5cD",
  "key9": "3j31awMffp7U44RxeEz4EiRffoMaLJJYAJCSQPd5ad8XzFr8yMrAKpP4U1p8YUxkrbUKqwEtoFQCQFc6oPeb2xS8",
  "key10": "54uXpdyTYb3CMUPZFRuK1YXXzbbj2rcRDkpavYCLRFF45yA2hqbKFhhS3m2yhXhweeLUC1zZKKvryPxHp6o7kcFS",
  "key11": "5zaMpZJeKm9zFPiJ99MiUt9Dd5LaexvpW4ChW1CwbM56LSoEDp23BGnp1uqxQPhKt8PvvJjsYfzk7T8dmsMA7zQ9",
  "key12": "3e46Zz71S86RAxr9L1tcv2fEQyvFHgEeGNNNbiJattzfKFUZfy5azQaaxp6oG8La3faXLfrjPthM7ErFsunsmEsG",
  "key13": "5GoQei2pGGYtJnAuXQKxVMA4oBzNrPq8t8YfiG9trAwizuUP196rje6eYSoiYte2nX5vyqEKffXQXd38ffvdaRFW",
  "key14": "4xQvnKa2CrhQJEjx7Rg5WJbXUm2XrExUbjwh1GjyK6Y1M4EGtmBUj73TTHcZ4WG3Aun5AdYJLYLVE8g5HKsZ8eCZ",
  "key15": "CnqABT7uTcCWpVfNdRVu3ztTWJMcMQeTtmWVhA1hChX7s6Qk6CLmFJEywKBLZUbWeMa29ScNbGNeB36oysGiQo4",
  "key16": "2pzSobE3vRXQ66PoViJcSKRyTijh6Zu6axWTScxnDU39hyKDrgiDLan3hbScqrA7dYrhTDGMRVem8QMbGUGQxbQ6",
  "key17": "3tZYbkDHgNatfVLNVHcQqMNo4fQgcSrd3YD4tTVSjgCy1qzsk35BGnxknTLs542xUdvunAagbDQQ8nFYA1jWDd6y",
  "key18": "4o9RnpKnt2cnzQAB9wcArUQoX4mzbCBFpKjTJfN8TwfrXV7rzE2PRNmVX2yG5gymQnKxawEbnRMqhwphszZA8WSx",
  "key19": "67iUNbmCWPviq4fWTeVHXVztEY2vuCrKFTAKAPx1cuZe9NxFm9w7BZHqbwptFx1EsKh3BEjdgVNZG5GvtcKND1ej",
  "key20": "5sP511KVsVtLyspmeL9aC3ssBn8y3f6f4w8o4kTpYu8xr9ndsq8YbxvwYmFMxx5wNEWxXp41oUBFEQbHYnskV14a",
  "key21": "3CRqmhfGfrZyhbhsbfDK8LWXFB2q1dUyn5r1i1aJKabJ9oRC84VjsmGrwNSs793dHFt1K6fB4C5VTRBJHrZ2BWvk",
  "key22": "4Acs9ktUHPhyE5NQXiMh2rsSJFSWaUKX5s5HTymW7RJxpdYKfDGvfuLK9yvpkCSpzKkZaXnhhXhbWdxCg6GWzsjv",
  "key23": "5RWeEzqKCtVJGZJC7SnMAzS4wbi7DZd7wDwgTDRotmg3BYF2rvUgkh2aHWj9ZLjwbMTUe7u6w5Z9hZ8FCekdQT66",
  "key24": "4q1WBKjYqpqcsJSdLaZ7HHTUqPexWVVZTmeGucUUDvcHTWhjWagrgAZfd8cYPz7hUofvtLuiYTSpbyFoA2t3jDFG",
  "key25": "5oCv6rmf8YJ1GQKnDCSu5GjzKwxvuDZ2UrXA7tqi5qN7c2vqijzkZuKoVutD1DUwy2vtiZMt8X2vyTBuKgyyvViZ",
  "key26": "3LqnpnFjctUDRPrjrF5QyW9Gfia2cwWBoDyk1dw3NfKjLpRYzVCqRkgrCfkAaubhcxsHkCzfSPMUq22RsC8Fsyf3",
  "key27": "4zQjATBzgzP7hNMqbnMdq4MJnsTun3xGjgjUgxVuCfaJEffo4TwTxJjReMBBdVuAuUK1vvyRoBoacvGk7PDCh7bD",
  "key28": "52zbjhGE4zuVyYk3oDbWensaVJ1y37F1mdhSi7m4wb1dvbFgga7AeJGrzLDJ5K9p29UkDSK9iUqPYLEN9cskGL9g",
  "key29": "Shx2AHMp4MtE6pUdmjcyofvg7qr6coU894aWZN58UkZC6miy7u4pyqizRmNmYu8S5uWiQvAQWXvdiACBQ2tNdXY",
  "key30": "3AYoErJgEbPveHbHeLLku3Lmtm8ha8MYyTTv7yB1XCARhQAhwdeqSgoPusaosUeqgE3RzCMtFq95AZVt3SEUqs6u",
  "key31": "3zd3m2VfD55TsVZHkUAWoukEx8SFY4pqZihTbkQAG5WenA13qkcU9QA1iZEJQP59YrFwTMEJc6NNPAWZUCvGzw33",
  "key32": "3FZRXPbaJD7v2hWmuMv1jpLXEfo5RgT8qE6MLCrGFj59PsGHPupEhEJM6iNUU2hsC9cvTsLLgpXDLm9dVxEphTJS"
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

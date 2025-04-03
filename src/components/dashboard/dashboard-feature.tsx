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
    "eAfgE3tJagNVefUJku9ZiSDyHZnxDVuc68jD2zyt4so1CnxDHULcZQp7G3rrGca6tmLZAw4gWMvDkjJXLX4SfP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rbe5THjxyDzTxF25hazfTjYMvcp3qGcQEy9mZst5Wk5ghrHigk9oZUNknGvV2ciV4XsYwocQP2tBgukcySrpQFt",
  "key1": "36PwwHGSSKCXgon5gDVbwWSTCKvS8iq59v6Wy8y5HQGhCCjtpVTXEiC8aZHmkz6fcrZyRs6dKhJYaST9J9UW9co4",
  "key2": "4CXArtpSYnvEJJUv7B6QrFr55rwBy5Y2Btj1D5ejrpq1YRTErYa8iK9Zj1A5WsZtoj2cJm3ncCa4UFPcbrjSSVmG",
  "key3": "2m4SGh9CnDb3qd3Wp3G1hcGMJ6JuFLgPfuMsZjqhv31wyR9AkRpbBmpV11bXF5CRRt9JNq9vTHhCJ5Pne2Xkehse",
  "key4": "64QKBKJD3F7RhyrbweJ72fwJ9FSxkY68NoWAB2GnNep5iEgpqZNznjHUSZGJTKFJ4XHh2jKNPLa5wwhBW255hjqA",
  "key5": "2uthqWnNyquPQJFk6oivYPuKvEpS5RJrrqxKxgykmtgfBpENf61FCUJ5SbH1fej4zzy7v49DoSxss3LCqEM1zEjD",
  "key6": "5gM4TTJfpPqwTsZr7XRnV5YyJVrxfnJEoJizk5TQzm4DGcc16MA7KSdudxZ1kaY9iV31qiHK7DQb4YCG4ycTsT5i",
  "key7": "4d1dsDueq2zBPhakUhzQs71JHy6QduAV4Gd4JeMUDRiuxten5pT1MQMk6xiGvTb5UBzkbL2C3dFYuXPBG8sZ9Z2d",
  "key8": "2UbH8P3HZH6ku78idTkEjqpS5VvnW4UFKchtGb5JNy9CDVJ7Njf6Dh3e4cBgVXy98miw2GDj8rMFX9MeUJRBzDa1",
  "key9": "3DjErS97cBAtNhBsqD14jhnp3uq3evdYrukyjZr8gvi3MdiADBvPeGqqSqkHM1ukfJej8CF9pWafW5snXmZDWoSW",
  "key10": "3JHoDF6e58zRpN1PUsHfJK6A84DXgugWGLJYMwQhabkf1q4NDLqgQqKS4vPuRGdizAHLscWAHRNw1coHbzkd7QDT",
  "key11": "2YRykzA9LrUZcE3gXhXWNBvafXyNbKTLqGxT7qM1QQeuYqNHAaCvExQh66uUAdasZNAJDBZXYuW2DVqKNkigVXZ3",
  "key12": "2yc7NHgc3byTNK6fTwHnxceokrLRboye2jhDTnqciSUDNzC4YxNeEmvgKeiXoWGr9TkCW99qq6rY9YgbTifiPX1g",
  "key13": "3j4VK2ezpeAy5odb29dXQEcbZjLH9PoumyvcKspD9WgvkeWyRSWwuGnHvb2uHaBkBKm2djJvBJB262GFJZBrC4Cn",
  "key14": "5EQiSFCz8RfeoQDJd4tcKhCbs6gn1t1GVWZKHqruEDmUeNf5xWdHQTPkyCZARNAcbxdyp2Sb6Qs32PLAGXRycLPA",
  "key15": "2k32eiTiwX7T8vq2qkq2nzkByeX51JMh2v4cJP2TFS6hqpPRTY97HT1NvsTB4txzCY5wRvea7zyJ5Rv7dwo7jVRa",
  "key16": "4NADQARc7tt3G8LQFqxaEZM7J4HQtmWUASyPkpQDDYBozCKbWbhmtyBWWyxC3mgdc2eBLx9KEpGCWFg5EcqRoit2",
  "key17": "FpMZN2jCVUkhGzG9MWC2pLkzFZAXQyRHxarQgQpMnMmZkkU6mUJXbpAcymkQ9CXSczYsdC4NF85xLwptSMH8gbd",
  "key18": "5kTTugg9U4HxaBP4BPj89GymKMFoHaDkoTdzZpUtrgdJQazZNaDVu1xLQbE8FXKGLaWig7VoCWWnMvjSkTxnMLsn",
  "key19": "3WAuG6Qm28Kj3jbh8EhdtUfqRKF1UwjNjMxmnoiQt1snGvy68zPXMRsbZQyG7u8gqsFhpVszGnf31KAFttDqVFNQ",
  "key20": "532bwNo2X12PrHUZipcD4iztfrNbHjYS31dHx91UVcWBGUjc2a4Du7hTfMQhRJGE6DxKvyreNsV9SrxWE6hEiggC",
  "key21": "Gs7MDCkem6vrKEwkZXcJn5Dj1JuWbEWX6EpTErSnYYDeidTKHrJqaGbPovDj3YtDpsT3txvAKmHELNfwWzgLKxM",
  "key22": "3HmXTfmuBVyGjeiN8J4cHrwv1ccmWibMdrmMt1YQhTc4q9jeBJV93sJxTALMeytG8oeuh7jiPNGDekSz7aVVxoaD",
  "key23": "73eivo6BuZ4TDgSzeJM5haKLYawWXxeEiQvJuNdQZdwiyoyLB3tqGfG8i6ZbojrZXRxeWjZbUDS1thJ9mYwoqx1",
  "key24": "5pYmMBmtRyULVQakMMmUjJbiFjreh3M8PwL4JeEfQXn17oApcBJ3TN18uQCznrwBFpfwQevNYrt9FtNgxX1uUs2V",
  "key25": "2BBLZqicLJBxVWk7ujy3vUsiRHF1Yj1m4jn1BHAY2b9QnXMxxACshJTKvKjuCR8hHWYJdye5CTLrGFC9ZAdGNjuW"
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

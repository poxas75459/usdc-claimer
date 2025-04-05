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
    "3okUhBTBiDrBNpgmap3VVCSVXKcNn8npe9bS2M7jBcsbjoX9XoT1ZpcCA4RAQJKV1GaHQCb1JbBHNLasd6fgAFjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JDqjVotoKUnYkoX3GDahaVBSTnRDDjxwGK24L4c41JUfdf7embbTT4Zgj2K1rf6mjmwzDMby1gyXFwVB59nUH4",
  "key1": "MGmFASQz1xieFXWA1CaQpaPCBSbVqCewogKrFZeHh2v8vV6X5azHXx2BQPsQmPzC8dJ69GdB1x4iZ36PjoMvWqA",
  "key2": "mWNTVtRSCWR85Vmpe1KsDDVF7VRX4Kkbfg46DGJ2avzvtf56QPUxY15t9Bsbgy3kkZkV5vTLoh4m1wNhyEDtppK",
  "key3": "FivdebQ4QDnSTASo9NcWLcQzD5KiUqH1pi7byGw7fGLN2749X1q2DG5AFfMpUbeGLpq4k2KMmtuwQVNBJcSpKJx",
  "key4": "2QiCBM6Q5g11bXGAoCW9GN2ToSXyHy4wJxxkCcii8ZYnpad9xDi4bMHxYbg9Eg7QKD9odJ8p2bLnP31gU7FAesnD",
  "key5": "2o1wqnsGsHdE6d4RCsT25Y16M38WDGhCLaxp1kKMzz8647gQF1FxBz1UNNGJay23nnQXE7WepKyQmjktaxizbKWV",
  "key6": "3F8qT2Vf1Sva5zcpthm7ibCZYSvSSB5iTJVT5fFxdXEEnB2xYP8K11RXevzunkxp6UwdoEZwSPzGwZpQtMr7J45K",
  "key7": "6d6SDq29m8KmDpaxUSWhk751YBGSJTDJtLy1AbmsJDwQfUMrFcgbKD4v7qcbpbfbpUwm6zJq7wyRNzFFQq4kzpF",
  "key8": "5k61KGq4ApGfVat8JaXpBQzyyXHT8KtF83g7QcNTUE8aBuMBizBnjcPR1gfnr21bEznfP1vLvytvnZWKNpAYpQXN",
  "key9": "4RHAMTs1zvZiHBeRAuLhSdGeaMc5RtxZRLkEV6VcDGFrbQHVqnv36MFXEzpJ9ESUkH96sUV7vhmgKHgCnre3k6pb",
  "key10": "4mgE57kUi2rgAMhGk85wvgc89vujpqcW59SZ7nmmXkFmKo6GwFFxHNjbMy92qpmjrjypq9oCCpzdtfQW1zUG5MmL",
  "key11": "PibM6FfWuCcCijXwiCxeZoks51KLPvVoFbvgKaxg7iMwdgXmcPEnBAYRqBWBG7pBAxznSpC4sP4k2QS2Zi3PNsv",
  "key12": "2JDRitkZN3aDKjg9Rh9ThkmCJ1qtBKiYpPABaioCvJCKZtNSDdiT7d7LXFm6PA57LkSZBkj7JuVQt4t3YMU8HrcW",
  "key13": "58jRUW7oPbPRuDLWMCk734MsdQSYjWEbvfJ7utxVJmXxAPyafH5roVW4PeTXju6RBx2Xg2Q8LbPj3MwmXnBMGUi3",
  "key14": "5t2ujnbFc9FiHisog6hSGrVTmm8mE96t5yKVXLMBwavea3jgexCpEHVwWNtQgFu3yGB4NrEGgcKWN7WU947vhq7T",
  "key15": "3MgshDkb94WwWBN21E91bXo2SuwEXd1jb3GbGgPLh5UvJw6pwXbn4EamyLs9SKMg1ehWqbfVwPUYB9y9asTuZVCe",
  "key16": "2jaDazHFyKWRdWBc2Jqh98u3LKG2wD6YsQ7UR4KHu5ozpd6Rth59qYe4xegbCxPYLELMkjinj9gBCFDKtu4XnYCb",
  "key17": "62CrCBqLNsJrxqVnoPdHC7n6GuoEWcUFU5yoT6Teb5oDzgT6EMeLACRptpPT9Jzw15Lsz2WKgWNKmdQUsoAChEeG",
  "key18": "2FEiTLZYYr5zXMo61L6WJWssAC1CfUuRZ5kVHjFn3Sp4RNZCjdrxUhmEtidcvbKzc4ZHrUQVqba6PTA5g5p2AqiG",
  "key19": "3pmv2gbWaqy5xJMhg8tRLsknoT6oA7P7DRJ7HWNkp4s3pVDEgzwgP2b8QjEEnhQteyuUTbS2QKUdejghpdDZatHk",
  "key20": "4V3CYSYnNJQQfJjb9vgRK3VqmMy3T3EcpSxuCsMtXh5d91LvypfTdLS2bfwZJBE2ENwMZGnDTRWdZaQyMqKeEV6G",
  "key21": "5J7NZj1KFjUPrFRZEsYhYZFgHji3CgyztSzYgpGA1VctXWoksL51CPf9ywitZbmbfVJwGTrMLqJz1ZiuzeFr68gK",
  "key22": "4BmMSGCf38zRHqf7kjUj3SjC9jvhhFi6joZyATsVRAiDqSHQELajvZMpyZWCMDXa1rcuYJfx5GaePKVRasqJbqKA",
  "key23": "5C7CkyywU63G5KFocub7zEptRhVGVSuKfbhmCUtGq7k3ThiKXQjWmgFVWdREb36rik1xwH33m51JZq5fnhdTFzvJ",
  "key24": "2G56Gq6eVNqQSmv5f5GDCgC2rtcfEsxYJGP5EDet1jRU785qQ8FGi8pEnQnoQkvaCE7drdNZgeDLYWSEhHLFoAof",
  "key25": "5FWHNxUHgDy7Tm6wCtdMB626Jh7c5wQ4Y2CsZdwV97WqUAsyHtvkzC8HwxHfepbRzT4STsLEHVyyxYUaFHkYuk4L",
  "key26": "56odGFdYo3hHnjKALrrd94Soj7S9S1KMckQ5mqfuQbhLAW3TnxTCXHL5YivW5gEuhSV7JFzrNjrehxMsctHWHrop",
  "key27": "5Bx4Xy7iN2Ta2TPTgeKXWHsR6foNjw1gykGWdnUUwb412CPnKp2bALcp28MGNLMsAF7BiBCXY1bxYaz71JLavaDW",
  "key28": "33jvCSvof33U1thkupxS1Xs3eJQJEf4xcirbbFv9JAsMJQyMfyMGXPe5tRWUsJCCKokz6WAdXmk4qfyPg9g3ndXc"
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

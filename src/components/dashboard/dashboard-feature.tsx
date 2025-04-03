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
    "2MiM3kKqNUkgpmzNyDzMMvW9b1Gm4Fpwdp6E7DL9egXnsBdCwHyRe63GTc2REoi6g9E71aNZB3GQWM6U5Yy8vmrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akS3vBKVhEb4a3mBuoa7r9F1Mo6yJhqNNuhxXHmEa2CREzWdg6jSnGywTX9cLkndsC6agv5hAghnUAoKjTSmo3j",
  "key1": "4igMXgww5Qi3coEWwEaaCJ4TPwsVG55ZjVKgFdvi82oK4UKKh573RFq1C8y1dBsHKyWCyzEexR4Egr7JJayPvTyj",
  "key2": "5Yn1DxbYoisr7wsK6j7MbjAcLfqimtw9qqngPde5U6YXeWdhMhU2gwYqNiU8T25iviupKeb7axZ18EiLjavx1ezQ",
  "key3": "4psQMtp6Px4dqhoEuZCSkiFMBsu7Tv8idKc9tXxsHXx7aJNZpxFPDuVHjRkFBzy6L2orY2MGskaEM9JnFvq1627T",
  "key4": "2qXZNZMVQmcApA9tANpow9hrAoALApszYLvF5DGTqJtLvFwK5hKtgA3y8PT5qhX3r3KnGoJGRN9p6TVBNpNa2pPA",
  "key5": "5wcuruw6eTwEDRUqzDD19kGefBfHRasaPshQBoVbdqu5WNMgAoPdQ222ZYQHBaMVN1jJ3oMiqgMByABtVWfJvChb",
  "key6": "5oDabQboPA6g1F3UaKgc6XxV34xnryZ5ZJcdv2mvNopyaFFq879dT4PQJ2HoJPV3Cr2TJZLCyYtrjHZWWBq7rmCD",
  "key7": "4EGEJhb7zn8oe4c7HjMGTAU7G3DdHh9L8rizsdcKFxSDkEeZr9LhTRpdrsx6Dp6bCWrRnUYGuCASN3tyDpBUEsko",
  "key8": "4qXUFLqMtS924sJWBUoeKKCMDSKuRfRYCR53YwVTVKgLrhNV4atLj4cb6eMC7o8LRws8aKe3CDnE1FwuCAtjQSRG",
  "key9": "47zuj88bk6yFg2AYmvBJqbeBWTb78p22xLFrWJmZ1p7oDby4FMAX93pMkLNk3tEsirsv1hsJPoEunGV4KVTjQceC",
  "key10": "oPty7kfumDNoP6NGhcXQDXCadTyahQXhhgTTwYwZozkfjFGtNgVuS3uRT2FFhEk1jV2yBhALrFKrmdpRthMyYe1",
  "key11": "yzZ313RDUAQA9T3JvQUWzLUsiP4dk4XrhYKZUFmJ97aRYJhcb75AmqWjD7uh5fsjeUQVPrFeTjp3aXV1eNRAqEW",
  "key12": "YtCdZZV7xS6arveuTHzkqrksbaQLjhUsErhy4MJDLzuAPSUWvWYJwH3pnFESwjXUqsiwQaRRKvnSqG2ZA6Cf9Ra",
  "key13": "5ytiMAAPdKU1m9VphHBk8BXqRbTMS4gr9goUwJpCJUiG6KcfrotDr2svBuvgkGNCPfkCSnuWevst8gnKkjFYYQS3",
  "key14": "4t4U9fZzxUVDgAhW6x5tTcLgZgTNZTF9AsEdjNZRDDSPFooYVnjAf4XPz3uXgYZCEavUQRGR5en8yzm8GDmwk9GY",
  "key15": "3kut3CSCrx3bEmUgPZic9J53AQXBLaW5yrXwk9rkJADcMqnG5fLQsXbeTdy7HvH5UhGqajXHE7FzvLXtH92ty5EZ",
  "key16": "4pj1eqowcgoeU54rASyLh12qBvenxa9YcVLiybJ2cMdmcKxRmNf5uSdjfCT5sfgt4EmhiMv7RCKp6fyLyLNN3HUP",
  "key17": "UbmBkSFJbkJZVy2uaExGhPPeXvkeShcqZqHXWRE6uvi2V1bkQrDYb8u6eSNaW3T6roHyG8oVLc5qVXDodMLMNMa",
  "key18": "H2cczLaUgYnv68Lz72F7n9WbhCaNE3jHJwN7fvUUryifsRVVAiso6yQfiuAEpiKcWGzBLiuQ4N1VsDHbGmTNcLs",
  "key19": "2qvXdyy41SqSsG8ppH2Ni7A9bZdmqMUh5d6BhpkkzQWsWFJXJnj81VsFuLHbofTUN4nKoxBy9CgQLKbyMwqNtQxg",
  "key20": "64dCMv9KxHiNhxoaTquFsuYjBEY7GHbfL9iV74ewSV3g5MyTanDqoH18AFAb9ZN9k5KWmMRW58ofVgaroZgBzwYK",
  "key21": "14sHXEd7eFqYJXcAuFE4NZBXEGqvjg4aJFnEa6pZwgUy4RmwqMeS94vPSTvQdkzgqCVLyq1qFT7nSw5h14cKcyE",
  "key22": "5dcvgmk7ibMnd2FefbA4283s6VZ9nwzd9Wpa9uEmE8185zCGk78MjUauaPRkcwBFK4Wzu5N1vo2jW3BHbJWZfRfh",
  "key23": "5cckPMscn3qwhPjG65zh92w98ERPtKg9y6WAAeYZWqU9rDG7Mm8hEmBpJ9CdkAZJsfXU2aY6tuJSgYPCAPHEAXq4",
  "key24": "2CXPnZwHEmyU46bFyfJGsEDK6wqsEn7b99Qq5xN57YrPhckt5LGHguLTD3LRiXcjT6r244tApn4HaNk1CzaaAcd4",
  "key25": "3FtDH7XF41HfSmuMc23jokaDPYzS6rzUrp6jnah84R5A3vYN6tVpCsadDrtBuAaVw58bBjNqoMv2jCEtRTPhvqwE",
  "key26": "d2uiSLXiSvgCmekxMemfvwZ6rjZRz9Su8M9iFWFLzJB1TJMysnps1U1oSGXVji1HH74H3qFTxpdC8NtdLB1oLmg",
  "key27": "4Fi4hCCTvUeHRt1MednxMVGn8wbzKwTwFUF1qyJs5kVyouqXmmq76jv1gPVUsu4qiNQg5cdj1UKzzd9J3KqceCMj"
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

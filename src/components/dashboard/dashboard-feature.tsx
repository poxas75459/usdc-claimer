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
    "L619uGq7cbViCTEUnEB4ysLdjHZ5kVNVNeFzUcR59WmVrf9NWvoTshgWdb8yimR3KJd71kTfQDi9y5ZRebfeQhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCwxRWC15puPyZJB1kB4MUoYNT2T73pxkHAr3fLZz16aFgp7LTAC8VUWi41kSDs9ybuAG9pF4Sz5v5m6cxf4mXf",
  "key1": "4Jf3fHeFwTKuj9Eo6HJj7pFoeJnrMCcTfZq5gXJvaZVdU59oWg3mPbuLmfHnNuRExqryfQoMXnRyPh4rwZcZvFUV",
  "key2": "2apUZ5bAWyXQ4L6krQ7dMG1cPCwciixh3z2YD69F5KP5y3TpQTsL5dvghSoV43fCXNVdNdQSATWwiyZavZkCTBm1",
  "key3": "T67mUaRFEC2NdZnFqj55D4VeeQ23TDvM2teXM8z68Zk4MtijUm4p8bYEup52CtgVJtB1h8xjRoX2J726pDJC6o3",
  "key4": "2wsCWsJ71H5sRcnsYJNJz3nTbv4YMpSH8roUcBHf5W4ffukwnSWdW2PFpTKDjxyRpXXbNycfDvZLvbYSjN9idRFu",
  "key5": "4bnM2GtWqKRHsrzxXVXZ6fXav6dgiFr3RSwpx1LF7DV2o62JvbMvREgphSeHTw8s963YRQhgc4TekyUMLx8PCf3U",
  "key6": "2mA4kiP9AMS4HsKgo2bFDkQeptxQomXNGADQbaohNRq5zytowPam3wcdupHhFa4yS2jnxXdkvozeLkfPCNUGedWa",
  "key7": "5NYVcendYRyrxsTkAaDG7bdBteCUw9Z7iw6QzoNbmaUKrX7MNFTeSqBYJSnKCDQhe74ban36wLWMu8RUJRqYEqfE",
  "key8": "4GRmi8BnQcRxppZ2HLFxmQU4gLrhj2obwbEhdL6YkBX4WoCUfnNBvrPHpkJwvSLxf3TY9Mw5QZfZHJHmFQ2XUX2i",
  "key9": "5ZTtYr6UN9RcyhokMvbngXN8YvYEToaDziBJStioFf32p4aKwo3NbQk6eNa6aDU8QzbUqn5T8GbCgWsQ94HZ3F5s",
  "key10": "4jKw9ryDn6RaiFSqM7ZPjcyw7fPwbDDEQvPmbBT26pi5G87A4WHkVGW7uwASrKTXykYRQwAtYhgjVV5aSp8Wdk6P",
  "key11": "4t4m9CUVUULyqj6Lz2q37zzCGQUaew1NGxuCMnrq68EUi4JxTKx1EMN9rjKxAtUHtUu1UrToorbC4ZuUYU4d14kH",
  "key12": "2dyhEHGQFjo9C6qYVD4AV2muMDAoLhffDX8QTiUsJpEFdjoXaze3GQM6d4wcnvFzYjzfCPa98ssL9HPK6k9MDGsz",
  "key13": "38a1BZoaayNtusSrZntBF38sNyC9wJ4hsjvqhWSQopJEqDV8Y2N241ZACmJKuLPvRo8fftvgceTKqHiBrZN6eCjT",
  "key14": "4vwp2FnGuTTMVnUscXcXnKU9QCg1oRXT8PgWdVJNcmWPBnp6CiLDXfUF3iAWq83UYGCwntSzj1xXu4VbFahbED2n",
  "key15": "65V4MdDapN3fjGWj5iQpadHWFJdtQKpnkaewXQzQHnDtKfxSf4VgcvQCiv4Xh1sKSKyfP3TTLbVDbQpCPk4kC7Yd",
  "key16": "4vJDTvU1z6tCGXu8t8wB7nmU4og8H5VrZM5Ubu7VxYycuqwdiJoeQNBkuMSDDLVsAVrRJasfbfvss9n7L1BN8eCT",
  "key17": "ZucVPdXwDUbNzqymrnxCQ91dXXJ3sfYiy3F8yh8FmSqgtqF744rmJuVZDieGJhsZkGAnn6xY7RnNobrN4Gmhr9q",
  "key18": "JfYUxUDjSV1hJC3BQRPm4AZHAx2s6RGd63xFp1hP3Y66tDVMGkhekoZpm6Tcxnxb26jonfzTv7Xj1sYjDuMAsRL",
  "key19": "ce2zbFeAJCkWpPYuR1FdTVwFUGJbrbuocDF4ZCjPMPWZMC85ta6G1K1YMcbWHdxfyTYsBPwGCmjx6sx1WCDnQa5",
  "key20": "4qPuau1eybMnLDtZvnDri73job1VfX1iG1xZYw7w9CAwQmg7PG94cRuh9FWibTHXT4yrwkGbXShSMuY6xRfkRr2X",
  "key21": "yF2rYJjGpEXWLQWg6ZoE7BHTbKUS1fSRMzhSE7CdjqbtKuGHN6gniDU8S359oAG14wg1BW7yDLUygoXGUqYvLiQ",
  "key22": "3TLP6uLnTuXniuWbLXioHpoYz7erq5WeS7iyRb6aHzmESdtqnFeyoMnUaNDHLkTeLbQYBNpj5rzmmyNGVjHYd9jr",
  "key23": "yUCq2sUb552B5vrn2ULUou21zceVPp3VBURiaHgXA3jujfYHJfWhuUX2Mu7Qap85MUMqUizRSnT8C9jPjiNwaYU",
  "key24": "67aw9bwn4Dpx5chSPB2C1AfyEnVXZYfUGa43j1mKHqa8RzVoPG1SmoHvintXaqvN738tWMrvC5TGJyMYSNotTbw3",
  "key25": "4JjtGYQBCtFTBniWSqJf1xaAdCdwJTxFBxqiLHgTARe9rh5om1FgazwUuggdBbjuTP87v6yLsENQ5SUpV3x6xTVn",
  "key26": "45r34cy7fwrJ7PVRZXLe2o1PQqXjFhrpSWTJCBtpHzU2scCrcyPtbXpcRjVvXbChsU9K7HoernTTDXxhy4wv9nxj",
  "key27": "5VJwccdF1aEBYQhtBksNkQ3xXebBcFXBqGe9YU5HWrsABhYJ6hfXqsvZrEUwixSZQZEAWEwgrYhwdHQ9JikAdJqQ",
  "key28": "X1LpE994ZGXqPgUXCSKQCUy2WfQDZXAX185FbfdKMFAuqNrn4taJpna9cMfdRUeAV3ckhtC2zfYx736f9WpYdAq",
  "key29": "3fd75L3LQgCBmfcj6QvgcopQgYRUbnqveYsYNTuKKW2tZqAwpfHKV5FUUawvKmqLQi31Wbr8atpNUepEYM89UkAd",
  "key30": "3no5RrMzdQuftvopHVWeDsDcvSWyNwjPGgc31qmQypCDek8JjELBKCJdPe11u7XmRyCy89q5u3kWDnWJEBTMxtDZ",
  "key31": "25xYVy5GYBETaPCw3qQiUxyoMkxNc69kGbtAeQck6qzYvBzvvFZvMEj1x74zrv3X7ohceu1CidpeJYgTLYvaF3PM",
  "key32": "4xh3u3LppQF6sW3JQJ1puQyPvUFvnwJfNbapKJw3X7qpWtwLskAqtEDDswUWga9pyZd45kfcozPnQiYz7qWcackG",
  "key33": "heaoqR7iGXAT9NtegX1dg4LWmKQ3BCVtx9WwerpEXpZMGGP746KmHjEH7Jkv4eNUgLgawXUog7eQMaQTeka6DMw",
  "key34": "45aGo9pCjbNFbbaUyn5Ajwg6xGVy3YjGjesJiCkvUWNdG2969gPfwWnteaq3jEfFct1SH173TQdVzQPjXQm9AXAz",
  "key35": "59qxTdEaqsjFn6vZdyasS9WCYrfyXddBqyGMuFMd8qz1ipaT8Je3YpmVVgAVWvtkDpPdF4tGBMJBdb6kikt5XLQD",
  "key36": "5xCnCXZfBAnA8duPnNFYFAaGMaafyKc1Y9yQRSEjk79UH9GEpRVXqht3PMiHBbmyHUnBpQq1rzRCzBRe5JF1594q",
  "key37": "srif8WCzRZ9GuS3ki6o45mWYNYEWfREcgCfRERpmXpFu1aDFdFWpdbXDLCTDL7v2VYvZNhnEFJYvAgAuDQp3NN5",
  "key38": "5js2eRLqsXGkQxk5JNoZBBtwCwnmp5gThVoreCFUBA9RBMERU5ZRN35Q3fBEj9yiEtUNkd7wRcjm6RZoWHNzeToi"
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

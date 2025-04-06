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
    "3a66N73p4Ss6wu6d8abcebMK9PyKSA6TKVK9wLhvPMcbtPxH28yJ64EaEou9iFhxaaHzSqUoHVCSUfAG3EEdDYU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uuzY1A7ve8x1zckNhyg1RwwbWdaqEwDje9MsY97dRD18V1HdiEgGUHVkowwvNAw8jcE5fQqZF9BMQAX7SzkgVrH",
  "key1": "53u5dWQ867DERQMbuEWBcr6UemUwGZg6aDG6tS15PQ6npiEbZZAVm97osP8vnht8VQTXLH11Wx7WQGTmwEg9UPEA",
  "key2": "28ZEEaj1XzDnHwoUq3s4i4xX7PFTpvPsBoHgtMf5Sw484swyGarxf4SqUhc3HdaRgsiiHqZiwYCnrVtcooG9sYe1",
  "key3": "5U55VwQgGYauTLzPzMDSBbSxmFQdCssmCXw25Y7yoU4ihXWW59f1GkAPdgFYb9Sp8ZBPxYdLXcGDXYgk3yR8jwMt",
  "key4": "3zdiKa45Y9iS783uZUHyUXovVc6kmWqhEX4qKa1S4nYHpVUhrTVGfGJJ1TxZSyCctxCeuSgTaLTBBeY8t9eHkTGg",
  "key5": "2ABpjHp2DRfimuMcfjD4aaoew2woUJQeynyHWXesTsAMWrsydoBxGemKWwAJyQn2WFGpHKPLivLPqTLomWV2hnuH",
  "key6": "3nDLzkAFsNBTaBULZZQCEhk1czuZF5YzG3iN47PDfpqyFL7AhMobaukL4mLPm7KFNrrgsa7gG6bcbxW7FzfPE45j",
  "key7": "2ceUdCYGQHAypnnfMnJgSP6exMKt9aiys5baYVv9L1BggR92ejgA8eoozsfuEETp2y6rZeZ8WAjXtD7negaJyHYt",
  "key8": "25o8EFkfbmcf56VuqZCWwzC8f8qkinjmnKwoxGnT2tF2Mdd7nPGH1qDjPJHaV7adyZY57hHSgHohU9xJYtCJfUQn",
  "key9": "3bzvcx19Prv86LT1qBns71WfPrLwiqDPPTkdeFu8WP3hsF5SbhLuwEjSjD9YrZZwFythKHTcNP1FYmQz9dkw1UTH",
  "key10": "ZKwQoDbWwmZnosTu6pmtwwPa7GKLwdK5r5B3YHMobR72x48xmKcuY6CT7VfTD1WfS1cW5bEjPqzaLu49BAYJr5y",
  "key11": "43SR7sDPc3kFavszMNrd73JAdtNJV9XFNKXkRYhnBVcDZCezF8jXnJD7Sa42tRv4gJrmgP8XXrQsLRccCKqij7z",
  "key12": "2uxkDcK5EK6RDtRDHqYKfWqJBXx5zedKB83pPdqh17khVx2tyyDJiTCsQ6AmFxhgu7akJPj58BPpC5kT8cVbJb4N",
  "key13": "2fRR5encnfP3XdXE7UiDUvDWRM7GvcbBWNZcEurM7T4ttShCe6Pkau9ffPn5fGiVWZ2gzoWHBmBWLvD2a1xsYefH",
  "key14": "3GQHD3Zk9RbhqxJL6Xey9gKoAaDNL3XBptePM6fN1emTKJpBtnrVoN6xm2FV5yKnvZvpvQeTaWHw5Kts7sdNRcF5",
  "key15": "4E46k9XtpFTN6KT2Yj6fjyuXEjNbg5c6yvp8tJvbfV3qtsRL5JWgLVeKBqD83VyDhW4ztUP15qEEwRgxJoXc4odS",
  "key16": "43sTY6LyyRMD4228z85Ak9fSBH3mzHXYSdAFdDEvMKcssBWhXHHA1iE6n7vvbRL3z3kbKamzuLpmYU2cm3GE35fP",
  "key17": "4eENDpouaAah23wJfxMip61gXwo6DyKZe6r3sgh2jQLBSUWKkfwuQwnF19BegAUHp2LdGk9Lq16sHFhbha7xALuq",
  "key18": "3eZ3CqfmHMec7oCfZRZNDYLxGN8rJxYoBCsFGSQPBm82gofvU1PnWVJZ6UcFoT2DsLd3MVzbqWNTGrHVG9Av31V9",
  "key19": "5iYBsBGuf9AQq43ScCno5CdujbqxUGa2aeULdrUbbTaBrTP8Nk9ES7NgFpVY5iHqPSfdr91B6UP6yon9SzLkC2wA",
  "key20": "ZvKZEMEfJ2yVrH6RcgZZH1fRJb8HXNumsHJSZBEiiaDqH6tteybFAxiEwSvxCgUS1Gue8nmKJdoueAbW3jXU9T3",
  "key21": "bwkXPkP91D8Esnn9oWmcEf6176YGhLzumEVn9ZTy1cA83kzR7oWWm2Uu4ZonseCyprEdKsAzPhyoGd1r72C1M5P",
  "key22": "5dgdA7AT5sXcPpEP8eWXfYVrrrCEz6Ty87XBaKAVWfFF9uaxyGbzMCuXkJ3SUfNo8Dpu7d1dP2pZARhH2KLc1Zfr",
  "key23": "4zPgqv2JrA2h5LB1LtQK13YBNnge6dUWdwcrUapAm1r1tNJqzHNXr4Qd6SFFqRbYGRt6eWNGCyYspJ91TN8tumPJ",
  "key24": "3yMEMy1M7mXX6SbZNfV4YsrdHQpVpdcyi8HyH4WFP9wWWSFvrYYbwNhbPYnbygeYbi52E8kEoctMfrmD3s9U8Z64",
  "key25": "nshixhqB3aB7ZhCof2NweGbppma2zQY1hpM6HoTW56opMVuzGB7y6yk1tVLRBHriMagFChv1V9SiXTPdrAaiVpG",
  "key26": "52wpysjQqsAtmikx8EhAEyyjCHWQYJwUwriPd6ycRC5xKz7kmHAisKMoQUHNFJRfVfv8BqV1Uhm6HcMCYX1jj28K",
  "key27": "3cpGzL4yvPfv5Boww9r7fPBxYCsL4WRmdQUAeLmBecKx7JnhAJKJ4H6hsZrMe2noCQxFFQXM1ivDoSZvFthEETTW",
  "key28": "duh9opHb2V6qrjFqFkhSVV3mPSwBsCAjMLgSDJGxSUx3FAFQkmGyJSP1RTYVy66pRWZCewEg463hZbyFYjJ359X",
  "key29": "4Benb9TnXaNGEwbYfY8b5FMa7zoCPTSZ3vfxyww9Z2yQUE5b5fA3hxdLQVNjkR6G11mJgZL8oVVmRwmZ5iAqLDwu",
  "key30": "3TzkyLUha5Z9hCfcezYXfaBE7oVXAJ5xMMUqrh41GCMBYKFz7138BisGPvXygzACtMRDaDXrsmttksgnuuDB7XTf",
  "key31": "24eYcwpm1fy2EQurk55vyf7TmWbsAi6cWHaysP1MNzMU541Sr5qU32KeJXbWjqruygurkTcTnsCC93wNJYDhY6ZG",
  "key32": "4S8HU9vp4V6hazjhhDvw6trc5C845wDE9yghdLzSUogqHhDhzEstiiaNmbEPgK8fPFJpeheHUTCSDhG3qWg7DnLo"
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

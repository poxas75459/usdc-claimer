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
    "48k9Cm6EbxjnVgwKPyGJwMGWxw2FHfcMxircLHEJpsdjzzUF1kHKsWsjQ185MWG6XhTmvTW2f9WpCh25P6FF2Hp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ttcoquKyvUQfs3x3GH8cEyarEABqocixZWNF5twfSaR8a6A5NonFyYhXMMpwhtsxi1g33yVvUE97Zzymk9RsKLN",
  "key1": "391RKGqXcpCS4CdY78oNMVHZfjTun4aCdx3NJhZ8PLcjo3kEjAs7je4BPzZs9LYuwjkqkVtBfugM7oLDdy2oajgf",
  "key2": "4vKCyCGThCpiiLEeKTko3xKgYpDZHQo1PpvcQ6hqoDpcWj3LaMp3FypYP7V54hFyb1cxhZ6bEVuwu2deboq6N5oU",
  "key3": "3m4dmA1Lgvwy2VhV4Hnbk29w4LF2EysydjTakUGAHqbf6eFJyBknKUuroHNy3B3tBNbG1eMMowS4yk9EVD93tz3C",
  "key4": "4kSQ7XTavr1jpnd51X4cQUKjHZrncbdR273ERPBYjLusEAytRrLPGiBSdLPRcjicNiaTXc7RqbKKGYD1gKKrjhXw",
  "key5": "4XxCBSUDT1FkbCcAcKWbMh3adHTuEHC5G4he3MWSBBWVxjZc5GKsHgNnjXuW3y9afRDhZsUJLMbM68ZnFFv99Kjs",
  "key6": "3KyCYxTumvx7NQWjeMmApnehDiXvaDt1dsuCBD5Rt95bPS5qg3TLoLwwnunjbD3GGUWpz6RPdYZhD6JukQbaByCA",
  "key7": "4z4KDf1Cj5w7rGScxhvqqt8T6jeZqShwQfFur5ZL1QrcpJRWSsx6ArgemB7gb7ZoYf6auB5KEqT5NXCJUp1tm2ND",
  "key8": "44EWrYkTnVTvmnBR7xcofZyZJieMrbEEZdHbRgVrfyJHUQVHMCFAf6GZVuVrd8QDetW7DsQC7ArwwydC5z8p1kKd",
  "key9": "3U1meV6THrEucLHokpaWaqeuYHHQsAzHnrtcLS1XWDDGybbrvHxrCcUw7U52fMEok873ySDv9YJp3nt7QCPZuwbD",
  "key10": "3EXYUZJsW9oXqFsx3VsjxWwhcNeutKi3q79WHAGwhStWnu6wD4UEv68RzioGGeKcJp9QXmk7KMWfDcsxezymyNoi",
  "key11": "4FWyWcdiupTq2Xj3QB5yBTJwPj9G5sv66nntb4q1cotzvtemqnd54QFwtYEgkgHhACdCbejgkfhRymXrdn6bnjpt",
  "key12": "2HJD7BwLvkHvTNoE4SuJRFsnRQrcXDWqQRG424W9tQB1tZvwdAaQD7Fy1nyJxGZvzwqFXZjYeKRE8414BUF6Si6R",
  "key13": "5jAqEF9maugLscnpjSJoRquW9yrfL4G2PadTnE1FzRLFwyK1C4HUtLT6ZCmvBK3cuPmSEtWnLejmtEQoWk7p2fLa",
  "key14": "3VJTBzBjcFVTZwuYncmCMWjD3q9RVYp3KquSvo4zReSzKTiSB8rWtQXVN3ZurAwEgmRmqY81ga4PJocmW6BbRnL3",
  "key15": "4kGRgqE7Depy8Q8nGqYZAAGaZm4AJYAXdswujbh5HN4NzFoaeyBKFsUB4Z7V83veeWhfH2o39HXtg8abBE9iCx79",
  "key16": "5iPsm9cbuWtfeSLdkhppzzJUYdCTgSgXFTuC7XrzrC5x7ZMNphfUM1uFKkPGwhD8oLnkCodfw3koXtbm61vdEE8s",
  "key17": "5Jiyrv5kuTTgBfFFYuXRRqYETmhWVJxKLECcimCsqGSmguQFuCDCUn53JawKc5Puu2aonRrv3xvsiEid8esUyXDB",
  "key18": "2Yxckhh5MkH1M1nQiYVA659Pw5wyzcoaAcabX5DNFhDYEWRHxUw9bWhVce8sh3b842eQ2sBRGVLxrCSxHwVVsfRa",
  "key19": "jAxw8XawTG5583MQGV2q9iZmVV3Az2kJR2VqpGxTkBhAZtk2JBCW5wGiWtherbPQGgpWqip491MRrDkqpnPUujn",
  "key20": "4oqtoPXKHrUnTy9fY6DNJZEQV46BJxtL6RKxvNQZgMq8SayiKNH67ATSop7UtvZTULychsbPsmvkQKcSLj8nzf4C",
  "key21": "3SRUTWnVx2xH4D6YZGbtwSXwZBW8hNe1rEiv6F8S5vFH7VX6Lh2XHtFPiohYtNdLwQczBpnieqmDVrRYTAKMQnaY",
  "key22": "ToM2qsCqiFbpJHkqdCmLq5N6xcqR5BQVCiXtJz1XNyTPmeh2ejRD3zVey6be17K6p7hhrXshyg8JpoY7KCmYN7C",
  "key23": "2HLx3oB8gFSdNGFLaaHPgV6uFSsERAtNEyttwX4bBDQhPtjAVVYsS4gSSwVDh4jrKvaVwDUu9CXzXmHKK14iWVxJ",
  "key24": "4bZzVHg49XDKqfo5Jpz1RghdZ4b1GHqvMBQMcoBWTvRA6KZ8NyeGmzEWvsHqRzdckPEtzcrnR8z3hGtJepa7poba"
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

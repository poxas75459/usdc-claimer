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
    "4x8L4s2aJ9sg5LwMUrdpjDTqV4598Zi1SmF74jsNGTKBczo7qKGwnUY1JEvS7kEgKXvKnYbUF4g9fyvzdTR9iyti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PU4qefKcZcU59afvv95eyqTQVhsYwRYiXPcJAM4nnnPDdSzeQrTG3PjpcTjUJ3Nv3PzAh9tRmNs9wco969cMNxq",
  "key1": "3af1SRy4q41WSWBP8ycZCHRFWSxpCJsrWjuTxpsXximVyTF5kKnvoUx61H8Nf2uBejycqSyjr6XYdST3gZ6jSbNc",
  "key2": "4gYUyqfdcwMRWi159hMZ7YHzuMG9JTiLysKvXEAvsCkGRgCoiwVbFMtdxGGeLq2pg4Ups7r4R1Jf9KrYbHH9SFcW",
  "key3": "56NsQ5fFjs5WpkGFeZMh5Wv5pMsozYzrR8gm2PdpV29tJekUWf2xsuBHLdFLkWxCuTtkuuid6kPRHHaFMb9ssNk8",
  "key4": "AyHBy3ynSPijRgVb5G3WB1D6Pv6qHpsE2TPcc8MQNZbKyRbym5sZP1HnXiqfSCfNEdKP3Z9kBqkYYvezedjtHkW",
  "key5": "4RDWJdU7Kvprmuf6YR5M414eQ8BMHgPnGLVgytNJZaNpzohrkERoky8ErcCUsJicxLeVKo1tzHFwFRPMvcpKHMfK",
  "key6": "5R1VQJrWaRhZ4xqyi3752oxAbwutKm7iFizPuChgpRFYKczaxhB2LTVopLZAhsNmKYkJmeao4dQ7Y96wKiNJVsgB",
  "key7": "2v2P4qVqziJ3XoCRsnNiW4RpL5E5avFrXwpZYJRhWhG7bmQkKtjuv4XN2H5YkrhJrwvzbGeVPRtD1y2o7Nr8LN9F",
  "key8": "3X5XqLFT5SJaKRbkQhNdWopEXKmxEJSdFKQggkryDG49yPmaWT6WUeHKcsZ1BrKtYi8xVXLGcdFKETvYt55RnAhS",
  "key9": "413dQNAhks3a9qrUoDqPocx7Qd5w9SBNcR3sqejKmnjomuJWSpuaeV6j3YA5DXzTjqayCp6QqSyRXyDQjueX4Uig",
  "key10": "35pU6UsviJjNo3FYQaeswrrdSJSfaRz28YapPR3P2m5rBcWhsZ86hMHVfgkXxfJzbgs9vPFo8bzYeRhypVhoEZi2",
  "key11": "4tSGArUUN7EYU4Fc9EiG5XGjPxgfjvez1rvHxqDxxX1VjerZ24FdzBHC1nhLTWfXgNvZ2diT6VodNC7XvxDy4c3X",
  "key12": "2dshhwY7YQCpRMAhhkvwXRSnN1k9Ntjkqhj74AYd6Go8gYKPBRdF6vyCoHk4R33GpvnTNdSbd85CBRZHAj558wLv",
  "key13": "613gmajMdcgNRskEDh6FKS7r1ir6MshGrA2UtPyKBRMd2Sg5WzMEN9k5L7jebf73mGXktUGcqQZPxuHuUvCVQod8",
  "key14": "4DbN7SzLujg1ypGLCenMu2SAXF85tyT9xdJC5T9PMfZn9C2WbJiXqcRjbDbvwZTkQ3TicZT7KRxPSJH8LFgeF4Ky",
  "key15": "4cADbwSUJ7Q8wtcEjhDo6UpfRCWeWBe5cyW5h1j7U8aQzS1d4FBeoNRMLy8EprhqUap9jJWroR7DnosBpSojk3BE",
  "key16": "4kiZJKERtnsiPMazRAAHukUkGn1g832cM5B1SHhM9CR3iixozsuzRfn4qFdxA2ML124C8TjLqvzDGTh43wGU1dna",
  "key17": "2yExJz2GnERjvVmeUUXVnPN7hd3JU8ML3wVxp84MRCLGGa7emFU1xRgDYiPrCxfdxe4eJKAAgi9wbzZC89soMP6u",
  "key18": "RPZ3BgnzvnSEAfinUN6LYrfDoWJr4Nu1WHbHnSvL2zvW5eN1AxfXFPn5iYQRrc9pyoRJxjcKhbqrZDXNZRbM1YY",
  "key19": "2R5Ar184yAqXrGrfytiRoKgXwd5avWdiTMMvp3y4aEbtErkPdRWqMqzmzHZiP16GbfJ2gaZG7q6sYsm2FNfKcuET",
  "key20": "5ik3kQ5eY58oexy6a5L7nmLHp5FdGiA3SH39rVHxE77UH1S5qMmBU71wRQjar2CFCBWEhsnsb9xzvK65LT5WvUwf",
  "key21": "5vvraGrJdHi1zMUW37PKGqwSzwXp9brsCLoLJmavBYXb61MVXh7wX21MwAqbam2Be4sCm6CCbM878KXtFqWo6hAw",
  "key22": "h75z2b8CbXekBPkgpe92YZMeFDAqoEayoMUkkcgRRBLEoCg8dV4hFRXZafpR1y2zf5zPf2wEnVa5Vaa2St3qMiX",
  "key23": "3U86UbQWz5qXyCNEdmwC4Y2bDxDtAo8Nnf5b8Meet9bgPB7z5pMTYv6T7USzTuyHsdbmrXm4etquuTtMQez7EPJr",
  "key24": "38XZEWTZ4ND5aemF5qGvGsqVdpa7PQ2uzG24xDmnqEkrsnbFt61iqsdPvykQK5g3UC9AqCFhC3gyAY4VFpbTnEq7",
  "key25": "5L2fmgCv4bdDJWZiAWkzuGZQqPwGkWSbVayTma3qmnYGkLPrA1GsyfVrAFgtAyubNiZuuu8ErJUieKj513u6bry1",
  "key26": "5uYQbTNHAc6mvGyoCNntYMEJhkikF3iwJ68WwX5S49JwCYraWiFzkLR3RRQbwWY929AnS1azgMxq47xdQmYc6KB3",
  "key27": "5M1yhc9GhyVm7JqeGxbGis4uwLjs1bD1A7krE83NbFZnxVbiKLDafV1fDEhVoaJBhTKYgZyGqTRVXA37DaQKUKzE",
  "key28": "3KDeX73UscdETCFAJvZG1C9FLHyy9GkU4PjxbTRe5sxejT8T1g1iH6CP9H5U98NxCDsPYQHSbLwMjv65uA6s4gDu",
  "key29": "27ZcXpR8tCDJxTBcHGP2irsunC4wuZv5WRqYfWcuVJU7mCuuxL6hN9DLgWzcKHTAa8L6w6TpzB6wsQ3pejudfAPw",
  "key30": "2TK9BQuheXNEhzU9QR6UJfULdK42tfUFumGrhtBwiVQAQwRMZz1zz2gPY1vVsi6dTKgd5absdmwwKFQUjTdoS9a3",
  "key31": "2j6ywpPaBEr95R8qqsJcKQFLXMSJdu5ypEPtBk4DfuXYtaz7A2SurecLwxfq1xvXEWvjTHbtLoPX9yqh6EkDZYpL",
  "key32": "2qXUzg8vgQvyFdWcMhvKRoN1bDmXTJZeRwr2NxDjfSZYPRFGB32K3NqzsZVyFPpPWQj91BY1dt2EQ7TxE9Aq2dCt"
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

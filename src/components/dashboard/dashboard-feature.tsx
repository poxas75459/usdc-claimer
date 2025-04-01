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
    "4idaywvysYxRfKbw2b3iKqXKj5B2PuxrGF9xGwjexWdjBBGeHZmmB3yzXPSRA16U8SUkXe2g1XwMkpGdZiMgSy1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZhbgYHDftumtuMb7mvT5bza5os2KQDAudGf2XgtMZ2paYSEcJUofqijsAZNGLTtZAszB6agcAzgjygoBq65Tkk",
  "key1": "VtXiYrc4Km2tbv5PKB8DeLLxvFpQ4v8MvfVhnEZr9goDD2BV8J7CZhEj4dUdEoR6qs176CUJug1vCemL2yEX4pV",
  "key2": "35gyhM7d4k1AM6WYdfsphSGp3v9u23ei9s3Zd3fQyZjKzgfckVwVU5Hv5MR9xUuUEn1zs6RhZig6Ptzcp75YGodG",
  "key3": "66Xoq7hE3Lx7rX3iLCVuRSKXWwHSvj4LuPYaufucLWHKvxmtC1w6PAfgFBm5n6GBCUvuBpuLqzTdhjZv78Pi6eqm",
  "key4": "3ss2wg197bnkCsTqYRbrPBtSgTd8ds4ezCmaQA83wAUp1UTuaBZmXrtbcfZSaokW35jW5SCpJyHv3qWuARZ46bLo",
  "key5": "34RcSNYKav5BXE1Rs5q4X7a5kWnFFze8Z3sPt1iriwSXKaG8gNmfCSnBq2odQ1iN9H1yfwnVeXPokLFWQ1G97svg",
  "key6": "vbwModa9WTt7SRLuhyHS3pFXAFSYQozZDPm9CbSSc2j8FBouN1ykQAiz76QgeMyK6CmgokAZ35r5gMaoooa7W8r",
  "key7": "3rfbdvW2cxY8zNAxZXVsvaEsR682KtsK2fZM5QWcQ7GGSc16iZyyLDvtKwPR4RmSzPLT2JdqZ1JsQytfRJjLVuSX",
  "key8": "4XqsWKy6QqSGNkt5UjEyvKJ1gdVnm9rGQgRpYN5rbhs7thaESjRBufPBVzG9PqX7y7sk3DWf7DkiwpGb4bmxwHWG",
  "key9": "2NsCjHPLyNEVDTbTVtNZQM7kHM3KBnetB4M6t9YZ8zJJWTyrpkez9ujxsuseGoFZDoahX2jRtCC1ithrgJHovqqK",
  "key10": "2pApLzshBQo6kcT9Ho6QxY548BFNrmtTdKqUSk5mM2gQAPtchnnmSpzqQj2WKEW9koAUSM66zYD6JiRdEBER3E4c",
  "key11": "55oac3RukNKymAeb3DaDfbPcEBkX8gAH6GxEvzq3Panc8Aqq7JqfFMUG4qEZegLFRXpxJQ8r5mGyh8fSrUJq6htU",
  "key12": "MT537Ck2hd2DRyYZM3EZSQUuGTgrNRLBivbGKYd76nZicdbgB9YNk5QCUeHEuzverSXGUzgsfXM88oJsjwkyGef",
  "key13": "3pF2sonMWmPeEL6vDX63fscm2fw87yzzbw7arM246G2t731UHeqydsjxzGXptUXhKKVhoBoSiwt6LQvMKdYQvMoJ",
  "key14": "5sZ9jmyRSwvx98YUMo3fEntc9RpSTH2LczQWsaLpFupeNjUo81iGceo3eTpM34Y6AX7K4g9TijbgbKXcANEnjEFz",
  "key15": "4Q35VDrPcwrKQ8Dmesgh4boYvehssUJWiuzUGbEqom4vJ2hvyfs1RZpw3yFgCSUBDzvgmrHrpZ5ZKcPEXRjuvijZ",
  "key16": "5Q2LHActv3B6NafDWa9LWxxwgbwacqJDWHqkdTWuiv3wbQSwdk56zeiQKcjTzA9C3QH3PKUhht4nxdm8USfr8bsk",
  "key17": "iCRNaJJbsZ7xmYanNCcDtdPFk58Yan6Y9MC3K5svZPKneWYXZePbivYLwLhVtvqnHbiYJ2yuBdjqK9nvd14HRbu",
  "key18": "34wZoWz2ggz7GNgmJeQtUdD3CxjHAntWWxTnr2xwFyvzPsdXUhDKxqTRMYigagHmaqHdLdsCxGQ46Hce4L8iRcf5",
  "key19": "2cAdZxKhGTpRD4JkZ4voi7DyBXpTv1yKUVDdUBi1n4KFRE3DxPP9HH9iE5BAW2JFsxrgtJfFnMJdC3GBBCmJdp7W",
  "key20": "P8HmRifZhDvMdvetq4U2FL8DeuM6g5ukjBcNKXGMahkXg4VH53hTNZRowL5fxdbzSiS8XReALkC6Vc3yLc7ojtS",
  "key21": "2aMq5PgEWtxccgbcuNZR9HctbajBqV4aHCzVrDBCLmv2ppej4EVtGV9szZDZFT6PKYpVEmRhGxXohjnGJMHd52VD",
  "key22": "yvqZBqTyYuXvTgH9JGwDVQsa6hmM6iq4ZxbgBfQocZsowKvs5TeqELLDdh92L4aAeXP2RxntN4HraFGmcAMLUfR",
  "key23": "3jMDjA9Tegvsa6G1xby4pcLFmtxDFfoSYFQN63zpeCbBughY4JnfUmgYTfiHdmRpqVV1CQRewFeJ8SA3ZWNM8uLA",
  "key24": "2PBsnDZ9wt8qJsRmSwahaHo5foQFBX6QFjA5TKYLns8fbuq6igwLp41ziZkfA1fC7Uh3orXzo7m4uuLVbk8BPwFD"
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

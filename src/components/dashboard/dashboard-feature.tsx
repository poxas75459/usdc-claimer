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
    "vAobkAsKeNePT9BuM5uBvWq92iHCDt1utb2Ufpz9EiMFTkNnnWx3S5eGFHKBPHDhVbYpKAinG3Tse5nHJWmH6qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJgmxxkoSp6doQU2K3UjwCJykykfcLsLRWtne8ZejZtr5ejCctbqe3w6yR6oPhNz9L6jwRvvsVZCbJkiXfPdGLr",
  "key1": "uLnWpXQqmwbCwgLXWMTiDPJVeCvf1RnD78cGmaD8hxQX5exCUPTkbjwhKEyPrk9sv6DHtS7rEigojfqpZneJYyr",
  "key2": "fzjsdiskE4FyZYW9VvQbdcMhEZxay2yUFn3A1Hn6MDyjJbhnwFzCTg5XWVaUVmuYczqyM4RigURiMnD8k7MESgy",
  "key3": "pbKng2Qmk7eSpmKJRi1AdMQAZ3AGZRCd1T2v2Yuyjhut7E2khHSTMpqmo1aHnTYBVTa5Nq4LcyMKjHMizmFnPmR",
  "key4": "5RXHUfCvu7gG7hopJXvKmti1zu2cfnhMzzaHVyokAsJF4YFvWUU8K3zdpr4Urvicbb3E3YQFasHQMQhbrBfPabJE",
  "key5": "5dU3WbFYTmUH1yz5ZNWJXAJUYXEXLwUYJ82DVhXuhrKbAGicNzQUuK7h2WWazjLyR2Q21QSMoYyzdNFh8uh9R7wZ",
  "key6": "9i55ixrkp8LYSZe6KMzVARQA1PT5jC7ufBKMPAgnun6PuTojoaWdDnARs7vfpbobTUTdSvaNn9xGSj7VfpaTHvY",
  "key7": "36MAM5yGW39XF7RU7WKTjD6qQdWdZA6ZTceRCnuYQdVaMjUUYWfF6xcqvtyqFCLyETHNsiGePZGArYVXtdGBWbnj",
  "key8": "4f4SoHJdn2E5FhyKA7TS3JswTUFN1dwJhyN18KAtnULZgkVo1NxvYyDuhS2mGRgKPxX1FQcZq2B84Dp7DH4NGrdK",
  "key9": "NcPQtBVbqx2bcBXTv9dWRBQZ53NzAGKMfMBizXBdH5T8gNuScXP7mhTmNLvXhY2TCxpEcXrhJXAzyRnrrfaVggn",
  "key10": "Pg5n16N9WhJcs4FrFoFeKLhPcpbhBzWhqa6bn3AJUNUhkLiaGo6T2z9JLduN5xKbu8T4DJ9zQNzNbi5MvvLP22T",
  "key11": "3TLdfHDm5Mie4hbhW6yX5sxgHKUuMVT65FCeQWG8vCb8A8UjDcncC8HgVo27dTfNi7czad2KvbWGgoU2xCcVtPHD",
  "key12": "3V5a6WYgz6xFb6wmH1M3ttTeJSSFU8Ds5xY1XadetaE571ogMsCesiZZySMAc65XszPfV27rTphrCKBeeGtrfmWc",
  "key13": "4bqP8go2PNbGXum4XXPKvg5t6wv7bpWeqsUUupohZNYVd49MBPDq6Yii3ptkxtqrHGRixrMdrGnVQ9E7dWBufv3C",
  "key14": "3KK6d3BSxxwtzKsafuiHCWCZcavnTjhsekSwPf6DyvRLV4TkfUQbaq67mnRbNLeceKmQzX6Y8W1VM6C2wjTDRXFU",
  "key15": "87RLC6eZymaS3sjqM941vckKABjSRDmy3DoCTPd9xZXC25pYQCsW1UDAsDAm65qSXpZbU68gDYtwHkVA3RhSdyV",
  "key16": "48e6fmPxJTsh4ZZLEpqquvfoAcDYoDESG25Szmh3jKfw9isZUp4Tfm4tZw1aSyfkhuvFSEgZD1VJSKwb66gJ6hik",
  "key17": "257qGgxbe7aYCocB1cFuBF784CF3Xyc3Nq1g28Syi4MUVWTrmVnCZ17DEiHBDNkmKbXxWu8P8jKoGqVz1STqFDSz",
  "key18": "KSaYTR3ShMi4XS5eWtkCCzYGcgv2hchPBXisboRZnug7CvtET5wCuuYSKqR4LvYJhHpS6Lkr1qw3UKbQgrhrg95",
  "key19": "2MW8c3Ua4oUymR1tiUfV4DagtFyFs7dL1DDqNN8NjBDvkHQxVheUsjhPG6NMPbfmhTdNMQiYFfwF1sAD1NcpYJpn",
  "key20": "2DetJUEnbNPsNT2mSCH9ZbkwdvmTS124SwrmvoGWMrKpEcvDAuTZLy9nEs4ECYvY7EgCNDsJsfLmHjTGowHhjrYM",
  "key21": "3PBFJ3HqZuhEWxyJaYTEFSAYQtsqCycQd6K25MTQWb9vYJjDyK7H2trsvCqWVh5pEzqY92STURgv4AH5B3BruGo2",
  "key22": "QCQRU3HTCFGmnaW9Q1CAAUJa1onzEJiMGpTMzE181whsy6zKMdHP6ozqHL3bqUwTurDCNuhvvHizmM7dKhjUK49",
  "key23": "65AZHyEcTpFzw2BwR3DUx8zQ6Nxvw3QJvX6DUhXcYC7Gzckyp5kVUAwdNkiM4kcmaQknuTujAkfvZNcR9J9k3cx7",
  "key24": "4ngburCXKFeRMjZGzhankvJbomdxqVRQu6AsFokh3NXf3nCTTMxA4seaNA1HME9KZwae1e7TiozDMSk1VSxnVWgh"
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

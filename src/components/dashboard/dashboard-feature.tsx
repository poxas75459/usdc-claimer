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
    "3e41a7jbzLLDaUrDsigjSXGa6mMEaqppV96JW7i6PGR5Pp7Wz6AvSKcvvZ7LiXxbbWuKtXuZbphKMT9KjgNi1Lx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KeRman8NrcZgPAMBJBq4r9Bb9giLdhqkvRa9cg9ZWcbYPuemNSjNq8ScaQVwvFZbSfUqTkJFdr7uoDvDRdSN3GG",
  "key1": "4BXzHME9sga9U5AekCQn4T29owenH1Ane7JkT8tmqiQ4J4KXPVKdBk86BGKGyWVKsyNFg5susNa9smPLf8nb4mia",
  "key2": "5gFogBSSJjZCFQ56vBe8F4DuCNAA9gjTApttfzJxyp4emrFs6xbSjCaxJ5mPMmBr7tDRMT7ne2MtEErWApzs8oGj",
  "key3": "4XH7KYvD7nQuovwFKkRCUXfziqvCw729XJ1EQMtfBLyTrNMQtuhwUJzxfhUY5gpyX3Qha7CqBSE9cGCk1mh3eReu",
  "key4": "2NB6C5e5H5xHK4r9NCz7jkoxMsFUGk4YoqFiiBSXGt53NAJugZ2NP1MJJqrAino2ECATZUnKo1Nh3UWRwv6bBcyc",
  "key5": "3qJiJsvKQ8dM9DNgxyEEPyocdvkDNKzCTTqmZsNLz1SNyKaCKjQHiTkMgBp9zx8d6rjJnMDMMuWEeWBmK3EJaPYL",
  "key6": "3tfybRCUEwarXphvFkZ1JCHR5ipUYBiHTNCtEZnoy2TLQM6PcKcXeEuFHgMkTZJUuUaC5dqHwgzRsHNf1owoiNEa",
  "key7": "43RnXkH1dddeBp1hJfkD6ZBrQAApe3CbzHQLjqZdrmAz7ZUbLJsN5XjxLrfkV7HJVauS2Xh6ecpVbsHhVtyCASyT",
  "key8": "3LF9CB66uL7gYXnxa1w4zZ8qiDze5MQzLgAJJHTxM1FmgAyNh7cpCJ5jhYS2DrBQF4ibcmMqhHc1zVLQi3q66jBs",
  "key9": "24CnCtFXCsrQS8eYSvVzS8NKPv3bZ8kHNBkVXB9MFQw1TWvyqiMZ55tZhdm949M9j1yjDpxBkV2V8RUzm6qAbgT7",
  "key10": "3BT55baC4yAazmbndLbDCAoeH3NS8UCp6fbUNaQssRhnXQVJL5tLXCktTFfX4G7JBAU3wc3tE1V2gJqMGZy1Ks4i",
  "key11": "4xSVkmU4LfYMKGyUsHRzctGtz9XKpBJ5NwUNNbHz3ZqTt3ViZcGLtr9MZhneqX4L126vW34ziPSCanrFhS2f5Xe8",
  "key12": "2t7xcGXxXgR422uxHJozMhPr7qZKVAehUdew8dtaaWWwuL6w3mMV3U1xGDN2StpAcCC1p1dm61zkJVA95MbHVd6q",
  "key13": "3HbCbvSzs47zNtMBskubyyHv2aMdxBmpiokRi7APDMxCd4BsAp8nsuLHHsux4SHiW4LSA5GtabYrfj37LNJJ4kVa",
  "key14": "568wWtr8As5tt15mCgfATzdS7iG6Rb2WowYhv1ojVhnMVVcLtnFnqWJPbQAscSi3gfEmWtdd4uPn42jYgSqN5kva",
  "key15": "4VYcdNK6qpPxjQFh7L6ruSU3gqFw8nVLeivqbKsFzc7RbQzXHAue3xyEcH7yo6j4B2AF9Sbq2TKGUS8oCjb4z8yF",
  "key16": "2N97AXtMMcNJF9TAn99ecCmEC9kTxS6ybYHByXSEik3cBZcGJyQiK2ganSoo5iFVobKkTgsRNQ9rPxdWK1vXuVeK",
  "key17": "2keL9wu4aoBZhxfQUAhVqbF3QmQYjwyMZNjE1UL72G38YvaDixYvGb1q1ZgoHqsUauLHaYjBZtrZcyaYGEVwF629",
  "key18": "2qe2uYtJuRargudu8UF3RRocWbWuZ6iaTXkDnm631MisSKXYEFLkwv8GJa4XzNw2euKwJyAFELQeDMq319eKqiUN",
  "key19": "4HnvhjL7Pjyw4FJUGYSfg2edb1kdxVvowTRpN93eLy8i7S9HQykAn9dumbVoJShzF2WvzqeKAH5gfJN6MfhY8kUH",
  "key20": "2dYy1Xvdiy92pdFkEzGmvT1aEoHB6RZzrEsGcWRUexu79bggFeJ7jsvRKXJb7aijh6SBajBJSuphr8nwJoTEMRy8",
  "key21": "37JR69BmDuQwNc3dE5BsekssJ6kySSviWosXKPeXQRPgGz9PEmoV8chRzrkgafeyTQGs2oJKZP9UkjVyRPXrLJVq",
  "key22": "3JAxNLor3NUdGhHXtZsCpswd4Uog9Atc5k7R2J2XzoiiVPGEX3ef32hZLQbvfNinT2gU87wLiiD2VM3gLFbr5Sok",
  "key23": "5XLr1p8q6qLiTpNQ9BEND4LXHHncEgbmcrGYveHQ55Q3siwiQpitKsAKXMPGXJxpiXWKKUzPLYwwSk66Jw1MkJqv",
  "key24": "25kAjKMkX1S17KV27iYjwNzACWHqEdEkJvWD37Kh4UH7hEdhwYJWB7yB54aTpbDRmG1W5yr8gNFGfmWFN3NJ3WEe",
  "key25": "4MmksCYpHAREwP5mVkAouUomiYJYx7bVNak4mVn9aZZ9KtuDas45x2L63WkBFnvGDft12ZKZCMvX9d3sV8QP4FX4"
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

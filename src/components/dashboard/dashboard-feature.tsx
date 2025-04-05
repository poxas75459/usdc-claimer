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
    "35CifSeyCCXsL92mMVNL9LeB7P53wFRsnuuo5KsdsXnM6tm1cmdgPLoWBbuuicqY1Z1bsTQAPS2xdUXpVg4G2X5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iSegTdkeUJ1E6MjGp6caaZnXPq71TUAbmjJvdEq3Zvy5Famfudgje5c2xo77iKQdxmaK2t4nn2VQQcbgD9yU5HM",
  "key1": "4nhnFWwQ6kzLjKRkcA1i3LHMeWVAApnUVLwARGs1pabyfaHn7zuNnm4Mcb77uzRB18b6SwSxTxzXhoa6bwGFM6iV",
  "key2": "3nj6GmHvcAMkijLb85JWwWKWPbbUvkoNyHggaC5XrwnwXWpPeUM23MEtmm7KbS9LdRRqWd6KDWHiGVkxRH1t6kgR",
  "key3": "2ZJBHXzwyz34VrxRKk9sbfq1L6CRQaEcy7Xtdj7xXaL379DFjfcjiXAGyALUSrHFvnD95zijboxC93Hcz5sHzp9P",
  "key4": "3fagYenXekYsfTjM2M3Zhwztvz4ucpvEH616BkimeYA8VNFa92sYwF293D4w21Ee4zfZTTWC43XZZ9GLnwUtLZVb",
  "key5": "3ggnyYDVM4oAkTKX31qLNmHcJ1LRcRCdktiz2h4PvkAGxbxocXfMy9um98y4uFrfkABQdMhuZoNc6CiguLWYAAGh",
  "key6": "5fununUSPCeom2mdpMTkqB9aJE2aySa8vcbKdk1AEZcqcFtiyhqUyvPVnqpz2sFZ4QMb8uTtB5L7HcjrbkqEifMF",
  "key7": "aGH2XxqZyzfE5oQ6fMMJJ14VPk1CHr3b2rQxWDZR7Wbx2ri7w6jQSgS3eMyRL3BtD9rAg3CUCLq4AdPueayftzc",
  "key8": "3LVvZfaNUxitsuSQ7oXsWhDXiEhZgUXb9xsdeWwFDXF7GszTabzCxhVn9DLj3AM52MoVSgbGFgCb6L5dHJqPHeif",
  "key9": "5gVwpakNWZ3woFvDkcZdG2MRk7hNoBUUUVdDASk3cjE56BNBPiGrydWtHNBBXE7oKoChb5AUep7FmhaExdKpkWBi",
  "key10": "5CAZir8RXvPd6tmJ4eZmWJejqsc48iWV8nVWNfPpR2CG4uoSRWocZQfAg8xZ3JtMPs5RAxy57QZPMXYLSdWogREE",
  "key11": "u1CxpSByUMLHEnL5Bn6G2L7i4E8zD93Z7SxbtWeCSiZ6t2mFN9cZBoEzzYzUiteepqBdD63WRNBWzcGMgVKUEUY",
  "key12": "sZduDERGfo5H7khD9cSb9r7JwLNfuKYZqwTiipdAC3NWTHup71uhbHZAgjbXoGqUeennUTTEjxs7KfJKomtKB99",
  "key13": "3aoFR7DmhixzRxdtfQ7zDFpeK8xZnVho6JoqPHGEcGjgcuYAcuYaDD7HaGhbZk5Z15nDHHdU6t29fZ1NqNQJch55",
  "key14": "2Xk8rfJ4s9DSMY7ijFdbmh7Y7oNQBsBvFeTsBDJBm6a8FvZFmarquwmLkkLxnqQBcuNCB8umYckToWeBXoQpFESC",
  "key15": "wVGPVeNehU9pZkq4obHTvwctfyZaTqLecbh9nLfDPvPQjX2gP5UHLZPvucHtVfdBKAMscRWWcfqFNVQ2i14NFHE",
  "key16": "3R4JWV475s3MzhSfc5MwYAF1gHVXG64JCDv1EDu46RSyTwwXm9Ja3HZYpY7fjWETBqKhSsnVGHWVKer4GUxHgS12",
  "key17": "24sposRBLpohU7FSm8kb6DzDxLb5x5oyBsKxTd6dk7rWQsiqSbjCrz6SWnzwLLdXLiq8wPUKN3sfcZBPjWtCkk9w",
  "key18": "28gdP4SneNkv6g8LZ6JrQqR4rEgmZWfogsoXFsm1PCD5bT9U7MJ34myPQzxiyCgNxyXsgJ5GfMxjwMb1qU7S4myG",
  "key19": "2xfds6mCeZbjXeAEr6EzwoFqe1pqYtiHGDVvwkq6sfsVLvdZnLjW7kh5sUgHPQodqDaM9hRMwpTaAY6hhnKpqcKc",
  "key20": "5TWSLuzXa3dFQ9zTmMav14odoKMjv4bYg9DUHgzHsMsBb9vsGdFMrUGEdZAcDFPe9yX8G3xtWXcLzUAWWKWtdny6",
  "key21": "4t2zUbzgf6bfYWYaxTLmgBrbgv9EUwgJoDWDkDhJy4bK64J35erSReHNx5jHktUSWr2EwM6iVSHYLkaSTYkvhPUt",
  "key22": "269HFsodDe3rQeuGM2EWjtMxaF4zhTAfdWVLZ9WR3uLcMbFDDVWVtLJfTNvkFLXyyjCjnPemSfuzsK1Q5yU5SuwP",
  "key23": "2dxkKs662p8n13CE2jCz6TUwTREpCuj3BhehkftQet69xqfruqtry4pRayB5MAahEHoQALCuChZ8WMwavTRT1fHz",
  "key24": "4wFuqvCk1JgBpcfxTX3PdvMy558gSxvTV9HzhSXSMskN4WM71RVvmFjWSXxqnMSUK1z9CQY13SYVgVK5EGeoxZxq",
  "key25": "38xUqvDs12YFUBgTBcDvVKefz2yR91DU49khjUqTqyhKGJJxJQ17b3uD2h9dztTCnGJwGY4P68txuZjvxMWtPQBa",
  "key26": "5hda5rKi6PUjV17X8wJ2Aj8izAwvUhWvbZ5HxrC4t6EUemMGZHCjw4MWq53BL8Zud3eaJYE1JDpz9Z8Vzcf3PgxU"
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

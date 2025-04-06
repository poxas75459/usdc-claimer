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
    "5U3xDgaDoxzQdUzF9pJrXBqJxjG2nCHKBu9aUSCAVAw73mPd2Xji9CMEUChj9sTSvaM91g6UsxKw24PSxJug2r5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3RSSLoPcEu2hjKW7QgYHRK2fyE2yWZ3PoXaexmfJ6m2B9UCTCSajJG3Gce1wCdFAUGEyJNygdcgyPFSHDqNURS",
  "key1": "5wJ64WV748SaPmrx62QryyzcuurCdiAmmAeT8N42xcKJHmcaM8Nz8pjr9BphMc4xwqjs5fJzR4ppQohmzo6uQsp9",
  "key2": "35ty9vpzTGpHDBRr37rSTdCdZ4uJyGYtmvjAMbn2nEXEmM9HSiCQJrhJnKdK4wcfLFeURnQVpro5k8KDyXDwqGJ9",
  "key3": "5eB9niF6PwKMrJYPPg6eWYdi2e54qD3jS7WL7joJH4XFbGLEWpbnvcA1ATENjYBjcG7t3axYB9YrrYW3cB9BMtc4",
  "key4": "3EhwCuzr183SnS4GLv957sPBX2rH7vZcsnLD7SxAKFTmUuMnVFZF7KRhxgF2hGJp63PPNEUbTrTY8FeYfmVXDYZ3",
  "key5": "43gKKeWjpQk6nsZd9J3v3DdWQWsrp4JEdbGXGhmPXHaN2HxzN1wu4ghK6MHYetEQunasCbxW1RDpWtDsZ69uxsBm",
  "key6": "iH4NkikybFXyRBscva7116pmmGw1QG3ZrpTE3PtyguVQVXwNpfuJV1fgpu5X1eSGP1n5S2y9ZcesYad2XRGZrNN",
  "key7": "5WZuPBGG7x4NgM8sAd5wTp3SGpmznSP4SHhqhY8NWUy48eev4HGzonibhBEwjiEbEViKia6Us5qJVEYgcqSFCZ38",
  "key8": "3kx4bufDyBBZhDxQpEfBFfiCLYC5GLE7o4crtFo2LEhgK9Qmadf2ZAVzqWBDG294ALPa7VpuRo2bZHjFJWwCMGvQ",
  "key9": "3B21sX95WXLfSKLa9ATAgoXCW4WVthH32BJ8Z4bF9YrxJgf34giGbog5xqbwDwsTLC6PpL73MnZs3snKJkMCVnjz",
  "key10": "5C3fvXthBvjHk5ZnRUuhxzK9GHUZgZWfLDASY9sR9tA6ps2FQQtuYwSHzFWkvBvPsr9pqhe94kcKb36X2vCVbdNQ",
  "key11": "FkvUKjyavT7HnNxRjWLY3rhwgg3XiM1KHXspxHYfNoy2bCuNdga5cjLK1d5yFCjRZtwi3QuuEDnVUBQgwEaf8Da",
  "key12": "4tJrdt9FU8S7qTre926GuR3qUwFQbYE1BV3UHAZ8u561e337mXuMFdeo6mFGoFLdKQkKDmdPFSCwW6tDPTJaqFmm",
  "key13": "FJ4nvzq53cUqp3xSEtGHoZbjUvXkhHor9jLQkT5avis5gwXzrH5fCsieNg4eD65JR9jQ4eHCwzT6tRBZcFo8sQk",
  "key14": "2StVPZcjBSWeJ2WnLwGEVBhT866E4CAqybSTsAENZcdEGwr3mrCHuycK8XED6HF1cfPW37q27eobxK36f7caQRrE",
  "key15": "2hMKHB1SjkfuFcuWtt7kHbiJaUwThVDyvHJ8Ed7rmUg6Fe3y9nTeP4dQAUZYPiVKciX826opQNtnHrd4JPAk56ZE",
  "key16": "xrDWqtxGdgzBZQFUDpND9ZRWbgKvXgZABVXK3BvXyJ1NfossLqdgtVbS5vGAjhrgJY5izzXFwBDgEMAcUPMhoBR",
  "key17": "2AKGtUDNmkWwyp6acHYtarabgKsqWgDna5qeYiRkf3wzZ88jnq1RqWcCSq2ZU5Su6kgiMosfXTMYbEjpGbBt9cei",
  "key18": "5udZwRk1Kxc7QzxH9tjDeA3gGH35HWz4YqffBcyeSrMQF1EcXwJu5XXGRcNGKcjXkbpWcgWK17krAJpYxnvKjB3x",
  "key19": "53QH467tJJmyBVE2iwcfJRwEeYDV1k6wKqWFhoTWBr3Sbp5npvM3f3Qeum8AtQpp2upy5jMB3h6VhqbqqZgrETtn",
  "key20": "35Fsi1idY4e1hEEwnohWYMSd6w8AA4aM949jUDoq1wSc2ebaPo6tZkZN6h18PY3iLHkCj92vzVVwHPFedYucnhpg",
  "key21": "3LDpZJooMiZpjYwpMVWDRZUFRpHK78m3jbLZgTu97n1FugDVKKd8XxqH2M8NEX778FLhQVf3SRutLGjTnHUhBXMh",
  "key22": "3BuDs1uBq6r1EhikSDh9K6mTBKaTrqWMvwzkL47iFAVh3k23VJK9KsUQuZ9UKNGqwzSzJ6Edk8orKs5qUVZZ5gaZ",
  "key23": "7yxp11K5jX6X2DwrTHCpQp1odAmpJ8kD4iWDsFarxEwWaUQxkyZiPa4b2HNYqGSCAQYL163f6jkxgW1iq73UhDd",
  "key24": "7MBTvCJ5JAErV68Qi8cakYPrdXjTVxpePBySSgKrbLM2oKceGeY2AdGhc8oBEo1onjfpXU8Gq7FDdTCWanhWR1F",
  "key25": "GrL7SE7mv5Frmuz2ScPhYJZ7aF21kbyViEPaQmZcweHGPaaLzzDLEzF72DdFNrPCkyrhnZBbeRZ65LM2nhy5pGt",
  "key26": "296fssbWpbGPvtwnmDZ1Qp6hqo51ns5KREp5uJbP2gyqCzLxassAMmgL95mSUASJzw1hKMA7n9q9BZVAm17dek9w"
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

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
    "23wfQdcfHDnETfz78NqTkAcnYQ9mEqEKhhQiuwM7RGf6BhMsYqmS2pKSXXmSp2tQqXCkXbGNkngKy9H7xNjgZ2dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdNGSzm884R2w4hSanYY8QS7kdy1nEHwaCN8F3J9JqgLVpSf13eCzwxtQnv5s7rc5AzcHcuGUpLTN1T9VRXd2pw",
  "key1": "3m9z4igcPkhKbrDc3jQuzhyRrytMsaQzxZ9aa7czwydLeAu6cguGXY8xFqx4kSomU1V2P3eXtVo7zohiiALkLHWN",
  "key2": "1iKjd3EegHLhuyBxQ8nDGMvpBUkCQciNmSe82JPB1e61WeZbCzrhL884jdY8euinwcTB1CCAY13idcFkAJqBUhQ",
  "key3": "GpH2J1Dpoqq6rYViQZR7pJKdo1EJRWM7YuWVeWw7njfwDXmKFGM9ZzdLb7ZuHrFR1mvMLzEVB3vP1P2CZ6tiy6C",
  "key4": "jBmARRjAwMAAgWbvLXvuMiNEnqTqHAptxi4BAC71gbEgEQhogkP5yKT29gkyY4eXuTXPb1TCbjQTraYgZKLhUiT",
  "key5": "XdquTL26K8uj8TQ7cqE7ktZwRmA5NWmJZsZW6ypw7YmbtSHsBYUC6sB4egvquQUvsqFXQg8KqPpbdGRXVrMyWu1",
  "key6": "5g4yBha6jDx4UY9UR9fism1wzLyyH9wqSP6tpCUp8itKPt32oFYKGD4GTtSJL66GjPqYAGpZH1LgncchkkDzMUea",
  "key7": "4gt5EGKG6gNtyoCvrvneVQm7uvsUtrPGq4fZooy6A21Je7VVZyjYrfz52EYVBdQ2uSLog1XNcBowsRvmG6PDcyRw",
  "key8": "5buGW1Wh67EzXdKBvJmnR7w2cBoYnAnmYyanqVwqJi1ECJBYuc4dTjfeRn1XB2zv1ZMbqufzPBu24tCFmzmHqSFE",
  "key9": "GybdUnemadbqA5fx8pxkncxYg1Y186uFXsLorArjXgr81WjdK7pVqVoEUptEc6UJKeEJbKZjBjEz534kLYxYd1r",
  "key10": "24ur9zu7r3skp7iZUH6NJoV3YXhG6mFazmgxVW18jCoo3GZfsZ6EWD3VgQzfbEfZTZs2d4METYd92SFq9aJCtAJd",
  "key11": "3Xnb5VgQ9zPxQeYGf4JPdqCL7bSyPCnaaMeBo4zM6KfNdifXE1mXPhZJVQbpTcpt6zcwz823rdALMWQE699MedQk",
  "key12": "2VejxPebFqiuMdTcBLf9GNL7pmrUaqorLVnFG9Tw81rvgE4csLVT1LJzHtJFQ3u6rcz2xCz2EYPTtKd1WHtvhq79",
  "key13": "4w9uYfv2MFbkSJ6zFJrG6xKzAMjZV9Aib6TQWRGe4TjD2TraQu3KNcXnZ18b5Z9257yN7wbZvee4ZJthNqH2vQfc",
  "key14": "5D35p8bVMcfxuw9ShitkBVk7uB6wiCPzbyhifYJAc8wGFEYpYSpDD6r8UJ1cDJWz4XEjfRvyMXFtrTS6LWJjyi9q",
  "key15": "2VxHbuSvDwcZwopVjW6DTYutEU4jixwBHj1jgsYFFaM4rTZHeARwRzVLEuy9AwDjeJY5VphoDA8koZRBhnR9XqDM",
  "key16": "2NQG1PgNzZmPEMUQzo7UhyuSJKdXyEyK35BifGsbzn9VkCYgTVuVLmMAjJdsHXZQkgDDQE1EseEm8te2bdYJ9awA",
  "key17": "3Z3YVdbKbPJXfTq7EGujT2hdxRP7bTUk4k3dAKxAG5kfaHBS4mtFisyTBCVC1GugbbRZBC7a1TfAsxYSvUzQDA8X",
  "key18": "TLRrUcYNd8ZPHs2YFZTAw7hnjewZihBYtmqqyF4HRqz3DruWDJYPV3eVkGrc3Fq6xqJ6DqrWT1RadrphTMRvicv",
  "key19": "24QajxdvrwmY4NAfXETzy2eKuvRSfTahgFLN44jKdwcyrKvKpxgDWz4qdxAh9xgmi91XDurB6k21r8fzbqMPoiCc",
  "key20": "4ZvV4PefTYkxgLqqAm6zyhjUPPj6ibbwUd2rZHVonq1CKitj1UwsriAnchPRfeqfbSgCH7hRuNxosusf19KkQPRm",
  "key21": "3G2NdsAJwFB5mhLGHm7crRd3mh8FXq2xzeYwywgyTRBRBCK7tZBArANRfErxycgsr3k7ddFSC44a4cSJcMYfTKL5",
  "key22": "BK3awEseBFdm53DxS1invRG2gHTko8k7438xR24QRvMeHzzmnHsLgSpyKmzkhFwsH6dkPKWSi47r4qfeXWEwDfi",
  "key23": "5w3HpGBwZvzxwpY7SUrPATzYBzV74rB8tCdfjQk5kbXW43YfcSjrRssCcwGLpy6MyuC5mg3nZF1Dpcdraz3zbDDV",
  "key24": "3Rv8HuhSFYSBwJeduMqLzYzMBYoM3bYwLLMVpZu2mdovFDRTVw9XWGNbeC1oozkXohj1yxGo2NUJKs5pLcmYorTk",
  "key25": "667QKQdM3NNvBWbcvg4d6GW2F21xgQdy5mvpRQJe2hb5pMD8mcpFiWeBJV73sRNWqpzvCRVztwSkgkjEJUZrWHnK",
  "key26": "35zEEZPDWDnKHzJUaUC9LDMtxEuzAPGMsyMAki2JDbETStHuvFx75k85NneVSL4Y3F8Ky97MKEx858yxh2qCTndf",
  "key27": "3gMNCCVvEnGWweRJRPKWEq5h9nvGzgpZtEd8BMSmmZ74XW9iwhz4uz76GcyAQoo78V9XW4U86wVoxJhKSWrLAxVv",
  "key28": "5zTFpRvxawjQE9spKcww64eXgxwujBv52ybWU8N5WTvsyaQPghZuF1c7kvrxeQ7Nyjp4Byp66S8af75BH1Uz1sei",
  "key29": "5vMdsEwcaxoGWvTVGYZ9oW5KRr5hwc9w6wNSaZ27GACHkjBYhzrHLzBn6U4dZ6qaW3CtbdbFgVgGhTac5LLPz5XV",
  "key30": "3soUwzYvzK3W8LCH3nLGA6o2h9yB5LGUtyG7GSvu2NRaHuxbGLv2VPasvomyGqseLw5zHatHMCzW64AfJLWMHAW3",
  "key31": "37X1njZBG2tHkCKNQ3R4BKoHYHjvjLspxqGA1BCk9bq1WsDaPPQsnHQd67PkEGfTRQh54cNLsGLDT2fHCeZrdtz3",
  "key32": "5S2qNukJyNpB5ehfCSfRjUfEwTso7VgS2Qrx1jYEcdG5TekGxVhfaXu2oRETPv5MFkDEyqjEmJjDPe2ojBBWpLHx",
  "key33": "3a2NfkEJSk3fmJEvp2A3iJCZ8Fccdk1tEURLHK9TKZeLX9Z1fc4oP5DB1yuUrK7n98mrRTcs85vfSbEZazbLY7TC",
  "key34": "2f3pGoJNQSa8h9eFCwbKsyG6fmp3RZeKLSUwx9o3vbFJCQfSYgHSzJeLUPeqg8d5fr2ugJqGJbRE8zp64NxDwjFe"
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

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
    "48xrQsWnFQFykBYnGpurocwWsJn8DebXkWcbFHWusmdr9ZYdt9vfC74XiEWLscdezcBkzrUHZj1PnpxaR7EAjmQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYBedUrVchAd8zx5e37MRa8DekFJRHoe4ZAZPRo3r5kFSGvGKe3GcEWA87ox9saDdWpcYTwZK2kC5qWxBrekXTk",
  "key1": "5HQcxoPxURfoiak84ugVLTyYKfKJk7Ad2dy2KQvnKh7c6zFoK54tLnVuCFi2m283KZfpK5Lxfv1tPLFkpALRMZnv",
  "key2": "5eZWEbsn6rtRWorwp38MiUepgrzQnQDHSsvvVdUxHjVcduALrJUDoAcLVXvxuQ7qjCRCDNkhh3HA2kcSmnfJXKQf",
  "key3": "5cnnLoBrdKZ2dkmtYV5qNpbKcNXe9xa2wrVjJp3pmBbMcCidTXzWEwScPB68ALrj5gcu4amVqBAGUnXoxWgxyz2U",
  "key4": "5fh75YtjXN9gX3ismDhZ6it1EGEnGhQ2DkLB3n8uUX8C2Lkwk7G3NhykdxMmTWHuopdCA3oaUyw36vMJ2WkhQk7L",
  "key5": "5KP5YEC9YGiGRAMWP5RPb4o76n779KHThDt8PTYprJYhN3kP2vbnPoc4jQWwyyEoQTQN92fWs9FWzxqbEiksGENC",
  "key6": "47uMPqW2XBXwbXWKKcSak8B1RsTR8MmtaG5M1AJGFXftttJoceSadDJj85yTbDoqk3RyGkKtKdmVXTq3ERSmRKpK",
  "key7": "4PrcWL8qPePctnRzLfCzi3Q5yV2Bu4tzWMg3xEeBZt5VicyoRV5uPTz3hUL7n1yKjmd6sR25VJ4qWYYZe9uo3zze",
  "key8": "3n1nYGKPbV2mE5mVfM6pSsqetEp711tZ2d3icAQ9k3dHCy1xxsq3J22PCmQuR3MxhJCRSFFKyoseW5uPxULfsZTr",
  "key9": "tpYgqNzSgQ3Nk2o9fUq8BJuUeYz9UKiJvN1wpgSxCctSEDm8Rq9sHjevPLiWd57HbMEG96WB5UicTDGcp8L8v5P",
  "key10": "26phTFjGghGiqK6qUjkEUfmL9mgLBr4B7TKta9cpdSWWQ1pYye6UGoV3efrnL1NpgyLN4XWsU7t1wqazxbP9MXWW",
  "key11": "34tT3cWGVKTft9U8vmUtUSYAKVXgcr6LrrLgUzRENdN2hjHn5pGKRi3CSJfnyutCP2QF7kMQJJwohzpEGkdXK7dr",
  "key12": "4FcR3SRmqfKsgbgTLxrCsAepaFNHpq4z9H7N2mkXx8AbQm7wYE7GWjHftvk6SD71f9bc5D7E5dCsSTW72vRB1Lwk",
  "key13": "4kezze6bHqkXKKBgcVLmZzZu3M7YUyPvt8vFEZ6Hu8qGb2rgN4wKw8SZSBZoubC1M2eqmTWo51tiqwtgSXWCSyrb",
  "key14": "44K4gF2aYQjibcz9Ar9q7AqDGuyed8vcgfKJMUPaNBquSomQf5jahXMcQT6wGW5ByzbkdZG1t659f1BpKF3TJBL8",
  "key15": "3qBoqCswYnA8jgY851c9rTHM6hgSHK6bwA2WmLk28sQxJSGJk5c7NBHjeLcYM8W9rSzS42HabB7iHoaawHE7aXaS",
  "key16": "2a3At9MYwBMR4wSFmLHRpRGpduWKYhNidgYvqR8uJ3qDbtJL5ewZSeKrcg9G6MztqCPmxn3S9m6Bei3diZ6iwcru",
  "key17": "2RJCVDTr5zLGmBisSGPKQpCz9JW6RPbU63t9arCXxbKK2cKhZNtun23m3RQmtfhP7BLWm8ctBY3pPq3zXPLrRX9t",
  "key18": "2PL6LzZFH7PdBEc73SKX9U8VLP8LsMi7vfV9J3NSiM7rXaKLrhAi3s2g7E1FHWM3UTiCYkGWZMD9XuyoMRFPzVAY",
  "key19": "4QGr5qFqhExHWvtXiwgiHin2Sy6QUiMJdG9j6AzS7kpewMksgvZb3Wj5zY1KFivKJyj33ZnTng2RL1fP2PdzDTx6",
  "key20": "79rVit9oPfTa8VofQAo7hB8D8SN3KJuLh6k2EcJYdMb2ZPzi9gRpnDPhw8pMgHLXJh2vTyGELTZ2bPRhK69aGgs",
  "key21": "2hicUEkDN9S2NHCT2zBeEfDztRXYaEyzd32Hk7n5LfkdUMxmWAzKGkjxFuMexebmFhH4KBD43HhfWP2ULBjMEfAL",
  "key22": "hGmfj4cBj7DBV1rrb7Bu7tfeq75gwuYF9LPkCD7HzbUAy14Tx44j7DaZ8WuhEDcQyjYJmr8D8TQ7zSskFjU4nJy",
  "key23": "1RKmbnaVTFJRJrS8uUfpKLeiMyEt6bJQg4i4Npf583WKDsCnzD6sWEMvohmj2Z43ywUJUkonm5znCFvB3CnZe2J",
  "key24": "3zh9S7zzXGsNyzbC4y7trPL5Fhrb6PuWYKqKgYsxahFk5CoX1GbiQEuQD36PRzoThzNdiunMY4nkcboGmQt969f3",
  "key25": "4L8CAk9UBjSRWHmtAPjjmrKCvanJrKB4Sx7rUwAGi25sDoQfnUVUZWUxFCnenYqopXVj3WoTriqTvBR658mqhjid",
  "key26": "3GKxyJEjGax4Wgwm9tx2BHwiVkQm9qT3MnYwiqKLQg1RpaTmJZs4gLGpJx2LfMj7oXcVpWpDKc3hzpQvGNZukoEB",
  "key27": "2SJHMW79XL7TyJJCGX5g79hVHPC1ka19ocastQJD9y4YJjucd2qm8mgJg9tfA1RVZLB4BEWKpHDpY6meaeVTnUC9",
  "key28": "5b5hPp3ZgUPPfXuHStY5Ky8tbvLCsJB4YpjsU7ut18z7xd6mU9WDb8X4ZsUL7yxyWLSUfkro6xSeZzJq2GwdJL58",
  "key29": "pNW2HzUyC5qRxNatAzHZrviQv2NpJELb5EWEhE3nJgwamhA2ptnPZpKNHb5LTRwWjDjuidL7vQiYVTogvKZdf5H",
  "key30": "38WunVX1SGQ6556uCo2iWAoN11fzGPMy9PL18pFBhxgzNRNKvzAVPnQgdioEfxhwgzgh316sSgaZ5ZcCmxLj9zUa",
  "key31": "2zLtdrY2hNTkxX9y5sWY42wrv6yF1H35855oZ57Npq5LMieseVVafitTNVd4RNhnZEbYKWXnSynF8kFPEhimk5F9",
  "key32": "5NvFgSFrTWccPrHGNyymE8R71K5ZdCjj41PtVZtUKpckmEufcw6BiAMGoykEd27JqwTrhJ3BWcQrAgEfJcBEkV9Z",
  "key33": "8SfGTMru8ZZgVo7dFCqfQrCeTb44YURTskp1exuYFs2pJ1GmkXw4GCL5rdPU81UEpMRXx4kzJoh1ThcqMwqpoXb",
  "key34": "3mde11pZyXzJPaXLxxnmobCV7e3cqyDS1KGySt3hKJSj8aFGv4uKL4gXdxeQ7ugRrEQx2Zsnk6zdUdyi4HvrBHJs",
  "key35": "2q7Xix2JSsyASKsHL2fkfWJPiDBA4adVq8ns5BxyFikCyqm9a6HyLzqsEJ4rbtuEe4CBFwy4p5vq7gv9jT15T9CF",
  "key36": "3HYaui9JPdHT6K9NnwW8f5Zbki7HGGHActyZs43aYcoB3WQfS2LAU1PFEJQ5ckaNCrcyNsLn1VugmwX4FQxqnq56",
  "key37": "2nK1msEZnwoWbAd6ND2MeQKkCrXJKb9FfYsCPiABqoTzZg6apUm4miynGxENnEG9Bi1RiQwWaPafuVtPTkgKLbCL",
  "key38": "63s27EivyFjR6hHkAonCAkHJyfp2YvQ36HsuwZ6QodXdjUzGudZazSDZFW5QzmDMEMEQHf6ABw8oDZqRamFhkV72",
  "key39": "2QfUDJ1WvPCyAw52neghqVwb5KfHH7Nd3fz4u7GiJusjTvMYTHo5wCfyLRXxGJQyYpdG1a7wf6FdXX17oDqrEpHb",
  "key40": "7Gv339CDYqPyGVtvCs2AqaaQt5jUW6pULB4e2aE5DTk65X3Kta45MhCscf5hSmUcFZ6ZhtRhPVXpaeRzN9MP2dp"
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

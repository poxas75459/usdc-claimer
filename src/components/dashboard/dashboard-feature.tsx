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
    "5jbdt9pGD6WFEDG31Vt5bVBizJX2Y4jQNGBgr896VH3iqKu9Eje2PocN5iD5y1Z6ER2Yx18e5QetRNhL4FN3PcCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oYsbDLmPvsYCKoh7HgaQUQk2XfLMDwCkrg1FG6dXN9jPjXD3a1roVLFDLrKM5QgL25v3Urmu4PwUhFJgLZZKvsH",
  "key1": "5kwBpzVGqB3g68kGvopNMFELrivjuTvMcEEYM4zCghqzvgD7ntux8tWgR48rLUASTV2s2dKpwjn1SBga3EZVkmvf",
  "key2": "3nE4UYEWBtgZzNZk48k75XajS2VcJCsxgSfRjNzww4Vw16mLaT5V9kN94Ahb4k3gNLEF9P5WqFLM8zb5NGzFivKS",
  "key3": "4JKL9D4t7goPbATrjp24cXhnYXqj75jBKpeTjnR8nDHWb6PEYgdC1kquxaDzcxLM7JzGmj6VEf1oQeqvqjExxAX2",
  "key4": "3awjHU6kZPGbe8ykrLTdR5ks42iAAgEKmSM6gikva4tkASdieEzPsL3HFhQfbR1j39Z7X1PfrJnAp9MiPDibw6X",
  "key5": "5DQiJsVvde7dv6n1rmxQgfBmzDidsvJE9vT2WnR5vfgDShZUminTwQNVgfC21gRoe3Jb1qVQg3KtFubL3hgwKLu2",
  "key6": "4Ed3HreKFu3TX1NXndsYNA2Ph2vuaEfo4gpzEddTVZtxeSxYpaMCiDb2fY7RjkM6ZQvnXEp44gDzBM2NW9jaiSzF",
  "key7": "aheSnTHMj4wD9zDXJk26zBpU8PQm9uzm3DPVXZ7xh23ZQYtvG8yFsZMYERmT2dDMFwszpDT6JJn5qsqkMK5aSYz",
  "key8": "5NeKWQBGeHRvBXcT2D1qFLAn6rP6uPybbkU6Rz8vyBQW2h8v136viiX1cQtWjTBDrFSjrpDHGP8r7QSZocBzexQx",
  "key9": "32gcmVTADGWqXxprWS8b7d1MzwXbtCtb12MXWHyjEpzfaZGgaREjp4KvqP7rstuaR7cATMxQ7RgAZX4xyzL1ttbE",
  "key10": "2T3HnuVFczvWA9XRy36eqfRWiFBKh15hdRvWBFp4HS47C37yYZd4vdUruBA5MXJprrfrH1TScAMwG6qR7vQUNu4p",
  "key11": "3Pf7Xb3vjZEX7uy5xgfeq1EyJ219eS3M5RC7xTa9zJXA998rKuwh3pii1Yt1Dff63mNhAbJ9WEwDGdjcNRbFsQEU",
  "key12": "222eYL8HP5B6cNzXT5ukq6LC7SDg1fJd9YYK37zUb4MT47JJtKRwUdE69PmW47obfaTLWYgLhBFSu3MR2KLnBSAy",
  "key13": "2KjhLsBdQkjz5A3NvB9NvwhaRPFwAhbRwUSM64V3F5YLMrAAjQCN562Wng9YDPix4kJ3bmxzx6sxUSbXgTxekLxW",
  "key14": "5oUXA7huZZkGaEpArTLpHX9j8pRRfVo5sUmmEqzQGM9J3oP97cU2CkorvebnmmLGid6sExdfaFToxwATZcMkSA9B",
  "key15": "T6dRj6DnZxY1S3QBh5GTtaa8U1XMS22DyqFKtqVkTKCCRFQEDMR5qWVWYPTfu7fyC6mUVPHCMeErJyCcViFCMy9",
  "key16": "4jD6QcMaKS89xYKnwvtBjbEyA93XdNz8NrToQFcifmY21AxRL6SXjWwFjpQ8be4To1FTbEJ3AdrsJuEwXPiWFS9a",
  "key17": "2QASf3HJ3ixXAKirTJBddjtcWwqeVW47Zmwkwp7XfhjdCKovNhy4VMtSJAvWgoHHGZS9R3QhfEh8UnJuqDyM6uQu",
  "key18": "yuFAEjDS2YQrPXya7Q7FU7mYKAkbnmWVKXbtmR4E8FHDZyHYLZDtTLSjFG3ZsLuVTmCKk3nTauDEf7VCqTUfwjx",
  "key19": "3XUqgtwFxZdrhjs8QchoUtJAJqNFiXrR37brM4ZoDiogDex63sNQdVy6cCEqbj9j7Wj9ZX1M1zqaMVAusWmSvhrT",
  "key20": "3ZVXUq4so7KLLx2mbx19WwUz6fjV57AdF7vfbPyYKBKoXPzdCgmr4AePgvPCFU3MghBoTAS55MabzKY5BiCbHMG",
  "key21": "h9wAyEQrXqP4FntYAFMczytgChQGf6FP5qkR9b59hBJV4w8Ukqeg2Hzoh6KRNwutpCwBqFC2FGhoro3QRq2eP3x",
  "key22": "3c4B93DK8YnkLaDGFaDUw4oGapqWav4M1uTRBAryUeCrJaEf1D7EB81BLkUFoRrNiwukDXyy31xkqFoogc3dCnmu",
  "key23": "5HVUwwjCtzKvz6gqXAPrLVCXQhSxb7ThKK92BLnH6XQn1s1Qa3twqEbzrAhsmmNTvhMuuSWahurGk3BzoNV8tJSw",
  "key24": "4CQFovaaPHwctdnsoLMiQRYs1pMg7gAvh1rXVFEKMwRHPvijxfLQCQxqJBgeJBPckVioBaC7MHqi7UVX6sz6tRji",
  "key25": "4JiZKkbbKtfyjfsC4rGWooCxvB62ZyFMYuMpiZNMYhs1VqBuuHKzggE9bjikwoiNM4vXDvFk4faFQSpZKZ5KRhHJ",
  "key26": "46wvcuKHuV6Brbucz1xoVcntNJKWqHbhvSF7VaNVg7yUwFPjM6VWGpnyhzqDtwLwJGP2krHEMQhxtRC9aMAezBPZ",
  "key27": "4nhGdkA4hAH5LnpYVyTdZLFnejSfR2XANM9Ggxq1ajS5YjhARJk1YxoVZhfMVmGEHjA6pJUj9EhfcJzEw5bPw1hE",
  "key28": "4W34XzzSzJaWfhcDKRiS8U1HE1VXzkV2StRqk5FgJKA3EsSa8bDghhz99BnBhAq8coG3gsHVoEoveviyAbXXNa7t",
  "key29": "4TXKNLsd6JqPfX1VT3GtsJRs64QeFqz5iN1LPnYegkFmLmBBv8NbrtP7eHEVfcybN69szBNhMwYyNzWp6vAETAbY",
  "key30": "4ZVwrjXwN74vFEfoEKApMmf9TpgWyiaZLGej8MCoCDU9Xd7WrheYVYN6zWEPk3YrjoW2bZFXyson2cR1uQ9vucp8",
  "key31": "4V8fFjo3SFT9nFi1V4N9M7iQZoHnG7nvDZxiZnA1hJZxXny6Jq6iRnYQu3ierC8ZDQyMqt5urrnC4vFMm9HG2Fz7",
  "key32": "5V82JGiR7CvpZh1rMzRUB8qRXzBq9PPFH9USWsEpyE6gn6TKKZcQeQavWWuUC9YRCBeto4N1FuBScXz9tfx3oVa7",
  "key33": "3HVRt6PpksMZpigtNmLmQaNkDMZSNodmNN2yt4G8qw9BG9ctEuTgTH1bN8r7YpeXaJxLV88W2VQYQbuaj27XpPL6",
  "key34": "2wcAmTBLuPbSNkZTWR6jZSbrbfyBvkZnq9RQYkBhFKzs5DbBVSocVYZHCBdPRbYsDAGzzMt3igExzei6GvALG2fZ",
  "key35": "2MQJkTzdA2PkZqpXidzTmBMhFic51zXVrXqDBSqHxsLyKfmgGZkfx47gzAxDLCtNoVPM4yK9ZfmPMmEJyT2YxUyT"
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

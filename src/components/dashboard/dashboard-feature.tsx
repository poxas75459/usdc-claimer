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
    "FF4ics4kvkLEiHaSZWY2N5YvBFWVantJ8rKkjtRA5GLgzMrB2mmpAj94gNKMZQuAqPWS16q1QvwKB3KVSPNLHWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMRBoxjhRyi8n1EqGeRtjuD7wQRfN4EJMXRtrTGTGoyh6eJaZ9jark744qjw47dfPPYCf2ePPkSr8ZD45bprm3C",
  "key1": "CLJnqEb8LWjQB5CUkBt7tGcDPxiJN1Gj2SzuzRQdGBg6YfALcYeWcWA7GZA7dZRtEBbbHAHtM4jwR4BNNphXtaa",
  "key2": "Qg536frK3VZyYx4GvD761uvZuZbKNjRmRDJ5vbxHtxDCD1TqJWgsx9buTwcKbmP7sMxEQSPbiycrA2BvsA73Azb",
  "key3": "3vhBDzxgNvkWyHNZqcyAVXemw36r5geSjyK9EnfcZSkyJAW8sXF7WhrxqTkeTgr8P4y2kiJ7Bp5FBGSjwS5QbmV6",
  "key4": "4gNeSXyWcwyspNsY9hLL1Vx4kTagbxgSZWshdXNsLUSBQxGubfFyzXaBajn2gDGjXzopq6zpkdXQfFMNyRVdfzJ1",
  "key5": "HuBbEAkqJKYYt3e1c8kFAu5a3Ykfw9hnTNxDSgxJ7MdAwi2B8aGXvTMriuSVcDTgG51kRXjJVGDCtSFnCzaCWyi",
  "key6": "2yGwWHnaT2QKbQTRYfFgDapUrZFMutf7joazm18j8Vc111zKsQkiw5UmDBMSUgf5aSvdjG1RH5TKjAW219KPH98d",
  "key7": "5sECtr7FRByHN11XsstX6whuCsGhs1aUvNB13jw1JG3aP9UqwTEdWuYFBi3USxH85KNCVipcSwNaY8T2c8TcNSGV",
  "key8": "4DX5U43SPMr6k7pefKkW3r7cfPASi5wkjZLSM7cKnv9ErKU9rNJZLTzdDmTPCezAYTscrBbsZVqfXxH1SLKMncPE",
  "key9": "WsuaNGhNTrqLZsYfex7ma9WgCf8vXWB5sDujbdFYuzodsmz7rBZoaMTU4WdERGFW19bdeTUMibx4iFQgxknDjsf",
  "key10": "LLnxSUZrhEX5KCsxspiRbuhCtZnfMW8UownXUoHzw72fo2Qz7iQuF8t4p1eFMYQBpsj5HSVbPn7obpY1p6Kativ",
  "key11": "SCyYDxS3eq6bWuy3mgDiLA5aHrDXWzoL4RyokQ5SyixNT1uiZCamJq1eqvv6QjKHZ9SN3tm6mWuAEA5nwhPQB8x",
  "key12": "2ZDHdZeHjk2cZAeKqkutyVqvPwwb87P1CL6fCQV38m5bCzeDEF4ABkcAE8iF2jHRekQcdTjcDsVkcRpUET34mEdB",
  "key13": "3TfQJQMqt1Z3VC5nVzryEfv83pPFXNVpTqCoVEn4UpsHW1jnwuPkePGHitVmuNZ1syrreAvdGkjbYrN7oxuCJC82",
  "key14": "37LYLKJPt5iGAXcSg7VYxLQe62d5awigPB6LV8abbXveGHVbTzqdjMsT1HdCCib493ynKrCGM9SCoadDCiMyu5mJ",
  "key15": "5x3RdP4nJUZdYgJMxgQH4PE7bo2NdVZF9VKiiajndUFr1dTTydp165LqxmXCY4LpXQKtjge3ijaVhvrb5qW74ggc",
  "key16": "2XQ6XpkyvRkeshfZgVmBe5Pj6SfvSraU7Lzwxi4Fr5TJsrHD2NvcrPKihKFsVAPfoo8fgz8M9CSy1eYwN4kHP8kV",
  "key17": "2LK8w3VwmxnwCvCwy1MabLJmcGcJ3amxa6pLxNackQ7VRoW4ay9EhymEYBD9KSdgPMWQsQmPWmmmvURppmzaH7bD",
  "key18": "2hd1FPRydaGSJuj7BsNgRn7dYQRzrbUPGMrNM9CUBd5Cry89EaUDE7EYP4xp85AJg45WG4J1zi1FzfmosGX8cLXN",
  "key19": "L9DEMaTiiMSW9xBS75txWDgFja1gLv9c1rjKLb9dtyQvQX8E4DdWsQrvod4p9ySPfMnfSC4eswQRviwwMh43fzw",
  "key20": "3DdXU3syTaECdNBbWZiswHaTVmWetz6KRGRpnZT4812L8pX1ySwWn9ZTEL2AHdKzGyGvUCdFiKTPnmnyJu2RXyKA",
  "key21": "2285df3pWFMfPqcRhnoGqLdEmXZuiKi2Grnt8K8tKtPtTzd2z8n3Jgj5hKqFuE1R8hCPEbwDh2r6NqMwHuWPZbPH",
  "key22": "2ypv7AYysVXUd2obapttuRzbZD44jvS6zRRCUhynRuK1aqd7oGVzmrp1rA5NQZfiJv1JjyYrFYmVUVAQGDJR89xv",
  "key23": "5x7h35TerRW5ZJNp9LjCNcF7CWAabhvojCsUHcg5dvUA2dg8QisEF4TqYhAnEfZNrJWPes8JurgsfouRczCurBHz",
  "key24": "3pwHH8Nk1aPSZDPPzU8zSo521UNAzxwRAxJtY7mkDuXm1g8UhR5ML8FrXVE8go1uWq9MUuEi5nfxTbM5VDXx2HMB",
  "key25": "27wub9t5CJCqWJtLNH4SGqGHfdbSZ3ccL22pTFQTBtRD3m37XyVq4wvw7C2V9FC2zL7mRLBNGZDf23wyN6dNL9Jq",
  "key26": "2iNzbEqZWDjdJKxfV6xVNVZriDAj8R5SRiCH4dB7T6ov1LHoshMFKa3wTK9ucAr3i1Bh53fmJGDcERqEfspzQFdD",
  "key27": "4XvUs2w42FC3ovgSSXVKgiWcPiCScGwjSLAM7yBu9hURqYAhZL3qpbisuzxVU4wtQfFf71wQKhfX4LFQLyk58tJd",
  "key28": "KUWF3vnF7SrkgXh3vMDAmMgaKLCD625LRp1npZ8zUirDMTMrpyu9ZeCyqPAykCiVxAXKtcSzY61sPvBuBgH7X7w",
  "key29": "3ux2om64Tmv3CvHdc6CyeGAMkmCYQSNcFDhECuLbrbGgnK3zUEJxkFdMWCvaojnjQsuQKpNvW4GX85vub5PrxT85",
  "key30": "2zog1zbGWmrV7t2djXkaeeWZiyEFU8ZLzbc9XCEi6UJKpfZ83HJY6h15tJn16HAMjaEpP6TkWHN9cv5mZQ2FvPUY",
  "key31": "2mcBz96uhkY822D1y2X5pBruKbrTUbVmCRZtYJyWdCVKYWSFijZ8iWNF5tQ5nt3Axn9diihwgCPF4DpKBemD99RD",
  "key32": "4EWon7R7oafmBAWD4bSi8dct3gUMHX5tZeeLaT9HunCMgefx3hMg7Rr7SeRcjaDGZybBBZd4S8sZVWGRuCcx9th6",
  "key33": "5CLKzS566mCmBAxTj4GuzYCqoHPdub11LWUoeDX6d1LZfy3ur5RZoyXcQ9AejwY9BkTNtQGmUNgKY9WNwG7PctaQ",
  "key34": "35vTAtvuN27esoWUcVKt2NVmwq7tGbLxhnFnTsFjuhvqf4m5UGPgS6qGgB2JBhpUmHSsX9XS25sWsbAzU9bsAE4D",
  "key35": "3pQR5gJXjsD6dYv35WisuT2y2LXQ6EJxK4M8UFWzEo8ZgACZzrkhgSMWDJM9Mj3PhpmS7KCw19TfU6eFLxX4wGw4",
  "key36": "2cVAwKVSRFU2gUzdWymf8juSbm2xWVfGRhQjq1rMvWo4aSYqcKm6SZE86P4akH3B8d9wLHLHivD1SJbhJ787Mu62",
  "key37": "4hKBWrSvyXfCnbPEZSjSbTTFKMoJ6tTesr8r36J4DBZ5a39MJq9smMKdZSvoptssjai6xq1jZyGGQdEpcprdJqbv",
  "key38": "5R4NLeTXKZFZyR4bEfNT83pQuCDNARwis2GPnSB6u2JE7JpuqTQecerNvQQ2rjDXzFvbXa7P6Bfip2cd5UtVHjGm",
  "key39": "2CgPZHU5U5fPXD4BUy8kwHaA8JVuxv3CrcYjVLdTGN1CPKS1UcGLTsfyBy9UCbmFGJ43onmr4jSuJnW1SYWchqGS",
  "key40": "SbMFaa7cG38LCcBLE7dHV1KK8pk3XKQCkNuD7ePEst4Z8oZcuHnYjw1Yk3p2y548eBtRF9rxgnihouEeULCz29a"
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

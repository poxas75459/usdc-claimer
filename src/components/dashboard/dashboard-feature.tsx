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
    "5TJB3L54ZuxFpmy8YGkYFjnMwp26apZi4goYgaGbbyXjSFpARBfmBkaxSw7doAiZxsiqr9bQCQn4PNAPsVhcLjjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEfxuYMDsxZEca41XmJMgfhw2YCSSYxGNpmDGGgHamCjuLftcFxatv4YsRpuGPcfq6QgKrUzutWox5U8ohMx7dn",
  "key1": "3ELEpX9GmkWmjtn1RWgkT97upHSSGspQ5JPkrKqLvJbTsLJxjRYEmbLCykYDBzEgsgV6BYVgtxoxFFaUxNNneAdW",
  "key2": "3VMGNh7Sh5SkY6KjtNsChaxt2XSXpEqk72cCEhmZqZgjA2HETsoTqfaY3xQdLYXf6mfRcuZqB3k3Yo3ShLzWbX6D",
  "key3": "pZV91M55Fynsfaa48GG7jas5dNUZKBcWhk7Pu3YcU9DC7Cm6SBiycDRjwRzahTdPtCfEjisRFiDh7PRHB26vH5S",
  "key4": "4KjiYJqFW7SMg2FftuBdDkcMur5z3de7xfF95KTGqg3NGquiuWN9cwun1WPLGHQcFikM14UdXMuKUkY5GZmbtsyj",
  "key5": "4rSVB14w87cQTFKVLVSGMbEzbH7tDUqoiter585xA1nfm7oNbjzPUJH8ZrGvf7Pyh7D8iEqmAyGx9zdoAsS5G2dP",
  "key6": "5mPbLRXst7vRsSH8cg6z14RA9fVQFWxno6YH2TNCdrqi3DHTy78SfomJyBj96gsz6SxUCP5zQVceR2BPyJFN3HZG",
  "key7": "3Wmp81fxTxpuWQ3J625h9W9o3nAuQ2tFV1CYpoHkzEYLvCaSYZfrdpQMjrZqRbNVarf66CKdNjYQU741QHscvwMg",
  "key8": "5hDtmszd2qfXqBiZSZAJwijyu1Q7dG78zaHmY5bYUCtyeNnJKNP1xNvGpQ1AJgxEYKCpjJxSbQqtHADU6YUrgWiE",
  "key9": "fZsXQbP7BdQuvMu2UBzmCnCE6AoENvjhuJGSfjTuEDGkaAKrfejz1VnBA4j4uQLPKTEMkdqeedXi3RmpUzx3wDZ",
  "key10": "3fW7iqfpKvuwD3We2Cw8acMnL8sjRxxXenn1qrdXKxqBfddsNGjRSLy4t8aSRYxJcreZn27h3336KzU8EittVZpM",
  "key11": "4nz2vKa6797CSoZWbfjiZyeDbtpnf3AQ2p5R9SaKrPEPTpnHTHD1fx7x6QZC7wnSzq9GGjKAqSohq6VWNBLaNiXj",
  "key12": "qQ53R64EQGcVraEotbzhpJSXY6CYUwXmsRBeF8n4shAg8P5iGrzaiWwkSDjE8CTAuuPwAuFErFS5RQJXXpMMfVA",
  "key13": "5mbrEzzXCDfvp2uDePZc3MojsXwxZDp9P1yrKZLcFz8BZPwCFeLs3cXifaA2t9Hqx5LuvpQiwd1Yw7ZixBm55knM",
  "key14": "5UyaNRY9hmzCCWTRRcDdULQyXfSgPLBD5mafYEHKogCJZTXnep64bNCUSD9rCKpvERTwWJuU8sPrgEGazBkLwzzF",
  "key15": "5byb3Du4tKyria3pySrNnVPW9EfPmKJz426qwUbcnLxPxBArLSvmsiEPUWpSwh8DNq5p5TGCQNsG7k6wqxXKrJni",
  "key16": "45y7TRKDNWBxyDVS1MVa8F2TwLdvWdWizXpxrrn6WNzTjmegPrxwWeUAt9T64wMHjC63qMQc1uQxako9hjcuGK9m",
  "key17": "2bZrDwocfqaqLwnsxu6EBTZjRym51njnzSoaQ6bKSHKN1BmWUWojWd82AoFPLQfMvWusNxH45zL5bSea5yi91zWe",
  "key18": "nAaaBYXCdvLNCESo8C1xKq4YEJmGDWeUADsY1F5yE4Gp9zjvi6kVg7sTfBHNfdw25PqdJZKnNdFozfXb5j1AEgR",
  "key19": "5LwWFJCisWDzsdBCLYbPAg8qxjUHnXTxgQNXh9fKTfQggzkmc3dBMGYFWD5YXUStgC68uVyDNVdypUPhSmhzqkcm",
  "key20": "3JvDqnGxazXF2QUTvKZWSPyzyfT69Gej52hXrNtp2BocDe6bWhNxSr6nimsjtPJDJyzQDTh7e3ciQtYgZaP2X3kD",
  "key21": "2mhSR1ZJAVcp3XYDFwfTPUqMZnexJzixNCFcabu4fVknM37qg7tVUQJ3u8ibB8qxwedNGssVhT2zEGfozDv6qUo1",
  "key22": "4AUwR7N7NLJaQsNqNs7XfE2KHCgwfqUpAbL3Pce3VNQEAbskZAVjfyvFyzFa45kBN4NQxQFcrufBEGJkWjykm2eb",
  "key23": "3rrTNi5tsyYrittAmk7PVHR93uH1ceUsKd3vBU6gYRKRtdsdgNb7FzCfhqeNMSZk9czgHQjLmoBtDoD6ZCsGckCv",
  "key24": "5DsC2b7TnPdJKQB8Vxms5QBXEYiwCSTES4oGncjJKC9FfNUArbXWYzBvTfV1ndiKPRgf1rddx3zEn1GHAGMbwLZv",
  "key25": "3vc41ZtP8BbRbJJDYtjn7PcBC9eroepGgZfpgQuWhxJVMKn6uFFHqZtMruAq46VUFscsF8uLe62u3vLkSkwj8fdJ",
  "key26": "5URYME5fXUgUwKjo9W22XJhUrw18jgA9rf3X4gjvD8Womqyy42Znw1eJJ676koFBGeCNXGrqiyiWP9ctPjk9PDmR",
  "key27": "65U1zBAYbAGEJF1eAqwZbhbooHukHxpaj1qHsB2guqczJNmDi9vEzDnDy4Q4s8u7LmztWn49eBK2swVh4CneRyqT",
  "key28": "myDFDQKHgVHfyJdfVFdwZmrAQVQHR3L8A2qxe5r8wvpfsvd389uZx34e1gA3rpwF38RMtndACtuYrTdTTSkR863",
  "key29": "bHLr7LV2pzSubimBuF1sHhoBExNuPki2Ui8zp39Ngkcv4yQCMfkM1kHgtGqr1neef3Y2LdMq2SsQML5pUbHENZm",
  "key30": "4smwW9QWC4dqG6yyTbsFtHLw9rjDRbThMfQmaYvhGV7tnpm1FGPBayGQUhbg6Smw3dduyjhTz2xWBMFJDFKXQVTd",
  "key31": "4ujRm55jGUC4U3ocgo3AyNEmxAfrMY2edCzN3zhWsLzKtXFeo4hL194BrNpaP1Y5332Bqkwr6wP2i9EDwKxqwZLR",
  "key32": "YM6r4JvHmHpRbNd6b213R67EGeen3azc8K6ogeH4Bp9Q7cVwfYEDsrzZdJaLY1oYGCxZ6RQkw4WkNn3rh1aGu95",
  "key33": "2DCK4TfhCYF9E1cmU3xbqaW2h3mY8NubV67vhMJVUj3ggMrtykq1N7YERhWLVtS9Hh2X9Cw7qQvpecdEQf3awRfq",
  "key34": "3BCkomCwSc4H5oQr7kiXznLeJGLrRK4Rvif4mHwf6k8Aqw5iWX2QCaS1T3ANzXr1DXVxoXpLnReWAxnX6JF3CdEq",
  "key35": "6Mj7PCSwGbEbZF2o6XP3FZ3oMcpiqtGXS8hoXVaQGTu4GE5r3h1SBMXFad26etLb8DNGaRG3hi8fGCePXEFaE9L",
  "key36": "wq6ByuB3namTmeGV9dMjMBgjfCaXKYG4XrxAcngvevUw24JmTierdyQ5hjCqPa4wNZ47hMsmzheyMb5jtMgMLTy",
  "key37": "2hjZSuav1iQ2hBhkZvsHVWU6195NfLgKWk5qzR3uDhd1F8wsTVZyt45etaGAnhwMN8ShfDgezZ841WeYXpqyZNQe"
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

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
    "4pqzDRXukiQLWUvo7oMnAW7BsF7NyXmNiGVuZd2qMS2YyeiKisiGidpKpXVCTdAKJNZEGbqgnvEFVqqYM4CaSYNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwTyahhcHhCnQqCon9xiLrFRZVPANpSPqLC39akJAJspXNW4ojiV4MvvWUb9oPsWPaVt9RWWM6aPWo4bnrtdmQB",
  "key1": "93ZG7iXgDfpyrCkjfWyzKuH1SGXoq3RXs59AEpLhCEhYadppjg81WhKQLgV7CFchF78o2nu6CmSySCY7rEaSp9M",
  "key2": "3UnMZf3M79YNnp3vAZcrMuYVNzKBQRa6nsaVtyWFMXvUBgyypmYa5nTVUtuh8tNQK8CQyu9ZRrKRHe8UKjHjXsyj",
  "key3": "4pBwGcj7AYmK6KPoehDyZLZygvyGiuJJ2rSDLEdjYDNjYxjqsbwr5HU6YH78S9WyWcjwNzM8dn8QeAfFZrmKTbyy",
  "key4": "3wrf2nCC3xi6WaRDzCgLQnoqaHG8GN2X9jumCpn4LTvtH2xiBwT1HSiHrnq1mLvVW9W7vPmdDZZK9VNR8MSNCwo2",
  "key5": "3snLisyt2ZUaEiTh6bEFfCN1nDbwFtHXowkjuCUm2cxzVHRtJAh3FKmbbz9ULAmu9cc68h21xJELYTvbPgsNGNGH",
  "key6": "X8waZjURxL2WxNAcCd6noQqzmcB6mecW5kNivmZsAt1FecPpbugJVLSFbCHamus9G6UquLgSoUXrjQR6V38eoyx",
  "key7": "2VYa79Sx43TH8hMr5iLhrUyDgmKyeu6okez7VQpkQox3RCeUnX37k8pTyx1KH36aAX3UU5FFedQmxsg4Zpu8jETx",
  "key8": "3HkZmmveULKGq7X9p9JUJjXk3ibssMypcbZ1R9RjETns4rVLAbx1KGCwZ1feWrpgUk8SqvYjZHDZ2LRsFmnbzw6J",
  "key9": "4zxqdKgZ5dVU5t87PrCdaJW1xRqRfyEjuu5DFSzVmihPmUugDWiffTsVhnMnQQszPrHV5VCTHworHBwfQ73FJtHG",
  "key10": "2xiBkeC45dhVKsCKS1iDAG7b31mrueDSdkEvueojknWg9sd556yWS3y1GKMySzmEr7BvEydqDouniVpECZJawLcw",
  "key11": "rBCWAx3wT7GZUvxntqr7WBLrX45TRBfQkf7jk27CvUVv2jy4s6YMXoanrPJprxdyTMX4YAQxP9Hin2JWQPyxzNP",
  "key12": "2WAKBZT6Zwt5p89FjvmRRFHaPhHjvACt66J15ERm6vu6bDPNGik9UfVgr53KDABT9PTV2nvjqaw2PZPGUFUYaYrQ",
  "key13": "5jdTdYfwA9xjaP24Fc7wgDqdkYeSrjqdckh8zd9Y24Vj4zwjnG6hw51pxYMtjSZ3Yfbxv2S9HzVtxShr9R9BoD23",
  "key14": "5NZ6N2bZSa5ZH3GB7Wo6CFxdC9xdVQKgku4odCyHaShpmXrPZV7L8P8o4Qw8twWSiknxxmrw1r9TXYuf1jZmcsNh",
  "key15": "T76aW2UZcqgXg2wj6wWPvrDB1jfAj671DEo42qFP2WPXv3wsL1pfxuFXXvnK5zxEn9aZf1UAKHVtNC8eJGqmoJG",
  "key16": "4HxmJzgkX2g5xZgJQffQNrAWq5V29hGUDho4wr2qsSxDwBPZUCZ7Dy9SYWybhaYSZbzEABojPJCEJhf4YTchrTUK",
  "key17": "4Bty5EPui7ZL9V7Cbj3gvQT2xoBDEb3gzdGa2YpU59URGn3zqDcz6wBx662VGfvUVx6Xtui741CUzbdy2QJPwazm",
  "key18": "cD9o559VXK6gmLqgG35Ue4x2hdL3pCbjxdA7ZfXMtc6w9h3w2rKnpZPzmDKLCdRdGeaneCmnpbeSdmxJFkkeWMH",
  "key19": "3C3vfna6M8MS8wFNkRRTZbAN3iZqZAGMmnGJ9h6kevbSYpkq1o9mciVipqoFq1qyAwfrBNsuzzSmeJyr6RduMEHA",
  "key20": "4FhibMMdjeTtWBbLKu68XBvx6jwPjWKbCS9VYLnZZ4DdpXmgKuDLP1jZ987uvLKgogDTfEYKVusj2Qr4FPv3vDtf",
  "key21": "4Z7LzXEJxoC2Nj4CTB9KocZjYGC3z1iyH2Z1mY44gumbkcQh2m6mhBoHbkv7ubY1MZ6PdztJE8yu87yr6VAPiAAt",
  "key22": "2LNx78XLmt46xRQ2gTs6YkXT3CmyffhXLkRgwTaHHPMmAw5PPyfYuY1g4td5sWSRsGyjk2gyFyVNEmdeNKAFkWTh",
  "key23": "22HB8cDRWkgy4rs5c485MAfzaHjwrUKCVEMLw56xCiummbxTsDfwWLkFrQ5ifkHRJB7qrVx5Lxkf4JS2jqfxCKya",
  "key24": "4jL6bJbfTqMk1jxQ6TiZ3cNc6SxsSh1Va2dDAJguLTjJMAdbUS1kbuxrpJQYocCAXwzHBKZbn1u1DkDUxA2xGyhW",
  "key25": "3aVFXDFyxJNcPRuFFXVzsoYoUuZCaeYo8jJoGEasP44paJrTn5GG4heXC4QgqP4xdGLVtCU1jhVZfULSyg2txZsx",
  "key26": "3X9Qz5JWfcqvkK5deTeFjWHWQnLhBvLpVQNuZHKHC418J6nEafaRcgdy9i1Li9yrrGwSLoJBriuZpoQGt2ssbXZm"
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

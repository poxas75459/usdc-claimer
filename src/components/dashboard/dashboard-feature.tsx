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
    "592TZ1Wt4QdTAFYcoK1zABwsbZ3DKMwTrZ4LQju3zLpoKHNZB4q81tabcKB6QSq4WbSeLozLA7DipR3vkyHDNtiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUjEUSzkwu1HQJ1CfE9RfqKxeQAiabjs5xeUoXSYX4Jmb785Xut9TgqNhPyTWzrUCii9s4Ty1S5JA1hgEUddWzW",
  "key1": "3Zeu8S5BfXiTYbP64hyXSTLJ2JjsBsNN3bFXWjD8Zu8DE3fmU2iLFuiydmt2cBp5eW7YTy3yufTWYYeSmJLxg6QS",
  "key2": "2VH4qvyCjz7SDxM9YeqYf7gBvWWZK5nYYN7uYQbTGsHUrZ1wWYMeaQ1mzkp9jA7zdnbiU2ETqNzu5rEHjJTRqJz2",
  "key3": "3PBCFdQForqJHtWYf4mkw2FsASzc965qBKU9hesEPWZpNV5cAAUMiDeKhKmmd6snmeSc93Ehmtu69aTwzTzTBYRE",
  "key4": "5ckADE5CbYPWCR4HBgAd2K1vvfs66puM3De4XSZ2GeupU7197h9Xh5bTCKLJwrpZYysV6FdR1aQPEudLkQXBR7cu",
  "key5": "cg2w34kPCeE7qnYzXN8HPq1nfQyxryrZv6JQ1zKzbAjMrbYKfkziEKzjHkUX6pZyr1rTW9KcewinyJnYvu76AGv",
  "key6": "3ciT2xLdVvyAzTc9urf3cBH2DtJ1yVVNuPYe4Z6hL4fR4bVNCVBXRxyvQVY8y2Q4LaAkAfww2GKEMu2kUfvvj5oj",
  "key7": "4F32roSk46c9a816CRJNLAR6uXJe1N1S1dFdwZJMQ6XBo3xUiBHBuabhbrVwsekvNg1Cd7Cutg1YR2uyhsXJCsxC",
  "key8": "47ArLb3g4sVnr7YgxKeofU14vFZr4SP4AiqKonGq791Ztpdm7muhAFDMi42Ey8ZSSwLy73hHAzk6p4Vj6kvSdKLT",
  "key9": "3VfmGrJHq9JjrAvwhtpr1eAsDYngmKxfEKNQdqvWouzdqwzHSH9PZc5KNQFzPiBTmj1QqURCSzDftD89rSH8dVfJ",
  "key10": "3evcBnp8kxt8t3JnMXL6Uhff3CLhFTLSVjHqEo2ghnjyZenFmsziK2MGgbXVAfVi5P8duke8d766eQuHoyqvp51A",
  "key11": "4Mrbm3Cdx3ntF74ihWR8zaCcvwgV5xwxiHkPy7Usft3qrDRNUk7McjttCKRR49vZ9poFkZCkDzZ26eJnY8UqhXVe",
  "key12": "4vDnH481R3e2bh9UaT7JB91UG7h8yct7faTxF54CL6k4cBERz17Y2N5eK7BkvpqB6cPa7C93HJKTw3iJGHMnHEnW",
  "key13": "4Ay2vmZkQDgF2ePk35ieaBWTGb3fACi1kKfem2s7SQRk5c2Pbe2Fihh8m5RJcQao1xpXqyh9qMJyHGhHTBEeqKmu",
  "key14": "6pLUPFGyZtuewvBos3LaqrrRuhMW17PrMayeCoG8t5JEBoE5o7cKAWiZT5SYBo8u1N1jef47cFxHuiKzZzV64Sv",
  "key15": "4iyeG3xKUsGHZxUd7BJQQ92NGpzrLpaaq3G9LiymkKG4TtZD2yrxnpXsQsMgD862VBmpH3f312XoBWePbfBawUAx",
  "key16": "c2bW5RgQQwt6G2kj6HgQYUREK3ejqV9oa94eEC6bkPQwWpwCjNpB32qm8DM6Nh8A4NrCSaEmssczV7NW1Wz3fqt",
  "key17": "526avAFq1VwyGPp7jWbsN7RMZ8UidoYGWfxmuuG5qsxypgAhox9sub6gR9pR4HWpjNc4sLjXwUiR2HhvpD38pRTB",
  "key18": "4vBDSmPkVWzXg9CyLbKkKrvBDBttBqpkoihQgu2LJVMmRofnH4y3cZCX4ty67GEBAqyC1Gqt572TbRSkqtudSiYm",
  "key19": "2bMAzPbR1ZDviLy2TJg3a7M9k6FkNFmDLQ1dVkcyjsYR5vy9orVYz84S87VY2yMAbnkMifjMKhNAzPUV5nxt3wCX",
  "key20": "64uHZfCoQTooYyjFrT1dpHYENU9ewQSaZBWFrBxoRVJRv5QnEoGmPWNpSob5iDpXakEsvPvjVrodahx1bDmSgQgr",
  "key21": "24H5ysYC6Hsj5Mpf8M52nkY84QQwbvpwkags71N5nVj6bbHnugAHAP18hm7Lx2AUB9fiXy1phJJsagTWbs5GFzNY",
  "key22": "2waQrcReckmP19f8f1HRmk4u1sB9qaik9g683fphqCm66afDBtErhnJ4rUkiwFLxmTfzzjA41Y6VGVWjdRwBh3FM",
  "key23": "4iuF3eSmZkMiKu5yziAkEKrqvqakphoxnK6QpQwLRhi3UkRiXouiJ6Gz5gLRgYb8yz7VF7VFdaDsFkZ9sZamVcPe",
  "key24": "4GVLD8qrm3sSCWDKvZJUjxnWVUb8ym8rBPxG9m648RBVVVYhoMaHtC5NAYrp1NUZo7JKG8vRhRErvq5jER9gvTyT",
  "key25": "3srwwDFqtkCFhuQdGpVDHxBmoGKZfHiigjrJezPWr1iU47Rg641kijBWJKNA5EVo3oEaEzHZ5yS2yhkm7HoKQT74",
  "key26": "5fR2mYHjoiQMGyZX53FFgBkSEoxSBE4mdE4pRwXCzuSfyUifHTPvCXP5FzT61tusTBjHmwfffhbwS627X9W5b9KQ",
  "key27": "3qh6W1XLchjGGecMw69FVB7N3hDhs8Z3rw5U3hmD8RCyje5Cp29SVGrqEpuNHhQVmu3LQQSsL8us3tWpBgjQoYZu",
  "key28": "2NUmooXDNm3CDQCQL6m7UeRsWg3E5aUqvAHCRWNxA8rRGXESLUxQU5BjmhS3RZkNQdAJHGPB6e1hrzMFTv36LRN4",
  "key29": "3iXZUQmjxV9Lw1zoCWJcgJ7kP3sDcFtfomknMyvotXJynAFu2sRdtEDDou2arvBg4jN555b8nHbewmYDFxkEeEnK",
  "key30": "4RTTnxSC2ZG6J5eJvWAeP83XqPTzUBk1iVQVMJRcMwNpPiX1WAP9qu2hqVdjthfi47oAp2F4Am574ToMze26yBTf",
  "key31": "31TjnHofdHfTRgSkQWHXAiL44GG3XeAtUyU9MYfhmAT6ciWdv95sZecHbgSHbozC51u2kQNYyPqE8PoEv5o7fgWo",
  "key32": "3rjdpPAhJdpqmfkyzQ1LePTWwGxmoF94TttFB2Jhd3uNaptxM4rKSR3JEbR2xb7XKAcSmvrhCvUVYMHDXHRY1yce",
  "key33": "B1jU24y7mVfWjdVWrJLE2XHVq1p8GUXZfQhwMJd4pj6JCtpCAvS1fbsGWg83frpKJ89dBDf9kPLFVAaEGojUJbe",
  "key34": "2AwBa2fMzvVKsfm7LPtiHcTddUp62dDRRTSweiPnuab6tSotJT4x56dPrXp7TFVx8HruVHBsnAB1jmu8aH87x4SN",
  "key35": "2o96cQobyw4qW3Nghn7esM5Qps42e12MnBJwiBE9AgW3gRro4BSurxiKmFd4VckAk8ecYE5s5zRAmHbvw8Z9zeUL",
  "key36": "61qTuQ76xM6GNdUE9z5Ye1RApqpQRabJNFvNzsoTP8ZFS3MEhVJBEiw2pBW69BisACacu5aWkm5qrQu4EMoMzuCT",
  "key37": "3wwfjDsWv9Km5wg8vu5XqnVxEPjrmbiTdtSgFbYocycuBE1bVgMwxU31XEaXZqokwF11xZDizuXDiJ1Nh8gQLjGW",
  "key38": "2BchYmxHDGx4s5oQPs5xFBzqHsHzDA8CdRyRKUXVaeEHdR943G5yNnU4msbnULvsjARzaVd6W93XzzuCkUu4pSDA",
  "key39": "2PHU5iAUQkpSaCSTfWTk3YeJL2haFcXHNvFBtXsKBEUMfgtjZSNYRbRi3QA3BkBapZTDx7UQ593ffnkXxoAVig6V",
  "key40": "24MGsYiedKzz3nzAtYhfpKReJ1uJi7ir6jszgYSnp4nQjJcVt6sGa8dGJSBS6YiK3o8jUxYzZeL1ubj5tkg2LLJK",
  "key41": "3bnyd1o6usDj9Vij1MQSEdJqABRSHQVh7bzf3KCNKHNMn6akJmfqWD5khxieoJZe3aqcwUKRRqpWCsMcZz8HTKaQ",
  "key42": "3e6p3aicRVnoLL45TfTLgMznQuVgfRAaUpFGxui1rWDmu3uh7RoAXKYi3RzuCYWdn7xi5ZepW6hZQqG6ZLLidmsq",
  "key43": "4YwBTUASEpZ1ZLzk7NQojDp4o4WdN6zxQ8EW5zWyMobtit8AFe6AHRABv9sEknWwkijQr1q64Ssu9aFtZ43D3kSi",
  "key44": "4gWs2osBLb3nQrfajAsiBQcVU7ka9vHKdtM1q8zsWW52kzcV2ygnLbCVNEUByJW49Y58nHCZCCkgPeewdp5watNx",
  "key45": "4xZtUup286pfmoPEq15E8qHYG1w5dSFzXx7sU4pexLC7q6URAydh1w8gxazWk2sQfZG9JuJFnJfN1tbR1i2ot4Ma",
  "key46": "4ATEoAv1JwXn5ayBTciXwAnE5udpcfwmCnefnf5nNwyq2jZBezf1vULmvb2yCb1trVc5Dhap3E1XmDZDyJbpuyCH",
  "key47": "2MdRZaM4ACLUoxH1fxbDe8NohNMXeA8iU371bNGDGeEDAZXvfuFT9NBNhsHEGf7VNP799GP1RJPkdyjgDpWm5Wxh"
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

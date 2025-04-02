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
    "52nvuatUwznKbkztyoZzESa95GRTY1cZmYLofxViCUaY96fshbwSbe4ySYk1MWxWapwKFoPWDoqpzPyP2E7k36UL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Gkb5CvQHDdpPr1WD61YJTeXSSk9eiTCcq5NGdDc7pJCo1PmbECs4Bnm69F9J413J6Zr6exsDQV5W9p2tvozV4F",
  "key1": "Ni9Yi9QM6968WXrwZUFrWTwgtyK1r4F2xePt7gwkRsLyqkp572bkzKgYZnHi74cb6voM9ovb9UmwYixV1pvHQyp",
  "key2": "5KtTNyd4TfD4yZ67Ydh4AEuwuigB7YaUtv4rgZbh9uL3Z1dKwDStcpBhCZUveWLDcm2vAJhUYfsJvD6TMYqaByEL",
  "key3": "47VnBJU2vdcjpDEeQThGGuQtS7CuFMm9RfTuZt1mKT5rDdBHGvZxUNoZN8ANwSAB7tm2rNFxg3QK6Nn2uBTLdWZV",
  "key4": "4xCHd5wxfsdB97YzyAqXgBvXNiieyQ5wcpLoCdhWL2pQ6o9Cyg7QcmJr3Q8WvTJdPmLySnWPmjpYmudZMyUbJugr",
  "key5": "44Ujxm6wxWU6iy2vF68nQ5ith9jr74U39PCgx2emFWZpEXf44D4Ehbi5zyVVxUm51cJvkEKJzF24vXovbekWK2nH",
  "key6": "3Wa2SaKXVNjAd5HVQxkL1VMSPF1YjeehazoZFWEMvm8zbdGJuNGHZXQDP6pteJ1Eg9yfTKZ8WaXK5n169YxxCHDf",
  "key7": "3NoP7mB7vsj91xSvEpbLN6eGsSEU518tbcHH1QCRwSfjUJGTLsoLDZ6JwtRUefQqVCZPqNA1bu1ZRNNuDmt2EQdR",
  "key8": "4MLaFp1QjiaX1vaHvPpd5W8WARQRjGwe6MEq46a5yqg5rrH9Uf4bfSt1h4NWgFPxesAdQYq6W5fftBGqKiAhMcbG",
  "key9": "4F3bg96J5iWuUjSbUCN8kVeNxMQ9zhLBCpLVEYQkaCZgo9FVLu9WQASfyAf9h9W15ygN5fJUphYBdkMskptKzf5t",
  "key10": "3EmwKZAdBxWrS4RH6CpWxpQbZ7yzagFKjNypjwv6yHFv47R1iawpXJNwvw3foFoZCgwSnFVts3vuYmbzoeFrcn5u",
  "key11": "5SD8PfcTuHSfjdPCoboPCipsQA2TnftKH7tJEr5W5UJNGnmnCPonVEnEyQyL9jxeE6qRpGjKB48goib15tYweRtq",
  "key12": "FU4nmt4c3hd5wiR8vr5Qmek6Bv6jP22vePxNdBxqJdgCSD4PPMRZaGFEzrgftB4JopiqiLfTVeiCWEFGE8Nv7V9",
  "key13": "3w9Bon4ohjnwcNXtMGG3cHKcqkehXddciy9nxzvhsfrVyfgTXe5kPdcfsPMY6saAtSVkfquZ4FWwJKvYNjeiFMoZ",
  "key14": "5dDivK7UpUAgDvGBpGfsymFYLrdMfnxBUj2LxyG3jHyt1iX24FSB1zQ3zTkJRVBuak6m7QdhWNBTAXhPwgk1qw7",
  "key15": "W2o18o7gsqmkorjuxgL71nkeYMSx7xucFDEUs75EePy8aYuriAnXZwP27KDCmXUDCmb2n7dUaqo8aoCofLLsVMr",
  "key16": "51KopUugb3ZS15uwCXeYBfV9dMzn4AkBCUbw8MpoEGee5oGNQ7K7jVqiiJnzGwTSb2WKCYqgV9AoqDzWenUFD2cT",
  "key17": "24u2aMb7JNv23EVXYXhvyMAagV3nQmvtCXkJ5dCdCuATFWjXySKgWtH5mtp2Xki4vbawnm4YUJJfY3hJzP8wPgqV",
  "key18": "4nMgcR9ebVSv2ZGwKZ7b1DmXdKtsvHaxFfgm5vdUgbERN76PKm1LrEG7E7x8fp683VDjktnJ9om1SHiGmEckDNoT",
  "key19": "3WwZuA2FAvD8QhT66FBmYwFrJ4tKiKZRC1JV1Dz7cJnmRuD9nbozJF6nSU6gwvabdDvSDUFYurrfMCwXv9De5xPk",
  "key20": "4udwrpM1Wcx44sVhcqYei85pEPCnRPaWiBN7WsaAoRgrLR1EywGYaymZoDJ5Dt7hYeZpcHmAdWUuvh1hmd1qSsd1",
  "key21": "3ig75B6cRrVQAKP5F9PsgYgPb8LKyt5ZgXnHgGERnuHMLFZG8HfwjHn4s1VbjnHSH8fjYtQV5VzMg7gfuqk6j5jD",
  "key22": "pP5yBUxve388DeBF1f3QkmMakgLRhokRq2L64Hfj9WyZSd4zJZuvR6UyNwq55c6Wj9zu9LqKUbqH31fRL8MNsoB",
  "key23": "dq5TXFNQbP9KcsF8FVR6G8hfcWGbjxaWVUFQGK92tdwY6jm6MTQUMZcdGjKwJCmWbRaDhmQ7Gy9Mex8jmGsGuM8",
  "key24": "3zK75DXxDmnvbbt5XPoKH5jM4da7wrYoVEN3x6w5h5uDn1yhiJLg9BBfWsGTBNPEwfJpSLveMB9tHpCBjSUAGknF",
  "key25": "2JrxdBTQMkRrx22MBuMTQXVr8fghaoob33qWmRu6hy83eGULRkEaUREPjSBNc61DpHyzUJqGVBwfYDq5weFz6FX9",
  "key26": "3PiyWy4aiyKujUeBJMCgWaNDq11W2Qkk1JuEdPy2PY97qrjwnmXiX5KwRGw4tVWmikucqFYPusEQv8eooUQgm7WW",
  "key27": "4Z1hnBPYqBaWpqnG9cAWezuJ4pSYZWVBjauNS8LVX2vLd1f9tP425Cm82GHb6UPgmMrNnFNVUF9zWkTpduPmGniN",
  "key28": "44VW7kWYNBdTiZcPj9NHLvKTfjXAtRfzPwZz7z8M11Trwi4k9VuiNVqJvtaZSBR4T6YkKxZouj7FSktaESCuWcZC",
  "key29": "5XXncbaJnxzE6C3WHe7DWvD3wERa9uSeK5NSkMfQMhHXre45C9eucxXLoopKsz96facPoAzxnsrrATqUGH5VVRtt",
  "key30": "45m1YcHts2PQeQvrqrC1vjnRY9PAqU1EDpmX2UCMEaDcpsfkM3UqJAWMtgbk7MTSXDshkFDswWSeJe8PA4QsTDfZ",
  "key31": "2M4mx6yEmMQ4nVZfB3mpEp3K8JW1goLQGb1NQ45YDSPqhGEWhKFU22vqDYJKttx9RCr8fadz1ajezbknr4LKGCuG",
  "key32": "pwxTmnbhujXiPNzaZb8FTFei8nxV27YUVUnxLeoDRCxZQa27QVD9T2B7DwRRU4fDj7J5xEf2BcKr3XsFgB88E3X",
  "key33": "3pmvhrowdxuJvW6tFgRnFV4K26s3yai6E5DeySJbnPaibhykeaoLLKqoT2u525bfdZbt58KGK3oKVxqB7aHqHbGw",
  "key34": "2dntauuxsgqnErU15oaz8tHYrw19UFTxS8VVXALSdZtcX1kt4mfjAK8fQDkZkuAcM1CzwGLieYaurDxy6vSxkrDC",
  "key35": "5DapmNoTyv9E51WJEzbC5UcFeDKNDtdXK2rcZkXxLiQrxu9tvwzx9p9wCRf6azMmJZn1YThUUF4My2VWPMcVTt2Q",
  "key36": "gA7kgVpXfaq4KbAXb8NLY4rKsgvkL7VTyDg3bRyLXJXYVnGyEPJsnUGTYP1TSvMyuLt7W92ntyHE3yE4aSuGWe2",
  "key37": "3bJy3FfBksNhE8bhTRYnVABANv6WJDde2xedRHwcVFYwjfeYA5V8ShWiE4NBKN7Mzx1LbQ9BFzoLYvgV1SC5hr26"
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

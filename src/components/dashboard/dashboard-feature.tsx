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
    "3BRN4pxvJi4TUMPrzgi3pBVFqi84D7Sp38PfTcrTnm9B3S4TawDW4B3kZa9FL81yPxmdQancX7MTjeyTNCbJfc4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8Gn67Tp5Kgwo8zEuRgxeUoXapvkn6moaFCHcjBsA5x31kckkx47CUAYYdT9RuU9xADUvRa1z9Yvk17i6NgnZzi",
  "key1": "4kGfzoiJrC2vHD3aEktx86ajFRWPjJBEhSefmZiFEM39Bw4PocoyEzbGmHd5iWkSqyKXSQUAtShzV2Y4fAVmVsux",
  "key2": "ZqLetUwSAGvEbZWz5coYHmHeGQGZXbGjzHiuKhYQuMzwu22FuUCYAR2jauCqS7N3wB6AXGisuzjbtWuw8w5UNs6",
  "key3": "3nRUmKLXBFGEVqyAKEhRXV1r9eo4MW7VoFzN2EmVEdpn82JDs22RJXK9cVCmzHnocXJamhzSmgPf18RP5DqGNoMV",
  "key4": "2PeErFesB3Q2sSRGC8BkX9gpqjyAarzQHZR7i3E8VVCSKmXt39GaYSesU7pG1BY8DxYnXin9jjnYHpgE5hpQzaST",
  "key5": "zMr2MgGBu456JmQfE7ihVHirozWJ6fwsuzdoJGFiP6NkBfQi3wWGjjEM7VtWKtniSYbww9Qru7BPpZifff7ckAm",
  "key6": "ph1u32sAE9nmTeAZXrpQauFEZ4EQ3uAiNXN6TBbGsvwJfjsuTxEw8Dj8RLkjH69sPrcnFsc194aRKjYsk2cUACs",
  "key7": "5t5t7CPZNc8aWer7s6kg5a9WPvXJczxP35zczZmBE9qrw1K2cxckoQsaNYLPW7gHVfxMG1tzMZWib3JWkeFuBQa8",
  "key8": "3QfaqRSqNgAnEFdV1iDKpBx6Kwy2VJDSFfox7ZPj968s4Jc5fHNRP7Wk5NA8z1ZNy9RDTxSUSeAR6RxRyaPUoq4d",
  "key9": "4RSctdcKuK1sfRWiBN5UjDZsFwL9fXVuS7BvmkFqPBqyiiwiEwP5auKGHWEmFbpPY4svYEZtAWgR3YWp79VYCjqQ",
  "key10": "4yxaDrKsXugp6V23G5KmXpgK9fCPtVpFB9v6DwgqxaMf13F15JTTXsuFCoW3Jx27Y9hZfgreRL3D7rx6EBwazkqP",
  "key11": "2xWVV7wDRChfBfM2Zb53oDU4moGt2wPV4ibUdFmLG8dUQiEJHoY4ys1moiArLZVAaLxTmTJnzobTDqDNXw62yJ1u",
  "key12": "YsnRppJPCsSZWRcDgMtNrzxsHG7apaRzSZzG9jSeVPWMH7itszL4A8uwVHyqF3pFum1CXPknbqfNjuRvekEoMwt",
  "key13": "2rLh1mScX2Urq3dTQAahxYwbtgJAMqVqS27mLDNuvwjnysrhXiQ79qKPSGoYxugtpvwcLJfsCVViVZaJTNtZHZiC",
  "key14": "4V1xeoQj8DutvjSRyLh1FSijRnDkraRy95KM7VRPmqppoY2nJ3FAuoUA4txxenHiy2ikZVqUk4HjZ67aWCGNT2YT",
  "key15": "5xTwC8cETuoj5bn5RwqMha4VqJtL8RMwV595fVFY3yV9SPEuDRruTbdwKinBhHGi9w7aKju1AiNi6hDnZyytJa2R",
  "key16": "2ZqHxYvsDGLFrAyTdos3zUNGQXYGWPyQvHc54BbQHk9NtBXR2wenGefnvDLkSY5iujQ7fzjvXYvXwQtRvqiWpBSz",
  "key17": "4Zic1QbuMMJReQDiexAzc7WrMC6Uo6AcDeUp3uuiEuv6tsjKYH8bLieerxypZnwJdvVZkKdLEQQaWAn16aiWBHy5",
  "key18": "53Las4RvBNy9Fm2eb7bgd5aodaL2usqPEAPvswQRkLPEwYr2GbjvTeFLtQdTU346X3mLHHwtXBQbgYFM7Bn1hx5e",
  "key19": "5ZHXER5oWFB7PGcjraDN2bzVCVDUiXfVYRTq2KAwJRACPK5kSrztsAy5QLUzLALP5ih19RoJqyt5VLyRXF1LAff",
  "key20": "49PeQHuWN9s7dmSiErWvxMavKycdcch7BPdQzkt17ovjs9W54NJqcE1SSV1654VGNtnQhrzMLMhLG71xA7iA75WH",
  "key21": "TaXmKGGtyiguGfZ6qyRZLM66ztmp81TJUZU1ErmV9xWgyogZViVnYM2DRowQ3yPuHNe6z2bCk1oryNe6sach4ZV",
  "key22": "zQtVuJSpqftdgXtsJadn6DDaKsCzKLMose8kacXmftzw2wu1p5McKgeyVbDMNzZDPeSusSgNbTUGtXQiyYSBQor",
  "key23": "5ourKPsAhw8JrZfsYpGroCocbYYPYZfnzfYsypJmeN8H8TTMt64zoBEsJFq2P42b8QLBZ5csnmNqT2XF3PCmJMu",
  "key24": "49R9nho2Rg4dhEEpP9QG4LkScWhsW2EekBAg7sXPG37dh92TpW7tgCsq2E49KQumvGgwSbvntVtYbweE7FHoDgvg",
  "key25": "5RVEz6De5fusSdMCvSMo2H9zuAybf2ZvFBJhHReZndeaGmgPr73VWq5HMFfXhxmjyiZ9b55S4P3ctuPnskzHhcJC",
  "key26": "2Kw4HeRkQ7Fr3sRyyaaajrQ7Xd2ZyYD6Cn7com3cQ6n3tfGTR898s2NEudTuvPS6HznpnpnT6qcByGQCKFYNeYcm",
  "key27": "4qSR4WtqjYEx1Fdikfr2Y2MUXufs34XSTVqeWLHpBv7CKErNP9uaTCc82TAsddNKsEW3N8Fk11jxMmCzGNd3AB72",
  "key28": "5yXQHNKF2zEF8VGXLtHjdvPdruxHsChfUVQ1niZcXdEMgx9DAZ6zKoMMANFYU5we8cLLduZKDEpYKA3SywHBepio",
  "key29": "4dw3yzHXysWnkDxU63yGZLLphLbK1eCYcpHX1kLM18mUKsJnYVK3HCmsrRFGTa2wobBp7ioKEtAaFCDoRWDBinPd",
  "key30": "27fHx9eGoTDdooPKhLvzjF4dAjmSgxHD6Lr3KveyrHYsQeLjShguxfMMJvBJRvVb4CXMWhufvKtnG4UiwTvMsE73",
  "key31": "5L77gXhnZAYNztFT1CKFKQ8nuQjQRFDQY5wrQfiD9KKD7KrjBSXqfroKdgTLvCiBk3xC98h7DPWoPdqzavi8CWUW",
  "key32": "4oEE7kJZYoa9uTSv2AfBrz7o7m72atxHhkZkwe2LTYsrvuDfa2N4m7rjViwdQnw3iRYUkPGs4iAVsaxAzZ2LfPRP",
  "key33": "1YfzbycjEt7PfQy6tL3hmmJL4JbwZFacaxFkKQT6Z6BLorEfK6RGRTV8nGtgDwJ7mivfh1nQ4Cn3me4mHLY5dSb",
  "key34": "45Pwo3JM6yq5XASgJ8sVfcjYRmmoAz9jPGVGhyWfd4eQZDyDw6EUt97uw7YLRe2qc3UTcB5R1i2SCenM3NG75WTm",
  "key35": "4py9gLox6dBcTVw4auxn5iyv2MhNGNwvhnq26GnMSoLAPeQwiZEfqhbfEbnmgpbGzEw4yA1sHSe2mPa2SNDoVfQK",
  "key36": "Y9R1obwAnvpA2iNgHcJZJFpRSkQeBJu4adVE31TaFD49DXZVi5xJQg1B11XMP7dU4fJyVg6VGNLTmhhAcEYh1G9",
  "key37": "3pojhGgy1PAgSzSot8jSXEkuG223hC6hYgMNLiyCKhCfBEycqwd7aQGksuVe8GUWiVQXFrNgLknqt4FuSqc1ncco",
  "key38": "2YmikcXgzfk23pGhCgZpJxMrjtVHscr33Uy9GED9WHiiBNZmn99xJBBtTSJsHGfXUXbN3C4NkgVmwgUfyPTu5UqZ",
  "key39": "3RL6if4dXyow3c3qmc3cRLvRDiF3WXY41RUqZCt41VDKaiUgsWWgoxkTqWvDq3owuFYCk9Jp33kjb7o7VwTmxF4h",
  "key40": "4Pvqsv81NfcmRaUto1LdeWJvHLZKashEkWzoiAoDHa1HVtTJv9e1Wt8LE3LVUmLnrb4MA9JG6wJ6HZrhrn8cZnGh",
  "key41": "5sQSm1hN7b6tzstamGbw2ZswRvrkZn2QRZM48Bd6ggpDjaDnEU4PrNYFgKUik8AoBgqamdqnbeeyhVvXeKzEnhx3",
  "key42": "Bb5QzG9UfUesAfczsZjjiFa8ew8xVRXHrrnEFEwcNqWBd2uvpTTRpV8a7T3r79eiKqQSFKkK2yVMLGpbuKTDpo6"
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

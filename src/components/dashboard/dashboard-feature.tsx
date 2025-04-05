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
    "6hhxUS8B7Pm5VDfx41bKAt7uoaZb1WFh986GoJktT2JpEYvpAv2RPkPGWE8fVgKWZ2ufN1Dyy6n9Ciz7Vbzqp93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yEqbpNhoaYFuMPfq4oKT43EtPTRsxEn3fEW9GMs5bkwJK6QXtrKZzYzrC96zP6q4f14rhScc9RMd1BbvMik1mHa",
  "key1": "4PDviUyi2VCBPv731aixUcYEN5eAM5RttZzu46sSLh756FSAabSpkEtzGnrtgsT6STtU1GFn1pYPePTsdpDAmYoS",
  "key2": "5iex5HVvjhgZxQpRT8WVhYURRivgbxLzwGt2RGU2z7ycgWRguy86Nta56Nn5T2KbmPXbq6VHVb3VsKmLS4ne6gpX",
  "key3": "3vVwSzFCg6Kk4GvwfuP4SeX1UHswzuKEpn65ZSzEPRtrreswG7CNVXaxMa5YPEcPpe3YHSLnNnJs2TgbK4HhGdp2",
  "key4": "n1RZYX7JeBpAuH2hTQEVsMbGLJzwGLnbC1B6WGvxLh4PRuEx5bXYyoVeDWME7DBoWRUZ61w3UNwW5GAAoMq2urG",
  "key5": "5FVu1McD5TWU4LSLVLaW1uSwbcxSHrfgr5Neo5WdFeRd37h8dc4uUV3zb7VBT8MtgZh84SDaBrDNtNd6dpGX8uKP",
  "key6": "DXd1up9zE9yiMVDpuH2An9cN9YMwxHYSRcMs8vLppx7NVTRKAxHMrxo9bHG7SUZkFie5DAP1CJUvo5ma89qEZfG",
  "key7": "5HVQF1CZfvdRgFjBdn7puq1onQCTVMM6FKTxFNWhKPKhjvkajxj3rsbKkKuQZpUFbPoRrvwCbgjL5sGQutnSvRM7",
  "key8": "5DWXftbnFk9mVLc7qZGpPZkX9YsEwy1x8ypVoUP18hHEdvFQekuL7PEHdW8agJZRkin1GmVJBQ6wB1159wPpqHUk",
  "key9": "3KY8ciPVuzmYbeZKrktJra1Fv6Z6V71gkiqcPqpUioqaQFz8tBfVZxL6eCSF7TSTdJP5fpFG8JiiWBz8jBFVAorW",
  "key10": "2SVWfiNLJiBMcou2QCrUNASVwXjBAycYeZsXe5a9f85z7mSVpMfgVBsQ5BqWw3Litm7LyX51BDo1mgKRYm1kQCay",
  "key11": "5NzhtxhPmTmtWZdBxSXPaQqzw9Ma64MZLmGokZS2tDJmyux5sKvbadXdGAhztKbm3YEKKnjv1iBmX1eTG7AVCezT",
  "key12": "3n2mSL73nWG2aY3EmYCvCrmxpjLC9AykS99MHjoqqZeYxshwyg61CgvCamQ1Cdt9YGSDGJL2gsyctS9j9ntjLBAs",
  "key13": "4E8cQ8NHNh6JJgAvEpsrYqhBkMcDGHrNDWhwCbEscHq2w9jeG1aH1Q8wQm1rxcHZnaDcKFeFhAMYZQb6Km7x9Ndv",
  "key14": "2m8idbjcN6dqkTGVw6rkG9vvfYYk6PVp1Y95a8N2BQ8HHLLmqMGAri8hiwQ2DrurzdCP6Fzd23fKytD577CiyqfY",
  "key15": "53Gy179sQLtcHrsRUg8B4igCG33JXVHvm9BGxo9xseAntm49PU7C1SHxyb2oU5vog9K2xy3hoFwvjdGPAQjkDpZ3",
  "key16": "33Gqa6Nxy1r7CFQMmpHv5C1wzvHwNM1FjrBScyvCNqZ8X2szGgRFCqH2AiDbgQ49LY1mhhXSWzy1W3fYw5JSzDp6",
  "key17": "2mcu7UwCNzYLshGnXXyTcbGi4Y5SuRVkJRDKSNNB7A6QQQ78SDbnBmz3fKsLZ52bxJgkkVYrmrEzieZw2Jye7Cgx",
  "key18": "tpE4RVtTxHQ46kzy6FnqECETfVYpPDKcqqvgb93yFCxCczyEt4zKPGwNkDkDrwE5LANj8mcRF6sPWmUKrcJRFbq",
  "key19": "39kk3gEsZMWAEd8wwmzqPPtSRDsBN3EEGVkBQJHGgx65UpjRYFRah7fpwVrehPAibtEQLMW4RbWK87XwCjQDXvyv",
  "key20": "5FM9Hb71A9nMjeLHZnXpGmCaUEtLxxvqywZLdjk2eDEx7qLapMRtQoz4cuSoN1EZtoBJCCn5E89pp2VsB46RwGM8",
  "key21": "5Y35Mt7aZjmq6Y2gmcHpjdKXefjxexzo8ccciit9LyyksaV5SDKwzU3rJUrEvKZr1EZvBvAfxMSSJKR1LJYhAzZA",
  "key22": "p4gSfECSygXoBFYBGa2cgVoGq2qRbcgUtXLWpDknmwUyoAQwxhApY4VccKpvoos4h7d5Wn49u8NLsYWMqxWieP4",
  "key23": "3ko47AR3YVBH6wpiJTabWBAaBv8QJB5dTwHjgoBNKVbimMbkyCZJnzMzyh7tfWStawPqds7Vgbt51LmnX3Xw2kUz",
  "key24": "59jp5VAaiNntTvaAkWJ1VQ4cKpqpbXCHYQBunYi9gpZC7F7SXYqWuzm5NeNrYoY32SS8Us4njHCnH3UbijwXFWwW",
  "key25": "3JAATF68wAmg44v9Bfu3hdkSsM7cuR8UhrMT7cu6MdS24L6RVpUuwFkKpfCPQDxNKhXFnYQn9zdJyDjvadWJmWDn",
  "key26": "aHxZAJdV1j5ybKGZMVBPLqqiko8zt9XTzJCCCu3ecLFh3dSSZ3q72pBpQA2mogtDEtzNK7e5vbxzZuAz7FmCnPV",
  "key27": "127kFHwzup8qCyNh8sqXaYLsZQ6RvRNGUGUN2RuA1QEwiquKRW5iQ5VZNmMB8zhL1HoWysfApiHdo17vw5nBe8X4",
  "key28": "26ZvYqhN9U4ts8ytmW79XqeQ4WvVLYdsBnSQ4D4PympwsSK98AXDWkadve2QBwT5VgC6i3WnsKMC2feJdR5gVCUG",
  "key29": "vDJEizK23TQzbg1HiExJinvSzSNvCnZAzJzhB2bsg29CgVPotrnVU4Bf1bfWWUT7LGocXLJDZZKxTgn6GybPbUY",
  "key30": "4yyx6DHnKjnoAfHZaEcEcqA5m1YanP2X8jyn63ePw83TpvbzB8a2xHS89RxK4vvV5rYs6jYyHvxzqepR5oJN5iPW",
  "key31": "UvhMjdTJrNAcjarQDdrgRU8kymJPRGb7yUJbmSF5ssaQwCHJPhGJWDoEiaNmtCppTa8JizfL7geccJUu1GXoQvq",
  "key32": "5QWydw4oJiTkZvf9oNXTwtBy5GTMUN5Pfdde94jPTfYDSo8cfxGrb3cHnmZi4DrtNKsZLyAXHTMdwdHMhMwbpFob",
  "key33": "2DFbXbkBfQHMTEYXLkEytDF2ZJe5jhrQ7e2k4GUkN5GzM6ntrGU9L4L65QQt9nKJFk4498Q1FcFW99qZbTMB39iJ",
  "key34": "5eRfr2dGw3ZWHdN2GeK9VGMCLqgMQvvuCH4CJvcZeGZVfaohG8i9QaUrt1JJun64U2DC37QjZVPhRHUwzYW94NPT",
  "key35": "5c23nt6hCJZMVz9xn7stTinVhgvqiVwuYFzM1KRe2eomm4wd7b8bWa9wedo9GjbQDVMSiTQmj6ud1u6jTxCiAAit",
  "key36": "5P7KhMWHTiZG2vWDT7kijNJ7TXhSPqutkacnEcXyGDTJ9C3f9W6T7ZqfLBWS5LbpYbQQcnpMsU8BCVKQwN5a5zPt",
  "key37": "2jDMGsT7pm2u2pkYbXgRopZxyx6AVmdsCSBng9wd5Z1vigqwWNeuwU1FhWN78q4ost9KxKaoedKoe6YxT6nv8M2w",
  "key38": "5L9XmgvRFSo7a535Z79CQ1Fm2YuszUxRZFkdJX9DSXbgHU9T5DhNp6sxtxpd3nfRXQRdeak2Vf7W64tbh6CL8wp5",
  "key39": "5PsaW5ew7VrYisb6CJSspBdrnUtgBDsyGu6NjakMcoznwcP31DtmmQQQGZPJkKmAaXPrbpDSM6G4VDoGkywQPJVH"
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

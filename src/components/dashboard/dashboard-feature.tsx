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
    "28SxiJtsqVDjRsJ3kaUCq8yKc3fNHbm1XnaZqrJd9agV8zXze1eThJDHujyxgKbMWdWfZGR6zdx5sqkQLBFcKTHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRkAuJBqmAQEnYTsYsn5pDBr4G9wm7YqBDc2pgHqkLReMCqNAWR5fdE5MECuw7k6etKeH1zXErPhzVrHwfTECUz",
  "key1": "2nPbnuMbmNyPnZ137VBtt6qymZa6qLNiVrbEuN5bDJAeU35Fq3MaQtT8x3UCDpDqqvbV2jHHev9tiPNvRZ6xDA4L",
  "key2": "5JbsrywpW21TA8bS32Qu7uKFuozshAuhdZyQUi8XnaiCyBQZh3VGAuw1yFUDR3h4K43FfHK2xnKm87XenoChPdPa",
  "key3": "2tU3LLvoKxfsNnDUfHH7bSexkjKgpEWXSFMYT6o8QrjgwjkzKtX6YSgVcaX2bhNxSZaEEzzmQMeSUEPP3psf35zn",
  "key4": "2qcByR65cRUespkVAPFTTFGLe6MdUvgjzgfUphRodUZcGDA5ro8kgkst4tkRJKQhbWxcKwELJNpj6QeSvjZx8haH",
  "key5": "5PaWkXuZ4kFmTrRS9CfUYhYTAvkMjZfsmiesyMU483RRA1QhZFBysvErvma5SgNXmchCGNrMrnw6Luxn5KC3yQTL",
  "key6": "2hqauERjo3ZCdcC8pywkHm5eFQdqtUSekvxNLRjZBNCiVG4XWZYw37wjkDVa2q2kemfFuhSQhWSokpzqB99ZqVMe",
  "key7": "5sdhqzuNfRGCtmjVyJFaBhrhhJGZg33w1RPqDfFSBwvrFLjuV7U5kk3EYLz5YkveZanyPU8EgBpgwgVMVBJ6gZFy",
  "key8": "3Q9hq8YyDEDDHtqJnPJScPLx7sUWT36GoUt7WFaoFeSfxzNvB6fYVDESnDnJefud5yxR4ufYu1FxbyojJdEqNHqe",
  "key9": "5nDyD7kHk4cDT4wzUkSb3zKR6so87xKYM4bAujY2DhEYATmyW4uZVjoxEfVRWXVz1ossVHgo4Kd5Gmu8tAU7nhNa",
  "key10": "4aHg8SRCRbAVRFtVAVEzVVFS5iP2wGjqtY2pAq2tCnNFWsTLvJ3eGwG9k4MgPk8Hxbbhdyu5VKpjjpPFcqGTeN4o",
  "key11": "3ovF12YKus9wDAMrrJhjYjHBAKDpPtWexm8d9Q1aizm8kCgPFXGSoPXkhiQGSBYsjKjt7mbKPLuRhoGwWSWifzBr",
  "key12": "zKcQJLTzidCynfuo5wz4e6Lx2J2zx4TTaQRG3DerN2u9ktozxYQvbZUW26Ysp881G2Ww3fqkZ4sZKdA5ZhgrMsD",
  "key13": "2PWULEaeZiQVtuW3HcG6EXNsjwMNjSFdKfWXJ14FQL3aJKqWrKYY6FE2SBuVBbfTkxDjiQutt3AjYQGux2JrQuQF",
  "key14": "5KPu8cJs3oautFeJofTVryvwHqjrdwyGZQHHix59s5w4Ty99sytfdLuV6QCamnA9yuNiV1WV3xDQkPubuzSUrvSB",
  "key15": "KmcPvd15FhUDL8R1ydbuv13LP9pEDXjFJXT1q25aXwK4w2AXstc1gE32QzR5JUrZakGgvAx3SkAcg4RHCCSqf68",
  "key16": "538KcZqehQrsmxCy45H85pcoqzR4r4LGXfdy2mqABFKRD59npiVWvFjLEq1i4PyACDhUL2i6BXfbmkM87ki2ToQe",
  "key17": "2uP1f5xhaVyPi2yQZSPxDioyJbtPfAtPPFtLv9cji77yFsebg9PbzDB3GEvu6KxHPqH8edyNR8KzRGWbNUjRpTZS",
  "key18": "3YJA5wAopSH5pb4M7YM3jWdowKsgJDKCTYYeB5tzDczrTUVUkoZtJgZy9iBHK8zE4aXi1mj9qacpeTN9TKf6b1it",
  "key19": "2YEonw4XpPdJJvLobxprVDHrDHQ4GQriQCuNW6E3evmmdEeB7e2sybR9cb3MRrGCBjXzgjn1Qk3EuticMRMu7zeD",
  "key20": "59MHyN3kFXxpDiyaxDqjR7M6vjs19cNYuraTXCYg6ZuueZVk76nYsSqY3nryZbGzvx6NBM2ehSsUdPegPVceK2ke",
  "key21": "2wjSexkwW8dCeU5SroJTQqJPLt5V1xve8cNP8hAdGAsdpZqUNcuqEanL3NE3fVyHzJ2KuqRVRNdgfGs2Q283VvHg",
  "key22": "28G62Du3wrqDmGsGH1dj4szxAX1QF33RWw4PqZj7LPE8AdrGJoQ96VUMvmhZNzTEYoepZG4qNPcqxwayoGk95yxH",
  "key23": "2qAD6nzhtsAYRVM76m3BXkZW1w7C1raZsP6kVaX3tNW1R2Z5gP8TpWs1TwXwZZu8Hp85HvMjbc6bpc1cJBGAyubm",
  "key24": "3tT7r9ttUNVkEV5cthBxeCMTg8keGYzmV9fqXfCobnK9fF4Jqo8iKKNf64r5bpHHJVEUxjZ5EgMTAMbH6uua64dh",
  "key25": "rf3T6eS4Hg6tXqjEvX5UGixaAfnxMpiF6L8BkfVQjFy4HthfJfvPAU7PCtMiW8pspRXf5DFktJcbrdrWGAXx6cV",
  "key26": "44bndSbNijT5hpSkfjARRqP6XjAQJvf6NSJuJwm1aRtV3jhqa3Qs835CBkitUakdjFwmJsseS81LMrny4ygJ14fa",
  "key27": "5dHjBUhxPVAbLMSddXD2KsawXDa5obxj63EbGv4qezWvCdkg4yRVkKF1f1aT3k4hsK7HaonujBFVCS7zo5sGvmUQ",
  "key28": "YMcYNEMrpVubVdfHA1PHW1rk2ueTLWg36QYA4QUrTVZ78sPAHhdWQ2Y3yDWD7QtErG81yJez3YFZ8HcMiYe1fay",
  "key29": "4zrZSB8XQwQg3fgvTkht7GjqLR7mDq5YBuWLc1WqMruFBsHe7XbxtQ8D8YGqmd3C7cwGZyind59m27wiue2beYMR",
  "key30": "44NZYb2zmdAWmkkiTmbKY8ZtsxPWpXbiDZ9U6feNQ4iYAztaUFzz8NqV9w9yrQNd1K1KrUXH5giMDdL9Bd96V4TN",
  "key31": "242jN2Xzr43Vm2iJQRn6m2K6Hzw53kuT1h3CCkdbXzNrttjdGU5A4BSqGHgJvpWZmxpRgobSXys7D3WGduWWrdJv",
  "key32": "2hmHzGwP6jRJxncEvAvJccgu3hFHuFjpLHgfBfTTZ1yunktxyqNMBvWT4bJXguhTaE6j2uEYkZ5MivocJcEqzc7Y",
  "key33": "31GAtc7oeT4eedwjTh6acyUXTU9ygxhhqMCFgkEGeMNQB1Jhm1bs5YwV9j94z7mLaV7HjTB5RV4PEEYA5Ae8VDNH",
  "key34": "3mKukyzACC88gVzVGKbi99zog7HGK1w275ueo2oxXofSAp9EVWtBRrLmn5EuGMhFPq9Rc8LGm5PonXJ6W6kFs7YR",
  "key35": "2kV84gnhHdd8DJkr6HEbYzS3LiVBFbG5jtoqW6Q8WAzmQfimCtF9dbdHbFdVtQ1wc6QZxLZWXxt9WfYBaWUUpeRL",
  "key36": "jWBYxy6TfVnk1mRYZ41BRqRuGKNVBQYgfBDpavk8tjPDHUijaGs2VJS2iPEBBBPYcHTLDE5uE5Bci64teVVnW4X",
  "key37": "356odYJAC7UP63aBS85qfAHuQFvVivhxbdLm4S3gfmxYrZGmJoUdEMkCaf8Ny5ayWu7uhTrszfmuxvv6UB2RmMKX",
  "key38": "4LJkhhMdrKNq47C2DiGzQoG3MttQ7S7MobrFcvM8nasRruhK6NsiZpJ6MHk9DhBn2ehCK8pnrp1hEv9KQCbzXbRv",
  "key39": "gboMMZLNu9KdPtcVbVKtrS2jA8YeoJSSiRYHaoAE52XWDVTKGyCwguXpBYA7Pj43N1K3N9Hp9F3Nuf648JyednS",
  "key40": "5g5zSxcEqtV6MFP1djpQv5Ck1dBfha4wwmPRwmZVCicK2a9mLQDpnny2mZLQNJiRwLHDuY3WW7tvpuf5sQvNxu1o",
  "key41": "5xf1c1A5H9BoRdDq47r6EYCUNoGypX8CZ7A4eo2UUjizzZdMbogFseynPNXyENNLK6oiDgBin1FJMD3FU8Xraji",
  "key42": "37C9HoAk5A3tyumzB8k1a7cvc4tQasXVK14neGqWfJhgjxJRkPUiJ81aWE8uFEhrjqvcdun1ifJoroE8QkCqz7nD",
  "key43": "Pq9saFiaW1YSkei3BHG1Q2EGM2g2iq83aWPtYRrrE6AJcGRsVAn6tpx2RGrZVHqhgv6q9G4icNxYMGuSLGZeFkx",
  "key44": "4bCEHDu734YR2t6W1VXqfoqCTWTLaANgiLiUPj5KVjSKwcVCc87YM7J5NHayDpb6gayuoV8V5CP9TYQLE89WifXG",
  "key45": "3yYhhNnyjem1aaKAW2jiZwTaXpoZ5DdKzQmaQGGXGSfgsofRURv7h7CSZkTCymd47vj8ijHKwYKkdJb3nUiFScMA",
  "key46": "66YvCkNwNXh2zTfrzzXFKPZ8qLVu9rQyF6bnPQ5prZw88U4phd3se9c7vfjXYB2Xbo6qNJarGTZoLDUca9iQGkMM",
  "key47": "wXBAwdJBt77RgoDmgqMEFB5McHq1mKnYA5NX9kEuFR5vWDta3yLPAHL3YGDXDzDJegyXx9CmkezGZwuoMsCjvM3"
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

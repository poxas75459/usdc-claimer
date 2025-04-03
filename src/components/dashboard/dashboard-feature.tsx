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
    "9S9JoxhfVt7sxXJUUxALZiMJknnsetoJ5SP35Kdxg9bV4UAwhbDSEcbEVqmhK6TZx2iXmYhhvHRxtwvgRpgaWTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTrMBCCgbqWd2qUgcbwcumucb8p7caFCpXrNramVjPjg5sbeYhN37vE8yRbiBhSkNXZaHwHSxJZdF8aBWSCK3jh",
  "key1": "3BsKqqG8pFkDC8zEN6ARtiWwgMZSBksHAKnXmCpGNEznWfxXaAa9bHMhKC7ASmADSKgEVPpTrgFfA4ghiayadjxn",
  "key2": "4J7RgRLQd4CLwqpbinuHgiAkhSYLAdEopeWDJ5HXApVoBYT1tkeNtLVYhc1oqyRA8oSe8so1n1ZgWB3Jet1MrLSf",
  "key3": "543DrVaV9sg4P6XuE8MMjFoL2K4rtut6sPMnuJGktuo8Tj1ak3trg2EEPx7fomwGzHNTkQdnztfDR9udCi36mPaN",
  "key4": "62zbUBBpNnErGyeRPz6dAbaoewyPkXr9NFEMciJGC7BEZmMJFfDCYsTyL7vh7XLnXSbr362T6Bsf6CDzddc55Go1",
  "key5": "5YEuFzRkmPHtzhNXCjK8jz39B1qTbfgbfx39Rb7ddA7y6S9vKwQa3VUVfkAmNksiYhuhuwZA3KQgwzGjumvubauo",
  "key6": "4Anmo5KvFyfUDLhX9AfnE1CgjbPDZpN8XXV9ZqXutRXCnyhQjyuHeUetCEfQshYtfWGTLt3Wc4gTczR3mrFq7jw2",
  "key7": "4L7ogwZuz5FV46SPF5SUVp1fBZXjnYwA68H3hVCfhP3eARaC63H8tn3hfaGDHCZL5CbLRDuvDeQcD4RgWC8wEoFQ",
  "key8": "5xm1zMbPFPY5K1eFxu4K2uZ421enqGhZY5TmLnTGFPYBh2yLzrPsP8K2svh2CGTqN9o3rSRipXR9Y2EZQkAwG9rc",
  "key9": "3e2ciKcCK3jwFdsFTScUicYSBqvzRzDtMiNGcYtBjHTW4BbQ9rtSPYLnuTX9tsYyNcecVhCpkKJ53gVw4LdHG9JA",
  "key10": "3dx9Fgu7pEYcAknWbZTP8i8LwZR94gFtB45bE9V77TJncBWBjfJXgT8yAmEGaFvS9YAffiisYCh2Cb1P5sQzsYCv",
  "key11": "4p8wZo94a2Dq3HEuDyQJXoFmudkNZKiUdp2WM7Yw5DSxTvt6j9CtMgXmJ5utyC5KEgoncUeSUarWD8hoY9Dwdgww",
  "key12": "65GtU7EVJnTKQCBWt6caU9iocseSqVYYosvuJ2ajZvawFaNVUd5QzbYmrPrwYGeYay9pwb688bAb1oSxGHkA7zFn",
  "key13": "1YacFSCRn1qeaVYFUyZ1MyNYBP5XqdKNaVT7j8Hd5EBowzS5BfP5LNqVXbRqosBw8KF3fimW2kigjGc8vkfsdm4",
  "key14": "Wp3K7PFZJgVdNMVCuv8UuayD2zYLSrw7EWNM6K1NnyfbV4rHrWRaTGzgswzqC26Y4QUStE3fmihAPa5kZTYptSZ",
  "key15": "2LNN4qXhXACPrKbvaGUc44SvmJVr7Zdxtgjh8G5bp9Mo52h74uy5YvDc1yYqzAXqsmrft8oTR3y8cdJ1f3CFH5vY",
  "key16": "15dv1Jq3qtow6hvuzx5V5zD6hTmQjY4hxvad8zUALmYTRvmu8tF1XhLiKXSSLnD3bwVJbnc1AkBFNV5ZuNFRGdx",
  "key17": "64G3fK65ocriLKEq9EgvWNV5TgwmrkvK4bZJrmz4NaSvuDSjgMfXGw7HXYJN3tNtZ8Ge4BtLQmeaYdyUAdar8B4c",
  "key18": "2vYzJRTF3xUFMmB1GoaYmdDJCUWmF6TWZTVNo2YzuCXKx8q4dwgie85pg9a7royuJgcY1UGHdsWMwHnwrLmL3Bqq",
  "key19": "56UMYUc9KDJZoF4cqZn7STDeLrh8DgHsknX8j7a4oB6giBHrHfCxgXrDvNPf9Fdxe1FQScLTDcXu8Mu5TA5Vk9UU",
  "key20": "3g7rWButRMHsi66PVnxERwMLyyK9fD1dQVo8K3PJTXyVjJRiab5Gt3SkMrs3miotmFxmBa9J3ej2ETYLtj8XuRdS",
  "key21": "3eC72tw3dgeVgTKyyPyKAbHagxndDLSSYzyQke9DWYwXdgYWTVQTFfEA7wFJsQh7PBT17MiwR5Lcbnkr9X3CgHj",
  "key22": "7jtpsc2bZFi5SLBadhixgkgYjbsNJR8ApF2Hx58yXmufjTjmbtCfD8aBvr9yAE7cXLaYk8Ybv8w72nfXp7vP4DL",
  "key23": "3stTPBS2LhfGpRJtnNe5FkfXNpRy6TD8GkrpenriYZYBA9yDvEUcznCFJ3TMJYRmRTwBp1LyRk9cM72dkkfL1kYB",
  "key24": "JJHg7jAQvEudWorB3kJCBax9XJQQ43bBDKwAiZU5c5jr8pMajJ1hccs4MAF89hSiLhHJ9KC3iNG5L5M3rH54eNS",
  "key25": "63quW2pMefuo1pEV5zj3d9y7XhEgMHEMvzAHAjkqcMFpxwKYHXgfN7PqTQj6ZKUj5WWkKSQsALJafhrhBi3Ge8VL",
  "key26": "3YE8CZxvXFbZQQw1AiZ6PJNAZ5sDHNFL6fkWuBrhirovjQAxXbY3cgxnij4KjgBjd3bHCS2XD7rkPjG96HyNTgR8",
  "key27": "4mzRH4LxyPaJw41HPPavgF1mGPof2yGkA2HjXAhnNWv8STMR8FXUFN5nScNNVmCA4S5NC5fBUpyGw2PXJXncWgsY",
  "key28": "47xNDQBbkvuHYj8vxWPQtBYg6KuJd6wiuSHyQ8XCk4UbxJ7iWVYVU8zdTZVTavKcuBdxZ5WcHDRZKgHE4T5qQCkY",
  "key29": "62Ro2TGrLSawRC76cacSrPxG4sTMg6hciWHodBftnG3muRwmSf5ksBTN7LR3rbV7LjASVaLEBkJ4oPZpAaibM9mM",
  "key30": "54YgyZq2HFLF1G7c8smig1yHaV9qjzCNGYaNEJ4kUdn9e1HBqp8ZcARCLRtc7eGMTdjS73N1uySsjAV3bw1kC4nP",
  "key31": "419E2MDgmB9TgubcvkERdAJNKfeJKWH3CqaYMsDvnQZPqrxAA8CHksq9XvAbAswKdwAV6UqqJmHftxJFtPawVnGu",
  "key32": "2Cq48buK3PfVJ58vYq6Ug5SXwYq4Kus6kCBa5ovxZM5p57t4XHhMHYFgUNwqiQ4S5mqEBPTYw96SAgDVRaMEU18y",
  "key33": "2BtWVmjdQvdDXB7M5GsZk3z9DBKxcHxzBJKxL5Tgft6oVdbAFBYi4T6EGpQz1YgrBHXvdFp5mSoZgyWWwPXoo3Am",
  "key34": "482DJn7KtaWqYKvR44y5WVqxAzMfEoeb878U7mZHzaTtksbfVE8KxbmJYUYC26hqDHiUEBQGvhTmWeymf329WqT7",
  "key35": "3pMA2kphXJANEVgUH3MRBJxZ1ib4xi4rxr5oHwhcokZPoGJmHZA5GYfco4KtswW1g1j624QxSJ8cZpVvXib1hLkM",
  "key36": "388PR4oEdZoovkeVp6EYY76eZpvHNPmBzsmA4cAa5efj4wSbcGKix6ZE1cDpuDFuo6As9sjNSFKBgj7ciYyj5zJQ",
  "key37": "5n5zpwbDK4r1HPjCen8ywNL7o5usAp7RoC4Lt3FRtnyaaPP6c5GpSjr4Y8yfpZeEv9U12TCu6aVfFMBujB1uTGSC",
  "key38": "4ZbctW6ECyT4AYjsfYeWFXeWuZ35HP5GAactoqU9tksGNZxskwCCuwvbQKLLrVUVG4qz9dZtYRqYKPZUhogJqhHs",
  "key39": "sWhUPA9zhJjGqfgq4m3fvif2VBFCB8HBMh2m3cGeZMqgNGZPQvxaHiZhqUtG83RD9w5J2uvLcAx4NcnZMM92TEV",
  "key40": "45aZ7Abp4Cx19tSfmpeJkM2EGrXX1rkcghqZbr9sR3KCtg27Vk5hQU8ShqEDLDt99qfL5eASkk2121g6eH43rAFx",
  "key41": "3coUus9ry2QS9eCWn8Vndnxy91jRuBfnsxsdrJncv1KnQiz8gVv6gS4NPC8s3tuYwkDAZ1Am9BuwFDHJmoRWjaQC",
  "key42": "56Azhy4TQqNJvMxV7VjWDjGydHxqU5iMeN2tZAGJS1Nt64KLcXSKCbuifMpnvck3F5zhNZGAJ2TiZWApctiSpWvG",
  "key43": "2D1tMt12Lf9fruqzSDBxPvS1fEvCMRJT8fRK91nocbg4gTax2s2FG1JtcuA9MeTY2ppxLjVwXsUohsePBnw6jYuF",
  "key44": "413KTVn6mZmPPyo63QBT3WZKJn1WpnAmc9fonwnB85X3JSZdBdN64ATZjSDi8D1QB8RJmiQuoQmApuj77eBQ4rJ5",
  "key45": "46v9L6uYowNSaEWFCpYyMBatL8DnH9jGrrLCjpfWRPe8c6HouJEJgfN6BmH6763qAwXxRjUphArMME4K6PyGK9tE",
  "key46": "4UGtky7MrLhGWWn4ZpHn4yhg7zLnspKebsWnJSLZMFA1EyMgYAvGWeXYWbQuBXfGMcb3Fqw9zmVxT6S1w3CLiqpJ",
  "key47": "4q1couF8izRYePyFqqfkPDTH2JuQsmAcBDHYDfQ3uLpR2dYH2ys8SFSnZB76Widgnwko472qHkuvCM6Q8b2pkoR8",
  "key48": "NWgM7RhWESydpiGpochkEWSdSQzzBXqCc2pQWMVvr2ZwCuNwUDzHzPD5e86XYTapy15hWVGS8AQcQvftBr8sjgv",
  "key49": "5SgM8fmLUhoW2tZfQhwkvULGEo1qdy7kpktpyM7gUwALvgxRJcYN4Li1A5kwMTVfmyEbXYLbBgQAYUdLUnh6GYEH"
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

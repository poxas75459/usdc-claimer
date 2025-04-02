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
    "iR51aWvpuaeaUrWdRTwVJTnSnn9TAB9aB8jKPNUMceBT2Cy7RkNHQqpXhBprH3x39pwADwN2AYJkHFywUBuK8ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dEGQ9GQFR8HqKPeGKvZN2BNPJHyJcwxcxnKMJ7Vxni3cf52TkRnFELAVqubqqvn4guWj8qmJGVTHzggZCkFUrJA",
  "key1": "MD8nuViPu1251H4YbsTVApQkucq3HJkLDTNmzKPi2dQptTRbcjzyRK8xvNDizcmSaCxsy5VFUHfPtJse8VoXs7N",
  "key2": "2TrVte3dDxnsU3WE57LJYcdDmSbJMEgTBj71rUw9WAyAU2muR9ujPrAduxWZEh5cn62MPaoCvcRZeJV5JGgV8GYS",
  "key3": "3RZWRZrjXSw8a7t5s6sNR5aA7YtFYV3T9RkDT9w5zU9ptgbTqzAGtbrS6jLGLCU1ZiRUcQX6uVyhGNLB13fqoywb",
  "key4": "5g8xR54Zm3NqnGQJ17D2JSz8hBWGZPgYLQBGMadBr8fSAB48y39rbhSyZmt1fEVgQQ4YadPGo1fcnVNdUNehsN7g",
  "key5": "cAhA6WDXCf8Mh1E4VMZ5KcWSoEGUXoJvWxEBtrWiT9VxDSyKJY1QxQsmWtZs4RgzVYjrDymnnbdP5JVP6PGdG2G",
  "key6": "36fLJjMzk44pJW3HNzAveUHhux8D46nZVrE3SCa6R4ekSy5tKUFi4Zg62UogNiJ4tSJ2REZVP4cZ2y5qgXjJmcJM",
  "key7": "57Jwsj9KxM2a3KNYcvMr7UXsPTc8cdrMfwnWtzg9T6wLcF8mQoiHHvWimfj3fLert1kqw2K1RfGoXw9D3Ut3SwqK",
  "key8": "2oqpJsewH6nPoYR4qntyyD1jWMXm5dqaeNzqGzX69sdkFBb6WCVeoh5LBFCKXYd3PpJatMFG53JPzRkKGL5yvhyB",
  "key9": "CEi6uEgEJWYjCcpqZE48zG7ZHQ28zo8s1cFkmt2J3eWuzR6UuBarGvmKhvrbTKnwDQip9B8LHcEGd4hq4S8qqXB",
  "key10": "2skvczthWapj7gfFLJh8xWWhDrLGY4rL59cT5wzUsMKmT1YJjw4YunEiSAsXR343bfnNzgiVKZnNMXgfJm66g8cE",
  "key11": "3u1dYMPc6byBcpdBv3wcRRrgN11E3JN4oiAXBo17EK8wZwwoUrmdHtdMvwBWaz1EXti5Ysi1VBepJvbNERwt6GHN",
  "key12": "eowRD5yuxvGmoUPjmNR6pUnBjRNapmLHSFnYX227MydsgZzNmUNRV8C4PC79sigTYxjfeQ7aqVrZ8r9Uvbp7Pem",
  "key13": "4QuP4wCTYLUCqXzzffBkyrN6TGi9uud1iDWjQkXiKrCHRStAFEdzmQhmLzR16cy1kFUMwRtSC8JWWUH71mVxb7A5",
  "key14": "4eAWvc9aj5NdyL2KMDsuuAyZWjCKytKwZGugvZbNxZ3yR3VrseraNHxEFWuhEU7UVkCA6tFVsu11Qvx7TxHj2caj",
  "key15": "2mZ1HkQ1UsPsHTuR3uWgUNRFTqEccC7Qyx9D83rwVFZZqjEuoKHEhAmH9dRRDCc3i65HSFmboUiRoAwizeK8ZyEr",
  "key16": "2ojcatVGHyadXwPBS6evMVLR9gtncwjTVSpSuykAfmLZhmGNU4YRa61gCY9df2YXgsgtJvSt8tqsxWstdgH8qb3y",
  "key17": "ATrfkYevhsKk7rwJQ47bYSYAE2B4s5xaFjpgsfJWxMRNtjD5c1g8Wqceimki753GH5245cJk8T8WbGrKKiypzZ8",
  "key18": "4A9yacQzWLP6Dx2T4QEWrQMfYWiwZX8YHK69bUy9pQcBRwKnwLZJtNvmBW5mhtqu9Vz81m6MyRsXw6AempMp5Xcf",
  "key19": "4gUHg1aVq5CgHp8qhf7BZXKPaqwrinXyw4koXMJ7x7aYF2HE15aJEx9eKhvzy67nUogHx5e3siosaLbVusxBb8LB",
  "key20": "K8d87QyLDa6vNtA7T8HRwXsfxnR6kdvzinnAXzx4qjB6FrYZRHoF7vBioz6uv1rZm5PMbMLfi2drQ4ZZdsZ4J9M",
  "key21": "3PtiBMrQjJj5YVR7x1L8AzfHoodhC7RUAqh9KwWdgguuutsxPpWuGQGvdpx918nw7wDJFRAmHK4sKk1VX1sLePHn",
  "key22": "L3gPGaoP58KbefASXASAZk9PMejqHMd8oGWqFuTmCB4vMTmHdevRznfdga82GyMs2sTaME43hpMpcsrR4wzCSVw",
  "key23": "34QbjeDt8nhHL1n1GUbU6q2JSUKZpUHiBTRwsC9ysrb2DHEXe4j5LfWV1DKknUjd8gpW2xvYAKjxbbRcMQ17rs53",
  "key24": "Qp6jNsYj2v1vAgYBf1iWvGEXMcgG4p6RkYoLV4oFWSJjm2EjKWMBi78oqph54tht2facqvCHCcZKsNkzPyNA6R5",
  "key25": "598fywjkRxQg8HLTVfpMwa3s937tUeaURTp1zveMN5o5rh1omKxx1785fmd6P7yV5TRhoVEQpnJ1HsEVjK4o6oUp",
  "key26": "2g3ozkDyun9RxV9tmD5UhNR2Y6XyzPUbq4gVSDETb5LrEtXtPdDKKCjj7feDnVdU2GwqckWe2Z3ZUxY3dHkDZ1ND",
  "key27": "38bZS4TqaX7oQ2Dp8hVmmqQubEPGTzvSbxukH19Y9YoJu794wP7CLPbz3MjvVgvVFeSLDZxyxzAzzijvfhXDLKSU",
  "key28": "3qd1hNWNrWGHzr1G7meJ9MjyL6G1oMYQnz31VhRWiddErFJArpexyDtYuwoGPmmwGAkJLizD5stM5uwaThPXB6oY",
  "key29": "vqg6vLEzQFALDFmrV3x29ZutPf3Ycuxzsdc2wjuatZb9VEEWEmioRrgDQRzDt2PLzD2gcvzFMhfnCg8SoyH9C27",
  "key30": "pRq8EmHo1srbxP5qDCz9wpWtQLHh7XFJvBo7tL1G3LVLRvVDaagDCrKWfbkRsDmzjveaDdefVqDPvBdpFagK4rN",
  "key31": "2JLxZjwCjhvaB9Zt83ZgG4yyB4tn9sn16H7uEu1mASgiPN7rbBTU4FszEDoVEBxPbRk9T3aqzARNg1eAQBEJCg3j",
  "key32": "52b5j3TqeGh8UL3TNAYiq5pNn9Hckty6opmVHwBU5UHWk7nggdiwsRdu8mhKrPURCkqHSpyVixSJd8QuAdArNm57",
  "key33": "pgJ6fo1NGAZecHCrzC9AM1phfEFbrgViDRQheKxQFxqefgpJYVYkZh2SAiD6WzMazBykP3k7SajLFzNLQAFJCwv",
  "key34": "pVvN52mi5P2ZL9zKyTDwK6UVZRrxQ836dM4KfLJRViV6Qyj3fA23DutCuju4oi6ibjEcRHLaGVJ55jmMuJWi8YJ",
  "key35": "TqVWon4MeJK4E7Um2kYeRuNxUiaSV6UdatVLEgPYvEKGw3Cy8xHHwDEptGQfnWa1DSaxjyUk7iGwEQDj14toonF",
  "key36": "5Fk7JKV4fhk2DarPqPsbTSspWU9hLMRgeGmU76orZpuVECEFseC3gjAdZjSc9EB9KRSRD2sxWP6QMEVkVAsHGotq",
  "key37": "5g3FfGLDg3codfzMTTEZvqpZydNJwX268PgmaNJ6ri7sGPHBezV8LBe2uiebzXp95r2vAN6N6GnYMaLq98G8mmVw",
  "key38": "4bZACtW1y2opvAtmoRmUb6v3poXpNph4ooTphDuLVxxUy4outN39UC8Ytj9kn27kwWfaLxRKH7JiLz7iG6psB9L7",
  "key39": "2uNiMEgYVkYtLbXVcKsuBCUVVTbAvrV3Tj2MN5BFC1shGnibWPqveyscPo8mPtDKT7heKCtgTWaqQmq6jqJquACq",
  "key40": "3fX2TVQzP4YWyn9nUkwk9KHohWwGdySkdp4Kxgp5jNiPcqg8V9fZ94J5GwHv4vM3fSgcBDJeqr3ZwpTspryFdGbu",
  "key41": "5YKZTSVbjyfpEinpzM1nA62rGgtcncujMoTyZ3z6VNZb672smVePMDTub8gt1eCHyujDyqzV7vrESqD8kBNJT29G",
  "key42": "sbnu5vYEKLZJRPXQnT5aPDjZH1d9r7MzW7NAdzNBz8okdpC7WCfeRA16ReP9ZrQXxPV8ogDSG9o4zojYhcnAXmL",
  "key43": "4k3oudks1NKpqjiDrxR1tj7U23841qp9ievyETgjnvAUr53B2ADHn51tS2X9mm6pP7wLQsd87XNxJLexyCSHxUJt",
  "key44": "5sjAd5bs1TmvaJpG7agA6MHzyjpNMmvWDspNYRVZQePi5hEkPagPXVpJHGsrWjMp1R8E6TxfxBfJyWzEgGQMZtQJ",
  "key45": "346u3gvjGMnbYk8KMdGLGWPTensKgDKL3vVdqStTT7XGTmARAL4N3hSeP2oUnKx6SP3szXrX9A9DVMw787Sr8tTh",
  "key46": "Tx9kKvk6wdmNXvLVwp9C6d3mP1ntmmJQUZXPY25PMEDNK7Tn4qstzQ4hk4MGn7jHVT1U29KjUrLtRDG6dBg7D1E",
  "key47": "4xMvXpyASZ6r4HFNHMeTiuZemLijs3mQJcdSnFCSUQYcz7mGGfxBMt144qQcSKc87P9pSmSHePkEq9w1dsURa8c1",
  "key48": "4obzoVPoy97zhcypU2P1yc1xx2aekytSrfVBZXaYAexbtfWEswurTf5gRmRiHas1GK5PRb9Z64AbD7fVygqCL3rg",
  "key49": "2KtncW933e6kwZEYj2WGptVjrR7pVgoDxSitTVgiamhmc6DE9Ezj3WrZ7qAWz8r3ESCJh4dJYzk9vsr2BpM6izgw"
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

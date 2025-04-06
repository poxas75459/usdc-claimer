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
    "4MCXpqhKzi5t4dsJL7LbpR15BboVeA9qJjaN4zhrENjgUaV2MUNnQdqfZcNAY8v3w7xwdAP96PEDzEsa2m2XtUii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suQXkGmn2cVyGG1aEZ7e2bQScj69EGMHM82ffYkp7pdCfcPvffkZVDXPmdTS1j6mE74rzADsHfyKD3rj1gp1qhA",
  "key1": "3wsxRY5Z5qK1X9YqTk2duLEB4a6noVpesUbZFwzTaMNFjctkGBzeZKHDUJB1WLrx5Y63fMDKdtaPA6E4PojRtJfv",
  "key2": "4H16aGBUcipDK57qsa4kMLPSfDUpbNyCspkjwdrNtNZQ5VuhxMDy4A2oe5zJhMiAUjj6UqUY3LejrP6XJMNvcUwZ",
  "key3": "4UhBXBwM3KP98dgtvA49hZrX38tswf4jV5T8hCwFzrkYru7wguy3ndjxMMpAhGjZAvRpo8AqewpzPBrMXkSAHeqY",
  "key4": "471ZKpyHMVQKmT44TYDgMN6AXDR1RCG18ScP22zS76aZNHhSVTe893qNsEZnYQ4gVkNSACPwc1thNH9qPT8u9bCJ",
  "key5": "3vAcXAbwiEU9qdgqAN5Fzxh3kAMpxRW97f161KfSyBdkFMn8TZREfC1wyEjkMDJPANPv73cH8ivo8bhiuvZMStcx",
  "key6": "4oMyK29cue7vKytN7tt6aUcZUqerfuDGMUryZn3PZ6dHexSS3nivfSvqoSWTnHK9qofWRvBYbAeQiBXAF33h4wi7",
  "key7": "1NBXwkvvUKUikSj9r8TgHizYni8ND3cakNEBZ6Vu1XA5bTshLyiqEy4eAPx76V67uh6X4fFckNjeyKHMcRbxkYr",
  "key8": "4BWNsatQG2zV4rFrFgnX1Se3kEnMmywCoBPrHGRsVh51FQ2VLhjcW6USxrzEJjaJ6MMU7Vu31duQ5wNVy2cT29Wu",
  "key9": "foz2SziDGQ1NBkSbfgeTMRRvqeBcXgCDLwSDZ8GiybFrXPjCrfswC1XhChV6i98ReXTtTFzrQb4K2gPwgdtYLvr",
  "key10": "4f3wEhbCkEnPsJhJJDNhg39yoqjbwAvXGGCNQr18Y9Nx1rz1sSVNcPP2DCa893cgB5eKvY1jvAE7ApQcqU6wpvxh",
  "key11": "3nrA4gMUX5cF1jhcwjDtYJWiMxwt56AGBKjUk8dnSDMBKo8uuRSkfJX7gk2po3ZdaLDLp4SESkKPvPik8kdvfgB3",
  "key12": "gFXXzSbf4yXRwjZfXZqEAHYWgdjZcKDcWLUr5dFVtJxarEmMNAdkvworbYRyEQFAKR3Ho9JUchZX4DLnxqfHg13",
  "key13": "2Up8BGsCEQNUHiuBNqQvaukbojrBaQKe55LFzRrdqSjEDKN2eR1nSCPvh8q8DCf53gQtGbJWFVnH1jpKXvX8tBxJ",
  "key14": "4Q9HLPdda54quHoRGVuMiSGZhkgudzjvzwKQ13RG19W3Kyp5uWV9QjSiiiB7VjQKaaGds8b55H8TdajBtXU5aacx",
  "key15": "4G2Ua2tQRtRPPCMttmmMB77yD3ifhLH5tBox65gnccFYgx8wvXrwVsGQWchW1umDBCUKenv8q2RmhAYDQjNdoNHf",
  "key16": "2dimRiWKuQUGxrg4XUqQJr4NFJTSUWFmvX9UfG8QRQcbxctnAd7agUaKCHo3YA8gb6MUwyroB9YVTPHDofaMsnr9",
  "key17": "48ZzZ23ynbrXhm3aahNo4t7X4Lmx3mR75Xvkca4Jea7ak2nDrNPfyYVTgSjiLWJYvCrZBA5wu3QrCwjkB9LcEbKc",
  "key18": "2YHdNJ6AF8jwbgJhwMn2qh9et9aoLixq6JModyajHDD8FxTrnbgHFfUZ73HpqdHGYAfbXCkrKbaQ3eSGyWJPuGbJ",
  "key19": "2ZvjDc93H1hgs1fKd1wrt8rewAhzLpPJqxPDwrsgkpwBeffHVQ1xWwLwTZrDF6xw85VTxDrjxSUv2PisXTgPv2Rc",
  "key20": "5L9jXWo4FkLBEr4LJjdYTpbdpqBqtTva96Bv7Cqwv4QiDtD3fSJRapngcujrEeG5KZre8wF22RCCNiZLxG8W6HXG",
  "key21": "5h9z5hwpBKMTnVLY2EZ1W5HnCoRLyC5mAEpvdS9bNERTQNUKPjmGD4AKXPKEYy9ABdKXRFiuyxkiutdAtUvsVMxh",
  "key22": "2bzLGZnaT73bCi5basHkG3jm5g2CivXmgCw1gV7jggXDdBQ85fbQ2iTG9v4Fzgqw7A798kdzftakPXGAW555kZbM",
  "key23": "EHSqXiTzr6fhkggyFsFE6fszAobXvsZrggQPLErYL9LoLafWi7GPWn7e9wo5mxoq7A9C2fZKutW9nRJhtpXgofj",
  "key24": "mGfApjBPXwvuA1aErJhkKyzQuMtMKZLjB6GXd5Q9CRdkYEoGRhVuzZhxS2XgJtaGt6HnEHKKrEyrqU6dgzWQgcJ",
  "key25": "4oYdJXpsn7e3VqZ3idByj8EHuVXQP2JvYpzRtNLGMs8B21VuQjmnRmBSq1Zj4EuGyY2GVeeFe2PjayYMHKUEsbth",
  "key26": "4VbxzVSMu75JK4sC6odTgkbjheeKjE5wceGDiGu7pvinSRvy1HUFMry6v9ooU3wsBSWSMkcAYdvTv9AhGSF6u7aC",
  "key27": "PNTQv33YbxgWVqYZj2usPL3ARDMPRPY3nbeszKkq3fgJgYLkfkEZfbmoyiYHguUvSjFQRCGm4m31btHMFd84dU5",
  "key28": "9HHPNtGN8cBHYC5f5eBntpcfAuf6bM8zTEQzzNXq8FwnhCBDuAhuozGtCYKXYZfi6ZPMpipdnapUXou1Msfd4zR",
  "key29": "v1roWzMsetMQsKkrivfCvFUb4KHSssK84KfaoHJwxMf8GRHd4MxVosx2nWSnaP6Gg1xuykJ6xv53FqqptgHbmkH",
  "key30": "534Fdyx1HRgf8KhghggNyNYanCRg98Gc2GDMxcv14fCJjqdD5kdyKMoKaM8iGRy1cM8YZmS5sxZV3MECJSkrq3f2",
  "key31": "4aMqR7mTEHpsq5k1MN58kZgeNN41YVnkpfSJ6G8QDW8GuHF9sYZnRkazn5QGtCoweugv5M7bwdDi6kn58WAH87kf",
  "key32": "5UX27DtptQvmg5aW2FNqwySp3BQ3VxKkAtPTdjFRiFSizNwq5dxuo7arpjo2EusrUasXbAW42BwK7TNsGgohxf9D",
  "key33": "28TYsrMCD1ZcoCASP49RFZrAvG1VZTFsou4NQJfAyP7JCBF8mMHYNMgz5tyCJN82dLmBKYBEbREsiiYUs4jtvagu",
  "key34": "62MoFGddjWZtCuWgUS3FXZXCeDTYUEWtYnmfz6cEbeZPu6YBGk84KUovBkrxFEzHtXNZiRcwN6TXoSjTeqqwKnu8",
  "key35": "4iD25UnH3T28fsxAbqxYAf1SsqPdAiB5o8RnAjvyxEKzgrPG5rLTDxjUqMBDr7d5eFd4CfDrSZmXWwcNVT9AWf2r",
  "key36": "5sYUpg1yYMAwoRPv7jkrW3WVzfQhEXe1zg6N2ZxF8KSV8A36Qu6gyr3ief8ULLjdsh2pNPbfV1fm3RSJFAxCSxxm",
  "key37": "4BoxTAihagtyMg6e854GtgWtWiK2X7QwXdV1nD6tnL1wrJ63H4N48fALAxqBq4a9di4vL21HMmjL2NTNhvxgKuWk"
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

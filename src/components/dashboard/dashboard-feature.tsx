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
    "3Ltp5LSSStLDgQwzv2D7er1gpnsxyPPBYmg3jdwT8gkwpv9zx2fvE7kLhXeGbBXQpuLJCqB8XV4FsiM7nftG1YgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psABcKDDebuuVvBkdPKj6CfiBk8BP5HNMn2z2A6oewjVnrVoUT3e968uSqTHjijxQ75ovvvPPBwjTt48XFL2S73",
  "key1": "4aHh3GA2qbTmW87SfJMRkqyeRRHDXjyf9d4dSuByeje9L96SnEdm1VBTWjWykpWAsYkJxAPJ3bXkNZthRzDFuSvK",
  "key2": "4nV1gyeZWNFuCenjUbhvmmjmxvoBsA3wjZXBb61CJU4WGxRGdEafxBmyfmvtTH4udBxED4QM4z5TKjwAtAkn2VH1",
  "key3": "3dWJNbDPNdxJMiM7k3KsNJH36RYDPsHtSXmP4uUvyuRDouKX8JwrnLm11mH5HCQ8ivzvJBjKqqfh9jTmsbvitRds",
  "key4": "4STVaaqmBT7tDENwhxpZx6L7QSCJC4kkqdwPf2YWQQnrT76ogwhG6hkcQ3MDjcyvj9RZvSNsr2cfmhWbDkS6jCTJ",
  "key5": "4D8vAoGKYzuhSwvasb6LikAdZeEChukmRESM5m74on23A9PYVXV4sQFD8ZSYGUSBDZWPLeqFa6sfp5yjyXqt5m4G",
  "key6": "3bYv8vVJviVE64SwEhyr94RvyuUZHFzu5aH1DpcHjYaBuFSjGwYD9VLxNccxfRnz8r3dGXCNVx1ENnMjcpb5fTcg",
  "key7": "4C8igBYwHjgsyBTyX17hppGQATEMu1h43DH6LcPznWMfAFCNpNAo9L1E8iT6pqHh5E7WYaNK7NVWxoUYfBj9hUQm",
  "key8": "3yQapunoC7Ki9QjzAbarSvq4YX1dPrtW6gxYFa2vf7BhMA6cmg3NNBV21JLPnCjgewXqemdLBobiqCWwLyEBkUkm",
  "key9": "42SbiPQhvEaNM3SXfDUsZhewMCdgFsziWSA5GMZAJNoH6c2q1bxuRFDtXfR4m4YvdupXK71h2Bv9zugBSEdtf9PE",
  "key10": "5cAJW4EBgTjzpD25KzXauCuB2fnbNH39FXUJPheD6emSPkJvpynJRVXEc6PKbxYEU7ULwANcyYbP7BGs5zv9PntQ",
  "key11": "4Cp95DLCGwgPagu7Nqxn6sueczRFfTJ8smD2d1j4ZTVnLi916u2oSRPNRSXWQxsBwujVXGztYAUfkmLEtfdPAqhQ",
  "key12": "34YfNpEBFigNnFkVrCVLUrpMcLR42NzWVcwQxaTcBfEf4gV57QQHavN4pC8w6ART2SH8MrKXJeQhd5PYQTYbtWoZ",
  "key13": "xcZ6rRnnrXkke3WbjBwR5MTFEmM49zvSBSWCcghN7ESvG4iygCBYzmUw6unATf6N1dsgdV8AkaPJFxVkEqb9gsm",
  "key14": "4wVedzEZejhVacZRcxBqycwjCTSAaF3PBNmjLqVPoYnPKKdyTb8xASchdjusFyf7fsDPASjrUYmbQUJiWNz6htSF",
  "key15": "pn75Bxnadu6WYaxSbapDpwYQ8QePFByav4kNVR3NNeQyciyATeYnd7WLLzBntgmq5WmivCRjxPauTGDgkVBavSh",
  "key16": "5sQkQ1dS7M4Mj4XnQckpz5P5iZpEbvKT5tGE5Mmh59zLP2CthyCKXv18WTTfe4CEdUxiaLos2DokRS1Dqdu8gXtA",
  "key17": "5D9uWnKcGGqm79kLWZASPFmpZWhNderBoR8B8yaXwWMx7PTf6A8jwiKB9oPmgmkoFRR7qs8ept6voj4M4f1RuvSA",
  "key18": "53NPtkawQQJPRyswTQf2scbp41C9vzotwctkvuMejjMnuu3FtopPa5EYdwhnoE1vHPosJ21mfgFwsP6P38FFS1qM",
  "key19": "5QFrwpxSa3yn2aAu6UGuMHKoD7LiwpjJ2z486fLuaiFNw27pfhzBrZQWFf5EyCbYvXSoAxB8SyDh4Rqzp4pAxm6M",
  "key20": "3MYQn8tDz3xG3X1iUktgQioZ3TtFHPJsSyov5e4zz3iAHGVp9Zr7sEPu6mQKMhtMe5ZJS8ScUrfn9AVobnhbSGiQ",
  "key21": "giLQutkMH6YNE6CgAW3QsDHAo9X8pPLsv8cL8MMA6QYut1aUcuduVfWEUEENTonTPNk4MHuXx2ng5wBtrpJSuqL",
  "key22": "5K3DGMuafSFN4xnkJr1KkVoiZ8iJhfg5pso2Hrzw2WXQtij9VyvaNVuWLiftEN4eKByf8bh8BMPtHDQ3b447kb73",
  "key23": "312yw89i1q6Yk4ikxqcVGh2X4G7FJkB1te9iuuPq4DaL7n6x7Eb92csPuQVBtEc7ZisuhT2ALWpDu9BqcgPBYaPq",
  "key24": "47PF6EM9j3JXGVb8cdxjqpCY6gqPbQxSAB2TgCJcv9eEvis9WVM6Krfi62WiCBT654p6fVQH7GypJRHZaCDpvTcZ",
  "key25": "2XuSM1SgEA6S6r49SQUAJD46hJRgw4wyUSoKfm8YZPjPXVKxa6coD4BxvQxEZxkrE1SxRDmPngic6pFdYf8zroa2",
  "key26": "33Dtxq6aN2RhsxveoAEDtnuhJDeMDJ9jVMyGjZjKexpmeoxjQkKtsYnHjpqvoMdMiR8MnTSqRWdsyru2LNV6vLmT",
  "key27": "WH1QfLboDhizLHKQQtYWawRPPQ2dq2z7acR9BBJjNXwqeq5vK1pW4PXGfRe51eYWVLvSEGq5akWaWaXGC2d8ztc",
  "key28": "62gUAPNZg5MvkSs2g3JpZKBtNGr552a5Yz9cnpqWTru3hdwxwbPnANdPLoANyhvddLmuHv3jsrc9pit99w6koXcT",
  "key29": "27J4xD92cC62aK2cPD3PZ55SJ2A8nXRmtMLz1MghFYti6AGeQLuR4Cr4CwyYP65YoN6shGYRADQwyCJAtDTtiEg3",
  "key30": "3acUiLBtXEg64W2rdJjFynsAZdYdGwv9WTFtGCDBAGW3Fm87z53hxoQNPgeHV246fb1CYmghjSgPcgfMoUZaAuvk",
  "key31": "qg9piawijqnL71z5wYY9qBv5tRRwiqQzaK93cqgk3fZeQWr55mfCM4LL9dfpS5YgNH8Ro5wYCym77diKHjyWBkL",
  "key32": "S1K7HNNK5nzVKybnaCfnsUtFdBcwesdnShGrNEA9XPwZzot9T3NjGXFQVguEJx87SPyHw3HwawdaZFZ5uME4vBJ",
  "key33": "napDk67TVYqtc4Tf4KznRb5mPHP3B5bQScsVKpA14Q8B2YhPL4tB1Lqd5T788WutBkg6JdJyNPPWM8WDZ5dQviB",
  "key34": "5xkTfNMKqFT9Ergih4KYKeqLCHXR2cJebVWmcXSn2SFpZayugWdxu5Am93NhCXYUFqK1ctLgxThNo9hv82Vp22Mm",
  "key35": "3PTVBhzKcJeiJ4c5BPCSjfYXFR1DKBs9KMgkFKpF67BGb4iFdmXzFfXphixgwZFJWzqRw9GCDwn87gE9XwTZNtB4",
  "key36": "4nthGfNyUdzqU7VpMVSjfh2qUcTooejMUPRyboGJxTBKfXKWYkKrtHEPrdoog62pG8qshFXNxRkt3E9SCkvEK1Sz"
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

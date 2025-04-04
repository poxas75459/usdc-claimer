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
    "5eVtwKRANmQKzxU14shCTK8b4Cimq3Dw2xbweyCSyKhYSyu8q59LrZd1F2Bvef8Cs4vB2UsXqKM8TEbSoURJxz68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdXZXiUjDwD5nETLvZxCvv533wkzbzBLg6wCv3aAb6uPKhMB2uJbVv4ya8T2va4aoqxRy18NY6bqe13vj5ijwLY",
  "key1": "rBpwwoL6bYneDQ4rJQ3AzkZutzxczuB4uWw4bwf7PLHHnjkiKe7DvSTRCP7Afvo3xAogaE9rgGiif99JnRz7zFv",
  "key2": "5U3djDkgNvrNDTM7bjW4F1SvseMJHwP6pzt4GiYX6tGHdh4oTBU3K7hbiWxBmrpMjDzqPN8q7hfZn6qEhmHkgB8q",
  "key3": "49DP2Cqrp92hQ2F45km7cTDVdVHZrhzb9ZCyjUuK7LE9XTf13RGCSZ9UMiJJNG1Vfv5TohNt54mH2fH38UCFvQYM",
  "key4": "5TWtqDEfqJQwv6tsEXM9PXrpHtrMKyESZPdgQ7fzAo56DmQNQK3oq4cqJVxkCdTLEq5KBP1Ws6XcnHVRFxDg5SJ9",
  "key5": "j6gKyu6QzfMP2t5azEouTXEFz55Rtiyaej8E3VftkWbsP7KNSp7DUQopVQXJfVh57UTuL8sTFkq7cxaYHcnrVY8",
  "key6": "63WR7opfLH21kGhH48aryahHc3VD46KQWqm9bYveMMpy3kwSXnSHRtVZUWmAc1hbo4DTbY13D72g1JxSZXPn1u5o",
  "key7": "3NWURwP6bwkeaPHTbJwVCLGZMkKb5msULmAjeMP7UoyU2BRRURqGRaL5TsH7QzYWdpctqmd4wzJXcoL6Ro1mc2hk",
  "key8": "42E5AaRPpP3rgsiBb9WCmxnbsfBQj36suUMPLkjwLHHVcNurJa5HMbUkGTDFvg4UA7RZZ4vpwS6QVuSFZkr1Ao9d",
  "key9": "2PM6xcgxG1LJB8ZhKB7zZHzDEeSabyVekCLcoFMSsTzE9VjLaVVVbW5pkfGFgMyAK9fzwfy8RD4kPH47maRDcuBL",
  "key10": "4TXL8jUxCEqwfwwvdv5r12cVyFp6ci8T5X1qaKQCB27gVBL8ihdTFAxij6zJcc6dAKQSHuHGXUiAbgHgW7QUJj4T",
  "key11": "3c5ApBBd1G69bqtFWxjtJD4SanNgJcPE77vTDmwawGAq8J1N4sp1fjFuhEqBwyxqU4egT6MopWW1t9vVjfRuHCcD",
  "key12": "49ce97RkutyteK8NuE93UvEAfQcyVPyqh4Zw9KVgXsGF1L2wwwX4X487FfkXd9wusuZwgWrPF7DyHaiNJSYsepTt",
  "key13": "516V5PeWvtGdHzXoQmBeDLpL2gwdWSCw1LZHJxGu725EUPpYNS1Uc2EkPuDKSpY7SVYVF5d973q8XzMx4T7vfKv4",
  "key14": "3gMVFCJSencsF3TJUY6AYHKNWEH2n2BY3Mo3yVzVySdiZq4DrEu3ycrqucYZFfbSV9dXbNrta8zhGKrU5JUkfvW3",
  "key15": "3eoYuyBoEr47DM8FeDDRqR2QjzoXJhbzvYypXbKbXjZ6W82QAiS5QvK1Zrkevrd5BbQZV1WtXWyn5xwZPxEWNCAc",
  "key16": "5GHWTGAdCpd4LwbShap456CRPDKYmeZSqZHHSdo85C2hjLUsTigWAXcCGDbSWC5f3vrJuQXMx1FkhEoAwkPJpWYd",
  "key17": "2SsZ3pETUad132fChfuFY6DDfD117m588uKquwSDwRC5tzK45wSX1jiMbuipfDXVmipz3dGsLYjFUDRYkXSA8Yhb",
  "key18": "25fpXHssymRwg5BysrFkDmkJyAJSBr7wsgCHpT9NL3WiynNFCuPw8LKxQXruikZ5udaB28mV3MR2b6h9TGgA2ucd",
  "key19": "4tq6p8GV2QW4pagL2DGp24WAtyAwGa13pqYX8kpfbzVcgAedh5RmyyYhpYFAP8u4eMRWAf8hVfia4xduFuqP6mc8",
  "key20": "2o3iX9VVNDTuUDdJApTjmy7uGPJiMyeGUfJ2Vxpmjeb9uhSy8qgaV1h4SkZhnrEdN7ksAW9F2ozVCKdmbtR77hbf",
  "key21": "2wgfLAUqTp8tS9h7EgNj72Aa7WM6Tz4eeXMxJkDoNLU389bHs6tXkU7YRC8HZ1U64SXXungtiQWu6bhjFZKnkafp",
  "key22": "5HkKntCQWNVjpRssuF5jhU6XgHQB785j1do2H9azm1uFr79r5YaVdPViRNBBccBukqxFHD7iS11iHbYbFAGeNdo4",
  "key23": "5DxRUkz8Uj7xXvheR5dpvZUVQ7qHL5HeKkgb45F6i2JhVk3PAPckmgVdpnmzoqW95YNvSQf371UK857s5uCHd4p7",
  "key24": "37HPwFBC97e246kKcDJQfTH4iW21rpqJmPa5GWsTE6agx4NHuRpUtvU3JMRAvuojZk6MU8YdcyXoiVuaSxg7GnRy",
  "key25": "45vzX99bFJibDFzBKyxMiQWiQXYGM5wbtZECYCp2YDrBp3xGv4qGHE4CLRLounioq3ZfNReJjGysb3ftd548DjrU",
  "key26": "ZPCtMM2SgQ7qpkHzT3FdVuS2xxcds3FKTk5HavoRyZK846jeockAwoAJoWYcSoDdFM6GyyJav7p9YtKxPNYaEVD",
  "key27": "wgv7vTcQt8Trx2bTkA2DJM4nWgzRpE1UCEStHUEkQsuV4E4UD3AwxYFDt94vw1ZAjAEkhBsTJAmm87C2zaTcaNh",
  "key28": "3XLNKiCoexTdpERjPYZM5MbihCZ5Z4MbQXGFBSRtcgqkCYUxZCa5DSsX61HyW7tURvm8gXxh1LXQWpXsC4z2tAHJ",
  "key29": "4tbR4Fm616WXY3CAPThqCrPdZLeMYjstpZPBKaP5CHJiMWFbmRzhUfUjpRBZLa7viJajkSFHPgkLyR4CUfs7dB6M",
  "key30": "DiNXDkkHAgDqZx41VJNa2SG1VtBT4m6LJ49aVoizwYhRPs78qMm6uoM3wc1iDpHvZs2dwjH8Mm8hhpXdSn23pSS",
  "key31": "3GQGpRv8uV2yM9QVbztR8JzwApRywtNCiSroWo6a11Dea47G45FQUnLxqWRWmEPWufaVkUmBeyg7LNkeiynJmn6C",
  "key32": "67dwJax3cw2y3iQk9QWk942dd55bxKvUz4nJrY3w9GKSZsvMewcFP2RVi6rpTxAkWzLQmFVhuo4Z1uYdupY2q2en",
  "key33": "4a6nC41dmm5u7Bvgp1RkjtNcG65BmdsiX3Qaw7ow2nS2jrBJEPbjxfqYmuf89gykUqJCHv3Zbn1MRfbAUkGQS7wF",
  "key34": "4EuFyPZB6N2EYk9cCBC1SCnxYhXy3HrMZ1eJEyumJkzhBZ1NbjAhoLSVidxzP63d9ZmSXv7RFeicJxtAAnAzxip3",
  "key35": "4ssYqLgAygzoke1VYRTWTfR3Yg7Sdq8cJ4woEm1PoaGvge7ZBZMjZ9P5XDsxa7as8EMCMsb5UypgktDfs2b5ZCBK",
  "key36": "4YWE9hfLmtMGL5YChbhhnptcaiBLfU5jiFTZbNoSFfvksf3my5z1hRi1NuPx3HD97pSqbQArf4ch2PoCHhLeBgvt",
  "key37": "4drLLdw6oEyfQUqixSz8uKa8jKsdsuvDLmyEhYu1TYEvkLK1EqD94pM1qJ5LSJTq2DJsNFzxfSLgyeZCk4mhGMj8",
  "key38": "2Y25JqSFsDsBf8V2rgajB2VwK8GjM3PxnpbuAPh5fyUH26DR9fiJpbSURF3K6ji2cKnva98nudLyMcCr7cXYKwRq",
  "key39": "2ugWxaA5oav3BVhR6FQMfmtUSz4YoVgiVgWL5P2yM4V9uRRW3A1K71DSxn1HL96xe3g3JkDHRa2WTRo8HyB9Dgag",
  "key40": "4ASaNPSW8PY8Bym6488YmALYzZGoQxtuBPEJuZq2Fwdgx1wki9UNu2bcXEJGsjLrnjSn5HNdQ2u1f2csNpvR7nHC",
  "key41": "A4VY4dYagp7TPkwa9YsxdGPueV9LYeuCvvqTqbijhBb8XDLSg5SBchqGRi92w6wbcaHpEB6fVtW3o2VoTa6f1NN",
  "key42": "5scwK4vekWc1S4rzwGKa65gQRNoxQ4evD6YLNM5ovKdwqNH7hjXvcYwr6bopxuPAkS4LxCX5jj8kRkEhPE5CJZhJ"
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

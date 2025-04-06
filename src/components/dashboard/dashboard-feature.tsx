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
    "3RFTbTavbVTxrYSLDJQSwRiPQANtsVeuX21DR63FHE6m7LDyQuKtTviU45NgTepTCrMTdhifUA2couKSZmsMiUzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvsiLDhVDjaTUhp4hNv4QaTyVPP2ciD9hMigEDZPZhxLmwbJ7SbaW5FTgVTeHQXmKfSDGwqbroSorYriaVgL1pU",
  "key1": "3ARS8ZBYWLR2QbCA9MvJMMGqwJhPkD6JofU4XmgMDJwKvxVWY4unXxE9WG7dc2aZxZPrkCnzVb12xcPfCtMopu3t",
  "key2": "2EAkFmoBoyG8MGcP1siRQvhHtGJc3aPFZQjwQegWYDGrBBRiLwrBUbsNYDDnjdiEcmLTB8xz33U22qgJYWbCkT5G",
  "key3": "5ThvehLq6fG8RQdSUiMQHW65iE1je8nsJPs4k68MUu2yph47fuEf65ynptZJ5LJr9q6WHZtrdVoW8d2RQ7yKq6Ad",
  "key4": "2ZVXzYycVe3idTRjKy1McmrNJ92Fz4EjoCobEixfz2oW1VKGZr1mybJ94sHG3qmBCC3o15Mhbrue74z1zW3WpxEi",
  "key5": "4bqsYyWhcy7KWzSxSzRzBJURCeytqMZ5U22VXbxEgAQ2XBmemEdih14TyEDtHeYCYHJSLKwsfivxPCPkQyTDPg4e",
  "key6": "2JoDvnjCPkBhnoU1853DmeHdyW2ouupNu141c8zzLW6MLp58RfT2PpyjYiLqDMyu8Yf13nEa93X1j37UwSqWR2EE",
  "key7": "4p2G2YeVP8GwgrZhZSBVZhdGcjyfED3Fix2uJkNn2x2KABwtWiwNYCSEh6uZ5YxiJzcJsSh1kuhdf3HH5gUmj6cH",
  "key8": "vLBbZFU5nHiXVvLvAWaHPnpnsqRmFMWQco8vc5DSsT15yK7y6EGX3xkmkB9Y2iK2ETRLyoS3bHz3ZvSbzTSYaeN",
  "key9": "4egReG94fLHSXFgnqJMTuB9CGcE7dQsamtnchXsNuTHMiQW1gLYrKvY5kmEAtetQjXPD2Xm3mT5eULF5hma8uGrf",
  "key10": "2kAa86zLeqKqti4e1dxt9ZKHrt87YELLnmY4eLerCVn5ysMtrHB2FkJ2cXLjuqi5j5ZpQYpvFQL2xrkPKXriKkZU",
  "key11": "5ybbE9FDsH1c3MkaYvd1HtpcKDHdMsrT6taxF6qSZbzBE15uLmBxseUmvuaEJHuXFJfMdzL4rc1tiUopAJ8LJh49",
  "key12": "2uqe1wG3wbedzRC6aUdnkvCWDWgcTbWoVk2QzY7yVhKTSJw2vuu3J4VY6fLhUr1RrQittD7K8PVYnHB5gejpfVe5",
  "key13": "4fi62ck4SoNtVPsCoWjZKpgxurnGkrojFHi9XpNzESqGxVMTFJtiWezNDwh9mqCWZCHdZC1A8zHNDr3ynHzM9gAv",
  "key14": "4yHAYMFRFPe55RxhopzCSzLpu2bksk73drgR7iT9X3fFgjvgTSiaaxNgYVAvn52Tcs6WdtFhUtFAy6BXDdRBrrci",
  "key15": "3SpWMQKguPykgEVZf8yyVReRYCiCEjaFxBh4kh4nGBAiRT4gVsa6A5jWGr5U8LLUjwURTxRnAPYGEriXrXtromJR",
  "key16": "4gUwBt3tHC7Q2Yoygpba4ceyP2jewJ5oGTw8bUFU69gmm48F6ZRfVCmaPtnBW7fGk3sJ1zeqBmdFJF9Y8bCDrezk",
  "key17": "sB7HwqZewSyAZxRYxXwPNdXHVmFBTLHpAbeg4PR3xuWStETZ53nPmViUfQ7EjYTA8R1Y1PjJgLzQEm4bBdhnuz5",
  "key18": "fpBnuRHMZf78Bzu6w9TSXukMqsK7QCgfBieZEsr3WTeKwEwCvqrNSigRyXGBXWBSaDz5WPtK23zKLfwKmQD5NSY",
  "key19": "E2yB3erkThtwNn7kfPw8vjbG5t1EGs2pv4krqhzGS12fguht1eC4hLKHUJcmpBX8yN9SGH8artJbyLCZPfkb6ib",
  "key20": "N3eNDRo2WFE2JVj37ULGuwg6AoyT6W2BfbgcbxoMKdZUtszPBa5oeny7WEpqzk2FeZCMuuqSyQvkpYXZy7UgEsA",
  "key21": "4TbQuSuf79LF58sksp29Z795tinDXWaxH614i8jC5kohN6zREEj8VvYNPsxf5dyUv1Uj9bWSeWkpPzKCMcJLYmsA",
  "key22": "4S7eSxJE66QejSSNbcPcKwBvJMbH2NpqSPqdxFUYUGJfAUtXrmHWtRjtZbcNbG11qh781EkZxQWnUmQx5YQEQruM",
  "key23": "2v1r81R9nHUvhnbxzNxdqq94pnAtUGPc1nn1yEmpCQ76LTLUwyA5bVj9Jaay6k1vvfafw2cK2SSM6DxJ6LFiL9D4",
  "key24": "3rt9BhmEL2aca7WH1J7e615eBGtKQTteeSYKVP7widQuzCmwech9xdT9yZRNrhPGofKDUjsHVPXLF6XFiFdtQ2y",
  "key25": "9BysnSe8oRVLxJCcNsQp52kQKhBkJ41ZtvHU69EjvXvAvUSwmUNuocaAfzgeMJy7oU3FiTnc9QwDEgCwbSKHEjp",
  "key26": "4p4pU8pA7FsqQpPNpSKb2z8R87THhzMQX5WcpU7PFENQC51PzaJr1zcgPXZuGjDgiRt4dXj7gt6P2Jux2kCDeS9X",
  "key27": "2bKRJpJJS7GDXzEWjiyZrvX4dynk4rg82ug4zWAFY3rEKVFffnBLprJ9XBFLMi3rES2a1FBcWmoWBmBd9pZqGLbt",
  "key28": "2gYgqgW5fzb5GRpGTTEsu1XJmY64AKUecboD4iKoS9QFXtXtCHadCW6vcMxEBhjx8ykKCkbdZU5mS5Dq69ugmkN4",
  "key29": "ceeDRwCCxPQfbiQXRG7gUBK8j7RUrHBJqs1f5GFiLUCTQVMis3paHPyerHEkBxNBYQbnBFcdBkgmoT2AHrdKjJ3",
  "key30": "4CDUkowViQ6qj1CCY47bKcpABr3bVGX8AJym1UxfQCehZmQPaDnBs3jjFbghCj8rUjQeHfsNQxtdWyyYyxJ6hEHh",
  "key31": "AZ5fu7oE3dWs2Nm7TB1Me5eY3dL7JW7QRon54n71ZknqtgxpHFmM1HAgMS14KJ5yof2WokVcGNgXgeGfEh594TA",
  "key32": "4u8kd9XMZVqbRHGrxpWuYLQLhq8fbbmNNfuA7mBC3Mv3G1sU7M2ZgRTgxyLCwADCaLKoov4LQFam6h8ytDkbrkfA",
  "key33": "XhdVFdQjFihHcGPejA6RbYZSsg2fcHDL6ouqcNLWiWXXEz6UTB8Fj4dNWZQSHYE7DWW88mPKVs1quuF4CVHb7vM",
  "key34": "4DeLhM91NPQfBU9ZR5hnbn6zUiPAgDfd3b51wm2zSnyKU1cndMjXC1DcQZJjij9fT1GWP6KXpYCMDvxVYtuU6UtZ",
  "key35": "BXTAvYcVM6z3UvJmmnVDdExAvHbPJXhgb6xVRvM4WJZoFqJEW5DvrMjzg7SrWmDzyJCyeWNNCF9D4XiCbe2vPWi",
  "key36": "46Wfi3V57dti5rCUoh7J4GTdBbDczPgYiwBMD9tDSSHY25vPsgg6Y6ghodATpX8mM3hZQLAQvJcT352ffA4M2SGx",
  "key37": "3A2U3tYRX35pfsMryrvYWavgGSxoF72Y7rbSFXHHXBkfZkcgbeNB6Z64KdNa9rghSQ2qJYTSorAdrzPTSNvhBWnw",
  "key38": "4YcWVMtcyVY4jE7BUcx1b5BLAfY9ZcuA6gmjeeDnS7KmoePts5LrmYHP8hyvv69pafhVLY4RXd4JsRz3eujqAJRh",
  "key39": "4bdDTaNBJ8v4mnMMrEmzPWDDUfmgYwVGsFkgvo3UmjrwT3VnfvTDAuA1q212LhffiHyETUbW8oS4oTmpVytoBKyE",
  "key40": "4QoywdyEpsqAQZr4MUouyfb5Vkv2FwuyCiihdxB7WcGaobRBxkeXxQEsWGP4VmNCLCarB4kQVt96zLc927zCvT96",
  "key41": "2ZQ8KpCJGnZ5QnE3SfMkSjuA3igBDUtaZS1TNxMa1cAXmrv11ha1u97m5TjNJp4DCoSaNPi7uAiQwPW392o5Z4EY",
  "key42": "2iMvKAXegzeDJwyMyUujhCfZosNNq6XhLfVWXuHEw8Q4HKWYZwsFNRhXXVBdxcNJR6qnhEEqSLmYPV6B69kfQjmv",
  "key43": "2m1tnVrW3aB9zScexieYGY4V4wcdDmDxR3Q4cZXjxRxPGAFqJv1GPSbccqWTiMNwDxQtvoSXK2WYSJdJooxwEgJn"
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

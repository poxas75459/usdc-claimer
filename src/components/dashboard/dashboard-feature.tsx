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
    "5mJ5acr6aSmumPi8uae57vgjavj5AuBNwXNDJMSYuNCkq9qgdhRDvq1VdJiWgvtzxZUcR7qchuyE2wRAXoR51LKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdv41aZwuZAmAS1XVCBM6Y3uSMmzX5eFGCHCCPhPHsUP7bgZfrusWyfyiizPu8xk1f9oqHUTtiku7bEq6sxmbF5",
  "key1": "5Zj2U3khjP9YgLWnXpRckxV66t4ZP2auKZtf6b8fM5h7s9iMFyK7YS9tmjhoLj6kipQwTLHwdUqGwymHum6hDHyC",
  "key2": "3Ab4ecv7SjPEActPyLtSNDqmRPRUdFQURPAMnSFNh9r8iyBCzLnLyjDTaceLWWhJA98UB9TChn7QnTzLw2pGvXZ6",
  "key3": "5CTVuPWvvfitsV9xgaq1SP7vtbWrXBRZfDBvpT4FV4sSLMRPuk4MpiiX2z8PSJSWbH8zSy649XYXpA64Yg3PxXx2",
  "key4": "4p5vcmDMvR1AGSuXNVMChxn5ogFEhq83eWmvLUKnuHYopRu49QT5sWpxZzcRK5h4S9LZac4HE8DyGpHUvMJUW99b",
  "key5": "2WJYzYr2LKZrnjWtzM9Ef21oXZp41tH3Z7vijNePzjfY3VW67xjxFLiZF8CWy6koWYMeFgxdrJJuYTXX7Aj8DG8z",
  "key6": "299m3jdwK2R5eUUsZ2PSBem9URoYynwx9kBkTP7L5bezks5tMyaAVNF9ZfcZ8Rh8WCdvRbZZ8B4qwXVi6FGAsCfH",
  "key7": "tS2df71SZ9x5GN54pJumRYBZ4KoCs6vN537umMr5nem5Km94VozFQ8SMQTeC15W89hwqmwQ1f3vEss23ccwAZB7",
  "key8": "34o3EXzCpE2vQfz1vPNdToT83Ck5Pz4vZUMqX6iCCvuXEfqLVSdGkHnf2enrGNidRVJymW5MTUC8YUxPvaYZGRMk",
  "key9": "5e9zEFHR7bYmHHkKoCjZJs1sLm7XpcKjeHgPXa5yvsXPSwUxbCHK83EadY6RaVbBhAavx5HjG3puhAGjNoD85t3X",
  "key10": "4waPwJXaYkRqMgzDEPdnPz27vXnpK7tRvj4ACTKnbz28LF42NJPVLjXGRyUJQafG7QQYQfqfUdNUm1B5nDhsXunM",
  "key11": "3KeEYfUcNejxtbiEpD41XReNjo3r19Zy1q6c4fzpio7Nhqu67kCwBzK5xDCRRsFzVf7wp64TcmX7E8HLRmxRzZ2d",
  "key12": "32uNxSGo48BiJPnhEV7bzNAZu2ryC3vQP1FmPJ1xA1sHGMpg1t1oY7gkkL3uAqD5JT9iWL4CEVL7vDHGMTLkiq9U",
  "key13": "KeXvL7wGNTjM9rVvxxhf7AqqTK5Y3pKiGRX6UCYRr1NKYdobcrsYy31Pzs8ErUjqUNChEeRo5xBQVp4Bo4xRp86",
  "key14": "dzi4G5jQ57R77D9vfMuxCjXnP4sK6zcFDgLaRQWn9MagBx2kKdxHrBT126tdjSZr6VHKnHhT9v18CR4GSfeUuGB",
  "key15": "ta5ZAfvfQnRXA1nzHmDMA8bQatirKCCuggtVEhSpoosQ4hmjpsTvyVRScAwG4Zkp7iJcRUArnHtqJYJvZjH1YXM",
  "key16": "niddbZXgohFFkodXVEoYspWFx6nrNcvSDek1cE7moKdmJVbhbZ6cvTgdH99HHTmQeBkhVqCGMnS5d6umTzKjS8U",
  "key17": "63yjcTATeJLi9C2L4aVUYfQ9un24WwzZE8S9sjWoik8aXUwMtPbZM41LaWQUxg5BfmLQku4t6NmAh1q3FjC94Ds4",
  "key18": "4zepRXXUWPN6SXQh59pwQJkrHbmGRGp1M3BT7wsyBLTPaXNmj1vDkHQTi8YXrHTVPhMVHH41CQmsm1rSJyiQghLi",
  "key19": "26P5UeokWTxopWyUovo5ahrdRKHCwgHtiRUsTe2a5KohukT7tS5LJa5porVhMDG5sfYVPx5r2Bfcj3CBZtpEbyxJ",
  "key20": "2hDkCpQSNDNWqVcps3gZa5krdVJ5Xy5ttDqxV4zaitZtmrzVCDZnqovqrgS92s9kJVizYv6fxLFN7ncb4kNDCrNp",
  "key21": "3A7WqLjYuevKo17zjhX9NT1kGEnAgizVhTWcCi3udLLxAjBgS2oBqsfVJFFb2mLHi2KYv5VnEqhygAJoJJi7dbKN",
  "key22": "MG4wXFDirB5D1EsW8B2oCZGodSu32bHLPYWyY88BkTGFiW8cKi8ZCSQsUMrVg25izVL5L5n57tcBsoDYBaAeuBu",
  "key23": "LgsMkVLDWYzHXPZdZp5DGDvWaFRAfQ2ZcRDqvKCfJZ4VxM2fGjT6sazF5r6RkwRH3RmqRedzKYPSyVQEnzq1EAh",
  "key24": "53bhZSQULnhJ9zaT3dmiSCKGKpwauWQ8ZfX2XXhUiTKR6dwYUGNXvbAg4mtCnNjVLG9Gh8hHCEYyWz9B1AFw2ULy",
  "key25": "2dWn7zsHhTGtLLAuNNGsVkweWM5Wv1r4yyjc2XTbQ8bCGZFjK8pcZ4fBFn2r7kCW3zgnemjYq2VGJK5SwEVn2baG",
  "key26": "2UzfXLTfTYQNSdaaP5CzTrxcvA1CUdCUbZGyRPgoQAZK6G717A6bBhYETuCvS1dm3DuUwuz16XvfTbgJAVz6LXrC",
  "key27": "XGgkxEbfCdvGdGW6q13TkwBaqjWeXf9eAzraqLXEDCmRUtJcUXhkRNF9raccov1cGufG1GjLSf1Jgx5mFSmVVLx",
  "key28": "2NrYRecgBmzJCFUbh1jLRSXHytwxqP1NQK2dj9DHNybpcF1FXqeA7fhr16gYKKZFMbNdKR3TkBTugw2CmqSpSJyK",
  "key29": "4UrpRAoLCTKrddQpagxQjy8Wmwj1NLiXn21iGRJrkU4dqgrt49stCk3u4c4UWSutjjroVFJySCdwKeSqtGXArYJm",
  "key30": "nzzC3Jt7Z2LVQBxs2XSmMU39Tw3LS9sGZRfy4BCof1ePawAcj8uf91Jr4azc65vLBV6iUAUWoEqs9YRhuQP7nuP",
  "key31": "3JQDR2dDnb8taULkHbNQmrMFCdCyxxnXWjZHPQeoJZh4SH7cnhSD61xs4YWy89HGDBMCkUb1XWaheqcN1Hcp9Stu",
  "key32": "3ySDaeedUYBo1EDmH1eXkBUb9WWNAh1w2CZaFgeTVGee3SzPphdybe4rogcgGnQTq8qD5zYa1TMsb5e81eMJJVvg",
  "key33": "CbdmM8HcRD1xXNAMGkS8SZseBkCfY8UomfM9DA4UMS2cQoxqtB81QQq7FMKL9Qut9wtttnM5T2K5d1RgyMckw2F",
  "key34": "5FZur5FSwSjEwHoCNRFmGGFfUMMcD7rK59jgSqqH9dij4UTYwZjCLSMCGDhizJUvoUgo6hTEoJqhQT3b1Nk2bWW2"
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

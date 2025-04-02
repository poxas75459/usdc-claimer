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
    "L5mkFAdiQiDCGjdJPZzXPCHvoZ9EarvnELNpqSYBPCffjF5DDcrVKpWdY3vnFzDhuXC2nrqLbmH1LDUZvPYnPsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACmADpd4HyzJdxxD5sRXKDFBUkEP3M7e1eN2bo3KojtGTxYhanvTRc6LfWaALs9oCsd8zt41qypjxYhYWkWAN2s",
  "key1": "4TYk8H88wUogs1DYD4LBCQu2BomSoZsiEHSfXKA4A9UzZxd6GKGET6D6BAfVzWMUWi3E56smNCv9cJniqgnMi5SL",
  "key2": "4bpbSW5gN2yVogN9DxRH18KSHgV166Kqitb72fNw8oaZWPXtrGG5kYWgyvav4cLMY4w9FkocwTY7gzh8eShqN44C",
  "key3": "5GGiJvvTZ8BfjkZ89m8Nup1e4oQwDYP5U25hRuF7F7N4pdNzzNTYns21aBQSnMzzbkgXbPa5pEYrhNVfyLCb6HAB",
  "key4": "fLmyJp2MtzfYx7iBnLzzoGpkcSLDfC9sHaNjJhjxchr2DnxKHY7vrNcVgwkyY1Yb2jM9iGka8Mr8XFsoPT3HkN3",
  "key5": "2Mm8YKquk8EZmsabeCmNifeUgpeANfjiz8nearAM1JN43jF3wp9rAZYFE8XxQ8SkNQihtWZyVDqm4edSGKj9wuVb",
  "key6": "3jW6XrxVMXP1eFLn6LK11gsT6HJYj43AKnd2YS9QLJftn85L1sg64RQZNMNt8jA3h5agQBRMPCuUgDJjSfAXcKre",
  "key7": "4UX8CcMwrrUV4JAMYuqhoSxKXawK2fAispXW7EH7zLsXbzfjeF1k67XNknE5nBB8aQPYPq1c8koQbgJfka2v2enx",
  "key8": "STJMtHYizGS7AXnQKJwFNbXuRh94n8pmL4nro5d7fSWzNREuJXTcLJ2E7t1HDNUikADW813D8XzF1R81EF63Nad",
  "key9": "2Ai3hTfFn7aRa3jT1Uy3FDMDWMir6WXW1RrAqdqK3EsV8B9kiYZ4mitFxW9zHaBjscFfjxvNg87HLSUNwWP3FUNm",
  "key10": "4HWAZYxAdjqM5knnQAorUxjsjF2K3fLv19rxwNY119JjmWmvTGs6shrPf9SFcwhJXhRpYqXNu6MUyXCJzrLheZHG",
  "key11": "vDg6amy5U2HDNATXnPjngeWxPuudoFvrFQL2HxG2nrtB3zJsBEXfC3EevohkWQigNgQMACqxDuJ7zYZK1vEGoqf",
  "key12": "dpxgJxxwZAR1zB2pbzNN3NrXRiCDBzeYYMEUekR7deqPhL6YhUtTo7YXC8ZmNis5AbBrngtxC8ruXKDGEq1cPz8",
  "key13": "48xm9PvGZp5wiCUsfyEvEWXwpvvuoxs62AdJgVwNVEn8xHsnbnN1iFiqXw3YkBzpC6k15XsYsC2AKWCdqFSw7wuJ",
  "key14": "3q7L9VuwdbPsLBtpr8jegiRPqVHAAowZuCkGo1AYpSbuWuXtrwCukLeEF8tZosQHi7Yfys66HyqTd7c1wUbV5kjL",
  "key15": "34CWycrhRHeVJDGjxZGF1L7yAEVrVdiFSUc5zupRFyhX8EHidcqb9jzpxyZukZ5EpzJRjfzL54eSV3D3bH8Skxgk",
  "key16": "2awVsjBXBT6S3dVKpAoEAMSxiCBUW7cPo8vcxYTtNR9jeK7M6fMqEh6Ho8gTTyoULqWEGYymHvBskZL83B7H5kNd",
  "key17": "CjLLz5DESE74oxwRcJwpJmdejAgQF7FzW3AM7dd7GudvpWmWpQS8g3PyV8nbCe4D3r9S8Jq4RZmY81XfM5Ge377",
  "key18": "2MgGZ8BR8jAcYHjfeV1P1YwW1a4ZkKeKDeBnsUv7ktQ86ydg4n98BcDAYeQnusCjG9spWysekZGTEeAHh6VNrut4",
  "key19": "2kckLHtfznjQuBrhorc5njvCVvwYcohHASmRTynJH82Y2zQWQFEEGTaKeLSvDxHwJfHRww5UAvkEzBQtqH4j59sr",
  "key20": "2WpfRwYMabzY2pzELvqpFHPgm37CmQSUjLUvU66dCZruPSxRqfx2xz8EQoFocmAnsqfs3M5uEx677hmFLyJJ9AJ8",
  "key21": "4Af56xU5MuJSGq3kzzREfrxppkD7Ez5jU4rTgqZHd2bikr3imNcFRdKXG3ZgSHiuZnnVgsBRJ4dSN8BYBfJ64U1S",
  "key22": "iMZtUp9NxqcSw52iTkyd9LiRb4p2DL5p3UfvKcQem4ZLZ7nrgqMgrV1nYQLyrbdmn8VymQgT8cNviyuiDV6QnN6",
  "key23": "5cvS1GEybUeaq4qBoxycXBGkeXRejoAkohqtWu8rGmzK9Fq3mERrUxFSFZhykQPnHG7UiPWezRpQSgJebdfVZ5JM",
  "key24": "3DGPw9BYdCMwkb3hZNso8zTsxy4ghpeMCD9hkjZtiTAcYD2ATX6NKxCUxVoRshgWSH8B5AfhDBjfziqUdsCSYkrT",
  "key25": "5UsJcARYQTJYJ3jfpQVEGEqF9NLYwV9erYW2c7nB9HKXTF5RA8dybt9yo4FoD1ALv2tHFEEg9A3ZBZt2frdwdiov",
  "key26": "66wVK4fCdoKtBkvvv6Mr87nKWv1DV9uar1SNVXaBbVhvEQbJigLF9voGs5zzzsEsvjFpZD1dnA4563kovE4wcppu",
  "key27": "4AHKkERZpTka6npa6TVsCFHFvbzMtFckSNbFnCa2thPS3FpJAnRfYWBQB8nbwSWwqC3aBa5dexaK4EFAxSeBRsxh",
  "key28": "4az23oYeGFgCb6C7JCUgecA1KB16MMa8NHgHYQFykYe7nefsnremQoT5aLBT27pvSG9kpqK7ZKHYCt1kKh8rSxnK",
  "key29": "4pgK5WZjzvWhMZvgPcosR4qR9BfH5LJoA3iiiUfWa4kB7aeMPZmd6BqP1ZcpDTCohAXVeHajRDNQd7hckoo1Xq1b",
  "key30": "2VRk5KXphg4ii84ifE12y7LWZ7pRU2WBkw4F9JiDcMV2swekR1Ppwr7tFkUZBNQzj6Yr7qxJBzcVB1nC6adhK7bj",
  "key31": "2o6jAJ1RxXTKJtZsFj5hsxqJFgZ4VgoFsdqqAJkTipFtzk9nkv4CH2AgDzKRXLcPQ1ZtrKVDvsLfVeTg6D6EpkbC",
  "key32": "2PHucpetxqKse8qay2aLnB9zPaunvDVPvToezPdQcqvWbhKPUXuaRveEyMevjEP5dMXwyEvicZAxMDK2YXGibjQt",
  "key33": "3SyQwvqcrQggVnP1m6Y7GTt2S3D7pyiob6sz12Ptbs7a4AvYtpZ9bUbtrzdAY89wFWTnrcxitX3Hy6MeRP1q5DGk",
  "key34": "3NpskcKUhZcSPMDsDG1x1v4wwVCgSr2enaeEbBt1cacnVNM6FsTuay1Lq1HZKo6SN4yWZzQoLU2anZShgbTj9ZS4",
  "key35": "3kBRBPqAPRVpPUwv4mrexYNkGbuXpsQE1k8KMhRQJaTzbmikfr3SbtqkuduWkf6dnxsYeXnY5PegqDHSmLnM2eoT",
  "key36": "25cZ2xM8g1PWzZdZNEg7EzK9ooqH5h3vfV8TPoSxgReHRzXBFKWpuGNN61RGQceScuhJiWo123Eaa4x3YRcEUSko",
  "key37": "dsz8YLFv1YSCH9gHqJ8tNFbJgfNcg1WhWQgXUxcoPeAhZq6PqPbkk3sGr14BX9LzxrDWtA85R1cxFGC5KTdqWvr",
  "key38": "3KA78TyAK2v75oY9MRVVsdWhEV9WwuTzoV6aWsaxk8XGhcchokCTWyEq121jiD4ANPAEWhxicqM2T59bJg9Yy2oF",
  "key39": "3x22bwE86a84p4MT8AAnx2q6333jv3B9ujwQ6GA8UabyiU9NssnWAVPRsDSctqqU9Zh1VDWQ8DC8ZYm9D3Ly8QR8",
  "key40": "2TEdpEmYkSQC9GPbZAU2M9heZFCdUPFc42MgiEut9UxFczgQdJ2bp5eHNhTzf65QrXLBhEDA5uf14wXhG92izYw8",
  "key41": "3GyeAhLt3Q82MdA5z4PBN4rhxDfP8wi8ffZJiKcHCkANfTXAwoZmeQJBLkayKmjoN2W46tcr6yDpQ6sNwKCpobLu",
  "key42": "5ef7YSnceav6w4iQ1XaHXCCoeukjHZadYJTx9vw9y9CcgKehfqhG6igZjcYnUexZGZD4va8VXK9WUnbderyNqakX",
  "key43": "2udV1LKw8mMPQ4ihsc7z7E7LSWFNhesSq1NmW85FFBu4WXWUWj9LiE4pcU2mMhWzGLe4aCGmFT4KuFWoazkemLML",
  "key44": "4j94f8r5cdrBFPKkCT7mCkYWgGjoFZkNqpahaSHgEiQ3bgSaXbyjKTUu2L6gMhDTCS1AixpHyENKgosAavy3ZkeN",
  "key45": "pnA7qLtn5HJBZYW2SxPzbwNGbsbEZ5YJj7UCxDFtUmKgoXDJiKjRrR7h1ENc3bxSZSZYfCMHWKxgCA9FS3oEzHb",
  "key46": "4WopFYWB6bJCuTpc95RQHA8EbgDxAoZyJYzJ9F7Mms4trQn3fRTMZSLFF5Kz4NfLZkCR6fytY7tTVToatutwzq8o",
  "key47": "4Gwuyj5DbCx37be2UdBgaKoy9FvQkDxAt1ebWpraY5btWKxSCTCg7V5ZbM9xiXM1pKAsZkKTUMJT1QGJ7fY9rWeK",
  "key48": "4WLjfnpsoFcLuRi16r4LFdYdFUhPV9XKhAv2FkcvA2w6UPrNZYMAyo7zfi6gcCD24eLn5LPcbZuAtBLZFAnPu8vb",
  "key49": "59PtfVqJPFhW3NLkKkt2RzWaLgcnk6nyHgbwj9HVfFcZik4kBBuwoUrPX8DCY5MUhiGgTt5emhS3BtyvzWYXUQ97"
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

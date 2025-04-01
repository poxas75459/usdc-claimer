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
    "4SDbTk1m6eUGYmdwTCJmjwfCUbs9hcuBwsTpfAKKGDYW91mjQ6e8FJjZ5pSb5mGzPgK2tHweiJ21wCtEFhC3CAok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aNvnghzKsw76Ku1Ds7g4UP2hCUBozgZfBQENGfm3iuBEpxJe7s4z6pYaeEewCwzEsygAKNfCxNnM33urajrvJ2",
  "key1": "2kVp5wo1ez9SLQ3FyGCvDZrkWzq57ECLek7tdtvsP9htEXHfiZMbPFJki4LbMxhVbzmDaN8pkCrxCFxmeXpxw6UX",
  "key2": "2NZThwvC9MjjJJSM9ZLAf88TkJsrCeCwMLHGEdSkAGWqndEY8Nj8sESfyTydsyRxqkfeHR5GD3GXsY5dapENHMkW",
  "key3": "3FThxejJXCtjfXwM76oLD3gHHk4Rac1Kav3DBoTiXUUrPbTarkV8QarifJGpzwQR7K5SwFv6qwb2WzPzATMKZoEV",
  "key4": "3z18NenmXMY9ZXktoUWRoKHPiMsZCgPUhSGKPfh9M2qSN7oRsYXb5WrCMDgc6cFJiVBeisUGNgj23suoqoTNrPwV",
  "key5": "3HS8d5UhR8zzrN3nVwHzFe1gMnT2eseVWBAAQsdiS1vjhHJ2ScHZF7mHUWf96TB8m63CfVNTP8ULTTbeBvtpW8eM",
  "key6": "2u6evsPc7aqrmsL7W28sV6eo3tsSnz8kAMxKF6qLvvprdQUXHGALjGoJx6ksv9YeBWqu4ancboz7XcYbZLnGbEYv",
  "key7": "QJy6w2d5snLccZcjyGp7Yzz26H6NdaaW3t5K7hVzvRALD8pUog6Wv8tQfeYn16xwjYtbnhpTY6eXfGENUbQQ67c",
  "key8": "4ey1VaerDtPFqY4sYGdmDqfHtZwtfKxHMV2uNBbP8rx4MrUDzW56WsP9pCx1qUsBVVXvZ5NMkQewc7ZDFxGTEWrb",
  "key9": "PYmTKsz5wcc9ozC8Xyh61wMWQ3rJLuoLwTPZeiEiyrDCTdRrYkkJSU7JWFrZa3fNzfQgHwg8R9gTGU6MK4C5hYW",
  "key10": "3H4Ki4sSAsLNH5YgCAXAQZgppaSaW6FEhit8dRxanXCmhcaKChJM9keoitJiAdtQjhy5uBxT1RTEVKBVZoeYbzea",
  "key11": "2qLZT15w3i5awS8N7R4zPB6y46e5BSJWUXE84gGvaXwTu2X95FLoxEG6pRPVjoHxU5LDDM4JiGYy7GU9ZBHUgZEx",
  "key12": "917UY9Je67YFDJrYRFrBR5cr4q4NYtHybrvmWm7ebYstWqCaQrM3oEBzTUaD5ZSg3qV8XRUExpzWwT8NVdGtsVi",
  "key13": "wVA1iCJApPBahLxhZWse4z94eMJ7uChvpo58iLdLcDb4CvQinXCjP919sbogXa36Pdp5oWeAstasrRmkfYacxYZ",
  "key14": "5V5wiF7VY8rATohLmZQJYiuPSomZ7JxAjhYAGcy257awGFRAWQTvqFXXfntvKnnWWeR4E3iv3SUEwiYv8dXDY9b8",
  "key15": "hwtwv2FCxDrWfffp5vac42iyF4mDc6yshWJvMpov116TVLT9hPsoTXnbjsD1bPrWB4Bjq7tbfQ5WwHHWVefNfyG",
  "key16": "3ZSGmZxdZQvRaQ1CMCtUY99xJAosTpd6zeJ3bZf53zgSRySTUCAVy9yVjWz2vbKoJAUNcRbqysTe43ospmjDWDQs",
  "key17": "4q9qhUu8fU5JpnTZSNhc9ngksvcjkdM4Z3cLyxMMmVieBxfxmKLPKU7ZEpc6y3GLyTFxkNQ1mXgiE9P4iMXkLN8h",
  "key18": "55UgDCsdLRyDvWyrqGqpqgX1vZiW2ywRs4ar717PVxKVkng87N8qwERZyZTPQ8wqoZmAtYfudsDxPHmtSLaupQeH",
  "key19": "2iyBYa1Ux4wLY1L6tiZZvA3N22bJNuYzW9ecAhCbswuoce61GeyoqVrbSiHJymyrZzndzUPdTaivHe3QcNcEY52Y",
  "key20": "5vHWBD17K7JubJo5vppxEWgAn9V2Vddw1Zz6FSHSc8rhgTSxxHKjWMi61gDUEVqohBh2jm7nqfkQPKnXNc5fcs3b",
  "key21": "2oiN8vtfgXKua1vaTFH1Ar1dRbE6nhAid7urgqH1fHbovqBSC7khzLqiyKchwUiLfznFax6p8iNPbAqUVK7BNyGf",
  "key22": "3UKcDPcVcsGfrVwLasH7Mma5tD8SwftZxBfTfAPFJJ7MD2i38fyoiBb8XEp6ARPxfS3r4DNTrpJsncsZNyHDgj6E",
  "key23": "47CNcBWqbiwouFvA3L3FQ84q4JZcWmk1nfXz6BwAEFkYwM3wEqgEinkbjYr5HABek1Gj9iMiAv7k2spNKecA86Ui",
  "key24": "4TSfhjh83mf5YNCQgfvQqfMo3rKXmDL2D4U16UkL71jNomHuGSKWehqbv4QNFbgfN11fc1xYja2g5WwcMJXQtXJm",
  "key25": "zefCbpxiA45PvbP56mEcNXiuAabXUy3kqyVTGbvXqogL57npPKC7PV5T8FxY432M9bi9DcfXDPKxQgFgNzmX2SL",
  "key26": "KYzKH18b9Fg4JH5EaPPUubU5WkfcUyMzzgvFpUCGHYiLhPZYgqpwCso5JiynJnUbMv1eLRCBos9dJ8G9sFMBnrh",
  "key27": "3q4rygMGBArnvhtLq3untGsv46eorN4e4fNEMeMGBkqxLirY6Q6BNHa46uFgbdTNMTMc3dofQ75xECERyK9QLPp",
  "key28": "3XKY7HTSQbzpMHvqtaoYwfWFHYnPdJoSKF8jsjLNZuGoU77n5TES3TFVbuPoWFqgURxpzvdJKw2jd6MD4SMMBnm3",
  "key29": "2y36m2C29hBGpRakxZHLupBNvD5D3K4Qzu4BpQjcDgHj93h5gg5spsaUc8PfNiS8SBGN4NKnrCE8cLSjiFEnZyPg",
  "key30": "BFwBabHsYBH2teBVaGmtvjEytdbiZg8EF2W5r9HW9axKHx8S4AGfubyYtuT7vSoeMXJEje4KgSFFKJhQHz3zCNX",
  "key31": "4vhba6mTTATewLdZjvWmkgKBZT3rYJ2psCnQTfJFo6g77XqwVz2iGRkZGNiUTVMTizsPnJPEzqWxugcjnYznmJPP",
  "key32": "uTRBKsbfCoJ7SaPxZnvRmPk6m6GFb4kQs8zKW22YZxgtvgke1QDjfvd2HgwYwGGZPDhq3ach77MevMS5RfRhGLW",
  "key33": "5wFXLc5Z2K56Bhotqzx9AMb1FRdMUfeJaZVsUf8jXDqJhkci91tTog9aKMDTtFF8AzyH2RP3E8qchjf4sbbsX4Sz",
  "key34": "26TWicD4FFwBQoWQ1rFHfWUyPDojoSRP4TBmiD3LsMx9FeDiooNBGgxhjfFDGCGmQWPUVrrpdVsTiK2k5Tvw2doE",
  "key35": "4TgUbUNFLTjvGLc2BoZ4Wccp7hFymDQupPJsgQqDWaGADfA7x658sPiUZXndE7PfjG3ZrKQksj7E9gknyfsynUXp",
  "key36": "5Zi8hXGFKsB78d6u14xFpyaKf6EndyYezYqL2wS91ZBL4RbvQ1Bk1fCA7Mh8723fTA3gLsmxN5DU673QgajXXsEy",
  "key37": "5DAmTrm1sNmm9jKg7DuQw8kniYJ5s2gnsJQrg498BKZe25V1CmTmxDnaMdXKE8pHVU45nxT1Vb9AR4qYLQkAEAuj",
  "key38": "kH9BYLhiNhh4Sjizr5deU9NzabAmwbg2UXUYLiW2zXZccQhGU14vVyPJEah6y2y6SxY2xSQm7fy5Q5vnHFuFZjy"
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

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
    "4TNpWUfRLZMrMet6D8Z1sXYahyjG9KeC7fDNLwSet6x5tWeyw8VZuYo8yjSNCxbpP2sp5Be14iEt6xojypCBXaup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUVakdoWAkuXtj6axptkGEwwym3aRSHkipydLF4iY8ER2DxFtYe5afz3JXnTrbLx5aL6VoM2UZ585DfaxsFGp6g",
  "key1": "2YfxFnSg8N6N1AhuFeY6cp1Rw8hSoGDbYVbrA8ZnLdsFswaKtFRJu7JA5UPBcCjyUTMPTCKQ2mUgyCtkokRCR6bF",
  "key2": "2zYqLX8YjPLq7YpBteWEjjG66mbx4XsUcBgj7L3EKFNZNndFMZe38MAqLPiGqLiJuNfwGnEt1XxFmuAsLa6VWN6x",
  "key3": "2bCRyWq4YE7yo2JTbR1W9NnvN1XqrJz8dRAGvyy3qrTAe6jwT7vg1g9Fk3Jh1BaBgLa8d59WMNPKzo27VkGWK84w",
  "key4": "3erwkNGqHa5A7iA1WvqriUbLHW6xXjwNBHYzSVU1FFccQYonNZ6FJD9vwsuaRS5yLSsSz8wJvAmDyZfBh8J37g2U",
  "key5": "2hcr615QKyCuWZLuFTGCvGH3BcxzndQknBQXXhG6BW7bk5SvP8YzUVoJ7WW52WYuh4ffJ8TGMxd49etUcUEsVN6x",
  "key6": "4rgYUQh6qXE3zx9GS6YHj5xutdUVgWgiJV9u2KfdYTsoZYPyuU84wbRqvscgj4EChdRzxwJyYYzffzZ3GjubyVwK",
  "key7": "CFNKSQx9oTcy2nhQhyyEw7TNpuzQKbQYv7BjdkbdCbJDR63aoU2etTx5PWzcSUMCyRnCFu3kozabGQK4cYeL2WL",
  "key8": "2jXzoRUXvsugitiU7c2cQwtGLZ5REUHxRCmKbBLcJnbQU1Pk3tyGbPUYhzFsU24aqMMX5CDivKW2RQx7TXqRafvD",
  "key9": "2A22vvKjpoZzCdJfJxHWjGtCw32WiPXFasGsT8zJE1omiiF4S243PsZnyENgMaJJULL99BCbkkqgBvxPh6HAywLL",
  "key10": "2PwPRTRXEaPPYkrRcRNd32wUJ8Mowqanm4Dg1EyuwzTV9vEtCN98NaymQBW9UtSAEB7RTvq7E2tLrRQJw5wibmPW",
  "key11": "5jeYmsLDTW4jNoudZm4ynb6sgMMRwHZ7HqGauYxofu44UpGPYFoQKPsZ42hKtH1pMdojSfF6uFz9D1WVsjcv6xJw",
  "key12": "4TTNUTbYz5Se3mzbafvLffYCs1cQ8nocDT2qYcjLxhb9e2k2kqYf6VdCdDYhqSFzQU6JDy9VayjsM8CgSEH74JjL",
  "key13": "3cwiU2ptbo1hGALDwEmo3A7jYgaKzhDTnjnewwZxbDwhhwuDf2Z1JHivdXGhgakXjPBbX9GRbYkjGsdT6BVdba5w",
  "key14": "5j6iS73muyMD2Lc9FcG8r8kiYYFMLc8SQKDuVNm7McEhdERfumSG34CrAczW3KxZ6RTTEChPrepb6aYWWibnZPnu",
  "key15": "5vCQUXg3i71mSCCG7vQ7KdbhBv3wJVtPRagkZ4Qi1wbnajKp4XsB64viSk7rnSC3UyT8KnSJ6A3UDVRFwPZFPeLd",
  "key16": "66JL6FpAZn6KmQauGuokdUjT2KiHTgPAvANQunAy3GjEvnDPv9V3RynRA8tsT4kMZ3PXo9xv4hM2CKjU7nG3C8WZ",
  "key17": "2ocXnkjm8KzpYHbTczGt9txmSTBR51ZcUWnTVGnoC7yYc2oahwmkva9oxBwcmBDbzmPiWD5ax1qW6qMAeitPv8kM",
  "key18": "5L4maQdEodudC5YCB4iF2aFaqL5SLXpBLa4qF9i1P7QVpGF3N4XiFNm1ar6hLaZMLtcfFaA6d1Ua4wAVwmJZ5Qrc",
  "key19": "5ogRsGmX33kNbsv8Qyi6n65WFmF8ggkX2YNHZaADZWyxkPDBvsb9xPvdKY4Kr8vbwx6vmn6oeXJCs4NUB3tScPhv",
  "key20": "3A6CU3ibtWcXHk4ukhM1LBCYuRYyjcNxWE9MZy4nP1H6QvWmcPPmb1vHzVMESN91Un8kJY8ehicXMiynkLpXxT3X",
  "key21": "64s8LzmwnsHEeajsQUD6cBhYcW1hZnNGS6dNY8NVmETn44dDysz4WA7YezKMZjRRDnvFx9pjAGGFXEdC1pwKsD2b",
  "key22": "123gfg92obNs7GNtZWGRiLgdzJigHYH8CHpuYf5Q8EjWn922DGQbyjLqMTVftoNWtbdGu3rYPwGuGQ2fVy4Lzsoa",
  "key23": "2qqUmfrzDXUj4iQB785mRrfDRN4egcjUrW3F65ocFBreJCxPyobJUChAFzvG72EpfBMCGLafGnHpzXQTyQxBbXtU",
  "key24": "2rpoa91hgtaRkRLqX1F2abpgVBoVEMqavrWhLrMKBDidD24Fm69hcHhTg5M8RjicKLgSBX1sk99jULqGibQQNAen",
  "key25": "KEHn1Zs4eUBxHZBipC4iFz791zg9Y46de3CXvbrFVDtm813FH1uZR6wVaEqLLacMDnoQtp4SLPGceczUWPDzDbU",
  "key26": "4i6A8H6d7Te9SmvtjNQpp86frBRwJtMwzMr8BKoithBNkqgDajmqL7UoJSnS3sZg8XcbHohpkheEhUDjbuXP5mDZ",
  "key27": "4em6stfKt29VGbom3iVNH9Kki5ycn6ngHdCu2H6FCYEfLpuAXFWDWPtStYp3s44vefuFbXJiGfxwHkQ2QubMWjr8",
  "key28": "56R3gD7Je9X2J6tHwybs4W9yECtA1aJZbVDdXdUKuYyoqxBqPMcEPHNbKYJ4Hz2dx1Zjis5dr2H7ymGe3oiEzxsJ",
  "key29": "5Y5U3ArAJLfcuuJZq7aDFSYqfxdeu9Vmm4LRS1HbC3x1stUu7QTP8vz3LZrBsLc3abWPCYA1vaMhpqJrhpH5921m",
  "key30": "4iBA2wa3fEqnXd46qV5iUsdqtjs2i6kZdYo7NqsdzVnvJuGEgVbzYv46wfw2xGN12yf7Wj1BytWZWE8Mjn2L8zuB",
  "key31": "5PygQzAHwZjiQUJa1agtTrCyu3p9gvEmTJeMDtveoj4LJbmVK9CBvSKnXbeSSu2JKGjFjydrGeGTdXxu8xGADKK2",
  "key32": "5wUwncdWv1jcJngEjSV2jcRZtZhdtMrueWg1m9dF36CSY9WDvFR8UgiKnWzoY4mEua7D7BAH49dPjupmzGJjUPew",
  "key33": "2uSo9pgRGKLkQMUT6ZHhGtKme1ZZX7yTy5eSyn9rJEQWwym79sMaCkPCcAzLVMw3AqtFHtj2ViGc9X6Mkg7dr1fs",
  "key34": "5N1nD54kur5PL5TERvwBdMd9pZSGMcCKgJiF1FypicGjWSwBJmbH27CcUUoWphuoRYt73PxKAnSUQ43UBtSUJvzj",
  "key35": "ZRUdVGEGvAyD3nyJy53NbNB7tUtkubQkn2o4exwTae8f3s3RrdUnwDFmGpq85MDRgJfRWEgWJzNnSyCZmmfYHtL",
  "key36": "5T1pK15dviqc9W6KazMJCKQ9y45i3mn9MMJRt4hFef2aU6ZSNFd8zrja5UFPVzwys5Afe6Z5Hg1MnrEqjnGp115G",
  "key37": "5M1Qz4CRhHave8wbnVeB6rDWBGSoFtyxjPDq7iAijM4PLRVCYBnnocZz4KhaV9Yqm4TcCd3uxjVABuzLV3QTSurp",
  "key38": "3tNzJhVHH5cBNFEs7dwnEhcEGgd6YJPvAtu7d4HQREQvGsWFzsEZsbW67tkZesgqWg8jVoQpRE41PGRv1uqj831s",
  "key39": "kCNRuBMKpRQL4fjw9T1fdZpM8Yx411UbMwEgF1DuXQxp5Za4B85xtgw9JSwYYs1jeK9toHttkSkqoSP7rjb4nQJ",
  "key40": "3C4SwnoEE3qfVGnzLztEYb8iXNqx5A976a7uQRyy3eNS2BT2HCLA84yCUJUYBLUk4YR1MeC2Kz6aia67BhGrd6Gr",
  "key41": "2ZruyNvgF3EroZovKAkT6S2v1rMGtatHhWCBTbjopXDu78QPACqEMWUSYF7VLCBP9V1ztyvF5mZeFMwTJRxcyvu5",
  "key42": "2LDf5LMtf5LYsfWgLkELJMsoVGdL27nw2gCNNf583HKgXekHfAxqktJzCaQz4vcHAGdP5DbKbnjr7LttwQe3uk41"
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

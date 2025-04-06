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
    "ikZWX9S5ZfjktDfoHpHuEzsg9uTGMCSS5qLRKNzfZMHAk1u9xZortfpr1v2bs6NnPpuUwJc2vsCfg4XiG6oCL5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvHhMKgF94RtuvMepBF5rZyQ8gGsZrv2RwrZmJqsWD5aJUa8HbCXm8Er4bSwQGXYm55JaoZ6CBJJpqamUo1Hzqt",
  "key1": "4w2Zo5m8FF5Yp5u7BbduVsxAzW1j2tMhaQi8xrbGf17EfE9pnX99KoHZUoPNvMsWhNTZy8obbKBtxD5Cheeoex5V",
  "key2": "3nWFXsiDhR4JY328eDNm9dAwPDehZBK7WiSVtR7f1jPQKHb6vUJigCqw7JXkCJRhQbZ7ucrzJBreQvNEzt4RdqyR",
  "key3": "5zy8RGHXsWjHp2e7BVPen9F4KHoVLAX9ZUfGjEWLrsxUzQag7pqFoGoV6NEQCNiMVuV1VAef532uQkAe8BSHw8Uv",
  "key4": "SoMxGCjCvymBKWrVsPV4obgppP5x1xJwGYzVN2bLq25eBcTzqKc1gVzLFrmJe2taA3QpSuRNdNxdLq3KVthNMRN",
  "key5": "3FvQtPQzHv5bUZaLyG6rPSRcZUDGW4UHAe86VywaDnZDyFi9QLhGPR4kYPvi5Y8mAcaRiLwFKSUqY9Abe5c3obvv",
  "key6": "kmm45oG2CJLZGdo6QWsuhjocN863edREnTDm62Yw7D5TVAt63mywS6YDmowFqXrQ1pY3oSPaYRQ1agLMR1DRufW",
  "key7": "kuQBzsqVwH71BD1PvgY8rTnUfo7qgpUpmMxQycSWbknfKaUx6e17Vh9GYwVHhQhSZZHkpRaiVEF9dxs9uKtf5Uf",
  "key8": "3usBipoLPKnqYx6biTh2BaHbT32GpUrMXkRHMXq36RwHVqfYcTSYPXQ4UwmVFeYtn8m54jYYSLSRtMuxYnDM5f6P",
  "key9": "5xyNZYxUACEXaM7GjeC1s5qHJhBBxVz4cgUVh8EASiJZibpDqoXFVRroHS9UsFD5Qs2F7ognpsMkyBZroYRskkDd",
  "key10": "5rMkcHyXXECPrpmxP51FRi2xkzoYBr8BcPTWxNMsFjvrJNaaN424VBpKFXKwzU7Qewr1rcxhzyP7D6PAeKSJz7ar",
  "key11": "44KsSCphYWYsR9tYRMs3YP9vdmPmnFokgh9V18ZFXxvkPFwDr4tZreBtCenfotULaaf9tvhDtDM5E3n9QaM5k33x",
  "key12": "55Ds7S5kFRwq5g9M8UMQqZecN7f8hka1Ayi3aQ9qLHz5nqxhr9AhafanvGRGnDaY2eXSkSyaT23RCfAG3XQsEoVB",
  "key13": "28Hkk4TyghRReMZA3HbWL6bNgTdhb2ezLUNJWwTbuFjzJ3P8Eqnvv4mRCSpvPudnDBgC9Sj4hVQw3q5WpkQgoSUZ",
  "key14": "3nyF7GRGTPdU67WW4bBShVEq7e4nTHj8RYhxEBmiEbdktonTvmZJhnjhBbDefjPTCFzR4wbPz5fc8Jzz5Q4Kxt5e",
  "key15": "4P5T3Z7uX2R1aY7azBkbRRFksSi6AXYHAwpKWheqQbYYoh7ZNEiVk2CXci59c9b8aEtEFCtUydyrqxwRyBBRV1JV",
  "key16": "1rMJMAsLkLw9B1XaSwvmvh3RPH5eGS4WYfZgdNZKGQT56KMT7rGLNEipigmfVZ9ZYFjq17xmreq8P4nJmehoHLn",
  "key17": "4rJkN3ebab6kbttayGfzwKBdRRPWZVCJXw794cq4mCxBbk7tmWCGK3o81C95riocvyKngpecarjhhd4gS5fEEkmU",
  "key18": "5UHhTvbAPMpmDq5qqxXH1cSpk8CJd4PmegPSgnkUxvNuQRSG6cGv5dS7EmG7cbb9vGwJupgwiFSSLM1bh92joS6c",
  "key19": "q75TqbTm2t7BkPTmC2WsLJSiax9BGcc2n1B5txaNEyimgXLMyeHQgKcTjSAhrDAVCvHM2y3yCsf1T8tQGCF8Ki8",
  "key20": "e81xJ73EcqaYjMNCG25SKmAzAfNWoMpLqXpT8idNmmMejjxMGby6drzHyVNeEotibzQpHa3pDvf9RpxeBv8BmrU",
  "key21": "4SgxP9NR976Q2sGExufRW3cn1jsn69ALyL7jrG2sAgoYpcu3fq6skZxA9h6PDyp12Eb32ziswSbAspaSHRN5HjgB",
  "key22": "4bvh89ZWR3Dj9Wqj6VJhzdfNE8cj9DNjQ2j5hKKuBSczxBKYhFEXgZNNAbd7e4euRAKymYiRBhJGtCCi5ZF4nnjV",
  "key23": "4K34fqPvVwoZ2ZgQKqrSvCm7bG7fFWzraYGuHbXGwKk2h1QzRjKkf3yXqsZNmkQDAXVV8egKyAH9tcjf16wWZUDh",
  "key24": "23EaP5qbA1VdJw5VipPnT2SFUe3v25VV9NSqzhDwEt4B2tgfwRWHLzrKbKUo4Vqkd6A6WdHnvDyjmpJpPzpnuyxv",
  "key25": "3aBLGQENQgPuPKb2LW369Xcd6AXH3GXd2By5UCPTvmZoRax7m4EHZdmfQgC81hAhPYLdevu7DW2CqsMgeBftBLKN",
  "key26": "5EMQchMu9mqWoycaeXHB2DYD4ZMg5T74arDfsT4sb1bdeeRcqzE2ADwhjyLboj7yZU7wJ7ZrzJR6tJAUbZp5u6J9",
  "key27": "39boc9mMqGkU5TztW8fVFMx3bzws85Ch1hYwHw8ExBzWvabyewpHPfaSq18zSDuMWjawBG2dyHyBzrmY6cuckAEZ",
  "key28": "2keWJTRxwjnoxrYoyBd7Tz21UZ2y1kQpVHXirxHKNt5u1nEZtH4VYHpYphoqChziTwqdQ2V38rzD6LMxojaZnZHh",
  "key29": "2cXuorA3xB33ogSE9wWhweJJEFbkE76PSLcbKBBZSHL8EzjbotiQVZbQAtcib7mfyhHgfCEgJLJGVcMZfUWLMoZH",
  "key30": "5NYjjurUgprE3FVxm3zNSgc7rg37eqCV2A9jwZYVQeUaG8VKJVukNkgBZ1pkxyKGbKkQXSFdZY6cqXiXq9vDVoLp",
  "key31": "3z42eQ4xxa8T9iBTFfDfB47ssW7Hmj3gJyee31qB6VUGiziSPn73gyyCsxR733SE7A5S2eKJZ6dVcKuUprSanAz7",
  "key32": "5PJjDamBK5nKeGFV4p8igGv6ZTFUPYRBaF7sQxnziqkrZgdVkux1BGiDQ9nqjzyhqMjzL3ZKCeFVQsCeXH852uxp",
  "key33": "4pTAKbbPeEMVc2M7ZPcyZ6pCM5gLztvZFG6hAot7EwhB6Lfs3vWZurJgAxVWTBsWCiiigCpncaMKSE18K3wUBrzr",
  "key34": "32mJohPDVuAWK4TzHneZNCUPWkShMRUn3Bgrg28tdUy26fR5Jd6DD4KphNAySmER3nS8xkzQE4UMRxKAFJiFqU6q",
  "key35": "26QPGeU6jQU11wh3jCNd6dPkdFmuQnRsKxNUA3jzJ2FecVgBj39uU89CbdfLL1T9JtwDWa2gMwreJ75SZN3ak6YR",
  "key36": "2LEd9SNPMuhgnUnZ6BU8WvMtisiq71SsxbMHPLiqtUnBvCgfALqQsXdMjjs9fVxJ4SYa2Yg6mpYBb9Qw35tvgjhx",
  "key37": "5yQNEdmKeKXTBprFCR5YHNVSiC3NeNCjmp7YsRdurvBaCSzXHrnMMLvdwi1ivjpG1utRtvehF1XrNpq9xLVD13zj",
  "key38": "3FmxFznTrXetmc2eEKAEatWfJHpj4e85BdXovzcjMkkFP45D7BwHdgXJ3iMsAKcK5HEZAH1f7RrJHo6k4bH7pXtW",
  "key39": "3hrQtEV9CoH8ERWiZtb8u77Phk7xyrmfXu3tvcsKPapShinnmm8FW3JZLL6KFz9hYEjq7DuAnpFEprBn68DxPyxZ"
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

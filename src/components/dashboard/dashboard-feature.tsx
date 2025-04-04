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
    "5c97CQCWocu5LfNKkcbxgUbwZ3Ve8FCkMCsyijss78mzQJY75JgKkdWytmdVGF7G9xv5GiNd2muMm4Nr5yiP7qPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qyZg2Dsuy9ZFT5c3gexYHETz1KeeFSqu5kmpVA8sDxXKa7dMC4YBhXFERgXGAUbBTmHnE1FDSpGBWYfkRpyF3Uj",
  "key1": "CNNSV8JaXvjU5vCtSRFkvraDgmXagWkm6hWTtCyowyTwc1A85Fon3hrCcMLCgMcrUJpVEwrn2fSpUQixE1xrjEf",
  "key2": "QLkxm7WsEQFzX2HndGZs44Xs7J5xJUj9eDzvpqPzDJoyax5xBvoLg4SjyP96XNxPrP85CK3B3RbEJADfmAehHGw",
  "key3": "2D79xtqf3SYecbcJCJ7uEpmS8en4vcNGUmoNiX1urUchJJJrbP5j8B7jo9XT79jixzPaUE6VH7Z5TyQPE69W3wBt",
  "key4": "3RsmtLbDJ6XgnDJuCwKbCxaZL7QFLvrV4WfPwWMFfWaNg4uPw63PiWsoqWNt648X2gNPM2mFiW71g4eK5ewckziL",
  "key5": "46yvw4TMuhaxgbRmjY3vkj8XtL4haShj1cNygveRWZQkc8i1bH9rVNV49SMESPpdEsYM1bCUPeRUvop5uFhPyMYn",
  "key6": "35wFQgBYz6bQvvzjWmaRbrWMFfvFod9HJbAZhjXy4eJC6oMvrPe2ed5RFTpJmDWvmpWQ9ehX6VqykWCwhKkabWVp",
  "key7": "5ftFpY2yiFxKyC8JZURUR4HUYAWcmUajWPfZV6osHBWk9WupRNixn29A3QMH9uR9bbWTdRSUCnfSCvzeuZGCZ6pn",
  "key8": "fPBwBXLm28NJVm9iyW9f3ahQm86z9gmtJLghYXCNqj7FQKeCF6VEUqNSLjh9KcvR9PQvD8YpdLJt2jxcEi1PPYq",
  "key9": "2vxLYRzYE2XvFwiXhzbsiP7YeCei3dfAwifhTNJrNkjm6HdnE12iZLSx3Bvja5NnfhRBqW1rnB2hirnb85iKYm7k",
  "key10": "4KacUFN4V1BQ9zyGXWs8cws1Lgzc5PFuCvAKCoZzNbJ3NXoaXFQJp2iScdnTBDR3ykmRW6vL9Yrsr3KcjJEpsZFm",
  "key11": "sSnQaU4KD1oUFmHWcMFRnQug6P7R8oboPRz1WFQLwZgi4kyJCKc6d1pza7nTyy6MpT97gAUXsrp83jzTVBgp6Ub",
  "key12": "3QV3jiVWa5FWR3qL7YwcuSiVBycnBLheW6wVCtgFZnG4ihKX6oBUQpn5sghR35JHmuZdhApUSFwJynKjENffzufE",
  "key13": "2RxtEeo55HWDaDFkGSPfu8sQP9vtb6xe7vtauFLu9Vc7Mn5yhzKpNhJAooasWi6omUKo2Zqr7MAYgHf4LrTVpQic",
  "key14": "3HhGM9vHBUWcApY6h8qowsXEcB5ucBJ3dTohFPe9EreJoQZJWxSGCsUDnTG5njQFNt4LAteVbRn6FpApjGpK7HWH",
  "key15": "2eRAgGwLb3CNvxZ14UX4Q39iUdgyeHuAgjKzMksiVaEF7J4KAkok3vtbvz6SmfTx1D8TnqdMe2Gmw5xU4KQKaacS",
  "key16": "B2qywxbvmnmtevC1MVtmg9cUXMqTC8gPssRew9b8hgjtbZrFfHeDeEMx8bCkiE58LJ59yWKFq41HUFwcJ2LKeN9",
  "key17": "3oGxZUK17ix2jAxBjQW9efduYf5reeQ1ms5EapELiYFGU7ySiqwiKVGG5Ywaa9SfdBSLzXs1n8LKc7pRHaeQ1rQH",
  "key18": "R6fbipBtXCU2Xh7H24KYe6zLtnkaKxLGGrgS6uHfUvvgjkNMHABQvJ74gLskJ5R2nmpoVM73XVvW9a8LcNKpcJp",
  "key19": "5Koo33uLWQzdvLDzAEJ4Ckn2eSTGRXb4hd1Cb7NWDcMuiocKyoCvLGu4ep1YvVte115taYCeN13tJCBFLA8ohfjn",
  "key20": "3Nq4KFRSfiEUTr9PS9Kon9HwsKUzckwKqWNTibGzrF41uNNMsqogZJuPgCzcd3Mus4GfChd84QDB1VR42n7btTM6",
  "key21": "2CWU6pJu8sB6vXfo9Sc5hVagG8UFkpiMKDQraZVB6ob1otiVbFs3Dnz2Uju63pPNZ5EPUUf7BJCbSziGFCtn1PMh",
  "key22": "2x9UBK6F1VAgGvtaqJ7CbJxTJX1iqVtAjq99kwksSRAnuEVdQcWJaWYRebTZueLVtCttgQnZh9rDYdKcYeDdknWn",
  "key23": "5pZE7dJZvGVMqBGdPVKsF6n68uDhLJJLWrjXgbiiNChCzqXypq8ipVf6mag3DPzSVREGp4cP1HJ7Ct6pX3aVbGjc",
  "key24": "51qZ9zXgbmi7pnhG7buvFqUaWFfvzSkXAwHLYko5bRXfnEvwQbzZBgZXZr7nv64DJA9zjXMuhSTxcUnbFDHK8CqH",
  "key25": "4Cth36pR1Y1fDMrHeasZp4Sgzy2RMhKwcjr397MEoxRuhL7LnKz4m8Ssw8FbrsB2juXK5Tssqgvfd8rmyFSRppbL",
  "key26": "5SSTHhNWCyBWy1rYB5CHa6zYS8zk74mwJVWNkfU6DG5Mwn7AbsqgWpaJ1HArYfsHa4wfkFQYWgUPUpRTXerEVYK6",
  "key27": "5S5wQqVm4jhGrKDNoWcUdsGARTd2iM2nRMo3bLyemGWgGBL6ijvcKftB16fSSLoPxf1B54HS21XS8BRtasL3AiLT",
  "key28": "4CpEY1zieKVXGgooRx82phghJcKioRXR9nNNN8jG9rfPhEKUZF2PmpZqBAwqkyByuLxueG2DQuTgRJoS6Pq9G4wM",
  "key29": "xcvsqnGSc7GUQh6zzXoaxVe2NSFTn7KsmnfHjnatrzTHEW5wMTEGDMG6M5DpYgE12TZkAySFpTtDh6rixwai36T",
  "key30": "BthFpDHNryTiiueLb5XgRJWdhZ5tzome4u37XLg4DFTfm8yoUkEGZ6tf6iSBn2PqXWaGaPusU1M9XtgEKRdPXTr",
  "key31": "3zECzjhVTSdM9x9trJQxfy8u6pL1swN69oHvb9yrpMG9wGq2M772R9YhJY46j6EsYXj44LXhmN4qXwVEkjykY4ET",
  "key32": "3FXocDoCrvsQ3xCfqGG6TZzCH5MnTXqwrajVk34bjbjCkw3FUT2hEse6zrgtFvu1MkQo5LgcNk6oDCKtUhTxkYSt",
  "key33": "3tKbJy3itkQQY63QReSXncB5BuvraGWR77wEyYvHNUMCHi4Se8hFH2tbqHyUhtryxRcgHHxeRic4r4qY57NELJf7",
  "key34": "36hS2EudA4x5HExra9qDWxxXtE2Ni6yzvknuyLaUi5sVm2ZPJWTpM79F8B6yfkY1MuTrhU4j1XKp42sNyQU3cnau",
  "key35": "5LiBHuavGvndFMuRjZAvw1vS27eGQEHV3crdpWThueKM6bRe7m2EDJpPuDK8hnXydm98v3US1aPQ44dFoiKYDmtA",
  "key36": "4BfaXpVS3YugqQXL7ATHqWfvo1PS9YZMfXfjR1VqQvy5fnsyzU5bA7WpNYHRm1nkZRzjKZDusKaSpuHcV54fLsUB",
  "key37": "5FU74b1wDDNkHQbitAQRKgFW2Bdg2bzc2xG3yzWuhK3eT9JTjPLh7bS4uVmb6AQ2sYmQGZRYmN55ab9863X15sra",
  "key38": "2zViYUi5agAFm6xstp1qVYRU2Jp5a9dhUwiTQatihJSYJcdwr7iJFsSpTabWon2yG4pUPyZbgPMtZ4mKEwJN9zBW",
  "key39": "22Cu41CZRYFsKcjhKNeecg9qaSaMMW4ey2vazag5b8EKtdaDUtokQS4mWy8P7BnRWdV54VTKCY7yNrYJ9po6jXBx",
  "key40": "586B7E5xm9DVfCJ56cDAnAkFYL2PPAVNJWsgAuKHi6aLbpeV2BdhHY9Ezcb4zKUQPsY1qY1CxGPBrf1czeYZqM55",
  "key41": "2FUgfQFUzMkDEaaiRaF1FamYUee21rWcHkFLSk8ysNbFeyxsJHDWn59MXCNDPF8jh7Ytaw2U5GGuUuD6ii6xqSRG",
  "key42": "pBX1rcvFqyp1JDMCgrzwaG3aHqefq8f1YCGThTGCTvjZyyYiiaWnEQ9pCGwn9asYRzpm5DA2PEn5mJjjs2CkvPS",
  "key43": "5ah4X3ZPDcEvJtX2mvyyjozUa6UYSZZZLUjDRbVTbXPQGq38QrZVp9E7QUPHJs1UgchbNc7kuDdSsidrpEL48D5j",
  "key44": "4gDG89w92DMrwGKL9bNzeLTasY2E56zWkJvJZ6rnKMw9GLufyKyMkwGVgYDmTzZF5Qw7yuQBpB4qWL6EVd5LvTAh"
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

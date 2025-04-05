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
    "9j5LaMbv5kdJovv96TZHDUAkPUWp5PpH6KcnJ1nfnZyukAHXpUC2yi4onMR8P73c2o68bqZ32DySRSqiDTZFDYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPojjgDhfm8WNueGJH8YfEvpkyNyc31A8rXuiu2LmNgizGrtb5dqZ4G1nzThwUT3R5hQ8q7YciYXgVFrQMfBK2j",
  "key1": "5sLAR2XSKbUvYP2WgoJZgZ5AVqdoJ5KoG2nPiP3ypQRjQKuQ3qr8sJsjpEnrruBdn4Eeoa9TFYNZShEV8widbRjX",
  "key2": "5GNhgYfkfKbYg2tXss7z68GtBGoh9GjoybDGUTEAcZXDAZbtiHpyLNqHrWGgt29p8v7zGgFvMJ5vTpK9ZcJQfT63",
  "key3": "X7bja7UVznNZPyn85Hqe5kJvLoQPUu7T63NQBG4LPApVKbKHmZP9JD18Pviv41V4g4fYDNWaij577tkHMYcsDNh",
  "key4": "2RytQkEdpU9aTWhnJ5m7tV2d2cFD5vW1Jfj4nNYxBVvt648sAijwkxPtmwZ5847RxHC4hUiqxqhdXQ2zhNm1Ff1n",
  "key5": "3QiAMVmK6L6i7GcDqavafmf4GXceS3jfVUBES8WcxxHkoAfxsFMGjLitT3GS2K2X6W1rxVu2MyZKNDwxjoWJA97o",
  "key6": "3Vwj9t4jHYpYA7LT5AJaJL7JfyKKVCitF1MvUvdUtk97TrM2HXXnRcMFKPoaNuGPxjtsLZQWZAeEwTw3GB9ghyq3",
  "key7": "3S2rkguhiuCojbUwfrCLvkL9jVwfFXEgEEtd9nyowTPXeNAcgvoEqgjipCcC7iajsgQdukYCXSK8MwVKg8VdZRPz",
  "key8": "3vySF1B58aUPoLEJWe4NvthbxuRomPTmM7WdjjjqnPmCYDaJ5MM9Bi4Fk7E82fD3E4Ngx3CyFPu9A7dVphYn2Esi",
  "key9": "4k8UqifQS4VkCPBHPk226h3kHW9c7Ak85ZjyxZ6uLxVHzxNcUnAuoAzTHuidxac8TPnhM7V7FhnyeJ4vM1Z3Ympc",
  "key10": "2eAyMPHv99Pn7XRT8BLcjQLtHALaAMiPHzjW6W9HinScjdfejbMHjmhi7RX14CUivKPhxHPDbcuzCHi95ChsR1Hd",
  "key11": "3f6DxP5B4ZE1xhcvaySvjMBpd2SjriKEGpswr1saK13XbfUEsksYBLFSbXfR3FR8HVFV3rRyDevU7YNBJ7mTBFY",
  "key12": "V3Qh3qHchLo2svCgqfnyKZGN7atLhqX23GR2qRg9SXfT6nHLXzSSTqe7c7MTzRdM7YStr4tmNHyDLKoiAKYHREH",
  "key13": "2kUqzLvX9M2VAUYuWqEk9WnQfKceAJnU5xVUbRzQavyNfLqMJdBUKRXB7dNUJrTB1pCyzShBAYoT943RB59r1UD2",
  "key14": "319orQELqPcKcTuf1zemxeCHok6VKkiXtiLZWjA8Ja6yb6hfoMo2tjQiVB3M1YynS2skfXEYZKTQhqtiobMpDoKk",
  "key15": "5LH4G4gndLguePtJXxWTYxNuvoHwevx4uQKE9szMwirQ1CmzRs9sxfchTz2bfQoMGC7APe28JesuMhSr1oj9oXhG",
  "key16": "4ukZTWmACQo26bLtxL1hjfoDyDqdz2NRkzKcdLPYLr4Ugd6c9epR8B2dyeVYnDHmRSZ3HG4SPrL3SN3LkBxi4Bpy",
  "key17": "BBJm9iEyaRYPXdMiwhQb5oBxHAgigwsqpJcGENBPVSNpe3rS6omJGpcuSeErProokV2ebnjwPrnC9M9q7wqv6bJ",
  "key18": "4WJnXPVm82hH515pXQ2bdf74RUH3bMwyqbDCnNvZdMBx19q4V2LVs8KB1d7wueXWa2PL8efDHGnDvgkLKpRjYZG7",
  "key19": "GNnNbMdmpjK3nSiywV4fVUezEAPmy92fswCzVnBrotW6UNbuCykWrwXQvfdKCferHaod1WhKjjBrSASQdiiD8hX",
  "key20": "WftCF1ktPivvSzMN45GbWRGzziQvbmtZoFHKjcwLbWPm3PCXcEaCdHy3GEcZe4ZoAyrNuaqSk1ZFSZcFdPG5vzQ",
  "key21": "WKDf3hSUurhY21YCG7VaV58LHCH85rf2MN62ykmQCUnbcH9h89P5bv5o75t89JCy2euHXVEKKjzBUyoFMh7ab4c",
  "key22": "65DTc38N5B3Ls6PTGzMWvZVzhKgdT4yfnFSrJSicUXqETiq7dBUZinQU2HTUrpH1o7MkXZLKnpeGq8ULBssPNQ86",
  "key23": "1CeKNWhZUz4Rdzixd5ZC5DtofK5MrQx5qNevJPuVxgTS1vyb6pwKL8iSwbBDVaucamQqKuvz1Dsvd9bnd9GLHLs",
  "key24": "3p6D2Tb5NaZn5Lhk2feeupXtn9zf8GbijzRSQZ22DZwiFZXUXG16fBDbvxGptCzCUXncsRCmkgAuwdLrYr5JsTxJ",
  "key25": "4UkSpo7Yh4tYMRpjXRtYrbdv8rgUPYwQiZc52wBPnoZ2LJYtGcivojBszBXLFMQoo7JBMPfcrstFioRGSLQzK7WG",
  "key26": "Cbun1c1YC3njJxeLJsXZG5poopMKwiRFoMnf7yA9YgAG3ouGTnAN7upN7HjT9T7Vo3JkMZfan1nKLt7GystUns1",
  "key27": "2KMzJF39wQwEwAoDraT26KoBvaLdwAPWsKcdNETKw8yHP82SBLaGWnJT8a87enr4k5H4h81cMS9yCitcQ43jd7Bh",
  "key28": "4uB5T6jGohS2DMNBY4UYM7q3PF2eY2d2mU2DbvHGfcTkpaCHJMT9t8sibhksAZ5Qdasp8C6AKJSnGTbTdv2pRFUU",
  "key29": "4ghGjnVXDEC2KU78ARFfdcUZpWnmeMhkmFmX1bdcEcpeVQmRR9JGvm7KXc9yNpXFm943rSJwkwi3TEAhmhFwfp7",
  "key30": "5e86u5QRGywUU7CMFksdPcd2dW9oJ95BnS5Gkt8nNUFn6tQdcpNcgSefaydCWnWcRVeTJHkP5V8hhzyamsLkWrXe",
  "key31": "5SdGfz6k8YJLm7Tu1kff42spjedj9G3DPdYGLmPciyL1LiXYnosZngKwoX39NrmxafgozegfAX6TVyx8R7LyE6Sg",
  "key32": "aUynZCdudbcE99DAYYK2kGXjTq4LqEZ9QmeK9QpghMrxS4VYFLbd5jw6Vxhmd7DEEwETnWMbGDVYXsgibjPKpMs",
  "key33": "41wy1f3TwG8fyP3zLhFYJYCqNHznzxqUdtXZ3BqhE7ECTCifu8NfdXRRgof6CEd15b1k915CZAUQ9PQ9fJH4UZSu",
  "key34": "66tXaM8WWP33vB9rzqkxEeGS9dFKuxLcr54qyhn8uwcC4bNikgUAJReh9d7rGiuEspsa78VkqCHwTa9ZrVkVDx3W",
  "key35": "vw5HgjYoKmwDetaELw3bsBPnsJ5iFVgBuKqNKaSuFJkhRryPLChP1ZpHbBHGP3198WtqwQaPavdwUok1HL57vdG",
  "key36": "4T49iX3BbKiuyWvaCniXQqALVaoELkiYUmhj3yKtmszT2QufpPkgi6GtxawNrQZFuWHd93SZ1isHxqtkdK9RPkzH",
  "key37": "5BKZ7WbYGnGmpEGfmakyERk43uGmhKA2GaAzYJxrP5hneiWvgjdTvYGdqRDZPZXqNWXQt4MDgPm1kAsNMbGZvfGZ",
  "key38": "4ePWfvn3Tfub8RcxmXr8LLQmhXyCCiC3C1GPqgv4zWjhV27mkDvkpxLgW9UWbzQWECpFMvH71CSexXpzgz8xLSh3",
  "key39": "2yTrN2TSZKBwi3GoWq5DiQ4HQ1bZL8zYD6cECnozRaoKACHs95Xp8FU6jJFFg2BfBuKzRL4yxhUkp3ZqENaVAtC8",
  "key40": "49pXAbrfqSANTANGWM6wSZEBQ6iGAJZ665k3kc6Pw4QsCdkBKpMaogPfxL9gCtb2SBwsARSyJyBZJPweyHohaP1f",
  "key41": "2rx6gnn6RjUezfBZe9cLyWVRaTHyr3w55oXfGHfAfiyTNd1VDryQVLxjPNfgjUbKw6HDxSnKFtsEqQZELRBH2ipu",
  "key42": "56k26LGjXy37WCDxUL7Dqi1fMZNExaVgZm1FwFz7PfnfUYrB9ZLKtePMCdJd93zQpSjFDdUAiWhdFboY5WRyFZyR",
  "key43": "29kc3jwRpnhH37tFJqFcdca2JjQ2wjjytmt7iSv8GAeHdNy1roVjeuYwtk7icLHktC9xFrSNcATCitbb8F6Gy9UN",
  "key44": "2H9qs45t5mVMENvyvT4wZw7ks2VqdkWeDKjaF28Q3gYeLR8vnT263s2nxMVZX9jqee4KrVNGk9fKaLwG2ztLXdQi",
  "key45": "rfgQ29am4UeDvFKRfTQsrmq1hjvSSb95rhGADWWZr28DnKGKDNicuUn7U7XW9aLtG5WyL3SxB1vaoKYTjG6dJam",
  "key46": "4nzb3TydrwkwRKwUh3yr31CKfakMqj49pqWV7UM5FHFeBTJk97Qbk3ton7xtXpQfLVaBtiCxoQr7csgjqACXT2CP",
  "key47": "3axCMDxj8z8qQencfn5XQT4F9wJppGBEbgcVMj6cws1p57sEk3NfSnv5PuRc3bnE5miKssn3iJSee4MJTHw5rdMb",
  "key48": "4EgsXUxGfPw6PbkxyHYK8SdHumzWxew6X4RbUh5d3bA7nTwUVXNt6uJBEZ7jcbS6M3LEJtHBpw4UcgKychkmM1ZE"
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

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
    "4Piqt2Pe9ytiVqW39wU2cfxmzV8TFgqQXCqZNvpCgDBMYnh8yKqRke12saKSM1ZYFcyo6AKDZKNoujiMnD6V6HZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDZdcXTz7oCFCBYacJoMustasqGu5SdifcfB8gAtpYuktVnowibcvw7Qvn8z7zBmhR7vkKFUXjQZwd3dAJEfEc6",
  "key1": "3PXLzkkAyeyaAa9LZFDbcmwZYMZphc9AdVxQYw6rxLk4wdahwKEDushQSZWgyhKm6qZYmASTG9NXhuo876Y2kmj4",
  "key2": "2j8fHsq9CPMGW7KKZer9bMff8FpLYzm2J2Y7J7S35zj4U33fD6xTYVSJQaKhbidffR97FFdV3NfCMjCCbMaqNeJa",
  "key3": "4rDvicYBC2Uo755Ua7DHgABizqyKrrwMgaMS8QVezazPGnKskJ5cKQJPV2xXNFZ9MX8fqwfiKr6Rfqgj2ASeLvN1",
  "key4": "27j4x9qka4T2YZjsmT96FsUb2C68FYTwkY1aab9hC14NmAx3MkDZSwTq5CCZUratk8vb7YMXzpSs5hyEs2n16cMX",
  "key5": "3fmYgqpi9h2eDjesgpuT3TeDo6ALvmfiNCUkNYS4sLdELbGnHL6EhvoKoU4Epzc9qUDqx3vuaazzQwz2okMVwmWg",
  "key6": "5nQZZQ1xd4T95Wnz8a4tM3q5iCvMugydaKS6utUEuAh2c2yz4P3zVtC8b5WfDMigxz2ECJEttsRMaxmU4xF6A9Z2",
  "key7": "2KyMuVuzpkDdxC3h1TtBmQRMYHt8EoBJmr2n7ZgVm8wMEbzLJggEMWX1ogeHoXVmc9SJ2vNJCMzR75vauXJ8ATSY",
  "key8": "56wePQzPqoGf3guUwVHS2bASCrNw9nbveKnzN6ktZKHxx4hx8uXLNwzEFsVLv2iJL4jgiypHvYVuutBS7DPEGAtz",
  "key9": "FnrhsensWM8EhtT4ECza3XPU7At5pYRdzt9fQ57jaRmkzJJ54TwBU8DcWcjHLh6qsxpbGe3DMpzaXFWEkz3nAf5",
  "key10": "5yVEdY7XkJWKcfiDtd4k57nWpnEKLtacm75R6gdZET8PsVvhDFaiwXRnygEHDHNN3jYn7qkoJj9JWBi1L3HgkUjB",
  "key11": "8hPzw2rpjXfXUs7EKyQTGNp3wHosrmwZ7Ks2uFoWoPkwi9JKGWgdN7qjpR1XsB7dZP1tWDwcSCnpvt9NhvKg4yg",
  "key12": "BEDV778hDNqqU8Q9fbfXfWnqB4HFCynsyhgxhuuwJwQY9pLCVbY2nG5UX9VbYJqPBs5iW6BUHwF3FW8WHQHyoNe",
  "key13": "2Kk58buvBkXZJQcVm91JZR2xQWwuFxYSf5vBoNq7KFL38aYwotcziKHhsmyq12jAydTb8w2EPZquRj41QqehtgAg",
  "key14": "43HVSz2oGXAZRcxYhxf9vtywEsYciuYBorvB2uNHeZVwGCphJwjdFW6CrnvrCw5Laing1igfEmCxexq5xM2KSJNR",
  "key15": "86B7xiVTT9sb9xLJAUzg9AUPgxyrmAkTJBdiSzanNQXYcPZPYtScjrJXyyNEX3gzpYSyvPStsDbkYcJfXcJMr6x",
  "key16": "4dpaTnHtJum425hdNKkoTDoMaZyJEJNhgQmbDqmTLVC5EfDULgfa9Zvi2csWLtYsW8uDWoYvbgasi7FXxzh8LtG5",
  "key17": "3Y7VALRrFdfCShawyZke6P3ExVdZtCZeQcReAFra8ThxA28DUE3RxEBt5Zv5mPuyAyh9hGRTK8287FnTs7UdGob1",
  "key18": "5t3fzx7b9KLdTwAnQspYQSfzuYioaLwioiXSN1W4SQFKWeijYmnXUX5rSoug16szc2P6CmtdRWwGJJAqfseevpdC",
  "key19": "2Q66zGK6r5vk2YRNwFQU7xvCEUwHgoC5dbDbB4dYb6c9BHtLbr19Zx7eqKgPC7GM2HpGusTtq9pgBnvahN5pYgLy",
  "key20": "2wAgza9A5qZTrN2oKsFfoxNxa8tFkceWRDmyiT6BspTMDfgNir1KYnrUEmJWqiuqBchPtkBcFg94eaTsrDdQ8izx",
  "key21": "4TmJY6X2XLAp1u4MZfbpRD5UiiNKr4QfAMdUFJBgXPZDn1gXBP4C14U5x7coPX7u2dW6RGQ5U7i9AhfKJyfFPq8C",
  "key22": "2W2LAt23dvYYMPHcuEeDXVGEG3fLCfCqfcgxR1KAkTZC1JXUdrMWY3RKhV8FkfwzdeW5sT5kMyoh6PdLYZb7pFrh",
  "key23": "5aXZ3PmHzLpmiouE8kRCitj4G34jWp2zyB3cqBj9k3dtRLjdkbh6zJLF8om9S6LzW93oMUjyQy6VGirXJvX3b7sp",
  "key24": "2bQTRKHYMiBteWsbHk7aTcvXLXZb5Ui9r34NnR1F2euV35Y8YEd61Jhei5vtynzcG8LHpwPftPL7kaf4ARLSSqzz",
  "key25": "42EqgcRQR9LXt31VCcx6j2krqj1mxcjbULr8H6TFrzz2FRmsPrEhcekiXfVuFfKX4HMFiwfyMTNk3fmJpX54skJW",
  "key26": "3Ma51fF7XVodXbygtiMrjKCtiAcpVgB64tXgCxZrjK5zGBTqJDNNK6cSN4iZx5woj2W3BFd31df5B8BteFtCCJBj",
  "key27": "2EpPneXPQvmrYF2Jq3gwfPRBiuhzKBvN6LiFiiaNeqsjkdAKNAraF4Uq8Z93A3pS9yy8T1fTr5HAvYBUdYjTktPQ",
  "key28": "5Nmtw9Br8eaodZFTrbWs6miAwmh7o28QYGaaVLAZvFBNMmhGP55wN7gqKBBnd8gRaKKyhcEcwuB6e3TfabsimZDr",
  "key29": "6yhPsh4xsaQ79pyQmANKJgh44qnpsokPKbYymQSkpp99uXKs11ARFdkgVaVUj1AmLanwNycjfFFRhhKm9F2y35M",
  "key30": "5udR6MujeXeTidGr77NuUtcwtat1Mz1Jzkm7L5vS8XRFxLvcnjW8cEJBAD4ak9CWLv6kvF65hFYY3rcD99anTAmE",
  "key31": "4GahZpCX9njbRvQnnkLMPArZDXSSW24neShrk7dpf6hwdrPmAxhVktRoscPJwRE85CkcjR1y6chNDEMybt3Naook",
  "key32": "2s4y6QRNNrKcQKssSpw7eDjSBLqSr4325wzky4Y92jPiEEosYw9eJRKxxBp2XLNVCEBKpWhATjqrERGFjzyzFfvC",
  "key33": "26maQEAHvvkQmybus6jQeX9vE7phnTzUY5YctBAQ4WV6xKNvZu84rbYGhPPgNXMxYNiw1VBdiCgcRjxwqBL56PYL",
  "key34": "4aEKkbM8TJARgkGbhYj45ynMYvffpaBPbCjPdR9ZcwKz9nmsu9kTC1Fx3SirxPj4tZVGwSgzqtFFRycqPYbgVoDJ",
  "key35": "2oXjmwQPw33JS9WF2sDasUCCNzfnPzuSXuVXjgKQ6W3NVvJHKxvFkfZci1Zjy7wsUfNJ31Kz423uY4zQn32WbMix",
  "key36": "LqBY3tD7LBk4ghfRFpSC616vpQcLC34NZe8m74NDYYkdRVmdn9CTF8qJX3WHnbj34NWks3iWRLqvNhkvNM96ioN",
  "key37": "2ibEBS1AHn8XVtcHkNQcX1TCTaGKUfCUKj2hmqu2RFmuqZ3JfTy2Dgch2qTbZ92Fy34pS2bTAzgPXK2Vw3TRj1Uy",
  "key38": "FBjHxC487JvhitRNU21oyhfdy1Mg3AsyqitzH7oTtythYV12JJU4T5c5mBozXuY9rJN2xQRsAMtKzJnZLYgD87F",
  "key39": "4r4sJJQrq6UuBZxB3s26hEH51U28jZWZaumaLiTGz7JGMe1cWAViQMhPK49JsUxxqTMkmo3WAPBbdk4kSLo7GGSt",
  "key40": "5iWHjiKfMaA3a7di8k5K82Az5HRnBsigYEBsSCX1pUKkh3PEjLtceEL3z5mzZKmdJwgPduVvNDAChPgxkUNxGL88",
  "key41": "3SUfqZQeijFj59MHUYhRBsFohsVgGiAo74pAp4Ax14JZATEi7FcBN47ajEk6fcFJNTG9edR2xgQ9trqh4biAwC5K",
  "key42": "KouH1Qg1NvE7yEumAwnSMF78hWpCV3kNsomC6KEhk8G9hkmwWvsMdPHbbvQnz9wyWnDmCvjLrvZcuxyobsnbKtc",
  "key43": "2bTEEaWJAyizhxfuFMPQirRkNrA5z7rXWsWVUPHcaJ7tf9F2urKsnFiSz8budgCA14HjYc4LYDCNcstAifytVxu4",
  "key44": "3dJNCTPFCga9PSDYR3nAzS4VDaVPYHLLQ1WbYD3rPiWb8kqpbmehx95qhakenkN5VE6KwfN86L97oUtvJ66uht29"
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

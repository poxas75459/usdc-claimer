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
    "2aW81BEb9oytHvx7vHLiwoigYZ2YUBFX6yp2MhXUg6jvMKUXaNe9ZVGL5AQgUwm8BkkAYaX3a2kfrxw3rn5nhGSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2VPMgnhMGnVqMMfVz2UYupYaXhZkzWJc3Rmy9VpnAKH2Wxqf9NJgeYhgocrj2Weyu1oX6GtaKMPKehoEvJo33o",
  "key1": "3JrkTcCPcr8bqZPhMTTFgkQh8ay3wLVs27vNRiZ87VimDrfj2bPWQkCjRgwkjtsz2VSdU59L8tCyz1sNMfg6tHBa",
  "key2": "5MaLVBMqVJ71kV68Udz86yXiVNEJ97idP4ZLuf9vR5VSn1UTUhk3oqxRnWMpR2pzo19yAmmwoAxRRbF5yRvnGnKt",
  "key3": "5GpXFSYHRv7taqCA9RMHpdLxZ1nEvzFKzqggBJrCTg81igTVnCV9knVniFbbydFphnwmPqHnxAKXQwzzQboEMMVa",
  "key4": "2ee4JyGZcdg7E8DH7YmRoMDKaqRW2NVJm1ymQydsfX3mGdcgsRQKfhBFg5T6NTri8N3evxph1QNWUkcmAUJWXKN9",
  "key5": "3a2FS7xLSLAxjh7oTXqAtv2sscUq8gJuZY9qhHBtMxj81uu13FLD31gJMKJDXhUC6iwpMudxxc51UvW5DpedhFUr",
  "key6": "DTkTHnxSmRs8D1LprAdDZW1iWiDCfT543UXU5i3JHbf3W8AGrfmWTr4exZg8sSfbAMBgPznZD8WZ6VMXQHuYhWX",
  "key7": "2PUug9Nuyi7so3z8z6snfiqCXVuwq9RM4znc52biWX8yaVcwWduKmk3uR4MyPS9zvrQdK1QEvB3xFu6Y2rZvsHtH",
  "key8": "SzsHzivP31v5UZW1rwnwf9VH4Zp8EJE8RrT5CAxyLjr4e4BDxSzWsecrhaXRrTzbyE9mc9VgW7Us3W1vhngWdfv",
  "key9": "2fYRZHGTTgW15yF5vvdn9rBZb39sHrHPhEw6v7tURu4amxNfAzavS2keZpWTYsNxem8X21ymrtzeELvrWFkRE6Hi",
  "key10": "5NFU7ykwGeuiG3p2BLt7kEVk3jH5goyPaxKCmr8387H9tMb5eC3yTtHTdhJqdeJnbW1Dy1Es9NgJHU8NpTkzDL59",
  "key11": "2DgEK9ZVRz87QrLJkwTdnhwT3FohvjHHoPe9XGsq82g9B7nUevAUyeTpqxighDygSEQ8EAqiKhB849TAFqFBotDP",
  "key12": "4XByvWDnCAR9geukUrFaH4X6riPhRutNCPG8K7oGxsPiZhPxVwW9Hp5fae8DS1HJue2GB1vrY15zzTs5nCL43Zw4",
  "key13": "5chh8ykCRK6NQmw1v4qWTrruTTBR48fj2DWAVhHVh2ScGnJ6eg1bk8xzn5f7i74SpmkzCqRkK9qCrTRDsQ4fmi9H",
  "key14": "5Gm5pisT6tzTq7U3HJs6UtkZiYGZW853NgPMy8J84ChnTAfesxMLoF6sgopXhittbW7Q6LuQPwZvac8r9WTEHCzA",
  "key15": "231e5LMyCxaXBVyAj7ZQtNDmMK72zrXCvinmYayfxP8GUG5aZHjwM2yFu8YGEq26n8W9pZSdRAAWo8Am7nGjMAxG",
  "key16": "4E4kNj6tdUasiDWoju9geefQ8wvuxDra6TcC7RpDnvXUDUSnhGZrv3Wc85z5Wq35YSxjwgBmKF1gfh2keUody863",
  "key17": "3GQztZvWtVzBNewdTqQ4i8HsvTjFFKCZXcy8wu7LVMbd5wookxhkj4p5A7jKinmzgaFYNRyyZT7DX3XikmLipA9n",
  "key18": "42P6bhVjBspxJC25ndW8KfcgFbkKr4mJLeMbBTnsjin3R2tMgvcpA6GTCHwcVTRAoyL8DPzyaLDTriXtJcYkeFeL",
  "key19": "4P1bxpkyQs5jcBfewZKxPYG9u4dA7YtudVmCpvJ8Qugaqa3oPfPmhdqBc5rSL1WBorPCZySTGCkDS7Baht1qGcuc",
  "key20": "5SZvVtTCdTMwnhyvQZCG9o3wtSWDxCbJeuCx8hd4tCqnQTH9ct8E3yfFVKGH6TwWoayzK6bovPA4CrvF1u9411JD",
  "key21": "4ezWkjMJFEgPDT6wo5yZSTz2bhU2BETCCNHjChXB96pLWRc9PToj31GzuZoAtQa4U1iUeQM4XKCgX4Y9D5Uf1v2Z",
  "key22": "5MLCiQRJr24pZLQe2NnxCAu5rfsvtuki26TLfifapoFwSTNcJScpayAbYgJFJ1vmL4dg9hDKizGDk2uRMNQchqLZ",
  "key23": "4uZN6qMFp64WVDg592Kgiz7JQVm2yx5GYbrv3w2Hkcx7UFyBo2WK9fEJ7iSibXQxfpgP86NSJyj63HRAvuNxFvZC",
  "key24": "jdLGozq7XtEUvBen6yBzxHBtNAj5AYig5kDJt1QV2he8rTRt2yGRFPTBVkkck5Xp4FDD3z4yAVJs9icnYf28nqT",
  "key25": "3pKV2t2zSL7WERb4MnhziSiUxFXvfDLVUAM6Sp1MVKeN8j24jkXULLgM5ePnJQA3B1AScyN9KmQRmm4mWUH4yFm8",
  "key26": "3WunYP9Qx9RfnFamAqqbXNwMHvZFG9d3tBW8dj2FXCaFntfjJfda9Yz3gWRWBqzoAcNGt5vi1VLp1WN5DvvYkwVX",
  "key27": "nbCQkQ2ogE4SLKWDnVenvAYsiYutmVJKttYnCkfjhqkdtyNj2ERSA7NK3Rk5dAvfiRYCDVWDdi96bEdhp8V54ip",
  "key28": "C15ypdYom1XwfdEnMaa84vzR8wk6aQVJpU8JhLiztfjNUGjYL7tYG4XxxqPrdaFnRC1XW9iKy1xesmDiTuyBXok",
  "key29": "3riWNage6G3faUvkpzcUhNE9A79pEgAQ2Jm3JJ5jFBXV7XSbwv8upmHqXcpqE8X5x3vTVYPYr54cWGAeKSyyhoNt",
  "key30": "3exCCAUyPbnE8iEc6WdgQARqiXDpk9kgqEAoJUB5XC6m686FjKtCQLhz2pqvFoKi37BmnfLzQEzTcDkMd2gdbG3V",
  "key31": "2VmVQU757yafUADBbZunNBM7iN6znzAhygFaBm2ad17kUF46cmzREcT4ZyWry7puqqL4SXeYP2xPhHoJqmMnXXp",
  "key32": "361Cc1J2wiUQSWfVAkrKsFmksq4E2oooPdzRrD3y5Y4EJ8zBmzxefbQwaebPo325vWThLTaserJbUPBfiuBwg6H3",
  "key33": "3HCF7JLj53f3zSuqZg8rSubdUAYp5oiEb5rxs19JSgtCZbv4jHacqGBuhnt8ZZA5e2oT6uLiQCrGqN5fEXkTnW7R",
  "key34": "nAy93gsCNMckBCBvoZYPunyGksHqtxa2YkiJdFVsSGrrNYatVTfUwyrRqRncxJH6mLcXhN26s5Vj8GA7FJGAzPi",
  "key35": "37n2vwzwyB8MA4U8kH7d8dciLa4HQZdbqCXGB5Fd8Gt64Nfxdmun9kSci1L9xX74ZXLyXhoSdU1AtdnrqDfReZd9",
  "key36": "8nk6wnyQS6dYJdsiX2K4bn59SmYhyEfJUhCwv4uwpLmdw2CiFN8My5euFb8LTakUaUcBUFk1pU7DWX7sMTdPQ4m",
  "key37": "5EyzB5CSy3sfVajVoieAgEFSUn37tzvyrGJqwGZRkbtJfqMzrjvVWjHGPp3EXw1mi4d61fdQtnZtNi4Fw3v2g15t",
  "key38": "35Q4BNQMk1n6JUzCLnwwJi6quL7MYaDRHFCJpNy7Qc8dXd2QHXQfezau5boaBgPGc6HqKFrTDdFgExSWRe3jDMM3",
  "key39": "3uYEwE3cFdquuRXRsdbKKQMAJrPfgLkvjJKSFZygVuWE4JPysyJCDDCRYc3TVWLybe5MbXoRXqoxes8tAmZawhy",
  "key40": "3dKLGvpWsk5RsFXYas1JybPSMBBkTrB2FjUe6KyWudivcrubnD6svNXoTiu52YA3s6EPMasQGzzKYCF6LXsFwksj"
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

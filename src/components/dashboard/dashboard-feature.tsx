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
    "53jwiqDi6psej5KepD7dzLXio1ifMiob8eu2JmK6qeFUgXEqWbb2ysir7779eq8NqZp9WHC2LCeYyvn9r2iHoz1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ZcXb6UugaEvFY1nAUQwoqFvFotLunsDEkFGjxaobWrWfu79pjPfHxUzrbUe4MZAAbAyEByLcqM1yNVRybNNuBx",
  "key1": "a4k7LUDA1KPaLjt5eaxCAJzamWFd8EHJca1gj4NGhNBx6qNzdgZhNRQMATxQnpdy2fDdBjJF1eHt84iwGuyg2G4",
  "key2": "zVNoqh2RHWR639iZPawzDDHti55Dic4Z5vVPiRqD1F4ZfGiwfhTr7rCyfCxwFxnVCmxdnopYtaVpDeaRLvUer2f",
  "key3": "4RimuqPvCSdGYjkQzMin99BdNSKPA5psdSsncVhRioMnCtuFd84QwwMjkAeYokNYQVPyNH4bsgRn7aLBiZTMEqBV",
  "key4": "2M1cKGXChuRAkbM5KAKqyfbscVsWmhx2qsJAQZ51QrnrRWhBK9s7pCpAKUnEjkztpiG7phRS9axbVLQmWPQkFUZ4",
  "key5": "3QJoCeVBek2yPa2EHKSZLKV3XDLdSBF3nTHGdTxJ8EH1gj8eFfmBT7oG7HpqpvBoJ86qC1yAPVBUXFBTF3uQLzyQ",
  "key6": "2UcCprLu6cmLkg8gofqt144NzPLaRurWaNJufXFoXyZw3TaC9C3fvWoq6Wckf4Uw7cxeqUQCQk8GGCAQcDTjkY6j",
  "key7": "2M47fQfgWFKvTCc7vaK5y4AX1YrfD7RfcWjyscYsC2oZbWFtyjfCVbBVuh3aBLJb2RhVL3qaEKZBHWQ4vRThJvN1",
  "key8": "KBFk2fsLFR7DXBBNrDsqz3GYk71kMgux1teZwqZSt9vSMHQuRoioSYtMwDnsnqREjYaT1H9FCPtgksxWtG3VkKM",
  "key9": "A9TvbnLbQfBPUUvdkLvBGCdHxa7mMMGbC5BiYbqpSeSapAVxzyXJnsDRK3dH2gYxewjPZS83vnNqAdqCYMj7bZt",
  "key10": "2uKRbL7SUThQ4toCwWs4jQYCnNk9xRmK3CmiUZFB7fHSJYZbuMu79nyCSPifRAFCnY4MgNe3wFG9eY3PSMQeXpoQ",
  "key11": "3gPZUdrbwdMadgW1rwmwjd8SgmXNTubZuudNb94UhKNdxjCv4r9uy8ENuiaxrbh5B27rduguBzsVCGFY2uBnWH2Z",
  "key12": "59RfQVSk521tiHbfdXdGXYmLXrT54E85AYrHF5opMq5vRzCDtEg3SdNCu5iKYsi7zrA9fiXMTDAsTApDTMSJEEg4",
  "key13": "5mZy3pGkAQoG19dCGeEJMkGeRL4qfmfdXCJa9h6bnz5obrkwchDR2dwHqJ4qUvbp78xTneX9aApkLBLEerBxfnTz",
  "key14": "3kpo1vcrSfqLM5fQser644TTiDvGRfmFhHRJRHpnLgLUZPgCUYZoqBS5cmytcQjRBoxnXJ4b1eTzxFNQFdv3R6GJ",
  "key15": "5j9in1MowETKPyU8BheEYUcxqRL5Xpd29afU5cukXF3d7ypsSHTveaKS1WZ9T3hZ3bfLrqXfNp4QDdKJoh3pq7br",
  "key16": "2iD32WYxxqxWAvGotqiNdMQvB4GKXhwkVQaFPLouwBRL6XkA4hMCxgfegTU8f5Q7eQctCosSExZKzdm2T4Un53Dp",
  "key17": "5b4JmTwK3ArUbe4m7Z9cPNTXcsjpzEfx3ao8J3VXngqBRKkDKWAssEFUYykZ3quDYr3vPWm8tYF1FthmTssZsCpZ",
  "key18": "jVf1np3Dw73DghXSP7biT84cqrwuubDdtV4dKsSk1wKDnLCDE1M4fWdtjNUKrTp24ofNbnNqSBJ1TGBo6uQb83U",
  "key19": "3xNGDe8iGuZE2c2cREF1LxDShWmEMuEpVEWrqrVB5opGCEhXMRUa2jn7w3RfFHh7enM5vmjMWTMC3M7JFFUvLGd7",
  "key20": "3DV2tkbvSCYhgsaFUUsxLaueRxncNUUUyKDr78czhW7KG8nam4q3pmGQEBsV2gCD3hFiMW36wnYpnkh3a5raSAi9",
  "key21": "5Ldh3AipAXmijF9Q2ZchqrV2ahMAphJFquTqzEZake7wfwJ5ab8WgEGoMWMQaWLSQNaGqhpHzvvg1muJf2UAZv4m",
  "key22": "4XxRSc8Venfzqof4cnK6bUfNuW9UhEPWNdSxAH5NXuRvSiP5ZFL63kcRuWowG2CPobFuEJzCCxwsoxGLPNrMTWbM",
  "key23": "38oxRypPrzZPmfYofnjofsAJuvRWVjgSkQ1Y79w3gF8tn6UA5bDPs5ZsqNckQPz8ZKs3TKgnGSE1L4wwLrr2pgeV",
  "key24": "MPJvHeT6cshfCDYAh6oSmeVY4pYnMX62J52utU4WN4q7zJxfPvEsfnS73QJB5y83P9R7sUU1Y6HSU3jZE9ybCJc",
  "key25": "Q2ncRto2Vp8eHT1MoKifniZbXW2Ap4Np1zTJZUY75QxH4JiLGJ3NtxkmmEc4yieSJnrqxNDk8B63UZxRmoTUnax",
  "key26": "5meqWMBS1vpy9chVh15eKspLuP8WcR1F7JHrZUSaVXgruvvE2DrPyC9UsY5QwnARsECJheacihm9pPLq5f3b1eRJ",
  "key27": "2nKhQJ5w3tmqufJHweweyqbt89ft55rBbGq46RgDypP6a6ozSFUrTtssuMSUyk6heseJfYfTBSxQ6SJBBW5V6ini",
  "key28": "3QnVi9nPQ2CXLq7igUiY29ChoXU2tdS6Ndo8cck2myhs32JWJ1uQhHh2nEeiJcpHDsEc8fpmzpLrMdGG6nZQMCiq",
  "key29": "4RY52bHzV5sCewWR5Kwv2pN4Q6CKtaqNQwgvxh8fqqvdbnkpjqwf29HJfSQir6a51CY9J2PNmnNENKTaYFcXpJJe",
  "key30": "hK1L3Mq49NyRb9GrsLX3Rkg5ngNATiE5kFtgHG9Zgvxxe6sVLyYBNepeAvzeWFfmPpdDNGkj98neRWmrYVn1Lqa",
  "key31": "kayx4CSui4SyBjQgzZZPbiKQXg5q4MiCNqtEpgvAXprnV9pPf6a7usbHMxbDRLT7XwDLQQaFeWGm4ziB2f7e2Vn",
  "key32": "3h7YVGQxzjSuUBDZREUuXuVTgy2zqp9W9ZrZwb84egDXfx1N2JmVJwUapuBYPg8QCQde7vuVo9T9s3RbN4ViK2oF",
  "key33": "xAKLLsKvsTGhH99NhcGx5nkdnVmk4ucN6gjvHWaee72Dobw1mzVfeFDJsie5gJJG31XBiv8fdcAuNhARa2JQE8n"
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

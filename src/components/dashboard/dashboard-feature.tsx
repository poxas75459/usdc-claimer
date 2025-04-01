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
    "4M3xRMd42wEacrRk1LAoQDLJZghcELCHQNHNeaK7ipDfFbF3jwuYxAnwkss19J1XHPRLT8KZmFPw5hG1aKbLw3Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2jMJv8xvd9wnQ6dAPB36Fy3mBUPYPSXdsV78dQW4gFEn9edRcF3VQ98BNQA8xGYsSgfouXtMyJ7Q5BLaFLmG4R",
  "key1": "Dq4REwPi2Js94eSRdupZWwKEJFmBAKF6dtooqXxJ6Jn6XLPZ6Cq78wy8o9WqQoHxDKmoxK8P6vxXRtwr3sJ7owH",
  "key2": "23kemZWebynoJ9UkiU5cGyFTqkJuojn5LgSJGBYggGGxLBGZPJY3LwFgVyajFymNEYYC1kw5jdVYKnLYxYgpf9dY",
  "key3": "y3en7SL7ULPZfmPjjFgFinzXVvCkQcw5sqM1FJysRJ72ZemKaZqjrz88CbLM2ecE37LSHhrNtUMV1wY6KmhESpJ",
  "key4": "5cdRzsFSwDRVTCvkuvYQSQgLvM7FPPnhYUnd2UAM32Dmw3QLjvLUEN4H1oX3P4r7ekHcAtzqF4okV93tDELjSBws",
  "key5": "2AJQk7WAW27uuNq5p8R9AQUwP5UikkeDpCqrqWxneWSUPjPdTr7P8myTRsnCP4w75bCsrNCEwLTw29o9CsTZzH4C",
  "key6": "PVuSDrADw7atRmgqh7oBCgU8hnecBdA9fvEgGLoztNGxw5EEpr4B2YBDQdzhnpVWooSRRuoAJ7TLWUXRTkzwuwA",
  "key7": "61ibLL72VZv9n2pidnGqCLTe1P2zCSgdBi9VZD4geYpZUmzMqYBjHXHmu3jP5XVAi3HfKY3mB3vH4ud6tHjM19t7",
  "key8": "3xp6GURMq9c1yzBQGwvCU5hVMVAxtGGFa2YA6Ez7Gjdr7eAGFvy7RHZZkH4rvU7Avr6r8JVjCS2xYB9VUzZFfP9b",
  "key9": "4dDqEKqR33fo2VFy5r6zMXsidTGhRTMNbQkrd1vd7JgMtDMpDpQYfz2BsiFRPRGFxPB14fEbTePC4E5pBeMmML1Z",
  "key10": "Lwpqa7mto3d8jdNYJ3PRD27VCnPp3YGz51C5p8MtARGZR5PiUohPQngLUMxFiHpD566kftPd5QMjxNKMDnQaY4B",
  "key11": "3eAJSbkbUeuFfehYTseMFYcUoZ4Bbby5bRj3Xzq7WXiKSCBUYbvrrvRAbSLrJvXkp9SjZCdz5bR7cy2LnsmYfeYP",
  "key12": "WLfQJaMetRhaN2qYrscQX7hcX8otNonJCZNy6YbrEHrYZ6PBXnqirukStWTkvAtuE7MfiJZXkKaMvdB1d1jhxGa",
  "key13": "27A4T3FPkoWoC4f4D4CtSHivwzsC5JhRgPCx8g3eFaQGZXW5suXUiFd8Pz927pnPHJTNuUBKMrGSfGU8uv18wLcQ",
  "key14": "5quQxCcSrnqEzh3DznCkNNC2L3VaZo6d3fbit6SKMFvWNVrs5vyA4oGy6dawvSovdFoskggCVxZVRR85deq9LPQX",
  "key15": "5KqFDVkCJj3V8YgQj3hdiNjzzG5SdTnaKUyjkBWxWcqZx1MfTenF7sgySEc3AYa8gSS5RCnjJ9djdWJHqH3swmgm",
  "key16": "33zPVNwxXkqA6Wfha3jigjPafTyyWh21JUnVzzNucCgvV381dGyZ58Ly8Bx2sNCcyK9vy2x97i9ZqZdKaaMG8FcL",
  "key17": "aDd8BuZ83LgJTEjUQXoiiNVxoWQjT9ph1ivAiULjASZZrL4xvDDpXhsSW2XB9ZfngfJSn7tR7SdCsPt564F8F7i",
  "key18": "4rdcpCRo3PdCKDYBcJgWDPxQV3sxsAU8CZaTPFeHUiW9DhR2jLXttZhvNHqVJ6saiXU2xeAo4sLDLu2yx74AH5ky",
  "key19": "5rWm25JGKFxQBkLVirz3otGVU7H5R2P3iX8NEmRdL3avS2PLnqyQz9yXdrt5JMzgdJxco6cyFQn1556fJD2sB7Ru",
  "key20": "5JXSSsx33y4LsSGM7FLaYck6X5wSSoKfGiWVnMFDKMw6NdM1viZJFkCJKpDRoMq1C1ydxGFV3yfG9Z2791jxWyFe",
  "key21": "5cB3NDBiSwFgZ2B38drS5MfkB36hiuLFGYhdudNQeofFptCDPUvfStZiqCwUJZNHhgy4vhRQLgvKyZHJQhLGtoGV",
  "key22": "97KXmZNSQKbXwTk9XqBGhD29NeJueV6XbssPN33BKVpXcPPWcSDgS95UF2S5yynyVCtW9c9dbwUs8ZSrw6kbb5B",
  "key23": "AEPkqGki6opuFpQewRwDrAGXrVmQMo84hAM7eRRRDTJv7N82Dt6rmLHBU5cNzkEh8HiZn8xW9nDrd14DuyKPh47",
  "key24": "8H1nZ937qRcWdQ4cShkryLAAYJgMcnqKAY78Rw4TGiRGnDrvuDC2yNos6DLCKzmDdRDYQaJ3fHwSEUrkFXRn5UV",
  "key25": "2LcrDeVuU2E9ENuMbqeHRCNqJ1pBKvwjYD1jJ4HR9d2fBH6r2DZwxmPfwcTWfdWTKFLh2fKqb8z5k6KQLkFUKV8t",
  "key26": "2Xdb5Qeqw3NdLNs2v6a9jzkb12Kmw4TqLCTu99Er2e2DzbKvzar5nXXuVdcjG9FH7tQCUu3LRCW8GttJyY73zdmh",
  "key27": "2RjxGvBoNAuiLsvd5kmKTGhfxrZG4M2DdzgDypeM8H33gJGkiHwzUh6TyYVyii2RBXUzrSA5qvNRuHErUP5Qr9ZA",
  "key28": "2kei6eCPEuusUXvaFLSpfJnbraz63zQz7wmHV68QTMiF8YyegqUBRiA3gmbJNy9XzCa6pCTmjnVAJ9YKRdYxqCMH",
  "key29": "5Ko1gbo5wYBHPkTgEXWQABisWxofHbMg7vujtdQnoSB22k1EVXeAYNDTLq4BQNo2WVZQhCTkthnddjHBgUZH18JQ",
  "key30": "2V6k8pyjT2LsHG1d4DjprQEGy7wAVA3mjs2XyGsghzbKuQ2EJ97BLyDLuTxRGL6yfrhnT31Mo3frm68ij5yKfCXm",
  "key31": "SWtJtKRUH1PpBvxayUkbmwCEZRAsoFNqF7yEZttjzSc42FcAJfs7nctW23frceP9qo7SGo3UdLfec1btNTzUFto",
  "key32": "29ZwU67CfLm7pmrxuyPibtL14ALctLUGsvDb31zsGeLbfhoYuqW7b3wAmfHmP6RQ55UYCAimCvHaYteF9Jh7Bekr",
  "key33": "2BedMrk6pdgnc9qFzmtSS2G1KhycEmAM8JaJDwSmSyirAMj9urgz287gK1jximR24GZ9Y3izomyAsLDvz76E6JyZ",
  "key34": "4pcwNFwMBLAgRj6jNHg29yGrxgQnNaF8BR2j2axPKF7o5VVVMUKryhRVbFZCpTbQ8EZYn9vWb5LwUbmKgtTVK16C",
  "key35": "3nXFaXg1HkMWdkrDY769E3Q6LBtPcmGKSu8kUQLkuimy339w24NGyjwKf8V6zBqSibVjjaX98rGipogvG3Xw9YMg",
  "key36": "2H66pwMSVTHdJhMtEUvm9LFKk4xVJAVH7xa2TPsozQZ69Vgn3kjURWHy2PoUCoF6nj5VeDVBXVvX6fTSospMtyEt",
  "key37": "Ka2nqR3z1GVttG5WEHxRQpwbFoz7D9tSnxLguMYk2dtdMEJKXTQ8zJgMbzHgFvdS9LPECHS6XMTCmFjyMcukXRx",
  "key38": "sVQz4hfUkbS6fkseMVXw4dP1tiFsnPLB1c79Lpfg169fdhymjp68b7BLWJrTw9vkYxfEkGWJN2xb13xNVMFXAdC",
  "key39": "3HZAdp3E58UUBZS3Xi6XS5V9RH7P2R8Nd1n1H7v1khRDrNVsg2sbNGqSWGEySnjDLhh8KuVN2DS911k73uuQZfCS",
  "key40": "44VHF4iA2Fwrvo1vyGjcy2k6gPxUxhxzW9rmU43WRchXuTXMD5oAgbmJXs5jnj1DPzLnWwh8hZWxV7oyZB8mYmdv",
  "key41": "2uyxSZTX6msrJFP53tBRzSeJ56yssnaTy6XYshEU4TMG7WJFQ215QF2ycPDffUBxBK2nWKANThA7uLYtwbrQdJR1",
  "key42": "3owBVAhuF4CPCLm6sYd9JMhEJLy8D5SKfp8DCpLYnmZtmUATm9grU56iruxod3RJZRmwGnmCPF6QAwKyZ3y52G3G",
  "key43": "5kSjUq53bF4bVTsPeHFpbeRh9SVZ5RjcF7DLhb4zarjeG3ENsiJSbrASAAuS5sXRE4xsHJj126pHxKN8MYZQQkPR",
  "key44": "3FLbJ7dLwUGa9effSbrBi7vpNiK4SHhhKRiCvLtrcu39JzDPRkLx8HiQiH6W3ZtD7T4oDaJKHcwP5bVjMKeJ31ac",
  "key45": "4ZwFjaWwj1faYk4F1F1pBYgcxAc8sDtgrTKaWUjDN1cgFH6yuEvZopX8o7NXLyT3ajNy4YB4V9QLawkEW1Pb6v57",
  "key46": "3tEeJ639jw6wK2U57YM7nTng579B62VH6e2FweQGYwnLXun1g8JR5rnUU63Y3YKUuLKQ7bi5kwcJhARgangUUfuU",
  "key47": "a6CArtxFreWQisSRRjT4NxQ6ANtxLpiUii9MiEbyFz3PoNLti3zJxYhr1wYkHPiXe6LUPndnJcfeqXiAiUu1JPa",
  "key48": "42TG8wghnMouyDXqTuZjtjiFFk5hbBkUD2AXmJ7fXnVzWUpgXxqSepQsfMptEr3y9HuVvAWq1rkkguCv3tmTC5DG",
  "key49": "2n8BdjPHdPLxhEr5CEgufeQavANohYUZXTxao2pyfvMJaKS5ssNbT86jgRcknLAuCfK6ZHKDQhuNyHxRArmzoMLP"
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

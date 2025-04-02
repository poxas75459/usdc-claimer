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
    "2S6qaqDojwVt5QDYKjMgvTn9jYbdD1wVcurfxAKVjcjwhGvaw1EiGAwum6SFtrEYLjTMTvUdV1BFUj26fTwuo9R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YsoNwsEo2UHx34c4QASm8ZJvPiY9dnBa6X2y2gg9NuuYZGxLyGY5Xa9XtsRuvMr95uxHKHMsgaNKJioPDRbE5Ls",
  "key1": "3znpZLLJLrPfsz4PdBzFPJZfGHVj7sCiBEDhLBxsK1GVwzd617yMnCBUXuye9h127WKtULPQSDobcEfvfPGyucU8",
  "key2": "4n3eHGg1JyNm7cstmPy8iFX5BF1QKRwwhSUSqs4RoBAjNNH1xsBK3ECUGRdZ772oSrfFL1G1S6Kwe4mLdkDUuKie",
  "key3": "5FpakzN12QF5iHfBUeR32yaVLpj4vjCjmyNATbGTfPcfYijzmBRu1bWb3WNqRBbA9jdbYGMVpZJ817195ULdVhyB",
  "key4": "5PVXqaJVsLfbVCpiYGSq5kxKHmUB8cB7aLDuJss9p4xg4fP1cujEvjGjf7n3FEwMZCHzQWFMHBbSxJT5eLjwSJvc",
  "key5": "5jVXgN1HS78Mg5vr9gKFBCF1dP1ypwW9w6fusvLQViWMJjKM3rjFXFPjJwVkbB5eWXTnqyvE1SWN1rt4DjwQse2u",
  "key6": "4biVmrsioe9RSjqnvW78KG51HrYr3Sg5ZwXmErPmegDGemJNMEgSoCTyVjnttAs8joxAupf7v5dKWqEmc5Rb33fC",
  "key7": "2qPeAWzrHHEBrjQgNW7BFBJT9hf3nAxa88q1Xc5RFR5CwKnMtJ6dfkxfXxk1nLsx57iS15AkcQ9NWAFV1JfXCidQ",
  "key8": "4tCTJD1GokrEbTkrLdQo9uzUbTkiqdjyYKNm95GXkcjytEV7pcC34UHgWGRd2tgj9HwoHgkGZTXGRhtMmkqsQ3TB",
  "key9": "56RUDsh5WEv3yQbhLt7fsiNUSa1LUADwduZ6yrDyEi4h6vHPsTfn3ct2zwwh6SUXhuaSSGsSzcH1S51pLJe4sEvm",
  "key10": "2WhCRSMzd8XPYDVgDWT8bMdLUxwNmo12UH9j94V4GenzPUGQn4eGyWDYZtsHAFmVKq2MDuBbeQ3ptJLii1sMnN7J",
  "key11": "62tuUTxE2DXPTdRSHAeYjVYKmVfMira17SKRfRTVp3yuigjMN6zS1v6iQfYGvxznsszTQqmDxrRinxeHdSAst7yC",
  "key12": "5LyubeCaaowSR37nnwnT3DL9yWCp9eeqL47z1sA7Gk89WGou6f3FQkGJ5kvhUpQWEJe8C578hDGsoCPctNk9Dg52",
  "key13": "3f63gAhCTAze9CCtfhZsbCmpbmmjSjTjEJnkRm7vYRJvu6UWZMDncF5TAcBqGfGVE6rg5A3UZb7svgtaj7rfyZyd",
  "key14": "5Xi7FBBhWh94grygzi5RNnSoFR6KTaFPPT67Q9PFgR7izykedcHzaESQcwGMgYdkb6Xfry9Hcnka1agUfo9aFzux",
  "key15": "3AzCjmju2G1rs2AReCiHPYyUWuk8g7xFK3EsMGmYznhkqch5UQCDq5iP7n8x2nMkQhd1HCtWMwGFf4B9xpFirn5v",
  "key16": "3ydncRc7twKzpWUhRRd4imykygXoDPHkQapJw6qnTzdgRDiRQYzvVcs68nWR4DLwNxKe8sW4HhLSJXcCKsAYXSyE",
  "key17": "2AjDsVPhWDHAxibjoDfyjFhCAhsEgdhGLKVtrvN84ZNtM3h3r1EtdC6n5VWoyAQ4XHXPEJLEauo4cLnVihwC4fMA",
  "key18": "3LkWyci291k2pTNktc1BsaLgmhmhTJb2SLUtfY289ubcdeo6JBwjiSxadNzcdsxZjJXmhZactDVJ9GqCaH5duPZ4",
  "key19": "5xyQrShLUTRUZNUFDwwo2oMjB1UDtTRT2L3RMEGKWkqP5PQLs1Vnv7FQkxeMbLEtjpUrTNGyEaaszkmtovTMtuxf",
  "key20": "529v1C3jQEL6Ty2ysUB2aGtRN847AHMakhG8YpRzb6wwTTHcMXD4eREBskuCkNnyvrQkuXRiU3VJA5mArJXdat6A",
  "key21": "3UzT9FCSRGKtG86RX8GDxfdVm1xkoGqo2h1LMstYnx3n8Txodgu87QC3KDWp6zfdCWhA9DNdvDhas9t1Ed6brkq8",
  "key22": "4bd8kxJRNBXVHBqqBri4fWHwave2y4Hy6d129RrtZRrdcMPWT8r2qo2ChBaZz9Hf4JCR84dJbwzLwKhGJqZzq45u",
  "key23": "2RgcAHj4PK1saazbKrKDYmTEGbuVDGNyJMQ1Bs3RiRJDFg2CBG73eq3nWeLb8fBT7Axc1pBF6fxbXXpozLsddk5r",
  "key24": "yafUrif5oYq24uRB777wTSMvybVA46gtcvcPvw25AnygTdaWii7kheXd3qujsrqRxFYTK9rtP2je9Bbej6pJtjt",
  "key25": "4uuzwVHhC9uiEqWJmQmi4YQBGkJuUD7755WaJJBfUACyRmi9QLXkMUAyWr7kdc756ZStraXcipajC63hVvKq6EYf",
  "key26": "5zsnudpQn9UbU6xW1b8M7UVMxRwD94pz5PB7DsYi2nkkXN4Up6r41yhRC1NYo9EkR3XWzd8RiRXCGghR5XS8hCsn",
  "key27": "5fRwUB41pHPBQbLanWj5kzTAtypyUEMJNhL1PrnYgmvwD9E57kdi5SXzvZY74H1eAinr1anZM35QdwY1kzeu1AWo",
  "key28": "3DikEbXYUXyiZPHxQ2YvQZDa8bP2h8K9mLDZuN6rYdSWNkJDxN3V7Vtjec7UDQmMisCuxGmVqNGktWnDKnob1uPt",
  "key29": "52w3wxqACzzkP8SYTEPQodN5M6wFJZjaJNYkH8hfEwsPetkEku2vCA4SxN9FKPjavQtfBAU3GG5U2fuqLm1kYToo",
  "key30": "3TYE2jhgSeS9Wvs5cbavPpEfVsFMvd2eWogsJQxVnF2G4UcU3Qx19kABFF3PJz3KXakjfDNiCzyy2G6zaF5vQsPj",
  "key31": "3GRnBPg42uWdc81TPyQMirKfTKXH1VKR3cY2gT6QgWZ1CGD3dSxnTtYByC2v3NufzBUC9nkr5dpuswLZAcs3x7Dh",
  "key32": "2YWhftKwcibP56QGq87fMLFMdcWm5VvkabEbE1xyqtwLUq1Ub2pa7VwPKdjrMUGEPFDh2QdF5M2VrEcAj64atz5",
  "key33": "46BvmDaN2Pme4fPfNaPaRR6VHh1MDnNbAV3vHYL8GtPr4rfBMkadJoh722t8Y2fggL5SfDJs2pDycF5SuHsfU7Co",
  "key34": "2AXqMVAzdQj5N2pkboeEXgFhzCGfMcdvpTKMAfDBfp12rurTxjA6j2x69dmvmXcUfce58BSq42yKCNgqT4SvzKAs",
  "key35": "Qef2g9s9hMnJ4KZVUBetnxJduETZ2uNfvzoWWmMporoXdEetP3HStZrG5jVX2qAKKrCuzcPQ7mggJheE24VZu1s",
  "key36": "66JtqNUERayPgYHEf7eFDJqGYrfLFYsjN2nmJCymuroSV5VZLsFwQ4HgADFp6vm2pKrbuJLEongVMAqjiys13yg1",
  "key37": "2gmmBTom8zc9k6egZfgBXhdRzAYf3x73heRcyvLpgkzKFKaUd8Smhm4EFeox62Ka6ZXbvAS4isvSwSybNMh3cNCt",
  "key38": "2TUUmcW6KUGfpdseeEzAjDBFngpM4SVqVk2hRcu2qNxXXE5L5DWAQ67nmY2VVxEb9DHzkQs6z2bCEamPiLieNWwN",
  "key39": "3WuRKtVqAC6zExHQ25aM9F4u4J77ZW2iGid4ZQaCcMDN7KmtfJXncrWbhg8eopqQ8p48vbNnWcn4mEXP4USFn3ro",
  "key40": "3q3ZEbRfzF5uo7pauhBFP6mBFoRoKt7yd6Z6coqw3KeJj47EK7dpR4pGeTBU64WmDYBFF9GQbxF9s6yU5MaJtgaz",
  "key41": "5SnKyPzqJBm4EViBz5kgfdNiGWxwBpveNQEWu4vRgJQWDfa3W55hh8AgsKUC8ZWxA9zuiRyqn3o2Rnk4K3YDELZ3",
  "key42": "2EXNbJ2m9P1oxYnmqcwMoLynTgPCTmPp3gLgYwvadQe2juN1xpY81BGPYswwWjn2mntz8ThUM5n6eMLwtUWJ6zNf",
  "key43": "3A3D1Fy2W7K3MQcBTHkRGJFfMrMrcE8UCqrn7M9rwuSF6jhfJ8fAZ6QwFfMsxj9MshQS8DAxVTuxRpF7dtzrGWzh",
  "key44": "2uSV1yJ8Age68Gha4dS7y1DThtqtttty6nG3xMc1WRXwzKai75SJcmF8Dh4vuj5r1ToHtHG9sJFYhYmmPhD5dgxp",
  "key45": "N5xRdFG2HVeAVCmcbwVRgPS2ryd1AMt6nmUG8wMjoq4uoCR2NSdqVEW1sWpe1z7W1P3o9gkvP6PZDZPzjqF8ST9",
  "key46": "3TJKsn81CiPKoCQ5hppkTW7gxug1RPRHiw7jZCuFxcgideZdjsdnY8Z1RoKQe7vsh3QLHRbyihsDpZtwhGDbv64q",
  "key47": "5697BJcmnZghgyFK35f7tp9rqN2Ym25UfUZz9nX3482ZnGh7BkgzdgSDvQmXRzJQfoWW6taeUvATWhNfijUZGriz",
  "key48": "5n4KrZHqXEc7JGihFFLESDB7hqMr3VXv3n6Lnu1nbXtRWUY5eHwuEqTnc7cvCTwuWCffKKocauiABK5qdhkdvtNq",
  "key49": "5XH4WoE1sAypnVhsDx2zUSkxDKVVeaycZ7VoaDMpyuFqKfNdudrXE32uhjCJUFhMErjAUYiQYMUkCFRpBEdXevHM"
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

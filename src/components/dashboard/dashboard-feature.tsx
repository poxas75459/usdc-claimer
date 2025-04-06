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
    "5Qsj16NBYmLL1ThXbwUc25dKV6kd8161JqBpYjJnXwPRr4a6RjEHKhuvVY1VBhqCoMSLUamaHWPv4QRDPcVCxrzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnfP4YuuoTV9q5c7jP317qaNRQKvXCsA5udwDKUU7umjkdPczdtUgj7KGH2Sn7p9YD1jGe7EpbBikUceWjgUFGi",
  "key1": "DGbr3uWoRvBQy5jPBksQgvKxY49WE9B5hqGH4RyqwzXaZRD2FXBbAx8DRFNiu5yiDchQDdpAZjksJ2JqTobX2oc",
  "key2": "56JnnTTmNeTyDCAK9Y7Pzi1GjKQTuPftZnEpn5fBZztCS2K1UoKm3azuJoVLRiHdv6GJqgVypw85Z1zEKRifTVft",
  "key3": "59aSY8Rej3ZaeXdexLtF9wWXNRFiXivRvqeJbh3R7NL4X2bpbPvqZKM5kEAc4CYafSr32zJkGeqYeVUKx6e1YazU",
  "key4": "4decRD7TMHS13iztKN4Mft2Jn4tt1tDSu4NsEqqJmiPV1mMfLxRhwmSrcQnQgGDwTvYnscBLKqYbH8jQRuZKDivR",
  "key5": "44GaDeumDiuuG93rh9sdpuF8SY9opPEXR69aaR26cWVczuTifbw9YP68bmBrewKz9BSVcjdq2SyB7DSfWTRFtc13",
  "key6": "5ReKcFcL91jKg3AoZGbR6vrtWi1EhNeC3EEmnEmJnPe6UYDW8HJMxQkZb7CC1Cjg1GZjEb7eFSZru9em6K9E3dZw",
  "key7": "626aKyTNSrqCZZrxAe1bPG3AjBz8d4yN27k8KAWuJDbNpdfQerGnUx1NFKTHRPYxQGrGm6owME1zGSN26PzTDTLn",
  "key8": "5D5Fp2sUdBtCPn2gCtRBH42rEsZ2mhJSs7N3gPLLZsw3pkkF357xTqarGWpUihgGamZPVaeErgMazV3KXXQFWa7Q",
  "key9": "4tSPHAiynJY7PhZHg3nFDzR6Yh1s654427J4bChPfKTEFNkCwFNbzYDHwSEKgDDaKhcxom4MkDMtUiMjuny3ASQ2",
  "key10": "XfsfQv23G3Kdr6Eb9X7m5W9uSqBc7fDaB9reGEaEj8whwqZ2M9F1gkXTQz4DTSqSmePoytvbrXZc2eox1TKFvnM",
  "key11": "75nkuJz6UrVgZiFE6wDY4XGkTbLK12UmT6JkHjmcQ5ofSexLgWiicHNF3ru1hbrRfoqU8C4TZfEr9ad4iJ1ZLcr",
  "key12": "5mgqVo6JywBhS7QvbBJu8C6Jknbiq4yyhV1yxBT389XDmG8pLT38gH4hHZAELe3dWmmZgPmxrGxMzA4jiMsMx5MU",
  "key13": "575kYLsjPYWvm79o1CudaniTYJWquS2mQ69vftnt9N28FDGYHQYVigBDCWjMAS7WXxfhHXXhD1k3HHzADsqERekQ",
  "key14": "59DXwic1epe12YRuFd1rArUkqHQenK2CMA73s9A6HfQEuJx1Sikb2RVqhnMDAtpbTgKrMKMoZD1JvDrvbGAuR2ZW",
  "key15": "BeGFhSHpC1UhE5Fzibgx7eTiCKoi6ZAeezMbTWQio333tPWax3gTbG1V9WLXvJRGwWyBcALxxminFJLmxUnjJZv",
  "key16": "5548ifMSvJ9NDkELykzppfz37nHh2WdgxCzpBCQ813HWuiMzxostfe8zrc5j7nag5FoMwASVqstcveyVRbm97m21",
  "key17": "H2DaiaZAt2Acv8BkZBgQD9rf4jwi8me9pAkbsPXoj8JwEWW3Exe6Dstd8CWxczRJt9aPaVxzBTBovtQn2zoBMdM",
  "key18": "314JSo8pAapkVVrieMSoR7e4ajnCceUCAEUSZ4LYAjNKXghCWYTMjHJ7cs7sd5cugCAv9EB9tQ5Bu1WCroUKxf8m",
  "key19": "4iktLfpZSDpUujKUwET1ddmUNb2QCBkt5KJqnyzSk1JGKSUueQVs4BFzXwZjXPrdTmjkZPx1wjHLcbJ7ukSTVLpp",
  "key20": "3Gdd5dywSTndXZzNEqBPjn35uVGrFBTD8fc7AY3j6tmcUQpGcUk7TAUpU2rfhFXnQRwBkezmpHYhNxYdSw8Tot4F",
  "key21": "3YKYK74Wyxk1vWjWBhEHvTEeq3GpBuLiqYtD8AiRro2mbi3kLyKaEaFuoTekAoiZLwW1zoGtfcnXPCyz5VuoNQJj",
  "key22": "NzPD2t3fUrBEQLuk3fHzyyfvjFF7Xd2FiS9sWEjHVnPPPkBUwcg6Rks72iq3MYGdV9mhpLkgtXtXMAwe2Bbeb5c",
  "key23": "3MAV9JB2Ps9Y15cnDmchyi9XEWTJtLCsT4Tv5UtwP86uBnq1QA2uPahaCvpTytmF88w513sGtyREnimmWkD59xbs",
  "key24": "5ugZxRSdpTDPdALCDkTicGdzGeQ2v36R5Q3L17rBGhLqYSPkmsosmPs9adw6yXHq1Ahnr6B5a4cFn2kkujpcaUqr",
  "key25": "dz2v8pTL5Yuo8QTqpJsd47me871cEPoZx6ECaC685x4EFpjVQKRuUSxkLuSCRavF4hrt3SrVWFKkT8RHrX8dP1M",
  "key26": "2uJodMKU2NGzEKRSXRznUm9bvNL5jpYgVxPT5p4Ktero1bqd1DcFE5PuLEY3PtigqdFAb9hxcVqBTYGULb4vKmgt",
  "key27": "5Su9B4bDrxfZRakmU5bDjfT5DHxwHe4Hxdg1jUKuprevt83fAUzzAMewxXCzLfoMJPPyzUXGi1XP5MNNzokBaFf5",
  "key28": "2uLqTzHZReXN6H8nsAqPLZb3ETN3yNeCzHnZ4WgGRh3dwGeVujGNtiEgk8cweT78oaei5PuQPxF351qpQoekKvyH",
  "key29": "4akoRveepsLQ6rpzkHpGajWsFhmvdW1UXLhgfuP4wJ2FWE8cnvm9Wqx2TcaygaTu4bWKyNfRLMnaQFkvGm2ffrC8",
  "key30": "58o4NCzLfCvC286b8BVSojS4qfYT3gzq7ckZfrWPZyqDVdhRhheh5p1HBJwbybdfBbAAPqkSGx9sjLJNzJ3muF93",
  "key31": "S9TgaxKYMf9LnNf8uw31mxdpQ1nKjrigd3FJ11xk3oXpqcVqvfuAfS59MUfNsAryqo32oRJqrcFGJWXkyrcsYcL",
  "key32": "3Kwm9bHcFzzrb8TSzEZZq7n4NTN4eLy3zn1bwTn1mtcfXBUHyunTC2Tv2M4TFTTHMz6mGwjM3xAnVMLkKy9gjFFj",
  "key33": "4QgPNCRmpfWV8Vrji6N18q4XuDyqH3PycCgq6KeXb9HeNZoomwQasrf4YQJeGVm8tEPQyPA7FdsVAGxyNYovRofp",
  "key34": "3xx4iaq6qUr69SgpG635q6pVLLL5ePEAReytQqUethyUSfJETZBXHMuWHtHKMv2hNv6vaRae38VqnyiUhKbpTq79",
  "key35": "27qn8WLu5BkCWf5PfcwfMQ5H8D2RWm64iLyaRrwEeVs8URZq5YDPom9wJJCVJaCX97qGF5DnBwfCtMDuMq8kULXq",
  "key36": "53mjwSBB2NZaz5gExj9BfJaiTHQEUCfTp2beG8PpgDn5LCkPwwh5HeHLDYj8dauyFDZSt3FTKJTcaenTQ4MRHQQg",
  "key37": "4Cekhpoyq9c4QLqbV4oqGisyzbsrVZwdrEuQv4NeUNEDQJupE343MBsFWPE4FetDUkq4tZWX9uTp2GDirUAeRicR",
  "key38": "kgbLqdzbdP5atM3hAypZKQ2H4EZ5Skgch3JSoDvNfYpEGT8kGQLvJWANN4Z5ySEaiFHMj7nH57ZEZCpzeN4ZiNH",
  "key39": "52gyzXQtpNLqW4GBGnWB7bA1Z8FU5E5Azq1QajQpeeCjiRFMbtEgHBRc2BeRtWRfTNsoWP4Pi8s8RR7jLpAzC9JA",
  "key40": "5rpBkWMKJqGY3KrXHJxn6CrQikGsK17sThKy6AxJpJbwjsWahNNMppoySYKwZDgUH2Epfpq18SrPpnVGMrDsEjyu",
  "key41": "2Ntam1yLxVQPbn7DGJRNSX3qq5BAoE3hjqygTnYcmhmp256geQ31kJJAuT7TWLCHDWE7rYhUJF82g69fuSvXqFcH",
  "key42": "UTrSS9ap2u18QSMyo4xi8tDWkYAJXYMHMpw4E28kivcfNNwDvT5hNAzUk5FCTj7hTxA2AqJoVMiXKrVLr6mBY35",
  "key43": "3TMoHVjMYEhS399dXPoAZx9Wpc4HtCEqx7JoJ6MJyo1eF3LTNS1F68b7p9CQ49MD6vcTYYuniyVNBqYLDetRjHJf",
  "key44": "5isWXWFwJadXtucum7ChwjLX4uEayHuCs8LJt2Bt4DCtozZJu6fxY2AeREj6WifrGpUNXTXJTR7enzmtVBkSs74j",
  "key45": "Hwgc1QmPPf9Nokgq7gaJcYHwLN2WTxZMVkKwRGkHGAF2YZeKMw66AbwpgKZs319cPmVsrXbmHyCTS671wJsC5Hu",
  "key46": "5DS77MeD4jfy6ihtMLGeWjVnAL71cYHZ8gn8DLwDGvLh1rPdvQkAuAvu7eLWWqkkFx8vUsjQLoFEzRkr4GMLrAz9",
  "key47": "4mYbgo9pNS7Cmb5r6vortKyniqQe3NNg8sVrvwJUcWfPo3yMitvPwGns99S6aA6vNu5DqracvYthcCXMA67R8XT8",
  "key48": "Ju28u5wm7YEEEh9vpvBa88Q98jESYjh9xyZKrCZmTTzWpsaqE4v9uYwaCfBCpb9rnr7NjBQvWgsaZdWXNvMYXZR"
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

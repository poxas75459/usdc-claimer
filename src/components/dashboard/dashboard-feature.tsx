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
    "3BEUroFdRXSD3x7Qi2zgg5eakvaaFkNvM1JWnWH4bHozA8iQLJqGPe2hdUNoRqrK8n8Wz7TLdEv41vYvxvUPanBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQD2Qydog6bPqFnJmoavjp2kznXTZwhSvLXYAaFfDbw1X3AeTZaNCfH4ZRr39ooM4bVi75N3zci2k2hu53YohoY",
  "key1": "M7trKhFLWxkMXXriSu9bZYm7CXKtSf3gyvHq95Yd7qaqJ2HsTeaSziNmLT8brNrEUYbKWSa1kS2n2XPMLiTTue8",
  "key2": "4t3rFXqZvfySoSai6VkP3PKFgzXcJYA6S8kUjNaLsmMSb8bxnvzQCK6iT4fpRQxt8g7DQXSaqjuUoLUpcsZmJ4ei",
  "key3": "35A2s51SvugkTw1438KfkFajKiFkYJnSjBQkuWPkw6P62ZQ2xGxaKa7bwaRxutRbsZrGepcGcewHuoi65xVvL7zZ",
  "key4": "3iSvnX4BiHWRoyp5k5tfjS4FMzhJpU3Ma9da7PEtVx5p9DhRaXZFLVudr6yjq9HkTvrhTmF1imidU96hFTXvLGrF",
  "key5": "4Zu7Cfj27oyY2g5yPPDyfdgc3dxSDe3AnppHFVKRj2anbPsfCotuJn2WM8Ezbr1ppEuVNXc2hjRkQufqP17TruG1",
  "key6": "215d99LefeLf8KhFi6Eq7k2EizR6n4mYqiBKYuGtnj8vSZfMccq7rVW9x423JGTg4BZGmdugGdoHZmnZ5encPYJc",
  "key7": "ffEy1cG1j97bPKGrMmRNRfww4XmTAtqzbNTh564NgWCQAM8CRu8q6sqPfAFCgyZBv6pTBhndLAkx3dKXET67LWp",
  "key8": "2QD1hBEmwqgfg6hmH5dEiafAea4HAgeR1okyDo3s1RXCUpZiDcVZCUmdDmgxgkaTMJHFbPv34mpjeNBZngkKkEgQ",
  "key9": "FQXGbd89XJyRLKqZxmGEucsxEsmV55Cicho4GNsmrocJ9apzfce4J9fsvGVuG6Te2Wyp9wzWCNfiJQ2pMV7SmNW",
  "key10": "5S9MJCXGSLZZJWrV84YMJXXk9oTCYjm8fWjbvA8rcq9hoJ3B6292n4hFt1XtzMSkrWR5rbCzGZ4KQHsd7TuWAf3K",
  "key11": "32mNiWPZTNKcPiV6Yuuv6wFzm1F6YbCwo14Jrp9qkANPpxjni7UPdg5JgUiHap8dbyib1D5xrMcF2QaGL2pYabrV",
  "key12": "4JUkB78PAVgXQEvStEj7jZbAg84ZKAe22EB6Xe94bJJLRTd8A6ztxpu5nNgGQd1rH6FopkZMqL5mAVVrwR4Ca383",
  "key13": "2W2h73BYjvQvSc7ARpfxWPju5WH7zXNfiH87X6Ljiwdpx5K3SKW7VBNtkaR9TEf8bs7M1uMYsTYYWAhkQYaQBEXN",
  "key14": "3dTLDD5r5j6Ym5TK7E2z36aS4sevZZaoFcrziiBKhPUv35DwXx2pWhohJC7cWGsPz1qWy6YCcRJghWNuFD4FeLkR",
  "key15": "3DVv2gwwhgDAWTMxX9zBRpaNojwJ663e5dbXfZmsPnrYAqKxxzywsea1x63KBdQEaR8FtnfVnQznqLaeSjDJEdT9",
  "key16": "48uwLvacgzy86dwchRc2BdpxSQ1FDKMxXxTRP1ENTW86j96DVKxriD3Gm3VsJQYk54cM7cp7561PBA5MsLFtmn9Y",
  "key17": "3LmXRUk2gHhPKYmS2pR7BaqHH29f7EUVnT2mnRjSfCszETErXn8qUyvQxMzojUvL8ieEb57TGqFb3qxoDHmfpUq2",
  "key18": "4JfMtoaxU9EmetD6HUGMt3YtXDUG2cQDcYKo1NGKhaDspPQhKAPNtFbYGad8A6322CGBaJvgVDV7NZAPPz9qzKdV",
  "key19": "62eHJhVhkvKHUBgdVXVPb5etPEwcFPdZkEeeRF2Xj6zgeDFzAv972aMByZvXvvcZXeAazbFgRpLLrneD8oVhCwdg",
  "key20": "4q8aJTMp2qzBwaq5xc3GQDzJNRYqFw9yF4ac3JcU15MXdKWr1maQfgfYYsPugom3W6gZjG23B82sGfSxuBv3uAMT",
  "key21": "3JoWeVY9UJ9fkAQsigcvFcDmavhRSbZjCm2Z6AwySzntW9qgQWTMniSTvPyiyRd8ecneJ2j8N5oM8QoYFvuSmQyH",
  "key22": "3ym2o8QnAcNJisfWcw1Wt1TkdfgaEWC2zcqqH3eepTkUHQDE8Cdio93Tdg3CXwR2yZXoDkqsaPhjjBhUBXgVEbyZ",
  "key23": "381RtRLrYyMKoLYrWAoPBkQamGLZGJnphs2T9JPAChXYsSZTSkhd6HMEcUuRQFqvNrCrZQo1Vjv1MwB6vW3vGboa",
  "key24": "5q26MTxcxMMzGizJN8jcsRPUVzcwQ2vXHAoyJsFUA9qFfk6UyTeHyKfZrrTLxpJSJKoKebN3WqnqYBNQUe1xABgL",
  "key25": "5KvrZkmXW2NNk93R5qe9tH73ZntMxSLYAzM3upPV5DmU8sn665wimp6xJuE94PUwfkERxAEj2RRzH446EKbutScX",
  "key26": "3F4d88PtJdfjA5UVCMb3CGbcdqmXEkYf4qZNrfDVwtX6kW7V7y38ZXWLyznFnJvFFGXh7efKHPT242N6YjYCRmMV",
  "key27": "2ELjHb1Krquw9nQRkm615Xta6NC1grz4UNGP7u9neYajAtqZH8T1zgbSTFyik3Da9DW3u3UUL7MqxA4psk5mCEAV",
  "key28": "3yZvebnbsjqVx3Z94Ch1HWZebZXkyoBKHn7HqWq7Gs9gr5XQgca47L7qoSRvrbKwRqC2WQ8qkskPGMzvZYx4CAcN",
  "key29": "2qKNQEbXF3RDfy4q24pejret38HAVg1pWSjqbXNVRcrpoBLAKodwwkyFKAoqV2Ej2kq5YWveeeBX8mttZBoMWVv6",
  "key30": "4p9enYRnxiW4qJsFzbJnDBd6o38dLcSb2JFMMWPisdKo6adw1tpiehknys1EuLPCfbCNjZAWGACKWi9rde5uWhi7",
  "key31": "5HZv2yBHML5Nf9h6ZcQDZa4R4vaPXD8dhy1usBRQ8rXWfpAV9bRCfM2SaBTy8doZq5hL71d9nEDdFCcVep8SEFNm",
  "key32": "2SEB7iqjWBGwacfqg9DU9kF3f1vuo85qkUc3PWBBGKAJHCW7XXdCTXmv6F7NW5GPtHF148KmkGLCAxr2U2hRHRrC",
  "key33": "2fY6C18rbCpSF435xQKqStGnHB8MfK9PLsRctUy2pxKmUpztWajZXUeL6N2k4ZUFLNaPUAvifNqLVW33hpziVoWD",
  "key34": "4HUbn4RGKNRdgEPLN7oiVzW5YLCHUZMy1aZViPwm1usBhjeudpz77dvguuwq9i9q7n32RD47AZZgPLP7AbpxH57h",
  "key35": "5khxjyMFNp6gbWnDJswQwr9TxXgSNChHHw5DdAZgibHjCnzDbKzQzHCsvDCmWth17csfJKFD7mgKXt8LXSXibyxM",
  "key36": "3KkpTbxpsa6rPa9qnxmHqvR9EXbC2AECU6JMMinjH4iUQ6E4H5pjEAgfUikazY7F1GPg3bRR5qQZcW9nKBpiuYwH",
  "key37": "p9F1s9Z65xcKSEfe43UnF28wa9eCN3Avmy29Kh2o8QfzrhEvVMXFyf4fyMP6Ej6731TvZTerjiA4YELwmSSWbre",
  "key38": "29BYdtosipizSZ56wBFvPRgAB6BZNH17ZA6R58BH6P4UmKiQBfwDQ5BZ9mpBNQepL1a5fiFsxiT2adNzyQ6AeH1p",
  "key39": "5YQ2um1ow3ZLdKY7AaE8ebVEVGWFuWZHMQBHE84TRNeBjXg5ZJraRJgF1mKD2MHWBsRoA7Ze8UwEgxFm2hMqHVTH",
  "key40": "5DjT1xMEFyaoAFtUgDn8YeQoJkKyW8fVUYfkn6mVk7cjVVsLmPLHd64xjaYossfj9KzparAaHrPrx82LATzpoAhf",
  "key41": "3mf7MCbv2pAhixXBYY6biNA9QcR6fnQx5g9abHHxqJ9vdBUuvtuKoQdTDNjEhackfivHHUAXUqcAimt4aqXAmph7",
  "key42": "4H8roBEaz31VDVTuXUQQhVMpobtRvGJBhyJsJrLJUvPd8AoaC29tkLsYR2EutYxohx3VYwfDi9ahTwVwS6AzHonR",
  "key43": "5kmRLvj7spxSJLVBjy7RocafqBfenW3Sxk5pw2cv18vWav924dVTVMG4LzwMjMDkihhUhmBgbVJPik2y7gVXYFwG",
  "key44": "23fDynn2s3dR4VfrBjnpZDE36BboX8QPvUFc36xDodQbNxXLEcdFccLiMgm4w1KyRAXZjHtVWJSZPpVcrZ6rt9J3",
  "key45": "4frnBKVLwzk9c1hMbyfc6efemMufZVy9AcRosji93EnqRhXg3AxU8wQa3nuvvL7Dq6AnzzpqmWhD7whtDw4JUicg",
  "key46": "2VA9tXysSrfgtacPeCisYBuTE3SnjqYZSjFPLjW5DhSKsfYRTivUXHiqUC2CF3NQXSsv2tVXovnxzu3jSPJ1EDVy",
  "key47": "AoYUpWxoMjq5cb1MgwiTWonmMc7yvxSZzn2chzgq9ZcQz2t7ctHKUNfAprE7pTcJ8P49DDUxjbACKhF1pfTR7Gf",
  "key48": "v6cXGcTWcYaRZK1R75sQVr5Ys7S8np9k8KkytXzEq1NSacoLWAnDqJf4AMTm1H97W6dLWKNzc1Qv1a4pLh5Tu3E",
  "key49": "5FxoQcpceJDqTgrhMnykWouzwNRcs81a93sNUihbdMXYavNZjvCjWH9Chg4NW1Qq7mAZ9fQgRqWHYdYUKvHFNEPB"
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

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
    "4Pnth5W4wLF761cNSLL5rDfTuqj7Q8pDpCSEnT3t9Th4NrGoSVV27SLLz3erw2UJcDwFAgLvTxPjer8R7gMJdRhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47oZ6jsFp3pdCLaGrKJtVgXVsHR72GRm9LCLuiQfSgSnn64v87Kb7D85m7pHgVqMW1KfEDw9GVGFf9EJnK1r8qYT",
  "key1": "5p3QzV7Q4TZwNHkZSqksJCh57bTaTemrTSEgoJWBYZJW9PKPciMkN9JZaMXreZkAZD7Amxav9uSgydwBaREPrkZg",
  "key2": "4HD7wUxzt4kpt5DbbjJHUhjkpVANEExf4LwBiJ1ZWb7dpcRBUDhDLjwf2djMu53P9pYBKUN1c8VnDdyc7bGjYWEQ",
  "key3": "66xYquk1rseG4n1UbXfj2GWgLhCQuqg1niGUf6JDvBJE2rFzaE3Ze1R8gpcLYd4fU3KnEZbdfswPCPGGoV62FbK2",
  "key4": "3uQ9y4ZMNcfaMeXDXUtCqn5SKsLBvW25ovmNuJAbAwrrfnwZxQJd4fqaXQUkkC4KDcS4Mw67cW4XHo19R9cgdjM8",
  "key5": "4pLA1RRkUESFe9w1nMPnt2Akec66ESedYKdcmp7t9kT5RNNks4p24zYa7Pj8E3WyGvE3sNYmKFxyb1HuK8v7qoCb",
  "key6": "Ypy9YJEp53JXhKzEkhAf8pT9ENkVMCTmwy5BF85sLv6hKALu7qT6aePAqTDKJqiHw5dmpHrR4a5eJwD1RcMTKS2",
  "key7": "dWg91D863Z6CraWzDnkGUpQvsNvaaX8GcYikLixz4sa1k8pfn8XSzzMiHUsNAziVP7bCU9c1qeeJ51ikQGKqb9v",
  "key8": "5P9N5wz86PDeXhrgJHaf7ec6LhPfgDJGWwrcoHjSa62MWUfAHu6ScepPBZGLEEZ6mf7tdXDDHRbEjuKezuExfFL",
  "key9": "3v2qGPh6W2vdvsybULFgNCQXvg9hpJLgtWDQL3vF3V4jYYyR1ZLq1tKpELEzbqBEsoCZqz7g5jZJ9DAyCrA4vr5t",
  "key10": "4FWU4JFN26vQPB6dsM96J9aYJwCkwpFGJFVsht3yuc5JEnX4QjWuLSUX4q922h1b2eXj6NUnM2zcHkHy4CPnyKDS",
  "key11": "5fFo175bBC78Xe3agkHFXLuJYi2Qdw7bQMHEHkXkXfKxMSKDrafZpKtwgDqXTyQVsyKMoLPvypq4rmJC1WD3SAY9",
  "key12": "DkAR65JEpJmgKzDx68jAXiVwZGCwBARpWGx9umZ3zjWXRYsqsTFjajkq1aac1V54uXmK1JsYKM6ZkKQErCVqB6G",
  "key13": "DjVHhpCc3Vhp6Y4xwW8SanKqMX62exYe2vQA8PQCQrPsRDLFLfV2fFwgvcJZFYZjoWmMWiyVvsZ56tijUKD6nr4",
  "key14": "4Yw6q16iLEaMGCxV74MvtFTLnVebRJM7JSQgAsazrSwEz241zWEF4LvjBPrHUK878KyeSmid1YybodyN5Zk6qjvm",
  "key15": "5R7kL1C6BqVJDYsbHLNR6V4tFWkS4wKVKA5WJSKq3RaCGZFnF8h2s6WpbmW8Bf7kmNFWMw35rx9MMxbwHw5D96F1",
  "key16": "46B4tg1bhjSWxtDdCC3rfzCWK6TNP4UAMd1MiZsCYCypFnosZMWKfSrzxcqHBQzSC5ABDWzv7kjSd8GaucjF3jxc",
  "key17": "QxT8WSXGn7fWTkHRNJBexUEDbzeMwz7iaynshqtamkypamByAABKdTcw5wKM29io7auzVeK9mwwdjY7pvrPYCXb",
  "key18": "4Ym64c7KxXBiy64uhrbVTo7eELCf2CFQLc8ZyKmGUu8Ws1khkLE2ohhdkN3JPw3WzVKQZX8RgmLbGyCxn9FgdgpQ",
  "key19": "2tAW6u8c5PBHVMBA9vWoyYtApYm2T4D2vRGufXsmFLsUTJVD5BGMJcyTXQisnAqwTVEBPbjd7fFWuaQorL5MfdrD",
  "key20": "5trjaZSpCWXyBs4a5N5uKvgY3hATaKjDrUQ6uhkS85Ao16AiwyHfQ1nF8C1pouvJSaKEmgx3TPbSLjEreyKSYCJo",
  "key21": "64Fjqhb7c8F3gYi8MF4whYw1Qsa8tFTBXqLjUigeFLyKvW36qmWrc7U6nusZFh4W2EjuQS36Zzr3jTC34562ubJ5",
  "key22": "3QGYYc7PeNUQWWNcCRwYHPfr1PSxXKZKtg17QZqXSupwLECkS3BSrXrpuAUnPZLeqavWezVTqEuiUP6MLRTdRyjT",
  "key23": "3pvcBxG5XtCAsCzbngQzuC2xmbVHFdfEcVeoVR9eW4TxNTqyaPq2VLktbYcr9rnHhiEm8obyjmrMbvnCSWepHe2D",
  "key24": "4VbbVrYbBhpqnmoMSFHBFQWwrT2DjycTovEuxrQ9TsvJ3DXEe6jHT8wi3XtmzjVL2hNjgbptwBF7Sy9JgYhs32BP",
  "key25": "3cu6qbpbFmdeCuxX1KC815f6RP27s9WAo1ga8nodtRf4TLgzFE3RSrteoSVz1MgT54SrxwenGz32SekDzHsZ7b4d",
  "key26": "RHjLEbw3B35fZUJmNSbWotNBfaMqAkzokGSRBD3JUEyF9RPz8QwNFMnKxUjDKa2mcVNRfunBz14iChbEUfyd1eo",
  "key27": "5MCzsYHt9vBcg8VhYHEbTottPRKCBzzP9NsvuTkSsFvLD7wa2bjwrGKrZYz6L6Y4LWEsjPC14gunDxFihGHMoKy5",
  "key28": "53K1cfZpJVAi2G9KW4T5cMtYZ2vd4GUh3AQRHUN1VNQPH5oZVaT7pNps8hWWsFbL6XKucv1gxLi5z1P6V9eTiEqV",
  "key29": "53Nsm5fkhu41m3Gd7QxhybwJmthKqiBWB6RexQVBZCYBAKnFCGmqNUyQgYG8Ju8r5KzjTnPRpzx2VhqvxVVAD9qB",
  "key30": "4ZVX6dGZDxejp3arjBewgp11hN1btYZRb2vA7Sgh3wL2GXmFza6AJ3Coga3FURK98npmmC3iyLB1SKXnhnuoBMET",
  "key31": "3wnrCosaQxYhSzSpc3xKZNbALGc38hVjQiW1Zi3TfPSaVtN6XWPYqcyVgeQrNY8ZLW7dsXb7dXE4Sw6Gxq8jMX8B",
  "key32": "4wQw3sUTz9VrSBNV6Aq7aKBr6QrT3fGt5yeBmeJnAthrFiTD3CuhfpJd62BFvFzddWrqM2ZNgKNCWeQDuSTVwkkY",
  "key33": "2K8YXx32q9K3ugtz82nEzF7CW6UkK3mRRG41MZH6hzH6UYtPZot6TP7jn6BUbWmc8reuYCZ5urtZRcXHYV9w6FPU",
  "key34": "65Cg4oHBwoaRK9Mf9gcuBywaJfLeET3S9UroAPmD1xSE4adCmjqraAkBV3nsn7fDrsaYyWPycToehRpXMCfEa43q",
  "key35": "3X291b8LqGxzqHhH4A9rsoJdRcGWVA17Rp9qWcuf9pFC7Hs4e9XYV9vqUHBuFaVouMBMaHt9Sp3YmaW1FMWC1Chy",
  "key36": "2TxKF6Jq8EvRiqVkXGDt4VvJtd1ZN9wmjC3xenrR1eXfQxmwcmmkQd7x1naNTmBVzhKUTXh1j4KjxtTZecAReDYv",
  "key37": "7YAABTSsmQXTtoHvdy5jwY7znvUtqLoGjiXLQAoTbb5zEbSMXYFNVcc539Jpsj2CqshszvWwNUUwipPs3Nbxwf5",
  "key38": "Qb46cMMBwCbWUjDPCoWauUgtqmaiU9r7S4hva8bDKwtGJax8wG27PCw9wuTBeVvRSRhARTeZR47zRxqEx1mMm7L",
  "key39": "2Kzd42jDa5QdrmUKt19txeFKNmoCXv2fc2mb9XR2Q2ja53WvEQhA9DpW62NJeVB1vTkezASeuvypdAsn14ZH56Ck",
  "key40": "4ziyZHYh2oCgqnuEa1m7eU8MNMLEHbD1jhnENwU1zbuuNZJG2WecgMHf91dQYZizSjA7sLdEeRnwsrwMYjxeEMja",
  "key41": "2NLdZoZFzFPxibRgL5egwrJe9GxBzfxmRRPYXwURbijVfhz8qDU1TsFJyVXx2gNZhNeATpiEpf6KZzosjkpSwzvK",
  "key42": "2Y95yZCR9FEVNjr4uk6Sq9v6cWAcAzG2EzAZLsfusZz1KcAscMCctA9kMYKbF1mi7STi3rLCtvMkgNRgA3piXyPH",
  "key43": "Xtq58qNs59TsQh4pUwXMi914nDFpzypVEdv8yWRaeAcygGAy4KbpXycWaheinycA9X8QHVK7pJHRcAMkGnLsTBA",
  "key44": "3jr2Evig2SW2q77ZRwHGouiozfQXcNxD9pgabx59FB8wErGiDj4Gv27x3jWXXuFuK65ZMocrdDr9UBpEPteWV89C",
  "key45": "63zesrsRoHGqdqGWEgRDmGnqNEgra35ZWfrQ2KghmhzG8gcMRF8GtnbVDoHBkMoaE66Gs9YqrvBpcT8RTofFbKf3",
  "key46": "5SFz2zjHzTqwxB9WrmhQ8scUA8wjLCm5oSRoYK4pjvuDaUNuzDK79n3u5UttcF4xeHXAFcSQEsZr3ZVYnHJ7p8NU",
  "key47": "yXuhjpMoSRYEvZ8esZqfb5TCcJWTCVMaWGNACtpgBznTvu49mufFwQmwPJtB9g29V5zrDNhogf2r2U3Cdv2XK5D",
  "key48": "tZxQociy89oUGAJoJUKqCq2iNfd9cR3KtYxwyXTsdXEVyFZ1Ngf1djNd7eT1b1ixaR9tpXMhznC7Y8GLpLr5iLR",
  "key49": "iYKALqurfvC9EXntiGML4B4aZo4SFqYji16qAK9XQNVaAnFYRPTT7yG1avkmy47McW5Q7E6FRRX1nKaeuBPCv9w"
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

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
    "59SseZUtBJn16zJcGwFWF2eyA11yY6Rb5vNE1M5gkktcZfhkz4CBQH6kh1RWb7GEX7r4ZZ1BnEvqqgAyrtTYkdWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P24oBPzFNHJBTDxDdc4PnrfGD4p6Bk3HMXpi8pFm73gpWdR5zBLkW5BBsPNj9c5VSY57KdcX3sEXhU4Nqb35GJC",
  "key1": "CijWyuKm3skreY4M866MdPi5ZBSE8av42p5AqnWsQv5akEtNhNkua15HVqmviUSqNbBFP8yRgFBiiU38jKfgAAY",
  "key2": "EtG5pp2KiPJu919sjNswnyioZtyMZcP2g9mzyQfVTSaWdPvXdt7JgeS2LTHPCYzsw3WGbDZ1o1KtMcvBXQW6bgR",
  "key3": "31ZQecVGmCcvtZLDCfPi5Sq2Zt5jurQiifg1rNo6AqCpp24TnKZYc5U6TMmGGdpDEmz4R7KnBZq4U6HQ26aHx85G",
  "key4": "4u9eduXS62PxhNX5bfQquNttBS88hPKCuCVmyXwymPmBWaBB3BH4KzUDiTkMQgmUjgPPJZhvopsFxSSgq58reoM8",
  "key5": "Nzy2815Ax766NkTJ4fP3boungDyxk8yfPnhDEkeADVfKbQmgUnywNaGZR4gSQ6CBtoY8Ze3pFXT5DgpwjYrJwNS",
  "key6": "3McXeRFjERohvkAE9XLQRLAdXap8FWcsbVF1JX1VbDaUPNHj9wzJsnx9vcE5cDgVp3EV2zq5zQoPkGFAFD9jUXW",
  "key7": "5B3ZUHw2GrXu2DQAVFwExCJri4wzLWy5Xi7N18BsNWCSZ9dThkEK2a6aZmaEZTKDq7Vrxob9qJWjNrfSKAU1TFrU",
  "key8": "5B5oy5Ufvn1xpMFYFZB2d3AUskDM1wnnHmsSheggsvKRpjKBvxiW9t5aiy4JJ4L2xZuRGPZ2LPJxyVmfiJ2dsQCe",
  "key9": "4GpHMaQe7PUzbh8FFn55V8x3P4h5C4YpDy4Y9d6mAWqJ97KiTP1jTHa1kKGBr3EcDGt2mhsJYys6GsumzwRPHE4G",
  "key10": "Lm7QkSe8zho9oS38PajYYwE7fR7TjMnHSEd29H61PxN9q698JN8BQhRtgY99aWUbrNf2u6stYp8g1hnqEKUdRFE",
  "key11": "2GfgkN7SyP4Aq3DsB5m7preDK1RUEt1DJPemkXbLQSLcWXDNsUHUwNFDGCX8VMokwLKy65ZPVSG6eZ55vv59EBS6",
  "key12": "3bV4ZgUQzYx6jAzZBgE1vZZ53as992P2VyWJ9KD8iBLrdc9vrzuam8gYEJLaQfSm3YL9paCcijBrZFBW7XpCgLyV",
  "key13": "37oZwVNzzSd3zJ9K6ocsRxawEMqtCyagocuNeVddRqqs2AvMMcYdfuTRpAaTL5gJvPaLHn4LfrZC3tHSC6isAuL",
  "key14": "5XhXk7RtLuzHwnPUYep3EMbyAyn2tPAidPAxUR3RUUx8d4m3rB6B1V8kRJcf8axfP9MihHTyYwNiWUX6kuBPV4sH",
  "key15": "4CPzQahW485Wgcad9EyoRcKhqoXqrSQjAxooUk1yj96Q6VengcfJQnqDwKVDcJhfz9rpZDBKcgXP32GmxhzhEFvU",
  "key16": "4aupxNrffecaJw65iHJiTbeFeyEBZRT6dJjyMnGA7e2NRRVCWTgSNh44RTp1U33d3TJVVTB5Ntq5kwZbfamZkG9R",
  "key17": "2hrKwaEh9Kcn84r9YqEyTefgXYoYbm6npBwFYwa9NTJFtZxomSig9q3VbKXt2pwnfzxhvvUVTqg7MrhhaPds6gAe",
  "key18": "4waK5uwLJLHjq2mtBwxyLkwiPnp4ZEgCsLRB6i88t9MnDFuKo2CT1WM5vkJn2NikSTVPe8c51T22CXmHH8xeW3xk",
  "key19": "3eV6wX2hKMbDZAE88PFY6isP4j3BQsL5aKFjjRhw74zE7yGmNtuRU4X59K6vosz6JCWqLqVjrtMKZHvxLozsxQqu",
  "key20": "4LFbnCJscdaRZ64erqLXfrzWg9v77PEcRcizMT1SuMvU4FppnWEPbxUhPVinej4GGo5sa85LbS1LNdPTgxa8LbaQ",
  "key21": "4ErRnMQkRFTF8YSAxyQxNTJMVmPtnXonB5NPpwgAsuw2AWNBa1WET3ryrZXmCB8XB47Sk67XHg6ehPCX5Vw1Ts3s",
  "key22": "xrd2RtYHDBqL4hun6pBW5pxkiaGjkPFWyetjK9F9igZ4u1dLm68sfUFVsvU6ddbtVgkKWFxKFhbxCKiF6CJnwvs",
  "key23": "h7y7RatwS3gY1jZiNzyk3aoev2eW1XrSwwpmAVNRUprLa5BwoBENvFg3wyU5FxTubb2HeBrddw24uazePNt7FPk",
  "key24": "2eLQckvj5vAm9whid8na1FVKgZG5sfEYnzTRgNgXY3K2zztpetGgiE6ediq2qkphDTfzyjaybd99vYA5p68by7vD",
  "key25": "4iUzS9ZdY3ZVPW8JBKUVfaVsoXLU8stJJX7a5DRm3GKqbbv7NSSyMER9R7U64L99VjV8RafNG63aufhM9oVeEyqc",
  "key26": "5AWioqXdUPf6HKAMmb59duZFE6W5GTobsZGNQgUHfjFrzg1nSkfF6JAaKoJMhuyAMNPPJpmHTX1CnSWtt3E1yeir",
  "key27": "3Tj9eCdKwsMMNSuxPHTf28FkQ2pxKcA3YZ3xhxGQPAydcY7gUYm32tGunPfkMAtcxBjc9rMFmYCoBTpTtQfpAuez",
  "key28": "yRXcSy9DQUH8bA9xP7tzvuj4tNPgeW2NTXmo9u5DnHrA2i3Z6VxSeVpZLWiRyKJ1WiVTzchPKR8yBVF2kCSVDx6",
  "key29": "5XorrRcsvBK4YkssaVKGdD5MmAUdsbJC4w9LK1vd3er6d4w1Jq47yURg9ueri4tkuaBxQGEJqgNmJsRvtjcoUgc3",
  "key30": "4v2ZR3ByhLsTk9e14z4Rn42rm9Eyo5Wxjt7GfJd1eyugA1MHyW9n9cS2UEg49S8jXTpx2AqLopcqApTt98X4d5hv",
  "key31": "1ud6X6qg1GTBDtRaWAwu1oSZZqNoMqEefguTd31EpUETokHjGb3BH61CvxChTWh2z6mAQpKKKskjJvttpQ81YfF",
  "key32": "2x6XutgAzEFa6M8KoZaykQ1x3qS8LEzGBqQappb9F1aCefHZ5cfhmW5Wz9qotPjzpkqRkyv3xZMD84YiBq9S5oYV",
  "key33": "3YqHUZ4vdqZv235Re228wYfnWrzHqbq6QPnJJQwtwdFACgG38541WGNAecPnyoX2Tt2cux8fviQsowqCKjj6N5XZ",
  "key34": "3aTMjKsaBtsWjEByW1nnRNF5YzFs5pDzN6PCXzJeZfFBaMZvhUxgPmXZ4zx4yhbyRJJLzsspBBCqatFy2crsjt51",
  "key35": "4mPNBB6hfNubACiQHsAiAqzWHxPSfiSXoez55e9BMhXY859WwCXr9f8ERbDE9kH9hdaWEBjaMroZAQanRqKisnqb",
  "key36": "2XZrkx4kAtaofzXJTLqBReq1h1v2BeVswrWppZxKQsqaR3RSYLGfCWqN2DwELfM8hHvi1VkMD7CMcjc6jyBjjprS",
  "key37": "B5fGgAJWkXbH57dgJ4p1rgmMgoSqEfUuYYqYpT68bU2dgAQjVeoRMaGcHfyoG6Atn7cmXzvMbb89j3Hq73ZRnmX",
  "key38": "4QPFnjbMHAZr5gYeUjgJ1BiCFFAyDaTsySiHNiwBiYL3bMeY61gjekCv52vBA2gM91UjQMt9E5WomLDYERX77uKm",
  "key39": "33fpNFNTKcRVneTa9ebiWMHcZnBCjo1MA7GvLRGAZcWFamtif6KzFCVs2yT59drHLLh4vdgonxcnPtYXdpkXk4Km",
  "key40": "5oamH9C2zAxm7VgPdpWJYRWsi2N52iCj6Tu9t3m6maU5JH82hWx2M1f8SztTH4aKRbL4JVc2HoPpV13Uaoqgt9ku",
  "key41": "2LKNH4DPsJwfzQ9fB17Rm9AQofB5UhDgqzvF7fYX7nKPQ9GBhMK5jhZT5xefGMEtfdpZfZz9kkjGiSDDfymweJDc",
  "key42": "5zbxiEuhoXcui7tJgSZaZoKtD6zxkYE4NHJs5RBommFZw3MW5QViz9ERUTfAMjSnMv7zhmMKEpRWW7k3RvSNJw8E",
  "key43": "3MF6r5TjXvAGnnXBKsAN1wVv4nB2dh5ApEaLpX72W6Tho8pZccrDR3N56Y6kcfpqQBBTf9S6od9mc4xWmXCmfWtq",
  "key44": "4Bgy6aEA2uPExKtW4soRzdvvCKz3DhRj5FDLFtDibEaJz1J7U54chwhWRhMwq2LLEf3nwd9svKEvjfcDxo5PVqNT",
  "key45": "47C3gXFgCQChQY5iEtJGgnQz8kMrHpr3VFqD4Nk9szRBsUhKhwRz139hYeYRkuZyc2SYCkBaGULEH3gLHKXiXodU",
  "key46": "4Vy5hDhMfCw5TrB38VQ9SYq7kfGVs1dE7ZKmXyQhvUQegq8ESZNP6Q643s8jaj1ZLWZ49giiDk8ibknPkxzhPKSC",
  "key47": "3kpyqRZJdqQHWridNAx7cZmAcByBQziZ1Yb4nBSp7QWKN5eoMC97V7v4XTHTtJVVUiwiHQMioGQbNrstfxsuetiD",
  "key48": "4VUTL5YcPZsLbnHNSrYoYPcJLUd7G4qCVwxUcYwiGCufbExiEvFxhFkq1MdFfu4giQadqMDp7t6X3ukTiXjsGYwG",
  "key49": "bMgDehk3De4mgsdP5aX8dajgVvjgsmVzW2hdaj2F8sxP9KqWL8PUx26Vkh6Rgk5UbCUshPUe8e7tYZFwVwi11X9"
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

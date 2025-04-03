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
    "2Bc3dUwjmzMW3aJ8bxUcRw46XxXGsXbayEjpz1KGb2snj9dHxwq3GeYPKqviemadzA9N1uWp82MspaYpLpcgCLcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c8uabate85dKdZ5SUZgFN93MduVwpJWVnCcbev6nzT4f8HtY4fhZKGBQRCmiur2c4HFGjjLu4ykDUnCrm1NtiyJ",
  "key1": "yCvYeqJE9yHTw528C5Mkn6buNcNJU3FGpR9G7AL5zH9resX5UHCMxfvt8EuwzCVSZWuaYqFJfeyq3aR6SRTKi7j",
  "key2": "PZBgNccsh1C2So2p48BMybX74QtNtCWX36Gv1exsA2MyQDc5caDQ16zDkYuHoHv7ZGkyguAwydhssNmPpeVukbi",
  "key3": "2z1MwH14ABCtQD8LcKSxxk4rbDGxDKnWC6EHMmgByY3pVTVztRta8wx6gTubdV4mwHZppn9YnXg1e3Ysq4vDGhJi",
  "key4": "2d76tiFZqF5NqydTMEPwB1MjVqEYDs1hDekWXpWghkBddY5nLaY8V7uy2ZBT4ZnCU1EfGUWm4LasrxfsizELLzrP",
  "key5": "5QXU1Mf3ZArEPaRqx4egFBQb4MuHnPaZYKhdxNY7kY8eR5yrfnHZei3Uum1HzvmkdxfFPwXVy7q9nSjLCMkfA7vp",
  "key6": "5D5524zY98D1wqjfH9LynzxF7ffEmq5BfqYhRuukCna7jUW63y2kM9kECoS94PMMNqbDGQ9yxDKtJ6852Wi1sKe6",
  "key7": "5YKj4XJK9GhVwLx67LsY6pjS9UvURee6vpT4QbiJs5nyM4Ah6gYvWz6j6eWfS9bGi9ETvrQAs6N2kDatsXPAy4jc",
  "key8": "43UDZnjN4raFC4r284aSenTNt1nLgRarbYPHRnse7VB5LV8Kb4TCKJRfBscWj5jMRmWPta2vR9UWScJ7VQAyqkj3",
  "key9": "4dCJzAQxSZnqhoTXLsLnQTGbas4spNV787k7DgmX6KwAiJc5dbwyqo17cT9nnn9k38VcjUi1JZ41NPLAcaog9jUo",
  "key10": "2rx5tvPAbfBn8rsjyFBMZ3TbZpuY3DLCdB1tV3S6Zz5GmHQFJLkuoc7jcVftgDNkyxCkhXagTW1RzCv1yUNR5gAw",
  "key11": "4BERca597c4LG5XwSL7hadHXRjHGhsy6pfSaTxYnkpan5ytTQDyhaiz9Q9DWPsk5YL9HbzzJn71TLwGrTvvGdL3Q",
  "key12": "bR6XEsduuuAGPrYS7LwTo6vsn2VsASbVxVBDKQWpcejJFtggoKULy27o8NxwCmKaQhufx8MzXnVujZK4ppHdxgP",
  "key13": "66GVvRcVqE8AeHUuy5C3fqzkramiX74HS6LgHyBPT5LfPvs1bopGJiew2dhkVX3RSeLfTiZ2qvr88HgiFnKipr1K",
  "key14": "q6xNkFUNY9KzhmF9DzRHt9SL82MrsimTtUwXKk28UmJCzx8wRYf62HVDtkKKHjvWRk3Meqaod1Kkin4xJjhwQj4",
  "key15": "2JB1vDXFT5Ss3j8PCpxkqrcaiujSpUzbYXJuNUCoZhZAuTw6kfb9258jMh3kFJcrnaK3yKRaFYCxdmDeciVGM9Wb",
  "key16": "3WSWdSABznWe7pRi7U7G5wJnFZwsyCLekCoHCAJNE7AMYLTjbkg13jG461Rn8pnywc7M9P1HcNj9JgRyXY9vqNFg",
  "key17": "WqzMCEUc9SeZdbL5XYSGvARB28w5DAQJKZ9f3v5wPU8uHSn368RMmf6KSjMGE9RkCkHZYP4WVCQVKx9abZfkucK",
  "key18": "2Ex9NNYX7rGR2ttK4n3XRSpj2JCi8Xm1nxtV8zGzgLf5UxxRj87L2fwVptwsPgJkcTwn1TB9f3ZyQT3WtSUjPYxg",
  "key19": "2nSTsT6xYyrF5j8s2NRbw1z1wak1FXkJRcpFZDb1MieYqNVHBJne58TeRWw4M1nMJyid4FhFADT9CUrdrVPELsDy",
  "key20": "4ZasMyK9fkRp3EcAJqYPjDyeHtDi5VkQa9tHdtb1cpReLGC7fDbZPPDJ7YAGDqHXBSQC7o7ehFsG8XQFNBTGtAdo",
  "key21": "AV4GVdzzJv3CvPnpAnA9rTySnzjhFdwrpr43QpBESUQap8S1FgBKoyKJtV8UjEXbNyoY1DUKVZNTxCWK6h6ZJCV",
  "key22": "3ZrPijfF7W4ywWoXraFuKu3GSQLNRqVRgBEjjkuq4u7S7ikDU48yvVV7NDcv1cNcmRR7PsFnVdBBYrgd3L8VZgtZ",
  "key23": "5XoRhAsDdj5SJD5aFUgw5PbVyNA1kfFiYfubZYw9VMpPsR99ATYdeRSDyJf6n2xKiG1y3GWfJdAMnhq7TDnGawYp",
  "key24": "227TnRazgqyJMRygfUNdUf1qLzR68G4fPAkkE7Xvk1Y25YNF75KzaZjKpLtVNKCVnmZ5ZHHH4asjSaxQggL9t5wR",
  "key25": "3ehTnwjNarg59XWQqLC2towAgnFKtU6zihyDz5P9UudHohJeabHSToK6K9ZPQHw3LY65WyB3YQJD8KVke3A1YqYS",
  "key26": "5DGLmHzTUsEd5DP3xxriAqn4SNg5t4xM5WjfKJYHM1drZt15v7YuTRCyACTxoSer4F2hcnGtBrQwB37VHW4pJrx4",
  "key27": "5u2zhBynGo5ENM6SBceHSncXrrX2C3WQ8bkRnkGKBiLxz4LN3Lxh6JsG8QgLL4SGSMU6tGNuaf1TApou4X2zoj3Z",
  "key28": "2cdpipR3gquxyZ56KsbNisT4LMFCeB1UK1yFKbL5NPHwiHRALhRtpAeZv45SmwSvtQj9xjA6AkomKRwaES2CC2EU",
  "key29": "2FQasMuxAvwx6G7ypT7mrFTvAzYSUE2LJ4f9g46qmVivjFwYXNu1jncTw1SnggwBr4Tcrj2ZFfKPx3ZqQBzNTA3e",
  "key30": "3mxrHBEbX44nv6bpA6AqAbZKsb41EuvgKNQSy4EeoAMCheN9VLxeytjTgB3y37nLRWN72nH1DzBRM8hukwfMWDPg",
  "key31": "5uNR6ZbkQZNKmPBauYkwDKDyoX1tY21jAszaGZWpx5GBNB5vNVuc9NJMXG3k68bQo4cktj5eUfPLbbwx8M3k6HUb",
  "key32": "5qh7aKAGbQWpSud3Zq8AiTF1Cj92yN5b16gy7ASr6HYp2fgRTcV7ZZ4t1Kq2NaGPyTTKMoufs7sW8B9NPKrhp1WH",
  "key33": "kLxYr5H4w354x1j6G5LBqiD7ebaqLYUdBf4rDviUQLJhQVoQ9ihL8jqM5vnvAuvSZc16GM9Ym1qgWnWCr3JPgYf",
  "key34": "5fbXYUa9QqriqErXP7XzeCkfdDU32NuYECEkQaBPkdKePMonwh6Eqz9vRWFXY2WiHjZPMPaRKfNdErb96dCWpoxx",
  "key35": "4w1WEB8V1MYj5DjnRE8jXLeYs2iFnLCjGhwSXXLLZfjJzdYg4yUUcpZ9HhC1TMoA4hyS2ZbX74ruNwvDffeySHS4",
  "key36": "m2sDbCv7PKeeF4UWyaYLw1eW65MjhFdqLzp6q5dWJbWF1LNVTNo8Q8eo33JXSEs5GoTJHaaRm47bRVdEzn4ZwyU",
  "key37": "pMGKeyB6eXYS6GTg6g7V2tNuhdB8xm2XbwbE2sQpQkVvoWxmcfzsYsNFJxsFbognLWk6uEsiyGYKoqcofFxELFE",
  "key38": "XAmrHvxhvh1RQgiDNebCqJfpGDtFyZYoq7Dddh7zXkGGULszD5zmXneQX2JaQjYvDECT5m7wxSmqNjCu7XYyN5T",
  "key39": "qjbFYGrEBECBtfbSRpnnPA9ha892FXGwoSVFYtqQFheHEFPeoHbXewinkkMjYwkJNcyNpjGuFfD3FsDtfxrzQHL",
  "key40": "45Jr1M6Gh5BDWLNZXSkS2wg9boj6192RzMMHjrntZyt11u5Mem5cKVowgHRwh6ESAYAzawQDakNrHmPxEiYVVF9L",
  "key41": "4r66U1tiZAvBXsFGeRdmPZDja9pAfRSJ7bRnpiWbDJ8ASzQAsCpAvncXv2jCEBdpFvny3ePLqyyaRQ9M3WcP1Ppa",
  "key42": "2o1fjPazjZ18SiA43CnJ1asnhcCRE4L1ovRnwRU3FwQ2fCMxGw3TpMHJb7L3W19oNVaBEkaNNPa4qG8tuRFQgPMT",
  "key43": "4CH2uyXcMvHRcA58qgjmY1azTqs6PT5Q6vrVtBUrrT5shnCxmppy3V5MHqu7fhYbYBUteehdMQQFHcAJdKPPL6uQ",
  "key44": "4PovzgDLeSx1ua3jvgDaULvN6NffoS2Lyak8LfxCvy77zGRhnSW2cnmCUE6rjmh1bVvPGNZ38RQMpc3T5iyuXVtL",
  "key45": "5eNPvWHbJSJPvfDuFfoXzobg6KygW6kMaVaJns5rw3RnVnHyAucrYLxA1Ed1vuFxCBWCHdz12imwTBMK3cyvW5g6",
  "key46": "2xmXmzFG8ZuEKXqzQ5Jxo4ipGQE9wejYBJk2fVjKim1TFhS4XCS8bXgGTEKvvJH5ExXz3ZZUPV1KTe6PEB7wHScm",
  "key47": "295DPdqpfgABwyJaRMShuVFFwEyim9NVs2wnUcPRFDnuNB7cevTiQ2Rb892ufRMDQmy5QyS8q7EhzGPh18oTBTf8",
  "key48": "4D3or92UXgiFSf6Mr9hvx4zuz4pDniQB3d9UhPJiySFmUzqUqNabnZvyBTP2D6qwG7B5uF5qzBjWjsRTELxPJc2F"
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

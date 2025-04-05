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
    "bzNgYHMKhWbGirqoPdRTFHmCPn6HE3PkDtjynDHm6Xr4oo88yW1dnqaXZoMquMpzT1wMYzqWJ3r7oLSZoWh22qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NmmBcWEQniC9SvsRMun9EYmKDZR1t9mPGjAxxDZykZhLy9wTWkdSLffzVPi5PoZv7uYAKn6TeDdWCEazX31eHF",
  "key1": "4VBAZGjDmsna8SUkZShqZmrbemBYhfq33Xog2i4vfzuxuvczuqf5dBYX3PpL6ih74V45hHRxnhHTTz6cwtHnZvod",
  "key2": "4QRw6x1i6Qoxr1o4pYcUF1duvRKGayoLvx7YoaegFNTeWEwgTVnsWFwFW2Jmb4ABYLCcD66fLXTtGm7cf1qqpZVZ",
  "key3": "5ViSipnShaaqjuWd1UWVcvDmaJie91JjyPHzKoESDJJFknNjeMes4CALPRUgnodHUzyFKUfHTdzpnMDWCHP9etQt",
  "key4": "DjW5Q4yZch1ouBdsWYu76yA4Mrjd6Nxvx8nMH4x5wvB1e8zexS2VmoXsEfNep72qSV91JxWxuPQ5o6uYX2KqAzr",
  "key5": "2MoG46ACe1viSfm7qc8ZYAbFiCSfC6c2uXb15FpCsRoJvodhBGKs6x9eHfUjha6ej9vJkTuiTYjZhBsiBRB5NiLs",
  "key6": "5D69PHrePWhtvk4fw8HTyPJRLhK5VMFRRtGRnA4RwcLGcGKZSFc4yY1TGuJqQofGCU2JCwxqmPQarHbjisXBJpTM",
  "key7": "4sGPJiYE7uXRyU3FG3jTLMv2Mim3AbLTH3qrDScaTjqjSxLwRNX8BxBxwgzULX7mfqs3xRHeX9oidqgARnbVaeZ9",
  "key8": "3RckLeWcwLVzZqnCcjouN8jvAneJbGUf3oe9Z4ZfHNxF677W3BKV1H8NQv2gj6hsGFLeEmjDjmrR6XJnQ1Zhfmu5",
  "key9": "46cHUMCAmAdeVnwUHhum2WByt6tjGqYSa361hH94sJA8FFy5tWZiuvQQ6FTCfKqhtBYWupnsBfHmUX9FBGq6DANh",
  "key10": "626Tdr6PQXQ9i4WBqtKYymTWhU67kQaEagmEj1JSfvUyMfJ1HHGCT69MozZxRhPtMGQh9GvKhoxASYbgKvUTR4tz",
  "key11": "2nBSXNUQTC3xmoKTtGC7tR37NzQCH27qyARZpQ2itmAJxjVntZMWMsTkZL9Go9yEWQ6m7UcxGc5Busscsp6UaTng",
  "key12": "5prurRsXQZHuSmMHyMHuExubs5xApXaurwzZrnKX8NPNPx2kAxhfz5e7ZxK3MyY2HgKRU79gtXuxPfbd82GFKSF9",
  "key13": "KaLFp6zkwKuFryA5K2msoRDKSbMqztsuaYp5DZUVmFU7prT9xyiNVsV7we1FFBYj9usmBwCBbpz5h8BYSVt14DZ",
  "key14": "5ehBHvuZiVXyABrHyLzJjThQU8irisar1UfQztUGv1rpWrt3usHHiGoTekWUpRa1SpaEhuhQaJJRXPmcKSQKwW7H",
  "key15": "tWc6xEuyn6ty3JHbkJCHtcW93ffHfJyXkMeq5jbdTPABL44LKHqBNVdB91D2Frr4a7VhPgoc5mm6ZxoBpBvb945",
  "key16": "2fedJhVPzkQRiuj9ZHmjP7DnE6wTr9VRJTEo5HDW7tKMwJ6cxGawNBhY4xRH1Zd33NfotUUxtr2ivgUazADnmz28",
  "key17": "4XqFreKrTMAZ8jvvSsDiiWpoYzonJqYrpB5VhQRm6siyeaCwwVBH6wjJg8GPaTeZGMm68i2dec6kaQtBB1v58ns6",
  "key18": "z93xuqmhDHTPrKbsiYcgqydA3Zt1UehEUHmzoreHgNXw1Vx8Foo8fdmtW29jTW6XW5zvFWEbgmMFqEWY1icHiPR",
  "key19": "2JydepeBvNe2YJTpiRLBMddinyvLkUZ1GVyGhwNVs72YPHTCVFaoL1pHh3rdUjjm4NgzrYG91ebc7rC3Q6r56NgD",
  "key20": "3Wvk8FELeay5bR5affagSL5Hij22sNcFkcchU9BNPShyg9cpvamaDwGfV5riwUYxmdkrawHgFHDt3X9hvFWNL1um",
  "key21": "5D19SWD4D3xjSoqiPNrVSr122SwKRzyXpLkMT7aT3mXGKXYmiz1AZ9FStU5oxaSJtvxvuywNf4qrVsGPvNu1yxM2",
  "key22": "MYDov7Q4YWvMoXYanu3xMwBEKeLcPPAStSygwqtUcj4Tyr2SXVXdhEug3phKEwC8xPWwasJn5MWvAHZS4da7H8L",
  "key23": "2xZhQ7yQ7vzBjC8492QTUizm28uBcmwvwGj3fYQPBBQAt4kc4NYKmrJhTNF9VNbjs3K5UYbxve4v2H4EJjSvmmTd",
  "key24": "635XTs6p8Cg8pN8ZLXn79JHxF2YHsWuXtFN2mBjYN4eR5DzLvbzsQivvTMejpb4459Q43tSZaEzGUHJPzMWLYCW7",
  "key25": "4Qet7cn2NaSfQn9f4c4adoUsx1J7GzcgNvjXbxjEa9PZxWcHak5TViD1X1EWVvAD3d3ZD6ARmAmtrDkCwqnGHvVt",
  "key26": "46YVgsb2QRgw7DZwN5AGcxp9tWLSZjW42etR191HMf8dagozpRApPJMLHxcgL3B6zTTnkhDV4AvAknLh9r7UtxRv",
  "key27": "LK4rTb9Y1gwQ8NwXoW5TmwiWmBRvTMZMsejF3dFpXx2WSZFKnZTY5xoVnrtViZD2oYv4ZS13W6KUN3o2PJQH4fM",
  "key28": "47xmXPqxVTf35FqEBT65pk2dQs29e7HHY3LXDK8vB6syfDZLrnMzUE951wrACGgbLWDCYGF7JijbxvzVibZ2kPG9",
  "key29": "5ybSZqgYvRTMyyEZEPKurMXNnsGZM9qZ2VgHZ6V8pamYq9cGKoE9UNZjkjDQA4zypj6tvhZ3o6kDmtLbqcbqrZF9",
  "key30": "5xnhq7bve5h15QmDgVyU6j7ng2FF1tAZxLULDVwtNdYZ8whhxMhqpa6CeobZ3ry3MGMfkCszRbSxZ8GAtgSPQ4nE",
  "key31": "5uK9YB6QVjusFkXmDmCXvB3tWAPrJ7Z7NGsapdWD6nRCe3bsyUe2mkoZ7Pm6X6b5Nn8Lo59WiuD16guckjdNsjxs",
  "key32": "MtAvLDvyZrJByQ1r1rv3tTpUS8ppKwAtXVK13uio91RU7WofLNAUNwPNaJR5wGaw3a4LMEPZS4yDhAJ2E3bNuFJ",
  "key33": "5bNKeQR1McfewuuWLDF9HTCameZMLofSH3Exg5uKKp4qyh6hu1Bq5xz4qjy2S1JzKYhtZRUtkVf4PbdPzSBUgiXG",
  "key34": "4BTnmQoPNQn3JKwYgLwxuuf4f8HEjLwKmtCD5wfSAqAyyoSeXkDBe4rV4KEoDyxVHmWV1Dm3mcfHYYJWPQtT9wG4",
  "key35": "5PAksjxWFcxGTvbSLG2r6EQR9a7FK3oTcPfuiwWuNo6rNdQbioX8p46ktN2Awmd2ynDXJGWudu94SCmmksngYhok",
  "key36": "3LKzMKtBTsqa56UTaJ4RDvwkBBfsCVYQoCaJwFKrPDosS9JkZGQJdgEJbrnWHat9fVP7taUUSN7qQ2QP6ydiQkqo",
  "key37": "X73m5zSbMHbULvFCVgvTETt5ZnLv6fWaTZcBf4nythsHMtXWHzkSch7K42Cz7dkQd26125exvCHEDCn5pcUgky2",
  "key38": "wWs1qc4ecWivNiGRa2fVmrArZ1mqhqXJkTrJpeEpocXuiQmXVZf26FPWpxArbZAGEmorjqoAkHjqFTXeNq7VDCx",
  "key39": "Zk6LZNTkHeRPXfkArZ345fBFkyjonwR9zUVV2YR7FJNE5gppDHRQBXTWbnRnsC89FD49vJBoDdYNatccFKotVz8",
  "key40": "masBCYekrutw6zRz7UanZTQcRZrkpqMnfWbbaXCx524JoGCWYJnXUtnNjrvb85YeKjjTjkPtwdebpnKqGGQ4Zzw",
  "key41": "2taDEvqtPcGsFDQj8GvkqE1XaoNAacPgM1sFTg5fNEXeoNETmMdnRc3ZKwejyxbGg1pgqJQb7eHV4N5i9EWqpy18",
  "key42": "5cZ3sGNNTB4WkK9QfXXmmihgxFFrwmirWdexsMAi7ZUBmMy6scd6eCZusJVKe1PkAJHHLUEa3juf9PEZFJXttLmU",
  "key43": "48at44CR9Xhbh9aSHvyPTgLSThJV9G5ZwXpD2Y7wdg4f5VjBXK1Joer5iFKjRHtBkqUzBDxJN7hu1zhGkUSX1du5",
  "key44": "2UMHa2qYmQLuWAAey1TehbHfCMYKAf9q9brNqDtCZ8No3D4PmhJqbCSGBSPj5PsxABExtxC2cNyRzK9n21LJFQCr",
  "key45": "5y43r4buR5AFb15FoxSsQguwUkWPsLTjrxGSn6xxmuvEr3ERA2WFCY4uEKbxNqNfgQD7j27pU3gTJQDk5yzYhjoM",
  "key46": "5Dd9rWeQuZP8NfcRuxuMphk3rmHfgPDgmqGdHm9Q6V6EPVs9MnVoyctzdguev25BPxWNywWkL7XGZM7WoB8pVqMe",
  "key47": "2kpBz8txVDSi947X1oBxRd8uXvYqZju3r18N37P7F7dwgNF1yhBTgCS73aancPF2eRakgAxZ1TdvGpCRRazeoPEF"
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

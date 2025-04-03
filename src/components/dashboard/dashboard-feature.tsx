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
    "2u93Mftz71DYBKDcVEMDvySsGb9UzwfsuJJJchGrCEC3CVkBXNgegPajjSc2HSCsXzVQR5KopUJAsUGU5Sp1FkgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZXhpb3ZBF1FgLE5Uc8FnThtRyYxx7kSrZqiMDbxF1n8USVUQi7F7LMLCqGUkvSzqJWpbpcYXUgFSZCTCcECDWt",
  "key1": "HKhE5TkBvqpw5WhpXjrt87dsmjVWgDfDXTVhem1qNzxnCLrcN3W2T8ui89NGUBDrVCSPDeKxKamGtbig3s5S3fS",
  "key2": "3cD1uDDSZziuadrEs6cjgw2WTD1QmJr2SfZWoauKNU9Ehd3Ve7AXdx2fv22rFtWQfvuL79rdsdZU3xp81BJG2BpV",
  "key3": "4V2r7E68Q5Cx7BmGfAL7fTeQ4NFiDquo6RdVYMPMwXpEWNDR9ftnzMzkWmJgw9jCR9ctd5dKXRmUJMQcZndY3BmZ",
  "key4": "48WiMR5PPBYvZGjPrHfQBJ7Hf3m5Unu3YZ3b1yTk7WEiPP8kWbsyNpp4n6S41mSpG1BXtFKPzppQSCREYHiQUEfF",
  "key5": "2qa9Jm4eZcAyeNboCiCC8hr6ZeqAtjoPESbwpoj8M8G7ETPzQ2zKt644bnQdFTu9rSR8ijk92vXcfMRr5og1TZRe",
  "key6": "4FGaXmDMrkE3QZGaJq4pfEiBGtxT3xKDU2BzcPGSn5ufZjMCBkD9or6aT6EfiveBk37we4ozH2H3CR97xd8Gi6mw",
  "key7": "2v59KMoobPsdxAyTyBX4aARndC92uFaNfbCN7e31oqCo1Tv2ENkwbJJhPfBgs58vfATUjY11E9uZHEXLjWh6Dm7g",
  "key8": "2Uyp54HB4RSV3ms2pz5mC41scqH1t6Fd9vYUni3Xoqg5WBgQjicoNqCBqQ4BTMcKCGqQdKLqYHwrqwaJBJnYLXJi",
  "key9": "2ravsvT7YeAQhHSzrheqEHUTEgBG28RMd4Ubu5wtjZAJNahPLzFpL8VYLQdkBCzTiqvaKnDHAHYxSDsrDc5ZvDit",
  "key10": "4t9G7WjYyUnYuLPv8NvAZKagFZhnfNTKzHwwVyfraDrJhCVCAEsxATXEExs4PcJJLVk4LuKvBid6bjAcQLXyxiEt",
  "key11": "368LRs32sNb34ZrCTRevDDWZrRBW8CaJFyQ2ZUuw5tHvKBjNiLUBy55RN3QuC1RyEE7jhFjCM61wKT4k6GrH5TJQ",
  "key12": "3kwxFY3he1L5pgsJqbRbRgYTDcZrahmSJzcBQ3mPjYEg2qgNbt4dKv9nNWLWz6k1KVw7SHPRgGLdwRyQaZeyWwdC",
  "key13": "2yVzpNp3TupRaQcsgErh5JeifoQnxv7zsfbeNbcKEvEGcPL5pQZVH7Hrcvgf8aKcL2BmDoL2e9RAXQbVucN9kju6",
  "key14": "2JtwhkGMbGHeHo34uiyVg9qeAWBPrHX6wCHhddczaeBGrbevBGjdov7bbSwmPMeAQBuVu2FT9LgqZB1FDsdZDSBP",
  "key15": "pcxVvQcMkgNMjKDyxN7y1dPy9wv8wJM5qxZQ1UXPsAhwKL5Dx4QNykrGsC4B9cGNEPsEAjyt3kjg7HtmQh4Hh8e",
  "key16": "3prS1nrXdcYszYrLvJ5wbdmy4tnrGjGcd3rUo53omzB5UqxZzvN6Uvn8TaKiBSqzZQBGdycdPCkigauVgVaFuUo9",
  "key17": "2KX2f3rUfG8vjwoxfTXdkWmm75BoTBCSGMEN8bbBWer6eotJNMcMdHYdxkf7QZQiQNpK96i13HWch8Xkey24t7rF",
  "key18": "oZLnMbLCsF4apbPw5n1kMYrdCGi1tPjkR7WTg6wFWfCbCNesk7H1smbhBy8nN4jf9sDNrp3dXsa718zBgcfKamg",
  "key19": "AvKAFDFrgnfM1Ff9QT5HDnJUqBXQ5KWEWGg1sfmWxLEQ2hyFniMj1oG4a54Stkr8kwzK4PvLN6LdWNzTJCa4NNs",
  "key20": "2hAgKar4SwzSw9qf2GZERQ44oSdYmHd2bKDyMLjz6ccWboqCzztv7Fegk5sHQQBKTZmVujE57WPq163Nwj3FDLnW",
  "key21": "4qDwgnxRy1KRm7JYrhDiCie7SiS7HE2cmLYTePqv7i9pY7S72ndPULjhVsCrPCtWCHPKgpg3TeqQtk8CN6B6mdtq",
  "key22": "9V514t5HTyL36XaRWixXTa4CnUXrPKJYm8co3wkRTyN2LYbXkXoXJSD5iJjJ3RfpdUrA5NemTuUMb97pgLtSieS",
  "key23": "4w73hnsUq8WZ2kvNY5c6ceSKRhwrkDPtejCLFWng2AxtPAE97fo5Cn4t38GFCcpbkApu2NaLztkW7FEGiMzq2iNQ",
  "key24": "3rdEwtwzGiCGsD25hGwk5ez6vSSRQNueAFuYJ5t96ZDdbDEHJds5W7g7QmmbrQUFSecWwyrY6SPGVuHt9U8iaiap",
  "key25": "2dHKfcHmEqmX2i2ewijL5k9WZTw4KBwW4NoxyY6WNqmX5aXzfbBGTexm8E3HvNcxkYruqrSLUpCc8J6Bar5xHvS9",
  "key26": "3b7z8ktn5miRezMsbB826V1GtM4ajMonNdUfeHG5PTne8ppXmAQ9JxBpJuZ2SdG5VTcSojGKN6r5fkRPicFvNGiX",
  "key27": "5qapjkrXFHoiSoNJaAMKy3WWTURw7d2T2AKr2aLHvHKCR9jKEYWQqL3sqZpJoP1nRmWKfSB57G8oAQTE3ZzaL3Fu",
  "key28": "3nDNDgmJhwaGZNvZLa5PbHJuWQLVkSkh6JnyyNubbnMQTh8xJoR8XQw6kCbf6JfgavWUQUdfz34AGnjfuWscqiWj",
  "key29": "5wJqursXRwEiQJVi9nY39qPQoGWmrLXXFq3chNR2f8hhx4ZJWVZyybNGrgV3vdq5ZhWSmGsFQGnfhWy1LNVtcgpo",
  "key30": "2DjwBFLus9vwHmnideYbKLD9646F797h1r4Sks2yU27LsXNrrhdLKfvqDVHY6pUixd5nEjaZeUmJNG74AN3ffQYn",
  "key31": "2C3dUTy7YEwbnLDNNmZh4voyibex3QLCdX46tGtjxFjHvEZVrHHqiBKy4Y8xd2d3omPfZBS9YPYNpWqh3SceLNQt",
  "key32": "66ozGFegPt9pdt5oKuVt2WrEmsQrTDgEqsNuHnvjGJs21XMVhkAtqjN4dwTSrkSsaFaXEWHVfZN41z5rHKgw9Xia",
  "key33": "5XPBBc7wxaW1Rq4rfXLZVjQ4eFkuzqgRsKMrKbafdWqGGt7VhMeyc8BeFFzPNiNfBpWFypSKJ6JKwdGKfmFdscF8"
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

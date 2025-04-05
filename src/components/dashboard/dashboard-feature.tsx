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
    "4tsXBXNPGWq2T9DvJHrSshoNDEgrr5MSGt2oQW2TW6SMjqab6W3J3Q87wsjacYyV7wBvKz2fYCaRKzFK3yDxAoKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKhAkVPZ4ooZK7NvkdvtWSeWU8wXEs2pjVCTAf5V36KoTstDvhjEv6H2z24A5fWe1YTrFrChNZ3XwRUasVT2b6n",
  "key1": "5KK4qPviGGa7fLXTDg7jMc2NeMRpXnFhK4Vc3fVFgsjAAofWzxzCKLDmUQbQ7qVBkDXJtVwrCa9KjbSDBF6NzGUZ",
  "key2": "28HdFvsWTiQwZYESQzsokfCD8DhF9VhPxHDxw1vxuLTqiaS6Qg4py1sGgwv55g1Jq8D83Kqm64SDNyQk5vLA98cD",
  "key3": "2DFRUpNyqWfegD8N9YnLqu994Z7X6XspJL3VBa42zd1BW33uJhemfdK7Nzme8kkXfA8cvGtHLNiT7PiwAGy4yBj",
  "key4": "3M4UQy2b9LLuD5QiPA56hCDexNHk39KrwmgEGpGEKod4TQqYdECZTgoJkqBRDz99QuQsnq7yT3jBg2pThnCLHUAx",
  "key5": "4ohvUNs6LPYG84ivjAtszotuEG4m1qsRqABiTpV2AaPuWwdkNGQPzd3bzF46iQoUqkSQeaH468hiMGpRJisZNSBz",
  "key6": "5R9BRCCPYNWvSZeaNJULiw87eZEC8u6Go2K8Rw6GZC99sapT7FGVeVLGSJpAmYBQo3sPvTd3zJmYGEAfh3oJf471",
  "key7": "5gpghDnYQi4kcfTr7RCqtCHmcHkXJJbnpiK6rNSg21oQKWj7ZzVq86QHVDnCLVWZZHzJUYaNooJ9mDrsdvAyXTo6",
  "key8": "53GSBAQDRc2V92BQWwD7xBSbLneyXTUi31a57AFb4gqPXQUZK32j1EqqfTLs9kAcvhgvuc34is8FJMN5gUhiyMrd",
  "key9": "5EXxfVcktCyyBHZ5A2vC5UtM2EZ7CTcbHgQoumh6vUFNKm9nrrmb9DYd8Tapy3pyACRUPUpuPZSdGxNy1z5okFuT",
  "key10": "4dwmLgB1uW54AfttdY3YKMvY5xtGKQmVNs82qaHZfmBP44LP2gkh2uPR8HpUXAVejMbmpnVsiwiD91omKdULKmpi",
  "key11": "vVSURkLj5733W13kYfFmVjK2BEUtrypQxjxMjhdGcfLpYSUoDpQQZQWEyQQGys5XEce7yuwkQB73sBL2GSrudRQ",
  "key12": "4soZT4qYQQ68QRs18RdbDkAZHsuMWWoufdRFNPvMh2LMyS8bsZVNAHAP14UdzeK35PUnyJHQyGKNxkaAZqfRwyPE",
  "key13": "4h44yzRdmHaFZKCQpSufZSeyuXRLDTLJNAi1coEosGavzxuBCkEKPfot7mXoq4dwnRGzFHzpBkHgJx2TAswS7hg9",
  "key14": "3eBcC3GXXK12RCep9SAW2g13GfzUkDicjYn38HReCLfqjsBrRqr37gcxhR2AAn1rcb9QsiYLCm3P8AZpTof3DyHG",
  "key15": "pwXGRsG2zDW9berMU6jw1bPYYcgxvpeQNMquxvaEF2McwVS9gT1cTumzkyavnvP9yGn4QsSghHqW4uoMWVxLuLN",
  "key16": "28q1zPS6JmgAXARW9uQCwHbsDhRjFSGYae4SqKjgoTJYQF3dM7AehcHsVkC7aHvdFkXWViDbQsZL4gYcSeTuaT1y",
  "key17": "2bnds73KAxH1Eo5gjBVqmEbtTYfdJ6mVxxrgPGVSZwULH3oPDrfrPXy2EkHS8kFkxM63RoV8n3JMFeGnSHdqdgQP",
  "key18": "4gZgrd1vPLnsJyATQxNE9nqrWbuXRmJeqSK4nDt5PJTM8ZcKjttmkxvCCygGYAoppFs2ZSByAF874FmUHHhBdKrw",
  "key19": "2LyehTNwEUr76ExBCCWZRuKYuqoWnADFkFggzm4MEGA8mjrCNbFpSdFHmaJXtLMudJL4YoBoYX29QX8g3tX5C1sp",
  "key20": "37SAtRNwQ2SW3gfn7UvPZWNNg59S6UVdZRMN7Mx3bL1aqW7xNWWKpdoGxWa8yFk5mSziYccJMvKBKPMgrxsNGCXS",
  "key21": "2T1fdwvkTPpbCZE1ssXbBRLHJXkZPeeZrQBiU7wvaR4MPh18VXxAusR2h8op27PY1ZkChrxhP5FA5urNAVFSrNL6",
  "key22": "KngaiwT6YvtawRBUbCRTbpvJbbrocaZHiG4ov6HAk2ujcAK17mei7v26AYqRmrLK4XuvpDfCx6ys3b4zTRvaBgu",
  "key23": "2hJuayuh773uGhcNer8XHnAvak5YeAUmYp14maXdRVMuRmhskSuATqL1MBmiygMFBU7xxgNWdxv7Vu1NQNoLsuWD",
  "key24": "48jX7A4Tym4RT2ixzvjd3JjAa4wTjHZg3YVwve2QVUV2VhSzPgZo5GXchbynPBNmjDuUMNrxAerUtJbfd9hjsvN2",
  "key25": "4Aw88RmiLgP9KsJqgzyzSbjNttVdt4EwibGGgpuL3VK2ScYoYipqQYob4pzfv8zr8TSXRcwCSiEJ1Bu3yzMVGXWC",
  "key26": "yDM86ycoevtCSoHfdRXjXRJXs8CKSBQUrF9MuUS5LPD837ZQkHhPAmMTVyJs7FT3N8644caVT1U4NVgTfcz6abp",
  "key27": "PVZVHL5mEL74xF67KEo5oNve41P2A4nYjiUaMsY5P1sWdHZm8sbgiAwJH9wYTNVWs2HeR1YQXN8LfLADvf6Y9uw",
  "key28": "5rzWVZc3egmBpJLR7N1kPRwCSZctNn1vfbY8Nv9NyZfAKwcuxLr19rP726aECGUM6hTUJca7W8CdF9gUdU5yEuuk",
  "key29": "hft8XQyCxBRRAdbDcea2G52Dk5dhNt4cR2E7epsqhWJfFKiDbZjiMrFRLdi3766nPqmdQrswVsE2NZYnXaQ8QU4",
  "key30": "4EejyhWM2g3amZNDLFBQSXhGvu1VzZAeRUyW3TUVjMBukZVqMhvPPa2FTPE3g9PWmqcotJzCVLxXmeVyWD7Fpunu",
  "key31": "3eWc2pBanjL1UQWc67fwkZQCx9yvhKt1YnqEvs4LYnF1feGpFbswKWhKrjkdm5dk911pVxERYuF2og4AGvW8FnMr",
  "key32": "wGcNGpARpxYH4AKYS6456mxcshG9UHzgvz385fbvKhYLXFT3AGpYBiy6CYughKcbGTLRPAaLDqb71cWrAHpBJnu",
  "key33": "3xQJLUpCz8KxJ585Gg9vaBy5P7kSTBibbMrQa8TgLayYyvQdhnwjHV7dnmxe9aftRuU5X4cxHNUKgYd3ieTnJdaw",
  "key34": "598TT5WiZfZgzvEFN5AvKsKtpThNuNKAQcW1AVMxS6nJXYgiBzC8RoPtecvfSqLda4K2FusTWvtFTkZHPqejWkWB",
  "key35": "5Qgjvf4B9G3KTaUDsAK47icEyKWb2EWtT2CaX7JsGeots3xjrCFM35w15qV5NXpGEmvwahrGXcwcg1jvCM9QTSzP",
  "key36": "233ZDJNXYmpg79rtHTSzg7yaLqLfinrJwKZHrcWPr2LmQf3BXvF8ZbdkqX8aAWaLpkJLGuTPT3XqwEZZ9UhpzvtU",
  "key37": "ULNqh53yxmVtitXH9cGm2GbnvQDFTmudDMM6JY2ZwPZ4EZpK2NvyYsSeQpxAu2XURZyRFJJmiUPtM2ri8nq5geW",
  "key38": "3CmQsp6pn8egsVWRnuA3Kjhdf2zxxskyGHKAvrZPNPJZgJAZg8cBNEaBLyEsXiKGgCHh9Cu5HfPN6FmuEp9fXPvZ",
  "key39": "yWLZWrfDrs5yyVwjHAdjkFLK34g7bH3EdGiFKFWzVScS4ZNxKviVYenLxade75BsqvGni1va6Zr13Dw2RNVP4uY",
  "key40": "5SBcD4zdVgd11NXNhhKZfpS4T3EiypbwSpReAJbt4BW4BFK4EvGDzzMJWjpbhtAH3D3xJTcpaaRwonjQikiAaLTD",
  "key41": "ssYky7wZVQXoLcW2KLBuC5bCmPfG8sY4PQojvv92zYFEwYkDXHyNz4EF8YdAfQPUukXykRFfUeUWMV9DboeFdu1"
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

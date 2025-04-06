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
    "26iUkqAiMvfnvKi7gsmxCdNYcvpSv8qyB8c6KeiiFANaxGHZbSiaQY5CWcER9jmfNeNhpRGSMCy3dgoKRbtYBBDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u4SS2NUfvwQsRjNABjjZ8fgYSU293tNdPBTSZHJXuLDkDoFTExeMbcUh8FeRm54qaYzMnHBM9NwQvzvZYfQLRgY",
  "key1": "u8aqJEQutKwNxt5eDnEkmz1hjVjcc2fbkzxDixD5paUXHgAVpHn2HEC6QW65BdzAgzTng7FcSoFr5yUZqaUW1Pz",
  "key2": "RMYErJmLMcwhnbT8v83hUSvsuJY8g9rFdTn3AJXEdjQPDn99fmNWcV6JxotmjkKLE3Wb1q6JabgQvE86Szv79AH",
  "key3": "678MHgau4MCV2iCjzcceTnYTpuY9L53JsqiDzTjEcD2JZLPbT7NBa7FfgG7YRaisQpLj6E1RtpmGzS2oaFx4F2Rj",
  "key4": "8BettvDp1n5JCB8CuZmjP1htf6Aa2uiqC76qLx3D88J1BtAgiG4gaXnnsJomAmsaVAJoCY3rK8pZJ8gpKmp2Hue",
  "key5": "5axFWueFfC6CB5ScnEZe3MBZ5eVMPbRgjh1khK9j5V6Yf1rA2numPRW74JsHvcwVzJo4H1vsu6ShfxipyexfHPj8",
  "key6": "4nJZRujGfd7oEieo8LXFVyX5iYSVbKfdB3ud7xMn64wt9Z3tf2hfrrKkw9kBFeb6NXgZ4phry5YeXnzAmf6BY8cG",
  "key7": "3R7dNpRLcRaChXc9w9RJFmsJct2foSgm8v8DVj89EAL53M5Lrs2kupeRNmeKxuUvCSbNyxgHdvBkrEkRGjVVzCDY",
  "key8": "29gL3a2e4wqpmwC9pRRSWiX7K5zssQH6i2RwdLpsyoFYGpXgTHXNCJcizTrnRNki2S9tGmuNtBRTBjjXeXW2w3uy",
  "key9": "ewMU5TvN23JHYmixsVZBG2QPMJb7PxkS56SfnNgzmGHoAYTdmSYWbh6Hc4RJJLjBevSbYTTgxd89YevNWRMbEXj",
  "key10": "3uN2fcKUuuhU7qN4zE7SLKkGaNY8YqNEMsxFJGhZJoxKrGCDY6CHfkPYD13xCHX9ZssioetKvtoL2Xhxcu6ubN2d",
  "key11": "mDJscM3Tmh6ryjBxCLpYc9mkVFednsxB7KdHoDeEYpz5oAbxjP8UyfEX5MeRGXQvq1o6yf1bZReYVRLLuzjetTh",
  "key12": "3KQCqX7eT259i4nBiMpsVTewYLj845AD5V5dFLcbnSzPeH4h7tp9vsom8m1u6Z589VnCZYC6hpycnYnDX5jqGPgD",
  "key13": "4sm16RSTpQcXJdZrw28r3GgwgF1PnGCNACjyRdodPvuRsZmoaJwHQCe4ZzBsACx8zHwcQoyNqcLisMvHJXkT7ZFL",
  "key14": "58mY6t4ij2r1uJcepiFJuYMC97ad7i12YPwL6exrxfc6XuNz8sWqmgqK5YRsUam5b56upD359Jf4wsdrm2CN3ws3",
  "key15": "LrVa3cBFaMcroecTu7R1deMxMrJNeTsRr4vhzD1Te698efcuVW64VFhL5i2f5XYhNzjxKjftCtYQLJVmQidVFp3",
  "key16": "5ZMVehHU97qjuVjueceAxZZqby6Lx6Y7ZgmBXGfnoLRHPgvqtfQAgAj1ZepAnWcWrZhVwdijcY8QfoLvAspLgBZf",
  "key17": "5RYbjw987LsxBHR2Rx7aoCYzL1jQDVmDniTARHRBzcxcJ7zWcdqRrTySeVnd1uVNkURPt4cYrPCavh3UWdK1wn83",
  "key18": "4xQjCAKqCDUJL5Q3ay3h93yvhm5UUMdpzmbEaWnAG5XZLbqR5e1kRRsPUwU6tRu7eynvKXmQRUaFdniexXRJYTXo",
  "key19": "2acSEa1f1KbZh9b5gTRovBcJ9bBDGzt8CQKXPkHCC4v9wh6HVUzuhUEU4Q4SRqiZyMBMRdZcPfY1gh3hhRNiGq5c",
  "key20": "5mUaofWwvMRMUJcuh5PPsgB75GZVq2aeW436rr6qPrXrG8LRLbRoX6zdAtD5hShordpKP9PbC4Ymx2aKoMFvDrHo",
  "key21": "Rat9y9f1zFMRD6WMiFFkBUjNoFoLjYUCVPpvEpVDgDNJWkhVRnTUHtztsE5jyCunTAULiQnmybDt7nnLzsvJHPD",
  "key22": "5ADRothmS71qN3PoqfNiboBrKVXrwqC2sjmjuYTpRbyqFyGprXipd7zuPZPubfztsPVzU4vb3fZPJV8JuFvKwQYP",
  "key23": "54GsG56qYrMcSDShafKoXyb35ZTVcEFkgArw12TRoB12GU596V5tBNkGsWp3dHTkR8RGRCpmWpCYTR8iGM2aMAuQ",
  "key24": "67eJtK7ckvgjJxBDSGCQ3M9sbUoE1Q4TQABBcEFZqzqrmVGY49VwZiobT5NE8gdefXQf647DcZ4pvCBeYmCZLTY1",
  "key25": "44iMiREDa5WoxfUpWNtqxfY1FxmMDMZHk4w7Q2xhe5uY8qvBtYwmavunsLevMwHBXudz9RQaojnbjGzVAcBDsEki",
  "key26": "2bq7DW1fBPzgCn5Wvefp5dPVPDneXH8V4Vnm735Pq9U29QKfCXVvKDnvqewj6xTqBhJ6piv3cgKfZcywGFZ65axG",
  "key27": "5niA1Wk55e2J7hpHhq4vV3oCGWvKBhyVx6tmabWd77bD2aR8Y6RBojbN4xFQJxPjFo5zbD4NQKwGCAtg8a2SH4NK",
  "key28": "5cCkqBb9UKa4qZRoRAiQasTPxP9W2wsSqqVq1LJ7LgEvPUyg6dUQNpNrKFqK3Bieu6An35bjB24wGF7dYPDUtYrD",
  "key29": "3JqdggAXgYrVEErqmQ9TNLsmXSaT9259eKC4zypNwBE8RpBwXCXz4XD2PoLyJx6GdS1Q6U6QShpNqynHcCpoggdf",
  "key30": "5FUQ1FKjL6aggurtpr5suuqkYxF3ECE7WSnuJkidHDkt62uzkVfr5MeBE9wPbwSNjRf9MN9oYVPTFTZEZGFYVstr",
  "key31": "5j5FcRejjqbatGawhyXkkicoc8x57PkcE5ifXRLqLmxP1UKhyVP6TFk1V2Nj5Qv7mq5vJGtcnnhxJe4GrQ1pReA7",
  "key32": "4ZFeCZWTD28XpnLrsKXRf3PTAU4sD14E8SdmsY8BdLz7uMY7GYoskc3CEEGawSHa8hnkJnvGJmjWGo8Uuqg4us7x",
  "key33": "d4b9rEZ1Lsf7RV27M44hH7sb3mr3w6mwuGvK1RJAmtVxjtMMfC32TnfLqBFGeUqikKxoQzrLW4dCc24VVvQXj7V",
  "key34": "462DWVBQ9fpM7sws9F1nSkXyrWGom9XQ7Z66gMfo4Q5PqEsUMvHrrr1LBwzvApihsJmCdsTBimg8Zt7APXCmPxwp",
  "key35": "48MfMNLMmf9sYJhK9iKcnXmpJ32jspL7VsvypnQaoqSs5qR8n4kwrN9exoLM795gaavtAUybAwr9wScSCt7MprP7",
  "key36": "1enEm3d2BvtMqAYSBhezV7WoGSupAbT2dtKfXwxovzr1j1jqaVbGekfbNpvNKPo7gjeMCbsGBUSGgjZkLWaekQP",
  "key37": "5kET6ksYkt8krCx6y6Tja1jzfymY3Sw3CzevY7crN298yxswuP5ARtCoc3zPyuKUaFqLonKgWN38CZMYsWqPTKjC",
  "key38": "m5tXMypRri9h8496iKviRkH9iiSEbuL6c3gNq3baFMpTrwUMK7E1QZMrKWb2dJbdA6X65buqXyAWzVX9Dj6tJuU",
  "key39": "Ce7A7XofYFuhBvrduRWuZPKroHtHx8o4FPZvGoDZsfES6ZjmYZpqCntCtU2YEJimC6oey2ztdHPXczug4EKkV1a"
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

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
    "3nMbguNbs1Xei74J3YPQHTKr6z9aUNXdQk8jQbymukCBCjfRirw926PeeGJEjw2Lv3HFmAVMvmkAxp7Uj4x4ArAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vMyKxAB4xct26ZyGnH2z2im2s1YAokhTGyWk6Chs6HiCnp1TNQAd6uMyAmbnpAemX1kejAJCXb1YdCKtD8noAoc",
  "key1": "56EV49YjKqRFJGSiM9cFQPuw6hGFx4LZZMNmzDCG2ZbFVFZuqCALiREWCGyWeg6X9JTCAHmHAGVKMzvLWMh4RL9N",
  "key2": "3jQnr1suwtkg8nNjQRYjykBAncDDhXSsTTsM3hQJTG9M4XfgndiZRuGR6wuq63QHi3CLdrnN446dzQFpBJhufJU1",
  "key3": "5qjNzw8dnC4RJoQn9epBnH8yhv6G5fCMBVmbniX5x8bTyiKoWWEwESZanHp95eS9aiWjB8CnufGeLEhDs6SVaxwn",
  "key4": "ZzkTguR5PdY83mnSBPem5vJCuPsKH4jBJ1pqzQzxyVGvJCdL5NFMV5bdCEHqp6srTHnbvV1CphpjzUpusG4mA84",
  "key5": "xufQJ8xRq339oifcEnuM1j32wD37PFx3KX3uYTw3qv64mjMkZcz5cvsacg1MJ2E9c6N71GkbBVLjRCsDKTG7kGJ",
  "key6": "42RKWqAeYYBziDAaehRiRo6DBSUgZERERjJePfynrCohmD9Lqq8NWz8fGvzt9WVKzb2aL2nBEuvNxDLj36xhUDiP",
  "key7": "3ywdANqmckHqnDN3URW1DyfYP245R5yp2uxUPkyajcG1G7oJvsZQCPYjcJm768EWQQbNCw55DyzFnWA6WvSDokM5",
  "key8": "2WWhGiFiyAnvtipiDpkDAu8nSjWNSCw86TTgQGGpu7C5erddxZrA2ZudD1j5MSfrLvKXmQetGMUyLg99T6k57LRv",
  "key9": "2o12idhdYQ5QJTqZEMUEXeCbUuYAzHKoaaxqMqRwh1WRCXEswJp4uuEedN7KoeNwah8CHzsWtnbPFokWcEYn6Afh",
  "key10": "61UDonbAW1jrfgTD8gpsjqdYSUo2ruA7c8ENKABYobjdewurDaDjQznNJRtBVQxZmBd89RoNwYLRkyA5exL1Qb16",
  "key11": "27racPpXcoBF8xyXiaBpv4mDEnsPdLFwE6oWzkEZRNKQayARfgiK3VWVZpkt1L1r7WoJZ3heRNmRySHPYjgK32aF",
  "key12": "4z9ZR3xXzncKW5wN7MrsHuDsRcxrQk82wzkRqThFCN6dVWtqCiNRDB8fQLhoPFmYaJ39ieCWB6f8iMz4qZYpH96u",
  "key13": "3x17GkSvW1SnVJ63C99Y8g1V15QDystn1qKo6wJc9Ap5AL4pxtSb7dafPF7w7jmz6yX4YZS4S9B7Su1HFsSLTpyR",
  "key14": "Q7fRrjvCiWWCCEaXrxKh1BL1v4ek6HaGGbkUtZuLxnMV5nrLvpt97ufMHzCv8de8Z5FuKan1kGnrZF9HrfDqGpe",
  "key15": "5jqKYSqrNzhTaLbJR5Pe6mhcTGcZh8MZxyNeWPoJymBhzNaGHZ4KhgmnMw7iSDc2C6zXEnzWN1JqrPUFN5tLZHSt",
  "key16": "pJxWEju8rNhqsH5n1Jxe8xnv4r7a7hBgNrWhtqfWb23zxcN8W7nRCArhH7RfQJHFqAPGUPmsWK1NRfUU8ogmQHB",
  "key17": "wHMoeapZFbEZjvBMt6k87GWLmZ78WEZymb83bDHeJjpdKN97x8NNZd8niNwmxYbR6bUeZxFcm8C9TtaELBY5Lq2",
  "key18": "4JsgtfExPn7DdLdgbWMzVH7CEzbgW28DeQzaN39NSq1es1HGrBxZKEz9rH7V5ubqWqV6TrF9WDcaEpJctEzx3fYG",
  "key19": "47PeGTJuqhQaeReJubgKUkwfzrGFrJp7hjhmChzjLwFi6nur5qRFKgq9Uv4bJwMSz1GFUdzXWV6QpMammLkYRymi",
  "key20": "3jupzv1kogFU3sUgPhq8k711nReoBQW5y2UBvGL2TGPjM711na44Ddantg725hv3JZXhFkVyPfZvVt942LmKSBjV",
  "key21": "5fLrfHCeB9Tr67PmwrsgaMLZMwD3QcbwRuohSdvyvAKskusahBoEaZtyUTHfyk64enZw8GAAF1SKi3o5sup9nhvm",
  "key22": "8dtedrXcDMbV5tnXEb9ZQwGMXeaLMdQ7imcxhePmwYkMNMjSJEoiJargYanWi47cHpgmSZhfMxW5biFmY2atnfk",
  "key23": "6P6ycYsKdCtbQERFBKW6cbiuDHoQamdVpj78KnxMDNpYassvqGK21QQVzBfhiVgEkMzxe6cVjdjobwmGrTKmuxM",
  "key24": "7NxQFj6LNNqWGvpkyBRSBzKLauhWwdcqWALmy1WJmjahP9NALtABuiEuwgR2BxkNVNGAmxeazRD5GCK2pHp21XD",
  "key25": "37NmhCqCjvUNWKp1JJU4AtRigRwc3BjmQYLJJabsrLcZBxJaTebTYREAk6EXTkZk8ys8TLHiCMQMh4vH6VXX6p4f",
  "key26": "45PwCPWqK4sE9rfWgAYvpfTEst6p5ki8T5g2waU2TFXzCBMgAyHY48hSKBQSzcwDDtMj892FrRbfiykpRpAjnSgu",
  "key27": "azYuYXzD26Wf8MLD5qPAnkyvUHEHFS4YScdcMFYPnmxGSk7ovvoQ7v8fu5HoRw7opcB3QT7i6VGS8tZbsB9qjHe",
  "key28": "tne9YTQ51snxaaTxNrHiJRqirFBpzWna9PTJQPBxCxWQLAKzA2gZqqb8CCrhdfiZKwUgKwWsnK8HwqA7ss3dFT5",
  "key29": "2YFsz6AHZrsVRhX5h9QJVJscFfqtHy4tisvZLd9URikDtMm52teFS6KscFx6jLEy9Nh4zKP3MpoH9F5BU9iEc6Ve",
  "key30": "21DXf32Zq1dQcEF3TF42FKUBLxU6S5BGosUtzA985uwZAGCZG3ozcQHS3PH2eWD4hiqv7RPjjmZuq1r8MicDcYVX",
  "key31": "3co6jEu5YKiQe1YXQNDp7V45zbX35M1H9DRAhR3uWNcipb2nPTAMaV84uChXSiEWtVkKTr6vPQn155iLxth8rbJH",
  "key32": "5QDK78dgADh1rUHqncpGPQDXUQN6GMeMVPxe4BkhVpAKqPRUgAg7YeWFzepKvYjMkBjYfduGt9sbhwpY5jaCMCqy",
  "key33": "U3yknW1wn8tYNjcKRw3paE43yKhQfvEWD6ZztvDVsERN3PNBzKoaHSsEM4muohGvTprnZzESFZeWdKWCQfjxcTE",
  "key34": "2vgVYNVNStk7eYavER2Dvk5kk2KNxwNHtCUrH3agwA2wEL7a6MGhbbqqF13CQFxk7vh5SsxTKmSb9SbEj7w3R8J7",
  "key35": "5U8wZPrH4W8D1S5V2DfgPmPfGkWsK5iyXy8GvxMjZjGQQ5weJrL8Qm4dxrTokrUjWwMTGNZHfWBvbfvJYuVa27rB",
  "key36": "L4jdX5QxCESwxTHZiCYWtQVxnKr1f6hTyT3fZ3bFGUTKE3PnNVAXdsKKjnkGW2RCRMUpRGr4efeAje5ivTqURru",
  "key37": "5p7PCF1JrtStn5CcpSBNSwCC5Nng74bSUXCEdAbGqwPG46nP6bRf7rrnVxTRmdLJu19Zw922mPa1vNo3v4gcYiyV",
  "key38": "5kGG4hiAnJUwCnzdcfS7sMJ9y5Dpe3AyrfEvdwZJnDxTsL6QEoaYgSjCoTGXA4TJQM6eahxLpovmU3nJYuHiTbo3",
  "key39": "5sNcVPmVXRSnVaEbvzjbbfTD5bpeC6ugggJsq1hecsjqxKRQDphDc9S5ZN4DWuEH7Bx7iefYHDPd2C5CxM51EpnK",
  "key40": "4wYNsoaGsmXZDSMhQRxAiSGpJLLs5VFghJ9kAopuX99CnSfaUibMmjSR4hCmGJQdCMxVeGXDb9TLFayWsiV17scz",
  "key41": "QKB9QPwQcvBCQbmDhxECKubuN4a8SBDcaXDGkq5SBkoZqZdbQLJ2JK2wHR9zoFENHEDDqX6miKjNvJcATV1x6Uu",
  "key42": "3FGDLNz81vxRaJPJsCH1UTsi7rfy3LEERiKFV7Yy48e2Hf6TY7mvfBAu4QHqV7iPN1t4J4bsA4xFru3Gh3iiWj4a",
  "key43": "vL1TbhpNrhrky5sFkdBfvh99ySpQV9WA289kzETh1jKc1y9f7BkqZVpXpdGDm5cYRFktR9PFyqptEAhUVu2c82t"
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

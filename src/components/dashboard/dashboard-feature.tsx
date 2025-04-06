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
    "4XQxg4XyLg1u5E2i74sMUpBrYoWHXm7naXsVGUEjJk1i11ob5ei4je3T6G1tsyvUk6JfNScYsZ2zekfP24UEkqEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXA3TabZvBSU425XfGdWtJZfUfsRD3uKxzoPT8b4vnTfyt5HGMeM4xZxquNvQabKCEc4egfUtNknU3wK6iEPytY",
  "key1": "4BMHPUqCyFsepVfxEwTZvNSbGt5iauDjkNXuBVugMpeZAyKr5NHqmMmnEYxzwfB8MbJa15pphMK7RyJpqt7oWbX5",
  "key2": "5J1V7dzZkfuhXvpL6KHp2aq6sECUMVYndgmk76D7Wso25QqB1Bvg7d2r8LCGPRbEB5Lbt7FMz6P53Q2tZFY15BSk",
  "key3": "3icDhzzAGEYgTfykNP9fS6A3mjqymqD9NTjozpU8mVxQRc4Z8oCXVZcmhspv1oUn7AxuoErT4bqRjHGM2W937PUk",
  "key4": "66euPeSpGeXGrQVognoGEyvp7kQacuPpCgwZS15wuxcewGaC4NZwMz4vedQFFBJak7xA5LZuRgUDjQzL1cCGwVFW",
  "key5": "4sK7pCveGxCt8QVN5VgseqypaEJtgHvPpYpX25BDWGiFaJQ4oo8yvENEuFHJN8xv5TZH8NDKKWR2tMgtRTnUfEuE",
  "key6": "3Lq1oVQM5MYeyCx7E7WcPukWXhNDbbuGxpYXfhiaKKJ8FPeWQK5i5yza3G7hPywzwhc3HiX5FzC4vdSFj9tvJH8f",
  "key7": "5Z2Cmy2ok5Jxec7RnWTw3tp5k3dsWjnQVKjTErDbtA3GfcTJgahY3KPRBy21go7CJuGU6b3tHBCFtARharh6z6gb",
  "key8": "rY8NKPuQJJ2Ddi2JjWSARzJCBrVWvUjT1U6KCQCbbipg7nQ7Xqi7Be6zJugkasNxanqKoxTEtLPaVSYR5XBhxYV",
  "key9": "4xT4QTJ2qdVemro8wiREHxjrfqY48qNR8uNiwyG7NK5bSb4c9MSkNJeeY1KKavVGPVhQcT9ZDSQcrxPHVc1DN5qy",
  "key10": "48vFHRkzKmmuqNnbD8qsiie3XqV4zrmghdaVZpEkXXHUF1ASUvurXoSjSjQfQgjgiAGGCXurr4KbHddom7LAsDUL",
  "key11": "45ah41BqtbWDma47FijreUJtS6atj8c57naVn54eSawoPppvgtVyTTqg3eaRgH36PpwFJgK38cw41eXBoKw9P8m6",
  "key12": "3LcT7aCcYxtvXqyow1YfghY5WpNw2XLZyT4mXuGwJhZMfSWyJtBc1P797ub9UT5iqAwccyQV1CUPTmsyUJwB8aBu",
  "key13": "UbbqaXhy8k3HkCrG18bJVM7rD48Lzz1dHv2cH76JxqBvZkYC5QA2wGCfqQBVrCtx8MKusFCLezQomvCyRzCzSzu",
  "key14": "3CY4oeXZu2Zy7YEkBubgaZ3ZirFyuE2PMH7pd1GXGDYEdAg8z5NJRPXqpoPZRZrpom6jxrXMyLawZg5D1Vh3DUxQ",
  "key15": "2xg9UaVxsZm2DtaTr9KvSWVVUHkNZKiR9kit9bSL4yzxjZvnL4QPwwhRu8EebYwVP5QoLHJetaosjB75V63v5wk4",
  "key16": "61egxiu2xJHD9YqGPi9LGmZcnjwGegZapV8m3biqvxFxxHWXSgYNobsGU17nYYmzyPsdJC9V1PMteRTPtiKMj2ZH",
  "key17": "62B735gZQ6JSQKec55n99tdvMBE6gWCsa7oRzoT3pCXMm4T3zKbC2G2jUckz6uHG2rEfs4WHEHRsAS7aEGDqfYtg",
  "key18": "3ukbKwvCSSycG99pKWs4hBfAuEJYp9L7YpGDjMyQmjYFjwXHWMyCCG8Sj5cCnfV4GVeYnaJUAJab4WGNumygWUaJ",
  "key19": "4nziKscyrLbGmsoLJ6GUpWTtaK9sZTrQ5d2T5TQFphmWV8YoCrW1Q4KJEEtNnPFSDDrYgwEhMuucbXubUngD7Cpo",
  "key20": "2bFLQBFDZdUHjw6aqJwxzY9gMQVXXntHx4LaCzXRQ1d6ZWBcGuTsinbpKfx8XUt7HM8PqnJySDHK4E6VPbXf58AM",
  "key21": "43rqW3VJ3xqpSV4HGp2TtEAwqwnmu1zi3ZoqNpvb68YJHVdFsadEmVdvEpDX27HtB8W78EFLfdbyx6pHyG4W3RyJ",
  "key22": "9RRyw9MWwrAqFoZmxuJsPUjkuMRtBsRFa6szKtpdbXLT5KS77UcSickBVmrMoxmDFeQGZZLcGoPgCugm2PYJGkC",
  "key23": "4gpppJhmW9Fo5PUQRfrz8tWgRyZWJicAxrPtrjgQYMahGU8t8Am5Y5XpRgg9yZQjJPvubjHUBQQpvTpM7szs5iWR",
  "key24": "5oMwp9TXTZbGuvCCXpy1b8mKgEvH5yrHHJDujvizVHTaipLogQEg2u6aaA766ounv7VERuW61jSsDEt4TLxPyGQu",
  "key25": "2V5wogWsaUH7uqgnfbvHtx2iyaRF9abWLJXF8VfReS3tb6UK3QwEfovhXASa933LhaY4zGmtzKWK3rKhqzmvd5e",
  "key26": "4GRe1eeHyoHjPDZC9T1epsU16famanAWL4csKHdgEmPjzNfPZbtn7jWDprq35pLYM2BqqaZFTm1byb6mrisKhPEU",
  "key27": "649DkJwxN4ZfofSFhFfd5Z4JWbh2wmajoqE7LRYKvHKPyBmBL359Tdeyt2uRbn4kbpn1E5vprsbFmEUwSHRNQ8DS",
  "key28": "5hMZVqQZu4if9SCPTsNcQ43zQe3cpvQsrbc6p7NB9CGqbLkiymjyDwAg8GMuVZkoQtYTk11wdWMxrpxcJ5FENPwV",
  "key29": "3Gj4WvxEhxeULdojNkYUc5bx5gjUYe7YESKcufs4mceiAa6iNM9osNX2umzhpktV4qrbpEkz3faDyPuH6KcUscXp",
  "key30": "TvPPitBAZPLRBUkCEq6U7gtUF5zAhozB46un3tZpUXPbypzV3gnbj9FF3HESZPc2YoD32ZQ27NM6tjE7ixqY5Eq",
  "key31": "2krhdUjJxHLmornB2n5G798gwZ5ts6EL3CCxTKdV9jUTyHa4Hi7pqBp55ypnGf7bsduZMBV4V4scdzBHMwahwRxm",
  "key32": "4R7x5q7aoJTsn1eLjmgVFpoQL9Yp3WYtM85YnJfYRBECHtPARmwBjma2QdCmwY7SZkM7hK7ErMwxGfRstMjVyqXp",
  "key33": "qhwKvkbLVi4xCbNmjQYdLiUfkKPoamJbqyTtP5Z9DmMikWm71SJqfse7mqHrSf9hY6kSjfrmEmsVaopRrdKfrXC",
  "key34": "5sKspUjmwcye3CMDd4mQp7eMwmSzcaFf3iSieUDzUQG8Cgtb7JcymySNtV3ZFwZYkyKhmUtjDKMSj2fVgUwH2yxw",
  "key35": "431KLthHgo5DUECFj8cu3pRP2boVwr77APtsZYSCg9TP7o6ERTRaLFunixn5h7wgtzPxmTXarfwuLTi9yn8JowD8",
  "key36": "vB8o5amZwTgdzQXdEfnXLANU8duzuXX2HBUWNCWSJf4YiCH3gDeaASrGXWECHidsn65tfcHKfVZpF7buzabWiGf",
  "key37": "4fvgwpv4s9t5NfnXLxc6vzXMjP26roe3MFFLeDJZH2h3wcekf7ffSnnV11Nh7mAvFw8VZTU5qsR4bTMxy7yF7K8H",
  "key38": "3uvxqWXRpigURrFZ2bP46HHD8DxgDZw88L7QzZbi3fAn1nXB5PFq7TKLzeEPLZ1QGtgSEXtGUxAxVYu73mQXGiu2"
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

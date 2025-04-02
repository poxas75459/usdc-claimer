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
    "5CQvJydEfcqf6G7EZnshTGjkv14SX1nfxiKQtnx7BBBMr9ukqSZADFxPcjfjt3GPZxNtYZm8LD4NB7WsqZXtndJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJ4tBvYfijJ5v4A4xnMWFC61YmAQKt7ZTjQnLG59BcCZd7VE2DpQZv6Fv1rowybSEkVhYg6atcQhKzPkebj8jsc",
  "key1": "42uUsbZx1e98sWneAodSfsvyeFFLmnWvKPC1j6mRWfUgU6q93MiewL3XRF9DB4FEZ8qLzBfFkTWfRrnwzpmnXytF",
  "key2": "MVoebs6vKaZsBJYRf6SAEFV7zPTcVo9ygwuLp6Wm86G3kNQoGmyUzYmwST7Nd4aXYs3oztkTREhzaSQdBZfPNZb",
  "key3": "5NPDHYzUTQYZ5Z57959Re9pVWfQa2c3jF6JhVMokEEFmu2PqJoJa8ZPzYon2cSpTqStjLPXCgy67z5BrTLn5gY4",
  "key4": "KZ6ek2XFi5CsvC6xFcP9MbRmqK5UsSZ6jTqrp7eK1Q2Set4JywheYE66ReURj9q2FDTSTD2aLfQxdCXNiPiWP22",
  "key5": "2xBnv4AhHSzXUo9XqEqmzYwkrPAvwVHs7yMnhnCnMjh1bfUdeZR5gtCNJvfkKRyrne1dFtb9R4S4DRKUhttzEGU2",
  "key6": "5xoAYo7XYRbjupf6Sh9TKTfZbw4W43uxjLCeaSNAcUBhcGMxkGkhMeSMEurTgVpMtq9S6VHX2UgCGEnCxdLmzwE5",
  "key7": "2wKbhYcThqS6cyfaqfR9bxZfsLX1mGPoo6Ly7qJie6uCjJZE6b19Hqs5UG1nu3NEHmEH6DzpsKJR6cLT3Prcv7n8",
  "key8": "5raPq2V9TgAiNBFerpyvXFUWYKY9mH2yduDzq4iiTo89xHis7v8MV7k8QFBmtmAHAiGiYBSqd8wrw5HGb5Tu3HWL",
  "key9": "2BGTVkExw43Mp75QTcZaP4rYpJ72xpakD6YWnTMtkPDiNaBKj9L1uuPfoa2Dfj9ieyzg6dCB1vzFqagTrQ3kiMyn",
  "key10": "bpQB6ewTn9QJx9jBcATCA7ro4HHumRXeumrjvZ4ByndL9BeDF9SGYoXvKo5gmSLCJVReqCMsdGCdymo2UnV4KgS",
  "key11": "4A5Q8BvXeyZXtt1FZvvCap1Cd6LYP3TfGxNRGaEHZGhjuk1Hcp9igui9du65ToANgcwU6ZPaXXPVSfX5Yy2zQzPE",
  "key12": "5HVhmiL9m8x4GP6Sux2eiE72a5EtKYStYVGhBMFGfCJbbsi1Q3pgAbUyMoLqYmC2mzsYChUnHrvvuo8XvybPTrcy",
  "key13": "52KDsTBEBL9EdDdz4A53EuirwkWbuDR77LTSeQYr678tpMHJqRSuswLj8Z7nnpR6DQ5apc7owZgFfeUYTFiaDqET",
  "key14": "4f3FPFwFoFnXU7746HPJSkWzsRNe6oDHDfF4nLvegCGqBJrJp5SoszM3hKtoANsHnpPhUomz9vrfq2c7rg84yCv4",
  "key15": "5uncwwV9ADYPRYSozJ5uojy7zzmGrtAwWjH6h3HDEjDJCfbHwGXDeuUxHzcxj1vQKwQXJCXRCazmjBmiFK21ppPU",
  "key16": "5CyRuio1pYQbRCV3ah5wc3gLfsj3MJVzwnziAufbGydF3jzRFbzYDWQFvKSLaPGoDuYXtX1b5pnTrqszjkh3f3vC",
  "key17": "4xa1fLRBtsSGwzoWZzW6ijM2vGYXGS8wYF2KeNfRuVTnqFHp49HQAQwV7eUhZBP6hG6DDKupvHoaKpVxNgmouYpc",
  "key18": "3cmVKRJwhKhfusc9ciFAhX2JwdcLhfwvJmpQbRRi9tqdFj7d2DdVKaNPu8gmKha8aw9AY4kWGqattFLn9s2xnjeT",
  "key19": "3pcJYyVfjx22F9q7PZqpZw6uEGtndrAkADQRHnAuVk5SfLxPSAVu5YpYivJafNrrZRhuzJ3Jj78p9mQjuha2DMZd",
  "key20": "3xEw4cS8E7GKEYtysyMcamBLZgH9zHKQFP8MsEaekTM1MmbtzQDkpgHd4xmdRTn4QQhkCJpcs6RSro2MRffwfrWD",
  "key21": "2ocmT8Pd3it8Qd5Qi1m5bmctGwS6TraWtXuRQv9mqVsX8HaKxeyMCX6R7DqnTD99nP3h33FjyJRmXz5XetMsoDL",
  "key22": "2JpEAADXQ5dRBJyndz1oktgoX3Hojf23pe6FCmtALhd7xqd1xwTS8R3dU3Nys48zVK6jQm2EvxZ2uCVFbbV1eGxr",
  "key23": "5LvLUKvyQ5d1PAVF1jLnWtYCeAh3zdvwix8VG7v9MdCYcMkv1A4nf8fr6Y3uKqmVkaL3JmK8B3Tst38GGrLpsUv2",
  "key24": "2xid7XXRJPi531eCBVRW42FcGXuWfx7hM1MMHr4LGSMEsGSwKcdXiHrBPJXBYJrzBEGncg3oqhDYAvpFaNyW84MH",
  "key25": "ZaJgRQsTHwHGh2APw9n1Mz4eLcqNsBj6DrJZjp149uzZjbyKshTZfjNCmuCpKPY7x6MRZxUZrwBQCMJucWZLE4S",
  "key26": "4TQ4UgqxDmBGoNfzjfdpFqpjzyxNnpgG2RdPou72s8tgdPsqMyLekfXwzHL8nbq16bmjKy6MTHetxRjCQKyW9e5o",
  "key27": "5GS9oeXTDEHah3LkvCqqK95CUm9tqUrxAHV8siws84xGAyr6RHvtSJaFwpwCvboHyqCE9EtBPss7AEJ8KaFKkTNU",
  "key28": "31HmsmdReng7AXnKt6WtyKXwthSxRWPdvas5wGqW4NwiGcwE5nunKMYhQgnWftdyjReYJqvhkZXd8cMxyjJNg8sW",
  "key29": "Z5FEnPPW8DNRXVxi25dmrUDhTXJgzdxQVyraSz8yAieeVFjZynFNmwCGee1edye4UTfnF2sLp2NM6gBPF7qvPBi",
  "key30": "67PrCgtNm6dwqvXgV3cV1stZVChEEp5uQPp3QqiB3P7nosW8ebJTvVzaPwk2qWqMYxAKpGZMk9Jp3uEYHyMtFX8W",
  "key31": "5P6YYGy5kZpiHiY942pYaEDRRFoqDhfoeHtVzXJgAmL5NTK1BzFaCYmHvZRkVfVrqFMjZbVEETAPdzDvV2eFTJDJ",
  "key32": "4jrFSbxZ8RzVNhhHZ82PdwvVF9VddXVwx4vVKcjLxbDew2PLS4i4sWr8h6VhtLRTAZFi7yheitD5KMGMi9bNL15v",
  "key33": "5tyyG2BYGGa2Zo1AYT1DRYrQwmudt723ELgg7G97nXErjTpfCEBDZJe49DCWH16vUKwgiQrRnHfJGEPZWYMvGATn",
  "key34": "5kk1rYMopmEcwnRekgQvMGb1wBytfa9ocvY5bnze9UCcw9GpKMfAo8usQWh3me56S5g3c8HzoZhrfKh8bYK4X4NJ",
  "key35": "5uYb7ohxb5prkykBHDrqN3vKhn2ohWG9pvMVyCbRkacEgyb421fM64FHXwERUxGuPpMVmTanzkffpHWQoLJ8cm5P",
  "key36": "2bHjQcvgTAMgqxo7TAjdG1jSdrjjMbF9ZEScmw43HsAfR7X4n8gFQrEKYySYRRkQpd5Uw71E79ZtNF17keXSWDbB",
  "key37": "2oDYVEzUxcGXy36dn6GQXKWWjuESasGKUhcY9Tr3f9XB3d9ivdaLZhzqkkDCMpV79GfoiarnTZy9qkU6ppBtGyBJ",
  "key38": "MPuBgsZnGAMqJTKe4USg5Ue1oBMmvUEAK9W6GEG7cUWtgwicXYBFbDm6qMxD7ZwYKd3jZpf1V9NPM4VfYedChqX",
  "key39": "4SVuHfKvhY6titPDJczEm6og3sVnXdvoHHXziRQ1m97aPsnk3RKFLignsVdQr8GVtTyFo118j8UKuiWoGf6grHyf",
  "key40": "sFF6PCxtQJZkTf1W8p6qdmQmL58wpq5gKeZSz9WcNukPnrQZZA6BZ3MKwWvpcSHVSS57C21PzfoGREbQrMvt1eX",
  "key41": "jJc4yFkCuVtYQ7nVnJoDLAepyVBhLereAxCHrMy7wimQU4q1xE4k5a3z9vrCyLLPmCfNN3XaZTTH2ZqyBFiXjFG",
  "key42": "5Etn4Y8BdnDy4TBriTJxR7ziJtdfu1oECWc9hcWTX9QSfXPkwyfCJgNKNcb86JuFSVa3fd5HHwFwM8PuVpuFKLjc",
  "key43": "LeYcABCgwkWpWyqMskaQXq3TBpCi5QWfn3USFBF6nt4bFwe4eUwDjf5S5Lnw3q2SWjHB2U1xfMFvZE4dfLzmwUM",
  "key44": "5tLpHin64J2KEjDfV26Uhww2TqVNqf6rqi6b7BnEH6h6cs2RoKij9TTYuYK3CSrcQ5VTeU5cgvdL887o7WPZJVN2",
  "key45": "4FpxKNQGqtYo72mz7gVpZerKz9rNjBpAybTULnCkSH9u21FcmeWFpHCz4PSndePrVAWJ5TnXHL2af2KKHKmB7DcC",
  "key46": "AbLQMNT2Sq1A3b6KrziJ85HaUHfkkpnMokjpGcG4g91Yrjzeqj8ywjgq2YX8viP4oT9pSkqj2iGRAfnxiPF4cBU"
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

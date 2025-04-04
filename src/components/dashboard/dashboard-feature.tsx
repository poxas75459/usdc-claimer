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
    "3cVCy3eK7Jzyj2hWTtBoSeigFFjH6yqKFyhFAFspmxGRYcicJz2VQHGyc155wMZttDCwKN2VyayyJLw1mz2xVwjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDPUYNPzuYhNsGxWyva48Wqb4E2FATvDX9LMu2ZX2v4dBu3zhi672LE8VPgy3umeo3zLLR1fteAJGy7CLhz9yah",
  "key1": "yLUGK3Xtz6f1kXUSccDuK9Y1piiX9MaQvqG8LNPTjJQvrGizr45Zstn547wQ85WQsrvqoi9kCsraFjD5AGJZeDx",
  "key2": "4D1JXWmLPXZsV9GCKxw8Q8SuXQ35jupcH5kkE6Hh8gHTBcE4cJFtDt2GsjyhpzzTyQCiM6tEHEHc6ff9XTd4w9Nz",
  "key3": "2wrYC8Xdhe8WoXTWgQU32AYGihfZicuLFQB2qd5nFF4EnNjimDpbTQdPQFhCmxjSbLo3mV51i2BfJYAxPea1MVTT",
  "key4": "4nghcefDvBohSKRjDdwS2gmBNz4waFX1MKFVdfeHHjoF2ec1LUzUvZJHZyFLdkDDwzybBZ8wiwh6Cqa7Gt5AQSnc",
  "key5": "3jKB8SZQQwePYFkN1vJGCnpnqo2KCjxFy32y17wQVDQGYg8k1QMPAUNEcAj6fiyTsEXA2QheA34FsQCZXy4cSWEZ",
  "key6": "5Me12S5rg7fJ7db4muiyhZGDfPTTSXVZuiCxN5yVDUFi4UFjyqZ8YwYhRuVP5YgLtrnNMwxRmRRAPbYR2FfKp7SV",
  "key7": "94R3wvSuc7WaYTWPjBR8DFMQK6ZEeZZjr3atAjBrsPjGTEvqCH3c5UjyL8KrL7VmAdKGQwbYRQ6zJrskt7hqt78",
  "key8": "2BkiuojgK4HAJjdkaRxUzrhwV9a84TbVhz5S4V1RoZEim6EroXjLj8NtUvSh2h4y73NuL51A6aySKo7Ywp1dmc3p",
  "key9": "3gJR7Rean9BJZ4nEjJEeGYcihH3tMtZWaEPGSWU4YN3HRaVVq3TQ81uGUBCk63uQCEx7KN45VEAEhgJz2QyXk1ji",
  "key10": "3euchYKHtrYSS8j1NtcHZzWGhiXYqVNnB1Tkwcz5Lic1A2ocQyBP1xcRCsNNZCA9MUk6r6nsiN5zGLxNRAwjNdqf",
  "key11": "2wrpzcScR1pnc7ZT5qvVLTHj5jgjEfreNAFcitZwweMQmKcGRzCdqkVuHMKm2v4BH2deEMMpcUCrbp2sL7mLtuR5",
  "key12": "5mXnSK3QvTkGkydajeJZG59t1TwxicjV4J893pcLLxfFGcv5m9XrxpgKtBvV1VQh8GXvgLsgXwuuKccWS5k5JQqA",
  "key13": "2xMg7BDAuu8B24EM2e1pHfnKFtCoiQoCarofU6rFXfaFCjrZ7duyuUGhkW32a9aGcqjp8RFogvGqD8fT1oyUUh8Q",
  "key14": "5e1WkXy925729dh5QYC11G9RVE1X8BFE1eAQ9YUUp1Z91zxJUaK6Pbf1p12AXQK7tVF8DWqbt8fMS6bqSe4i4svN",
  "key15": "461wst5kjWzYfyoWk5LyH2NuEGABMw7MpKr6PiUcdeDiiKbCAM8t6t6gFMzw7decjUWbcGjHpVGokJparQu97Q83",
  "key16": "2coMvtkjmkq5TpHVjCxJhLpmXw9gnh2MbALccYmxCeM8RhCuH8Qi59M78jTqANWpCf2U9ZJnVCDu96zo2KDssEr6",
  "key17": "4Zgs6BsuprT2JtboQyqpTD4idkBmwiQTiGfxipe3B9zywNDeJikmaxgj6bE4PwuUQcd4KbKKzYfDGSLa3qUWNiA1",
  "key18": "3TRw289R4N2z5o29HFVGRPRX8Cmy8naRCsVMdAMvsazigRQiBycUKsGv7YXdMY2MfoHTnLaurwvWR1j3u9VGFaFM",
  "key19": "534b9CfHkjaZcHQEZyTx2AmRZjaYhv7iM7wS6yo3Ua3s9XMsAtXyL3h1RHf4uhamCP8t1zTZWCtMJSFP2A77WfY6",
  "key20": "4YwaJL3uH18dfGk5SRAMEWXFi334szDa3sA8acsLqpb5uLn6hstDs9xh82Lg9dV3hyaGcUUoJfCrTVAvGupLP8NT",
  "key21": "xghK3FfcVry7waR3PR2kWdrCbanSyM91saUaebuvLuEtyDuV5hhiS3BaHj1rQYiMa7UKQKkaoi3vHRyoWgghpty",
  "key22": "2sY8pAZRLCceqH7AvDWas6JWYYTvpkVDReWSkbFtLFw7b6vmPk56J5J2Yb8VApxxChDhDdz6EyBVAq12PdmR48BX",
  "key23": "41gqKVJG7QKgrhMLHuu9noUtQifxHCen6ubnD1Ex6M8Yk5E3fyP4MnSFst7wYbnictCMRGfsJb76pWZVJ2LrGqxX",
  "key24": "2wZ1jynkPdVW5MzTpBukXqdqc3NELsJM36u5F7rDDyGUQJhz8VGaxTMHdtrdSfyi1fnwDHnYuw8AuUNdtW5NzdEE",
  "key25": "BeMFgd3oPvGm2rRLtU7iqPv1RrJ9tTXMYvAfyQDfzTb55JJk8vzAK4KpnyX1zYzYE3VvueSQyp52x5RUy3tFqiT",
  "key26": "2SFP8tjfN33n3pJJv5y8MJ2knKG5GgmJz1AX1crfdwb6UqVQg5vZYuWGHYwvvakvewdeUZhxsXGmXexJhsRUnwNL",
  "key27": "27FYQheH4M4tZHZAtRwD5TyvrApoZSR8hr7hT2ogfGW4xCsaYhC4wjZ37aEpoLwTpJuBj7paZBCQbxZTbJRGf8t5",
  "key28": "5S3nrxgpKLo5QSM88vgotRXGDkT4uBWQcXFUgDjQcfpHQHErk77sQFfLvr6rS4gLkAjsEwHQcnmVxhs4ioHKRhED",
  "key29": "342cgEe2qWfiz73qtqv3LbEvNkjW4MiELmdhyouwpgnMYHC3AG9859tfCPK2oTDYUbESmBeSiVFTmSDrf7GfjV2w",
  "key30": "29jWpS1LtPfgYVeQAeGHSTbcNA1Ww9pz1EPHWG4VDN8L7xQwbzq9spsrGcYgWUY46p1MDeMPGfgcZiEVUG7NEz6y",
  "key31": "2fr273xN1jF5sKVHAYLCfcgFtDh2aXrx2ZxGVAYeoayzBwJnokYXKkqvub36yfFSZTDrTMjUcKDyhVHp3QEijibm",
  "key32": "3qc2jC4f8kiiA6D8rXgXKSxG7iReGv2r8d6ZKv6EqHG8ggY4LLgdCvfBgtSTtX1g3aD68wxEXgat6wwEdFZnRhxs",
  "key33": "k6nm9c5z8ySDvJwuDXAeMYDEKWxHerd1kWRDm7geEaSghNTpkRmstrN79JD7RgTSX5gPGzF77qcbuFoUNVkd9Bi",
  "key34": "4ZDXS1MDodsQng3G182SoRojyGhEsBp3t4tto2kTFrAmhFzCnswzZ4AVrFBGmmiAaN9HR29EYPNAGZC6mfaFweK8",
  "key35": "cdhnPpgEmFtvNGAfHcvcVKyXbqrF54T2NiJCTpbEjqjtaYLc8uaF2bG1hfJArhFiBezjM7JT3683gLDzs35LBnr",
  "key36": "4rmKmY9k9eBjQctURU2Ks9vWuWzWTeMZ3ysWPPsUmyETk2HKyY7fRnfeo8gtijt41gNsNXEnDeqa62D3MUhUirZ1",
  "key37": "hhG2HyKuS2Ktsb9VeApkUifJKhzmVhe7pw9VLeRsd72tSRbJQNzzKofMPCzGpJ9vEiU8Svpp2GWJLcAF3NwLcdr",
  "key38": "2fTQVorrcdtEazb4QpK6Woyk8HooCB6MCL1QDGryqen3L6PcGjwNJz864SbwQLhSXqYc2goNc1B9Uh8k1Wfkja8j",
  "key39": "3ZiPV415B5vtGytboQMWN1vZL1hP9yvaFhNdoJ7cqGMeejtwQVAh4u6XC9viMHyJLpDursEbXg4c9xTP7aAtGpWU",
  "key40": "5iLxmwGyXRKrfo8mf66bKs9YgE59m8bJ3dSreMzRENH6Jzxxn8appELuHokpajxGLk3pLztKHv8pTDmZSQzfqyCH",
  "key41": "38ALngUXCbRfu1xtptiGeWibwEFAm4yDwQNRBY1MVw9rLZZXvkmUkhosLr3KiiYs5c8GuwX3k5cmcK6TAYmZbjZA",
  "key42": "3BWBCzXdwtov1YbqzQZRs9LnJ9D7nz5hyCarY25h3uRavYUSYkWtgJZGtqpod3fqZM3RHGqFuAMA5pbBL3DhKBd9",
  "key43": "3UfVxM8yPsA65VcDZD94cf6WH6w26w6oTa2PZzk6PWPBuRqCVqqzjY5y9DWu86xQoTam74nfpRVsmjvNFUyk8PyP",
  "key44": "633nGkSaMRYhySXPRAEiw47iY8T1FXVthcsWEZHSf5weoK8z6rU2Yq8TiZmXqPKNqq1FkJrfKhnZYXeLMip117QZ",
  "key45": "9H22epcmztJj7SUJGUgAkJADs2gNXb4sRxSzk3BDyGv5ZWFAC58z6Ti4FjANSC7STxDt88ux1eFtKHFVf3k2rjo"
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

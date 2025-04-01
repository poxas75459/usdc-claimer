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
    "2bCF7zbxQhw2HvE7X1YJqHGygPYaWpgdDPgTazWT2AEpxRm8jfRWdFsNN5NidEj1cStWJPMvaGHGUBMUGMwMkAwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NH6USz4iCCMEwtqEisGayf2ptnfjH6onEoDgvb98AL2iWxLyJCo7YEQBDnktZmLFK6rDYKuKWaaYf7yiHquZ1G1",
  "key1": "4howjDgdj9Uvm37GUVhYM8i6STBAqT9jWJVWVHAaeokSiZwWUmzUj9CWWCCHDWquw6dz6rWKQidqmv6sBgGHAvzw",
  "key2": "2SdsyBkXcFXqgkMZB2LWXZ6Vv5PScSyMNbJFrGAZ5f4SRFpmuqkVqnbWM5qXQTpUfPpyum1QHR6Zc72ZS3Ddnx5B",
  "key3": "5Ux22P1jBrEtjq8s9LTR7sAesTJB6jnMc4Fi6Ksbe2whs5bYXi1ngFQeSxbSjECPL2TmLFN4wd3bNwotEnRycaub",
  "key4": "3V4AxyDvZwk6ucVLD3tf4LQnr2DkMD6VUChyqsBYHSPvBEfrvACasCBXLqshQqFvw76guEJqptUJhKN4Yi4rZLgu",
  "key5": "btqj5Gq7LGaBrR25cBssQofKw1KAq7JZVviY4rWgz6rpM6hYgPJwpQq98T2EtTCFr2PQPqTfjSwGHePM5oeYYjd",
  "key6": "2WqhRC6272GMDLcYFwYDR4LgHEKBXQAQ2U9GKYaLkoVdHgDgL4frPcQeyHmwbZphAoSrBhz68JGphfztGGF2Dvpp",
  "key7": "5SPDiKGWHaFLHQWFegy1e319f5VFktVKCnSZM9w7SX1oLXmhGAeZwzREaagXZ87oHB5q6DEvUgMqKipzPWR5ADSq",
  "key8": "21G9dUKLKBGYWHGc5RAM4uVRT9s12FwFonxuCw44rPcnk7EzC1iiANhZ5ko5GGsBE7bMtF8GZmjkMsqXUDEtoBcF",
  "key9": "n94TT7R6wSfXPvMYUfhPCY2cWuWQ24GUf2h6oeURY2szGAZtkhhRvTJstvmRTP97nuV38fbMWCzLf7zPYdRYk36",
  "key10": "4FUpZLBFNEUdY9PubiS1eKdpf4hmC1Wi4ufPuDVeEfMosvG4S9bvmRhxjFBdMBiSeA1G9deaXYZ2BRQFhmMKFJHK",
  "key11": "48MGRqhyKxiD1rjqPuxL2M7o6CaFzpGAuPmJpYwf5ZefGvF2h21nFXkSVqP6SorfFtwrFWexE3KSxWCR7VqunDz7",
  "key12": "2ctufZyPjWUFmJn16kfNxbDidQQ1Mw5Kr4sGarVKGEsfhdPcUNZwCBFxQ3TBshsyiE3mb5DQpWCoVbHZugXXZjKn",
  "key13": "3UMGQQSLEHnBjLaVzxTiFrncWK6qNHhcYF5QE68YRowN3XNujHeoV8jqKoiPuzx3UQCPHEUafLS9dt8H1wX6bSLT",
  "key14": "5QS4MrksYoHXSF1V1GjhA9EJ6bQGpsNgZwS7xdqYv5cTeaQC5j7YHPTukKraPLmv28bJ92dZN2936Ry9UwMWihdy",
  "key15": "4nP28WJ4q3BaQFP8wgBJQ6RqMWc6g49xkbYx5kHLhGqSUSgxwzEsSFeY652FYkYWYDDnC74wHQnVGimd2hbd4H5c",
  "key16": "5jPoy5kzhs41WUk5DzixeLyAaWfqA2tqik71vPBJLFTL7vG51bpPC2RrajRiRD514e4UhuHSwMoxYxNP66rkFVTL",
  "key17": "5AmuJt5V2e8417KxLH7cHnbtzF1Lc7wrD7BNzfjebPShWwVMdN67VhXn35iNiWqePow5JhFNcMRhy728GBwAHVJ2",
  "key18": "Cs18cUpHivUDsUgzbVqmLXkdueV2dau92LkQDjyy74biBviV8mpQ2wTvT9bqAJBzJP3REb4CMZbruJ6MAU1cDrg",
  "key19": "3GpTVgmj2URXb1LxKt8yNL6iuYMqkD26mGFt6QpLdUJPF4WaSYBEZufrYsvqaJTzQBDPe5N67M7KtaP4eFgEWvbU",
  "key20": "5Zh7hqSYHnQDNTa45jJDzv4jCmMavSLvGkrPRxb9L1ciAt7Cgw4BeWvYNx9Xr4edbqASv1dEqxUTasaRbSmag2j6",
  "key21": "3pTs6FUzXrnRWPtvy2YKYC5M6Lohzf26wVxBRJ9YZCUT3dQsmdyJ5ztqXSwUP3xHFCY8S8uqxb4XvF5cGCB8Yeft",
  "key22": "5Z37cs6oyze2g6Ck2tDbPiERgrUpFoVG5sukbhbFWvNqjBqr72Bu6u9SRAiqvmdMpgtGHLSiv428c7rpNwUuRPc7",
  "key23": "Mwtr5CkTxF7JGppiBrRkqTmc8h9pZxxAkAzkdqGUfsGLyB6vLhRK964uUprSqBxeGnTvcM1sW9qmSzgm9kWfkR6",
  "key24": "5prZXaR89xck1vQr2xvGaf36irwveWLLgudMNcgR8wXfjx2n52PyZi3hcMu2fz9rutJB6dtZDK3PZkaXhZSoLxua",
  "key25": "3ZkdJeA8H7bvriMfb14tfbuGm7xaTRJnhg1rrsZ2VAN8keJcYgBaNBRW31jaDfiyWJdCwBoTpqMVrnkM6iDz2sDs",
  "key26": "5LC6gSRmJzvTNJ5Ly55j6NGwBeXsoCsD5VGaAzuiFbcKD8jwS89ajrNGTeJjsxSR5q1zcHxMQh2t64JxtcNLxzy1",
  "key27": "4nVxU475MtXopBuFErqMWxiUWEJR6GLDC6HpAVwFceyiFHrgiCBjxuCYs1hj9zd8aKd3LR7EMgWzwo4RQzvMbseJ",
  "key28": "4GmHs61jUH8eKk5VXsdsss2LzEN3XQ9eyJdjs8PG7duVdeekoFsb4RbZpr1S7TifMUyY3gS5Y674uwrerXCdRQA6",
  "key29": "yd6U6QjPjfEJeRqAdk3PZkZK7MMq8M3etHyRu1eBmdVJFYAHzruugMyKMq41XFQyY7C2JUWmYAq1Uo5DEXherxS",
  "key30": "4XUkVmLP4FfEYXQ49k5mgjcHNfGpmJzetZkts9cRRRSAGeF8WQSfATY1r5r3f9Xkgg7uFvafu4FtZ6Pznq6qVMhj",
  "key31": "261HrgLdUDPix5BKvuuwoMGji9DuDLPgv9RgMrPmwnSSajcQM6ZDaZB4zjtcWLwgBJfBX9xdhNXZ9D2P4DhGSq2k",
  "key32": "34vih5PGBZBLMzSknX1d8TjxZs79QcyShb3M5JdJg4PGjcZ8Qbt52Bm2Sm4REbcYm8geyDf63Vixegp8B8zNtb6n",
  "key33": "64czTxRnuDBcnGadoEbbXDutsSTWcaFxmhgSJNAoSUcyMLFr3TfkB928RbYcqrc88TS3gdJtsN9yFpTbbArbNMSc",
  "key34": "667eytS3zQkn7y78Pw72pqkQCphcdscYBs64Vv6MQeeHZZAxAaYkiYbgnjtxxTsVCm8oXonVuuJ5erYVog2fhf6N",
  "key35": "5AwsZjMfdULMWZ4nfte42pTwgfV9QaNQ67c8HZ5ghPCno5wt4ZUuuDCgNkM2LMSRzJzmFGf5Z5NjEientQaXkVFK",
  "key36": "5nmM6KXDp2n8uDqjKzUdmsKJeGCE6MPjCXqdSjhRmegzYfpgjBE81nH6ivhVwqUb6zRXw4q1znuGBhuiYxj1eVxY",
  "key37": "3GyHsV7k7bzVKiHz6Xnso3knERvtZTe1orvtZeiNmtS3mZfM4UG9b6Kq5axi3Rv9ssxRGcAtdu1uVcnKWfEupYNb",
  "key38": "475LXARUh5hS2FftZ4xxgRxCoJyrAeNJQt2XWdF971QmkD51Jcb5AAhghxiQDQeWabd1scwdom4qCp538Pq9cs4r",
  "key39": "5tQx8jecfqcVjwFoAXBfQy3zVjKq2NcsJJiYfYFEaEjQ31Bd82Z8vbJePB4KcCDoPXb38jZLhw7GgHbBkTQggLfY",
  "key40": "2qpnUnwj9cAgbuxB1xgphZSzPNNC5o9x9atz5gZoaznbebFExV5X2TWgGb49oyQ8i8Hbo9Bh8gEogGUSTfkZu7QL",
  "key41": "owrhPW5kZ93jc9f1oQ41pzNAULfu5x9yGzk4Et1jhfvjoNVRaA9qPv2KWPYZbec8mN8pd7uqgGgCPMbUSchRYUT",
  "key42": "3bBBGxB2h2pt8qt2mwcqFNfjkQep3ThyQn1SH1nfcU9fNUYrQRWBsA3Ead5XH6CEdYARXoJiafHVfU3YHKuU58R5",
  "key43": "3GEzJpdzLkVpCmSwHyaiW1rEgVE1JyiDfjp9A5xGqQDgkn4Yoc7V3ZS6vvQjMDBciqraNpnT4BFedUG6SWUcDJ2t",
  "key44": "448AsMb75RGpeYFVEEAsd4ikB1ahZznaFUsANsyUSPERdsGBu4Z2AMVKuPSwV7Zru4mRv84f1Wv5p8hHgCBvq6HY",
  "key45": "5rujhWiNJh9CtrXRiYQ8gwN72C5rn5wFA4Lr6QGnP13tscxV9hWiM16AUwWd9U17DFZEweztdNuVnNBGDaakM71W",
  "key46": "5roUrhfrfGTNjPUbMGbgXu4Ntu1io8xuuZX1vWgHEEgTQoMcPvYX8To1deEU3KJfBQqGTvTRtKXZD3gYYnMLgWFi"
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

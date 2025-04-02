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
    "3ThdjXXAjFR6MCJNzUdD5ixwXNJBM1B9bW8R9cLRUAwVENf5jEDtdJL1PdzHf82ucudv8nqCtRRk9n5JfQ3GYKzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJCLxgYni4hb53qbRnTn1TefSjDUDDkAqpvyyUsd8YvErLsULGTTRTomSt4p6DbXUxR3mqMVtm21s6TpRFcs6r6",
  "key1": "3uFPqyWYViUeHZorS1qtmMPnNF7Yp3PZPJ86MFq478LVfZDYwJkhRW2VPqKVhmuuK28nNAZB49zbvTFmfY24932e",
  "key2": "2fxDMJPaqsHJqqTkgFSswXYQNYkr3CuxMrnYKbmFe9LxM4j31EXRWX9oqeRi65WDmHcxpUnc5f49RxoH4JFWNF37",
  "key3": "2TFJxMqJJD4TfAy2EJZVuau5VFVsB9Rvqjpc2tydEsJF9GQyMww1cNeL41KXHaDkwUMqnWuarMr7MfyFTtcSH6MG",
  "key4": "2jBUtBNigbzxMreqvd9aH2brU1sbauL7dPW1GwzNvbjRMogB6JhAgrkkFZ8RSkiFgUJjAtZa2SmYHkFPRvJmcJp9",
  "key5": "5Pya7hfCCc96B5FAV9zwJPM636Ssb96EyVJf5W9RsTbEe2BARQNtfU3RUFaNhLR8L1NEXr1TL5z7wnv2VMRAVxZy",
  "key6": "2s6ks8241HaqDv3e3yPft3y1zgv7ipfygcZkmMQcuyCjtAm9bfu838KTdjQevMJJCC2t8NMcKiA5pdPPQadnUg2T",
  "key7": "5VKmyJTVa8M3FPfLSBR9GnkLd4hNt2hDb3EpcDrty3zkHJZpAmXbKRsQjdPvDc2TkEBrKZ92KKvsuZdwz3CarG11",
  "key8": "4cYa24n6YcwcFdfDZoY7sEQonoE7H7WreippVek4cStVf3vTt9Qn9mkMsZ2wqb1oatGENj8JnPCuv6M45V49XBGw",
  "key9": "3kpopmndU7ct3MwtiQmxkz7hN45ChH9csPo6bUepvzUtGH68c3MNaEc3rtMiinAGfUjkyE6Q6PFawviDcj5ePpZf",
  "key10": "3UgXPh2r4qG7E9b4LJ3GmpWWwLtexYerdD5SCFJnAS4DBsoFfbwmSTKL6xmcbQTLw4ovfhvEPUiyZK43SfAeMZvB",
  "key11": "4gcCrjrEg7r2mronBs5RzAhvfy5RfL8DEXoid1VrrVH45ztuRTvEdFAAvcHHsi2Z6htKAkhmnQcnWBRRJeA1u4Kr",
  "key12": "5vVeEorq7P8Q1VcdjLKso5jhxRcRWk3H7cjodkRDWsx52kfm8QUKpeVGMtN7JRKWroihgnzaXhNqbymP7S3bQtPC",
  "key13": "4UGEURAtssJsYpovK83wh38MdqXusHDyqVcPorWyyBiSgWo8wNQQAnedYGLjM2BtVAkBCKw48xzGSDpE68sDCPXD",
  "key14": "32WYd9yXhH26CAK3UgAy3whUPgyo1XHPZa4aw6AMGFkhhoxRYgdUVMfsGQDAKetN9CtNZNYzgdCouRJY9R2nTGxB",
  "key15": "613N9Mh273PYwyqnDVPVLkuvXuBy1mGCB5WwGN3CvkxPX2MaWiZ5QLSajbqo3pZximmJ4fjKzFDFN6NCQ4gxUo5q",
  "key16": "5FLCDwpTv8Cjkgv7iSj9p3gWgEb74jh98hvaKC6vztH4hW4T7x28omUAkWChFnNxwToDdzR5MX8wLviSxtqfknRw",
  "key17": "9F2ue6KeQeNizVpMcAfjD6aJua85okkMrcaDn32r2AJYVRhehBhX7SLrAqjcnWEcfuBrMQEqMBS5yonpfuT95Jg",
  "key18": "5u2JqVsPWMGBNSFShMVFqibE73HeDHdHVA2YriXrLz8oZFcsToG9FcUoRjdz7zU9RZjZb2UEEzfE7ZrwxwVv7wpD",
  "key19": "4zti2u2Y42TCgcUVGdGBXqhLAFfYWs2YRVYFS2jmcbX2zpJuvaTZLxLJwiBHj37SrRyU7YVUWwbGgS7PsVdPPBs8",
  "key20": "5iBaDYQz6NxVDDmiiRZbrxRs9CbcH5nfh4htca6ATMioZQb3pbAmqE2u8jobA9jQQ9wUTkkNA5m9EEk11d1NjQRv",
  "key21": "Z4QZfi7tNhRVv6YZUhQQm8nuxQ5v5EQANcvMTbdsoEdmHDKiG7vXAw7szkpJxdenN3o3iLdbPbN7ZFdLAAvM2zS",
  "key22": "2kMZNUsV4i4sHviYpE82BMccrduQQ7gECQ4QiQRerm7voh9iFNCmb1XjeaAkxBwKCeAJmonbhgKNvj3Pc8Z9VnLP",
  "key23": "5abgGiujt1QSQCEa274oPvaJHJX4f8eFhX8rbjU1fTBGjXV7NMXbw9MLh3usRHy6C4vH6LcDHjdbfbU7rwA1UefF",
  "key24": "y2bTh1MLZcVSnsLGNE88BFgFNnFy84SJAG7VugsFnbmVSuo4c9BHZC2ib3TLhj7ggtZjDf8xZbKMU7pRJuFJSS5",
  "key25": "UnBwsWL68WrwaSn6rJT7x4jxreY8NmEgJu5NqjjSj6FU5uPeAmYYhE2AJ29JEyqgoEFqoT6Tt4Lhu2pYH6mnM6e",
  "key26": "3JWETUyB8k1Lm9a55KgxwqY5q5abXT8ioMRKJHqkTVHKfgYHYQEa8uCjp41DK3nVCu92jBALGAAxeGPeJQ7Ahjaj",
  "key27": "gidNvZu5hUGRyBbZYyyk1bxfceq5PUS4ZkZeaswuQ9WjPSFyc9gt7SMJ2VsnmoAEqq9e8zT9qNxdXczarrs5ovd",
  "key28": "5FCRS5rJAYmxKg5vccAjuSXG5XUp9syinxZdqXE4y5zQUnS9rJ8HefjLEa7EaDvE1XGNh8CpvKCnQc7vGTtKmYyP",
  "key29": "fTh4nCZJpp8dY579jJYRvJEEzCMqtYbx65fUgEHGMWfJqfKyJ62oV6gK2wAFtSPx4Y1jJBpnwR1JPH6sKL7LdgS",
  "key30": "4AiNutCVoLzt1i5oYfzGVu6dHTL8Ggf1DekimqDPK8Db7hTC2Ta1bfaAzASE77DtCwTVQXpAWVGKFqaoeBRS7gLw",
  "key31": "REp81Uh159zWEu2pQ8apyyh899q1kjfr6H767soAvA6fDHGUoUDwxULZusE4upKLRjGezXdGKKSN8NdP5yFgefw",
  "key32": "67huVfKCdqf7kuxvSgdCa7xe578MLPXf36VQeFEh7Xya5GuNA3GZWYrvTHggmAHXFE5VemFQgdGEB3gNwVfY7KkT",
  "key33": "5yqN6qxyL7GveHVP42Sj2kRJq9cCxZCKcCDJVdWi9nzswasFay5Xm6cHYz1KKmSaFrz638bMTGDgRu4KApxxhpAL",
  "key34": "yiNQHxQ5vcHEYFCsoVLiPQPWVfo5A7ZsmbQmJJ9diL5AomDzQBFVThH5aHprGjVMtZBxv7cYxDVgNciwZrHaTgM",
  "key35": "5VXxGkjLmU5yzwahZLGGvj5wdj4Y5YAswoNmjNAQnwhR3SaHRHsQALrNpZAsw3yreqAynHZ7ynnAhvQYU6VGE1fL",
  "key36": "4BZZaNUYreNNhuXezWbb2nEEKdxNDK2u7BMTRfKAUSzwThXL2RvsWC5gg5voku1s5uhHEhr6JyJCUcL9GneUAjsF",
  "key37": "223hiayWGQYQPx7DaGxTek9Z83k4hA4Mo8Y4GS9SsH5fUTLkifN6cmRTe8WaZNNoRFCPvcj2drYceCcBgzoyBQNK",
  "key38": "5TBTDxZqpfwwL3CRFfC34ovQoAsj26F4HKZMBPUG87hkSaer9DJFzmVe4ENJsVu7wTqckVDQPurWJpDmv3hZ9uF1",
  "key39": "3eMWcM2gP2sujo5tWqvFTvJbDFKVktuUC3JRYdHTjFBZTDD8Q4np1GWWXwwG1y2HMNLk1P2RYJNxQv8Q6KbmX4Rh",
  "key40": "4wKeqeXtXxxuhTaYKVy3wMCd52mKnC2gvPjsDf68RHGK2dXv9nZD9rKtbBFwSAMjovgWt7GMnrLu9DmnamE5Z5Kq",
  "key41": "2Z6PYhuTprjLozmYeTZGo6zDVrMGpdcd1gAgLmcAkTnrVEjerancueAuWGtNAoKL6CRuKNstZAMPf7FtPaoAQ1TE",
  "key42": "4Nj999A7crZoLd2ZkynF55KBkWhptmgWesFY74hZdzTCXrKwc9v6r1oH7v63cATHRVv6AYgFssb8dUf7yZupy5pd"
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

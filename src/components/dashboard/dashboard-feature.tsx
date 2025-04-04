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
    "2MP9aD2ePyw5fkN6yS7v4s9DtVm2GHE6Ys8FPYXrpSNqYLZRK3a8X4uA4AVDemaSQmZ3ZAkV4AqTqzkfzqwWHTfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuQvKZNcYSCmNsHsnovE69zJBCW7xHYDJQJ7uKNPDxBvUU6bgHZkgeYwSWZSJ8TSgJpmYzVrcXrzKNasLWUZ4eu",
  "key1": "5MQzdBSv1ZN79EenTotKAmDF8BthxpjoWFkYr6MpXvqDtq4sLhyJKw8LiUgScRqGE6KXB6G8c8z7awyzCrQ7gc3V",
  "key2": "N4bfD4D8A2cDXRtUsmasj9Z21Ekhc9dFSdVif1sohbc1RzF8GosScqHbG9yxPo27rPBmKZd9kyZPLBN84DoAc8W",
  "key3": "ie6UGnZYi6nT3yfRp2uTrqNbtesQ6wuiBKP6nyh3ibex3P7Zzj7Ujp6aai4ZRZsA7S9gLkbr4scxKcbxvTi2s13",
  "key4": "3MAbpMpaBv6y4KvDCC8QNz91N2P3eV283Sd9ah4mpXZZU2k4q8GFdLoHpbHg2kHNe2drACiby1FqdZ7ABAnwHC8m",
  "key5": "2w1RQjVGrjpkxqMZYTNkrbi4w5pVYcSrmuEQ7nfEfqNk83CrvXbhsmKcB8TsK8M84vLSXsvQyWzQtfHWLaQsbaWR",
  "key6": "4UL3x723KbxtQD7zRgYNZ5rLJDDphQ2rFmpdwYL1vZtaZcmv4MAz5qVjjgtJ6Ff5LzvEFJkHZ1qt1HFwTf2K9sDk",
  "key7": "4doRAHA3QTM5zXkdsf4HX4jgJsHjWfrK9BU9UFF99KpDFmM4cyvXPy6uHkQLWUoDP6dWQgdJLE2kFcZwVBpGc7gx",
  "key8": "2mxyABY2HpdsSDE38JPguDzEt11BnFWiMnwVe6S9ggGkSvmBgRFmKZRirCzfpbh2bQTxzPD1g3haweSvRhYGcit6",
  "key9": "2N2BQRQZ5T5iLtZY89BwZV463bYs7f6oKTeYkrEJS9kh2xNrdxvY2C6fQyJ8PULL2k65ZaFRvgMHHYQoCYi3fNvv",
  "key10": "6Fb9LykSGX931pZpkwUEhveLoigf62NroF1CVhLTQQrct8zL6pKD6BpmSeJVAPYxEJs5ne7W5Mqm2aNdX1jnrVW",
  "key11": "3ZQt2XC2XnnLanjNt4HdxYqrkCaVdPHooaDvfKys3pkPKeGBiquXpqJ3Ma4cs5hGjUQ6hLTV1aiTPvExGr73U1mu",
  "key12": "31Xbb4g4MmQmoRyfHSdcyJC2F1BbYBYbNHLPMRNoYJi7yRCDGzjy3K5MVLHWRsHQiaEvr9fEV6BCtUQLxXFyFC9V",
  "key13": "4ZxX5A1rgrKevKUepeqz8si7DJ2i5GG7xQ2HtDzYvCXdEjm2txAseaF72Yhx6qGHo88h5Jy5W49DitLgMmMzLTWE",
  "key14": "5GrpD9dHYsxyKtpcSmstmh1A9fwaxZSNx8VAgb8jpFBw6QGXEA5tbfWDtDhu6694wN3VXb1X4dctLD3QijHtddK5",
  "key15": "3p4ZRSG4vxypfz9PEFMu8Tj81zafEQTs3xy15eEbSGfp41s9PxJ3zftJ2vBh8LXWuChVdXzoq1gZ9Avx4bWDpV9U",
  "key16": "2WLSFytmXuLtqXjBFuQfYcqf6syzhcptTABPmmj9pL9469FmvSnnvRH9WttDzBoQkN5ABAagoqBoRuvhgefpKJL8",
  "key17": "5Vryt7b6Cg9j8hHUb7TizRqPXRszovEEbBjp7SGdgX49UopJxMpYRu2tdQbTxFG3v8WZK4vRV3XASPKyk1bkBjwz",
  "key18": "3KzBbhMXNoHynjhp32Ko4FcnLipmQkmBAz35aoQj5D6h7bukUdKLpHtWDFA5aRD5A8ND7uNb4p1hM4a4inThp9GY",
  "key19": "5An7ySYPw3xnTk8spufECBwxGT6Kyp5Xy68xLtQPGDxurZBJi7kE1A7Z8eaEXcXmAC8JHmnFFdYdwoMFM5SPQ23A",
  "key20": "56H2LwwnBH4y4kHDEHkjJ4K2ngSceWCmGo5sA1e5Gg6Vn6HQaSb5KE9Ki3vfKLt1kwjN5hKxcwUUj2ZasGAUbRaA",
  "key21": "kdaCqTt6xWAvp8W4FNdNikkYES4m4a9hGmEgJDVBcGP5ymn2EWmxuQuHTakCBL3f6PCvWTnG2pW9RA7gsVkEBuy",
  "key22": "4sc2AV2N7wgrBTvcF6uoBaLDJVr5ZEBzJiomp77dMrZwCc2CMHXAn5JWg2soiatYZqf7BeSFNqHTJFTqyYJpuZ3x",
  "key23": "4ru5VqBsvpHtDDSQx4nMMcpToaBkAnoMfTVems9D7YSdCPsxBe3xKVWUmmTppqYnmXMTsWXDdChZZ7ApV929ZVPT",
  "key24": "5V8bEfs8YunSj5uij3qGZhoJvMUx5JnYUEJQNnYYsXzmAmAeFTCvBKxTETiC6sJKRarrAAvLN1X5gZGVzd1bSUui",
  "key25": "29o2Fpf6AN5rM8wiKZBk35nd2PruUbz81rvJNUjuD5Y9odfCgty44tmFDZGFkyit3GXpdygnuPw93vZdV2Dr56MJ",
  "key26": "5GCpniWnKDnq4KkSVwuCCMyLSHuD5JScj8rPpiqtnS41gaHmfLuQD1xHh8EwvevTStdHwV4C2dtfjK6JSV9H2rdy",
  "key27": "oHhZBuqSgDNXAcjxMq2XFW9VCbcgxH8nRK7w648nnAeTq54Pc9LHcxoRtNv2mgVxJS2SbaRYpZA21X6X2N6dp3o",
  "key28": "5QxbMmcQeha2korLkXKM2Xmc6SbKZghCZtvTnqQ51VtLkAMeM3ktjodeyUwBQe5MtZgrpz616qdWWivatQ9eLXDN",
  "key29": "5NEGFeSfo8gh2bFLcdH9ArTYBSVDpHC3H5uV3suWvP3L8daerwgQWtBNQu9T29mmDPUzHyZxycdJVnGNDvVnK2nW",
  "key30": "3VswEM1ycgmrPAk9nW24ST3qGt9EeNAkbBRSTc4uX3mC2tTxT79fiY41AqA8HfgHFXq9gWvXTsEzL8DCWMP6rBWF",
  "key31": "4RTv4o8jo1TMSHddNxcf929B4TJh9FvkxgnKNM1XKZioxTcZ3mAdeGmoiqRFgjsKEJu53UTUefPBwBxN5G6Mtcb1",
  "key32": "2VA9vny9ksDFN1WtzUUMppZ1ibtzy5o8rv5NBSfpgbXDPPQzscnU7RvfhuBxUrZhUfZP2WRJH5uUuvgA9h8VAWft",
  "key33": "42jWAgvfrxXeZp9n693t9v6x7xghVFCB9nhHhaCoHiQv1Dsd1QkmE7ngxZcd7yt58vx6c2Me3Bmixz2xhsJB5TNp",
  "key34": "5HwQnNzK7aBjJnAFhKApN3snvScgnJEpm3rpSAMVL4qZHWvuGGgLbrf383QBKAtnDizWLrRQuzP4nc6NkVSgadkR",
  "key35": "57o56nXZ3VmiRSnHiW3LwB7mKXfHLtEkytNEe6y5uj5HJyLdWV29Ui5ocMKxezDFuFWhu6r3xmCsPu6SEwkXWEFz",
  "key36": "MfhVxgGMjvokvhYV96X5JjKBHbPpNYzeSMuMUNi5xkeJwawbKrhNk9MGxogq4wzWmkWfF8fJDBSf9pPuNWJDepG",
  "key37": "5KQTzyZk8VtgTz4wEmy91Ex8kM5i4FfbTtEXqYEkmybDdjrkiBfiDYN1BKtd4rQaqAhWZeCikSNm8X8Z2GkYaGmN",
  "key38": "HT9HTQXMT3s4jNJddFBGgWPbkTd63tNRrmVhem4ut53sDyHhzzonXjpchqUWaeYzPip8gnK8Sip8v7Zej8GvU3P",
  "key39": "zgpKBnHX1vUHzC1GbXt61gjkcDLptvpqvCV5Ls1ng3eHwZyVC8Uj4nkCRGdBpqvEG4KPrSBebvtWv6XZDSCQWq9",
  "key40": "4uSmMsWq9Gh7TsQydXXLp6PKHK5hsdxPQ2hJBTf5xm2drjQQtrgFwu6JvQ4KdFauUut2LvQLEMMe3B2XBrCzBczw",
  "key41": "4R4ZDV7APtbe8uiUT7MtmiCZn1C6feUBQx7Lfzg5xUzPaNzHhgtdWge6jTfZUDr1HqTLW92Fg2ty2QG6M99R1Gjj",
  "key42": "5wdKnn8zEgXNKexqBPcVnqrZ8LM6zrtbzieVLKxZcatJG3cWCxL3zwowEeSoA9W5qdupWPgkGukHtsdJD3kkguXM",
  "key43": "5uzTu3MMzdTZ6EJJrJRMLzNneBxFngF5Q8gzM7N1J5YN1iGFXzFRgMzuXVsfa2Zh7fPnJ56raB4Sr7UGe4rpRdS9",
  "key44": "8ssA718vxqHXhqgs8LGJXjC1ushpVRxj3BnDXrJaqFzKgS46egtcwHmQTHFgBdEdGMYGjG78Vzt4TwzrmdwzKw4",
  "key45": "5BjUjkXEnjZhbFGPv3Eo4XCK7XQiQw8Dz77m3xY26hcBSRnxecuVkXQqu4ukNoCuMeSTyTbWL1RE6ezrhwgwaV98",
  "key46": "36sNmjskZxD5wf6Xfb8BDntZf31MhTdZH1q5BBDP9chRvVMzJYGrXDZ1AttEB5Ro87GZxSLirRsjLbmvsHCWA3V6",
  "key47": "5WaatomK2Z65DRbTKhnWpW5pxhgb7gxiec1xgvXeAufKzqHLEzoxsuUhnze5T1G321Dypuk7kbZ8bj8ni2B88WHc",
  "key48": "5Tiup4uqoq8ps8UbyTqf5vG4Yj5qccCcoViYw2cQNuQ4augCxAHnpe2SQCnoKVtMF5NcgLrqWJshwz6Se6e5puTp"
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

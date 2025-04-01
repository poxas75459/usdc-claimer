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
    "jCv5W3KHGGi59Pdo5bp4FjLeMkYVK3QGy9uPgAhBEDMSz5RZazCqKgkA5cFwNqDdtqvwycLBw41Xb9m6h4cSShL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPqzYvwgmBiMm54CxpTXmxRrZrgokqH5WDNtwgbCw7u5zDChr6K2hgLuG2zUaTd1UtF9bzEor9RF1Cuh1zf5cPb",
  "key1": "2PmQWW3h1yZjE6hqwXaE7e45rhR944mzxZnw8cWECpK2y7Cr1D3RgaNBXgontKeaVPvGT1myJ4ZtUiqEPmTWgrV2",
  "key2": "2nUScDyZpUq7hhMjRVmK1oF8Hx7okdo1MnKMsHc4ESTm5SnQZEPuBWFDF5atkvFcLyd8VfdNtDTQtMz8HGhHmCeh",
  "key3": "2J1ihz21ghnaSWf3A4tUKXp2bKYHhHYoTGvPRDJXezWZ2z8g1vgBJComAeAZL9c1wuukRKGXPpqZiRN2SDEuoeZ4",
  "key4": "5ePGZTpRTWimvemHxWLto7dzxUgKpmPrgfQoMXRnzzUkmdPD46pwk61rGHv11vkUDmkkpuJb628cgTDhyXieaToD",
  "key5": "4WPy9Mmos3TbZ5Lfw9dY1XoUnLfC3SQZ1hpEDS9iNKfeNXmwZqFigRqKAywCGKviySbHTzjSkXU8Mcjv7G3b8qt7",
  "key6": "215eWR2ZWJ8Z9HQf3fjmR4SRzNDEkHJLNm3ha5c5i32A3tsEWpKUyJtRYwEPCBRCkAfyy7FLkSWEhj9fYoBrqgbi",
  "key7": "5AN2MAUwnsk6Sn2bobuEPYLnwy1WLbXVEgqbmdouAXaU5gxaXBnuf3wMiBqzeTRZAVk5gNJeqFMUWXD5yYuGKVEM",
  "key8": "2o2Axa8U6aybmNYgt9T73cvLqPVm1bQXtfXnut9aVuUMRQUynfq54Q1uiqMP2JyukWpouzgXHGVMaBQHcp5jafqj",
  "key9": "3iGRvUfpmPBSipvkgdyHBVmAis3QRjo5jrAY4gNPX51LS48C8bSaUe4skS3DxR6awbDjrSYeB4nqTVRP6MmbEM69",
  "key10": "2NJfpkM5d57rhKqxQKVS3iSHDiKigi2V6iDrzefP6Zp74TUEuZkoSBBH2yKV46yH8g1bb9XSxhKQkwBzyY9Njwte",
  "key11": "3KPXp5xcSUYStaY9HEKznQTKtiFiMJCxoW71ivT856f7PVY537z8JJ3BMu2ivr61r5Sn6ABDgPovXj2Ah5kGudUx",
  "key12": "53xPx98QUthRABH9eY3DMtSuKETMeQJ1kzBbqXXH4CUmEZpLBbzbX3Psjm5TKRBQRAcQMwD5gDWAyRaRRB2r7USi",
  "key13": "57anHkRyvwUoV1rPUTLJkLDXsW7cQs6Pu1ZpUR4LovFcFRCTgPT6V7kE8Nd9ioDAdTBK24b5PHcaZGB3QSyjTV25",
  "key14": "cQhimQwNhbTBHRq47JLYUMajaZGdnCyiLvLwN916tYG1sXmgwXji7quQAkf2C1o5AQaj53zQxiMqoxbWCEyLZXd",
  "key15": "129R3jpBZ8PSjqYRhFDXzkFfzVc68Aj5jB7LNexZxobZNoGggXUjxaJgZEQycjVKgGQma987H8Zb5Uzmr6n2KATX",
  "key16": "4DT6N1MBu7rYvxNJ2nUhrZ29ZZdP6DBfZWZ25nNXBvLJnHvFXHQoddUkw3XaUHwGZMyX7hayGEFYWm9BuR72JzZt",
  "key17": "dtdNv4TgxzzpU7NeeQpQYbfHUJsC9o3at9K5sz8szsFUMdxEtcztde3m7iRi6CQUmzcWwuWayjTr7tX1THpzepw",
  "key18": "5yGUQW85qiJRctaNofUpbze6zkvFt6Frs57KabJQoA1VPNmE3HhoiEQkVzLfG2CWJcDaEYmQRKinKbjGs3pyMicM",
  "key19": "5L3nLooNhwjDdVeAZmxtRBg76C6cLDGvSaLCcZxXGJHkVWfUjBpoCVentJZeNVZha8nMnfDJhcc78JVjmyTMXxpD",
  "key20": "4SDWmMgoLipo3VuCccGHejx6kUZfsZn7mC67wStpNsuxDJpTAwtdbgLgtV2nwcSNKDH4QT56FBjq2hHuP2CHMmRT",
  "key21": "41gx2dZedgiBkS6eJWQ5w7qynfM28QwYsF478jDC1i2YfYL37MP6pAxriGyuQfTc3tJx9AZ6FRrK2eJdSQZjSAku",
  "key22": "2Lqy6TbV911Guc2WPMdLeWg8CYUC41uMhrzKt3NZKx81QagWGqgmSUH6ppF41AKu3Hv9TKVGBLaSS7xPijgisUZR",
  "key23": "5RYPNW31TqyR9k8JJ2ZPRY155XWEQu4QBgk2CDFFX3uoD9Gj1JM3SiFbbowczBAW9ZcTMSnLxQEXYP1TTcogUiqg",
  "key24": "3JPmfaQvgPZcTDmDgd9N8LiQpma27totpUdUyXn4i7iKKdaX7xaMvv1Ht3TA6yzmNLAom5JPnwV8rfAV5vKmDziy",
  "key25": "5BMVkngzaztVcYgGqGvmoMJhPB6eY7mu87dR4NkgPhhdxPFQKAhVZ4UAdH11tKxoZmbfc8Rr5eKCsR9kKo1d78Ny",
  "key26": "2E36aPpUeMS4kEojVJSLvJuF5uSMrSuPZuLPs9CsjEZ3CGPuRsKiSfAK1NtSa4LedsvJ1D3VNRWV74hck5btDtXx",
  "key27": "2NZ65ri3hzwMqFzds1U5tMWuV13rLSGDBF9t33wPz5xYk1Q3CDvaUU6KNdzE6T8Tb6wzBpNykF1pD1khsy6ya6kR",
  "key28": "5iUBbP9N56eHW4GURfFJhDS1hfSncZ3EKqE971f74GbFu9xFtZQQ1xEXoEBDP87fMtdozjV461Uvzjurcs88Jf2H",
  "key29": "28D1JT9gQK3scucAh3U5Kaeaq5m4frn5wZjFgUH9Jim2xX9nLK53XARJe9s6wBUHWaa3eYDhdC477PSGnVGRycpz",
  "key30": "KqHkvAHc7hAA5un9ifVUV54GaXJSk83XXJCwAaRzThD6x3B4UvBRfS3Fe6vLAKZcakimtniwdiNCUc6TF6HvGYg",
  "key31": "295aDGoSHaY8MzanRcsgvNr3jREyMtzQwYPaMabACYn7QGczcCnThiaw4QhuPRajvtfFFE8L52uMkEhg8J8jn2pJ",
  "key32": "4caFqYfwHLxdusExEVoY74MSaRjAPZrrZWGw5tcZmS9JdfhJ3A4rLto1FTZEcsuNshq1RKh1AJRPBMwshgBP3QG",
  "key33": "81kgtkrgzUDpCFWehvjVoCbPkpuLyF9ChEnigEiBNqs1Wm4rTjhj3445DAa2f6v3rnJYbQVVjEKrDd8sbJPd58Y",
  "key34": "2x3TinDsu8YUXsDHokVACpVN7anC2NytbkHecBF94aPiXugWVXwabG2TKtgT9UzT2RemdYWttFXvvVvNYU15nJh6",
  "key35": "3bV3ZojVMN6xvj9b1GJFgQc7NfYGxfKNougSQE5QfmFSQVT5kWsrYPzVRYWF1nVSGKc5iS1WqBe47AxborabsbuR",
  "key36": "UP7R7C77ciC15uvMohPhBgHuXMoGdpsysjsd7ZCrVhowdwS7abERbR1pW12xcQjNQZuTrtdDKt8vdw1kXuuBmx2",
  "key37": "2rkPEzbkKBPF2mG4nUyjGYVKULBSDbgfGQjPDM28zhxjmyxuuXUYZfszWgfQaENF1vbeELPKS1tXz3HAukhtE2my",
  "key38": "FqFJPkXebw5tNzvub8fie39gLHUSVTcQrxvADPYwLMMCz6gQYWJ9SyRkzrWqqRo7cReNzT7VJM7YYWk5uYSthH3",
  "key39": "5GXQzhnQ1D3ocrPeoVchEgxoZUnnmcfDqkPpQjPBjjCnFnXAmVrgSWEwdYmi6JxP7puTj6brVDtdDHREGKQFqqFC",
  "key40": "2EBQ51kdbiZH3p6kUM31KuwYVbR4DsxrQ1U92j1i1ALbEMHg6Xh7crjTHji1HxamcAJt7ERCkonFvdvfuwhuwrhq",
  "key41": "4Jd8tZV8NzQET9pYp4csGnsENiY6q5Dg9RfkBvQXk1DCWnwKXebVjazbd2Yvm2jQB7RJYVN4YmfSjNurgHoxFjCN",
  "key42": "2tHdf39CdcQbg3cynVPdtDuN4uuoUbbNs6bQkCZoxm27PvttTv8U3rCeD3HwprJzCm82dYpaqEhUMK41RpRNceQP",
  "key43": "hWgHMdPypPWZfkKpFN7es9ttC1kWeTnYXrR8cFqLUoV7mvw8borrccGNXVFj5GGyYLRUZYoM5FBhxy9oAnN7csR",
  "key44": "4AuTKBe818FoN4NPBSPrjz71ywJ1mnGx7AXEf11tz5HPDHuNgnEccyz2F3CHWypmLJsscpHWtGjAgdEfTEFvXyA6",
  "key45": "4A544VZwpg9qs4LLwV22mXteSq7uY3yb6fij2LnNEWTxqCSXJsWtx7CVF6uvD5FLQi5BxGwu8hyug9mf61TFPxaL",
  "key46": "5gbbet7yHeQtnVndm3FnSAWFdgTv2DsKoXTpjc2rprytRoLSqLTupciUYYjtbua3GQ2sniQrRpH8KA3mM4Ht8bN2",
  "key47": "P6MBqjDiEpJyYKeSReBX99JhkAtF5zhHFBJ7HZckkjVbKghxDUP4Nc9ZQQiMxpX6NAiHmi84gZzQZUgjPxTj3ug",
  "key48": "4gsQ2Y419xtos5PsSF5VBD2mrQRLNMM8J42MGXRmgWqwWJQhM5SWgHprDMsDnY4G13ERRDbyHSPSiiF6ot7RGqom",
  "key49": "5yJ5sFfUYi1Acxsyusx4CzjZdK2WCHviMAKVHaAgCdSpRD4dTk6mLQqBxzqqqML5FMXaUhMK4BLRn1CTtZCCFfA6"
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

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
    "tMi5fKCMMa1csxsxH8grc4tGpbxBKRdzq84N2uh6hAjhHqv6HgwRv2B8U9JamzRcLeNYhQjSWCTtcDYtufegjA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33M3zTQtfkWP1btquHcjydpbiGpeCZT4gjBNJ2VWMysYTuQRGv1b6ukeF86YDYU2V8jJW6U72HNfXGot6Gar8z1p",
  "key1": "38cCTUWpSuNhRy2DBHtPBJAvarAMh6XHQqM7yeCRTK7XBUdYrUrkaij9vsYGEpS6k5EMaTyNLKhZ8PXyo3QeyLax",
  "key2": "QJT53sqXuemzpN3Wr5fpuR2VS7f188R9qbhcwtFeDReKcbV3wmzwjqT56QizGJo11tYmb1oZhtLf5Lt2KM7u69Z",
  "key3": "5BnjS8HNZJ3fyH7UD2PshuKn1Ewk8LEjkFtQKkLbzZg94EBB2AuHDZmmyzdvMvjyFxrugkWANDzmeLnbhwijo6w",
  "key4": "4rLUWCGGRc21D7uYAtAmax5PPqzH72Byo6eZJH1km3pioit3RWoyzjGELwFjWpu2NMzAQxq8AqErXgtjTvKQn4qP",
  "key5": "36rwfLWGAfKwH7A7F7SCy1v8tdGYkoXekNR645YXjiNSBkZxKASB6CMSBT44uxN7L9sScEtLwaeEE1z3TpL1BsVS",
  "key6": "4Lmj4wzCwXvMistYj6s8YYoHT2fDEi835DAAUfKhMaDsNvxf6rBi1YLWTo2o3DowLZ472VSYCUyamcCUur6PKG6",
  "key7": "pmR1FwEDJbLf8ZQKgg4amQQeTMHtA4ETur12fkNuP9EQJxrAWuB8W7THY8TZFNGZjhKrgvvjoiqGTRGo9eNqQ1k",
  "key8": "5SaxBi8FLZnLFAQUNu4vRRegqiY2AVCVKrnVrv3R8vf27y3CvKUmGHkXZAKVJFQHj51XKGjwmwUXjCjDyqL4uq1Y",
  "key9": "2Mmg1xHP1s9pF9svTVvmaNqfR5DLQmdQmH3RbcXqTgPGiZXivxfpiSVAs8GTc39efjWQkTq7JzU1VrFKY1gpVvyn",
  "key10": "25djQJFBBgiAqoWWDGCTmhhcAWTBuQA2aGnuAZLqwEr5Bqmsn9iZET3nBzx2BKB3DnnDhXL2YUSMv26fe2yGpYrZ",
  "key11": "4pMd2UVSjeXJ7PXdS2CNkFpNkuSqQgdnqazQHAmWa99YtiEAKKnDmSFMXn1hRCmEmHkDyLEXAicWUTyFiAcShQnV",
  "key12": "3un3Furtj1EDDicQJNzQxv2gGTKF6nUMkgy3o9mY1RPzpSwELW7VecvCLVDHQiVjcyFigjgL8ungUwmo6e1j7Xc6",
  "key13": "3F9QWyHuTUdsj9DtdGiDh8nchcDF2KMxB5PvqiQjsTaeH7cX2N2i9SpMzuA2itPTRWiWrMNT2PQGzVrU85BFsaqu",
  "key14": "sRLU7onGR3KMmq6Qzx3ZRrrVL8E7RYAWtJMoVgu6cCYueUnx1nRtnsHCuc5ooHFt7ssfjCkvDpQhmwB9pZdP7gX",
  "key15": "5MoxJPsUpyyxktoXK7ybUDUYiXEX8YWfmYsUkabzrzoEpsYcuPkXhmK4LLf4UT2ajLUYXyWBTnvvjBApimxwnDNi",
  "key16": "2YFivuozLmFBxBifuq8Sk79BY7vqCRs8EYwrPCZtq9zBedERbj4VzicvvtMFufMTEjPPkviRNBP3sKQdJjonKDL5",
  "key17": "5WmibqHD22x64Q7SiPh1Py9gQBJArk1bNY47NCb3oKkvaMFbDRHqYo7fRLVdBVN9SoJpGAHzU42imDxSzVJtfu4w",
  "key18": "wE1V9RTYDFjg5ocCaJ7LYjfbbb3zAiS1R1z7kfsDwbiubguJFaxXVBTDVpn3PYBPeqbvg9QnGT9faLmXMaakMbF",
  "key19": "cdeeA7LPHukhYxPTp4pYvDqcsFVpvTbabxYJqKFBr79tNasXJnQNJhzPzZvAFdi4uVYKPrcGBmQZct38odi1HBP",
  "key20": "5ktyh9qyizhZBFgwQQucBbArW5Tbx8oQkmt4zSZTXEwK3cvFfGNvECPU41EgmrKEgaDNXiMKzKeYaaZ8buPe4t7B",
  "key21": "4WdWHcH7gnK3QeraMU8dkxKuKzyP4MVsobwBN29ykJgqUgASguphEghSA6j7F1xdf4Mi5Xyh4yUWZJX2E25BpewY",
  "key22": "57hPJjcYjP9F16xuFESV8ZD6kkiesW3jwBpvBh4GgfYApF8DWA7itFyoSCAwBRzQ6kfst9CX1GEDtX1XJca39PHM",
  "key23": "24cK8ExggqvFVBwdHXEfHdmeFXnm6n4QmFbRoKgirTWA5JtNrrfxtxrGrzN3oAuV7YHv88vGoUrC7jr9VDJogwtg",
  "key24": "5BfGYnHTW7hmzRJFQH5V3oyZFyasWKiWBG6E3vggXopC3yUDRxtGPvzKyRfUQEziNht7o5z4JGi62k7vhFP5a2Eo",
  "key25": "Xmsxdhz3CowEUaPuAyG9G1QnXcKEAHwrV5oARfDJMSnodkkxtRmqNrdgNvWNfBsQvafC6wkyQGhCXHiHWUsDZ9H",
  "key26": "5kir6Pt3UG7wcBSeqi2oBmht5yMQbX8348TtnP5otCDNiLBubs3dnV9HkyeBodWA9aESw6Bzr9GxGDQw2YobR6ST",
  "key27": "3N9QKF4gPJjiZEXziCpU2yWRA13j57iufwiTj6vWSCT42aczWiKNPgQPq5ciE9GcLkQwLEvm8V8oVy2m54LSnvkD",
  "key28": "jmhLYoBqZnuAGNUpts9X5XmQuRBt66dVPjugDcCd4bWxcMcBRfEtLW6BQxSDWnncNLXGLnTa2LmmmtJ64LFngxp",
  "key29": "4krKfHRFWNV9rFcvJKQvRbq9N7vLtQen7x4E3soscCaxVmncZsU5qpGvWQbiRpBLYxQWwzGv5eB8MtzfZ9hxrETZ",
  "key30": "3mtDP6F2EmzsCKXP6KNsiF2j3LxoFADaiReDrrDUNGPry5p1epNtnYrtUctuSazSuSFXkcaLabUfNW8JhWDjGSkA",
  "key31": "2cJ8dzhrfsP8XEBP7CkQ9wnp33nWgy3K5Yg6koRRJPswjK5swQ5ZQt34zyJ8xHoWHP5mkHgRktzQKfuVAVaHpjv",
  "key32": "4TbPU5JNMi9QuTKptNpKTE1knsHDVkexJEsJh9wTDbdgae5oYN7cAPgJskS8tgzeaHp8z1uzpL1nEg7kX9DuxE6n",
  "key33": "2DrfJE5xrDpQXSGvLPMeuSUSchLfhF5HYHK74dHYv7mC8dTEZ1VB9gejuLD9k37rkJBaMLemg88Uk5HsCyYiQvww",
  "key34": "4biBmCMjEMvSmZg5kcWSGy91oSu34QB93W3sMorXLRqNLtC53857ZTmJARKQSdh5y4yHzd9yzxLZMCSGqPD56HUj",
  "key35": "4jgJT7VSVg6J3zPVCPTjvvcfsE639hEzWtLbBY4rY2mPBHrrW7K7R2GSAeFmWRhZQb8u7UGcwoJodwRJLUrDN4Vn",
  "key36": "2tATDiPijMQ41eAuBcyyfVw8vZ8Bu4C5wRHPcH8j98u7WKoQjmRLMhEBhmS8JxncKADAB3MNAo8ndRnEayfiQv9p",
  "key37": "3VWXJFCMPV65ZjyFedhVZmVjgoAUGWaHFDjR5G4Btx71i9KNKa2tTJTdz2iAbUTURz4hgRJe7Rmm358KcDpvSywj",
  "key38": "4QdrhD34cW28TJcN8zaBAAzQnWj9gozjDZMpjMG16zVacmj9bMWXL55swM51oqGjkZhwbcQVC9CBmhZjbtFAgG96",
  "key39": "3qxVw1brdMW8sz8Qejyi9aCUALBu3mbLNhs88SuFUCgwZokztai7w98qXsCvpboKn9Zdc4ywt6T8Qq4FCT2wQwY4",
  "key40": "2hjHE8sJfCxdYPDjPJy6uJEJW97AXQu9rhtH25eTZuiD1akDgucWhdvPUqezUjZ55sqm7QczMqEJZ1JXCto3WNcZ",
  "key41": "ZfMELVCviFg4gUgKCN6a93C5b31Nc4idshAoUCPpJDjFBucTt3g9avpFXsxpv7e2djvPV2CaGbUdxmGiooMzSd9",
  "key42": "4QyrFPm1U2SFaN9zdfFGNE3uyfpB4QHPoUbkiT8MY4XRFamcWFUfYhc6Hg4iNRgU4q6G6Siqz34y7GsUofS13CPC",
  "key43": "5cNq716msyn8rGfiJW6UZEnhwnTZRTk4ZD9cNUmLvr7wmki8pfVUraoh166vURyHoc8BQ4PRwaqPi3FHDiYAJVMm",
  "key44": "2svXF98eSuU16ysodE4CK32BcHk3UFWsAwxffiAyzoQ1GdmPpLdVJ2CuKdWpDchQFtx7LJwjrDRpehdoiNV6E62M",
  "key45": "55NytTKEcNxvDuMUFqk1GTwXVpFY1aoe1Q2vFZrDFp7MkwPyCVnZq2wCQQs4Z8Wm99J8rjy5S7sAwgEnoxdpo9kw",
  "key46": "5aTnSo2nrM4pK9rUtuaDWXduzoBgtnLyW8Gi2kjHdgrt1NnWEZ3Wyw8SjspoxFK3Fsm5EL5asTCvbyY2Lx4h5ub9"
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

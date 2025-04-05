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
    "d6VJHX1LqMuLr9uiZRdB2bh59xmMbbkx6hY3raCeLbmgKNgMJg3T8jKzU1do2xhNmX3PwyzBQSxrq133NtYjmBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fExKNvfJgU4pJ6qW4n8XGiBsDJzDLbXFdKiSYYENGFqJr1NJCriPvndUpSz2C8aqRdynaEhCWiNoWfP8yHaCoJA",
  "key1": "uBUuJaYUGFM8PDKHqy2JE1rc9yEzoFoRKqnRUVaUgJXfk3qAVqLtTdB5MG8vhWB4AFyQGfzaBshEBowyF7vrVLj",
  "key2": "5mdaYXdUua4FGNDqMBTy3TGVWXp1UM5gv3evJ7efbRS2yBEPHZXCrN7emiidiq7Ld8FdcXzkGExZPiZ8GqJU9ooN",
  "key3": "4mRkxDJKhWrS1znqNvaH8KKL3kJKnLtAKvggoP3psAJEtL7mqHsthziZkaZPF4qbSXzMRk18BrVHcvnkFxqvLBQ3",
  "key4": "5tgBBEUQAesoH3TCTaERs3kqTNFVKGYHCcCXn627idFr1yzQWYem92g951qRGEykwJdQtmSq4xcX7JdfPSq4QVbg",
  "key5": "2kCyzr8ytoPe5xCbwxrtS6Jo18YrwGa7doBr7wxQqZWmcxJy3SrVk6WttkzotBGBHCvXKsJXH7RxmThSq16BarWE",
  "key6": "2UQ562GC9GC14V1K5VjypHo2L8bhkBKCenNLW4UEp1cGQkC4DEXrBWDVY7vVGnYKRkRyQWPHBGuM2kN4gRjq8Jku",
  "key7": "4s8boYQqNuAVkwGkhLjoir85KDshcwpEtUJpvQbrWWPkbAPxUMpqowtybecBLSRgGT8GPUsPSA5vDt5Z6hc9cZEz",
  "key8": "5jPWDT5k5QHgXPtG8pfTgC7JHL1wwZQeVeSZi3U7qgTmvBDYRUyLVQCeHx9LjDQRA9ue5puqqPgaDq2XBNaFytv5",
  "key9": "5crJU6KCww7P5eouE69q8U7NwgFvm33tEbRtmKn7Uo3kKCYHHQ3ZxYpWALJtL6PXBgMAZY5zu66brB8mP4T7eaPB",
  "key10": "24o7aGFZdxAyinvxpHUxRAM6JDvaV6VaMhet4JpnuiYUY2CKHbo29f7FtgVDbfHSPu3nGkY3byw5p4q38DW3zJxq",
  "key11": "3boeGaHWHvBpv8oiZBogWa3uWv8gYom9NpxRCzB6DEyTaiju1vUhccKYb9wMh2DM7DUogMjrU2C2RMciEhtxC6Ac",
  "key12": "h4f737J8WM6i1kuxn6tBWbwroaRpn9J4DmN6KU333u9MwRQZUe8oW4LV9bAnR9cuDnRsP9kgmDt1SeKZ6s2krZ8",
  "key13": "q5CXG31ZoSgPHfnLR5GD7H6HNQaGnwWNdAKaJQPHj2KHe4hYoftMGrKb3i8vDSRfmNsrEF3get7PfjpHEpuPdPH",
  "key14": "2s6gymWj9aZ847HdoLM9U2JDzDcJuCBLYccNqJ9s6QuDmrcdDyWDBVKEs3qcNwFvWCMsgxd3VCwutjfA9mqoYTqv",
  "key15": "5T7AgnH8CkvVwBcFQFqB3qCPPvNdhEvMwyVE3xV4VPQ5Pu6qsHALdVLPyRvSWVPpDqky53R4X996RFecFGhTa5ck",
  "key16": "4voHicJUjURyyNTaT12TeaVBcL4KeJg7U3UxWER42FP4yCMHx76gV1P3i4PpqhZ2s7StyG8FLg6XqpsgftTwPEGQ",
  "key17": "5umxFfLv3TBBvV7qGMvpLQuTSJcHLaWQews9Z4MnrkPxy6Xj8QM3YdUUMJCA2bFPA9NfgJTXij74sYiyc6DYwvJm",
  "key18": "4Tx9rFidF9b9NDt4mSCZn5G16PDz3EkWkCtbb1WZybQ7C547uVT22GgLbKvtjhezHpG11WmP9Yr8QEcu3sKddXiH",
  "key19": "61UrazycXaJmkKWGdDppNrkPWPPsm2j2PS6cz6aqbcpHPj4s14aic8jkdmF9TzWxNqDRrDtpa42AoBbS6WFDnSZt",
  "key20": "4KeANzb4DfbDyrdc8wBXnLDkHmHAhUhHiHqskgUkzN6anyewDpmuD6qcp3jxU4nDoVfbnEtdatW6DEKX3Bsg6aSK",
  "key21": "4iYt6SVHB7G23Uu8ky1SygodZJCCXqEoSKvjV9zcuAzDngRJ41S8vkicvri2yn5JuAXDvYRHYr23ooPvCV9wH9vb",
  "key22": "37ryNwyHovHgmzBEJsC7qACQcKRuZv9SUBzUWi16SSny2jh7EG8byC8BKEE2H1sYVTeRFBYL27ubKHobtGYyTyYz",
  "key23": "48959Myu29vmk83LSpcUg73zLXg3whLfVesJbbn9vkExnYzB5GqhjAyAy2kJs7BgsU35QkbVmpTC3reBEiBHd4G3",
  "key24": "rGDs17VGfF4UhM6sD3pJDRdNooQCkgTUGQKAj44JuDvYfWzuPe98KQGeaTa4YPk1u1jKYwj2tEYZQiRnRLvJzNX",
  "key25": "nX46HsTm7Br43BRTiTA8zUnBZEV4nHAQc7vqaGngP2Rj3fdbuBggDNn2rfpbSQbhBMnHzjAEuE6fRCDchq39ZwZ",
  "key26": "5bTJAsHKoxb1YQT7GLejddsSZax3Rb9c7Yoxtq6XL637ExXywqCRa37ToPuDkvkfn84RMb5ie39uzrwnTRL9TJFL",
  "key27": "5YGDYhFanNicUrjEtcGbu7pfCbYjShXWCSyuwR5mCZDG8VNGUAogwnbrdhoPw2A4pPnc3TuSm8HeXcSLxQGabDd3",
  "key28": "5e6MLaoYEuBdaz8h59w1DgrimmDceakbzHyadgfYF7Qq3eZMkQDZpjKFwjei3FoDEGBXACzrDQr9sjDWWhWBZ9iY",
  "key29": "4PvsJyauqwJTeyHHbWjtb1H836pprihFnYD9uBG8wcf6psZF2vTWBnhmdjYRfN5gdR3r1iKmDmFyCuCxiQYSArfB",
  "key30": "2i15QNrknBJxSkCpk3K8CWdfq3epssE83LXLr4AEU8ydFTZEYgK1ZtbJujx1Ubhr2GKMG7h7PoKPMdLynQpt5aTH",
  "key31": "3omsM7CcaWpYAsqK3CCxtvM2hAsUfcmyFa6AXECNKVGL1Rq3miUPJVBThyCwAeFbN86SG1Y7xAVaLaTT1ncCJcsQ",
  "key32": "66wqzHF8TAZ2LLDPCbzGPinVTLPEmvmKtM4aM79rKAPvP2F3XHpAENkSRnxBoZmrfUGpkkMf3dBrWsDUtxkZPavw",
  "key33": "2CctEZD4WzBvB3DLRDuR4b2R5aW114dXtjrxbxSQoDxsGqaUy4AijnqDAHPktSGb1189B5W8JrYKfqw6PpFLhG4k",
  "key34": "37uHC2frs5AHFqJD9uPmLkLdiPumSHns1o9mAzTbuozCY6p83mTmewNd2zq2fcCxKnrYa34S3cvkSpMXb19DSnmT",
  "key35": "5ShXruKB7NCmWCuqgrwvmqSMhVMkPBBtvChg9shLbh7wM5x6Du9i7mDJbyV9m9BnMeDaFJTxeCj9etuRf2Rs2EUW",
  "key36": "2BJ4RGi2NpTWQGpBfki9qKyW2ikHkwMXdrSRf2XYDLLs3YDLZCCFM1v2sV83GbSMFcQ4UGPxgjHSVjv3VkbR4Khy",
  "key37": "36aaXf2ZNEqM14VVqyfsA67wvBjwQSYARmTPtvNtoR1h37wEvTkosUrbkAMDy8tuQJhvokQNaKrbH6X4kjFTvRKs",
  "key38": "5gJdmk4YWCwKanJUGJRdqqe8epySWRX21EyFZRTxTW5m5UDd16g5dkbgJvJeiyKj87EoH4y6F6Szvgq9Jf2Uahu7",
  "key39": "4KC4g5BGEVV1f2CM4KhP5iguYBEA7x5eQwnnJUSRKnyrE1FtXyY8Wng22zbyeviL9DuvZrcykwjxEViNyWPSuGEE",
  "key40": "4UkQekEMKeSm3G8SAuokRgFDscALbY2e7kiqE2nBz3wzjKqpQ93t5JFtVBYJBrYM6KUjcefaBtaXM2BHzoymGpBg",
  "key41": "5ZNkB7sKrZbrzq7LZLvLmTTW5NP1ExMKn4r3XGLz6BgUAXTo9HXm9CZJwWT4czQXpQsv7uzJ8BY97VioXiVfWSBa",
  "key42": "4hKzuHS9DVGeg9wm2Z2PKjPeJiF4yejDVfU628Ug1ykfcSmmMx6cnzGo37GP9HGm5yApAuPf67hDCakNHGwhtbvb",
  "key43": "4puRDM7sUWP5sfHVU363fALSeGFeu6gwTj5rAXvGQnnbYCqdXGTvF1CApPP9roTbYa1K1cHce1t5G74RvPU6XMMf"
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

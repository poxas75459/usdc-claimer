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
    "5se4F8J5uS3yXpRej4oGegjkNRFfzpWjp3rgiJdztGSgEu8r2c4C8u7EJkEvb7F858DSmFbvTCgr38JX4z2YkvST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mw38B1MLQv8hxLqakYrXo563gYy27ycbr2uV72k3mCvm5BJUKJNQ38C2ZaCrLJnVR1iu3uCUuCMWKNT7KSzXs8S",
  "key1": "2Yyt7RB9MbTA15FnafhxDdoKVmjoi7vUasnaDJou2NeqBNpRNf6WjCemhnCumhWRP9AhgyMAYYoFKThy5Hb28jbw",
  "key2": "sAEJFifWU1KkCEYNFWQPNzUKUQER2MGXx7gby66aahtjkzUUsM4cHiZkPGhgWnhcBiKEpt4jiaY4oW9YQcByg6m",
  "key3": "2tkaPSfCxyD5zGxHwyPTurBVKJPNRAKmWZvMqGSgtCTMZPE5xtdqsR46SmYeJ4Cky2X4woCg49eRLvrZ9B8qEyXx",
  "key4": "2QZvzGrbu8EWoPdbBvB2gkygSavXnmCWoVga4CqWbsGCgWCshukk4PvJEMvFQkDmSvSGLyMroLjzkTinFUayuFx9",
  "key5": "47zD3AdrCtMuFeieXtJWqzbqPi7bodRuijCKsVGzkkXZTvun5rmg34PCL1vBMVoEBfQVTbCo7A7aGjtmchKRegHA",
  "key6": "3d2K5dNRi1bHkt8J73qCUH7JM3dzqiqsLFsjiSmb6Gq84Bw3qNrCKk3YFAk194BwRu9qvFcXAHqgSp7cQYFGwmSP",
  "key7": "2eaodmfZaiUr8dvTMpvDxz69XQxVTSPtyCboteiGsyY3yGbNCejv8Q8TGDjpsZCgbWsxjJLnbu3Zji6th4o3aqwG",
  "key8": "iFqtbLSaTnbJ7kQ1ccvrqEfptnL3cVHvV4BKmyuG315AfRdxQTbAF4XBv1t52jgDerFL6uoBy4yshavwMohKWD1",
  "key9": "3jYdCJWE12p1BHnamS3pEPBSu5GvY9rMHXhrVThvvC9wpQaFvWW2ACqfxfwtu17u5zfJ1God1tU34mVhbNnniPR",
  "key10": "62qsiibbKPr1L6wnz8Kw39PqsqsdUEWVuNhefaDwLf9fSwKuureoF2AqhEhRqvq2RwcLF7U5dQPBgWm9bV8sYbJ8",
  "key11": "2unztU2k12tnJ2Fvnx5L9Kq54hNWvKCF2RFF1T7etd7u7YtsvxjieM9euMzJSt6CDzMYW1J2nFwWtJWNwZLECUgz",
  "key12": "2HqkeTkieLHoYtmCfxCVbDdzjCGJrdfh8Agzgb3TbGpXDXZZwadmzV6Xiq3YvPdruaEdAvD9qacdCYCVnd2B6Mts",
  "key13": "5wu374g6WH3ToKP6qTm9ak4JurvsE1XjDqUmqPQaZvRXG5VugTJZPJ3giv6ATiGkwcZwQBicYMqk27XPyTXCzS75",
  "key14": "SZiaEsKsoFxyp9WgQtNwSwWB2sz4Px2oDCEDGm2c5zjAUpF7yzNDi2UEsV7tbhr8ySeM1mARJj7SL6FAYWrkXCb",
  "key15": "2QdMZXCkEnZfTcrqAxx32Gspg3jeJtgTKYh2ogitnJjSKSFcadCAqLYmYH8jr9yRmvp5bWKNRGZa6ngsCdpX9T8T",
  "key16": "4iF6MSR2L3FAtvRDBvwwXJ7tu3eYv9aNrgtZvYJcfvNdTzE6W62Ur8ia4tGi2KEuho2oytC2gyiUopbtD9rygAUi",
  "key17": "2y4WfX8LhvuR7jypDcd5dFge1xdZnqheTdZG2R77tYYoriyxSqLMj694dHSxWwXzDeNnZoKfYgjy5kKPTLRcnrwz",
  "key18": "2R7sEG7MebpvTm4rfgZ11FYLxYvT1jaThCuPKwtSVBsyBJh2xH4f8sRN9XhKh612ufHpSGrPaAHtwciCqXWUUUEg",
  "key19": "4TQtx2pjVodvxPh4RgWrfxq9hUXnbKvZAqtezgUMFZAw1tfXNTTzxu9Hykuj2kBnVq3XG3uMU4MpJQTATr2PHy7z",
  "key20": "5uE8Whd6CfvEXtWbZcHoFnxXXv4677wz6qaKk5sSHDo3akW4GZfSSYBnnkUQ9S57854pHPa6vpbMsJjx6kzAcAeJ",
  "key21": "QiUoc9U9z4D8GEQ1YP4TvD1LA5gyLL42h7TEJnin8JNnjeqsNNSNXNz5dGnJQPJLQpSLxA9imzwDfwGz6yAZUto",
  "key22": "3Rxm6oBzYV6equV1nhrbitYoxetYzRPDsAYq3tLSzb68QMy3aCkV6k8tM1Ghiwu8ARVHJeGRx4FCuWHkCfbAdXvg",
  "key23": "4x8HKoF4QFDGx9RVQyyuVTW3cukyexHP6qq49zVANuz4QWFKdzAknxALuAG8Vrvj1jiDprphpV4Wh1aiu6i44Ccj",
  "key24": "5eiqBDBUhiZBHbHdkah3ZvefvkieEKwUxycjKASmJJpFsb66tmQjv3GFaQgAZTy1M6CK2LTsDpfhVv7Ymhg8URVr",
  "key25": "8yCkxzQhRm9e9qaED2XXbA2fdWbXbSvWAdno1ZEgQyuXoXLuGwGfEyuxezEFhoDYdMEA2qwb7AzJ3hB2nXSLgdM",
  "key26": "TKYTuXnHPxBq2G8VbrpNZmoj1KSn6285TLnBuBtrfKZoaubn5veNFwtAfB19NNet8cp7EhKykvwSgTggowVM7Vw",
  "key27": "57s8EQnveWRQFxSxnNh6i8KTZUExaJcudhUPUhyTuLNmouJSz4fShCxckYqhgN3zL22Zy7P3rGqkoQ6nsQ5U7eC2",
  "key28": "26bE4QVfsKU4eWGBeZW8doA2ABvZrT2jbjjyKnuZ536m32vZ71r4vJdo6G8sMgnuWEffefVkxTP9A5q8Lnuuy6pp",
  "key29": "EqNzSBjo5Y2FzxYKLgwEMWU1xB3v7deWkgpQ5bwcxhW7WftthQTvMLZ5tx5BHKWiRdBPnYknvPcFz4sHKGrXk3p",
  "key30": "nNz9tNoEVKomYHFpF2dwFEN1ULiT32zcHxWD34DwyxPhXDhCnUuCWuTBnrTwERKzehyWGLDXo2Zsr3gj7k6ktwD",
  "key31": "5ur6kY7NCi4Z2Gmp1omjUF1cQo9Z1uqT6cQG9qdKfpWBEm9618MPNbP4J5sTZgxR8bpJo6adacnBL8cZzhL49QSf",
  "key32": "2oQmgTA6mkV75efQ6XpMRC88dBkuXB219JHDzdTNxjrbtxR9fhRjx3y3qNc9riHzURiuj6ZtLpT8ZPJpF4Dqzxrk",
  "key33": "3pzycwCtbbrE8x6TZoa3Fmyva3Nf7Lf5Ki4onLckLXfjEXhBZZxjRxUxJ3jZhzXw8NhTQbyRSinGx9voPodzstCn",
  "key34": "3q6kx2WhFNdQ4ZXNd2oSKzgHZTUGPSGVEunKbtRLY4SEW3hea8ZBZV1hVMJwNGF7Y3NkDtBmAZkEeNhY14EZZWrx",
  "key35": "69Kw2Hzo69RdP6idJi6fqQu1eRzxqou4jS9wuNWenJTnaeNi7szzrb3942gngcZH3M6L4SBB8TL8NCE6ALErvA4",
  "key36": "3uWYrUgRQEZH9xagcCGkY2GTvKfxhEv2Y3WMRwjULcWh8zYaLdWPnmM8ubbpj4WZ2hgRpj4cPbumqrpDrsLQysVy",
  "key37": "4b7x7GNT5LQ8ww4ExSfc1WnYKcmor5Gr2qM6pVdUgRq2c1BRMc7W87ao6oQWUHbgwmCfrBafz8sLdhmwkgqh3ayP",
  "key38": "5q3goKRDGSdDP9DfdHULGDabGKuZd2cSm7ZDs9eCChXkNg4s2bP8tHL9DwKc77skQNruWJeRv8hSpyBNRUyo4MaX",
  "key39": "5ZC9KpVoiz4gp9uoHVKoEWFPa1MaQXPzveqrkMfho4kBmut5sA2i1nbFg2xKeRdqfg7hQ9HvX254upNKQUx1Nm8t",
  "key40": "3v9gKqim9opMKPBEUk7iBgmd11uDxcFuQyeiEmPQaEfSw63UbfKbQi4bSsWP1Aq1un7naHTxxAgKoJg6duytUPZ4",
  "key41": "3UUX7hVydZhkSkAShu5VTeZs5BTwhfwqxzNtnv67ZzMtrWU2MsMp7tJ95BLW521aizJzRjiZADHiKu2VHVP9SoHs",
  "key42": "5oR2kshx5CX9sX5aNsFTxPUeCC8CkyPwjWEKxsj4XuNGWpfQ7bCbjNjJ4DN81e3EeJCCmBw7v8hYnV56wfZuXKaZ",
  "key43": "2kTewKwEFdudM9NNwUPsv6GBPJTraMbx5UEzEqfpr8Dk4V8CbQVkDifNU2g8vgcPEkfrVu8CG9aT2ZGRiUvcKyNe",
  "key44": "4bwjJaGiC6UDi3cJXhgYVgVZMuJaAK2uBHxsqnyuL7uMgVFA33EbW3CYR36zEh4wVx4uNBBrG1UgVit8JtM6K2jg",
  "key45": "4sc4yPTProcbufYhCCVBh5TPGe8fUAvxeGbs2ePVTonjrmkbYgqikH49J1taUrVoymrXi5uL1SoTTj3GZnVDKJq1"
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

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
    "4iKSUTDATScFSnPsWXGSH1Dh8PbedxgRs84gDiT5xnebZtQMCjT6bpfeah6rYotLN7Vy7h3cqZUjeDRmjQ1jL5ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pvyy1QiBHQJ2oV6VqBZA1JYyuUmHbbcz2vwqGRVTJUHZz2dxzzU161mcnyCqYvbgDmq5RJEVjk5e9Df5BHaRKob",
  "key1": "5MjCyL5MFYgSnUpGqPwrTxxqRRSeEdWQJK6gQYbroxEEPfnCbhTVBNj72L3mTjmsbhbkyJZh8gfRN9jRJH5XSuwJ",
  "key2": "49WGgS5qRTs8YAdLBtbfRrsW6QW2VWquaqGbnDPzTUra6T8u6w7FGYUmd2McS4qwJZwA2nUeUmX2s1nKsHto6qNV",
  "key3": "4KfYrD24qYKYLj7QbX9jWMxXeRkvzwAn1o1xMt718VNv59DWFpyLeCD5L7HVmcDiTdQ1dXp2hzce9RLWTaEz1PLP",
  "key4": "3UMSDu5Q18BnDNfNjCpy8Y1g4Y8m6fetTeWjHNuD2dF5HV5Z7tPCHhiuPrcoNf4sgh532RGLLycoVTYt5hJ4F8y",
  "key5": "2V6LBpwgjiA7Thd2Zs2AtDpQwQ7wu21A1VDRy4uzHhxGGtkxS2LQMLfcFdEbnYZNTriFws8YVnJSwVbDhRp8HKwK",
  "key6": "28AZULi6SXScjhPZtkAmKunheuRqpdymSGwoDt1ZajUKsHDZ7FhjLaJgj63kK6h8xEygyTbMu7XJLW65N5zSJBb5",
  "key7": "2mwB2WH1zFCLmoxqLrxgffrX21rhY4dKJTbyysoW3zYqgZupasJ5kB5EgYjUYSWchi6DRQthTyzseWvirw8Xg3eV",
  "key8": "3ZSUTCXMVe7SLERdM4SmyruaDdSrgznqH3HxL8Sqcx92amSLdT895oTW9gtJGxZkAbd8eR48NWwqcb57MPcL4Vyh",
  "key9": "ezd2cTw2aGK48EFnchiWiyRV65YxfNB7P5UXchbhsq3RuARpttMKNh1eoN8kQtCjUG8rbNZ1qqW78FG4kkwQBRZ",
  "key10": "5iTFeWe7jHmuGY3bZsxinbCQ2E3XgaVT7d7jwr2JutbvbBpVbgwTnSfdsHBmeZvVgfj9ABCxvJg2HZJCCnrVeHHw",
  "key11": "5oA1e8J91fYArzNna2VE8zm6avQkVB9prWkGCn3pV3ETkWrKQczsBJQhv7pApVZVGmip1SmcWgVPvsUernZUKo3a",
  "key12": "2uXvGdFHucsM7gw9NBoWDvrfrYfRLuhuqbNxY3A1ug1cyKdcnqGN86UQgTxp9dExDMvPwkEdAcJimyLiwjEkSgMr",
  "key13": "5LZc3gRZmyPVvzTtCiEEh7tqrVByaaPaTgftN8DwFaQNYY3K6WkG6Rf6JjayDTWKhpoyfb4crPsKH2qTtXDYdA2W",
  "key14": "35a1oyd8ksfEuNiatbF2njQoi187eKpGn3RdaKg3wkbHRyzGd6WK3AuRu7X4TvpYWJZNTQ6EiwgS83xEMeNBn8SV",
  "key15": "66dPt1QmHcMcUxgqqEQu2aoNHrLtFaWaT9DVWm7LweqdmyKjJLXm96FBTdk3oTbMJgFGNMLbZqtmcVqazxZpDKFF",
  "key16": "3NGqqpSmhdezxqXSFjgxatxHsvkf8owRsHQzG9yAuoU2crHYAU1RgcjD2MPk7MXKw4vLQpnNACwnD76Qi9tYSfWP",
  "key17": "3fkPbjFhaBPr9EfqDxWwxXfhtAXcoJ1jUNgSrjcFibQjJfAYPpVhiNf4UgkcKmdeFAxbZPQ6akrk6itBdiauLhJ4",
  "key18": "29nvssAUvHJ1ECsadeGa556faahoCkA5rZztgSSetmjquLXopnPiPiQThMVpSk3nYFfciywZwoC4UzvptELVdnqE",
  "key19": "5MUbuZ3pErXTocrsitbX5TLVjGSMxjZhWg4WBu1qWgQKPeitkiobcKrvWXZ9x77LtYtuhug63mcYiu7f4b97gLhd",
  "key20": "4h4uWeFapMf741HfqQh7pcMRKrCEHDmZXuVyWySJgZqXYwSHKBiJSCk3Wa8hjn1M4mg83vtu7QFm2aGC64mZnfGW",
  "key21": "3ou5chyQHr31PD5f1BWmYyVDzqvoazzqj74pV4apv6afZgwhrdUZJiaCYCgkwvHQdbNpRpW58FPvj5MvaoFDdjFo",
  "key22": "5dqXNy62xzu3VPnk1z3Co6GuEwPufyR3VgapojJF1y9C6rCy7zMA91hJ41f88WRdPWqpuCiLzCQagqT6axg446G2",
  "key23": "8ZZTFSUG45EizXRgXpTCJM96dLjNjRVa85oQJM7UAxn8fn8BDoQXMmqAsTBMAUr4sGmZnf9mAR2Fzg5TvGcJEcu",
  "key24": "5HADA9JV3thzcxJoaoCxwi6nPRKdMc4NcJcrgcbfVKMpxFR6QJXk8jaE9HxuBb53DcM1nob15kRnw1imdxQtYWpZ",
  "key25": "2ubh6SDoRQpPFsAFjh7nP2KMFTV8odHgURAu5dALsmeLbMFG9UoyNgXXXf53RTXThNEGcBbU8huww6tbx1ghCDmN",
  "key26": "3oWyiACiwWiKSsULp8pWgubJa79assNiF2W5fuJB3wpj7q4vVcfT5xmeLnoZg8Vx4Vr4FtRr1QsoyJM12mSrazqb",
  "key27": "2rg256oxy16KQGfQ8o8CsbBpvscyvTYK5tQ529yqjcLuQVSrc6weP4wjrwoZ6MSAoaQ63RiTuu6ZcjoQgcAeqCqg",
  "key28": "3nPxDnP4XxD4SU3LvpGrnQaq3Dqc6Wz4sZbLw9ZX5avMpBc1GiqmP3wv2k3R9vewukcBBUCHrSfD9Ga4ov2pmJCk",
  "key29": "7wcgDapDKjuaWRdxfY47Q8ou9JSUH79RqpbWbEaGEC1wQjihCfwwrZHdbp11X6qdFhm9tg83C2wdVpciwZfRBUu",
  "key30": "4YUH4kdXb8otd1bv5bNmsC5cpSL13r1VvKmVfsoHzy3s6njbuoSZwnGR1i8Lf5mHzhZKxH7F8oyYtNmuCj6kuRqC",
  "key31": "5Hrd5sjXW5vUFmnmyv1KupWUuvnDuHbRh2CzYUW2r6Gmf1b7savmahCgXcYtHsQumxd6U4aNnf7PC1vPNpsQ8LN4",
  "key32": "35aSqPTN98MaAeEt25C9wsScHn1U5DHGNqxczEL4GSEs7T2s6a4qGYnSsG7TLMABycAcv2t465oH5rNKDr3KERqC",
  "key33": "4NBztMPMgNQ34fVDKNtC8srYGABNRKthrJ6Hp91afrh8L2ws4vSYY2QhaSWwBoB55GeVxtbFhCRRirJRR3JS43vt",
  "key34": "3nb86RAMrEbQ76dZhx77RWg1DPcNfvSUKS9Z4NfMQx6p74aBJQuvZzCkWb5VbBjMCLsPFkhfSq7jcTPKhkoheAEc",
  "key35": "5JoHB8KPMDgdgBMXcLZ1KP77rMSr3WX3LEGM1SCfpTrPFBkdHjLbSexHLo1QywxrTr1aYWaoV86m1LvUKMzKJoFx",
  "key36": "3AvuQCsZS5Sd3VDgopMNKfkq3B7iY5r4C8zY8HqhDhtHPUrzKqnZfC5uKtDavHWFW2BTkVWKnYuyVx52eGpZiEM1",
  "key37": "4jHR6Mfe4MyNfEHYWL3seACxnPA8b53WeJjNVtwwQSKzURCQgZziA1Wbfnk4Jfwfh8qNnAhkvDHU3MT1yC5KCCey",
  "key38": "4GtnTgE7EtwxZnaTsxy9MZ5n7cQ9Khurvf9faLogqDqkkzgYgtAjePNHULQVKacSAZDAQE1AeNfsV8nLHtPj8kde",
  "key39": "3xDDnSoyb5wjyASX4zhvzxxqBXZ6DZPicpgmmvzWkiyqux2BGG1AwXP9BwsKJ8qfSa2qbDt16WsET6gDHKPVdnun",
  "key40": "MjRBCVdKM5Yd1YbCFxMmSE8RFtCD76PFvuYhb3hHkipsb6KU6WhxTJE37TXXwgFK22oG8t8s2veEMFQj1xEgdDB",
  "key41": "3pFHH14MhWRy5yudetMd5PkB4yXErRFhhfxKmPjozLN6bzu994imvVCEAi1iHZUHJ63hCfZSdrqH2qZTH9Kpt6uW",
  "key42": "2GUzvv695SuR4LLFHXxadQ7GDxGHWdCSZPHfkAzB4xy7njc8LQT4Uo5CCBDkUZvKqNqHroeayNzShs7DGYguXs6C",
  "key43": "5MLiYTEupGvcqx7wkfayyLxPjxsAw3ReZpoi3jW8ugPtdTQaacjMFrmPNqsbj6BoBx9eW8ZTzQ7J5C8WZ9BuDWn",
  "key44": "5jftx7xmTbxTTCvrwG7ZujoUeAwSzVWTEPNE91tGAvS3n4w1USkLErR5j5Y9Yr1RYjvjDwDbDnbfdt11uXFB58Fu",
  "key45": "2KyZXzF4yPAgGnPwDFgScGntyma7AjyAeRH5EU4oDt6bCrziVZwRiLfHqkrczu5rVHVhX8Pv68qHMwx81D917vEz",
  "key46": "67SJQkJkiPTKNccJf3cH9zpzfM5L2YR6ZEFduAReeAPkKbustNL5r92g5o1aK2nSSMQSTvHUFT9DDzZmTstEDaXs"
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

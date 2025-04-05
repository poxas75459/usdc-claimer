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
    "2VmyiZZXMrjbvj52epYbVSgWRcw9JUPmjTx3gY7kXAs7K5ByofxbW9MiSk9FVUzK2gNkN1yswCnsJCiJvpQnLLca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5s3P5MDLKjsN1Nr31GTVYRvvFLhAc17UC2ygBZT4XtHQ4VF6TaiWvr6QempvNPBLyL5Wgg6k3ZdYBmsT8U7gcv",
  "key1": "4pyFUfQjpjXk9WxvSFtVJub6UhPxEGuwZrigCEoUFCXPJjX3nUKtRQ2KCN7JqLCf37TEiVaRsoqVXf6s4Uin2Hq",
  "key2": "4XguvzYcF8NXY3VdWEj1LGkTRdWgkfTCvYcj6ajTNMyWNCh1hQSHdGDKANfAQxQcNm6mgojJcFNXxWs541PqHxLx",
  "key3": "4BG7hza2dUjuoHrc935rNMRYFqi9aAsaT1KgN9joKFvvMBu4xajLjfqLGiLR8hs8LgYtzVu4j9qaHNj6KHKvEjRT",
  "key4": "5xjejoyEGh1vvYii12M9ikSctFuWFg3Mvd5xDyr1YJivitGqEmKvToA2NzDEe6Fv52QQ5Szh8jiFhtMAmvHc4g4Z",
  "key5": "s2P25LAPD6HekQ7iM56DMEbfQN5yGwQyTRLQ9z5RSbcT8mtSkgN2kH6isHE9ZCK5Zzjhh5bRnrVt5DjGu551BqL",
  "key6": "1ARerXyhoSJ6uU42JyJr1ApqTiiVUMsBTNW6DEEovGFW9r6KUjEsNRWGByc71D71vJiEUGJggPdqnjvN9EkiUGt",
  "key7": "2id2coikQLwNgodEQXEeyfnVcQ5XcqVYUVw8wY3CoWhBTUkznizQuEj5QeY6yDooTA1vutfDPpQmfFBNr6NpsmG2",
  "key8": "49wdaFAk7M39sXqqzEgs8kU5Jz2Pz9VDz7SN2pXruDaaev6v3QJtRK2ER1UwCPitSGTA729K3dZdaKPrTxF6QuiA",
  "key9": "3XMeE2hw4UCXZKNZ6wqUi6etXEib5vdueE1UaZi3c7oAp9mxRcNvfbuupgLXR9QcEps2YmBcmeehrimfdQwspNFy",
  "key10": "42iiwkGBM7gyUFUXJ6jRzds2dXSY9TdPpTHm6tYHu8WoSHapMkkPg1DP4nNHeN5pwSzYNwq56AZcEmiqdcE1bzDh",
  "key11": "5uDJSM5Bc5u2C1mbc93sPLizgsRwcQVamx236T3NDE9oPDBA1pSRMkkEsrakHV5BakjQN1h1th8ghh3c9ZSDU2KJ",
  "key12": "3NijHgCrNULmzfNfVXe5v15FCSyVxPwKDpMckYAk11aUPwsJ9pNGskondjnCxdnnMJjym7mccUDC7QqnJEKJC5oS",
  "key13": "4qxHYXD262fHmgtkskB1NMZby8NBc2z1FprPw7XEHqLpyrtmjJVFHRREEKWtTe6Lve2ggZVBbkPie71XYqps82Pn",
  "key14": "5uw9wSpLjqUxvLcWuXKetsy6i4wnkbBV4EnuTyDEa41x9FDS7ki1gxXzfjtySnvu8fq2WASpy69HvAdoZA5hBg2d",
  "key15": "9g13y1ZwNa8taXBrqAgJAUQvPmo38XJUaUBYakK13JfXgGDE6mskL49JoyxmfxywV6sc78KCzcJwkRCDTTPQMsa",
  "key16": "Nv8KopgQKfhoLAzq1hoTwuHiZYwsaRgR9AH8xBVoYUsRs3U21X9Q4Jmiyw6dxosiF28C3LYbXdq4wTdFxq1QWi1",
  "key17": "2pSuzU8rmt4hUHun8EX9m1KBEeTVsUhn25nKkZNq7cXz9HDoVXfHBePQMapkotsALreuNNNDMPdNtHUxxdM4n6RE",
  "key18": "48HtZGTGBDF1wGpn2rN2cC2wPt1QzStNXSh7NJ6d2zSfZYarryzxJroiXRZuWkuYVr75v6gvbCELEccGZUpmt14Q",
  "key19": "5Qrqxi5DhXFi9NCEr7ZD3oNAggv35tSSHh4AbKLtmm9g4RgDaudAyBKjG2hFLJCor73x3PXSEV6H2S2m2oUcuLrH",
  "key20": "342tDFnFcQukJsLNBx4vCTe8L5S5MubQVcoR3Gncc4CzWzmc91sN4Hp6n2uNQuCL1nkyr2eS6F5Wzh8M7q4VDfUQ",
  "key21": "5Asedj6MvnDm5CYSXA39bbNRyDmcpmTfguv2KBdPomKoovW5EyFXVpWWEvwNWuM5e1sFrpvM7cJf7oteLibD1DhP",
  "key22": "3LrYv6CtqHPuLtvSA8qoPYaLTvvhKZo9LFmRP1X9PsykhybziibX1eFhA8diV6Q9NwWbFWFXyWzfSnQEQk5dnWbK",
  "key23": "jcd2kGaHzdaQ4PSYmAYy1xoMPVyjrkb7MK4Li1WxLhTEiDmzkMnjqthfvK1gGUjieDbsiaFhN6oczgpEuT6dWGg",
  "key24": "4nkPAU2vrb6ziEHzvQg31d7Wutt4wS1AukT4j1sR9ojZTTNu7noAmFDe39U3AbJL8W9tdLJFi9JWUiMLHBKzZA6c",
  "key25": "56TZKbCX1sUt8C2gKWPU4zxjkEmVhudmSisoZ2VwoiipDVgiNkvkUQ3zHFbCmJDL23QCnf6eyo4HDdCc2pcXugNb",
  "key26": "4wrPwQvDDXXB7uWBMhbknZwx1WN9hUbVZxA5gQEWiRDXcJhKMhXzvzYkH5vUoi9nGJdbYiUxVLVq6fAaKWcPuSoS",
  "key27": "2dFBivya1uptYSKajnAHa9Q62qVQajxYwpt2Ww3gjBPcA2EAUfGWv3SJxcq1gVBUut5T5tY3Qz2QsSJhet12xmiW",
  "key28": "5UQFoaJWLPrpq77pXPodxpCcEwLSpkyWt4JFLPdyYCc7X3QsKxd1cw6xAzedSsVQ9m8xnPQS6mrgQM9RUS6kyDgX",
  "key29": "3Xf7NqLsG3AzzYT71vpw6tYrmU9c9M2WXQvdpJ4CTkYNoTdceNTpiRafMPMfYZW1rnMCJjLyHAN9AgZTCzMa1dbJ",
  "key30": "jMt5kw3pd8D8EK7P7KaBb9wAt3V3DCxMj1dfn96Bkr5K3dk46EDmrp64A7bCWcYP4Ho3ZDY7jDYFBm83Eg5bsSz",
  "key31": "5Ay452E5CBCPXXjNZhWDi8x7LuN92QUF1iMoUBt1tKq6JuUceaFVVtHRzGqsXQ4T9LDVFLm4xpmpBkorzqvtCHyh",
  "key32": "4yrsNRhWs8qyYUcZ4c7mZ9Yn2v1emfbMmKQDbB3pbVeBBQPLKWYfoY3KSjx4pc8Q8dZM3NGW9AuhEPgWhT4zPXK4",
  "key33": "4U6YuqDWYwfQy3NCTubsCRVpVzFi5ktEChDm4bGZjAp8KemF8E5nqNaBXiTPGPjBiw8gxrrnHJV83WJQhwX8417q",
  "key34": "5KnRBJgrBsCYK199WARYLwP9jncbhUEs3Gpg3v5dCQXgztR1fWf5qZPGnqQNKrwStHQbwuWTkDveMLvAQhwLwUCC",
  "key35": "4t4CzNjhA8icQhW7wZWMjfQKq6Sxss7NCVfLsKQnZHuCr2EVsEm1gLEj18WoSaSzFsBVQA4NGW63p61ps1QBuAwS",
  "key36": "4otV1TjCZnvanb37GXPhYHL2WXUUBtLSYZUGYqMcZUhLcKnM7Q7PYR7oyUZfwy2VktfdFymESoakw35X9PLVbtZP",
  "key37": "444wMZbvJoPqLkEfM6weLQUL5kFt6zN2xg2TVvywkWgeCAY2cw23WpyPvqgmqziQx8BcQeQ9T8KNpd9gEqUU46XT",
  "key38": "4kkWCuTaKVXLWckaAkoBNrSWUzeDz8pBTMkyTrycB1iLr5CmAbRuFnQ3oQHo74N1mf5y7kfce9t9TcweUrbUFW4g",
  "key39": "4sqk4z5zFvfRP5Lq8pzkqw7252wefT5XtkkYuhsUcDuhJ1ZrTTNVge82Wst46i7npoToujxWu8qNpuS5Zq9bTLZi",
  "key40": "4NwrdtPBjoFdykDvdBwvuRLchZ7x5BYPVRad81kdgZGKFmrBveSqLv2VKSU9FzJisksWeuDHV7mDZ5CEhB9d6L2k",
  "key41": "5uoPfX3Yyc89y3wcz65sjvuKCqDNQJFHu9nguuJbMEQWEtuw6CGj3Ke4344YBMjJg6B9JBUjpzVhDCniYmZyGTkF",
  "key42": "2ywicMfEG7DxL9hy1bWH1jnF2MswBnzYPxCYfTPPR49VU1M2mZHz3nizD8PZgnV3BCeEMFiR1TLZk8UfJ1zT7gxS",
  "key43": "24VmzEnhHQ96UsAs1VMtJJVqfjiWqinaeDy3PjauAei9DusZhHSj5yXkoi41qqKADRX2u5Kju7vkc7FupVjUxkgs",
  "key44": "2FTqfETbD6Qg6vfNGBkuPtPGnUj7haDawawoizw2igQU1xfReqmTAmyydZQNZFsTxpz6aVrMN7AQahQKvuzdEYGM",
  "key45": "2k2RuWQ8vy53ETJD3P4Q9Qzf7jLYZJsftXegjHu2KRpd9FDVC6LdjuFKxTAVzuPfx4zb27BmZAzJZdYyiwkzSmh",
  "key46": "4LwHkenDqQ8tcMG43gCXooPQUEsRrUWnH5ip2aWZj1dgLd6PsC18Rz99456uCngSQ6aBnHC3guHNkabCmqDc7jEz",
  "key47": "2jnFfW14ctqT7CRiw6o9seRWHnLeb3SGB5BguKopE755QCL9Xtk4R2WukPwV61bsSYGr7X6BMjQwiJcQHwDgex2g"
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

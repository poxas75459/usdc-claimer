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
    "67PKC1f93hdZptu6ssgdPesuYe6nfUKqDd4i47To26Knc1sx36DTQndnwYY7eei4bL6TagzNfLHBvneNbCMXnwv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QD9681rNo6LtY73VrhjvDbYEtULxkaGCUicjxkSMPgboiT5xMb45zaqFXpphNHrLdECbN6gmMTzDf5BNjdZ9ZBL",
  "key1": "nxArUYzJch7SEEsZzNcVHpKnCspanhH98DEfBcFp6L6JADrcDch7fcmZsD36GP5ieS8y7MouMbPsFT9YnbmHkda",
  "key2": "3cNmfL7ptyGjzdq5a8Wsfjj8EwmYkVo1zn7K6d9KNwuWLmCFPQNhHcHxhVdgZfUGTDN6upXfjBnueGePGkRAsWzj",
  "key3": "5gUzEwKUg5H37kCAzTinrGdzeeeTuVK5rmtwXK7WviibXrjdQpqkVoKnJdVb6dp81KiViRHrwiomgHGfPXK44oxb",
  "key4": "2LGpqJeE44pELuqsNcUyqJ9EXuSdVi4K45tVwStiG73a4gzYbyUTkyszGSwCxcpx3dK5K6ms3JPSSrR63nA7zJHN",
  "key5": "vstMty1Re2df6v9nA3fstBdFDoqerLNHxGfnwfVDpbfhoNKf174qxnhZzLBQMUppuGNSUW5RnPbogDnehcCnUeb",
  "key6": "4Bsk11CZDJsUV9Xw8TqBGHLas72zAUbofZrLSv79E4BjYEH3FQYFsrudi8aqeMhzqShQPMT4UvjenRGFjuBbC92a",
  "key7": "Pj2fGxbyC5peYYKMfwoDXiGzErGZQveNijVhJgV9BNAJPWPZb5iBYvsU9xbHXx6ejrE8T58DCnq9iGe6U9Zk21o",
  "key8": "DNgWUJ8dT9ejytZ8N9FdCcGvaty3rDbphKwdfgHsSCJXGMGhRN1ktmqfFmx6pfhxhEoat8kcFzNNJEcujbApaGQ",
  "key9": "3KwyLjVoaWiKBchHMF619J7ZYgZNkvukwCchz5jDR4ev5B6SvvrZj6RMftqjrMd3nQnJG74E2NNNEcNY56R8nxt9",
  "key10": "2M8D9vJD7JHCtKFXZJhP9rWutnhrJadoD9WhxR7yQToanGkDTpKHJm14Hxk5Z74oQufSJ17HCDA7V4ae9s5p2hB",
  "key11": "B6zgvmN2hRdhKqYWupNWYLtwJKbD23CDXcbEcQ5RgGGD1VWyp3P8qfeU8U2tMEJkq5SpSrmRDFNjfaTR8dTn6Ej",
  "key12": "4EQFVrTqRgdqCmy7D83t1UbVQaG6xHNK65frNStzgasHEvoHkGLRP7yguGfdFdLVgzgJSPanpHFQARLs9aFRfiMR",
  "key13": "4fc9uyD9UPDNJLfFiZoFsHE7rqF8aNTjBp9amvKgfgnAhjk7jtHNGPyEembth5yvPP2UUW7hmYf95Q6ebBGwYpVG",
  "key14": "5P1s7PE9q9eoBzEWCDEU5MDfVrMNEdA5ipWFQG23XQBB1Zz5Q79i1y86Nph2qr8JYV9TpdG3qtGAuYK2Ju85TKTV",
  "key15": "62yHXZCvQjEggHQwcA3Yo5ypZW57xBe3S6wQkWn5PhMuYkx2M2wSwCrP2uVJRpAHbtNyYWPk1p2Gznjf3hCFwYin",
  "key16": "4341vPg4m8uHGmR8AWUbxqM52bmPqu2DwHbJuG2DCKLNdiHcSpds3DHrUJ7rAmNTsBD7QtasyE9RBHSKcX12A2jy",
  "key17": "4Z8aKnJ4BT49dntYJtHzpzcnZFCzz2uLhw3j11LwqK46BZeqgQZhnZ7PopTNGji4aEAj8NbPvXztb8o7iww9uPwu",
  "key18": "3SfkBYSMwTiu6HrvhoEPkwjVpE1hGBYnpGyNf2i1uqYjwG9rriRBfkdbaB1FiftWiqC3FQ3iHsdrhXbsaiYcgBwK",
  "key19": "4LN625Jse8tX1vDUZ56HCUB9XT4Vn1ke5jmFnjTsW1f8rmeN2H4nZR5K4MfP3XWgsp789QDBs1hCFx45VRcjmGy7",
  "key20": "4HGChSsnrJN94P7npPXXS1TdR6E4cqW6xGpZmqazBb21NbCAwFE4rAEyNvMHNwXq1J1HwZqLYHLjwLpc947ssYkk",
  "key21": "2gkNVJAgy4n2xDkVhPcMr2fEQ9D9ifDqUp57TdKEBWiNv2uc8fHivciQwZzXCk2eF9qPHC7kozrPwdco4Ca99Aic",
  "key22": "3jH2gEqXVi4qztDDFbiagHQ2zju2ykd5wsKdraup2V6Y9gkR3hp84pBjjQLTErdo2aPEdTgNBzFyxHLLmqFvYwoc",
  "key23": "FozUsx8ha21Bk7E8ZgSgpkLrZGMKfoShM3x5jFRj2i17JiTRb1L59k4ExETsLgtVbaFJdMZdvKtWvHxh7ATa3ZD",
  "key24": "3LLaLg4nhEXknVra85uA5yXbujb1DbgnYWATGT2C12DUheDDMAZd1RkTTihAmNJ2TgYpZ4nEXcAP4E234PJQj6a8",
  "key25": "4iyQLsuYTXVjuqxB4tiLbScuPogV95yE598wheVM43Xtej8tAMBJy6okFdBD9c85VSuppWJ7ffUx98mBrAoTsLWq",
  "key26": "2iZxtCDFa44RwkKRvip44qmkonD5P8HPJT1CBsuxyUAPrbRbFMSTj6gqvkSdaZdnFX87w2GSzFBnQrSr8uwF8Zmj",
  "key27": "5odLszSHxVKHeZkjxgdsu7XmUhKNqCd6pRxbXioDQFJYuJ28zWSdTSCerV87NmQX7i2E3e4brB3HHCEvjqy9bFNi",
  "key28": "3Lt1YiPa5QfWJQsmSNc1nr9sAzzmKuKv5SWKCsPnhtyEHgbWP1L8Wi7uWPSrQvYRKkdmzjpq3SqmBg8f4ytrHSkt",
  "key29": "5r4jja6x1G6CoWC9z4hPQQJmMBpRT8bix3nbG3u76z32pEiBgZvkWEaf7ViioQay5qp9FDf3buBAcbEtFYS5bdPh",
  "key30": "5Goi6UCwtYoFzw7wQq6HCwj4RifXpmxwAunHBeCkmfKL85EVteorPP51FcwaQ6nxP9aTaPaY9Gs725Lx1bcDxcpW",
  "key31": "UeK1nPKzPAMggNmS9FZqNfPUu5zoJTwJKuDHWnJj4AJJoHNqvvm6xFoug4WY4xpvE9zBDdLsB9iFQzLpY7ishyf",
  "key32": "2m5PukzFU2z5wC5oDDF4EfqvjQrCaz1YbmnPAkPGTPCHJkVeATSd3RVw21unxfAWUrS4DepAuPXvREhsfKXj6qVR",
  "key33": "3475XJqFTMmEL9Z9cLGk65M56VposDuTxRaUprVwpKTCTuQTfeAptAe96znikFp5n5gA75H3mUgaJy8aPSeobDei",
  "key34": "5JvzjLt3T4wcG8FBVdf3gujMwKjaCmZ7qpziUQGG1fC3qJskyEvDsVZtqnWyogcVUqYpL1RYNkZVCtzMFHsspYr6",
  "key35": "qPApmEDVRSdToXFgvwyiMoEskhypDKVZRF88vwSrAsZh1r387Gpzm9FVCwSfaCUPeaMuGACgLe3pgX9WWQK2VCg",
  "key36": "2mMLAxEc7Enbd5iwWHJXVHQdYnkcA5q49HoD81E54FoMz8Tqnq4D4qpifnp3j3HG9rhDkWFwVEotKhnUDcstqYkf",
  "key37": "5J2LAM4F4LjugMKHwKA45vKKrntPqQCZAPzgpYhYQjmfZNh4AiVfu6CfxfH3cnY4FNy8rjDw8y8x1YwXUJdEDRTY",
  "key38": "FsXFMFrywjXi4FEayC7cARjWChrMANkynAdq2pK1eAX7tKoJvK2tE2f8NsjRzfoargLBcTTo94RSMJord8NbhRU",
  "key39": "584QgGgicF3kPWQuAYWMLyTgegR1usoTVzA2bENRHEVSX852dF3dWARc822iKgcXaMz6b28ke1ZmyCraNTYFqZ7f",
  "key40": "2MT8KPr3VHCwSNawr3ZEdXHzYP1ryniYKqxtZatcKmbwhqSFdqvWWth8RBZGj4v6eERGBjv81pNfDHWJNwUhb2cG",
  "key41": "HEZvRQUHwjnqrtiGqFPdVLc5VmgzukbV8uFqXsmKyiGBzSY4hz1bCprAG5wXxYiTNUiydr5YTLoTEwybPHj4Qje",
  "key42": "2wbRDRTdLpqUAERPsWN6ceW8otCKGMBAoPL7xA18oNYt2vcegak3LzrKyrqtkJqNGrJeWoWiXgpsTyBFZctG52TD",
  "key43": "48tTo81sPh2Y2FDRiSgADMDoLD4jorX2ev5PfSfQH6tmZAzyjn7Lg6RT5Efwb872FrvMGErQEEN8FQLJYQbBB8rM",
  "key44": "5qo3csk6hXi3VvmzN93Nparq6cjsVKVE2MXn6gy93D1N7HpQDLoNDkWFURegYBKigQboE5mexirrWsXtTpbNfLJb"
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

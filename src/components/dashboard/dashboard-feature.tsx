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
    "5v3FP6DLgc55EzM85ip2tmLU6QYxk2RPTXUa2VC7e1M9ojLEkuQq2iQfTsdqqjd2i8JuhrGVejh7UfXHccGDAXDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59HhwfFr3M97WQCLBtmr9YUEevSC61AGgUz5uDKiYWL9sGhtkRSVB6xW7HipoMk7Uv7eWg6SXfoVXvTcPSRikCMU",
  "key1": "3vYX4sdFp8wbaPXMYsZyVmNjUDHnNiH3og7pfC5R7VCwYewhKArTFGkYFFZ11BmRvE4TQqytroLLzztM25MxgFd8",
  "key2": "4dfwqcSLnASrZaP27Nd6mb3ZaB8Vbw3nQaK1pR61Lr99rkUeov5WejLGgK5dE4BVrMRQ5F1S6KrQFMSHFx4yxtkj",
  "key3": "2xVBXK6GTzM3j8D7LrSWDNBfFMqpCq8WfoCWsF5voJmezbhBYzvud7y98P45mSbiA1vXo5KgAa45hbWjNqW7W9HL",
  "key4": "4REBU4FCUWodaYBtktiwevKe1JLtmjoofoEr6yVLXyLwvhBMB7Qt6G4sDcXXHrF41bViinA3J9W2PwF6o8VbH6f5",
  "key5": "48Ty7z6tnGQqCB1P3QCSHvBMmBrEwQG8xknMEpHGA2uJjrtUnpanyPkBfUGhhofB22UH7MVRwcb2DrFhAeGCWyAx",
  "key6": "JxS1Wtu152QQKnZsFxUbbwAMv8zdabuvyVPq2Eq81yTZP5crMY2m2UnMwb2DqNt31X28TqJnkGYyQzz1WbhyCh4",
  "key7": "64dpdmUAM57mUXAqV9x2KKnUQNCWDGtMTb4txyzKv1ZiqfNiyQqkiPuT3tmNA89zWNXYWndiZGRHF5JZjH5QjYxa",
  "key8": "6DVt6PKesF2DUucuYJsLTPjyeSsB47nt77hwuK5nF9MostNPYScaBR6b6SQjv6WMfqgARjzCfTEyoDiDRbvq2Dx",
  "key9": "ZVcUY5fiq4uNhYpP1K1uT4MSpe4RtJkESYRde9R7anX9WgHmChMtkAVyAYx9FYDX7RdPt1uBmBCq3Ug84KzxAyY",
  "key10": "4QbHWCFQzKe2TykGc3St6dTgR1zkBYu1UeNQkZBoSKxsvnTq5PZuZGSiQpzjpNdWJ1qNJHxuYWrUYYk5RX6dmAtj",
  "key11": "2yPmKLkf1w4gh3SvYWpgq1zV4LGdsdFJcAngU7WExkBS8YheJBiYrSW7ocB2Pofv95hhXXYdvRpdZ9g3UXK87Pjn",
  "key12": "57LkkJxFAnxLnvZgHwXzCHeJzS8fXW2aKKStcMRysZapkbu3XYzq71vRVSnFcqKm81Sy16V9KZyAFsfJACQ6oMbq",
  "key13": "WLUVXxcgLtZ5t5sgntLbr3RauoSV7S1bDbL6xHt4B9XrdAFtY7U3thmAUZR9ezuzP3fYp6RDsxosmmGc7uCUa41",
  "key14": "ooqyRpCXGdixk783tEmyS9hWpXWf1sHwm4C3cGZsaYXNsGgmh6FjF1XsAcwXudyX85Bm8PfxDxey6T1me7JzRK7",
  "key15": "3Tnh3RoP6Mr781FW2RP3Gm6vqAYMsfZcAgRuAMqxaoEFw76PPhdVj1Py8K3FFbjNEjpQ1N5af4fw9VZgkuDD4nBW",
  "key16": "4um3DbLeikoHtACpUYwsoVq7ZE5YBYXW98WGdPHMFK4jdg94uUPWJ8j2UaQE8WBrBKWnER2hr6oPyb9FHk6U6VCJ",
  "key17": "5y6DicgzJPWGTHmmaJwtZX4r2t4nvLD4NBxVocU1iRyTfxLxxUGU7YAAq6UJG7peBeRvpjYqBduoHFFKEtohznEU",
  "key18": "2YZMRu98RE3mRDSFgn6yeqrGQFPWGZzgFcYxcFZuT2edN8n2nm4BpoBss6vMYKF3kMnW7snyZmcnrkapnie37fUZ",
  "key19": "3aQHTuNaeNbEkybQkh7LCHyC1Lq6A8uod1BrTTUot5TEUwkobW6XH1jdq3SdWm2T4hakJbPsmmAiUJkjch9ggHGG",
  "key20": "28FtdGrpifanDcX3GvNmzgtB1WorbeTa9tegdmJ6jkmhVnZRQF5vzTdprdw8mK2GDyc63eMLn2SVTfCnEf4DZLwt",
  "key21": "3giyZDGNpEShcoCwviZbKJP7wgaLgLoewTwL288DSQtTm88WX81yXFn37Mt1Rh4AopztJRi4gREehNtgnoZGfzcH",
  "key22": "5A7N1GbBBdCXLFRX2Q4izRG3XqLzQXpQV7vtX5wiY2RxpejSQrTVXqsXU2DmYSFuGV1FvMEVG4ydeM67cfrQYtGK",
  "key23": "56e3VvbTM23VLKi1LzHXc7dDuaYct551koaLjauFV5sVKkgFQ2kWVdEcSrhvqjj52ER1Bhrk2q2VKuJx5gHaxu8e",
  "key24": "w6PugbdRbTQcMorAdkeSrzcb6yDgf5AhcMcPKsSzJpwhwxqyvr7WxW9E3MwcbDGvYsAKmqqVSBzyXM8GMp1xnUK",
  "key25": "5S9WhYNr4u8k5NGBGwegavZ8he6ABPUnaowfWA9zF1vLFWeRp6QrbRm5FNNeWiqGHVhva1xWWBjGpELn48jF1F2m",
  "key26": "49oZNXhEVbK14c6FM56AZxYYj2Mx3B8EkcM4LyS7VXsAxAA2ukMzz5NS85ZcK1bDXgWmSg2KheJEom7oy3ds4ALZ",
  "key27": "v7baENNnoGGM9cyRgmpnKPcE7nbySQ4A7Dsxgmp7nXrjXzXRnQmdzRXW3ZXLBGb6E1bMEu7uzb1Nx79TCAWtv3v",
  "key28": "44qdv2g7199xJMXjEySTTWkpGic6Zpxxons7uwxvoA8dK6DwMK7ddf32qkzHKeK2RzBpu65CFp9XHB8pbGC2GBEK",
  "key29": "3Twqy7QRATTE2L397uQc3Fv1Bzennt8zDJEcuJxnVjqF1jmcQmEKBZ43raSRNLp4ktnSJdtaakJneRmfPCgN9mYR",
  "key30": "eS1rjerbs6rc9PiaDD3qjtcH6imLiZXAKRjtbyaEGJ3kLpCV2vJGSpdsECvkBxwGqb496NBeJWx4ioH1v9DKvmw",
  "key31": "4CCcLfhww3GEqobsRk9z8PdC9RJXKHNiZTjjWg1kny13M9A1BCJZifVcR4YjxUT6ocv2vk9N1XhPAqSGw6XwpzQ9",
  "key32": "61zAPVqJ5NyfNTAZVsnAMfLpEduLctLxQgJiXt7TbD54WgAn9hQMGZRPGnuWBTy6dZGkbzAYWw2VpAybPzLAsTyR",
  "key33": "58BdtSo9SVqvrKBVK8aLqd6StQDr87u8r5qHzack8Q7DnudFnJ8rJRnbpPrVJF5zyWZMAfNWgFwDtREbzY9fnKMC",
  "key34": "3sGJtNdJxgStDSxBF4Q47yyxeXVfYF5v7RFNzW3BcKJSxDn4QzJ7rJ34GGVD1aGiJ16TANhNTbzLbRMnqcJSUar6",
  "key35": "3Za8bekvm6wozqnKJhtv4JZhRSPK9EPrecyzthRuhvXRFh68Db4hwNB1nXud63hGrAku2yCgnuBUJStwsbodmxGJ",
  "key36": "2PP48Yo5xtsBWz6TPEm7EeDB52qHNCfZSX4YimQ5gNWZqyAHNtGfzt1B5ozeL8mzrHkDjoiMgsSUBhxqcsHx7eHb",
  "key37": "3ZyXicJxao615BFWG4HoeBSUVZNeMVArnZgbY1D7VvGCXwEGJizaFjdwGpoeHXx2N5uCLXnvfU3mq4L943s4mnxL",
  "key38": "4K7uk5btAistrLqBeobe9fZeJiuyojbfqurmkP8nbebrs1wJqU9UEExuBhEeHRsrLVKakHEkHEM6nhmyQ3BRAU1P",
  "key39": "2T7EKoqG2KuUWffoMaYoir5bqPDhUyvYitydP46x44vLR6LrRtbsKEtEwCN9Vqg7otMcTv8wpzeWdfnqmmMwMPcH",
  "key40": "5wSYpF8h5tZsKNK1fzLvyCQ2enBjfkqUSmr1Rk3ZUV7PXwPmQjnQh4CpPC7RBw4YfH8F6yEVSp9TjZd8kJJLWA1U",
  "key41": "3iMhbp8hy799DsS6bQhreMtDCzWzSB77AcPh129HgfPanRRjuPAoqXgkKSAkqZVbe89rdDLNyv3pnz7jkrgSpFPG",
  "key42": "4BG51mtZ6LpTcQmZEUzqQEaAPDsqU7m9t9aPke6ZFVPktJv4UtVUkUWkCEHciPbcKttrEmyUfPk51zZcgSjShjcd",
  "key43": "Hhjt1HAJ6jsLay385bzWceb6EbYuajeyAGbEknjPTi2GBDQknwz2AUQGE97XStn7fU2tGLFtN7WXVgg1wfKew9R",
  "key44": "2gRo7EGu2xdZN2uDaUsrfp6CamytUGibV9RqCMLZNrsxUVwS8HaRmXSwgtigERV3Ga6ky4BCS7PPw6rHHdYPv5wd",
  "key45": "62bGsiDtXSWR8TgB6QMuMCdpENbkYF2BGFyXrN9sHvKJdnuQ1p3WREGsw7cAP85pHsMtmdxGDB3ycFyTqboY4pQw"
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

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
    "5T5yVZythyM6TgtcnbRN7nsGD6WtoFxSmHQDa5AE1qXai5NnsznKvSxxUUTp3iiFBkVNP7HxZ5tvzNgdC5uBvXBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5SdWQBVRrKbLji7Z3jAZiwtRSJo9xoYX1x44busvBFa7PHu8WnairPXcX3sL33XX1NSP6q7wJse7kPRQCPTJEt",
  "key1": "5baqeYGvxw3vR7AcA88dzyB77V71QWsrWpYjXjenvc5xHtnmfjowLFBjSsJiukPKFn56UgqxLd3WhvkvnvDKW8aB",
  "key2": "2W2W938uMdYYdsEsb9uocYXiNCdzq3dwhpHTv9Gn9sjDeaTg3mbjPj9YhgdeyHpWX6GCugrEZJfXX63md35WbBHG",
  "key3": "4Ua7fnpWc6JL4X8mQjFrcbSnkqQAHuW8X71uZDZisnD5RrzLGZY8hwzHWt32RgWbUBaeGn35zt2zzN3jaFCSFhZU",
  "key4": "9KFAjgUhqbR3ExfvhLDUJEqBgpkH1uiheFSnuoxjZ2MZX8Hxo6ndWiAACHNbrSiRc73VM2NjowWG8LixPe1Rax8",
  "key5": "64PjcVYznLGXgYAYEDZAaf5DAQ1Frv99t5MCmBJEgmju5sLMg2kkrFUGHYKcoKNBnCZc6frAMm6fC2T4t2vHm4Gp",
  "key6": "2h1YnmKPGrNzbT4HShp1NZcHHcci4RfSzm6dP8v6kgNGdtdK8o9TRZSt3MYkAbL4Gum3GDSS13vqUfnJLztYzUvu",
  "key7": "4nb4fg6xsRFAxw1ERU9tdULAX1n5Nmkr6Q3EEDdG5jhdAviaN1U5huRjvz7jvz5Ljyefo4e5pAU2GoQQXhj63j6Y",
  "key8": "3HL4fmfSBPmSVRm3iRgzkQEBMG1awPA1dDpZRKEdby6gawvfwSirAYMqjueWgDeCRKMtsVh5gvVTgfz3RgwpDpnP",
  "key9": "36HNr1UYtwu37XpEFF7PKDfFtipnybf7iHm6kudVW4RpJDQUPqqeRmNM1JQQppZ3PicaBJDQ4XtD8oKAAJDxDKCU",
  "key10": "63GyxpCh4dKi9dQzHrJadY7GvikzJTkfhG4MoLEDzB31HzjoeozQ2F9qsYF1dvWRjatzF1AmyTBRDqHPbr74FGEV",
  "key11": "3SD1KNSNwU9YSXvNhNik42xmnWURTs8dEiseifHs3NHSJmsqVMF8udNdX7XTEkruya5BDynwE2UsgaJUt8F9tow5",
  "key12": "4ACj5B9orBicGizg1mDEBA9PeMwXTBkYa3W8XRQD7kQBDvHq1zjp38fbKLwg7ZF4Kwft1DCKDVU8TdGftaMMyXqX",
  "key13": "57VsbftA4ugaSkwxRo1GzWYdwEh6Wg6gdystmyP5MCoRechamh9JGMAwmKa21Aw89N11HTmxQuj71Ja21WWV7tUo",
  "key14": "626ePKgXKusZPgd4XV8XWFJoRVxoyiJ5BD6zDxyjWf1iHRspfbij3tENuQc5ccCurhGJkqWc6Hc6fiFWPzjz1nCi",
  "key15": "5qEwbYWBUGJ1sDTFVaGmqpbSRrUUZiGyTBSrL6Rm5rwN1JfpRBkc9583xo2UxSz1hCNriad8MKzNEsLr6ZRWsQkF",
  "key16": "5bdTSVcv2akfgPjAY5rCmEF9bYKzixRHXydB22TiMiaom1ZTLYBTdRoHFYCF1ce1gSc4r97KXggsvXPRTqZ15R35",
  "key17": "5peyCanTQ8ZzkhYhbsZiaadSkAvdMzbqZEkjhQfxWjpSQ2TzaJiiU39jWNDVbC3cvjrttCcwy6ZnALgMkP2ocd3d",
  "key18": "6DznWrSisdWF9jCD8pQ3mNi64JBzV9C67HCzAA4eiEjzFuSvxXVpZ3JhJvTe8LsJgXokxipX8ZLnjdoK89acPYQ",
  "key19": "5PAjAouA4gVR5MbWqHsebUwDcpCn1nxyykt2LJ1MWpnYyz6TiY9dnfCQ9TH8qSbU3kh6yFBerfx4gHgVRAEcMAUq",
  "key20": "22jDqDsCoBD5SyiFAfwBL58vkqxtTv1TupUFkVo64Tx8n3EBgd3s3xQuB76RLtEjDB4AC6CU1oxdnNKoUkpnJ8SW",
  "key21": "2ZqnADu2eqNQsaRZt7DEF8ka8NSfw4eNb97dyZwghPM1eKXm9hTaQaaoh86zpXEv9VvJw2j4DegztcUxHFnEh15P",
  "key22": "2qQQWMmZ84DHJPWxCPeUut6EcSjudfERijVi7tkqxNmVMfJKsDwgb2UHUEWibNzRM6H9mk8gogdLGHD5dqqDR6nj",
  "key23": "42u7KMpBZNbNdFypxPNN1jh8ceaCqJNFhcn2yB4JS5V69M7nU2Nib5SyJGksDR13snYhxKor9mkwNd5W796GkUhv",
  "key24": "5ULpvxDAXVPit97sdgcaMNB6ThLgmYEhrd53d6GNghv2dwKi1LSW6ywbhGbtJFxoNky7zEKoEceFWBinBAAxHaMm",
  "key25": "2D6oviAaTdsN1RWB2WDagm1fuXb6zWapwpLaHkPZL54Yjp6jzBbcUUuhjjJ9SWAgTQwPZGj87juGXXj5KPLb1EfH",
  "key26": "2sCzvEndPK3MdkcfcBR2fXnDYWbF96pZrwazPEgjUgo9stJRH2JEKYd6HYFcQB5uSfyr31rsyCWfcAvaPQ664HJf",
  "key27": "4d1NqrhZxusbptrzsLaXCwW3kjEjaupAvGuFigKyDYfgFyrJZnVGdSHhxhTxH6szQGVa7MeMb86HcHpjCuoK8Qzu",
  "key28": "2XD5mcLsFnuAgoZunpTf6hLhZ4pvhEX9nacfcwoKMK2VBQwtUr6zLVSL6k2deb81urqiDtsgu1JMJVCc7khWmysM",
  "key29": "58qfAwbueV7ik5w6W38SyW4Hu3DLzW5npfUVe1zcVtuY1oCqfxGdRFQdzf77aDkU4q28jAzRydvJyT6LpydAch1b",
  "key30": "5DC8bPxFsT5qLe7y9HNEDBFK3biir9Uo6PLHxqj3LWwELcSbF6uNTQw1t3vneFHyh7QzgRcxD3mKhiBaJFc1i2EM",
  "key31": "WDie8pq7wY4BR1swGqG48jMQszNBR6x8i7eYrFcUkWv8Z2bk93pGo7ufSv2F4oRyfa3QPEjYYWF7rvXtTfMYFje",
  "key32": "4YhdRWr9yc3gGD4De5Dth4V7C62B77VB32XprFjodK6HnbrGfP4YoFF5gSteBU7EHYN6seCtPDfGNCYK1h1n3E4R",
  "key33": "4u2K8jHoGmJJnyZe1kKWxrYjzzJZhZiVmkn3S5T2tdyusznDngqtrbrTdd6tmH5sp5sBsePVCEQmBFtgBqDKhgrP",
  "key34": "3qGZ3AhtYAMk8AQ5rd1r31fKfazZZUZkVdEZaJdRVwEq7y8w5QaVZXWXD6XMTvmBKsgjuunqW5ArB6gTRY9APgoU",
  "key35": "4obd8XcUHtmv5CiiVoNKQAvq8UegDXyK3oNFfaoPyqs3Zz6cbSp1Lw2asiZMvF4G2gjhyThKZAARJBz8NdLxffgo",
  "key36": "3L6xZr5TTh2P1QaoDUcpqabggdWH4kg6HDLRzQkTjmFDkvEncN8ACHg2qZqyuoWbAyCQFpNQfnVBqqYzM5mb4P8g"
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

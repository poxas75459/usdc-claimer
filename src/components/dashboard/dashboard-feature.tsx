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
    "3C8ikYTGVQY5VUsnMkFKnTd2s66gxXb8Gq7chWshrNhXrMWFwLczs2RZtuMF1SfTUR6MxLLjYbZQe3CbQBqtg4Vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RuiBtdDkSotw3Jc1bwJFo7qLynmG76eMzx6r4La5toK1dmB7C4HFT6myrWMK47xfC4UwMg2UYTH5ZvSGr2W44PR",
  "key1": "3phFb1KXsSXwtg6m2cx3rAjKfrXytSQkN8EcfjeQDrExguS3NaXJEZBCRWXf2pPrBSyQAx5rDyHioaPZSa2pQrhS",
  "key2": "62N1qZPtfVFXYNxrXuniQJNFhp5ZyArU9um3wP7RTRuBPMGh8JbzmCHFE7rboKgBk7vZbfamnJGJkFQ8eentG8jg",
  "key3": "2qwqSJm6fFUQK3mRX2hHyi62UbqpMPQ4PaJezNCUCURkdEXMro4MBmPAabhwPTKEupFBockqNuCruXHbDAUvTeUs",
  "key4": "5fNirx3t585eGNsVLcBoaZMGeLy7iJCZCMPmw5XSnruKayzR4udz49yewqGTTcYrsUSmKKxSWUQ4L2cMydVWtFxD",
  "key5": "2bZYNBHaYnwoiVg1bVLnJo77cjbyu764XuJ4LGi6DQrqTL1ocatuUE4cYReLeJ6F8r3GcNCFhtdPy4vDjeiXXZ1k",
  "key6": "5TcLXA3akBdAvu88W9ukuFz87A391s5fGtoGnUc8HPWVb8wUPiC22XvFBPrB78E17JrnbGVnZSfz8igYhjohpX6D",
  "key7": "96KG5fddg88M2iwhY58SL65HwzTB5gYqzjTzhNp16Z2VQiife2NaabXzzDvxwV8B2jwzf33z8tAaFEVRVtGLJ8H",
  "key8": "2SM6nvszhAaXuT1qxMuh8y4SyL5v1Jy7V14iGahNxiSTjVcuAiGZKdtEEB7Pf69Q5DbePucyQVcnU85QLcynXFMB",
  "key9": "QrbpZrLzFqB1U1Rnvf5Dw4rCWD7oK7oVbVYj3JqLTG8owres5D5iTKebqeVKTUgnfvEhWaLzHmXWLLWPJbPmbQt",
  "key10": "4qZA7oQ988bDjpqTKEvSJufvMb3NaPwaygHvgaij7X4bod5g4jUWUFBYHsoJpc1aL25sgNJQdc2b4R3vTRrCF2BA",
  "key11": "2XEBkKHnjXH9ZEZxLbhZH9UBGLbBuQ9MEbUPHmXXPTubHcu4e9gcgKnwZggcExfwSyVJ6HytxLQ7jWSFQY1ahwth",
  "key12": "2nVDGBH5we5D4rczmwdqwYoraU97DqnKvpXAeiuoBzcQFzgGFj1NteBG2Bp9MAtuZWhsW37XAvSUk2TTspSB9t1C",
  "key13": "4JPkaLbZCnsY9fAKBnoicBVQLpAfBpP8MEv8Vg2RQXPoE7DYytNkduZJohEkKYprBTd23nf1pP2P82TUZTmx4PCF",
  "key14": "64Rz7dnkZa1p7iZATMYWD5THRY5SytnHos18k8gsUFnmVejs8yEbGHqxSMRApWiVFUtzfX8rtMNPzyu1aP7qspa9",
  "key15": "2AwwygZvBayG2RTuY1QSzsXxJiLsKFWJmXBWsRSVy3jeGzfGtAM5N4orTvyDHyj4cRRuDJgijNb3QuE3vYgRSoD",
  "key16": "4tnriDhQF4isbkMCpdCttmsjVb1Dcp7EGvKeKkMEaRgxab54qNPoiSYAYndr1jFsrR9JTdHbSQHnGRqSzDjELZV5",
  "key17": "T5nTY5CXbmb1qGehPjfNpCiJqeQxBBzJVV8jceoDdC4H5uJKshUR4zhQnhYobn5sSuzMSivDo6Qtuabo7PpU7uo",
  "key18": "5hti8yVVqq9kTmG41fZH4capuTTyYeVg4tL43uGtjGNWxFRjBQK7ac9cqib5m584ccpBo2Aj4AEvgsiHM8dA4BFp",
  "key19": "4fXGXdUaSHZ84caFkn16n1Ep9qkGFa3EC4TYDC7hdX3GeBDWhymqWr7NaZtn9ptiYXRGjbpvEPDNDTALv9GVWu5T",
  "key20": "2ct36Jb2x92cnrrzxPBZ2JmpAK8WoU85pjuiCcXZ1YE1To9E5TvXQjGUqbfhZN9Vc5MD5CHaiVhy4hrA9HehRDeq",
  "key21": "6aYYscF3LwP6y8bTj5iziqTRPc2D2PDDW5JAXgbmgpRQ8X5XBeUKTB5u5EaXasgni3QUkksYHbymXVhtYNJB5P5",
  "key22": "3ncyqgw9iNMvSD9TAM1isR7nfMM3uHxuawvBqxesGFwyrJZkjXr5AobJRvakkRDXQcTwWvgEHJWkPhTxyXWrsftU",
  "key23": "GnMke6eChfVaM8MGueeeLGNZGD2B7G2ZH94RfttuoAqwggvjZ7hzUmvJjV1VfnDgty4sNkmfqyao7guzccLPUBN",
  "key24": "4BHX1yeaq6vUaJsEHsXnJsiNAvHPefkxgrUfdc7vj9V9MDnr8oK2V4dJ3uYWu57YN72FBy997stawPKMY5PQPZzH",
  "key25": "GqcRkXqUDf7VvDjwGRyHmjDDANdkPMe36y9fvsXL5YRtoHWwRSqTyT3ou4CQApFzVg62Yj8vHvwvBAy2pwcEB9f",
  "key26": "3srrgfQ3radmd8MzonuackFoMZrUXHgTrqndEdec1uK5Xqnp4CNcTaFpbFvNx4PSAdXowARK93rj7VMhvmMpxp6M"
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

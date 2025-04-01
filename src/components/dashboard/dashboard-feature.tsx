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
    "3t95sdvmQNw6U3fkuoQfxeqgFvrfbkjmfdWaTU2FAXTCHmC5RwooWp6pWnfxyGZX63sZtg9pW7rgnjYyDHHbq2dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28UwZzGDLGnP8hGXkMtDrdTe2CpyUGmBQCDroudoQXbem5QkN5F3AzaRyiCcqaHnHSD88NvKokfZ4sEfDejBuxi8",
  "key1": "4okfvYkauityhacSGUjrAC65XH9RPRLF4TkVzuemb5hbmApDTpNW3DJeYjw8LshmmCmR8EgLN6wBYYgztVCsYRBP",
  "key2": "3LPQ72KduqXzBMg1nrQK7pknUY1uX5pkuW6TKBaxCufQSCS7xAosVjGswSptn66AN8XxYARmr2y2zC8Apsw1bwLP",
  "key3": "3dsfqc3jhB5Cg3H266H3vmenytUh46ouwEZBTKY7cC4s78ok8tawfY9NxDQGeJrXSKK4Km4TzpR19wn8LFdvGTVe",
  "key4": "5kZn7T1n4T2XGrmsGeWLNtbsGYJNEQVkk4s1FCA6NCnLpFbFoqjuxGgtG28bG2UhbcNSNQm8P2n8n5CA1wHPP7NC",
  "key5": "z8Pu4dnC7SDzoEMB8tonhBBKW77JX5pgoDxDffvYx2z1s2kvC4tFvYdeD8vu1U8CWCbvWFaAJQYnkrGJtAg2NUU",
  "key6": "35LV8ZYFF5JRQTXzSDhqaDMqXY2p28ztV69BXR179wqYi3yMUoJzWTFoQ8LsVgqK1ERvZqprbg6UozJkXMFRJ7Rr",
  "key7": "NioZaqtQFdNDnQTv4JkNLZAworTTmnFPitVTjhKLvNPQTGjXd4353R3Xr71prtZ1K15p7UJdceLgVEWLaSeTuoK",
  "key8": "3ovQexYeJx4YRmbykqG81ZQBTPRsa6GCSeY9R7Dew6SRGBsykCAvvkSKZRU9ZCPh6qJQepHbLUMmuDi7SKUmETNH",
  "key9": "5mJQm3ew5SytsEurCLQWcFccTnXPchCqRe9ucgLphm5BZ3PS4aUMt9D7kUM18GoF52i93WEyegA4btpbf26NDiU7",
  "key10": "RvrFNzrkKwSZNUvKihw8svdgQmaMr1f8vdMFSXTJYvvmpJLAhFXrk6k33AubFXAPvuFdDzCtmyA1ndbtuwD24hx",
  "key11": "24ogzyf9AbuRdZSRBJwCWGd1sgo7fM5sDU1YBfoorTHtbPKYnadMNrbDsBdr1gCcMzpNf8dJ5RjTTRJndk7w1x3e",
  "key12": "2WWeVQyLZbzg4QspuFSrtrEcSBfT4NUgwbvtPRrjBsf3RDxfiAqHUZeH8LZEKNLiuLo5E9Ys8N3koPpsnmDeE57t",
  "key13": "RS4WGkhCZtwXusZH9tQRFq8q8ahSATdLhqWmK7ufcQHAsFypy1yWLdX7EPxPDi6n9P8NAmM7qUj2QBkV7D2PFfH",
  "key14": "5Y1AjzywKFfDpu9FwmexxFk2cw2bHd1TB46NwSNs9fDeZgimDaeDUnTbMhWTA78MhAcPHiad4JA3fL1GPggemeY9",
  "key15": "47Rx2gGi5zJz1Z1rcFtSmnA1SjGGvjk4igWsgqVxkn6NbpMT7FmVTpKcPUe2ag2PHDvPigLoTmbhKUyECrBgft3s",
  "key16": "383s12ed6WtrnmaPJQAXja54gBoHHppFvC3Wn9xGTJiiBXwDTCKLWN3E4PSuSzJgYnQYDGd4gDeRU1nyfjQg1She",
  "key17": "3RfWqpvKTw7e8iCeUgYk4jzB4qMnJ8qAHKJPQ1JrmvgVdrHFCBihDefw5vKAwViwozYhdQCCu9iJNKTMWc2xXEUo",
  "key18": "WnC32sCc3BoF62N3VMXLBxakvKec8fmN8dVdFJEwvprHNmdh152BVrFyj3sLegCSrPWGVX8wbfRg9HWBnr5dLBo",
  "key19": "GDyX2cYq19DyAb2jWDGfghn8HK3nkWy3PuUKREErfKqL5UnS8KjWRfEndLigk4ps2i9PxBr3vmtG7myD5GHAJJZ",
  "key20": "5NXzDG1dcpn1F9eSjk9woVBgQQTwayVWeC2MuQRBH9M8AyZUAhMnqBvE5rhhYgBAMTRLJVo9wwuvkt3RWcrsKeBn",
  "key21": "376srXYJmPuCNqLKUasQueNv4CrwriU2dTDJ4cQx8Tj96x8VruToSGGMQ9Lm3NGK41ferrBXVa8bVkpDSreazaWH",
  "key22": "21TbL7dRwhK1AqGhfBJuSiSNN9fcqurz4ob5ChLBaZZxEWieXRh9DYrQ7HuqtCcNaRw3G4GVoZeESr2kjfgDZYKn",
  "key23": "3e6S1NfoUAzmvjW82Yc77RtgFy1LJXjbzYqWz3DN5taYHoNcnigbrUsYB5HgGgpiFYxzfjjd2MvSixLG5rwp3Wkj",
  "key24": "pzvH1v1pPgX36SF92kmU3jRuH6MC2dNMBEhCnBKpmjC1K6v5AVN6S3J1w9dJTCcznY6sWrRiW84uwdLY31BufKX",
  "key25": "5apskzX3LhjSwxQsbbFE3R3fBRBnWLSZVCLoR6ADvFA8xheLSoRyqDPJbFQ1jphjhHLpDq7HLswYJ33Y2ubmvvRf",
  "key26": "DQ4nFQEDrLja73w9SKXfSL83dmf1wjcwcBr7aA5iYpvGmNYMpUKwV74d6uFMF89aYnEKi8cDQ6uzJa2K8wBfz8b",
  "key27": "3xKBuzaUDMtTvbXbNpAuSGQWDGgAgafx8Nqdt5nP2JReM7CiBLNAMZtFK2iJgKMVGYQKXuo9K2JAo5upeV8ss99d",
  "key28": "3Dv87mJBR6Dhiqd1LFRmhgHD16C4YizHr1KbNrd8aEykn2Mi5Mec271hNHAqZ9m932N2huPReTpPERnsPtSCa5mQ",
  "key29": "4Qj28Y8AycbD3Wa73x3zdvxivfJEQQ8TsqtYkKyCqdNwfYGsndcWMBuThboZoTMXcXu9K47zULSDigDxK75VGzr2",
  "key30": "4yBZi2D34WLHQCRczCk7eehnCFB58wM3E5zBhJJQBxerRaV3dWmttmM5YwBJWXuZu4mspP4aGrzCuwvwkvDHirjq",
  "key31": "oHiMLeug3aE5vPMvEkuwqmdLYMifHfngjEUxNsXpjZuGYqk1ggWsfq3G26W4UmuUdysz52WV1CH8KxwhBtQEt9P",
  "key32": "2nzx4jnhiqXhwapj8jeYMLqX7v5gkRpWuwG98YRH4waHwxA8s512zLTimTMFF1ELx5Y8bvBb8PA1Zg7fSVnyJLXZ",
  "key33": "129MGNMkG8eKdttARGj8QSbdyGwRfzVocGXFWbDsQnD8XWhmvnzxJgmGnaFtTT2RKDCBuQMKr4ZMwnVJabH6M2JF",
  "key34": "etDucmCsN8zhWLqYmU49UsxaZeZ6rGxAqSjC57w7mAqmv9trwfqrXuvG7PV1qLaadzXdU5n2p8ct6LwrW75ddC2",
  "key35": "797hpdFjGPhe4A3KoUJhrKXdV77A4ZKamvnJ8kBvFFoacLrCAQoPWcNWWgSh6dRyiKjGZZzoSzUYptKPgPUSS8i",
  "key36": "27hYa6RkbhPGbpoMa3AMc9WnKMCHhqnwV4sVmv113vSqw7cMnRdAZVsS3AJPDBAhixRC8NZDBKEZzX8QdhnUPKo7",
  "key37": "2NSQQKuaDgJhxvcnb4E1HrqUedG2KV8ZLWgSM5dSwBWwZPbNizrxfpdy4G7JtNcykmLBotFRqBccNAesdmh1Yaqy",
  "key38": "Yt1uyPMMKBYWd9Y8UpjmYnyFzU5fKynYqCs2q3uiAV5iysE7kXBdADQvJddS2Q3kHz2eudur6Ayop1q12eYgr2n",
  "key39": "66GCHRpubqFMuoTk2bTBQnwpi2wQXcJHcENo11UrKrZceEb1EdJZKYoQRB2ggKDdGXjHXWHVKKFarntdGt7eZ6eJ",
  "key40": "TbxivQmhXvo5rydfRZMzoUakYhbYEh4ZTxorvmF1ZHXftzjqNqvZh1Vbjfdb1KbMCmBG4Fcr52ZdkrSK4vcezwH",
  "key41": "2Vbs2dJHEipE91eRXDNVcphG5ndkiJQN4rZwCYrM3jqKyifPH7TH9azbMW4nweknNkgYQv37z62CCf6XBfNWcMNY",
  "key42": "5zMgv4fcH3swU8EQXU3EMX6ZXXedabHSyjDP4pzgvjjji9Q4qESCTbfzFByzhBrpR7KTA5mRvzFRDmqB7ikJmrH6",
  "key43": "2yt2UboSw3oZwwFcusWaVYEg8zrVDCHKZq6mL5KMZYyXfT7F2ZV5PA88xwH4qFm6F5tng24R66cGcViWUk2EDrfS",
  "key44": "5N2zEamernUe4kSpet7vRzd9q8smEupvzYB9Gg4F8bbRq9QRrmwjhEwDFhQgzT9NNhpG48GaDXo6Ap7Zzt38QRCH"
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

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
    "2jbuPeXBtcNDQ9oM2p1CY9KGwM28UsdtfkdZTCSSt4c7b1LvW9682c1MTMFrjFvtfV9BWa3a2zcu786HUiYwFd5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXsmNRGjBQs8oSViNTHMvVv5XpA9eXXztBhZfkGKGpw3AAsBx4smRuwjCanxP45Ty4eiH6gTaYudYF4DaphkirL",
  "key1": "kU9nRuTsudStxsZccwdqW571nsLMn5RqQZLG736bTDCKRFdAjsAeEdUqvfvsdLZ2uaaqqWa4UGHVtU5cddd5RmS",
  "key2": "4cZSAszPmk15vFRQnpJenWNJskJSnF6N2bqpEkz7tXyzXu1h4MpqA3Ex789PHx4EVKjE5dbLKrjnXQT5a2jkt2rN",
  "key3": "5aakTNVHV7XLLiZRqePG3n8L9Gps7aaq3wNKifJ65d4GWY4R4oHWBo7eVzToKFXnkuQ5uodM2KSKJSgZJ35HGxhP",
  "key4": "35PyTbmGBwAipm49CeEpPVAQdfoS6np7TSVmSjzsfkt5gg65r5PpQCDunU5HjBkje5jwCKCwhQRbDKjokXPG6R4k",
  "key5": "52TwonuiRgf1n5ehQMxxeih23BTQPkQESBSvKckYP4QQhmPVXpBsKd9HoZBEbgDgCf6fiCQn1okRRPFiSKNFTWyK",
  "key6": "4FjumWZSwTiJd1XQSKgeVxiyVaPn7J5M6pLsinbWKSfXe18GFNH7X4S81KHjZSs11fdenRTDJ3rYi7V9MrVPvjas",
  "key7": "497En2JU8iszjVK4engN62qWGd8uRjPR5psuEszc85HvbRPx5qGtyzzR4GUAWN1W2F2nkE4Z4yYQ8fQar34CK2s2",
  "key8": "iKi1yLA5srAyeCNN1pk6wMZGDdLAMKfQKPrUvrNTGLPPw1mu7C4fRuGBn1kWPkCWbHsX4BU6VQnBgDg3GSYdusw",
  "key9": "2N4pZaoSuf7cxcrZP1qeaf4jfL6fMC2syee3VVD924TB3FwN64RKkMMbBfjT6EbqMuvBFv4yaCwMjgaefxz1mzmE",
  "key10": "25b8LhhhkmW8AN93V7h19tAH77m3Emft5rucpF3K9AHGf2j5JmRCHsuH51XyrKPDRMBqE9MuVNChxQj1NhxtEhuw",
  "key11": "53DWWrs8ty78yUj5ymAEZ2Gtw9vKG1avYDry9KFHqcLPXqzUy3jkNXbeGz19gA8QAwVnzCN1aUi4QWCNB9QWTeG8",
  "key12": "4X5kW6JDgcVHWLpBrhYU6LonuDZMGFMU2zLhZZjPaxjJhYAdXNogKMQPQUjBuAMPFi55WRRfdYgs9MZ7Z9LzDuJv",
  "key13": "39bUHtYagBY9TsbQ2CuLYUvQncn9frKgBuMt76tSisyZ7Cwwe5ho3U5U1GjU9VHepdXebLhRDg35yt4Co2uokSnu",
  "key14": "45kXvUHfxsRhCLFrXPPXHdeTjyUVQR1pvtEWDHdnP9iNFLHxt83u5h93U8wA2tBBungMxd2CDniWpLZuhQsdrY6s",
  "key15": "3T2z8xm68t96beSRrSd5JgQT2jBDYRBaFDUGDtgcUWnTBJo7CzbMdTdeDDMmsnqwuJuuAosKwCENeS3APpwv2HZj",
  "key16": "2RmpA5hh5qkmP4suHdKvuj6kMKcn8ZbhGERiG2XyyawPktkmq8Po5wrLhforNJXJqjSwNMZvxoFeCRZYUv1Zgi3Z",
  "key17": "gMMkum3ZNLeBjNN6rY8PNcPhT1dVvviPdu9YfF2aNmGKyq15YEYWwedw8v6mFjb2XfeUiL7s791d4JcNDHQAu5y",
  "key18": "3jRJRpPdXhiqyHJhoYZeTgr47UErg1js8qyb5oLXm24rsouAnTrKKcTWEc5X2rSm3tfhgcZPwetBAJH7ahGpMxvV",
  "key19": "2oRr9ThxyjbCD1gcBcjhvDmFzxv7CYQ64BiAq3ebk6AyxEA8ypFuTznoFPzMJeYxs6pN5wvUTaugLqSzHtPQtsyr",
  "key20": "65oPXgDaXVmxQheUeYGQDBcmPe5bWXRh1EXgr8TQR3qHnF8TBk4LzhMs66y8tNM39scj8aWNhjohYw3vHzrG9HxZ",
  "key21": "3YmaEvSMRZgZb2fsiEAoHNK9XVgH8mcWjvXwDgAsKNgVoqciiqfLWF2aqZdqegVyoQ1GUaamKcNxVGNP57YfRvEZ",
  "key22": "2znEXQVvwdWBNvCRknYPtrLG8WsKh5iiDDYuxG75eFVTiTvdHBvkxtbMHWXvM2GHfmKNp6s6Ew8sARvQoe5M3BsE",
  "key23": "5XeY43hKtu9HEkwgVKfjYLUkWva46AiSxRHbshrcEwNVTX1G6eix9Md271S6WrsuTs4281WXJhSiwma9dxqvp4kh",
  "key24": "4oyjmRTYag63tYF1xyJwMgQtqo8B9KSMKFzGVvQj6RrfjajdTbXXPfz1kUzBnMv4bzmJbgsgtZsngvizYM6r4fVH",
  "key25": "hbgmmgamEc4FKNQJxiADLdzsdjNPESrfz1BF9pZXczoefM5X3bMkFRovrjChb1NmBRmMZBnPJKqNXjqBiYbXF3F",
  "key26": "3GB54oJSobE8RGwrRd7cTwmwzkbMaHNV4tpHrVX4HodcfDB1pbKkNaTicw4GmrKanUMuTaXJ5Gg455AQMTqTot2a",
  "key27": "62F7YsEcFvXMS3L9jugho4osTfqUQcHF5GxGnTxiRPaoQeyxcMCZVJ53S4jn86MEmvFowHidseT2FhPz1WnpuCSc",
  "key28": "mRAYGBWBMqAxK6WUy8gqZgYApPAvbbfeZQNsUEKbCZDTW9Qg4btgPjafE2XNNeGN2QDiHsHPz3bi9fz1yiWLBeE",
  "key29": "3AnLvLPaKMRW98GnxP3Sphu82wCXBn7Db2KwKp3RG6kWMPVQgUT5GGEwAtKyuja9FPmZjaAZYzFrZrnwGNyuyDF7",
  "key30": "5Y3bbFWJeTix2rau49gyAY6AJyoKwjNzPMfHLmkCzUdz1GAh1GQ6zFBcUw9hDfnvmnTig9dh1ZAAkuZyn2ZQQ2QP",
  "key31": "33ZF2VwD97KzjTnLf6z9AY8whTsA7oeHkP8PQi5TsdYzmQePefsPwBbBdcgXQ54vz2Jkoc4wp8A3nPuz1zf1ny9R",
  "key32": "n41t6xcy8EbfcRo16bepwvVSYQxSAr4CjXSKpzdYTSR9oMoEYbkQi3SawrsdYmbAcF6hL3bsjbNStz6wjDHCa3c",
  "key33": "5LYYefhKbo84ZTruUjZGyEj8ubiRDH6JAFYEHYzpTKv8EqRLW5BaKpB8eBFkkX3hecbQiGpUU78AKdqHXeGkn5xr"
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

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
    "pf7CF2vQLcEzNyN7fRPAQCdJG8zU7fooBHPskvM4LJuKmGkKUvD7zA8NSfLKqi9f5Xv5bPqAHu6w2dMKuqak3cA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jB8tK6KdBeDx7wikQ3rzShpWQGdfrULYRGsL23t7ycFAauB9PTNy2jPKoqafHdVvTu3aNQTc7kbkn7RW7aLZKSi",
  "key1": "3bAhTVu3i6dkAhmy3iNVet3PrzLoqNa8e61ABaFuwpKeFZeQYU8BkCsThvHAKLf9xTiNkb6KnDCmDaGz7zBgqiGg",
  "key2": "2sBbcBR1GXdQ2CvhYkTzYzvR8dZMwpNbwkJKN1rdeNbzi57P8u2LyzEZERwbZridhuXAUQfRkrUkgsSTg7t8iR28",
  "key3": "25xA8buyBSukEsBoFu1f7isd33Tm8TbhppdUhTkMCz4T1jyy5me7suBYBfFVPm9iNhQ8qMGjvCQhFHwpGPGQaMyM",
  "key4": "3Pr3D7seURJjFcvKGq7H7zP3DRWw3gsGWfMgPAtFhk89erKijNoYV2eH22KVvi4H4gM7q6EuVNRythYkkBRdkHYA",
  "key5": "5VMFi7uj8YcDgMnpnwuDWLxsEXDV6xbXJCwySvy6e39to1vmJnMtGABy66bhL5xfwPDifyLbrSdZS328vwHHrKwn",
  "key6": "3arz6sR14jmhBQp2GzrTPvE7shsSPmTapMPAKY4Xs9hmeYWmgVXf4PtjCjsyt9JjsGPCQrJn6pmEF2FyHqr3kCPz",
  "key7": "3ofTtJ4RPj6U86iCXx6g13ynTBt6yDuJeimcLd8XJAUCrXcvbHZy4RPQQBDyvL55BJJ7tvvse6vx3dN13uYDkk3c",
  "key8": "54tqLvmEX8L3jDG8pTh7b4vko5QfTM17pf52kKKWJvEbeh5K3jUtEUHLKQTtm2Vb8phSHLntABzTbgSWKTJgf3fN",
  "key9": "5LSQwf7TFWebjjAjdDL1cFPJAcLu3mybmHYQTeGDe8Au54MmXb9sBU2A4t18MBGRmAXmqjPHjQ3BdBQXXwXbaVhd",
  "key10": "28p3i3Fd9Fio9fbHTTm4QjCxCvNdvnWasaFH8CQMiEJcdPzqJDXjuY5NM5pZi3fXd3u2vxjPdzN6vsLYAAyVY9sH",
  "key11": "nZFWHVUiNzhyWgHNsKnz7fGY1kTjXyTThchEwzDyq1MTrvft9SNh7N5XzM6PSPyLdTKLQbYgDDEfC9GTTYyJ2A7",
  "key12": "2KC1hrGJ7sief6GUJrTFsbQ3XAoXGYJu68NiSfW9huAsC4UhuGMLevwANbKabYYBeK1uqjtqALQsXd9vfuzpQ9x7",
  "key13": "5PvPChdmtPG7g4tzisCvjW7zc8hDPUbMxXj8ttD2ab5EWNR5bECey4zWaSmrBpan3iiMo6W1LzBLawk8q6ywrabj",
  "key14": "44oobCJCx1z5vMAsmS9mEGmr3CZKpGMeAZeE9CjLA96bCmhbaVBbjJpFFvDphJS3Cpp9qPaS9bk64Wg1CHmMgGdf",
  "key15": "3KJhWsDZ2GjZCBwh5fk1b66roTvhAnSg6E8BYEpu3rf2idNk437rL2tv2GU2tHYjkfG3k8NMRPD56oDrhtjAJMyn",
  "key16": "4V3oueAdmEppW3bfw8nbG2B28rZ4vifHSUiQ7PFhD3Vx6u7JtGRLotvenWoXsJcfAsmaiiFRnj2DCqFQWJDKYuU6",
  "key17": "3uY24s2aQDokwMMVyBMLidwKTniydDAyAygffXt3jRQo6pg3wAxbUN7mtRDcpuEqK4NteYPm9A6ktuQfiSfoSzgN",
  "key18": "4nZH291C2piRhcSD9htm6rRfT6hfmQEAgdDbLVvqU2bbtJszetQH8L6L1B4g7be5z9M4E13nokiwxbLcugBF6xAw",
  "key19": "25UjXozXeATg3UjUZb6RrcV9Fys8xBw4a1wFJYN7AKHhFeL73t2mFPbdseMZfTHuB7yrdoMUMKjqq1kKLs6yGJUv",
  "key20": "2VKE97Jonu11ooK2CRuhh4biGTDTGQAR9dSuBfYwF571MjogCT8uFcS8rWLJbm7afZTBHV57xMaA1MMHMxBi4Wx",
  "key21": "4zUktKZUYVMe6b8ubFCajLM9CK2XRFFtomxKJAnPmhmgcRZq5j7u9Z7tc6qQ3H89nPPzQa1YMNgsuwAhF7cJYtBQ",
  "key22": "4TxcWmM3HuThJubjx2HphptjdcF1UfvQJsSBmJymrZFzYzF1XjvHqv9cxopVFPw4iVdcYy1ZfBZCn8FivHEANii3",
  "key23": "4gqUkNJ9AM1PcbSGaqixEkjkJxHhq4f1rr9GKQ7p98UywTPtT1r5zNfgyWnoye2ZCrAscU4ukhMUk1VhLhyKSrW3",
  "key24": "tX1EQHuFAdPYKkPZVbWHcSbDyqwfYJyK5rMFQrvG8cLM8fRefNHACqppiZM1WeeLAL32YwujCGBvkPjjcEGgyyU",
  "key25": "4UJkYbseiTS3Pzy1tAzohr5kPSURxCWRihAiEzttztWLYsYZwf3zChNaehpDSZBb1hq9B6jX1SsgaL2jZdY2SpJ3",
  "key26": "4UvAURtvUwVDpUaDj6KeVxyh8ffoxB6tDDfNKDHQzU614mFUS4ULNUFK2aqADc3AN8tdoaj5TLcHuHCvpCsraAub",
  "key27": "4TYDFKcRCWneRQ8hZffYPXKuxXyfn7jY1CvUj9eNesLDWUDbQuex9odZbUXU3BWva1KMsTrcNFRvniN7z9V5Gm8T",
  "key28": "H3iVs5eFYRV8NCj89kQaF9owwx7zJwm47ACxsB7X8jn9S6F6Xrn4GBAHjph1CHBF2xCipPccZjEc5kjawMTs5SZ",
  "key29": "5ZZMjJwG28YamvRiiuvvAbc1HsYynNVJv5UNZ4GDYZCW9ju3JjHbexsrYyrscu4WNYAkc6gRbajV88FhLRVyyamf",
  "key30": "2kCFqahbHsPuEafwq4ytqhRMPXPAfpPNRwT3UUgMHUySdmGABJkRiWYDhGzCLpJpA2smHkoC1JBc1vRvH7b5Gaq8",
  "key31": "4ZrGzxzBTQrJUUbhmC3iEhnRTV5EYGzMy68Xxe3QjxncMVxRjwSechuYcQexW5iw7FKQDPZ7jVwqjvLvB8ypFYij",
  "key32": "47F5uQtSZ7VbguUYm4aXpZTXaH6QKq8TuSR4YhiH4eXcgrd4kRg2vcH2Aj98Psj5ExcJRGhDvTKbxfB72PkXGtZK",
  "key33": "5YV2urnaHpoqesgCpFBvxTv4oHW7wNXZnPzYr7DCpGp6qngKAjdxYUcpwT2N2rTRVL17pX5NC6PXmJuhuAdiGq24",
  "key34": "4QipF2YowYzJvjQkU3RUU3PZbVTjg96xLm7wZXNFBStbZM1NvWVeqTwQa4p6VDLctvPRjomGznAZ2MSgaCn4rFTp",
  "key35": "3zDigmcn4z2ciG7M2BhhgAhBWme8rc5gZDFMTYhAuVafabG8d2rFAtzn2PwjkisDo8pUzS7yaqLk6DUw1JgjARH4",
  "key36": "2BKkE275GwjfFkF63398WKyMkxPihGFFZWEf4G5efXCZT1DfLoLKzVU9cAYWgGJNbETrSr1FcYC2u5SaWiyLrzHo",
  "key37": "4aUeVEsVwZwbTt1qBppTT5nY5yTZejh24W3Yodfd12ed3xK6YobTdNM49wBhRhy5EgUkVXAxy9FZHfiZYYER75Z9"
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

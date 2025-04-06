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
    "666AJe9WCRLzJLEmCjLvsHLku7fLHkbzWfFh6UvNJ39K5tDugqZxbQhoB9BUA4uQ9zVxniLVYpnjveJCCRRcCvty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efFZBznBRyL29THyt95KuPuZLjoCrcRhkBApEPk3Gd1gWES3chibnjCAegGbxZ6femSnw4Y9Eg2EuTWugyhPcaV",
  "key1": "2EFMjLQM3ZBtUZSJcxGgHzeqNfR8Mmr95nRHYSUydK2rL3Z5YRfTxdoS4Ud1pi3bMwMXxY7xmayphA48AEv2Sf4m",
  "key2": "5FSdLb3VgpjCUVzXw2fg11jxYxmUS5T1B8BnJJ6pXaMSdBcm6ZrCwCMtaMPnBwz9jRbWmBtX9bSNMyc2oAKofaV8",
  "key3": "4YmpjTUWNzsW5UP9AtgUnc68hNsKJqF5L555aixzUxuGPNMmZRa9GVvZLzg7CugJFgfGijkQxoNqcWfMVFvXFA2z",
  "key4": "575CNu5UkSFw5s33yq4StyMaLi76krgoRXBqWqf8cmAQiioHhgHwVNMrQbHt82b93fHJfAzmvYsVJkPJSAAh2z9k",
  "key5": "tnGdvoFJHgitEJpgHioR5DhvyMpMCp17YDW4ZzQUvg9zQG7j4DRpNVS9BrXXi4h24NwiC1yQiMnSsomUfzAD1Li",
  "key6": "2QBR6SdJdWA3cbVCqZFvrfcLt9MFrCETdwdTm6sirXDsPCRJrhPFaUVoPwaX6pYy48i2wF62RTm4GWUXHLfuwEye",
  "key7": "4iyMzgTiND3oEmnrZDWg2cNFaud8MJf6jQaAAhvizkt1qGhdxNG1pQkyy1nBVhaKoggh1ryeTLbzr21rmAsBVCPt",
  "key8": "122XJCfe1rwmTMyQhwcFPSn5zPbEoekckDbHDupQGrMquFNA1HHDE5ao2oNrGWvEDBMMXUzEsznhQcSxTnvbr6FL",
  "key9": "44fCKi3NCJrsCxxLbq76sui8M1BoTf4vcwKbEy29aLwY7ZgSMFeqF7P35sjEzvLfTpTM9isGSUS1zKenpXH5eZAR",
  "key10": "52Fm6dfXpqTP9DA5xZ13DHwzTVSXXHMQPqM74d6mFT5oTCCXvvFvfhDRAq4gzUMdsziWYy3NrjYCYT51j1QQYMtw",
  "key11": "grZioLD7sPRN9L39TfKK2NJ3PfYPGasyV3deRh563XpKTh6ob7jHtGthbcyaDYwssxNHMHnzZbFC3jNw1kuzXVf",
  "key12": "2SC3nBrgJnc3LEbEY8MKdYiR55Bp9VmwTMFc4gH33ovaHYkiwLFTZCWc5GNCJDbhyvbAbVXTWYKZDDX17MeL2m8T",
  "key13": "5AbK1PbDtVkFLPdZMHASnCjp4BUY5yaShvPowQRXo9uE42EukSuxPcxXA4K9FzZFqkrgt8e4SV4yXq3Cs2P9vSKt",
  "key14": "2bM1kNweQPRNJmuaWJdqhqTzKFvikyGKqKbK98VtcSD6wi9N1it9r6M7qHFycTzmxCFQJZXLcena4GJjjfk8ezGr",
  "key15": "4UkoACTae4XGfTWY6xsnK8pCGbbbUQMs9ndFbBaYj8V2KVrpj7RzWHSUUJcXhqBK7MXAZ5dK6unExdRzy6e8rSAg",
  "key16": "37YVhkZZnGnuuDmh8Ni4PZF4DngpXeeTro22pP563EfYHXxd5wZQQ5StfagC7J8pFn4CMqyY5mDZgUFHF95bANMG",
  "key17": "SaaxYUx1Bk2gnLbNLPhacPYHQqUwZQAziiNDHP6mU4xJiGGsDmHq5vE9D12t82d8XjTZzHQ3NjoHuB5Yt2pWuNa",
  "key18": "2YQ2wzWPFWN1wsWBjee2grt1xEXj5tyPVdLSyD9RovrynQcVjrwLEXEsXAvEkTPrAipjS4JupNygSG3VHhCLwpUx",
  "key19": "5QgjN4SpM1wKaStZfexkFEB6mUTe6D8TtfXaKME9UT1VbCGjmi3TUYtsYnXzggAC3fPybzAZ7RFR5Sa7tT87Q3Eu",
  "key20": "uYpp9ncn7ruQ6VNNMK3QMjNnDsWyHb17VjvVeDwymb5jxLHtCMsJLxfmSjwoZtQj2H25U4JJhhp5Ud6fVcF8nc7",
  "key21": "2KEw3sjgQgyEi61hYgcp2Z1g8eKs67oXrkhnKMmhReec2cb7jKxxzzsbSdH94ojCr9gRotpYFRZjdLZ1dAEKwmV3",
  "key22": "eZMe13hvyEZY6pLRW4eRCKyrBrvuxUmTAQABJaARksAcrsgqENozT7PruHLrEpY1kCKCzPWwHsbPLViZ9WSH9wT",
  "key23": "GGfRt83o487v7DyrG51Hwuw2EnkWPNhSZPWhEznaxb9Jn7gXpheNdPHrgPJR6STMr2cuVKskqnNM5cKAnFnGNeY",
  "key24": "639NMhuWCc5grUsgyML2okCetRs3xbF5pgTN38pyxaTTLx18V4TfqrFegC7CmubnkDX7zursiq7rgquQhyMQmE1C",
  "key25": "3pKQymKYieQzjk1P1LbYVZxvuGfeAZG1NJTHQu5PuA1AookLnzexK4FZouhzbiqggKzYeYYRHFRiKyxsWLWfvqJq",
  "key26": "di5DdnZBKsScNFaGa1smdPKHRb86Rc76yGggUVkacSJxoYCgZZS1DzFTdUeC5k4CDtyiN8u8V6wi4Udi9J329wy",
  "key27": "5DnEbtVpupei1WsQh5FZDa6EPKK7dE1cPCU55MN1XWakBgyaDmjPUzZJkGPwLuBd8EAe4zy6E1u4n41UmUnJAEud",
  "key28": "4Jz7FHUTVpcaHHdHLTZBEeEadDPEzNHXZEKNM2waze2iCpKGshHtwMa3MbtG8seHAiPYKqacXcvSw9kFytZXNX4H",
  "key29": "5S2yUzdQKxecho6tuMRqwcZWF4VHpr37zX2zGVFVRNDqmRHsAhZT1jPfFwKi5z6etEEKuvMeVTFCnGWU9Vbw8kRj",
  "key30": "51B5SJTeNYi2VbRtnAWjwPB59Et6Rcj1tcrTTbXs33xgYgwPmgPLVDPnZez64jP2R1DrqdMLzkwqmwQeWk8Cqfh4",
  "key31": "3Nc5TjnXYSW5DnXFUgK11NB2gKHxv4Q76T4nbpk7WnoLrc2RVNUK4L6hpvnSewftvN21ihy4df93UXKxCKDKR7Cu",
  "key32": "2WhLZeEnmyZwjLoMKswoLRf5ea8kGTzzRyE7uaRmKspMECaUk2HBPnTjSJxnFtmNDqGPkt5VYpjuEQ7AX3mNDUET",
  "key33": "44fzdbBgFRMaftRFWV1E6irKYGst7CrW9Vrvinyst9r7peqSxoQdj3yKftk6f88LRFfp42ByPjr1Tv9GzBv5VB28"
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

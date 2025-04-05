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
    "53tveCaU8KprfFSXi5EjT8HWYUkSVqK98vV41ndR54ZVaQxjkVrC7ymwhzPDEscb1e7QNvxJKiDW6om45tizt9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WMUr6PMxeZ5PB8TnRsTvH9sTrTpCUkwokmmt4MvwMZvrsXciupg3shwDAs6Dwd1hiKWeXC2AJGS9LHRc2H8EpAj",
  "key1": "2pdMrU3m2J1mRxkqqkqaQAFLrth8C2kmNEpdgkKVTKUxDiHNVFmFdCA1DeyX4yqNLw9NdrtSG5pMnufegerpkaua",
  "key2": "2YrrPvCFrcKZMxmya6DAwSiMAjEGyc4gXphU76korZFjeYxoq7VD5EPn3cS6GCDd3HDYgauTRMjASCxCHKRsbu4h",
  "key3": "h5549ua9vzaq1gfBVcQqmE47JqCWzXfKzXKbhLrsaJbA9rPmSfEKdpBbfyyrFxjkTqimxeqex1RNr9artKqaE4B",
  "key4": "2tbq8ThEFupLXaxPgaBKTbquHvDpHdSKQG3Ps4W5SiQq1NPHeTWdTngJDihoqhbNuxsXGog3bc7cwyBUH9U64prS",
  "key5": "4XY81k6KdEb79UycoHzCoibqR6wrPNqAswYMoxWh3b8fbgcWL326W3AyLNWSkb7ckmVn5HKhiM4gjJxKuKmPhJua",
  "key6": "5mfmpt53XRsKcMptXdxtvaxuofbk4kCrbmSmDtMCt1dS6wcLUXCFCEKtfQKkwh6r6Mvvc3ZAGnnfEv3xrCpxZ66F",
  "key7": "5N6RXVFaFAzvHP1hTtqtbUhckc7CB2ixnbq1ToFSLQKQ9AEbbyz4xHeozaXFESeoQBNuC5pXdMCrGRxrTCavLopc",
  "key8": "2fDj9mbuwLGknf1ELkwNesQkbxrvFy125CE2FTTb8jcdeYKKN9rf3UrXaqwdiiQwj145ArRsKPMt8Zy9jPrNzJke",
  "key9": "qrAUh5DA9KudGrKKsZ4mry6rxARK8rVA7ALkW2gwJgmUNA6AzLTSfp3RUuM25JFm79AWw9xn5xmCkF6TAPG3jHu",
  "key10": "33znc1uB7e9LfcSgjmi6ewfoK5CSbLJkLLQRMPG1WEmEp7u841irPYDfAvpCNGMdjnQ3Nu9xPuFgMuk2TcybpvSU",
  "key11": "4ajw8DcUKuaJH8MwubzRKpCYcnnLEpYhRaRhaDiXUbnEQ3yumgnf4tjEiSVqyFJjWk7i1TyfACHuUFU353XJXdpa",
  "key12": "9pxwBEd32ca2acwdM689Q9Qbq7pWg5JvHCk9dzhqWUKiZZmgG6cca6c97Yu5Chu3w27MNeSyQp2bi12ooTQ4RKc",
  "key13": "587jkbfbVUqaFLJApPCw6UdCymZ4GPNbbhBU8ynBvWwyBmquQZ1wAHjQZLpr3p7R9Kygn7C64WcvHnNdghWmAU2q",
  "key14": "3axK5SDaKoW75xPx8JJraJiyZLbb1immVHYp8KduyPVSyqkt6zot43Thj9P4StjMrTejNcGxAUpuwK7X8x3dmpNM",
  "key15": "3TSCA7Q7Bin1WkNBkkoBKNxiKxDDKhSW55T64qwkeyKqMZie1xsZZLTttdTzueBhdjx65qndD8KS5CuJXgPRow4y",
  "key16": "2L7Xs9ZurX8EyANZwVbZgv3XirnEtEfe3a1xPfptgZ1s3qcgy6C3msEtzffraga8RcYVwNaUfAbAEdYgnH9mm3b7",
  "key17": "4JT9QomyCa6jeppsXSnhGFjqG5KsKgqxWegzDuozt68FTMyn9Y2tTx2EpogznzSbYpfkNsZyvfTFxH94sDKhYegz",
  "key18": "4dcV4eY4qiWE67dD6774hemMJtEN8PXZy4jy9wpvuAr9V7kPZUBwDMun6Xzf9UNp7sh8bdx8v5i7bJEXXYn1Zahr",
  "key19": "2StjUT2TaToJZM6SiYTWfbw5hHdKHk4qLYQ14oLahHPsbfgM6yQwEbLsN7tCzjKMyzK3QiVK2nzh7PeYKvFgsqve",
  "key20": "34aoApTrjNnveGu1YoFLwd8AHCjUA2U5zoHT8y9ivFVzfbrPjCmPWagsWdHECJ8u7AyM9uLFF5xqhj7SusHweFxQ",
  "key21": "s4RSigc6iumEqrjT6WXanczy1ycgpsCpSnMWw4kURMCmqnq6KrozUANgD1hdC4KsxuSSUyQk4L8Es7rAgVNoBz7",
  "key22": "4nQuacJaqE9L1CKXQqHqMPtk776VNWn4iAsd4QvvYCDj7bmnE9Je8xbXT4F3KSFwrxAakSE6sRjE6cTipjRKEpoh",
  "key23": "3UY4rxki7Xm1bBasK8Jaazkuxxe4tixZ12huuYCnrAPFRYqDQ6acMmxDFyckrgPXJwH3YVfAgtkXZCBb9mcQxUq6",
  "key24": "4XR8pJW6s4C55vMqPVzAcuRQtJh1iwQxdw5avrSraZUYqFMDN4C1cyhzmcJ5WDrjA2VLw5LxrQpXy3WeDSr6vLNT",
  "key25": "4HYPCACS1RJzvq6Qu2HCywbjPL9WNKkVTxRuA3ZqaXFbcPrkh68UrN9EyoHtC6a4LELpc1eCMZzzjt8A3kzCfTRX",
  "key26": "45kYVXCzdVkrTP5LS9biT4XjiLx5RZHvyyPY7oi5Hse2EouuiGKedhGo8MuFkMbAueRN2KCHZ1t2QwL7QeNLyGuY",
  "key27": "2gpxU53ELpjiMvoHtk7gQjm2WCLfFHmu9dcP33YyoFDYZxwFj8BNHXjjMThvdGczkhuwXRr2nwTQKT5g19AHvKRu",
  "key28": "4CDiB4hbbeVsWF7WdcnPhDAE7bMcDfcoJRdM4PGhgEXcbLRWNXM5vPwSKUYLWwd2VVFremnqA3qEaoQPdMYsKUXS"
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

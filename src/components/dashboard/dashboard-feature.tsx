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
    "4dX4PpGVMWPwfmgrZB3oS3FRwojqnxgM5qYdcHoPmxiPtWfPYyYzNcf1iK2FbK3b8BPf1osEhLuBGtaxmRUK3a7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cKm1Y8n29mXSGAn8ZPYukA6cBNCfeQXnAK967kYUtYQW5rUicp9PHCpvqwyDf2Skb2EZgUWw4LdevrXnh8ccyG",
  "key1": "1KnL65mnqs6f3G1rK3seeu33ryobWbkyNBt71xkZeGQrY6CaicYs2gMDcyonBbsc2gYXyDxKVntb4TB3LMhBoC",
  "key2": "3AdBGFNbt3kovJcMGtTieEgUvDsuBR247ViCjLE8aLwNyrND22xYu22D9bANkUu75mcz7Q53H4MCpgp6H5mLxGkj",
  "key3": "632YMgH7dNmqpvMAnbfB8cN2iKL2kmQ9vEmPKMhwTNrJVR3NS6SQ8fGQWQmk3nzWfpZfw9dmAk1ceeMyoZ2eBL1A",
  "key4": "2Syya3kgKNjJ47V1bJ45fLBDY2QSUdfoGoZVPDaU8NE71Qf3ZXgkCxY4T8QaHzejCXTZZZhUVYDmpSvoAKx5U1jT",
  "key5": "3vMNqrHfhSyoQCBaTtFHKeHwZaKqfRid5eTE1oCKDLHaZq7vvWuFjwaptUq8dHR94eYEY31VG6KgUARkU9CiGMwN",
  "key6": "249E2CJuiy8k5cZU5Zx8eKtttjDkNpfqcFjJHTj1ETCVVmPWMtdcHFVcTax6K44qTqpUnepQfAsfDC1rZfaYzHyp",
  "key7": "JsTUFBUa7pbU3jmrhTftj9PrPWmQj7EfbasspxfMcuWjSi6bwbckSSDHJL4rBAYVCxw32vDxAouXBHZMWRGYKnw",
  "key8": "3Cexz5t4hLVE7QsJsL8AHHvhQdZPQmi51Mo43MqxWTDVw16KhwBX9y9mAoMi167pXnZX7HLqPDdehZW8ey2KUZTH",
  "key9": "sMbpYZSdEYrVCJj7gGt6DbXwHmeFXN3eBm1q1UUNnyRdQhyXZobNnwZq7TacbCJeVed8J2fLp62LGPEfD5cxZZu",
  "key10": "21owfiZUwrgU4t7bWYJU3s9x4QGgVPxVDeh2i5RbdHPqEGv2YvXHNSW4a1szetQ5zqjPuY1NW64ougMLPajAaT47",
  "key11": "2WpBoigEGU919Zh6tR3Zae2sphwJzaQX3x9F8GTKsi5k6PUZknNcoHuhQmWNDh52vW1EBjkhrpU4Cbxekhb3ypVK",
  "key12": "522Xjw8GbzTm33DXyqSkL9fdVQEYQMjaccBiYp5fcsk6HvTBQTFMqwGCffTfLtp2XZu3CdqSriu6VPJ7GngBNmHW",
  "key13": "4az4GjLxcQJF9TUUpnoYmWANSahdB6ouddAqxCwzoSFDZQL1wvgVQLYFP5uZ6itV2UkbHVLZDUJtbXPXn7Sddjqc",
  "key14": "5Em3j58y1ppxM4U1aNJBDwEjARpaZDR45kfRiQXi21wdTaXf39y99pidStwMLWLorL7qFJJ4SwEt3xnPcNjf7YhK",
  "key15": "121dgd8cwZBcT2nABAZJiEgGtM5rxFUEdYwGUrbiAs3PxD5o9pBfNofbzwydYNcyi7BQ5EZymXtaaikbT8NV1X7k",
  "key16": "2DAfrc5o6eGfjcrY9YLeXXbFw8pke18ES5ogBmBiBFnGtgn8Wfxy2KfPJ6fpzTzUfHxjkrFia3abxQTpTKeE7wPv",
  "key17": "2SA65Bhu8ri2K2sH55siSmrjS9V6KxVaMxQ9ZCKugdUABkS8RSZ5YhCsbxyyzLyjKHLpnmJtGushUD65nbuifZgC",
  "key18": "2nT9Sn8kyUKUc9W2E4afWu6fEnpn2W6cVTmrWgHRzL9MfvoGppSm4PqQBNeV2AYtFoRbW5qfe6LMW18aMgWpHQug",
  "key19": "3PqKJbUZ6WrnXiPyAd2b6HwtSiu17YbFFfUhxTGCXiiehjFxE4AtFbFiytk4VPkDHNzE7eAWTSBXLAxfDucEyc6m",
  "key20": "3u3rHydevVx9xYk89sBvSswrmmDapcSgqwSn89Ed71vnmCsoGUB3fpvDwbRNEDCM7UkufyiELVj4Ey2MxT9ms3c1",
  "key21": "3eC5PX8bY1skbvSMrGwbUgjZhhAbaG16ws4XCHzxAuQ3GnTT3MSpnqWhzVZj9Merv9drwUKe1Q7VoSfq6o1gvfds",
  "key22": "4AcQEkbi325MnohBo6xG3sootRuV1E46B478v5WuTXNsSUKnaiszpPJvWTRCFnScPzorYCsE8aT6Qkg7UciZPkwK",
  "key23": "2QxbNTFvtexCn2ueTntj7rDwKnaBdV7XLKJFZLBayJeN6xqjM17K4fXq8cC1GHpHc8xV8tuiXxqiG4TXBw3qpXic",
  "key24": "2djSaptZPUX5UJ3Bsa2M7ai1HdQwsr62PtQaHoEyPZQRC3dKbPikzoo6G4ejGyjfDAEuxsb4N9ucf3BKV2q5Nsji",
  "key25": "V6qBDjgL5fT21LjmvkcQ6YV21j4Frm4TDAuUswdWbDDwALHN1f2EtFeudsPsgwvTfRQC8ArrXVMfFBwpQnu8XST",
  "key26": "um7HN3Wd63U1N6uXWtFSabCYQ6Y23ZNyE7zQsnmyWCBcbM4xPS6VQKU5xmq1MjMe9YH95B1a6ppcdRkf2DD7aax",
  "key27": "WNeJquc96wbzUppaJ96kYoqJDEPpyy9m5sBBePmUYYgiMKeWaYjZbz7u62SpDUbBP3rBC2598swkSEfeYAuQR9r",
  "key28": "2Smp1SZydnTWnvbwSzoTqpxP7pcFwKtaNqu4yZQ9wJzq6ukmBJEhgPWzmnTCRBDJdpZABBvuhvu5zRMVg59nGHrG",
  "key29": "nRGcgs4WfjA8ecgvqAEm54H3fekV11tfVUtzhhopdsBCUWRH31f2pMGsTqMETnLiN6S7AY5aWvJFnKN9fbcwobU",
  "key30": "5gmfriCpkb5EgmQ6domMyo2pDaVTHF4hgnaQ8568mKq7A1cHRKeCH5srAjsmq18aVJh58HTDsQ4JHQ4wiycYnNUA",
  "key31": "3F2R4wtxrMjpnJ4tS2P7NmoZbfh4q8oR4MFamDUC8R4DjnPjXj49RvCB2Ra12mudw714W7W6aL5er8WNg8deFCvw",
  "key32": "3Qf8G9Wf4LYgdkjnUZg6Z1sbBYwDx6t2ZwZV5BU7fvx22Knt5Ngq1xNEM2aGiFwGTVXnebcMj7VmDasEdDc26pbD",
  "key33": "2kYgw1pCJZXqnGGE5qcyeNY2U28scBCjqqN2wi7Uw6GnjirXtoA93kKXwskoDn9MQQCtkBqa53GsHditkfyQGbwr",
  "key34": "4p7W93hw2CMLhhnsZKjvPPzzFJbYr7RJ3RA1TZqQyxD3coXyBqaJ8Ktn4ZtHjkHjezn928pCcNbBpEMPf9sBmyBk",
  "key35": "4pC4UHPHyeozWwTppHYhrQto6eBZu7XjzB79jqYqsdZinhdFuu3M95i7yUZ7GZUrndzxeus4FcEXcguKNHLS9T7y"
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
